import { calcHistoryScore } from "@/lib/score";
import { haversineKm } from "@/lib/mesh";
import type { MeshEntry } from "@/lib/mesh-data";

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
