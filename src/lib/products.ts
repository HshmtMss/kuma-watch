import raw from "@/data/products.json";

export type ProductAudience = "個人" | "自治体" | "個人,自治体";

export type Product = {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  vendor: string;
  url: string;
  price: string;
  purpose: string;
  features: string;
  targetUse: string;
  caveats: string;
  relatedArticle: string;
  priority: string;
  source: string;
  notes: string;
  audience: ProductAudience;
};

// 表示時のカテゴリ順序。撃退・物理防御 → 住宅・装備 → 監視・捕獲・情報 の流れで、
// 一般ユーザーが優先的に検討する順に並べる。
export const CATEGORY_ORDER: readonly string[] = [
  "撃退忌避",
  "防護柵",
  "住宅誘引物",
  "個人装備",
  "監視検知",
  "捕獲駆除",
  "情報教育",
];

export const CATEGORY_LABEL: Record<string, string> = {
  撃退忌避: "撃退・忌避",
  防護柵: "防護柵・物理バリア",
  住宅誘引物: "住宅・誘引物管理",
  個人装備: "個人装備",
  監視検知: "監視・検知システム",
  捕獲駆除: "捕獲・駆除",
  情報教育: "情報・教育サービス",
};

// アンカーリンク用の英字 id。日本語をそのまま id にするとブラウザ側の
// URL エンコードが安定せず、リンクが壊れるケースがあるので英字に固定。
export const CATEGORY_ID: Record<string, string> = {
  撃退忌避: "repel",
  防護柵: "fence",
  住宅誘引物: "home",
  個人装備: "gear",
  監視検知: "monitor",
  捕獲駆除: "capture",
  情報教育: "info",
};

export const CATEGORY_DESC: Record<string, string> = {
  撃退忌避: "スプレー・鈴・ホーン・忌避剤など、遭遇時／接近防止の装備",
  防護柵: "電気柵・ベアキャニスター・防臭袋など、物理的に隔てる装備",
  住宅誘引物: "センサーライト・密閉ストッカーなど、家屋周辺の誘引物管理",
  個人装備: "林業ヘルメット・GPS・応急処置など、個人の防護・救急装備",
  監視検知: "AI カメラ・トレイルカメラ・自動撃退装置",
  捕獲駆除: "箱罠・止め刺し器具・駆除サービス（自治体・猟友会向け）",
  情報教育: "財団・研究機関・専門家・行政資料の情報源",
};

function matchesAudience(p: Product, audience: "個人" | "自治体"): boolean {
  return p.audience === audience || p.audience === "個人,自治体";
}

// CSV の挿入順がユーザーの意図的な並び順（最重要を先頭に等）なので、
// audience フィルタの前後で並びは保持する。カテゴリだけは CATEGORY_ORDER で
// 全体の章立てを揃える。
export function getProductsForAudience(audience: "個人" | "自治体"): Product[] {
  return (raw.products as Product[]).filter((p) => matchesAudience(p, audience));
}

// related_article 列から末尾の slug を取り出す。
// 例: "https://kuma-watch.jp/articles/bear-spray" → "bear-spray"
function extractArticleSlug(url: string): string | null {
  if (!url) return null;
  const m = url.match(/\/articles\/([^/?#]+)/);
  return m ? m[1] : null;
}

export function getProductsForArticleSlug(slug: string): Product[] {
  return (raw.products as Product[]).filter(
    (p) => extractArticleSlug(p.relatedArticle) === slug,
  );
}

// related_article のパス部分を取り出す。
// 例: "https://kuma-watch.jp/for-gov" → "/for-gov"
function extractPagePath(url: string): string | null {
  if (!url) return null;
  const m = url.match(/^https?:\/\/[^/]+(\/[^?#]*)$/);
  if (!m) return null;
  return m[1].replace(/\/$/, "") || "/";
}

export function getProductsForPath(path: string): Product[] {
  const normalized = path.replace(/\/$/, "") || "/";
  return (raw.products as Product[]).filter(
    (p) => extractPagePath(p.relatedArticle) === normalized,
  );
}


export type CategoryGroup = {
  category: string;
  subcategories: { subcategory: string; products: Product[] }[];
};

export function groupByCategory(products: Product[]): CategoryGroup[] {
  // Map は挿入順を保持するので、サブカテゴリ・製品も CSV の出現順で並ぶ。
  const map = new Map<string, Map<string, Product[]>>();
  for (const p of products) {
    if (!map.has(p.category)) map.set(p.category, new Map());
    const sub = map.get(p.category)!;
    if (!sub.has(p.subcategory)) sub.set(p.subcategory, []);
    sub.get(p.subcategory)!.push(p);
  }
  const result: CategoryGroup[] = [];
  for (const category of CATEGORY_ORDER) {
    const sub = map.get(category);
    if (!sub) continue;
    result.push({
      category,
      subcategories: [...sub.entries()].map(([subcategory, products]) => ({
        subcategory,
        products,
      })),
    });
  }
  return result;
}

export function getProductMeta() {
  return {
    generatedAt: raw.generatedAt as string,
    total: raw.total as number,
    visibleTotal: raw.visibleTotal as number,
  };
}
