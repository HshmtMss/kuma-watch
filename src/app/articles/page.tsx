import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import {
  ARTICLES,
  CATEGORIES,
  getAllTags,
  getArticlesByCategory,
  tagToSlug,
  type ArticleMeta,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策・遭遇時の対処 記事一覧",
  description:
    "クマと遭遇したらどうするか、秋のクマ対策、クマよけスプレーの使い方、山菜採り・きのこ狩りの安全、ツキノワグマとヒグマの違いなど、登山・キャンプ・山仕事・通学路の安全に役立つ記事を、遭遇・装備・季節・生態・シーン・地域・背景の 7 カテゴリに整理して掲載しています。",
  alternates: { canonical: `${SITE_URL}/articles` },
};

const SEASON_LABEL: Record<string, string> = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
  all: "通年",
};

function ArticleCard({ a }: { a: ArticleMeta }) {
  return (
    <li className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:border-amber-400 hover:bg-amber-50">
      <Link
        href={`/articles/${a.slug}`}
        className="flex flex-col gap-0 sm:flex-row"
      >
        {a.heroImage && (
          <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-48">
            <Image
              src={a.heroImage}
              alt=""
              fill
              sizes="(min-width: 640px) 192px, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {a.season && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
                {SEASON_LABEL[a.season]}
              </span>
            )}
            <span>{a.publishedAt}</span>
          </div>
          <div className="mt-2 text-base font-semibold text-gray-900">
            {a.title}
          </div>
          <div className="mt-1 text-sm text-gray-600">{a.lead}</div>
          <div className="mt-2 flex flex-wrap gap-1">
            {a.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600"
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

export default function ArticlesIndexPage() {
  const sortedCategories = [...CATEGORIES].sort((a, b) => a.order - b.order);

  return (
    <PageShell
      title="クマ対策の記事一覧"
      lead={`登山・キャンプ・山菜採り・きのこ狩り・渓流釣り・通学路など、クマと隣り合う暮らしを安全にするための記事を ${ARTICLES.length} 本掲載しています。カテゴリから探せます。`}
    >
      {/* カテゴリのクイックリンク (アンカージャンプ) */}
      <nav
        aria-label="カテゴリ"
        className="not-prose mb-10 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4"
      >
        <div className="mb-2 text-xs font-semibold text-amber-800">
          カテゴリから探す
        </div>
        <ul className="flex flex-wrap gap-2 text-sm">
          {sortedCategories.map((c) => {
            const count = getArticlesByCategory(c.id).length;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.slug}`}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-900 shadow-sm hover:bg-amber-100"
                >
                  {c.emoji && <span aria-hidden>{c.emoji}</span>}
                  <span>{c.name}</span>
                  <span className="text-xs text-amber-700">({count})</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {sortedCategories.map((c) => {
        const items = getArticlesByCategory(c.id);
        if (items.length === 0) return null;
        return (
          <section key={c.id} id={c.slug} className="not-prose mb-12 scroll-mt-20">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-amber-200 pb-2">
              <h2 className="text-xl font-bold text-stone-900">
                {c.emoji && (
                  <span aria-hidden className="mr-1">
                    {c.emoji}
                  </span>
                )}
                {c.name}
              </h2>
              <Link
                href={`/articles/category/${c.slug}`}
                className="text-xs font-medium text-amber-800 hover:text-amber-900 hover:underline"
              >
                {c.name}の記事をまとめて見る →
              </Link>
            </div>
            <p className="mb-4 text-sm text-stone-600">{c.lead}</p>
            <ul className="space-y-4">
              {items.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </ul>
          </section>
        );
      })}

      {/* タグクラウド: 出現頻度順 TOP30 */}
      <section className="not-prose mt-12">
        <div className="mb-3 flex items-baseline justify-between border-b border-stone-200 pb-2">
          <h2 className="text-base font-bold text-stone-900">
            タグから探す
          </h2>
          <span className="text-xs text-stone-500">
            出現頻度順
          </span>
        </div>
        <ul className="flex flex-wrap gap-2 text-sm">
          {getAllTags()
            .slice(0, 30)
            .map(({ tag, count }) => (
              <li key={tag}>
                <Link
                  href={`/articles/tag/${encodeURIComponent(tagToSlug(tag))}`}
                  className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-stone-700 hover:border-amber-400 hover:bg-amber-50"
                >
                  <span>#{tag}</span>
                  <span className="text-xs text-stone-400">{count}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </PageShell>
  );
}
