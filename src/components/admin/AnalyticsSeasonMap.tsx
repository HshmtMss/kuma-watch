"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import type { Map as LeafletMap, LayerGroup } from "leaflet";

export type SeasonCell = { lat: number; lon: number; count: number };
export type SeasonFrame = { month: number; total: number; cells: SeasonCell[] };

// 淡色ベースマップ（CartoDB Positron）。灰白なので出没の赤みが際立つ。
const TILE_URL =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
const TILE_ATTRIB =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

// 密度に応じた色（少 amber → 多 red）。t は 0..1。
function colorFor(t: number): string {
  if (t < 0.12) return "#fcd34d"; // amber-300
  if (t < 0.3) return "#f59e0b"; // amber-500
  if (t < 0.55) return "#ea580c"; // orange-600
  return "#dc2626"; // red-600
}

/**
 * 時空間アニメーション地図。暦月(1-12)ごとの出没密度メッシュを地図に描き、
 * 下部の「季節タイムライン」（月別総数の棒）で年間リズムを見せる。棒クリックで
 * その月へジャンプ、再生で 1→12 月を自動送り。Leaflet は動的 import。
 */
export default function AnalyticsSeasonMap({
  frames,
}: {
  frames: SeasonFrame[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rendererRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  // 既定は年間ピーク月。
  const peakIdx = frames.reduce(
    (best, f, i) => (f.total > (frames[best]?.total ?? -1) ? i : best),
    0,
  );
  const [idx, setIdx] = useState(peakIdx);
  const [playing, setPlaying] = useState(false);

  const maxCount = Math.max(
    1,
    ...frames.flatMap((f) => f.cells.map((c) => c.count)),
  );
  const maxTotal = Math.max(1, ...frames.map((f) => f.total));
  const annual = frames.reduce((s, f) => s + f.total, 0) || 1;

  const drawFrame = useCallback(
    (i: number) => {
      const L = LRef.current;
      const layer = layerRef.current;
      if (!L || !layer) return;
      layer.clearLayers();
      const frame = frames[i];
      if (!frame) return;
      for (const c of frame.cells) {
        const t = Math.sqrt(c.count / maxCount); // 低密度も見えるように
        L.circle([c.lat, c.lon], {
          radius: 12000,
          stroke: false,
          fillColor: colorFor(t),
          fillOpacity: 0.28 + 0.52 * t,
          interactive: false,
          renderer: rendererRef.current, // canvas 描画で滑らかに
        }).addTo(layer);
      }
    },
    [frames, maxCount],
  );

  // 地図初期化（frames が変わったら再フィット）。
  useEffect(() => {
    let disposed = false;
    (async () => {
      if (!ref.current) return;
      const L = (await import("leaflet")).default;
      if (disposed || !ref.current) return;
      LRef.current = L;
      const map = L.map(ref.current, {
        zoomControl: false, // 既定は左上=ラベルと被るので下で右上に付け直す
        scrollWheelZoom: false,
        attributionControl: true,
      });
      L.control.zoom({ position: "topright" }).addTo(map);
      mapRef.current = map;
      rendererRef.current = L.canvas({ padding: 0.5 });
      L.tileLayer(TILE_URL, {
        attribution: TILE_ATTRIB,
        subdomains: "abcd",
        maxZoom: 18,
      }).addTo(map);
      layerRef.current = L.layerGroup().addTo(map);
      const allCells = frames.flatMap((f) => f.cells);
      if (allCells.length) {
        const bounds = L.latLngBounds(
          allCells.map((c) => [c.lat, c.lon] as [number, number]),
        );
        map.fitBounds(bounds, { padding: [24, 24], maxZoom: 8 });
      } else {
        map.setView([38, 138], 5);
      }
      if (!disposed) setReady(true);
    })();
    return () => {
      disposed = true;
      setReady(false);
      mapRef.current?.remove();
      mapRef.current = null;
      layerRef.current = null;
      rendererRef.current = null;
    };
  }, [frames]);

  // 月が変わる/準備完了で再描画。
  useEffect(() => {
    if (ready) drawFrame(idx);
  }, [ready, idx, drawFrame]);

  // 再生: 950ms ごとに次の月へ（ループ）。
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % 12), 950);
    return () => clearInterval(id);
  }, [playing]);

  const frame = frames[idx];
  const monthTotal = frame?.total ?? 0;
  const share = Math.round((monthTotal / annual) * 100);
  const isPeak = idx === peakIdx;

  return (
    <div className="not-prose">
      <div className="relative">
        <div
          ref={ref}
          style={{ height: "400px" }}
          className="w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-50"
        />
        {/* 現在の月・件数・年間シェアを地図左上に大きく重ねる。 */}
        <div className="pointer-events-none absolute left-3 top-3 z-[500] rounded-xl border border-stone-200/70 bg-white/90 px-3.5 py-2 shadow-md backdrop-blur">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold leading-none text-stone-900 tabular-nums">
              {idx + 1}
            </span>
            <span className="text-base font-bold text-stone-500">月</span>
            {isPeak && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                年間ピーク
              </span>
            )}
          </div>
          <div className="mt-1 text-[11px] font-medium text-stone-500">
            出没{" "}
            <span className="font-bold tabular-nums text-amber-700">
              {monthTotal.toLocaleString()}
            </span>{" "}
            件
            <span className="ml-1.5 text-stone-400">
              （年間の{share}%）
            </span>
          </div>
        </div>
      </div>

      {/* 季節タイムライン: 月別総数の棒。止めていても年間リズムが見える。
          棒クリックでその月へジャンプ。色=その月の密度、高さ=総数。 */}
      <div className="mt-3 flex items-stretch gap-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="flex w-11 shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl bg-amber-600 text-white shadow-sm hover:bg-amber-700"
          aria-label={playing ? "一時停止" : "再生"}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
          <span className="text-[9px] font-medium">
            {playing ? "停止" : "再生"}
          </span>
        </button>
        <div className="flex-1">
          <div className="flex h-16 items-end gap-1">
            {frames.map((f, i) => {
              const h = 10 + 90 * (f.total / maxTotal);
              const active = i === idx;
              const t = Math.sqrt(f.total / maxTotal);
              return (
                <button
                  key={f.month}
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setIdx(i);
                  }}
                  title={`${f.month}月 ${f.total.toLocaleString()}件`}
                  aria-label={`${f.month}月 ${f.total}件`}
                  className="group flex flex-1 items-end"
                  style={{ height: "100%" }}
                >
                  <span
                    className={`block w-full rounded-t transition-all ${
                      active
                        ? "opacity-100 ring-2 ring-stone-800 ring-offset-1"
                        : "opacity-55 group-hover:opacity-80"
                    }`}
                    style={{
                      height: `${h}%`,
                      background: colorFor(t),
                    }}
                  />
                </button>
              );
            })}
          </div>
          <div className="mt-1 flex gap-1">
            {frames.map((f, i) => (
              <div
                key={f.month}
                className={`flex-1 text-center text-[10px] tabular-nums ${
                  i === idx
                    ? "font-bold text-stone-800"
                    : "text-stone-400"
                }`}
              >
                {f.month}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 凡例 */}
      <div className="mt-2.5 flex items-center gap-2 text-[11px] text-stone-500">
        <span>出没 少</span>
        <span className="inline-flex overflow-hidden rounded-full">
          {["#fcd34d", "#f59e0b", "#ea580c", "#dc2626"].map((c) => (
            <span
              key={c}
              className="inline-block h-2.5 w-6"
              style={{ background: c }}
            />
          ))}
        </span>
        <span>多</span>
        <span className="ml-auto text-right text-[10px] text-stone-400">
          全年をその月に畳み込んだ密度（約22kmメッシュ）
        </span>
      </div>
    </div>
  );
}
