import { createElement } from "react";
import {
  Bell,
  SprayCan,
  Clock,
  Leaf,
  Sprout,
  Snowflake,
  CloudRain,
  MapPin,
  Mountain,
  UtensilsCrossed,
  AlertTriangle,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

// 行動メモの絵文字 (ルールベース buildAdvice / LLM /api/advice が返す) を
// 単色 Lucide アイコンに対応づける。LLM は任意の絵文字を返しうるので、
// 未知は Lightbulb にフォールバックする。異体字セレクタ (U+FE0F) 付き・
// なしの双方を引けるようにする。
const ADVICE_ICON: Record<string, LucideIcon> = {
  "🔔": Bell, // 熊鈴
  "🧴": SprayCan, // クマスプレー
  "🕐": Clock, // 活動時間帯
  "🍂": Leaf, // 秋の食いだめ期
  "🌱": Sprout, // 冬眠明け
  "❄️": Snowflake, // 冬眠期
  "🌧️": CloudRain, // 雨天
  "📍": MapPin, // 近隣の目撃
  "🏔️": Mountain, // 山間部
  "🍱": UtensilsCrossed, // 食品・ゴミ
  "⚠️": AlertTriangle, // 一般注意
  "🌿": ShieldCheck, // 生息記録なし・安全
  "💡": Lightbulb, // 汎用
};

export function adviceIcon(emoji?: string): LucideIcon {
  if (!emoji) return Lightbulb;
  return (
    ADVICE_ICON[emoji] ??
    ADVICE_ICON[emoji.replace(/️/g, "")] ??
    ADVICE_ICON[`${emoji}️`] ??
    Lightbulb
  );
}

export default function AdviceIcon({
  emoji,
  size = 18,
  className,
}: {
  emoji?: string;
  size?: number;
  className?: string;
}) {
  return createElement(adviceIcon(emoji), {
    size,
    className,
    "aria-hidden": true,
  });
}
