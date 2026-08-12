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
import { incidentKey } from "@/lib/incident-key";
import { jstToday } from "@/lib/jst-date";
import {
  isNotifiable,
  isQuietHours,
  notifyMapUrl,
} from "@/lib/notify-freshness";
import { lineProductCtaSuffix } from "@/lib/line-product-cta";
import {
  isLineOenCtaEnabled,
  lineOenCtaSuffix,
  shouldUseOenCta,
} from "@/lib/line-oen-cta";

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
  sectionName?: string; // 事案キー(市内の別地点を別事案として残す)に必要
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

  // 夜間(JST 20:00〜翌8:00)はミュート。就寝中に通知しない。ここで早期 return し、
  // 何も送らず・何もマークしない(記録は地図には従来どおり載る)。
  if (isQuietHours()) {
    return NextResponse.json({ ok: true, sent: 0, reason: "quiet hours" });
  }

  const today = jstToday();

  // 1. 「事案キー」で重複送信を弾く (id ではなく incidentKey)。
  //    同じ出没が複数ソース(報道/sharp9110/公式)で別 id になり、別々の
  //    dispatch 回で届いても 1 事案 1 通に。sectionName で市内の別地点は
  //    別事案として残す(過剰統合で実在の出没を消さない)。
  const ikOf = (r: NewRecord) =>
    incidentKey(r.date, r.prefectureName, r.cityName, r.sectionName);
  // バッチ内の同一事案を代表 1 件に畳む(通知可能なものを優先して残す)。
  const byIncident = new Map<string, NewRecord>();
  for (const r of records) {
    const k = ikOf(r);
    const cur = byIncident.get(k);
    if (!cur) {
      byIncident.set(k, r);
    } else if (!isNotifiable(cur, today) && isNotifiable(r, today)) {
      byIncident.set(k, r);
    }
  }
  const uniqueRecords = [...byIncident.values()];
  const undispatched = new Set(
    await filterUndispatched(uniqueRecords.map(ikOf)),
  );
  const unsent = uniqueRecords.filter((r) => undispatched.has(ikOf(r)));
  if (unsent.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, reason: "all duplicate" });
  }

  // 「今の出没」だけ通知する。出没日が今日 かつ 実日付(推定でない)のものだけ。
  // 報道で日付が書かれておらず配信日で埋めた記録(dateEstimated)は、実際は
  // 昨日以前かもしれないので送らない。地図には従来どおり載る。警察通報など
  // dateEstimated を持たないソースは当日なら通知。ソース共通の1ルール。
  const source = (new URL(req.url).searchParams.get("source") ?? "unknown").slice(0, 24);
  const filtered = unsent.filter((r) => isNotifiable(r, today));
  if (filtered.length === 0) {
    // stale(古い/推定日)は markDispatched しない。後で同事案の新鮮な記録が
    // 来たら送れるようにするため(事案キーで管理しているので id マークは不要)。
    return NextResponse.json({
      ok: true,
      sent: 0,
      reason: "no fresh records",
    });
  }

  const base = siteUrl();
  let sentCount = 0;
  let recipientCount = 0;
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
    const cta =
      isLineOenCtaEnabled() && shouldUseOenCta(top.id)
        ? lineOenCtaSuffix(base, g.pref, g.city)
        : lineProductCtaSuffix(base, {
            kind: "muni",
            pref: g.pref,
            city: g.city,
          });
    const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}${cta}`);
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
      const cta =
        isLineOenCtaEnabled() && shouldUseOenCta(top.id)
          ? lineOenCtaSuffix(base, top.prefectureName, top.cityName)
          : lineProductCtaSuffix(base, {
              kind: "spot",
              slug: g.slug,
              name: g.name,
            });
      const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}${cta}`);
      const { sent, error } = await multicast(userIds, [msg]);
      sentCount += sent;
      if (error && !sendError) sendError = error;
    }
  }

  // ── 2c. geo (任意地点 + 半径) ──────────────────────────────────────────
  // B1: 1 ユーザー 1 通。複数の登録地点が同じ配信でヒットしても push は 1 回だけ
  // (地点ごとに送っていた従来はコスト増の主因)。マッチした出没は事案キーで
  // 重複を除き「代表 1 件 + 他 N 件」でまとめる。安全は損なわない(全事案を1通に)。
  const geoSubs = await getAllGeoSubscribers();
  for (const gsub of geoSubs) {
    // このユーザーのいずれかの登録地点にヒットした出没を集約(事案キーで一意化)。
    const hitByIncident = new Map<string, NewRecord>();
    let bestLabel = "登録地点";
    let bestRadius = 0;
    for (const pt of gsub.points) {
      let ptHit = false;
      for (const r of filtered) {
        if (typeof r.lat !== "number" || typeof r.lon !== "number") continue;
        if (haversineKm(pt.lat, pt.lon, r.lat, r.lon) > pt.radiusKm) continue;
        hitByIncident.set(ikOf(r), r);
        ptHit = true;
      }
      // 見出しに使う代表ラベルは、最初にヒットした地点の名前を採用。
      if (ptHit && bestRadius === 0) {
        bestLabel = pt.label || "登録地点";
        bestRadius = pt.radiusKm;
      }
    }
    const matched = [...hitByIncident.values()];
    if (matched.length === 0) continue;
    recipientCount += 1;
    const place = bestLabel;
    const n = matched.length;
    const head =
      n === 1
        ? `${place}周辺で新しいクマ出没`
        : `${place}周辺で新しいクマ出没（${n}件）`;
    const top = matched[0];
    const line = snippet(
      top,
      `${top.date ?? ""} ${place}周辺（半径${bestRadius}km）`.trim(),
    );
    // 登録地点そのものではなく、実際に出た地点(top)にズームして見せる。
    const url = notifyMapUrl(base, top.lat, top.lon, place, "/", top.id);
    const cta =
      isLineOenCtaEnabled() && shouldUseOenCta(top.id)
        ? lineOenCtaSuffix(base, top.prefectureName, top.cityName)
        : lineProductCtaSuffix(base, { kind: "geo", label: place });
    const msg = text(`${head}\n${line}\n\n▼ 地図で見る\n${url}${cta}`);
    const { ok, error } = await pushMessage(gsub.userId, [msg]);
    if (ok) sentCount += 1;
    else if (error && !sendError) sendError = error;
  }

  // 3. 配信済みマーキング。処理した事案(filtered)の incidentKey を記録し、
  //    以後 同一事案が別 id / 別ソースで来ても再送しない。
  const dispatched = [...new Set(filtered.map(ikOf))];
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
