import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProductsForArticleSlug } from "@/lib/products";

type Props = {
  slug: string;
  /** 表示上限。デフォルト 6 件で打ち切り、超過分は /products へのリンクで誘導 */
  limit?: number;
};

export default function RelatedProducts({ slug, limit = 6 }: Props) {
  const all = getProductsForArticleSlug(slug);
  if (all.length === 0) return null;

  const visible = all.slice(0, limit);
  const overflow = all.length - visible.length;
  // 自治体向け製品が含まれていれば、/products?for=gov 側に誘導したほうが見つけやすい
  const hasGov = all.some(
    (p) => p.audience === "自治体" || p.audience === "個人,自治体",
  );
  const moreHref = hasGov ? "/products?for=gov" : "/products";

  return (
    <>
      <hr className="my-8" />
      <section aria-labelledby="related-products-heading" className="not-prose">
        <h2
          id="related-products-heading"
          className="mb-1 text-lg font-bold text-stone-900 sm:text-xl"
        >
          この記事に関連する対策製品
        </h2>
        <p className="mb-4 text-xs text-stone-500">
          獣医工学ラボの調査による参考情報です。価格・在庫・仕様は外部リンク先でご確認ください。
        </p>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visible.map((p) => (
            <li key={p.id} className="h-full">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-stone-500">
          <Link href={moreHref} className="font-medium text-amber-700 hover:underline">
            {overflow > 0
              ? `他 ${overflow} 件を含む対策製品一覧 →`
              : "対策製品一覧をすべて見る →"}
          </Link>
        </p>
      </section>
    </>
  );
}
