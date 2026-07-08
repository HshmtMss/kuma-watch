import { makeArticleOg, OG_SIZE } from "@/lib/article-og";

// 自動生成 (scripts/gen-article-og.mjs)。記事の OG 画像。描画は article-og に集約。
export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KumaWatch｜クマ解説記事";

export default function Image() {
  return makeArticleOg("research-digest-007");
}
