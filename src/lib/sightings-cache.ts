import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fetchAllOfficialSightings } from "@/lib/sources/aggregate";
import { getSharp9110Sightings } from "@/lib/sources/all-records";
import { fetchNewsSightings } from "@/lib/sources/news";
import { latLonMatchesPrefecture } from "@/lib/prefecture-bbox";
import { isNewsSuppressed } from "@/lib/news-suppression";
import { isNewsMisplaced, isPrefLevelCity } from "@/lib/muni-geo-check";
import { jstToday } from "@/lib/jst-date";
import { withPinnableLocation } from "@/lib/location-precision";
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
      // 市町村名と座標が矛盾し、正誤を確定できていないものは出さない。
      // 判定はビルド時に済ませてフラグ化してある (本番では public/ の境界
      // データを読めない可能性があるため、読み取り段では再判定しない)。
      !r.geoInconsistent &&
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

/**
 * ローカル永続キャッシュを無効とみなす古さ。
 *
 * このキャッシュは dev で毎回 67 ソースを再集約しないためのもので、有効期限が
 * 無かった。そのため一度作られると何ヶ月でも使われ続け、開発中ずっと古い
 * データを見ることになる。実際 3ヶ月前(4月30日)のキャッシュが残っていて、
 * 管理画面の予測値が 6,380件 のはずが 454件 と出た。2026年のレコードが
 * 746件しか入っていなかったため (実際は14,203件)。
 *
 * 本番は .cache/ を配布しない (gitignore) ので影響しないが、ローカルでの
 * 検証結果が黙って古くなるのは危険なので期限を設ける。切れたら同梱
 * スナップショット (public/data/sightings.json) にフォールバックする。
 */
const MAX_DISK_CACHE_AGE_MS = 24 * 60 * 60 * 1000;

function readDiskCache(): CacheBlob | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    const raw = readFileSync(CACHE_FILE, "utf8");
    const blob = JSON.parse(raw) as CacheBlob;
    if (!Array.isArray(blob.records) || typeof blob.generatedAt !== "number")
      return null;
    const age = Date.now() - blob.generatedAt;
    if (age > MAX_DISK_CACHE_AGE_MS) {
      console.warn(
        `[sightings-cache] .cache/sightings-v2.json が ${Math.round(age / 86_400_000)} 日前のため使いません。` +
          ` public/data/sightings.json を読みます (再生成: npm run build:sightings)`,
      );
      return null;
    }
    return blob;
  } catch {
    return null;
  }
}

/** 同梱ファイル (public/data/sightings.json) を fs で読む。 */
function readSnapshotFromFs(): UnifiedSighting[] | null {
  try {
    if (existsSync(SNAPSHOT_FILE)) {
      const raw = readFileSync(SNAPSHOT_FILE, "utf8");
      const blob = JSON.parse(raw) as { records?: UnifiedSighting[] };
      if (Array.isArray(blob.records) && blob.records.length > 0) {
        return blob.records;
      }
    }
  } catch {
    // 呼び出し側でネット取得へ
  }
  return null;
}

/**
 * 直近に成功したスナップショットの取得元。
 *
 * same-origin(同梱) はデプロイ時点で固まっているため、ここに落ちているとデータが
 * デプロイ経過時間ぶん古くなる。しかもフォールバックは「成功」なので静かに stale を
 * 返す。ログはキャッシュミス時にしか出ず捕まえにくいので、API 応答から確認できる
 * ようにして外から計測できる状態を保つ。
 */
let lastSnapshotSource: string | null = null;
let lastSnapshotAt = 0;

export function getSnapshotDiagnostics(): {
  source: string | null;
  loadedAt: number;
  ageMs: number;
} {
  return {
    source: lastSnapshotSource,
    loadedAt: lastSnapshotAt,
    ageMs: lastSnapshotAt ? Date.now() - lastSnapshotAt : -1,
  };
}

