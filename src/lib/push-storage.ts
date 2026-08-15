/**
 * Web Push サブスクリプションの永続化レイヤ。Upstash Redis を直接叩く。
 *
 * 設計:
 *   - subscription endpoint URL の SHA-256 ハッシュをユーザ ID 代わりに使う
 *     (アカウント不要・1 ブラウザ = 1 endpoint = 1 hash)
 *   - 1 つの endpoint が複数市町村を購読できる
 *   - 配信時の逆引き効率のため、市町村 → endpointHash の Set も維持する
 *
 * Redis キー設計:
 *   sub:{hash}                     → JSON {endpoint, p256dh, auth, createdAt, lastSeen}
 *   muni:{pref}/{city}             → Set<endpointHash>
 *   muni:active                    → Set<"pref/city"> (購読者が居る muni 一覧、dispatch 高速化用)
 *   sub:munis:{hash}               → Set<"pref/city"> (endpoint の購読 muni 逆引き)
 *   dispatched:ids                 → Set<sightingId> (重複送信防止、肥大化したら trim)
 *
 * env 変数 (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN) が無いと
 * isConfigured() が false を返し、API ルートは 503 で即終了する。
 */
import { Redis } from "@upstash/redis";
import { createHash, randomUUID } from "node:crypto";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { prefectureForLatLon } from "@/lib/prefecture-bbox";
import { recordChurn } from "@/lib/churn-log";

type StoredSubscription = {
  endpoint: string;
  p256dh: string;
  auth: string;
  createdAt: number;
  lastSeen: number;
  /**
   * どの導線から登録したか (地図FAB / place先頭CTA / 獲得LP 等)。
   * GA4 には notify_click として送っているが、GA4 と Upstash は繋がって
   * いないため、ここに残さないと「どの導線が効いたか」をサーバ側の
   * 実登録データからは永久に復元できない。導線改修の効果測定に必須。
   */
  surface?: string;
  /**
   * 購読者の言語。英語(インバウンド /en)ページからの登録は "en"。
   * 未設定=日本語(従来)。dispatch の言語別配信・管理画面の言語別集計に使う。
   */
  lang?: "en";
};

// 英語購読者の hash を集める Set。言語別カウントを scard で O(1) に取るための
// インデックス (sub 本体を全 GET せずに数えられる)。sub:{hash} を消す全経路で srem する。
const LANG_EN_KEY = "sub:lang:en";

/** 任意地点 + 半径の通知購読 (地図で選んだ「自宅周辺」など) の 1 点。 */
export type GeoPoint = {
  id: string;
  lat: number;
  lon: number;
  radiusKm: number;
  label?: string;
  createdAt: number;
};

let cached: Redis | null = null;

export function isConfigured(): boolean {
  // Redis.fromEnv() と同じフォールバックを見る。Vercel の Upstash 統合は
  // UPSTASH_REDIS_REST_* で投入するが、旧 KV 名 (KV_REST_API_*) で入る
  // 環境でも「クライアントは繋がるのに isConfigured() だけ false」で
  // 503 になるのを防ぐ。
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return Boolean(url && token);
}

function client(): Redis {
  if (cached) return cached;
  cached = Redis.fromEnv();
  return cached;
}

/**
 * 予測アラートの「前回バンド」を地域キーごとに保持する。
 * forecast-dispatch が上方クロッシング判定に使う。key 例: "spot:高尾山" / "muni:東京都/八王子市"。
 */
export async function getForecastBand(key: string): Promise<string | null> {
  if (!isConfigured()) return null;
  return (await client().get<string>(`fcband:${key}`)) ?? null;
}

export async function setForecastBand(key: string, band: string): Promise<void> {
  if (!isConfigured()) return;
  await client().set(`fcband:${key}`, band);
}

export function hashEndpoint(endpoint: string): string {
  return createHash("sha256").update(endpoint).digest("hex").slice(0, 16);
}

function muniKey(pref: string, city: string): string {
  return `${pref}/${city}`;
}

