"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  MeshData,
  ScoreBreakdown,
  WeatherSnapshot,
} from "@/lib/types";
import {
  computeScore,
  computeSpatialScore,
  calcHistoryScore,
  maxLevel,
  sightingsToLevel,
  type LevelThresholds,
} from "@/lib/score";
import { latLonToMeshCode, haversineKm } from "@/lib/mesh";
import { loadLandUse, loadMeshes, findMeshByCode } from "@/lib/mesh-data";
import { computeNeighborMeshScore } from "@/lib/neighbor-habitat";
import { computeSmoothedAt } from "@/lib/smooth";
import { weatherCodeLabel } from "@/lib/weather";
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
  | "id"
  | "date"
  | "cityName"
  | "sectionName"
  | "comment"
  | "headCount"
  | "isOfficial"
  | "sourceUrl"
> & { distanceKm: number };

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
      /** 過去365日の目撃件数 (周辺 10km・期間フィルタ非依存) — 格上げ判定用 */
      count365d: number;
      /** 過去90日の目撃件数 (周辺 10km・期間フィルタ非依存) — カード表示用 */
      count90d: number;
      /** 過去90日の目撃レコード上位 N 件 (周辺 10km) — もっと見る用 */
      recent90d: NearbyRecent[];
      /** 生息域メッシュベースの素のレベル (ヒートマップと同じ) */
      baseLevel: import("@/lib/types").RiskLevel;
      /** 最近の目撃で格上げされたか */
      levelEscalated: boolean;
      elevationM: number | null;
      slopeDeg: number | null;
      isForest: boolean | null;
      forestType: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none" | null;
    };

const NEARBY_RADIUS_KM = 10;
const NEARBY_DECAY_KM = 5;

// 周辺 API は1つでもハングすると Promise.all 全体が止まり「情報取得中」のまま固まる。
// 各 fetch にクライアント側タイムアウトを掛け、超過したら fallback 値を返す。
const FETCH_TIMEOUT_MS = 8000;

