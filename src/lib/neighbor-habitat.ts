import { calcHistoryScore } from "@/lib/score";
import { haversineKm, latLonToMeshCode, meshCodeToCenter } from "@/lib/mesh";
import type { MeshEntry } from "@/lib/mesh-data";
import type { KumaRecord } from "@/app/api/kuma/route";

export type AugmentedMeshEntry = MeshEntry & {
  /** 周辺 10km の環境省メッシュから距離減衰で取った最大履歴スコア */
  neighborHistory: number;
};

export type SightingDensity = {
  /** セル中心 10km 以内の目撃件数 */
  count: number;
  /** 距離減衰重み付け (exp(-d/5)) */
  weighted: number;
};

/**
 * 自セルに環境省生息域メッシュ記録がなくても、周囲 (既定 10km) に記録があれば
 * その最大値を距離減衰で加味する「周辺メッシュ密度」スコア。
 *
 * - 自セル (ownMeshCode) は除外し、directHistory と重複しないようにする。
 * - public/data/mesh.json は 2.5'×3.75'（約 4.6km×5.7km）解像度のため、
 *   隣接セル中心は 4.6〜7km 離れる。radius=10km でその輪をカバー。
 * - decay=6km: 5km 離れ → 約 0.43、7km → 約 0.31、10km → 約 0.19。
 * - 生息域に埋もれた集落・農地・調査グリッド境界の孤立評価を是正する。
 */
export function computeNeighborMeshScore(
  meshes: MeshEntry[],
  lat: number,
  lon: number,
  ownMeshCode: string | null,
  radiusKm = 10,
  decayKm = 6,
): number {
  let best = 0;
  for (const m of meshes) {
    if (ownMeshCode && m.m === ownMeshCode) continue;
    const d = haversineKm(lat, lon, m.lat, m.lon);
    if (d > radiusKm) continue;
    const raw = calcHistoryScore({
      second: m.s,
      sixth: m.x,
      latest: m.l,
      latestSingle: m.ls,
    });
    const weighted = raw * Math.exp(-d / decayKm);
    if (weighted > best) best = weighted;
  }
  return best;
}

/**
 * 危険度ヒートマップ用: 各メッシュセルの中心から 10km 以内の目撃数と
 * 距離減衰重み付け件数を空間バケットで一括集計する。
 */
export function aggregateSightingsPerCell(
  records: KumaRecord[],
  meshes: MeshEntry[],
  radiusKm = 10,
  decayKm = 5,
): Map<string, SightingDensity> {
  const bucketSize = 0.1;
  const bucketKey = (lat: number, lon: number) =>
    `${Math.floor(lat / bucketSize)}|${Math.floor(lon / bucketSize)}`;
  const buckets = new Map<string, KumaRecord[]>();
  for (const r of records) {
    const k = bucketKey(r.lat, r.lon);
    const b = buckets.get(k);
    if (b) b.push(r);
    else buckets.set(k, [r]);
  }

  const result = new Map<string, SightingDensity>();
  for (const m of meshes) {
    const latIdx = Math.floor(m.lat / bucketSize);
    const lonIdx = Math.floor(m.lon / bucketSize);
    let count = 0;
    let weighted = 0;
    for (let dlat = -1; dlat <= 1; dlat++) {
      for (let dlon = -1; dlon <= 1; dlon++) {
        const bucket = buckets.get(`${latIdx + dlat}|${lonIdx + dlon}`);
        if (!bucket) continue;
        for (const r of bucket) {
          const d = haversineKm(m.lat, m.lon, r.lat, r.lon);
          if (d > radiusKm) continue;
          count += 1;
          weighted += Math.exp(-d / decayKm);
        }
      }
    }
    if (count > 0) result.set(m.m, { count, weighted });
  }
  return result;
}

/**
 * 危険度ヒートマップ用の完全グリッド生成。
 *
 * - mesh.json のセル (9,400 件ほど) をそのまま採用
 * - それらの bounding box を 5km グリッドで走査し、mesh.json にないセル
 *   (= 穴) には synthetic な空セル (s=x=l=ls=0) を生成
 * - 生成後、全セルに neighborHistory を距離減衰で付ける
 * - 直接履歴 0 かつ neighborHistory 0 のセル (海上・habitat から遠すぎ)
 *   はレンダ時間短縮のため除外
 *
 * これでユーザーの原則「生息域が近ければ調査データがなくても危険度が高い」
 * を heatmap でも満たす。
 */
