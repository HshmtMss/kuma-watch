import { DATA_SOURCES } from "@/data/data-sources";
import { fetchArcGisSightings } from "./arcgis";
import { fetchCsvSightings } from "./csv";
import { fetchKmlSightings } from "./kml";
import type { UnifiedSighting } from "./types";

export async function fetchAllOfficialSightings(): Promise<UnifiedSighting[]> {
  const arcgis = DATA_SOURCES.filter((s) => s.arcgis);
  const csv = DATA_SOURCES.filter((s) => s.csv);
  const kml = DATA_SOURCES.filter((s) => s.kml);

  const results = await Promise.all([
    ...arcgis.map((s) => fetchArcGisSightings(s).catch(() => [] as UnifiedSighting[])),
    ...csv.map((s) => fetchCsvSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kml.map((s) => fetchKmlSightings(s).catch(() => [] as UnifiedSighting[])),
  ]);

  const merged: UnifiedSighting[] = [];
  for (const arr of results) merged.push(...arr);
  return merged;
}
