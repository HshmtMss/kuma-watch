#!/usr/bin/env node
/**
 * 国土交通省「国土数値情報 土地利用細分メッシュ L03-b-16 (平成28年度, JGD2000)」から
 * 4次メッシュ (2分の1 2次メッシュ, ~5km) 単位の森林率を集計する。
 *
 * 入力: https://nlftp.mlit.go.jp/ksj/gml/data/L03-b/L03-b-16/L03-b-16_{prim4}-jgd_GML.zip
 *   (1次メッシュ ≒ 80km 四方 ごとに配布, 各 zip ≒ 14MB)
 * 出力: public/data/landuse.json
 *   { "generatedAt":"...", "count":N, "meshes": { "<kumaMesh8>": { "f":0.735, "n":2500 }, ... } }
 *
 * 4次メッシュコード: prim(4) + sec(2) + halfLat(1) + halfLon(1) の 8 桁
 *   halfLat = 0 (south 5 of 3次 lat) or 1 (north 5)
 *   halfLon = 0 (west 5 of 3次 lon)  or 1 (east 5)
 *
 * L03-b 10 桁メッシュ: prim(4) + sec(2) + third(2) + tenth(2)
 *   third = (lat, lon) each 0-9 in 3次
 *   tenth = (lat, lon) each 0-9 in 10分の1 (100m)
 *
 * 土地利用種コード: "0500" = 森林
 *
 * 再開可能: zip は data-sources/landuse/cache/ にキャッシュ。途中状態は
 * data-sources/landuse/progress.json に保存 (処理済み 1次メッシュのリスト)。
 * 既に処理済みならスキップ。
 */
import * as shapefile from "shapefile";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const CACHE_DIR = join(PROJECT_ROOT, "data-sources/landuse/cache");
const TMP_DIR = join(PROJECT_ROOT, "data-sources/landuse/tmp");
const PRIM_LIST = join(PROJECT_ROOT, "data-sources/landuse/prim-meshes.txt");
const PROGRESS = join(PROJECT_ROOT, "data-sources/landuse/progress.json");
const OUT = join(PROJECT_ROOT, "public/data/landuse.json");

const YEAR = "16";
const DATUM = "jgd";
const BASE_URL = `https://nlftp.mlit.go.jp/ksj/gml/data/L03-b/L03-b-${YEAR}`;

const FOREST_CODE = "0500";

mkdirSync(CACHE_DIR, { recursive: true });
mkdirSync(TMP_DIR, { recursive: true });
mkdirSync(dirname(OUT), { recursive: true });
mkdirSync(dirname(PROGRESS), { recursive: true });

function loadPrimList() {
  if (!existsSync(PRIM_LIST)) {
    console.error(`Missing ${PRIM_LIST}. Run extractor first.`);
    process.exit(1);
  }
  return readFileSync(PRIM_LIST, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => /^\d{4}$/.test(l));
}

function loadProgress() {
  if (!existsSync(PROGRESS)) {
    return { done: {}, agg: {} };
  }
  return JSON.parse(readFileSync(PROGRESS, "utf8"));
}

function saveProgress(p) {
  writeFileSync(PROGRESS, JSON.stringify(p));
}

function saveOutput(agg) {
  const meshes = {};
  let count = 0;
  for (const [k, v] of Object.entries(agg)) {
    if (v.total === 0) continue;
    meshes[k] = { f: +(v.forest / v.total).toFixed(4), n: v.total };
    count++;
  }
  writeFileSync(
    OUT,
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      source: `MLIT L03-b-${YEAR} (JGD2000)`,
      count,
      meshes,
    }),
  );
}

