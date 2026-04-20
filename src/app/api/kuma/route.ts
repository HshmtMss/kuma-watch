import { NextResponse } from "next/server";
import { fetchAllOfficialSightings } from "@/lib/sources/aggregate";
import type { UnifiedSighting } from "@/lib/sources/types";

const NATIONAL_JSON_URL =
  "https://public.sharp9110.com/view/opendatajson/bear";

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

type Sharp9110Record = {
  PostId: number;
  IssueDate?: string;
  Latitude?: number;
  Longitude?: number;
  PrefectureName?: string;
  CityName?: string;
  SectionNameText?: string;
  IssueComment?: string;
  HeadCount?: number;
};

let cache: { records: KumaRecord[]; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000;
const DEFAULT_LIMIT = 8000;
const MAX_LIMIT = 25000;

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

async function getSharp9110(): Promise<KumaRecord[]> {
  const now = Date.now();
  if (cache && now - cache.fetchedAt <= CACHE_TTL_MS) return cache.records;
  const res = await fetch(NATIONAL_JSON_URL, {
    headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("sharp9110 fetch failed");
  const raw = (await res.json()) as Sharp9110Record[];
  const records: KumaRecord[] = raw
    .filter(
      (r) =>
        typeof r.Latitude === "number" &&
        typeof r.Longitude === "number" &&
        !isNaN(r.Latitude) &&
        !isNaN(r.Longitude),
    )
    .map((r) => ({
      id: r.PostId,
      lat: r.Latitude!,
      lon: r.Longitude!,
      date: r.IssueDate ? r.IssueDate.split("T")[0] : "",
      prefectureName: r.PrefectureName ?? "",
      cityName: r.CityName ?? "",
      sectionName: r.SectionNameText ?? "",
      comment: (r.IssueComment ?? "").split("#")[0].trim(),
      headCount: r.HeadCount ?? 1,
      source: "sharp9110",
    }));
  cache = { records, fetchedAt: now };
  return records;
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

  try {
    const [sharp, official] = await Promise.all([
      getSharp9110().catch(() => [] as KumaRecord[]),
      fetchAllOfficialSightings().catch(() => []),
    ]);
    const all: KumaRecord[] = [
      ...sharp,
      ...official.map(unifiedToKumaRecord),
    ];

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
