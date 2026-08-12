/**
 * public/data/sightings.json を約 0.5° グリッドのシャード（小ファイル）に分割する。
 *
 * 目的: /spot（21,305 件・オンデマンド ISR）が毎回 91k 件・31MB を読み込み parse して
 * メモリを使い切り OOM（status 0 → 5xx）していた問題の根本対策。各 spot は近傍セル
 * （数 KB）だけ読めば済むようにする。runtime は GitHub raw から該当セルだけ取得する。
 *
 * 決定的シリアライズ（セル内を id で安定ソート）により、内容が変わらないセルは
 * バイト列が同一 → git 差分ゼロ → 変更セルだけがコミットされる（churn 最小）。
 * セルが空になったら該当ファイルを削除する。
 *
 * 実行: npm run build:shards（build:sightings の後、cron/デプロイで）。
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { join } from "node:path";

const CELL_DEG = 0.5;

function cellKey(lat: number, lon: number): string {
  return `${Math.floor(lat / CELL_DEG)}_${Math.floor(lon / CELL_DEG)}`;
}

const inFile = join(process.cwd(), "public", "data", "sightings.json");
// シャードはリポジトリ直下 data/ に置く。GitHub raw からは取得できるが public/ 外なので
// Vercel の静的配信には載らない(デプロイ肥大とボットの直 DL を避ける)。
const outDir = join(process.cwd(), "data", "sightings-grid");

if (!existsSync(inFile)) {
  console.error(`[build-shards] not found: ${inFile}`);
  process.exit(1);
}

const blob = JSON.parse(readFileSync(inFile, "utf8")) as {
  records?: Array<Record<string, unknown> & { lat?: number; lon?: number; id?: string }>;
};
const records = blob.records ?? [];

const cells = new Map<string, typeof records>();
for (const r of records) {
  const { lat, lon } = r;
  if (
    typeof lat !== "number" ||
    typeof lon !== "number" ||
    !Number.isFinite(lat) ||
    !Number.isFinite(lon)
  )
    continue;
  const k = cellKey(lat, lon);
  let arr = cells.get(k);
  if (!arr) {
    arr = [];
    cells.set(k, arr);
  }
  arr.push(r);
}

mkdirSync(outDir, { recursive: true });

const wanted = new Set<string>();
for (const [k, arr] of cells) {
  // セル内を id で安定ソート → 内容不変ならバイト列同一（git 差分ゼロ）。
  arr.sort((a, b) => {
    const ai = String(a.id ?? "");
    const bi = String(b.id ?? "");
    return ai < bi ? -1 : ai > bi ? 1 : 0;
  });
  writeFileSync(join(outDir, `${k}.json`), JSON.stringify({ records: arr }));
  wanted.add(`${k}.json`);
}

// 空になったセルのシャードを削除（レコードが消えた場合の掃除）。
let removed = 0;
for (const f of readdirSync(outDir)) {
  if (f.endsWith(".json") && !wanted.has(f)) {
    rmSync(join(outDir, f));
    removed++;
  }
}

console.log(
  `[build-shards] wrote ${cells.size} cells from ${records.length} records (removed ${removed} stale)`,
);
