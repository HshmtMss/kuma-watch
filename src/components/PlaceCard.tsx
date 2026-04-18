"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { KumaRecord } from "@/app/api/kuma/route";
import type { GeocodeHit } from "@/app/api/geocode/route";
import type {
  MeshData,
  ScoreBreakdown,
  WeatherSnapshot,
} from "@/lib/types";
import {
  RISK_LEVEL_COLOR,
  RISK_LEVEL_LABEL,
  computeScore,
  lunarPhase,
} from "@/lib/score";
import { latLonToMeshCode } from "@/lib/mesh";
import { loadMeshes, findMeshByCode } from "@/lib/mesh-data";
import { haversineKm } from "@/lib/mesh";
import { weatherCodeEmoji, weatherCodeLabel } from "@/lib/weather";
import {
  findMunicipalityByPrefName,
  findMunicipalityByPrefCode,
  type MunicipalEntry,
} from "@/data/municipalities";
import MunicipalCard from "@/components/MunicipalCard";

type Props = {
  lat: number;
  lon: number;
  initialName?: string;
  src?: string;
};

type NearbySighting = KumaRecord & { distanceKm: number };

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
  const [name, setName] = useState(initialName ?? "");
  const [prefecture, setPrefecture] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [breakdown, setBreakdown] = useState<ScoreBreakdown | null>(null);
  const [mesh, setMesh] = useState<MeshData | null>(null);
  const [weather, setWeather] = useState<WeatherSnapshot | null>(null);
  const [nearby, setNearby] = useState<NearbySighting[]>([]);
  const [loading, setLoading] = useState(true);
  const [municipal, setMunicipal] = useState<MunicipalEntry | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);

      const meshCode = latLonToMeshCode(lat, lon);

      const [rev, meshes, w, near] = await Promise.all([
        reverseGeocode(lat, lon),
        loadMeshes(),
        fetchWeather(lat, lon),
        fetchNearbySightings(lat, lon, 20),
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

      const score = computeScore(
        mData ?? { second: 0, sixth: 0, latest: 0, latestSingle: 0 },
        new Date(),
        w,
      );
      setBreakdown(score);
      setNearby(near);

      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [lat, lon, initialName, name]);

  const levelColor = breakdown ? RISK_LEVEL_COLOR[breakdown.level] : "#9ca3af";
  const levelLabel = breakdown ? RISK_LEVEL_LABEL[breakdown.level] : "読み込み中";
  const now = new Date();
  const hour = now.getHours();
  const { name: lunarName } = lunarPhase(now);

  const advice = useMemo(
    () => buildAdvice(breakdown, hour, municipal),
    [breakdown, hour, municipal],
  );

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

  return (
    <div className="mx-auto w-full max-w-xl px-4 pb-24 pt-3">
      <div className="mb-4 flex items-center gap-2">
        <Link
          href="/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:bg-gray-50"
          aria-label="戻る"
        >
          ←
        </Link>
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

      <div className="mb-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
        <div
          className="flex items-center gap-4 p-5"
          style={{ background: `linear-gradient(135deg, ${levelColor}22 0%, #ffffff 100%)` }}
        >
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white shadow-lg"
            style={{ background: levelColor }}
          >
            <div className="text-center">
              <div className="text-xl font-bold leading-none">
                {breakdown?.score ?? "—"}
              </div>
              <div className="mt-0.5 text-[9px] opacity-90">/ 100</div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div
              className="text-lg font-bold"
              style={{ color: levelColor }}
            >
              {levelLabel}
            </div>
            <div className="mt-0.5 text-[11px] text-gray-500">
              {loading ? "計算中..." : mesh ? "生息域内" : "生息域外（安全）"}
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-y-2 border-t border-gray-100 px-5 py-3 text-xs">
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
      </div>

      <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-900">
            近くの最新情報
          </h2>
          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            半径 20km
          </div>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2 text-center text-xs">
          <SummaryTile label="直近 7 日" value={nearby7.length} color="#dc2626" />
          <SummaryTile label="直近 30 日" value={nearby30.length} color="#f97316" />
          <SummaryTile label="20 km 内 全期間" value={nearby.length} color="#6b7280" />
        </div>
        {nearby.length > 0 ? (
          <ul className="divide-y divide-gray-100">
            {nearby.slice(0, 5).map((r) => (
              <li key={r.id} className="py-2.5 text-xs">
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
                      <div className="text-gray-500">{r.sectionName}</div>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-gray-700">{r.date}</div>
                    <div className="text-[10px] text-gray-400">
                      {r.distanceKm.toFixed(1)} km
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {nearby.length > 5 && (
              <li className="pt-2 text-center text-[11px] text-gray-400">
                他 {nearby.length - 5} 件（
                <Link
                  className="underline"
                  href={`/map?lat=${lat}&lon=${lon}&zoom=10`}
                >
                  地図で見る
                </Link>
                ）
              </li>
            )}
          </ul>
        ) : (
          <p className="rounded-md bg-gray-50 p-3 text-xs text-gray-600">
            近隣 20 km 以内に、公開データに記録された最近のクマ出没はありません。
            ただし実際の目撃が未報告の可能性もあるため、常に注意してください。
          </p>
        )}
      </section>

      <section className="mb-4">
        <MunicipalCard entry={municipal} />
      </section>

      {advice.length > 0 && (
        <section className="mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
          <h2 className="mb-2 text-sm font-semibold text-gray-900">
            💡 いま取るべき対策
          </h2>
          <ul className="space-y-2 text-sm text-gray-800">
            {advice.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden>
                  {a.emoji}
                </span>
                <div>
                  <div className="font-medium">{a.title}</div>
                  {a.body && (
                    <div className="text-xs text-gray-600">{a.body}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-2">
          <Link
            href={`/map`}
            className="flex h-10 flex-1 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            🗺️ 地図で見る
          </Link>
          <Link
            href={`/submit?lat=${lat}&lon=${lon}`}
            className="flex h-10 flex-1 items-center justify-center rounded-full bg-amber-600 text-xs font-medium text-white hover:bg-amber-700"
          >
            📝 この地点を投稿
          </Link>
        </div>
      </div>
    </div>
  );
}

function SummaryTile({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-lg bg-gray-50 px-2 py-2">
      <div className="text-lg font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-[10px] text-gray-500">{label}</div>
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
