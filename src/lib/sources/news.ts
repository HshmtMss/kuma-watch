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
import { geocodePlace, jitterWithin } from "./geocode";
import { hasBoundaryData, isInsideMuni, resolveMuni } from "@/lib/muni-boundary";
import { latLonMatchesPrefecture } from "@/lib/prefecture-bbox";
import { isNewsSuppressed } from "@/lib/news-suppression";
import { isNewsMisplaced } from "@/lib/muni-geo-check";
import { jstToday } from "@/lib/jst-date";
import { isRealCalendarDate } from "./date-utils";
import { incidentKey, normalizeSection } from "@/lib/incident-key";
import { snapToRiver } from "@/lib/river-snap";

const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// 1 回のバッチで Gemini に渡す記事数の上限。
// FEEDS が多系統 (全国 + 警察/防災 + 西日本県別 + NHK/Yahoo) に増えたため
// バッチ分割で処理。Gemini gemini-3-flash は 50 記事程度なら
// responseSchema の JSON 上限内に収まる。
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
  // === 地域強化クエリ（西日本の薄いカバレッジ補強）===
  // 京都・兵庫・和歌山・広島は公式オープンデータが無い/更新停止 or 集計のみ公開で
  // 点データが取れず、全国一括クエリだと東北・北海道の事案に埋もれて拾えていない。
  // 県名を添えた検索面を増やし、関西・中国地方の事案を明示的に取り込む。
  // 大阪(能勢)・鳥取・山口・滋賀・奈良もクマ生息地だが公式 extractor が実質 0 件で
  // news 頼みのため、同様に県名クエリを追加。重複は URL / フィンガープリントで除外。
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E4%BA%AC%E9%83%BD&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-kyoto",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%85%B5%E5%BA%AB&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-hyogo",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%92%8C%E6%AD%8C%E5%B1%B1&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-wakayama",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%BA%83%E5%B3%B6&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-hiroshima",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%A4%A7%E9%98%AA&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-osaka",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E9%B3%A5%E5%8F%96&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-tottori",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%B1%B1%E5%8F%A3&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-yamaguchi",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E6%BB%8B%E8%B3%80&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-shiga",
  },
  {
    url: "https://news.google.com/rss/search?q=%E3%82%AF%E3%83%9E+%E5%A5%88%E8%89%AF&hl=ja&gl=JP&ceid=JP:ja",
    label: "google-news-nara",
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
  time?: string;
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
              "出没日 YYYY-MM-DD。記事(見出し・本文)に日付が書かれていれば必ずそれを採用する(例「◯◯でクマ出没 7月25日」→ 2026-07-25、「23日夜」→ その日)。年が無いときは pubDate の年を補う。記事に日付が全く書かれていない場合のみ空文字にする(pubDate で埋めない)。",
          },
          time: {
            type: "string",
            description:
              "出没時刻 HH:MM (24時間表記)。記事に時刻があれば抽出 (例: 「午後3時半ごろ」→ 15:30、「午前6時」→ 06:00)。記事に時刻が書かれていなければ空文字。pubDate の時刻は使わない (報道時刻であり出没時刻ではないため)",
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

// 安定・一意な id 生成用の FNV-1a ハッシュ (base36)。
// 旧 id `news-{source}-{index}-{i}` は index/i がバッチ内連番で cron 実行ごとに
// リセットされ、別記事どうしが同じ id になっていた (同一 id に 100件超のケースも)。
// 地図は lite でピンを描き、クリック時に id で詳細取得するため、id 衝突により
// 別地域の記事がポップアップに出る不具合の原因だった。記事 URL は記事ごとに一意で
// cron を跨いでも安定なので、これを核にして衝突しない id を作る。
function hash36(s: string): string {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h.toString(36);
}

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

/**
 * 抽出された出没日を検証・補正する。不正なら null (取り込まない)。
 *
 *  - 暦として存在しない日付 (2025-09-38 等) を弾く
 *  - 記事の配信日 (pubDate) より未来の出没日は成立しないので弾く
 *  - ただし「年が無い記事」を pubDate の年で補った結果だけは救済する。
 *    1/5 配信の記事が「12月28日」と書いていると pubDate の年を採って
 *    翌年12月 = 11ヶ月先になる。1年引いて pubDate 以前に収まるならそれを採る。
 *    (現データは未発現。年末年始を跨いだ時点で必ず起きる)
 */
export function normalizeEventDate(
  raw: string | undefined,
  pubDate: string | undefined,
): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((raw ?? "").trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const da = Number(m[3]);
  if (!isRealCalendarDate(y, mo, da)) return null;

  let date = `${m[1]}-${m[2]}-${m[3]}`;
  const pub = (pubDate ?? "").slice(0, 10);
  if (/^\d{4}-\d{2}-\d{2}$/.test(pub) && date > pub) {
    // 年跨ぎの繰り上がりだけ救済する。1年引いた日付が配信直前
    // (ROLLOVER_SLACK_DAYS 以内) に収まる場合のみ = 12月の事案を1月に報じた形。
    // 無条件に1年引くと、単なる月日取り違え (07-05 <-> 05-07) を
    // 「1年前の事案」として救ってしまい、誤った日付で載せることになる。
    const ROLLOVER_SLACK_DAYS = 60;
    const back = `${y - 1}-${m[2]}-${m[3]}`;
    const diffDays =
      (Date.parse(`${pub}T00:00:00Z`) - Date.parse(`${back}T00:00:00Z`)) /
      86_400_000;
    if (
      isRealCalendarDate(y - 1, mo, da) &&
      diffDays >= 0 &&
      diffDays <= ROLLOVER_SLACK_DAYS
    )
      date = back;
    else return null; // 配信前に起きた事案は報じられない = 抽出誤り
  }
  // pubDate が壊れている場合の最終防衛
  if (date > jstToday()) return null;
  return date;
}

/**
 * 記事本文(タイトル+説明)に、その出没日の「日」が日付として明記されているか。
 * 例: date=2026-07-27 なら本文に「27日」または全角「２７日」があるか。
 *
 * 背景: プロンプトで「pubDate を date に使うな」と指示しても、LLM は配信日を
 * イベント日として echo することがある(実測: 寺内蛭根の集約記事で、1ヶ月前の
 * 公式事案が「今日付け」で取り込まれ通知された)。本文に日付が無い「今日付け」
 * news は実際は過去/集約事案の可能性が高いので、これで裏取りできないものは
 * 通知から外す(推定日扱い)。地図には従来どおり載る。
 */
export function eventDateStatedInText(
  dateIso: string,
  title: string | undefined,
  description: string | undefined,
): boolean {
  const day = Number(dateIso.slice(8, 10));
  if (!day) return false;
  const z = String(day).replace(
    /[0-9]/g,
    (c) => "０１２３４５６７８９"[Number(c)],
  );
  const text = `${title ?? ""} ${description ?? ""}`;
  return text.includes(`${day}日`) || text.includes(`${z}日`);
}

function buildPrompt(items: RssItem[]): string {
  const todayIso = jstToday();
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
- 記事に出没時刻が書かれていれば time (HH:MM) に入れる (「午後3時半ごろ」→ 15:30)。書かれていなければ空文字。配信時刻(pubDate)は time に使わない。
- date は見出し・本文の日付を必ず拾う (例「クマ出没 7月25日」「23日夜」)。日付が全く書かれていない記事だけ date を空文字にする。pubDate で date を埋めないこと。
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
  let droppedPlaceMismatch = 0;
  for (let i = 0; i < drafts.length; i++) {
    const s = drafts[i];
    const article = items[s.index];
    if (!article) continue;
    // 日付の検証。従来は形式しか見ておらず、Gemini が pubDate より未来の
    // 出没日を返しても素通りしていた (実測: 取り込み時刻より後の出没日が
    // news 431件。月日の取り違え 07-05 <-> 05-07 が主因)。
    // 時刻側は既に範囲検査があるのに日付だけ抜けていた。
    // 日付は記事から取れたものを最優先。取れない(空)ときだけ配信日で埋め、
    // 「推定日」の印を付ける。地図には載せるが、通知はしない(古い情報の遮断)。
    const explicitDate = (s.date ?? "").trim();
    let eventDate: string | null;
    let dateEstimated = false;
    if (explicitDate) {
      eventDate = normalizeEventDate(explicitDate, article.pubDate);
      // 「今日付け」なのに本文にその日付が無い news は、LLM が pubDate を
      // イベント日として echo した疑いが濃い(古い/集約事案を今日扱い)。裏取り
      // できないものは推定日にして通知しない。当日以外は鮮度判定で弾かれるので
      // 対象は「今日付け」だけに絞る。
      if (
        eventDate === jstToday() &&
        !eventDateStatedInText(eventDate, article.title, article.description)
      ) {
        dateEstimated = true;
      }
    } else {
      const pub = (article.pubDate || "").slice(0, 10);
      eventDate = /^\d{4}-\d{2}-\d{2}$/.test(pub) && pub <= jstToday() ? pub : null;
      dateEstimated = true;
    }
    if (!eventDate) continue;
    const prefName = (s.prefectureName ?? "").trim();
    // cityName に「市区町村」でなく都道府県名 (例: cityName="埼玉県") が入る
    // ことがある。この値を geocodePlace に渡すと `if (!city)` ガードをすり抜け、
    // Nominatim が県代表点 (埼玉県→坂戸市付近) を 1 点返して、クマの出ない
    // 市街地に目立つ誤ピンが立つ (「県代表点リーク」)。都道府県名で終わる/
    // 県名そのものの cityName は市区町村不明として空に倒し、下の県レベル
    // スキップに流す。実在の市町村は市/区/町/村/郡 で終わるので誤除去しない。
    const rawCity = (s.cityName ?? "").trim();
    const cityName =
      rawCity && (rawCity === prefName || /[都道府県]$/.test(rawCity))
        ? ""
        : rawCity;
    if (!prefName) continue;
    // 記事から明示座標が取れず市区町村も特定できない事案はスキップ。
    // 県名だけだと geocodePlace が県代表点 (例: 埼玉県→坂戸市付近) を返し、
    // クマの出ない市街地に誤ピンが立つ。県レベルの曖昧な報道は地図に載せない。
    if (!cityName && typeof s.lat !== "number") continue;

    // 誤帰属 (hallucination) 対策: LLM が返した地名が記事本文 (title+description)
    // に一切現れない場合、その場所への帰属は捏造の可能性が高い (別地域の記事を
    // 誤った市町村に紐付ける = 網走・岡山型の苦情の核心)。県名/市町村名/地区名の
    // 頭のいずれも記事に出てこないレコードは取り込まない。全て不一致の時だけ落とす
    // 保守的判定なので、記事が地名を明示する正当な事案は残る (「岡山県」表記の
    // 記事に cityName「鏡野町」だけでも、県名一致で通る)。
    const hay = `${article.title} ${article.description}`;
    const sectionHead = (s.sectionName ?? "").split(/[\s　0-9０-９]/)[0];
    const prefBare = prefName.replace(/[都道府県]$/, "");
    const cityBare = cityName.replace(/[市区町村]$/, "");
    const placeMentioned =
      (prefName.length >= 2 && hay.includes(prefName)) ||
      (prefBare.length >= 2 && hay.includes(prefBare)) ||
      (cityName.length >= 2 && hay.includes(cityName)) ||
      (cityBare.length >= 2 && hay.includes(cityBare)) ||
      (sectionHead.length >= 2 && hay.includes(sectionHead));
    if (!placeMentioned) {
      droppedPlaceMismatch++;
      continue;
    }

    // LLM が明示する lat/lon は記事に無い座標を捏造することがあり、県名と
    // 無関係な遠隔地 (北海道・東北など) に飛ぶ。両方揃っていて かつ 県名の
    // BBox と整合するときだけ採用し、矛盾する座標は破棄して、県名クエリで
    // 制約された geocodePlace に委ねる (幻覚ピンの主因への対処)。
    let lat: number | undefined;
    let lon: number | undefined;
    if (
      typeof s.lat === "number" &&
      typeof s.lon === "number" &&
      latLonMatchesPrefecture(prefName, s.lat, s.lon)
    ) {
      lat = s.lat;
      lon = s.lon;
    }
    // 地区名が場所を特定しない (「市内」「市街地」「道路」「不明」や空) 場合、
    // LLM が出した座標は記事から読み取った地点ではなく、市町村名から引いた
    // 当て推量にすぎない。実測では市役所の座標が返ってくる:
    //   会津若松市役所本庁舎 に 30 件、福島市役所 に 22 件のピンが積み上がり、
    //   全国 91 地点 / 525 件が同じ形で役所に集中していた。
    // geocodePlace は同じ状況を precise=false にしてジッターへ回している
    // (「市区町村までは特定できたが地区が拾えなかった場合の丸め」)。LLM 座標の
    // 経路だけがこの判定を飛ばしていたので、ここで揃える。
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
    // 最終防衛: geocode 結果も含め、県名と矛盾する座標は地図に載せない。
    // getCachedSightings の filterMisgeocoded と同じ判定を取り込み段でも掛け、
    // 誤座標がスナップショット・件数集計・生ファイル参照に混入するのを防ぐ。
    if (!latLonMatchesPrefecture(prefName, lat, lon)) continue;
    // 地域抑制: 事実無根の報道ピンで実害が出ている地域(news-suppression)は
    // 取り込み段でも落とし、次回の news-flash で再出現しないようにする。
    if (isNewsSuppressed("news", lat, lon)) continue;
    // 市町村レベルの座標整合: 主張市町村から遠く別市町村が遥かに近い誤配置を除外
    // (県内での誤配置。県BBoxはすり抜けるため muni-geo-check で捕捉)。
    if (isNewsMisplaced(prefName, cityName, lat, lon)) continue;

    // 一意 id: 記事 URL (記事ごとに一意・安定) + 記事内インデックス。同一記事に
    // 複数事案がある場合は s.index / i で分離。これで cron 実行を跨いだ衝突を根絶。
    const id = `news-${hash36(article.link)}-${s.index}-${i}`;

    // 報道は「市町村名」が記事本文で裏取り済み(placeMentioned)なのに対し、座標は
    // LLM 出力か Nominatim の当て推量で、隣の市街地に落ちることがある。市域外に
    // なった座標は捨てて市町村内へ寄せる。事案自体は実在するので落とさない。
    const claimed = resolveMuni(prefName, cityName);
    if (claimed && hasBoundaryData() && isInsideMuni(lat, lon, claimed) === false) {
      precise = false;
    }
    // 「河川敷/川沿い」と明記された出没は、認識地名に寄った座標を実際の川へ
    // スナップする(#4: 河川敷とあるのに街中にピンが立つ の対策)。寄せた点は
    // 既に正確なので precise=true とし、ジッターを掛けない。安全条件を満たさ
    // ない場合 snapToRiver は null を返し、元座標をそのまま使う。
    const snapped = snapToRiver(
      prefName,
      cityName,
      s.sectionName ?? "",
      s.comment ?? "",
      lat,
      lon,
    );
    if (snapped) {
      lat = snapped.lat;
      lon = snapped.lon;
      precise = true;
    }
    // ジッターの種は「記録 id」ではなく「事案キー」。id で振ると、同じ出没を
    // 報じた別記事が別々の座標へ散らばり、下流の近接 dedup (220m) が束ねられず
    // 1件の出没が複数ピンとして残る (実測: 釜石市の1頭が最大4km離れた4点に)。
    // 事案キーで振れば同じ出没は必ず同じ点に落ち、既存の dedup が効く。
    const seed = incidentKey(eventDate, prefName, cityName, s.sectionName);
    const pos = precise
      ? { lat, lon }
      : jitterWithin(prefName, cityName, lat, lon, seed);
    // "HH:MM" (24時間) のみ採用。"9:5"→"09:05" に整える。範囲外は捨てる。
    const time = (() => {
      const m = /^(\d{1,2}):(\d{2})$/.exec((s.time ?? "").trim());
      if (!m) return undefined;
      const hh = Number(m[1]);
      const mm = Number(m[2]);
      if (hh > 23 || mm > 59) return undefined;
      return `${String(hh).padStart(2, "0")}:${m[2]}`;
    })();
    out.push({
      id,
      source: "news",
      sourceKind: "news",
      lat: pos.lat,
      lon: pos.lon,
      date: eventDate,
      ...(time ? { time } : {}),
      ...(dateEstimated ? { dateEstimated: true } : {}),
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

  console.log(
    `[news] extracted ${out.length} sightings from ${items.length} articles` +
      ` (dropped ${droppedPlaceMismatch} place-mismatch)`,
  );
  memo = { at: now, data: out };
  return out;
}
