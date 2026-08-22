import type { DataSourceEntry } from "@/data/data-sources";
import {
  dropOutlierDates,
  fetchPdfText,
  rowsToSightings,
  type TableRow,
} from "./pdf-table";
import type { UnifiedSighting } from "./types";

/**
 * 山口県「ツキノワグマ目撃情報」年度別 PDF の決定的パーサ。
 *
 * 経緯: 登録していた PDF (238451/238452) は県がファイルを差し替えて 404 になり、
 * 山口県のデータは 1 件も取れていなかった (0 件のソースは健全性チェックにも
 * 現れず気づけなかった)。現行は 248465/248466 で、令和8年度 242 件・
 * 令和7年度 405 件。どちらも llm-pdf の上限 200 を超えるうえ、Gemini は
 * 長い表を途中で切り上げるため決定的に読む。
 *
 * 行の形 (9 列・空白区切り):
 *   件数 状況 年 月 日 時間 市 字 出没状況
 *    1   目撃 8 4 3  2:40  山口市  阿東嘉年  走行中に道路脇のクマを目撃
 *    4   捕獲 8 4 5  7:30  岩国市  周東町中山 イノシシ用箱わなに錯誤捕獲
 *
 * 年は和暦 (8 = 令和8年 = 2026)。年度をまたぐので、行ごとの年をそのまま使う
 * (令和7年度の PDF にも令和8年1〜3月の行が入る)。
 * 時間が空の行があるため、時刻トークンの有無で列をずらす。
 */

const PREF = "山口県";

// 「件数 状況 年 月 日 …」。状況の語で表の行だけを拾う。
const ROW =
  /^\s*(\d{1,4})\s+(目撃|捕獲|痕跡|人身|その他)\s+(\d{1,2})\s+(\d{1,2})\s+(\d{1,2})\s+(.+)$/;
const TIME = /^\d{1,2}:\d{2}$/;

/** 令和 N 年 → 西暦。令和元年 = 2019 なので 2018 + N。 */
function reiwaToYear(n: number): number {
  return 2018 + n;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function parseYamaguchiText(text: string): TableRow[] {
  const out: TableRow[] = [];
  for (const rawLine of text.split("\n")) {
    const m = ROW.exec(rawLine.trim());
    if (!m) continue;
    const [, , status, ry, mo, d, rest] = m;
    const year = reiwaToYear(Number(ry));
    const month = Number(mo);
    const day = Number(d);
    if (month < 1 || month > 12 || day < 1 || day > 31) continue;

    const toks = rest.trim().split(/\s+/);
    // 時刻列は空のことがある。あればここで落として列を揃える。
    if (toks.length && TIME.test(toks[0])) toks.shift();
    const cityName = toks.shift() ?? "";
    if (!cityName) continue;
    const sectionName = toks.shift() ?? "";
    const detail = toks.join(" ");

    // 「クマ２頭を目撃」等から頭数を拾う。書かれていなければ 1。
    const hm = /([0-9０-９]+)\s*頭/.exec(detail);
    const headCount = hm ? Number(hm[1].normalize("NFKC")) || 1 : 1;

    // 状況(目撃/捕獲/痕跡)は件数の意味が変わるので本文に残す。
    const comment = [sectionName, status, detail].filter(Boolean).join(" ");

    out.push({
      date: `${year}-${pad2(month)}-${pad2(day)}`,
      cityName,
      sectionName,
      headCount,
      comment,
    });
  }
  // 年度 PDF は 1 年分あるので、誤記判定の幅を広めに取る。
  return dropOutlierDates(out, 300);
}

export async function fetchYamaguchiPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const pdfs = (source.urls ?? []).filter((u) => u.role === "pdf");
  const rows: TableRow[] = [];
  for (const u of pdfs) {
    const text = await fetchPdfText(u.url, source.id);
    if (!text) continue;
    rows.push(...parseYamaguchiText(text));
  }
  return rowsToSightings(rows, PREF, source.id);
}
