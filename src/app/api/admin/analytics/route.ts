import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import {
  activityRisk,
  attractantSeason,
  placeRisk,
} from "@/lib/contact-risk";
import {
  backtestOctober,
  buildYearProfiles,
  forecastMonth,
} from "@/lib/bear-regime";
import {
  monthlyCounts,
  seasonality,
  prefectureCounts,
  hotspots,
  hourHistogram,
  dowHistogram,
  severity,
  momentum,
  yearlyCentroid,
  multiBearShare,
  yearlySummary,
  type AnalyticsRecord,
} from "@/lib/sighting-analytics";

/**
 * 管理画面「分析」タブ用の集計 API。ADMIN_SECRET (合言葉) を Bearer で認証。
 * getCachedSightings（全出没・クリーン済）から、時系列/地域/時間帯/重大事案を集計。
 * 公開アプリでは出さない内部向けの専門分析。
 *
 * モジュール: A時系列 / E勢い / F重心移動 / G親子連れ / H年次 / C急増 / B時間帯 / D重大事案。
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorized(req: Request): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  return (req.headers.get("authorization") ?? "") === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  // 参照日は JST の当日。
  const today = new Date().toLocaleDateString("sv-SE", {
    timeZone: "Asia/Tokyo",
  });
  const url = new URL(req.url);
  const pref = (url.searchParams.get("pref") ?? "").trim();

  try {
    const all = (await getCachedSightings()) as AnalyticsRecord[];
    // 都道府県フィルタ（時系列・時間帯・重大事案に効く。地域傾向は全国固定）。
    const scoped = pref ? all.filter((r) => r.prefectureName === pref) : all;

    return NextResponse.json(
      {
        ok: true,
        today,
        pref: pref || null,
        total: all.length,
        // A: 時系列
        monthly: monthlyCounts(scoped, today, 36),
        seasonality: seasonality(scoped, today, 5),
        // E/F/G/H: 勢い・重心移動・親子連れ・年次サマリー
        momentum: momentum(scoped, today),
        centroid: yearlyCentroid(scoped, today, 12),
        multiBear: multiBearShare(scoped, today, 24),
        yearly: yearlySummary(scoped, today, 12),
        // C: 地域（全国固定。フィルタと無関係に全国のランキング/急増を出す）
        prefectures: prefectureCounts(all, today).slice(0, 20),
        hotspots: hotspots(all, today, { limit: 40 }),
        // B: 時間帯・曜日
        hours: hourHistogram(scoped),
        dow: dowHistogram(scoped, today),
        // D: 重大事案
        severity: severity(scoped, today, 24, 30),
        // J: 接触回避（どこで・何をしているときに危ないか）
        contact: {
          place: placeRisk(scoped),
          attractants: attractantSeason(scoped),
          activity: activityRisk(scoped),
        },
        // I: 年の型と予測（出没予測の中核）
        regime: (() => {
          const profiles = buildYearProfiles(scoped, today);
          const recent = profiles.filter((p) => p.year >= 2015);
          const curYear = Number(today.slice(0, 4));
          const curMonth = Number(today.slice(5, 7));
          return {
            years: recent.map((p) => ({
              year: p.year,
              total: p.total,
              ratio: p.ratio,
              type: p.type,
              complete: p.complete,
            })),
            backtest: backtestOctober(profiles),
            forecastOct: forecastMonth(profiles, curYear, 10, Math.max(1, curMonth - 1)),
          };
        })(),
        prefOptions: [...new Set(all.map((r) => r.prefectureName).filter(Boolean))].sort(),
      },
      {
        headers: {
          "Cache-Control":
            "private, max-age=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (e) {
    console.error("[admin/analytics] failed", e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
