import { NextResponse } from "next/server";

const UPSTREAM =
  "https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php";
const CACHE_SECONDS = 60 * 60 * 24 * 30;

export type ElevationResponse = {
  lat: number;
  lon: number;
  elevationM: number | null;
  slopeDeg: number | null;
  source?: string;
};

type GsiPayload = {
  elevation?: number | string;
  hsrc?: string;
};

function parseFloatParam(v: string | null, min: number, max: number): number | null {
  if (!v) return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < min || n > max) return null;
  return n;
}

async function fetchGsiElevation(lat: number, lon: number): Promise<{ elev: number | null; source?: string }> {
  try {
    const url = new URL(UPSTREAM);
    url.searchParams.set("lon", lon.toFixed(5));
    url.searchParams.set("lat", lat.toFixed(5));
    url.searchParams.set("outtype", "JSON");
    const r = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
    });
    if (!r.ok) return { elev: null };
    const data = (await r.json()) as GsiPayload;
    const elev =
      typeof data.elevation === "number"
        ? data.elevation
        : typeof data.elevation === "string"
          ? Number(data.elevation)
          : null;
    const safe =
      elev != null && Number.isFinite(elev) && elev > -500 && elev < 4000
        ? elev
        : null;
    return { elev: safe, source: data.hsrc };
  } catch {
    return { elev: null };
  }
}

async function computeSlopeDeg(lat: number, lon: number): Promise<number | null> {
  const offset = 0.005; // ~500m
  const latMeters = offset * 111000;
  const lonMeters = offset * 111000 * Math.cos((lat * Math.PI) / 180);

  const [n, s, e, w] = await Promise.all([
    fetchGsiElevation(lat + offset, lon),
    fetchGsiElevation(lat - offset, lon),
    fetchGsiElevation(lat, lon + offset),
    fetchGsiElevation(lat, lon - offset),
  ]);

  if (n.elev == null || s.elev == null || e.elev == null || w.elev == null) {
    return null;
  }

  const gradNS = Math.abs(n.elev - s.elev) / (2 * latMeters);
  const gradEW = Math.abs(e.elev - w.elev) / (2 * lonMeters);
  const gradMag = Math.sqrt(gradNS * gradNS + gradEW * gradEW);
  const deg = Math.atan(gradMag) * (180 / Math.PI);
  return Math.round(deg * 10) / 10;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = parseFloatParam(searchParams.get("lat"), -90, 90);
  const lon = parseFloatParam(searchParams.get("lon"), -180, 180);

  if (lat === null || lon === null) {
    return NextResponse.json(
      { error: "lat/lon が不正です" },
      { status: 400 },
    );
  }

  try {
    const [center, slope] = await Promise.all([
      fetchGsiElevation(lat, lon),
      computeSlopeDeg(lat, lon),
    ]);
    const safe: ElevationResponse = {
      lat,
      lon,
      elevationM: center.elev,
      slopeDeg: slope,
      source: center.source,
    };
    return NextResponse.json(safe, {
      headers: {
        "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}, immutable`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 },
    );
  }
}
