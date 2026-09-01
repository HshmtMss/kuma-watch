#!/usr/bin/env tsx
/**
 * 全国市区町村の「公式 HP + クマ担当窓口」リストを作る。
 *
 * ねらい: 自治体への案内 (DM) を送るための宛先台帳。ゼロから集めるのではなく、
 * 既にある資産を組み合わせる:
 *   - src/data/japan-municipalities.ts   … 全国 1,896 件のマスター (総務省コード)
 *   - src/data/muni-official-links.ts    … homeUrl 1,895 / bearUrl 727 (収集済み)
 *   - public/data/sightings.json         … 出没実績 → 優先度 (うちにしかない情報)
 *
 * 足りないのは連絡先だけ。自治体のクマ関連ページ (bearUrl) の末尾には、ほぼ必ず
 * 「お問い合わせ／◯◯課／電話／メール」のブロックがある。しかもそれは代表窓口では
 * なく **クマ担当課そのもの**。ここを抜くのが最短で最も精度が高い。
 * bearUrl が無い自治体は homeUrl を見て代表窓口 (住所・代表電話) を拾う = 郵送用。
 *
 * 実行:
 *   npx tsx --env-file-if-exists=.env.local scripts/build-muni-contacts.ts --limit=10
 *   npx tsx --env-file-if-exists=.env.local scripts/build-muni-contacts.ts        # 全件
 *
 * 主なオプション:
 *   --limit=N        優先度上位 N 件だけ処理 (未処理分は空欄で CSV に載る)
 *   --pref=秋田県    県で絞る
 *   --min=1          出没件数 (直近1年) の下限。既定 0 = 全件
 *   --concurrency=3  同時 fetch 数
 *   --refresh        キャッシュを無視して取り直す
 *   --no-fetch       取得せずキャッシュだけで CSV を書き直す
 *
 * 出力:
 *   data/muni-contacts.csv        … Excel 用 (UTF-8 BOM)
 *   data/muni-contacts.json       … プログラム用
 *   data/muni-contacts-cache.json … 抽出結果のキャッシュ (再実行は差分だけ)
 *
 * 節度:
 *   - robots.txt を尊重 (Disallow に当たる URL は取得しない)
 *   - 同一オリジンへは 1.5 秒以上あけ、UA に連絡先を明記
 *   - フォームの自動送信は **しない**。フォーム URL は人が開くために記録するだけ
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import { MUNI_OFFICIAL_LINKS } from "../src/data/muni-official-links";
import { analyticsMuniName } from "../src/lib/analytics-muni";
import { jstDaysAgo } from "../src/lib/jst-date";
import {
  allowedByRobots,
  callGemini,
  extractLinkHints,
  htmlToText,
  politeFetch,
  trimForPrompt,
  type Cache,
  type CacheEntry,
  type Extracted,
} from "./lib/contact-extract";


const OUT_DIR = join(process.cwd(), "data");
const CSV_PATH = join(OUT_DIR, "muni-contacts.csv");
const JSON_PATH = join(OUT_DIR, "muni-contacts.json");
const CACHE_PATH = join(OUT_DIR, "muni-contacts-cache.json");
const STAGE2_PATH = join(OUT_DIR, "muni-contacts-stage2.json");
const MANUAL_PATH = join(OUT_DIR, "muni-contacts-manual.json");

// ────────────────────────────────────────
// 型
// ────────────────────────────────────────
type Row = {
  prefName: string;
  cityName: string;
  cityCode: string;
  homeUrl: string;
  bearUrl: string;
  sightings365: number;
  sightingsTotal: number;
  wardsFolded: number; // 政令市で畳んだ区の数 (0 = 畳んでいない)
};

// ────────────────────────────────────────
// 引数
// ────────────────────────────────────────
const argv = process.argv.slice(2);
function arg(name: string): string | undefined {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : undefined;
}
const flag = (name: string) => argv.includes(`--${name}`);

const LIMIT = Number(arg("limit") ?? Number.POSITIVE_INFINITY);
const PREF = arg("pref");
const MIN_SIGHTINGS = Number(arg("min") ?? 0);
const CONCURRENCY = Math.max(1, Number(arg("concurrency") ?? 3));
const REFRESH = flag("refresh");
const RETRY_FAILED = flag("retry-failed");
const NO_FETCH = flag("no-fetch");

// ────────────────────────────────────────
// 政令指定都市の区 → 親市に畳む
// 対策の実施主体は市なので、案内の宛先も市に揃える。
// (東京 23 区は「市+区」の形ではないので畳まれない = 独立した自治体のまま)
// ────────────────────────────────────────
const SEIREI_PARENTS = new Set<string>();
for (const m of JAPAN_MUNICIPALITIES) {
  const mm = /^(.+?市).+区$/.exec(m.cityName);
  if (mm) SEIREI_PARENTS.add(`${m.prefName}|${mm[1]}`);
}
function foldSeirei(prefName: string, cityName: string): string {
  const mm = /^(.+?市).+区$/.exec(cityName);
  if (mm && SEIREI_PARENTS.has(`${prefName}|${mm[1]}`)) return mm[1];
  return cityName;
}

// ────────────────────────────────────────
// 出没件数 (優先度の根拠)
// 市町村名は analyticsMuniName で正規化してから数える。表記ゆれのまま数えると
// 「むつ市」と「むつ市大畑町地区」が別行になり順位が壊れる。
// ────────────────────────────────────────
type SightingRecord = {
  prefectureName?: string;
  cityName?: string;
  date?: string;
  lat?: number;
  lon?: number;
};

function loadSightingCounts(): {
  last365: Map<string, number>;
  total: Map<string, number>;
} {
  const last365 = new Map<string, number>();
  const total = new Map<string, number>();
  const path = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(path)) {
    console.warn("[contacts] sightings.json が無いので出没件数は 0 で出力します");
    return { last365, total };
  }
  const snap = JSON.parse(readFileSync(path, "utf8")) as { records?: SightingRecord[] };
  const records = snap.records ?? [];
  // 日付は JST で切る (レコードの date が JST カレンダー日付のため)
  const cutoff = jstDaysAgo(365);

  for (const r of records) {
    const pref = r.prefectureName ?? "";
    if (!pref) continue;
    const canonical = analyticsMuniName(pref, r.cityName ?? "", r);
    if (!canonical) continue;
    const key = `${pref}|${foldSeirei(pref, canonical)}`;
    total.set(key, (total.get(key) ?? 0) + 1);
    if (r.date && r.date >= cutoff) last365.set(key, (last365.get(key) ?? 0) + 1);
  }
  console.log(
    `[contacts] 出没件数を集計: ${records.length.toLocaleString()} 件 → ${total.size} 自治体`,
  );
  return { last365, total };
}

// ────────────────────────────────────────
// 行の組み立て
// ────────────────────────────────────────
function buildRows(): Row[] {
  const { last365, total } = loadSightingCounts();

  // 総務省コード: 政令市の親市には区のコードしか無いので、区コードの上 3 桁 + "00"
  // ではなく「最小の区コード」を代表として持たせる (照合用の目印として使うだけ)
  const codeByKey = new Map<string, string>();
  for (const m of JAPAN_MUNICIPALITIES) {
    const key = `${m.prefName}|${foldSeirei(m.prefName, m.cityName)}`;
    const prev = codeByKey.get(key);
    if (!prev || m.cityCode < prev) codeByKey.set(key, m.cityCode);
  }

  // muni-official-links を畳みながら集約
  type Acc = { homeUrls: string[]; bearUrls: string[]; wards: number };
  const acc = new Map<string, Acc>();
  for (const link of MUNI_OFFICIAL_LINKS) {
    const folded = foldSeirei(link.prefName, link.cityName);
    const key = `${link.prefName}|${folded}`;
    const a = acc.get(key) ?? { homeUrls: [], bearUrls: [], wards: 0 };
    if (link.homeUrl) a.homeUrls.push(link.homeUrl);
    if (link.bearUrl) a.bearUrls.push(link.bearUrl);
    if (folded !== link.cityName) a.wards += 1;
    acc.set(key, a);
  }

  const rows: Row[] = [];
  const seen = new Set<string>();
  for (const m of JAPAN_MUNICIPALITIES) {
    const folded = foldSeirei(m.prefName, m.cityName);
    const key = `${m.prefName}|${folded}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const a = acc.get(key);
    rows.push({
      prefName: m.prefName,
      cityName: folded,
      cityCode: codeByKey.get(key) ?? m.cityCode,
      // 政令市は区ページの URL しか無いのでサイト root に寄せる
      homeUrl: a?.wards ? siteRoot(a.homeUrls[0] ?? "") : (a?.homeUrls[0] ?? ""),
      // 区ごとの bearUrl は最短のものが最も一般的な階層 (= 市全体のページ) に近い
      bearUrl: (a?.bearUrls ?? []).slice().sort((x, y) => x.length - y.length)[0] ?? "",
      sightings365: last365.get(key) ?? 0,
      sightingsTotal: total.get(key) ?? 0,
      wardsFolded: a?.wards ?? 0,
    });
  }

  // 優先度順: 直近1年の出没件数 → 累計 → 県名
  rows.sort(
    (a, b) =>
      b.sightings365 - a.sightings365 ||
      b.sightingsTotal - a.sightingsTotal ||
      a.prefName.localeCompare(b.prefName, "ja"),
  );
  return rows;
}

function siteRoot(url: string): string {
  try {
    return new URL(url).origin + "/";
  } catch {
    return url;
  }
}

/** 案内を送る優先度の段。まとめて送る単位に使う */
function tier(sightings365: number): "A" | "B" | "C" | "D" {
  if (sightings365 >= 50) return "A";
  if (sightings365 >= 10) return "B";
  if (sightings365 >= 1) return "C";
  return "D";
}

