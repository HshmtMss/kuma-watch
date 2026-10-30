/**
 * 公開を取り下げた研究レポートの slug。
 *
 * 2026-10-31、Drive から取り込んだ長文のニュース要約型レポート (2026 年 3 月号〜5 月 19 日分)
 * を抜き取り点検したところ、元記事にない引用・被害者の実名・別の日の事件を当日の出来事として
 * 書いた箇所などが見つかったため、ページごと取り下げた ([[article-fact-check]])。
 *
 * ページ (src/app/research/<slug>) と RESEARCH_ENTRIES の行は削除済みで、URL は 404 になる。
 * scripts/import-research.ts はここにある slug を Drive から再取り込みしない。
 */
export const WITHDRAWN_RESEARCH_SLUGS: ReadonlySet<string> = new Set([
  "2026-03-monthly-report",
  "2026-04-29-bear-incidents",
  "2026-04-30-daily-report",
  "2026-04-monthly-report",
  "2026-05-01-daily-report",
  "2026-05-02-daily-report",
  "2026-05-03-daily-report",
  "2026-05-04-daily-report",
  "2026-05-05-daily-report",
  "2026-05-06-daily-report",
  "2026-05-07-daily-report",
  "2026-05-08-daily-report",
  "2026-05-09-daily-report",
  "2026-05-10-daily-report",
  "2026-05-11-daily-report",
  "2026-05-12-daily-report",
  "2026-05-13-daily-report",
  "2026-05-14-daily-report",
  "2026-05-15-daily-report",
  "2026-05-16-daily-report",
  "2026-05-17-daily-report",
  "2026-05-18-daily-report",
  "2026-05-19-daily-report",
]);
