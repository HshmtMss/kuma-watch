/**
 * 人とクマの「接触」の分析。
 *
 * 目的は出没件数を数えることではなく、**会わずに済ませる**こと。そのため
 * 「どこで多いか」ではなく「どこで・何をしているときに危ないか」を見る。
 * 実データではこの2つが一致しない:
 *
 *   場所          出没件数    人身被害率
 *   道路・交通      12,533件    0.21%   ← 最も多いが最も安全(車内)
 *   農地・果樹       4,548件    1.54%   ← 件数は1/3だが被害率は7倍
 *
 * 出没マップを「多い場所を避ける」ために使うと、実は危険度の低い道路を
 * 避けて危険度の高い農地に向かうことになりかねない。
 *
 * 判定はコメント本文の語句マッチ。コメントは88.4%が埋まっているが、
 * 場所として分類できるのは全体の約42%。分類できない分は集計から外れる
 * ので、割合は「分類できた中での割合」であることを表示側で明示すること。
 */

export type Bucket = { key: string; count: number; injuries: number; rate: number };

type Rec = { comment?: string; sectionName?: string; date?: string; time?: string };

/** 出没場所。人の生活空間に近い順に並べる */
const PLACE_RULES: [string, RegExp][] = [
  ["住宅・敷地内", /(自宅|民家|住宅|玄関|庭|敷地内|車庫|物置|軒下|ベランダ|窓)/],
  ["市街地・施設", /(市街地|商店|スーパー|駅|学校|小学校|中学校|保育|病院|公園|墓地|神社|寺)/],
  ["農地・果樹", /(田んぼ|田畑|畑|水田|農地|果樹|園地|ハウス|農作業)/],
  ["道路・交通", /(道路|県道|市道|国道|路上|横断|走行中|車道|歩道)/],
  ["河川・河川敷", /(河川|川沿い|河原|堤防)/],
  ["山林・林道", /(山林|林道|山中|森|藪|林内|登山|沢)/],
];

/** 誘引物。放置をやめれば接触機会そのものを減らせる */
const ATTRACTANT_RULES: [string, RegExp][] = [
  ["柿", /柿/],
  ["栗", /栗/],
  ["その他果樹", /(りんご|リンゴ|ブドウ|ぶどう|梨|桃)/],
  ["農作物", /(トウモロコシ|とうもろこし|スイートコーン|飼料|穀物|稲)/],
  ["家畜・ペット", /(鶏|ニワトリ|家畜|ペットフード)/],
  ["養蜂", /(養蜂|蜂蜜|ハチミツ|蜂の巣|巣箱)/],
  ["生ゴミ・堆肥", /(ゴミ|ごみ|生ごみ|残飯|堆肥|コンポスト)/],
];

/** 被害時に人がしていた行動 */
const ACTIVITY_RULES: [string, RegExp][] = [
  ["山菜・きのこ採り", /(山菜|きのこ|キノコ|タケノコ|たけのこ)/],
  ["農作業中", /(農作業|草刈り|畑仕事|収穫)/],
  ["登山・入山", /(登山|入山|ハイキング|トレイル)/],
  ["歩行・散歩", /(散歩|歩行中|歩いていた|通行中|下校|通学|通勤)/],
  ["ランニング等", /(ランニング|ジョギング)/],
  ["車両運転中", /(走行中|運転中|車で)/],
];

/**
 * 人が被害に遭ったことを示す語。「けがを」「けが人」のように人が主語だと
 * 分かる形に寄せる。単に「けが」だけだとクマの負傷も拾う。
 */
const INJURY_RE =
  /(襲われ|噛まれ|かまれ|引っかか|負傷|重傷|軽傷|けがを|ケガを|けが人|被害に遭)/;

/**
 * 死亡の主語がクマや動物側であることを示す語。
 * 「死亡」を人身被害として数えると、実データでは大半が誤りになる。実例:
 *   「走行中の車が体長約1mのクマと衝突。クマは死亡した。」
 *   「線路上で列車とクマ1頭が衝突し…死亡が確認されました。」
 *   「被害：飼い犬(柴犬)死亡。」
 * 59件を人の死亡として数えていたが、実際に人が亡くなったのは3件だった。
 */
const ANIMAL_DEATH_RE =
  /((クマ|熊|個体|子|親|子グマ|子熊|飼い犬|犬|猫|鹿|イノシシ)(は|が|も|を|の)?\s*死亡|死体|轢かれ|衝突.{0,12}死亡|駆除)/;

/** 人が亡くなったことを示す語 */
const HUMAN_DEATH_RE =
  /((男性|女性|人|住民|男|女)\D{0,10}死亡|死亡した(男性|女性)|襲われ.{0,20}死亡|心肺停止)/;
