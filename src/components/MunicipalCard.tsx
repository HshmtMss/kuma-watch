"use client";

import { useEffect, useState } from "react";
import type { MunicipalEntry } from "@/data/municipalities";
import type { SummaryResponse } from "@/app/api/summary/route";

type Props = {
  entry: MunicipalEntry | undefined;
  lat?: number;
  lon?: number;
  muniName?: string;
};

const KIND_LABEL: Record<string, string> = {
  official_info: "公式情報",
  official_map: "公式マップ",
  official_app: "公式アプリ",
  open_data: "オープンデータ",
  social: "SNS",
  contact: "問い合わせ",
};

export default function MunicipalCard({ entry, lat, lon, muniName }: Props) {
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    if (!entry) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag before external fetch
    setLoadingSummary(true);
    const params = new URLSearchParams({ prefCode: entry.prefCode });
    if (typeof lat === "number" && Number.isFinite(lat)) params.set("lat", lat.toFixed(5));
    if (typeof lon === "number" && Number.isFinite(lon)) params.set("lon", lon.toFixed(5));
    if (muniName) params.set("muniName", muniName);
    fetch(`/api/summary?${params.toString()}`)
      .then((r) => (r.ok ? (r.json() as Promise<SummaryResponse>) : null))
      .then((data) => {
        if (!cancelled && data) setSummary(data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoadingSummary(false);
      });
    return () => {
      cancelled = true;
    };
  }, [entry, lat, lon, muniName]);

  if (!entry) {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
        この地域の自治体マスタ情報はまだ未登録です。今後追加予定です。
      </div>
    );
  }

  const speciesLabel = entry.bearSpecies
    .map((s) => (s === "higuma" ? "ヒグマ" : "ツキノワグマ"))
    .join("・");

  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="text-sm font-semibold text-blue-900">
          {entry.prefNameJa} のクマ情報
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-blue-200">
          {speciesLabel}
        </span>
      </div>

      {summary?.notices && summary.notices.length > 0 && (
        <div className="mb-3 rounded-lg bg-white p-3 ring-1 ring-blue-100">
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
            📰 直近のお知らせ
          </div>
          <ul className="space-y-1.5">
            {summary.notices.map((n, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-gray-800"
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
              className="mt-2 inline-block text-[10px] text-blue-600 hover:underline"
            >
              公式ページで全ての情報を見る →
            </a>
          )}
        </div>
      )}

      {loadingSummary ? (
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
          自治体情報を要約中...
        </div>
      ) : summary?.summary ? (
        <div className="mb-3 rounded-lg border-l-4 border-blue-400 bg-white p-3 text-sm leading-relaxed text-gray-800">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
            自治体発信の要約
            {summary.mode === "demo" && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-800 lowercase">
                demo
              </span>
            )}
          </div>
          {summary.summary}
          {typeof summary.nearbyCount === "number" && (
            <div className="mt-2 text-[10px] text-blue-700">
              周辺 5km / 直近 12 ヶ月の公式記録: {summary.nearbyCount} 件
              {summary.nearbyLatestDate ? `（最新 ${summary.nearbyLatestDate}）` : ""}
            </div>
          )}
          {summary.aggregate?.hasAggregate && (
            <div className="mt-1 text-[10px] text-emerald-700">
              {summary.aggregate.prefAnnualLatestFiscalYear &&
              summary.aggregate.prefAnnualLatestSighting
                ? `${summary.prefName} 令和${
                    summary.aggregate.prefAnnualLatestFiscalYear - 2018
                  }年度 県全体 ${summary.aggregate.prefAnnualLatestSighting.toLocaleString()} 件`
                : null}
              {summary.aggregate.muniBand
                ? ` / ${muniName ?? "この市町村"}: ${summary.aggregate.muniBand}`
                : null}
            </div>
          )}
          {summary.note && (
            <div className="mt-2 text-[10px] text-gray-400">{summary.note}</div>
          )}
        </div>
      ) : (
        <p className="mb-3 text-sm text-gray-700">{entry.summary}</p>
      )}

      <div className="space-y-1.5">
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700">
          公式リソース
        </div>
        {entry.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 rounded-md bg-white px-3 py-2 text-sm text-blue-800 ring-1 ring-blue-100 transition hover:ring-blue-300"
          >
            <span aria-hidden>🔗</span>
            <span className="flex-1 min-w-0">
              <span className="block font-medium">{link.label}</span>
              <span className="block truncate text-[10px] text-blue-500">
                {KIND_LABEL[link.kind] ?? link.kind}
                {link.note ? ` ・ ${link.note}` : ""}
              </span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-3 text-[10px] text-gray-500">
        最終確認: {entry.verifiedAt}
      </p>
    </div>
  );
}
