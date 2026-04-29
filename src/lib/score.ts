import type {
  MeshData,
  RiskLevel,
  ScoreBreakdown,
  ScoreFactors,
  WeatherSnapshot,
} from "./types";
import {
  findNutCropEntry,
  NUT_CROP_LABEL,
  NUT_CROP_MULTIPLIER,
  type NutCropEntry,
} from "@/data/nut-crop";

const SEASONAL_COEFF: Record<number, number> = {
  1: 15,
  2: 10,
  3: 20,
  4: 65,
  5: 82,
  6: 95,
  7: 90,
  8: 70,
  9: 75,
  10: 85,
  11: 88,
  12: 50,
};

const BEAR_ACTIVE_HOURS: Array<[number, number]> = [
  [4, 8],
  [16, 20],
];

export function isBearActiveHour(hour: number): boolean {
  return BEAR_ACTIVE_HOURS.some(([start, end]) => hour >= start && hour < end);
}

export function lunarPhase(date: Date): { phase: number; name: string } {
  const reference = new Date(2000, 0, 6).getTime();
  const synodicMonth = 29.53059;
  const diffDays = (date.getTime() - reference) / 86400000;
  const phase = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  const name =
    phase < 3.7
      ? "新月"
      : phase < 7.4
        ? "三日月"
        : phase < 11.1
          ? "上弦"
          : phase < 14.8
            ? "十三夜"
            : phase < 18.5
              ? "満月"
              : phase < 22.1
                ? "十六夜"
                : phase < 25.8
                  ? "下弦"
                  : "晦日";
  return { phase, name };
}

export function calcHistoryScore(mesh: Pick<MeshData, "second" | "sixth" | "latest" | "latestSingle">): number {
  const raw = mesh.latest * 3.0 + mesh.sixth * 1.5 + mesh.second * 0.5;
  const adjusted = mesh.latestSingle > 0 && raw > 0.5 ? raw - 0.5 : raw;
  return Math.min(100, Math.max(0, adjusted * 10));
}

function calcSeasonalScore(month: number): number {
  return SEASONAL_COEFF[month] ?? 50;
}

function calcWeatherScore(weather: WeatherSnapshot | null): number {
  if (!weather) return 50;
  const { tempC, precipMm } = weather;
  const inRange = tempC >= 5 && tempC <= 25;
  const base = inRange ? 75 : 35;
  return Math.max(10, base - precipMm * 3);
}

function calcLunarScore(phase: number): number {
  return phase < 5 || phase > 25 ? 70 : 45;
}

function calcTimeBonus(hour: number): number {
  return isBearActiveHour(hour) ? 10 : 0;
}

/** 対策を一言で伝える verdict (RiskHero の大きな文字用)。
 *  怖がらせすぎず、段階的に対策を促すトーンに統一。
 *  safe は行動指示なし (「安全」のまま)。 */
export const SOFT_LEVEL_LABEL: Record<RiskLevel, string> = {
  safe: "安全",
  low: "念のため注意",
  moderate: "基本対策を",
  elevated: "対策を強化",
  high: "しっかり対策を",
  unknown: "データ取得中",
};

/** 生息分布調査 (= 定着個体の長期記録) ベースの一行説明。
 *  最近の目撃情報は別の軸なので、RiskHero 側で並列に表示する。 */
export const LEVEL_DESCRIPTION: Record<RiskLevel, string> = {
  safe: "定着個体の記録なし",
  low: "古い記録のみ・最新調査では確認なし",
  moderate: "最新調査で記録あり",
  elevated: "継続して生息が確認されている",
  high: "恒常的な生息域",
  unknown: "情報を取得中",
};

/** 一般ユーザー向けの 3 段階サマリ。
 *  5 段階の正確さは詳細バーで残し、画面トップの結論はこれで一目化する。 */
export type ShortVerdict = "safe" | "caution" | "danger";

export const SHORT_VERDICT_OF: Record<RiskLevel, ShortVerdict> = {
  safe: "safe",
  low: "caution",
  moderate: "caution",
  elevated: "danger",
  high: "danger",
  unknown: "safe",
};