function parseGeoPoints(raw: string | GeoPoint[] | null): GeoPoint[] {
  if (!raw) return [];
  try {
    const arr = typeof raw === "string" ? (JSON.parse(raw) as GeoPoint[]) : raw;
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

/**
 * この endpoint がまだ何らかの購読 (muni / spot / geo) を持っているか。
 * いずれの解除経路でも、全部空になったときだけ sub 本体を削除するために使う。
 */
async function endpointStillReferenced(hash: string): Promise<boolean> {
  const r = client();
  const [munis, spots, geoRaw] = await Promise.all([
    r.scard(`sub:munis:${hash}`),
    r.scard(`sub:spots:${hash}`),
    r.get<string | GeoPoint[]>(`geo:pts:${hash}`),
  ]);
  return (
    (munis ?? 0) > 0 ||
    (spots ?? 0) > 0 ||
    parseGeoPoints(geoRaw ?? null).length > 0
  );
}

export async function subscribe(input: {
  endpoint: string;
  p256dh: string;
  auth: string;
  pref: string;
  city: string;
  surface?: string;
  lang?: "en";
}): Promise<{ hash: string }> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const now = Date.now();
  const sub: StoredSubscription = {
    endpoint: input.endpoint,
    p256dh: input.p256dh,
    auth: input.auth,
    createdAt: now,
    lastSeen: now,
    ...(input.surface ? { surface: input.surface } : {}),
    ...(input.lang === "en" ? { lang: "en" } : {}),
  };
  const mk = muniKey(input.pref, input.city);
  await Promise.all([
    r.set(`sub:${hash}`, JSON.stringify(sub)),
    r.sadd(`muni:${mk}`, hash),
    r.sadd(`muni:active`, mk),
    r.sadd(`sub:munis:${hash}`, mk),
    ...(input.lang === "en" ? [r.sadd(LANG_EN_KEY, hash)] : []),
  ]);
  return { hash };
}

export async function unsubscribeMuni(input: {
  endpoint: string;
  pref: string;
  city: string;
}): Promise<void> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const mk = muniKey(input.pref, input.city);
  await Promise.all([
    r.srem(`muni:${mk}`, hash),
    r.srem(`sub:munis:${hash}`, mk),
  ]);
  // muni に他の購読者がいなければ muni:active からも外す
  const remaining = await r.scard(`muni:${mk}`);
  if (remaining === 0) {
    await r.srem(`muni:active`, mk);
  }
  // この endpoint が他の muni / spot / geo も持っていなければ完全削除。
  if (!(await endpointStillReferenced(hash))) {
    await Promise.all([r.del(`sub:${hash}`), r.srem(LANG_EN_KEY, hash)]);
  }
}

export async function checkSubscription(input: {
  endpoint: string;
  pref: string;
  city: string;
}): Promise<{ subscribed: boolean }> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const mk = muniKey(input.pref, input.city);
  const isMember = await r.sismember(`muni:${mk}`, hash);
  return { subscribed: isMember === 1 };
}

/**
 * 1 件以上の購読者が居る muni 一覧。dispatch で「どこに新規 sighting が
 * 来たら誰に送るか」を効率的に決めるための入口。
 */
export async function getActiveMunis(): Promise<{ pref: string; city: string }[]> {
  const r = client();
  const keys = await r.smembers<string[]>(`muni:active`);
  return keys
    .map((k) => {
      const idx = k.indexOf("/");
      if (idx < 0) return null;
      return { pref: k.slice(0, idx), city: k.slice(idx + 1) };
    })
    .filter((v): v is { pref: string; city: string } => v !== null);
}

/**
 * 指定 muni の購読者 endpoint をすべて返す。dispatch 用。
 */
