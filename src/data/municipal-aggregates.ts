/**
 * 点座標を伴わない PDF・HTML 表形式の公式集計データを保持するレイヤー。
 * 目的: 地図ピンは立てられないが「県 / 市町村レベルの出没規模」を
 *       LLM 応答・UI 情報提供に反映させる。
 *
 * 追加方法:
 *   1. 県公式 PDF / HTML から月別・年次集計を手動転記 (or LLM 抽出)
 *   2. `PREFECTURE_AGGREGATES` に追記
 *   3. 出典 URL と取得日を必ず添える
 */

export type AggregatePeriod = {
  fiscalYear: number; // 令和7年度 = 2025
  month?: number; // 1-12。undefined なら年間
};

export type AggregateCounts = {
  sighting?: number; // 目撃・痕跡を含む出没件数
  capture?: number; // 捕獲頭数
  humanInjury?: number; // 人身被害件数
  humanInjuryVictims?: number; // 被害者数（件数と異なる場合あり）
};

export type MunicipalTier = "very-high" | "high" | "medium" | "low";

export type MunicipalAggregate = {
  id: string;
  prefCode: string;
  prefName: string;
  muniName?: string; // 空なら県全域
  period: AggregatePeriod;
  counts: AggregateCounts;
  /** 視覚マップ色分け等で tier 化された場合 (赤 very-high / 橙 high / 黄 medium / 緑 low) */
  tier?: MunicipalTier;
  /** 範囲記述 ("200-300件" 等) */
  band?: string;
};

export type InjuryIncident = {
  date: string; // YYYY-MM-DD
  city: string;
  section?: string;
  activity?: string;
  severity?: "死亡" | "重傷" | "軽傷" | "不明";
  ageBand?: string;
  gender?: "男性" | "女性" | "不明";
  notes?: string;
};

export type PrefectureAggregate = {
  prefCode: string;
  prefName: string;
  annual: MunicipalAggregate[]; // 県全域 or 市町村の年計
  monthly?: MunicipalAggregate[]; // 月別 (あれば最新年度優先)
  injuries?: InjuryIncident[]; // 人身被害の narrative list
  sources: Array<{ url: string; label: string; retrievedAt: string }>;
  notes?: string;
};

// ---------------------------------------------------------------------------
// 岩手県 seed
// 出典:
//   https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/_page_/
//     001/056/087/20260417shutubotu.pdf  (出没月別推移 R2-R7)
//   https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/1049881/_page_/
//     001/056/087/20260417map.pdf        (市町村色分け R7 visual)
// ---------------------------------------------------------------------------

const IWATE_ANNUAL_MONTHLY: Record<number, Record<number, number>> = {
  // fiscalYear -> month(1-12) -> count。R7 は 2026-04-17 時点速報
  2025: { 4: 224, 5: 534, 6: 825, 7: 1056, 8: 871, 9: 1052, 10: 3088, 11: 1620, 12: 272, 1: 75, 2: 53, 3: 69 },
  2024: { 4: 170, 5: 561, 6: 708, 7: 554, 8: 438, 9: 142, 10: 105, 11: 79, 12: 74, 1: 17, 2: 9, 3: 26 },
  2023: { 4: 212, 5: 534, 6: 896, 7: 675, 8: 561, 9: 653, 10: 1627, 11: 584, 12: 76, 1: 15, 2: 16, 3: 28 },
  2022: { 4: 110, 5: 353, 6: 588, 7: 413, 8: 450, 9: 135, 10: 51, 11: 38, 12: 18, 1: 4, 2: 3, 3: 16 },
  2021: { 4: 184, 5: 392, 6: 593, 7: 519, 8: 501, 9: 206, 10: 120, 11: 53, 12: 18, 1: 4, 2: 3, 3: 9 },
  2020: { 4: 149, 5: 373, 6: 619, 7: 613, 8: 741, 9: 374, 10: 275, 11: 145, 12: 10, 1: 4, 2: 2, 3: 11 },
};

const IWATE_R7_TIERS: Record<MunicipalTier, string[]> = {
  // 20260417map.pdf の視覚色分け (令和7年度出没・人身被害)
  "very-high": [
    "八幡平市", "岩泉町", "宮古市", "北上市", "金ケ崎町", "奥州市", "一関市",
    "雫石町", "花巻市", "盛岡市",
  ],
  high: ["二戸市", "大船渡市"],
  medium: [
    "軽米町", "一戸町", "葛巻町", "岩手町", "滝沢市", "矢巾町", "紫波町",
    "西和賀町", "遠野市", "山田町", "大槌町",
  ],
  low: [
    "洋野町", "九戸村", "久慈市", "野田村", "普代村", "田野畑村",
    "住田町", "陸前高田市", "平泉町", "釜石市",
  ],
};

