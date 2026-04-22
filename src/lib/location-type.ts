export type LocationType = "mountain" | "trail" | "farmland" | "suburb" | "city";

/**
 * 標高と森林被覆から場所タイプを近似分類する。
 *
 * 将来的に人口密度メッシュや土地利用区分が入れば精度が上がるが、
 * いまは /api/elevation + /api/forest だけで MVP 分類を作る。
 */
export function classifyLocationType(
  elevationM: number | null,
  isForest: boolean | null,
): LocationType {
  const el = elevationM ?? 0;
  const forest = isForest === true;

  if (forest) {
    if (el >= 800) return "trail"; // 高標高 × 森林 = 登山道・アルパイン
    return "mountain"; // その他の森林 = 山間部
  }

  // 非森林
  if (el >= 400) return "farmland"; // 高原・開けた里山
  if (el >= 60) return "suburb"; // 郊外住宅地
  return "city"; // 低標高の市街地中心部
}

export const LOCATION_TYPE_META: Record<
  LocationType,
  { emoji: string; label: string }
> = {
  mountain: { emoji: "🌲", label: "山間部" },
  trail: { emoji: "⛰️", label: "登山道・森林内" },
  farmland: { emoji: "🌾", label: "農地・里山" },
  suburb: { emoji: "🏡", label: "郊外の住宅地" },
  city: { emoji: "🏙️", label: "市街地" },
};

/**
 * 場所タイプ × リスクレベルで「一言判定」を返す。
 * アラームを煽らず行動指示に寄せた言い回しにする。
 */
export function locationVerdict(
  type: LocationType,
  level: "safe" | "low" | "moderate" | "elevated" | "high",
): string {
  // 市街地や郊外では、高い score でも「異例」扱いにして過度に煽らない
  if (type === "city") {
    if (level === "elevated" || level === "high") return "異例の出没が出ています";
    return "基本は安全";
  }
  if (type === "suburb") {
    if (level === "high") return "近年の異例出没に注意";
    if (level === "elevated") return "しっかり対策を";
    if (level === "moderate") return "少し意識して";
    return "通常は安全";
  }
  if (type === "farmland") {
    if (level === "high") return "入山は慎重に";
    if (level === "elevated") return "しっかり対策を";
    if (level === "moderate") return "標準的な注意";
    return "基本対策で OK";
  }
  // mountain / trail は基本的に慎重寄り
  if (type === "trail") {
    if (level === "low" || level === "safe") return "基本対策を必ず";
    if (level === "moderate") return "しっかり対策を";
    return "入山は慎重に";
  }
  // mountain
  if (level === "low" || level === "safe") return "基本対策で OK";
  if (level === "moderate") return "しっかり対策を";
  if (level === "elevated") return "入山は慎重に";
  return "極めて警戒";
}
