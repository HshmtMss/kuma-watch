/**
 * 市民投稿 (/submit) の永続化レイヤ。push と同じ Upstash Redis を使う。
 *
 * フロー: 投稿 → status="pending" で保存 → 管理者が承認/却下 →
 * 承認分のみ getApprovedCitizenSightings() が UnifiedSighting に変換して
 * 地図 (/api/kuma) にマージされ、sourceKind="citizen" で表示される。
 *
 * Redis キー:
 *   cs:sub:{id}   → JSON (StoredSubmission)
 *   cs:pending    → Sorted Set <id> (score=receivedAt, 新しい順に取り出す)
 *   cs:approved   → Set <id> (公開中の承認済み投稿)
 *   cs:rejected   → Set <id> (監査用)
 */
import { Redis } from "@upstash/redis";
import type { UnifiedSighting } from "@/lib/sources/types";

export type SubmissionStatus = "pending" | "approved" | "rejected";

export type SubmissionSituation = "sight" | "trace" | "damage" | "injury";

export const SITUATION_LABEL: Record<SubmissionSituation, string> = {
  sight: "目撃",
  trace: "痕跡",
  damage: "物損被害",
  injury: "人身被害",
};

export type StoredSubmission = {
  id: string;
  lat: number;
  lon: number;
  occurredAt: string; // ISO 8601
  headCount: number;
  situation: SubmissionSituation;
  comment?: string;
  contact?: string;
  photoUrl?: string; // Vercel Blob の公開 URL
  prefectureName?: string; // 投稿時に逆ジオコーディング
  cityName?: string;
  sectionName?: string;
  receivedAt: number; // epoch ms
  status: SubmissionStatus;
  reviewedAt?: number;
};

let cached: Redis | null = null;

export function submissionsConfigured(): boolean {
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

function parse(v: string | StoredSubmission | null): StoredSubmission | null {
  if (!v) return null;
  return typeof v === "string" ? (JSON.parse(v) as StoredSubmission) : v;
}

export async function saveSubmission(sub: StoredSubmission): Promise<void> {
  const r = client();
  await Promise.all([
    r.set(`cs:sub:${sub.id}`, JSON.stringify(sub)),
    r.zadd(`cs:pending`, { score: sub.receivedAt, member: sub.id }),
  ]);
}

export async function getSubmission(
  id: string,
): Promise<StoredSubmission | null> {
  const r = client();
  return parse(await r.get<string | StoredSubmission>(`cs:sub:${id}`));
}

export async function listPending(limit = 100): Promise<StoredSubmission[]> {
  const r = client();
  // 新しい順 (score=receivedAt の降順)
  const ids = await r.zrange<string[]>(`cs:pending`, 0, limit - 1, {
    rev: true,
  });
  if (!ids || ids.length === 0) return [];
  const raw = await r.mget<(string | StoredSubmission)[]>(
    ...ids.map((id) => `cs:sub:${id}`),
  );
  return raw
    .map((v) => parse(v as string | StoredSubmission | null))
    .filter((s): s is StoredSubmission => s !== null);
}

export async function moderateSubmission(
  id: string,
  decision: "approve" | "reject",
): Promise<StoredSubmission | null> {
  const r = client();
  const sub = await getSubmission(id);
  if (!sub) return null;
  const updated: StoredSubmission = {
    ...sub,
    status: decision === "approve" ? "approved" : "rejected",
    reviewedAt: Date.now(),
  };
  await Promise.all([
    r.set(`cs:sub:${id}`, JSON.stringify(updated)),
    r.zrem(`cs:pending`, id),
    decision === "approve"
      ? r.sadd(`cs:approved`, id)
      : r.sadd(`cs:rejected`, id),
  ]);
  return updated;
}

/** 公開を取り消して承認待ちに戻す (誤承認のリカバリ用) */
export async function unpublishSubmission(id: string): Promise<void> {
  const r = client();
  const sub = await getSubmission(id);
  if (!sub) return;
  await Promise.all([
    r.srem(`cs:approved`, id),
    r.set(
      `cs:sub:${id}`,
      JSON.stringify({ ...sub, status: "pending" as const }),
    ),
    r.zadd(`cs:pending`, { score: sub.receivedAt, member: id }),
  ]);
}

function toUnified(sub: StoredSubmission): UnifiedSighting {
  const situationLabel = SITUATION_LABEL[sub.situation];
  const comment = sub.comment
    ? `${situationLabel}：${sub.comment}`
    : situationLabel;
  return {
    id: `citizen-${sub.id}`,
    source: "citizen",
    sourceKind: "citizen",
    lat: sub.lat,
    lon: sub.lon,
    date: sub.occurredAt.slice(0, 10),
    prefectureName: sub.prefectureName ?? "",
    cityName: sub.cityName ?? "",
    sectionName: sub.sectionName ?? "",
    comment,
    headCount: sub.headCount,
    isOfficial: false,
    sourceUrl: sub.photoUrl,
    ingestedAt: sub.reviewedAt ?? sub.receivedAt,
  };
}

/** 地図にマージする承認済み市民投稿。/api/kuma から呼ぶ。 */
export async function getApprovedCitizenSightings(): Promise<UnifiedSighting[]> {
  const r = client();
  const ids = await r.smembers<string[]>(`cs:approved`);
  if (!ids || ids.length === 0) return [];
  const raw = await r.mget<(string | StoredSubmission)[]>(
    ...ids.map((id) => `cs:sub:${id}`),
  );
  const out: UnifiedSighting[] = [];
  for (const v of raw) {
    const sub = parse(v as string | StoredSubmission | null);
    if (sub && sub.status === "approved") out.push(toUnified(sub));
  }
  return out;
}
