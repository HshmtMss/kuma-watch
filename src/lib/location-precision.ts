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
  prefectureName?: string;
  cityName?: string;
  approxLocation?: boolean;
  comment?: string;
};

/**
 * 地区名の欄に県名・市町村名・区名しか入っていないか。
 * 報道では「福島市」「宮城野区」のように市区町村名がそのまま地区名に入ることがあり、
 * その座標は市区町村の代表点 (役所・学校・公園など) でしかない。
 * 実測 (2026-11-07): 約 560 件 (233 地点) がこの形でピンになり、鶴ヶ城公園・宮城野区役所・
 * 県立高校などの上に立っていた。
 */
function isAdminOnlySection(r: LocationPrecisionInput, section: string): boolean {
  let t = section;
  for (const name of [r.prefectureName, r.cityName]) {
    const n = normalizeSection(name);
    if (n && t.startsWith(n)) t = t.slice(n.length);
  }
  // 県名・市町村名だけ / 区名だけ (政令市の「宮城野区」、合併前の旧町村にあたる
  // 「小高区」など)。「緑郷3区」のような番号付きの区や「〇〇地区」は地区として扱う。
  return t === "" || /^[^区\d]{1,4}(?<!地)区$/.test(t);
}

/**
 * 場所が市町村までしか分かっていない (= ピンとして打てない) なら true。
 *
 * 判定は「地名から座標を起こす経路」かつ「地区名が場所を特定しない、または
 * 地区まで座標に起こせなかった (approxLocation)」。
 * 地区名の一般語判定 (「市内」「道路」「不明」等) は incidentKey と同じ
 * normalizeSection を使い、規則を二重に持たない。
 */
export function isApproximateLocation(r: LocationPrecisionInput): boolean {
  if (isMunicipalityLevelOnly(r)) return true;
  const kind = r.sourceKind ?? r.source ?? "";
  if (!GEOCODED_KINDS.has(kind)) return false;
  return !namesSpecificPoint(r);
}

/**
 * 地区名が一点を指す名前か (橋・学校・駅・番地・河川敷など)。
 *
 * 大字・町名など「面」の名前から起こした座標はその区域の代表点でしかなく、
 * 代表点がゴルフ場や神社や学校の敷地に落ちると「そこで出た」と読めてしまう
 * (2026-11-06 大厚木カントリークラブの申し出。点検で大山阿夫利神社・本郷CC・
 * 鳥屋駐在所なども同じ形)。そのため、一点を指す名前以外はピンにしない
 * (2026-11-12 方針決定)。件数と通知 (地区単位で十分) には残す。
 * 河川敷・川沿いは取り込み時に川へ寄せている (snapToRiver) のでピンに残す。
 */
// 名前つきの施設・地物で終わる (「白髭濁沼橋」「第一中学校付近」)。前に 2 文字以上の
// 名前を求めるのは、「小学校付近」「公園」「ゴルフ場」のように名前が無いと
// どの施設か分からず、座標が当て推量になるため。
const NAMED_FEATURE =
  /\S{2,}(橋|トンネル|駅|小学校|中学校|高校|学校|大学|保育園|幼稚園|公園|神社|寺院|病院|インター|IC|道の駅|バス停|ダム|キャンプ場|スキー場|ゴルフ場|牧場|登山口|峠|交差点)$/;
const VAGUE_SUFFIX = /(付近|周辺|近く|近辺|の?敷地内?|運動場|入口|前)$/;
const ADDRESS = /(番地|\d+番|\d+-\d+)/;
const RIVERSIDE = /(河川敷|川沿い)/;

function namesSpecificPoint(r: LocationPrecisionInput): boolean {
  const section = (r.sectionName ?? "").normalize("NFKC").replace(/\s/g, "");
  if (ADDRESS.test(section)) return true;
  if (NAMED_FEATURE.test(section.replace(VAGUE_SUFFIX, ""))) return true;
  return RIVERSIDE.test(section) || RIVERSIDE.test((r.comment ?? "").normalize("NFKC"));
}

/**
 * 場所が市町村までしか分かっていない (地区名が無い・市町村名だけ・地区を座標に
 * 起こせなかった) なら true。通知の可否はこちらで決める: 通知は「登録地点から
 * 半径 N km」で届けるので、地区の代表点なら誤差は配信半径に収まる。
 */
export function isMunicipalityLevelOnly(r: LocationPrecisionInput): boolean {
  const kind = r.sourceKind ?? r.source ?? "";
  if (!GEOCODED_KINDS.has(kind)) return false;
  if (r.id != null && String(r.id) in UNPINNABLE_IDS) return true;
  // 地区名があっても、その地区を座標に起こせなかったものはピンにできない。
  // 以前は地区名の有無だけを見ていたため、「緑区長竹」が引けずに相模原市の
  // 代表点 (駅前) へ丸められた記録がピンとして出ていた (2026-09-27 利用者指摘)。
  if (r.approxLocation) return true;
  const section = normalizeSection(r.sectionName);
  if (section === "") return true;
  return isAdminOnlySection(r, section);
}

/** 地図に出せるレコードだけを残す。 */
export function withPinnableLocation<T extends LocationPrecisionInput>(
  records: T[],
): T[] {
  return records.filter((r) => !isApproximateLocation(r));
}
