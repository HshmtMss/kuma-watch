export type SourceKind = "municipal" | "police" | "aggregator" | "prefecture";
export type ExtractorType =
  | "llm-html"
  | "llm-pdf"
  // 長野県の月別目撃情報 PDF 専用。1 行 1 件の整った表なので正規表現で確実に読む
  // (LLM 経由は 1,154 件中 451 件しか取れていなかった)。src/lib/sources/nagano-pdf.ts
  | "nagano-pdf-table"
  // 山口県の年度別目撃情報 PDF 専用。9 列の表を正規表現で読む。
  // src/lib/sources/yamaguchi-pdf.ts
  | "yamaguchi-pdf-table"
  // 奈良県の年度別目撃情報一覧 PDF 専用。src/lib/sources/nara-pdf.ts
  | "nara-pdf-table"
  // 岐阜県 県域統合型GIS のクママップ。src/lib/sources/gifu-gis.ts
  | "gifu-gis"
  // 青森県「くまログあおもり」。src/lib/sources/kumalog-aomori.ts
  | "kumalog-aomori"
  // 愛知県の年度別出没情報 PDF。src/lib/sources/aichi-pdf.ts
  | "aichi-pdf-table"
  // 神奈川県の年度別 目撃等情報 PDF。src/lib/sources/kanagawa-pdf.ts
  | "kanagawa-pdf-table"
  // 福井県「福井クマ情報」の埋め込み JSON。src/lib/sources/fukui-map.ts
  | "fukui-map"
  | "direct-csv"
  | "direct-gpx"
  | "direct-excel"
  | "direct-json"
  | "direct-api"
  | "direct-kml"
  | "direct-shapefile-zip"
  | "arcgis-dashboard"
  | "higumap-api"
  | "kemonote-api"
  | "custom-webmap";
export type UrlRole =
  | "list"
  | "map"
  | "pdf"
  | "rss"
  | "csv"
  | "gpx"
  | "excel"
  | "arcgis"
  | "gis"
  | "api";
export type BearStatus = "present" | "rare" | "extinct" | "absent";

export type DataSourceUrl = {
  url: string;
  role: UrlRole;
  hint?: string;
};

/** 岐阜県 GIS のレイヤ (年度ごとに 1 レイヤ)。gifu-gis extractor が使う。 */
export type GifuGisLayer = {
  /** 例 "R8クマ目撃"。先頭の元号+年から年度を決めるので改名しないこと。 */
  name: string;
  layerId: number;
  fieldSetId: number;
};

export type ArcGisFieldMappings = {
  date?: string;
  city?: string;
  section?: string;
  situation?: string;
  headCount?: string;
  timeOfDay?: string;
};

export type ArcGisDateFormat = "epoch-ms" | "wareki" | "iso";

export type ArcGisSource = {
  featureServerUrl: string;
  mappings: ArcGisFieldMappings;
  dateFormat?: ArcGisDateFormat; // default "epoch-ms"
};

export type CsvFieldMappings = {
  date: string;
  lat: string;
  lon: string;
  city?: string;
  section?: string;
  situation?: string;
  headCount?: string;
  timeOfDay?: string;
};

export type CsvSource = {
  csvUrl: string;
  /**
   * 配布ファイル名に更新日が入る自治体向け。この一覧ページから現行の URL を
   * 探し、見つかれば csvUrl より優先する。
   * 東京都は tukinowaguma_source20260302 → 20260610 のように番号が変わり、
   * 旧 URL は残るが中身が古いままなので、固定していると静かに古いデータを
   * 配り続ける (実際に 206 日気づけなかった)。
   */
  discoverFrom?: string;
  /** href に当てる正規表現の断片 (例: "tukinowaguma_source\\d+")。 */
  discoverPattern?: string;
  encoding?: "utf-8" | "sjis";
  delimiter?: "," | "\t";
  dateFormat?: "iso" | "ja-slash" | "epoch-ms";
  mappings: CsvFieldMappings;
};

export type KmlNameFormat =
  | "city-section-wareki" // "平内町、堀替地区、H29.1.25" (青森)
  | "city-section-iso"    // "青森市、地区、2025/4/1"
  | "date-only"           // "令和7年4月5日" / "8月27日" / "2025/01/16" (岩手・宮城・栃木)
  | "extended-data"       // name は通し番号、情報は ExtendedData (福島)
  | "section-in-name"     // name = 地名、日付は description 内 (奈良・鳥取・島根)
  | "date-paren-location"; // "M/D(曜日)午前/午後H時M分(city section)" (山形 gmap)

export type KmlDateFormat =
  | "wareki-or-md" // 和暦優先、次に M月D日 (要 fiscalYear)
  | "us-slash"     // M/D/YYYY
  | "ja-slash";    // YYYY/M/D

export type KmlSource = {
  kmlUrl: string;
  nameFormat: KmlNameFormat;
  nameSeparator?: string; // city-section-* で使用、default "、"
  dateField?: string;     // ExtendedData に日付が入っているときのキー
  dateFormat?: KmlDateFormat;
  cityField?: string;
  sectionField?: string;
  commentField?: string;
  headCountField?: string;
  fiscalYear?: number;    // "M月D日" 補完用。4-12月→fiscalYear, 1-3月→fiscalYear+1
  // 1 つの KML が複数県をカバーするとき座標で prefName を切替える
  coordPrefectureSplit?: {
    axis: "lon" | "lat";
    threshold: number;
    lowerPrefName: string;  // 値 < threshold の場合
    upperPrefName: string;  // 値 >= threshold の場合
  };
};

export type DataSourceEntry = {
  /**
   * その期間で完結する過去データか (年度別・月別のアーカイブ等)。
   * true のものは更新が止まって当然なので、健全性チェックの警告対象から外す。
   * これを付けないと月別 PDF が毎月「止まった」と警告され、本当の異常が埋もれる。
   */
  periodBounded?: boolean;
  /** 岐阜県 GIS のレイヤ一覧 (extractor: "gifu-gis" のときのみ)。 */
  gifuGisLayers?: GifuGisLayer[];
  id: string;
  kind: SourceKind;
  prefCode: string;
  regionLabel: string;
  bearStatus: BearStatus;
  urls: DataSourceUrl[];
  extractor: ExtractorType;
  arcgis?: ArcGisSource;
  csv?: CsvSource;
  kml?: KmlSource;
  license?: string;
  notes?: string;
  requiresResearch?: boolean;
  // 市町村スコープのソースで、ページに市町村名が明示されない場合の既定値。
  // llm-html 抽出器が cityName 不明時のジオコード補完に使用。
  defaultCity?: string;
  verifiedAt: string;
};

/**
 * 全 47 都道府県の登録。
 *
 * bearStatus:
 *   present = 恒常的にクマが生息
 *   rare    = ごく稀（四国など。絶滅危惧）
 *   extinct = 環境省により絶滅宣言
 *   absent  = 元々生息しない
 *
 * requiresResearch=true はまだ実運用前に要確認。
 *
 * 2026-04-20 URL 実地検証: HTTP 200 を確認済みのものが verified。
 * 2026-04-26 全 URL を curl で再検証し 13 件の 404 を修正。
 *
 * fastbear (https://fastbear.aisometry.com/) との差分メモ:
 *   - fastbear は Gemini で「警察＋自治体＋報道」公開情報を AI 抽出
 *   - X bot @fastbearbot 経由でも配信
 *   - 我々の差分: 報道スクレイピング・X タイムライン取り込みは未実装
 *     → 将来の追加候補: 共同通信 / 地方紙 RSS / 都道府県警 X アカウント
 *
 * 長野県メモ: 県公式 Web は PDF のみで点座標非公開。県公認のリアルタイム閲覧は
 *   けものおと2 アプリ (株式会社アイエスイー、山形県のけものノートと同ベンダー)。
 *   API は kuma/kuma が通らず、県と直接協定が必要。当面は市町村サイト
 *   (nagano-karuizawa / -matsumoto / -saku 等) の HTML を LLM 抽出で集約する方針。
 */
