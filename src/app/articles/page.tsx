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
  type CategoryId,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策・遭遇時の対処 記事一覧｜獣医師監修｜KumaWatch",
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
          <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-52">
            <Image
              src={a.heroImage}
              alt={`${a.title} — クマ対策記事のヒーロー画像`}
              fill
              sizes="(min-width: 640px) 208px, 100vw"
              className="object-cover"
            />
          </div>
        )}
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

      {/* カテゴリーフィルター: タブ式。クリックで ?cat= が変わり、ページ内で一覧が絞り込まれる。
          アンカージャンプ方式と違い、画面が下に飛ばないので連続して別カテゴリを探しやすい。 */}
      <nav
        aria-label="カテゴリフィルター"
        className="not-prose sticky top-0 z-30 -mx-5 mb-6 border-b border-amber-200 bg-amber-50/95 px-5 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-4"
      >
        <div className="mb-2 text-sm font-semibold text-amber-800">
          カテゴリで絞り込み
        </div>
        <ul className="flex flex-wrap gap-2 text-base">
          <li>
            <Link
              href="/articles"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold ${
                selectedCat === "all"
                  ? "bg-amber-600 text-white shadow-sm"
                  : "bg-white text-amber-900 shadow-sm hover:bg-amber-100"
              }`}
            >
              <span>すべて</span>
              <span
                className={`text-sm tabular-nums ${
                  selectedCat === "all" ? "text-amber-100" : "text-amber-700"
                }`}
              >
                ({ARTICLES.length})
              </span>
            </Link>
          </li>
          {sortedCategories.map((c) => {
            const count = getArticlesByCategory(c.id).length;
            const isActive = selectedCat === c.slug;
            return (
              <li key={c.id}>
                <Link
                  href={`/articles?cat=${c.slug}`}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold ${
                    isActive
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white text-amber-900 shadow-sm hover:bg-amber-100"
                  }`}
                >
                  {c.emoji && <span aria-hidden>{c.emoji}</span>}
                  <span>{c.name}</span>
                  <span
                    className={`text-sm tabular-nums ${
                      isActive ? "text-amber-100" : "text-amber-700"
                    }`}
                  >
                    ({count})
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

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
