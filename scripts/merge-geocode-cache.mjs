#!/usr/bin/env node
/**
 * data/geocode-cache.json 専用のマージドライバ。
 *
 * このファイルは「地名 → 座標」の単なる辞書で、CI と手元の両方が追記する。
 * 行単位の衝突として扱うと毎回コンフリクトし (実際に何度も起きた)、どちらかを
 * 捨てると引き直しが発生する。和集合を取るのが常に正しい。
 *
 * git の merge driver として呼ばれる:  %O(共通祖先) %A(自分) %B(相手)
 * 結果は %A に書き戻す。
 */
import { readFileSync, writeFileSync } from "node:fs";

const [, , , ours, theirs] = process.argv; // %O %A %B の順で渡す想定

function load(p) {
  try {
    const j = JSON.parse(readFileSync(p, "utf8"));
    return j && typeof j === "object" ? j : {};
  } catch {
    return {};
  }
}

const a = load(ours);
const b = load(theirs);
const out = { ...a };
for (const [k, v] of Object.entries(b)) {
  const cur = out[k];
  // 同じ地名は新しく引いた方を採る。
  if (!cur || (v?.at ?? 0) > (cur?.at ?? 0)) out[k] = v;
}
writeFileSync(ours, JSON.stringify(out));
process.exit(0);
