// 「最近の出没」判定の一元管理。
//
// 以前は新着を ingestedAt (KumaWatch が取り込んだ=掲載した時刻) で判定していたが、
// これはスクレイプ周期や再報道のタイミングに揺れ、「掲載から24h」であって
// 「出没から24h」ではないため実態と食い違った (6/26 の出没が「23時間前に掲載＝
// 新着」等)。そこで鮮度は掲載時刻を一切使わず、出没日 (date) だけを基準にする。
//   - 地図の青ハロー / ポップアップの「○日前に出没」バッジ = 出没が直近 N 日以内
//   - 期間フィルタ (別途 KumaClient) も出没日基準・最短 1 週間
//
// 日付は日本の情報源由来の JST カレンダー日付。now(実時刻)との差は JST の
// カレンダー日差で数える (深夜の UTC ずれで「昨日/本日」が 1 日ずれないように)。

/** この日数以内の出没を「最近」として強調する (本日=0 起点)。 */
export const RECENT_EVENT_DAYS = 3;

const DAY_MS = 24 * 60 * 60 * 1000;
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/** "YYYY-MM-DD" を UTC 深夜の epoch ms へ。パースできなければ null。 */
function eventDateMs(date: string | undefined): number | null {
  if (!date) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (!m) return null;
  const t = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isFinite(t) ? t : null;
}

/**
 * 出没日から今日までの JST カレンダー日差。本日=0 / 昨日=1 / …。
 * 未来日 (負) や日付不明は null。
 */
export function eventDaysAgo(
  date: string | undefined,
  nowMs: number,
): number | null {
  const ev = eventDateMs(date);
  if (ev === null) return null;
  const eventDay = Math.floor(ev / DAY_MS); // 日付は JST 深夜 = この UTC 日
  const nowDay = Math.floor((nowMs + JST_OFFSET_MS) / DAY_MS);
  const days = nowDay - eventDay;
  return days < 0 ? null : days;
}

/** 出没が直近 RECENT_EVENT_DAYS 日以内なら「最近の出没」として強調してよい。 */
export function isRecentSighting(
  r: { date?: string },
  nowMs: number,
): boolean {
  const days = eventDaysAgo(r.date, nowMs);
  return days !== null && days <= RECENT_EVENT_DAYS;
}

/** 「本日 / 昨日 / N日前」ラベル。最近でなければ null。 */
export function recentSightingLabel(
  date: string | undefined,
  nowMs: number,
): string | null {
  const days = eventDaysAgo(date, nowMs);
  if (days === null || days > RECENT_EVENT_DAYS) return null;
  return days === 0 ? "本日" : days === 1 ? "昨日" : `${days}日前`;
}
