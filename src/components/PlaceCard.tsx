"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { KumaRecord } from "@/app/api/kuma/route";
import type { GeocodeHit } from "@/app/api/geocode/route";
import type {
  MeshData,
  ScoreBreakdown,
  WeatherSnapshot,
} from "@/lib/types";
import { computeScore, lunarPhase } from "@/lib/score";
import { latLonToMeshCode } from "@/lib/mesh";
import { loadMeshes, findMeshByCode } from "@/lib/mesh-data";
import { haversineKm } from "@/lib/mesh";
import { computeNeighborMeshScore } from "@/lib/neighbor-habitat";
import { weatherCodeEmoji, weatherCodeLabel } from "@/lib/weather";
import {
  findMunicipalityByPrefName,
  findMunicipalityByPrefCode,
  type MunicipalEntry,
} from "@/data/municipalities";
import { findSourceByPrefCode } from "@/data/data-sources";
import MunicipalNoticeBox from "@/components/MunicipalNoticeBox";
import MunicipalLinks from "@/components/MunicipalLinks";
import RiskCharts from "@/components/RiskCharts";
import AskBox from "@/components/AskBox";
import RiskHero from "@/components/RiskHero";

type Props = {
  lat: number;
  lon: number;
  initialName?: string;
  src?: string;
};

type NearbySighting = KumaRecord & { distanceKm: number };

async function fetchElevation(
  lat: number,
  lon: number,
): Promise<{ elevationM: number | null; slopeDeg: number | null }> {
  try {
    const r = await fetch(
      `/api/elevation?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
    );
    if (!r.ok) return { elevationM: null, slopeDeg: null };
    const data = (await r.json()) as {
      elevationM?: number | null;
      slopeDeg?: number | null;
    };
    return {
      elevationM: typeof data.elevationM === "number" ? data.elevationM : null,
      slopeDeg: typeof data.slopeDeg === "number" ? data.slopeDeg : null,
    };
  } catch {
    return { elevationM: null, slopeDeg: null };
  }
}

type ForestApiResult = {
  isForest: boolean;
  forestType?: "needleleaved" | "broadleaved" | "mixed" | "unknown" | "none";
};

async function fetchForest(
  lat: number,
  lon: number,
): Promise<ForestApiResult | null> {
  try {
    const r = await fetch(
      `/api/forest?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
    );
    if (!r.ok) return null;
    return (await r.json()) as ForestApiResult;
  } catch {
    return null;
  }
}

async function fetchWeather(
  lat: number,
  lon: number,
): Promise<WeatherSnapshot | null> {
  try {
    const r = await fetch(
      `/api/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}`,
    );
    if (!r.ok) return null;
    return (await r.json()) as WeatherSnapshot;
  } catch {
    return null;
  }
}

async function reverseGeocode(lat: number, lon: number): Promise<GeocodeHit | null> {
  try {
    const r = await fetch(
      `/api/geocode?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}&v=2`,
    );
    if (!r.ok) return null;
    const data = (await r.json()) as { result?: GeocodeHit };
    return data.result ?? null;
  } catch {
    return null;
  }
}

async function fetchNearbySightings(
  lat: number,
  lon: number,
  km: number,
): Promise<NearbySighting[]> {
  try {
    const r = await fetch(`/api/kuma`);
    if (!r.ok) return [];
    const data = (await r.json()) as { records?: KumaRecord[] };
    const recs = data.records ?? [];
    const nearby = recs
      .map((r) => ({ ...r, distanceKm: haversineKm(lat, lon, r.lat, r.lon) }))
      .filter((r) => r.distanceKm <= km)
      .sort((a, b) => a.distanceKm - b.distanceKm);
    return nearby;
  } catch {
    return [];
  }
}

