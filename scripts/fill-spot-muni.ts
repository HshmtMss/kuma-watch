/**
 * 生成スポット (japan-landmarks-generated.json) の muniName を、座標から確定させる。
 *
 * 背景: 生成スポット 21,305 件のうち muniName が入っているのは 68 件だけで、
 * /spot ページは「所在: 東京都」としか出せていない (台東区の寺も奥多摩の山も同じ表記)。
 * lat/lon は全件あり、市区町村境界 (public/data/boundaries) も揃っているので、
 * ポリゴン包含 (muni-boundary.containingCode) で機械的に確定できる。推測はしない。
 *
 * これにより各スポットから /place/{pref}/{muni} へ導線を張れる。
 *
 * 使い方:
 *   npx tsx scripts/fill-spot-muni.ts --dry --limit 10   … 判定結果を確認するだけ
 *   npx tsx scripts/fill-spot-muni.ts                    … 全件に書き込む
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { containingCode, hasBoundaryData } from "../src/lib/muni-boundary";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";

type Spot = {
  slug: string;
  name: string;
  prefName: string;
  lat: number;
  lon: number;
  muniName?: string;
  [k: string]: unknown;
};

const FILE = join(process.cwd(), "src", "data", "japan-landmarks-generated.json");

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const limitArg = argv.indexOf("--limit");
const LIMIT = limitArg >= 0 ? Number(argv[limitArg + 1]) : Infinity;

// cityCode(5桁) → { prefName, cityName }
const BY_CODE = new Map(
  JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, m]),
);

function main() {
  if (!hasBoundaryData()) {
    console.error("境界データ (public/data/boundaries) が見つかりません。");
    process.exit(1);
  }

  const spots: Spot[] = JSON.parse(readFileSync(FILE, "utf8"));
  let filled = 0;
  let unresolved = 0;
  let prefMismatch = 0;
  const samples: string[] = [];

  const n = Math.min(spots.length, LIMIT);
  for (let i = 0; i < n; i++) {
    const s = spots[i];
    const code = containingCode(s.lat, s.lon);
    if (!code) {
      unresolved++;
      continue;
    }
    const m = BY_CODE.get(code);
    if (!m) {
      unresolved++;
      continue;
    }
    // 県が食い違う場合は書かない。境界の精度不足や離島の飛び地で、
    // 誤った市町村ページへリンクする方が「所在不明」より害が大きい。
    if (m.prefName !== s.prefName) {
      prefMismatch++;
      continue;
    }
    if (samples.length < 15) {
      samples.push(
        `  ${s.name}（${s.prefName}）→ ${m.cityName}  [${code}]`,
      );
    }
    if (!DRY) s.muniName = m.cityName;
    filled++;
  }

  console.log(`対象: ${n.toLocaleString()} 件`);
  console.log(`  確定      : ${filled.toLocaleString()}`);
  console.log(`  判定不能  : ${unresolved.toLocaleString()}  (海上・境界データ外)`);
  console.log(`  県が不一致: ${prefMismatch.toLocaleString()}  (書き込まずスキップ)`);
  console.log("\n判定サンプル:");
  console.log(samples.join("\n"));

  if (DRY) {
    console.log("\n--dry のため書き込みませんでした。");
    return;
  }
  writeFileSync(FILE, JSON.stringify(spots) + "\n");
  console.log(`\n書き込み完了: ${FILE}`);
}

main();
