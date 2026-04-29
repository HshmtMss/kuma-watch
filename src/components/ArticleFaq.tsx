import type { ReactNode } from "react";

export type FaqItem = {
  q: string;
  /** 表示用の JSX (リッチに書ける) */
  a: ReactNode;
  /** 構造化データ用のプレーンテキスト答え (HTML タグ無し) */
  aText: string;
};

type Props = {
  items: FaqItem[];
};

export default function ArticleFaq({ items }: Props) {
  if (items.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.aText,
      },
    })),
  };

  return (
    <section className="not-prose mt-4 rounded-xl border border-stone-200 bg-stone-50 p-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <dl className="space-y-4">
        {items.map((it, i) => (
          <div key={i}>
            <dt className="flex items-start gap-2 text-sm font-semibold text-stone-900">
              <span className="text-amber-600">Q.</span>
              <span>{it.q}</span>
            </dt>
            <dd className="mt-1 flex items-start gap-2 text-sm leading-relaxed text-stone-700">
              <span className="text-amber-600">A.</span>
              <span>{it.a}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
