/**
 * 観光地ページの「四季の楽しみ方」ビューモデル。
 *
 * 方針（重要）: 煽らない・観光自粛を招かない。クマ情報は「その季節のそなえの目安」
 * として前向きに添えるだけで、"避ける印" にはしない。見頃（新緑/紅葉）を主役にする。
 *
 * データ源:
 *   - 見頃・季節の見どころ … スポットの category から（新緑=春 / 紅葉=秋 が基調）
 *   - そなえメーター（1〜3）… 周辺のクマ出没を「暦月ごとの実データ」で相対化（honest）
 */
import type { JapanLandmark } from "@/data/japan-landmarks";

export type SonaeLevel = 1 | 2 | 3; // 1=軽め / 2=鈴を / 3=しっかり
export type Peak = "spring" | "autumn" | "";

export type MonthCell = {
  month: number; // 1..12
  label: string; // 見どころの一言
  peak: Peak; // 見頃（新緑/紅葉）で色付け
  sonae: SonaeLevel; // その月のそなえの目安（実データ由来）
};

export type SeasonCard = {
  key: "spring" | "summer" | "autumn" | "winter";
  when: string; // "春 · 4〜5月"
  title: string; // "新緑と桜"
  why: string;
  sonae: SonaeLevel;
  popular?: boolean;
  image?: string; // 季節の写真URL（無ければ色フォールバック）
};

export type Season4 = "spring" | "summer" | "autumn" | "winter";
export type NowTip = {
  month: number;
  season: Season4;
  headline: string; // 「新緑と桜の季節」など
  description: string; // 現場の"旬"の解説（1〜2文）
  image?: string; // 現在の季節の写真（無ければ代表画像）
  peak: Peak; // 見頃(新緑/紅葉)の色付け用
};

function seasonOf(m: number): Season4 {
  if (m >= 3 && m <= 5) return "spring";
  if (m >= 6 && m <= 8) return "summer";
  if (m >= 9 && m <= 11) return "autumn";
  return "winter";
}
const NOW_COPY: Record<Season4, { headline: string; description: string }> = {
  spring: {
    headline: "新緑と桜の季節",
    description:
      "芽吹きの若葉と花が山を彩ります。澄んだ空気で気候も快適。一年で最も歩きやすい季節です。",
  },
  summer: {
    headline: "夏山と沢の季節",
    description:
      "深い緑と、沢沿いの涼やかさが魅力。木陰の登山道は避暑にも。暑さ対策と水分補給を忘れずに。",
  },
  autumn: {
    headline: "紅葉の季節",
    description:
      "一年で最も鮮やかに色づく季節。錦に染まる山と澄んだ空が広がります。ケーブルカーからの眺めも格別。",
  },
  winter: {
    headline: "澄んだ展望の季節",
    description:
      "空気が澄み、遠くの山並みまで見渡せます。人も少なく、静かな山歩きを楽しめる季節です。",
  },
};

export type ImageCredit = {
  label?: string;
  by: string;
  license: string;
  source: string;
};

export type SpotSeasonGuide = {
  name: string;
  area: string; // "東京都八王子市"
  imageUrl?: string;
  imageCredit?: string;
  now: NowTip; // 現在月の「旬」（現場の今）
  months: MonthCell[];
  cards: SeasonCard[];
  credits: ImageCredit[]; // 季節写真の帰属表示（CC ライセンス順守）
  hasBearData: boolean; // 実データが十分か（少なければメーターは控えめ表現に）
};

// 見どころの一言（自然地共通の基調。category で一部だけ差し替える）。
const BASE_LABELS: Record<number, string> = {
  1: "冬晴れ・展望",
  2: "梅・静けさ",
  3: "芽吹き",
  4: "桜・新緑",
  5: "新緑・快適",
  6: "あじさい",
  7: "沢・涼",
  8: "夏山",
  9: "初秋",
  10: "紅葉はじめ",
  11: "紅葉ピーク",
  12: "冬枯れ・展望",
};

