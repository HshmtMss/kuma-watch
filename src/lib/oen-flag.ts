/**
 * 地域応援（出没市町村のクマ・獣害対策へふるさと納税で送客）機能の公開フラグ。
 *
 * ※ 別機能の「サポーター募集（/support・supporter-flag.ts）＝運営を支える月額支援」
 *    とは別物。こちらは「その地域を応援＝ふるさと納税へ送客」で、着地は楽天。
 *
 * バックエンド（/oen/go 転送・対応表）は常時動かしてよいが、ユーザーに見える入口
 * （/oen ページのインデックス、市町村/観光地ページの応援カード、LINE CTA）は
 * このフラグで段階公開する。NEXT_PUBLIC_ でサーバ/クライアント両方から参照可。
 * 未設定 / "1" 以外は OFF（フェイルセーフ）。
 */
export function isOenReleased(): boolean {
  return process.env.NEXT_PUBLIC_OEN_ENABLED === "1";
}
