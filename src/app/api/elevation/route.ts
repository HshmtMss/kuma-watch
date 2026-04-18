import { NextResponse } from "next/server";

const UPSTREAM =
  "https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php";
const CACHE_SECONDS = 60 * 60 * 24 * 30;

export type ElevationResponse = {
  lat: number;
  lon: number;
  elevationM: number | null;
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

  const url = new URL(UPSTREAM);
  url.searchParams.set("lon", lon.toFixed(5));
  url.searchParams.set("lat", lat.toFixed(5));
  url.searchParams.set("outtype", "JSON");

  try {
    const upstream = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
    });
    if (!upstream.ok) {
      return NextResponse.json(
        { error: "標高取得に失敗しました", upstreamStatus: upstream.status },
        { status: 502 },
      );
    }
    const data = (await upstream.json()) as GsiPayload;
    const elev =
      typeof data.elevation === "number"
        ? data.elevation
        : typeof data.elevation === "string"
          ? Number(data.elevation)
          : null;
    const safe: ElevationResponse = {
      lat,
      lon,
      elevationM:
        elev != null && Number.isFinite(elev) && elev > -500 && elev < 4000
          ? elev
          : null,
      source: data.hsrc,
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