export async function getSubscribersForMuni(
  pref: string,
  city: string,
): Promise<{
  hash: string;
  endpoint: string;
  p256dh: string;
  auth: string;
  lang?: "en";
}[]> {
  const r = client();
  const mk = muniKey(pref, city);
  const hashes = await r.smembers<string[]>(`muni:${mk}`);
  if (hashes.length === 0) return [];
  const raw = await Promise.all(
    hashes.map((h) => r.get<string | StoredSubscription>(`sub:${h}`)),
  );
  const out: {
    hash: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    lang?: "en";
  }[] = [];
  for (let i = 0; i < hashes.length; i++) {
    const v = raw[i];
    if (!v) continue;
    // Upstash の get は型自動 parse する場合と string で返る場合があるので両対応
    const parsed: StoredSubscription =
      typeof v === "string" ? (JSON.parse(v) as StoredSubscription) : v;
    out.push({
      hash: hashes[i],
      endpoint: parsed.endpoint,
      p256dh: parsed.p256dh,
      auth: parsed.auth,
      ...(parsed.lang === "en" ? { lang: "en" as const } : {}),
    });
  }
  return out;
}

export type PushStats = {
  /** ユニーク購読者数 (= sub:{hash} の件数。1 端末 = 1。複数地域登録でも 1) */
  totalSubscribers: number;
  /** うち英語(インバウンド /en)からの購読者数 (= sub:lang:en の件数)。 */
  enSubscribers: number;
  /** 購読者が 1 人以上いる市町村の数 */
  activeMuniCount: number;
  /** (購読者 × 地域) のペア総数 (= 各 muni の購読者数の合計)。複数地域ユーザは重複計上 */
  totalSubscriptions: number;
  /** 1 購読者あたりの平均登録地域数 (= totalSubscriptions / totalSubscribers) */
  avgMunisPerSubscriber: number;
  /** 購読者数の多い市町村ランキング (上位 topN) */
  topMunis: { pref: string; city: string; count: number }[];
  /** 購読者が 1 人以上いる観光地 (spot) の数 */
  activeSpotCount: number;
  /** (購読者 × 観光地) のペア総数 */
  totalSpotSubscriptions: number;
  /** 購読者数の多い観光地ランキング (上位 topN)。slug と表示名・県を含む */
  topSpots: { slug: string; name: string; pref: string; count: number }[];
  /** 地図の任意地点(geo)登録の総数 (= 全 geo 地点の数)。 */
  totalGeoPoints: number;
  /** geo 地点を都道府県にざっくり割り当てたランキング (上位 topN)。 */
  topGeoPrefs: { pref: string; count: number }[];
};

/**
 * 通知登録状況の集計。管理用 (/api/admin/push-stats) から呼ぶ。
 *   - 総登録者数: sub:{hash} を SCAN して数える (sub:munis:{hash} は除外)
 *   - 地域別: muni:active を起点に各 muni:{mk} の SCARD をパイプラインで取得
 * purgeSubscription は muni:active を掃除しないため、SCARD 0 の muni は除外する。
 */
