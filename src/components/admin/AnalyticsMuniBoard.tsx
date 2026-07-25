export type SurgeLevel = "surge" | "rising" | "steady" | "quiet";
export type MuniRow = {
  muni: string;
  recent: number;
  prev: number;
  delta: number;
  ratio: number | null;
  level: SurgeLevel;
  total12mo: number;
  share: number;
};
export type MunicipalityBoard = {
  pref: string;
  recentLabel: string;
  prevLabel: string;
  prefTotal12mo: number;
  prefRecent: number;
  prefPrev: number;
  muniCount: number;
  rows: MuniRow[];
};

const LEVEL: Record<SurgeLevel, { word: string; dot: string; text: string }> = {
  surge: { word: "急増", dot: "bg-red-600", text: "text-red-700" },
  rising: { word: "増加", dot: "bg-orange-500", text: "text-orange-700" },
  steady: { word: "横ばい", dot: "bg-stone-300", text: "text-stone-500" },
  quiet: { word: "減少", dot: "bg-sky-500", text: "text-sky-700" },
};

function MuniLine({ r, maxShare }: { r: MuniRow; maxShare: number }) {
  const lv = LEVEL[r.level];
  const w = maxShare > 0 ? (r.share / maxShare) * 100 : 0;
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <span className="w-20 shrink-0 truncate text-sm font-medium text-stone-800">
        {r.muni || "（市町村不明）"}
      </span>
      <div className="min-w-0 flex-1">
        <div className="h-2.5 w-full rounded bg-stone-100">
          <div
            className="h-2.5 rounded bg-amber-400"
            style={{ width: `${w}%` }}
          />
        </div>
      </div>
      <span className="w-24 shrink-0 text-right text-[11px] tabular-nums text-stone-500">
        年間{" "}
        <span className="font-bold text-stone-800">
          {r.total12mo.toLocaleString()}
        </span>
        <span className="ml-1 text-stone-400">{r.share}%</span>
      </span>
      <span className="flex w-24 shrink-0 items-center justify-end gap-1 text-[11px] tabular-nums">
        <span className={`h-1.5 w-1.5 rounded-full ${lv.dot}`} />
        <span className={`font-bold ${lv.text}`}>
          {r.level === "steady" ? "—" : lv.word}
        </span>
        <span className="text-stone-400">
          {r.prev}
          <span className="text-stone-300">▸</span>
          <span className="font-bold text-stone-700">{r.recent}</span>
        </span>
      </span>
    </div>
  );
}

export default function AnalyticsMuniBoard({
  data,
}: {
  data: MunicipalityBoard;
}) {
  const maxShare = Math.max(1, ...data.rows.map((r) => r.share));
  const risingCount = data.rows.filter(
    (r) => r.level === "surge" || r.level === "rising",
  ).length;
  const prefRatio =
    data.prefPrev > 0 ? (data.prefRecent / data.prefPrev).toFixed(2) : "—";

  return (
    <div className="not-prose">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm">
        <span className="font-bold text-stone-900">{data.pref}</span>
        <span className="text-stone-600">
          直近1年{" "}
          <span className="font-bold tabular-nums">
            {data.prefTotal12mo.toLocaleString()}
          </span>{" "}
          件
        </span>
        <span className="text-stone-600">
          出没した市町村{" "}
          <span className="font-bold tabular-nums">{data.muniCount}</span>
        </span>
        <span className="text-stone-600">
          直近30日{" "}
          <span className="font-bold tabular-nums">{data.prefRecent}</span>
          <span className="ml-1 text-xs text-stone-400">
            （前30日 {data.prefPrev}・比 {prefRatio}）
          </span>
        </span>
        {risingCount > 0 && (
          <span className="ml-auto rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-bold text-orange-700">
            増加中の市町村 {risingCount}
          </span>
        )}
      </div>

      <div className="mt-2 flex items-baseline justify-between">
        <h4 className="text-sm font-bold text-stone-800">
          県内の市町村（出没の多い順）
        </h4>
        <span className="text-[10px] text-stone-400">
          バー = 県内シェア／右端 = 直近30日の動き（前▸直近）
        </span>
      </div>
      <div className="mt-1 divide-y divide-stone-100">
        {data.rows.map((r) => (
          <MuniLine key={r.muni || "unknown"} r={r} maxShare={maxShare} />
        ))}
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-stone-400">
        「県内シェア」は直近1年の県内出没に占める割合。動き（急増/増加）は直近30日（
        {data.recentLabel}）と直前30日（{data.prevLabel}）の比較で、母数の小さい町村は
        1〜2件の増減でも比率が大きく振れる点に注意。市町村名が空の通報はまとめて「不明」。
      </p>
    </div>
  );
}
