import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-2025-retrospective")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://kuma-watch.jp/articles/${meta.slug}` },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://kuma-watch.jp/articles/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedAt,
    modifiedTime: meta.updatedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        <strong>結論</strong>: 2025 年はくまウォッチ集計で全国 <strong>39,801 件</strong>の
        クマ出没を記録した、近年で突出した大量年でした。平年（2023〜2024 年は約 7,500 件）の
        <strong>約 5 倍</strong>。秋田県だけで 13,552 件、10 月 30 日は 1 日で 665 件と、
        過去最悪規模の年に何が起きたかをくまウォッチのデータで振り返ります。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            2025年は全国<strong>39,801件と近年で突出した大量年</strong>（平年の約5倍）。
          </>,
          <>
            <strong>秋田県だけで13,552件</strong>、10月30日は1日665件。
          </>,
          <>
            過去最悪規模の年に<strong>何が起きたかをデータで振り返る</strong>。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "summary", title: "2025年は何が異常だったのか" },
          { id: "monthly", title: "月別の動き — 10月にピーク" },
          { id: "prefecture", title: "県別 — 秋田県が全国の3割を占めた" },
          { id: "vs-2024", title: "2024年からの倍率 — 急増の地理" },
          { id: "peak-days", title: "1日あたり最多日 — 10月末の壁" },
          { id: "causes", title: "原因として指摘される3要因" },
          { id: "implications", title: "2025年が示した構造変化" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="summary">2025年は何が異常だったのか</h2>
      <p>
        くまウォッチは全国 47 都道府県・70 以上の自治体公開情報・報道情報を統合した出没データベースを構築しています。
        2025 年の全国合計は <strong>39,801 件</strong>。比較対象として、2023 年は 7,831 件、2024 年は 7,423 件でした。
        2025 年だけが <strong>5 倍以上</strong> に膨らんだ突出した年です。
      </p>
      <p className="text-sm text-stone-500">
        ※ この記事の件数はすべて記事公開時（2026 年 5 月）のくまウォッチ集計です。その後に取り込み元を追加しているため、現在の集計値とは異なります。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">年</th>
              <th className="px-3 py-2 text-right">全国合計</th>
              <th className="px-3 py-2 text-right">前年比</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 tabular-nums">
            <tr>
              <td className="px-3 py-2 font-semibold">2023年</td>
              <td className="px-3 py-2 text-right">7,831 件</td>
              <td className="px-3 py-2 text-right text-stone-500">—</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">2024年</td>
              <td className="px-3 py-2 text-right">7,423 件</td>
              <td className="px-3 py-2 text-right text-stone-500">0.95倍</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-3 py-2 font-semibold text-red-900">2025年</td>
              <td className="px-3 py-2 text-right font-bold text-red-900">
                39,801 件
              </td>
              <td className="px-3 py-2 text-right font-bold text-red-900">
                5.4倍
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        環境省の人身被害統計（速報値）でも 2025 年度（4 月〜翌 3 月）は被害者 238 人と過去最多を記録し、
        死亡者は 13 人と前年度（3 人）の 4 倍を超えました。
        単なる目撃情報の増加ではなく、人間との衝突実態が悪化した年でした。
      </p>

      <h2 id="monthly">月別の動き — 10月にピーク</h2>
      <p>
        2025 年の月別件数を時系列で並べると、9 月までは前年同期比 2〜3 倍程度のペースで推移していました。
        異常事態が表面化したのは <strong>10 月</strong>。単月で <strong>12,452 件</strong>と、
        2023 年・2024 年の年間合計（各 7,000 件台）を 1 ヶ月で上回りました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">月</th>
              <th className="px-3 py-2 text-right">件数</th>
              <th className="px-3 py-2 text-right">年間比</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 tabular-nums">
            {[
              { m: "1月", c: 185 },
              { m: "2月", c: 57 },
              { m: "3月", c: 106 },
              { m: "4月", c: 621 },
              { m: "5月", c: 1860 },
              { m: "6月", c: 3292 },
              { m: "7月", c: 4070 },
              { m: "8月", c: 3586 },
              { m: "9月", c: 4119 },
              { m: "10月", c: 12452, highlight: true },
              { m: "11月", c: 8038, highlight: true },
              { m: "12月", c: 1415 },
            ].map((r) => (
              <tr key={r.m} className={r.highlight ? "bg-red-50" : ""}>
                <td className="px-3 py-2 font-semibold">{r.m}</td>
                <td
                  className={`px-3 py-2 text-right ${r.highlight ? "font-bold text-red-900" : ""}`}
                >
                  {r.c.toLocaleString()} 件
                </td>
                <td className="px-3 py-2 text-right text-stone-500">
                  {((r.c / 39801) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        10 月（31%）と 11 月（20%）の 2 ヶ月だけで <strong>年間の半数以上</strong> が集中。
        季節別の解説は <Link href="/articles/autumn">秋のクマ対策</Link> および{" "}
        <Link href="/articles/autumn-forecast-2026">2026年 秋のクマ大量出没予報</Link>
        も併せてご覧ください。
      </p>

      <h2 id="prefecture">県別 — 秋田県が全国の3割を占めた</h2>
      <p>
        2025 年の県別件数を見ると、上位は東北・北陸・北海道に集中しています。
        最多の <strong>秋田県は 13,552 件</strong>と、全国の <strong>34%</strong> を 1 県で占めました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">順位</th>
              <th className="px-3 py-2 text-left">都道府県</th>
              <th className="px-3 py-2 text-right">2025年 件数</th>
              <th className="px-3 py-2 text-right">全国比</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 tabular-nums">
            {[
              ["1", "秋田県", 13552, "/place/秋田県"],
              ["2", "新潟県", 3462, "/place/新潟県"],
              ["3", "宮城県", 3403, "/place/宮城県"],
              ["4", "青森県", 3329, "/place/青森県"],
              ["5", "北海道", 3226, "/place/北海道"],
              ["6", "山形県", 3083, "/place/山形県"],
              ["7", "福島県", 1965, "/place/福島県"],
              ["8", "長野県", 1158, "/place/長野県"],
              ["9", "富山県", 1059, "/place/富山県"],
              ["10", "群馬県", 765, "/place/群馬県"],
            ].map(([rank, pref, count, href]) => (
              <tr key={pref as string}>
                <td className="px-3 py-2 text-stone-500">{rank}</td>
                <td className="px-3 py-2 font-semibold">
                  <Link
                    href={href as string}
                    className="text-amber-700 underline hover:no-underline"
                  >
                    {pref}
                  </Link>
                </td>
                <td className="px-3 py-2 text-right tabular-nums">
                  {(count as number).toLocaleString()}
                </td>
                <td className="px-3 py-2 text-right text-stone-500">
                  {(((count as number) / 39801) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        北海道はヒグマ域、東北・北陸の各県は本州ツキノワグマ域。
        生息するクマの種は異なりますが、両者とも 2025 年は突出した年となりました。
        <Link href="/articles/species-difference">ツキノワグマとヒグマ — 行動・対処の違い</Link>
        も参考にしてください。
      </p>

      <h2 id="vs-2024">2024年からの倍率 — 急増の地理</h2>
      <p>
        前年（2024 年）と比較すると、急増した県と平年並みに収まった県が明確に分かれます。
      </p>
      <ul>
        <li>
          <strong>秋田県</strong>: 1,484 件 → 13,552 件（<strong>9.1 倍</strong>）。
          全国の急増を牽引
        </li>
        <li>
          <strong>山形県</strong>: 363 件 → 3,083 件（<strong>8.5 倍</strong>）
        </li>
        <li>
          <strong>青森県</strong>: 705 件 → 3,329 件（<strong>4.7 倍</strong>）
        </li>
        <li>
          <strong>富山県</strong>: 333 件 → 1,059 件（<strong>3.2 倍</strong>）
        </li>
        <li>
          <strong>北海道</strong>: 1,685 件 → 3,226 件（<strong>1.9 倍</strong>）
        </li>
        <li>
          <strong>群馬県</strong>: 510 件 → 765 件（<strong>1.5 倍</strong>）
        </li>
      </ul>
      <p>
        東北 5 県と新潟・富山などの北陸・本州中部山岳が震源地でした。
        共通点として <strong>ブナ・ミズナラの広域的な不作</strong> が指摘されています（詳細は次節）。
      </p>

      <h2 id="peak-days">1日あたり最多日 — 10月末の壁</h2>
      <p>
        2025 年の日次件数 top 5 は次のとおり。すべて 10 月下旬〜11 月初旬に集中しています。
      </p>
      <ol>
        <li><strong>2025年10月30日</strong>: 665 件</li>
        <li><strong>2025年10月29日</strong>: 604 件</li>
        <li><strong>2025年10月24日</strong>: 564 件</li>
        <li><strong>2025年11月04日</strong>: 554 件</li>
        <li><strong>2025年10月31日</strong>: 552 件</li>
      </ol>
      <p>
        1 日に 500 件超が続いたのは、くまウォッチの集計では過去にない規模です。
        この時期は自治体・警察・猟友会の対応が追いつかない状況が報じられ、秋田県は自衛隊に支援を要請しました。
      </p>

      <h2 id="causes">原因として指摘される3要因</h2>
      <p>
        専門家・自治体・研究機関の見解を統合すると、2025 年大量出没の主な要因は次の 3 つに整理されます。
      </p>
      <ol>
        <li>
          <strong>ブナ・ミズナラ堅果の広域的な不作</strong>
          <br />
          林野庁東北森林管理局の調査では、2025 年のブナの結実は東北 5 県（青森・岩手・宮城・秋田・山形）すべてで「大凶作」でした。
          冬眠前のハイパーフェイジア期にカロリーを山中で確保できず、人里に下りてきたと考えられています
        </li>
        <li>
          <strong>2024 年のブナ結実が良く、個体数が増えていた可能性</strong>
          <br />
          前年（2024 年）の東北のブナは豊作〜並作（青森・宮城が豊作、岩手・秋田・山形が並作）でした。
          餌の多い年の翌年は子グマが多く生まれ、出没の母数が膨らんでいたとの指摘があります
        </li>
        <li>
          <strong>放棄柿・耕作放棄地の拡大</strong>
          <br />
          過疎化・高齢化で里山の人手が減り、収穫されない柿・栗、放棄された果樹園が増えている。
          これらが「人里の餌資源」として強い誘引源となり、市街地進出を後押し
        </li>
      </ol>
      <p>
        これらは独立した要因ではなく、相乗効果で 2025 年の規模を作りました。
        詳細な背景考察は <Link href="/articles/why-increasing">クマ出没はなぜ増えているのか</Link>
        を参照してください。
      </p>

      <h2 id="implications">2025年が示した構造変化</h2>
      <p>
        2025 年の経験から見えてきたのは、クマ問題が <strong>一過性の異常気象ではなく構造的な変化</strong>であるという点です。
      </p>
      <ul>
        <li>
          <strong>本州ツキノワグマの市街地進出が常態化</strong>
          <br />
          秋田市・盛岡市など県庁所在地の市街地でも目撃が相次ぎ（盛岡市では 10 月に中心部の銀行敷地でクマが捕獲された）、
          住宅地での人身被害も発生。「山に行かなければ安全」が成り立たなくなった
        </li>
        <li>
          <strong>自治体対応の体制限界が露呈</strong>
          <br />
          猟友会の高齢化・担い手不足、警察との連携などの課題が浮き彫りに。
          秋田県の要請で陸上自衛隊が 11 月に箱わなの運搬などを支援し、11 月には警察がライフル銃でクマを駆除できる体制も整えられた
        </li>
        <li>
          <strong>住民・観光客への情報伝達の重要性</strong>
          <br />
          出没情報を素早く住民・観光客に届ける仕組みが課題に。
          くまウォッチのような第三者集約サービスの役割もここに位置づけられる
        </li>
        <li>
          <strong>緊急銃猟の開始（改正鳥獣保護管理法）</strong>
          <br />
          市街地などでも一定の要件を満たせば市町村長の判断で銃猟ができる「緊急銃猟」が 2025 年 9 月 1 日に施行され、
          大量出没の秋が最初の運用の場になった
        </li>
      </ul>
      <p>
        2026 年の見通しと備えについては{" "}
        <Link href="/articles/autumn-forecast-2026">
          2026年 秋のクマ大量出没予報 — 過去3年データから読み解く
        </Link>
        で詳しく解説しています。
      </p>

      <ArticleFaq
        items={[
          {
            q: "くまウォッチの集計件数と環境省の人身被害統計の関係は?",
            a: (
              <>
                両者は計測対象が異なります。
                くまウォッチは <strong>目撃情報・痕跡情報・出没事案全般</strong>を集計（人身被害がなくても 1 件）。
                環境省統計は <strong>人身被害</strong> 件数のみを集計。
                2025 年はくまウォッチ集計 39,801 件（記事公開時）、環境省の 2025 年度人身被害は 216 件・238 人・うち死亡 13 人（速報値）と、桁が違う指標です。
              </>
            ),
            aText:
              "くまウォッチは目撃情報・痕跡情報全般を集計し2025年は39,801件（記事公開時）。環境省統計は人身被害のみで2025年度速報値は216件・238人・うち死亡13人。両者は計測対象が異なる別指標。",
          },
          {
            q: "2026 年も同じ規模になりますか?",
            a: (
              <>
                確定的ではありませんが、2026 年春までの進行（1〜5 月で 1,212 件）は 2025 年同期間の 43% 程度に落ち着いています。
                ただし秋の規模は <strong>夏のブナ結実調査結果</strong> 次第で大きく振れるため、断定はできません。
                <Link href="/articles/autumn-forecast-2026">2026年 秋のクマ大量出没予報</Link>
                で詳しく解説しています。
              </>
            ),
            aText:
              "2026年春は2025年同期間の43%程度。秋の規模はブナ結実調査次第で大きく振れる。確定的予測は困難。",
          },
          {
            q: "秋田県だけが特別に多かったのはなぜ?",
            a: "秋田県は県土の広い範囲にツキノワグマが生息し、2025 年はブナの結実が「大凶作」（東北森林管理局の調査で豊凶指数 0.0）でした。ただし件数は各県の情報公開の細かさにも左右されるため、県同士の単純比較には注意が必要です。くまウォッチ集計では 1 県で全国の 34% を占めました。",
            aText:
              "秋田県は県土の広い範囲にツキノワグマが生息し、2025年はブナの結実が大凶作だった。ただし件数は各県の情報公開の細かさにも左右されるため、県同士の単純比較には注意が必要。くまウォッチ集計では1県で全国の34%を占めた。",
          },
          {
            q: "市街地でクマに遭遇したらどうすればよいですか?",
            a: (
              <>
                距離にかかわらず 110 番通報。距離があれば建物内に避難、近距離なら走らず背を向けず、クマを見ながらゆっくり離れる。
                詳細な対処法は <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
                を参照してください。
              </>
            ),
            aText:
              "距離にかかわらず110番通報。距離があれば建物内に避難、近距離なら走らず背を向けず、クマを見ながらゆっくり離れる。詳細は遭遇記事を参照。",
          },
          {
            q: "2025年大量出没の自治体対応はどうだったのか?",
            a: (
              <>
                秋田県は 10 月 28 日に自衛隊に支援を要請し、11 月 5 日から月末まで陸上自衛隊が箱わなの運搬や駆除したクマの運搬・埋設などを担いました（銃による駆除は行わない）。猟友会の人手不足や警察との連携などの課題が浮き彫りになる一方、2025 年 9 月 1 日に施行された「緊急銃猟」（市町村長の判断で市街地などでも銃猟ができる制度）の運用も始まりました。
                法令面は <Link href="/articles/bear-laws">クマと関わる法律</Link>
                を参照してください。
              </>
            ),
            aText:
              "秋田県の要請で11月に陸上自衛隊が箱わな運搬などを支援（銃による駆除はしない）。猟友会の人手不足や警察との連携が課題となる一方、2025年9月1日施行の緊急銃猟の運用も始まった。",
          },
        ]}
      />
      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
