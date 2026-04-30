#!/usr/bin/env tsx
/**
 * 67 自治体ソースを実集約し public/data/sightings.json を更新する。
 *
 * 実行: `npm run build:sightings`  (tsx 経由 / 約 3 分)
 *
 * GitHub Actions の日次クーロン (.github/workflows/refresh-sightings.yml)
 * からも同じスクリプトが走り、差分があれば自動コミット・push する。
 *
 * 必要環境変数:
 *   GEMINI_API_KEY        — llm-html / llm-pdf 抽出に必須 (無くても skip して継続)
 *   KEMONOTE_USERNAME/PWD — kemonote API (デフォルトあり)
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { aggregateAllSightings } from "../src/lib/sightings-cache";

async function main(): Promise<void> {
  const start = Date.now();
  console.log("[build-sightings] aggregating from official + sharp9110 sources...");
  if (!process.env.GEMINI_API_KEY) {
    console.warn(
      "[build-sightings] GEMINI_API_KEY is not set — llm-html / llm-pdf sources will be skipped",
    );
  }

  const records = await aggregateAllSightings();
  const elapsedSec = ((Date.now() - start) / 1000).toFixed(1);

  if (records.length === 0) {
    console.error("[build-sightings] no records aggregated — refusing to overwrite snapshot");
    process.exit(1);
  }

  const outFile = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });

  const blob = { generatedAt: Date.now(), records };
  writeFileSync(outFile, JSON.stringify(blob));

  console.log(
    `[build-sightings] wrote ${records.length} records to ${outFile} in ${elapsedSec}s`,
  );
}

main().catch((err) => {
  console.error("[build-sightings] failed:", err);
  process.exit(1);
});
