#!/usr/bin/env tsx
/**
 * 日次サマリーを X (Twitter) に投稿する。
 * GitHub Actions の social-x-daily.yml から朝 7:00 JST に呼ばれる想定。
 *
 * 投稿内容: 直近 24h の全国出没件数 + 警戒トップ 3 県 + KumaWatch リンク。
 *
 * 必要環境変数:
 *   X_CONSUMER_KEY / X_CONSUMER_SECRET / X_ACCESS_TOKEN / X_ACCESS_TOKEN_SECRET
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  createClient,
  postTweet,
  readCredentialsFromEnv,
} from "./lib/x-post";

type UnifiedSighting = {
  id: string;
  date: string;
  prefectureName: string;
  cityName: string;
  comment?: string;
  ingestedAt?: number;
};

type Snapshot = { generatedAt: number; records: UnifiedSighting[] };

const SITE_URL = "https://kuma-watch.jp";

function formatMonthDay(d: Date): string {
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

async function main(): Promise<void> {
  const creds = readCredentialsFromEnv();
  if (!creds) {
    console.error("[post-x-daily] X credentials missing — skipping");
    process.exit(0);
  }

  const snapshotPath = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(snapshotPath)) {
    console.error("[post-x-daily] sightings.json not found — skipping");
    process.exit(0);
  }

  const snap = JSON.parse(readFileSync(snapshotPath, "utf8")) as Snapshot;

  // 直近 24h（ingestedAt ベース。古いデータは除外）
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const recent = snap.records.filter(
    (r) => typeof r.ingestedAt === "number" && now - r.ingestedAt < day,
  );

  // 県別の件数集計
  const prefCount = new Map<string, number>();
  for (const r of recent) {
    if (!r.prefectureName) continue;
    prefCount.set(r.prefectureName, (prefCount.get(r.prefectureName) ?? 0) + 1);
  }
  const top = [...prefCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // 件数が極端に少ない場合（夜間帯のみのデータなど）は投稿スキップ
  if (recent.length < 5) {
    console.log(
      `[post-x-daily] recent records too few (${recent.length}) — skipping`,
    );
    process.exit(0);
  }

  const today = new Date();
  const dateLabel = formatMonthDay(today);

  // 投稿本文を組み立て (280 字以内)
  const lines: string[] = [];
  lines.push(`🐻 ${dateLabel} 全国クマ出没サマリー`);
  lines.push("");
  lines.push(`📊 直近24h: ${recent.length}件`);
  if (top.length > 0) {
    lines.push("");
    lines.push("⚠️ 警戒トップ");
    top.forEach(([pref, count], i) => {
      const medal = ["🥇", "🥈", "🥉"][i] ?? "・";
      lines.push(`${medal} ${pref}（${count}件）`);
    });
  }
  lines.push("");
  lines.push(`全国マップ・詳細 ↓`);
  lines.push(`${SITE_URL}/place/ranking`);

  const text = lines.join("\n");

  if (text.length > 280) {
    console.error(`[post-x-daily] tweet too long (${text.length} chars):`, text);
    process.exit(1);
  }

  console.log("[post-x-daily] composing:\n" + text);

  const client = createClient(creds);
  const result = await postTweet(client, text);
  console.log(`[post-x-daily] posted: id=${result.id}`);
}

main().catch((e) => {
  console.error("[post-x-daily] failed:", e);
  process.exit(1);
});
