/**
 * 年の「型」の判定と、それを使った予測。
 *
 * 出没件数の季節パターンは毎年同じではなく、質的に異なる2つの型を行き来する。
 * 実データ(2019-2025)の 秋(9-11月)/初夏(6-7月) 比:
 *
 *   2019  2020  2021  2022  2023  2024  2025
 *   2.68  0.98  0.51  0.39  2.54  0.43  3.36
 *    秋型  夏型  夏型  夏型   秋型  夏型   秋型
 *
 * 2.5以上と1.0以下に分かれ、中間値が1つも無い。連続的なばらつきではなく
 * 2状態の切り替わりとして扱うのが妥当。堅果類(ブナ・ミズナラ)の豊凶で
 * 説明できる可能性が高い。
 *
 * この比は同一年内の比なので、年ごとに変わる観測条件(ソース数は 2019年 4件
 * → 2025年 43件)が分子分母で相殺される。絶対件数での年次比較は
 * 取り込み拡大の影響を受けるため、型の判定には使えない。
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

/** 秋型と判定する 秋/初夏 比のしきい値。実データは 2.5以上 と 1.0以下 に分離 */
const AUTUMN_THRESHOLD = 1.5;
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
