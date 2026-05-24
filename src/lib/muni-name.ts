import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

/**
 * 出没データの cityName は news/sharp9110 等の短縮表記（例: 「浅川町」）と、
 * 市町村マスターの正式表記（例: 「石川郡浅川町」）が混在する。
 * 静的生成された muni ページは正式表記でしか存在しないため、短縮表記のまま
 * リンクすると 404 になる。
 *
 * この関数は短縮 cityName を「正式な郡付き表記」に正規化する。マスターに
 * 後ろ一致するエントリがあればその cityName を返し、なければ null。
 */
export function resolveCanonicalMuniName(
  prefName: string,
  cityName: string,
): string | null {
  if (!cityName) return null;
  // 1. 完全一致
  const exact = JAPAN_MUNICIPALITIES.find(
    (m) => m.prefName === prefName && m.cityName === cityName,
  );
  if (exact) return exact.cityName;
  // 2. 郡付き正式名で末尾一致 (例: 「浅川町」 → 「石川郡浅川町」)
  const ends = JAPAN_MUNICIPALITIES.find(
    (m) => m.prefName === prefName && m.cityName.endsWith(cityName),
  );
  if (ends) return ends.cityName;
  return null;
}

/**
 * 出没情報リンクの href を組み立てる。
 * 市町村ページが存在すれば `/place/{pref}/{muni}` に、なければ pref ページに
 * フォールバック。
 */
export function placeHrefForSighting(
  prefName: string,
  cityName: string,
): string {
  const canonical = resolveCanonicalMuniName(prefName, cityName);
  const prefPath = `/place/${encodeURIComponent(prefName)}`;
  return canonical
    ? `${prefPath}/${encodeURIComponent(canonical)}`
    : prefPath;
}
