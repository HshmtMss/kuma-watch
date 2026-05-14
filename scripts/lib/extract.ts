/**
 * クマ対策製品データを Web ページから抽出する共通ライブラリ。
 * scripts/extract-product.ts (CLI 単発) と scripts/discover-products.ts (バッチ)
 * から共用される。
 */

import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";
import { parse } from "node-html-parser";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const CATEGORY_ENUM = [
  "撃退忌避",
  "防護柵",
  "住宅誘引物",
  "個人装備",
  "監視検知",
  "捕獲駆除",
  "情報教育",
] as const;

export const ProductSchema = z.object({
  is_bear_related: z
    .boolean()
    .describe(
      "クマ対策製品・サービスとして該当するか。クマ以外の動物専用、対策に無関係、" +
        "「クマ」が動物以外の意味（人名・キャラクター等）の場合は false。",
    ),
  confidence: z
    .enum(["high", "medium", "low"])
    .describe("抽出結果の確信度。情報が不足している場合は low。"),
  rejection_reason: z
    .string()
    .describe(
      "is_bear_related が false の場合の理由を 1 文で。true の場合は空文字。",
    ),
  name: z.string().describe("製品名・サービス名"),
  vendor: z
    .string()
    .describe(
      "メーカー（ブランド）/ 販売元（輸入元）の形式。海外ブランドの場合は「Counter Assault (USA) / モチヅキ」のように原産国を併記。日本国内ブランドはメーカー名のみで可。",
    ),
  category: z
    .enum(CATEGORY_ENUM)
    .describe(
      "最適なカテゴリを 1 つ選ぶ。撃退忌避=スプレー鈴ホーン等 / 防護柵=電気柵キャニスター等 / " +
        "住宅誘引物=センサーライトゴミ管理 / 個人装備=ヘルメットGPS応急処置 / " +
        "監視検知=AIカメラトレイルカメラ撃退装置 / 捕獲駆除=箱罠駆除サービス麻酔銃 / " +
        "情報教育=財団研究機関専門家行政資料",
    ),
  subcategory: z
    .string()
    .describe(
      "サブカテゴリ。既存例: スプレー / クマ鈴 / ホイッスル / ホーン / 忌避剤 / 練習用品 / " +
        "電気柵 / ベアキャニスター / フードバッグ / 防臭袋 / センサーライト / 密閉ストッカー / " +
        "ヘルメット / GPS発信機 / 応急処置 / 自治体AI検知 / トレイルカメラ / 撃退装置 / " +
        "箱罠 / 駆除サービス / 麻酔銃 / 財団・NPO / 研究ネットワーク / 行政機関",
    ),
  price: z
    .string()
    .describe(
      "価格表示。本文に明記されているもののみ。例「¥12,100」「2万円台〜」「要問合せ」。" +
        "なければ空文字。憶測しない。",
    ),
  purpose: z
    .string()
    .describe("用途を 1 文で（例: 「クマ遭遇時の至近距離防御（最終手段）」）"),
  features: z
    .string()
    .describe(
      "仕様・特徴。複数項目は全角読点「、」で区切る。認証（EPA、JIS、ISO 等）、" +
        "採用実績（自治体・財団・大学等）、定量スペック（噴射距離・dB・容量等）を優先。" +
        "例: 「12m長距離噴射、7〜8秒噴射、カプサイシン2%、EPA登録、知床財団・道警採用」",
    ),
  target_use: z
    .string()
    .describe(
      "想定シーン・対象。複数項目は全角読点「、」で区切る。" +
        "例: 「登山、キャンプ、釣り、狩猟」「農家・自治体（北海道）」",
    ),
  caveats: z
    .string()
    .describe(
      "注意点。複数項目は全角読点「、」または句点「。」で区切る。" +
        "航空機持込不可、法的制約、設置工事必要、有効期限、誤噴射防止 等。" +
        "本文に明示があれば必ず拾う。なければ空文字。",
    ),
  audience: z
    .enum(["個人", "自治体", "個人,自治体"])
    .describe(
      "想定購入者層。個人＝登山者・住民・個人農家、自治体＝行政・事業者・猟友会。両方該当なら「個人,自治体」。",
    ),
});

export type ExtractedProduct = z.infer<typeof ProductSchema>;

export async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; KumaWatchBot/1.0; +https://kuma-watch.jp)",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "ja,en;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`Fetch failed: HTTP ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export function extractRelevantText(html: string, maxChars = 60000): string {
  const root = parse(html);
  // script/style/noscript/iframe/svg だけ削除。nav/header/footer/aside は
  // 商品仕様や認証情報を載せるサイドパネル等で重要なケースが多いので残す。
  root
    .querySelectorAll("script,style,noscript,iframe,svg")
    .forEach((el) => el.remove());

  const title = root.querySelector("title")?.text?.trim() ?? "";
  const description =
    root.querySelector('meta[name="description"]')?.getAttribute("content") ??
    "";
  const ogTitle =
    root.querySelector('meta[property="og:title"]')?.getAttribute("content") ??
    "";
  const ogDescription =
    root
      .querySelector('meta[property="og:description"]')
      ?.getAttribute("content") ?? "";
  const ogSiteName =
    root
      .querySelector('meta[property="og:site_name"]')
      ?.getAttribute("content") ?? "";
  const body = root.querySelector("body")?.text ?? root.text;

  const compact = `# Title: ${title}
# Site: ${ogSiteName}
# Meta description: ${description}
# OG title: ${ogTitle}
# OG description: ${ogDescription}

# Body:
${body}`
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return compact.slice(0, maxChars);
}

const SYSTEM_PROMPT = `あなたはクマ対策製品データベースの編集者です。Web ページの内容から、クマ対策製品・サービスを構造化抽出します。

判定基準:
- 「クマ対策」として有効な製品・サービスのみ is_bear_related=true。
  例: クマ撃退スプレー、クマ鈴、電気柵（クマ用）、ベアキャニスター、AI 検知システム、林業ヘルメット、知床財団 等
- 以下は false:
  - クマ以外の動物専用の製品（イノシシ用罠、シカ用フェンス等）
  - 「クマ」が動物以外（キャラクター、人名、地名、業者名等）
  - 単なるニュース記事・ブログ記事（製品ページではない）
  - サイトのトップページ全般（具体的な製品が特定できない）

価格・仕様は明記されているもののみ抽出。憶測しない。`;

export async function extractFromUrl(
  url: string,
): Promise<ExtractedProduct & { _fetchSize: number; _trimmedSize: number; _elapsedMs: number }> {
  const html = await fetchHtml(url);
  const text = extractRelevantText(html);
  const t0 = Date.now();
  const result = await generateObject({
    model: google("gemini-2.5-flash"),
    schema: ProductSchema,
    system: SYSTEM_PROMPT,
    prompt: `次の Web ページから商品情報を構造化してください。

URL: ${url}

--- ページ内容（整形済み）---
${text}`,
  });
  return {
    ...result.object,
    _fetchSize: html.length,
    _trimmedSize: text.length,
    _elapsedMs: Date.now() - t0,
  };
}
