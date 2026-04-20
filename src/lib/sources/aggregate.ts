import { DATA_SOURCES } from "@/data/data-sources";
import { fetchArcGisSightings } from "./arcgis";
import { fetchCsvSightings } from "./csv";
import { fetchGifuSightings } from "./gifu";
import { fetchHigumapSightings } from "./higumap";
import { fetchKemonoteSightings } from "./kemonote";
import { fetchKmlSightings } from "./kml";
import type { UnifiedSighting } from "./types";

export async function fetchAllOfficialSightings(): Promise<UnifiedSighting[]> {
  const arcgis = DATA_SOURCES.filter((s) => s.arcgis);
  const csv = DATA_SOURCES.filter((s) => s.csv);
  const kml = DATA_SOURCES.filter((s) => s.kml);
  const higumap = DATA_SOURCES.filter((s) => s.extractor === "higumap-api");
  const gifu = DATA_SOURCES.filter((s) => s.extractor === "direct-shapefile-zip");
  const kemonote = DATA_SOURCES.filter((s) => s.extractor === "kemonote-api");

  const results = await Promise.all([
    ...arcgis.map((s) => fetchArcGisSightings(s).catch(() => [] as UnifiedSighting[])),
    ...csv.map((s) => fetchCsvSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kml.map((s) => fetchKmlSightings(s).catch(() => [] as UnifiedSighting[])),
    ...higumap.map((s) => fetchHigumapSightings(s).catch(() => [] as UnifiedSighting[])),
    ...gifu.map((s) => fetchGifuSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kemonote.map((s) => fetchKemonoteSightings(s).catch(() => [] as UnifiedSighting[])),
  ]);

  const merged: UnifiedSighting[] = [];
  for (const arr of results) merged.push(...arr);
  return merged;
}
