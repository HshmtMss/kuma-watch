#!/usr/bin/env tsx
/**
 * 重要事案の速報を X (Twitter) に投稿する。
 * news-flash.yml / sharp9110-flash.yml の Push 配信ステップから呼ばれる想定。
 *
 * 「重要」の判定基準（comment キーワードで判定）:
 *   - 人身被害（襲われた・負傷・けが・死亡）
 *   - 市街地侵入（住宅地・市街地・小学校・駅・スーパー）
 *   - 大型個体（体長 2m / 体重 200kg 以上）
 *
 * 1 ジョブで最大 3 件まで投稿（rate limit 防止）。
 *
 * 入力: 直前コミットの diff から抽出された新規 records を JSON で標準入力に渡す
 *       (news-flash.yml の dispatch-slim.json と同じフォーマット)
 *       { newRecords: [{ id, prefectureName, cityName, date, comment, sourceUrl? }, ...] }
 *
 * 必要環境変数:
 *   X_CONSUMER_KEY / X_CONSUMER_SECRET / X_ACCESS_TOKEN / X_ACCESS_TOKEN_SECRET
 */
import { readFileSync } from "node:fs";
import {
  createClient,
  postTweet,
  readCredentialsFromEnv,
} from "./lib/x-post";

type NewRecord = {
  id: string;
  prefectureName: string;
  cityName: string;
  date: string;
  comment?: string;
  sourceUrl?: string;
};

type Payload = { newRecords: NewRecord[] };

const SITE_URL = "https://kuma-watch.jp";
const MAX_POSTS_PER_RUN = 3;

// 人身被害・市街地・大型個体のキーワード。
const KEYWORDS = {
  injury: ["人身", "襲わ", "負傷", "けが", "怪我", "死亡", "重傷", "搬送"],
  urban: [
    "住宅",
    "市街",
    "市街地",
    "小学校",
    "中学校",
    "保育",
    "幼稚",
    "駅",
    "スーパー",
    "コンビニ",
    "公園",
    "店舗",
  ],
  large: ["大型", "体長", "200kg", "300kg", "巨大", "2メートル"],
};

type AlertReason = "injury" | "urban" | "large";

function classifyImportance(r: NewRecord): AlertReason | null {
  const c = r.comment ?? "";
  for (const kw of KEYWORDS.injury) if (c.includes(kw)) return "injury";
  for (const kw of KEYWORDS.urban) if (c.includes(kw)) return "urban";
  for (const kw of KEYWORDS.large) if (c.includes(kw)) return "large";
  return null;
}

const REASON_PREFIX: Record<AlertReason, string> = {
  injury: "🚨 人身被害",
  urban: "⚠️ 市街地出没",
  large: "🐻 大型個体",
};

function buildTweet(r: NewRecord, reason: AlertReason): string {
  const placeLabel = `${r.prefectureName} ${r.cityName}`;
  const url = `${SITE_URL}/place/${encodeURIComponent(r.prefectureName)}/${encodeURIComponent(r.cityName)}`;
  const comment = (r.comment ?? "").trim();
  // URL は 23 字（t.co 短縮）想定。前置 + 場所 + URL + 改行で 80 字くらい使うので、
  // comment は最大 140 字程度に丸める。
  const maxComment = 140;
  const trimmedComment =
    comment.length > maxComment ? comment.slice(0, maxComment - 1) + "…" : comment;

  const lines = [
    `${REASON_PREFIX[reason]}｜${r.date}`,
    "",
    `📍 ${placeLabel}`,
  ];
  if (trimmedComment) {
    lines.push(trimmedComment);
  }
  lines.push("");
  lines.push(`周辺マップ ↓`);
  lines.push(url);
  return lines.join("\n");
}

async function main(): Promise<void> {
  const creds = readCredentialsFromEnv();
  if (!creds) {
    console.error("[post-x-alert] X credentials missing — skipping");
    process.exit(0);
  }

  // 標準入力 or 第 1 引数のファイルパスから JSON を読む
  let rawInput: string;
  const argPath = process.argv[2];
  if (argPath) {
    rawInput = readFileSync(argPath, "utf8");
  } else {
    rawInput = readFileSync(0, "utf8");
  }
  const payload = JSON.parse(rawInput) as Payload;
  if (!payload.newRecords || payload.newRecords.length === 0) {
    console.log("[post-x-alert] no new records — skipping");
    process.exit(0);
  }

  // 重要事案を判定
  const importantWithReason: Array<{ r: NewRecord; reason: AlertReason }> = [];
  for (const r of payload.newRecords) {
    const reason = classifyImportance(r);
    if (reason) importantWithReason.push({ r, reason });
  }
  if (importantWithReason.length === 0) {
    console.log(
      `[post-x-alert] no important records out of ${payload.newRecords.length}`,
    );
    process.exit(0);
  }

  console.log(
    `[post-x-alert] ${importantWithReason.length} important records (limit ${MAX_POSTS_PER_RUN})`,
  );

  const client = createClient(creds);
  const targets = importantWithReason.slice(0, MAX_POSTS_PER_RUN);
  for (const { r, reason } of targets) {
    const text = buildTweet(r, reason);
    if (text.length > 280) {
      console.error(
        `[post-x-alert] tweet too long (${text.length}) for ${r.id} — skip`,
      );
      continue;
    }
    try {
      const result = await postTweet(client, text);
      console.log(`[post-x-alert] posted id=${result.id} (${reason}) for ${r.id}`);
    } catch (e) {
      console.error(`[post-x-alert] failed for ${r.id}:`, (e as Error).message);
    }
    // rate limit 安全マージン
    await new Promise((r) => setTimeout(r, 2000));
  }
}

main().catch((e) => {
  console.error("[post-x-alert] failed:", e);
  process.exit(1);
});
