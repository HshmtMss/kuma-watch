import { NextResponse } from "next/server";
import type { WeatherSnapshot } from "@/lib/types";

const UPSTREAM = "https://api.open-meteo.com/v1/forecast";
const CACHE_SECONDS = 900;

type OpenMeteoResponse = {
  current?: {
    temperature_2m?: number;
    precipitation?: number;
    weather_code?: number;
    time?: string;
  };
};

function parseFloatParam(value: string | null, min: number, max: number): number | null {
  if (!value) return null;
  const num = Number(value);
  if (!Number.isFinite(num) || num < min || num > max) return null;
  return num;
}

function roundForCache(value: number): number {
  return Math.round(value * 100) / 100;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = parseFloatParam(searchParams.get("lat"), -90, 90);
  const lon = parseFloatParam(searchParams.get("lon"), -180, 180);

  if (lat === null || lon === null) {
    return NextResponse.json(
      { error: "lat/lon が不正です。lat は [-90, 90]、lon は [-180, 180] の範囲で指定してください。" },
      { status: 400 },
    );
  }

  const roundedLat = roundForCache(lat);
  const roundedLon = roundForCache(lon);

  const url = new URL(UPSTREAM);
  url.searchParams.set("latitude", String(roundedLat));
  url.searchParams.set("longitude", String(roundedLon));
  url.searchParams.set("current", "temperature_2m,precipitation,weather_code");
  url.searchParams.set("timezone", "Asia/Tokyo");

  try {
    const upstream = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "気象データの取得に失敗しました", upstreamStatus: upstream.status },
        { status: 502 },
      );
    }

    const data = (await upstream.json()) as OpenMeteoResponse;
    const current = data.current;

    if (
      !current ||
      typeof current.temperature_2m !== "number" ||
      typeof current.precipitation !== "number" ||
      typeof current.weather_code !== "number"
    ) {
      return NextResponse.json(
        { error: "気象データの形式が予期と異なります" },
        { status: 502 },
      );
    }

    const snapshot: WeatherSnapshot = {
      tempC: current.temperature_2m,
      precipMm: current.precipitation,
      weatherCode: current.weather_code,
      fetchedAt: current.time ?? new Date().toISOString(),
      lat: roundedLat,
      lon: roundedLon,
    };

    return NextResponse.json(snapshot, {
      headers: {
        "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "気象データ取得時に予期しないエラーが発生しました" },
      { status: 500 },
    );
  }
}