export const SHORT_VERDICT_LABEL: Record<ShortVerdict, string> = {
  safe: "安全",
  caution: "注意",
  danger: "危険",
};

export const SHORT_VERDICT_COLOR: Record<ShortVerdict, string> = {
  safe: "#06b6d4", // cyan-500
  caution: "#F59E0B", // amber-500
  danger: "#EF4444", // red-500
};

export const SHORT_VERDICT_EMOJI: Record<ShortVerdict, string> = {
  safe: "🟢",
  caution: "🟡",
  danger: "🔴",
};

/**
 * 過去1年の目撃件数 (メッシュ単位) からそのセルが示す「目撃由来レベル」を返す。
 * ヒートマップ・カード両方で同じ式を使うことで、視覚と数値が完全に一致する。
 *
 *   0 件     → safe   (寄与なし)
 *   1〜2 件  → low    (流れ込み程度)
 *   3〜9 件  → moderate
 *   10 件〜  → elevated
 */
export function sightingsToLevel(count: number): RiskLevel {
  if (count >= 10) return "elevated";
  if (count >= 3) return "moderate";
  if (count >= 1) return "low";
  return "safe";
}

const LEVEL_ORDER: Record<RiskLevel, number> = {
  unknown: -1,
  safe: 0,
  low: 1,
  moderate: 2,
  elevated: 3,
  high: 4,
};

/** 2 つの RiskLevel のうち、より高い (危険な) 方を返す。 */
export function maxLevel(a: RiskLevel, b: RiskLevel): RiskLevel {
  return LEVEL_ORDER[a] >= LEVEL_ORDER[b] ? a : b;
}

export type ScoreOptions = {
  nearbyWeightedCount?: number;
  nearbySightings?: number;
  nearbyRadiusKm?: number;
  /** 周辺 (既定 3km) の環境省メッシュの生息記録を距離減衰で取り込んだ上限値 */
  neighborMeshScore?: number;
  prefCode?: string;
  bearStatus?: "present" | "rare" | "extinct" | "absent" | null;
  elevationM?: number | null;
  slopeDeg?: number | null;
  isForest?: boolean | null;
  forestType?: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none" | null;
};

function elevationBaseScore(elevationM: number | null | undefined): number {
  if (elevationM == null) return 50;
  if (elevationM < 50) return 10;
  if (elevationM < 200) return 25;
  if (elevationM < 500) return 50;
  if (elevationM < 1000) return 72;
  if (elevationM < 1500) return 85;
  return 92;
}

export function calcTerrainScore(
  elevationM: number | null | undefined,
  slopeDeg?: number | null,
  isForest?: boolean | null,
): number {
  let v = elevationBaseScore(elevationM);
  if (slopeDeg != null) {
    if (slopeDeg >= 5 && slopeDeg <= 35) v += 5;
    else if (slopeDeg > 35) v += 2;
  }
  if (isForest) v += 8;
  return Math.min(100, Math.max(0, v));
}

export function terrainLabel(elevationM: number | null | undefined): string {
  if (elevationM == null) return "標高不明";
  if (elevationM < 50) return "沿岸・低地";
  if (elevationM < 200) return "平野・丘陵";
  if (elevationM < 500) return "里山・低山";
  if (elevationM < 1000) return "中山地";
  if (elevationM < 1500) return "山地";
  return "高山・亜高山";
}

export function forestTypeLabel(
  t: ScoreOptions["forestType"] | undefined,
): string {
  switch (t) {
    case "needleleaved": return "針葉樹林";
    case "broadleaved": return "広葉樹林";
    case "mixed": return "混交林";
    case "none": return "森林外";
    case "unknown": return "森林（樹種不明）";
    default: return "森林情報なし";
  }
}

export function calcEnvChangeBonus(
  weather: WeatherSnapshot | null,
): { bonus: number; parts: string[] } {
  if (!weather) return { bonus: 0, parts: [] };
  const parts: string[] = [];
  let bonus = 0;

  const tc = weather.tempChange24h;
  if (tc != null) {
    if (tc <= -5) {
      bonus += 5;
      parts.push(`前日比 ${tc.toFixed(1)}°C（急冷）`);
    } else if (tc >= 5) {
      bonus += 3;
      parts.push(`前日比 +${tc.toFixed(1)}°C（急昇）`);
    }
  }

  const pc = weather.pressureChange24h;
  if (pc != null) {
    if (pc <= -5) {
      bonus += 6;
      parts.push(`気圧 ${pc.toFixed(1)}hPa（急降下）`);
    } else if (pc >= 5) {
      bonus += 2;
      parts.push(`気圧 +${pc.toFixed(1)}hPa（急上昇）`);
    }
  }

  return { bonus, parts };
}

