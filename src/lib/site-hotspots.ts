/**
 * くり返し出没している「地点」の台帳。
 *
 * 既存の C「急増地域」は市町村ごとの件数比較なので、市町村を選んで見ると
 * 1行に潰れてしまい、自治体の中では使えない。自治体が実際に決めたいのは
 * 「市内のどこから手を付けるか」＝看板・草刈り・電気柵・箱わなをどこに置くか
 * なので、行政区画ではなく地点 (約1km メッシュ) で数える。
 *
 * メッシュの大きさは K「再発性」(recurrence.ts) と同じ 0.01 度 (緯度で約1.1km)。
 * 同じ土俵の数字であることを保つため、あえて揃えている。
 *
 * 出さないもの:
 *   - 他の市町村との比較・順位。自地域の中での優先順位だけを出す。
 *   - 母数が足りないときの分布。件数が一桁の地点で季節や時間帯を語らない。
 */

import { isInjuryRecord } from "@/lib/contact-risk";

export type SiteRec = {
  date?: string;
  lat?: number;
  lon?: number;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  comment?: string;
  headCount?: number;
};

export type SiteHotspot = {
  /** メッシュキー (安定した並び替え・React key 用) */
  key: string;
  /** 代表点 = そのメッシュの出没座標の平均 */
  lat: number;
  lon: number;
  /** 代表地名。最頻の地区名、無ければ市区町村名 */
  label: string;
  pref: string;
  city: string;
  /** 集計期間内の件数 */
  total: number;
  /** うち直近365日 */
  last12: number;
  /** 出没のあった日数 (同じ日の複数通報は1日と数える) */
  days: number;
  /** 出没のあった暦年の数。board.spanYears と同じなら毎年出ている常襲地点 */
  years: number;
  /** 最終出没日 */
  latestDate: string;
  /** 最も件数の多い月 (1-12)。件数が少ない地点では null */
  peakMonth: number | null;
  /** 人身被害の記録 */
  injuries: number;
  /** 複数頭 (親子連れの可能性) の記録 */
  multiBear: number;
};

export type SiteHotspotBoard = {
  /** 集計開始日 (YYYY-MM-DD) */
  since: string;
  /** 集計期間がまたぐ暦年の数。site.years の分母 (3年窓でも暦年は4つにまたがる) */
  spanYears: number;
  /** 集計対象になった件数 (期間内・座標あり) */
  scopedTotal: number;
  /** 出没のあったメッシュ数 */
  cells: number;
  /** 2件以上あったメッシュ数 */
  repeatCells: number;
  /** 2件以上のメッシュが全体に占める件数の割合 (0-1) */
  repeatShare: number;
  /** 上位n地点の累積シェア (0-1)。「上位5地点で市内の◯%」 */
  cumulative: { topN: number; share: number }[];
  /** 上位地点 (件数の多い順) */
  sites: SiteHotspot[];
};

const CELL_DEG = 0.01; // 緯度0.01度 ≒ 1.1km。recurrence.ts と同じ

function ymd(date: string | undefined): string | null {
  const d = (date ?? "").trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(d.slice(0, 10)) ? d.slice(0, 10) : null;
}

function shiftDays(today: string, days: number): string {
  const t = Date.parse(`${today}T00:00:00Z`);
  return new Date(t - days * 86_400_000).toISOString().slice(0, 10);
}

/** 最頻値。同数なら先に現れたものを採る */
function mode<T>(values: T[]): T | null {
  const m = new Map<T, number>();
  for (const v of values) m.set(v, (m.get(v) ?? 0) + 1);
  let best: T | null = null;
  let bestN = 0;
  for (const [v, n] of m) {
    if (n > bestN) {
      best = v;
      bestN = n;
    }
  }
  return best;
}

/**
 * 地点別の出没台帳を作る。
 *
 * @param records  対象地域まで絞ったレコード (県・市町村フィルタ後)
 * @param today    基準日 (JST の YYYY-MM-DD)
 */
