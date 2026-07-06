// wikidata/wikipedia タグを持つスポットの代表画像URLを取得する。
// wd(Qxxxx)→ Wikidata P18 → Commons FilePath / wp("ja:記事")→ Wikipedia REST サムネ。
// 冪等/再開可能: .cache/spot-images.json に key(name@lat,lon) で保存。
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const OUT = ".cache/spot-images.json";
const done = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const keyOf = (r) => `${r.name}@${r.lat},${r.lon}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { "User-Agent": "kuma-watch/1.0 (spot images)" };

async function fromWikidata(qid) {
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${qid}&props=claims|sitelinks&format=json&origin=*`;
  const j = await (await fetch(url, { headers: UA })).json();
  const ent = j.entities && j.entities[qid];
  if (!ent) return null;
  const p18 = ent.claims && ent.claims.P18 && ent.claims.P18[0];
  const file = p18 && p18.mainsnak && p18.mainsnak.datavalue && p18.mainsnak.datavalue.value;
  let img = null, credit = null;
  if (file) img = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1280`;
  const sl = ent.sitelinks && (ent.sitelinks.jawiki || ent.sitelinks.enwiki);
  if (sl) credit = sl.title;
  return img ? { img, credit: credit || qid } : null;
}

async function fromWikipedia(wp) {
  const m = /^([a-z]+):(.+)$/.exec(wp);
  const title = m ? m[2] : wp;
  const lang = m ? m[1] : "ja";
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const j = await (await fetch(url, { headers: UA })).json();
  const img = (j.originalimage && j.originalimage.source) || (j.thumbnail && j.thumbnail.source);
  return img ? { img, credit: title } : null;
}

// 未確定(キャッシュ無し or 前回nullで再試行対象)を対象に。RETRY_NULL=1 で null も再取得。
const retryNull = process.env.RETRY_NULL === "1";
const targets = todo.filter((r) => {
  if (!(r.wd || r.wp)) return false;
  const c = done[keyOf(r)];
  if (!c) return true;
  return retryNull && !c.imageUrl; // null は再試行
});
console.error(`画像対象 ${targets.length} 件 (retryNull=${retryNull})`);
let n = 0;
for (const r of targets) {
  // fetchエラー(=一時失敗)は throw して未確定のまま。成功して画像無しの時だけ null 確定。
  let errored = false;
  let res = null;
  try {
    if (r.wp) res = await fromWikipedia(r.wp);
  } catch { errored = true; }
  if (!res && r.wd) {
    try { res = await fromWikidata(r.wd); } catch { errored = true; }
  }
  if (res) done[keyOf(r)] = { imageUrl: res.img, imageCredit: res.credit };
  else if (!errored) done[keyOf(r)] = { imageUrl: null }; // 確定的に画像無し
  // errored のみの時は書かない → 次回再試行
  if (++n % 25 === 0) { writeFileSync(OUT, JSON.stringify(done)); console.error(`  ${n}/${targets.length}`); }
  await sleep(500);
}
writeFileSync(OUT, JSON.stringify(done));
const withImg = Object.values(done).filter((v) => v.imageUrl).length;
console.log(`完了: ${Object.keys(done).length}件処理, 画像あり ${withImg}件 -> ${OUT}`);
