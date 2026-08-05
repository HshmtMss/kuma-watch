/**
 * サポーター（月額支援）機能の公開フラグ。
 *
 * 「この地図はサポーターの皆さまのご支援でお届けしています」という提供クレジットと
 * 募集ページ (/support) を、リリースフラグの裏で用意し、検証後に公開する
 * ([[feedback_flag_then_release]] の方針)。未設定 / "1" 以外はすべて OFF
 * (フェイルセーフ)。NEXT_PUBLIC_ なのでサーバ・クライアント双方で参照できる。
 *
 * ON にするには Vercel の NEXT_PUBLIC_SUPPORTER を "1" にして再デプロイ。
 */
export function isSupporterReleased(): boolean {
  return process.env.NEXT_PUBLIC_SUPPORTER === "1";
}
