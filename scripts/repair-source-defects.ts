#!/usr/bin/env tsx
/**
 * 出典調査で判明した当方側の不具合を、既存スナップショットに反映する。
 *
 * 実行: `npx tsx scripts/repair-source-defects.ts [--apply]` (既定は dry-run)
 *
 * コード側は修正済みだが、スナップショットは次の全再集約まで古い値のまま
 * 残る。取り込みは 4h 毎でも「再集約が作らない種別」は繰り越されるため、
 * 明示的に直す。
 *
 *  1. ひぐまっぷ(北海道)の日付が一律1日前
 *     foundDt は JST 深夜0時のエポック (剰余が常に 54000000 = UTC15:00)。
 *     UTC 基準で日付を切っていたため全件が前日になっていた。+1日する。
 *  2. 群馬の cityName が住所の自由記述
 *     city と section の両方に field_11 (場所の自由記述) を割り当てていた。
 *     マッピングは修正済みなので、既存分は座標から市町村を引き直す。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { containingCode } from "../src/lib/muni-boundary";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import type { UnifiedSighting } from "../src/lib/sources/types";

const apply = process.argv.includes("--apply");
const byCode = new Map(JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, m]));

function addDays(iso: string, days: number): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3] + days));
  return d.toISOString().slice(0, 10);
}

function main(): void {
  const file = join(process.cwd(), "public", "data", "sightings.json");
  const blob = JSON.parse(readFileSync(file, "utf8")) as {
    generatedAt?: number;
    records: UnifiedSighting[];
  };

  // --- 1. ひぐまっぷの日付 ---
  let dateFixed = 0;
  const dateEx: string[] = [];
  for (const r of blob.records) {
    if (r.source !== "hokkaido") continue;
    const next = addDays(r.date, 1);
    if (next === r.date) continue;
    if (dateEx.length < 5) dateEx.push(`  ${r.id}: ${r.date} → ${next}`);
    if (apply) r.date = next;
    dateFixed++;
  }

  // --- 2. 群馬の cityName ---
  let cityFixed = 0;
  let cityUnresolved = 0;
  const cityEx: string[] = [];
  for (const r of blob.records) {
    if (r.source !== "gunma") continue;
    const raw = (r.cityName ?? "").trim();
    // 既に正しい市町村名なら触らない
    if (raw && byCode.get("") === undefined) {
      const isPlainMuni = JAPAN_MUNICIPALITIES.some(
        (m) => m.prefName === r.prefectureName && m.cityName.replace(/^[^\s]+?郡/, "") === raw,
      );
      if (isPlainMuni) continue;
    }
    const code = containingCode(r.lat, r.lon);
    const mu = code ? byCode.get(code) : undefined;
    if (!mu) {
      cityUnresolved++;
      continue;
    }
    const next = mu.cityName.replace(/^[^\s]+?郡/, "");
    if (next === raw) continue;
    if (cityEx.length < 5)
      cityEx.push(`  ${r.id}: "${raw.slice(0, 28)}" → "${next}" (場所欄へ退避)`);
    if (apply) {
      // 自由記述は捨てずに場所欄へ残す (地図カードの手掛かりになる)
      if (raw && !(r.sectionName ?? "").trim()) r.sectionName = raw;
      r.cityName = next;
    }
    cityFixed++;
  }

  console.log(`■ ひぐまっぷ(北海道) の日付を +1日: ${dateFixed} 件`);
  dateEx.forEach((s) => console.log(s));
  console.log(`\n■ 群馬の cityName を座標から引き直し: ${cityFixed} 件 (解決不可 ${cityUnresolved})`);
  cityEx.forEach((s) => console.log(s));

  if (apply) {
    writeFileSync(file, JSON.stringify(blob));
    console.log("\n[repair-source-defects] 書き戻した");
  } else {
    console.log("\n[repair-source-defects] dry-run (--apply で書き戻す)");
  }
}

main();
