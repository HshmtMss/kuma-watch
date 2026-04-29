import Link from "next/link";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";
import { getRelatedArticles, type ArticleMeta } from "@/lib/articles-meta";

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt,
    inLanguage: "ja",
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
      { "@type": "ListItem", position: 3, name: meta.title, item: url },
    ],
  };

  return (
    <PageShell title={meta.title} lead={meta.lead}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <p className="not-prose mb-6 text-xs text-gray-500">
        公開: {formatDate(meta.publishedAt)}
        {meta.publishedAt !== meta.updatedAt && (
          <> ・ 更新: {formatDate(meta.updatedAt)}</>
        )}
      </p>

      {children}

      <hr className="my-8" />

      <h2>関連記事</h2>
      <ul className="not-prose grid grid-cols-1 gap-3 sm:grid-cols-2">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/articles/${r.slug}`}
              className="block rounded-xl border border-gray-200 bg-white p-4 hover:border-amber-400 hover:bg-amber-50"
            >
              <div className="text-sm font-semibold text-gray-900">{r.title}</div>
              <div className="mt-1 text-xs text-gray-500">{r.lead}</div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="not-prose mt-6 text-xs text-gray-500">
        <Link href="/articles" className="hover:text-gray-900 underline">
          すべての記事を見る →
        </Link>
      </p>

      <hr className="my-8" />

      <p className="not-prose text-xs text-gray-500">
        この記事は KumaWatch 編集部が執筆しました。実際のクマ対策にあたっては、各自治体の最新情報・専門家の指示・現地ガイドの判断にも従ってください。
      </p>
    </PageShell>
  );
}
