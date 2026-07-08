import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/line-client";
import { getSubscriptionsForUser, isConfigured } from "@/lib/line-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * LIFF の通知設定ページ用: この userId の登録一覧 (市町村 / 観光地 / 地点)。
 * userId は idToken 検証で得る。
 *
 * 入力 (POST JSON): { idToken }
 * 出力: { munis, spots, geos }
 */

type Body = { idToken?: string };

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (!body.idToken) {
    return NextResponse.json({ error: "missing idToken" }, { status: 400 });
  }
  const verified = await verifyIdToken(body.idToken);
  if (!verified) {
    return NextResponse.json({ error: "invalid idToken" }, { status: 401 });
  }

  const subs = await getSubscriptionsForUser(verified.userId);
  return NextResponse.json({ configured: true, ...subs });
}
