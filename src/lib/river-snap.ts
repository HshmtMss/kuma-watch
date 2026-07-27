// 「河川敷/川沿い」等と明記された報道出没を、実際の川へ寄せる(snap)。
//
// 背景: Nominatim/LLM は認識できる地名(駅・町名)へ座標を寄せるため、本文が
// 「梅田川河川敷」と言っていても実際の川から数百m〜1km ずれ、街中にピンが立つ
// (実測 400〜850m)。ユーザークレームの直接原因(#4)。
//
// 方針(安全第一):
//   1. 本文に河川敷系の語(FEAT)があり、かつ 収録河川の名前が本文に現れる場合のみ対象。
//   2. その川の最寄り点が現在地から MAX_SNAP_KM 以内のときだけ寄せる。
//      → 「大川添」の様な地名一致で 11km 先の同名別川に飛ばす誤りを防ぐ。
//   3. 寄せ先が主張市町村の域外なら寄せない(市ラベルと矛盾させない)。
//   基礎データは公式・安定な国土数値情報 W05(河川) から生成(src/data/river-geometry.json)。
//   取り込み時に外部APIを叩かない=安定。
//
// 検証: scripts/verify-river-snap.py — 20件補正/平均659m/市域外0件(2026-07-26)。
import riverGeometry from "../data/river-geometry.json";
import { haversineKm, isInsideMuni, resolveMuni } from "./muni-boundary";

type RiverDict = Record<string, Record<string, [number, number][]>>;
const RIVERS = riverGeometry as unknown as RiverDict;

/** 川岸に居たと明記する語。これが無ければ「川の近く」でも寄せない(住宅街の可能性)。 */
const FEAT = ["河川敷", "川沿い", "川原", "堤防", "沿岸"] as const;

/** 現在地からこの距離以内の川点にだけ寄せる。遠い同名別川への誤スナップ防止。 */
const MAX_SNAP_KM = 2.0;

function hasFeature(text: string): boolean {
  return FEAT.some((w) => text.includes(w));
}

/** 本文に名前が現れる収録河川のうち最長名を返す(「荒川」より「新荒川」を優先)。 */
function matchRiver(
  pref: string,
  text: string,
): [string, [number, number][]] | null {
  const dict = RIVERS[pref];
  if (!dict) return null;
  const names = Object.keys(dict).sort((a, b) => b.length - a.length);
  for (const name of names) {
    if (name.length >= 2 && dict[name].length > 0 && text.includes(name)) {
      return [name, dict[name]];
    }
  }
  return null;
}

/**
 * 河川敷系の報道座標を実際の川へ寄せた点を返す。対象外・安全でない場合は null。
 * 呼び出し側は null なら元座標を維持する。
 */
export function snapToRiver(
  prefName: string,
  cityName: string,
  sectionName: string,
  comment: string,
  lat: number,
  lon: number,
): { lat: number; lon: number; river: string; movedKm: number } | null {
  const text = `${sectionName ?? ""}${comment ?? ""}`;
  if (!hasFeature(text)) return null;
  const m = matchRiver(prefName, text);
  if (!m) return null;
  const [river, pts] = m;

  let best = Infinity;
  let bla = 0;
  let blo = 0;
  for (const [pla, plo] of pts) {
    const d = haversineKm(lat, lon, pla, plo);
    if (d < best) {
      best = d;
      bla = pla;
      blo = plo;
    }
  }
  if (best > MAX_SNAP_KM) return null; // 近くに該当の川が無い=誤マッチ/遠い別川

  // 寄せ先が主張市町村の域外なら見送り(域内 or 判定不能=null のときだけ寄せる)。
  const claimed = resolveMuni(prefName, cityName);
  if (claimed && isInsideMuni(bla, blo, claimed) === false) return null;

  return { lat: bla, lon: blo, river, movedKm: best };
}
