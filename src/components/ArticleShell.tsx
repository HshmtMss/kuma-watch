import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ArticlePrevNext from "@/components/ArticlePrevNext";
import ArticleProgressBar from "@/components/ArticleProgressBar";
import ArticleShare from "@/components/ArticleShare";
import PageShell from "@/components/PageShell";
import {
  getCategory,
  getReadingTime,
  getRelatedArticles,
  tagToSlug,
  type ArticleMeta,
} from "@/lib/articles-meta";

const SITE_URL = "https://kuma-watch.jp";

type Props = {
  meta: ArticleMeta;
  children: ReactNode;
};

function formatDate(d: string): string {
  const t = Date.parse(d);
  if (!Number.isFinite(t)) return d;
  return new Date(t).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleShell({ meta, children }: Props) {
  const url = `${SITE_URL}/articles/${meta.slug}`;
  const related = getRelatedArticles(meta.slug, 3);
  const category = getCategory(meta.category);
  const readingMinutes = getReadingTime(meta.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt,
    inLanguage: "ja",
    articleSection: category?.name,
    author: {
      "@type": "Organization",
      name: "獣医工学ラボ",
      url: "https://vet-ai-lab.netlify.app/",
    },
    publisher: {
      "@type": "Organization",
      name: "KumaWatch",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons/Icon-512.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    timeRequired: `PT${readingMinutes}M`,
  };

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${SITE_URL}/articles`,
    },
  ];
  if (category) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: category.name,
      item: `${SITE_URL}/articles/category/${category.slug}`,
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 4,
      name: meta.title,
      item: url,
    });
  } else {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: meta.title,
      item: url,
    });
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <PageShell title={meta.title} lead={meta.lead}>
      <ArticleProgressBar />
      <ArticleShare title={meta.title} url={url} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {meta.heroImage && (
        <figure className="not-prose -mx-5 mb-8 sm:mx-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-200 sm:rounded-2xl">
            <Image
              src={meta.heroImage}
              alt={`${meta.title} — 記事ヒーロー画像`}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          {meta.heroCredit && (
            <figcaption className="mt-2 px-5 text-[11px] text-gray-400 sm:px-0">
              {meta.heroCreditUrl ? (
                <a
                  href={meta.heroCreditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600"
                >
                  {meta.heroCredit}
                </a>
              ) : (
                meta.heroCredit
              )}
            </figcaption>
          )}
        </figure>
      )}

      <nav
        aria-label="パンくず"
        className="not-prose mb-2 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900 hover:underline">
          ホーム
        </Link>
        <span className="mx-1">/</span>
        <Link href="/articles" className="hover:text-stone-900 hover:underline">
          記事一覧
        </Link>
        {category && (
          <>
            <span className="mx-1">/</span>
            <Link
              href={`/articles/category/${category.slug}`}
              className="hover:text-stone-900 hover:underline"
            >
              {category.name}
            </Link>
          </>
        )}
      </nav>

      <p className="not-prose mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
        <span>公開: {formatDate(meta.publishedAt)}</span>
        {meta.publishedAt !== meta.updatedAt && (
          <span>更新: {formatDate(meta.updatedAt)}</span>
        )}
        <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-stone-700">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
          </svg>
          約 {readingMinutes} 分
        </span>
      </p>

      {children}

      <ArticlePrevNext current={meta} />

      <hr className="my-8" />

      <h2>関連記事</h2>
      <ul className="not-prose grid grid-cols-1 gap-3 sm:grid-cols-2">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/articles/${r.slug}`}
              className="flex h-full overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50"
            >
              {r.heroImage && (
                <div className="relative h-auto w-24 shrink-0 sm:w-28">
                  <Image
                    src={r.heroImage}
                    alt={`${r.title} — 関連記事サムネイル`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-3">
                <div className="text-sm font-semibold leading-snug text-gray-900">
                  {r.title}
                </div>
                <div className="mt-1 line-clamp-2 text-xs text-gray-500">
                  {r.lead}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="not-prose mt-6 text-xs text-gray-500">
        <Link href="/articles" className="hover:text-gray-900 underline">
          すべての記事を見る →
        </Link>
      </p>

      {meta.tags.length > 0 && (
        <>
          <hr className="my-8" />
          <h2 className="not-prose mb-2 text-sm font-semibold text-stone-700">
            関連タグ
          </h2>
          <ul className="not-prose flex flex-wrap gap-2 text-sm">
            {meta.tags.map((t) => (
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

      <hr className="my-8" />

      <p className="not-prose text-xs text-gray-500">
        この記事は KumaWatch 編集部が執筆しました。実際のクマ対策にあたっては、各自治体の最新情報・専門家の指示・現地ガイドの判断にも従ってください。
      </p>
    </PageShell>
  );
}
