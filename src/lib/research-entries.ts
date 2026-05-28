// 研究レポートの全エントリ。/research インデックス・地域別アーカイブ・sitemap
// の 3 箇所から参照するため、ライブラリに集約している。
//
// regions: 各記事本文の都道府県メンションを集計し、出現回数の多い順に
// 最大 5 件を入れる。新規記事を scripts/import-research.ts で取り込む際は
// 同スクリプトが本配列に append する (regions も自動算出)。

export type ResearchCategory =
  | "daily-report"
  | "weekly-report"
  | "monthly-report"
  | "topic"
  | "policy";

export type ResearchEntry = {
  slug: string;
  title: string;
  lead: string;
  publishedAt: string; // 公開日 YYYY-MM-DD
  category: ResearchCategory;
  /** 本文に頻出する都道府県 (出現回数降順、最大 5 件)。地域アーカイブの索引に使う。 */
  regions: string[];
};

export const RESEARCH_ENTRIES: ResearchEntry[] = [
  {
    slug: "2026-05-27-daily-report",
    title: "2026年5月27日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月27日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-28",
    category: "daily-report",
    regions: ["島根県","秋田県","栃木県","埼玉県","新潟県"],
  },
  {
    slug: "2026-05-26-daily-report",
    title: "2026年5月26日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月26日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-27",
    category: "daily-report",
    regions: ["群馬県","岩手県","新潟県","富山県","島根県"],
  },
  {
    slug: "2026-05-25-daily-report",
    title: "2026年5月25日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月25日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-26",
    category: "daily-report",
    regions: ["島根県","秋田県","北海道","青森県","岩手県"],
  },
  {
    slug: "2026-05-24-weekly-report",
    title: "2026年5月17日〜2026年5月24日 国内クマ出没事案の週次総括レポート",
    lead: "2026年5月17日〜2026年5月24日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-25",
    category: "weekly-report",
    regions: ["新潟県","島根県","岩手県","栃木県","滋賀県"],
  },
  {
    slug: "2026-05-24-daily-report",
    title: "2026年5月24日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月24日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-25",
    category: "daily-report",
    regions: ["島根県","新潟県","青森県","岩手県","栃木県"],
  },
  {
    slug: "2026-05-23-daily-report",
    title: "2026年5月23日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月23日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-24",
    category: "daily-report",
    regions: ["新潟県","栃木県","島根県","岩手県","秋田県"],
  },
  {
    slug: "2026-05-22-daily-report",
    title: "2026年5月22日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月22日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-23",
    category: "daily-report",
    regions: ["新潟県","栃木県","群馬県","富山県","北海道"],
  },
  {
    slug: "2026-05-21-daily-report",
    title: "2026年5月21日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月21日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-22",
    category: "daily-report",
    regions: ["島根県","新潟県","富山県","静岡県","青森県"],
  },
  {
    slug: "2026-05-20-daily-report",
    title: "2026年5月20日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月20日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-21",
    category: "daily-report",
    regions: ["新潟県","岩手県","北海道","栃木県","滋賀県"],
  },
  {
    slug: "2026-05-19-daily-report",
    title: "2026年5月19日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月19日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-20",
    category: "daily-report",
    regions: ["宮城県","新潟県","長野県","秋田県","島根県"],
  },
  {
    slug: "2026-05-18-daily-report",
    title: "2026年5月18日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月18日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-19",
    category: "daily-report",
    regions: ["福島県","東京都","宮城県","秋田県","岩手県"],
  },
  {
    slug: "this-week",
    title: "今週のクマ出没ハイライト — 過去 7 日の全国動向",
    lead: "全国 70+ の公的データソース・主要報道を集約した、過去 7 日のクマ出没ハイライト。都道府県別・市町村別のホットスポット、報道された事案、関連日次レポートを 1 ページで確認。",
    publishedAt: "2026-05-19",
    category: "weekly-report",
    regions: ["北海道", "秋田県", "岩手県", "長野県", "富山県"],
  },
  {
    slug: "wildlife-plans",
    title: "都道府県別 クマ第二種特定鳥獣管理計画 — 公式リンクと数値目標一覧",
    lead: "ツキノワグマ・ヒグマを「第二種特定鳥獣」として管理する各都道府県の公式管理計画を集約。計画期間・個体数推定・捕獲目標・改訂時期を一覧化し、原典の公式 PDF へリンク。",
    publishedAt: "2026-05-19",
    category: "topic",
    regions: ["北海道", "秋田県", "長野県", "兵庫県", "岩手県"],
  },
  {
    slug: "nut-crop-map",
    title: "ブナ・ナラの結実マップ 2025–2026 — 各都道府県の調査機関一覧と凶作年の検証",
    lead: "ブナ・ミズナラ・コナラの結実状況はクマの秋の出没を強く左右する。各都道府県の林業研究機関による豊凶調査のソースを集約し、過去の凶作年（2020・2023）と KumaWatch の出没件数の対応を検証。",
    publishedAt: "2026-05-19",
    category: "topic",
    regions: ["北海道", "青森県", "岩手県", "秋田県", "山形県"],
  },
  {
    slug: "2026-05-15-daily-report",
    title: "2026年5月15日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月15日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-18",
    category: "daily-report",
    regions: ["北海道","富山県","新潟県","青森県","岩手県"],
  },
  {
    slug: "2026-05-16-daily-report",
    title: "2026年5月16日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月16日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-18",
    category: "daily-report",
    regions: ["岩手県","新潟県","秋田県","長野県","福島県"],
  },
  {
    slug: "2026-05-17-daily-report",
    title: "2026年5月17日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月17日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-18",
    category: "daily-report",
    regions: ["北海道","秋田県","山口県","埼玉県","東京都"],
  },
  {
    slug: "2026-05-14-daily-report",
    title: "2026年5月14日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月14日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-16",
    category: "daily-report",
    regions: ["北海道", "秋田県", "山口県", "富山県", "長野県"],
  },
  {
    slug: "2026-05-13-daily-report",
    title: "2026年5月13日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月13日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-14",
    category: "daily-report",
    regions: ["北海道", "山形県", "岐阜県", "秋田県", "岩手県"],
  },
  {
    slug: "2026-05-12-daily-report",
    title: "2026年5月12日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月12日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-13",
    category: "daily-report",
    regions: ["北海道", "秋田県", "福島県", "山形県", "長野県"],
  },
  {
    slug: "2026-05-11-daily-report",
    title: "2026年5月11日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月11日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-12",
    category: "daily-report",
    regions: ["岩手県", "秋田県", "北海道", "福島県", "青森県"],
  },
  {
    slug: "2026-05-10-daily-report",
    title: "2026年5月10日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月10日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-12",
    category: "daily-report",
    regions: ["北海道", "秋田県", "岩手県", "長野県", "福島県"],
  },
  {
    slug: "2026-05-09-daily-report",
    title: "2026年5月9日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月9日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-10",
    category: "daily-report",
    regions: ["北海道", "秋田県", "岩手県", "島根県", "岡山県"],
  },
  {
    slug: "2026-05-08-daily-report",
    title: "2026年5月8日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月8日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-09",
    category: "daily-report",
    regions: ["北海道", "秋田県", "岐阜県", "岩手県", "長野県"],
  },
  {
    slug: "2026-05-07-daily-report",
    title: "2026年5月7日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月7日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-09",
    category: "daily-report",
    regions: ["青森県", "山形県", "栃木県", "長野県", "山梨県"],
  },
  {
    slug: "2026-05-06-daily-report",
    title: "2026年5月6日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月6日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-07",
    category: "daily-report",
    regions: ["秋田県", "北海道", "長野県", "山口県", "山形県"],
  },
  {
    slug: "2026-05-05-daily-report",
    title: "2026年5月5日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月5日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-05",
    category: "daily-report",
    regions: ["北海道", "秋田県", "福島県", "長野県", "群馬県"],
  },
  {
    slug: "2026-05-04-daily-report",
    title: "2026年5月4日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月4日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-05",
    category: "daily-report",
    regions: ["北海道", "新潟県", "福島県", "秋田県", "福井県"],
  },
  {
    slug: "2026-05-03-daily-report",
    title: "2026年5月3日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月3日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-04",
    category: "daily-report",
    regions: ["長野県", "北海道", "新潟県", "秋田県", "広島県"],
  },
  {
    slug: "2026-05-02-daily-report",
    title: "2026年5月2日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月2日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-04",
    category: "daily-report",
    regions: ["北海道", "新潟県", "秋田県", "山口県", "長野県"],
  },
  {
    slug: "2026-05-01-daily-report",
    title: "2026年5月1日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年5月1日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-04",
    category: "daily-report",
    regions: ["北海道", "岩手県", "山形県", "秋田県", "富山県"],
  },
  {
    slug: "2026-04-30-daily-report",
    title: "2026年4月30日 国内クマ出没事案の時空間分析と分析報告",
    lead: "2026年4月30日の出没動向・人身被害・行政対応・生態学的分析を網羅した研究記録。本文はAI集約 → 獣医工学ラボ監修。",
    publishedAt: "2026-05-02",
    category: "daily-report",
    regions: ["北海道", "富山県", "秋田県", "福島県", "長野県"],
  },
  {
    slug: "2026-04-29-bear-incidents",
    title: "2026年4月29日 国内熊出没事案の時空間分析と社会的リスク評価",
    lead: "ゴールデンウィーク初日、全国で相次いだクマ出没・人身被害事案を網羅的に集約し、アーバン・ベア化の進行と背景要因を分析した報告書。",
    publishedAt: "2026-04-30",
    category: "daily-report",
    regions: ["北海道", "富山県", "福島県", "秋田県", "山形県"],
  },
  {
    slug: "2026-04-monthly-report",
    title: "2026年4月 国内熊出没動向と人獣衝突の構造的分析",
    lead: "アーバンベアの完全定着、北海道の冬眠明け巨大ヒグマ（島牧村ハンター襲撃・苫前町330kg個体）、富山市住宅街での人身被害、4月1日施行のクマ「指定管理鳥獣」化までを総括した月次報告。",
    publishedAt: "2026-05-01",
    category: "monthly-report",
    regions: ["秋田県", "北海道", "長野県", "岐阜県", "宮城県"],
  },
  {
    slug: "2026-03-monthly-report",
    title: "2026年3月 国内熊出没動向と「熊対策ロードマップ」策定の包括的分析",
    lead: "暖冬による早期覚醒、北海道・東北・北陸の出没急増、3月27日に政府が公表した個体数削減ロードマップ（2030年度までの地域別削減目標）までを総括した月次報告。",
    publishedAt: "2026-04-30",
    category: "monthly-report",
    regions: ["青森県", "北海道", "岩手県", "新潟県", "秋田県"],
  },
];

