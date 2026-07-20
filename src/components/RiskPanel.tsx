"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
  TouchEvent as ReactTouchEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import {
  MapPin,
  AlertTriangle,
  Clock,
  ChartColumn,
  Share2,
  MapPinPlus,
  X,
  ChevronDown,
} from "lucide-react";
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
import MonthlySightingsChart from "@/components/MonthlySightingsChart";
import RiskHero from "@/components/RiskHero";
import GeoNotifyTile, {
  isGeoNotifyAvailable,
} from "@/components/GeoNotifyTile";
import { isPushReleased } from "@/lib/push-flag";
import { jstDaysAgo } from "@/lib/jst-date";

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
  | "sourceKind"
  | "isOfficial"
  | "sourceUrl"
> & { distanceKm: number };

function cutoffDate(days: number | null): string | null {
  if (days === null) return null;
  // JST 基準。UTC でスライスすると早朝に境界が 1 日ずれ、地図の期間フィルタ
  // (KumaClient の computeCutoff は JST) と集計が食い違う。
  return jstDaysAgo(days);
}

type State =
  | { kind: "idle" }
  | { kind: "loading"; stage: string; source?: LocationSource }
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
      /** 通知の登録名に使う、町丁目まで含んだ地名。カード見出しには使わない。 */
      placeDetail?: string;
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
      /** 周辺 10km・今年/昨年の月別実測件数 (0=1月..11=12月)。月別出没チャート(昨年vs今年)用。 */
      monthlyThisYear: number[];
      monthlyLastYear: number[];
      histThisYear: number;
      histLastYear: number;
      /** 生息域メッシュベースの素のレベル (ヒートマップと同じ) */
      baseLevel: import("@/lib/types").RiskLevel;
      /** 当該メッシュの直近1年の目撃件数 (ヒートマップのセル色と同入力)。カード判定の主軸。 */
      sCellCount: number;
      /** 直近7日・周辺約3kmの出没件数（区分を「情報なし」にしないため） */
      lastWeekCount: number;
      /** 最近の目撃で格上げされたか */
      levelEscalated: boolean;
      elevationM: number | null;
      slopeDeg: number | null;
      isForest: boolean | null;
      forestType: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none" | null;
    };

const NEARBY_RADIUS_KM = 10;
const NEARBY_DECAY_KM = 5;

