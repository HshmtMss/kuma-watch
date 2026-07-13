/**
 * 報道(news)由来ピンの地域抑制リスト。
 *
 * news 抽出パイプライン(Google News + LLM)は誤ジオコーディング・誤帰属を
 * 起こすことがあり、特定地域で事実無根のピンが立って、当該地域の事業者・
 * 住民に実害(苦情・予約キャンセル等)を与える場合がある。ここに登録した矩形内の
 * news 由来レコードは、取り込み段(news.ts)と読み取り段(sightings-cache)の
 * 両方で除外する。
 *
 * 抑制対象は news(報道・未確認)のみ。公式(自治体/警察)・市民投稿は抑制しない。
 * 実在するイベントは公式経路で表示されるため、安全情報の欠落は最小限に留まる。
 *
 * 追加/削除は本ファイルのみで完結。各エントリに理由と登録日を明記すること。
 */
export type SuppressRegion = {
  latMin: number;
  latMax: number;
  lonMin: number;
  lonMax: number;
  reason: string;
};

export const SUPPRESSED_NEWS_REGIONS: SuppressRegion[] = [
  {
    // 網走市・大空町(北海道立オホーツク公園 周辺)。2026-07-13、同公園より
    // 「網走市内の直近90日の出没(出没マーク)は事実無根。近隣自治体・学校にも
    // 確認済み」との申し出。該当ピンは全て報道由来・未確認で、うち1件は
    // 「新冠町」ラベルのまま座標だけ網走に誤配置(オホーツク公園付近)。
    // 宿泊客の苦情・キャンセル等の実害が継続中のため、当該エリアの報道ピンを抑制。
    latMin: 43.85,
    latMax: 44.1,
    lonMin: 144.1,
    lonMax: 144.45,
    reason:
      "網走市・大空町: 北海道立オホーツク公園の申し出(2026-07-13)。報道由来の誤/未確認ピン",
  },
];

/** 報道(news)由来レコードが抑制対象地域内にあるか。 */
export function isNewsSuppressed(
  source: string | undefined,
  lat: number,
  lon: number,
): boolean {
  if (source !== "news") return false;
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return false;
  for (const r of SUPPRESSED_NEWS_REGIONS) {
    if (
      lat >= r.latMin &&
      lat <= r.latMax &&
      lon >= r.lonMin &&
      lon <= r.lonMax
    ) {
      return true;
    }
  }
  return false;
}