function nutCropMultiplier(
  prefCode: string | undefined,
  month: number,
  now: Date,
): { multiplier: number; entry?: NutCropEntry; appliesNow: boolean } {
  // Only apply boost in late summer ~ early winter (Aug-Dec).
  const appliesNow = month >= 8 && month <= 12;
  if (!prefCode) return { multiplier: 1.0, appliesNow };
  const entry = findNutCropEntry(prefCode, now);
  if (!entry) return { multiplier: 1.0, appliesNow };
  if (!appliesNow) return { multiplier: 1.0, entry, appliesNow };
  return {
    multiplier: NUT_CROP_MULTIPLIER[entry.level],
    entry,
    appliesNow,
  };
}

export function bufferHistoryFromNearby(weightedCount: number): number {
  if (weightedCount <= 0) return 0;
  return Math.min(70, Math.round(weightedCount * 18));
}

export function computeScore(
  mesh: Pick<MeshData, "second" | "sixth" | "latest" | "latestSingle"> | null,
  now: Date,
  weather: WeatherSnapshot | null,
  opts: ScoreOptions = {},
): ScoreBreakdown {
  const month = now.getMonth() + 1;
  const hour = now.getHours();
  const { phase, name: phaseName } = lunarPhase(now);
  const radius = opts.nearbyRadiusKm ?? 10;

  const directHistory = mesh ? calcHistoryScore(mesh) : 0;
  const bufferHistory = bufferHistoryFromNearby(opts.nearbyWeightedCount ?? 0);
  const neighborHistory = opts.neighborMeshScore ?? 0;
  const historyScore = Math.max(directHistory, bufferHistory, neighborHistory);
  const isInsideHabitat = directHistory > 0;
  const isBufferZone = !isInsideHabitat && bufferHistory > 0;
  const isNeighborHabitat =
    !isInsideHabitat && !isBufferZone && neighborHistory > 0;

  const baseSeasonal = calcSeasonalScore(month);
  const nutCrop = nutCropMultiplier(opts.prefCode, month, now);
  const boostedSeasonal = Math.min(100, baseSeasonal * nutCrop.multiplier);
  const terrain = calcTerrainScore(
    opts.elevationM,
    opts.slopeDeg,
    opts.isForest,
  );
  const envChange = calcEnvChangeBonus(weather);

  const factors: ScoreFactors = {
    history: historyScore,
    seasonal: boostedSeasonal,
    weather: calcWeatherScore(weather),
    lunar: calcLunarScore(phase),
    terrain,
    timeOfDayBonus: calcTimeBonus(hour),
  };

  if (historyScore <= 0) {
    // Bear-absent prefectures (沖縄・千葉・九州 7 県など) は 'safe' を明示返却
    if (opts.bearStatus === "absent" || opts.bearStatus === "extinct") {
      return {
        score: 0,
        level: "safe",
        factors,
        explanation: [
          opts.bearStatus === "extinct"
            ? "この地域は環境省により絶滅宣言されており、クマの生息記録はありません。"
            : "この地域にはクマが元々生息していません。",
          "基本対策は不要ですが、目撃情報等があれば念のため確認してください。",
        ],
      };
    }
    // 四国など rare 地域は "低い" 固定・注釈付き
    // Out-of-habitat + no nearby sightings: return the lowest of 5 levels ("低い")
    // with explicit data-insufficiency note. Never returns "安全".
    // Terrain (elevation/slope/forest) still factored in so mountainous/forested
    // areas aren't treated like coastal cities.
    const lowDefaultScore = Math.round(
      Math.min(
        30,
        Math.max(
          15,
          factors.seasonal * 0.12 +
            factors.weather * 0.08 +
            factors.lunar * 0.04 +
            factors.terrain * 0.15,
        ),
      ),
    );
    const tdetails: string[] = [];
    if (opts.elevationM != null) tdetails.push(`標高 ${Math.round(opts.elevationM)}m`);
    if (opts.slopeDeg != null) tdetails.push(`傾斜 ${opts.slopeDeg.toFixed(1)}°`);
    if (opts.isForest) tdetails.push(forestTypeLabel(opts.forestType));
    return {
      score: lowDefaultScore,
      level: "low",
      factors,
      explanation: [
        "この地域は環境省の生息域調査に記録がなく、近隣にも直近の目撃情報が確認できていません。",
        `地形: ${factors.terrain} pts（${terrainLabel(opts.elevationM)}${tdetails.length ? " / " + tdetails.join(" / ") : ""}）`,
      ],
    };
  }

  const weighted =
    factors.history * 0.35 +
    factors.seasonal * 0.25 +
    factors.weather * 0.15 +
    factors.lunar * 0.08 +
    factors.terrain * 0.17 +
    factors.timeOfDayBonus +
    envChange.bonus;

  const score = Math.round(Math.min(100, Math.max(0, weighted)));
  const level = toRiskLevel(score);

  const historyLabel = isInsideHabitat
    ? `履歴（生息域）: ${factors.history.toFixed(0)} pts（最新調査 ${mesh?.latest ?? 0} / 第6回 ${mesh?.sixth ?? 0} / 第2回 ${mesh?.second ?? 0}）`
    : isBufferZone
      ? `履歴（緩衝域）: ${factors.history.toFixed(0)} pts（近隣 ${radius}km 以内の直近目撃 ${opts.nearbySightings ?? 0} 件から推計）`
      : isNeighborHabitat
        ? `履歴（周辺メッシュ）: ${factors.history.toFixed(0)} pts（自セルは空白だが、周辺 10km 以内の環境省メッシュに生息記録あり）`
        : `履歴: ${factors.history.toFixed(0)} pts`;

  const seasonalLabel = nutCrop.entry && nutCrop.appliesNow && nutCrop.multiplier !== 1
    ? `季節: ${factors.seasonal.toFixed(0)} pts（${month}月 × 堅果類 ${NUT_CROP_LABEL[nutCrop.entry.level]} ×${nutCrop.multiplier.toFixed(2)}）`
    : nutCrop.entry && nutCrop.appliesNow
      ? `季節: ${factors.seasonal.toFixed(0)} pts（${month}月 / 堅果類 ${NUT_CROP_LABEL[nutCrop.entry.level]}・補正なし）`
      : `季節: ${factors.seasonal.toFixed(0)} pts（${month}月の月別係数）`;

  const terrainDetails: string[] = [];
  if (opts.elevationM != null) terrainDetails.push(`標高 ${Math.round(opts.elevationM)}m`);
  if (opts.slopeDeg != null) terrainDetails.push(`傾斜 ${opts.slopeDeg.toFixed(1)}°`);
  if (opts.isForest !== undefined && opts.isForest !== null) {
    terrainDetails.push(opts.isForest ? forestTypeLabel(opts.forestType) : "森林外");
  }
  const terrainLine = `地形: ${factors.terrain} pts（${terrainLabel(opts.elevationM)}${terrainDetails.length ? " / " + terrainDetails.join(" / ") : ""}）`;

  const envChangeLine = envChange.parts.length
    ? `環境変化補正: +${envChange.bonus}（${envChange.parts.join(" / ")}）`
    : "環境変化補正: 0（前日比で急変なし）";

  const explanation = [
    historyLabel,
    seasonalLabel,
    weather
      ? `気象: ${factors.weather.toFixed(0)} pts（${weather.tempC.toFixed(1)}°C・降水 ${weather.precipMm}mm${weather.pressureHPa != null ? `・気圧 ${weather.pressureHPa.toFixed(0)}hPa` : ""}）`
      : `気象: ${factors.weather} pts（取得なし・中央値）`,
    terrainLine,
    `月相: ${factors.lunar} pts（${phaseName}）`,
    factors.timeOfDayBonus > 0
      ? `時間帯補正: +${factors.timeOfDayBonus}（${hour}時はクマの活動時間帯）`
      : `時間帯補正: 0（${hour}時は活動時間外）`,
    envChangeLine,
  ];

  if (isBufferZone) {
    explanation.unshift(
      "環境省の生息域調査には記録がありませんが、近隣で直近の目撃があり緩衝域として評価しています。",
    );
  }

  return { score, level, factors, explanation };
}

