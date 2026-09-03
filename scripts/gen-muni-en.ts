#!/usr/bin/env tsx
/**
 * 市区町村名の「英語表記(ヘボン式ローマ字)」を Gemini で生成し src/data/muni-en.json に保存する。
 *
 * 用途: 英語ページ(/en/spot 等)の出没一覧と、英語プッシュ通知で「どの町の話か」を
 *       出せるようにする。都道府県は src/data/pref-en.ts に既にあるが、市区町村は
 *       対応表が無く、英語では場所を一切出せていなかった。
 *
 * かな読み(name-readings.json)からの機械変換にしないのは、「中央区」「四日市市」の
 * ような接尾辞・重複の扱いを誤りやすいため。一度生成して JSON に固定する方が安定する。
 *
 * 冪等・再開可能: 既に英語名がある市区町村はスキップ。新しい市区町村が出没データに
 * 現れたときだけ差分で足りる。
 *   tsx scripts/gen-muni-en.ts
 */
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

const OUT = "src/data/muni-en.json";
const done: Record<string, string> = existsSync(OUT)
  ? JSON.parse(readFileSync(OUT, "utf8"))
  : {};

async function main() {
  // 対象: 市区町村マスタ + 実際の出没データに出てくる市区町村名。
  // マスタに無い表記(合併前の名称など)でも出没データに出れば英語で出したい。
  const names = new Set<string>();
  {
    const m = await import("../src/data/japan-municipalities");
    for (const x of m.JAPAN_MUNICIPALITIES as Array<{ cityName: string }>) {
      if (x.cityName) names.add(x.cityName);
    }
  }
  {
    const path = "public/data/sightings.json";
    if (existsSync(path)) {
      const j = JSON.parse(readFileSync(path, "utf8")) as {
        records?: Array<{ cityName?: string }>;
      };
      for (const r of j.records ?? []) if (r.cityName) names.add(r.cityName);
    }
  }

  const pending = [...names].filter((n) => !done[n]);
  console.error(`対象 ${names.size} 件 / 未生成 ${pending.length} 件`);
  if (pending.length === 0) return;

  const Schema = z.object({
    items: z.array(
      z.object({
        i: z.number().describe("入力の index"),
        en: z.string().describe("英語表記(ヘボン式ローマ字)"),
      }),
    ),
  });

  for (let b = 0; b < pending.length; b += BATCH) {
    const batch = pending.slice(b, b + BATCH);
    const prompt = `次の日本の市区町村名を、英語表記(ヘボン式ローマ字)にしてください。

- 自治体が公式に使っている英語表記に従う (例:「四日市市」→「Yokkaichi」「大阪市」→「Osaka」)。
- 市/町/村 の接尾辞は付けない (例:「松本市」→「Matsumoto」「南牧村」→「Minamimaki」)。
- 政令市の行政区は「区名, 市名」の形にする (例:「札幌市中央区」→「Chuo, Sapporo」「横浜市青葉区」→「Aoba, Yokohama」)。
- 東京23区は区名のみ (例:「世田谷区」→「Setagaya」)。
- 長音は母音を重ねない (例:「大町市」→「Omachi」、「Oomachi」や「Ōmachi」にしない)。
- 難読地名に注意し、実在の正しい読みに忠実に。
- 先頭は大文字。英字とスペース・カンマ・ハイフンのみ。

${batch.map((n, i) => `[${i}] ${n}`).join("\n")}

各項目に {i, en} を返してください。i は入力の番号[0..]。`;
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
          // 想定外の文字(漢字・かな)が混じったものは採らない。
          if (n && it.en && /^[A-Za-z][A-Za-z ,'-]*$/.test(it.en.trim())) {
            done[n] = it.en.trim();
          }
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
    console.error(
      `  進捗 ${Math.min(b + BATCH, pending.length)}/${pending.length} (保存済 ${Object.keys(done).length})`,
    );
    await sleep(DELAY_MS);
  }
  console.log(`完了: ${Object.keys(done).length} 件の英語表記を ${OUT} に保存`);
}

void main();
