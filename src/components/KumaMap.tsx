"use client";

import { useEffect, useRef, useState } from "react";
import type {
  Map as LeafletMap,
  LayerGroup,
  Rectangle,
  CircleMarker,
  Popup,
  LeafletMouseEvent,
  TileLayer,
  Canvas,
} from "leaflet";
import type { KumaRecord } from "@/app/api/kuma/route";
import {
  DEFAULT_LEVEL_THRESHOLDS,
  kumamoriLevel,
  maxLevel,
  HABITAT_DISPLAY_COLOR,
  ALERT_DISPLAY_COLOR,
  ALERT_SIGHTING_THRESHOLDS,
  type LevelThresholds,
} from "@/lib/score";
import { haversineKm, meshCodeToCenter } from "@/lib/mesh";
import { isRecentSighting, recentSightingLabel } from "@/lib/freshness";
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
    /** URL の z= 由来の初期ズーム。指定時はこの近さで開く (通知リンク用) */
    zoom?: number;
  } | null;
  /** GPS で測定された現在地 (青丸で常時表示) */
  currentLocation?: { lat: number; lon: number } | null;
  /**
   * 開いた直後に吹き出しを出す出没ピンの id (通知リンクの s= 由来)。
   * その出没が records に居れば、いつ・どこで・何が出たかの吹き出しを自動で開く。
   */
  focusSightingId?: string | null;
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
  focusSightingId = null,
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
  // map 初期化完了フラグ。通知リンク(focusSightingId)の吹き出しを開く処理を、
  // map 準備前に取りこぼさず、準備後に確実に走らせるために state で持つ。
  const [mapReady, setMapReady] = useState(false);
  // 地図は lite (最小フィールド) で読み込むため、ポップアップに必要な詳細は id で
  // 都度取得する。一度取ったものはここにキャッシュして再取得を避ける。
  const detailCacheRef = useRef<Map<string, KumaRecord>>(new Map());
  const rawMeshesRef = useRef<MeshEntry[] | null>(null);
  const meshDataRef = useRef<SmoothedCell[] | null>(null);
  const landUseRef = useRef<LandUseMap | null>(null);
  const recordsRef = useRef<KumaRecord[]>(records);
  const showHeatmapRef = useRef(showHeatmap);
  // selectedLocation を ref で最新化。map 初期化 useEffect の closure では
  // mount 時点の値しか見えないため、leaflet の動的 import が解決した時点で
  // 既に GPS / URL 由来の selectedLocation が反映されていてもキャプチャできず
  // 「地図中心がデフォルト位置のまま動かない」現象を起こしていた。
  const selectedLocationLatestRef = useRef(selectedLocation);
  useEffect(() => {
    selectedLocationLatestRef.current = selectedLocation;
  }, [selectedLocation]);
  const heatmapOpacityRef = useRef(heatmapOpacity);
  const haloOpacityRef = useRef(haloOpacity);
  const levelThresholdsRef = useRef(levelThresholds);
  const sightingCountByMeshRef = useRef<Map<string, number> | undefined>(
    sightingCountByMesh,
  );
  const onMapClickRef = useRef(onMapClick);
  const redrawTimerRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  // ★ Canvas レンダラーは地図の初期化時に 1 度だけ生成し、再描画のたびに使い回す。
  //   以前は renderMeshLayer / renderPinLayer が毎回 L.canvas() を新規生成しており、
  //   layer.clearLayers() ではパス (矩形/ピン) しか消えず、レンダラー本体の <canvas>
  //   要素 (Leaflet が map._getRenderer 経由で map へ追加する) が overlayPane に残り
  //   続けていた。パンのたびに全画面 canvas のバッキングストア (Retina で約 10MB/枚)
  //   が積み上がり、iOS Safari のタブ上限を超えて強制リロード
  //   (「このページで問題が繰り返し起きました」) を起こしていた。
  const meshCanvasRef = useRef<Canvas | null>(null);
  const pinCanvasRef = useRef<Canvas | null>(null);

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

      const canvas = meshCanvasRef.current;
      if (!canvas) return;
      const currentZoom = map.getZoom();
      const useLOD = currentZoom < LOD_ZOOM_THRESHOLD;
      const opacity = heatmapOpacityRef.current;
      const sightingMap = sightingCountByMeshRef.current;

      // セルの塗り色を決める (2026-06 改訂)。生息域と「直近の出没」を色で分離:
      //  - 直近1年の出没が多い → 警戒色 (黄→橙→赤)。生息域より優先 (rank 高)。
      //  - それ以外 → 生息域を落ち着いた色 (薄緑→ベージュ)。出没1-2件は最低 low に底上げ。
      // rank は LOD 集約時の「代表色 = 最も深刻なセル」選択に使う。
      // sightingMap は API /api/sighting-cells から取得したもの。
      const paintCell = (
        meshCode: string,
        s: number,
      ): { color: string; rank: number } | null => {
        const sCount = sightingMap?.get(meshCode) ?? 0;
        if (sCount >= ALERT_SIGHTING_THRESHOLDS.red)
          return { color: ALERT_DISPLAY_COLOR.high, rank: 9 };
        if (sCount >= ALERT_SIGHTING_THRESHOLDS.orange)
          return { color: ALERT_DISPLAY_COLOR.elevated, rank: 8 };
        if (sCount >= ALERT_SIGHTING_THRESHOLDS.amber)
          return { color: ALERT_DISPLAY_COLOR.moderate, rank: 7 };
        const habitat = kumamoriLevel(s, levelThresholdsRef.current);
        const lvl = sCount >= 1 ? maxLevel(habitat, "low") : habitat;
        switch (lvl) {
          case "high":
            return { color: HABITAT_DISPLAY_COLOR.high, rank: 4 };
          case "elevated":
            return { color: HABITAT_DISPLAY_COLOR.elevated, rank: 3 };
          case "moderate":
            return { color: HABITAT_DISPLAY_COLOR.moderate, rank: 2 };
          case "low":
            return { color: HABITAT_DISPLAY_COLOR.low, rank: 1 };
          default:
            return null; // safe / unknown
        }
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
        // LOD: 3×3 セルを集約して代表色 (最も深刻なセルの色) で描く
        type LodBucket = {
          minLat: number;
          maxLat: number;
          minLon: number;
          maxLon: number;
          maxRank: number;
          color: string;
        };
        const buckets = new Map<string, LodBucket>();
        const latBinSize = MESH_LAT_STEP * LOD_STEP;
        const lonBinSize = MESH_LON_STEP * LOD_STEP;
        const accumulate = (
          lat: number,
          lon: number,
          paint: { color: string; rank: number } | null,
        ) => {
          if (!paint) return;
          const rank = paint.rank;
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
              color: paint.color,
            });
          } else {
            if (cellMinLat < b.minLat) b.minLat = cellMinLat;
            if (cellMaxLat > b.maxLat) b.maxLat = cellMaxLat;
            if (cellMinLon < b.minLon) b.minLon = cellMinLon;
            if (cellMaxLon > b.maxLon) b.maxLon = cellMaxLon;
            if (rank > b.maxRank) {
              b.maxRank = rank;
              b.color = paint.color;
            }
          }
        };
        for (const m of meshes) {
          if (m.lat < south || m.lat > north) continue;
          if (m.lon < west || m.lon > east) continue;
          accumulate(m.lat, m.lon, paintCell(m.m, m.s));
        }
        for (const c of sightingOnlyCells) {
          accumulate(c.lat, c.lon, paintCell(c.m, 0));
        }
        let drawn = 0;
        for (const b of buckets.values()) {
          const color = b.color;
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
        const paint = paintCell(m.m, m.s);
        if (!paint) continue;

        const color = paint.color;
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
        const paint = paintCell(c.m, 0);
        if (!paint) continue;
        const color = paint.color;
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

      const canvas = pinCanvasRef.current;
      if (!canvas) return;
      // モバイルはタップ領域を確保するためピンを大きく描く (Apple HIG: 最低 44pt の指針)。
      // canvas renderer は描画半径がそのままヒット判定に使われるので、
      // 視覚サイズを上げることが押しやすさにも直結する。
      // さらに、ズームインしたときは混雑が減るので半径を 1.5〜2.0 倍にして
      // 親指でも確実に拾えるサイズへ。低ズームは大量描画を避けるため等倍。
      const isNarrow =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;
      const z = map.getZoom();
      const zoomBoost = z >= 13 ? 2.0 : z >= 11 ? 1.5 : 1.0;
      // 出没ピンは出どころ (公式/報道/市民) も頭数も区別せず一律の見た目に
      // 統一する。種別・頭数はクリック時のポップアップで示す。地図では
      // 「どこで出たか」だけを等価に見せ、色や大きさで煽らない方針。
      const baseR0 = isNarrow ? 8 : 5;
      const pinR = Math.round(baseR0 * zoomBoost);
      const borderWeight = isNarrow ? 1.6 : 1.2;
      // bounds 内のレコードを先に集めてから均等サンプリング。
      // recs は日付降順ソート済み。早い者勝ち break で打ち切ると、
      // 縮小時 (全国 in-bounds) に古めのデータを持つ県 (例: 岩手) のピンが
      // すっぽり抜ける。bounds 内の全域から均等に間引く。
      //
      // 同一座標の重なり解消: 「大滝」等の地区名が日付をまたいで同じ点に
      // ジオコードされると、複数日の出没ピンが完全に重なって描画される。
      // すると最新 (新着) ピンの青ハローが、クリックスナップで開く古いピンの
      // ポップアップと食い違い「古い事案が新着に見える」誤解を生む。
      // 地図では 1 座標につき最新の出没 1 件だけを描く (件数集計とは別経路)。
      const bestByCoord = new Map<string, KumaRecord>();
      for (const r of recs) {
        if (r.lat < south || r.lat > north) continue;
        if (r.lon < west || r.lon > east) continue;
        const key = `${r.lat.toFixed(5)}|${r.lon.toFixed(5)}`;
        const cur = bestByCoord.get(key);
        if (
          !cur ||
          r.date > cur.date ||
          (r.date === cur.date && (r.ingestedAt ?? 0) > (cur.ingestedAt ?? 0))
        ) {
          bestByCoord.set(key, r);
        }
      }
      const inBounds: KumaRecord[] = [...bestByCoord.values()];
      const toRender =
        inBounds.length <= maxPins
          ? inBounds
          : Array.from({ length: maxPins }, (_, i) =>
              inBounds[Math.floor((i * inBounds.length) / maxPins)],
            );
      const nowMs = Date.now();
      for (const r of toRender) {
        // ピンの色で鮮度を表す: 直近1週間の出没は目立つローズ系の赤 (#e11d48)、
        // それ以前は一律ダークブラウン (#78350f)。出どころ (公式/報道/市民) の別は
        // ポップアップのバッジで示す。「直近1週間」= 出没日が RECENT_EVENT_DAYS 日
        // 以内 (掲載時刻は使わない)。
        const PIN_OLD = "#78350f";
        const PIN_RECENT = "#e11d48";
        const isFresh = isRecentSighting(r, nowMs);
        const fill = isFresh ? PIN_RECENT : PIN_OLD;
        const baseR = pinR;

        const openPopup = (e: unknown) => {
          (e as unknown as LeafletMouseEvent).originalEvent?.stopPropagation?.();
          showRecordPopup(L, r);
        };

        // 直近1週間はヒートマップの暖色 (黄橙赤) の上でも埋もれないよう、白いハローを
        // 背後に敷いてから濃い色ドットを重ね、少し大きめ + 白フチで「光って新しい」印象に。
        if (isFresh) {
          const halo: CircleMarker = L.circleMarker([r.lat, r.lon], {
            radius: baseR + 3.5,
            stroke: false,
            fillColor: "#ffffff",
            fillOpacity: 0.9,
            renderer: canvas,
          });
          halo.on("click", openPopup);
          halo.addTo(layer);
        }

        const marker: CircleMarker = L.circleMarker([r.lat, r.lon], {
          radius: isFresh ? baseR + 1 : baseR,
          color: "#ffffff",
          weight: borderWeight,
          fillColor: fill,
          fillOpacity: isFresh ? 1 : 0.9,
          renderer: canvas,
        });
        marker.on("click", openPopup);
        marker.addTo(layer);
      }
    });
  };

  // ポップアップ HTML を生成。lite レコード (詳細フィールド欠落) でも壊れないよう
  // 各フィールドを ?? でガードする。詳細取得後にこの HTML で差し替える。
  const buildPopupHtml = (r: KumaRecord): string => {
    // 信頼性バッジ: isOfficial が明示的に false のものだけ「報道」と表示し、
    // それ以外 (true・undefined) は公式情報として扱う。undefined は旧
    // スナップショットの後方互換 (公式由来のみだった頃のデータ) のため。
    const isCitizen = r.sourceKind === "citizen";
    const isNews = !isCitizen && r.isOfficial === false;
    const sourceBadge = isCitizen
      ? `<span style="display:inline-block;background:#ede9fe;color:#5b21b6;border:1px solid #ddd6fe;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px">市民投稿</span>`
      : isNews
        ? `<span style="display:inline-block;background:#fef3c7;color:#92400e;border:1px solid #fcd34d;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px">報道</span>`
        : `<span style="display:inline-block;background:#dcfce7;color:#166534;border:1px solid #86efac;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px">公式</span>`;
    // 最近バッジ: 出没日が直近 N 日以内なら「本日 / 昨日 / N日前 出没」を出す。
    // 掲載時刻ではなく出没日を基準にする (スクレイプ周期に揺れないため)。
    const recentLabel = recentSightingLabel(r.date, Date.now());
    const freshBadge = recentLabel
      ? `<span style="display:inline-block;background:#dbeafe;color:#1e3a8a;border:1px solid #93c5fd;border-radius:9999px;padding:1px 6px;font-size:10px;font-weight:600;margin-left:4px" title="出没日を基準にした鮮度です">${recentLabel} 出没</span>`
      : "";
    const sourceLink = r.sourceUrl
      ? `<div style="margin-top:4px;font-size:11px"><a href="${escapeHtml(r.sourceUrl)}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:underline">元記事を開く ↗</a></div>`
      : "";
    // 市民投稿の写真。タップで原寸を別タブで開ける。
    const photoBlock = r.photoUrl
      ? `<a href="${escapeHtml(r.photoUrl)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHtml(r.photoUrl)}" alt="投稿写真" loading="lazy" style="margin-top:6px;width:100%;max-height:160px;object-fit:cover;border-radius:6px;display:block" /></a>`
      : "";
    const place = [r.prefectureName, r.cityName].filter(Boolean).join(" ");
    // 選択地からの距離。地図には「選択地(赤ピン)のカード」と「タップした出没の
    // ポップアップ」が同時に出るが、両者が別の場所を指していることが分かりにくく、
    // 離れた出没を見ているのにカードが「情報なし」に見える、という誤読があった。
    // 2つの関係を一行で示す。カードの「最近の目撃」は10km圏なので、この距離が
    // その件数に含まれるかどうかの判断にも使える。
    const sel = selectedLocationLatestRef.current;
    const distanceLine = sel
      ? (() => {
          const km = haversineKm(sel.lat, sel.lon, r.lat, r.lon);
          // 1km未満は50m刻み、10km未満は小数1桁、それ以上は整数。
          // 先に丸めてから桁を選ばないと 9.96km が「約10.0km」になり、
          // 隣の「約12km」と表記が揃わない。
          const rounded = Number(km.toFixed(1));
          const text =
            km < 1
              ? `約${Math.max(50, Math.round((km * 1000) / 50) * 50)}m`
              : rounded < 10
                ? `約${rounded.toFixed(1)}km`
                : `約${Math.round(km)}km`;
          return `<div style="margin-top:2px;font-size:11px;color:#78716c">選択地から ${text}</div>`;
        })()
      : "";
    const headCount =
      typeof r.headCount === "number" && r.headCount > 0
        ? `<div>${r.headCount}頭</div>`
        : "";
    // 同一地区を最新1件に集約したときの件数。「(最新)」であることと合わせて示し、
    // 「別日に複数ピンで水増し」の誤解を防ぐ。
    const mergedLine =
      typeof r.mergedCount === "number" && r.mergedCount > 1
        ? `<div style="margin-top:2px;font-size:11px;color:#b45309">この付近で ${r.mergedCount} 日 出没あり（最新を表示）</div>`
        : "";
    return `<div style="min-width:180px;font-size:13px;line-height:1.7">
      <b>${escapeHtml(place)}</b>${freshBadge}${sourceBadge}
      ${r.sectionName ? `<div style="color:#555;font-size:12px">${escapeHtml(r.sectionName)}</div>` : ""}
      <div>${escapeHtml(r.date)}${r.time ? ` ${escapeHtml(r.time)}頃` : ""}</div>${headCount}
      ${mergedLine}
      ${distanceLine}
      ${r.comment ? `<div style="margin-top:4px;font-size:12px;border-top:1px solid #eee;padding-top:4px">${escapeHtml(r.comment)}</div>` : ""}
      ${photoBlock}
      ${sourceLink}
    </div>`;
  };

  const showRecordPopup = (L: typeof import("leaflet"), r: KumaRecord) => {
    const map = mapRef.current;
    if (!map) return;
    if (!popupRef.current) {
      popupRef.current = L.popup({ maxWidth: 280, autoPan: true });
    }
    const popup = popupRef.current;
    const key = String(r.id);
    // 詳細が既に手元にある (full レコード or キャッシュ済み) ならそのまま表示。
    // lite レコードは comment 等が実行時 undefined (型上は必須なので Partial で判定)。
    const hasFull = (r as Partial<KumaRecord>).comment !== undefined;
    const detail = hasFull ? r : detailCacheRef.current.get(key);
    if (detail) {
      popup.setLatLng([r.lat, r.lon]).setContent(buildPopupHtml(detail)).openOn(map);
      return;
    }
    // lite レコード: まず分かる範囲 + 「読み込み中」を出し、id で詳細取得後に差し替える。
    const recentLabel = recentSightingLabel(r.date, Date.now());
    const loading = `<div style="min-width:180px;font-size:13px;line-height:1.7">
      <b>${escapeHtml(r.prefectureName ?? "")}</b>
      <div>${escapeHtml(r.date)}${recentLabel ? `（${recentLabel} 出没）` : ""}</div>
      <div style="color:#888;font-size:12px;margin-top:4px">詳細を読み込み中…</div>
    </div>`;
    popup.setLatLng([r.lat, r.lon]).setContent(loading).openOn(map);
    // lat/lon をヒントとして渡す。news の id は過去に重複があり、同一 id に
    // 別地域のレコードが複数ぶら下がるため、id だけだと別のピンの詳細が返る
    // (岡山のピンに北海道の記事が出る等)。座標で同一 id 内を曖昧さ解消する。
    fetch(
      `/api/kuma/${encodeURIComponent(key)}?lat=${r.lat}&lon=${r.lon}`,
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { record?: KumaRecord } | null) => {
        const rec = data?.record;
        if (!rec) {
          // フォールバック: 手元の lite 情報だけで最低限表示。
          popup.setContent(buildPopupHtml(r));
          return;
        }
        detailCacheRef.current.set(key, rec);
        // まだ同じポップアップが開いている時だけ差し替える (連続タップ対策)。
        if (map.hasLayer(popup)) popup.setContent(buildPopupHtml(rec));
      })
      .catch(() => {
        popup.setContent(buildPopupHtml(r));
      });
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

      // 選択地点 (teardrop の赤ピン)。
      // ★ closure の selectedLocation ではなく ref の最新値を読む。GPS 更新で
      //   この関数が別 effect から呼ばれるとき、closure 側が古い(null)ままだと
      //   赤ピンが消える回があった(モバイルで「赤ピンが出ない」の原因)。
      const selForPin = selectedLocationLatestRef.current;
      if (selForPin) {
        const isGps = selForPin.source === "gps";
        // GPS と currentLocation が同じ位置なら赤ピンは省略 (二重表示を避ける)
        const sameAsCurrent =
          isGps &&
          currentLocation &&
          Math.abs(currentLocation.lat - selForPin.lat) < 1e-6 &&
          Math.abs(currentLocation.lon - selForPin.lon) < 1e-6;
        if (!sameAsCurrent) {
          // 通知/共有リンク由来(url)は、同じ場所に出没ピンが重なっても必ず目立つ
          // よう、赤ピンを一回り大きく + 白フチ太め + 足元にパルスの輪を出す。
          // これが「今アクセスした地点」の目印。
          const fromLink = selForPin.source === "url";
          const w = fromLink ? 36 : 28;
          const h = fromLink ? 46 : 36;
          const pinIcon = L.divIcon({
            className: "kuma-pin",
            html: `<svg width="${w}" height="${h}" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.3 21.7 0 14 0z" fill="#dc2626" stroke="white" stroke-width="${fromLink ? 3 : 2}"/><circle cx="14" cy="13" r="4.5" fill="white"/></svg>`,
            iconSize: [w, h],
            iconAnchor: [w / 2, h],
          });
          if (fromLink) {
            // 足元に脈打つ輪 (重なった出没ピンの中でも位置が一目で分かる)
            L.circleMarker([selForPin.lat, selForPin.lon], {
              radius: 16,
              color: "#dc2626",
              weight: 2,
              opacity: 0.7,
              fillColor: "#dc2626",
              fillOpacity: 0.12,
              interactive: false,
            }).addTo(layer);
          }
          L.marker([selForPin.lat, selForPin.lon], {
            icon: pinIcon,
            interactive: false,
            keyboard: false,
            // 出没ピン(既定 pane)より必ず上に描く
            zIndexOffset: 1000,
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

  // 通知リンク (s=<id>) で来たとき、その出没ピンの吹き出しを一度だけ開く。
  //
  // 同じ場所に複数の出没が重なる(原町・梅田川で13件が同一座標 等)ため、地図に
  // 描かれた代表ピンをタップすると別の(古い)出没が開いてしまう。そこで「通知
  // された当の記録」を id で確実に開く:
  //   1. 地図の表示セット(records)に居ればそれを開く。
  //   2. 居ない(取り込み直後でまだ載っていない/期間フィルタ外)ときは
  //      /api/kuma/[id] で1件だけ取得して開く。座標ヒントを付けて同一 id の
  //      取り違えを防ぐ。
  // map 準備前は mapReady=false で待ち、準備後に確実に走らせる。
  const focusExactRef = useRef<string | null>(null); // 正確な記録を開いたか
  const focusFetchRef = useRef<string | null>(null); // フェッチ開始済みか
  useEffect(() => {
    const id = focusSightingId;
    if (!id || focusExactRef.current === id) return;
    if (!mapReady || !mapRef.current) return;
    const map = mapRef.current;
    // flyTo(0.8s)の最中に開くと中心がずれて閉じたように見える回があるので、
    // 開いた上で地図が落ち着いた後(moveend)にもう一度開く(保険で2秒後に解除)。
    const open = (rec: KumaRecord, isExact: boolean) => {
      if (isExact) focusExactRef.current = id;
      import("leaflet").then((L) => {
        if (focusExactRef.current === id && !isExact) return; // 既に正確版を表示済み
        showRecordPopup(L, rec);
        const reopen = () => showRecordPopup(L, rec);
        map.once("moveend", reopen);
        window.setTimeout(() => map.off("moveend", reopen), 2000);
      });
    };

    const recs = recordsRef.current;
    // 1. 正確な記録が地図の表示セットに居れば、それを開いて確定。
    const exact = recs.find((r) => String(r.id) === String(id));
    if (exact) {
      open(exact, true);
      return;
    }
    // 2. 表示セットに無い(取り込み直後で未ロード/重複排除で代表から外れた)。
    //    ここで「近傍で一番近いピン」を仮表示してはいけない:
    //    通知された当の記録がまだ未ロードなとき、"一番近い" は必然的に別の
    //    (多くは古い公式)記録になり、通知を開くと 1〜2km 離れた 1ヶ月前の
    //    出没が開く不具合になっていた(秋田市 下浜羽川で 1.4km 先の 6/2 公式、
    //    寺内蛭根で 200m 先の 6/26 公式)。別の出没を「通知された記録」の
    //    ように見せるのは誤りなので、代替表示はせず、必ず id 一致で取得する。
    //    取得できるまで吹き出しは出さない(赤ピンで地点だけ示す)。
    const sel = selectedLocationLatestRef.current;
    if (focusFetchRef.current !== id) {
      focusFetchRef.current = id;
      const hint = sel
        ? `?lat=${sel.lat.toFixed(5)}&lon=${sel.lon.toFixed(5)}`
        : "";
      // 取り込み直後は生データのキャッシュ反映が遅れ 1 回では取れないことが
      // あるので、数回リトライして正確な記録を待つ(別記録は出さない)。
      const tryFetch = (attempt: number) => {
        if (focusExactRef.current === id) return;
        fetch(`/api/kuma/${encodeURIComponent(id)}${hint}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((j) => {
            const rec = j?.record as KumaRecord | undefined;
            if (rec && typeof rec.lat === "number") {
              open(rec, true);
            } else if (attempt < 4) {
              window.setTimeout(() => tryFetch(attempt + 1), 2500);
            }
          })
          .catch(() => {
            if (attempt < 4) window.setTimeout(() => tryFetch(attempt + 1), 2500);
          });
      };
      tryFetch(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusSightingId, mapReady, records]);

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
    // 通知リンク等が z= を指定していれば、その近さで開く (出没地点が画面に
    // 大きく出て、手で拡大しなくても場所が分かる)。無ければ従来どおり
    // 「今のズームか最低10」で寄る。
    const targetZoom =
      typeof selectedLocation.zoom === "number"
        ? selectedLocation.zoom
        : Math.max(map.getZoom(), 10);
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
    // mapReady を依存に含めるのが重要: URL 由来の selectedLocation は地図の
    // 初期化(import leaflet)より前に入ることがあり、その回は map/レイヤ未準備で
    // renderSelectionLayer(赤ピン) も flyTo も空振りする。初期化完了(mapReady)で
    // もう一度走らせ、赤ピンを確実に描く。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedLocation?.lat,
    selectedLocation?.lon,
    selectedLocation?.source,
    mapReady,
  ]);

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
      setMapReady(true);

      // map 生成時点で既に selectedLocation がある (URL ?lat=&lon= 由来 / GPS 即解決 /
      // sessionStorage 復元 など) 場合、selectedLocation の useEffect は map 未初期化の
      // タイミングで早期 return しているため、ここで初回 setView を明示的に発火させる。
      // ★ ref から最新値を読むこと: import("leaflet") の解決待ち中に state 更新があると
      //   useEffect closure の selectedLocation (mount 時点 = null) には反映されないので、
      //   常に最新値が入る selectedLocationLatestRef を介して読む。
      const initSel = selectedLocationLatestRef.current;
      if (initSel) {
        const isMobile =
          typeof window !== "undefined" ? window.innerWidth < 640 : false;
        // 通知リンクが z= を指定していれば、その近さで初期表示する。
        const targetZoom =
          typeof initSel.zoom === "number" ? initSel.zoom : 12;
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

      // Canvas レンダラーを 1 度だけ生成し、mesh → pin の順で map に追加して
      // 重なり順 (ピンがヒートマップの上) を固定する。以降の再描画ではこの
      // インスタンスを使い回すため、canvas 要素が増殖しない。
      const meshCanvas = L.canvas({ padding: 0.1 });
      const pinCanvas = L.canvas({ padding: 0.1 });
      meshCanvas.addTo(map);
      pinCanvas.addTo(map);
      meshCanvasRef.current = meshCanvas;
      pinCanvasRef.current = pinCanvas;

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
            if (distSq > bestDistSq) continue;
            // 同一座標に複数日の出没が重なるとき (距離が同じ) は、描画している
            // 代表と同じ「最新の出没」を開く。距離が近い方が優先なのは従来通り。
            if (
              bestRec &&
              distSq === bestDistSq &&
              !(
                r.date > bestRec.date ||
                (r.date === bestRec.date &&
                  (r.ingestedAt ?? 0) > (bestRec.ingestedAt ?? 0))
              )
            ) {
              continue;
            }
            bestRec = r;
            bestDistSq = distSq;
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
      meshCanvasRef.current = null;
      pinCanvasRef.current = null;
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
