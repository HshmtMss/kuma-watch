import type { DataSourceEntry } from "@/data/data-sources";
import {
  discoverPdfUrls,
  dropOutlierDates,
  fetchPdfText,
  rowsToSightings,
  type TableRow,
} from "./pdf-table";
import type { UnifiedSighting } from "./types";

/**
 * 愛知県「ツキノワグマ出没情報」年度別 PDF の決定的パーサ。
 *
 * 経緯: 登録の extractor は llm-html だったが 1 件も取れておらず、愛知県は
 * 直近 1 年で news 由来の 4 件しか無かった。県は令和8年度から出没情報を
 * PDF で公表している。
 *
 * 愛知のツキノワグマはレッドリストあいち 2025 で絶滅危惧IA類、三河山間部に
 * ごく少数。件数は年 35 件程度と小さいが、豊田・設楽・東栄など奥三河の
 * 登山・キャンプ地を含むので /spot の価値は高い。
 *
 * 行の形 (先頭 3 つが No/月/日、次が場所、残りが状況):
 *   1 4 8 豊田市黒田町一色地内 クマらしき動物が道路上にいるのを建物から目撃した。
 *
 * 重要: 令和8年度から「クマらしき動物」の情報も含めて公表されている。
 * 確定した目撃と同一に扱うと過大に見せることになるので、状況文をそのまま
 * comment に残して区別できるようにする。
 */

const PREF = "愛知県";

// 「No 月 日 場所 状況」。場所は空白を含まない 1 トークン (「豊田市黒田町一色地内」)。
const ROW = /^\s*(\d{1,3})\s+(\d{1,2})\s+(\d{1,2})\s+(\S+)\s*(.*)$/;

/** 「豊田市黒田町一色地内」→ { city: "豊田市", section: "黒田町一色" } */
export function splitPlace(place: string): { city: string; section: string } {
  // 市郡町村の切れ目で分ける。郡を含む表記 (北設楽郡設楽町…) にも対応する。
  const m = /^(.+?[市区町村])(.*)$/.exec(place.replace(/地内$/, ""));
  if (!m) return { city: "", section: "" };
  return { city: m[1], section: m[2] };
}

export function parseAichiText(text: string, fiscalYear: number): TableRow[] {
  const out: TableRow[] = [];
  for (const rawLine of text.split("\n")) {
    const m = ROW.exec(rawLine.trim());
    if (!m) continue;
    const [, , mo, d, place, detail] = m;
    const month = Number(mo);
    const day = Number(d);
    if (month < 1 || month > 12 || day < 1 || day > 31) continue;
    const { city, section } = splitPlace(place);
    if (!city) continue;
    // 年度は 4 月始まり。1〜3 月は翌暦年。
    const year = month <= 3 ? fiscalYear + 1 : fiscalYear;
    out.push({
      date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      cityName: city,
      sectionName: section,
      headCount: 1, // 一覧に頭数の列が無い
      comment: [section, detail].filter(Boolean).join(" "),
    });
  }
  return dropOutlierDates(out, 300);
}

export async function fetchAichiPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  // 県は更新のたびに attachment 番号やファイル名を変え、旧 URL は 404 になる。
  // 一覧ページのリンク文言は安定しているのでそこから拾い、見つからなければ
  // 登録済みにフォールバックする。
  const listUrl = (source.urls ?? []).find((u) => u.role === "list")?.url;
  const discovered = listUrl ? await discoverPdfUrls(listUrl, "出没情報") : [];
  const registered = (source.urls ?? [])
    .filter((u) => u.role === "pdf")
    .map((u) => ({ url: u.url, hint: u.hint }));
  const seen = new Set<string>();
  // 年度が読み取れたものだけを使う。過去年度の一覧も同じ文言で並んでいるため、
  // 年度を無視すると 3 年分をまとめて取り込み、日付が未来まで伸びる
  // (神奈川で実際に 2027-03 まで出た)。
  const targets = [
    ...discovered
      .filter((d) => d.fiscalYear !== null)
      .map((d) => ({ url: d.url, hint: `令和${d.fiscalYear! - 2018}年度` })),
    ...registered,
  ].filter((t) => !seen.has(t.url) && seen.add(t.url));

  const rows: TableRow[] = [];
  for (const u of targets) {
    const text = await fetchPdfText(u.url, source.id);
    if (!text) continue;
    // hint に年度を書いておく (「令和8年度」→ 2026)。
    const m = /令和(\d{1,2})年度/.exec(u.hint ?? "");
    const fy = m ? 2018 + Number(m[1]) : new Date().getFullYear();
    rows.push(...parseAichiText(text, fy));
  }
  return rowsToSightings(rows, PREF, source.id);
}
