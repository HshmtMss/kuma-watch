import { NextResponse } from "next/server";
import webpush, { type WebPushError } from "web-push";
import {
  filterUndispatched,
  getActiveSpots,
  getAllGeoSubscribers,
  getSubscribersForMuni,
  getSubscribersForSpot,
  isConfigured,
  markDispatched,
  purgeSubscription,
} from "@/lib/push-storage";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { haversineKm } from "@/lib/nearby-sightings";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Web Push 配信エンドポイント。GitHub Actions の news-flash.yml から
 * Bearer 認証付きで叩かれる想定。
 *
 * 入力 (POST JSON):
 *   {
 *     newRecords: [
 *       { id, prefectureName, cityName, lat, lon, date, comment?, sourceUrl? }
 *     ]
 *   }
 *
 *   GitHub Actions 側で「直前コミットで追加された sightings」を
 *   git diff から抽出し、ここに渡す。dispatch 側で sightings.json を
 *   読みに行かないので、Vercel 再デプロイのタイミングと無関係に動く。
 *
 * 動作:
 *   1. dispatched:ids セットで既送信を除外
 *   2a. muni 単位でグルーピング (cityName の完全一致) → 購読者へ送信
 *   2b. spot 単位でグルーピング (lat/lon が観光地から半径 10km 以内) → 購読者へ送信
 *       muni と spot は独立に送るため、両方登録している端末には 2 通届く (仕様)。
 *   3. 410/404 が返ってきた endpoint は購読 DB から削除
 *   4. 送信対象になった id を dispatched:ids に追加
 */

const SPOT_RADIUS_KM = 10; // /spot/[slug] の NEAR_RADIUS_KM と揃える

type NewRecord = {
  id: string;
  prefectureName: string;
  cityName: string;
  lat?: number;
  lon?: number;
  date?: string;
  comment?: string;
  sourceUrl?: string;
};

type Body = {
  newRecords?: NewRecord[];
};

type Sub = { hash: string; endpoint: string; p256dh: string; auth: string };

function isBearerAuthed(req: Request): boolean {
  const secret = process.env.PUSH_DISPATCH_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization") ?? "";
  return auth === `Bearer ${secret}`;
}

function configureWebPush(): boolean {
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;
  if (!pub || !priv || !subject) return false;
  webpush.setVapidDetails(subject, pub, priv);
  return true;
}

/**
 * 購読者一覧へ payload を送信し、成功件数を返す。
 * 410/404 (失効) の endpoint は購読 DB から purge する。
 */
