"use client";

import { useEffect, useState } from "react";
import type { RiskLevel } from "@/lib/types";
import { RISK_LEVEL_COLOR, SOFT_LEVEL_LABEL } from "@/lib/score";
import {
  classifyLocationType,
  LOCATION_TYPE_META,
} from "@/lib/location-type";
import type { SummaryResponse } from "@/app/api/summary/route";

type Props = {
  level: RiskLevel;
  score: number;
  elevationM: number | null;
  isForest: boolean | null;
  prefCode?: string;
  lat: number;
  lon: number;
  muniName?: string;
};

const LEVELS: RiskLevel[] = ["safe", "low", "moderate", "elevated", "high"];

export default function RiskHero({
  level,
  score,
  elevationM,
  isForest,
  prefCode,
  lat,
  lon,
  muniName,
}: Props) {
  const locationType = classifyLocationType(elevationM, isForest);
  const meta = LOCATION_TYPE_META[locationType];
  // バーと badge と同じ語彙 (SOFT_LEVEL_LABEL) を使って統一。
  // 場所タイプ (🌲 山間部 etc.) は別行で提示。
  const verdict =
    level === "unknown" ? "計算中..." : SOFT_LEVEL_LABEL[level];
  const activeIdx = LEVELS.indexOf(level);

  // LLM 文脈補足: /api/summary の summary フィールドを引く
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!prefCode) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag before external fetch
    setLoading(true);
    const params = new URLSearchParams({ prefCode });
    if (Number.isFinite(lat)) params.set("lat", lat.toFixed(5));
    if (Number.isFinite(lon)) params.set("lon", lon.toFixed(5));
    if (muniName) params.set("muniName", muniName);
    fetch(`/api/summary?${params.toString()}`)
      .then((r) => (r.ok ? (r.json() as Promise<SummaryResponse>) : null))
      .then((data) => {
        if (!cancelled && data?.summary) setSummary(data.summary);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [prefCode, lat, lon, muniName]);

  return (
    <section className="px-4 py-4">
      {/* 1. 場所タイプ × 一言判定 */}
      <div className="rounded-xl bg-stone-50 p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl" aria-hidden>
            {meta.emoji}
          </span>
          <span className="text-xs font-medium text-stone-500">
            {meta.label}
          </span>
        </div>
        <div className="mt-2 text-xl font-bold text-stone-900">
          {verdict}
        </div>
      </div>

      {/* 2. 5 段階バー (柔らかラベル) */}
      <div className="mt-4">
        <div className="flex gap-1">
          {LEVELS.map((lv, idx) => (
            <div
              key={lv}
              className="h-1.5 flex-1 rounded-full"
              style={{
                background:
                  activeIdx >= 0 && idx <= activeIdx
                    ? RISK_LEVEL_COLOR[lv]
                    : "#e5e5e5",
              }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[9px] text-stone-500">
          {LEVELS.map((lv) => (
            <span
              key={lv}
              className={
                lv === level ? "font-semibold text-stone-900" : undefined
              }
            >
              {SOFT_LEVEL_LABEL[lv]}
            </span>
          ))}
        </div>
        <div className="mt-1 text-right text-[9px] text-stone-400">
          スコア {score} / 100
        </div>
      </div>

      {/* 3. LLM 文脈補足 */}
      {(summary || loading) && (
        <div className="mt-4 rounded-xl border-l-4 border-blue-400 bg-blue-50/60 p-4">
          {summary ? (
            <p className="text-sm leading-relaxed text-gray-800">
              {summary}
            </p>
          ) : (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              状況を要約中...
            </div>
          )}
        </div>
      )}
    </section>
  );
}
