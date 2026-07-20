/**
 * 年の「型」の判定と、それを使った予測。
 *
 * 出没件数の季節パターンは毎年同じではなく、質的に異なる2つの型を行き来する。
 観測条件を固定した(全期間に存在するソースだけの) 秋(9-11月)/初夏(6-7月) 比と、
 * 環境省統計に基づく堅果類の豊凶記録は、きれいに対応する:
 *
 *   年     秋/初夏   堅果類の豊凶
 *   2019    3.32     (記録なし)
 *   2020    1.46     東北・北陸でブナ大凶作
 *   2021    0.52     前年凶作の反動で豊作
 *   2022    0.34     並作〜やや凶作
 *   2023    2.42     東北・北陸で記録的大凶作
 *   2024    0.39     並作(凶作年の反動)
 *   2025    2.28     東北で並凶作〜やや凶作
 *
 * 凶作年は 1.46 以上、豊作・並作年は 0.52 以下で重なりが無い。
 * 「型」は堅果類の豊凶を反映していると考えてよい。
 *
 この比は同一年内の比なので観測条件の影響を受けにくいが、それでも完全には
 * 相殺されない。全ソースで計算すると 2020年が 0.98 に沈み、大凶作年なのに
 * 夏型と誤判定される(当時は秋に強いソースが未取り込みだったため)。
 * **年をまたぐ比較は必ず観測条件を固定したソースで行うこと。**
 *
 * 予測への含意:
 *   - 過去数年の季節形状を平均する方式は、性質の違う2つの型を混ぜるため
 *     原理的に外す。実測でも 10月件数の予測誤差が平均214%だった
 *     (同じ型の年だけを使うと71%)。
 *   - ただし型は年内の出方からは判別できない。初夏と秋の絶対件数の相関は
 *     +0.884 で、「初夏が少ない年は秋が荒れる」は成立しない
 *     (シェアで見ると負の相関に見えるが、分母を共有するための見かけ)。
 *   - したがって型の事前判定には外部の先行指標が要る。堅果類の豊凶調査が
 *     最有力候補。まだ取り込んでいないので、現時点では「型が確定してから
 *     の予測」しかできない。この限界は表示側でも明示すること。
 */

export type RegimeType = "autumn" | "summer" | "unknown";

/**
 * ブナの開花指数から、その年が秋型になるかを7月時点で予測する。
 *
 * 出没データからは型を事前に判別できない(初夏と秋の絶対件数の相関は +0.884)
 * ため、外部の先行指標が要る。東北森林管理局の開花調査は**7月上旬公表**で、
 * 秋のピークの2〜3ヶ月前に出る。
 *
 * 判定は「5県平均の開花指数が 1.0 未満」。実測:
 *   2019 0.68 → 秋型(3.32)   2023 0.54 → 秋型(2.42)   2025 0.44 → 秋型(2.28)
 *   2020 2.04 → 1.46         2021 1.98 → 0.52
 *   2022 3.64 → 0.34         2024 3.30 → 0.39
 * 開花指数が1.0を切った3年はすべて秋型で、外れは無い。
 * 2020年だけは指数2.04(並作)ながら比1.46とやや秋寄りで、この規則では
 * 拾えない。ただし3.32/2.42/2.28 という強い秋型とは水準が違う。
 *
 * 対象は東北5県のブナのみ。他地域・他樹種(ミズナラ等)は含まない。
 *
 * === 他地域への当てはめ ===
 * 東北の指数は他地域の「方向」は当てるが、**しきい値はそのまま使えない**。
 *   富山県: 秋/初夏比の範囲 0.59〜9.88、東北指数との順位相関 -0.857 (n=7)
 *           → しきい値1.0でうまく分かれる
 *   岐阜県: 範囲 0.36〜0.88、相関 -0.900 (n=5)
 *           → 凶作年(2023)でも0.88で、1.0を一度も超えない
 * 岐阜のように元から秋に偏らない県では、絶対値のしきい値は意味を持たない。
 * 地域ごとの判定は、その地域自身の過去の範囲と比べること
 * (regionRelativeLevel を使う)。
 */