// category ごとの季節カードの見出し・説明（新緑・紅葉は共通の主役）。
type CardCopy = { title: string; why: string };
type CategoryCopy = {
  spring: CardCopy;
  summer: CardCopy;
  autumn: CardCopy;
  winter: CardCopy;
  summerWhen: string;
  winterWhen: string;
};
// mountain は必ず存在する既定（フォールバック）。
const MOUNTAIN_COPY: CategoryCopy = {
  spring: { title: "新緑と桜", why: "芽吹きの若葉と澄んだ空気。気候が最も快適な季節。" },
  summer: { title: "沢と新緑", why: "沢沿いは涼やか。深い緑の中を歩ける避暑の季節。" },
  autumn: { title: "紅葉の絶景", why: "一年で最も美しい季節。錦に染まる山を歩く。" },
  winter: { title: "澄んだ展望", why: "空気が澄み、遠くの山並みまで見渡せる静かな山歩き。" },
  summerWhen: "夏 · 7〜8月",
  winterWhen: "冬 · 12〜2月",
};
const CARD_COPY: Partial<Record<JapanLandmark["category"], CategoryCopy>> = {
  mountain: MOUNTAIN_COPY,
  lake: {
    spring: { title: "新緑の湖畔", why: "若葉に囲まれた水辺の散策。空気が澄んで快適。" },
    summer: { title: "水辺の涼", why: "湖面をわたる風が涼やか。緑に囲まれた水辺の避暑。" },
    autumn: { title: "紅葉と水鏡", why: "湖面に映る紅葉が見頃。一年で最も華やぐ季節。" },
    winter: { title: "静寂の湖", why: "人が少なく、澄んだ空気と静けさを楽しめる。" },
    summerWhen: "夏 · 7〜8月",
    winterWhen: "冬 · 12〜2月",
  },
  waterfall: {
    spring: { title: "新緑と清流", why: "若葉と水音が心地よい。水量も安定して見応え十分。" },
    summer: { title: "滝と涼", why: "水しぶきと木陰が涼やか。一年で最も気持ちのいい季節。" },
    autumn: { title: "紅葉と滝", why: "色づく木々と滝の共演。写真映えする名シーズン。" },
    winter: { title: "澄んだ滝景", why: "空気が澄み、人の少ない静かな滝めぐり。" },
    summerWhen: "夏 · 7〜8月",
    winterWhen: "冬 · 12〜2月",
  },
  onsen: {
    spring: { title: "新緑の湯めぐり", why: "若葉に包まれた露天。過ごしやすい気候。" },
    summer: { title: "新緑の露天", why: "深い緑を眺める湯浴み。涼を求めての湯めぐり。" },
    autumn: { title: "紅葉の露天風呂", why: "色づく山を眺める湯浴み。人気の季節。" },
    winter: { title: "雪見と温泉", why: "澄んだ空気と、あたたかい湯。冬ならではの贅沢。" },
    summerWhen: "夏 · 7〜8月",
    winterWhen: "冬 · 12〜2月",
  },
  sightseeing: {
    spring: { title: "桜と新緑", why: "花と若葉が彩る、一年で最も心地よい季節。" },
    summer: { title: "緑と夏祭り", why: "深い緑と夏の風情。木陰を歩く涼やかな散策。" },
    autumn: { title: "紅葉の彩り", why: "街道や境内が色づく、写真映えの名シーズン。" },
    winter: { title: "澄んだ冬景色", why: "人が少なく静か。澄んだ空気の中をゆっくり歩ける。" },
    summerWhen: "夏 · 7〜8月",
    winterWhen: "冬 · 12〜2月",
  },
};

const PEAK_OF: Record<number, Peak> = {
  4: "spring",
  5: "spring",
  10: "autumn",
  11: "autumn",
};

/** 周辺出没の暦月分布（実データ）→ 各月の「そなえ」目安 1〜3 に相対化。 */
function monthlySonae(areaDatesAll: string[]): {
  levels: SonaeLevel[];
  enough: boolean;
} {
  const counts = new Array(12).fill(0);
  let total = 0;
  for (const d of areaDatesAll) {
    const m = Number(d.slice(5, 7));
    if (m >= 1 && m <= 12) {
      counts[m - 1]++;
      total++;
    }
  }
  const max = Math.max(1, ...counts);
  const levels = counts.map((c) => {
    const r = c / max;
    return (r <= 0.34 ? 1 : r <= 0.67 ? 2 : 3) as SonaeLevel;
  });
  // データが乏しい観光地は「秋にやや高め」の一般パターンにフォールバック（誇張しない）。
  if (total < 12) {
    const fallback: SonaeLevel[] = [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1];
    return { levels: fallback, enough: false };
  }
  return { levels, enough: true };
}

function avgSonae(levels: SonaeLevel[], months: number[]): SonaeLevel {
  const vals = months.map((m) => levels[m - 1]);
  const a = vals.reduce((s, v) => s + v, 0) / vals.length;
  return (a >= 2.5 ? 3 : a >= 1.5 ? 2 : 1) as SonaeLevel;
}

export function buildSpotSeasonGuide(
  landmark: JapanLandmark,
  areaDatesAll: string[],
  currentMonth: number,
): SpotSeasonGuide {
  const { levels, enough } = monthlySonae(areaDatesAll);
  const months: MonthCell[] = Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    return {
      month: m,
      label: BASE_LABELS[m],
      peak: PEAK_OF[m] ?? "",
      sonae: levels[i],
    };
  });

  const copy = CARD_COPY[landmark.category] ?? MOUNTAIN_COPY;
  const si = landmark.seasonImages;
  const cards: SeasonCard[] = [
    {
      key: "spring",
      when: "春 · 4〜5月",
      ...copy.spring,
      sonae: avgSonae(levels, [4, 5]),
      image: si?.spring,
    },
    {
      key: "summer",
      when: copy.summerWhen,
      ...copy.summer,
      sonae: avgSonae(levels, [7, 8]),
      image: si?.summer,
    },
    {
      key: "autumn",
      when: "秋 · 10〜11月",
      ...copy.autumn,
      sonae: avgSonae(levels, [10, 11]),
      popular: true,
      // 秋(一番人気)は季節写真が無ければ代表画像を使う。
      image: si?.autumn ?? landmark.imageUrl,
    },
    {
      key: "winter",
      when: copy.winterWhen,
      ...copy.winter,
      sonae: avgSonae(levels, [12, 1, 2]),
      image: si?.winter,
    },
  ];

  const cm = currentMonth >= 1 && currentMonth <= 12 ? currentMonth : 1;
  const nowSeason = seasonOf(cm);
  const nowImage =
    si?.[nowSeason] ??
    (nowSeason === "autumn" || nowSeason === "summer"
      ? landmark.imageUrl
      : undefined);
  const now: NowTip = {
    month: cm,
    season: nowSeason,
    ...NOW_COPY[nowSeason],
    image: nowImage,
    peak: PEAK_OF[cm] ?? "",
  };

  return {
    name: landmark.name,
    area: `${landmark.prefName}${landmark.muniName ?? ""}`,
    imageUrl: landmark.imageUrl,
    imageCredit: landmark.imageCredit,
    now,
    months,
    cards,
    credits: landmark.seasonImageCredits ?? [],
    hasBearData: enough,
  };
}
