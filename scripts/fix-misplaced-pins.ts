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
import {
  hasCopiedCoordinate,
  reconcileOfficialRecord,
} from "../src/lib/muni-reconcile";
import { buildGazetteer } from "../src/lib/place-gazetteer";
import type { UnifiedSighting } from "../src/lib/sources/types";

const GEOCODED_KINDS = new Set(["news", "llm-html"]);
const apply = process.argv.includes("--apply");


// データ由来の地名辞書を作る。教師は「市町村名と座標が整合しているレコード」。
function makeGazetteer(records: UnifiedSighting[]) {
  return buildGazetteer(
    records,
    (r) => {
      const mu = resolveMuni(r.prefectureName, r.cityName);
      return mu ? isInsideMuni(r.lat, r.lon, mu) === true : false;
    },
    (lat, lon) => containingCode(lat, lon),
  );
}

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
  const gaz = makeGazetteer(records);

  let unresolved = 0;
  let snapped = 0;
  let officialMismatch = 0;
  let copiedCoord = 0;
  let officialMoved = 0;
  let officialRelabeled = 0;
  const officialMoves: string[] = [];
  const officialRelabels: string[] = [];
  const moves: string[] = [];
  const labels: string[] = [];

  for (const r of records) {
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    const muni = resolveMuni(r.prefectureName, r.cityName);
    if (!muni) {
      unresolved++;
      continue;
    }
    // 座標の複写ミス(緯度と経度の小数部が一致)は、偶然その市の域内に落ちると
    // 行政界の判定をすり抜ける。域内でもこの署名だけは別途拾う。
    if (!GEOCODED_KINDS.has(r.sourceKind) && hasCopiedCoordinate(r.lat, r.lon)) {
      if (apply) r.geoInconsistent = true;
      copiedCoord++;
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
      // 公式ソースは座標・名前のどちらが誤りか行ごとに違う。観察場所の
      // 自由記述を第三の証拠にして判定する (muni-reconcile 参照)。
      const rec = reconcileOfficialRecord(r, gaz);
      if (rec.action === "move") {
        const moved = haversineKm(r.lat, r.lon, rec.lat, rec.lon);
        if (officialMoves.length < 20)
          officialMoves.push(
            `  ${r.prefectureName}${r.cityName} 観察場所="${r.sectionName ?? ""}" ` +
              `の座標が ${actualName} にあった → ${moved.toFixed(1)}km 移動 [${r.source}] ${r.date}`,
          );
        if (apply) {
          r.lat = rec.lat;
          r.lon = rec.lon;
          delete r.geoInconsistent;
        }
        officialMoved++;
      } else if (rec.action === "relabel") {
        if (officialRelabels.length < 20)
          officialRelabels.push(
            `  ${r.prefectureName}${r.cityName} → ${rec.cityName} ` +
              `(観察場所="${r.sectionName ?? ""}" が座標と一致) [${r.source}] ${r.date}`,
          );
        if (apply) {
          r.cityName = rec.cityName;
          delete r.geoInconsistent;
        }
        officialRelabeled++;
      } else {
        if (apply) r.geoInconsistent = true;
        officialMismatch++;
        if (labels.length < 20)
          labels.push(
            `  ${r.prefectureName}${r.cityName} と表示 / 実際は ${actualName} ` +
              `観察場所="${r.sectionName ?? ""}" [${r.sourceKind}/${r.source}] (${r.date})`,
          );
      }
    }
  }

  console.log(`総レコード: ${records.length}`);
  console.log(`市町村を照合できず判定スキップ: ${unresolved}`);
  console.log(`\n■ 座標を補正 (news / llm-html): ${snapped} 件`);
  for (const m of moves) console.log(m);
  if (snapped > moves.length) console.log(`  … 他 ${snapped - moves.length} 件`);
  console.log(
    `\n■ 公式ソース: 観察場所と市町村名が一致 → 座標が誤り。市域内へ移動: ${officialMoved} 件`,
  );
  for (const m of officialMoves) console.log(m);
  if (officialMoved > officialMoves.length)
    console.log(`  … 他 ${officialMoved - officialMoves.length} 件`);
  console.log(
    `\n■ 公式ソース: 観察場所と座標が一致 → 市町村名を修正: ${officialRelabeled} 件`,
  );
  for (const m of officialRelabels) console.log(m);
  if (officialRelabeled > officialRelabels.length)
    console.log(`  … 他 ${officialRelabeled - officialRelabels.length} 件`);
  console.log(
    `\n■ 公式ソース: 正誤を確定できず非表示にした: ${officialMismatch} 件`,
  );
  console.log(
    `■ 公式ソース: 緯度経度の複写ミスとして非表示にした: ${copiedCoord} 件`,
  );
  for (const l of labels) console.log(l);
  if (officialMismatch > labels.length)
    console.log(`  … 他 ${officialMismatch - labels.length} 件`);

  if (apply) {
    writeFileSync(file, JSON.stringify(blob));
    console.log(
      `\n[fix-pins] 計 ${snapped + officialMoved + officialRelabeled} 件を補正して書き戻した ` +
        `(報道等の座標 ${snapped} / 公式の座標 ${officialMoved} / 公式の市町村名 ${officialRelabeled})`,
    );
  } else {
    console.log("\n[fix-pins] dry-run (--apply で書き戻す)");
  }
}

main();
