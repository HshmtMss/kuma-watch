/**
 * 出没市町村 → その地域の「テーマに沿った」ふるさと納税寄付先の対応表。
 *
 * 方針（ブレストで確定）:
 *   - 肉・米など無関係な返礼品には流さず、テーマ（鳥獣被害対策 / 里山 / 自然環境 /
 *     生物多様性）で絞った楽天ふるさと納税の検索結果に着地させる。
 *   - **着地テーマとラベルを一致させる**（②に着地したのに「クマ対策」と書かない＝景表法）。
 *
 * テーマの階段（上から探して最初に見つかった段を使う想定）:
 *   ① クマ/獣害の看板プロジェクト（FEATURED）… 因果が最も綺麗。今後 楽天版 URL を追加。
 *   ② 鳥獣被害対策（BEAR_PREFS の県は既定でここ）
 *   ③ 里山・自然環境・生物多様性
 *   ④ その地域を応援（テーマ指定なし）
 * v1 は「②鳥獣被害対策」を基本テーマにして県で楽天検索。①③④は今後拡張する。
 *
 * 着地先は楽天ふるさと納税（＝ユーザーが登録済みの楽天アフィリで収益化可能）。
 * 実際のアフィリ変換は呼び出し側（/support/go）で rakutenAffiliateUrl() を通す。
 */

export type DonationTheme =
  | "クマ対策"
  | "鳥獣被害対策"
  | "自然環境"
  | "地域応援";

export type DonationTarget = {
  /** CTA に出すラベル（「▼ / 応援する」等は呼び出し側で付与）。 */
  label: string;
  /** 楽天ふるさと納税の着地 URL（アフィリ未変換の素の URL）。 */
  targetUrl: string;
  /** 着地テーマ（ラベルと一致させる）。 */
  theme: DonationTheme;
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
 * 出没の pref/city から、テーマに沿った寄付先を解決する。
 * pref 省略時は全国フォールバック。
 *
 * ★ 今後: FEATURED（市町村ピンポイントの看板プロジェクト＝楽天版 URL）を先頭に
 *   足せば、①の因果が綺麗な段に自動で上書きできる（label も専用文言に）。
 */
export function resolveDonationTarget(pref?: string): DonationTarget {
  // 楽天のキーワード検索は返礼品タイトルが対象で、「鳥獣被害対策」だけに絞ると
  // 結果が少なく空振りしやすい。そこで **その地域のふるさと納税全体** に着地させ、
  // 鳥獣対策・自然環境などの「使い道」は寄付ページ側で選んでもらう（必ず結果が出る＋
  // テーマも保てる）。ラベルも「○○を応援」と広く正直にする。
  //   ※ 今後 FEATURED（市町村ピンポイントの看板プロジェクト）を先頭に足せば、
  //     因果の綺麗な段（クマ対策の GCF 等）に上書きできる。
  if (pref) {
    return {
      label: `${shortPref(pref)}を応援`,
      targetUrl: rakutenSearch(`ふるさと納税 ${pref}`),
      theme: "地域応援",
    };
  }
  // 全国フォールバック（pref 不明時）。
  return {
    label: "地域を応援",
    targetUrl: rakutenSearch("ふるさと納税 自然環境"),
    theme: "地域応援",
  };
}
