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
  {
    slug: "research-digest-002",
    prompt:
      "A quiet suburban street at night near a forest edge, soft yellow streetlight illuminating empty road, distant pine forest silhouette, moody blue-purple sky, sense of nocturnal stillness, urban-wildlife interface, no visible animals or people, cinematic photography",
  },
  {
    slug: "research-digest-003",
    prompt:
      "Close-up portrait of a brown bear face emerging from soft mist in a dark forest, intense eye contact, detailed fur texture, photorealistic high-detail wildlife photography, slight techy atmosphere suggesting data points, dramatic lighting, single bear face only",
  },
  {
    slug: "research-digest-004",
    prompt:
      "A snowy mountain landscape in late winter with bare deciduous trees, small patches of melting snow revealing dark earth, soft overcast light, no animals visible, atmospheric photography conveying climate change and seasonal transition",
  },
  {
    slug: "research-digest-005",
    prompt:
      "Macro close-up of a bear's nose and muzzle in soft warm light, intricate texture of nose skin, mist or breath rising in cold air, suggesting heightened olfactory sensitivity, blurred dark forest background, scientific nature photography",
  },
  {
    slug: "research-digest-006",
    prompt:
      "An autumn forest floor scattered with abundant acorns, beechnuts and chestnuts in golden hour light, vibrant fall colors of red and orange leaves, sense of harvest abundance, no animals or people, food ecology photography",
  },
  {
    slug: "research-digest-007",
    prompt:
      "A traditional Japanese apple orchard in autumn with red ripe apples on trees, simple wooden posts and thin electric fence wires running through the orchard, mountain backdrop, soft afternoon light, agricultural photography, no people or animals",
  },
  {
    slug: "research-digest-008",
    prompt:
      "An abstract conceptual photograph blending a sleeping bear silhouette with subtle medical heartbeat line graphics in cool blue tones, scientific magazine cover style, dramatic dark background, atmospheric and thoughtful, no readable text",
  },
  {
    slug: "research-digest-009",
    prompt:
      "An aerial view of a vast wild Japanese mountain landscape at dawn with mist filling valleys, dense forest cover stretching to the horizon, sense of vastness and unknown wilderness, no animals or people visible, drone photography",
  },
  {
    slug: "research-digest-010",
    prompt:
      "An abstract conceptual image of a bear silhouette in profile with subtle glowing neural network or constellation pattern overlay suggesting intelligence and cognition, deep dark background with cool blue and warm amber accents, scientific magazine cover style, no readable text",
  },
  {
    slug: "research-digest-011",
    prompt:
      "Soft warm photograph of a quiet snow-covered forest den entrance with subtle glow from inside, mother bear inferred but not visible, sense of life and warmth within winter wilderness, dawn light, gentle conceptual reproductive biology theme",
  },
  {
    slug: "research-digest-012",
    prompt:
      "A serious atmospheric photograph of a deep dense forest with mist between tall trees and a single set of bear tracks on the muddy trail, low ambient light, tension and caution mood, documentary wildlife photography style, no animals or people visible",
  },
  {
    slug: "research-digest-013",
    prompt:
      "Close-up of a tall conifer tree trunk in a forest showing distinctive bear claw marks and rubbed bark patches with bits of brown fur visible, soft sunlight filtering through canopy, scientific nature photography style, no animals visible",
  },
  {
    slug: "research-digest-014",
    prompt:
      "A symbolic world map style overhead photograph of a globe lit by warm and cool light, showing forest regions of the northern hemisphere highlighted, scientific magazine cover style, conceptual photography, no readable text or labels",
  },
  {
    slug: "research-digest-015",
    prompt:
      "A vast arctic ice landscape under cool blue twilight with distant mountains, sense of isolation and evolutionary time scale, no animals visible, dramatic atmospheric photography conveying cold adaptation theme",
  },
  {
    slug: "research-digest-016",
    prompt:
      "An abstract scientific conceptual image showing colorful bacterial cells under microscope lighting in warm and cool tones, soft glowing dots like a starry sky, biology magazine cover style, microbiome research theme, no readable text",
  },
  {
    slug: "research-digest-017",
    prompt:
      "Dramatic close-up of a large bear skull resting on a museum display surface, intricate detail of teeth and jaw structure, soft museum lighting from above, scientific anatomy magazine photography style, dark background",
  },
  {
    slug: "research-digest-018",
    prompt:
      "A pristine forest stream in autumn with red salmon swimming upstream and golden trees on banks, soft morning mist, sense of ecosystem connection between sea and forest, no animals or people visible on land, nature documentary photography style",
  },
  {
    slug: "research-digest-019",
    prompt:
      "A serene salmon stream in Alaska with multiple bears fishing at different positions along the river bank in early morning mist, sense of social spacing and hierarchy, distant view from elevated angle, nature documentary photography style",
  },
  {
    slug: "research-digest-020",
    prompt:
      "A trained working dog in the field at dawn looking alert toward a misty forest, scientific outdoor research equipment laid out in foreground including a recorder and orange safety vest, no bears or other people visible, documentary photography style",
  },
  {
    slug: "research-digest-021",
    prompt:
      "An Italian Dolomites mountain village viewed from above with vineyards and forested slopes, traditional stone houses, alpine atmosphere, sense of human-wildlife coexistence landscape, no animals visible, late afternoon golden light",
  },
  {
    slug: "research-digest-022",
    prompt:
      "An abstract conceptual photograph of a vast mountain wilderness with a faint glowing trail line tracing through forests and across ridges suggesting GPS tracking, soft dawn light, no animals visible, scientific magazine cover style",
  },
  {
    slug: "research-digest-023",
    prompt:
      "A peaceful spring forest meadow with new green growth and wildflowers, gentle morning sunlight filtering through trees, sense of new life and beginnings, no animals visible, hopeful tone, conservation photography style",
  },
  {
    slug: "research-digest-024",
    prompt:
      "A snowy mountain hillside with a partly hidden rocky den entrance in the side of a slope, undisturbed snow around it, deep winter silence, soft blue evening light, sense of hidden hibernation, no animals visible, nature documentary photography style",
  },
  {
    slug: "research-digest-025",
    prompt:
      "An abstract conceptual image showing audio waveform patterns overlaid on a misty forest at dawn, suggesting acoustic communication and sound visualization, scientific magazine cover style with cool blue tones, no animals visible, atmospheric photography",
  },
  {
    slug: "research-digest-026",
    prompt:
      "A polar bear walking alone across vast white arctic ice under cool gray sky, sense of isolation and energy expenditure in harsh environment, distant horizon, no humans or other animals visible, dramatic nature photography style",
  },
  {
    slug: "research-digest-027",
    prompt:
      "A scenic wooden viewing platform overlooking a beautiful Alaskan river valley with mountains in distance, soft early morning light, tourism nature experience theme, empty platform with binoculars on railing, no people or animals visible, travel magazine photography style",
  },
  {
    slug: "research-digest-028",
    prompt:
      "A traditional shepherd's mountain farm in Romania with stone fence and grazing pasture in summer evening light, traditional architecture, sense of pastoral life and livestock husbandry, no people or animals visible, documentary photography style",
  },
  {
    slug: "research-digest-029",
    prompt:
      "A vast Yellowstone-style valley with autumn light, distant mountains and dense forests, sense of wild ecosystem cycles and natural balance, no animals visible, atmospheric ecology magazine photography style",
  },
  {
    slug: "research-digest-030",
    prompt:
      "A symbolic photograph of a mountain trail at sunrise where a human footprint and a bear paw print converge in damp earth, hopeful warm light, sense of coexistence and shared paths, no actual humans or animals visible, conceptual photography style",
  },
  {
    slug: "bear-kidney-nitrogen-recycling",
    prompt:
      "An abstract conceptual cross-section illustration of a hibernating brown bear curled in a winter den, with subtle glowing kidney and intestinal organs softly luminescent in warm amber, faint flowing lines suggesting nitrogen and urea recycling between organs, deep dark blue background, scientific medical magazine cover style, atmospheric and contemplative, no readable text, no labels",
  },
  {
    slug: "bear-brain-cognition",
    prompt:
      "A conceptual portrait of a brown bear's head in profile against a deep dark background, with subtle glowing neural network pattern softly overlaid on the brain region, intricate golden neuron lines suggesting intelligence, memory and cognition, dense conifer forest silhouette softly visible at the bottom edge, science magazine cover style, dramatic atmospheric photography, no readable text",
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
