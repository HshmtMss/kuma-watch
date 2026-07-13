/**
 * 市民投稿 (/submit) の永続化レイヤ。push と同じ Upstash Redis を使う。
 *
 * フロー: 投稿 → status="pending" で保存 → 管理者が承認/却下/削除 →
 * 承認分のみ getApprovedCitizenSightings() が UnifiedSighting に変換して
 * 地図 (/api/kuma) にマージされ、sourceKind="citizen" で表示される。
 * 承認・却下はあとから何度でもやり直せる (status を上書きするだけ)。
 *
 * Redis キー:
 *   cs:sub:{id}  → JSON (StoredSubmission, status を内包)
 *   cs:all       → Sorted Set <id> (score=receivedAt) — 全投稿インデックス
 *   cs:approved  → Set <id> — 公開中(承認済)。地図マージ用の逆引き
 */
import { Redis } from "@upstash/redis";
import { del } from "@vercel/blob";
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
  /** 写真EXIFから読み取った撮影位置（あれば）。ピン位置(lat/lon)とは別。 */
  photoLat?: number;
  photoLon?: number;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
  receivedAt: number; // epoch ms
  status: SubmissionStatus;
  reviewedAt?: number;
  /**
   * LINE 内 (LIFF) 投稿で idToken を検証して得た userId。Web からの匿名投稿では
   * undefined。承認時の「地図に載りました」通知や、同一ユーザーの連投抑制に使う
   * (投稿の公開表示はあくまで匿名)。
   */
  lineUserId?: string;
};

const ALL_KEY = "cs:all";
const APPROVED_KEY = "cs:approved";

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
    r.zadd(ALL_KEY, { score: sub.receivedAt, member: sub.id }),
  ]);
}

export async function getSubmission(
  id: string,
): Promise<StoredSubmission | null> {
  const r = client();
  return parse(await r.get<string | StoredSubmission>(`cs:sub:${id}`));
}

/** 全投稿を新しい順に返す。status 指定で絞り込み。承認/却下/却下後も残る。 */
export async function listSubmissions(opts?: {
  status?: SubmissionStatus;
  limit?: number;
}): Promise<StoredSubmission[]> {
  const r = client();
  const limit = opts?.limit ?? 300;
  const ids = await r.zrange<string[]>(ALL_KEY, 0, limit - 1, { rev: true });
  if (!ids || ids.length === 0) return [];
  const raw = await r.mget<(string | StoredSubmission)[]>(
    ...ids.map((id) => `cs:sub:${id}`),
  );
  let out = raw
    .map((v) => parse(v as string | StoredSubmission | null))
    .filter((s): s is StoredSubmission => s !== null);
  if (opts?.status) out = out.filter((s) => s.status === opts.status);
  return out;
}

/** 承認 / 却下。あとから何度でも切り替え可能 (status を上書き)。 */
export async function moderateSubmission(
  id: string,
  decision: "approve" | "reject",
): Promise<StoredSubmission | null> {
  const r = client();
  const sub = await getSubmission(id);
  if (!sub) return null;
  const status: SubmissionStatus =
    decision === "approve" ? "approved" : "rejected";
  const updated: StoredSubmission = {
    ...sub,
    status,
    reviewedAt: Date.now(),
  };
  await r.set(`cs:sub:${id}`, JSON.stringify(updated));
  // 公開中インデックス (地図マージ用) を同期
  if (status === "approved") {
    await r.sadd(APPROVED_KEY, id);
  } else {
    await r.srem(APPROVED_KEY, id);
  }
  return updated;
}

/** 完全削除。写真も Blob から消す (best-effort)。 */
export async function deleteSubmission(id: string): Promise<boolean> {
  const r = client();
  const sub = await getSubmission(id);
  await Promise.all([
    r.zrem(ALL_KEY, id),
    r.srem(APPROVED_KEY, id),
    r.del(`cs:sub:${id}`),
  ]);
  if (sub?.photoUrl) {
    try {
      await del(sub.photoUrl);
    } catch {
      /* Blob 削除失敗は無視 */
    }
  }
  return Boolean(sub);
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
    photoUrl: sub.photoUrl,
    ingestedAt: sub.reviewedAt ?? sub.receivedAt,
  };
}

/** 地図にマージする承認済み市民投稿。/api/kuma から呼ぶ。 */
export async function getApprovedCitizenSightings(): Promise<UnifiedSighting[]> {
  const r = client();
  const ids = await r.smembers<string[]>(APPROVED_KEY);
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
