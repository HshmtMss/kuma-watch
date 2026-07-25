// 管理画面「分析」タブ用の集計ロジック（純粋関数）。
// 入力は出没レコードの配列（getCachedSightings の結果）。公開アプリでは出さない
// 期間×地域×時間帯の横断分析を内部向けに計算する。すべて JST の日付文字列
// (YYYY-MM-DD) を基準にし、参照日 today は呼び出し側から渡す（テスト容易性）。

export type AnalyticsRecord = {
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM
  prefectureName?: string;
  cityName?: string;
  comment?: string;
  sourceKind?: string;
  source?: string;
  lat?: number;
  lon?: number;
  headCount?: number;
};

// ---- 日付ユーティリティ（UTC 深夜で単純計算。date は JST カレンダー日）----
function ymd(date: string): string | null {
  return /^\d{4}-\d{2}-\d{2}/.test(date) ? date.slice(0, 10) : null;
}
function toMs(date: string): number | null {
  const d = ymd(date);
  if (!d) return null;
  const t = Date.parse(d + "T00:00:00Z");
  return Number.isFinite(t) ? t : null;
}
function shiftDays(today: string, days: number): string {
  const t = toMs(today) ?? Date.parse(today + "T00:00:00Z");
  return new Date(t - days * 86400000).toISOString().slice(0, 10);
}
const DOW = ["日", "月", "火", "水", "木", "金", "土"];

// ============ A: 時系列トレンド ============
export type MonthPoint = { month: string; count: number };

/** 直近 months か月の月次件数（未来月は除外、欠測月は 0 で埋める）。 */
export function monthlyCounts(
  records: AnalyticsRecord[],
  today: string,
  months: number,
): MonthPoint[] {
  const counts = new Map<string, number>();
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    const m = d.slice(0, 7);
    counts.set(m, (counts.get(m) ?? 0) + 1);
  }
  const [ty, tm] = today.slice(0, 7).split("-").map(Number);
  const out: MonthPoint[] = [];
  for (let i = months - 1; i >= 0; i--) {
    const total = ty * 12 + (tm - 1) - i;
    const y = Math.floor(total / 12);
    const mo = (total % 12) + 1;
    const key = `${y}-${String(mo).padStart(2, "0")}`;
    out.push({ month: key, count: counts.get(key) ?? 0 });
  }
  return out;
}

export type SeasonPoint = {
  month: number; // 1-12
  thisYear: number;
  priorAvg: number; // 過去数年の同月平均
};

/**
 * 季節性: 各月(1-12)について今年の件数と、過去 priorYears 年の同月平均を返す。
 * 「今年は例年より多いか/早いか」を見る。
 */
export function seasonality(
  records: AnalyticsRecord[],
  today: string,
  priorYears: number,
): SeasonPoint[] {
  const thisYear = Number(today.slice(0, 4));
  const byYearMonth = new Map<number, number[]>();
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    const y = Number(d.slice(0, 4));
    const mo = Number(d.slice(5, 7));
    if (!byYearMonth.has(y)) byYearMonth.set(y, new Array(13).fill(0));
    byYearMonth.get(y)![mo] += 1;
  }
  const out: SeasonPoint[] = [];
  for (let mo = 1; mo <= 12; mo++) {
    const cur = byYearMonth.get(thisYear)?.[mo] ?? 0;
    const prior: number[] = [];
    for (let y = thisYear - 1; y >= thisYear - priorYears; y--) {
      const v = byYearMonth.get(y)?.[mo];
      if (v !== undefined) prior.push(v);
    }
    const avg = prior.length
      ? prior.reduce((a, b) => a + b, 0) / prior.length
      : 0;
    out.push({ month: mo, thisYear: cur, priorAvg: Math.round(avg * 10) / 10 });
  }
  return out;
}

// ============ C: 地域傾向・急増検知 ============
export type PrefRow = { pref: string; d90: number; d365: number };

