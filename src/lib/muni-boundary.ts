/**
 * 市町村ポリゴンによる座標の帰属判定 (Node 専用: 取り込み・ビルド時に使う)。
 *
 * これまでの誤ピン対策は「重心からの距離」ヒューリスティック
 * (muni-geo-check の 25km / 5倍ルール) だったが、市街地が密な地域では
 * 隣の市に飛んでも 10km 未満に収まるため素通りする。実例:
 *   埼玉県毛呂山町の報道が坂戸市街 (8.8km) に立つ
 * 距離ではなく実際の行政界ポリゴンで包含判定すれば、この規模のズレも
 * 確実に捕まえられる。境界データは public/data/boundaries/{prefCode}.json。
 *
 * ポリゴンは簡略化されているので、真の境界付近の点を誤って「外」と
 * 判定しうる。TOLERANCE_KM の緩衝を持たせ、実在の出没を消さない側に倒す。
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

const TOLERANCE_KM = 1.0;
const GRID = 0.1; // 空間インデックスのセルサイズ(度)

export type MuniRef = {
  /** 政令市を市単位で扱う場合は複数区コードになる */
  cityCodes: string[];
  prefName: string;
  cityName: string;
  lat: number;
  lon: number;
};

type Ring = number[][];
type Poly = Ring[];
type Entry = {
  code: string;
  polys: Poly[];
  bbox: [number, number, number, number]; // minLon,minLat,maxLon,maxLat
};

// ---------------------------------------------------------------- 名前解決

const muniByKey = new Map<string, MuniRef>();
const prefToMunis = new Map<string, MuniRef[]>();
/** 前方一致用の候補。政令市の市単位名・郡なし別名も含む */
const prefCandidates = new Map<string, Array<{ name: string; ref: MuniRef }>>();

/**
 * 表記ゆれの吸収。出没データ側は自治体・報道でまちまちなので、
 * 小書き/大書きの ケ, 異体字 (鰺ヶ沢/鯵ヶ沢, 龍/竜 等) を畳んでから照合する。
 */
function normalizeName(s: string): string {
  return s
    .replace(/[ヶケが]/g, "ケ")
    .replace(/鯵/g, "鰺")
    .replace(/竜/g, "龍")
    .replace(/曾/g, "曽")
    .replace(/舘/g, "館")
    .replace(/[\s 　]/g, "");
}

(function buildNameIndex() {
  const wardAgg = new Map<
    string,
    { codes: string[]; la: number; lo: number; n: number; pref: string; city: string }
  >();

  for (const mu of JAPAN_MUNICIPALITIES) {
    const ref: MuniRef = {
      cityCodes: [mu.cityCode],
      prefName: mu.prefName,
      cityName: mu.cityName,
      lat: mu.lat,
      lon: mu.lon,
    };
    muniByKey.set(`${mu.prefName}|${mu.cityName}`, ref);
    const list = prefToMunis.get(mu.prefName) ?? [];
    list.push(ref);
    prefToMunis.set(mu.prefName, list);

    // 郡なし別名: "入間郡毛呂山町" → "毛呂山町"
    const stripped = mu.cityName.replace(/^[^\s]+?郡/, "");
    if (stripped !== mu.cityName) {
      const k = `${mu.prefName}|${stripped}`;
      if (!muniByKey.has(k)) muniByKey.set(k, ref);
    }

    // 政令市の区を市単位へ集約: "仙台市青葉区" → "仙台市"
    const wm = mu.cityName.match(/^(.+市)(.+区)$/);
    if (wm) {
      const bk = `${mu.prefName}|${wm[1]}`;
      const a =
        wardAgg.get(bk) ??
        { codes: [], la: 0, lo: 0, n: 0, pref: mu.prefName, city: wm[1] };
      a.codes.push(mu.cityCode);
      a.la += mu.lat;
      a.lo += mu.lon;
      a.n += 1;
      wardAgg.set(bk, a);
    }
  }

  for (const [bk, a] of wardAgg) {
    if (muniByKey.has(bk)) continue;
    muniByKey.set(bk, {
      cityCodes: a.codes,
      prefName: a.pref,
      cityName: a.city,
      lat: a.la / a.n,
      lon: a.lo / a.n,
    });
  }

  // 前方一致候補 (正規化済み) を張る。muniByKey の別名も含めるので、
  // "浜松市浜名区" (2024 年の区再編で master に無い) → "浜松市" のように
  // 政令市単位へも寄せられる。
  for (const [key, ref] of muniByKey) {
    const [pref, name] = key.split("|");
    if (!pref || !name) continue;
    const list = prefCandidates.get(pref) ?? [];
    list.push({ name: normalizeName(name), ref });
    prefCandidates.set(pref, list);
  }
  for (const list of prefCandidates.values())
    list.sort((a, b) => b.name.length - a.name.length);
})();

