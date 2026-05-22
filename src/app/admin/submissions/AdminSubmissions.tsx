"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * 市民投稿モデレーション画面 (合言葉でログイン)。
 *
 * サーバ側 (/api/admin/submissions) を ADMIN_SECRET の Bearer 認証で叩く。
 * 合言葉は sessionStorage に保持し、リロードしても再入力不要 (タブを閉じると消える)。
 * server コードを client に取り込まないよう、型はこのファイル内で定義する。
 */

type Situation = "sight" | "trace" | "damage" | "injury";

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

type Submission = {
  id: string;
  lat: number;
  lon: number;
  occurredAt: string;
  headCount: number;
  situation: Situation;
  comment?: string;
  contact?: string;
  photoUrl?: string;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  receivedAt: number;
};

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

  const load = useCallback(async (sec: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/submissions", {
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
      setError(`読み込みに失敗しました: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setLoading(false);
    }
  }, []);

  // セッションに合言葉が残っていれば自動ログイン
  useEffect(() => {
    const saved = sessionStorage.getItem(SECRET_KEY);
    if (saved) {
      setSecret(saved);
      load(saved);
    }
  }, [load]);

  const moderate = useCallback(
    async (id: string, decision: "approve" | "reject") => {
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
        // 一覧から除去
        setItems((prev) => prev.filter((s) => s.id !== id));
      } catch (e) {
        setError(`操作に失敗しました: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
        setBusy(null);
      }
    },
    [secret],
  );

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
        <h1 className="mb-1 text-xl font-bold text-stone-900">
          投稿モデレーション
        </h1>
        <p className="mb-4 text-sm text-stone-500">管理者用。合言葉を入力してください。</p>
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
    <div className="mx-auto min-h-screen max-w-2xl px-4 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-stone-900">
          承認待ちの市民投稿{" "}
          <span className="text-base font-normal text-stone-500">
            ({items.length})
          </span>
        </h1>
        <button
          type="button"
          onClick={() => load(secret)}
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

      {items.length === 0 && !loading && (
        <p className="rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm text-stone-500">
          承認待ちの投稿はありません。
        </p>
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
                <span>受信 {fmtDateTime(new Date(s.receivedAt).toISOString())}</span>
              </div>

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => moderate(s.id, "approve")}
                  disabled={busy === s.id}
                  className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:bg-stone-300"
                >
                  {busy === s.id ? "処理中…" : "承認して公開"}
                </button>
                <button
                  type="button"
                  onClick={() => moderate(s.id, "reject")}
                  disabled={busy === s.id}
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-50"
                >
                  却下
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