export function buildDangerGrid(meshes: MeshEntry[]): AugmentedMeshEntry[] {
  const byCode = new Map<string, MeshEntry>();
  for (const m of meshes) byCode.set(m.m, m);

  let minLat = Infinity;
  let maxLat = -Infinity;
  let minLon = Infinity;
  let maxLon = -Infinity;
  for (const m of meshes) {
    if (m.lat < minLat) minLat = m.lat;
    if (m.lat > maxLat) maxLat = m.lat;
    if (m.lon < minLon) minLon = m.lon;
    if (m.lon > maxLon) maxLon = m.lon;
  }

  const LAT_STEP = 2.5 / 60; // ≈ 4.6km
  const LON_STEP = 3.75 / 60; // ≈ 5.7km
  const BUFFER = 0.08; // ~9km buffer to catch edge cases

  const all: MeshEntry[] = [...meshes];
  const seen = new Set(meshes.map((m) => m.m));
  for (let lat = minLat - BUFFER; lat <= maxLat + BUFFER; lat += LAT_STEP) {
    for (let lon = minLon - BUFFER; lon <= maxLon + BUFFER; lon += LON_STEP) {
      const code = latLonToMeshCode(lat, lon);
      if (!code || seen.has(code)) continue;
      seen.add(code);
      const center = meshCodeToCenter(code);
      if (!center) continue;
      all.push({
        m: code,
        s: 0,
        x: 0,
        l: 0,
        ls: 0,
        lat: center.lat,
        lon: center.lon,
      });
    }
  }

  const augmented = augmentMeshesWithNeighborScore(all);
  // 描画に必要のないセル (habitat も近隣もない海上・遠方) を除外
  return augmented.filter((m) => {
    const raw = m.l * 3 + m.x * 1.5 + m.s * 0.5;
    return raw > 0 || m.neighborHistory > 0;
  });
}

/**
 * ヒートマップ用の一括前処理。全メッシュに neighborHistory を付ける。
 * 空間バケッティング (0.1 度 ≒ 11km) で O(N × k) に抑える。
 */
export function augmentMeshesWithNeighborScore(
  meshes: MeshEntry[],
  radiusKm = 10,
  decayKm = 6,
): AugmentedMeshEntry[] {
  const bucketSize = 0.1;
  const bucketKey = (lat: number, lon: number) =>
    `${Math.floor(lat / bucketSize)}|${Math.floor(lon / bucketSize)}`;
  const buckets = new Map<string, MeshEntry[]>();
  for (const m of meshes) {
    const k = bucketKey(m.lat, m.lon);
    const bucket = buckets.get(k);
    if (bucket) bucket.push(m);
    else buckets.set(k, [m]);
  }

  const augmented: AugmentedMeshEntry[] = new Array(meshes.length);
  for (let i = 0; i < meshes.length; i++) {
    const m = meshes[i];
    const latIdx = Math.floor(m.lat / bucketSize);
    const lonIdx = Math.floor(m.lon / bucketSize);
    let best = 0;
    for (let dlat = -1; dlat <= 1; dlat++) {
      for (let dlon = -1; dlon <= 1; dlon++) {
        const bucket = buckets.get(`${latIdx + dlat}|${lonIdx + dlon}`);
        if (!bucket) continue;
        for (const o of bucket) {
          if (o.m === m.m) continue;
          const d = haversineKm(m.lat, m.lon, o.lat, o.lon);
          if (d > radiusKm) continue;
          const raw = calcHistoryScore({
            second: o.s,
            sixth: o.x,
            latest: o.l,
            latestSingle: o.ls,
          });
          const weighted = raw * Math.exp(-d / decayKm);
          if (weighted > best) best = weighted;
        }
      }
    }
    augmented[i] = { ...m, neighborHistory: best };
  }
  return augmented;
}
