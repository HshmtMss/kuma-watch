export type HourSeasonRow = { month: number; total: number; buckets: number[] };
export type HourSeasonHeatmap = {
  rows: HourSeasonRow[];
  withTime: number;
  totalRecords: number;
  peak: { month: number; bucket: number; count: number };
};

// バケット(2時間刻み)の代表ラベル。12個。
const HOURS = Array.from({ length: 12 }, (_, i) => i * 2);
const LOW_SAMPLE = 30; // これ未満の月は色を薄めて「参考」に

// 行内シェア(cell/rowMax)に応じた色。0 は無色。
function cellColor(share: number): string {
  if (share <= 0) return "#f5f5f4"; // stone-100
  if (share < 0.2) return "#fef3c7"; // amber-100
  if (share < 0.4) return "#fcd34d"; // amber-300
  if (share < 0.6) return "#f59e0b"; // amber-500
  if (share < 0.8) return "#ea580c"; // orange-600
  return "#dc2626"; // red-600
}

function bucketLabel(b: number): string {
  const s = b * 2;
  return `${s}〜${s + 2}時`;
}

export default function AnalyticsHourSeason({
  data,
}: {
  data: HourSeasonHeatmap;
}) {
  const coverage =
    data.totalRecords > 0
      ? Math.round((data.withTime / data.totalRecords) * 100)
      : 0;

  // よく採れている月(母数≥LOW_SAMPLE)で、最多バケットの分布から一言を作る。
  const wellSampled = data.rows.filter((r) => r.total >= LOW_SAMPLE);
  const modal = (r: HourSeasonRow) =>
    r.buckets.indexOf(Math.max(...r.buckets));
  const duskMonths = wellSampled.filter((r) => {
    const b = modal(r);
    return b >= 7 && b <= 9; // 14-20時
  });
  const dawnMonths = wellSampled.filter((r) => {
    const b = modal(r);
    return b >= 2 && b <= 4; // 4-10時
  });

  return (
    <div className="not-prose">
      <div className="overflow-x-auto">
        <div className="min-w-[320px]">
          {/* 時間帯ラベル(上) */}
          <div
            className="grid items-end gap-px pb-1"
            style={{ gridTemplateColumns: "2.5rem repeat(12, 1fr)" }}
          >
            <div />
            {HOURS.map((h) => (
              <div
                key={h}
                className="text-center text-[9px] tabular-nums text-stone-400"
              >
                {h % 4 === 0 ? h : ""}
              </div>
            ))}
          </div>

          {/* 各月の行 */}
          {data.rows.map((r) => {
            const rowMax = Math.max(1, ...r.buckets);
            const low = r.total < LOW_SAMPLE;
            return (
              <div
                key={r.month}
                className={`grid items-center gap-px py-px ${low ? "opacity-40" : ""}`}
                style={{ gridTemplateColumns: "2.5rem repeat(12, 1fr)" }}
              >
                <div className="pr-1 text-right text-[11px] font-medium tabular-nums text-stone-600">
                  {r.month}月
                </div>
                {r.buckets.map((c, b) => {
                  const isPeak =
                    r.month === data.peak.month && b === data.peak.bucket;
                  return (
                    <div
                      key={b}
                      title={`${r.month}月 ${bucketLabel(b)}：${c}件`}
                      className={`h-5 rounded-sm ${isPeak ? "ring-2 ring-stone-800" : ""}`}
                      style={{ background: cellColor(c / rowMax) }}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* 凡例(下) */}
          <div className="mt-2 flex items-center gap-2 text-[11px] text-stone-500">
            <span>その月で少</span>
            <span className="inline-flex overflow-hidden rounded">
              {["#fef3c7", "#fcd34d", "#f59e0b", "#ea580c", "#dc2626"].map(
                (c) => (
                  <span
                    key={c}
                    className="inline-block h-2.5 w-6"
                    style={{ background: c }}
                  />
                ),
              )}
            </span>
            <span>多</span>
            <span className="ml-auto text-[10px] text-stone-400">
              各行はその月内での多さで色付け（横=時間帯）
            </span>
          </div>
        </div>
      </div>

      {/* 自動の一言 */}
      {wellSampled.length > 0 && (
        <p className="mt-3 text-sm leading-relaxed text-stone-700">
          最も出没が多いのは{" "}
          <span className="font-bold text-red-700">
            {data.peak.month}月の{bucketLabel(data.peak.bucket)}
          </span>
          。{duskMonths.length >= dawnMonths.length ? (
            <>
              多くの月は<span className="font-bold">夕方（14〜20時）</span>に山が来るが、
              {dawnMonths.length > 0 && (
                <>
                  {" "}
                  <span className="font-bold text-amber-700">
                    {dawnMonths.map((r) => `${r.month}月`).join("・")}
                  </span>
                  は<span className="font-bold">早朝（4〜10時）</span>に移る。
                </>
              )}
            </>
          ) : (
            <>早朝に山が来る月が多い。</>
          )}
        </p>
      )}

      <p className="mt-2 text-[11px] leading-relaxed text-stone-400">
        時刻の記録がある {data.withTime.toLocaleString()} 件（全体の {coverage}%）で集計。
        時刻の有無は情報源によって偏るため、時間帯の傾向は目安として読むこと。母数が
        {LOW_SAMPLE}件未満の月は薄く表示（1〜2件で色が振れるため）。
      </p>
    </div>
  );
}
