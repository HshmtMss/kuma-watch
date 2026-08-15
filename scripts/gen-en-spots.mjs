// インバウンド英語スポットを拡張する。手キュレーション105件に加え、OSM生成スポット
// のうち「山・国立公園・湖・滝・渓谷・温泉・高原・キャンプ場」= クマ関連の自然/登山系を
// 知名度(fame)順に上位N件選び、Gemini で英語表示名(enName)＋英語紹介文(enBlurb)を
// バッチ生成する。出力は自己完結の src/data/inbound-en-generated.json（JP側の
// SPOT_COVERAGE フラグに依存しない）。
// 冪等/再開可能: .cache/en-spots.json に slug で追記。
//   node scripts/gen-en-spots.mjs [topN]
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
const BATCH = 30;
const DELAY_MS = 5200;
// TOP_N = 生成スポットの目標件数（curated 105 は別枠で常に含む）。
// 全カテゴリ（観光名所 sightseeing 含む）を知名度(fame)順に上位 TOP_N 件。
const TOP_N = process.argv[2] ? +process.argv[2] : 300;

const CATEN = {
  mountain: "mountain / trailhead",
  national_park: "national park",
  gorge: "gorge / river valley",
  onsen: "hot-spring (onsen) area",
  lake: "lake",
  waterfall: "waterfall",
  campground: "campground",
  resort: "highland resort",
  sightseeing: "sightseeing spot / landmark",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const gen = JSON.parse(
  readFileSync("src/data/japan-landmarks-generated.json", "utf8"),
);
const curated = new Set(
  existsSync(".cache/curated-slugs.json")
    ? JSON.parse(readFileSync(".cache/curated-slugs.json", "utf8"))
    : [],
);

// 既存の英語スポット（前回まで生成済み）は必ず残す＝ URL を 404 にしない（union）。
const keep = new Set(
  existsSync("src/data/inbound-en-generated.json")
    ? JSON.parse(readFileSync("src/data/inbound-en-generated.json", "utf8")).map(
        (s) => s.slug,
      )
    : [],
);

// 全カテゴリを fame 降順に並べ、上位 TOP_N を採用。既存 keep も union で確保。
const ranked = gen
  .filter((l) => !curated.has(l.slug))
  .sort((a, b) => (b.fame || 0) - (a.fame || 0));
const topSlugs = new Set(ranked.slice(0, TOP_N).map((l) => l.slug));
const pool = ranked.filter((l) => topSlugs.has(l.slug) || keep.has(l.slug));

const OUT = ".cache/en-spots.json";
const done = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const pending = pool.filter((r) => !done[r.slug]);
console.error(
  `対象 ${pool.length} 件（全カテゴリ fame 上位 ${TOP_N}＋既存 keep）/ 未生成 ${pending.length} 件 を英語生成 (model=${MODEL})`,
);

const ItemSchema = z.object({
  i: z.number().describe("input index"),
  enName: z
    .string()
    .describe(
      "Natural English display name (Hepburn romaji, no Japanese characters). Use 'Mt. X' for mountains, 'Lake X' for lakes, 'X Falls' for waterfalls, 'X Gorge' for gorges, 'X Onsen' for hot springs, 'X National Park' for national parks.",
    ),
  enBlurb: z
    .string()
    .describe("1-2 sentence factual English intro for a foreign visitor"),
});
const Schema = z.object({ items: z.array(ItemSchema) });

function promptFor(batch) {
  const lines = batch
    .map(
      (r, i) =>
        `[${i}] name:「${r.name}」 type:${CATEN[r.category] || r.category} location:${r.prefName}`,
    )
    .join("\n");
  return `You are an editor for an English-language travel and outdoor guide about Japan. For each spot, write an English display name and a short intro for foreign visitors.

Rules:
- enName: a natural English/Hepburn-romaji name. NO Japanese characters. Use the conventional English form — nature: "Mt. Hiei", "Lake Inawashiro", "Kegon Falls", "Shosenkyo Gorge", "Shiretoko National Park"; landmarks: "Tokyo Skytree", "Meiji Shrine", "Senso-ji Temple", "Imperial Palace". Keep real proper nouns; do not invent a different place. If the place already has a widely used official English name, use it.
- enBlurb: 1-2 sentences, factual and calm. Say what it is, its prefecture/region, and why visitors go — using ONLY what can be inferred from the name, type, and prefecture. Do NOT fabricate specific history, facilities, prices, access, or figures. Do NOT mention bears (a separate real-time section covers that). Vary the wording between spots.

Spots:
${lines}

Return {i, enName, enBlurb} for each. i is the input index [0..].`;
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
        temperature: 0.5,
      });
      for (const it of object.items) {
        const r = batch[it.i];
        if (!r) continue;
        done[r.slug] = {
          enName: it.enName.trim(),
          enBlurb: it.enBlurb.trim(),
        };
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

// 自己完結データを組み立て（英語ページが直接読む。JP の SPOT_COVERAGE に非依存）
const genBySlug = new Map(gen.map((l) => [l.slug, l]));
const assembled = pool
  .filter((r) => done[r.slug])
  .map((r) => {
    const g = genBySlug.get(r.slug);
    return {
      slug: r.slug,
      name: r.name,
      enName: done[r.slug].enName,
      enBlurb: done[r.slug].enBlurb,
      prefName: r.prefName,
      category: r.category,
      lat: r.lat,
      lon: r.lon,
      ...(g && g.imageUrl ? { imageUrl: g.imageUrl } : {}),
      ...(g && g.imageCredit ? { imageCredit: g.imageCredit } : {}),
    };
  });
writeFileSync(
  "src/data/inbound-en-generated.json",
  JSON.stringify(assembled, null, 0),
);
console.log(
  `完了: ${assembled.length} 件を src/data/inbound-en-generated.json に書き出し`,
);
