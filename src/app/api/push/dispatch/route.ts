import { NextResponse } from "next/server";
import webpush, { type WebPushError } from "web-push";
import {
  filterUndispatched,
  getSubscribersForMuni,
  isConfigured,
  markDispatched,
  purgeSubscription,
} from "@/lib/push-storage";

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
 *       { id, prefectureName, cityName, date, comment?, sourceUrl? }
 *     ]
 *   }
 *
 *   GitHub Actions 側で「直前コミットで追加された sightings」を
 *   git diff から抽出し、ここに渡す。dispatch 側で sightings.json を
 *   読みに行かないので、Vercel 再デプロイのタイミングと無関係に動く。
 *
 * 動作:
 *   1. dispatched:ids セットで既送信を除外
 *   2. muni 単位でグルーピング
 *   3. その muni の購読者を Upstash から取得
 *   4. web-push で送信
 *   5. 410/404 が返ってきた endpoint は購読 DB から削除
 *   6. 成功した id を dispatched:ids に追加
 */

type NewRecord = {
  id: string;
  prefectureName: string;
  cityName: string;
  date?: string;
  comment?: string;
  sourceUrl?: string;
};

type Body = {
  newRecords?: NewRecord[];
};

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

  // 2. muni 単位でグルーピング
  type Group = { pref: string; city: string; records: NewRecord[] };
  const groups = new Map<string, Group>();
  for (const r of filtered) {
    if (!r.prefectureName || !r.cityName) continue;
    const key = `${r.prefectureName}/${r.cityName}`;
    let g = groups.get(key);
    if (!g) {
      g = { pref: r.prefectureName, city: r.cityName, records: [] };
      groups.set(key, g);
    }
    g.records.push(r);
  }

  // 3-5. group ごとに購読者へ送信
  let sentCount = 0;
  let recipientCount = 0;
  const succeededIds: string[] = [];
  for (const g of groups.values()) {
    const subs = await getSubscribersForMuni(g.pref, g.city);
    if (subs.length === 0) {
      // 購読者ゼロでも dispatched:ids に入れて将来の重複送信を防ぐ
      succeededIds.push(...g.records.map((r) => r.id));
      continue;
    }
    recipientCount += subs.length;
    const n = g.records.length;
    const title =
      n === 1
        ? `${g.city} で新規クマ出没`
        : `${g.city} で新規クマ出没 (${n} 件)`;
    const top = g.records[0];
    const body =
      top.comment && top.comment.length > 0
        ? top.comment.slice(0, 90)
        : `${top.date ?? ""} ${g.pref}${g.city}`.trim();
    const url = `/place/${encodeURIComponent(g.pref)}/${encodeURIComponent(g.city)}`;
    const payload = JSON.stringify({
      title,
      body,
      url,
      tag: `kuma-${g.pref}-${g.city}`,
      icon: "/icons/Icon-192.png",
      badge: "/icons/Icon-192.png",
    });

    const results = await Promise.allSettled(
      subs.map((s) =>
        webpush.sendNotification(
          {
            endpoint: s.endpoint,
            keys: { p256dh: s.p256dh, auth: s.auth },
          },
          payload,
          { TTL: 24 * 3600 },
        ),
      ),
    );
    for (let i = 0; i < results.length; i++) {
      const r = results[i];
      if (r.status === "fulfilled") {
        sentCount++;
      } else {
        const err = r.reason as WebPushError;
        // 410 Gone / 404 Not Found → 完全に失効
        if (err?.statusCode === 410 || err?.statusCode === 404) {
          await purgeSubscription(subs[i].hash).catch(() => {});
        }
        // それ以外 (429, 5xx) は次回 dispatch まで残しておく
      }
    }
    succeededIds.push(...g.records.map((r) => r.id));
  }

  // 6. 配信済みマーキング
  await markDispatched(succeededIds);

  return NextResponse.json({
    ok: true,
    groups: groups.size,
    recipients: recipientCount,
    sent: sentCount,
    dispatched: succeededIds.length,
  });
}
