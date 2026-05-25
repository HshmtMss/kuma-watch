/**
 * 政府機関のクマ・鳥獣関連アナウンスを press release ページから収集する。
 *
 * 対応: 環境省 / 農林水産省 / 林野庁。
 * 各省の press list HTML を fetch → 日付・タイトル・URL を抽出 → キーワード絞り込み
 * → Gemini で「クマ関連 yes/no + 要約 + カテゴリ」を判定。
 *
 * RSS は 2026-05 時点で各省とも提供無し or 死んでいるので HTML スクレイプ運用。
 *
 * 必要環境変数: GEMINI_API_KEY (extract 段階)。
 */

export type GovMinistry = "env" | "maff" | "rinya";

export type GovAnnouncement = {
  id: string; // 安定 ID = `${ministry}:${url}`
  ministry: GovMinistry;
  date: string; // YYYY-MM-DD
  title: string;
  url: string; // 絶対 URL
  tag?: string; // 省側の分類タグ (例: "自然環境")
  category: "policy" | "budget" | "guidance" | "report" | "meeting" | "press";
  summary: string; // 80-120 字の要約 (Gemini)
  ingestedAt: number;
};

// クマ関連の事前絞り込みキーワード。これに引っかかったものだけ Gemini に流す。
// 軽い偽陽性は OK (Gemini 側で振るい落とす)。鳥獣被害全般を含む広めの設定。
const BEAR_KEYWORDS = [
  "クマ",
  "熊",
  "ツキノワ",
  "ヒグマ",
  "月の輪",
  "鳥獣保護",
  "鳥獣管理",
  "指定管理鳥獣",
  "緊急銃猟",
  "鳥獣被害",
  "鳥獣害",
];

function matchesBearKeyword(text: string): boolean {
  return BEAR_KEYWORDS.some((k) => text.includes(k));
}

// ────────────────────────────────────────
// 環境省 press 抽出
// 構造: <span class="p-press-release-list__heading">YYYY年MM月DD日発表</span>
//      <span class="p-news-link__tag c-tag c-tag--XXX">tag-name</span>
//      <a href="/press/press_XXXXX.html" class="c-news-link__link">title</a>
// ────────────────────────────────────────
const ENV_PRESS_URL = "https://www.env.go.jp/press/index.html";

type ParsedItem = {
  ministry: GovMinistry;
  date: string;
  title: string;
  url: string;
  tag?: string;
};

function parseEnvPress(html: string): ParsedItem[] {
  const out: ParsedItem[] = [];
  // 日付ヘッダ → 次の日付ヘッダ or 末尾までを 1 ブロックとして処理
  const headingRe =
    /<span class="p-press-release-list__heading">\s*(\d{4})年(\d{1,2})月(\d{1,2})日発表\s*<\/span>/g;
  const headings: { date: string; index: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = headingRe.exec(html))) {
    const y = m[1];
    const mo = m[2].padStart(2, "0");
    const d = m[3].padStart(2, "0");
    headings.push({ date: `${y}-${mo}-${d}`, index: m.index });
  }
  for (let i = 0; i < headings.length; i++) {
    const start = headings[i].index;
    const end = i + 1 < headings.length ? headings[i + 1].index : html.length;
    const block = html.slice(start, end);
    // ブロック内のリンクとタグをペアで抽出。タグはリンクの直前にあるので
    // tag, link の順に走査する。
    const itemRe =
      /<span[^>]*class="[^"]*p-news-link__tag[^"]*"[^>]*>([^<]+)<\/span>[\s\S]*?<a href="([^"]+)"[^>]*class="[^"]*c-news-link__link[^"]*"[^>]*>([^<]+)<\/a>/g;
    let im: RegExpExecArray | null;
    while ((im = itemRe.exec(block))) {
      const tag = im[1].trim();
      const href = im[2].trim();
      const title = im[3].trim();
      const url = href.startsWith("http")
        ? href
        : `https://www.env.go.jp${href.startsWith("/") ? "" : "/"}${href}`;
      out.push({
        ministry: "env",
        date: headings[i].date,
        title,
        url,
        tag,
      });
    }
  }
  return out;
}

