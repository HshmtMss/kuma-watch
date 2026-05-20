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
  "research-digest-001",
  "research-digest-002",
  "research-digest-003",
  "research-digest-004",
  "research-digest-005",
  "research-digest-006",
  "research-digest-007",
  "research-digest-008",
  "research-digest-009",
  "research-digest-010",
  "research-digest-011",
  "research-digest-012",
  "research-digest-013",
  "research-digest-014",
  "research-digest-015",
  "research-digest-016",
];

// 既に圧縮済みの画像 (< 400KB) を再圧縮すると JPEG が二重劣化するので、
// しきい値より大きい場合だけ圧縮する。本スクリプトを複数回実行しても安全。
const COMPRESS_THRESHOLD_BYTES = 400 * 1024;

async function compress(slug: string): Promise<void> {
  const path = join(DIR, `${slug}.jpg`);
  const before = statSync(path).size;
  if (before < COMPRESS_THRESHOLD_BYTES) {
    console.log(
      `[compress] ${slug}.jpg  ${(before / 1024).toFixed(0)} KB — skip (already small)`,
    );
    return;
  }
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
