import { NextResponse } from "next/server";
import {
  findMunicipalityByPrefCode,
  type MunicipalEntry,
} from "@/data/municipalities";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const SUMMARY_CACHE_SECONDS = 21600;

export type SummaryResponse = {
  prefCode: string;
  prefName: string;
  summary: string;
  sourceUrls: string[];
  fetchedAt: string;
  mode: "llm" | "demo";
  note?: string;
};

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchMunicipalPage(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp; curation bot)",
        "Accept-Language": "ja",
        Accept: "text/html,application/xhtml+xml",
      },
      next: { revalidate: SUMMARY_CACHE_SECONDS },
    });
    if (!r.ok) return null;
    const html = await r.text();
    const text = stripHtml(html);
    return text.slice(0, 8000);
  } catch {
    return null;
  }
}

function buildDemoSummary(entry: MunicipalEntry): string {
  const species = entry.bearSpecies.includes("higuma") ? "ヒグマ" : "ツキノワグマ";
  const season = ["春先", "秋口"];
  const s = season[new Date().getMonth() % 2];
  return `${entry.prefNameJa}では${species}の出没情報を ${entry.links[0]?.label ?? "公式サイト"} で随時更新しています。${s}は特に活動が活発な時期にあたるため、早朝・夕方の単独行動を控え、熊鈴を携帯するなどの基本対策を徹底してください。詳細な目撃情報や注意喚起は下記の公式リソースをご確認ください。`;
}

async function callGemini(
  apiKey: string,
  prompt: string,
): Promise<string | null> {
  try {
    const url = `${GEMINI_ENDPOINT}?key=${apiKey}`;
    const body = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1024,
        thinkingConfig: { thinkingBudget: 0 },
      },
    };
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) {
      console.error("[summary] gemini failed", r.status, await r.text());
      return null;
    }
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    return text || null;
  } catch (e) {
    console.error("[summary] gemini error", e);
    return null;
  }
}

function buildPrompt(entry: MunicipalEntry, pageText: string): string {
  const species = entry.bearSpecies.includes("higuma") ? "ヒグマ" : "ツキノワグマ";
  return `あなたは地域安全のコミュニケーション専門家です。
以下の自治体公式サイトの原文を、観光客・登山者・住民向けに要約してください。

制約:
- 3 文以内、日本語
- 過度に恐怖を煽らず冷静で実用的な表現
- 具体的な対策を 1 つ含めること
- 原文にない事実は加えないこと
- 最後に "（${entry.prefNameJa}公式サイトより KumaWatch が要約）" を付けること

対象地域: ${entry.prefNameJa}
対象クマ種: ${species}

原文（抜粋）:
${pageText}

要約:`;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const prefCode = searchParams.get("prefCode");

  if (!prefCode) {
    return NextResponse.json({ error: "prefCode が必要です" }, { status: 400 });
  }

  const entry = findMunicipalityByPrefCode(prefCode);
  if (!entry) {
    return NextResponse.json(
      { error: "対象の自治体マスタが未登録です" },
      { status: 404 },
    );
  }

  const sourceUrls = entry.links
    .filter((l) => l.kind === "official_info" || l.kind === "official_map")
    .map((l) => l.url);

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const res: SummaryResponse = {
      prefCode,
      prefName: entry.prefNameJa,
      summary: buildDemoSummary(entry),
      sourceUrls,
      fetchedAt: new Date().toISOString(),
      mode: "demo",
      note: "GEMINI_API_KEY 未設定のためデモ要約を返しています",
    };
    return NextResponse.json(res, {
      headers: { "Cache-Control": `public, max-age=300` },
    });
  }

  const primaryUrl = sourceUrls[0];
  const pageText = primaryUrl ? await fetchMunicipalPage(primaryUrl) : null;

  if (!pageText) {
    const res: SummaryResponse = {
      prefCode,
      prefName: entry.prefNameJa,
      summary: buildDemoSummary(entry),
      sourceUrls,
      fetchedAt: new Date().toISOString(),
      mode: "demo",
      note: "公式ページを取得できなかったためデモ要約を返しています",
    };
    return NextResponse.json(res, {
      headers: { "Cache-Control": `public, max-age=900` },
    });
  }

  const prompt = buildPrompt(entry, pageText);
  const llmText = await callGemini(apiKey, prompt);

  const summary = llmText ?? buildDemoSummary(entry);
  const res: SummaryResponse = {
    prefCode,
    prefName: entry.prefNameJa,
    summary,
    sourceUrls,
    fetchedAt: new Date().toISOString(),
    mode: llmText ? "llm" : "demo",
    note: llmText ? undefined : "LLM 応答取得に失敗したためデモ要約を返しています",
  };

  return NextResponse.json(res, {
    headers: {
      "Cache-Control": `public, max-age=${SUMMARY_CACHE_SECONDS}, s-maxage=${SUMMARY_CACHE_SECONDS}`,
    },
  });
}
