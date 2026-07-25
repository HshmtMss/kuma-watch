import "./learn.css";
import Link from "next/link";
import type { ReactNode } from "react";
import HeaderNav from "@/components/HeaderNav";
import LegalLinks from "@/components/LegalLinks";

/**
 * 「学ぶ」刷新セクション(/learn 配下)専用レイアウト。サイト共通ヘッダー/フッターは
 * 踏襲しつつ、本文は article-body ではなく .lrn(和紙＋蜂蜜＋深緑・明朝)で描く。
 */
export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between gap-2 border-b border-stone-200 bg-white px-3 py-2.5 shadow-sm sm:px-5 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
          aria-label="くまウォッチ ホーム（地図）"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="KumaWatch" className="block h-8 w-auto sm:h-9" />
          <span className="relative top-[2px] truncate text-base font-bold tracking-tight text-stone-900 sm:text-lg">
            くまウォッチ
          </span>
          <span className="relative top-[2px] shrink-0 rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-900">
            BETA
          </span>
        </Link>
        <HeaderNav />
      </header>

      <main className="lrn flex-1">{children}</main>

      <footer className="border-t border-stone-200 bg-white px-5 py-6 text-sm text-stone-700">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>
              運営:{" "}
              <a
                href="https://www.research-coordinate.co.jp/labs/vet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 font-medium text-stone-900 hover:underline"
              >
                獣医工学ラボ
              </a>
            </span>
            <span className="text-stone-300" aria-hidden>·</span>
            <a
              href="mailto:contact@research-coordinate.co.jp"
              className="inline-block py-1 hover:text-stone-900 hover:underline"
            >
              お問合せ
            </a>
            <span className="text-stone-300" aria-hidden>·</span>
            <Link
              href="/notify"
              className="inline-block py-1 font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              クマ出没通知を受け取る
            </Link>
          </div>
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
