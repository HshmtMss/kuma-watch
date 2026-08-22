import type { DataSourceEntry } from "@/data/data-sources";
import { geocodePlace, jitterWithin } from "./geocode";
import { incidentKey } from "@/lib/incident-key";
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
 * 行の形:
 *   № 月日 市町村名 区分 目撃・痕跡別 クマの大きさ 頭数 目撃したクマの状況
 *   1 2026/6/1 山ノ内町 林内 目撃 不明 ２頭 不明
 *   2 2026/6/1 軽井沢町 林内 目撃 成獣 １頭 15:40頃、付近の車道を駆ける1頭を目撃する。
 *
 * 「状況」は空白を含む自由文なので列を左から数えると崩れる。全角の「１頭」を
 * アンカーにして、その前を属性・後ろを状況として切る。頭数が「不明」の行や
 * 状況が空の行もあるため、アンカーが無ければ位置ベースにフォールバックする。
 *
 * 座標: 市町村までで引き、location-precision 側で「市町村までしか分からない事案」
 * として扱われる (件数には入るが地図にピンは打たない)。R7 様式は地区名を持つが、
 * 地区単位のジオコーディングは外部サービスへの問い合わせが 1,280 件になり
 * 4 時間ごとの集約に載らないため、地区名は comment に文章として残すだけにする。
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

/**
 * 「CJK部首補助」(U+2E80〜U+2EFF) を通常の漢字へ寄せる。
 *
 * 長野県の PDF は組版の都合でこのブロックの字を混ぜてくる。全 17 本で 8 種・452 箇所。
 * 見た目は同じでもコードポイントが違うため、たとえば「⻑野市」(U+2ED1) は
 * 「長野市」(U+9577) と別文字列になり、市町村マスタに一致せず 148 件が
 * 長野市に紐づかなかった。
 *
 * NFKC では直らない。康熙部首 (U+2F00〜) には互換分解があるが、こちらの
 * CJK部首補助には無いため、明示的に対応表を持つしかない。
 */
const CJK_RADICAL_FIX: Record<string, string> = {
  "⻑": "長", // ⻑
  "⻄": "西", // ⻄
  "⺠": "民", // ⺠
  "⻘": "青", // ⻘
  "⻨": "麦", // ⻨
  "⻤": "鬼", // ⻤
  "⻲": "亀", // ⻲
  "⻯": "竜", // ⻯
};

function normalizeText(text: string): string {
  // NFKC で全角英数・康熙部首を寄せたうえで、残る CJK部首補助を対応表で置換。
  return text
    .normalize("NFKC")
    .replace(/[⺀-⻿]/g, (c) => CJK_RADICAL_FIX[c] ?? c);
}

export type NaganoRow = {
  date: string;
  cityName: string;
  /** 地区名。R7 年度様式のみ持つ (R8 様式は市町村までしか無い)。 */
  sectionName: string;
  /** 里地 / 林内 */
  kubun: string;
  /** 目撃 / 痕跡 / センサーカメラ */
  kind: string;
  /** 成獣 / 幼獣 / 親子 / 不明 */
  size: string;
  headCount: number;
  comment: string;
};

/**
 * PDF のテキストを行に分解する。テストしやすいよう純関数で分離。
 *
 * 県は年度で様式を変えるので 2 つの並びを両方受ける。日付トークンの位置で見分ける。
 *
 *   R8 (2026-) : № 月日 市町村名 区分 目撃痕跡別 大きさ 頭数 状況
 *                1 2026/6/1 山ノ内町 林内 目撃 不明 ２頭 不明
 *   R7 (2025)  : № 地域振興局 区分 日付 市町村名 地区名 状況
 *                1 松本 里地 2025/04/01 安曇野市 穂高有明 幼獣１頭
 *
 * R7 様式は地区名を持つ。字レベルが分かる方が価値が高いので取りこぼさない。
 */
