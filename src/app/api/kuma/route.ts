import { NextResponse } from "next/server";
import {
  aggregateAllSightings,
  getCachedSightings,
} from "@/lib/sightings-cache";
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
    const unified = force
      ? await aggregateAllSightings()
      : await getCachedSightings();
    const all = unified.map(unifiedToKumaRecord);

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
