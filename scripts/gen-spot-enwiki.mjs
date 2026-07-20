// spots-todo の各スポット(wikidata Q-id 付き)の英語 Wikipedia 記事名を取得する。
// ローマ字 slug の最良ソース(例: 清水寺 Q221716 → "Kiyomizu-dera")。英語版が無い
// 寺社は空になり、その場合は かな読みの Hepburn 変換にフォールバックする。
// 冪等/再開可能: .cache/spot-enwiki.json に key(Q-id) で保存。
//   node scripts/gen-spot-enwiki.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const OUT = ".cache/spot-enwiki.json";
const done = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { "User-Agent": "kuma-watch/1.0 (spot romaji slugs; research-coordinate.co.jp)" };

const qids = [...new Set(todo.map((r) => r.wd).filter((w) => /^Q\d+$/.test(w || "")))];
const pending = qids.filter((q) => done[q] === undefined);
console.error(`Q-id ${qids.length} 件 / 未取得 ${pending.length} 件の英語Wikipedia名を取得`);

const API = "https://www.wikidata.org/w/api.php";
const BATCH = 50;
let processed = 0;
for (let b = 0; b < pending.length; b += BATCH) {
  const ids = pending.slice(b, b + BATCH);
  let ok = false;
  for (let t = 0; t < 4 && !ok; t++) {
    try {
      const url = `${API}?action=wbgetentities&ids=${ids.join("|")}&props=sitelinks&sitefilter=enwiki&format=json&origin=*`;
      const res = await fetch(url, { headers: UA });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const j = await res.json();
      const ents = j.entities || {};
      for (const q of ids) {
        const e = ents[q];
        done[q] = e && e.sitelinks && e.sitelinks.enwiki ? e.sitelinks.enwiki.title : "";
      }
      ok = true;
    } catch (e) {
      await sleep(3000 * (t + 1));
      if (t === 3) for (const q of ids) if (done[q] === undefined) done[q] = "";
    }
  }
  processed += ids.length;
  writeFileSync(OUT, JSON.stringify(done));
  if (b % (BATCH * 10) === 0) console.error(`  進捗 ${processed}/${pending.length}`);
  await sleep(300);
}
const withEn = Object.values(done).filter(Boolean).length;
console.log(`完了: ${Object.keys(done).length} 件中 英語名あり ${withEn} 件 -> ${OUT}`);
