import Link from "next/link";
import { getCachedSightings } from "@/lib/sightings-cache";
import {
  activityRisk,
  attractantSeason,
  cubShareByMonth,
  injuryByHour,
  placeRisk,
  severityBreakdown,
} from "@/lib/contact-risk";
import { recurrence, concentration } from "@/lib/recurrence";
import { regionProfile } from "@/lib/region-profile";
import { bunaSummary, BUNA_SOURCE_URL } from "@/data/buna-index";
import { loadForecastLog, forecastAccuracy } from "@/lib/forecast-log";
import { jstToday } from "@/lib/jst-date";
import { KeyPoints, Callout, References } from "@/components/ArticleCards";
import {
  BarRow,
  MonthlyBars,
  HourBands,
  RegionCompare,
  MonthlyCompare,
} from "./BarRow";

/** 時刻を4時間ずつの帯に束ねる（時刻ごとだと被害の母数が足りない） */
const HOUR_BANDS: [number, number, string][] = [
  [0, 3, "0-3時"],
  [4, 7, "4-7時"],
  [8, 11, "8-11時"],
  [12, 15, "12-15時"],
  [16, 19, "16-19時"],
  [20, 23, "20-23時"],
];

/**
 * 一般公開向け記事の下書き。まだ公開しない（内容を詰めている段階）。
 * 公開するときは:
 *   1. このファイルを src/app/research/avoid-encounter/page.tsx へ戻す
 *   2. metadata と revalidate を付ける
 *   3. src/lib/research-entries.ts にエントリを追加して一覧に載せる
 * 数字はすべて実データから計算しているので、置き場所を変えるだけでよい。
 */
