/**
 * 市町村別のクマ出没分析レポートを自動生成する。
 *
 * ねらい: /for-gov に置いてある 12 ページのレポートは「全国データの固定サンプル」で、
 * 自治体から見ると自分の地域の話ではない。同じ分析を **市町村単位** で自動生成できれば、
 *   ①/place の市町村ページから自治体担当者へ出せる導線の着地点になり
 *   ②提案 2（地域特化の傾向分析）が「サンプル」から「御地域の分析」になり
 *   ③1 件目の営業が「作ってみたので見てください」の形にできる。
 *
 * 分析ロジックは新規に書かない。/admin/analytics で既に動いている純粋関数
 * (sighting-analytics / recurrence / contact-risk) をそのまま市町村スコープで呼ぶ。
 *
 * 実行:
 *   npx tsx scripts/build-muni-report.ts --pref=秋田県 --muni=秋田市 --out=<dir>
 *
 * 出力: <out>/muni-report-<pref>-<muni>.html（自己完結 HTML）と同名の .json。
 *
 * 数字の扱い（このレポートの不変条件）:
 *   - 母数を必ず併記する。割合だけを出さない。
 *   - 分類できなかった記録は「分類できた中での割合」と明示する。
 *   - 推計・報告バイアスのある指標には注記を付ける（時刻・行動の偏りなど）。
 *   - 危険/警戒などの煽る語は使わない。
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import {
  monthlyCounts,
  seasonality,
  hourHistogram,
  municipalityProfile,
  type AnalyticsRecord,
} from "../src/lib/sighting-analytics";
import { recurrence, concentration } from "../src/lib/recurrence";
import {
  placeRisk,
  attractantSeason,
  activityRisk,
  severityBreakdown,
  injuryByHour,
  isInjuryRecord,
} from "../src/lib/contact-risk";

// ─── 引数 ───
const args = new Map<string, string>();
for (const a of process.argv.slice(2)) {
  const m = /^--([^=]+)=(.*)$/.exec(a);
  if (m) args.set(m[1], m[2]);
}
const PREF = args.get("pref") ?? "";
const MUNI = args.get("muni") ?? "";
const OUT_DIR = args.get("out") ?? join(process.cwd(), ".cache", "muni-reports");
if (!PREF || !MUNI) {
  console.error("使い方: npx tsx scripts/build-muni-report.ts --pref=秋田県 --muni=秋田市 [--out=DIR]");
  process.exit(1);
}

const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });

// ─── データ読み込み（同梱スナップショット）───
const raw = JSON.parse(
  readFileSync(join(process.cwd(), "public", "data", "sightings.json"), "utf8"),
) as { records?: unknown } | unknown[];
// スナップショットは { generatedAt, records } 形式。素の配列も受け付ける。
const all = (Array.isArray(raw)
  ? raw
  : Array.isArray(raw.records)
    ? raw.records
    : []) as AnalyticsRecord[];
const prefRecords = all.filter((r) => r.prefectureName === PREF);
const muni = all.filter(
  (r) => r.prefectureName === PREF && (r.cityName ?? "").trim() === MUNI,
);
if (muni.length === 0) {
  console.error(`[build-muni-report] ${PREF}${MUNI} の記録が 0 件です。表記を確認してください。`);
  process.exit(1);
}

const dates = muni.map((r) => (r.date ?? "").slice(0, 10)).filter(Boolean).sort();
const firstDate = dates[0];
const lastDate = dates[dates.length - 1];

// ─── 集計 ───
const profile = municipalityProfile(prefRecords, today, PREF, MUNI, 30);
const season = seasonality(muni, today, 3);
const months36 = monthlyCounts(muni, today, 36);
const hours = hourHistogram(muni);
const conc = concentration(muni);
const rec7 = recurrence(muni, 7);
const rec14 = recurrence(muni, 14);
const rec30 = recurrence(muni, 30);
const places = placeRisk(muni);
const attractants = attractantSeason(muni);
const activities = activityRisk(muni);
const sev = severityBreakdown(muni);
const injHour = injuryByHour(muni);
const injuries = muni.filter(isInjuryRecord);

// 地区別（sectionName）。市内のどこに寄っているかは自治体が最も知りたい情報。
const bySection = new Map<string, number>();
for (const r of muni) {
  const s = (r.sectionName ?? "").trim();
  if (!s) continue;
  bySection.set(s, (bySection.get(s) ?? 0) + 1);
}
const sections = [...bySection.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 12)
  .map(([name, count]) => ({ name, count }));
const withSection = [...bySection.values()].reduce((a, b) => a + b, 0);

// 年別件数（年ごとの増減を見せる）
const byYear = new Map<string, number>();
for (const r of muni) {
  const y = (r.date ?? "").slice(0, 4);
  if (/^\d{4}$/.test(y)) byYear.set(y, (byYear.get(y) ?? 0) + 1);
}
const years = [...byYear.entries()].sort((a, b) => a[0].localeCompare(b[0]));

// ─── 結論（データから機械的に導く。文章の生成はしない）───
const peakMonth = season.reduce((best, s) => (s.priorAvg > best.priorAvg ? s : best), season[0]);
const peakHour = hours.buckets.reduce((b, c) => (c.count > b.count ? c : b), hours.buckets[0]);
// placeRisk は人身被害率の降順で返る。件数の最多と、被害率の最も高い区分は別物。
const placesByCount = [...places.buckets].sort((a, b) => b.count - a.count);
const topPlace = placesByCount[0];
const topRatePlace = places.buckets.find((b) => b.injuries > 0) ?? null;
const topAttractant = attractants[0];
const topSection = sections[0];

const reportData = {
  pref: PREF,
  muni: MUNI,
  generatedAt: today,
  coverage: { total: muni.length, firstDate, lastDate },
  profile,
  season,
  months36,
  years,
  hours,
  sections,
  withSection,
  concentration: conc,
  recurrence: { d7: rec7, d14: rec14, d30: rec30 },
  places,
  attractants,
  activities,
  severity: sev,
  injuries: injuries.length,
  injuryByHour: injHour,
};

// ─── 描画ヘルパー（自己完結 SVG。外部ライブラリを使わない）───
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const num = (n: number) => n.toLocaleString("ja-JP");

/** 縦棒グラフ。目盛りと単位を必ず出す（数字だけのグラフを作らない）。 */
function barChart(
  data: { label: string; value: number; alt?: number }[],
  opts: { unit: string; altLabel?: string; height?: number } = { unit: "件" },
): string {
  const H = opts.height ?? 150;
  const W = 720;
  const padL = 44;
  const padB = 26;
  const max = Math.max(1, ...data.map((d) => Math.max(d.value, d.alt ?? 0)));
  const step = Math.pow(10, Math.floor(Math.log10(max)));
  const tick = max / step > 5 ? step * 2 : max / step > 2 ? step : step / 2;
  const bw = (W - padL) / data.length;
  const y = (v: number) => H - padB - (v / max) * (H - padB - 8);

  const gridlines: string[] = [];
  for (let v = 0; v <= max; v += tick) {
    gridlines.push(
      `<line x1="${padL}" y1="${y(v)}" x2="${W}" y2="${y(v)}" stroke="var(--line)" stroke-width="1"/>` +
        `<text x="${padL - 6}" y="${y(v) + 4}" text-anchor="end" font-size="10" fill="var(--sub)">${num(Math.round(v))}</text>`,
    );
  }
  const bars = data
    .map((d, i) => {
      const x = padL + i * bw;
      const main = `<rect x="${x + bw * 0.18}" y="${y(d.value)}" width="${bw * 0.44}" height="${Math.max(0, H - padB - y(d.value))}" fill="var(--accent)"/>`;
      const alt =
        d.alt === undefined
          ? ""
          : `<rect x="${x + bw * 0.62}" y="${y(d.alt)}" width="${bw * 0.22}" height="${Math.max(0, H - padB - y(d.alt))}" fill="var(--alt)"/>`;
      const lab = `<text x="${x + bw / 2}" y="${H - padB + 14}" text-anchor="middle" font-size="10" fill="var(--sub)">${esc(d.label)}</text>`;
      return main + alt + lab;
    })
    .join("");
  const legend = opts.altLabel
    ? `<g><rect x="${padL}" y="4" width="9" height="9" fill="var(--accent)"/><text x="${padL + 13}" y="12" font-size="10" fill="var(--sub)">今年</text>` +
      `<rect x="${padL + 52}" y="4" width="9" height="9" fill="var(--alt)"/><text x="${padL + 65}" y="12" font-size="10" fill="var(--sub)">${esc(opts.altLabel)}</text></g>`
    : "";
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="棒グラフ（単位: ${esc(opts.unit)}）">${gridlines.join("")}${bars}${legend}<text x="0" y="12" font-size="10" fill="var(--sub)">${esc(opts.unit)}</text></svg>`;
}

/** 横棒（順位表）。件数と割合を必ず併記する。 */
function rankTable(
  rows: { name: string; count: number; extra?: string }[],
  denom: number,
  opts: { unit?: string; showShare?: boolean } = {},
): string {
  const unit = opts.unit ?? " 件";
  const showShare = opts.showShare ?? true;
  const max = Math.max(1, ...rows.map((r) => r.count));
  return `<table class="rank"><tbody>${rows
    .map(
      (r) => `<tr>
      <th scope="row">${esc(r.name)}</th>
      <td class="bar"><span style="width:${(r.count / max) * 100}%"></span></td>
      <td class="n">${num(r.count)}${esc(unit)}${showShare ? `<small>（${((r.count / denom) * 100).toFixed(1)}%）</small>` : ""}</td>
      <td class="x">${r.extra ? esc(r.extra) : ""}</td>
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

const MONTH_LABELS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

// ─── HTML ───
const title = `${MUNI}のクマ出没分析レポート`;
const html = `<title>${esc(MUNI)}クマ出没レポート</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap">
<style>
  /* 配色は /for-gov 提案 2（地域特化の傾向分析）の深緑に合わせる。中間色は
     緑にわずかに寄せた温かみのあるストーン系で、無彩色の既定に見えないようにする。 */
  :root{
    --ink:#1f2421;--sub:#5c635e;--line:#e3e5e1;--accent:#1c5c3b;--alt:#cdd2cc;
    --bg:#fdfdfc;--panel:#f5f7f4;--rule:#1c5c3b;
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --ink:#eef1ed;--sub:#a3aba4;--line:#3a423c;--accent:#6ee7a4;--alt:#4a534c;
      --bg:#151a17;--panel:#1e2521;--rule:#6ee7a4;
    }
  }
  :root[data-theme="dark"]{
    --ink:#eef1ed;--sub:#a3aba4;--line:#3a423c;--accent:#6ee7a4;--alt:#4a534c;
    --bg:#151a17;--panel:#1e2521;--rule:#6ee7a4;
  }
  body{
    background:var(--bg);color:var(--ink);margin:0;
    font-family:"Noto Sans JP","Hiragino Sans",system-ui,sans-serif;
    font-size:15px;line-height:1.85;font-feature-settings:"palt";
  }
  .wrap{max-width:820px;margin:0 auto;padding:40px 22px 96px;display:flex;flex-direction:column}
  .cover{border-bottom:2px solid var(--rule);padding-bottom:22px;margin-bottom:4px}
  .eyebrow{font-size:12px;letter-spacing:.18em;color:var(--sub);margin:0 0 10px;font-weight:500}
  h1{
    font-family:"Noto Serif JP",serif;font-weight:700;font-size:30px;line-height:1.35;
    margin:0 0 14px;text-wrap:balance;letter-spacing:.01em;
  }
  .meta{font-size:13px;color:var(--sub);margin:0;line-height:1.9;font-variant-numeric:tabular-nums}
  h2{
    font-family:"Noto Serif JP",serif;font-weight:700;font-size:19px;line-height:1.5;
    margin:52px 0 4px;padding-top:16px;border-top:1px solid var(--line);text-wrap:balance;
  }
  h2 .n{
    display:block;color:var(--accent);font-family:"Noto Sans JP",sans-serif;
    font-size:11px;font-weight:700;letter-spacing:.2em;margin-bottom:4px;
  }
  p{margin:.7em 0;max-width:62ch}
  .lead{color:var(--sub);font-size:14px;margin-top:0}
  b{font-weight:700}
  .kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:10px;margin:18px 0}
  .kpi{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:13px 15px}
  .kpi b{display:block;font-size:23px;line-height:1.25;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
  .kpi span{display:block;font-size:12px;color:var(--sub);line-height:1.6;margin-top:2px}
  figure{margin:16px 0;overflow-x:auto}
  svg{width:100%;min-width:560px;height:auto;display:block}
  table.rank{width:100%;border-collapse:collapse;font-size:14px;margin:14px 0}
  table.rank th{text-align:left;font-weight:500;padding:6px 10px 6px 0;white-space:nowrap;vertical-align:middle}
  table.rank td{padding:6px 0;vertical-align:middle}
  td.bar{width:48%}
  td.bar span{display:block;height:8px;background:var(--accent);border-radius:4px}
  td.n{white-space:nowrap;text-align:right;padding-left:12px;font-variant-numeric:tabular-nums;font-weight:500}
  td.n small{color:var(--sub);font-size:11.5px;font-weight:400}
  td.x{color:var(--sub);font-size:12px;padding-left:12px;white-space:nowrap;font-variant-numeric:tabular-nums}
  .note{
    background:var(--panel);border-left:3px solid var(--alt);padding:11px 15px;
    font-size:12.5px;line-height:1.8;color:var(--sub);margin:14px 0;border-radius:0 6px 6px 0;max-width:none;
  }
  .actions{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:20px 22px 20px 18px;margin:20px 0}
  .actions ol{margin:0;padding-left:1.4em;display:flex;flex-direction:column;gap:.7em}
  .actions li{font-size:14.5px;line-height:1.85}
  footer{margin-top:56px;padding-top:18px;border-top:2px solid var(--rule);font-size:12px;color:var(--sub);line-height:1.9}
  a{color:var(--accent)}
</style>
<div class="wrap">

<div class="cover">
  <p class="eyebrow">${esc(PREF)} ${esc(MUNI)}｜クマ出没データ分析</p>
  <h1>${esc(MUNI)}のクマ出没分析レポート</h1>
  <p class="meta">対象期間 ${esc(firstDate)} 〜 ${esc(lastDate)}／記録 ${num(muni.length)} 件／作成日 ${esc(today)}<br>作成: KumaWatch（くまウォッチ）</p>
</div>

<h2><span class="n">01</span>${esc(MUNI)}の位置づけ</h2>
<p class="lead">${esc(PREF)}内での相対的な位置と、直近の動きです。</p>
<div class="kpis">
  <div class="kpi"><b>${num(profile.total12mo)} 件</b><span>直近 12 か月の出没</span></div>
  <div class="kpi"><b>${profile.rank > 0 ? `県内 ${profile.rank} 位` : "—"}</b><span>出没のあった ${num(profile.muniCount)} 市町村中</span></div>
  <div class="kpi"><b>${profile.vsAvg !== null ? `${profile.vsAvg} 倍` : "—"}</b><span>県内 1 市町村あたり平均（${profile.prefAvg12mo} 件）比</span></div>
  <div class="kpi"><b>${profile.share}%</b><span>県内の出没に占める割合</span></div>
</div>
<p>直近 30 日（${esc(profile.recentLabel)}）は <b>${num(profile.recent)} 件</b>、その前の 30 日（${esc(profile.prevLabel)}）は <b>${num(profile.prev)} 件</b>${profile.ratio !== null ? `で、${profile.ratio} 倍です。` : "です。"}</p>

<h2><span class="n">02</span>年間のリズム — いつ多いか</h2>
<p class="lead">月ごとの件数。今年と、過去 3 年の同月平均を並べています。</p>
<figure>${barChart(
  season.map((s) => ({ label: MONTH_LABELS[s.month - 1], value: s.thisYear, alt: s.priorAvg })),
  { unit: "件", altLabel: "過去3年平均" },
)}</figure>
<div class="note">今年の棒は ${esc(today.slice(0, 7))} までの実績です。それ以降の月はまだ到来していないため 0 と表示されます。過去 3 年平均との比較は、今月までの範囲でお読みください。</div>
<p>過去 3 年の平均で最も多いのは <b>${peakMonth.month} 月（平均 ${peakMonth.priorAvg} 件）</b>です。対策の準備は、この月に入る前に終わっている必要があります。</p>

<h2><span class="n">03</span>年ごとの推移</h2>
<p class="lead">年次の件数。年による差が大きいことを確認するための図です。</p>
<figure>${barChart(
  years.map(([y, c]) => ({ label: y, value: c })),
  { unit: "件" },
)}</figure>
<div class="note">最新年は年の途中までの集計です。前年と単純比較しないでください。また、記録件数は「クマの数」ではなく「通報・記録された数」で、公表方法の変更でも増減します。</div>

<h2><span class="n">04</span>直近 36 か月の推移</h2>
<figure>${barChart(
  months36.map((m) => ({ label: m.month.endsWith("-01") || m.month.endsWith("-07") ? m.month.slice(2) : "", value: m.count })),
  { unit: "件" },
)}</figure>

<h2><span class="n">05</span>時間帯 — 何時に多いか</h2>
<p class="lead">時刻の記録がある ${num(hours.withTime)} 件（全体の ${((hours.withTime / muni.length) * 100).toFixed(1)}%）の分布です。</p>
<figure>${barChart(
  hours.buckets.map((b) => ({ label: b.label, value: b.count })),
  { unit: "件" },
)}</figure>
<p>最も多いのは <b>${esc(peakHour.label)} 時台（${num(peakHour.count)} 件）</b>です。</p>
<div class="note">時刻が入っている記録は一部に限られ、警察通報（#9110）由来が中心です。全体の傾向として断定はできませんが、通報された中での相対的な偏りは読み取れます。</div>

${
  sections.length
    ? `<h2><span class="n">06</span>地区別 — 市内のどこに寄っているか</h2>
<p class="lead">地区名が記録されている ${num(withSection)} 件（全体の ${((withSection / muni.length) * 100).toFixed(1)}%）の内訳。上位 ${sections.length} 地区です。</p>
${rankTable(sections, withSection)}
<div class="note">割合は「地区名が記録できた ${num(withSection)} 件の中での割合」です。地区名のない記録は集計に含まれていません。</div>`
    : ""
}

<h2><span class="n">07</span>集中度 — 「覚えて避ける」がどこまで効くか</h2>
<p class="lead">出没地点を約 1km 四方のメッシュに分け、上位何 % のメッシュに何 % の出没が集まっているかを見ます。</p>
${rankTable(
  conc.rows.map((r) => ({
    name: `出没の多い上位 ${r.topPercent}% の場所`,
    count: Math.round(r.shareOfSightings * 100),
    extra: `${num(r.cells)} メッシュ`,
  })),
  100,
  { unit: "%", showShare: false },
)}
<p>対象メッシュ ${num(conc.totalCells)} か所のうち、${num(conc.singleCells)} か所は 1 件だけの場所です。<b>集中している場所を覚えて避ける対策が有効かどうか</b>は、この表の偏りの大きさで判断できます。</p>

<h2><span class="n">08</span>再発性 — 一度出た場所はどれくらい繰り返すか</h2>
<p class="lead">出没があった場所で、その直後に再び出没する割合を、同じ場所の平常時と比べた倍率です。</p>
${rankTable(
  [
    { name: "出没から 7 日以内", count: Math.round(rec7.afterSighting * 100), extra: `平常時 ${(rec7.baseline * 100).toFixed(0)}% ／ ${rec7.lift.toFixed(2)} 倍` },
    { name: "出没から 14 日以内", count: Math.round(rec14.afterSighting * 100), extra: `平常時 ${(rec14.baseline * 100).toFixed(0)}% ／ ${rec14.lift.toFixed(2)} 倍` },
    { name: "出没から 30 日以内", count: Math.round(rec30.afterSighting * 100), extra: `平常時 ${(rec30.baseline * 100).toFixed(0)}% ／ ${rec30.lift.toFixed(2)} 倍` },
  ],
  100,
  { unit: "%", showShare: false },
)}
<p>倍率が 1 を大きく超えるほど、「直近の出没そのもの」が短期のリスクを押し上げていることになります。判定に使った出没は ${num(rec30.sampleSize)} 件です。</p>

${
  places.buckets.length
    ? `<h2><span class="n">09</span>場所の種類 — 件数と人身被害は一致しない</h2>
<p class="lead">記録本文から場所を判定できた ${num(places.classified)} 件（全 ${num(places.total)} 件の ${((places.classified / places.total) * 100).toFixed(0)}%）の内訳です。</p>
${rankTable(
  placesByCount.map((b) => ({
    name: b.key,
    count: b.count,
    extra: b.injuries > 0 ? `人身 ${b.injuries} 件（${(b.rate * 100).toFixed(2)}%）` : "人身 0 件",
  })),
  places.classified,
)}
<div class="note">出没件数が最も多い場所と、人身被害の割合が最も高い場所は一致しないことがあります。「件数の多い場所を避ける」だけの対策では、被害の起きやすい場所への注意が抜け落ちる可能性があります。</div>`
    : ""
}

${
  attractants.length
    ? `<h2><span class="n">10</span>誘引物 — 何に引き寄せられているか</h2>
<p class="lead">記録本文に誘引物への言及がある件数と、最も多い月です。</p>
${rankTable(
  attractants.map((a) => ({
    name: a.key,
    count: a.count,
    extra: `最多 ${a.peakMonth} 月`,
  })),
  muni.length,
)}
<div class="note">記録本文の語句から判定しています。言及がないだけで存在しなかったとは限りません。</div>`
    : ""
}

<h2><span class="n">11</span>人身被害</h2>
<p class="lead">記録本文から人身被害と判定できたものの集計です。</p>
<div class="kpis">
  <div class="kpi"><b>${num(injuries.length)} 件</b><span>人身被害と判定された記録</span></div>
  <div class="kpi"><b>${((injuries.length / muni.length) * 100).toFixed(2)}%</b><span>全 ${num(muni.length)} 件に占める割合</span></div>
  <div class="kpi"><b>${num(sev.death)} 件</b><span>死亡</span></div>
  <div class="kpi"><b>${num(sev.severe)} 件</b><span>重傷</span></div>
  <div class="kpi"><b>${num(sev.light)} 件</b><span>軽傷</span></div>
  <div class="kpi"><b>${num(sev.unspecified)} 件</b><span>程度の記載なし</span></div>
</div>
${
  activities.some((a) => a.injuries > 0)
    ? `<p>被害時の行動として記録に現れる語の偏りです。</p>
${rankTable(
  activities.filter((a) => a.injuries > 0).slice(0, 8).map((a) => ({
    name: a.key,
    count: a.injuries,
    extra: `全体で ${num(a.allMentions)} 件言及／偏り ${a.lift.toFixed(1)} 倍`,
  })),
  Math.max(1, injuries.length),
)}
<div class="note">通常の目撃記録は「クマの様子」を書き、人身被害の記録は「人が何をしていたか」を書く傾向があります。そのため倍率は実際より大きく出ます。順位の解釈は妥当ですが、倍率そのものは目安としてお読みください。</div>`
    : `<p class="lead">行動別の集計に足る件数がないため、この項目は省略しています。</p>`
}

<h2><span class="n">12</span>このデータから言えること</h2>
<div class="actions">
  <ol>
    <li><b>時期</b>：過去 3 年の平均で最も多いのは <b>${peakMonth.month} 月</b>（平均 ${peakMonth.priorAvg} 件）です。注意喚起・草刈り・誘引物の片付けは、この月に入る前に完了している必要があります。</li>
    <li><b>時間</b>：時刻の記録がある中では <b>${esc(peakHour.label)} 時台</b>が最多です。屋外作業・通学の時間帯と重なるかをご確認ください。</li>
    ${topSection ? `<li><b>場所</b>：地区名の記録がある中では <b>${esc(topSection.name)}</b> が最多で ${num(topSection.count)} 件（地区名のある記録の ${((topSection.count / withSection) * 100).toFixed(1)}%）です。</li>` : ""}
    ${topPlace ? `<li><b>環境</b>：場所を判定できた記録では <b>${esc(topPlace.key)}</b> が最多（${num(topPlace.count)} 件）です。${topRatePlace && topRatePlace.key !== topPlace.key ? `ただし人身被害の割合が最も高いのは <b>${esc(topRatePlace.key)}</b>（${num(topRatePlace.count)} 件中 ${topRatePlace.injuries} 件・${(topRatePlace.rate * 100).toFixed(2)}%）で、件数の多い場所とは一致しません。` : ""}</li>` : ""}
    ${topAttractant ? `<li><b>誘引物</b>：最も多く言及されるのは <b>${esc(topAttractant.key)}</b>（${num(topAttractant.count)} 件、最多は ${topAttractant.peakMonth} 月）です。</li>` : ""}
    <li><b>再発</b>：出没から 30 日以内に同じ場所で再び出没する割合は ${(rec30.afterSighting * 100).toFixed(0)}%（その場所の平常時の ${rec30.lift.toFixed(2)} 倍）です。一度出た場所への短期の注意は、予測に頼らず今日から実施できます。</li>
  </ol>
</div>

<h2><span class="n">注記</span>データについて</h2>
<p>本レポートは、各自治体・警察・報道の公表情報から収集した出没記録 ${num(muni.length)} 件（${esc(firstDate)}〜${esc(lastDate)}）を集計したものです。件数は「クマの生息数」ではなく「通報・記録された数」であり、公表方法の変更によっても増減します。場所・行動・誘引物の分類は記録本文の語句判定によるため、分類できない記録が一定数あります。各項目の母数は本文中に明記しています。</p>
<p>一次情報は各自治体の公式発表をご確認ください。本レポートの数値と異なる場合は、公式情報を優先してください。</p>

<footer>
  ${esc(title)}／作成 ${esc(today)}／KumaWatch（くまウォッチ） https://kuma-watch.jp<br>
  本レポートに関するお問い合わせ・記載内容の訂正のご依頼は https://kuma-watch.jp/for-gov から承ります。
</footer>
</div>`;

// ─── 出力 ───
mkdirSync(OUT_DIR, { recursive: true });
const slug = `${PREF}-${MUNI}`.replace(/[\/\s]/g, "");
const htmlPath = join(OUT_DIR, `muni-report-${slug}.html`);
const jsonPath = join(OUT_DIR, `muni-report-${slug}.json`);
writeFileSync(htmlPath, html);
writeFileSync(jsonPath, JSON.stringify(reportData, null, 2));

console.log(`[build-muni-report] ${PREF}${MUNI}: ${muni.length} 件`);
console.log(`  HTML: ${htmlPath}`);
console.log(`  JSON: ${jsonPath}`);
