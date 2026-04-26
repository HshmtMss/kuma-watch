import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchAllOfficialSightings } from "@/lib/sources/aggregate";
import { getSharp9110Sightings } from "@/lib/sources/all-records";
import type { UnifiedSighting } from "@/lib/sources/types";

export type KumaRecord = {
  id: number | string;
  lat: number;
  lon: number;
  date: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
  source?: string;
};

const DEFAULT_LIMIT = 8000;
const MAX_LIMIT = 100000;

// ===== キャッシュ戦略 =====
// 1. ローカル dev: .cache/sightings.json をディスクに永続化 (再起動超えを実現)。
// 2. Vercel/Serverless: unstable_cache + revalidateTag による Next.js データキャッシュを利用。
//    Vercel Cron が /api/cron/refresh を叩くと revalidateTag('kuma-records') でキャッシュ無効化。
//    ファイル書き込みは試みるが、サーバレスでは EROFS で失敗するので catch して無視。

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "sightings.json");
const CACHE_TAG = "kuma-records";
const REVALIDATE_SECONDS = 6 * 60 * 60; // 6h

type CacheBlob = { generatedAt: number; records: KumaRecord[] };

function readDiskCache(): CacheBlob | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    const raw = readFileSync(CACHE_FILE, "utf8");
    const blob = JSON.parse(raw) as CacheBlob;
    if (!Array.isArray(blob.records) || typeof blob.generatedAt !== "number")
      return null;
    return blob;
  } catch {
    return null;
  }
}

function writeDiskCache(records: KumaRecord[]): void {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(
      CACHE_FILE,
      JSON.stringify({ generatedAt: Date.now(), records }),
    );
  } catch {
    // serverless 環境では書き込み不可。サイレントに無視
  }
}

function unifiedToKumaRecord(s: UnifiedSighting): KumaRecord {
  return {
    id: s.id,
    lat: s.lat,
    lon: s.lon,
    date: s.date,
    prefectureName: s.prefectureName,
    cityName: s.cityName,
    sectionName: s.sectionName,
    comment: s.comment,
    headCount: s.headCount,
    source: s.source,
  };
}

function sharpUnifiedToKumaRecord(s: UnifiedSighting): KumaRecord {
  return {
    id: s.id,
    lat: s.lat,
    lon: s.lon,
    date: s.date,
    prefectureName: s.prefectureName,
    cityName: s.cityName,
    sectionName: s.sectionName,
    comment: s.comment,
    headCount: s.headCount,
    source: "sharp9110",
  };
}

async function aggregateAllRaw(): Promise<KumaRecord[]> {
  const [sharp, official] = await Promise.all([
    getSharp9110Sightings().catch(() => [] as UnifiedSighting[]),
    fetchAllOfficialSightings().catch(() => []),
  ]);
  const all = [
    ...sharp.map(sharpUnifiedToKumaRecord),
    ...official.map(unifiedToKumaRecord),
  ];
  // ローカル dev では disk へも保存し、再起動を跨いで再利用
  writeDiskCache(all);
  return all;
}

// Next.js データキャッシュ。Vercel Cron が revalidateTag(CACHE_TAG) で更新。
// ローカル dev でもメモリ + ディスク両方で 6h キャッシュされる。
const getCachedRecords = unstable_cache(
  async (): Promise<KumaRecord[]> => {
    // 起動直後の cold start は disk から即時返答できれば優先
    const disk = readDiskCache();
    if (disk && disk.records.length > 0) {
      // バックグラウンドで refresh はしない (unstable_cache の TTL に任せる)
      return disk.records;
    }
    return aggregateAllRaw();
  },
  ["kuma-records-v1"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const source = searchParams.get("source");
  const limitParam = searchParams.get("limit");
  const limit = limitParam
    ? Math.min(MAX_LIMIT, Math.max(1, Number(limitParam) || DEFAULT_LIMIT))
    : DEFAULT_LIMIT;
  const force = searchParams.get("refresh") === "1";

  try {
    const all = force ? await aggregateAllRaw() : await getCachedRecords();

    let records = all;
    if (pref) records = records.filter((r) => r.prefectureName === pref);
    if (from) records = records.filter((r) => r.date >= from);
    if (to) records = records.filter((r) => r.date <= to);
    if (source) records = records.filter((r) => r.source === source);

    const sorted = [...records].sort((a, b) => (a.date > b.date ? -1 : 1));
    const limited = sorted.slice(0, limit);

    const bySource: Record<string, number> = {};
    for (const r of all) {
      const key = r.source ?? "unknown";
      bySource[key] = (bySource[key] ?? 0) + 1;
    }

    return NextResponse.json(
      {
        records: limited,
        total: all.length,
        matched: records.length,
        shown: limited.length,
        sources: bySource,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
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
