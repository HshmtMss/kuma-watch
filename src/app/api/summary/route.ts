import { NextResponse } from "next/server";
import {
  findMunicipalityByPrefCode,
  type MunicipalEntry,
} from "@/data/municipalities";
import {
  buildAggregateContext,
  formatAggregateForPrompt,
  type AggregateContext,
} from "@/lib/aggregate-context";
import { findNearbySightings, type NearbySighting } from "@/lib/nearby-sightings";

const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const SUMMARY_CACHE_SECONDS = 21600;

export type Notice = {
  date: string; // YYYY-MM-DD or YYYY-MM もしくは原文の日付表記
  headline: string;
};

export type SummaryResponse = {
  prefCode: string;
  prefName: string;
  summary: string;
  notices: Notice[];
  sourceUrls: string[];
  fetchedAt: string;
  mode: "llm" | "demo";
  nearbyCount: number;
  nearbyLatestDate?: string;
  aggregate?: {
    hasAggregate: boolean;
    prefAnnualLatestSighting?: number;
    prefAnnualLatestFiscalYear?: number;
    muniBand?: string;
    muniTier?: string;
  };
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

function buildDemoSummary(
  entry: MunicipalEntry | undefined,
  nearby: NearbySighting[],
  aggregate: AggregateContext | null,
  prefName: string,
): string {
  const species = entry?.bearSpecies.includes("higuma") ? "ヒグマ" : "ツキノワグマ";
  const base = `${prefName}では${species}の出没情報を ${entry?.links[0]?.label ?? "公式サイト"} で随時更新しています。`;

  // 集計データがあれば優先
  if (aggregate && aggregate.prefAnnualRecent.length > 0) {
    const latest = aggregate.prefAnnualRecent[0];
    const muniPart = aggregate.muniBand
      ? `（${aggregate.muniName ?? "市町村単位"}: ${aggregate.muniBand}）`
      : "";
    const nearbyPart = nearby.length > 0
      ? `周辺 5km 以内の直近記録は ${nearby.length} 件、最新 ${nearby[0].date}。`
      : "点座標付き記録は周辺 5km 以内で確認されていません。";
    return `${base}令和${latest.fiscalYear - 2018}年度は県全体で ${latest.sighting.toLocaleString()} 件${muniPart}。${nearbyPart}早朝・夕方の単独行動を控え、熊鈴を携帯してください。`;
  }

  if (nearby.length === 0) {
    return `${base}この周辺 5km 以内の公式出没記録は直近 12 ヶ月で確認されていません。ただし例年の活動期（春先と秋口）は注意が必要です。詳細は下記の公式リソースをご確認ください。`;
  }
  const latest = nearby[0];
  const loc = [latest.cityName, latest.sectionName].filter(Boolean).join(" ") || "この周辺";
  return `${base}この周辺 5km 以内・直近 12 ヶ月の公式出没記録は ${nearby.length} 件。最新は ${latest.date} の ${loc} です。早朝・夕方の単独行動を控え、熊鈴を携帯してください。`;
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
        maxOutputTokens: 1024,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            notices: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  date: { type: "string" },
                  headline: { type: "string" },
                },
                required: ["date", "headline"],
              },
            },
            summary: { type: "string" },
          },
          required: ["notices", "summary"],
        },
        thinkingConfig: { thinkingLevel: "low" },
      },
    };
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) {
      // レスポンス本文に API key fragment やプロンプトが含まれ得るので status のみ。
      console.error("[summary] gemini failed", r.status);
      return null;
    }
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    return text || null;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "unknown";
    console.error("[summary] gemini error", msg);
    return null;
  }
}

function formatSightings(nearby: NearbySighting[]): string {
  if (nearby.length === 0) {
    return "【この周辺 5km 以内・直近 12 ヶ月の公式出没記録】\n該当する記録は公式データに存在しません。";
  }
  const lines = nearby.slice(0, 10).map((r) => {
    const loc = [r.cityName, r.sectionName].filter(Boolean).join(" ");
    return `- ${r.date} ${loc || "(地名不明)"} / ${r.distanceKm.toFixed(1)}km / ソース:${r.source}`;
  });
  return `【この周辺 5km 以内・直近 12 ヶ月の公式出没記録 ${nearby.length} 件（最新 10 件）】\n${lines.join("\n")}`;
}

