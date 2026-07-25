import { NextResponse } from "next/server";
import {
  filterUndispatched,
  getActiveSpots,
  getAllGeoSubscribers,
  getSubscribersForMuni,
  getSubscribersForSpot,
  isConfigured,
  markDispatched,
  recordLineDispatch,
} from "@/lib/line-storage";
import {
  isLineConfigured,
  multicast,
  pushMessage,
  text,
} from "@/lib/line-client";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { haversineKm } from "@/lib/nearby-sightings";
import { jstToday } from "@/lib/jst-date";
import { isNotifiable, notifyMapUrl } from "@/lib/notify-freshness";

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
  time?: string;
  dateEstimated?: boolean;
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

/**
 * URL のパス片。日本語はそのまま残す。
 *
 * LINE は日本語を含む URL もリンク化するので、encodeURIComponent すると
 * 「/place/%E6%9D%B1%E4%BA%AC%E9%83%BD/…」という長大な文字列がトークに
 * 出るだけで、読み手 (高齢者含む) に不安を与える。パスを壊す文字が
 * 含まれるときだけエンコードする。
 *
 * 現在の市区町村マスター (1,892 件) と観光地 slug には該当文字は無いが、
 * データ追加で混入しても壊れないようにしておく。
 */
function pathSegment(s: string): string {
  return /[\s/?#%&+]/.test(s) ? encodeURIComponent(s) : s;
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
  const unsent = records.filter((r) => newSet.has(r.id));
  if (unsent.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "all duplicate" });
  }

  // 「今の出没」だけ通知する。出没日が今日 かつ 実日付(推定でない)のものだけ。
  // 報道で日付が書かれておらず配信日で埋めた記録(dateEstimated)は、実際は
  // 昨日以前かもしれないので送らない。地図には従来どおり載る。警察通報など
  // dateEstimated を持たないソースは当日なら通知。ソース共通の1ルール。
  const source = (new URL(req.url).searchParams.get("source") ?? "unknown").slice(0, 24);
  const today = jstToday();
  const filtered = unsent.filter((r) => isNotifiable(r, today));
  // 通知しない記録も、以後もう評価しないよう重複防止セットに入れる
  // (古い/推定日は今後も条件を満たさないので、次回以降も送らない)。
  const staleIds = unsent.filter((r) => !isNotifiable(r, today)).map((r) => r.id);
  if (filtered.length === 0) {
    if (staleIds.length > 0) await markDispatched(staleIds);
    return NextResponse.json({
      ok: true,
      sent: 0,
      reason: "no fresh records",
      stale: staleIds.length,
    });
  }

  const base = siteUrl();
  let sentCount = 0;
  let recipientCount = 0;
  const dispatchedIds = new Set<string>();
  // 送信失敗の理由(最初の1件)。recipients>0 なのに sent=0 のとき、原因を
  // 管理画面から特定するために配信ログへ残す。全チャンク同じ理由で落ちるのが
  // 普通なので、最初に掴んだ理由だけ保持する。
  let sendError: string | undefined;

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
    const url = notifyMapUrl(
      base,
      top.lat,
      top.lon,
      `${g.pref}${g.city}`,
      `/place/${pathSegment(g.pref)}/${pathSegment(g.city)}`,
      top.id,
    );
    const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}`);
    const { sent, error } = await multicast(userIds, [msg]);
    sentCount += sent;
    if (error && !sendError) sendError = error;
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
      const url = `${base}/spot/${pathSegment(g.slug)}`;
      const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}`);
      const { sent, error } = await multicast(userIds, [msg]);
      sentCount += sent;
      if (error && !sendError) sendError = error;
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
      // 登録地点そのものではなく、実際に出た地点(top)にズームして見せる。
      const url = notifyMapUrl(base, top.lat, top.lon, place, "/", top.id);
      const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}`);
      const { ok, error } = await pushMessage(gsub.userId, [msg]);
      if (ok) sentCount += 1;
      else if (error && !sendError) sendError = error;
    }
  }

  // 3. 配信済みマーキング (送った分 + 鮮度で外した古い分)
  for (const id of staleIds) dispatchedIds.add(id);
  const dispatched = [...dispatchedIds];
  await markDispatched(dispatched);

  // 4. 配信ログを永続化 (管理画面の稼働確認用)。記録失敗は配信結果に影響させない。
  //    由来(source)は上で ?source= から読んでいる (news-flash / sharp9110 / unknown)。
  // 送信すべき相手が居た(recipients>0)のに1通も送れなかった場合は、その理由を
  // ログに残し、サーバログにも出す。届いていない状態を管理画面から気づけるように。
  const failReason =
    recipientCount > 0 && sentCount === 0 ? (sendError ?? "unknown") : undefined;
  if (failReason) {
    console.error(
      `[line/dispatch] matched ${recipientCount} but sent 0. reason: ${failReason}`,
    );
  }
  try {
    await recordLineDispatch({
      ts: Date.now(),
      source,
      muniGroups: muniGroups.size,
      recipients: recipientCount,
      sent: sentCount,
      dispatched: dispatched.length,
      ...(failReason ? { error: failReason } : {}),
    });
  } catch (e) {
    console.error("[line/dispatch] recordLineDispatch failed", e);
  }

  return NextResponse.json({
    ok: true,
    muniGroups: muniGroups.size,
    recipients: recipientCount,
    sent: sentCount,
    dispatched: dispatched.length,
    // 送信0だったときの失敗理由。ワークフローの実行ログにそのまま出るので、
    // 管理画面を開かなくても原因(権限・上限・トークン)を追える。
    ...(failReason ? { error: failReason } : {}),
  });
}
