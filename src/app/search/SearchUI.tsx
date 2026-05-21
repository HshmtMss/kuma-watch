"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/**
 * クライアント側の検索 UI。
 *
 * 設計:
 * - /public/search-index.json (約 430KB) を初回 fetch して in-memory に保持。
 *   gzip 後は ~80KB 程度で、ユーザが /search を開いたタイミングで一度だけ取得する。
 *   ホームページなどには影響しない (Pagefind と違い、bundle 増加もない)。
 * - 検索アルゴリズム: クエリを空白で分割し、すべてのトークンを tokens に部分一致
 *   (includes) する候補を返す。日本語に対しては形態素解析より部分一致のほうが
 *   "高尾山" "白神" "ツキノワ" のような短いワードに対する再現率が高い。
 * - 結果は type ごとにスコアブーストして並べ替え (記事 > 観光地 > 市町村 > 研究 > 政策 > 静的)。
 *   同じスコア内では title prefix 一致を優先。
 * - 結果は最大 200 件まで表示 (それ以上は絞り込みを促す)。
 * - ?q= に対応: URL に検索クエリを保持し、リロード/共有可能にする。
 */

type SearchEntry = {
  type: "muni" | "article" | "research" | "spot" | "policy" | "page";
  title: string;
  url: string;
  snippet?: string;
  tokens: string;
};

const TYPE_META: Record<
  SearchEntry["type"],
  { label: string; chip: string; rank: number }
> = {
  article: {
    label: "対策記事",
    chip: "bg-amber-100 text-amber-900 border-amber-200",
    rank: 6,
  },
  spot: {
    label: "観光地",
    chip: "bg-sky-100 text-sky-900 border-sky-200",
    rank: 5,
  },
  muni: {
    label: "市町村",
    chip: "bg-emerald-100 text-emerald-900 border-emerald-200",
    rank: 4,
  },
  research: {
    label: "研究",
    chip: "bg-violet-100 text-violet-900 border-violet-200",
    rank: 3,
  },
  policy: {
    label: "政府発表",
    chip: "bg-rose-100 text-rose-900 border-rose-200",
    rank: 2,
  },
  page: {
    label: "ページ",
    chip: "bg-stone-100 text-stone-800 border-stone-200",
    rank: 1,
  },
};

const MAX_RESULTS = 200;

function tokenizeQuery(q: string): string[] {
  return q
    .toLowerCase()
    .split(/[\s　]+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function scoreEntry(entry: SearchEntry, tokens: string[]): number | null {
  for (const t of tokens) {
    if (!entry.tokens.includes(t)) return null;
  }
  // タイトル部分一致でブースト (title-prefix > title-substring > tokens-only)
  const titleLower = entry.title.toLowerCase();
  let titleScore = 0;
  for (const t of tokens) {
    if (titleLower.startsWith(t)) titleScore += 3;
    else if (titleLower.includes(t)) titleScore += 2;
  }
  return titleScore + TYPE_META[entry.type].rank * 0.5;
}

export default function SearchUI() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 初回マウント時にインデックスを取得 (1 回だけ)
  useEffect(() => {
    let cancelled = false;
    fetch("/search-index.json")
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<SearchEntry[]>;
      })
      .then((data) => {
        if (cancelled) return;
        setIndex(data);
      })
      .catch(() => {
        if (cancelled) return;
        setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // 検索ボックスはマウント時に自動フォーカス (デスクトップのみ; モバイルは IME 起動を避けるため空 query 時のみ skip)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 640px)").matches) {
      inputRef.current?.focus();
    } else if (initialQ) {
      // モバイルでも q= 付きで直接来た場合はフォーカス可
      inputRef.current?.focus();
    }
  }, [initialQ]);

  // URL の ?q= 同期 (debounce 300ms)
  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      const next = params.toString() ? `/search?${params.toString()}` : "/search";
      router.replace(next, { scroll: false });
    }, 300);
    return () => clearTimeout(t);
  }, [query, router]);

  const results = useMemo(() => {
    if (!index) return null;
    const tokens = tokenizeQuery(query);
    if (tokens.length === 0) return [];
    const scored: { entry: SearchEntry; score: number }[] = [];
    for (const e of index) {
      const s = scoreEntry(e, tokens);
      if (s === null) continue;
      scored.push({ entry: e, score: s });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, MAX_RESULTS);
  }, [index, query]);

  return (
    <div>
      <div className="mb-6 flex items-center gap-2 rounded-2xl border border-stone-300 bg-white px-4 py-3 shadow-sm focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-200">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-stone-400"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="地名・観光地・記事タイトルなど (例: 白神山地、スプレー、富山県)"
          aria-label="サイト内検索"
          enterKeyHint="search"
          className="w-full bg-transparent text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="検索をクリア"
            className="shrink-0 rounded-full p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        )}
      </div>

      <SearchResults
        query={query}
        results={results}
        indexReady={index !== null}
        loadError={loadError}
      />

      {/* 検索が空のときに見せるサジェスト */}
      {!query.trim() && (
        <SearchSuggestions />
      )}
    </div>
  );
}

