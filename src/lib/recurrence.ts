/**
 * 出没の再発性 — 「一度出た場所には、しばらく近づかない」の定量的根拠。
 *
 * 予測モデル(年の型・堅果類の豊凶)が無くても使える短期の指標。
 * 予測が外れても効くので、対策としてはこちらが先に立つ。
 *
 * 注意した点:
 *   素朴に「出没の直後30日に再出没した割合」を出すと 52% になるが、これは
 *   「そこが元から出没の多い場所だから」でも同じ数字が出る。実際「直前30日」
 *   も 51% で前後対称だった。
 *   そこで対照を「同じメッシュの活動期(4/1〜11/30)の任意の日」に取り、その
 *   場所自身の平常時と比べる。実測:
 *      7日窓  直後 26.7% / 平常 9.5%  → 2.80倍
 *     14日窓  直後 34.7% / 平常15.8%  → 2.19倍
 *     30日窓  直後 43.0% / 平常27.0%  → 1.59倍
 *   窓が短いほど倍率が高く、時間とともに減衰する。場所の常時リスクとは別に、
 *   直近の出没そのものが短期のリスクを押し上げている。
 *
 * 対照の枠の取り方で数字が大きく変わる点に注意(下のコメント参照)。乱数では
 * なく数え上げで求める(画面を開くたびに数字が揺れると判断材料にならない)。
 */

const CELL_DEG = 0.01; // 緯度0.01度 ≒ 1.1km

type Rec = { lat?: number; lon?: number; date?: string };

function dayNumber(iso: string): number {
  return Math.round(Date.parse(`${iso}T00:00:00Z`) / 86_400_000);
}

function cellKey(lat: number, lon: number): string {
  return `${Math.floor(lat / CELL_DEG)}:${Math.floor(lon / CELL_DEG)}`;
}

export type RecurrenceResult = {
  windowDays: number;
  /** 出没の直後 windowDays 日以内に、同メッシュで再び出没した割合 */
  afterSighting: number;
  /** 同メッシュの全ての windowDays 日窓のうち、出没を含む割合 (その場所の平常時) */
  baseline: number;
  /** afterSighting / baseline。1.0 なら「直近の出没」に上乗せ効果は無い */
  lift: number;
  /** 判定に使った出没件数 */
  sampleSize: number;
};

/**
 * 再発性を測る。
 * 同一メッシュに2件以上ある地点だけを対象にする(1件しかない地点では
 * 「再発したか」を問えないため)。
 */
export function recurrence(
  records: Rec[],
  windowDays = 30,
  opts?: { since?: string },
): RecurrenceResult {
  const since = opts?.since;
  const byCell = new Map<string, number[]>();
  const points: { cell: string; day: number; yearStr: string }[] = [];

  for (const r of records) {
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    const d = (r.date ?? "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) continue;
    if (since && d < since) continue;
    const cell = cellKey(r.lat as number, r.lon as number);
    const day = dayNumber(d);
    const arr = byCell.get(cell);
    if (arr) arr.push(day);
    else byCell.set(cell, [day]);
    points.push({ cell, day, yearStr: d.slice(0, 4) });
  }
  for (const v of byCell.values()) v.sort((a, b) => a - b);

  let after = 0;
  let sample = 0;
  let baselineSum = 0;

  for (const p of points) {
    const days = byCell.get(p.cell);
    if (!days || days.length < 2) continue;
    sample++;
    // 直後 windowDays に再出没があるか
    if (days.some((d) => d > p.day && d <= p.day + windowDays)) after++;

    // 対照: 同じメッシュの「活動期の任意の日」を起点にしたとき、
    // windowDays 以内に出没がある割合。
    //
    // 枠の取り方で数字が大きく変わるので注意。観測期間(初回〜最終出没)に
    // 限ると活動期だけを見ることになり平常時を過大評価する(実測で lift が
    // 0.93倍と出て、出没直後に上乗せが無いように見えてしまった)。
    // 逆に暦年全体を使うと冬眠期を含むため平常時を過小評価し lift が
    // 過大に出る(同 2.16倍)。クマの活動期である 4/1〜11/30 を枠にする。
    const seasonStart = dayNumber(`${p.yearStr}-04-01`);
    const seasonEnd = dayNumber(`${p.yearStr}-11-30`);
    const starts = seasonEnd - seasonStart + 1;
    if (starts <= 0) continue;
    // 活動期の各起点日のうち、windowDays 以内に出没日を含むものを数える。
    // 出没日 d は起点 [d-windowDays, d-1] を覆う。重なりを排して合算する。
    let covered = 0;
    let cursor = seasonStart;
    for (const d of days) {
      const from = Math.max(d - windowDays, cursor, seasonStart);
      const to = Math.min(d - 1, seasonEnd);
      if (to >= from) {
        covered += to - from + 1;
        cursor = to + 1;
      }
    }
    baselineSum += covered / starts;
  }

  const baseline = sample > 0 ? baselineSum / sample : 0;
  const afterRate = sample > 0 ? after / sample : 0;
  return {
    windowDays,
    afterSighting: afterRate,
    baseline,
    lift: baseline > 0 ? afterRate / baseline : 0,
    sampleSize: sample,
  };
}

export type Concentration = { topPercent: number; shareOfSightings: number; cells: number };

/**
 * 出没がどれだけ特定の場所に集中しているか。
 * 「危険な場所を覚えて避ける」戦略がどこまで有効かの目安になる。
 */
export function concentration(records: Rec[], opts?: { since?: string }): {
  rows: Concentration[];
  totalCells: number;
  singleCells: number;
} {
  const since = opts?.since;
  const counts = new Map<string, number>();
  for (const r of records) {
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    const d = (r.date ?? "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) continue;
    if (since && d < since) continue;
    const k = cellKey(r.lat as number, r.lon as number);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  const sorted = [...counts.values()].sort((a, b) => b - a);
  const total = sorted.reduce((a, b) => a + b, 0);
  const rows = [1, 5, 10, 25, 50].map((p) => {
    const n = Math.max(1, Math.floor((sorted.length * p) / 100));
    const share = total > 0 ? sorted.slice(0, n).reduce((a, b) => a + b, 0) / total : 0;
    return { topPercent: p, shareOfSightings: share, cells: n };
  });
  return {
    rows,
    totalCells: sorted.length,
    singleCells: sorted.filter((c) => c === 1).length,
  };
}
