/**
 * アフィリエイト（Amazon アソシエイト）設定。試験導入（/place・/spot の対策枠）。
 *
 * 公開フラグ: NEXT_PUBLIC_AFFILIATE_ENABLED === "true" のときだけ表示。
 * アソシエイトタグ: NEXT_PUBLIC_AMAZON_ASSOC_TAG（例 "kumawatch-22"）。
 * タグ未設定なら「公開しない」（無報酬リンクを出さないフェイルセーフ）。
 * NEXT_PUBLIC_ なのでサーバ/クライアント双方で同じ値を参照できる。
 *
 * リンク方式は「検索リンク」。特定 ASIN ではなくキーワード検索に飛ばすので、
 * 在庫切れ・廃番のメンテが不要（試験導入向き）。
 */

const TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOC_TAG ?? "";

export function affiliateEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_AFFILIATE_ENABLED === "true" && TAG.length > 0
  );
}

/** Amazon.co.jp の検索結果 URL（アソシエイトタグ付き）。 */
export function amazonSearchUrl(keyword: string): string {
  const base = `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`;
  return TAG ? `${base}&tag=${encodeURIComponent(TAG)}` : base;
}

export type BearGearItem = {
  key: string;
  label: string;
  keyword: string;
  blurb: string;
};

// クマ対策の定番グッズ。煽らず「行動の補助」として。出没件数とは紐づけない。
export const BEAR_GEAR: BearGearItem[] = [
  {
    key: "bell",
    label: "クマ鈴",
    keyword: "熊鈴 クマよけ",
    blurb: "音で存在を知らせ、出会い頭を避ける",
  },
  {
    key: "spray",
    label: "熊撃退スプレー",
    keyword: "熊撃退スプレー",
    blurb: "至近距離の最終手段（携行・保管に注意）",
  },
  {
    key: "radio",
    label: "携帯ラジオ",
    keyword: "携帯ラジオ 小型 アウトドア",
    blurb: "音を出しながら行動できる",
  },
  {
    key: "light",
    label: "ヘッドライト",
    keyword: "ヘッドライト 登山 LED",
    blurb: "早朝・夕方の薄暗い時間帯に",
  },
];