async function deliver(subs: Sub[], payload: string): Promise<number> {
  const results = await Promise.allSettled(
    subs.map((s) =>
      webpush.sendNotification(
        { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        payload,
        { TTL: 24 * 3600 },
      ),
    ),
  );
  let sent = 0;
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.status === "fulfilled") {
      sent++;
    } else {
      const err = r.reason as WebPushError;
      if (err?.statusCode === 410 || err?.statusCode === 404) {
        await purgeSubscription(subs[i].hash).catch(() => {});
      }
      // それ以外 (429, 5xx) は次回 dispatch まで残しておく
    }
  }
  return sent;
}

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "push storage not configured" },
      { status: 503 },
    );
  }
  if (!isBearerAuthed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!configureWebPush()) {
    return NextResponse.json(
      { error: "VAPID keys not configured" },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const records = body.newRecords ?? [];
  if (records.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "no records" });
  }

  // 1. 重複送信を弾く
  const newIds = await filterUndispatched(records.map((r) => r.id));
  const newSet = new Set(newIds);
  const filtered = records.filter((r) => newSet.has(r.id));
  if (filtered.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "all duplicate" });
  }

  let sentCount = 0;
  let recipientCount = 0;
  // 送信対象になった id (muni / spot どちらか一方でも拾われたもの)。Set で重複排除。
  const dispatchedIds = new Set<string>();

  // ── 2a. muni 単位でグルーピングして送信 ──────────────────────────────
  type MuniGroup = { pref: string; city: string; records: NewRecord[] };
  const muniGroups = new Map<string, MuniGroup>();
  for (const r of filtered) {
    if (!r.prefectureName || !r.cityName) continue;
    const key = `${r.prefectureName}/${r.cityName}`;
    let g = muniGroups.get(key);
    if (!g) {
      g = { pref: r.prefectureName, city: r.cityName, records: [] };
      muniGroups.set(key, g);
    }
    g.records.push(r);
  }
  for (const g of muniGroups.values()) {
    const subs = await getSubscribersForMuni(g.pref, g.city);
    // 購読者ゼロでも dispatched に入れて将来の重複送信を防ぐ
    g.records.forEach((r) => dispatchedIds.add(r.id));
    if (subs.length === 0) continue;
    recipientCount += subs.length;
    const n = g.records.length;
    const title =
      n === 1
        ? `${g.city} で新規クマ出没`
        : `${g.city} で新規クマ出没 (${n} 件)`;
    const top = g.records[0];
    const text =
      top.comment && top.comment.length > 0
        ? top.comment.slice(0, 90)
        : `${top.date ?? ""} ${g.pref}${g.city}`.trim();
    const url = `/place/${encodeURIComponent(g.pref)}/${encodeURIComponent(g.city)}`;
    const payload = JSON.stringify({
      title,
      body: text,
      url,
      tag: `kuma-${g.pref}-${g.city}`,
      icon: "/icons/Icon-192.png",
      badge: "/icons/Icon-192.png",
    });
    sentCount += await deliver(subs, payload);
  }

  // ── 2b. spot 単位でグルーピングして送信 (近傍 10km の地理マッチ) ───────
  const activeSpots = await getActiveSpots();
  if (activeSpots.length > 0) {
    const activeSet = new Set(activeSpots);
    const landmarks = JAPAN_LANDMARKS.filter((l) => activeSet.has(l.slug));
    type SpotGroup = {
      slug: string;
      name: string;
      records: NewRecord[];
    };
    const spotGroups = new Map<string, SpotGroup>();
    for (const r of filtered) {
      if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
      for (const l of landmarks) {
        if (haversineKm(l.lat, l.lon, r.lat, r.lon) > SPOT_RADIUS_KM) continue;
        let g = spotGroups.get(l.slug);
        if (!g) {
          g = { slug: l.slug, name: l.name, records: [] };
          spotGroups.set(l.slug, g);
        }
        g.records.push(r);
      }
    }
    for (const g of spotGroups.values()) {
      const subs = await getSubscribersForSpot(g.slug);
      g.records.forEach((r) => dispatchedIds.add(r.id));
      if (subs.length === 0) continue;
      recipientCount += subs.length;
      const n = g.records.length;
      const title =
        n === 1
          ? `${g.name} 周辺で新規クマ出没`
          : `${g.name} 周辺で新規クマ出没 (${n} 件)`;
      const top = g.records[0];
      const text =
        top.comment && top.comment.length > 0
          ? top.comment.slice(0, 90)
          : `${top.date ?? ""} ${g.name}周辺`.trim();
      const url = `/spot/${encodeURIComponent(g.slug)}`;
      const payload = JSON.stringify({
        title,
        body: text,
        url,
        tag: `kuma-spot-${g.slug}`,
        icon: "/icons/Icon-192.png",
        badge: "/icons/Icon-192.png",
      });
      sentCount += await deliver(subs, payload);
    }
  }

  // ── 2c. geo (任意地点 + 半径) 単位で送信 ───────────────────────────────
  // 各 endpoint の登録地点ごとに、半径内に入る新規出没をまとめて 1 通送る。
  // tag を地点 id にするので、同地点の複数出没は 1 通に集約される。
  const geoSubs = await getAllGeoSubscribers();
  for (const gsub of geoSubs) {
    for (const pt of gsub.points) {
      const matched = filtered.filter(
        (r) =>
          typeof r.lat === "number" &&
          typeof r.lon === "number" &&
          haversineKm(pt.lat, pt.lon, r.lat, r.lon) <= pt.radiusKm,
      );
      if (matched.length === 0) continue;
      matched.forEach((r) => dispatchedIds.add(r.id));
      recipientCount += 1;
      const place = pt.label || "登録地点";
      const n = matched.length;
      const title =
        n === 1
          ? `${place} 周辺で新規クマ出没`
          : `${place} 周辺で新規クマ出没 (${n} 件)`;
      const top = matched[0];
      const text =
        top.comment && top.comment.length > 0
          ? top.comment.slice(0, 90)
          : `${top.date ?? ""} ${place}周辺 (半径${pt.radiusKm}km)`.trim();
      const params = new URLSearchParams({
        lat: pt.lat.toFixed(5),
        lon: pt.lon.toFixed(5),
        z: "12",
      });
      if (pt.label) params.set("label", pt.label);
      const payload = JSON.stringify({
        title,
        body: text,
        url: `/?${params.toString()}`,
        tag: `kuma-geo-${pt.id}`,
        icon: "/icons/Icon-192.png",
        badge: "/icons/Icon-192.png",
      });
      sentCount += await deliver(
        [
          {
            hash: gsub.hash,
            endpoint: gsub.endpoint,
            p256dh: gsub.p256dh,
            auth: gsub.auth,
          },
        ],
        payload,
      );
    }
  }

  // 3. 配信済みマーキング
  const dispatched = [...dispatchedIds];
  await markDispatched(dispatched);

  return NextResponse.json({
    ok: true,
    muniGroups: muniGroups.size,
    recipients: recipientCount,
    sent: sentCount,
    dispatched: dispatched.length,
  });
}
