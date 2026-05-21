/**
 * Web Push 通知機能の公開フラグ。
 *
 * バックエンド (Upstash / VAPID / dispatch) と Service Worker は常に稼働
 * させたまま、ユーザに見える入口 (購読ボタン) と購読受付だけをこのフラグで
 * 制御する。リリース前は OFF にしておき、任意のタイミングで Vercel の
 * NEXT_PUBLIC_PUSH_ENABLED を "true" にして再デプロイすると公開される。
 *
 * NEXT_PUBLIC_ なので、サーバ (page / route) でもクライアント
 * (PushSubscribeButton) でも同じ値を参照できる。未設定 / "true" 以外は
 * すべて OFF 扱い (フェイルセーフ)。
 */
export function isPushReleased(): boolean {
  return process.env.NEXT_PUBLIC_PUSH_ENABLED === "true";
}
