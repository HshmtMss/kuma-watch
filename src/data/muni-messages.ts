/**
 * 自治体からのお知らせ（注意喚起メッセージ）。
 *
 * リンクだけでなく「自治体が住民・来訪者に伝えたい内容」を本文で表示するための
 * キュレーション済みデータ。各メッセージは自治体公式ページの内容に基づき、
 * 出典 URL と公式の更新日を併記する（一次情報へ辿れる）。
 *
 * 将来: 各自治体ページを LLM で自動抽出して本配列を自動更新する（クローラ層）。
 * 当面はデモ対象（高尾山周辺）を中心に手動キュレーション。
 */
export type MuniMessage = {
  prefName: string;
  cityName: string;
  /** 住民・来訪者向けの注意喚起（自治体公式の内容に基づく要約）。 */
  message: string;
  /** 対象地区（任意）。 */
  targetArea?: string;
  /** 公式ページの更新日 (ISO)。 */
  updatedAt: string;
  /** 出典 URL（一次情報）。 */
  sourceUrl: string;
};

export const MUNI_MESSAGES: MuniMessage[] = [
  {
    prefName: "東京都",
    cityName: "八王子市",
    message:
      "近年、住宅地周辺でのツキノワグマの出没が増加しています。特に秋季は冬眠に備え、ドングリ類のほか柿や栗を求めて人の生活圏周辺に出没する可能性があります。早朝・夕方や山林・ヤブの近くでは鈴やラジオで音を出し、果樹・生ごみ等の誘引物の管理にご協力ください。",
    updatedAt: "2026-05-17",
    sourceUrl:
      "https://www.city.hachioji.tokyo.jp/kurashi/sangyo/004/jyugai/p034133.html",
  },
  {
    prefName: "東京都",
    cityName: "あきる野市",
    message:
      "市西部の山間部でクマの目撃・痕跡が報告されています（直近: 6月8日 養沢・西沢入林道付近）。山林・ヤブの近くでは鈴やラジオで音を出し、早朝・夕方の単独行動を避けてください。",
    targetArea: "養沢・西部山間部",
    updatedAt: "2026-06-11",
    sourceUrl: "https://www.city.akiruno.tokyo.jp/0000017429.html",
  },
  {
    prefName: "神奈川県",
    cityName: "相模原市緑区",
    message:
      "相模原市内の山地にはクマが生息しています。生息地の山地や出没情報のある地域に入る際は、鈴やラジオで音を出し、複数人で行動するなど注意してください。",
    updatedAt: "2025-11-30",
    sourceUrl:
      "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/kankyo/1026504/1015732/1008179.html",
  },
];

export function getMuniMessage(
  prefName: string,
  cityName: string,
): MuniMessage | null {
  return (
    MUNI_MESSAGES.find(
      (m) => m.prefName === prefName && m.cityName === cityName,
    ) ?? null
  );
}
