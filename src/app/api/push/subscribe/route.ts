import { NextResponse } from "next/server";
import { isConfigured, subscribe } from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SubscribeBody = {
  subscription: {
    endpoint: string;
    keys: { p256dh: string; auth: string };
  };
  pref: string;
  city: string;
};

export async function POST(req: Request) {
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
  const { subscription, pref, city } = body;
  if (
    !subscription?.endpoint ||
    !subscription.keys?.p256dh ||
    !subscription.keys?.auth ||
    !pref ||
    !city
  ) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  // 適当な long URL でも受け付けないと意味がないが、極端な長さは弾く
  if (subscription.endpoint.length > 2048) {
    return NextResponse.json({ error: "endpoint too long" }, { status: 400 });
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