/** 都道府県別の直近90日・直近365日件数（多い順）。 */
export function prefectureCounts(
  records: AnalyticsRecord[],
  today: string,
): PrefRow[] {
  const c90 = shiftDays(today, 90);
  const c365 = shiftDays(today, 365);
  const m = new Map<string, { d90: number; d365: number }>();
  for (const r of records) {
    const d = ymd(r.date);
    const p = (r.prefectureName ?? "").trim();
    if (!d || !p || d > today || d < c365) continue;
    const e = m.get(p) ?? { d90: 0, d365: 0 };
    e.d365 += 1;
    if (d >= c90) e.d90 += 1;
    m.set(p, e);
  }
  return [...m.entries()]
    .map(([pref, v]) => ({ pref, ...v }))
    .sort((a, b) => b.d90 - a.d90 || b.d365 - a.d365);
}

export type Hotspot = {
  pref: string;
  city: string;
  recent: number; // 直近 window 日
  baseline: number; // 過去平均（同 window 日あたり）
  ratio: number; // recent / max(baseline, 0.5)
};

/**
 * 急増検知: 直近 windowDays 日の市町村別件数が、その前 baselineDays 日の
 * 同期間あたり平均を大きく超えるものを抽出。運用上の早期警戒に使う。
 * 条件: recent >= minRecent かつ recent >= ratioMin × baseline。
 */
export function hotspots(
  records: AnalyticsRecord[],
  today: string,
  opts?: {
    windowDays?: number;
    baselineDays?: number;
    minRecent?: number;
    ratioMin?: number;
    limit?: number;
  },
): Hotspot[] {
  const windowDays = opts?.windowDays ?? 30;
  const baselineDays = opts?.baselineDays ?? 365;
  const minRecent = opts?.minRecent ?? 3;
  const ratioMin = opts?.ratioMin ?? 2;
  const limit = opts?.limit ?? 40;
  const recentCut = shiftDays(today, windowDays);
  const baseStart = shiftDays(today, windowDays + baselineDays);
  const rec = new Map<string, number>();
  const base = new Map<string, number>();
  const label = new Map<string, { pref: string; city: string }>();
  for (const r of records) {
    const d = ymd(r.date);
    const p = (r.prefectureName ?? "").trim();
    const c = (r.cityName ?? "").trim();
    if (!d || !p || !c || d > today) continue;
    const key = `${p}|${c}`;
    if (d >= recentCut) rec.set(key, (rec.get(key) ?? 0) + 1);
    else if (d >= baseStart) base.set(key, (base.get(key) ?? 0) + 1);
    if (!label.has(key)) label.set(key, { pref: p, city: c });
  }
  const windows = baselineDays / windowDays; // baseline 期間に含まれる window 数
  const out: Hotspot[] = [];
  for (const [key, recent] of rec) {
    if (recent < minRecent) continue;
    const baseline = (base.get(key) ?? 0) / windows; // window 日あたり平均
    const ratio = recent / Math.max(baseline, 0.5);
    if (ratio < ratioMin) continue;
    const l = label.get(key)!;
    out.push({
      pref: l.pref,
      city: l.city,
      recent,
      baseline: Math.round(baseline * 10) / 10,
      ratio: Math.round(ratio * 10) / 10,
    });
  }
  return out
    .sort((a, b) => b.ratio - a.ratio || b.recent - a.recent)
    .slice(0, limit);
}

// ============ E: 直近の勢い（前週比・前月比） ============
export type Momentum = {
  d7: number;
  prev7: number;
  d30: number;
  prev30: number;
  topMovers: { pref: string; recent: number; prev: number; delta: number }[];
};

function countBetween(
  records: AnalyticsRecord[],
  from: string,
  toExclusive: string,
): number {
  let n = 0;
  for (const r of records) {
    const d = ymd(r.date);
    if (d && d >= from && d < toExclusive) n += 1;
  }
  return n;
}

/** 直近7日 vs 前7日、直近30日 vs 前30日、県別の増加上位。 */
export function momentum(
  records: AnalyticsRecord[],
  today: string,
): Momentum {
  const tomorrow = shiftDays(today, -1); // today を含めるため翌日を排他上限に
  const d7from = shiftDays(today, 6);
  const p7from = shiftDays(today, 13);
  const d30from = shiftDays(today, 29);
  const p30from = shiftDays(today, 59);
  // 県別 30日 vs 前30日
  const rec = new Map<string, number>();
  const prev = new Map<string, number>();
  for (const r of records) {
    const d = ymd(r.date);
    const p = (r.prefectureName ?? "").trim();
    if (!d || !p) continue;
    if (d >= d30from && d < tomorrow) rec.set(p, (rec.get(p) ?? 0) + 1);
    else if (d >= p30from && d < d30from) prev.set(p, (prev.get(p) ?? 0) + 1);
  }
  const movers = [...rec.entries()]
    .map(([pref, recent]) => {
      const pv = prev.get(pref) ?? 0;
      return { pref, recent, prev: pv, delta: recent - pv };
    })
    .filter((m) => m.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 10);
  return {
    d7: countBetween(records, d7from, tomorrow),
    prev7: countBetween(records, p7from, d7from),
    d30: countBetween(records, d30from, tomorrow),
    prev30: countBetween(records, p30from, d30from),
    topMovers: movers,
  };
}

