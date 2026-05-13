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
 * - 既に src/app/research/<slug>/page.tsx があればスキップ。
 *     - 既存記事 (2026-04-29-bear-incidents 等) も「既存 slug 」として
 *       事前にエイリアスマップで吸収する。
 * - 新規 doc は export?format=html で HTML 取得 → node-html-parser で
 *   見出し / 段落 / 表 / リスト / 参考文献を構造保持のまま抽出 → page.tsx に変換。
 *   - HTML エクスポートに切り替えたことで、Google Docs の表が
 *     <table> として正しく描画されるようになった (txt エクスポートだと
 *     セルが flat な行に潰れて読めない)。
 * - src/lib/research-entries.ts の RESEARCH_ENTRIES 配列に新エントリを
 *   自動追加 (slug が既に存在する場合は重複を避けスキップ)。本文中の
 *   都道府県メンションを集計して regions 配列も埋める。
 * - sitemap は src/app/sitemap.ts が RESEARCH_ENTRIES から自動収集するので
 *   こちらでは何も書き換えない。
 *
 * Drive 側の前提:
 * - フォルダおよび各 Doc が "リンクを知っている全員が閲覧可" になっていること。
 * - サブフォルダ "日次" "月次" の Drive ID は下記定数に直接記載。
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { parse, HTMLElement } from "node-html-parser";

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
  | { type: "p"; text: string }
  | { type: "table"; rows: string[][] }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

type Reference = { title: string; url: string; site?: string };

type ParsedDoc = {
  title: string;
  body: Block[];
  references: Reference[];
};

// page.tsx 先頭にコンテンツハッシュを埋め込んで、Drive 側の更新を検出する。
// `// drive-content-hash: <sha256>` の形で出力 / 読み取りする。
const HASH_MARKER = "// drive-content-hash: ";

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
  console.log(`[import-research] existing /research slugs (with page.tsx): ${existingSlugs.size}`);

  // 各 doc を「新規」「更新あり」「変化なし」に振り分ける。
  // Drive の HTML エクスポートはバイト的に非決定的 (class 名やタイムスタンプが揺れる)
  // ため、生 HTML ではなくパース後の構造化コンテンツ (ParsedDoc) のハッシュで判定する。
  const toGenerate: { doc: DocMeta; parsed: ParsedDoc; hash: string; isNew: boolean }[] = [];
  let unchangedCount = 0;
  for (const doc of allDocs) {
    let parsed: ParsedDoc;
    try {
      const html = await fetchDocHtml(doc.id);
      parsed = parseDocHtml(html);
    } catch (e) {
      console.error(`[import-research]   FAILED to fetch/parse ${doc.slug}:`, e);
      continue;
    }
    const hash = sha256(JSON.stringify(parsed));
    const existingHash = existingSlugs.has(doc.slug) ? readExistingHash(doc.slug) : null;
    if (existingHash === hash) {
      unchangedCount++;
      continue;
    }
    toGenerate.push({ doc, parsed, hash, isNew: !existingSlugs.has(doc.slug) });
  }

  console.log(
    `[import-research] new: ${toGenerate.filter((g) => g.isNew).length}, updated: ${toGenerate.filter((g) => !g.isNew).length}, unchanged: ${unchangedCount}`,
  );

  if (toGenerate.length === 0) {
    console.log("[import-research] nothing to do");
    return;
  }

  const newOnly: { doc: DocMeta; regions: string[] }[] = [];
  for (const { doc, parsed, hash, isNew } of toGenerate) {
    try {
      writePage(doc, parsed, hash);
      const tableCount = parsed.body.filter((b) => b.type === "table").length;
      console.log(
        `[import-research]   ${isNew ? "NEW    " : "UPDATED"} ${doc.slug} (${parsed.body.length} blocks, ${tableCount} tables, ${parsed.references.length} refs)`,
      );
      if (isNew) {
        newOnly.push({ doc, regions: extractRegions(parsed) });
      }
    } catch (e) {
      console.error(`[import-research]   FAILED to write ${doc.slug}:`, e);
    }
  }

  // RESEARCH_ENTRIES への登録は「新規 slug」のみ。既存記事の更新だけなら触らない。
  // sitemap は RESEARCH_ENTRIES から自動収集するため、ここでは更新しない。
  if (newOnly.length > 0) {
    updateIndex(newOnly);
    console.log(
      `[import-research] updated RESEARCH_ENTRIES with ${newOnly.length} new entries (duplicates skipped)`,
    );
  }

  console.log("[import-research] done.");
}

