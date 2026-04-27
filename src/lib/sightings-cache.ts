import { unstable_cache } from "next/cache";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchAllOfficialSightings } from "@/lib/sources/aggregate";
import { getSharp9110Sightings } from "@/lib/sources/all-records";
import type { UnifiedSighting } from "@/lib/sources/types";

// 出没データの単一キャッシュ。/api/kuma と /api/ask (findNearbySightings) で共有する。
// 読み取り順:
//   1. .cache/sightings-v2.json (ローカル dev の永続キャッシュ)
//   2. public/data/sightings.json (リポジトリ同梱スナップショット — 本番フォールバック)
//   3. 67 ソースを実集約 (3 分超かかるので Hobby の 60s 制約では失敗する)
// 上記いずれかが返した結果を unstable_cache が 6h 保持し、
// Vercel Cron が /api/cron/refresh で revalidateTag("kuma-records") を呼ぶ。
//
// 同梱スナップショットの更新は将来 GitHub Actions 化予定。それまでは手動で
// `cp .cache/sightings-v2.json public/data/sightings.json` してコミット。

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "sightings-v2.json");
const SNAPSHOT_FILE = join(process.cwd(), "public", "data", "sightings.json");
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

async function readBundledSnapshot(): Promise<UnifiedSighting[] | null> {
  // 1. fs 経由で読む (Next.js が outputFileTracing で含めてくれる場合)
  try {
    if (existsSync(SNAPSHOT_FILE)) {
      const raw = readFileSync(SNAPSHOT_FILE, "utf8");
      const blob = JSON.parse(raw) as { records?: UnifiedSighting[] };
      if (Array.isArray(blob.records) && blob.records.length > 0) {
        return blob.records;
      }
    }
  } catch {
    // 続けて HTTP フォールバック
  }
  // 2. Vercel: 同一オリジンの静的ファイルを CDN 経由で取得
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  if (!baseUrl) return null;
  try {
    const res = await fetch(`${baseUrl}/data/sightings.json`, {
      cache: "force-cache",
    });
    if (!res.ok) return null;
    const blob = (await res.json()) as { records?: UnifiedSighting[] };
    if (Array.isArray(blob.records) && blob.records.length > 0) {
      return blob.records;
    }
    return null;
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
    const bundled = await readBundledSnapshot();
    if (bundled && bundled.length > 0) return bundled;
    return aggregateAllSightings();
  },
  ["kuma-sightings-v3"],
  { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
);
