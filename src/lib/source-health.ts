/**
 * 取り込みソースの健全性。
 *
 * 福島県のデータが公開先の移行で4ヶ月止まっていたのに、誰も気づかなかった。
 * 京都府(BODIK)は2018年で更新停止しており、それも件数の多さに埋もれていた。
 * 「壊れていることに気づけない」状態が一番まずいので、計器を用意する。
 *
 * 判定は出没日(date)の最新値で行う。ingestedAt は 47% しか埋まっておらず
 * 過去分の一括取り込みで歪むため、鮮度の指標には使えない。
 *
 * 年度で完結する過去データ (yamanashi-r5 等) は止まって当然なので、
 * 「継続更新のはずのものが止まった」だけを拾えるよう、判定は件数と
 * 経過日数の両方で行い、閾値は呼び出し側で調整できるようにする。
 */

/**
 * ソースIDに年度が埋まっているものは「その年度で完結した過去データ」なので、
 * 止まっていて当然。これを警告に混ぜると本当の異常が埋もれる
 * (実測で stale 33件のうち大半がこれだった)。
 *   sapporo-2017 / yamanashi-r5 / nagano-pdf-20250903mokugeki など
 */
export function isArchivedSource(source: string): boolean {
  return /(^|[-_])(19|20)\d{2}/.test(source) || /(^|[-_])r\d(\b|[-_])/.test(source);
}

export type SourceHealth = {
  source: string;
  count: number;
  /** 最新の出没日 */
  latestDate: string;
  /** 最新出没日からの経過日数 */
  ageDays: number;
  /** 直近90日の件数 */
  recent90: number;
  /** その前の90日の件数 */
  prev90: number;
  /** 年度完結の過去データ (止まっていて正常) */
  archived: boolean;
  status: "ok" | "slowing" | "stale" | "archived";
};

type Rec = { source?: string; date?: string };

const STALE_DAYS = 60;
const SLOWING_DROP = 0.5;

function daysBetween(from: string, to: string): number {
  const a = Date.parse(`${from}T00:00:00Z`);
  const b = Date.parse(`${to}T00:00:00Z`);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
  return Math.round((b - a) / 86_400_000);
}

function shiftDays(iso: string, days: number): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3] + days)).toISOString().slice(0, 10);
}

export function sourceHealth(
  records: Rec[],
  today: string,
  opts?: { minCount?: number },
): SourceHealth[] {
  const minCount = opts?.minCount ?? 50;
  const cut90 = shiftDays(today, -90);
  const cut180 = shiftDays(today, -180);

  const agg = new Map<
    string,
    { count: number; latest: string; recent90: number; prev90: number }
  >();
  for (const r of records) {
    const src = (r.source ?? "").trim();
    const d = (r.date ?? "").trim();
    if (!src || !/^\d{4}-\d{2}-\d{2}$/.test(d)) continue;
    const cur = agg.get(src) ?? { count: 0, latest: "", recent90: 0, prev90: 0 };
    cur.count++;
    if (d > cur.latest) cur.latest = d;
    if (d >= cut90 && d <= today) cur.recent90++;
    else if (d >= cut180 && d < cut90) cur.prev90++;
    agg.set(src, cur);
  }

  const out: SourceHealth[] = [];
  for (const [source, a] of agg) {
    if (a.count < minCount) continue;
    const ageDays = daysBetween(a.latest, today);
    // 直近90日が前の90日から半減していれば「鈍化」。母数が小さいと
    // 揺れるので、前期間に一定件数あるものだけを対象にする。
    const slowing =
      a.prev90 >= 20 && a.recent90 < a.prev90 * SLOWING_DROP;
    const archived = isArchivedSource(source);
    const status: SourceHealth["status"] = archived
      ? "archived"
      : ageDays > STALE_DAYS
        ? "stale"
        : slowing
          ? "slowing"
          : "ok";
    out.push({
      source,
      count: a.count,
      latestDate: a.latest,
      ageDays,
      recent90: a.recent90,
      prev90: a.prev90,
      archived,
      status,
    });
  }
  // 問題のあるものを上に、経過日数の大きい順
  const rank = { stale: 0, slowing: 1, ok: 2, archived: 3 } as const;
  return out.sort(
    (x, y) => rank[x.status] - rank[y.status] || y.ageDays - x.ageDays,
  );
}