/**
 * 出没データ側の市区町村表記をマスターへ解決する。
 * 完全一致 → 郡/区の別名 → "…地区" 等の接尾を落とした前方一致 →
 * 県内で一意に決まる区名 (北海道「南区」= 札幌市南区) の順に緩める。
 * 解決できなければ null (判定不能として扱い、データは残す)。
 */
export function resolveMuni(
  prefName: string | undefined,
  cityName: string | undefined,
): MuniRef | null {
  const pref = (prefName ?? "").trim();
  const city = (cityName ?? "").trim();
  if (!pref || !city) return null;

  const direct = muniByKey.get(`${pref}|${city}`);
  if (direct) return direct;

  const inPref = prefToMunis.get(pref);
  if (!inPref) return null;

  // 表記ゆれを畳んだうえで "むつ市大畑町地区" → "むつ市" の前方一致。
  // 候補は名前の長い順なので最初のヒットが最長一致。
  const norm = normalizeName(city);
  for (const c of prefCandidates.get(pref) ?? [])
    if (norm.startsWith(c.name)) return c.ref;

  // 市名の落ちた区名 ("南区") が県内で一意なら採用。
  if (/区$/.test(city)) {
    const hits = inPref.filter((mu) => normalizeName(mu.cityName).endsWith(norm));
    if (hits.length === 1) return hits[0];
  }
  return null;
}

/**
 * 自由記述 (観察場所・備考) の中に現れる市町村名を拾う。
 * 「舞鶴市桜が丘地内」→ 舞鶴市。県内の候補に限定し、最長一致を採る。
 *
 * 公式データで「市町村名の列」と「座標」が食い違うとき、どちらが誤りかの
 * 判定材料になる。観察場所の地名が市町村名側と一致するなら座標が疑わしく、
 * 座標の所属市町村と一致するなら市町村名の列が疑わしい。
 */
export function findMuniInText(
  prefName: string | undefined,
  text: string | undefined,
): MuniRef | null {
  const t = (text ?? "").normalize("NFKC").trim();
  const pref = (prefName ?? "").trim();
  if (!t || !pref) return null;
  const norm = normalizeName(t);
  for (const c of prefCandidates.get(pref) ?? []) {
    if (c.name.length < 2) continue;
    if (norm.includes(c.name)) return c.ref;
  }
  return null;
}

// ---------------------------------------------------------------- 境界読込

let entriesByCode: Map<string, Entry> | null = null;
let grid: Map<string, Entry[]> | null = null;

function boundariesDir(): string {
  return join(process.cwd(), "public", "data", "boundaries");
}

function cellKey(lon: number, lat: number): string {
  return `${Math.floor(lon / GRID)}:${Math.floor(lat / GRID)}`;
}

function loadBoundaries(): void {
  if (entriesByCode) return;
  entriesByCode = new Map();
  grid = new Map();
  const dir = boundariesDir();
  if (!existsSync(dir)) return;

  for (let p = 1; p <= 47; p++) {
    const file = join(dir, `${String(p).padStart(2, "0")}.json`);
    if (!existsSync(file)) continue;
    let gj: {
      features?: Array<{
        properties?: { code?: string };
        geometry?: { type: string; coordinates: unknown };
      }>;
    };
    try {
      gj = JSON.parse(readFileSync(file, "utf8"));
    } catch {
      continue;
    }
    for (const f of gj.features ?? []) {
      const code = f.properties?.code;
      const g = f.geometry;
      if (!code || !g) continue;
      const polys: Poly[] =
        g.type === "Polygon"
          ? [g.coordinates as Poly]
          : g.type === "MultiPolygon"
            ? (g.coordinates as Poly[])
            : [];
      if (!polys.length) continue;

      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const poly of polys)
        for (const [x, y] of poly[0]) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
      const entry: Entry = { code, polys, bbox: [x0, y0, x1, y1] };
      entriesByCode.set(code, entry);

      for (let gx = Math.floor(x0 / GRID); gx <= Math.floor(x1 / GRID); gx++)
        for (let gy = Math.floor(y0 / GRID); gy <= Math.floor(y1 / GRID); gy++) {
          const k = `${gx}:${gy}`;
          const arr = grid.get(k) ?? [];
          arr.push(entry);
          grid.set(k, arr);
        }
    }
  }
}

/** 境界データが読めているか (未配置環境では判定をスキップさせる) */
export function hasBoundaryData(): boolean {
  loadBoundaries();
  return (entriesByCode?.size ?? 0) > 0;
}

// ---------------------------------------------------------------- 幾何

function inRing(x: number, y: number, ring: Ring): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}

