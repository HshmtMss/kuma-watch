"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  BarChart3,
  ClipboardList,
  Eye,
  EyeOff,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

/**
 * 管理画面の共通シェル。合言葉ログイン（sessionStorage 共有）＋上部ナビ（タブ・
 * ログアウト）を1箇所に集約し、各画面は中身だけを描く。
 * 認証済みになると children(secret, deauth) を描画する（render-prop）。
 *
 * 認証の実体は各 API 側の Bearer 検証。ログインの成否は push-stats を
 * top=1 で叩いて 401 かどうかで判定する（軽い）。
 */

const SECRET_KEY = "kw.admin.secret";

export type AdminTab =
  | "home"
  | "analytics"
  | "push-stats"
  | "line-stats"
  | "submissions"
  | "contacts";

const TABS: { key: AdminTab; label: string; href: string; Icon: typeof BarChart3 }[] = [
  { key: "home", label: "ダッシュボード", href: "/admin", Icon: LayoutDashboard },
  { key: "analytics", label: "分析", href: "/admin/analytics", Icon: TrendingUp },
  { key: "push-stats", label: "通知登録", href: "/admin/push-stats", Icon: BarChart3 },
  { key: "line-stats", label: "LINE登録", href: "/admin/line-stats", Icon: MessageCircle },
  { key: "submissions", label: "投稿", href: "/admin/submissions", Icon: ClipboardList },
  { key: "contacts", label: "問い合わせ", href: "/admin/contacts", Icon: Mail },
];

export default function AdminShell({
  active,
  title,
  children,
}: {
  active: AdminTab;
  title: string;
  children: (secret: string, deauth: () => void) => ReactNode;
}) {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");
  // 合言葉の表示/非表示トグル。
  const [showSecret, setShowSecret] = useState(false);
  // タブに出す要対応バッジ（全画面で共通表示）。
  const [pendingBadge, setPendingBadge] = useState<number | null>(null);
  const [contactsBadge, setContactsBadge] = useState<number | null>(null);

  // 認証済みになったら承認待ち投稿・新着問い合わせをベストエフォート取得（バッジ用）。
  useEffect(() => {
    if (!authed || !secret) return;
    let cancelled = false;
    const auth = { Authorization: `Bearer ${secret}` };
    fetch(`/api/admin/submissions?status=pending`, {
      headers: auth,
      cache: "no-store",
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && d?.submissions)
          setPendingBadge(d.submissions.length);
      })
      .catch(() => {});
    fetch(`/api/admin/contacts`, { headers: auth, cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && Array.isArray(d?.contacts))
          setContactsBadge(
            d.contacts.filter(
              (c: { status?: string }) => (c.status ?? "new") !== "handled",
            ).length,
          );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [authed, secret]);

  const badgeFor = (key: AdminTab): number | null =>
    key === "submissions"
      ? pendingBadge
      : key === "contacts"
        ? contactsBadge
        : null;

  const validate = useCallback(async (sec: string) => {
    setChecking(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/push-stats?top=1`, {
        headers: { Authorization: `Bearer ${sec}` },
        cache: "no-store",
      });
      if (res.status === 401) {
        setError("合言葉が違います。");
        sessionStorage.removeItem(SECRET_KEY);
        setAuthed(false);
        return;
      }
      // 2xx でも 503(未設定)でも「合言葉は正しい」とみなして通す。
      sessionStorage.setItem(SECRET_KEY, sec);
      setSecret(sec);
      setAuthed(true);
    } catch {
      setError("確認に失敗しました。通信環境をご確認ください。");
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem(SECRET_KEY);
    if (saved) {
      setSecret(saved);
      setAuthed(true);
    }
  }, []);

  const deauth = useCallback(() => {
    sessionStorage.removeItem(SECRET_KEY);
    setAuthed(false);
    setSecret("");
  }, []);

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-5">
        <div className="mb-1 flex items-center gap-2 text-stone-900">
          <span className="text-lg font-bold">🐻 KumaWatch 管理</span>
        </div>
        <p className="mb-4 text-sm text-stone-500">
          管理者用。合言葉を入力してください。
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (secret.trim()) validate(secret.trim());
          }}
          className="flex flex-col gap-3"
        >
          <div className="relative">
            <input
              type={showSecret ? "text" : "password"}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="合言葉"
              autoComplete="current-password"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 pr-12 text-base focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <button
              type="button"
              onClick={() => setShowSecret((v) => !v)}
              aria-label={showSecret ? "合言葉を隠す" : "合言葉を表示"}
              title={showSecret ? "隠す" : "表示"}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-stone-400 hover:text-stone-600"
            >
              {showSecret ? (
                <EyeOff size={20} aria-hidden />
              ) : (
                <Eye size={20} aria-hidden />
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={checking || !secret.trim()}
            className="rounded-xl bg-amber-600 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-700 disabled:bg-stone-300"
          >
            {checking ? "確認中…" : "ログイン"}
          </button>
          {error && <p className="text-sm text-rose-700">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-2.5">
          <span className="shrink-0 text-sm font-bold text-stone-900">
            🐻 管理
          </span>
          <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
            {TABS.map((t) => {
              const isActive = t.key === active;
              return (
                <a
                  key={t.key}
                  href={t.href}
                  className={`relative flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-amber-100 text-amber-900"
                      : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <t.Icon size={15} strokeWidth={1.9} aria-hidden />
                  {t.label}
                  {(() => {
                    const b = badgeFor(t.key);
                    return b != null && b > 0 ? (
                      <span className="ml-0.5 inline-flex min-w-[1.1rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                        {b}
                      </span>
                    ) : null;
                  })()}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={deauth}
            className="flex shrink-0 items-center gap-1 rounded-full border border-stone-300 px-2.5 py-1.5 text-xs text-stone-600 hover:bg-stone-50"
            title="ログアウト"
          >
            <LogOut size={14} aria-hidden />
            <span className="hidden sm:inline">ログアウト</span>
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="mb-4 text-xl font-bold text-stone-900">{title}</h1>
        {children(secret, deauth)}
      </main>
    </div>
  );
}
