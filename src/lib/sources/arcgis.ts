import type { DataSourceEntry } from "@/data/data-sources";
import { epochToIsoDate, parseIsoLike, parseWarekiDate } from "./date-utils";
import { inJapanBounds, type UnifiedSighting } from "./types";

const PAGE_SIZE = 2000;
const HARD_LIMIT = 20000;
const CACHE_TTL_MS = 60 * 60 * 1000;

type ArcGisFeature = {
  geometry?: { x?: number; y?: number };
  attributes?: Record<string, unknown>;
};

type ArcGisQueryResponse = {
  features?: ArcGisFeature[];
  exceededTransferLimit?: boolean;
  error?: { code?: number; message?: string };
};

const memo = new Map<string, { at: number; data: UnifiedSighting[] }>();

function parseDateValue(v: unknown, format: "epoch-ms" | "wareki" | "iso" | undefined): string {
  if (format === "wareki") {
    if (typeof v !== "string") return "";
    return parseWarekiDate(v) ?? parseIsoLike(v) ?? "";
  }
  if (format === "iso") {
    if (typeof v !== "string") return "";
    return parseIsoLike(v) ?? "";
  }
  return epochToIsoDate(v);
}

function cleanString(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.trim();
}

function cleanNumber(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

async function fetchPage(
  baseUrl: string,
  offset: number,
): Promise<ArcGisQueryResponse | null> {
  const url = new URL(baseUrl + "/query");
  url.searchParams.set("where", "1=1");
  url.searchParams.set("outFields", "*");
  url.searchParams.set("returnGeometry", "true");
  url.searchParams.set("outSR", "4326");
  url.searchParams.set("resultOffset", String(offset));
  url.searchParams.set("resultRecordCount", String(PAGE_SIZE));
  url.searchParams.set("orderByFields", "objectid ASC");
  url.searchParams.set("f", "json");
  try {
    const r = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: 3600 },
    });
    if (!r.ok) return null;
    return (await r.json()) as ArcGisQueryResponse;
  } catch {
    return null;
  }
}

export async function fetchArcGisSightings(
  entry: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  if (!entry.arcgis) return [];
  const now = Date.now();
  const cached = memo.get(entry.id);
  if (cached && now - cached.at < CACHE_TTL_MS) return cached.data;

  const { featureServerUrl, mappings, dateFormat } = entry.arcgis;
  const sightings: UnifiedSighting[] = [];
  let offset = 0;

  while (sightings.length < HARD_LIMIT) {
    const page = await fetchPage(featureServerUrl, offset);
    if (!page || page.error) break;
    const features = page.features ?? [];
    if (features.length === 0) break;

    for (const f of features) {
      const geom = f.geometry;
      const attrs = f.attributes ?? {};
      if (
        !geom ||
        typeof geom.x !== "number" ||
        typeof geom.y !== "number" ||
        !inJapanBounds(geom.y, geom.x)
      ) {
        continue;
      }
      const dateVal = mappings.date ? attrs[mappings.date] : undefined;
      const date = parseDateValue(dateVal, dateFormat);
      if (!date) continue;

      const objectId = attrs.objectid ?? attrs.OBJECTID ?? attrs.ObjectId;
      const city = mappings.city ? cleanString(attrs[mappings.city]) : "";
      const section = mappings.section
        ? cleanString(attrs[mappings.section])
        : "";
      const situation = mappings.situation
        ? cleanString(attrs[mappings.situation])
        : "";
      const headCount = mappings.headCount
        ? cleanNumber(attrs[mappings.headCount]) ?? 1
        : 1;

      sightings.push({
        id: `${entry.id}-${objectId ?? offset + sightings.length}`,
        source: entry.id,
        sourceKind: "arcgis",
        lat: geom.y,
        lon: geom.x,
        date,
        prefectureName: entry.regionLabel.split(" ")[0] ?? entry.regionLabel,
        cityName: city,
        sectionName: section !== city ? section : "",
        comment: situation,
        headCount,
      });
    }

    if (!page.exceededTransferLimit) break;
    offset += features.length;
  }

  memo.set(entry.id, { at: now, data: sightings });
  return sightings;
}
