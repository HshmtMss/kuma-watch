import { NextResponse } from "next/server";

const UPSTREAM = "https://overpass-api.de/api/interpreter";
const CACHE_SECONDS = 60 * 60 * 24 * 7;
const RADIUS_METERS = 300;

export type ForestType = "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none";

export type ForestResponse = {
  lat: number;
  lon: number;
  isForest: boolean;
  forestType: ForestType;
  coverTags?: Record<string, string>;
};

function parseFloatParam(v: string | null, min: number, max: number): number | null {
  if (!v) return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < min || n > max) return null;
  return n;
}

function parseForestType(tags: Record<string, string> | undefined): ForestType {
  if (!tags) return "unknown";
  const leaf = tags.leaf_type;
  if (leaf === "needleleaved") return "needleleaved";
  if (leaf === "broadleaved") return "broadleaved";
  if (leaf === "mixed") return "mixed";
  return "unknown";
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = parseFloatParam(searchParams.get("lat"), -90, 90);
  const lon = parseFloatParam(searchParams.get("lon"), -180, 180);

  if (lat === null || lon === null) {
    return NextResponse.json({ error: "lat/lon が不正です" }, { status: 400 });
  }

  const query = `[out:json][timeout:8];
(
  way["landuse"="forest"](around:${RADIUS_METERS},${lat},${lon});
  way["natural"="wood"](around:${RADIUS_METERS},${lat},${lon});
  relation["landuse"="forest"](around:${RADIUS_METERS},${lat},${lon});
  relation["natural"="wood"](around:${RADIUS_METERS},${lat},${lon});
);
out tags 1;`;

  try {
    const r = await fetch(UPSTREAM, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
      },
      body: "data=" + encodeURIComponent(query),
      next: { revalidate: CACHE_SECONDS },
    });

    if (!r.ok) {
      const fallback: ForestResponse = {
        lat,
        lon,
        isForest: false,
        forestType: "unknown",
      };
      return NextResponse.json(fallback, {
        headers: { "Cache-Control": `public, max-age=600` },
      });
    }

    const data = (await r.json()) as {
      elements?: { tags?: Record<string, string> }[];
    };
    const elements = data.elements ?? [];

    if (elements.length === 0) {
      const resp: ForestResponse = {
        lat,
        lon,
        isForest: false,
        forestType: "none",
      };
      return NextResponse.json(resp, {
        headers: {
          "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
        },
      });
    }

    const tags = elements[0]?.tags;
    const resp: ForestResponse = {
      lat,
      lon,
      isForest: true,
      forestType: parseForestType(tags),
      coverTags: tags,
    };
    return NextResponse.json(resp, {
      headers: {
        "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
      },
    });
  } catch {
    const fallback: ForestResponse = {
      lat,
      lon,
      isForest: false,
      forestType: "unknown",
    };
    return NextResponse.json(fallback, {
      headers: { "Cache-Control": `public, max-age=600` },
    });
  }
}
