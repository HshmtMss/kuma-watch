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
  maxLevel,
  RISK_LEVEL_COLOR,
  sightingsToLevel,
  type LevelThresholds,
} from "@/lib/score";
import { meshCodeToCenter } from "@/lib/mesh";
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

// 地図の view (中心 + ズーム) を sessionStorage に保存・復元する。
// iOS Safari はメモリ圧でタブを強制再読み込みすることがあり、その際に
// 拡大していたズームや中心座標が失われる現象が報告されている。
// localStorage ではなく sessionStorage を使うのは、別タブや別セッションで
// 開いたときに前回の閲覧位置を引きずらないようにするため。
const MAP_VIEW_KEY = "kumaWatch.mapView";

type MapView = { center: [number, number]; zoom: number };

function readSavedMapView(): MapView | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(MAP_VIEW_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<MapView>;
    if (
      !parsed ||
      !Array.isArray(parsed.center) ||
      parsed.center.length !== 2 ||
      typeof parsed.center[0] !== "number" ||
      typeof parsed.center[1] !== "number" ||
      !Number.isFinite(parsed.center[0]) ||
      !Number.isFinite(parsed.center[1]) ||
      typeof parsed.zoom !== "number" ||
      !Number.isFinite(parsed.zoom)
    ) {
      return null;
    }
    const lat = parsed.center[0];
    const lon = parsed.center[1];
    // 日本の地理範囲外（誤タップで世界中の点になっていた等）は破棄して
    // 日本中心のデフォルトに戻す。緯度 20-50 / 経度 120-150 が日本 BBox。
    if (lat < 20 || lat > 50 || lon < 120 || lon > 150) return null;
    // ズームも 5〜18 にクランプ。世界ビュー (zoom 1-3) の保存はリセット扱い。
    const zoom = Math.min(18, Math.max(5, parsed.zoom));
    return { center: [lat, lon], zoom };
  } catch {
    return null;
  }
}

