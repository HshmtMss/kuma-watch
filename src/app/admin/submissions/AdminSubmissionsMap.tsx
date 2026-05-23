"use client";

import { useEffect, useRef } from "react";
import type { LayerGroup, Map as LMap, PopupEvent } from "leaflet";

/**
 * 管理画面の地図ビュー。投稿をステータス別の色ピンで表示し、ピンの
 * ポップアップ内から直接 承認 / 却下 / 削除 ができる (raw Leaflet)。
 * Leaflet CSS は layout.tsx で CDN 読込済み。
 */

export type MapItem = {
  id: string;
  lat: number;
  lon: number;
  situation: string;
  status: "pending" | "approved" | "rejected";
  headCount: number;
  occurredAt: string;
  prefectureName?: string;
  cityName?: string;
  comment?: string;
  photoUrl?: string;
};

type Decision = "approve" | "reject" | "delete";

const STATUS_COLOR: Record<MapItem["status"], string> = {
  pending: "#f59e0b",
  approved: "#10b981",
  rejected: "#ef4444",
};
const STATUS_LABEL: Record<MapItem["status"], string> = {
  pending: "承認待ち",
  approved: "公開中",
  rejected: "却下",
};
const SITUATION_LABEL: Record<string, string> = {
  sight: "目撃",
  trace: "痕跡",
  damage: "物損被害",
  injury: "人身被害",
};

function esc(s: string): string {
  return s.replace(
    /[&<>"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] ?? c,
  );
}

export default function AdminSubmissionsMap({
  items,
  onModerate,
}: {
  items: MapItem[];
  onModerate: (id: string, decision: Decision) => void;
}) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const onModRef = useRef(onModerate);
  onModRef.current = onModerate;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = await import("leaflet");
      if (cancelled || !elRef.current) return;
      if (!mapRef.current) {
        const map = L.map(elRef.current).setView([37.5, 138], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap",
          maxZoom: 18,
        }).addTo(map);
        mapRef.current = map;
        layerRef.current = L.layerGroup().addTo(map);
        // ポップアップ内ボタンの click を React コールバックに繋ぐ
        map.on("popupopen", (e: PopupEvent) => {
          const node = e.popup.getElement();
          if (!node) return;
          node.querySelectorAll<HTMLButtonElement>("button[data-action]").forEach(
            (btn) => {
              btn.addEventListener(
                "click",
                () => {
                  const id = btn.getAttribute("data-id");
                  const action = btn.getAttribute("data-action") as Decision;
                  if (id) onModRef.current(id, action);
                  mapRef.current?.closePopup();
                },
                { once: true },
              );
            },
          );
        });
      }
      const layer = layerRef.current;
      if (!layer) return;
      layer.clearLayers();
      const bounds: [number, number][] = [];
      for (const s of items) {
        const marker = L.circleMarker([s.lat, s.lon], {
          radius: 8,
          color: "#ffffff",
          weight: 2,
          fillColor: STATUS_COLOR[s.status],
          fillOpacity: 0.9,
        });
        const sit = SITUATION_LABEL[s.situation] ?? s.situation;
        const photo = s.photoUrl
          ? `<img src="${esc(s.photoUrl)}" alt="投稿写真" style="margin-top:6px;width:100%;max-height:140px;object-fit:cover;border-radius:6px;display:block" />`
          : "";
        const btn = (action: Decision, label: string, bg: string) =>
          `<button data-action="${action}" data-id="${esc(s.id)}" style="flex:1;border:0;border-radius:6px;padding:6px 4px;font-size:12px;font-weight:600;color:#fff;background:${bg};cursor:pointer">${label}</button>`;
        const html = `<div style="min-width:210px;font-size:13px;line-height:1.6">
          <div style="font-weight:700">${esc(s.prefectureName ?? "")} ${esc(s.cityName ?? "")}</div>
          <div style="color:#666;font-size:12px">${STATUS_LABEL[s.status]} ・ ${esc(sit)} ・ ${s.headCount}頭</div>
          <div style="color:#666;font-size:12px">${esc(s.occurredAt.slice(0, 16).replace("T", " "))}</div>
          ${s.comment ? `<div style="margin-top:4px">${esc(s.comment)}</div>` : ""}
          ${photo}
          <div style="margin-top:8px;display:flex;gap:6px">
            ${btn("approve", "承認", "#059669")}
            ${btn("reject", "却下", "#d97706")}
            ${btn("delete", "削除", "#dc2626")}
          </div>
        </div>`;
        marker.bindPopup(html, { maxWidth: 260 });
        marker.addTo(layer);
        bounds.push([s.lat, s.lon]);
      }
      if (bounds.length > 0) {
        try {
          mapRef.current.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
        } catch {
          /* 単一点などで失敗しても無視 */
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [items]);

  useEffect(
    () => () => {
      mapRef.current?.remove();
      mapRef.current = null;
    },
    [],
  );

  return (
    <div
      ref={elRef}
      className="w-full rounded-xl border border-stone-200"
      style={{ height: 460 }}
    />
  );
}
