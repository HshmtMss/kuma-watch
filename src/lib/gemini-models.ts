// Gemini のモデル名はこのファイルだけで管理する。
//
// 以前は API ルートと sources/* の計 8 箇所にモデル名がベタ書きされており、
// 世代交代のたびに全部を追いかける必要があった。用途ごとに 1 つの定数へ集約し、
// 差し替えはここ 1 行で済むようにする。
//
// 用途の分け方:
//   INTERACTIVE — ユーザーのリクエストで即時に走るもの (ask / summary / advice)。
//                 応答速度と単価を優先。品質が足りなければ REPORT と同じ上位モデルへ。
//   BULK        — 取り込みパイプラインの抽出・分類 (news / gov / llm-html / pdf / extract)。
//                 件数が桁違いに多いので単価が最優先。
//   REPORT      — 研究レポート生成。長文を筋道立てて書く必要があるので上位モデル。
//   IMAGE       — 記事ヒーロー画像の生成。
//
// 価格 ($/1M tokens, 2026-09 時点):
//   gemini-3.1-flash-lite  in 0.25 / out 1.50   ← 最安。旧 2.5-flash (0.30/2.50) より安い
//   gemini-3.8-flash       in 0.75 / out 3.75   ← 2026-12-31 までの割引価格。
//                                                 2027-01-01 から 1.50/7.50 に上がる
//   gemini-3.1-flash-lite-image  $0.0336/枚
//
// 旧構成からの移行 (2026-09-08):
//   gemini-2.5-flash / gemini-2.5-pro は Deprecated、
//   imagen-4.0-generate-001 と imagen-3.0-generate-002 は 2026-08-17 に停止済み
//   (models API のレスポンスにも既に存在しない)。
//   gemini-3-flash-preview は preview のまま GA が 4 世代進んだため GA 系へ寄せた。

/** ユーザー操作に同期して走る生成 (ask / summary / advice)。 */
export const GEMINI_INTERACTIVE_MODEL =
  process.env.GEMINI_INTERACTIVE_MODEL ?? "gemini-3.1-flash-lite";

/** 取り込みパイプラインの抽出・分類。件数が多いので単価優先。 */
export const GEMINI_BULK_MODEL =
  process.env.GEMINI_BULK_MODEL ?? "gemini-3.1-flash-lite";

/** 研究レポートなど長文生成。 */
export const GEMINI_REPORT_MODEL =
  process.env.GEMINI_REPORT_MODEL ?? "gemini-3.8-flash";

/** 記事ヒーロー画像の生成。 */
export const GEMINI_IMAGE_MODEL =
  process.env.GEMINI_IMAGE_MODEL ?? "gemini-3.1-flash-lite-image";

/** generateContent のエンドポイント URL を組み立てる。 */
export function geminiEndpoint(model: string): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}