// ────────────────────────────────────────
// 農水省 press 抽出
// 構造: <p class="list_item_date">5月19日</p>
//      <dl class="list_item"><dt class="list_item-N">category</dt><dd><a href="...">title</a></dd></dl>
// 月の境は <h2>令和N年M月分</h2>。年は別途算出 (令和 N = 2018 + N)。
// ────────────────────────────────────────
const MAFF_PRESS_URL = "https://www.maff.go.jp/j/press/";

function reiwaToWestern(reiwaYear: number): number {
  return 2018 + reiwaYear; // 令和元年 = 2019
}

function parseMaffPress(html: string, base: string): ParsedItem[] {
  const out: ParsedItem[] = [];
  // 月セクションを <h2>令和N年M月分</h2> ごとに切り出し
  const monthSectionRe =
    /<h2>令和(\d+)年(\d{1,2})月分<\/h2>([\s\S]*?)(?=<h2>令和\d+年\d{1,2}月分<\/h2>|$)/g;
  let sm: RegExpExecArray | null;
  while ((sm = monthSectionRe.exec(html))) {
    const year = reiwaToWestern(Number(sm[1]));
    const month = Number(sm[2]);
    const section = sm[3];

    // 日付ごとにブロック分割
    const dayHeadingRe =
      /<p class="list_item_date">\s*(\d{1,2})月(\d{1,2})日\s*<\/p>/g;
    const dayPositions: { day: number; index: number }[] = [];
    let dm: RegExpExecArray | null;
    while ((dm = dayHeadingRe.exec(section))) {
      dayPositions.push({ day: Number(dm[2]), index: dm.index });
    }
    for (let i = 0; i < dayPositions.length; i++) {
      const start = dayPositions[i].index;
      const end =
        i + 1 < dayPositions.length ? dayPositions[i + 1].index : section.length;
      const block = section.slice(start, end);
      const date = `${year}-${String(month).padStart(2, "0")}-${String(dayPositions[i].day).padStart(2, "0")}`;

      // <dl class="list_item"><dt ...>tag</dt><dd><a href="...">title</a></dd></dl>
      const itemRe =
        /<dt class="list_item-\d+">([^<]+)<\/dt>\s*<dd>\s*<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
      let im: RegExpExecArray | null;
      while ((im = itemRe.exec(block))) {
        const tag = im[1].trim();
        const href = im[2].trim();
        const title = im[3].trim();
        const url = href.startsWith("http")
          ? href
          : new URL(href, base).toString();
        out.push({ ministry: "maff", date, title, url, tag });
      }
    }
  }
  return out;
}

// ────────────────────────────────────────
// 林野庁 press 抽出 — maff と同じ構造 (相対パスのベースが異なる)
// ────────────────────────────────────────
const RINYA_PRESS_URL = "https://www.rinya.maff.go.jp/j/press/index.html";

function parseRinyaPress(html: string): ParsedItem[] {
  // maff と同じパースだが base が異なる + ministry を rinya に書き換え
  const items = parseMaffPress(html, RINYA_PRESS_URL);
  return items.map((it) => ({ ...it, ministry: "rinya" as const }));
}

// ────────────────────────────────────────
// 農林水産省 クマ注意喚起ページ抽出
// 汎用 /j/press/ にはクマ記事がほぼ無いため、MAFF のクマ関連発出文書は
// 鳥獣被害対策コーナー配下のこの専用ページで拾う (env の effort12 相当)。
// 構造: <a href="...pdf">…（令和N年M月D日）(PDF : …KB)</a>
//      タイトル末尾の全角括弧内 (令和N年M月D日) から日付を取り出す。
// ────────────────────────────────────────
const MAFF_KUMA_URL =
  "https://www.maff.go.jp/j/seisan/tyozyu/higai/tyuuikanki/index.html";

