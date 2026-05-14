import type { MetadataRoute } from "next";
import { ARTICLES, CATEGORIES, getAllTags, tagToSlug } from "@/lib/articles-meta";
import { getAllPrefSummaries, getStaticPlaceKeys } from "@/lib/place-index";
import {
  RESEARCH_ENTRIES,
  researchRegionsWithCount,
} from "@/lib/research-entries";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 5 分ごとに sitemap を再生成。新規記事を Google にすぐ通知できるよう、
// CDN エッジに短い遅延で反映させる。
export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: `${SITE_URL}/place`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/spot`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/research`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/for-gov`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
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
  const researchEntries: MetadataRoute.Sitemap = RESEARCH_ENTRIES.map((e) => ({
    url: `${SITE_URL}/research/${e.slug}`,
    lastModified: new Date(e.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
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

  const tagEntries: MetadataRoute.Sitemap = getAllTags().map((t) => ({
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
    // sightings 由来 + マスター由来の市町村 URL を全件出力。
    // 0 件の市町村ページも検索対象にしておく。
    const muniSeen = new Set<string>();
    const muniArr: { pref: string; city: string }[] = [];
    for (const k of keys) {
      const key = `${k.pref}/${k.city}`;
      if (!muniSeen.has(key)) {
        muniSeen.add(key);
        muniArr.push(k);
      }
    }
    for (const m of JAPAN_MUNICIPALITIES) {
      const key = `${m.prefName}/${m.cityName}`;
      if (!muniSeen.has(key)) {
        muniSeen.add(key);
        muniArr.push({ pref: m.prefName, city: m.cityName });
      }
    }
    muniEntries = muniArr.map((k) => ({
      url: `${SITE_URL}/place/${encodeURIComponent(k.pref)}/${encodeURIComponent(k.city)}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.6,
    }));
  } catch {
    // データ取得失敗時はメインの URL のみ返す
  }

  // ランドマーク (高尾山・上高地・知床 等) の /spot ページ。
  // 全国的に高検索ボリュームの地名なので weekly→daily に上げる。
  const spotEntries: MetadataRoute.Sitemap = JAPAN_LANDMARKS.map((l) => ({
    url: `${SITE_URL}/spot/${encodeURIComponent(l.slug)}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

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
  ];
}