export function parseNaganoText(text: string): NaganoRow[] {
  const out: NaganoRow[] = [];
  for (const rawLine of normalizeText(text).split("\n")) {
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
    const date = `${dm[1]}-${pad2(month)}-${pad2(day)}`;

    const cityName = toks[di + 1] ?? "";
    if (!cityName) continue;

    let sectionName = "";
    let kubun = "";
    let kind = "";
    let size = "";
    let headCount = 1;
    let comment = "";

    if (di === 1) {
      // R8 様式。「状況」は空白を含む自由文なので、頭数トークンをアンカーにして
      // 前を属性・後ろを状況として切る。
      const hi = toks.findIndex((t) => HEAD.test(t));
      if (hi > di + 1) {
        headCount = Number(HEAD.exec(toks[hi])![1]) || 1;
        size = toks[hi - 1] ?? "";
        kind = toks[hi - 2] ?? "";
        kubun = toks[hi - 3] ?? "";
        comment = toks.slice(hi + 1).join(" ");
      } else {
        // 頭数が「不明」だったり、状況ごと欠けている行。列位置で拾う。
        kubun = toks[di + 2] ?? "";
        kind = toks[di + 3] ?? "";
        size = toks[di + 4] ?? "";
        comment = toks.slice(di + 6).join(" ");
      }
    } else {
      // R7 様式。日付の前に 地域振興局・区分 が入り、市町村の次が地区名。
      kubun = toks.slice(1, di).find((t) => KUBUN.has(t)) ?? "";
      sectionName = toks[di + 2] ?? "";
      comment = toks.slice(di + 3).join(" ");
      // R7 様式は大きさ・頭数の専用列が無く、状況欄に「成獣１頭」等と書かれる。
      // 頭数だけ数値として拾う。size は据え置き (状況欄の文言をそのまま見せる方が
      // 正確で、ここで抜き出すと buildComment で二重に出る)。
      const hm = /([０-９0-9]+)\s*頭/.exec(comment);
      if (hm) headCount = Number(hm[1]) || 1;
    }

    out.push({
      date,
      cityName,
      sectionName,
      kubun,
      kind,
      size,
      headCount: Number.isInteger(headCount) && headCount > 0 ? headCount : 1,
      comment,
    });
  }
  return dropOutlierDates(out);
}

/**
 * 出典 PDF の年の打ち間違いを落とす。
 *
 * 実例: 令和7年7月分 (r0707_mokugeki.pdf) の 226 行目が `2024/07/15` になっており、
 * 他 351 行は全て 2025 年。長野県側の誤記だが、そのまま取り込むと 1 年前の日付の
 * 事案が 1 件混ざり、季節パターンと「直近 1 年」の集計を狂わせる。
 *
 * 各 PDF は 1 か月分なので、中央値から 180 日以上離れた行は誤記とみなす。
 * 12 月〜1 月をまたぐ号があっても 180 日以内に収まるので巻き込まない。
 * 「日付を直す」のではなく「落とす」のは、正しい日付を推測で作らないため。
 */
function dropOutlierDates(rows: NaganoRow[]): NaganoRow[] {
  if (rows.length < 3) return rows;
  const times = rows.map((r) => Date.parse(r.date)).sort((a, b) => a - b);
  const median = times[Math.floor(times.length / 2)];
  const LIMIT_MS = 180 * 24 * 60 * 60 * 1000;
  const kept = rows.filter((r) => Math.abs(Date.parse(r.date) - median) <= LIMIT_MS);
  if (kept.length !== rows.length) {
    const dropped = rows.filter((r) => !kept.includes(r)).map((r) => `${r.date} ${r.cityName}`);
    console.log(`[nagano-pdf] 出典の日付誤記を除外: ${dropped.join(", ")}`);
  }
  return kept;
}

/**
 * 状況欄が空の行が多いので、区分・目撃痕跡別・大きさから一文を組み立てる。
 * 「実データから言葉を作る」方針に従い、無い情報は書かない。
 */
