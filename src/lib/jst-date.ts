/**
 * クマ出没データの `date` フィールドは JST のカレンダー日付 ("YYYY-MM-DD")。
 *
 * `Date.parse("YYYY-MM-DD")` は UTC 午前 0 時として解釈されるため、Vercel
 * (UTC) の `Date.now()` との差分で「過去 N 日」を判定すると、JST 基準の
 * カレンダー日と最大 1 日ズレる (例: 90 日境界のレコードが件数から漏れる)。
 *
 * 日付文字列同士の「カレンダー比較」に統一すればタイムゾーンに依存せず厳密。
 * JST は夏時間が無いので、単純なオフセット加算で正しいカレンダー日が出る。
 */
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 86_400_000;

/** 現在の JST カレンダー日付を "YYYY-MM-DD" で返す。 */
export function jstToday(): string {
  return new Date(Date.now() + JST_OFFSET_MS).toISOString().slice(0, 10);
}

/** N 日前の JST カレンダー日付を "YYYY-MM-DD" で返す。 */
export function jstDaysAgo(days: number): string {
  return new Date(Date.now() + JST_OFFSET_MS - days * DAY_MS)
    .toISOString()
    .slice(0, 10);
}
