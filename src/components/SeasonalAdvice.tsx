import { Stethoscope } from "lucide-react";

export type SeasonalAdviceProps = {
  /** 季節の表示名（例: 「秋（9〜11月）」）。 */
  season: string;
  /** 本文（季節ごとの注意点）。 */
  point: string;
  /** タイトルの接頭辞（市町村ページは県名を渡す）。省略時は季節名から始める。 */
  areaLabel?: string;
  /** クマ種などのラベルバッジ（市町村ページのみ。例: 「ツキノワグマ」）。 */
  speciesLabel?: string;
};

/**
 * 季節別アドバイス（獣医師監修）カード。/spot と /place/[pref]/[muni] 共通。
 *
 * 以前は両ページに別実装で、片方は「（獣医師監修）」を文中に、もう片方は
 * バッジで出しており見た目が揃っていなかった。ここに一本化する。
 * 純粋な表示部品なので Server Component のまま。
 */
export default function SeasonalAdvice({
  season,
  point,
  areaLabel,
  speciesLabel,
}: SeasonalAdviceProps) {
  return (
    <div className="not-prose my-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-emerald-900">
        <Stethoscope size={15} aria-hidden />
        <span>
          {areaLabel ? `${areaLabel} の ${season} の注意点` : `${season} の注意点`}
        </span>
        {speciesLabel && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
            {speciesLabel}
          </span>
        )}
        <span className="text-[10px] font-normal text-emerald-700">獣医師監修</span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-emerald-900">{point}</p>
    </div>
  );
}
