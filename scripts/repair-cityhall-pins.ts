#!/usr/bin/env tsx
/**
 * 「役所ピン」の修復。
 *
 * 実行: `npx tsx scripts/repair-cityhall-pins.ts [--apply]`  (既定は dry-run)
 *
 * 直すもの:
 *   報道 (news / llm-html) のうち、記事から読み取れた場所が市町村までしかない
 *   (sectionName が空、または「市内」「市街地」「道路」「不明」等の一般語) のに、
 *   LLM が返した座標をそのまま precise として採用し、ジッターを掛けずに
 *   確定ピンとして載せてしまっていたレコード。
 *
 *   LLM は市町村名しか手掛かりが無いとき役所の座標を返すため、同じ市の事案が
 *   すべて役所の一点に積み上がる。実測 (2026-08-14 時点のスナップショット):
 *     会津若松市役所本庁舎  30 件
 *     福島市役所            22 件
 *     全国 91 地点 / 525 件
 *   公共施設の住所にクマのピンが密集する状態で、利用者から「出ていない、嘘を
 *   書くな」という指摘を受けた。
 *
 *   取り込み側は news.ts で修正済み (地区情報が無ければ precise=false)。
 *   本スクリプトは既にスナップショットに載っている分を同じ規則で寄せ直す。
 *
 * やること:
 *   対象レコードの座標を jitterWithin (市域内の決定論的な点) で振り直す。
 *   ジッターの種は incidentKey なので、同じ事案を報じた複数記事は同じ点に落ち、
 *   既存の近接 dedup がこれまでどおり束ねられる。
 *
 * やらないこと:
 *   レコードの削除。事案自体は実在し市町村名も記事で裏取り済みなので、
 *   件数は変えない。動かすのは市域内での表示位置だけ。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { incidentKey, normalizeSection } from "../src/lib/incident-key";
import { jitterWithin } from "../src/lib/sources/geocode";
import type { UnifiedSighting } from "../src/lib/sources/types";

const GEOCODED_KINDS = new Set(["news", "llm-html"]);
const apply = process.argv.includes("--apply");

// 同一座標にこの件数以上が積まれていたら「一点集中」とみなす。1〜2 件では
// 偶然の一致と区別できず、正しい地点を無用に動かすため。
const STACK_THRESHOLD = 3;

const path = join(process.cwd(), "public/data/sightings.json");
const raw = JSON.parse(readFileSync(path, "utf8")) as
  | UnifiedSighting[]
  | { records: UnifiedSighting[] };
const isWrapped = !Array.isArray(raw);
const records: UnifiedSighting[] = isWrapped
  ? (raw as { records: UnifiedSighting[] }).records
  : (raw as UnifiedSighting[]);

const key = (r: UnifiedSighting) =>
  `${Number(r.lat).toFixed(5)},${Number(r.lon).toFixed(5)}`;

// 1. 地区情報を持たない報道レコードだけを候補にする
const candidates = records.filter(
  (r) =>
    GEOCODED_KINDS.has(r.sourceKind ?? r.source ?? "") &&
    typeof r.lat === "number" &&
    typeof r.lon === "number" &&
    normalizeSection(r.sectionName) === "",
);

// 2. 同一座標に STACK_THRESHOLD 件以上積まれている座標を特定
const stackCount = new Map<string, number>();
for (const r of candidates) stackCount.set(key(r), (stackCount.get(key(r)) ?? 0) + 1);
const stacked = new Set(
  [...stackCount.entries()].filter(([, n]) => n >= STACK_THRESHOLD).map(([k]) => k),
);

const targets = candidates.filter((r) => stacked.has(key(r)));

console.log(`総レコード          : ${records.length.toLocaleString()}`);
console.log(`地区情報なしの報道  : ${candidates.length.toLocaleString()}`);
console.log(
  `一点集中している座標: ${stacked.size.toLocaleString()} 地点 / 対象 ${targets.length.toLocaleString()} 件`,
);

// 集中がひどい順に内訳を出す
const byPlace = new Map<string, { n: number; label: string }>();
for (const r of targets) {
  const k = key(r);
  const cur = byPlace.get(k);
  if (cur) cur.n++;
  else byPlace.set(k, { n: 1, label: `${r.prefectureName ?? ""}${r.cityName ?? ""}` });
}
console.log("\n=== 寄せ直す地点 上位15 ===");
for (const [k, v] of [...byPlace.entries()].sort((a, b) => b[1].n - a[1].n).slice(0, 15)) {
  console.log(`  ${String(v.n).padStart(3)}件  (${k})  ${v.label}`);
}

// 3. 市域内の決定論的な点へ振り直す
let moved = 0;
let skipped = 0;
for (const r of targets) {
  const seed = incidentKey(r.date, r.prefectureName, r.cityName, r.sectionName);
  const pos = jitterWithin(
    r.prefectureName ?? "",
    r.cityName,
    r.lat as number,
    r.lon as number,
    seed,
  );
  if (!Number.isFinite(pos.lat) || !Number.isFinite(pos.lon)) {
    skipped++;
    continue;
  }
  if (apply) {
    r.lat = pos.lat;
    r.lon = pos.lon;
  }
  moved++;
}

// 振り直し後、同じ座標に何件残るか (同一事案は同じ種なので束なって当然)
const after = new Map<string, number>();
for (const r of targets) {
  const seed = incidentKey(r.date, r.prefectureName, r.cityName, r.sectionName);
  const pos = apply
    ? { lat: r.lat as number, lon: r.lon as number }
    : jitterWithin(r.prefectureName ?? "", r.cityName, r.lat as number, r.lon as number, seed);
  const k = `${pos.lat.toFixed(5)},${pos.lon.toFixed(5)}`;
  after.set(k, (after.get(k) ?? 0) + 1);
}
const worstAfter = [...after.values()].sort((a, b) => b - a)[0] ?? 0;
console.log(
  `\n寄せ直し: ${moved.toLocaleString()} 件 (座標を計算できず据え置き: ${skipped})`,
);
console.log(`一点あたりの最大集中: ${byPlace.size ? Math.max(...[...byPlace.values()].map((v) => v.n)) : 0} 件 → ${worstAfter} 件`);

if (apply) {
  writeFileSync(path, JSON.stringify(isWrapped ? raw : records));
  console.log("\n書き込み完了: public/data/sightings.json");
} else {
  console.log("\n(dry-run。反映するには --apply)");
}
