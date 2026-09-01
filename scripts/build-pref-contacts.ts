#!/usr/bin/env tsx
/**
 * 47 都道府県の「鳥獣・クマ担当課」連絡先リストを作る。
 *
 * なぜ市町村と別に要るのか:
 * 市町村 1,739 件に個別に当たるより、県の鳥獣被害対策担当に 1 本通すほうが速い。
 * 県は市町村向けの連絡会・メーリングリストを持っていて、「県から紹介された」状態で
 * 市町村に届く。1 件通れば県内数十市町村にまとめてリーチできる。
 *
 * データの出どころ (新規収集はしない):
 *   - src/data/data-sources.ts   … 県公式のクマ情報ページ URL (出没データ収集で検証済み)
 *   - data/muni-contacts.json    … 県内の段 A/B 市町村数 = 話を持ちかける根拠
 *   - PREF_SEED (下記)           … data-sources に県公式 URL が無い 14 県の補完
 *
 * 実行:
 *   npx tsx --env-file-if-exists=.env.local scripts/build-pref-contacts.ts
 *   npx tsx --env-file-if-exists=.env.local scripts/build-pref-contacts.ts --pref=秋田県 --refresh
 *
 * 出力: data/pref-contacts.csv / .json / -cache.json
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { DATA_SOURCES, type BearStatus } from "../src/data/data-sources";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import {
  allowedByRobots,
  callGemini,
  extractLinkHints,
  htmlToText,
  politeFetch,
  trimForPrompt,
  type Cache,
  type CacheEntry,
} from "./lib/contact-extract";

const OUT_DIR = join(process.cwd(), "data");
const CSV_PATH = join(OUT_DIR, "pref-contacts.csv");
const JSON_PATH = join(OUT_DIR, "pref-contacts.json");
const CACHE_PATH = join(OUT_DIR, "pref-contacts-cache.json");
const MUNI_JSON = join(OUT_DIR, "muni-contacts.json");

/**
 * data-sources.ts に県公式ドメインの URL が無い県の補完。
 * bear を持つのは、クマがいるのに data-sources 側が外部サービス (クマダス等) 
 * しか持っていない県。それ以外は生息域外なので公式トップだけ。
 */
const PREF_SEED: Record<string, { home: string; bear?: string }> = {
  // クマ生息県。県公式のクマ情報ページを明示 (2026-09-01 検索で確認)
  秋田県: { home: "https://www.pref.akita.lg.jp/", bear: "https://www.pref.akita.lg.jp/pages/archive/23295" },
  山梨県: { home: "https://www.pref.yamanashi.jp/", bear: "https://www.pref.yamanashi.jp/shizen/kuma2.html" },
  // data-sources.ts の登録 URL が 404 になっていた県 (2026-09-01 時点)。
  // 出没データ収集側とは用途が違う (宛先を知りたいだけ) のでここで上書きする。
  島根県: { home: "https://www.pref.shimane.lg.jp/", bear: "https://www.pref.shimane.lg.jp/industry/norin/choujyu_taisaku/kuma_higaitaisaku.html" },
  滋賀県: { home: "https://www.pref.shiga.lg.jp/", bear: "https://www.pref.shiga.lg.jp/ippan/kankyoshizen/shizen/322859.html" },
  鳥取県: { home: "https://www.pref.tottori.lg.jp/", bear: "https://www.pref.tottori.lg.jp/275748.htm" },
  // 以下はクマ生息域外。公式トップの代表窓口が取れれば十分
  千葉県: { home: "https://www.pref.chiba.lg.jp/" },
  香川県: { home: "https://www.pref.kagawa.lg.jp/" },
  愛媛県: { home: "https://www.pref.ehime.jp/" },
  高知県: { home: "https://www.pref.kochi.lg.jp/" },
  福岡県: { home: "https://www.pref.fukuoka.lg.jp/" },
  佐賀県: { home: "https://www.pref.saga.lg.jp/" },
  長崎県: { home: "https://www.pref.nagasaki.jp/" },
  熊本県: { home: "https://www.pref.kumamoto.jp/" },
  大分県: { home: "https://www.pref.oita.jp/" },
  宮崎県: { home: "https://www.pref.miyazaki.lg.jp/" },
  鹿児島県: { home: "https://www.pref.kagoshima.jp/" },
  沖縄県: { home: "https://www.pref.okinawa.jp/" },
};

