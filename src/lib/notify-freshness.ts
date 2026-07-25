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

/**
 * 通知対象とする出没日の上限（日数）。
 * 0 = 当日(JST)のみ。出没日が今日でない記録は通知しない。
 * 前日ぶんも通知したくなったら 1 に、それより広げたいなら増やす。
 */
export const NOTIFY_MAX_AGE_DAYS = 0;

/** 通知リンクの地図ズーム。ピンが画面に大きく出て、周辺の目印も分かる近さ。 */
export const NOTIFY_MAP_ZOOM = 15;

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
 * ニュース(報道)由来の記録を通知してよいか。鮮度に加えて「時刻が明記されて
 * いること」を要求する。
 *
 * 背景: 報道の出没日は、記事に日付が無ければ配信日(=今日)が入る。そのため
 * 「昨日のクマを今日の記事で読んだ」ものが date=今日 で当日フィルタを
 * すり抜け、古い情報が通知されていた。
 *
 * 時刻(time)は、記事が「◯時ごろ」と具体的に報じたときだけ抽出される
 * (配信時刻は使わない)。時刻があるものは "その日に具体的に起きた出没" と
 * 読めるので、これを鮮度の裏付けに使う。時刻の無い曖昧な記事は通知しない
 * (地図には従来どおり載る)。
 *
 * 警察通報(sharp9110)など当日性が高いソースには使わない(そちらは日付だけで
 * 判定)。呼び出し側がバッチの由来(?source=)で使い分ける。
 */
export function isFreshNewsForNotify(
  date: string | undefined,
  time: string | undefined,
  today: string = jstToday(),
): boolean {
  if (!isFreshForNotify(date, today)) return false;
  return typeof time === "string" && /^\d{1,2}:\d{2}$/.test(time.trim());
}