async function downloadZip(prim) {
  const zipPath = join(CACHE_DIR, `L03-b-${YEAR}_${prim}.zip`);
  if (existsSync(zipPath)) return zipPath;
  const url = `${BASE_URL}/L03-b-${YEAR}_${prim}-${DATUM}_GML.zip`;
  const res = await fetch(url);
  if (!res.ok) {
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(zipPath, buf);
  return zipPath;
}

function extractZip(zipPath, prim) {
  const extractDir = join(TMP_DIR, prim);
  mkdirSync(extractDir, { recursive: true });
  execSync(`unzip -oq "${zipPath}" -d "${extractDir}"`);
  const shpPath = join(extractDir, `L03-b-${YEAR}_${prim}.shp`);
  const dbfPath = join(extractDir, `L03-b-${YEAR}_${prim}.dbf`);
  if (!existsSync(shpPath) || !existsSync(dbfPath)) {
    return null;
  }
  return { shpPath, dbfPath, extractDir };
}

function cleanupExtract(extractDir) {
  rmSync(extractDir, { recursive: true, force: true });
}

/**
 * L03-b 10桁メッシュ → KumaWatch 4次(2分の1 2次) 8桁メッシュ
 */
function to4jiMesh(code) {
  if (code.length < 8) return null;
  const prim = code.slice(0, 4);
  const sec = code.slice(4, 6);
  const thirdLat = Number(code[6]);
  const thirdLon = Number(code[7]);
  if (!Number.isFinite(thirdLat) || !Number.isFinite(thirdLon)) return null;
  const halfLat = thirdLat < 5 ? 0 : 1;
  const halfLon = thirdLon < 5 ? 0 : 1;
  return `${prim}${sec}${halfLat}${halfLon}`;
}

/** DBF を使わず shapefile の属性だけ読む。geometry も読まれるが
 *  openDbf() で属性専用にしたほうが速い。 */
async function aggregatePrim(prim, globalAgg) {
  const zipPath = await downloadZip(prim);
  if (!zipPath) {
    console.log(`  ${prim} 404`);
    return 0;
  }
  const ex = extractZip(zipPath, prim);
  if (!ex) {
    console.log(`  ${prim} extract failed`);
    return 0;
  }
  const source = await shapefile.openDbf(ex.dbfPath, { encoding: "shift-jis" });
  let n = 0;
  while (true) {
    const { value, done } = await source.read();
    if (done) break;
    n++;
    const mesh = value["メッシュ"];
    const lu = value["土地利用種"];
    if (typeof mesh !== "string") continue;
    const k = to4jiMesh(mesh);
    if (!k) continue;
    let e = globalAgg[k];
    if (!e) {
      e = { total: 0, forest: 0 };
      globalAgg[k] = e;
    }
    e.total++;
    if (lu === FOREST_CODE) e.forest++;
  }
  cleanupExtract(ex.extractDir);
  return n;
}

async function main() {
  const prims = loadPrimList();
  const progress = loadProgress();
  const agg = progress.agg;

  console.log(`${prims.length} primary meshes; ${Object.keys(progress.done).length} already done`);

  let processed = 0;
  let skipped404 = 0;
  const startTime = Date.now();
  for (let i = 0; i < prims.length; i++) {
    const prim = prims[i];
    if (progress.done[prim]) continue;
    const t0 = Date.now();
    try {
      const n = await aggregatePrim(prim, agg);
      if (n === 0) {
        progress.done[prim] = "skip";
        skipped404++;
      } else {
        progress.done[prim] = "ok";
        processed++;
      }
      const dt = ((Date.now() - t0) / 1000).toFixed(1);
      const elapsedMin = ((Date.now() - startTime) / 60000).toFixed(1);
      console.log(
        `[${i + 1}/${prims.length}] ${prim} features=${n} dt=${dt}s totalMin=${elapsedMin}`,
      );
    } catch (err) {
      console.log(`[${i + 1}/${prims.length}] ${prim} ERROR: ${err.message}`);
    }
    // Save progress every 5 primaries
    if ((i + 1) % 5 === 0 || i === prims.length - 1) {
      saveProgress(progress);
      saveOutput(agg);
    }
  }
  saveProgress(progress);
  saveOutput(agg);
  console.log(
    `\nDone. processed=${processed} skipped404=${skipped404} outputMeshes=${Object.keys(agg).length}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
