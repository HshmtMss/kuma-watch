import Link from "next/link";
import ArticleStickyToc from "@/components/ArticleStickyToc";

export type TocItem = { id: string; title: string };

type Props = {
  items: TocItem[];
};

/** 記事の目次。
 *  - 小〜中画面: 本文先頭にインラインで黄色の TOC を表示
 *  - lg 以上: 加えて画面右端に固定の sticky TOC を表示し、スクロールスパイで現在地をハイライト
 *  どちらも items は同じ。 */
export default function ArticleToc({ items }: Props) {
  if (items.length === 0) return null;
  return (
    <>
      <nav
        aria-label="目次"
        className="not-prose mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 lg:hidden"
      >
        <div className="mb-2 text-xs font-semibold text-amber-800">この記事の目次</div>
        <ol className="space-y-1 text-sm text-amber-900">
          {items.map((it, i) => (
            <li key={it.id} className="leading-snug">
              <Link href={`#${it.id}`} className="hover:underline">
                <span className="mr-1 text-amber-700">{i + 1}.</span>
                {it.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* デスクトップでは右側に固定。小画面では非表示。 */}
      <ArticleStickyToc items={items} />
    </>
  );
}
