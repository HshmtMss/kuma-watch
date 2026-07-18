import { Fragment } from "react";

type Size = "xs" | "sm";

const BADGE_BASE: Record<Size, string> = {
  // 密なリスト（県ページの市町村一覧・ランキング）用の極小バッジ。
  xs: "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
  // 少しゆとりのあるカード（/place の都道府県カード）用。
  sm: "rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums",
};

export type CountBadgesProps = {
  /** 直近1年の件数。 */
  count365: number;
  /** 直近90日の件数（1年に内包されるので count90>0 なら count365>0）。 */
  count90: number;
  size?: Size;
};

/**
 * 出没件数バッジ。/place の一覧・県ページ・ランキングで共通利用する。
 *
 * 以前は「1年 N」「90日 N」を常に 2 つ並べ、0 件でも薄グレーの「1年 0 / 90日 0」を
 * 表示していた。全市町村を並べる県ページでは 0 件が大半を占め、グレーの 0 が大量に
 * 並んで「見るべき場所」が埋もれていた。ここでは 0 のバッジを出さず、
 *  - 0 件           → 「静穏」1 枚（ノイズにならない控えめな色）
 *  - 1年のみ有り     → 「1年 N」1 枚（amber）
 *  - 90日も有り     → 「1年 N」＋「90日 N」（amber + red）
 * とすることで、意味のある数字だけを残す。
 *
 * ラッパー（flex/gap/shrink 等）は呼び出し側のレイアウトに委ね、ここはバッジ本体
 * （span 群）だけを返す。純粋な表示なので Server Component のまま。
 */
export default function CountBadges({
  count365,
  count90,
  size = "xs",
}: CountBadgesProps) {
  const base = BADGE_BASE[size];

  if (count365 === 0 && count90 === 0) {
    return (
      <span className={`${base} bg-stone-100 text-stone-400`}>静穏</span>
    );
  }

  return (
    <Fragment>
      <span className={`${base} bg-amber-100 text-amber-900`}>
        1年 {count365.toLocaleString()}
      </span>
      {count90 > 0 && (
        <span className={`${base} bg-red-100 text-red-700`}>
          90日 {count90.toLocaleString()}
        </span>
      )}
    </Fragment>
  );
}
