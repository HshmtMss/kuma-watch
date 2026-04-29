import { NextResponse } from "next/server";

const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export type AdvicePayload = {
  level: string;
  score?: number;
  hour: number;
  month: number;
  lat?: number;
  lon?: number;
  place?: string;
  prefecture?: string;
  muniName?: string;
  bearSpecies?: string;
  habitatInside?: boolean;
  weather?: { tempC?: number; precipMm?: number; label?: string } | null;
  nearbySightings?: number;
  elevationM?: number | null;
  isForest?: boolean | null;
  noticeText?: string;
};

export type AdviceResponse = {
  items: Array<{ emoji: string; title: string; body: string }>;
  mode: "llm" | "demo";
  fetchedAt: string;
};

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    items: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          emoji: { type: "STRING" },
          title: { type: "STRING" },
          body: { type: "STRING" },
        },
        required: ["emoji", "title", "body"],
      },
    },
  },
  required: ["items"],
};

const SYSTEM_INSTRUCTION = `あなたは野外活動の安全コミュニケーション専門家です。
クマ出没警戒レベルマップから渡される地点情報をもとに、利用者向けの行動メモを 3〜5 件、JSON で返してください。
安全 (level=safe) のときは「対策」というよりも「この地域の状況メモ」として 1 件だけ簡潔に。

ルール:
- 怖がらせず、冷静で実用的に。
- 具体行動を含めること (「熊鈴を 30 分ごとに鳴らす」「ゴミは密閉袋へ」等)。
- emoji は 1 つの絵文字 (🔔🧴🕐🍂🌧️📍🏔️🍱⚠️🌱❄️🌿 等から状況に合うもの)。
- title は 20 文字以内、body は 50 文字以内。
- 警戒レベル・季節・時間帯・天候・周辺目撃・標高・地形・自治体お知らせ を踏まえる。
- 安全 (level=safe) のときは 1 件だけで十分。`;

function callGemini(
  apiKey: string,
  userText: string,
): Promise<{
  items?: { emoji: string; title: string; body: string }[];
} | null> {
  const url = `${GEMINI_ENDPOINT}?key=${apiKey}`;
  const body = {
    systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
    contents: [{ role: "user", parts: [{ text: userText }] }],
    generationConfig: {
      maxOutputTokens: 1024,
      thinkingConfig: { thinkingLevel: "low" },
      responseMimeType: "application/json",
      responseSchema: RESPONSE_SCHEMA,
    },
  };
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then(async (r) => {
      if (!r.ok) {
        console.error("[advice] gemini failed", r.status, await r.text());
        return null;
      }
      const data = (await r.json()) as {
        candidates?: { content?: { parts?: { text?: string }[] } }[];
      };
      const text =
        data.candidates?.[0]?.content?.parts
          ?.map((p) => p.text ?? "")
          .join("") ?? "";
      try {
        return JSON.parse(text);
      } catch {
        return null;
      }
    })
    .catch((e) => {
      console.error("[advice] gemini error", e);
      return null;
    });
}

function buildPrompt(p: AdvicePayload): string {
  const lines: string[] = [];
  lines.push(`■ 場所: ${p.place ?? "不明"} ${p.muniName ? `(${p.muniName})` : ""}`);
  lines.push(`■ 警戒レベル: ${p.level}${p.score != null ? ` (score=${p.score})` : ""}`);
  lines.push(`■ 時刻: ${p.hour}時 / ${p.month}月`);
  if (p.bearSpecies) lines.push(`■ 対象: ${p.bearSpecies}`);
  lines.push(`■ 生息域内: ${p.habitatInside ? "yes" : "no"}`);
  if (p.weather)
    lines.push(
      `■ 気象: ${p.weather.label ?? ""} / ${p.weather.tempC ?? "?"}°C / 降水 ${p.weather.precipMm ?? 0}mm`,
    );
  if (p.nearbySightings !== undefined)
    lines.push(`■ 周辺 10km・直近期間内の目撃: ${p.nearbySightings} 件`);
  if (p.elevationM != null) lines.push(`■ 標高: ${Math.round(p.elevationM)}m`);
  if (p.isForest != null) lines.push(`■ 森林内: ${p.isForest ? "yes" : "no"}`);
  if (p.noticeText)
    lines.push(`■ 自治体お知らせ抜粋:\n${p.noticeText.slice(0, 800)}`);
  return lines.join("\n");
}

export async function POST(req: Request) {
  let raw: AdvicePayload;
  try {
    raw = (await req.json()) as AdvicePayload;
  } catch {
    return NextResponse.json({ error: "JSON が不正です" }, { status: 400 });
  }
  if (!raw.level || typeof raw.hour !== "number" || typeof raw.month !== "number") {
    return NextResponse.json(
      { error: "level/hour/month は必須です" },
      { status: 400 },
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      items: [],
      mode: "demo",
      fetchedAt: new Date().toISOString(),
    } satisfies AdviceResponse);
  }

  const prompt = buildPrompt(raw);
  const llm = await callGemini(apiKey, prompt);

  if (!llm?.items || llm.items.length === 0) {
    return NextResponse.json({
      items: [],
      mode: "demo",
      fetchedAt: new Date().toISOString(),
    } satisfies AdviceResponse);
  }

  // 衛生チェック: 文字長と件数の上限
  const items = llm.items.slice(0, 5).map((it) => ({
    emoji: String(it.emoji ?? "💡").slice(0, 4),
    title: String(it.title ?? "").slice(0, 30),
    body: String(it.body ?? "").slice(0, 80),
  }));

  return NextResponse.json(
    {
      items,
      mode: "llm",
      fetchedAt: new Date().toISOString(),
    } satisfies AdviceResponse,
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=900",
      },
    },
  );
}
