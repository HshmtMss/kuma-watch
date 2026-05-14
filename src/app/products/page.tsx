import type { Metadata } from "next";
import Link from "next/link";
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

type SearchParams = Promise<{ for?: string }>;

const AUDIENCES = [
  { key: "個人", path: "", label: "個人向け", desc: "登山・キャンプ・農作業・自宅周辺で備える装備" },
  { key: "自治体", path: "?for=gov", label: "自治体向け", desc: "AI 検知・撃退装置・捕獲・コンサル等の業務用ソリューション" },
] as const;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const audience: "個人" | "自治体" = sp.for === "gov" ? "自治体" : "個人";

  const products = getProductsForAudience(audience);
  const grouped = groupByCategory(products);

  return (
    <PageShell
      title="クマ対策の製品・サービス"
      lead="KumaWatch がまず最初のクマ出没情報をお届けしたうえで、次の行動につながる製品・サービスを整理しました。価格・出典は外部リンク先で必ずご確認ください。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">対策製品</span>
      </nav>

      <div
        role="tablist"
        aria-label="対象別タブ"
        className="not-prose mb-6 flex flex-wrap gap-2"
      >
        {AUDIENCES.map((a) => {
          const active = a.key === audience;
          return (
            <Link
              key={a.key}
              href={`/products${a.path}`}
              role="tab"
              aria-selected={active}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-amber-500 bg-amber-100 text-amber-900"
                  : "border-stone-200 bg-white text-stone-600 hover:border-amber-300 hover:bg-amber-50"
              }`}
            >
              {a.label}
            </Link>
          );
        })}
      </div>

      <p className="not-prose mb-4 text-sm text-stone-600">
        {AUDIENCES.find((a) => a.key === audience)?.desc}
        <span className="ml-2 text-stone-400">（{products.length} 件）</span>
      </p>

      {grouped.length > 0 && (
        <nav
          aria-label="カテゴリ目次"
          className="not-prose mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3"
        >
          <div className="mb-2 text-xs font-semibold text-amber-800">
            カテゴリから探す
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {grouped.map((group) => {
              const total = group.subcategories.reduce(
                (n, s) => n + s.products.length,
                0,
              );
              return (
                <li key={group.category}>
                  <a
                    href={`#${CATEGORY_ID[group.category] ?? group.category}`}
                    className="inline-flex items-baseline gap-1 rounded-full border border-amber-300 bg-white px-3 py-1 text-xs font-semibold text-amber-900 hover:bg-amber-100"
                  >
                    {CATEGORY_LABEL[group.category] ?? group.category}
                    <span className="text-[10px] font-normal tabular-nums text-amber-700">
                      {total}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {grouped.length === 0 && (
        <p className="not-prose text-sm text-stone-500">該当する製品がありません。</p>
      )}

      {grouped.map((group) => (
        <section
          key={group.category}
          id={CATEGORY_ID[group.category] ?? group.category}
          className="not-prose mt-8 scroll-mt-20"
        >
          <h2 className="mb-1 text-lg font-bold text-stone-900 sm:text-xl">
            {CATEGORY_LABEL[group.category] ?? group.category}
          </h2>
          {CATEGORY_DESC[group.category] && (
            <p className="mb-3 text-xs text-stone-500">
              {CATEGORY_DESC[group.category]}
            </p>
          )}
          {group.subcategories.map((sub) => (
            <div key={sub.subcategory} className="mt-4">
              {sub.subcategory && (
                <h3 className="mb-2 text-sm font-semibold text-stone-700">
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

      <aside className="not-prose mt-10 rounded-2xl border border-stone-200 bg-white p-4 text-xs leading-relaxed text-stone-600">
        <p className="font-semibold text-stone-700">この一覧について</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            掲載は獣医工学ラボの調査に基づく参考情報です。最新の価格・在庫・仕様は各販売元のサイトでご確認ください。
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
    </PageShell>
  );
}
