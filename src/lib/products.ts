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
  /** アフィリエイトトラッキング付き URL。空ならアフィリエイト未提携で url に直接遷移。
   *  この列に値が入った時点で、ProductCard 側で PR 表記と rel="sponsored" が自動的に有効化される。 */
  affiliateUrl: string;
  /** カンマ区切りのシーンキー (nora/trail/camp/home)。空はシーン非該当(情報・捕獲等)。 */
  scene: string;
};

// 利用シーン軸。カテゴリ(撃退忌避…)とは別に「どの場面で使うか」で横断的に絞る。
// LINE 通知の ?scene= (trail/home) ともキーを共有し、送客がそのまま該当シーンに着地する。
export const SCENE_ORDER: readonly string[] = ["nora", "trail", "camp", "home"];

export const SCENE_LABEL: Record<string, string> = {
  nora: "農作業・山菜採り",
  trail: "登山・ハイキング",
  camp: "キャンプ・野営",
  home: "暮らし・住まい",
};

/** 製品が指定シーンに該当するか。 */
export function hasScene(p: Product, scene: string): boolean {
  return p.scene.split(",").map((s) => s.trim()).includes(scene);
}

/** シーンで絞り込み (空シーンの製品は特定シーン選択時には出さない)。 */
export function getProductsForScene(products: Product[], scene: string): Product[] {
  return products.filter((p) => hasScene(p, scene));
}

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

