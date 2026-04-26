import type { DataSourceEntry } from "@/data/data-sources";
import { type UnifiedSighting } from "./types";
import { geocodePlace, jitter } from "./geocode";

const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const MAX_SIGHTINGS_PER_SOURCE = 200;
const SOURCE_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type SightingDraft = {
  date?: string;
  cityName?: string;
  sectionName?: string;
  comment?: string;
  headCount?: number;
};

const sourceCache = new Map<string, { at: number; data: UnifiedSighting[] }>();

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    sightings: {
      type: "array",
      items: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description:
              "出没日 YYYY-MM-DD。年が無い場合は今日より前の最も近い年を採用",
          },
          cityName: {
            type: "string",
            description: "市町村名のみ (例: 軽井沢町・大町市・栄村)",
          },
          sectionName: {
            type: "string",
            description:
              "地区名・町名・施設名のみ。15 文字以内。区分 (林内/里地) ではなく具体的な場所",
          },
          comment: {
            type: "string",
            description: "状況説明 20 文字以内 (例: 道路横断・親子で目撃)",
          },
          headCount: {
            type: "integer",
            description: "頭数。不明なら 1",
          },
        },
        required: ["date", "cityName"],
      },
    },
  },
  required: ["sightings"],
};

async function fetchPdfBase64(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp; data curation)",
        Accept: "application/pdf,*/*",
      },
      next: { revalidate: 21600 },
    });
    if (!r.ok) return null;
    const buf = await r.arrayBuffer();
    return Buffer.from(buf).toString("base64");
  } catch {
    return null;
  }
}

function buildPrompt(source: DataSourceEntry): string {
  const todayIso = new Date().toISOString().split("T")[0];
  return `添付 PDF は ${source.regionLabel} のクマ出没・目撃情報の表 (PDF) です。
今日: ${todayIso}

PDF 内の表から個別の出没・目撃行を 1 件 1 オブジェクトで抽出してください。
PDF は都道府県・年度ごとに列構成が異なるため、列見出しから意味を推定して埋めてください:

- date: 日付列を YYYY-MM-DD に変換
  - 年が省略されている (例: "4月2日") 場合は PDF の表題 (例: "令和7年度" = 2025年度) または今日より前の最も近い年
  - 和暦 (R7.4.19, R8.3.31, H30.5.10) は西暦に変換: R(令和)+2018, H(平成)+1988, S(昭和)+1925
  - 年度 (4月-翌3月) を考慮: "令和7年度" は 2025-04 〜 2026-03
- cityName: 市町村名 (○○市・○○町・○○村)。郡名や住所が混じっていれば市町村部分のみ抽出
  - 例: "西伯郡大山町大内" → cityName="大山町", sectionName="大内"
- sectionName: 大字・地区・施設名 (15 字以内)。不明なら空文字
- comment: 状況・備考列を 20 字以内に要約。空欄ならスキップ
- headCount: 頭数列の数値。不明なら 1
- 「痕跡」(足跡・糞・爪痕等) 行も含める (区分列で識別できるなら comment に付記)
- 表に存在する全行を抽出 (最大 ${MAX_SIGHTINGS_PER_SOURCE} 件)
- 集計表・管理計画・グラフのみのページは出力 0 件
- responseSchema の説明文や本ルール文を、出力の値として絶対にコピーしないこと`;
}

function salvageTruncatedJson(
  text: string,
): { sightings?: SightingDraft[] } | null {
  const start = text.indexOf("[");
  if (start < 0) return null;
  const lastClose = text.lastIndexOf("}");
  if (lastClose < start) return null;
  try {
    return JSON.parse(text.slice(0, lastClose + 1) + "]}") as {
      sightings?: SightingDraft[];
    };
  } catch {
    return null;
  }
}

