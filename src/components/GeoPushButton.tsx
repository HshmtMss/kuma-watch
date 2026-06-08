"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

/**
 * 地図で選んだ任意地点を中心に、半径 radiusKm 以内の新規出没を通知する購読ボタン。
 * RiskPanel（選択地点カード）に置く。市町村/観光地と違い対象が任意座標なので、
 * 「この地点が既に登録済みか」のサーバ判定はせず、押したらその地点を新規登録する。
 * 解除は中央の通知設定ページ (/notifications) からまとめて行う。
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

export default function GeoPushButton({
  lat,
  lon,
  label,
  radiusKm = 10,
}: {
  lat: number;
  lon: number;
  label?: string;
  radiusKm?: number;
}) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  // 対象地点が変わったら未購読状態に戻す（前の地点の active 表示を引きずらない）。
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      !("serviceWorker" in navigator) ||
      !("PushManager" in window) ||
      !("Notification" in window)
    ) {
      setState("unsupported");
      return;
    }
    if (Notification.permission === "denied") {
      setState("denied");
      return;
    }
    if (!VAPID_PUBLIC_KEY) {
      setState("not-configured");
      return;
    }
    setState("idle");
    setMessage("");
  }, [lat, lon]);

  const subscribe = useCallback(async () => {
    setState("loading");
    setMessage("");
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setState(permission === "denied" ? "denied" : "idle");
        return;
      }
      const reg = await navigator.serviceWorker.register("/sw.js");
      await navigator.serviceWorker.ready;
      let sub = await reg.pushManager.getSubscription();
      if (!sub) {
        const keyBuffer = urlBase64ToUint8Array(VAPID_PUBLIC_KEY).slice().buffer;
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
          subscription: { endpoint: json.endpoint, keys: json.keys },
          geo: { lat, lon, radiusKm, label },
        }),
      });
      if (!res.ok) throw new Error(`subscribe failed: ${res.status}`);
      setState("active");
      setMessage(`この地点の半径${radiusKm}kmで通知を有効化しました`);
    } catch (e) {
      setState("idle");
      setMessage(
        `通知の有効化に失敗しました: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  }, [lat, lon, radiusKm, label]);

  if (state === "unsupported" || state === "not-configured") return null;

  return (
    <div className="not-prose mt-2 rounded-xl border border-emerald-200 bg-emerald-50/60 px-3 py-2.5">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-stone-800">
            この地点の周辺{radiusKm}kmを通知で見張る
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-stone-500">
            新しい出没情報をブラウザ通知でお届け。登録不要・無料。
          </p>
        </div>
        <div className="shrink-0">
          {state === "idle" && (
            <button
              type="button"
              onClick={subscribe}
              className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              通知する
            </button>
          )}
          {state === "active" && (
            <span className="rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700">
              通知中 ✓
            </span>
          )}
          {state === "loading" && (
            <span className="rounded-full bg-stone-300 px-3 py-1.5 text-xs font-semibold text-white">
              処理中…
            </span>
          )}
          {state === "denied" && (
            <span className="rounded-full bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-500">
              通知が拒否中
            </span>
          )}
        </div>
      </div>
      {message && <p className="mt-1.5 text-[11px] text-stone-600">{message}</p>}
      {state === "active" && (
        <p className="mt-1.5 text-[11px]">
          <Link
            href="/notifications"
            className="font-medium text-emerald-700 underline decoration-dotted underline-offset-2 hover:text-emerald-800"
          >
            登録した地点を管理・解除する
          </Link>
        </p>
      )}
    </div>
  );
}
