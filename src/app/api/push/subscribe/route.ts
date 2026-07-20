import { NextResponse } from "next/server";
import {
  isConfigured,
  subscribe,
  subscribeGeo,
  subscribeSpot,
} from "@/lib/push-storage";
import {
  isGeoPushReleased,
  isPushReleased,
  isSpotPushReleased,
} from "@/lib/push-flag";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SubscribeBody = {
  subscription: {
    endpoint: string;
    keys: { p256dh: string; auth: string };
  };
  // 市町村購読は pref + city、観光地購読は slug、地点購読は geo を送る (排他)。
  pref?: string;
  city?: string;
  slug?: string;
  geo?: { lat: number; lon: number; radiusKm: number; label?: string };
  /**
   * どの導線から登録したか (map_card / place_hero / landing 等)。
   * GA4 にしか無いと「どの導線が効いたか」を実登録データから追えないため、
   * サーバ側にも残す。無くても購読は成立させる (任意項目)。
   */
  surface?: string;
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
  const { subscription, pref, city, slug, geo, surface } = body;
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

  // 地点購読 (geo 指定)。任意地点 + 半径。別フラグで段階公開する。
  if (geo) {
    if (!isGeoPushReleased()) {
      return NextResponse.json(
        { error: "geo notifications not available" },
        { status: 403 },
      );
    }
    if (
      typeof geo.lat !== "number" ||
      typeof geo.lon !== "number" ||
      typeof geo.radiusKm !== "number" ||
      geo.radiusKm <= 0 ||
      geo.radiusKm > 100 ||
      Math.abs(geo.lat) > 90 ||
      Math.abs(geo.lon) > 180
    ) {
      return NextResponse.json({ error: "invalid geo" }, { status: 400 });
    }
    const { id } = await subscribeGeo({
      endpoint: subscription.endpoint,
      p256dh: subscription.keys.p256dh,
      auth: subscription.keys.auth,
      lat: geo.lat,
      lon: geo.lon,
      radiusKm: geo.radiusKm,
      label: geo.label ? geo.label.slice(0, 60) : undefined,
    });
    return NextResponse.json({ ok: true, id });
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
    ...(typeof surface === "string" && surface ? { surface } : {}),
  });
  return NextResponse.json({ ok: true });
}
