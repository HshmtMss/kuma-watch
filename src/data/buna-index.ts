/**
 * ブナの開花・結実の豊凶指数（東北森林管理局「ブナ開花・結実調査」）。
 *
 * 出典: https://www.rinya.maff.go.jp/tohoku/sidou/buna.html
 *       令和8年7月7日プレスリリース（PDF）に1989年からの全系列が収録されている。
 *
 * なぜこれが重要か:
 *   クマ出没の季節パターンには「秋型/夏型」の2つの型があり、秋型の年は
 *   出没が秋に集中し、かつ人里寄り(森林率の低い場所)で起きる。
 *   この型はブナの豊凶で説明できる。7月の開花指数と、当年の
 *   秋(9-11月)/初夏(6-7月) 出没比の順位相関は -0.821 (n=7)。
 *
 *     年    7月開花指数(5県平均)  大凶作の県  秋/初夏比
 *     2019        0.68             4/5        3.32  秋型
 *     2020        2.04             1/5        1.46
 *     2021        1.98             0/5        0.52
 *     2022        3.64             0/5        0.34
 *     2023        0.54             5/5        2.42  秋型
 *     2024        3.30             0/5        0.39
 *     2025        0.44             5/5        2.28  秋型
 *     2026        3.90             0/5          ?   ← 豊作。秋型ではないと予測
 *
 *   開花指数が1.0を切った年(2019/2023/2025)はすべて秋型だった。
 *
 * 決定的な利点は**公表が7月上旬**であること。秋のピークの2〜3ヶ月前に
 * 出るので、事後の説明ではなく事前の予測に使える。
 *
 * 更新: 年1回、7月の公表後に scripts/fetch-buna-index.ts を実行する。
 * 対象は東北5県のみ。他県(福島=Excel/新潟=PDF/岐阜=PDF)は形式がばらばらで
 * 豊凶区分の段階数も異なるため、まずは数値指数が揃う東北を主軸にする。
 */

export type BunaClass = "大凶作" | "凶作" | "並作" | "豊作" | "大豊作";

export type BunaEntry = {
  year: number;
  prefCode: string;
  prefName: string;
  /** 7月時点の開花豊凶指数。低いほど凶作 */
  flowerIndex: number;
  flowerClass: BunaClass;
  /** 11月時点の結実豊凶指数。当年分は未公表 */
  fruitIndex?: number;
  fruitClass?: BunaClass;
};

export const BUNA_SOURCE_URL = "https://www.rinya.maff.go.jp/tohoku/sidou/buna.html";

/** 開花指数がこれ未満なら凶作とみなす */
export const BUNA_POOR_THRESHOLD = 1.0;

