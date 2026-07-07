"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * クマ対策の合言葉「はちみつ」を、全ページの隅に常設した小さなボタン(FAB)から
 * ワンタップで開けるガイド。普段は省スペース、困ったらどこからでも。
 * 子供〜高齢者まで直感的に分かるよう、大きな文字・大きなピクトグラム・やさしい言葉で。
 *
 * は=走らない / ち=近づかない / み=みんなで / つ=伝える。
 * 「クマの好物=はちみつ」で、食べ物・ごみを残さない(誘引しない)も想起させる。
 */

const ITEMS: { kana: string; emoji: string; action: string; desc: string }[] = [
  { kana: "は", emoji: "🏃", action: "走らない", desc: "会っても走って逃げない" },
  { kana: "ち", emoji: "🚷", action: "近づかない", desc: "子グマ・出没した場所・やぶ" },
  { kana: "み", emoji: "👨‍👩‍👧", action: "みんなで", desc: "ひとりで行かない" },
  { kana: "つ", emoji: "🔔", action: "伝える", desc: "鈴・ラジオ・声で「人がいるよ」" },
];

export default function HachimitsuGuide() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // 地図(トップ)では KumaClient のコントロール列(現在地ボタンの上)に「対策」ボタンを
  // 置き、open-hachimitsu イベントでこの共通ポップアップを開く。地図では自前のFABは
  // 出さない。他ページはこのコンポーネントが左下にFABを出す。
  const onMap = pathname === "/";

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener("open-hachimitsu", openHandler);
    return () => window.removeEventListener("open-hachimitsu", openHandler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 他ページは左下に常設FAB。地図(/)では KumaClient の「対策」ボタンに任せる。 */}
      {!onMap && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="クマ対策の合言葉「はちみつ」を開く"
          className="fixed bottom-4 left-4 z-[1000] flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg ring-2 ring-white transition hover:bg-amber-600 active:scale-95"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          <span className="text-lg" aria-hidden>
            🍯
          </span>
          クマ対策
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[1500] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="クマ対策の合言葉 はちみつ"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-base font-bold text-stone-600">
                  クマ対策の合言葉
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-3xl font-black tracking-wide text-amber-600">
                  <span aria-hidden>🍯</span>はちみつ
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="閉じる"
                className="-mr-1 -mt-1 rounded-full p-2 text-2xl leading-none text-stone-400 hover:bg-stone-100"
              >
                ✕
              </button>
            </div>

            <p className="mt-2 rounded-xl bg-amber-50 px-3 py-2.5 text-sm leading-relaxed text-amber-900">
              クマにあわない・あっても慌てないための合言葉。
              <b>は・ち・み・つ</b> の4つを覚えよう。
            </p>

            <ul className="mt-3 space-y-2">
              {ITEMS.map((it) => (
                <li
                  key={it.kana}
                  className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 px-3 py-2.5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-3xl font-black leading-none text-white shadow-sm">
                    {it.kana}
                  </span>
                  <span className="shrink-0 text-2xl" aria-hidden>
                    {it.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="text-lg font-extrabold leading-tight text-stone-900">
                      {it.action}
                    </div>
                    <div className="text-xs leading-snug text-stone-500">
                      {it.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-2.5 flex items-start gap-1.5 px-1 text-xs leading-relaxed text-stone-500">
              <span aria-hidden>🗑️</span>
              <span>
                食べ物・生ごみは<b className="text-stone-700">残さない</b>。
                においがクマを引き寄せます。
              </span>
            </p>

            <Link
              href="/measures"
              onClick={() => setOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              もっと詳しく（対策の総合ガイド）→
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
