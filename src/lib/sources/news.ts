// Google News RSS からクマ出没ニュースを取り込み、Gemini で構造化抽出する。
//
// 自治体公式サイトは典型的に 1〜2 日遅れて掲載するが、ニュース報道は
// 当日〜数時間で配信されるため、リアルタイム性を底上げする補助ソース。
// 抽出結果は isOfficial: false として記録し、UI で「報道」バッジを出す。
//
// 設計:
//   - Google News RSS (q=クマ+出没) を取得 (auth 不要・無料)
//   - 重複した記事 URL を排除し、新しい順に最大 N 件
//   - 全件を 1 回の Gemini バッチ呼び出しで構造化抽出 (JSON schema)
//   - 緯度経度が抽出できなければ Nominatim でジオコーディング
//   - 県境チェック・日本国内 BBox 内のもののみ採用
//
// 既存の llm-html.ts と仕組みを揃えているので、API キーやエラーハンドリングは
// 同じ慣行 (GEMINI_API_KEY 必須・skip 可・cache TTL 24h)。

import { inJapanBounds, type UnifiedSighting } from "./types";
import { geocodePlace, jitter } from "./geocode";

const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// 1 回のバッチで Gemini に渡す記事数の上限。
// FEEDS が 6 系統に増えたためバッチも拡張。Gemini gemini-3-flash は
// 50 記事程度なら responseSchema の JSON 上限内に収まる。
const MAX_ARTICLES_PER_BATCH = 50;
const SOURCE_CACHE_TTL_MS = 60 * 60 * 1000;

// クマ系キーワードを含む title/description だけを残すフィルタ。
// NHK / Yahoo のような汎用ニュース feed では、これで非関連記事を弾いて
// Gemini に渡す batch を効率化する。
const BEAR_KEYWORD_RE = /(クマ|熊|ヒグマ|ツキノワ)/;
const isBearItem = (it: { title: string; description: string }) =>
  BEAR_KEYWORD_RE.test(it.title) ||
  BEAR_KEYWORD_RE.test(it.description ?? "");

type Feed = {
  url: string;
  label: string;
  /** 全件入れたいキーワード特化 feed は undefined。汎用 feed には title 由来の絞り込みを与える */
  preFilter?: (item: { title: string; description: string }) => boolean;
};

const FEEDS: Feed[] = [
  {
    // 「クマ 出没」検索の RSS。Google News は 24h 以内のニュースが多い。
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%87%BA%E6%B2%A1&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-kuma",
  },
  {
    // 「熊 目撃」検索。キーワードを変えてカバレッジを広げる。
    url: "https://news.google.com/rss/search?q=%E7%86%8A+%E7%9B%AE%E6%92%83&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-bear-sighting",
  },
  // === 警察発表系 ===
  // 警察・県警の発表は自治体公式サイトより数時間〜半日早く出ることが多く、
  // 速報性の鍵となる。Google News の検索面を増やして間接的に取り込む。
  {
    // 「クマ 警察」— 警察庁・各県警発表をベースに報道される事案
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E8%AD%A6%E5%AF%9F&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-police",
  },
  {
    // 「クマ 県警」— 都道府県警発表
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E7%9C%8C%E8%AD%A6&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-prefpolice",
  },
  // === 自治体発表 / 防災情報系 ===
  {
    // 「クマ 緊急情報」— 自治体の緊急速報メール・防災情報網経由の事案
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E7%B7%8A%E6%80%A5%E6%83%85%E5%A0%B1&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-emergency",
  },
  {
    // 「クマ 注意喚起」— 自治体・観光協会等の注意喚起発表
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E6%B3%A8%E6%84%8F%E5%96%9A%E8%B5%B7&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-alert",
  },
  {
    // 「ヒグマ 出没」— 北海道のヒグマ専用クエリ。一般「クマ」だと
    // 本州中心の結果に偏るので別クエリで道内事案を補強。
    url: "https://news.google.com/rss/search?q=%E3%83%92%E3%82%B0%E3%83%9E+%E5%87%BA%E6%B2%A1&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-higuma",
  },
  // === NHK 全国ニュース ===
  // NHK は地域取材網が広く、クマ事案を発生数時間以内に出すことが多い。
  // 一般 feed なので title/description にクマ系キーワードを含むものに絞り込む。
  {
    url: "https://www3.nhk.or.jp/rss/news/cat0.xml",
    label: "nhk-top",
    preFilter: isBearItem,
  },
  {
    url: "https://www3.nhk.or.jp/rss/news/cat1.xml",
    label: "nhk-domestic",
    preFilter: isBearItem,
  },
  // === Yahoo!ニュース ===
  // 地域・国内のニュースが集約されており、地方紙発の事案も取り込める。
  {
    url: "https://news.yahoo.co.jp/rss/topics/local.xml",
    label: "yahoo-local",
    preFilter: isBearItem,
  },
  {
    url: "https://news.yahoo.co.jp/rss/topics/domestic.xml",
    label: "yahoo-domestic",
    preFilter: isBearItem,
  },
];

type RssItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string; // ISO
  source: string; // feed label
};

type ExtractedDraft = {
  index: number; // articles 配列でのインデックス
  date?: string;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  comment?: string;
  headCount?: number;
  lat?: number;
  lon?: number;
};

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    sightings: {
      type: "array",
      items: {
        type: "object",
        properties: {
          index: {
            type: "integer",
            description: "対象記事の articles 配列インデックス (0 始まり)",
          },
          date: {
            type: "string",
            description:
              "出没日 YYYY-MM-DD。記事内に明示されていなければ pubDate を採用。年が無いときは pubDate の年を採用",
          },
          prefectureName: {
            type: "string",
            description: "都道府県名 (例: 北海道, 秋田県)。明示されていなければ空文字",
          },
          cityName: {
            type: "string",
            description: "市町村名のみ (例: 札幌市, 軽井沢町)。明示されていなければ空文字",
          },
          sectionName: {
            type: "string",
            description: "地区名・町名・施設名。15 文字以内",
          },
          comment: {
            type: "string",
            description: "見出し相当の状況説明を 30 文字以内",
          },
          headCount: {
            type: "integer",
            description: "頭数。不明なら 1",
          },
          lat: {
            type: "number",
            description: "緯度。記事内に明示されているときのみ。普通は省略",
          },
          lon: {
            type: "number",
            description: "経度。記事内に明示されているときのみ。普通は省略",
          },
        },
        required: ["index", "date"],
      },
    },
  },
  required: ["sightings"],
};

let memo: { at: number; data: UnifiedSighting[] } | null = null;

function decodeXml(s: string): string {
  return s
    // [\s\S] = . と s フラグ等価。ES2017 ターゲットでも動く。
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripHtmlTags(s: string): string {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseRssItems(xml: string, source: string): RssItem[] {
  const items: RssItem[] = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml))) {
    const block = m[1];
    const title = decodeXml(/\<title>([\s\S]*?)<\/title>/.exec(block)?.[1] ?? "").trim();
    const description = stripHtmlTags(
      decodeXml(/\<description>([\s\S]*?)<\/description>/.exec(block)?.[1] ?? ""),
    );
    const link = (/\<link>([\s\S]*?)<\/link>/.exec(block)?.[1] ?? "").trim();
    const pubDateRaw = (/\<pubDate>([\s\S]*?)<\/pubDate>/.exec(block)?.[1] ?? "").trim();
    const pubDate = pubDateRaw ? new Date(pubDateRaw).toISOString() : "";
    if (!title || !link) continue;
    items.push({ title, description, link, pubDate, source });
  }
  return items;
}

async function fetchFeed(feed: Feed): Promise<RssItem[]> {
  try {
    const r = await fetch(feed.url, {
      headers: {
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp; news ingest)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      cache: "no-store",
    });
    if (!r.ok) {
      console.warn(`[news] feed ${feed.label} HTTP ${r.status}`);
      return [];
    }
    const xml = await r.text();
    const items = parseRssItems(xml, feed.label);
    // preFilter があれば適用 (汎用 feed をクマ関連キーワードで絞り込む)
    if (feed.preFilter) return items.filter(feed.preFilter);
    return items;
  } catch (e) {
    console.warn(`[news] feed ${feed.label} fetch failed`, e);
    return [];
  }
}

function buildPrompt(items: RssItem[]): string {
  const todayIso = new Date().toISOString().slice(0, 10);
  const articles = items
    .map(
      (it, i) =>
        `[${i}] pubDate=${it.pubDate.slice(0, 10)}\n  title: ${it.title}\n  description: ${it.description.slice(0, 240)}`,
    )
    .join("\n\n");
  return `あなたはニュース記事の見出し・要約から、クマ (ヒグマ・ツキノワグマ) 出没事案を抽出するツールです。
今日: ${todayIso}

入力源:
- Google News 経由の各社報道。警察・県警発表 / 自治体緊急情報 / 注意喚起 / 防災メール / 一般報道が混在します。
- 警察発表ベースの記事 (「○○県警によると...」「警察によると○月○日...」) は具体的な地点・時刻が含まれることが多いので優先的に抽出してください。
- 自治体の緊急情報メール由来 (「○○市は本日午前...」) も同様に優先。

抽出ルール:
- 「個別の出没・目撃・痕跡発見・人身被害・駆除・捕獲」を 1 件 1 オブジェクトで返す。
- 同じ記事内に複数の事案がある場合は同じ index を持つ複数オブジェクトを返してよい。
- 注意喚起の "全般的な" 文 (具体地点が無い「○○県では出没多発、注意を」) は対象外。
- 統計記事 (「○○県のクマ出没件数が増加」「シーズン別の捕獲頭数」等) は対象外。
- 各フィールドは responseSchema の description を厳守。推測しないこと。
- pubDate より未来の日付は NG。
- 海外のニュース (アメリカ・ロシア等) は対象外。
- 駆除・捕獲のニュースで「○○市で 1 頭駆除」など具体地点・日付があれば対象。

=== articles ===
${articles}
=== end ===`;
}