// ────────────────────────────────────────
// Gemini で連絡先を構造化
// ────────────────────────────────────────
function buildPrompt(row: Row, url: string, pageText: string, linkHints: string): string {
  return `自治体の公式ページから「お問い合わせ先」を抜き出すツールです。
対象自治体: ${row.prefName}${row.cityName}
ページ URL: ${url}

ルール:
- ページに書かれている情報だけを使う。推測・補完は禁止。無いものは空文字。
- 複数の部署が載っている場合は、クマ・鳥獣・有害鳥獣・農林・環境・危機管理に
  最も近い担当を 1 つ選ぶ。該当が無ければページ末尾のお問い合わせ先を採る。
- 代表電話しか無い場合は tel に入れ、confidence は low にする。
- responseSchema の説明文をそのまま値にコピーしないこと。

=== リンク候補 (href 付き) ===
${linkHints || "(なし)"}

=== ページ本文 ===
${trimForPrompt(pageText)}
=== 終了 ===`;
}

// ────────────────────────────────────────
// キャッシュ
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

/**
 * 二段目クロール (enrich-muni-contacts.ts) の結果。
 * 一段目が担当課を取れなかった行を、公式 HP から辿った結果で置き換える。
 */
type Stage2Entry = {
  ok: boolean;
  sourceUrl?: string;
  discoveredBearUrl?: string;
  data?: Extracted;
};

