"use client";

import { useEffect, useState } from "react";
import {
  Footprints,
  Ban,
  Users,
  Bell,
  ExternalLink,
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
    desc: "鈴・ラジオ・声で「人がいるよ」。不意の遭遇を防ぐ",
  },
];

export default function HachimitsuGuide() {
  const [open, setOpen] = useState(false);
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
            <div className="flex items-start justify-between">
              <div>
                <div className="text-base font-bold text-stone-600">
                  クマ対策の合言葉
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-2xl font-black tracking-wide text-amber-600">
                  <span aria-hidden>🍯</span>はちみつ、のこさない
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

            {/* 過度に怖がらせないための一言（地図の ⓘ から移設・集約）。 */}
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              日本では昔からクマが暮らしています。ふだん遭遇するのはごく稀。
              こわがりすぎず、落ち着いて備えましょう。
            </p>
            <p className="mt-2 rounded-xl bg-amber-50 px-3 py-2.5 text-sm leading-relaxed text-amber-900">
              クマから身を守る合言葉。<b>「はちみつ」＋「のこさない」</b>の5つを覚えよう。
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

            <p className="mt-2.5 flex items-start gap-1.5 px-1 text-xs leading-relaxed text-stone-500">
              <span aria-hidden>🕕</span>
              <span>
                朝と夕方は特に注意。出かける前に出没情報を確認しましょう。
              </span>
            </p>

            {/* 別タブで開き、この地図・ポップアップの文脈を残す（戻りやすさ優先）。 */}
            <a
              href="/measures"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-1 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50"
            >
              もっと詳しく（対策の総合ガイド）
              <ExternalLink size={15} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
