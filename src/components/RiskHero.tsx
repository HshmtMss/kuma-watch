"use client";

import type { ReactNode } from "react";
import type { RiskLevel } from "@/lib/types";
import {
  displayCategory,
  DISPLAY_CATEGORY_LABEL,
  DISPLAY_CATEGORY_STYLE,
  HABITAT_DISPLAY_COLOR,
  ALERT_DISPLAY_COLOR,
  type DisplayCategory,
} from "@/lib/score";

// 色塗りの意味を示す 6 段階バー (マップの塗り色と一致)。
// 左 (低) → 右 (高): 情報なし / 生息域 / 主要生息域 / 出没あり / やや多い / 多い。
const CATEGORY_BAR: { key: DisplayCategory; label: string; color: string }[] = [
  { key: "none", label: "情報なし", color: "#e5e7eb" },
  { key: "habitat", label: "生息域", color: HABITAT_DISPLAY_COLOR.moderate },
  { key: "habitatCore", label: "主要生息域", color: HABITAT_DISPLAY_COLOR.high },
  { key: "caution", label: "出没あり", color: ALERT_DISPLAY_COLOR.moderate },
  { key: "warning", label: "やや多い", color: ALERT_DISPLAY_COLOR.elevated },
  { key: "danger", label: "多い", color: ALERT_DISPLAY_COLOR.high },
];

type Props = {
  /** 生息域メッシュベースの素のレベル — 生息域ファクト & 判定の素材 */
  baseLevel?: RiskLevel;
  /** 過去90日の目撃件数 (周辺 10km) — 「最近の目撃」行に表示 */
  count90d?: number;
  /** 「周辺」の半径 (km) */
  nearbyRadiusKm?: number;
  /** 当該メッシュの直近1年の目撃件数 (マップのセル色と同入力)。判定の主軸。 */
  recentSightingCount?: number;
  /** 「最近の目撃」の隣に 2 列で並べる通知タイル (GeoPushButton compact 等)。無ければ 1 列。 */
  notification?: ReactNode;
};

export default function RiskHero({
  baseLevel,
  count90d = 0,
  nearbyRadiusKm = 10,
  recentSightingCount = 0,
  notification,
}: Props) {
  // マップのセル色と同じ二軸 (生息域 / 直近の出没) で「この地点の状況」を判定する。
  // 生息域だけでは赤い「危険」にせず、直近の出没件数で 注意→警戒→危険 を出す。
  const habitatLevel = baseLevel ?? "unknown";
  const cat = displayCategory(habitatLevel, recentSightingCount);
  const style = DISPLAY_CATEGORY_STYLE[cat];
  const hasRecent = count90d > 0;

  // 出没のある区分は「多い/やや多い」の曖昧表現をやめ、件数をそのまま見せる。
  // 程度は色 (黄→橙→赤) が補助。生息域系はカテゴリ名をそのまま出す。
  const isAlert = cat === "caution" || cat === "warning" || cat === "danger";

  // 件数は大ヴァーディクト (出没N件・直近1年) に集約したので、説明文では繰り返さない。
  // 説明文は「どう行動すべきか」に徹する。
  const blurb =
    cat === "danger"
      ? "クマの出没が多い地域です。早朝・夕方は特に注意し、外出時は周囲の最新情報を確認してください。"
      : cat === "warning"
        ? "クマの出没が確認されています。早朝・夕方は特に注意してください。"
        : cat === "caution"
          ? "クマの出没が確認されています。音を出すなど基本対策を心がけてください。"
          : cat === "habitatCore"
            ? "クマが多くすんでいる地域です。直近1年の出没情報はありません。季節により状況は変わります。"
            : cat === "habitat"
              ? "クマがすんでいる地域です。直近1年の出没情報はありません。季節により状況は変わります。"
              : "この場所では、クマの記録は見つかりませんでした。";

  return (
    <section className="px-4 pt-2.5 pb-2">
      {/* 1. ヴァーディクト — 生息域(中立) / 注意 / 警戒 / 危険。マップのセル色と整合。 */}
      <div className="w-full">
        <div className="mb-1 ml-1 text-xs font-semibold text-stone-500">
          この地点の状況
        </div>
        <div
          className="flex w-full flex-col items-center justify-center rounded-xl px-4 py-2 shadow-sm"
          style={{ background: style.bg, color: style.fg }}
        >
          {isAlert ? (
            <>
              <span className="text-xl font-bold tracking-wide">
                出没 {recentSightingCount}件
              </span>
              <span className="text-[10px] font-medium opacity-80">
                この地点周辺・直近1年
              </span>
            </>
          ) : (
            <span className="text-xl font-bold tracking-wide">
              {DISPLAY_CATEGORY_LABEL[cat]}
            </span>
          )}
        </div>
        <p className="mt-1 px-1 text-sm leading-relaxed text-stone-600 sm:text-xs">
          {blurb}
        </p>

        {/* 6 段階バー — マップの色塗りの意味 (生息域の濃淡 + 出没の多寡) を凡例で示す。
            現在地点の区分をハイライト。 */}
        <div className="mt-2">
          <div className="flex gap-0.5">
            {CATEGORY_BAR.map((seg) => (
              <div
                key={seg.key}
                className="h-2.5 flex-1 rounded-full"
                style={{
                  background: seg.color,
                  opacity: seg.key === cat ? 1 : 0.45,
                }}
              />
            ))}
          </div>
          <div className="mt-1 flex gap-0.5 text-[10px] leading-tight text-stone-500">
            {CATEGORY_BAR.map((seg) => (
              <span
                key={seg.key}
                className={`flex-1 text-center ${
                  seg.key === cat ? "font-bold text-stone-900" : ""
                }`}
              >
                {seg.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. 最近の目撃 と 通知 を 1 行 2 列で。数字/CTA を大きく、スマホでも一目で。
          大ヴァーディクト(直近1年)と対になる「直近90日」の窓を示し、件数の役割を分ける。 */}
      <div className={`mt-2.5 items-stretch ${notification ? "grid grid-cols-2 gap-2" : ""}`}>
        <div
          className={`flex flex-col justify-center rounded-xl border px-3 py-2.5 ${
            hasRecent
              ? "border-amber-200 bg-amber-50"
              : "border-stone-200 bg-stone-50"
          }`}
        >
          <div
            className={`text-sm font-semibold sm:text-xs ${
              hasRecent ? "text-amber-700" : "text-stone-500"
            }`}
          >
            最近の目撃
          </div>
          <div
            className={`flex items-baseline gap-1 ${
              hasRecent ? "text-amber-900" : "text-stone-700"
            }`}
          >
            <span className="text-3xl font-extrabold leading-none">
              {hasRecent ? count90d : "0"}
            </span>
            <span className="text-base font-bold">件</span>
          </div>
          <div className="mt-1 text-[11px] font-medium text-stone-500">
            直近90日 / 周辺{nearbyRadiusKm}km
          </div>
        </div>
        {notification}
      </div>
    </section>
  );
}
