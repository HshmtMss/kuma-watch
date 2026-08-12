/**
 * LINE 通知購読の永続化レイヤ。Upstash Redis を直接叩く。
 *
 * push-storage.ts (Web Push) の完全なミラー。違いは 2 点だけ:
 *   - ユーザ ID: endpoint の SHA-256 ハッシュ → LINE の userId
 *     (LIFF の getProfile / ID トークン検証で得る。機種変しても不変)
 *   - 宛先: web-push の endpoint/keys → Messaging API の userId 1 個
 *     (送信は line-client.ts の multicast / pushMessage が担う)
 *
 * Web Push とはキー空間を分けている ("l" プレフィクス)。同じ Upstash
 * インスタンスを共用するが、購読者集合・重複送信セットは独立。これで
 * 「Web Push には届いたが LINE には未送信」を正しく扱える。
 *
 * Redis キー設計:
 *   luser:{userId}              → JSON {userId, displayName?, createdAt, lastSeen}
 *   lmuni:{pref}/{city}         → Set<userId>
 *   lmuni:active                → Set<"pref/city"> (購読者が居る muni 一覧、dispatch 高速化用)
 *   luser:munis:{userId}        → Set<"pref/city"> (userId の購読 muni 逆引き)
 *   lspot:{slug}                → Set<userId>
 *   lspot:active                → Set<slug>
 *   luser:spots:{userId}        → Set<slug>
 *   lgeo:pts:{userId}           → JSON GeoPoint[]
 *   lgeo:active                 → Set<userId>
 *   ldispatched:ids             → Set<sightingId> (LINE 独自の重複送信防止)
 *   ldispatched:idz             → ZSET score=epoch ms (プルーニング用)
 *
 * env 変数 (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN、旧 KV_* 名も可)
 * が無いと isConfigured() が false を返し、API ルートは 503 で即終了する。
 */
import { Redis } from "@upstash/redis";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { prefectureForLatLon } from "@/lib/prefecture-bbox";
import type { GeoPoint } from "@/lib/push-storage";
import { recordChurn } from "@/lib/churn-log";

export type { GeoPoint };

type StoredLineUser = {
  userId: string;
  displayName?: string;
  createdAt: number;
  lastSeen: number;
};

let cached: Redis | null = null;

export function isConfigured(): boolean {
  // push-storage.ts と同じフォールバック。Vercel の Upstash 統合は
  // UPSTASH_REDIS_REST_* で投入するが、旧 KV 名 (KV_REST_API_*) の環境でも
  // 繋がるようにする。
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return Boolean(url && token);
}

