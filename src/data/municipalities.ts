export type MunicipalLink = {
  label: string;
  url: string;
  kind: "official_info" | "official_map" | "official_app" | "open_data" | "social" | "contact";
  note?: string;
};

export type MunicipalEntry = {
  prefCode: string;
  prefNameJa: string;
  prefNameEn: string;
  bearSpecies: ("tsukinowa" | "higuma")[];
  priority: number;
  links: MunicipalLink[];
  summary: string;
  verifiedAt: string;
};

export const MUNICIPALITIES: MunicipalEntry[] = [
  {
    prefCode: "01",
    prefNameJa: "北海道",
    prefNameEn: "Hokkaido",
    bearSpecies: ["higuma"],
    priority: 1,
    summary:
      "ヒグマの生息域。道や市町村の公式サイトで最新出没情報を確認できます。",
    links: [
      {
        label: "北海道 ヒグマ関連情報",
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/higuma-top.html",
        kind: "official_info",
      },
      {
        label: "市町村ヒグマ関連情報リンク集",
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/link.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "05",
    prefNameJa: "秋田県",
    prefNameEn: "Akita",
    bearSpecies: ["tsukinowa"],
    priority: 1,
    summary:
      "ツキノワグマ出没情報は県と「クマダス」で公開。投稿型マップも充実。",
    links: [
      {
        label: "秋田県 ツキノワグマ対策",
        url: "https://www.pref.akita.lg.jp/pages/archive/7080",
        kind: "official_info",
      },
      {
        label: "クマダス（秋田県協力）",
        url: "https://kumadas.net/",
        kind: "official_map",
        note: "秋田県・大館市などと協力したマップ",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "03",
    prefNameJa: "岩手県",
    prefNameEn: "Iwate",
    bearSpecies: ["tsukinowa"],
    priority: 1,
    summary:
      "岩手県はクマ出没マップと「Bears」アプリを運用。市町村単位の情報も豊富。",
    links: [
      {
        label: "岩手県 ツキノワグマ出没状況",
        url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/1056087.html",
        kind: "official_info",
      },
      {
        label: "Bears（岩手県採用アプリ）",
        url: "https://golden-f.com/bears",
        kind: "official_app",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "06",
    prefNameJa: "山形県",
    prefNameEn: "Yamagata",
    bearSpecies: ["tsukinowa"],
    priority: 1,
    summary: "クマ目撃マップを CSV で公開。オープンデータ化が進んでいます。",
    links: [
      {
        label: "山形県 クマに関する情報",
        url: "https://www.pref.yamagata.jp/050011/kurashi/shizen/seibutsu/about_kuma/kuma_yamagata_top.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "15",
    prefNameJa: "新潟県",
    prefNameEn: "Niigata",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary: "クマ出没状況と注意喚起を県公式サイトで発信しています。",
    links: [
      {
        label: "新潟県 クマに関する情報",
        url: "https://www.pref.niigata.lg.jp/sec/shizenhogoka/kuma-info.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "20",
    prefNameJa: "長野県",
    prefNameEn: "Nagano",
    bearSpecies: ["tsukinowa"],
    priority: 1,
    summary:
      "ツキノワグマ情報マップ（Web + スマホアプリ）で県内の目撃情報を可視化。",
    links: [
      {
        label: "ツキノワグマ情報マップ",
        url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html",
        kind: "official_map",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "21",
    prefNameJa: "岐阜県",
    prefNameEn: "Gifu",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary: "岐阜県はクマ出没マップを公開。山間部の遭遇に注意が必要です。",
    links: [
      {
        label: "岐阜県 ツキノワグマ出没マップ",
        url: "https://www.pref.gifu.lg.jp/page/8321.html",
        kind: "official_map",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "18",
    prefNameJa: "福井県",
    prefNameEn: "Fukui",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary: "クマ出没情報を県と鯖江市などでオープンデータ化。",
    links: [
      {
        label: "福井県 クマ対策情報",
        url: "https://www.pref.fukui.lg.jp/doc/shizen/kuma_d/fil/kumataisaku.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "13",
    prefNameJa: "東京都",
    prefNameEn: "Tokyo",
    bearSpecies: ["tsukinowa"],
    priority: 1,
    summary:
      "奥多摩・高尾山・檜原村などで目撃情報。TOKYOくまっぷでオープンデータ公開。",
    links: [
      {
        label: "TOKYOくまっぷ（東京都環境局）",
        url: "https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/bear/witness",
        kind: "official_map",
      },
    ],
    verifiedAt: "2026-04-18",
  },
  {
    prefCode: "26",
    prefNameJa: "京都府",
    prefNameEn: "Kyoto",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary: "クマ出没情報をオープンデータで公開（緯度経度付き）。",
    links: [
      {
        label: "京都府 ツキノワグマ",
        url: "https://www.pref.kyoto.jp/yasei/tuki.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-18",
  },
];

export function findMunicipalityByPrefName(
  name: string | undefined,
): MunicipalEntry | undefined {
  if (!name) return undefined;
  return MUNICIPALITIES.find(
    (m) => name.includes(m.prefNameJa) || m.prefNameJa.includes(name),
  );
}

export function findMunicipalityByPrefCode(
  code: string | undefined,
): MunicipalEntry | undefined {
  if (!code) return undefined;
  return MUNICIPALITIES.find((m) => m.prefCode === code);
}
