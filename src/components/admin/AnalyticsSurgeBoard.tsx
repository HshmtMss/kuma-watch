import type { ReactNode } from "react";

export type SurgeLevel = "surge" | "rising" | "steady" | "quiet";
export type SurgeRow = {
  pref: string;
  recent: number;
  prev: number;
  delta: number;
  ratio: number | null;
  level: SurgeLevel;
};
export type SurgeBoard = {
  windowDays: number;
  recentLabel: string;
  prevLabel: string;
  national: {
    recent: number;
    prev: number;
    delta: number;
    ratio: number | null;
    level: SurgeLevel;
    recent7: number;
    prev7: number;
  };
  rising: SurgeRow[];
  quiet: SurgeRow[];
};

const LEVEL: Record<
  SurgeLevel,
  { word: string; dot: string; text: string; bar: string }
> = {
  surge: {
    word: "急増",
    dot: "bg-red-600",
    text: "text-red-700",
    bar: "#dc2626",
  },
  rising: {
    word: "増加",
    dot: "bg-orange-500",
    text: "text-orange-700",
    bar: "#f97316",
  },
  steady: {
    word: "横ばい",
    dot: "bg-stone-400",
    text: "text-stone-600",
    bar: "#a8a29e",
  },
  quiet: {
    word: "減少",
    dot: "bg-sky-500",
    text: "text-sky-700",
    bar: "#0ea5e9",
  },
};

// 前窓を基準線（縦チック）、直近を塗りで表す横バー。伸び=基準超え。
function CompareBar({
  recent,
  prev,
  max,
  color,
}: {
  recent: number;
  prev: number;
  max: number;
  color: string;
}) {
  const rw = max > 0 ? (recent / max) * 100 : 0;
  const pl = max > 0 ? (prev / max) * 100 : 0;
  return (
    <div className="relative h-2.5 w-full rounded bg-stone-100">
      <div
        className="absolute inset-y-0 left-0 rounded"
        style={{ width: `${rw}%`, background: color }}
      />
      {prev > 0 && (
        <div
          className="absolute -top-0.5 h-3.5 w-0.5 bg-stone-500"
          style={{ left: `calc(${pl}% - 1px)` }}
          title={`前窓 ${prev}件`}
        />
      )}
    </div>
  );
}

function Row({ r, max }: { r: SurgeRow; max: number }) {
  const lv = LEVEL[r.level];
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <span className={`h-2 w-2 shrink-0 rounded-full ${lv.dot}`} />
      <span className="w-16 shrink-0 text-sm font-medium text-stone-800">
        {r.pref}
      </span>
      <div className="min-w-0 flex-1">
        <CompareBar
          recent={r.recent}
          prev={r.prev}
          max={max}
          color={lv.bar}
        />
      </div>
      <span className="w-24 shrink-0 text-right text-[11px] tabular-nums text-stone-500">
        {r.prev} <span className="text-stone-300">▸</span>{" "}
        <span className="font-bold text-stone-800">{r.recent}</span>
      </span>
      <span
        className={`w-12 shrink-0 text-right text-xs font-bold tabular-nums ${lv.text}`}
      >
        {r.ratio == null ? "新規" : `×${r.ratio}`}
      </span>
    </div>
  );
}

export default function AnalyticsSurgeBoard({ data }: { data: SurgeBoard }) {
  const n = data.national;
  const nlv = LEVEL[n.level];
  const max = Math.max(
    1,
    ...data.rising.map((r) => Math.max(r.recent, r.prev)),
  );
  const quietMax = Math.max(
    1,
    ...data.quiet.map((r) => Math.max(r.recent, r.prev)),
  );

  // 自動の一言（So-What）。急増/増加の県名を並べる。
  const names = data.rising.slice(0, 4).map((r) => r.pref);
  let soWhat: ReactNode = null;
  if (names.length) {
    soWhat = (
      <>
        注目 —{" "}
        <span className="font-bold text-orange-700">{names.join("・")}</span>
        {data.rising.length > names.length
          ? ` ほか${data.rising.length - names.length}県`
          : ""}
        で増加。
      </>
    );
  } else {
    soWhat = <>目立った急増地域はなし。</>;
  }

  return (
    <div className="not-prose">
      {/* 全国ヘッドライン */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${nlv.dot}`} />
          <span className="text-xs text-stone-500">全国の傾向</span>
          <span className={`text-lg font-bold ${nlv.text}`}>{nlv.word}</span>
        </div>
        <div className="text-sm text-stone-600">
          直近30日{" "}
          <span className="font-bold tabular-nums text-stone-900">
            {n.recent.toLocaleString()}
          </span>{" "}
          件
          <span className="ml-1 text-xs text-stone-400">
            （前30日 {n.prev.toLocaleString()}・
            {n.ratio == null ? "—" : `比 ${n.ratio}`}）
          </span>
        </div>
        <div className="text-xs text-stone-400">
          直近7日 {n.recent7}（前7日 {n.prev7}）
        </div>
      </div>

      <p className="mt-2 text-sm text-stone-700">{soWhat}</p>

      {/* 増えている地域 */}
      <div className="mt-3">
        <div className="mb-1 flex items-baseline justify-between">
          <h4 className="text-sm font-bold text-stone-800">
            増えている地域
          </h4>
          <span className="text-[10px] text-stone-400">
            バーの縦線 = 前30日の水準／塗り = 直近30日
          </span>
        </div>
        {data.rising.length ? (
          <div className="divide-y divide-stone-100">
            {data.rising.map((r) => (
              <Row key={r.pref} r={r} max={max} />
            ))}
          </div>
        ) : (
          <p className="py-2 text-sm text-stone-400">
            直近で目立って増えた地域はありません。
          </p>
        )}
      </div>

      {/* 落ち着いた地域（参考） */}
      {data.quiet.length > 0 && (
        <div className="mt-4">
          <h4 className="mb-1 text-sm font-bold text-stone-500">
            落ち着いた地域（参考）
          </h4>
          <div className="divide-y divide-stone-100 opacity-80">
            {data.quiet.map((r) => (
              <Row key={r.pref} r={r} max={quietMax} />
            ))}
          </div>
        </div>
      )}

      <p className="mt-3 text-[11px] leading-relaxed text-stone-400">
        直近30日（{data.recentLabel}）と、その直前30日（{data.prevLabel}）の県別件数を比較。
        同じ情報源どうしの短期比較なので、情報源が年々増えることの影響を受けにくく、
        季節の平年比よりも誤検知が起きにくい。直近数日は取り込み途中で件数が伸びる場合があります。
      </p>
    </div>
  );
}
