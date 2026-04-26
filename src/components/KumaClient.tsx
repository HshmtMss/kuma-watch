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
import KumaMap, { type TileStyle } from "@/components/KumaMap";
import PlaceSearch from "@/components/PlaceSearch";
import RiskPanel, { type SelectedLocation } from "@/components/RiskPanel";
import AskBox from "@/components/AskBox";
import TopWeatherBadge from "@/components/TopWeatherBadge";
import SettingsPanel from "@/components/SettingsPanel";
import { loadMeshPayload } from "@/lib/mesh-data";
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
const DEFAULT_HEATMAP_OPACITY = 0.4;
const DEFAULT_SMOOTHING_SIGMA_KM = 0; // 0 = 無効 (Flutter 同等)
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
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  // 現在地 (GPS) は青丸で別表示。選択地点 (tap/search) とは独立に保持する。
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [, setMeshGeneratedAt] = useState<string | null>(null);
  const [copyToast, setCopyToast] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  // 投稿フローからの「地図から選ぶ」モード (mount 時に URL クエリで判定)
  const [pickerMode, setPickerMode] = useState<null | "submit">(null);
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
    // selectedLocation 以外 (currentLocation のみ) のときも deep link を作れる
    const labelText =
      selectedLocation?.label ??
      (selectedLocation?.source === "gps" || !selectedLocation
        ? "現在地"
        : "選択地点");
    const params = new URLSearchParams({
      lat: loc.lat.toFixed(5),
      lon: loc.lon.toFixed(5),
    });
    if (selectedLocation?.label) params.set("label", selectedLocation.label);
    const deepLink = `${origin}/?${params.toString()}`;
    const title = "KumaWatch — 全国クマ出没予報・危険度マップ";
    const text =
      `【${labelText}】の出没履歴・危険度・自治体公式情報を KumaWatch で確認:\n` +
      `${deepLink}`;

    // Web Share API があれば優先 (モバイルで LINE/X/メール 等のシェアシートが開く)
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url: deepLink });
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
  }, [selectedLocation, currentLocation]);
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
  const autoGpsRanRef = useRef(false);
  useEffect(() => {
    if (autoGpsRanRef.current) return;
    if (typeof window === "undefined") return;
    if (!navigator.geolocation) return;
    autoGpsRanRef.current = true;
    const hasRestoredSelection =
      !!window.sessionStorage.getItem(LAST_LOCATION_KEY);
    let cancelled = false;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (cancelled) return;
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setCurrentLocation({ lat, lon });
        if (!hasRestoredSelection) {
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

  // mesh.json の generatedAt を取得して 更新日 バナー用に保持
  useEffect(() => {
    let cancelled = false;
    loadMeshPayload()
      .then((p) => {
        if (!cancelled) setMeshGeneratedAt(p.generatedAt ?? null);
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
      const periodOk = !periodCutoff || r.date >= periodCutoff;
      return prefOk && periodOk;
    });
  }, [records, selectedPref, periodCutoff, showPins]);

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden">
      <header className="relative z-[1100] flex shrink-0 items-center gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm">
        <Link href="/" className="flex shrink-0 items-center" aria-label="KumaWatch">
          <Image
            src="/logo.png"
            alt="KumaWatch"
            width={120}
            height={36}
            priority
            className="h-8 w-auto"
            style={{ width: "auto", height: "2rem" }}
          />
        </Link>

        <div className="min-w-0 flex-1">
          <PlaceSearch compact onPick={handleSearchPick} />
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {/* AI に聞く: クマの顔アイコン + テキスト (コンパクト) */}
          <button
            onClick={() => setShowChat(true)}
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 text-xs font-semibold text-amber-800 hover:bg-amber-100"
            aria-label="AI に質問"
            title="AI に質問"
          >
            <Image
              src="/bear-face.png"
              alt=""
              width={20}
              height={20}
              aria-hidden
              style={{ width: "1.25rem", height: "auto" }}
            />
            <span className="hidden sm:inline">AI に聞く</span>
          </button>
          <details className="relative">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-gray-300 bg-white text-base font-semibold text-gray-800">
              ⋮
              <span className="sr-only">メニュー</span>
            </summary>
            <div className="absolute right-0 top-11 z-10 w-48 rounded-lg border border-gray-200 bg-white py-1 text-sm text-gray-800 shadow-lg">
              {/* 地図スタイル切替 */}
              <div className="border-b border-gray-100 px-3 py-2">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  地図スタイル
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
                      className={`flex-1 rounded-md px-2 py-1 text-xs ${
                        tileStyle === opt.v
                          ? "bg-amber-100 font-semibold text-amber-900"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <a href="/about" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                このサイトについて
              </a>
              <a href="/for-gov" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                自治体の方へ
              </a>
              <a
                href="/disclaimer"
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
              >
                免責事項
              </a>
              <a href="/privacy" className="block px-3 py-2 text-gray-800 hover:bg-gray-100">
                プライバシー
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* 表示設定 — 1 行に集約 */}
      <div className="relative z-[1060] shrink-0 border-b border-black/8 bg-white px-2 py-1.5">
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
          {/* 出没ピン (表示 ON/OFF + 期間セレクト + 件数) */}
          <div className="flex shrink-0 items-center overflow-hidden rounded-full border border-stone-200 bg-stone-50">
            <label className="flex items-center gap-1 px-2 py-1 font-medium text-stone-700">
              <input
                type="checkbox"
                checked={showPins}
                onChange={(e) => setShowPins(e.target.checked)}
                className="h-3 w-3 accent-amber-600"
              />
              出没ピン
            </label>
            <select
              value={periodDays ?? ""}
              onChange={(e) =>
                setPeriod(e.target.value === "" ? null : Number(e.target.value))
              }
              disabled={!showPins}
              className="border-l border-stone-200 bg-white py-1 pl-1.5 pr-1 text-stone-700 disabled:opacity-40"
              aria-label="期間"
            >
              {PERIOD_OPTIONS.map((p) => (
                <option key={p.label} value={p.days ?? ""}>
                  {p.label}
                </option>
              ))}
            </select>
            <span
              className="border-l border-stone-200 bg-white px-2 py-1 tabular-nums text-stone-600"
              aria-label="該当件数"
              suppressHydrationWarning
            >
              {filtered.length.toLocaleString()}件
            </span>
          </div>

          {/* 危険度ヒートマップ (表示 ON/OFF + 濃さ) */}
          <div className="flex shrink-0 items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50">
            <label className="flex items-center gap-1 px-2 py-1 font-medium text-gray-700">
              <input
                type="checkbox"
                checked={showHeatmap}
                onChange={(e) => setShowHeatmap(e.target.checked)}
                className="h-3 w-3 accent-amber-600"
              />
              危険度
            </label>
            <div className="flex items-center gap-1 border-l border-gray-200 bg-white px-2 py-1">
              <span className={showHeatmap ? "text-gray-600" : "text-gray-400"}>
                濃さ
              </span>
              <input
                type="range"
                min={0.1}
                max={0.9}
                step={0.1}
                value={heatmapOpacity}
                onChange={(e) => setHeatmapOpacity(Number(e.target.value))}
                disabled={!showHeatmap}
                className="h-1 w-16 cursor-pointer accent-amber-600 disabled:opacity-40"
                aria-label="ヒートマップ不透明度"
              />
            </div>
          </div>

          {/* 凡例トグル */}
          <button
            onClick={() => setShowLegend((v) => !v)}
            className="shrink-0 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-gray-700"
          >
            凡例 {showLegend ? "▲" : "▼"}
          </button>
        </div>
      </div>

      <div className="relative flex-1 min-h-0">
        <KumaMap
          records={filtered}
          showHeatmap={showHeatmap}
          heatmapOpacity={heatmapOpacity}
          smoothingSigmaKm={smoothingSigmaKm}
          haloOpacity={haloOpacity}
          levelThresholds={levelThresholds}
          tileStyle={tileStyle}
          selectedLocation={selectedLocation}
          currentLocation={currentLocation}
          onMapClick={handleMapClick}
          onMapReady={handleMapReady}
        />

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

        {/* 右端縦スタック: 共有 / 現在地 / 地図スタイル / ズーム (カード上端に合わせて配置) */}
        <div className="absolute right-3 bottom-[calc(33vh+0.75rem)] z-[900] flex flex-col gap-2">
          <button
            type="button"
            onClick={requestCurrentLocation}
            disabled={gpsLoading}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-50 disabled:opacity-60"
            aria-label="現在地を取得"
            title="現在地を取得"
          >
            {gpsLoading ? (
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-amber-600" />
            ) : (
              <svg
                width="22"
                height="22"
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
              className="flex h-11 w-11 items-center justify-center text-lg font-light text-gray-700 hover:bg-gray-50"
              aria-label="拡大"
              title="拡大"
            >
              +
            </button>
            <div className="mx-2 h-px bg-gray-200" />
            <button
              type="button"
              onClick={handleZoomOut}
              className="flex h-11 w-11 items-center justify-center text-lg font-light text-gray-700 hover:bg-gray-50"
              aria-label="縮小"
              title="縮小"
            >
              −
            </button>
          </div>
        </div>

        {/* 右上: 選択地点 / 現在地の現在気象 (mesh データ更新日は about ページに移譲) */}
        <TopWeatherBadge
          lat={selectedLocation?.lat ?? currentLocation?.lat ?? null}
          lon={selectedLocation?.lon ?? currentLocation?.lon ?? null}
        />

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
                  width={24}
                  height={24}
                  aria-hidden
                  style={{ width: "1.5rem", height: "auto" }}
                />
                <span className="text-base font-semibold text-gray-900">
                  AI に質問
                </span>
                {selectedLocation && (
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-800">
                    選択中: {selectedLocation.lat.toFixed(3)},{" "}
                    {selectedLocation.lon.toFixed(3)}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setShowChat(false)}
                  className="ml-auto flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="閉じる"
                >
                  ×
                </button>
              </div>
              <AskBox
                context={
                  selectedLocation
                    ? {
                        lat: selectedLocation.lat,
                        lon: selectedLocation.lon,
                      }
                    : undefined
                }
              />
            </div>
          </div>
        )}

        {loading && (
          <div className="pointer-events-none absolute left-1/2 top-3 z-[900] -translate-x-1/2 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs text-gray-700 shadow backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            出没データ取得中...
          </div>
        )}


        {showLegend && (
          <div className="pointer-events-auto absolute bottom-[calc(33vh+0.75rem)] left-3 z-[900] w-40 rounded-xl border border-black/8 bg-white/95 p-2.5 text-[11px] text-gray-700 shadow backdrop-blur">
            <div className="mb-1 flex items-center justify-between">
              <div className="font-semibold text-gray-800">凡例</div>
              <button
                onClick={() => setShowLegend(false)}
                className="text-gray-400 hover:text-gray-900"
                aria-label="凡例を閉じる"
              >
                ×
              </button>
            </div>
            <div className="mb-1.5">
              <div className="mb-0.5 text-[10px] text-gray-500">ピン</div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-gray-500" />1頭
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />2頭以上
              </div>
            </div>
            <div>
              <div className="mb-0.5 text-[10px] text-gray-500">
                危険度ヒートマップ
              </div>
              {RISK_LEGEND_ORDER.map((level) => (
                <div key={level} className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-2 w-2 rounded-sm"
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
          onShare={handleShare}
        />
      </div>

    </div>
  );
}