function buildPromptFromAggregate(
  prefName: string,
  pageText: string,
  nearby: NearbySighting[],
  aggregate: AggregateContext | null,
): string {
  const sightingsBlock = formatSightings(nearby);
  const aggregateBlock = aggregate ? formatAggregateForPrompt(aggregate) : "";
  return `あなたは地域安全のコミュニケーション専門家です。
以下の「公式サイト原文」「周辺の公式出没記録」「公式集計」を踏まえて、
観光客・登山者・住民向けに要約してください。

【重要な事実参照ルール】
1. 出没件数・日付・場所は、提示された公式出没記録／公式集計のみ引用すること。
2. リストにない値は書かない。推測禁止。
3. 点記録が0件でも集計があれば積極的に引用する。
4. 公式記録・集計とも0件の場合のみ「公式公開データは確認できません」と明示する。

制約:
- summary: 3 文以内、日本語、冷静で実用的、対策を 1 つ含める。最後に "（${prefName}公式資料より KumaWatch が要約）" を付けること。
- notices: 公式サイト原文から**日付が明記されているお知らせのみ**抽出し、直近の 3 件を配列で返す。
  - date は元の表記から YYYY-MM-DD（不明箇所は YYYY-MM または原文表記）に整形。
  - headline は 40 文字以内で 1 行要約。
  - 日付付きのお知らせが無ければ空配列を返すこと（推測で埋めない）。

対象地域: ${prefName}

${sightingsBlock}

${aggregateBlock}

公式サイト原文（抜粋）:
${pageText}

要約:`;
}

