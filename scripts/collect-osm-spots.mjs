// 全国の旅行スポット候補を OSM Overpass から収集し、出没密度注記＋空間重複排除する。
// クマ生息域(北海道+本州)を対象。使い方:
//   node scripts/collect-osm-spots.mjs camp        # キャンプ場
//   node scripts/collect-osm-spots.mjs attraction  # 著名観光地(wikidata付き)
//   node scripts/collect-osm-spots.mjs onsen       # 温泉
//   node scripts/collect-osm-spots.mjs nature      # 滝・渓谷・湖
// 収集結果は .cache/osm-<cat>.json に保存（再取得を避ける）。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";

const CAT = process.argv[2] || "camp";
const OVERPASS = "https://overpass-api.de/api/interpreter";
const CACHE = ".cache";
if (!existsSync(CACHE)) mkdirSync(CACHE);

// 全国47都道府県。当初はクマ生息域(北海道+本州34県)に限定していたが、観光スポットの
// 網羅拡張(アクセス数・周知目的)に方針転換し、クマ不在の九州・四国・沖縄も収録対象に
// 加えた。出没0件スポットは「周辺に出没情報なし＝安心」ページとして成立する設計。
const PREFS = [
  "北海道",
  "青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県",
  "岐阜県","静岡県","愛知県","三重県",
  "滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
  "鳥取県","島根県","岡山県","広島県","山口県",
  // 四国
  "徳島県","香川県","愛媛県","高知県",
  // 九州・沖縄
  "福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

// カテゴリ別の Overpass クエリ片（area.a 内）。
function selector(cat) {
  switch (cat) {
    case "camp":
      return `node["tourism"="camp_site"](area.a);way["tourism"="camp_site"](area.a);`;
    case "attraction":
      // 著名なもの＝wikidata か wikipedia タグ付きに限定（ノイズ除去）
      return [
        `node["tourism"="attraction"]["wikidata"](area.a);way["tourism"="attraction"]["wikidata"](area.a);`,
        `node["tourism"="viewpoint"]["wikidata"](area.a);`,
        `node["tourism"="theme_park"](area.a);way["tourism"="theme_park"](area.a);`,
      ].join("");
    case "onsen":
      return `node["natural"="hot_spring"]["name"](area.a);way["natural"="hot_spring"]["name"](area.a);node["amenity"="public_bath"]["bath:type"="onsen"]["name"](area.a);`;
    case "nature":
      return [
        `node["waterway"="waterfall"]["name"](area.a);node["natural"="waterfall"]["name"](area.a);`,
        `way["water"="lake"]["name"]["wikidata"](area.a);relation["water"="lake"]["name"]["wikidata"](area.a);`,
        `node["natural"="valley"]["name"](area.a);way["natural"="valley"]["name"](area.a);`,
      ].join("");
    // --- 有名どころ拡張 (2026-07): wikidata/wikipedia 付き = 知名度ありに限定 ---
    case "lake":
      // 著名な湖 (浜名湖・田沢湖・中禅寺湖…)。ダム湖ノイズは name 側で除外。
      return [
        `way["natural"="water"]["name"]["wikidata"](area.a);relation["natural"="water"]["name"]["wikidata"](area.a);`,
        `way["natural"="water"]["name"]["wikipedia"](area.a);relation["natural"="water"]["name"]["wikipedia"](area.a);`,
      ].join("");
    case "mountain":
      // 著名な山・峰 (wikidata 付き)。
      return `node["natural"="peak"]["name"]["wikidata"](area.a);node["natural"="peak"]["name"]["wikipedia"](area.a);`;
    case "natpark":
      // 国立・国定公園 (面積が大きく本質的に著名なので wikidata 不問、name のみ)。
      return [
        `relation["boundary"="national_park"]["name"](area.a);`,
        `relation["boundary"="protected_area"]["protect_class"="2"]["name"](area.a);`,
      ].join("");
    case "historic":
      // 城・城跡・記念物・史跡などの主要タイプに限定 (wikipedia 付き=著名)。松本城ほか。
      return [
        `node["historic"~"^(castle|monument|memorial|ruins|archaeological_site|fort|city_gate)$"]["name"]["wikipedia"](area.a);`,
        `way["historic"~"^(castle|monument|memorial|ruins|archaeological_site|fort|city_gate)$"]["name"]["wikipedia"](area.a);`,
      ].join("");
    case "worship":
      // 神社仏閣・教会など。place_of_worship は無名の小社まで含めると数万件と膨大な
      // ため、wikidata か wikipedia 付き(＝著名)に限定して収録。清水寺・伊勢神宮・
      // 出雲大社ほか観光対象になる寺社を拾う。醍醐寺・延暦寺のような大規模寺社は
      // relation で表現されるため node/way に加え relation も収集する。
      return [
        `node["amenity"="place_of_worship"]["name"]["wikidata"](area.a);way["amenity"="place_of_worship"]["name"]["wikidata"](area.a);relation["amenity"="place_of_worship"]["name"]["wikidata"](area.a);`,
        `node["amenity"="place_of_worship"]["name"]["wikipedia"](area.a);way["amenity"="place_of_worship"]["name"]["wikipedia"](area.a);relation["amenity"="place_of_worship"]["name"]["wikipedia"](area.a);`,
      ].join("");
    case "island":
      // 著名な島 (江の島・宮島…、wikidata 付き)。人工島・埠頭は name 側で除外。
      return [
        `way["place"="island"]["name"]["wikidata"](area.a);relation["place"="island"]["name"]["wikidata"](area.a);node["place"="island"]["name"]["wikidata"](area.a);`,
        `way["place"="islet"]["name"]["wikidata"](area.a);node["place"="islet"]["name"]["wikidata"](area.a);`,
      ].join("");
    // --- 夏休みシーズン拡張 (2026-07) ---
    case "riverplay":
      // 川遊び・水遊びスポット。指定水泳場・親水公園・ウォーターパーク。山の川は
      // クマの水場で子連れの遭遇リスクがあり安全情報の価値が高い。
      return [
        `node["leisure"="swimming_area"]["name"](area.a);way["leisure"="swimming_area"]["name"](area.a);`,
        `node["leisure"="water_park"]["name"](area.a);way["leisure"="water_park"]["name"](area.a);`,
        `node["name"~"親水|水遊び|川遊び"]["name"](area.a);way["name"~"親水|水遊び|川遊び"](area.a);`,
      ].join("");
    case "fruit":
      // 観光農園・フルーツ狩り。果樹はクマの好物で農園被害も多く安全情報の価値が高い。
      return [
        `node["shop"="farm"]["name"](area.a);way["shop"="farm"]["name"](area.a);`,
        `node["name"~"観光農園|果樹園|フルーツ|ベリー狩り|さくらんぼ|ぶどう狩り|りんご狩り|いちご狩り|もも狩り"](area.a);way["name"~"観光農園|果樹園|フルーツ|ベリー狩り|さくらんぼ|ぶどう狩り|りんご狩り|いちご狩り|もも狩り"](area.a);`,
      ].join("");
    case "michinoeki":
      // 道の駅。山間の旅の拠点で検索需要が高い。名前先頭一致で拾う。
      return [
        `node["name"~"^道の駅"](area.a);way["name"~"^道の駅"](area.a);`,
        `node["amenity"="marketplace"]["name"~"道の駅"](area.a);`,
      ].join("");
    case "highland":
      // 高原・避暑地。家族連れの避暑先がそのままクマ生息域。名前に「高原」を含む地物。
      return [
        `node["name"~"高原$|高原[ 　]"]["place"](area.a);node["natural"~"^(grassland|heath|fell)$"]["name"~"高原"](area.a);`,
        `node["name"~"高原"]["tourism"](area.a);way["name"~"高原"]["tourism"](area.a);`,
        `node["place"~"^(locality|hamlet|village)$"]["name"~"高原$"](area.a);`,
      ].join("");
    case "ranch":
      // 観光牧場。高原の家族向け目的地でクマ生息域と重なる。
      return [
        `node["name"~"牧場$|牧場[ 　]"]["tourism"](area.a);way["name"~"牧場$|牧場[ 　]"]["tourism"](area.a);`,
        `node["tourism"="attraction"]["name"~"牧場"](area.a);way["tourism"="attraction"]["name"~"牧場"](area.a);`,
        `node["name"~"^マザー牧場|^六甲山牧場|^神津牧場"](area.a);`,
      ].join("");
    case "cave":
      // 鍾乳洞・洞窟。夏の涼スポットで山間部に多い。
      return [
        `node["natural"="cave_entrance"]["name"](area.a);`,
        `node["name"~"鍾乳洞|風穴|氷穴|洞窟|洞$"]["tourism"](area.a);way["name"~"鍾乳洞|風穴|氷穴|洞窟"]["tourism"](area.a);`,
        `node["tourism"="attraction"]["name"~"鍾乳洞|風穴|氷穴|洞窟"](area.a);`,
      ].join("");
    default:
      throw new Error("unknown cat " + cat);
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchPref(pref, cat, tries = 3) {
  const q =
    `[out:json][timeout:120];\n` +
    `area["name"="${pref}"]["admin_level"="4"]->.a;\n` +
    `(${selector(cat)});\nout center tags;`;
  for (let t = 0; t < tries; t++) {
    try {
      const res = await fetch(OVERPASS, {
        method: "POST",
        body: q,
        headers: { "Content-Type": "text/plain", "User-Agent": "kuma-watch/1.0 (spot coverage)" },
      });
      if (res.status === 429 || res.status === 504) {
        await sleep(8000 * (t + 1));
        continue;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      const j = await res.json();
      return j.elements || [];
    } catch (e) {
      if (t === tries - 1) { console.error(`  ! ${pref}: ${e.message}`); return []; }
      await sleep(5000 * (t + 1));
    }
  }
  return [];
}

const all = [];
for (const pref of PREFS) {
  const els = await fetchPref(pref, CAT);
  for (const e of els) {
    const c = e.center || e;
    const name = e.tags && (e.tags["name:ja"] || e.tags.name);
    if (!name || !Number.isFinite(c.lat)) continue;
    all.push({
      name,
      lat: +c.lat.toFixed(5),
      lon: +c.lon.toFixed(5),
      pref,
      wd: (e.tags && e.tags.wikidata) || null,
      wp: (e.tags && (e.tags["wikipedia"] || e.tags["wikipedia:ja"])) || null,
    });
  }
  console.error(`${pref}: +${els.length}  (累計 ${all.length})`);
  await sleep(1500);
}

writeFileSync(`${CACHE}/osm-${CAT}.json`, JSON.stringify(all));
console.log(`\n${CAT}: 生収集 ${all.length} 件 -> ${CACHE}/osm-${CAT}.json`);
