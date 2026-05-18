#!/usr/bin/env tsx
/**
 * 既存 sightings.json の news 重複を一度だけ掃除するワンショットスクリプト。
 *
 * 同一インシデント (date + pref + city + sectionName が一致) を複数の報道機関
 * が別 URL で報じたために発生していた news レコード重複を除去する。
 *
 * dedup ルール:
 * - news / sharp9110 を同じフィンガープリント空間で扱う
 * - 同一フィンガープリントが複数ある場合は最古の ingestedAt を残す
 * - ただし sharp9110 (警察 110 番) があれば news を捨てて sharp9110 を残す
 * - news 以外で source が異なるレコード (arcgis / csv / llm-html …) は除外しない
 *
 * 実行方法:
 *   npx tsx scripts/dedupe-news-snapshot.ts          (dry-run)
 *   npx tsx scripts/dedupe-news-snapshot.ts --apply  (書き戻し)
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { UnifiedSighting } from "../src/lib/sources/types";

type Snapshot = { generatedAt: number; records: UnifiedSighting[] };

function fingerprint(r: UnifiedSighting): string {
  return `${r.date}|${r.prefectureName}|${r.cityName}|${(r.sectionName ?? "").trim()}`;
}

function main(): void {
  const apply = process.argv.includes("--apply");
  const snapshotPath = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(snapshotPath)) {
    console.error("[dedupe] sightings.json not found");
    process.exit(1);
  }
  const raw = readFileSync(snapshotPath, "utf8");
  const snapshot = JSON.parse(raw) as Snapshot;
  if (!Array.isArray(snapshot.records)) {
    console.error("[dedupe] sightings.json malformed");
    process.exit(1);
  }
  const before = snapshot.records.length;

  // 1 周目: 各フィンガープリントに sharp9110 が存在するかを記録。
  const hasSharp = new Set<string>();
  for (const r of snapshot.records) {
    if (r.source === "sharp9110") hasSharp.add(fingerprint(r));
  }

  // 2 周目: ingestedAt 昇順で並べ替えて、news の最古 1 件だけ残す。
  // sharp9110 が同じ FP にあれば news 側は全部捨てる。
  const orderable = snapshot.records.map((r, i) => ({
    r,
    i,
    t: typeof r.ingestedAt === "number" ? r.ingestedAt : 0,
  }));
  orderable.sort((a, b) => a.t - b.t || a.i - b.i);

  const keptNewsFp = new Set<string>();
  const keepIndex = new Set<number>();
  for (const { r, i } of orderable) {
    if (r.source !== "news") {
      keepIndex.add(i);
      continue;
    }
    const fp = fingerprint(r);
    if (hasSharp.has(fp)) continue; // sharp9110 優先で news は捨てる
    if (keptNewsFp.has(fp)) continue; // 同 FP の news は最古のみ
    keptNewsFp.add(fp);
    keepIndex.add(i);
  }

  // 元の配列順序を保って残す。
  const kept = snapshot.records.filter((_, i) => keepIndex.has(i));
  const removed = before - kept.length;

  console.log(`[dedupe] before: ${before} records`);
  console.log(`[dedupe] after:  ${kept.length} records`);
  console.log(`[dedupe] removed: ${removed} duplicate news records`);

  if (!apply) {
    console.log("[dedupe] DRY-RUN (no write). Re-run with --apply to write.");
    return;
  }
  if (removed === 0) {
    console.log("[dedupe] no duplicates to remove — skipping write");
    return;
  }

  const next: Snapshot = { generatedAt: Date.now(), records: kept };
  writeFileSync(snapshotPath, JSON.stringify(next));
  console.log(`[dedupe] wrote ${kept.length} records to ${snapshotPath}`);
}

main();