function inPolys(x: number, y: number, polys: Poly[]): boolean {
  for (const poly of polys) {
    if (!inRing(x, y, poly[0])) continue;
    let inHole = false;
    for (let k = 1; k < poly.length; k++)
      if (inRing(x, y, poly[k])) {
        inHole = true;
        break;
      }
    if (!inHole) return true;
  }
  return false;
}

const KM_PER_DEG_LAT = 111.32;
function kmPerDegLon(lat: number): number {
  return 111.32 * Math.cos((lat * Math.PI) / 180);
}

export function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371;
  const t = (v: number) => (v * Math.PI) / 180;
  const dLat = t(lat2 - lat1);
  const dLon = t(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(t(lat1)) * Math.cos(t(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/** 点からポリゴン外周までの最短距離(km)。簡略化境界の緩衝判定に使う。 */
function distToPolysKm(x: number, y: number, polys: Poly[]): number {
  const kx = kmPerDegLon(y);
  let best = Infinity;
  for (const poly of polys)
    for (const ring of poly)
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const ax = (ring[j][0] - x) * kx, ay = (ring[j][1] - y) * KM_PER_DEG_LAT;
        const bx = (ring[i][0] - x) * kx, by = (ring[i][1] - y) * KM_PER_DEG_LAT;
        const dx = bx - ax, dy = by - ay;
        const len2 = dx * dx + dy * dy;
        let t = len2 > 0 ? -(ax * dx + ay * dy) / len2 : 0;
        t = Math.max(0, Math.min(1, t));
        const px = ax + t * dx, py = ay + t * dy;
        const d = Math.hypot(px, py);
        if (d < best) best = d;
      }
  return best;
}

function entriesFor(muni: MuniRef): Entry[] {
  loadBoundaries();
  const out: Entry[] = [];
  for (const c of muni.cityCodes) {
    const e = entriesByCode?.get(c);
    if (e) out.push(e);
  }
  return out;
}

/**
 * 座標が指定市町村の域内か。
 * 判定できない (境界データ無し/名前解決不可) 場合は null を返す。
 */
export function isInsideMuni(
  lat: number,
  lon: number,
  muni: MuniRef,
): boolean | null {
  const es = entriesFor(muni);
  if (!es.length) return null;
  for (const e of es) {
    const [x0, y0, x1, y1] = e.bbox;
    const pad = 0.02;
    if (lon < x0 - pad || lon > x1 + pad || lat < y0 - pad || lat > y1 + pad)
      continue;
    if (inPolys(lon, lat, e.polys)) return true;
  }
  // 簡略化された境界の外側すぐは域内扱い (誤検知で実データを消さない)
  for (const e of es) if (distToPolysKm(lon, lat, e.polys) <= TOLERANCE_KM) return true;
  return false;
}

/** その座標を実際に含む市町村コード (無ければ null: 海上など) */
export function containingCode(lat: number, lon: number): string | null {
  loadBoundaries();
  const cands = grid?.get(cellKey(lon, lat)) ?? [];
  for (const e of cands) if (inPolys(lon, lat, e.polys)) return e.code;
  return null;
}

// ---------------------------------------------------------------- 補正

function hash01(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (h % 100000) / 100000;
}

/**
 * 市町村内に必ず収まる決定論的な点を返す。
 * 重心が域内 (凹形なら域外もありうる) ならその周囲へ半径 ~3km のジッターを
 * 掛け、域内に落ちる候補を採る。どれも外れるなら域内の格子点、最後は重心。
 *
 * 市町村単位までしか分からないレコードを一点に積み上げないためのジッターだが、
 * 小さな町村では従来の無条件ジッターが域外へはみ出していた。
 */
export function pointInsideMuni(
  muni: MuniRef,
  seed: string,
): { lat: number; lon: number } {
  const es = entriesFor(muni);
  const inside = (la: number, lo: number) =>
    es.length === 0 ? true : es.some((e) => inPolys(lo, la, e.polys));

  for (let i = 0; i < 24; i++) {
    const r = 0.025 * Math.sqrt(hash01(`${seed}:r${i}`));
    const a = hash01(`${seed}:a${i}`) * 2 * Math.PI;
    const la = muni.lat + r * Math.cos(a);
    const lo = muni.lon + r * Math.sin(a);
    if (inside(la, lo)) return { lat: la, lon: lo };
  }
  if (inside(muni.lat, muni.lon)) return { lat: muni.lat, lon: muni.lon };

  // 重心すら域外の細長い/飛び地市町村: ポリゴン頂点の平均近傍から探す
  for (const e of es) {
    for (const poly of e.polys) {
      const ring = poly[0];
      for (let i = 0; i < ring.length - 1; i++) {
        const mx = (ring[i][0] + ring[i + 1][0]) / 2;
        const my = (ring[i][1] + ring[i + 1][1]) / 2;
        if (inside(my, mx)) return { lat: my, lon: mx };
      }
    }
  }
  return { lat: muni.lat, lon: muni.lon };
}
