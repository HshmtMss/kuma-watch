import type { DataSourceEntry, KmlDateFormat, KmlSource } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";

const CACHE_TTL_MS = 60 * 60 * 1000;
const memo = new Map<string, { at: number; data: UnifiedSighting[] }>();

const ERA_OFFSETS: Record<string, number> = {
  令和: 2018, R: 2018, r: 2018,
  平成: 1988, H: 1988, h: 1988,
  昭和: 1925, S: 1925, s: 1925,
  大正: 1911, T: 1911, t: 1911,
  明治: 1867, M: 1867, m: 1867,
};

function normalizeFullWidth(s: string): string {
  return s.replace(/[\uff21-\uff3a\uff41-\uff5a\uff10-\uff19]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0xfee0),
  );
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function resolveFiscalYear(month: number, fiscalYear: number): number {
  return month >= 4 ? fiscalYear : fiscalYear + 1;
}

function parseWareki(s: string): string | null {
  const m = s.match(
    /(令和|平成|昭和|大正|明治|[RHSTMrhstm])(元|\d{1,2})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?/,
  );
  if (!m) return null;
  const era = m[1];
  const year = m[2] === "元" ? 1 : Number(m[2]);
  const mo = Number(m[3]);
  const da = Number(m[4]);
  const offset = ERA_OFFSETS[era];
  if (offset == null || !Number.isFinite(year) || !Number.isFinite(mo) || !Number.isFinite(da)) return null;
  const y = offset + year;
  if (y < 1900 || y > 2100) return null;
  return `${y}-${pad2(mo)}-${pad2(da)}`;
}

function parseUsSlash(s: string): string | null {
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const mo = Number(m[1]);
  const da = Number(m[2]);
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  return `${m[3]}-${pad2(mo)}-${pad2(da)}`;
}

function parseJaSlashOrIso(s: string): string | null {
  const m = s.match(/(\d{4})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?/);
  if (!m) return null;
  return `${m[1]}-${pad2(Number(m[2]))}-${pad2(Number(m[3]))}`;
}

function parseMonthDay(s: string, fiscalYear?: number): string | null {
  if (fiscalYear == null) return null;
  const m = s.match(/^(\d{1,2})月(\d{1,2})日$/);
  if (!m) return null;
  const mo = Number(m[1]);
  const da = Number(m[2]);
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  return `${resolveFiscalYear(mo, fiscalYear)}-${pad2(mo)}-${pad2(da)}`;
}

function parseDateCandidate(
  raw: string | undefined,
  hint: KmlDateFormat | undefined,
  fiscalYear: number | undefined,
): string | null {
  if (!raw) return null;
  const s = normalizeFullWidth(raw).trim();
  if (!s) return null;
  // Try all parsers; hint only prioritizes order.
  const parsers: Array<() => string | null> = [
    () => parseWareki(s),
    () => parseUsSlash(s),
    () => parseJaSlashOrIso(s),
    () => parseMonthDay(s, fiscalYear),
  ];
  if (hint === "us-slash") parsers.unshift(() => parseUsSlash(s));
  if (hint === "ja-slash") parsers.unshift(() => parseJaSlashOrIso(s));
  for (const p of parsers) {
    const r = p();
    if (r) return r;
  }
  return null;
}

type ParsedDateParenLocation = { date?: string; section?: string };

function parseDateParenLocation(
  name: string,
  fiscalYear: number | undefined,
): ParsedDateParenLocation {
  if (!name) return {};
  // Normalize full-width digits/letters AND full-width space (U+3000)
  const s = normalizeFullWidth(name).replace(/\u3000/g, " ").trim();
  // Match month/day at start: "1/17", "1／17", "1月17日", "1月17"
  const md =
    s.match(/^\s*(\d{1,2})[/／](\d{1,2})/) ??
    s.match(/^\s*(\d{1,2})月(\d{1,2})日?/);
  if (!md) return {};
  const mo = Number(md[1]);
  const da = Number(md[2]);
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return {};
  if (fiscalYear == null) return {};
  const year = mo >= 4 ? fiscalYear : fiscalYear + 1;
  const date = `${year}-${String(mo).padStart(2, "0")}-${String(da).padStart(2, "0")}`;
  // Prefer last parenthesis content; fallback to last whitespace-separated non-date/time token
  const loc = [...s.matchAll(/[（(]([^（()）]+)[）)]/g)].map((m) => m[1]);
  let section = loc[loc.length - 1]?.trim() ?? "";
  if (!section) {
    const tokens = s.split(/\s+/).filter(Boolean);
    for (let i = tokens.length - 1; i >= 0; i--) {
      const tk = tokens[i];
      if (/^\d{1,2}[/／]\d{1,2}(?:日)?$/.test(tk)) continue;
      if (/^\d{1,2}[:：]\d{1,2}(?:頃)?$/.test(tk)) continue;
      if (/^\d{1,2}(?:月|時)\d{0,2}(?:日|分|頃)?$/.test(tk)) continue;
      if (/^[\d:：頃月日時分/／]+$/.test(tk)) continue;
      section = tk;
      break;
    }
  }
  return { date, section };
}

