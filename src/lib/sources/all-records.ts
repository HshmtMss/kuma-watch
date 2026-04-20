import { fetchAllOfficialSightings } from "./aggregate";
import type { UnifiedSighting } from "./types";

const SHARP9110_URL = "https://public.sharp9110.com/view/opendatajson/bear";
const CACHE_TTL_MS = 60 * 60 * 1000;

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

let sharpCache: { at: number; data: UnifiedSighting[] } | null = null;

export async function getSharp9110Sightings(): Promise<UnifiedSighting[]> {
  const now = Date.now();
  if (sharpCache && now - sharpCache.at < CACHE_TTL_MS) return sharpCache.data;
  try {
    const res = await fetch(SHARP9110_URL, {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      cache: "no-store",
    });
    if (!res.ok) return sharpCache?.data ?? [];
    const raw = (await res.json()) as Sharp9110Record[];
    const data: UnifiedSighting[] = raw
      .filter(
        (r) =>
          typeof r.Latitude === "number" &&
          typeof r.Longitude === "number" &&
          !isNaN(r.Latitude) &&
          !isNaN(r.Longitude),
      )
      .map((r) => ({
        id: `sharp9110-${r.PostId}`,
        source: "sharp9110",
        sourceKind: "sharp9110" as const,
        lat: r.Latitude!,
        lon: r.Longitude!,
        date: r.IssueDate ? r.IssueDate.split("T")[0] : "",
        prefectureName: r.PrefectureName ?? "",
        cityName: r.CityName ?? "",
        sectionName: r.SectionNameText ?? "",
        comment: (r.IssueComment ?? "").split("#")[0].trim(),
        headCount: r.HeadCount ?? 1,
      }));
    sharpCache = { at: now, data };
    return data;
  } catch {
    return sharpCache?.data ?? [];
  }
}

export async function getAllSightings(): Promise<UnifiedSighting[]> {
  const [sharp, official] = await Promise.all([
    getSharp9110Sightings().catch(() => [] as UnifiedSighting[]),
    fetchAllOfficialSightings().catch(() => [] as UnifiedSighting[]),
  ]);
  return [...sharp, ...official];
}
