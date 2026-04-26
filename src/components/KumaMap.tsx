"use client";

import { useEffect, useRef } from "react";
import type {
  Map as LeafletMap,
  LayerGroup,
  Rectangle,
  CircleMarker,
  Popup,
  LeafletMouseEvent,
  TileLayer,
} from "leaflet";
import type { KumaRecord } from "@/app/api/kuma/route";
import {
  DEFAULT_LEVEL_THRESHOLDS,
  kumamoriLevel,
  RISK_LEVEL_COLOR,
  type LevelThresholds,
} from "@/lib/score";
import { loadLandUse, loadMeshes, type LandUseMap, type MeshEntry } from "@/lib/mesh-data";
import { smoothMeshes, type SmoothedCell } from "@/lib/smooth";

const MESH_LAT_HALF = 2.5 / 60 / 2;
const MESH_LON_HALF = 3.75 / 60 / 2;
const MESH_LAT_STEP = 2.5 / 60;
const MESH_LON_STEP = 3.75 / 60;
const MIN_HEAT_ZOOM = 5;
const LOD_ZOOM_THRESHOLD = 8; // これ未満で LOD 集約
const LOD_STEP = 3; // 3×3 セルを 1 ブロックに
const REDRAW_DEBOUNCE_MS = 180;

export type TileStyle = "standard" | "satellite" | "topo";

type TileProvider = {
  url: string;
  attribution: string;
  subdomains?: string[];
  maxZoom?: number;
};

const TILE_PROVIDERS: Record<TileStyle, TileProvider> = {
  standard: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "© Esri",
    maxZoom: 18,
  },
  topo: {
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    attribution: '© <a href="https://opentopomap.org/">OpenTopoMap</a>',
    subdomains: ["a", "b", "c"],
    maxZoom: 17,
  },
};

const RANK: Record<string, number> = {
  safe: 0,
  low: 1,
  moderate: 2,
  elevated: 3,
  high: 4,
};

function mobileCaps() {
  if (typeof window === "undefined") return { maxRects: 10000, maxPins: 5000 };
  const narrow = window.innerWidth < 768;
  return narrow
    ? { maxRects: 4000, maxPins: 2500 }
    : { maxRects: 10000, maxPins: 8000 };
}

type Props = {
  records: KumaRecord[];
  center?: [number, number];
  zoom?: number;
  showHeatmap?: boolean;
  heatmapOpacity?: number;
  /** Gaussian smoothing の σ (km)。0 で無効 (Flutter 同等) */
  smoothingSigmaKm?: number;
  /** halo (穴埋めセル) の不透明度倍率 (0-1)。habitat セルは常に 1.0 */
  haloOpacity?: number;
  /** 5 段階のしきい値 (safe→low→moderate→elevated→high の 4 境界) */
  levelThresholds?: LevelThresholds;
  tileStyle?: TileStyle;
  selectedLocation?: {
    lat: number;
    lon: number;
    source: "gps" | "tap" | "search" | "url";
  } | null;
  /** GPS で測定された現在地 (青丸で常時表示) */
  currentLocation?: { lat: number; lon: number } | null;
  onMapClick?: (lat: number, lon: number) => void;
  /** map handle を親に引き渡すための ref 代替。Leaflet インスタンス提供時に呼ばれる。 */
  onMapReady?: (map: LeafletMap) => void;
};

