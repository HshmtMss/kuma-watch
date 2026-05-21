#!/usr/bin/env tsx
/**
 * 環境省 press の月別アーカイブから過去発表をバックフィルする one-shot
 * スクリプト。通常運用の ingest-gov-announcements.ts は最新インデックス
 * のみを見るため、過去 6〜12 ヶ月の発表を一気に取り込みたい場合に使う。
 *
 * usage:
 *   npx tsx scripts/backfill-gov-announcements.ts --months=12 --apply
 *
 * URL パターン: https://www.env.go.jp/press/YYYYMM.html
 *   (構造は最新インデックスと同じ p-press-release-list__heading + c-news-link__link)
 *
 * 動作:
 *   1. 過去 N ヶ月の URL を順に fetch
 *   2. 既存スクレイパー (parseEnvPress) と同じ構造でパース
 *   3. クマ・鳥獣保護関連キーワードで事前フィルタ
 *   4. 既存 URL と重複除外
 *   5. Gemini で分類 → gov-announcements.json に追記
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  classifyWithGemini,
  filterBearRelated,
  toAnnouncement,
  type GovAnnouncement,
} from "../src/lib/sources/gov";

type Snapshot = { generatedAt: number; items: GovAnnouncement[] };

// gov.ts の parseEnvPress を private にしているため、ここで同等のパーサを
// 簡易再実装する (構造が同一なので)。将来 gov.ts に export しても良いが、
// バックフィルは one-shot なのでこの形で十分。
type ParsedItem = {
  ministry: "env";
  date: string;
  title: string;
  url: string;
  tag?: string;
};

function parseEnvPress(html: string): ParsedItem[] {
  const out: ParsedItem[] = [];
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
      out.push({ ministry: "env", date: headings[i].date, title, url, tag });
    }
  }
  return out;
}

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent":
          "KumaWatch/1.0 (+https://kuma-watch.jp; gov backfill)",
      },
      cache: "no-store",
    });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const monthsArg = args.find((a) => a.startsWith("--months="));
  const months = monthsArg ? Number(monthsArg.slice("--months=".length)) : 12;
  const apply = args.includes("--apply");
  console.log(`[backfill] months=${months} apply=${apply}`);

  if (!process.env.GEMINI_API_KEY && apply) {
    console.error("[backfill] GEMINI_API_KEY required for --apply");
    process.exit(1);
  }

  // 月リストを生成 (今月から N ヶ月分遡る)
  const now = new Date();
  const monthList: string[] = [];
  for (let i = 0; i < months; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const ym = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}`;
    monthList.push(ym);
  }

  // 全候補を集約
  const allCandidates: ParsedItem[] = [];
  for (const ym of monthList) {
    const url = `https://www.env.go.jp/press/${ym}.html`;
    const html = await fetchHtml(url);
    if (!html) {
      console.log(`  ${ym}: skip (404 or fetch failed)`);
      continue;
    }
    const items = parseEnvPress(html);
    console.log(`  ${ym}: ${items.length} items`);
    allCandidates.push(...items);
    // 軽い rate limit (政府サイトに優しく)
    await new Promise((r) => setTimeout(r, 300));
  }
  console.log(`[backfill] total candidates: ${allCandidates.length}`);

  const filtered = filterBearRelated(allCandidates);
  console.log(`[backfill] keyword-filtered: ${filtered.length}`);

  // 既存と重複除外
  const path = join(process.cwd(), "public", "data", "gov-announcements.json");
  const snap: Snapshot = existsSync(path)
    ? (JSON.parse(readFileSync(path, "utf8")) as Snapshot)
    : { generatedAt: 0, items: [] };
  const existingUrls = new Set(snap.items.map((it) => it.url));
  const fresh = filtered.filter((it) => !existingUrls.has(it.url));
  console.log(`[backfill] new (not in snapshot): ${fresh.length}`);

  if (fresh.length === 0) {
    console.log("[backfill] nothing new — done");
    return;
  }
  if (!apply) {
    console.log("[backfill] DRY-RUN. Sample:");
    for (const it of fresh.slice(0, 10)) {
      console.log(`  ${it.date} ${it.title.slice(0, 70)}`);
    }
    console.log(
      `[backfill] Re-run with --apply to classify + write (Gemini cost ~$0.0${Math.ceil(fresh.length / 50)}-0.0${Math.ceil(fresh.length / 25)})`,
    );
    return;
  }

  // Gemini 一括分類。大量だとプロンプトが膨らむのでバッチ化 (50 件ずつ)
  const BATCH_SIZE = 50;
  const accepted: GovAnnouncement[] = [];
  const ingestedAt = Date.now();
  for (let i = 0; i < fresh.length; i += BATCH_SIZE) {
    const batch = fresh.slice(i, i + BATCH_SIZE);
    console.log(
      `[backfill] classify batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(fresh.length / BATCH_SIZE)} (${batch.length} items)`,
    );
    const classified = await classifyWithGemini(batch);
    for (const r of classified) {
      const item = batch[r.index];
      if (!item) continue;
      if (!r.isBearRelated) continue;
      accepted.push(toAnnouncement(item, r, ingestedAt));
    }
  }
  console.log(`[backfill] bear-related accepted: ${accepted.length}`);

  if (accepted.length === 0) {
    console.log("[backfill] gemini said nothing relevant — done");
    return;
  }

  const seen = new Set(snap.items.map((it) => it.id));
  const merged = [
    ...accepted.filter((a) => !seen.has(a.id)),
    ...snap.items,
  ].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));

  const next: Snapshot = { generatedAt: ingestedAt, items: merged };
  writeFileSync(path, JSON.stringify(next, null, 2));
  console.log(`[backfill] wrote ${merged.length} total (+${accepted.length} new)`);
}

main().catch((e) => {
  console.error("[backfill] failed:", e);
  process.exit(1);
});
