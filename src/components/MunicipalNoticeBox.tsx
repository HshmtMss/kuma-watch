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

export default function MunicipalNoticeBox({
  entry,
  prefCode,
  lat,
  lon,
  muniName,
}: Props) {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
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
      .then((data) => {
        if (!cancelled && data) setSummary(data);
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

  if (!summary && !loading) return null;

  return (
    <div>
      {summary && summary.notices.length > 0 && (
        <div>
          <div className="mb-1.5 text-xs font-semibold text-gray-700">
            📰 自治体からのお知らせ
          </div>
          <ul className="space-y-1.5">
            {summary.notices.map((n, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-800"
              >
                <span className="shrink-0 rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-800">
                  {n.date}
                </span>
                <span className="min-w-0 flex-1 leading-relaxed">
                  {n.headline}
                </span>
              </li>
            ))}
          </ul>
          {summary.sourceUrls[0] && (
            <a
              href={summary.sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[11px] text-blue-600 hover:underline"
            >
              公式ページで全件を見る →
            </a>
          )}
        </div>
      )}

      {loading && !summary && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
          お知らせを取得中...
        </div>
      )}
    </div>
  );
}
