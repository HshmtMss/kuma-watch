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

/**
 * 観光地 (/spot) 通知の公開フラグ。市町村通知 (NEXT_PUBLIC_PUSH_ENABLED) とは
 * 独立に、観光地ページの購読ボタンだけを段階公開できるようにする。
 * 観光地通知は市町村通知の上に乗る (Upstash / VAPID / dispatch は共通) ため、
 * isPushReleased() が前提。未設定 / "true" 以外は OFF (フェイルセーフ)。
 */
export function isSpotPushReleased(): boolean {
  return (
    isPushReleased() && process.env.NEXT_PUBLIC_SPOT_PUSH_ENABLED === "true"
  );
}

/**
 * 任意地点 + 半径 (geo) 通知の公開フラグ。地図で選んだ地点を中心に通知を
 * 受け取る機能を段階公開する。isPushReleased() が前提。
 */
export function isGeoPushReleased(): boolean {
  return (
    isPushReleased() && process.env.NEXT_PUBLIC_GEO_PUSH_ENABLED === "true"
  );
}