// ============ F: 分布の重心移動（年別） ============
export type CentroidPoint = { year: number; lat: number; lon: number; count: number };

/** 年ごとの出没の重心（緯度経度平均）。南下・都市接近の把握。直近 years 年。 */
export function yearlyCentroid(
  records: AnalyticsRecord[],
  today: string,
  years: number,
): CentroidPoint[] {
  const thisYear = Number(today.slice(0, 4));
  const agg = new Map<number, { la: number; lo: number; n: number }>();
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    const y = Number(d.slice(0, 4));
    if (y < thisYear - years + 1) continue;
    const e = agg.get(y) ?? { la: 0, lo: 0, n: 0 };
    e.la += r.lat;
    e.lo += r.lon;
    e.n += 1;
    agg.set(y, e);
  }
  return [...agg.entries()]
    .map(([year, e]) => ({
      year,
      lat: Math.round((e.la / e.n) * 1000) / 1000,
      lon: Math.round((e.lo / e.n) * 1000) / 1000,
      count: e.n,
    }))
    .sort((a, b) => a.year - b.year);
}

// ============ G: 親子連れ（複数頭）の割合 ============
export type MultiBearPoint = { month: string; total: number; multi: number; share: number };

/** 月次で headCount>=2 の割合（親子・群れのシグナル）。直近 months か月。 */
export function multiBearShare(
  records: AnalyticsRecord[],
  today: string,
  months: number,
): MultiBearPoint[] {
  const total = new Map<string, number>();
  const multi = new Map<string, number>();
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    const mo = d.slice(0, 7);
    total.set(mo, (total.get(mo) ?? 0) + 1);
    if (typeof r.headCount === "number" && r.headCount >= 2)
      multi.set(mo, (multi.get(mo) ?? 0) + 1);
  }
  const [ty, tm] = today.slice(0, 7).split("-").map(Number);
  const out: MultiBearPoint[] = [];
  for (let i = months - 1; i >= 0; i--) {
    const t = ty * 12 + (tm - 1) - i;
    const y = Math.floor(t / 12);
    const m = (t % 12) + 1;
    const key = `${y}-${String(m).padStart(2, "0")}`;
    const tot = total.get(key) ?? 0;
    const mul = multi.get(key) ?? 0;
    out.push({
      month: key,
      total: tot,
      multi: mul,
      share: tot ? Math.round((mul / tot) * 1000) / 10 : 0,
    });
  }
  return out;
}

// ============ H: 年次サマリー ============
export type YearSummary = {
  year: number;
  total: number;
  peakMonth: number; // 1-12（最多月）
  topPref: string;
  injuries: number;
};

/** 年別: 総件数・ピーク月・最多都道府県・人身被害数。直近 years 年。 */
export function yearlySummary(
  records: AnalyticsRecord[],
  today: string,
  years: number,
): YearSummary[] {
  const thisYear = Number(today.slice(0, 4));
  type Acc = {
    total: number;
    byMonth: number[];
    byPref: Map<string, number>;
    injuries: number;
  };
  const agg = new Map<number, Acc>();
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    const y = Number(d.slice(0, 4));
    if (y < thisYear - years + 1) continue;
    if (!agg.has(y))
      agg.set(y, {
        total: 0,
        byMonth: new Array(13).fill(0),
        byPref: new Map(),
        injuries: 0,
      });
    const a = agg.get(y)!;
    a.total += 1;
    a.byMonth[Number(d.slice(5, 7))] += 1;
    const p = (r.prefectureName ?? "").trim();
    if (p) a.byPref.set(p, (a.byPref.get(p) ?? 0) + 1);
    if (isInjuryComment(r.comment ?? "")) a.injuries += 1;
  }
  return [...agg.entries()]
    .map(([year, a]) => {
      let peakMonth = 0;
      let peakN = -1;
      for (let m = 1; m <= 12; m++)
        if (a.byMonth[m] > peakN) {
          peakN = a.byMonth[m];
          peakMonth = m;
        }
      let topPref = "";
      let topN = -1;
      for (const [p, n] of a.byPref)
        if (n > topN) {
          topN = n;
          topPref = p;
        }
      return { year, total: a.total, peakMonth, topPref, injuries: a.injuries };
    })
    .sort((a, b) => b.year - a.year);
}

