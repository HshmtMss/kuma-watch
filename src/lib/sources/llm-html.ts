import type { DataSourceEntry } from "@/data/data-sources";
import { inJapanBounds, type UnifiedSighting } from "./types";
import { geocodePlace, jitterWithin } from "./geocode";
import { incidentKey, normalizeSection } from "@/lib/incident-key";
import { GEMINI_BULK_MODEL, geminiEndpoint, geminiText } from "@/lib/gemini-models";

const GEMINI_ENDPOINT = geminiEndpoint(GEMINI_BULK_MODEL);

// ページ本文をここまで読ませる。実測した自治体ページはどれも新しい順に
// 並んでいるので、ここで切り落とされるのは古い年度分だけ (足利市 18,048 字・
// 富士宮市 8,727 字。いずれも今年度分は先頭に収まっている)。
const PAGE_BYTES_MAX = 20000;
// 1 ソースあたりの抽出上限。
//
// 50 件だった頃、那須塩原市のページは今年度分だけで 160 件あり、110 件が
// 地図に出ていなかった (2026-09-14 に実測)。那須町も 58 件中 8 件を落として
// いた。出力は maxOutputTokens 65536 で、1 件あたり 100 トークン見ても
// 200 件で 2 万トークン程度なので上限には当たらない。
const MAX_SIGHTINGS_PER_SOURCE = 200;
const SOURCE_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type SightingDraft = {
  date?: string;
  cityName?: string;
  sectionName?: string;
  comment?: string;
  headCount?: number;
  lat?: number;
  lon?: number;
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
              "出没日 YYYY-MM-DD。和暦は 令和N年 = 西暦 2018+N (令和6年=2024、令和7年=2025、令和8年=2026)。" +
              "年が書かれていない場合 (例: 8月27日) は、同じページの最終更新日・掲載日と同じ年を使う。" +
              "ページの最終更新日より後の日付にはしない。手がかりが何も無いときだけ今日より前の最も近い年を採用",
          },
          cityName: {
            type: "string",
            description: "市町村名のみ (例: 佐久市・軽井沢町)。明示されていなければ空文字",
          },
          sectionName: {
            type: "string",
            description:
              "地区名・町名・施設名のみ。15 文字以内。修飾語や状況説明は含めない",
          },
          comment: {
            type: "string",
            description: "状況説明を 20 文字以内に要約 (例: 農地で目撃)",
          },
          headCount: {
            type: "integer",
            description: "頭数。不明なら 1",
          },
          lat: {
            type: "number",
            description: "緯度。本文に明示されている場合のみ。無ければ省略",
          },
          lon: {
            type: "number",
            description: "経度。本文に明示されている場合のみ。無ければ省略",
          },
        },
        required: ["date"],
      },
    },
  },
  required: ["sightings"],
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

// 取得できなかった理由は必ず残す。ここが無言だったせいで、富士吉田市 (下見時
// 14 件) と御殿場市 (同 6 件) のページが 404 になっても 0 件として素通りし、
// 「likely JS-rendered」という無関係なログだけが出ていた (2026-09-16 に発覚)。
async function fetchPage(sourceId: string, url: string): Promise<string | null> {
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp; data curation)",
        "Accept-Language": "ja",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(25000),
      next: { revalidate: 21600 },
    });
    if (!r.ok) {
      console.error(`[llm-html ${sourceId}] HTTP ${r.status} ${url}`);
      return null;
    }
    return await r.text();
  } catch (e) {
    console.error(`[llm-html ${sourceId}] fetch failed ${url}`, e);
    return null;
  }
}


function buildPrompt(source: DataSourceEntry, pageText: string): string {
  const todayIso = new Date().toISOString().split("T")[0];
  // 「過去 12 ヶ月以内」と書くだけでは、年の決め方を細かく指示した分だけ
  // 期間の指示が弱まり、古い年度分まで返ってくることがある (平生町で実測)。
  // 境界の日付そのものを渡して、判断の余地を無くす。
  //
  // なお、これはあくまで LLM への指示であって、抽出後にコードで切り落とすことは
  // しない。遵守は完全ではなく数件はみ出すが (那須塩原市で実測)、現に取り込めて
  // いる 12 ヶ月より古い 77 件は日付自体は正しい実際の出没記録で、消す理由が無い。
  // 2026-09-15 に切るかどうかを検討したうえで「切らない」と決めた。
  const oldestIso = new Date(Date.now() - 365 * 86_400_000).toISOString().split("T")[0];
  const cityHint = source.defaultCity
    ? `このページは「${source.defaultCity}」のサイトです。本文で市町村名が省略されている場合は cityName="${source.defaultCity}" を使ってください。`
    : "";
  return `あなたは公式ページからクマの個別出没情報を抽出するツールです。
対象: ${source.regionLabel}
今日: ${todayIso}
${cityHint}

抽出ルール:
- 集計表・管理計画・政策文書は対象外。個別の出没 1 件ごとに 1 オブジェクト。
- 年は本文の表記に従う。年が書かれていない日付は、そのページの最終更新日・掲載日の年とみなす。
  ページの最終更新日より後の出没日はありえない。古い記事を今年のものとして扱わないこと。
- 年を決めたうえで期間で絞る。${oldestIso} 以降の出没だけを出力し、それより古いものは
  1 件も含めないこと。最大 ${MAX_SIGHTINGS_PER_SOURCE} 件、新しい順。
- 個別出没リストが本文に無いなら sightings は空配列。
- 各フィールドの形式は responseSchema の description を厳守。推測禁止。
- responseSchema の説明文や本ルール文を、出力の値として絶対にコピーしないこと。

=== ページ本文 ===
${pageText}
=== 終了 ===`;
}