export default function PlaceCard({ lat, lon, initialName, src }: Props) {
  const router = useRouter();
  const [name, setName] = useState(initialName ?? "");
  const [prefecture, setPrefecture] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [breakdown, setBreakdown] = useState<ScoreBreakdown | null>(null);
  const [mesh, setMesh] = useState<MeshData | null>(null);
  const [weather, setWeather] = useState<WeatherSnapshot | null>(null);
  const [nearby, setNearby] = useState<NearbySighting[]>([]);
  const [, setLoading] = useState(true);
  const [municipal, setMunicipal] = useState<MunicipalEntry | undefined>(undefined);
  const [elevationM, setElevationM] = useState<number | null>(null);
  const [isForest, setIsForest] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);

      const meshCode = latLonToMeshCode(lat, lon);

      const [rev, meshes, w, near, elevation, forest] = await Promise.all([
        reverseGeocode(lat, lon),
        loadMeshes(),
        fetchWeather(lat, lon),
        fetchNearbySightings(lat, lon, 20),
        fetchElevation(lat, lon),
        fetchForest(lat, lon),
      ]);

      if (cancelled) return;

      if (rev) {
        if (!initialName && rev.displayName) {
          setName(rev.displayName.split(", ").slice(0, 3).join(", "));
        }
        setPrefecture(rev.prefecture);
        setCity(rev.city);
        setMunicipal(
          findMunicipalityByPrefCode(rev.prefCode) ??
            findMunicipalityByPrefName(rev.prefecture),
        );
      }

      const entry = meshCode ? findMeshByCode(meshes, meshCode) : undefined;
      const mData: MeshData | null = entry
        ? {
            meshCode: entry.m,
            second: entry.s,
            sixth: entry.x,
            latest: entry.l,
            latestSingle: entry.ls,
          }
        : null;
      setMesh(mData);
      setWeather(w);
      setElevationM(elevation.elevationM);
      setIsForest(forest?.isForest ?? null);

      let nearbyWeighted = 0;
      for (const r of near) {
        if (r.distanceKm <= 10) {
          nearbyWeighted += Math.exp(-r.distanceKm / 5);
        }
      }
      const nearbyCountWithin10 = near.filter((r) => r.distanceKm <= 10).length;
      const neighborMeshScore = computeNeighborMeshScore(
        meshes,
        lat,
        lon,
        meshCode,
      );
      const dataSource = findSourceByPrefCode(rev?.prefCode ?? "");
      const score = computeScore(mData, new Date(), w, {
        nearbyWeightedCount: nearbyWeighted,
        nearbySightings: nearbyCountWithin10,
        nearbyRadiusKm: 10,
        neighborMeshScore,
        prefCode: rev?.prefCode,
        bearStatus: dataSource?.bearStatus ?? null,
        elevationM: elevation.elevationM,
        slopeDeg: elevation.slopeDeg,
        isForest: forest?.isForest ?? null,
        forestType: forest?.forestType ?? null,
      });
      setBreakdown(score);
      setNearby(near);

      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [lat, lon, initialName, name]);

  const now = new Date();
  const hour = now.getHours();
  const { name: lunarName } = lunarPhase(now);

  const advice = buildAdvice(breakdown, hour, municipal);

  const nearby7 = nearby.filter((r) => {
    const d = new Date(r.date);
    const delta = (now.getTime() - d.getTime()) / 86400000;
    return delta <= 7;
  });
  const nearby30 = nearby.filter((r) => {
    const d = new Date(r.date);
    const delta = (now.getTime() - d.getTime()) / 86400000;
    return delta <= 30;
  });
  const nearbyWithin10km = nearby.filter((r) => r.distanceKm <= 10);
  const nearbyWeightedAll = nearbyWithin10km.reduce(
    (acc, r) => acc + Math.exp(-r.distanceKm / 5),
    0,
  );
  const month = now.getMonth() + 1;

  const askContext = {
    lat,
    lon,
    place: name,
    prefecture,
    prefCode: municipal?.prefCode,
    muniName: city,
    score: breakdown?.score,
    level: breakdown?.level,
    hour,
    month,
    weather: weather
      ? {
          tempC: weather.tempC,
          precipMm: weather.precipMm,
          label: weatherCodeLabel(weather.weatherCode),
        }
      : undefined,
    bearSpecies: municipal?.bearSpecies.includes("higuma")
      ? "ヒグマ"
      : municipal
        ? "ツキノワグマ"
        : undefined,
    habitatInside: !!mesh,
  };

  return (
    <div className="mx-auto w-full max-w-xl px-4 pb-24 pt-3">
      {/* 1. Header */}
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:bg-gray-50"
          aria-label="戻る"
        >
          ←
        </button>
        <div className="min-w-0 flex-1">
          <div className="truncate text-base font-bold text-gray-900">
            {src === "gps" && !name ? "現在地" : name || "地点情報"}
          </div>
          {(prefecture || city) && (
            <div className="truncate text-xs text-gray-500">
              {[prefecture, city].filter(Boolean).join(" / ")}
            </div>
          )}
        </div>
      </div>

      {/* 2. Risk hero (場所タイプ × 柔らか判定 × LLM 補足) */}
      {breakdown ? (
        <div className="mb-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
          <RiskHero
            level={breakdown.level}
            score={breakdown.score}
            elevationM={elevationM}
            isForest={isForest}
            prefCode={municipal?.prefCode}
            lat={lat}
            lon={lon}
            muniName={city}
          />
        </div>
      ) : (
        <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 text-sm text-gray-500">
          計算中...
        </div>
      )}

      {/* 3. 件数 headline */}
      <section className="mb-4 rounded-2xl bg-amber-50/70 p-4">
        <div className="text-[10px] font-medium uppercase tracking-wider text-amber-700">
          過去30日・半径 20km 以内の目撃
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-gray-900">
            {nearby30.length.toLocaleString()}
          </span>
          <span className="text-sm text-gray-600">件</span>
          <span className="ml-auto text-[11px] text-gray-500">
            直近7日 {nearby7.length} 件 / 全期間 {nearby.length} 件
          </span>
        </div>
      </section>

      {/* 4. 直近の目撃 */}
      <section className="mb-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-900">
          🕓 直近の目撃
        </h2>
        {nearby.length > 0 ? (
          <ul className="space-y-1.5">
            {nearby.slice(0, 10).map((r) => (
              <li
                key={r.id}
                className="rounded-lg bg-white px-3 py-2.5 text-sm text-gray-700 ring-1 ring-gray-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] text-gray-900">
                      🐻 {r.prefectureName} {r.cityName}
                      {r.headCount > 1 && (
                        <span className="ml-1.5 rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] text-red-700">
                          {r.headCount}頭
                        </span>
                      )}
                    </div>
                    {r.sectionName && (
                      <div className="truncate text-xs text-gray-500">
                        {r.sectionName}
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xs text-gray-700">{r.date}</div>
                    <div className="text-[10px] text-gray-400">
                      {r.distanceKm.toFixed(1)} km
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {nearby.length > 10 && (
              <li className="pt-1 text-center text-[11px] text-gray-400">
                他 {nearby.length - 10} 件（
                <Link
                  className="underline"
                  href={`/?lat=${lat}&lon=${lon}&zoom=10`}
                >
                  地図で見る
                </Link>
                ）
              </li>
            )}
          </ul>
        ) : (
          <p className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
            近隣 20 km 以内に、公開データに記録された最近のクマ出没はありません。
            ただし実際の目撃が未報告の可能性もあるため、常に注意してください。
          </p>
        )}
      </section>

      {/* 5. 自治体からのお知らせ + 要約 */}
      <section className="mb-4">
        <MunicipalNoticeBox
          entry={municipal}
          prefCode={municipal?.prefCode}
          lat={lat}
          lon={lon}
          muniName={city}
        />
      </section>

      {/* 6. いま取るべき対策 */}
      {advice.length > 0 && (
        <section className="mb-4">
          <h2 className="mb-2 text-sm font-semibold text-gray-900">
            💡 いま取るべき対策
          </h2>
          <ul className="space-y-1.5">
            {advice.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 ring-1 ring-gray-100"
              >
                <span className="mt-0.5" aria-hidden>
                  {a.emoji}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-gray-900">
                    {a.title}
                  </div>
                  {a.body && (
                    <div className="text-xs text-gray-600">{a.body}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 7. AI 質問 */}
      <section className="mb-4">
        <AskBox context={askContext} />
      </section>

      {/* 8. 詳細（折り畳み） */}
      <details className="mb-4 rounded-2xl bg-white ring-1 ring-gray-100 group">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
          <span>▾ 詳細データ（時間帯・月別・根拠）</span>
          <span className="text-[10px] text-gray-400 group-open:hidden">
            タップで展開
          </span>
        </summary>
        <div className="space-y-4 px-4 pb-4">
          <dl className="grid grid-cols-2 gap-y-2 text-xs">
            <div>
              <dt className="text-gray-500">気象</dt>
              <dd className="text-gray-800">
                {weather
                  ? `${weatherCodeEmoji(weather.weatherCode)} ${weather.tempC.toFixed(1)}°C`
                  : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">降水 / 天気</dt>
              <dd className="text-gray-800">
                {weather
                  ? `${weather.precipMm} mm / ${weatherCodeLabel(weather.weatherCode)}`
                  : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">時刻・月相</dt>
              <dd className="text-gray-800">
                {hour}時 / {lunarName}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">座標</dt>
              <dd className="font-mono text-gray-800">
                {lat.toFixed(4)}, {lon.toFixed(4)}
              </dd>
            </div>
          </dl>

          <RiskCharts
            mesh={mesh}
            weather={weather}
            baseDate={now}
            nearbyWeightedCount={nearbyWeightedAll}
            nearbySightings={nearbyWithin10km.length}
            nearbyRadiusKm={10}
            prefCode={municipal?.prefCode}
          />

          <MunicipalLinks entry={municipal} />

          {breakdown && (
            <details className="rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-700">
              <summary className="min-h-9 cursor-pointer font-medium text-gray-800">
                スコアの根拠
              </summary>
              <ul className="mt-2 space-y-1">
                {breakdown.explanation.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </details>

      {/* 9. Fixed bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-2">
          <Link
            href={`/`}
            className="flex h-11 flex-1 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            🗺️ 地図で見る
          </Link>
          <Link
            href={`/submit?lat=${lat}&lon=${lon}`}
            className="flex h-11 flex-1 items-center justify-center rounded-full bg-amber-600 text-sm font-medium text-white hover:bg-amber-700"
          >
            📝 この地点を投稿
          </Link>
        </div>
      </div>
    </div>
  );
}

type AdviceItem = { emoji: string; title: string; body?: string };

function buildAdvice(
  breakdown: ScoreBreakdown | null,
  hour: number,
  municipal?: MunicipalEntry,
): AdviceItem[] {
  if (!breakdown) return [];
  const items: AdviceItem[] = [];
  const level = breakdown.level;
  const isHiguma = municipal?.bearSpecies.includes("higuma");

  if (level === "safe") {
    return [
      {
        emoji: "🌿",
        title: "この地域は生息記録がありません",
        body: "基本的な備えだけで安全に楽しめます。",
      },
    ];
  }
  if (level === "high" || level === "elevated") {
    items.push({
      emoji: "🔔",
      title: "熊鈴は必携",
      body: "定期的に鳴らして存在を知らせましょう。",
    });
    items.push({
      emoji: "🧴",
      title: "クマスプレーの携帯を推奨",
      body: "使い方の確認と、安全装置を外してすぐ使える位置に。",
    });
  }
  if (level === "moderate") {
    items.push({
      emoji: "🔔",
      title: "熊鈴やラジオで存在を知らせる",
      body: "静かな時間帯の単独行動は特に注意。",
    });
  }
  if (hour < 8 || hour >= 16) {
    items.push({
      emoji: "🕐",
      title: "クマの活動時間帯です",
      body: "早朝と夕方は見通しの悪い場所の通行を避けましょう。",
    });
  }
  items.push({
    emoji: "🍱",
    title: "食品・ゴミは密閉・持ち帰り",
    body: "匂いはクマを呼びます。残置はしないでください。",
  });
  if (isHiguma) {
    items.push({
      emoji: "⚠️",
      title: "ヒグマ生息域です",
      body: "ヒグマは大型で木にも登れます。単独行動は絶対に避けてください。",
    });
  }
  return items;
}
