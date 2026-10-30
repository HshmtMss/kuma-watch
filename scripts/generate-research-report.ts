#!/usr/bin/env tsx
/**
 * 日次・週次・月次の研究レポートを sightings.json から自動生成するスクリプト。
 *
 * usage:
 *   # 昨日の日次レポートを生成 (DRY-RUN)
 *   npx tsx scripts/generate-research-report.ts --mode=daily
 *   # 任意の日付
 *   npx tsx scripts/generate-research-report.ts --mode=daily --date=2026-05-19 --apply
 *   # 週次 (date を含む週・月-日)
 *   npx tsx scripts/generate-research-report.ts --mode=weekly --date=2026-05-25 --apply
 *   # 月次
 *   npx tsx scripts/generate-research-report.ts --mode=monthly --month=2026-04 --apply
 *   # 既存ページを今のデータで作り直す (公開日は元のまま、改訂日と改訂の注記を付ける)
 *   npx tsx scripts/generate-research-report.ts --mode=daily --date=2026-06-15 --apply --regenerate
 *
 * 設計方針 (B 案):
 *   - 出力品質を担保するため、Web を grounding させず、自前で集約済みの
 *     sightings.json を Gemini に「文章化」してもらう構成。
 *   - 内部の出没データのみを根拠にすることで、サイト上の数値とレポート内の
 *     数値が常に整合する。ハルシネーションも起きにくい。
 *   - 既存の手作業 / Drive 経由 import-research.ts と共存できるように、
 *     ファイル先頭マーカーを `// auto-generated: research-report v1` に
 *     することで Drive import と区別する。
 *
 * 2026-10-31 の抜き取り点検で見つかった誤りへの対策 ([[article-fact-check]]):
 *   - 同じ事案の重複記録 (複数社の報道) を incidentKey で束ねてから集計・抜粋する。
 *     束ねないと件数が膨らみ、同じ事案を別件として書いてしまう。
 *   - 「人身被害キーワード一致 N 件」のような照合件数を渡すと、事案数として書かれた
 *     (週次で多発)。照合件数はプロンプトに入れない。
 *   - 出典は LLM に URL を選ばせず、本文の [S3] 形式の記録 ID から機械的に作る。
 *     架空の ※ 番号・「サンプル[7]」の残骸が出なくなる。
 *   - 報道日しか分からない記録 (dateEstimated) は、その旨を添えて渡す。
 *   - 引用・個人名・データにない数字・中国語や数式記号を禁止し、出力を検査して
 *     違反があれば 1 回だけ生成し直す。直らなければ公開しない (CI を失敗させる)。
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { GEMINI_REPORT_MODEL } from "../src/lib/gemini-models";
import { incidentKey } from "../src/lib/incident-key";

type CliArgs = {
  mode: "daily" | "weekly" | "monthly";
  date?: string;
  month?: string;
  apply: boolean;
  regenerate: boolean;
};

type Sighting = {
  id: string | number;
  source: string;
  sourceKind?: string;
  lat: number;
  lon: number;
  date: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
  isOfficial?: boolean;
  sourceUrl?: string;
  /** 発生日が分からず、報道日・取り込み日を date に入れた記録 */
  dateEstimated?: boolean;
};

type Snapshot = { generatedAt: number; records: Sighting[] };

type ResearchBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; rows: string[][] };

type Reference = { title: string; url: string; site?: string };

type ResearchPayload = {
  title: string;
  lead: string;
  body: ResearchBlock[];
  references: Reference[];
};

/** LLM が返す形。出典は返させず、本文の [S3] 形式の記録 ID から後で組み立てる。 */
type GeneratedPayload = Omit<ResearchPayload, "references">;

const ROOT = process.cwd();
const MARKER = "// auto-generated: research-report v1";

const GEMINI_MODEL =
  process.env.GEMINI_RESEARCH_MODEL ?? GEMINI_REPORT_MODEL;
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// 上限。プロンプトに渡す出没レコードの最大件数 (大量に渡すとトークン爆発)
// 日次: 全件 / 週次: pref 別上位 + 抜粋 / 月次: pref 別集計 + 抜粋
const MAX_RECORDS_DAILY = 500;
const MAX_RECORDS_WEEKLY = 300;
const MAX_RECORDS_MONTHLY = 200;

