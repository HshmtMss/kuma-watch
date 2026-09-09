// 素の GeoJSON (FeatureCollection) を公開しているソースから取り込む。
//
// 自治体の GIS が SaaS 化して「地図アプリ」になると PDF や CSV の公開が
// 止まることがある。鳥取県は 2026 年に年度別の目撃一覧 PDF を取り下げ、
// 地図 (tottori-geomap) に移行した。地図の裏には点データの GeoJSON が
// そのまま置かれていることが多く、PDF を LLM で読むより正確で安い。
//
// 座標は公式のものをそのまま使う。市町村は「場所」テキストから解決し、
// 取れなければ entry.defaultCity に落とす (座標は動かさない)。

import type { DataSourceEntry, GeoJsonSource } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";
import { findMuniInText } from "@/lib/muni-boundary";
import { jstToday } from "@/lib/jst-date";
import { isRealCalendarDate } from "./date-utils";

const CACHE_TTL_MS = 60 * 60 * 1000;
const memo = new Map<string, { at: number; data: UnifiedSighting[] }>();

type Feature = {
  type?: string;
  geometry?: { type?: string; coordinates?: unknown } | null;
  properties?: Record<string, unknown> | null;
};

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/**
 * "2026-09-01" / "2026/03/03 00:00:00+09" / "2026年9月1日" を YYYY-MM-DD にする。
 * 時刻やタイムゾーンが付いていても日付部分だけを見る (JST 前提のデータなので
 * Date に通して UTC へずらさない)。
 */
function parseDate(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const m = raw
    .normalize("NFKC")
    .match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
  if (!m) return null;
  return `${m[1]}-${pad2(Number(m[2]))}-${pad2(Number(m[3]))}`;
}

/** "18:30" / "6:45" を HH:MM に揃える。取れなければ undefined。 */
function parseTime(raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined;
  const m = raw.normalize("NFKC").match(/(\d{1,2}):(\d{2})/);
  if (!m) return undefined;
  const h = Number(m[1]);
  if (h > 23) return undefined;
  return `${pad2(h)}:${m[2]}`;
}

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

/**
 * "鳥取県鳥取市国府町清水" を市町村と字に割る。
 * 市町村名はマスターに当てて解決するので、"国府町" のような紛らわしい
 * 字名を市町村と取り違えない。
 */
function splitPlace(
  place: string,
  prefName: string,
): { city: string; section: string } {
  const withoutPref = place.startsWith(prefName)
    ? place.slice(prefName.length)
    : place;
  const muni = findMuniInText(prefName, withoutPref);
  if (!muni) return { city: "", section: withoutPref.trim() };
  const i = withoutPref.indexOf(muni.cityName);
  const section =
    i >= 0 ? withoutPref.slice(i + muni.cityName.length).trim() : "";
  return { city: muni.cityName, section };
}

export async function fetchGeoJsonSightings(
  entry: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const cfg: GeoJsonSource | undefined = entry.geojson;
  if (!cfg) return [];

  const now = Date.now();
  const cached = memo.get(entry.id);
  if (cached && now - cached.at < CACHE_TTL_MS) return cached.data;

  try {
    const r = await fetch(cfg.geojsonUrl, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) {
      console.error(`[geojson:${entry.id}] ${cfg.geojsonUrl} HTTP ${r.status}`);
      return [];
    }
    const body = (await r.json()) as { features?: Feature[] };
    const features = Array.isArray(body?.features) ? body.features : null;
    if (!features) {
      console.error(
        `[geojson:${entry.id}] ${cfg.geojsonUrl} has no features array`,
      );
      return [];
    }

    const prefName = entry.regionLabel.split(" ")[0] ?? entry.regionLabel;
    const todayIso = jstToday();
    const out: UnifiedSighting[] = [];
    let skippedDate = 0;
    let skippedCoord = 0;

    for (let i = 0; i < features.length; i++) {
      const f = features[i];
      if (f?.geometry?.type !== "Point") continue;
      const coords = f.geometry.coordinates;
      if (!Array.isArray(coords) || coords.length < 2) {
        skippedCoord++;
        continue;
      }
      const lon = Number(coords[0]);
      const lat = Number(coords[1]);
      if (!Number.isFinite(lat) || !Number.isFinite(lon) || !inJapanBounds(lat, lon)) {
        skippedCoord++;
        continue;
      }

      const props = f.properties ?? {};
      const date = parseDate(props[cfg.dateField]);
      if (!date) {
        skippedDate++;
        continue;
      }
      const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
      if (!dm) {
        skippedDate++;
        continue;
      }
      if (!isRealCalendarDate(Number(dm[1]), Number(dm[2]), Number(dm[3]))) {
        skippedDate++;
        continue;
      }
      // 未来日は元データのタイポ。入れると「直近」の集計が壊れる。
      if (date > todayIso) {
        skippedDate++;
        continue;
      }

      const place = cfg.placeField ? str(props[cfg.placeField]) : "";
      const { city, section } = splitPlace(place, prefName);

      out.push({
        id: `${entry.id}-${i}`,
        source: entry.id,
        sourceKind: "csv",
        lat,
        lon,
        date,
        time: cfg.timeField ? parseTime(props[cfg.timeField]) : undefined,
        prefectureName: prefName,
        cityName: city || entry.defaultCity || "",
        sectionName: section,
        comment: cfg.commentField ? str(props[cfg.commentField]) : "",
        headCount: 1,
      });
    }

    if (skippedDate > 0 || skippedCoord > 0) {
      console.warn(
        `[geojson:${entry.id}] skipped ${skippedDate} (date) + ${skippedCoord} (coord) of ${features.length}`,
      );
    }
    console.log(`[geojson:${entry.id}] ${out.length}/${features.length} sightings`);

    memo.set(entry.id, { at: now, data: out });
    return out;
  } catch (e) {
    console.error(`[geojson:${entry.id}] ${cfg.geojsonUrl} failed`, e);
    return [];
  }
}