export default async function ArticleBody() {
  const all = await getCachedSightings();
  const today = jstToday();
  const year = Number(today.slice(0, 4));

  const place = placeRisk(all);
  const activity = activityRisk(all);
  const attractants = attractantSeason(all);
  const severity = severityBreakdown(all);
  const hourly = injuryByHour(all);
  const cubs = cubShareByMonth(all);
  const rec7 = recurrence(all, 7, { since: "2023-01-01" });
  const rec30 = recurrence(all, 30, { since: "2023-01-01" });
  const conc = concentration(all, { since: "2023-01-01" });
  const mast = bunaSummary(year);
  const log = loadForecastLog();
  const acc = forecastAccuracy(log);

  const kaki = attractants.find((a) => a.key === "柿");
  const maxRate = Math.max(...place.buckets.map((b) => b.rate), 0.001);
  const mostCommon = [...place.buckets].sort((a, b) => b.count - a.count)[0];
  const mostRisky = place.buckets[0]; // placeRisk は被害率の降順
  const singleShare =
    conc.totalCells > 0 ? conc.singleCells / conc.totalCells : 0;
  const placedShare = place.total > 0 ? place.classified / place.total : 0;
  const injuryTotal =
    severity.death + severity.severe + severity.light + severity.unspecified;
  const severityStated = severity.death + severity.severe + severity.light;

  // 行動は「被害の件数」を主にする。倍率は報告のクセで膨らむので従に置く。
  const byInjuries = [...activity].sort((a, b) => b.injuries - a.injuries);
  const maxInjuries = Math.max(...byInjuries.map((a) => a.injuries), 1);
  const topLift = [...activity].sort((a, b) => b.lift - a.lift)[0];

  const bands = HOUR_BANDS.map(([s, e, label]) => {
    const slice = hourly.hours.slice(s, e + 1);
    const a = slice.reduce((x, y) => x + y.allShare, 0);
    const i = slice.reduce((x, y) => x + y.injuryShare, 0);
    return {
      label,
      lift: a > 0 ? i / a : 0,
      injuries: Math.round(i * hourly.injurySample),
    };
  });
  const worstBand = [...bands].sort((a, b) => b.lift - a.lift)[0];

  // 親子連れ（複数頭）の月別。母数の小さい月は読まない。
  const cubOct = cubs.find((c) => c.month === 10);
  const cubBase = (() => {
    const solid = cubs.filter((c) => c.total >= 500 && c.month !== 10);
    const t = solid.reduce((s, c) => s + c.total, 0);
    const m = solid.reduce((s, c) => s + c.multi, 0);
    return t > 0 ? m / t : 0;
  })();

  // 地域差の実例。全国平均をそのまま配れないことを示すために2県を並べる。
  const toyama = regionProfile(
    all.filter((r) => r.prefectureName === "富山県"),
    "富山県",
  );
  const gifu = regionProfile(
    all.filter((r) => r.prefectureName === "岐阜県"),
    "岐阜県",
  );
  const spread = (ys: { ratio: number }[]) =>
    ys.length
      ? Math.max(...ys.map((y) => y.ratio)) /
        Math.max(Math.min(...ys.map((y) => y.ratio)), 0.01)
      : 0;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <header>
        <p className="text-[13px] font-bold tracking-wide text-amber-700">
          全国データ分析
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
          データが示す、クマに会わないための6つのこと
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
          全国の出没記録{" "}
          <strong className="tabular-nums">{all.length.toLocaleString()}</strong>{" "}
          件を分析しました。「クマの多い場所を避ける」という常識的な対策が、
          実は危険を避けたことにならない——そんな結果が出ています。
        </p>
        <p className="mt-2 text-[13px] text-stone-500">
          最終更新 {today}／出没データは4時間ごとに更新
        </p>
      </header>

      <KeyPoints
        label="この記事の要点"
        items={[
          `出没が最も多いのは${mostCommon?.key ?? "道路"}だが、被害率は最も低い。件数の多さは危険度ではない`,
          `被害は「何をしていたか」に偏る。${byInjuries[0]?.key ?? "山菜・きのこ採り"}と${byInjuries[1]?.key ?? "農作業中"}で大半を占める`,
          `${worstBand?.label ?? "4-7時"}に被害が偏る。行動の時間をずらすだけでも効く`,
          `秋の誘引物は柿が圧倒的で、${kaki?.peakMonth ?? 10}月に集中する。10月は親子連れも増える`,
          `一度出没があった場所は、その後1週間は平常時の約${rec7.lift.toFixed(1)}倍`,
          `ただし出没地点の${(singleShare * 100).toFixed(0)}%は1回きり。「よく出る場所」だけ避けても足りない`,
        ]}
      />

      {/* 1 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        1. 出没が多い場所と、危ない場所は違う
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
        場所ごとに「出没件数」と「人身被害の割合」を出すと、両者は一致しません。
        下は<strong>被害率</strong>の順です。
      </p>
      <div className="not-prose my-5 rounded-xl border border-stone-200 p-4">
        {place.buckets.map((b) => (
          <BarRow
            key={b.key}
            label={b.key}
            note={`出没 ${b.count.toLocaleString()}件`}
            ratio={b.rate / maxRate}
            valueText={`${(b.rate * 100).toFixed(2)}%`}
            emphasis={b.rate >= maxRate * 0.8}
          />
        ))}
        <p className="mt-2 text-[12px] leading-relaxed text-stone-500">
          棒は被害率。件数は左に文字で添えています（尺度の違う量を同じ図に重ねないため）。
        </p>
      </div>
      <p className="text-[15px] leading-relaxed text-stone-700">
        最も出没が多いのは<strong>{mostCommon?.key}</strong>（
        {mostCommon?.count.toLocaleString()}件）ですが、被害率は{" "}
        {((mostCommon?.rate ?? 0) * 100).toFixed(2)}% と最も低くなります。
        多くが車内からの目撃だからです。逆に被害率が最も高いのは{" "}
        <strong>{mostRisky?.key}</strong>で、件数は{mostCommon?.key}の
        {Math.round((mostCommon?.count ?? 1) / (mostRisky?.count ?? 1))}分の1ほどです。
      </p>
      <Callout label="この図の読み方（重要）" tone="stone">
        場所が判別できたのは全{all.length.toLocaleString()}件のうち{" "}
        <strong>{place.classified.toLocaleString()}件（
        {(placedShare * 100).toFixed(0)}%）</strong>だけです。残りは本文に場所の
        手がかりが無く、集計から外れています。
        <strong>上の割合は「場所が書かれていた記録の中での順位」</strong>であり、
        全出没の内訳ではありません。書かれ方が地域や年で変われば順位も動きます。
      </Callout>
      <Callout label="ここから言えること" tone="amber">
        地図で「出没が多い場所」を避けても、危険を避けたことにはなりません。
        車で通る道より、<strong>畑や果樹園で作業する時間</strong>のほうが危険です。
        農作業のときこそ、音を出す・単独を避ける・見通しを確保する。
      </Callout>

      {/* 2 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        2. 被害は「何をしていたか」に偏る
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
        人身被害の記録に書かれていた行動を数えました。棒は<strong>件数</strong>
        です。
      </p>
      <div className="not-prose my-5 rounded-xl border border-stone-200 p-4">
        {byInjuries.map((a) => (
          <BarRow
            key={a.key}
            label={a.key}
            ratio={a.injuries / maxInjuries}
            valueText={`${a.injuries}件`}
            emphasis={a.injuries >= maxInjuries * 0.6}
          />
        ))}
        <p className="mt-2 text-[12px] leading-relaxed text-stone-500">
          1件に複数の行動が書かれることがあるため、合計は被害件数と一致しません。
        </p>
      </div>
      <p className="text-[15px] leading-relaxed text-stone-700">
        上位は<strong>{byInjuries[0]?.key}</strong>・
        <strong>{byInjuries[1]?.key}</strong>・
        <strong>{byInjuries[2]?.key}</strong>の3つです。
        ここで見落としてはいけないのは、最も多いのが
        <strong>山に入る行動ではなく、日常の{byInjuries[0]?.key}</strong>
        だということです。山菜採りや農作業は「危ないと分かっている行動」ですが、
        散歩は身構えずに出ます。<strong>特別な場所に行かなくても被害に遭う</strong>
        のが実態です。
      </p>
      <Callout label="倍率で語らないことにしました" tone="stone">
        当初は「通常の目撃記録と比べて何倍現れるか」を出していました（
        {topLift?.key}で{topLift?.lift.toFixed(0)}倍）。しかしこれは
        <strong>書かれ方の差をそのまま拾ってしまいます</strong>。被害の記録は人の
        行動を必ず書きますが、通常の目撃記録はクマの様子しか書かないことが多く、
        分母が実態より小さくなるためです。倍率は実際の危険度より大きく出るので、
        ここでは件数だけを載せています。
      </Callout>
      <Callout label="ここから言えること" tone="amber">
        山菜・きのこ採りは、<strong>藪に入る・かがむ・音を立てない・両手がふさがる</strong>
        が同時に揃います。クマ側からは人が見えず、人からもクマが見えません。
        鈴やラジオを鳴らし、複数人で、こまめに周囲を見る。
      </Callout>

      {/* 3 */}
      {hourly.injurySample >= 100 && (
        <>
          <h2 className="mt-10 text-2xl font-bold text-stone-900">
            3. 危ないのは早朝
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
            時刻が分かる記録{hourly.allSample.toLocaleString()}件（うち人身被害{" "}
            {hourly.injurySample}件）で、時間帯ごとに
            「その時間の通報のうち人身被害がどれだけ多いか」を見ました。
          </p>
          <div className="my-5 rounded-xl border border-stone-200 p-4">
            <HourBands bands={bands} />
          </div>
          <p className="text-[15px] leading-relaxed text-stone-700">
            <strong>{worstBand?.label}が突出</strong>して{worstBand?.lift.toFixed(1)}倍、
            この帯だけで被害{worstBand?.injuries}件です。日中は通報自体は多いのに、
            被害の割合はむしろ下がります。早朝はクマが動く時間であると同時に、
            人の側も見通しが悪く、犬の散歩や畑の見回りで<strong>単独・無音で外に出る</strong>
            時間でもあります。
          </p>
          <Callout label="2つの結果が重なる場所" tone="amber">
            被害が最も多い行動は<strong>{byInjuries[0]?.key}</strong>、被害が最も
            偏る時間は<strong>{worstBand?.label}</strong>。この2つが重なるのが
            <strong>早朝の散歩・見回り</strong>です。ここが、全国データから読める
            最も具体的な注意点になります。
          </Callout>
          <Callout label="この数字の限界" tone="stone">
            時刻が入っている記録は全体の{" "}
            {((hourly.allSample / all.length) * 100).toFixed(0)}%
            にとどまり、その大半が警察の通報記録（#9110）由来で、
            <strong>秋田県に強く偏っています</strong>。全国の傾向として断定はできません。
            ただし分子（被害）と分母（全通報）は同じ偏った母集団から取っているので、
            <strong>その中での時間帯の偏りは読めます</strong>。
          </Callout>
          <Callout label="ここから言えること" tone="amber">
            <strong>早朝の見回り・散歩・畑仕事を、少し遅らせる。</strong>
            これは装備も予算も要らず、今日から変えられる対策です。
            どうしても早朝に出るなら、ラジオを鳴らし、ヘッドホンをしない。
          </Callout>
        </>
      )}

      {/* 4 */}
      {kaki && (
        <>
          <h2 className="mt-10 text-2xl font-bold text-stone-900">
            4. 秋は柿と、親子連れ
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
            出没記録の本文に現れる誘引物を数えると、柿が{" "}
            <strong className="tabular-nums">{kaki.count.toLocaleString()}</strong>{" "}
            件で最も多く、時期は{kaki.peakMonth}月に集中します。
          </p>
          <div className="my-5 rounded-xl border border-stone-200 p-4">
            <MonthlyBars monthly={kaki.monthly} peakMonth={kaki.peakMonth} />
          </div>
          <div className="not-prose my-5 rounded-xl border border-stone-200 p-4">
            {attractants.slice(0, 6).map((a) => (
              <BarRow
                key={a.key}
                label={a.key}
                note={`ピーク ${a.peakMonth}月`}
                ratio={a.count / (attractants[0]?.count || 1)}
                valueText={`${a.count.toLocaleString()}件`}
                emphasis={a.key === "柿"}
              />
            ))}
          </div>
          {cubOct && cubOct.total >= 500 && (
            <>
              <h3 className="mt-8 text-lg font-bold text-stone-900">
                同じ10月に、複数頭での出没も増える
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
                頭数が記録されている出没のうち、2頭以上だった割合は
                10月に <strong className="tabular-nums">
                  {(cubOct.share * 100).toFixed(1)}%
                </strong>{" "}
                まで上がります（他の月は平均{" "}
                {(cubBase * 100).toFixed(1)}%）。多くは親子連れとみられます。
              </p>
              <div className="my-5 rounded-xl border border-stone-200 p-4">
                <MonthlyBars
                  monthly={cubs.map((c) =>
                    c.total >= 500 ? Number((c.share * 100).toFixed(1)) : 0,
                  )}
                  peakMonth={10}
                  unit="%"
                />
                <p className="mt-2 text-[12px] leading-relaxed text-stone-500">
                  母数が500件に満たない月は0として伏せています（割合が跳ねるため）。
                </p>
              </div>
              <Callout label="子連れが危ない理由" tone="amber">
                母グマは子を守るために攻撃的になります。
                <strong>子グマだけが見えたら、必ず近くに母グマがいます。</strong>
                かわいいからと近づく・写真を撮るのが最も危険です。
                その場を離れることを最優先に。
              </Callout>
            </>
          )}
          <Callout label="ここから言えること" tone="amber">
            <strong>収穫しない柿の木を放置しない。</strong>
            これは予測が外れても効く対策です。実を落とす、枝を切る、
            難しければ電気柵で囲う。庭の1本が集落全体を呼び寄せます。
          </Callout>
        </>
      )}

      {/* 5 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        5. 一度出た場所は、しばらく危ない
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
        出没があった場所（約1km四方）で、その後にまた出没する割合を、
        同じ場所の平常時と比べました。
      </p>
      <div className="not-prose my-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
          <div className="text-[13px] font-bold text-amber-800">出没から7日以内</div>
          <div className="mt-1 text-4xl font-extrabold tabular-nums text-amber-900">
            {rec7.lift.toFixed(1)}倍
          </div>
          <div className="mt-1 text-[12px] text-stone-600">
            {(rec7.afterSighting * 100).toFixed(0)}% ／ 平常時{" "}
            {(rec7.baseline * 100).toFixed(0)}%
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 p-4 text-center">
          <div className="text-[13px] font-bold text-stone-600">30日以内</div>
          <div className="mt-1 text-4xl font-extrabold tabular-nums text-stone-800">
            {rec30.lift.toFixed(1)}倍
          </div>
          <div className="mt-1 text-[12px] text-stone-600">
            {(rec30.afterSighting * 100).toFixed(0)}% ／ 平常時{" "}
            {(rec30.baseline * 100).toFixed(0)}%
          </div>
        </div>
      </div>
      <p className="text-[15px] leading-relaxed text-stone-700">
        時間が経つほど下がります。<strong>最初の1週間が最も危ない</strong>ということです。
      </p>
      <Callout label="ただし、これだけでは足りません" tone="stone">
        出没があった地点のうち <strong>{(singleShare * 100).toFixed(0)}%</strong> は
        1回きりです（{conc.totalCells.toLocaleString()}地点中{" "}
        {conc.singleCells.toLocaleString()}地点）。
        「よく出る場所を避ける」だけでは、半分近い遭遇を防げません。
        <strong>初めての場所で会う前提</strong>の備えが要ります。
      </Callout>

      {/* 6 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        6. 今年の秋はどうなるか
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
        クマが秋に人里へ降りるかは、ブナなど堅果類の実り具合で大きく変わります。
        東北森林管理局が<strong>7月上旬</strong>に開花調査を公表しており、
        秋のピークの2〜3ヶ月前に見通しを立てられます。
      </p>
      {mast && (
        <div
          className={`not-prose my-5 rounded-2xl border p-5 text-center ${
            mast.avgFlower < 1.0
              ? "border-amber-300 bg-amber-50"
              : "border-sky-200 bg-sky-50"
          }`}
        >
          <div className="text-[13px] font-bold text-stone-600">
            {year}年の見通し（東北5県・ブナ開花調査）
          </div>
          <div className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
            {mast.avgFlower < 1.0
              ? "秋に出没が集中しやすい年"
              : "秋の集中は起きにくい年"}
          </div>
          <div className="mt-2 text-[15px] text-stone-700">
            開花の豊凶指数 <strong className="tabular-nums">{mast.avgFlower.toFixed(2)}</strong>
            ／ 凶作の県 {mast.poorPrefs} / {mast.totalPrefs}
          </div>
        </div>
      )}
      <p className="text-[15px] leading-relaxed text-stone-700">
        過去{acc.verified}年でこの見立ては{" "}
        <strong className="tabular-nums">{acc.correct}回</strong>当たりました
        {acc.rate !== null && `（${(acc.rate * 100).toFixed(0)}%）`}。
        外れた年も記録に残しています。
      </p>
      <div className="not-prose my-5 overflow-x-auto rounded-xl border border-stone-200">
        <table className="w-full min-w-[420px] text-[13px]">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-left text-[12px] text-stone-500">
              <th className="px-3 py-2">年</th>
              <th className="px-3 py-2 text-right">開花指数</th>
              <th className="px-3 py-2">見立て</th>
              <th className="px-3 py-2">結果</th>
            </tr>
          </thead>
          <tbody>
            {log.map((r) => (
              <tr key={r.year} className="border-b border-stone-100 last:border-0">
                <td className="px-3 py-1.5 tabular-nums">{r.year}</td>
                <td className="px-3 py-1.5 text-right tabular-nums">
                  {r.flowerIndex.toFixed(2)}
                </td>
                <td className="px-3 py-1.5">
                  {r.predictedAutumn ? "秋に集中" : "集中しにくい"}
                </td>
                <td className="px-3 py-1.5">
                  {r.correct === undefined ? (
                    <span className="text-stone-400">今年（11月に判明）</span>
                  ) : r.correct ? (
                    <span className="font-bold text-emerald-700">的中</span>
                  ) : (
                    <span className="font-bold text-red-700">外れ</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Callout label="見通しが良くても、対策は変わりません" tone="stone">
        「集中しにくい年」でも出没はゼロにはなりません。実際、2で見た
        山菜・きのこ採りの危険や、4の柿の管理は、実りの良し悪しと関係なく効きます。
        <strong>予測は備えの強弱を決めるもので、備えそのものを省く理由にはなりません。</strong>
      </Callout>

      {/* まとめ — 印刷して配れる形 */}
      <h2 className="mt-12 text-2xl font-bold text-stone-900">
        まとめ — 明日からできること
      </h2>
      <p className="mt-2 text-[13px] text-stone-500">
        このまま印刷して回覧・掲示に使えます。
      </p>
      <div className="not-prose my-5 rounded-2xl border-2 border-stone-800 p-5 print:border-black">
        <p className="text-center text-lg font-extrabold text-stone-900">
          クマに会わないための6か条
        </p>
        <ol className="mt-4 space-y-3">
          {[
            {
              t: "早朝を避ける",
              d: `被害は${worstBand?.label}に集中し、他の時間の${worstBand?.lift.toFixed(1)}倍。見回りや散歩を少し遅らせるだけで効く。`,
            },
            {
              t: "散歩・山菜採り・農作業",
              d: `被害の多くはこの3つ。最多は特別な行動ではなく日常の散歩で、出没件数の多い「道路」より危ない。`,
            },
            {
              t: "音を出し、単独を避ける",
              d: "藪に入る作業は、両手がふさがり音も出ない。鈴かラジオを鳴らし、複数人で。",
            },
            {
              t: "収穫しない柿を放置しない",
              d: `秋の誘引物として突出（${kaki?.count.toLocaleString() ?? "3,000"}件）。庭の1本が集落を呼び寄せる。`,
            },
            {
              t: "近所で出たら1週間は警戒",
              d: `同じ場所での再出没が平常時の約${rec7.lift.toFixed(1)}倍に上がる。`,
            },
            {
              t: "子グマを見たら、母グマがいる",
              d: `10月は複数頭での出没が${cubOct ? (cubOct.share * 100).toFixed(0) : "9"}%に増える。近づかず、その場を離れる。`,
            },
          ].map((x, i) => (
            <li key={x.t} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-800 text-[13px] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <div className="text-[15px] font-bold text-stone-900">{x.t}</div>
                <div className="text-[13px] leading-relaxed text-stone-600">
                  {x.d}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 border-t border-stone-200 pt-3 text-center text-[11px] text-stone-500">
          出典: Kuma Watch 全国出没データベース（{all.length.toLocaleString()}件・
          {today}時点）／ kuma-watch.jp
        </p>
      </div>

      <Callout label="被害の重さは、ほとんど分かりません" tone="red">
        人が被害に遭ったと読める記録は{" "}
        <strong>{injuryTotal.toLocaleString()}件</strong>ありましたが、
        けがの程度まで書かれていたのは{" "}
        <strong>
          {severityStated.toLocaleString()}件（
          {((severityStated / Math.max(injuryTotal, 1)) * 100).toFixed(0)}%）
        </strong>
        だけです。残りは「クマに襲われた」までしか記録がありません。
        これは読み取りに失敗しているのではなく、
        <strong>公表資料にもともと書かれていない</strong>ためです。
        したがって「どの地域の被害が重いか」は、現在の公開データでは分かりません。
        本記事でも比較していません。
      </Callout>

      {/* B2B 導線 */}
      <section className="not-prose mt-12 rounded-2xl border-2 border-stone-300 bg-stone-50 p-6">
        <h2 className="text-xl font-bold text-stone-900">
          地域ごとに見ると、傾向はまったく変わります
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
          ここまでは全国の平均です。実際には地域差が大きく、
          全国向けの対策をそのまま配っても噛み合いません。
          下は「秋(9〜11月)の出没が初夏(6〜7月)の何倍か」を年ごとに並べたものです。
        </p>
        {toyama.yearlyAutumnRatio.length >= 3 &&
          gifu.yearlyAutumnRatio.length >= 3 && (
            <div className="my-5">
              <RegionCompare
                regions={[
                  {
                    region: "富山県",
                    note: `年による開きが約${spread(toyama.yearlyAutumnRatio).toFixed(0)}倍`,
                    series: toyama.yearlyAutumnRatio,
                  },
                  {
                    region: "岐阜県",
                    note: `年による開きは約${spread(gifu.yearlyAutumnRatio).toFixed(0)}倍`,
                    series: gifu.yearlyAutumnRatio,
                  },
                ]}
                caption="縦軸は共通。1.0倍を超えた年（オレンジ）が「秋型」。富山は年によって秋型と夏型が入れ替わるのに対し、岐阜はどの年も夏型のままです。同じ中部地方でも、秋に広報を厚くすべき県とそうでない県が分かれます。"
              />
            </div>
          )}
        <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
          では、それぞれ<strong>いつ</strong>厚くすべきか。
          同じ2県を月別で並べると、備える時期がはっきり分かれます。
        </p>
        <div className="my-5">
          <MonthlyCompare
            regions={[
              {
                region: "富山県",
                note: `全${toyama.monthly.reduce((a, b) => a + b, 0).toLocaleString()}件`,
                monthly: toyama.monthly,
              },
              {
                region: "岐阜県",
                note: `全${gifu.monthly.reduce((a, b) => a + b, 0).toLocaleString()}件`,
                monthly: gifu.monthly,
              },
            ]}
            caption="縦軸は共通（その県の出没に占める割合）。富山は秋に山ができるのに対し、岐阜は初夏に山があり、秋にはむしろ下がります。"
          />
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
          富山は<strong>10〜11月に{(
            ((toyama.monthly[9] + toyama.monthly[10]) /
              (toyama.monthly.reduce((a, b) => a + b, 0) || 1)) *
            100
          ).toFixed(0)}%</strong>が集中し、
          しかもその強さが年によって入れ替わるので、
          「凶作の年の秋」に絞って備える意味があります。
          一方の岐阜は<strong>6〜7月に{(
            ((gifu.monthly[5] + gifu.monthly[6]) /
              (gifu.monthly.reduce((a, b) => a + b, 0) || 1)) *
            100
          ).toFixed(0)}%</strong>が集まり、
          どの年も同じ形です。<strong>岐阜で秋に広報を厚くしても空振りします。</strong>
          出没する場所の構成（住宅地が多いのか、農地が多いのか）も地域で違います。
        </p>
        <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-stone-700">
          <li>・その市町村の季節パターンと、平年と比べた今年の水準</li>
          <li>・出没しやすい場所の構成と、優先すべき誘引物</li>
          <li>・人の生活圏にどれだけ近づいているか（森林率との関係）</li>
          <li>・通知・広報をいつ、どこへ厚くすべきか</li>
        </ul>
        <p className="mt-4 text-[13px] leading-relaxed text-stone-600">
          自治体向けに、地域単位の分析レポートと出没通知の提供を行っています。
        </p>
        <Link
          href="/for-gov"
          className="mt-4 inline-block rounded-xl bg-stone-800 px-6 py-3 text-[15px] font-bold text-white"
        >
          自治体の方へ — 詳しく見る
        </Link>
      </section>

      <References
        items={[
          {
            title: "Kuma Watch 出没データベース",
            citation: `全国の自治体・警察・報道の公開情報を集約。分析時点で ${all.length.toLocaleString()} 件`,
            href: "/data",
            linkText: "収録データについて",
          },
          {
            title: "ブナ開花・結実調査",
            citation: "林野庁 東北森林管理局。1989年以降の豊凶指数",
            href: BUNA_SOURCE_URL,
            linkText: "東北森林管理局",
          },
          {
            title: "堅果類（ブナ・ミズナラ・コナラ）の豊凶調査結果",
            citation: "福島県",
            href: "https://www.pref.fukushima.lg.jp/sec/16035b/kennkaruityousakekka.html",
            linkText: "福島県",
          },
          {
            title: "土地利用細分メッシュ（森林率の算出に使用）",
            citation: "国土交通省 国土数値情報 L03-b",
          },
        ]}
      />
    </article>
  );
}
