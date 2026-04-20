import type { DataSourceEntry } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";

const CACHE_TTL_MS = 60 * 60 * 1000;

const memo = new Map<string, { at: number; data: UnifiedSighting[] }>();

// 和暦の元号 → 西暦オフセット
const ERA_OFFSETS: Record<string, number> = {
  令和: 2018,
  R: 2018,
  r: 2018,
  平成: 1988,
  H: 1988,
  h: 1988,
  昭和: 1925,
  S: 1925,
  s: 1925,
  大正: 1911,
  T: 1911,
  t: 1911,
  明治: 1867,
  M: 1867,
  m: 1867,
};

function normalizeFullWidth(s: string): string {
  return s.replace(/[\uff21-\uff3a\uff41-\uff5a\uff10-\uff19]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0xfee0),
  );
}

type ParsedName = {
  city?: string;
  section?: string;
  date?: string;
};

function parseNameCitySectionWareki(name: string): ParsedName {
  if (!name) return {};
  const normalized = normalizeFullWidth(name).trim();

  // Find trailing date (wareki or ISO)
  const warekiRe =
    /(令和|平成|昭和|大正|明治|[RHSTMrhstm])(元|\d{1,2})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?\s*$/;
  const isoRe = /(\d{4})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?\s*$/;

  let date: string | null = null;
  let restSource = normalized;

  const wm = normalized.match(warekiRe);
  if (wm && wm.index != null) {
    const era = wm[1];
    const yearStr = wm[2] === "元" ? "1" : wm[2];
    const year = Number(yearStr);
    const mo = Number(wm[3]);
    const da = Number(wm[4]);
    const offset = ERA_OFFSETS[era];
    if (offset != null && Number.isFinite(year) && Number.isFinite(mo) && Number.isFinite(da)) {
      const absoluteYear = offset + year;
      if (absoluteYear >= 1900 && absoluteYear <= 2100) {
        date = `${absoluteYear}-${String(mo).padStart(2, "0")}-${String(da).padStart(2, "0")}`;
        restSource = normalized.substring(0, wm.index).trim();
      }
    }
  } else {
    const im = normalized.match(isoRe);
    if (im && im.index != null) {
      const y = Number(im[1]);
      const mo = Number(im[2]);
      const da = Number(im[3]);
      if (y >= 1900 && y <= 2100 && Number.isFinite(mo) && Number.isFinite(da)) {
        date = `${y}-${String(mo).padStart(2, "0")}-${String(da).padStart(2, "0")}`;
        restSource = normalized.substring(0, im.index).trim();
      }
    }
  }

  if (!date) return {};

  // Trim trailing separators (comma, spaces, full-width space)
  const cleaned = restSource.replace(/[、,\s\u3000]+$/u, "").trim();
  // Split on 、 first (preferred), else on any whitespace
  const parts = cleaned.includes("、")
    ? cleaned.split(/[、,]+/).map((p) => p.trim()).filter(Boolean)
    : cleaned.split(/[\s\u3000]+/).map((p) => p.trim()).filter(Boolean);

  const city = parts[0];
  const section = parts.slice(1).join(" ");
  return {
    city: city || undefined,
    section: section || undefined,
    date,
  };
}

function extractPointPlacemarks(kml: string): Array<{
  name: string;
  lat: number;
  lon: number;
  extended: Record<string, string>;
}> {
  const placemarks = kml.match(/<Placemark[^>]*>[\s\S]*?<\/Placemark>/g) ?? [];
  const out: Array<{ name: string; lat: number; lon: number; extended: Record<string, string> }> = [];
  for (const pm of placemarks) {
    if (!pm.includes("<Point>")) continue;
    const nameMatch = pm.match(/<name>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/name>/);
    const coordMatch = pm.match(/<Point>\s*<coordinates>([\s\S]*?)<\/coordinates>\s*<\/Point>/);
    if (!coordMatch) continue;
    const [lonStr, latStr] = coordMatch[1].trim().split(",");
    const lat = Number(latStr);
    const lon = Number(lonStr);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    if (!inJapanBounds(lat, lon)) continue;

    const extended: Record<string, string> = {};
    const dataRe = /<Data name="([^"]+)">\s*<value>([\s\S]*?)<\/value>/g;
    let m: RegExpExecArray | null;
    while ((m = dataRe.exec(pm)) !== null) {
      extended[m[1]] = m[2].trim();
    }

    out.push({
      name: (nameMatch?.[1] ?? "").trim(),
      lat,
      lon,
      extended,
    });
  }
  return out;
}

export async function fetchKmlSightings(
  entry: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  if (!entry.kml) return [];
  const now = Date.now();
  const cached = memo.get(entry.id);
  if (cached && now - cached.at < CACHE_TTL_MS) return cached.data;

  try {
    const r = await fetch(entry.kml.kmlUrl, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: 3600 },
    });
    if (!r.ok) return [];
    const kml = await r.text();
    const points = extractPointPlacemarks(kml);
    const prefName = entry.regionLabel.split(" ")[0] ?? entry.regionLabel;

    const sightings: UnifiedSighting[] = [];
    const today = new Date();
    const maxFutureYear = today.getFullYear() + 1;
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const parsed = parseNameCitySectionWareki(p.name);
      if (!parsed.date) continue;
      const parsedYear = Number(parsed.date.slice(0, 4));
      if (!Number.isFinite(parsedYear) || parsedYear < 1970 || parsedYear > maxFutureYear) {
        continue;
      }
      sightings.push({
        id: `${entry.id}-${i}`,
        source: entry.id,
        sourceKind: "csv",
        lat: p.lat,
        lon: p.lon,
        date: parsed.date,
        prefectureName: prefName,
        cityName: parsed.city ?? "",
        sectionName: parsed.section ?? "",
        comment: "",
        headCount: 1,
      });
    }

    memo.set(entry.id, { at: now, data: sightings });
    return sightings;
  } catch {
    return [];
  }
}
