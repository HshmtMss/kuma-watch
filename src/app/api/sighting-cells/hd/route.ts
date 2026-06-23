import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { latLonToMeshCode } from "@/lib/mesh";
import { CONSOLE_REGIONS, meshLevelFor } from "@/data/console-regions";

export const runtime = "nodejs";

/**
 * 高精度(HD)ヒートマップ用エンドポイント（有料③コンソール）。
 *
 * 契約地域レジストリ(console-regions.ts)に登録された地域の事案だけを、
 * その地域の次数(500m/250m)で集計して返す。非契約地域は一切含めない＝
 * クライアントがどう叩いても無料地域の高精度は得られない（サーバー側ゲート）。
 *
 * 既存 /api/sighting-cells（1km・無料・カードと共有）は一切変更しないため、
 * 無料 UX とカードの危険度には影響しない。HD はマップの追加オーバーレイ用。
 *
 * レスポンス: { counts: { [meshCode]: count }, regions: [...], level別 cell 数 }
 */
type Cache = {
  generatedAt: number;
  payload: {
    counts: Record<string, number>;
    regions: { prefName: string; cityName?: string; level: number }[];
  };
};
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
    const level = meshLevelFor(s.prefectureName, s.cityName);
    if (level <= 3) continue; // 契約地域のみ（非契約は HD に含めない）
    const code = latLonToMeshCode(s.lat, s.lon, level);
    if (!code) continue;
    counts[code] = (counts[code] ?? 0) + 1;
  }

  const payload = {
    counts,
    regions: CONSOLE_REGIONS.map((r) => ({
      prefName: r.prefName,
      cityName: r.cityName,
      level: r.level,
    })),
  };
  memCache = { generatedAt: Date.now(), payload };
  return NextResponse.json(payload, {
    headers: { "Cache-Control": "public, max-age=21600" },
  });
}
