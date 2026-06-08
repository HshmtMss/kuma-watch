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
import { createHash } from "node:crypto";

type StoredSubscription = {
  endpoint: string;
  p256dh: string;
  auth: string;
  createdAt: number;
  lastSeen: number;
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

export function hashEndpoint(endpoint: string): string {
  return createHash("sha256").update(endpoint).digest("hex").slice(0, 16);
}

function muniKey(pref: string, city: string): string {
  return `${pref}/${city}`;
}

export async function subscribe(input: {
  endpoint: string;
  p256dh: string;
  auth: string;
  pref: string;
  city: string;
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
  };
  const mk = muniKey(input.pref, input.city);
  await Promise.all([
    r.set(`sub:${hash}`, JSON.stringify(sub)),
    r.sadd(`muni:${mk}`, hash),
    r.sadd(`muni:active`, mk),
    r.sadd(`sub:munis:${hash}`, mk),
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
  // この endpoint が他の muni も購読してなければ完全削除
  const otherMunis = await r.scard(`sub:munis:${hash}`);
  if (otherMunis === 0) {
    await r.del(`sub:${hash}`);
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
    });
  }
  return out;
}

export type PushStats = {
  /** ユニーク購読者数 (= sub:{hash} の件数。1 端末 = 1。複数地域登録でも 1) */
  totalSubscribers: number;
  /** 購読者が 1 人以上いる市町村の数 */
  activeMuniCount: number;
  /** (購読者 × 地域) のペア総数 (= 各 muni の購読者数の合計)。複数地域ユーザは重複計上 */
  totalSubscriptions: number;
  /** 1 購読者あたりの平均登録地域数 (= totalSubscriptions / totalSubscribers) */
  avgMunisPerSubscriber: number;
  /** 購読者数の多い市町村ランキング (上位 topN) */
  topMunis: { pref: string; city: string; count: number }[];
};

/**
 * 通知登録状況の集計。管理用 (/api/admin/push-stats) から呼ぶ。
 *   - 総登録者数: sub:{hash} を SCAN して数える (sub:munis:{hash} は除外)
 *   - 地域別: muni:active を起点に各 muni:{mk} の SCARD をパイプラインで取得
 * purgeSubscription は muni:active を掃除しないため、SCARD 0 の muni は除外する。
 */
export async function getPushStats(topN = 30): Promise<PushStats> {
  const r = client();

  // 1) ユニーク購読者数: sub:* を SCAN。ただし sub:munis:* も glob に一致するので除外。
  let cursor = "0";
  let totalSubscribers = 0;
  do {
    const [next, keys] = await r.scan(cursor, { match: "sub:*", count: 1000 });
    cursor = typeof next === "string" ? next : String(next);
    for (const k of keys) {
      if (!k.startsWith("sub:munis:")) totalSubscribers++;
    }
  } while (cursor !== "0");

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

  return {
    totalSubscribers,
    activeMuniCount,
    totalSubscriptions,
    avgMunisPerSubscriber:
      totalSubscribers > 0 ? totalSubscriptions / totalSubscribers : 0,
    topMunis: perMuni.slice(0, topN),
  };
}

/**
 * 410/404 などで失効した subscription を完全削除する。dispatch 時に
 * web-push が gone を返したらこれを呼ぶ。
 */
export async function purgeSubscription(hash: string): Promise<void> {
  const r = client();
  const mks = (await r.smembers<string[]>(`sub:munis:${hash}`)) ?? [];
  const pipeline = r.pipeline();
  for (const mk of mks) {
    pipeline.srem(`muni:${mk}`, hash);
  }
  pipeline.del(`sub:${hash}`);
  pipeline.del(`sub:munis:${hash}`);
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
