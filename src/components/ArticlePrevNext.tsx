import Link from "next/link";
import {
  getCategory,
  getPrevNextInCategory,
  type ArticleMeta,
} from "@/lib/articles-meta";

type Props = {
  current: ArticleMeta;
};

/** 同カテゴリ内の前後 1 本を表示するナビゲーション。
 *  記事間を順に読み進める動線を作り、滞在時間と回遊率を上げる。
 *  カテゴリの両端 (最古・最新) では片方だけ表示。 */
export default function ArticlePrevNext({ current }: Props) {
  const { prev, next } = getPrevNextInCategory(current.slug);
  const cat = getCategory(current.category);

  if (!prev && !next) return null;

  return (
    <nav
      aria-label={`${cat?.name ?? "カテゴリ"}内の記事ナビゲーション`}
      className="not-prose my-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/articles/${prev.slug}`}
          className="group flex flex-col rounded-xl border border-stone-200 bg-white p-4 hover:border-amber-400 hover:bg-amber-50"
        >
          <span className="mb-1 text-xs font-medium text-stone-500 group-hover:text-amber-700">
            ← 前の記事 {cat ? `(${cat.name})` : ""}
          </span>
          <span className="text-sm font-semibold leading-snug text-stone-900 group-hover:text-amber-900">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={`/articles/${next.slug}`}
          className="group flex flex-col rounded-xl border border-stone-200 bg-white p-4 hover:border-amber-400 hover:bg-amber-50 sm:items-end sm:text-right"
        >
          <span className="mb-1 text-xs font-medium text-stone-500 group-hover:text-amber-700">
            次の記事 {cat ? `(${cat.name})` : ""} →
          </span>
          <span className="text-sm font-semibold leading-snug text-stone-900 group-hover:text-amber-900">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}
    </nav>
  );
}