// 47 都道府県名。記事本文中の出現回数を数えて regions タグを作る。
const PREFECTURE_NAMES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];

/** 本文を全テキスト化して各都道府県名の出現回数を数え、上位 5 件を返す。 */
function extractRegions(parsed: ParsedDoc): string[] {
  const text = blocksToText(parsed.body);
  const counts = new Map<string, number>();
  for (const pref of PREFECTURE_NAMES) {
    const re = new RegExp(pref.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    const n = (text.match(re) ?? []).length;
    if (n > 0) counts.set(pref, n);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || PREFECTURE_NAMES.indexOf(a[0]) - PREFECTURE_NAMES.indexOf(b[0]))
    .slice(0, 5)
    .map(([pref]) => pref);
}

function blocksToText(blocks: Block[]): string {
  const out: string[] = [];
  for (const b of blocks) {
    switch (b.type) {
      case "h2":
      case "h3":
      case "p":
        out.push(b.text);
        break;
      case "ul":
      case "ol":
        out.push(b.items.join("\n"));
        break;
      case "table":
        out.push(b.rows.map((r) => r.join(" ")).join("\n"));
        break;
    }
  }
  return out.join("\n");
}

function sha256(s: string): string {
  return createHash("sha256").update(s).digest("hex");
}

function readExistingHash(slug: string): string | null {
  const path = join(ROOT, "src", "app", "research", slug, "page.tsx");
  if (!existsSync(path)) return null;
  const head = readFileSync(path, "utf8").slice(0, 500);
  const m = head.match(/^\/\/ drive-content-hash: ([a-f0-9]{64})/m);
  return m ? m[1] : null;
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
  // page.tsx が存在するディレクトリのみ「既存」とみなす。
  // ディレクトリだけ残っている (page.tsx を消した再生成シナリオ) 場合は
  // 「未生成」として再インポートを許可する。
  const dir = join(ROOT, "src", "app", "research");
  const set = new Set<string>();
  if (!existsSync(dir)) return set;
  const { readdirSync, statSync } = require("node:fs") as typeof import("node:fs");
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (existsSync(join(path, "page.tsx"))) set.add(name);
  }
  return set;
}

async function fetchDocHtml(docId: string): Promise<string> {
  const url = `https://docs.google.com/document/d/${docId}/export?format=html`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`fetch ${docId} failed: ${res.status}`);
  return await res.text();
}