function SearchResults({
  query,
  results,
  indexReady,
  loadError,
}: {
  query: string;
  results: { entry: SearchEntry; score: number }[] | null;
  indexReady: boolean;
  loadError: boolean;
}) {
  if (loadError) {
    return (
      <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
        検索インデックスの読み込みに失敗しました。時間をおいて再度お試しください。
      </p>
    );
  }
  if (!query.trim()) return null;
  if (!indexReady || results === null) {
    return (
      <p className="text-sm text-stone-500">検索インデックスを読み込み中…</p>
    );
  }
  if (results.length === 0) {
    return (
      <p className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-600">
        「{query}」に一致する結果は見つかりませんでした。<br />
        市町村名・観光地名・対策キーワード (例: 「スプレー」「秋」「ツキノワ」) などをお試しください。
      </p>
    );
  }
  return (
    <div>
      <p className="mb-3 text-xs text-stone-500">
        {results.length === MAX_RESULTS
          ? `${MAX_RESULTS} 件以上ヒット — 表示は上位 ${MAX_RESULTS} 件`
          : `${results.length} 件ヒット`}
      </p>
      <ul className="flex flex-col gap-2">
        {results.map(({ entry }) => {
          const meta = TYPE_META[entry.type];
          return (
            <li key={`${entry.type}:${entry.url}`}>
              <Link
                href={entry.url}
                className="block rounded-xl border border-stone-200 bg-white px-4 py-3 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${meta.chip}`}
                  >
                    {meta.label}
                  </span>
                  <span className="truncate text-sm font-semibold text-stone-900">
                    {entry.title}
                  </span>
                </div>
                {entry.snippet && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600">
                    {entry.snippet}
                  </p>
                )}
                <p className="mt-1 truncate text-[11px] text-stone-400">
                  kuma-watch.jp{entry.url}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SearchSuggestions() {
  const groups: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: "都道府県を探す",
      items: [
        { label: "北海道", href: "/place/%E5%8C%97%E6%B5%B7%E9%81%93" },
        { label: "秋田県", href: "/place/%E7%A7%8B%E7%94%B0%E7%9C%8C" },
        { label: "岩手県", href: "/place/%E5%B2%A9%E6%89%8B%E7%9C%8C" },
        { label: "富山県", href: "/place/%E5%AF%8C%E5%B1%B1%E7%9C%8C" },
        { label: "長野県", href: "/place/%E9%95%B7%E9%87%8E%E7%9C%8C" },
      ],
    },
    {
      title: "観光地",
      items: [
        { label: "富士山", href: "/spot/%E5%AF%8C%E5%A3%AB%E5%B1%B1" },
        { label: "白神山地", href: "/spot/%E7%99%BD%E7%A5%9E%E5%B1%B1%E5%9C%B0" },
        { label: "高尾山", href: "/spot/%E9%AB%98%E5%B0%BE%E5%B1%B1" },
        { label: "上高地", href: "/spot/%E4%B8%8A%E9%AB%98%E5%9C%B0" },
      ],
    },
    {
      title: "対策・知見",
      items: [
        { label: "対策記事一覧", href: "/articles" },
        { label: "研究レポート", href: "/research" },
        { label: "政府発表", href: "/policy" },
        { label: "警戒エリア Top 50", href: "/place/ranking" },
      ],
    },
  ];

  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title} className="rounded-xl border border-stone-200 bg-white p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
            {g.title}
          </p>
          <ul className="flex flex-col gap-1.5 text-sm">
            {g.items.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className="text-emerald-700 hover:underline">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
