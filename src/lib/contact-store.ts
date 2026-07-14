/**
 * 自治体・事業者からの問い合わせ (/for-gov・/for-vendors の ContactForm) の
 * 永続化レイヤ。push / 市民投稿と同じ Upstash Redis を使う。
 *
 * mailto: 方式をやめ、フォームは /api/contact に POST する。受信内容はここに
 * 保存し、管理画面 (/admin/contacts) で一覧できる。RESEND_API_KEY があれば
 * /api/contact が併せてメール通知も飛ばす (保存はメール可否と独立に必ず行う)。
 *
 * Redis キー:
 *   cc:msg:{id} → JSON (ContactMessage)
 *   cc:all      → Sorted Set <id> (score=receivedAt) — 全件インデックス (新しい順)
 */
import { Redis } from "@upstash/redis";

export type ContactKind = "gov" | "vendor";

/** 対応状態。未設定(旧レコード)は "new" 扱い。 */
export type ContactStatus = "new" | "handled";

export type ContactMessage = {
  id: string;
  kind: ContactKind;
  name: string;
  org: string;
  email: string;
  phone?: string;
  message: string;
  receivedAt: number; // epoch ms
  userAgent?: string;
  status?: ContactStatus;
  handledAt?: number; // epoch ms
};

const ALL_KEY = "cc:all";

let cached: Redis | null = null;

export function contactStoreConfigured(): boolean {
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return Boolean(url && token);
}

function client(): Redis {
  if (cached) return cached;
  // Vercel の Upstash 統合は UPSTASH_REDIS_REST_* で投入するが、旧 KV 名
  // (KV_REST_API_*) の環境でも繋がるよう明示構築する (contactStoreConfigured と
  // 判定条件を揃え、configured=true なのに fromEnv が空 URL で落ちる不整合を防ぐ)。
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  cached = new Redis({ url: url!, token: token! });
  return cached;
}

function parse(
  v: string | ContactMessage | null,
): ContactMessage | null {
  if (!v) return null;
  return typeof v === "string" ? (JSON.parse(v) as ContactMessage) : v;
}

export async function saveContact(msg: ContactMessage): Promise<void> {
  const r = client();
  await Promise.all([
    r.set(`cc:msg:${msg.id}`, JSON.stringify(msg)),
    r.zadd(ALL_KEY, { score: msg.receivedAt, member: msg.id }),
  ]);
}

/** 問い合わせを1件削除する (テスト投稿・スパムの掃除用)。 */
export async function deleteContact(id: string): Promise<void> {
  const r = client();
  await Promise.all([r.del(`cc:msg:${id}`), r.zrem(ALL_KEY, id)]);
}

/** 対応状態を更新する (新着 ↔ 対応済み)。 */
export async function setContactStatus(
  id: string,
  status: ContactStatus,
): Promise<ContactMessage | null> {
  const r = client();
  const cur = parse(await r.get<string | ContactMessage>(`cc:msg:${id}`));
  if (!cur) return null;
  const next: ContactMessage = {
    ...cur,
    status,
    handledAt: status === "handled" ? Date.now() : undefined,
  };
  await r.set(`cc:msg:${id}`, JSON.stringify(next));
  return next;
}

/** 全問い合わせを新しい順に返す。 */
export async function listContacts(opts?: {
  limit?: number;
}): Promise<ContactMessage[]> {
  const r = client();
  const limit = opts?.limit ?? 300;
  const ids = await r.zrange<string[]>(ALL_KEY, 0, limit - 1, { rev: true });
  if (!ids || ids.length === 0) return [];
  const raw = await r.mget<(string | ContactMessage)[]>(
    ...ids.map((id) => `cc:msg:${id}`),
  );
  return raw
    .map((v) => parse(v as string | ContactMessage | null))
    .filter((m): m is ContactMessage => m !== null);
}