// ============ B: 時間帯・曜日 ============
export type HourBucket = { label: string; count: number };

/** 時刻(time)がある記録だけで、2時間刻みの出没時間帯分布 + 総数。 */
export function hourHistogram(records: AnalyticsRecord[]): {
  buckets: HourBucket[];
  withTime: number;
} {
  const buckets = new Array(12).fill(0);
  let withTime = 0;
  for (const r of records) {
    const m = /^(\d{1,2}):(\d{2})$/.exec((r.time ?? "").trim());
    if (!m) continue;
    const h = Number(m[1]);
    if (h < 0 || h > 23) continue;
    withTime += 1;
    buckets[Math.floor(h / 2)] += 1;
  }
  return {
    withTime,
    buckets: buckets.map((count, i) => ({
      label: `${String(i * 2).padStart(2, "0")}-${String(i * 2 + 2).padStart(2, "0")}`,
      count,
    })),
  };
}

// 暦月 × 時間帯(2時間バケット)の件数。「何時に出るか」が季節でどう動くかを
// ヒートマップで見せる。時刻のある記録のみ集計（withTime/totalで網羅率を出す）。
export type HourSeasonRow = { month: number; total: number; buckets: number[] };
export type HourSeasonHeatmap = {
  rows: HourSeasonRow[]; // 12か月ぶん。buckets は長さ12(00-02,...,22-24)
  withTime: number;
  totalRecords: number;
  peak: { month: number; bucket: number; count: number };
};
export function seasonHourHeatmap(
  records: AnalyticsRecord[],
): HourSeasonHeatmap {
  const rows: HourSeasonRow[] = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    total: 0,
    buckets: new Array(12).fill(0),
  }));
  let withTime = 0;
  let totalRecords = 0;
  for (const r of records) {
    const d = ymd(r.date);
    if (!d) continue;
    totalRecords += 1;
    const mo = Number(d.slice(5, 7)) - 1;
    if (mo < 0 || mo > 11) continue;
    const tm = /^(\d{1,2}):(\d{2})$/.exec((r.time ?? "").trim());
    if (!tm) continue;
    const h = Number(tm[1]);
    if (h < 0 || h > 23) continue;
    withTime += 1;
    rows[mo].buckets[Math.floor(h / 2)] += 1;
    rows[mo].total += 1;
  }
  let peak = { month: 1, bucket: 0, count: 0 };
  for (const row of rows)
    for (let b = 0; b < 12; b++)
      if (row.buckets[b] > peak.count)
        peak = { month: row.month, bucket: b, count: row.buckets[b] };
  return { rows, withTime, totalRecords, peak };
}

/** 曜日別件数（日〜土）。全記録の date から算出。 */
export function dowHistogram(
  records: AnalyticsRecord[],
  today: string,
): { label: string; count: number }[] {
  const counts = new Array(7).fill(0);
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    const ms = toMs(d);
    if (ms === null) continue;
    counts[new Date(ms).getUTCDay()] += 1;
  }
  return counts.map((count, i) => ({ label: DOW[i], count }));
}

// ============ D: 重大事案 ============
const INJURY_RE =
  /(襲わ|襲撃|けが|ケガ|負傷|死亡|重傷|軽傷|人身|噛ま|かま|引っか|ひっか|被害に遭)/;
/**
 * 「けが人はいませんでした」「人的被害はありません」のような否定文を
 * 人身被害として数えないための除外。実測でこれが無いと11件を誤カウント
 * していた。安全に関わる指標なので、過大に出す方向の誤りは避ける。
 */
const INJURY_NEGATION_RE =
  /(被害はな|被害はあり|けが人はいな|けが人はな|けがはな|けがはあり|負傷者はいな|負傷者はな|人的被害はな|人身被害はな)/;

