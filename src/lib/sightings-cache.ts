import { unstable_cache } from "next/cache";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchAllOfficialSightings } from "@/lib/sources/aggregate";
import { getSharp9110Sightings } from "@/lib/sources/all-records";
import type { UnifiedSighting } from "@/lib/sources/types";

// 出没データの単一キャッシュ。/api/kuma と /api/ask (findNearbySightings) で共有する。
// - ローカル dev: .cache/sightings-v2.json にディスク永続化 (再起動を跨ぐ)
// - Vercel/Serverless: unstable_cache + revalidateTag(CACHE_TAG) で 6h キャッシュ
//   Vercel Cron が /api/cron/refresh で revalidateTag("kuma-records") を呼ぶ
//
// 旧 .cache/sightings.json (KumaRecord[] 形式) とは互換性を持たないため、
// ファイル名を v2 に変更している。dev は初回 1 回だけ再集約が走る。

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "sightings-v2.json");
export const CACHE_TAG = "kuma-records";
const REVALIDATE_SECONDS = 6 * 60 * 60;

type CacheBlob = { generatedAt: number; records: UnifiedSighting[] };

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

function writeDiskCache(records: UnifiedSighting[]): void {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(
      CACHE_FILE,
      JSON.stringify({ generatedAt: Date.now(), records }),
    );
  } catch {
    // serverless では書き込み不可。サイレントに無視
  }
}

export async function aggregateAllSightings(): Promise<UnifiedSighting[]> {
  const [sharp, official] = await Promise.all([
    getSharp9110Sightings().catch(() => [] as UnifiedSighting[]),
    fetchAllOfficialSightings().catch(() => [] as UnifiedSighting[]),
  ]);
  const all: UnifiedSighting[] = [
    ...sharp.map((s) => ({ ...s, source: "sharp9110" })),
    ...official,
  ];
  writeDiskCache(all);
  return all;
}

export const getCachedSightings = unstable_cache(
  async (): Promise<UnifiedSighting[]> => {
    const disk = readDiskCache();
    if (disk && disk.records.length > 0) return disk.records;
    return aggregateAllSightings();
  },
  ["kuma-sightings-v2"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);