function parseDocHtml(html: string): ParsedDoc {
  const root = parse(html);
  const body = root.querySelector("body");
  if (!body) throw new Error("HTML has no <body>");

  let title = "";
  const blocks: Block[] = [];
  let inReferences = false;
  let referencesItems: string[] = [];

  for (const child of body.childNodes) {
    if (!(child instanceof HTMLElement)) continue;
    const tag = child.tagName;
    if (!tag) continue;

    const text = normalizeText(child.textContent);

    // 参考文献セクションの開始を検出
    if (!inReferences && (tag === "H2" || tag === "H3" || tag === "H4" || tag === "H5" || tag === "P") &&
        (text === "引用文献" || text === "参考文献")) {
      inReferences = true;
      continue;
    }

    if (inReferences) {
      // 参考文献は <ol><li>...</li></ol> 形式が基本だが、念のため
      // 段落 (<p>) でも採取する。
      if (tag === "OL" || tag === "UL") {
        for (const li of child.querySelectorAll("li")) {
          const t = normalizeText(li.textContent);
          if (t) referencesItems.push(t);
        }
      } else if (tag === "P" && text) {
        referencesItems.push(text);
      }
      continue;
    }

    if (tag === "H1") {
      if (!title) title = text;
      continue;
    }

    if (tag === "H2" || tag === "H3") {
      if (!text) continue;
      blocks.push({ type: tag.toLowerCase() as "h2" | "h3", text });
      continue;
    }

    // h4以降は h3 として扱う
    if (tag === "H4" || tag === "H5" || tag === "H6") {
      if (!text) continue;
      blocks.push({ type: "h3", text });
      continue;
    }

    if (tag === "P") {
      if (!text) continue;
      // タイトルが H1 から取れていない場合、最初の段落をタイトルとする。
      if (!title && blocks.length === 0) {
        title = text;
        continue;
      }
      blocks.push({ type: "p", text });
      continue;
    }

    if (tag === "TABLE") {
      const rows = parseTable(child);
      if (rows.length > 0) blocks.push({ type: "table", rows });
      continue;
    }

    if (tag === "OL" || tag === "UL") {
      const items: string[] = [];
      for (const li of child.querySelectorAll("li")) {
        const t = normalizeText(li.textContent);
        if (t) items.push(t);
      }
      if (items.length > 0) {
        blocks.push({ type: tag.toLowerCase() as "ol" | "ul", items });
      }
      continue;
    }

    // 想定外タグはテキストとして拾う
    if (text) blocks.push({ type: "p", text });
  }

  const references = parseReferences(referencesItems);
  return { title: title || "(無題)", body: blocks, references };
}

function normalizeText(s: string): string {
  // 改行・タブ・連続スペースを 1 つの半角スペースに正規化。先頭末尾は trim。
  return s.replace(/[ ]/g, " ").replace(/\s+/g, " ").trim();
}

function parseTable(table: HTMLElement): string[][] {
  const rows: string[][] = [];
  for (const tr of table.querySelectorAll("tr")) {
    const cells: string[] = [];
    for (const cell of tr.querySelectorAll("td, th")) {
      cells.push(normalizeText(cell.textContent));
    }
    // 全セルが空の行はスキップ
    if (cells.some((c) => c.length > 0)) rows.push(cells);
  }
  return rows;
}

function parseReferences(rawItems: string[]): Reference[] {
  const refs: Reference[] = [];
  for (const raw of rawItems) {
    // <li> の場合は連結された 1 件分だが、稀に 1 つのテキストに複数連結
    // されているケースがあるので "、X月 Y, YYYYにアクセス、 https://..."
    // を区切りとして分割する。
    const segments = raw
      .split(/(?<=https?:\/\/[^\s]+)\s*(?=\d+月)/g) // URL の後ろで分割
      .map((s) => s.trim())
      .filter((s) => s);

    for (const seg of segments) {
      const ref = parseSingleReference(seg);
      if (ref) refs.push(ref);
    }
  }
  return refs;
}

function parseSingleReference(line: string): Reference | null {
  // 番号プレフィックス "1." を許容
  const cleaned = line.replace(/^\s*\d+\.\s*/, "");
  const urlMatches = cleaned.match(/https?:\/\/[^\s,、。]+/g);
  if (!urlMatches || urlMatches.length === 0) return null;
  const url = urlMatches[urlMatches.length - 1].replace(/[、,。]+$/, "");
  let titlePart = cleaned
    .replace(url, "")
    .replace(/[0-9]+月\s*[0-9]+,\s*[0-9]+にアクセス、?/g, "")
    .replace(/、\s*$/, "")
    .replace(/,\s*$/, "")
    .trim();
  let site: string | undefined;
  const dashSplit = titlePart.split(/\s*-\s*/);
  let title: string;
  if (dashSplit.length >= 2) {
    title = dashSplit.slice(0, -1).join(" - ").trim();
    site = dashSplit[dashSplit.length - 1].trim();
  } else {
    title = titlePart.trim();
  }
  if (!title) return null;
  return { title, url, ...(site ? { site } : {}) };
}

