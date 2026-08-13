/**
 * 「通知してよいか」を出没日の新しさで判定する。
 *
 * 背景: 通知の対象は「DB に新しく入った記録」だった。ところが報道記事は
 * 少し前の出没に触れることがあり、その記事を今日取り込むと、出没日が数日前の
 * 記録が「新着」として通知されていた（実利用で「そこそこ前の情報が流れる」
 * 指摘）。夜間に古い出没が届くとトラブルになりかねない。
 *
 * そこで通知は「今まさに出た」ものだけに絞る。出没日(date)が最近の記録だけを
 * 送る。地図には従来どおり全件載る — これは「通知するか」だけの判定。
 *
 * date が無い/不正/未来日の記録は通知しない（鮮度を確認できないため）。
 */
import { jstDaysAgo, jstToday } from "./jst-date";
import { isApproximateLocation } from "./location-precision";

/**
 * 通知対象とする出没日の上限（日数）。
 * 0 = 当日(JST)のみ。出没日が今日でない記録は通知しない。
 * 前日ぶんも通知したくなったら 1 に、それより広げたいなら増やす。
 */
export const NOTIFY_MAX_AGE_DAYS = 0;

/** 通知リンクの地図ズーム。ピンが画面に大きく出て、周辺の目印も分かる近さ。 */
export const NOTIFY_MAP_ZOOM = 15;

/**
 * 夜間ミュート帯 (JST)。この時間は通知を送らない。
 * 20:00〜翌 08:00。夜間は自治体・報道の新規がほぼ無く、まれに出る深夜の
 * 情報(誤報・古い情報を含む)で就寝中に起こしてしまうのを避けるため。
 * 地図には従来どおり載る。夜間ぶんは翌朝まとめては送らない(=その回は見送り。
 * 「今日の出没だけ」方針とも整合し、朝には昨日扱いになるため)。
 */
export const QUIET_START_HOUR = 20;
export const QUIET_END_HOUR = 8;

/** 今が夜間ミュート帯(JST 20:00〜翌8:00)か。 */
export function isQuietHours(now: Date = new Date()): boolean {
  const jstHour = (now.getUTCHours() + 9) % 24;
  return jstHour >= QUIET_START_HOUR || jstHour < QUIET_END_HOUR;
}

/**
 * 通知の「地図で見る」リンク。出没地点の座標に直接ズームして開く。
 *
 * 従来は市町村ページ(/place/...)に飛ばしていたため、地図が遠すぎてどこに
 * 出たか分からず、手で拡大する過程で場所を見失うという指摘があった。座標が
 * あれば地図(/)を lat/lon + 近いズームで開き、その地点に赤ピンが立つ。
 * 座標が無いときだけ fallbackPath(市町村ページ等)に落とす。
 *
 * base は絶対URLの土台。LINE は絶対URL、Web Push はサイト内相対でよいので
 * base="" を渡す。
 */
export function notifyMapUrl(
  base: string,
  lat: number | undefined,
  lon: number | undefined,
  label: string,
  fallbackPath: string,
  /** 出没ピンの id。渡すと地図がその出没の吹き出しを直接開く。 */
  sightingId?: string,
): string {
  if (typeof lat === "number" && typeof lon === "number") {
    const p = new URLSearchParams({
      lat: lat.toFixed(5),
      lon: lon.toFixed(5),
      z: String(NOTIFY_MAP_ZOOM),
      label,
    });
    // s=<id> があれば、地図は座標に寄せるだけでなく、その出没ピンの吹き出し
    // (いつ・どこで・何が出たか) を自動で開く。「どれ？」を無くすため。
    if (sightingId) p.set("s", sightingId);
    return `${base}/?${p.toString()}`;
  }
  return `${base}${fallbackPath}`;
}

/**
 * この記録を今この時点で通知してよいか（出没日が最近か）。
 * date が無い/`YYYY-MM-DD`でない/未来日/古い は false。
 */
export function isFreshForNotify(
  date: string | undefined,
  today: string = jstToday(),
  maxAgeDays: number = NOTIFY_MAX_AGE_DAYS,
): boolean {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const floor = jstDaysAgo(maxAgeDays); // maxAgeDays 日前(JST)
  return date >= floor && date <= today;
}

/**
 * この記録を通知してよいか。
 * 「出没日が今日」かつ「その日付が推定でない」かつ「場所が特定できている」こと。
 *
 * dateEstimated=true は、報道記事に日付が書かれておらず配信日で埋めた記録
 * (実際の出没は昨日以前かもしれない)。これを通知すると古い情報が流れるので
 * 除外する。地図には従来どおり載る。
 *
 * 報道は見出しに日付があることが多く(例「◯◯でクマ出没 7月25日」)、その場合は
 * dateEstimated=false=実日付なので、当日なら通知される。警察通報など
 * dateEstimated を持たないソースは常に実日付扱い(当日なら通知)。
 *
 * 場所が市町村までしか分からない記録 (isApproximateLocation) も通知しない。
 * 配信先は「登録地点から半径 N km 以内か」で決めているが、その座標は地名から
 * 起こした推定なので、誰に届くかが偶然で決まってしまう。届いた人にとっては
 * 「近くで出た」という誤った知らせになり、逆に本当に近い人には届かない。
 * 地図でもピンを出さない方針 (location-precision) と揃える。
 */
export function isNotifiable(
  record: {
    date?: string;
    dateEstimated?: boolean;
    sourceKind?: string;
    source?: string;
    sectionName?: string;
  },
  today: string = jstToday(),
): boolean {
  if (record.dateEstimated) return false;
  if (isApproximateLocation(record)) return false;
  return isFreshForNotify(record.date, today);
}