export const DATA_SOURCES: DataSourceEntry[] = [
  {
    id: "hokkaido",
    kind: "prefecture",
    prefCode: "01",
    regionLabel: "北海道 ひぐまっぷ",
    bearStatus: "present",
    urls: [
      { url: "https://higumap.info/recent", role: "map", hint: "ひぐまっぷ 全道直近 3 ヶ月ヒグマ出没マップ" },
      { url: "https://higumap.info/", role: "map", hint: "ひぐまっぷ トップ" },
      { url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma1/caution/", role: "list", hint: "道庁ヒグマ基本情報（旧 /higuma/kihon.html は改編で404）" },
      { url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/joho.html", role: "list", hint: "市町村ヒグマ関連情報リンク集" },
    ],
    extractor: "higumap-api",
    notes: "ひぐまっぷ (https://higumap.info) の公開 JSON API `/map/reportsJson?cityId=X&fiscalYear=Y` を 65 市町村 × 複数年度で取得。道内多くの市町村が採用するヒグマ出没情報プラットフォーム",
    verifiedAt: "2026-04-26",
  },
  {
    id: "aomori",
    kind: "prefecture",
    prefCode: "02",
    regionLabel: "青森県 ツキノワグマ出没状況（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.aomori.lg.jp/soshiki/kankyo/shizen/kuma_cyuui.html", role: "list", hint: "青森県の公式注意ページ" },
      { url: "https://www.google.com/maps/d/viewer?mid=13Nbo8EFxhx50lQsl4SptQctrnNU", role: "map", hint: "青森県 Google My Map（県公式）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=13Nbo8EFxhx50lQsl4SptQctrnNU&forcekml=1",
      nameFormat: "city-section-wareki",
      nameSeparator: "、",
    },
    // 2026-03-22 で更新停止。県は「くまログあおもり」へ移行した (下記)。
    periodBounded: true,
    notes: "Google My Map の name 欄に『市町村、地区名、和暦日付』形式で 7,624 件。2026-03-22 で更新停止",
    verifiedAt: "2026-04-20",
  },
  {
    // 県の Google マイマップ (aomori) が 2026-03-22 で止まった移行先。
    // 住民投稿型で、緯度経度・住所・頭数・親子連れ・状況文まで揃う。
    // クマ以外 (イノシシ・ニホンジカ) も同じ API に載るので種別で絞ること。
    id: "kumalog-aomori",
    kind: "prefecture",
    prefCode: "02",
    regionLabel: "青森県 くまログあおもり（県公式・住民投稿型）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.aomori.lg.jp/soshiki/kankyo/shizen/kumalog_aomori.html", role: "list", hint: "県公式の案内" },
      { url: "https://kumalog-aomori.info/", role: "map", hint: "くまログあおもり 情報マップ" },
      { url: "https://kumalog-aomori.info/api/ver1/sightings/post_list_external", role: "api", hint: "外部公開 API (filter[startdate]/[enddate] で期間指定)" },
    ],
    extractor: "kumalog-aomori",
    notes: "期間指定なしだと直近2週間ほどしか返らない。2025-04〜2026-08 でツキノワグマ 4,363 件",
    verifiedAt: "2026-08-26",
  },
  {
    id: "iwate",
    kind: "prefecture",
    prefCode: "03",
    regionLabel: "岩手県 ツキノワグマ出没状況（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/1056087.html", role: "list", hint: "人身被害状況・出没状況、Google マップ埋込あり" },
      { url: "https://www.google.com/maps/d/viewer?mid=1Rzj7qui6pXmL02XzmsH_Zqf8Feg", role: "map", hint: "岩手県 Google My Map（県公式）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1Rzj7qui6pXmL02XzmsH_Zqf8Feg&forcekml=1",
      nameFormat: "date-only",
    },
    notes: "Google My Map の name 欄に和暦日付、description に状況。市町村情報は name に無し",
    verifiedAt: "2026-04-20",
  },
  {
    // 盛岡市公式 MyMap。県全体マップ (1Rzj...) に補完して市内 700+ 件を取り込む。
    // ExtendedData が豊富 (発生地域・頭数・説明)、name は「令和X年Y月Z日」のみ。
    id: "iwate-morioka-mymap",
    kind: "prefecture",
    prefCode: "03",
    regionLabel: "岩手県 盛岡市内ツキノワグマ出没情報（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.google.com/maps/d/viewer?mid=1QnVCL8lSy4tc9bPEhAXTBsK6SQ0ztwc", role: "map", hint: "盛岡市内ツキノワグマ出没情報マップ（市公式）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1QnVCL8lSy4tc9bPEhAXTBsK6SQ0ztwc&forcekml=1",
      nameFormat: "extended-data",
      sectionField: "発生地域",
      headCountField: "頭数",
      commentField: "説明",
      // name 欄に「令和X年Y月Z日」形式で日付。dateField は使わず name から拾う。
    },
    defaultCity: "盛岡市",
    notes: "盛岡市公式 My Map 782 件 (2026-05 時点)。市単位の詳細データを上乗せ",
    verifiedAt: "2026-05-07",
  },
  {
    id: "miyagi",
    kind: "prefecture",
    prefCode: "04",
    regionLabel: "宮城県 ツキノワグマ（令和7年度 Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.miyagi.jp/soshiki/sizenhogo/tukinowaguma.html", role: "list", hint: "宮城県の公式ページ" },
      { url: "https://www.google.com/maps/d/viewer?mid=1aZCXqs7vrAPEBhE4HkT3CwmlMdunP2Y", role: "map", hint: "宮城県 Google My Map（令和7年度）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1aZCXqs7vrAPEBhE4HkT3CwmlMdunP2Y&forcekml=1",
      nameFormat: "date-only",
      dateField: "年月日",
      fiscalYear: 2025,
    },
    // 令和7年度で完結したアーカイブ。現行は下の miyagi-r8。
    periodBounded: true,
    notes: "3,535 件。name には和暦日付 or 種別（目撃/痕跡/人身被害）。ExtendedData 年月日 に US 形式 or M月D日",
    verifiedAt: "2026-04-20",
  },
  {
    // 令和8年度 (現行)。県は年度ごとに別のマイマップを作り、前年度のものは
    // 更新を止める。年度が替わったらここに新しい mid を足すこと
    // (令和7年度分が 2026-03-23 で止まり 156 日気づけなかった)。
    //   一覧: https://www.pref.miyagi.jp/soshiki/sizenhogo/r8kumamokugeki.html
    id: "miyagi-r8",
    kind: "prefecture",
    prefCode: "04",
    regionLabel: "宮城県 ツキノワグマ（令和8年度 Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.miyagi.jp/soshiki/sizenhogo/r8kumamokugeki.html", role: "list", hint: "令和8年度クマ目撃等情報" },
      { url: "https://www.google.com/maps/d/viewer?mid=12_b92SRipXWwvkUfNCsDdEUWhEOmzUc", role: "map", hint: "宮城県 Google My Map（令和8年度）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=12_b92SRipXWwvkUfNCsDdEUWhEOmzUc&forcekml=1",
      nameFormat: "date-only",
      dateField: "年月日",
      fiscalYear: 2026,
    },
    notes: "令和8年度分。ExtendedData 年月日 に M月D日。2026-08-24 時点で 4〜8 月分",
    verifiedAt: "2026-08-26",
  },
  {
    id: "akita",
    kind: "prefecture",
    prefCode: "05",
    regionLabel: "秋田県 クマダス / ArcGIS Hub",
    bearStatus: "present",
    urls: [
      { url: "https://tsukinowaguma-pref-akita.hub.arcgis.com/", role: "arcgis", hint: "秋田県ツキノワグマ ArcGIS Hub（公式）" },
      { url: "https://kumadas.net/", role: "map", hint: "クマダス 秋田県・大館市協力の投稿マップ（Sharp9110 ベース）" },
    ],
    extractor: "arcgis-dashboard",
    notes: "秋田県の公式システムはクマダス (kumadas.net、技術基盤 Sharp9110)。ArcGIS Hub は legacy page で構造化データ API は未提供。Sharp9110 経由の 18,859 件を公式データとして利用",
    verifiedAt: "2026-04-20",
  },
  {
    id: "yamagata-gmap-r7",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 R7 クマ目撃マップ（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamagata.jp/050011/midori/2025kumap.html", role: "list", hint: "令和7年度クマ目撃マップ案内ページ" },
      { url: "https://www.google.com/maps/d/viewer?mid=1N9E9rixBQwxB4TKQ2XsP32GLOi6w6qQ", role: "map", hint: "R7 Google My Map" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1N9E9rixBQwxB4TKQ2XsP32GLOi6w6qQ&forcekml=1",
      nameFormat: "date-paren-location",
      fiscalYear: 2025,
    },
    notes: "R7 (令和7年度) 3,092 件。name に M/D(曜日)午前/午後H時M分(市町+地名) 形式",
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamagata-gmap-r6",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 R6 クマ目撃マップ（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamagata.jp/050011/midori/2024kumap.html", role: "list", hint: "令和6年度クマ目撃マップ案内" },
      { url: "https://www.google.com/maps/d/viewer?mid=1da3oBtt7Foif1w2r_UPO9-RdwuElVis", role: "map", hint: "R6 Google My Map" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1da3oBtt7Foif1w2r_UPO9-RdwuElVis&forcekml=1",
      nameFormat: "date-paren-location",
      fiscalYear: 2024,
    },
    notes: "R6 (令和6年度) 369 件",
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamagata-gmap-r5",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 R5 クマ目撃マップ（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamagata.jp/050011/midori/2023kumap.html", role: "list", hint: "令和5年度クマ目撃マップ案内" },
      { url: "https://www.google.com/maps/d/viewer?mid=1x_6oTNnnFifUnxVYBCPg4vxpIpZigkY", role: "map", hint: "R5 Google My Map" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1x_6oTNnnFifUnxVYBCPg4vxpIpZigkY&forcekml=1",
      nameFormat: "date-paren-location",
      fiscalYear: 2023,
    },
    notes: "R5 (令和5年度) 894 件",
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamagata-kemonote",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 けものノート（県公式投稿マップ）",
    bearStatus: "present",
    urls: [
      { url: "https://v2.kemonote.com/#/login", role: "map", hint: "けものノート v2（山形県アカウント kuma/kuma で閲覧可）" },
    ],
    extractor: "kemonote-api",
    notes: "けものノート API 経由で山形県の投稿を取得。JWT auth で /web/api/map_points を呼ぶ。qa_content 内の『目撃した日付』『クマを目撃した日付』を date として採用、無ければ posted_at を JST 変換してフォールバック",
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamagata",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 クマ目撃マップ（CSV 公開）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamagata.jp/050011/midori/2025kumap.html", role: "map", hint: "令和7年（2025）クマ目撃マップ" },
      { url: "https://www.pref.yamagata.jp/050011/kurashi/shizen/seibutsu/about_kuma/kuma_yamagata_top.html", role: "list", hint: "山形県 クマ情報トップ" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://www.pref.yamagata.jp/documents/2414/20260414_kemonote-cleaned.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "目撃した日付",
        lat: "緯度",
        lon: "経度",
        city: "ユーザ名",
        section: "地名等",
        situation: "この場所の周辺環境",
        headCount: "目撃頭数",
        timeOfDay: "目撃した時間帯（0:00～24:00）",
      },
    },
    notes: "位置座標付き CSV（2026-04-14 時点で 69 件、16KB）",
    verifiedAt: "2026-04-20",
  },
  {
    id: "fukushima",
    kind: "prefecture",
    prefCode: "07",
    regionLabel: "福島県 クマ目撃マップ（ArcGIS Dashboard）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.fukushima.lg.jp/sec/16035b/tukinowaguma-mokugeki.html", role: "map", hint: "県公式「福島県クマ目撃マップ」ページ" },
      { url: "https://fuku-wildlifemap.maps.arcgis.com/apps/dashboards/031c907fe92a4a0a8311a228ff4ca404", role: "arcgis", hint: "県公式 ArcGIS Dashboard（2026-06-26 移行先）" },
      // 旧公開先。2026-03-31 で更新停止（参考として保持）。
      { url: "https://www.google.com/maps/d/viewer?mid=10gR9gJgiEA_Tso2E0jM-Q2sI41A3n_w", role: "map", hint: "旧 Google My Map（2026-03-31 で更新停止）" },
    ],
    extractor: "arcgis-dashboard",
    arcgis: {
      featureServerUrl:
        "https://services6.arcgis.com/M9nrgnB1gu8YnLFM/arcgis/rest/services/福島県クマ目撃ポイントレイヤー_202606_view/FeatureServer/0",
      dateFormat: "epoch-ms",
      mappings: {
        date: "kuma_date",
        // city は coded domain で生値が JIS コード ("07543" 等)。抽出器は
        // ドメイン解決をしないため割り当てない。gunma と同様、city 無しなら
        // place-index が座標から市町村を解決する (resolveCanonicalForIndex)。
        section: "address_public",
        // sighting は coded ("1_クマ個体")。自由記述の詳細を採用。
        situation: "detail_sighting_public",
        // headcount も coded ("1_1頭") かつ充足率 45% のため未割当 (既定 1 頭)。
      },
    },
    notes:
      "2026-06-26 に Google My Map から ArcGIS Dashboard へ移行。Survey123 ベースの公開ビュー 4,337 件（2022-04-03〜2026-07-19）。wkid 4326。kuma_date は UTC epoch ms のため JST 00-09 時台の目撃は ISO 日付が 1 日前にずれる既知の制約あり",
    verifiedAt: "2026-07-20",
  },
  {
    id: "ibaraki",
    kind: "prefecture",
    prefCode: "08",
    regionLabel: "茨城県 ツキノワグマ目撃情報（大子町高柴）",
    bearStatus: "rare",
    urls: [
      { url: "https://www.pref.ibaraki.jp/seikatsukankyo/kansei/chojyuhogo/tsukinowagumamokugeki.html", role: "list", hint: "県公式 クマ目撃情報ページ" },
      { url: "https://www.pref.ibaraki.jp/seikatsukankyo/kansei/chojyuhogo/documents/kumakanri_honbun_2603.pdf", role: "pdf", hint: "茨城県ツキノワグマ管理計画（R7.3 策定・R8.3 一部変更）" },
    ],
    extractor: "llm-html",
    notes: "恒常的生息地なし。2025-06-02 大子町高柴で 2016 年以来 9 年ぶりの確定目撃。県は第二種特定鳥獣管理計画で定着防止方針",
    verifiedAt: "2026-04-21",
  },
  {
    id: "tochigi",
    kind: "prefecture",
    prefCode: "09",
    regionLabel: "栃木県 とちぎのクマ目撃情報2025（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.tochigi.lg.jp/d04/choujyuu/r4_kuma_shutubotu.html", role: "list", hint: "令和7年度クマ出没（目撃）状況（県公式）" },
      { url: "https://www.google.com/maps/d/viewer?mid=10qIEI8EW5IVAY82zXyoF8DbWto0aUyc", role: "map", hint: "とちぎのクマ目撃情報2025" },
      { url: "https://map.police.tochigi.dsvc.jp/", role: "map", hint: "栃木県警公開マップ" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=10qIEI8EW5IVAY82zXyoF8DbWto0aUyc&forcekml=1",
      nameFormat: "date-only",
    },
    notes: "Google My Map 258 件。name=日付 (2025/01/16 形式)、description=ソース URL（新聞記事等）",
    verifiedAt: "2026-04-20",
  },
  {
    // 2026 年版マップ (10qIE... の 2025 版を補完)。「とちぎのクマ目撃情報2026」。
    // 件数は少ないが当該年度の最新ピンを取り込めるのが価値。
    id: "tochigi-2026-mymap",
    kind: "prefecture",
    prefCode: "09",
    regionLabel: "栃木県 とちぎのクマ目撃情報2026（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.google.com/maps/d/viewer?mid=1FiDKp98cxzU1GQu04o5rnmbtT1mgmZs", role: "map", hint: "とちぎのクマ目撃情報2026" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1FiDKp98cxzU1GQu04o5rnmbtT1mgmZs&forcekml=1",
      nameFormat: "date-only",
    },
    notes: "2026 年版 (R8 年度) Google My Map 48 件 (2026-05 時点)。description にソース URL",
    verifiedAt: "2026-05-07",
  },
  {
    id: "gunma",
    kind: "prefecture",
    prefCode: "10",
    regionLabel: "群馬県 クマ出没マップ（ArcGIS）",
    bearStatus: "present",
    urls: [
      { url: "https://www.arcgis.com/apps/dashboards/5276d2ebf02a42da8595ed2a51a334c8", role: "arcgis", hint: "群馬県クマ出没マップ公式 ArcGIS Dashboard" },
      { url: "https://www.pref.gunma.jp/site/houdou/650808.html", role: "list", hint: "県公式説明ページ" },
    ],
    extractor: "arcgis-dashboard",
    arcgis: {
      featureServerUrl:
        "https://services7.arcgis.com/DkC6f6v0YUQX0rke/arcgis/rest/services/survey123_a77f33a9b9f649cfada5c7983c67874b_results/FeatureServer/0",
      mappings: {
        date: "field_18",
        // field_11 は「場所」の自由記述 (例 "渋川市渋川　明保野交差点西側700m付近")。
        // 市町村の列ではないので city には割り当てない。住所列 field_14 は
        // 全1,575件が null で使えない。city 無しなら place-index が座標から
        // 市町村を解決する (resolveCanonicalForIndex のフォールバック)。
        section: "field_11",
        situation: "field10",
        headCount: "field_8",
        timeOfDay: "field_19",
      },
    },
    notes: "ArcGIS Survey123 ベース。2026-04 時点で 1,293 件",
    verifiedAt: "2026-04-20",
  },
  {
    id: "saitama",
    kind: "prefecture",
    prefCode: "11",
    regionLabel: "埼玉県 野生動物出没情報ダッシュボード（ArcGIS）",
    bearStatus: "present",
    urls: [
      { url: "https://www.arcgis.com/apps/dashboards/6851a59c5a76496e9c9e3b54b2e67ff9", role: "arcgis", hint: "埼玉県みどり自然課の ArcGIS Dashboard（公式）" },
      { url: "https://www.pref.saitama.lg.jp/dx-portal/info/kumashutsubotsu.html", role: "list", hint: "DX ポータル クマ出没マップ案内" },
    ],
    extractor: "arcgis-dashboard",
    arcgis: {
      featureServerUrl:
        "https://services9.arcgis.com/n65w8AXGaYPTqFYI/arcgis/rest/services/survey123_3123e5ed452d4e89845e4ba6129c1e2d_results/FeatureServer/0",
      mappings: {
        date: "field_1",
        city: "field_4",
        section: "field_6",
        situation: "field_9",
        headCount: "field_10",
        timeOfDay: "field_2",
      },
    },
    notes: "ArcGIS Survey123 ベース。2026-04 時点で 282 件。危険度ラベル field_17 も活用可能",
    verifiedAt: "2026-04-20",
  },
  {
    id: "chiba",
    kind: "prefecture",
    prefCode: "12",
    regionLabel: "千葉県（本州唯一のクマ生息なし）",
    bearStatus: "absent",
    urls: [],
    extractor: "llm-html",
    notes: "本州で唯一クマが生息しない県",
    verifiedAt: "2026-04-20",
  },
  {
    id: "tokyo",
    kind: "prefecture",
    prefCode: "13",
    regionLabel: "東京都 TOKYOくまっぷ（CSV + GPX 公開）",
    bearStatus: "present",
    urls: [
      { url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/data", role: "csv", hint: "CSV/GPX ダウンロード専用ページ" },
      { url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/witness", role: "list", hint: "TOKYOくまっぷ 目撃情報リスト" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl:
        // 注意: 都は更新のたびにファイル名の日付を変え、旧ファイルは残るが
        // 更新されない。登録が 20260302 のままで 2025/12/1 以降が入らず 206 日
        // 気づけなかった。シーズン中は月1回 data ページで確認して差し替えること。
        //   一覧: https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/data
        "https://www.kankyo.metro.tokyo.lg.jp/documents/d/kankyo/tukinowaguma_source20260610",
      discoverFrom:
        "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/data",
      discoverPattern: "tukinowaguma_source\\d+",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "date",
        lat: "lat",
        lon: "lon",
        situation: "sightings, traces, etc.",
      },
    },
    license: "東京都 利用規約",
    notes: "CSV 公開（2026-03-02 時点で 955 件）。CSV の URL はファイル更新のたびに変わる可能性あり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "kanagawa",
    kind: "prefecture",
    prefCode: "14",
    regionLabel: "神奈川県 ツキノワグマ情報",
    bearStatus: "present",
    urls: [
      // 注意: 県は更新のたびにファイル名の日付を変える (kuma_r8_0824.pdf)。
      // シーズン中は月1回 list ページで確認して差し替えること。
      { url: "https://www.pref.kanagawa.jp/documents/15077/kuma_r8_0831.pdf", role: "pdf", hint: "令和8年度 目撃等情報 (R8.8.31 時点)" },
      { url: "https://www.pref.kanagawa.jp/docs/t4i/cnt/f3813/index.html", role: "list", hint: "神奈川県ツキノワグマ情報" },
    ],
    extractor: "kanagawa-pdf-table",
    notes: "丹沢・道志山系に少数個体群。第二種特定鳥獣管理計画の対象",
    verifiedAt: "2026-09-01",
  },
  {
    id: "niigata",
    kind: "prefecture",
    prefCode: "15",
    regionLabel: "新潟県 にいがたクマ出没マップ（ArcGIS）",
    bearStatus: "present",
    urls: [
      { url: "https://www.arcgis.com/apps/dashboards/20b4d06fb3b34776959a4e69c7a8511a", role: "arcgis", hint: "にいがたクマ出没マップ 最新版（公式）" },
      { url: "https://www.pref.niigata.lg.jp/site/tyoujyutaisakusienn/241009kumamap.html", role: "list", hint: "県公式案内ページ" },
    ],
    extractor: "arcgis-dashboard",
    arcgis: {
      featureServerUrl:
        "https://services6.arcgis.com/SKz58fvdFlaEB35q/arcgis/rest/services/survey123_08d14b98657b47309b868f49602375c8_results/FeatureServer/0",
      mappings: {
        date: "field_20",
        city: "field_7",
        section: "field_17",
        situation: "field_9",
        headCount: "field_26",
        timeOfDay: "field_21",
      },
    },
    notes: "ArcGIS Survey123 ベース。2024-10 リニューアル。2026-04 時点で 3,558 件",
    verifiedAt: "2026-04-20",
  },
  {
    id: "toyama",
    kind: "prefecture",
    prefCode: "16",
    regionLabel: "富山県 クマっぷ（ArcGIS FeatureServer）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.toyama.jp/1709/kurashi/kankyoushizen/shizen/yaseiseibutsu/kumap.html", role: "map", hint: "富山県 ツキノワグマ出没情報地図『クマっぷ』" },
      { url: "https://pref-toyama-1709.maps.arcgis.com/apps/dashboards/daffbc92f82342339aa6bf3c83ab4742", role: "arcgis", hint: "県公式 ArcGIS Dashboard" },
    ],
    extractor: "arcgis-dashboard",
    arcgis: {
      featureServerUrl:
        "https://services7.arcgis.com/pUdPpUsq83Kw8pWi/arcgis/rest/services/survey123_3f07f1f9864d43368d48b5f373d6cd68_results/FeatureServer/0",
      dateFormat: "epoch-ms",
      mappings: {
        date: "HasseiDateTime",
        city: "HasseiCity",
        section: "HasseiArea",
        situation: "TsuhoInfo",
        headCount: "BearAdult",
      },
    },
    notes: "2026-04-06 リニューアル後の Survey123 ベース ArcGIS。4,357 件。目撃/痕跡/人身被害が HoukokuType で区別される",
    verifiedAt: "2026-04-21",
  },
  {
    id: "ishikawa",
    kind: "prefecture",
    prefCode: "17",
    regionLabel: "石川県 ツキノワグマ出没情報（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.ishikawa.lg.jp/sizen/kuma/navi01.html", role: "map", hint: "石川県ツキノワグマ出没情報地図" },
      { url: "https://www.google.com/maps/d/kml?mid=17x-ZQxVWesZ3iJdObP0BXeS_R7e0vxw&forcekml=1", role: "map", hint: "Google My Maps KML（令和8年）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=17x-ZQxVWesZ3iJdObP0BXeS_R7e0vxw&forcekml=1",
      nameFormat: "section-in-name",
    },
    notes:
      "Google My Maps R8（令和8年度）。Point 6 件のみ（残りは市町境界ポリゴン）。description に『出没日: R8.2.23』等の和暦/ISO 日付あり。Sharp9110 の 187 件を併用",
    verifiedAt: "2026-04-21",
  },
  {
    // R7 (令和7年度=2025年度) ツキノワグマ目撃・痕跡情報。県公式の年度マップで
    // 432 件。R8 は別 mid。市町・場所・出没日は ExtendedData に揃っている。
    id: "ishikawa-r7-mymap",
    kind: "prefecture",
    prefCode: "17",
    regionLabel: "石川県 R7 ツキノワグマ目撃・痕跡情報（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.google.com/maps/d/viewer?mid=1yzG7cN9fx5lPUMyE_Xp5k7r_EXjSz_0", role: "map", hint: "令和7年度 ツキノワグマ目撃・痕跡情報" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1yzG7cN9fx5lPUMyE_Xp5k7r_EXjSz_0&forcekml=1",
      nameFormat: "extended-data",
      cityField: "市町名",
      sectionField: "場所",
      commentField: "備考",
      dateField: "出没日",
    },
    notes: "R7 (2025) 年度版 432 件 (2026-05 時点)。R8 マップ (17x-ZQ...) を補完",
    verifiedAt: "2026-05-07",
  },
  {
    id: "fukui",
    kind: "prefecture",
    prefCode: "18",
    regionLabel: "福井県 福井クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://tsukinowaguma.pref.fukui.lg.jp/", role: "map", hint: "福井クマ情報 専用ドメイン（OpenLayers 独自 GIS）" },
      { url: "https://www.pref.fukui.lg.jp/doc/shizen/tixyouzixyuu/tukinowaguma2.html", role: "list", hint: "県自然環境課 トップページ（PDF リンク）" },
      { url: "https://www.pref.fukui.lg.jp/doc/shizen/tixyouzixyuu/tukinowaguma2_d/fil/R4-8.pdf", role: "pdf", hint: "出没状況（R4〜R8）月別・地域別集計 PDF" },
    ],
    extractor: "fukui-map",
    notes: "トップページの隠しフィールド hdnKumaData に地図描画用 JSON が埋まっており、そこから直接取れる (追加リクエスト不要)。埋め込みは直近3か月ほど。緯度経度・字・時刻・種別・頭数つき",
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamanashi-r7",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 R7 クマ出没・目撃（CKAN CSV）",
    bearStatus: "present",
    urls: [
      { url: "https://catalog.dataplatform-yamanashi.jp/dataset/kuma1", role: "csv", hint: "令和7年度" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://catalog.dataplatform-yamanashi.jp/dataset/bed5301d-75b2-4976-8687-2b2721ae143a/resource/89d2478e-e29e-46e3-9ad3-19bf44822d4d/download/2025kumadata.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "年月日",
        lat: "緯度",
        lon: "経度",
        city: "目撃市町村",
        section: "場所",
        situation: "目撃時のクマ",
        headCount: "目撃頭数",
      },
    },
    notes: "令和7年度 CSV。一部レコードは座標欠損（地点ぼかし）",
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamanashi-r6",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 R6 クマ出没・目撃（CKAN CSV）",
    bearStatus: "present",
    urls: [
      { url: "https://catalog.dataplatform-yamanashi.jp/dataset/kuma2", role: "csv", hint: "令和6年度" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://catalog.dataplatform-yamanashi.jp/dataset/3ecf27d0-72f6-417a-a1ad-5cbe3bd4200c/resource/b4eb262f-07e0-4417-b24f-6b15844b4ac1/download/2024kumadata.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "年月日",
        lat: "緯度",
        lon: "経度",
        city: "目撃市町村",
        section: "場所",
        situation: "目撃時のクマ",
        headCount: "目撃頭数",
      },
    },
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamanashi-r5",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 R5 クマ出没・目撃（CKAN CSV）",
    bearStatus: "present",
    urls: [
      { url: "https://catalog.dataplatform-yamanashi.jp/dataset/kuma3", role: "csv", hint: "令和5年度" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://catalog.dataplatform-yamanashi.jp/dataset/06810006-6903-477e-87e8-411e433c2442/resource/f8d0e060-7802-413f-a201-66d5aa1a70e8/download/2023kumadata.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "年月日",
        lat: "緯度",
        lon: "経度",
        city: "目撃市町村",
        section: "場所",
        situation: "目撃時のクマ",
        headCount: "目撃頭数",
      },
    },
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamanashi-r4",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 R4 クマ出没・目撃（CKAN CSV）",
    bearStatus: "present",
    urls: [
      { url: "https://catalog.dataplatform-yamanashi.jp/dataset/kuma4", role: "csv", hint: "令和4年度" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://catalog.dataplatform-yamanashi.jp/dataset/712baddf-61ec-44d4-9ec2-653223911a02/resource/d4a6a51d-52f9-476a-aa74-0c27b87c748c/download/2022kumadata.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "年月日",
        lat: "緯度",
        lon: "経度",
        city: "目撃市町村",
        section: "場所",
        situation: "目撃時のクマ",
        headCount: "目撃頭数",
      },
    },
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamanashi-r3",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 R3 クマ出没・目撃（CKAN CSV）",
    bearStatus: "present",
    urls: [
      { url: "https://catalog.dataplatform-yamanashi.jp/dataset/kuma5", role: "csv", hint: "令和3年度" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://catalog.dataplatform-yamanashi.jp/dataset/8b93f225-6f90-4eb6-8e4f-f984ea246bbd/resource/0a66378c-bf8d-4614-9816-3d41d88797f4/download/2021kumadata.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "年月日",
        lat: "緯度",
        lon: "経度",
        city: "目撃市町村",
        section: "場所",
        situation: "目撃時のクマ",
        headCount: "目撃頭数",
      },
    },
    verifiedAt: "2026-04-21",
  },
  {
    id: "yamanashi-r2",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 R2 クマ出没・目撃（CKAN CSV）",
    bearStatus: "present",
    urls: [
      { url: "https://catalog.dataplatform-yamanashi.jp/dataset/kuma6", role: "csv", hint: "令和2年度" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://catalog.dataplatform-yamanashi.jp/dataset/e25bc05d-75c4-4a54-b3c6-ea6395f23f70/resource/1c00f67e-1270-4a73-b46f-e046357fa43b/download/2020kumadata.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "年月日",
        lat: "緯度",
        lon: "経度",
        city: "目撃市町村",
        section: "場所",
        situation: "目撃時のクマ",
        headCount: "目撃頭数",
      },
    },
    verifiedAt: "2026-04-21",
  },
  {
    id: "nagano",
    kind: "prefecture",
    prefCode: "20",
    regionLabel: "長野県 ツキノワグマ情報マップ / けものおと2",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nagano.lg.jp/yasei/bear.html", role: "list", hint: "県公式 ツキノワグマトップ" },
      { url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html", role: "list", hint: "ツキノワグマ情報マップ案内（けものおと2 アプリ・月別 PDF 一覧）" },
      { url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/documents/424mokugeki.pdf", role: "pdf", hint: "令和8年度 最新目撃情報一覧（R8.4.24 現在）" },
      { url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/documents/20260331-mokugeki.pdf", role: "pdf", hint: "令和7年度 月別目撃情報（最終月 R8.3）" },
      { url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/documents/08_kuma-map.pdf", role: "pdf", hint: "令和7年度ツキノワグマ出没マップ 8月版（累計視覚マップ）" },
    ],
    extractor: "llm-html",
    notes: "県公式 Web は PDF 月次リストのみで点座標非公開。県公認の閲覧手段は『けものおと2』スマホアプリ (com.kemonote2b.app, 株式会社アイエスイー製、山形県のけものノートと同ベンダー)。API は kuma/kuma の guest 資格情報を受け付けず、県と直接協定しないとデータ取得不可。R7 (2025) 全年集計は 12 本の月別 PDF から 2,346 件・71 市町村。点座標を補うため市町村の独自公開ページ (nagano-* 系 source) を併用",
    verifiedAt: "2026-04-26",
  },
  // 長野県 月別目撃情報 PDF (R7.4 〜) — 各 PDF を Gemini PDF native input で抽出
  //
  // 注意: 県はファイル名に規則性が無く (r070430_mokugeki / 0706_mokugeki / 531kuma /
  // 630mokugeki2 ...)、月末版が公開されると暫定版を消す。実際 424mokugeki.pdf
  // (R8.4 暫定) は 430mokugeki.pdf (月末版) に差し替えられて 404 になっていた。
  // ファイル名の差し替えは nagano-pdf.ts が一覧ページから自動追従するので
  // 追記は不要。ただし「新しい月」が始まったらここに 1 行足すこと
  // (月の一覧そのものはここが持っているため)。長野は北アルプス・上高地を抱える
  // 主要なクマ県で、ここが止まると /spot と /place の両方が同時に薄くなる。
  //   一覧: https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html
  ...(
    [
      { ym: "R7.4 (2025-04)", file: "r070430_mokugeki.pdf" },
      { ym: "R7.5 (2025-05)", file: "r070531_mokugeki.pdf" },
      { ym: "R7.6 (2025-06)", file: "0706_mokugeki.pdf" },
      { ym: "R7.7 (2025-07)", file: "r0707_mokugeki.pdf" },
      { ym: "R7.8 (2025-08)", file: "20250903mokugeki.pdf" },
      { ym: "R7.9 (2025-09)", file: "20250930-mokugeki.pdf" },
      { ym: "R7.10 (2025-10)", file: "251031_mokugeki.pdf" },
      { ym: "R7.11 (2025-11)", file: "251130-mokugeki.pdf" },
      { ym: "R7.12 (2025-12)", file: "20251231-mokugeki.pdf" },
      { ym: "R8.1 (2026-01)", file: "20260206-mokugeki.pdf" },
      { ym: "R8.2 (2026-02)", file: "20260306-mokugeki.pdf" },
      { ym: "R8.3 (2026-03)", file: "20260331-mokugeki.pdf" },
      // 令和8年度 (今シーズン)。424mokugeki.pdf (暫定版) は県が削除済み → 月末版 430 に差し替え。
      { ym: "R8.4 (2026-04)", file: "430mokugeki.pdf" },
      { ym: "R8.5 (2026-05)", file: "531kuma.pdf" },
      // 630mokugeki2.pdf (暫定版) は県が削除 → 630mokugeki3.pdf に差し替え (2026-08-30 確認)。
      { ym: "R8.6 (2026-06)", file: "630mokugeki3.pdf" },
      { ym: "R8.7 (2026-07)", file: "731mokugeki4.pdf" },
      // 820mokugeki.pdf も同様に削除 → 827mokugeki.pdf (2026-08-30 確認)。
      { ym: "R8.8 (2026-08)", file: "827mokugeki.pdf" },
    ].map(({ ym, file }) => ({
      // ID は年月から作る。ファイル名から作ると、県がファイルを差し替える
      // たびに ID が総入れ替えになり、全レコードの id も変わってしまう
      // (2026-08 に 630mokugeki2→3 / 820→827 で実際に発生)。
      // 月は変わらないので、これで ID が安定する。
      id: `nagano-pdf-${(/\((\d{4}-\d{2})\)/.exec(ym)?.[1] ?? ym).replace(/[^\d-]/g, "")}`,
      kind: "prefecture" as SourceKind,
      prefCode: "20",
      regionLabel: `長野県 ツキノワグマ目撃情報 ${ym}`,
      bearStatus: "present" as BearStatus,
      urls: [
        {
          url: `https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/documents/${file}`,
          role: "pdf" as UrlRole,
          hint: `長野県 ${ym} 月別目撃情報一覧 PDF`,
        },
      ],
      extractor: "nagano-pdf-table" as ExtractorType,
      // 月別アーカイブ。その月が終われば更新されないのが正常。
      periodBounded: true,
      notes: `長野県公式の月別目撃情報 PDF。表形式 (No / 月日 / 市町村 / 区分 / 目撃痕跡別 / 大きさ / 頭数 / 状況) を正規表現で抽出`,
      verifiedAt: "2026-04-26",
    }))
  ),
  {
    id: "nagano-karuizawa",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 軽井沢町 軽井沢さるクマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.thread.ne.jp/kta2/sarukuma.html", role: "map", hint: "軽井沢町・観光協会協同のクマ／サル目撃マップ（過去4週間）" },
      { url: "https://karuizawa-kankokyokai.jp/information/88027/", role: "list", hint: "軽井沢観光協会 クマ情報案内" },
    ],
    extractor: "llm-html",
    notes: "thread.ne.jp/kta2 上で動作する独自 SPA。データ API は非公開のため LLM-HTML 抽出か手動取り込み想定。長野県内市町村で独自に位置データを公開している数少ない例",
    requiresResearch: true,
    defaultCity: "軽井沢町",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-matsumoto",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 松本市 クマ目撃情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.matsumoto.nagano.jp/soshiki/216/180997.html", role: "list", hint: "松本市 クマの目撃情報" },
      { url: "https://www.city.matsumoto.nagano.jp/soshiki/74/3168.html", role: "list", hint: "松本市 ツキノワグマによる人身被害防止" },
      { url: "https://x.com/Matsumoto_city", role: "rss", hint: "松本市公式 X — 出没速報あり" },
    ],
    extractor: "llm-html",
    notes: "松本市は HTML テーブルで日時・地区を公開。座標は無いので地名→ジオコード前提",
    requiresResearch: true,
    defaultCity: "松本市",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-saku",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 佐久市 ツキノワグマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.saku.nagano.jp/kankyo_shizen/dobutsu_pet/yaseidoubutu/syutsubotsu.html", role: "list", hint: "佐久市 出没情報" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    defaultCity: "佐久市",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-chino",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 茅野市 クマ出没注意",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.chino.lg.jp/soshiki/nourin/kumamokugeki.html", role: "list", hint: "茅野市 農林課 クマ目撃情報" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    defaultCity: "茅野市",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-fujimi",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 富士見町 クマの目撃情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.fujimi.lg.jp/page/kuma.html", role: "list", hint: "富士見町 クマの目撃情報" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    defaultCity: "富士見町",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-miyota",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 御代田町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.miyota.nagano.jp/category/tyoujuutaisaku/161067.html", role: "list", hint: "御代田町 クマ出没情報" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    defaultCity: "御代田町",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-ogawa",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 小川村 ツキノワグマ出没（目撃）マップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.vill.ogawa.nagano.jp/docs/45429.html", role: "map", hint: "小川村 出没（目撃）マップ" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    defaultCity: "小川村",
    verifiedAt: "2026-04-26",
  },
  {
    id: "nagano-nagano",
    kind: "municipal",
    prefCode: "20",
    regionLabel: "長野県 長野市 野生獣（クマなど）の出没",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nagano.nagano.jp/n162000/contents/p001080.html", role: "list", hint: "長野市 野生獣の出没情報" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    defaultCity: "長野市",
    verifiedAt: "2026-04-26",
  },
  // 長野県 主要市町村 — 個別出没情報を公開しているページ (Plan B 追加分)
  // 注: 大町市は kuma_tyuui.html から月別 PDF へリンクしていたが、毎月 URL が変わり
  // 1ヶ月程度で 404 化するため、自動取り込みは断念。県の月別 PDF (nagano-pdf-*) で代替。
  ...(
    [
      { id: "ueda", city: "上田市", url: "https://www.city.ueda.nagano.jp/soshiki/sinrin/67323.html", hint: "上田市 クマ目撃情報" },
      { id: "omachi", city: "大町市", url: "https://www.city.omachi.nagano.jp/00005000/00005200/kuma_tyuui.html", hint: "大町市 ツキノワグマによる人身被害防止" },
      { id: "shiojiri", city: "塩尻市", url: "https://www.city.shiojiri.lg.jp/soshiki/5/42952.html", hint: "塩尻市 熊の目撃情報" },
      { id: "ina", city: "伊那市", url: "https://www.inacity.jp/sangyo_noringyo/noringyo/yugaichoju/index.html", hint: "伊那市 有害鳥獣（クマ・サル・シカ等）" },
      { id: "komagane", city: "駒ヶ根市", url: "https://www.city.komagane.nagano.jp/soshikiichiran/norinka/kochirimmugakari/1/1/1626.html", hint: "駒ヶ根市 クマの出没にご注意ください" },
      { id: "komoro", city: "小諸市", url: "https://www.city.komoro.lg.jp/soshikikarasagasu/sangyoushinkoubu/norinka/2/1/1/15090.html", hint: "小諸市 クマの出没・目撃情報" },
      { id: "iiyama", city: "飯山市", url: "https://www.city.iiyama.nagano.jp/soshiki/shinrin-nouchi/chojutaisaku/57822/kuma", hint: "飯山市 クマの出没にご注意ください" },
      { id: "iida", city: "飯田市", url: "https://www.city.iida.lg.jp/soshiki/23/kumasyutsubotsu.html", hint: "飯田市 クマの出没にご注意ください" },
      { id: "suzaka", city: "須坂市", url: "https://www.city.suzaka.nagano.jp/soshiki/5010/4/5396.html", hint: "須坂市 2025年度ツキノワグマの目撃情報" },
      { id: "nakano", city: "中野市", url: "https://www.city.nakano.nagano.jp/docs/2021070700049/", hint: "中野市 ツキノワグマに要注意（熊出没マップ）" },
      { id: "yamanouchi", city: "山ノ内町", url: "https://www.town.yamanouchi.nagano.jp/soshiki/kochirinmu/gyomu/nogyo_ringyo_suisan/yasechoju/704.html", hint: "山ノ内町 ツキノワグマによる被害を防ぐ" },
      { id: "sakaki", city: "坂城町", url: "https://www.town.sakaki.nagano.jp/www/contents/1749529882626/index.html", hint: "坂城町 イノシシ・クマの出没マップ" },
    ].map(({ id, city, url, hint }) => ({
      id: `nagano-${id}`,
      kind: "municipal" as SourceKind,
      prefCode: "20",
      regionLabel: `長野県 ${city} クマ出没情報`,
      bearStatus: "present" as BearStatus,
      urls: [{ url, role: "list" as UrlRole, hint }],
      extractor: "llm-html" as ExtractorType,
      requiresResearch: true,
      defaultCity: city,
      verifiedAt: "2026-04-26",
    }))
  ),
  {
    id: "gifu",
    kind: "prefecture",
    prefCode: "21",
    regionLabel: "岐阜県 ツキノワグマ情報マップ（CKAN オープンデータ）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.gifu.lg.jp/page/4964.html", role: "list", hint: "県公式 ツキノワグマについて" },
      { url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/c11265-010", role: "csv", hint: "岐阜県オープンデータ（年度別 Shapefile/CSV）" },
      { url: "https://gis-gifu.jp/gifu/Portal", role: "gis", hint: "県域統合型 GIS（legacy SSL で API 化不能）" },
    ],
    extractor: "direct-shapefile-zip",
    notes: "CKAN で R2(2020)〜R7(2025)の年度別 Shapefile ZIP を公開。JGD2011 平面直角 7 系→WGS84 変換後マージ。2019 以前は別 CSV。※ データセット名が「クママップ（過去）」になり最新は 2025-10 で停止。現行は gifu-gis を参照",
    verifiedAt: "2026-04-20",
  },
  {
    // 県域統合型GIS の「クママップ」。CKAN 側が「（過去）」になり 2025-10 で
    // 止まったため、現行データはこちらから取る。緯度経度が直接入っており、
    // 字レベルの地名・時間帯・出没場所の種別・頭数まで揃う。
    //
    // 年度ごとに 1 レイヤ。新年度 (R9 等) が増えたらここに追記する。
    // レイヤ ID は Init_Extract の応答で確認できる。
    id: "gifu-gis",
    kind: "prefecture",
    prefCode: "21",
    regionLabel: "岐阜県 クママップ（県域統合型GIS）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.gifu.lg.jp/page/4964.html", role: "list", hint: "県公式 ツキノワグマについて" },
      { url: "https://gis-gifu.jp/gifu/Map?mid=10538", role: "gis", hint: "クママップ (利用許諾の同意が必要・古い TLS)" },
    ],
    extractor: "gifu-gis",
    gifuGisLayers: [
      { name: "R8クマ目撃", layerId: 1053898200, fieldSetId: 98200 },
      { name: "R7クマ目撃", layerId: 1053898100, fieldSetId: 98100 },
      { name: "R6クマ目撃", layerId: 1053898000, fieldSetId: 98000 },
    ],
    notes: "利用許諾に同意してセッションを得たうえで Attribute/GetLayerAttr から取得。サーバの TLS が古く SECLEVEL を下げた接続が要る。R8 は 533 件 (2026-08 時点)",
    verifiedAt: "2026-08-24",
  },
  {
    id: "shizuoka-gmap",
    kind: "prefecture",
    prefCode: "22",
    regionLabel: "静岡県 ツキノワグマ目撃情報（R8 公式 Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.google.com/maps/d/viewer?mid=1o_iXJ5z-tA9bTd8k2DMFPLO9BS4LRDI", role: "map", hint: "令和8年度静岡県ツキノワグマ目撃情報" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1o_iXJ5z-tA9bTd8k2DMFPLO9BS4LRDI&forcekml=1",
      nameFormat: "extended-data",
      dateField: "日付",
      dateFormat: "ja-slash",
      cityField: "市町",
      sectionField: "地名",
      commentField: "備考",
      headCountField: "目撃頭数",
    },
    notes: "令和8年度 (2026-04〜) 5 件 (2026-04-21 時点)。富士宮市・静岡市葵区等が中心",
    verifiedAt: "2026-04-21",
  },
  {
    // R7 (令和7年度) 200 件。R8 (1o_iX...) と並行で過年度の蓄積を取り込む。
    // ExtendedData が同じスキーマ (市町・地名・日付・目撃頭数) なので設定共有可能。
    id: "shizuoka-r7-gmap",
    kind: "prefecture",
    prefCode: "22",
    regionLabel: "静岡県 R7 ツキノワグマ目撃情報（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.google.com/maps/d/viewer?mid=1hwFI-xmiB1uYeEpfNetfP15CS9uxo08", role: "map", hint: "令和7年度静岡県ツキノワグマ目撃情報" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1hwFI-xmiB1uYeEpfNetfP15CS9uxo08&forcekml=1",
      nameFormat: "extended-data",
      dateField: "日付",
      dateFormat: "ja-slash",
      cityField: "市町",
      sectionField: "地名",
      commentField: "備考",
      headCountField: "目撃頭数",
    },
    notes: "R7 (2025) 年度版 200 件 (2026-05 時点)。R8 マップ (1o_iX...) を補完",
    verifiedAt: "2026-05-07",
  },
  {
    id: "shizuoka",
    kind: "prefecture",
    prefCode: "22",
    regionLabel: "静岡県 ツキノワグマ出没情報トップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shizuoka.jp/kurashikankyo/shizenkankyo/wild/1017680.html", role: "list", hint: "県自然保護課 ツキノワグマトップ" },
    ],
    extractor: "llm-html",
    notes: "県自然保護課が年度毎に地図＋通し番号リスト PDF を公開。R7 200件、R6 156件、R5 以降急増中。座標は PDF 上の地図のみで点データ API 未公開。R8 版は shizuoka-gmap、PDF データは shizuoka-pdf-* で別途取得",
    verifiedAt: "2026-04-26",
  },
  // 静岡県 年度別 PDF (R5/R6/R7) — 表形式 (No / 目撃日 / 市町 / 地名等 / 備考)
  ...(
    [
      { fy: "R7 (2025)", file: "r7kumamap.pdf", hint: "令和7年度 (200件)" },
      { fy: "R6 (2024)", file: "r6kuma.pdf", hint: "令和6年度 (156件)" },
      { fy: "R5 (2023)", file: "05kumasyutubotu.pdf", hint: "令和5年度" },
    ].map(({ fy, file, hint }) => ({
      id: `shizuoka-pdf-${file.replace(/\.pdf$/, "")}`,
      kind: "prefecture" as SourceKind,
      prefCode: "22",
      regionLabel: `静岡県 ${fy} ツキノワグマ目撃情報`,
      bearStatus: "present" as BearStatus,
      urls: [
        {
          url: `https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/017/680/${file}`,
          role: "pdf" as UrlRole,
          hint,
        },
      ],
      extractor: "llm-pdf" as ExtractorType,
      // 年度別アーカイブ。
      periodBounded: true,
      notes: "静岡県公式 PDF。表形式 (目撃日 / 市町 / 地名等 / 備考)",
      verifiedAt: "2026-04-26",
    }))
  ),
  {
    id: "aichi",
    kind: "prefecture",
    prefCode: "23",
    regionLabel: "愛知県 ツキノワグマ情報",
    bearStatus: "present",
    urls: [
      // 注意: 県は更新のたびに attachment 番号を振り直す。シーズン中は月1回
      // 上の list ページで番号を確認して差し替えること。
      { url: "https://www.pref.aichi.jp/uploaded/attachment/626110.pdf", role: "pdf", hint: "ツキノワグマ出没情報（令和8年度）" },
      { url: "https://www.pref.aichi.jp/soshiki/shizen/tsukinowaguma.html", role: "list", hint: "県公式 ツキノワグマトップ" },
      { url: "https://www.pref.aichi.jp/press-release/tsukinowaguma2025.html", role: "list", hint: "2025年度 出没予測プレスリリース" },
    ],
    extractor: "aichi-pdf-table",
    notes: "三河山間部に生息（レッドリストあいち2025: 絶滅危惧IA類）。県は年度ごとに出没予測と確認情報を PDF で公開",
    verifiedAt: "2026-04-26",
  },
  {
    id: "mie",
    kind: "prefecture",
    prefCode: "24",
    regionLabel: "三重県 ツキノワグマ出没情報（ArcGIS）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.mie.lg.jp/JTAISAKU/HP/m0114900048.htm", role: "list", hint: "三重県の公式ページ" },
      { url: "https://www.pref.mie.lg.jp/MIDORI/HP/m0118500310.htm", role: "list", hint: "三重県クマ出没情報アプリ案内" },
      { url: "https://map-pref-mie.maps.arcgis.com/apps/webappviewer/index.html?id=67a611717c1a4cc487540b2be4264c45", role: "arcgis", hint: "三重県 Click Maps (ArcGIS WebAppViewer)" },
    ],
    extractor: "arcgis-dashboard",
    arcgis: {
      featureServerUrl:
        "https://services5.arcgis.com/tkvkIlp1M2KOKx34/arcgis/rest/services/%EF%BC%88R6%E7%A2%BA%E5%AE%9A%E7%89%88%EF%BC%89%E3%82%AF%E3%83%9E%E7%9B%AE%E6%92%83%E4%BD%8D%E7%BD%AE%E6%83%85%E5%A0%B1%EF%BC%88%E6%8F%90%E4%BE%9B%E7%94%A8%EF%BC%89/FeatureServer/0",
      dateFormat: "wareki",
      mappings: {
        date: "目撃日",
        section: "場所",
        situation: "発見形態",
      },
    },
    notes: "R6確定版クマ目撃位置情報（提供用）FeatureServer、99 件。日付は R7.4.15 形式 (和暦)",
    verifiedAt: "2026-04-20",
  },
  {
    id: "shiga",
    kind: "prefecture",
    prefCode: "25",
    regionLabel: "滋賀県 大津市ツキノワグマ出没マップ（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shiga.lg.jp/ippan/kankyoshizen/yasei/kuma.html", role: "list", hint: "県公式" },
      { url: "https://www.city.otsu.lg.jp/soshiki/025/1605/g/t/1390705956292.html", role: "list", hint: "大津市公式" },
      { url: "https://www.google.com/maps/d/viewer?mid=1rE5HcSdJnm2gX3iT1FMt0aCVuQ9ArDs", role: "map", hint: "大津市 令和5-8年度 4 フォルダ統合マップ" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1rE5HcSdJnm2gX3iT1FMt0aCVuQ9ArDs&forcekml=1",
      nameFormat: "date-paren-location",
      fiscalYear: 2025, // default fallback; folder 別 fiscalYear が優先されるが全 folder が検出できなかった placemark 用
    },
    notes: "大津市単独のマップ 109 件。4 folder (R5〜R8) に分かれており folder 名から fiscalYear 自動判定。県全域ではなく、県公式のマップは PDF のみ",
    verifiedAt: "2026-04-21",
  },
  {
    id: "kyoto",
    kind: "prefecture",
    prefCode: "26",
    regionLabel: "京都府 クマ目撃情報（BODIK CKAN オープンデータ）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.kyoto.jp/choujyu/kumanitsuite.html", role: "list", hint: "京都府公式 ツキノワグマ情報" },
      { url: "https://data.bodik.jp/dataset/260002_bear", role: "csv", hint: "BODIK CKAN 京都府クマ目撃情報" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: "https://data.bodik.jp/dataset/e40b887d-0212-4ad5-8cf8-4ae3a2b5f4dd/resource/5eb145e6-5b3f-489d-a991-3d2da42c109b/download/260002bearfy.csv",
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "目撃年月日",
        lat: "緯度",
        lon: "経度",
        city: "市町村名",
        section: "観察場所",
        situation: "目撃時の状況",
        headCount: "成獣(匹)",
      },
    },
    notes: "平成21年度(2009)〜最新の年度別全件 CSV 約 10,297 件。BODIK CKAN 経由、CC BY 4.0",
    verifiedAt: "2026-04-21",
  },
  {
    id: "osaka",
    kind: "prefecture",
    prefCode: "27",
    regionLabel: "大阪府 市街地周辺における野生動物の出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.osaka.lg.jp/o120140/doubutu/yaseidoubutu/tsukinowa.html", role: "list", hint: "府公式 ツキノワグマの出没に注意" },
      { url: "https://www.pref.osaka.lg.jp/o120140/doubutu/yaseidoubutu/shutsubotsu_r7.html", role: "list", hint: "令和7年度 出没情報（表形式）" },
      { url: "https://www.pref.osaka.lg.jp/o120140/doubutu/yaseidoubutu/shutsubotsu_r6.html", role: "list", hint: "令和6年度 出没情報" },
      { url: "https://www.pref.osaka.lg.jp/documents/20355/honpen.pdf", role: "pdf", hint: "大阪府ツキノワグマ出没対応方針（R6.11 改定）" },
    ],
    extractor: "llm-html",
    notes: "府内に恒常的な生息地なし、隣接府県からの流入個体。能勢町・豊能町の北摂地域中心。R7 (2025) 25件、R6 (2024) 約19件",
    verifiedAt: "2026-04-21",
  },
  {
    id: "hyogo",
    kind: "prefecture",
    prefCode: "28",
    regionLabel: "兵庫県 森林動物研究センター（クマ出没痕跡）",
    bearStatus: "present",
    urls: [
      { url: "https://www.wmi-hyogo.jp/index.php/bear-presence-signs", role: "map", hint: "10km 半径集約の色分け出没マップ（2000 年〜）" },
      { url: "https://www.wmi-hyogo.jp/index.php/database_search", role: "map", hint: "兵庫県森林動物研究センター データベース検索" },
      { url: "https://web.pref.hyogo.lg.jp/nk20/r7hokyochosa.html", role: "list", hint: "ドングリ類 豊凶調査結果（堅果類凶作補正に活用可）" },
    ],
    extractor: "llm-html",
    notes: "県研究機関ベースでデータ精度高。ドングリ豊凶データも同機関から入手可",
    verifiedAt: "2026-04-20",
  },

  // --- 兵庫県の市町村ページ (2026-09-02 追加) ---
  //
  // 兵庫県は県として個別の出没記録を公開していない (森林動物研究センターの
  // 10km 集約マップと市町別の年次集計のみ)。県を叩いても件数は増えないが、
  // 市町村は個別の目撃情報を出している。
  //
  // muni-official-links.ts の bearUrl 26 件を scripts/survey-muni-bear-pages.ts で
  // 下見し、実際に個別記録が取れた 7 ページだけを登録した。残り 11 ページは
  // 注意喚起のみで記録が無い。登録すると毎回無駄な LLM 呼び出しと健全性
  // チェックのノイズになるので入れない。季節で載り始めるので survey を
  // 再実行して拾い直す。
  {
    id: "hyogo-tatsuno",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 たつの市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.tatsuno.lg.jp/soshiki/1020/gyomu/2/3801.html", role: "list", hint: "たつの市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "たつの市",
    notes: "市の目撃情報一覧。下見時 20 件 (最新 2025-10-26)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hyogo-inagawa",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 猪名川町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.inagawa.lg.jp/soshiki/1042/gyomu/14/1/1836.html", role: "list", hint: "猪名川町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "猪名川町",
    notes: "町の目撃情報一覧。下見時 6 件 (最新 2026-07-31)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hyogo-takarazuka",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 宝塚市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.takarazuka.hyogo.jp/kanko/1009480/1017049/1021453.html", role: "list", hint: "宝塚市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "宝塚市",
    notes: "市の目撃情報一覧。近隣市 (神戸市北区等) の事案も併記されるので cityName は本文優先。下見時 6 件",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hyogo-kawanishi",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 川西市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kawanishi.hyogo.jp/business/nouringyo/1004140/1004141.html", role: "list", hint: "川西市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "川西市",
    notes: "市の目撃・痕跡情報一覧。下見時 6 件 (最新 2025-09-28)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hyogo-kobe",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 神戸市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kobe.lg.jp/a99375/tukinowaguma.html", role: "list", hint: "神戸市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "神戸市",
    notes: "市の一覧。9 区が同じページを共有するため市単位で 1 ソースにする (区ごとに登録すると 9 重取り込みになる)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hyogo-miki",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 三木市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.miki.lg.jp/soshiki/34/49226.html", role: "list", hint: "三木市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "三木市",
    notes: "市の目撃情報。下見時 1 件 (最新 2026-08-25)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hyogo-shinonsen",
    kind: "municipal",
    prefCode: "28",
    regionLabel: "兵庫県 新温泉町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.shinonsen.hyogo.jp/page/?mode=detail&page_id=44141a9a8a134f1d2dbeffd988d9bcac", role: "list", hint: "新温泉町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "新温泉町",
    notes: "町の人身被害・目撃情報。下見時 1 件",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara",
    kind: "prefecture",
    prefCode: "29",
    regionLabel: "奈良県 奈良市・木津川市・山添村クマ目撃マップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nara.jp/dd.aspx?menuid=12237", role: "list", hint: "奈良県公式" },
      { url: "https://www.google.com/maps/d/viewer?mid=1ij-CG5R6Kc1fFnd_eFvI3gbeWOQvvFs", role: "map", hint: "奈良市・木津川市・山添村クマ目撃マップ" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1ij-CG5R6Kc1fFnd_eFvI3gbeWOQvvFs&forcekml=1",
      nameFormat: "section-in-name",
    },
    notes: "Google My Map 110 件。県全域ではなく奈良市・木津川市・山添村限定。name=地名、description=日付+時刻",
    verifiedAt: "2026-04-20",
  },
  {
    // 県全域の目撃情報一覧 (大字まで記載)。上の nara (Google My Map) は
    // 奈良市・木津川市・山添村の 3 市村限定なので、こちらを別ソースとして持つ。
    //
    // 注意: ドメインが 2 つあり、.jp 側は 403 で拒否される。.lg.jp を使うこと。
    //   × https://www.pref.nara.jp/documents/22870/...     → 403
    //   ○ https://www.pref.nara.lg.jp/documents/22870/...  → 200
    // 旧登録 (pref.nara.jp/dd.aspx) が 403 になり、奈良県は 2026-03-28 以降
    // 止まっていた。県はファイル名を更新日時にするので、シーズン中は月1回
    // 下記 list ページで確認して差し替えること。
    id: "nara-pdf",
    kind: "prefecture",
    prefCode: "29",
    regionLabel: "奈良県 ツキノワグマ目撃情報一覧 (県全域)",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nara.lg.jp/n118/p043003.html", role: "list", hint: "県 ツキノワグマ出没情報" },
      { url: "https://www.pref.nara.lg.jp/documents/22870/20260901133554.pdf", role: "pdf", hint: "令和8年度 目撃情報一覧 (R8.9.1 現在)" },
      { url: "https://www.pref.nara.lg.jp/documents/22870/20260710180023.pdf", role: "pdf", hint: "令和7年度 目撃情報一覧 (155件)" },
    ],
    extractor: "nara-pdf-table",
    notes: "表形式 (No / 日時 / 市町村 / 大字)。日付は和暦。「大台ヶ原」は市町村ではなく県も別枠集計なので取り込めない",
    verifiedAt: "2026-09-01",
  },
  {
    id: "wakayama",
    kind: "prefecture",
    prefCode: "30",
    regionLabel: "和歌山県 ツキノワグマ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.wakayama.lg.jp/prefg/032600/yasei/kuma.html", role: "list", hint: "県公式 ツキノワグマ" },
      { url: "https://www.pref.wakayama.lg.jp/prefg/032600/kanri_d/fil/honbun.pdf", role: "pdf", hint: "和歌山県第二種特定鳥獣（ツキノワグマ）管理計画 R7.10〜R9.3" },
    ],
    extractor: "llm-html",
    notes: "紀伊半島中部個体群（三重・奈良共通）。R6 推定 467 頭で 400 頭の管理閾値を超過",
    verifiedAt: "2026-04-26",
  },
  {
    id: "tottori",
    kind: "prefecture",
    prefCode: "31",
    regionLabel: "鳥取県 ツキノワグマ出没情報トップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.tottori.lg.jp/item/1143816.htm", role: "list", hint: "県公式 クマ出没情報トップ" },
      { url: "https://dashboard.cv-dip.tottori.jp/root/asset?id=4&map=true", role: "map", hint: "出没位置図 (Web ダッシュボード、PC 表示)" },
    ],
    extractor: "llm-html",
    notes: "西中国地域個体群、絶滅危惧。R6 272 件、R7 95 件。地域 3 区分（東部・中部・西部）で集計。点データ PDF は tottori-pdf-* で別途取得",
    verifiedAt: "2026-04-26",
  },
  {
    id: "tottori-pdf-r7",
    kind: "prefecture",
    prefCode: "31",
    regionLabel: "鳥取県 R7 (2025) クマ目撃・痕跡情報一覧",
    bearStatus: "present",
    urls: [
      {
        url: "https://www.pref.tottori.lg.jp/secure/1143816/R8.3.31kuma.pdf",
        role: "pdf",
        hint: "令和7年度 クマ目撃・痕跡情報一覧 (76件、R8.3.31 時点)",
      },
    ],
    extractor: "llm-pdf",
    notes: "鳥取県公式 PDF。表形式 (日付/時間/地域/地名/区分/要因/出没地/状況)。和暦 (R7.4.19, R8.3.3 等) → 西暦変換が必要",
    verifiedAt: "2026-04-26",
  },
  {
    id: "shimane",
    kind: "prefecture",
    prefCode: "32",
    regionLabel: "島根県 山陰中央新報クマ目撃マップ（島根県・鳥取県）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shimane.lg.jp/nature/yasei/kuma.html", role: "list", hint: "県公式" },
      { url: "https://www.google.com/maps/d/viewer?mid=1g5S_PUzzPjzY5UFp8IBBamT0vOhOGvg", role: "map", hint: "山陰中央新報 島根県・鳥取県クマ目撃マップ" },
      { url: "https://www.sanin-chuo.co.jp/articles/-/587216", role: "list", hint: "山陰中央新報の元記事" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1g5S_PUzzPjzY5UFp8IBBamT0vOhOGvg&forcekml=1",
      nameFormat: "section-in-name",
      coordPrefectureSplit: {
        axis: "lon",
        threshold: 133.3,
        lowerPrefName: "島根県",
        upperPrefName: "鳥取県",
      },
    },
    notes: "山陰中央新報（報道機関）作成。499 件。鳥取県の一部も含むため経度 133.3 で県を切替。県公式は PDF のみ",
    verifiedAt: "2026-04-20",
  },
  {
    id: "okayama",
    kind: "prefecture",
    prefCode: "33",
    regionLabel: "岡山県 ツキノワグマ出没情報（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.okayama.jp/page/1006862.html", role: "list", hint: "県自然環境課" },
      { url: "https://www.google.com/maps/d/viewer?mid=1y64vgpv0Yc6srgFeVC5ZkJf37kNuuKI", role: "map", hint: "令和7年度 公式 Google My Map" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=1y64vgpv0Yc6srgFeVC5ZkJf37kNuuKI&forcekml=1",
      nameFormat: "date-only",
      dateFormat: "us-slash",
      cityField: "市町村",
      sectionField: "大字",
    },
    notes: "R7年度 49 件。name=M/D/YYYY、ExtendedData に市町村・大字",
    verifiedAt: "2026-04-21",
  },
  {
    id: "hiroshima",
    kind: "prefecture",
    prefCode: "34",
    regionLabel: "広島県 ツキノワグマ（野生鳥獣保護管理ポータル）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.hiroshima.lg.jp/site/wildlife-management/wm-bear-main.html", role: "list", hint: "県 野生鳥獣保護管理ポータル ツキノワグマトップ" },
      { url: "https://www.pref.hiroshima.lg.jp/site/wildlife-management/wm-bear02-attention.html", role: "list", hint: "活動期注意喚起" },
      { url: "https://www.pref.hiroshima.lg.jp/uploaded/attachment/599189.pdf", role: "pdf", hint: "令和6年度 ツキノワグマ出没状況" },
    ],
    extractor: "llm-html",
    notes: "西中国地域個体群（島根・山口と共通）、絶滅危惧。R6 (2024) 4-10月 639 件",
    verifiedAt: "2026-04-26",
  },
  {
    id: "yamaguchi",
    kind: "prefecture",
    prefCode: "35",
    regionLabel: "山口県 ツキノワグマ（自然保護課 Excel + YPくまっぷ）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamaguchi.lg.jp/soshiki/41/20698.html", role: "list", hint: "自然保護課 ツキノワグマ被害防止ページ" },
      { url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/208249.xlsx", role: "excel", hint: "過去からの月別クマ目撃情報 (H9-R6)" },
      { url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/208250.xlsx", role: "excel", hint: "令和6年度 市町別・月別クマ目撃情報" },
      // 注意: 県は更新のたびに attachment 番号を振り直し、旧ファイルを消す。
      // 登録していた 238451/238452 は 404 になり、山口県は 1 件も取れていなかった。
      // シーズン中は月1回、下記 list ページで番号を確認して差し替えること。
      { url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/248466.pdf", role: "pdf", hint: "令和8年度 目撃情報詳細 (R8.8.21 現在・242件)" },
      { url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/239822.pdf", role: "pdf", hint: "令和7年度 目撃情報詳細 (405件)" },
      { url: "https://www.pref.yamaguchi.lg.jp/site/police/212182.html", role: "map", hint: "YPくまっぷ（山口県警察、R7 地点マップ）" },
    ],
    extractor: "yamaguchi-pdf-table",
    notes: "西中国地域個体群、絶滅危惧。R6 799 件（岩国・周南中心）、R7 確定 PDF 未公表（県警 YPくまっぷで点データ公開）。Excel は市町別×月別×目撃/捕獲の集計表形式",
    verifiedAt: "2026-04-21",
  },
  {
    id: "tokushima",
    kind: "prefecture",
    prefCode: "36",
    regionLabel: "徳島県 ツキノワグマ（四国個体群、目撃情報あり）",
    bearStatus: "rare",
    urls: [
      { url: "https://www.pref.tokushima.lg.jp/ippannokata/kurashi/shizen/7241461/", role: "list", hint: "県公式 【目撃情報あり】ツキノワグマについて" },
      { url: "https://www.pref.tokushima.lg.jp/file/attachment/1015220.pdf", role: "pdf", hint: "令和7年度改正 徳島県ツキノワグマ対応指針" },
    ],
    extractor: "llm-html",
    notes: "四国個体群（剣山系中心、推定 20 数頭、絶滅危惧）。年計 R3:1→R4:2→R5:2→R6:7→R7:7 と微増傾向。主な出没は美馬市・那賀町・三好市。捕獲時は学習放獣対応",
    verifiedAt: "2026-04-21",
  },
  {
    id: "kagawa",
    kind: "prefecture",
    prefCode: "37",
    regionLabel: "香川県（クマ生息なし）",
    bearStatus: "absent",
    urls: [],
    extractor: "llm-html",
    notes: "香川県にクマは生息しない",
    verifiedAt: "2026-04-20",
  },
  {
    id: "ehime",
    kind: "prefecture",
    prefCode: "38",
    regionLabel: "愛媛県（クマ絶滅）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "愛媛県のクマは絶滅とされる",
    verifiedAt: "2026-04-20",
  },
  {
    id: "kochi",
    kind: "prefecture",
    prefCode: "39",
    regionLabel: "高知県（四国のツキノワグマ・絶滅危惧）",
    bearStatus: "rare",
    urls: [],
    extractor: "llm-html",
    notes: "四国のクマは推定 20 頭程度、絶滅危惧",
    verifiedAt: "2026-04-20",
  },
  {
    id: "fukuoka",
    kind: "prefecture",
    prefCode: "40",
    regionLabel: "福岡県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "saga",
    kind: "prefecture",
    prefCode: "41",
    regionLabel: "佐賀県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "nagasaki",
    kind: "prefecture",
    prefCode: "42",
    regionLabel: "長崎県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "kumamoto",
    kind: "prefecture",
    prefCode: "43",
    regionLabel: "熊本県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "oita",
    kind: "prefecture",
    prefCode: "44",
    regionLabel: "大分県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "miyazaki",
    kind: "prefecture",
    prefCode: "45",
    regionLabel: "宮崎県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "kagoshima",
    kind: "prefecture",
    prefCode: "46",
    regionLabel: "鹿児島県（九州・絶滅宣言 2012）",
    bearStatus: "extinct",
    urls: [],
    extractor: "llm-html",
    notes: "環境省 2012 年にツキノワグマ九州個体群を絶滅宣言",
    verifiedAt: "2026-04-20",
  },
  {
    id: "okinawa",
    kind: "prefecture",
    prefCode: "47",
    regionLabel: "沖縄県（クマ元々不在）",
    bearStatus: "absent",
    urls: [],
    extractor: "llm-html",
    notes: "沖縄県にクマは元々生息しない",
    verifiedAt: "2026-04-20",
  },

  // ================= 市町村ページ (2026-09-02 追加) =================
  //
  // 県が個別の出没記録を公開していない県では、市町村が代わりに出している。
  // muni-official-links.ts の bearUrl を scripts/survey-muni-bear-pages.ts で
  // 下見し、実際に個別記録が取れたページだけを登録した。注意喚起しか無い
  // ページは登録しない (毎回無駄な LLM 呼び出しと健全性チェックのノイズになる)。
  // 季節で載り始めるので survey を再実行して拾い直すこと。
  //
  // 下見の結果 (当たり/調査ページ): 京都 10/20・奈良 9/15・和歌山 8/12・
  // 三重 5/14・滋賀 5/12・広島 3/7・岡山 1/16・鳥取 0/13

  // --- 京都府 (10 市町村) — 京都府は BODIK が 2018 年で更新停止し、府として個別記録を出していない ---
  {
    id: "kyoto-ide",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 井手町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.ide.kyoto.jp/soshiki/sangyoukankyou/sangyoukuma/index.html", role: "list", hint: "井手町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "井手町",
    notes: "下見時 45 件 (最新 2026-08-27)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-kasagi",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 笠置町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kasagi.lg.jp/contents_detail.php?co=new&frmId=1877", role: "list", hint: "笠置町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "笠置町",
    notes: "下見時 43 件 (最新 2025-11-02)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-kyotanabe",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 京田辺市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kyotanabe.lg.jp/0000022493.html", role: "list", hint: "京田辺市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "京田辺市",
    notes: "下見時 19 件 (最新 2026-08-12)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-kameoka",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 亀岡市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kameoka.kyoto.jp/soshiki/30/3643.html", role: "list", hint: "亀岡市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "亀岡市",
    notes: "下見時 15 件 (最新 2026-08-18)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-seika",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 精華町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.seika.kyoto.jp/kakuka/sangyo/4/1_2/29223.html", role: "list", hint: "精華町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "精華町",
    notes: "下見時 6 件 (最新 2026-05-22)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-joyo",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 城陽市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.joyo.kyoto.jp/0000011424.html", role: "list", hint: "城陽市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "城陽市",
    notes: "下見時 5 件 (最新 2025-11-19)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-yosano",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 与謝野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.yosano.lg.jp/life/pets/harmful-beast/kuma2021/", role: "list", hint: "与謝野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "与謝野町",
    notes: "下見時 2 件 (最新 2026-08-31)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-kizugawa",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 木津川市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kizugawa.lg.jp/index.cfm/9,68147,43,318,html", role: "list", hint: "木津川市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "木津川市",
    notes: "下見時 1 件 (最新 2026-08-27)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-kumiyama",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 久御山町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kumiyama.lg.jp/0000006233.html", role: "list", hint: "久御山町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "久御山町",
    notes: "下見時 1 件 (最新 2025-10-24)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "kyoto-wazuka",
    kind: "municipal",
    prefCode: "26",
    regionLabel: "京都府 和束町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.wazuka.lg.jp/kakukanogoannai/kennou/oshirase/4387.html", role: "list", hint: "和束町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "和束町",
    notes: "下見時 1 件 (最新 2025-07-17)",
    verifiedAt: "2026-09-02",
  },

  // --- 奈良県 (9 市町村) — 県の年度別 PDF (nara-pdf) を市町村ページで補う ---
  {
    id: "nara-tenri",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 天理市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.tenri.nara.jp/kakuka/kankyoukeizaibu/nourinka/14773.html", role: "list", hint: "天理市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "天理市",
    notes: "下見時 8 件 (最新 2026-07-12)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-yoshino",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 吉野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.yoshino.nara.jp/soshiki/norinshinko/yuugai/1839.html", role: "list", hint: "吉野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "吉野町",
    notes: "下見時 6 件 (最新 2026-07-19)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-uda",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 宇陀市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.uda.lg.jp/soshiki/24/20648.html", role: "list", hint: "宇陀市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "宇陀市",
    notes: "下見時 4 件 (最新 2026-07-09)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-higashiyoshino",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 東吉野村 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "http://www.vill.higashiyoshino.nara.jp/life/news/2025/p7496/", role: "list", hint: "東吉野村 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "東吉野村",
    notes: "下見時 4 件 (最新 2025-06-05)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-ikoma",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 生駒市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.ikoma.lg.jp/0000039425.html", role: "list", hint: "生駒市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "生駒市",
    notes: "下見時 2 件 (最新 2026-01-30)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-shimoichi",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 下市町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.shimoichi.lg.jp/0000001803.html", role: "list", hint: "下市町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "下市町",
    notes: "下見時 1 件 (最新 2026-08-24)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-tenkawa",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 天川村 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.vill.tenkawa.nara.jp/tourism/news/6524/", role: "list", hint: "天川村 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "天川村",
    notes: "下見時 1 件 (最新 2026-04-17)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-mitsue",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 御杖村 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.vill.mitsue.nara.jp/kurashi/annai/sangyokensetsuka/1/1/zyukankyou/3206.html", role: "list", hint: "御杖村 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "御杖村",
    notes: "下見時 1 件 (最新 2025-08-01)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "nara-takatori",
    kind: "municipal",
    prefCode: "29",
    regionLabel: "奈良県 高取町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.takatori.nara.jp/contents_detail.php?co=new&frmId=2183", role: "list", hint: "高取町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "高取町",
    notes: "下見時 1 件 (最新 2024-06-22)",
    verifiedAt: "2026-09-02",
  },

  // --- 和歌山県 (8 市町村) — 和歌山県は目撃マップ (画像 PDF) と年次集計のみで個別記録が無い (source-gaps 登録済み) ---
  {
    id: "wakayama-hidakagawa",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 日高川町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.hidakagawa.lg.jp/shigoto/nougyou/kuma.html", role: "list", hint: "日高川町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "日高川町",
    notes: "下見時 11 件 (最新 2026-08-07)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-kimino",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 紀美野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kimino.wakayama.jp/sagasu/sangyoka/nougyo/2096.html", role: "list", hint: "紀美野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "紀美野町",
    notes: "下見時 8 件 (最新 2026-06-14)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-susami",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 すさみ町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.susami.lg.jp/shigoto/01/04/2025-1202-1136-19.html", role: "list", hint: "すさみ町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "すさみ町",
    notes: "下見時 4 件 (最新 2025-11-01)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-hirogawa",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 広川町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.hirogawa.wakayama.jp/sangyou/251010_bear.html", role: "list", hint: "広川町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "広川町",
    notes: "下見時 1 件 (最新 2026-06-10)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-hashimoto",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 橋本市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.hashimoto.lg.jp/guide/keizaisuisinbu/norinshinko/choujyuugai/21532.html", role: "list", hint: "橋本市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "橋本市",
    notes: "下見時 1 件 (最新 2026-04-05)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-wakayama",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 和歌山市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.wakayama.wakayama.jp/kurashi/sangyo_koyo_roudou/nougyou/1066381.html", role: "list", hint: "和歌山市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "和歌山市",
    notes: "下見時 1 件 (最新 2025-11-11)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-yuasa",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 湯浅町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.yuasa.wakayama.jp/soshiki/9/10438.html", role: "list", hint: "湯浅町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "湯浅町",
    notes: "下見時 1 件 (最新 2025-11-08)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "wakayama-kushimoto",
    kind: "municipal",
    prefCode: "30",
    regionLabel: "和歌山県 串本町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kushimoto.wakayama.jp/sangyo/nourinsangyou/2025-1023-1308-11.html", role: "list", hint: "串本町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "串本町",
    notes: "下見時 1 件 (最新 2025-10-18)",
    verifiedAt: "2026-09-02",
  },

  // --- 三重県 (5 市町村) — 三重県は県として個別記録を公開していない ---
  {
    id: "mie-owase",
    kind: "municipal",
    prefCode: "24",
    regionLabel: "三重県 尾鷲市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.owase.lg.jp/0000021030.html", role: "list", hint: "尾鷲市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "尾鷲市",
    notes: "下見時 24 件 (最新 2026-08-24)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "mie-iga",
    kind: "municipal",
    prefCode: "24",
    regionLabel: "三重県 伊賀市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.iga.lg.jp/0000013145.html", role: "list", hint: "伊賀市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "伊賀市",
    notes: "下見時 6 件 (最新 2025-09-03)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "mie-watarai",
    kind: "municipal",
    prefCode: "24",
    regionLabel: "三重県 度会町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.watarai.lg.jp/contents_detail.php?co=kak&frmId=2149", role: "list", hint: "度会町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "度会町",
    notes: "下見時 1 件 (最新 2026-07-18)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "mie-nabari",
    kind: "municipal",
    prefCode: "24",
    regionLabel: "三重県 名張市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nabari.lg.jp/s002/020/010/030/111/20250604150410.html", role: "list", hint: "名張市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "名張市",
    notes: "下見時 1 件 (最新 2025-06-03)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "mie-tamaki",
    kind: "municipal",
    prefCode: "24",
    regionLabel: "三重県 玉城町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://kizuna.town.tamaki.mie.jp/news/2024-0823-1742-11.html", role: "list", hint: "玉城町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "玉城町",
    notes: "下見時 1 件 (最新 2025-02-09)",
    verifiedAt: "2026-09-02",
  },

  // --- 滋賀県 (5 市町村) — 滋賀県は県として個別記録を公開していない ---
  {
    id: "shiga-ritto",
    kind: "municipal",
    prefCode: "25",
    regionLabel: "滋賀県 栗東市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.ritto.lg.jp/soshiki/kankyokeizai/norin/oshirase/15732.html", role: "list", hint: "栗東市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "栗東市",
    notes: "下見時 9 件 (最新 2026-10-27)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "shiga-kusatsu",
    kind: "municipal",
    prefCode: "25",
    regionLabel: "滋賀県 草津市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kusatsu.shiga.jp/kurashi/kankyo/shizenkankyo/kankyo220250606kuma.html", role: "list", hint: "草津市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "草津市",
    notes: "下見時 3 件 (最新 2025-12-08)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "shiga-koka",
    kind: "municipal",
    prefCode: "25",
    regionLabel: "滋賀県 甲賀市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.koka.lg.jp/12260.htm", role: "list", hint: "甲賀市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "甲賀市",
    notes: "下見時 1 件 (最新 2026-08-03)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "shiga-nagahama",
    kind: "municipal",
    prefCode: "25",
    regionLabel: "滋賀県 長浜市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nagahama.lg.jp/0000001837.html", role: "list", hint: "長浜市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "長浜市",
    notes: "下見時 1 件 (最新 2025-04-22)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "shiga-konan",
    kind: "municipal",
    prefCode: "25",
    regionLabel: "滋賀県 湖南市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.shiga-konan.lg.jp/soshiki/kankyou_keizai/norin_hozen/4/34892.html", role: "list", hint: "湖南市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "湖南市",
    notes: "下見時 1 件 (最新 2024-10-04)",
    verifiedAt: "2026-09-02",
  },

  // --- 広島県 (3 市町村) — 広島県は市町別・月別の集計 PDF のみ (source-gaps 登録済み) ---
  {
    id: "hiroshima-mihara",
    kind: "municipal",
    prefCode: "34",
    regionLabel: "広島県 三原市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.mihara.hiroshima.jp/soshiki/26/144215.html", role: "list", hint: "三原市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "三原市",
    notes: "下見時 15 件 (最新 2026-09-01)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hiroshima-otake",
    kind: "municipal",
    prefCode: "34",
    regionLabel: "広島県 大竹市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.otake.hiroshima.jp/soshiki/somu/sangyoshinko/gyomu/yaseidoubutu/1634604276061.html", role: "list", hint: "大竹市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "大竹市",
    notes: "下見時 10 件 (最新 2026-08-07)",
    verifiedAt: "2026-09-02",
  },
  {
    id: "hiroshima-kumano",
    kind: "municipal",
    prefCode: "34",
    regionLabel: "広島県 熊野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kumano.lg.jp/announcement/7786.html", role: "list", hint: "熊野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "熊野町",
    notes: "下見時 1 件 (最新 2026-06-30)",
    verifiedAt: "2026-09-02",
  },

  // --- 岡山県 (1 市町村) — 岡山県は県として個別記録を公開していない ---
  {
    id: "okayama-kagamino",
    kind: "municipal",
    prefCode: "33",
    regionLabel: "岡山県 鏡野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kagamino.lg.jp/soshiki/4/14792.html", role: "list", hint: "鏡野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "鏡野町",
    notes: "下見時 9 件 (最新 2026-07-13)",
    verifiedAt: "2026-09-02",
  },

  // ================= 市町村ページ 第2弾 (2026-09-04 追加) =================
  //
  // 県レベルの情報が薄い 12 県 146 ページを scripts/survey-muni-bear-pages.ts で
  // 下見し、個別記録が取れた 64 ページを登録した。注意喚起しか無いページは
  // 登録しない (毎回無駄な LLM 呼び出しと健全性チェックのノイズになる)。
  //
  // 下見の結果 (当たり/調査ページ): 静岡 12/26・栃木 9/12・山口 7/11・埼玉 7/19・
  // 神奈川 6/11・山梨 5/16・大阪 5/7・福井 4/10・愛知 4/7・東京 3/7・
  // 石川 1/10・島根 1/10
  //
  // 50 件ちょうどのソースは抽出の上限 (MAX_SIGHTINGS_PER_SOURCE) に当たっている。
  // ページにはそれ以上載っているので、新しい順に 50 件だけ取っている。

  // --- 栃木県 (9 市町村) — 県として個別記録の一覧が無く、市が個別に掲載している ---
  {
    id: "tochigi-nasushiobara",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 那須塩原市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nasushiobara.tochigi.jp/soshikikarasagasu/np/choujuhigai/3532.html", role: "list", hint: "那須塩原市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "那須塩原市",
    notes: "下見時 50 件 (最新 2026-08-31)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-ashikaga",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 足利市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.ashikaga.tochigi.jp/industory/000059/000317/000726/p007635.html", role: "list", hint: "足利市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "足利市",
    notes: "下見時 50 件 (最新 2026-08-10)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-nasu",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 那須町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.nasu.lg.jp/0292/info-0000000090-1.html", role: "list", hint: "那須町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "那須町",
    notes: "下見時 50 件 (最新 2025-02-08)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-sano",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 佐野市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.sano.lg.jp/soshikiichiran/nourin/nosansonshinkoka/oshirase/3468.html", role: "list", hint: "佐野市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "佐野市",
    notes: "下見時 26 件 (最新 2026-09-02)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-kanuma",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 鹿沼市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kanuma.tochigi.jp/0537/info-0000000657-1.html", role: "list", hint: "鹿沼市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "鹿沼市",
    notes: "下見時 23 件 (最新 2025-12-22)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-utsunomiya",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 宇都宮市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.utsunomiya.lg.jp/kurashi/oshiraselist/1034544/1025612.html", role: "list", hint: "宇都宮市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "宇都宮市",
    notes: "下見時 21 件 (最新 2026-06-09)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-tochigi",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 栃木市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.tochigi.lg.jp/soshiki/35/37.html", role: "list", hint: "栃木市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "栃木市",
    notes: "下見時 11 件 (最新 2026-08-28)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-yaita",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 矢板市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.yaita.tochigi.jp/soshiki/nougyosinkou/kumasyutubotu.html", role: "list", hint: "矢板市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "矢板市",
    notes: "下見時 11 件 (最新 2026-07-18)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tochigi-ichikai",
    kind: "municipal",
    prefCode: "09",
    regionLabel: "栃木県 市貝町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.bousai.town.ichikai.tochigi.jp/uncategorized/archives/65", role: "list", hint: "市貝町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "市貝町",
    notes: "下見時 1 件 (最新 2025-05-11)",
    verifiedAt: "2026-09-04",
  },

  // --- 静岡県 (12 市町村) — 県の年度別 PDF は過去分のみ。現行の出没は市町が出している ---
  {
    id: "shizuoka-fujinomiya",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 富士宮市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.fujinomiya.lg.jp/1030300000/p002198.html", role: "list", hint: "富士宮市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "富士宮市",
    notes: "下見時 50 件 (最新 2026-08-31)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-fuji-oyama",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 小山町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.fuji-oyama.jp/page/1383.html", role: "list", hint: "小山町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "小山町",
    notes: "下見時 15 件 (最新 2026-06-25)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-susono",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 裾野市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.susono.shizuoka.jp/soshiki/8/3/2/1/753.html", role: "list", hint: "裾野市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "裾野市",
    notes: "下見時 12 件 (最新 2025-11-21)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-fuji",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 富士市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.fuji.shizuoka.jp/1030100000/p001022.html", role: "list", hint: "富士市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "富士市",
    notes: "下見時 8 件 (最新 2026-08-03)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-gotemba",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 御殿場市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.gotemba.lg.jp/kurashi/b-p-info/b-p-info-01/17098.html", role: "list", hint: "御殿場市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "御殿場市",
    notes: "下見時 6 件 (最新 2026-05-13)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-kikugawa",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 菊川市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kikugawa.shizuoka.jp/nourin/kumamokugeki.html", role: "list", hint: "菊川市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "菊川市",
    notes: "下見時 5 件 (最新 2025-12-29)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-numazu",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 沼津市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.numazu.shizuoka.jp/shisei/office/ichiran/sangyo/norin/wildbeast.htm", role: "list", hint: "沼津市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "沼津市",
    notes: "下見時 2 件 (最新 2024-08-02)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-fukuroi",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 袋井市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.fukuroi.shizuoka.jp/soshiki/15/1/ringyo/13819.html", role: "list", hint: "袋井市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "袋井市",
    notes: "下見時 1 件 (最新 2026-01-03)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-atami",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 熱海市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.atami.lg.jp/kurashi/kankyo/1000830/1000833.html", role: "list", hint: "熱海市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "熱海市",
    notes: "下見時 1 件 (最新 2025-12-31)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-minamiizu",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 南伊豆町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.minamiizu.shizuoka.jp/docs/2025110500019/", role: "list", hint: "南伊豆町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "南伊豆町",
    notes: "下見時 1 件 (最新 2025-11-07)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-yaizu",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 焼津市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.yaizu.lg.jp/life/pet-animals/wildlife/bear.html", role: "list", hint: "焼津市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "焼津市",
    notes: "下見時 1 件 (最新 2024-06-30)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "shizuoka-izu",
    kind: "municipal",
    prefCode: "22",
    regionLabel: "静岡県 伊豆市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.izu.shizuoka.jp/soshiki/1027/1/1/4630.html", role: "list", hint: "伊豆市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "伊豆市",
    notes: "下見時 1 件 (最新 2023-10-20)",
    verifiedAt: "2026-09-04",
  },

  // --- 山口県 (7 市町村) — 県 PDF (yamaguchi-pdf) を市町ページで補う ---
  {
    id: "yamaguchi-shunan",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 周南市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.shunan.lg.jp/soshiki/33/3886.html", role: "list", hint: "周南市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "周南市",
    notes: "下見時 42 件 (最新 2026-08-26)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamaguchi-hikari",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 光市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.hikari.lg.jp/soshiki/7/yugai/yugaichouzyu/13902.html", role: "list", hint: "光市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "光市",
    notes: "下見時 14 件 (最新 2026-05-26)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamaguchi-shimonoseki",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 下関市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.shimonoseki.lg.jp/soshiki/59/2491.html", role: "list", hint: "下関市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "下関市",
    notes: "下見時 11 件 (最新 2026-07-14)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamaguchi-kudamatsu",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 下松市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.kudamatsu.lg.jp/nourin/tsukinowagumamokugeki.html", role: "list", hint: "下松市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "下松市",
    notes: "下見時 10 件 (最新 2026-08-17)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamaguchi-hirao",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 平生町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.hirao.lg.jp/soshiki/kankyo/tyouzyu/1698814915590.html", role: "list", hint: "平生町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "平生町",
    notes: "下見時 8 件 (最新 2025-12-05)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamaguchi-hofu",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 防府市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.hofu.yamaguchi.jp/soshiki/22/kuma-mokugeki.html", role: "list", hint: "防府市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "防府市",
    notes: "下見時 2 件 (最新 2026-05-29)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamaguchi-nagato",
    kind: "municipal",
    prefCode: "35",
    regionLabel: "山口県 長門市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nagato.yamaguchi.jp/soshiki/4/60808.html", role: "list", hint: "長門市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "長門市",
    notes: "下見時 1 件 (最新 2025-06-09)",
    verifiedAt: "2026-09-04",
  },

  // --- 埼玉県 (7 市町村) — 秩父地域の町が個別に掲載。県の一覧を補う ---
  {
    id: "saitama-minano",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 皆野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.minano.saitama.jp/section/kankou/12181/", role: "list", hint: "皆野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "皆野町",
    notes: "下見時 21 件 (最新 2026-07-11)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "saitama-ogano",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 小鹿野町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.ogano.lg.jp/industry-bid-business/industry/kumanosyutubotujyouhou/", role: "list", hint: "小鹿野町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "小鹿野町",
    notes: "下見時 16 件 (最新 2026-07-22)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "saitama-moroyama",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 毛呂山町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.moroyama.saitama.jp/soshikikarasagasu/sangyoshinkoka/6/tyoujyuuhigai/2389.html", role: "list", hint: "毛呂山町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "毛呂山町",
    notes: "下見時 9 件 (最新 2026-06-27)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "saitama-yokoze",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 横瀬町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.yokoze.saitama.jp/anzen/kurashi-anzen/892", role: "list", hint: "横瀬町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "横瀬町",
    notes: "下見時 6 件 (最新 2026-08-11)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "saitama-chichibu",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 秩父市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.chichibu.lg.jp/4543.html", role: "list", hint: "秩父市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "秩父市",
    notes: "下見時 3 件 (最新 2026-06-12)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "saitama-fukaya",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 深谷市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.fukaya.saitama.jp/soshiki/kankyosuido/kankyo/tanto/yasei_seibutu/19283.html", role: "list", hint: "深谷市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "深谷市",
    notes: "下見時 2 件 (最新 2026-08-07)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "saitama-ogose",
    kind: "municipal",
    prefCode: "11",
    regionLabel: "埼玉県 越生町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.ogose.saitama.jp/kamei/sangyokanko/norin/kuma20221107/2863.html", role: "list", hint: "越生町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "越生町",
    notes: "下見時 2 件 (最新 2025-11-08)",
    verifiedAt: "2026-09-04",
  },

  // --- 愛知県 (4 市町村) — 県 PDF が CI から到達できず取り込み不能 (source-gaps 登録済み)。市が代替になる ---
  {
    id: "aichi-toyota",
    kind: "municipal",
    prefCode: "23",
    regionLabel: "愛知県 豊田市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.toyota.aichi.jp/kurashi/kankyou/sizen/1003859.html", role: "list", hint: "豊田市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "豊田市",
    notes: "下見時 50 件 (最新 2026-09-03)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "aichi-seto",
    kind: "municipal",
    prefCode: "23",
    regionLabel: "愛知県 瀬戸市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.seto.aichi.jp/docs/2021/06/22/00021/index.html", role: "list", hint: "瀬戸市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "瀬戸市",
    notes: "下見時 6 件 (最新 2026-05-20)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "aichi-miyoshi",
    kind: "municipal",
    prefCode: "23",
    regionLabel: "愛知県 みよし市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.aichi-miyoshi.lg.jp/soshiki/shiminkeizai/kankyo/gaijuugaitchutokuteigairaiseibutsu/785.html", role: "list", hint: "みよし市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "みよし市",
    notes: "下見時 2 件 (最新 2024-08-14)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "aichi-nisshin",
    kind: "municipal",
    prefCode: "23",
    regionLabel: "愛知県 日進市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nisshin.lg.jp/department/seikatu/kankyou/6/2/9/15773.html", role: "list", hint: "日進市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "日進市",
    notes: "下見時 2 件 (最新 2024-06-15)",
    verifiedAt: "2026-09-04",
  },

  // --- 福井県 (4 市町村) — 県マップ (fukui) を市町ページで補う ---
  {
    id: "fukui-sabae",
    kind: "municipal",
    prefCode: "18",
    regionLabel: "福井県 鯖江市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.sabae.fukui.jp/anzen_anshin/chojuhigaitaisaku/kuma-taisaku/kumasyutubotu/index.html", role: "list", hint: "鯖江市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "鯖江市",
    notes: "下見時 32 件 (最新 2025-12-01)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "fukui-awara",
    kind: "municipal",
    prefCode: "18",
    regionLabel: "福井県 あわら市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.awara.lg.jp/mokuteki/industry/industry03/industry0304/p014736.html", role: "list", hint: "あわら市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "あわら市",
    notes: "下見時 20 件 (最新 2026-06-20)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "fukui-ikeda",
    kind: "municipal",
    prefCode: "18",
    regionLabel: "福井県 池田町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.ikeda.fukui.jp/toplink/emergency/p002978.html", role: "list", hint: "池田町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "池田町",
    notes: "下見時 7 件 (最新 2026-06-25)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "fukui-echizen",
    kind: "municipal",
    prefCode: "18",
    regionLabel: "福井県 越前市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.echizen.lg.jp/office/kankyounourin/030/kumachuui.html", role: "list", hint: "越前市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "越前市",
    notes: "下見時 1 件 (最新 2024-06-06)",
    verifiedAt: "2026-09-04",
  },

  // --- 山梨県 (5 市町村) — 県の年度別 PDF (yamanashi-r*) を市町村ページで補う ---
  {
    id: "yamanashi-hokuto",
    kind: "municipal",
    prefCode: "19",
    regionLabel: "山梨県 北杜市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.hokuto.yamanashi.jp/docs/128.html", role: "list", hint: "北杜市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "北杜市",
    notes: "下見時 19 件 (最新 2026-08-30)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamanashi-fujiyoshida",
    kind: "municipal",
    prefCode: "19",
    regionLabel: "山梨県 富士吉田市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.fujiyoshida.yamanashi.jp/page/1531.html", role: "list", hint: "富士吉田市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "富士吉田市",
    notes: "下見時 14 件 (最新 2026-09-03)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamanashi-narusawa",
    kind: "municipal",
    prefCode: "19",
    regionLabel: "山梨県 鳴沢村 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.vill.narusawa.yamanashi.jp/gyosei/soshikikarasagasu/shinkoka/sangyoshinko_1/1/index.html", role: "list", hint: "鳴沢村 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "鳴沢村",
    notes: "下見時 6 件 (最新 2026-07-04)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamanashi-minami-alps",
    kind: "municipal",
    prefCode: "19",
    regionLabel: "山梨県 南アルプス市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.minami-alps.yamanashi.jp/docs/11054.html", role: "list", hint: "南アルプス市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "南アルプス市",
    notes: "下見時 3 件 (最新 2026-08-21)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "yamanashi-minolove",
    kind: "municipal",
    prefCode: "19",
    regionLabel: "山梨県 身延町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.minolove.jp/soshiki/1/102270.html", role: "list", hint: "身延町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "身延町",
    notes: "下見時 1 件 (最新 2026-07-18)",
    verifiedAt: "2026-09-04",
  },

  // --- 石川県 (1 市町村) — 県の一覧を市町ページで補う ---
  {
    id: "ishikawa-nomi",
    kind: "municipal",
    prefCode: "17",
    regionLabel: "石川県 能美市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.nomi.ishikawa.jp/www/contents/1591061469768/index.html", role: "list", hint: "能美市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "能美市",
    notes: "下見時 35 件 (最新 2026-08-05)",
    verifiedAt: "2026-09-04",
  },

  // --- 神奈川県 (6 市町村) — 県 PDF (kanagawa) は丹沢中心。市町ページで周辺を補う ---
  {
    id: "kanagawa-matsuda",
    kind: "municipal",
    prefCode: "14",
    regionLabel: "神奈川県 松田町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://town.matsuda.kanagawa.jp/soshiki/9/bear-sight.html", role: "list", hint: "松田町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "松田町",
    notes: "下見時 13 件 (最新 2026-08-17)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "kanagawa-kiyokawa",
    kind: "municipal",
    prefCode: "14",
    regionLabel: "神奈川県 清川村 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.kiyokawa.kanagawa.jp/soshiki/kennou/nourin/bird/235.html", role: "list", hint: "清川村 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "清川村",
    notes: "下見時 11 件 (最新 2026-08-10)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "kanagawa-minamiashigara",
    kind: "municipal",
    prefCode: "14",
    regionLabel: "神奈川県 南足柄市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.minamiashigara.kanagawa.jp/kurashi/gomi/pet/p06931.html", role: "list", hint: "南足柄市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "南足柄市",
    notes: "下見時 1 件 (最新 2026-07-01)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "kanagawa-nakai",
    kind: "municipal",
    prefCode: "14",
    regionLabel: "神奈川県 中井町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.nakai.kanagawa.jp/shigoto_sangyo/nogyo_ringyo_suisangyo/nogyo/3742.html", role: "list", hint: "中井町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "中井町",
    notes: "下見時 1 件 (最新 2025-10-30)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "kanagawa-odawara",
    kind: "municipal",
    prefCode: "14",
    regionLabel: "神奈川県 小田原市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.odawara.kanagawa.jp/field/envi/pet-wildlife/wildlife/p37204.html", role: "list", hint: "小田原市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "小田原市",
    notes: "下見時 1 件 (最新 2024-05-16)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "kanagawa-hakone",
    kind: "municipal",
    prefCode: "14",
    regionLabel: "神奈川県 箱根町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.hakone.kanagawa.jp/www/contents/1100000000465/index.html", role: "list", hint: "箱根町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "箱根町",
    notes: "下見時 1 件 (最新 2024-04-02)",
    verifiedAt: "2026-09-04",
  },

  // --- 東京都 (3 市町村) — 都の公開が 2026-06 で止まっている (source-gaps 登録済み)。市町村ページが代替になる ---
  {
    id: "tokyo-akiruno",
    kind: "municipal",
    prefCode: "13",
    regionLabel: "東京都 あきる野市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.akiruno.tokyo.jp/0000017429.html", role: "list", hint: "あきる野市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "あきる野市",
    notes: "下見時 22 件 (最新 2026-09-01)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tokyo-hachioji",
    kind: "municipal",
    prefCode: "13",
    regionLabel: "東京都 八王子市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.hachioji.tokyo.jp/kurashi/sangyo/004/jyugai/p034133.html", role: "list", hint: "八王子市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "八王子市",
    notes: "下見時 4 件 (最新 2026-06-08)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "tokyo-okutama",
    kind: "municipal",
    prefCode: "13",
    regionLabel: "東京都 奥多摩町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.okutama.tokyo.jp/1/kankosangyoka/sangyoshinko/2/1/1079.html", role: "list", hint: "奥多摩町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "奥多摩町",
    notes: "下見時 4 件 (最新 2026-05-17)",
    verifiedAt: "2026-09-04",
  },

  // --- 大阪府 (5 市町村) — 府として個別記録の一覧が無い。能勢町・豊能町など北摂の町が掲載 ---
  {
    id: "osaka-toyono",
    kind: "municipal",
    prefCode: "27",
    regionLabel: "大阪府 豊能町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.toyono.osaka.jp/kurashi/nourin-shoukou/nouringyou/page006225.html", role: "list", hint: "豊能町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "豊能町",
    notes: "下見時 16 件 (最新 2026-09-03)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "osaka-nose",
    kind: "municipal",
    prefCode: "27",
    regionLabel: "大阪府 能勢町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.nose.osaka.jp/soshiki/midorikankyou/midorisinko/oshirase/9995.html", role: "list", hint: "能勢町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "能勢町",
    notes: "下見時 5 件 (最新 2026-07-07)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "osaka-shimamoto",
    kind: "municipal",
    prefCode: "27",
    regionLabel: "大阪府 島本町 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.town.shimamoto.lg.jp/soshiki/17/2949.html", role: "list", hint: "島本町 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "島本町",
    notes: "下見時 4 件 (最新 2026-06-28)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "osaka-takatsuki",
    kind: "municipal",
    prefCode: "27",
    regionLabel: "大阪府 高槻市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.takatsuki.osaka.jp/soshiki/57/4145.html", role: "list", hint: "高槻市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "高槻市",
    notes: "下見時 3 件 (最新 2026-08-03)",
    verifiedAt: "2026-09-04",
  },
  {
    id: "osaka-ikeda",
    kind: "municipal",
    prefCode: "27",
    regionLabel: "大阪府 池田市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.ikeda.osaka.jp/soshiki/toshiseibibu/midorinosei/nousei/oshirase/1415930800507.html", role: "list", hint: "池田市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "池田市",
    notes: "下見時 1 件 (最新 2025-09-19)",
    verifiedAt: "2026-09-04",
  },

  // --- 島根県 (1 市町村) — 県として個別記録の一覧が薄い ---
  {
    id: "shimane-matsue",
    kind: "municipal",
    prefCode: "32",
    regionLabel: "島根県 松江市 クマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.city.matsue.lg.jp/soshikikarasagasu/sangyokeizaibu_norinkibanseibika/yugaichoju/3370.html", role: "list", hint: "松江市 クマ出没情報" },
    ],
    extractor: "llm-html",
    defaultCity: "松江市",
    notes: "下見時 4 件 (最新 2026-05-22)",
    verifiedAt: "2026-09-04",
  },
];

