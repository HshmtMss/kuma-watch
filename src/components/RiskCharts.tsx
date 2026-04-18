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
  nearbyWeightedCount?: number;
  nearbySightings?: number;
  nearbyRadiusKm?: number;
  prefCode?: string;
  elevationM?: number | null;
};

const MONTH_LABEL = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

export default function RiskCharts({
  mesh,
  weather,
  baseDate,
  nearbyWeightedCount,
  nearbySightings,
  nearbyRadiusKm,
  prefCode,
  elevationM,
}: Props) {
  const currentHour = baseDate.getHours();
  const currentMonth = baseDate.getMonth();
  const scoreOpts = {
    nearbyWeightedCount,
    nearbySightings,
    nearbyRadiusKm,
    prefCode,
    elevationM,
  };

  const hourly = useMemo(() => {
    return Array.from({ length: 24 }, (_, h) => {
      const d = new Date(baseDate);
      d.setHours(h, 0, 0, 0);
      const b = computeScore(mesh, d, weather, scoreOpts);
      return { hour: h, score: b.score, level: b.level };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mesh, weather, baseDate, nearbyWeightedCount, nearbySightings, nearbyRadiusKm, prefCode, elevationM]);

  const monthly = useMemo(() => {
    return Array.from({ length: 12 }, (_, m) => {
      const d = new Date(baseDate);
      d.setMonth(m);
      const b = computeScore(mesh, d, null, scoreOpts);
      return { month: m, score: b.score, level: b.level };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mesh, baseDate, nearbyWeightedCount, nearbySightings, nearbyRadiusKm, prefCode, elevationM]);

  const hasAnyScore = hourly.some((h) => h.score > 0) || monthly.some((m) => m.score > 0);
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
      <ChartSection
        title="月別"
        subtitle="今の場所の年間パターン"
        data={monthly.map((d) => ({
          label: MONTH_LABEL[d.month],
          score: d.score,
          color: RISK_LEVEL_COLOR[d.level],
          highlighted: d.month === currentMonth,
          level: RISK_LEVEL_LABEL[d.level],
        }))}
        axisLabels={MONTH_LABEL}
        highlightLegend={`今月 (${MONTH_LABEL[currentMonth]})`}
        showAllAxis
      />
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
}: {
  title: string;
  subtitle: string;
  data: Bar[];
  axisLabels: string[];
  highlightLegend: string;
  showAllAxis?: boolean;
}) {
  const max = Math.max(50, ...data.map((d) => d.score));
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
