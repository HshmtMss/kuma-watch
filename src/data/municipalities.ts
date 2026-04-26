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
        label: "北海道 ヒグマに注意（基本情報）",
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/kihon.html",
        kind: "official_info",
      },
      {
        label: "市町村ヒグマ関連情報リンク集",
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/joho.html",
        kind: "official_info",
      },
      {
        label: "ヒグマ警報及び注意報等",
        url: "https://www.pref.hokkaido.lg.jp/ks/skn/108365.html",
        kind: "official_info",
      },
      {
        label: "北海道警察 ヒグマに注意",
        url: "https://www.police.pref.hokkaido.lg.jp/info/chiiki/bear/bear.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
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
        label: "秋田県 ツキノワグマ情報",
        url: "https://www.pref.akita.lg.jp/pages/archive/23295",
        kind: "official_info",
      },
      {
        label: "秋田県 クマ被害防止対策の強化",
        url: "https://www.pref.akita.lg.jp/pages/archive/92498",
        kind: "official_info",
      },
      {
        label: "クマダス（秋田県協力）",
        url: "https://kumadas.net/",
        kind: "official_map",
        note: "秋田県・大館市などと協力したマップ",
      },
    ],
    verifiedAt: "2026-04-26",
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
        label: "新潟県 ツキノワグマによる人身被害を防ぐために",
        url: "https://www.pref.niigata.lg.jp/site/tyoujyutaisakusienn/1319666477308.html",
        kind: "official_info",
      },
      {
        label: "にいがたクマ出没マップ",
        url: "https://www.pref.niigata.lg.jp/site/tyoujyutaisakusienn/241009kumamap.html",
        kind: "official_map",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "20",
    prefNameJa: "長野県",
    prefNameEn: "Nagano",
    bearSpecies: ["tsukinowa"],
    priority: 1,
    summary:
      "県公式は「けものおと2」アプリと月別 PDF で公開。市町村が独自に出没マップを公開しているケースもあります。",
    links: [
      {
        label: "長野県 ツキノワグマについて知っていただきたいこと",
        url: "https://www.pref.nagano.lg.jp/yasei/bear.html",
        kind: "official_info",
      },
      {
        label: "ツキノワグマ情報マップ案内（けものおと2）",
        url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html",
        kind: "official_app",
        note: "目撃情報の閲覧は「けものおと2」アプリ。Web では月別 PDF のみ公開",
      },
      {
        label: "軽井沢さるクマ情報マップ（軽井沢町）",
        url: "https://www.thread.ne.jp/kta2/sarukuma.html",
        kind: "official_map",
        note: "軽井沢町・観光協会のリアルタイム位置マップ",
      },
      {
        label: "茅野市 クマ出没情報",
        url: "https://www.city.chino.lg.jp/soshiki/nourin/kumamokugeki.html",
        kind: "official_info",
      },
      {
        label: "佐久市 ツキノワグマ出没情報",
        url: "https://www.city.saku.nagano.jp/kankyo_shizen/dobutsu_pet/yaseidoubutu/syutsubotsu.html",
        kind: "official_info",
      },
      {
        label: "松本市 クマの目撃情報",
        url: "https://www.city.matsumoto.nagano.jp/soshiki/216/180997.html",
        kind: "official_info",
      },
      {
        label: "長野市 野生獣（クマなど）の出没",
        url: "https://www.city.nagano.nagano.jp/n162000/contents/p001080.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
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
        label: "岐阜県に生息するクマ（ツキノワグマ）について",
        url: "https://www.pref.gifu.lg.jp/page/4964.html",
        kind: "official_info",
      },
      {
        label: "岐阜県オープンデータ（クマ出没年度別 Shapefile/CSV）",
        url: "https://gifu-opendata.pref.gifu.lg.jp/dataset/c11265-010",
        kind: "open_data",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "18",
    prefNameJa: "福井県",
    prefNameEn: "Fukui",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary: "県の専用ポータル「福井クマ情報」で出没情報を公開しています。",
    links: [
      {
        label: "福井クマ情報（県公式ポータル）",
        url: "https://tsukinowaguma.pref.fukui.lg.jp/",
        kind: "official_map",
      },
      {
        label: "福井県 ツキノワグマによる人身被害防止のために",
        url: "https://www.pref.fukui.lg.jp/doc/shizen/tixyouzixyuu/tukinowaguma2.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
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
        label: "京都府 ツキノワグマについて（出没情報）",
        url: "https://www.pref.kyoto.jp/choujyu/kumanitsuite.html",
        kind: "official_info",
      },
      {
        label: "京都府 クマ目撃情報（BODIK オープンデータ）",
        url: "https://data.bodik.jp/dataset/260002_bear",
        kind: "open_data",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "23",
    prefNameJa: "愛知県",
    prefNameEn: "Aichi",
    bearSpecies: ["tsukinowa"],
    priority: 3,
    summary:
      "三河山間部にツキノワグマが生息（絶滅危惧 IA 類）。県は出没予測・確認情報を公開。",
    links: [
      {
        label: "愛知県 ツキノワグマについて",
        url: "https://www.pref.aichi.jp/soshiki/shizen/tsukinowaguma.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "25",
    prefNameJa: "滋賀県",
    prefNameEn: "Shiga",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary: "県北部・湖北エリアにツキノワグマが生息。県・大津市が情報を公開。",
    links: [
      {
        label: "滋賀県 野生鳥獣の保護（ツキノワグマ）について",
        url: "https://www.pref.shiga.lg.jp/ippan/kankyoshizen/shizen/322859.html",
        kind: "official_info",
      },
      {
        label: "大津市 ツキノワグマ出没マップ",
        url: "https://www.city.otsu.lg.jp/soshiki/025/1605/g/t/1390705956292.html",
        kind: "official_map",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "30",
    prefNameJa: "和歌山県",
    prefNameEn: "Wakayama",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary:
      "紀伊半島中部にツキノワグマが生息。第二種特定鳥獣管理計画の対象。",
    links: [
      {
        label: "和歌山県 ツキノワグマ",
        url: "https://www.pref.wakayama.lg.jp/prefg/032600/yasei/kuma.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "32",
    prefNameJa: "島根県",
    prefNameEn: "Shimane",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary:
      "西中国山地のツキノワグマ。県中山間地域研究センターが豊凶調査と出没予測を公開。",
    links: [
      {
        label: "島根県 ツキノワグマの被害にあわないために",
        url: "https://www.pref.shimane.lg.jp/industry/norin/choujyu_taisaku/kuma_higaitaisaku.html",
        kind: "official_info",
      },
      {
        label: "島根県 クマの出没・被害状況と出没予測",
        url: "https://www.pref.shimane.lg.jp/life/region/kikan/chusankan/choju/kuma_.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "34",
    prefNameJa: "広島県",
    prefNameEn: "Hiroshima",
    bearSpecies: ["tsukinowa"],
    priority: 2,
    summary:
      "西中国山地個体群（島根・山口と共通）。県の野生鳥獣保護管理ポータルで情報公開。",
    links: [
      {
        label: "広島県 ツキノワグマ（保護管理ポータル）",
        url: "https://www.pref.hiroshima.lg.jp/site/wildlife-management/wm-bear-main.html",
        kind: "official_info",
      },
      {
        label: "広島県 ツキノワグマが活発に動き回る時期です",
        url: "https://www.pref.hiroshima.lg.jp/site/wildlife-management/wm-bear02-attention.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
  },
  {
    prefCode: "14",
    prefNameJa: "神奈川県",
    prefNameEn: "Kanagawa",
    bearSpecies: ["tsukinowa"],
    priority: 3,
    summary: "丹沢・道志山系にツキノワグマが生息。県が情報を公開。",
    links: [
      {
        label: "神奈川県 ツキノワグマ情報",
        url: "https://www.pref.kanagawa.jp/docs/t4i/cnt/f3813/index.html",
        kind: "official_info",
      },
    ],
    verifiedAt: "2026-04-26",
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