function parseArgs(): CliArgs {
  const out: CliArgs = { mode: "daily", apply: false, regenerate: false };
  for (const arg of process.argv.slice(2)) {
    if (arg === "--apply") out.apply = true;
    else if (arg === "--regenerate") out.regenerate = true;
    else if (arg.startsWith("--mode=")) {
      const v = arg.slice("--mode=".length);
      if (v !== "daily" && v !== "weekly" && v !== "monthly") {
        throw new Error(`invalid --mode: ${v}`);
      }
      out.mode = v;
    } else if (arg.startsWith("--date=")) out.date = arg.slice("--date=".length);
    else if (arg.startsWith("--month=")) out.month = arg.slice("--month=".length);
  }
  return out;
}

function isoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function jpDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

function jpMonth(yyyymm: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(yyyymm);
  if (!m) return yyyymm;
  return `${m[1]}年${Number(m[2])}月`;
}

type Period = {
  // 表示用ラベル ("2026年5月19日" / "2026年5月12日〜18日" / "2026年5月")
  label: string;
  // slug 用キー ("2026-05-19" / "2026-05-18-week" / "2026-05")
  slugKey: string;
  // 期間内のレコードを抽出する predicate
  matches: (dateIso: string) => boolean;
  // ページ上の対象期間表示
  rangeLabel: string;
  // RESEARCH_ENTRIES の category
  category: "daily-report" | "weekly-report" | "monthly-report";
  slug: string;
};

function buildPeriod(args: CliArgs): Period {
  if (args.mode === "daily") {
    // デフォルトは昨日 (cron で「今日の朝に昨日分」を生成する想定)
    const d = args.date
      ? new Date(`${args.date}T00:00:00+09:00`)
      : new Date(Date.now() - 86_400_000);
    const iso = isoDate(d);
    return {
      label: jpDate(iso),
      slugKey: iso,
      matches: (di) => di.startsWith(iso),
      rangeLabel: jpDate(iso),
      category: "daily-report",
      slug: `${iso}-daily-report`,
    };
  }
  if (args.mode === "weekly") {
    // 週は「終了日 (endDate)」を含む直近 7 日。週次レポートは月曜朝に
    // 「前週 (月-日)」分として走らせる想定なので、引数なしの場合は昨日終わり。
    const endIso = args.date ?? isoDate(new Date(Date.now() - 86_400_000));
    const endD = new Date(`${endIso}T00:00:00+09:00`);
    const startD = new Date(endD.getTime() - 6 * 86_400_000);
    const startIso = isoDate(startD);
    return {
      label: `${jpDate(startIso)}〜${jpDate(endIso)}`,
      slugKey: `${endIso}-week`,
      matches: (di) => di >= startIso && di <= endIso,
      rangeLabel: `${jpDate(startIso)}〜${jpDate(endIso)}`,
      category: "weekly-report",
      slug: `${endIso}-weekly-report`,
    };
  }
  // monthly
  const month = args.month ?? (() => {
    // 月初に前月分を走らせる想定。デフォルト: 先月。
    const d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  })();
  return {
    label: jpMonth(month),
    slugKey: month,
    matches: (di) => di.startsWith(month),
    rangeLabel: jpMonth(month),
    category: "monthly-report",
    slug: `${month}-monthly-report`,
  };
}

function loadSightings(): Sighting[] {
  const path = join(ROOT, "public", "data", "sightings.json");
  if (!existsSync(path)) throw new Error(`sightings.json not found: ${path}`);
  const raw = readFileSync(path, "utf8");
  const snap = JSON.parse(raw) as Snapshot;
  if (!Array.isArray(snap.records)) throw new Error("sightings.json malformed");
  return snap.records;
}

type Aggregated = {
  total: number;
  byPref: { pref: string; count: number }[];
  bySource: { source: string; count: number }[];
  newsRecords: Sighting[]; // sourceUrl 付き = 引用元として使えるもの
  officialRecords: Sighting[];
  humanInjuryRecords: Sighting[]; // 「負傷」「怪我」「襲」を含む
  urbanRecords: Sighting[]; // 「住宅」「市街」「学校」を含む
  notableComments: Sighting[]; // 「緊急銃猟」「捕獲」「駆除」を含む
};

