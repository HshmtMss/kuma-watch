/**
 * Google Drive の研究記事フォルダから新規ドキュメントを取り込み、
 * /research/<slug>/page.tsx を自動生成するスクリプト。
 *
 * 使い方:
 *   npm run import:research
 *
 * 仕様:
 * - 日次フォルダと月次フォルダの 2 サブフォルダを順にスキャン。
 * - 各 doc のファイル名 (Content-Disposition) から slug を決定。
 *     - YYYYMMDD (8桁) → "YYYY-MM-DD-daily-report"
 *     - YYYYMM   (6桁) → "YYYY-MM-monthly-report"
 * - 既に src/app/research/<slug>/ ディレクトリがあればスキップ。
 *     - 既存記事 (2026-04-29-bear-incidents 等) も「既存 slug 」として
 *       事前にエイリアスマップで吸収する。
 * - 新規 doc は export?format=txt で本文取得 → ヒューリスティックで
 *   見出し/段落/参考文献を分離 → page.tsx に変換。
 * - src/app/research/page.tsx の ENTRIES 配列、src/app/sitemap.ts に
 *   新エントリを自動追加。
 *
 * Drive 側の前提:
 * - フォルダおよび各 Doc が "リンクを知っている全員が閲覧可" になっていること。
 * - サブフォルダ "日次" "月次" の Drive ID は下記定数に直接記載。
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = process.cwd();

// 日次・月次サブフォルダの ID。Drive 側でフォルダを増やすときはここを更新する。
const FOLDERS = {
  daily: { id: "1B6-eWeRsp2BoG1RBbEUUrTLgsn_YRWfy", category: "daily-report" as const },
  monthly: { id: "1oqFjPss-8qsFsC1uu3hRgfQK-CBERVH9", category: "monthly-report" as const },
};

// ファイル名 → 既存 slug のエイリアス。手動で作った記事と Drive 側ファイル名を
// 結びつけ、再生成を防ぐ。新しい記事は規則ベースでスラグを生成する。
const FILENAME_TO_EXISTING_SLUG: Record<string, string> = {
  "20260429": "2026-04-29-bear-incidents",
  "202603": "2026-03-monthly-report",
  "202604": "2026-04-monthly-report",
};

type Category = "daily-report" | "monthly-report";

type DocMeta = {
  id: string;
  filename: string; // 拡張子なし (例: "20260430")
  slug: string;
  category: Category;
  period: string; // "2026年4月30日" など、表示用
};

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

type Reference = { title: string; url: string; site?: string };

type ParsedDoc = {
  title: string;
  body: Block[];
  references: Reference[];
};

async function main() {
  console.log("[import-research] scanning Drive folders...");

  const allDocs: DocMeta[] = [];
  for (const [key, folder] of Object.entries(FOLDERS)) {
    const docs = await scanFolder(folder.id, folder.category, key);
    console.log(`[import-research]   ${key}: ${docs.length} docs`);
    allDocs.push(...docs);
  }

  console.log(`[import-research] found ${allDocs.length} docs total`);

  const existingSlugs = listExistingSlugs();
  console.log(`[import-research] existing /research slugs: ${existingSlugs.size}`);

  const newDocs = allDocs.filter((d) => !existingSlugs.has(d.slug));
  if (newDocs.length === 0) {
    console.log("[import-research] no new docs — nothing to do");
    return;
  }

  console.log(
    `[import-research] new docs to import: ${newDocs.map((d) => d.slug).join(", ")}`,
  );

  const generated: DocMeta[] = [];
  for (const doc of newDocs) {
    try {
      const text = await fetchDocText(doc.id);
      const parsed = parseDoc(text);
      writePage(doc, parsed);
      console.log(`[import-research]   wrote ${doc.slug} (${parsed.body.length} blocks, ${parsed.references.length} refs)`);
      generated.push(doc);
    } catch (e) {
      console.error(`[import-research]   FAILED ${doc.slug}:`, e);
    }
  }

  if (generated.length > 0) {
    updateIndex(generated);
    updateSitemap(generated);
    console.log(`[import-research] updated index and sitemap with ${generated.length} entries`);
  }

  console.log("[import-research] done.");
}

async function scanFolder(
  folderId: string,
  category: Category,
  label: string,
): Promise<DocMeta[]> {
  const url = `https://drive.google.com/drive/folders/${folderId}`;
  const html = await (await fetch(url)).text();
  const ids = uniqueDocIds(html, folderId);

  const docs: DocMeta[] = [];
  for (const id of ids) {
    const filename = await fetchFilename(id);
    if (!filename) {
      console.warn(`[import-research]   skip ${id} (no filename)`);
      continue;
    }
    const slug = resolveSlug(filename, category);
    if (!slug) {
      console.warn(
        `[import-research]   skip ${id} (filename "${filename}" doesn't match daily/monthly pattern; expected YYYYMMDD or YYYYMM)`,
      );
      continue;
    }
    const period = formatPeriod(filename, category);
    docs.push({ id, filename, slug, category, period });
  }
  return docs;
}

function uniqueDocIds(html: string, parentId: string): string[] {
  // Drive の HTML 内には「" + 25-50 文字の英数記号 + "」というリテラルが
  // 大量に登場する。そのうち、明らかに doc ID 形式 (1[a-zA-Z0-9_-]{32+})
  // で、親フォルダ ID と異なるものだけを採用する。
  const pattern = /"(1[a-zA-Z0-9_-]{32,50})"/g;
  const set = new Set<string>();
  for (const m of html.matchAll(pattern)) {
    if (m[1] !== parentId) set.add(m[1]);
  }
  return Array.from(set);
}

async function fetchFilename(docId: string): Promise<string | null> {
  // Content-Disposition: attachment; filename="20260429.txt"
  const url = `https://docs.google.com/document/d/${docId}/export?format=txt`;
  const res = await fetch(url, { redirect: "follow", method: "HEAD" });
  const cd = res.headers.get("content-disposition");
  if (!cd) return null;
  const m = cd.match(/filename="([^"]+)"/);
  if (!m) return null;
  // 拡張子を除く ("20260429.txt" → "20260429")
  return m[1].replace(/\.[^.]+$/, "");
}

function resolveSlug(filename: string, category: Category): string | null {
  // 既存記事との手動対応マッピング優先
  const aliased = FILENAME_TO_EXISTING_SLUG[filename];
  if (aliased) return aliased;

  if (category === "daily-report") {
    // YYYYMMDD
    const m = filename.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (!m) return null;
    return `${m[1]}-${m[2]}-${m[3]}-daily-report`;
  } else {
    // YYYYMM
    const m = filename.match(/^(\d{4})(\d{2})$/);
    if (!m) return null;
    return `${m[1]}-${m[2]}-monthly-report`;
  }
}

function formatPeriod(filename: string, category: Category): string {
  if (category === "daily-report") {
    const m = filename.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (!m) return filename;
    return `${m[1]}年${parseInt(m[2], 10)}月${parseInt(m[3], 10)}日`;
  } else {
    const m = filename.match(/^(\d{4})(\d{2})$/);
    if (!m) return filename;
    return `${m[1]}年${parseInt(m[2], 10)}月`;
  }
}

function listExistingSlugs(): Set<string> {
  const dir = join(ROOT, "src", "app", "research");
  const set = new Set<string>();
  if (!existsSync(dir)) return set;
  // node:fs.readdirSync が dynamic import 不可なので require 経由
  const { readdirSync, statSync } = require("node:fs") as typeof import("node:fs");
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) set.add(name);
  }
  return set;
}

async function fetchDocText(docId: string): Promise<string> {
  const url = `https://docs.google.com/document/d/${docId}/export?format=txt`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`fetch ${docId} failed: ${res.status}`);
  return await res.text();
}

function parseDoc(raw: string): ParsedDoc {
  // BOM 除去
  const text = raw.replace(/^﻿/, "");
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l !== "");

  const title = lines[0] ?? "(無題)";
  let bodyLines = lines.slice(1);

  // 参考文献セクション分離
  const refMarkers = ["引用文献", "参考文献"];
  let refStart = -1;
  for (let i = 0; i < bodyLines.length; i++) {
    if (refMarkers.includes(bodyLines[i])) {
      refStart = i;
      break;
    }
  }
  let references: Reference[] = [];
  if (refStart !== -1) {
    references = parseReferences(bodyLines.slice(refStart + 1));
    bodyLines = bodyLines.slice(0, refStart);
  }

  const body = parseBlocks(bodyLines);
  return { title, body, references };
}

function parseBlocks(lines: string[]): Block[] {
  // 見出しヒューリスティック:
  //  - 行末に句点 (。) が無い
  //  - 行内に句点 (。) が無い
  //  - 文字数 <= 40
  //  - 数字や記号で始まる行 (1. ① 等) は段落として扱う
  // 同じ条件で文字数が小さい (<=20) 場合は h3、それ以外 h2 候補。
  // ただし最初の段落（リード）は見出しにしない処理が必要。
  const blocks: Block[] = [];
  let firstParagraphSeen = false;

  for (const line of lines) {
    const isHeadingCandidate =
      !line.includes("。") &&
      line.length > 0 &&
      line.length <= 40 &&
      !/^[0-9①②③④⑤⑥⑦⑧⑨]/.test(line) &&
      !/^[・※]/.test(line);

    if (isHeadingCandidate && firstParagraphSeen) {
      // ピリオドのない短い行 → 見出し扱い
      const level: 2 | 3 = line.length <= 18 ? 3 : 2;
      blocks.push({ type: level === 2 ? "h2" : "h3", text: line });
    } else {
      blocks.push({ type: "p", text: line });
      firstParagraphSeen = true;
    }
  }

  // ポストプロセス: 表 (連続する短い行) が見出しとして誤検出された場合を修復。
  // 3 個以上連続して h2/h3 が並んでいたら、それは表のセル列の可能性が高いので
  // すべて段落に降格する。本文の見出しは通常、間に段落を挟んで現れる。
  return demoteRunsOfHeadings(blocks);
}

function demoteRunsOfHeadings(blocks: Block[]): Block[] {
  const result: Block[] = [];
  let i = 0;
  while (i < blocks.length) {
    if (blocks[i].type === "h2" || blocks[i].type === "h3") {
      // 連続する見出しの長さを計測
      let j = i;
      while (j < blocks.length && (blocks[j].type === "h2" || blocks[j].type === "h3")) j++;
      const runLength = j - i;
      if (runLength >= 3) {
        for (let k = i; k < j; k++) result.push({ type: "p", text: blocks[k].text });
      } else {
        for (let k = i; k < j; k++) result.push(blocks[k]);
      }
      i = j;
    } else {
      result.push(blocks[i]);
      i++;
    }
  }
  return result;
}

function parseReferences(lines: string[]): Reference[] {
  const refs: Reference[] = [];
  for (const line of lines) {
    // フォーマット例:
    //   "1. タイトル - サイト名, 5月 1, 2026にアクセス、 https://..."
    //   "1. タイトル, 5月 1, 2026にアクセス、 https://..."
    const numMatch = line.match(/^(\d+)\.\s*(.*)$/);
    if (!numMatch) continue;
    const rest = numMatch[2];
    // URL 抜き出し（最後の URL を採用）
    const urlMatches = rest.match(/https?:\/\/[^\s,]+/g);
    if (!urlMatches || urlMatches.length === 0) continue;
    const url = urlMatches[urlMatches.length - 1].replace(/[、,。]+$/, "");
    // タイトル: URL より前、",X月 Y, YYYY にアクセス" の前を採用
    let titlePart = rest
      .replace(url, "")
      .replace(/[0-9]+月\s*[0-9]+,\s*[0-9]+にアクセス、?/g, "")
      .replace(/、\s*$/, "")
      .replace(/,\s*$/, "")
      .trim();
    // titlePart の最後に " - サイト" が付いている場合は site として分離
    let site: string | undefined;
    const dashSplit = titlePart.split(/\s*-\s*/);
    let title: string;
    if (dashSplit.length >= 2) {
      title = dashSplit.slice(0, -1).join(" - ").trim();
      site = dashSplit[dashSplit.length - 1].trim();
    } else {
      title = titlePart.trim();
    }
    if (!title) continue;
    refs.push({ title, url, ...(site ? { site } : {}) });
  }
  return refs;
}

