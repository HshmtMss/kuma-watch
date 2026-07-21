// cand-<cat>.json(camp/attraction/onsen/nature)を統合し、名前品質ゲート・
// カテゴリ横断の空間重複排除を行い、生成対象リスト .cache/spots-todo.json を作る。
// blurb/画像/slug は後段(gen-spot-blurbs, assemble)で付与する。
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { strictPrefCode, prefContainsWithTol, PREF_NAME, NAME_TO_CODE } from "./lib/pref-boundary.mjs";

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
  // 夏休みシーズン拡張 (2026-07)
  riverplay: "gorge",     // 川遊び・水遊びは「渓谷・川遊び」カテゴリへ
  fruit: "sightseeing",   // 観光農園・フルーツ狩り
  michinoeki: "sightseeing", // 道の駅
  highland: "resort",     // 高原・避暑地
  ranch: "resort",        // 観光牧場
  cave: "sightseeing",    // 鍾乳洞・洞窟
};
// 横断重複時にどのカテゴリを残すか（数値大が優先）。国立公園・山・湖・名所を優先。
const CATPRIO = {
  national_park: 7,
  mountain: 6,
  lake: 6,
  resort: 5,
  gorge: 5,
  sightseeing: 4,
  onsen: 3,
  waterfall: 2,
  campground: 1,
};

// 名前品質ゲート
const asciiOnly = (s) => /^[\x00-\x7F\s]+$/.test(s);
const nonDest = /(公民館|集会所|体育館|支所|役場|市役所|小学校|中学校|グラウンド|運動公園|駐車場|バス停|交番|人工島|埠頭|ふ頭|物揚場|下水|浄化|変電)/;
const genericOnly = /^((ファミリー|オート)?キャンプ場|公園|広場|温泉|滝)$/;
// 主要島は place=island で拾えてしまうが観光「スポット」ではない(本州は全県に跨り
// centroid が県ごとに拾われ大量の重複を生む)。名前完全一致で除外。
const MAIN_ISLANDS = new Set(["本州", "四国", "九州", "北海道", "沖縄本島"]);
function nameOk(r) {
  const t = r.name.trim();
  if (t.length <= 1) return false;
  if (MAIN_ISLANDS.has(t)) return false;
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
  "riverplay",
  "fruit",
  "michinoeki",
  "highland",
  "ranch",
  "cave",
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

// --- prefName 補正 (市区町村境界ポリゴン包含による厳密判定) ---
// pref は collect の Overpass area クエリ(行政境界)由来で概ね正しいが、県境スポットは
// 隣接2県の area 両方で収集され「同一座標で県違いの重複」ができ、片方が誤県になる。
// A: 同一スポット(同 wikidata / 同座標)の県矛盾は strict ポリゴンで正しい方を残す。
// B: 残った単独スポットは、strict が別県かつ現県ポリゴンから 2km 超離れている(=明白な誤り)
//    ときだけ補正。川/海境界のポリゴンの粗さ(例: 犬山城=愛知が正だが strict=岐阜)や
//    多県park・admin代表の県は現県が 2km 以内に入るので保持する。離島(strict=null)も保持。
{
  const TOL_KM = 2;
  for (const r of kept) r._strict = strictPrefCode(r.lat, r.lon); // 県コード or null
  // A: 同一 wikidata または同一座標を「同一スポット」とみなしグループ化し重複を解消
  const groups = new Map();
  for (const r of kept) {
    const key = r.wd || `${r.lat.toFixed(5)},${r.lon.toFixed(5)}`;
    (groups.get(key) ?? groups.set(key, []).get(key)).push(r);
  }
  let dupResolved = 0;
  const survivors = [];
  for (const [, arr] of groups) {
    if (arr.length === 1) { survivors.push(arr[0]); continue; }
    // strict が解決でき、自分の pref と一致する個体を優先して1つ残す。
    const keep =
      arr.find((r) => r._strict && PREF_NAME[r._strict] === r.pref) || arr[0];
    dupResolved += arr.length - 1;
    survivors.push(keep);
  }
  // B: 生き残りに対し、ガード付きで pref をポリゴン厳密判定へ補正
  let prefFixed = 0;
  for (const r of survivors) {
    const sc = r._strict;
    if (!sc) continue; // 離島・境界外は admin(現状)据え置き
    const strictName = PREF_NAME[sc];
    if (!strictName || strictName === r.pref) continue;
    const curCode = NAME_TO_CODE[r.pref];
    if (curCode && prefContainsWithTol(curCode, r.lat, r.lon, TOL_KM)) continue; // 境界許容内=保持
    r.pref = strictName;
    prefFixed++;
  }
  for (const r of survivors) delete r._strict;
  const before = kept.length;
  kept.length = 0;
  kept.push(...survivors);
  console.error(`prefName 補正: 同一スポット重複解消 ${dupResolved} 件, ポリゴン補正 ${prefFixed} 件 (${before} → ${kept.length})`);
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
