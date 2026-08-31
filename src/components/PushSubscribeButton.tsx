"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { isPushSupported } from "@/lib/push-support";
import {
  trackNotifyClick,
  trackNotifySubscribed,
  trackPushPermission,
  type NotifySurface,
} from "@/lib/analytics";

/**
 * 市町村ページ / 観光地ページに置く Web Push 購読ボタン。
 *
 * target で購読対象を切り替える:
 *   { kind: "muni", pref, city } — 市町村単位 (cityName 完全一致で配信)
 *   { kind: "spot", slug, name } — 観光地単位 (半径 10km の近傍で配信)
 *
 * 状態遷移:
 *   unsupported    — Push API 非対応 (古いブラウザ / iOS でホーム画面追加前)
 *   denied         — ユーザがブラウザ通知を拒否済み
 *   not-configured — サーバ側で Upstash/VAPID 未設定 (本番では出ない)
 *   idle           — 未購読。「通知する」ボタン
 *   active          — 購読中。「通知中 ✓ / 解除」ボタン
 *   loading        — 操作中
 *
 * UI 設計:
 *   - 危険度ヒーローカードの直下に置くのが心理的に最も自然
 *   - 控えめな bordered pill。説明文を small で添えて不安を消す
 *   - 解除の発見性を上げるため、中央の「通知設定」ページ (/notifications) への
 *     リンクを常に添える (登録した各ページに戻らなくても解除できる導線)
 */

export type PushTarget =
  | { kind: "muni"; pref: string; city: string }
  | { kind: "spot"; slug: string; name: string };

type State =
  | "unsupported"
  | "denied"
  | "not-configured"
  | "idle"
  | "active"
  | "loading";

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "";

function urlBase64ToUint8Array(base64: string): Uint8Array {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const base64Std = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64Std);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

/** target を API に渡すボディ片へ変換する (subscribe/unsubscribe/check 共通) */
function targetBody(target: PushTarget): Record<string, string> {
  return target.kind === "spot"
    ? { slug: target.slug }
    : { pref: target.pref, city: target.city };
}

/** 購読ボタン見出しに使う対象名 */
function targetHeadline(target: PushTarget, en: boolean): string {
  const name = target.kind === "spot" ? target.name : target.city;
  return en
    ? `Get alerts for new bear sightings near ${name}`
    : `${name} 周辺の新規出没を通知で受け取る`;
}

