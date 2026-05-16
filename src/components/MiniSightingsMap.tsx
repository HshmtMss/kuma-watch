"use client";

import { useEffect, useRef } from "react";

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
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

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
      };
    })();

    return () => {
      disposed = true;
      if (cleanup) cleanup();
    };
  }, [centerLat, centerLon, zoom, records, recencyHighlightDays, showCenterMarker]);

  return (
    <div
      ref={ref}
      style={{ height, width: "100%", borderRadius: "12px", overflow: "hidden" }}
      className="border border-stone-200 bg-stone-100"
      aria-label="周辺のクマ目撃マップ"
    />
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