export type MastOutlook = {
  year: number;
  avgFlowerIndex: number;
  poorPrefs: number;
  totalPrefs: number;
  /** 秋型になると予測されるか */
  predictsAutumn: boolean;
  sourceUrl: string;
};

/**
 * その年の比を、その地域自身の過去と比べて水準を出す。
 *
 * 秋に偏る度合いは地域差が大きい(富山 0.59〜9.88 / 岐阜 0.36〜0.88)ため、
 * 全国共通のしきい値では判定できない。自地域の過去の中央値に対する倍率で
 * 「その地域としては高いか」を見る。
 */
export function regionRelativeLevel(
  currentRatio: number | null,
  pastRatios: number[],
): { level: "high" | "normal" | "low" | "unknown"; vsMedian: number | null } {
  const past = pastRatios.filter((r) => Number.isFinite(r)).sort((a, b) => a - b);
  if (currentRatio === null || past.length < 3)
    return { level: "unknown", vsMedian: null };
  const median = past[Math.floor(past.length / 2)];
  if (median <= 0) return { level: "unknown", vsMedian: null };
  const vs = currentRatio / median;
  return {
    level: vs >= 1.8 ? "high" : vs <= 0.6 ? "low" : "normal",
    vsMedian: vs,
  };
}

export function mastOutlook(
  year: number,
  summary: { avgFlower: number; poorPrefs: number; totalPrefs: number } | null,
  sourceUrl: string,
): MastOutlook | null {
  if (!summary) return null;
  return {
    year,
    avgFlowerIndex: summary.avgFlower,
    poorPrefs: summary.poorPrefs,
    totalPrefs: summary.totalPrefs,
    predictsAutumn: summary.avgFlower < 1.0,
    sourceUrl,
  };
}

/**
 * 秋型と判定する 秋/初夏 比のしきい値。
 *
 * 観測条件を固定した(全期間に存在するソースだけの)比を、環境省統計に基づく
 * 堅果類の豊凶記録と突き合わせると、きれいに分離する:
 *   凶作年   2019: 3.32 / 2020: 1.46 / 2023: 2.42 / 2025: 2.28
 *   豊作･並作 2021: 0.52 / 2022: 0.34 / 2024: 0.39
 * 重なりが無いので、境界は 1.0 付近に置くのが妥当。
 *
 * 注意: 全ソースで計算すると 2020年が 0.98 に沈む(当時はデータが少なく、
 * 秋に強いソースが未取り込みだったため)。年をまたぐ比較は必ず観測条件を
 * 固定したソースで行うこと。
 */
const AUTUMN_THRESHOLD = 1.0;
/** 判定に必要な最低件数 (少なすぎる年は判定しない) */
const MIN_RECORDS = 200;

export type YearProfile = {
  year: number;
  total: number;
  /** 月別件数 (index 0 = 1月) */
  monthly: number[];
  earlySummer: number;
  autumn: number;
  /** 秋 / 初夏。判定不能なら null */
  ratio: number | null;
  type: RegimeType;
  /** 年内のデータが揃っているか (11月まで観測済みか) */
  complete: boolean;
};

type Rec = { date: string };

export function buildYearProfiles(records: Rec[], today: string): YearProfile[] {
  const byYear = new Map<number, number[]>();
  for (const r of records) {
    const m = /^(\d{4})-(\d{2})-\d{2}$/.exec(r.date ?? "");
    if (!m) continue;
    const y = Number(m[1]);
    const arr = byYear.get(y) ?? new Array(12).fill(0);
    arr[Number(m[2]) - 1]++;
    byYear.set(y, arr);
  }
  const curYear = Number(today.slice(0, 4));
  const curMonth = Number(today.slice(5, 7));

  return [...byYear.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([year, monthly]) => {
      const total = monthly.reduce((a, b) => a + b, 0);
      const earlySummer = monthly[5] + monthly[6];
      const autumn = monthly[8] + monthly[9] + monthly[10];
      // 11月まで観測できていなければ型は確定しない
      const complete = year < curYear || curMonth >= 12;
      const ratio =
        complete && total >= MIN_RECORDS && earlySummer > 0
          ? autumn / earlySummer
          : null;
      const type: RegimeType =
        ratio === null ? "unknown" : ratio >= AUTUMN_THRESHOLD ? "autumn" : "summer";
      return { year, total, monthly, earlySummer, autumn, ratio, type, complete };
    });
}

