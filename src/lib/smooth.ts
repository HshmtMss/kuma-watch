/**
 * Box filter (N×N 平均) をメッシュスコアに適用する。
 *
 * 概念:
 *   各セルの新スコア = 周辺 radius×radius の 4次メッシュの raw スコア平均
 *   (habitat 以外のセルは 0 として計算、分母は常に (2r+1)² 固定)
 *
 * 出力セル:
 *   habitat セル自身 + habitat から radius セル以内の「隣接セル」
 *   → habitat の周囲 radius×radius まで "halo" として色が広がる (穴埋め)
 *
 * 最終スコア:
 *   final = max(raw, boxMean)
 *   habitat は raw を保持 (赤は赤のまま)、
 *   非 habitat は boxMean に塗られる (穴埋め)
 *
 * σ=0 では raw calcHistoryScore のみを返す (Flutter 同等)。
 * σ=1 (微) で radius 1 (3x3)、σ=2 (強) で radius 2 (5x5) 等。
 */
import { latLonToMeshCode, meshCodeToCenter } from "@/lib/mesh";
import { calcHistoryScore } from "@/lib/score";
import type { LandUseMap, MeshEntry } from "@/lib/mesh-data";

/** 穴埋め候補に含めるための森林率の最低ライン (0-1) */
export const MIN_FOREST_FOR_FILL = 0.3;

export type SmoothedCell = {
  m: string;
  lat: number;
  lon: number;
  s: number;
  /** habitat (調査に記録あり) か halo (穴埋め) か */
  isHabitat: boolean;
};

/**
 * 4次メッシュ (2分の1 2次メッシュ) コードを row, col で平行移動する。
 * コード構造: latIdx(2) + lonIdx(2) + secLat(1)secLon(1) + halfLat(1)halfLon(1)
 * 各 1次メッシュ内に 2次 × 2分の1 = 8×2 = 16 行 × 16 列の 4次セルがある。
 */
function shiftMeshCode(
  code: string,
  dRow: number,
  dCol: number,
): string | null {
  if (code.length < 8) return null;
  const latIdx = Number(code.slice(0, 2));
  const lonIdx = Number(code.slice(2, 4));
  const secLat = Number(code[4]);
  const secLon = Number(code[5]);
  const halfLat = Number(code[6]);
  const halfLon = Number(code[7]);
  if (
    !Number.isFinite(latIdx) ||
    !Number.isFinite(lonIdx) ||
    !Number.isFinite(secLat) ||
    !Number.isFinite(secLon) ||
    !Number.isFinite(halfLat) ||
    !Number.isFinite(halfLon)
  ) {
    return null;
  }

  // 1次内の total row/col (0-15) に正規化
  let totalRow = secLat * 2 + halfLat + dRow;
  let totalCol = secLon * 2 + halfLon + dCol;
  let newLatIdx = latIdx;
  let newLonIdx = lonIdx;
  while (totalRow < 0) {
    newLatIdx -= 1;
    totalRow += 16;
  }
  while (totalRow >= 16) {
    newLatIdx += 1;
    totalRow -= 16;
  }
  while (totalCol < 0) {
    newLonIdx -= 1;
    totalCol += 16;
  }
  while (totalCol >= 16) {
    newLonIdx += 1;
    totalCol -= 16;
  }
  if (newLatIdx < 0 || newLatIdx > 99) return null;
  if (newLonIdx < 0 || newLonIdx > 99) return null;

  const newSecLat = Math.floor(totalRow / 2);
  const newHalfLat = totalRow % 2;
  const newSecLon = Math.floor(totalCol / 2);
  const newHalfLon = totalCol % 2;

  return (
    `${String(newLatIdx).padStart(2, "0")}` +
    `${String(newLonIdx).padStart(2, "0")}` +
    `${newSecLat}${newSecLon}` +
    `${newHalfLat}${newHalfLon}`
  );
}

function sigmaToRadius(sigmaKm: number): number {
  // 設定値はそのまま box radius として使う (各プリセットで radius が変わるように)
  //   OFF=0 / 微=1 (3x3) / 弱=2 (5x5) / 中=3 (7x7) / 強=4 (9x9)
  return Math.max(0, Math.round(sigmaKm));
}