function buildComment(r: NaganoRow): string {
  const parts: string[] = [];
  // 地区名は座標として主張しない (下記参照) が、文章としては残す。
  // 「どのあたりか」は利用者にとって件数より役に立つ情報なので捨てない。
  if (r.sectionName) parts.push(r.sectionName);
  const attrs = [r.kind, r.kubun, r.size].filter(
    (v) => v && v !== "不明" && v !== "目撃",
  );
  if (r.kind && r.kind !== "目撃") parts.push(r.kind);
  if (attrs.length) parts.push(attrs.filter((a) => a !== r.kind).join("・"));
  const head = parts.filter(Boolean).join("・");
  const body = r.comment && r.comment !== "不明" ? r.comment : "";
  return [head, body].filter(Boolean).join(" ").slice(0, 80);
}

export async function fetchNaganoPdfSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  const pdfUrl = source.urls.find((u) => u.role === "pdf")?.url;
  if (!pdfUrl) return [];

  let text: string;
  try {
    const res = await fetch(pdfUrl);
    if (!res.ok) {
      console.log(`[nagano-pdf ${source.id}] fetch failed ${res.status}`);
      return [];
    }
    const buf = new Uint8Array(await res.arrayBuffer());
    // unpdf は pdfjs を serverless 向けに同梱したもの。動的 import にして
    // 使わないルート (地図・通知系) のバンドルに載せない。
    const { extractText, getDocumentProxy } = await import("unpdf");
    const pdf = await getDocumentProxy(buf);
    const r = await extractText(pdf, { mergePages: true });
    text = r.text;
  } catch (e) {
    console.log(
      `[nagano-pdf ${source.id}] pdf parse failed: ${(e as Error).message.slice(0, 120)}`,
    );
    return [];
  }

  const rows = parseNaganoText(text);
  const out: UnifiedSighting[] = [];
  let skipped = 0;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    // 地区名は geocodePlace に渡さない。R7 様式には約 1,280 の地区名があり、
    // 外部ジオコーダ (Nominatim) は 1 req/sec の直列キューなので 1 回の集約に
    // 14〜21 分かかる。refresh-sightings は 4 時間ごと・30 分枠で回るうえ、
    // .cache/geocode.json はワークフローで保存されないため毎回引き直しになり、
    // 枠を圧迫し無料の公共サービスにも負荷をかける。市町村までで引く。
    const g = await geocodePlace(PREF, r.cityName, "");
    if (!g) {
      skipped++;
      continue;
    }
    const pos = g.precise
      ? g
      : jitterWithin(
          PREF,
          r.cityName,
          g.lat,
          g.lon,
          incidentKey(r.date, PREF, r.cityName, r.sectionName),
        );
    out.push({
      id: `${source.id}-${r.date}-${i}`,
      source: source.id,
      // "llm-html" は location-precision の GEOCODED_KINDS に入っており、
      // sectionName が空なら「市町村までしか分からない事案」として扱われる
      // (件数には入るが地図にピンは打たない)。長野の PDF は市町村までしか
      // 持たないのでこの扱いが正しい。抽出方法が LLM から決定的パーサに
      // 変わっても、位置の粒度は変わらないので種別は据え置く。
      sourceKind: "llm-html",
      lat: pos.lat,
      lon: pos.lon,
      date: r.date,
      prefectureName: PREF,
      cityName: r.cityName.slice(0, 40),
      // 空にして「市町村までしか分からない事案」として扱わせる (件数には入るが
      // 地図にピンは打たない)。地区名は分かっていても座標は市町村重心の
      // ジッタでしかないので、ここで名前を持たせると誤った地点を主張してしまう。
      // 地区名は comment に入れて文章として残す。
      sectionName: "",
      comment: buildComment(r),
      headCount: r.headCount,
    });
  }
  console.log(
    `[nagano-pdf ${source.id}] parsed ${rows.length} rows → ${out.length} sightings (geocode skip ${skipped})`,
  );
  return out;
}
