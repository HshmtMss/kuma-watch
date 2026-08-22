import { geocodePlace, jitterWithin } from "./geocode";
import { incidentKey } from "@/lib/incident-key";
import type { UnifiedSighting } from "./types";

/**
 * 「1 行 1 件の表」形式の PDF を決定的に読むための共通部品。
 *
 * 都道府県の目撃情報 PDF はテキスト抽出すると表がそのまま行になるものが多い。
 * 生成モデル (pdf-llm) に投げると長い表を途中で切り上げるうえ課金もかかるので、
 * 列の並びが分かっているものは正規表現で読む。列の解釈だけ県ごとに実装し、
 * 「PDF を取ってテキストにする」「行を UnifiedSighting にする」はここに集約する。
 *
 * 実績: 長野県は Gemini で 1,154 件中 451 件 (39%) しか取れていなかったものが
 * 全件取得・処理時間 21 秒 → 0.4 秒になった。
 */

/**
 * 「CJK部首補助」(U+2E80〜U+2EFF) を通常の漢字へ寄せる。
 *
 * 県の PDF は組版の都合でこのブロックの字を混ぜてくる。見た目は同じでも
 * コードポイントが違うため、「⻑野市」(U+2ED1) は「長野市」(U+9577) と別文字列に
 * なり、市町村マスタに一致しない。長野県では 148 件がこれで紐づかなかった。
 *
 * NFKC では直らない。康熙部首 (U+2F00〜) には互換分解があるが、CJK部首補助には
 * 無いため明示的に対応表を持つ。
 */
const CJK_RADICAL_FIX: Record<string, string> = {
  "⻑": "長",
  "⻄": "西",
  "⺠": "民",
  "⻘": "青",
  "⻨": "麦",
  "⻤": "鬼",
  "⻲": "亀",
  "⻯": "竜",
};

/** NFKC で全角英数・康熙部首を寄せ、残る CJK部首補助を対応表で置換する。 */
export function normalizePdfText(text: string): string {
  return text.normalize("NFKC").replace(/[⺀-⻿]/g, (c) => CJK_RADICAL_FIX[c] ?? c);
}

/** PDF を取得してテキスト化する。取得・解析に失敗したら null。 */
export async function fetchPdfText(
  url: string,
  label: string,
): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`[pdf-table ${label}] fetch failed ${res.status}`);
      return null;
    }
    const buf = new Uint8Array(await res.arrayBuffer());
    // unpdf は pdfjs を serverless 向けに同梱したもの。動的 import にして
    // 使わないルート (地図・通知系) のバンドルに載せない。
    const { extractText, getDocumentProxy } = await import("unpdf");
    const pdf = await getDocumentProxy(buf);
    const { text } = await extractText(pdf, { mergePages: true });
    return normalizePdfText(text);
  } catch (e) {
    console.log(
      `[pdf-table ${label}] parse failed: ${(e as Error).message.slice(0, 120)}`,
    );
    return null;
  }
}

/** 県ごとの列解釈が返す、正規化済みの 1 行。 */
export type TableRow = {
  /** YYYY-MM-DD */
  date: string;
  cityName: string;
  /** 字・地区名。分かる場合のみ。座標には使わず本文に残す。 */
  sectionName: string;
  headCount: number;
  comment: string;
};

/**
 * 出典 PDF の年の打ち間違いを落とす。
 *
 * 実例: 長野県 令和7年7月分の 226 行目が `2024/07/15` (他 351 行は 2025 年)。
 * そのまま取り込むと 1 年前の事案が混ざり、季節パターンと「直近 1 年」を狂わせる。
 * 中央値から離れすぎた行を誤記とみなす。「直す」のではなく「落とす」のは、
 * 正しい日付を推測で作らないため。
 */
export function dropOutlierDates(rows: TableRow[], limitDays = 200): TableRow[] {
  if (rows.length < 3) return rows;
  const times = rows.map((r) => Date.parse(r.date)).sort((a, b) => a - b);
  const median = times[Math.floor(times.length / 2)];
  const limit = limitDays * 24 * 60 * 60 * 1000;
  const kept = rows.filter((r) => Math.abs(Date.parse(r.date) - median) <= limit);
  if (kept.length !== rows.length) {
    const dropped = rows
      .filter((r) => !kept.includes(r))
      .map((r) => `${r.date} ${r.cityName}`);
    console.log(`[pdf-table] 出典の日付誤記を除外: ${dropped.join(", ")}`);
  }
  return kept;
}

/**
 * 表の行を UnifiedSighting に変換する。
 *
 * 座標は市町村までで引く。字が分かっていても、字単位のジオコーディングは
 * 外部サービス (Nominatim) への直列問い合わせが数百〜千件規模になり、
 * 4 時間ごと・30 分枠の集約に載らないため。sectionName は空にして
 * location-precision に「市町村までしか分からない事案」として扱わせ
 * (件数には入るが地図にピンは打たない)、字は comment に文章として残す。
 */
export async function rowsToSightings(
  rows: TableRow[],
  prefName: string,
  sourceId: string,
): Promise<UnifiedSighting[]> {
  const out: UnifiedSighting[] = [];
  let skipped = 0;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const g = await geocodePlace(prefName, r.cityName, "");
    if (!g) {
      skipped++;
      continue;
    }
    const pos = g.precise
      ? g
      : jitterWithin(
          prefName,
          r.cityName,
          g.lat,
          g.lon,
          incidentKey(r.date, prefName, r.cityName, r.sectionName),
        );
    out.push({
      id: `${sourceId}-${r.date}-${i}`,
      source: sourceId,
      // location-precision の GEOCODED_KINDS に入る種別。sectionName が空なら
      // 「市町村までしか分からない事案」として扱われる。
      sourceKind: "llm-html",
      lat: pos.lat,
      lon: pos.lon,
      date: r.date,
      prefectureName: prefName,
      cityName: r.cityName.slice(0, 40),
      sectionName: "",
      comment: r.comment.slice(0, 80),
      headCount: r.headCount,
    });
  }
  console.log(
    `[pdf-table ${sourceId}] ${rows.length} rows → ${out.length} sightings (geocode skip ${skipped})`,
  );
  return out;
}