export function toRiskLevel(score: number): RiskLevel {
  if (score >= 75) return "high";
  if (score >= 55) return "elevated";
  if (score >= 35) return "moderate";
  if (score >= 15) return "low";
  return "safe";
}

/**
 * 5 段階判定のしきい値 (安全→低い→中程度→やや高い→高い の 4 境界)。
 * 入力は calcHistoryScore の戻り値 (0-50 の範囲) に対応。
 * 初期値は公開版 Flutter くまもりマップと同じ: [0, 20, 40, 50]
 *
 *   score < thresholds[0] → safe
 *   score < thresholds[1] → low
 *   score < thresholds[2] → moderate
 *   score < thresholds[3] → elevated
 *   else                  → high
 */
export type LevelThresholds = readonly [number, number, number, number];
// 5 段階の境界値:
//   safe:     score = 0
//   low:      0  < score < 30   (古い調査記録のみで最新は途絶え)
//   moderate: 30 ≤ score < 45   (最新調査で記録あり = ×3.0 系)
//   elevated: 45 ≤ score < 50   (最新+第6回 = 継続中)
//   high:     score = 50         (全3回で記録 = 恒常的生息域)
export const DEFAULT_LEVEL_THRESHOLDS: LevelThresholds = [0, 30, 45, 50];

