"use client";

/**
 * 合言葉「はちみつ、のこさない」を開くCTAボタン。layout.tsx 常設の HachimitsuGuide が
 * open-hachimitsu イベントを受けて共通ポップアップを開く（地図トップの「対策」ボタンと
 * 同じ挙動・同じ内容を再利用）。ロゴ(🍯)＋合言葉のみのコンパクトなハチミツ色ピル。
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
      aria-label="クマ対策の合言葉 はちみつ、のこさない を見る"
      onClick={() => window.dispatchEvent(new CustomEvent("open-hachimitsu"))}
      className={`inline-flex items-center gap-2.5 rounded-full border border-amber-200 bg-amber-100 px-3.5 py-2 transition hover:border-amber-300 hover:bg-amber-200/70 ${className}`}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-lg shadow-sm"
        aria-hidden
      >
        🍯
      </span>
      <span className="text-[15px] font-black leading-none text-stone-800">
        「<span className="text-amber-700">はちみつ</span>、のこさない」
      </span>
    </button>
  );
}