export async function getPushStats(topN = 30): Promise<PushStats> {
  const r = client();

  // 1) ユニーク購読者数: sub:* を SCAN。逆引きキー sub:munis:* / sub:spots:* も
  //    glob に一致するので除外し、sub:{hash} 本体だけを数える。
  let cursor = "0";
  let totalSubscribers = 0;
  do {
    const [next, keys] = await r.scan(cursor, { match: "sub:*", count: 1000 });
    cursor = typeof next === "string" ? next : String(next);
    for (const k of keys) {
      if (!k.startsWith("sub:munis:") && !k.startsWith("sub:spots:")) {
        totalSubscribers++;
      }
    }
  } while (cursor !== "0");

  // 1b) 英語(インバウンド)購読者数: sub:lang:en を SCARD (O(1))。
  const enSubscribers = (await r.scard(LANG_EN_KEY)) ?? 0;

  // 2) 地域別購読者数: muni:active の各 muni を SCARD。
  const muniKeys = await r.smembers<string[]>(`muni:active`);
  let totalSubscriptions = 0;
  let activeMuniCount = 0;
  const perMuni: { pref: string; city: string; count: number }[] = [];
  if (muniKeys.length > 0) {
    const pipeline = r.pipeline();
    for (const mk of muniKeys) pipeline.scard(`muni:${mk}`);
    const counts = (await pipeline.exec()) as number[];
    for (let i = 0; i < muniKeys.length; i++) {
      const count = counts[i] ?? 0;
      if (count <= 0) continue; // 失効後に残った空 muni:active を除外
      activeMuniCount++;
      totalSubscriptions += count;
      const mk = muniKeys[i];
      const idx = mk.indexOf("/");
      const pref = idx < 0 ? mk : mk.slice(0, idx);
      const city = idx < 0 ? "" : mk.slice(idx + 1);
      perMuni.push({ pref, city, count });
    }
  }
  perMuni.sort((a, b) => b.count - a.count);

  // 3) 観光地別購読者数: spot:active の各 slug を SCARD。muni と同じ手順。
  //    slug → 表示名・県は JAPAN_LANDMARKS で引く (未登録 slug は slug をそのまま名前に)。
  const spotSlugs = await r.smembers<string[]>(`spot:active`);
  let totalSpotSubscriptions = 0;
  let activeSpotCount = 0;
  const perSpot: { slug: string; name: string; pref: string; count: number }[] =
    [];
  if (spotSlugs.length > 0) {
    const pipeline = r.pipeline();
    for (const slug of spotSlugs) pipeline.scard(`spot:${slug}`);
    const counts = (await pipeline.exec()) as number[];
    for (let i = 0; i < spotSlugs.length; i++) {
      const count = counts[i] ?? 0;
      if (count <= 0) continue; // 失効後に残った空 spot:active を除外
      activeSpotCount++;
      totalSpotSubscriptions += count;
      const slug = spotSlugs[i];
      const lm = JAPAN_LANDMARKS.find((l) => l.slug === slug);
      perSpot.push({
        slug,
        name: lm?.name ?? slug,
        pref: lm?.prefName ?? "",
        count,
      });
    }
  }
  perSpot.sort((a, b) => b.count - a.count);

  // 4) geo(任意地点)別: geo:active の各 endpoint の地点を集め、都道府県にざっくり
  //    割り当てて数える。任意座標なので muni/spot ランキングには入らない層。
  const geoHashes = await r.smembers<string[]>(`geo:active`);
  let totalGeoPoints = 0;
  const geoPrefCount = new Map<string, number>();
  if (geoHashes.length > 0) {
    const pipeline = r.pipeline();
    for (const h of geoHashes) pipeline.get(`geo:pts:${h}`);
    const rawList = (await pipeline.exec()) as (string | GeoPoint[] | null)[];
    for (const raw of rawList) {
      for (const pt of parseGeoPoints(raw ?? null)) {
        const pref = prefectureForLatLon(pt.lat, pt.lon);
        if (!pref) continue;
        totalGeoPoints++;
        geoPrefCount.set(pref, (geoPrefCount.get(pref) ?? 0) + 1);
      }
    }
  }
  const perGeoPref = [...geoPrefCount.entries()]
    .map(([pref, count]) => ({ pref, count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalSubscribers,
    enSubscribers,
    activeMuniCount,
    totalSubscriptions,
    avgMunisPerSubscriber:
      totalSubscribers > 0 ? totalSubscriptions / totalSubscribers : 0,
    topMunis: perMuni.slice(0, topN),
    activeSpotCount,
    totalSpotSubscriptions,
    topSpots: perSpot.slice(0, topN),
    totalGeoPoints,
    topGeoPrefs: perGeoPref.slice(0, topN),
  };
}

// ─── 登録数の時系列スナップショット ───
// 日次で主要な集計値を push:hist (Hash: field=YYYY-MM-DD, value=JSON) に保存し、
// 管理画面で登録数の推移を見られるようにする。同日再実行は上書き（冪等）。

export type PushSnapshot = {
  date: string; // YYYY-MM-DD (JST)
  totalSubscribers: number;
  enSubscribers?: number;
  totalSubscriptions: number;
  activeMuniCount: number;
  activeSpotCount: number;
  totalGeoPoints: number;
};

const HIST_KEY = "push:hist";

function jstDate(): string {
  // "YYYY-MM-DD" (JST)。sv-SE ロケールは ISO 形式で返る。
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });
}

