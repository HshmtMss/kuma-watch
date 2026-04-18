"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { KumaRecord } from "@/app/api/kuma/route";
import KumaMap from "@/components/KumaMap";
import PlaceSearch from "@/components/PlaceSearch";
import RiskPanel, { type SelectedLocation } from "@/components/RiskPanel";
import { RISK_LEVEL_COLOR, RISK_LEVEL_LABEL } from "@/lib/score";
import type { RiskLevel } from "@/lib/types";
import type { GeocodeHit } from "@/app/api/geocode/route";

const RISK_LEGEND_ORDER: RiskLevel[] = ["low", "moderate", "elevated", "high"];

export default function KumaClient() {
  const [records, setRecords] = useState<KumaRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedPref, setSelectedPref] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showPins, setShowPins] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);

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

  useEffect(() => {
    fetch("/api/kuma")
      .then((r) => r.json())
      .then((data: { records?: KumaRecord[]; total?: number }) => {
        setRecords(Array.isArray(data.records) ? data.records : []);
        setTotal(typeof data.total === "number" ? data.total : 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!navigator.geolocation) return;
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
        // permission denied or timeout — silent fallback (user can tap/search)
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

  const years = useMemo(() => {
    const set = new Set(records.map((r) => r.date.slice(0, 4)).filter(Boolean));
    return Array.from(set).sort().reverse();
  }, [records]);

  const filtered = useMemo(() => {
    if (!showPins) return [];
    return records.filter((r) => {
      const prefOk =
        selectedPref === "all" || r.prefectureName === selectedPref;
      const yearOk =
        selectedYear === "all" || r.date.startsWith(selectedYear);
      return prefOk && yearOk;
    });
  }, [records, selectedPref, selectedYear, showPins]);

  const activeFilterCount =
    (selectedPref !== "all" ? 1 : 0) + (selectedYear !== "all" ? 1 : 0);

  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden">
      <header className="relative z-[1100] flex shrink-0 items-center gap-2 border-b border-black/8 bg-white px-3 py-2 shadow-sm">
        <a href="/" className="flex shrink-0 items-center gap-1.5">
          <span className="text-xl" aria-hidden="true">🐻</span>
          <span className="hidden text-sm font-bold text-gray-900 sm:inline">
            KumaWatch
          </span>
        </a>

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
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              disabled={loading}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-medium text-gray-700 disabled:opacity-50"
            >
              <option value="all">年: すべて</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}年
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
            {filtered.length.toLocaleString()}件表示 / 取得 {records.length.toLocaleString()}件 / 全{total.toLocaleString()}件
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
          onPickGps={handleGpsPick}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}