function salvageTruncatedJson(text: string): { sightings?: SightingDraft[] } | null {
  // 出力が途中で切れて JSON.parse できないとき、最後の完結した } まで戻して救出
  const start = text.indexOf("[");
  if (start < 0) return null;
  const lastClose = text.lastIndexOf("}");
  if (lastClose < start) return null;
  const truncated = text.slice(0, lastClose + 1) + "]}";
  try {
    return JSON.parse(truncated) as { sightings?: SightingDraft[] };
  } catch {
    return null;
  }
}

async function callGeminiExtract(
  apiKey: string,
  source: DataSourceEntry,
  pageText: string,
): Promise<SightingDraft[] | null> {
  try {
    const r = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: buildPrompt(source, pageText) }] }],
        generationConfig: {
          maxOutputTokens: 65536,
          responseMimeType: "application/json",
          responseSchema: RESPONSE_SCHEMA,
          thinkingConfig: { thinkingLevel: "low" },
        },
      }),
    });
    if (!r.ok) {
      console.error(`[llm-html ${source.id}] gemini ${r.status}`, await r.text());
      return null;
    }
    const data = await r.json();
    const { text, reason } = geminiText(data);
    if (reason) console.error(`[llm-html] gemini no text (${reason})`);
    if (!text) return null;
    let parsed: { sightings?: SightingDraft[] } | null = null;
    try {
      parsed = JSON.parse(text) as { sightings?: SightingDraft[] };
    } catch {
      parsed = salvageTruncatedJson(text);
      if (parsed)
        console.warn(`[llm-html ${source.id}] salvaged truncated JSON`);
    }
    return Array.isArray(parsed?.sightings) ? parsed.sightings : null;
  } catch (e) {
    console.error(`[llm-html ${source.id}] error`, e);
    return null;
  }
}

export async function fetchLlmHtmlSightings(
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

  // list role を最優先、次に map / pdf 以外の URL を順に試す
  const urlCandidates = [
    ...source.urls.filter((u) => u.role === "list"),
    ...source.urls.filter((u) => u.role !== "list" && u.role !== "pdf"),
  ];
  if (urlCandidates.length === 0) return [];

  let combined = "";
  let fetched = 0;
  for (const u of urlCandidates) {
    const html = await fetchPage(source.id, u.url);
    if (!html) continue;
    fetched++;
    const t = stripHtml(html);
    if (t.length < 200) continue;
    combined += `\n\n[${u.hint ?? u.url}]\n${t}`;
    if (combined.length >= PAGE_BYTES_MAX) break;
  }
  const text = combined.slice(0, PAGE_BYTES_MAX);
  if (text.length < 200) {
    // 1 ページも取れなかったのか、取れたが中身が薄いのかを分けて書く。
    // 前者は公開先が消えた可能性が高く、後者は JS 描画の可能性が高い。
    console.error(
      fetched === 0
        ? `[llm-html ${source.id}] 登録 ${urlCandidates.length} URL のどれも取得できず`
        : `[llm-html ${source.id}] no usable HTML content (likely JS-rendered)`,
    );
    sourceCache.set(source.id, { at: now, data: [] });
    return [];
  }

  const drafts = await callGeminiExtract(apiKey, source, text);
  if (!drafts || drafts.length === 0) {
    console.log(`[llm-html ${source.id}] LLM returned 0 sightings`);
    sourceCache.set(source.id, { at: now, data: [] });
    return [];
  }

  const prefName = source.regionLabel.split(/[\s 　]/)[0] ?? source.regionLabel;
  const out: UnifiedSighting[] = [];
  for (let i = 0; i < drafts.length; i++) {
    const s = drafts[i];
    if (!s.date || !/^\d{4}-\d{2}-\d{2}/.test(s.date)) continue;
    const cityName = s.cityName?.trim() || source.defaultCity || "";
    let lat = typeof s.lat === "number" ? s.lat : undefined;
    let lon = typeof s.lon === "number" ? s.lon : undefined;
    // 地区名が場所を特定しない (「市内」等や空) 場合、LLM の座標は市町村名から
    // 引いた当て推量 (実測では役所の座標) にすぎないので precise を主張させない。
    // news.ts と同じ規則。詳細はそちらのコメントを参照。
    const sectionless = normalizeSection(s.sectionName) === "";
    let precise = lat !== undefined && lon !== undefined && !sectionless;
    if (lat === undefined || lon === undefined) {
      const g = await geocodePlace(prefName, cityName, s.sectionName);
      if (g) {
        lat = g.lat;
        lon = g.lon;
        precise = g.precise;
      }
    }
    if (typeof lat !== "number" || typeof lon !== "number") continue;
    if (!inJapanBounds(lat, lon)) continue;
    const id = `${source.id}-${s.date}-${i}`;
    const pos = precise
      ? { lat, lon }
      : jitterWithin(
          prefName,
          cityName,
          lat,
          lon,
          incidentKey(s.date, prefName, cityName, s.sectionName),
        );
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

  console.log(
    `[llm-html ${source.id}] extracted ${out.length}/${drafts.length} sightings ` +
      `(geocoded ${out.filter((o) => !drafts.find((d) => d.lat === o.lat))?.length ?? 0})`,
  );
  sourceCache.set(source.id, { at: now, data: out });
  return out;
}
