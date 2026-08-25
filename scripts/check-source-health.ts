/**
 * 取り込みソースの健全性チェック。
 *
 * 「壊れていることに気づけない」のが一番まずい。実際に岐阜県は 306 日、
 * 山口県・奈良県は数ヶ月にわたり 0 件のまま放置されていた (2026-08 に発覚)。
 * 健全性の計器 (src/lib/source-health.ts) は前からあったが、/admin を見に
 * 行かないと気づけず、誰も見ていなかった。
 *
 * このスクリプトを定期実行し、問題があれば非ゼロ終了する。GitHub Actions が
 * 失敗すると通知メールが飛ぶ = 既に読まれている経路に乗る。
 *
 *   npx tsx scripts/check-source-health.ts
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { DATA_SOURCES } from "../src/data/data-sources";
import { sourceHealth, type SourceHealth } from "../src/lib/source-health";
import { KNOWN_SOURCE_GAPS } from "../src/data/source-gaps";

const SNAPSHOT = join(process.cwd(), "public", "data", "sightings.json");

function today(): string {
  // JST の当日。日付は JST で扱うのがこのプロジェクトの決まり。
  return new Date(Date.now() + 9 * 3600_000).toISOString().slice(0, 10);
}

function main() {
  const blob = JSON.parse(readFileSync(SNAPSHOT, "utf8")) as {
    records?: { source?: string; date?: string }[];
  };
  const records = blob.records ?? [];
  // 期間で完結するアーカイブ (年度別・月別 PDF 等) は止まって当然なので対象外。
  // これを混ぜると毎月「止まった」と警告が出て、本当の異常が埋もれる。
  const live = DATA_SOURCES.filter((s) => s.extractor && !s.periodBounded);
  const expected = live.map((s) => ({ id: s.id, bearStatus: s.bearStatus }));
  const liveIds = new Set(live.map((s) => s.id));
  const health = sourceHealth(records, today(), { expected });

  const known = new Map(KNOWN_SOURCE_GAPS.map((g) => [g.id, g]));
  const problems: SourceHealth[] = [];
  const accepted: SourceHealth[] = [];
  for (const h of health) {
    if (h.status !== "missing" && h.status !== "stale") continue;
    // 登録されていないソース (過去の一括取り込み等) は対象外。
    if (!liveIds.has(h.source)) continue;
    if (known.has(h.source)) accepted.push(h);
    else problems.push(h);
  }

  console.log(`継続更新のはずのソース: ${expected.length} 本 / 記録 ${records.length.toLocaleString()} 件`);
  console.log(`既知の欠落 (許容): ${accepted.length} 本`);
  console.log(`新たな問題      : ${problems.length} 本`);

  if (problems.length === 0) {
    console.log("\n新たな問題はありません。");
    return;
  }
  console.log("\n=== 新たに壊れた/止まったソース ===");
  for (const p of problems) {
    const detail =
      p.status === "missing"
        ? "1 件も取れていない"
        : `${p.ageDays} 日更新なし (${p.count.toLocaleString()} 件, 最新 ${p.latestDate})`;
    const src = DATA_SOURCES.find((s) => s.id === p.source);
    console.log(`  [${p.status}] ${p.source} — ${detail}`);
    if (src) console.log(`      ${src.regionLabel}`);
    const url = src?.urls?.find((u) => u.role === "list")?.url ?? src?.urls?.[0]?.url;
    if (url) console.log(`      ${url}`);
  }
  console.log(
    "\n対処: 公開先が移っていないか確認する。移転なら data-sources.ts の URL を差し替える。" +
      "\n      県が個別記録の公開をやめた等で復旧不能なら src/data/source-gaps.ts に理由付きで登録する。",
  );
  process.exitCode = 1;
}

main();
