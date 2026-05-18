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

  // 既存の news レコード URL セット (dedup 第 1 段 = Gemini 呼び出し前)
  // fetchNewsSightings に渡して Gemini 呼び出し前にフィルタリングする。
  // これにより 30 分間隔 cron でも Gemini quota をほぼ消費しない。
  const existingNewsUrls = new Set<string>();
  for (const r of snapshot.records) {
    if (r.source === "news" && r.sourceUrl) existingNewsUrls.add(r.sourceUrl);
  }

  // 既存レコードのフィンガープリント (dedup 第 2 段 = Gemini 抽出後)
  //
  // 同一インシデントを複数の報道機関 (NHK / Yahoo 転載 / 地元紙 …) が
  // 別々の記事 URL で報じると、第 1 段の URL dedup を素通りして地図上で
  // 3〜4 個のピンが重複する問題が発生していた。
  //
  // 粒度: 日付 + 都道府県 + 市町村 + 地区名。「家の敷地」「○○国道沿い」
  // までは同じインシデントとみなし、それ以下 (時刻・コメント本文) は
  // ソースごとの言い回し揺れで dedup に使えない。
  // sharp9110 (警察 110 番) も対象に含めることで、警察発表とニュース
  // 報道が重なった場合に権威ある sharp9110 を残す副次的効果も得られる。
  const fingerprint = (r: {
    date: string;
    prefectureName: string;
    cityName: string;
    sectionName: string;
  }) =>
    `${r.date}|${r.prefectureName}|${r.cityName}|${(r.sectionName ?? "").trim()}`;
  const existingFingerprints = new Set<string>();
  for (const r of snapshot.records) {
    if (r.source === "news" || r.source === "sharp9110") {
      existingFingerprints.add(fingerprint(r));
    }
  }
  console.log(
    `[ingest-news] existing snapshot: ${snapshot.records.length} records ` +
      `(${existingNewsUrls.size} news URLs, ${existingFingerprints.size} fingerprints)`,
  );

  // 最新ニュースを取得 (既処理 URL を除外して Gemini 呼び出しコストを最小化)
  const freshRaw = await fetchNewsSightings(existingNewsUrls);

  if (freshRaw.length === 0) {
    console.log("[ingest-news] no new items — skipping write");
    return;
  }

  // フィンガープリント dedup。バッチ内の同一インシデント重複も同時に弾く
  // ため、batchSeen にも追加していく。
  const batchSeen = new Set<string>();
  const fresh = [];
  let skippedDup = 0;
  for (const r of freshRaw) {
    const fp = fingerprint(r);
    if (existingFingerprints.has(fp) || batchSeen.has(fp)) {
      skippedDup++;
      continue;
    }
    batchSeen.add(fp);
    fresh.push(r);
  }

  if (fresh.length === 0) {
    console.log(
      `[ingest-news] all ${freshRaw.length} fresh items were duplicates — skipping write`,
    );
    return;
  }

  console.log(
    `[ingest-news] adding ${fresh.length} fresh news records (skipped ${skippedDup} duplicate-incident items)`,
  );

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