/**
 * 手作業で補った連絡先 (data/muni-contacts-manual.json)。
 * クロールできない自治体 (ボット遮断・動的生成) はここでしか埋まらない。
 * 機械抽出より優先する — 人が根拠 URL を見て確認したものだから。
 */
type ManualEntry = Extracted & { source?: string; verifiedAt?: string };

function loadManual(): Record<string, ManualEntry> {
  if (!existsSync(MANUAL_PATH)) return {};
  try {
    return (JSON.parse(readFileSync(MANUAL_PATH, "utf8")) as { entries: Record<string, ManualEntry> })
      .entries ?? {};
  } catch {
    return {};
  }
}

function loadStage2(): Record<string, Stage2Entry> {
  if (!existsSync(STAGE2_PATH)) return {};
  try {
    return (JSON.parse(readFileSync(STAGE2_PATH, "utf8")) as { entries: Record<string, Stage2Entry> })
      .entries ?? {};
  } catch {
    return {};
  }
}

/** 担当課ではなく総合窓口に届くアドレス。担当課宛として数えない */
const GENERIC_MAIL =
  /^(info|koho|kouhou|kohoka|webmaster|master|soumu|somu|kikaku|mail|city|town|vill|village|contact|info1|kouhou1)$/i;

function saveCache(cache: Cache): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 1) + "\n", "utf8");
}

