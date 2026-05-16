import type { Metadata } from "next";
import Link from "next/link";
import CategoryFilter, {
  type CategoryFilterItem,
} from "@/components/CategoryFilter";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/ProductCard";
import {
  CATEGORY_DESC,
  CATEGORY_ID,
  CATEGORY_LABEL,
  getProductsForAudience,
  groupByCategory,
} from "@/lib/products";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "クマ対策の製品・サービス｜獣医師監修｜KumaWatch",
  description:
    "獣医師監修・獣医工学ラボ運営。クマ撃退スプレー、電気柵、ベアキャニスター、AI 検知システムなど、クマ対策に有効な製品・サービスを個人向け・自治体向けに整理。出典付きで実用情報を提供します。",
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "クマ対策の製品・サービス｜KumaWatch",
    description:
      "クマ対策に有効な製品・サービスを個人向け・自治体向けに整理。獣医師監修。",
    url: `${SITE_URL}/products`,
    type: "website",
  },
};

type SearchParams = Promise<{ for?: string; cat?: string }>;

// 各カテゴリの絵文字。CategoryFilter で表示。
const CATEGORY_EMOJI: Record<string, string> = {
  撃退忌避: "🌶️",
  防護柵: "🚧",
  住宅誘引物: "🏠",
  個人装備: "🎒",
  監視検知: "📷",
  捕獲駆除: "🪤",
  情報教育: "📚",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const audience: "個人" | "自治体" = sp.for === "gov" ? "自治体" : "個人";

  const products = getProductsForAudience(audience);
  const grouped = groupByCategory(products);

  // カテゴリフィルタ。音声から探す導線を anchor jump → URL クエリ式に変更し、
  // /articles と同じ操作感に統一する。
  const validCats = new Set(grouped.map((g) => g.category));
  const activeCat: string =
    sp.cat && validCats.has(sp.cat) ? sp.cat : "all";

  const visibleGroups =
    activeCat === "all"
      ? grouped
      : grouped.filter((g) => g.category === activeCat);

  const audienceBaseHref = (aud: "個人" | "自治体") =>
    aud === "自治体" ? "/products?for=gov" : "/products";

  const catHref = (cat: string) => {
    const params = new URLSearchParams();
    if (audience === "自治体") params.set("for", "gov");
    if (cat !== "all") params.set("cat", cat);
    const qs = params.toString();
    return `/products${qs ? `?${qs}` : ""}`;
  };

  return (
    <PageShell
      title="クマ対策の製品・サービス"
      lead="クマ対策に関する製品・サービスを整理しました。価格・在庫・仕様は外部リンク先で必ずご確認ください。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/measures" className="hover:text-stone-900">
          対策
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">対策製品</span>
      </nav>

      <CategoryFilter
        title="対象で絞り込み"
        accent="emerald"
        activeKey={audience}
        sticky={false}
        items={[
          {
            key: "個人",
            href: audienceBaseHref("個人"),
            label: "個人向け",
            emoji: "🧑",
          },
          {
            key: "自治体",
            href: audienceBaseHref("自治体"),
            label: "自治体向け",
            emoji: "🏛️",
          },
        ]}
      />

      <CategoryFilter
        title="カテゴリで絞り込み"
        accent="amber"
        activeKey={activeCat}
        items={[
          {
            key: "all",
            href: catHref("all"),
            label: "すべて",
            count: products.length,
          },
          ...grouped.map<CategoryFilterItem>((g) => ({
            key: g.category,
            href: catHref(g.category),
            label: CATEGORY_LABEL[g.category] ?? g.category,
            emoji: CATEGORY_EMOJI[g.category],
            count: g.subcategories.reduce(
              (n, s) => n + s.products.length,
              0,
            ),
          })),
        ]}
      />

      {grouped.length === 0 && (
        <p className="not-prose text-base text-stone-500">該当する製品がありません。</p>
      )}

      {visibleGroups.map((group) => (
        <section
          key={group.category}
          id={CATEGORY_ID[group.category] ?? group.category}
          className="not-prose mt-8 scroll-mt-20"
        >
          <h2 className="mb-1 text-xl font-bold text-stone-900 sm:text-2xl">
            {CATEGORY_LABEL[group.category] ?? group.category}
          </h2>
          {CATEGORY_DESC[group.category] && (
            <p className="mb-3 text-sm text-stone-600">
              {CATEGORY_DESC[group.category]}
            </p>
          )}
          {group.subcategories.map((sub) => (
            <div key={sub.subcategory} className="mt-4">
              {sub.subcategory && (
                <h3 className="mb-2 text-base font-semibold text-stone-700">
                  {sub.subcategory}
                </h3>
              )}
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sub.products.map((p) => (
                  <li key={p.id} className="h-full">
                    <ProductCard product={p} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

      <aside className="not-prose mt-10 rounded-2xl border border-stone-200 bg-white p-4 text-sm leading-relaxed text-stone-600">
        <p className="font-semibold text-stone-700">この一覧について</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            掲載は獣医工学ラボの調査に基づく参考情報です。最新の価格・在庫・仕様は各販売元のサイトでご確認ください。
          </li>
          <li>
            「PR」表記のあるカードはアフィリエイトリンクで、クリックや購入により当サービスに収益が発生する場合があります（製品の選定は収益の有無によらず調査に基づきます）。詳しくは{" "}
            <Link
              href="/disclaimer#affiliate"
              className="font-medium text-amber-700 hover:underline"
            >
              免責事項のアフィリエイトに関する記載
            </Link>{" "}
            をご参照ください。
          </li>
          <li>
            クマ撃退スプレー類は航空機持込不可、自治体ルールがある場合があります。携行・保管・誤噴射防止に十分ご注意ください。
          </li>
          <li>
            掲載依頼・修正・削除のご要望は{" "}
            <a
              href="mailto:contact@research-coordinate.co.jp"
              className="font-medium text-amber-700 hover:underline"
            >
              contact@research-coordinate.co.jp
            </a>{" "}
            までご連絡ください。
          </li>
        </ul>
      </aside>

      <div className="not-prose mt-10">
        <Link
          href="/measures"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-base font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50"
        >
          <span aria-hidden>←</span>
          クマ対策トップに戻る
        </Link>
      </div>
    </PageShell>
  );
}
