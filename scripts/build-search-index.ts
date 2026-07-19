#!/usr/bin/env tsx
/**
 * 全文検索用インデックスを public/search-index.json に書き出す build-time スクリプト。
 *
 * usage:
 *   npx tsx scripts/build-search-index.ts
 *   (package.json の prebuild に組み込み)
 *
 * 出力:
 *   public/search-index.json — ~200KB の JSON。全ページを以下の形式で:
 *     {
 *       type: "muni" | "article" | "research" | "spot" | "policy" | "page",
 *       title: string,
 *       url: string,
 *       snippet?: string,
 *       tokens: string  // 検索対象テキスト (タイトル + lead + タグを連結)
 *     }
 *
 * クライアント側は単純な includes() で部分一致検索。Fuse.js などは
 * bundle 増加に対して効果が薄いので使わない。日本語は形態素解析せずに
 * 部分一致で十分実用的。
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

type SearchEntry = {
  type: "muni" | "article" | "research" | "spot" | "policy" | "page";
  title: string;
  url: string;
  snippet?: string;
  tokens: string;
  /** 著名度(Wikidata サイトリンク数)。spot のみ。同名重複時の順位付けに使う。 */
  fame?: number;
};

// ── 1. 静的ページ (固定リスト) ─────────────────
const STATIC_PAGES: SearchEntry[] = [
  {
    type: "page",
    title: "トップ — 全国クマ警戒マップ",
    url: "/",
    tokens: "ホーム トップ 地図 マップ 全国 警戒 出没",
  },
  {
    type: "page",
    title: "都道府県から探す",
    url: "/place",
    tokens: "都道府県 全国 一覧 47 県",
  },
  {
    type: "page",
    title: "警戒エリア一覧 (Top 50)",
    url: "/place/ranking",
    tokens: "ランキング 警戒 ホットスポット top50 件数",
  },
  {
    type: "page",
    title: "観光地・登山口から探す",
    url: "/spot",
    tokens: "観光地 登山口 山岳 国立公園 温泉地 湖",
  },
  {
    type: "page",
    title: "クマ対策",
    url: "/measures",
    tokens: "対策 装備 記事 製品 まとめ",
  },
  {
    type: "page",
    title: "クマ対策の記事一覧",
    url: "/articles",
    tokens: "記事 一覧 対策 季節 遭遇 装備",
  },
  {
    type: "page",
    title: "クマ対策の製品・サービス",
    url: "/products",
    tokens: "製品 サービス スプレー 電気柵 装備",
  },
  {
    type: "page",
    title: "研究・知見",
    url: "/research",
    tokens: "研究 知見 レポート 分析 月次 日次",
  },
  {
    type: "page",
    title: "政府発表・政策動向",
    url: "/policy",
    tokens: "政府 環境省 農水省 林野庁 政策 発表 通知",
  },
  {
    type: "page",
    title: "自治体の方へ",
    url: "/for-gov",
    tokens: "自治体 連携 行政 公式",
  },
  {
    type: "page",
    title: "製品・サービス掲載のご案内",
    url: "/for-vendors",
    tokens: "業者 製品 掲載 広告 ベンダー",
  },
  {
    type: "page",
    title: "サイトについて",
    url: "/about",
    tokens: "サイト について 運営 獣医工学ラボ",
  },
];

// ── 2. 記事 ─────────────────────────
type ArticleMeta = {
  slug: string;
  title: string;
  description?: string;
  lead?: string;
  tags?: string[];
  season?: string;
  category?: string;
};

