"use client";

import { useEffect } from "react";

/**
 * Service worker (/sw.js) を裏で 1 度だけ登録する。
 *
 * 役割は今のところ Web Push の受信のみ。LCP/INP に影響しないよう、
 * load イベント後 + requestIdleCallback で遅延登録する。
 *
 * 通知購読ボタン (PushSubscribeButton) も自前で register を呼ぶので、
 * このコンポーネントは「先回り登録」だけが目的。重複呼び出しは
 * navigator.serviceWorker.register 側で冪等。
 */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    const idle = (cb: () => void) => {
      // requestIdleCallback 未対応 (Safari) のフォールバック
      const w = window as Window & {
        requestIdleCallback?: (cb: () => void) => void;
      };
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(cb);
      } else {
        setTimeout(cb, 2000);
      }
    };
    const handler = () => {
      idle(() => {
        navigator.serviceWorker.register("/sw.js").catch(() => {
          // 失敗は無視 (通知購読時に再試行される)
        });
      });
    };
    if (document.readyState === "complete") {
      handler();
    } else {
      window.addEventListener("load", handler, { once: true });
    }
  }, []);
  return null;
}
