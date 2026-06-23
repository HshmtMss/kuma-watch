import { NextResponse } from "next/server";
import webpush, { type WebPushError } from "web-push";
import {
  getActiveSpots,
  getActiveMunis,
  getSubscribersForSpot,
  getSubscribersForMuni,
  getForecastBand,
  setForecastBand,
  isConfigured,
  purgeSubscription,
} from "@/lib/push-storage";
import { getCachedSightings } from "@/lib/sightings-cache";
import { buildSeasonalModel, forecastArea, type ForecastBand } from "@/lib/forecast";
import { shouldForecastAlert, forecastAlertMessage } from "@/lib/forecast-alerts";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { haversineKm } from "@/lib/nearby-sightings";
import { jstToday } from "@/lib/jst-date";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * 予測「閾値アラート」配信。GitHub Actions の cron から Bearer 認証で叩く想定
 * （日次〜週次）。購読者の居る spot/muni の「今後4週間の見通し」を算出し、
 * 前回より上位バンド (elevated 以上) に"上がった"地域だけ Web Push する。
 *
 * - 既存 /api/push/dispatch（新規出没アラート）には一切干渉しない。
 * - 既定では無効（FORECAST_ALERT_ENABLED!=="true" で送信しない）＝フラグ公開方式。
 * - ?dryRun=1 で「何を送るか」だけ返す（送信・状態更新なし）。認証は必要。
 * - 配信は Web Push（deliver）。将来 LINE 等を足す場合もアラート判定はそのまま再利用。
 */

const SPOT_RADIUS_KM = 10;

type Sub = { hash: string; endpoint: string; p256dh: string; auth: string };

function isBearerAuthed(req: Request): boolean {
  const secret = process.env.PUSH_DISPATCH_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

function configureWebPush(): boolean {
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;
  if (!pub || !priv || !subject) return false;
  webpush.setVapidDetails(subject, pub, priv);
  return true;
}

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
    if (r.status === "fulfilled") sent++;
    else {
      const err = r.reason as WebPushError;
      if (err?.statusCode === 410 || err?.statusCode === 404) {
        await purgeSubscription(subs[i].hash).catch(() => {});
      }
    }
  }
  return sent;
}

type Plan = {
  kind: "spot" | "muni";
  key: string;
  name: string;
  url: string;
  /** 配信先の特定に使う識別子。spot は slug、muni は pref/city。 */
  slug?: string;
  pref?: string;
  city?: string;
  band: ForecastBand;
  vsTypicalPct: number | null;
  prevBand: string | null;
};

export async function POST(req: Request) {
  if (!isConfigured()) {
    return NextResponse.json({ error: "push storage not configured" }, { status: 503 });
  }
  if (!isBearerAuthed(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const dryRun = new URL(req.url).searchParams.get("dryRun") === "1";
  const enabled = process.env.FORECAST_ALERT_ENABLED === "true";

  const sightings = await getCachedSightings();
  const today = jstToday();

  // 季節モデルは全国の全期間日付から一度だけ作る。
  const allDates: string[] = [];
  // muni 別に日付をバケット化（active muni の予測算出を高速化）。
  const muniDates = new Map<string, string[]>();
  for (const s of sightings) {
    if (!s.date) continue;
    allDates.push(s.date);
    if (s.prefectureName && s.cityName) {
      const k = `${s.prefectureName}/${s.cityName}`;
      const arr = muniDates.get(k);
      if (arr) arr.push(s.date);
      else muniDates.set(k, [s.date]);
    }
  }
  const model = buildSeasonalModel(allDates);

  const plans: Plan[] = [];

  // ── spot（観光地）──────────────────────────────
  const activeSpots = await getActiveSpots();
  if (activeSpots.length > 0) {
    const activeSet = new Set(activeSpots);
    const landmarks = JAPAN_LANDMARKS.filter((l) => activeSet.has(l.slug));
    for (const l of landmarks) {
      const dates: string[] = [];
      for (const s of sightings) {
        if (!s.date) continue;
        if (typeof s.lat !== "number" || typeof s.lon !== "number") continue;
        if (haversineKm(l.lat, l.lon, s.lat, s.lon) <= SPOT_RADIUS_KM) {
          dates.push(s.date);
        }
      }
      const fc = forecastArea(dates, model, today);
      if (!fc) continue;
      const key = `spot:${l.slug}`;
      const prev = await getForecastBand(key);
      if (shouldForecastAlert(prev as ForecastBand | null, fc)) {
        plans.push({
          kind: "spot",
          key,
          name: l.name,
          url: `/spot/${encodeURIComponent(l.slug)}`,
          slug: l.slug,
          band: fc.band,
          vsTypicalPct: fc.vsTypicalPct,
          prevBand: prev,
        });
      }
      if (!dryRun) await setForecastBand(key, fc.band);
    }
  }

  // ── muni（市町村）──────────────────────────────
  const activeMunis = await getActiveMunis();
  for (const m of activeMunis) {
    const dates = muniDates.get(`${m.pref}/${m.city}`) ?? [];
    const fc = forecastArea(dates, model, today);
    if (!fc) continue;
    const key = `muni:${m.pref}/${m.city}`;
    const prev = await getForecastBand(key);
    if (shouldForecastAlert(prev as ForecastBand | null, fc)) {
      plans.push({
        kind: "muni",
        key,
        name: m.city,
        url: `/place/${encodeURIComponent(m.pref)}/${encodeURIComponent(m.city)}`,
        pref: m.pref,
        city: m.city,
        band: fc.band,
        vsTypicalPct: fc.vsTypicalPct,
        prevBand: prev,
      });
    }
    if (!dryRun) await setForecastBand(key, fc.band);
  }

  // dryRun または無効時は「送る予定」を返すだけ（実送信しない）。
  if (dryRun || !enabled) {
    return NextResponse.json({
      ok: true,
      mode: dryRun ? "dryRun" : "disabled",
      enabled,
      candidates: plans.length,
      plans,
    });
  }

  if (!configureWebPush()) {
    return NextResponse.json({ error: "VAPID keys not configured" }, { status: 503 });
  }

  let sent = 0;
  let recipients = 0;
  for (const p of plans) {
    const subs =
      p.kind === "spot" && p.slug
        ? await getSubscribersForSpot(p.slug)
        : p.pref && p.city
          ? await getSubscribersForMuni(p.pref, p.city)
          : [];
    if (subs.length === 0) continue;
    recipients += subs.length;
    const { title, body } = forecastAlertMessage(p.name, {
      band: p.band,
      vsTypicalPct: p.vsTypicalPct,
    });
    const payload = JSON.stringify({
      title,
      body,
      url: p.url,
      tag: `kuma-forecast-${p.key}`,
      icon: "/icons/Icon-192.png",
      badge: "/icons/Icon-192.png",
    });
    sent += await deliver(subs, payload);
  }

  return NextResponse.json({ ok: true, mode: "live", alerts: plans.length, recipients, sent });
}
