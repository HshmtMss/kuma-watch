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
import { MapPin, Settings, CalendarDays, Bell } from "lucide-react";
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
import SettingsPanel from "@/components/SettingsPanel";
import GeoNotifyTile, {
  isGeoNotifyAvailable,
} from "@/components/GeoNotifyTile";
import {
  DEFAULT_LEVEL_THRESHOLDS,
  RISK_LEVEL_LABEL,
  type LevelThresholds,
} from "@/lib/score";
import type { RiskLevel } from "@/lib/types";
import type { GeocodeHit } from "@/app/api/geocode/route";
import { jstToday } from "@/lib/jst-date";

// 地図右下スタックの常設「通知」ボタン (①)。地点未選択でも押せる通知入口。
// 既定オン。隠したいときだけ NEXT_PUBLIC_MAP_NOTIFY_FAB=false を設定する。
// 実際に何を出すか (LINE / ブラウザ通知) は GeoNotifyTile が isGeoNotifyAvailable
// で決めるので、ここは「入口ボタンを見せるか」だけを持つ。
const MAP_NOTIFY_FAB_ENABLED =
  process.env.NEXT_PUBLIC_MAP_NOTIFY_FAB !== "false";

const LAST_LOCATION_KEY = "kumaWatch.lastLocation";
const LAST_PERIOD_KEY = "kumaWatch.lastPeriodDays";
const TILE_STYLE_KEY = "kumaWatch.tileStyle";
const HEATMAP_OPACITY_KEY = "kumaWatch.heatmapOpacity";
const SMOOTHING_SIGMA_KEY = "kumaWatch.smoothingSigmaKm";
const HALO_OPACITY_KEY = "kumaWatch.haloOpacity";
const LEVEL_THRESHOLDS_KEY = "kumaWatch.levelThresholds";
const DEFAULT_TILE_STYLE: TileStyle = "standard";
const DEFAULT_HEATMAP_OPACITY = 0.4; // 0.5→0.4 に低減 (恐怖感の緩和・2026-06)
const DEFAULT_SMOOTHING_SIGMA_KM = 1; // 微 (3×3) で穴埋めをデフォルト ON
// halo (穴埋め) セルの不透明度倍率。1.0 = habitat と同じ濃さで描画。
// 0.5 などにすると視覚的に薄くなり、カードの危険度バーと色が違って見える原因になるので、
// 既定は 1.0 に揃える (管理者は ?admin=1 から再調整可能)。
const DEFAULT_HALO_OPACITY = 1.0;
const SMOOTHING_SIGMA_OPTIONS = [0, 1, 2, 3, 4] as const;

type PeriodOption = { label: string; days: number | null };
// 「直近◯◯」= いつからの出没を地図に出すか (期間フィルタ) を一目で伝える文言。
const PERIOD_OPTIONS: PeriodOption[] = [
  { label: "直近1週間", days: 7 },
  { label: "直近1ヶ月", days: 30 },
  { label: "直近3ヶ月", days: 90 },
  { label: "直近1年", days: 365 },
  { label: "全期間", days: null },
];
const DEFAULT_PERIOD_DAYS: number | null = 90;

// 期間フィルタの下限日 (これ以降の出没日を表示)。
// JST カレンダー日で days 日前を求める。地図の青リング (freshness.eventDaysAgo) が
// JST カレンダー日差で判定しているため、ここも JST 基準に揃える。UTC でスライスして
// いた旧実装だと境界が 1 日ずれ、「直近1週間フィルタを通るのに青リングが付かない
// ピン」が出ていた。
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
function computeCutoff(days: number | null): string | null {
  if (days === null) return null;
  const d = new Date(Date.now() + JST_OFFSET_MS - days * 86_400_000);
  return d.toISOString().slice(0, 10);
}

// 期間ごとに /api/kuma から取得する件数の上限。短期間は軽く、全期間は最大まで。
function limitForPeriod(days: number | null): number {
  return days === null
    ? 100000
    : days >= 365
      ? 50000
      : days >= 90
        ? 15000
        : days >= 30
          ? 5000
          : 2000;
}

