// 市町村名・観光地名の「ひらがな読み」を Gemini で生成し src/data/name-readings.json
// に保存する。検索インデックス(build-search-index.ts)がこの読みを tokens に足すことで、
// 「しそう」「えのしま」等の かな入力／読み検索でも正しくヒットするようにする。
// 冪等・再開可能: 既に読みがある名称はスキップ。
//   NEXT_PUBLIC_SPOT_COVERAGE=1 tsx scripts/gen-name-readings.ts
import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

if (!process.env.GEMINI_API_KEY && existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = /^\s*GEMINI_API_KEY\s*=\s*"?([^"\n]+)"?/.exec(line);
    if (m) process.env.GEMINI_API_KEY = m[1].trim();
  }
}
const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = process.env.GEMINI_SPOT_MODEL ?? "gemini-2.5-flash";
const BATCH = 60;
const DELAY_MS = 4000;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const OUT = "src/data/name-readings.json";
const done: Record<string, string> = existsSync(OUT)
  ? JSON.parse(readFileSync(OUT, "utf8"))
  : {};

async function main() {
// 対象名称を収集 (市町村 + 観光地)。重複は Set で排除。
const names = new Set<string>();
{
  const m = await import("../src/data/japan-municipalities");
  for (const x of m.JAPAN_MUNICIPALITIES as Array<{ cityName: string }>) {
    names.add(x.cityName);
  }
}
{
  const m = await import("../src/data/japan-landmarks");
  for (const x of m.JAPAN_LANDMARKS as Array<{ name: string }>) {
    names.add(x.name);
  }
}
const pending = [...names].filter((n) => !done[n]);
console.error(`対象 ${names.size} 件 / 未生成 ${pending.length} 件`);

const Schema = z.object({
  items: z.array(
    z.object({
      i: z.number().describe("入力の index"),
      yomi: z.string().describe("ひらがなの読み (市区町村・湖・山などの接尾辞も含む)"),
    }),
  ),
});

for (let b = 0; b < pending.length; b += BATCH) {
  const batch = pending.slice(b, b + BATCH);
  const prompt = `次の日本の地名・観光地名について、それぞれの読みを「ひらがな」で返してください。
- 市/区/町/村/郡/湖/山/城/岳 などの接尾辞も読みに含める (例:「宍粟市」→「しそうし」「江の島」→「えのしま」「松本城」→「まつもとじょう」)。
- 難読地名に注意し、実在の正しい読みに忠実に。
- yomi は「ひらがなのみ」。記号・漢字・カタカナは入れない。

${batch.map((n, i) => `[${i}] ${n}`).join("\n")}

各項目に {i, yomi} を返してください。i は入力の番号[0..]。`;
  let ok = false;
  for (let t = 0; t < 4 && !ok; t++) {
    try {
      const { object } = await generateObject({
        model: google(MODEL),
        schema: Schema,
        prompt,
        temperature: 0,
      });
      for (const it of object.items) {
        const n = batch[it.i];
        if (n && it.yomi) done[n] = it.yomi.trim();
      }
      ok = true;
    } catch (e) {
      const msg = String((e as Error)?.message ?? e);
      const wait = /429|rate|quota/i.test(msg) ? 20000 * (t + 1) : 4000 * (t + 1);
      console.error(`  batch ${b}: ${msg.slice(0, 70)} → retry ${wait}ms`);
      await sleep(wait);
    }
  }
  writeFileSync(OUT, JSON.stringify(done));
  console.error(`  進捗 ${Math.min(b + BATCH, pending.length)}/${pending.length} (保存済 ${Object.keys(done).length})`);
  await sleep(DELAY_MS);
}
console.log(`完了: ${Object.keys(done).length} 件の読みを ${OUT} に保存`);
}

void main();
