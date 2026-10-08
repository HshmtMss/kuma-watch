"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  exhibitionForNotice,
  exhibitionStatus,
  formatExhibitionDates,
  type Exhibition,
} from "@/data/exhibitions";
import { jstToday } from "@/lib/jst-date";

const DISMISS_KEY_PREFIX = "kumaWatch.exhibitionDismissed.";

/**
 * 地図のボタン列の下に出す、展示会出展の小さな案内 (1 行)。
 *
 * 地図を邪魔しないよう凡例チップと同じ大きさに留め、✕ で閉じたらその展示会の
 * 間はもう出さない。会期の2週間前から最終日まで出し、終われば次の展示会へ
 * 自動で切り替わる (src/data/exhibitions.ts)。押すと /for-gov の展示会欄へ。
 */
export default function ExhibitionNotice() {
  // 日付と閉じた記録はブラウザでしか分からないので、マウント後に決める。
  const [notice, setNotice] = useState<{ e: Exhibition; today: string } | null>(null);

  useEffect(() => {
    const today = jstToday();
    const e = exhibitionForNotice(today);
    if (!e) return;
    try {
      if (window.localStorage.getItem(DISMISS_KEY_PREFIX + e.id)) return;
    } catch {
      // ストレージが使えない環境では毎回出す
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNotice({ e, today });
  }, []);

  if (!notice) return null;
  const { e, today } = notice;
  const label = exhibitionStatus(e, today) === "ongoing" ? "出展中" : "出展予定";
  const where = [e.venue.split(" ")[0], e.booth].filter(Boolean).join(" ");

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY_PREFIX + e.id, "1");
    } catch {
      // 閉じた記録が残せなくても、この表示中は閉じる
    }
    setNotice(null);
  };

  return (
    <div className="pointer-events-auto mt-1.5 inline-flex max-w-full items-center rounded-full bg-white/95 text-xs text-stone-700 shadow ring-1 ring-black/5">
      <Link
        href="/for-gov#exhibitions"
        className="flex min-w-0 items-center gap-1.5 py-1.5 pl-3 pr-1"
      >
        <span className="shrink-0 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
          {label}
        </span>
        <span className="truncate">
          <b className="font-semibold">{e.shortName}</b> {formatExhibitionDates(e)}
          {where && ` ${where}`}
        </span>
        <span aria-hidden className="shrink-0 text-stone-400">
          ›
        </span>
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label="展示会の案内を閉じる"
        className="shrink-0 rounded-full p-1.5 pr-2 text-stone-400 hover:text-stone-700"
      >
        <X size={14} aria-hidden />
      </button>
    </div>
  );
}
