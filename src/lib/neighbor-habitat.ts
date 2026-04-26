import { calcHistoryScore } from "@/lib/score";
import { haversineKm } from "@/lib/mesh";
import type { MeshEntry } from "@/lib/mesh-data";
import type { KumaRecord } from "@/app/api/kuma/route";

export type SightingDensity = {
  /** セル中心 10km 以内の目撃件数 */
  count: number;
  /** 距離減衰重み付け (exp(-d/5)) */
  weighted: number;
};

/**
 * 自セルに環境省生息域メッシュ記録がなくても、周囲 (既定 10km) に記録があれば
 * その最大値を距離減衰で加味する「周辺メッシュ密度」スコア。RiskPanel の
 * 詳細スコア計算 (computeScore) でのみ使う。ヒートマップには使わない
 * (Flutter 公開版との整合のため)。
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
 * 半径内の目撃件数と距離減衰重み付けを空間バケットで一括集計する。
 * RiskPanel の件数 headline や RiskCharts でのみ使用。
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
