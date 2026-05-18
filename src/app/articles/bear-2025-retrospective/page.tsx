import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        <strong>結論</strong>: 2025 年は KumaWatch 集計で全国 <strong>39,801 件</strong>の
        クマ出没を記録した、近年で突出した大量年でした。平年（2023〜2024 年は約 7,500 件）の
        <strong>約 5 倍</strong>。秋田県だけで 13,552 件、10 月 30 日は 1 日で 665 件と、
        過去最悪規模の年に何が起きたかを KumaWatch のデータで振り返ります。
      </p>

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
        KumaWatch は全国 47 都道府県・70 以上の自治体公開情報・報道情報を統合した出没データベースを構築しています。
        2025 年の全国合計は <strong>39,801 件</strong>。比較対象として、2023 年は 7,831 件、2024 年は 7,423 件でした。
        2025 年だけが <strong>5 倍以上</strong> に膨らんだ突出した年です。
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
        環境省の人身被害統計でも 2025 年度（4 月〜翌3月集計）は過去最多の被害者数を記録し、
        死亡者 13 人（速報値）と前年の倍近い数字。
        単なる目撃情報の増加ではなく、人間との衝突実態が悪化した年でした。
      </p>

      <h2 id="monthly">月別の動き — 10月にピーク</h2>
      <p>
        2025 年の月別件数を時系列で並べると、9 月までは前年同期比 2〜3 倍程度のペースで推移していました。
        異常事態が表面化したのは <strong>10 月</strong>。単月で <strong>12,452 件</strong>と、
        過去 3 年の年間合計に匹敵する件数が 1 ヶ月で発生しました。
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
        1 日に 500 件超が連発したのは過去にない規模で、KumaWatch のサーバー側でも取り込み件数が通常の 10 倍以上にあふれました。
        この時期、自治体・警察・猟友会の対応もパンクし、出動要請が間に合わないケースが頻発したと報道されています。
      </p>

      <h2 id="causes">原因として指摘される3要因</h2>
      <p>
        専門家・自治体・研究機関の見解を統合すると、2025 年大量出没の主な要因は次の 3 つに整理されます。
      </p>
      <ol>
        <li>
          <strong>ブナ・ミズナラ堅果の広域的な不作</strong>
          <br />
          東北のブナ結実は 2025 年に「凶作〜大凶作」判定が出た県が多く、特に秋田・山形・新潟で顕著。
          冬眠前のハイパーフェイジア期にカロリーを山中で確保できず、人里に下りざるを得なくなった
        </li>
        <li>
          <strong>2024 年の餌豊作で個体数自体が増加</strong>
          <br />
          前年（2024 年）は逆に堅果豊作年だったため、繁殖成功率と仔グマの生存率が高く、母数自体が膨らんでいた。
          堅果不作と母数増加が重なったことで、出没件数の絶対値が跳ね上がった
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
          秋田市・盛岡市など県庁所在地クラスの市街地でも昼夜を問わず目撃され、
          住宅地での人身被害も発生。「山に行かなければ安全」が成り立たなくなった
        </li>
        <li>
          <strong>自治体対応の体制限界が露呈</strong>
          <br />
          猟友会の高齢化・小規模化、警察との連携の遅延、麻酔銃使用の法的制約。
          数百件レベルの出没を 1 自治体で受け止めるのは現体制では難しい
        </li>
        <li>
          <strong>住民・観光客への情報伝達の重要性</strong>
          <br />
          公式ページの更新の遅れが人身被害につながったケースが報告されており、
          リアルタイムの情報共有体制が公衆衛生上の課題に。
          KumaWatch のような第三者集約サービスの役割もここに位置づけられる
        </li>
        <li>
          <strong>2025 年改正鳥獣保護管理法（特例的市街地猟銃使用）</strong>
          <br />
          市街地での猟銃使用を特例で認める法改正が成立。施行後、自治体の対応選択肢が増えるが、運用ルールの整備はこれから
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
            q: "KumaWatch の集計件数と環境省の人身被害統計の関係は?",
            a: (
              <>
                両者は計測対象が異なります。
                KumaWatch は <strong>目撃情報・痕跡情報・出没事案全般</strong>を集計（人身被害がなくても 1 件）。
                環境省統計は <strong>人身被害</strong> 件数のみを集計。
                2025 年は KumaWatch 集計 39,801 件、環境省人身被害 216 件・死亡 13 人（速報）と、桁が違う指標です。
              </>
            ),
            aText:
              "KumaWatch は目撃情報・痕跡情報全般を集計し2025年は39,801件。環境省統計は人身被害のみで2025年度速報は216件・死亡13人。両者は計測対象が異なる別指標。",
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
            a: "秋田は本州で最もツキノワグマ生息密度が高い県の1つで、加えて 2025 年はブナ大凶作が県内全域に及びました。生息数 × 餌不足の積が他県より大きく、結果として 1 県で全国の 34% を占めることになりました。",
            aText:
              "秋田は本州で最もツキノワグマ生息密度が高い県の1つで、2025年はブナ大凶作が県内全域に及んだ。生息数×餌不足の積が他県より大きく、1県で全国の34%を占めた。",
          },
          {
            q: "市街地でクマに遭遇したらどうすればよいですか?",
            a: (
              <>
                通報を最優先（110 番）。距離があれば建物内に避難、近距離なら背を向けず後ずさり。
                詳細な対処法は <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
                を参照してください。
              </>
            ),
            aText:
              "通報を最優先（110番）。距離があれば建物内に避難、近距離なら背を向けず後ずさり。詳細は遭遇記事を参照。",
          },
          {
            q: "2025年大量出没の自治体対応はどうだったのか?",
            a: (
              <>
                秋田県をはじめ複数県で自衛隊出動要請が議論されました。猟友会の人手不足、警察との連携、麻酔銃の法的制約などが浮き彫りになり、2025 年改正鳥獣保護管理法（市街地での特例的猟銃使用）にもつながりました。
                法令面は <Link href="/articles/bear-laws">クマと関わる法律</Link>
                を参照してください。
              </>
            ),
            aText:
              "自衛隊出動要請の議論、猟友会人手不足、警察連携、麻酔銃法的制約などが浮き彫りに。2025年改正鳥獣保護管理法にもつながった。",
          },
        ]}
      />
    </ArticleShell>
  );
}