// 記事クラスタのエイリアス。CSV の related_article は 1 記事しか指定できないが、
// テーマ的に関連する複数記事をここでまとめて、各記事ページの「関連製品」セクションに
// 同じ製品群を出せるようにする。例えば autumn-forecast-2026 を開いた読者には、
// 既に bear-spray / bear-bell / electric-fence 等に紐付いている製品を見せたい。
const ARTICLE_ALIASES: Record<string, string[]> = {
  // 秋の予報記事 → 秋向けに必要な装備全般
  "autumn-forecast-2026": [
    "autumn",
    "bear-spray",
    "bear-bell",
    "electric-fence",
    "bear-canister",
    "home-protection",
    "weapons",
  ],
  // 2025 振り返り → データ・知見系。製品より調査系・自治体ソリューションも
  "bear-2025-retrospective": [
    "why-increasing",
    "culling-debate",
    "bear-tracks",
    "bear-laws",
  ],
  // ブナ凶作の解説 → 秋系と同じ装備群を見せる
  "beech-mast-bear": [
    "autumn",
    "bear-spray",
    "bear-bell",
    "electric-fence",
    "home-protection",
  ],
  // 農業従事者向け → 電気柵・撃退装置中心。自治体製品も
  "bear-agriculture": [
    "electric-fence",
    "home-protection",
    "bear-spray",
    "bear-tracks",
  ],
  // アーバン・ベア → 住宅装備・撃退装備全般
  "urban-bear": [
    "home-protection",
    "bear-spray",
    "bear-bell",
    "weapons",
    "bear-app",
  ],
  // 通報マニュアル → 緊急時系（応急処置・スプレー等）
  "bear-report": [
    "bear-spray",
    "home-protection",
    "first-aid",
    "bear-app",
  ],
  // 犬関連 → 家屋・スプレー・登山
  "bear-and-dogs": [
    "home-protection",
    "bear-spray",
    "bear-bell",
    "bear-detection-ai",
  ],
  // 製品比較 → 全装備（横断比較なので幅広く）
  "repellent-comparison": [
    "bear-spray",
    "bear-bell",
    "electric-fence",
    "home-protection",
    "bear-canister",
    "weapons",
    "bear-tracks",
  ],
  // 指定管理鳥獣化 → 自治体系（捕獲・モニタリング）
  "designated-management-2026": [
    "bear-tracks",
    "bear-detection-ai",
    "electric-fence",
    "weapons",
  ],
  // 補償ガイド → 保険・全般
  "bear-compensation": [
    "bear-insurance",
    "home-protection",
    "first-aid",
  ],
  // 狩猟免許ガイド → 装備・捕獲
  "hunter-license-guide": [
    "weapons",
    "bear-tracks",
    "bear-detection-ai",
  ],
  // 災害時 → 家屋・装備全般
  "disaster-bear": [
    "home-protection",
    "bear-spray",
    "electric-fence",
    "bear-app",
  ],
  // 自動車衝突 → 装備・保険・モニタリング
  "vehicle-collision": [
    "bear-app",
    "bear-tracks",
    "bear-detection-ai",
  ],
  // モニタリング → 検知系装備
  "bear-monitoring": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // インバウンド → 登山装備
  "inbound-tourism": [
    "bear-spray",
    "bear-bell",
    "bear-canister",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.1 (Smith 2008 スプレー) → スプレー中心
  "research-digest-001": [
    "bear-spray",
    "weapons",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.2 (Beckmann 2003 夜行性) → 家屋・誘引物管理
  "research-digest-002": [
    "home-protection",
    "bear-app",
    "bear-detection-ai",
  ],
  // 研究ダイジェスト Vol.3 (Clapham 2020 AI 顔認識) → モニタリング系
  "research-digest-003": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.4 (Pigeon 2016 冬眠) → 装備・モニタリング全般
  "research-digest-004": [
    "bear-spray",
    "bear-tracks",
    "home-protection",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.5 (Niimura 2014 嗅覚) → 誘引物管理
  "research-digest-005": [
    "home-protection",
    "bear-canister",
    "electric-fence",
  ],
  // 研究ダイジェスト Vol.6 (Erlenbach 2014 食性) → 農業・家屋
  "research-digest-006": [
    "electric-fence",
    "home-protection",
    "bear-canister",
  ],
  // 研究ダイジェスト Vol.7 (Huygens 2001 電気柵) → 電気柵中心
  "research-digest-007": [
    "electric-fence",
    "home-protection",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.8 (Tøien 2011 冬眠生理) → 検知系・モニタリング
  "research-digest-008": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.9 (Linnell 1997 捕獲移動) → 全般対策
  "research-digest-009": [
    "electric-fence",
    "home-protection",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.10 (Vonk 2012 認知能力) → 家屋・モニタリング
  "research-digest-010": [
    "home-protection",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.11 (Spady 2007 繁殖) → 全般
  "research-digest-011": [
    "bear-tracks",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.12 (Herrero 2011 致命的襲撃) → 緊急時装備
  "research-digest-012": [
    "bear-spray",
    "weapons",
    "bear-canister",
    "first-aid",
  ],
  // 研究ダイジェスト Vol.13 (Clapham 2014 樹幹マーキング) → 痕跡系
  "research-digest-013": [
    "bear-tracks",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.14 (Bombieri 2019 世界襲撃メタ) → 登山装備
  "research-digest-014": [
    "bear-spray",
    "bear-bell",
    "bear-canister",
    "first-aid",
  ],
  // 研究ダイジェスト Vol.15 (Liu 2014 進化) → モニタリング系
  "research-digest-015": [
    "bear-detection-ai",
    "bear-app",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.16 (Sommer 2016 腸内細菌) → モニタリング・全般
  "research-digest-016": [
    "bear-detection-ai",
    "bear-app",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.17 (Christiansen 2007 咬合力) → 緊急時装備
  "research-digest-017": [
    "bear-spray",
    "first-aid",
    "weapons",
  ],
  // 研究ダイジェスト Vol.18 (Hocking 2011 生態系エンジニア) → モニタリング・全般
  "research-digest-018": [
    "bear-tracks",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.19 (Stonorov 1972 社会階層) → モニタリング系
  "research-digest-019": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.20 (Beckmann 2004 嫌悪条件付け) → 装備全般
  "research-digest-020": [
    "bear-spray",
    "home-protection",
    "bear-detection-ai",
  ],
  // 研究ダイジェスト Vol.21 (Trentino 再導入) → 全般
  "research-digest-021": [
    "bear-tracks",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.22 (GPS テレメトリー) → モニタリング系
  "research-digest-022": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.23 (Schwartz 2006 仔グマ生存率) → モニタリング
  "research-digest-023": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.24 (Linnell 2000 巣穴) → 痕跡・モニタリング
  "research-digest-024": [
    "bear-tracks",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.25 (鳴き声) → モニタリング
  "research-digest-025": [
    "bear-detection-ai",
    "bear-app",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.26 (Pagano 2018 エネルギー) → モニタリング
  "research-digest-026": [
    "bear-detection-ai",
    "bear-tracks",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.27 (Penteriani 2017 観光) → 観光関連
  "research-digest-027": [
    "bear-app",
    "bear-tracks",
    "bear-detection-ai",
  ],
  // 研究ダイジェスト Vol.28 (Mertens 2001 家畜) → 家畜防御
  "research-digest-028": [
    "electric-fence",
    "home-protection",
    "bear-tracks",
  ],
  // 研究ダイジェスト Vol.29 (Wilmers 2003 腐肉食) → モニタリング
  "research-digest-029": [
    "bear-tracks",
    "bear-detection-ai",
    "bear-app",
  ],
  // 研究ダイジェスト Vol.30 (Carter & Linnell 2016 総括) → 全カテゴリ横断
  "research-digest-030": [
    "bear-spray",
    "electric-fence",
    "home-protection",
    "bear-detection-ai",
    "bear-app",
  ],
};

export function getProductsForArticleSlug(slug: string): Product[] {
  const direct = (raw.products as Product[]).filter(
    (p) => extractArticleSlug(p.relatedArticle) === slug,
  );
  const aliasSlugs = ARTICLE_ALIASES[slug] ?? [];
  const aliasProducts = aliasSlugs.flatMap((s) =>
    (raw.products as Product[]).filter(
      (p) => extractArticleSlug(p.relatedArticle) === s,
    ),
  );
  // id で重複排除（同じ製品が direct とエイリアス双方に当たる場合に備える）
  const seen = new Set<string>();
  return [...direct, ...aliasProducts].filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
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
