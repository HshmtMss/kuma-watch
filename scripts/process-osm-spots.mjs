// collect-osm-spots.mjs の生データを、出没密度注記・既存重複排除・空間クラスタ統合して
// 正規化候補 JSON (.cache/cand-<cat>.json) に落とす。
//   node scripts/process-osm-spots.mjs camp
import { readFileSync, writeFileSync } from "node:fs";

const CAT = process.argv[2] || "camp";
const CLUSTER_KM = 2.0;   // これ以内の同種POIは1スポットに統合
const DUP_EXISTING_KM = 3.0; // 既存スポットにこれ以内なら重複フラグ
const TODAY = Date.parse("2026-07-06");
const DAY = 86_400_000;

function hav(a, b, c, d) {
  const R = (x) => (x * Math.PI) / 180;
  const dLat = R(c - a), dLon = R(d - b);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(R(a)) * Math.cos(R(c)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
}

// --- 既存スポット座標（重複排除用） ---
const lm = readFileSync("src/data/japan-landmarks.ts", "utf8");
const existing = lm.split(/\{\s*\n/).map((b) => {
  const n = b.match(/name:\s*"([^"]+)"/);
  const la = b.match(/lat:\s*(-?[\d.]+)/);
  const lo = b.match(/lon:\s*(-?[\d.]+)/);
  return n && la && lo ? { name: n[1], lat: +la[1], lon: +lo[1] } : null;
}).filter(Boolean);

// --- 出没データ（密度＋最寄り市町村推定） ---
const raw = JSON.parse(readFileSync("public/data/sightings.json", "utf8"));
const recs = (Array.isArray(raw) ? raw : raw.records || [])
  .filter((r) => Number.isFinite(r.lat) && Number.isFinite(r.lon))
  .map((r) => ({ lat: r.lat, lon: r.lon, t: Date.parse(r.date), city: r.cityName }));

// --- 生候補読み込み ---
const cand = JSON.parse(readFileSync(`.cache/osm-${CAT}.json`, "utf8"));

// --- 空間クラスタリング（貪欲・グリッド近似） ---
// wikidata付き＞名前が長い を代表に採用。
cand.sort((a, b) => (b.wd ? 1 : 0) - (a.wd ? 1 : 0) || b.name.length - a.name.length);
const clusters = [];
for (const c of cand) {
  let merged = false;
  for (const cl of clusters) {
    if (Math.abs(cl.lat - c.lat) < 0.03 && Math.abs(cl.lon - c.lon) < 0.03 &&
        hav(cl.lat, cl.lon, c.lat, c.lon) <= CLUSTER_KM) {
      cl.members++;
      cl.wd = cl.wd || c.wd; cl.wp = cl.wp || c.wp;
      merged = true;
      break;
    }
  }
  if (!merged) clusters.push({ ...c, members: 1 });
}

// --- 密度＋市町村＋重複注記 ---
function densityAndCity(lat, lon) {
  let total = 0, y1 = 0, d90 = 0, near = null, nd = 1e9;
  for (const r of recs) {
    if (Math.abs(r.lat - lat) > 0.15 || Math.abs(r.lon - lon) > 0.18) continue;
    const km = hav(lat, lon, r.lat, r.lon);
    if (km > 10) continue;
    total++;
    const age = TODAY - r.t;
    if (age <= 365 * DAY) y1++;
    if (age <= 90 * DAY) d90++;
    if (km < nd) { nd = km; near = r.city; }
  }
  return { total, y1, d90, muni: near };
}

const out = [];
for (const cl of clusters) {
  const d = densityAndCity(cl.lat, cl.lon);
  let dup = null, dd = 1e9;
  for (const e of existing) {
    const km = hav(cl.lat, cl.lon, e.lat, e.lon);
    if (km < dd) { dd = km; dup = e.name; }
  }
  out.push({
    name: cl.name, pref: cl.pref, lat: cl.lat, lon: cl.lon,
    cat: CAT, wd: cl.wd, wp: cl.wp, members: cl.members,
    total: d.total, y1: d.y1, d90: d.d90, muni: d.muni,
    dupExisting: dd <= DUP_EXISTING_KM ? dup : null, dupKm: +dd.toFixed(1),
  });
}

// 既存重複を除外して保存
const final = out.filter((r) => !r.dupExisting);
writeFileSync(`.cache/cand-${CAT}.json`, JSON.stringify(final));

// --- レポート ---
const band = (r) => (r.y1 >= 10 ? "1年10+" : r.y1 >= 3 ? "1年3-9" : r.total > 0 ? "累計あり(1年0-2)" : "出没0件");
const tally = {};
for (const r of final) tally[band(r)] = (tally[band(r)] || 0) + 1;
console.log(`\n=== ${CAT} 候補サマリ ===`);
console.log(`生収集 ${cand.length} → クラスタ統合 ${clusters.length} → 既存重複除外後 ${final.length}`);
console.log("密度バンド内訳:", JSON.stringify(tally));
console.log("\n出没が多い上位15（実在確実）:");
for (const r of [...final].sort((a, b) => b.y1 - a.y1).slice(0, 15)) {
  console.log(`  ${r.name.slice(0, 18).padEnd(18, "　")} ${r.pref.padEnd(4)} 累計${String(r.total).padStart(4)} 1年${String(r.y1).padStart(3)} @${r.muni || "-"}`);
}
console.log("\n0件サンプル5（「出没なし＝安心」ページ候補）:");
for (const r of final.filter((r) => r.total === 0).slice(0, 5)) {
  console.log(`  ${r.name.slice(0, 18).padEnd(18, "　")} ${r.pref}`);
}