async function fetchWithTimeout(
  url: string,
  ms: number = FETCH_TIMEOUT_MS,
): Promise<Response | null> {
  if (typeof AbortController === "undefined") {
    try {
      return await fetch(url);
    } catch {
      return null;
    }
  }
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { signal: ctrl.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchNearbyHistory(
  lat: number,
  lon: number,
  radiusKm: number,
): Promise<{ count365d: number; count90d: number; records: NearbyRecent[] }> {
  const r = await fetchWithTimeout(
    `/api/nearby-history?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}&radiusKm=${radiusKm}`,
  );
  if (!r || !r.ok) return { count365d: 0, count90d: 0, records: [] };
  try {
    const data = (await r.json()) as {
      count365d?: number;
      count90d?: number;
      records?: NearbyRecent[];
    };
    return {
      count365d: typeof data.count365d === "number" ? data.count365d : 0,
      count90d: typeof data.count90d === "number" ? data.count90d : 0,
      records: Array.isArray(data.records) ? data.records : [],
    };
  } catch {
    return { count365d: 0, count90d: 0, records: [] };
  }
}

async function fetchElevation(
  lat: number,
  lon: number,
): Promise<{ elevationM: number | null; slopeDeg: number | null }> {
  const r = await fetchWithTimeout(
    `/api/elevation?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
  );
  if (!r || !r.ok) return { elevationM: null, slopeDeg: null };
  try {
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
  const r = await fetchWithTimeout(
    `/api/forest?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
  );
  if (!r || !r.ok) return null;
  try {
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
        isOfficial: s.isOfficial,
        sourceUrl: s.sourceUrl,
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
  const r = await fetchWithTimeout(
    `/api/geocode?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}&v=2`,
  );
  if (!r || !r.ok) return null;
  try {
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
  const r = await fetchWithTimeout(
    `/api/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}`,
  );
  if (!r || !r.ok) return null;
  try {
    return (await r.json()) as WeatherSnapshot;
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
  /** 過去 1 年の目撃件数をメッシュコード別に集計したマップ。
   *  ヒートマップと同じ式で危険度を上げるために参照する。 */
  sightingCountByMesh?: Map<string, number>;
  /** カードヘッダー内のシェアボタンから呼ぶ。地点が選択されている時のみ表示。 */
  onShare?: () => void;
  /** カードヘッダー内の「AIに聞く」ボタンから呼ぶ。常に表示。 */
  onAskAi?: () => void;
  /** 評価が ready になった時に AI へ渡す豊富なコンテキストを KumaClient に通知する。 */
  onAskContextChange?: (ctx: AskContext | null) => void;
};

export type AskContext = {
  lat: number;
  lon: number;
  place?: string;
  prefecture?: string;
  prefCode?: string;
  muniName?: string;
  score?: number;
  level?: string;
  hour?: number;
  month?: number;
  weather?: { tempC?: number; precipMm?: number; label?: string };
  bearSpecies?: string;
  habitatInside?: boolean;
};

export default function RiskPanel({
  location,
  periodDays,
  records,
  onPickGps,
  smoothingSigmaKm,
  levelThresholds,
  sightingCountByMesh,
  onShare,
  onAskAi,
  onAskContextChange,
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
  const sightingMapRef = useRef<Map<string, number> | undefined>(
    sightingCountByMesh,
  );
  useEffect(() => {
    recordsRef.current = records;
    periodDaysRef.current = periodDays;
    sigmaRef.current = smoothingSigmaKm;
    thresholdsRef.current = levelThresholds;
    sightingMapRef.current = sightingCountByMesh;
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
        const [meshes, landUse, weather, rev, elevation, forest, history] =
          await Promise.all([
            loadMeshes(),
            loadLandUse().catch(() => null),
            fetchWeather(loc.lat, loc.lon),
            reverseGeocode(loc.lat, loc.lon),
            fetchElevation(loc.lat, loc.lon),
            fetchForest(loc.lat, loc.lon),
            fetchNearbyHistory(loc.lat, loc.lon, NEARBY_RADIUS_KM),
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
      const { score: spatialScore, level: baseLevel } = computeSpatialScore(
        { historyDirect: directHistory, thresholds: curThresholds },
      );
      breakdown.score = spatialScore;

      // /api/nearby-history: 過去365日 (格上げ判定) と 過去90日 (カード表示) を別々に保持。
      const count365d = history.count365d;
      const count90d = history.count90d;
      const recent90d = history.records;
      // ヒートマップと完全一致させるため、メッシュ単位の目撃件数で同じ式で
      // 格上げする。sightingMapRef は KumaClient が /api/sighting-cells から
      // 取得した「過去 1 年・メッシュ別」の集計マップ。
      const sCellCount = sightingMapRef.current?.get(meshCode) ?? 0;
      const sightingLevel = sightingsToLevel(sCellCount);
      const displayedLevel = maxLevel(baseLevel, sightingLevel);
      breakdown.level = displayedLevel;
      const levelEscalated = displayedLevel !== baseLevel;

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
        count365d,
        count90d,
        recent90d,
        baseLevel,
        levelEscalated,
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
      onAskContextChange?.(null);
      return;
    }
    setLlmAdvice(null);
    // 新しい地点はコンパクト (バーまで) で表示。ユーザーがタップで full に展開
    setFullView(false);
    void evaluate(location);
  }, [location, evaluate, onAskContextChange]);

  // ready になったら AI 用のリッチなコンテキストを KumaClient に通知。
  useEffect(() => {
    if (state.kind !== "ready") return;
    const now = new Date();
    onAskContextChange?.({
      lat: state.lat,
      lon: state.lon,
      place: state.placeName,
      prefCode: state.municipality?.prefCode,
      muniName: state.muniName,
      score: state.breakdown.score,
      level: state.breakdown.level,
      hour: now.getHours(),
      month: now.getMonth() + 1,
      weather: state.weather
        ? {
            tempC: state.weather.tempC,
            precipMm: state.weather.precipMm,
            label: weatherCodeLabel(state.weather.weatherCode),
          }
        : undefined,
      bearSpecies: state.municipality?.bearSpecies.includes("higuma")
        ? "ヒグマ"
        : state.municipality
          ? "ツキノワグマ"
          : undefined,
      habitatInside: !!state.mesh,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.kind === "ready" ? state.lat : null, state.kind === "ready" ? state.lon : null, state.kind === "ready" ? state.breakdown.level : null]);

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

  // 結論バッジは RiskHero の大きなヴァーディクトに統合したのでヘッダーには出さない。

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
      aria-label="警戒レベルと設定"
      style={{
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        // compact (危険度バーまで): ピンが見える程度の小さい高さ
        // full: 詳細含めて広く展開 (カード内スクロール)
        maxHeight: fullView ? "78vh" : "40vh",
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
        <div className="flex items-end gap-2 px-3 pb-2">
          <button
            onClick={handleHeaderClick}
            className="flex min-w-0 flex-1 items-center gap-2 text-left"
            aria-expanded={expanded}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-base text-white">
              📍
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-base font-semibold text-gray-900">
                {state.kind === "idle"
                  ? "地図をタップして警戒レベルを見る"
                  : state.kind === "ready" && state.placeName
                    ? state.placeName
                    : state.kind === "ready" && state.source === "tap"
                      ? "選択地点の警戒レベル"
                      : "現在地の警戒レベル"}
              </div>
              <div className="truncate text-sm text-gray-500 sm:text-xs">
                {state.kind === "idle" && "または検索バーから地点を選択"}
                {state.kind === "loading" && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                    {state.stage}...
                  </span>
                )}
                {state.kind === "error" && (
                  <span className="text-red-600">⚠️ {state.message}</span>
                )}
              </div>
            </div>
          </button>
          {onAskAi && (
            <button
              onClick={onAskAi}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-200 hover:bg-amber-200 sm:h-10 sm:w-10"
              aria-label="AI に質問"
              title="AI に質問"
            >
              <Image
                src="/bear-face.png"
                alt=""
                width={22}
                height={22}
                aria-hidden
                style={{ width: "1.375rem", height: "auto" }}
              />
            </button>
          )}
          {state.kind === "ready" && onShare && (
            <button
              onClick={onShare}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-amber-50 hover:text-amber-700 sm:h-10 sm:w-10"
              aria-label="この地点をシェア"
              title="この地点をシェア"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
                <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
              </svg>
            </button>
          )}
          {state.kind === "ready" && (
            <Link
              href={`/submit?lat=${state.lat.toFixed(5)}&lon=${state.lon.toFixed(5)}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-amber-50 hover:text-amber-700 sm:h-10 sm:w-10"
              aria-label="この地点で目撃情報を投稿"
              title="この地点で目撃情報を投稿"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </Link>
          )}
          {(state.kind === "ready" || state.kind === "error") && (
            <button
              onClick={() => setExpanded(false)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 sm:h-8 sm:w-8 sm:text-base"
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
    recent90d,
  } = state;
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth() + 1;

  const isInsufficient = !mesh && (nearbySightings ?? 0) === 0;
  const isBuffer = !mesh && (nearbySightings ?? 0) > 0;


  return (
    <div className="border-t border-gray-100 text-sm">
      {/* 1. 危険度 verdict + 並列ファクト + 5段階バー + LLM 補足 */}
      <RiskHero
        level={breakdown.level}
        baseLevel={state.baseLevel}
        count90d={state.count90d}
        nearbyRadiusKm={nearbyRadiusKm}
      />

      {!fullView && (
        <div className="px-4 pb-3 pt-2">
          <button
            type="button"
            onClick={onExpandFull}
            className="flex w-full items-center justify-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-800 shadow-sm hover:bg-amber-100"
          >
            もっと見る
            <span aria-hidden>▼</span>
          </button>
        </div>
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
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-xs sm:text-gray-700">
              📝 行動メモ
              {llmAdviceLoading && (
                <span className="inline-flex items-center gap-1 text-xs font-normal text-gray-400 sm:text-[10px]">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                  AI で更新中...
                </span>
              )}
              {isLlm && !llmAdviceLoading && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 sm:text-[9px]">
                  AI
                </span>
              )}
            </h3>
            <ul className="space-y-2">
              {advice.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg bg-gray-50 px-3 py-2.5"
                >
                  <span className="mt-0.5 text-lg sm:text-base" aria-hidden>
                    {a.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-gray-900 sm:text-xs sm:font-medium">
                      {a.title}
                    </div>
                    {a.body && (
                      <div className="mt-0.5 text-sm leading-relaxed text-gray-600 sm:text-[11px]">
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

      {/* 件数は RiskHero で常時表示しているので重複させない。
          fullView では補足の注意書きだけ出す (生息域なし・緩衝域 等の特殊ケース)。 */}
      {(isInsufficient || isBuffer) && (
        <section className="bg-amber-50/70 px-4 py-3">
          <p className="text-sm leading-relaxed text-amber-900 sm:text-xs">
            {isInsufficient &&
              "生息域調査に記録なし。近隣の公式目撃も未確認。山間部では基本対策を。"}
            {isBuffer &&
              `生息域外の緩衝域。近隣で ${nearbySightings} 件の公式目撃記録あり。`}
          </p>
        </section>
      )}

      {/* 直近の目撃 リスト (過去 3 ヶ月・固定窓) */}
      {recent90d.length > 0 && (
        <section className="border-t border-gray-100 px-4 py-3">
          <h3 className="mb-2 text-base font-semibold text-gray-800 sm:text-xs sm:text-gray-700">
            🕓 直近の目撃
          </h3>
          <ul className="space-y-2">
            {recent90d.slice(0, 3).map((r) => {
              const isNews = r.isOfficial === false;
              return (
                <li
                  key={String(r.id)}
                  className="rounded-lg bg-gray-50 px-3 py-2.5 text-base text-gray-700 sm:text-sm"
                >
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-gray-900">{r.date}</span>
                      <span
                        className={`shrink-0 rounded-full px-1.5 py-px text-[10px] font-semibold ${
                          isNews
                            ? "border border-amber-300 bg-amber-50 text-amber-800"
                            : "border border-emerald-200 bg-emerald-50 text-emerald-800"
                        }`}
                        title={isNews ? "ニュース報道由来 (未確認)" : "公式情報源"}
                      >
                        {isNews ? "📰 報道" : "🛡 公式"}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs text-gray-500 sm:text-[10px]">
                      {r.distanceKm.toFixed(1)}km / {r.cityName || "—"}
                    </span>
                  </div>
                  <div className="line-clamp-2 text-sm leading-relaxed text-gray-600 sm:text-xs">
                    {r.comment?.trim() || r.sectionName || "（詳細記載なし）"}
                  </div>
                  {isNews && r.sourceUrl && (
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-[11px] text-blue-600 underline"
                    >
                      元記事を開く ↗
                    </a>
                  )}
                </li>
              );
            })}
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
        <h3 className="mb-2 text-base font-semibold text-gray-800 sm:text-xs sm:text-gray-700">
          📊 警戒レベル予測
        </h3>
        <div className="mb-2 flex items-center justify-end text-sm text-gray-500 sm:text-[11px]">
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

      {/* カード末尾の控えめな運営・補足リンク行。1 行目: 運営 + お問合せ、2 行目: 補足。 */}
      <footer className="border-t border-gray-100 px-4 py-3 text-center text-[11px] leading-relaxed text-gray-400">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>
            運営:{" "}
            <a
              href="https://www.research-coordinate.co.jp/labs/vet/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 hover:underline"
            >
              獣医工学ラボ
            </a>
          </span>
          <span aria-hidden>·</span>
          <a
            href="mailto:contact@research-coordinate.co.jp"
            className="hover:text-gray-600 hover:underline"
          >
            お問合せ
          </a>
        </div>
        <nav
          aria-label="補足リンク"
          className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
        >
          <Link href="/about" className="hover:text-gray-600 hover:underline">
            このサイトについて
          </Link>
          <span aria-hidden>·</span>
          <Link href="/disclaimer" className="hover:text-gray-600 hover:underline">
            免責事項
          </Link>
          <span aria-hidden>·</span>
          <Link href="/privacy" className="hover:text-gray-600 hover:underline">
            プライバシー
          </Link>
        </nav>
      </footer>

      </>}
    </div>
  );
}
