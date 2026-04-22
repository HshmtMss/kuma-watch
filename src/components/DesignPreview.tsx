"use client";

import { useState } from "react";
import Link from "next/link";

// ----- Mock data (ブレスト比較用・API は叩かない) --------------------------
type LocationType = "mountain" | "trail" | "farmland" | "suburb" | "city";

type MockPlace = {
  id: string;
  name: string;
  prefecture: string;
  city: string;
  score: number;
  levelCurrent: "safe" | "low" | "moderate" | "elevated" | "high";
  periodLabel: string;
  periodNearbyCount: number;
  totalNearbyCount: number;
  habitatStatus: "inside" | "buffer" | "neighbor" | "none";
  locationType: LocationType;
  elevationM: number | null;
  isForest: boolean | null;
  llmSummary: string;
};

const PLACES: MockPlace[] = [
  {
    id: "tono",
    name: "遠野市 山間部",
    prefecture: "岩手県",
    city: "遠野市",
    score: 52,
    levelCurrent: "moderate",
    periodLabel: "3ヶ月",
    periodNearbyCount: 0,
    totalNearbyCount: 215,
    habitatStatus: "neighbor",
    locationType: "mountain",
    elevationM: 460,
    isForest: true,
    llmSummary:
      "この場所は山間部の森林内で、周囲にクマの生息域があります。直近の公式目撃は少なめですが、岩手県では県全体で年 9,000 件超の出没が続いており、基本対策は必須です。特に早朝・夕方の単独行動は避けましょう。",
  },
  {
    id: "shinjuku",
    name: "新宿駅周辺",
    prefecture: "東京都",
    city: "新宿区",
    score: 5,
    levelCurrent: "low",
    periodLabel: "3ヶ月",
    periodNearbyCount: 0,
    totalNearbyCount: 0,
    habitatStatus: "none",
    locationType: "city",
    elevationM: 38,
    isForest: false,
    llmSummary:
      "市街地中心部で、クマの生息域から大きく離れています。通常の都市活動において遭遇の可能性はほぼありません。",
  },
  {
    id: "karuizawa",
    name: "軽井沢駅周辺",
    prefecture: "長野県",
    city: "軽井沢町",
    score: 68,
    levelCurrent: "elevated",
    periodLabel: "3ヶ月",
    periodNearbyCount: 7,
    totalNearbyCount: 131,
    habitatStatus: "buffer",
    locationType: "suburb",
    elevationM: 940,
    isForest: false,
    llmSummary:
      "観光地の郊外で、クマの生息域が近接しています。軽井沢町では令和 7 年度に 131 件の目撃が報告されており、直近 3 ヶ月でも 7 件確認されています。別荘地・ゴルフ場周辺も含め警戒を。",
  },
];

// ----- Level labels --------------------------------------------------------
const CURRENT_LEVEL_LABEL: Record<MockPlace["levelCurrent"], string> = {
  safe: "安全",
  low: "低い",
  moderate: "中",
  elevated: "高い",
  high: "警戒",
};
const CURRENT_LEVEL_COLOR: Record<MockPlace["levelCurrent"], string> = {
  safe: "#16a34a",
  low: "#84cc16",
  moderate: "#f59e0b",
  elevated: "#f97316",
  high: "#dc2626",
};
const SOFT_LEVEL_LABEL: Record<MockPlace["levelCurrent"], string> = {
  safe: "基本対策で OK",
  low: "少し意識して",
  moderate: "しっかり対策を",
  elevated: "入山は慎重に",
  high: "極めて警戒",
};

// ----- Location type copy --------------------------------------------------
const LOCATION_TYPE_MESSAGE: Record<
  LocationType,
  { emoji: string; label: string; verdict: (lvl: MockPlace["levelCurrent"]) => string }
