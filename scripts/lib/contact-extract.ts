/**
 * 自治体・都道府県の公式ページから「お問い合わせ先」を抜き出す共通処理。
 *
 * build-muni-contacts.ts (市区町村) と build-pref-contacts.ts (都道府県) で共用する。
 * どちらも「公式ページを取ってきて、末尾のお問い合わせブロックを Gemini で構造化する」
 * という同じ形をしているので、取得の作法 (robots / 間隔 / UA) と抽出スキーマを 1 か所に置く。
 *
 * 節度:
 *   - robots.txt を尊重 (Disallow に当たる URL は取得しない)
 *   - 同一オリジンへは 1.5 秒以上あけ、UA に連絡先を明記
 *   - フォームの自動送信は **しない**。フォーム URL は人が開くために記録するだけ
 */

export const UA = "KumaWatch/1.0 (+https://kuma-watch.jp; contact directory build)";
const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const PER_ORIGIN_INTERVAL_MS = 1500;
export const PAGE_TEXT_MAX = 14000;

export type Extracted = {
  deptName: string;
  tel: string;
  fax: string;
  email: string;
  contactFormUrl: string;
  postalCode: string;
  address: string;
  confidence: "high" | "medium" | "low";
};

export type CacheEntry = {
  url: string;
  fetchedAt: number;
  ok: boolean;
  reason?: string; // 失敗理由 (robots / fetch / empty / gemini)
  data?: Extracted;
};

export type Cache = { version: 1; entries: Record<string, CacheEntry> };

// ────────────────────────────────────────
// robots.txt (オリジン単位でキャッシュ)
// ────────────────────────────────────────
const robotsCache = new Map<string, string[]>();

async function disallowedPaths(origin: string): Promise<string[]> {
  const hit = robotsCache.get(origin);
  if (hit) return hit;
  let rules: string[] = [];
  try {
    const r = await fetch(`${origin}/robots.txt`, {
      headers: { "User-Agent": UA },
      signal: AbortSignal.timeout(10000),
    });
    if (r.ok) {
      const text = await r.text();
      let applies = false;
      for (const raw of text.split(/\r?\n/)) {
        const line = raw.replace(/#.*$/, "").trim();
        if (!line) continue;
        const ua = /^user-agent\s*:\s*(.+)$/i.exec(line);
        if (ua) {
          applies = ua[1].trim() === "*";
          continue;
        }
        if (!applies) continue;
        const dis = /^disallow\s*:\s*(.*)$/i.exec(line);
        if (dis && dis[1].trim()) rules.push(dis[1].trim());
      }
    }
  } catch {
    rules = []; // 取れなければ許可扱い
  }
  robotsCache.set(origin, rules);
  return rules;
}

export async function allowedByRobots(url: string): Promise<boolean> {
  try {
    const u = new URL(url);
    const rules = await disallowedPaths(u.origin);
    return !rules.some((p) => p !== "/" ? u.pathname.startsWith(p) : true);
  } catch {
    return false;
  }
}

// ────────────────────────────────────────
// ページ取得 (オリジンごとに間隔をあける)
// ────────────────────────────────────────
const lastHitByOrigin = new Map<string, number>();

export async function politeFetch(url: string): Promise<string | null> {
  const origin = new URL(url).origin;
  const wait = (lastHitByOrigin.get(origin) ?? 0) + PER_ORIGIN_INTERVAL_MS - Date.now();
  if (wait > 0) await new Promise((res) => setTimeout(res, wait));
  lastHitByOrigin.set(origin, Date.now());
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent": UA,
        "Accept-Language": "ja",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) return null;
    const ct = r.headers.get("content-type") ?? "";
    if (!ct.includes("html")) return null;
    return await r.text();
  } catch {
    return null;
  }
}

// ────────────────────────────────────────
// HTML → 本文テキスト + 手がかりリンク
// お問い合わせブロックはページ末尾にあることが多いので、長い場合は末尾を優先して残す
// ────────────────────────────────────────
export function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|tr|h[1-6]|section|address|dd|dt)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/[ \t　]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .trim();
}

export function trimForPrompt(text: string): string {
  if (text.length <= PAGE_TEXT_MAX) return text;
  // 先頭 (どの課のページかの手がかり) + 末尾 (お問い合わせブロック)
  const head = Math.floor(PAGE_TEXT_MAX * 0.35);
  const tail = PAGE_TEXT_MAX - head;
  return `${text.slice(0, head)}\n…(中略)…\n${text.slice(-tail)}`;
}

