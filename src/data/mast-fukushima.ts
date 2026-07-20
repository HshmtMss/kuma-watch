/**
 * 福島県の堅果類（ブナ・ミズナラ・コナラ）豊凶調査。
 *
 * 出典: https://www.pref.fukushima.lg.jp/sec/16035b/kennkaruityousakekka.html
 *       Excel「令和4〜8年度の豊凶調査の結果」(/uploaded/life/901863_2663542_misc.xlsx)
 *
 * 東北森林管理局(src/data/buna-index.ts)との違い:
 *   - 数値の豊凶指数が無く、区分の文字だけ（大凶作/凶作/並作/豊作）
 *   - ブナに加えてミズナラ・コナラも調査している
 *   - 開花調査(予測)と結実調査(8月頃・確定)の両方を公表
 *
 * ブナの開花区分は出没の型とよく対応する:
 *   2022 並作   → 秋/初夏 0.34（夏型）
 *   2023 大凶作 → 2.42（秋型）
 *   2024 並作   → 0.39（夏型）
 *   2025 大凶作 → 2.28（秋型）
 *   2026 豊作   → 秋型ではないと予測
 *
 * 注意: ミズナラは同じ年でもブナと一致しない（2025年は開花「豊作」だが
 * 結実は「凶作」）。クマは複数樹種を食べるので、ブナだけで断定はできない。
 * ここでは3樹種すべてを保持し、判定にどれを使うかは利用側で決める。
 */

export type MastClass = "大凶作" | "凶作" | "並作" | "豊作";
export type MastSpecies = "buna" | "mizunara" | "konara";

export type FukushimaMastEntry = {
  year: number;
  species: MastSpecies;
  /** 開花調査（春〜初夏。秋の結実の予測） */
  flowerClass: MastClass;
  /** 結実調査（8月頃。確定値）。当年分は未公表 */
  fruitClass?: MastClass;
};

export const FUKUSHIMA_MAST_SOURCE_URL =
  "https://www.pref.fukushima.lg.jp/sec/16035b/kennkaruityousakekka.html";

export const FUKUSHIMA_MAST: FukushimaMastEntry[] = [
  { year: 2022, species: "buna", flowerClass: "並作", fruitClass: "豊作" },
  { year: 2022, species: "mizunara", flowerClass: "並作", fruitClass: "並作" },
  { year: 2022, species: "konara", flowerClass: "豊作", fruitClass: "並作" },
  { year: 2023, species: "buna", flowerClass: "大凶作", fruitClass: "凶作" },
  { year: 2023, species: "mizunara", flowerClass: "並作", fruitClass: "並作" },
  { year: 2023, species: "konara", flowerClass: "並作", fruitClass: "並作" },
  { year: 2024, species: "buna", flowerClass: "並作", fruitClass: "並作" },
  { year: 2024, species: "mizunara", flowerClass: "豊作", fruitClass: "豊作" },
  { year: 2024, species: "konara", flowerClass: "豊作", fruitClass: "並作" },
  { year: 2025, species: "buna", flowerClass: "大凶作", fruitClass: "凶作" },
  { year: 2025, species: "mizunara", flowerClass: "豊作", fruitClass: "凶作" },
  { year: 2025, species: "konara", flowerClass: "並作", fruitClass: "凶作" },
  { year: 2026, species: "buna", flowerClass: "豊作" },
  { year: 2026, species: "mizunara", flowerClass: "並作" },
  { year: 2026, species: "konara", flowerClass: "豊作" },
];

/** その年のブナの開花区分。無ければ undefined */
export function fukushimaBunaClass(year: number): MastClass | undefined {
  return FUKUSHIMA_MAST.find((e) => e.year === year && e.species === "buna")
    ?.flowerClass;
}
