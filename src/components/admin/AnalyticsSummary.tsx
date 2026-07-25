import { TrendingUp, TrendingDown, Minus, type LucideIcon } from "lucide-react";
import type { SeasonFrame } from "@/components/admin/AnalyticsSeasonMap";
import type { SurgeBoard } from "@/components/admin/AnalyticsSurgeBoard";

/**
 * エグゼクティブ要約。開いた瞬間に要点が分かる帯。新しい集計はせず、
 * 既に取得済みの surge / spatialSeasonal から合成するだけ（数値の二重定義を避ける）。
 */
export default function AnalyticsSummary({
  surge,
  spatialSeasonal,
  total,
  today,
  scope,
}: {
  surge: SurgeBoard | null;
  spatialSeasonal: SeasonFrame[];
  total: number;
  today: string;
  scope: string;
}) {
  const curMonth = Number(today.slice(5, 7));
  // 年間ピーク月
  const peak = spatialSeasonal.reduce(
    (best, f) => (f.total > best.total ? f : best),
    spatialSeasonal[0] ?? { month: 0, total: 0, cells: [] },
  );
  const curFrame = spatialSeasonal.find((f) => f.month === curMonth);
  const seasonPct =
    peak.total > 0 && curFrame ? Math.round((curFrame.total / peak.total) * 100) : null;

  const n = surge?.national;
  const dir: "up" | "down" | "flat" =
    n == null || n.ratio == null
      ? "flat"
      : n.ratio >= 1.15
        ? "up"
        : n.ratio <= 0.85
          ? "down"
          : "flat";
  const dirIcon: LucideIcon =
    dir === "up" ? TrendingUp : dir === "down" ? TrendingDown : Minus;
  const dirColor =
    dir === "up"
      ? "text-orange-600"
      : dir === "down"
        ? "text-sky-600"
        : "text-stone-500";
  const dirWord =
    dir === "up" ? "増加" : dir === "down" ? "減少" : "横ばい";

  const risingNames = surge?.rising.slice(0, 4).map((r) => r.pref) ?? [];

  const DirIcon = dirIcon;

  return (
    <div className="not-prose rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xs font-bold text-stone-400">要約</span>
        <span className="text-xs text-stone-400">{scope}・{today} 時点</span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat
          label="直近30日の全国傾向"
          value={dirWord}
          icon={DirIcon}
          valueClass={dirColor}
          sub={
            n
              ? `${n.recent.toLocaleString()}件（前月比 ${n.ratio ?? "—"}）`
              : "—"
          }
        />
        <Stat
          label="いま増えている地域"
          value={`${surge?.rising.length ?? 0}`}
          unit="県"
          sub={risingNames.length ? risingNames.slice(0, 2).join("・") : "なし"}
        />
        <Stat
          label="年間ピーク月"
          value={peak.month ? `${peak.month}` : "—"}
          unit="月"
          sub={
            seasonPct != null
              ? `今はピークの ${seasonPct}% 水準`
              : `${peak.total.toLocaleString()}件`
          }
        />
        <Stat
          label="収録データ"
          value={total.toLocaleString()}
          unit="件"
          sub="全期間・全国"
        />
      </div>

      {/* 一言まとめ */}
      <p className="mt-3 border-t border-stone-100 pt-3 text-sm leading-relaxed text-stone-700">
        全国は<span className={`font-bold ${dirColor}`}>{dirWord}</span>。
        {risingNames.length > 0 ? (
          <>
            ただし{" "}
            <span className="font-bold text-orange-700">
              {risingNames.join("・")}
            </span>
            {(surge?.rising.length ?? 0) > risingNames.length
              ? ` ほか${(surge?.rising.length ?? 0) - risingNames.length}県`
              : ""}
            で増加中。
          </>
        ) : (
          <>目立った急増地域はなし。</>
        )}
        {peak.month > 0 && (
          <>
            {" "}
            出没のピークは<span className="font-bold">{peak.month}月</span>
            {seasonPct != null ? `（今はその${seasonPct}%）` : ""}。
          </>
        )}
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  unit,
  sub,
  icon: Icon,
  valueClass = "text-stone-900",
}: {
  label: string;
  value: string;
  unit?: string;
  sub?: string;
  icon?: LucideIcon;
  valueClass?: string;
}) {
  return (
    <div className="rounded-xl bg-stone-50 px-3 py-2.5">
      <div className="text-[11px] font-medium text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        {Icon && <Icon size={18} className={valueClass} />}
        <span className={`text-xl font-extrabold tabular-nums ${valueClass}`}>
          {value}
        </span>
        {unit && <span className="text-xs font-bold text-stone-400">{unit}</span>}
      </div>
      {sub && (
        <div className="mt-0.5 truncate text-[11px] text-stone-400">{sub}</div>
      )}
    </div>
  );
}
