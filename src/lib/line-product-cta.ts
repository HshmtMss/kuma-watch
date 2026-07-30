/**
 * LINE 通知メッセージに付ける「対策グッズ / 広告」CTA。
 *
 * ねらい: LINE 配信は 1 通ごとに従量課金される純コスト。だが、送っている通知
 * そのものに送客・広告の 1 行を載せれば、**メッセージ数を増やさず**（＝追加コスト0
 * で）収益機会を持たせられる。通知が増えるほど露出が増える構造になる。
 *
 * ★ 配信先に応じた出し分け:
 *   LINE 配信は「市町村 / 観光地 / 登録地点」の単位で "誰に送るか" が分かった状態で
 *   組み立てられる (api/line/dispatch)。その対象情報 (CtaTarget) を渡すと、下の
 *   AD_SLOTS を上から評価して最初にマッチした広告を 1 行だけ差し込む。
 *   例) 秋田県の通知には秋田のスポンサー、観光地の通知には登山用品、それ以外は自社送客。
 *   → 地域を絞れる＝広告単価の高いスポンサー枠(B2B)として売れる。
 *
 * 収益(アフィリ/自社商材)は送客先ページ側で発生する。ここは「入口の 1 行」を出し分ける
 * だけ。スポンサー広告 (sponsored:true) には景表法対応で「［PR］」を自動で付ける。
 *
 * 段階公開: 環境変数 LINE_PRODUCT_CTA="1" のときだけ付与する（既定 OFF・フェイルセーフ）。
 * サーバ専用（dispatch route からのみ使用）なので NEXT_PUBLIC_ ではない。
 */

export function isLineProductCtaEnabled(): boolean {
  return process.env.LINE_PRODUCT_CTA === "1";
}

/** 配信先の文脈。dispatch の 3 経路それぞれから渡す。 */
export type CtaTarget =
  | { kind: "muni"; pref: string; city: string }
  | { kind: "spot"; slug: string; name: string }
  | { kind: "geo"; label: string };

/** 広告スロット。match 未指定は「全配信にマッチ（＝デフォルト）」。 */
type AdSlot = {
  /** 計測・識別用の短い id。 */
  id: string;
  /** 表示ラベル（先頭の「▼ 」込み）。sponsored 時は自動で「［PR］」を前置。 */
  label: string;
  /** リンク先パス（base と結合。クエリ可）。/gear は /products?src=line へ転送。 */
  path: string;
  /** スポンサー広告なら true → 景表法対応で［PR］表記を付ける。 */
  sponsored?: boolean;
  /** 対象条件。true を返した最初のスロットを採用。未指定なら常にマッチ。 */
  match?: (t: CtaTarget) => boolean;
};

/**
 * 広告スロット定義。**上から順に評価し、最初にマッチしたものを採用**。
 * 最後の要素は match 無し＝デフォルト（フォールバック）にすること。
 *
 * ▼ スポンサー枠の足し方（例。コメントを外して編集するだけ）:
 *   {
 *     id: "akita-hc",
 *     label: "▼ 秋田の対策グッズ（○○ホームセンター）",
 *     path: "/ad/akita-hc",          // /ad/* を next.config でスポンサーURLへ転送
 *     sponsored: true,               // → 「［PR］」自動付与
 *     match: (t) => t.kind === "muni" && t.pref === "秋田県",
 *   },
 *   {
 *     id: "trail",
 *     label: "▼ 登山向けクマ対策グッズ",
 *     path: "/gear?scene=trail",
 *     match: (t) => t.kind === "spot",   // 観光地(登山口など)の通知向け
 *   },
 */
const AD_SLOTS: AdSlot[] = [
  // デフォルト（全配信）＝現行どおり自社の対策グッズへ送客。
  { id: "default", label: "▼ 対策グッズ", path: "/gear" },
];

/**
 * 通知本文の末尾に足す CTA 断片。無効時は空文字。
 * 既存の「▼ 地図で見る」と同じ体裁で、短いラベルの次行に短縮 URL を置く（簡潔・煽らない）。
 * target を渡すと配信先に応じた広告を選ぶ。渡さない/未マッチならデフォルト。
 */
export function lineProductCtaSuffix(base: string, target?: CtaTarget): string {
  if (!isLineProductCtaEnabled()) return "";
  const slot =
    AD_SLOTS.find((s) => !s.match || (target !== undefined && s.match(target))) ??
    AD_SLOTS[AD_SLOTS.length - 1];
  const label = slot.sponsored ? `［PR］${slot.label}` : slot.label;
  return `\n\n${label}\n${base}${slot.path}`;
}
