#!/usr/bin/env tsx
/**
 * 67 自治体ソースを実集約し public/data/sightings.json を更新する。
 *
 * 実行: `npm run build:sightings`  (tsx 経由 / 約 3 分)
 *
 * GitHub Actions の日次クーロン (.github/workflows/refresh-sightings.yml)
 * からも同じスクリプトが走り、差分があれば自動コミット・push する。
 *
 * 必要環境変数:
 *   GEMINI_API_KEY        — llm-html / llm-pdf 抽出に必須 (無くても skip して継続)
 *   KEMONOTE_USERNAME/PWD — kemonote API (デフォルトあり)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { aggregateAllSightings } from "../src/lib/sightings-cache";
import { isPrefLevelCity } from "../src/lib/muni-geo-check";
import { jstToday } from "../src/lib/jst-date";
import { reconcileOfficialRecord } from "../src/lib/muni-reconcile";
import { buildGazetteer } from "../src/lib/place-gazetteer";
import {
  containingCode,
  hasBoundaryData,
  isInsideMuni,
  pointInsideMuni,
  resolveMuni,
} from "../src/lib/muni-boundary";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import type { UnifiedSighting } from "../src/lib/sources/types";

const MUNI_BY_CODE = new Map(JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, m]));

// 全体再集約 (aggregateAllSightings) が生成する公式ソースの種別。これらは
// 毎回 fresh で置き換える。これ以外 (news 等) は news-flash が別途 append する
// ため、再集約では作られない → 前回スナップショットから引き継ぐ必要がある。
const REBUILT_KINDS = new Set(["csv", "sharp9110", "arcgis", "llm-html"]);

async function main(): Promise<void> {
  const start = Date.now();
  console.log("[build-sightings] aggregating from official + sharp9110 sources...");
  if (!process.env.GEMINI_API_KEY) {
    console.warn(
      "[build-sightings] GEMINI_API_KEY is not set — llm-html / llm-pdf sources will be skipped",
    );
  }

  // aggregateAllSightings は news も含めて返すが、news は news-flash が append し
  // 前回スナップショットから carried で引き継ぐ運用。ここで fresh 側にも news を
  // 混ぜると、refresh 毎に (fresh の news) + (carried の news) で二重化し、
  // 同一事案の重複ピンが際限なく増える。fresh からは news を除外する。
  const fresh = (await aggregateAllSightings()).filter(
    (r) => r.sourceKind !== "news",
  );
  const elapsedSec = ((Date.now() - start) / 1000).toFixed(1);

  if (fresh.length === 0) {
    console.error("[build-sightings] no records aggregated — refusing to overwrite snapshot");
    process.exit(1);
  }

  const outFile = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });

  // 前回スナップショットを読む。全件置換ではなくマージする:
  //   - news 等 (再集約が作らない種別) は前回分を引き継ぐ → 4h毎の全消しを防ぐ
  //   - ingestedAt は id で引き継ぎ、初出の id だけ now でスタンプ
  //     → 公式ソースの新規出没も「直近24h / 新着」に乗り、再集約で消えない
  const now = Date.now();
  let prevRecords: UnifiedSighting[] = [];
  try {
    const prev = JSON.parse(readFileSync(outFile, "utf8")) as {
      records?: UnifiedSighting[];
    };
    prevRecords = Array.isArray(prev.records) ? prev.records : [];
  } catch {
    // 初回 / 読めない場合は引き継ぎなし
  }
  const prevById = new Map(prevRecords.map((r) => [r.id, r]));

  // 再集約に含まれない種別 (news など) を前回から引き継ぐ。
  // news は無制限肥大を防ぐため直近 NEWS_RETENTION_DAYS 日分のみ引き継ぐ。
  const NEWS_RETENTION_DAYS = 180;
  const newsCutoff = new Date(now - NEWS_RETENTION_DAYS * 86_400_000)
    .toISOString()
    .slice(0, 10);
  const carried = prevRecords.filter(
    (r) =>
      !REBUILT_KINDS.has(r.sourceKind) &&
      (r.sourceKind !== "news" || (r.date ?? "") >= newsCutoff) &&
      // 市区町村が特定できていない news は、旧ジオコーダが県代表点
      // (例: 埼玉県→坂戸市付近) に積み上げた誤ピン。繰り越さず自然に浄化する。
      // (新規取り込みは news.ts / geocode.ts 側で既に弾いている)
      (r.sourceKind !== "news" || (r.cityName ?? "").trim() !== "") &&
      // cityName に市区町村でなく都道府県名 (例 "埼玉県") が入った news も
      // 同じ県代表点リーク。読み取り段では既に隠しているが、スナップショット
      // 本体・件数からも恒久除去するため繰り越さない (自然浄化)。
      (r.sourceKind !== "news" || !isPrefLevelCity(r.prefectureName, r.cityName)),
  );

  const rawMerged = [...fresh, ...carried];

  // 日付として成立しないレコードはスナップショットに残さない。
  // 読み取り段 (sightings-cache) でも弾いているが、本体・件数・生ファイル
  // 参照からも消しておかないと、除去しても次の取り込みで戻ってくる。
  const todayIso = jstToday();
  const records = rawMerged.filter((r) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((r.date ?? "").trim());
    if (!m) return true;
    const y = Number(m[1]), mo = Number(m[2]), da = Number(m[3]);
    const d = new Date(Date.UTC(y, mo - 1, da));
    if (d.getUTCFullYear() !== y || d.getUTCMonth() !== mo - 1 || d.getUTCDate() !== da)
      return false;
    return r.date <= todayIso;
  });
  const droppedBadDate = rawMerged.length - records.length;

  // 市町村ポリゴンによる最終補正。
  // news / llm-html (pdf-llm 含む) は市区町村名が本文で裏取りされている一方、
  // 座標は LLM 出力か Nominatim の当て推量で作った派生値。市域外へ落ちた
  // ものは市町村内へ寄せる。重心距離ベースの muni-geo-check では隣接市への
  // 数 km のズレ (毛呂山町の報道が坂戸市街に立つ等) を捕まえられない。
  // 公式座標系 (csv / arcgis / sharp9110) は座標が一次情報なので触らない。
  const GEOCODED_KINDS = new Set(["news", "llm-html"]);
  let snapped = 0;
  if (hasBoundaryData()) {
    for (const r of records) {
      if (!GEOCODED_KINDS.has(r.sourceKind)) continue;
      if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
      const muni = resolveMuni(r.prefectureName, r.cityName);
      if (!muni) continue;
      if (isInsideMuni(r.lat, r.lon, muni) !== false) continue;
      const p = pointInsideMuni(muni, r.id);
      r.lat = p.lat;
      r.lon = p.lon;
      snapped++;
    }
  }

  // 公式ソース (座標が上流由来) の市町村名と座標の食い違いを突き合わせる。
  // 観察場所の自由記述を第三の証拠にして、座標と名前のどちらが誤りかを
  // 行ごとに判定する。根拠不足なら触らない。詳細は muni-reconcile 参照。
  let officialMoved = 0;
  let officialRelabeled = 0;
  let officialUnresolved = 0;
  const gaz = buildGazetteer(
    records,
    (r) => {
      const mu = resolveMuni(r.prefectureName, r.cityName);
      return mu ? isInsideMuni(r.lat, r.lon, mu) === true : false;
    },
    (lat, lon) => containingCode(lat, lon),
  );
  for (const r of records) {
    if (GEOCODED_KINDS.has(r.sourceKind)) continue;
    const rec = reconcileOfficialRecord(r, gaz);
    if (rec.action === "move") {
      r.lat = rec.lat;
      r.lon = rec.lon;
      officialMoved++;
      delete r.geoInconsistent;
    } else if (rec.action === "relabel") {
      r.cityName = rec.cityName;
      officialRelabeled++;
      delete r.geoInconsistent;
    } else if (rec.action === "unknown") {
      // 正誤を確定できない矛盾レコード。原本を確認するまで表示しない。
      r.geoInconsistent = true;
      officialUnresolved++;
    }
  }

  // 市町村欄が空のレコードに、座標から市町村名を補う。
  // 群馬・福島のように上流に市町村の列が無い(あるいはコード値で解読できない)
  // ソースがある。空のままだと place-index が「最寄り重心」で解決するが、
  // これは実測で16.5%が実際の所属と食い違う。ポリゴン包含のほうが正確。
  let cityFilled = 0;
  if (hasBoundaryData()) {
    for (const r of records) {
      if ((r.cityName ?? "").trim()) continue;
      if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
      const code = containingCode(r.lat, r.lon);
      const mu = code ? MUNI_BY_CODE.get(code) : undefined;
      if (!mu) continue;
      if (mu.prefName !== r.prefectureName) continue; // 県が食い違うものは触らない
      r.cityName = mu.cityName.replace(/^[^\s]+?郡/, "");
      cityFilled++;
    }
  }

  let stamped = 0;
  for (const r of records) {
    const prior = prevById.get(r.id);
    if (prior && typeof prior.ingestedAt === "number") {
      r.ingestedAt = prior.ingestedAt; // 既知: 初出時刻を保持
    } else if (!prior && typeof r.ingestedAt !== "number") {
      r.ingestedAt = now; // 新規 id: 初出としてスタンプ
      stamped++;
    }
    // prevSeen にあるが ingestedAt 無し (旧公式レコード) は触らない = 新着扱いしない
  }

  const blob = { generatedAt: Date.now(), records };
  writeFileSync(outFile, JSON.stringify(blob));

  const carriedNews = carried.filter((r) => r.sourceKind === "news").length;
  console.log(
    `[build-sightings] wrote ${records.length} records ` +
      `(fresh ${fresh.length} + carried ${carried.length}, news ${carriedNews}) ` +
      `newly stamped ${stamped}, snapped ${snapped}, badDate ${droppedBadDate}, ` +
      `officialMoved ${officialMoved}, officialRelabeled ${officialRelabeled}, ` +
      `officialHidden ${officialUnresolved}, cityFilled ${cityFilled} in ${elapsedSec}s`,
  );
}

main().catch((err) => {
  console.error("[build-sightings] failed:", err);
  process.exit(1);
});
