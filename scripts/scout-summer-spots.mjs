// 夏の集客地候補 × 周辺出没密度の検算（空ページ回避のための事前スカウト）。
// 使い方: node scripts/scout-summer-spots.mjs
import { readFileSync } from "node:fs";

const TODAY = new Date("2026-07-06T00:00:00Z").getTime();
const DAY = 86_400_000;
const R = 10; // km

function hav(aLat, aLon, bLat, bLon) {
  const toR = (d) => (d * Math.PI) / 180;
  const dLat = toR(bLat - aLat), dLon = toR(bLon - aLon);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toR(aLat)) * Math.cos(toR(bLat)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
}

// --- 候補シード（夏の集客 × クマ生息域を狙って手キュレーション） ---
// cat: camp=キャンプ場/グランピング, resort=高原リゾート/避暑地,
//      park=国立公園/VC, valley=渓谷/川遊び/名瀑
const CAND = [
  // キャンプ場・グランピング
  ["北軽井沢スウィートグラス", "camp", "群馬県", 36.503, 138.553],
  ["無印良品 カンパーニャ嬬恋キャンプ場", "camp", "群馬県", 36.512, 138.500],
  ["五光牧場オートキャンプ場", "camp", "長野県", 36.003, 138.553],
  ["奥多摩・氷川キャンプ場", "camp", "東京都", 35.809, 139.098],
  ["菅平高原", "camp", "長野県", 36.522, 138.320],
  ["大子広域公園オートキャンプ場グリンヴィラ", "camp", "茨城県", 36.773, 140.352],
  ["岩洞湖family キャンプ場", "camp", "岩手県", 39.872, 141.300],
  ["白樺湖・車山高原", "camp", "長野県", 36.150, 138.200],
  ["苗場・かぐらみつまた", "camp", "新潟県", 36.792, 138.790],
  ["ふもとっぱら", "camp", "静岡県", 35.401, 138.620],
  ["然別湖畔", "camp", "北海道", 43.300, 143.100],
  ["支笏湖畔", "camp", "北海道", 42.750, 141.350],
  // 高原リゾート・避暑地
  ["軽井沢", "resort", "長野県", 36.350, 138.630],
  ["清里高原", "resort", "山梨県", 35.900, 138.433],
  ["蓼科高原", "resort", "長野県", 36.100, 138.300],
  ["奥日光・湯元", "resort", "栃木県", 36.790, 139.420],
  ["蒜山高原", "resort", "岡山県", 35.320, 133.620],
  ["八幡平", "resort", "岩手県", 39.960, 140.850],
  ["志賀高原", "resort", "長野県", 36.700, 138.500],
  ["乗鞍高原", "resort", "長野県", 36.100, 137.630],
  // 国立公園・VC
  ["尾瀬", "park", "群馬県", 36.900, 139.300],
  ["知床", "park", "北海道", 44.100, 145.100],
  ["大雪山・旭岳", "park", "北海道", 43.660, 142.850],
  ["十和田湖・奥入瀬渓流", "park", "青森県", 40.470, 140.900],
  ["白神山地", "park", "青森県", 40.500, 140.150],
  ["裏磐梯", "park", "福島県", 37.650, 140.070],
  ["戸隠", "park", "長野県", 36.750, 138.080],
  ["谷川岳", "park", "群馬県", 36.840, 138.930],
  ["大山", "park", "鳥取県", 35.370, 133.550],
  // 渓谷・川遊び・名瀑
  ["昇仙峡", "valley", "山梨県", 35.750, 138.550],
  ["長瀞", "valley", "埼玉県", 36.100, 139.110],
  ["秋川渓谷", "valley", "東京都", 35.730, 139.190],
  ["御岳渓谷", "valley", "東京都", 35.800, 139.150],
  ["寸又峡", "valley", "静岡県", 35.250, 138.150],
  ["香嵐渓", "valley", "愛知県", 35.150, 137.320],
  ["面河渓", "valley", "愛媛県", 33.680, 133.100],
];

// --- 既存スポット座標を抽出（重複検出用） ---
const lm = readFileSync("src/data/japan-landmarks.ts", "utf8");
const existing = [];
const re = /name:\s*"([^"]+)"[\s\S]{0,400?}?lat:\s*([\d.]+),\s*\n?\s*lon:\s*([\d.]+)/g;
// よりロバストに: name/lat/lon をブロック単位で拾う
const blocks = lm.split(/\{\s*\n/).map((b) => {
  const n = b.match(/name:\s*"([^"]+)"/);
  const la = b.match(/lat:\s*(-?[\d.]+)/);
  const lo = b.match(/lon:\s*(-?[\d.]+)/);
  if (n && la && lo) return { name: n[1], lat: +la[1], lon: +lo[1] };
  return null;
}).filter(Boolean);
for (const b of blocks) existing.push(b);

// --- 出没データ読み込み ---
const raw = JSON.parse(readFileSync("public/data/sightings.json", "utf8"));
const recs = Array.isArray(raw) ? raw : raw.records || [];
const pts = recs
  .filter((r) => Number.isFinite(r.lat) && Number.isFinite(r.lon))
  .map((r) => ({ lat: r.lat, lon: r.lon, t: Date.parse(r.date + "T00:00:00Z") }));

function densityAt(lat, lon) {
  let total = 0, y1 = 0, d90 = 0;
  for (const p of pts) {
    if (Math.abs(p.lat - lat) > 0.12 || Math.abs(p.lon - lon) > 0.15) continue; // 粗いbbox前段
    if (hav(lat, lon, p.lat, p.lon) > R) continue;
    total++;
    const age = TODAY - p.t;
    if (age <= 365 * DAY) y1++;
    if (age <= 90 * DAY) d90++;
  }
  return { total, y1, d90 };
}

const CAT = { camp: "キャンプ", resort: "高原", park: "国立公園", valley: "渓谷" };
const rows = CAND.map(([name, cat, pref, lat, lon]) => {
  const d = densityAt(lat, lon);
  // 最寄り既存スポット
  let near = null, nd = 1e9;
  for (const e of existing) {
    const km = hav(lat, lon, e.lat, e.lon);
    if (km < nd) { nd = km; near = e.name; }
  }
  return { name, cat, pref, ...d, dupKm: nd, dup: near };
});

rows.sort((a, b) => b.y1 - a.y1);

console.log("候補".padEnd(22), "分類", "累計", "1年", "90日", "  最寄既存(km)");
console.log("-".repeat(78));
for (const r of rows) {
  const dupFlag = r.dupKm < 8 ? `⚠${r.dup}(${r.dupKm.toFixed(0)})` : `${r.dup}(${r.dupKm.toFixed(0)})`;
  console.log(
    r.name.padEnd(20, "　").slice(0, 20),
    CAT[r.cat].padEnd(4),
    String(r.total).padStart(4),
    String(r.y1).padStart(4),
    String(r.d90).padStart(4),
    " ", dupFlag,
  );
}
console.log("-".repeat(78));
const good = rows.filter((r) => r.y1 >= 3 && r.dupKm >= 8);
const empty = rows.filter((r) => r.total === 0);
console.log(`採用候補(直近1年≥3件 & 既存と8km以上離れる): ${good.length}件`);
console.log(`  → ${good.map((r) => r.name).join(" / ")}`);
console.log(`空(累計0件・除外): ${empty.map((r) => r.name).join(" / ") || "なし"}`);
