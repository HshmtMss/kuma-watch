"use client";

import { useCallback, useRef, useState } from "react";
import type { TileStyle } from "@/components/KumaMap";
import {
  DEFAULT_LEVEL_THRESHOLDS,
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
  type LevelThresholds,
} from "@/lib/score";
import type { RiskLevel } from "@/lib/types";

type Props = {
  tileStyle: TileStyle;
  heatmapOpacity: number;
  smoothingSigmaKm: number;
  haloOpacity: number;
  levelThresholds: LevelThresholds;
  onTileStyleChange: (v: TileStyle) => void;
  onHeatmapOpacityChange: (v: number) => void;
  onSmoothingSigmaKmChange: (v: number) => void;
  onHaloOpacityChange: (v: number) => void;
  onLevelThresholdsChange: (v: LevelThresholds) => void;
};

const TILE_OPTIONS: { value: TileStyle; label: string; icon: string }[] = [
  { value: "standard", label: "標準地図", icon: "🗺️" },
  { value: "satellite", label: "衛星写真", icon: "🛰️" },
  { value: "topo", label: "地形図", icon: "⛰️" },
];

const SIGMA_OPTIONS: { value: number; label: string }[] = [
  { value: 0, label: "OFF" },
  { value: 1, label: "微" },
  { value: 2, label: "弱" },
  { value: 3, label: "中" },
  { value: 4, label: "強" },
];

const LEVEL_ORDER: readonly RiskLevel[] = [
  "safe",
  "low",
  "moderate",
  "elevated",
  "high",
] as const;
const SCORE_MAX = 50;

/**
 * 1本のトラック上に 4 個のつまみを配置したマルチハンドルスライダー。
 * つまみは 0〜SCORE_MAX の範囲内で monotonic (昇順) に並び、
 * ドラッグしたら隣接つまみを押し出す。
 */
