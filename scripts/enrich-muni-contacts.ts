#!/usr/bin/env tsx
/**
 * 市区町村連絡先リストの穴を、公式 HP からの二段目クロールで埋める。
 *
 * 一段目 (build-muni-contacts.ts) は muni-official-links.ts の bearUrl を読むだけなので、
 *   - bearUrl が無い / 404 になっている自治体 → 公式 HP トップの代表窓口どまり
 *   - 政令市 → 区ページの bearUrl を拾って区役所の窓口になっている
 * という穴が残る。ここでは公式 HP から
 *   ① 生きているクマ・鳥獣ページ  ② 組織 (課) 一覧ページ
 * を探して 1 ホップ辿り、担当課・直通・住所を取り直す。
 *
 * ①で見つけた URL は discoveredBearUrl として記録する。muni-official-links.ts の
 * 死んだ bearUrl の差し替え元になる (= サイトの /place ページのリンク切れ修正)。
 * scripts/fix-muni-official-links.ts がこれを読む。
 *
 * 実行:
 *   npx tsx --env-file-if-exists=.env.local scripts/enrich-muni-contacts.ts            # 段A+B
 *   npx tsx --env-file-if-exists=.env.local scripts/enrich-muni-contacts.ts --tier=ABC
 *   npx tsx --env-file-if-exists=.env.local scripts/enrich-muni-contacts.ts --limit=20
 *
 * 出力: data/muni-contacts-stage2.json ("県名|市町村名" → 抽出結果)
 *       build-muni-contacts.ts --no-fetch がこれを読んで CSV/JSON に反映する。
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import {
  allowedByRobots,
  callGemini,
  extractLinkHints,
  htmlToText,
  politeFetch,
  trimForPrompt,
  type Extracted,
} from "./lib/contact-extract";

const OUT_DIR = join(process.cwd(), "data");
const MUNI_JSON = join(OUT_DIR, "muni-contacts.json");
const STAGE2_PATH = join(OUT_DIR, "muni-contacts-stage2.json");
const CACHE_PATH = join(OUT_DIR, "muni-contacts-cache.json");
const PREF_JSON = join(OUT_DIR, "pref-contacts.json");

export type Stage2Entry = {
  prefName: string;
  cityName: string;
  fetchedAt: number;
  ok: boolean;
  reason?: string;
  sourceUrl?: string;
  /** 公式 HP から辿って見つけた生きているクマ・鳥獣ページ */
  discoveredBearUrl?: string;
  data?: Extracted;
};

type Stage2File = { version: 1; entries: Record<string, Stage2Entry> };

type MuniRow = {
  prefName: string;
  cityName: string;
  tier: string;
  sightings365: number;
  homeUrl: string;
  bearUrl: string;
  deptName: string;
  tel: string;
  email: string;
  contactFormUrl: string;
  address: string;
  note: string;
};

/** 担当課ではなく総合窓口に届くアドレス。担当課宛として数えてはいけない */
export const GENERIC_MAIL = /^(info|koho|kouhou|kohoka|webmaster|master|soumu|somu|kikaku|mail|city|town|vill|village|contact|info1|kouhou1)$/i;

const argv = process.argv.slice(2);
const arg = (n: string) => {
  const hit = argv.find((a) => a.startsWith(`--${n}=`));
  return hit ? hit.slice(n.length + 3) : undefined;
};
const flag = (n: string) => argv.includes(`--${n}`);
const TIERS = (arg("tier") ?? "AB").split("");
/** 段に関係なく特定の自治体だけ回す (例: --only=神奈川県相模原市) */
const ONLY = arg("only");
const LIMIT = Number(arg("limit") ?? Number.POSITIVE_INFINITY);
const CONCURRENCY = Math.max(1, Number(arg("concurrency") ?? 6));
const REFRESH = flag("refresh");
/** muni-official-links.ts の bearUrl が死んでいる自治体だけを対象にする。
 *  連絡先を埋めるためではなく、サイトに出す「生きているクマ情報ページ」を探すため */
const DEAD_LINKS = flag("dead-links");
/** クマ生息県の自治体だけに絞る。生息域外に連絡先を集める意味は無い */
const BEAR_ONLY = flag("bear-prefs");

// ────────────────────────────────────────
// 公式 HP から辿る先を選ぶ
// ────────────────────────────────────────
type Candidate = { url: string; label: string; kind: "bear" | "org" };

const BEAR_RE = /クマ|くま|熊|ツキノワ|ヒグマ|鳥獣|有害鳥獣|野生動物/;
const ORG_RE = /組織|そしき|soshiki|部署|課の一覧|課一覧|組織から|部課|busho|section/i;
// 「熊本」「熊谷」など地名の誤検出を避ける
const BEAR_FALSE = /熊本|熊谷|熊野|球磨|熊取|米熊/;