/** mailto: と「問い合わせ」系リンクを href ごと拾う (テキスト化で消えるため) */
export function extractLinkHints(html: string, baseUrl: string): string {
  const hints: string[] = [];
  const seen = new Set<string>();
  const re = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const href = m[1].trim();
    const label = htmlToText(m[2]).slice(0, 40);
    const isMail = href.toLowerCase().startsWith("mailto:");
    const isContact = /問\s*い?\s*合|問合|お問|contact|inquiry|form/i.test(href + label);
    if (!isMail && !isContact) continue;
    let abs = href;
    if (!isMail) {
      try {
        abs = new URL(href, baseUrl).toString();
      } catch {
        continue;
      }
    }
    if (seen.has(abs)) continue;
    seen.add(abs);
    hints.push(`${label || "(no text)"} => ${abs}`);
    if (hints.length >= 25) break;
  }
  return hints.join("\n");
}


export const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    deptName: {
      type: "string",
      description:
        "このページのお問い合わせ先として書かれている部署名・係名 (例: 農林課 鳥獣対策係)。書かれていなければ空文字",
    },
    tel: {
      type: "string",
      description:
        "上記部署の電話番号。市外局番からハイフン区切り (例: 0187-43-1111)。内線があれば末尾に (内線123)。書かれていなければ空文字",
    },
    fax: { type: "string", description: "FAX 番号。無ければ空文字" },
    email: {
      type: "string",
      description:
        "メールアドレス。全角＠や (at) 表記は半角 @ に直す。画像でしか示されていない場合は空文字",
    },
    contactFormUrl: {
      type: "string",
      description:
        "この部署宛の問い合わせフォームの絶対 URL。リンク候補から選ぶ。サイト全体の総合窓口しか無い場合はそれ。無ければ空文字",
    },
    postalCode: { type: "string", description: "郵便番号 (例: 010-8560)。無ければ空文字" },
    address: {
      type: "string",
      description: "住所 (都道府県から。庁舎名・階があれば含む)。無ければ空文字",
    },
    confidence: {
      type: "string",
      enum: ["high", "medium", "low"],
      description:
        "high=クマ/鳥獣の担当部署が明示 / medium=部署名はあるがクマ担当か不明 / low=代表窓口のみ",
    },
  },
  required: [
    "deptName",
    "tel",
    "fax",
    "email",
    "contactFormUrl",
    "postalCode",
    "address",
    "confidence",
  ],
} as const;


export async function callGemini(
  apiKey: string,
  label: string,
  prompt: string,
): Promise<Extracted | null> {
  try {
    const r = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: prompt }] },
        ],
        generationConfig: {
          maxOutputTokens: 4096,
          responseMimeType: "application/json",
          responseSchema: RESPONSE_SCHEMA,
          thinkingConfig: { thinkingLevel: "low" },
        },
      }),
      signal: AbortSignal.timeout(90000),
    });
    if (!r.ok) {
      console.error(`  [${label}] gemini ${r.status}: ${(await r.text()).slice(0, 200)}`);
      return null;
    }
    const data = (await r.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) return null;
    const parsed = JSON.parse(text) as Extracted;
    return normalizeExtracted(parsed);
  } catch (e) {
    console.error(`  [${label}] gemini error`, e instanceof Error ? e.message : e);
    return null;
  }
}

export function normalizeExtracted(e: Extracted): Extracted {
  const clean = (s: unknown) => (typeof s === "string" ? s.trim() : "");
  const email = clean(e.email)
    .replace(/＠/g, "@")
    .replace(/\s*\(\s*at\s*\)\s*/gi, "@")
    .replace(/\s+/g, "");
  return {
    deptName: clean(e.deptName),
    tel: clean(e.tel).replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0)),
    fax: clean(e.fax),
    // メール形式でないものは捨てる (「担当課まで」等が入ることがある)
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? email : "",
    contactFormUrl: /^https?:\/\//.test(clean(e.contactFormUrl)) ? clean(e.contactFormUrl) : "",
    postalCode: clean(e.postalCode),
    address: clean(e.address),
    confidence: (["high", "medium", "low"] as const).includes(e.confidence)
      ? e.confidence
      : "low",
  };
}

