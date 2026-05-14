import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import {
  CATEGORIES,
  getArticlesByCategory,
  getCategoryBySlug,
  type ArticleMeta,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

// 既知のカテゴリ slug 以外は即 404。CATEGORIES に追加すれば自動的に増える。
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

const SEASON_LABEL: Record<string, string> = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
  all: "通年",
};

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "ページが見つかりません" };

  const count = getArticlesByCategory(cat.id).length;
  const title = `${cat.name}の記事 (${count}本) — クマ対策・くまウォッチ`;
  const url = `${SITE_URL}/articles/category/${cat.slug}`;

  return {
    title,
    description: cat.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: cat.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cat.description,
    },
  };
}

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
              alt={`${a.title} — クマ対策記事のヒーロー画像`}
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

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat.id);
  const url = `${SITE_URL}/articles/category/${cat.slug}`;

  // 他カテゴリへのナビ用に並び順を固定
  const otherCategories = [...CATEGORIES]
    .filter((c) => c.id !== cat.id)
    .sort((a, b) => a.order - b.order);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "記事一覧",
        item: `${SITE_URL}/articles`,
      },
      { "@type": "ListItem", position: 3, name: cat.name, item: url },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${cat.name}の記事`,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/articles/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <PageShell
      title={`${cat.emoji ?? ""} ${cat.name}の記事`.trim()}
      lead={cat.lead}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* 視認用パンくず */}
      <nav
        aria-label="パンくず"
        className="not-prose mb-6 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900 hover:underline">
          ホーム
        </Link>
        <span className="mx-1">/</span>
        <Link href="/articles" className="hover:text-stone-900 hover:underline">
          記事一覧
        </Link>
        <span className="mx-1">/</span>
        <span className="text-stone-700">{cat.name}</span>
      </nav>

      <p className="not-prose mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-stone-700">
        {cat.description}
      </p>

      {articles.length === 0 ? (
        <p className="not-prose text-sm text-stone-500">
          このカテゴリにはまだ記事がありません。
        </p>
      ) : (
        <ul className="not-prose space-y-4">
          {articles.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </ul>
      )}

      <hr className="my-10" />

      <h2 className="not-prose mb-3 text-base font-semibold text-stone-900">
        他のカテゴリ
      </h2>
      <ul className="not-prose flex flex-wrap gap-2 text-sm">
        {otherCategories.map((c) => (
          <li key={c.id}>
            <Link
              href={`/articles/category/${c.slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-stone-700 hover:border-amber-400 hover:bg-amber-50"
            >
              {c.emoji && <span aria-hidden>{c.emoji}</span>}
              <span>{c.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="not-prose mt-6 text-xs text-stone-500">
        <Link href="/articles" className="hover:text-stone-900 underline">
          ← 記事一覧トップへ戻る
        </Link>
      </p>
    </PageShell>
  );
}
