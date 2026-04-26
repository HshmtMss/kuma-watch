export type SourceKind = "municipal" | "police" | "aggregator" | "prefecture";
export type ExtractorType =
  | "llm-html"
  | "llm-pdf"
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
  | "gis";
export type BearStatus = "present" | "rare" | "extinct" | "absent";

export type DataSourceUrl = {
  url: string;
  role: UrlRole;
  hint?: string;
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
      { url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/kihon.html", role: "list", hint: "道庁ヒグマ基本情報" },
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
    notes: "Google My Map の name 欄に『市町村、地区名、和暦日付』形式で 7,624 件。2026-04 時点で県内最大規模",
    verifiedAt: "2026-04-20",
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
    notes: "3,535 件。name には和暦日付 or 種別（目撃/痕跡/人身被害）。ExtendedData 年月日 に US 形式 or M月D日",
    verifiedAt: "2026-04-20",
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
    regionLabel: "福島県 ツキノワグマ目撃情報（Google My Map）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.fukushima.lg.jp/sec/16035b/tukinowaguma-mokugeki.html", role: "map", hint: "県ツキノワグマ目撃情報マップ（県警データ）" },
      { url: "https://www.google.com/maps/d/viewer?mid=10gR9gJgiEA_Tso2E0jM-Q2sI41A3n_w", role: "map", hint: "福島県 Google My Map（県警データ）" },
    ],
    extractor: "direct-kml",
    kml: {
      kmlUrl: "https://www.google.com/maps/d/kml?mid=10gR9gJgiEA_Tso2E0jM-Q2sI41A3n_w&forcekml=1",
      nameFormat: "extended-data",
      dateField: "日付",
      dateFormat: "us-slash",
      cityField: "市町村",
      sectionField: "住所",
      commentField: "状況",
      headCountField: "頭数",
    },
    notes: "県警から提供された目撃情報。ExtendedData に市町村・住所・日付・頭数・状況が全て構造化されている 2,046 件",
    verifiedAt: "2026-04-20",
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
        city: "field_11",
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
        "https://www.kankyo.metro.tokyo.lg.jp/documents/d/kankyo/tukinowaguma_source20260302",
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
      { url: "https://www.pref.kanagawa.jp/docs/t4i/cnt/f3813/index.html", role: "list", hint: "神奈川県ツキノワグマ情報" },
    ],
    extractor: "llm-html",
    notes: "丹沢・道志山系に少数個体群。第二種特定鳥獣管理計画の対象",
    verifiedAt: "2026-04-26",
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
    extractor: "custom-webmap",
    notes: "県公式は独自 OpenLayers GIS で API 未公開。PDF は月別/地域別の集計のみで座標データなし。R7 年計 950 件。Sharp9110 経由のデータなし",
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
  // 長野県 月別目撃情報 PDF (R7.4 〜 R8.4) — 各 PDF を Gemini PDF native input で抽出
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
      { ym: "R8.4 (2026-04)", file: "424mokugeki.pdf" },
    ].map(({ ym, file }) => ({
      id: `nagano-pdf-${file.replace(/\.pdf$/, "")}`,
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
      extractor: "llm-pdf" as ExtractorType,
      notes: `長野県公式の月別目撃情報 PDF。表形式 (No / 月日 / 市町村 / 区分 / 目撃痕跡別 / 大きさ / 頭数 / 状況) を Gemini で構造化抽出`,
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
    notes: "CKAN で R2(2020)〜R7(2025)の年度別 Shapefile ZIP を公開。JGD2011 平面直角 7 系→WGS84 変換後マージ。2019 以前は別 CSV",
    verifiedAt: "2026-04-20",
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
      { url: "https://www.pref.aichi.jp/soshiki/shizen/tsukinowaguma.html", role: "list", hint: "県公式 ツキノワグマトップ" },
      { url: "https://www.pref.aichi.jp/press-release/tsukinowaguma2025.html", role: "list", hint: "2025年度 出没予測プレスリリース" },
    ],
    extractor: "llm-html",
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
      { url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/238451.pdf", role: "pdf", hint: "令和8年度（最新）市町別・月別クマ目撃情報" },
      { url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/238452.pdf", role: "pdf", hint: "令和8年度 目撃情報詳細" },
      { url: "https://www.pref.yamaguchi.lg.jp/site/police/212182.html", role: "map", hint: "YPくまっぷ（山口県警察、R7 地点マップ）" },
    ],
    extractor: "direct-excel",
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
