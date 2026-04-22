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
import {
  calcHistoryScore,
  computeSpatialScore,
  RISK_LEVEL_COLOR,
} from "@/lib/score";
import { loadMeshes } from "@/lib/mesh-data";
import {
  buildDangerGrid,
  aggregateSightingsPerCell,
  type AugmentedMeshEntry,
  type SightingDensity,
} from "@/lib/neighbor-habitat";

const MESH_LAT_HALF = 2.5 / 60 / 2;
const MESH_LON_HALF = 3.75 / 60 / 2;
const MIN_HEAT_ZOOM = 5;
const LOW_LEVEL_ZOOM_THRESHOLD = 8;
const REDRAW_DEBOUNCE_MS = 180;

function mobileCaps() {
  if (typeof window === "undefined") return { maxRects: 10000, maxPins: 1200 };
  const narrow = window.innerWidth < 768;
  return narrow
    ? { maxRects: 4000, maxPins: 500 }
    : { maxRects: 10000, maxPins: 1500 };
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
  const meshDataRef = useRef<AugmentedMeshEntry[] | null>(null);
  const sightingDensityRef = useRef<Map<string, SightingDensity> | null>(null);
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

      const canvas = L.canvas({ padding: 0.1 });
      const density = sightingDensityRef.current;
      const currentZoom = map.getZoom();
      // ズームアウト時は low (弱い色) を捨てて cap 内で重要セルを確実に描く
      const skipLowLevel = currentZoom < LOW_LEVEL_ZOOM_THRESHOLD;
      let drawn = 0;
      for (const m of meshes) {
        if (m.lat < south || m.lat > north) continue;
        if (m.lon < west || m.lon > east) continue;
        const direct = calcHistoryScore({
          second: m.s,
          sixth: m.x,
          latest: m.l,
          latestSingle: m.ls,
        });
        const nearby = density?.get(m.m);
        const { level } = computeSpatialScore({
          historyDirect: direct,
          historyNeighbor: m.neighborHistory,
          sightingWeighted: nearby?.weighted ?? 0,
        });
        if (level === "safe" || level === "unknown") continue;
        if (skipLowLevel && level === "low") continue;
        const opacityMap: Record<string, number> = {
          low: 0.28,
          moderate: 0.5,
          elevated: 0.65,
          high: 0.8,
        };
        const opacity = opacityMap[level] ?? 0.5;

        const color = RISK_LEVEL_COLOR[level];
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
    // 危険度ヒートマップ用に、records 変化のたびに密度を再集計
    const meshes = meshDataRef.current;
    if (meshes) {
      sightingDensityRef.current = aggregateSightingsPerCell(records, meshes);
      renderMeshLayer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // シート/サイドパネルで隠れないように地図中心をずらす:
    //   モバイル (<640px): シートが下にあるので、ピンを画面上部に寄せる
    //   デスクトップ: サイドパネルが左にあるので、ピンを画面右寄りに寄せる
    const isMobile =
      typeof window !== "undefined" ? window.innerWidth < 640 : false;
    const offsetX = isMobile ? 0 : 180;
    const offsetY = isMobile
      ? -Math.round((typeof window !== "undefined" ? window.innerHeight : 800) * 0.35)
      : 0;
    if (offsetX !== 0 || offsetY !== 0) {
      const pinPx = map.project([lat, lon], targetZoom);
      const centerPx = pinPx.subtract([offsetX, offsetY]);
      const centerLatLng = map.unproject(centerPx, targetZoom);
      map.flyTo(centerLatLng, targetZoom, { duration: 0.8 });
    } else {
      map.flyTo([lat, lon], targetZoom, { duration: 0.8 });
    }
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

      // コンテナサイズ変化 (カードの押し上げ・折り畳み等) を検知して地図を再描画
      if (typeof ResizeObserver !== "undefined") {
        const ro = new ResizeObserver(() => {
          map.invalidateSize();
        });
        ro.observe(el);
        // cleanup via closure reference
        const prevCleanup = cancelled;
        void prevCleanup;
      }

      loadMeshes()
        .then((meshes) => {
          if (cancelled) return;
          // 危険度グリッド: 環境省メッシュ + 穴に synthetic セルを補完、
          // 全セルに neighborHistory を付ける (原則: 生息域が近ければ
          // 調査データがなくても危険)
          const grid = buildDangerGrid(meshes);
          meshDataRef.current = grid;
          sightingDensityRef.current = aggregateSightingsPerCell(
            recordsRef.current,
            grid,
          );
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