// 札幌市 ヒグマ出没情報 CKAN (年度別 2017-2025)。
// ひぐまっぷ API に札幌市のデータが含まれないため、CKAN の年度別 CSV を直接取得。
const SAPPORO_CKAN_YEARS: Array<{ year: number; resource: string }> = [
  { year: 2017, resource: "6d2ebe8d-d683-41b6-83b5-0395a3e795ae" },
  { year: 2018, resource: "e33993cc-4ef1-4916-9cad-1e9d585f9427" },
  { year: 2019, resource: "6a9c917a-1fe1-4217-876b-e1ffa5138144" },
  { year: 2020, resource: "9647f46b-6e07-4209-8b3e-45c8b329e579" },
  { year: 2021, resource: "a9255555-4afa-4450-8c00-8bac4b24d088" },
  { year: 2022, resource: "37fd8fe6-b1c1-4c0a-b3a8-85cc3958603d" },
  { year: 2023, resource: "3d6c0e28-7247-4503-b248-258e59192b99" },
  { year: 2024, resource: "b289a37b-9149-4e34-981f-6743488d5779" },
  { year: 2025, resource: "76c539c8-cd17-4449-a972-6ddc8c3d5306" },
];
for (const { year, resource } of SAPPORO_CKAN_YEARS) {
  DATA_SOURCES.push({
    id: `sapporo-${year}`,
    kind: "municipal",
    prefCode: "01",
    regionLabel: `北海道 札幌市ヒグマ出没情報 ${year}年`,
    bearStatus: "present",
    urls: [
      { url: `https://ckan.pf-sapporo.jp/dataset/sapporo_bear_appearance`, role: "csv", hint: "札幌市 CKAN" },
    ],
    extractor: "direct-csv",
    csv: {
      csvUrl: `https://ckan.pf-sapporo.jp/dataset/0d3197ef-c473-48ac-86bd-0fc34084b0ee/resource/${resource}/download/${year}sapporobearappearance.csv`,
      encoding: "utf-8",
      delimiter: ",",
      dateFormat: "ja-slash",
      mappings: {
        date: "日付",
        lat: "緯度",
        lon: "経度",
        city: "区",
        section: "出没場所",
        situation: "状況",
      },
    },
    notes: `${year}年札幌市ヒグマ出没情報。ひぐまっぷに札幌市データが無いため CKAN から直接取得`,
    verifiedAt: "2026-04-21",
  });
}

export function findSourceById(id: string): DataSourceEntry | undefined {
  return DATA_SOURCES.find((s) => s.id === id);
}

export function findSourceByPrefCode(prefCode: string): DataSourceEntry | undefined {
  return DATA_SOURCES.find((s) => s.prefCode === prefCode);
}

export function listSourcesByPrefCode(prefCode: string): DataSourceEntry[] {
  return DATA_SOURCES.filter((s) => s.prefCode === prefCode);
}

export function countSourcesByStatus(): Record<BearStatus, number> {
  const counts: Record<BearStatus, number> = { present: 0, rare: 0, extinct: 0, absent: 0 };
  for (const s of DATA_SOURCES) counts[s.bearStatus]++;
  return counts;
}

export function countVerifiedUrls(): { total: number; verified: number; needsResearch: number } {
  let total = 0;
  let verified = 0;
  let needsResearch = 0;
  for (const s of DATA_SOURCES) {
    if (s.urls.length === 0) continue;
    total++;
    if (s.requiresResearch) needsResearch++;
    else verified++;
  }
  return { total, verified, needsResearch };
}
