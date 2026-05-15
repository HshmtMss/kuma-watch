import { getCachedSightings } from "@/lib/sightings-cache";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

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

// 都道府県別の市町村マスター。canonical 名と重心を引くために build() で使う。
function buildMunisByPref(): Map<
  string,
  { cityName: string; lat: number; lon: number }[]
> {
  const m = new Map<string, { cityName: string; lat: number; lon: number }[]>();
  for (const x of JAPAN_MUNICIPALITIES) {
    if (!m.has(x.prefName)) m.set(x.prefName, []);
    m.get(x.prefName)!.push({ cityName: x.cityName, lat: x.lat, lon: x.lon });
  }
  return m;
}

function distanceKmInline(
  la1: number,
  lo1: number,
  la2: number,
  lo2: number,
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(la2 - la1);
  const dLon = toRad(lo2 - lo1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(la1)) * Math.cos(toRad(la2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// 生レコードを canonical な市町村名に正規化する。
//   1) cityName が市町村マスターと prefix-match するならそれを採用
//      （例: "仙台市青葉区芋沢" → "仙台市青葉区"）
//   2) prefix-match しない (例: cityName="仙台市" だが master は ward 単位)、
//      または cityName が空欄の場合は lat/lon から最寄り重心の市町村を採用
//   3) 30km 以内の市町村が無ければ null（誤集計回避）
//
// build() を介して全 record を一度 canonical 名に寄せておくことで、
// /place/[pref] と /place/[pref]/[muni] の集計が同じキーに揃い、
// 「県ページでは 4 件、市町村ページでは 0 件」のような矛盾を防ぐ。
function resolveCanonicalForIndex(
  rawCity: string,
  lat: number,
  lon: number,
  pref: string,
  munisByPref: Map<string, { cityName: string; lat: number; lon: number }[]>,
): string | null {
  const munis = munisByPref.get(pref);
  if (!munis || munis.length === 0) return null;

  if (rawCity) {
    let bestMatch: { name: string; len: number } | null = null;
    for (const m of munis) {
      if (rawCity.startsWith(m.cityName)) {
        if (!bestMatch || m.cityName.length > bestMatch.len) {
          bestMatch = { name: m.cityName, len: m.cityName.length };
        }
      }
    }
    if (bestMatch) return bestMatch.name;
  }

  let nearest: { name: string; d: number } | null = null;
  for (const m of munis) {
    const d = distanceKmInline(lat, lon, m.lat, m.lon);
    if (!nearest || d < nearest.d) nearest = { name: m.cityName, d };
  }
  if (nearest && nearest.d < 30) return nearest.name;
  return null;
}

async function build(): Promise<Index> {
  const records = await getCachedSightings();
  const munisByPref = buildMunisByPref();
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
    if (!r.prefectureName) continue;
    if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
    const canonical = resolveCanonicalForIndex(
      (r.cityName ?? "").trim(),
      r.lat,
      r.lon,
      r.prefectureName,
      munisByPref,
    );
    if (!canonical) continue;
    const key = `${r.prefectureName}/${canonical}`;
    let entry = acc.get(key);
    if (!entry) {
      entry = {
        prefectureName: r.prefectureName,
        cityName: canonical,
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
    entry.latSum += r.lat;
    entry.lonSum += r.lon;
    entry.n++;
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
    if (!r.prefectureName) continue;
    if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
    // 集計と同じ canonical 解決を通す。これで /place/[pref]/[muni] が直接
    // 引く mapRecords も、cityName 欠落/不一致レコードを正しく拾える。
    const canonical = resolveCanonicalForIndex(
      (r.cityName ?? "").trim(),
      r.lat,
      r.lon,
      r.prefectureName,
      munisByPref,
    );
    if (!canonical) continue;
    const key = `${r.prefectureName}/${canonical}`;
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

// ---------------------------------------------------------------------------
// 市町村単位の集計
// ---------------------------------------------------------------------------
//
// 元データの cityName は「湯原地内」「嬬恋村大字大笹地内」のように
// 字 (aza) / 地内レベルが混入している。/place/[pref] では、実在する
// 市区町村 (JAPAN_MUNICIPALITIES マスター) 単位で件数を集計して並べたい。
//
// マッチング戦略:
//   1. cityName が「muni 名 + …」で始まるなら、その muni に集計 (longest-prefix-wins)
//   2. 上記で当たらない場合は、cell 中心座標から最寄りの muni 重心へ寄せる
//
// muni 名の差し替えだけで集計するので、リンク先は /place/[pref]/[muni] に
// canonical な muni 名で繋ぐ。

export type MuniAggregate = {
  prefName: string;
  cityName: string; // canonical muni 名 (JAPAN_MUNICIPALITIES と一致)
  cityCode: string;
  count: number;
  count90d: number;
  count365d: number;
  latestDate: string | null;
  lat: number; // master 重心
  lon: number;
};

function distanceKm(la1: number, lo1: number, la2: number, lo2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(la2 - la1);
  const dLon = toRad(lo2 - lo1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(la1)) * Math.cos(toRad(la2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function resolveCanonicalMuni(
  cityNameRaw: string,
  lat: number,
  lon: number,
  munis: { cityName: string; lat: number; lon: number }[],
): string | null {
  // 1) prefix match (longest first)
  let bestMatch: { name: string; len: number } | null = null;
  for (const m of munis) {
    if (cityNameRaw.startsWith(m.cityName)) {
      if (!bestMatch || m.cityName.length > bestMatch.len) {
        bestMatch = { name: m.cityName, len: m.cityName.length };
      }
    }
  }
  if (bestMatch) return bestMatch.name;

  // 2) nearest centroid fallback (typically within ~15 km)
  let nearest: { name: string; d: number } | null = null;
  for (const m of munis) {
    const d = distanceKm(lat, lon, m.lat, m.lon);
    if (!nearest || d < nearest.d) nearest = { name: m.cityName, d };
  }
  // 50km 以上離れていれば棄却 (誤集計を防ぐ)
  if (nearest && nearest.d < 50) return nearest.name;
  return null;
}

/** /place/[pref] のための市町村別集計。
 *  JAPAN_MUNICIPALITIES マスターを基底とし、出没件数 0 の市町村も含めて
 *  全件返す。並び順は呼び出し側で決める。 */
export async function getMuniAggregatesByPref(
  pref: string,
): Promise<MuniAggregate[]> {
  const idx = await getIndex();
  const munis = JAPAN_MUNICIPALITIES.filter((m) => m.prefName === pref);

  const out = new Map<string, MuniAggregate>();
  for (const m of munis) {
    out.set(m.cityName, {
      prefName: pref,
      cityName: m.cityName,
      cityCode: m.cityCode,
      count: 0,
      count90d: 0,
      count365d: 0,
      latestDate: null,
      lat: m.lat,
      lon: m.lon,
    });
  }
  // 都道府県内の cell をマスター muni に正規化して集計
  const cells = idx.byPref.get(pref) ?? [];
  const muniRefs = munis.map((m) => ({
    cityName: m.cityName,
    lat: m.lat,
    lon: m.lon,
  }));
  for (const cell of cells) {
    const canon = resolveCanonicalMuni(
      cell.cityName,
      cell.latCentroid,
      cell.lonCentroid,
      muniRefs,
    );
    if (!canon) continue;
    const agg = out.get(canon);
    if (!agg) continue;
    agg.count += cell.count;
    agg.count90d += cell.count90d;
    agg.count365d += cell.count365d;
    if (
      cell.latestDate &&
      (!agg.latestDate || cell.latestDate > agg.latestDate)
    ) {
      agg.latestDate = cell.latestDate;
    }
  }
  return [...out.values()];
}
