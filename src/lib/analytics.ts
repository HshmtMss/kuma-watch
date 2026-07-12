/**
 * GA4 イベント計測の薄いラッパ。
 *
 * gtag は layout.tsx が本番ビルドのときだけ読み込む (dev では本番プロパティを
 * 汚さないため無し)。ここは window.gtag が無い環境 (dev / gtag ブロック /
 * SSR) では黙って no-op になる設計で、呼び出し側は環境を気にせず呼べる。
 *
 * 通知登録がこのサイトの一般向けゴールなので、通知導線のクリックから購読完了
 * までをファネルとして計測する。どの面 (surface) のどの手段 (channel) が効いて
 * いるかを見て、導線改善の効果を測るのが目的。
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      targetOrName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

/** 通知の受け取り手段。 */
export type NotifyChannel = "line" | "push";

/** 通知の対象粒度。 */
export type NotifyTargetKind = "muni" | "spot" | "geo";

/**
 * CTA が置かれている面。どこ発の登録が伸びているかを切り分けるためのラベル。
 * 新しい導線を足したらここに追記する。
 */
export type NotifySurface =
  | "map_card" // 地図カード内の GeoNotifyTile
  | "map_nudge" // 地図の常設ナッジ (①)
  | "welcome" // 初回オーバーレイ (①)
  | "place_footer" // 市町村ページ末尾
  | "place_hero" // 市町村ページ先頭 (②)
  | "spot_visitor" // 観光地ページ上部の来訪者向けセクション
  | "spot_footer" // 観光地ページ末尾
  | "header" // グローバルヘッダー (③)
  | "landing"; // 通知獲得LP (④)

/** 汎用イベント送信。gtag 未ロードなら no-op。 */
export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

/** 通知導線のクリック (LINE / Push どちらのボタンを押したか)。ファネルの入口。 */
export function trackNotifyClick(p: {
  channel: NotifyChannel;
  target: NotifyTargetKind;
  surface: NotifySurface;
}): void {
  trackEvent("notify_click", p);
}

/** 通知購読が完了した (Push subscribe 成功 / LINE subscribe 成功)。ファネルの出口。 */
export function trackNotifySubscribed(p: {
  channel: NotifyChannel;
  target: NotifyTargetKind;
  surface?: NotifySurface;
}): void {
  trackEvent("notify_subscribed", p);
}

/** ブラウザ通知の許可ダイアログの結果。Push ファネルの主要な離脱点。 */
export function trackPushPermission(p: {
  result: NotificationPermission;
  target: NotifyTargetKind;
  surface?: NotifySurface;
}): void {
  trackEvent("push_permission", p);
}
