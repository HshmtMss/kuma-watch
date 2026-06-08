import { NextResponse } from "next/server";
import { isConfigured, subscribe, subscribeSpot } from "@/lib/push-storage";
import { isPushReleased, isSpotPushReleased } from "@/lib/push-flag";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SubscribeBody = {
  subscription: {
    endpoint: string;
    keys: { p256dh: string; auth: string };
  };
  // 市町村購読は pref + city、観光地購読は slug を送る (排他)。
  pref?: string;
  city?: string;
  slug?: string;
};

export async function POST(req: Request) {
  // リリースフラグが OFF の間は、UI を回避して直接叩かれても購読させない。
  if (!isPushReleased()) {
    return NextResponse.json(
      { error: "push notifications not available" },
      { status: 403 },
    );
  }
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "push notifications not configured" },
      { status: 503 },
    );
  }
  let body: SubscribeBody;
  try {
    body = (await req.json()) as SubscribeBody;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const { subscription, pref, city, slug } = body;
  if (
    !subscription?.endpoint ||
    !subscription.keys?.p256dh ||
    !subscription.keys?.auth
  ) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  // 適当な long URL でも受け付けないと意味がないが、極端な長さは弾く
  if (subscription.endpoint.length > 2048) {
    return NextResponse.json({ error: "endpoint too long" }, { status: 400 });
  }

  // 観光地購読 (slug 指定)。市町村通知とは別フラグで段階公開する。
  if (slug) {
    if (!isSpotPushReleased()) {
      return NextResponse.json(
        { error: "spot notifications not available" },
        { status: 403 },
      );
    }
    await subscribeSpot({
      endpoint: subscription.endpoint,
      p256dh: subscription.keys.p256dh,
      auth: subscription.keys.auth,
      slug,
    });
    return NextResponse.json({ ok: true });
  }

  // 市町村購読 (pref + city)
  if (!pref || !city) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  await subscribe({
    endpoint: subscription.endpoint,
    p256dh: subscription.keys.p256dh,
    auth: subscription.keys.auth,
    pref,
    city,
  });
  return NextResponse.json({ ok: true });
}
