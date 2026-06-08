import { NextResponse } from "next/server";
import {
  getGeoSubscriptions,
  getSubscriptionsForEndpoint,
  isConfigured,
} from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * この端末 (endpoint) が登録中の市町村・観光地を返す。
 * 中央の通知設定ページ (/notifications) が一覧表示・解除に使う。
 * endpoint は長いので GET クエリではなく POST ボディで受ける。
 */
type Body = { endpoint?: string };

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json({
      configured: false,
      munis: [],
      spots: [],
      geos: [],
    });
  }
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (!body.endpoint) {
    return NextResponse.json({ error: "missing endpoint" }, { status: 400 });
  }
  const [{ munis, spots }, geos] = await Promise.all([
    getSubscriptionsForEndpoint(body.endpoint),
    getGeoSubscriptions(body.endpoint),
  ]);
  return NextResponse.json({ configured: true, munis, spots, geos });
}
