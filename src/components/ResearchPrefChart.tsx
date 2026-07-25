/**
 * 研究レポート用・都道府県別出没件数の水平バーチャート。
 *
 * サーバーコンポーネント（クライアント JS 不要）。純 CSS の水平バーで、
 * モバイルでも読みやすいよう県名は固定幅・件数は実数値を併記する。
 * 煽情的な赤系は使わず、落ち着いた琥珀（amber）1 色で統一する。
 *
 * データは scripts/generate-research-report.ts の aggregate().byPref
 * （期間内の県別件数を降順ソート済み）をそのまま渡す想定。
 */

type Datum = { pref: string; count: number };

export default function ResearchPrefChart({
  data,
  total,
  periodLabel,
  topN = 8,
}: {
  data: Datum[];
  total: number;
  periodLabel: string;
  topN?: number;
}) {
  if (!data || data.length === 0) return null;

  const top = data.slice(0, topN);
  const rest = data.slice(topN);
  const restCount = rest.reduce((s, d) => s + d.count, 0);
  const max = top.length > 0 ? top[0].count : 1;

  return (
    <figure className="not-prose my-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-5">
      <figcaption className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-stone-900">
          都道府県別の出没件数
        </span>
        <span className="text-xs text-stone-500">{periodLabel}</span>
      </figcaption>

      <div className="flex flex-col gap-1.5">
        {top.map((d) => {
          const pct = Math.max(2, Math.round((d.count / max) * 100));
          return (
            <div key={d.pref} className="flex items-center gap-2">
              <span className="w-16 shrink-0 text-right text-xs text-stone-700 sm:w-20 sm:text-sm">
                {d.pref}
              </span>
              <div className="h-5 flex-1 overflow-hidden rounded bg-stone-100">
                <div
                  className="flex h-full items-center rounded bg-amber-500/85"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right text-xs tabular-nums text-stone-800 sm:text-sm">
                {d.count}
              </span>
            </div>
          );
        })}
      </div>

      {rest.length > 0 && (
        <p className="mt-2.5 text-xs text-stone-500">
          ほか {rest.length} 県で計 {restCount} 件
        </p>
      )}

      <p className="mt-3 border-t border-stone-100 pt-2 text-xs text-stone-500">
        期間内の合計{" "}
        <span className="font-semibold tabular-nums text-stone-700">
          {total}
        </span>{" "}
        件（KumaWatch 収集データに基づく集計・単位: 件）
      </p>
    </figure>
  );
}
