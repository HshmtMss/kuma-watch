"use client";

import { useEffect, useRef } from "react";
import type {
  Map as LeafletMap,
  Marker,
  LayerGroup,
  Rectangle,
} from "leaflet";
import type { KumaRecord } from "@/app/api/kuma/route";
import { computeScore, RISK_LEVEL_COLOR } from "@/lib/score";

type MeshEntry = {
  m: string;
  s: number;
  x: number;
  l: number;
  ls: number;
  lat: number;
  lon: number;
};

type MeshJsonPayload = {
  generatedAt: string;
  count: number;
  meshes: MeshEntry[];
};

const MESH_LAT_HALF = 2.5 / 60 / 2;
const MESH_LON_HALF = 3.75 / 60 / 2;
const MIN_HEAT_ZOOM = 6;
const MAX_HEAT_RECTS = 4000;

type Props = {
  records: KumaRecord[];
  center?: [number, number];
  zoom?: number;
  showHeatmap?: boolean;
};

export default function KumaMap({
  records,
  center = [36.5, 137.5],
  zoom = 6,
  showHeatmap = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const meshLayerRef = useRef<LayerGroup | null>(null);
  const meshDataRef = useRef<MeshEntry[] | null>(null);
  const showHeatmapRef = useRef(showHeatmap);

  useEffect(() => {
    showHeatmapRef.current = showHeatmap;
    const map = mapRef.current;
    const layer = meshLayerRef.current;
    if (!map || !layer) return;
    if (showHeatmap) {
      if (!map.hasLayer(layer)) layer.addTo(map);
      renderMeshLayerNow();
    } else if (map.hasLayer(layer)) {
      map.removeLayer(layer);
    }
  }, [showHeatmap]);

  const renderMeshLayerNow = () => {
    const map = mapRef.current;
    const layer = meshLayerRef.current;
    const meshes = meshDataRef.current;
    if (!map || !layer || !meshes) return;
    if (!showHeatmapRef.current) return;

    import("leaflet").then((L) => {
      layer.clearLayers();
      if (map.getZoom() < MIN_HEAT_ZOOM) return;

      const bounds = map.getBounds();
      const padLat = MESH_LAT_HALF;
      const padLon = MESH_LON_HALF;
      const south = bounds.getSouth() - padLat;
      const north = bounds.getNorth() + padLat;
      const west = bounds.getWest() - padLon;
      const east = bounds.getEast() + padLon;

      const now = new Date();
      const visible: MeshEntry[] = [];
      for (const m of meshes) {
        if (m.lat < south || m.lat > north) continue;
        if (m.lon < west || m.lon > east) continue;
        visible.push(m);
        if (visible.length >= MAX_HEAT_RECTS) break;
      }

      for (const m of visible) {
        const { score, level } = computeScore(
          {
            second: m.s,
            sixth: m.x,
            latest: m.l,
            latestSingle: m.ls,
          },
          now,
          null,
        );
        if (level === "safe") continue;

        const color = RISK_LEVEL_COLOR[level];
        const opacity = Math.min(0.55, 0.15 + score / 200);
        const rect: Rectangle = L.rectangle(
          [
            [m.lat - MESH_LAT_HALF, m.lon - MESH_LON_HALF],
            [m.lat + MESH_LAT_HALF, m.lon + MESH_LON_HALF],
          ],
          {
            stroke: false,
            fillColor: color,
            fillOpacity: opacity,
            interactive: false,
            renderer: L.canvas({ padding: 0.1 }),
          },
        );
        rect.addTo(layer);
      }
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !el || mapRef.current) return;

      const IconDefault = L.Icon.Default as unknown as {
        prototype: { _getIconUrl?: unknown };
      };
      delete IconDefault.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(el, { center, zoom, preferCanvas: true });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | ' +
          '<a href="https://public.sharp9110.com/view/allposts/bear">Sharp9110</a> CC BY 4.0',
        maxZoom: 18,
      }).addTo(map);

      const meshLayer = L.layerGroup();
      meshLayerRef.current = meshLayer;
      if (showHeatmapRef.current) meshLayer.addTo(map);

      map.on("moveend zoomend", renderMeshLayerNow);

      fetch("/data/mesh.json", { cache: "force-cache" })
        .then((r) => r.json())
        .then((data: MeshJsonPayload) => {
          if (cancelled) return;
          meshDataRef.current = data.meshes;
          renderMeshLayerNow();
        })
        .catch(() => {
          // mesh data load failed — silently continue without heatmap
        });
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      meshLayerRef.current = null;
      markersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    import("leaflet").then((L) => {
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
        const marker = L.marker([r.lat, r.lon], {
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
        markersRef.current.push(marker);
      });
    });
  }, [records]);

  return <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />;
}
