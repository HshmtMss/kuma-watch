import { NextResponse } from "next/server";
import type { WeatherSnapshot } from "@/lib/types";

const UPSTREAM = "https://api.open-meteo.com/v1/forecast";
const CACHE_SECONDS = 900;
// 上流タイムアウト。Open-Meteo は通常 200ms 以下で返るが、混雑時に詰まると
// Vercel Function 実行時間を浪費して 5xx 連鎖を引き起こす。5 秒で打ち切る。
const UPSTREAM_TIMEOUT_MS = 5000;
// 上流失敗時の degraded レスポンスのキャッシュ秒数。クライアントが連投して
// 上流に追い打ちをかけるのを防ぐため、短めだが 0 ではない値を入れる。
const FAILURE_CACHE_SECONDS_DEFAULT = 60;
// rate limit 検知時はもう少し長くキャッシュして上流を休ませる。
const FAILURE_CACHE_SECONDS_RATELIMIT = 120;

/** 上流失敗時の degraded レスポンス。HTTP 200 + { available: false } を返すことで、
 *  クライアントのリトライ連鎖 (= 上流への追い打ち) を止める。クライアントは
 *  `tempC` フィールドの有無で表示可否を判定する。 */
function unavailable(reason: string, cacheSeconds = FAILURE_CACHE_SECONDS_DEFAULT) {
  return NextResponse.json(
    { available: false, reason },
    {
      status: 200,
      headers: {
        "Cache-Control": `public, max-age=${cacheSeconds}, s-maxage=${cacheSeconds}`,
      },
    },
  );
}

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
    // AbortSignal.timeout で 5 秒 hard cut。Lambda 実行時間の浪費を防ぐ。
    const upstream = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });

    if (!upstream.ok) {
      // 上流ステータス別に degraded 応答 + キャッシュ秒数を切り分ける。
      // 502/500 を返してしまうとクライアントがリトライして上流に追い打ちを
      // かけるため、ここでは 200 + { available: false } で連鎖を断つ。
      if (upstream.status === 429) {
        return unavailable("upstream_rate_limited", FAILURE_CACHE_SECONDS_RATELIMIT);
      }
      if (upstream.status === 404) {
        return unavailable("upstream_not_found");
      }
      if (upstream.status >= 500) {
        return unavailable("upstream_error");
      }
      return unavailable(`upstream_${upstream.status}`);
    }

    const data = (await upstream.json()) as OpenMeteoResponse;
    const current = data.current;

    if (
      !current ||
      typeof current.temperature_2m !== "number" ||
      typeof current.precipitation !== "number" ||
      typeof current.weather_code !== "number"
    ) {
      return unavailable("upstream_bad_data");
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
  } catch (err) {
    // タイムアウト・DNS 失敗・ネットワーク断などはすべて degraded 応答。
    // 上流不達でも 5xx を返さずクライアントのリトライ連鎖を止める。
    const reason =
      err instanceof Error && err.name === "TimeoutError"
        ? "upstream_timeout"
        : "upstream_unreachable";
    return unavailable(reason);
  }
}
