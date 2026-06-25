/**
 * 自治体のクマ注意喚起ページ (muni-official-links の bearUrl) から、
 * 住民・来訪者向けの「注意喚起メッセージ・対象地区・更新日」を Gemini で抽出し、
 * src/data/muni-messages-generated.json に書き出す。
 *
 * 観光地ページ (/spot) の「自治体からのお知らせ」を自動で拡充するためのクローラ。
 * 手動キュレーション (muni-messages.ts の MUNI_MESSAGES) が優先され、無い自治体だけ
 * この自動取込が使われる。
 *
 * 必要環境変数: GEMINI_API_KEY (既存のものを使用)
 *
 * 使い方:
 *   npm run ingest:muni-messages                     # 既定: 高尾山周辺の自治体
 *   npm run ingest:muni-messages -- --near=高尾山 --radius=20
 *   npm run ingest:muni-messages -- --pref=東京都 --limit=20
 *   npm run ingest:muni-messages -- --all --limit=50  # bearUrl 全 726 件から 50 件
 *
 * 冪等: 既存 JSON にマージ。既定では未取込の自治体のみ処理 (--force で再取込)。
 */
import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { MUNI_OFFICIAL_LINKS } from "../src/data/muni-official-links";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import { JAPAN_LANDMARKS } from "../src/data/japan-landmarks";
import { fetchHtml, extractRelevantText } from "./lib/extract";

const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = process.env.GEMINI_MUNI_MODEL ?? "gemini-2.5-flash";
const OUT = join(process.cwd(), "src", "data", "muni-messages-generated.json");
// Gemini 無料枠 (15 RPM) を超えないよう 1 件あたり 4.5 秒空ける。
const DELAY_MS = 4500;

type GenMessage = {
  prefName: string;
  cityName: string;
  message: string;
  targetArea?: string;
  updatedAt: string;
  sourceUrl: string;
  crawledAt: string;
};

const Schema = z.object({
  is_bear_advisory: z
    .boolean()
    .describe("クマの注意喚起/出没情報ページで、住民・来訪者向けの注意内容があるか"),
  message: z
    .string()
    .describe(
      "住民・来訪者向けの注意喚起を2〜3文で要約。誘引物(果樹/生ごみ)管理・音を出す・早朝夕方の単独行動回避など具体的に。最新の目撃があれば日付・場所を含める。無ければ空文字",
    ),
  target_area: z
    .string()
    .describe("対象地区・地域名があれば(例: 市西部, ○○地区)。無ければ空文字"),
  updated_at: z
    .string()
    .describe(
      "ページの更新日を YYYY-MM-DD で。『令和N年M月D日』は西暦(令和元年=2019, 令和N年=2018+N)に変換。不明なら空文字",
    ),
  reason: z.string().describe("判定理由を簡潔に"),
});

const SYSTEM = `あなたは自治体のクマ出没・注意喚起ページから、住民・来訪者にそのまま伝えられる注意喚起を要約・構造化する編集者です。
- 対象はクマ(ツキノワグマ/ヒグマ)の注意喚起・出没情報ページのみ。クマと無関係なページや、内容が空のページは is_bear_advisory=false。
- message は公式ページの内容に忠実に。ページに書かれていないことは足さない(憶測しない)。
- 住民・来訪者が行動できる具体的な注意(誘引物管理・音を出す・時間帯・対象地区・最新の目撃)を優先して2〜3文に。`;

function parseArgs() {
  const a = process.argv.slice(2);
  const get = (k: string) =>
    a.find((x) => x.startsWith(`--${k}=`))?.split("=")[1];
  return {
    pref: get("pref"),
    near: get("near"),
    radius: Number(get("radius") ?? "20"),
    limit: get("limit") ? Number(get("limit")) : undefined,
    all: a.includes("--all"),
    force: a.includes("--force"),
  };
}

