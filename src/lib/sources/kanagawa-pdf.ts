import type { DataSourceEntry } from "@/data/data-sources";
import {
  dropOutlierDates,
  fetchPdfText,
  rowsToSightings,
  type TableRow,
} from "./pdf-table";
import type { UnifiedSighting } from "./types";

/**
 * 神奈川県「県内におけるツキノワグマの目撃等情報」年度別 PDF のパーサ。
 *
 * 経緯: 登録の extractor は llm-html だったが 1 件も取れておらず、神奈川県は
 * 直近 1 年で news 由来 19 件しか無かった。県は年度ごとに PDF を出している。
 *
 * 丹沢・道志山系に少数個体群。件数は年 30 件程度と小さいが、大山・塔ノ岳など
 * 首都圏から日帰りできる登山地を含むので /spot の価値は高い。
 *
 * 行の形 (8 列):
 *   1 4月4日 5時30分頃 1 目撃 松田町寄 人里 ○
 *   No 月日 時間 頭数 区分 場所等 区分(人里/山中) その他
 *
 * 重要: 県は「クマらしき動物の目撃等の情報も含みます」と明記している。
 * 確定した目撃と同一に扱うと過大に見せるので、区分をそのまま comment に残す。
 */

const PREF = "神奈川県";

// 「No 月日 時間 頭数 種別 場所 区分 印」
const ROW =
  /^\s*(\d{1,3})\s+(\d{1,2})月(\d{1,2})日\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s*(.*)$/;

/** 「松田町寄」→ { city: "松田町", section: "寄" } */
export function splitPlace(place: string): { city: string; section: string } {
  const m = /^(.+?[市区町村])(.*)$/.exec(place);
  if (!m) return { city: "", section: "" };
  return { city: m[1], section: m[2] };
}

export function parseKanagawaText(text: string, fiscalYear: number): TableRow[] {
  const out: TableRow[] = [];
  for (const rawLine of text.split("\n")) {
    const m = ROW.exec(rawLine.trim());
    if (!m) continue;
    const [, , mo, d, time, tosu, kind, place, area] = m;
    const month = Number(mo);
    const day = Number(d);
    if (month < 1 || month > 12 || day < 1 || day > 31) continue;
    const { city, section } = splitPlace(place);
    if (!city) continue;
    // 年度は 4 月始まり。1〜3 月は翌暦年。
    const year = month <= 3 ? fiscalYear + 1 : fiscalYear;
    const head = Number(tosu);
    out.push({
      date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      cityName: city,
      sectionName: section,
      headCount: Number.isInteger(head) && head > 0 ? head : 1,
      comment: [section, kind, area, time].filter(Boolean).join(" "),
    });
  }
  return dropOutlierDates(out, 300);
}

export async function fetchKanagawaPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const rows: TableRow[] = [];
  for (const u of (source.urls ?? []).filter((x) => x.role === "pdf")) {
    const text = await fetchPdfText(u.url, source.id);
    if (!text) continue;
    // hint に年度を書いておく (「令和8年度」→ 2026)。
    const m = /令和(\d{1,2})年度/.exec(u.hint ?? "");
    const fy = m ? 2018 + Number(m[1]) : new Date().getFullYear();
    rows.push(...parseKanagawaText(text, fy));
  }
  return rowsToSightings(rows, PREF, source.id);
}
