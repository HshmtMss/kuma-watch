import type { DataSourceEntry } from "@/data/data-sources";
import {
  dropOutlierDates,
  fetchPdfText,
  rowsToSightings,
  type TableRow,
} from "./pdf-table";
import type { UnifiedSighting } from "./types";

/**
 * 長野県「ツキノワグマ出没（目撃）情報」月別 PDF の決定的パーサ。
 *
 * なぜ LLM (pdf-llm) ではなくこれか:
 *   長野県の PDF は 1 行 1 件の整った表で、テキスト抽出するとそのまま行になる。
 *   Gemini に投げていた頃は 12 ページの 6 月分 520 件から 45 件しか返らず
 *   (7 月分は 266 件中 45 件、5 月分は MAX_SIGHTINGS_PER_SOURCE=200 で頭打ち)、
 *   実データ 1,154 件に対し 451 件 = 39% しか取り込めていなかった。長野は
 *   北アルプス・上高地を抱える主要なクマ県で、ここが欠けると /spot と /place の
 *   両方が同時に薄くなる。表が機械可読なのに生成モデルを挟む理由が無い。
 *
 * 県は年度で列の並びを変えるので 2 様式を両方受ける。日付トークンの位置で見分ける。
 *
 *   R8 (2026-) : № 月日 市町村名 区分 目撃痕跡別 大きさ 頭数 状況
 *                1 2026/6/1 山ノ内町 林内 目撃 不明 ２頭 不明
 *   R7 (2025)  : № 地域振興局 区分 日付 市町村名 地区名 状況
 *                1 松本 里地 2025/04/01 安曇野市 穂高有明 幼獣１頭
 */

const PREF = "長野県";

// データ行の判定。西暦日付が行内のどこかに必ず入る。
const DATE = /(\d{4})\/(\d{1,2})\/(\d{1,2})/;
// 頭数トークン (全角・半角どちらも来る)
const HEAD = /^([０-９0-9]+)頭$/;
// 区分の語。年度によって列の位置が変わるため、値そのもので見分ける。
const KUBUN = new Set(["里地", "林内"]);

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** 列を解釈した中間形。comment 組み立てに属性が要るので TableRow より広い。 */
type NaganoRow = TableRow & {
  /** 里地 / 林内 */
  kubun: string;
  /** 目撃 / 痕跡 / センサーカメラ */
  kind: string;
  /** 成獣 / 幼獣 / 親子 / 不明 */
  size: string;
  /** 出典の「状況」欄そのまま */
  detail: string;
};

/**
 * 状況欄が空の行が多いので、地区名・区分・目撃痕跡別・大きさから一文を組み立てる。
 * 実データにある語だけを並べ、無い情報は書かない。
 */
function buildComment(r: NaganoRow): string {
  const parts: string[] = [];
  // 地区名は座標としては使わない (pdf-table 参照) が、文章としては残す。
  // 「どのあたりか」は利用者にとって件数より役に立つ。
  if (r.sectionName) parts.push(r.sectionName);
  if (r.kind && r.kind !== "目撃") parts.push(r.kind);
  const attrs = [r.kubun, r.size].filter((v) => v && v !== "不明");
  if (attrs.length) parts.push(attrs.join("・"));
  const head = parts.join("・");
  const body = r.detail && r.detail !== "不明" ? r.detail : "";
  return [head, body].filter(Boolean).join(" ");
}

export function parseNaganoText(text: string): TableRow[] {
  const rows: NaganoRow[] = [];
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    const toks = line.split(/\s+/);
    // 先頭は連番。データ行以外 (ヘッダ・注記) を弾く。
    if (!/^\d{1,4}$/.test(toks[0])) continue;
    const di = toks.findIndex((t) => DATE.test(t));
    if (di < 1) continue;
    const dm = DATE.exec(toks[di])!;
    const month = Number(dm[2]);
    const day = Number(dm[3]);
    if (month < 1 || month > 12 || day < 1 || day > 31) continue;

    const cityName = toks[di + 1] ?? "";
    if (!cityName) continue;

    let sectionName = "";
    let kubun = "";
    let kind = "";
    let size = "";
    let headCount = 1;
    let detail = "";

    if (di === 1) {
      // R8 様式。「状況」は空白を含む自由文なので、頭数トークンをアンカーにして
      // 前を属性・後ろを状況として切る。
      const hi = toks.findIndex((t) => HEAD.test(t));
      if (hi > di + 1) {
        headCount = Number(HEAD.exec(toks[hi])![1]) || 1;
        size = toks[hi - 1] ?? "";
        kind = toks[hi - 2] ?? "";
        kubun = toks[hi - 3] ?? "";
        detail = toks.slice(hi + 1).join(" ");
      } else {
        // 頭数が「不明」だったり、状況ごと欠けている行。列位置で拾う。
        kubun = toks[di + 2] ?? "";
        kind = toks[di + 3] ?? "";
        size = toks[di + 4] ?? "";
        detail = toks.slice(di + 6).join(" ");
      }
    } else {
      // R7 様式。日付の前に 地域振興局・区分 が入り、市町村の次が地区名。
      kubun = toks.slice(1, di).find((t) => KUBUN.has(t)) ?? "";
      sectionName = toks[di + 2] ?? "";
      detail = toks.slice(di + 3).join(" ");
      // R7 様式は大きさ・頭数の専用列が無く、状況欄に「成獣１頭」等と書かれる。
      // 頭数だけ数値として拾う (size は状況欄の文言をそのまま見せる方が正確)。
      const hm = /([０-９0-9]+)\s*頭/.exec(detail);
      if (hm) headCount = Number(hm[1]) || 1;
    }

    const row: NaganoRow = {
      date: `${dm[1]}-${pad2(month)}-${pad2(day)}`,
      cityName,
      sectionName,
      headCount: Number.isInteger(headCount) && headCount > 0 ? headCount : 1,
      comment: "",
      kubun,
      kind,
      size,
      detail,
    };
    row.comment = buildComment(row);
    rows.push(row);
  }
  // 各 PDF は 1 か月分。12〜1 月をまたぐ号も 180 日以内に収まる。
  return dropOutlierDates(rows, 180);
}

export async function fetchNaganoPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const pdfUrl = source.urls.find((u) => u.role === "pdf")?.url;
  if (!pdfUrl) return [];
  const text = await fetchPdfText(pdfUrl, source.id);
  if (!text) return [];
  return rowsToSightings(parseNaganoText(text), PREF, source.id);
}