/** 人身被害らしき記録か（否定文を除く） */
function isInjuryComment(comment: string): boolean {
  return INJURY_RE.test(comment) && !INJURY_NEGATION_RE.test(comment);
}

const CULL_RE = /(駆除|捕獲|射殺|わな|罠|箱わな|くくりわな)/;

export type SeverityPoint = { month: string; injury: number; cull: number };
export type IncidentRow = {
  date: string;
  pref: string;
  city: string;
  comment: string;
};

/** 人身被害・駆除/捕獲の月次件数（直近 months か月）＋ 直近の人身被害一覧。 */
export function severity(
  records: AnalyticsRecord[],
  today: string,
  months: number,
  recentInjuryLimit = 30,
): { series: SeverityPoint[]; recentInjuries: IncidentRow[] } {
  const inj = new Map<string, number>();
  const cul = new Map<string, number>();
  const injuries: IncidentRow[] = [];
  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today) continue;
    const cm = r.comment ?? "";
    const mo = d.slice(0, 7);
    if (isInjuryComment(cm)) {
      inj.set(mo, (inj.get(mo) ?? 0) + 1);
      injuries.push({
        date: d,
        pref: (r.prefectureName ?? "").trim(),
        city: (r.cityName ?? "").trim(),
        comment: cm.slice(0, 80),
      });
    }
    if (CULL_RE.test(cm)) cul.set(mo, (cul.get(mo) ?? 0) + 1);
  }
  const [ty, tm] = today.slice(0, 7).split("-").map(Number);
  const series: SeverityPoint[] = [];
  for (let i = months - 1; i >= 0; i--) {
    const total = ty * 12 + (tm - 1) - i;
    const y = Math.floor(total / 12);
    const m = (total % 12) + 1;
    const key = `${y}-${String(m).padStart(2, "0")}`;
    series.push({
      month: key,
      injury: inj.get(key) ?? 0,
      cull: cul.get(key) ?? 0,
    });
  }
  const recentInjuries = injuries
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, recentInjuryLimit);
  return { series, recentInjuries };
}

// ---- 急増アラートボード（早期警戒）------------------------------------------
// 「今どこが急に増えているか」を信号色で出す。直近 windowDays 日と、その直前の
// 同じ長さの窓を県別に比べる。同一ソース内・短期の比較なので、ソースが年々増える
// 影響（年次の平年比を狂わせる罠）を受けにくく、当年の取り込みラグにも強い。
export type SurgeLevel =
  | "surge" // 急増（倍増級 or 新規多発）
  | "rising" // 増加傾向
  | "steady" // 横ばい/母数不足
  | "quiet"; // 目立って減少
export type SurgeRow = {
  pref: string;
  recent: number;
  prev: number;
  delta: number;
  ratio: number | null; // recent / prev（prev=0 は null=「新規」）
  level: SurgeLevel;
};
export type SurgeBoard = {
  windowDays: number;
  recentLabel: string; // 例 "6/26〜7/25"
  prevLabel: string; // 例 "5/27〜6/25"
  national: {
    recent: number;
    prev: number;
    delta: number;
    ratio: number | null;
    level: SurgeLevel;
    recent7: number;
    prev7: number;
  };
  rising: SurgeRow[]; // 急増・増加を強い順
  quiet: SurgeRow[]; // 目立って減った県（参考）
};

function mdLabel(d: string): string {
  const [, mo, da] = d.split("-");
  return `${Number(mo)}/${Number(da)}`;
}

function surgeLevel(recent: number, prev: number): SurgeLevel {
  const ratio = prev > 0 ? recent / prev : null;
  if (prev === 0 && recent >= 8) return "surge"; // 以前ゼロ→多発は新規急増
  if (ratio != null && ratio >= 2 && recent >= 10) return "surge";
  if (ratio != null && ratio >= 1.4 && recent >= 8) return "rising";
  if (ratio != null && ratio <= 0.5 && prev >= 12) return "quiet";
  return "steady";
}

