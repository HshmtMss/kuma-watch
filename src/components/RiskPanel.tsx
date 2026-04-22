"use client";

import Link from "next/link";
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
import { findSourceByPrefCode } from "@/data/data-sources";
import type { GeocodeHit } from "@/app/api/geocode/route";
import MunicipalNoticeBox from "@/components/MunicipalNoticeBox";
import MunicipalLinks from "@/components/MunicipalLinks";
import RiskCharts from "@/components/RiskCharts";
import AskBox from "@/components/AskBox";

export type LocationSource = "gps" | "tap";
export type SelectedLocation = {
  lat: number;
  lon: number;
  source: LocationSource;
};

type NearbyRecent = Pick<
  KumaRecord,
  "id" | "date" | "cityName" | "sectionName" | "comment" | "headCount"
> & { distanceKm: number };

function periodLabelOf(days: number | null): string {
  if (days === null) return "全期間";
  if (days >= 365) return "1年";
  if (days >= 90) return "3ヶ月";
  if (days >= 30) return "1ヶ月";
  return "1週間";
}

function cutoffDate(days: number | null): string | null {
  if (days === null) return null;
  return new Date(Date.now() - days * 86_400_000).toISOString().slice(0, 10);
}

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
      muniName?: string;
      nearbyWeightedCount: number;
      nearbySightings: number;
      nearbyRadiusKm: number;
      periodDays: number | null;
      periodNearbyCount: number;
      periodNearbyRecent: NearbyRecent[];
      elevationM: number | null;
      slopeDeg: number | null;
      isForest: boolean | null;
      forestType: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none" | null;
    };

const NEARBY_RADIUS_KM = 10;
const NEARBY_DECAY_KM = 5;

async function fetchElevation(
  lat: number,
  lon: number,
): Promise<{ elevationM: number | null; slopeDeg: number | null }> {
  try {
    const r = await fetch(
      `/api/elevation?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
    );
    if (!r.ok) return { elevationM: null, slopeDeg: null };
    const data = (await r.json()) as {
      elevationM?: number | null;
      slopeDeg?: number | null;
    };
    return {
      elevationM: typeof data.elevationM === "number" ? data.elevationM : null,
      slopeDeg: typeof data.slopeDeg === "number" ? data.slopeDeg : null,
    };
  } catch {
    return { elevationM: null, slopeDeg: null };
  }
}

type ForestApiResult = {
  isForest: boolean;
  forestType?: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none";
};

async function fetchForest(
  lat: number,
  lon: number,
): Promise<ForestApiResult | null> {
  try {
    const r = await fetch(
      `/api/forest?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
    );
    if (!r.ok) return null;
    return (await r.json()) as ForestApiResult;
  } catch {
    return null;
  }
}

