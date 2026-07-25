import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ArticleCard from "@/components/ArticleCard";
import CategoryTiles, {
  type CategoryTileItem,
} from "@/components/CategoryTiles";
import {
  ARTICLES,
  CATEGORIES,
  getArticlesByCategory,
  getCategoryBySlug,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

// 既知のカテゴリ slug 以外は即 404。CATEGORIES に追加すれば自動的に増える。
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

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


export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat.id);
  const url = `${SITE_URL}/articles/category/${cat.slug}`;

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
      title={`${cat.name}の記事`}
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

      {/* 視認用パンくず — 他ページと統一 (aria-label="パンくずリスト" / › 区切り) */}
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/articles" className="hover:text-stone-900">
          記事一覧
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">{cat.name}</span>
      </nav>

      <CategoryTiles
        activeKey={cat.slug}
        items={[
          {
            key: "all",
            href: "/articles",
            label: "すべて",
            count: ARTICLES.length,
          },
          ...[...CATEGORIES]
            .sort((a, b) => a.order - b.order)
            .map<CategoryTileItem>((c) => ({
              key: c.slug,
              href: `/articles/category/${c.slug}`,
              label: c.name,
              count: getArticlesByCategory(c.id).length,
            })),
        ]}
      />

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

      <p className="not-prose text-xs text-stone-500">
        <Link href="/articles" className="hover:text-stone-900 underline">
          ← 記事一覧トップへ戻る
        </Link>
      </p>
    </PageShell>
  );
}
