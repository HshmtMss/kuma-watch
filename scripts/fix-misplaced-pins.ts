#!/usr/bin/env tsx
/**
 * 既存スナップショット (public/data/sightings.json) の市町村外ピンを補正する。
 *
 * 実行: `npx tsx scripts/fix-misplaced-pins.ts [--apply]`
 *       (既定は dry-run。--apply で書き戻す)
 *
 * build-sightings.ts に同じ補正を組み込んであるので通常は不要だが、あちらは
 * 全ソース再集約 (ネットワーク・GEMINI_API_KEY・数分) を伴う。こちらは
 * オフラインでスナップショットだけを直す。
 *
 * 補正方針はソースの一次情報がどちらかで分ける:
 *   - news / llm-html … 市区町村名が一次情報 (記事本文で裏取り済み)。座標は
 *     Nominatim / LLM 由来の派生値なので、市域外なら市町村内へ寄せる。
 *   - csv / arcgis / sharp9110 … 座標が一次情報 (自治体データの幾何・GPS)。
 *     市町村名との不一致は報告するだけで、座標も名前も書き換えない。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  containingCode,
  hasBoundaryData,
  haversineKm,
  isInsideMuni,
  pointInsideMuni,
  resolveMuni,
} from "../src/lib/muni-boundary";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import type { UnifiedSighting } from "../src/lib/sources/types";

const GEOCODED_KINDS = new Set(["news", "llm-html"]);
const apply = process.argv.includes("--apply");

function main(): void {
  if (!hasBoundaryData()) {
    console.error("[fix-pins] public/data/boundaries が読めない — 中止");
    process.exit(1);
  }
  const nameByCode = new Map(
    JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, `${m.prefName}${m.cityName}`]),
  );

  const file = join(process.cwd(), "public", "data", "sightings.json");
  const blob = JSON.parse(readFileSync(file, "utf8")) as {
    generatedAt?: number;
    records: UnifiedSighting[];
  };
  const records = blob.records;

  let unresolved = 0;
  let snapped = 0;
  let officialMismatch = 0;
  const moves: string[] = [];
  const labels: string[] = [];

  for (const r of records) {
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    const muni = resolveMuni(r.prefectureName, r.cityName);
    if (!muni) {
      unresolved++;
      continue;
    }
    if (isInsideMuni(r.lat, r.lon, muni) !== false) continue;

    const actual = containingCode(r.lat, r.lon);
    const actualName = actual ? (nameByCode.get(actual) ?? actual) : "(域外/海上)";

    if (GEOCODED_KINDS.has(r.sourceKind)) {
      const p = pointInsideMuni(muni, r.id);
      const moved = haversineKm(r.lat, r.lon, p.lat, p.lon);
      if (moves.length < 40)
        moves.push(
          `  ${r.prefectureName}${r.cityName} [${r.sourceKind}/${r.source}] ` +
            `${actualName} にあったピンを ${moved.toFixed(1)}km 移動 (${r.date})`,
        );
      if (apply) {
        r.lat = p.lat;
        r.lon = p.lon;
      }
      snapped++;
    } else {
      officialMismatch++;
      if (labels.length < 20)
        labels.push(
          `  ${r.prefectureName}${r.cityName} と表示 / 実際は ${actualName} ` +
            `[${r.sourceKind}/${r.source}] (${r.date})`,
        );
    }
  }

  console.log(`総レコード: ${records.length}`);
  console.log(`市町村を照合できず判定スキップ: ${unresolved}`);
  console.log(`\n■ 座標を補正 (news / llm-html): ${snapped} 件`);
  for (const m of moves) console.log(m);
  if (snapped > moves.length) console.log(`  … 他 ${snapped - moves.length} 件`);
  console.log(
    `\n■ 公式座標なので据え置き、名前だけ不一致 (csv / arcgis / sharp9110): ${officialMismatch} 件`,
  );
  for (const l of labels) console.log(l);
  if (officialMismatch > labels.length)
    console.log(`  … 他 ${officialMismatch - labels.length} 件`);

  if (apply) {
    writeFileSync(file, JSON.stringify(blob));
    console.log(`\n[fix-pins] ${snapped} 件を補正して書き戻した`);
  } else {
    console.log("\n[fix-pins] dry-run (--apply で書き戻す)");
  }
}

main();
