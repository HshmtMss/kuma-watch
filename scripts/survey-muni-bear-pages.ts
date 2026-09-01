/**
 * 市町村のクマ情報ページに「個別の出没記録」が載っているかを下見する。
 *
 * 県が個別記録を公開していない県 (兵庫・広島・鳥取・岡山・和歌山…) では、
 * 市町村が代わりに出していることがある。muni-official-links.ts の bearUrl は
 * 実在確認済みなので、そこから取り込み候補を選ぶ。
 *
 * 判定は本番と同じ llm-html 抽出器をそのまま通して行う。「ページはあるが
 * 注意喚起だけで記録は無い」が大半なので、当たりだけを登録しないと
 * 無駄な Gemini 呼び出しと健全性チェックのノイズが増える。
 *
 * 政令市は区ごとに同じ URL が登録されているため URL 単位で束ねる
 * (神戸市は 9 区が同一ページ。区ごとに登録すると 9 重に取り込む)。
 *
 *   npx tsx --env-file-if-exists=.env.local scripts/survey-muni-bear-pages.ts 兵庫県
 */
import { MUNI_OFFICIAL_LINKS } from "../src/data/muni-official-links";
import { fetchLlmHtmlSightings } from "../src/lib/sources/llm-html";
import { DATA_SOURCES, type DataSourceEntry } from "../src/data/data-sources";

const PREF_CODE: Record<string, string> = {
  兵庫県: "28", 広島県: "34", 鳥取県: "31", 岡山県: "33", 和歌山県: "30",
  三重県: "24", 滋賀県: "25", 奈良県: "29", 愛知県: "23", 京都府: "26",
  神奈川県: "14", 静岡県: "22", 埼玉県: "11", 東京都: "13", 茨城県: "08",
  岐阜県: "21", 福井県: "18", 石川県: "17",
};

/** 「美方郡新温泉町」→「新温泉町」。政令市の区は市までに丸める。 */
function shortCity(cityName: string): string {
  const noGun = cityName.replace(/^.+?郡/, "");
  const m = /^(.+?市)(.+区)$/.exec(noGun);
  return m ? m[1] : noGun;
}

async function main() {
  const pref = process.argv[2];
  if (!pref) {
    console.error("使い方: npx tsx scripts/survey-muni-bear-pages.ts <都道府県名>");
    process.exit(1);
  }
  const rows = MUNI_OFFICIAL_LINKS.filter((m) => m.prefName === pref && m.bearUrl);
  // URL 単位で束ねる。同じページを共有する自治体は 1 ソースにまとめる。
  const byUrl = new Map<string, string[]>();
  for (const m of rows) {
    const list = byUrl.get(m.bearUrl!) ?? [];
    list.push(m.cityName);
    byUrl.set(m.bearUrl!, list);
  }
  const registered = new Set(
    DATA_SOURCES.flatMap((s) => s.urls?.map((u) => u.url) ?? []),
  );
  console.log(`${pref}: bearUrl ${rows.length} 件 → 重複除去後 ${byUrl.size} ページ\n`);

  type Row = { city: string; shared: string[]; url: string; n: number; latest: string; sample: string; already: boolean };
  const results: Row[] = [];
  for (const [url, cities] of byUrl) {
    const city = shortCity(cities[0]);
    const src = {
      id: `survey-${city}`,
      kind: "municipal",
      prefCode: PREF_CODE[pref] ?? "00",
      regionLabel: `${pref} ${city} クマ出没情報`,
      bearStatus: "present",
      urls: [{ url, role: "list" as const, hint: `${city} クマ情報` }],
      extractor: "llm-html",
      defaultCity: city,
    } as unknown as DataSourceEntry;
    let out: Awaited<ReturnType<typeof fetchLlmHtmlSightings>> = [];
    try {
      out = await fetchLlmHtmlSightings(src);
    } catch (e) {
      console.error(`  ${city}: ERROR ${(e as Error).message}`);
    }
    const dates = out.map((o) => o.date).filter(Boolean).sort();
    results.push({
      city,
      shared: cities.length > 1 ? cities : [],
      url,
      n: out.length,
      latest: dates[dates.length - 1] ?? "-",
      sample: out[0] ? `${out[0].date} ${out[0].cityName} ${out[0].sectionName} ${out[0].comment}` : "",
      already: registered.has(url),
    });
  }

  results.sort((a, b) => b.n - a.n || (a.latest < b.latest ? 1 : -1));
  console.log("=== 登録候補 (個別記録が取れたページ) ===");
  for (const r of results.filter((r) => r.n > 0)) {
    console.log(`${String(r.n).padStart(3)} 件  最新 ${r.latest}  ${r.city}${r.already ? " [登録済み]" : ""}`);
    console.log(`        ${r.url}`);
    if (r.shared.length) console.log(`        ※ ${r.shared.length} 自治体 (${r.shared.slice(0, 3).join("・")}…) が同じページを共有`);
    console.log(`        例: ${r.sample}`);
  }
  const hit = results.filter((r) => r.n > 0);
  console.log(`\n当たり ${hit.length}/${results.length} ページ、合計 ${hit.reduce((a, b) => a + b.n, 0)} 件`);
  console.log("\n=== 記録が取れなかったページ (注意喚起のみ / JS 生成) ===");
  for (const r of results.filter((r) => r.n === 0)) console.log(`  ${r.city.padEnd(8)} ${r.url}`);
}

main();
