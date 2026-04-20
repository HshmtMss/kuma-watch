export type SourceKind = "municipal" | "police" | "aggregator" | "prefecture";
export type ExtractorType = "llm-html" | "direct-csv" | "direct-json" | "direct-api";
export type UrlRole = "list" | "map" | "pdf" | "rss" | "csv";
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
 *   extinct = 環境省により絶滅宣言（九州 7 県など）
 *   absent  = 元々生息しない（沖縄、千葉）
 *
 * requiresResearch:
 *   true = URL 未検証、運用前に確認必要
 */
export const DATA_SOURCES: DataSourceEntry[] = [
  {
    id: "hokkaido",
    kind: "prefecture",
    prefCode: "01",
    regionLabel: "北海道 ヒグマ関連情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/higuma-top.html", role: "list", hint: "道庁のヒグマトップページ" },
      { url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/link.html", role: "list", hint: "市町村ヒグマ関連情報リンク集" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "aomori",
    kind: "prefecture",
    prefCode: "02",
    regionLabel: "青森県 クマ対策",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.aomori.lg.jp/nature/animal/kuma.html", role: "list", hint: "青森県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "iwate",
    kind: "prefecture",
    prefCode: "03",
    regionLabel: "岩手県 ツキノワグマ出没状況",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/1056087.html", role: "list", hint: "人身被害状況・出没状況のテーブル" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "miyagi",
    kind: "prefecture",
    prefCode: "04",
    regionLabel: "宮城県 ツキノワグマ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.miyagi.jp/soshiki/sizenhogo/kuma-top.html", role: "list", hint: "宮城県の自然保護課ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "akita",
    kind: "prefecture",
    prefCode: "05",
    regionLabel: "秋田県 ツキノワグマ対策",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.akita.lg.jp/pages/archive/7080", role: "list", hint: "秋田県ツキノワグマ対策ページ" },
    ],
    extractor: "llm-html",
    notes: "Sharp9110/クマダスと重複するため優先度は低め",
    verifiedAt: "2026-04-18",
  },
  {
    id: "yamagata",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 クマに関する情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamagata.jp/050011/kurashi/shizen/seibutsu/about_kuma/kuma_yamagata_top.html", role: "list", hint: "山形県の公式クマ情報ページ" },
    ],
    extractor: "llm-html",
    notes: "位置座標付き CSV が公開されているため direct-csv に切替候補",
    verifiedAt: "2026-04-18",
  },
  {
    id: "fukushima",
    kind: "prefecture",
    prefCode: "07",
    regionLabel: "福島県 ツキノワグマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.fukushima.lg.jp/sec/16055b/kuma.html", role: "list", hint: "福島県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "ibaraki",
    kind: "prefecture",
    prefCode: "08",
    regionLabel: "茨城県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.ibaraki.jp/seikatsukankyo/shizen/yasei/kuma.html", role: "list", hint: "茨城県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "tochigi",
    kind: "prefecture",
    prefCode: "09",
    regionLabel: "栃木県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.tochigi.lg.jp/d07/eco/shizenkankyou/tochigi-kuma.html", role: "list", hint: "栃木県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "gunma",
    kind: "prefecture",
    prefCode: "10",
    regionLabel: "群馬県 クマ出没マップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.gunma.jp/page/1042.html", role: "list", hint: "群馬県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "saitama",
    kind: "prefecture",
    prefCode: "11",
    regionLabel: "埼玉県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.saitama.lg.jp/a0905/doubutsuaigo/kuma.html", role: "list", hint: "埼玉県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
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
    notes: "本州で唯一クマが生息しない県。生息域外として扱う",
    verifiedAt: "2026-04-20",
  },
  {
    id: "tokyo",
    kind: "prefecture",
    prefCode: "13",
    regionLabel: "東京都 TOKYOくまっぷ",
    bearStatus: "present",
    urls: [
      { url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/witness", role: "list", hint: "TOKYOくまっぷ 目撃情報リスト。CSV ダウンロードも可能" },
    ],
    extractor: "llm-html",
    license: "東京都 利用規約",
    notes: "CSV の直接リンクが取れれば direct-csv に切替可能",
    verifiedAt: "2026-04-18",
  },
  {
    id: "kanagawa",
    kind: "prefecture",
    prefCode: "14",
    regionLabel: "神奈川県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.kanagawa.jp/docs/b8k/cnt/f1124/kuma.html", role: "list", hint: "神奈川県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "niigata",
    kind: "prefecture",
    prefCode: "15",
    regionLabel: "新潟県 クマに関する情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.niigata.lg.jp/sec/shizenhogoka/kuma-info.html", role: "list", hint: "新潟県の公式クマ情報ページ" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "toyama",
    kind: "prefecture",
    prefCode: "16",
    regionLabel: "富山県 クマっぷ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.toyama.jp/1703/kurashi/seikatsukankyou/seikatsu/kuma.html", role: "list", hint: "富山県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "ishikawa",
    kind: "prefecture",
    prefCode: "17",
    regionLabel: "石川県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.ishikawa.lg.jp/shizen/kankyo/kuma/index.html", role: "list", hint: "石川県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "fukui",
    kind: "prefecture",
    prefCode: "18",
    regionLabel: "福井県 クマ対策情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.fukui.lg.jp/doc/shizen/kuma_d/fil/kumataisaku.html", role: "list", hint: "福井県のクマ対策情報" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "yamanashi",
    kind: "prefecture",
    prefCode: "19",
    regionLabel: "山梨県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.yamanashi.jp/kinen-cpj/kumatop.html", role: "list", hint: "山梨県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "nagano",
    kind: "prefecture",
    prefCode: "20",
    regionLabel: "長野県 ツキノワグマ情報マップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html", role: "list", hint: "長野県のクマ情報マップ案内ページ" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "gifu",
    kind: "prefecture",
    prefCode: "21",
    regionLabel: "岐阜県 ツキノワグマ出没マップ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.gifu.lg.jp/page/8321.html", role: "list", hint: "岐阜県のクマ出没マップ" },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "shizuoka",
    kind: "prefecture",
    prefCode: "22",
    regionLabel: "静岡県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shizuoka.jp/kurashi_kankyo/shizen_koen/yasei/kuma.html", role: "list", hint: "静岡県の公式ページ（要検証）" },
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
      { url: "https://www.pref.aichi.jp/soshiki/shizen/kuma.html", role: "list", hint: "愛知県の公式ページ（要検証）" },
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
    notes: "県公式 'けものおと' アプリあり",
    verifiedAt: "2026-04-20",
  },
  {
    id: "shiga",
    kind: "prefecture",
    prefCode: "25",
    regionLabel: "滋賀県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.shiga.lg.jp/ippan/kankyoshizen/yasei/kuma.html", role: "list", hint: "滋賀県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "kyoto",
    kind: "prefecture",
    prefCode: "26",
    regionLabel: "京都府 ツキノワグマ",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.kyoto.jp/yasei/tuki.html", role: "list", hint: "京都府のツキノワグマ情報" },
    ],
    extractor: "llm-html",
    notes: "位置座標付き Excel が公開されているため将来 direct 化候補",
    verifiedAt: "2026-04-18",
  },
  {
    id: "osaka",
    kind: "prefecture",
    prefCode: "27",
    regionLabel: "大阪府 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.osaka.lg.jp/kankyonosaisei/chojyu/kuma.html", role: "list", hint: "大阪府の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "hyogo",
    kind: "prefecture",
    prefCode: "28",
    regionLabel: "兵庫県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.hyogo.lg.jp/kurashi/shizenkankyou/kankyou/choju/kuma.html", role: "list", hint: "兵庫県の公式ページ（要検証）" },
    ],
    extractor: "llm-html",
    notes: "森林動物研究センターもあり",
    requiresResearch: true,
    verifiedAt: "2026-04-20",
  },
  {
    id: "nara",
    kind: "prefecture",
    prefCode: "29",
    regionLabel: "奈良県 クマ情報",
    bearStatus: "present",
    urls: [
      { url: "https://www.pref.nara.jp/dd.aspx?menuid=12237", role: "list", hint: "奈良県の公式ページ（要検証）" },
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
      { url: "https://www.pref.wakayama.lg.jp/prefg/031500/kuma.html", role: "list", hint: "和歌山県の公式ページ（要検証）" },
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
      { url: "https://www.pref.tottori.lg.jp/kuma/index.html", role: "list", hint: "鳥取県の公式ページ（要検証）" },
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
      { url: "https://www.pref.shimane.lg.jp/nature/yasei/kuma.html", role: "list", hint: "島根県の公式ページ（要検証）" },
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
      { url: "https://www.pref.okayama.jp/page/374018.html", role: "list", hint: "岡山県の公式ページ（要検証）" },
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
      { url: "https://www.pref.hiroshima.lg.jp/soshiki/84/kuma.html", role: "list", hint: "広島県の公式ページ（要検証）" },
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
      { url: "https://www.pref.yamaguchi.lg.jp/soshiki/92/kuma.html", role: "list", hint: "山口県の公式ページ（要検証）" },
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
      { url: "https://www.pref.tokushima.lg.jp/kuma.html", role: "list", hint: "徳島県の公式ページ（要検証）" },
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
    notes: "四国のクマは推定 20 頭程度、絶滅危惧。高知はごく稀",
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