// レコード一覧から「インシデント単位の代表サンプル」を選定。
// 各都道府県あたり最大 5 件、かつ重要キーワード (人身被害・市街・緊急銃猟) を優先。
function pickSamples(records: Sighting[], cap: number): Sighting[] {
  const importanceScore = (r: Sighting): number => {
    const c = r.comment ?? "";
    let s = 0;
    if (/襲|負傷|怪我|搬送|重体|死亡/.test(c)) s += 100;
    if (/緊急銃猟|射殺|猟銃/.test(c)) s += 50;
    if (/住宅|市街|学校|駅|スーパー|公園/.test(c)) s += 30;
    if (/捕獲|駆除|わな/.test(c)) s += 20;
    if (r.sourceUrl) s += 5;
    if (r.isOfficial) s += 3;
    return s;
  };
  const byPref = new Map<string, Sighting[]>();
  for (const r of records) {
    const arr = byPref.get(r.prefectureName) ?? [];
    arr.push(r);
    byPref.set(r.prefectureName, arr);
  }
  const out: Sighting[] = [];
  for (const [, arr] of byPref) {
    arr.sort((a, b) => importanceScore(b) - importanceScore(a));
    out.push(...arr.slice(0, 5));
  }
  out.sort((a, b) => importanceScore(b) - importanceScore(a));
  return out.slice(0, cap);
}

function aggregate(records: Sighting[]): Aggregated {
  const byPref = new Map<string, number>();
  const bySource = new Map<string, number>();
  const newsRecords: Sighting[] = [];
  const officialRecords: Sighting[] = [];
  const humanInjury: Sighting[] = [];
  const urban: Sighting[] = [];
  const notable: Sighting[] = [];
  for (const r of records) {
    byPref.set(r.prefectureName, (byPref.get(r.prefectureName) ?? 0) + 1);
    bySource.set(r.source, (bySource.get(r.source) ?? 0) + 1);
    if (r.source === "news" && r.sourceUrl) newsRecords.push(r);
    if (r.isOfficial) officialRecords.push(r);
    const c = r.comment ?? "";
    if (/襲|負傷|怪我|搬送|重体|死亡/.test(c)) humanInjury.push(r);
    if (/住宅|市街|学校|駅|スーパー|公園/.test(c)) urban.push(r);
    if (/緊急銃猟|射殺|猟銃|捕獲|駆除|わな/.test(c)) notable.push(r);
  }
  return {
    total: records.length,
    byPref: [...byPref.entries()]
      .map(([pref, count]) => ({ pref, count }))
      .sort((a, b) => b.count - a.count),
    bySource: [...bySource.entries()]
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count),
    newsRecords,
    officialRecords,
    humanInjuryRecords: humanInjury,
    urbanRecords: urban,
    notableComments: notable,
  };
}

