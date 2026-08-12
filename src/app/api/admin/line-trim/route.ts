import { NextResponse } from "next/server";
import {
  getAllUserIds,
  getRegistrationCounts,
  trimUserRegistrations,
} from "@/lib/line-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * LINE 通知登録を 1 ユーザー keep 件(既定 5)まで切り詰める一回限りの移行。
 * ADMIN_SECRET で保護。dryRun=1 で「何人・何件消えるか」だけ確認できる。
 * 冪等: 既に keep 件以下のユーザーはスキップするので何度叩いても安全
 * (途中でタイムアウトしても再実行で続きを処理できる)。
 *
 * 削除順は trimUserRegistrations と同じ「古い geo → spot → muni」。
 */
function authed(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

export async function POST(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const url = new URL(req.url);
  const dryRun = url.searchParams.get("dryRun") === "1";
  const keep = Math.max(1, Number(url.searchParams.get("keep") ?? 5));

  const userIds = await getAllUserIds();
  const counts = await getRegistrationCounts(userIds);
  const over = [...counts.entries()]
    .filter(([, n]) => n > keep)
    .sort((a, b) => b[1] - a[1]);

  let removed = 0;
  let trimmedUsers = 0;
  if (!dryRun) {
    for (const [userId] of over) {
      const res = await trimUserRegistrations(userId, keep);
      removed += res.removed;
      if (res.removed > 0) trimmedUsers += 1;
    }
  }

  return NextResponse.json({
    ok: true,
    dryRun,
    keep,
    scanned: userIds.length,
    overCount: over.length,
    // userId は伏せ、件数分布だけ返す(個人特定を避ける)。
    overTotals: over.map(([, n]) => n),
    wouldRemove: over.reduce((s, [, n]) => s + (n - keep), 0),
    ...(dryRun ? {} : { trimmedUsers, removed }),
  });
}
