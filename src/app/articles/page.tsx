import type { Metadata } from "next";
import Link from "next/link";
import CategoryTiles, {
  type CategoryTileItem,
} from "@/components/CategoryTiles";
import PageShell from "@/components/PageShell";
import ArticleCard from "@/components/ArticleCard";
import {
  ARTICLES,
  CATEGORIES,
  getAllTags,
  getArticlesByCategory,
  tagToSlug,
  type ArticleMeta,
  type CategoryId,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策・遭遇時の対処 記事一覧｜獣医師監修",
  description:
    "獣医師監修・獣医工学ラボ運営。クマと遭遇したらどうするか、秋のクマ対策、クマよけスプレーの使い方、山菜採り・きのこ狩りの安全、ツキノワグマとヒグマの違いなど、登山・キャンプ・山仕事・通学路の安全に役立つ記事を、遭遇・装備・季節・生態・シーン・地域・背景の 7 カテゴリに整理。",
  alternates: { canonical: `${SITE_URL}/articles` },
  openGraph: {
    title: "クマ対策・遭遇時の対処 記事一覧｜獣医師監修",
    description:
      "獣医師監修・獣医工学ラボ運営。クマ対策の解説記事を 7 カテゴリで整理。登山・キャンプ・山仕事・通学路の安全に。",
    url: `${SITE_URL}/articles`,
    type: "website",
  },
};

// ISR: 5 分ごとに記事一覧を再生成。新規記事や順序変更を CDN に短い遅延で反映する。
export const revalidate = 300;

type SearchParams = Promise<{ cat?: string }>;

export default async function ArticlesIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const sortedCategories = [...CATEGORIES].sort((a, b) => a.order - b.order);
  const validCategorySlugs = new Set(sortedCategories.map((c) => c.slug));
  const selectedCat: string =
    sp.cat && validCategorySlugs.has(sp.cat) ? sp.cat : "all";

  // 選択カテゴリ (なければ all) に応じて表示記事を絞り込み。
  // 「カテゴリーから探す」がアンカージャンプで画面下に飛ぶと戻りづらかったので、
  // URL クエリ ?cat=encounter で 1 ページ内フィルタリングする方式に変更。
  const visibleArticles: ArticleMeta[] =
    selectedCat === "all"
      ? [...ARTICLES].sort(
          (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
        )
      : getArticlesByCategory(selectedCat as CategoryId);

  const selectedCategory = sortedCategories.find(
    (c) => c.slug === selectedCat,
  );

  return (
    <PageShell
      title="クマ対策の記事一覧"
      lead={`登山・キャンプ・山菜採り・きのこ狩り・渓流釣り・通学路など、クマと隣り合う暮らしを安全にするための記事を ${ARTICLES.length} 本掲載しています。`}
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/measures" className="hover:text-stone-900">
          対策
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">記事一覧</span>
      </nav>

      <CategoryTiles
        title="カテゴリから探す"
        activeKey={selectedCat}
        items={[
          {
            key: "all",
            href: "/articles",
            label: "すべて",
            count: ARTICLES.length,
          },
          ...sortedCategories.map<CategoryTileItem>((c) => ({
            key: c.slug,
            href: `/articles?cat=${c.slug}`,
            label: c.name,
            count: getArticlesByCategory(c.id).length,
          })),
        ]}
      />

      {selectedCategory && (
        <p className="mb-4 text-base leading-relaxed text-stone-700">
          {selectedCategory.lead}
        </p>
      )}

      <section className="not-prose">
        <ul className="space-y-4">
          {visibleArticles.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      </section>

      {/* タグクラウド: 全件表示時のみ表示。カテゴリ絞り込み中は邪魔なので隠す。 */}
      {selectedCat === "all" && (
        <section className="not-prose mt-12">
          <div className="mb-3 flex items-baseline justify-between border-b border-stone-200 pb-2">
            <h2 className="text-lg font-bold text-stone-900">タグから探す</h2>
            <span className="text-sm text-stone-500">出現頻度順</span>
          </div>
          <ul className="flex flex-wrap gap-2 text-base">
            {getAllTags()
              .slice(0, 30)
              .map(({ tag, count }) => (
                <li key={tag}>
                  <Link
                    href={`/articles/tag/${encodeURIComponent(tagToSlug(tag))}`}
                    className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-stone-700 hover:border-amber-400 hover:bg-amber-50"
                  >
                    <span>#{tag}</span>
                    <span className="text-sm text-stone-400">{count}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      )}

      <div className="not-prose mt-10">
        <Link
          href="/measures"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-base font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50"
        >
          <span aria-hidden>←</span>
          クマ対策トップに戻る
        </Link>
      </div>
    </PageShell>
  );
}