export function siteHotspots(
  records: SiteRec[],
  today: string,
  opts?: {
    /** 集計期間 (年)。既定3年 */
    years?: number;
    /** 返す地点数。既定20 */
    limit?: number;
    /** 月別のピークを出すのに必要な最低件数。既定6 */
    minForPeak?: number;
  },
): SiteHotspotBoard {
  const years = opts?.years ?? 3;
  const limit = opts?.limit ?? 20;
  const minForPeak = opts?.minForPeak ?? 6;
  const since = shiftDays(today, Math.round(365.25 * years));
  const last12Cut = shiftDays(today, 365);

  type Acc = {
    key: string;
    latSum: number;
    lonSum: number;
    n: number;
    sections: string[];
    prefs: string[];
    cities: string[];
    dates: Set<string>;
    yearSet: Set<string>;
    last12: number;
    months: number[];
    latest: string;
    injuries: number;
    multi: number;
  };
  const cells = new Map<string, Acc>();
  let scopedTotal = 0;

  for (const r of records) {
    const d = ymd(r.date);
    if (!d || d > today || d < since) continue;
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    const lat = r.lat as number;
    const lon = r.lon as number;
    const key = `${Math.floor(lat / CELL_DEG)}:${Math.floor(lon / CELL_DEG)}`;
    scopedTotal += 1;
    let a = cells.get(key);
    if (!a) {
      a = {
        key,
        latSum: 0,
        lonSum: 0,
        n: 0,
        sections: [],
        prefs: [],
        cities: [],
        dates: new Set(),
        yearSet: new Set(),
        last12: 0,
        months: [],
        latest: d,
        injuries: 0,
        multi: 0,
      };
      cells.set(key, a);
    }
    a.latSum += lat;
    a.lonSum += lon;
    a.n += 1;
    const sec = (r.sectionName ?? "").trim();
    if (sec) a.sections.push(sec);
    const pref = (r.prefectureName ?? "").trim();
    if (pref) a.prefs.push(pref);
    const city = (r.cityName ?? "").trim();
    if (city) a.cities.push(city);
    if (d >= last12Cut) a.last12 += 1;
    a.dates.add(d);
    a.yearSet.add(d.slice(0, 4));
    a.months.push(Number(d.slice(5, 7)));
    if (d > a.latest) a.latest = d;
    if (isInjuryRecord(r)) a.injuries += 1;
    if ((r.headCount ?? 1) >= 2) a.multi += 1;
  }

  const all: SiteHotspot[] = [...cells.values()].map((a) => {
    const city = mode(a.cities) ?? "";
    return {
      key: a.key,
      lat: Number((a.latSum / a.n).toFixed(4)),
      lon: Number((a.lonSum / a.n).toFixed(4)),
      label: mode(a.sections) ?? city,
      pref: mode(a.prefs) ?? "",
      city,
      total: a.n,
      last12: a.last12,
      days: a.dates.size,
      years: a.yearSet.size,
      latestDate: a.latest,
      peakMonth: a.n >= minForPeak ? mode(a.months) : null,
      injuries: a.injuries,
      multiBear: a.multi,
    };
  });

  all.sort(
    (x, y) =>
      y.total - x.total ||
      y.last12 - x.last12 ||
      (y.latestDate > x.latestDate ? 1 : -1),
  );

  const repeatCells = all.filter((s) => s.total >= 2);
  const repeatTotal = repeatCells.reduce((n, s) => n + s.total, 0);
  const cumulative = [3, 5, 10, 20]
    .filter((n) => n <= all.length)
    .map((topN) => ({
      topN,
      share:
        scopedTotal > 0
          ? Number(
              (
                all.slice(0, topN).reduce((n, s) => n + s.total, 0) /
                scopedTotal
              ).toFixed(3),
            )
          : 0,
    }));

  return {
    since,
    spanYears: Number(today.slice(0, 4)) - Number(since.slice(0, 4)) + 1,
    scopedTotal,
    cells: all.length,
    repeatCells: repeatCells.length,
    repeatShare:
      scopedTotal > 0 ? Number((repeatTotal / scopedTotal).toFixed(3)) : 0,
    cumulative,
    sites: all.slice(0, limit),
  };
}
