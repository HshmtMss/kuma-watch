"use client";

import { useEffect, useRef } from "react";
import type { KumaRecord } from "@/app/api/kuma/route";

type Props = {
  records: KumaRecord[];
  center?: [number, number];
  zoom?: number;
};

export default function KumaMap({
  records,
  center = [36.5, 137.5],
  zoom = 6,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);

  // 地図を一度だけ初期化
  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !el || mapRef.current) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(el, { center, zoom });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | ' +
          '<a href="https://public.sharp9110.com/view/allposts/bear">Sharp9110</a> CC BY 4.0',
        maxZoom: 18,
      }).addTo(map);
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // records が変わるたびにピンだけ更新
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    import("leaflet").then((L) => {
      // 既存ピンを削除
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      const makeIcon = (color: string) =>
        L.divIcon({
          html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" width="20" height="28">
            <ellipse cx="10" cy="26.5" rx="4" ry="1.5" fill="rgba(0,0,0,0.18)"/>
            <path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 17 7 17s7-11.75 7-17c0-3.87-3.13-7-7-7z"
              fill="${color}" stroke="white" stroke-width="1.2"/>
            <circle cx="10" cy="7" r="2.8" fill="white" opacity="0.8"/>
          </svg>`,
          className: "",
          iconSize: [20, 28],
          iconAnchor: [10, 28],
          popupAnchor: [0, -30],
        });

      records.forEach((r) => {
        const m = L.marker([r.lat, r.lon], {
          icon: makeIcon(r.headCount > 1 ? "#ef4444" : "#6b7280"),
        })
          .addTo(map)
          .bindPopup(
            `<div style="min-width:180px;font-size:13px;line-height:1.8">
              <b>🐻 ${r.prefectureName} ${r.cityName}</b>
              ${r.sectionName ? `<div style="color:#555;font-size:12px">${r.sectionName}</div>` : ""}
              <div>📅 ${r.date}</div><div>🔢 ${r.headCount}頭</div>
              ${r.comment ? `<div style="margin-top:4px;font-size:12px;border-top:1px solid #eee;padding-top:4px">${r.comment}</div>` : ""}
            </div>`,
            { maxWidth: 260 },
          );
        markersRef.current.push(m);
      });
    });
  }, [records]);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0 }}
    />
  );
}
