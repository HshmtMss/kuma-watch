import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

/**
 * 出没データの cityName は news/sharp9110 等の短縮表記（例: 「浅川町」）と、
 * 市町村マスターの正式表記（例: 「石川郡浅川町」）が混在する。
 * 静的生成された muni ページは正式表記でしか存在しないため、短縮表記のまま
 * リンクすると 404 になる。
 *
 * この関数は短縮 cityName を「正式な郡付き表記」に正規化する。マスターに
 * 後ろ一致するエントリがあればその cityName を返し、なければ null。
 *
 * さらに、生地点名が「正式市町村名 + 字/施設名」の形（例:「石川郡浅川町◯◯地区」）
 * の場合は前方一致で市町村へ寄せる（place-index の正規化と方向を揃える）。これにより
 * /spot の周辺市町村リンクや proxy の 308 集約が、生地点名を県ページ止まりにせず
 * 正しい市町村ページへ誘導できる。
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
  // 2. 郡付き正式名で末尾一致 (短縮 → 正式: 「浅川町」 → 「石川郡浅川町」)
  const ends = JAPAN_MUNICIPALITIES.find(
    (m) => m.prefName === prefName && m.cityName.endsWith(cityName),
  );
  if (ends) return ends.cityName;
  // 3. 生地点名が「正式市町村名 + 字/施設名」で始まる場合 (「石川郡浅川町◯◯」→「石川郡浅川町」)。
  //    最長一致するマスターを選び、短い名前への過剰一致を避ける。
  let startsBest: string | null = null;
  for (const m of JAPAN_MUNICIPALITIES) {
    if (m.prefName !== prefName) continue;
    if (
      cityName.startsWith(m.cityName) &&
      (!startsBest || m.cityName.length > startsBest.length)
    ) {
      startsBest = m.cityName;
    }
  }
  return startsBest;
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
