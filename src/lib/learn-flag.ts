/**
 * 「学ぶ」セクション刷新（新しい学びハブ /learn とドアの中ページ）の公開フラグ。
 *
 * 既存の /measures・/articles・/research・/policy は残したまま、新しい統一ハブ
 * (/learn とその配下) をリリースフラグの裏で用意し、検証後に公開する
 * ([[feedback_flag_then_release]] の方針)。未設定 / "1" 以外はすべて OFF
 * (フェイルセーフ)。NEXT_PUBLIC_ なのでサーバ・クライアント双方で参照できる。
 *
 * ON にするには Vercel の NEXT_PUBLIC_LEARN_HUB を "1" にして再デプロイ。
 */
export function isLearnHubReleased(): boolean {
  return process.env.NEXT_PUBLIC_LEARN_HUB === "1";
}
