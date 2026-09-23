import Image from "next/image";
import type { Product } from "@/lib/products";

/**
 * 注目掲載（有料枠）のカード。通常の ProductCard との差は 3 つだけ:
 *   ① 製品写真が入る（通常掲載は文字のみ）
 *   ② 横幅いっぱいで、特長まで書ける
 *   ③ 一覧の先頭に固定される（呼び出し側の責務）
 *
 * 差を「目立ち方」に閉じているのは、掲載順や見た目で差をつけても、製品の
 * 選定基準・注意書きの書き方は有料無料で変えないため（読者の判断材料を
 * 金額で歪めない）。PR 表記は景表法・ステマ規制に沿って常に出す。
 *
 * 左は写真・バッジ・ボタンをまとめた製品パネル、右は説明文。写真は
 * object-contain で、縦長でも横長でも製品が欠けないようにしてある。かわりに
 * 比率によっては写真の上下が余るので、その余白をボタンが埋める形にしている。
 *
 * imageUrl が空のときは写真枠のプレースホルダを出す。/for-vendors の掲載例で
 * 「写真はご提供いただく」ことを示すのにも使う。
 */
type Props = {
  product: Product;
  /** 掲載サンプルとして見せる場合。写真に薄く SAMPLE の透かしを重ねる。
   *  画像ファイル自体には焼き込まない（本番の有料掲載は同じ部品を透かし無しで使う）。 */
  sample?: boolean;
};

function isExternal(url: string): boolean {
  return /^https?:\/\//.test(url);
}

export default function FeaturedProductCard({ product, sample = false }: Props) {
  const p = product;
  const isAffiliate = Boolean(p.affiliateUrl);
  // 有料掲載そのものが広告なので、アフィリエイトリンクでなくても PR 表記と
  // rel="sponsored" を出す。/for-vendors で「有料掲載枠には必ず付ける」と約束している。
  const isAd = isAffiliate || p.featured;
  const linkHref = isAffiliate ? p.affiliateUrl : p.url;
  const ext = isExternal(linkHref);
  const adLabel = isAffiliate ? "広告（アフィリエイトリンク）" : "広告（有料掲載）";

  return (
    <article className="overflow-hidden rounded-2xl border-2 border-amber-300 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row">
        {/* 製品パネル: バッジ → 写真 → ボタン。スマホでもこの順にしているのは、
            ボタンより先に PR 表記が目に入るようにするため。 */}
        <div className="flex shrink-0 flex-col border-b border-stone-200 sm:w-56 sm:border-b-0 sm:border-r">
          <div className="flex flex-wrap items-center gap-1.5 px-4 pt-4 sm:px-3 sm:pt-3">
            <span className="rounded-sm bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-800">
              注目
            </span>
            {isAd && (
              <span
                className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-600"
                aria-label={adLabel}
                title={adLabel}
              >
                PR
              </span>
            )}
          </div>

          {/* 写真。PC では残りの高さいっぱいに伸ばし、製品を中央に置く。 */}
          <div className="relative aspect-[16/10] w-full sm:aspect-auto sm:min-h-36 sm:flex-1">
            {p.imageUrl ? (
              <>
                <Image
                  src={p.imageUrl}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  className="object-contain p-2 sm:p-3"
                />
                {sample && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    {/* 明るい写真にも暗い写真にも乗るよう、白＋影で抜く。 */}
                    <span className="-rotate-[20deg] whitespace-nowrap text-xl font-black tracking-[0.3em] text-white/75 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] sm:text-2xl">
                      SAMPLE
                    </span>
                  </span>
                )}
              </>
            ) : (
              <div className="absolute inset-3 flex items-center justify-center rounded-lg border border-dashed border-stone-300 p-4 text-center text-[11px] leading-relaxed text-stone-400">
                製品写真
                <br />
                （貴社ご提供）
              </div>
            )}
          </div>

          {linkHref && (
            <div className="px-4 pb-4 sm:px-3 sm:pb-3">
              <a
                href={linkHref}
                {...(ext
                  ? {
                      target: "_blank",
                      rel: isAd
                        ? "sponsored noopener noreferrer"
                        : "noopener noreferrer",
                    }
                  : {})}
                className="flex w-full items-center justify-center gap-1 rounded-full bg-amber-600 px-3 py-2 text-center text-[13px] font-semibold leading-tight text-white hover:bg-amber-700 sm:text-sm"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                {p.ctaLabel || (isAffiliate ? "詳しく見る（PR）" : "公式サイト")}
                {ext && <span aria-hidden> ↗</span>}
              </a>
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 p-4">
          <h3 className="m-0 text-lg font-bold leading-snug text-amber-800">
            {p.name}
          </h3>
          {p.vendor && (
            <p className="mt-0.5 text-xs text-stone-500">{p.vendor}</p>
          )}

          {p.purpose && (
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-700">
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
        </div>
      </div>
    </article>
  );
}
