"use client";

import { useEffect, useState } from "react";
import {
  Footprints,
  Ban,
  Users,
  Bell,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/**
 * クマ対策の合言葉「はちみつ」を、地図(トップ)の「対策」ボタンからワンタップで開ける
 * ガイド。子供〜高齢者まで直感的に分かるよう、大きな文字・シンプルなピクトグラム
 * (カテゴリと同じ Lucide 系)・やさしい言葉で。
 *
 * は=走らない / ち=近づかない / み=みんなで / つ=伝える ＋ のこさない。
 */

const ITEMS: {
  kana: string;
  Icon: LucideIcon;
  action: string;
  desc: string;
}[] = [
  {
    kana: "は",
    Icon: Footprints,
    action: "走らない",
    desc: "背を向けず、クマを見ながらゆっくり後退（走ると追われる）",
  },
  {
    kana: "ち",
    Icon: Ban,
    action: "近づかない",
    desc: "子グマの近くには母グマ。出没した場所・見通しの悪いやぶも避ける",
  },
  {
    kana: "み",
    Icon: Users,
    action: "みんなで",
    desc: "ひとりで行かない。数人だと気づかれやすく安心",
  },
  {
    kana: "つ",
    Icon: Bell,
    action: "伝える",
    desc: "クマ鈴・声・スマホで「人がいるよ」。不意の遭遇を防ぐ",
  },
];

export default function HachimitsuGuide() {
  const [open, setOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  // 「対策」ボタンはトップ(地図)の KumaClient コントロール列だけに置く。他ページには
  // 出さない。ここは共通ポップアップ本体のみを持ち、open-hachimitsu イベントで開く。

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
            {/* 見出し。🍯 を下の「は・ち・み・つ」と同じ丸バッジにし、pl-3 で丸と
                文字の縦の線を下の項目 (px-3) にそろえる。閉じるボタンは右上に浮かせる。 */}
            <div className="relative flex items-center gap-3 pl-3">
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[26px] leading-none"
              >
                🍯
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-bold tracking-wider text-stone-500">
                  クマ対策の合言葉
                </div>
                <div className="whitespace-nowrap text-2xl font-black leading-tight tracking-wide text-amber-600">
                  はちみつ、のこさない
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="閉じる"
                className="absolute -right-1.5 -top-1.5 rounded-full p-1.5 text-xl leading-none text-stone-400 hover:bg-stone-100"
              >
                ✕
              </button>
            </div>


            <ul className="mt-4 space-y-2">
              {ITEMS.map((it) => (
                <li
                  key={it.kana}
                  className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 px-3 py-2.5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-3xl font-black leading-none text-white shadow-sm">
                    {it.kana}
                  </span>
                  <it.Icon
                    className="shrink-0 text-amber-600"
                    size={28}
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <div className="text-xl font-extrabold leading-tight text-stone-900">
                      {it.action}
                    </div>
                    <div className="text-[13px] leading-snug text-stone-500">
                      {it.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* ＋1: ふだんの「のこさない」。4文字とは別枠と分かるよう色を濃く。 */}
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-amber-300 bg-amber-100 px-3 py-2.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500 text-3xl leading-none shadow-sm">
                🍯
              </span>
              <div className="min-w-0">
                <div className="text-xl font-extrabold leading-tight text-stone-900">
                  のこさない
                </div>
                <div className="text-[13px] leading-snug text-stone-600">
                  食べ物・生ごみは持ち帰る。においがクマを引き寄せる
                </div>
              </div>
            </div>


            {/* ページ遷移せずアプリ内モーダル(iframe)で開く。PWA(standalone)でも
                target=_blank が同一画面化して戻れない問題を避け、閉じるとこのまま
                ポップアップに戻れる。PWA・モバイル・PCで同じ挙動。 */}
            <button
              type="button"
              onClick={() => setShowGuide(true)}
              className="mt-3 flex w-full items-center justify-center gap-1 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              もっと詳しく（対策の総合ガイド）
              <ChevronRight size={16} strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      )}

      {/* 対策の総合ガイドをアプリ内モーダルで表示。閉じると はちみつポップアップに戻る。 */}
      {showGuide && (
        <div className="fixed inset-0 z-[1600] flex flex-col bg-white">
          <div className="flex shrink-0 items-center justify-between border-b border-stone-200 px-4 py-3">
            <div className="text-base font-bold text-stone-900">
              クマ対策の総合ガイド
            </div>
            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="h-10 rounded-full px-4 text-base font-semibold text-amber-700 hover:bg-amber-50"
            >
              閉じる
            </button>
          </div>
          <iframe
            src="/measures"
            title="クマ対策の総合ガイド"
            className="min-h-0 w-full flex-1 border-0"
          />
        </div>
      )}
    </>
  );
}