function buildPrompt(
  entry: MunicipalEntry,
  pageText: string,
  nearby: NearbySighting[],
  aggregate: AggregateContext | null,
): string {
  const species = entry.bearSpecies.includes("higuma") ? "ヒグマ" : "ツキノワグマ";
  const sightingsBlock = formatSightings(nearby);
  const aggregateBlock = aggregate ? formatAggregateForPrompt(aggregate) : "";
  return `あなたは地域安全のコミュニケーション専門家です。
以下の「自治体公式サイトの原文」「周辺の公式出没記録」「公式集計」を踏まえて、
観光客・登山者・住民向けに要約してください。

【重要な事実参照ルール】
1. 出没の具体件数・日付・場所を述べるときは、提示された公式出没記録／公式集計のみを引用すること。
2. 記録にも集計にもない日付・場所・件数は絶対に書かないこと。推測禁止。
3. 点記録が0件でも、公式集計（県・市町村単位の件数）があれば積極的に引用する。
4. 公式記録・集計とも0件の場合のみ「公式公開データは確認できません」と明示する。

制約:
- summary: 3 文以内、日本語、過度に恐怖を煽らず冷静で実用的、具体的な対策を 1 つ含める。最後に "（${entry.prefNameJa}公式サイトより KumaWatch が要約）" を付けること。
- notices: 公式サイト原文から**日付が明記されているお知らせのみ**抽出し、直近の 3 件を配列で返す。
  - date は元の表記から YYYY-MM-DD（不明箇所は YYYY-MM または原文表記）に整形。
  - headline は 40 文字以内で 1 行要約。
  - 日付付きのお知らせが無ければ空配列を返すこと（推測で埋めない）。

対象地域: ${entry.prefNameJa}
対象クマ種: ${species}

${sightingsBlock}

${aggregateBlock}

自治体公式サイト原文（抜粋）:
${pageText}

要約:`;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const prefCode = searchParams.get("prefCode");
  const latStr = searchParams.get("lat");
  const lonStr = searchParams.get("lon");
  const muniName = searchParams.get("muniName") ?? undefined;

  if (!prefCode) {
    return NextResponse.json({ error: "prefCode が必要です" }, { status: 400 });
  }

  const entry = findMunicipalityByPrefCode(prefCode);
  const aggregate = buildAggregateContext(prefCode, muniName);

  // 自治体マスタが未登録でも、集計データがあれば応答を返す
  if (!entry && !aggregate) {
    return NextResponse.json(
      { error: "対象の自治体マスタが未登録です" },
      { status: 404 },
    );
  }

  const sourceUrls = entry
    ? entry.links
        .filter((l) => l.kind === "official_info" || l.kind === "official_map")
        .map((l) => l.url)
    : (aggregate?.sources.map((s) => s.url) ?? []);

  const lat = latStr ? Number(latStr) : NaN;
  const lon = lonStr ? Number(lonStr) : NaN;
  const nearby: NearbySighting[] =
    Number.isFinite(lat) && Number.isFinite(lon)
      ? await findNearbySightings(lat, lon, { radiusKm: 5, withinDays: 365, limit: 30 }).catch(() => [])
      : [];

  const aggregateMeta = aggregate
    ? {
        hasAggregate: true,
        prefAnnualLatestSighting: aggregate.prefAnnualRecent[0]?.sighting,
        prefAnnualLatestFiscalYear: aggregate.prefAnnualRecent[0]?.fiscalYear,
        muniBand: aggregate.muniBand,
        muniTier: aggregate.muniTier,
      }
    : undefined;
  const prefName = entry?.prefNameJa ?? aggregate?.prefName ?? "";

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const res: SummaryResponse = {
      prefCode,
      prefName,
      summary: buildDemoSummary(entry, nearby, aggregate, prefName),
      notices: [],
      sourceUrls,
      fetchedAt: new Date().toISOString(),
      mode: "demo",
      nearbyCount: nearby.length,
      nearbyLatestDate: nearby[0]?.date,
      aggregate: aggregateMeta,
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
      prefName,
      summary: buildDemoSummary(entry, nearby, aggregate, prefName),
      notices: [],
      sourceUrls,
      fetchedAt: new Date().toISOString(),
      mode: "demo",
      nearbyCount: nearby.length,
      nearbyLatestDate: nearby[0]?.date,
      aggregate: aggregateMeta,
      note: "公式ページを取得できなかったためデモ要約を返しています",
    };
    return NextResponse.json(res, {
      headers: { "Cache-Control": `public, max-age=900` },
    });
  }

  const prompt = entry
    ? buildPrompt(entry, pageText, nearby, aggregate)
    : buildPromptFromAggregate(prefName, pageText, nearby, aggregate);
  const llmText = await callGemini(apiKey, prompt);

  const parsed = parseSummaryJson(llmText);
  // LLM が JSON parse に失敗した場合 (llmText が生文字列) はそのまま出すと
  // 中カッコや notices 配列が UI に漏れる。必ず buildDemoSummary にフォールバックする。
  const summary =
    parsed?.summary?.trim() || buildDemoSummary(entry, nearby, aggregate, prefName);
  const notices = parsed?.notices ?? [];
  const res: SummaryResponse = {
    prefCode,
    prefName,
    summary,
    notices,
    sourceUrls,
    fetchedAt: new Date().toISOString(),
    mode: llmText ? "llm" : "demo",
    nearbyCount: nearby.length,
    nearbyLatestDate: nearby[0]?.date,
    aggregate: aggregateMeta,
    note: llmText ? undefined : "LLM 応答取得に失敗したためデモ要約を返しています",
  };

  return NextResponse.json(res, {
    headers: {
      "Cache-Control": `public, max-age=${SUMMARY_CACHE_SECONDS}, s-maxage=${SUMMARY_CACHE_SECONDS}`,
    },
  });
}

function parseSummaryJson(
  text: string | null,
): { summary: string; notices: Notice[] } | null {
  if (!text) return null;
  try {
    const raw = JSON.parse(text) as unknown;
    if (typeof raw !== "object" || raw === null) return null;
    const obj = raw as { summary?: unknown; notices?: unknown };
    const summary = typeof obj.summary === "string" ? obj.summary : "";
    const rawNotices = Array.isArray(obj.notices) ? obj.notices : [];
    const notices: Notice[] = rawNotices
      .map((n) => {
        if (typeof n !== "object" || n === null) return null;
        const r = n as { date?: unknown; headline?: unknown };
        if (typeof r.date !== "string" || typeof r.headline !== "string") return null;
        const headline = r.headline.trim();
        const date = r.date.trim();
        if (!headline || !date) return null;
        return { date, headline } satisfies Notice;
      })
      .filter((n): n is Notice => n !== null)
      .slice(0, 3);
    return { summary, notices };
  } catch {
    return null;
  }
}