/** 現在の集計値を日次スナップショットとして保存する（cron から呼ぶ）。 */
export async function recordPushSnapshot(): Promise<PushSnapshot> {
  const s = await getPushStats(0);
  const snap: PushSnapshot = {
    date: jstDate(),
    totalSubscribers: s.totalSubscribers,
    enSubscribers: s.enSubscribers,
    totalSubscriptions: s.totalSubscriptions,
    activeMuniCount: s.activeMuniCount,
    activeSpotCount: s.activeSpotCount,
    totalGeoPoints: s.totalGeoPoints,
  };
  await client().hset(HIST_KEY, { [snap.date]: JSON.stringify(snap) });
  return snap;
}

/** 直近 days 日の日次スナップショットを日付昇順で返す。 */
export async function getPushHistory(days = 120): Promise<PushSnapshot[]> {
  const all = await client().hgetall<Record<string, string | PushSnapshot>>(
    HIST_KEY,
  );
  if (!all) return [];
  const list: PushSnapshot[] = [];
  for (const v of Object.values(all)) {
    try {
      list.push(typeof v === "string" ? (JSON.parse(v) as PushSnapshot) : v);
    } catch {
      /* skip broken entry */
    }
  }
  list.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  return list.slice(-days);
}

// ─── 配信ログ (Web Push dispatch。LINE の line:dispatchlog と同型、キー push:dispatchlog) ───
// sent は「送信リクエスト数」であって到達保証ではない。recipients=0/sent=0 は
// 「該当購読者なし」の正常ケース。

export type PushDispatchRecord = {
  ts: number; // epoch ms
  source: string; // "news-flash" | "sharp9110" | "unknown"
  muniGroups: number;
  recipients: number;
  sent: number;
  dispatched: number;
};

const PUSH_DISPATCH_KEY = "push:dispatchlog";
const PUSH_DISPATCH_RETENTION_MS = 90 * 24 * 60 * 60 * 1000;

/** 1 配信の結果を追記する。配信可否には影響させない (呼び出し側で try/catch)。 */
export async function recordPushDispatch(
  rec: PushDispatchRecord,
): Promise<void> {
  const c = client();
  await c.zadd(PUSH_DISPATCH_KEY, {
    score: rec.ts,
    member: JSON.stringify(rec),
  });
  await c.zremrangebyscore(
    PUSH_DISPATCH_KEY,
    0,
    rec.ts - PUSH_DISPATCH_RETENTION_MS,
  );
}

/** 直近の配信ログを新しい順に返す。 */
export async function getPushDispatchLog(
  limit = 100,
): Promise<PushDispatchRecord[]> {
  const c = client();
  const raw = await c.zrange<(string | PushDispatchRecord)[]>(
    PUSH_DISPATCH_KEY,
    0,
    limit - 1,
    { rev: true },
  );
  if (!raw) return [];
  const out: PushDispatchRecord[] = [];
  for (const v of raw) {
    try {
      const r = (typeof v === "string" ? JSON.parse(v) : v) as PushDispatchRecord;
      if (r && typeof r.ts === "number") out.push(r);
    } catch {
      /* skip broken entry */
    }
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────
// 観光地 (spot) 購読。市町村 (muni) と完全に対になる構造。違いは「出没との
// 紐付けを名前一致ではなく緯度経度の近傍 (dispatch 側で計算) で行う」点だけで、
// 保存・解除・購読確認のキー設計は muni をそのままミラーしている。
//   spot:{slug}        → Set<endpointHash>
//   spot:active        → Set<slug> (購読者が居る spot 一覧、dispatch 高速化用)
//   sub:spots:{hash}   → Set<slug> (endpoint の購読 spot 逆引き)
// ─────────────────────────────────────────────────────────────────────────

export async function subscribeSpot(input: {
  endpoint: string;
  p256dh: string;
  auth: string;
  slug: string;
  surface?: string;
  lang?: "en";
}): Promise<{ hash: string }> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const now = Date.now();
  const sub: StoredSubscription = {
    endpoint: input.endpoint,
    p256dh: input.p256dh,
    auth: input.auth,
    createdAt: now,
    lastSeen: now,
    ...(input.surface ? { surface: input.surface } : {}),
    ...(input.lang === "en" ? { lang: "en" } : {}),
  };
  await Promise.all([
    r.set(`sub:${hash}`, JSON.stringify(sub)),
    r.sadd(`spot:${input.slug}`, hash),
    r.sadd(`spot:active`, input.slug),
    r.sadd(`sub:spots:${hash}`, input.slug),
    ...(input.lang === "en" ? [r.sadd(LANG_EN_KEY, hash)] : []),
  ]);
  return { hash };
}

export async function unsubscribeSpot(input: {
  endpoint: string;
  slug: string;
}): Promise<void> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  await Promise.all([
    r.srem(`spot:${input.slug}`, hash),
    r.srem(`sub:spots:${hash}`, input.slug),
  ]);
  const remaining = await r.scard(`spot:${input.slug}`);
  if (remaining === 0) {
    await r.srem(`spot:active`, input.slug);
  }
  // muni / spot / geo いずれも残っていなければ sub 本体を削除
  if (!(await endpointStillReferenced(hash))) {
    await Promise.all([r.del(`sub:${hash}`), r.srem(LANG_EN_KEY, hash)]);
  }
}

