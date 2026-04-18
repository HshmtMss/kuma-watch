"use client";

import { useCallback, useEffect, useState } from "react";
import type {
  MeshData,
  ScoreBreakdown,
  WeatherSnapshot,
} from "@/lib/types";
import {
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
  computeScore,
  lunarPhase,
} from "@/lib/score";
import { latLonToMeshCode, haversineKm } from "@/lib/mesh";
import { loadMeshes, findMeshByCode } from "@/lib/mesh-data";
import { weatherCodeEmoji, weatherCodeLabel } from "@/lib/weather";
import type { KumaRecord } from "@/app/api/kuma/route";
import {
  findMunicipalityByPrefCode,
  findMunicipalityByPrefName,
  type MunicipalEntry,
} from "@/data/municipalities";
import type { GeocodeHit } from "@/app/api/geocode/route";
import MunicipalCard from "@/components/MunicipalCard";
import RiskCharts from "@/components/RiskCharts";
import AskBox from "@/components/AskBox";

export type LocationSource = "gps" | "tap";
export type SelectedLocation = {
  lat: number;
  lon: number;
  source: LocationSource;
};

type State =
  | { kind: "idle" }
  | { kind: "loading"; stage: string }
  | { kind: "error"; message: string }
  | {
      kind: "ready";
      lat: number;
      lon: number;
      source: LocationSource;
      meshCode: string;
      mesh: MeshData | null;
      weather: WeatherSnapshot | null;
      breakdown: ScoreBreakdown;
      municipality?: MunicipalEntry;
      placeName?: string;
      nearbyWeightedCount: number;
      nearbySightings: number;
      nearbyRadiusKm: number;
    };

const NEARBY_RADIUS_KM = 10;
const NEARBY_DECAY_KM = 5;

async function fetchNearbyWeighted(
  lat: number,
  lon: number,
  radiusKm: number = NEARBY_RADIUS_KM,
): Promise<{ count: number; weighted: number }> {
  try {
    const r = await fetch("/api/kuma");
    if (!r.ok) return { count: 0, weighted: 0 };
    const data = (await r.json()) as { records?: KumaRecord[] };
    const recs = data.records ?? [];
    let count = 0;
    let weighted = 0;
    for (const s of recs) {
      const d = haversineKm(lat, lon, s.lat, s.lon);
      if (d > radiusKm) continue;
      count += 1;
      weighted += Math.exp(-d / NEARBY_DECAY_KM);
    }
    return { count, weighted };
  } catch {
    return { count: 0, weighted: 0 };
  }
}

async function reverseGeocode(
  lat: number,
  lon: number,
): Promise<GeocodeHit | null> {
  try {
    const r = await fetch(
      `/api/geocode?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}&v=2`,
    );
    if (!r.ok) return null;
    const data = (await r.json()) as { result?: GeocodeHit };
    return data.result ?? null;
  } catch {
    return null;
  }
}

async function fetchWeather(
  lat: number,
  lon: number,
): Promise<WeatherSnapshot | null> {
  try {
    const res = await fetch(
      `/api/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}`,
    );
    if (!res.ok) return null;
    return (await res.json()) as WeatherSnapshot;
  } catch {
    return null;
  }
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("ブラウザが位置情報に対応していません"));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 60000,
    });
  });
}

type Props = {
  location: SelectedLocation | null;
  onPickGps: (loc: SelectedLocation) => void;
  onClear: () => void;
};