export function kumamoriLevel(
  historyScore: number,
  thresholds: LevelThresholds = DEFAULT_LEVEL_THRESHOLDS,
): RiskLevel {
  if (historyScore <= thresholds[0]) return "safe";
  if (historyScore < thresholds[1]) return "low";
  if (historyScore < thresholds[2]) return "moderate";
  if (historyScore < thresholds[3]) return "elevated";
  return "high";
}

/**
 * ヒートマップ + カード 共通の 5 段階スコア。
 * 現在は環境省生息域メッシュの calcHistoryScore をそのまま利用する
 * (Flutter 公開版と同じ挙動)。季節・気象・隣接補間など一切しない。
 */
export function computeSpatialScore(params: {
  historyDirect: number;
  thresholds?: LevelThresholds;
}): { score: number; level: RiskLevel } {
  // ヒートマップ (smoothMeshes → kumamoriLevel(m.s)) は連続値のまま判定するので、
  // ここでも round せずに同じ連続値で level を決め、ヒートマップの色とカードの
  // バー色を必ず一致させる。score の整数表示が必要な箇所は表示直前で round する。
  const raw = params.historyDirect;
  return {
    score: Math.round(raw),
    level: kumamoriLevel(raw, params.thresholds),
  };
}

export const RISK_LEVEL_LABEL: Record<RiskLevel, string> = {
  safe: "安全",
  low: "低い",
  moderate: "中程度",
  elevated: "やや高い",
  high: "高い",
  unknown: "データ不足",
};

/** 5 段階の色。くまもりマップの段階表現に近く、かつ文字が読める彩度を確保:
 *  cyan → green → amber → orange → red (黄色は読みにくいので amber に変更) */
export const RISK_LEVEL_COLOR: Record<RiskLevel, string> = {
  safe: "#06b6d4", // cyan-500
  low: "#4CAF50", // green
  moderate: "#F59E0B", // amber-500 (薄いオレンジ、読める彩度)
  elevated: "#F97316", // orange-500
  high: "#EF4444", // red-500
  unknown: "#6b7280",
};

/** 非選択時の pale 表示用。5 段階バーで "選択中以外" を薄く見せるのに使う。 */
export const RISK_LEVEL_COLOR_PALE: Record<RiskLevel, string> = {
  safe: "#cffafe",
  low: "#dcfce7",
  moderate: "#fef3c7",
  elevated: "#ffedd5",
  high: "#fee2e2",
  unknown: "#e5e7eb",
};
