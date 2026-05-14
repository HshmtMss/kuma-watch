/**
 * 任意の Web ページ URL から、クマ対策製品の構造化情報を Gemini で抽出するスクリプト。
 *
 * 使い方:
 *   npm run extract:product <url>
 *
 * 仕様:
 * - 結果は stdout に JSON。進捗ログは stderr へ。
 * - クマ対策に該当しないと判定された場合 (is_bear_related=false) は
 *   exit code 2 で終了し、理由を stderr に出す。
 *
 * 環境変数:
 *   GEMINI_API_KEY  (.env.local に配置)
 *
 * 抽出ロジック本体は scripts/lib/extract.ts に集約。
 */

import { extractFromUrl } from "./lib/extract";

async function main() {
  const url = process.argv[2];
  if (!url || !/^https?:\/\//.test(url)) {
    console.error("Usage: npm run extract:product <url>");
    process.exit(1);
  }
  if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: 環境変数 GEMINI_API_KEY が未設定。.env.local を確認。");
    process.exit(1);
  }

  console.error(`[fetch] ${url}`);
  const result = await extractFromUrl(url);
  console.error(
    `[fetch] HTML=${result._fetchSize}B → 整形後=${result._trimmedSize}B (${Math.round(
      (result._trimmedSize / result._fetchSize) * 100,
    )}%)`,
  );
  console.error(
    `[gemini] 完了 (${result._elapsedMs}ms, confidence=${result.confidence})`,
  );

  // 内部メタは出力に含めない（_ で始まるフィールドを除く）
  const cleanOutput = Object.fromEntries(
    Object.entries(result).filter(([k]) => !k.startsWith("_")),
  );
  console.log(JSON.stringify({ url, ...cleanOutput }, null, 2));

  if (!result.is_bear_related) {
    console.error(
      `[reject] ${result.rejection_reason || "クマ対策製品ではないと判定"}`,
    );
    process.exit(2);
  }
}

main().catch((e: unknown) => {
  console.error("Error:", e);
  process.exit(1);
});
