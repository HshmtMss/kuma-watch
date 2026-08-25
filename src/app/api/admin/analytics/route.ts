import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { concentration, recurrence } from "@/lib/recurrence";
import { regionProfile } from "@/lib/region-profile";
import {
  forestBands,
  forestByYear,
  hasLanduseData,
  stableSources,
} from "@/lib/forest-context";
import {
  activityRisk,
  attractantSeason,
  placeRisk,
  severityBreakdown,
  injuryByHour,
  cubShareByMonth,
  injurySources,
} from "@/lib/contact-risk";
import { siteHotspots } from "@/lib/site-hotspots";
import { withNormalizedMuni } from "@/lib/analytics-muni";
import { BUNA_SOURCE_URL, bunaSummary } from "@/data/buna-index";
import { forecastAccuracy, loadForecastLog } from "@/lib/forecast-log";
import {
  backtestOctober,
  mastOutlook,
  buildYearProfiles,
  forecastMonth,
} from "@/lib/bear-regime";
import {
  monthlyCounts,
  seasonalityComparison,
  prefectureCounts,
  hotspots,
  hourHistogram,
  dowHistogram,
  severity,
  momentum,
  yearlyCentroid,
  multiBearShare,
  yearlySummary,
  surgeBoard,
  municipalityBoard,
  municipalityProfile,
  seasonHourHeatmap,
  timedProvenance,
  weeklyTrail,
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

// 暦月(1-12)ごとに、約22kmメッシュで出没件数を集約する。地図の時空間
// アニメーション用。全年をその月に畳み込む（季節の年間リズムを見せる）。
export type SeasonCell = { lat: number; lon: number; count: number };
export type SeasonFrame = { month: number; total: number; cells: SeasonCell[] };
function spatialSeasonal(records: AnalyticsRecord[]): SeasonFrame[] {
  const CELL = 0.2; // 緯度で約 22km
  const months: Map<string, SeasonCell>[] = Array.from(
    { length: 12 },
    () => new Map<string, SeasonCell>(),
  );
  const totals = new Array<number>(12).fill(0);
  for (const r of records) {
    if (typeof r.lat !== "number" || typeof r.lon !== "number" || !r.date)
      continue;
    const m = Number(r.date.slice(5, 7)) - 1;
    if (m < 0 || m > 11) continue;
    const gy = Math.round(r.lat / CELL);
    const gx = Math.round(r.lon / CELL);
    const key = `${gy}|${gx}`;
    const cur = months[m].get(key);
    if (cur) cur.count++;
    else months[m].set(key, { lat: gy * CELL, lon: gx * CELL, count: 1 });
    totals[m]++;
  }
  return months.map((mp, i) => ({
    month: i + 1,
    total: totals[i],
    cells: [...mp.values()].map((c) => ({
      lat: Number(c.lat.toFixed(3)),
      lon: Number(c.lon.toFixed(3)),
      count: c.count,
    })),
  }));
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
  // 市町村は県が選ばれているときだけ有効。
  const muni = pref ? (url.searchParams.get("muni") ?? "").trim() : "";

  try {
    // 市町村名はソースごとに粒度も表記もばらばら (青森は「むつ市大畑町地区」の
    // ような地区付きが 1,040 種)。集計の入口で市町村マスターの表記へ寄せないと、
    // 県内シェア・順位・県平均比がすべて壊れる。
    const all = withNormalizedMuni(
      (await getCachedSightings()) as AnalyticsRecord[],
    );
    // 県フィルタ（市町村ベンチマークや選択肢は県の全記録で計算する）。
    const prefScoped = pref
      ? all.filter((r) => r.prefectureName === pref)
      : all;
    // 時系列・時間帯・重大事案などのスコープ。市町村選択時はそこまで絞る。
    const scoped = muni
      ? prefScoped.filter((r) => (r.cityName ?? "").trim() === muni)
      : prefScoped;

    return NextResponse.json(
      {
        ok: true,
        today,
        pref: pref || null,
        total: all.length,
        // 県が選ばれているときの市町村セレクタ用（あいうえお順）。
        muniOptions: pref
          ? [
              ...new Set(
                prefScoped
                  .map((r) => (r.cityName ?? "").trim())
                  .filter(Boolean),
              ),
            ].sort((a, b) => a.localeCompare(b, "ja"))
          : [],
        // 一市町村カルテのベンチマーク（県内順位・県平均比・直近の動き）。
        muniProfile: muni
          ? municipalityProfile(prefScoped, today, pref, muni)
          : null,
        // A: 時系列
        monthly: monthlyCounts(scoped, today, 36),
        // 季節性の年比較。ソースが揃っている年だけで比べ、揃わない地域では
        // 比較そのものを出さない (全レコードの平均だと、ソース追加のせいで
        // どの地域も永久に「今年は激増」と表示される)。
        seasonality: seasonalityComparison(scoped, today, 2),
        // 時空間: 暦月ごとの出没密度（約22kmメッシュ）。地図アニメーションで
        // 「季節で出没が人里へ広がる」様子を見せる。
        spatialSeasonal: spatialSeasonal(scoped),
        // 早期警戒: 「今どこが急増しているか」を信号色で。直近30日 vs その前30日を
        // 県別に比べる。同一ソース内・短期の比較なので、ソース増加や当年ラグの影響を
        // 受けにくく honest（年次の平年比は継続ソースが乏しく誤報になるため不採用）。
        surge: surgeBoard(all, today),
        // 週ごとの実数。直近1週は公表途中で必ず低く出るので、急増ボードの
        // 判断材料として並べて見せる (補正はしない・理由は weeklyTrail 参照)。
        weeklyTrail: weeklyTrail(scoped, today, 4),
        // 自治体カルテ: 県を選んだときだけ、県内の市町村ベンチマーク（シェア＋動き）。
        // 一覧は県の全記録で計算（市町村選択で scoped が絞られても県内比較は保つ）。
        muni: pref ? municipalityBoard(prefScoped, today, pref) : null,
        // 地点別の出没台帳: 市町村の「中」のどこから手を付けるか。
        // C(急増地域)は市町村単位なので市町村を選ぶと1行に潰れる。こちらは
        // 約1kmメッシュ (K の再発性と同じ粒度) で、直近3年のくり返しを数える。
        siteHotspots: siteHotspots(scoped, today, { limit: 20 }),
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
        // 時刻のある記録がどこの県・どの情報源のものか。時間帯のグラフは
        // 「全国」と言いながら実質1県ということが起きるので必ず添える。
        hoursProvenance: timedProvenance(scoped),
        dow: dowHistogram(scoped, today),
        // 時間帯 × 季節: 「何時に出るか」が季節でどう動くか
        hourSeason: seasonHourHeatmap(scoped),
        // D: 重大事案
        severity: severity(scoped, today, 24, 30),
        // M: 森林率との関係（境界域に集中するか / 年の型で人里寄りになるか）
        forest: (() => {
          if (!hasLanduseData()) return null;
          const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
          const stable = stableSources(all, years);
          return {
            bands: forestBands(scoped),
            // 年次比較は観測条件を固定しないと、ソース追加の影響を実態と
            // 取り違える (全ソースだと単調に下がって見える)
            byYear: forestByYear(all, stable).filter((y) => y.year >= 2019),
            stableSources: stable,
          };
        })(),
        // L: 地域カルテ（他地域と比べず、その地域の姿だけを出す）
        profile: regionProfile(
          scoped.filter((r) => (r.date ?? "") >= "2023-01-01"),
          pref || "全国",
        ),
        // K: 再発性（一度出た場所にどれだけ近づかないべきか）
        recurrence: {
          windows: [7, 14, 30].map((w) =>
            recurrence(scoped, w, { since: "2023-01-01" }),
          ),
          concentration: concentration(scoped, { since: "2023-01-01" }),
        },
        // J: 接触回避（どこで・何をしているときに危ないか）
        contact: {
          place: placeRisk(scoped),
          attractants: attractantSeason(scoped),
          activity: activityRisk(scoped),
          severity: severityBreakdown(scoped),
          // 被害記録がどのソースに偏っているか。行動別(J-2)を読む前提条件。
          injurySources: injurySources(scoped).slice(0, 8),
          // iwate は人身被害専用のデータセットなので、これを除いた場合の
          // 行動別も併記して、順位がソース構成に依存しないか確かめられるようにする。
          activityExIwate: activityRisk(
            scoped.filter((r) => r.source !== "iwate"),
          ),
          // 時間帯 × 被害。B(出没の時間帯)は全通報の分布だが、こちらは
          // 「その時間の通報のうち人身被害がどれだけ多いか」を見る。
          // 4時間ずつの帯に束ねる(時刻ごとだと被害の母数が足りない)。
          hourInjury: (() => {
            const h = injuryByHour(scoped);
            const BANDS: [number, number, string][] = [
              [0, 3, "0-3時"],
              [4, 7, "4-7時"],
              [8, 11, "8-11時"],
              [12, 15, "12-15時"],
              [16, 19, "16-19時"],
              [20, 23, "20-23時"],
            ];
            return {
              allSample: h.allSample,
              injurySample: h.injurySample,
              bands: BANDS.map(([s2, e2, label]) => {
                const sl = h.hours.slice(s2, e2 + 1);
                const a = sl.reduce((x, y) => x + y.allShare, 0);
                const i = sl.reduce((x, y) => x + y.injuryShare, 0);
                return {
                  label,
                  lift: a > 0 ? Number((i / a).toFixed(2)) : 0,
                  allShare: Number((a * 100).toFixed(1)),
                  injuries: Math.round(i * h.injurySample),
                };
              }),
            };
          })(),
          // 暦月で集約した複数頭(親子連れ)の割合。G は直近24か月の時系列で、
          // 「毎年10月に上がる」という季節性はそちらでは読み取りにくい。
          cubMonthly: cubShareByMonth(scoped).map((c) => ({
            month: c.month,
            total: c.total,
            multi: c.multi,
            share: Number((c.share * 100).toFixed(1)),
          })),
        },
        // I: 年の型と予測（出没予測の中核）
        regime: (() => {
          // 年の「型」は観測条件を固定したソースだけで判定する。全ソースで
          // 計算すると、データが少なかった年の比が沈んで型を取り違える
          // (2020年は大凶作なのに全ソースだと 0.98 = 夏型に見える)。
          const typeYears = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
          const stable = stableSources(all, typeYears);
          const typeBase = stable.length
            ? scoped.filter((r) => stable.includes(r.source ?? ""))
            : scoped;
          const typeProfiles = buildYearProfiles(typeBase, today);
          const typeByYear = new Map(
            typeProfiles.map((p) => [p.year, { ratio: p.ratio, type: p.type }]),
          );
          // 件数は全ソース、型は固定ソース、と役割を分ける
          const profiles = buildYearProfiles(scoped, today).map((p) => ({
            ...p,
            ratio: typeByYear.get(p.year)?.ratio ?? null,
            type: typeByYear.get(p.year)?.type ?? "unknown",
          }));
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
            typeSources: stable,
            // ブナの開花指数による事前予測(7月公表なので秋のピークに間に合う)
            mast: mastOutlook(
              Number(today.slice(0, 4)),
              bunaSummary(Number(today.slice(0, 4))),
              BUNA_SOURCE_URL,
            ),
            // 予測の記録と答え合わせ（外れも残す）
            forecastLog: (() => {
              const log = loadForecastLog();
              return { records: log, accuracy: forecastAccuracy(log) };
            })(),
            mastHistory: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]
              .map((y) => ({ year: y, ...(bunaSummary(y) ?? {}) }))
              .filter((m) => "avgFlower" in m),
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