export default function KumaMap({
  records,
  center = [36.5, 137.5],
  zoom = 6,
  showHeatmap = true,
  heatmapOpacity = 0.4,
  smoothingSigmaKm = 0,
  haloOpacity = 0.5,
  levelThresholds = DEFAULT_LEVEL_THRESHOLDS,
  tileStyle = "standard",
  selectedLocation = null,
  currentLocation = null,
  onMapClick,
  onMapReady,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const tileLayerRef = useRef<TileLayer | null>(null);
  const meshLayerRef = useRef<LayerGroup | null>(null);
  const pinLayerRef = useRef<LayerGroup | null>(null);
  const selectionLayerRef = useRef<LayerGroup | null>(null);
  const popupRef = useRef<Popup | null>(null);
  const rawMeshesRef = useRef<MeshEntry[] | null>(null);
  const meshDataRef = useRef<SmoothedCell[] | null>(null);
  const landUseRef = useRef<LandUseMap | null>(null);
  const recordsRef = useRef<KumaRecord[]>(records);
  const showHeatmapRef = useRef(showHeatmap);
  const heatmapOpacityRef = useRef(heatmapOpacity);
  const haloOpacityRef = useRef(haloOpacity);
  const levelThresholdsRef = useRef(levelThresholds);
  const onMapClickRef = useRef(onMapClick);
  const redrawTimerRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

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
      const currentZoom = map.getZoom();
      const useLOD = currentZoom < LOD_ZOOM_THRESHOLD;
      const opacity = heatmapOpacityRef.current;

      if (useLOD) {
        // LOD: 3×3 セルを集約して代表色 (max level) で描く
        type LodBucket = {
          minLat: number;
          maxLat: number;
          minLon: number;
          maxLon: number;
          maxRank: number;
          maxLevel: "safe" | "low" | "moderate" | "elevated" | "high";
        };
        const buckets = new Map<string, LodBucket>();
        const latBinSize = MESH_LAT_STEP * LOD_STEP;
        const lonBinSize = MESH_LON_STEP * LOD_STEP;
        for (const m of meshes) {
          if (m.lat < south || m.lat > north) continue;
          if (m.lon < west || m.lon > east) continue;
          const level = kumamoriLevel(m.s, levelThresholdsRef.current);
          if (level === "safe" || level === "unknown") continue;
          const rank = RANK[level];
          const latBin = Math.floor(m.lat / latBinSize);
          const lonBin = Math.floor(m.lon / lonBinSize);
          const key = `${latBin}|${lonBin}`;
          const b = buckets.get(key);
          const cellMinLat = m.lat - MESH_LAT_HALF;
          const cellMaxLat = m.lat + MESH_LAT_HALF;
          const cellMinLon = m.lon - MESH_LON_HALF;
          const cellMaxLon = m.lon + MESH_LON_HALF;
          if (!b) {
            buckets.set(key, {
              minLat: cellMinLat,
              maxLat: cellMaxLat,
              minLon: cellMinLon,
              maxLon: cellMaxLon,
              maxRank: rank,
              maxLevel: level as LodBucket["maxLevel"],
            });
          } else {
            if (cellMinLat < b.minLat) b.minLat = cellMinLat;
            if (cellMaxLat > b.maxLat) b.maxLat = cellMaxLat;
            if (cellMinLon < b.minLon) b.minLon = cellMinLon;
            if (cellMaxLon > b.maxLon) b.maxLon = cellMaxLon;
            if (rank > b.maxRank) {
              b.maxRank = rank;
              b.maxLevel = level as LodBucket["maxLevel"];
            }
          }
        }
        let drawn = 0;
        for (const b of buckets.values()) {
          const color = RISK_LEVEL_COLOR[b.maxLevel];
          const rect: Rectangle = L.rectangle(
            [
              [b.minLat, b.minLon],
              [b.maxLat, b.maxLon],
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
        return;
      }

      let drawn = 0;
      const halo = haloOpacityRef.current;
      for (const m of meshes) {
        if (m.lat < south || m.lat > north) continue;
        if (m.lon < west || m.lon > east) continue;
        const level = kumamoriLevel(m.s, levelThresholdsRef.current);
        if (level === "safe" || level === "unknown") continue;

        const color = RISK_LEVEL_COLOR[level];
        const cellOpacity = m.isHabitat ? opacity : opacity * halo;
        if (cellOpacity <= 0) continue;
        const rect: Rectangle = L.rectangle(
          [
            [m.lat - MESH_LAT_HALF, m.lon - MESH_LON_HALF],
            [m.lat + MESH_LAT_HALF, m.lon + MESH_LON_HALF],
          ],
          {
            stroke: false,
            fillColor: color,
            fillOpacity: cellOpacity,
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
      // bounds 内のレコードを先に集めてから均等サンプリング。
      // recs は日付降順ソート済み。早い者勝ち break で打ち切ると、
      // 縮小時 (全国 in-bounds) に古めのデータを持つ県 (例: 岩手) のピンが
      // すっぽり抜ける。bounds 内の全域から均等に間引く。
      const inBounds: KumaRecord[] = [];
      for (const r of recs) {
        if (r.lat < south || r.lat > north) continue;
        if (r.lon < west || r.lon > east) continue;
        inBounds.push(r);
      }
      const toRender =
        inBounds.length <= maxPins
          ? inBounds
          : Array.from({ length: maxPins }, (_, i) =>
              inBounds[Math.floor((i * inBounds.length) / maxPins)],
            );
      for (const r of toRender) {
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
          if ((e as unknown as LeafletMouseEvent).originalEvent) {
            (
              e as unknown as LeafletMouseEvent
            ).originalEvent.stopPropagation?.();
          }
          showRecordPopup(L, r);
        });
        marker.addTo(layer);
      }
    });
  };

  const showRecordPopup = (L: typeof import("leaflet"), r: KumaRecord) => {
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

      // 現在地 (青丸 + 薄い halo) — 常時表示
      if (currentLocation) {
        L.circle([currentLocation.lat, currentLocation.lon], {
          radius: 180,
          color: "#3b82f6",
          weight: 1,
          fillColor: "#3b82f6",
          fillOpacity: 0.15,
          interactive: false,
        }).addTo(layer);
        L.circleMarker([currentLocation.lat, currentLocation.lon], {
          radius: 7,
          color: "#ffffff",
          weight: 3,
          fillColor: "#3b82f6",
          fillOpacity: 1,
          interactive: false,
        }).addTo(layer);
      }

      // 選択地点 (teardrop の赤ピン)
      if (selectedLocation) {
        const isGps = selectedLocation.source === "gps";
        // GPS と currentLocation が同じ位置なら赤ピンは省略 (二重表示を避ける)
        const sameAsCurrent =
          isGps &&
          currentLocation &&
          Math.abs(currentLocation.lat - selectedLocation.lat) < 1e-6 &&
          Math.abs(currentLocation.lon - selectedLocation.lon) < 1e-6;
        if (!sameAsCurrent) {
          const pinIcon = L.divIcon({
            className: "kuma-pin",
            html: `<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.3 21.7 0 14 0z" fill="#dc2626" stroke="white" stroke-width="2"/><circle cx="14" cy="13" r="4.5" fill="white"/></svg>`,
            iconSize: [28, 36],
            iconAnchor: [14, 36],
          });
          L.marker([selectedLocation.lat, selectedLocation.lon], {
            icon: pinIcon,
            interactive: false,
            keyboard: false,
          }).addTo(layer);
        }
      }
    });
  };

  useEffect(() => {
    recordsRef.current = records;
    renderPinLayer();
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
    heatmapOpacityRef.current = heatmapOpacity;
    renderMeshLayer();
  }, [heatmapOpacity]);

  useEffect(() => {
    haloOpacityRef.current = haloOpacity;
    renderMeshLayer();
  }, [haloOpacity]);

  useEffect(() => {
    levelThresholdsRef.current = levelThresholds;
    renderMeshLayer();
  }, [levelThresholds]);

  useEffect(() => {
    const raw = rawMeshesRef.current;
    if (!raw) return; // まだ mesh.json 読み込み前
    meshDataRef.current = smoothMeshes(
      raw,
      smoothingSigmaKm,
      landUseRef.current,
    );
    renderMeshLayer();
  }, [smoothingSigmaKm]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const old = tileLayerRef.current;
    const provider = TILE_PROVIDERS[tileStyle];
    import("leaflet").then((L) => {
      const next = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: provider.maxZoom ?? 18,
        subdomains: provider.subdomains ?? "abc",
      });
      next.addTo(map);
      if (old) {
        // fade swap: wait a tick so tiles load, then remove old
        window.setTimeout(() => {
          map.removeLayer(old);
        }, 200);
      }
      tileLayerRef.current = next;
    });
  }, [tileStyle]);

  useEffect(() => {
    renderSelectionLayer();
    const map = mapRef.current;
    if (!map || !selectedLocation) return;
    const { lat, lon } = selectedLocation;
    const targetZoom = Math.max(map.getZoom(), 10);
    // シートで隠れないように地図中心を上に寄せる (シートは下 30-70vh を占める)
    const isMobile =
      typeof window !== "undefined" ? window.innerWidth < 640 : false;
    const offsetX = isMobile ? 0 : 180;
    const offsetY = isMobile
      ? -Math.round(
          (typeof window !== "undefined" ? window.innerHeight : 800) * 0.18,
        )
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

  // 現在地 (青丸) の位置だけ変わったときはカメラは動かさず、マーカーだけ更新
  useEffect(() => {
    renderSelectionLayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation?.lat, currentLocation?.lon]);

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
        attributionControl: true,
      });
      mapRef.current = map;
      if (onMapReady) onMapReady(map);

      // Initial tile layer; will be replaced by the tileStyle effect below.
      const provider = TILE_PROVIDERS[tileStyle];
      const tile = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: provider.maxZoom ?? 18,
        subdomains: provider.subdomains ?? "abc",
      });
      tile.addTo(map);
      tileLayerRef.current = tile;

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

      if (typeof ResizeObserver !== "undefined") {
        const ro = new ResizeObserver(() => {
          // unmount 後の callback 発火で map が破棄済みなら no-op
          const m = mapRef.current;
          if (!m) return;
          try {
            m.invalidateSize();
          } catch {
            /* map disposed mid-resize */
          }
        });
        ro.observe(el);
        resizeObserverRef.current = ro;
      }

      Promise.all([loadMeshes(), loadLandUse().catch(() => null)])
        .then(([meshes, landUse]) => {
          if (cancelled) return;
          rawMeshesRef.current = meshes;
          landUseRef.current = landUse;
          meshDataRef.current = smoothMeshes(
            meshes,
            smoothingSigmaKm,
            landUse,
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
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      tileLayerRef.current = null;
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
