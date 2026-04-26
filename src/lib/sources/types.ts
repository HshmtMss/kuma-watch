export type SightingSourceKind = "sharp9110" | "arcgis" | "csv" | "llm-html";

export type UnifiedSighting = {
  id: string;
  source: string;
  sourceKind: SightingSourceKind;
  lat: number;
  lon: number;
  date: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
};

export function inJapanBounds(lat: number, lon: number): boolean {
  return lat >= 20 && lat <= 50 && lon >= 120 && lon <= 150;
}