export default function PushSubscribeButton({
  target,
  hideHeading = false,
  bare = false,
  surface = "place_footer",
  en = false,
}: {
  target: PushTarget;
  /** 親セクションに見出しがある場合、内部の見出しを省いて二重表示を防ぐ。 */
  hideHeading?: boolean;
  /**
   * カード枠とベルアイコンを省く。NotifyCard の「LINEを使っていない方へ」の
   * 中に入れ子にするときに使う (カードの二重表示を防ぐ)。
   */
  bare?: boolean;
  /** GA 計測用。この CTA がどの面に置かれているか。 */
  surface?: NotifySurface;
  /** 英語表示 (インバウンド /en ページ用)。既定 false = 日本語(従来通り)。 */
  en?: boolean;
}) {
  const [state, setState] = useState<State>("loading");
  const [message, setMessage] = useState<string>("");

  // target の同値性を deps に使うためのキー
  const targetKey =
    target.kind === "spot"
      ? `spot:${target.slug}`
      : `muni:${target.pref}/${target.city}`;

  // 初期化: SW 登録 + 既存購読の確認
  useEffect(() => {
    let cancelled = false;
    async function init() {
      if (typeof window === "undefined") return;
      if (!isPushSupported()) {
        if (!cancelled) setState("unsupported");
        return;
      }
      if (Notification.permission === "denied") {
        if (!cancelled) setState("denied");
        return;
      }
      if (!VAPID_PUBLIC_KEY) {
        if (!cancelled) setState("not-configured");
        return;
      }
      try {
        const reg = await navigator.serviceWorker.register("/sw.js");
        const existing = await reg.pushManager.getSubscription();
        if (!existing) {
          if (!cancelled) setState("idle");
          return;
        }
        // 既に endpoint があれば、この対象に紐づいているかを check
        const res = await fetch("/api/push/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            endpoint: existing.endpoint,
            ...targetBody(target),
          }),
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as {
          subscribed?: boolean;
          configured?: boolean;
        };
        if (!cancelled) {
          if (data.configured === false) {
            setState("not-configured");
          } else {
            setState(data.subscribed ? "active" : "idle");
          }
        }
      } catch {
        if (!cancelled) setState("idle");
      }
    }
    init();
    return () => {
      cancelled = true;
    };
    // targetKey が変われば再評価する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetKey]);

  const subscribe = useCallback(async () => {
    setState("loading");
    setMessage("");
    trackNotifyClick({ channel: "push", target: target.kind, surface });
    try {
      const permission = await Notification.requestPermission();
      trackPushPermission({ result: permission, target: target.kind, surface });
      if (permission !== "granted") {
        setState(permission === "denied" ? "denied" : "idle");
        return;
      }
      const reg = await navigator.serviceWorker.ready;
      let sub = await reg.pushManager.getSubscription();
      if (!sub) {
        // applicationServerKey の型は BufferSource なので、ArrayBuffer に
        // unwrap して渡す (Uint8Array<ArrayBufferLike> の TS エラーを回避)
        const keyBuffer = urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
          .slice()
          .buffer;
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: keyBuffer,
        });
      }
      const json = sub.toJSON();
      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subscription: {
            endpoint: json.endpoint,
            keys: json.keys,
          },
          ...targetBody(target),
          // どの導線から登録したかをサーバにも残す (GA4 だけだと実登録と
          // 突き合わせられず、面別の効果測定ができないため)
          surface,
          // 英語(インバウンド /en)からの購読は lang="en" を付与。サーバ側で
          // 言語別集計＋言語別配信(英語通知文・/en 着地)に使う。
          ...(en ? { lang: "en" as const } : {}),
        }),
      });
      if (!res.ok) {
        throw new Error(`subscribe failed: ${res.status}`);
      }
      setState("active");
      setMessage(en ? "Alerts enabled" : "通知を有効化しました");
      trackNotifySubscribed({ channel: "push", target: target.kind, surface });
    } catch (e) {
      setState("idle");
      const detail = e instanceof Error ? e.message : String(e);
      setMessage(
        en
          ? `Couldn't enable alerts: ${detail}`
          : `通知の有効化に失敗しました: ${detail}`,
      );
    }
  }, [target, surface, en]);

  const unsubscribe = useCallback(async () => {
    setState("loading");
    setMessage("");
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (!sub) {
        setState("idle");
        return;
      }
      const res = await fetch("/api/push/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          endpoint: sub.endpoint,
          ...targetBody(target),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      // ブラウザ側の subscription は他の対象にも使われている可能性があるので
      // 残しておく。すべて解除したいユーザは /notifications か、ブラウザの
      // サイト権限から行う想定。
      setState("idle");
      setMessage("通知を解除しました");
    } catch (e) {
      setState("active");
      setMessage(
        en
          ? `Couldn't turn off alerts: ${e instanceof Error ? e.message : String(e)}`
          : `通知の解除に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  }, [target, en]);

  // 端末で通知が表示できるかをユーザー自身が確認するためのお試し通知。
  const sendTest = useCallback(async () => {
    setMessage("");
    try {
      const reg = await navigator.serviceWorker.ready;
      await reg.showNotification(
        en ? "Test notification — KumaWatch" : "お試し通知 — KumaWatch",
        {
          body: en
            ? "If you can see this, notifications are working. This is not a real bear sighting."
            : "この通知が見えれば設定は OK です。実際のクマ出没情報ではありません。",
          icon: "/icons/Icon-192.png",
          badge: "/icons/Icon-192.png",
          data: { url: "/" },
        },
      );
      setMessage(
        en
          ? "Test sent. If nothing appears, check that notifications are allowed for your browser and that Focus / Do Not Disturb is off."
          : "お試し通知を送りました。画面に出ない場合は、端末の通知設定でブラウザの通知が許可されているか、集中モード（おやすみモード）がオフかをご確認ください。",
      );
    } catch (e) {
      const detail = e instanceof Error ? e.message : String(e);
      setMessage(
        en
          ? `Couldn't show a test notification: ${detail}`
          : `お試し通知の表示に失敗しました: ${detail}`,
      );
    }
  }, [en]);

  if (state === "unsupported" || state === "not-configured") {
    // 機能が動かない環境では何も出さない (ノイズ削減)
    return null;
  }

  return (
    <div
      className={
        bare
          ? "not-prose"
          : "not-prose mb-6 rounded-xl border border-stone-200 bg-white p-4"
      }
    >
      <div className="flex items-start gap-3">
        {!bare && (
          <div
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
        )}
        <div className="min-w-0 flex-1">
          {!hideHeading && (
            <p className="text-sm font-semibold text-stone-900">
              {targetHeadline(target, en)}
            </p>
          )}
          {/* bare は「LINEを使っていない方は…」の summary の直下に出るので、
              同じことを言い直さない。ボタンだけ残す。 */}
          {!bare && (
            <p className={`text-xs leading-relaxed text-stone-600 ${hideHeading ? "" : "mt-0.5"}`}>
              {en
                ? "Get a browser notification when a new sighting is reported from official or news sources. No account, free."
                : "報道・自治体公式情報から新たに登録された目撃情報を、ブラウザ通知でお届けします。アカウント登録は不要・無料です。"}
            </p>
          )}
          {state === "active" && (
            <button
              type="button"
              onClick={sendTest}
              className="mt-2 text-xs font-medium text-amber-700 underline decoration-dotted underline-offset-2 hover:text-amber-800"
            >
              {en ? "Send a test notification" : "お試し通知を送る"}
            </button>
          )}
          {state === "denied" && (
            <p className="mt-2 text-xs text-rose-700">
              {en
                ? "Notifications are blocked. Allow notifications for this site in your browser settings."
                : "ブラウザ通知が拒否されています。ブラウザの設定からこのサイトの通知を許可してください。"}
            </p>
          )}
          {message && (
            <p className="mt-2 text-xs text-stone-700">{message}</p>
          )}
          <p className={bare ? "text-xs" : "mt-2 text-xs"}>
            <Link
              href="/notifications"
              className="font-medium text-amber-700 underline decoration-dotted underline-offset-2 hover:text-amber-800"
            >
              {en ? "Manage / turn off your alerts" : "登録中の通知を管理・解除する"}
            </Link>
          </p>
          {/* bare は既に「LINEを使っていない方へ」の details の中にいるので、
              details の入れ子を作らない。 */}
          <details className={bare ? "hidden" : "mt-2"}>
            <summary className="cursor-pointer text-xs text-stone-500 hover:text-stone-700">
              {en ? "About notifications" : "通知について"}
            </summary>
            {en ? (
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-stone-500">
                <li>No account needed. Free.</li>
                <li>Once allowed, you get new sightings even with the site closed.</li>
                <li>
                  Turn alerts off anytime on the{" "}
                  <Link
                    href="/notifications"
                    className="underline decoration-dotted underline-offset-2"
                  >
                    notification settings
                  </Link>{" "}
                  page.
                </li>
                <li>
                  On iPhone: first &quot;Add to Home Screen&quot; from Safari&apos;s
                  Share menu, open it, then enable notifications.
                </li>
                <li>
                  Not receiving alerts? Check that notifications are allowed for
                  your browser and that Focus / Do Not Disturb is off.
                </li>
              </ul>
            ) : (
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-stone-500">
                <li>アカウント登録は不要・無料です。</li>
                <li>
                  許可すると、サイトを閉じていても新しい出没情報が届きます。
                </li>
                <li>
                  登録した地域・観光地の解除は、
                  <Link
                    href="/notifications"
                    className="underline decoration-dotted underline-offset-2"
                  >
                    通知設定ページ
                  </Link>
                  からいつでもまとめて行えます。
                </li>
                <li>
                  iPhone は、Safari の共有メニューから「ホーム画面に追加」したうえで有効にできます。
                </li>
                <li>
                  通知が届かないときは、端末の通知設定でブラウザの通知が許可されているか、集中モード（おやすみモード）がオフかをご確認ください。
                </li>
              </ul>
            )}
          </details>
        </div>
        <div className="shrink-0">
          {state === "idle" && (
            <button
              type="button"
              onClick={subscribe}
              className="rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-700"
            >
              {en ? "Get alerts" : "通知する"}
            </button>
          )}
          {state === "active" && (
            <button
              type="button"
              onClick={unsubscribe}
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
            >
              {en ? "On ✓ / Turn off" : "通知中 ✓ / 解除"}
            </button>
          )}
          {state === "loading" && (
            <button
              type="button"
              disabled
              className="rounded-full bg-stone-300 px-4 py-2 text-xs font-semibold text-white"
            >
              {en ? "Working…" : "処理中…"}
            </button>
          )}
          {state === "denied" && (
            <button
              type="button"
              disabled
              className="rounded-full bg-stone-200 px-4 py-2 text-xs font-semibold text-stone-500"
            >
              {en ? "Blocked" : "通知が拒否中"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