type KumaSignature = { matched: number; latestIngestedAt: number };

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
  // 常設「通知」ボタンで開く、この付近の出没通知ポップオーバー (①)。
  // 対象地点はボタン押下時に確定させて state に持つ (地図中心の読み取りを
  // render 中に行わないため — ref は render 中に読まない)。
  const [showNotify, setShowNotify] = useState(false);
  const [notifyPoint, setNotifyPoint] = useState<{
    lat: number;
    lon: number;
    label?: string;
  } | null>(null);
  // 投稿フローからの「地図から選ぶ」モード (mount 時に URL クエリで判定)
  const [pickerMode, setPickerMode] = useState<null | "submit">(null);
  // useCallback([]) な検索/GPS ハンドラから最新の pickerMode を読むための ref。
  const pickerModeRef = useRef<null | "submit">(null);
  // 観光地 / 市町村ページから「地図で見る」で来た場合の「← {label} に戻る」。
  // 出すのは戻り先が明示された (?from=<内部パス>) ときだけ。通知/共有リンクは
  // label はあっても from が無いので出さない (戻り先が存在しないため)。
  const [returnLabel, setReturnLabel] = useState<string | null>(null);
  const [returnHref, setReturnHref] = useState<string | null>(null);
  const router = useRouter();
  const leafletMapRef = useRef<LeafletMap | null>(null);
  // ポーリング用: 現在の records と「最後に確認したデータ署名」を ref で保持する。
  // これで 30 秒ポーリングの effect が records 変化のたびに再購読するのを防ぐ。
  const recordsRef = useRef<KumaRecord[]>(records);
  const lastSigRef = useRef<KumaSignature | null>(null);
  useEffect(() => {
    recordsRef.current = records;
  }, [records]);
  useEffect(() => {
    pickerModeRef.current = pickerMode;
  }, [pickerMode]);
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
    // 共有 URL は lat/lon だけにして短く保つ (地名 label は載せない)。
    // SNS クローラー向けの地点名入り OG カードは /share 側が lat/lon から
    // 逆ジオコーディングして生成する。開くと /share がトップへリダイレクト。
    const params = new URLSearchParams({
      lat: loc.lat.toFixed(5),
      lon: loc.lon.toFixed(5),
    });
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
        // mount 時に localStorage から 1 度だけ復元する初期化 (意図的な setState)。
        // eslint-disable-next-line react-hooks/set-state-in-effect
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
      // URL の ?admin=1 を mount 時に 1 度だけ判定する初期化 (意図的な setState)。
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  // 常設「通知」ボタン (①)。対象地点は 選択地点 → 現在地 → 地図中心 の順で確定。
  // 地図中心 (ref) はここ (イベントハンドラ) でだけ読む。
  const openNotify = useCallback(() => {
    // 1. 座標を確定する。
    const base = selectedLocation
      ? { lat: selectedLocation.lat, lon: selectedLocation.lon }
      : currentLocation
        ? { lat: currentLocation.lat, lon: currentLocation.lon }
        : (() => {
            const c = leafletMapRef.current?.getCenter();
            return c ? { lat: c.lat, lon: c.lng } : null;
          })();
    if (!base) {
      setNotifyPoint(null);
      setShowNotify(true);
      return;
    }
    // 2. 既に分かっている地名 (タップで解決済み / カードの逆ジオ結果) で即オープン。
    const known = selectedLocation?.label ?? askContext?.place ?? undefined;
    setNotifyPoint({ ...base, label: known });
    setShowNotify(true);
    // 3. 正確な地名 (県+市+町丁目) を逆ジオで補完し、取得できたら差し替える。
    //    「登録地点」のような無名フォールバックで登録されるのを防ぐ (RiskPanel の
    //    placeDetail と同じ /api/geocode を使い、カードの表記とそろえる)。
    (async () => {
      try {
        const res = await fetch(
          `/api/geocode?lat=${base.lat.toFixed(5)}&lon=${base.lon.toFixed(5)}`,
          { signal: AbortSignal.timeout(4000) },
        );
        if (!res.ok) return;
        const j = (await res.json()) as {
          result?: { prefecture?: string; city?: string; district?: string };
        };
        const h = j.result;
        const name = h
          ? [h.prefecture, h.city, h.district].filter(Boolean).join(" ")
          : "";
        if (!name) return;
        // 対象地点が変わっていなければ差し替える (連打・地点変更のレース対策)。
        setNotifyPoint((prev) =>
          prev && prev.lat === base.lat && prev.lon === base.lon
            ? { ...prev, label: name }
            : prev,
        );
      } catch {
        // 取得失敗時は known / フォールバックのまま (致命的でない)。
      }
    })();
  }, [selectedLocation, currentLocation, askContext]);

  const handleSearchPick = useCallback((hit: GeocodeHit) => {
    // 投稿ピッカー(十字ピン)中は、選択マーカーを出さず地図中心だけ移動する。
    // 決定時に地図中心を採用するので、選択状態は持たなくてよい。
    if (pickerModeRef.current === "submit") {
      const m = leafletMapRef.current;
      if (m) m.setView([hit.lat, hit.lon], Math.max(m.getZoom(), 14));
      return;
    }
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
        // ピッカー中は選択マーカーを出さず、地図中心を現在地へ寄せるだけ。
        if (pickerModeRef.current === "submit") {
          const m = leafletMapRef.current;
          if (m) m.setView([lat, lon], Math.max(m.getZoom(), 14));
          return;
        }
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
    // ローディング表示の開始 (依存変更時の意図的な setState)。
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    // 期間が変わったらポーリングの基準署名を一旦破棄する (新基準は下で確立)。
    lastSigRef.current = null;
    const params = new URLSearchParams({
      limit: String(limitForPeriod(periodDays)),
      // 地図描画に必要な最小フィールドだけ取得 (comment 等の長文を省いて軽量化)。
      // ポップアップの詳細はピンをタップした時に /api/kuma/[id] から取る。
      lite: "1",
    });
    if (periodCutoff) params.set("from", periodCutoff);
    fetch(`/api/kuma?${params.toString()}`)
      .then((r) => r.json())
      .then(
        (data: {
          records?: KumaRecord[];
          total?: number;
          matched?: number;
          latestIngestedAt?: number;
        }) => {
          if (cancelled) return;
          const next = Array.isArray(data.records) ? data.records : [];
          setRecords(next);
          setTotal(typeof data.total === "number" ? data.total : 0);
          // ポーリングの基準署名を確立 (/api/kuma/latest と同じ算出基準)。
          lastSigRef.current = {
            matched: typeof data.matched === "number" ? data.matched : next.length,
            latestIngestedAt:
              typeof data.latestIngestedAt === "number"
                ? data.latestIngestedAt
                : 0,
          };
          setLoading(false);
        },
      )
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
        // /submit からの「地図から選ぶ」遷移を mount 時に判定する初期化 (意図的)。
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPickerMode("submit");
      }
      const latParam = params.get("lat");
      const lonParam = params.get("lon");
      const qLat =
        latParam !== null && latParam !== "" ? Number(latParam) : NaN;
      const qLon =
        lonParam !== null && lonParam !== "" ? Number(lonParam) : NaN;
      const qLabel = params.get("label") ?? undefined;
      // 内部ページ (/place・/spot) の「地図で見る」だけが付ける戻り先パス。
      const qFrom = params.get("from") ?? undefined;
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
        // from=<内部パス> があるときだけ「戻る」を出す。通知・共有リンクは
        // label だけで from が無いので出さない (戻り先が無いのに「戻る」は誤り)。
        if (qFrom && qFrom.startsWith("/")) {
          setReturnHref(qFrom);
          setReturnLabel(qLabel ?? "前のページ");
        }
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

  // C1: 30 秒間隔で「軽量サマリ」(/api/kuma/latest) を確認し、件数や最新取り込み
  // 時刻 (署名) が変化したときだけ本体 (/api/kuma) を取り直す。これにより、毎回
  // 最大 10 万件の JSON を再 DL せずに新着検知できる (クライアント帯域を大幅削減)。
  // タブ非表示中はポーリングを停止し、再表示時に即時 1 回チェック。
  useEffect(() => {
    if (typeof window === "undefined") return;
    const POLL_MS = 30 * 1000;
    let timer: number | null = null;

    async function checkForNew() {
      // 1. 軽量サマリで署名を取得
      const sigParams = new URLSearchParams();
      if (periodCutoff) sigParams.set("from", periodCutoff);
      let sig: KumaSignature;
      try {
        const r = await fetch(`/api/kuma/latest?${sigParams.toString()}`);
        if (!r.ok) return;
        const j = (await r.json()) as {
          matched?: number;
          latestIngestedAt?: number;
        };
        sig = {
          matched: typeof j.matched === "number" ? j.matched : 0,
          latestIngestedAt:
            typeof j.latestIngestedAt === "number" ? j.latestIngestedAt : 0,
        };
      } catch {
        return;
      }

      // 2. 基準未確立 (主フェッチ前) なら基準を記録するだけ
      const last = lastSigRef.current;
      if (!last) {
        lastSigRef.current = sig;
        return;
      }
      // 3. 件数・最新取り込み時刻に変化が無ければ何もしない (本体は叩かない)
      if (
        sig.matched === last.matched &&
        sig.latestIngestedAt <= last.latestIngestedAt
      ) {
        return;
      }

      // 4. 変化あり → 本体をフル取得して差分を反映
      const params = new URLSearchParams({
        limit: String(limitForPeriod(periodDays)),
        lite: "1",
      });
      if (periodCutoff) params.set("from", periodCutoff);
      try {
        const r = await fetch(`/api/kuma?${params.toString()}`);
        if (!r.ok) return;
        const data = (await r.json()) as {
          records?: KumaRecord[];
          matched?: number;
          latestIngestedAt?: number;
        };
        const next = Array.isArray(data.records) ? data.records : [];
        const known = new Set(recordsRef.current.map((rec) => rec.id));
        const fresh = next.filter((rec) => !known.has(rec.id));
        setRecords(next);
        lastSigRef.current = {
          matched: typeof data.matched === "number" ? data.matched : next.length,
          latestIngestedAt:
            typeof data.latestIngestedAt === "number"
              ? data.latestIngestedAt
              : sig.latestIngestedAt,
        };
        if (fresh.length > 0) {
          // ポーリングで新しく届いた (サイトに追加された) 件数。出没の鮮度とは別概念。
          setCopyToast(`更新 ${fresh.length} 件`);
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
  }, [periodCutoff, periodDays]);

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
    return records.filter((r) => {
      const prefOk =
        selectedPref === "all" || r.prefectureName === selectedPref;
      // 期間フィルタは出没日基準 (最短 1 週間)。掲載時刻は使わない。
      const periodOk = !periodCutoff || r.date >= periodCutoff;
      return prefOk && periodOk;
    });
  }, [records, selectedPref, periodCutoff, showPins]);

  // データ更新日: 最新の事案発生日を「データの新しさ」の指標として算出する。
  // 期間フィルタや件数表示は意図的に持たず、「いつ更新されたか」だけを伝える。
  const latestDate = useMemo(() => {
    if (!records.length) return null;
    const todayIso = jstToday();
    let latest: string | null = null;
    for (const r of records) {
      // 未来日付の上流バグレコードは除外。/api/kuma 側でも弾いているが二重防衛。
      if (r.date > todayIso) continue;
      if (!latest || r.date > latest) latest = r.date;
    }
    return latest;
  }, [records]);

  // 投稿の「地図で選ぶ」中は、地点ドロップに専念できるよう画面を最小化する
  // (ヘッダー・設定バー・カード・対策・天気・出没ピン・メッシュを隠し、中央の
  //  十字ピンで地点を合わせる)。
  const isPicking = pickerMode === "submit";

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden">
      <div className="relative flex-1 min-h-0">
        {/* Google マップ流の全面地図 + 上部フローティング。固定 2 段バー
            (旧ヘッダー / 旧コントロールバー) を廃止し地図を最大化。
            1 段目: ブランド + 検索 + ナビ / 2 段目: フィルタ chip。
            ピッカー中と returnLabel 中はそれぞれ専用 UI を出すため隠す。 */}
        {!pickerMode && (
          <div className="pointer-events-none absolute inset-x-2 top-2 z-[950] flex flex-col gap-2">
            {/* 1 段目: ブランド(→地図ホーム) + 検索 + ナビ。
                returnLabel 経路 (観光地/市町村から) のときは「戻る」を出す。 */}
            {!returnLabel ? (
              <div className="pointer-events-auto flex items-center gap-2">
                <Link
                  href="/"
                  aria-label="くまウォッチ ホーム（地図）"
                  className="flex h-11 shrink-0 items-center"
                >
                  {/* 白い枠は付けず (ロゴ自体が黄色地×青文字で高コントラスト)、地図の上
                      でも視認できるよう軽いドロップシャドウのみ。枠が無いぶん大きく。 */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.png"
                    alt="KumaWatch"
                    className="block h-full w-auto drop-shadow-md"
                  />
                </Link>
                <div className="min-w-0 flex-1 rounded-full bg-white shadow-md ring-1 ring-black/5">
                  <PlaceSearch compact onPick={handleSearchPick} />
                </div>
                {/* ナビ: モバイルは自前の白丸ボタン (🔍+☰)、PC は白ピル背景で
                    探す▾/学ぶ▾/法人▾ を地図上でも読めるようにする。 */}
                <div className="flex shrink-0 items-center gap-1.5 rounded-full sm:bg-white sm:px-2 sm:py-1.5 sm:shadow-md sm:ring-1 sm:ring-black/5">
                  <HeaderNav hideMobileSearchIcon />
                </div>
              </div>
            ) : (
              <div className="pointer-events-auto flex">
                <button
                  type="button"
                  onClick={() => {
                    // 戻り先パスへ確実に遷移する (history.back は LINE 等の
                    // アプリ内ブラウザで戻り先が無く不発になりがち)。
                    if (returnHref) router.push(returnHref);
                  }}
                  className="flex h-11 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold text-stone-800 shadow-md ring-1 ring-black/5 hover:bg-stone-50"
                  aria-label={`${returnLabel} のページに戻る`}
                >
                  <span aria-hidden>←</span>
                  <span className="max-w-[12rem] truncate">{returnLabel}に戻る</span>
                </button>
              </div>
            )}

            {/* 2 段目: 左に「期間」chip、右端に「表示設定」(アイコンのみ)。
                出没ピンの ON/OFF は表示設定の中へ集約した。 */}
            <div className="pointer-events-auto flex items-center gap-1.5">
              {/* 期間 chip: カレンダーアイコン + 「直近◯◯」で、いつからの出没かを明示。
                  凡例チップと高さ(h-9)を揃えて上下をきれいに合わせる。 */}
              <div className="flex h-9 shrink-0 items-center gap-1 rounded-full bg-white pl-2.5 pr-1 text-sm shadow ring-1 ring-black/5">
                <CalendarDays size={15} className="shrink-0 text-stone-500" aria-hidden />
                <select
                  value={periodDays ?? ""}
                  onChange={(e) =>
                    setPeriod(e.target.value === "" ? null : Number(e.target.value))
                  }
                  disabled={!showPins}
                  className="bg-transparent py-0.5 pr-1 font-medium text-stone-700 disabled:opacity-40"
                  aria-label="表示する期間"
                >
                  {PERIOD_OPTIONS.map((p) => (
                    <option key={p.label} value={p.days ?? ""}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 凡例(鮮度): ローズ色のピン = 直近1週間の出没。期間チップと高さ(h-9)を
                  揃えて上下をきれいに合わせる。 */}
              <div className="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white/95 px-2.5 text-xs font-medium text-stone-600 shadow ring-1 ring-black/5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#e11d48" }}
                  aria-hidden
                />
                1週間以内の出没
              </div>

              {/* 表示設定: アイコンのみ・右端へ寄せる。出没ピン / ヒートマップ /
                  地図種類 / 凡例 / 件数・更新 をここに集約。 */}
              <details className="group relative ml-auto shrink-0">
                <summary
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-stone-600 shadow-md ring-1 ring-black/5 marker:hidden [&::-webkit-details-marker]:hidden"
                  aria-label="表示設定を開く"
                  title="表示設定"
                >
                  <svg
                    width="20"
                    height="20"
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
                </summary>
                <div className="absolute right-0 top-full z-[1100] mt-1.5 w-64 rounded-xl border border-stone-200 bg-white p-3 shadow-lg">
                  {/* 出没ピン ON/OFF (旧・独立 chip からここへ移動) */}
                  <label className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1.5 text-sm text-stone-800 hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={showPins}
                      onChange={(e) => setShowPins(e.target.checked)}
                      className="h-4 w-4 accent-amber-600"
                    />
                    出没ピンを表示
                  </label>
                  {/* 件数・更新日 */}
                  <div className="my-1 flex items-center justify-between gap-2 border-y border-stone-100 px-1.5 py-1.5 text-xs text-stone-500">
                    <span className="tabular-nums" suppressHydrationWarning>
                      {filtered.length.toLocaleString()}件表示中
                    </span>
                    {latestDate && <span>更新 {formatLatestDate(latestDate)}</span>}
                  </div>
                  <label className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1.5 text-sm text-stone-800 hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={showHeatmap}
                      onChange={(e) => setShowHeatmap(e.target.checked)}
                      className="h-4 w-4 accent-amber-600"
                    />
                    警戒レベル（ヒートマップ）
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
                  {/* 凡例 — 直近1週間の出没はローズ色 (#e11d48)、それ以前はダーク
                      ブラウン (#78350f)。出どころ (公式/報道/市民) はポップアップで表示。 */}
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-stone-100 pt-2 text-xs font-medium text-stone-600">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#e11d48" }} />
                      直近1週間の出没
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#78350f" }} />
                      それ以前
                    </span>
                  </div>
                </div>
              </details>
            </div>
          </div>
        )}

        <KumaMap
          records={isPicking ? [] : filtered}
          showHeatmap={isPicking ? false : showHeatmap}
          heatmapOpacity={heatmapOpacity}
          smoothingSigmaKm={smoothingSigmaKm}
          haloOpacity={haloOpacity}
          levelThresholds={levelThresholds}
          sightingCountByMesh={sightingCountByMesh}
          tileStyle={tileStyle}
          selectedLocation={isPicking ? null : selectedLocation}
          currentLocation={currentLocation}
          onMapClick={handleMapClick}
          onMapReady={handleMapReady}
        />

        {/* 投稿ピッカーの中央固定ピン。地図を動かして、この先端 (画面中央) を
            出没地点に合わせてもらう。決定時は地図中心の座標を採用する。 */}
        {isPicking && (
          <div className="pointer-events-none absolute inset-0 z-[970]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <MapPin
                size={46}
                strokeWidth={2.5}
                className="text-amber-600 drop-shadow-md"
                fill="#fbbf24"
                aria-hidden
              />
            </div>
            {/* 先端が指す正確な中心点 */}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-700 ring-2 ring-white" />
          </div>
        )}

        {/* 投稿ピッカーモード: 大きな案内 + 大きなボタン + 検索バーの縦積み。
            検索バーも出して地名で探せるようにする (見やすさと機能性の両立)。 */}
        {pickerMode === "submit" && (
          <div className="pointer-events-none absolute inset-x-3 top-3 z-[1000] flex flex-col gap-2">
            {/* 案内 + キャンセル/決定 */}
            <div className="pointer-events-auto rounded-2xl border-2 border-amber-300 bg-amber-50/95 p-3.5 shadow-lg backdrop-blur">
              <div className="flex items-start gap-2">
                <MapPin size={22} className="mt-0.5 shrink-0 text-amber-700" aria-hidden />
                <div className="min-w-0">
                  <div className="text-base font-bold leading-snug text-amber-900">
                    クマを見た場所を選んでください
                  </div>
                  <div className="mt-0.5 text-sm leading-relaxed text-amber-800">
                    地図を動かして、中央のピンを合わせる（地名検索も可）
                  </div>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setPickerMode(null);
                    router.push("/submit");
                  }}
                  className="h-12 flex-1 rounded-full border-2 border-amber-300 bg-white text-base font-semibold text-amber-800 active:bg-amber-100"
                >
                  キャンセル
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // 中央固定ピンが指す = 地図中心の座標を採用する。
                    const m = leafletMapRef.current;
                    if (!m) return;
                    const c = m.getCenter();
                    const params = new URLSearchParams({
                      lat: c.lat.toFixed(5),
                      lon: c.lng.toFixed(5),
                      fromPicker: "1",
                    });
                    setPickerMode(null);
                    router.push(`/submit?${params.toString()}`);
                  }}
                  className="h-12 flex-[2] rounded-full bg-amber-600 text-base font-bold text-white shadow-sm active:bg-amber-700"
                >
                  決定
                </button>
              </div>
            </div>
            {/* 地名で探せる検索バー */}
            <div className="pointer-events-auto w-full rounded-full bg-white shadow-md ring-1 ring-black/5">
              <PlaceSearch compact onPick={handleSearchPick} />
            </div>
          </div>
        )}

        {/* 常設「通知」ボタンで開く、この付近の出没通知ポップオーバー (①)。
            対象地点は 選択地点 → 現在地 → 地図中心 の順に決める。中身は既存の
            GeoNotifyTile を再利用 (LINE 主役 + ブラウザ通知は控え)。地図を煽らない
            よう、開いたときだけ薄い背景で前面に出し、外側タップで閉じる。 */}
        {showNotify && (
          <>
            <div
              className="absolute inset-0 z-[1150] bg-black/20"
              onClick={() => setShowNotify(false)}
              aria-hidden
            />
            <div className="absolute bottom-3 left-1/2 z-[1200] w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-stone-200 bg-white p-4 shadow-xl">
              <div className="mb-2 flex items-start justify-between gap-2">
                <p className="text-xs leading-relaxed text-stone-500">
                  {notifyPoint?.label
                    ? `${notifyPoint.label}の周辺で新しい出没があったらお知らせします。`
                    : "地図で見ているこの範囲で新しい出没があったらお知らせします。"}
                </p>
                <button
                  type="button"
                  onClick={() => setShowNotify(false)}
                  aria-label="閉じる"
                  className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700"
                >
                  ×
                </button>
              </div>
              {notifyPoint ? (
                <GeoNotifyTile
                  lat={notifyPoint.lat}
                  lon={notifyPoint.lon}
                  label={notifyPoint.label}
                  radiusKm={10}
                  surface="map_nudge"
                />
              ) : (
                <p className="text-xs text-stone-500">
                  地図を動かすか、現在地を取得してから開いてください。
                </p>
              )}
            </div>
          </>
        )}

        {/* 右端縦スタック: 通知 / 対策 / 現在地 / ズーム。地図右下。カードが選択されて
            いる間は最小状態 (畳んだバー = 88px) の上に出して常に押せるようにする。カードを
            peek 以上に上げると z 順で自然にこの下に隠れる。ピッカー中/未選択は最下部。 */}
        <div
          className={`absolute right-3 z-[900] flex flex-col gap-2.5 ${
            !isPicking && selectedLocation
              ? "bottom-[calc(88px+0.75rem)]"
              : "bottom-3"
          }`}
        >
          {/* 常設「通知」ボタン (①)。地点未選択でも押せる通知入口。リリースフラグ
              (NEXT_PUBLIC_MAP_NOTIFY_FAB) と、実際に導線を出せるか (isGeoNotifyAvailable)
              の両方が真のときだけ。ピッカー中は隠す。 */}
          {MAP_NOTIFY_FAB_ENABLED && !isPicking && isGeoNotifyAvailable() && (
            <button
              type="button"
              onClick={openNotify}
              className="flex items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700"
              style={{ height: "3.25rem", width: "3.25rem" }}
              aria-label="この付近の出没通知を受け取る"
              title="出没通知を受け取る"
            >
              <Bell size={24} aria-hidden />
            </button>
          )}
          {/* クマ対策の合言葉「はちみつ」を開く。共通の HachimitsuGuide (layout) が
              open-hachimitsu イベントを受けてポップアップを開く。現在地ボタンの上に同サイズで。 */}
          {!isPicking && (
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-hachimitsu"))
            }
            className="flex items-center justify-center rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600"
            style={{ height: "3.25rem", width: "3.25rem" }}
            aria-label="クマ対策の合言葉「はちみつ」を開く"
            title="クマ対策"
          >
            <span className="text-lg font-black leading-none tracking-tight">
              対策
            </span>
          </button>
          )}
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
              <span className="flex items-center gap-1 text-xs font-bold text-stone-800">
                <Settings size={13} aria-hidden />
                管理者設定
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
          <div className="pointer-events-none absolute left-1/2 top-28 z-[1100] -translate-x-1/2 rounded-full bg-gray-900/90 px-4 py-2 text-xs text-white shadow-lg">
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
          <div className="pointer-events-none absolute left-1/2 top-28 z-[900] -translate-x-1/2 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs text-gray-700 shadow backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            出没データ取得中...
          </div>
        )}




        {/* 跳ね上げ式カード: map 領域に絶対配置 (下から)。ピッカー中は隠す。 */}
        {!isPicking && (
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
        )}
      </div>
    </div>
  );
}
