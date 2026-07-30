/**
 * 楽天アフィリエイトのリンク生成。
 *
 * 任意の楽天 URL を、アフィリ ID 付きの計測リンクに変換する。
 * 形式: https://hb.afl.rakuten.co.jp/hgc/{ID}/?pc={target}&m={target}
 *   pc = PC 向け遷移先 / m = モバイル向け遷移先（同じ URL でよい）
 *
 * アフィリ ID は「ユーザーがタップするリンクに必ず入る＝公開前提」の値だが、
 * 差し替え・管理を容易にするため env（RAKUTEN_AFFILIATE_ID）で持つ。
 * 未設定なら素の URL をそのまま返す（無報酬だがリンクは機能する＝フェイルセーフ）。
 */

export function isRakutenAffiliateConfigured(): boolean {
  return Boolean(process.env.RAKUTEN_AFFILIATE_ID);
}

export function rakutenAffiliateUrl(targetUrl: string): string {
  const id = process.env.RAKUTEN_AFFILIATE_ID;
  if (!id) return targetUrl;
  const enc = encodeURIComponent(targetUrl);
  return `https://hb.afl.rakuten.co.jp/hgc/${id}/?pc=${enc}&m=${enc}`;
}