// ドラッグ式ボトムシートのスナップ位置。Google マップの place card と同様に指で
// 上下でき、collapsed (畳んだ細いバー) / peek (概要) / half (中) / full (最上) の
// 4 段にスナップ。× や下スワイプでは消さず collapsed まで畳む (いつでも引き上げ可)。
type Snap = "collapsed" | "peek" | "half" | "full";
// peek/half/full は地図領域高に対する割合。collapsed はヘッダー高(px)で別扱い。
const SNAP_VISIBLE_FRAC: Record<Exclude<Snap, "collapsed">, number> = {
  peek: 0.36,
  half: 0.6,
  full: 0.94,
};
// collapsed (畳んだ状態) の見え高(px)。ハンドル + タイトル行がちょうど見える高さ。
const COLLAPSED_PX = 88;
// シート要素そのものの高さ (= full の見え高)。translateY で上下させて見え幅を変える。
const SHEET_FRAC = 0.94;
// ドラッグ移動がこの px 未満なら「タップ」とみなす (展開トグル or GPS)。
const TAP_THRESHOLD_PX = 6;

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
): Promise<{
  /** false = 取得失敗。呼び出し側でメッシュ集計にフォールバックする */
  ok: boolean;
  count365d: number;
  countLocal365: number;
  countLocal7: number;
  count90d: number;
  monthlyThisYear: number[];
  monthlyLastYear: number[];
  thisYear: number;
  lastYear: number;
  records: NearbyRecent[];
}> {
  const nowY = new Date().getFullYear();
  const empty = {
    ok: false,
    count365d: 0,
    countLocal365: 0,
    countLocal7: 0,
    count90d: 0,
    monthlyThisYear: [],
    monthlyLastYear: [],
    thisYear: nowY,
    lastYear: nowY - 1,
    records: [],
  };
  const r = await fetchWithTimeout(
    `/api/nearby-history?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}&radiusKm=${radiusKm}`,
  );
  if (!r || !r.ok) return empty;
  try {
    const data = (await r.json()) as {
      count365d?: number;
      count90d?: number;
      countLocal365?: number;
      countLocal7?: number;
      monthlyThisYear?: number[];
      monthlyLastYear?: number[];
      thisYear?: number;
      lastYear?: number;
      records?: NearbyRecent[];
    };
    const arr12 = (a?: number[]) =>
      Array.isArray(a) && a.length === 12 ? a : [];
    return {
      ok: true,
      count365d: typeof data.count365d === "number" ? data.count365d : 0,
      count90d: typeof data.count90d === "number" ? data.count90d : 0,
      countLocal365:
        typeof data.countLocal365 === "number" ? data.countLocal365 : 0,
      countLocal7: typeof data.countLocal7 === "number" ? data.countLocal7 : 0,
      monthlyThisYear: arr12(data.monthlyThisYear),
      monthlyLastYear: arr12(data.monthlyLastYear),
      thisYear: typeof data.thisYear === "number" ? data.thisYear : nowY,
      lastYear: typeof data.lastYear === "number" ? data.lastYear : nowY - 1,
      records: Array.isArray(data.records) ? data.records : [],
    };
  } catch {
    return empty;
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
        sourceKind: s.sourceKind,
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
  // ドラッグ式ボトムシートの状態。
  //   open   … シートを表示するか (false = 下に隠す)。地点未選択や dismiss で false。
  //   snap   … peek / half / full の 3 段。full のとき詳細を全表示。
  //   dragD  … ドラッグ中の translateY(px)。非ドラッグ時は null (snap から算出)。
  const [open, setOpen] = useState(false);
  const [snap, setSnap] = useState<Snap>("peek");
  const [dragD, setDragD] = useState<number | null>(null);
  const [containerH, setContainerH] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  // 本文スクロール領域。full 時にここを触ったらドラッグせずスクロールさせる判定に使う。
  const bodyRef = useRef<HTMLDivElement>(null);
  // full のときだけ詳細セクションを描画する (旧 fullView 相当)。
  const fullView = snap === "full";

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
        setState({ kind: "loading", stage: "メッシュを特定中", source: loc.source });
        const meshCode = latLonToMeshCode(loc.lat, loc.lon);
        if (!meshCode) {
          setOpen(true);
          setState({
            kind: "error",
            message: "この位置はサービス対象範囲外です（日本域外）",
          });
          return;
        }

        setState({ kind: "loading", stage: "データを取得中", source: loc.source });
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
      // 区分はタップ地点を中心とした等面積円 (半径2.9km) の直近1年件数で出す。
      // 以前はメッシュ1個の件数だったため、境界付近では隣のセルに出没が
      // 固まっていても「情報なし」と表示されていた (実測で13.6%が過小表示、
      // 過大表示は0%)。面積を揃えてあるのでしきい値の意味は変わらない。
      // ヒートマップ自体は従来どおりメッシュ単位で塗る (面の粗い表現)。
      // 取得できなかったときだけ従来のメッシュ集計に落とす (区分を空にしない)
      const sCellCount = history.ok
        ? history.countLocal365
        : (sightingMapRef.current?.get(meshCode) ?? 0);
      // 直近7日の周辺出没。年間件数がしきい値未満でも「情報なし」にしないために使う
      const lastWeekCount = history.ok ? history.countLocal7 : 0;
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
      // 通知の登録名は「あとで見たときにどこか分かる」ことが最優先なので、
      // 逆ジオコーダ (国土地理院) が返す大字・町丁目 (district) まで含める。
      // カード見出し (placeName) は短さを優先して市区町村までに留める。
      const placeDetail = rev
        ? [rev.prefecture, rev.city, rev.district].filter(Boolean).join(" ")
        : undefined;

      setOpen(true);
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
        placeDetail,
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
        monthlyThisYear: history.monthlyThisYear,
        monthlyLastYear: history.monthlyLastYear,
        histThisYear: history.thisYear,
        histLastYear: history.lastYear,
        baseLevel,
        sCellCount,
        lastWeekCount,
        levelEscalated,
        elevationM: elevation.elevationM,
        slopeDeg: elevation.slopeDeg,
        isForest: forest?.isForest ?? null,
        forestType: forest?.forestType ?? null,
      });
    } catch (err) {
      setOpen(true);
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "評価に失敗しました",
      });
    }
  }, []); // 依存なし: refs から最新値を読むので、location 変更時のみ走らせる

  useEffect(() => {
    if (!location) {
      setState({ kind: "idle" });
      setOpen(false);
      onAskContextChange?.(null);
      return;
    }
    // 新しい地点は peek (概要) で下から迫り出す。指で上げるか「もっと見る」で full に。
    setOpen(true);
    setSnap("peek");
    setDragD(null);
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

  const onUseGps = useCallback(async () => {
    setState({ kind: "loading", stage: "位置情報を取得中", source: "gps" });
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
      setOpen(true);
      setState({ kind: "error", message: msg });
    }
  }, [onPickGps]);

  // 結論バッジは RiskHero の大きなヴァーディクトに統合したのでヘッダーには出さない。

  // 地図領域 (親要素) の高さを測ってスナップ位置の基準にする。回転・リサイズ追従。
  useEffect(() => {
    const el = rootRef.current?.parentElement;
    if (!el) return;
    const measure = () => setContainerH(el.clientHeight);
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // スナップ位置ごとの「見え高(px)」と translateY(px)。0 = full(最上)、大きいほど下へ。
  const sheetPx = containerH * SHEET_FRAC;
  const visibleForSnap = (s: Snap) =>
    s === "collapsed" ? COLLAPSED_PX : containerH * SNAP_VISIBLE_FRAC[s];
  const restD = (s: Snap) => sheetPx - visibleForSnap(s);
  const translateY = dragD != null ? dragD : open ? restD(snap) : sheetPx;

  // タップでの遷移: collapsed→peek (やさしく開く)、peek/half→full、full→peek。
  const nextSnapOnTap = (s: Snap): Snap =>
    s === "collapsed" ? "peek" : s === "full" ? "peek" : "full";

  // --- ドラッグ (指/マウスでシートを上下) ---
  // iOS Safari では PointerEvents が touch でスクロールに化けて pointermove を
  // 取りこぼし「指で押し上がらない」ため、touch は touchmove を非パッシブで受けて
  // preventDefault し確実に追従させる。デスクトップは mouse で同等に動かす。
  const visForSnapAt = (s: Snap, H: number) =>
    s === "collapsed" ? COLLAPSED_PX : H * SNAP_VISIBLE_FRAC[s];
  const startDrag = (startY: number, kind: "touch" | "mouse") => {
    const el = rootRef.current?.parentElement;
    const H = el ? el.clientHeight : containerH;
    if (el && H !== containerH) setContainerH(H);
    const sh = H * SHEET_FRAC;
    const drag = {
      startD: dragD ?? (open ? sh - visForSnapAt(snap, H) : sh),
      lastD: 0,
      moved: false,
    };
    drag.lastD = drag.startD;
    setDragD(drag.startD);

    const update = (y: number) => {
      const delta = y - startY;
      if (Math.abs(delta) > TAP_THRESHOLD_PX) drag.moved = true;
      const nd = Math.max(0, Math.min(drag.startD + delta, sh));
      drag.lastD = nd;
      setDragD(nd);
    };
    const onTouchMove = (ev: TouchEvent) => {
      // ページ/地図スクロールを止めてシートに追従させる (iOS 対策の要)。
      if (ev.cancelable) ev.preventDefault();
      const t = ev.touches[0];
      if (t) update(t.clientY);
    };
    const onMouseMove = (ev: MouseEvent) => update(ev.clientY);
    const finish = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", finish);
      window.removeEventListener("touchcancel", finish);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", finish);
      if (!drag.moved) {
        // タップ扱い: idle は GPS、それ以外は展開トグル。
        setDragD(null);
        if (state.kind === "idle") {
          void onUseGps();
          return;
        }
        setOpen(true);
        setSnap(nextSnapOnTap);
        return;
      }
      // 離した「見え高」に最も近いスナップへ吸着。最小は collapsed (消さない)。
      const vis = sh - drag.lastD;
      const targets: { k: Snap; v: number }[] = [
        { k: "collapsed", v: COLLAPSED_PX },
        { k: "peek", v: H * SNAP_VISIBLE_FRAC.peek },
        { k: "half", v: H * SNAP_VISIBLE_FRAC.half },
        { k: "full", v: H * SNAP_VISIBLE_FRAC.full },
      ];
      let best = targets[0];
      let bestDist = Infinity;
      for (const t of targets) {
        const dist = Math.abs(t.v - vis);
        if (dist < bestDist) {
          bestDist = dist;
          best = t;
        }
      }
      setDragD(null);
      setSnap(best.k);
      setOpen(true);
    };
    if (kind === "touch") {
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", finish);
      window.addEventListener("touchcancel", finish);
    } else {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", finish);
    }
  };
  // カード全体を掴んでドラッグできるようにする (Google マップ的な操作感)。
  // ただし ・ボタン/リンク等のコントロール上では発動しない (タップ/操作を優先)
  //        ・full 表示中に本文(スクロール領域)を触った場合はドラッグせずスクロール
  const shouldStartDrag = (target: EventTarget | null): boolean => {
    if (!(target instanceof Element)) return true;
    if (target.closest("button, a, input, select, textarea")) return false;
    if (snap === "full" && bodyRef.current?.contains(target)) return false;
    return true;
  };
  const onRootTouchStart = (e: ReactTouchEvent) => {
    if (!shouldStartDrag(e.target)) return;
    const t = e.touches[0];
    if (t) startDrag(t.clientY, "touch");
  };
  const onRootMouseDown = (e: ReactMouseEvent) => {
    if (!shouldStartDrag(e.target)) return;
    startDrag(e.clientY, "mouse");
  };

  const showExpandedBody = state.kind === "ready" || state.kind === "error";

  return (
    <div
      ref={rootRef}
      onTouchStart={onRootTouchStart}
      onMouseDown={onRootMouseDown}
      className="pointer-events-auto absolute inset-x-0 bottom-0 z-[1000] select-none border-t border-black/8 bg-white shadow-[0_-6px_20px_rgba(0,0,0,0.12)]"
      role="region"
      aria-label="警戒レベルと設定"
      style={{
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        // シート高は地図領域の 94%。translateY で peek/half/full/collapsed を切替。
        height: containerH ? sheetPx : undefined,
        // 高さ未計測 (初回描画) の間は画面外へ逃がしてチラつきを防ぐ。
        transform: `translateY(${containerH ? translateY : 4000}px)`,
        // ドラッグ中は追従性のため transition を切る。離したらスムーズに吸着。
        transition:
          dragD != null ? "none" : "transform 0.28s cubic-bezier(0.32,0.72,0,1)",
        willChange: "transform",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ドラッグハンドル(見た目)。ドラッグ判定はカード全体 (root) に付けているので
          ここを含めカードのどこを掴んでも上下できる。full の本文だけはスクロール優先。 */}
      <div
        className="flex w-full shrink-0 cursor-grab items-center justify-center py-4 active:cursor-grabbing"
        aria-hidden
      >
        <span className="h-1.5 w-12 rounded-full bg-gray-300" />
      </div>

      <div className="mx-auto w-full max-w-3xl shrink-0">
        <div className="flex items-end gap-2 px-3 pb-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 text-left">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white">
              <MapPin size={18} aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-base font-semibold text-gray-900">
                {state.kind === "idle"
                  ? "地図をタップして警戒レベルを見る"
                  : state.kind === "ready" && state.placeName
                    ? state.placeName
                    : // 取得中(loading)・完了(ready)とも source で出し分ける。
                      // GPS 以外(タップ/検索/URL指定)は「選択地点」。取得中に
                      // 「現在地」と誤表示されるのを防ぐ。
                      (state.kind === "loading" || state.kind === "ready") &&
                        state.source &&
                        state.source !== "gps"
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
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <AlertTriangle size={13} aria-hidden />
                    {state.message}
                  </span>
                )}
              </div>
            </div>
          </div>
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
              <Share2 size={20} aria-hidden />
            </button>
          )}
          {state.kind === "ready" && (
            <Link
              href={`/submit?lat=${state.lat.toFixed(5)}&lon=${state.lon.toFixed(5)}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-amber-50 hover:text-amber-700 sm:h-10 sm:w-10"
              aria-label="この地点で目撃情報を投稿"
              title="この地点で目撃情報を投稿"
            >
              <MapPinPlus size={20} aria-hidden />
            </Link>
          )}
          {(state.kind === "ready" || state.kind === "error") && (
            <button
              onClick={() => setSnap("collapsed")}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 sm:h-10 sm:w-10"
              aria-label="畳む"
              title="畳む (下のバーから引き上げて戻せます)"
            >
              <X size={24} aria-hidden />
            </button>
          )}
        </div>
      </div>

      {showExpandedBody && (
        <div ref={bodyRef} className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-3xl">
            {state.kind === "ready" && (
              <RiskDetails
                state={state}
                location={location}
                fullView={fullView}
                onExpandFull={() => {
                  setSnap("full");
                  setOpen(true);
                }}
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
  location,
  fullView,
  onExpandFull,
}: {
  state: Extract<State, { kind: "ready" }>;
  location: SelectedLocation | null;
  fullView: boolean;
  onExpandFull: () => void;
}) {
  const { nearbyRadiusKm, recent90d } = state;
  const month = new Date().getMonth() + 1;

  return (
    <div className="border-t border-gray-100 text-sm">
      {/* 1. 危険度 verdict + 「最近の目撃」＋「通知」2 列 + 6段階バー。
          通知(GeoNotifyTile)は RiskHero 内で最近の目撃と横並び。中身は LINE 主役 +
          ブラウザ通知が控え。フラグ (NEXT_PUBLIC_LINE_ENTRY_ENABLED /
          NEXT_PUBLIC_GEO_PUSH_ENABLED) で段階公開。 */}
      <RiskHero
        baseLevel={state.baseLevel}
        count90d={state.count90d}
        nearbyRadiusKm={nearbyRadiusKm}
        recentSightingCount={state.sCellCount}
        lastWeekCount={state.lastWeekCount}
        notification={
          isGeoNotifyAvailable() && location ? (
            <GeoNotifyTile
              lat={location.lat}
              lon={location.lon}
              label={state.placeDetail ?? state.placeName ?? location.label}
              radiusKm={10}
            />
          ) : undefined
        }
      />

      {!fullView && (
        <div className="px-4 pb-3 pt-2">
          <button
            type="button"
            onClick={onExpandFull}
            className="flex w-full items-center justify-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-800 shadow-sm hover:bg-amber-100"
          >
            もっと見る
            <ChevronDown size={16} aria-hidden />
          </button>
        </div>
      )}

      {fullView && <>

      {/* 詳細セクション (fullView 時のみ)。基本対策の導線・注意書きは別途準備中のため
          カードには置かない (2026-07-07 ユーザー指示)。 */}

      {/* 直近の目撃 リスト (過去 3 ヶ月・固定窓) */}
      {recent90d.length > 0 && (
        <section className="border-t border-gray-100 px-4 py-3">
          <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-xs sm:text-gray-700">
            <Clock size={16} aria-hidden />
            直近の目撃
          </h3>
          <ul className="space-y-2">
            {recent90d.slice(0, 3).map((r) => {
              const isCitizen = r.sourceKind === "citizen";
              const isNews = !isCitizen && r.isOfficial === false;
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
                          isCitizen
                            ? "border border-violet-300 bg-violet-50 text-violet-800"
                            : isNews
                              ? "border border-amber-300 bg-amber-50 text-amber-800"
                              : "border border-emerald-200 bg-emerald-50 text-emerald-800"
                        }`}
                        title={
                          isCitizen
                            ? "市民投稿（管理者承認済み）"
                            : isNews
                              ? "ニュース報道由来 (未確認)"
                              : "公式情報源"
                        }
                      >
                        {isCitizen ? "市民投稿" : isNews ? "報道" : "公式"}
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

      {/* 4. 月別の出没 (昨年 vs 今年の実測比較) */}
      <section className="border-t border-gray-100 px-4 py-3">
        <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-gray-800 sm:text-xs sm:text-gray-700">
          <ChartColumn size={16} aria-hidden />
          月別の出没
        </h3>
        <MonthlySightingsChart
          monthlyThisYear={state.monthlyThisYear}
          monthlyLastYear={state.monthlyLastYear}
          thisYear={state.histThisYear}
          lastYear={state.histLastYear}
          currentMonth={month - 1}
          nearbyRadiusKm={nearbyRadiusKm}
        />
      </section>

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
          {isPushReleased() && (
            <>
              <span aria-hidden>·</span>
              <Link
                href="/notifications"
                className="hover:text-gray-600 hover:underline"
              >
                通知設定
              </Link>
            </>
          )}
        </nav>
      </footer>

      </>}
    </div>
  );
}
