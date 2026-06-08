import { NextResponse } from "next/server";
import {
  checkSpotSubscription,
  checkSubscription,
  isConfigured,
} from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  endpoint: string;
  // 市町村は pref + city、観光地は slug (排他)
  pref?: string;
  city?: string;
  slug?: string;
};

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json({ subscribed: false, configured: false });
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
  if (body.slug) {
    const result = await checkSpotSubscription({
      endpoint: body.endpoint,
      slug: body.slug,
    });
    return NextResponse.json({ ...result, configured: true });
  }
  if (!body.pref || !body.city) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const result = await checkSubscription({
    endpoint: body.endpoint,
    pref: body.pref,
    city: body.city,
  });
  return NextResponse.json({ ...result, configured: true });
}