function buildPrompt(
  period: Period,
  agg: Aggregated,
  samples: Sighting[],
): string {
  const sampleLines = samples.map(
    (r, i) =>
      `[S${i + 1}] ${r.date}${r.dateEstimated ? " (報道日。発生日は不明)" : ""} ${r.prefectureName} ${r.cityName} ${r.sectionName ? "/ " + r.sectionName : ""}\n    内容: ${(r.comment ?? "").slice(0, 160)}\n    出所: ${r.isOfficial ? "自治体・警察の公表" : r.source === "news" ? "報道" : r.source}`,
  );

  const topPrefs = agg.byPref
    .slice(0, 10)
    .map((p) => `${p.pref} ${p.count}件`)
    .join(" / ");

  const modeBlock =
    period.category === "daily-report"
      ? `日次レポート (1 日分)。当日の出没事案・人身被害・自治体対応を、本データのみに基づいて 1,500〜2,500 字で分析的に文章化してください。
- 主要事案（人身被害・緊急銃猟・都市部出没）があれば最初に取り上げる
- 地域別 (東北/関東/中部/関西/中国/四国/九州/北海道) に節を分け、出没の傾向を述べる
- 末尾に "リスク評価" 節として、季節要因・餌資源・人口圏接近度から総括`
      : period.category === "weekly-report"
        ? `週次レポート (7 日分)。期間内の出没動向を 2,000〜3,000 字で総括してください。
- 「主要トピック」を 3〜5 件抽出して節立て
- 地域別動向 (上位都道府県のホットスポット)
- 注目事案 (人身被害・緊急銃猟・都市部出没) を時系列で整理
- 末尾に "週次評価" 節として、リスク全体傾向と次週の警戒ポイント`
        : `月次レポート (1 ヶ月分)。期間内の出没動向を 3,000〜5,000 字で総括してください。
- "月次サマリー" を冒頭に置く (総件数・上位都道府県・人身被害件数)
- 地域別 (東北/関東/中部/関西/中国/四国/九州/北海道) に節立て
- "主要トピック" を 5〜8 件抽出 (時系列または地域単位)
- 末尾に "月次評価と展望" 節として、季節要因・前年比 (※前年比は推測不可なので「データ累計から見ると」程度に留める)`;

  return `あなたは野生動物管理の専門家として、くまウォッチ (獣医工学ラボ) が公開する研究レポートを執筆します。
本データ以外の外部知識は使わないこと。日付・地点・件数は与えられたデータのみを根拠にすること。

=== 厳守事項 ===
- 総件数は「同じ事案の重複を束ねた後の事案数」である。都道府県別の件数もそのまま使い、自分で足し引きしない。
- 地名の紹介や背景知識 (観光地としての説明・過去の事例など) を足さない。データの出所の内訳 (報道・自治体など) も書かない。
- 記録にない数字・人数・頭数・年齢・時刻・固有名詞 (個人名・施設名・団体名) を書かない。「〜名が負傷」などは、その記録の内容に書かれている場合だけ書く。
- 複数の記録をまとめて「1 日に 2 度の襲撃」「計 4 名が負傷」のように 1 つの事件として書かない。記録ごとに別の事案として扱う。
- 記録の内容に対象期間より前の日付の出来事が書かれている場合 (例: 過去の事件の続報・判決・検証)、それを対象期間に起きた出来事として書かない。
- 「(報道日。発生日は不明)」の記録は、発生日を断定せず「〜と報じられた」と書く。
- 人の発言を「」で引用しない。個人の氏名は書かない (被害者・目撃者・職員・研究者のいずれも)。
- 日本語だけで書く。中国語の語・英語の語・数式記号 ($ や \\ など) を使わない。
- 本文で記録に触れるときは、文末に [S3] の形で記録 ID を付ける (複数なら [S3][S7])。「記録[3]」「※」などの別の書き方はしない。データの説明に「サンプル」「代表記録」「抽出」などの言葉を使わず、地域や事案そのものを書く。ID は上の一覧にあるものだけを使う。

=== 期間 ===
${period.label} (${period.category})

=== 集計 ===
総件数: ${agg.total}
上位都道府県: ${topPrefs}

=== 主な記録 (${samples.length} 件。全記録ではなく、重要度の高いものを選んだ一部) ===
${sampleLines.join("\n")}

=== 指示 ===
${modeBlock}

=== 出力形式 ===
JSON のみを返す。以下のスキーマに従うこと:
{
  "title": "${period.label} 国内クマ出没事案の${period.category === "daily-report" ? "時空間分析と分析報告" : period.category === "weekly-report" ? "週次総括レポート" : "月次総括レポート"}",
  "lead": "本文冒頭 1-2 文の要約 (130 字程度)",
  "body": [
    { "type": "p", "text": "..." },
    { "type": "h2", "text": "..." },
    { "type": "h3", "text": "..." },
    { "type": "ul", "items": ["...", "..."] },
    { "type": "table", "rows": [["列1ヘッダ","列2ヘッダ"],["セル","セル"]] }
  ]
}

- 出典の一覧は返さない (本文の [S3] から自動で作る)
- table は 4-6 列が読みやすい
- 本文は **である調** で論理的に。煽情的表現は避ける
`;
}

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string" },
    lead: { type: "string" },
    body: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: { type: "string", enum: ["p", "h2", "h3", "ul", "ol", "table"] },
          text: { type: "string" },
          items: { type: "array", items: { type: "string" } },
          rows: {
            type: "array",
            items: { type: "array", items: { type: "string" } },
          },
        },
        required: ["type"],
      },
    },
  },
  required: ["title", "lead", "body"],
};

async function callGemini(prompt: string): Promise<GeneratedPayload> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is required");
  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 65536,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
      },
    }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`gemini HTTP ${res.status}: ${errText.slice(0, 500)}`);
  }
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!text) throw new Error("gemini returned empty");
  const parsed = JSON.parse(text) as GeneratedPayload;
  return parsed;
}

function blockTexts(b: ResearchBlock): string[] {
  if (b.type === "ul" || b.type === "ol") return b.items;
  if (b.type === "table") return b.rows.flat();
  return [b.text];
}

/** 簡体字にしかない字。ここに当たれば中国語が混ざっている。 */
const SIMPLIFIED_ONLY = /[们这说发现时间对应该给关环让处见从车门马鸟鱼东为过还进运开头书长问]/;

