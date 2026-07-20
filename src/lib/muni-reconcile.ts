/**
 * 公式ソースで「市町村名の列」と「緯度経度」が食い違うレコードの突き合わせ。
 *
 * === 判定を誤った経緯 (重要) ===
 * 当初は「観察場所の記載」と「市町村名の列」を独立した2つの証拠として扱い、
 * 両者が一致すれば座標のほうが誤りと判定していた。これは誤りだった。
 * 観察場所の先頭の市町村名と市町村名の列は同じ入力に由来しており、
 * 独立ではなく「同じ誤りが両方に載っている」だけだった。
 *
 * 京都府のデータで検証できる:
 *   問題の行: 観察場所「舞鶴市上八田町」/ 市町村名「舞鶴市」/ 座標は綾部市内
 *   同じ府のデータ内の他の行: 「上八田町」を含む14件はすべて市町村名が綾部市
 *   (八津合町 46件中45件が綾部市、猪崎 7件が福知山市、位田町 87件が綾部市)
 * つまり地区名は座標側と一致しており、誤っているのは市町村名のほうだった。
 *
 * === 現在の判定 ===
 * 市町村接頭辞は証拠に使わない。**地区名 (大字) だけ**を、同一データ内で
 * 市町村名と座標が整合している他レコードから学習した辞書で引く
 * (place-gazetteer)。地区名が指す市町村が
 *   座標の位置と一致 → 市町村名の列が誤り  → 名前を直す
 *   記載市町村と一致 → 座標が誤り          → 座標を市域内へ寄せる
 *   どちらとも言えない                      → 触らない
 *
 * 既定は「触らない」。根拠なく公式記録を書き換えないため。
 */
import {
  containingCode,
  hasBoundaryData,
  isInsideMuni,
  pointInsideMuni,
  resolveMuni,
  type MuniRef,
} from "@/lib/muni-boundary";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import type { Gazetteer } from "@/lib/place-gazetteer";

const muniByCode = new Map(JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, m]));

export type Reconciliation =
  | { action: "ok" }
  | { action: "unknown"; claimed: MuniRef; actualName: string | null }
  | { action: "move"; lat: number; lon: number; claimed: MuniRef }
  | { action: "relabel"; cityName: string; claimed: MuniRef };

type Rec = {
  id: string;
  lat: number;
  lon: number;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  comment?: string;
};

/**
 * 公式ソース (座標が上流由来) 1件を突き合わせる。
 * 判定不能・境界データ無しなら "ok"/"unknown" を返し、データは変えない。
 */
/**
 * 緯度と経度の小数部が完全に一致する = 片方の欄をもう片方から複写した痕跡。
 * 6桁一致が偶然起きる確率は1レコードあたり100万分の1で、8.5万件なら期待値
 * 0.09件。実際には京都府データに5件あり、明らかに系統的な入力ミス。
 * 行政界の内外にかかわらず座標として信用できない (偶然その市の域内に
 * 落ちると境界判定をすり抜けるため、この署名で別途捕まえる)。
 */
export function hasCopiedCoordinate(lat: number, lon: number): boolean {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return false;
  return Math.abs(((lat % 1) + 1) % 1 - (((lon % 1) + 1) % 1)) < 1e-9;
}

export function reconcileOfficialRecord(
  r: Rec,
  gaz?: Gazetteer,
): Reconciliation {
  if (!hasBoundaryData()) return { action: "ok" };
  if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) return { action: "ok" };
  // 座標の複写ミスは行政界の内外を問わず信用できない
  if (hasCopiedCoordinate(r.lat, r.lon)) {
    const c0 = resolveMuni(r.prefectureName, r.cityName);
    if (c0) return { action: "unknown", claimed: c0, actualName: null };
  }
  const claimed = resolveMuni(r.prefectureName, r.cityName);
  if (!claimed) return { action: "ok" };
  if (isInsideMuni(r.lat, r.lon, claimed) !== false) return { action: "ok" };

  const code = containingCode(r.lat, r.lon);
  const actual = code ? muniByCode.get(code) : undefined;
  const actualName = actual ? actual.cityName : null;

  // 観察場所から市町村名を取り除き、地区名 (大字) だけを証拠にする。
  // 先頭の市町村名は市町村名の列と同じ入力に由来しうるので使わない。
  const stripMuniNames = (t: string | undefined): string => {
    let out = (t ?? "").normalize("NFKC");
    for (const m of JAPAN_MUNICIPALITIES) {
      if (m.prefName !== r.prefectureName) continue;
      for (const nm of [m.cityName, m.cityName.replace(/^[^\s]+?郡/, "")])
        if (nm && nm.length >= 2) out = out.split(nm).join("");
    }
    return out;
  };

  if (gaz) {
    const district = stripMuniNames(r.sectionName);
    const cityRest = stripMuniNames(r.cityName);
    const g = gaz.lookup([district, cityRest, r.comment]);
    if (g) {
      const isClaimed = claimed.cityCodes.includes(g.code);
      const isActual = actual ? actual.cityCode === g.code : false;
      if (isActual && !isClaimed && actual) {
        // 地区名が座標の位置を指している → 市町村名の列が誤り
        return { action: "relabel", cityName: actual.cityName, claimed };
      }
      if (isClaimed && !isActual) {
        // 地区名が記載市町村を指している → 座標が誤り
        const p = pointInsideMuni(claimed, r.id);
        return { action: "move", lat: p.lat, lon: p.lon, claimed };
      }
    }
  }
  return { action: "unknown", claimed, actualName };
}