async function loadArticles(): Promise<SearchEntry[]> {
  const mod = await import("../src/lib/articles-meta");
  const articles = mod.ARTICLES as ArticleMeta[];
  return articles.map((a) => ({
    type: "article" as const,
    title: a.title,
    url: `/articles/${a.slug}`,
    snippet: a.lead ?? a.description ?? "",
    tokens: [
      a.title,
      a.lead ?? "",
      a.description ?? "",
      ...(a.tags ?? []),
      a.season ?? "",
      a.category ?? "",
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  }));
}

// ── 3. 研究レポート ─────────────────────
type ResearchEntry = {
  slug: string;
  title: string;
  lead: string;
  regions?: string[];
  category?: string;
};

async function loadResearch(): Promise<SearchEntry[]> {
  const mod = await import("../src/lib/research-entries");
  const entries = mod.RESEARCH_ENTRIES as ResearchEntry[];
  return entries.map((r) => ({
    type: "research" as const,
    title: r.title,
    url: `/research/${r.slug}`,
    snippet: r.lead,
    tokens: [
      r.title,
      r.lead,
      ...(r.regions ?? []),
      r.category ?? "",
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  }));
}

// ── 4. 市町村 (47 都道府県 + 1894 市町村) ────────
type JapanMuni = {
  prefName: string;
  cityName: string;
};

// 名称→ひらがな読み (gen-name-readings.ts が生成)。tokens に足して「しそう」「えのしま」
// 等の かな入力/読み検索でも市町村・観光地がヒットするようにする。
let _readings: Record<string, string> | null = null;
function getReadings(): Record<string, string> {
  if (_readings) return _readings;
  const p = join(process.cwd(), "src/data/name-readings.json");
  _readings = existsSync(p)
    ? (JSON.parse(readFileSync(p, "utf8")) as Record<string, string>)
    : {};
  return _readings;
}

async function loadMunis(): Promise<SearchEntry[]> {
  const mod = await import("../src/data/japan-municipalities");
  const munis = mod.JAPAN_MUNICIPALITIES as JapanMuni[];

  // pref 一覧 (47)
  const prefs = new Set(munis.map((m) => m.prefName));
  const prefEntries: SearchEntry[] = [...prefs].map((pref) => ({
    type: "muni" as const,
    title: `${pref} のクマ出没情報`,
    url: `/place/${encodeURIComponent(pref)}`,
    snippet: `${pref} 全市町村のクマ出没情報を集計`,
    tokens: pref.toLowerCase(),
  }));

  // muni (1894)
  const muniEntries: SearchEntry[] = munis.map((m) => ({
    type: "muni" as const,
    title: `${m.prefName} ${m.cityName}`,
    url: `/place/${encodeURIComponent(m.prefName)}/${encodeURIComponent(m.cityName)}`,
    snippet: `${m.prefName}${m.cityName} のクマ出没予報・警戒レベル`,
    // 「○○郡△△町」「△△町」両方ヒットするように郡と町を別トークンに。
    // 末尾に読み仮名 (かな入力/読み検索用) を足す。
    tokens: `${m.prefName} ${m.cityName} ${m.cityName.replace(/^[^郡市区町村]+郡/, "")} ${getReadings()[m.cityName] ?? ""}`.toLowerCase(),
  }));

  return [...prefEntries, ...muniEntries];
}

// ── 5. 観光地・登山口 ──────────────────────
type Landmark = {
  slug: string;
  name: string;
  altNames?: string[];
  prefName: string;
  muniName?: string;
  blurb?: string;
  category?: string;
  fame?: number;
};

async function loadSpots(): Promise<SearchEntry[]> {
  const mod = await import("../src/data/japan-landmarks");
  const landmarks = mod.JAPAN_LANDMARKS as Landmark[];
  // 手キュレーション分(高尾山・富士山など SEO/UX 上重要)の slug。これらだけ
  // 表示用 snippet を索引に含め、OSM 自動収集の生成スポット(数千件)は snippet を
  // 省く。全国網羅で spot が 9千件超になると snippet(生成 blurb の抜粋)の総量だけで
  // 索引が数 MB 膨張し /search 初回 fetch が重くなるため。生成スポットは名前・地名で
  // 引く用途が主で、結果カードは title + URL で成立する(SearchUI は snippet 省略可)。
  const curatedSlugs = new Set(mod.PREBUILD_SPOT_SLUGS as string[]);
  return landmarks.map((l) => {
    // snippet は curated のみ(短く切り詰め)。生成スポットは undefined→JSON から除外。
    let snippet: string | undefined;
    if (curatedSlugs.has(l.slug)) {
      const placeLabel = `${l.prefName}${l.muniName ?? ""}`;
      snippet = l.blurb
        ? l.blurb.length > 70
          ? `${l.blurb.slice(0, 70)}…`
          : l.blurb
        : `${placeLabel} の観光地・登山口`;
    }
    return {
      type: "spot" as const,
      title: l.name,
      url: `/spot/${encodeURIComponent(l.slug)}`,
      snippet,
      ...(l.fame ? { fame: l.fame } : {}),
      // tokens には blurb を含めない(名前/読み/別名/都道府県/市町村/カテゴリで十分)。
      tokens: [
        l.name,
        getReadings()[l.name] ?? "", // 読み仮名 (かな入力/読み検索用)
        ...(l.altNames ?? []),
        l.prefName,
        l.muniName ?? "",
        l.category ?? "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    };
  });
}

// ── 6. 政府発表 ────────────────────────
type GovAnnouncement = {
  id: string;
  ministry: string;
  date: string;
  title: string;
  url: string;
  summary?: string;
  category?: string;
};

function loadGovAnnouncements(): SearchEntry[] {
  const path = join(ROOT, "public", "data", "gov-announcements.json");
  if (!existsSync(path)) return [];
  try {
    const data = JSON.parse(readFileSync(path, "utf8")) as {
      items?: GovAnnouncement[];
    };
    const items = data.items ?? [];
    return items.map((it) => ({
      type: "policy" as const,
      title: it.title,
      url: "/policy", // 政府発表は /policy にまとめて表示 (個別ページなし、外部リンク)
      snippet: it.summary,
      tokens: [
        it.title,
        it.summary ?? "",
        it.ministry,
        it.category ?? "",
        it.date,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    }));
  } catch {
    return [];
  }
}

async function main(): Promise<void> {
  const entries: SearchEntry[] = [
    ...STATIC_PAGES,
    ...(await loadArticles()),
    ...(await loadResearch()),
    ...(await loadMunis()),
    ...(await loadSpots()),
    ...loadGovAnnouncements(),
  ];

  console.log(`[search-index] total: ${entries.length}`);
  for (const t of ["page", "article", "research", "muni", "spot", "policy"] as const) {
    const n = entries.filter((e) => e.type === t).length;
    console.log(`  ${t}: ${n}`);
  }

  const out = join(ROOT, "public", "search-index.json");
  // 軽量化: tokens は既に lowercase、整形しない
  writeFileSync(out, JSON.stringify(entries));
  const size = JSON.stringify(entries).length;
  console.log(
    `[search-index] wrote ${out} (${(size / 1024).toFixed(0)} KB)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
