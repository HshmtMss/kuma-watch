import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

// 政令指定都市の「親市名」集合（"県名|市名"）。区マスター（例:「京都市北区」）から
// 親市（「京都市」）を復元する。市名レベルの cityName（「京都市」）や、マスターに
// 無い新設区（「浜松市浜名区」）は、seirei 親ページ（/place/京都府/京都市 は 200）へ寄せる。
const SEIREI_PARENTS = new Set<string>();
for (const m of JAPAN_MUNICIPALITIES) {
  const mm = /^(.+?市).+区$/.exec(m.cityName);
  if (mm) SEIREI_PARENTS.add(`${m.prefName}|${mm[1]}`);
}

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
// 地名の表記ゆれを吸収して比較用に正規化する。返り値には使わず「照合」だけに使う。
//  - 大きい「ケ」→ 小さい「ヶ」(六ケ所村 / 鰺ケ沢町 など)
//  - 「鯵」→「鰺」(アジの異体字。青森 鰺ヶ沢町のデータ表記ゆれ)
function normMuni(s: string): string {
  return s.replace(/ケ/g, "ヶ").replace(/鯵/g, "鰺");
}

export function resolveCanonicalMuniName(
  prefName: string,
  cityName: string,
): string | null {
  if (!cityName) return null;
  const nc = normMuni(cityName);
  // 1. 完全一致(表記ゆれ吸収)
  const exact = JAPAN_MUNICIPALITIES.find(
    (m) => m.prefName === prefName && normMuni(m.cityName) === nc,
  );
  if (exact) return exact.cityName;
  // 2. 郡付き正式名で末尾一致 (短縮 → 正式: 「浅川町」 → 「石川郡浅川町」)
  const ends = JAPAN_MUNICIPALITIES.find(
    (m) => m.prefName === prefName && normMuni(m.cityName).endsWith(nc),
  );
  if (ends) return ends.cityName;
  // 3. 生地点名が「正式市町村名 + 字/施設名」で始まる場合 (「石川郡浅川町◯◯」→「石川郡浅川町」)。
  //    最長一致するマスターを選び、短い名前への過剰一致を避ける。
  let startsBest: string | null = null;
  for (const m of JAPAN_MUNICIPALITIES) {
    if (m.prefName !== prefName) continue;
    if (
      nc.startsWith(normMuni(m.cityName)) &&
      (!startsBest || m.cityName.length > startsBest.length)
    ) {
      startsBest = m.cityName;
    }
  }
  if (startsBest) return startsBest;
  // 4. 政令市: 市名レベル (「京都市」) か、マスターに無い新設区 (「浜松市浜名区」) は
  //    親市の seirei ページへ寄せる。"X市" または "X市…区" の形だけを対象にする。
  const seirei = /^(.+?市)(?:.+区)?$/.exec(cityName);
  if (seirei && SEIREI_PARENTS.has(`${prefName}|${seirei[1]}`)) {
    return seirei[1];
  }
  // 5. 「郡を除いた正式町村名 + 字/地区」形式 (「佐井村佐井地区」→「下北郡佐井村」)。
  //    マスターの郡を落とした核 (「佐井村」) で前方一致し、最長核を採用。
  let coreBest: string | null = null;
  let coreBestLen = 0;
  for (const m of JAPAN_MUNICIPALITIES) {
    if (m.prefName !== prefName) continue;
    const core = m.cityName.replace(/^.+?郡/, "");
    if (
      core &&
      core !== m.cityName &&
      nc.startsWith(normMuni(core)) &&
      core.length > coreBestLen
    ) {
      coreBest = m.cityName;
      coreBestLen = core.length;
    }
  }
  return coreBest;
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