export async function checkSpotSubscription(input: {
  endpoint: string;
  slug: string;
}): Promise<{ subscribed: boolean }> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const isMember = await r.sismember(`spot:${input.slug}`, hash);
  return { subscribed: isMember === 1 };
}

/** 1 件以上の購読者が居る spot の slug 一覧。dispatch の近傍計算の入口。 */
export async function getActiveSpots(): Promise<string[]> {
  const r = client();
  return (await r.smembers<string[]>(`spot:active`)) ?? [];
}

/** 指定 spot の購読者 endpoint をすべて返す。dispatch 用。 */
export async function getSubscribersForSpot(slug: string): Promise<
  {
    hash: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    lang?: "en";
  }[]
> {
  const r = client();
  const hashes = await r.smembers<string[]>(`spot:${slug}`);
  if (hashes.length === 0) return [];
  const raw = await Promise.all(
    hashes.map((h) => r.get<string | StoredSubscription>(`sub:${h}`)),
  );
  const out: {
    hash: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    lang?: "en";
  }[] = [];
  for (let i = 0; i < hashes.length; i++) {
    const v = raw[i];
    if (!v) continue;
    const parsed: StoredSubscription =
      typeof v === "string" ? (JSON.parse(v) as StoredSubscription) : v;
    out.push({
      hash: hashes[i],
      endpoint: parsed.endpoint,
      p256dh: parsed.p256dh,
      auth: parsed.auth,
      ...(parsed.lang === "en" ? { lang: "en" as const } : {}),
    });
  }
  return out;
}

/**
 * この endpoint が登録中の市町村・観光地を逆引きで返す。
 * 中央の「通知設定」ページ (/notifications) が一覧表示に使う。
 */
export async function getSubscriptionsForEndpoint(endpoint: string): Promise<{
  munis: { pref: string; city: string }[];
  spots: string[];
}> {
  const r = client();
  const hash = hashEndpoint(endpoint);
  const [muniMembers, spotMembers] = await Promise.all([
    r.smembers<string[]>(`sub:munis:${hash}`),
    r.smembers<string[]>(`sub:spots:${hash}`),
  ]);
  const munis = (muniMembers ?? []).map((k) => {
    const idx = k.indexOf("/");
    return idx < 0
      ? { pref: k, city: "" }
      : { pref: k.slice(0, idx), city: k.slice(idx + 1) };
  });
  return { munis, spots: spotMembers ?? [] };
}

// ─────────────────────────────────────────────────────────────────────────
// 任意地点 + 半径 (geo) 購読。地図で選んだ地点を中心に半径 R km 以内の新規出没を
// 通知する。観光地 (固定地点) の一般化。1 endpoint が複数地点を持てる。
//   geo:pts:{hash}   → JSON GeoPoint[] (その endpoint の登録地点リスト)
//   geo:active       → Set<hash> (geo 購読がある endpoint。dispatch の入口)
// dispatch では geo:active を起点に各 endpoint の地点を引き、新規出没との距離を見る。
// ─────────────────────────────────────────────────────────────────────────