/**
 * 生成結果の機械検査。違反の説明を返す (空なら合格)。
 * 抜き取り点検で実際に見つかった生成の残骸だけを対象にしている。
 */
function lintPayload(p: GeneratedPayload, sampleCount: number): string[] {
  const issues: string[] = [];
  const texts = [p.title, p.lead, ...p.body.flatMap(blockTexts)];
  for (const t of texts) {
    if (/サンプル|※\s*\d|相当\]/.test(t)) issues.push(`記録の参照の書き方が違う: ${t.slice(0, 60)}`);
    if (/\$|\\[a-zA-Z]/.test(t)) issues.push(`数式記号: ${t.slice(0, 60)}`);
    if (SIMPLIFIED_ONLY.test(t)) issues.push(`中国語の混入: ${t.slice(0, 60)}`);
    if (/高爾夫|球場的/.test(t)) issues.push(`中国語の混入: ${t.slice(0, 60)}`);
    for (const m of t.matchAll(/\[S(\d+)\]/g)) {
      const n = Number(m[1]);
      if (n < 1 || n > sampleCount) issues.push(`存在しない記録 ID [S${n}]`);
    }
  }
  return issues;
}

/**
 * 本文の [S3] を ※1 形式に振り直し、参照された記録から参考文献を作る。
 * 番号は本文に初めて出た順。URL を持たない記録も一覧には載せる (リンクにはしない)。
 */
function attachReferences(p: GeneratedPayload, samples: Sighting[]): ResearchPayload {
  const order = new Map<number, number>(); // sample index (0-based) -> ref number
  const renumber = (t: string): string =>
    t
      .replace(/(?:\[S\d+\])+/g, (group) => {
        const nums: number[] = [];
        for (const m of group.matchAll(/\[S(\d+)\]/g)) {
          const idx = Number(m[1]) - 1;
          if (!samples[idx]) continue;
          if (!order.has(idx)) order.set(idx, order.size + 1);
          const n = order.get(idx)!;
          if (!nums.includes(n)) nums.push(n);
        }
        return nums.length > 0 ? `（※${nums.join("・")}）` : "";
      })
      .replace(/\s+（※/g, "（※")
      .replace(/(（※[^）]*）)\s+/g, "$1");
  const mapBlock = (b: ResearchBlock): ResearchBlock => {
    if (b.type === "ul" || b.type === "ol") return { ...b, items: b.items.map(renumber) };
    if (b.type === "table") return { ...b, rows: b.rows.map((r) => r.map(renumber)) };
    return { ...b, text: renumber(b.text) };
  };
  const body = p.body.map(mapBlock);
  const lead = renumber(p.lead).replace(/（※[^）]*）/g, "");
  const references: Reference[] = [...order.entries()]
    .sort((a, b) => a[1] - b[1])
    .map(([idx]) => {
      const r = samples[idx];
      const place = `${r.prefectureName}${r.cityName}${r.sectionName ? " " + r.sectionName : ""}`;
      return {
        title: `${jpDate(r.date.slice(0, 10))} ${place}の出没情報`,
        url: r.sourceUrl && /^https?:\/\//.test(r.sourceUrl) ? r.sourceUrl : "",
        site: r.isOfficial ? "自治体・警察の公表" : r.source === "news" ? "報道" : undefined,
      };
    });
  return { title: p.title, lead, body, references };
}

/** 同じ事案の重複記録を束ねる。代表には URL と内容の長い記録を残す。 */
function dedupeIncidents(records: Sighting[]): Sighting[] {
  const best = new Map<string, Sighting>();
  const score = (r: Sighting) => (r.isOfficial ? 1000 : 0) + (r.sourceUrl ? 500 : 0) + (r.comment?.length ?? 0);
  for (const r of records) {
    const key = incidentKey(r.date?.slice(0, 10), r.prefectureName, r.cityName, r.sectionName);
    const cur = best.get(key);
    if (!cur || score(r) > score(cur)) best.set(key, r);
  }
  return [...best.values()];
}

