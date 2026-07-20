#!/usr/bin/env tsx
/**
 * 台帳 (data/source-issues.json) の補正を既存スナップショットへ適用する。
 *
 * 実行: `npx tsx scripts/apply-source-issues.ts [--apply]` (既定は dry-run)
 *
 * build-sightings にも同じ処理が入っているので、次の全再集約でも同じ結果に
 * なる。こちらはスナップショットだけをオフラインで直したいとき用。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadSourceIssues } from "../src/lib/source-issues";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import type { UnifiedSighting } from "../src/lib/sources/types";

const MUNI_BY_CODE = new Map(JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, m]));
const apply = process.argv.includes("--apply");

function main(): void {
  const file = join(process.cwd(), "public", "data", "sightings.json");
  const blob = JSON.parse(readFileSync(file, "utf8")) as { records: UnifiedSighting[] };
  const ledger = loadSourceIssues();
  console.log(`台帳: ${ledger.size} 件`);

  let relabel = 0, move = 0, hide = 0, missing = 0;
  const ex: string[] = [];
  const byId = new Map(blob.records.map((r) => [r.id, r]));

  for (const [id, issue] of ledger) {
    const r = byId.get(id);
    if (!r) { missing++; continue; }
    if (issue.appliedAction === "relabel" && issue.correction?.muniCd) {
      const mu = MUNI_BY_CODE.get(issue.correction.muniCd);
      if (!mu) continue;
      const next = mu.cityName.replace(/^[^\s]+?郡/, "");
      if (ex.length < 6) ex.push(`  [名前] ${r.prefectureName}${r.cityName} → ${next} (${r.date} ${r.sectionName})`);
      if (apply) { r.cityName = next; delete r.geoInconsistent; }
      relabel++;
    } else if (issue.appliedAction === "move" && issue.correction?.lat != null) {
      if (ex.length < 12)
        ex.push(`  [座標] ${r.prefectureName}${r.cityName} ${r.sectionName}: ${r.lat.toFixed(5)},${r.lon.toFixed(5)} → ${issue.correction.lat.toFixed(5)},${issue.correction.lon!.toFixed(5)}`);
      if (apply) { r.lat = issue.correction.lat; r.lon = issue.correction.lon!; delete r.geoInconsistent; }
      move++;
    } else {
      if (apply) r.geoInconsistent = true;
      hide++;
    }
  }

  console.log(`\n■ 市町村名を修正: ${relabel} 件`);
  console.log(`■ 座標を実在地点へ修正: ${move} 件`);
  console.log(`■ 確定できず非表示のまま: ${hide} 件`);
  if (missing) console.log(`■ スナップショットに見当たらない: ${missing} 件`);
  console.log();
  ex.forEach((s) => console.log(s));

  if (apply) {
    writeFileSync(file, JSON.stringify(blob));
    console.log("\n[apply-source-issues] 書き戻した");
  } else {
    console.log("\n[apply-source-issues] dry-run (--apply で書き戻す)");
  }
}

main();
