import { calcHistoryScore } from "@/lib/score";
import { haversineKm } from "@/lib/mesh";
import type { MeshEntry } from "@/lib/mesh-data";

/**
 * 自セルに環境省生息域メッシュ記録がなくても、周囲 (既定 3km) に記録があれば
 * その最大値を距離減衰で加味する「周辺メッシュ密度」スコア。
 *
 * - 自セル (ownMeshCode) は除外し、directHistory と重複しないようにする。
 * - 1km 離れた濃いメッシュ → 約 0.61 係数、2km → 0.37、3km → 0.22。
 * - 生息域に埋もれた集落・農地・調査グリッド境界の孤立評価を是正する。
 */
export function computeNeighborMeshScore(
  meshes: MeshEntry[],
  lat: number,
  lon: number,
  ownMeshCode: string | null,
  radiusKm = 3,
  decayKm = 2,
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
