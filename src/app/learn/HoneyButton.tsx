"use client";

import { ChevronRight } from "lucide-react";

/**
 * 合言葉「はちみつ、のこさない」ボタン。タップすると layout.tsx に常設された
 * HachimitsuGuide が open-hachimitsu イベントを受けてポップアップを開く
 * (地図トップの「対策」ボタンと同じカード・同じ挙動を再利用)。
 */
export default function HoneyButton({ label }: { label?: string }) {
  return (
    <button
      type="button"
      className="honey-btn"
      aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new CustomEvent("open-hachimitsu"))}
    >
      <span className="hb-ic" aria-hidden>
        {/* はちみつ壺のピクトグラム */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9h12l-.9 8.6A2.5 2.5 0 0 1 14.6 20H9.4a2.5 2.5 0 0 1-2.5-2.4z" />
          <path d="M5 9c0-1.4 1.1-2.5 2.5-2.5M19 9c0-1.4-1.1-2.5-2.5-2.5M8 6.5h8M12 6.5V4.2" />
        </svg>
      </span>
      <span>
        <span className="hb-lab">{label ?? "クマ対策の合言葉"}</span>
        <span className="hb-title">
          <b>はちみつ</b>、のこさない
        </span>
      </span>
      <span className="hb-chev" aria-hidden>
        <ChevronRight size={22} strokeWidth={2} />
      </span>
    </button>
  );
}
