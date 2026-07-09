import { NextResponse } from "next/server";
import {
  filterUndispatched,
  getActiveSpots,
  getAllGeoSubscribers,
  getSubscribersForMuni,
  getSubscribersForSpot,
  isConfigured,
  markDispatched,
} from "@/lib/line-storage";
import {
  isLineConfigured,
  multicast,
  pushMessage,
  text,
} from "@/lib/line-client";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { haversineKm } from "@/lib/nearby-sightings";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * LINE 配信エンドポイント。Web Push の dispatch/route.ts と対になる。
 * GitHub Actions (news-flash.yml) の追加ステップから、Web Push と同じ
 * newRecords を Bearer 認証付きで叩く想定。認証シークレットは
 * Web Push と共用 (PUSH_DISPATCH_SECRET)。
 *
 * 入力 (POST JSON): { newRecords: [{ id, prefectureName, cityName, lat, lon, date, comment?, sourceUrl? }] }
 *
 * 動作 (Web Push と同じ 3 パス):
 *   1. ldispatched:ids で既送信を除外 (LINE 独自セット)
 *   2a. muni 完全一致 → multicast
 *   2b. spot 近傍 10km → multicast
 *   2c. geo 半径内 → ユーザごとに push (地点が個人ごとに違うため)
 *   3. 送信対象 id を ldispatched:ids に記録
 *
 * Web Push とセットは分けてあるので、両方に登録している人は Web と LINE の
 * 両方に届く (仕様: 到達の二重化)。
 */

const SPOT_RADIUS_KM = 10; // Web Push dispatch と揃える

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

type Body = { newRecords?: NewRecord[] };

function isBearerAuthed(req: Request): boolean {
  const secret = process.env.PUSH_DISPATCH_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization") ?? "";
  return auth === `Bearer ${secret}`;
}

function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://kuma-watch.jp"
  );
}

/** 1 出没の本文行 (先頭 90 字)。Web Push の text 生成と揃える。 */
function snippet(top: NewRecord, fallback: string): string {
  return top.comment && top.comment.length > 0
    ? top.comment.slice(0, 90)
    : fallback;
}

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "line storage not configured" },
      { status: 503 },
    );
  }
  if (!isBearerAuthed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!isLineConfigured()) {
    return NextResponse.json(
      { error: "LINE channel token not configured" },
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

  // 1. 重複送信を弾く (LINE 独自セット)
  const newIds = await filterUndispatched(records.map((r) => r.id));
  const newSet = new Set(newIds);
  const filtered = records.filter((r) => newSet.has(r.id));
  if (filtered.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "all duplicate" });
  }

  const base = siteUrl();
  let sentCount = 0;
  let recipientCount = 0;
  const dispatchedIds = new Set<string>();

  // ── 2a. muni 単位 ──────────────────────────────────────────────────────
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
    const userIds = await getSubscribersForMuni(g.pref, g.city);
    g.records.forEach((r) => dispatchedIds.add(r.id));
    if (userIds.length === 0) continue;
    recipientCount += userIds.length;
    const n = g.records.length;
    const head =
      n === 1
        ? `${g.city}で新しいクマ出没`
        : `${g.city}で新しいクマ出没（${n}件）`;
    const top = g.records[0];
    const line = snippet(top, `${top.date ?? ""} ${g.pref}${g.city}`.trim());
    const url = `${base}/place/${encodeURIComponent(g.pref)}/${encodeURIComponent(g.city)}`;
    const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}`);
    const { sent } = await multicast(userIds, [msg]);
    sentCount += sent;
  }

  // ── 2b. spot 単位 (近傍 10km) ──────────────────────────────────────────
  const activeSpots = await getActiveSpots();
  if (activeSpots.length > 0) {
    const activeSet = new Set(activeSpots);
    const landmarks = JAPAN_LANDMARKS.filter((l) => activeSet.has(l.slug));
    type SpotGroup = { slug: string; name: string; records: NewRecord[] };
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
      const userIds = await getSubscribersForSpot(g.slug);
      g.records.forEach((r) => dispatchedIds.add(r.id));
      if (userIds.length === 0) continue;
      recipientCount += userIds.length;
      const n = g.records.length;
      const head =
        n === 1
          ? `${g.name}周辺で新しいクマ出没`
          : `${g.name}周辺で新しいクマ出没（${n}件）`;
      const top = g.records[0];
      const line = snippet(top, `${top.date ?? ""} ${g.name}周辺`.trim());
      const url = `${base}/spot/${encodeURIComponent(g.slug)}`;
      const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}`);
      const { sent } = await multicast(userIds, [msg]);
      sentCount += sent;
    }
  }

  // ── 2c. geo (任意地点 + 半径) ──────────────────────────────────────────
  // 地点が個人ごとに違うので multicast ではなく userId ごとに push する。
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
      const head =
        n === 1
          ? `${place}周辺で新しいクマ出没`
          : `${place}周辺で新しいクマ出没（${n}件）`;
      const top = matched[0];
      const line = snippet(
        top,
        `${top.date ?? ""} ${place}周辺（半径${pt.radiusKm}km）`.trim(),
      );
      const params = new URLSearchParams({
        lat: pt.lat.toFixed(5),
        lon: pt.lon.toFixed(5),
        z: "12",
      });
      if (pt.label) params.set("label", pt.label);
      const url = `${base}/?${params.toString()}`;
      const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}`);
      const { ok } = await pushMessage(gsub.userId, [msg]);
      if (ok) sentCount += 1;
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