export function surgeBoard(
  records: AnalyticsRecord[],
  today: string,
  windowDays = 30,
): SurgeBoard {
  const tomorrow = shiftDays(today, -1); // today を含める排他上限
  const rFrom = shiftDays(today, windowDays - 1); // 直近窓の始点
  const pFrom = shiftDays(today, windowDays * 2 - 1); // 前窓の始点
  const r7From = shiftDays(today, 6);
  const p7From = shiftDays(today, 13);

  const recent = new Map<string, number>();
  const prev = new Map<string, number>();
  let nR = 0,
    nP = 0,
    nR7 = 0,
    nP7 = 0;
  for (const r of records) {
    const d = ymd(r.date);
    if (!d) continue;
    const p = (r.prefectureName ?? "").trim();
    if (d >= rFrom && d < tomorrow) {
      nR++;
      if (p) recent.set(p, (recent.get(p) ?? 0) + 1);
      if (d >= r7From) nR7++;
    } else if (d >= pFrom && d < rFrom) {
      nP++;
      if (p) prev.set(p, (prev.get(p) ?? 0) + 1);
    }
    if (d >= p7From && d < r7From) nP7++;
  }

  const prefs = new Set([...recent.keys(), ...prev.keys()]);
  const rows: SurgeRow[] = [];
  for (const p of prefs) {
    const rc = recent.get(p) ?? 0;
    const pv = prev.get(p) ?? 0;
    rows.push({
      pref: p,
      recent: rc,
      prev: pv,
      delta: rc - pv,
      ratio: pv > 0 ? Number((rc / pv).toFixed(2)) : null,
      level: surgeLevel(rc, pv),
    });
  }
  const rank = (l: SurgeLevel) => (l === "surge" ? 2 : l === "rising" ? 1 : 0);
  const rising = rows
    .filter((r) => r.level === "surge" || r.level === "rising")
    .sort((a, b) => {
      if (rank(b.level) !== rank(a.level)) return rank(b.level) - rank(a.level);
      return b.delta - a.delta;
    });
  const quiet = rows
    .filter((r) => r.level === "quiet")
    .sort((a, b) => a.delta - b.delta)
    .slice(0, 6);

  return {
    windowDays,
    recentLabel: `${mdLabel(rFrom)}〜${mdLabel(today)}`,
    prevLabel: `${mdLabel(pFrom)}〜${mdLabel(shiftDays(rFrom, 1))}`,
    national: {
      recent: nR,
      prev: nP,
      delta: nR - nP,
      ratio: nP > 0 ? Number((nR / nP).toFixed(2)) : null,
      level: surgeLevel(nR, nP),
      recent7: nR7,
      prev7: nP7,
    },
    rising,
    quiet,
  };
}

// ---- 自治体カルテ（県内の市町村ベンチマーク）--------------------------------
// 「自分の県のどの市町村で起きているか／自分の市町村は増えているか」を出す。
// 直近1年の件数で県内の位置づけ（シェア）を、直近30日 vs 直前30日で今の動きを
// 見せる。県を選んだときだけ意味を持つので records は県で絞った前提。
export type MuniRow = {
  muni: string;
  recent: number; // 直近30日
  prev: number; // 直前30日
  delta: number;
  ratio: number | null;
  level: SurgeLevel;
  total12mo: number; // 直近1年
  share: number; // 県内シェア(%)
};
export type MunicipalityBoard = {
  pref: string;
  recentLabel: string;
  prevLabel: string;
  prefTotal12mo: number;
  prefRecent: number;
  prefPrev: number;
  muniCount: number; // 直近1年に出没があった市町村数
  rows: MuniRow[]; // 県内で多い順(上位)
};

