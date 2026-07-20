// spots-todo + blurbs + images を統合し、src/data/japan-landmarks-generated.json を書き出す。
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { kanaToRomaji, toAsciiSlug } from "./lib/romaji.mjs";

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const blurbs = existsSync(".cache/spot-blurbs.json") ? JSON.parse(readFileSync(".cache/spot-blurbs.json", "utf8")) : {};
const images = existsSync(".cache/spot-images.json") ? JSON.parse(readFileSync(".cache/spot-images.json", "utf8")) : {};
const fame = existsSync(".cache/spot-fame.json") ? JSON.parse(readFileSync(".cache/spot-fame.json", "utf8")) : {};
const enwiki = existsSync(".cache/spot-enwiki.json") ? JSON.parse(readFileSync(".cache/spot-enwiki.json", "utf8")) : {};
const readings = existsSync("src/data/name-readings.json") ? JSON.parse(readFileSync("src/data/name-readings.json", "utf8")) : {};
// 旧(デプロイ済み)日本語 slug の生成 JSON: 日本語 slug → ローマ字 slug のリダイレクト
// 対応表を作るため座標一致で旧 slug を引く。※assemble を複数回回すと出力(ローマ字版)を
// 誤って「旧」に読んでしまうので、移行前の日本語版スナップショット(.cache/old-japanese-gen.json
// = git HEAD の生成JSON)を使う。無ければ現行ファイルにフォールバック。
const oldGen = existsSync(".cache/old-japanese-gen.json")
  ? JSON.parse(readFileSync(".cache/old-japanese-gen.json", "utf8"))
  : existsSync("src/data/japan-landmarks-generated.json")
    ? JSON.parse(readFileSync("src/data/japan-landmarks-generated.json", "utf8"))
    : [];
const oldSlugByCoord = new Map(oldGen.map((r) => [`${r.lat},${r.lon}`, r.slug]));
const keyOf = (r) => `${r.name}@${r.lat},${r.lon}`;
const fameOf = (r) => (r.wd && fame[r.wd] != null ? fame[r.wd] : 0);

// ローマ字 slug の元文字列を決める: 英語Wikipedia名(最良) → かな読みのヘボン式 →
// フォールバック(Q-id)。返り値は toAsciiSlug 前の素の文字列。
function romajiBase(r, baseName, display) {
  const en = r.wd && enwiki[r.wd];
  if (en) { const s = toAsciiSlug(en); if (s.length >= 2) return s; }
  // 読みは表示名(例「惣岳山（青梅市）」)キーで保存され、値は基本名の読み(「そうがくさん」)。
  // 表示名→基本名の順で引く。
  const yomi = readings[display] || readings[baseName];
  if (yomi) { const s = toAsciiSlug(kanaToRomaji(yomi)); if (s.length >= 2) return s; }
  // 読みが無い場合でも名前がローマ字を含むことがある(例: 英語混じり)
  const direct = toAsciiSlug(kanaToRomaji(baseName));
  if (direct.length >= 2) return direct;
  if (r.wd) return r.wd.toLowerCase(); // 最終手段: q12345
  return "";
}

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

// --- Pass 1: blurb のあるものを実体化(表示名候補・著名度) ---
let noBlurb = 0, dropped = 0;
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

// --- Pass 3: ローマ字 slug 割当・エントリ生成・リダイレクト対応表 ---
// 生成スポットの slug はローマ字(ASCII)。これにより /spot/[slug] を dynamicParams=true の
// オンデマンド ISR にでき(日本語 slug の x-next-cache-tags 500 バグを回避)、事前生成は
// 手キュレーション分のみ→ビルドが件数非依存に。これで件数上限が消えるため、以前の
// 「事前生成件数を抑える刈り込み」は撤廃し全スポットを収録する。
// slug は fame 降順で割り当てる。同じローマ字に落ちる同名スポットが複数あるとき、
// 著名な方に素の slug を、無名な方に -2/-3 を付けるため(例: daigo-ji を著名寺に)。
cands.sort((a, b) => b.fame - a.fame || (b.r.total || 0) - (a.r.total || 0));
const out = [];
const redirects = {}; // 旧日本語 slug → 新ローマ字 slug (proxy が 308 で転送)
let qidFallback = 0;
for (const c of cands) {
  const { r, b, display } = c;
  const img = images[keyOf(r)];

  let base = romajiBase(r, c.baseName, display);
  if (!base) { dropped++; continue; }
  if (/^q\d+$/.test(base)) qidFallback++;
  let slug = base, i = 2;
  while (usedSlugs.has(slug)) slug = `${base}-${i++}`;
  usedSlugs.add(slug);

  // 旧(現行)日本語 slug があり新 slug と違うならリダイレクト登録(URL 移行の受け皿)。
  const oldSlug = oldSlugByCoord.get(`${r.lat},${r.lon}`);
  if (oldSlug && oldSlug !== slug) redirects[oldSlug] = slug;

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
writeFileSync("src/data/spot-slug-redirects.json", JSON.stringify(redirects));
console.log(`同名区別: ${disamb} 件 / Q-idフォールバックslug: ${qidFallback} 件 / リダイレクト対応: ${Object.keys(redirects).length} 件`);

writeFileSync("src/data/japan-landmarks-generated.json", JSON.stringify(out, null, 0));
const byCat = {};
for (const r of out) byCat[r.category] = (byCat[r.category] || 0) + 1;
console.log(`生成 ${out.length} 件 (blurb未生成 ${noBlurb}, slug不能 ${dropped})`);
console.log("カテゴリ内訳:", JSON.stringify(byCat));
console.log("画像あり:", out.filter((r) => r.imageUrl).length);
console.log("-> src/data/japan-landmarks-generated.json");
