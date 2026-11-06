/**
 * 「その出没の場所が、地図にピンとして打てるだけの精度で分かっているか」の判定。
 *
 * 報道 (news) と LLM 抽出 (llm-html / pdf-llm) は、記事や PDF に地区名が書かれて
 * いないことがある。その場合に得られる座標は市町村名から引いた点にすぎず、実際の
 * 出没地点ではない。取り込み側は precise=false として市域内の決定論的な点へ
 * ジッターしているが、ジッターした先も当然「実際の場所」ではない。
 *
 * 一点に集中させれば公共施設の住所に大量のピンが立ち (実測: 会津若松市役所に 30 件、
 * 福島市役所に 22 件)、散らせば無関係な民家や店舗の上にピンが立つ。どちらも
 * 「そこで出た」という誤った主張になるため、地図には出さない。
 *
 * 一方で「その市町村で出没があった」こと自体は記事で裏取り済みの事実なので、
 * 件数からは落とさない。安全情報を過小に見せる方が危険なため。
 * 地図に出ない分は place ページで件数を添えて明示する。
 *
 * 公式データ (自治体・警察) は地区名が空でも座標が実測値なので対象外。
 * 例: 宮城県のオープンデータは sectionName を持たないが、1 日 16 件が
 * それぞれ別の座標に記録されており、これは実在の別地点である。
 */
import { normalizeSection } from "@/lib/incident-key";

/**
 * 地区名は引けたが、その代表点が特定の施設・敷地の上に落ちてしまい、
 * 「その施設で出た」と読めてしまう記録。id 指定でピンにせず件数だけにする。
 * 記録そのものは消さない (出没の事実は元の情報にあるため)。
 * 誤った事案を消す場合は news-suppression.ts の SUPPRESSED_NEWS_IDS を使う。
 */
export const UNPINNABLE_IDS: Record<string, string> = {
  // 2026-11-06、大厚木カントリークラブ (厚木市上荻野4088) より「当社の敷地内に
  // 出没箇所が設定されているが、そのような事実はない」との申し出。元の報道は
  // 「厚木市上荻野でクマ出没の可能性」で大字名までしかなく、上荻野の代表点が
  // ゴルフ場 (OSM way 615218586) の区域内に落ちていた。
  "news-1tw6nwb-3-2":
    "大厚木カントリークラブの申し出(2026-11-06)。大字「上荻野」の代表点がゴルフ場内に落ちていた",
};

/** 座標が地名からの推定でしかない取り込み経路。 */
const GEOCODED_KINDS = new Set(["news", "llm-html"]);

export type LocationPrecisionInput = {
  id?: string | number;
  sourceKind?: string;
  source?: string;
  sectionName?: string;
  approxLocation?: boolean;
};

/**
 * 場所が市町村までしか分かっていない (= ピンとして打てない) なら true。
 *
 * 判定は「地名から座標を起こす経路」かつ「地区名が場所を特定しない、または
 * 地区まで座標に起こせなかった (approxLocation)」。
 * 地区名の一般語判定 (「市内」「道路」「不明」等) は incidentKey と同じ
 * normalizeSection を使い、規則を二重に持たない。
 */
export function isApproximateLocation(r: LocationPrecisionInput): boolean {
  const kind = r.sourceKind ?? r.source ?? "";
  if (!GEOCODED_KINDS.has(kind)) return false;
  if (r.id != null && String(r.id) in UNPINNABLE_IDS) return true;
  // 地区名があっても、その地区を座標に起こせなかったものはピンにできない。
  // 以前は地区名の有無だけを見ていたため、「緑区長竹」が引けずに相模原市の
  // 代表点 (駅前) へ丸められた記録がピンとして出ていた (2026-09-27 利用者指摘)。
  if (r.approxLocation) return true;
  return normalizeSection(r.sectionName) === "";
}

/** 地図に出せるレコードだけを残す。 */
export function withPinnableLocation<T extends LocationPrecisionInput>(
  records: T[],
): T[] {
  return records.filter((r) => !isApproximateLocation(r));
}
