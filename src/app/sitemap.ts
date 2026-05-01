import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles-meta";
import { getAllPrefSummaries, getStaticPlaceKeys } from "@/lib/place-index";

const SITE_URL = "https://kuma-watch.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/for-gov`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/sources`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/research`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/research/2026-04-29-bear-incidents`, lastModified: new Date("2026-04-30"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/research/2026-03-monthly-report`, lastModified: new Date("2026-04-30"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/research/2026-04-monthly-report`, lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/research/2026-04-30-daily-report`, lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let prefEntries: MetadataRoute.Sitemap = [];
  let muniEntries: MetadataRoute.Sitemap = [];
  try {
    const [summaries, keys] = await Promise.all([
      getAllPrefSummaries(),
      getStaticPlaceKeys(3),
    ]);
    prefEntries = summaries.map((s) => ({
      url: `${SITE_URL}/place/${encodeURIComponent(s.prefectureName)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
    muniEntries = keys.map((k) => ({
      url: `${SITE_URL}/place/${encodeURIComponent(k.pref)}/${encodeURIComponent(k.city)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {
    // データ取得失敗時はメインの URL のみ返す
  }

  return [...staticEntries, ...articleEntries, ...prefEntries, ...muniEntries];
}
