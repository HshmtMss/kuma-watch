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

/**
 * 時間帯ごとの偏り。基準線(1.0倍)を引いた単一系列。
 *
 * 時刻ごと(24本)にすると人身被害の母数が足りず、隣り合う棒が上下するだけの
 * 図になる。4時間ずつの帯に束ねて、各帯の母数を確保している。
 */
export function HourBands({
  bands,
}: {
  bands: { label: string; lift: number; injuries: number }[];
}) {
  const max = Math.max(...bands.map((b) => b.lift), 1.5);
  return (
    <div className="not-prose">
      <div className="flex h-32 items-end gap-2">
        {bands.map((b) => {
          const hot = b.lift >= 1.3;
          return (
            <div key={b.label} className="flex flex-1 flex-col items-center gap-1">
              <span
                className={`text-[11px] font-bold tabular-nums ${hot ? "text-amber-800" : "text-stone-500"}`}
              >
                {b.lift.toFixed(1)}
              </span>
              <div className="relative flex w-full flex-1 items-end">
                {/* 基準線 = 1.0倍（偏りなし） */}
                <div
                  className="absolute inset-x-0 border-t border-dashed border-stone-300"
                  style={{ bottom: `${(1 / max) * 100}%` }}
                />
                <div
                  className={`w-full rounded-t-sm ${hot ? "bg-amber-500" : "bg-stone-300"}`}
                  style={{ height: `${Math.max(2, (b.lift / max) * 100)}%` }}
                />
              </div>
              <span className="text-[10px] leading-tight text-stone-500">
                {b.label}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-stone-500">
        破線が1.0倍（偏りなし）。上に出ている帯は、その時間帯の通報のうち
        人身被害の占める割合が高いことを示します。
      </p>
    </div>
  );
}

/**
 * 2地域の年ごとの値を並べる小さな多面図。
 * 同じ目盛りを共有するので、県をまたいで高さをそのまま比べられる。
 */
export function RegionCompare({
  regions,
  caption,
}: {
  regions: { region: string; note: string; series: { year: number; ratio: number }[] }[];
  caption: string;
}) {
  const max = Math.max(
    ...regions.flatMap((r) => r.series.map((s) => s.ratio)),
    1,
  );
  return (
    <div className="not-prose">
      <div className="grid gap-4 sm:grid-cols-2">
        {regions.map((r) => (
          <div key={r.region} className="rounded-xl border border-stone-200 p-3">
            <div className="text-[13px] font-bold text-stone-800">{r.region}</div>
            <div className="text-[11px] leading-tight text-stone-500">{r.note}</div>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {r.series.map((s) => {
                const autumn = s.ratio >= 1;
                return (
                  <div key={s.year} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t-sm ${autumn ? "bg-amber-500" : "bg-stone-300"}`}
                      style={{ height: `${Math.max(2, (s.ratio / max) * 100)}%` }}
                    />
                    <span className="text-[10px] tabular-nums text-stone-400">
                      {String(s.year).slice(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-stone-500">{caption}</p>
    </div>
  );
}
