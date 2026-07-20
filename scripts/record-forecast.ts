#!/usr/bin/env tsx
/**
 * 秋型予測の記録と答え合わせ。
 *
 * 実行: `npx tsx scripts/record-forecast.ts [--apply]`（既定は dry-run）
 *
 * やること:
 *   1. 当年のブナ開花指数から「秋型になるか」を予測して記録する
 *      （7月の指数公表後に一度実行すればよい。すでに記録があれば上書きしない
 *        ＝後から都合よく予測を書き換えられないようにする）
 *   2. 過去年について、実績の 秋/初夏 比が確定していれば突き合わせる
 *
 * 実績の比は観測条件を固定したソースだけで計算する。全ソースで計算すると
 * データが少なかった年の比が沈み、判定を取り違える。
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { bunaSummary } from "../src/data/buna-index";
import { buildYearProfiles } from "../src/lib/bear-regime";
import { stableSources } from "../src/lib/forest-context";
import {
  forecastAccuracy,
  loadForecastLog,
  saveForecastLog,
  type ForecastRecord,
} from "../src/lib/forecast-log";
import { jstToday } from "../src/lib/jst-date";
import type { UnifiedSighting } from "../src/lib/sources/types";

const apply = process.argv.includes("--apply");
/** 秋型と判定する 秋/初夏 比 */
const AUTUMN_RATIO = 1.0;
/** 開花指数がこれ未満なら秋型と予測する */
const POOR_INDEX = 1.0;

function main(): void {
  const today = jstToday();
  const curYear = Number(today.slice(0, 4));
  const records = JSON.parse(
    readFileSync(join(process.cwd(), "public", "data", "sightings.json"), "utf8"),
  ).records as UnifiedSighting[];
  const usable = records.filter((r) => !r.geoInconsistent);

  const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const stable = stableSources(usable, years);
  const profiles = buildYearProfiles(
    usable.filter((r) => stable.includes(r.source)),
    today,
  );
  const ratioOf = (y: number) => profiles.find((p) => p.year === y)?.ratio ?? null;

  const log = loadForecastLog();
  const byYear = new Map(log.map((r) => [r.year, r]));
  let added = 0;
  let verified = 0;
  const notes: string[] = [];

  // 1. 予測の記録（開花指数がある年すべて。既存は上書きしない）
  for (let y = 2019; y <= curYear; y++) {
    const s = bunaSummary(y);
    if (!s) continue;
    if (byYear.has(y)) continue;
    const rec: ForecastRecord = {
      year: y,
      forecastedAt: y === curYear ? today : `${y}-07-31`,
      flowerIndex: Number(s.avgFlower.toFixed(2)),
      poorPrefs: s.poorPrefs,
      totalPrefs: s.totalPrefs,
      predictedAutumn: s.avgFlower < POOR_INDEX,
    };
    byYear.set(y, rec);
    added++;
    notes.push(
      `  + ${y}年 予測を記録: 開花指数 ${rec.flowerIndex} → ${rec.predictedAutumn ? "秋型" : "秋型でない"}`,
    );
  }

  // 2. 答え合わせ（実績の比が出ている年）
  for (const rec of byYear.values()) {
    if (typeof rec.correct === "boolean") continue;
    const ratio = ratioOf(rec.year);
    if (ratio === null) continue;
    rec.actualRatio = Number(ratio.toFixed(2));
    rec.actualAutumn = ratio >= AUTUMN_RATIO;
    rec.correct = rec.actualAutumn === rec.predictedAutumn;
    rec.verifiedAt = today;
    verified++;
    notes.push(
      `  ✓ ${rec.year}年 答え合わせ: 予測 ${rec.predictedAutumn ? "秋型" : "秋型でない"} / ` +
        `実績 ${rec.actualRatio}（${rec.actualAutumn ? "秋型" : "秋型でない"}）→ ${rec.correct ? "的中" : "外れ"}`,
    );
  }

  const out = [...byYear.values()];
  notes.forEach((n) => console.log(n));
  if (!notes.length) console.log("  変更なし");

  const acc = forecastAccuracy(out);
  console.log(
    `\n的中率: ${acc.correct}/${acc.verified}` +
      (acc.rate !== null ? ` (${(acc.rate * 100).toFixed(0)}%)` : ""),
  );
  const pending = out.filter((r) => typeof r.correct !== "boolean");
  for (const p of pending)
    console.log(
      `  ${p.year}年は実績待ち（予測: ${p.predictedAutumn ? "秋型" : "秋型でない"}、11月末に確定）`,
    );

  if (apply) {
    saveForecastLog(out);
    console.log(`\n[record-forecast] data/forecast-log.json を更新（追加 ${added} / 確定 ${verified}）`);
  } else {
    console.log(`\n[record-forecast] dry-run（追加 ${added} / 確定 ${verified}）。--apply で書き込みます`);
  }
}

main();