export function smoothMeshes(
  meshes: MeshEntry[],
  sigmaKm: number,
  landUse?: LandUseMap | null,
  minForestForFill: number = MIN_FOREST_FOR_FILL,
): SmoothedCell[] {
  // habitat セル map を作る
  const habitatRaw = new Map<string, number>();
  for (const m of meshes) {
    const s = calcHistoryScore({
      second: m.s,
      sixth: m.x,
      latest: m.l,
      latestSingle: m.ls,
    });
    if (s <= 0) continue;
    habitatRaw.set(m.m, s);
  }

  // σ=0: raw のみ返す
  if (sigmaKm <= 0) {
    const out: SmoothedCell[] = [];
    for (const [code, s] of habitatRaw) {
      const c = meshCodeToCenter(code);
      if (!c) continue;
      out.push({ m: code, lat: c.lat, lon: c.lon, s, isHabitat: true });
    }
    return out;
  }

  const radius = sigmaToRadius(sigmaKm);

  // 候補セル集合: habitat + radius セル以内の「森林率が一定以上の」隣接
  // habitat 自身は無条件で含める (生息域の色は弱めない)
  // 非 habitat の隣接セルは森林率ゲートを通す (市街地・農地は穴埋めしない)
  const candidates = new Set<string>(habitatRaw.keys());
  for (const code of habitatRaw.keys()) {
    for (let dR = -radius; dR <= radius; dR++) {
      for (let dC = -radius; dC <= radius; dC++) {
        if (dR === 0 && dC === 0) continue;
        const nc = shiftMeshCode(code, dR, dC);
        if (!nc) continue;
        if (habitatRaw.has(nc)) {
          candidates.add(nc);
          continue;
        }
        if (landUse) {
          const f = landUse.get(nc) ?? 0;
          if (f < minForestForFill) continue;
        }
        candidates.add(nc);
      }
    }
  }

  // 各候補セルで box filter を計算
  const windowSize = (2 * radius + 1) ** 2;
  const out: SmoothedCell[] = [];
  for (const code of candidates) {
    let sum = 0;
    for (let dR = -radius; dR <= radius; dR++) {
      for (let dC = -radius; dC <= radius; dC++) {
        const nc = dR === 0 && dC === 0 ? code : shiftMeshCode(code, dR, dC);
        if (!nc) continue;
        sum += habitatRaw.get(nc) ?? 0;
      }
    }
    const boxMean = sum / windowSize;
    const raw = habitatRaw.get(code) ?? 0;
    const final = Math.max(raw, boxMean);
    if (final <= 0) continue;
    const c = meshCodeToCenter(code);
    if (!c) continue;
    out.push({
      m: code,
      lat: c.lat,
      lon: c.lon,
      s: final,
      isHabitat: raw > 0,
    });
  }
  return out;
}

/**
 * 任意 lat/lon 点での smoothed スコアを 1 箇所だけ計算する (RiskPanel 用)。
 * 重要: ヒートマップの smoothMeshes と同じ「タップ点のセルを中心とした box mean」
 * を返す。最近傍 habitat ではなく、タップ位置のセルそのものを基準にする。
 */
export function computeSmoothedAt(
  meshes: MeshEntry[],
  lat: number,
  lon: number,
  sigmaKm: number,
  landUse?: LandUseMap | null,
  minForestForFill: number = MIN_FOREST_FOR_FILL,
): number {
  if (sigmaKm <= 0) return 0;
  const code = latLonToMeshCode(lat, lon);
  if (!code) return 0;
  const habitatRaw = new Map<string, number>();
  for (const m of meshes) {
    const s = calcHistoryScore({
      second: m.s,
      sixth: m.x,
      latest: m.l,
      latestSingle: m.ls,
    });
    if (s <= 0) continue;
    habitatRaw.set(m.m, s);
  }

  // 森林率ゲート: タップ点のセルが habitat ではなく、かつ森林率が低い (= 市街地/農地) なら
  // 穴埋めしない (= 0 を返す)。habitat 隣接で森林がある場合のみ box mean で穴埋め。
  if (landUse && !habitatRaw.has(code)) {
    const f = landUse.get(code) ?? 0;
    if (f < minForestForFill) return 0;
  }

  const radius = sigmaToRadius(sigmaKm);
  const windowSize = (2 * radius + 1) ** 2;
  let sum = 0;
  for (let dR = -radius; dR <= radius; dR++) {
    for (let dC = -radius; dC <= radius; dC++) {
      const nc = dR === 0 && dC === 0 ? code : shiftMeshCode(code, dR, dC);
      if (!nc) continue;
      sum += habitatRaw.get(nc) ?? 0;
    }
  }
  return sum / windowSize;
}
