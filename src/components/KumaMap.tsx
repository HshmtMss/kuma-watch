"use client";

import { useEffect, useRef } from "react";
import type {
  Map as LeafletMap,
  LayerGroup,
  Rectangle,
  CircleMarker,
  Popup,
  LeafletMouseEvent,
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
const REDRAW_DEBOUNCE_MS = 180;

function mobileCaps() {
  if (typeof window === "undefined") return { maxRects: 4000, maxPins: 1200 };
  const narrow = window.innerWidth < 768;
  return narrow
    ? { maxRects: 1500, maxPins: 500 }
    : { maxRects: 4000, maxPins: 1500 };
}

type Props = {
  records: KumaRecord[];
  center?: [number, number];
  zoom?: number;
  showHeatmap?: boolean;
  selectedLocation?: { lat: number; lon: number; source: "gps" | "tap" } | null;
  onMapClick?: (lat: number, lon: number) => void;
};

export default function KumaMap({
  records,
  center = [36.5, 137.5],
  zoom = 6,
  showHeatmap = true,
  selectedLocation = null,
  onMapClick,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const meshLayerRef = useRef<LayerGroup | null>(null);
  const pinLayerRef = useRef<LayerGroup | null>(null);
  const selectionLayerRef = useRef<LayerGroup | null>(null);
  const popupRef = useRef<Popup | null>(null);
  const meshDataRef = useRef<MeshEntry[] | null>(null);
  const recordsRef = useRef<KumaRecord[]>(records);
  const showHeatmapRef = useRef(showHeatmap);
  const onMapClickRef = useRef(onMapClick);
  const redrawTimerRef = useRef<number | null>(null);

  useEffect(() => {
    onMapClickRef.current = onMapClick;
  }, [onMapClick]);

  const scheduleRedraw = () => {
    if (redrawTimerRef.current != null) {
      window.clearTimeout(redrawTimerRef.current);
    }
    redrawTimerRef.current = window.setTimeout(() => {
      redrawTimerRef.current = null;
      renderMeshLayer();
      renderPinLayer();
    }, REDRAW_DEBOUNCE_MS);
  };

  const renderMeshLayer = () => {
    const map = mapRef.current;
    const layer = meshLayerRef.current;
    const meshes = meshDataRef.current;
    if (!map || !layer || !meshes) return;
    if (!showHeatmapRef.current) {
      layer.clearLayers();
      return;
    }

    import("leaflet").then((L) => {
      layer.clearLayers();
      if (map.getZoom() < MIN_HEAT_ZOOM) return;

      const { maxRects } = mobileCaps();
      const bounds = map.getBounds();
      const south = bounds.getSouth() - MESH_LAT_HALF;
      const north = bounds.getNorth() + MESH_LAT_HALF;
      const west = bounds.getWest() - MESH_LON_HALF;
      const east = bounds.getEast() + MESH_LON_HALF;

      const now = new Date();
      const canvas = L.canvas({ padding: 0.1 });
      let drawn = 0;
      for (const m of meshes) {
        if (m.lat < south || m.lat > north) continue;
        if (m.lon < west || m.lon > east) continue;
        const { score, level } = computeScore(
          { second: m.s, sixth: m.x, latest: m.l, latestSingle: m.ls },
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
            renderer: canvas,
          },
        );
        rect.addTo(layer);
        drawn++;
        if (drawn >= maxRects) break;
      }
    });
  };

  const renderPinLayer = () => {
    const map = mapRef.current;
    const layer = pinLayerRef.current;
    const recs = recordsRef.current;
    if (!map || !layer) return;

    import("leaflet").then((L) => {
      layer.clearLayers();
      const { maxPins } = mobileCaps();
      const bounds = map.getBounds();
      const south = bounds.getSouth();
      const north = bounds.getNorth();
      const west = bounds.getWest();
      const east = bounds.getEast();

      const canvas = L.canvas({ padding: 0.1 });
      let drawn = 0;
      for (const r of recs) {
        if (r.lat < south || r.lat > north) continue;
        if (r.lon < west || r.lon > east) continue;
        const color = r.headCount > 1 ? "#ef4444" : "#6b7280";
        const marker: CircleMarker = L.circleMarker([r.lat, r.lon], {
          radius: r.headCount > 1 ? 6 : 5,
          color: "#ffffff",
          weight: 1.2,
          fillColor: color,
          fillOpacity: 0.9,
          renderer: canvas,
        });
        marker.on("click", (e) => {
          // stop propagation so the map click handler doesn't also fire
          if ((e as unknown as LeafletMouseEvent).originalEvent) {
            (e as unknown as LeafletMouseEvent).originalEvent.stopPropagation?.();
          }
          showRecordPopup(L, r);
        });
        marker.addTo(layer);
        drawn++;
        if (drawn >= maxPins) break;
      }
    });
  };

  const showRecordPopup = (
    L: typeof import("leaflet"),
    r: KumaRecord,
  ) => {
    const map = mapRef.current;
    if (!map) return;
    if (!popupRef.current) {
      popupRef.current = L.popup({ maxWidth: 280, autoPan: true });
    }
    const html = `<div style="min-width:180px;font-size:13px;line-height:1.7">
      <b>🐻 ${escapeHtml(r.prefectureName)} ${escapeHtml(r.cityName)}</b>
      ${r.sectionName ? `<div style="color:#555;font-size:12px">${escapeHtml(r.sectionName)}</div>` : ""}
      <div>📅 ${escapeHtml(r.date)}</div><div>🔢 ${r.headCount}頭</div>
      ${r.comment ? `<div style="margin-top:4px;font-size:12px;border-top:1px solid #eee;padding-top:4px">${escapeHtml(r.comment)}</div>` : ""}
    </div>`;
    popupRef.current.setLatLng([r.lat, r.lon]).setContent(html).openOn(map);
  };

  const renderSelectionLayer = () => {
    const map = mapRef.current;
    const layer = selectionLayerRef.current;
    if (!map || !layer) return;

    import("leaflet").then((L) => {
      layer.clearLayers();
      if (!selectedLocation) return;

      const { lat, lon, source } = selectedLocation;
      const color = source === "gps" ? "#2563eb" : "#d97706";

      L.circle([lat, lon], {
        radius: 180,
        color,
        weight: 1,
        fillColor: color,
        fillOpacity: 0.12,
        interactive: false,
      }).addTo(layer);

      L.circleMarker([lat, lon], {
        radius: 8,
        color: "#ffffff",
        weight: 2.5,
        fillColor: color,
        fillOpacity: 1,
        interactive: false,
      }).addTo(layer);
    });
  };

  useEffect(() => {
    recordsRef.current = records;
    renderPinLayer();
  }, [records]);

  useEffect(() => {
    showHeatmapRef.current = showHeatmap;
    const map = mapRef.current;
    const layer = meshLayerRef.current;
    if (!map || !layer) return;
    if (showHeatmap) {
      if (!map.hasLayer(layer)) layer.addTo(map);
      renderMeshLayer();
    } else {
      layer.clearLayers();
      if (map.hasLayer(layer)) map.removeLayer(layer);
    }
  }, [showHeatmap]);

  useEffect(() => {
    renderSelectionLayer();
    const map = mapRef.current;
    if (!map || !selectedLocation) return;
    const { lat, lon } = selectedLocation;
    const targetZoom = Math.max(map.getZoom(), 10);
    map.flyTo([lat, lon], targetZoom, { duration: 0.8 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation?.lat, selectedLocation?.lon, selectedLocation?.source]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !el || mapRef.current) return;

      const map = L.map(el, {
        center,
        zoom,
        preferCanvas: true,
        zoomControl: false,
      });
      mapRef.current = map;

      L.control.zoom({ position: "topright" }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | ' +
          '<a href="https://public.sharp9110.com/view/allposts/bear">Sharp9110</a> CC BY 4.0',
        maxZoom: 18,
      }).addTo(map);

      const meshLayer = L.layerGroup();
      meshLayerRef.current = meshLayer;
      if (showHeatmapRef.current) meshLayer.addTo(map);

      const pinLayer = L.layerGroup();
      pinLayerRef.current = pinLayer;
      pinLayer.addTo(map);

      const selectionLayer = L.layerGroup();
      selectionLayerRef.current = selectionLayer;
      selectionLayer.addTo(map);

      map.on("moveend", scheduleRedraw);
      map.on("zoomend", scheduleRedraw);
      map.on("click", (e: LeafletMouseEvent) => {
        const cb = onMapClickRef.current;
        if (cb) cb(e.latlng.lat, e.latlng.lng);
      });

      fetch("/data/mesh.json", { cache: "force-cache" })
        .then((r) => r.json())
        .then((data: MeshJsonPayload) => {
          if (cancelled) return;
          meshDataRef.current = data.meshes;
          renderMeshLayer();
        })
        .catch(() => {});

      renderPinLayer();
      renderSelectionLayer();
    });

    return () => {
      cancelled = true;
      if (redrawTimerRef.current != null) {
        window.clearTimeout(redrawTimerRef.current);
        redrawTimerRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      meshLayerRef.current = null;
      pinLayerRef.current = null;
      selectionLayerRef.current = null;
      popupRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
