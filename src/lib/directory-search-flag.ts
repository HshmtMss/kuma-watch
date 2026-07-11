/**
 * ディレクトリ内絞り込み検索（/spot・/place・/place/[pref] のページ内検索窓）の
 * 公開フラグ。
 *
 * push-flag / line-flag と同じ二段構えの思想。新しい UI（各一覧ページ上部の
 * 「そのページ専用の検索窓」）を、完成と同時に本番公開せず、まずフラグの裏で
 * 検証してから公開する（[[feedback_flag_then_release]]）。
 *
 * NEXT_PUBLIC_ なのでサーバ（page.tsx）でもクライアントでも同じ値を参照できる。
 * 未設定 / "true" 以外はすべて OFF 扱い（フェイルセーフ）。一般公開時に Vercel の
 * NEXT_PUBLIC_DIRECTORY_SEARCH を "true" にして再デプロイする。
 */
export function isDirectorySearchReleased(): boolean {
  return process.env.NEXT_PUBLIC_DIRECTORY_SEARCH === "true";
}
