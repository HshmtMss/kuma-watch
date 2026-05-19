#!/usr/bin/env tsx
/**
 * Imagen で生成した記事ヒーロー画像を、Web 配信用にリサイズ・JPEG 再圧縮する。
 * 元画像は ~1500-2300 KB → 圧縮後 200-400 KB を目標。
 * 既存 Unsplash 画像は触らない (元から軽量なので)。
 *
 * 対象: SLUGS 配列に列挙したスラッグのみ。
 */
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
// @ts-expect-error sharp は Next.js 経由の transitive dep
import sharp from "sharp";

const DIR = join(process.cwd(), "public", "articles");
const SLUGS = [
  "vehicle-collision",
  "bear-monitoring",
  "inbound-tourism",
  "bear-compensation",
  "hunter-license-guide",
  "disaster-bear",
  "bear-and-dogs",
  "repellent-comparison",
  "designated-management-2026",
  "bear-report",
  "bear-agriculture",
  "urban-bear",
  "bear-2025-retrospective",
  "autumn-forecast-2026",
  "beech-mast-bear",
];

async function compress(slug: string): Promise<void> {
  const path = join(DIR, `${slug}.jpg`);
  const before = statSync(path).size;
  const buf = readFileSync(path);
  const out = await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  writeFileSync(path, out);
  const after = out.length;
  console.log(
    `[compress] ${slug}.jpg  ${(before / 1024).toFixed(0)} → ${(after / 1024).toFixed(0)} KB (${((1 - after / before) * 100).toFixed(0)}% smaller)`,
  );
}

async function main(): Promise<void> {
  for (const slug of SLUGS) {
    try {
      await compress(slug);
    } catch (e) {
      console.error(`[compress] ${slug} FAILED:`, (e as Error).message);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
