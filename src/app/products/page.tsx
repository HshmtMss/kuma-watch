import type { Metadata } from "next";
import Link from "next/link";
import CategoryTiles, {
  type CategoryTileItem,
} from "@/components/CategoryTiles";
import {
  User,
  Landmark,
  SprayCan,
  Fence,
  House,
  Backpack,
  Radar,
  Crosshair,
  BookOpen,
  LayoutGrid,
  Wheat,
  Footprints,
  Tent,
  type LucideIcon,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/ProductCard";
import BearGearAffiliate from "@/components/BearGearAffiliate";
import {
  CATEGORY_DESC,
  CATEGORY_ID,
  CATEGORY_LABEL,
  SCENE_ORDER,
  SCENE_LABEL,
  getProductsForAudience,
  getProductsForScene,
  groupByCategory,
} from "@/lib/products";

const SITE_URL = "https://kuma-watch.jp";

// 製品カテゴリ → Lucide アイコン（絞り込みタイル用）。
const PRODUCT_CATEGORY_ICON: Record<string, LucideIcon> = {
  撃退忌避: SprayCan,
  防護柵: Fence,
  住宅誘引物: House,
  個人装備: Backpack,
  監視検知: Radar,
  捕獲駆除: Crosshair,
  情報教育: BookOpen,
};

// シーン → Lucide アイコン。
const SCENE_ICON: Record<string, LucideIcon> = {
  nora: Wheat,
  trail: Footprints,
  camp: Tent,
  home: House,
};

export const metadata: Metadata = {
  title: "クマ対策の製品・サービス｜獣医師監修",
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

type SearchParams = Promise<{ for?: string; cat?: string; scene?: string }>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const audience: "個人" | "自治体" = sp.for === "gov" ? "自治体" : "個人";

  const products = getProductsForAudience(audience);
  // アフィリ製品が1件でもあれば PR 開示を出す (無ければ出さない=誤解を招かない)。
  const hasAffiliate = products.some((p) => Boolean(p.affiliateUrl));

  // シーンフィルタ (農作業・山菜採り / 登山 / キャンプ / 暮らし)。LINE の ?scene= とキー共有。
  const activeScene: string =
    sp.scene && SCENE_ORDER.includes(sp.scene) ? sp.scene : "all";
  const sceneProducts =
    activeScene === "all" ? products : getProductsForScene(products, activeScene);
  const grouped = groupByCategory(sceneProducts);

  // カテゴリフィルタ。音声から探す導線を anchor jump → URL クエリ式に変更し、
  // /articles と同じ操作感に統一する。
  const validCats = new Set(grouped.map((g) => g.category));
  const activeCat: string =
    sp.cat && validCats.has(sp.cat) ? sp.cat : "all";

  const visibleGroups =
    activeCat === "all"
      ? grouped
      : grouped.filter((g) => g.category === activeCat);

  // 各種リンク生成。フィルタ間で他の軸(for/scene/cat)を保持する。
  const buildHref = (opts: { gov: boolean; scene: string; cat?: string }) => {
    const params = new URLSearchParams();
    if (opts.gov) params.set("for", "gov");
    if (opts.scene !== "all") params.set("scene", opts.scene);
    if (opts.cat && opts.cat !== "all") params.set("cat", opts.cat);
    const qs = params.toString();
    return `/products${qs ? `?${qs}` : ""}`;
  };
  // 対象切替は cat をリセット(組合せで空になり得るため)。scene は保持。
  const audienceBaseHref = (aud: "個人" | "自治体") =>
    buildHref({ gov: aud === "自治体", scene: activeScene });
  // シーン切替も cat をリセット。for は保持。
  const sceneHref = (scene: string) =>
    buildHref({ gov: audience === "自治体", scene });
  const catHref = (cat: string) =>
    buildHref({ gov: audience === "自治体", scene: activeScene, cat });

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

      <CategoryTiles
        title="対象で絞り込み"
        activeKey={audience}
        items={[
          {
            key: "個人",
            href: audienceBaseHref("個人"),
            label: "個人向け",
            icon: User,
          },
          {
            key: "自治体",
            href: audienceBaseHref("自治体"),
            label: "自治体向け",
            icon: Landmark,
          },
        ]}
      />

      <CategoryTiles
        title="シーンで絞り込み"
        activeKey={activeScene}
        items={[
          {
            key: "all",
            href: sceneHref("all"),
            label: "すべて",
            icon: LayoutGrid,
            count: products.length,
          },
          ...SCENE_ORDER.map<CategoryTileItem>((s) => ({
            key: s,
            href: sceneHref(s),
            label: SCENE_LABEL[s],
            icon: SCENE_ICON[s],
            count: getProductsForScene(products, s).length,
          })),
        ]}
      />

      <CategoryTiles
        title="カテゴリで絞り込み"
        activeKey={activeCat}
        items={[
          {
            key: "all",
            href: catHref("all"),
            label: "すべて",
            icon: LayoutGrid,
            count: sceneProducts.length,
          },
          ...grouped.map<CategoryTileItem>((g) => ({
            key: g.category,
            href: catHref(g.category),
            label: CATEGORY_LABEL[g.category] ?? g.category,
            icon: PRODUCT_CATEGORY_ICON[g.category],
            count: g.subcategories.reduce((n, s) => n + s.products.length, 0),
          })),
        ]}
      />

      {hasAffiliate && (
        <p className="not-prose mt-4 border-l-[3px] border-stone-200 bg-stone-50 px-3 py-2 text-[11px] leading-relaxed text-stone-500">
          ※「
          <span className="font-semibold text-stone-600">◯◯で見る（PR）</span>
          」は広告（アフィリエイトリンク）を含みます。「公式サイト」は情報として掲載しているリンクです。掲載製品は編集方針にもとづき選定しており、広告の有無は掲載順に影響しません。
        </p>
      )}

      {/* 定番の対策グッズをAmazonで探す（アフィリエイト・フラグ裏）。
          下のキュレーション製品とは別に、まず手早く探せる導線として上部に置く。
          個人向けのみ表示（自治体向けは下のキュレーション製品＝防護柵・監視等が主）。
          LINE 通知からの scene（trail/home）を受け取り、商品セットを合わせる。 */}
      {audience === "個人" && (
        <BearGearAffiliate className="not-prose mt-6" scene={sp.scene} />
      )}

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
            までご連絡ください。掲載のご案内は{" "}
            <Link
              href="/for-vendors"
              className="font-medium text-amber-700 hover:underline"
            >
              製品・サービスの掲載
            </Link>
            ページもご参照ください。
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
