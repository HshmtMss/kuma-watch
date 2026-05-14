"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * KumaClient と PageShell の両方で共通利用する nav。
 * - sm+ : 水平リンク (現状の見た目)
 * - sm 未満: ハンバーガーボタン → スライドダウンメニュー
 *
 * モバイルでも「くまウォッチ by 獣医工学ラボ」の文字列を表示するための余白を、
 * ナビゲーションを折りたたむことで確保する。
 */
export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* デスクトップ: 水平リンク */}
      <nav
        className="hidden shrink-0 items-center gap-4 text-xs font-medium text-stone-600 sm:flex"
        aria-label="主要ナビゲーション (デスクトップ)"
      >
        <Link href="/" className="hover:text-stone-900">地図</Link>
        <Link href="/place" className="hover:text-stone-900">都道府県</Link>
        <Link href="/spot" className="hover:text-stone-900">観光地</Link>
        <Link href="/articles" className="hover:text-stone-900">クマ対策</Link>
        <Link href="/products" className="hover:text-stone-900">対策製品</Link>
        <Link href="/research" className="hover:text-stone-900">研究</Link>
        <Link href="/for-gov" className="hover:text-stone-900">自治体の方へ</Link>
      </nav>

      {/* モバイル: ハンバーガー */}
      <div className="relative sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 active:bg-gray-100"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
        {open && (
          <>
            <div
              className="fixed inset-0 z-[1200] bg-black/30"
              onClick={close}
              aria-hidden
            />
            <nav
              className="absolute right-0 top-12 z-[1300] w-60 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
              aria-label="主要ナビゲーション (モバイル)"
            >
              {[
                { href: "/", label: "地図" },
                { href: "/place", label: "都道府県" },
                { href: "/spot", label: "観光地" },
                { href: "/articles", label: "クマ対策" },
                { href: "/products", label: "対策製品" },
                { href: "/research", label: "研究" },
                { href: "/for-gov", label: "自治体の方へ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="block border-b border-gray-100 px-5 py-3.5 text-base font-medium text-gray-800 last:border-b-0 hover:bg-amber-50 active:bg-amber-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </>
        )}
      </div>
    </>
  );
}
