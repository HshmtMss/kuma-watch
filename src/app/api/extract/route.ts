import { NextResponse } from "next/server";
import { findSourceById, type DataSourceEntry } from "@/data/data-sources";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const CACHE_SECONDS = 60 * 60 * 12;
const FETCH_TIMEOUT_MS = 10_000;

export type ExtractedSighting = {
  occurredAt: string | null;
  prefecture: string | null;
  city: string | null;
  section: string | null;
  description: string | null;
  headCount: number | null;
  species: "tsukinowa" | "higuma" | "unknown" | null;
  confidence: "high" | "medium" | "low";
};

export type ExtractResponse = {
  sourceId: string;
  regionLabel: string;
  fetchedAt: string;
  mode: "llm" | "demo";
  sightings: ExtractedSighting[];
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

async function fetchWithTimeout(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp; data curation)",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "ja",
      },
      signal: controller.signal,
      next: { revalidate: CACHE_SECONDS },
    });
    clearTimeout(timer);
    if (!r.ok) return null;
    return await r.text();
  } catch {
    clearTimeout(timer);
    return null;
  }
}

const EXTRACTION_SCHEMA = {
  type: "OBJECT",
  properties: {
    sightings: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          occurredAt: {
            type: "STRING",
            description: "ISO 8601 日付（YYYY-MM-DD または null）",
          },
          prefecture: { type: "STRING", description: "都道府県名（例: 長野県）" },
          city: { type: "STRING", description: "市町村名（例: 松本市）" },
          section: { type: "STRING", description: "詳細地区名（任意）" },
          description: { type: "STRING", description: "状況コメント（任意）" },
          headCount: { type: "INTEGER", description: "頭数（不明時 null）" },
          species: {
            type: "STRING",
            enum: ["tsukinowa", "higuma", "unknown"],
          },
          confidence: {
            type: "STRING",
            enum: ["high", "medium", "low"],
            description:
              "原文での記述明確さ。日付/場所が明示されていれば high、推測なら low",
          },
        },
        required: ["confidence"],
      },
    },
  },
  required: ["sightings"],
};

async function extractWithLlm(
  apiKey: string,
  entry: DataSourceEntry,
  pageTexts: string[],
): Promise<ExtractedSighting[] | null> {
  const prompt = `あなたはクマ出没情報を構造化抽出するエージェントです。
以下は自治体の公開情報の本文です。クマの目撃・出没・遭遇の具体的なイベントを
抽出して JSON 配列として返してください。

制約:
- 統計数字の記述（例: "今年 100 件"）はスキップ。個別イベントのみ
- 日付が不明なイベントはスキップ
- 都道府県名は必ず埋める（文脈から推測）
- 位置が「市町村」レベルまでしか書かれていなければ section は null
- 頭数が不明なら headCount は null
- species: 明示があれば tsukinowa/higuma、なければ unknown
- confidence: 日付と場所が原文で明確なら high、一部推測なら medium、
  大半が推測なら low

対象地域: ${entry.regionLabel}（prefCode=${entry.prefCode}）

本文:
---
${pageTexts.join("\n\n---\n\n").slice(0, 30_000)}
---

出力フォーマット: JSON。sightings[] の配列。`;

  try {
    const r = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
          responseSchema: EXTRACTION_SCHEMA,
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    });
    if (!r.ok) return null;
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return null;
    const parsed = JSON.parse(text) as { sightings?: ExtractedSighting[] };
    return Array.isArray(parsed.sightings) ? parsed.sightings : [];
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sourceId = searchParams.get("sourceId");
  if (!sourceId) {
    return NextResponse.json(
      { error: "sourceId が必要です" },
      { status: 400 },
    );
  }

  const entry = findSourceById(sourceId);
  if (!entry) {
    return NextResponse.json(
      { error: "対象のソースが未登録です" },
      { status: 404 },
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const response: ExtractResponse = {
      sourceId,
      regionLabel: entry.regionLabel,
      fetchedAt: new Date().toISOString(),
      mode: "demo",
      sightings: [],
      note: "GEMINI_API_KEY 未設定のため抽出を実行していません（デモモード）",
    };
    return NextResponse.json(response, {
      headers: { "Cache-Control": "public, max-age=300" },
    });
  }

  const pageTexts: string[] = [];
  for (const u of entry.urls) {
    const html = await fetchWithTimeout(u.url);
    if (html) {
      const text = stripHtml(html);
      if (text.length > 200) {
        pageTexts.push(`[URL: ${u.url}] [role: ${u.role}]\n${text.slice(0, 12_000)}`);
      }
    }
  }

  if (pageTexts.length === 0) {
    const response: ExtractResponse = {
      sourceId,
      regionLabel: entry.regionLabel,
      fetchedAt: new Date().toISOString(),
      mode: "llm",
      sightings: [],
      note: "すべての URL で取得に失敗しました",
    };
    return NextResponse.json(response, {
      headers: { "Cache-Control": "public, max-age=600" },
    });
  }

  const sightings = await extractWithLlm(apiKey, entry, pageTexts);
  const response: ExtractResponse = {
    sourceId,
    regionLabel: entry.regionLabel,
    fetchedAt: new Date().toISOString(),
    mode: "llm",
    sightings: sightings ?? [],
    note: sightings ? undefined : "LLM 抽出に失敗しました",
  };
  return NextResponse.json(response, {
    headers: {
      "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
    },
  });
}
