/**
 * 出没の「今後 4 週間の見通し」を地域ごとに算出する統計モデル。
 *
 * 設計方針（誠実さ優先）:
 * - 機械学習のブラックボックスではなく、根拠を全部開示できる統計手法にする。
 * - 季節性は「各年の年内シェア（= 季節シェイプ）」を年ごとに正規化してから平均する。
 *   これにより 2025 年の記録的大量出没（年 4 万件超）のレベル差に引っ張られず、
 *   「この時期は例年どれくらいの割合で出るか」という形だけを抽出できる。
 * - 予測 = 直近 4 週間の実測ペース × 季節係数（この先 4 週間で何倍になるか）。
 * - 「例年比」はその地域自身の過去同期平均と比較して出す。
 * - 件数が少ない地域は誤差が大きいので confidence を下げ、断定的な数値は出さない。
 *
 * 入力は日付文字列 (YYYY-MM-DD) の配列のみ。地点・市町村・都道府県・全国いずれにも
 * 同じ関数で適用できる（粒度は呼び出し側が records を絞って決める）。
 */

const HORIZON_DAYS = 28;
// 季節シェイプの算出に使う「データが密な年」。2009-2022 は疎なので除外。
const DENSE_YEARS = [2023, 2024, 2025];
const WEEKS = 52;

export type ForecastBand = "low" | "normal" | "elevated" | "high";
export type SeasonalPhase = "rising" | "falling" | "flat";
export type Confidence = "low" | "medium" | "high";

export type SeasonalModel = {
  /** 52 週ぶんの季節重み（合計 1）。週インデックスは 0..51。 */
  weekWeight: number[];
  /** シェイプ算出に使えた年数。0 ならフォールバック（一様）。 */
  years: number;
};

export type AreaForecast = {
  asOf: string;
  horizonDays: number;
  /** 直近 4 週間の実測件数。 */
  recentCount: number;
  /** 今後 4 週間の見通し（中央値）。 */
  expectedCount: number;
  expectedLow: number;
  expectedHigh: number;
  /** その地域の過去同期（DENSE_YEARS 平均）の件数。 */
  typicalCount: number;
  /** 見通しが例年同期比で何 % か。typical が小さすぎる時は null。 */
  vsTypicalPct: number | null;
  band: ForecastBand;
  phase: SeasonalPhase;
  /** 季節係数（今後 4 週 ÷ 直近 4 週）。1 超で増加局面。 */
  seasonalRatio: number;
  confidence: Confidence;
  /** 画面に出す根拠の箇条書き（全部開示）。 */
  basis: string[];
};

function parse(d: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d);
  if (!m) return null;
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
}

function dayOfYear(dt: Date): number {
  const start = Date.UTC(dt.getUTCFullYear(), 0, 1);
  return Math.floor((dt.getTime() - start) / 86_400_000);
}

function weekIndex(dt: Date): number {
  return Math.min(WEEKS - 1, Math.floor(dayOfYear(dt) / 7));
}

/** 円環移動平均で季節重みを平滑化（±2 週）。 */
function smoothCircular(arr: number[], radius = 2): number[] {
  const n = arr.length;
  const out = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let k = -radius; k <= radius; k++) s += arr[(i + k + n) % n];
    out[i] = s / (2 * radius + 1);
  }
  return out;
}

/**
 * 全国（あるいは十分件数のある母集団）の日付から季節シェイプを作る。
 * 各年で「週ごとの件数 ÷ その年の総数」を取り、年間で平均して平滑化する。
 */
export function buildSeasonalModel(allDates: string[]): SeasonalModel {
  const perYear = new Map<number, number[]>();
  for (const ds of allDates) {
    const dt = parse(ds);
    if (!dt) continue;
    const y = dt.getUTCFullYear();
    if (!DENSE_YEARS.includes(y)) continue;
    let arr = perYear.get(y);
    if (!arr) {
      arr = new Array(WEEKS).fill(0);
      perYear.set(y, arr);
    }
    arr[weekIndex(dt)]++;
  }
  const acc = new Array(WEEKS).fill(0);
  let years = 0;
  for (const y of DENSE_YEARS) {
    const arr = perYear.get(y);
    if (!arr) continue;
    const tot = arr.reduce((a, b) => a + b, 0);
    if (tot < 100) continue; // 母数が薄い年は使わない
    for (let i = 0; i < WEEKS; i++) acc[i] += arr[i] / tot;
    years++;
  }
  if (years === 0) {
    // フォールバック: 一様分布
    return { weekWeight: new Array(WEEKS).fill(1 / WEEKS), years: 0 };
  }
  let w = acc.map((v) => v / years);
  w = smoothCircular(w);
  const s = w.reduce((a, b) => a + b, 0) || 1;
  return { weekWeight: w.map((v) => v / s), years };
}

/** 指定日から days 日ぶんの季節重みの合計（週重みを 1/7 ずつ日割りして積算）。 */
function windowWeight(model: SeasonalModel, start: Date, days: number): number {
  let sum = 0;
  for (let i = 0; i < days; i++) {
    const dt = new Date(start.getTime() + i * 86_400_000);
    sum += model.weekWeight[weekIndex(dt)] / 7;
  }
  return sum;
}

function countInWindow(
  sortedDays: number[],
  startMs: number,
  endMs: number,
): number {
  let c = 0;
  for (const t of sortedDays) {
    if (t >= startMs && t < endMs) c++;
  }
  return c;
}

