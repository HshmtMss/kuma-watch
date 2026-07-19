// Nominatim ジオコードの共有モジュール。
// pdf-llm と llm-html の両方が使う in-memory キャッシュ + 直列キューを集約し、
// Nominatim の利用ポリシー (1 req/sec) を全 extractor 横断で守る。
// キャッシュはディスクにも永続化 (.cache/geocode.json) し、サーバ再起動・再ビルドを跨いで再利用。

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  hasBoundaryData,
  isInsideMuni,
  pointInsideMuni,
  resolveMuni,
} from "@/lib/muni-boundary";
import { inJapanBounds } from "./types";

const GEOCODE_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const GEOCODE_MIN_INTERVAL_MS = 1100;
const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "geocode.json");
const PERSIST_DEBOUNCE_MS = 10_000;

type CacheEntry =
  | { at: number; lat: number; lon: number }
  | { at: number; missing: true };

function loadDiskCache(): Map<string, CacheEntry> {
  try {
    if (!existsSync(CACHE_FILE)) return new Map();
    const raw = readFileSync(CACHE_FILE, "utf8");
    const obj = JSON.parse(raw) as Record<string, CacheEntry>;
    return new Map(Object.entries(obj));
  } catch {
    return new Map();
  }
}

const geocodeCache: Map<string, CacheEntry> = loadDiskCache();
let lastGeocodeAt = 0;
let queue: Promise<unknown> = Promise.resolve();
let persistTimer: NodeJS.Timeout | null = null;
let dirty = false;

function schedulePersist(): void {
  dirty = true;
  if (persistTimer) return;
  persistTimer = setTimeout(() => {
    persistTimer = null;
    if (!dirty) return;
    dirty = false;
    try {
      if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
      const obj: Record<string, CacheEntry> = {};
      for (const [k, v] of geocodeCache) obj[k] = v;
      writeFileSync(CACHE_FILE, JSON.stringify(obj));
    } catch (e) {
      console.warn("[geocode cache] persist failed", e);
    }
  }, PERSIST_DEBOUNCE_MS);
}

