"use client";

import { ChevronRight } from "lucide-react";

/**
 * 合言葉「はちみつ、のこさない」を開くCTAボタン。layout.tsx 常設の HachimitsuGuide が
 * open-hachimitsu イベントを受けて共通ポップアップを開く（地図トップの「対策」ボタンと
 * 同じ挙動・同じ内容を再利用）。ハチミツ(琥珀)色の、そなえ欄などに置ける見やすいボタン。
 */
export default function HachimitsuCta({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new CustomEvent("open-hachimitsu"))}
      className={`group flex w-full items-center gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100/50 px-4 py-3 text-left transition hover:border-amber-300 hover:shadow-sm ${className}`}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-2xl shadow-sm"
        aria-hidden
      >
        🍯
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-bold tracking-wide text-amber-700">
          クマ対策の合言葉
        </span>
        <span className="block text-[15px] font-black leading-tight text-stone-800">
          合言葉「<span className="text-amber-700">はちみつ</span>、のこさない」
        </span>
      </span>
      <ChevronRight
        size={20}
        strokeWidth={2.2}
        className="shrink-0 text-amber-500 transition group-hover:translate-x-0.5"
        aria-hidden
      />
    </button>
  );
}