/** 月別シェア (合計1)。件数が0なら null */
function shapeOf(p: YearProfile): number[] | null {
  if (p.total <= 0) return null;
  return p.monthly.map((v) => v / p.total);
}

function averageShape(list: YearProfile[]): number[] | null {
  const shapes = list.map(shapeOf).filter((s): s is number[] => s !== null);
  if (!shapes.length) return null;
  const out = new Array(12).fill(0);
  for (const s of shapes) for (let i = 0; i < 12; i++) out[i] += s[i] / shapes.length;
  return out;
}

export type MonthForecast = {
  month: number;
  predicted: number;
  /** 予測の根拠に使った年 */
  basisYears: number[];
  /** 型が未確定など、信頼度が低い場合の理由 */
  caveat: string | null;
};

/**
 * 当年の途中までの実績から、指定月の件数を予測する。
 *
 * 当年の型が確定していれば同じ型の年の形状を、確定していなければ
 * 全年平均を使う。後者は誤差が大きいので caveat を必ず返す。
 */
export function forecastMonth(
  profiles: YearProfile[],
  targetYear: number,
  targetMonth: number,
  knownThroughMonth: number,
): MonthForecast | null {
  const cur = profiles.find((p) => p.year === targetYear);
  if (!cur || knownThroughMonth < 1) return null;
  const past = profiles.filter(
    (p) => p.year < targetYear && p.complete && p.total >= MIN_RECORDS,
  );
  if (past.length < 2) return null;

  const sameType = cur.type !== "unknown" ? past.filter((p) => p.type === cur.type) : [];
  const basis = sameType.length >= 1 ? sameType : past;
  const shape = averageShape(basis);
  if (!shape) return null;

  const knownShare = shape.slice(0, knownThroughMonth).reduce((a, b) => a + b, 0);
  if (knownShare <= 0) return null;
  const knownActual = cur.monthly.slice(0, knownThroughMonth).reduce((a, b) => a + b, 0);
  const predicted = (knownActual / knownShare) * shape[targetMonth - 1];

  return {
    month: targetMonth,
    predicted: Math.round(predicted),
    basisYears: basis.map((p) => p.year),
    caveat:
      cur.type === "unknown"
        ? "当年の型が未確定のため全年平均を使用。型が分かれてからの誤差は平均214%と大きい"
        : null,
  };
}

/**
 * 過去の各年について「その年の1〜8月から10月を予測できたか」を検証する。
 * 予測を出す以上、当たったかどうかを併記するために使う。
 */
export type BacktestRow = {
  year: number;
  actual: number;
  predictedAllYears: number;
  predictedSameType: number;
  errorAllYears: number;
  errorSameType: number;
  type: RegimeType;
};

export function backtestOctober(profiles: YearProfile[]): BacktestRow[] {
  const usable = profiles.filter((p) => p.complete && p.total >= MIN_RECORDS);
  const out: BacktestRow[] = [];
  for (const cur of usable) {
    const past = usable.filter((p) => p.year < cur.year);
    if (past.length < 2) continue;
    const janAug = cur.monthly.slice(0, 8).reduce((a, b) => a + b, 0);
    const actual = cur.monthly[9];
    if (actual <= 0) continue;
    const predict = (list: YearProfile[]): number => {
      const sh = averageShape(list);
      if (!sh) return 0;
      const s = sh.slice(0, 8).reduce((a, b) => a + b, 0);
      return s > 0 ? (janAug / s) * sh[9] : 0;
    };
    const pAll = predict(past);
    const same = past.filter((p) => p.type === cur.type);
    const pSame = same.length ? predict(same) : pAll;
    out.push({
      year: cur.year,
      actual,
      predictedAllYears: Math.round(pAll),
      predictedSameType: Math.round(pSame),
      errorAllYears: Math.abs(pAll - actual) / actual,
      errorSameType: Math.abs(pSame - actual) / actual,
      type: cur.type,
    });
  }
  return out;
}
