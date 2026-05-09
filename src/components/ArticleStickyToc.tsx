"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { TocItem } from "@/components/ArticleToc";

type Props = { items: TocItem[] };

/** デスクトップ (lg+) でのみ表示する右側固定 TOC。
 *  IntersectionObserver で「いま画面上端付近にいる見出し」をハイライトする。
 *  小画面では ArticleToc の inline 版が代わりに表示されるのでこちらは隠す。 */
export default function ArticleStickyToc({ items }: Props) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;
    const headings = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    // viewport の上 80px〜上 30% にいる見出しを「アクティブ」とみなす。
    // この帯から外れたものは非アクティブに戻す。
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        if (visible.length > 0) {
          setActiveId(visible[0].id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside
      aria-label="この記事の目次"
      className="not-prose pointer-events-none fixed top-24 hidden lg:block"
      style={{
        // viewport center の右側、本文 (max-w-3xl = 768px) との隙間を取って配置。
        // 小型 lg では右端寄せ、xl 以上では本文との中間に。
        left: "calc(50% + 768px / 2 + 1.5rem)",
        width: "min(15rem, calc(50% - 768px / 2 - 2rem))",
        maxHeight: "calc(100vh - 7rem)",
      }}
    >
      <div className="pointer-events-auto overflow-y-auto rounded-xl border border-stone-200 bg-white/95 p-4 shadow-sm backdrop-blur">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-700">
          目次
        </div>
        <ol className="space-y-1.5 text-xs">
          {items.map((it, i) => {
            const active = activeId === it.id;
            return (
              <li key={it.id}>
                <Link
                  href={`#${it.id}`}
                  className={`block leading-snug ${
                    active
                      ? "font-semibold text-amber-700"
                      : "text-stone-600 hover:text-amber-700"
                  }`}
                >
                  <span
                    className={`mr-1 ${active ? "text-amber-600" : "text-stone-400"}`}
                  >
                    {i + 1}.
                  </span>
                  {it.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}
