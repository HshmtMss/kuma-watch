/**
 * LINE 通知機能の公開フラグ。
 *
 * Web Push (push-flag.ts) と同じ思想。バックエンド (Upstash / Messaging API /
 * webhook / dispatch) は常に稼働させたまま、ユーザに見える入口 (LIFF 登録
 * ページ・友だち追加導線) と購読受付だけをこのフラグで制御する。
 *
 * ただし LINE は「公式アカウント自体を限定公開 (テスト中) にしておける」ため、
 * コード側フラグを OFF にしなくてもアカウント側で公開範囲を絞れる。両方を
 * 併用して段階公開する。
 *
 * NEXT_PUBLIC_ なので、サーバ (page / route) でもクライアント (LIFF 登録
 * ページ) でも同じ値を参照できる。未設定 / "true" 以外はすべて OFF
 * 扱い (フェイルセーフ)。
 */
export function isLineReleased(): boolean {
  return process.env.NEXT_PUBLIC_LINE_ENABLED === "true";
}
