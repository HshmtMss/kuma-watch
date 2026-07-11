"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

/**
 * ディレクトリ内の「絞り込み／直行」検索窓。/spot・/place・/place/[pref] の
 * ページ上部に置く。地図のジオコーダ（PlaceSearch）でも横断全文検索（/search）
 * でもなく、「そのページの一覧を名前で絞り込み、該当ページへ直行する」専用。
 *
 * - 完全にクライアント側の即時フィルタ（API 不要）。
 * - 前方一致を優先し、部分一致も拾う。Enter で先頭候補へ遷移。
 * - items はサーバ側で軽量な {label, sub, href} に射影して渡す。
 */
export type DirectoryItem = { label: string; sub?: string; href: string };

export default function DirectorySearch({
  items,
  placeholder,
  limit = 12,
}: {
  items: DirectoryItem[];
  placeholder: string;
  limit?: number;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const { results, total } = useMemo(() => {
    if (!query) return { results: [] as DirectoryItem[], total: 0 };
    const scored: { it: DirectoryItem; s: number }[] = [];
    for (const it of items) {
      const label = it.label.toLowerCase();
      const sub = it.sub?.toLowerCase() ?? "";
      let s = -1;
      if (label.startsWith(query)) s = 0;
      else if (sub.startsWith(query)) s = 1;
      else if (label.includes(query)) s = 2;
      else if (sub.includes(query)) s = 3;
      if (s >= 0) scored.push({ it, s });
    }
    // 前方一致を優先しつつ、元の並び（＝おおむね地理順／件数順）を安定保持。
    scored.sort((a, b) => a.s - b.s);
    return {
      results: scored.slice(0, limit).map((x) => x.it),
      total: scored.length,
    };
  }, [items, query, limit]);

  return (
    <div className="not-prose relative mb-5">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) router.push(results[0].href);
        }}
      >
        <div className="relative">
          <Search
            size={18}
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            enterKeyHint="search"
            autoComplete="off"
            aria-label={placeholder}
            className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-11 pr-10 text-base text-stone-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="クリア"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-600"
            >
              <X size={18} aria-hidden />
            </button>
          )}
        </div>
      </form>

      {query && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-stone-500">
              「{q}」に一致する項目はありません
            </p>
          ) : (
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="flex items-baseline justify-between gap-3 px-4 py-2.5 hover:bg-amber-50"
                  >
                    <span className="text-sm font-semibold text-stone-900">
                      {it.label}
                    </span>
                    {it.sub && (
                      <span className="shrink-0 text-xs text-stone-500">
                        {it.sub}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              {total > results.length && (
                <li className="px-4 py-2 text-xs text-stone-400">
                  ほか {total - results.length} 件 — キーワードを絞り込んでください
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
