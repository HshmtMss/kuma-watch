import type { DataSourceEntry } from "@/data/data-sources";
import {
  dropOutlierDates,
  fetchPdfText,
  rowsToSightings,
  type TableRow,
} from "./pdf-table";
import type { UnifiedSighting } from "./types";

/**
 * 奈良県「ツキノワグマ目撃情報一覧」年度別 PDF の決定的パーサ。
 *
 * 経緯: 登録していた一覧 URL (pref.nara.jp/dd.aspx) が 403 になり、奈良県は
 * 2026-03-28 を最後に止まっていた。実際にはページが pref.nara.lg.jp へ
 * 移っており、そちらなら取得できる。
 *   × https://www.pref.nara.jp/documents/...      → 403 (ブラウザ相当のヘッダでも拒否)
 *   ○ https://www.pref.nara.lg.jp/documents/...   → 200
 * ドメインが 1 文字違い (.jp と .lg.jp) なので、URL を差し替えるまで
 * 「アクセス拒否」に見えて原因が分かりにくかった。
 *
 * 行の形 (5 列):
 *   No. 日時 市町村 大字
 *    1  令和8年4月3日 9:00  大淀町  馬佐
 *    2  令和8年4月3日 16:00 五條市  大塔町惣谷
 *
 * 大字まで載っているので、pdf-table 側の包含検証を通れば地図にピンを打てる。
 *
 * 注意: 「大台ヶ原」は市町村ではなく、県の一覧でも上北山村・川上村とは別枠で
 * 集計されている。市町村として解決できないので取り込めない (ジオコード段階で
 * 落ちる)。県の集計方針に反して上北山村へ寄せることはしない。
 */

const PREF = "奈良県";

// 「令和N年M月D日 HH:MM 市町村 大字」
//
// PDF のテキスト抽出は行の切れ方が一定でなく、日時だけの行と市町村・大字が
// 別行になっているものが数件混ざる。日時・市町村・大字が 1 行に揃ったものだけを
// 採る。分断された行を前後関係で繋ぐと、別の事案の場所を結び付けかねない
// (ピンの正確さを崩す) ので、拾えないものは落とす。
// 先頭の No. 列は抽出結果に現れないことがあるため要求しない。
const ROW =
  /令和(\d{1,2})年(\d{1,2})月(\d{1,2})日\s+(\d{1,2}:\d{2})\s+(\S+)\s+(\S+)\s*$/;

/** 令和 N 年 → 西暦。令和元年 = 2019 なので 2018 + N。 */
function reiwaToYear(n: number): number {
  return 2018 + n;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function parseNaraText(text: string): TableRow[] {
  const out: TableRow[] = [];
  for (const rawLine of text.split("\n")) {
    const m = ROW.exec(rawLine);
    if (!m) continue;
    const [, ry, mo, d, time, cityName, section] = m;
    const month = Number(mo);
    const day = Number(d);
    if (month < 1 || month > 12 || day < 1 || day > 31) continue;

    // 「大台ヶ原」は市町村ではない。県の一覧でも上北山村・川上村とは別枠で
    // 集計されており (PDF の注記)、どの市町村の事案かを県が明示していない。
    // 地理的には上北山村側だが、県が「その市町村として計上しない」と書いている
    // ものを当方の判断で寄せると、集計値が県の公表値と食い違う。存在しない
    // 市町村名のまま入れると /place の集計も壊れるので、取り込まない。
    // (令和7・8年度で 18 件。大台ヶ原は登山地として重要なので、県が市町村を
    //  明示するようになったら拾い直す)
    if (cityName.startsWith("大台")) continue;

    const sectionName = section.trim();
    out.push({
      date: `${reiwaToYear(Number(ry))}-${pad2(month)}-${pad2(day)}`,
      cityName,
      sectionName,
      headCount: 1, // 一覧に頭数の列が無い。書かれていないものを 1 と決め打たない方が
      // 良いが、UnifiedSighting が必須にしているため最小値の 1 とする。
      comment: [sectionName, time].filter(Boolean).join(" "),
    });
  }
  // 年度 PDF は 1 年分あるので誤記判定の幅を広めに取る。
  return dropOutlierDates(out, 300);
}

export async function fetchNaraPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const rows: TableRow[] = [];
  for (const u of (source.urls ?? []).filter((x) => x.role === "pdf")) {
    const text = await fetchPdfText(u.url, source.id);
    if (!text) continue;
    rows.push(...parseNaraText(text));
  }
  return rowsToSightings(rows, PREF, source.id);
}
