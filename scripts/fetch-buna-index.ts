#!/usr/bin/env tsx
/**
 * 東北森林管理局のブナ開花・結実調査から豊凶指数を取り込み、
 * src/data/buna-index.ts を更新する。
 *
 * 実行: `npx tsx scripts/fetch-buna-index.ts [--apply]`（既定は dry-run）
 *
 * 運用: 年1回、7月の開花調査公表後に実行する。11月に結実調査が出たら
 * もう一度実行すると結実指数も入る。最新PDF 1本に1989年からの全系列が
 * 収録されているので、過去分を集める必要はない。
 *
 * PDFのファイル名は buna-56.pdf のような不規則な連番で、年が入らないため
 * URL を組み立てられない。一覧ページの先頭のリンクを取る。
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const LIST_URL = "https://www.rinya.maff.go.jp/tohoku/sidou/buna.html";
const BASE = "https://www.rinya.maff.go.jp/tohoku/sidou/";
const PREFS = ["青森", "岩手", "宮城", "秋田", "山形"] as const;
const PREF_CODE: Record<string, string> = {
  青森: "02",
  岩手: "03",
  宮城: "04",
  秋田: "05",
  山形: "06",
};
const OUT = join(process.cwd(), "src", "data", "buna-index.ts");
const apply = process.argv.includes("--apply");

type Cell = { class: string; index: number };
type Row = { year: number; flower: Record<string, Cell>; fruit: Record<string, Cell> };

async function main(): Promise<void> {
  // pdftotext が無いと表を読めない
  try {
    execFileSync("pdftotext", ["-v"], { stdio: "ignore" });
  } catch {
    console.error(
      "pdftotext が見つかりません。`brew install poppler` などで導入してください。",
    );
    process.exit(1);
  }

  console.log(`一覧ページを取得: ${LIST_URL}`);
  const html = await (
    await fetch(LIST_URL, { headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" } })
  ).text();
  const m = html.match(/attach\/pdf\/([a-z0-9-]+\.pdf)/);
  if (!m) {
    console.error("PDF へのリンクが見つかりません。ページ構造が変わった可能性があります。");
    process.exit(1);
  }
  const pdfUrl = `${BASE}attach/pdf/${m[1]}`;
  console.log(`PDF: ${pdfUrl}`);

  const dir = mkdtempSync(join(tmpdir(), "buna-"));
  const pdfPath = join(dir, "buna.pdf");
  const res = await fetch(pdfUrl, {
    headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
  });
  writeFileSync(pdfPath, Buffer.from(await res.arrayBuffer()));
  execFileSync("pdftotext", ["-layout", pdfPath, join(dir, "buna.txt")]);
  const text = readFileSync(join(dir, "buna.txt"), "utf8");

  // 表の各行は「平成18年 2006 大凶作（0.5） …」の形。数値の中に空白が
  // 混じる（"0. 5" "3 . 7"）ので、まず空白を全て落としてから読む。
  const rows: Row[] = [];
  for (const line of text.split("\n")) {
    const flat = line
      .replace(/[\s　]/g, "")
      .replace(/[０-９．]/g, (c) => "0123456789.".charAt("０１２３４５６７８９．".indexOf(c)));
    const ym = /^(?:平成|令和)(?:\d+|元)年((?:19|20)\d{2})/.exec(flat);
    if (!ym) continue;
    const cells = [...flat.matchAll(/(大凶作|凶作|並作|豊作|大豊作)[（(]([\d.]+)[)）]/g)].map(
      (c) => ({ class: c[1], index: Number(c[2]) }),
    );
    const year = Number(ym[1]);
    if (cells.length === 10) {
      rows.push({
        year,
        flower: Object.fromEntries(PREFS.map((p, i) => [p, cells[i * 2]])),
        fruit: Object.fromEntries(PREFS.map((p, i) => [p, cells[i * 2 + 1]])),
      });
    } else if (cells.length === 5) {
      // 当年分は開花のみ（結実は11月公表）
      rows.push({
        year,
        flower: Object.fromEntries(PREFS.map((p, i) => [p, cells[i]])),
        fruit: {},
      });
    }
  }
  rows.sort((a, b) => a.year - b.year);
  if (rows.length < 10) {
    console.error(`抽出できた年が ${rows.length} 件しかありません。表の書式が変わった可能性があります。`);
    process.exit(1);
  }
  console.log(`抽出: ${rows.length} 年 (${rows[0].year}〜${rows[rows.length - 1].year})`);
  const latest = rows[rows.length - 1];
  const f = PREFS.map((p) => latest.flower[p]?.index).filter((v): v is number => v != null);
  console.log(
    `最新年 ${latest.year}: 開花指数 ${f.map((v) => v.toFixed(1)).join(" / ")}` +
      `  平均 ${(f.reduce((a, b) => a + b, 0) / f.length).toFixed(2)}` +
      `  凶作 ${f.filter((v) => v < 1.0).length}/${f.length}県`,
  );

  if (!existsSync(OUT)) {
    console.error(`${OUT} が見つかりません`);
    process.exit(1);
  }
  const cur = readFileSync(OUT, "utf8");
  const head = cur.slice(0, cur.indexOf("export const BUNA_INDEX: BunaEntry[] = ["));
  const tail = cur.slice(cur.indexOf("];", cur.indexOf("export const BUNA_INDEX")) + 2);
  const body = rows
    .flatMap((r) =>
      PREFS.filter((p) => r.flower[p]).map((p) => {
        const fl = r.flower[p];
        const fr = r.fruit[p];
        return (
          `  { year: ${r.year}, prefCode: "${PREF_CODE[p]}", prefName: "${p}", ` +
          // 小数1桁で固定する。素の数値だと 1.0 が "1" になり、実行のたびに
          // 値は同じなのに差分が出る。
          `flowerIndex: ${fl.index.toFixed(1)}, flowerClass: "${fl.class}"` +
          (fr ? `, fruitIndex: ${fr.index.toFixed(1)}, fruitClass: "${fr.class}"` : "") +
          " },"
        );
      }),
    )
    .join("\n");
  const next = `${head}export const BUNA_INDEX: BunaEntry[] = [\n${body}\n];${tail}`;

  if (apply) {
    writeFileSync(OUT, next);
    console.log(`\n[fetch-buna-index] ${OUT} を更新しました`);
  } else {
    const changed = next !== cur;
    console.log(`\n[fetch-buna-index] dry-run（${changed ? "差分あり" : "差分なし"}）。--apply で書き込みます`);
  }
}

main().catch((e) => {
  console.error("[fetch-buna-index] 失敗:", e);
  process.exit(1);
});
