// KumaWatch service worker
// 役割: Web Push の受信 + 通知タップ時のページ起動。
// PWA 化 (オフラインキャッシュ等) は別目的なので、ここでは push と
// notificationclick イベントだけ扱う。
//
// SW のバージョン文字列。更新したら必ずインクリメントしてキャッシュ
// 整合性を取る。
const SW_VERSION = "kuma-sw-v2";

self.addEventListener("install", (event) => {
  // 既存 SW があれば即時置き換え
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  let payload = {};
  if (event.data) {
    try {
      payload = event.data.json();
    } catch (e) {
      payload = { title: "KumaWatch", body: event.data.text() };
    }
  }
  const title = payload.title || "KumaWatch クマ出没情報";
  const options = {
    body: payload.body || "新しいクマ出没情報があります",
    icon: payload.icon || "/icons/Icon-192.png",
    badge: payload.badge || "/icons/Icon-192.png",
    tag: payload.tag || undefined,
    // tag は muni 単位 (kuma-{pref}-{city})。同一 muni の通知は 1 件に集約される。
    // renotify=true で、未読の通知が残っていても新しい出没ごとに必ず再アラート
    // する (クマ出没は安全情報なので毎回知らせたい)。
    // 仕様上 renotify=true には tag が必須なので、tag がある時だけ true にする。
    renotify: Boolean(payload.tag),
    data: {
      url: payload.url || "/",
    },
    requireInteraction: false,
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      // 既に開いている KumaWatch タブがあればそこにフォーカス & 遷移
      for (const client of windowClients) {
        if ("focus" in client) {
          try {
            client.navigate(targetUrl);
            return client.focus();
          } catch (e) {
            // navigate 失敗時は新規 open にフォールバック
          }
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
      return null;
    }),
  );
});