export const BUNA_INDEX: BunaEntry[] = [
  { year: 1989, prefCode: "02", prefName: "青森", flowerIndex: 3.4, flowerClass: "並作" },
  { year: 1989, prefCode: "03", prefName: "岩手", flowerIndex: 1.9, flowerClass: "凶作" },
  { year: 1989, prefCode: "04", prefName: "宮城", flowerIndex: 0.5, flowerClass: "大凶作" },
  { year: 1989, prefCode: "05", prefName: "秋田", flowerIndex: 2.6, flowerClass: "並作" },
  { year: 1989, prefCode: "06", prefName: "山形", flowerIndex: 1.1, flowerClass: "凶作" },
  { year: 2004, prefCode: "02", prefName: "青森", flowerIndex: 1.1, flowerClass: "凶作", fruitIndex: 0.8, fruitClass: "大凶作" },
  { year: 2004, prefCode: "03", prefName: "岩手", flowerIndex: 1.0, flowerClass: "凶作", fruitIndex: 0.4, fruitClass: "大凶作" },
  { year: 2004, prefCode: "04", prefName: "宮城", flowerIndex: 1.7, flowerClass: "凶作", fruitIndex: 2.0, fruitClass: "並作" },
  { year: 2004, prefCode: "05", prefName: "秋田", flowerIndex: 1.1, flowerClass: "凶作", fruitIndex: 0.5, fruitClass: "大凶作" },
  { year: 2004, prefCode: "06", prefName: "山形", flowerIndex: 1.0, flowerClass: "凶作", fruitIndex: 0.4, fruitClass: "大凶作" },
  { year: 2005, prefCode: "02", prefName: "青森", flowerIndex: 3.8, flowerClass: "豊作", fruitIndex: 3.4, fruitClass: "並作" },
  { year: 2005, prefCode: "03", prefName: "岩手", flowerIndex: 4.0, flowerClass: "豊作", fruitIndex: 4.3, fruitClass: "豊作" },
  { year: 2005, prefCode: "04", prefName: "宮城", flowerIndex: 4.7, flowerClass: "豊作", fruitIndex: 4.3, fruitClass: "豊作" },
  { year: 2005, prefCode: "05", prefName: "秋田", flowerIndex: 4.3, flowerClass: "豊作", fruitIndex: 3.9, fruitClass: "豊作" },
  { year: 2005, prefCode: "06", prefName: "山形", flowerIndex: 4.9, flowerClass: "豊作", fruitIndex: 4.9, fruitClass: "豊作" },
  { year: 2006, prefCode: "02", prefName: "青森", flowerIndex: 0.5, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2006, prefCode: "03", prefName: "岩手", flowerIndex: 0.4, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2006, prefCode: "04", prefName: "宮城", flowerIndex: 1.0, flowerClass: "凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2006, prefCode: "05", prefName: "秋田", flowerIndex: 0.5, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2006, prefCode: "06", prefName: "山形", flowerIndex: 0.9, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2007, prefCode: "02", prefName: "青森", flowerIndex: 1.7, flowerClass: "凶作", fruitIndex: 0.8, fruitClass: "大凶作" },
  { year: 2007, prefCode: "03", prefName: "岩手", flowerIndex: 1.5, flowerClass: "凶作", fruitIndex: 1.5, fruitClass: "凶作" },
  { year: 2007, prefCode: "04", prefName: "宮城", flowerIndex: 1.5, flowerClass: "凶作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2007, prefCode: "05", prefName: "秋田", flowerIndex: 1.8, flowerClass: "凶作", fruitIndex: 1.6, fruitClass: "凶作" },
  { year: 2007, prefCode: "06", prefName: "山形", flowerIndex: 3.0, flowerClass: "並作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2008, prefCode: "02", prefName: "青森", flowerIndex: 2.4, flowerClass: "並作", fruitIndex: 1.6, fruitClass: "凶作" },
  { year: 2008, prefCode: "03", prefName: "岩手", flowerIndex: 2.1, flowerClass: "並作", fruitIndex: 1.5, fruitClass: "凶作" },
  { year: 2008, prefCode: "04", prefName: "宮城", flowerIndex: 3.7, flowerClass: "豊作", fruitIndex: 1.7, fruitClass: "凶作" },
  { year: 2008, prefCode: "05", prefName: "秋田", flowerIndex: 1.3, flowerClass: "凶作", fruitIndex: 1.0, fruitClass: "凶作" },
  { year: 2008, prefCode: "06", prefName: "山形", flowerIndex: 2.5, flowerClass: "並作", fruitIndex: 1.5, fruitClass: "凶作" },
  { year: 2009, prefCode: "02", prefName: "青森", flowerIndex: 2.0, flowerClass: "並作", fruitIndex: 1.4, fruitClass: "凶作" },
  { year: 2009, prefCode: "03", prefName: "岩手", flowerIndex: 1.8, flowerClass: "凶作", fruitIndex: 1.1, fruitClass: "凶作" },
  { year: 2009, prefCode: "04", prefName: "宮城", flowerIndex: 3.3, flowerClass: "並作", fruitIndex: 2.0, fruitClass: "並作" },
  { year: 2009, prefCode: "05", prefName: "秋田", flowerIndex: 1.9, flowerClass: "凶作", fruitIndex: 1.2, fruitClass: "凶作" },
  { year: 2009, prefCode: "06", prefName: "山形", flowerIndex: 3.1, flowerClass: "並作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2010, prefCode: "02", prefName: "青森", flowerIndex: 1.6, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2010, prefCode: "03", prefName: "岩手", flowerIndex: 1.1, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2010, prefCode: "04", prefName: "宮城", flowerIndex: 3.2, flowerClass: "並作", fruitIndex: 0.5, fruitClass: "大凶作" },
  { year: 2010, prefCode: "05", prefName: "秋田", flowerIndex: 0.8, flowerClass: "大凶作", fruitIndex: 0.3, fruitClass: "大凶作" },
  { year: 2010, prefCode: "06", prefName: "山形", flowerIndex: 1.1, flowerClass: "凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2011, prefCode: "02", prefName: "青森", flowerIndex: 2.6, flowerClass: "並作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2011, prefCode: "03", prefName: "岩手", flowerIndex: 3.2, flowerClass: "並作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2011, prefCode: "04", prefName: "宮城", flowerIndex: 3.7, flowerClass: "豊作", fruitIndex: 1.5, fruitClass: "凶作" },
  { year: 2011, prefCode: "05", prefName: "秋田", flowerIndex: 1.8, flowerClass: "凶作", fruitIndex: 1.1, fruitClass: "凶作" },
  { year: 2011, prefCode: "06", prefName: "山形", flowerIndex: 3.3, flowerClass: "並作", fruitIndex: 2.0, fruitClass: "凶作" },
  { year: 2012, prefCode: "02", prefName: "青森", flowerIndex: 1.3, flowerClass: "凶作", fruitIndex: 0.4, fruitClass: "大凶作" },
  { year: 2012, prefCode: "03", prefName: "岩手", flowerIndex: 0.7, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2012, prefCode: "04", prefName: "宮城", flowerIndex: 2.8, flowerClass: "並作", fruitIndex: 2.2, fruitClass: "並作" },
  { year: 2012, prefCode: "05", prefName: "秋田", flowerIndex: 0.9, flowerClass: "大凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2012, prefCode: "06", prefName: "山形", flowerIndex: 0.8, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2013, prefCode: "02", prefName: "青森", flowerIndex: 3.6, flowerClass: "豊作", fruitIndex: 3.4, fruitClass: "並作" },
  { year: 2013, prefCode: "03", prefName: "岩手", flowerIndex: 4.0, flowerClass: "豊作", fruitIndex: 3.8, fruitClass: "豊作" },
  { year: 2013, prefCode: "04", prefName: "宮城", flowerIndex: 3.7, flowerClass: "豊作", fruitIndex: 5.0, fruitClass: "豊作" },
  { year: 2013, prefCode: "05", prefName: "秋田", flowerIndex: 3.6, flowerClass: "豊作", fruitIndex: 2.9, fruitClass: "並作" },
  { year: 2013, prefCode: "06", prefName: "山形", flowerIndex: 2.3, flowerClass: "並作", fruitIndex: 2.3, fruitClass: "並作" },
  { year: 2014, prefCode: "02", prefName: "青森", flowerIndex: 1.7, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2014, prefCode: "03", prefName: "岩手", flowerIndex: 0.3, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2014, prefCode: "04", prefName: "宮城", flowerIndex: 1.3, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2014, prefCode: "05", prefName: "秋田", flowerIndex: 0.8, flowerClass: "大凶作", fruitIndex: 0.4, fruitClass: "大凶作" },
  { year: 2014, prefCode: "06", prefName: "山形", flowerIndex: 0.6, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2015, prefCode: "02", prefName: "青森", flowerIndex: 2.8, flowerClass: "並作", fruitIndex: 2.0, fruitClass: "並作" },
  { year: 2015, prefCode: "03", prefName: "岩手", flowerIndex: 4.0, flowerClass: "豊作", fruitIndex: 4.2, fruitClass: "豊作" },
  { year: 2015, prefCode: "04", prefName: "宮城", flowerIndex: 3.3, flowerClass: "並作", fruitIndex: 3.4, fruitClass: "並作" },
  { year: 2015, prefCode: "05", prefName: "秋田", flowerIndex: 2.4, flowerClass: "並作", fruitIndex: 1.8, fruitClass: "凶作" },
  { year: 2015, prefCode: "06", prefName: "山形", flowerIndex: 3.4, flowerClass: "並作", fruitIndex: 3.5, fruitClass: "豊作" },
  { year: 2016, prefCode: "02", prefName: "青森", flowerIndex: 1.4, flowerClass: "凶作", fruitIndex: 0.5, fruitClass: "大凶作" },
  { year: 2016, prefCode: "03", prefName: "岩手", flowerIndex: 0.3, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2016, prefCode: "04", prefName: "宮城", flowerIndex: 0.5, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2016, prefCode: "05", prefName: "秋田", flowerIndex: 0.5, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2016, prefCode: "06", prefName: "山形", flowerIndex: 0.7, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2017, prefCode: "02", prefName: "青森", flowerIndex: 2.0, flowerClass: "並作", fruitIndex: 1.2, fruitClass: "凶作" },
  { year: 2017, prefCode: "03", prefName: "岩手", flowerIndex: 1.4, flowerClass: "凶作", fruitIndex: 1.2, fruitClass: "凶作" },
  { year: 2017, prefCode: "04", prefName: "宮城", flowerIndex: 0.7, flowerClass: "大凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2017, prefCode: "05", prefName: "秋田", flowerIndex: 1.0, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2017, prefCode: "06", prefName: "山形", flowerIndex: 0.9, flowerClass: "大凶作", fruitIndex: 0.4, fruitClass: "大凶作" },
  { year: 2018, prefCode: "02", prefName: "青森", flowerIndex: 2.0, flowerClass: "並作", fruitIndex: 1.2, fruitClass: "凶作" },
  { year: 2018, prefCode: "03", prefName: "岩手", flowerIndex: 2.8, flowerClass: "並作", fruitIndex: 1.8, fruitClass: "凶作" },
  { year: 2018, prefCode: "04", prefName: "宮城", flowerIndex: 3.0, flowerClass: "並作", fruitIndex: 2.5, fruitClass: "並作" },
  { year: 2018, prefCode: "05", prefName: "秋田", flowerIndex: 2.2, flowerClass: "並作", fruitIndex: 1.7, fruitClass: "凶作" },
  { year: 2018, prefCode: "06", prefName: "山形", flowerIndex: 4.0, flowerClass: "豊作", fruitIndex: 3.9, fruitClass: "豊作" },
  { year: 2019, prefCode: "02", prefName: "青森", flowerIndex: 1.6, flowerClass: "凶作", fruitIndex: 0.6, fruitClass: "大凶作" },
  { year: 2019, prefCode: "03", prefName: "岩手", flowerIndex: 0.8, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2019, prefCode: "04", prefName: "宮城", flowerIndex: 0.3, flowerClass: "大凶作", fruitIndex: 0.3, fruitClass: "大凶作" },
  { year: 2019, prefCode: "05", prefName: "秋田", flowerIndex: 0.6, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2019, prefCode: "06", prefName: "山形", flowerIndex: 0.1, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2020, prefCode: "02", prefName: "青森", flowerIndex: 3.2, flowerClass: "並作", fruitIndex: 2.3, fruitClass: "並作" },
  { year: 2020, prefCode: "03", prefName: "岩手", flowerIndex: 1.8, flowerClass: "凶作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2020, prefCode: "04", prefName: "宮城", flowerIndex: 1.7, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2020, prefCode: "05", prefName: "秋田", flowerIndex: 2.8, flowerClass: "並作", fruitIndex: 2.0, fruitClass: "並作" },
  { year: 2020, prefCode: "06", prefName: "山形", flowerIndex: 0.7, flowerClass: "大凶作", fruitIndex: 0.3, fruitClass: "大凶作" },
  { year: 2021, prefCode: "02", prefName: "青森", flowerIndex: 2.0, flowerClass: "並作", fruitIndex: 1.0, fruitClass: "凶作" },
  { year: 2021, prefCode: "03", prefName: "岩手", flowerIndex: 1.0, flowerClass: "凶作", fruitIndex: 0.7, fruitClass: "大凶作" },
  { year: 2021, prefCode: "04", prefName: "宮城", flowerIndex: 4.0, flowerClass: "豊作", fruitIndex: 1.7, fruitClass: "凶作" },
  { year: 2021, prefCode: "05", prefName: "秋田", flowerIndex: 1.0, flowerClass: "凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2021, prefCode: "06", prefName: "山形", flowerIndex: 1.9, flowerClass: "凶作", fruitIndex: 1.5, fruitClass: "凶作" },
  { year: 2022, prefCode: "02", prefName: "青森", flowerIndex: 3.8, flowerClass: "豊作", fruitIndex: 2.9, fruitClass: "並作" },
  { year: 2022, prefCode: "03", prefName: "岩手", flowerIndex: 3.3, flowerClass: "並作", fruitIndex: 2.7, fruitClass: "並作" },
  { year: 2022, prefCode: "04", prefName: "宮城", flowerIndex: 4.0, flowerClass: "豊作", fruitIndex: 1.3, fruitClass: "凶作" },
  { year: 2022, prefCode: "05", prefName: "秋田", flowerIndex: 3.7, flowerClass: "豊作", fruitIndex: 2.8, fruitClass: "並作" },
  { year: 2022, prefCode: "06", prefName: "山形", flowerIndex: 3.4, flowerClass: "並作", fruitIndex: 3.1, fruitClass: "並作" },
  { year: 2023, prefCode: "02", prefName: "青森", flowerIndex: 0.5, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2023, prefCode: "03", prefName: "岩手", flowerIndex: 0.4, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2023, prefCode: "04", prefName: "宮城", flowerIndex: 0.8, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2023, prefCode: "05", prefName: "秋田", flowerIndex: 0.3, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2023, prefCode: "06", prefName: "山形", flowerIndex: 0.7, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2024, prefCode: "02", prefName: "青森", flowerIndex: 3.7, flowerClass: "豊作", fruitIndex: 3.8, fruitClass: "豊作" },
  { year: 2024, prefCode: "03", prefName: "岩手", flowerIndex: 3.2, flowerClass: "並作", fruitIndex: 2.7, fruitClass: "並作" },
  { year: 2024, prefCode: "04", prefName: "宮城", flowerIndex: 3.7, flowerClass: "豊作", fruitIndex: 4.2, fruitClass: "豊作" },
  { year: 2024, prefCode: "05", prefName: "秋田", flowerIndex: 2.6, flowerClass: "並作", fruitIndex: 2.6, fruitClass: "並作" },
  { year: 2024, prefCode: "06", prefName: "山形", flowerIndex: 3.3, flowerClass: "並作", fruitIndex: 2.9, fruitClass: "並作" },
  { year: 2025, prefCode: "02", prefName: "青森", flowerIndex: 0.5, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2025, prefCode: "03", prefName: "岩手", flowerIndex: 0.6, flowerClass: "大凶作", fruitIndex: 0.1, fruitClass: "大凶作" },
  { year: 2025, prefCode: "04", prefName: "宮城", flowerIndex: 0.3, flowerClass: "大凶作", fruitIndex: 0.2, fruitClass: "大凶作" },
  { year: 2025, prefCode: "05", prefName: "秋田", flowerIndex: 0.4, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2025, prefCode: "06", prefName: "山形", flowerIndex: 0.4, flowerClass: "大凶作", fruitIndex: 0.0, fruitClass: "大凶作" },
  { year: 2026, prefCode: "02", prefName: "青森", flowerIndex: 3.4, flowerClass: "並作" },
  { year: 2026, prefCode: "03", prefName: "岩手", flowerIndex: 3.5, flowerClass: "豊作" },
  { year: 2026, prefCode: "04", prefName: "宮城", flowerIndex: 5.0, flowerClass: "豊作" },
  { year: 2026, prefCode: "05", prefName: "秋田", flowerIndex: 3.6, flowerClass: "豊作" },
  { year: 2026, prefCode: "06", prefName: "山形", flowerIndex: 4.0, flowerClass: "豊作" },
];

/** その年の5県平均の開花指数と、凶作の県数 */
export function bunaSummary(year: number): {
  avgFlower: number;
  poorPrefs: number;
  totalPrefs: number;
} | null {
  const rows = BUNA_INDEX.filter((e) => e.year === year);
  if (!rows.length) return null;
  return {
    avgFlower: rows.reduce((a, b) => a + b.flowerIndex, 0) / rows.length,
    poorPrefs: rows.filter((e) => e.flowerIndex < BUNA_POOR_THRESHOLD).length,
    totalPrefs: rows.length,
  };
}