function client(): Redis {
  if (cached) return cached;
  cached = Redis.fromEnv();
  return cached;
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

/** ランダム UUID (crypto から。Node ランタイム前提)。 */
function randomId(): string {
  // node:crypto を動的に使わず、Web Crypto (Edge/Node 両対応) から取る。
  return crypto.randomUUID();
}

/**
 * この userId がまだ何らかの購読 (muni / spot / geo) を持っているか。
 * 全部空になったときだけ luser 本体を消すために使う。
 */
async function userStillReferenced(userId: string): Promise<boolean> {
  const r = client();
  const [munis, spots, geoRaw] = await Promise.all([
    r.scard(`luser:munis:${userId}`),
    r.scard(`luser:spots:${userId}`),
    r.get<string | GeoPoint[]>(`lgeo:pts:${userId}`),
  ]);
  return (
    (munis ?? 0) > 0 ||
    (spots ?? 0) > 0 ||
    parseGeoPoints(geoRaw ?? null).length > 0
  );
}

// ─────────────────────────────────────────────────────────────────────────
// ユーザ登録 (友だち追加時に webhook から、または LIFF 初回登録時に作成)
// ─────────────────────────────────────────────────────────────────────────

/** userId 本体を upsert する。既存なら lastSeen だけ更新する。 */
export async function upsertUser(input: {
  userId: string;
  displayName?: string;
}): Promise<void> {
  const r = client();
  const now = Date.now();
  const existing = await r.get<string | StoredLineUser>(
    `luser:${input.userId}`,
  );
  const prev: StoredLineUser | null = existing
    ? typeof existing === "string"
      ? (JSON.parse(existing) as StoredLineUser)
      : existing
    : null;
  const user: StoredLineUser = {
    userId: input.userId,
    displayName: input.displayName ?? prev?.displayName,
    createdAt: prev?.createdAt ?? now,
    lastSeen: now,
  };
  await r.set(`luser:${input.userId}`, JSON.stringify(user));
}

// ─────────────────────────────────────────────────────────────────────────
// 市町村 (muni) 購読
// ─────────────────────────────────────────────────────────────────────────

export async function subscribeMuni(input: {
  userId: string;
  displayName?: string;
  pref: string;
  city: string;
}): Promise<void> {
  const r = client();
  const mk = muniKey(input.pref, input.city);
  await upsertUser({ userId: input.userId, displayName: input.displayName });
  await Promise.all([
    r.sadd(`lmuni:${mk}`, input.userId),
    r.sadd(`lmuni:active`, mk),
    r.sadd(`luser:munis:${input.userId}`, mk),
  ]);
}

export async function unsubscribeMuni(input: {
  userId: string;
  pref: string;
  city: string;
}): Promise<void> {
  const r = client();
  const mk = muniKey(input.pref, input.city);
  await Promise.all([
    r.srem(`lmuni:${mk}`, input.userId),
    r.srem(`luser:munis:${input.userId}`, mk),
  ]);
  const remaining = await r.scard(`lmuni:${mk}`);
  if (remaining === 0) {
    await r.srem(`lmuni:active`, mk);
  }
  if (!(await userStillReferenced(input.userId))) {
    await r.del(`luser:${input.userId}`);
  }
}

export async function checkMuniSubscription(input: {
  userId: string;
  pref: string;
  city: string;
}): Promise<{ subscribed: boolean }> {
  const r = client();
  const mk = muniKey(input.pref, input.city);
  const isMember = await r.sismember(`lmuni:${mk}`, input.userId);
  return { subscribed: isMember === 1 };
}

/** 1 件以上の購読者が居る muni 一覧。dispatch の入口。 */
export async function getActiveMunis(): Promise<
  { pref: string; city: string }[]
> {
  const r = client();
  const keys = await r.smembers<string[]>(`lmuni:active`);
  return keys
    .map((k) => {
      const idx = k.indexOf("/");
      if (idx < 0) return null;
      return { pref: k.slice(0, idx), city: k.slice(idx + 1) };
    })
    .filter((v): v is { pref: string; city: string } => v !== null);
}

/** 指定 muni の購読者 userId をすべて返す。dispatch 用。 */
export async function getSubscribersForMuni(
  pref: string,
  city: string,
): Promise<string[]> {
  const r = client();
  return (await r.smembers<string[]>(`lmuni:${muniKey(pref, city)}`)) ?? [];
}

// ─────────────────────────────────────────────────────────────────────────
// 観光地 (spot) 購読
// ─────────────────────────────────────────────────────────────────────────

export async function subscribeSpot(input: {
  userId: string;
  displayName?: string;
  slug: string;
}): Promise<void> {
  const r = client();
  await upsertUser({ userId: input.userId, displayName: input.displayName });
  await Promise.all([
    r.sadd(`lspot:${input.slug}`, input.userId),
    r.sadd(`lspot:active`, input.slug),
    r.sadd(`luser:spots:${input.userId}`, input.slug),
  ]);
}

export async function unsubscribeSpot(input: {
  userId: string;
  slug: string;
}): Promise<void> {
  const r = client();
  await Promise.all([
    r.srem(`lspot:${input.slug}`, input.userId),
    r.srem(`luser:spots:${input.userId}`, input.slug),
  ]);
  const remaining = await r.scard(`lspot:${input.slug}`);
  if (remaining === 0) {
    await r.srem(`lspot:active`, input.slug);
  }
  if (!(await userStillReferenced(input.userId))) {
    await r.del(`luser:${input.userId}`);
  }
}

export async function checkSpotSubscription(input: {
  userId: string;
  slug: string;
}): Promise<{ subscribed: boolean }> {
  const r = client();
  const isMember = await r.sismember(`lspot:${input.slug}`, input.userId);
  return { subscribed: isMember === 1 };
}

/** 1 件以上の購読者が居る spot の slug 一覧。dispatch の近傍計算の入口。 */
export async function getActiveSpots(): Promise<string[]> {
  const r = client();
  return (await r.smembers<string[]>(`lspot:active`)) ?? [];
}

/** 指定 spot の購読者 userId をすべて返す。dispatch 用。 */
export async function getSubscribersForSpot(slug: string): Promise<string[]> {
  const r = client();
  return (await r.smembers<string[]>(`lspot:${slug}`)) ?? [];
}

// ─────────────────────────────────────────────────────────────────────────
// 任意地点 + 半径 (geo) 購読
// ─────────────────────────────────────────────────────────────────────────

async function getGeoPointsRaw(userId: string): Promise<GeoPoint[]> {
  const r = client();
  return parseGeoPoints(await r.get<string | GeoPoint[]>(`lgeo:pts:${userId}`));
}

export async function subscribeGeo(input: {
  userId: string;
  displayName?: string;
  lat: number;
  lon: number;
  radiusKm: number;
  label?: string;
}): Promise<{ id: string }> {
  const r = client();
  const now = Date.now();
  const id = randomId();
  const point: GeoPoint = {
    id,
    lat: input.lat,
    lon: input.lon,
    radiusKm: input.radiusKm,
    label: input.label,
    createdAt: now,
  };
  await upsertUser({ userId: input.userId, displayName: input.displayName });
  const points = await getGeoPointsRaw(input.userId);
  points.push(point);
  await Promise.all([
    r.set(`lgeo:pts:${input.userId}`, JSON.stringify(points)),
    r.sadd(`lgeo:active`, input.userId),
  ]);
  return { id };
}

export async function unsubscribeGeo(input: {
  userId: string;
  id: string;
}): Promise<void> {
  const r = client();
  const points = (await getGeoPointsRaw(input.userId)).filter(
    (p) => p.id !== input.id,
  );
  if (points.length > 0) {
    await r.set(`lgeo:pts:${input.userId}`, JSON.stringify(points));
  } else {
    await Promise.all([
      r.del(`lgeo:pts:${input.userId}`),
      r.srem(`lgeo:active`, input.userId),
    ]);
  }
  if (!(await userStillReferenced(input.userId))) {
    await r.del(`luser:${input.userId}`);
  }
}

/** 中央の通知設定 (LIFF) 用: この userId の登録地点一覧。 */
export async function getGeoSubscriptions(userId: string): Promise<GeoPoint[]> {
  return getGeoPointsRaw(userId);
}

/** dispatch 用: geo 購読を持つ全 userId と地点リスト。 */
export async function getAllGeoSubscribers(): Promise<
  { userId: string; points: GeoPoint[] }[]
> {
  const r = client();
  const userIds = await r.smembers<string[]>(`lgeo:active`);
  if (!userIds || userIds.length === 0) return [];
  const pipeline = r.pipeline();
  for (const u of userIds) pipeline.get(`lgeo:pts:${u}`);
  const res = (await pipeline.exec()) as (string | GeoPoint[] | null)[];
  const out: { userId: string; points: GeoPoint[] }[] = [];
  for (let i = 0; i < userIds.length; i++) {
    const points = parseGeoPoints(res[i] as string | GeoPoint[] | null);
    if (points.length === 0) continue;
    out.push({ userId: userIds[i], points });
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────
// 逆引き (LIFF の通知設定ページ用)
// ─────────────────────────────────────────────────────────────────────────

/** この userId が登録中の市町村・観光地・地点をまとめて返す。 */
export async function getSubscriptionsForUser(userId: string): Promise<{
  munis: { pref: string; city: string }[];
  spots: string[];
  geos: GeoPoint[];
}> {
  const r = client();
  const [muniMembers, spotMembers, geos] = await Promise.all([
    r.smembers<string[]>(`luser:munis:${userId}`),
    r.smembers<string[]>(`luser:spots:${userId}`),
    getGeoPointsRaw(userId),
  ]);
  const munis = (muniMembers ?? []).map((k) => {
    const idx = k.indexOf("/");
    return idx < 0
      ? { pref: k, city: "" }
      : { pref: k.slice(0, idx), city: k.slice(idx + 1) };
  });
  return { munis, spots: spotMembers ?? [], geos };
}

/** 全ユーザー(profile を持つ userId)を列挙する。管理集計・移行用。 */
export async function getAllUserIds(): Promise<string[]> {
  const r = client();
  const ids: string[] = [];
  let cursor = "0";
  do {
    const [next, keys] = (await r.scan(cursor, {
      match: "luser:*",
      count: 1000,
    })) as [string, string[]];
    cursor = next;
    for (const k of keys) {
      const rest = k.slice("luser:".length);
      // luser:munis:* / luser:spots:* は逆引きセット。profile 本体だけ拾う。
      if (!rest.includes(":")) ids.push(rest);
    }
  } while (cursor !== "0");
  return ids;
}

/** 複数ユーザーの登録件数(muni+spot+geo)をまとめて取得(pipeline で高速)。 */
export async function getRegistrationCounts(
  userIds: string[],
): Promise<Map<string, number>> {
  const r = client();
  const out = new Map<string, number>();
  const CHUNK = 200;
  for (let i = 0; i < userIds.length; i += CHUNK) {
    const chunk = userIds.slice(i, i + CHUNK);
    const p = r.pipeline();
    for (const u of chunk) {
      p.scard(`luser:munis:${u}`);
      p.scard(`luser:spots:${u}`);
      p.get(`lgeo:pts:${u}`);
    }
    const res = (await p.exec()) as unknown[];
    for (let j = 0; j < chunk.length; j++) {
      const m = Number(res[j * 3] ?? 0) || 0;
      const s = Number(res[j * 3 + 1] ?? 0) || 0;
      const gc = parseGeoPoints(
        (res[j * 3 + 2] as string | GeoPoint[] | null) ?? null,
      ).length;
      out.set(chunk[j], m + s + gc);
    }
  }
  return out;
}

/**
 * ユーザーの登録を最大 keep 件に切り詰める。超過分は
 * 「古い geo → spot → muni」の順で削除し、意図的な地域(muni)・観光地(spot)を
 * 優先で残しつつ、地点(geo)は createdAt の新しい方を残す(＝実質「新しい keep 件」)。
 * 既存の unsubscribe* を使うので逆引きセットも正しく掃除される。
 */
export async function trimUserRegistrations(
  userId: string,
  keep: number,
): Promise<{ removed: number; kept: number }> {
  const { munis, spots, geos } = await getSubscriptionsForUser(userId);
  const total = munis.length + spots.length + geos.length;
  if (total <= keep) return { removed: 0, kept: total };
  let toRemove = total - keep;
  let removed = 0;
  // 1) 古い geo から
  const geoOldestFirst = [...geos].sort(
    (a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0),
  );
  for (const p of geoOldestFirst) {
    if (toRemove <= 0) break;
    await unsubscribeGeo({ userId, id: p.id });
    removed++;
    toRemove--;
  }
  // 2) spot
  for (const slug of spots) {
    if (toRemove <= 0) break;
    await unsubscribeSpot({ userId, slug });
    removed++;
    toRemove--;
  }
  // 3) muni
  for (const m of munis) {
    if (toRemove <= 0) break;
    await unsubscribeMuni({ userId, pref: m.pref, city: m.city });
    removed++;
    toRemove--;
  }
  return { removed, kept: total - removed };
}

/**
 * ブロック / アカウント削除 (webhook の unfollow) で失効した userId を完全削除。
 * dispatch 時に Messaging API が「blocked」相当を返した場合にも呼ぶ。
 */
export async function purgeUser(userId: string): Promise<void> {
  const r = client();
  const [mks, slugs] = await Promise.all([
    r.smembers<string[]>(`luser:munis:${userId}`),
    r.smembers<string[]>(`luser:spots:${userId}`),
  ]);
  // 削除する前に解約の記録を残す。ここで残さないと継続率が算出できなくなる
  // (このレコードは以後どこにも存在しなくなるため)。
  try {
    const prof = await r.get<{ createdAt?: number } | string>(`luser:${userId}`);
    const p =
      typeof prof === "string" ? (JSON.parse(prof) as { createdAt?: number }) : prof;
    const created = typeof p?.createdAt === "number" ? p.createdAt : null;
    const now = Date.now();
    await recordChurn({
      channel: "line",
      at: now,
      lifetimeDays: created ? Math.round((now - created) / 86_400_000) : null,
      areaCount: (mks?.length ?? 0) + (slugs?.length ?? 0),
    });
  } catch {
    // 記録に失敗しても解約処理は続行する
  }
  const pipeline = r.pipeline();
  for (const mk of mks ?? []) pipeline.srem(`lmuni:${mk}`, userId);
  for (const slug of slugs ?? []) pipeline.srem(`lspot:${slug}`, userId);
  pipeline.srem(`lgeo:active`, userId);
  pipeline.del(`luser:${userId}`);
  pipeline.del(`luser:munis:${userId}`);
  pipeline.del(`luser:spots:${userId}`);
  pipeline.del(`lgeo:pts:${userId}`);
  await pipeline.exec();
}

// ─────────────────────────────────────────────────────────────────────────
// 重複送信防止 (LINE 独自セット。Web Push の dispatched:* とは分ける)
// ─────────────────────────────────────────────────────────────────────────

const DISPATCH_RETENTION_DAYS = 90;

export async function markDispatched(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const r = client();
  const now = Date.now();
  const [first, ...rest] = ids;
  await r.sadd(`ldispatched:ids`, first, ...rest);
  const [firstSm, ...restSm] = ids.map((id) => ({ score: now, member: id }));
  await r.zadd(`ldispatched:idz`, firstSm, ...restSm);
  const cutoff = now - DISPATCH_RETENTION_DAYS * 86_400_000;
  const stale = await r.zrange<string[]>(`ldispatched:idz`, 0, cutoff, {
    byScore: true,
  });
  if (stale.length > 0) {
    const [s0, ...sRest] = stale;
    await r.srem(`ldispatched:ids`, s0, ...sRest);
    await r.zremrangebyscore(`ldispatched:idz`, 0, cutoff);
  }
}

export async function filterUndispatched(ids: string[]): Promise<string[]> {
  if (ids.length === 0) return [];
  const r = client();
  const pipeline = r.pipeline();
  for (const id of ids) pipeline.sismember(`ldispatched:ids`, id);
  const results = (await pipeline.exec()) as number[];
  return ids.filter((_, i) => results[i] !== 1);
}

// ─────────────────────────────────────────────────────────────────────────
// 集計 (管理画面 /admin/line-stats 用)。Web Push の getPushStats と同型で、
// 自治体別・観光地別・任意地点(geo)別の LINE 登録数を出す。
// ─────────────────────────────────────────────────────────────────────────

export type LineStats = {
  /** ユニーク登録者数 (= luser:{userId} 本体の件数。複数地域登録でも 1) */
  totalUsers: number;
  /** 登録者が 1 人以上いる市町村の数 */
  activeMuniCount: number;
  /** (登録者 × 地域) のペア総数。複数地域ユーザは重複計上 */
  totalMuniSubscriptions: number;
  /** 1 登録者あたりの平均登録地域数 */
  avgMunisPerUser: number;
  /** 登録者数の多い市町村ランキング (上位 topN) */
  topMunis: { pref: string; city: string; count: number }[];
  /** 登録者が 1 人以上いる観光地 (spot) の数 */
  activeSpotCount: number;
  /** (登録者 × 観光地) のペア総数 */
  totalSpotSubscriptions: number;
  /** 登録者数の多い観光地ランキング (上位 topN) */
  topSpots: { slug: string; name: string; pref: string; count: number }[];
  /** 任意地点(geo)登録の総数 */
  totalGeoPoints: number;
  /** geo 地点を都道府県にざっくり割り当てたランキング (上位 topN) */
  topGeoPrefs: { pref: string; count: number }[];
};

/**
 * LINE 登録状況の集計。getPushStats (Web Push) と同じ手順を LINE キー空間
 * ("l" プレフィクス) に対して行う。
 *   - ユニーク登録者数: luser:{userId} を SCAN (逆引き luser:munis:/luser:spots: は除外)
 *   - 地域別: lmuni:active を起点に各 lmuni:{mk} を SCARD
 *   - 観光地別: lspot:active を起点に各 lspot:{slug} を SCARD
 *   - geo別: lgeo:active の各地点を BBox で都道府県へ割当
 * unsubscribe は active セットを掃除するが、失効残りを避けるため SCARD 0 は除外する。
 */
export async function getLineStats(topN = 30): Promise<LineStats> {
  const r = client();

  // 1) ユニーク登録者数: luser:* を SCAN。逆引きキー luser:munis:* / luser:spots:*
  //    も glob に一致するので除外し、luser:{userId} 本体だけを数える。
  let cursor = "0";
  let totalUsers = 0;
  do {
    const [next, keys] = await r.scan(cursor, { match: "luser:*", count: 1000 });
    cursor = typeof next === "string" ? next : String(next);
    for (const k of keys) {
      if (!k.startsWith("luser:munis:") && !k.startsWith("luser:spots:")) {
        totalUsers++;
      }
    }
  } while (cursor !== "0");

  // 2) 地域別登録者数: lmuni:active の各 muni を SCARD。
  const muniKeys = (await r.smembers<string[]>(`lmuni:active`)) ?? [];
  let totalMuniSubscriptions = 0;
  let activeMuniCount = 0;
  const perMuni: { pref: string; city: string; count: number }[] = [];
  if (muniKeys.length > 0) {
    const pipeline = r.pipeline();
    for (const mk of muniKeys) pipeline.scard(`lmuni:${mk}`);
    const counts = (await pipeline.exec()) as number[];
    for (let i = 0; i < muniKeys.length; i++) {
      const count = counts[i] ?? 0;
      if (count <= 0) continue;
      activeMuniCount++;
      totalMuniSubscriptions += count;
      const mk = muniKeys[i];
      const idx = mk.indexOf("/");
      const pref = idx < 0 ? mk : mk.slice(0, idx);
      const city = idx < 0 ? "" : mk.slice(idx + 1);
      perMuni.push({ pref, city, count });
    }
  }
  perMuni.sort((a, b) => b.count - a.count);

  // 3) 観光地別登録者数: lspot:active の各 slug を SCARD。
  const spotSlugs = (await r.smembers<string[]>(`lspot:active`)) ?? [];
  let totalSpotSubscriptions = 0;
  let activeSpotCount = 0;
  const perSpot: { slug: string; name: string; pref: string; count: number }[] =
    [];
  if (spotSlugs.length > 0) {
    const pipeline = r.pipeline();
    for (const slug of spotSlugs) pipeline.scard(`lspot:${slug}`);
    const counts = (await pipeline.exec()) as number[];
    for (let i = 0; i < spotSlugs.length; i++) {
      const count = counts[i] ?? 0;
      if (count <= 0) continue;
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

  // 4) geo(任意地点)別: lgeo:active の各 userId の地点を都道府県へざっくり割当。
  const geoUserIds = (await r.smembers<string[]>(`lgeo:active`)) ?? [];
  let totalGeoPoints = 0;
  const geoPrefCount = new Map<string, number>();
  if (geoUserIds.length > 0) {
    const pipeline = r.pipeline();
    for (const u of geoUserIds) pipeline.get(`lgeo:pts:${u}`);
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
    totalUsers,
    activeMuniCount,
    totalMuniSubscriptions,
    avgMunisPerUser: totalUsers > 0 ? totalMuniSubscriptions / totalUsers : 0,
    topMunis: perMuni.slice(0, topN),
    activeSpotCount,
    totalSpotSubscriptions,
    topSpots: perSpot.slice(0, topN),
    totalGeoPoints,
    topGeoPrefs: perGeoPref.slice(0, topN),
  };
}

// ─── 登録数の時系列スナップショット (Web Push の push:hist と同型、キーは line:hist) ───

export type LineSnapshot = {
  date: string; // YYYY-MM-DD (JST)
  totalUsers: number;
  totalMuniSubscriptions: number;
  activeMuniCount: number;
  activeSpotCount: number;
  totalGeoPoints: number;
};

const LINE_HIST_KEY = "line:hist";

function lineJstDate(): string {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });
}

/** 現在の集計値を日次スナップショットとして保存する（cron から呼ぶ）。同日は上書き。 */
export async function recordLineSnapshot(): Promise<LineSnapshot> {
  const s = await getLineStats(0);
  const snap: LineSnapshot = {
    date: lineJstDate(),
    totalUsers: s.totalUsers,
    totalMuniSubscriptions: s.totalMuniSubscriptions,
    activeMuniCount: s.activeMuniCount,
    activeSpotCount: s.activeSpotCount,
    totalGeoPoints: s.totalGeoPoints,
  };
  await client().hset(LINE_HIST_KEY, { [snap.date]: JSON.stringify(snap) });
  return snap;
}

/** 直近 days 日の日次スナップショットを日付昇順で返す。 */
export async function getLineHistory(days = 120): Promise<LineSnapshot[]> {
  const all = await client().hgetall<Record<string, string | LineSnapshot>>(
    LINE_HIST_KEY,
  );
  if (!all) return [];
  const list: LineSnapshot[] = [];
  for (const v of Object.values(all)) {
    try {
      const s = typeof v === "string" ? (JSON.parse(v) as LineSnapshot) : v;
      if (s && typeof s.date === "string") list.push(s);
    } catch {
      // 壊れたエントリは無視
    }
  }
  list.sort((a, b) => (a.date < b.date ? -1 : 1));
  return list.slice(-days);
}

// ─── 配信ログ (LINE dispatch。1配信=1レコードを line:dispatchlog の ZSET に追記) ───
//
// 目的: 「何通送ったか」を永続化し、管理画面で稼働確認できるようにする。
// 注意: sent は LINE API が受理した「送信リクエスト数」であって到達・開封の保証
//       ではない (multicast は 200 が返ればブロック済ユーザも 1 通に含む)。
//       recipients=0 / sent=0 は異常ではなく「その回の新規目撃に該当する購読者が
//       居なかった」正常ケース。

export type LineDispatchRecord = {
  ts: number; // epoch ms (送信時刻)
  source: string; // "news-flash" | "sharp9110" | "unknown"（由来ワークフロー）
  muniGroups: number;
  recipients: number; // マッチした購読者数
  sent: number; // 送信リクエスト数（到達保証ではない）
  dispatched: number; // 新規にさばいた目撃 ID 数
  // recipients>0 なのに sent=0 のとき、LINE API が返した失敗理由の要約
  // (例 "403 ...")。原因(権限・上限・トークン)を管理画面から特定するため。
  // 送信が成功した回・そもそも対象者が居なかった回は付かない。
  error?: string;
};

const LINE_DISPATCH_KEY = "line:dispatchlog";
const DISPATCH_RETENTION_MS = 90 * 24 * 60 * 60 * 1000;

/** 1 配信の結果を追記する。配信可否には影響させない (呼び出し側で try/catch)。 */
export async function recordLineDispatch(
  rec: LineDispatchRecord,
): Promise<void> {
  const c = client();
  await c.zadd(LINE_DISPATCH_KEY, {
    score: rec.ts,
    member: JSON.stringify(rec),
  });
  // 90 日より古いエントリを間引く (スナップショットの retention と揃える)。
  await c.zremrangebyscore(LINE_DISPATCH_KEY, 0, rec.ts - DISPATCH_RETENTION_MS);
}

/** 直近の配信ログを新しい順に返す。 */
export async function getLineDispatchLog(
  limit = 100,
): Promise<LineDispatchRecord[]> {
  const c = client();
  const raw = await c.zrange<(string | LineDispatchRecord)[]>(
    LINE_DISPATCH_KEY,
    0,
    limit - 1,
    { rev: true },
  );
  if (!raw) return [];
  const out: LineDispatchRecord[] = [];
  for (const v of raw) {
    try {
      const r = (typeof v === "string" ? JSON.parse(v) : v) as LineDispatchRecord;
      if (r && typeof r.ts === "number") out.push(r);
    } catch {
      // 壊れたエントリは無視
    }
  }
  return out;
}
