import { NextResponse } from "next/server";
import {
  isConfigured,
  unsubscribeGeo,
  unsubscribeMuni,
  unsubscribeSpot,
} from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  endpoint: string;
  // 市町村は pref + city、観光地は slug、地点は geoId (排他)
  pref?: string;
  city?: string;
  slug?: string;
  geoId?: string;
};

// 解除はリリースフラグで塞がない。フラグを後で OFF に戻しても、
// 既存購読者がいつでも自分で解除できるようにしておく。
export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "push notifications not configured" },
      { status: 503 },
    );
  }
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (!body.endpoint) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  if (body.geoId) {
    await unsubscribeGeo({ endpoint: body.endpoint, id: body.geoId });
    return NextResponse.json({ ok: true });
  }
  if (body.slug) {
    await unsubscribeSpot({ endpoint: body.endpoint, slug: body.slug });
    return NextResponse.json({ ok: true });
  }
  if (!body.pref || !body.city) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  await unsubscribeMuni({
    endpoint: body.endpoint,
    pref: body.pref,
    city: body.city,
  });
  return NextResponse.json({ ok: true });
}
