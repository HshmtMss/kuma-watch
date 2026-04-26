/**
 * 危険度レベル・時刻・季節・気象・地形・周辺目撃件数 から
 * 「行動メモ」を生成するルールベース版。
 * LLM 版 (/api/advice) のフォールバックとしても使う。
 */
import type { ScoreBreakdown, WeatherSnapshot } from "@/lib/types";
import type { MunicipalEntry } from "@/data/municipalities";

export type AdviceItem = { emoji: string; title: string; body?: string };

export type AdviceContext = {
  breakdown: ScoreBreakdown | null;
  /** 現地時刻 (0-23) */
  hour: number;
  /** 月 (1-12)。冬眠期/活動期判定用 */
  month?: number;
  municipal?: MunicipalEntry;
  weather?: WeatherSnapshot | null;
  /** 周辺 10km 以内・直近期間内の目撃件数 */
  nearbySightings?: number;
  elevationM?: number | null;
  isForest?: boolean | null;
};

export function buildAdvice(ctx: AdviceContext): AdviceItem[] {
  const { breakdown, hour, month, municipal, weather, nearbySightings, elevationM } = ctx;
  if (!breakdown) return [];
  const items: AdviceItem[] = [];
  const level = breakdown.level;
  const isHiguma = municipal?.bearSpecies.includes("higuma");
  const m = month ?? new Date().getMonth() + 1;

  // ── 安全 (生息記録なし)
  if (level === "safe") {
    return [
      {
        emoji: "🌿",
        title: "この地域は生息記録がありません",
        body: "基本的な備えだけで安全に楽しめます。",
      },
    ];
  }

  // ── 季節バンドの判定
  const isAutumnPeak = m >= 9 && m <= 11; // 冬眠前の食いだめ期 (最警戒)
  const isWinterDormant = m === 12 || m <= 2; // 冬眠期 (警戒度低)
  const isSpringEmerge = m >= 3 && m <= 5; // 冬眠明け (空腹で活発)

  // ── 危険度に応じた装備
  if (level === "high" || level === "elevated") {
    items.push({
      emoji: "🔔",
      title: "熊鈴は必携",
      body: "定期的に鳴らして存在を知らせましょう。",
    });
    items.push({
      emoji: "🧴",
      title: "クマスプレーの携帯を推奨",
      body: "安全装置を外してすぐ使える位置に。使い方も事前に確認を。",
    });
  } else if (level === "moderate") {
    items.push({
      emoji: "🔔",
      title: "熊鈴やラジオで存在を知らせる",
      body: "静かな時間帯の単独行動は特に注意。",
    });
  }

  // ── 時間帯
  if (hour < 8 || hour >= 16) {
    items.push({
      emoji: "🕐",
      title: "クマの活動時間帯です",
      body: "早朝と夕方は見通しの悪い場所を避けてください。",
    });
  }

  // ── 季節
  if (isAutumnPeak && (level === "moderate" || level === "elevated" || level === "high")) {
    items.push({
      emoji: "🍂",
      title: "秋は最警戒期 (食いだめ期)",
      body: "ドングリ・クリ・カキの実周辺は特に出没確率が高い時期です。",
    });
  } else if (isSpringEmerge && (level !== "low")) {
    items.push({
      emoji: "🌱",
      title: "冬眠明けで空腹な時期",
      body: "活発に行動するため、4〜5月の山菜採りは特に注意を。",
    });
  } else if (isWinterDormant) {
    items.push({
      emoji: "❄️",
      title: "冬眠期で活動は鈍め",
      body: "ただし暖冬時や雪の少ない地域では活動することもあります。",
    });
  }

  // ── 気象 (雨・濃霧で見通し悪い)
  if (weather && weather.precipMm >= 2) {
    items.push({
      emoji: "🌧️",
      title: "雨で見通しが悪い",
      body: "音もかき消されやすく、気付かれにくい状況。鈴の音量を意識して。",
    });
  }

  // ── 周辺の最近の目撃
  if (nearbySightings !== undefined && nearbySightings >= 3) {
    items.push({
      emoji: "📍",
      title: `周辺で直近 ${nearbySightings} 件の目撃あり`,
      body: "最近、活動が確認されたエリアです。情報を確認の上、入山判断を。",
    });
  }

  // ── 標高 (高山・亜高山)
  if (elevationM != null && elevationM >= 1500) {
    items.push({
      emoji: "🏔️",
      title: "高山帯",
      body: "見通しは効くが、稜線で子グマと遭遇する事例も。藪漕ぎ時は要警戒。",
    });
  }

  // ── 食品管理 (常に重要)
  items.push({
    emoji: "🍱",
    title: "食品・ゴミは密閉・持ち帰り",
    body: "匂いはクマを呼びます。残置はしないでください。",
  });

  // ── ヒグマ警告
  if (isHiguma) {
    items.push({
      emoji: "⚠️",
      title: "ヒグマ生息域です",
      body: "ヒグマは大型で木にも登れます。単独行動は絶対に避けてください。",
    });
  }
  return items;
}
