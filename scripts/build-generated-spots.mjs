// cand-<cat>.json(camp/attraction/onsen/nature)を統合し、名前品質ゲート・
// カテゴリ横断の空間重複排除を行い、生成対象リスト .cache/spots-todo.json を作る。
// blurb/画像/slug は後段(gen-spot-blurbs, assemble)で付与する。
import { readFileSync, writeFileSync, existsSync } from "node:fs";

// カテゴリ横断でこれ以内は「同一POIが複数タグ付けされた重複」とみなし1つに統合する。
// 以前は 1.5km と広く、例えばムーミンバレーパーク(テーマパーク)が 0.34km 隣の宮沢湖(湖)に
// 巻き込まれて消えるなど、"近接する別の目的地" を誤って重複扱いしていた。真の重複は
// ほぼ同一座標なので 0.3km に絞り、近接する別スポットは両方残す(網羅性優先)。
const CLUSTER_KM = 0.3;
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
  worship: "sightseeing", // 神社仏閣・教会も観光名所カテゴリに寄せる
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
  "worship",
]) {
  const p = `.cache/cand-${cat}.json`;
  if (!existsSync(p)) { console.error(`skip ${cat} (no ${p})`); continue; }
  const arr = JSON.parse(readFileSync(p, "utf8"));
  let kept = 0;
  for (const r of arr) {
    if (!nameOk(r)) continue;
    // srcCat は OSM 収集時の元カテゴリ(県あたり上限のキー用)。cat は表示用の
    // LandmarkCategory。CATMAP で複数の OSM cat が sightseeing に集約されるため、
    // 上限は表示 cat ではなく srcCat で掛ける(worship を sightseeing 全体を巻き込まず
    // 単独で上限適用するため)。
    merged.push({ ...r, cat: CATMAP[cat], srcCat: cat });
    kept++;
  }
  console.error(`${cat}: ${arr.length} → 品質ゲート後 ${kept}`);
}

// 件数が多すぎるカテゴリ(山・神社仏閣)は県あたり上限を設ける。著名度(wikipedia>
// wikidata)を優先し、同点は出没関連(直近1年)で。有名どころに寄せてノイズを抑える。
// キーは srcCat(OSM 元カテゴリ)。山は峰が非常に多いため上限を維持。神社仏閣(worship)は
// 「できる限り増やす」方針のため上限なし(著名＝wikidata/wikipedia 付きに限定済み)。
const PREF_CAP = { mountain: 40 };
{
  const groups = new Map();
  for (const r of merged) {
    if (PREF_CAP[r.srcCat] == null) continue;
    const k = `${r.pref}|${r.srcCat}`;
    (groups.get(k) ?? groups.set(k, []).get(k)).push(r);
  }
  const drop = new Set();
  for (const [, arr] of groups) {
    const cap = PREF_CAP[arr[0].srcCat];
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
    // 両方が wikidata を持つ = 別々の著名地点(清水寺/地主神社など)。近接しても
    // 重複扱いにせず両方残す(process 側と同じ方針)。
    if (k.wd && r.wd) continue;
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