/**
 * 地域の出没見通しを算出する。
 * @param areaDates その地域（10km 圏・市町村・県など）の全期間の日付配列。
 * @param model     buildSeasonalModel() で作った季節シェイプ（全国推奨）。
 * @param asOf      算出基準日 YYYY-MM-DD。
 */
export function forecastArea(
  areaDates: string[],
  model: SeasonalModel,
  asOf: string,
): AreaForecast | null {
  const base = parse(asOf);
  if (!base) return null;
  const baseMs = base.getTime();
  const dayMs = 86_400_000;

  const days = areaDates
    .map((d) => parse(d)?.getTime() ?? NaN)
    .filter((t) => Number.isFinite(t) && t <= baseMs);

  const recentCount = countInWindow(days, baseMs - HORIZON_DAYS * dayMs, baseMs);

  // 季節フェーズ（全国の季節シェイプ由来。「いま増える/減る時期か」のナラティブ用）。
  const wNext = windowWeight(model, base, HORIZON_DAYS);
  const wPrev = windowWeight(
    model,
    new Date(baseMs - HORIZON_DAYS * dayMs),
    HORIZON_DAYS,
  );
  let seasonalRatio = wPrev > 0 ? wNext / wPrev : 1;
  seasonalRatio = Math.max(0.3, Math.min(4, seasonalRatio));
  const phase: SeasonalPhase =
    seasonalRatio >= 1.15 ? "rising" : seasonalRatio <= 0.85 ? "falling" : "flat";

  // --- 気候値アンカー型の見通し ---
  // 直近の乗算だと「直近4週=0件 → 予測0件」と潰れるため、その地域の例年水準
  // (climatology) を土台に、「今年が平年比で高いか低いか」(yearFactor) で補正する。
  const mo = base.getUTCMonth();
  const da = base.getUTCDate();

  // 例年同期 (DENSE_YEARS) の「今後4週間」窓の平均件数 = 気候値。
  const typNext: number[] = [];
  // 例年同期の「直近90日」窓の平均件数 = 平年ペースの基準。
  const typ90: number[] = [];
  for (const y of DENSE_YEARS) {
    const anchor = Date.UTC(y, mo, da);
    if (anchor > baseMs) continue; // 未来の年は使わない
    typNext.push(countInWindow(days, anchor, anchor + HORIZON_DAYS * dayMs));
    typ90.push(countInWindow(days, anchor - 90 * dayMs, anchor));
  }
  const avg = (a: number[]) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
  const typicalCount = avg(typNext); // 気候値（今後4週の平年件数）

  // 今年のペース vs 平年ペース（直近90日で安定化、加法スムージング +2）。
  const recent90 = countInWindow(days, baseMs - 90 * dayMs, baseMs);
  const typical90 = avg(typ90);
  const yearFactor = Math.max(
    0.3,
    Math.min(3, (recent90 + 2) / (typical90 + 2)),
  );

  const expectedRaw = typicalCount * yearFactor;
  const expectedCount = Math.round(expectedRaw);
  const expectedLow = Math.max(0, Math.floor(expectedRaw * 0.6));
  const expectedHigh = Math.ceil(expectedRaw * 1.6 + 1);

  const vsTypicalPct =
    typicalCount >= 2 ? Math.round((yearFactor - 1) * 100) : null;

  // バンド判定: 例年比があればそれを主に、無ければ気候値の水準で判定。
  let band: ForecastBand;
  if (vsTypicalPct !== null) {
    band =
      vsTypicalPct >= 60
        ? "high"
        : vsTypicalPct >= 20
          ? "elevated"
          : vsTypicalPct <= -30
            ? "low"
            : "normal";
  } else {
    band =
      expectedRaw >= 8
        ? "high"
        : expectedRaw >= 3
          ? "elevated"
          : expectedRaw < 0.5 && phase !== "rising"
            ? "low"
            : "normal";
  }

  // 信頼度: 地域の年間規模と例年サンプル数で判定。
  const annual = countInWindow(days, baseMs - 365 * dayMs, baseMs);
  const confidence: Confidence =
    annual >= 30 && typNext.length >= 2
      ? "high"
      : annual >= 8
        ? "medium"
        : "low";

  // 根拠（全部開示）
  const phaseLabel =
    phase === "rising"
      ? "季節的に上昇局面（全国的にこの時期は出没が増える傾向）"
      : phase === "falling"
        ? "季節的に下降局面（全国的にこの時期は出没が減る傾向）"
        : "季節的にはほぼ横ばいの時期";
  const basis: string[] = [];
  if (typical90 >= 1) {
    basis.push(
      `直近90日の出没は ${recent90} 件（この地域の例年同期は平均 ${typical90.toFixed(1)} 件）`,
    );
  } else {
    basis.push(`直近90日の出没は ${recent90} 件`);
  }
  basis.push(phaseLabel);
  if (typicalCount >= 2) {
    basis.push(
      `この地域の例年の今後4週間は平均 ${typicalCount.toFixed(1)} 件。今年のペースは平年比 ${yearFactor >= 1 ? "+" : ""}${Math.round((yearFactor - 1) * 100)}%`,
    );
  }

  return {
    asOf,
    horizonDays: HORIZON_DAYS,
    recentCount,
    expectedCount,
    expectedLow,
    expectedHigh,
    typicalCount,
    vsTypicalPct,
    band,
    phase,
    seasonalRatio,
    confidence,
    basis,
  };
}

export const BAND_LABEL: Record<ForecastBand, string> = {
  low: "例年より低め",
  normal: "例年並み",
  elevated: "やや高め",
  high: "高め",
};