export default function RiskPanel({ location, onPickGps, onClear }: Props) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [expanded, setExpanded] = useState(false);

  const evaluate = useCallback(async (loc: SelectedLocation) => {
    try {
      setState({ kind: "loading", stage: "メッシュを特定中" });
      const meshCode = latLonToMeshCode(loc.lat, loc.lon);
      if (!meshCode) {
        setState({
          kind: "error",
          message: "この位置はサービス対象範囲外です（日本域外）",
        });
        return;
      }

      setState({ kind: "loading", stage: "データを取得中" });
      const [meshes, weather, rev, nearby] = await Promise.all([
        loadMeshes(),
        fetchWeather(loc.lat, loc.lon),
        reverseGeocode(loc.lat, loc.lon),
        fetchNearbyWeighted(loc.lat, loc.lon),
      ]);
      const entry = findMeshByCode(meshes, meshCode);
      const mesh: MeshData | null = entry
        ? {
            meshCode: entry.m,
            second: entry.s,
            sixth: entry.x,
            latest: entry.l,
            latestSingle: entry.ls,
          }
        : null;

      const breakdown = computeScore(mesh, new Date(), weather, {
        nearbyWeightedCount: nearby.weighted,
        nearbySightings: nearby.count,
        nearbyRadiusKm: NEARBY_RADIUS_KM,
        prefCode: rev?.prefCode,
      });

      const municipality =
        findMunicipalityByPrefCode(rev?.prefCode) ??
        findMunicipalityByPrefName(rev?.prefecture);
      const placeName = rev
        ? [rev.prefecture, rev.city].filter(Boolean).join(" ")
        : undefined;

      setState({
        kind: "ready",
        lat: loc.lat,
        lon: loc.lon,
        source: loc.source,
        meshCode,
        mesh,
        weather,
        breakdown,
        municipality,
        placeName,
        nearbyWeightedCount: nearby.weighted,
        nearbySightings: nearby.count,
        nearbyRadiusKm: NEARBY_RADIUS_KM,
      });
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "評価に失敗しました",
      });
    }
  }, []);

  useEffect(() => {
    if (!location) {
      setState({ kind: "idle" });
      return;
    }
    void evaluate(location);
  }, [location, evaluate]);

  useEffect(() => {
    if (state.kind === "ready" || state.kind === "error") {
      setExpanded(true);
    }
  }, [state.kind]);

  const onUseGps = useCallback(async () => {
    setState({ kind: "loading", stage: "位置情報を取得中" });
    try {
      const pos = await getPosition();
      onPickGps({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        source: "gps",
      });
    } catch (err) {
      const msg =
        err instanceof GeolocationPositionError
          ? err.code === err.PERMISSION_DENIED
            ? "位置情報の利用が許可されていません"
            : "位置情報を取得できませんでした"
          : err instanceof Error
            ? err.message
            : "位置情報を取得できませんでした";
      setState({ kind: "error", message: msg });
    }
  }, [onPickGps]);

  const badge =
    state.kind === "ready" ? (
      <span
        className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
        style={{ background: RISK_LEVEL_COLOR[state.breakdown.level] }}
      >
        {RISK_LEVEL_LABEL[state.breakdown.level]} {state.breakdown.score}
      </span>
    ) : null;

  const handleHeaderClick = () => {
    if (state.kind === "idle") {
      void onUseGps();
    } else {
      setExpanded((v) => !v);
    }
  };

  return (
    <>
      {expanded && (
        <button
          aria-label="パネルを閉じる"
          onClick={() => setExpanded(false)}
          className="pointer-events-auto absolute inset-0 z-[1050] bg-black/20"
        />
      )}

      <div
        className={`pointer-events-auto absolute inset-x-0 bottom-0 z-[1100] transition-transform duration-200 ease-out sm:left-3 sm:right-auto sm:top-3 sm:bottom-auto sm:w-[360px]`}
      >
        <div className="mx-auto w-full max-w-[640px] rounded-t-2xl border border-black/8 bg-white shadow-xl sm:rounded-2xl">
          <div className="flex items-center gap-2 px-3 py-2.5">
            <button
              onClick={handleHeaderClick}
              className="flex min-w-0 flex-1 items-center gap-3 text-left"
              aria-expanded={expanded}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white">
                📍
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-gray-900">
                  {state.kind === "ready" && state.placeName
                    ? state.placeName
                    : state.kind === "ready" && state.source === "tap"
                      ? "選択地点の危険度"
                      : "現在地の危険度"}
                </div>
                <div className="truncate text-xs text-gray-500">
                  {state.kind === "idle" &&
                    "タップして GPS で評価／地図タップでも評価できます"}
                  {state.kind === "loading" && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                      {state.stage}...
                    </span>
                  )}
                  {state.kind === "error" && (
                    <span className="text-red-600">⚠️ {state.message}</span>
                  )}
                  {state.kind === "ready" && (
                    <>
                      {state.mesh
                        ? `スコア ${state.breakdown.score} / 100`
                        : state.nearbySightings > 0
                          ? `緩衝域（近隣 ${state.nearbyRadiusKm}km に ${state.nearbySightings} 件）`
                          : `スコア ${state.breakdown.score} / 100 ・ データ不足`}
                    </>
                  )}
                </div>
              </div>
              {badge}
            </button>
            {(state.kind === "ready" || state.kind === "error") && (
              <button
                onClick={() => {
                  setExpanded(false);
                  onClear();
                }}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                aria-label="クリア"
              >
                ×
              </button>
            )}
          </div>

          {expanded && state.kind === "ready" && (
            <RiskDetails state={state} onReload={onUseGps} />
          )}
          {expanded && state.kind === "error" && (
            <div className="border-t border-gray-100 px-4 py-3">
              <button
                onClick={onUseGps}
                className="rounded-full bg-amber-600 px-4 py-2 text-xs font-medium text-white hover:bg-amber-700"
              >
                再試行（GPS）
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function RiskDetails({
  state,
  onReload,
}: {
  state: Extract<State, { kind: "ready" }>;
  onReload: () => void;
}) {
  const { breakdown, weather, mesh, placeName, nearbySightings, nearbyRadiusKm, nearbyWeightedCount } = state;
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth() + 1;
  const weatherLabel = weather
    ? `${weatherCodeEmoji(weather.weatherCode)} ${weather.tempC.toFixed(1)}°C`
    : "気象情報なし";

  const bearSpecies = state.municipality?.bearSpecies.includes("higuma")
    ? "ヒグマ"
    : state.municipality
      ? "ツキノワグマ"
      : undefined;

  const isInsufficient = !mesh && (nearbySightings ?? 0) === 0;
  const isBuffer = !mesh && (nearbySightings ?? 0) > 0;

  const askContext = {
    place: placeName,
    prefecture: state.municipality?.prefNameJa,
    score: breakdown.score,
    level: breakdown.level,
    hour,
    month,
    weather: weather
      ? {
          tempC: weather.tempC,
          precipMm: weather.precipMm,
          label: weatherCodeLabel(weather.weatherCode),
        }
      : undefined,
    bearSpecies,
    habitatInside: !!mesh,
  };

  return (
    <div className="max-h-[70vh] space-y-4 overflow-y-auto border-t border-gray-100 px-4 py-3 text-sm">
      <div className="flex items-center justify-between text-[11px] text-gray-500">
        <span>{weatherLabel}</span>
        <span>
          {hour}時 / {month}月
        </span>
      </div>

      {isInsufficient && (
        <div className="rounded-xl bg-gray-50 p-3 text-xs leading-relaxed text-gray-700 ring-1 ring-gray-200">
          <span className="font-semibold text-gray-900">ℹ️ データ不足:</span>{" "}
          環境省の生息域調査に記録がなく、近隣 {nearbyRadiusKm}km 以内でも直近の目撃情報を確認できていません。
          <strong className="mx-1 text-gray-900">「安全」ではなく 5 段階のうち「低い」として暫定表示</strong>
          しています。山間部では基本対策を推奨します。
        </div>
      )}
      {isBuffer && (
        <div className="rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-200">
          <span className="font-semibold">🟠 緩衝域:</span>{" "}
          このメッシュは環境省の生息域調査には含まれていませんが、
          近隣 {nearbyRadiusKm}km 以内で {nearbySightings} 件の直近目撃情報があります。
        </div>
      )}
      <RiskCharts
        mesh={mesh}
        weather={weather}
        baseDate={now}
        nearbyWeightedCount={nearbyWeightedCount}
        nearbySightings={nearbySightings}
        nearbyRadiusKm={nearbyRadiusKm}
        prefCode={state.municipality?.prefCode}
      />

      <div className="border-t border-gray-100 pt-4">
        <MunicipalCard entry={state.municipality} />
      </div>

      <div className="border-t border-gray-100 pt-4">
        <AskBox context={askContext} />
      </div>

      <details className="rounded-xl bg-gray-50 px-3 py-2 text-xs text-gray-700">
        <summary className="cursor-pointer font-semibold text-gray-800">
          スコアの根拠を詳しく見る
        </summary>
        <ul className="mt-2 space-y-1">
          {breakdown.explanation.map((line, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </details>

      <div className="flex items-center gap-2">
        <button
          onClick={onReload}
          className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-medium text-gray-700 hover:bg-gray-200"
        >
          📍 現在地で再計算
        </button>
      </div>

      <p className="text-[10px] leading-relaxed text-gray-400">
        スコアは参考値です。実際のクマの行動は個体差・環境で変わります。
        必ず自治体の公式情報と合わせてご確認ください。
      </p>
    </div>
  );
}
