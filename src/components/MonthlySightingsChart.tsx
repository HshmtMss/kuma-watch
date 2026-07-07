"use client";

/**
 * 「月別の出没」— この地点の周辺の実測件数を、去年 vs 今年で月別に折れ線で比較する。
 * 全国季節波形(どの地点でも同形)ではなく、地点固有の実データを見せる。地図カード用。
 * 今年は「今月まで」しか線を引かない(未来の月を0にして誤解させない)。
 */

type Props = {
  monthlyThisYear?: number[];
  monthlyLastYear?: number[];
  thisYear: number;
  lastYear: number;
  /** 今月 (0-11)。今年の線はここまで。 */
  currentMonth: number;
  nearbyRadiusKm?: number;
};

const COLOR_LAST = "#a8a29e"; // stone-400 (去年)
const COLOR_THIS = "#f59e0b"; // amber-500 (今年)

// SVG 座標系
const W = 340;
const H = 132;
const PAD_X = 10;
const PAD_TOP = 10;
const PAD_BOTTOM = 26;
const CHART_H = H - PAD_TOP - PAD_BOTTOM;

export default function MonthlySightingsChart({
  monthlyThisYear = [],
  monthlyLastYear = [],
  thisYear,
  lastYear,
  currentMonth,
  nearbyRadiusKm = 10,
}: Props) {
  const ty = monthlyThisYear.length === 12 ? monthlyThisYear : new Array(12).fill(0);
  const ly = monthlyLastYear.length === 12 ? monthlyLastYear : new Array(12).fill(0);
  const total = ty.reduce((a, b) => a + b, 0) + ly.reduce((a, b) => a + b, 0);

  if (total < 3) {
    return (
      <p className="text-xs leading-relaxed text-gray-500">
        この周辺（{nearbyRadiusKm}km）の月別データはまだ十分ではありません。
      </p>
    );
  }

  const max = Math.max(1, ...ty, ...ly);
  const xStep = (W - 2 * PAD_X) / 11;
  const x = (m: number) => PAD_X + m * xStep;
  const y = (v: number) => PAD_TOP + (1 - v / max) * CHART_H;

  const lastPts = ly.map((v, m) => `${x(m)},${y(v)}`).join(" ");
  const thisPts = ty
    .slice(0, currentMonth + 1)
    .map((v, m) => `${x(m)},${y(v)}`)
    .join(" ");
  const baselineY = y(0);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <div className="text-[11px] text-gray-500">
          周辺{nearbyRadiusKm}kmの目撃件数
        </div>
        <div className="flex items-center gap-3 text-[11px] font-medium">
          <span className="flex items-center gap-1 text-gray-500">
            <span
              className="inline-block h-0.5 w-4 rounded"
              style={{ background: COLOR_LAST }}
            />
            {lastYear}
          </span>
          <span className="flex items-center gap-1 text-amber-700">
            <span
              className="inline-block h-1 w-4 rounded"
              style={{ background: COLOR_THIS }}
            />
            {thisYear}
          </span>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`月別の出没 ${lastYear}年と${thisYear}年の比較`}
      >
        {/* ベースライン */}
        <line
          x1={PAD_X}
          y1={baselineY}
          x2={W - PAD_X}
          y2={baselineY}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        {/* 今月の縦ガイド */}
        <line
          x1={x(currentMonth)}
          y1={PAD_TOP}
          x2={x(currentMonth)}
          y2={baselineY}
          stroke="#fde68a"
          strokeWidth="1.5"
        />
        {/* 去年の折れ線 */}
        <polyline
          points={lastPts}
          fill="none"
          stroke={COLOR_LAST}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {ly.map((v, m) => (
          <circle key={`l${m}`} cx={x(m)} cy={y(v)} r="2" fill={COLOR_LAST} />
        ))}
        {/* 今年の折れ線 (今月まで) */}
        <polyline
          points={thisPts}
          fill="none"
          stroke={COLOR_THIS}
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {ty.slice(0, currentMonth + 1).map((v, m) => (
          <circle
            key={`t${m}`}
            cx={x(m)}
            cy={y(v)}
            r={m === currentMonth ? "4" : "2.5"}
            fill={COLOR_THIS}
          />
        ))}
        {/* 月ラベル */}
        {Array.from({ length: 12 }, (_, m) => (
          <text
            key={`x${m}`}
            x={x(m)}
            y={H - 9}
            textAnchor="middle"
            fontSize="11"
            fill="#9ca3af"
          >
            {m + 1}
          </text>
        ))}
      </svg>
    </div>
  );
}
