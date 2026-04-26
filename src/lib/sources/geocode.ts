// Nominatim ジオコードの共有モジュール。
// pdf-llm と llm-html の両方が使う in-memory キャッシュ + 直列キューを集約し、
// Nominatim の利用ポリシー (1 req/sec) を全 extractor 横断で守る。
// キャッシュはディスクにも永続化 (.cache/geocode.json) し、サーバ再起動・再ビルドを跨いで再利用。

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
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
 * pref + city + section の 3 段階フォールバックでジオコード。
 * - 全部入りでヒットすれば precise=true
 * - section の最初の塊だけでヒットすれば precise=true
 * - 市町村まで丸めてヒットすれば precise=false (要ジッター)
 */
export async function geocodePlace(
  prefName: string,
  cityName: string | undefined,
  sectionName: string | undefined,
): Promise<GeocodeResult | null> {
  const full = [prefName, cityName, sectionName].filter(Boolean).join(" ").trim();
  if (full) {
    const r = await geocodeQuery(full);
    if (r) return { ...r, precise: true };
  }
  if (sectionName) {
    const head = sectionName.trim().split(/[\s 　]/)[0];
    if (head && head !== sectionName) {
      const q = [prefName, cityName, head].filter(Boolean).join(" ").trim();
      const r = await geocodeQuery(q);
      if (r) return { ...r, precise: true };
    }
  }
  const cityOnly = [prefName, cityName].filter(Boolean).join(" ").trim();
  if (cityOnly && cityOnly !== full) {
    const r = await geocodeQuery(cityOnly);
    if (r) return { ...r, precise: false };
  }
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
