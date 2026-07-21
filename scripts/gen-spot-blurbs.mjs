// spots-todo.json の各スポットに、正規化タイトル＋落ち着いた紹介文(blurb)を
// Gemini でバッチ生成する。無料枠15RPM対策で 1回に BATCH 件まとめて投げる。
// 冪等/再開可能: .cache/spot-blurbs.json に key(name@lat,lon) で追記。
//   node scripts/gen-spot-blurbs.mjs [limit]
import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

// .env.local から GEMINI_API_KEY を読む
if (!process.env.GEMINI_API_KEY && existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = /^\s*GEMINI_API_KEY\s*=\s*"?([^"\n]+)"?/.exec(line);
    if (m) process.env.GEMINI_API_KEY = m[1].trim();
  }
}
const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = process.env.GEMINI_SPOT_MODEL ?? "gemini-2.5-flash";
const BATCH = 40;
const DELAY_MS = 5200; // ~11-12 req/min（429 回避のため控えめに、1回で多く処理）
const LIMIT = process.argv[2] ? +process.argv[2] : Infinity;

const CATJP = {
  campground: "キャンプ場",
  sightseeing: "観光名所",
  onsen: "温泉地",
  waterfall: "滝・渓谷・湖などの自然",
  // 有名どころ拡張 (2026-07)
  lake: "湖・湖畔",
  mountain: "山・登山口",
  national_park: "国立公園",
  // 夏休みシーズン拡張 (2026-07)
  gorge: "渓谷・川遊びスポット",
  resort: "高原・観光リゾート",
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const keyOf = (r) => `${r.name}@${r.lat},${r.lon}`;

const todo = JSON.parse(readFileSync(".cache/spots-todo.json", "utf8"));
const OUT = ".cache/spot-blurbs.json";
const done = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};

const pending = todo.filter((r) => !done[keyOf(r)]).slice(0, LIMIT === Infinity ? undefined : LIMIT);
console.error(`対象 ${todo.length} 件 / 未生成 ${pending.length} 件 をバッチ生成`);

const ItemSchema = z.object({
  i: z.number().describe("入力の index"),
  title: z.string().describe("正規化した日本語の表示名。英語併記は整理し実在の固有名は変えない"),
  blurb: z.string().describe("2〜3文の落ち着いた紹介文"),
});
const Schema = z.object({ items: z.array(ItemSchema) });

function promptFor(batch) {
  const lines = batch.map((r, i) => {
    const stat = r.total === 0
      ? "周辺10kmの出没記録: なし"
      : `周辺10kmの出没: 累計${r.total}件・直近1年${r.y1}件`;
    return `[${i}] 名称:「${r.name}」 種別:${CATJP[r.cat]} 所在:${r.pref}${r.muni ? "/" + r.muni : ""} ${stat}`;
  }).join("\n");
  return `あなたは日本の旅行・アウトドア情報サイトの編集者です。各スポットについて、来訪者向けの「表示名」と「紹介文」を作成してください。

厳守事項:
- 事実を創作しない。名称・種別・所在・出没件数から確実に言えることだけ書く。具体的な歴史・施設名・料金・アクセスは推測で書かない。
- クマ出没は煽らない。「危険」「警戒」等の語は使わず件数で淡々と。
  - 出没記録がある場合: 件数に触れ、「早朝・夕方は音を出す」等の一般的な基本対策を1文添える。
  - 出没記録がない場合: 「周辺で最近のクマ出没情報は確認されていません」と安心材料として述べる（ただし山間部では一般的注意を促してよい）。
- title: 英語だけ/機械的な名称は日本語の自然な通称に整える。実在名を勝手に別物へ変えない。
- blurb: 2〜3文、事務的すぎず落ち着いたトーン。

スポット一覧:
${lines}

各スポットに対し {i, title, blurb} を返してください。iは入力の番号[0..]。`;
}

let processed = 0;
for (let b = 0; b < pending.length; b += BATCH) {
  const batch = pending.slice(b, b + BATCH);
  let ok = false;
  for (let t = 0; t < 4 && !ok; t++) {
    try {
      const { object } = await generateObject({
        model: google(MODEL),
        schema: Schema,
        prompt: promptFor(batch),
        temperature: 0.4,
      });
      for (const it of object.items) {
        const r = batch[it.i];
        if (!r) continue;
        done[keyOf(r)] = { title: it.title.trim(), blurb: it.blurb.trim() };
      }
      ok = true;
    } catch (e) {
      const msg = String(e.message || e);
      const wait = /429|rate|quota/i.test(msg) ? 20000 * (t + 1) : 5000 * (t + 1);
      console.error(`  batch ${b}: ${msg.slice(0, 80)} → retry in ${wait}ms`);
      await sleep(wait);
    }
  }
  processed += batch.length;
  writeFileSync(OUT, JSON.stringify(done));
  console.error(`  進捗 ${processed}/${pending.length}  (保存済 ${Object.keys(done).length})`);
  await sleep(DELAY_MS);
}
console.log(`完了: ${Object.keys(done).length} 件の blurb を ${OUT} に保存`);
