import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/line-client";
import {
  isConfigured,
  subscribeGeo,
  subscribeMuni,
  subscribeSpot,
} from "@/lib/line-storage";
import { isLineReleased } from "@/lib/line-flag";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * LIFF の登録ページから叩かれる購読受付。
 *
 * なりすまし防止のため userId はボディで受け取らず、LIFF が発行する
 * idToken (liff.getIDToken()) を検証して得た userId を使う。
 *
 * 入力 (POST JSON): idToken に加えて対象を排他指定
 *   { idToken, pref?, city? }              … 市町村
 *   { idToken, slug? }                     … 観光地
 *   { idToken, geo:{lat,lon,radiusKm,label?} } … 任意地点 + 半径
 */

type Body = {
  idToken?: string;
  pref?: string;
  city?: string;
  slug?: string;
  geo?: { lat: number; lon: number; radiusKm: number; label?: string };
};

export async function POST(req: Request) {
  if (!isLineReleased()) {
    return NextResponse.json(
      { error: "line notifications not available" },
      { status: 403 },
    );
  }
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
  const { userId, displayName } = verified;
  const { pref, city, slug, geo } = body;

  // 任意地点 (geo)
  if (geo) {
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
      userId,
      displayName,
      lat: geo.lat,
      lon: geo.lon,
      radiusKm: geo.radiusKm,
      label: geo.label ? geo.label.slice(0, 60) : undefined,
    });
    return NextResponse.json({ ok: true, id });
  }

  // 観光地 (slug)
  if (slug) {
    await subscribeSpot({ userId, displayName, slug });
    return NextResponse.json({ ok: true });
  }

  // 市町村 (pref + city)
  if (!pref || !city) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  await subscribeMuni({ userId, displayName, pref, city });
  return NextResponse.json({ ok: true });
}