function findCandidates(html: string, baseUrl: string): Candidate[] {
  const out: Candidate[] = [];
  const seen = new Set<string>();
  const re = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const href = m[1].trim();
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const label = htmlToText(m[2]).slice(0, 60);
    if (!label) continue;
    let abs: string;
    try {
      abs = new URL(href, baseUrl).toString().split("#")[0];
    } catch {
      continue;
    }
    // 外部サイトへは出ない (自治体ドメイン内だけを辿る)
    try {
      if (new URL(abs).hostname !== new URL(baseUrl).hostname) continue;
    } catch {
      continue;
    }
    if (seen.has(abs)) continue;
    seen.add(abs);

    // 壊れたパーセントエンコードのリンクがあるので decode は失敗しても続行する
    let decodedHref = href;
    try {
      decodedHref = decodeURIComponent(href);
    } catch {
      /* 生の href のまま判定する */
    }
    const hay = `${label} ${decodedHref}`;
    if (BEAR_RE.test(hay) && !BEAR_FALSE.test(label)) out.push({ url: abs, label, kind: "bear" });
    else if (ORG_RE.test(hay)) out.push({ url: abs, label, kind: "org" });
  }
  // クマ・鳥獣ページを優先。次に組織一覧
  return [...out.filter((c) => c.kind === "bear"), ...out.filter((c) => c.kind === "org")];
}

// ────────────────────────────────────────
// 抽出
// ────────────────────────────────────────
function buildPrompt(row: MuniRow, url: string, pageText: string, linkHints: string): string {
  return `自治体の公式ページから「クマ・鳥獣の担当課と連絡先」を抜き出すツールです。
対象自治体: ${row.prefName}${row.cityName}
ページ URL: ${url}

ルール:
- ページに書かれている情報だけを使う。推測・補完は禁止。無いものは空文字。
- 探しているのは **クマ・鳥獣・有害鳥獣の担当課**。名称は自治体で異なる
  (農林課 / 農林水産課 / 林政課 / 農地林務課 鳥獣対策班 / 環境課 / 生活環境課 /
   危機管理課 / 産業振興課 など)。組織一覧ページなら、その中から最も近い課を 1 つ選ぶ。
- 電話は代表交換台ではなく **その課の直通** を優先する。直通が無く代表しか
  書かれていない場合のみ代表を入れ、confidence を low にする。
- **このページがクマ・鳥獣と無関係な部署 (公共交通・観光・税務・戸籍など) の
  ページで、鳥獣担当の手がかりが無いなら deptName を空文字にする。**
  無関係な課を「担当課」として返してはいけない。
- 住所・郵便番号は庁舎のものを入れる。
- ${row.note.includes("政令市") ? "政令指定都市である。区役所ではなく **本庁** の担当課を選ぶこと。" : ""}
- responseSchema の説明文をそのまま値にコピーしないこと。

=== リンク候補 (href 付き) ===
${linkHints || "(なし)"}

=== ページ本文 ===
${trimForPrompt(pageText)}
=== 終了 ===`;
}

async function enrich(row: MuniRow, apiKey: string): Promise<Stage2Entry> {
  const base: Stage2Entry = {
    prefName: row.prefName,
    cityName: row.cityName,
    fetchedAt: Date.now(),
    ok: false,
  };
  if (!row.homeUrl) return { ...base, reason: "no-home" };
  if (!(await allowedByRobots(row.homeUrl))) return { ...base, reason: "robots" };

  const homeHtml = await politeFetch(row.homeUrl);
  if (!homeHtml) return { ...base, reason: "home-fetch" };

  const candidates = findCandidates(homeHtml, row.homeUrl).slice(0, 3);
  // 担当課が取れなくても、生きているクマ情報ページに辿り着けたなら URL は残す
  // (muni-official-links.ts の死んだリンクの差し替え先になる)
  let liveBearUrl: string | undefined;
  for (const cand of candidates) {
    if (!(await allowedByRobots(cand.url))) continue;
    const html = await politeFetch(cand.url);
    if (!html) continue;
    const text = htmlToText(html);
    if (text.length < 200) continue;
    if (cand.kind === "bear" && !liveBearUrl) liveBearUrl = cand.url;

    const prompt = buildPrompt(row, cand.url, text, extractLinkHints(html, cand.url));
    const data = await callGemini(apiKey, `${row.prefName}${row.cityName}`, prompt);
    if (!data || !data.deptName) continue;

    console.log(
      `  ✓ ${row.prefName}${row.cityName} — ${data.deptName} / ${data.tel || "TEL無"} [${data.confidence}] ← ${cand.kind}:${cand.label.slice(0, 20)}`,
    );
    return {
      ...base,
      ok: true,
      sourceUrl: cand.url,
      discoveredBearUrl: cand.kind === "bear" ? cand.url : liveBearUrl,
      data,
    };
  }
  if (liveBearUrl) {
    console.log(`  ~ ${row.prefName}${row.cityName} 担当課は不明だが生きているクマページを発見`);
    return { ...base, reason: "url-only", discoveredBearUrl: liveBearUrl };
  }
  console.log(`  − ${row.prefName}${row.cityName} 手がかりなし (候補 ${candidates.length})`);
  return { ...base, reason: "no-candidate" };
}

