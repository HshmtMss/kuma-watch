"use client";

import { useCallback, useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

type Health = {
  source: string;
  count: number;
  latestDate: string;
  ageDays: number;
  recent90: number;
  prev90: number;
  archived: boolean;
  status: "ok" | "slowing" | "stale" | "archived";
};
type Data = {
  today: string;
  totals: { records: number; sources: number; hiddenInconsistent: number };
  health: Health[];
  churn: {
    count: number;
    byChannel: Record<string, number>;
    medianLifetimeDays: number | null;
  };
};

const STATUS: Record<Health["status"], { label: string; cls: string }> = {
  stale: { label: "停止", cls: "bg-red-100 text-red-800" },
  slowing: { label: "鈍化", cls: "bg-amber-100 text-amber-800" },
  ok: { label: "正常", cls: "bg-emerald-100 text-emerald-800" },
  archived: { label: "年度完結", cls: "bg-stone-100 text-stone-500" },
};

export default function AdminOps() {
  return (
    <AdminShell active="ops" title="運用">
      {(secret) => <OpsView secret={secret} />}
    </AdminShell>
  );
}

function OpsView({ secret }: { secret: string }) {
  const [data, setData] = useState<Data | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [showArchived, setShowArchived] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/ops", {
        headers: { Authorization: `Bearer ${secret}` },
      });
      if (!r.ok) throw new Error(`取得に失敗しました (${r.status})`);
      setData((await r.json()) as Data);
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    }
  }, [secret]);

  useEffect(() => {
    void load();
  }, [load]);

  const problems = data?.health.filter(
    (h) => h.status === "stale" || h.status === "slowing",
  );

  return (
    <>
      {err && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{err}</p>
      )}
      {!data ? (
        <p className="text-sm text-stone-500">読み込み中…</p>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Tile label="収録レコード" value={data.totals.records.toLocaleString()} />
            <Tile label="ソース数" value={String(data.totals.sources)} />
            <Tile
              label="取り込み停止"
              value={String(problems?.length ?? 0)}
              alert={(problems?.length ?? 0) > 0}
            />
            <Tile
              label="不整合で非表示"
              value={String(data.totals.hiddenInconsistent)}
            />
          </div>

          <section className="rounded-xl border border-stone-200 bg-white p-4">
            <h2 className="text-base font-bold text-stone-900">
              データソースの健全性
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-stone-500">
              最新の出没日からの経過で判定。60日以上を「停止」、直近90日が前の90日から
              半減したものを「鈍化」とする。年度で完結する過去データは「年度完結」として
              分けている（止まっていて正常なので警告に混ぜない）。
            </p>
            {problems && problems.length > 0 && (
              <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">
                {problems.length} 件のソースで取り込みが止まっています。公開元の
                URL 変更・年度切り替わり・仕様変更が原因のことが多いです。
              </p>
            )}
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                    <th className="py-2 pr-3">状態</th>
                    <th className="py-2 pr-3">ソース</th>
                    <th className="py-2 pr-3 text-right">件数</th>
                    <th className="py-2 pr-3">最新の出没日</th>
                    <th className="py-2 pr-3 text-right">経過</th>
                    <th className="py-2 text-right">直近90日 / 前90日</th>
                  </tr>
                </thead>
                <tbody>
                  {data.health
                    .filter((h) => showArchived || h.status !== "archived")
                    .map((h) => (
                      <tr key={h.source} className="border-b border-stone-100">
                        <td className="py-1.5 pr-3">
                          <span
                            className={`rounded px-2 py-0.5 text-xs font-bold ${STATUS[h.status].cls}`}
                          >
                            {STATUS[h.status].label}
                          </span>
                        </td>
                        <td className="py-1.5 pr-3 font-mono text-xs">{h.source}</td>
                        <td className="py-1.5 pr-3 text-right tabular-nums">
                          {h.count.toLocaleString()}
                        </td>
                        <td className="py-1.5 pr-3 tabular-nums text-stone-600">
                          {h.latestDate}
                        </td>
                        <td className="py-1.5 pr-3 text-right tabular-nums text-stone-600">
                          {h.ageDays}日
                        </td>
                        <td className="py-1.5 text-right tabular-nums text-stone-600">
                          {h.recent90} / {h.prev90}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={() => setShowArchived((v) => !v)}
              className="mt-3 text-xs font-semibold text-stone-500 underline"
            >
              {showArchived ? "年度完結を隠す" : "年度完結も表示する"}
            </button>
          </section>

          <section className="rounded-xl border border-stone-200 bg-white p-4">
            <h2 className="text-base font-bold text-stone-900">解約（継続率）</h2>
            <p className="mt-1 text-xs leading-relaxed text-stone-500">
              以前は解約時に購読レコードを物理削除していたため継続率が算出できません
              でした。記録を始めたのは最近なので、当面は件数が少なく出ます。
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Tile label="直近180日の解約" value={String(data.churn.count)} />
              <Tile
                label="継続日数の中央値"
                value={
                  data.churn.medianLifetimeDays === null
                    ? "—"
                    : `${data.churn.medianLifetimeDays}日`
                }
              />
              <Tile
                label="内訳"
                value={
                  Object.entries(data.churn.byChannel)
                    .map(([k, v]) => `${k} ${v}`)
                    .join(" / ") || "—"
                }
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function Tile({
  label,
  value,
  alert,
}: {
  label: string;
  value: string;
  alert?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${alert ? "border-red-200 bg-red-50" : "border-stone-200 bg-white"}`}
    >
      <div className="text-xs font-semibold text-stone-500">{label}</div>
      <div
        className={`mt-1 text-xl font-bold tabular-nums ${alert ? "text-red-700" : "text-stone-900"}`}
      >
        {value}
      </div>
    </div>
  );
}
