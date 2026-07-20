/**
 * 記事内の横棒。単一系列 + 直接ラベルなので凡例が要らず、色だけに情報を
 * 持たせない。値は必ず数字でも書く（色覚や印刷に依存させないため）。
 *
 * 「件数」と「率」のように尺度が違う量を1つのグラフに重ねない。棒は片方
 * （読ませたい方）だけに使い、もう片方は文字で添える。
 */
export function BarRow({
  label,
  /** 棒の長さを決める値（0-1 の比率） */
  ratio,
  /** 棒の右に出す値の表示 */
  valueText,
  /** ラベルの下に小さく添える補足 */
  note,
  emphasis = false,
}: {
  label: string;
  ratio: number;
  valueText: string;
  note?: string;
  emphasis?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, ratio * 100));
  return (
    <div className="flex items-center gap-3 py-1.5">
      <div className="w-28 shrink-0 sm:w-36">
        <div className="text-[13px] font-semibold leading-tight text-stone-800">
          {label}
        </div>
        {note && (
          <div className="text-[11px] leading-tight text-stone-500">{note}</div>
        )}
      </div>
      <div className="h-5 flex-1 rounded-sm bg-stone-100">
        <div
          className={`h-5 rounded-sm ${emphasis ? "bg-amber-500" : "bg-stone-400"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div
        className={`w-20 shrink-0 text-right text-[13px] font-bold tabular-nums ${
          emphasis ? "text-amber-800" : "text-stone-700"
        }`}
      >
        {valueText}
      </div>
    </div>
  );
}

/** 月別の縦棒。ピーク月だけ色を変えて直接ラベルする。 */
export function MonthlyBars({
  monthly,
  peakMonth,
  unit = "件",
}: {
  monthly: number[];
  peakMonth: number;
  unit?: string;
}) {
  const max = Math.max(...monthly, 1);
  return (
    <div className="not-prose">
      <div className="flex h-28 items-end gap-1">
        {monthly.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`w-full rounded-t-sm ${i + 1 === peakMonth ? "bg-amber-500" : "bg-stone-300"}`}
              style={{ height: `${Math.max(2, (v / max) * 100)}%` }}
            />
            <span
              className={`text-[10px] tabular-nums ${i + 1 === peakMonth ? "font-bold text-amber-800" : "text-stone-400"}`}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-1 text-center text-[12px] text-stone-500">
        最も多いのは <strong className="text-amber-800">{peakMonth}月</strong>（
        {monthly[peakMonth - 1].toLocaleString()}
        {unit}）
      </p>
    </div>
  );
}
