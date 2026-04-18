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

/**
 * クマにとっての主要食料（ブナ・ミズナラ・コナラ・クリ）の豊凶状況。
 * 各都道府県の林業課・林野庁地方局が毎年 7〜9 月頃に調査結果を公表する。
 *
 * level:
 *   poor      = 並凶作〜大凶作（クマの人里出没が顕著に増える）
 *   fair      = 並凶作〜並作に近い（注意）
 *   normal    = 平年並み
 *   good      = 並作〜並豊作
 *   excellent = 豊作（人里出没は減る傾向）
 *
 * 注意: 以下はテンプレートの初期値。各自治体の公式発表を基に
 * verifiedAt と sourceUrl を更新すること。
 * 本番運用では年 1 回（8〜10 月）に各都道府県の情報で更新する運用を想定。
 */
export const NUT_CROP_DATA: NutCropEntry[] = [
  { prefCode: "01", year: 2025, level: "normal", species: ["mizunara", "konara"], verifiedAt: "2026-04-18", note: "ヒグマは堅果以外の食物源も多く、補正影響は限定的（要検証）" },
  { prefCode: "02", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証 / 青森県ブナ結実調査を参照" },
  { prefCode: "03", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証 / 岩手県森林整備部調査を参照" },
  { prefCode: "04", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "05", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証 / 秋田県林業研究研修センター調査を参照" },
  { prefCode: "06", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証 / 山形県森林研究研修センター調査を参照" },
  { prefCode: "07", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "15", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証 / 新潟県森林研究所調査を参照" },
  { prefCode: "16", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "17", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "18", year: 2025, level: "normal", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "19", year: 2025, level: "normal", species: ["buna", "mizunara", "konara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "20", year: 2025, level: "normal", species: ["buna", "mizunara", "konara"], verifiedAt: "2026-04-18", note: "要検証 / 長野県林業総合センター調査を参照" },
  { prefCode: "21", year: 2025, level: "normal", species: ["buna", "mizunara", "konara"], verifiedAt: "2026-04-18", note: "要検証" },
  { prefCode: "26", year: 2025, level: "normal", species: ["mizunara", "konara"], verifiedAt: "2026-04-18", note: "要検証" },
  // 2023 年（参考: ブナ・ナラが全国的に大凶作でクマ出没過去最多）
  { prefCode: "02", year: 2023, level: "poor", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "参考値: 全国的な大凶作年" },
  { prefCode: "05", year: 2023, level: "poor", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "参考値: 全国的な大凶作年" },
  { prefCode: "03", year: 2023, level: "poor", species: ["buna", "mizunara"], verifiedAt: "2026-04-18", note: "参考値: 全国的な大凶作年" },
];

export function findNutCropEntry(
  prefCode: string | undefined,
  referenceDate: Date,
): NutCropEntry | undefined {
  if (!prefCode) return undefined;
  const year = referenceDate.getFullYear();
  return (
    NUT_CROP_DATA.find((e) => e.prefCode === prefCode && e.year === year) ??
    NUT_CROP_DATA.find((e) => e.prefCode === prefCode && e.year === year - 1)
  );
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