async function callGeminiExtract(
  apiKey: string,
  source: DataSourceEntry,
  pdfBase64: string,
): Promise<SightingDraft[] | null> {
  try {
    const r = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: buildPrompt(source) },
              { inlineData: { mimeType: "application/pdf", data: pdfBase64 } },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 65536,
          responseMimeType: "application/json",
          responseSchema: RESPONSE_SCHEMA,
          thinkingConfig: { thinkingLevel: "low" },
        },
      }),
    });
    if (!r.ok) {
      console.error(
        `[pdf-llm ${source.id}] gemini ${r.status}`,
        (await r.text()).slice(0, 300),
      );
      return null;
    }
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) return null;
    let parsed: { sightings?: SightingDraft[] } | null = null;
    try {
      parsed = JSON.parse(text) as { sightings?: SightingDraft[] };
    } catch {
      parsed = salvageTruncatedJson(text);
      if (parsed) console.warn(`[pdf-llm ${source.id}] salvaged truncated JSON`);
    }
    return Array.isArray(parsed?.sightings) ? parsed.sightings : null;
  } catch (e) {
    console.error(`[pdf-llm ${source.id}] error`, e);
    return null;
  }
}

export async function fetchPdfLlmSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const cached = sourceCache.get(source.id);
  const now = Date.now();
  if (cached && now - cached.at < SOURCE_CACHE_TTL_MS) return cached.data;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    sourceCache.set(source.id, { at: now, data: [] });
    return [];
  }

  const pdfUrl = source.urls.find((u) => u.role === "pdf")?.url;
  if (!pdfUrl) {
    sourceCache.set(source.id, { at: now, data: [] });
    return [];
  }

  const pdfBase64 = await fetchPdfBase64(pdfUrl);
  if (!pdfBase64) {
    console.log(`[pdf-llm ${source.id}] failed to fetch PDF`);
    sourceCache.set(source.id, { at: now, data: [] });
    return [];
  }

  const drafts = await callGeminiExtract(apiKey, source, pdfBase64);
  if (!drafts || drafts.length === 0) {
    console.log(`[pdf-llm ${source.id}] LLM returned 0 sightings`);
    sourceCache.set(source.id, { at: now, data: [] });
    return [];
  }

  const prefName =
    source.regionLabel.split(/[\s 　]/)[0] ?? source.regionLabel;
  const out: UnifiedSighting[] = [];
  const skips = { date: 0, city: 0, geocode: 0 };
  let sampleSkip: SightingDraft | null = null;
  for (let i = 0; i < drafts.length; i++) {
    const s = drafts[i];
    if (!s.date || !/^\d{4}-\d{2}-\d{2}/.test(s.date)) {
      skips.date++;
      if (!sampleSkip) sampleSkip = s;
      continue;
    }
    if (!s.cityName) {
      skips.city++;
      if (!sampleSkip) sampleSkip = s;
      continue;
    }
    const cityName = s.cityName.trim();
    const g = await geocodePlace(prefName, cityName, s.sectionName);
    if (!g) {
      skips.geocode++;
      if (!sampleSkip) sampleSkip = s;
      continue;
    }
    const id = `${source.id}-${s.date}-${i}`;
    const pos = g.precise ? g : jitter(g.lat, g.lon, id + (s.sectionName ?? ""));
    out.push({
      id,
      source: source.id,
      sourceKind: "llm-html",
      lat: pos.lat,
      lon: pos.lon,
      date: s.date,
      prefectureName: prefName,
      cityName: cityName.slice(0, 40),
      sectionName: (s.sectionName ?? "").slice(0, 40),
      comment: (s.comment ?? "").slice(0, 80),
      headCount:
        Number.isInteger(s.headCount) && s.headCount! > 0 ? s.headCount! : 1,
    });
  }

  const skipDetail =
    out.length === 0 && sampleSkip
      ? ` skips=${JSON.stringify(skips)} firstSkip=${JSON.stringify(sampleSkip).slice(0, 200)}`
      : "";
  console.log(
    `[pdf-llm ${source.id}] extracted ${out.length}/${drafts.length} sightings${skipDetail}`,
  );
  sourceCache.set(source.id, { at: now, data: out });
  return out;
}
