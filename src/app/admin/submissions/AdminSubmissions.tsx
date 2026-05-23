"use client";

import { useCallback, useEffect, useState } from "react";
import AdminSubmissionsMap, { type MapItem } from "./AdminSubmissionsMap";

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
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  receivedAt: number;
};

type Decision = "approve" | "reject" | "delete";

const SECRET_KEY = "kw.admin.secret";

function fmtDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

export default function AdminSubmissions() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [status, setStatus] = useState("pending");
  const [view, setView] = useState<"list" | "map">("list");

  const load = useCallback(async (sec: string, st: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/submissions?status=${st}`, {
        headers: { Authorization: `Bearer ${sec}` },
        cache: "no-store",
      });
      if (res.status === 401) {
        setAuthed(false);
        setError("合言葉が違います。");
        sessionStorage.removeItem(SECRET_KEY);
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { submissions: Submission[] };
      setItems(data.submissions ?? []);
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
      load(saved, "pending");
    }
  }, [load]);

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
        await load(secret, status);
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

  const changeTab = (key: string) => {
    setStatus(key);
    load(secret, key);
  };

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
        <h1 className="mb-1 text-xl font-bold text-stone-900">
          投稿モデレーション
        </h1>
        <p className="mb-4 text-sm text-stone-500">
          管理者用。合言葉を入力してください。
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (secret.trim()) load(secret.trim(), "pending");
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
  }));

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-4 py-6">
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-stone-900">
          市民投稿モデレーション
        </h1>
        <button
          type="button"
          onClick={() => load(secret, status)}
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
                    地図で位置確認 ({s.lat.toFixed(4)}, {s.lon.toFixed(4)})
                  </a>
                  {s.contact && <span>連絡先: {s.contact}</span>}
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
      )}
    </div>
  );
}
