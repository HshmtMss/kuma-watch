import type { MetadataRoute } from "next";
import { ARTICLES, CATEGORIES, getAllTags, tagToSlug, TAG_MIN_INDEX } from "@/lib/articles-meta";
import { getAllPrefSummaries, getStaticPlaceKeys } from "@/lib/place-index";
import {
  RESEARCH_ENTRIES,
  researchRegionsWithCount,
} from "@/lib/research-entries";
import { JAPAN_LANDMARKS, PREBUILD_SPOT_SLUGS } from "@/data/japan-landmarks";
import { INBOUND_EN_SLUGS } from "@/data/inbound-en-spots";
import { EN_GENERATED_SLUGS } from "@/data/inbound-en-generated";
import { EN_TRAIL_SLUGS } from "@/data/en-trails";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

const SITE_URL = "https://kuma-watch.jp";

// ISR: sitemap を再生成する間隔。以前は 300s だったが、中身がほぼ変わらないのに
// 高頻度で再生成すると Google に「不安定」と見なされやすく、クロールも安定しない
// ため 1 時間に緩和。新規記事の通知遅延は最大 1h で実用上問題ない。
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: `${SITE_URL}/news`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${SITE_URL}/place`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/place/ranking`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${SITE_URL}/spot`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/measures`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/research`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/policy`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/data`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${SITE_URL}/for-gov`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/for-vendors`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/credits`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 研究記事を RESEARCH_ENTRIES から自動収集。新規記事追加時の sitemap 更新漏れを防ぐ。
  // 例外: rolling 系 (this-week) は publishedAt が固定でも常に最新内容になるので、
  // lastModified を now、頻度を hourly に上書きする。
  const ROLLING_SLUGS = new Set(["this-week"]);
  const researchEntries: MetadataRoute.Sitemap = RESEARCH_ENTRIES.map((e) => ({
    url: `${SITE_URL}/research/${e.slug}`,
    lastModified: ROLLING_SLUGS.has(e.slug) ? now : new Date(e.publishedAt),
    changeFrequency: ROLLING_SLUGS.has(e.slug)
      ? ("hourly" as const)
      : ("monthly" as const),
    priority: ROLLING_SLUGS.has(e.slug) ? 0.85 : 0.6,
  }));

  // 地域別アーカイブ /research/region/[pref]。記事内で言及された都道府県分。
  const researchRegionEntries: MetadataRoute.Sitemap = researchRegionsWithCount().map(
    (r) => ({
      url: `${SITE_URL}/research/region/${encodeURIComponent(r.pref)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }),
  );

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/articles/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 記事数の少ない薄いタグページ(1記事のみ等)は sitemap から除外(noindex と一致)。
  const tagEntries: MetadataRoute.Sitemap = getAllTags()
    .filter((t) => t.count >= TAG_MIN_INDEX)
    .map((t) => ({
      url: `${SITE_URL}/articles/tag/${encodeURIComponent(tagToSlug(t.tag))}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

  let prefEntries: MetadataRoute.Sitemap = [];
  let muniEntries: MetadataRoute.Sitemap = [];
  try {
    const [summaries, keys] = await Promise.all([
      getAllPrefSummaries(),
      getStaticPlaceKeys(1),
    ]);
    // 都道府県ページは検索流入の主役。直近の出没件数 (count90d) が多い県は
    // より高頻度に更新される想定で priority を上げる。
    const top90Threshold = (() => {
      const sortedCounts = [...summaries]
        .map((s) => s.count90d)
        .sort((a, b) => b - a);
      // 上位 15% を「ホット県」扱いに
      return sortedCounts[Math.floor(sortedCounts.length * 0.15)] ?? 0;
    })();
    prefEntries = summaries.map((s) => {
      const isHot = s.count90d > 0 && s.count90d >= top90Threshold;
      return {
        url: `${SITE_URL}/place/${encodeURIComponent(s.prefectureName)}`,
        lastModified: now,
        changeFrequency: isHot ? ("hourly" as const) : ("daily" as const),
        priority: isHot ? 0.9 : 0.7,
      };
    });
    // 全国 1,895 市町村（マスター）を出力する。出没 0 件でも「安全確認」の検索
    // 意図に応える価値があり、muni ページ側も全件 index にしたためサイトマップと
    // 一致させる（掲載 = index 対象）。突発出没が起きた街を事前インデックス済みに
    // しておくことで初動のスパイク需要を即座に捕捉できる。
    // 出没のある市町村は更新頻度・priority を上げ、クロールを優先させる。
    const sightingKeys = new Set(keys.map((k) => `${k.pref}/${k.city}`));
    const muniSeen = new Set<string>();
    const muniArr: { pref: string; city: string }[] = [];
    for (const m of JAPAN_MUNICIPALITIES) {
      const key = `${m.prefName}/${m.cityName}`;
      if (!muniSeen.has(key)) {
        muniSeen.add(key);
        muniArr.push({ pref: m.prefName, city: m.cityName });
      }
    }
    muniEntries = muniArr.map((k) => {
      const hot = sightingKeys.has(`${k.pref}/${k.city}`);
      return {
        url: `${SITE_URL}/place/${encodeURIComponent(k.pref)}/${encodeURIComponent(k.city)}`,
        lastModified: now,
        changeFrequency: hot ? ("daily" as const) : ("weekly" as const),
        priority: hot ? 0.6 : 0.4,
      };
    });
  } catch {
    // データ取得失敗時はメインの URL のみ返す
  }

  // ランドマーク (高尾山・上高地・知床 等) の /spot ページ。
  // 手キュレーション分は全国的に高検索ボリュームの主要地名なので daily/0.8。
  // OSM 自動収集の生成スポットは数千件あり、全て daily/0.8 にするとホットな
  // ニュース・市町村 URL のクロール優先度を薄めてしまうため weekly/0.5 に抑える。
  const curatedSpotSlugs = new Set(PREBUILD_SPOT_SLUGS);
  const spotEntries: MetadataRoute.Sitemap = JAPAN_LANDMARKS.map((l) => {
    const curated = curatedSpotSlugs.has(l.slug);
    return {
      url: `${SITE_URL}/spot/${encodeURIComponent(l.slug)}`,
      lastModified: now,
      changeFrequency: curated ? ("daily" as const) : ("weekly" as const),
      priority: curated ? 0.8 : 0.5,
    };
  });

  // 英語(インバウンド)ページ。公開フラグ ON のときだけ sitemap に載せる。
  const enEntries: MetadataRoute.Sitemap =
    process.env.NEXT_PUBLIC_EN_ENABLED === "true"
      ? [
          {
            url: `${SITE_URL}/en`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
            alternates: {
              languages: { en: `${SITE_URL}/en`, ja: `${SITE_URL}/learn/safety` },
            },
          },
          {
            url: `${SITE_URL}/en/bear-spray`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          },
          ...INBOUND_EN_SLUGS.map((slug) => ({
            url: `${SITE_URL}/en/spot/${slug}`,
            lastModified: now,
            changeFrequency: "daily" as const,
            priority: 0.7,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/spot/${slug}`,
                ja: `${SITE_URL}/spot/${slug}`,
              },
            },
          })),
          // 有名トレイル（英語・ルート単位）。訪日の検索意図が強い。
          ...EN_TRAIL_SLUGS.map((slug) => ({
            url: `${SITE_URL}/en/trail/${slug}`,
            lastModified: now,
            changeFrequency: "daily" as const,
            priority: 0.7,
          })),
          // 自然/登山系の生成スポット（英語）。curated より優先度を一段下げる。
          ...EN_GENERATED_SLUGS.map((slug) => ({
            url: `${SITE_URL}/en/spot/${slug}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.5,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/spot/${slug}`,
                ja: `${SITE_URL}/spot/${slug}`,
              },
            },
          })),
        ]
      : [];

  return [
    ...staticEntries,
    ...articleEntries,
    ...researchEntries,
    ...researchRegionEntries,
    ...categoryEntries,
    ...tagEntries,
    ...prefEntries,
    ...muniEntries,
    ...spotEntries,
    ...enEntries,
  ];
}
