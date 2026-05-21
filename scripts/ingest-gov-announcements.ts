#!/usr/bin/env tsx
/**
 * 政府機関のクマ・鳥獣関連 press release を収集して
 * public/data/gov-announcements.json に追記するスクリプト。
 *
 * 想定: GitHub Actions の gov-announcements.yml から 6 時間ごとに実行。
 *
 * 必要環境変数: GEMINI_API_KEY
 *
 * フロー:
 *   1. 環境省・農水省・林野庁の press list HTML を fetch
 *   2. 候補をパース (日付・タイトル・URL)
 *   3. キーワード事前フィルタ (クマ/鳥獣保護/指定管理/緊急銃猟など)
 *   4. 既存 URL と重複除外 (Gemini を無駄打ちしない)
 *   5. Gemini で isBearRelated + summary + category 判定
 *   6. isBearRelated=true のみ書き戻し
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  classifyWithGemini,
  fetchGovCandidates,
  filterBearRelated,
  toAnnouncement,
  type GovAnnouncement,
} from "../src/lib/sources/gov";

type Snapshot = { generatedAt: number; items: GovAnnouncement[] };

async function main(): Promise<void> {
  const start = Date.now();
  if (!process.env.GEMINI_API_KEY) {
    console.error("[gov] GEMINI_API_KEY is required");
    process.exit(1);
  }

  const path = join(process.cwd(), "public", "data", "gov-announcements.json");
  const snap: Snapshot = existsSync(path)
    ? (JSON.parse(readFileSync(path, "utf8")) as Snapshot)
    : { generatedAt: 0, items: [] };
  if (!Array.isArray(snap.items)) snap.items = [];
  console.log(`[gov] existing: ${snap.items.length} items`);

  const candidates = await fetchGovCandidates();
  console.log(`[gov] candidates total: ${candidates.length}`);

  const filtered = filterBearRelated(candidates);
  console.log(`[gov] after keyword pre-filter: ${filtered.length}`);

  // 既存 URL 重複除外 (Gemini 呼び出し前)
  const existingUrls = new Set(snap.items.map((it) => it.url));
  const fresh = filtered.filter((it) => !existingUrls.has(it.url));
  console.log(`[gov] new (vs snapshot): ${fresh.length}`);

  if (fresh.length === 0) {
    console.log("[gov] no new items — skipping write");
    return;
  }

  const classified = await classifyWithGemini(fresh);
  console.log(`[gov] gemini classified: ${classified.length}`);

  const now = Date.now();
  const accepted: GovAnnouncement[] = [];
  for (const r of classified) {
    const item = fresh[r.index];
    if (!item) continue;
    if (!r.isBearRelated) continue;
    accepted.push(toAnnouncement(item, r, now));
  }
  console.log(`[gov] bear-related accepted: ${accepted.length}`);

  if (accepted.length === 0) {
    console.log("[gov] gemini said nothing relevant — skipping write");
    return;
  }

  // 新しいものを先頭に。同 URL の重複ガード (二重実行対策)
  const seen = new Set(snap.items.map((it) => it.id));
  const merged = [
    ...accepted.filter((a) => !seen.has(a.id)),
    ...snap.items,
  ].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));

  const next: Snapshot = { generatedAt: now, items: merged };
  writeFileSync(path, JSON.stringify(next, null, 2));
  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(
    `[gov] wrote ${merged.length} total (+${accepted.length} new) in ${elapsed}s`,
  );
}

main().catch((e) => {
  console.error("[gov] failed:", e);
  process.exit(1);
});
