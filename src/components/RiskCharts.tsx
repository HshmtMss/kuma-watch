"use client";

import { useMemo } from "react";
import type { MeshData, WeatherSnapshot } from "@/lib/types";
import {
  computeScore,
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
} from "@/lib/score";

type Props = {
  mesh: MeshData | null;
  weather: WeatherSnapshot | null;
  baseDate: Date;
  /** 周辺 radius・直近365日の月別実測件数 (0=1月..11=12月)。地点固有の月別チャート用。 */
  monthlyNearby?: number[];
  nearbyWeightedCount?: number;
  nearbySightings?: number;
  nearbyRadiusKm?: number;
  prefCode?: string;
  elevationM?: number | null;
  slopeDeg?: number | null;
  isForest?: boolean | null;
  forestType?: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none" | null;
};

const MONTH_LABEL = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

export default function RiskCharts({
  mesh,
  weather,
  baseDate,
  monthlyNearby,
  nearbyWeightedCount,
  nearbySightings,
  nearbyRadiusKm,
  prefCode,
  elevationM,
  slopeDeg,
  isForest,
  forestType,
}: Props) {
  const currentHour = baseDate.getHours();
  const currentMonth = baseDate.getMonth();
  const scoreOpts = {
    nearbyWeightedCount,
    nearbySightings,
    nearbyRadiusKm,
    prefCode,
    elevationM,
    slopeDeg,
    isForest,
    forestType,
  };

  const hourly = useMemo(() => {
    return Array.from({ length: 24 }, (_, h) => {
      const d = new Date(baseDate);
      d.setHours(h, 0, 0, 0);
      const b = computeScore(mesh, d, weather, scoreOpts);
      return { hour: h, score: b.score, level: b.level };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mesh, weather, baseDate, nearbyWeightedCount, nearbySightings, nearbyRadiusKm, prefCode, elevationM, slopeDeg, isForest, forestType]);

  // 月別は「この地点の周辺・直近12ヶ月の実測件数」。全国季節波形(computeScore)は
  // どの地点でも同形で誤解を招くため廃止し、地点固有の実測に差し替える。
  const localMonthlyTotal = (monthlyNearby ?? []).reduce((a, b) => a + b, 0);
  // 件数が少ない地点は形が読めないので月別チャート自体を出さない。
  const showLocalMonthly = monthlyNearby?.length === 12 && localMonthlyTotal >= 6;

  const hasAnyScore = hourly.some((h) => h.score > 0) || showLocalMonthly;
  if (!hasAnyScore) {
    return null;
  }

  return (
    <div className="space-y-4">
      <ChartSection
        title="時間帯別"
        subtitle="今日の各時間で予測されるスコア"
        data={hourly.map((d) => ({
          label: `${d.hour}`,
          score: d.score,
          color: RISK_LEVEL_COLOR[d.level],
          highlighted: d.hour === currentHour,
          level: RISK_LEVEL_LABEL[d.level],
        }))}
        axisLabels={["0", "6", "12", "18", "24"]}
        highlightLegend={`いま (${currentHour}時)`}
      />
      {showLocalMonthly && (
        <ChartSection
          title="月別の出没"
          subtitle={`周辺${nearbyRadiusKm ?? 10}km・直近12ヶ月の実測`}
          data={(monthlyNearby ?? []).map((count, m) => ({
            label: MONTH_LABEL[m],
            score: count,
            color: count > 0 ? "#f59e0b" : "#e5e7eb",
            highlighted: m === currentMonth,
            level: `${count}件`,
          }))}
          axisLabels={MONTH_LABEL}
          highlightLegend={`今月 (${MONTH_LABEL[currentMonth]})`}
          maxFloor={1}
          showAllAxis
        />
      )}
    </div>
  );
}

type Bar = {
  label: string;
  score: number;
  color: string;
  highlighted: boolean;
  level: string;
};

function ChartSection({
  title,
  subtitle,
  data,
  axisLabels,
  highlightLegend,
  showAllAxis,
  maxFloor = 50,
}: {
  title: string;
  subtitle: string;
  data: Bar[];
  axisLabels: string[];
  highlightLegend: string;
  showAllAxis?: boolean;
  /** バー高さ正規化の最小分母。スコア系=50、実測件数系=1 (実データの最大に合わせる)。 */
  maxFloor?: number;
}) {
  const max = Math.max(maxFloor, ...data.map((d) => d.score));
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <div className="text-[13px] font-semibold text-gray-900">{title}</div>
        <div className="text-[10px] text-gray-500">{subtitle}</div>
      </div>
      <div className="flex h-20 items-end gap-[2px]">
        {data.map((d, i) => {
          const h = Math.max(2, (d.score / max) * 100);
          return (
            <div
              key={i}
              className="relative flex-1"
              style={{ height: "100%" }}
              title={`${d.label}: ${d.score}（${d.level}）`}
            >
              <div
                className="absolute bottom-0 w-full rounded-t-sm transition-all"
                style={{
                  height: `${h}%`,
                  background: d.color,
                  opacity: d.highlighted ? 1 : 0.55,
                  outline: d.highlighted ? `2px solid ${d.color}` : "none",
                  outlineOffset: "1px",
                }}
              />
            </div>
          );
        })}
      </div>
      {showAllAxis ? (
        <div className="mt-1 flex gap-[2px] text-[9px] text-gray-500">
          {axisLabels.map((l, i) => (
            <div key={i} className="flex-1 text-center">
              {l.replace("月", "")}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-1 flex justify-between text-[9px] text-gray-500">
          {axisLabels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      )}
      <div className="mt-1 text-[10px] text-gray-500">
        <span className="inline-block h-1.5 w-3 align-middle" style={{ background: data.find((d) => d.highlighted)?.color ?? "#ccc" }} /> {highlightLegend}
      </div>
    </div>
  );
}