function writePage(doc: DocMeta, parsed: ParsedDoc) {
  const dir = join(ROOT, "src", "app", "research", doc.slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const tsx = renderPageTsx(doc, parsed);
  writeFileSync(join(dir, "page.tsx"), tsx);
}

function renderPageTsx(doc: DocMeta, parsed: ParsedDoc): string {
  const today = new Date();
  const isoDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const description = parsed.body.find((b) => b.type === "p")?.text.slice(0, 150) ?? doc.period;

  const categoryBadge = doc.category === "daily-report" ? "日次レポート" : "月次レポート";

  const bodyJsx = parsed.body
    .map((b) => {
      const escaped = escapeJsxText(b.text);
      switch (b.type) {
        case "h2":
          return `      <h2>${escaped}</h2>`;
        case "h3":
          return `      <h3>${escaped}</h3>`;
        case "p":
          return `      <p>${escaped}</p>`;
      }
    })
    .join("\n");

  const refsJson = JSON.stringify(parsed.references, null, 2)
    .split("\n")
    .map((l, i) => (i === 0 ? l : "  " + l))
    .join("\n");

  return `import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = ${JSON.stringify(doc.slug)};
const TITLE = ${JSON.stringify(parsed.title)};
const DESCRIPTION = ${JSON.stringify(description)};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: \`\${SITE_URL}/research/\${SLUG}\` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: \`\${SITE_URL}/research/\${SLUG}\`,
    type: "article",
    publishedTime: ${JSON.stringify(isoDate)},
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: ${JSON.stringify(isoDate)},
  dateModified: ${JSON.stringify(isoDate)},
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  mainEntityOfPage: \`\${SITE_URL}/research/\${SLUG}\`,
};

const REFERENCES: { title: string; url: string; site?: string }[] = ${refsJson};

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          ${categoryBadge}
        </span>
        <span>対象期間: ${doc.period}</span>
        <span>·</span>
        <span>公開: ${isoDate}</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

${bodyJsx}

      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
                {r.site && <span className="text-stone-500"> — {r.site}</span>}
              </li>
            ))}
          </ol>
        </>
      )}

      <hr className="my-10 border-stone-200" />

      <div className="not-prose rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-700">
        <div className="mb-2 font-semibold text-stone-900">監修・編集</div>
        <dl className="grid grid-cols-[6rem_1fr] gap-y-1 text-xs sm:text-sm">
          <dt className="text-stone-500">執筆</dt>
          <dd>AI（大規模言語モデル）による情報集約</dd>
          <dt className="text-stone-500">監修</dt>
          <dd>獣医工学ラボ（リサーチコーディネート株式会社）</dd>
          <dt className="text-stone-500">対象期間</dt>
          <dd>${doc.period}</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>${isoDate}</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>${isoDate}</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、公開ニュース・自治体発表・政府公表資料をもとに AI で集約・要約した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
          <a
            href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20研究記事の訂正"
            className="text-blue-700 underline"
          >
            contact@research-coordinate.co.jp
          </a>
          {" "}までご連絡ください。
        </p>
      </div>
    </PageShell>
  );
}
`;
}

function escapeJsxText(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function updateIndex(newDocs: DocMeta[]) {
  const path = join(ROOT, "src", "app", "research", "page.tsx");
  let content = readFileSync(path, "utf8");

  const today = new Date();
  const publishedAt = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // ENTRIES 配列の開始位置を探し、その直後に新エントリを差し込む。
  const marker = "const ENTRIES: ResearchEntry[] = [";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.warn("[import-research] ENTRIES marker not found in research/page.tsx — skipping index update");
    return;
  }
  const insertAt = idx + marker.length;

  const additions = newDocs
    .map((d) => {
      const indexTitle =
        d.category === "daily-report"
          ? `${d.period} 国内クマ出没事案の時空間分析と分析報告`
          : `${d.period} 国内クマ出没動向の月次総括レポート`;
      const lead = `${d.period}の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。`;
      return `
  {
    slug: ${JSON.stringify(d.slug)},
    title: ${JSON.stringify(indexTitle)},
    lead: ${JSON.stringify(lead)},
    publishedAt: ${JSON.stringify(publishedAt)},
    category: ${JSON.stringify(d.category)},
  },`;
    })
    .join("");

  content = content.slice(0, insertAt) + additions + content.slice(insertAt);
  writeFileSync(path, content);
}

function updateSitemap(newDocs: DocMeta[]) {
  const path = join(ROOT, "src", "app", "sitemap.ts");
  let content = readFileSync(path, "utf8");

  const today = new Date();
  const isoDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // 既存の /research/<slug> エントリのうち、最後の出現位置を見つけて
  // その直後に追加する。研究エントリブロックのまとまりを保つ。
  const marker = '/research/2026-04-monthly-report';
  let anchor = content.indexOf(marker);
  if (anchor === -1) {
    // フォールバック: /research の static エントリの直後
    anchor = content.indexOf('/research');
  }
  if (anchor === -1) {
    console.warn("[import-research] sitemap research anchor not found — skipping");
    return;
  }
  // anchor を含む行の末尾（次の改行位置）を取得
  const lineEnd = content.indexOf("\n", anchor);
  if (lineEnd === -1) return;

  const additions = newDocs
    .map(
      (d) =>
        `\n    { url: \`\${SITE_URL}/research/${d.slug}\`, lastModified: new Date(${JSON.stringify(isoDate)}), changeFrequency: "monthly", priority: 0.6 },`,
    )
    .join("");

  content = content.slice(0, lineEnd) + additions + content.slice(lineEnd);
  writeFileSync(path, content);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