function escapeJsxText(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function renderBlock(b: ResearchBlock): string {
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

function renderPage(
  period: Period,
  payload: ResearchPayload,
  publishedAt: string,
  agg: Aggregated,
  modifiedAt: string = publishedAt,
): string {
  const revisionNote =
    modifiedAt !== publishedAt
      ? `
      <p className="text-sm text-stone-500">${jpDate(modifiedAt).replace(/(\d+)/g, " $1 ").replace(/^ | $/g, "")} 改訂：同じ出没の重複を束ね、その後に集まった記録も含めて、本文を作り直しました。件数は公開時と異なることがあります。</p>
`
      : "";
  const categoryLabel =
    period.category === "daily-report"
      ? "日次レポート"
      : period.category === "weekly-report"
        ? "週次レポート"
        : "月次レポート";
  const titleJs = JSON.stringify(payload.title);
  const leadJs = JSON.stringify(payload.lead);
  const bodyJsx = payload.body.map(renderBlock).join("\n");
  // 県別件数チャート（全県分を埋め込み、表示側で上位 N + 残りを集計）
  const chartDataJs = JSON.stringify(
    agg.byPref.map((p) => ({ pref: p.pref, count: p.count })),
  );
  const refsJs = JSON.stringify(payload.references, null, 2)
    .split("\n")
    .map((l, i) => (i === 0 ? l : `  ${l}`))
    .join("\n");
  return `${MARKER}
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: ${period.rangeLabel} / mode: ${period.category} / 生成日: ${publishedAt}
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = ${JSON.stringify(period.slug)};
const TITLE = ${titleJs};
const DESCRIPTION = ${leadJs};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: \`\${SITE_URL}/research/\${SLUG}\` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: \`\${SITE_URL}/research/\${SLUG}\`,
    type: "article",
    publishedTime: ${JSON.stringify(publishedAt)},
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
  datePublished: ${JSON.stringify(publishedAt)},
  dateModified: ${JSON.stringify(modifiedAt)},
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

const REFERENCES: { title: string; url: string; site?: string }[] = ${refsJs};

const CHART_DATA: { pref: string; count: number }[] = ${chartDataJs};

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          ${categoryLabel}
        </span>
        <span>対象期間: ${period.rangeLabel}</span>
        <span>·</span>
        <span>公開: ${publishedAt}</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={${agg.total}}
        periodLabel={${JSON.stringify(period.rangeLabel)}}
      />

${bodyJsx}
${revisionNote}
      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                {r.url.startsWith("http") ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.title}
                  </a>
                ) : (
                  // 取り込み元 ID (例: iwate-morioka-mymap) は URL ではないのでリンクにしない
                  // (相対リンク /research/<id> になり 404 を生むため)。
                  r.title
                )}
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
          <dd>${period.rangeLabel}</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>${publishedAt}</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>${modifiedAt}</dd>
          <dt className="text-stone-500">データ範囲</dt>
          <dd>くまウォッチ sightings.json (内部集計データのみ)</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、くまウォッチが収集した出没データを LLM が分析・文章化した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
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

function extractRegionsFromBody(body: ResearchBlock[]): string[] {
  const PREF_NAMES = [
    "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
    "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
    "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
    "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
    "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
    "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
    "熊本県","大分県","宮崎県","鹿児島県","沖縄県",
  ];
  const text = body
    .map((b) => {
      if (b.type === "p" || b.type === "h2" || b.type === "h3") return b.text;
      if (b.type === "ul" || b.type === "ol") return b.items.join("\n");
      if (b.type === "table") return b.rows.map((r) => r.join(" ")).join("\n");
      return "";
    })
    .join("\n");
  const counts = new Map<string, number>();
  for (const pref of PREF_NAMES) {
    const re = new RegExp(pref.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    const n = (text.match(re) ?? []).length;
    if (n > 0) counts.set(pref, n);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || PREF_NAMES.indexOf(a[0]) - PREF_NAMES.indexOf(b[0]))
    .slice(0, 5)
    .map(([pref]) => pref);
}

function appendToIndex(
  slug: string,
  category: Period["category"],
  rangeLabel: string,
  publishedAt: string,
  regions: string[],
): void {
  const path = join(ROOT, "src", "lib", "research-entries.ts");
  const content = readFileSync(path, "utf8");
  if (content.includes(`slug: ${JSON.stringify(slug)}`)) {
    console.log(`[generate-research]   ${slug} already in RESEARCH_ENTRIES, skipping append`);
    return;
  }
  const marker = "export const RESEARCH_ENTRIES: ResearchEntry[] = [";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.warn("[generate-research] RESEARCH_ENTRIES marker not found");
    return;
  }
  const insertAt = idx + marker.length;
  const titleByCat = {
    "daily-report": `${rangeLabel} 国内クマ出没事案の時空間分析と分析報告`,
    "weekly-report": `${rangeLabel} 国内クマ出没事案の週次総括レポート`,
    "monthly-report": `${rangeLabel} 国内クマ出没動向の月次総括レポート`,
  };
  const addition = `
  {
    slug: ${JSON.stringify(slug)},
    title: ${JSON.stringify(titleByCat[category])},
    lead: ${JSON.stringify(`${rangeLabel}の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。`)},
    publishedAt: ${JSON.stringify(publishedAt)},
    category: ${JSON.stringify(category)},
    regions: ${JSON.stringify(regions)},
  },`;
  const next = content.slice(0, insertAt) + addition + content.slice(insertAt);
  writeFileSync(path, next);
}

async function main() {
  const args = parseArgs();
  const period = buildPeriod(args);
  console.log(
    `[generate-research] mode=${args.mode} slug=${period.slug} apply=${args.apply}`,
  );

  const pageDir = join(ROOT, "src", "app", "research", period.slug);
  const pagePath = join(pageDir, "page.tsx");
  // 作り直しのときは元の公開日を引き継ぐ
  let originalPublishedAt: string | null = null;
  if (existsSync(pagePath)) {
    const existing = readFileSync(pagePath, "utf8");
    if (!args.regenerate) {
      console.log(`[generate-research] ${pagePath} already exists, skipping`);
      return;
    }
    if (!existing.startsWith(MARKER)) {
      throw new Error(`${pagePath} is not an auto-generated page; refusing to regenerate`);
    }
    originalPublishedAt = /publishedTime: "(\d{4}-\d{2}-\d{2})"/.exec(existing)?.[1] ?? null;
    if (!originalPublishedAt) throw new Error(`publishedTime not found in ${pagePath}`);
  }

  const sightings = loadSightings();
  const filtered = sightings.filter((r) => r.date && period.matches(r.date));
  console.log(
    `[generate-research] period ${period.label}: ${filtered.length} records`,
  );
  if (filtered.length === 0) {
    console.log("[generate-research] no records in period, skipping");
    return;
  }

  const cap =
    period.category === "daily-report"
      ? MAX_RECORDS_DAILY
      : period.category === "weekly-report"
        ? MAX_RECORDS_WEEKLY
        : MAX_RECORDS_MONTHLY;

  const incidents = dedupeIncidents(filtered);
  console.log(`[generate-research] incidents after dedupe: ${incidents.length}`);
  const agg = aggregate(incidents);
  const samples = pickSamples(incidents, cap);
  const prompt = buildPrompt(period, agg, samples);

  console.log(
    `[generate-research] prompt: ${prompt.length} chars, samples: ${samples.length}`,
  );
  if (!args.apply) {
    console.log("[generate-research] DRY-RUN. Re-run with --apply to write page.");
    console.log("---");
    console.log(prompt.slice(0, 800) + "...");
    return;
  }

  let generated = await callGemini(prompt);
  let issues = lintPayload(generated, samples.length);
  if (issues.length > 0) {
    console.warn(`[generate-research] lint failed, retrying once:\n  ${issues.join("\n  ")}`);
    generated = await callGemini(prompt);
    issues = lintPayload(generated, samples.length);
    if (issues.length > 0) {
      throw new Error(`generated report failed lint:\n  ${issues.join("\n  ")}`);
    }
  }
  const payload = attachReferences(generated, samples);
  console.log(
    `[generate-research] gemini OK: ${payload.body.length} blocks, ${payload.references.length} refs`,
  );

  const today = isoDate(new Date());
  const publishedAt = originalPublishedAt ?? today;
  const pageJs = renderPage(period, payload, publishedAt, agg, today);

  if (!existsSync(pageDir)) mkdirSync(pageDir, { recursive: true });
  writeFileSync(pagePath, pageJs);
  console.log(`[generate-research] wrote ${pagePath}`);

  if (originalPublishedAt) {
    console.log("[generate-research] regenerated (index entry kept as is). done.");
    return;
  }
  const regions = extractRegionsFromBody(payload.body);
  appendToIndex(period.slug, period.category, period.rangeLabel, publishedAt, regions);
  console.log(
    `[generate-research] appended to RESEARCH_ENTRIES (regions: ${regions.join(", ") || "—"})`,
  );

  console.log("[generate-research] done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