function buildIwateAggregate(): PrefectureAggregate {
  const prefCode = "03";
  const prefName = "岩手県";
  const annual: MunicipalAggregate[] = [];
  const monthly: MunicipalAggregate[] = [];

  // 県全域 年計 + 月別
  for (const [fyStr, months] of Object.entries(IWATE_ANNUAL_MONTHLY)) {
    const fy = Number(fyStr);
    const yearTotal = Object.values(months).reduce((a, b) => a + b, 0);
    annual.push({
      id: `iwate-pref-${fy}`,
      prefCode,
      prefName,
      period: { fiscalYear: fy },
      counts: { sighting: yearTotal },
    });
    for (const [mStr, n] of Object.entries(months)) {
      monthly.push({
        id: `iwate-pref-${fy}-${mStr}`,
        prefCode,
        prefName,
        period: { fiscalYear: fy, month: Number(mStr) },
        counts: { sighting: n },
      });
    }
  }

  // 市町村 tier (R7 のみ、視覚マップ由来)
  const tierBand: Record<MunicipalTier, string> = {
    "very-high": "300件以上",
    high: "200〜300件",
    medium: "100〜200件",
    low: "〜100件",
  };
  for (const [tier, munis] of Object.entries(IWATE_R7_TIERS) as Array<[MunicipalTier, string[]]>) {
    for (const muni of munis) {
      annual.push({
        id: `iwate-${muni}-2025`,
        prefCode,
        prefName,
        muniName: muni,
        period: { fiscalYear: 2025 },
        counts: {},
        tier,
        band: tierBand[tier],
      });
    }
  }

  return {
    prefCode,
    prefName,
    annual,
    monthly,
    sources: [
      {
        url: "https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/056/087/20260417shutubotu.pdf",
        label: "岩手県 ツキノワグマ出没状況（月別推移 R2-R7）",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/056/087/20260417map.pdf",
        label: "令和7年度ツキノワグマ出没・人身被害（市町村色分け）",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "県が点座標を公開していないため集計のみ。R7 数値は 2026-04-17 時点の速報値。人身被害の詳細 39 件は別途 KML ソース iwate で点データ化済み",
  };
}

// ---------------------------------------------------------------------------
// 福井県 seed
// 出典: https://www.pref.fukui.lg.jp/doc/shizen/tixyouzixyuu/tukinowaguma2_d/fil/R4-8.pdf
//       (2026-04-19 時点、県全域・地域別月別集計)
// ---------------------------------------------------------------------------
const FUKUI_ANNUAL: Record<number, { sighting: number; capture: number }> = {
  2025: { sighting: 950, capture: 166 }, // R7 (2026-04-19 時点)
  2024: { sighting: 897, capture: 169 }, // R6
  2023: { sighting: 766, capture: 140 }, // R5
  2022: { sighting: 314, capture: 80 }, // R4
};

// R7 県全域 月別 (出没件数)
const FUKUI_R7_MONTHLY: Record<number, number> = {
  4: 35, 5: 90, 6: 115, 7: 102, 8: 40, 9: 62,
  10: 204, 11: 216, 12: 53, 1: 19, 2: 10, 3: 4,
};

function buildFukuiAggregate(): PrefectureAggregate {
  const prefCode = "18";
  const prefName = "福井県";
  const annual: MunicipalAggregate[] = [];
  const monthly: MunicipalAggregate[] = [];

  for (const [fyStr, counts] of Object.entries(FUKUI_ANNUAL)) {
    const fy = Number(fyStr);
    annual.push({
      id: `fukui-pref-${fy}`,
      prefCode,
      prefName,
      period: { fiscalYear: fy },
      counts: { sighting: counts.sighting, capture: counts.capture },
    });
  }
  for (const [mStr, n] of Object.entries(FUKUI_R7_MONTHLY)) {
    monthly.push({
      id: `fukui-pref-2025-${mStr}`,
      prefCode,
      prefName,
      period: { fiscalYear: 2025, month: Number(mStr) },
      counts: { sighting: n },
    });
  }

  return {
    prefCode,
    prefName,
    annual,
    monthly,
    sources: [
      {
        url: "https://www.pref.fukui.lg.jp/doc/shizen/tixyouzixyuu/tukinowaguma2_d/fil/R4-8.pdf",
        label: "福井県内のツキノワグマの出没状況（R4〜R8 月別・地域別）",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "県が点座標を公開しておらず、公式 GIS も API 未公開のため PDF 集計のみ。数値は 2026-04-19 時点速報",
  };
}

// ---------------------------------------------------------------------------
// 広島県 seed (R7 市町別・月別)
// 出典: https://www.pref.hiroshima.lg.jp/uploaded/attachment/659604.pdf (2026-02 時点)
// ---------------------------------------------------------------------------
const HIROSHIMA_R7_MUNI: Array<[string, number]> = [
  ["広島市", 176], ["呉市", 0], ["大竹市", 2], ["東広島市", 21], ["廿日市市", 29],
  ["安芸高田市", 76], ["府中町", 3], ["安芸太田町", 68], ["北広島町", 57],
  ["尾道市", 0], ["福山市", 6], ["府中市", 1], ["三原市", 26], ["世羅町", 5], ["神石高原町", 4],
  ["三次市", 54], ["庄原市", 57],
];
const HIROSHIMA_R7_MONTHLY: Record<number, number> = {
  4: 21, 5: 44, 6: 76, 7: 64, 8: 42, 9: 46, 10: 107, 11: 125, 12: 47, 1: 10, 2: 3, 3: 0,
};

function buildHiroshimaAggregate(): PrefectureAggregate {
  const prefCode = "34";
  const prefName = "広島県";
  const annual: MunicipalAggregate[] = [
    {
      id: `hiroshima-pref-2025`,
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 585 },
    },
  ];
  const monthly: MunicipalAggregate[] = [];
  for (const [muni, n] of HIROSHIMA_R7_MUNI) {
    annual.push({
      id: `hiroshima-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  for (const [mStr, n] of Object.entries(HIROSHIMA_R7_MONTHLY)) {
    monthly.push({
      id: `hiroshima-pref-2025-${mStr}`,
      prefCode, prefName,
      period: { fiscalYear: 2025, month: Number(mStr) },
      counts: { sighting: n },
    });
  }
  return {
    prefCode, prefName, annual, monthly,
    sources: [{
      url: "https://www.pref.hiroshima.lg.jp/uploaded/attachment/659604.pdf",
      label: "令和7年度ツキノワグマ目撃件数（市町・月別）",
      retrievedAt: "2026-04-21",
    }],
    notes: "ツキノワグマと疑われる目撃例や痕跡等を含む。西中国地域個体群、絶滅危惧",
  };
}

// ---------------------------------------------------------------------------
// 和歌山県 seed (R7 市町別・月別)
// 出典: https://www.pref.wakayama.lg.jp/prefg/032600/yasei/kuma_d/fil/kumamap202601-202603.pdf
// ---------------------------------------------------------------------------
const WAKAYAMA_R7_MUNI: Array<[string, number]> = [
  ["和歌山市", 0], ["海南市", 0], ["紀美野町", 2], ["岩出市", 0], ["紀の川市", 1], ["橋本市", 1],
  ["かつらぎ町", 7], ["九度山町", 2], ["高野町", 17], ["有田市", 0], ["湯浅町", 1], ["広川町", 4],
  ["有田川町", 25], ["御坊市", 0], ["美浜町", 0], ["日高町", 2], ["由良町", 0], ["印南町", 0],
  ["みなべ町", 1], ["日高川町", 8], ["田辺市", 20], ["白浜町", 0], ["上富田町", 1], ["すさみ町", 3],
  ["新宮市", 3], ["那智勝浦町", 0], ["太地町", 0], ["古座川町", 0], ["北山村", 1], ["串本町", 0],
];
const WAKAYAMA_R7_MONTHLY: Record<number, number> = {
  4: 5, 5: 5, 6: 9, 7: 10, 8: 18, 9: 10, 10: 8, 11: 15, 12: 9, 1: 3, 2: 6, 3: 1,
};

function buildWakayamaAggregate(): PrefectureAggregate {
  const prefCode = "30";
  const prefName = "和歌山県";
  const annual: MunicipalAggregate[] = [
    {
      id: `wakayama-pref-2025`,
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 99, capture: 10 },
    },
  ];
  const monthly: MunicipalAggregate[] = [];
  for (const [muni, n] of WAKAYAMA_R7_MUNI) {
    if (n === 0) continue; // 0 件は省略
    annual.push({
      id: `wakayama-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  for (const [mStr, n] of Object.entries(WAKAYAMA_R7_MONTHLY)) {
    monthly.push({
      id: `wakayama-pref-2025-${mStr}`,
      prefCode, prefName,
      period: { fiscalYear: 2025, month: Number(mStr) },
      counts: { sighting: n },
    });
  }
  return {
    prefCode, prefName, annual, monthly,
    sources: [{
      url: "https://www.pref.wakayama.lg.jp/prefg/032600/yasei/kuma_d/fil/kumamap202601-202603.pdf",
      label: "和歌山県ツキノワグマ目撃マップ（R7 市町別月別速報）",
      retrievedAt: "2026-04-21",
    }],
    notes: "紀伊半島個体群、県全体で年数十件規模。直近 3 ヶ月マップも公開されるが点座標は PDF 上の図のみ",
  };
}

// ---------------------------------------------------------------------------
export const PREFECTURE_AGGREGATES: PrefectureAggregate[] = [
  buildIwateAggregate(),
  buildFukuiAggregate(),
  buildHiroshimaAggregate(),
  buildWakayamaAggregate(),
];

export function findPrefectureAggregate(prefCode: string): PrefectureAggregate | undefined {
  return PREFECTURE_AGGREGATES.find((p) => p.prefCode === prefCode);
}

export function findMunicipalAggregates(prefCode: string, muniName?: string): MunicipalAggregate[] {
  const p = findPrefectureAggregate(prefCode);
  if (!p) return [];
  const all = [...p.annual, ...(p.monthly ?? [])];
  if (!muniName) return all.filter((a) => !a.muniName); // 県全域のみ
  return all.filter((a) => a.muniName === muniName || !a.muniName);
}
