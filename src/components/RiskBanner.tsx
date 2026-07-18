import { RISK_BG, RISK_TEXT, RISK_BADGE, type RiskTone } from "@/lib/risk";

export type RiskBannerProps = {
  tone: RiskTone;
  /** バッジの語（警戒 / 注意 / 観察 / 静穏）。 */
  label: string;
  /** 大きく見せる一言（例: 「直近 90 日で 3 件の出没」）。 */
  headline: string;
  /** 危険度が指す範囲の説明（例: 「高尾山 周辺 10 km の状況」「◯◯市 直近の状況」）。 */
  contextLabel: string;
  /** 整形済みの最新目撃日（例: 「2026年7月10日」）。無ければ行を出さない。 */
  latestDateText?: string | null;
  /** 一言の補足。省略時は補足行を出さない。 */
  note?: string;
};

/**
 * 危険度ヒーローバナー。検索流入したユーザーに「今、危険か？」を 1 秒で答える、
 * /spot と /place/[pref]/[muni] 共通のファーストビュー部品。
 *
 * 以前は両ページに同じマークアップをインライン実装しており、角丸（xl vs 2xl）や
 * バッジ文字サイズが片方だけズレていた。ここに一本化して見た目を揃える。
 * 純粋な表示部品（状態・フック・ブラウザ API なし）なので Server Component のまま。
 *
 * ※ 地図カードの「この地点の状況」verdict カードは別部品（@/components/RiskHero）。
 */
export default function RiskBanner({
  tone,
  label,
  headline,
  contextLabel,
  latestDateText,
  note,
}: RiskBannerProps) {
  return (
    <div className={`not-prose mb-6 rounded-2xl border-2 p-5 ${RISK_BG[tone]}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${RISK_BADGE[tone]}`}
            >
              {label}
            </span>
            <span className={`text-xs font-medium ${RISK_TEXT[tone]}`}>
              {contextLabel}
            </span>
          </div>
          <div className={`mt-2 text-lg font-bold ${RISK_TEXT[tone]}`}>
            {headline}
          </div>
          {latestDateText && (
            <div className={`mt-0.5 text-xs ${RISK_TEXT[tone]}/80`}>
              最新の目撃: {latestDateText}
            </div>
          )}
          {note && (
            <p className={`mt-2 text-xs leading-relaxed ${RISK_TEXT[tone]}`}>
              {note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
