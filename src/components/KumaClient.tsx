"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Map as LeafletMap } from "leaflet";
import type { KumaRecord } from "@/app/api/kuma/route";
import HeaderNav from "@/components/HeaderNav";
import KumaMap, { type TileStyle } from "@/components/KumaMap";
import PlaceSearch from "@/components/PlaceSearch";
import RiskPanel, {
  type SelectedLocation,
  type AskContext,
} from "@/components/RiskPanel";
import AskBox from "@/components/AskBox";
import TopWeatherBadge from "@/components/TopWeatherBadge";
import SettingsPanel from "@/components/SettingsPanel";
import {
  DEFAULT_LEVEL_THRESHOLDS,
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
  type LevelThresholds,
} from "@/lib/score";
import type { RiskLevel } from "@/lib/types";
import type { GeocodeHit } from "@/app/api/geocode/route";

const LAST_LOCATION_KEY = "kumaWatch.lastLocation";
const LAST_PERIOD_KEY = "kumaWatch.lastPeriodDays";
const TILE_STYLE_KEY = "kumaWatch.tileStyle";
const HEATMAP_OPACITY_KEY = "kumaWatch.heatmapOpacity";
const SMOOTHING_SIGMA_KEY = "kumaWatch.smoothingSigmaKm";
const HALO_OPACITY_KEY = "kumaWatch.haloOpacity";
const LEVEL_THRESHOLDS_KEY = "kumaWatch.levelThresholds";
const DEFAULT_TILE_STYLE: TileStyle = "standard";
const DEFAULT_HEATMAP_OPACITY = 0.5;
const DEFAULT_SMOOTHING_SIGMA_KM = 1; // 微 (3×3) で穴埋めをデフォルト ON
// halo (穴埋め) セルの不透明度倍率。1.0 = habitat と同じ濃さで描画。
// 0.5 などにすると視覚的に薄くなり、カードの危険度バーと色が違って見える原因になるので、
// 既定は 1.0 に揃える (管理者は ?admin=1 から再調整可能)。
const DEFAULT_HALO_OPACITY = 1.0;
const SMOOTHING_SIGMA_OPTIONS = [0, 1, 2, 3, 4] as const;

const RISK_LEGEND_ORDER: RiskLevel[] = [
  "safe",
  "low",
  "moderate",
  "elevated",
  "high",
];

type PeriodOption = { label: string; days: number | null };
const PERIOD_OPTIONS: PeriodOption[] = [
  { label: "1週間", days: 7 },
  { label: "1ヶ月", days: 30 },
  { label: "3ヶ月", days: 90 },
  { label: "1年", days: 365 },
  { label: "全期間", days: null },
];
const DEFAULT_PERIOD_DAYS: number | null = 90;

function computeCutoff(days: number | null): string | null {
  if (days === null) return null;
  const d = new Date(Date.now() - days * 86_400_000);
  return d.toISOString().slice(0, 10);
}

