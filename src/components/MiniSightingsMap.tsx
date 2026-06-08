"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";

export type MiniSighting = {
  lat: number;
  lon: number;
  date: string;
  sectionName?: string;
  comment?: string;
};

type Props = {
  centerLat: number;
  centerLon: number;
  records: MiniSighting[];
  zoom?: number;
  height?: string;
  recencyHighlightDays?: number;
  /** 中央の黄色マーク（代表地点）を表示するか。デフォルト false（市町村ページでは
   *  「代表地点」が利用者の関心と無関係なので非表示にする）。 */
  showCenterMarker?: boolean;
  /** 中心からの半径(km)。指定すると円を描く。観光地ページで「通知/表示はこの範囲」
   *  を視覚化するのに使う（観光地は半径10km基準）。 */
  radiusKm?: number;
};

const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIB =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export default function MiniSightingsMap({
  centerLat,
  centerLon,
  records,
  zoom = 11,
  height = "360px",
  recencyHighlightDays = 90,
  showCenterMarker = false,
  radiusKm,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      if (!ref.current) return;
      const L = (await import("leaflet")).default;
      if (disposed || !ref.current) return;

      const map = L.map(ref.current, {
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([centerLat, centerLon], zoom);
      mapRef.current = map;

      L.tileLayer(TILE_URL, { attribution: TILE_ATTRIB, maxZoom: 18 }).addTo(map);

      // 半径円（観光地の 10km 圏など）。マーカーより先に敷いて下に置く。
      if (typeof radiusKm === "number" && radiusKm > 0) {
        L.circle([centerLat, centerLon], {
          radius: radiusKm * 1000,
          color: "#0d9488",
          weight: 1.5,
          fillColor: "#14b8a6",
          fillOpacity: 0.06,
          interactive: false,
        }).addTo(map);
      }

      if (showCenterMarker) {
        L.circleMarker([centerLat, centerLon], {
          radius: 11,
          color: "#92400e",
          weight: 2,
          fillColor: "#fde68a",
          fillOpacity: 0.7,
        }).addTo(map);
      }

      const now = Date.now();
      const recentMs = recencyHighlightDays * 86_400_000;
      // タッチデバイスで押しやすい大きさ。circleMarker の HitBox は radius と一致するため、
      // 小さすぎると指でタップしてポップアップが開かない。10〜12px なら親指でも届く。
      for (const r of records) {
        const t = Date.parse(r.date);
        const isRecent = Number.isFinite(t) && now - t <= recentMs;
        const marker = L.circleMarker([r.lat, r.lon], {
          radius: isRecent ? 10 : 8,
          color: isRecent ? "#7f1d1d" : "#6b7280",
          weight: isRecent ? 2 : 1.5,
          fillColor: isRecent ? "#dc2626" : "#9ca3af",
          fillOpacity: isRecent ? 0.9 : 0.7,
        });
        const date = r.date || "(日付不明)";
        const where = r.sectionName ? `<div>${escapeHtml(r.sectionName)}</div>` : "";
        const note = r.comment
          ? `<div style="margin-top:2px;color:#374151">${escapeHtml(r.comment).slice(0, 120)}</div>`
          : "";
        marker.bindPopup(
          `<div style="font-size:12px;line-height:1.4">
             <div style="font-weight:700">${escapeHtml(date)}</div>
             ${where}
             ${note}
           </div>`,
        );
        marker.addTo(map);
      }

      cleanup = () => {
        map.remove();
        mapRef.current = null;
      };
    })();

    return () => {
      disposed = true;
      if (cleanup) cleanup();
    };
  }, [centerLat, centerLon, zoom, records, recencyHighlightDays, showCenterMarker, radiusKm]);

  // 全画面切替時: コンテナのサイズが変わるので Leaflet に再計測させる。
  // 全画面中はホイールズームを有効化（じっくり見たいケースなので操作性を上げる）。
  useEffect(() => {
    const m = mapRef.current;
    if (!m) return;
    const id = window.setTimeout(() => {
      m.invalidateSize();
      if (isFull) m.scrollWheelZoom.enable();
      else m.scrollWheelZoom.disable();
    }, 60);
    return () => window.clearTimeout(id);
  }, [isFull]);

  // 全画面中は Esc で閉じる + 背面スクロールをロック。
  useEffect(() => {
    if (!isFull) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFull(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isFull]);

  return (
    <div className={isFull ? "fixed inset-0 z-[2000] bg-white" : "relative"}>
      <div
        ref={ref}
        style={{
          height: isFull ? "100%" : height,
          width: "100%",
          borderRadius: isFull ? 0 : "12px",
          overflow: "hidden",
        }}
        className="border border-stone-200 bg-stone-100"
        aria-label="周辺のクマ目撃マップ"
      />
      <button
        type="button"
        onClick={() => setIsFull((v) => !v)}
        className="absolute right-2 top-2 z-[1000] flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-stone-700 shadow ring-1 ring-stone-200 backdrop-blur hover:bg-white"
        aria-label={isFull ? "全画面を閉じる" : "地図を全画面で表示"}
      >
        {isFull ? (
          <>
            <span aria-hidden>✕</span> 閉じる
          </>
        ) : (
          <>
            <span aria-hidden>⛶</span> 全画面
          </>
        )}
      </button>
    </div>
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
