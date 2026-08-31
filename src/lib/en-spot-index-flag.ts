/**
 * 英語スポット一覧 /en/spot と、その文字検索の公開フラグ。
 *
 * push-flag / line-flag / directory-search-flag と同じ二段構え。新しい導線を
 * 完成と同時に本番公開せず、まずフラグの裏で検証してから公開する
 * （[[feedback_flag_then_release]]）。
 *
 * OFF の間は /en/spot は 404 で、/en は従来どおり地方別リンク帳を自分で持つ。
 * ON にすると /en は検索窓＋一覧ページへの導線に切り替わる。
 * NEXT_PUBLIC_ なのでサーバ（page.tsx）でもクライアントでも同じ値を読める。
 */
export function isEnSpotIndexReleased(): boolean {
  return process.env.NEXT_PUBLIC_EN_SPOT_INDEX === "true";
}
