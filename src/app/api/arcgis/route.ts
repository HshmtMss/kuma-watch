import { NextResponse } from "next/server";
import {
  findSourceById,
  type ArcGisFieldMappings,
  type DataSourceEntry,
} from "@/data/data-sources";

const CACHE_SECONDS = 3600;
const DEFAULT_LIMIT = 5000;
const MAX_LIMIT = 20000;
const PAGE_SIZE = 2000;

export type ArcGisSighting = {
  id: string;
  sourceId: string;
  prefCode: string;
  prefName: string;
  lat: number;
  lon: number;
  date: string;
  city?: string;
  section?: string;
  situation?: string;
  headCount?: number;
  timeOfDay?: string;
};

type ArcGisFeature = {
  geometry?: { x?: number; y?: number };
  attributes?: Record<string, unknown>;
};

type ArcGisQueryResponse = {
  features?: ArcGisFeature[];
  exceededTransferLimit?: boolean;
  error?: { code?: number; message?: string };
};

function epochToIso(v: unknown): string {
  if (typeof v !== "number" || !Number.isFinite(v)) return "";
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().split("T")[0];
}

function cleanString(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  return s.length ? s : undefined;
}

function cleanNumber(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

function normalizeFeature(
  feature: ArcGisFeature,
  entry: DataSourceEntry,
  mappings: ArcGisFieldMappings,
): ArcGisSighting | null {
  const geom = feature.geometry;
  const attrs = feature.attributes ?? {};
  if (
    !geom ||
    typeof geom.x !== "number" ||
    typeof geom.y !== "number" ||
    !Number.isFinite(geom.x) ||
    !Number.isFinite(geom.y)
  ) {
    return null;
  }

  const dateVal = mappings.date ? attrs[mappings.date] : undefined;
  const date = epochToIso(dateVal);
  if (!date) return null;

  const objectId = attrs.objectid ?? attrs.OBJECTID ?? attrs.ObjectId;
  const id = `${entry.id}-${objectId ?? `${geom.y.toFixed(5)}-${geom.x.toFixed(5)}-${date}`}`;

  return {
    id,
    sourceId: entry.id,
    prefCode: entry.prefCode,
    prefName: entry.regionLabel.split(" ")[0] ?? entry.regionLabel,
    lat: geom.y,
    lon: geom.x,
    date,
    city: mappings.city ? cleanString(attrs[mappings.city]) : undefined,
    section: mappings.section ? cleanString(attrs[mappings.section]) : undefined,
    situation: mappings.situation ? cleanString(attrs[mappings.situation]) : undefined,
    headCount: mappings.headCount ? cleanNumber(attrs[mappings.headCount]) : undefined,
    timeOfDay: mappings.timeOfDay ? cleanString(attrs[mappings.timeOfDay]) : undefined,
  };
}

async function fetchPage(
  baseUrl: string,
  offset: number,
  pageSize: number,
): Promise<ArcGisQueryResponse | null> {
  const url = new URL(baseUrl + "/query");
  url.searchParams.set("where", "1=1");
  url.searchParams.set("outFields", "*");
  url.searchParams.set("returnGeometry", "true");
  url.searchParams.set("outSR", "4326");
  url.searchParams.set("resultOffset", String(offset));
  url.searchParams.set("resultRecordCount", String(pageSize));
  url.searchParams.set("orderByFields", "objectid ASC");
  url.searchParams.set("f", "json");
  try {
    const r = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
    });
    if (!r.ok) return null;
    return (await r.json()) as ArcGisQueryResponse;
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sourceId = searchParams.get("sourceId");
  const limitParam = searchParams.get("limit");
  const limit = limitParam
    ? Math.min(MAX_LIMIT, Math.max(1, Number(limitParam) || DEFAULT_LIMIT))
    : DEFAULT_LIMIT;

  if (!sourceId) {
    return NextResponse.json(
      { error: "sourceId が必要です" },
      { status: 400 },
    );
  }

  const entry = findSourceById(sourceId);
  if (!entry || !entry.arcgis) {
    return NextResponse.json(
      { error: "このソースには ArcGIS 設定がありません" },
      { status: 404 },
    );
  }

  const { featureServerUrl, mappings } = entry.arcgis;
  const sightings: ArcGisSighting[] = [];
  let offset = 0;

  while (sightings.length < limit) {
    const pageSize = Math.min(PAGE_SIZE, limit - sightings.length);
    const page = await fetchPage(featureServerUrl, offset, pageSize);
    if (!page || page.error) {
      if (sightings.length === 0) {
        return NextResponse.json(
          { error: "FeatureServer からの取得に失敗しました" },
          { status: 502 },
        );
      }
      break;
    }
    const features = page.features ?? [];
    if (features.length === 0) break;

    for (const f of features) {
      const s = normalizeFeature(f, entry, mappings);
      if (s) sightings.push(s);
    }

    if (!page.exceededTransferLimit) break;
    offset += features.length;
  }

  return NextResponse.json(
    {
      sourceId,
      regionLabel: entry.regionLabel,
      fetchedAt: new Date().toISOString(),
      featureServerUrl,
      total: sightings.length,
      sightings,
    },
    {
      headers: {
        "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
      },
    },
  );
}
