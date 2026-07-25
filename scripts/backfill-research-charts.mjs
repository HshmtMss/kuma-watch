/**
 * 既存の研究レポート（src/app/research/*-report/page.tsx）に、
 * 都道府県別出没件数チャート（ResearchPrefChart）を後付けで注入する。
 *
 * Gemini は一切呼ばない。各レポートの期間を slug（ディレクトリ名）から復元し、
 * public/data/sightings.json を期間で絞り込んで byPref を再集計、
 * その集計だけをチャートとしてページに埋め込む（AI 本文には触れない）。
 *
 * 使い方:
 *   node scripts/backfill-research-charts.mjs            # ドライラン
 *   node scripts/backfill-research-charts.mjs --apply    # 実際に書き込む
 */

import { existsSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const APPLY = process.argv.includes("--apply");

const IMPORT_LINE =
  'import ResearchPrefChart from "@/components/ResearchPrefChart";';
const IMPORT_ANCHOR =
  'import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";';
// メタ情報チップの閉じ <div> の直後にチャートを挿す
const CHART_ANCHOR = "        </Link>\n      </div>";

function jpDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}
function jpMonth(yyyymm) {
  const m = /^(\d{4})-(\d{2})$/.exec(yyyymm);
  if (!m) return yyyymm;
  return `${m[1]}年${Number(m[2])}月`;
}
function isoDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** ディレクトリ名から期間を復元。未対応形式なら null。 */
function periodFromDir(name) {
  let m;
  if ((m = /^(\d{4}-\d{2}-\d{2})-daily-report$/.exec(name))) {
    const iso = m[1];
    return {
      label: jpDate(iso),
      matches: (di) => di.startsWith(iso),
    };
  }
  if ((m = /^(\d{4}-\d{2}-\d{2})-weekly-report$/.exec(name))) {
    const endIso = m[1];
    const endD = new Date(`${endIso}T00:00:00+09:00`);
    const startIso = isoDate(new Date(endD.getTime() - 6 * 86_400_000));
    return {
      label: `${jpDate(startIso)}〜${jpDate(endIso)}`,
      matches: (di) => di >= startIso && di <= endIso,
    };
  }
  if ((m = /^(\d{4}-\d{2})-monthly-report$/.exec(name))) {
    const month = m[1];
    return {
      label: jpMonth(month),
      matches: (di) => di.startsWith(month),
    };
  }
  return null;
}

function loadSightings() {
  const path = join(ROOT, "public", "data", "sightings.json");
  const snap = JSON.parse(readFileSync(path, "utf8"));
  if (!Array.isArray(snap.records)) throw new Error("sightings.json malformed");
  return snap.records;
}

function aggregateByPref(records) {
  const byPref = new Map();
  for (const r of records) {
    if (!r.prefectureName) continue;
    byPref.set(r.prefectureName, (byPref.get(r.prefectureName) ?? 0) + 1);
  }
  return [...byPref.entries()]
    .map(([pref, count]) => ({ pref, count }))
    .sort((a, b) => b.count - a.count);
}

function buildChartBlock(byPref, total, periodLabel) {
  const dataJs = JSON.stringify(byPref);
  return `
      <ResearchPrefChart
        data={${dataJs}}
        total={${total}}
        periodLabel={${JSON.stringify(periodLabel)}}
      />`;
}

function main() {
  const sightings = loadSightings();
  const researchDir = join(ROOT, "src", "app", "research");
  const dirs = readdirSync(researchDir).filter((n) => /-report$/.test(n));

  let injected = 0;
  let skippedHas = 0;
  let skippedEmpty = 0;
  let skippedShape = 0;

  for (const name of dirs.sort()) {
    const pagePath = join(researchDir, name, "page.tsx");
    if (!existsSync(pagePath)) continue;
    let src = readFileSync(pagePath, "utf8");

    if (src.includes("ResearchPrefChart")) {
      skippedHas++;
      continue;
    }
    const period = periodFromDir(name);
    if (!period) {
      skippedShape++;
      console.log(`  [shape] ${name} — 未対応の slug 形式`);
      continue;
    }

    const filtered = sightings.filter((r) => r.date && period.matches(r.date));
    const byPref = aggregateByPref(filtered);
    if (byPref.length === 0) {
      skippedEmpty++;
      console.log(`  [empty] ${name} — 期間内 0 件、チャート省略`);
      continue;
    }

    if (!src.includes(IMPORT_ANCHOR) || !src.includes(CHART_ANCHOR)) {
      skippedShape++;
      console.log(`  [shape] ${name} — アンカー不一致、スキップ`);
      continue;
    }

    // import 追加（重複防止）
    if (!src.includes(IMPORT_LINE)) {
      src = src.replace(IMPORT_ANCHOR, `${IMPORT_ANCHOR}\n${IMPORT_LINE}`);
    }
    // チャートブロック挿入（最初のアンカーのみ）
    const block = buildChartBlock(byPref, filtered.length, period.label);
    src = src.replace(CHART_ANCHOR, `${CHART_ANCHOR}\n${block}`);

    if (APPLY) writeFileSync(pagePath, src);
    injected++;
    console.log(
      `  [chart] ${name} — ${filtered.length}件 / ${byPref.length}県 (${period.label})`,
    );
  }

  console.log(
    `\n${APPLY ? "適用" : "ドライラン"}: 注入 ${injected} / 既存 ${skippedHas} / 0件 ${skippedEmpty} / 形式外 ${skippedShape}`,
  );
  if (!APPLY) console.log("→ 反映するには --apply を付けて再実行");
}

main();
