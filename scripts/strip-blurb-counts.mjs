// 自動生成スポットの紹介文(blurb)から「出没件数に触れた文」を落とす。
//
// 背景 (2026-09-04): /spot は OSM の公開地点データから約 2 万地点を自動生成して
// おり、うち 1,400 件超はキャンプ場・温泉・宿といった民間事業者である。紹介文が
// 「〇〇県〇〇市に位置するキャンプ場です。周辺10kmでは直近1年で68件のクマ出没が
// 確認されています。」のように施設紹介と件数を一続きの地の文で書いていたため、
// 「この施設が危険」と読めてしまう。実際に施設運営者から指摘を受けた。
//
// 件数は RiskBanner・地図・一覧に出ているので、紹介文から外しても安全情報は
// 失われない。落とすのは誤読の経路だけ。件数と基本対策が 1 文に融合している
// ケース (「…68件確認されていますので、音を出すなど基本的な対策を」) は文ごと
// 落ちるが、この手の行動アドバイスはどのスポットでも同じ内容で、場所固有情報だけ
// を前面に置く方針 (feedback: カードは場所固有情報だけ) とも整合する。
//
// 冪等。生成し直した JSON に対して再実行してよい。
//   node scripts/strip-blurb-counts.mjs [--dry]

import { readFileSync, writeFileSync } from "node:fs";

const TARGET = "src/data/japan-landmarks-generated.json";
const DRY = process.argv.includes("--dry");

// 「12件」「12 件」。全角数字は生成文に出ないので半角のみ見る。
const COUNT_RE = /\d+\s*件/;
// 件数が出没の話であることの裏取り。「入場者数12件」のような無関係な件数を
// 巻き込まないため、出没・目撃の語との共起を条件にする。
const SIGHTING_RE = /出没|目撃/;

/** 句点で文に割り、出没件数に触れた文だけ落とす。 */
function stripCounts(blurb) {
  const sentences = blurb.split(/(?<=。)/).filter((s) => s.trim() !== "");
  const kept = sentences.filter(
    (s) => !(COUNT_RE.test(s) && SIGHTING_RE.test(s)),
  );
  return kept.join("").trim();
}

const spots = JSON.parse(readFileSync(TARGET, "utf8"));

let changed = 0;
const samples = [];
for (const spot of spots) {
  const before = spot.blurb;
  if (!before) continue;
  const after = stripCounts(before);
  // 全文が件数の話だった場合は、消すと紹介文が空になる。地点固有の文が
  // 1 つも残らないくらいなら、元のまま残して個別に直す方がまし。
  if (after === before || after === "") continue;
  spot.blurb = after;
  changed++;
  if (samples.length < 3) samples.push({ name: spot.name, before, after });
}

console.log(`対象 ${spots.length} 件 / 書き換え ${changed} 件`);
for (const s of samples) {
  console.log(`\n■ ${s.name}\n  前: ${s.before}\n  後: ${s.after}`);
}

if (DRY) {
  console.log("\n--dry のため書き込みませんでした。");
} else {
  // 元ファイルは 1 行の minified JSON。整形して書き戻すと差分が 23 万行に膨らむので、
  // 書式を合わせる。
  writeFileSync(TARGET, JSON.stringify(spots) + "\n");
  console.log(`\n${TARGET} を更新しました。`);
}
