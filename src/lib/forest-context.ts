/**
 * 出没地点の森林率（土地利用メッシュとの突き合わせ）。
 *
 * public/data/landuse.json は国土数値情報 L03-b の土地利用細分メッシュから
 * 作った「約5kmメッシュごとの森林率」。キーは 2次メッシュ(6桁) + 2分割
 * (各0/1) の8桁で、4,760 の2次メッシュ × 4 = 19,040 件。
 *
 * === これで分かること ===
 * 1. 出没は「森林と人里の境界」に集中する
 *      森林率 40-60% の帯が国土比 2.25倍、80%以上の奥山は 0.72倍。
 *      奥山でも市街地でもなく、モザイク地帯が要注意という生態学的な形。
 * 2. 「年の型」は時期だけでなく空間にも出る
 *      秋型の年ほど出没地点の森林率が低い(=人里寄り)。
 *        秋型(2019/23/25) 平均50.6% / 森林率40%未満での発生 39.4%
 *        夏型(2020/21/22/24) 平均56.5% / 同 31.3%
 *      秋/初夏比 と 平均森林率 の相関 -0.835。
 *      堅果類が不作の年に人里へ降りる、という説明と整合する。
 *
 * === 注意 ===
 * 年次比較は必ず観測条件を固定すること。全ソースで見ると 2020年 65.6% →
 * 2026年 50.7% と単調に下がって見えるが、これは 2023年以降に追加した
 * ソースが人里寄りのデータを多く含むため。同一ソース(富山・青森・岩手)で
 * 見ると経年低下は無く、型による振動だけが残る。
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

type LanduseBlob = { meshes: Record<string, { f: number; n: number }> };

let cache: LanduseBlob | null | undefined;

function load(): LanduseBlob | null {
  if (cache !== undefined) return cache;
  try {
    const file = join(process.cwd(), "public", "data", "landuse.json");
    if (!existsSync(file)) {
      cache = null;
      return cache;
    }
    const blob = JSON.parse(readFileSync(file, "utf8")) as LanduseBlob;
    cache = blob && blob.meshes ? blob : null;
  } catch {
    cache = null;
  }
  return cache;
}

export function hasLanduseData(): boolean {
  return load() !== null;
}

/** 約5kmメッシュ(2次メッシュ+2分割)のコード */
export function meshCodeHalf(lat: number, lon: number): string {
  const p = Math.floor(lat * 1.5);
  const u = Math.floor(lon - 100);
  const a = lat * 1.5 - p;
  const b = lon - 100 - u;
  const q = Math.floor(a * 8);
  const v = Math.floor(b * 8);
  const r = Math.floor((a * 8 - q) * 2);
  const w = Math.floor((b * 8 - v) * 2);
  return `${p}${u}${q}${v}${r}${w}`;
}

/** その地点の森林率(0-1)。データが無ければ null */
export function forestRatioAt(lat: number, lon: number): number | null {
  const lu = load();
  if (!lu || !Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return lu.meshes[meshCodeHalf(lat, lon)]?.f ?? null;
}

type Rec = { lat?: number; lon?: number; date?: string; source?: string };

export type ForestBand = {
  label: string;
  /** 出没に占める割合 */
  share: number;
  /** 国土のメッシュに占める割合 */
  landShare: number;
  /** share / landShare。1超なら面積の割に出没が多い */
  lift: number;
  count: number;
};

const BANDS: [string, number, number][] = [
  ["0-20%", 0, 0.2],
  ["20-40%", 0.2, 0.4],
  ["40-60%", 0.4, 0.6],
  ["60-80%", 0.6, 0.8],
  ["80-100%", 0.8, 1.01],
];

/** 森林率の帯ごとに、出没の割合と国土の割合を比べる */
export function forestBands(records: Rec[]): { bands: ForestBand[]; matched: number } {
  const lu = load();
  if (!lu) return { bands: [], matched: 0 };
  const hit = new Array(BANDS.length).fill(0);
  let matched = 0;
  for (const r of records) {
    const f = forestRatioAt(r.lat as number, r.lon as number);
    if (f === null) continue;
    matched++;
    for (let i = 0; i < BANDS.length; i++)
      if (f >= BANDS[i][1] && f < BANDS[i][2]) {
        hit[i]++;
        break;
      }
  }
  const all = Object.values(lu.meshes).map((m) => m.f);
  const land = new Array(BANDS.length).fill(0);
  for (const f of all)
    for (let i = 0; i < BANDS.length; i++)
      if (f >= BANDS[i][1] && f < BANDS[i][2]) {
        land[i]++;
        break;
      }
  return {
    matched,
    bands: BANDS.map(([label], i) => {
      const share = matched > 0 ? hit[i] / matched : 0;
      const landShare = all.length > 0 ? land[i] / all.length : 0;
      return {
        label,
        share,
        landShare,
        lift: landShare > 0 ? share / landShare : 0,
        count: hit[i],
      };
    }),
  };
}

export type ForestByYear = {
  year: number;
  count: number;
  avgForest: number;
  /** 森林率40%未満(=人里寄り)で起きた割合 */
  nearHumanShare: number;
};

/**
 * 年ごとの出没地点の森林率。
 * sources を渡すと、そのソースだけに絞る(観測条件を固定するため。
 * 渡さないとソース追加の影響で単調に下がって見える)。
 */
export function forestByYear(records: Rec[], sources?: string[]): ForestByYear[] {
  const out = new Map<number, number[]>();
  for (const r of records) {
    if (sources && !sources.includes(r.source ?? "")) continue;
    const m = /^(\d{4})-/.exec(r.date ?? "");
    if (!m) continue;
    const f = forestRatioAt(r.lat as number, r.lon as number);
    if (f === null) continue;
    const y = Number(m[1]);
    const arr = out.get(y);
    if (arr) arr.push(f);
    else out.set(y, [f]);
  }
  return [...out.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([year, f]) => ({
      year,
      count: f.length,
      avgForest: f.reduce((a, b) => a + b, 0) / f.length,
      nearHumanShare: f.filter((x) => x < 0.4).length / f.length,
    }));
}

/**
 * 全期間に存在するソース = 年次比較に使えるソース。
 * これを使わずに年次比較すると、ソース追加の影響を実態と取り違える。
 */
export function stableSources(records: Rec[], years: number[]): string[] {
  const seen = new Map<string, Set<number>>();
  for (const r of records) {
    const m = /^(\d{4})-/.exec(r.date ?? "");
    if (!m) continue;
    const s = r.source ?? "";
    if (!s) continue;
    if (!seen.has(s)) seen.set(s, new Set());
    seen.get(s)!.add(Number(m[1]));
  }
  return [...seen.entries()]
    .filter(([, ys]) => years.every((y) => ys.has(y)))
    .map(([s]) => s);
}
