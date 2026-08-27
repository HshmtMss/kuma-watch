import type { DataSourceEntry } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";
import { jstToday } from "@/lib/jst-date";

const CACHE_TTL_MS = 60 * 60 * 1000;
const MAX_ROWS = 20000;

const memo = new Map<string, { at: number; data: UnifiedSighting[] }>();

function stripBom(s: string): string {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

function parseCsvRow(line: string, delim: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === delim) {
        out.push(cur);
        cur = "";
      } else cur += c;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function parseDate(value: string, format: string | undefined): string | null {
  const s = value.trim();
  if (!s) return null;
  if (format === "epoch-ms") {
    const n = Number(s);
    if (!Number.isFinite(n)) return null;
    // 出没日は JST のカレンダー日。UTC で切ると JST 00:00〜08:59 が前日になる。
    const d = new Date(n + 9 * 60 * 60 * 1000);
    return Number.isNaN(d.getTime()) ? null : d.toISOString().split("T")[0];
  }
  if (format === "ja-slash") {
    const m = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
    if (!m) return null;
    return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  }
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().split("T")[0];
}

function cleanNum(v: string | undefined): number {
  if (!v) return 1;
  const n = Number(v.replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 1;
}

/**
 * 一覧ページから現行の CSV URL を探す。
 * pattern はリンクの href に対して当てる正規表現 (最初の一致を採る)。
 */
async function discoverCsvUrl(
  listUrl: string,
  pattern?: string,
): Promise<string | null> {
  if (!pattern) return null;
  try {
    const res = await fetch(listUrl, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) return null;
    const html = await res.text();
    const re = new RegExp(`href="([^"]*${pattern}[^"]*)"`, "i");
    const m = re.exec(html);
    if (!m) return null;
    const href = m[1];
    if (href.startsWith("http")) return href;
    const base = new URL(listUrl);
    return `${base.origin}${href.startsWith("/") ? "" : "/"}${href}`;
  } catch {
    return null;
  }
}

export async function fetchCsvSightings(
  entry: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  if (!entry.csv) return [];
  const now = Date.now();
  const cached = memo.get(entry.id);
  if (cached && now - cached.at < CACHE_TTL_MS) return cached.data;

  const csv = entry.csv;
  const delim = csv.delimiter ?? ",";

  // 配布ファイル名に更新日が入る自治体があり、更新のたびに URL が変わって
  // 旧 URL は残るが中身が古いまま (東京都: tukinowaguma_source20260302 →
  // 20260610)。登録した URL が固定だと静かに古いデータを配り続けるので、
  // 一覧ページから現行の URL を探す。見つからなければ登録済みにフォールバック。
  const csvUrl = csv.discoverFrom
    ? ((await discoverCsvUrl(csv.discoverFrom, csv.discoverPattern)) ?? csv.csvUrl)
    : csv.csvUrl;

  try {
    const r = await fetch(csvUrl, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: 3600 },
    });
    if (!r.ok) return [];
    const buf = await r.arrayBuffer();
    const text = stripBom(
      new TextDecoder(csv.encoding === "sjis" ? "shift-jis" : "utf-8").decode(buf),
    )
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n");
    const lines = text.split("\n").filter((l) => l.length > 0);
    if (lines.length < 2) return [];

    const header = parseCsvRow(lines[0], delim);
    const idx = (name?: string) =>
      name ? header.indexOf(name) : -1;
    const m = csv.mappings;
    const iLat = idx(m.lat);
    const iLon = idx(m.lon);
    const iDate = idx(m.date);
    const iCity = idx(m.city);
    const iSection = idx(m.section);
    const iSituation = idx(m.situation);
    const iHead = idx(m.headCount);
    const prefName = entry.regionLabel.split(" ")[0] ?? entry.regionLabel;

    // 未来日付ガード: 自治体の typo（例: 2025 を 2026 と書き間違い）で
    // 「今日より先」の日付が入った record を防ぐ。生のクマ目撃データは
    // 過去・現在のみが現実的。当日まで許容、翌日以降は問答無用でスキップ。
    const todayIso = jstToday();

    const sightings: UnifiedSighting[] = [];
    let droppedFuture = 0;
    for (let i = 1; i < lines.length && sightings.length < MAX_ROWS; i++) {
      const row = parseCsvRow(lines[i], delim);
      if (iLat < 0 || iLon < 0 || iDate < 0) break;
      const lat = Number(row[iLat]);
      const lon = Number(row[iLon]);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
      if (!inJapanBounds(lat, lon)) continue;
      const date = parseDate(row[iDate] ?? "", csv.dateFormat);
      if (!date) continue;
      if (date > todayIso) {
        droppedFuture++;
        continue;
      }
      sightings.push({
        id: `${entry.id}-${i}`,
        source: entry.id,
        sourceKind: "csv",
        lat,
        lon,
        date,
        prefectureName: prefName,
        cityName: (iCity >= 0 && row[iCity]) || "",
        sectionName: (iSection >= 0 && row[iSection]) || "",
        comment: (iSituation >= 0 && row[iSituation]) || "",
        headCount: iHead >= 0 ? cleanNum(row[iHead]) : 1,
      });
    }

    if (droppedFuture > 0) {
      console.warn(
        `[csv:${entry.id}] dropped ${droppedFuture} future-dated records (source data typo?)`,
      );
    }
    memo.set(entry.id, { at: now, data: sightings });
    return sightings;
  } catch {
    return [];
  }
}