function parseMaffKumaCaution(html: string, base: string): ParsedItem[] {
  const out: ParsedItem[] = [];
  const seen = new Set<string>();
  const linkRe = /<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(html))) {
    const href = m[1].trim();
    const rawText = m[2]
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    // タイトル内の (令和N年M月D日) を日付に。クマ系の発出文書は必ず付く。
    const dm = /[（(]令和(\d+)年(\d{1,2})月(\d{1,2})日[）)]/.exec(rawText);
    if (!dm) continue;
    if (!matchesBearKeyword(rawText)) continue;
    const year = reiwaToWestern(Number(dm[1]));
    const date = `${year}-${String(Number(dm[2])).padStart(2, "0")}-${String(Number(dm[3])).padStart(2, "0")}`;
    // 末尾の (PDF : …KB) と日付括弧を落として読みやすいタイトルに整形
    const title = rawText
      .replace(/\s*[（(]PDF[^）)]*[）)]\s*$/i, "")
      .replace(/\s*[（(]令和\d+年\d{1,2}月\d{1,2}日[）)]\s*/, " ")
      .trim();
    const url = href.startsWith("http")
      ? href
      : new URL(href, base).toString();
    if (seen.has(url)) continue;
    seen.add(url);
    out.push({ ministry: "maff", date, title, url });
  }
  return out;
}

// ────────────────────────────────────────
// 環境省 クマ被害対策専用ページ (effort12) 抽出
// このページは「クマ被害対策等関係情報のお知らせ」「緊急銃猟への協力依頼」
// 「通知 (財政支援・退職者協力依頼)」など、クマ特化の高密度ソース。
// 一般 press フィードよりも先にここを見るのが効率良い。
//
// 構造:
//   <a href="kuma-oshirase-r080212.html">タイトル...（令和8年2月12日、...）</a>
//   ファイル名末尾の r{YYMMDD} (YY = 令和年) から日付を取り出す。
//   外部リンク (cas.go.jp など) や非 oshirase ページは取りこぼし許容。
// ────────────────────────────────────────
const ENV_CHOJU_EFFORT12_URL =
  "https://www.env.go.jp/nature/choju/effort/effort12/effort12.html";

function parseEnvChojuEffort12(html: string): ParsedItem[] {
  const out: ParsedItem[] = [];
  // pattern A: kuma-oshirase-r{YY}{MM}{DD}.html という決まった命名規則
  const reA = /<a href="(kuma-oshirase-r(\d{2})(\d{2})(\d{2})\.html)"[^>]*>([^<]+)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = reA.exec(html))) {
    const filename = m[1];
    const reiwa = Number(m[2]);
    const mo = m[3];
    const day = m[4];
    const titleRaw = m[5].trim();
    const year = reiwaToWestern(reiwa);
    const date = `${year}-${mo}-${day}`;
    // 末尾の「（令和X年...）」部分はメタ情報なので除去してタイトルを綺麗に
    const title = titleRaw.replace(/\s*[（(]令和[^)）]+[)）]\s*$/, "").trim();
    const url = `https://www.env.go.jp/nature/choju/effort/effort12/${filename}`;
    out.push({
      ministry: "env",
      date,
      title,
      url,
      tag: "クマ被害対策",
    });
  }
  return out;
}

// ────────────────────────────────────────
// 各省 fetch + 抽出を統合
// ────────────────────────────────────────
async function fetchHtml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "KumaWatch/1.0 (+https://kuma-watch.jp; gov-announcement ingest)",
        Accept: "text/html",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      console.warn(`[gov] HTTP ${res.status} for ${url}`);
      return null;
    }
    return await res.text();
  } catch (e) {
    console.warn(`[gov] fetch failed ${url}`, e);
    return null;
  }
}

export async function fetchGovCandidates(): Promise<ParsedItem[]> {
  const [envHtml, maffHtml, rinyaHtml, envChojuHtml, maffKumaHtml] =
    await Promise.all([
      fetchHtml(ENV_PRESS_URL),
      fetchHtml(MAFF_PRESS_URL),
      fetchHtml(RINYA_PRESS_URL),
      fetchHtml(ENV_CHOJU_EFFORT12_URL),
      fetchHtml(MAFF_KUMA_URL),
    ]);
  const items: ParsedItem[] = [];
  if (envHtml) items.push(...parseEnvPress(envHtml));
  if (maffHtml) items.push(...parseMaffPress(maffHtml, MAFF_PRESS_URL));
  if (rinyaHtml) items.push(...parseRinyaPress(rinyaHtml));
  if (envChojuHtml) items.push(...parseEnvChojuEffort12(envChojuHtml));
  if (maffKumaHtml) items.push(...parseMaffKumaCaution(maffKumaHtml, MAFF_KUMA_URL));
  return items;
}

