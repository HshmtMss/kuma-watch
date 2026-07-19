#!/usr/bin/env tsx
/**
 * スナップショット (public/data/sightings.json) のデータ品質修復。
 *
 * 実行: `npx tsx scripts/repair-snapshot.ts [--apply]`  (既定は dry-run)
 *
 * 直すもの:
 *  1. 未来日 / 暦として存在しない日付のレコードを除去
 *     上流のタイポ由来 (2027-07-18, 2025-09-38, 2023-02-29)。
 *     取り込み側にもガードを入れたが、既に載っている分をここで落とす。
 *  2. news の id 重複を解消
 *     旧 id 形式 `news-{feed}-{index}-{i}` は記事 URL を含まず、cron 実行を
 *     跨ぐと衝突する。実測で news 7,509件に対し distinct id は 3,050件。
 *     build-sightings の prevById が別レコードの ingestedAt を混ぜてしまい、
 *     「取り込み時刻より後の出没日」が 457件生じていた (97.8% が衝突 id)。
 *     記事 URL のハッシュで振り直す。
 *  3. 同一事案に散らばった座標を代表点へ揃える
 *     同じ出没を報じた別記事が別々にジッターされ、1件の出没が複数ピンで
 *     残っていた。事案キー単位で最頻座標に寄せ、既存の近接 dedup が
 *     束ねられるようにする。ピンを新しい場所へ動かすのではなく、
 *     同じ事案が既に持っている座標のどれかに揃えるだけ。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { incidentKey } from "../src/lib/incident-key";
import { isRealCalendarDate } from "../src/lib/sources/date-utils";
import { jstToday } from "../src/lib/jst-date";
import type { UnifiedSighting } from "../src/lib/sources/types";

const GEOCODED_KINDS = new Set(["news", "llm-html"]);
const apply = process.argv.includes("--apply");

function hash36(s: string): string {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h.toString(36);
}

function main(): void {
  const file = join(process.cwd(), "public", "data", "sightings.json");
  const blob = JSON.parse(readFileSync(file, "utf8")) as {
    generatedAt?: number;
    records: UnifiedSighting[];
  };
  const today = jstToday();

  // --- 1. 不正な日付 ---
  const dropped: string[] = [];
  const kept = blob.records.filter((r) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((r.date ?? "").trim());
    if (!m) return true; // 形式外は別問題として触らない
    const ok = isRealCalendarDate(Number(m[1]), Number(m[2]), Number(m[3]));
    if (!ok) {
      dropped.push(`暦として不正 ${r.date} [${r.source}] ${r.id}`);
      return false;
    }
    if (r.date > today) {
      dropped.push(`未来日 ${r.date} [${r.source}] ${r.id}`);
      return false;
    }
    return true;
  });

  // --- 2. news の id 重複 ---
  const used = new Set<string>();
  for (const r of kept) if (!GEOCODED_KINDS.has(r.sourceKind)) used.add(r.id);
  let rekeyed = 0;
  const seenNews = new Set<string>();
  for (const r of kept) {
    if (r.sourceKind !== "news") continue;
    if (!seenNews.has(r.id)) {
      seenNews.add(r.id);
      used.add(r.id);
      continue;
    }
    // 2件目以降 = 衝突。URL ハッシュ + 連番で振り直す。
    const base = `news-${hash36(r.sourceUrl ?? r.id)}`;
    let n = 0;
    let next = `${base}-${n}`;
    while (used.has(next)) next = `${base}-${++n}`;
    used.add(next);
    r.id = next;
    rekeyed++;
  }

  // --- 3. 事案キー単位で座標を代表点へ ---
  const groups = new Map<string, UnifiedSighting[]>();
  for (const r of kept) {
    if (!GEOCODED_KINDS.has(r.sourceKind)) continue;
    const k = `${r.sourceKind}|${incidentKey(r.date, r.prefectureName, r.cityName, r.sectionName)}`;
    const a = groups.get(k) ?? [];
    a.push(r);
    groups.set(k, a);
  }
  let aligned = 0;
  let alignedGroups = 0;
  for (const [, a] of groups) {
    if (a.length < 2) continue;
    const tally = new Map<string, number>();
    for (const r of a) {
      const c = `${r.lat},${r.lon}`;
      tally.set(c, (tally.get(c) ?? 0) + 1);
    }
    if (tally.size < 2) continue; // 既に揃っている
    let best = "";
    let bestN = -1;
    for (const [c, n] of tally)
      if (n > bestN) {
        bestN = n;
        best = c;
      }
    const [bl, bo] = best.split(",").map(Number);
    let touched = false;
    for (const r of a) {
      if (r.lat === bl && r.lon === bo) continue;
      if (apply) {
        r.lat = bl;
        r.lon = bo;
      }
      aligned++;
      touched = true;
    }
    if (touched) alignedGroups++;
  }

  // --- 効果測定: date|lat|lon の重複がどれだけ束ねられるか ---
  const uniq = new Set(kept.map((r) => `${r.date}|${r.lat}|${r.lon}`));

  console.log(`総レコード: ${blob.records.length} -> ${kept.length}`);
  console.log(`\n■ 不正な日付を除去: ${dropped.length} 件`);
  dropped.forEach((d) => console.log("  " + d));
  console.log(`\n■ news の id 重複を振り直し: ${rekeyed} 件`);
  console.log(
    `  振り直し後の distinct id: ${new Set(kept.map((r) => r.id)).size} / ${kept.length}`,
  );
  console.log(
    `\n■ 同一事案の座標を代表点へ: ${aligned} 件 (${alignedGroups} 事案)`,
  );
  console.log(`  結果 date|lat|lon の distinct: ${uniq.size} (少ないほど dedup が効く)`);

  if (apply) {
    blob.records = kept;
    writeFileSync(file, JSON.stringify(blob));
    console.log("\n[repair] 書き戻した");
  } else {
    console.log("\n[repair] dry-run (--apply で書き戻す)");
  }
}

main();
