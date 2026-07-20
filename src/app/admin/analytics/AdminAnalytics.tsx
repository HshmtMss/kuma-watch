"use client";

import { useCallback, useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

type MonthPoint = { month: string; count: number };
type SeasonPoint = { month: number; thisYear: number; priorAvg: number };
type PrefRow = { pref: string; d90: number; d365: number };
type Hotspot = {
  pref: string;
  city: string;
  recent: number;
  baseline: number;
  ratio: number;
};
type Bucket = { label: string; count: number };
type SeverityPoint = { month: string; injury: number; cull: number };
type IncidentRow = { date: string; pref: string; city: string; comment: string };

type Momentum = {
  d7: number;
  prev7: number;
  d30: number;
  prev30: number;
  topMovers: { pref: string; recent: number; prev: number; delta: number }[];
};
type RegimeYear = {
  year: number;
  total: number;
  ratio: number | null;
  type: "autumn" | "summer" | "unknown";
  complete: boolean;
};
type BacktestRow = {
  year: number;
  actual: number;
  predictedAllYears: number;
  predictedSameType: number;
  errorAllYears: number;
  errorSameType: number;
  type: string;
};
type Regime = {
  years: RegimeYear[];
  backtest: BacktestRow[];
  typeSources?: string[];
  mast?: {
    year: number;
    avgFlowerIndex: number;
    poorPrefs: number;
    totalPrefs: number;
    predictsAutumn: boolean;
    sourceUrl: string;
  } | null;
  mastHistory?: { year: number; avgFlower: number; poorPrefs: number; totalPrefs: number }[];
  forecastOct: {
    month: number;
    predicted: number;
    basisYears: number[];
    caveat: string | null;
  } | null;
};
type PlaceBucket = { key: string; count: number; injuries: number; rate: number };
type Attractant = { key: string; count: number; monthly: number[]; peakMonth: number };
type ActivityRisk = { key: string; injuries: number; allMentions: number; lift: number };
type Contact = {
  place: { buckets: PlaceBucket[]; classified: number; total: number };
  attractants: Attractant[];
  activity: ActivityRisk[];
  severity: { death: number; severe: number; light: number; unspecified: number };
};
type ForestBand = {
  label: string;
  share: number;
  landShare: number;
  lift: number;
  count: number;
};
type ForestData = {
  bands: { bands: ForestBand[]; matched: number };
  byYear: { year: number; count: number; avgForest: number; nearHumanShare: number }[];
  stableSources: string[];
} | null;
type RegionProfile = {
  region: string;
  quality: {
    records: number;
    avgCommentLength: number;
    placeClassifiedRate: number;
    monthsCovered: number;
    allCalendarMonths: boolean;
    seasonComparable: boolean;
    textReliable: boolean;
  };
  monthly: number[];
  peakMonth: number;
  autumnRatio: number | null;
  places: { key: string; count: number; share: number }[];
  attractants: { key: string; count: number; share: number }[];
  hours: { key: string; count: number; share: number }[];
  hoursSampleSize: number;
};
type RecurrenceWindow = {
  windowDays: number;
  afterSighting: number;
  baseline: number;
  lift: number;
  sampleSize: number;
};
type Recurrence = {
  windows: RecurrenceWindow[];
  concentration: {
    rows: { topPercent: number; shareOfSightings: number; cells: number }[];
    totalCells: number;
    singleCells: number;
  };
};
type CentroidPoint = { year: number; lat: number; lon: number; count: number };
type MultiBearPoint = {
  month: string;
  total: number;
  multi: number;
  share: number;
};
type YearSummary = {
  year: number;
  total: number;
  peakMonth: number;
  topPref: string;
  injuries: number;
};

type Data = {
  today: string;
  pref: string | null;
  total: number;
  monthly: MonthPoint[];
  seasonality: SeasonPoint[];
  momentum: Momentum;
  centroid: CentroidPoint[];
  multiBear: MultiBearPoint[];
  yearly: YearSummary[];
  prefectures: PrefRow[];
  hotspots: Hotspot[];
  hours: { buckets: Bucket[]; withTime: number };
  dow: Bucket[];
  severity: { series: SeverityPoint[]; recentInjuries: IncidentRow[] };
  regime: Regime;
  contact: Contact;
  recurrence: Recurrence;
  profile: RegionProfile;
  forest: ForestData;
  prefOptions: string[];
};

export default function AdminAnalytics() {
  return (
    <AdminShell active="analytics" title="分析">
      {(secret, deauth) => <Content secret={secret} deauth={deauth} />}
    </AdminShell>
  );
}

function Content({
  secret,
  deauth,
}: {
  secret: string;
  deauth: () => void;
}) {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState("");
  const [pref, setPref] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(
    async (p: string) => {
      setLoading(true);
      setError("");
      try {
        const q = p ? `?pref=${encodeURIComponent(p)}` : "";
        const res = await fetch(`/api/admin/analytics${q}`, {
          headers: { Authorization: `Bearer ${secret}` },
          cache: "no-store",
        });
        if (res.status === 401) {
          deauth();
          return;
        }
        if (!res.ok) throw new Error(String(res.status));
        setData((await res.json()) as Data);
      } catch {
        setError("読み込みに失敗しました。");
      } finally {
        setLoading(false);
      }
    },
    [secret, deauth],
  );

  useEffect(() => {
    load(pref);
  }, [load, pref]);

  if (error && !data)
    return <p className="text-sm text-rose-700">{error}</p>;
  if (!data)
    return <p className="text-sm text-stone-500">集計中…（初回は数秒）</p>;

  const scope = pref || "全国";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm text-stone-600">対象地域</label>
        <select
          value={pref}
          onChange={(e) => setPref(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
        >
          <option value="">全国</option>
          {data.prefOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {loading && <span className="text-xs text-stone-400">更新中…</span>}
        <span className="ml-auto text-xs text-stone-400">
          基準日 {data.today} / 全 {data.total.toLocaleString("ja-JP")} 件
        </span>
      </div>

      {/* M: 森林率 — 出没が起きる土地の性質。対策の投資先を決める材料 */}
      {data.forest && (
        <>
          <Section
            title="M. 出没は森林と人里の「境界」に集中する"
            note={`${scope}・国土数値情報の土地利用メッシュ(約5km)と突き合わせ。「国土の割合」はその森林率帯が国土に占める面積割合で、これと比べて出没が多いか少ないかを見る。`}
          >
            <div className="flex flex-col gap-1.5">
              {data.forest.bands.bands.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <div className="w-20 shrink-0 text-xs tabular-nums">森林率 {b.label}</div>
                  <div className="h-4 flex-1 rounded bg-stone-100">
                    <div
                      className={`h-4 rounded ${b.lift >= 1.5 ? "bg-amber-500" : b.lift >= 1 ? "bg-stone-400" : "bg-stone-300"}`}
                      style={{ width: `${Math.min(100, (b.lift / 2.5) * 100)}%` }}
                    />
                  </div>
                  <div className="w-14 shrink-0 text-right text-sm font-semibold tabular-nums">
                    {b.lift.toFixed(2)}倍
                  </div>
                  <div className="w-28 shrink-0 text-right text-[11px] tabular-nums text-stone-500">
                    出没{(b.share * 100).toFixed(0)}% / 国土{(b.landShare * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-600">
              森林率40-60%のモザイク地帯が最も高く、森林率80%以上の奥山は面積の割に
              少なくなります。守るべきは奥山でも市街地でもなく、その境界です。
              緩衝帯の整備や藪の刈り払いをどこに投資するかの根拠になります。
              （照合できた記録 {data.forest.bands.matched.toLocaleString()} 件）
            </p>
          </Section>

          <Section
            title="M-2. 秋型の年は「人里寄り」で起きる"
            note={`観測条件を固定するため、全期間に存在するソース(${data.forest.stableSources.join("・") || "—"})だけで集計。全ソースで見ると単調に下がって見えるが、それは2023年以降に追加したソースが人里寄りのデータを多く含むためで、実態ではない。`}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                    <th className="py-2 pr-3">年</th>
                    <th className="py-2 pr-3 text-right">件数</th>
                    <th className="py-2 pr-3 text-right">平均森林率</th>
                    <th className="py-2 text-right">森林率40%未満での発生</th>
                  </tr>
                </thead>
                <tbody>
                  {data.forest.byYear.map((y) => {
                    const t = data.regime.years.find((r) => r.year === y.year)?.type;
                    return (
                      <tr key={y.year} className="border-b border-stone-100">
                        <td className="py-1.5 pr-3 tabular-nums">
                          {y.year}
                          {t === "autumn" && (
                            <span className="ml-1 rounded bg-amber-100 px-1 text-[10px] font-bold text-amber-800">
                              秋型
                            </span>
                          )}
                        </td>
                        <td className="py-1.5 pr-3 text-right tabular-nums text-stone-500">
                          {y.count.toLocaleString()}
                        </td>
                        <td className="py-1.5 pr-3 text-right tabular-nums">
                          {(y.avgForest * 100).toFixed(1)}%
                        </td>
                        <td className="py-1.5 text-right font-semibold tabular-nums">
                          {(y.nearHumanShare * 100).toFixed(1)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-600">
              秋型の年（2019・2023・2025）は平均森林率が低く、人里寄りで起きています
              （秋型 平均50.6% / 夏型 56.5%、秋÷初夏比との相関 −0.835）。
              年の「型」は時期がずれるだけでなく、<strong>クマが人の生活圏に近づく</strong>
              ことを意味します。秋型と判明した年は、件数だけでなく住宅地寄りの対策を
              厚くする根拠になります。
            </p>
          </Section>
        </>
      )}

      {/* L: 地域カルテ — 他地域と比べず、その地域の姿だけを出す */}
      <Section
        title={`L. 地域カルテ（${data.profile.region}）`}
        note="対策立案用。他地域との比較ではなく、この地域の中での構成を出す。県をまたいで比べると実態ではなく『記録の詳しさ』を比べることになるため（コメント平均文字数は宮城県1字・青森県5字に対し福島県30字）。2023年以降。"
      >
        {/* データの確からしさを先に出す。これを見ずに下の内訳を読むと誤る */}
        <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
          <div className="text-xs font-bold text-stone-700">この地域のデータの詳しさ</div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:grid-cols-4">
            <QualityItem label="記録件数" value={data.profile.quality.records.toLocaleString()} />
            <QualityItem
              label="コメント平均"
              value={`${data.profile.quality.avgCommentLength.toFixed(0)}字`}
            />
            <QualityItem
              label="場所の分類率"
              value={`${(data.profile.quality.placeClassifiedRate * 100).toFixed(0)}%`}
            />
            <QualityItem
              label="データのある月"
              value={`${data.profile.quality.monthsCovered}ヶ月`}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Judgement ok={data.profile.quality.seasonComparable} label="季節性を語れる" />
            <Judgement ok={data.profile.quality.textReliable} label="場所・誘引物が当てになる" />
          </div>
          {!data.profile.quality.textReliable && (
            <p className="mt-2 text-xs leading-relaxed text-amber-800">
              ⚠ この地域は記録が短く、下の「出没場所」「誘引物」の内訳は当てになりません。
              クマの生態ではなく記録の書き方を反映している可能性が高いので、対策の根拠には
              使わないでください。
            </p>
          )}
          {!data.profile.quality.seasonComparable && (
            <p className="mt-1 text-xs leading-relaxed text-amber-800">
              ⚠ 一部の月しかデータがないため、ピーク月や季節の傾向は欠測を反映している
              可能性があります。
            </p>
          )}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs font-bold text-stone-600">季節（月別件数）</div>
            <div className="mt-2 flex h-24 items-end gap-1">
              {data.profile.monthly.map((v, i) => {
                const max = Math.max(...data.profile.monthly, 1);
                return (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t ${i + 1 === data.profile.peakMonth ? "bg-amber-500" : "bg-stone-300"}`}
                      style={{ height: `${(v / max) * 100}%` }}
                    />
                    <span className="text-[9px] text-stone-400">{i + 1}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-1 text-xs text-stone-600">
              ピーク {data.profile.peakMonth}月
              {data.profile.autumnRatio !== null && (
                <> ／ 秋÷初夏 {data.profile.autumnRatio.toFixed(2)}
                  {data.profile.autumnRatio >= 1.5 ? "（秋に備える地域）" : "（初夏に備える地域）"}
                </>
              )}
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-stone-600">
              出没場所の構成{!data.profile.quality.textReliable && "（参考値）"}
            </div>
            <div className="mt-2 flex flex-col gap-1">
              {data.profile.places.map((p) => (
                <div key={p.key} className="flex items-center gap-2">
                  <div className="w-24 shrink-0 text-xs">{p.key}</div>
                  <div className="h-3.5 flex-1 rounded bg-stone-100">
                    <div
                      className="h-3.5 rounded bg-stone-400"
                      style={{ width: `${p.share * 100}%` }}
                    />
                  </div>
                  <div className="w-10 shrink-0 text-right text-xs tabular-nums">
                    {(p.share * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
              {data.profile.places.length === 0 && (
                <p className="text-xs text-stone-400">分類できる記録がありません</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs font-bold text-stone-600">
              誘引物{!data.profile.quality.textReliable && "（参考値）"}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.profile.attractants.map((a) => (
                <span
                  key={a.key}
                  className="rounded bg-stone-100 px-2 py-1 text-xs tabular-nums"
                >
                  {a.key} {a.count.toLocaleString()}件
                </span>
              ))}
              {data.profile.attractants.length === 0 && (
                <span className="text-xs text-stone-400">言及なし</span>
              )}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-stone-600">時間帯</div>
            {data.profile.hoursSampleSize >= 100 ? (
              <div className="mt-2 flex flex-col gap-1">
                {data.profile.hours.map((h) => (
                  <div key={h.key} className="flex items-center gap-2">
                    <div className="w-24 shrink-0 text-xs">{h.key}</div>
                    <div className="h-3.5 flex-1 rounded bg-stone-100">
                      <div
                        className="h-3.5 rounded bg-stone-400"
                        style={{ width: `${h.share * 100}%` }}
                      />
                    </div>
                    <div className="w-10 shrink-0 text-right text-xs tabular-nums">
                      {(h.share * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-xs leading-relaxed text-stone-500">
                時刻の分かる記録が {data.profile.hoursSampleSize} 件しかないため出しません。
                時刻は主に警察#9110のデータに付いており、秋田県以外はほとんど空欄です。
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* K: 再発性 — 予測モデル無しで明日から使える対策の根拠 */}
      <Section
        title="K. 一度出た場所は、その後どれだけ危ないか"
        note={`${scope}・2023年以降。同じ約1kmメッシュの「活動期(4〜11月)の任意の日」を対照にした倍率。場所そのものの危険度とは別に、直近の出没が短期リスクをどれだけ押し上げるかを見る。`}
      >
        <div className="flex flex-col gap-2">
          {data.recurrence.windows.map((w) => (
            <div
              key={w.windowDays}
              className="flex items-center justify-between rounded-lg border border-stone-200 px-3 py-2"
            >
              <div className="text-sm font-semibold text-stone-900">
                出没から {w.windowDays} 日以内
              </div>
              <div className="flex items-center gap-4 text-sm tabular-nums">
                <span className="text-stone-600">
                  直後 {(w.afterSighting * 100).toFixed(1)}%
                </span>
                <span className="text-stone-400">
                  平常 {(w.baseline * 100).toFixed(1)}%
                </span>
                <span
                  className={`rounded px-2 py-0.5 font-bold ${w.lift >= 2 ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"}`}
                >
                  {w.lift.toFixed(2)}倍
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-stone-600">
          窓が短いほど倍率が高く、時間とともに減衰します。予測モデルが無くても
          「出没があった場所には、少なくとも1週間は近づかない」と言える根拠になります。
          対照の取り方で数字は変わります（観測期間だけを枠にすると平常時を過大評価して
          1倍を割り、暦年全体だと冬眠期を含んで過大に出ます。ここでは活動期を枠にしています）。
        </p>
      </Section>

      <Section
        title="K-2. 出没はどれだけ特定の場所に集中しているか"
        note={`${scope}・2023年以降・約1kmメッシュ。「危険な場所を覚えて避ける」がどこまで有効かの目安。`}
      >
        <div className="flex flex-col gap-1.5">
          {data.recurrence.concentration.rows.map((r) => (
            <div key={r.topPercent} className="flex items-center gap-3">
              <div className="w-28 shrink-0 text-sm tabular-nums">
                上位 {r.topPercent}%
              </div>
              <div className="h-4 flex-1 rounded bg-stone-100">
                <div
                  className="h-4 rounded bg-stone-400"
                  style={{ width: `${r.shareOfSightings * 100}%` }}
                />
              </div>
              <div className="w-16 shrink-0 text-right text-sm tabular-nums">
                {(r.shareOfSightings * 100).toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-stone-600">
          メッシュ {data.recurrence.concentration.totalCells.toLocaleString()} 地点のうち{" "}
          {data.recurrence.concentration.singleCells.toLocaleString()} 地点（
          {(
            (data.recurrence.concentration.singleCells /
              Math.max(1, data.recurrence.concentration.totalCells)) *
            100
          ).toFixed(0)}
          %）は1件のみです。集中は中程度で、「よく出る場所を避ける」だけでは
          半分近くの遭遇を防げません。初めての場所での遭遇も想定した対策が要ります。
        </p>
      </Section>

      {/* J: 接触回避 — 「会わない」ための指標。件数の多さと危険度は一致しない */}
      <Section
        title="J. どこで危ないか（出没の多さ ≠ 危険度）"
        note={`${scope}・コメント本文から場所を分類。分類できるのは全体の約4割で、割合は分類できた中での値。`}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="py-2 pr-3">場所</th>
                <th className="py-2 pr-3 text-right">出没件数</th>
                <th className="py-2 pr-3 text-right">人身被害</th>
                <th className="py-2 text-right">被害率</th>
              </tr>
            </thead>
            <tbody>
              {data.contact.place.buckets.map((b) => (
                <tr key={b.key} className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">{b.key}</td>
                  <td className="py-1.5 pr-3 text-right tabular-nums text-stone-600">
                    {b.count.toLocaleString()}
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums text-stone-600">
                    {b.injuries}
                  </td>
                  <td className="py-1.5 text-right tabular-nums font-semibold text-stone-900">
                    {(b.rate * 100).toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-stone-600">
          出没件数が最も多いのは道路ですが、被害率は最も低くなります（多くが車内からの
          目撃のため）。件数の多い場所を避けても、危険を避けたことにはなりません。
        </p>
      </Section>

      <Section
        title="J-0. 人身被害の程度"
        note="死亡はクマ側の死亡と区別している。「クマは死亡した」「飼い犬死亡」を人の死亡として数えると実データでは大半が誤りになる（59件と出るが、人が亡くなったのは3件）。"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <SeverityTile label="死亡" value={data.contact.severity.death} tone="red" />
          <SeverityTile label="重傷" value={data.contact.severity.severe} tone="amber" />
          <SeverityTile label="軽傷" value={data.contact.severity.light} tone="stone" />
          <SeverityTile
            label="程度の記載なし"
            value={data.contact.severity.unspecified}
            tone="stone"
          />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-stone-600">
          大半は程度が書かれていません。公開元が「軽傷/重傷」を記載するかは
          自治体ごとに違うため、程度別の件数は地域間で比較できません。
        </p>
      </Section>

      <Section
        title="J-2. 何をしているときに襲われているか"
        note="人身被害での出現率 ÷ 全記録での出現率。順位は妥当だが、倍率は報告バイアスで大きめに出る（下記注意）。"
      >
        <div className="flex flex-col gap-2">
          {data.contact.activity.map((a) => (
            <div key={a.key} className="flex items-center gap-3">
              <div className="w-32 shrink-0 text-sm">{a.key}</div>
              <div className="h-5 flex-1 rounded bg-stone-100">
                <div
                  className={`h-5 rounded ${a.lift >= 5 ? "bg-red-400" : a.lift >= 1.5 ? "bg-amber-400" : "bg-stone-300"}`}
                  style={{ width: `${Math.min(100, (a.lift / 90) * 100)}%` }}
                />
              </div>
              <div className="w-24 shrink-0 text-right text-sm tabular-nums">
                {a.lift.toFixed(1)}倍
              </div>
              <div className="w-14 shrink-0 text-right text-xs tabular-nums text-stone-500">
                {a.injuries}件
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-stone-600">
          人身被害の記録は「人が何をしていたか」を書きますが、通常の目撃記録はクマの
          様子だけを書くことが多いため、分母が過小になり倍率は実際より大きく出ます。
          倍率そのものではなく順位で読んでください。車両運転中だけは1倍を下回り、
          車内が安全であることと整合します。
        </p>
      </Section>

      <Section
        title="J-3. 誘引物と時期（接触機会そのものを減らす）"
        note="コメントに現れる誘引物の言及件数と、その月別分布。"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="py-2 pr-3">誘引物</th>
                <th className="py-2 pr-3 text-right">言及</th>
                <th className="py-2">ピーク</th>
              </tr>
            </thead>
            <tbody>
              {data.contact.attractants.map((a) => (
                <tr key={a.key} className="border-b border-stone-100">
                  <td className="py-1.5 pr-3">{a.key}</td>
                  <td className="py-1.5 pr-3 text-right tabular-nums">{a.count.toLocaleString()}</td>
                  <td className="py-1.5 tabular-nums text-stone-600">{a.peakMonth}月</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* I: 年の型と予測 — 出没予測の中核なので最上部に置く */}
      <Section
        title="I. 年の「型」と10月の予測"
        note="秋(9-11月)/初夏(6-7月)の比で年の型を判定する。環境省統計に基づく堅果類の豊凶記録と6年すべて一致した（凶作年は1.46以上、豊作・並作年は0.52以下で重なりなし）。型は堅果類の豊凶を反映していると考えてよい。"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="py-2 pr-3">年</th>
                <th className="py-2 pr-3 text-right">総件数</th>
                <th className="py-2 pr-3 text-right">秋/初夏</th>
                <th className="py-2">型</th>
              </tr>
            </thead>
            <tbody>
              {data.regime.years.map((y) => (
                <tr key={y.year} className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 tabular-nums">{y.year}</td>
                  <td className="py-1.5 pr-3 text-right tabular-nums">
                    {y.total.toLocaleString()}
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums">
                    {y.ratio === null ? "—" : y.ratio.toFixed(2)}
                  </td>
                  <td className="py-1.5">
                    {y.type === "autumn" ? (
                      <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
                        秋型
                      </span>
                    ) : y.type === "summer" ? (
                      <span className="rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-800">
                        夏型
                      </span>
                    ) : (
                      <span className="text-xs text-stone-400">未確定（年途中）</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.regime.mast && (
          <div
            className={`mt-3 rounded-lg border p-3 ${data.regime.mast.predictsAutumn ? "border-amber-300 bg-amber-50" : "border-sky-200 bg-sky-50"}`}
          >
            <div className="text-xs font-bold text-stone-700">
              今年の事前予測（ブナ開花調査・7月上旬公表）
            </div>
            <div className="mt-1 text-lg font-bold text-stone-900">
              {data.regime.mast.predictsAutumn
                ? "秋型になる見込み（凶作）"
                : "秋型にはならない見込み（豊作〜並作）"}
            </div>
            <p className="mt-1 text-xs tabular-nums text-stone-600">
              5県平均の開花指数 {data.regime.mast.avgFlowerIndex.toFixed(2)} ／ 指数1.0未満の県{" "}
              {data.regime.mast.poorPrefs}/{data.regime.mast.totalPrefs}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-stone-600">
              開花指数が1.0を切った年（2019・2023・2025）はすべて秋型でした。
              公表が7月上旬なので、秋のピークの2〜3ヶ月前に判断できます。
              対象は東北5県のブナのみで、中部・西日本やミズナラは含みません。{" "}
              <a
                href={data.regime.mast.sourceUrl}
                rel="noopener"
                className="underline"
              >
                東北森林管理局
              </a>
            </p>
          </div>
        )}

        <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <div className="text-xs font-bold text-emerald-900">
            ブナ開花指数と出没の型の対応（検証済み・順位相関 −0.821）
          </div>
          <div className="mt-1.5 overflow-x-auto">
            <table className="w-full min-w-[380px] text-xs">
              <tbody>
                {(data.regime.mastHistory ?? []).map((mh) => {
                  const y = mh.year;
                  const mast = `開花指数 ${mh.avgFlower.toFixed(2)}（凶作 ${mh.poorPrefs}/${mh.totalPrefs}県）`;
                  const row = data.regime.years.find((r) => r.year === y);
                  return (
                    <tr key={String(y)} className="border-b border-emerald-100 last:border-0">
                      <td className="py-1 pr-3 tabular-nums">{y}</td>
                      <td className="py-1 pr-3 text-right tabular-nums">
                        {row?.ratio?.toFixed(2) ?? "—"}
                      </td>
                      <td className="py-1 pr-3">
                        {row?.type === "autumn" ? "秋型" : row?.type === "summer" ? "夏型" : "—"}
                      </td>
                      <td className="py-1 text-emerald-900">{mast}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-emerald-900">
            凶作年は1.46以上、豊作・並作年は0.52以下で重なりがありません。
            型の判定は観測条件を固定したソース
            {data.regime.typeSources?.length ? `（${data.regime.typeSources.join("・")}）` : ""}
            で行っています。全ソースで計算すると2020年が0.98に沈み、大凶作年なのに
            夏型と誤判定されます。
          </p>
        </div>

        {data.regime.forecastOct && (
          <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-3">
            <div className="text-xs font-semibold text-stone-500">今年の10月の予測</div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-stone-900">
              {data.regime.forecastOct.predicted.toLocaleString()} 件
            </div>
            {data.regime.forecastOct.caveat && (
              <p className="mt-1 text-xs leading-relaxed text-amber-800">
                ⚠ {data.regime.forecastOct.caveat}
              </p>
            )}
            <p className="mt-1 text-[11px] leading-relaxed text-stone-500">
              型は年内の出方からは判別できません（初夏と秋の絶対件数の相関は +0.884 で、
              「初夏が少ない年は秋が荒れる」は成立しない）。事前に型を当てるには
              堅果類の豊凶調査のような外部の先行指標が必要です。
            </p>
          </div>
        )}
      </Section>

      {/* I-2: 予測の答え合わせ */}
      <Section
        title="I-2. 予測の答え合わせ（10月・バックテスト）"
        note="各年の1〜8月実績から10月を予測し、実績と比べたもの。予測を出す以上、当たったかどうかも併記する。"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="py-2 pr-3">年</th>
                <th className="py-2 pr-3 text-right">実績</th>
                <th className="py-2 pr-3 text-right">全年平均</th>
                <th className="py-2 pr-3 text-right">同じ型のみ</th>
              </tr>
            </thead>
            <tbody>
              {data.regime.backtest.slice(-8).map((b) => (
                <tr key={b.year} className="border-b border-stone-100">
                  <td className="py-1.5 pr-3 tabular-nums">{b.year}</td>
                  <td className="py-1.5 pr-3 text-right font-semibold tabular-nums">
                    {b.actual.toLocaleString()}
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums text-stone-500">
                    {b.predictedAllYears.toLocaleString()}
                    <span className="ml-1 text-[11px]">
                      ({(b.errorAllYears * 100).toFixed(0)}%)
                    </span>
                  </td>
                  <td className="py-1.5 pr-3 text-right tabular-nums text-stone-900">
                    {b.predictedSameType.toLocaleString()}
                    <span className="ml-1 text-[11px]">
                      ({(b.errorSameType * 100).toFixed(0)}%)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.regime.backtest.length > 0 && (
          <p className="mt-2 text-xs text-stone-600">
            平均誤差 — 全年平均{" "}
            <strong>
              {(
                (data.regime.backtest.reduce((a, b) => a + b.errorAllYears, 0) /
                  data.regime.backtest.length) *
                100
              ).toFixed(0)}
              %
            </strong>{" "}
            / 同じ型のみ{" "}
            <strong className="text-stone-900">
              {(
                (data.regime.backtest.reduce((a, b) => a + b.errorSameType, 0) /
                  data.regime.backtest.length) *
                100
              ).toFixed(0)}
              %
            </strong>
            。過去数年を平均する方式は性質の違う2つの型を混ぜるため原理的に外します。
          </p>
        )}
      </Section>

      {/* E: 直近の勢い */}
      <Section
        title="E. 直近の勢い"
        note={`${scope}・件数の前週比・前月比。急な立ち上がりを早く掴む。※直近数日は報道/公式の取り込み途中で少なめに出ることがあります。`}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <MomentumStat
            label="直近7日"
            cur={data.momentum.d7}
            prev={data.momentum.prev7}
            prevLabel="前7日"
          />
          <MomentumStat
            label="直近30日"
            cur={data.momentum.d30}
            prev={data.momentum.prev30}
            prevLabel="前30日"
          />
        </div>
        {data.momentum.topMovers.length > 0 && (
          <div className="mt-3">
            <p className="mb-1 text-xs text-stone-500">
              増加が目立つ都道府県（30日 vs 前30日）
            </p>
            <Table
              head={["都道府県", "直近30日", "前30日", "増減"]}
              rows={data.momentum.topMovers.map((m) => [
                m.pref,
                String(m.recent),
                String(m.prev),
                `+${m.delta}`,
              ])}
              emphasizeCol={3}
            />
          </div>
        )}
      </Section>

      {/* A: 時系列トレンド */}
      <Section
        title="A. 時系列トレンド"
        note={`${scope}・月次件数（直近36か月）。出没日ベース。`}
      >
        <LineChart
          labels={data.monthly.map((m) => m.month)}
          series={[
            {
              name: "月次件数",
              color: "#d97706",
              values: data.monthly.map((m) => m.count),
            },
          ]}
          labelEvery={6}
        />
      </Section>

      <Section
        title="季節性（今年 vs 例年）"
        note={`${scope}・月別に今年と過去5年平均を比較。「今年は例年より多いか/早いか」。`}
      >
        <LineChart
          labels={data.seasonality.map((s) => `${s.month}月`)}
          series={[
            {
              name: "今年",
              color: "#d97706",
              values: data.seasonality.map((s) => s.thisYear),
            },
            {
              name: "例年平均",
              color: "#a8a29e",
              dashed: true,
              values: data.seasonality.map((s) => s.priorAvg),
            },
          ]}
          labelEvery={1}
        />
      </Section>

      {/* G: 親子連れ率 */}
      <Section
        title="G. 親子連れ・群れの割合"
        note={`${scope}・月次で複数頭(2頭以上)の出没が占める割合。子育て・群れのシグナル。`}
      >
        <LineChart
          labels={data.multiBear.map((m) => m.month)}
          series={[
            {
              name: "複数頭の割合(%)",
              color: "#7c3aed",
              values: data.multiBear.map((m) => m.share),
            },
          ]}
          labelEvery={4}
        />
      </Section>

      {/* F: 重心移動 */}
      <Section
        title="F. 分布の重心移動（年別）"
        note={`${scope}・年ごとの出没の重心(緯度経度の平均)。緯度が下がる=南下、経度の変化=東西の移動。`}
      >
        {data.centroid.length < 2 ? (
          <Empty>データ不足</Empty>
        ) : (
          <Table
            head={["年", "重心 緯度", "重心 経度", "件数"]}
            rows={data.centroid.map((c) => [
              String(c.year),
              c.lat.toFixed(3),
              c.lon.toFixed(3),
              c.count.toLocaleString("ja-JP"),
            ])}
          />
        )}
      </Section>

      {/* H: 年次サマリー */}
      <Section
        title="H. 年次サマリー"
        note={`${scope}・年別の総件数・ピーク月・最多地域・人身被害数。`}
      >
        <Table
          head={["年", "総件数", "ピーク月", "最多地域", "人身被害"]}
          rows={data.yearly.map((y) => [
            String(y.year),
            y.total.toLocaleString("ja-JP"),
            `${y.peakMonth}月`,
            y.topPref,
            String(y.injuries),
          ])}
        />
      </Section>

      {/* C: 地域傾向・急増検知（全国固定） */}
      <Section
        title="C. 急増地域（全国）"
        note="直近30日の市町村別件数が、過去1年の同期間あたり平均を大きく超えるもの。早期警戒用。※データ源の追加でも急増に見える場合があるため、recent と平均の両方で判断。"
      >
        {data.hotspots.length === 0 ? (
          <Empty>該当なし</Empty>
        ) : (
          <Table
            head={["市町村", "直近30日", "平均/30日", "倍率"]}
            rows={data.hotspots.map((h) => [
              `${h.pref} ${h.city}`,
              String(h.recent),
              String(h.baseline),
              `×${h.ratio}`,
            ])}
            emphasizeCol={3}
          />
        )}
      </Section>

      <Section
        title="都道府県別（全国）"
        note="直近90日 / 直近365日の件数（多い順・上位20）。"
      >
        <Table
          head={["都道府県", "直近90日", "直近365日"]}
          rows={data.prefectures.map((p) => [
            p.pref,
            p.d90.toLocaleString("ja-JP"),
            p.d365.toLocaleString("ja-JP"),
          ])}
        />
      </Section>

      {/* B: 時間帯・曜日 */}
      <Section
        title="B. 出没の時間帯"
        note={`${scope}・時刻が判明した ${data.hours.withTime.toLocaleString("ja-JP")} 件ベース（2時間刻み）。全件ではない点に注意。`}
      >
        <Bars data={data.hours.buckets} color="#0369a1" />
      </Section>

      <Section title="曜日別" note={`${scope}・全記録の曜日分布。`}>
        <Bars data={data.dow} color="#0369a1" />
      </Section>

      {/* D: 重大事案 */}
      <Section
        title="D. 重大事案（人身被害・駆除/捕獲）"
        note={`${scope}・月次件数（直近24か月）。コメントのキーワード抽出のため精度は目安。`}
      >
        <LineChart
          labels={data.severity.series.map((s) => s.month)}
          series={[
            {
              name: "人身被害",
              color: "#e11d48",
              values: data.severity.series.map((s) => s.injury),
            },
            {
              name: "駆除・捕獲",
              color: "#78716c",
              values: data.severity.series.map((s) => s.cull),
            },
          ]}
          labelEvery={4}
        />
      </Section>

      <Section title="直近の人身被害（推定）" note="コメントから人身被害らしき事案を新しい順に抽出。">
        {data.severity.recentInjuries.length === 0 ? (
          <Empty>該当なし</Empty>
        ) : (
          <Table
            head={["日付", "場所", "内容"]}
            rows={data.severity.recentInjuries.map((r) => [
              r.date,
              `${r.pref} ${r.city}`,
              r.comment,
            ])}
          />
        )}
      </Section>
    </div>
  );
}

function SeverityTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "red" | "amber" | "stone";
}) {
  const cls =
    tone === "red"
      ? "border-red-200 bg-red-50 text-red-800"
      : tone === "amber"
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-stone-200 bg-white text-stone-900";
  return (
    <div className={`rounded-xl border p-3 ${cls}`}>
      <div className="text-xs font-semibold opacity-80">{label}</div>
      <div className="mt-1 text-2xl font-bold tabular-nums">{value.toLocaleString()}</div>
    </div>
  );
}

function QualityItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-stone-500">{label}</span>{" "}
      <span className="font-bold tabular-nums text-stone-900">{value}</span>
    </div>
  );
}

function Judgement({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`rounded px-2 py-0.5 text-xs font-bold ${ok ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}
    >
      {ok ? "○" : "×"} {label}
    </span>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-base font-bold text-stone-900">{title}</h2>
      {note && <p className="mb-2 mt-0.5 text-xs text-stone-500">{note}</p>}
      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        {children}
      </div>
    </section>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="py-6 text-center text-sm text-stone-400">{children}</p>;
}

function MomentumStat({
  label,
  cur,
  prev,
  prevLabel,
}: {
  label: string;
  cur: number;
  prev: number;
  prevLabel: string;
}) {
  const delta = cur - prev;
  const pct = prev > 0 ? Math.round((delta / prev) * 100) : null;
  const up = delta > 0;
  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
      <div className="text-[11px] text-stone-500">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className="text-2xl font-bold tabular-nums text-stone-900">
          {cur.toLocaleString("ja-JP")}
        </span>
        <span className="text-xs text-stone-500">件</span>
      </div>
      <div
        className={`mt-1 text-xs font-medium tabular-nums ${
          delta === 0 ? "text-stone-400" : up ? "text-rose-600" : "text-emerald-600"
        }`}
      >
        {prevLabel} {prev.toLocaleString("ja-JP")} 件 → {up ? "+" : ""}
        {delta.toLocaleString("ja-JP")}
        {pct !== null ? `（${up ? "+" : ""}${pct}%）` : ""}
      </div>
    </div>
  );
}

// ---- 折れ線（複数系列・凡例つき） ----
function LineChart({
  labels,
  series,
  labelEvery,
}: {
  labels: string[];
  series: { name: string; color: string; values: number[]; dashed?: boolean }[];
  labelEvery: number;
}) {
  const w = 640;
  const h = 200;
  const padL = 34;
  const padR = 8;
  const padT = 10;
  const padB = 22;
  const n = labels.length;
  const allVals = series.flatMap((s) => s.values);
  const max = Math.max(1, ...allVals);
  const x = (i: number) =>
    padL + (n <= 1 ? 0 : (i / (n - 1)) * (w - padL - padR));
  const y = (v: number) => padT + (1 - v / max) * (h - padT - padB);
  const ticks = [0, max / 2, max].map((v) => Math.round(v));
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full min-w-[520px]"
        role="img"
      >
        {ticks.map((t, i) => (
          <g key={i}>
            <line
              x1={padL}
              x2={w - padR}
              y1={y(t)}
              y2={y(t)}
              stroke="#f0eeec"
            />
            <text x={0} y={y(t) + 3} fontSize={9} fill="#a8a29e">
              {t.toLocaleString("ja-JP")}
            </text>
          </g>
        ))}
        {labels.map((lb, i) =>
          i % labelEvery === 0 || i === n - 1 ? (
            <text
              key={i}
              x={x(i)}
              y={h - 6}
              fontSize={9}
              fill="#a8a29e"
              textAnchor="middle"
            >
              {lb}
            </text>
          ) : null,
        )}
        {series.map((s) => {
          const d = s.values
            .map(
              (v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`,
            )
            .join(" ");
          return (
            <path
              key={s.name}
              d={d}
              fill="none"
              stroke={s.color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.dashed ? "4 3" : undefined}
            />
          );
        })}
      </svg>
      {series.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-3">
          {series.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5 text-xs text-stone-600">
              <span
                className="inline-block h-2 w-4 rounded-full"
                style={{ background: s.color }}
              />
              {s.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- 縦棒 ----
function Bars({ data, color }: { data: Bucket[]; color: string }) {
  const max = Math.max(1, ...data.map((d) => d.count));
  return (
    <div>
      {/* 棒の行: 列を親の高さ(160px)いっぱいに伸ばし、下揃えで積む。
          棒は列の高さに対する % で伸ばす(最大85%=上のラベル用に余白を残す)。 */}
      <div className="flex gap-1" style={{ height: 160 }}>
        {data.map((d) => (
          <div
            key={d.label}
            className="flex h-full flex-1 flex-col items-center justify-end"
          >
            <span className="mb-1 text-[9px] tabular-nums text-stone-400">
              {d.count.toLocaleString("ja-JP")}
            </span>
            <div
              className="w-full rounded-t"
              style={{
                height: `${Math.max(
                  (d.count / max) * 85,
                  d.count > 0 ? 2 : 0,
                )}%`,
                background: color,
              }}
            />
          </div>
        ))}
      </div>
      {/* 目盛りラベルの行(棒と同じ flex-1 で列に揃える) */}
      <div className="mt-1 flex gap-1">
        {data.map((d) => (
          <div
            key={d.label}
            className="flex-1 text-center text-[9px] text-stone-500"
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- 表 ----
function Table({
  head,
  rows,
  emphasizeCol,
}: {
  head: string[];
  rows: string[][];
  emphasizeCol?: number;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
            {head.map((h, i) => (
              <th key={i} className="py-1.5 pr-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-stone-100 last:border-0">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`py-1.5 pr-3 ${
                    j === 0 ? "text-stone-900" : "tabular-nums text-stone-600"
                  } ${emphasizeCol === j ? "font-bold text-rose-700" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
