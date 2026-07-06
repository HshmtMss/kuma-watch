// spots-todo + blurbs + images を統合し、src/data/japan-landmarks-generated.json を書き出す。
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const blurbs = existsSync(".cache/spot-blurbs.json") ? JSON.parse(readFileSync(".cache/spot-blurbs.json", "utf8")) : {};
const images = existsSync(".cache/spot-images.json") ? JSON.parse(readFileSync(".cache/spot-images.json", "utf8")) : {};
const keyOf = (r) => `${r.name}@${r.lat},${r.lon}`;

// 既存(手キュレーション)slug を集めて衝突回避
const lm = readFileSync("src/data/japan-landmarks.ts", "utf8");
const usedSlugs = new Set([...lm.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));

// slug 用サニタイズ: URL/パスを壊す文字を除去。日本語・英数・一部記号のみ残す。
function toSlug(name) {
  let s = name.trim()
    .replace(/[\/\\?#%&＆'"“”‘’<>|・（）()\[\]{}!！?？,、。\s]+/g, "")
    .replace(/^[-ー]+|[-ー]+$/g, "");
  return s || null;
}

const out = [];
let noBlurb = 0, dropped = 0;
for (const r of todo) {
  const b = blurbs[keyOf(r)];
  if (!b || !b.blurb) { noBlurb++; continue; } // blurb未生成はスキップ(後で再実行)
  const displayName = (b.title && b.title.length >= 2 ? b.title : r.name).trim();
  let base = toSlug(displayName) || toSlug(r.name);
  if (!base) { dropped++; continue; }
  let slug = base, i = 2;
  while (usedSlugs.has(slug)) slug = `${base}-${i++}`;
  usedSlugs.add(slug);

  const img = images[keyOf(r)];
  const entry = {
    slug,
    name: displayName,
    prefName: r.pref,
    category: r.cat,
    lat: r.lat,
    lon: r.lon,
    blurb: b.blurb,
  };
  if (r.muni) entry.muniName = r.muni;
  if (img && img.imageUrl) { entry.imageUrl = img.imageUrl; entry.imageCredit = img.imageCredit || ""; }
  out.push(entry);
}

writeFileSync("src/data/japan-landmarks-generated.json", JSON.stringify(out, null, 0));
const byCat = {};
for (const r of out) byCat[r.category] = (byCat[r.category] || 0) + 1;
console.log(`生成 ${out.length} 件 (blurb未生成でスキップ ${noBlurb}, slug不能 ${dropped})`);
console.log("カテゴリ内訳:", JSON.stringify(byCat));
console.log("画像あり:", out.filter((r) => r.imageUrl).length);
console.log("-> src/data/japan-landmarks-generated.json");
