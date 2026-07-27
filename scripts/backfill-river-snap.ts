/**
 * 既存 sightings.json の河川敷系 news 出没を、実際の川へ一度だけスナップする。
 * 以後の新規取り込みは news.ts の snapToRiver が自動で寄せる。これは過去分の遡及。
 *
 *   npx tsx scripts/backfill-river-snap.ts          # ドライラン(件数だけ表示)
 *   npx tsx scripts/backfill-river-snap.ts --apply  # 書き込み
 */
import fs from "node:fs";
import path from "node:path";
import { snapToRiver } from "../src/lib/river-snap";
import { haversineKm } from "../src/lib/muni-boundary";

const APPLY = process.argv.includes("--apply");
const FILE = path.join(process.cwd(), "public", "data", "sightings.json");

const raw = JSON.parse(fs.readFileSync(FILE, "utf8")) as {
  records: Array<Record<string, unknown>>;
};

const sv = (r: Record<string, unknown>, k: string) =>
  typeof r[k] === "string" ? (r[k] as string) : "";

let moved = 0;
let maxMove = 0;
const samples: string[] = [];

for (const r of raw.records) {
  if (r.source !== "news") continue;
  if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
  const snapped = snapToRiver(
    sv(r, "prefectureName"),
    sv(r, "cityName"),
    sv(r, "sectionName"),
    sv(r, "comment"),
    r.lat as number,
    r.lon as number,
  );
  if (!snapped) continue;
  const d = haversineKm(r.lat as number, r.lon as number, snapped.lat, snapped.lon);
  if (d < 0.02) continue; // 既にほぼ川上。動かす意味なし
  if (samples.length < 20) {
    samples.push(
      `  ${sv(r, "prefectureName")}${sv(r, "cityName")}「${sv(r, "sectionName")}」→${snapped.river} ${Math.round(d * 1000)}m`,
    );
  }
  moved++;
  maxMove = Math.max(maxMove, d);
  if (APPLY) {
    r.lat = snapped.lat;
    r.lon = snapped.lon;
    r.riverSnapped = true; // 監査用フラグ
  }
}

console.log(`河川スナップ対象: ${moved}件 (最大移動 ${Math.round(maxMove * 1000)}m)`);
for (const s of samples) console.log(s);
if (APPLY) {
  fs.writeFileSync(FILE, JSON.stringify(raw) + "\n");
  console.log(`\n書き込み完了: ${FILE}`);
} else {
  console.log(`\n(ドライラン。反映するには --apply)`);
}
