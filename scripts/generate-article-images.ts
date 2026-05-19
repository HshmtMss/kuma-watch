#!/usr/bin/env tsx
/**
 * Imagen を使って記事ヒーロー画像を 1 回限り生成するスクリプト。
 *
 * 用途: 既存画像とテーマが合わない / 共有が嫌な記事に対し、
 *        専用のヒーロー画像を AI 生成して public/articles/<slug>.jpg に保存する。
 *
 * 使い方:
 *   tsx scripts/generate-article-images.ts            # 全 TARGETS を実行
 *   tsx scripts/generate-article-images.ts <slug>     # 単一スラッグだけ実行
 *
 * 必要環境変数:
 *   GEMINI_API_KEY  — Google AI Studio の API キー (有料ティアで Imagen 利用可能)
 *
 * モデル: imagen-4.0-generate-001 (1 枚 $0.04 程度)
 *   - 利用不可なら imagen-3.0-generate-002 にフォールバック。
 */
import { writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { experimental_generateImage as generateImage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

// .env.local を簡易ロード（既存スクリプトに合わせて dotenv パッケージは使わない）
const ENV_PATH = join(process.cwd(), ".env.local");
if (existsSync(ENV_PATH)) {
  for (const line of readFileSync(ENV_PATH, "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
    }
  }
}

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

type Target = { slug: string; prompt: string };

// 各記事の主題に合わせた英語プロンプト。
// 一貫したスタイルを得るため、共通の suffix で "photography, cinematic"
// 等を付ける。人物の顔がはっきり写るものは避け、自然・装備・遠景を中心に。
const COMMON_SUFFIX =
  ", professional photography, cinematic lighting, high quality, no text, no logos, no watermarks";

const TARGETS: Target[] = [
  {
    slug: "vehicle-collision",
    prompt:
      "A car driving on a foggy mountain road at dusk in rural Japan, headlights illuminating the asphalt, dense forest on both sides, atmospheric and slightly tense mood, no visible animals",
  },
  {
    slug: "bear-monitoring",
    prompt:
      "A wildlife trail camera mounted on a tree trunk in a Japanese forest, deep green moss, dappled sunlight, scientific equipment focus, documentary style",
  },
  {
    slug: "inbound-tourism",
    prompt:
      "Hiking trail sign in Japanese mountains with multiple language warnings, autumn maple leaves, traditional Japanese mountain landscape in background, no people, travel photography",
  },
  {
    slug: "bear-compensation",
    prompt:
      "An open notebook with paperwork and a fountain pen on a wooden desk, soft natural light, official documents, calm administrative scene, no text visible",
  },
  {
    slug: "hunter-license-guide",
    prompt:
      "Japanese mountain hunter walking through morning forest with backpack and orange safety vest, mist rising, autumn forest floor, back view only, documentary style",
  },
  {
    slug: "disaster-bear",
    prompt:
      "A rural Japanese village under heavy gray sky during emergency, sandbags and flashlight on a porch, evening light, quiet tension, no people visible",
  },
  {
    slug: "bear-and-dogs",
    prompt:
      "A medium-sized Japanese dog like a Shiba Inu standing alert at the edge of a forest at dawn, wooden farmhouse in background, ears pricked, watchful expression, soft morning light",
  },
  {
    slug: "repellent-comparison",
    prompt:
      "An overhead flat-lay of outdoor safety gear laid out neatly on rustic wood: bear bell, spray canister, whistle, headlamp, small radio, gear photography, even lighting",
  },
  {
    slug: "designated-management-2026",
    prompt:
      "A traditional Japanese government building entrance with cherry blossom trees, official architecture, soft afternoon light, formal but approachable, no people",
  },
  {
    slug: "bear-report",
    prompt:
      "A smartphone on a wooden table showing a map application, with a notebook and pen, calm office or home desk scene, documentary photography, no readable text",
  },
  {
    slug: "bear-agriculture",
    prompt:
      "Japanese rural apple orchard in late summer with red apples on trees, simple wooden fence and electric fence wires in foreground, golden hour light, no people",
  },
  {
    slug: "urban-bear",
    prompt:
      "A quiet Japanese suburban neighborhood street at dusk with traditional houses and persimmon trees with orange fruits, street lights just turning on, eerie calm atmosphere, no people, no animals",
  },
  {
    slug: "bear-2025-retrospective",
    prompt:
      "A dimly lit autumn forest path in Japanese mountains, fallen leaves on ground, mist between trees, contemplative documentary atmosphere, no animals or people",
  },
  {
    slug: "autumn-forecast-2026",
    prompt:
      "A panoramic view of Japanese mountain ridge in early autumn with mixed beech and oak forests starting to turn colors, distant mountains under partly cloudy sky, landscape photography",
  },
  {
    slug: "beech-mast-bear",
    prompt:
      "Close-up of a Japanese beech tree branch with cluster of beechnuts in late summer, soft natural light filtering through leaves, forest background blurred, botanical photography",
  },
  {
    slug: "research-digest-001",
    prompt:
      "A scientific research desk overhead view with open notebook, pencil, scattered academic papers, a small bear figurine and topographic map of mountains, warm desk lamp light, editorial science magazine photography style, no readable text on papers",
  },
];

const TARGET_DIR = join(process.cwd(), "public", "articles");
if (!existsSync(TARGET_DIR)) mkdirSync(TARGET_DIR, { recursive: true });

async function generateOne(target: Target, model: string): Promise<boolean> {
  const outPath = join(TARGET_DIR, `${target.slug}.jpg`);
  console.log(`[gen] ${target.slug}  (model=${model})`);
  console.log(`      prompt: ${target.prompt.slice(0, 80)}...`);
  try {
    const result = await generateImage({
      model: google.image(model),
      prompt: target.prompt + COMMON_SUFFIX,
      aspectRatio: "16:9",
    });
    const base64 = result.image.base64;
    if (!base64) {
      console.error(`[gen] ${target.slug}  no base64 returned`);
      return false;
    }
    const buf = Buffer.from(base64, "base64");
    writeFileSync(outPath, buf);
    console.log(`[gen] ${target.slug}  saved (${(buf.length / 1024).toFixed(0)} KB)`);
    return true;
  } catch (e) {
    console.error(`[gen] ${target.slug}  FAILED:`, (e as Error).message);
    return false;
  }
}

async function main(): Promise<void> {
  if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: GEMINI_API_KEY is not set in .env.local");
    process.exit(1);
  }

  const arg = process.argv[2];
  const targets = arg ? TARGETS.filter((t) => t.slug === arg) : TARGETS;
  if (targets.length === 0) {
    console.error(`No target with slug "${arg}"`);
    process.exit(1);
  }

  // モデル優先順: Imagen 4 → Imagen 3 にフォールバック。
  // 最初の 1 枚で 4 が失敗した場合は以後すべて 3 で生成する。
  let model = "imagen-4.0-generate-001";
  let usedFallback = false;
  let ok = 0;
  let ng = 0;

  for (const t of targets) {
    const success = await generateOne(t, model);
    if (success) {
      ok++;
    } else if (!usedFallback && model.startsWith("imagen-4")) {
      console.log("[gen] Imagen 4 failed — falling back to Imagen 3");
      model = "imagen-3.0-generate-002";
      usedFallback = true;
      const retry = await generateOne(t, model);
      if (retry) ok++;
      else ng++;
    } else {
      ng++;
    }
  }

  console.log(`\n[gen] Done. success=${ok} failed=${ng}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
