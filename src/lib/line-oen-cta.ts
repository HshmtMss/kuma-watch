/**
 * LINE 通知に付ける「地域を応援（ふるさと納税）」CTA。
 *
 * ねらい: LINE 配信は 1 通ごとに従量課金される純コスト。通知そのものに
 * 応援導線の 1 行を載せれば、**メッセージ数を増やさず**（＝追加コスト0で）
 * ふるさと納税アフィリの収益機会を持たせられる。対策グッズ CTA
 * ([[line-product-cta]]) と交互に出すことで、両方の収益面を露出できる。
 *
 * ★ 説明はページ側に集約する:
 *   通知は短く正直な 1 行だけ（高齢者・iPhone 向けに煽らない）。「その地域に
 *   クマ対策枠があるか／なければ寄付の使い道を選べるか」の説明は、着地先の
 *   /oen?pref=&city= が市町村ごとに出し分けて担う（resolveDonationTarget）。
 *   通知 → /oen(説明) → 楽天(収益) の 3 段。ただリンクを貼る形にはしない。
 *
 * アフィリンクなのでラベルに「PR」を明記（ステマ規制 / 景表法対応）。
 *
 * 段階公開: 環境変数 LINE_OEN_CTA="1" のときだけ付与（既定 OFF・フェイルセーフ）。
 * サーバ専用（dispatch route からのみ使用）なので NEXT_PUBLIC_ ではない。
 */

export function isLineOenCtaEnabled(): boolean {
  return process.env.LINE_OEN_CTA === "1";
}

/**
 * 対策グッズ CTA と地域応援 CTA を交互に出すための決定的セレクタ。
 * seed（通知の代表レコード id など）から安定に 2 値へ振り分ける。
 * 決定的にすることで、dispatch のリトライで表示が揺れない・偏らない。
 * true = 地域応援を出す / false = 対策グッズ側に譲る。
 */
export function shouldUseOenCta(seed: string): boolean {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return (h & 1) === 0;
}

/**
 * 通知本文の末尾に足す「地域を応援」CTA 断片。無効時は空文字。
 * 既存の「▼ 地図で見る」と同じ体裁で、短いラベルの次行に URL を置く（簡潔）。
 * pref/city を渡すと /oen がその市町村の説明で着地する。無ければ汎用 /oen。
 */
export function lineOenCtaSuffix(
  base: string,
  pref?: string,
  city?: string,
): string {
  if (!isLineOenCtaEnabled()) return "";
  const params = new URLSearchParams();
  if (pref) params.set("pref", pref);
  if (city) params.set("city", city);
  const q = params.toString();
  const href = q ? `${base}/oen?${q}` : `${base}/oen`;
  return `\n\n▼ この地域を応援できます（ふるさと納税・PR）\n${href}`;
}
