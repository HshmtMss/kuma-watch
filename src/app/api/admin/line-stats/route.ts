import { NextResponse } from "next/server";
import {
  getLineStats,
  getLineHistory,
  getLineDispatchLog,
  isConfigured,
} from "@/lib/line-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 管理者向け：LINE 通知の登録状況サマリ。Web Push の /api/admin/push-stats と
 * 同型で、キー空間だけ LINE ("l" プレフィクス) を見る。
 * ADMIN_SECRET (合言葉) を Bearer で送って認証する (push-stats / submissions と共通)。
 *   GET ?top=30 → { totalUsers, activeMuniCount, totalMuniSubscriptions,
 *                   avgMunisPerUser, topMunis, activeSpotCount,
 *                   totalSpotSubscriptions, topSpots, totalGeoPoints,
 *                   topGeoPrefs, history }
 *
 *   - totalUsers            実登録者数 (1 LINE ユーザー = 1。複数地域登録でも 1)
 *   - topMunis              自治体別の登録者数ランキング (自治体アプローチ用)
 *   - topSpots              観光地別の登録者数ランキング (観光地アプローチ用)
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
      { error: "LINE notifications not configured" },
      { status: 503 },
    );
  }
  const sp = new URL(req.url).searchParams;
  const topN = Math.min(Math.max(Number(sp.get("top")) || 30, 1), 200);
  const [stats, history, dispatchLog] = await Promise.all([
    getLineStats(topN),
    getLineHistory(120),
    getLineDispatchLog(100),
  ]);
  return NextResponse.json({ ok: true, ...stats, history, dispatchLog });
}