async function fetchNearbyWeighted(
  lat: number,
  lon: number,
  periodDays: number | null,
  radiusKm: number = NEARBY_RADIUS_KM,
): Promise<{
  count: number;
  weighted: number;
  periodCount: number;
  periodRecent: NearbyRecent[];
}> {
  try {
    const r = await fetch("/api/kuma");
    if (!r.ok)
      return { count: 0, weighted: 0, periodCount: 0, periodRecent: [] };
    const data = (await r.json()) as { records?: KumaRecord[] };
    const recs = data.records ?? [];
    const cutoff = cutoffDate(periodDays);
    let count = 0;
    let weighted = 0;
    let periodCount = 0;
    const periodHits: NearbyRecent[] = [];
    for (const s of recs) {
      const d = haversineKm(lat, lon, s.lat, s.lon);
      if (d > radiusKm) continue;
      count += 1;
      weighted += Math.exp(-d / NEARBY_DECAY_KM);
      if (!cutoff || s.date >= cutoff) {
        periodCount += 1;
        periodHits.push({
          id: s.id,
          date: s.date,
          cityName: s.cityName,
          sectionName: s.sectionName,
          comment: s.comment,
          headCount: s.headCount,
          distanceKm: d,
        });
      }
    }
    periodHits.sort((a, b) => (a.date > b.date ? -1 : 1));
    return {
      count,
      weighted,
      periodCount,
      periodRecent: periodHits.slice(0, 5),
    };
  } catch {
    return { count: 0, weighted: 0, periodCount: 0, periodRecent: [] };
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
  periodDays: number | null;
  onPickGps: (loc: SelectedLocation) => void;
  onClear: () => void;
};

export default function RiskPanel({
  location,
  periodDays,
  onPickGps,
  onClear,
}: Props) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [expanded, setExpanded] = useState(false);

  const evaluate = useCallback(
    async (loc: SelectedLocation) => {
      try {
        setState({ kind: "loading", stage: "メッシュを特定中" });
        const meshCode = latLonToMeshCode(loc.lat, loc.lon);
        if (!meshCode) {
          setExpanded(true);
          setState({
            kind: "error",
            message: "この位置はサービス対象範囲外です（日本域外）",
          });
          return;
        }

        setState({ kind: "loading", stage: "データを取得中" });
        const [meshes, weather, rev, nearby, elevation, forest] =
          await Promise.all([
            loadMeshes(),
            fetchWeather(loc.lat, loc.lon),
            reverseGeocode(loc.lat, loc.lon),
            fetchNearbyWeighted(loc.lat, loc.lon, periodDays),
            fetchElevation(loc.lat, loc.lon),
            fetchForest(loc.lat, loc.lon),
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

      const dataSource = findSourceByPrefCode(rev?.prefCode ?? "");
      const breakdown = computeScore(mesh, new Date(), weather, {
        nearbyWeightedCount: nearby.weighted,
        nearbySightings: nearby.count,
        nearbyRadiusKm: NEARBY_RADIUS_KM,
        prefCode: rev?.prefCode,
        bearStatus: dataSource?.bearStatus ?? null,
        elevationM: elevation.elevationM,
        slopeDeg: elevation.slopeDeg,
        isForest: forest?.isForest ?? null,
        forestType: forest?.forestType ?? null,
      });

      const municipality =
        findMunicipalityByPrefCode(rev?.prefCode) ??
        findMunicipalityByPrefName(rev?.prefecture);
      const placeName = rev
        ? [rev.prefecture, rev.city].filter(Boolean).join(" ")
        : undefined;

      setExpanded(true);
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
        muniName: rev?.city,
        nearbyWeightedCount: nearby.weighted,
        nearbySightings: nearby.count,
        nearbyRadiusKm: NEARBY_RADIUS_KM,
        periodDays,
        periodNearbyCount: nearby.periodCount,
        periodNearbyRecent: nearby.periodRecent,
        elevationM: elevation.elevationM,
        slopeDeg: elevation.slopeDeg,
        isForest: forest?.isForest ?? null,
        forestType: forest?.forestType ?? null,
      });
    } catch (err) {
      setExpanded(true);
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "評価に失敗しました",
      });
    }
  }, [periodDays]);

  useEffect(() => {
    if (!location) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing internal state with parent prop clear
      setState({ kind: "idle" });
      return;
    }
    void evaluate(location);
  }, [location, evaluate]);

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
      setExpanded(true);
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
  const {
    breakdown,
    weather,
    mesh,
    placeName,
    nearbySightings,
    nearbyRadiusKm,
    nearbyWeightedCount,
    periodDays,
    periodNearbyCount,
    periodNearbyRecent,
  } = state;
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth() + 1;
  const weatherLabel = weather
    ? `${weatherCodeEmoji(weather.weatherCode)} ${weather.tempC.toFixed(1)}°C`
    : "気象情報なし";
  const periodLabel = periodLabelOf(periodDays);
  const placeQuery = new URLSearchParams({
    lat: state.lat.toFixed(5),
    lon: state.lon.toFixed(5),
  });
  if (placeName) placeQuery.set("name", placeName);

  const bearSpecies = state.municipality?.bearSpecies.includes("higuma")
    ? "ヒグマ"
    : state.municipality
      ? "ツキノワグマ"
      : undefined;

  const isInsufficient = !mesh && (nearbySightings ?? 0) === 0;
  const isBuffer = !mesh && (nearbySightings ?? 0) > 0;

  const askContext = {
    lat: state.lat,
    lon: state.lon,
    place: placeName,
    prefecture: state.municipality?.prefNameJa,
    prefCode: state.municipality?.prefCode,
    muniName: state.muniName,
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
    <div className="max-h-[75vh] overflow-y-auto border-t border-gray-100 text-sm">
      {/* 1. 件数 headline (常時) */}
      <section className="bg-amber-50/70 px-4 py-3">
        <div className="text-[10px] font-medium uppercase tracking-wider text-amber-700">
          {periodDays === null
            ? `半径 ${nearbyRadiusKm}km 以内の目撃`
            : `過去${periodLabel}・半径 ${nearbyRadiusKm}km 以内の目撃`}
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-gray-900">
            {periodNearbyCount.toLocaleString()}
          </span>
          <span className="text-sm text-gray-600">件</span>
          {periodDays !== null && nearbySightings > periodNearbyCount && (
            <span className="ml-auto text-[10px] text-gray-500">
              全期間では {nearbySightings.toLocaleString()} 件
            </span>
          )}
        </div>
        {(isInsufficient || isBuffer) && (
          <p className="mt-2 text-[11px] leading-relaxed text-amber-900">
            {isInsufficient &&
              "環境省の生息域調査に記録なし。近隣の公式目撃も未確認。山間部では基本対策を。"}
            {isBuffer &&
              `生息域外の緩衝域。近隣で ${nearbySightings} 件の公式目撃記録あり。`}
          </p>
        )}
      </section>

      {/* 2. 直近の目撃 3 件 (常時) */}
      {periodNearbyRecent.length > 0 && (
        <section className="border-t border-gray-100 px-4 py-3">
          <h3 className="mb-2 text-xs font-semibold text-gray-700">
            🕓 直近の目撃
          </h3>
          <ul className="space-y-1.5">
            {periodNearbyRecent.slice(0, 3).map((r) => (
              <li
                key={String(r.id)}
                className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700"
              >
                <div className="mb-0.5 flex items-center justify-between gap-2">
                  <span className="font-medium text-gray-900">{r.date}</span>
                  <span className="shrink-0 text-[10px] text-gray-500">
                    {r.distanceKm.toFixed(1)}km / {r.cityName || "—"}
                  </span>
                </div>
                <div className="line-clamp-2 text-xs leading-relaxed text-gray-600">
                  {r.comment?.trim() || r.sectionName || "（詳細記載なし）"}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 3. 自治体からのお知らせ + 要約 (常時) */}
      <section className="border-t border-gray-100 px-4 py-3">
        <MunicipalNoticeBox
          entry={state.municipality}
          prefCode={state.municipality?.prefCode}
          lat={state.lat}
          lon={state.lon}
          muniName={state.muniName}
        />
      </section>

      {/* 4. CTA 行 (常時) */}
      <section className="border-t border-gray-100 px-4 py-3">
        <Link
          href={`/place?${placeQuery.toString()}`}
          className="flex h-11 w-full items-center justify-center rounded-full bg-amber-600 text-sm font-semibold text-white hover:bg-amber-700"
        >
          📖 もっと詳しく見る
        </Link>
      </section>

      {/* 5. AI に質問 (常時) */}
      <section className="border-t border-gray-100 px-4 py-3">
        <AskBox context={askContext} />
      </section>

      {/* 6. 詳細データ (折り畳み) */}
      <details className="border-t border-gray-100 group">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
          <span>▾ 詳細データ（時間帯・月別・根拠）</span>
          <span className="text-[10px] text-gray-400 group-open:hidden">
            タップで展開
          </span>
        </summary>
        <div className="space-y-4 px-4 pb-4">
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span>{weatherLabel}</span>
            <span>
              {hour}時 / {month}月
            </span>
          </div>

          <RiskCharts
            mesh={mesh}
            weather={weather}
            baseDate={now}
            nearbyWeightedCount={nearbyWeightedCount}
            nearbySightings={nearbySightings}
            nearbyRadiusKm={nearbyRadiusKm}
            prefCode={state.municipality?.prefCode}
            elevationM={state.elevationM}
            slopeDeg={state.slopeDeg}
            isForest={state.isForest}
            forestType={state.forestType}
          />

          <MunicipalLinks entry={state.municipality} />

          <details className="rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-700">
            <summary className="min-h-9 cursor-pointer font-medium text-gray-800">
              スコアの根拠
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

          <button
            onClick={onReload}
            className="min-h-9 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200"
          >
            📍 現在地で再計算
          </button>
        </div>
      </details>

      <p className="px-4 py-3 text-[10px] leading-relaxed text-gray-400">
        スコアは参考値です。実際のクマの行動は個体差・環境で変わります。必ず自治体の公式情報と合わせてご確認ください。
      </p>
    </div>
  );
}