/** GitHub raw (main の最新コミット) → 同一オリジン静的ファイルの順に取得。 */
async function readSnapshotFromNet(): Promise<UnifiedSighting[] | null> {
  const RAW_URL =
    "https://raw.githubusercontent.com/HshmtMss/kuma-watch/main/public/data/sightings.json";
  // 同一オリジンのスナップショットは proxy.ts で ?k=<SIGHTINGS_KEY> ゲートしている
  // (ボットの直 DL 遮断)。サーバ自身の取得はキーを付けて通す。未設定なら素通り。
  const key = process.env.SIGHTINGS_KEY;
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/data/sightings.json${key ? `?k=${encodeURIComponent(key)}` : ""}`
    : null;
  const candidates: { url: string; label: string }[] = [
    { url: RAW_URL, label: "github-raw" },
    ...(baseUrl ? [{ url: baseUrl, label: "same-origin(同梱・デプロイ時点で固定)" }] : []),
  ];
  for (const c of candidates) {
    const t0 = Date.now();
    try {
      // バースト時に取得が張り付いて 60s 予算を食い潰さないよう打ち切り、
      // 次の候補 (同一オリジン静的) へフォールバックする。
      // スナップショットは 35MB まで育っており 15s では切れる回があった
      // (切れると同梱の古いファイルに落ち、データが stale になる)。
      // 候補は 2 つなので 20s × 2 = 40s で 60s 予算に収まる。
      const res = await fetch(c.url, {
        cache: "no-store",
        signal: AbortSignal.timeout(20000),
      });
      if (!res.ok) {
        console.warn(`[sightings] ${c.label} 取得失敗 status=${res.status}`);
        continue;
      }
      const blob = (await res.json()) as { records?: UnifiedSighting[] };
      if (Array.isArray(blob.records) && blob.records.length > 0) {
        // どちらから読んだかを必ず残す。same-origin はデプロイ時点で固まって
        // いるため、ここに落ちているとデータがデプロイ経過時間ぶん古くなる。
        // 「フォールバックが成功扱いで stale を返す」のは気づきにくいので、
        // 成功時もソースを記録する。
        const latest = blob.records.reduce(
          (m, r) => (typeof r.ingestedAt === "number" && r.ingestedAt > m ? r.ingestedAt : m),
          0,
        );
        const ageMin = latest ? Math.round((Date.now() - latest) / 60000) : -1;
        console.log(
          `[sightings] スナップショット取得: ${c.label} ${blob.records.length}件 ` +
            `${((Date.now() - t0) / 1000).toFixed(1)}s 最終取り込みから${ageMin}分`,
        );
        lastSnapshotSource = c.label;
        lastSnapshotAt = Date.now();
        return blob.records;
      }
      console.warn(`[sightings] ${c.label} は records が空`);
    } catch (e) {
      const err = e as Error;
      console.warn(
        `[sightings] ${c.label} 取得失敗 ${((Date.now() - t0) / 1000).toFixed(1)}s: ${err.name}: ${err.message.slice(0, 100)}`,
      );
    }
  }
  console.warn("[sightings] すべての候補から取得できませんでした");
  return null;
}

async function readBundledSnapshot(): Promise<UnifiedSighting[] | null> {
  // 本番の serverless runtime では、同梱の public/data/sightings.json は
  // デプロイ時点で固まっており、cron が sightings.json だけを commit しても
  // should-deploy.sh がビルドをスキップするため最大1日 stale になる。
  // (以前は「runtime では fs に無い」前提だったが実際は読めてしまい、stale な
  //  同梱ファイルを返して新規出没が地図・通知リンクに反映されなかった。)
  //
  // そこで:
  //   - ビルド中(SSG) / ローカル開発 … 同梱ファイルが最新なので fs を優先。
  //   - 本番 runtime            … GitHub raw を優先し、各 commit を ~数分で反映。
  // どちらも memCache (5分TTL) 経由なのでフェッチ頻度はインスタンス当り低い。
  // 22MB と大きく Data Cache(2MB上限) に載らないため cache:"no-store"。
  const preferFs =
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NODE_ENV === "development";
  if (preferFs) {
    return readSnapshotFromFs() ?? (await readSnapshotFromNet());
  }
  return (await readSnapshotFromNet()) ?? readSnapshotFromFs();
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
// stale を返し続けてよい上限。
//
// 以前は上限が無く、バックグラウンド更新が失敗し続ける限りそのインスタンスは
// 古いデータを無期限に返していた。実際に地図 API が 126 分前の状態を返し、
// 当日の出没が地図に出ず、通知リンクを開いても該当地点にピンが無い状態になった。
// スナップショットは 35MB あり取得が 15s で切れることがあるので、失敗は起きる前提。
// ここを超えたら「即返し」をやめて更新を待つ。待っても駄目なら stale を返すが、
// その場合はログに残して気づけるようにする。
const MAX_STALE_MS = 30 * 60 * 1000;

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

// 報道(news)の重複 dedup (dedup B) — 報道↔一次側 と 報道↔報道 の両方。
//
// 報道は座標がジオコーディング由来で粗く(地名重心 + ジッター)、同一事案でも上の
// 220m グリッド dedup(dedup A)をすり抜けて二重計上される。特に一つの出没事案を
// 複数メディアが報じると、地名の解像度違い(町中心 / 大字 / 施設名)で 3〜20 個の
// 別ピンに散らばる(例: 埼玉県毛呂山町 2026-06-27 は報道10件→地図で3ピン)。
//
// そこで「日付 ±1 日 + 同一市町村(接尾一致で郡付き揺れを吸収) + 5km 以内」を
// 同一事案とみなし、貪欲クラスタリングで 1 件に束ねる:
//  1. 近傍に一次側(公式/Sharp9110/市民)があれば報道を落として一次側を採用。
//  2. 一次側が無ければ、クラスタごとに報道 1 件(最も具体的な代表)だけ残す。
// 代表は「地区名が具体的 > 本文が長い > 取り込みが古い」順で選ぶ。
//  - 頭数は 98% が「1」で弁別力が無いため条件にしない。
//  - 5km ゲートは粗いジオコーディングの散らばりを束ねつつ、5km 超離れた別地区は
//    別ピンとして残す(検証: 仙台市33件→2ピン=宮城野区/太白区、秋田市26→3、
//    毛呂山10→1、智頭19→1)。安全マップなので誤統合は最小限に。
//  - 座標や市町村が欠ける報道は照合できないので落とさず残す。
// 検証: 直近1年で報道 7,551 → 2,492 件(重複5,059件=67%を統合。内訳 公式重複1,058 +
//       報道どうし4,001)。一次側が空白の県(兵庫・福井 等)の報道 only は残る。
const NEWS_DUP_DAY_WINDOW = 1;
// 同一事案の複数報道はジオコーディング揺れで散らばるが、通常は同一地区内
// (〜2km)。5km は広すぎて別地区(例: 仙台市内で原町と 5km 先)を 1 つに束ね、
// 代表が別所になって「その地区の最新出没が地図から消える」不具合の原因だった。
// 2km に絞り、別地区は別ピンとして残す。同一地区内の日またぎ重複は
// collapseSameNeighborhood 側で最新1件へ集約する。
const NEWS_DUP_KM = 2;

function haversineKmLocal(
  aLat: number,
  aLon: number,
  bLat: number,
  bLon: number,
): number {
  const Rk = 6371;
  const t = Math.PI / 180;
  const dLat = (bLat - aLat) * t;
  const dLon = (bLon - aLon) * t;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(aLat * t) * Math.cos(bLat * t) * Math.sin(dLon / 2) ** 2;
  return 2 * Rk * Math.asin(Math.min(1, Math.sqrt(s)));
}

function shiftDateStr(iso: string, n: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

// 市町村名のゆるい一致(郡付き揺れを吸収): 完全一致 or 片方が他方で終わる
// (「浅川町」⊂「石川郡浅川町」)。同一県内での比較を前提。
function cityLooseMatch(a: string, b: string): boolean {
  if (!a || !b) return false;
  return a === b || a.endsWith(b) || b.endsWith(a);
}

type PrefDateIndex = Map<string, Map<string, UnifiedSighting[]>>;

function addToIndex(idx: PrefDateIndex, r: UnifiedSighting): void {
  let dm = idx.get(r.prefectureName);
  if (!dm) {
    dm = new Map();
    idx.set(r.prefectureName, dm);
  }
  const list = dm.get(r.date);
  if (list) list.push(r);
  else dm.set(r.date, [r]);
}

// 索引内に「日付 ±window + 同一市町村 + 5km 以内」のレコードがあるか。
function hasNearMatch(idx: PrefDateIndex, n: UnifiedSighting): boolean {
  const dm = idx.get(n.prefectureName);
  if (!dm) return false;
  for (let d = -NEWS_DUP_DAY_WINDOW; d <= NEWS_DUP_DAY_WINDOW; d++) {
    const list = dm.get(shiftDateStr(n.date, d));
    if (!list) continue;
    for (const p of list) {
      if (!cityLooseMatch(n.cityName, p.cityName)) continue;
      if (
        haversineKmLocal(n.lat, n.lon, p.lat as number, p.lon as number) <=
        NEWS_DUP_KM
      ) {
        return true;
      }
    }
  }
  return false;
}

// 地区名が具体的か (空 / 「不明」 / 市町村名と同一 は非具体)。代表選定に使う。
function isSpecificSection(r: UnifiedSighting): boolean {
  const s = (r.sectionName ?? "").trim();
  return Boolean(s) && s !== "不明" && s !== r.cityName;
}

function dedupeNews(records: UnifiedSighting[]): UnifiedSighting[] {
  // 一次側(非 news・座標あり) を索引。
  const primaryIdx: PrefDateIndex = new Map();
  const geoNews: UnifiedSighting[] = [];
  for (const r of records) {
    const geo =
      typeof r.lat === "number" &&
      typeof r.lon === "number" &&
      Boolean(r.date) &&
      Boolean(r.prefectureName) &&
      Boolean(r.cityName);
    if (r.sourceKind === "news") {
      if (geo) geoNews.push(r);
      continue;
    }
    if (geo) addToIndex(primaryIdx, r);
  }

  // 代表を「出没日が新しい > 具体的な地区名 > 本文が長い > 取り込みが新しい」順で
  // 優先。この順が貪欲クラスタリングの anchor 採用順になるので、同一事案の
  // クラスタでは最新の出没が代表として残る(以前は取り込みが古い方を残しており、
  // 同じ場所で新しい駆除より古い目撃が表示される不具合の原因だった)。
  geoNews.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    const s = Number(isSpecificSection(b)) - Number(isSpecificSection(a));
    if (s !== 0) return s;
    const c = (b.comment ?? "").length - (a.comment ?? "").length;
    if (c !== 0) return c;
    return (b.ingestedAt ?? 0) - (a.ingestedAt ?? 0);
  });

  // 貪欲クラスタリング: 一次側 or 既に残した報道代表と近ければ落とす。
  const anchorIdx: PrefDateIndex = new Map();
  const dropped = new Set<UnifiedSighting>();
  for (const n of geoNews) {
    if (hasNearMatch(primaryIdx, n)) {
      dropped.add(n); // 一次側を採用
      continue;
    }
    if (hasNearMatch(anchorIdx, n)) {
      dropped.add(n); // 同一事案の報道は既存代表に集約
      continue;
    }
    addToIndex(anchorIdx, n); // このクラスタの代表として残す
  }

  return dropped.size === 0
    ? records
    : records.filter((r) => !dropped.has(r));
}

// 同一地区の集約 (collapse) — dedup B(同一事案の複数報道)をすり抜けた、
// 「同じ地区にクマが繰り返し出た / 同一事案が日をまたいで報じられた」ものが
// 日付違い・少しずれた座標で複数ピンになり水増しに見える問題への対処。
// 実測(2026-07)で同一地区に別日で複数ピンのクラスタ195件・余分ピン266件。
// クレーム「同じ情報が別日に複数表記され、本当に出没したのか騙された」の核心。
//
// 方針(ユーザー決定): 同一地区(県・市・地区名の正規化)は最新1件へ集約し、
// 束ねた件数を mergedCount に持たせて「この付近で直近◯件」と示す。安全マップは
// 「今どこが危ないか」が最重要なので最新を代表にする。過去の個別ピンは畳むが、
// 件数と地図の色の濃さ(メッシュ)で繰り返し出没は伝わる。
//
// 一次側(公式/警察/市民)は畳まない(記録の信頼性が高く、水増し源は報道の
// ジオコーディング揺れのため)。座標・地区名が無い報道も畳まない(照合不能)。
//
// 「同じ地区」の判定は 距離 と 地名 の両方で行う:
//  - 距離: 同一市内で COLLAPSE_KM 以内。
//  - 地名: 同一市内で正規化した地名トークンが一致(例「梅田川周辺」「宮城野区
//    梅田川」「梅田川沿い」→ すべて "梅田川")。同じ実在地点でも表記で座標が
//    大きく散る(仙台の梅田川は 15件が12座標・最大8.8km に散らばる)のを、距離
//    だけでは束ねられないため。同一市内で同じ地名なら座標に関係なく同一地区とみなす。
// これらを連結成分でまとめ(A~B が距離, B~C が地名 なら A/B/C を1つに)、最新を
// 代表・束ねた数を mergedCount にする。
const COLLAPSE_KM = 1.5;
// 地名一致で束ねる上限距離。梅田川のような表記ゆれ由来の座標散り(最大8.8km)は
// 束ねたいが、これを超える同名は別地点(または異常座標)の可能性が高く束ねない。
const TOKEN_MAX_KM = 10;

/** 地区名から距離に依らず束ねるための正規化トークン。市名/区名/丁目/接尾を除く。 */
function placeToken(r: UnifiedSighting): string | null {
  let s = (r.sectionName ?? "").trim();
  if (!s || s === "不明" || s === r.cityName) return null;
  s = s.replace(/^.{1,4}?[区]/, ""); // 先頭の「◯◯区」を落とす
  s = s.replace(
    /[0-9０-９一二三四五六七八九十][0-9０-９一二三四五六七八九十]*(丁目|番地?|号|区画|地割)?.*$/,
    "",
  );
  s = s.replace(/(周辺|沿い|付近|地内|地区|河川敷|川沿い|住宅街|住宅地)$/g, "");
  s = s.trim();
  return s.length >= 2 ? s : null;
}

function collapseSameNeighborhood(
  records: UnifiedSighting[],
): UnifiedSighting[] {
  // 報道(座標・市あり)を市ごとにまとめる。一次側は畳まない。
  const groups = new Map<string, UnifiedSighting[]>();
  const passthrough: UnifiedSighting[] = [];
  for (const r of records) {
    const geo =
      typeof r.lat === "number" && typeof r.lon === "number" && Boolean(r.date);
    if (r.sourceKind === "news" && geo && r.cityName) {
      const key = `${r.prefectureName}/${r.cityName}`;
      const list = groups.get(key);
      if (list) list.push(r);
      else groups.set(key, [r]);
    } else {
      passthrough.push(r);
    }
  }

  const out = [...passthrough];
  for (const list of groups.values()) {
    const n = list.length;
    // Union-Find で「距離が近い or 地名トークンが一致」を同一クラスタに束ねる。
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x: number): number => {
      while (parent[x] !== x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
      }
      return x;
    };
    const tokens = list.map(placeToken);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dist = haversineKmLocal(
          list[i].lat as number,
          list[i].lon as number,
          list[j].lat as number,
          list[j].lon as number,
        );
        const sameToken =
          tokens[i] !== null && tokens[i] === tokens[j] && dist <= TOKEN_MAX_KM;
        const near = dist <= COLLAPSE_KM;
        if (sameToken || near) parent[find(i)] = find(j);
      }
    }
    // クラスタごとに、最新の出没を代表にする。
    // 件数は「記録数」ではなく「出没した日数(distinct date)」。同じ事案を複数
    // メディアが報じた分を数えて水増しに見えるのを避け、"この付近で◯日出没" と
    // 実態(何日出たか)で示すため。
    const clusters = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
      const root = find(i);
      (clusters.get(root) ?? clusters.set(root, []).get(root)!).push(i);
    }
    for (const idxs of clusters.values()) {
      let repI = idxs[0];
      for (const i of idxs) {
        const a = list[i];
        const b = list[repI];
        if (
          a.date > b.date ||
          (a.date === b.date && (a.ingestedAt ?? 0) > (b.ingestedAt ?? 0))
        )
          repI = i;
      }
      const rep = list[repI];
      const days = new Set(idxs.map((i) => list[i].date)).size;
      out.push(days > 1 ? { ...rep, mergedCount: days } : rep);
    }
  }
  return out;
}

function cleanAndDedupe(records: UnifiedSighting[]): UnifiedSighting[] {
  return collapseSameNeighborhood(
    dedupeNearbySightings(dedupeNews(filterMisgeocoded(records))),
  );
}

// 進行中のロードを 1 本に束ねるための in-flight プロミス。
// これが無いと、デプロイ直後(全ページ cold)にクローラ等が多数の生成スポットを
// 叩いた際、1 インスタンス内で 22MB のスナップショット取得 + 全件 dedup が
// 並列に何本も走り、メモリ超過/タイムアウトで関数がクラッシュ(5xx)する。
let inFlight: Promise<UnifiedSighting[]> | null = null;

/** キャッシュ未ヒット時の実ロード。ディスク → 同梱/GitHub の順。 */
async function loadFreshSightings(): Promise<UnifiedSighting[]> {
  const disk = readDiskCache();
  if (disk && disk.records.length > 0) return cleanAndDedupe(disk.records);
  const bundled = await readBundledSnapshot();
  if (bundled && bundled.length > 0) return cleanAndDedupe(bundled);
  // serverless runtime では 3 分超かかる実集約は絶対に走らせない。
  // (60s 制限で必ず timeout → 5xx。バースト時に GitHub raw 取得が失敗すると
  //  この経路に落ちて /spot のオンデマンド描画がクラッシュしていた。)
  // 集約はビルド時 (SSG) / ローカル dev でのみ許可。runtime は空で返し、
  // ページは 200 (データ無し) で描画する — 次回リクエストで再取得を試みる。
  const isBuildOrDev =
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NODE_ENV === "development";
  if (!isBuildOrDev) return [];
  return cleanAndDedupe(await aggregateAllSightings());
}

/** 同時実行を 1 本に束ねるロード。成功 (非空) 時のみ memCache を更新する。 */
function refreshSightings(): Promise<UnifiedSighting[]> {
  if (!inFlight) {
    inFlight = loadFreshSightings()
      .then((records) => {
        // 取得失敗 (空) は memCache に載せない。stale を維持し次回再取得する。
        if (records.length > 0) memCache = { records, loadedAt: Date.now() };
        return records;
      })
      .catch(() => [] as UnifiedSighting[])
      .finally(() => {
        inFlight = null;
      });
  }
  return inFlight;
}

export async function getCachedSightings(): Promise<UnifiedSighting[]> {
  const age = memCache ? Date.now() - memCache.loadedAt : Infinity;
  // 新鮮ならそのまま返す。
  if (memCache && age < MEM_CACHE_TTL_MS) return memCache.records;
  // stale: バックグラウンドで更新しつつ即座に stale を返す
  // (再ロードでリクエストを止めない・並列再ロードを起こさない)。
  if (memCache && age < MAX_STALE_MS) {
    void refreshSightings().catch(() => {
      /* 失敗時は stale を維持。ただし MAX_STALE_MS までの間だけ。 */
    });
    return memCache.records;
  }
  // 古すぎる: 更新を待つ。クマの出没を扱うので、応答が数秒遅れることより
  // 何時間も前の状態を返し続ける方が害が大きい。
  if (memCache) {
    try {
      const fresh = await refreshSightings();
      if (fresh.length > 0) return fresh;
    } catch {
      /* 下の stale フォールバックへ */
    }
    console.warn(
      `[sightings] スナップショットの更新に失敗。${Math.round(age / 60000)} 分前のデータを返します`,
    );
    return memCache.records;
  }
  // cold: 同時アクセスは 1 本の in-flight ロードを共有し、22MB の多重読込による
  // OOM/タイムアウトを防ぐ。ロード自体は失敗しても [] を返す設計(下流で200描画)。
  return refreshSightings();
}

/** Cron 等でキャッシュを破棄する用 */
export function invalidateSightingsCache(): void {
  memCache = null;
  inFlight = null;
  rawMemCache = null;
}

// 重複排除「前」の記録キャッシュ (getRawSightingById 用)。
let rawMemCache: { records: UnifiedSighting[]; loadedAt: number } | null = null;

// forceFresh の再取得スロットル。通知直後の「まだ 5 分キャッシュに載っていない」
// 1 件を確実に開くため、TTL を無視して最新スナップショット(GitHub raw)を直読み
// する。ただし存在しない id の連打で 22MB を何度も引かないよう、実際の再取得は
// 60 秒に 1 回までに制限する(それ以外は既存キャッシュを使う)。
let lastRawForceFreshAt = 0;
const RAW_FORCE_FRESH_MIN_INTERVAL_MS = 60 * 1000;

// ---- 近傍限定ロード（/spot 等の局所ページ用。全件 dedup を避け OOM を防ぐ） ----
let rawInFlight: Promise<UnifiedSighting[]> | null = null;

/** 生記録(filterMisgeocoded のみ)を安全にロード。runtime では実集約に落ちない。 */
async function loadFreshRaw(): Promise<UnifiedSighting[]> {
  const disk = readDiskCache();
  if (disk && disk.records.length > 0) return filterMisgeocoded(disk.records);
  const bundled = await readBundledSnapshot();
  if (bundled && bundled.length > 0) return filterMisgeocoded(bundled);
  const isBuildOrDev =
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NODE_ENV === "development";
  if (!isBuildOrDev) return [];
  return filterMisgeocoded(await aggregateAllSightings());
}

/** 同時実行を 1 本に束ねる生記録ロード。成功時のみ rawMemCache を更新。 */
function refreshRaw(): Promise<UnifiedSighting[]> {
  if (!rawInFlight) {
    rawInFlight = loadFreshRaw()
      .then((records) => {
        if (records.length > 0) rawMemCache = { records, loadedAt: Date.now() };
        return records;
      })
      .catch(() => [] as UnifiedSighting[])
      .finally(() => {
        rawInFlight = null;
      });
  }
  return rawInFlight;
}

/** 生記録キャッシュ取得（stale 即返し + バックグラウンド更新 + in-flight 集約）。 */
async function getRawSightingsCached(): Promise<UnifiedSighting[]> {
  const age = rawMemCache ? Date.now() - rawMemCache.loadedAt : Infinity;
  if (rawMemCache && age < MEM_CACHE_TTL_MS) return rawMemCache.records;
  if (rawMemCache) {
    void refreshRaw().catch(() => {});
    return rawMemCache.records;
  }
  return refreshRaw();
}

/**
 * 中心から radiusKm 内の出没だけを返す（近接・報道の重複排除済み）。
 *
 * dedup は近距離（<=5km）内でしか記録を併合しない。したがって「先に bbox で
 * 近傍だけ切り出してから cleanAndDedupe しても、全件を dedup してから近傍を
 * 切り出すのと結果は同じ」。全件（3万件超・31MB）を毎回 dedup する
 * getCachedSightings と違い、重い 4 パスを局所の小集合だけに掛けるので、
 * 21,305 件のオンデマンド描画（/spot）が同時に来てもメモリを使い切らない
 * （status 0 = OOM の解消）。dedup 端の取りこぼしを避け bbox に +6km の余白。
 */
// ---- 空間シャード（build-shards.ts が public/data/sightings-grid/ に生成） ----
// /spot は近傍セル(数KB〜数MB)だけ読めば済むので、91k件/31MB の全件読込による
// OOM を根本的に避ける。runtime は GitHub raw の該当セルだけ取得する。
const SHARD_CELL_DEG = 0.25;
const SHARD_BASE_RAW =
  "https://raw.githubusercontent.com/HshmtMss/kuma-watch/main/data/sightings-grid";
// セル単位の小キャッシュ（近隣 spot 間で再利用し取得を減らす）。
const shardCache = new Map<
  string,
  { records: UnifiedSighting[]; loadedAt: number }
>();

function bboxDeltas(centerLat: number, padKm: number): { dLat: number } {
  return { dLat: padKm / 111 };
}
function dLonFor(centerLat: number, padKm: number): number {
  const cos = Math.cos((centerLat * Math.PI) / 180);
  return padKm / (111 * (Math.abs(cos) > 1e-6 ? Math.abs(cos) : 1e-6));
}

function filterToBbox(
  records: UnifiedSighting[],
  centerLat: number,
  centerLon: number,
  padKm: number,
): UnifiedSighting[] {
  const { dLat } = bboxDeltas(centerLat, padKm);
  const dLon = dLonFor(centerLat, padKm);
  return records.filter(
    (r) =>
      typeof r.lat === "number" &&
      typeof r.lon === "number" &&
      Math.abs(r.lat - centerLat) <= dLat &&
      Math.abs(r.lon - centerLon) <= dLon,
  );
}

function shardCellKeys(
  centerLat: number,
  centerLon: number,
  padKm: number,
): string[] {
  const { dLat } = bboxDeltas(centerLat, padKm);
  const dLon = dLonFor(centerLat, padKm);
  const latMin = Math.floor((centerLat - dLat) / SHARD_CELL_DEG);
  const latMax = Math.floor((centerLat + dLat) / SHARD_CELL_DEG);
  const lonMin = Math.floor((centerLon - dLon) / SHARD_CELL_DEG);
  const lonMax = Math.floor((centerLon + dLon) / SHARD_CELL_DEG);
  const keys: string[] = [];
  for (let la = latMin; la <= latMax; la++)
    for (let lo = lonMin; lo <= lonMax; lo++) keys.push(`${la}_${lo}`);
  return keys;
}

/** 1 セル取得。404(空セル)は []、ネットワーク失敗は null(=全件フォールバック信号)。 */
async function fetchShardCell(key: string): Promise<UnifiedSighting[] | null> {
  const cached = shardCache.get(key);
  if (cached && Date.now() - cached.loadedAt < MEM_CACHE_TTL_MS)
    return cached.records;
  try {
    // ISR(静的)ページの描画中に呼ばれるため cache:"no-store" は使えない
    // (Next.js が "static → dynamic" エラーで 500 になる)。revalidate で
    // キャッシュ可能な fetch にする(シャードは 15 分ごと再生成なので 15 分で十分)。
    const res = await fetch(`${SHARD_BASE_RAW}/${key}.json`, {
      next: { revalidate: 900 },
    });
    if (res.status === 404) {
      shardCache.set(key, { records: [], loadedAt: Date.now() });
      return [];
    }
    if (!res.ok) return null;
    const blob = (await res.json()) as { records?: UnifiedSighting[] };
    const recs = Array.isArray(blob.records) ? blob.records : [];
    shardCache.set(key, { records: recs, loadedAt: Date.now() });
    return recs;
  } catch {
    return null;
  }
}

/** シャードから近傍取得。1 つでも取得失敗があれば null → 全件フォールバックさせる。 */
async function loadNearbyFromShards(
  centerLat: number,
  centerLon: number,
  padKm: number,
): Promise<UnifiedSighting[] | null> {
  const keys = shardCellKeys(centerLat, centerLon, padKm);
  const parts = await Promise.all(keys.map(fetchShardCell));
  if (parts.some((p) => p === null)) return null;
  return parts.flat() as UnifiedSighting[];
}

/**
 * 中心から radiusKm 内の出没だけを返す（近接・報道の重複排除済み）。
 *
 * dedup は近距離（<=5km）内でしか記録を併合しないので、先に近傍だけ切り出してから
 * cleanAndDedupe しても結果は全件処理と同一。runtime は空間シャード（近傍セルだけ・
 * 数KB〜数MB）を読むため、91k件/31MB の全件読込による OOM（status 0 → 5xx）を避ける。
 * シャードが未整備/取得失敗のときは従来の全件ロードにフォールバックする（安全）。
 */
/**
 * ある地点の周辺の出没を返す。/spot の「半径 10km 以内で N 件」の根拠になる。
 *
 * 場所が市町村までしか分かっていない事案は除外する (location-precision)。座標が
 * 地名からの推定なので、その点が半径 10km に入るかどうかは偶然で決まり、
 * 「この観光地の周辺で起きた」という主張の根拠にならない。市町村ページと違って
 * 距離が判定できない以上、件数からも外すのが正しい。
 */
export async function getNearbySightings(
  centerLat: number,
  centerLon: number,
  radiusKm: number,
): Promise<UnifiedSighting[]> {
  const padKm = radiusKm + 6;
  const isBuildOrDev =
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NODE_ENV === "development";
  // ビルド(SSG)/dev は全件ロード(ローカル fs。ネットワーク不要で安定)。
  if (isBuildOrDev) {
    const raw = await getRawSightingsCached();
    return withPinnableLocation(
      cleanAndDedupe(filterToBbox(raw, centerLat, centerLon, padKm)),
    );
  }
  // runtime は空間シャードのみ。no-store の全件ロードにフォールバックすると
  // (a) "static → dynamic" 500 (b) 91k件/31MB の OOM を招くため行わない。
  // シャード取得に失敗したら空(200・データ無し)で描画し、次回リクエストで再取得。
  const shardRecs = await loadNearbyFromShards(centerLat, centerLon, padKm);
  return withPinnableLocation(
    cleanAndDedupe(filterToBbox(shardRecs ?? [], centerLat, centerLon, padKm)),
  );
}

/**
 * 読み込み元(disk→bundled→集約)から、filterMisgeocoded のみ掛けた記録を返す。
 * forceFresh=true かつ前回の強制取得から 60 秒以上経っていれば、5 分 TTL を迂回して
 * 最新スナップショットを直読みする(通知直後の新規レコードを拾う用)。
 */
async function loadRawForLookup(forceFresh = false): Promise<UnifiedSighting[]> {
  const doForce =
    forceFresh &&
    Date.now() - lastRawForceFreshAt > RAW_FORCE_FRESH_MIN_INTERVAL_MS;
  if (
    !doForce &&
    rawMemCache &&
    Date.now() - rawMemCache.loadedAt < MEM_CACHE_TTL_MS
  )
    return rawMemCache.records;
  let recs: UnifiedSighting[] | null = null;
  if (doForce) {
    // 5 分キャッシュを迂回し、最新の commit 済みスナップショットを直読み。
    lastRawForceFreshAt = Date.now();
    recs = await readSnapshotFromNet();
  }
  if (!recs) {
    const disk = readDiskCache();
    recs = disk && disk.records.length > 0 ? disk.records : null;
  }
  if (!recs) recs = await readBundledSnapshot();
  if (!recs) recs = await aggregateAllSightings();
  const filtered = filterMisgeocoded(recs ?? []);
  rawMemCache = { records: filtered, loadedAt: Date.now() };
  return filtered;
}

/**
 * 出没を id で 1 件返す。重複排除「前」の記録から探す。
 *
 * 通知(GitHub Actions)は重複排除前の生データの id で送るが、地図が出す
 * getCachedSightings は近接・報道の重複排除で一部レコードを代表へ集約して
 * 落とす。そのため通知された id が getCachedSightings に無く、通知リンクが
 * その出没を開けない事があった(原町・梅田川で13件が2件に集約される等)。
 * ここでは重複排除を掛けずに探すので、通知された当の記録を確実に開ける。
 * hint 座標は同一 id が複数ある場合の取り違え防止。
 */
export async function getRawSightingById(
  id: string,
  hintLat?: number,
  hintLon?: number,
  forceFresh = false,
): Promise<UnifiedSighting | null> {
  const recs = await loadRawForLookup(forceFresh);
  const matches = recs.filter((s) => String(s.id) === id);
  if (matches.length === 0) return null;
  if (
    matches.length === 1 ||
    hintLat === undefined ||
    hintLon === undefined ||
    !Number.isFinite(hintLat) ||
    !Number.isFinite(hintLon)
  )
    return matches[0];
  return matches.reduce((best, s) => {
    const d = (la: number, lo: number) =>
      (la - hintLat) ** 2 + (lo - hintLon) ** 2;
    return typeof s.lat === "number" &&
      typeof s.lon === "number" &&
      typeof best.lat === "number" &&
      typeof best.lon === "number" &&
      d(s.lat, s.lon) < d(best.lat, best.lon)
      ? s
      : best;
  });
}