// ────────────────────────────────────────
// main
// ────────────────────────────────────────
function loadStage2(): Stage2File {
  if (!existsSync(STAGE2_PATH)) return { version: 1, entries: {} };
  try {
    const f = JSON.parse(readFileSync(STAGE2_PATH, "utf8")) as Stage2File;
    return f.entries ? f : { version: 1, entries: {} };
  } catch {
    return { version: 1, entries: {} };
  }
}

/** クマが生息する都道府県 (pref-contacts.json の生息状況より) */
function bearPrefs(): Set<string> {
  if (!existsSync(PREF_JSON)) return new Set();
  const rows = (JSON.parse(readFileSync(PREF_JSON, "utf8")) as {
    rows: { prefName: string; bearStatus: string }[];
  }).rows;
  return new Set(rows.filter((r) => r.bearStatus === "生息" || r.bearStatus === "希少").map((r) => r.prefName));
}

/** 一段目で bearUrl の取得に失敗した自治体 (= サイトが死んだリンクを出している) */
function deadBearUrls(): Set<string> {
  if (!existsSync(CACHE_PATH)) return new Set();
  const entries = (JSON.parse(readFileSync(CACHE_PATH, "utf8")) as {
    entries: Record<string, { ok: boolean }>;
  }).entries;
  return new Set(Object.entries(entries).filter(([, e]) => !e.ok).map(([u]) => u));
}

/** 埋める価値がある行か (担当課不明 / 連絡先なし / 住所なし / 汎用メールどまり / 政令市) */
function needsEnrichment(r: MuniRow): boolean {
  const generic = r.email ? GENERIC_MAIL.test(r.email.split("@")[0]) : false;
  return (
    !r.deptName ||
    (!r.tel && !r.email && !r.contactFormUrl) ||
    !r.address ||
    generic ||
    r.note.includes("政令市")
  );
}

async function main(): Promise<void> {
  const rows = (JSON.parse(readFileSync(MUNI_JSON, "utf8")) as { rows: MuniRow[] }).rows;
  const stage2 = loadStage2();

  const dead = DEAD_LINKS ? deadBearUrls() : new Set<string>();
  const bears = BEAR_ONLY ? bearPrefs() : null;
  const targets = rows
    .filter((r) => (bears ? bears.has(r.prefName) : true))
    .filter((r) =>
      ONLY
        ? `${r.prefName}${r.cityName}` === ONLY
        : DEAD_LINKS
          ? Boolean(r.bearUrl) && dead.has(r.bearUrl)
          : TIERS.includes(r.tier),
    )
    .filter((r) => (ONLY || DEAD_LINKS ? true : needsEnrichment(r)))
    .filter((r) => REFRESH || !stage2.entries[`${r.prefName}|${r.cityName}`]?.ok)
    .slice(0, LIMIT);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[enrich] GEMINI_API_KEY が必要です");
    process.exit(1);
  }
  console.log(`[enrich] 対象 ${targets.length} 件 (段 ${TIERS.join("")} / 同時 ${CONCURRENCY})`);

  let done = 0;
  const queue = [...targets];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (;;) {
        const row = queue.shift();
        if (!row) return;
        const entry = await enrich(row, apiKey);
        stage2.entries[`${row.prefName}|${row.cityName}`] = entry;
        done += 1;
        if (done % 20 === 0) {
          mkdirSync(OUT_DIR, { recursive: true });
          writeFileSync(STAGE2_PATH, JSON.stringify(stage2, null, 1) + "\n", "utf8");
          console.log(`[enrich] ${done}/${targets.length}`);
        }
      }
    }),
  );

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(STAGE2_PATH, JSON.stringify(stage2, null, 1) + "\n", "utf8");

  const all = Object.values(stage2.entries);
  console.log("");
  console.log(`[enrich] ${STAGE2_PATH}`);
  console.log(`  成功 ${all.filter((e) => e.ok).length} / ${all.length}`);
  console.log(`  生きているクマ情報ページを発見 ${all.filter((e) => e.discoveredBearUrl).length} 件`);
  console.log("  次: npx tsx scripts/build-muni-contacts.ts --no-fetch で CSV に反映");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