> = {
  mountain: {
    emoji: "🌲",
    label: "山間部",
    verdict: (lvl) =>
      lvl === "low" || lvl === "safe"
        ? "最低限の対策を"
        : lvl === "moderate"
          ? "しっかり対策を"
          : "入山は慎重に",
  },
  trail: {
    emoji: "⛰️",
    label: "登山道・森林内",
    verdict: () => "要警戒",
  },
  farmland: {
    emoji: "🌾",
    label: "農地・里山",
    verdict: () => "標準的な注意",
  },
  suburb: {
    emoji: "🏡",
    label: "郊外の住宅地",
    verdict: (lvl) =>
      lvl === "elevated" || lvl === "high" ? "異例の出没が出ています" : "通常は安全",
  },
  city: {
    emoji: "🏙️",
    label: "市街地",
    verdict: () => "基本は安全",
  },
};

// ----- Habitat × Sighting axis (variant C) ---------------------------------
function habitatAxisValue(p: MockPlace): number {
  // 10 段階 (mock)
  if (p.habitatStatus === "inside") return 10;
  if (p.habitatStatus === "neighbor") return 8;
  if (p.habitatStatus === "buffer") return 6;
  return 1;
}
function sightingAxisValue(p: MockPlace): number {
  const n = p.periodNearbyCount;
  if (n >= 20) return 10;
  if (n >= 10) return 8;
  if (n >= 5) return 6;
  if (n >= 1) return 3;
  return 0;
}