// ────────────────────────────────────────
// 1 自治体を処理
// ────────────────────────────────────────
async function processRow(
  row: Row,
  apiKey: string,
  cache: Cache,
): Promise<void> {
  // クマ情報ページを優先。2026-05 収集なのでリンク切れがあり、その場合は公式 HP に落とす
  const urls = [row.bearUrl, row.homeUrl].filter(Boolean).filter((u, i, a) => a.indexOf(u) === i);
  for (const url of urls) {
    if (!REFRESH && cache.entries[url]?.ok) return;
    if (!REFRESH && cache.entries[url] && !RETRY_FAILED) return;
    const got = await fetchAndExtract(row, url, apiKey, cache);
    if (got) return;
  }
}

/** 1 URL を取得して抽出。成功したら true。失敗理由はキャッシュに残す */
async function fetchAndExtract(
  row: Row,
  url: string,
  apiKey: string,
  cache: Cache,
): Promise<boolean> {

  if (!(await allowedByRobots(url))) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "robots" };
    console.log(`  [robots] ${row.prefName}${row.cityName}`);
    return false;
  }

  const html = await politeFetch(url);
  if (!html) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "fetch" };
    console.log(`  [fetch失敗] ${row.prefName}${row.cityName} ${url}`);
    return false;
  }

  const text = htmlToText(html);
  if (text.length < 100) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "empty" };
    return false;
  }

  const prompt = buildPrompt(row, url, text, extractLinkHints(html, url));
  const data = await callGemini(apiKey, `${row.prefName}${row.cityName}`, prompt);
  if (!data) {
    cache.entries[url] = { url, fetchedAt: Date.now(), ok: false, reason: "gemini" };
    return false;
  }
  cache.entries[url] = { url, fetchedAt: Date.now(), ok: true, data };
  console.log(
    `  ✓ ${row.prefName}${row.cityName} — ${data.deptName || "(部署不明)"} / ${data.tel || "TEL無"} / ${data.email || (data.contactFormUrl ? "フォーム" : "連絡先無")} [${data.confidence}]`,
  );
  return true;
}

// ────────────────────────────────────────
// CSV / JSON 出力
// ────────────────────────────────────────
const HEADERS = [
  "優先度",
  "段",
  "都道府県",
  "市区町村",
  "団体コード",
  "出没件数_直近1年",
  "出没件数_累計",
  "公式HP",
  "クマ情報ページ",
  "担当課",
  "電話",
  "FAX",
  "メール",
  "メール宛先",
  "問い合わせフォーム",
  "郵便番号",
  "住所",
  "到達手段",
  "郵送宛名",
  "抽出元URL",
  "抽出確度",
  "抽出日",
  "備考",
];

