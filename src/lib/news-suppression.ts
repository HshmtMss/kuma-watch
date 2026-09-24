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

/**
 * 個別レコードの抑制 (id 指定)。
 *
 * 地域(矩形)での抑制は、その範囲の報道ピンを丸ごと落とすため、同じ市町村に
 * 実在する報道ピンまで消えてしまう。1 件だけ誤っている場合はこちらを使う。
 * id は記事 URL 由来で安定しているので、再取り込みされても同じ id で落ちる。
 */
export const SUPPRESSED_NEWS_IDS: Record<string, string> = {
  // 2026-09-24、岐阜県大垣市農林課より「9月11日 大垣市加賀野町1丁目の出没は
  // 誤り。市に問い合わせが来ている」との申し出。調査の結果、実際の事案は
  // 岩手県盛岡市加賀野一丁目 (中津川左岸の木に子グマ) で、記事から丁目名
  // 「加賀野」だけが一致し、県・市が LLM の誤りのまま通っていた。正しい事案は
  // iwate-morioka-mymap-998 (盛岡市公式) として別途登録済み。
  // 再発防止は news.ts の県名矛盾チェック (PREFECTURE_NAMES) 側で実施。
  "news-mbnxn2-25-2":
    "岐阜県大垣市の申し出(2026-09-24)。実際は岩手県盛岡市加賀野一丁目の事案の誤帰属",
};

/** 報道(news)由来レコードが個別抑制の対象か。 */
export function isNewsSuppressedId(id: string | undefined): boolean {
  return Boolean(id && id in SUPPRESSED_NEWS_IDS);
}

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