type PrefRow = {
  prefCode: string;
  prefName: string;
  bearStatus: BearStatus | "unknown";
  homeUrl: string;
  bearUrl: string;
  sightings365: number;
  muniTierA: number;
  muniTierB: number;
  muniTotal: number;
};

// ────────────────────────────────────────
// 引数
// ────────────────────────────────────────
const argv = process.argv.slice(2);
const arg = (name: string) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : undefined;
};
const flag = (name: string) => argv.includes(`--${name}`);
const PREF = arg("pref");
const REFRESH = flag("refresh");
const NO_FETCH = flag("no-fetch");
const CONCURRENCY = Math.max(1, Number(arg("concurrency") ?? 4));

// ────────────────────────────────────────
// 行の組み立て
// ────────────────────────────────────────
function buildRows(): PrefRow[] {
  // 県コード → 県名
  const prefs = new Map<string, string>();
  for (const m of JAPAN_MUNICIPALITIES) if (!prefs.has(m.prefCode)) prefs.set(m.prefCode, m.prefName);

  // 市町村リストから県内の状況を持ってくる (話を持ちかける根拠になる)
  type MuniRow = { prefName: string; tier: string; sightings365: number };
  let muniRows: MuniRow[] = [];
  if (existsSync(MUNI_JSON)) {
    muniRows = (JSON.parse(readFileSync(MUNI_JSON, "utf8")) as { rows: MuniRow[] }).rows;
  } else {
    console.warn("[pref] data/muni-contacts.json が無いので県内の集計は 0 になります");
  }

  const rows: PrefRow[] = [];
  for (const [prefCode, prefName] of [...prefs].sort()) {
    const sources = DATA_SOURCES.filter((s) => s.prefCode === prefCode);
    // 県公式ドメインの URL だけを候補にする (Google マイマップ等の外部は宛先にならない)
    const officialUrls = sources
      .flatMap((s) => s.urls)
      .filter((u) => /\.lg\.jp|pref\./.test(u.url));
    const seed = PREF_SEED[prefName];

    const bearUrl =
      seed?.bear ?? (officialUrls.find((u) => u.role === "list") ?? officialUrls[0])?.url ?? "";
    let homeUrl = seed?.home ?? "";
    if (!homeUrl && officialUrls[0]) {
      try {
        homeUrl = new URL(officialUrls[0].url).origin + "/";
      } catch {
        homeUrl = "";
      }
    }

    // 生息状況は「いる」が一つでもあればそれを採る
    const statuses = sources.map((s) => s.bearStatus);
    const bearStatus: BearStatus | "unknown" = statuses.includes("present")
      ? "present"
      : statuses.includes("rare")
        ? "rare"
        : (statuses[0] ?? "unknown");

    const inPref = muniRows.filter((m) => m.prefName === prefName);
    rows.push({
      prefCode,
      prefName,
      bearStatus,
      homeUrl,
      bearUrl,
      sightings365: inPref.reduce((a, m) => a + (m.sightings365 || 0), 0),
      muniTierA: inPref.filter((m) => m.tier === "A").length,
      muniTierB: inPref.filter((m) => m.tier === "B").length,
      muniTotal: inPref.length,
    });
  }

  // 県内の出没件数が多い順 = 話が通りやすい順
  rows.sort((a, b) => b.sightings365 - a.sightings365 || a.prefCode.localeCompare(b.prefCode));
  return rows;
}

