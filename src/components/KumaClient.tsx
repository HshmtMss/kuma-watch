"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import type { KumaRecord } from "@/app/api/kuma/route";
import KumaMap from "@/components/KumaMap";
import PlaceSearch from "@/components/PlaceSearch";
import RiskPanel, { type SelectedLocation } from "@/components/RiskPanel";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import { RISK_LEVEL_COLOR, RISK_LEVEL_LABEL } from "@/lib/score";
import type { RiskLevel } from "@/lib/types";
import type { GeocodeHit } from "@/app/api/geocode/route";

const WELCOME_STORAGE_KEY = "kumaWatch.welcomed.v1";
const LAST_LOCATION_KEY = "kumaWatch.lastLocation";
const LAST_PERIOD_KEY = "kumaWatch.lastPeriodDays";

function subscribeWelcome(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (e: StorageEvent) => {
    if (e.key === WELCOME_STORAGE_KEY) cb();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

function getWelcomeSnapshot(): boolean {
  try {
    return window.localStorage.getItem(WELCOME_STORAGE_KEY) === "1";
  } catch {
    return true;
  }
}

function getWelcomeServerSnapshot(): boolean {
  // SSR では "welcomed" 相当として扱い、初期描画で overlay を出さない (ハイドレーション不整合回避)
  return true;
}

const RISK_LEGEND_ORDER: RiskLevel[] = ["low", "moderate", "elevated", "high"];

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
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedPref, setSelectedPref] = useState("all");
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
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  const welcomedFromStore = useSyncExternalStore(
    subscribeWelcome,
    getWelcomeSnapshot,
    getWelcomeServerSnapshot,
  );
  const [dismissed, setDismissed] = useState(false);
  const showWelcome = !welcomedFromStore && !dismissed;
  const [gpsLoading, setGpsLoading] = useState(false);

  const dismissWelcome = useCallback(() => {
    setDismissed(true);
    try {
      window.localStorage.setItem(WELCOME_STORAGE_KEY, "1");
    } catch {
      // storage unavailable (private mode等) — その回のみ非表示で OK
    }
  }, []);

  const requestGpsFromWelcome = useCallback(() => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      dismissWelcome();
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLoading(false);
        setSelectedLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          source: "gps",
        });
        dismissWelcome();
      },
      () => {
        setGpsLoading(false);
        dismissWelcome();
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
    );
  }, [dismissWelcome]);

  const handleMapClick = useCallback((lat: number, lon: number) => {
    setSelectedLocation({ lat, lon, source: "tap" });
  }, []);

  const handleGpsPick = useCallback((loc: SelectedLocation) => {
    setSelectedLocation(loc);
  }, []);

  const handleClear = useCallback(() => {
    setSelectedLocation(null);
  }, []);

  const handleSearchPick = useCallback((hit: GeocodeHit) => {
    setSelectedLocation({ lat: hit.lat, lon: hit.lon, source: "tap" });
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
  const restoredRef = useRef(false);
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    if (typeof window === "undefined") return;
    try {
      const rawLoc = window.sessionStorage.getItem(LAST_LOCATION_KEY);
      if (rawLoc) {
        const parsed = JSON.parse(rawLoc) as SelectedLocation;
        if (
          parsed &&
          typeof parsed.lat === "number" &&
          typeof parsed.lon === "number"
        ) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring from session
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

  // GPS 自動取得: 既に welcomed 済み (= 2 回目以降の訪問) のときだけ mount 時に走らせる。
  // 初訪問はオーバーレイから明示的に "現在地で見る" を押させる。
  // 復元された selectedLocation があれば GPS は不要なので skip。
  const autoGpsRanRef = useRef(false);
  useEffect(() => {
    if (autoGpsRanRef.current) return;
    if (typeof window === "undefined") return;
    if (!navigator.geolocation) return;
    // 直接 snapshot を読んで "初訪問フラグが無い" = "このセッションで overlay を出した" 場合は skip
    if (!getWelcomeSnapshot()) return;
    // 復元済みならそのポイントを優先、GPS は走らせない
    if (window.sessionStorage.getItem(LAST_LOCATION_KEY)) return;
    autoGpsRanRef.current = true;
    let cancelled = false;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (cancelled) return;
        setSelectedLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          source: "gps",
        });
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

  const prefectures = useMemo(() => {
    const set = new Set(records.map((r) => r.prefectureName).filter(Boolean));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "ja"));
  }, [records]);

  const filtered = useMemo(() => {
    if (!showPins) return [];
    return records.filter((r) => {
      const prefOk =
        selectedPref === "all" || r.prefectureName === selectedPref;
      const periodOk = !periodCutoff || r.date >= periodCutoff;
      return prefOk && periodOk;
    });
  }, [records, selectedPref, periodCutoff, showPins]);

  const activeFilterCount = selectedPref !== "all" ? 1 : 0;
  const periodLabel =
    PERIOD_OPTIONS.find((p) => p.days === periodDays)?.label ?? "期間";

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden">
      <header className="relative z-[1100] flex shrink-0 items-center gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm">
        <Link href="/" className="flex shrink-0 items-center gap-1.5">
          <span className="text-xl" aria-hidden="true">🐻</span>
          <span className="hidden text-sm font-bold text-gray-900 sm:inline">
            KumaWatch
          </span>
        </Link>

        <div className="min-w-0 flex-1">
          <PlaceSearch compact onPick={handleSearchPick} />
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm font-medium transition ${
              showFilters || activeFilterCount > 0
                ? "bg-amber-600 text-white"
                : "bg-white text-gray-700"
            }`}
            aria-expanded={showFilters}
            aria-label="絞り込み"
            title="絞り込み"
          >
            <span aria-hidden>⚙</span>
            {activeFilterCount > 0 && (
              <span className="absolute ml-6 -mt-4 rounded-full bg-red-500 px-1 text-[9px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
          <details className="relative">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-700">
              ⋮
              <span className="sr-only">メニュー</span>
            </summary>
            <div className="absolute right-0 top-11 z-10 w-44 rounded-lg border border-gray-200 bg-white py-1 text-xs shadow-lg">
              <a href="/about" className="block px-3 py-2 hover:bg-gray-50">
                このサイトについて
              </a>
              <a href="/sources" className="block px-3 py-2 hover:bg-gray-50">
                データ出典
              </a>
              <a href="/for-gov" className="block px-3 py-2 hover:bg-gray-50">
                自治体の方へ
              </a>
              <a
                href="/disclaimer"
                className="block px-3 py-2 hover:bg-gray-50"
              >
                免責事項
              </a>
              <a href="/privacy" className="block px-3 py-2 hover:bg-gray-50">
                プライバシー
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* 期間チップ: 常時露出、UX の主役 */}
      <div className="relative z-[1060] shrink-0 border-b border-black/8 bg-stone-50 px-2 py-1.5">
        <div className="flex items-center gap-1 overflow-x-auto">
          <span className="shrink-0 px-1.5 text-[10px] font-medium text-stone-500">
            期間
          </span>
          {PERIOD_OPTIONS.map((p) => {
            const active = periodDays === p.days;
            return (
              <button
                key={p.label}
                onClick={() => setPeriod(p.days)}
                className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition ${
                  active
                    ? "bg-stone-900 text-white shadow-sm"
                    : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-100"
                }`}
                aria-pressed={active}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {showFilters && (
        <div className="relative z-[1050] shrink-0 border-b border-black/8 bg-white px-3 py-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <label className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
              <input
                type="checkbox"
                checked={showHeatmap}
                onChange={(e) => setShowHeatmap(e.target.checked)}
                className="h-3 w-3 accent-amber-600"
              />
              ヒートマップ
            </label>
            <label className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
              <input
                type="checkbox"
                checked={showPins}
                onChange={(e) => setShowPins(e.target.checked)}
                className="h-3 w-3 accent-amber-600"
              />
              出没ピン
            </label>
            <select
              value={selectedPref}
              onChange={(e) => setSelectedPref(e.target.value)}
              disabled={loading}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-medium text-gray-700 disabled:opacity-50"
            >
              <option value="all">都道府県: すべて</option>
              {prefectures.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowLegend((v) => !v)}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-medium text-gray-700"
            >
              凡例 {showLegend ? "を隠す" : "を見る"}
            </button>
          </div>
        </div>
      )}

      <div className="relative flex-1 min-h-0">
        <KumaMap
          records={filtered}
          showHeatmap={showHeatmap}
          selectedLocation={selectedLocation}
          onMapClick={handleMapClick}
        />

        {loading && (
          <div className="pointer-events-none absolute left-1/2 top-3 z-[900] -translate-x-1/2 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs text-gray-700 shadow backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            出没データ取得中...
          </div>
        )}

        {!loading && (
          <div className="pointer-events-none absolute left-3 top-3 z-[900] rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-600 shadow backdrop-blur sm:left-auto sm:right-16">
            {periodLabel}: {filtered.length.toLocaleString()}件 / 全{total.toLocaleString()}件
          </div>
        )}

        {showLegend && (
          <div className="pointer-events-auto absolute bottom-[calc(var(--sheet-height,6rem)+0.75rem)] right-3 z-[900] w-40 rounded-xl border border-black/8 bg-white/95 p-2.5 text-[11px] text-gray-700 shadow backdrop-blur">
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
              <div className="mb-0.5 text-[10px] text-gray-500">危険度</div>
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

        <RiskPanel
          location={selectedLocation}
          periodDays={periodDays}
          onPickGps={handleGpsPick}
          onClear={handleClear}
        />
      </div>

      {showWelcome && (
        <WelcomeOverlay
          onGpsRequest={requestGpsFromWelcome}
          onDismiss={dismissWelcome}
          gpsLoading={gpsLoading}
        />
      )}
    </div>
  );
}
