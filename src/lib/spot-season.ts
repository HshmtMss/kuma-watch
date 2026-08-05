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
  key: "spring" | "autumn" | "winter";
  when: string; // "春 · 4〜5月"
  title: string; // "新緑と桜"
  why: string;
  sonae: SonaeLevel;
  popular?: boolean;
};

export type NowTip = {
  month: number;
  label: string; // その月の見どころ
  peak: Peak; // 新緑/紅葉の見頃なら色付け・「見頃！」表示
};

export type SpotSeasonGuide = {
  name: string;
  area: string; // "東京都八王子市"
  imageUrl?: string;
  imageCredit?: string;
  now: NowTip; // 現在月の「旬」（現場の今）
  months: MonthCell[];
  cards: SeasonCard[];
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
  autumn: CardCopy;
  winter: CardCopy;
  winterWhen: string;
};
// mountain は必ず存在する既定（フォールバック）。
const MOUNTAIN_COPY: CategoryCopy = {
  spring: { title: "新緑と桜", why: "芽吹きの若葉と澄んだ空気。気候が最も快適な季節。" },
  autumn: { title: "紅葉の絶景", why: "一年で最も美しい季節。錦に染まる山を歩く。" },
  winter: { title: "澄んだ展望", why: "空気が澄み、遠くの山並みまで見渡せる静かな山歩き。" },
  winterWhen: "冬 · 12〜2月",
};
const CARD_COPY: Partial<Record<JapanLandmark["category"], CategoryCopy>> = {
  mountain: MOUNTAIN_COPY,
  lake: {
    spring: { title: "新緑の湖畔", why: "若葉に囲まれた水辺の散策。空気が澄んで快適。" },
    autumn: { title: "紅葉と水鏡", why: "湖面に映る紅葉が見頃。一年で最も華やぐ季節。" },
    winter: { title: "静寂の湖", why: "人が少なく、澄んだ空気と静けさを楽しめる。" },
    winterWhen: "冬 · 12〜2月",
  },
  waterfall: {
    spring: { title: "新緑と清流", why: "若葉と水音が心地よい。水量も安定して見応え十分。" },
    autumn: { title: "紅葉と滝", why: "色づく木々と滝の共演。写真映えする名シーズン。" },
    winter: { title: "澄んだ滝景", why: "空気が澄み、人の少ない静かな滝めぐり。" },
    winterWhen: "冬 · 12〜2月",
  },
  onsen: {
    spring: { title: "新緑の湯めぐり", why: "若葉に包まれた露天。過ごしやすい気候。" },
    autumn: { title: "紅葉の露天風呂", why: "色づく山を眺める湯浴み。一番人気の季節。" },
    winter: { title: "雪見と温泉", why: "澄んだ空気と、あたたかい湯。冬ならではの贅沢。" },
    winterWhen: "冬 · 12〜2月",
  },
  sightseeing: {
    spring: { title: "桜と新緑", why: "花と若葉が彩る、一年で最も心地よい季節。" },
    autumn: { title: "紅葉の彩り", why: "街道や境内が色づく、写真映えの名シーズン。" },
    winter: { title: "澄んだ冬景色", why: "人が少なく静か。澄んだ空気の中をゆっくり歩ける。" },
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
  const cards: SeasonCard[] = [
    {
      key: "spring",
      when: "春 · 4〜5月",
      ...copy.spring,
      sonae: avgSonae(levels, [4, 5]),
    },
    {
      key: "autumn",
      when: "秋 · 10〜11月",
      ...copy.autumn,
      sonae: avgSonae(levels, [10, 11]),
      popular: true,
    },
    {
      key: "winter",
      when: copy.winterWhen,
      ...copy.winter,
      sonae: avgSonae(levels, [12, 1, 2]),
    },
  ];

  const cm = currentMonth >= 1 && currentMonth <= 12 ? currentMonth : 1;
  const now: NowTip = {
    month: cm,
    label: BASE_LABELS[cm],
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
    hasBearData: enough,
  };
}
