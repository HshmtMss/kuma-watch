/**
 * クエリリスト (data/discovery-queries.txt) から Gemini の Google 検索 grounding を
 * 使って製品候補 URL を集め、data/discovery-queue.txt に追記する。
 *
 * 使い方:
 *   npm run search:products
 *
 * 入力:
 *   data/discovery-queries.txt
 *     - 1 行 1 クエリ
 *     - # 始まりと空行はスキップ
 *
 * 出力:
 *   data/discovery-queue.txt (既存があれば末尾追記、ヘッダコメント付き)
 *     - クマ対策製品候補 URL
 *     - クエリごとに「## query」コメントブロックでグルーピング
 *
 * 仕組み:
 *   - Gemini に google_search ツールを渡し、各クエリで検索 → 結果 URL を取得
 *   - groundingChunks.web.uri は Vertex の redirect URL なので HEAD で実 URL に解決
 *   - 既存 products.csv / discovery-queue.txt の URL と重複したらスキップ
 *   - 明らかなノイズ (Wikipedia, 主要 SNS, 主要ニュース) はドメインで除外
 *
 * コスト:
 *   - Gemini Free Tier の検索 grounding は 1,500 req/日まで無料
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import Papa from "papaparse";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const ROOT = process.cwd();
const QUERIES = join(ROOT, "data", "discovery-queries.txt");
const QUEUE = join(ROOT, "data", "discovery-queue.txt");
const PRODUCTS = join(ROOT, "data", "products.csv");
const STAGING = join(ROOT, "data", "products-staging.csv");

const SLEEP_MS = 4500;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// 明らかにクマ対策製品ページではないドメイン。一次フィルタとして弾く。
// 完全網羅は無理なので、最終的には extract 側の is_bear_related で再判定する。
const EXCLUDED_DOMAINS = new Set([
  "ja.wikipedia.org",
  "en.wikipedia.org",
  "wikipedia.org",
  "twitter.com",
  "x.com",
  "facebook.com",
  "instagram.com",
  "youtube.com",
  "tiktok.com",
  "note.com",
  "qiita.com",
  "zenn.dev",
  "ameblo.jp",
  "hatena.ne.jp",
  "hatenablog.com",
  "www3.nhk.or.jp",
  "news.yahoo.co.jp",
  "asahi.com",
  "mainichi.jp",
  "yomiuri.co.jp",
  "sankei.com",
  "nikkei.com",
  // KumaWatch 自身は除外（自サイトを検索結果から拾わない）
  "kuma-watch.jp",
]);

function readQueries(): string[] {
  if (!existsSync(QUERIES)) {
    console.error(`No queries file at ${QUERIES}.`);
    console.error(`Create it with one query per line (# for comments).`);
    process.exit(1);
  }
  return readFileSync(QUERIES, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
}

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
  // 既存 queue 内の URL も seen 扱いにして二重投入を防ぐ
  if (existsSync(QUEUE)) {
    for (const l of readFileSync(QUEUE, "utf8").split("\n")) {
      const t = l.trim();
      if (t && !t.startsWith("#")) seen.add(t);
    }
  }
  return seen;
}

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function isExcludedDomain(url: string): boolean {
  const d = domainOf(url);
  if (!d) return true;
  if (EXCLUDED_DOMAINS.has(d)) return true;
  // www. 付きの除外もカバー
  if (d.startsWith("www.") && EXCLUDED_DOMAINS.has(d.slice(4))) return true;
  return false;
}

async function resolveRedirect(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; KumaWatchBot/1.0; +https://kuma-watch.jp)",
      },
    });
    return res.url || url;
  } catch {
    return url;
  }
}

type SearchHit = { url: string; title: string };

async function searchForQuery(query: string): Promise<SearchHit[]> {
  const result = await generateText({
    model: google("gemini-2.5-flash"),
    tools: { google_search: google.tools.googleSearch({}) },
    prompt: `日本国内のクマ対策（撃退・忌避・監視・防護・捕獲・装備・情報サービス等）に関する **製品ページ・商品ページ・サービス紹介ページ** を Web 検索で探してください。

検索クエリ: ${query}

対象として優先するもの:
- メーカー直販サイトの製品詳細ページ
- 公式販売店・正規代理店の商品ページ
- クラウドファンディング (Makuake / CAMPFIRE) の製品ページ
- 自治体・財団・研究機関の公式案内ページ

除外:
- ニュース記事・新聞報道
- 個人ブログ・SNS 投稿
- 百科事典・Q&A サイト

結果を箇条書きで返してください（候補のページ URL とその簡単な説明）。`,
  });

  type GoogleProviderMetadata = {
    groundingMetadata?: {
      groundingChunks?: Array<{
        web?: { uri?: string | null; title?: string | null } | null;
      }> | null;
    } | null;
  };
  const meta = result.providerMetadata?.google as GoogleProviderMetadata | undefined;
  const chunks = meta?.groundingMetadata?.groundingChunks ?? [];
  const hits: SearchHit[] = [];
  for (const c of chunks) {
    const uri = c.web?.uri;
    const title = c.web?.title ?? "";
    if (typeof uri === "string" && uri) {
      hits.push({ url: uri, title });
    }
  }
  return hits;
}

function appendQueueBlock(query: string, urls: SearchHit[]) {
  const header = existsSync(QUEUE) ? "" : `# search-products.ts による自動収集ファイル。\n# 1 行 1 URL。# 始まりはコメント。\n# レビューした後 \`npm run discover:products\` で抽出。\n\n`;
  const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
  const block = [
    `## ${stamp} query: ${query}`,
    ...urls.map((h) => `# ${h.title}\n${h.url}`),
    "",
  ].join("\n");
  const existing = existsSync(QUEUE) ? readFileSync(QUEUE, "utf8") : "";
  const sep = existing && !existing.endsWith("\n") ? "\n" : "";
  writeFileSync(QUEUE, existing + header + sep + block, "utf8");
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: GEMINI_API_KEY が未設定。.env.local を確認。");
    process.exit(1);
  }

  const queries = readQueries();
  console.error(`[query] ${queries.length} 件のクエリを処理`);

  let totalRaw = 0;
  let totalKept = 0;

  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];
    console.error(`\n[${i + 1}/${queries.length}] "${q}"`);

    let hits: SearchHit[];
    try {
      hits = await searchForQuery(q);
    } catch (e) {
      console.error(`  [error] 検索失敗: ${e instanceof Error ? e.message : e}`);
      continue;
    }
    totalRaw += hits.length;
    console.error(`  検索結果: ${hits.length} 件`);

    // 重複・除外ドメインの除去 → redirect 解決
    const seen = readSeenUrls();
    const kept: SearchHit[] = [];
    for (const h of hits) {
      const resolved = await resolveRedirect(h.url);
      if (seen.has(resolved)) continue;
      if (isExcludedDomain(resolved)) continue;
      // 同じバッチ内の重複も避ける
      if (kept.some((k) => k.url === resolved)) continue;
      kept.push({ url: resolved, title: h.title });
      seen.add(resolved);
    }
    console.error(`  採用: ${kept.length} 件 (重複・除外で ${hits.length - kept.length} 件落とした)`);

    if (kept.length > 0) {
      appendQueueBlock(q, kept);
      totalKept += kept.length;
    }

    if (i < queries.length - 1) await sleep(SLEEP_MS);
  }

  console.error(`\n=== 完了 ===`);
  console.error(`検索結果合計: ${totalRaw}`);
  console.error(`queue に追加:  ${totalKept}`);
  if (totalKept > 0) {
    console.error(`\n次のステップ: ${QUEUE} をエディタで確認 → 不要な URL を削除 → npm run discover:products`);
  }
}

main().catch((e: unknown) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