export function filterBearRelated(items: ParsedItem[]): ParsedItem[] {
  return items.filter((it) => matchesBearKeyword(it.title));
}

// ────────────────────────────────────────
// Gemini 分類
// 入力: 候補アイテム → 出力: { id, isBearRelated, summary, category }
// 入力数は事前フィルタで絞られているので一括で投げる。
// ────────────────────────────────────────
const GEMINI_MODEL =
  process.env.GEMINI_GOV_MODEL ?? "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

type ClassifiedResult = {
  index: number;
  isBearRelated: boolean;
  summary: string;
  category: GovAnnouncement["category"];
};

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          index: { type: "integer" },
          isBearRelated: { type: "boolean" },
          summary: { type: "string" },
          category: {
            type: "string",
            enum: ["policy", "budget", "guidance", "report", "meeting", "press"],
          },
        },
        required: ["index", "isBearRelated", "summary", "category"],
      },
    },
  },
  required: ["items"],
};

function buildClassifyPrompt(items: ParsedItem[]): string {
  const lines = items
    .map(
      (it, i) =>
        `[${i}] ${it.date} ${it.ministry} ${it.tag ? "(" + it.tag + ") " : ""}${it.title}`,
    )
    .join("\n");
  return `あなたは政府機関の press release タイトルから、日本のクマ (ヒグマ・ツキノワグマ) に関連する発表を抽出するツールです。

判定ルール:
- 「クマ」「鳥獣保護管理」「指定管理鳥獣」「緊急銃猟」など、クマ被害・クマ対策・クマを含む野生動物管理に直接関係する案件は isBearRelated=true
- 鹿・イノシシ単独の話題、林業全般、災害一般、温暖化対策などクマと無関係なものは isBearRelated=false
- 「鳥獣保護管理」のように 鳥獣全般 を扱うがクマも含むもの (中央環境審議会の鳥獣管理小委員会など) は true
- "category" は以下から最適なものを 1 つ選ぶ
  - policy: 法令・基本方針・計画・指定 (鳥獣保護管理法・指定管理鳥獣化など)
  - budget: 予算・補助金・交付金
  - guidance: ガイドライン・通知・運用指針
  - report: 統計・調査結果・レポート公表
  - meeting: 審議会・検討会・委員会開催
  - press: その他の発表
- summary は本文未読でも妥当な 60〜120 字の日本語要約。タイトルを読み解いて推定して構わない (推測である旨は書かない)

=== items ===
${lines}
=== end ===

すべての item について 1 件ずつ判定し、items 配列で返す。要素数は入力と同じにすること。`;
}

export async function classifyWithGemini(
  candidates: ParsedItem[],
): Promise<ClassifiedResult[]> {
  if (candidates.length === 0) return [];
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY required");
  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: buildClassifyPrompt(candidates) }] }],
      generationConfig: {
        maxOutputTokens: 32768,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
      },
    }),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`gemini HTTP ${res.status}: ${err.slice(0, 400)}`);
  }
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!text) return [];
  const parsed = JSON.parse(text) as { items?: ClassifiedResult[] };
  return Array.isArray(parsed.items) ? parsed.items : [];
}

export function toAnnouncement(
  item: ParsedItem,
  classified: ClassifiedResult,
  now: number,
): GovAnnouncement {
  return {
    id: `${item.ministry}:${item.url}`,
    ministry: item.ministry,
    date: item.date,
    title: item.title,
    url: item.url,
    tag: item.tag,
    category: classified.category,
    summary: classified.summary,
    ingestedAt: now,
  };
}

export const MINISTRY_LABEL: Record<GovMinistry, string> = {
  env: "環境省",
  maff: "農林水産省",
  rinya: "林野庁",
};

export const CATEGORY_LABEL: Record<GovAnnouncement["category"], string> = {
  policy: "政策・法令",
  budget: "予算・補助金",
  guidance: "ガイドライン",
  report: "統計・レポート",
  meeting: "審議会・会議",
  press: "発表",
};
