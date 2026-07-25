import Image from "next/image";
import Link from "next/link";
import CategoryGlyph from "@/components/CategoryGlyph";
import { getCategory, type ArticleMeta } from "@/lib/articles-meta";

/**
 * 記事一覧カード(共通)。以前は /articles と /articles/category で寸法・文字サイズが
 * 微妙に違う2実装がコピペされていたのを1部品に統合。画像なしはカテゴリの単色アイコン
 * +グラデ背景で枠を予約しカード高を揃える。極小(text-[10px])だったタグは text-xs に統一。
 */

const SEASON_LABEL: Record<string, string> = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
  all: "通年",
};

export default function ArticleCard({ a }: { a: ArticleMeta }) {
  const category = getCategory(a.category);
  return (
    <li className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:border-amber-400 hover:bg-amber-50">
      <Link href={`/articles/${a.slug}`} className="flex flex-col gap-0 sm:flex-row">
        <div className="relative h-44 w-full shrink-0 bg-stone-100 sm:h-auto sm:min-h-[176px] sm:w-52">
          {a.heroImage ? (
            <Image
              src={a.heroImage}
              alt={`${a.title} — クマ対策記事のヒーロー画像`}
              fill
              sizes="(min-width: 640px) 208px, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 via-stone-100 to-stone-200"
              aria-hidden
            >
              <CategoryGlyph
                slug={category?.slug}
                size={52}
                strokeWidth={1.5}
                className="text-amber-700/45"
              />
            </div>
          )}
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {a.season && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-800">
                {SEASON_LABEL[a.season]}
              </span>
            )}
            <span>{a.publishedAt}</span>
          </div>
          <div className="mt-2 text-lg font-bold leading-snug text-gray-900">
            {a.title}
          </div>
          <div className="mt-2 text-base leading-relaxed text-gray-700">
            {a.lead}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {a.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
