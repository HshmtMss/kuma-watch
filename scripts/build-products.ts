/**
 * data/products.csv を読み、バリデーションと正規化を行って
 * src/data/products.json を生成する。
 *
 * 使い方:
 *   npm run build:products
 *
 * 仕様:
 * - CSV は data/products.csv 固定（手作業で Excel/Sheets 編集 → コミット）
 * - id が空の行は category ごとの prefix-NNN で自動採番
 * - audience='非表示' の行はビルド成果物には含めない
 * - 必須列 (category, name, url) が欠けている行はエラーで止める
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import Papa from "papaparse";

const ROOT = process.cwd();
const SRC = join(ROOT, "data", "products.csv");
const DST = join(ROOT, "src", "data", "products.json");

const CATEGORY_PREFIX: Record<string, string> = {
  撃退忌避: "repel",
  監視検知: "monitor",
  防護柵: "fence",
  住宅誘引物: "home",
  警報通知: "alert",
  捕獲駆除: "capture",
  個人装備: "gear",
  情報教育: "info",
};

const KNOWN_AUDIENCES = new Set(["個人", "自治体", "個人,自治体", "非表示"]);
const KNOWN_CATEGORIES = new Set(Object.keys(CATEGORY_PREFIX));

type RawRow = Record<string, string>;

type Product = {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  vendor: string;
  url: string;
  price: string;
  purpose: string;
  features: string;
  targetUse: string;
  caveats: string;
  relatedArticle: string;
  priority: string;
  source: string;
  notes: string;
  audience: string;
  affiliateUrl: string;
};

function clean(v: string | undefined): string {
  return (v ?? "").trim();
}

const csv = readFileSync(SRC, "utf8").replace(/^﻿/, "");
const parsed = Papa.parse<RawRow>(csv, {
  header: true,
  skipEmptyLines: true,
});

if (parsed.errors.length) {
  console.error("CSV parse errors:");
  for (const e of parsed.errors) console.error(`  row ${e.row}: ${e.message}`);
  process.exit(1);
}

const products: Product[] = [];
const seenIds = new Set<string>();
const counters: Record<string, number> = {};
const issues: string[] = [];

for (let i = 0; i < parsed.data.length; i++) {
  const row = parsed.data[i];
  const rowNum = i + 2; // header is row 1, data starts at 2
  const category = clean(row.category);
  const name = clean(row.name);
  const url = clean(row.url);

  if (!category && !name && !url) continue; // 完全空行
  if (!category) issues.push(`row ${rowNum}: category 空`);
  if (!name) issues.push(`row ${rowNum}: name 空`);
  if (!url) issues.push(`row ${rowNum}: url 空 (${name})`);
  if (category && !KNOWN_CATEGORIES.has(category)) {
    issues.push(`row ${rowNum}: 未知の category "${category}"`);
  }

  const audience = clean(row.audience) || "個人,自治体";
  if (!KNOWN_AUDIENCES.has(audience)) {
    issues.push(`row ${rowNum}: 未知の audience "${audience}" (${name})`);
  }

  let id = clean(row.id);
  if (!id) {
    const prefix = CATEGORY_PREFIX[category] ?? "misc";
    counters[prefix] = (counters[prefix] ?? 0) + 1;
    id = `${prefix}-${String(counters[prefix]).padStart(3, "0")}`;
  } else {
    // 既存 id の prefix カウンタを進めておく（同 prefix の追加採番が衝突しないように）
    const m = /^([a-z]+)-(\d+)$/.exec(id);
    if (m) {
      const [, prefix, n] = m;
      counters[prefix] = Math.max(counters[prefix] ?? 0, parseInt(n, 10));
    }
  }

  if (seenIds.has(id)) {
    issues.push(`row ${rowNum}: id 重複 "${id}"`);
  }
  seenIds.add(id);

  products.push({
    id,
    category,
    subcategory: clean(row.subcategory),
    name,
    vendor: clean(row.vendor),
    url,
    price: clean(row.price),
    purpose: clean(row.purpose),
    features: clean(row.features),
    targetUse: clean(row.target_use),
    caveats: clean(row.caveats),
    relatedArticle: clean(row.related_article),
    priority: clean(row.priority),
    source: clean(row.source),
    notes: clean(row.notes),
    audience,
    affiliateUrl: clean(row.affiliate_url),
  });
}

if (issues.length) {
  console.error("バリデーションエラー:");
  for (const m of issues) console.error("  " + m);
  process.exit(1);
}

const visible = products.filter((p) => p.audience !== "非表示");

const output = {
  generatedAt: new Date().toISOString(),
  total: products.length,
  visibleTotal: visible.length,
  products: visible,
};

writeFileSync(DST, JSON.stringify(output, null, 2) + "\n", "utf8");

const byAudience: Record<string, number> = {};
const byCategory: Record<string, number> = {};
for (const p of visible) {
  byAudience[p.audience] = (byAudience[p.audience] ?? 0) + 1;
  byCategory[p.category] = (byCategory[p.category] ?? 0) + 1;
}

console.log(`Wrote ${visible.length} products (skipped ${products.length - visible.length} 非表示) → ${DST}`);
console.log("audience:", byAudience);
console.log("category:", byCategory);
