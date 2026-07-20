import type { Metadata } from "next";
import Link from "next/link";
import { getCachedSightings } from "@/lib/sightings-cache";
import {
  activityRisk,
  attractantSeason,
  placeRisk,
  severityBreakdown,
} from "@/lib/contact-risk";
import { recurrence, concentration } from "@/lib/recurrence";
import { bunaSummary, BUNA_SOURCE_URL } from "@/data/buna-index";
import { loadForecastLog, forecastAccuracy } from "@/lib/forecast-log";
import { jstToday } from "@/lib/jst-date";
import { KeyPoints, Callout, References } from "@/components/ArticleCards";
import { BarRow, MonthlyBars } from "./BarRow";

const SLUG = "avoid-encounter";

export const metadata: Metadata = {
  title: "データが示す、クマに会わないための5つのこと｜Kuma Watch",
  description:
    "全国の出没記録8.7万件を分析すると、出没が多い場所と危ない場所は違う、被害は特定の行動に偏る、一度出た場所は1週間危ない、といった傾向が見えます。今年の秋の見通しと、明日から取れる対策をまとめました。",
  alternates: { canonical: `/research/${SLUG}` },
  robots: { index: true, follow: true },
};

export const revalidate = 21600; // 6h

export default async function AvoidEncounterPage() {
  const all = await getCachedSightings();
  const today = jstToday();
  const year = Number(today.slice(0, 4));

  const place = placeRisk(all);
  const activity = activityRisk(all);
  const attractants = attractantSeason(all);
  const severity = severityBreakdown(all);
  const rec7 = recurrence(all, 7, { since: "2023-01-01" });
  const rec30 = recurrence(all, 30, { since: "2023-01-01" });
  const conc = concentration(all, { since: "2023-01-01" });
  const mast = bunaSummary(year);
  const log = loadForecastLog();
  const acc = forecastAccuracy(log);

  const kaki = attractants.find((a) => a.key === "柿");
  const maxLift = Math.max(...activity.map((a) => a.lift), 1);
  const maxRate = Math.max(...place.buckets.map((b) => b.rate), 0.001);
  const mostCommon = [...place.buckets].sort((a, b) => b.count - a.count)[0];
  const mostRisky = place.buckets[0]; // placeRisk は被害率の降順
  const singleShare =
    conc.totalCells > 0 ? conc.singleCells / conc.totalCells : 0;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <header>
        <p className="text-[13px] font-bold tracking-wide text-amber-700">
          全国データ分析
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl">
          データが示す、クマに会わないための5つのこと
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
          `被害は「何をしていたか」に強く偏る。${activity[0]?.key ?? "山菜・きのこ採り"}が突出`,
          `秋の誘引物は柿が圧倒的で、${kaki?.peakMonth ?? 10}月に集中する`,
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
          出没記録のうち場所を判別できた {place.classified.toLocaleString()} 件が対象です。
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
      <Callout label="ここから言えること" tone="amber">
        地図で「出没が多い場所」を避けても、危険を避けたことにはなりません。
        車で通る道より、<strong>畑や果樹園で作業する時間</strong>のほうが危険です。
        農作業のときこそ、音を出す・単独を避ける・見通しを確保する。
      </Callout>

      {/* 2 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        2. 被害は「何をしていたか」に強く偏る
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
        人身被害の記録に、その行動がどれだけ多く現れるかを、全記録での出現率と比べました。
        1.0倍なら偏りなし、大きいほど被害に偏って現れます。
      </p>
      <div className="not-prose my-5 rounded-xl border border-stone-200 p-4">
        {activity.map((a) => (
          <BarRow
            key={a.key}
            label={a.key}
            ratio={a.lift / maxLift}
            valueText={`${a.lift.toFixed(1)}倍`}
            emphasis={a.lift >= 5}
          />
        ))}
        <p className="mt-2 text-[12px] leading-relaxed text-stone-500">
          倍率は目安です。人身被害の記録は「人が何をしていたか」を書きますが、通常の
          目撃記録はクマの様子だけを書くことが多く、倍率は実際より大きく出ます。
          順位を読んでください。車の運転中だけが1倍を下回り、1の結果と一致します。
        </p>
      </div>
      <Callout label="ここから言えること" tone="amber">
        山菜・きのこ採りは、<strong>藪に入る・かがむ・音を立てない・両手がふさがる</strong>
        が同時に揃います。クマ側からは人が見えず、人からもクマが見えません。
        鈴やラジオを鳴らし、複数人で、こまめに周囲を見る。
      </Callout>

      {/* 3 */}
      {kaki && (
        <>
          <h2 className="mt-10 text-2xl font-bold text-stone-900">
            3. 秋の誘引物は柿が圧倒的
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
          <Callout label="ここから言えること" tone="amber">
            <strong>収穫しない柿の木を放置しない。</strong>
            これは予測が外れても効く対策です。実を落とす、枝を切る、
            難しければ電気柵で囲う。庭の1本が集落全体を呼び寄せます。
          </Callout>
        </>
      )}

      {/* 4 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        4. 一度出た場所は、しばらく危ない
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

      {/* 5 */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        5. 今年の秋はどうなるか
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
        山菜・きのこ採りの危険や、3の柿の管理は、実りの良し悪しと関係なく効きます。
        <strong>予測は備えの強弱を決めるもので、備えそのものを省く理由にはなりません。</strong>
      </Callout>

      {/* まとめ */}
      <h2 className="mt-10 text-2xl font-bold text-stone-900">
        まとめ — 明日からできること
      </h2>
      <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-stone-700">
        <li>
          <strong>1. 農作業・山菜採りのときこそ警戒する。</strong>
          出没件数の多い道路より、こちらの方が被害率は高い。
        </li>
        <li>
          <strong>2. 音を出し、単独を避ける。</strong>
          特に藪に入る作業。両手がふさがる状況が最も危ない。
        </li>
        <li>
          <strong>3. 収穫しない柿を放置しない。</strong>
          秋の誘引物として突出している。遭遇機会そのものを減らせる。
        </li>
        <li>
          <strong>4. 近所で出没があったら1週間は警戒する。</strong>
          その場所の平常時より約{rec7.lift.toFixed(1)}倍に上がる。
        </li>
        <li>
          <strong>5. 「初めての場所でも会う」前提でいる。</strong>
          出没地点の約半数は1回きり。既知の危険箇所だけでは足りない。
        </li>
      </ol>

      <Callout label="人身被害の記録について" tone="red">
        分析対象のうち、人が被害に遭ったと読める記録は{" "}
        {(
          severity.death +
          severity.severe +
          severity.light +
          severity.unspecified
        ).toLocaleString()}
        件でした（うち程度が明記されているのは{" "}
        {(severity.death + severity.severe + severity.light).toLocaleString()}件）。
        程度を書くかどうかは自治体ごとに運用が違うため、地域間の比較には使えません。
      </Callout>

      {/* B2B 導線 */}
      <section className="not-prose mt-12 rounded-2xl border-2 border-stone-300 bg-stone-50 p-6">
        <h2 className="text-xl font-bold text-stone-900">
          地域ごとに見ると、傾向はさらに変わります
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-stone-700">
          ここまでは全国の平均です。実際には地域差が大きく、全国の対策をそのまま
          配っても噛み合いません。たとえば秋に出没が偏る度合いは、富山県では年によって
          16倍もの開きがあるのに対し、岐阜県では凶作の年でもほとんど動きません。
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
