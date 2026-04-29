"use client";

import type { RiskLevel } from "@/lib/types";
import {
  LEVEL_DESCRIPTION,
  RISK_LEVEL_COLOR,
  RISK_LEVEL_COLOR_PALE,
  RISK_LEVEL_LABEL,
} from "@/lib/score";

type Props = {
  /** 表示用の (格上げ後) レベル — 5段階バー / バッジで使う */
  level: RiskLevel;
  /** 生息域メッシュベースの素のレベル — 「定着個体」ファクトの記述に使う */
  baseLevel?: RiskLevel;
  /** 過去90日の目撃件数 (周辺 10km) — カード表示用 */
  count90d?: number;
  /** 「周辺」の半径 (km) — chip / "なし" メッセージの表示に使う */
  nearbyRadiusKm?: number;
};

const LEVELS: RiskLevel[] = ["safe", "low", "moderate", "elevated", "high"];

export default function RiskHero({
  level,
  baseLevel,
  count90d = 0,
  nearbyRadiusKm = 10,
}: Props) {
  // 表示レベル (= 格上げ後) と素レベル (= 生息域メッシュベース) を分けて扱う。
  // 「定着個体の記録」ファクトは素レベルで、ヴァーディクト/バーは表示レベル。
  const habitatLevel = baseLevel ?? level;
  const habitatDescription =
    habitatLevel === "unknown" ? "情報取得中..." : LEVEL_DESCRIPTION[habitatLevel];
  const verdictLabel = RISK_LEVEL_LABEL[level];
  const verdictColor = RISK_LEVEL_COLOR[level];
  const hasRecent = count90d > 0;

  return (
    <section className="px-4 pt-3 pb-2">
      {/* 1. ヴァーディクト — 横幅は 5 段階バーと一致 (=親要素の幅いっぱい) */}
      <div className="w-full">
        <div className="mb-1 ml-1 text-xs font-semibold text-stone-500">
          警戒レベル
        </div>
        <div
          className="flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-white shadow-sm"
          style={{ background: verdictColor }}
        >
          <span className="text-xl font-bold tracking-wide">
            {verdictLabel}
          </span>
        </div>
      </div>

      {/* 2. 5 段階バー — ラベルとバーは同じ flex 構造で対応セルが揃う */}
      <div className="mt-2.5 flex gap-1">
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
      <div className="mt-1 flex gap-1 text-[11px] text-stone-500">
        {LEVELS.map((lv) => (
          <span
            key={lv}
            className={`flex-1 text-center ${
              lv === level ? "font-semibold text-stone-900" : ""
            }`}
          >
            {RISK_LEVEL_LABEL[lv]}
          </span>
        ))}
      </div>

      {/* 3. 並列ファクト 2 行 — ラベル左寄せ・値右寄せで横幅を使い切る */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5">
          <div className="shrink-0 text-xs font-semibold text-stone-500">
            定着個体
          </div>
          <div className="min-w-0 flex-1 text-right text-sm font-medium text-stone-800">
            {habitatDescription}
          </div>
        </div>
        <div
          className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5 ${
            hasRecent
              ? "border-red-200 bg-red-50"
              : "border-stone-200 bg-stone-50"
          }`}
        >
          <div
            className={`shrink-0 text-xs font-semibold ${
              hasRecent ? "text-red-700" : "text-stone-500"
            }`}
          >
            最近の目撃
          </div>
          <div
            className={`min-w-0 flex-1 text-right text-sm font-medium ${
              hasRecent ? "text-red-900" : "text-stone-800"
            }`}
          >
            {hasRecent ? `${count90d} 件 / 周辺${nearbyRadiusKm}km` : `なし / 周辺${nearbyRadiusKm}km`}
          </div>
        </div>
      </div>

      {/* 格上げ注釈は撤去。バー位置で十分伝わるため。 */}

      {/* 自治体公式情報は MunicipalNoticeBox で要約とお知らせを一括表示 */}
    </section>
  );
}
