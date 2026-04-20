import JSZip from "jszip";
import proj4 from "proj4";
import type { DataSourceEntry } from "@/data/data-sources";
import { normalizeFullWidth } from "./date-utils";
import { inJapanBounds, type UnifiedSighting } from "./types";

const CACHE_TTL_MS = 60 * 60 * 1000;
let memo: { at: number; data: UnifiedSighting[] } | null = null;

// JGD2011 Plane Rectangular CS Zone VII (岐阜を含む中部日本)
proj4.defs(
  "EPSG:6675",
  "+proj=tmerc +lat_0=36 +lon_0=137.166666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
);

type YearArchive = {
  year: number;
  url: string;
  kind: "zip" | "csv";
};

// reiwa N year → Western year: R1=2019, R7=2025
const ARCHIVES: YearArchive[] = [
  { year: 2025, url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/08fbb219-0c54-413b-b05e-1ee5c1e9caf8/resource/ce491f12-cd79-4599-b815-ba322d890af6/download/reiwa7.zip", kind: "zip" },
  { year: 2024, url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/08fbb219-0c54-413b-b05e-1ee5c1e9caf8/resource/2e8b1564-484a-431e-87d1-663af9606a1c/download/kumamapreiwa6.zip", kind: "zip" },
  { year: 2023, url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/08fbb219-0c54-413b-b05e-1ee5c1e9caf8/resource/3ab4d826-b2ad-4927-a288-c18760092eb4/download/kumamapreiwa5.zip", kind: "zip" },
  { year: 2022, url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/08fbb219-0c54-413b-b05e-1ee5c1e9caf8/resource/d15100d3-6b03-4883-a518-cb55b00cf243/download/reiwa4.zip", kind: "zip" },
  { year: 2021, url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/08fbb219-0c54-413b-b05e-1ee5c1e9caf8/resource/e9efa243-4f9b-45bc-a578-b7db0af2dca1/download/reiwa3.zip", kind: "zip" },
  { year: 2020, url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/08fbb219-0c54-413b-b05e-1ee5c1e9caf8/resource/8974576a-3fda-40a6-aee8-cbc367c82c31/download/reiwa2.zip", kind: "zip" },
];

type Point = { x: number; y: number };

function parseShpPoints(buf: ArrayBuffer): Point[] {
  const dv = new DataView(buf);
  if (dv.getInt32(0, false) !== 9994) return [];
  const points: Point[] = [];
  let offset = 100;
  const fileLen = dv.getInt32(24, false) * 2;
  while (offset < Math.min(dv.byteLength, fileLen)) {
    const contentLenWords = dv.getInt32(offset + 4, false);
    const shapeType = dv.getInt32(offset + 8, true);
    if (shapeType === 1 && offset + 28 <= dv.byteLength) {
      const x = dv.getFloat64(offset + 12, true);
      const y = dv.getFloat64(offset + 20, true);
      points.push({ x, y });
    }
    offset += 8 + contentLenWords * 2;
  }
  return points;
}

type DbfField = { name: string; type: string; length: number };
type DbfRow = Record<string, string>;

function decodeShiftJis(bytes: Uint8Array): string {
  return new TextDecoder("shift-jis", { fatal: false }).decode(bytes).replace(/\0+$/, "").trim();
}

function parseDbf(buf: ArrayBuffer): { fields: DbfField[]; rows: DbfRow[] } {
  const view = new DataView(buf);
  const u8 = new Uint8Array(buf);
  const numRecords = view.getUint32(4, true);
  const headerLen = view.getUint16(8, true);
  const recordLen = view.getUint16(10, true);

  const fields: DbfField[] = [];
  let off = 32;
  while (off < headerLen - 1 && u8[off] !== 0x0d) {
    const name = decodeShiftJis(u8.slice(off, off + 11));
    const type = String.fromCharCode(u8[off + 11]);
    const length = u8[off + 16];
    fields.push({ name, type, length });
    off += 32;
  }

  const rows: DbfRow[] = [];
  for (let r = 0; r < numRecords; r++) {
    const recStart = headerLen + r * recordLen;
    if (recStart + recordLen > u8.length) break;
    const deleteFlag = u8[recStart];
    if (deleteFlag === 0x2a) continue;
    const row: DbfRow = {};
    let fOff = recStart + 1;
    for (const f of fields) {
      const raw = u8.slice(fOff, fOff + f.length);
      row[f.name] = decodeShiftJis(raw);
      fOff += f.length;
    }
    rows.push(row);
  }
  return { fields, rows };
}

function fullWidthToHalfDigits(s: string): string {
  return normalizeFullWidth(s);
}

function parseMonthDay(s: string): number | null {
  if (!s) return null;
  const n = Number(fullWidthToHalfDigits(s).replace(/[^0-9]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function buildDate(year: number, monthStr: string, dayStr: string): string | null {
  const mo = parseMonthDay(monthStr);
  const da = parseMonthDay(dayStr);
  if (mo == null || da == null) return null;
  if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
  return `${year}-${pad2(mo)}-${pad2(da)}`;
}

async function fetchBuffer(url: string): Promise<ArrayBuffer | null> {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: 3600 },
    });
    if (!r.ok) return null;
    return await r.arrayBuffer();
  } catch {
    return null;
  }
}

async function processYear(arch: YearArchive, entryId: string): Promise<UnifiedSighting[]> {
  const buf = await fetchBuffer(arch.url);
  if (!buf) return [];
  const zip = await JSZip.loadAsync(buf);
  const files = Object.keys(zip.files);
  const shpName = files.find((n) => n.toLowerCase().endsWith(".shp"));
  const dbfName = files.find((n) => n.toLowerCase().endsWith(".dbf"));
  if (!shpName || !dbfName) return [];

  const [shpBuf, dbfBuf] = await Promise.all([
    zip.file(shpName)!.async("arraybuffer"),
    zip.file(dbfName)!.async("arraybuffer"),
  ]);
  const points = parseShpPoints(shpBuf);
  const { rows } = parseDbf(dbfBuf);

  const out: UnifiedSighting[] = [];
  const n = Math.min(points.length, rows.length);
  for (let i = 0; i < n; i++) {
    const p = points[i];
    const row = rows[i];
    const [lon, lat] = proj4("EPSG:6675", "WGS84", [p.x, p.y]);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    if (!inJapanBounds(lat, lon)) continue;
    const date = buildDate(arch.year, row["出没月"] ?? "", row["出没日"] ?? "");
    if (!date) continue;
    out.push({
      id: `${entryId}-${arch.year}-${i}`,
      source: entryId,
      sourceKind: "csv",
      lat,
      lon,
      date,
      prefectureName: "岐阜県",
      cityName: row["市町村名"] ?? "",
      sectionName: row["旧市町村名"] ?? row["出没場所"] ?? "",
      comment: row["目撃者情報"] ?? "",
      headCount: parseMonthDay(row["頭数"] ?? "") ?? 1,
    });
  }
  return out;
}

export async function fetchGifuSightings(entry: DataSourceEntry): Promise<UnifiedSighting[]> {
  const now = Date.now();
  if (memo && now - memo.at < CACHE_TTL_MS) return memo.data;

  const results = await Promise.all(
    ARCHIVES.map((a) => processYear(a, entry.id).catch(() => [] as UnifiedSighting[])),
  );

  const all = results.flat();
  memo = { at: now, data: all };
  return all;
}