function rateLimitedFetch(query: string): Promise<Response> {
  const job = queue.then(async () => {
    const wait = Math.max(0, lastGeocodeAt + GEOCODE_MIN_INTERVAL_MS - Date.now());
    if (wait > 0) await new Promise((res) => setTimeout(res, wait));
    lastGeocodeAt = Date.now();
    return fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=jp&limit=1`,
      {
        headers: {
          "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
          "Accept-Language": "ja",
        },
        next: { revalidate: 86400 },
      },
    );
  });
  queue = job.catch(() => undefined);
  return job;
}

async function geocodeQuery(
  placeQuery: string,
): Promise<{ lat: number; lon: number } | null> {
  if (!placeQuery) return null;
  const cached = geocodeCache.get(placeQuery);
  const now = Date.now();
  if (cached && now - cached.at < GEOCODE_CACHE_TTL_MS) {
    if ("missing" in cached) return null;
    return { lat: cached.lat, lon: cached.lon };
  }
  try {
    const r = await rateLimitedFetch(placeQuery);
    if (!r.ok) {
      // 429/5xx は一時的失敗。missing キャッシュしない
      if (r.status === 429 || r.status >= 500) return null;
      geocodeCache.set(placeQuery, { at: Date.now(), missing: true });
      schedulePersist();
      return null;
    }
    const arr = (await r.json()) as Array<{ lat: string; lon: string }>;
    const hit = arr[0];
    if (!hit) {
      geocodeCache.set(placeQuery, { at: Date.now(), missing: true });
      schedulePersist();
      return null;
    }
    const lat = Number(hit.lat);
    const lon = Number(hit.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || !inJapanBounds(lat, lon)) {
      geocodeCache.set(placeQuery, { at: Date.now(), missing: true });
      schedulePersist();
      return null;
    }
    geocodeCache.set(placeQuery, { at: Date.now(), lat, lon });
    schedulePersist();
    return { lat, lon };
  } catch {
    return null;
  }
}

export type GeocodeResult = { lat: number; lon: number; precise: boolean };

/**
 * 地区名として意味を成さない記述語。Nominatim は limit=1 なので
 * 「埼玉県 毛呂山町 不明」のようなクエリでも必ず何かを 1 件返し、それが
 * 県代表点や無関係な道路に化けて precise=true の誤ピンになる。
 * (実害例: 毛呂山町の報道が 8.8km 東の坂戸市街に立った)
 * クエリに混ぜず、市区町村まで丸める。
 */
const GENERIC_SECTION =
  /^(不明|詳細不明|場所不明|市内|町内|村内|区内|管内|付近|周辺|国道|県道|市道|町道|村道|農道|林道|道路|道路上|道路脇|道路付近|民家|民家付近|住宅街|住宅地|山中|山林|林内|里地|畑|田|水田|河川敷|川沿い|海岸沿い|山沿い|その他)$/;

function usableSection(section: string): string {
  const s = section.trim();
  if (!s || GENERIC_SECTION.test(s)) return "";
  return s;
}

/**
 * pref + city + section の 3 段階フォールバックでジオコード。
 * - 全部入りでヒットすれば precise=true
 * - section の最初の塊だけでヒットすれば precise=true
 * - 市町村まで丸めれば precise=false (要ジッター)
 *
 * どの段でも「主張する市区町村のポリゴン内か」を検証し、外れた候補は捨てて
 * 次の段へ落とす。Nominatim は limit=1 で必ず何かを返すため、この検証が
 * 無いと地区名がゴミだった場合に遠方の点をそのまま precise として採ってしまう。
 */
export async function geocodePlace(
  prefName: string,
  cityName: string | undefined,
  sectionName: string | undefined,
): Promise<GeocodeResult | null> {
  const city = (cityName ?? "").trim();
  const section = usableSection(sectionName ?? "");

  // 都道府県名だけでは「県のどこか」しか分からない。Nominatim は県名クエリに
  // 対して県の代表点を 1 点返す (例: 「埼玉県」→ 35.9754,139.4160 = 坂戸市付近)
  // ため、市区町村不明の事案が全部その一点に積み上がり、クマの出ない市街地に
  // 大量の誤ピンが立つ。市区町村まで特定できないものはジオコード不可とする。
  if (!city) return null;

  const muni = resolveMuni(prefName, city);
  const canVerify = muni !== null && hasBoundaryData();
  // 域外なら false。判定不能 (境界データ無し等) は従来通り受け入れる。
  const accepts = (lat: number, lon: number): boolean =>
    !canVerify || isInsideMuni(lat, lon, muni!) !== false;

  const full = [prefName, city, section].filter(Boolean).join(" ").trim();
  if (full) {
    const r = await geocodeQuery(full);
    if (r && accepts(r.lat, r.lon)) return { ...r, precise: true };
  }
  if (section) {
    const head = section.split(/[\s 　]/)[0];
    if (head && head !== section && !GENERIC_SECTION.test(head)) {
      const q = [prefName, city, head].filter(Boolean).join(" ").trim();
      const r = await geocodeQuery(q);
      if (r && accepts(r.lat, r.lon)) return { ...r, precise: true };
    }
  }
  // 市区町村までは特定できたが地区が拾えなかった場合の丸め。市中心点に
  // 落ちるので precise=false とし、呼び出し側で ~3km ジッターを掛ける。
  const cityOnly = [prefName, city].join(" ").trim();
  if (cityOnly !== full) {
    const r = await geocodeQuery(cityOnly);
    if (r && accepts(r.lat, r.lon)) return { ...r, precise: false };
  }
  // Nominatim が市区町村名すら解決できない/域外を返した場合でも、マスターに
  // ある市町村なら重心が使える。県代表点に落とすより遥かに正確。
  if (muni) return { lat: muni.lat, lon: muni.lon, precise: false };
  return null;
}

// 文字列から決定論的な hash 値 (0..1)
export function hash01(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (h % 100000) / 100000;
}

// 市町村中心点に丸まったレコードに半径 ~3km の決定論的ジッターを足す
export function jitter(
  lat: number,
  lon: number,
  seed: string,
): { lat: number; lon: number } {
  const r = 0.025 * Math.sqrt(hash01(seed + ":r"));
  const a = hash01(seed + ":a") * 2 * Math.PI;
  return { lat: lat + r * Math.cos(a), lon: lon + r * Math.sin(a) };
}

/**
 * 市町村単位に丸まったレコードのジッター。半径 ~3km は小さな町村の幅より
 * 大きく、素の jitter() では市域外へはみ出して隣町に立つピンを生んでいた。
 * 市町村が特定できるときは域内に収まる点だけを採る。
 */
export function jitterWithin(
  prefName: string,
  cityName: string | undefined,
  lat: number,
  lon: number,
  seed: string,
): { lat: number; lon: number } {
  const muni = resolveMuni(prefName, cityName);
  if (muni && hasBoundaryData()) return pointInsideMuni(muni, seed);
  return jitter(lat, lon, seed);
}
