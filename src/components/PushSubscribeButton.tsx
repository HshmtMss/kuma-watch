"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * 市町村ページに置く Web Push 購読ボタン。
 *
 * 状態遷移:
 *   unsupported           — Push API 非対応 (古いブラウザ / iOS でホーム画面追加前)
 *   denied                — ユーザがブラウザ通知を拒否済み
 *   not-configured        — サーバ側で Upstash/VAPID 未設定 (本番では出ない)
 *   idle                  — 未購読。「通知する」ボタン
 *   active                — 購読中。「通知中 ✓ / 解除」ボタン
 *   loading               — 操作中
 *
 * UI 設計:
 *   - 危険度ヒーローカードの直下に置くのが心理的に最も自然
 *     (「いま危険 → 今後の更新も追いたい」)
 *   - 派手すぎず、CTA としては検索 UI のスタイルに合わせた控えめな bordered pill
 *   - 「通知ってどう動くの?」の不安を消すため、説明文を small で添える
 */

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

export default function PushSubscribeButton({
  pref,
  city,
}: {
  pref: string;
  city: string;
}) {
  const [state, setState] = useState<State>("loading");
  const [message, setMessage] = useState<string>("");

  // 初期化: SW 登録 + 既存購読の確認
  useEffect(() => {
    let cancelled = false;
    async function init() {
      if (typeof window === "undefined") return;
      if (
        !("serviceWorker" in navigator) ||
        !("PushManager" in window) ||
        !("Notification" in window)
      ) {
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
        // 既に endpoint があれば、この muni に紐づいているかを check
        const res = await fetch("/api/push/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            endpoint: existing.endpoint,
            pref,
            city,
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
  }, [pref, city]);

  const subscribe = useCallback(async () => {
    setState("loading");
    setMessage("");
    try {
      const permission = await Notification.requestPermission();
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
          pref,
          city,
        }),
      });
      if (!res.ok) {
        throw new Error(`subscribe failed: ${res.status}`);
      }
      setState("active");
      setMessage("通知を有効化しました");
    } catch (e) {
      setState("idle");
      setMessage(
        `通知の有効化に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  }, [pref, city]);

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
          pref,
          city,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      // ブラウザ側の subscription は他 muni にも使われている可能性があるので
      // 残しておく。完全に解除したいユーザは設定 > サイト権限から行う想定。
      setState("idle");
      setMessage("通知を解除しました");
    } catch (e) {
      setState("active");
      setMessage(
        `通知の解除に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  }, [pref, city]);

  // 端末で通知が表示できるかをユーザー自身が確認するためのお試し通知。
  // サーバ経由ではなく Service Worker からローカルに 1 件表示するだけなので、
  // 通知許可・OS の通知設定・集中モードの状態をその場で検証できる
  // (昨日詰まった「許可したのに出ない」をユーザーが自己診断できる)。
  const sendTest = useCallback(async () => {
    setMessage("");
    try {
      const reg = await navigator.serviceWorker.ready;
      await reg.showNotification("お試し通知 — KumaWatch", {
        body: "この通知が見えれば設定は OK です。実際のクマ出没情報ではありません。",
        icon: "/icons/Icon-192.png",
        badge: "/icons/Icon-192.png",
        data: { url: "/" },
      });
      setMessage(
        "お試し通知を送りました。画面に出ない場合は、端末の通知設定でブラウザの通知が許可されているか、集中モード（おやすみモード）がオフかをご確認ください。",
      );
    } catch (e) {
      setMessage(
        `お試し通知の表示に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  }, []);

  if (state === "unsupported" || state === "not-configured") {
    // 機能が動かない環境では何も出さない (ノイズ削減)
    return null;
  }

  return (
    <div className="not-prose mb-6 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
      <div className="flex items-start gap-3">
        <div
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
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
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-stone-900">
            {city} の新規出没を通知で受け取る
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-stone-600">
            報道・自治体公式情報から新たに登録された目撃情報を、ブラウザ通知でお届けします。アカウント登録は不要・無料です。
          </p>
          {state === "active" && (
            <button
              type="button"
              onClick={sendTest}
              className="mt-2 text-xs font-medium text-emerald-700 underline decoration-dotted underline-offset-2 hover:text-emerald-800"
            >
              お試し通知を送る
            </button>
          )}
          {state === "denied" && (
            <p className="mt-2 text-xs text-rose-700">
              ブラウザ通知が拒否されています。ブラウザの設定からこのサイトの通知を許可してください。
            </p>
          )}
          {message && (
            <p className="mt-2 text-xs text-stone-700">{message}</p>
          )}
          <details className="mt-2">
            <summary className="cursor-pointer text-xs text-stone-500 hover:text-stone-700">
              通知について
            </summary>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-stone-500">
              <li>アカウント登録は不要・無料です。</li>
              <li>
                許可すると、サイトを閉じていても新しい出没情報が届きます。
              </li>
              <li>
                iPhone は、Safari の共有メニューから「ホーム画面に追加」したうえで有効にできます。
              </li>
              <li>
                通知が届かないときは、端末の通知設定でブラウザの通知が許可されているか、集中モード（おやすみモード）がオフかをご確認ください。
              </li>
            </ul>
          </details>
        </div>
        <div className="shrink-0">
          {state === "idle" && (
            <button
              type="button"
              onClick={subscribe}
              className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              通知する
            </button>
          )}
          {state === "active" && (
            <button
              type="button"
              onClick={unsubscribe}
              className="rounded-full border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
            >
              通知中 ✓ / 解除
            </button>
          )}
          {state === "loading" && (
            <button
              type="button"
              disabled
              className="rounded-full bg-stone-300 px-4 py-2 text-xs font-semibold text-white"
            >
              処理中…
            </button>
          )}
          {state === "denied" && (
            <button
              type="button"
              disabled
              className="rounded-full bg-stone-200 px-4 py-2 text-xs font-semibold text-stone-500"
            >
              通知が拒否中
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
