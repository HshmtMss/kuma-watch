/**
 * 予測（今後4週間の見通し）の「閾値アラート」ロジック。
 *
 * 既存の Web Push は「新規出没アラート」（出没が出たら通知）。これに対して
 * 本モジュールは「見通しが上位バンドに"上がった"ら通知」する先読みアラート。
 * B2B コンソールの中核（予測を"届けて動かす"レイヤー）。
 *
 * 配信チャネルには依存しない（純粋なロジック）。Web Push でも LINE でも、
 * 「どの地域に・何を送るべきか」をここで決め、送信は呼び出し側に委ねる。
 */
import type { AreaForecast, ForecastBand, Confidence } from "./forecast";
import { BAND_LABEL } from "./forecast";

export const BAND_RANK: Record<ForecastBand, number> = {
  low: 0,
  normal: 1,
  elevated: 2,
  high: 3,
};

// この水準以上で初めてアラート対象（normal/low は通知しない＝平時は静か）。
const ALERT_FLOOR: ForecastBand = "elevated";

/**
 * アラートを送るべきか。
 * 条件: (1) 新バンドが elevated 以上、(2) 前回バンドより上昇（上方クロッシング）、
 *       (3) 信頼度が low でない（データの薄い地域で誤報を出さない）。
 * 初回（前回記録なし）は normal を起点に判定するため、いきなり elevated/high なら通知。
 */
export function shouldForecastAlert(
  prevBand: ForecastBand | null,
  next: AreaForecast,
): boolean {
  if (BAND_RANK[next.band] < BAND_RANK[ALERT_FLOOR]) return false;
  if (next.confidence === "low") return false;
  const prevRank =
    prevBand !== null ? BAND_RANK[prevBand] : BAND_RANK.normal;
  return BAND_RANK[next.band] > prevRank;
}

/** 通知本文。来訪者・住民・スタッフ向けの落ち着いた文面（煽らない）。 */
export function forecastAlertMessage(
  areaName: string,
  forecast: Pick<AreaForecast, "band" | "vsTypicalPct">,
): { title: string; body: string } {
  const label = BAND_LABEL[forecast.band];
  const pct =
    forecast.vsTypicalPct !== null
      ? `（例年同期比 ${forecast.vsTypicalPct >= 0 ? "+" : ""}${forecast.vsTypicalPct}%）`
      : "";
  return {
    title: `${areaName} 今後4週間の出没見通し: ${label}`,
    body:
      `${areaName}周辺は今後4週間、出没が${label}の見通しです${pct}。` +
      `入山・来訪前に最新の出没情報と対策をご確認ください。`,
  };
}

/**
 * 信頼度を「通知に足るか」で粗くフィルタしたい時のヘルパ。
 * low は誤報リスクが高いので除外する方針（shouldForecastAlert にも内蔵）。
 */
export function isAlertableConfidence(c: Confidence): boolean {
  return c !== "low";
}