type ParsedCitySectionWareki = { city?: string; section?: string; date?: string };

function parseCitySectionWareki(name: string): ParsedCitySectionWareki {
  if (!name) return {};
  const normalized = normalizeFullWidth(name).trim();
  const warekiRe =
    /(令和|平成|昭和|大正|明治|[RHSTMrhstm])(元|\d{1,2})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?\s*$/;
  const isoRe = /(\d{4})[.\/\-年](\d{1,2})[.\/\-月](\d{1,2})日?\s*$/;

  let date: string | null = null;
  let restSource = normalized;

  const wm = normalized.match(warekiRe);
  if (wm && wm.index != null) {
    date = parseWareki(wm[0]);
    if (date) restSource = normalized.substring(0, wm.index).trim();
  } else {
    const im = normalized.match(isoRe);
    if (im && im.index != null) {
      date = parseJaSlashOrIso(im[0]);
      if (date) restSource = normalized.substring(0, im.index).trim();
    }
  }
  if (!date) return {};

  const cleaned = restSource.replace(/[、,\s\u3000]+$/u, "").trim();
  const parts = cleaned.includes("、")
    ? cleaned.split(/[、,]+/).map((p) => p.trim()).filter(Boolean)
    : cleaned.split(/[\s\u3000]+/).map((p) => p.trim()).filter(Boolean);

  return {
    city: parts[0] || undefined,
    section: parts.slice(1).join(" ") || undefined,
    date,
  };
}

type PlacemarkRaw = {
  name: string;
  description: string;
  lat: number;
  lon: number;
  extended: Record<string, string>;
  folderFiscalYear?: number;
};

function detectFolderFiscalYear(folderName: string): number | undefined {
  if (!folderName) return undefined;
  const s = normalizeFullWidth(folderName);
  // 令和N年度 / 令和元年度
  const wa = s.match(/令和(元|\d{1,2})年度?/);
  if (wa) {
    const y = wa[1] === "元" ? 1 : Number(wa[1]);
    if (Number.isFinite(y) && y >= 1 && y <= 50) return 2018 + y;
  }
  // 平成N年度
  const hei = s.match(/平成(元|\d{1,2})年度?/);
  if (hei) {
    const y = hei[1] === "元" ? 1 : Number(hei[1]);
    if (Number.isFinite(y) && y >= 1 && y <= 31) return 1988 + y;
  }
  // RN / R元
  const rr = s.match(/R(元|\d{1,2})年?度?/);
  if (rr) {
    const y = rr[1] === "元" ? 1 : Number(rr[1]);
    if (Number.isFinite(y) && y >= 1 && y <= 50) return 2018 + y;
  }
  return undefined;
}

function extractPointPlacemarks(kml: string): PlacemarkRaw[] {
  // Locate folder spans so we can tag each placemark with its folder fiscalYear
  type FolderSpan = { start: number; end: number; year?: number };
  const folders: FolderSpan[] = [];
  const folderOpenRe = /<Folder>\s*<name>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/name>/g;
  let fm: RegExpExecArray | null;
  while ((fm = folderOpenRe.exec(kml)) !== null) {
    const endIdx = kml.indexOf("</Folder>", fm.index);
    if (endIdx < 0) continue;
    folders.push({ start: fm.index, end: endIdx, year: detectFolderFiscalYear(fm[1]) });
  }

  const out: PlacemarkRaw[] = [];
  const pmRe = /<Placemark[^>]*>[\s\S]*?<\/Placemark>/g;
  let pmMatch: RegExpExecArray | null;
  while ((pmMatch = pmRe.exec(kml)) !== null) {
    const pm = pmMatch[0];
    const pos = pmMatch.index;
    if (!pm.includes("<Point>")) continue;
    const nameMatch = pm.match(/<name>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/name>/);
    const descMatch = pm.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
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

    // Find enclosing folder (deepest/last containing this position)
    let folderFiscalYear: number | undefined;
    for (let i = folders.length - 1; i >= 0; i--) {
      const f = folders[i];
      if (f.start <= pos && pos < f.end && f.year != null) {
        folderFiscalYear = f.year;
        break;
      }
    }

    out.push({
      name: (nameMatch?.[1] ?? "").trim(),
      description: (descMatch?.[1] ?? "").trim(),
      lat,
      lon,
      extended,
      folderFiscalYear,
    });
  }
  return out;
}

