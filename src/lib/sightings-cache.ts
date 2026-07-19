import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchAllOfficialSightings } from "@/lib/sources/aggregate";
import { getSharp9110Sightings } from "@/lib/sources/all-records";
import { fetchNewsSightings } from "@/lib/sources/news";
import { latLonMatchesPrefecture } from "@/lib/prefecture-bbox";
import { isNewsSuppressed } from "@/lib/news-suppression";
import { isNewsMisplaced, isPrefLevelCity } from "@/lib/muni-geo-check";
import { jstToday } from "@/lib/jst-date";
import type { UnifiedSighting } from "@/lib/sources/types";

/**
 * 元ソースのジオコーダー失敗で県名と座標が大きくズレているレコードを除外する。
 * 例: 「徳島県 那賀町」を主張しつつ座標が神奈川県内など。
 * あわせて以下も除外する:
 *   - 地域抑制リスト(news-suppression)該当の報道ピン(実害地域を即時に隠す)。
 *   - 市町村レベルの座標整合(muni-geo-check)で誤配置と判定された報道ピン
 *     (県内での誤配置。県BBoxはすり抜けるので市町村重心で判定)。
 */
/**
 * 日付として成立しないレコードを落とす中央ガード。
 *
 * 未来日・暦に無い日 (2027-07-18 / 2025-09-38 / 2023-02-29) は上流のタイポ。
 * ソース個別のガードは抜けが出る — 実際 kml.ts は「今年+1年まで許容」の
 * 年単位ガードだったため 2027-07-18 が通り、スナップショットから消しても
 * 次の取り込みで戻ってきた。sharp9110 (2万件超) 等そもそもガードが無い
 * ソースもある。全ソースが必ず通るこの経路で最終的に締める。
 */
function hasSaneDate(r: UnifiedSighting): boolean {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((r.date ?? "").trim());
  if (!m) return true; // 形式外は日付以外の理由で扱う (ここでは判断しない)
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const da = Number(m[3]);
  const d = new Date(Date.UTC(y, mo - 1, da));
  if (
    d.getUTCFullYear() !== y ||
    d.getUTCMonth() !== mo - 1 ||
    d.getUTCDate() !== da
  )
    return false;
  return r.date <= jstToday();
}

function filterMisgeocoded(records: UnifiedSighting[]): UnifiedSighting[] {
  return records.filter(
    (r) =>
      hasSaneDate(r) &&
      typeof r.lat === "number" &&
      typeof r.lon === "number" &&
      Number.isFinite(r.lat) &&
      Number.isFinite(r.lon) &&
      latLonMatchesPrefecture(r.prefectureName, r.lat, r.lon) &&
      !isNewsSuppressed(r.source, r.lat, r.lon) &&
      !(
        r.source === "news" &&
        (isNewsMisplaced(r.prefectureName, r.cityName, r.lat, r.lon) ||
          isPrefLevelCity(r.prefectureName, r.cityName))
      ),
  );
}

// 出没データの単一キャッシュ。/api/kuma と /api/ask (findNearbySightings) で共有する。
// 読み取り順:
//   1. .cache/sightings-v2.json (ローカル dev の永続キャッシュ)
//   2. public/data/sightings.json (リポジトリ同梱スナップショット — 本番フォールバック)
//   3. 67 ソースを実集約 (3 分超かかるので Hobby の 60s 制約では失敗する)
// 上記いずれかが返した結果を unstable_cache が 6h 保持し、
// Vercel Cron が /api/cron/refresh で revalidateTag("kuma-records") を呼ぶ。
//
// 同梱スナップショットの更新は将来 GitHub Actions 化予定。それまでは手動で
// `cp .cache/sightings-v2.json public/data/sightings.json` してコミット。

