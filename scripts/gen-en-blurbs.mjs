// 既存の英語スポット(inbound-en-generated.json)の enBlurb を、より具体的・多様で
// 有用な内容に再生成する。enName 等はそのまま保持し、enBlurb だけ差し替える。
// 冪等/再開可能: .cache/en-blurbs.json に slug で追記。
//   node scripts/gen-en-blurbs.mjs [limit]
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
const BATCH = 25;
const DELAY_MS = 5200;
const LIMIT = process.argv[2] ? +process.argv[2] : Infinity;

const CATEN = {
  mountain: "mountain / hiking trailhead",
  national_park: "national park",
  gorge: "gorge / river valley",
  onsen: "hot-spring (onsen) area",
  lake: "lake",
  waterfall: "waterfall",
  campground: "campground",
  resort: "highland resort",
  sightseeing: "landmark / sightseeing spot",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const DATA_PATH = "src/data/inbound-en-generated.json";
const spots = JSON.parse(readFileSync(DATA_PATH, "utf8"));

const OUT = ".cache/en-blurbs.json";
const done = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const pending = spots
  .filter((s) => !done[s.slug])
  .slice(0, LIMIT === Infinity ? undefined : LIMIT);
console.error(
  `全 ${spots.length} 件 / 未再生成 ${pending.length} 件 を再生成 (model=${MODEL})`,
);

const ItemSchema = z.object({
  i: z.number().describe("input index"),
  enBlurb: z.string().describe("fresh 2-3 sentence English description"),
});
const Schema = z.object({ items: z.array(ItemSchema) });

function promptFor(batch) {
  const lines = batch
    .map(
      (s, i) =>
        `[${i}] name: ${s.enName} | type: ${CATEN[s.category] || s.category} | location: ${s.prefName}`,
    )
    .join("\n");
  return `You are an editor for an English travel guide about Japan. For each place, write a fresh, specific 2–3 sentence description for a foreign visitor.

Rules:
- Say concretely WHAT the place is and WHY people go there, appropriate to its type — a mountain's trails and views, a lake's shoreline and water activities, an onsen's hot springs, a national park's scenery, a landmark's role in the city. Name its prefecture or region naturally.
- Be specific and VARIED. Do NOT open with "X is a distinctive / prominent / majestic / beautiful ...", and do not reuse the same sentence pattern across places. Vary how each description begins.
- Use ONLY what can be reasonably inferred from the name, type, and prefecture. Do NOT invent specific history, dates, numbers, prices, named buildings, festivals, or access details.
- Do NOT mention bears (a separate section covers that). Keep a calm, informative, welcoming tone.

Places:
${lines}

Return {i, enBlurb} for each. i is the input index [0..].`;
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
        temperature: 0.65,
      });
      for (const it of object.items) {
        const s = batch[it.i];
        if (!s) continue;
        done[s.slug] = it.enBlurb.trim();
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
  console.error(`  進捗 ${processed}/${pending.length} (保存 ${Object.keys(done).length})`);
  await sleep(DELAY_MS);
}

// enBlurb を差し替えて書き戻す（他フィールドは保持）。
let replaced = 0;
for (const s of spots) {
  if (done[s.slug]) {
    s.enBlurb = done[s.slug];
    replaced++;
  }
}
writeFileSync(DATA_PATH, JSON.stringify(spots, null, 0));
console.log(`完了: ${replaced}/${spots.length} 件の enBlurb を更新して ${DATA_PATH} に書き戻し`);
