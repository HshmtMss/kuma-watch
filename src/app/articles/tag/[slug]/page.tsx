import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import {
  getAllTags,
  getArticlesByTag,
  tagToSlug,
  type ArticleMeta,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

const SEASON_LABEL: Record<string, string> = {
  spring: "春",
  summer: "夏",
  autumn: "秋",
  winter: "冬",
  all: "通年",
};

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

export async function generateStaticParams() {
  return getAllTags().map((t) => ({ slug: tagToSlug(t.tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decode(rawSlug);
  const articles = getArticlesByTag(slug);
  if (articles.length === 0) return { title: "ページが見つかりません" };

  const title = `「${slug}」タグの記事 (${articles.length}本) — クマ対策・くまウォッチ`;
  const description = `「${slug}」に関するクマ対策記事を ${articles.length} 本まとめています。${articles
    .slice(0, 3)
    .map((a) => a.title)
    .join(" / ")} など、登山・キャンプ・山仕事・通学路に役立つ情報を整理。`;
  const url = `${SITE_URL}/articles/tag/${encodeURIComponent(slug)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
        </div>
      </Link>
    </li>
  );
}

export default async function TagPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decode(rawSlug);
  const articles = getArticlesByTag(slug);
  if (articles.length === 0) notFound();

  const url = `${SITE_URL}/articles/tag/${encodeURIComponent(slug)}`;

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
      { "@type": "ListItem", position: 3, name: `タグ: ${slug}`, item: url },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `「${slug}」タグの記事`,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/articles/${a.slug}`,
      name: a.title,
    })),
  };

  // 関連タグ (このタグの記事と一緒についている他のタグ TOP10)
  const coOccur = new Map<string, number>();
  for (const a of articles) {
    for (const t of a.tags) {
      if (tagToSlug(t) === tagToSlug(slug)) continue;
      coOccur.set(t, (coOccur.get(t) ?? 0) + 1);
    }
  }
  const relatedTags = Array.from(coOccur.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag]) => tag);

  return (
    <PageShell
      title={`#${slug}`}
      lead={`「${slug}」に関する記事を ${articles.length} 本まとめています。`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

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
        <span className="text-stone-700">タグ: {slug}</span>
      </nav>

      <ul className="not-prose space-y-4">
        {articles.map((a) => (
          <ArticleCard key={a.slug} a={a} />
        ))}
      </ul>

      {relatedTags.length > 0 && (
        <>
          <hr className="my-10" />
          <h2 className="not-prose mb-3 text-base font-semibold text-stone-900">
            関連タグ
          </h2>
          <ul className="not-prose flex flex-wrap gap-2 text-sm">
            {relatedTags.map((t) => (
              <li key={t}>
                <Link
                  href={`/articles/tag/${encodeURIComponent(tagToSlug(t))}`}
                  className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-stone-700 hover:border-amber-400 hover:bg-amber-50"
                >
                  #{t}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="not-prose mt-8 text-xs text-stone-500">
        <Link href="/articles" className="hover:text-stone-900 underline">
          ← 記事一覧トップへ戻る
        </Link>
      </p>
    </PageShell>
  );
}
