#!/usr/bin/env node
/**
 * 各記事フォルダ (src/app/articles/<slug>/) に opengraph-image.tsx を生成する。
 * 記事は 1 記事 1 フォルダで [slug] 動的セグメントではないため、フォルダごとに
 * 同一セグメントの薄い opengraph-image を置く必要がある (描画本体は
 * src/lib/article-og.tsx の makeArticleOg に集約)。
 *
 * 記事を追加したら再実行すればよい (冪等)。
 *   node scripts/gen-article-og.mjs
 */
import { readdirSync, existsSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ARTICLES_DIR = join(process.cwd(), "src/app/articles");

function fileFor(slug) {
  return `import { makeArticleOg, OG_SIZE } from "@/lib/article-og";

// 自動生成 (scripts/gen-article-og.mjs)。記事の OG 画像。描画は article-og に集約。
export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KumaWatch｜クマ解説記事";

export default function Image() {
  return makeArticleOg(${JSON.stringify(slug)});
}
`;
}

let created = 0;
let skipped = 0;
for (const name of readdirSync(ARTICLES_DIR)) {
  const dir = join(ARTICLES_DIR, name);
  if (!statSync(dir).isDirectory()) continue;
  // カテゴリ一覧など、記事本体 (page.tsx) が無いフォルダは対象外。
  if (name === "category") continue;
  if (!existsSync(join(dir, "page.tsx"))) continue;
  const out = join(dir, "opengraph-image.tsx");
  writeFileSync(out, fileFor(name));
  created++;
}
console.log(`[gen-article-og] wrote ${created} opengraph-image.tsx (skipped ${skipped})`);
