import { NextResponse } from "next/server";
import { findNearbySightings, type NearbySighting } from "@/lib/nearby-sightings";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

type AskPayload = {
  question: string;
  context?: {
    lat?: number;
    lon?: number;
    place?: string;
    prefecture?: string;
    score?: number;
    level?: string;
    hour?: number;
    month?: number;
    weather?: { tempC?: number; precipMm?: number; label?: string };
    bearSpecies?: string;
    habitatInside?: boolean;
  };
};

async function callGemini(
  apiKey: string,
  systemInstruction: string,
  userText: string,
): Promise<string | null> {
  try {
    const url = `${GEMINI_ENDPOINT}?key=${apiKey}`;
    const body = {
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
      contents: [{ role: "user", parts: [{ text: userText }] }],
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
    if (!r.ok) return null;
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
  } catch {
    return null;
  }
}

function buildContextText(ctx: AskPayload["context"]): string {
  if (!ctx) return "（位置情報なし）";
  const parts: string[] = [];
  if (ctx.place) parts.push(`場所: ${ctx.place}`);
  if (ctx.prefecture) parts.push(`都道府県: ${ctx.prefecture}`);
  if (ctx.bearSpecies) parts.push(`対象クマ: ${ctx.bearSpecies}`);
  if (ctx.habitatInside !== undefined)
    parts.push(`生息域: ${ctx.habitatInside ? "内" : "外"}`);
  if (ctx.level)
    parts.push(
      `現在の危険度: ${ctx.level}${ctx.score != null ? `（${ctx.score}/100）` : ""}`,
    );
  if (ctx.hour != null) parts.push(`時刻: ${ctx.hour}時`);
  if (ctx.month != null) parts.push(`月: ${ctx.month}月`);
  if (ctx.weather) {
    const w = ctx.weather;
    parts.push(
      `気象: ${w.label ?? ""} ${w.tempC != null ? `${w.tempC.toFixed(1)}°C` : ""} ${w.precipMm != null ? `降水 ${w.precipMm}mm` : ""}`.trim(),
    );
  }
  return parts.join(" / ");
}

function formatSightings(records: NearbySighting[]): string {
  if (records.length === 0) {
    return "【周辺5km以内・直近12ヶ月の公式出没記録】\n該当する記録は公式データに存在しません。";
  }
  const lines = records.map((r) => {
    const loc = [r.cityName, r.sectionName].filter(Boolean).join(" ");
    const comment = r.comment ? ` / ${r.comment.slice(0, 80)}` : "";
    return `- ${r.date} ${loc || "(地名不明)"} / ${r.distanceKm.toFixed(1)}km / ソース:${r.source}${comment}`;
  });
  return `【周辺5km以内・直近12ヶ月の公式出没記録 ${records.length}件】\n${lines.join("\n")}`;
}

function demoAnswer(question: string, ctx?: AskPayload["context"]): string {
  const level = ctx?.level ?? "評価不明";
  const place = ctx?.place ?? "この地域";
  return `（demo 応答）「${question}」について、${place}の現在の危険度は「${level}」です。LLM キーが未設定のため詳細回答はできません。基本対策として、熊鈴の携帯・早朝夕方の単独行動回避・食品の放置禁止を守ってください。詳しい情報は公式リソースからご確認ください。`;
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON が不正です" }, { status: 400 });
  }

  const body = raw as AskPayload;
  const q = typeof body?.question === "string" ? body.question.trim().slice(0, 300) : "";
  if (!q) return NextResponse.json({ error: "質問を入力してください" }, { status: 400 });

  const lat = body.context?.lat;
  const lon = body.context?.lon;
  const nearby: NearbySighting[] =
    typeof lat === "number" && typeof lon === "number" && Number.isFinite(lat) && Number.isFinite(lon)
      ? await findNearbySightings(lat, lon, { radiusKm: 5, withinDays: 365, limit: 15 }).catch(() => [])
      : [];

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      answer: demoAnswer(q, body.context),
      mode: "demo" as const,
      nearbyCount: nearby.length,
      note: "GEMINI_API_KEY 未設定のためデモ応答を返しています",
    });
  }

  const systemInstruction = [
    "あなたは KumaWatch のクマ出没対策ガイドです。",
    "日本語で、2〜4 文以内の簡潔な回答を返します。",
    "過度に恐怖を煽らず、実用的な対策を 1〜2 つ含めます。",
    "",
    "【重要な事実参照ルール】",
    "1. 「周辺の公式出没記録」セクションに提示された記録のみを『過去の実例』として参照してください。",
    "2. リストにない出没情報・日付・場所は存在しないものとして扱い、推測しないこと。",
    "3. 記録が0件の場合は「この周辺5km以内・直近12ヶ月の公式記録はありません」と明示すること。",
    "4. ユーザーの質問が『最近の目撃』『具体的な事例』を問う場合、リストの日付・市町村名を引用してください。",
    "5. スコア・気象等のコンテキストは現状把握のためのもので、記録ではありません。",
  ].join("\n");

  const nearbyBlock = formatSightings(nearby);
  const userText = `コンテキスト: ${buildContextText(body.context)}\n\n${nearbyBlock}\n\n質問: ${q}`;
  const llm = await callGemini(apiKey, systemInstruction, userText);
  const answer = llm ?? demoAnswer(q, body.context);
  return NextResponse.json({
    answer,
    mode: llm ? ("llm" as const) : ("demo" as const),
    nearbyCount: nearby.length,
    note: llm ? undefined : "LLM 応答に失敗したためデモ応答を返しています",
  });
}