function saveMapView(view: MapView): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(MAP_VIEW_KEY, JSON.stringify(view));
  } catch {
    // ignore quota / disabled storage
  }
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
  /** 過去 1 年の目撃件数を 4 次メッシュコード単位で集計したマップ (/api/sighting-cells) */
  sightingCountByMesh?: Map<string, number>;
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
  sightingCountByMesh,
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
  const sightingCountByMeshRef = useRef<Map<string, number> | undefined>(
    sightingCountByMesh,
  );
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
      const sightingMap = sightingCountByMeshRef.current;

      // ヒートマップに反映するレベルは「生息域 vs 過去1年の目撃」の高い方。
      // sightingMap は API /api/sighting-cells から取得したもの。
      const cellLevel = (
        meshCode: string,
        s: number,
      ): "safe" | "low" | "moderate" | "elevated" | "high" | "unknown" => {
        const habitat = kumamoriLevel(s, levelThresholdsRef.current);
        const sCount = sightingMap?.get(meshCode) ?? 0;
        return maxLevel(habitat, sightingsToLevel(sCount));
      };

      // smoothMeshes には含まれない「生息域なし＋目撃あり」のセルを補う。
      // 既に出力にあるコードはスキップ。
      const seen = new Set<string>();
      for (const m of meshes) seen.add(m.m);
      const sightingOnlyCells: { m: string; lat: number; lon: number }[] = [];
      if (sightingMap) {
        for (const code of sightingMap.keys()) {
          if (seen.has(code)) continue;
          const c = meshCodeToCenter(code);
          if (!c) continue;
          if (c.lat < south || c.lat > north) continue;
          if (c.lon < west || c.lon > east) continue;
          sightingOnlyCells.push({ m: code, lat: c.lat, lon: c.lon });
        }
      }

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
        const accumulate = (
          lat: number,
          lon: number,
          level:
            | "safe"
            | "low"
            | "moderate"
            | "elevated"
            | "high"
            | "unknown",
        ) => {
          if (level === "safe" || level === "unknown") return;
          const rank = RANK[level];
          const latBin = Math.floor(lat / latBinSize);
          const lonBin = Math.floor(lon / lonBinSize);
          const key = `${latBin}|${lonBin}`;
          const b = buckets.get(key);
          const cellMinLat = lat - MESH_LAT_HALF;
          const cellMaxLat = lat + MESH_LAT_HALF;
          const cellMinLon = lon - MESH_LON_HALF;
          const cellMaxLon = lon + MESH_LON_HALF;
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
        };
        for (const m of meshes) {
          if (m.lat < south || m.lat > north) continue;
          if (m.lon < west || m.lon > east) continue;
          accumulate(m.lat, m.lon, cellLevel(m.m, m.s));
        }
        for (const c of sightingOnlyCells) {
          accumulate(c.lat, c.lon, cellLevel(c.m, 0));
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
        const level = cellLevel(m.m, m.s);
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
      // 生息域なし＋目撃ありのセル (smoothMeshes 出力に無いもの) を追加描画。
      // habitat=false 扱いなので halo opacity を適用する (薄め)。
      for (const c of sightingOnlyCells) {
        if (drawn >= maxRects) break;
        const level = cellLevel(c.m, 0);
        if (level === "safe" || level === "unknown") continue;
        const color = RISK_LEVEL_COLOR[level];
        const cellOpacity = opacity * halo;
        if (cellOpacity <= 0) continue;
        const rect: Rectangle = L.rectangle(
          [
            [c.lat - MESH_LAT_HALF, c.lon - MESH_LON_HALF],
            [c.lat + MESH_LAT_HALF, c.lon + MESH_LON_HALF],
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
      // モバイルはタップ領域を確保するためピンを大きく描く (Apple HIG: 最低 44pt の指針)。
      // canvas renderer は描画半径がそのままヒット判定に使われるので、
      // 視覚サイズを上げることが押しやすさにも直結する。
      // さらに、ズームインしたときは混雑が減るので半径を 1.5〜2.0 倍にして
      // 親指でも確実に拾えるサイズへ。低ズームは大量描画を避けるため等倍。
      const isNarrow =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;
      const z = map.getZoom();
      const zoomBoost = z >= 13 ? 2.0 : z >= 11 ? 1.5 : 1.0;
      const baseSingle = isNarrow ? 8 : 5;
      const baseMulti = isNarrow ? 10 : 6;
      const rSingle = Math.round(baseSingle * zoomBoost);
      const rMulti = Math.round(baseMulti * zoomBoost);
      const borderWeight = isNarrow ? 1.6 : 1.2;
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
      // 直近 24h に取り込まれたレコードは「新着」として強調する閾値。
      const FRESH_MS = 24 * 60 * 60 * 1000;
      const nowMs = Date.now();
      for (const r of toRender) {
        // 報道由来 (isOfficial=false) はオレンジ系で「未確認」を示唆。
        // 公式は従来通り 1 頭=灰 / 2 頭以上=赤の頭数強調。
        const isNews = r.isOfficial === false;
        const isFresh =
          typeof r.ingestedAt === "number" && nowMs - r.ingestedAt <= FRESH_MS;
        const color = isFresh
          ? "#3b82f6" // 新着は青で目立たせる
          : isNews
            ? "#f59e0b"
            : r.headCount > 1
              ? "#ef4444"
              : "#6b7280";
        // 新着は半径 +4・border 強調。
        const radius =
          (r.headCount > 1 ? rMulti : rSingle) + (isFresh ? 4 : 0);
        const weight = isFresh ? borderWeight + 1 : borderWeight;
        const marker: CircleMarker = L.circleMarker([r.lat, r.lon], {
          radius,
          color: isFresh ? "#1d4ed8" : "#ffffff",
          weight,
          fillColor: color,
          fillOpacity: isFresh ? 1 : 0.9,
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
    // 信頼性バッジ: isOfficial が明示的に false のものだけ「報道」と表示し、
    // それ以外 (true・undefined) は公式情報として扱う。undefined は旧
    // スナップショットの後方互換 (公式由来のみだった頃のデータ) のため。
    const isNews = r.isOfficial === false;
    const sourceBadge = isNews
      ? `<span style="display:inline-block;background:#fef3c7;color:#92400e;border:1px solid #fcd34d;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px">📰 報道</span>`
      : `<span style="display:inline-block;background:#dcfce7;color:#166534;border:1px solid #86efac;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px">🛡 公式</span>`;
    // 新着バッジ: 取り込みから 24h 以内かつ ingestedAt あり。
    const FRESH_MS = 24 * 60 * 60 * 1000;
    const ingestedAt = r.ingestedAt;
    const ageMs =
      typeof ingestedAt === "number" ? Date.now() - ingestedAt : Infinity;
    const isFresh = ageMs <= FRESH_MS;
    const ageLabel = isFresh
      ? ageMs < 60 * 60 * 1000
        ? `${Math.max(1, Math.round(ageMs / 60 / 1000))} 分前`
        : `${Math.round(ageMs / 60 / 60 / 1000)} 時間前`
      : "";
    const freshBadge = isFresh
      ? `<span style="display:inline-block;background:#dbeafe;color:#1e3a8a;border:1px solid #93c5fd;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px">🆕 ${ageLabel}</span>`
      : "";
    const sourceLink = r.sourceUrl
      ? `<div style="margin-top:4px;font-size:11px"><a href="${escapeHtml(r.sourceUrl)}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:underline">元記事を開く ↗</a></div>`
      : "";
    const html = `<div style="min-width:180px;font-size:13px;line-height:1.7">
      <b>🐻 ${escapeHtml(r.prefectureName)} ${escapeHtml(r.cityName)}</b>${freshBadge}${sourceBadge}
      ${r.sectionName ? `<div style="color:#555;font-size:12px">${escapeHtml(r.sectionName)}</div>` : ""}
      <div>📅 ${escapeHtml(r.date)}</div><div>🔢 ${r.headCount}頭</div>
      ${r.comment ? `<div style="margin-top:4px;font-size:12px;border-top:1px solid #eee;padding-top:4px">${escapeHtml(r.comment)}</div>` : ""}
      ${sourceLink}
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
    sightingCountByMeshRef.current = sightingCountByMesh;
    renderMeshLayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sightingCountByMesh]);

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

      // 直前の view を sessionStorage から復元する。
      // iOS Safari がメモリ圧でタブを再読み込みしたとき、
      // ズーム位置や中心座標が初期値に戻るのを防ぐ。
      const restored = readSavedMapView();
      const initialCenter = restored ? restored.center : center;
      const initialZoom = restored ? restored.zoom : zoom;

      const map = L.map(el, {
        center: initialCenter,
        zoom: initialZoom,
        // 日本中心のサービスなので、ピンチアウトで世界ビューまで出せると
        // 操作不能 (Kazakhstan の謎ピン等) が起きるため、minZoom=5 で抑える。
        minZoom: 5,
        preferCanvas: true,
        zoomControl: false,
        attributionControl: true,
      });
      mapRef.current = map;
      if (onMapReady) onMapReady(map);

      // map 生成時点で既に selectedLocation がある (URL ?lat=&lon= 由来など) 場合、
      // selectedLocation の useEffect は map 未初期化のタイミングで早期 return しているため、
      // ここで初回 setView を明示的に発火させる。これがないと「観光地から地図を開く」が
      // 現在地周辺に止まる現象が起きる。
      const initSel = selectedLocation;
      if (initSel) {
        const isMobile =
          typeof window !== "undefined" ? window.innerWidth < 640 : false;
        const targetZoom = 12;
        const offsetX = isMobile ? 0 : 180;
        const offsetY = isMobile
          ? -Math.round(
              (typeof window !== "undefined" ? window.innerHeight : 800) *
                0.18,
            )
          : 0;
        try {
          if (offsetX !== 0 || offsetY !== 0) {
            const pinPx = map.project([initSel.lat, initSel.lon], targetZoom);
            const centerPx = pinPx.subtract([offsetX, offsetY]);
            const centerLatLng = map.unproject(centerPx, targetZoom);
            map.setView(centerLatLng, targetZoom);
          } else {
            map.setView([initSel.lat, initSel.lon], targetZoom);
          }
        } catch {
          // ignore — map ready 直後の race のみ防ぐ
        }
      }

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
      // ユーザーが地図を動かすたびに view を保存する。
      // iOS Safari でタブが再読み込みされても、ここに書いた値で復元される。
      const persist = () => {
        const c = map.getCenter();
        saveMapView({ center: [c.lat, c.lng], zoom: map.getZoom() });
      };
      map.on("moveend", persist);
      map.on("zoomend", persist);
      map.on("click", (e: LeafletMouseEvent) => {
        // 周辺 30px 以内に出没ピンがあれば、そのピンの popup を開く。
        // canvas renderer のヒット領域は描画半径そのままで小さく拾いづらいため、
        // 視覚は維持したままタップ判定だけ広げる「スナップ」を入れる。
        const recs = recordsRef.current;
        if (recs.length > 0) {
          const SNAP_PX = 30;
          const clickPx = map.latLngToContainerPoint(e.latlng);
          const bounds = map.getBounds();
          const south = bounds.getSouth();
          const north = bounds.getNorth();
          const west = bounds.getWest();
          const east = bounds.getEast();
          let bestRec: KumaRecord | null = null;
          let bestDistSq = SNAP_PX * SNAP_PX;
          for (const r of recs) {
            if (r.lat < south || r.lat > north) continue;
            if (r.lon < west || r.lon > east) continue;
            const px = map.latLngToContainerPoint([r.lat, r.lon]);
            const dx = px.x - clickPx.x;
            const dy = px.y - clickPx.y;
            const distSq = dx * dx + dy * dy;
            if (distSq <= bestDistSq) {
              bestRec = r;
              bestDistSq = distSq;
            }
          }
          if (bestRec) {
            const matched = bestRec;
            import("leaflet").then((LL) => showRecordPopup(LL, matched));
            return;
          }
        }
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
