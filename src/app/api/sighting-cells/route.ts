import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { latLonToMeshCode } from "@/lib/mesh";

export const runtime = "nodejs";

/**
 * 過去 1 年 (365 日) の目撃件数を 4 次メッシュコード単位で集計して返す。
 * ヒートマップ描画とカードの両方で同じマップを参照することで、
 * 「ヒートマップの色」と「カードの危険度」が完全に一致する。
 *
 * レスポンスは { counts: { [meshCode]: count } } 形式。サーバーで JSON 化済み。
 * メッシュ数は最大 10〜20k 程度なので 100KB 前後で収まる。
 */
type Cache = { generatedAt: number; payload: { counts: Record<string, number> } };
let memCache: Cache | null = null;
const TTL_MS = 6 * 60 * 60 * 1000; // 6h

export async function GET() {
  if (memCache && Date.now() - memCache.generatedAt < TTL_MS) {
    return NextResponse.json(memCache.payload, {
      headers: { "Cache-Control": "public, max-age=21600" },
    });
  }

  const sightings = await getCachedSightings();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 365);
  const isoCutoff = cutoff.toISOString().slice(0, 10);

  const counts: Record<string, number> = {};
  for (const s of sightings) {
    if (!s.date || s.date < isoCutoff) continue;
    if (
      typeof s.lat !== "number" ||
      typeof s.lon !== "number" ||
      !Number.isFinite(s.lat) ||
      !Number.isFinite(s.lon)
    ) {
      continue;
    }
    const code = latLonToMeshCode(s.lat, s.lon);
    if (!code) continue;
    counts[code] = (counts[code] ?? 0) + 1;
  }

  const payload = { counts };
  memCache = { generatedAt: Date.now(), payload };
  return NextResponse.json(payload, {
    headers: { "Cache-Control": "public, max-age=21600" },
  });
}
