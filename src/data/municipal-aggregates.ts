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
// 神奈川県 seed (R7 ナラティブリスト)
// 出典: https://www.pref.kanagawa.jp/documents/15077/kuma_r7_0330.pdf
// ---------------------------------------------------------------------------
const KANAGAWA_R7_MONTHLY: Record<number, number> = {
  4: 2, 5: 13, 6: 10, 7: 9, 8: 8, 9: 7, 10: 10, 11: 14, 12: 5, 1: 9, 2: 3, 3: 1,
};
const KANAGAWA_R7_MUNI: Array<[string, number]> = [
  ["相模原市", 15], ["松田町", 15], ["山北町", 16], ["清川村", 12], ["伊勢原市", 10],
  ["秦野市", 13], ["厚木市", 4], ["愛川町", 5],
];

function buildKanagawaAggregate(): PrefectureAggregate {
  const prefCode = "14";
  const prefName = "神奈川県";
  const annual: MunicipalAggregate[] = [
    {
      id: "kanagawa-pref-2025",
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 91 },
    },
  ];
  for (const [muni, n] of KANAGAWA_R7_MUNI) {
    annual.push({
      id: `kanagawa-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = Object.entries(KANAGAWA_R7_MONTHLY).map(([m, n]) => ({
    id: `kanagawa-pref-2025-${m}`,
    prefCode, prefName,
    period: { fiscalYear: 2025, month: Number(m) },
    counts: { sighting: n },
  }));
  return {
    prefCode, prefName, annual, monthly,
    sources: [{
      url: "https://www.pref.kanagawa.jp/documents/15077/kuma_r7_0330.pdf",
      label: "【令和7年度】目撃等情報（令和7年4月〜令和8年3月）",
      retrievedAt: "2026-04-21",
    }],
    notes: "丹沢山地中心に 91 件 (目撃・痕跡 84 + 捕殺・錯誤捕獲等 7)。区分『人里』『山中』併記。全件の日付・市町村・状況が PDF に narrative で記載",
  };
}

// ---------------------------------------------------------------------------
// 愛知県 seed (過去5年ナラティブリスト)
// 出典: https://www.pref.aichi.jp/uploaded/attachment/612858.pdf
// ---------------------------------------------------------------------------
const AICHI_ANNUAL: Record<number, number> = {
  2025: 22, 2024: 19, 2023: 19, 2022: 20, 2021: 12,
};
const AICHI_R7_MUNI: Array<[string, number]> = [
  ["豊田市", 11], ["東栄町", 6], ["豊根村", 3], ["瀬戸市", 2], ["設楽町", 1], ["新城市", 3],
];

function buildAichiAggregate(): PrefectureAggregate {
  const prefCode = "23";
  const prefName = "愛知県";
  const annual: MunicipalAggregate[] = [];
  for (const [fyStr, n] of Object.entries(AICHI_ANNUAL)) {
    annual.push({
      id: `aichi-pref-${fyStr}`,
      prefCode, prefName,
      period: { fiscalYear: Number(fyStr) },
      counts: { sighting: n },
    });
  }
  for (const [muni, n] of AICHI_R7_MUNI) {
    annual.push({
      id: `aichi-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  return {
    prefCode, prefName, annual,
    sources: [{
      url: "https://www.pref.aichi.jp/uploaded/attachment/612858.pdf",
      label: "ツキノワグマ確認情報（過去5年間）",
      retrievedAt: "2026-04-21",
    }],
    notes: "県北東部（豊田市北部・設楽町・東栄町・豊根村・新城市・瀬戸市等）に出没限定。年間 12〜22 件。定点カメラ撮影・錯誤捕獲を含む",
  };
}

// ---------------------------------------------------------------------------
// 長野県 seed (R7 全年月別 + R7 市町村別 + R8 4月前半速報)
// R7: 県公式 月別目撃情報 PDF 12 本から手動集計 (2,346 件 / 71 市町村)
// R8: 417-mokugeki1.pdf (令和8年4月17日現在) 30 件
// ---------------------------------------------------------------------------
const NAGANO_R7_MONTHLY: Record<number, number> = {
  // fiscalYear 2025 = 令和7年度 (2025/4 〜 2026/3)
  4: 46, 5: 137, 6: 402, 7: 351, 8: 342, 9: 302,
  10: 366, 11: 293, 12: 82, 1: 8, 2: 6, 3: 11,
};
// R7 市町村別件数（月別 PDF 12 本を集計）。0 件の市町村は省略。
const NAGANO_R7_MUNI: Array<[string, number]> = [
  ["大町市", 288], ["長野市", 199], ["軽井沢町", 131], ["安曇野市", 102], ["信濃町", 102],
  ["王滝村", 96], ["塩尻市", 90], ["木曽町", 86], ["松本市", 82], ["小谷村", 70],
  ["飯田市", 68], ["上松町", 55], ["高山村", 54], ["上田市", 51], ["飯山市", 49],
  ["木島平村", 49], ["山ノ内町", 46], ["南木曽町", 46], ["小川村", 42], ["栄村", 41],
  ["須坂市", 38], ["辰野町", 37], ["中野市", 37], ["大桑村", 29], ["高森町", 27],
  ["白馬村", 25], ["中川村", 24], ["阿智村", 23], ["朝日村", 22], ["松川町", 22],
  ["木祖村", 20], ["富士見町", 19], ["伊那市", 19], ["飯綱町", 18], ["佐久市", 16],
  ["大鹿村", 16], ["野沢温泉村", 15], ["松川村", 15], ["千曲市", 14], ["泰阜村", 14],
  ["喬木村", 13], ["生坂村", 12], ["小諸市", 11], ["岡谷市", 11], ["池田町", 10],
  ["駒ヶ根市", 9], ["下條村", 8], ["坂城町", 8], ["箕輪町", 8], ["筑北村", 7],
  ["御代田町", 6], ["天龍村", 5], ["長和町", 4], ["小布施町", 4], ["阿南町", 3],
  ["諏訪市", 3], ["飯島町", 3], ["麻績村", 3], ["根羽村", 3], ["青木村", 3],
  ["小海町", 2], ["宮田村", 2], ["茅野市", 2], ["南牧村", 2], ["東御市", 1],
  ["下諏訪町", 1], ["南箕輪村", 1], ["豊丘村", 1], ["佐久穂町", 1], ["立科町", 1],
  ["原村", 1],
];
const NAGANO_R8_EARLY_MUNI: Array<[string, number]> = [
  ["大町市", 2], ["高山村", 2], ["南木曽町", 1], ["長野市", 4], ["軽井沢町", 2],
  ["山ノ内町", 1], ["安曇野市", 3], ["白馬村", 2], ["塩尻市", 2], ["信濃町", 4],
  ["中野市", 1], ["木島平村", 2], ["飯綱町", 2], ["王滝村", 2],
];

function buildNaganoAggregate(): PrefectureAggregate {
  const prefCode = "20";
  const prefName = "長野県";
  const annual: MunicipalAggregate[] = [
    {
      id: "nagano-pref-2025",
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 2346 }, // R7 年計
    },
    {
      id: "nagano-pref-2026-early",
      prefCode, prefName,
      period: { fiscalYear: 2026, month: 4 },
      counts: { sighting: 30 }, // R8 4月1〜17日速報
    },
  ];
  for (const [muni, n] of NAGANO_R7_MUNI) {
    annual.push({
      id: `nagano-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  for (const [muni, n] of NAGANO_R8_EARLY_MUNI) {
    annual.push({
      id: `nagano-${muni}-2026-early`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2026, month: 4 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = Object.entries(NAGANO_R7_MONTHLY).map(([m, n]) => ({
    id: `nagano-pref-2025-${m}`,
    prefCode, prefName,
    period: { fiscalYear: 2025, month: Number(m) },
    counts: { sighting: n },
  }));
  return {
    prefCode, prefName, annual, monthly,
    sources: [
      {
        url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/kuma-map.html",
        label: "長野県 ツキノワグマ情報マップ（PDF 一覧）",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/documents/417-mokugeki1.pdf",
        label: "ツキノワグマ出没（目撃）情報（令和8年4月17日現在）",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.nagano.lg.jp/shinrin/sangyo/ringyo/choju/joho/documents/20260331-mokugeki.pdf",
        label: "令和7年度 月別目撃情報（4月〜3月 各月 PDF）",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "県公式『けものおと2』アプリ連携の月次リスト。R7 (2025/4〜2026/3) は月別 PDF 12 本を集計して 2,346 件・71 市町村。最多は大町市 288 件、長野市 199 件、軽井沢町 131 件。R8 は 4/1〜4/17 の初期 30 件のみ確定",
  };
}

// ---------------------------------------------------------------------------
// 兵庫県 seed (R6 年計 + R7 4-8月 + 地域別)
// 出典: https://web.pref.hyogo.lg.jp/nk20/documents/shiryo2_mokugekikonseki.pdf
// ---------------------------------------------------------------------------
const HYOGO_R6_MONTHLY: Record<number, number> = {
  4: 18, 5: 72, 6: 141, 7: 107, 8: 138, 9: 167, 10: 285, 11: 148, 12: 42, 1: 4, 2: 1, 3: 5,
};
const HYOGO_R7_MONTHLY_PARTIAL: Record<number, number> = {
  4: 37, 5: 119, 6: 53, 7: 72, 8: 45,
};
// 地域 (R7 4-8月速報) → muniName マッピング近似
const HYOGO_R7_REGION: Array<[string, number, number]> = [
  // [region, R7件数, 過去5年平均]
  ["但馬北部", 160, 146],
  ["但馬南部", 34, 51],
  ["西播磨", 62, 36],
  ["丹波", 23, 15],
  ["中播磨", 19, 25],
  ["北播磨", 19, 4],
  ["阪神", 9, 6],
  ["東播磨", 0, 0],
  ["神戸", 0, 1],
];

function buildHyogoAggregate(): PrefectureAggregate {
  const prefCode = "28";
  const prefName = "兵庫県";
  const annual: MunicipalAggregate[] = [
    {
      id: "hyogo-pref-2024",
      prefCode, prefName,
      period: { fiscalYear: 2024 },
      counts: { sighting: 1128 },
    },
    {
      id: "hyogo-pref-2025-partial",
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 326 }, // 4-8月のみ速報
    },
  ];
  // 地域別 R7 (市町村ではなく地域カテゴリ)
  for (const [region, n] of HYOGO_R7_REGION) {
    if (n === 0) continue;
    annual.push({
      id: `hyogo-${region}-2025`,
      prefCode, prefName, muniName: region,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = [];
  for (const [m, n] of Object.entries(HYOGO_R6_MONTHLY)) {
    monthly.push({
      id: `hyogo-pref-2024-${m}`,
      prefCode, prefName,
      period: { fiscalYear: 2024, month: Number(m) },
      counts: { sighting: n },
    });
  }
  for (const [m, n] of Object.entries(HYOGO_R7_MONTHLY_PARTIAL)) {
    monthly.push({
      id: `hyogo-pref-2025-${m}`,
      prefCode, prefName,
      period: { fiscalYear: 2025, month: Number(m) },
      counts: { sighting: n },
    });
  }
  return {
    prefCode, prefName, annual, monthly,
    sources: [{
      url: "https://web.pref.hyogo.lg.jp/nk20/documents/shiryo2_mokugekikonseki.pdf",
      label: "ツキノワグマの目撃・痕跡件数（R7 8月末・R6 全年・過去5年平均）",
      retrievedAt: "2026-04-21",
    }],
    notes: "県森林動物研究センター調査。県全域を 9 地域 (但馬北部・南部/西中北播磨/丹波/阪神/東播磨/神戸) に分類。但馬北部 (豊岡・香美・新温泉・養父・朝来・香住等) が圧倒的多数",
  };
}

// ---------------------------------------------------------------------------
// 大阪府 seed (R7 4-12月速報 + R6 年計、北摂中心)
// 出典: https://www.pref.osaka.lg.jp/o120140/doubutu/yaseidoubutu/shutsubotsu_r7.html
// ---------------------------------------------------------------------------
const OSAKA_R7_MUNI: Array<[string, number]> = [
  ["能勢町", 8], ["豊能町", 8], ["島本町", 3], ["高槻市", 2],
  ["茨木市", 1], ["池田市", 1], ["泉南市", 1], ["泉佐野市", 1],
];
const OSAKA_R7_MONTHLY: Record<number, number> = {
  4: 1, 5: 1, 6: 1, 7: 2, 8: 5, 9: 5, 10: 3, 11: 6, 12: 1,
};

function buildOsakaAggregate(): PrefectureAggregate {
  const prefCode = "27";
  const prefName = "大阪府";
  const annual: MunicipalAggregate[] = [
    {
      id: "osaka-pref-2025",
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 25 }, // R7 2026-12-11 時点速報
    },
    {
      id: "osaka-pref-2024",
      prefCode, prefName,
      period: { fiscalYear: 2024 },
      counts: { sighting: 19 },
    },
  ];
  for (const [muni, n] of OSAKA_R7_MUNI) {
    annual.push({
      id: `osaka-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = Object.entries(OSAKA_R7_MONTHLY).map(([m, n]) => ({
    id: `osaka-pref-2025-${m}`,
    prefCode, prefName,
    period: { fiscalYear: 2025, month: Number(m) },
    counts: { sighting: n },
  }));
  return {
    prefCode, prefName, annual, monthly,
    sources: [{
      url: "https://www.pref.osaka.lg.jp/o120140/doubutu/yaseidoubutu/shutsubotsu_r7.html",
      label: "大阪府 令和7年度 市街地周辺における野生動物の出没情報",
      retrievedAt: "2026-04-21",
    }],
    notes: "府内に恒常的な生息地なし、隣接府県（京都・兵庫・奈良）からの流入個体。能勢町・豊能町の北摂地域が出没の 7 割近くを占める",
  };
}

// ---------------------------------------------------------------------------
// 鳥取県 seed (R7 月別・地域別・市町別 + R1-R6 年計)
// 出典:
//   https://www.pref.tottori.lg.jp/item/1143816.htm
//   https://www.pref.tottori.lg.jp/secure/1370084/monthly_bear_sightings.pdf
//   https://www.pref.tottori.lg.jp/secure/1143816/R8.3.31kuma.pdf
// ---------------------------------------------------------------------------
const TOTTORI_ANNUAL: Record<number, number> = {
  2019: 260, 2020: 234, 2021: 156, 2022: 104,
  2023: 164, 2024: 272, 2025: 95,
};
const TOTTORI_R7_MONTHLY: Record<number, number> = {
  4: 3, 5: 7, 6: 8, 7: 20, 8: 14, 9: 6, 10: 14, 11: 12, 12: 7, 1: 2, 2: 1, 3: 1,
};
const TOTTORI_R7_REGION: Array<[string, number]> = [
  ["東部", 57], ["中部", 7], ["西部", 31],
];
// 市町村別 (R8.3.31 付の一覧 PDF 76 件を集計)
const TOTTORI_R7_MUNI: Array<[string, number]> = [
  ["鳥取市", 19], ["岩美町", 13], ["大山町", 10], ["伯耆町", 6], ["若桜町", 6],
  ["日南町", 5], ["江府町", 4], ["三朝町", 4], ["南部町", 3], ["米子市", 2],
  ["湯梨浜町", 2], ["八頭町", 1], ["智頭町", 1],
];

function buildTottoriAggregate(): PrefectureAggregate {
  const prefCode = "31";
  const prefName = "鳥取県";
  const annual: MunicipalAggregate[] = [];
  for (const [fyStr, n] of Object.entries(TOTTORI_ANNUAL)) {
    annual.push({
      id: `tottori-pref-${fyStr}`,
      prefCode, prefName,
      period: { fiscalYear: Number(fyStr) },
      counts: { sighting: n },
    });
  }
  for (const [muni, n] of TOTTORI_R7_MUNI) {
    annual.push({
      id: `tottori-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  for (const [region, n] of TOTTORI_R7_REGION) {
    annual.push({
      id: `tottori-${region}-2025`,
      prefCode, prefName, muniName: region,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = Object.entries(TOTTORI_R7_MONTHLY).map(([m, n]) => ({
    id: `tottori-pref-2025-${m}`,
    prefCode, prefName,
    period: { fiscalYear: 2025, month: Number(m) },
    counts: { sighting: n },
  }));
  return {
    prefCode, prefName, annual, monthly,
    sources: [
      {
        url: "https://www.pref.tottori.lg.jp/item/1143816.htm",
        label: "鳥取県 クマ出没情報",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.tottori.lg.jp/secure/1370084/monthly_bear_sightings.pdf",
        label: "ツキノワグマ出没件数の推移 (R1-R7 年度別・月別・地域別)",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.tottori.lg.jp/secure/1143816/R8.3.31kuma.pdf",
        label: "令和7(2025)年度 クマ目撃・痕跡情報一覧",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "西中国地域個体群に属し絶滅危惧。地域 3 区分（東部・中部・西部）は県組織の総合事務所管轄。R6 は 272 件と増加、R7 は 95 件でやや落ち着き。市町村別は一覧 PDF 76 件からの近似",
  };
}

// ---------------------------------------------------------------------------
// 山口県 seed (R6 確定市町月別 + 歴史年計、R7 はまだ未確定)
// 出典:
//   https://www.pref.yamaguchi.lg.jp/soshiki/41/20698.html
//   https://www.pref.yamaguchi.lg.jp/uploaded/attachment/208249.xlsx (過去月別)
//   https://www.pref.yamaguchi.lg.jp/uploaded/attachment/208250.xlsx (R6 市町月別)
// ---------------------------------------------------------------------------
const YAMAGUCHI_ANNUAL: Record<number, { sighting: number; capture: number }> = {
  2024: { sighting: 799, capture: 89 }, // R6
  2023: { sighting: 444, capture: 63 }, // R5
  2022: { sighting: 254, capture: 40 }, // R4
  2021: { sighting: 339, capture: 60 }, // R3
  2020: { sighting: 366, capture: 55 }, // R2
  2019: { sighting: 231, capture: 40 }, // R1
};
const YAMAGUCHI_R6_MONTHLY: Record<number, number> = {
  4: 22, 5: 71, 6: 91, 7: 65, 8: 68, 9: 130, 10: 226, 11: 93, 12: 20, 1: 5, 2: 6, 3: 2,
};
const YAMAGUCHI_R6_MUNI: Array<[string, number]> = [
  ["岩国市", 252], ["周南市", 199], ["山口市", 116], ["萩市", 63],
  ["長門市", 40], ["柳井市", 26], ["下松市", 19], ["下関市", 19],
  ["光市", 15], ["防府市", 10], ["阿武町", 10], ["美祢市", 8],
  ["宇部市", 7], ["田布施町", 6], ["平生町", 5], ["山陽小野田市", 2],
  ["和木町", 2],
];
const YAMAGUCHI_R8_EARLY_MUNI: Array<[string, number]> = [
  ["岩国市", 7], ["周南市", 3], ["山口市", 1], ["長門市", 1],
];

function buildYamaguchiAggregate(): PrefectureAggregate {
  const prefCode = "35";
  const prefName = "山口県";
  const annual: MunicipalAggregate[] = [];
  for (const [fyStr, counts] of Object.entries(YAMAGUCHI_ANNUAL)) {
    annual.push({
      id: `yamaguchi-pref-${fyStr}`,
      prefCode, prefName,
      period: { fiscalYear: Number(fyStr) },
      counts: { sighting: counts.sighting, capture: counts.capture },
    });
  }
  annual.push({
    id: "yamaguchi-pref-2026-early",
    prefCode, prefName,
    period: { fiscalYear: 2026, month: 4 },
    counts: { sighting: 12 }, // R8 4月17日時点
  });
  for (const [muni, n] of YAMAGUCHI_R6_MUNI) {
    annual.push({
      id: `yamaguchi-${muni}-2024`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2024 },
      counts: { sighting: n },
    });
  }
  for (const [muni, n] of YAMAGUCHI_R8_EARLY_MUNI) {
    annual.push({
      id: `yamaguchi-${muni}-2026-early`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2026, month: 4 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = Object.entries(YAMAGUCHI_R6_MONTHLY).map(([m, n]) => ({
    id: `yamaguchi-pref-2024-${m}`,
    prefCode, prefName,
    period: { fiscalYear: 2024, month: Number(m) },
    counts: { sighting: n },
  }));
  return {
    prefCode, prefName, annual, monthly,
    sources: [
      {
        url: "https://www.pref.yamaguchi.lg.jp/soshiki/41/20698.html",
        label: "山口県 ツキノワグマによる被害を防ぐために (自然保護課)",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/208249.xlsx",
        label: "過去からの月別クマ目撃情報 (H9-R6)",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/208250.xlsx",
        label: "令和6年度 市町別・月別クマ目撃情報",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.yamaguchi.lg.jp/site/police/212182.html",
        label: "YPくまっぷ（山口県警察）",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "西中国地域個体群、絶滅危惧。岩国・周南・山口・萩を中心に県内広域分布。R6 (2024) 799 件は過去最多級。R7 (2025) は県警 YPくまっぷで公開、集計 PDF は未公表",
  };
}

// ---------------------------------------------------------------------------
// 徳島県 seed (四国個体群、年間数件レベル)
// 出典: https://www.pref.tokushima.lg.jp/ippannokata/kurashi/shizen/7241461/
// ---------------------------------------------------------------------------
const TOKUSHIMA_ANNUAL: Record<number, number> = {
  2025: 7, 2024: 7, 2023: 2, 2022: 2, 2021: 1,
};

function buildTokushimaAggregate(): PrefectureAggregate {
  const prefCode = "36";
  const prefName = "徳島県";
  const annual: MunicipalAggregate[] = [];
  for (const [fyStr, n] of Object.entries(TOKUSHIMA_ANNUAL)) {
    annual.push({
      id: `tokushima-pref-${fyStr}`,
      prefCode, prefName,
      period: { fiscalYear: Number(fyStr) },
      counts: { sighting: n },
    });
  }
  // 主な出没市町村 (R7 記載分): 美馬市、那賀郡那賀町、三好市
  for (const muni of ["美馬市", "那賀町", "三好市"]) {
    annual.push({
      id: `tokushima-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: {},
      band: "数件",
    });
  }
  return {
    prefCode, prefName, annual,
    sources: [
      {
        url: "https://www.pref.tokushima.lg.jp/ippannokata/kurashi/shizen/7241461/",
        label: "徳島県 【目撃情報あり】ツキノワグマについて",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.tokushima.lg.jp/file/attachment/1015220.pdf",
        label: "令和7年度改正 徳島県ツキノワグマ対応指針",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "四国個体群（徳島・高知の剣山系中心、推定 20 数頭、絶滅危惧）。年間 1〜7 件と極少。捕獲時は学習放獣対応。美馬市木屋平・那賀町・三好市等で目撃",
  };
}

// ---------------------------------------------------------------------------
// 静岡県 seed (R7 県公式 PDF 200件全件リスト + R6 156件)
// 出典:
//   https://www.pref.shizuoka.jp/kurashikankyo/shizenkankyo/wild/1017680.html
//   https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/017/680/r7kumamap.pdf
// ---------------------------------------------------------------------------
const SHIZUOKA_R7_MONTHLY: Record<number, number> = {
  4: 7, 5: 4, 6: 13, 7: 21, 8: 16, 9: 8, 10: 38, 11: 43, 12: 30, 1: 11, 2: 4, 3: 5,
};
const SHIZUOKA_R7_MUNI: Array<[string, number]> = [
  ["富士宮市", 48], ["静岡市清水区", 41], ["静岡市葵区", 36],
  ["浜松市天竜区", 24], ["川根本町", 15], ["浜松市浜名区", 11],
  ["裾野市", 8], ["御殿場市", 5], ["小山町", 4], ["富士市", 2],
  ["森町", 1], ["静岡市駿河区", 1], ["掛川市", 1],
  ["菊川市", 1], ["熱海市", 1], ["函南町", 1],
];

function buildShizuokaAggregate(): PrefectureAggregate {
  const prefCode = "22";
  const prefName = "静岡県";
  const annual: MunicipalAggregate[] = [
    {
      id: "shizuoka-pref-2025",
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 200 },
    },
    {
      id: "shizuoka-pref-2024",
      prefCode, prefName,
      period: { fiscalYear: 2024 },
      counts: { sighting: 156 },
    },
  ];
  for (const [muni, n] of SHIZUOKA_R7_MUNI) {
    annual.push({
      id: `shizuoka-${muni}-2025`,
      prefCode, prefName, muniName: muni,
      period: { fiscalYear: 2025 },
      counts: { sighting: n },
    });
  }
  const monthly: MunicipalAggregate[] = Object.entries(SHIZUOKA_R7_MONTHLY).map(([m, n]) => ({
    id: `shizuoka-pref-2025-${m}`,
    prefCode, prefName,
    period: { fiscalYear: 2025, month: Number(m) },
    counts: { sighting: n },
  }));
  return {
    prefCode, prefName, annual, monthly,
    sources: [
      {
        url: "https://www.pref.shizuoka.jp/kurashikankyo/shizenkankyo/wild/1017680.html",
        label: "静岡県のツキノワグマ（県自然保護課）",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/017/680/r7kumamap.pdf",
        label: "令和7年度 静岡県ツキノワグマ目撃情報（全200件）",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/017/680/r6kuma.pdf",
        label: "令和6年度 クマ出没マップ（全156件）",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "県 HP 上では R5 以降の全件リストを PDF 公開（地図＋通し番号）。R7 200 件、R6 156 件。富士宮市・静岡市（葵区・清水区）・浜松市天竜区の 4 市で全体の 3/4 を占める。10〜12 月が月次ピーク",
  };
}

// ---------------------------------------------------------------------------
// 茨城県 seed (R7 単発目撃 1 件、9 年ぶり)
// 出典: https://www.pref.ibaraki.jp/seikatsukankyo/kansei/chojyuhogo/tsukinowagumamokugeki.html
// ---------------------------------------------------------------------------
function buildIbarakiAggregate(): PrefectureAggregate {
  const prefCode = "08";
  const prefName = "茨城県";
  const annual: MunicipalAggregate[] = [
    {
      id: "ibaraki-pref-2025",
      prefCode, prefName,
      period: { fiscalYear: 2025 },
      counts: { sighting: 1 }, // 大子町高柴 2025-06-02 1 件
    },
    {
      id: "ibaraki-大子町-2025",
      prefCode, prefName, muniName: "大子町",
      period: { fiscalYear: 2025 },
      counts: { sighting: 1 },
    },
  ];
  return {
    prefCode, prefName, annual,
    sources: [
      {
        url: "https://www.pref.ibaraki.jp/seikatsukankyo/kansei/chojyuhogo/tsukinowagumamokugeki.html",
        label: "大子町高柴におけるツキノワグマの目撃情報について",
        retrievedAt: "2026-04-21",
      },
      {
        url: "https://www.pref.ibaraki.jp/seikatsukankyo/kansei/chojyuhogo/documents/kumakanri_honbun.pdf",
        label: "茨城県ツキノワグマ管理計画（令和7年3月）",
        retrievedAt: "2026-04-21",
      },
    ],
    notes: "県内に恒常的生息地なし。2025-06-02 大子町高柴で 2016 年以来 9 年ぶりの確定目撃（ドラレコ映像）。県は R7.3 に第二種特定鳥獣管理計画を策定し定着防止方針",
  };
}

// ---------------------------------------------------------------------------
export const PREFECTURE_AGGREGATES: PrefectureAggregate[] = [
  buildIwateAggregate(),
  buildFukuiAggregate(),
  buildHiroshimaAggregate(),
  buildWakayamaAggregate(),
  buildKanagawaAggregate(),
  buildAichiAggregate(),
  buildNaganoAggregate(),
  buildHyogoAggregate(),
  buildOsakaAggregate(),
  buildTottoriAggregate(),
  buildYamaguchiAggregate(),
  buildTokushimaAggregate(),
  buildIbarakiAggregate(),
  buildShizuokaAggregate(),
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