const CACHE_DIR = join(process.cwd(), ".cache");
const CACHE_FILE = join(CACHE_DIR, "sightings-v2.json");
const SNAPSHOT_FILE = join(process.cwd(), "public", "data", "sightings.json");
export const CACHE_TAG = "kuma-records";
// Vercel 関数のプロセスローカルメモリキャッシュ TTL。
// sharp9110-flash が 1 分ごと、news-flash が 5 分ごとに sightings.json を
// 更新するので、5 分以上 stale な snapshot を返さない設計に。
const REVALIDATE_SECONDS = 5 * 60;

type CacheBlob = { generatedAt: number; records: UnifiedSighting[] };

function readDiskCache(): CacheBlob | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    const raw = readFileSync(CACHE_FILE, "utf8");
    const blob = JSON.parse(raw) as CacheBlob;
    if (!Array.isArray(blob.records) || typeof blob.generatedAt !== "number")
      return null;
    return blob;
  } catch {
    return null;
  }
}

async function readBundledSnapshot(): Promise<UnifiedSighting[] | null> {
  // 1. fs 経由で読む (build 時の SSG 生成では public/data/sightings.json
  //    が参照可能なので、ビルド中はこちら)。
  //    Vercel の serverless 関数 runtime では bundle に同梱しないため
  //    existsSync が false になり、fetch fallback (2.) に流れる。
  try {
    if (existsSync(SNAPSHOT_FILE)) {
      const raw = readFileSync(SNAPSHOT_FILE, "utf8");
      const blob = JSON.parse(raw) as { records?: UnifiedSighting[] };
      if (Array.isArray(blob.records) && blob.records.length > 0) {
        return blob.records;
      }
    }
  } catch {
    // 続けて HTTP フォールバック
  }
  // 2. Vercel runtime: serverless bundle に sightings.json は無いのでネット取得。
  //    取得元は優先順:
  //      a) GitHub raw (main の最新コミット) — cron が sightings.json のみを
  //         commit すると should-deploy.sh がビルドをスキップするため、
  //         デプロイ済み静的ファイルは最大1日 stale。raw なら各 commit が
  //         ~数分で反映される (public repo なので認証不要)。
  //      b) 同一オリジンの静的ファイル — raw 取得失敗時のフォールバック。
  //    どちらも memCache (5分TTL) があるのでフェッチ頻度はインスタンス当り低い。
  //    22MB と大きいので Data Cache (2MB上限) には載らない → cache:"no-store"。
  const RAW_URL =
    "https://raw.githubusercontent.com/HshmtMss/kuma-watch/main/public/data/sightings.json";
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/data/sightings.json`
    : null;
  const candidates = [RAW_URL, baseUrl].filter((u): u is string => Boolean(u));
  for (const url of candidates) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) continue;
      const blob = (await res.json()) as { records?: UnifiedSighting[] };
      if (Array.isArray(blob.records) && blob.records.length > 0) {
        return blob.records;
      }
    } catch {
      // 次の候補へ
    }
  }
  return null;
}

function writeDiskCache(records: UnifiedSighting[]): void {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(
      CACHE_FILE,
      JSON.stringify({ generatedAt: Date.now(), records }),
    );
  } catch {
    // serverless では書き込み不可。サイレントに無視
  }
}

export async function aggregateAllSightings(): Promise<UnifiedSighting[]> {
  // 公式系 (sharp9110 + 自治体) と報道系 (Google News) を並列で集約。
  // 報道系は失敗しても全体を倒さないよう catch で空配列にフォールバック。
  // isOfficial は news.ts で false を明示。それ以外 (sharp9110 / 自治体) は
  // undefined のまま流し、UI 側で「未指定 = 公式扱い」のデフォルトに任せる。
  // 全レコードに isOfficial: true を埋めると sightings.json が 1MB 近く
  // 肥大化するため、付与は news 由来 (false) のみに限定する。
  const [sharp, official, news] = await Promise.all([
    getSharp9110Sightings().catch(() => [] as UnifiedSighting[]),
    fetchAllOfficialSightings().catch(() => [] as UnifiedSighting[]),
    fetchNewsSightings().catch(() => [] as UnifiedSighting[]),
  ]);
  const all: UnifiedSighting[] = [
    ...sharp.map((s) => ({ ...s, source: "sharp9110" })),
    ...official,
    ...news,
  ];
  writeDiskCache(all);
  return all;
}

// Next.js 16 の unstable_cache は 2MB 上限が課されており、
// 全国の出没データ (~19MB) は載らない。サーバー単位のメモリキャッシュで十分なので
// プロセスローカルに保持する (Vercel の serverless でもインスタンス内で再利用される)。
let memCache: { records: UnifiedSighting[]; loadedAt: number } | null = null;
const MEM_CACHE_TTL_MS = REVALIDATE_SECONDS * 1000;

// 近接重複の名寄せ (dedup A)。同一事案が複数ソース (news / sharp9110 / 公式) や 4h 取り込みの
// 都合で別レコード化し、地図に複数ピンが重なる問題への対処。日付 + 緯度経度を約 220m グリッド
// に丸めたキーで束ね、代表は「公式 > 報道 > 市民」の優先度 (同順は ingestedAt が新しい方) で
// 選ぶ。新着性 (青リング) を失わないよう ingestedAt はグループ内の最新を引き継ぐ。map と
// place-index の件数の両方がこの経路 (getCachedSightings) を通るため、一箇所で両方に効く。
const DEDUP_GRID_DEG = 0.002; // 緯度で約 220m

function sourceRank(r: UnifiedSighting): number {
  if (r.sourceKind === "citizen") return 2;
  if (r.isOfficial === false) return 1; // 報道
  return 0; // 公式 (true / 未指定)
}

function dedupeNearbySightings(records: UnifiedSighting[]): UnifiedSighting[] {
  const groups = new Map<string, UnifiedSighting>();
  const passthrough: UnifiedSighting[] = [];
  for (const r of records) {
    if (typeof r.lat !== "number" || typeof r.lon !== "number" || !r.date) {
      passthrough.push(r);
      continue;
    }
    const key = `${r.date}|${Math.round(r.lat / DEDUP_GRID_DEG)}|${Math.round(
      r.lon / DEDUP_GRID_DEG,
    )}`;
    const cur = groups.get(key);
    if (!cur) {
      groups.set(key, r);
      continue;
    }
    const rep =
      sourceRank(r) < sourceRank(cur) ||
      (sourceRank(r) === sourceRank(cur) &&
        (r.ingestedAt ?? 0) > (cur.ingestedAt ?? 0))
        ? r
        : cur;
    const freshest = Math.max(r.ingestedAt ?? 0, cur.ingestedAt ?? 0);
    groups.set(key, freshest > 0 ? { ...rep, ingestedAt: freshest } : rep);
  }
  return passthrough.concat([...groups.values()]);
}

function cleanAndDedupe(records: UnifiedSighting[]): UnifiedSighting[] {
  return dedupeNearbySightings(filterMisgeocoded(records));
}

export async function getCachedSightings(): Promise<UnifiedSighting[]> {
  if (memCache && Date.now() - memCache.loadedAt < MEM_CACHE_TTL_MS) {
    return memCache.records;
  }
  const disk = readDiskCache();
  if (disk && disk.records.length > 0) {
    const cleaned = cleanAndDedupe(disk.records);
    memCache = { records: cleaned, loadedAt: Date.now() };
    return cleaned;
  }
  const bundled = await readBundledSnapshot();
  if (bundled && bundled.length > 0) {
    const cleaned = cleanAndDedupe(bundled);
    memCache = { records: cleaned, loadedAt: Date.now() };
    return cleaned;
  }
  const records = cleanAndDedupe(await aggregateAllSightings());
  memCache = { records, loadedAt: Date.now() };
  return records;
}

/** Cron 等でキャッシュを破棄する用 */
export function invalidateSightingsCache(): void {
  memCache = null;
}
