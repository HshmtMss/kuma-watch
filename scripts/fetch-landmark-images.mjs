// 観光地 (JAPAN_LANDMARKS) の代表画像を Wikipedia REST API から取得し、
// data/japan-landmarks.ts に imageUrl / imageCredit を書き戻す一回限りのスクリプト。
//
// 使い方:
//   node scripts/fetch-landmark-images.mjs
//
// Wikipedia REST: https://ja.wikipedia.org/api/rest_v1/page/summary/{title}
// 返り値の thumbnail.source を 1 つ採用。記事が見つからない / 画像が無い場合は
// altNames で再試行 → それでもダメなら skip (imageUrl は未設定のまま)。
//
// 画像のライセンスは記事ごとに異なる (大半は CC BY-SA 4.0 または public domain)。
// ページ上で「出典: Wikipedia (記事タイトル)」とクレジット表記する前提。

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const FILE = join(ROOT, "src", "data", "japan-landmarks.ts");

const UA = "KumaWatch/1.0 (https://kuma-watch.jp; contact@research-coordinate.co.jp)";

async function fetchSummary(title) {
  const url = `https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.thumbnail?.source) return null;
  return {
    title: data.title,
    // originalimage はサイズが大き過ぎることがあるので、800px 程度に調整した URL を使う。
    // thumbnail.source は ~320px なのでカード用、original はヒーロー用に上げる。
    thumbnailUrl: data.thumbnail.source,
    originalUrl: data.originalimage?.source ?? data.thumbnail.source,
  };
}

async function tryFetchForLandmark(name, altNames = []) {
  // 1. name そのまま
  let result = await fetchSummary(name);
  if (result) return result;

  // 2. altNames を順に試す (カタカナ・ローマ字以外)
  for (const alt of altNames) {
    if (/^[゠-ヿA-Za-z]+$/.test(alt)) continue; // skip romaji / katakana-only
    result = await fetchSummary(alt);
    if (result) return result;
  }
  return null;
}

function escapeForRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** data ファイル内の対象エントリブロックを書き換える。
 *  すでに imageUrl / imageCredit がある場合は上書きしない (差分制御)。
 */
function updateEntry(content, slug, image) {
  // エントリブロック: { slug: "<slug>", ... },  にマッチ
  // multiline; 「},」で閉じる前に imageUrl / imageCredit を挿入する。
  const slugEsc = escapeForRegex(slug);
  const blockRe = new RegExp(
    `(\\{\\s*\\n\\s*slug:\\s*"${slugEsc}"[\\s\\S]*?)(\\n\\s*\\},)`,
    "m",
  );
  const m = content.match(blockRe);
  if (!m) return { content, status: "block-not-found" };
  const block = m[1];
  // 既に imageUrl が含まれているなら更新せずスキップ
  if (block.includes("imageUrl:")) return { content, status: "already-has" };
  // blurb の閉じ括弧 (バックティック or ダブルクォート) を末尾と見なし、その直後に追加する。
  // 安全策として、ブロック末尾の `,` (最後のフィールドのコロン区切り) を探して挿入。
  const indent = "    ";
  const inserted =
    block.replace(/\s*$/, "") +
    `\n${indent}imageUrl: ${JSON.stringify(image.originalUrl)},\n${indent}imageCredit: ${JSON.stringify(image.title)},`;
  const next = content.replace(block, inserted);
  return { content: next, status: "updated" };
}

async function main() {
  const raw = readFileSync(FILE, "utf8");

  // slug 抽出: 簡易パーサ。"slug: \"...\"" の列をすべて拾う。
  const slugRe = /\bslug:\s*"([^"]+)"/g;
  const altNamesRe = /\baltNames:\s*\[([^\]]*)\]/;
  // 各エントリブロックの slug と altNames をまとめて取り出すために、
  // ブロック区切り (`,\s*\n\s*\{`) で大雑把に分割するシンプル戦略。
  const blocks = raw.split(/\n  \{\s*\n/).slice(1);
  const entries = [];
  for (const block of blocks) {
    const sM = /\bslug:\s*"([^"]+)"/.exec(block);
    if (!sM) continue;
    const nM = /\bname:\s*"([^"]+)"/.exec(block);
    const aM = altNamesRe.exec(block);
    const altRaw = aM ? aM[1] : "";
    const altNames = [...altRaw.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    entries.push({ slug: sM[1], name: nM ? nM[1] : sM[1], altNames });
  }

  console.log(`[fetch-landmark-images] ${entries.length} entries detected`);

  let content = raw;
  let updated = 0;
  let skipped = 0;
  let failed = 0;
  let alreadyHas = 0;

  for (const e of entries) {
    process.stdout.write(`  ${e.slug} ... `);
    try {
      const image = await tryFetchForLandmark(e.name, e.altNames);
      if (!image) {
        console.log("no-image");
        failed++;
        continue;
      }
      const result = updateEntry(content, e.slug, image);
      content = result.content;
      if (result.status === "updated") {
        console.log(`ok (${image.title})`);
        updated++;
      } else if (result.status === "already-has") {
        console.log("already-has");
        alreadyHas++;
      } else {
        console.log(`skip (${result.status})`);
        skipped++;
      }
    } catch (err) {
      console.log(`error: ${err.message}`);
      failed++;
    }
    // rate limit (Wikipedia: ~200 req/s なので 80ms ウェイトで十分)
    await new Promise((r) => setTimeout(r, 80));
  }

  if (updated > 0) {
    writeFileSync(FILE, content);
  }
  console.log(
    `[fetch-landmark-images] updated=${updated} already=${alreadyHas} skipped=${skipped} failed=${failed}`,
  );
  // void unused regex to avoid lint
  void slugRe;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
