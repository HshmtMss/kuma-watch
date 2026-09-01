#!/usr/bin/env tsx
/**
 * src/data/muni-official-links.ts の死んだ bearUrl を直す。
 *
 * なぜ要るか: このファイルは /place/[pref]/[muni]・/report/spot/[slug]・/api/summary が
 * 「この自治体の公式情報」として利用者に出しているリンク。2026-05 に収集したまま
 * 検証していないので、自治体のサイト改編でリンク切れが溜まっている。
 * 連絡先リストの収集 (build-muni-contacts.ts) で全 bearUrl を実際に叩いたので、
 * その結果をそのまま健康診断として使い、サイト側に反映する。
 *
 * やること:
 *   - 取得に失敗した bearUrl を対象にする (data/muni-contacts-cache.json)
 *   - 二段目クロールで生きているクマ情報ページが見つかっていれば差し替える
 *     (data/muni-contacts-stage2.json の discoveredBearUrl)
 *   - 見つからなければ bearUrl を削除する (homeUrl は残る)
 *     → 死んだリンクを出し続けるより、公式トップだけ出すほうが利用者の害が小さい
 *
 * 実行:
 *   npx tsx scripts/fix-muni-official-links.ts            # 何が変わるか表示するだけ
 *   npx tsx scripts/fix-muni-official-links.ts --apply    # 実際に書き換える
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { jstToday } from "../src/lib/jst-date";
import { UA } from "./lib/contact-extract";

const LINKS_PATH = join(process.cwd(), "src", "data", "muni-official-links.ts");
const CACHE_PATH = join(process.cwd(), "data", "muni-contacts-cache.json");
const STAGE2_PATH = join(process.cwd(), "data", "muni-contacts-stage2.json");
const APPLY = process.argv.includes("--apply");
/** homeUrl の https/http を実測して直すモード (時間がかかるので明示指定) */
const HOME = process.argv.includes("--home");
/** bearUrl を持たない自治体に、二段目で見つけた生きているクマ情報ページを足すモード */
const ADD = process.argv.includes("--add");
/** 差し替えた bearUrl は今日実際に取得できたので verifiedAt を今日にする */
const TODAY = jstToday();

type CacheEntry = { ok: boolean; reason?: string };
type Stage2Entry = { prefName: string; cityName: string; ok: boolean; discoveredBearUrl?: string };

/**
 * homeUrl の健全性チェック。
 * 一部の自治体サイトは TLS を提供しておらず http でしか開けないのに、
 * 収集時に https で登録されている。この状態だと /place ページのリンクが
 * 利用者のブラウザでも開けない。https が駄目で http が生きているものだけ直す。
 * (https も http も駄目なものは、こちらから判断できないので触らない)
 */
async function probe(url: string): Promise<number> {
  try {
    const r = await fetch(url, {
      method: "GET",
      headers: { "User-Agent": UA },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    return r.status;
  } catch {
    return 0;
  }
}

async function fixHomeUrls(): Promise<void> {
  const src = readFileSync(LINKS_PATH, "utf8");
  const urls = [...new Set([...src.matchAll(/homeUrl: "([^"]+)"/g)].map((m) => m[1]))].filter(
    (u) => u.startsWith("https://"),
  );
  console.log(`[fix-links] homeUrl ${urls.length} 件を実測します`);

  const broken: [string, string][] = [];
  const queue = [...urls];
  await Promise.all(
    Array.from({ length: 8 }, async () => {
      for (;;) {
        const u = queue.shift();
        if (!u) return;
        if ((await probe(u)) >= 200 && (await probe(u)) < 400) continue;
        const httpUrl = u.replace(/^https:/, "http:");
        const httpStatus = await probe(httpUrl);
        if (httpStatus >= 200 && httpStatus < 400) {
          broken.push([u, httpUrl]);
          console.log(`  http のみ ${u}`);
        }
      }
    }),
  );

  console.log("");
  console.log(`[fix-links] https で開けず http で開ける homeUrl: ${broken.length} 件`);
  if (!APPLY) {
    console.log("[fix-links] 表示のみ。書き換えるには --apply");
    return;
  }
  let out = src;
  for (const [https, http] of broken) {
    out = out.split(`homeUrl: "${https}"`).join(`homeUrl: "${http}"`);
  }
  writeFileSync(LINKS_PATH, out, "utf8");
  console.log(`[fix-links] ${LINKS_PATH} を更新しました`);
}

/**
 * bearUrl が未収録の自治体に、二段目クロールで見つけたクマ情報ページを追加する。
 * /place の「この自治体の公式情報」に出せる情報が増える = サイト側の充実。
 */
function addBearUrls(): void {
  const stage2 = existsSync(STAGE2_PATH)
    ? ((JSON.parse(readFileSync(STAGE2_PATH, "utf8")) as { entries: Record<string, Stage2Entry> }).entries ?? {})
    : {};
  const found = new Map<string, string>();
  for (const e of Object.values(stage2)) {
    if (e.discoveredBearUrl) found.set(`${e.prefName}|${e.cityName}`, e.discoveredBearUrl);
  }

  const src = readFileSync(LINKS_PATH, "utf8");
  let added = 0;
  const log: string[] = [];
  const out = src.split("\n").map((line) => {
    if (!/prefName: "/.test(line) || /bearUrl: "/.test(line)) return line;
    const pref = /prefName: "([^"]+)"/.exec(line)?.[1] ?? "";
    const city = /cityName: "([^"]+)"/.exec(line)?.[1] ?? "";
    const parent = /^(.+?市).+区$/.exec(city)?.[1];
    const url = found.get(`${pref}|${city}`) ?? (parent ? found.get(`${pref}|${parent}`) : undefined);
    if (!url) return line;
    added += 1;
    log.push(`  追加 ${pref}${city}  ${url}`);
    // homeUrl の直後に差し込む
    return line.replace(/(homeUrl: "[^"]+",)/, `$1 bearUrl: "${url}",`)
      .replace(/verifiedAt: "[^"]+"/, `verifiedAt: "${TODAY}"`);
  });

  console.log(log.join("\n"));
  console.log("");
  console.log(`[fix-links] bearUrl 未収録に追加できるもの: ${added} 件`);
  if (!APPLY) {
    console.log("[fix-links] 表示のみ。書き換えるには --apply");
    return;
  }
  writeFileSync(LINKS_PATH, out.join("\n"), "utf8");
  console.log(`[fix-links] ${LINKS_PATH} を更新しました`);
}

