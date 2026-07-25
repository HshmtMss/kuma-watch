export type SightingSourceKind =
  | "sharp9110"
  | "arcgis"
  | "csv"
  | "llm-html"
  | "news" // Google News RSS から Gemini で抽出したニュース報道
  | "citizen"; // 市民からの投稿 (/submit)。管理者が承認したもののみ公開

export type UnifiedSighting = {
  id: string;
  source: string;
  sourceKind: SightingSourceKind;
  lat: number;
  lon: number;
  date: string;
  // 出没の時刻 "HH:MM" (24時間)。分かる場合のみ。sharp9110 の IssueDate や
  // 報道記事から抽出する。地図ポップアップで日付に添えて表示する。
  time?: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
  // 公式情報源 (自治体・警察・公的機関) なら true。
  // ニュース報道・SNS など二次情報源は false。UI で「公式」「報道」の
  // バッジを出すための信頼性シグナル。未指定 (undefined) は「公式扱い」。
  isOfficial?: boolean;
  // 元記事 / 元情報のリンク (news 等で記事 URL を保持)
  sourceUrl?: string;
  // 出没日が記事から取れず、配信日(pubDate)で埋めた「推定日」であることを示す。
  // 報道は見出しに日付があることが多く(例「◯◯でクマ出没 7月25日」)、その場合は
  // 実日付なので false。日付の書かれていない記事だけ true。
  // 通知は「実日付の今日の出没」だけに絞るため、true のものは通知しない
  // (地図には従来どおり載る)。news 以外(警察通報等)は付けない=常に実日付扱い。
  dateEstimated?: boolean;
  // 同一地区(県・市・地区名)の複数の出没を最新1件へ集約したときの、束ねた件数。
  // 2以上なら地図/ポップアップで「この付近で直近◯件」と示す。同じクマの
  // 繰り返し出没や同一事案の複数報道が、日付違い・少しずれた場所で別々のピンに
  // なり水増しに見えるのを防ぐ(1地区1ピン)。
  mergedCount?: number;
  // 公式ソース内で「市町村名」と「緯度経度」が矛盾しており、どちらが正しいか
  // 確定できないレコード。座標を動かすと実在の出没を誤った場所へ動かしかねず、
  // 名前を直すと公式記録の書き換えになるため、原本を確認できるまで表示しない。
  // データ自体は保持する (調査・自治体への照会に使うため)。
  geoInconsistent?: boolean;
  // 投稿写真などの画像 URL (citizen 投稿で地図ポップアップに表示)
  photoUrl?: string;
  // 当社が初めて取り込んだ epoch ms。news-flash の高頻度取り込みで
  // 「新着 ○分前」の表示や「直近24h」フィルタに利用。
  ingestedAt?: number;
};

export function inJapanBounds(lat: number, lon: number): boolean {
  return lat >= 20 && lat <= 50 && lon >= 120 && lon <= 150;
}
