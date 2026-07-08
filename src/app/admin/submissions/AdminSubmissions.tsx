"use client";

import { useCallback, useEffect, useState } from "react";
import AdminSubmissionsMap, { type MapItem } from "./AdminSubmissionsMap";
import AdminShell from "@/components/admin/AdminShell";

/**
 * 市民投稿モデレーション画面 (合言葉でログイン)。
 *
 * - ステータス絞り込み: 承認待ち / 公開中 / 却下 / すべて
 * - リスト表示 / 地図表示の切替
 * - 承認 / 却下 / 削除 (あとから何度でもやり直せる)
 *
 * server コードを client に取り込まないよう、型はこのファイル内で定義する。
 */

type Situation = "sight" | "trace" | "damage" | "injury";
type Status = "pending" | "approved" | "rejected";

const SITUATION_LABEL: Record<Situation, string> = {
  sight: "目撃",
  trace: "痕跡",
  damage: "物損被害",
  injury: "人身被害",
};
const SITUATION_STYLE: Record<Situation, string> = {
  sight: "bg-amber-100 text-amber-900",
  trace: "bg-stone-100 text-stone-700",
  damage: "bg-orange-100 text-orange-900",
  injury: "bg-rose-100 text-rose-900",
};
const STATUS_LABEL: Record<Status, string> = {
  pending: "承認待ち",
  approved: "公開中",
  rejected: "却下",
};
const STATUS_STYLE: Record<Status, string> = {
  pending: "bg-amber-100 text-amber-900",
  approved: "bg-emerald-100 text-emerald-900",
  rejected: "bg-rose-100 text-rose-900",
};

const TABS: { key: string; label: string }[] = [
  { key: "pending", label: "承認待ち" },
  { key: "approved", label: "公開中" },
  { key: "rejected", label: "却下" },
  { key: "all", label: "すべて" },
];

type Submission = {
  id: string;
  lat: number;
  lon: number;
  occurredAt: string;
  headCount: number;
  situation: Situation;
  status: Status;
  comment?: string;
  contact?: string;
  photoUrl?: string;
  photoLat?: number;
  photoLon?: number;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  receivedAt: number;
};

// 2点間の距離(km)。写真の撮影位置とピン位置のズレ確認用。
function distanceKm(
  aLat: number,
  aLon: number,
  bLat: number,
  bLon: number,
): number {
  const toR = (d: number) => (d * Math.PI) / 180;
  const dLat = toR(bLat - aLat);
  const dLon = toR(bLon - aLon);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toR(aLat)) * Math.cos(toR(bLat)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
}

type Decision = "approve" | "reject" | "delete";

function fmtDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

export default function AdminSubmissions() {
  return (
    <AdminShell active="submissions" title="投稿モデレーション">
      {(secret, deauth) => (
        <SubmissionsContent secret={secret} deauth={deauth} />
      )}
    </AdminShell>
  );
}

