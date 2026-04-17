"use client";

import { useEffect, useMemo, useState } from "react";
import type { KumaRecord } from "@/app/api/kuma/route";
import KumaMap from "@/components/KumaMap";
export default function KumaClient() {
  const [records, setRecords] = useState<KumaRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPref, setSelectedPref] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

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
        const prefOk = selectedPref === "all" || r.prefectureName === selectedPref;
        const yearOk = selectedYear === "all" || r.date.startsWith(selectedYear);
        return prefOk && yearOk;
      }),
    [records, selectedPref, selectedYear],
  );

  return (
    <div className="flex flex-col" style={{ flex: 1, minHeight: 0 }}>
      {/* フィルタバー */}
      <div className="flex flex-wrap items-center gap-2 border-b border-black/8 bg-white px-4 py-2 shrink-0">
        <select
          value={selectedPref}
          onChange={(e) => setSelectedPref(e.target.value)}
          disabled={loading}
          className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 outline-none disabled:opacity-50"
        >
          <option value="all">都道府県: すべて</option>
          {prefectures.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          disabled={loading}
          className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 outline-none disabled:opacity-50"
        >
          <option value="all">年: すべて</option>
          {years.map((y) => <option key={y} value={y}>{y}年</option>)}
        </select>
        <span className="ml-auto rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {loading ? "読み込み中..." : `${filtered.length.toLocaleString()} 件 / 全 ${records.length.toLocaleString()} 件`}
        </span>
      </div>

      {/* 地図（常に表示・ピンは後から追加） */}
      <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
        <KumaMap records={filtered} />

        {/* データ読み込み中オーバーレイ */}
        {loading && (
          <div className="absolute inset-0 z-[999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-600" />
              <p className="text-sm text-gray-600">全国データを取得中...</p>
            </div>
          </div>
        )}

        {/* 凡例 */}
        <div className="absolute bottom-6 right-3 z-[1000] space-y-1.5 rounded-xl border border-black/8 bg-white/90 p-3 text-xs text-gray-700 shadow backdrop-blur">
          <p className="mb-1 font-semibold text-gray-800">凡例</p>
          <div className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-500" />1頭</div>
          <div className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />2頭以上</div>
        </div>
      </div>

      {/* 出典 */}
      <footer className="shrink-0 border-t border-black/8 bg-white px-4 py-2 text-xs text-gray-400">
        データ出典:{" "}
        <a href="https://public.sharp9110.com/view/allposts/bear" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
          Sharp9110 クマ出没マップ（CC BY 4.0）
        </a>
        ・本情報は参考値です。
      </footer>
    </div>
  );
}
