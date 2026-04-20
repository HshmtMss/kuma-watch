import type { DataSourceEntry } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";

const CACHE_TTL_MS = 60 * 60 * 1000;
const CITY_LIST_URL = "https://higumap.info/public/json/getTopPageCityList";
const REPORTS_URL = "https://higumap.info/map/reportsJson";
const CONCURRENCY = 6;
const FISCAL_YEARS = [2024, 2025];

type CityEntry = { id: number; name: string };
type ReportEntry = {
  id: number;
  lat: number;
  lng: number;
  foundDt: number;
  popupLabel?: string;
};
type ReportResponse = { list?: ReportEntry[] } | ReportEntry[];

let memo: { at: number; data: UnifiedSighting[] } | null = null;

async function fetchCityList(): Promise<CityEntry[]> {
  const r = await fetch(CITY_LIST_URL, {
    headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
    next: { revalidate: 3600 },
  });
  if (!r.ok) return [];
  const j = (await r.json()) as CityEntry[];
  return Array.isArray(j) ? j.filter((c) => typeof c.id === "number" && c.name) : [];
}

async function fetchCityReports(cityId: number, fiscalYear: number): Promise<ReportEntry[]> {
  try {
    const r = await fetch(`${REPORTS_URL}?cityId=${cityId}&fiscalYear=${fiscalYear}`, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: 3600 },
    });
    if (!r.ok) return [];
    const body = (await r.json()) as ReportResponse;
    if (Array.isArray(body)) return body;
    return body.list ?? [];
  } catch {
    return [];
  }
}

async function runBatched<T, U>(items: T[], limit: number, fn: (t: T) => Promise<U>): Promise<U[]> {
  const results: U[] = new Array(items.length);
  let idx = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

function epochToIsoDate(ms: number): string | null {
  if (!Number.isFinite(ms)) return null;
  const d = new Date(ms);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().split("T")[0];
}

export async function fetchHigumapSightings(
  entry: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const now = Date.now();
  if (memo && now - memo.at < CACHE_TTL_MS) return memo.data;

  const cities = await fetchCityList();
  if (cities.length === 0) return [];

  const tasks: Array<{ city: CityEntry; fiscalYear: number }> = [];
  for (const c of cities) {
    for (const fy of FISCAL_YEARS) tasks.push({ city: c, fiscalYear: fy });
  }

  const results = await runBatched(tasks, CONCURRENCY, async (t) => ({
    city: t.city,
    fiscalYear: t.fiscalYear,
    reports: await fetchCityReports(t.city.id, t.fiscalYear),
  }));

  const sightings: UnifiedSighting[] = [];
  const seen = new Set<number>();
  for (const { city, reports } of results) {
    for (const r of reports) {
      if (typeof r.id !== "number" || seen.has(r.id)) continue;
      if (!Number.isFinite(r.lat) || !Number.isFinite(r.lng)) continue;
      if (!inJapanBounds(r.lat, r.lng)) continue;
      const date = epochToIsoDate(r.foundDt);
      if (!date) continue;
      seen.add(r.id);
      sightings.push({
        id: `${entry.id}-${r.id}`,
        source: entry.id,
        sourceKind: "csv",
        lat: r.lat,
        lon: r.lng,
        date,
        prefectureName: "北海道",
        cityName: city.name,
        sectionName: "",
        comment: r.popupLabel ?? "",
        headCount: 1,
      });
    }
  }

  memo = { at: now, data: sightings };
  return sightings;
}