function writePage(doc: DocMeta, parsed: ParsedDoc, contentHash: string) {
  const dir = join(ROOT, "src", "app", "research", doc.slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const tsx = renderPageTsx(doc, parsed, contentHash);
  writeFileSync(join(dir, "page.tsx"), tsx);
}

function renderPageTsx(doc: DocMeta, parsed: ParsedDoc, contentHash: string): string {
  const today = new Date();
  const isoDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const description = parsed.body.find((b) => b.type === "p")?.text.slice(0, 150) ?? doc.period;

  const categoryBadge = doc.category === "daily-report" ? "日次レポート" : "月次レポート";

  const bodyJsx = parsed.body.map(renderBlock).join("\n");

  const refsJson = JSON.stringify(parsed.references, null, 2)
    .split("\n")
    .map((l, i) => (i === 0 ? l : "  " + l))
    .join("\n");

  return `${HASH_MARKER}${contentHash}
// このファイルは scripts/import-research.ts によって自動生成されています。
// Drive 側の元 Doc を更新すると、次回の import 実行時にこのファイルが再生成されます
// (上記ハッシュが変わったかどうかで判定)。手動で本文を修正する場合はハッシュ行ごと残してください。
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

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

      <ResearchPlaceLinks slug={SLUG} />

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

function renderBlock(b: Block): string {
  switch (b.type) {
    case "h2":
      return `      <h2>${escapeJsxText(b.text)}</h2>`;
    case "h3":
      return `      <h3>${escapeJsxText(b.text)}</h3>`;
    case "p":
      return `      <p>${escapeJsxText(b.text)}</p>`;
    case "ul":
      return `      <ul>\n${b.items.map((i) => `        <li>${escapeJsxText(i)}</li>`).join("\n")}\n      </ul>`;
    case "ol":
      return `      <ol>\n${b.items.map((i) => `        <li>${escapeJsxText(i)}</li>`).join("\n")}\n      </ol>`;
    case "table":
      return renderTable(b.rows);
  }
}

function renderTable(rows: string[][]): string {
  if (rows.length === 0) return "";
  const head = rows[0];
  const bodyRows = rows.slice(1);
  const headJsx = head
    .map((c) => `              <th className="px-3 py-2">${escapeJsxText(c)}</th>`)
    .join("\n");
  const bodyJsx = bodyRows
    .map((row) => {
      const cells = row
        .map((c) => `<td className="px-3 py-2 text-xs">${escapeJsxText(c)}</td>`)
        .join("");
      return `            <tr>${cells}</tr>`;
    })
    .join("\n");
  return `      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
${headJsx}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
${bodyJsx}
          </tbody>
        </table>
      </div>`;
}

function escapeJsxText(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function updateIndex(newDocs: { doc: DocMeta; regions: string[] }[]) {
  const path = join(ROOT, "src", "lib", "research-entries.ts");
  let content = readFileSync(path, "utf8");

  const today = new Date();
  const publishedAt = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // RESEARCH_ENTRIES 配列の開き [ の直後に挿入する。配列冒頭が最新の記事になる。
  const marker = "export const RESEARCH_ENTRIES: ResearchEntry[] = [";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.warn(
      "[import-research] RESEARCH_ENTRIES marker not found in lib/research-entries.ts — skipping",
    );
    return;
  }
  const insertAt = idx + marker.length;

  const additions = newDocs
    .filter(({ doc: d }) => !content.includes(`slug: ${JSON.stringify(d.slug)}`))
    .map(({ doc: d, regions }) => {
      const indexTitle =
        d.category === "daily-report"
          ? `${d.period} 国内クマ出没事案の時空間分析と分析報告`
          : `${d.period} 国内クマ出没動向の月次総括レポート`;
      const lead = `${d.period}の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。`;
      const regionsJson = JSON.stringify(regions);
      return `
  {
    slug: ${JSON.stringify(d.slug)},
    title: ${JSON.stringify(indexTitle)},
    lead: ${JSON.stringify(lead)},
    publishedAt: ${JSON.stringify(publishedAt)},
    category: ${JSON.stringify(d.category)},
    regions: ${regionsJson},
  },`;
    })
    .join("");

  if (additions === "") return;
  content = content.slice(0, insertAt) + additions + content.slice(insertAt);
  writeFileSync(path, content);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
