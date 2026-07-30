/**
 * LINE 通知メッセージに付ける「クマ対策グッズ」CTA。
 *
 * ねらい: LINE 配信は 1 通ごとに従量課金される純コスト。だが、送っている通知
 * そのものに製品導線（/products へ送客）を載せれば、**メッセージ数を増やさず**
 * （＝追加コスト 0 で）収益機会を持たせられる。通知が増えるほど送客インプレッ
 * ションが増える構造になる。
 *
 * 実際の収益（アフィリエイト報酬）は、送客先 /products の各製品 `affiliateUrl`
 * を埋めることで発生する（Amazon アソシエイト / 楽天 / もしも 等）。この関数は
 * その「入口」を通知に足すだけで、送客先の中身は products.json 側で育てる。
 *
 * 段階公開: 環境変数 LINE_PRODUCT_CTA="1" のときだけ付与する（既定 OFF・
 * フェイルセーフ）。コピー確認・アフィリンク整備が済んでから ON にする。
 * サーバ専用（dispatch route からのみ使用）なので NEXT_PUBLIC_ ではない。
 */

export function isLineProductCtaEnabled(): boolean {
  return process.env.LINE_PRODUCT_CTA === "1";
}

/**
 * 通知本文の末尾に足す CTA 断片。無効時は空文字。
 * 既存の「▼ 地図で見る」と同じ体裁で、短いラベルの次行に短縮 URL を置く（簡潔・煽らない）。
 * ラベル・URL とも短いので折り返して余計な行にはならない。
 * /gear は next.config で /products?src=line へリダイレクト（送客計測込み）。
 */
export function lineProductCtaSuffix(base: string): string {
  if (!isLineProductCtaEnabled()) return "";
  return `\n\n▼ 対策グッズ\n${base}/gear`;
}
