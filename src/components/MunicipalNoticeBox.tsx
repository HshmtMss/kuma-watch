"use client";

import { useEffect, useState } from "react";
import type { MunicipalEntry } from "@/data/municipalities";
import type { SummaryResponse } from "@/app/api/summary/route";

type Props = {
  entry?: MunicipalEntry;
  prefCode?: string;
  lat?: number;
  lon?: number;
  muniName?: string;
};

/**
 * 自治体公式情報の表示。/api/summary が返す要約 (LLM) と
 * 個別お知らせ一覧 (notices) を 1 つのカードで一括表示する。
 * 将来は自治体連携のリアルタイムプッシュ拠点として拡張予定。
 */
export default function MunicipalNoticeBox({
  entry,
  prefCode,
  lat,
  lon,
  muniName,
}: Props) {
  const [data, setData] = useState<SummaryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const code = entry?.prefCode ?? prefCode;

  useEffect(() => {
    if (!code) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag before external fetch
    setLoading(true);
    const params = new URLSearchParams({ prefCode: code });
    if (typeof lat === "number" && Number.isFinite(lat))
      params.set("lat", lat.toFixed(5));
    if (typeof lon === "number" && Number.isFinite(lon))
      params.set("lon", lon.toFixed(5));
    if (muniName) params.set("muniName", muniName);
    fetch(`/api/summary?${params.toString()}`)
      .then((r) => (r.ok ? (r.json() as Promise<SummaryResponse>) : null))
      .then((d) => {
        if (!cancelled && d) setData(d);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [code, lat, lon, muniName]);

  if (!code) return null;
  if (!data && !loading) return null;

  const prefName = data?.prefName;
  const summary = data?.summary;
  const notices = data?.notices ?? [];
  const sourceUrl = data?.sourceUrls?.[0];

  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-900">
          <span aria-hidden>🏛</span>
          {prefName ? `${prefName} 自治体からのお知らせ` : "自治体からのお知らせ"}
        </span>
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-blue-700 shadow-sm hover:bg-blue-100"
          >
            公式サイト →
          </a>
        )}
      </div>

      {summary && (
        <p className="text-sm leading-relaxed text-gray-800 sm:text-xs">
          {summary}
        </p>
      )}

      {notices.length > 0 && (
        <ul className="mt-2.5 space-y-1.5 border-t border-blue-100 pt-2.5">
          {notices.map((n, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed text-gray-800 sm:text-xs"
            >
              <span className="shrink-0 rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-blue-800">
                {n.date}
              </span>
              <span className="min-w-0 flex-1">{n.headline}</span>
            </li>
          ))}
        </ul>
      )}

      {loading && !data && (
        <div className="flex items-center gap-2 text-sm text-gray-500 sm:text-xs">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
          情報を取得中...
        </div>
      )}
    </div>
  );
}