function stripHtml(s: string): string {
  return s.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").trim();
}

function parseHeadCount(raw: string | undefined): number {
  if (!raw) return 1;
  const n = Number(raw.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? Math.round(n) : 1;
}

function buildSighting(
  pm: PlacemarkRaw,
  cfg: KmlSource,
): { date: string; city: string; section: string; comment: string; headCount: number } | null {
  let city = "";
  let section = "";
  let date: string | null = null;

  const effFiscalYear = pm.folderFiscalYear ?? cfg.fiscalYear;

  if (cfg.nameFormat === "city-section-wareki") {
    const parsed = parseCitySectionWareki(pm.name);
    if (!parsed.date) return null;
    city = parsed.city ?? "";
    section = parsed.section ?? "";
    date = parsed.date;
  } else if (cfg.nameFormat === "date-paren-location") {
    const parsed = parseDateParenLocation(pm.name, effFiscalYear);
    if (!parsed.date) return null;
    section = parsed.section ?? "";
    date = parsed.date;
  } else {
    const candidates: string[] = [];
    if (cfg.dateField && pm.extended[cfg.dateField]) candidates.push(pm.extended[cfg.dateField]);
    if (pm.name) candidates.push(pm.name);
    if (pm.description) candidates.push(stripHtml(pm.description));
    for (const c of candidates) {
      date = parseDateCandidate(c, cfg.dateFormat, effFiscalYear);
      if (date) break;
    }
    if (!date) return null;

    if (cfg.cityField && pm.extended[cfg.cityField]) city = pm.extended[cfg.cityField];
    if (cfg.sectionField && pm.extended[cfg.sectionField]) section = pm.extended[cfg.sectionField];

    if (cfg.nameFormat === "section-in-name" && pm.name) {
      // Strip leading "1 " / "1." / "1、" index, then treat rest as section
      const cleaned = normalizeFullWidth(pm.name)
        .trim()
        .replace(/^\s*[\d,]+[\s.,、]+/u, "")
        .trim();
      if (cleaned && !section) section = cleaned;
    }
  }

  let comment = "";
  if (cfg.commentField && pm.extended[cfg.commentField]) {
    comment = pm.extended[cfg.commentField];
  } else if (pm.description) {
    const desc = stripHtml(pm.description);
    if (!/latitude:|longitude:|緯度:|経度:/i.test(desc)) comment = desc;
  }

  const headCount = cfg.headCountField ? parseHeadCount(pm.extended[cfg.headCountField]) : 1;

  return { date, city, section, comment, headCount };
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

    const maxFutureYear = new Date().getFullYear() + 1;
    const split = entry.kml.coordPrefectureSplit;
    const sightings: UnifiedSighting[] = [];
    for (let i = 0; i < points.length; i++) {
      const built = buildSighting(points[i], entry.kml);
      if (!built) continue;
      const y = Number(built.date.slice(0, 4));
      if (!Number.isFinite(y) || y < 1970 || y > maxFutureYear) continue;
      let recordPref = prefName;
      if (split) {
        const v = split.axis === "lon" ? points[i].lon : points[i].lat;
        recordPref = v < split.threshold ? split.lowerPrefName : split.upperPrefName;
      }
      sightings.push({
        id: `${entry.id}-${i}`,
        source: entry.id,
        sourceKind: "csv",
        lat: points[i].lat,
        lon: points[i].lon,
        date: built.date,
        prefectureName: recordPref,
        // KML から city が拾えない単一市町スコープのソース (例: 盛岡市
        // のみ収録された MyMap) は entry.defaultCity を使う。
        cityName: built.city || entry.defaultCity || "",
        sectionName: built.section,
        comment: built.comment,
        headCount: built.headCount,
      });
    }

    memo.set(entry.id, { at: now, data: sightings });
    return sightings;
  } catch {
    return [];
  }
}
