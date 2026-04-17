"use client";

import { useEffect, useMemo, useState } from "react";
import type { KumaRecord } from "@/app/api/kuma/route";
import KumaMap from "@/components/KumaMap";
import RiskPanel from "@/components/RiskPanel";
import {
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
} from "@/lib/score";
import type { RiskLevel } from "@/lib/types";

const RISK_LEGEND_ORDER: RiskLevel[] = ["low", "moderate", "elevated", "high"];

export default function KumaClient() {
  const [records, setRecords] = useState<KumaRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPref, setSelectedPref] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [showHeatmap, setShowHeatmap] = useState(true);

  useEffect(() => {
    fetch("/api/kuma")
      .then((r) => r.json())
      .then((data: { records?: KumaRecord[] }) => {
        setRecords(Array.isArray(data.records) ? data.records : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const prefectures = useMemo(() => {
    const set = new Set(records.map((r) => r.prefectureName).filter(Boolean));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "ja"));
  }, [records]);

  const years = useMemo(() => {
    const set = new Set(records.map((r) => r.date.slice(0, 4)).filter(Boolean));
    return Array.from(set).sort().reverse();
  }, [records]);

  const filtered = useMemo(
    () =>
      records.filter((r) => {
        const prefOk =
          selectedPref === "all" || r.prefectureName === selectedPref;
        const yearOk =
          selectedYear === "all" || r.date.startsWith(selectedYear);
        return prefOk && yearOk;
      }),
    [records, selectedPref, selectedYear],
  );

  return (
    <div className="flex flex-col" style={{ flex: 1, minHeight: 0 }}>
      <div className="flex flex-wrap items-center gap-2 border-b border-black/8 bg-white px-4 py-2 shrink-0">
        <select
          value={selectedPref}
          onChange={(e) => setSelectedPref(e.target.value)}
          disabled={loading}
          className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 outline-none disabled:opacity-50"
        >
          <option value="all">都道府県: すべて</option>
          {prefectures.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          disabled={loading}
          className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 outline-none disabled:opacity-50"
        >
          <option value="all">年: すべて</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}年</option>
          ))}
        </select>
        <label className="flex cursor-pointer items-center gap-1.5 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          <input
            type="checkbox"
            checked={showHeatmap}
            onChange={(e) => setShowHeatmap(e.target.checked)}
            className="h-3 w-3 accent-amber-600"
          />
          危険度ヒートマップ
        </label>
        <span className="ml-auto rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {loading
            ? "読み込み中..."
            : `${filtered.length.toLocaleString()} 件 / 全 ${records.length.toLocaleString()} 件`}
        </span>
      </div>

      <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
        <KumaMap records={filtered} showHeatmap={showHeatmap} />

        <div className="pointer-events-none absolute left-3 top-3 z-[1000] w-[min(340px,calc(100vw-1.5rem))]">
          <div className="pointer-events-auto">
            <RiskPanel />
          </div>
        </div>

        {loading && (
          <div className="absolute inset-0 z-[999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-600" />
              <p className="text-sm text-gray-600">全国データを取得中...</p>
            </div>
          </div>
        )}

        <div className="absolute bottom-6 right-3 z-[1000] space-y-2 rounded-xl border border-black/8 bg-white/95 p-3 text-xs text-gray-700 shadow backdrop-blur">
          <div>
            <p className="mb-1.5 font-semibold text-gray-800">ピン（出没情報）</p>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-500" />1頭
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />2頭以上
            </div>
          </div>
          {showHeatmap && (
            <div className="border-t border-gray-200 pt-2">
              <p className="mb-1.5 font-semibold text-gray-800">危険度（5km メッシュ）</p>
              {RISK_LEGEND_ORDER.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-sm"
                    style={{ background: RISK_LEVEL_COLOR[level], opacity: 0.7 }}
                  />
                  {RISK_LEVEL_LABEL[level]}
                </div>
              ))}
              <p className="mt-1 text-[10px] text-gray-500">ズーム 6 以上で表示</p>
            </div>
          )}
        </div>
      </div>

      <footer className="shrink-0 border-t border-black/8 bg-white px-4 py-2 text-xs text-gray-400">
        データ出典:{" "}
        <a
          href="https://public.sharp9110.com/view/allposts/bear"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          Sharp9110 クマ出没マップ（CC BY 4.0）
        </a>
        ・メッシュ危険度は過去実績ベースの参考値です。詳細は{" "}
        <a href="/sources" className="underline hover:text-gray-600">
          データ出典
        </a>
        ／
        <a href="/disclaimer" className="underline hover:text-gray-600">
          免責事項
        </a>
        をご確認ください。
      </footer>
    </div>
  );
}
