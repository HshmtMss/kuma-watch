import type { Product } from "@/lib/products";

type Props = { product: Product };

function isExternal(url: string): boolean {
  return /^https?:\/\//.test(url);
}

export default function ProductCard({ product }: Props) {
  const p = product;
  // affiliateUrl が入っていれば優先。空なら通常 URL に直接遷移し PR 表記も出さない。
  // この分岐ロジックがあることで、契約後は CSV の affiliate_url 列を埋めるだけで
  // PR バッジ + sponsored リンクが自動的に有効化される。
  const isAffiliate = Boolean(p.affiliateUrl);
  const linkHref = isAffiliate ? p.affiliateUrl : p.url;
  const ext = isExternal(linkHref);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <header className="mb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold leading-snug text-stone-900 sm:text-base">
            {p.name}
          </h3>
          {isAffiliate && (
            <span
              className="shrink-0 rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-600"
              aria-label="広告（アフィリエイトリンク）"
              title="広告（アフィリエイトリンク）"
            >
              PR
            </span>
          )}
        </div>
        {p.vendor && (
          <p className="mt-0.5 text-xs text-stone-500">{p.vendor}</p>
        )}
      </header>

      {p.purpose && (
        <p className="mb-2 text-sm leading-relaxed text-stone-700">{p.purpose}</p>
      )}

      <dl className="mt-auto space-y-1 text-xs text-stone-600">
        {p.price && (
          <div className="flex gap-1.5">
            <dt className="shrink-0 text-stone-400">価格</dt>
            <dd className="font-medium tabular-nums text-stone-800">{p.price}</dd>
          </div>
        )}
        {p.targetUse && (
          <div className="flex gap-1.5">
            <dt className="shrink-0 text-stone-400">シーン</dt>
            <dd>{p.targetUse}</dd>
          </div>
        )}
        {p.caveats && (
          <div className="flex gap-1.5">
            <dt className="shrink-0 text-amber-700">注意</dt>
            <dd className="text-stone-700">{p.caveats}</dd>
          </div>
        )}
      </dl>

      {linkHref && (
        <a
          href={linkHref}
          target={ext ? "_blank" : undefined}
          rel={
            ext
              ? isAffiliate
                ? "sponsored noopener noreferrer"
                : "noopener noreferrer"
              : undefined
          }
          className="mt-3 inline-flex items-center justify-center gap-1 rounded-full border border-amber-400 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-100"
        >
          詳細を見る
          {ext && (
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          )}
        </a>
      )}
    </article>
  );
}
