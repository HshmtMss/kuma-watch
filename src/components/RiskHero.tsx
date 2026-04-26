"use client";

import { useEffect, useState } from "react";
import type { RiskLevel } from "@/lib/types";
import {
  LEVEL_DESCRIPTION,
  RISK_LEVEL_COLOR,
  RISK_LEVEL_COLOR_PALE,
  RISK_LEVEL_LABEL,
} from "@/lib/score";
import type { SummaryResponse } from "@/app/api/summary/route";

type Props = {
  level: RiskLevel;
  prefCode?: string;
  lat: number;
  lon: number;
  muniName?: string;
  /** 周辺で観測された最新の出没日 (期間フィルタ後)。null なら該当なし。 */
  latestNearbyDate?: string | null;
  /** 「周辺」の半径 (km) — chip / "なし" メッセージの表示に使う */
  nearbyRadiusKm?: number;
};

const LEVELS: RiskLevel[] = ["safe", "low", "moderate", "elevated", "high"];

/** 過去日付の相対表記 (今日 / 昨日 / N日前 / N週間前 / Nヶ月前)。
 *  YYYY-MM-DD 形式を想定。パース失敗 / 未来日は null。 */
function relativeDays(dateStr: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateStr);
  if (!m) return null;
  const target = new Date(
    Number(m[1]),
    Number(m[2]) - 1,
    Number(m[3]),
  ).getTime();
  if (Number.isNaN(target)) return null;
  const now = Date.now();
  const diffMs = now - target;
  if (diffMs < 0) return null;
  const day = 24 * 60 * 60 * 1000;
  const days = Math.floor(diffMs / day);
  if (days <= 0) return "今日";
  if (days === 1) return "昨日";
  if (days < 7) return `${days}日前`;
  if (days < 30) return `${Math.floor(days / 7)}週間前`;
  if (days < 365) return `${Math.floor(days / 30)}ヶ月前`;
  return `${Math.floor(days / 365)}年前`;
}

/** ISO datetime 文字列から相対表記 (5分前 / 2時間前 / 6時間前 / 1日前 ...) を返す。 */
function relativeTime(iso: string): string | null {
  const target = new Date(iso).getTime();
  if (Number.isNaN(target)) return null;
  const diffMs = Date.now() - target;
  if (diffMs < 0) return null;
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return "たった今";
  if (min < 60) return `${min}分前`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}時間前`;
  const days = Math.floor(hr / 24);
  if (days === 1) return "昨日";
  if (days < 7) return `${days}日前`;
  return null; // それ以降は表示しない
}

export default function RiskHero({
  level,
  prefCode,
  lat,
  lon,
  muniName,
  latestNearbyDate = null,
  nearbyRadiusKm = 10,
}: Props) {
  // 危険度 badge はカードヘッダー側で表示済み。このヒーロー部では
  // 5段階バー + 一行説明 + LLM summary だけに絞って視認性を上げる。
  const description =
    level === "unknown" ? "情報取得中..." : LEVEL_DESCRIPTION[level];

  // LLM 文脈補足: /api/summary の summary + 公式サイト URL を引く
  const [summary, setSummary] = useState<string | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [prefName, setPrefName] = useState<string | null>(null);
  const [fetchedAt, setFetchedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!prefCode) return;
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag before external fetch
    setLoading(true);
    const params = new URLSearchParams({ prefCode });
    if (Number.isFinite(lat)) params.set("lat", lat.toFixed(5));
    if (Number.isFinite(lon)) params.set("lon", lon.toFixed(5));
    if (muniName) params.set("muniName", muniName);
    fetch(`/api/summary?${params.toString()}`)
      .then((r) => (r.ok ? (r.json() as Promise<SummaryResponse>) : null))
      .then((data) => {
        if (cancelled || !data) return;
        if (data.summary) setSummary(data.summary);
        if (data.sourceUrls?.[0]) setSourceUrl(data.sourceUrls[0]);
        if (data.prefName) setPrefName(data.prefName);
        if (data.fetchedAt) setFetchedAt(data.fetchedAt);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [prefCode, lat, lon, muniName]);

  // 最新目撃 chip は RiskPanel が渡す periodNearbyRecent (ユーザーの期間フィルタ後)
  // から計算する。/api/summary に依存しないので、prefCode 未登録地点でも表示される。
  const latestRel = latestNearbyDate ? relativeDays(latestNearbyDate) : null;
  const fetchedRel = fetchedAt ? relativeTime(fetchedAt) : null;

  return (
    <section className="px-4 py-3">
      {/* バー上部: 「危険度」ラベル + 最新目撃 (相対時間 chip) */}
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
          危険度
        </span>
        {latestRel ? (
          <span
            className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-900"
            title={`周辺 ${nearbyRadiusKm}km・直近の出没記録: ${latestNearbyDate}`}
          >
            🕓 最新の目撃: {latestRel}
          </span>
        ) : (
          <span className="text-[10px] text-stone-400">
            周辺 {nearbyRadiusKm}km・直近の記録なし
          </span>
        )}
      </div>

      {/* 5 段階バー: 選択中の level だけ solid 色、他は pale 色 (Flutter 同等) */}
      <div className="flex gap-1">
        {LEVELS.map((lv) => (
          <div
            key={lv}
            className="h-2.5 flex-1 rounded-full"
            style={{
              background:
                lv === level ? RISK_LEVEL_COLOR[lv] : RISK_LEVEL_COLOR_PALE[lv],
            }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[9px] text-stone-500">
        {LEVELS.map((lv) => (
          <span
            key={lv}
            className={
              lv === level ? "font-semibold text-stone-900" : undefined
            }
          >
            {RISK_LEVEL_LABEL[lv]}
          </span>
        ))}
      </div>

      {/* 一行説明 (定期的に出没報告がある地域です 等) — 文字色はグレー系で統一 */}
      <p className="mt-3 text-center text-sm font-medium text-stone-700">
        {description}
      </p>

      {/* 自治体公式情報の要約 + 公式サイトリンク */}
      {(summary || loading) && (
        <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <span className="flex items-center gap-1 text-[11px] font-semibold text-blue-900">
              <span aria-hidden>🏛</span>
              {prefName ? `${prefName}公式情報の要約` : "自治体公式情報の要約"}
            </span>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-blue-700 shadow-sm hover:bg-blue-100"
              >
                公式サイト →
              </a>
            )}
          </div>
          {summary ? (
            <p className="text-xs leading-relaxed text-gray-800">{summary}</p>
          ) : (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              状況を要約中...
            </div>
          )}
          {fetchedRel && (
            <div className="mt-1.5 text-right text-[9px] text-blue-700/60">
              {fetchedRel}取得
            </div>
          )}
        </div>
      )}
    </section>
  );
}