async function getGeoPointsRaw(hash: string): Promise<GeoPoint[]> {
  const r = client();
  return parseGeoPoints(await r.get<string | GeoPoint[]>(`geo:pts:${hash}`));
}

export async function subscribeGeo(input: {
  endpoint: string;
  p256dh: string;
  auth: string;
  lat: number;
  lon: number;
  radiusKm: number;
  label?: string;
  lang?: "en";
}): Promise<{ hash: string; id: string }> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const now = Date.now();
  const sub: StoredSubscription = {
    endpoint: input.endpoint,
    p256dh: input.p256dh,
    auth: input.auth,
    createdAt: now,
    lastSeen: now,
    ...(input.lang === "en" ? { lang: "en" } : {}),
  };
  const id = randomUUID();
  const point: GeoPoint = {
    id,
    lat: input.lat,
    lon: input.lon,
    radiusKm: input.radiusKm,
    label: input.label,
    createdAt: now,
  };
  const points = await getGeoPointsRaw(hash);
  points.push(point);
  await Promise.all([
    r.set(`sub:${hash}`, JSON.stringify(sub)),
    r.set(`geo:pts:${hash}`, JSON.stringify(points)),
    r.sadd(`geo:active`, hash),
    ...(input.lang === "en" ? [r.sadd(LANG_EN_KEY, hash)] : []),
  ]);
  return { hash, id };
}

export async function unsubscribeGeo(input: {
  endpoint: string;
  id: string;
}): Promise<void> {
  const r = client();
  const hash = hashEndpoint(input.endpoint);
  const points = (await getGeoPointsRaw(hash)).filter((p) => p.id !== input.id);
  if (points.length > 0) {
    await r.set(`geo:pts:${hash}`, JSON.stringify(points));
  } else {
    await Promise.all([r.del(`geo:pts:${hash}`), r.srem(`geo:active`, hash)]);
  }
  if (!(await endpointStillReferenced(hash))) {
    await Promise.all([r.del(`sub:${hash}`), r.srem(LANG_EN_KEY, hash)]);
  }
}

/** 中央の通知設定ページ用: この endpoint の登録地点一覧。 */
export async function getGeoSubscriptions(
  endpoint: string,
): Promise<GeoPoint[]> {
  return getGeoPointsRaw(hashEndpoint(endpoint));
}

/** dispatch 用: geo 購読を持つ全 endpoint と、その購読情報 + 地点リスト。 */
export async function getAllGeoSubscribers(): Promise<
  {
    hash: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    points: GeoPoint[];
    lang?: "en";
  }[]
> {
  const r = client();
  const hashes = await r.smembers<string[]>(`geo:active`);
  if (!hashes || hashes.length === 0) return [];
  const pipeline = r.pipeline();
  for (const h of hashes) {
    pipeline.get(`sub:${h}`);
    pipeline.get(`geo:pts:${h}`);
  }
  const res = (await pipeline.exec()) as (string | StoredSubscription | GeoPoint[] | null)[];
  const out: {
    hash: string;
    endpoint: string;
    p256dh: string;
    auth: string;
    points: GeoPoint[];
    lang?: "en";
  }[] = [];
  for (let i = 0; i < hashes.length; i++) {
    const subRaw = res[i * 2];
    const ptsRaw = res[i * 2 + 1];
    if (!subRaw) continue;
    const sub: StoredSubscription =
      typeof subRaw === "string"
        ? (JSON.parse(subRaw) as StoredSubscription)
        : (subRaw as StoredSubscription);
    const points = parseGeoPoints(ptsRaw as string | GeoPoint[] | null);
    if (points.length === 0) continue;
    out.push({
      hash: hashes[i],
      endpoint: sub.endpoint,
      p256dh: sub.p256dh,
      auth: sub.auth,
      points,
      ...(sub.lang === "en" ? { lang: "en" as const } : {}),
    });
  }
  return out;
}

/**
 * 410/404 などで失効した subscription を完全削除する。dispatch 時に
 * web-push が gone を返したらこれを呼ぶ。muni / spot / geo の逆引きを掃除する。
 */
