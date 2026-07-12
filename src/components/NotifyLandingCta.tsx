"use client";

import Link from "next/link";
import { trackNotifyClick } from "@/lib/analytics";

/**
 * 通知獲得LP (/notify) の登録 CTA。
 *
 * LP は場所固有ではない (どの市町村・観光地でもない) 汎用の入口なので、対象を
 * 決めずに始められる 2 経路を用意する:
 *   1. LINE 友だち追加 — 追加後のウェルカム (webhook follow) が地域登録リンクを
 *      返すので、ここでは友だち追加まで進めれば良い。lineHref は公式アカウントの
 *      友だち追加 URL (サーバ側でフラグ判定済み。出せないときは null)。
 *   2. 地図で場所を選んで登録 — トップ地図へ送り、地点を選んで通知登録してもらう。
 *
 * クリックは surface="landing" で計測し、他の面との比較に使う。
 */

const LINE_GREEN = "#06C755";

export default function NotifyLandingCta({
  lineHref,
}: {
  /** LINE 友だち追加 URL。LINE 導線が未公開/未設定なら null。 */
  lineHref: string | null;
}) {
  return (
    <div className="not-prose flex flex-col gap-3">
      {lineHref && (
        <a
          href={lineHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackNotifyClick({ channel: "line", target: "geo", surface: "landing" })
          }
          className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: LINE_GREEN }}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          LINEで通知を受け取る
        </a>
      )}
      <Link
        href="/"
        className="flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-base font-semibold text-stone-800 transition hover:bg-stone-50"
      >
        地図で場所を選んで登録する
      </Link>
    </div>
  );
}
