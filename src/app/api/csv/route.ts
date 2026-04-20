import { NextResponse } from "next/server";
import {
  findSourceById,
  type CsvFieldMappings,
  type CsvSource,
  type DataSourceEntry,
} from "@/data/data-sources";

const CACHE_SECONDS = 3600;
const MAX_ROWS = 20000;

export type CsvSighting = {
  id: string;
  sourceId: string;
  prefCode: string;
  prefName: string;
  lat: number;
  lon: number;
  date: string;
  city?: string;
  section?: string;
  situation?: string;
  headCount?: number;
  timeOfDay?: string;
};

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
      if (c === '"') {
        inQuotes = true;
      } else if (c === delim) {
        out.push(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function parseDate(value: string | undefined, format: string | undefined): string | null {
  if (!value) return null;
  const s = value.trim();
  if (!s) return null;
  if (format === "epoch-ms") {
    const n = Number(s);
    if (!Number.isFinite(n)) return null;
    const d = new Date(n);
    return Number.isNaN(d.getTime()) ? null : d.toISOString().split("T")[0];
  }
  if (format === "ja-slash") {
    // 2023/4/1 or 2023/04/01 (also supports time suffix like "2023/4/1 13:45")
    const m = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
    if (!m) return null;
    const y = m[1];
    const mo = m[2].padStart(2, "0");
    const da = m[3].padStart(2, "0");
    return `${y}-${mo}-${da}`;
  }
  // default ISO
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().split("T")[0];
}

function cleanNum(v: string | undefined): number | undefined {
  if (!v) return undefined;
  const n = Number(v.replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(n) ? n : undefined;
}

function normalizeRow(
  header: string[],
  row: string[],
  entry: DataSourceEntry,
  csv: CsvSource,
  index: number,
): CsvSighting | null {
  const get = (col?: string): string | undefined => {
    if (!col) return undefined;
    const idx = header.indexOf(col);
    if (idx < 0) return undefined;
    return row[idx];
  };

  const m = csv.mappings;
  const lat = cleanNum(get(m.lat));
  const lon = cleanNum(get(m.lon));
  if (lat == null || lon == null) return null;
  if (lat < 20 || lat > 50 || lon < 120 || lon > 150) return null;

  const date = parseDate(get(m.date), csv.dateFormat);
  if (!date) return null;

  return {
    id: `${entry.id}-${index}`,
    sourceId: entry.id,
    prefCode: entry.prefCode,
    prefName: entry.regionLabel.split(" ")[0] ?? entry.regionLabel,
    lat,
    lon,
    date,
    city: get(m.city) || undefined,
    section: get(m.section) || undefined,
    situation: get(m.situation) || undefined,
    headCount: cleanNum(get(m.headCount)),
    timeOfDay: get(m.timeOfDay) || undefined,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sourceId = searchParams.get("sourceId");
  if (!sourceId) {
    return NextResponse.json(
      { error: "sourceId が必要です" },
      { status: 400 },
    );
  }
  const entry = findSourceById(sourceId);
  if (!entry || !entry.csv) {
    return NextResponse.json(
      { error: "このソースには CSV 設定がありません" },
      { status: 404 },
    );
  }

  const csv = entry.csv;
  const delim = csv.delimiter ?? ",";

  try {
    const r = await fetch(csv.csvUrl, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
    });
    if (!r.ok) {
      return NextResponse.json(
        { error: "CSV 取得失敗", upstreamStatus: r.status },
        { status: 502 },
      );
    }
    const buf = await r.arrayBuffer();
    let text: string;
    if (csv.encoding === "sjis") {
      text = new TextDecoder("shift-jis").decode(buf);
    } else {
      text = new TextDecoder("utf-8").decode(buf);
    }
    text = stripBom(text).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const lines = text.split("\n").filter((l) => l.length > 0);
    if (lines.length < 2) {
      return NextResponse.json(
        {
          sourceId,
          regionLabel: entry.regionLabel,
          fetchedAt: new Date().toISOString(),
          total: 0,
          sightings: [],
          note: "空または 1 行の CSV",
        },
        { headers: { "Cache-Control": `public, max-age=${CACHE_SECONDS}` } },
      );
    }
    const header = parseCsvRow(lines[0], delim);
    const sightings: CsvSighting[] = [];
    for (let i = 1; i < lines.length && sightings.length < MAX_ROWS; i++) {
      const row = parseCsvRow(lines[i], delim);
      const s = normalizeRow(header, row, entry, csv, i);
      if (s) sightings.push(s);
    }

    return NextResponse.json(
      {
        sourceId,
        regionLabel: entry.regionLabel,
        fetchedAt: new Date().toISOString(),
        csvUrl: csv.csvUrl,
        total: sightings.length,
        sightings,
      },
      {
        headers: {
          "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 },
    );
  }
}