function haversineKm(aLat: number, aLon: number, bLat: number, bLon: number) {
  const R = 6371;
  const r = (v: number) => (v * Math.PI) / 180;
  const dLat = r(bLat - aLat);
  const dLon = r(bLon - aLon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(r(aLat)) * Math.cos(r(bLat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("[muni-msg] GEMINI_API_KEY is required");
    process.exit(1);
  }
  const args = parseArgs();

  // bearUrl を持つ自治体を対象にする。
  let targets = MUNI_OFFICIAL_LINKS.filter((m) => m.bearUrl);

  if (args.pref) {
    targets = targets.filter((m) => m.prefName === args.pref);
  } else if (args.near || (!args.all && !args.pref)) {
    // 既定: ランドマーク(既定 高尾山)周辺 radius km の自治体。
    const name = args.near ?? "高尾山";
    const lm = JAPAN_LANDMARKS.find((l) => l.slug === name || l.name === name);
    if (!lm) {
      console.error(`[muni-msg] landmark not found: ${name}`);
      process.exit(1);
    }
    const coord = new Map(
      JAPAN_MUNICIPALITIES.map((m) => [`${m.prefName}/${m.cityName}`, m]),
    );
    targets = targets
      .map((m) => {
        const c = coord.get(`${m.prefName}/${m.cityName}`);
        return { m, d: c ? haversineKm(lm.lat, lm.lon, c.lat, c.lon) : Infinity };
      })
      .filter((x) => x.d <= args.radius)
      .sort((a, b) => a.d - b.d)
      .map((x) => x.m);
  }

  // 既存 JSON を読み、未取込のみ処理 (--force で全件再取込)。
  const existing: GenMessage[] = existsSync(OUT)
    ? (JSON.parse(readFileSync(OUT, "utf8")) as GenMessage[])
    : [];
  const byKey = new Map(existing.map((e) => [`${e.prefName}/${e.cityName}`, e]));

  if (!args.force) {
    targets = targets.filter((m) => !byKey.has(`${m.prefName}/${m.cityName}`));
  }
  if (args.limit) targets = targets.slice(0, args.limit);

  console.log(`[muni-msg] 対象 ${targets.length} 自治体 (model=${MODEL})`);

  let ok = 0;
  let skip = 0;
  for (const t of targets) {
    const label = `${t.prefName}${t.cityName}`;
    try {
      const html = await fetchHtml(t.bearUrl!);
      const text = extractRelevantText(html);
      const { object } = await generateObject({
        model: google(MODEL),
        schema: Schema,
        system: SYSTEM,
        prompt: `次の自治体ページから、住民・来訪者向けのクマ注意喚起を要約・構造化してください。\n\nURL: ${t.bearUrl}\n自治体: ${label}\n\n--- ページ内容(整形済み) ---\n${text}`,
      });
      if (object.is_bear_advisory && object.message.trim()) {
        byKey.set(`${t.prefName}/${t.cityName}`, {
          prefName: t.prefName,
          cityName: t.cityName,
          message: object.message.trim(),
          targetArea: object.target_area.trim() || undefined,
          updatedAt: object.updated_at.trim() || "",
          sourceUrl: t.bearUrl!,
          crawledAt: new Date().toISOString().slice(0, 10),
        });
        ok++;
        console.log(`[muni-msg] ✓ ${label}`);
      } else {
        skip++;
        console.log(`[muni-msg] − ${label} (${object.reason.slice(0, 50)})`);
      }
    } catch (e) {
      skip++;
      console.error(`[muni-msg] ✗ ${label}: ${(e as Error).message.slice(0, 80)}`);
    }
    await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  const out = [...byKey.values()].sort((a, b) =>
    `${a.prefName}${a.cityName}`.localeCompare(`${b.prefName}${b.cityName}`),
  );
  writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
  console.log(`[muni-msg] 取込 ${ok} / スキップ ${skip} → 合計 ${out.length} 件 → ${OUT}`);
}

main().catch((e) => {
  console.error("[muni-msg] failed:", e);
  process.exit(1);
});