function SubmissionsContent({
  secret,
  deauth,
}: {
  secret: string;
  deauth: () => void;
}) {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [status, setStatus] = useState("pending");
  const [view, setView] = useState<"list" | "map">("list");
  // 一括操作の選択状態（リスト表示のチェックボックス）。
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const load = useCallback(
    async (st: string) => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/admin/submissions?status=${st}`, {
          headers: { Authorization: `Bearer ${secret}` },
          cache: "no-store",
        });
        if (res.status === 401) {
          deauth();
          return;
        }
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { submissions: Submission[] };
        setItems(data.submissions ?? []);
      } catch (e) {
        setError(
          `読み込みに失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setLoading(false);
      }
    },
    [secret, deauth],
  );

  useEffect(() => {
    load(status);
  }, [load, status]);

  const moderate = useCallback(
    async (id: string, decision: Decision) => {
      if (decision === "delete" && !window.confirm("この投稿を完全に削除します。よろしいですか?")) {
        return;
      }
      setBusy(id);
      try {
        const res = await fetch("/api/admin/submissions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${secret}`,
          },
          body: JSON.stringify({ id, decision }),
        });
        if (!res.ok) throw new Error(String(res.status));
        // ステータスが変わると現在の絞り込みから外れるので再読込
        await load(status);
      } catch (e) {
        setError(
          `操作に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setBusy(null);
      }
    },
    [secret, status, load],
  );

  // 選択中の投稿を一括で承認/却下（削除は誤操作防止のため一括対象外）。
  const bulkModerate = useCallback(
    async (decision: "approve" | "reject") => {
      const ids = [...selected];
      if (ids.length === 0) return;
      if (
        !window.confirm(
          `選択した ${ids.length} 件を${decision === "approve" ? "承認して公開" : "却下"}します。よろしいですか？`,
        )
      )
        return;
      setBusy("bulk");
      try {
        for (const id of ids) {
          const res = await fetch("/api/admin/submissions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${secret}`,
            },
            body: JSON.stringify({ id, decision }),
          });
          if (!res.ok) throw new Error(String(res.status));
        }
        setSelected(new Set());
        await load(status);
      } catch (e) {
        setError(
          `一括操作に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
        );
      } finally {
        setBusy(null);
      }
    },
    [selected, secret, status, load],
  );

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const changeTab = (key: string) => {
    setStatus(key);
    setSelected(new Set());
  };

  const mapItems: MapItem[] = items.map((s) => ({
    id: s.id,
    lat: s.lat,
    lon: s.lon,
    situation: s.situation,
    status: s.status,
    headCount: s.headCount,
    occurredAt: s.occurredAt,
    prefectureName: s.prefectureName,
    cityName: s.cityName,
    comment: s.comment,
    photoUrl: s.photoUrl,
    photoLat: s.photoLat,
    photoLon: s.photoLon,
  }));

  return (
    <>
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={() => load(status)}
          disabled={loading}
          className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-50 disabled:opacity-50"
        >
          {loading ? "更新中…" : "更新"}
        </button>
      </div>

      {/* ステータス絞り込みタブ */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => changeTab(t.key)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              status === t.key
                ? "bg-stone-900 text-white"
                : "border border-stone-300 text-stone-700 hover:bg-stone-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* リスト / 地図 切替 */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-stone-500">{items.length} 件</span>
        <div className="inline-flex overflow-hidden rounded-full border border-stone-300">
          {(["list", "map"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`px-3 py-1.5 text-sm font-medium ${
                view === v
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-700 hover:bg-stone-50"
              }`}
            >
              {v === "list" ? "リスト" : "地図"}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="mb-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">
          {error}
        </p>
      )}

      {items.length === 0 && !loading && (
        <p className="rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          該当する投稿はありません。
        </p>
      )}

      {view === "map" && items.length > 0 && (
        <AdminSubmissionsMap items={mapItems} onModerate={moderate} />
      )}

      {view === "list" && (
        <>
          {items.length > 0 && (
            <div className="mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm">
              <label className="flex items-center gap-1.5 text-stone-600">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selected.size > 0 && selected.size === items.length}
                  ref={(el) => {
                    if (el)
                      el.indeterminate =
                        selected.size > 0 && selected.size < items.length;
                  }}
                  onChange={(e) =>
                    setSelected(
                      e.target.checked
                        ? new Set(items.map((i) => i.id))
                        : new Set(),
                    )
                  }
                />
                全選択
              </label>
              {selected.size > 0 && (
                <>
                  <span className="text-stone-500">
                    {selected.size}件選択中
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => bulkModerate("approve")}
                      disabled={busy === "bulk"}
                      className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                    >
                      一括承認
                    </button>
                    <button
                      type="button"
                      onClick={() => bulkModerate("reject")}
                      disabled={busy === "bulk"}
                      className="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-50"
                    >
                      一括却下
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected(new Set())}
                      className="rounded-full px-2 py-1.5 text-xs text-stone-500 hover:bg-stone-100"
                    >
                      解除
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          <ul className="flex flex-col gap-4">
            {items.map((s) => (
            <li
              key={s.id}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              {s.photoUrl && (
                // 管理画面のみで使う確認用画像。最適化不要なので素の img を使う。
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={s.photoUrl}
                  alt="投稿写真"
                  className="max-h-72 w-full bg-stone-100 object-contain"
                />
              )}
              <div className="p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selected.has(s.id)}
                    onChange={() => toggleSelect(s.id)}
                    aria-label="この投稿を選択"
                  />
                  <span
                    className={`rounded-full px-2 py-0.5 font-semibold ${STATUS_STYLE[s.status]}`}
                  >
                    {STATUS_LABEL[s.status]}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-semibold ${SITUATION_STYLE[s.situation]}`}
                  >
                    {SITUATION_LABEL[s.situation]}
                  </span>
                  <span className="text-stone-500">頭数 {s.headCount}</span>
                  <span className="tabular-nums text-stone-500">
                    発生 {fmtDateTime(s.occurredAt)}
                  </span>
                  <span className="tabular-nums text-stone-400">
                    受信 {fmtDateTime(new Date(s.receivedAt).toISOString())}
                  </span>
                </div>

                <div className="text-sm font-semibold text-stone-900">
                  {s.prefectureName || "—"}
                  {s.cityName ? ` ${s.cityName}` : ""}
                  {s.sectionName ? ` ${s.sectionName}` : ""}
                </div>

                {s.comment && (
                  <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-stone-700">
                    {s.comment}
                  </p>
                )}

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                  <a
                    href={`https://www.google.com/maps?q=${s.lat},${s.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    ピン位置を地図で確認 ({s.lat.toFixed(4)}, {s.lon.toFixed(4)})
                  </a>
                  {s.contact && <span>連絡先: {s.contact}</span>}
                </div>

                {s.photoLat != null && s.photoLon != null && (
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
                    <span className="rounded bg-stone-100 px-1.5 py-0.5 font-medium text-stone-600">
                      📷 写真の撮影位置
                    </span>
                    <a
                      href={`https://www.google.com/maps?q=${s.photoLat},${s.photoLon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      {s.photoLat.toFixed(4)}, {s.photoLon.toFixed(4)}
                    </a>
                    <span className="tabular-nums">
                      ピンから{" "}
                      {distanceKm(s.lat, s.lon, s.photoLat, s.photoLon).toFixed(2)}
                      km
                    </span>
                  </div>
                )}

                <div className="mt-2 font-mono text-[10px] text-stone-400">
                  ID: {s.id}
                </div>

                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => moderate(s.id, "approve")}
                    disabled={busy === s.id || s.status === "approved"}
                    className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:bg-stone-300"
                  >
                    承認して公開
                  </button>
                  <button
                    type="button"
                    onClick={() => moderate(s.id, "reject")}
                    disabled={busy === s.id || s.status === "rejected"}
                    className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40"
                  >
                    却下
                  </button>
                  <button
                    type="button"
                    onClick={() => moderate(s.id, "delete")}
                    disabled={busy === s.id}
                    className="ml-auto rounded-full px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 disabled:opacity-40"
                  >
                    削除
                  </button>
                </div>
              </div>
            </li>
          ))}
          </ul>
        </>
      )}
    </>
  );
}