function MultiThresholdSlider({
  thresholds,
  onChange,
}: {
  thresholds: LevelThresholds;
  onChange: (next: LevelThresholds) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<number | null>(null);

  const updateFromPointer = useCallback(
    (idx: number, clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const value = Math.round(pct * SCORE_MAX);
      const next: [number, number, number, number] = [
        thresholds[0],
        thresholds[1],
        thresholds[2],
        thresholds[3],
      ];
      next[idx] = value;
      // monotonic 保証: 右隣は自分より小さくならない、左隣は自分より大きくならない
      for (let i = idx + 1; i <= 3; i++) {
        if (next[i] < next[i - 1]) next[i] = next[i - 1];
      }
      for (let i = idx - 1; i >= 0; i--) {
        if (next[i] > next[i + 1]) next[i] = next[i + 1];
      }
      onChange(next);
    },
    [thresholds, onChange],
  );

  const onThumbPointerDown =
    (idx: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
      e.preventDefault();
      (e.target as Element).setPointerCapture(e.pointerId);
      setDragging(idx);
    };
  const onThumbPointerMove =
    (idx: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
      if (dragging !== idx) return;
      updateFromPointer(idx, e.clientX);
    };
  const onThumbPointerUp =
    (idx: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
      if (dragging === idx) setDragging(null);
    };

  // 5 色セグメントの境界割合
  const stops = [0, ...thresholds, SCORE_MAX];

  return (
    <div className="px-2">
      <div className="relative h-10">
        {/* カラートラック (5 色セグメント) */}
        <div
          ref={trackRef}
          className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200"
        >
          {LEVEL_ORDER.map((lv, i) => {
            const left = (stops[i] / SCORE_MAX) * 100;
            const right = 100 - (stops[i + 1] / SCORE_MAX) * 100;
            return (
              <div
                key={lv}
                className="absolute inset-y-0"
                style={{
                  left: `${left}%`,
                  right: `${right}%`,
                  background: RISK_LEVEL_COLOR[lv],
                }}
              />
            );
          })}
        </div>
        {/* 4 個のつまみ */}
        {thresholds.map((v, idx) => (
          <button
            key={idx}
            type="button"
            role="slider"
            onPointerDown={onThumbPointerDown(idx)}
            onPointerMove={onThumbPointerMove(idx)}
            onPointerUp={onThumbPointerUp(idx)}
            onPointerCancel={onThumbPointerUp(idx)}
            style={{
              left: `${(v / SCORE_MAX) * 100}%`,
              touchAction: "none",
            }}
            className={`absolute top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-2 border-white bg-amber-600 shadow ${
              dragging === idx ? "scale-125 cursor-grabbing" : ""
            }`}
            aria-label={`${RISK_LEVEL_LABEL[LEVEL_ORDER[idx] as RiskLevel]} → ${RISK_LEVEL_LABEL[LEVEL_ORDER[idx + 1] as RiskLevel]} 境界`}
            aria-valuemin={0}
            aria-valuemax={SCORE_MAX}
            aria-valuenow={v}
          >
            <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-amber-900">
              {v}
            </span>
          </button>
        ))}
      </div>
      {/* ラベル行 (各段階の名前をセグメント中央に配置) */}
      <div className="relative mt-1 h-4">
        {LEVEL_ORDER.map((lv, i) => {
          const center = ((stops[i] + stops[i + 1]) / 2 / SCORE_MAX) * 100;
          return (
            <span
              key={lv}
              className="absolute top-0 -translate-x-1/2 text-[10px] text-gray-600"
              style={{ left: `${center}%` }}
            >
              {RISK_LEVEL_LABEL[lv]}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function SettingsPanel({
  tileStyle,
  heatmapOpacity,
  smoothingSigmaKm,
  haloOpacity,
  levelThresholds,
  onTileStyleChange,
  onHeatmapOpacityChange,
  onSmoothingSigmaKmChange,
  onHaloOpacityChange,
  onLevelThresholdsChange,
}: Props) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
      <div className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-900">
        <span aria-hidden>🗺️</span>
        地図スタイル
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {TILE_OPTIONS.map((opt) => {
          const active = tileStyle === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onTileStyleChange(opt.value)}
              className={`flex flex-col items-center gap-0.5 rounded-lg border px-2 py-2 text-xs transition ${
                active
                  ? "border-amber-600 bg-white font-semibold text-amber-800 shadow-sm"
                  : "border-amber-200 bg-white/60 text-gray-700 hover:bg-white"
              }`}
              aria-pressed={active}
            >
              <span className="text-lg" aria-hidden>
                {opt.icon}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-900">
        <span aria-hidden>🎨</span>
        ヒートマップ不透明度
        <span className="ml-auto text-xs font-medium text-amber-700">
          {Math.round(heatmapOpacity * 100)}%
        </span>
      </div>
      <input
        type="range"
        min={0.1}
        max={0.9}
        step={0.1}
        value={heatmapOpacity}
        onChange={(e) => onHeatmapOpacityChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-amber-200 accent-amber-600"
        aria-label="ヒートマップ不透明度"
      />

      <div className="mt-4 mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-900">
        <span aria-hidden>🌊</span>
        ヒートマップ平滑化
        <span className="ml-auto text-xs font-medium text-amber-700">
          {smoothingSigmaKm === 0
            ? "OFF"
            : `${2 * smoothingSigmaKm + 1}×${2 * smoothingSigmaKm + 1}`}
        </span>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {SIGMA_OPTIONS.map((opt) => {
          const active = smoothingSigmaKm === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSmoothingSigmaKmChange(opt.value)}
              className={`rounded-lg border px-1 py-1.5 text-xs transition ${
                active
                  ? "border-amber-600 bg-white font-semibold text-amber-800 shadow-sm"
                  : "border-amber-200 bg-white/60 text-gray-700 hover:bg-white"
              }`}
              aria-pressed={active}
              aria-label={`平滑化 ${opt.label}`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      <div className="mt-1 text-[10px] text-amber-700/80">
        隣接 n×n セルの平均で穴を埋める。赤い生息域は維持される
      </div>

      {smoothingSigmaKm > 0 && (
        <>
          <div className="mt-4 mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-900">
            <span aria-hidden>👻</span>
            穴埋めセルの濃さ
            <span className="ml-auto text-xs font-medium text-amber-700">
              {Math.round(haloOpacity * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={haloOpacity}
            onChange={(e) => onHaloOpacityChange(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-amber-200 accent-amber-600"
            aria-label="穴埋めセルの不透明度"
          />
          <div className="mt-1 text-[10px] text-amber-700/80">
            0% で穴埋めなし、100% で habitat と同じ濃さ
          </div>
        </>
      )}

      <div className="mt-4 mb-2 flex items-center gap-1.5 text-sm font-semibold text-amber-900">
        <span aria-hidden>📊</span>
        5 段階の境界値
        <button
          type="button"
          onClick={() =>
            onLevelThresholdsChange(
              DEFAULT_LEVEL_THRESHOLDS as unknown as LevelThresholds,
            )
          }
          className="ml-auto rounded-full border border-amber-300 bg-white px-2 py-0.5 text-[10px] text-amber-700 hover:bg-amber-50"
        >
          既定に戻す
        </button>
      </div>
      <MultiThresholdSlider
        thresholds={levelThresholds}
        onChange={onLevelThresholdsChange}
      />
      <div className="mt-2 text-[10px] text-amber-700/80">
        4 つのつまみをドラッグして、スコア 0〜50 のどこで色が切り替わるかを調整
      </div>
    </div>
  );
}
