import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/line-client";
import {
  isConfigured,
  unsubscribeGeo,
  unsubscribeMuni,
  unsubscribeSpot,
} from "@/lib/line-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * LIFF の通知設定ページから叩かれる購読解除。
 *
 * リリースフラグでは弾かない (公開停止中でもユーザは解除できるべき)。
 * userId は idToken 検証で得る (なりすまし防止)。
 *
 * 入力 (POST JSON): idToken + 対象を排他指定
 *   { idToken, pref?, city? }  … 市町村
 *   { idToken, slug? }         … 観光地
 *   { idToken, geoId? }        … 任意地点 (地点 id)
 */

type Body = {
  idToken?: string;
  pref?: string;
  city?: string;
  slug?: string;
  geoId?: string;
};

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "line notifications not configured" },
      { status: 503 },
    );
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
  const { userId } = verified;
  const { pref, city, slug, geoId } = body;

  if (geoId) {
    await unsubscribeGeo({ userId, id: geoId });
    return NextResponse.json({ ok: true });
  }
  if (slug) {
    await unsubscribeSpot({ userId, slug });
    return NextResponse.json({ ok: true });
  }
  if (pref && city) {
    await unsubscribeMuni({ userId, pref, city });
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "missing fields" }, { status: 400 });
}
