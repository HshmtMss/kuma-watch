// cand-<cat>.json(camp/attraction/onsen/nature)を統合し、名前品質ゲート・
// カテゴリ横断の空間重複排除を行い、生成対象リスト .cache/spots-todo.json を作る。
// blurb/画像/slug は後段(gen-spot-blurbs, assemble)で付与する。
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const CLUSTER_KM = 1.5; // カテゴリ横断でこれ以内は同一スポットとみなし1つに
function hav(a, b, c, d) {
  const R = (x) => (x * Math.PI) / 180;
  const dLat = R(c - a), dLon = R(d - b);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(R(a)) * Math.cos(R(c)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
}

// OSMカテゴリ → LandmarkCategory
const CATMAP = {
  camp: "campground",
  attraction: "sightseeing",
  onsen: "onsen",
  nature: "waterfall",
  // 有名どころ拡張 (2026-07)
  lake: "lake",
  mountain: "mountain",
  natpark: "national_park",
  historic: "sightseeing",
  island: "sightseeing",
};
// 横断重複時にどのカテゴリを残すか（数値大が優先）。国立公園・山・湖・名所を優先。
const CATPRIO = {
  national_park: 7,
  mountain: 6,
  lake: 6,
  sightseeing: 4,
  onsen: 3,
  waterfall: 2,
  campground: 1,
};

// 名前品質ゲート
const asciiOnly = (s) => /^[\x00-\x7F\s]+$/.test(s);
const nonDest = /(公民館|集会所|体育館|支所|役場|市役所|小学校|中学校|グラウンド|運動公園|駐車場|バス停|交番|人工島|埠頭|ふ頭|物揚場|下水|浄化|変電)/;
const genericOnly = /^((ファミリー|オート)?キャンプ場|公園|広場|温泉|滝)$/;
function nameOk(r) {
  const t = r.name.trim();
  if (t.length <= 1) return false;
  // 短い名前(≤3)は原則除外だが、wikidata/wikipedia 付き(著名)なら残す。
  // 浜名湖・諏訪湖・松本城 など 3 文字の有名地名を落とさないため。
  if (t.length <= 3 && !r.wd && !r.wp) return false;
  if (nonDest.test(t)) return false;
  if (asciiOnly(t)) return false; // 英語のみは日本語SEO価値低
  if (genericOnly.test(t)) return false;
  return true;
}

let merged = [];
for (const cat of [
  "camp",
  "attraction",
  "onsen",
  "nature",
  "lake",
  "mountain",
  "natpark",
  "historic",
  "island",
]) {
  const p = `.cache/cand-${cat}.json`;
  if (!existsSync(p)) { console.error(`skip ${cat} (no ${p})`); continue; }
  const arr = JSON.parse(readFileSync(p, "utf8"));
  let kept = 0;
  for (const r of arr) {
    if (!nameOk(r)) continue;
    merged.push({ ...r, cat: CATMAP[cat] });
    kept++;
  }
  console.error(`${cat}: ${arr.length} → 品質ゲート後 ${kept}`);
}

// 件数が多すぎるカテゴリ(山・史跡)は県あたり上限を設ける。著名度(wikipedia>wikidata)
// を優先し、同点は出没関連(直近1年)で。有名どころに寄せてノイズを抑える。
const PREF_CAP = { mountain: 40, historic: 40 };
{
  const groups = new Map();
  for (const r of merged) {
    if (PREF_CAP[r.cat] == null) continue;
    const k = `${r.pref}|${r.cat}`;
    (groups.get(k) ?? groups.set(k, []).get(k)).push(r);
  }
  const drop = new Set();
  for (const [, arr] of groups) {
    const cap = PREF_CAP[arr[0].cat];
    arr.sort(
      (a, b) =>
        (b.wp ? 1 : 0) - (a.wp ? 1 : 0) ||
        (b.wd ? 1 : 0) - (a.wd ? 1 : 0) ||
        (b.y1 || 0) - (a.y1 || 0),
    );
    for (const r of arr.slice(cap)) drop.add(r);
  }
  const before = merged.length;
  merged = merged.filter((r) => !drop.has(r));
  console.error(`県あたり上限 (${JSON.stringify(PREF_CAP)}): ${before} → ${merged.length}`);
}

// カテゴリ横断の空間重複排除（貪欲）。優先度高→残す。
merged.sort((a, b) => (CATPRIO[b.cat] - CATPRIO[a.cat]) || (b.wd ? 1 : 0) - (a.wd ? 1 : 0) || b.y1 - a.y1);
const kept = [];
for (const r of merged) {
  let dup = false;
  for (const k of kept) {
    if (Math.abs(k.lat - r.lat) < 0.025 && Math.abs(k.lon - r.lon) < 0.025 &&
        hav(k.lat, k.lon, r.lat, r.lon) <= CLUSTER_KM) { dup = true; break; }
  }
  if (!dup) kept.push(r);
}

writeFileSync(".cache/spots-todo.json", JSON.stringify(kept));
const byCat = {};
for (const r of kept) byCat[r.cat] = (byCat[r.cat] || 0) + 1;
const zero = kept.filter((r) => r.total === 0).length;
console.log(`\n=== 統合結果 ===`);
console.log(`品質ゲート後 ${merged.length} → カテゴリ横断重複排除後 ${kept.length}`);
console.log("カテゴリ内訳:", JSON.stringify(byCat));
console.log(`うち出没0件(安心表示): ${zero} (${Math.round(zero / kept.length * 100)}%)`);
console.log("-> .cache/spots-todo.json");
