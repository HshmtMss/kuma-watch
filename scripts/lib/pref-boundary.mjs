// 市区町村境界ポリゴン(public/data/boundaries/{01..47}.json)による県判定。
// node 実行の生成パイプライン(build-generated-spots.mjs)から使えるよう自己完結の ESM。
// - strictPrefCode(lat,lon): 点を厳密に内包する県コード(2桁)。海上/境界外は null。
// - prefContainsWithTol(prefCode,lat,lon,tolKm): その県のいずれかの市区町村ポリゴンに
//   内包、または境界から tolKm 以内なら true(川/海の境界の粗さ・admin代表の許容用)。
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "public/data/boundaries";

// feature を { prefCode, bbox:[minLon,minLat,maxLon,maxLat], polys:[[ring,...],...] } に平坦化。
// ring = [[lon,lat],...]。Polygon は 1 polygon、MultiPolygon は複数。
let FEATURES = null;
function load() {
  if (FEATURES) return FEATURES;
  FEATURES = [];
  for (const fn of readdirSync(DIR)) {
    if (!/^\d{2}\.json$/.test(fn)) continue;
    const gj = JSON.parse(readFileSync(join(DIR, fn), "utf8"));
    for (const f of gj.features || []) {
      const code = f.properties && f.properties.code;
      if (!code) continue;
      const prefCode = String(code).slice(0, 2);
      const g = f.geometry;
      if (!g) continue;
      const polygons =
        g.type === "Polygon" ? [g.coordinates]
        : g.type === "MultiPolygon" ? g.coordinates
        : [];
      let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
      const polys = [];
      for (const poly of polygons) {
        polys.push(poly); // poly = [outer, hole1, ...]
        for (const ring of poly) for (const [lon, lat] of ring) {
          if (lon < minLon) minLon = lon; if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat; if (lat > maxLat) maxLat = lat;
        }
      }
      if (polys.length) FEATURES.push({ prefCode, bbox: [minLon, minLat, maxLon, maxLat], polys });
    }
  }
  return FEATURES;
}

function inRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if (((yi > lat) !== (yj > lat)) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}
// polygon = [outer, hole1, ...]: outer に入り hole に入らない
function inPolygon(lon, lat, polygon) {
  if (!inRing(lon, lat, polygon[0])) return false;
  for (let h = 1; h < polygon.length; h++) if (inRing(lon, lat, polygon[h])) return false;
  return true;
}
function featureContains(lon, lat, f) {
  for (const poly of f.polys) if (inPolygon(lon, lat, poly)) return true;
  return false;
}

/** 点を厳密に内包する県コード(2桁)。海上・境界外(離島でポリゴン無し等)は null。 */
export function strictPrefCode(lat, lon) {
  for (const f of load()) {
    const b = f.bbox;
    if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
    if (featureContains(lon, lat, f)) return f.prefCode;
  }
  return null;
}

// 点と線分の距離(km, 緯度経度をローカル平面近似)。
function segDistKm(lon, lat, ax, ay, bx, by) {
  const kx = 111.32 * Math.cos((lat * Math.PI) / 180), ky = 110.57;
  const px = lon * kx, py = lat * ky;
  const aX = ax * kx, aY = ay * ky, bX = bx * kx, bY = by * ky;
  const dx = bX - aX, dy = bY - aY;
  const len2 = dx * dx + dy * dy;
  let t = len2 ? ((px - aX) * dx + (py - aY) * dy) / len2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = aX + t * dx, cy = aY + t * dy;
  return Math.hypot(px - cx, py - cy);
}

/** その県のポリゴンに内包、または境界から tolKm 以内なら true。 */
export function prefContainsWithTol(prefCode, lat, lon, tolKm = 2) {
  const tolDeg = tolKm / 100; // bbox 事前判定用の粗い緩衝
  for (const f of load()) {
    if (f.prefCode !== prefCode) continue;
    const b = f.bbox;
    if (lon < b[0] - tolDeg || lon > b[2] + tolDeg || lat < b[1] - tolDeg || lat > b[3] + tolDeg) continue;
    if (featureContains(lon, lat, f)) return true;
    for (const poly of f.polys) for (const ring of poly) {
      for (let i = 0; i < ring.length - 1; i++) {
        if (segDistKm(lon, lat, ring[i][0], ring[i][1], ring[i + 1][0], ring[i + 1][1]) <= tolKm) return true;
      }
    }
  }
  return false;
}

export const PREF_NAME = {
  "01": "北海道","02": "青森県","03": "岩手県","04": "宮城県","05": "秋田県","06": "山形県",
  "07": "福島県","08": "茨城県","09": "栃木県","10": "群馬県","11": "埼玉県","12": "千葉県",
  "13": "東京都","14": "神奈川県","15": "新潟県","16": "富山県","17": "石川県","18": "福井県",
  "19": "山梨県","20": "長野県","21": "岐阜県","22": "静岡県","23": "愛知県","24": "三重県",
  "25": "滋賀県","26": "京都府","27": "大阪府","28": "兵庫県","29": "奈良県","30": "和歌山県",
  "31": "鳥取県","32": "島根県","33": "岡山県","34": "広島県","35": "山口県","36": "徳島県",
  "37": "香川県","38": "愛媛県","39": "高知県","40": "福岡県","41": "佐賀県","42": "長崎県",
  "43": "熊本県","44": "大分県","45": "宮崎県","46": "鹿児島県","47": "沖縄県",
};
export const NAME_TO_CODE = Object.fromEntries(Object.entries(PREF_NAME).map(([c, n]) => [n, c]));
