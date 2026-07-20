/**
 * クマの主要食料（ブナ等）の豊凶。危険度スコアの季節係数を補正するのに使う。
 *
 * === 2026-07-20 に推測値から実データへ差し替えた ===
 * 以前はテンプレートのまま全18件が note:"要検証" / "参考値" の推測値で、
 * 実際の豊凶調査を反映していなかった。実データが無い県まで level:"normal"
 * と書いてあり、「調べた結果 平年並み」なのか「調べていない」のか区別が
 * つかない状態だった。安全に関わる指標なので、根拠のあるものだけを持ち、
 * 無い県は undefined を返して補正を掛けない方針に改めた。
 *
 * 現在の裏付けは東北森林管理局のブナ開花・結実調査（src/data/buna-index.ts）。
 * 対象は青森・岩手・宮城・秋田・山形の5県のみ。他県は判定しない。
 *
 * 開花指数(7月公表)から level への対応:
 *   〜1.0  poor       … 出没が秋に集中し、人里寄りで起きる年
 *   〜2.0  fair
 *   〜3.0  normal
 *   〜4.0  good
 *   4.0〜  excellent
 * この対応は、開花指数と当年の 秋/初夏 出没比の順位相関 -0.821 (n=7)、
 * および指数1.0未満の年(2019/2023/2025)がすべて秋型だった実測に基づく。
 */
import { BUNA_INDEX, BUNA_SOURCE_URL, type BunaEntry } from "@/data/buna-index";

export type NutCropLevel = "poor" | "fair" | "normal" | "good" | "excellent";

export type NutCropEntry = {
  prefCode: string;
  year: number;
  level: NutCropLevel;
  species: ("buna" | "mizunara" | "konara" | "kuri")[];
  sourceUrl?: string;
  note?: string;
  verifiedAt: string;
};

function levelOf(flowerIndex: number): NutCropLevel {
  if (flowerIndex < 1.0) return "poor";
  if (flowerIndex < 2.0) return "fair";
  if (flowerIndex < 3.0) return "normal";
  if (flowerIndex < 4.0) return "good";
  return "excellent";
}

function toEntry(e: BunaEntry): NutCropEntry {
  return {
    prefCode: e.prefCode,
    year: e.year,
    level: levelOf(e.flowerIndex),
    species: ["buna"],
    sourceUrl: BUNA_SOURCE_URL,
    note: `東北森林管理局 ブナ開花調査 開花豊凶指数 ${e.flowerIndex}（${e.flowerClass}）`,
    verifiedAt: "2026-07-20",
  };
}

/** 実データに裏付けのある豊凶。東北5県のみ。 */
export const NUT_CROP_DATA: NutCropEntry[] = BUNA_INDEX.map(toEntry);

/**
 * その県・その年の豊凶。**根拠が無ければ undefined**（補正を掛けない）。
 *
 * 以前は前年へのフォールバックを持っていたが、ブナは隔年結実の性質が強く
 * 前年の豊凶は当年の代理にならない（2024年 豊作3.30 → 2025年 大凶作0.44）。
 * 当年の調査結果が無ければ判定しない。
 */
export function findNutCropEntry(
  prefCode: string | undefined,
  referenceDate: Date,
): NutCropEntry | undefined {
  if (!prefCode) return undefined;
  const year = referenceDate.getFullYear();
  return NUT_CROP_DATA.find((e) => e.prefCode === prefCode && e.year === year);
}

export const NUT_CROP_LABEL: Record<NutCropLevel, string> = {
  poor: "大凶作〜並凶作",
  fair: "並凶作〜やや凶作",
  normal: "平年並み",
  good: "並作〜やや豊作",
  excellent: "豊作",
};

export const NUT_CROP_MULTIPLIER: Record<NutCropLevel, number> = {
  poor: 1.4,
  fair: 1.15,
  normal: 1.0,
  good: 0.95,
  excellent: 0.9,
};
