/**
 * ブラウザが Web Push を使える環境かどうか。
 *
 * iOS Safari は「ホーム画面に追加」して PWA として起動するまで PushManager が
 * 存在しない。つまりこの判定は実質「素の iPhone では false」になる。UA ではなく
 * 能力で見ているので、ホーム画面に追加済みの iPhone では true になる点に注意
 * (= その端末では LINE とブラウザ通知の両方が選べる)。
 *
 * SSR 中 (window 不在) は false。クライアントで判定し直すこと。
 */
export function isPushSupported(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window
  );
}