export async function purgeSubscription(hash: string): Promise<void> {
  const r = client();
  const [mks, slugs] = await Promise.all([
    r.smembers<string[]>(`sub:munis:${hash}`),
    r.smembers<string[]>(`sub:spots:${hash}`),
  ]);
  // 削除する前に解約の記録を残す。ここで残さないと継続率が算出できなくなる。
  try {
    const raw = await r.get<StoredSubscription | string>(`sub:${hash}`);
    const prev =
      typeof raw === "string" ? (JSON.parse(raw) as StoredSubscription) : raw;
    const now = Date.now();
    await recordChurn({
      channel: "push",
      at: now,
      lifetimeDays:
        typeof prev?.createdAt === "number"
          ? Math.round((now - prev.createdAt) / 86_400_000)
          : null,
      areaCount: (mks?.length ?? 0) + (slugs?.length ?? 0),
      ...(prev?.surface ? { surface: prev.surface } : {}),
    });
  } catch {
    // 記録に失敗しても失効処理は続行する
  }
  const pipeline = r.pipeline();
  for (const mk of mks ?? []) {
    pipeline.srem(`muni:${mk}`, hash);
  }
  for (const slug of slugs ?? []) {
    pipeline.srem(`spot:${slug}`, hash);
  }
  pipeline.srem(`geo:active`, hash);
  pipeline.srem(LANG_EN_KEY, hash);
  pipeline.del(`sub:${hash}`);
  pipeline.del(`sub:munis:${hash}`);
  pipeline.del(`sub:spots:${hash}`);
  pipeline.del(`geo:pts:${hash}`);
  await pipeline.exec();
  // muni:active のクリーンアップは getActiveMunis() 側で空 set を検知して
  // 都度呼ぶには重いので、subscribe/unsubscribeMuni の経路でのみメンテする。
  // dispatch 側で「subscribers が空だった」場合に追加で srem する。
}

/**
 * 配信済み sighting ID の重複送信防止セット。
 *
 * 肥大化防止のため、配信時刻を score にした companion sorted set
 * `dispatched:idz` を併せて維持し、保持期間 (DISPATCH_RETENTION_DAYS) を
 * 過ぎた ID を Set / ZSET 双方から都度プルーニングする。news-flash は
 * git diff で「直近コミットの新規分」しか渡さないため、古い ID を恒久的に
 * 保持する必要はない。これで dispatched:ids が無制限に膨らむのを防ぐ。
 */
const DISPATCH_RETENTION_DAYS = 90;

export async function markDispatched(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const r = client();
  const now = Date.now();
  // @upstash/redis の sadd / zadd は (key, member, ...members) シグネチャを要求する
  const [first, ...rest] = ids;
  await r.sadd(`dispatched:ids`, first, ...rest);
  // 時系列インデックス (プルーニング用)。score = 配信時刻 epoch ms。
  const [firstSm, ...restSm] = ids.map((id) => ({ score: now, member: id }));
  await r.zadd(`dispatched:idz`, firstSm, ...restSm);
  // 保持期間を過ぎた古い ID を Set / ZSET 双方から除去する。
  const cutoff = now - DISPATCH_RETENTION_DAYS * 86_400_000;
  const stale = await r.zrange<string[]>(`dispatched:idz`, 0, cutoff, {
    byScore: true,
  });
  if (stale.length > 0) {
    const [s0, ...sRest] = stale;
    await r.srem(`dispatched:ids`, s0, ...sRest);
    await r.zremrangebyscore(`dispatched:idz`, 0, cutoff);
  }
}

export async function filterUndispatched(ids: string[]): Promise<string[]> {
  if (ids.length === 0) return [];
  const r = client();
  // SISMEMBER を並列呼び (Upstash の REST は pipeline で 1 RTT に収まる)
  const pipeline = r.pipeline();
  for (const id of ids) pipeline.sismember(`dispatched:ids`, id);
  const results = (await pipeline.exec()) as number[];
  return ids.filter((_, i) => results[i] !== 1);
}
