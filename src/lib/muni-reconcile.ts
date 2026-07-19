/**
 * 公式ソースで「市町村名の列」と「座標」が食い違うレコードの突き合わせ。
 *
 * 当初は「公式ソースは座標が一次情報だから座標を信じる」と決めていたが、
 * 実データを開いて確認したところ誤りだった。京都府のオープンデータ
 * (BODIK 260002bearfy.csv) には例えばこういう行がある:
 *
 *   観察場所=舞鶴市桜が丘地内 / 市町村名=舞鶴市 / 座標=35.3157,135.2770
 *   → 座標は 18km 南の綾部市内。観察場所と市町村名は一致しており座標だけ外れ。
 *
 *   観察場所=福知山市位田町浦壁 / 市町村名=福知山市 / 座標=綾部市内
 *   → 位田町は綾部市の地名。座標のほうが正しく、名前が誤り。
 *
 * つまり誤っているのは行ごとに違う。観察場所の自由記述に含まれる地名を
 * 第三の証拠として使い、多数決で判定する:
 *
 *   観察場所の地名 == 市町村名の列  != 座標の所属  → 座標が誤り  (座標を寄せる)
 *   観察場所の地名 == 座標の所属    != 市町村名の列 → 名前が誤り  (名前を直す)
 *   どちらとも言えない                             → 触らない
 *
 * 「触らない」を既定にするのは、根拠なく公式記録を書き換えないため。
 */
import {
  containingCode,
  findMuniInText,
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
export function reconcileOfficialRecord(
  r: Rec,
  gaz?: Gazetteer,
): Reconciliation {
  if (!hasBoundaryData()) return { action: "ok" };
  if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) return { action: "ok" };
  const claimed = resolveMuni(r.prefectureName, r.cityName);
  if (!claimed) return { action: "ok" };
  if (isInsideMuni(r.lat, r.lon, claimed) !== false) return { action: "ok" };

  const code = containingCode(r.lat, r.lon);
  const actual = code ? muniByCode.get(code) : undefined;
  const actualName = actual ? actual.cityName : null;

  // 観察場所・備考の自由記述から地名を拾う (第三の証拠)
  const hint =
    findMuniInText(r.prefectureName, r.sectionName) ??
    findMuniInText(r.prefectureName, r.comment);
  if (hint) {
    const sameAsClaimed = hint.cityCodes.join() === claimed.cityCodes.join();
    const sameAsActual = actual ? hint.cityCodes.includes(actual.cityCode) : false;
    if (sameAsClaimed && !sameAsActual) {
      const p = pointInsideMuni(claimed, r.id);
      return { action: "move", lat: p.lat, lon: p.lon, claimed };
    }
    if (sameAsActual && !sameAsClaimed && actual) {
      return { action: "relabel", cityName: actual.cityName, claimed };
    }
  }

  // 現市町村名で当たらない場合は、データ由来の地名辞書で旧町村名・大字を引く。
  // (八尾町→富山市、驫木地区→深浦町 など。詳細は place-gazetteer)
  if (gaz) {
    // 循環回避: 主張市町村名は根拠語から除外し、cityName 側は市町村名を
    // 取り除いた残り (青森県の "六戸町尾鮫地区" の "尾鮫地区" 部分) を見る。
    const short = claimed.cityName.replace(/^[^\s]+?郡/, "");
    const banned = new Set([claimed.cityName, short]);
    const cityRest = (r.cityName ?? "").replace(short, "");
    const g = gaz.lookup([r.sectionName, r.comment, cityRest], banned);
    if (g) {
      const isClaimed = claimed.cityCodes.includes(g.code);
      const isActual = actual ? actual.cityCode === g.code : false;
      if (isClaimed && !isActual) {
        const p = pointInsideMuni(claimed, r.id);
        return { action: "move", lat: p.lat, lon: p.lon, claimed };
      }
      if (isActual && !isClaimed && actual) {
        return { action: "relabel", cityName: actual.cityName, claimed };
      }
    }
  }
  return { action: "unknown", claimed, actualName };
}
