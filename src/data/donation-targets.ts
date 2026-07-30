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

/** クマ生息・出没が多い都道府県（②鳥獣被害対策テーマを既定にする対象）。 */
const BEAR_PREFS = new Set([
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "新潟県", "富山県", "石川県", "福井県", "長野県", "岐阜県",
  "群馬県", "栃木県", "山梨県", "兵庫県", "京都府", "鳥取県", "島根県", "広島県",
]);

/**
 * 出没の pref/city から、テーマに沿った寄付先を解決する。
 * pref 省略時は全国フォールバック。
 *
 * ★ 今後: FEATURED（市町村ピンポイントの看板プロジェクト＝楽天版 URL）を先頭に
 *   足せば、①の因果が綺麗な段に自動で上書きできる（label も専用文言に）。
 */
export function resolveDonationTarget(pref?: string): DonationTarget {
  // ② 鳥獣被害対策（クマ多発県）
  if (pref && BEAR_PREFS.has(pref)) {
    return {
      label: `${shortPref(pref)}の鳥獣被害対策を応援`,
      targetUrl: rakutenSearch(`ふるさと納税 ${pref} 鳥獣被害対策`),
      theme: "鳥獣被害対策",
    };
  }
  // ④ その他の県 → 地域応援（テーマは自然環境で軽く絞る）
  if (pref) {
    return {
      label: `${shortPref(pref)}の自然環境を応援`,
      targetUrl: rakutenSearch(`ふるさと納税 ${pref} 自然環境`),
      theme: "自然環境",
    };
  }
  // 全国フォールバック
  return {
    label: "獣害に向き合う地域を応援",
    targetUrl: rakutenSearch("ふるさと納税 鳥獣被害対策"),
    theme: "鳥獣被害対策",
  };
}