function main(): void {
  if (ADD) {
    addBearUrls();
    return;
  }
  if (HOME) {
    void fixHomeUrls();
    return;
  }
  if (!existsSync(CACHE_PATH)) {
    console.error("[fix-links] data/muni-contacts-cache.json がありません。先に build:muni-contacts を実行してください");
    process.exit(1);
  }
  const cache = (JSON.parse(readFileSync(CACHE_PATH, "utf8")) as { entries: Record<string, CacheEntry> }).entries;
  const stage2: Record<string, Stage2Entry> = existsSync(STAGE2_PATH)
    ? ((JSON.parse(readFileSync(STAGE2_PATH, "utf8")) as { entries: Record<string, Stage2Entry> }).entries ?? {})
    : {};

  // 政令市は区ごとに行があるので「県|市名」でも引けるようにしておく
  const discovered = new Map<string, string>();
  for (const e of Object.values(stage2)) {
    if (e.discoveredBearUrl) discovered.set(`${e.prefName}|${e.cityName}`, e.discoveredBearUrl);
  }

  const src = readFileSync(LINKS_PATH, "utf8");
  const lines = src.split("\n");

  let replaced = 0;
  let removed = 0;
  const log: string[] = [];

  const out = lines.map((line) => {
    const bear = /bearUrl: "([^"]+)"/.exec(line);
    if (!bear) return line;
    const entry = cache[bear[1]];
    if (!entry || entry.ok) return line; // 未検証・生存はそのまま

    const pref = /prefName: "([^"]+)"/.exec(line)?.[1] ?? "";
    const city = /cityName: "([^"]+)"/.exec(line)?.[1] ?? "";
    // 政令市の区は市に畳んで二段目を回しているので、親市名でも探す
    const parent = /^(.+?市).+区$/.exec(city)?.[1];
    const fresh = discovered.get(`${pref}|${city}`) ?? (parent ? discovered.get(`${pref}|${parent}`) : undefined);

    if (fresh) {
      replaced += 1;
      log.push(`  差替 ${pref}${city}\n        旧 ${bear[1]}\n        新 ${fresh}`);
      return line
        .replace(/bearUrl: "[^"]+"/, `bearUrl: "${fresh}"`)
        .replace(/verifiedAt: "[^"]+"/, `verifiedAt: "${TODAY}"`);
    }
    removed += 1;
    log.push(`  削除 ${pref}${city}  ${bear[1]} (${entry.reason})`);
    // bearUrl だけ落とす。homeUrl と verifiedAt は残す
    return line.replace(/\s*bearUrl: "[^"]+",/, "");
  });

  console.log(log.join("\n"));
  console.log("");
  console.log(`[fix-links] 死んだ bearUrl ${replaced + removed} 件 — 差し替え ${replaced} / 削除 ${removed}`);

  if (!APPLY) {
    console.log("[fix-links] 表示のみ。書き換えるには --apply");
    return;
  }
  writeFileSync(LINKS_PATH, out.join("\n"), "utf8");
  console.log(`[fix-links] ${LINKS_PATH} を更新しました`);
}

main();
