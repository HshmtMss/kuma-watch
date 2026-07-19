// spots-todo の各スポット(wikidata Q-id 付き)の「著名度」を Wikidata のサイトリンク数
// (= 何言語版の Wikipedia に記事があるか)で推定する。京都・清水寺(多言語)と無名の
// 同名社(1言語)を区別し、同名重複時の代表選定・検索順位付けに使う。
// 冪等/再開可能: .cache/spot-fame.json に key(Q-id) で保存。
//   node scripts/gen-spot-fame.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const OUT = ".cache/spot-fame.json";
const done = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { "User-Agent": "kuma-watch/1.0 (spot fame; contact research-coordinate.co.jp)" };

// 収集対象 = wd(Qxxxx)を持ち、未取得のもの
const qids = [...new Set(todo.map((r) => r.wd).filter((w) => /^Q\d+$/.test(w || "")))];
const pending = qids.filter((q) => done[q] === undefined);
console.error(`Q-id ${qids.length} 件 / 未取得 ${pending.length} 件を Wikidata から取得`);

const API = "https://www.wikidata.org/w/api.php";
const BATCH = 50; // wbgetentities は 50 ids/req まで
let processed = 0;
for (let b = 0; b < pending.length; b += BATCH) {
  const ids = pending.slice(b, b + BATCH);
  let ok = false;
  for (let t = 0; t < 4 && !ok; t++) {
    try {
      const url = `${API}?action=wbgetentities&ids=${ids.join("|")}&props=sitelinks&format=json&origin=*`;
      const res = await fetch(url, { headers: UA });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const j = await res.json();
      const ents = j.entities || {};
      for (const q of ids) {
        const e = ents[q];
        // サイトリンク数(=言語版数)。取得できなければ 0。
        done[q] = e && e.sitelinks ? Object.keys(e.sitelinks).length : 0;
      }
      ok = true;
    } catch (e) {
      await sleep(3000 * (t + 1));
      if (t === 3) { for (const q of ids) if (done[q] === undefined) done[q] = 0; }
    }
  }
  processed += ids.length;
  writeFileSync(OUT, JSON.stringify(done));
  if (b % (BATCH * 10) === 0) console.error(`  進捗 ${processed}/${pending.length}`);
  await sleep(400);
}
const vals = Object.values(done);
console.log(`完了: ${vals.length} 件. 例(サイトリンク数): 最大 ${Math.max(0, ...vals)}`);
