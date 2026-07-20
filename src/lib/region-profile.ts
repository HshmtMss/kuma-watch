/**
 * 地域カルテ — その地域だけを見て対策を立てるための材料。
 *
 * === なぜ「県別ランキング」にしないか ===
 * 県をまたいで比べると、実態ではなく**記述の詳しさ**を比べることになる。
 * コメントの平均文字数は 宮城県 1字 / 青森県 5字 / 山形県 5字 に対し
 * 福島県 30字 / 秋田県 29字 と大きく違う。この状態で「出没場所の構成」を
 * 県別に並べると、山形県は「山林 92%」と出るが、これは山形のクマが山に
 * いるのではなく、山形の記録が短く「山林」以外の語が現れないためである。
 * 誘引物も同様で、北海道の「柿 0.0%」は柿が無いのではなく記述が短いだけ。
 *
 * 月別データの欠落も県ごとに違う(24ヶ月中、福島 7ヶ月 / 新潟 9ヶ月 /
 * 秋田 24ヶ月)。季節性を県間で比べるとこの差がそのまま出る。
 *
 * そこで、他地域と比べるのではなく「その地域の中での構成」を出す。
 * 対策立案に必要なのは順位ではなく自地域の姿なので、これで足りる。
 * ただし判断を誤らせないよう、**その地域のデータがどれだけ詳しいか**を
 * 必ず併記する (quality)。記述が短い地域では場所や誘引物の内訳は
 * 当てにならない、と読み手が分かるようにするため。
 */

export type RegionQuality = {
  /** 記録件数 */
  records: number;
  /** コメントの平均文字数。短いほど場所・誘引物の分類は当てにならない */
  avgCommentLength: number;
  /** 場所を分類できた割合 */
  placeClassifiedRate: number;
  /** データがある年月の数 */
  monthsCovered: number;
  /** 12ヶ月すべてにデータがあるか。季節性を語るならこれが要る */
  allCalendarMonths: boolean;
  /** 季節性を語れるか */
  seasonComparable: boolean;
  /** 場所・誘引物の内訳が意味を持つか (平均15字以上かつ分類率20%以上) */
  textReliable: boolean;
};

export type RegionProfile = {
  region: string;
  quality: RegionQuality;
  /** 月別件数 (index 0 = 1月) */
  monthly: number[];
  peakMonth: number;
  /** 秋(9-11月)/初夏(6-7月)。季節対策の時期を決める指標 */
  autumnRatio: number | null;
  /** 出没場所の内訳 (その地域の分類できた記録に対する割合) */
  places: { key: string; count: number; share: number }[];
  /** 誘引物の言及 */
  attractants: { key: string; count: number; share: number }[];
  /** 時間帯の内訳 (時刻が分かる記録のみ)。母数が小さいと当てにならない */
  hours: { key: string; count: number; share: number }[];
  /** 時間帯の母数。100未満なら内訳を出さない方がよい */
  hoursSampleSize: number;
};

type Rec = {
  prefectureName?: string;
  cityName?: string;
  comment?: string;
  sectionName?: string;
  date?: string;
  time?: string;
};

const PLACE_RULES: [string, RegExp][] = [
  ["住宅・敷地内", /(自宅|民家|住宅|玄関|庭|敷地内|車庫|物置|軒下)/],
  ["農地・果樹", /(田んぼ|田畑|畑|水田|農地|果樹|園地|農作業)/],
  ["市街地・施設", /(市街地|商店|スーパー|駅|学校|公園|墓地|神社)/],
  ["道路・交通", /(道路|県道|市道|国道|路上|横断|走行中)/],
  ["山林・林道", /(山林|林道|山中|森|藪|林内|登山|沢)/],
];
const ATTRACTANT_RULES: [string, RegExp][] = [
  ["柿", /柿/],
  ["栗", /栗/],
  ["その他果樹", /(りんご|リンゴ|ブドウ|ぶどう|梨|桃)/],
  ["農作物", /(トウモロコシ|とうもろこし|飼料|稲)/],
  ["生ゴミ・堆肥", /(ゴミ|ごみ|生ごみ|残飯|堆肥)/],
  ["養蜂", /(養蜂|蜂蜜|巣箱)/],
];
const HOUR_BANDS: [string, (h: number) => boolean][] = [
  ["早朝 4-8時", (h) => h >= 4 && h < 8],
  ["日中 8-16時", (h) => h >= 8 && h < 16],
  ["夕方 16-20時", (h) => h >= 16 && h < 20],
  ["夜間 20-4時", (h) => h >= 20 || h < 4],
];

function classify(text: string, rules: [string, RegExp][]): string | null {
  for (const [name, re] of rules) if (re.test(text)) return name;
  return null;
}

export function regionProfile(records: Rec[], region: string): RegionProfile {
  const n = records.length;
  const monthly = new Array(12).fill(0);
  const months = new Set<string>();
  let commentLen = 0;
  const placeCount: Record<string, number> = {};
  let placed = 0;

  for (const r of records) {
    const d = (r.date ?? "").trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) {
      monthly[Number(d.slice(5, 7)) - 1]++;
      months.add(d.slice(0, 7));
    }
    commentLen += (r.comment ?? "").length;
    const p = classify(`${r.comment ?? ""} ${r.sectionName ?? ""}`, PLACE_RULES);
    if (p) {
      placed++;
      placeCount[p] = (placeCount[p] ?? 0) + 1;
    }
  }

  const avgCommentLength = n > 0 ? commentLen / n : 0;
  const placeClassifiedRate = n > 0 ? placed / n : 0;
  const monthsCovered = months.size;
  const calMonths = new Set([...months].map((m) => m.slice(5, 7)));
  const allCalendarMonths = calMonths.size >= 12;

  const total = monthly.reduce((a, b) => a + b, 0);
  const autumn = monthly[8] + monthly[9] + monthly[10];
  const early = monthly[5] + monthly[6];

  const withTime = records.filter((r) => /^\d{2}:\d{2}$/.test(r.time ?? ""));
  const hours = HOUR_BANDS.map(([key, test]) => {
    const c = withTime.filter((r) => test(Number((r.time ?? "").slice(0, 2)))).length;
    return { key, count: c, share: withTime.length > 0 ? c / withTime.length : 0 };
  });

  return {
    region,
    quality: {
      records: n,
      avgCommentLength,
      placeClassifiedRate,
      monthsCovered,
      allCalendarMonths,
      // 季節性は「全ての月にデータがある」ことが前提。一部の月しか無い地域で
      // ピーク月や秋/初夏比を出すと、欠測がそのままパターンに見える。
      seasonComparable: allCalendarMonths && monthsCovered >= 18,
      textReliable: avgCommentLength >= 15 && placeClassifiedRate >= 0.2,
    },
    monthly,
    peakMonth: total > 0 ? monthly.indexOf(Math.max(...monthly)) + 1 : 0,
    autumnRatio: early > 0 ? autumn / early : null,
    places: PLACE_RULES.map(([key]) => {
      const c = placeCount[key] ?? 0;
      return { key, count: c, share: placed > 0 ? c / placed : 0 };
    })
      .filter((p) => p.count > 0)
      .sort((a, b) => b.count - a.count),
    attractants: ATTRACTANT_RULES.map(([key, re]) => {
      const c = records.filter((r) => re.test(r.comment ?? "")).length;
      return { key, count: c, share: n > 0 ? c / n : 0 };
    })
      .filter((a) => a.count > 0)
      .sort((a, b) => b.count - a.count),
    hours,
    hoursSampleSize: withTime.length,
  };
}
