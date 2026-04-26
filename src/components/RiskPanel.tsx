"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  MeshData,
  ScoreBreakdown,
  WeatherSnapshot,
} from "@/lib/types";
import {
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
  computeScore,
  computeSpatialScore,
  calcHistoryScore,
  type LevelThresholds,
} from "@/lib/score";
import { latLonToMeshCode, haversineKm } from "@/lib/mesh";
import { loadLandUse, loadMeshes, findMeshByCode } from "@/lib/mesh-data";
import { computeNeighborMeshScore } from "@/lib/neighbor-habitat";
import { computeSmoothedAt } from "@/lib/smooth";
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
import RiskCharts from "@/components/RiskCharts";
import RiskHero from "@/components/RiskHero";
import { buildAdvice, type AdviceItem } from "@/lib/advice";
import type { AdviceResponse } from "@/app/api/advice/route";

export type LocationSource = "gps" | "tap" | "search" | "url";
export type SelectedLocation = {
  lat: number;
  lon: number;
  source: LocationSource;
  /** 検索結果や URL から渡された地名 (シェア時に利用) */
  label?: string;
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

// KumaClient が既に期間スコープで fetch 済みの records から近隣集計する。
// ヒートマップと同じ records を使うことで色・件数が一致する。
function computeNearbyFromRecords(
  records: KumaRecord[],
  lat: number,
  lon: number,
  periodDays: number | null,
  radiusKm: number = NEARBY_RADIUS_KM,
): {
  count: number;
  weighted: number;
  periodCount: number;
  periodWeighted: number;
  periodRecent: NearbyRecent[];
} {
  const cutoff = cutoffDate(periodDays);
  let count = 0;
  let weighted = 0;
  let periodCount = 0;
  let periodWeighted = 0;
  const periodHits: NearbyRecent[] = [];
  for (const s of records) {
    const d = haversineKm(lat, lon, s.lat, s.lon);
    if (d > radiusKm) continue;
    count += 1;
    const w = Math.exp(-d / NEARBY_DECAY_KM);
    weighted += w;
    if (!cutoff || s.date >= cutoff) {
      periodCount += 1;
      periodWeighted += w;
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
      periodWeighted,
      periodRecent: periodHits.slice(0, 5),
  };
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
  /** KumaClient が期間スコープで読み込んだ records を共有 (ヒートマップと同じ入力) */
  records: KumaRecord[];
  onPickGps: (loc: SelectedLocation) => void;
  smoothingSigmaKm: number;
  levelThresholds: LevelThresholds;
  /** カードヘッダー内のシェアボタンから呼ぶ。地点が選択されている時のみ表示。 */
  onShare?: () => void;
};

export default function RiskPanel({
  location,
  periodDays,
  records,
  onPickGps,
  smoothingSigmaKm,
  levelThresholds,
  onShare,
}: Props) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [expanded, setExpanded] = useState(false);
  // カードを「危険度バーまで見える最小高さ」と「詳細を見せる広い高さ」の 2 段階に
  const [fullView, setFullView] = useState(false);
  const [llmAdvice, setLlmAdvice] = useState<AdviceItem[] | null>(null);
  const [llmAdviceLoading, setLlmAdviceLoading] = useState(false);

  // evaluate が records / period / 設定の変化で再生成されないよう ref に逃がす。
  // これがないと /api/kuma 再フェッチや設定変更のたびに evaluate が走り直し、
  // /api/advice などが連鎖発火してブラウザが「読み込み中」のままになる。
  const recordsRef = useRef(records);
  const periodDaysRef = useRef(periodDays);
  const sigmaRef = useRef(smoothingSigmaKm);
  const thresholdsRef = useRef(levelThresholds);
  useEffect(() => {
    recordsRef.current = records;
    periodDaysRef.current = periodDays;
    sigmaRef.current = smoothingSigmaKm;
    thresholdsRef.current = levelThresholds;
  });

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
        const [meshes, landUse, weather, rev, elevation, forest] =
          await Promise.all([
            loadMeshes(),
            loadLandUse().catch(() => null),
            fetchWeather(loc.lat, loc.lon),
            reverseGeocode(loc.lat, loc.lon),
            fetchElevation(loc.lat, loc.lon),
            fetchForest(loc.lat, loc.lon),
          ]);
        // records / period は ref で参照 (evaluate を再生成しない)
        const curRecords = recordsRef.current;
        const curPeriodDays = periodDaysRef.current;
        const curSigma = sigmaRef.current;
        const curThresholds = thresholdsRef.current;
        const nearby = computeNearbyFromRecords(
          curRecords,
          loc.lat,
          loc.lon,
          curPeriodDays,
        );
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
      const neighborMeshScore = computeNeighborMeshScore(
        meshes,
        loc.lat,
        loc.lon,
        meshCode,
      );

      const dataSource = findSourceByPrefCode(rev?.prefCode ?? "");
      const breakdown = computeScore(mesh, new Date(), weather, {
        nearbyWeightedCount: nearby.weighted,
        nearbySightings: nearby.count,
        nearbyRadiusKm: NEARBY_RADIUS_KM,
        neighborMeshScore,
        prefCode: rev?.prefCode,
        bearStatus: dataSource?.bearStatus ?? null,
        elevationM: elevation.elevationM,
        slopeDeg: elevation.slopeDeg,
        isForest: forest?.isForest ?? null,
        forestType: forest?.forestType ?? null,
      });

      // 表示される level / score はヒートマップと同じ空間的式で算出する。
      // ヒートマップ側も期間フィルタ済みの目撃密度を使うため、RiskPanel も
      // 期間フィルタ済み (periodWeighted) で揃える。
      // (季節・時間帯・気象などの動的要素は breakdown.factors として詳細側で残す)
      // ヒートマップと同じスコアを使う:
      //   smoothingSigmaKm > 0 ならその σ で点位置の smoothed スコアを計算
      //   0 なら raw calcHistoryScore (= Flutter 同等)
      const rawDirect = mesh ? calcHistoryScore(mesh) : 0;
      const smoothedAt =
        curSigma > 0
          ? computeSmoothedAt(meshes, loc.lat, loc.lon, curSigma, landUse)
          : 0;
      const directHistory =
        curSigma > 0 ? Math.max(rawDirect, smoothedAt) : rawDirect;
      const { score: spatialScore, level: spatialLevel } = computeSpatialScore(
        { historyDirect: directHistory, thresholds: curThresholds },
      );
      breakdown.score = spatialScore;
      breakdown.level = spatialLevel;

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
        periodDays: curPeriodDays,
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
  }, []); // 依存なし: refs から最新値を読むので、location 変更時のみ走らせる

  useEffect(() => {
    if (!location) {
      setState({ kind: "idle" });
      setLlmAdvice(null);
      return;
    }
    setLlmAdvice(null);
    // 新しい地点はコンパクト (バーまで) で表示。ユーザーがタップで full に展開
    setFullView(false);
    void evaluate(location);
  }, [location, evaluate]);

  // 地点が確定したら LLM 対策を取りに行く (失敗時はルールベースを表示)
  useEffect(() => {
    if (state.kind !== "ready") return;
    let cancelled = false;
    setLlmAdviceLoading(true);
    const now = new Date();
    const payload = {
      level: state.breakdown.level,
      score: state.breakdown.score,
      hour: now.getHours(),
      month: now.getMonth() + 1,
      lat: state.lat,
      lon: state.lon,
      place: state.placeName,
      muniName: state.muniName,
      bearSpecies: state.municipality?.bearSpecies.includes("higuma")
        ? "ヒグマ"
        : state.municipality
          ? "ツキノワグマ"
          : undefined,
      habitatInside: !!state.mesh,
      weather: state.weather
        ? {
            tempC: state.weather.tempC,
            precipMm: state.weather.precipMm,
            label: weatherCodeLabel(state.weather.weatherCode),
          }
        : null,
      nearbySightings: state.nearbySightings,
      elevationM: state.elevationM,
      isForest: state.isForest,
    };
    fetch("/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((r) => (r.ok ? (r.json() as Promise<AdviceResponse>) : null))
      .then((data) => {
        if (cancelled) return;
        if (data && data.mode === "llm" && data.items.length > 0) {
          setLlmAdvice(data.items);
        } else {
          setLlmAdvice(null);
        }
      })
      .catch(() => {
        if (!cancelled) setLlmAdvice(null);
      })
      .finally(() => {
        if (!cancelled) setLlmAdviceLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // 位置 (lat,lon) が確定するたびに 1 回だけ走らせる。
    // state 全体ではなく lat/lon だけに絞ることで、ロード後の setLlmAdvice/Loading
    // による state 変化で再フェッチが連鎖するのを避ける。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.kind === "ready" ? state.lat : null, state.kind === "ready" ? state.lon : null]);

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
        title="クマ出没危険度"
      >
        危険度: {RISK_LEVEL_LABEL[state.breakdown.level]}
      </span>
    ) : null;

  // タップ時の挙動:
  //   idle → GPS 取得
  //   compact (expanded=true, fullView=false) → fullView へ
  //   full → compact へ戻る (fullView=false)
  //   完全に閉じる場合は × ボタン
  const handleHeaderClick = () => {
    if (state.kind === "idle") {
      void onUseGps();
      return;
    }
    if (!expanded) {
      setExpanded(true);
      setFullView(false);
    } else {
      setFullView((v) => !v);
    }
  };

  const showExpandedBody =
    expanded && (state.kind === "ready" || state.kind === "error");

  return (
    <div
      className="pointer-events-auto absolute inset-x-0 bottom-0 z-[1000] border-t border-black/8 bg-white shadow-[0_-6px_20px_rgba(0,0,0,0.12)]"
      role="region"
      aria-label="危険度と設定"
      style={{
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        // compact (危険度バーまで): ピンが見える程度の小さい高さ
        // full: 詳細含めて広く展開 (カード内スクロール)
        maxHeight: fullView ? "75vh" : "32vh",
        transition: "max-height 0.25s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ドラッグハンドル (クリックで展開/折りたたみ) */}
      <button
        type="button"
        onClick={handleHeaderClick}
        className="flex w-full shrink-0 items-center justify-center py-2"
        aria-label={showExpandedBody ? "折りたたむ" : "展開する"}
      >
        <span className="h-1 w-10 rounded-full bg-gray-300" />
      </button>

      <div className="mx-auto w-full max-w-3xl shrink-0">
        <div className="flex items-center gap-2 px-3 pb-2">
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
                {state.kind === "idle"
                  ? "地図をタップして危険度を見る"
                  : state.kind === "ready" && state.placeName
                    ? state.placeName
                    : state.kind === "ready" && state.source === "tap"
                      ? "選択地点の危険度"
                      : "現在地の危険度"}
              </div>
              <div className="truncate text-xs text-gray-500">
                {state.kind === "idle" && "または ⚙ で設定"}
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
                    {state.nearbySightings > 0 && !state.mesh
                      ? `近隣 ${state.nearbyRadiusKm}km に ${state.nearbySightings} 件の目撃`
                      : state.placeName
                        ? ""
                        : "危険度カード"}
                  </>
                )}
              </div>
            </div>
            {badge}
          </button>
          {state.kind === "ready" && onShare && (
            <button
              onClick={onShare}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-amber-50 hover:text-amber-700"
              aria-label="この地点をシェア"
              title="この地点をシェア"
            >
              {/* iOS 風 share: 上向き矢印 + 箱 */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 3v12" />
                <path d="m8 7 4-4 4 4" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
              </svg>
            </button>
          )}
          {state.kind === "ready" && (
            <Link
              href={`/submit?lat=${state.lat.toFixed(5)}&lon=${state.lon.toFixed(5)}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-amber-50 hover:text-amber-700"
              aria-label="この地点で目撃情報を投稿"
              title="この地点で目撃情報を投稿"
            >
              {/* compose: 紙 + ペン */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1.768 1.768 0 1 1 2.5 2.5L12 14l-4 1 1-4 9.375-9.375z" />
              </svg>
            </Link>
          )}
          {(state.kind === "ready" || state.kind === "error") && (
            <button
              onClick={() => setExpanded(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              aria-label="閉じる"
              title="閉じる (ピンは残ります)"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {showExpandedBody && (
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-3xl">
            {state.kind === "ready" && (
              <RiskDetails
                state={state}
                llmAdvice={llmAdvice}
                llmAdviceLoading={llmAdviceLoading}
                fullView={fullView}
                onExpandFull={() => setFullView(true)}
              />
            )}
            {state.kind === "error" && (
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
      )}
    </div>
  );
}

function RiskDetails({
  state,
  llmAdvice,
  llmAdviceLoading,
  fullView,
  onExpandFull,
}: {
  state: Extract<State, { kind: "ready" }>;
  llmAdvice: AdviceItem[] | null;
  llmAdviceLoading: boolean;
  fullView: boolean;
  onExpandFull: () => void;
}) {
  const {
    breakdown,
    weather,
    mesh,
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

  const isInsufficient = !mesh && (nearbySightings ?? 0) === 0;
  const isBuffer = !mesh && (nearbySightings ?? 0) > 0;


  return (
    <div className="border-t border-gray-100 text-sm">
      {/* 1. 危険度 verdict + 5段階バー + LLM 補足 (常時表示・コンパクト) */}
      <RiskHero
        level={breakdown.level}
        prefCode={state.municipality?.prefCode}
        lat={state.lat}
        lon={state.lon}
        muniName={state.muniName}
        latestNearbyDate={periodNearbyRecent[0]?.date ?? null}
        nearbyRadiusKm={nearbyRadiusKm}
      />

      {!fullView && (
        <button
          type="button"
          onClick={onExpandFull}
          className="mt-1 w-full border-t border-gray-100 bg-gray-50/60 py-2 text-center text-[11px] font-medium text-amber-700 hover:bg-gray-100"
        >
          もっと見る (行動メモ・目撃・自治体・根拠) ▼
        </button>
      )}

      {fullView && <>

      {/* 1b. 行動メモ (LLM 優先、なければルールベースで fallback) */}
      {(() => {
        const ruleAdvice = buildAdvice({
          breakdown,
          hour,
          month,
          municipal: state.municipality,
          weather,
          nearbySightings,
          elevationM: state.elevationM,
          isForest: state.isForest,
        });
        const advice = llmAdvice ?? ruleAdvice;
        const isLlm = !!llmAdvice;
        if (advice.length === 0 && !llmAdviceLoading) return null;
        return (
          <section className="border-t border-gray-100 px-4 py-3">
            <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-700">
              📝 行動メモ
              {llmAdviceLoading && (
                <span className="inline-flex items-center gap-1 text-[10px] font-normal text-gray-400">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                  AI で更新中...
                </span>
              )}
              {isLlm && !llmAdviceLoading && (
                <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-medium text-amber-800">
                  AI
                </span>
              )}
            </h3>
            <ul className="space-y-1.5">
              {advice.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded-lg bg-gray-50 px-3 py-2"
                >
                  <span className="mt-0.5" aria-hidden>
                    {a.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-gray-900">
                      {a.title}
                    </div>
                    {a.body && (
                      <div className="text-[11px] leading-relaxed text-gray-600">
                        {a.body}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })()}


      {/* 詳細セクション (fullView 時のみ) */}

      {/* 2. 件数 headline */}
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

      {/* 3. 自治体からのお知らせ + 要約 (公式リンクは要約内に inline 表示) */}
      <section className="border-t border-gray-100 px-4 py-3">
        <MunicipalNoticeBox
          entry={state.municipality}
          prefCode={state.municipality?.prefCode}
          lat={state.lat}
          lon={state.lon}
          muniName={state.muniName}
        />
      </section>

      {/* 4. 危険度予測 (時間帯・月別・根拠) */}
      <section className="border-t border-gray-100 px-4 py-3">
        <h3 className="mb-2 text-xs font-semibold text-gray-700">
          📊 危険度予測
        </h3>
        <div className="mb-2 flex items-center justify-between text-[11px] text-gray-500">
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
      </section>

      <p className="px-4 py-3 text-[10px] leading-relaxed text-gray-400">
        スコアは参考値です。実際のクマの行動は個体差・環境で変わります。必ず自治体の公式情報と合わせてご確認ください。
      </p>

      </>}
    </div>
  );
}