// "2026-05-05" → "5/5"。年は省略してバッジを短く。
function formatLatestDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${Number(m[2])}/${Number(m[3])}`;
}

export default function KumaClient() {
  const [records, setRecords] = useState<KumaRecord[]>([]);
  const [, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedPref] = useState("all");
  const [periodDays, setPeriodDaysRaw] = useState<number | null>(DEFAULT_PERIOD_DAYS);
  const [periodCutoff, setPeriodCutoff] = useState<string | null>(() =>
    typeof window === "undefined" ? null : computeCutoff(DEFAULT_PERIOD_DAYS),
  );
  const setPeriod = useCallback((days: number | null) => {
    setPeriodDaysRaw(days);
    setPeriodCutoff(computeCutoff(days));
  }, []);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showPins, setShowPins] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  // 直近 24h フィルタ: ingestedAt が 24 時間以内のレコードだけに絞る速報モード。
  const [freshOnly, setFreshOnly] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  // 現在地 (GPS) は青丸で別表示。選択地点 (tap/search) とは独立に保持する。
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [sightingCountByMesh, setSightingCountByMesh] = useState<
    Map<string, number> | undefined
  >(undefined);
  const [askContext, setAskContext] = useState<AskContext | null>(null);
  const [copyToast, setCopyToast] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  // 投稿フローからの「地図から選ぶ」モード (mount 時に URL クエリで判定)
  const [pickerMode, setPickerMode] = useState<null | "submit">(null);
  // 観光地 / 市町村ページから ?lat=&lon=&label= 経由で来た場合のラベル。
  // 表示中に「← {label} に戻る」ボタンを出して履歴を戻りやすくする。
  const [returnLabel, setReturnLabel] = useState<string | null>(null);
  const router = useRouter();
  const leafletMapRef = useRef<LeafletMap | null>(null);
  const handleMapReady = useCallback((m: LeafletMap) => {
    leafletMapRef.current = m;
  }, []);
  const handleZoomIn = useCallback(() => {
    leafletMapRef.current?.zoomIn();
  }, []);
  const handleZoomOut = useCallback(() => {
    leafletMapRef.current?.zoomOut();
  }, []);

  /** クリップボードへコピー。選択地点があればその情報、無ければ現在地、
   *  どちらも無ければ URL だけ。成功/失敗をトーストで表示。 */
  const handleShare = useCallback(async () => {
    if (typeof window === "undefined") return;
    const loc = selectedLocation ?? currentLocation;
    if (!loc) {
      setCopyToast("地点を選択するか現在地を取得してください");
      window.setTimeout(() => setCopyToast(null), 2000);
      return;
    }
    const origin = window.location.origin;
    // 表示優先順: 検索ヒットの label > リバースジオコーディング結果 (askContext.place)
    // > GPS の場合「現在地」、それ以外は「選択地点」 (タップで placeName 未取得時)
    const resolvedName =
      selectedLocation?.label ?? askContext?.place ?? undefined;
    const labelText =
      resolvedName ??
      (selectedLocation?.source === "gps" || !selectedLocation
        ? "現在地"
        : "選択地点");
    const params = new URLSearchParams({
      lat: loc.lat.toFixed(5),
      lon: loc.lon.toFixed(5),
    });
    if (resolvedName) params.set("label", resolvedName);
    // /share ルート経由にすることで、SNS のクローラーには地点名入りの OG カードが見える。
    // ユーザーがリンクを開くと /share がトップへリダイレクトする。
    const shareLink = `${origin}/share?${params.toString()}`;
    const title = `${labelText}のクマ警戒レベルをチェック｜KumaWatch`;
    const text =
      `🐻 ${labelText} のクマ警戒レベルを KumaWatch でチェック。\n` +
      `散策・登山前のひと確認に。\n` +
      `${shareLink}\n` +
      `#KumaWatch #クマ警戒レベル`;

    // Web Share API があれば優先 (モバイルで LINE/X/メール 等のシェアシートが開く)。
    // text を渡すと iMessage 等で「本文テキスト + リッチカード」が二重に出るため、
    // OG カードだけが見えるよう title と url だけにする。
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url: shareLink });
        return;
      } catch (e) {
        // ユーザーがキャンセルした場合はそのまま終了
        if ((e as Error)?.name === "AbortError") return;
        // それ以外はクリップボード fallback へ
      }
    }

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${title}\n${text}`);
        setCopyToast("リンクをコピーしました");
      } else {
        setCopyToast("シェアに対応していないブラウザです");
      }
    } catch {
      setCopyToast("シェアに失敗しました");
    }
    window.setTimeout(() => setCopyToast(null), 2000);
  }, [selectedLocation, currentLocation, askContext]);
  // SSR と CSR で同じ初期値を返すため default で初期化し、localStorage からの
  // 復元は mount 後 (useEffect) に行う。これでハイドレーション不整合を避ける。
  const [tileStyle, setTileStyleRaw] = useState<TileStyle>(DEFAULT_TILE_STYLE);
  const [heatmapOpacity, setHeatmapOpacityRaw] = useState<number>(
    DEFAULT_HEATMAP_OPACITY,
  );
  const [smoothingSigmaKm, setSmoothingSigmaKmRaw] = useState<number>(
    DEFAULT_SMOOTHING_SIGMA_KM,
  );
  const [haloOpacity, setHaloOpacityRaw] = useState<number>(DEFAULT_HALO_OPACITY);
  const [levelThresholds, setLevelThresholdsRaw] = useState<LevelThresholds>(
    DEFAULT_LEVEL_THRESHOLDS,
  );
  useEffect(() => {
    try {
      const t = window.localStorage.getItem(TILE_STYLE_KEY);
      if (t === "standard" || t === "satellite" || t === "topo") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- mount-once localStorage restore
        setTileStyleRaw(t);
      }
      const o = window.localStorage.getItem(HEATMAP_OPACITY_KEY);
      const on = o == null ? NaN : Number(o);
      if (Number.isFinite(on) && on >= 0.1 && on <= 0.9) {
        setHeatmapOpacityRaw(on);
      }
      const s = window.localStorage.getItem(SMOOTHING_SIGMA_KEY);
      const sn = s == null ? NaN : Number(s);
      if (
        Number.isFinite(sn) &&
        (SMOOTHING_SIGMA_OPTIONS as readonly number[]).includes(sn)
      ) {
        setSmoothingSigmaKmRaw(sn);
      }
      const h = window.localStorage.getItem(HALO_OPACITY_KEY);
      const hn = h == null ? NaN : Number(h);
      if (Number.isFinite(hn) && hn >= 0 && hn <= 1) {
        setHaloOpacityRaw(hn);
      }
      const lt = window.localStorage.getItem(LEVEL_THRESHOLDS_KEY);
      if (lt) {
        try {
          const parsed = JSON.parse(lt);
          if (
            Array.isArray(parsed) &&
            parsed.length === 4 &&
            parsed.every((n) => typeof n === "number" && Number.isFinite(n))
          ) {
            setLevelThresholdsRaw(parsed as unknown as LevelThresholds);
          }
        } catch {
          /* ignore */
        }
      }
    } catch {
      /* ignore */
    }
  }, []);
  const setTileStyle = useCallback((v: TileStyle) => {
    setTileStyleRaw(v);
    try {
      window.localStorage.setItem(TILE_STYLE_KEY, v);
    } catch {
      /* ignore */
    }
  }, []);
  const setHeatmapOpacity = useCallback((v: number) => {
    setHeatmapOpacityRaw(v);
    try {
      window.localStorage.setItem(HEATMAP_OPACITY_KEY, String(v));
    } catch {
      /* ignore */
    }
  }, []);
  // 管理者向け設定 setter (URL に ?admin=1 を付けるとパネルから操作可能)
  const setSmoothingSigmaKm = useCallback((v: number) => {
    setSmoothingSigmaKmRaw(v);
    try {
      window.localStorage.setItem(SMOOTHING_SIGMA_KEY, String(v));
    } catch {
      /* ignore */
    }
  }, []);
  const setHaloOpacity = useCallback((v: number) => {
    setHaloOpacityRaw(v);
    try {
      window.localStorage.setItem(HALO_OPACITY_KEY, String(v));
    } catch {
      /* ignore */
    }
  }, []);
  const setLevelThresholds = useCallback((v: LevelThresholds) => {
    setLevelThresholdsRaw(v);
    try {
      window.localStorage.setItem(LEVEL_THRESHOLDS_KEY, JSON.stringify(v));
    } catch {
      /* ignore */
    }
  }, []);
  // SSR/CSR で初期値を揃えるため false で開始し、mount 後に URL クエリで判定
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time URL flag check
      setIsAdmin(true);
    }
  }, []);

  const handleMapClick = useCallback((lat: number, lon: number) => {
    setSelectedLocation({ lat, lon, source: "tap" });
  }, []);

  const handleGpsPick = useCallback((loc: SelectedLocation) => {
    setSelectedLocation(loc);
    setCurrentLocation({ lat: loc.lat, lon: loc.lon });
  }, []);

  const handleSearchPick = useCallback((hit: GeocodeHit) => {
    const label =
      [hit.city, hit.district].filter(Boolean).join(" ") ||
      hit.displayName.split(",")[0]?.trim() ||
      undefined;
    setSelectedLocation({
      lat: hit.lat,
      lon: hit.lon,
      source: "search",
      label,
    });
  }, []);

  /** 現在地ボタン: GPS を再取得し、青丸 (currentLocation) と
   *  カード選択地点 (selectedLocation) の両方を更新する。 */
  const requestCurrentLocation = useCallback(() => {
    if (typeof window === "undefined" || !navigator.geolocation) return;
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLoading(false);
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setCurrentLocation({ lat, lon });
        setSelectedLocation({ lat, lon, source: "gps" });
      },
      () => {
        setGpsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
    );
  }, []);

  // 期間チップに連動して /api/kuma を再フェッチ。
  // periodCutoff が null (= 全期間) のときは from 指定なし、上限 25,000 件まで取得。
  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag before external fetch
    setLoading(true);
    // 期間ごとに必要な件数を取る。短期間は軽く、全期間は最大まで。
    const limit =
      periodDays === null
        ? 100000
        : periodDays >= 365
          ? 50000
          : periodDays >= 90
            ? 15000
            : periodDays >= 30
              ? 5000
              : 2000;
    const params = new URLSearchParams({ limit: String(limit) });
    if (periodCutoff) params.set("from", periodCutoff);
    fetch(`/api/kuma?${params.toString()}`)
      .then((r) => r.json())
      .then((data: { records?: KumaRecord[]; total?: number }) => {
        if (cancelled) return;
        setRecords(Array.isArray(data.records) ? data.records : []);
        setTotal(typeof data.total === "number" ? data.total : 0);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [periodCutoff, periodDays]);

  // sessionStorage 復元: /place などから戻ってきたときに選択地点と期間を復活させる
  // ただし URL クエリ (?lat=&lon=) があればそちらを最優先にする (シェアリンク経由)
  const restoredRef = useRef(false);
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    if (typeof window === "undefined") return;
    try {
      // 1. URL クエリ優先 (シェアリンク / 投稿ピッカー)
      const params = new URLSearchParams(window.location.search);
      // /submit から「地図から選ぶ」で来た場合はピッカーモード ON
      if (params.get("pick") === "submit") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- enabling picker from URL
        setPickerMode("submit");
      }
      const latParam = params.get("lat");
      const lonParam = params.get("lon");
      const qLat =
        latParam !== null && latParam !== "" ? Number(latParam) : NaN;
      const qLon =
        lonParam !== null && lonParam !== "" ? Number(lonParam) : NaN;
      const qLabel = params.get("label") ?? undefined;
      const fromUrl =
        Number.isFinite(qLat) &&
        Number.isFinite(qLon) &&
        qLat >= -90 &&
        qLat <= 90 &&
        qLon >= -180 &&
        qLon <= 180;
      if (fromUrl) {
        setSelectedLocation({
          lat: qLat,
          lon: qLon,
          source: "url",
          label: qLabel,
        });
        // URL に label がある = 観光地・市町村ページ等から戻れる経路。戻るボタンを出す。
        if (qLabel) setReturnLabel(qLabel);
        return;
      }

      // 2. URL に無ければ sessionStorage から復元
      const rawLoc = window.sessionStorage.getItem(LAST_LOCATION_KEY);
      if (rawLoc) {
        const parsed = JSON.parse(rawLoc) as SelectedLocation;
        if (
          parsed &&
          typeof parsed.lat === "number" &&
          typeof parsed.lon === "number"
        ) {
          setSelectedLocation(parsed);
        }
      }
      const rawPeriod = window.sessionStorage.getItem(LAST_PERIOD_KEY);
      if (rawPeriod !== null) {
        const val = rawPeriod === "null" ? null : Number(rawPeriod);
        if (val === null || Number.isFinite(val)) setPeriod(val);
      }
    } catch {
      // ignore storage errors
    }
  }, [setPeriod]);

  // sessionStorage 保存: 変化を追って保存する
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (selectedLocation) {
        window.sessionStorage.setItem(
          LAST_LOCATION_KEY,
          JSON.stringify(selectedLocation),
        );
      } else {
        window.sessionStorage.removeItem(LAST_LOCATION_KEY);
      }
    } catch {
      // ignore
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(
        LAST_PERIOD_KEY,
        periodDays === null ? "null" : String(periodDays),
      );
    } catch {
      // ignore
    }
  }, [periodDays]);

  // GPS 自動取得: ページを開いた時に一度だけ走らせる。
  // currentLocation (青丸) は常に更新、selectedLocation (赤ピン) は
  // sessionStorage に復元があればそちらを優先。
  // ユーザーが GPS 解決前にマップをタップ/検索したときに「いきなり現在地に
  // 戻る」現象を防ぐため、最新の selectedLocation を ref で参照し、
  // 既に選択がある場合は青丸 (currentLocation) のみ更新する。
  const selectedLocationRef = useRef<SelectedLocation | null>(null);
  useEffect(() => {
    selectedLocationRef.current = selectedLocation;
  }, [selectedLocation]);
  const autoGpsRanRef = useRef(false);
  useEffect(() => {
    if (autoGpsRanRef.current) return;
    if (typeof window === "undefined") return;
    if (!navigator.geolocation) return;
    autoGpsRanRef.current = true;
    // URL に lat/lon が乗っていれば、観光地ページ等から「地図で見る」遷移してきた
    // ケース。GPS 解決のタイミングで selectedLocation を ref 経由で確認しているが、
    // React の再レンダ前に getCurrentPosition のキャッシュ結果が返ると ref がまだ
    // null で観光地座標が現在地に上書きされてしまう。URL 段階で抑制すれば確実。
    // currentLocation (青丸) も用途的に観光地遷移時には不要なので一括スキップ。
    try {
      const params = new URLSearchParams(window.location.search);
      const hasLat = params.get("lat");
      const hasLon = params.get("lon");
      if (hasLat !== null && hasLon !== null) return;
    } catch {
      // URL アクセス不可は無視して既存挙動 (GPS 自動取得) に倒す
    }
    let cancelled = false;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (cancelled) return;
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setCurrentLocation({ lat, lon });
        // GPS 解決時点で既にユーザーが地点を選んでいたら上書きしない。
        // (タップ・検索・URL 復元・sessionStorage 復元のいずれも含む)
        if (!selectedLocationRef.current) {
          setSelectedLocation({ lat, lon, source: "gps" });
        }
      },
      () => {
        // permission denied or timeout — silent fallback
      },
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 300000 },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  // C1: 30 秒間隔で /api/kuma の最新分を再フェッチし、新着があればトースト + ピン差分追加。
  // タブ非表示中はポーリングを停止し、再表示時に即時 1 回チェック。
  // sharp9110-flash が 1 分ごと、news-flash が 5 分ごとにデータを入れるため、
  // クライアント側 30 秒ポーリングで「最大 30 秒前」の事案までほぼ反映される。
  useEffect(() => {
    if (typeof window === "undefined") return;
    const POLL_MS = 30 * 1000;
    let timer: number | null = null;

    async function checkForNew() {
      // 既存 records と同じ条件で取得
      const limit =
        periodDays === null
          ? 100000
          : periodDays >= 365
            ? 50000
            : periodDays >= 90
              ? 15000
              : periodDays >= 30
                ? 5000
                : 2000;
      const params = new URLSearchParams({ limit: String(limit) });
      if (periodCutoff) params.set("from", periodCutoff);
      try {
        const r = await fetch(`/api/kuma?${params.toString()}`);
        if (!r.ok) return;
        const data = (await r.json()) as { records?: KumaRecord[] };
        const next = Array.isArray(data.records) ? data.records : [];
        // 既存にない id を新着として抽出
        const known = new Set(records.map((rec) => rec.id));
        const fresh = next.filter((rec) => !known.has(rec.id));
        if (fresh.length > 0) {
          setRecords(next);
          setCopyToast(`新着 ${fresh.length} 件`);
          window.setTimeout(() => setCopyToast(null), 3000);
        }
      } catch {
        /* ignore */
      }
    }

    function start() {
      stop();
      timer = window.setInterval(() => {
        if (document.visibilityState === "visible") checkForNew();
      }, POLL_MS);
    }
    function stop() {
      if (timer != null) {
        window.clearInterval(timer);
        timer = null;
      }
    }
    function onVis() {
      if (document.visibilityState === "visible") {
        // 復帰時は即座に 1 回チェックしてからポーリング再開
        checkForNew();
        start();
      } else {
        stop();
      }
    }

    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
    // records の中身ごとに再購読すると無限ループになるので、長さだけを依存に。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [periodCutoff, periodDays, records.length]);

  // 過去 1 年の目撃をメッシュ別に集計したマップ。
  // ヒートマップとカード両方で「危険度の格上げ」に使い、視覚と数値を完全一致させる。
  useEffect(() => {
    let cancelled = false;
    fetch("/api/sighting-cells")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { counts?: Record<string, number> } | null) => {
        if (cancelled || !data?.counts) return;
        const map = new Map<string, number>();
        for (const [code, n] of Object.entries(data.counts)) {
          if (typeof n === "number" && n > 0) map.set(code, n);
        }
        setSightingCountByMesh(map);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!showPins) return [];
    const FRESH_MS = 24 * 60 * 60 * 1000;
    const cutoffMs = Date.now() - FRESH_MS;
    return records.filter((r) => {
      const prefOk =
        selectedPref === "all" || r.prefectureName === selectedPref;
      const periodOk = !periodCutoff || r.date >= periodCutoff;
      const freshOk =
        !freshOnly ||
        (typeof r.ingestedAt === "number" && r.ingestedAt >= cutoffMs);
      return prefOk && periodOk && freshOk;
    });
  }, [records, selectedPref, periodCutoff, showPins, freshOnly]);

  // データ更新日: 最新の事案発生日を「データの新しさ」の指標として算出する。
  // 期間フィルタや件数表示は意図的に持たず、「いつ更新されたか」だけを伝える。
  const latestDate = useMemo(() => {
    if (!records.length) return null;
    const todayIso = new Date().toISOString().slice(0, 10);
    let latest: string | null = null;
    for (const r of records) {
      // 未来日付の上流バグレコードは除外。/api/kuma 側でも弾いているが二重防衛。
      if (r.date > todayIso) continue;
      if (!latest || r.date > latest) latest = r.date;
    }
    return latest;
  }, [records]);

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden">
      <header className="relative z-[1100] flex shrink-0 items-center justify-between gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm">
        <div className="flex min-w-0 shrink items-center gap-2">
          <Link
            href="/about"
            className="flex items-center gap-2"
            aria-label="くまウォッチについて"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="KumaWatch"
              className="block h-7 w-auto sm:h-8"
            />
            <span className="truncate text-sm font-semibold tracking-tight text-stone-900 sm:text-base">
              くまウォッチ
            </span>
          </Link>
          <a
            href="https://www.research-coordinate.co.jp/labs/vet/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[11px] text-stone-500 hover:text-stone-700 sm:text-xs"
            aria-label="獣医工学ラボ (新しいタブで開く)"
          >
            by{" "}
            <span className="font-medium text-stone-700">獣医工学ラボ</span>
          </a>
        </div>
        <HeaderNav />
      </header>

      {/* 表示設定 — flex-1 で要素が横幅を使い切るように分配 */}
      <div className="relative z-[1060] shrink-0 border-b border-black/8 bg-white px-2 py-2">
        <div className="flex items-stretch gap-2 text-sm sm:text-xs">
          {/* 出没ピン (表示 ON/OFF + 期間セレクト + 件数) — 横幅を取って広がる */}
          <div className="flex flex-1 items-center overflow-hidden rounded-full border border-stone-200 bg-stone-50">
            <label className="flex shrink-0 items-center gap-1.5 px-2.5 py-1.5 font-medium text-stone-700">
              <input
                type="checkbox"
                checked={showPins}
                onChange={(e) => setShowPins(e.target.checked)}
                className="h-4 w-4 accent-amber-600"
              />
              出没ピン
            </label>
            <select
              value={periodDays ?? ""}
              onChange={(e) =>
                setPeriod(e.target.value === "" ? null : Number(e.target.value))
              }
              disabled={!showPins}
              className="flex-1 border-l border-stone-200 bg-white py-1.5 pl-2 pr-1 text-stone-700 disabled:opacity-40"
              aria-label="期間"
            >
              {PERIOD_OPTIONS.map((p) => (
                <option key={p.label} value={p.days ?? ""}>
                  {p.label}
                </option>
              ))}
            </select>
            <span
              className="shrink-0 border-l border-stone-200 bg-white px-2.5 py-1.5 tabular-nums text-stone-600"
              aria-label="該当件数"
              suppressHydrationWarning
            >
              {filtered.length.toLocaleString()}件
            </span>
          </div>

          {/* 直近 24h フィルタ — 取り込みから 24h 以内の事案だけを表示する速報モード。 */}
          <label
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 font-medium text-stone-700"
            title="直近 24 時間以内に取り込んだ事案のみ表示"
          >
            <input
              type="checkbox"
              checked={freshOnly}
              onChange={(e) => setFreshOnly(e.target.checked)}
              className="h-4 w-4 accent-amber-600"
            />
            直近24h
          </label>

          {/* 表示設定メニュー: 警戒レベル / 凡例 / 地図種類 を集約。
              スマホで個別ボタンが横にあふれて出没ピン期間設定が見切れる問題を
              構造的に解決するため、3 つを 1 つの popover にまとめている。 */}
          <details className="group relative shrink-0">
            <summary
              className="flex cursor-pointer items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 font-medium text-stone-700 marker:hidden [&::-webkit-details-marker]:hidden"
              aria-label="表示設定を開く"
              title="表示設定"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="hidden sm:inline">表示</span>
              <span aria-hidden className="text-[10px] text-stone-400 group-open:rotate-180">
                ▼
              </span>
            </summary>
            {/* popover 本体: 右端揃え、絶対配置 */}
            <div className="absolute right-0 top-full z-[1100] mt-1.5 w-60 rounded-xl border border-stone-200 bg-white p-3 shadow-lg">
              <label className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1.5 text-sm text-stone-800 hover:bg-stone-50">
                <input
                  type="checkbox"
                  checked={showHeatmap}
                  onChange={(e) => setShowHeatmap(e.target.checked)}
                  className="h-4 w-4 accent-amber-600"
                />
                警戒レベル（ヒートマップ）
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1.5 text-sm text-stone-800 hover:bg-stone-50">
                <input
                  type="checkbox"
                  checked={showLegend}
                  onChange={(e) => setShowLegend(e.target.checked)}
                  className="h-4 w-4 accent-amber-600"
                />
                凡例を表示
              </label>
              <div className="mt-2 border-t border-stone-100 pt-2">
                <div className="mb-1.5 px-1.5 text-xs font-medium text-stone-500">
                  地図の種類
                </div>
                <div className="flex gap-1">
                  {(
                    [
                      { v: "standard", label: "標準" },
                      { v: "satellite", label: "衛星" },
                      { v: "topo", label: "地形" },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setTileStyle(opt.v as TileStyle)}
                      className={`flex-1 rounded-md px-2 py-1.5 text-xs font-semibold ${
                        tileStyle === opt.v
                          ? "bg-amber-100 text-amber-900"
                          : "bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                      aria-pressed={tileStyle === opt.v}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="relative flex-1 min-h-0">
        {/* 検索バーを地図上にフロート配置。ピッカーモード中はバナーと干渉、
            観光地・市町村から戻る経路 (returnLabel) のときは戻るボタンと干渉するので非表示。 */}
        {!pickerMode && !returnLabel && (
          <div className="pointer-events-none absolute inset-x-3 top-3 z-[950] flex">
            <div className="pointer-events-auto w-full max-w-2xl rounded-full bg-white shadow-md ring-1 ring-black/5">
              <PlaceSearch compact onPick={handleSearchPick} />
            </div>
          </div>
        )}

        {/* データ更新日: 検索バーの真下、地図左上に控えめな chip で常時表示。
            「いつ更新されたか」のシグナルを地図のコンテキスト内に置く。 */}
        {!loading && !pickerMode && latestDate && (
          <div
            className="pointer-events-none absolute left-3 top-16 z-[900] flex items-baseline gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] text-stone-600 shadow-sm backdrop-blur sm:text-xs"
            title={`最新事案: ${latestDate}`}
          >
            <span className="text-stone-400">更新</span>
            <span className="tabular-nums font-semibold text-stone-800">
              {formatLatestDate(latestDate)}
            </span>
          </div>
        )}

        <KumaMap
          records={filtered}
          showHeatmap={showHeatmap}
          heatmapOpacity={heatmapOpacity}
          smoothingSigmaKm={smoothingSigmaKm}
          haloOpacity={haloOpacity}
          levelThresholds={levelThresholds}
          sightingCountByMesh={sightingCountByMesh}
          tileStyle={tileStyle}
          selectedLocation={selectedLocation}
          currentLocation={currentLocation}
          onMapClick={handleMapClick}
          onMapReady={handleMapReady}
        />

        {/* 観光地・市町村ページから来たときの「戻る」ボタン (検索バー下にフロート)。
            ブラウザ戻るより目立つ位置に置く。 */}
        {returnLabel && !pickerMode && (
          <div className="pointer-events-auto absolute left-3 top-3 z-[960] sm:top-3">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && window.history.length > 1) {
                  window.history.back();
                } else {
                  router.push("/spot");
                }
              }}
              className="flex h-10 items-center gap-1.5 rounded-full bg-white px-3.5 text-sm font-semibold text-stone-800 shadow-md ring-1 ring-stone-200 hover:bg-stone-50"
              aria-label={`${returnLabel} のページに戻る`}
            >
              <span aria-hidden>←</span>
              <span className="max-w-[10rem] truncate">{returnLabel}に戻る</span>
            </button>
          </div>
        )}

        {/* 投稿ピッカーモード時のバナー (地図上部・固定) */}
        {pickerMode === "submit" && (
          <div className="pointer-events-auto absolute inset-x-3 top-3 z-[1000] flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50/95 px-3 py-2 shadow-lg backdrop-blur">
            <div className="flex-1 text-xs text-amber-900">
              <div className="font-semibold">📍 投稿地点を選んでください</div>
              <div className="text-[11px] text-amber-700">
                {selectedLocation
                  ? `${selectedLocation.lat.toFixed(5)}, ${selectedLocation.lon.toFixed(5)} を選択中`
                  : "地図をタップで選択 / 検索バーから探す"}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setPickerMode(null);
                router.push("/submit");
              }}
              className="rounded-full border border-amber-300 bg-white px-3 py-1 text-[11px] font-medium text-amber-800 hover:bg-amber-100"
            >
              キャンセル
            </button>
            <button
              type="button"
              disabled={!selectedLocation}
              onClick={() => {
                if (!selectedLocation) return;
                const params = new URLSearchParams({
                  lat: selectedLocation.lat.toFixed(5),
                  lon: selectedLocation.lon.toFixed(5),
                  fromPicker: "1",
                });
                setPickerMode(null);
                router.push(`/submit?${params.toString()}`);
              }}
              className="rounded-full bg-amber-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-amber-700 disabled:opacity-40"
            >
              この地点に決定
            </button>
          </div>
        )}

        {/* 地図右上: 天気バッジ (現在地 or 選択地点) */}
        <TopWeatherBadge
          lat={selectedLocation?.lat ?? currentLocation?.lat ?? null}
          lon={selectedLocation?.lon ?? currentLocation?.lon ?? null}
        />

        {/* 右端縦スタック: 現在地 / ズーム (カード上端に合わせて配置)。
            地図スタイル切替はツールバーの「表示」メニューに集約済み。 */}
        <div className="absolute right-3 bottom-[calc(41vh+0.75rem)] z-[900] flex flex-col gap-2.5">
          <button
            type="button"
            onClick={requestCurrentLocation}
            disabled={gpsLoading}
            className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-50 disabled:opacity-60"
            style={{ height: "3.25rem", width: "3.25rem" }}
            aria-label="現在地を取得"
            title="現在地を取得"
          >
            {gpsLoading ? (
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-amber-600" />
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              </svg>
            )}
          </button>
          <div className="flex flex-col overflow-hidden rounded-full bg-white shadow-lg">
            <button
              type="button"
              onClick={handleZoomIn}
              className="flex items-center justify-center text-2xl font-light text-gray-700 hover:bg-gray-50"
              style={{ height: "3.25rem", width: "3.25rem" }}
              aria-label="拡大"
              title="拡大"
            >
              +
            </button>
            <div className="mx-2 h-px bg-gray-200" />
            <button
              type="button"
              onClick={handleZoomOut}
              className="flex items-center justify-center text-2xl font-light text-gray-700 hover:bg-gray-50"
              style={{ height: "3.25rem", width: "3.25rem" }}
              aria-label="縮小"
              title="縮小"
            >
              −
            </button>
          </div>
        </div>

        {/* 管理者用詳細設定 (?admin=1 で有効化) */}
        {isAdmin && (
          <div className="pointer-events-auto absolute left-3 top-3 z-[1000] max-h-[80vh] w-72 overflow-y-auto rounded-2xl border border-stone-200 bg-white/95 p-3 shadow-xl backdrop-blur">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800">
                ⚙ 管理者設定
              </span>
              <button
                type="button"
                onClick={() => setIsAdmin(false)}
                className="text-xs text-stone-500 hover:text-stone-900"
              >
                閉じる
              </button>
            </div>
            <SettingsPanel
              tileStyle={tileStyle}
              heatmapOpacity={heatmapOpacity}
              smoothingSigmaKm={smoothingSigmaKm}
              haloOpacity={haloOpacity}
              levelThresholds={levelThresholds}
              onTileStyleChange={setTileStyle}
              onHeatmapOpacityChange={setHeatmapOpacity}
              onSmoothingSigmaKmChange={setSmoothingSigmaKm}
              onHaloOpacityChange={setHaloOpacity}
              onLevelThresholdsChange={setLevelThresholds}
            />
          </div>
        )}

        {/* コピー結果トースト */}
        {copyToast && (
          <div className="pointer-events-none absolute left-1/2 top-16 z-[1100] -translate-x-1/2 rounded-full bg-gray-900/90 px-4 py-2 text-xs text-white shadow-lg">
            {copyToast}
          </div>
        )}

        {/* AI 質問チャットのモーダルオーバーレイ */}
        {showChat && (
          <div
            className="absolute inset-0 z-[1200] flex items-end justify-center bg-black/30 sm:items-center"
            onClick={() => setShowChat(false)}
            role="presentation"
          >
            <div
              className="pointer-events-auto w-full max-w-md rounded-t-2xl bg-white p-4 shadow-xl sm:max-w-lg sm:rounded-2xl"
              style={{ maxHeight: "85vh", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="AI に質問"
            >
              <div className="mb-3 flex items-center gap-2">
                <Image
                  src="/bear-face.png"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden
                  style={{ width: "1.75rem", height: "auto" }}
                />
                <span className="text-lg font-semibold text-gray-900">
                  AI に質問
                </span>
                {askContext?.place ? (
                  <span className="truncate rounded-full bg-amber-50 px-2.5 py-1 text-sm text-amber-800">
                    {askContext.place}
                    {askContext.level
                      ? ` / 警戒レベル ${RISK_LEVEL_LABEL[askContext.level as RiskLevel] ?? askContext.level}`
                      : ""}
                  </span>
                ) : (
                  selectedLocation && (
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-sm text-amber-800">
                      選択中: {selectedLocation.lat.toFixed(3)},{" "}
                      {selectedLocation.lon.toFixed(3)}
                    </span>
                  )
                )}
                <button
                  type="button"
                  onClick={() => setShowChat(false)}
                  className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="閉じる"
                >
                  ×
                </button>
              </div>
              <AskBox
                context={
                  askContext ??
                  (selectedLocation
                    ? {
                        lat: selectedLocation.lat,
                        lon: selectedLocation.lon,
                      }
                    : undefined)
                }
              />
            </div>
          </div>
        )}

        {loading && (
          <div className="pointer-events-none absolute left-1/2 top-16 z-[900] -translate-x-1/2 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs text-gray-700 shadow backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            出没データ取得中...
          </div>
        )}



        {showLegend && (
          <div className="pointer-events-auto absolute bottom-[calc(41vh+0.75rem)] left-3 z-[900] w-48 rounded-xl border border-black/8 bg-white/95 p-3 text-sm text-gray-700 shadow backdrop-blur">
            <div className="mb-2 flex items-center justify-between">
              <div className="font-semibold text-gray-800">凡例</div>
              <button
                onClick={() => setShowLegend(false)}
                className="text-gray-400 hover:text-gray-900"
                aria-label="凡例を閉じる"
              >
                ×
              </button>
            </div>
            <div className="mb-2">
              <div className="mb-1 text-xs text-gray-500">ピン</div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-500" />1頭（公式）
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />2頭以上（公式）
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />報道由来
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-500 ring-2 ring-blue-700" />24時間以内の新着
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs text-gray-500">
                警戒レベルヒートマップ
              </div>
              {RISK_LEGEND_ORDER.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-sm"
                    style={{
                      background: RISK_LEVEL_COLOR[level],
                      opacity: 0.7,
                    }}
                  />
                  {RISK_LEVEL_LABEL[level]}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 跳ね上げ式カード: map 領域に絶対配置 (下から) */}
        <RiskPanel
          location={selectedLocation}
          periodDays={periodDays}
          records={records}
          onPickGps={handleGpsPick}
          smoothingSigmaKm={smoothingSigmaKm}
          levelThresholds={levelThresholds}
          sightingCountByMesh={sightingCountByMesh}
          onShare={handleShare}
          onAskAi={() => setShowChat(true)}
          onAskContextChange={setAskContext}
        />
      </div>

    </div>
  );
}
