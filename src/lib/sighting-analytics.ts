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
    if (INJURY_RE.test(r.comment ?? "")) a.injuries += 1;
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
    if (INJURY_RE.test(cm)) {
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