/**
 * 「けが人はいませんでした」のような否定文を人身被害として数えないための除外。
 * これが無いと実測で11件を誤カウントしていた。
 */
const INJURY_NEGATION_RE = /(被害はな|けが人はいな|けがはな|負傷者はいな|人的被害はな|けが人な)/;

export type Severity = "death" | "severe" | "light" | "unspecified";

/**
 * 人身被害の程度。死亡はクマ側の死亡と厳密に区別する。
 * 被害でなければ null。
 */
export function injurySeverity(r: Rec): Severity | null {
  if (!isInjuryRecord(r)) return null;
  const c = r.comment ?? "";
  if (/死亡|亡くな/.test(c) && HUMAN_DEATH_RE.test(c) && !ANIMAL_DEATH_RE.test(c))
    return "death";
  if (/(重傷|重体|意識不明|骨折|大けが)/.test(c)) return "severe";
  if (/(軽傷|軽い(けが|ケガ))/.test(c)) return "light";
  return "unspecified";
}

/** 程度別の件数 */
export function severityBreakdown(records: Rec[]): Record<Severity, number> {
  const out: Record<Severity, number> = {
    death: 0,
    severe: 0,
    light: 0,
    unspecified: 0,
  };
  for (const r of records) {
    const s = injurySeverity(r);
    if (s) out[s]++;
  }
  return out;
}

export function isInjuryRecord(r: Rec): boolean {
  const c = r.comment ?? "";
  return INJURY_RE.test(c) && !INJURY_NEGATION_RE.test(c);
}

function classify(text: string, rules: [string, RegExp][]): string | null {
  for (const [name, re] of rules) if (re.test(text)) return name;
  return null;
}

/** 場所ごとの出没件数と人身被害率 */
export function placeRisk(records: Rec[]): { buckets: Bucket[]; classified: number; total: number } {
  const count: Record<string, number> = {};
  const inj: Record<string, number> = {};
  let classified = 0;
  for (const r of records) {
    const p = classify(`${r.comment ?? ""} ${r.sectionName ?? ""}`, PLACE_RULES);
    if (!p) continue;
    classified++;
    count[p] = (count[p] ?? 0) + 1;
    if (isInjuryRecord(r)) inj[p] = (inj[p] ?? 0) + 1;
  }
  const buckets = PLACE_RULES.map(([key]) => {
    const c = count[key] ?? 0;
    const i = inj[key] ?? 0;
    return { key, count: c, injuries: i, rate: c > 0 ? i / c : 0 };
  })
    .filter((b) => b.count > 0)
    .sort((a, b) => b.rate - a.rate);
  return { buckets, classified, total: records.length };
}

/** 誘引物の言及件数と、その月別分布 */
export function attractantSeason(records: Rec[]): {
  key: string;
  count: number;
  monthly: number[];
  peakMonth: number;
}[] {
  return ATTRACTANT_RULES.map(([key, re]) => {
    const monthly = new Array(12).fill(0);
    let count = 0;
    for (const r of records) {
      if (!re.test(r.comment ?? "")) continue;
      const m = Number((r.date ?? "").slice(5, 7));
      if (m >= 1 && m <= 12) monthly[m - 1]++;
      count++;
    }
    const peakMonth = monthly.indexOf(Math.max(...monthly)) + 1;
    return { key, count, monthly, peakMonth };
  })
    .filter((a) => a.count >= 20)
    .sort((a, b) => b.count - a.count);
}

export type ActivityRisk = {
  key: string;
  injuries: number;
  allMentions: number;
  /** 人身被害での出現率 ÷ 全記録での出現率 */
  lift: number;
};

/**
 * 被害時の行動の偏り。
 *
 * 注意: これは報告バイアスを含む。人身被害の記録は「人が何をしていたか」を
 * 書くが、通常の目撃記録はクマの様子だけを書くことが多い。したがって
 * 分母(全記録での出現率)が過小になり、lift は実際より大きく出る。
 * 順位の解釈は妥当だが、倍率そのものを額面通りに受け取らないこと。
 */
export function activityRisk(records: Rec[]): ActivityRisk[] {
  const injuries = records.filter(isInjuryRecord);
  if (!injuries.length || !records.length) return [];
  return ACTIVITY_RULES.map(([key, re]) => {
    const i = injuries.filter((r) => re.test(r.comment ?? "")).length;
    const a = records.filter((r) => re.test(r.comment ?? "")).length;
    const lift = a > 0 ? i / injuries.length / (a / records.length) : 0;
    return { key, injuries: i, allMentions: a, lift };
  })
    .filter((a) => a.allMentions >= 30)
    .sort((a, b) => b.lift - a.lift);
}
