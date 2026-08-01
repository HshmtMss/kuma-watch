import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import MAP from "@/data/curated-slug-romaji.json";

/**
 * 手キュレーション観光地の日本語スラッグ→ローマ字スラッグ移行に伴う、
 * 通知購読キーの一回限りの付け替え（LINE + Web Push）。ADMIN_SECRET で保護。
 *
 * スラッグ変更(デプロイ)の直後に一度だけ POST すると、既存購読者を失わずに
 * 旧スラッグ配下の購読を新スラッグへ移す。冪等（旧キーが空なら何もしない）なので
 * 複数回叩いても安全。dryRun=1 で件数だけ確認できる。
 *
 * 対象キー:
 *   LINE : lspot:{slug} / lspot:active / luser:spots:{userId}
 *   Push : spot:{slug}  / spot:active  / sub:spots:{hash}
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorized(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

function isConfigured(): boolean {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return Boolean(url && token);
}

export async function POST(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!isConfigured()) {
    return NextResponse.json({ error: "redis not configured" }, { status: 503 });
  }
  const dryRun = new URL(req.url).searchParams.get("dryRun") === "1";
  const r = Redis.fromEnv();
  const pairs = Object.entries(MAP as Record<string, string>);

  const moved: {
    slug: string;
    to: string;
    lineUsers: number;
    pushHashes: number;
  }[] = [];
  let lineTotal = 0;
  let pushTotal = 0;

  for (const [oldSlug, newSlug] of pairs) {
    if (oldSlug === newSlug) continue;

    // ---- LINE ----
    const users =
      (await r.smembers<string[]>(`lspot:${oldSlug}`)) ?? [];
    if (users.length && !dryRun) {
      await r.sadd(`lspot:${newSlug}`, users[0], ...users.slice(1));
      await r.sadd(`lspot:active`, newSlug);
      for (const u of users) {
        await r.srem(`luser:spots:${u}`, oldSlug);
        await r.sadd(`luser:spots:${u}`, newSlug);
      }
      await r.del(`lspot:${oldSlug}`);
      await r.srem(`lspot:active`, oldSlug);
    }

    // ---- Push ----
    const hashes =
      (await r.smembers<string[]>(`spot:${oldSlug}`)) ?? [];
    if (hashes.length && !dryRun) {
      await r.sadd(`spot:${newSlug}`, hashes[0], ...hashes.slice(1));
      await r.sadd(`spot:active`, newSlug);
      for (const h of hashes) {
        await r.srem(`sub:spots:${h}`, oldSlug);
        await r.sadd(`sub:spots:${h}`, newSlug);
      }
      await r.del(`spot:${oldSlug}`);
      await r.srem(`spot:active`, oldSlug);
    }

    if (users.length || hashes.length) {
      moved.push({
        slug: oldSlug,
        to: newSlug,
        lineUsers: users.length,
        pushHashes: hashes.length,
      });
      lineTotal += users.length;
      pushTotal += hashes.length;
    }
  }

  return NextResponse.json({
    ok: true,
    dryRun,
    pairs: pairs.length,
    migratedSpots: moved.length,
    lineSubsMoved: lineTotal,
    pushSubsMoved: pushTotal,
    detail: moved,
  });
}
