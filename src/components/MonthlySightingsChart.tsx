"use client";

/**
 * 「月別の出没」— この地点の周辺の実測件数を、去年 vs 今年で月別に比較する。
 * 全国季節波形(どの地点でも同形)ではなく、地点固有の実データを見せる。地図カード用。
 *
 * 10km 圏の月別件数は 0〜数件の整数データなので、折れ線だと意味のない上下(ノイズ)が
 * 目立って「適当」に見える。そこで「去年=薄灰 / 今年=橙」の並列棒にし、Y 軸に件数の
 * 目盛り(0・最大)と単位を必ず添える。今年は今月までしか棒を描かない(未来を 0 に
 * 見せて誤解させない)。年途中で今年が低く見える不公平は、上部の一文
 * 「今年ここまで N 件（前年同期 M 件）」で言葉で解消する。
 */

type Props = {
  monthlyThisYear?: number[];
  monthlyLastYear?: number[];
  thisYear: number;
  lastYear: number;
  /** 今月 (0-11)。今年の棒はここまで。 */
  currentMonth: number;
  nearbyRadiusKm?: number;
};

const COLOR_LAST = "#d6d3d1"; // stone-300 (去年)
const COLOR_THIS = "#f59e0b"; // amber-500 (今年)

// SVG 座標系
const W = 340;
const H = 150;
const PAD_LEFT = 28; // Y 軸目盛りラベル用 (最大目盛りに「件」を添えるぶん広め)
const PAD_RIGHT = 8;
const PAD_TOP = 10;
const PAD_BOTTOM = 30; // 月ラベル + 「今月」用
const PLOT_W = W - PAD_LEFT - PAD_RIGHT;
const PLOT_H = H - PAD_TOP - PAD_BOTTOM;

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

  // 同期比較 (フェアな YoY): 今年は今月まで / 去年も同じ月まで。
  const thisToDate = ty.slice(0, currentMonth + 1).reduce((a, b) => a + b, 0);
  const lastToDate = ly.slice(0, currentMonth + 1).reduce((a, b) => a + b, 0);
  const diff = thisToDate - lastToDate;
  const trend =
    diff > 0
      ? { mark: "▲", cls: "text-red-600", word: "増" }
      : diff < 0
        ? { mark: "▼", cls: "text-emerald-600", word: "減" }
        : { mark: "≈", cls: "text-gray-500", word: "同水準" };

  // Y 軸目盛り: 0 と「切りのよい最大」。4 以上なら中間目盛りも足す。
  const rawMax = Math.max(1, ...ty, ...ly);
  const niceMax = rawMax <= 5 ? rawMax : Math.ceil(rawMax / 5) * 5;
  const ticks =
    niceMax >= 4 && niceMax % 2 === 0 ? [0, niceMax / 2, niceMax] : [0, niceMax];

  const slotW = PLOT_W / 12;
  const gap = 2; // 去年棒と今年棒の間
  const barW = Math.max(3, (slotW * 0.62 - gap) / 2);
  const yOf = (v: number) => PAD_TOP + PLOT_H - (v / niceMax) * PLOT_H;
  const baselineY = PAD_TOP + PLOT_H;
  const slotCenter = (m: number) => PAD_LEFT + slotW * (m + 0.5);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        <div className="min-w-0 text-[11px] text-gray-500">
          周辺{nearbyRadiusKm}kmの目撃件数（月別）
        </div>
        <div className="flex shrink-0 items-center gap-3 text-[11px] font-medium">
          <span className="flex items-center gap-1 text-gray-500">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ background: COLOR_LAST }}
            />
            {lastYear}
          </span>
          <span className="flex items-center gap-1 text-amber-700">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sm"
              style={{ background: COLOR_THIS }}
            />
            {thisYear}
          </span>
        </div>
      </div>

      {/* フェアな YoY を言葉で断言 (今年は年途中なので棒の総量だけでは誤解する) */}
      <p className="mb-1.5 text-xs leading-snug text-gray-700">
        今年ここまで
        <span className="font-bold text-amber-700"> {thisToDate}件</span>
        <span className="text-gray-500">
          （前年同期 {lastToDate}件{" "}
          <span className={`font-semibold ${trend.cls}`}>
            {trend.mark}
            {diff !== 0 ? Math.abs(diff) : ""}
          </span>
          ）
        </span>
      </p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`月別の出没件数 周辺${nearbyRadiusKm}km ${lastYear}年 対 ${thisYear}年。今年はここまで${thisToDate}件、前年同期${lastToDate}件。`}
      >
        {/* Y 軸目盛り (横グリッド + 件数ラベル) */}
        {ticks.map((t) => (
          <g key={`tick${t}`}>
            <line
              x1={PAD_LEFT}
              y1={yOf(t)}
              x2={W - PAD_RIGHT}
              y2={yOf(t)}
              stroke={t === 0 ? "#d1d5db" : "#f1f1f0"}
              strokeWidth="1"
            />
            <text
              x={PAD_LEFT - 5}
              y={yOf(t) + 3.5}
              textAnchor="end"
              fontSize="10"
              fill="#9ca3af"
            >
              {t === niceMax ? `${t}件` : t}
            </text>
          </g>
        ))}

        {/* 棒: 各月に 去年(薄灰) / 今年(橙) を並列。今年は今月まで。 */}
        {Array.from({ length: 12 }, (_, m) => {
          const cx = slotCenter(m);
          const lastX = cx - barW - gap / 2;
          const thisX = cx + gap / 2;
          const lv = ly[m];
          const tv = ty[m];
          const showThis = m <= currentMonth;
          const isCurrent = m === currentMonth;
          return (
            <g key={`bar${m}`}>
              {lv > 0 && (
                <rect
                  x={lastX}
                  y={yOf(lv)}
                  width={barW}
                  height={baselineY - yOf(lv)}
                  rx="1.5"
                  fill={COLOR_LAST}
                />
              )}
              {showThis && tv > 0 && (
                <rect
                  x={thisX}
                  y={yOf(tv)}
                  width={barW}
                  height={baselineY - yOf(tv)}
                  rx="1.5"
                  fill={COLOR_THIS}
                />
              )}
              {/* 今月マーカー */}
              {isCurrent && (
                <text
                  x={cx}
                  y={H - 2}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="#b45309"
                >
                  今月
                </text>
              )}
              {/* 月ラベル */}
              <text
                x={cx}
                y={baselineY + 12}
                textAnchor="middle"
                fontSize="10"
                fill={isCurrent ? "#b45309" : "#9ca3af"}
                fontWeight={isCurrent ? "700" : "400"}
              >
                {m + 1}
              </text>
            </g>
          );
        })}
        {/* X 軸単位 */}
        <text x={W - PAD_RIGHT} y={baselineY + 12} textAnchor="end" fontSize="9" fill="#9ca3af">
          月
        </text>
      </svg>
    </div>
  );
}
