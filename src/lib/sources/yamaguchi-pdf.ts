import type { DataSourceEntry } from "@/data/data-sources";
import {
  dropOutlierDates,
  fetchPdfText,
  rowsToSightings,
  type TableRow,
} from "./pdf-table";
import { resolveMuni } from "@/lib/muni-boundary";
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
 *
 * 時刻欄は「9:15」だけでなく「不明」「午前」「未明」「早朝」等の語も入る。
 * 当初は H:MM かどうかだけで列をずらしていたため、これらの行で時刻の語が
 * 市町村名として取り込まれ、「山口県/午前」のような存在しない市町村が
 * 混ざっていた。列の位置ではなく、市町村マスタに実在するかどうかで
 * 市町村の位置を決める。
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
    // 時刻欄は「9:15」のことも「不明」「午前」「未明」等の語のこともあり、
    // 位置で数えると市町村を取り違える。先頭から 2 つまでの範囲で、
    // 市町村マスタに実在する語を市町村として採る。
    let ci = -1;
    for (let k = 0; k < Math.min(2, toks.length); k++) {
      if (resolveMuni(PREF, toks[k])) {
        ci = k;
        break;
      }
    }
    if (ci < 0) continue; // 市町村を特定できない行は落とす (推測で埋めない)
    const timeText = ci > 0 && !TIME.test(toks[0]) ? toks[0] : "";
    const cityName = toks[ci];
    const sectionName = toks[ci + 1] ?? "";
    const detail = toks.slice(ci + 2).join(" ");

    // 「クマ２頭を目撃」等から頭数を拾う。書かれていなければ 1。
    const hm = /([0-9０-９]+)\s*頭/.exec(detail);
    const headCount = hm ? Number(hm[1].normalize("NFKC")) || 1 : 1;

    // 状況(目撃/捕獲/痕跡)は件数の意味が変わるので本文に残す。
    // 時刻が語で書かれていた場合 (「未明」等) はそれも残す。
    const comment = [sectionName, status, timeText, detail]
      .filter(Boolean)
      .join(" ");

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

/**
 * 一覧ページから「目撃情報詳細」PDF の URL を見つける。
 *
 * 県は更新のたびに attachment 番号を振り直し、旧番号は 404 になる。実際に
 * 248466 を登録した翌日には 248599 へ変わっていた。番号を直書きすると
 * 毎週壊れるので、リンク名から拾う。
 *
 * リンク名の形: 「目撃情報詳細080825.pdf」(080825 = 令和8年8月25日)
 * 令和7年度分は「令和7年度クマ目撃情報詳細 .pdf」なので、年度表記の無い
 * ものを現行版とみなす。
 */
async function discoverDetailPdfs(listUrl: string): Promise<string[]> {
  try {
    const res = await fetch(listUrl, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) return [];
    const html = await res.text();
    const out: string[] = [];
    const re =
      /href="([^"]*\/uploaded\/attachment\/(\d+)\.pdf)"[^>]*>([^<]{0,80})/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html))) {
      const label = m[3];
      // 「目撃情報詳細」を含むものだけ。集計 (市町別・月別) や啓発資料は除く。
      if (!label.includes("目撃情報詳細")) continue;
      const href = m[1].startsWith("http")
        ? m[1]
        : `https://www.pref.yamaguchi.lg.jp${m[1]}`;
      out.push(href);
    }
    return out;
  } catch {
    return [];
  }
}

export async function fetchYamaguchiPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  // 一覧ページから現行の PDF を見つける。見つからなければ登録済みの URL に頼る
  // (ページ構造が変わっても完全には止まらないように)。
  const listUrl = (source.urls ?? []).find((u) => u.role === "list")?.url;
  const discovered = listUrl ? await discoverDetailPdfs(listUrl) : [];
  const registered = (source.urls ?? [])
    .filter((u) => u.role === "pdf")
    .map((u) => u.url);
  const urls = [...new Set([...discovered, ...registered])];
  if (discovered.length === 0 && listUrl) {
    console.log(`[yamaguchi] 一覧から PDF を見つけられず、登録済み URL を使う`);
  }

  const rows: TableRow[] = [];
  for (const url of urls) {
    const text = await fetchPdfText(url, source.id);
    if (!text) continue;
    rows.push(...parseYamaguchiText(text));
  }
  return rowsToSightings(rows, PREF, source.id);
}