/** ミリ秒を JST のカレンダー日付にする */
function jstDateOf(ms: number): string {
  return new Date(ms + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/**
 * 「適切な部署に届く手段」を判定する。単に連絡先があるかではない。
 *   郵送 … 住所に加えて課名が要る。課名が無いと庁舎に届いても担当に回らない
 *   メール… 担当課宛のみ。info@/koho@ は広報どまりで転送は期待できない
 *   フォーム… 総合窓口に入る。用件を書けば回るが、部署は指定できない
 *   電話 … 直通なら担当に直接。代表しか無い場合は取り次ぎ
 */
function reachChannels(d: Extracted | undefined, deptName: string): string {
  if (!d) return "";
  const daihyo = /代表/.test(d.tel) || /[-(](1111|2111|3111)(\s|$|（|\()/.test(d.tel);
  const out: string[] = [];
  if (d.address && deptName) out.push("郵送");
  if (d.email && !GENERIC_MAIL.test(d.email.split("@")[0])) out.push("メール");
  if (d.contactFormUrl) out.push("フォーム");
  if (d.tel) out.push(daihyo ? "電話(代表)" : "電話(直通)");
  return out.join("・");
}

/** 封書の宛名。課名が無ければ役所宛まで (担当に回るかは保証できない) */
function postalName(cityName: string, deptName: string): string {
  const office = /[市町村]$/.test(cityName)
    ? `${cityName.replace(/^.+?郡/, "")}役場`
    : `${cityName}役所`;
  const base = /市$/.test(cityName) ? `${cityName}役所` : office;
  // 課名に「秋田市産業振興部」のように自治体名が入っていることがある。宛名で重複させない
  const bare = cityName.replace(/^.+?郡/, "");
  const dept = deptName.replace(new RegExp(`^${bare}(役所|役場)?\\s*`), "").trim();
  return dept ? `${base} ${dept} 御中` : `${base} 御中`;
}

function csvCell(v: string | number): string {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** 成功しているエントリを優先して返す (クマ情報ページ → 公式 HP の順) */
function pickEntry(row: Row, cache: Cache): CacheEntry | undefined {
  const urls = [row.bearUrl, row.homeUrl].filter(Boolean);
  return (
    urls.map((u) => cache.entries[u]).find((e) => e?.ok) ??
    urls.map((u) => cache.entries[u]).find(Boolean)
  );
}

function outputRows(rows: Row[], cache: Cache) {
  const stage2 = loadStage2();
  const manual = loadManual();
  const out = rows.map((row, i) => {
    const entry = pickEntry(row, cache);
    let url = entry?.url ?? row.bearUrl ?? row.homeUrl;
    let d = entry?.ok ? entry.data : undefined;
    const notes: string[] = [];
    if (row.wardsFolded) notes.push(`政令市: ${row.wardsFolded}区を市に集約`);
    if (!row.homeUrl) notes.push("公式HP未収録");
    if (entry && !entry.ok) notes.push(`未取得(${entry.reason})`);
    if (!entry && url) notes.push("未処理");

    // 二段目の結果を反映する。
    //  - 一段目が担当課を取れていない / 政令市で区役所を拾っている → 丸ごと置き換え
    //    (課名だけ別ページから混ぜると、課と電話が食い違うため塊で入れ替える)
    //  - それ以外 → 住所など空欄の補完だけ
    const key = `${row.prefName}|${row.cityName}`;
    const man = manual[key];
    const s2 = stage2[key];
    if (man) {
      d = man;
      url = man.source || url;
      notes.push("手作業で確認");
    } else if (s2?.ok && s2.data) {
      const wardLevel = row.wardsFolded > 0 && /区役所|区民/.test(d?.deptName ?? "");
      if (!d?.deptName || wardLevel) {
        d = s2.data;
        url = s2.sourceUrl ?? url;
        notes.push(wardLevel ? "二段目: 区役所→本庁に差し替え" : "二段目: 公式HPから担当課を特定");
      } else {
        d = {
          ...d,
          address: d.address || s2.data.address,
          postalCode: d.postalCode || s2.data.postalCode,
          fax: d.fax || s2.data.fax,
        };
      }
    }
    return {
      priority: i + 1,
      tier: tier(row.sightings365),
      prefName: row.prefName,
      cityName: row.cityName,
      cityCode: row.cityCode,
      sightings365: row.sightings365,
      sightingsTotal: row.sightingsTotal,
      homeUrl: row.homeUrl,
      bearUrl: row.bearUrl,
      deptName: d?.deptName ?? "",
      tel: d?.tel ?? "",
      fax: d?.fax ?? "",
      email: d?.email ?? "",
      // 担当課に直接届くか、広報などの総合窓口どまりか
      emailKind: d?.email ? (GENERIC_MAIL.test(d.email.split("@")[0]) ? "総合窓口" : "担当課") : "",
      contactFormUrl: d?.contactFormUrl ?? "",
      postalCode: d?.postalCode ?? "",
      address: d?.address ?? "",
      reach: reachChannels(d, d?.deptName ?? ""),
      postalName: d?.address && d?.deptName ? postalName(row.cityName, d.deptName) : "",
      extractedFrom: entry?.ok ? url : "",
      confidence: d?.confidence ?? "",
      extractedAt: man?.verifiedAt ?? (entry?.ok ? jstDateOf(entry.fetchedAt) : ""),
      note: notes.join(" / "),
    };
  });

  mkdirSync(OUT_DIR, { recursive: true });
  const lines = [HEADERS.join(",")];
  for (const r of out) {
    lines.push(
      [
        r.priority, r.tier, r.prefName, r.cityName, r.cityCode,
        r.sightings365, r.sightingsTotal, r.homeUrl, r.bearUrl,
        r.deptName, r.tel, r.fax, r.email, r.emailKind, r.contactFormUrl,
        r.postalCode, r.address, r.reach, r.postalName, r.extractedFrom, r.confidence,
        r.extractedAt, r.note,
      ].map(csvCell).join(","),
    );
  }
  writeFileSync(CSV_PATH, "﻿" + lines.join("\n") + "\n", "utf8");
  writeFileSync(
    JSON_PATH,
    JSON.stringify({ generatedAt: Date.now(), rows: out }, null, 1) + "\n",
    "utf8",
  );

  const withTel = out.filter((r) => r.tel).length;
  const withMail = out.filter((r) => r.email).length;
  const withDeptMail = out.filter((r) => r.emailKind === "担当課").length;
  const withForm = out.filter((r) => r.contactFormUrl).length;
  const reachable = out.filter((r) => r.tel || r.email || r.contactFormUrl).length;
  console.log("");
  console.log(`[contacts] ${CSV_PATH}`);
  console.log(`[contacts] ${JSON_PATH}`);
  console.log(`  自治体 ${out.length} 件 / 公式HP ${out.filter((r) => r.homeUrl).length} 件 / クマ情報ページ ${out.filter((r) => r.bearUrl).length} 件`);
  console.log(`  連絡先あり ${reachable} 件 (電話 ${withTel} / メール ${withMail} (担当課宛 ${withDeptMail}) / フォーム ${withForm})`);
  console.log(`  担当課まで特定 ${out.filter((r) => r.deptName).length} 件`);
  console.log(
    `  適切な部署に届く手段: 郵送 ${out.filter((r) => r.reach.includes("郵送")).length} / メール ${out.filter((r) => r.reach.includes("メール")).length} / フォーム ${out.filter((r) => r.reach.includes("フォーム")).length} / 電話直通 ${out.filter((r) => r.reach.includes("電話(直通)")).length}`,
  );
  for (const t of ["A", "B", "C", "D"] as const) {
    const g = out.filter((r) => r.tier === t);
    const ok = g.filter((r) => r.tel || r.email || r.contactFormUrl).length;
    console.log(`  段 ${t}: ${g.length} 件 (連絡先あり ${ok})`);
  }
}

// ────────────────────────────────────────
// main
// ────────────────────────────────────────
async function main(): Promise<void> {
  const rows = buildRows();
  console.log(`[contacts] 対象マスター: ${rows.length} 自治体 (政令市の区は市に集約)`);

  const cache = loadCache();
  const targets = rows
    .filter((r) => (PREF ? r.prefName === PREF : true))
    .filter((r) => r.sightings365 >= MIN_SIGHTINGS)
    .filter((r) => r.bearUrl || r.homeUrl)
    .filter((r) => REFRESH || !pickEntry(r, cache)?.ok)
    // 失敗済みは --retry-failed のときだけ再挑戦 (無駄打ちを避ける)
    .filter((r) => REFRESH || RETRY_FAILED || !pickEntry(r, cache))
    .slice(0, LIMIT);

  if (NO_FETCH) {
    console.log("[contacts] --no-fetch: キャッシュから CSV を書き直します");
    outputRows(rows, cache);
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[contacts] GEMINI_API_KEY が必要です (--no-fetch なら不要)");
    process.exit(1);
  }

  console.log(`[contacts] 取得対象: ${targets.length} 件 (同時 ${CONCURRENCY})`);
  let done = 0;
  let sinceSave = 0;
  const queue = [...targets];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    for (;;) {
      const row = queue.shift();
      if (!row) return;
      await processRow(row, apiKey, cache);
      done += 1;
      sinceSave += 1;
      if (sinceSave >= 20) {
        saveCache(cache); // 途中で落ちてもやり直しにならないよう小まめに保存
        sinceSave = 0;
      }
      if (done % 25 === 0) console.log(`[contacts] ${done}/${targets.length}`);
    }
  });
  await Promise.all(workers);
  saveCache(cache);

  outputRows(rows, cache);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