// ────────────────────────────────────────
// 抽出
// ────────────────────────────────────────
function buildPrompt(row: PrefRow, url: string, pageText: string, linkHints: string): string {
  return `都道府県の公式ページから「お問い合わせ先」を抜き出すツールです。
対象: ${row.prefName}
ページ URL: ${url}

ルール:
- ページに書かれている情報だけを使う。推測・補完は禁止。無いものは空文字。
- 探しているのは **鳥獣・クマの担当課** (自然保護課 / 自然環境課 / みどり自然課 /
  野生生物課 / 森林保全課 / 農業振興課 鳥獣対策室 など、県によって名称が違う)。
- 複数の窓口が載っている場合は、鳥獣・クマ・野生生物に最も近い課を 1 つ選ぶ。
  該当が無ければページ末尾のお問い合わせ先を採る。
- 部・課・室・班まで書かれていれば全部 deptName に入れる (例: 生活環境部 自然保護課 鳥獣保護班)。
- 代表電話しか無い場合は tel に入れ、confidence は low にする。
- responseSchema の説明文をそのまま値にコピーしないこと。

=== リンク候補 (href 付き) ===
${linkHints || "(なし)"}

=== ページ本文 ===
${trimForPrompt(pageText)}
=== 終了 ===`;
}

async function fetchAndExtract(
  row: PrefRow,
  url: string,
  apiKey: string,
  cache: Cache,
): Promise<boolean> {
  if (!(await allowedByRobots(url))) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "robots" };
    console.log(`  [robots] ${row.prefName}`);
    return false;
  }
  const html = await politeFetch(url);
  if (!html) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "fetch" };
    console.log(`  [fetch失敗] ${row.prefName} ${url}`);
    return false;
  }
  const text = htmlToText(html);
  if (text.length < 100) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "empty" };
    return false;
  }
  const prompt = buildPrompt(row, url, text, extractLinkHints(html, url));
  const data = await callGemini(apiKey, row.prefName, prompt);
  if (!data) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "gemini" };
    return false;
  }
  cache.entries[url] = { url, fetchedAt: Date.now(), ok: true, data };
  console.log(
    `  ✓ ${row.prefName} — ${data.deptName || "(課不明)"} / ${data.tel || "TEL無"} / ${data.email || (data.contactFormUrl ? "フォーム" : "連絡先無")} [${data.confidence}]`,
  );
  return true;
}

async function processRow(row: PrefRow, apiKey: string, cache: Cache): Promise<void> {
  const urls = [row.bearUrl, row.homeUrl].filter(Boolean).filter((u, i, a) => a.indexOf(u) === i);
  for (const url of urls) {
    if (!REFRESH && cache.entries[url]?.ok) return;
    if (await fetchAndExtract(row, url, apiKey, cache)) return;
  }
}

function pickEntry(row: PrefRow, cache: Cache): CacheEntry | undefined {
  const urls = [row.bearUrl, row.homeUrl].filter(Boolean);
  return urls.map((u) => cache.entries[u]).find((e) => e?.ok) ?? urls.map((u) => cache.entries[u]).find(Boolean);
}

// ────────────────────────────────────────
// 出力
// ────────────────────────────────────────
const HEADERS = [
  "順位", "都道府県", "県コード", "生息状況",
  "県内出没_直近1年", "段A市町村数", "段B市町村数", "市町村数",
  "担当課", "電話", "FAX", "メール", "問い合わせフォーム", "郵便番号", "住所",
  "県公式HP", "クマ情報ページ", "抽出元URL", "抽出確度", "抽出日", "備考",
];

const STATUS_JA: Record<string, string> = {
  present: "生息",
  rare: "希少",
  extinct: "絶滅",
  absent: "生息なし",
  unknown: "不明",
};

