/**
 * data/discovery-queue.txt の URL を順次 Gemini で抽出し、
 * data/products-staging.csv に追記するバッチスクリプト。
 *
 * 使い方:
 *   npm run discover:products
 *
 * 入力:
 *   data/discovery-queue.txt
 *     - 1 行 1 URL
 *     - 空行と「#」始まりはスキップ
 *
 * 出力:
 *   data/products-staging.csv
 *     - products.csv と同じスキーマ
 *     - id は空欄（build:products 時に自動採番）
 *     - notes 列に「AI抽出 YYYY-MM-DD conf=high」を埋め込み、人間レビュー対象であることを明示
 *
 * 重複排除:
 *   - products.csv と products-staging.csv の url 列を見て、既に存在する URL はスキップ
 *
 * レート制御:
 *   - Gemini Free Tier は 15 RPM (= 4 秒/req) なので 4.5 秒の sleep を挟む
 *
 * 失敗時:
 *   - 個別 URL のエラーはログ出力して継続。バッチ全体は止めない。
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import Papa from "papaparse";
import { extractFromUrl } from "./lib/extract";

const ROOT = process.cwd();
const QUEUE = join(ROOT, "data", "discovery-queue.txt");
const STAGING = join(ROOT, "data", "products-staging.csv");
const PRODUCTS = join(ROOT, "data", "products.csv");

const STAGING_HEADER = [
  "id",
  "category",
  "subcategory",
  "name",
  "vendor",
  "url",
  "price",
  "purpose",
  "features",
  "target_use",
  "caveats",
  "related_article",
  "priority",
  "source",
  "notes",
  "audience",
  "affiliate_url",
];

const SLEEP_MS = 4500;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function readSeenUrls(): Set<string> {
  const seen = new Set<string>();
  for (const path of [PRODUCTS, STAGING]) {
    if (!existsSync(path)) continue;
    const csv = readFileSync(path, "utf8").replace(/^﻿/, "");
    const parsed = Papa.parse<Record<string, string>>(csv, {
      header: true,
      skipEmptyLines: true,
    });
    for (const row of parsed.data) {
      if (row.url) seen.add(row.url.trim());
    }
  }
  return seen;
}

function readQueue(): string[] {
  if (!existsSync(QUEUE)) {
    console.error(`No queue file at ${QUEUE}.`);
    console.error(`Create it with one URL per line (lines starting with # are skipped).`);
    process.exit(1);
  }
  return readFileSync(QUEUE, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .filter((l) => /^https?:\/\//.test(l));
}

function ensureStagingHeader() {
  if (existsSync(STAGING)) return;
  const csv = Papa.unparse({ fields: STAGING_HEADER, data: [] });
  writeFileSync(STAGING, "﻿" + csv + "\n", "utf8");
}

function appendRow(row: Record<string, string>) {
  ensureStagingHeader();
  // 1 行だけ unparse して末尾に追記
  const line = Papa.unparse([row], {
    header: false,
    columns: STAGING_HEADER,
  });
  let existing = readFileSync(STAGING, "utf8");
  if (!existing.endsWith("\n")) existing += "\n";
  writeFileSync(STAGING, existing + line + "\n", "utf8");
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: 環境変数 GEMINI_API_KEY が未設定。.env.local を確認。");
    process.exit(1);
  }

  const urls = readQueue();
  const seen = readSeenUrls();
  const todo = urls.filter((u) => !seen.has(u));
  console.error(
    `[queue] 全 ${urls.length} URL / 既存 ${urls.length - todo.length} 件スキップ / ${todo.length} 件処理`,
  );

  let extracted = 0;
  let rejected = 0;
  let errored = 0;
  const today = new Date().toISOString().slice(0, 10);

  for (let i = 0; i < todo.length; i++) {
    const url = todo[i];
    console.error(`\n[${i + 1}/${todo.length}] ${url}`);
    try {
      const r = await extractFromUrl(url);
      console.error(
        `  HTML=${r._fetchSize}B → 整形=${r._trimmedSize}B / ${r._elapsedMs}ms / conf=${r.confidence}`,
      );
      if (!r.is_bear_related) {
        rejected++;
        console.error(`  [reject] ${r.rejection_reason}`);
      } else {
        const row: Record<string, string> = {
          id: "",
          category: r.category,
          subcategory: r.subcategory,
          name: r.name,
          vendor: r.vendor,
          url,
          price: r.price,
          purpose: r.purpose,
          features: r.features,
          target_use: r.target_use,
          caveats: r.caveats,
          related_article: "",
          priority: "中",
          source: "AI抽出",
          notes: `AI抽出 ${today} conf=${r.confidence}`,
          audience: r.audience,
          affiliate_url: "",
        };
        appendRow(row);
        extracted++;
        console.error(`  [ok] ${r.name}`);
      }
    } catch (e) {
      errored++;
      console.error(`  [error] ${e instanceof Error ? e.message : e}`);
    }
    // 最後の URL の後は待たない
    if (i < todo.length - 1) await sleep(SLEEP_MS);
  }

  console.error(`\n=== 完了 ===`);
  console.error(`抽出 → staging 追記: ${extracted}`);
  console.error(`却下 (クマ対策外):    ${rejected}`);
  console.error(`エラー:               ${errored}`);
  if (extracted > 0) {
    console.error(`\n次のステップ: ${STAGING} を Excel で開いてレビュー → 採用行を data/products.csv に転記`);
  }
}

main().catch((e: unknown) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
