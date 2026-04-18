import { NextResponse } from "next/server";
import type { WeatherSnapshot } from "@/lib/types";

const UPSTREAM = "https://api.open-meteo.com/v1/forecast";
const CACHE_SECONDS = 900;

type OpenMeteoResponse = {
  current?: {
    temperature_2m?: number;
    precipitation?: number;
    weather_code?: number;
    surface_pressure?: number;
    time?: string;
  };
  hourly?: {
    time?: string[];
    temperature_2m?: number[];
    surface_pressure?: number[];
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

function findValue24hAgo(
  times: string[] | undefined,
  values: number[] | undefined,
  currentTimeIso: string | undefined,
): number | null {
  if (!times || !values || !currentTimeIso) return null;
  const now = new Date(currentTimeIso).getTime();
  if (!Number.isFinite(now)) return null;
  const target = now - 24 * 3600 * 1000;
  let bestIdx = -1;
  let bestDelta = Infinity;
  for (let i = 0; i < times.length; i++) {
    const t = new Date(times[i]).getTime();
    if (!Number.isFinite(t)) continue;
    const delta = Math.abs(t - target);
    if (delta < bestDelta) {
      bestDelta = delta;
      bestIdx = i;
    }
  }
  if (bestIdx < 0) return null;
  // Only accept within 2 hours of target
  if (bestDelta > 2 * 3600 * 1000) return null;
  const v = values[bestIdx];
  return typeof v === "number" && Number.isFinite(v) ? v : null;
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
  url.searchParams.set(
    "current",
    "temperature_2m,precipitation,weather_code,surface_pressure",
  );
  url.searchParams.set("hourly", "temperature_2m,surface_pressure");
  url.searchParams.set("past_days", "1");
  url.searchParams.set("forecast_days", "1");
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

    const currentPressure =
      typeof current.surface_pressure === "number" ? current.surface_pressure : null;
    const temp24hAgo = findValue24hAgo(
      data.hourly?.time,
      data.hourly?.temperature_2m,
      current.time,
    );
    const pressure24hAgo = findValue24hAgo(
      data.hourly?.time,
      data.hourly?.surface_pressure,
      current.time,
    );

    const tempChange24h =
      temp24hAgo != null ? Math.round((current.temperature_2m - temp24hAgo) * 10) / 10 : null;
    const pressureChange24h =
      currentPressure != null && pressure24hAgo != null
        ? Math.round((currentPressure - pressure24hAgo) * 10) / 10
        : null;

    const snapshot: WeatherSnapshot = {
      tempC: current.temperature_2m,
      precipMm: current.precipitation,
      weatherCode: current.weather_code,
      pressureHPa: currentPressure,
      tempChange24h,
      pressureChange24h,
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
