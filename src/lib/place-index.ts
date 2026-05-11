import { getCachedSightings } from "@/lib/sightings-cache";

export type PlaceCell = {
  prefectureName: string;
  cityName: string;
  count: number;
  count90d: number;
  count365d: number;
  latestDate: string | null;
  latCentroid: number;
  lonCentroid: number;
};

export type PrefSummary = {
  prefectureName: string;
  cityCount: number;
  totalCount: number;
  count90d: number;
  count365d: number;
  latestDate: string | null;
};

export type PlaceRecord = {
  lat: number;
  lon: number;
  date: string;
  sectionName?: string;
  comment?: string;
};

type Index = {
  byKey: Map<string, PlaceCell>;
  byPref: Map<string, PlaceCell[]>;
  prefSummaries: Map<string, PrefSummary>;
  recordsByKey: Map<string, PlaceRecord[]>;
  loadedAt: number;
};

let cache: Index | null = null;
const TTL_MS = 6 * 60 * 60 * 1000;

const D_MS = 86_400_000;
const D90 = 90 * D_MS;
const D365 = 365 * D_MS;

async function build(): Promise<Index> {
  const records = await getCachedSightings();
  const acc = new Map<
    string,
    {
      prefectureName: string;
      cityName: string;
      count: number;
      count90d: number;
      count365d: number;
      latestDate: string | null;
      latSum: number;
      lonSum: number;
      n: number;
    }
  >();
  const now = Date.now();

  for (const r of records) {
    if (!r.prefectureName || !r.cityName) continue;
    const key = `${r.prefectureName}/${r.cityName}`;
    let entry = acc.get(key);
    if (!entry) {
      entry = {
        prefectureName: r.prefectureName,
        cityName: r.cityName,
        count: 0,
        count90d: 0,
        count365d: 0,
        latestDate: null,
        latSum: 0,
        lonSum: 0,
        n: 0,
      };
      acc.set(key, entry);
    }
    entry.count++;
    if (typeof r.lat === "number" && typeof r.lon === "number") {
      entry.latSum += r.lat;
      entry.lonSum += r.lon;
      entry.n++;
    }
    if (typeof r.date === "string") {
      if (!entry.latestDate || r.date > entry.latestDate) entry.latestDate = r.date;
      const t = Date.parse(r.date);
      if (Number.isFinite(t)) {
        if (now - t <= D90) entry.count90d++;
        if (now - t <= D365) entry.count365d++;
      }
    }
  }

  const byKey = new Map<string, PlaceCell>();
  const byPref = new Map<string, PlaceCell[]>();
  const prefSummaries = new Map<string, PrefSummary>();
  const recordsByKey = new Map<string, PlaceRecord[]>();

  for (const r of records) {
    if (!r.prefectureName || !r.cityName) continue;
    if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
    const key = `${r.prefectureName}/${r.cityName}`;
    let arr = recordsByKey.get(key);
    if (!arr) {
      arr = [];
      recordsByKey.set(key, arr);
    }
    arr.push({
      lat: r.lat,
      lon: r.lon,
      date: r.date ?? "",
      sectionName: r.sectionName,
      comment: r.comment,
    });
  }
  for (const arr of recordsByKey.values()) {
    arr.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }

  for (const [key, e] of acc) {
    if (e.n === 0) continue;
    const cell: PlaceCell = {
      prefectureName: e.prefectureName,
      cityName: e.cityName,
      count: e.count,
      count90d: e.count90d,
      count365d: e.count365d,
      latestDate: e.latestDate,
      latCentroid: e.latSum / e.n,
      lonCentroid: e.lonSum / e.n,
    };
    byKey.set(key, cell);
    if (!byPref.has(cell.prefectureName)) byPref.set(cell.prefectureName, []);
    byPref.get(cell.prefectureName)!.push(cell);
  }

  for (const [pref, cells] of byPref) {
    cells.sort((a, b) => b.count - a.count);
    const totalCount = cells.reduce((s, c) => s + c.count, 0);
    const count90d = cells.reduce((s, c) => s + c.count90d, 0);
    const count365d = cells.reduce((s, c) => s + c.count365d, 0);
    const latestDate = cells.reduce<string | null>(
      (best, c) => (c.latestDate && (!best || c.latestDate > best) ? c.latestDate : best),
      null,
    );
    prefSummaries.set(pref, {
      prefectureName: pref,
      cityCount: cells.length,
      totalCount,
      count90d,
      count365d,
      latestDate,
    });
  }

  return { byKey, byPref, prefSummaries, recordsByKey, loadedAt: Date.now() };
}

async function getIndex(): Promise<Index> {
  if (cache && Date.now() - cache.loadedAt < TTL_MS) return cache;
  cache = await build();
  return cache;
}

export async function getPlaceCell(
  pref: string,
  city: string,
): Promise<PlaceCell | null> {
  const idx = await getIndex();
  return idx.byKey.get(`${pref}/${city}`) ?? null;
}

export async function getPlaceCellsByPref(pref: string): Promise<PlaceCell[]> {
  const idx = await getIndex();
  return idx.byPref.get(pref) ?? [];
}

/** 全都道府県のセル一覧。/place/[pref]/[muni] の半径サマリーで
 *  県境を跨ぐ近隣検索に使う。 */
export async function getAllPlaceCells(): Promise<PlaceCell[]> {
  const idx = await getIndex();
  return [...idx.byKey.values()];
}

export async function getPrefSummary(pref: string): Promise<PrefSummary | null> {
  const idx = await getIndex();
  return idx.prefSummaries.get(pref) ?? null;
}

export async function getAllPrefSummaries(): Promise<PrefSummary[]> {
  const idx = await getIndex();
  return [...idx.prefSummaries.values()].sort((a, b) => b.totalCount - a.totalCount);
}

export async function getRecordsForPlace(
  pref: string,
  city: string,
  limit = 50,
): Promise<PlaceRecord[]> {
  const idx = await getIndex();
  const arr = idx.recordsByKey.get(`${pref}/${city}`) ?? [];
  return arr.slice(0, limit);
}

/** 静的生成対象のキー一覧 (count >= minCount のもの) */
export async function getStaticPlaceKeys(
  minCount = 3,
): Promise<{ pref: string; city: string }[]> {
  const idx = await getIndex();
  const out: { pref: string; city: string }[] = [];
  for (const cell of idx.byKey.values()) {
    if (cell.count >= minCount) {
      out.push({ pref: cell.prefectureName, city: cell.cityName });
    }
  }
  return out;
}

export async function invalidatePlaceIndex(): Promise<void> {
  cache = null;
}
