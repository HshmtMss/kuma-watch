/**
 * 危険度の共通表示トークン。
 *
 * /spot（観光地・周辺10km）と /place/[pref]/[muni]（市町村）の危険度ヒーローで
 * まったく同じ配色を各ページにインライン定義しており、片方だけ直すとドリフトして
 * いた。ここに一元化し、RiskBanner から参照する。
 *
 * トーンは「煽らない」方針（MEMORY: マップ表示は煽らない）に合わせ、
 * red=警戒 / amber=注意 / yellow=観察 / emerald=静穏 の 4 段階で色を分離する。
 * 閾値・文言はページごとに意味が異なる（例: 周辺10km と市町村単位で件数の重みが違う）
 * ため各ページに残し、ここでは「色」だけを共通化する。
 */

export type RiskTone = "red" | "amber" | "yellow" | "emerald";

/** カード外枠 + 背景。 */
export const RISK_BG: Record<RiskTone, string> = {
  red: "border-red-300 bg-red-50",
  amber: "border-amber-300 bg-amber-50",
  yellow: "border-yellow-300 bg-yellow-50",
  emerald: "border-emerald-300 bg-emerald-50",
};

/** 見出し・本文の文字色。 */
export const RISK_TEXT: Record<RiskTone, string> = {
  red: "text-red-900",
  amber: "text-amber-900",
  yellow: "text-yellow-900",
  emerald: "text-emerald-900",
};

/** ラベルバッジ（塗り）。 */
export const RISK_BADGE: Record<RiskTone, string> = {
  red: "bg-red-600 text-white",
  amber: "bg-amber-500 text-white",
  yellow: "bg-yellow-500 text-yellow-950",
  emerald: "bg-emerald-600 text-white",
};
