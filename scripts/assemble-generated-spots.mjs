// spots-todo + blurbs + images を統合し、src/data/japan-landmarks-generated.json を書き出す。
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const blurbs = existsSync(".cache/spot-blurbs.json") ? JSON.parse(readFileSync(".cache/spot-blurbs.json", "utf8")) : {};
const images = existsSync(".cache/spot-images.json") ? JSON.parse(readFileSync(".cache/spot-images.json", "utf8")) : {};
const fame = existsSync(".cache/spot-fame.json") ? JSON.parse(readFileSync(".cache/spot-fame.json", "utf8")) : {};
const keyOf = (r) => `${r.name}@${r.lat},${r.lon}`;
const fameOf = (r) => (r.wd && fame[r.wd] != null ? fame[r.wd] : 0);

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

// 同名重複の区別に使う「きれいな地名」。muniName は最寄り出没の cityName 由来で
// 「〇〇市消防署南方…」のような長い説明が混ざるため、市区町村らしい短い値のみ採用し、
// それ以外は都道府県名(接尾辞を除く)にフォールバックする。
function cleanLoc(r) {
  const m = r.muni;
  if (m && /^[^\s\d]{2,6}[市区町村]$/.test(m)) return m;
  return (r.pref || "").replace(/[都道府県]$/, "") || r.pref || "";
}
const FAME_CANONICAL = 4; // サイトリンク数がこれ以上なら「素の名前」を独占(著名代表)
const FAME_KEEP = 3;      // 事前生成件数を抑えるための刈り込み閾値(これ未満は条件次第で除外)
// 観光/安全情報として価値が高く常に残す主要カテゴリ(神社仏閣が集まる sightseeing は除外)。
const MAJOR_KEEP = new Set(["mountain", "lake", "national_park", "onsen", "campground", "waterfall"]);

// --- Pass 1: blurb のあるものを実体化(表示名候補・著名度) ---
let noBlurb = 0, dropped = 0, trimmed = 0;
const cands = [];
for (const r of todo) {
  const b = blurbs[keyOf(r)];
  if (!b || !b.blurb) { noBlurb++; continue; }
  const baseName = (b.title && b.title.length >= 2 ? b.title : r.name).trim();
  cands.push({ r, b, baseName, fame: fameOf(r) });
}

// --- Pass 2: 同名グループごとに表示名を決定 ---
// 著名(サイトリンク≥4)な代表が1つだけ素の名前を保持し、他は「名前（地名）」で区別。
// 代表が無名(全員<4)なら全員に地名を付ける(どれも素の名前を名乗らせない)。
const groups = new Map();
for (const c of cands) (groups.get(c.baseName) ?? groups.set(c.baseName, []).get(c.baseName)).push(c);
let disamb = 0;
for (const [name, arr] of groups) {
  if (arr.length === 1) { arr[0].display = name; continue; }
  arr.sort((a, b) => b.fame - a.fame || (b.r.total || 0) - (a.r.total || 0));
  const topBare = arr[0].fame >= FAME_CANONICAL;
  arr.forEach((c, idx) => {
    if (idx === 0 && topBare) { c.display = name; }
    else { c.display = `${name}（${cleanLoc(c.r)}）`; disamb++; }
  });
}

// --- Pass 3: slug 割当・エントリ生成 ---
const out = [];
for (const c of cands) {
  const { r, b, display } = c;
  const img = images[keyOf(r)];

  // 事前生成の件数制約(日本語 slug はオンデマンド ISR 不可のため /spot/[slug] を全件
  // 事前生成する必要がある。件数が多すぎると Vercel のビルドが失敗する)。無名かつ
  // 情報の薄いスポットの長い尾を刈り、ビルドが通る規模に抑える。以下のいずれかを
  // 満たすものだけ残す: 画像あり / 著名(fame≥3) / 周辺にクマ出没あり / 主要カテゴリ
  // (山・湖・国立公園・温泉・キャンプ場・滝)。残る=有名寺社+観光価値/安全情報のある所。
  const hasImg = !!(img && img.imageUrl);
  const isMajor = MAJOR_KEEP.has(r.cat);
  if (!hasImg && c.fame < FAME_KEEP && (r.total || 0) === 0 && !isMajor) { trimmed++; continue; }

  let base = toSlug(display) || toSlug(r.name);
  if (!base) { dropped++; continue; }
  let slug = base, i = 2;
  while (usedSlugs.has(slug)) slug = `${base}-${i++}`;
  usedSlugs.add(slug);

  const entry = {
    slug,
    name: display,
    prefName: r.pref,
    category: r.cat,
    lat: r.lat,
    lon: r.lon,
    blurb: b.blurb,
  };
  if (r.muni) entry.muniName = r.muni;
  if (img && img.imageUrl) { entry.imageUrl = img.imageUrl; entry.imageCredit = img.imageCredit || ""; }
  if (c.fame > 0) entry.fame = c.fame;
  out.push(entry);
}
console.log(`同名区別: ${disamb} 件に地名付与`);

writeFileSync("src/data/japan-landmarks-generated.json", JSON.stringify(out, null, 0));
const byCat = {};
for (const r of out) byCat[r.category] = (byCat[r.category] || 0) + 1;
console.log(`生成 ${out.length} 件 (blurb未生成 ${noBlurb}, slug不能 ${dropped}, 長い尾を刈り込み ${trimmed})`);
console.log("カテゴリ内訳:", JSON.stringify(byCat));
console.log("画像あり:", out.filter((r) => r.imageUrl).length);
console.log("-> src/data/japan-landmarks-generated.json");
