/**
 * LINE 通知の末尾に付ける「野生動物対策支援のご案内」CTA。
 *
 * 2026-10-28 に、対策グッズ ([[line-product-cta]]) と地域応援 ([[line-oen-cta]]) の
 * アフィリエイト CTA から切り替えた。通知は 1 通ごとの従量コストだが、アフィリの
 * 実収益は小さかった (通知 CTA は月 70 クリック程度) ため、通知を受け取る人のうち
 * 自治体・事業者の関心層へ、法人向けの相談窓口 (/for-gov) を案内する 1 行にする。
 * 通知のたびに出すので、ラベルは短く、売り込まない言い方にする。
 *
 * 既定で ON。止めるときは環境変数 LINE_SUPPORT_CTA="0" を入れて再デプロイする。
 * 旧 CTA のモジュールは戻すときのために残している (dispatch からは呼んでいない)。
 */

export function isLineSupportCtaEnabled(): boolean {
  return process.env.LINE_SUPPORT_CTA !== "0";
}

/**
 * 通知本文の末尾に足す CTA 断片。無効時は空文字。
 * 「▼ 地図で見る」と同じ体裁で、短いラベルの次行に URL を置く。
 * ?src=line はアクセス解析で LINE 経由を見分けるため。
 */
export function lineSupportCtaSuffix(base: string): string {
  if (!isLineSupportCtaEnabled()) return "";
  return `\n\n▼ 法人・事業者の方へ（野生動物対策支援のご案内）\n${base}/for-gov?src=line`;
}
