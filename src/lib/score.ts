import type {
  MeshData,
  RiskLevel,
  ScoreBreakdown,
  ScoreFactors,
  WeatherSnapshot,
} from "./types";

const SEASONAL_COEFF: Record<number, number> = {
  1: 15,
  2: 10,
  3: 20,
  4: 65,
  5: 82,
  6: 95,
  7: 90,
  8: 70,
  9: 75,
  10: 85,
  11: 88,
  12: 50,
};

const BEAR_ACTIVE_HOURS: Array<[number, number]> = [
  [4, 8],
  [16, 20],
];

export function isBearActiveHour(hour: number): boolean {
  return BEAR_ACTIVE_HOURS.some(([start, end]) => hour >= start && hour < end);
}

export function lunarPhase(date: Date): { phase: number; name: string } {
  const reference = new Date(2000, 0, 6).getTime();
  const synodicMonth = 29.53059;
  const diffDays = (date.getTime() - reference) / 86400000;
  const phase = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  const name =
    phase < 3.7
      ? "新月"
      : phase < 7.4
        ? "三日月"
        : phase < 11.1
          ? "上弦"
          : phase < 14.8
            ? "十三夜"
            : phase < 18.5
              ? "満月"
              : phase < 22.1
                ? "十六夜"
                : phase < 25.8
                  ? "下弦"
                  : "晦日";
  return { phase, name };
}

export function calcHistoryScore(mesh: Pick<MeshData, "second" | "sixth" | "latest" | "latestSingle">): number {
  const raw = mesh.latest * 3.0 + mesh.sixth * 1.5 + mesh.second * 0.5;
  const adjusted = mesh.latestSingle > 0 && raw > 0.5 ? raw - 0.5 : raw;
  return Math.min(100, Math.max(0, adjusted * 10));
}

function calcSeasonalScore(month: number): number {
  return SEASONAL_COEFF[month] ?? 50;
}

function calcWeatherScore(weather: WeatherSnapshot | null): number {
  if (!weather) return 50;
  const { tempC, precipMm } = weather;
  const inRange = tempC >= 5 && tempC <= 25;
  const base = inRange ? 75 : 35;
  return Math.max(10, base - precipMm * 3);
}

function calcLunarScore(phase: number): number {
  return phase < 5 || phase > 25 ? 70 : 45;
}

function calcTimeBonus(hour: number): number {
  return isBearActiveHour(hour) ? 10 : 0;
}

export function computeScore(
  mesh: Pick<MeshData, "second" | "sixth" | "latest" | "latestSingle">,
  now: Date,
  weather: WeatherSnapshot | null,
): ScoreBreakdown {
  const month = now.getMonth() + 1;
  const hour = now.getHours();
  const { phase, name: phaseName } = lunarPhase(now);

  const factors: ScoreFactors = {
    history: calcHistoryScore(mesh),
    seasonal: calcSeasonalScore(month),
    weather: calcWeatherScore(weather),
    lunar: calcLunarScore(phase),
    timeOfDayBonus: calcTimeBonus(hour),
  };

  if (factors.history <= 0) {
    return {
      score: 0,
      level: "safe",
      factors,
      explanation: [
        "環境省の生息域調査でこの 5km メッシュにクマの生息記録がないため、危険度は非常に低いと評価しています。",
        "（季節・気象・時間帯の係数は生息域内でのみ加味されます）",
      ],
    };
  }

  const weighted =
    factors.history * 0.4 +
    factors.seasonal * 0.3 +
    factors.weather * 0.2 +
    factors.lunar * 0.1 +
    factors.timeOfDayBonus;

  const score = Math.round(Math.min(100, Math.max(0, weighted)));
  const level = toRiskLevel(score);

  const explanation = [
    `履歴（生息域）: ${factors.history.toFixed(0)} pts（最新調査 ${mesh.latest} / 第6回 ${mesh.sixth} / 第2回 ${mesh.second}）`,
    `季節: ${factors.seasonal} pts（${month}月の月別係数）`,
    weather
      ? `気象: ${factors.weather.toFixed(0)} pts（${weather.tempC.toFixed(1)}°C・降水 ${weather.precipMm}mm）`
      : `気象: ${factors.weather} pts（取得なし・中央値）`,
    `月相: ${factors.lunar} pts（${phaseName}）`,
    factors.timeOfDayBonus > 0
      ? `時間帯補正: +${factors.timeOfDayBonus}（${hour}時はクマの活動時間帯）`
      : `時間帯補正: 0（${hour}時は活動時間外）`,
  ];

  return { score, level, factors, explanation };
}

export function toRiskLevel(score: number): RiskLevel {
  if (score >= 75) return "high";
  if (score >= 55) return "elevated";
  if (score >= 35) return "moderate";
  if (score >= 15) return "low";
  return "safe";
}

export const RISK_LEVEL_LABEL: Record<RiskLevel, string> = {
  safe: "安全",
  low: "低い",
  moderate: "中程度",
  elevated: "やや高い",
  high: "高い",
};

export const RISK_LEVEL_COLOR: Record<RiskLevel, string> = {
  safe: "#10b981",
  low: "#3b82f6",
  moderate: "#f59e0b",
  elevated: "#f97316",
  high: "#dc2626",
};