// ---------------------------------------------------------------------------
export default function DesignPreview() {
  const [activeId, setActiveId] = useState<string>("tono");
  const place = PLACES.find((p) => p.id === activeId) ?? PLACES[0];

  return (
    <main className="min-h-[100dvh] bg-stone-100 pb-20">
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-xs text-stone-500 hover:underline">
            ← 本番へ
          </Link>
          <div className="text-sm font-bold text-stone-800">
            デザイン比較プレビュー
          </div>
          <span className="text-[10px] text-stone-400">noindex</span>
        </div>
        <div className="mx-auto flex max-w-xl gap-2 overflow-x-auto px-4 pb-2">
          {PLACES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeId === p.id
                  ? "bg-stone-900 text-white"
                  : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-xl space-y-4 px-4 pt-4">
        <Section label="現行 UI（今のシート）">
          <VariantCurrent place={place} />
        </Section>
        <Section label="案 A: 場所タイプ × 一言判定">
          <VariantA place={place} />
        </Section>
        <Section label="案 B: 柔らかラベルに置き換え">
          <VariantB place={place} />
        </Section>
        <Section label="案 C: 2 軸表示（生息度 × 目撃頻度）">
          <VariantC place={place} />
        </Section>
        <Section label="案 D: LLM 文脈補足を主役に">
          <VariantD place={place} />
        </Section>
        <Section label="🌟 おすすめ合成 (A + B + D)" highlight>
          <VariantCombined place={place} />
        </Section>
      </div>
    </main>
  );
}

// ----- Layout helper -------------------------------------------------------
function Section({
  label,
  highlight,
  children,
}: {
  label: string;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl ${
        highlight
          ? "ring-2 ring-amber-500 ring-offset-2"
          : "ring-1 ring-stone-200"
      } bg-white`}
    >
      <div
        className={`border-b border-stone-200 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider ${
          highlight ? "bg-amber-100 text-amber-800" : "bg-stone-50 text-stone-600"
        }`}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

// ----- Variants ------------------------------------------------------------
function VariantCurrent({ place }: { place: MockPlace }) {
  const color = CURRENT_LEVEL_COLOR[place.levelCurrent];
  const badge = CURRENT_LEVEL_LABEL[place.levelCurrent];
  return (
    <div>
      <div className="flex items-center gap-2 px-4 py-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: color }}
        >
          📍
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-gray-900">
            {place.prefecture} {place.city}
          </div>
          <div className="text-xs text-gray-500">
            スコア {place.score} / 100
          </div>
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
          style={{ background: color }}
        >
          {badge} {place.score}
        </span>
      </div>
      <div className="bg-amber-50/70 px-4 py-3">
        <div className="text-[10px] font-medium uppercase tracking-wider text-amber-700">
          過去{place.periodLabel}・半径 10km 以内の目撃
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-gray-900">
            {place.periodNearbyCount}
          </span>
          <span className="text-sm text-gray-600">件</span>
          <span className="ml-auto text-[10px] text-gray-500">
            全期間では {place.totalNearbyCount.toLocaleString()} 件
          </span>
        </div>
      </div>
    </div>
  );
}

function VariantA({ place }: { place: MockPlace }) {
  const lt = LOCATION_TYPE_MESSAGE[place.locationType];
  const color = CURRENT_LEVEL_COLOR[place.levelCurrent];
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs text-gray-500">
            {place.prefecture} {place.city}
          </div>
          <div className="truncate text-base font-bold text-gray-900">
            {place.name}
          </div>
        </div>
        <span
          className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
          style={{ background: color }}
        >
          {CURRENT_LEVEL_LABEL[place.levelCurrent]} {place.score}
        </span>
      </div>
      <div className="mx-4 mb-4 rounded-xl bg-stone-50 p-5 text-center">
        <div className="text-4xl" aria-hidden>
          {lt.emoji}
        </div>
        <div className="mt-1 text-xs font-medium text-stone-500">
          {lt.label}
        </div>
        <div className="mt-2 text-xl font-bold text-stone-900">
          {lt.verdict(place.levelCurrent)}
        </div>
      </div>
    </div>
  );
}

function VariantB({ place }: { place: MockPlace }) {
  const softLabel = SOFT_LEVEL_LABEL[place.levelCurrent];
  const levels: MockPlace["levelCurrent"][] = [
    "safe",
    "low",
    "moderate",
    "elevated",
    "high",
  ];
  const activeIdx = levels.indexOf(place.levelCurrent);
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs text-gray-500">
            {place.prefecture} {place.city}
          </div>
          <div className="truncate text-base font-bold text-gray-900">
            {softLabel}
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex gap-1">
          {levels.map((lv, idx) => (
            <div
              key={lv}
              className="h-2 flex-1 rounded-full"
              style={{
                background: idx <= activeIdx ? CURRENT_LEVEL_COLOR[lv] : "#e5e5e5",
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-gray-500">
          {levels.map((lv) => (
            <span
              key={lv}
              className={lv === place.levelCurrent ? "font-semibold text-stone-900" : ""}
            >
              {SOFT_LEVEL_LABEL[lv]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function VariantC({ place }: { place: MockPlace }) {
  const habitat = habitatAxisValue(place);
  const sighting = sightingAxisValue(place);
  return (
    <div>
      <div className="px-4 pt-3 text-xs text-gray-500">
        {place.prefecture} {place.city}
      </div>
      <div className="space-y-3 px-4 pb-4 pt-2">
        <AxisBar label="生息域の近接度" value={habitat} color="#6b8e23" />
        <AxisBar label="目撃の最近の頻度" value={sighting} color="#dc2626" />
        <div className="rounded-lg bg-stone-50 p-3 text-xs leading-relaxed text-stone-700">
          {habitat >= 6 && sighting >= 6
            ? "クマが居る可能性が高く、最近も目撃されています。入山時は強い警戒を。"
            : habitat >= 6 && sighting < 6
              ? "クマが居る可能性はありますが、最近の目撃は少なめ。基本対策で問題ないことが多いものの、山間部では油断は禁物です。"
              : habitat < 6 && sighting >= 6
                ? "通常は生息域から離れていますが、最近近隣で目撃が増えています。近年の異例出没事例です。"
                : "生息域・目撃ともに少ない地域。通常の注意で問題ありません。"}
        </div>
      </div>
    </div>
  );
}

function AxisBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-medium text-gray-700">{label}</span>
        <span className="text-[10px] text-gray-500">{value} / 10</span>
      </div>
      <div className="h-3 w-full rounded-full bg-stone-100">
        <div
          className="h-3 rounded-full"
          style={{ width: `${value * 10}%`, background: color }}
        />
      </div>
    </div>
  );
}

function VariantD({ place }: { place: MockPlace }) {
  const color = CURRENT_LEVEL_COLOR[place.levelCurrent];
  return (
    <div>
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs text-gray-500">
            {place.prefecture} {place.city}
          </div>
          <div className="truncate text-base font-bold text-gray-900">
            {place.name}
          </div>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
          style={{ background: color }}
        >
          {CURRENT_LEVEL_LABEL[place.levelCurrent]} {place.score}
        </span>
      </div>
      <div className="mx-4 mb-4 rounded-xl border-l-4 border-blue-400 bg-blue-50/60 p-4">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
          📝 状況のポイント
        </div>
        <p className="text-sm leading-relaxed text-gray-800">
          {place.llmSummary}
        </p>
        <p className="mt-2 text-[10px] text-gray-500">
          (Gemini 3 Flash 生成・根拠は周辺目撃と公式集計)
        </p>
      </div>
    </div>
  );
}

function VariantCombined({ place }: { place: MockPlace }) {
  const lt = LOCATION_TYPE_MESSAGE[place.locationType];
  const softLabel = SOFT_LEVEL_LABEL[place.levelCurrent];
  const levels: MockPlace["levelCurrent"][] = [
    "safe",
    "low",
    "moderate",
    "elevated",
    "high",
  ];
  const activeIdx = levels.indexOf(place.levelCurrent);
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs text-gray-500">
            {place.prefecture} {place.city}
          </div>
          <div className="truncate text-base font-bold text-gray-900">
            {place.name}
          </div>
        </div>
      </div>

      {/* 1. 場所タイプ × 柔らかい判定 */}
      <div className="mx-4 rounded-xl bg-stone-50 p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl" aria-hidden>
            {lt.emoji}
          </span>
          <span className="text-xs font-medium text-stone-500">
            {lt.label}
          </span>
        </div>
        <div className="mt-2 text-xl font-bold text-stone-900">
          {softLabel}
        </div>
      </div>

      {/* 2. 5 段階バー (柔らかラベル) */}
      <div className="px-4 pt-4">
        <div className="flex gap-1">
          {levels.map((lv, idx) => (
            <div
              key={lv}
              className="h-1.5 flex-1 rounded-full"
              style={{
                background:
                  idx <= activeIdx ? CURRENT_LEVEL_COLOR[lv] : "#e5e5e5",
              }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[9px] text-gray-500">
          <span>基本対策</span>
          <span>少し意識</span>
          <span>しっかり</span>
          <span>慎重に</span>
          <span>極警戒</span>
        </div>
      </div>

      {/* 3. LLM 文脈補足 */}
      <div className="mx-4 my-4 rounded-xl border-l-4 border-blue-400 bg-blue-50/60 p-4">
        <p className="text-sm leading-relaxed text-gray-800">
          {place.llmSummary}
        </p>
      </div>

      {/* 4. 件数 headline (従来) */}
      <div className="bg-amber-50/70 px-4 py-3">
        <div className="text-[10px] font-medium uppercase tracking-wider text-amber-700">
          過去{place.periodLabel}・半径 10km 以内の目撃
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-gray-900">
            {place.periodNearbyCount}
          </span>
          <span className="text-sm text-gray-600">件</span>
          {place.totalNearbyCount > place.periodNearbyCount && (
            <span className="ml-auto text-[10px] text-gray-500">
              全期間 {place.totalNearbyCount.toLocaleString()} 件
            </span>
          )}
        </div>
      </div>

      <div className="px-4 py-3 text-[10px] text-gray-500">
        ▾ 詳細データ（時間帯・月別・スコア根拠）は従来通り折り畳み
      </div>
    </div>
  );
}
