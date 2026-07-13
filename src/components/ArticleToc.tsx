import Link from "next/link";
import { ListOrdered, ChevronDown } from "lucide-react";
import ArticleStickyToc from "@/components/ArticleStickyToc";

export type TocItem = { id: string; title: string };

type Props = {
  items: TocItem[];
};

/** 記事の目次。
 *  - 小〜中画面: 本文先頭に折りたたみ式(details)で表示。初期は畳んでおき、
 *    冒頭が「箱の壁」で埋まらないようにする。タップで開閉。
 *  - lg 以上: 加えて画面右端に固定の sticky TOC を表示し、スクロールスパイで現在地をハイライト。
 *  どちらも items は同じ。 */
export default function ArticleToc({ items }: Props) {
  if (items.length === 0) return null;
  return (
    <>
      <details className="group not-prose my-6 overflow-hidden rounded-2xl border border-stone-200 bg-white lg:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3.5 text-[15px] font-bold text-stone-800 [&::-webkit-details-marker]:hidden">
          <ListOrdered className="h-[18px] w-[18px] shrink-0 text-amber-600" aria-hidden />
          <span>この記事の目次</span>
          <span className="text-[13px] font-normal text-stone-400">
            （全 {items.length} 項目）
          </span>
          <ChevronDown
            className="ml-auto h-5 w-5 shrink-0 text-stone-400 transition-transform group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <nav aria-label="目次" className="border-t border-stone-100 px-4 pb-4 pt-3">
          <ol className="space-y-2.5 text-[15px] text-stone-700">
            {items.map((it, i) => (
              <li key={it.id} className="flex gap-2 leading-snug">
                <span className="shrink-0 font-semibold text-amber-600">
                  {i + 1}.
                </span>
                <Link href={`#${it.id}`} className="hover:text-amber-700 hover:underline">
                  {it.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </details>

      {/* デスクトップでは右側に固定。小画面では非表示。 */}
      <ArticleStickyToc items={items} />
    </>
  );
}
