export type SourceKind = "municipal" | "police" | "aggregator" | "prefecture";
export type ExtractorType = "llm-html" | "direct-csv" | "direct-json" | "direct-api";
export type UrlRole = "list" | "map" | "pdf" | "rss" | "csv";

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
  urls: DataSourceUrl[];
  extractor: ExtractorType;
  license?: string;
  notes?: string;
  verifiedAt: string;
};

export const DATA_SOURCES: DataSourceEntry[] = [
  {
    id: "tokyo-kumapp",
    kind: "prefecture",
    prefCode: "13",
    regionLabel: "東京都 TOKYOくまっぷ",
    urls: [
      {
        url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/witness",
        role: "list",
        hint: "TOKYOくまっぷ 目撃情報リスト。CSV ダウンロードも可能",
      },
    ],
    extractor: "llm-html",
    license: "東京都 利用規約",
    notes: "CSV の直接リンクが取れれば direct-csv に切替可能",
    verifiedAt: "2026-04-18",
  },
  {
    id: "iwate-pref",
    kind: "prefecture",
    prefCode: "03",
    regionLabel: "岩手県 ツキノワグマ出没状況",
    urls: [
      {
        url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/1056087.html",
        role: "list",
        hint: "人身被害状況・出没状況のテーブル",
      },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "yamagata-pref",
    kind: "prefecture",
    prefCode: "06",
    regionLabel: "山形県 クマに関する情報",
    urls: [
      {
        url: "https://www.pref.yamagata.jp/050011/kurashi/shizen/seibutsu/about_kuma/kuma_yamagata_top.html",
        role: "list",
        hint: "山形県の公式クマ情報ページ",
      },
    ],
    extractor: "llm-html",
    notes: "位置座標付き CSV が公開されているため direct-csv に切替候補",
    verifiedAt: "2026-04-18",
  },
  {
    id: "nagano-pref",
    kind: "prefecture",
    prefCode: "20",
    regionLabel: "長野県 ツキノワグマ情報マップ",
    urls: [
      {
        url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html",
        role: "list",
        hint: "長野県のクマ情報マップ案内ページ",
      },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "gifu-pref",
    kind: "prefecture",
    prefCode: "21",
    regionLabel: "岐阜県 ツキノワグマ出没マップ",
    urls: [
      {
        url: "https://www.pref.gifu.lg.jp/page/8321.html",
        role: "list",
        hint: "岐阜県のクマ出没マップ",
      },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "niigata-pref",
    kind: "prefecture",
    prefCode: "15",
    regionLabel: "新潟県 クマに関する情報",
    urls: [
      {
        url: "https://www.pref.niigata.lg.jp/sec/shizenhogoka/kuma-info.html",
        role: "list",
        hint: "新潟県の公式クマ情報ページ",
      },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "hokkaido-higuma",
    kind: "prefecture",
    prefCode: "01",
    regionLabel: "北海道 ヒグマ関連情報",
    urls: [
      {
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/higuma-top.html",
        role: "list",
        hint: "道庁のヒグマトップページ",
      },
      {
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/link.html",
        role: "list",
        hint: "市町村ヒグマ関連情報リンク集",
      },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "akita-pref",
    kind: "prefecture",
    prefCode: "05",
    regionLabel: "秋田県 ツキノワグマ対策",
    urls: [
      {
        url: "https://www.pref.akita.lg.jp/pages/archive/7080",
        role: "list",
        hint: "秋田県ツキノワグマ対策ページ",
      },
    ],
    extractor: "llm-html",
    notes: "Sharp9110/クマダスと重複するので優先度は低め",
    verifiedAt: "2026-04-18",
  },
  {
    id: "fukui-pref",
    kind: "prefecture",
    prefCode: "18",
    regionLabel: "福井県 クマ対策情報",
    urls: [
      {
        url: "https://www.pref.fukui.lg.jp/doc/shizen/kuma_d/fil/kumataisaku.html",
        role: "list",
        hint: "福井県のクマ対策情報",
      },
    ],
    extractor: "llm-html",
    verifiedAt: "2026-04-18",
  },
  {
    id: "kyoto-pref",
    kind: "prefecture",
    prefCode: "26",
    regionLabel: "京都府 ツキノワグマ",
    urls: [
      {
        url: "https://www.pref.kyoto.jp/yasei/tuki.html",
        role: "list",
        hint: "京都府のツキノワグマ情報",
      },
    ],
    extractor: "llm-html",
    notes: "位置座標付き Excel が公開されているため将来 direct 化候補",
    verifiedAt: "2026-04-18",
  },
];

export function findSourceById(id: string): DataSourceEntry | undefined {
  return DATA_SOURCES.find((s) => s.id === id);
}

export function listSourcesByPrefCode(prefCode: string): DataSourceEntry[] {
  return DATA_SOURCES.filter((s) => s.prefCode === prefCode);
}