/** ミリ秒を JST のカレンダー日付にする */
function jstDateOf(ms: number): string {
  return new Date(ms + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function csvCell(v: string | number): string {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function outputRows(rows: PrefRow[], cache: Cache) {
  const out = rows.map((row, i) => {
    const entry = pickEntry(row, cache);
    const d = entry?.ok ? entry.data : undefined;
    const notes: string[] = [];
    if (!row.bearUrl) notes.push("クマ情報ページ未収録");
    if (entry && !entry.ok) notes.push(`未取得(${entry.reason})`);
    if (!entry) notes.push("未処理");
    return {
      rank: i + 1,
      prefName: row.prefName,
      prefCode: row.prefCode,
      bearStatus: STATUS_JA[row.bearStatus] ?? row.bearStatus,
      sightings365: row.sightings365,
      muniTierA: row.muniTierA,
      muniTierB: row.muniTierB,
      muniTotal: row.muniTotal,
      deptName: d?.deptName ?? "",
      tel: d?.tel ?? "",
      fax: d?.fax ?? "",
      email: d?.email ?? "",
      contactFormUrl: d?.contactFormUrl ?? "",
      postalCode: d?.postalCode ?? "",
      address: d?.address ?? "",
      homeUrl: row.homeUrl,
      bearUrl: row.bearUrl,
      extractedFrom: entry?.ok ? entry.url : "",
      confidence: d?.confidence ?? "",
      extractedAt: entry?.ok ? jstDateOf(entry.fetchedAt) : "",
      note: notes.join(" / "),
    };
  });

  mkdirSync(OUT_DIR, { recursive: true });
  const lines = [HEADERS.join(",")];
  for (const r of out) {
    lines.push(
      [
        r.rank, r.prefName, r.prefCode, r.bearStatus,
        r.sightings365, r.muniTierA, r.muniTierB, r.muniTotal,
        r.deptName, r.tel, r.fax, r.email, r.contactFormUrl, r.postalCode, r.address,
        r.homeUrl, r.bearUrl, r.extractedFrom, r.confidence, r.extractedAt, r.note,
      ].map(csvCell).join(","),
    );
  }
  writeFileSync(CSV_PATH, "﻿" + lines.join("\n") + "\n", "utf8");
  writeFileSync(JSON_PATH, JSON.stringify({ generatedAt: Date.now(), rows: out }, null, 1) + "\n", "utf8");

  const bear = out.filter((r) => r.bearStatus === "生息" || r.bearStatus === "希少");
  const reachable = (rs: typeof out) => rs.filter((r) => r.tel || r.email || r.contactFormUrl).length;
  console.log("");
  console.log(`[pref] ${CSV_PATH}`);
  console.log(`[pref] ${JSON_PATH}`);
  console.log(`  47 都道府県 / 連絡先あり ${reachable(out)} 件`);
  console.log(`  クマ生息県 ${bear.length} / 連絡先あり ${reachable(bear)} / 担当課まで特定 ${bear.filter((r) => r.deptName).length}`);
  console.log(`  抽出確度 high ${out.filter((r) => r.confidence === "high").length} / medium ${out.filter((r) => r.confidence === "medium").length} / low ${out.filter((r) => r.confidence === "low").length}`);
}

// ────────────────────────────────────────
// main
// ────────────────────────────────────────
function loadCache(): Cache {
  if (!existsSync(CACHE_PATH)) return { version: 1, entries: {} };
  try {
    const c = JSON.parse(readFileSync(CACHE_PATH, "utf8")) as Cache;
    return c.entries ? c : { version: 1, entries: {} };
  } catch {
    return { version: 1, entries: {} };
  }
}

async function main(): Promise<void> {
  const rows = buildRows();
  const cache = loadCache();

  if (NO_FETCH) {
    outputRows(rows, cache);
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[pref] GEMINI_API_KEY が必要です (--no-fetch なら不要)");
    process.exit(1);
  }

  const targets = rows
    .filter((r) => (PREF ? r.prefName === PREF : true))
    .filter((r) => r.homeUrl || r.bearUrl)
    .filter((r) => REFRESH || !pickEntry(r, cache)?.ok);
  console.log(`[pref] 取得対象: ${targets.length} / 47 都道府県`);

  const queue = [...targets];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (;;) {
        const row = queue.shift();
        if (!row) return;
        await processRow(row, apiKey, cache);
      }
    }),
  );
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 1) + "\n", "utf8");

  outputRows(rows, cache);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
