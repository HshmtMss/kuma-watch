import { NextResponse } from "next/server";
import { getPushStats, isConfigured } from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 管理者向け：Web Push 通知の登録状況サマリ。
 * ADMIN_SECRET (合言葉) を Bearer で送って認証する (市民投稿 admin と共通)。
 *   GET ?top=30 → { totalSubscribers, activeMuniCount, totalSubscriptions,
 *                    avgMunisPerSubscriber, topMunis: [...] }
 *
 *   - totalSubscribers       実登録者数 (1 端末 = 1。複数地域登録でも 1)
 *   - totalSubscriptions     (購読者 × 地域) のペア総数。複数地域ユーザは重複計上
 *   - avgMunisPerSubscriber  1 人あたり平均登録地域数 (コスト試算の A に相当)
 *   - topMunis               地域別の購読者数ランキング
 */
function authed(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "push notifications not configured" },
      { status: 503 },
    );
  }
  const sp = new URL(req.url).searchParams;
  const topN = Math.min(Math.max(Number(sp.get("top")) || 30, 1), 200);
  const stats = await getPushStats(topN);
  return NextResponse.json({ ok: true, ...stats });
}
