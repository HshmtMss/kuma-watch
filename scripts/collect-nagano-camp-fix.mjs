// 長野県キャンプ場のタイムアウト分を bbox 分割で再取得し osm-camp.json にマージ。
import { readFileSync, writeFileSync } from "node:fs";
const OVERPASS = "https://overpass-api.de/api/interpreter";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// 長野県を南北2分割して負荷を下げる
const boxes = [
  [35.2, 137.3, 36.3, 138.7],
  [36.3, 137.3, 37.1, 138.8],
];
const got = [];
for (const [s, w, n, e] of boxes) {
  const q = `[out:json][timeout:180];(node["tourism"="camp_site"](${s},${w},${n},${e});way["tourism"="camp_site"](${s},${w},${n},${e}););out center tags;`;
  for (let t = 0; t < 3; t++) {
    try {
      const res = await fetch(OVERPASS, { method: "POST", body: q, headers: { "Content-Type": "text/plain", "User-Agent": "kuma-watch/1.0" } });
      if (!res.ok) { await sleep(8000); continue; }
      const j = await res.json();
      for (const el of j.elements || []) {
        const c = el.center || el;
        const name = el.tags && (el.tags["name:ja"] || el.tags.name);
        if (name && Number.isFinite(c.lat)) got.push({ name, lat: +c.lat.toFixed(5), lon: +c.lon.toFixed(5), pref: "長野県", wd: el.tags.wikidata || null, wp: el.tags["wikipedia"] || null });
      }
      break;
    } catch (e) { await sleep(6000); }
  }
  await sleep(2000);
}
const path = ".cache/osm-camp.json";
const cur = JSON.parse(readFileSync(path, "utf8"));
// 既存の長野を除去してから差し替え（重複防止）
const merged = cur.filter((r) => r.pref !== "長野県").concat(got);
writeFileSync(path, JSON.stringify(merged));
console.log(`長野キャンプ場 再取得 ${got.length} 件。合計 ${merged.length}`);
