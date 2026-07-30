/**
 * 応援カード / LINE の「応援」導線が着地する、ふるさと納税の寄付先。
 *
 * ねらい: 肉・米などの一般返礼品ではなく、**クマ・野生動物・自然環境の保全**という
 * テーマに直接アプローチできる寄付に着地させる。
 *
 * 採用: 楽天ふるさと納税の **「自然環境保護」用途カテゴリ**
 *   https://event.rakuten.co.jp/furusato/purpose/environment/
 *   = 寄付金の使い道が「自然環境保護」（野生動物保護・森林・自然保全 等）に指定された
 *     寄付の一覧。ここに直着地するので、テーマがぶれない。
 *
 * ※ 楽天は「地域 × 用途」を1つのURLで絞れない（用途カテゴリは全国横断）。そのため
 *   v1 は **テーマ（自然環境保護）を優先**し、地域指定は落とす。地域 × テーマの細分
 *   （例: ○○県のクマ対策 GCF）を出したい場合は、ふるさとチョイス（クローズドASP）や
 *   看板プロジェクトの手キュレーションが必要 → 今後の拡張。
 *
 * 実際のアフィリ変換は呼び出し側（/oen/go）で rakutenAffiliateUrl() を通す。
 */

export type DonationTheme = "自然環境" | "クマ対策" | "地域応援";

export type DonationTarget = {
  /** CTA に出すラベル（「▼ / 応援する」等は呼び出し側で付与）。着地テーマと一致させる。 */
  label: string;
  /** 楽天ふるさと納税の着地 URL（アフィリ未変換の素の URL）。 */
  targetUrl: string;
  theme: DonationTheme;
};

/** 楽天ふるさと納税「自然環境保護」用途カテゴリ。 */
const RAKUTEN_ENV_PURPOSE =
  "https://event.rakuten.co.jp/furusato/purpose/environment/";

/**
 * 応援の着地先を返す。v1 は全国の「自然環境保護」テーマに直着地（地域指定なし）。
 * 引数は将来の地域×テーマ拡張／計測用に受けるが、v1 では未使用。
 */
export function resolveDonationTarget(): DonationTarget {
  return {
    label: "野生動物と自然環境を応援",
    targetUrl: RAKUTEN_ENV_PURPOSE,
    theme: "自然環境",
  };
}
