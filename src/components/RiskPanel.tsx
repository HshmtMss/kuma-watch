"use client";

import { useCallback, useState } from "react";
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
import { latLonToMeshCode, meshCodeToCenter } from "@/lib/mesh";
import { weatherCodeEmoji, weatherCodeLabel } from "@/lib/weather";

type MeshEntry = {
  m: string;
  s: number;
  x: number;
  l: number;
  ls: number;
  lat: number;
  lon: number;
};

type MeshJsonPayload = { meshes: MeshEntry[] };

type State =
  | { kind: "idle" }
  | { kind: "loading"; stage: string }
  | { kind: "error"; message: string }
  | {
      kind: "ready";
      lat: number;
      lon: number;
      meshCode: string;
      mesh: MeshData | null;
      weather: WeatherSnapshot | null;
      breakdown: ScoreBreakdown;
    };

let meshCache: Promise<MeshEntry[]> | null = null;
function loadMeshes(): Promise<MeshEntry[]> {
  if (!meshCache) {
    meshCache = fetch("/data/mesh.json", { cache: "force-cache" })
      .then((r) => r.json() as Promise<MeshJsonPayload>)
      .then((d) => d.meshes);
  }
  return meshCache;
}

async function fetchWeather(
  lat: number,
  lon: number,
): Promise<WeatherSnapshot | null> {
  try {
    const res = await fetch(
      `/api/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}`,
    );
    if (!res.ok) return null;
    return (await res.json()) as WeatherSnapshot;
  } catch {
    return null;
  }
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("ブラウザが位置情報に対応していません"));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 60000,
    });
  });
}

export default function RiskPanel() {
  const [state, setState] = useState<State>({ kind: "idle" });

  const evaluate = useCallback(async (lat: number, lon: number) => {
    try {
      setState({ kind: "loading", stage: "メッシュを特定中" });
      const meshCode = latLonToMeshCode(lat, lon);
      if (!meshCode) {
        setState({
          kind: "error",
          message: "この位置はサービス対象範囲外です（日本域外）",
        });
        return;
      }

      setState({ kind: "loading", stage: "メッシュデータを取得中" });
      const meshes = await loadMeshes();
      const entry = meshes.find((m) => m.m === meshCode);
      const mesh: MeshData | null = entry
        ? {
            meshCode: entry.m,
            second: entry.s,
            sixth: entry.x,
            latest: entry.l,
            latestSingle: entry.ls,
          }
        : null;

      setState({ kind: "loading", stage: "気象データを取得中" });
      const weather = await fetchWeather(lat, lon);

      const now = new Date();
      const breakdown = computeScore(
        mesh ?? { second: 0, sixth: 0, latest: 0, latestSingle: 0 },
        now,
        weather,
      );

      setState({
        kind: "ready",
        lat,
        lon,
        meshCode,
        mesh,
        weather,
        breakdown,
      });
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "評価に失敗しました",
      });
    }
  }, []);

  const onUseGps = useCallback(async () => {
    setState({ kind: "loading", stage: "位置情報を取得中" });
    try {
      const pos = await getPosition();
      await evaluate(pos.coords.latitude, pos.coords.longitude);
    } catch (err) {
      const msg =
        err instanceof GeolocationPositionError
          ? err.code === err.PERMISSION_DENIED
            ? "位置情報の利用が許可されていません"
            : "位置情報を取得できませんでした"
          : err instanceof Error
            ? err.message
            : "位置情報を取得できませんでした";
      setState({ kind: "error", message: msg });
    }
  }, [evaluate]);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/8 bg-white/95 shadow backdrop-blur">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5">
        <div className="text-sm font-semibold text-gray-800">現在地の危険度</div>
        <button
          onClick={onUseGps}
          disabled={state.kind === "loading"}
          className="rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white hover:bg-amber-700 disabled:opacity-50"
        >
          📍 現在地を取得
        </button>
      </div>

      <div className="p-4 text-sm">
        {state.kind === "idle" && (
          <p className="text-gray-500">
            「現在地を取得」ボタンを押すと、現在地の 5km メッシュを特定し、
            過去実績・季節・気象・時間帯を踏まえた危険度スコアを計算します。
          </p>
        )}

        {state.kind === "loading" && (
          <div className="flex items-center gap-2 text-gray-600">
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-amber-600" />
            {state.stage}...
          </div>
        )}

        {state.kind === "error" && (
          <p className="text-red-600">⚠️ {state.message}</p>
        )}

        {state.kind === "ready" && (
          <RiskReadout state={state} />
        )}
      </div>
    </div>
  );
}

function RiskReadout({ state }: { state: Extract<State, { kind: "ready" }> }) {
  const { breakdown, weather, lat, lon, meshCode, mesh } = state;
  const now = new Date();
  const { name: lunarName } = lunarPhase(now);
  const hour = now.getHours();
  const levelColor = RISK_LEVEL_COLOR[breakdown.level];
  const levelLabel = RISK_LEVEL_LABEL[breakdown.level];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span
          className="rounded-full px-3 py-1 text-sm font-bold text-white"
          style={{ background: levelColor }}
        >
          {levelLabel}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-gray-900">
            {breakdown.score}
          </span>
          <span className="text-xs text-gray-500">/ 100</span>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
        <div>
          <dt className="text-gray-500">メッシュ</dt>
          <dd className="font-mono text-gray-800">{meshCode}</dd>
        </div>
        <div>
          <dt className="text-gray-500">現在地</dt>
          <dd className="text-gray-800">
            {lat.toFixed(4)}, {lon.toFixed(4)}
          </dd>
        </div>
        <div>
          <dt className="text-gray-500">気象</dt>
          <dd className="text-gray-800">
            {weather
              ? `${weatherCodeEmoji(weather.weatherCode)} ${weather.tempC.toFixed(1)}°C / 降水 ${weather.precipMm}mm (${weatherCodeLabel(weather.weatherCode)})`
              : "取得できませんでした"}
          </dd>
        </div>
        <div>
          <dt className="text-gray-500">日時・月相</dt>
          <dd className="text-gray-800">
            {hour}時 / {lunarName}
          </dd>
        </div>
      </dl>

      <div className="border-t border-gray-100 pt-3">
        <div className="mb-1.5 text-xs font-semibold text-gray-700">
          スコア内訳
        </div>
        <ul className="space-y-1 text-xs text-gray-700">
          {breakdown.explanation.map((line, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      {!mesh && (
        <p className="rounded-md bg-amber-50 p-2 text-xs text-amber-800">
          ※ このメッシュには過去の出没実績データがありません。
          表示スコアは季節・気象・時間帯のみから算出されています。
        </p>
      )}

      <p className="text-[10px] leading-relaxed text-gray-500">
        スコアは統計的な参考値です。実際のクマの行動は個体差・環境により大きく変わります。
        必ず自治体の公式情報と合わせてご確認ください。
      </p>
    </div>
  );
}
