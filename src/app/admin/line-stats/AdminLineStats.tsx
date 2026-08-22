"use client";

import { useCallback, useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import DispatchLogTable, {
  type DispatchRow,
} from "@/components/admin/DispatchLogTable";
import RegistrationHistoryChart from "@/components/admin/RegistrationHistoryChart";

/**
 * LINE 登録状況ダッシュボード (合言葉でログイン)。
 *
 * 自治体 (muni) / 観光地 (spot) ごとの LINE 登録者数を一覧する。Web Push の
 * /admin/push-stats と同型で、データ源だけ LINE。自治体・観光地へ
 * 「御地域は N 人が LINE 登録しています」とアプローチする営業材料に使う。
 *
 * 認証は push-stats / submissions と同じ ADMIN_SECRET を Bearer で送る方式
 * (sessionStorage キーも共通なのでどこでログインしても行き来できる)。
 */

type MuniRow = { pref: string; city: string; count: number };
type SpotRow = { slug: string; name: string; pref: string; count: number };
type GeoPrefRow = { pref: string; count: number };
type HistRow = { date: string; totalUsers: number };

type LineStats = {
  totalUsers: number;
  activeMuniCount: number;
  totalMuniSubscriptions: number;
  avgMunisPerUser: number;
  topMunis: MuniRow[];
  activeSpotCount: number;
  totalSpotSubscriptions: number;
  topSpots: SpotRow[];
  totalGeoPoints: number;
  topGeoPrefs: GeoPrefRow[];
  history?: HistRow[];
  dispatchLog?: DispatchRow[];
};

function downloadCsv(filename: string, rows: (string | number)[][]): void {
  const esc = (v: string | number) => {
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = rows.map((r) => r.map(esc).join(",")).join("\n");
  // Excel が UTF-8 を正しく開けるよう BOM を付ける
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminLineStats() {
  return (
    <AdminShell active="line-stats" title="LINE登録状況">
      {(secret, deauth) => (
        <LineStatsContent secret={secret} deauth={deauth} />
      )}
    </AdminShell>
  );
}

function LineStatsContent({
  secret,
  deauth,
}: {
  secret: string;
  deauth: () => void;
}) {
  const [stats, setStats] = useState<LineStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/line-stats?top=200`, {
        headers: { Authorization: `Bearer ${secret}` },
        cache: "no-store",
      });
      if (res.status === 401) {
        deauth();
        return;
      }
      if (res.status === 503) {
        setError("LINE 基盤 (Upstash) が未設定です。");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as LineStats;
      setStats(data);
    } catch (e) {
      setError(
        `読み込みに失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    } finally {
      setLoading(false);
    }
  }, [secret, deauth]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={load}
          disabled={loading}
          className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-50 disabled:opacity-50"
        >
          {loading ? "更新中…" : "更新"}
        </button>
      </div>

      {error && (
        <p className="mb-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800">
          {error}
        </p>
      )}

      {stats && (
        <>
          {/* サマリタイル */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Tile label="実登録者数" value={stats.totalUsers} unit="人" />
            <Tile
              label="登録あり自治体"
              value={stats.activeMuniCount}
              unit="件"
            />
            <Tile
              label="登録あり観光地"
              value={stats.activeSpotCount}
              unit="件"
            />
            <Tile
              label="1人あたり登録地域"
              value={Math.round(stats.avgMunisPerUser * 10) / 10}
              unit="地域"
            />
            <Tile
              label="地図の任意地点(geo)"
              value={stats.totalGeoPoints}
              unit="地点"
            />
          </div>

          <RegistrationHistoryChart
            points={(stats.history ?? []).map((h) => ({
              date: h.date,
              value: h.totalUsers,
            }))}
            color="#06c755"
          />

          <div className="h-6" />

          <DispatchLogTable log={stats.dispatchLog ?? []} channel="LINE" />

          <div className="h-6" />

          <RankTable
            title="自治体別 LINE登録数"
            hint="市区町村ごとの登録者数。自治体アプローチの営業材料に。"
            headers={["#", "都道府県", "市区町村", "登録数"]}
            rows={stats.topMunis.map((m, i) => [
              i + 1,
              m.pref,
              m.city || "（全域）",
              m.count,
            ])}
            emptyText="LINE登録のある自治体はまだありません。"
            onCsv={() =>
              downloadCsv("line-munis.csv", [
                ["都道府県", "市区町村", "登録数"],
                ...stats.topMunis.map((m) => [m.pref, m.city, m.count]),
              ])
            }
          />

          <div className="h-6" />

          <RankTable
            title="観光地別 LINE登録数"
            hint="観光地 (spot) ごとの登録者数。観光地・観光協会アプローチ用。"
            headers={["#", "観光地", "都道府県", "登録数"]}
            rows={stats.topSpots.map((s, i) => [i + 1, s.name, s.pref, s.count])}
            emptyText="LINE登録のある観光地はまだありません。"
            onCsv={() =>
              downloadCsv("line-spots.csv", [
                ["観光地", "都道府県", "登録数"],
                ...stats.topSpots.map((s) => [s.name, s.pref, s.count]),
              ])
            }
          />

          <div className="h-6" />

          <RankTable
            title="地図の任意地点(geo) 都道府県別"
            hint="地図で任意地点を登録したLINE通知の県別内訳（座標をBBoxでざっくり割当）。"
            headers={["#", "都道府県", "地点数"]}
            rows={stats.topGeoPrefs.map((g, i) => [i + 1, g.pref, g.count])}
            emptyText="地図の任意地点で登録したLINE通知はまだありません。"
            onCsv={() =>
              downloadCsv("line-geo-prefs.csv", [
                ["都道府県", "地点数"],
                ...stats.topGeoPrefs.map((g) => [g.pref, g.count]),
              ])
            }
          />
        </>
      )}

      {!stats && !loading && !error && (
        <p className="rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          データがありません。
        </p>
      )}
    </>
  );
}

function Tile({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3">
      <div className="text-[11px] font-medium text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className="text-2xl font-bold tabular-nums text-stone-900">
          {value.toLocaleString("ja-JP")}
        </span>
        <span className="text-xs text-stone-500">{unit}</span>
      </div>
    </div>
  );
}

function RankTable({
  title,
  hint,
  headers,
  rows,
  emptyText,
  onCsv,
}: {
  title: string;
  hint: string;
  headers: string[];
  rows: (string | number)[][];
  emptyText: string;
  onCsv: () => void;
}) {
  return (
    <section>
      <div className="mb-2 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-stone-900">{title}</h2>
          <p className="text-xs text-stone-500">{hint}</p>
        </div>
        {rows.length > 0 && (
          <button
            type="button"
            onClick={onCsv}
            className="shrink-0 rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50"
          >
            CSV
          </button>
        )}
      </div>

      {rows.length === 0 ? (
        <p className="rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          {emptyText}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full min-w-[22rem] border-collapse text-sm">
            <thead>
              <tr className="bg-stone-50 text-left text-xs text-stone-500">
                {headers.map((h, i) => (
                  <th
                    key={h}
                    className={`px-3 py-2 font-medium ${
                      i === headers.length - 1 ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr
                  key={ri}
                  className="border-t border-stone-100 text-stone-800"
                >
                  {r.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-2 ${
                        ci === 0
                          ? "tabular-nums text-stone-400"
                          : ci === r.length - 1
                            ? "text-right font-semibold tabular-nums"
                            : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
