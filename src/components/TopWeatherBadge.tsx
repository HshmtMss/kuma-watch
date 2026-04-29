"use client";

import { useEffect, useState } from "react";
import type { WeatherSnapshot } from "@/lib/types";
import { weatherCodeEmoji, weatherCodeLabel } from "@/lib/weather";

type Props = {
  lat: number | null;
  lon: number | null;
};

export default function TopWeatherBadge({ lat, lon }: Props) {
  const [weather, setWeather] = useState<WeatherSnapshot | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (lat === null || lon === null) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag before external fetch
    setLoading(true);
    fetch(`/api/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}`)
      .then((r) => (r.ok ? (r.json() as Promise<WeatherSnapshot>) : null))
      .then((data) => {
        if (!cancelled && data) setWeather(data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [lat, lon]);

  // location が解除された場合は表示しない (古い weather が残っても render しない)
  if (lat === null || lon === null) return null;
  if (!weather && !loading) return null;

  return (
    <div
      className="pointer-events-none absolute right-3 top-3 z-[940] flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-sm font-medium text-gray-700 shadow backdrop-blur sm:text-xs"
      title={
        weather
          ? `${weatherCodeLabel(weather.weatherCode)} / 気温 ${weather.tempC.toFixed(1)}℃ / 降水 ${weather.precipMm}mm`
          : "気象情報を取得中"
      }
    >
      {weather ? (
        <>
          <span aria-hidden>{weatherCodeEmoji(weather.weatherCode)}</span>
          <span className="tabular-nums">{Math.round(weather.tempC)}°C</span>
          {weather.precipMm > 0 && (
            <span className="text-blue-600">
              💧{weather.precipMm.toFixed(1)}
            </span>
          )}
        </>
      ) : (
        <span className="flex items-center gap-1.5 text-gray-500">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
          ...
        </span>
      )}
    </div>
  );
}
