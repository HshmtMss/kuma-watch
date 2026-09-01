import Image from "next/image";
import type { Product } from "@/lib/products";

/**
 * 注目掲載（有料枠）のカード。通常の ProductCard との差は 3 つだけ:
 *   ① 製品写真が入る（通常掲載は文字のみ）
 *   ② 横幅いっぱいで、特長まで書ける
 *   ③ カテゴリの先頭に固定される（呼び出し側の責務）
 *
 * 差を「目立ち方」に閉じているのは、掲載順や見た目で差をつけても、製品の
 * 選定基準・注意書きの書き方は有料無料で変えないため（読者の判断材料を
 * 金額で歪めない）。PR 表記は景表法・ステマ規制に沿って常に出す。
 *
 * imageUrl が空のときは写真枠のプレースホルダを出す。/for-vendors の掲載例で
 * 「写真はご提供いただく」ことを示すのにも使う。
 */
type Props = { product: Product };

function isExternal(url: string): boolean {
  return /^https?:\/\//.test(url);
}

export default function FeaturedProductCard({ product }: Props) {
  const p = product;
  const isAffiliate = Boolean(p.affiliateUrl);
  const linkHref = isAffiliate ? p.affiliateUrl : p.url;
  const ext = isExternal(linkHref);

  return (
    <article className="overflow-hidden rounded-2xl border-2 border-amber-300 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row">
        {/* 写真 */}
        <div className="relative aspect-[16/10] w-full shrink-0 bg-stone-100 sm:aspect-auto sm:h-auto sm:w-56">
          {p.imageUrl ? (
            <Image
              src={p.imageUrl}
              alt={p.name}
              fill
              sizes="(max-width: 640px) 100vw, 224px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full min-h-36 w-full items-center justify-center border-b border-dashed border-stone-300 p-4 text-center text-[11px] leading-relaxed text-stone-400 sm:border-b-0 sm:border-r">
              製品写真
              <br />
              （貴社ご提供）
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 p-4">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
            <span className="rounded-sm bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-800">
              注目
            </span>
            {isAffiliate && (
              <span
                className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-600"
                aria-label="広告（アフィリエイトリンク）"
                title="広告（アフィリエイトリンク）"
              >
                PR
              </span>
            )}
          </div>

          <h3 className="m-0 text-lg font-bold leading-snug text-amber-800">
            {p.name}
          </h3>
          {p.vendor && (
            <p className="mt-0.5 text-xs text-stone-500">{p.vendor}</p>
          )}

          {p.purpose && (
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              {p.purpose}
            </p>
          )}
          {p.features && (
            <p className="mt-1.5 text-[13px] leading-relaxed text-stone-600">
              {p.features}
            </p>
          )}

          <dl className="mt-2.5 space-y-1 text-xs text-stone-600">
            {p.price && (
              <div className="flex gap-1.5">
                <dt className="shrink-0 text-stone-400">価格</dt>
                <dd className="font-medium tabular-nums text-stone-800">
                  {p.price}
                </dd>
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
                <dd className="text-amber-800">{p.caveats}</dd>
              </div>
            )}
          </dl>

          {linkHref && (
            <a
              href={linkHref}
              {...(ext
                ? {
                    target: "_blank",
                    rel: isAffiliate
                      ? "sponsored noopener noreferrer"
                      : "noopener noreferrer",
                  }
                : {})}
              className="mt-3 inline-flex items-center justify-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-700"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {isAffiliate ? "詳しく見る（PR）" : "公式サイト"}
              {ext && <span aria-hidden> ↗</span>}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
