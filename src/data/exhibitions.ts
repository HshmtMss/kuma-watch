/**
 * くまウォッチの展示会出展 (地図の小さな案内と /for-gov の「展示会」欄で使う)。
 *
 * 出典は会社サイトの各記事 (url)。小間番号が決まったら booth を埋める。
 * 文言は会社サイトの説明をそのまま写さない (「警戒レベル」「危険度」等の煽る語を
 * くまウォッチでは使わないため)。日付は JST の暦日。
 */
export type Exhibition = {
  id: string;
  name: string;
  /** 地図の案内に出す短い名前 */
  shortName: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
  venue: string;
  /** 小間番号。未定なら省略 */
  booth?: string;
  /** 出展エリア名 */
  area?: string;
  url: string;
};

export const EXHIBITIONS: Exhibition[] = [
  {
    id: "riscon-tokyo-2026",
    name: "危機管理産業展（RISCON TOKYO）2026",
    shortName: "危機管理産業展",
    start: "2026-09-30",
    end: "2026-10-02",
    venue: "東京ビッグサイト 南展示棟",
    booth: "SU-07",
    url: "https://www.research-coordinate.co.jp/post/riscon-tokyo-2026",
  },
  {
    id: "ceatec-2026",
    name: "CEATEC 2026",
    shortName: "CEATEC",
    start: "2026-10-13",
    end: "2026-10-16",
    venue: "幕張メッセ Hall 4",
    booth: "4H122",
    area: "ネクストジェネレーションパーク",
    url: "https://www.research-coordinate.co.jp/post/ceatec-2026",
  },
  {
    id: "leisure-japan-2026",
    name: "レジャー＆アウトドアジャパン2026",
    shortName: "レジャー＆アウトドアジャパン",
    start: "2026-11-25",
    end: "2026-11-27",
    venue: "東京ビッグサイト 東展示棟",
    area: "害獣対策パビリオン",
    url: "https://www.research-coordinate.co.jp/post/leisure-japan-2026",
  },
];

/** 地図に案内を出し始める、会期初日の何日前か */
export const EXHIBITION_NOTICE_LEAD_DAYS = 14;

export type ExhibitionStatus = "upcoming" | "ongoing" | "past";

export function exhibitionStatus(e: Exhibition, today: string): ExhibitionStatus {
  if (today > e.end) return "past";
  if (today >= e.start) return "ongoing";
  return "upcoming";
}

/** "2026-10-13".."2026-10-16" → "10/13–16" (月またぎは "10/30–11/2") */
export function formatExhibitionDates(e: Exhibition): string {
  const [, sm, sd] = e.start.split("-").map(Number);
  const [, em, ed] = e.end.split("-").map(Number);
  return sm === em ? `${sm}/${sd}–${ed}` : `${sm}/${sd}–${em}/${ed}`;
}

function addDays(iso: string, n: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** 地図に出す展示会 (案内期間中のうち一番近いもの)。無ければ null。 */
export function exhibitionForNotice(today: string): Exhibition | null {
  return (
    EXHIBITIONS.filter(
      (e) => today <= e.end && today >= addDays(e.start, -EXHIBITION_NOTICE_LEAD_DAYS),
    ).sort((a, b) => (a.start < b.start ? -1 : 1))[0] ?? null
  );
}
