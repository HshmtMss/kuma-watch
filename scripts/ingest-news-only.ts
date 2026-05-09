#!/usr/bin/env tsx
/**
 * 軽量 news-only 取り込みスクリプト。
 *
 * 既存 sightings.json を読み込み、Google News RSS から最新ニュースを取得・
 * Gemini で抽出し、未収録の news レコードだけを追加して書き戻す。
 * 全 70+ ソースを集約する build-sightings.ts (約 20 分) と分離することで、
 * 1 回 1〜2 分で完了する高頻度ジョブとして運用できる。
 *
 * 想定: GitHub Actions の news-flash.yml から 1 時間ごとに実行。
 *
 * 必要環境変数:
 *   GEMINI_API_KEY  — Gemini で抽出するため必須
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchNewsSightings } from "../src/lib/sources/news";
import type { UnifiedSighting } from "../src/lib/sources/types";

type Snapshot = { generatedAt: number; records: UnifiedSighting[] };

async function main(): Promise<void> {
  const start = Date.now();
  if (!process.env.GEMINI_API_KEY) {
    console.error(
      "[ingest-news] GEMINI_API_KEY is required for news extraction",
    );
    process.exit(1);
  }

  const snapshotPath = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(snapshotPath)) {
    console.error(
      "[ingest-news] sightings.json not found — run build:sightings first",
    );
    process.exit(1);
  }

  const raw = readFileSync(snapshotPath, "utf8");
  const snapshot = JSON.parse(raw) as Snapshot;
  if (!Array.isArray(snapshot.records)) {
    console.error("[ingest-news] sightings.json malformed");
    process.exit(1);
  }

  // 既存の news レコード URL セット (dedup の鍵)
  const existingNewsUrls = new Set<string>();
  for (const r of snapshot.records) {
    if (r.source === "news" && r.sourceUrl) existingNewsUrls.add(r.sourceUrl);
  }
  console.log(
    `[ingest-news] existing snapshot: ${snapshot.records.length} records (${existingNewsUrls.size} news with URL)`,
  );

  // 最新ニュースを取得
  const latest = await fetchNewsSightings();
  console.log(`[ingest-news] fetched ${latest.length} candidates from feeds`);

  // URL 重複していないものだけ抽出
  const fresh = latest.filter(
    (r) => r.sourceUrl && !existingNewsUrls.has(r.sourceUrl),
  );

  if (fresh.length === 0) {
    console.log("[ingest-news] no new items — skipping write");
    return;
  }

  console.log(`[ingest-news] adding ${fresh.length} fresh news records`);

  // 書き戻し: 末尾に append (既存配列の順序を保つ)
  const next: Snapshot = {
    generatedAt: Date.now(),
    records: [...snapshot.records, ...fresh],
  };
  writeFileSync(snapshotPath, JSON.stringify(next));
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(
    `[ingest-news] wrote ${next.records.length} total records in ${elapsed}s`,
  );
}

main().catch((err) => {
  console.error("[ingest-news] failed:", err);
  process.exit(1);
});
