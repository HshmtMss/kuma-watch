/**
 * 出没市町村 → その市町村のふるさと納税（楽天）への対応表。
 *
 * コンセプト（不変）: 「クマが出た"その市町村"を応援」。だから市町村に対応させる。
 *
 * 楽天の制約: 楽天は「地域 × 用途（テーマ）」を1つのURLで絞れない。用途カテゴリは
 * 全国横断で、地域と両立できない。そこで —
 *   - **着地は市町村**（楽天ふるさと納税の市町村検索）＝コンセプト（市町村対応）を守る
 *   - **テーマ（鳥獣対策・自然環境）は寄付時の「使い道」選択で担保**（カードに明記）
 * とする。テーマだけに絞った着地はふるさとチョイスでしかできないが、紹介料の提携が
 * クローズド審査で困難なため、収益（楽天アフィリ）を取る本方針では楽天に寄せる。
 *
 * 実際のアフィリ変換は呼び出し側（/oen/go）で rakutenAffiliateUrl() を通す。
 */

export type DonationTarget = {
  /** CTA に出すラベル（「▼ / 応援する」等は呼び出し側で付与）。 */
  label: string;
  /** 楽天ふるさと納税の着地 URL（アフィリ未変換の素の URL）。 */
  targetUrl: string;
};

const RSEARCH = "https://search.rakuten.co.jp/search/mall";

/** 楽天市場の検索 URL（ふるさと納税の返礼品/寄付が対象）。 */
function rakutenSearch(query: string): string {
  return `${RSEARCH}/${encodeURIComponent(query)}/`;
}

/** 都道府県名を短くする（ラベル用）。北海道は道を残す。 */
function shortPref(pref: string): string {
  return pref.replace(/(県|府|都)$/, "");
}

/**
 * 出没の pref/city から、その市町村のふるさと納税（楽天）への着地先を返す。
 * city があれば市町村単位、無ければ県単位、どちらも無ければ全国。
 */
export function resolveDonationTarget(
  pref?: string,
  city?: string,
): DonationTarget {
  if (pref && city) {
    return {
      label: `${city}を応援`,
      // 県名も入れて市町村を一意化（例: 府中市の重複回避）。
      targetUrl: rakutenSearch(`ふるさと納税 ${pref} ${city}`),
    };
  }
  if (pref) {
    return {
      label: `${shortPref(pref)}を応援`,
      targetUrl: rakutenSearch(`ふるさと納税 ${pref}`),
    };
  }
  return {
    label: "地域を応援",
    targetUrl: rakutenSearch("ふるさと納税"),
  };
}
