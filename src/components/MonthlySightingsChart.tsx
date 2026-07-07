"use client";

/**
 * 「月別の出没」— この地点の周辺の実測件数を、昨年 vs 今年で月別に並べて比較する。
 * 全国季節波形(どの地点でも同形)ではなく、地点固有の実データを見せる。地図カード用。
 */

type Props = {
  /** 今年の月別実測件数 (0=1月..11=12月) */
  monthlyThisYear?: number[];
  /** 昨年の月別実測件数 (0=1月..11=12月) */
  monthlyLastYear?: number[];
  thisYear: number;
  lastYear: number;
  /** 今月 (0-11)。今年バーを強調する。 */
  currentMonth: number;
  nearbyRadiusKm?: number;
};

const COLOR_LAST = "#d6d3d1"; // stone-300 (昨年)
const COLOR_THIS = "#f59e0b"; // amber-500 (今年)

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
      <p className="text-[11px] leading-relaxed text-gray-500">
        この周辺（{nearbyRadiusKm}km）の月別データはまだ十分ではありません。
      </p>
    );
  }

  const max = Math.max(1, ...ty, ...ly);
  const barH = (v: number) => (v > 0 ? Math.max(4, (v / max) * 100) : 0);

  return (
    <div>
      <div className="mb-1 text-[10px] text-gray-500">
        周辺{nearbyRadiusKm}kmの目撃件数（月別）
      </div>
      <div className="flex h-24 items-end gap-[3px]">
        {Array.from({ length: 12 }, (_, m) => (
          <div
            key={m}
            className="relative h-full flex-1"
            title={`${m + 1}月: ${lastYear}年 ${ly[m]}件 / ${thisYear}年 ${ty[m]}件`}
          >
            <div
              className="absolute bottom-0 left-0 w-[46%] rounded-t-sm"
              style={{ height: `${barH(ly[m])}%`, background: COLOR_LAST }}
            />
            <div
              className="absolute bottom-0 right-0 w-[46%] rounded-t-sm"
              style={{
                height: `${barH(ty[m])}%`,
                background: COLOR_THIS,
                outline: m === currentMonth ? `1.5px solid ${COLOR_THIS}` : "none",
                outlineOffset: "1px",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-[3px] text-[9px] text-gray-400">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="flex-1 text-center">
            {i + 1}
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex items-center gap-3 text-[10px] text-gray-600">
        <span className="flex items-center gap-1">
          <span
            className="inline-block h-2 w-3 rounded-sm"
            style={{ background: COLOR_LAST }}
          />
          {lastYear}年
        </span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block h-2 w-3 rounded-sm"
            style={{ background: COLOR_THIS }}
          />
          {thisYear}年
        </span>
      </div>
    </div>
  );
}
