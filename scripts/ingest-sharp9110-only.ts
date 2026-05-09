#!/usr/bin/env tsx
/**
 * Sharp9110 単独取り込みスクリプト。
 *
 * Sharp9110 (公衆衛生通報情報) は単一 API 呼び出しで全国分が取れる軽量
 * ソース。news 同様に高頻度 (15 分間隔) で polling し、PostId ベースで
 * 重複排除。新規があれば sightings.json に追加して push する。
 *
 * 想定: GitHub Actions の sharp9110-flash.yml から 15 分ごとに実行。
 * Actions 分数: 1 run ≒ 30 秒 × 96 回/日 × 30 ≒ 1,440 min/月。
 * 全 cron 合計が無料枠を超えそうなら間隔を 30 min に伸ばす想定。
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getSharp9110Sightings } from "../src/lib/sources/all-records";
import type { UnifiedSighting } from "../src/lib/sources/types";

type Snapshot = { generatedAt: number; records: UnifiedSighting[] };

async function main(): Promise<void> {
  const start = Date.now();
  const snapshotPath = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(snapshotPath)) {
    console.error(
      "[ingest-sharp9110] sightings.json not found — run build:sightings first",
    );
    process.exit(1);
  }

  const raw = readFileSync(snapshotPath, "utf8");
  const snapshot = JSON.parse(raw) as Snapshot;
  if (!Array.isArray(snapshot.records)) {
    console.error("[ingest-sharp9110] sightings.json malformed");
    process.exit(1);
  }

  // 既存 Sharp9110 レコードの id を収集
  const existingIds = new Set<string>();
  for (const r of snapshot.records) {
    if (r.source === "sharp9110") existingIds.add(String(r.id));
  }
  console.log(
    `[ingest-sharp9110] existing snapshot: ${snapshot.records.length} records (${existingIds.size} sharp9110)`,
  );

  // 最新の Sharp9110 を取得
  const latest = await getSharp9110Sightings();
  console.log(`[ingest-sharp9110] fetched ${latest.length} from sharp9110`);

  // 未収録のものだけ抽出
  const fresh = latest
    .map((s) => ({ ...s, source: "sharp9110" }))
    .filter((s) => !existingIds.has(String(s.id)));

  if (fresh.length === 0) {
    console.log("[ingest-sharp9110] no new records — skipping write");
    return;
  }

  console.log(`[ingest-sharp9110] adding ${fresh.length} fresh records`);
  // ingestedAt を付与 (高頻度取り込みなので「数分前」表示の鍵になる)
  const stamped = fresh.map((s) => ({ ...s, ingestedAt: Date.now() }));

  const next: Snapshot = {
    generatedAt: Date.now(),
    records: [...snapshot.records, ...stamped],
  };
  writeFileSync(snapshotPath, JSON.stringify(next));
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(
    `[ingest-sharp9110] wrote ${next.records.length} total records in ${elapsed}s`,
  );
}

main().catch((err) => {
  console.error("[ingest-sharp9110] failed:", err);
  process.exit(1);
});
