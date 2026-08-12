import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/line-client";
import {
  getSubscriptionsForUser,
  isConfigured,
  subscribeGeo,
  subscribeMuni,
  subscribeSpot,
} from "@/lib/line-storage";
import { isLineReleased } from "@/lib/line-flag";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 1 ユーザーの通知登録は 3 種類(市町村/観光地/任意地点)の合計でこの件数まで。
// 送信コスト(LINE 従量)の抑制と分かりやすさのため。env で調整可(既定 3)。
const MAX_REGISTRATIONS = Math.max(
  1,
  Number(process.env.LINE_MAX_REGISTRATIONS ?? 5),
);

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

  // 現在の登録(3種類合計)。上限判定と「既存の再登録はべき等で許可」に使う。
  const subs = await getSubscriptionsForUser(userId);
  const total = subs.munis.length + subs.spots.length + subs.geos.length;
  const overLimit = { error: "limit", max: MAX_REGISTRATIONS, count: total };
  const limitStatus = 409;

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
    // geo は常に新規追加。上限に達していれば拒否。
    if (total >= MAX_REGISTRATIONS) {
      return NextResponse.json(overLimit, { status: limitStatus });
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

  // 観光地 (slug)。既に登録済みなら再登録はべき等で許可(件数は増えない)。
  if (slug) {
    const already = subs.spots.includes(slug);
    if (!already && total >= MAX_REGISTRATIONS) {
      return NextResponse.json(overLimit, { status: limitStatus });
    }
    await subscribeSpot({ userId, displayName, slug });
    return NextResponse.json({ ok: true });
  }

  // 市町村 (pref + city)。既に登録済みなら再登録はべき等で許可。
  if (!pref || !city) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const alreadyMuni = subs.munis.some(
    (m) => m.pref === pref && m.city === city,
  );
  if (!alreadyMuni && total >= MAX_REGISTRATIONS) {
    return NextResponse.json(overLimit, { status: limitStatus });
  }
  await subscribeMuni({ userId, displayName, pref, city });
  return NextResponse.json({ ok: true });
}
