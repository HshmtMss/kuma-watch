/**
 * サポーター募集の外部決済リンク。
 *
 * 実際の課金は Stripe Payment Link / note メンバーシップ / pixivFANBOX 等の
 * 外部ページで受ける（登録は全てオンラインで完結＝PC作業のみ、当サイトに
 * 決済情報や秘密鍵を持たない）。その URL を env で差し込む:
 *   NEXT_PUBLIC_SUPPORTER_URL       月額サポーター登録ページ (必須)
 *   NEXT_PUBLIC_SUPPORTER_ONCE_URL  単発の寄付・投げ銭 (任意)
 *
 * URL 未設定なら募集ページは「準備中」を表示し、決済ボタンは出さない
 * (フェイルセーフ)。
 */
export function supporterMonthlyUrl(): string {
  return (process.env.NEXT_PUBLIC_SUPPORTER_URL ?? "").trim();
}

export function supporterOnceUrl(): string {
  return (process.env.NEXT_PUBLIC_SUPPORTER_ONCE_URL ?? "").trim();
}

/** 月額でも単発でも、決済導線がひとつでも設定されているか。 */
export function isSupporterConfigured(): boolean {
  return supporterMonthlyUrl().length > 0 || supporterOnceUrl().length > 0;
}