export function municipalityBoard(
  records: AnalyticsRecord[], // 県で絞った前提
  today: string,
  pref: string,
  windowDays = 30,
  topN = 24,
): MunicipalityBoard {
  const tomorrow = shiftDays(today, -1);
  const rFrom = shiftDays(today, windowDays - 1);
  const pFrom = shiftDays(today, windowDays * 2 - 1);
  const yFrom = shiftDays(today, 364); // 直近1年

  const recent = new Map<string, number>();
  const prev = new Map<string, number>();
  const y12 = new Map<string, number>();
  let prefRecent = 0,
    prefPrev = 0,
    prefTotal12mo = 0;
  for (const r of records) {
    const d = ymd(r.date);
    if (!d) continue;
    const c = (r.cityName ?? "").trim();
    if (d >= yFrom && d < tomorrow) {
      prefTotal12mo++;
      if (c) y12.set(c, (y12.get(c) ?? 0) + 1);
    }
    if (d >= rFrom && d < tomorrow) {
      prefRecent++;
      if (c) recent.set(c, (recent.get(c) ?? 0) + 1);
    } else if (d >= pFrom && d < rFrom) {
      prefPrev++;
      if (c) prev.set(c, (prev.get(c) ?? 0) + 1);
    }
  }

  const munis = new Set([...y12.keys(), ...recent.keys()]);
  const rows: MuniRow[] = [];
  for (const m of munis) {
    const rc = recent.get(m) ?? 0;
    const pv = prev.get(m) ?? 0;
    const t12 = y12.get(m) ?? 0;
    rows.push({
      muni: m,
      recent: rc,
      prev: pv,
      delta: rc - pv,
      ratio: pv > 0 ? Number((rc / pv).toFixed(2)) : null,
      level: surgeLevel(rc, pv),
      total12mo: t12,
      share: prefTotal12mo > 0 ? Number(((t12 / prefTotal12mo) * 100).toFixed(1)) : 0,
    });
  }
  rows.sort((a, b) => b.total12mo - a.total12mo || b.recent - a.recent);

  return {
    pref,
    recentLabel: `${mdLabel(rFrom)}〜${mdLabel(today)}`,
    prevLabel: `${mdLabel(pFrom)}〜${mdLabel(shiftDays(rFrom, 1))}`,
    prefTotal12mo,
    prefRecent,
    prefPrev,
    muniCount: y12.size,
    rows: rows.slice(0, topN),
  };
}

// 単一市町村のカルテ用ベンチマーク。県内順位・県平均比・直近の動きを出す。
// records は県で絞った前提（prefScoped）。
export type MuniProfile = {
  pref: string;
  muni: string;
  total12mo: number;
  share: number; // 県内シェア(%)
  rank: number; // 県内順位（12mo件数の降順、1始まり。0=1年で出没なし）
  muniCount: number; // 県内で出没のあった市町村数
  prefAvg12mo: number; // 県内1市町村あたりの平均(12mo)
  vsAvg: number | null; // 県平均の何倍
  recent: number;
  prev: number;
  ratio: number | null;
  level: SurgeLevel;
  recentLabel: string;
  prevLabel: string;
};
export function municipalityProfile(
  records: AnalyticsRecord[], // 県で絞った前提
  today: string,
  pref: string,
  muni: string,
  windowDays = 30,
): MuniProfile {
  const tomorrow = shiftDays(today, -1);
  const rFrom = shiftDays(today, windowDays - 1);
  const pFrom = shiftDays(today, windowDays * 2 - 1);
  const yFrom = shiftDays(today, 364);

  const y12 = new Map<string, number>();
  let prefTotal12mo = 0;
  let recent = 0,
    prev = 0;
  for (const r of records) {
    const d = ymd(r.date);
    if (!d) continue;
    const c = (r.cityName ?? "").trim();
    if (d >= yFrom && d < tomorrow) {
      prefTotal12mo++;
      if (c) y12.set(c, (y12.get(c) ?? 0) + 1);
    }
    if (c !== muni) continue;
    if (d >= rFrom && d < tomorrow) recent++;
    else if (d >= pFrom && d < rFrom) prev++;
  }

  const total12mo = y12.get(muni) ?? 0;
  const sorted = [...y12.values()].sort((a, b) => b - a);
  const rank = total12mo > 0 ? sorted.filter((v) => v > total12mo).length + 1 : 0;
  const muniCount = y12.size;
  const prefAvg12mo = muniCount > 0 ? prefTotal12mo / muniCount : 0;

  return {
    pref,
    muni,
    total12mo,
    share:
      prefTotal12mo > 0
        ? Number(((total12mo / prefTotal12mo) * 100).toFixed(1))
        : 0,
    rank,
    muniCount,
    prefAvg12mo: Number(prefAvg12mo.toFixed(1)),
    vsAvg: prefAvg12mo > 0 ? Number((total12mo / prefAvg12mo).toFixed(1)) : null,
    recent,
    prev,
    ratio: prev > 0 ? Number((recent / prev).toFixed(2)) : null,
    level: surgeLevel(recent, prev),
    recentLabel: `${mdLabel(rFrom)}〜${mdLabel(today)}`,
    prevLabel: `${mdLabel(pFrom)}〜${mdLabel(shiftDays(rFrom, 1))}`,
  };
}