export const RESEARCH_CATEGORY_LABEL: Record<ResearchCategory, string> = {
  "daily-report": "日次レポート",
  "weekly-report": "週次レポート",
  "monthly-report": "月次レポート",
  topic: "テーマ解説",
  policy: "政策提言",
};

/** slug 先頭の日付 (YYYY-MM-DD or YYYY-MM) を sortable な数値に変換。
 *  月次は同月末日扱いとして、日次より後ろに来ないように調整。 */
export function researchEntrySortKey(slug: string): string {
  const daily = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (daily) return `${daily[1]}${daily[2]}${daily[3]}`;
  const monthly = slug.match(/^(\d{4})-(\d{2})/);
  if (monthly) return `${monthly[1]}${monthly[2]}99`;
  return "00000000";
}

/** 公開日順 (新しい順) でソートしたエントリ配列。 */
export function sortedResearchEntries(): ResearchEntry[] {
  return [...RESEARCH_ENTRIES].sort((a, b) =>
    researchEntrySortKey(b.slug).localeCompare(researchEntrySortKey(a.slug)),
  );
}

/** 特定の都道府県を regions に含むエントリのみ抽出 (新しい順)。 */
export function researchEntriesByRegion(pref: string): ResearchEntry[] {
  return sortedResearchEntries().filter((e) => e.regions.includes(pref));
}

/** RESEARCH_ENTRIES に 1 回でも登場した都道府県の一覧 (記事数の多い順)。 */
export function researchRegionsWithCount(): { pref: string; count: number }[] {
  const m = new Map<string, number>();
  for (const e of RESEARCH_ENTRIES) {
    for (const r of e.regions) m.set(r, (m.get(r) ?? 0) + 1);
  }
  return [...m.entries()]
    .map(([pref, count]) => ({ pref, count }))
    .sort((a, b) => b.count - a.count || a.pref.localeCompare(b.pref, "ja"));
}

/** slug の月部分 "YYYY-MM" を返す。日次・月次どちらも対応。 */
export function researchEntryMonth(slug: string): string {
  const m = slug.match(/^(\d{4})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}` : "0000-00";
}
