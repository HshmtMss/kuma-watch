// 「新着」判定の一元管理。
//
// これまで新着 (青ハロー / 🆕バッジ / 直近24hフィルタ) は ingestedAt (KumaWatch が
// その情報を取り込んだ時刻) だけで判定していた。しかし報道は同じ事案を複数社が
// 数日〜10日遅れで再報道することがあり、その再報道を取り込むと ingestedAt だけが
// 最近になる。結果、6/26 の出没が「23時間前に掲載＝新着」と表示され実態と食い違う。
//
// そこで新着は「取り込みが最近 (≤24h)」かつ「出没日そのものも最近 (≤2日)」の
// 両方を満たすものに限定する。過去事案の再報道は新着扱いしない。

/** 取り込み (ingestedAt) からこの時間内なら「最近掲載」。 */
export const FRESH_INGEST_MS = 24 * 60 * 60 * 1000;

/** 出没日 (date) から今日までこの日数以内なら「最近の出没」。 */
export const FRESH_EVENT_DAYS = 2;

const DAY_MS = 24 * 60 * 60 * 1000;

/** "YYYY-MM-DD" を epoch ms へ。パースできなければ null。 */
function eventDateMs(date: string | undefined): number | null {
  if (!date) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (!m) return null;
  const t = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isFinite(t) ? t : null;
}

/**
 * このレコードを「新着」として強調してよいか。
 *   - ingestedAt が nowMs から 24h 以内 (最近掲載した)
 *   - かつ 出没日 (date) が nowMs から FRESH_EVENT_DAYS 日以内 (最近の出没)
 * 出没日が不明なものは従来通り ingestedAt のみで判定する。
 */
export function isFreshRecord(
  r: { ingestedAt?: number; date?: string },
  nowMs: number,
): boolean {
  if (typeof r.ingestedAt !== "number") return false;
  if (nowMs - r.ingestedAt > FRESH_INGEST_MS) return false;
  const ev = eventDateMs(r.date);
  if (ev === null) return true; // 日付不明は掲載時刻のみで判定 (後方互換)
  // 出没日は 00:00(UTC) 基準。当日中の経過ぶんを吸収するため +1 日の猶予を足す。
  return nowMs - ev <= FRESH_EVENT_DAYS * DAY_MS + DAY_MS;
}
