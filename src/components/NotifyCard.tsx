"use client";

import { useSyncExternalStore } from "react";
import PushSubscribeButton, {
  type PushTarget,
} from "@/components/PushSubscribeButton";
import { isPushSupported } from "@/lib/push-support";
import { lineRegisterUrl, lineTargetLabel } from "@/lib/line-links";

/**
 * 通知の入口を 1 枚にまとめたカード。/place と /spot のフッターに置く。
 *
 * LINE を主役、ブラウザ通知 (Web Push) を「LINEを使っていない方へ」の開閉に
 * 落とす。ユーザに二者択一を突きつけないための構成:
 *
 *   - 素の iPhone は PushManager が無いので開閉行ごと消え、LINE 一択になる
 *   - ホーム画面に追加済みの iPhone / Android / PC では開閉行が出る。ただし
 *     閉じているので、既定の視線は LINE ボタン 1 つに向く
 *
 * Push の対応可否はクライアントでしか分からないため "use client"。SSR 時は
 * 開閉行を出さず、hydration 後に対応環境なら現れる (ちらつきを避けるため
 * 開閉行は控えめな 1 行のみ)。
 */

export type NotifyTarget =
  | { kind: "muni"; pref: string; city: string }
  | { kind: "spot"; slug: string; name: string };

const LINE_GREEN = "#06C755";

/** Push 対応可否は実行環境で不変なので、購読不要のスナップショットとして読む。 */
const noopSubscribe = () => () => {};
const serverSnapshot = () => false;

export default function NotifyCard({
  target,
  hideHeading = false,
}: {
  target: NotifyTarget;
  /** 親セクションに見出しがある場合、カード内の見出しを省く。 */
  hideHeading?: boolean;
}) {
  const pushSupported = useSyncExternalStore(
    noopSubscribe,
    isPushSupported,
    serverSnapshot,
  );

  const href = lineRegisterUrl(target);
  const label = lineTargetLabel(target);
  const pushTarget: PushTarget = target;

  // LIFF 未設定なら LINE 導線を出せない。従来どおりブラウザ通知だけ見せる。
  if (!href) return <PushSubscribeButton target={pushTarget} hideHeading={hideHeading} />;

  const heading =
    target.kind === "muni"
      ? `${label} の新規出没を LINE で受け取る`
      : `${label} 周辺の新規出没を LINE で受け取る`;

  return (
    <div className="not-prose mb-6 rounded-xl border border-stone-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: LINE_GREEN }}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          {!hideHeading && (
            <p className="text-sm font-semibold text-stone-900">{heading}</p>
          )}
          <p
            className={`text-xs leading-relaxed text-stone-600 ${hideHeading ? "" : "mt-0.5"}`}
          >
            新しい出没情報が入ると、LINE のトークに直接お知らせします。
            アプリを入れたままで受け取れるので、iPhone でも設定は要りません。無料です。
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
            初回は公式アカウントの友だち追加が必要です。解除は LINE のトーク画面からいつでもできます。
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: LINE_GREEN }}
        >
          LINEで通知
        </a>
      </div>

      {/* 控え: ブラウザ通知。Push が使えない環境 (素の iPhone) では出さない。 */}
      {pushSupported && (
        <details className="mt-3 border-t border-stone-100 pt-3">
          <summary className="cursor-pointer text-xs text-stone-500 hover:text-stone-700">
            LINE を使っていない方は、ブラウザ通知でも受け取れます
          </summary>
          <div className="mt-3">
            <PushSubscribeButton target={pushTarget} bare hideHeading />
          </div>
        </details>
      )}
    </div>
  );
}
