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
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { aggregateAllSightings } from "../src/lib/sightings-cache";
import type { UnifiedSighting } from "../src/lib/sources/types";

// 全体再集約 (aggregateAllSightings) が生成する公式ソースの種別。これらは
// 毎回 fresh で置き換える。これ以外 (news 等) は news-flash が別途 append する
// ため、再集約では作られない → 前回スナップショットから引き継ぐ必要がある。
const REBUILT_KINDS = new Set(["csv", "sharp9110", "arcgis", "llm-html"]);

async function main(): Promise<void> {
  const start = Date.now();
  console.log("[build-sightings] aggregating from official + sharp9110 sources...");
  if (!process.env.GEMINI_API_KEY) {
    console.warn(
      "[build-sightings] GEMINI_API_KEY is not set — llm-html / llm-pdf sources will be skipped",
    );
  }

  const fresh = await aggregateAllSightings();
  const elapsedSec = ((Date.now() - start) / 1000).toFixed(1);

  if (fresh.length === 0) {
    console.error("[build-sightings] no records aggregated — refusing to overwrite snapshot");
    process.exit(1);
  }

  const outFile = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });

  // 前回スナップショットを読む。全件置換ではなくマージする:
  //   - news 等 (再集約が作らない種別) は前回分を引き継ぐ → 4h毎の全消しを防ぐ
  //   - ingestedAt は id で引き継ぎ、初出の id だけ now でスタンプ
  //     → 公式ソースの新規出没も「直近24h / 新着」に乗り、再集約で消えない
  const now = Date.now();
  let prevRecords: UnifiedSighting[] = [];
  try {
    const prev = JSON.parse(readFileSync(outFile, "utf8")) as {
      records?: UnifiedSighting[];
    };
    prevRecords = Array.isArray(prev.records) ? prev.records : [];
  } catch {
    // 初回 / 読めない場合は引き継ぎなし
  }
  const prevById = new Map(prevRecords.map((r) => [r.id, r]));

  // 再集約に含まれない種別 (news など) を前回から引き継ぐ。
  // news は無制限肥大を防ぐため直近 NEWS_RETENTION_DAYS 日分のみ引き継ぐ。
  const NEWS_RETENTION_DAYS = 180;
  const newsCutoff = new Date(now - NEWS_RETENTION_DAYS * 86_400_000)
    .toISOString()
    .slice(0, 10);
  const carried = prevRecords.filter(
    (r) =>
      !REBUILT_KINDS.has(r.sourceKind) &&
      (r.sourceKind !== "news" || (r.date ?? "") >= newsCutoff),
  );

  const records = [...fresh, ...carried];
  let stamped = 0;
  for (const r of records) {
    const prior = prevById.get(r.id);
    if (prior && typeof prior.ingestedAt === "number") {
      r.ingestedAt = prior.ingestedAt; // 既知: 初出時刻を保持
    } else if (!prior && typeof r.ingestedAt !== "number") {
      r.ingestedAt = now; // 新規 id: 初出としてスタンプ
      stamped++;
    }
    // prevSeen にあるが ingestedAt 無し (旧公式レコード) は触らない = 新着扱いしない
  }

  const blob = { generatedAt: Date.now(), records };
  writeFileSync(outFile, JSON.stringify(blob));

  const carriedNews = carried.filter((r) => r.sourceKind === "news").length;
  console.log(
    `[build-sightings] wrote ${records.length} records ` +
      `(fresh ${fresh.length} + carried ${carried.length}, news ${carriedNews}) ` +
      `newly stamped ${stamped} in ${elapsedSec}s`,
  );
}

main().catch((err) => {
  console.error("[build-sightings] failed:", err);
  process.exit(1);
});
