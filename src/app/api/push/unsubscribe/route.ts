import { NextResponse } from "next/server";
import { isConfigured, unsubscribeMuni } from "@/lib/push-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  endpoint: string;
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
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (!body.endpoint || !body.pref || !body.city) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  await unsubscribeMuni(body);
  return NextResponse.json({ ok: true });
}
