"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * 通知登録状況ダッシュボード (合言葉でログイン)。
 *
 * 自治体 (muni) / 観光地 (spot) ごとの Web Push 購読者数を一覧する。
 * 自治体・観光地へ「あなたの地域は N 人が通知登録しています」と
 * アプローチする営業材料として使う想定。CSV でも書き出せる。
 *
 * 認証は市民投稿モデレーション (/admin/submissions) と同じ ADMIN_SECRET を
 * Bearer で送る方式。sessionStorage のキーも共通なので、どちらかで
 * ログインすれば両画面を行き来できる。
 */

type MuniRow = { pref: string; city: string; count: number };
type SpotRow = { slug: string; name: string; pref: string; count: number };

type PushStats = {
  totalSubscribers: number;
  activeMuniCount: number;
  totalSubscriptions: number;
  avgMunisPerSubscriber: number;
  topMunis: MuniRow[];
  activeSpotCount: number;
  totalSpotSubscriptions: number;
  topSpots: SpotRow[];
};

const SECRET_KEY = "kw.admin.secret";

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

export default function AdminPushStats() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [stats, setStats] = useState<PushStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async (sec: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/push-stats?top=200`, {
        headers: { Authorization: `Bearer ${sec}` },
        cache: "no-store",
      });
      if (res.status === 401) {
        setAuthed(false);
        setError("合言葉が違います。");
        sessionStorage.removeItem(SECRET_KEY);
        return;
      }
      if (res.status === 503) {
        setError("通知基盤 (Upstash) が未設定です。");
        setAuthed(true);
        sessionStorage.setItem(SECRET_KEY, sec);
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as PushStats;
      setStats(data);
      setAuthed(true);
      sessionStorage.setItem(SECRET_KEY, sec);
    } catch (e) {
      setError(
        `読み込みに失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem(SECRET_KEY);
    if (saved) {
      setSecret(saved);
      load(saved);
    }
  }, [load]);

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
        <h1 className="mb-1 text-xl font-bold text-stone-900">通知登録状況</h1>
        <p className="mb-4 text-sm text-stone-500">
          管理者用。合言葉を入力してください。
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (secret.trim()) load(secret.trim());
          }}
          className="flex flex-col gap-3"
        >
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="合言葉"
            autoComplete="current-password"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-base focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
          <button
            type="submit"
            disabled={loading || !secret.trim()}
            className="rounded-xl bg-amber-600 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-700 disabled:bg-stone-300"
          >
            {loading ? "確認中…" : "ログイン"}
          </button>
          {error && <p className="text-sm text-rose-700">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-stone-900">通知登録状況</h1>
        <div className="flex items-center gap-2">
          <a
            href="/admin/submissions"
            className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-50"
          >
            投稿モデレーション
          </a>
          <button
            type="button"
            onClick={() => load(secret)}
            disabled={loading}
            className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-50 disabled:opacity-50"
          >
            {loading ? "更新中…" : "更新"}
          </button>
        </div>
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
            <Tile label="実登録者数" value={stats.totalSubscribers} unit="人" />
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
              value={Math.round(stats.avgMunisPerSubscriber * 10) / 10}
              unit="地域"
            />
          </div>

          <RankTable
            title="自治体別 通知登録数"
            hint="市区町村ごとの購読者数。自治体アプローチの営業材料に。"
            headers={["#", "都道府県", "市区町村", "登録数"]}
            rows={stats.topMunis.map((m, i) => [
              i + 1,
              m.pref,
              m.city || "（全域）",
              m.count,
            ])}
            emptyText="通知登録のある自治体はまだありません。"
            onCsv={() =>
              downloadCsv("push-munis.csv", [
                ["都道府県", "市区町村", "登録数"],
                ...stats.topMunis.map((m) => [m.pref, m.city, m.count]),
              ])
            }
          />

          <div className="h-6" />

          <RankTable
            title="観光地別 通知登録数"
            hint="観光地 (spot) ごとの購読者数。観光地・観光協会アプローチ用。"
            headers={["#", "観光地", "都道府県", "登録数"]}
            rows={stats.topSpots.map((s, i) => [
              i + 1,
              s.name,
              s.pref,
              s.count,
            ])}
            emptyText="通知登録のある観光地はまだありません。"
            onCsv={() =>
              downloadCsv("push-spots.csv", [
                ["観光地", "都道府県", "登録数"],
                ...stats.topSpots.map((s) => [s.name, s.pref, s.count]),
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
    </div>
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
