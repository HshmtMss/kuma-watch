"use client";

import { useCallback, useEffect, useState } from "react";
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
import { weatherCodeEmoji, weatherCodeLabel } from "@/lib/weather";

export type LocationSource = "gps" | "tap";
export type SelectedLocation = {
  lat: number;
  lon: number;
  source: LocationSource;
};

type State =
  | { kind: "idle" }
  | { kind: "loading"; stage: string }
  | { kind: "error"; message: string }
  | {
      kind: "ready";
      lat: number;
      lon: number;
      source: LocationSource;
      meshCode: string;
      mesh: MeshData | null;
      weather: WeatherSnapshot | null;
      breakdown: ScoreBreakdown;
    };

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

type Props = {
  location: SelectedLocation | null;
  onPickGps: (loc: SelectedLocation) => void;
  onClear: () => void;
};

export default function RiskPanel({ location, onPickGps, onClear }: Props) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [expanded, setExpanded] = useState(false);

  const evaluate = useCallback(async (loc: SelectedLocation) => {
    try {
      setState({ kind: "loading", stage: "メッシュを特定中" });
      const meshCode = latLonToMeshCode(loc.lat, loc.lon);
      if (!meshCode) {
        setState({
          kind: "error",
          message: "この位置はサービス対象範囲外です（日本域外）",
        });
        return;
      }

      setState({ kind: "loading", stage: "データを取得中" });
      const [meshes, weather] = await Promise.all([
        loadMeshes(),
        fetchWeather(loc.lat, loc.lon),
      ]);
      const entry = findMeshByCode(meshes, meshCode);
      const mesh: MeshData | null = entry
        ? {
            meshCode: entry.m,
            second: entry.s,
            sixth: entry.x,
            latest: entry.l,
            latestSingle: entry.ls,
          }
        : null;

      const breakdown = computeScore(
        mesh ?? { second: 0, sixth: 0, latest: 0, latestSingle: 0 },
        new Date(),
        weather,
      );

      setState({
        kind: "ready",
        lat: loc.lat,
        lon: loc.lon,
        source: loc.source,
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

  useEffect(() => {
    if (!location) {
      setState({ kind: "idle" });
      return;
    }
    void evaluate(location);
  }, [location, evaluate]);

  useEffect(() => {
    if (state.kind === "ready" || state.kind === "error") {
      setExpanded(true);
    }
  }, [state.kind]);

  const onUseGps = useCallback(async () => {
    setState({ kind: "loading", stage: "位置情報を取得中" });
    try {
      const pos = await getPosition();
      onPickGps({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        source: "gps",
      });
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
  }, [onPickGps]);

  const badge =
    state.kind === "ready" ? (
      <span
        className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
        style={{ background: RISK_LEVEL_COLOR[state.breakdown.level] }}
      >
        {RISK_LEVEL_LABEL[state.breakdown.level]} {state.breakdown.score}
      </span>
    ) : null;

  const handleHeaderClick = () => {
    if (state.kind === "idle") {
      void onUseGps();
    } else {
      setExpanded((v) => !v);
    }
  };

  return (
    <>
      {expanded && (
        <button
          aria-label="パネルを閉じる"
          onClick={() => setExpanded(false)}
          className="pointer-events-auto absolute inset-0 z-[1050] bg-black/20"
        />
      )}

      <div
        className={`pointer-events-auto absolute inset-x-0 bottom-0 z-[1100] transition-transform duration-200 ease-out sm:left-3 sm:right-auto sm:top-3 sm:bottom-auto sm:w-[360px]`}
      >
        <div className="mx-auto w-full max-w-[640px] rounded-t-2xl border border-black/8 bg-white shadow-xl sm:rounded-2xl">
          <div className="flex items-center gap-2 px-3 py-2.5">
            <button
              onClick={handleHeaderClick}
              className="flex min-w-0 flex-1 items-center gap-3 text-left"
              aria-expanded={expanded}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-600 text-white">
                📍
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-gray-900">
                  {state.kind === "ready" && state.source === "tap"
                    ? "選択地点の危険度"
                    : "現在地の危険度"}
                </div>
                <div className="truncate text-xs text-gray-500">
                  {state.kind === "idle" &&
                    "タップして GPS で評価／地図タップでも評価できます"}
                  {state.kind === "loading" && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                      {state.stage}...
                    </span>
                  )}
                  {state.kind === "error" && (
                    <span className="text-red-600">⚠️ {state.message}</span>
                  )}
                  {state.kind === "ready" &&
                    (state.mesh
                      ? `スコア ${state.breakdown.score} / 100`
                      : "この地点には出没実績データがありません")}
                </div>
              </div>
              {badge}
            </button>
            {(state.kind === "ready" || state.kind === "error") && (
              <button
                onClick={() => {
                  setExpanded(false);
                  onClear();
                }}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                aria-label="クリア"
              >
                ×
              </button>
            )}
          </div>

          {expanded && state.kind === "ready" && (
            <RiskDetails state={state} onReload={onUseGps} />
          )}
          {expanded && state.kind === "error" && (
            <div className="border-t border-gray-100 px-4 py-3">
              <button
                onClick={onUseGps}
                className="rounded-full bg-amber-600 px-4 py-2 text-xs font-medium text-white hover:bg-amber-700"
              >
                再試行（GPS）
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function RiskDetails({
  state,
  onReload,
}: {
  state: Extract<State, { kind: "ready" }>;
  onReload: () => void;
}) {
  const { breakdown, weather, lat, lon, meshCode, mesh, source } = state;
  const now = new Date();
  const { name: lunarName } = lunarPhase(now);
  const hour = now.getHours();

  return (
    <div className="max-h-[60vh] space-y-3 overflow-y-auto border-t border-gray-100 px-4 py-3 text-sm sm:max-h-[70vh]">
      <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
        <div>
          <dt className="text-gray-500">メッシュ</dt>
          <dd className="font-mono text-gray-800">{meshCode}</dd>
        </div>
        <div>
          <dt className="text-gray-500">座標 ({source === "gps" ? "GPS" : "タップ"})</dt>
          <dd className="text-gray-800">
            {lat.toFixed(4)}, {lon.toFixed(4)}
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="text-gray-500">気象</dt>
          <dd className="text-gray-800">
            {weather
              ? `${weatherCodeEmoji(weather.weatherCode)} ${weather.tempC.toFixed(1)}°C / 降水 ${weather.precipMm}mm（${weatherCodeLabel(weather.weatherCode)}）`
              : "取得できませんでした"}
          </dd>
        </div>
        <div>
          <dt className="text-gray-500">時刻</dt>
          <dd className="text-gray-800">{hour}時</dd>
        </div>
        <div>
          <dt className="text-gray-500">月相</dt>
          <dd className="text-gray-800">{lunarName}</dd>
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
          表示スコアは季節・気象・時間帯から算出された参考値です。
        </p>
      )}

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={onReload}
          className="rounded-full bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-700"
        >
          📍 現在地で再計算
        </button>
      </div>

      <p className="text-[10px] leading-relaxed text-gray-500">
        スコアは統計的な参考値です。実際のクマの行動は個体差・環境により大きく変わります。
        必ず自治体の公式情報と合わせてご確認ください。
      </p>
    </div>
  );
}
