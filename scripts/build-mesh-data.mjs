#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_SRC = join(
  __dirname,
  "..",
  "data-sources",
  "env-ministry",
  "bear_combined.csv",
);
const SRC = process.argv[2] ?? DEFAULT_SRC;
const OUT = join(__dirname, "..", "public", "data", "mesh.json");

const SECOND_LAT_STEP_MIN = 5;
const SECOND_LON_STEP_MIN = 7.5;
const THIRD_LAT_STEP_MIN = 2.5;
const THIRD_LON_STEP_MIN = 3.75;

function meshCenter(meshCode) {
  if (meshCode.length < 8) return null;
  const latIndex = Number(meshCode.slice(0, 2));
  const lonIndex = Number(meshCode.slice(2, 4));
  const secondLat = Number(meshCode.slice(4, 5));
  const secondLon = Number(meshCode.slice(5, 6));
  const thirdCode = Number(meshCode.slice(6, 8));
  const thirdLat = Math.floor(thirdCode / 10);
  const thirdLon = thirdCode % 10;
  const sw = {
    lat:
      (latIndex * 2) / 3 +
      (secondLat * SECOND_LAT_STEP_MIN) / 60 +
      (thirdLat * THIRD_LAT_STEP_MIN) / 60,
    lon:
      lonIndex +
      100 +
      (secondLon * SECOND_LON_STEP_MIN) / 60 +
      (thirdLon * THIRD_LON_STEP_MIN) / 60,
  };
  return {
    lat: sw.lat + THIRD_LAT_STEP_MIN / 60 / 2,
    lon: sw.lon + THIRD_LON_STEP_MIN / 60 / 2,
  };
}

const raw = readFileSync(SRC, "utf8");
const lines = raw.split(/\r?\n/);
const rows = [];
let skipped = 0;
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  const [code, second, sixth, latest, latestSingle] = line.split(",");
  const s = Number(second);
  const x = Number(sixth);
  const l = Number(latest);
  const ls = Number(latestSingle);
  if (s + x + l + ls === 0) {
    skipped++;
    continue;
  }
  const center = meshCenter(code);
  if (!center) {
    skipped++;
    continue;
  }
  rows.push({
    m: code,
    s,
    x,
    l,
    ls,
    lat: Number(center.lat.toFixed(5)),
    lon: Number(center.lon.toFixed(5)),
  });
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), count: rows.length, meshes: rows }));

console.log(`Wrote ${rows.length} meshes (${skipped} skipped) to ${OUT}`);
