export type SourceKind = "municipal" | "police" | "aggregator" | "prefecture";
export type ExtractorType =
  | "llm-html"
  | "direct-csv"
  | "direct-gpx"
  | "direct-excel"
  | "direct-json"
  | "direct-api"
  | "arcgis-dashboard"
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

export type DataSourceEntry = {
  id: string;
  kind: SourceKind;
  prefCode: string;
  regionLabel: string;
  bearStatus: BearStatus;
  urls: DataSourceUrl[];
  extractor: ExtractorType;
  license?: string;
  notes?: string;
  requiresResearch?: boolean;
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
      { url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/higuma-top.html", role: "list", hint: "道庁ヒグマトップページ" },
    ],
    extractor: "custom-webmap",
    notes: "ひぐまっぷは専用 WebMap。道内多くの市町村が利用。データ取得は個別調査が必要",
    verifiedAt: "2026-04-20",
  },
  {
    id: "aomori",
    kind: "prefecture",
    prefCode: "02",
    regionLabel: "青森県 クマに注意してください",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.aomori.lg.jp/soshiki/kankyo/shizen/kuma_cyuui.html", role: "list", hint: "青森県の公式注意ページ" },
    ],
    extractor: "llm-html",
    notes: "2026-04 より『くまログあおもり』運用開始（詳細 URL 要追跡）",
    verifiedAt: "2026-04-20",
  },
  {
    id: "iwate",
    kind: "prefecture",
    prefCode: "03",
    regionLabel: "岩手県 ツキノワグマ出没状況",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/1056087.html", role: "list", hint: "人身被害状況・出没状況、Google マップ埋込あり" },
    ],
    extractor: "llm-html",
    notes: "ページ内に Google My Map を埋込。Bears アプリ（Golden Field 社）も県採用",
    verifiedAt: "2026-04-20",
  },
  {
    id: "miyagi",
    kind: "prefecture",
    prefCode: "04",
    regionLabel: "宮城県 ツキノワグマ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.miyagi.jp/soshiki/sizenhogo/tukinowaguma.html", role: "list", hint: "宮城県の公式ページ" },
    ],
    extractor: "llm-html",
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
    notes: "Sharp9110 と重複。ArcGIS Hub で公式の構造化データ提供あり",
    verifiedAt: "2026-04-20",
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
    notes: "位置座標付き CSV を定期公開（2026-04-14 時点で 16KB）。最優先 direct-csv 化候補",
    verifiedAt: "2026-04-20",
  },
  {
    id: "fukushima",
    kind: "prefecture",
    prefCode: "07",
    regionLabel: "福島県 ツキノワグマ目撃情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.fukushima.lg.jp/sec/16035b/tukinowaguma-mokugeki.html", role: "map", hint: "県ツキノワグマ目撃情報マップ（県警データ）" },
    ],
    extractor: "llm-html",
    notes: "県警から提供された目撃情報を基にマップ作成",
    verifiedAt: "2026-04-20",
  },
  {
    id: "ibaraki",
    kind: "prefecture",
    prefCode: "08",
    regionLabel: "茨城県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.ibaraki.jp/seikatsukankyo/shizen/yasei/kuma.html", role: "list", hint: "茨城県の公式ページ（要再検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    notes: "大子町など一部市町村から情報あり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "tochigi",
    kind: "prefecture",
    prefCode: "09",
    regionLabel: "栃木県 クマ出没（目撃）状況",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.tochigi.lg.jp/d04/choujyuu/r4_kuma_shutubotu.html", role: "list", hint: "令和7年度クマ出没（目撃）状況" },
    ],
    extractor: "llm-html",
    notes: "栃木県警公開マップも別途存在",
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
    notes: "市町村職員が直接入力。月別・時間帯別の集計あり。ArcGIS REST API 経由で取得可能",
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
    notes: "ArcGIS REST API 経由で目撃一覧・ヒートマップ取得可能",
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
    license: "東京都 利用規約",
    notes: "CSV と GPX の両形式で公開。direct-csv 化の最優先候補",
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
    verifiedAt: "2026-04-20",
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
    notes: "2024-10 にリニューアル、年/月/市町村別集計機能あり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "toyama",
    kind: "prefecture",
    prefCode: "16",
    regionLabel: "富山県 クマっぷ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.toyama.jp/1709/kurashi/kankyoushizen/shizen/yaseiseibutsu/kumap.html", role: "map", hint: "富山県 ツキノワグマ出没情報地図『クマっぷ』" },
    ],
    extractor: "custom-webmap",
    notes: "2026-04-06 に全面リニューアル。GIS ベース",
    verifiedAt: "2026-04-20",
  },
  {
    id: "ishikawa",
    kind: "prefecture",
    prefCode: "17",
    regionLabel: "石川県 ツキノワグマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.ishikawa.lg.jp/sizen/kuma/navi01.html", role: "map", hint: "石川県ツキノワグマ出没情報地図" },
    ],
    extractor: "llm-html",
    notes: "GIS ベースのマップあり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "fukui",
    kind: "prefecture",
    prefCode: "18",
    regionLabel: "福井県 福井クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://tsukinowaguma.pref.fukui.lg.jp/", role: "map", hint: "福井クマ情報 専用ドメイン" },
    ],
    extractor: "custom-webmap",
    verifiedAt: "2026-04-20",
  },
  {
    id: "yamanashi",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 ツキノワグマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamanashi.jp/shizen/kuma2.html", role: "list", hint: "県公式 クマ出没に対する注意" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-20",
  },
  {
    id: "nagano",
    kind: "prefecture",
    prefCode: "20",
    regionLabel: "長野県 ツキノワグマ情報マップ / けものおと2",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html", role: "list", hint: "県公式 クマ情報マップ案内ページ" },
    ],
    extractor: "llm-html",
    notes: "『けものおと2』スマホアプリも運用。App データの API 公開は未確認",
    verifiedAt: "2026-04-20",
  },
  {
    id: "gifu",
    kind: "prefecture",
    prefCode: "21",
    regionLabel: "岐阜県 ツキノワグマ情報マップ（県域統合 GIS）",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.gifu.lg.jp/page/4964.html", role: "list", hint: "県公式 ツキノワグマについて" },
      { url: "https://gis-gifu.jp/gifu/Portal", role: "gis", hint: "県域統合型 GIS ぎふ トップ（クママップあり）" },
    ],
    extractor: "llm-html",
    notes: "県域統合型 GIS で公開。ArcGIS REST 取得の可能性あり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "shizuoka",
    kind: "prefecture",
    prefCode: "22",
    regionLabel: "静岡県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shizuoka.jp/kurashi_kankyo/shizen_koen/yasei/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "aichi",
    kind: "prefecture",
    prefCode: "23",
    regionLabel: "愛知県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.aichi.jp/soshiki/shizen/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "mie",
    kind: "prefecture",
    prefCode: "24",
    regionLabel: "三重県 ツキノワグマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.mie.lg.jp/JTAISAKU/HP/m0114900048.htm", role: "list", hint: "三重県の公式ページ" },
      { url: "https://www.pref.mie.lg.jp/MIDORI/HP/m0118500310.htm", role: "list", hint: "三重県クマ出没情報アプリ案内" },
    ],
    extractor: "llm-html",
    notes: "県公式『けものおと』アプリあり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "shiga",
    kind: "prefecture",
    prefCode: "25",
    regionLabel: "滋賀県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shiga.lg.jp/ippan/kankyoshizen/yasei/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "kyoto",
    kind: "prefecture",
    prefCode: "26",
    regionLabel: "京都府 ツキノワグマ出没情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.kyoto.jp/choujyu/kumanitsuite.html", role: "list", hint: "京都府公式 ツキノワグマ情報" },
      { url: "https://g-kyoto.gis.pref.kyoto.lg.jp/g-kyoto/top/select.asp?dtp=676", role: "gis", hint: "京都府・市町村共同 GIS（出没地点）" },
    ],
    extractor: "llm-html",
    notes: "位置座標付き Excel 公開の情報あり（要追跡）",
    verifiedAt: "2026-04-20",
  },
  {
    id: "osaka",
    kind: "prefecture",
    prefCode: "27",
    regionLabel: "大阪府 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.osaka.lg.jp/kankyonosaisei/chojyu/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
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
    regionLabel: "奈良県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nara.jp/dd.aspx?menuid=12237", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "wakayama",
    kind: "prefecture",
    prefCode: "30",
    regionLabel: "和歌山県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.wakayama.lg.jp/prefg/031500/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "tottori",
    kind: "prefecture",
    prefCode: "31",
    regionLabel: "鳥取県 クマ出没マップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.tottori.lg.jp/kuma/index.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "shimane",
    kind: "prefecture",
    prefCode: "32",
    regionLabel: "島根県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shimane.lg.jp/nature/yasei/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "okayama",
    kind: "prefecture",
    prefCode: "33",
    regionLabel: "岡山県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.okayama.jp/page/374018.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "hiroshima",
    kind: "prefecture",
    prefCode: "34",
    regionLabel: "広島県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.hiroshima.lg.jp/soshiki/84/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "yamaguchi",
    kind: "prefecture",
    prefCode: "35",
    regionLabel: "山口県 ツキノワグマ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamaguchi.lg.jp/soshiki/92/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "tokushima",
    kind: "prefecture",
    prefCode: "36",
    regionLabel: "徳島県（四国のツキノワグマ・絶滅危惧）",
    bearStatus: "rare",
    urls: [
      { url: "https://www.pref.tokushima.lg.jp/kuma.html", role: "list" },
    ],
    extractor: "llm-html",
    notes: "四国のクマは推定 20 頭程度、絶滅危惧",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
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
