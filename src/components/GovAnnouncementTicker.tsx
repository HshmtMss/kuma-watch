"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import {
  MINISTRY_LABEL,
  type GovAnnouncement,
  type GovMinistry,
} from "@/lib/sources/gov";
import announcementsData from "@/../public/data/gov-announcements.json";

/**
 * ホーム (KumaClient) の上に出る、最新の政府発表 1 件を表示する細いバー。
 * - クリックで /policy に遷移
 * - 「×」で sessionStorage に「この発表を見た」記録を残し、当該発表は再表示しない
 * - 30 日以内の発表が無ければ何も表示しない (古い情報は出さない)
 *
 * dismiss 状態は sessionStorage が外部ストアなので useSyncExternalStore で読む。
 * useEffect + setState だと初回 SSR で何も描画されず、ハイドレーション後に
 * バーが「後から差し込まれる」レイアウトシフトが起きていた。本実装では
 * サーバースナップショットを空配列とし、初回 HTML からバーを描画する。
 */

type Snapshot = { generatedAt: number; items: GovAnnouncement[] };

const DISMISS_KEY = "kuma:gov-ticker:dismissed-ids";
const MAX_AGE_DAYS = 30;

const MINISTRY_DOT: Record<GovMinistry, string> = {
  env: "bg-emerald-500",
  maff: "bg-amber-500",
  rinya: "bg-stone-500",
};

function isWithinRecentDays(iso: string, days: number): boolean {
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return false;
  return Date.now() - t <= days * 86_400_000;
}

// --- dismissed-ids を保持する sessionStorage バックの外部ストア ---
const dismissListeners = new Set<() => void>();

function readDismissedRaw(): string {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function subscribeDismissed(cb: () => void): () => void {
  dismissListeners.add(cb);
  return () => {
    dismissListeners.delete(cb);
  };
}

// getSnapshot は値が変わらない限り参照安定であること。string は Object.is で
// 値比較されるため、内容が同じなら再レンダーは発生しない。
function getDismissedSnapshot(): string {
  return readDismissedRaw();
}

function getDismissedServerSnapshot(): string {
  return "[]";
}

function dismissAnnouncement(id: string): void {
  try {
    const arr = JSON.parse(readDismissedRaw()) as string[];
    if (!arr.includes(id)) arr.push(id);
    window.sessionStorage.setItem(DISMISS_KEY, JSON.stringify(arr));
  } catch {
    // ignore
  }
  dismissListeners.forEach((cb) => cb());
}

export default function GovAnnouncementTicker() {
  const latest = useMemo<GovAnnouncement | null>(() => {
    const snap = announcementsData as Snapshot;
    const items = [...snap.items].sort((a, b) =>
      b.date.localeCompare(a.date) || b.id.localeCompare(a.id),
    );
    const recent = items.find((it) => isWithinRecentDays(it.date, MAX_AGE_DAYS));
    return recent ?? null;
  }, []);

  const dismissedRaw = useSyncExternalStore(
    subscribeDismissed,
    getDismissedSnapshot,
    getDismissedServerSnapshot,
  );
  const dismissed = useMemo<Set<string>>(() => {
    try {
      return new Set(JSON.parse(dismissedRaw) as string[]);
    } catch {
      return new Set();
    }
  }, [dismissedRaw]);

  if (!latest) return null;
  if (dismissed.has(latest.id)) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dismissAnnouncement(latest.id);
  };

  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(latest.date);
  const dateLabel = m ? `${Number(m[2])}/${Number(m[3])}` : latest.date;

  return (
    <div className="relative z-[1090] shrink-0 border-b border-emerald-100 bg-emerald-50/80">
      <Link
        href="/policy"
        className="flex items-center gap-2 px-3 py-1.5 text-xs text-stone-800 hover:bg-emerald-100/50 sm:text-sm"
      >
        <span
          aria-hidden
          className={`inline-block h-2 w-2 shrink-0 rounded-full ${MINISTRY_DOT[latest.ministry]}`}
        />
        <span className="shrink-0 font-semibold text-stone-700">
          {MINISTRY_LABEL[latest.ministry]} {dateLabel}
        </span>
        <span className="truncate">{latest.title}</span>
        <span aria-hidden className="shrink-0 text-stone-400">›</span>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="閉じる"
          className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-stone-500 hover:bg-stone-200 hover:text-stone-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      </Link>
    </div>
  );
}