async function callGeminiBatch(
  apiKey: string,
  items: RssItem[],
): Promise<ExtractedDraft[] | null> {
  try {
    const r = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: buildPrompt(items) }] }],
        generationConfig: {
          maxOutputTokens: 65536,
          responseMimeType: "application/json",
          responseSchema: RESPONSE_SCHEMA,
          thinkingConfig: { thinkingLevel: "low" },
        },
      }),
    });
    if (!r.ok) {
      console.error(`[news] gemini ${r.status}`);
      return null;
    }
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) return null;
    try {
      const parsed = JSON.parse(text) as { sightings?: ExtractedDraft[] };
      return Array.isArray(parsed.sightings) ? parsed.sightings : null;
    } catch {
      return null;
    }
  } catch (e) {
    console.error("[news] gemini call failed", e);
    return null;
  }
}

export async function fetchNewsSightings(
  excludeUrls?: ReadonlySet<string>,
): Promise<UnifiedSighting[]> {
  const now = Date.now();
  // memo を使うのは「同一プロセス内で何度も呼ばれた時の重複抑制」のためだけ。
  // GitHub Actions の各ランは新規プロセスなので memo は影響しない。
  if (memo && now - memo.at < SOURCE_CACHE_TTL_MS && !excludeUrls)
    return memo.data;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    memo = { at: now, data: [] };
    return [];
  }

  // 全フィードを並列取得し、URL 重複を除く
  const feeds = await Promise.all(FEEDS.map((f) => fetchFeed(f)));
  const allItems = feeds.flat();
  const uniq = new Map<string, RssItem>();
  for (const it of allItems) {
    if (!uniq.has(it.link)) uniq.set(it.link, it);
  }
  // 既に取り込み済の URL を Gemini 呼び出し前に除外。
  // 30 分間隔の cron ではほとんどの記事が前回処理済みなので、
  // ここで弾けば Gemini 呼び出しがゼロ or 数件になり quota を抑えられる。
  const items = [...uniq.values()]
    .filter((it) => !excludeUrls?.has(it.link))
    .sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1))
    .slice(0, MAX_ARTICLES_PER_BATCH);

  if (items.length === 0) {
    console.log(
      `[news] no new items (excluded ${excludeUrls?.size ?? 0} known URLs from ${uniq.size} candidates)`,
    );
    memo = { at: now, data: [] };
    return [];
  }

  console.log(`[news] feeding ${items.length} articles to gemini`);
  const drafts = await callGeminiBatch(apiKey, items);
  if (!drafts || drafts.length === 0) {
    console.log("[news] gemini returned 0 sightings");
    memo = { at: now, data: [] };
    return [];
  }

  const out: UnifiedSighting[] = [];
  for (let i = 0; i < drafts.length; i++) {
    const s = drafts[i];
    const article = items[s.index];
    if (!article) continue;
    if (!s.date || !/^\d{4}-\d{2}-\d{2}/.test(s.date)) continue;
    const prefName = (s.prefectureName ?? "").trim();
    const cityName = (s.cityName ?? "").trim();
    if (!prefName) continue;

    let lat = typeof s.lat === "number" ? s.lat : undefined;
    let lon = typeof s.lon === "number" ? s.lon : undefined;
    let precise = lat !== undefined && lon !== undefined;
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

    const id = `news-${article.source}-${s.index}-${i}`;
    const pos = precise ? { lat, lon } : jitter(lat, lon, id);
    out.push({
      id,
      source: "news",
      sourceKind: "news",
      lat: pos.lat,
      lon: pos.lon,
      date: s.date,
      prefectureName: prefName,
      cityName: cityName.slice(0, 40),
      sectionName: (s.sectionName ?? "").slice(0, 40),
      comment: (s.comment ?? article.title).slice(0, 80),
      headCount: Number.isInteger(s.headCount) && s.headCount! > 0 ? s.headCount! : 1,
      isOfficial: false,
      sourceUrl: article.link,
      ingestedAt: now,
    });
  }

  console.log(`[news] extracted ${out.length} sightings from ${items.length} articles`);
  memo = { at: now, data: out };
  return out;
}
