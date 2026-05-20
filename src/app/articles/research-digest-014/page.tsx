import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-014")!;

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
        ヒグマは全世界に分布する大型動物です。北米のグリズリー、欧州のブラウンベア、
        ロシアのヒグマ、そして日本の北海道のエゾヒグマ。
        では、これらのクマによる「人身被害」は、世界でどれくらい起きているのでしょうか？
      </p>
      <p>
        2019 年、欧州・北米・アジアの研究者連合がこの問いに正面から取り組みました。
        18 ヶ国・15 年分のヒグマ襲撃事例を統合解析した壮大な研究です。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Brown bear attacks on humans: a worldwide perspective
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Bombieri, G., Naves, J., Penteriani, V., Selva, N., Fernández-Gil, A., Fernández-Gil, J., et al. (2019).{" "}
          <em className="not-italic">Scientific Reports</em> 9: 8573.
        </div>
        <a
          href="https://doi.org/10.1038/s41598-019-44341-w"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1038/s41598-019-44341-w →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            18 ヶ国 15 年分の <strong>ヒグマ襲撃 664 件</strong>を統合解析
          </li>
          <li>
            最多は <strong>ロシア・東欧</strong>、最少は北米。日本は中位
          </li>
          <li>
            欧州では <strong>母グマ関与が 50%</strong>、北米では子連れ襲撃が稀（地域差大）
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "scope", title: "なぜ世界規模でヒグマ襲撃を分析したのか" },
          { id: "data", title: "18 ヶ国・15 年分・664 件のデータベース" },
          { id: "global", title: "地域別 — 世界のヒグマ襲撃マップ" },
          { id: "trend", title: "増えているのか、減っているのか" },
          { id: "mother", title: "母グマ襲撃の地域差 — 欧州 vs 北米" },
          { id: "human", title: "人間側の行動パターン — 何をしていたか" },
          { id: "season", title: "季節と時間帯のパターン" },
          { id: "japan", title: "日本のヒグマ襲撃は世界でどう位置づくか" },
          { id: "lessons", title: "国際的な教訓 — 何が共通で、何が違うか" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="scope">なぜ世界規模でヒグマ襲撃を分析したのか</h2>
      <p>
        個別の国・地域での襲撃事案研究は、Herrero（北米）・Linnell（欧州）など多く発表されてきました。
        しかし、それぞれは <strong>「自分の国の事案を分析」</strong>するスタイルで、
        国際的な比較は十分に行われてきませんでした。
      </p>
      <p>
        Bombieri らが取り組んだのは、まさにこのギャップを埋めること。
        世界中のヒグマ研究者を巻き込み、<strong>「全世界のヒグマ襲撃事案を一つのデータベースに集約する」</strong>
        という野心的なプロジェクトでした。
      </p>
      <p>
        国際協力のスケール感が研究の特色です。著者は <strong>21 人</strong>、所属機関は
        スペイン・イタリア・ノルウェー・スウェーデン・ポーランド・ルーマニア・ロシア・米国・カナダなど。
        各国の野生動物管理機関・大学・NGO が連携しました。
      </p>

      <h2 id="data">18 ヶ国・15 年分・664 件のデータベース</h2>
      <p>
        対象は <strong>2000〜2015 年の 15 年間</strong>。
        18 ヶ国の機関・データセットから、計 <strong>664 件のヒグマ襲撃事案</strong>を集約しました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">地域</th>
              <th className="px-3 py-2 text-left">国の例</th>
              <th className="px-3 py-2 text-left">事案数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-red-50/40">
              <td className="px-3 py-2 font-semibold">東欧・ロシア</td>
              <td className="px-3 py-2">ロシア・ルーマニア・スロバキア</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">372 件</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">北米</td>
              <td className="px-3 py-2">米国・カナダ</td>
              <td className="px-3 py-2 tabular-nums">183 件</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">北欧</td>
              <td className="px-3 py-2">スウェーデン・ノルウェー・フィンランド</td>
              <td className="px-3 py-2 tabular-nums">52 件</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">南欧</td>
              <td className="px-3 py-2">スペイン・イタリア</td>
              <td className="px-3 py-2 tabular-nums">15 件</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">アジア</td>
              <td className="px-3 py-2">日本・トルコ・イラン</td>
              <td className="px-3 py-2 tabular-nums">42 件</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        各事案について、<strong>クマの性別・年齢・子の有無・襲撃の動機・被害者の行動・死傷の程度</strong>を
        統一フォーマットで記録。地域横断的に比較できる<strong>世界初の規模</strong>のデータセットでした。
      </p>

      <h2 id="global">地域別 — 世界のヒグマ襲撃マップ</h2>
      <p>
        15 年分のデータを地図に落とし込むと、世界のヒグマ襲撃には明確な <strong>地域差</strong>がありました。
      </p>
      <h3>① 東欧・ロシアの突出</h3>
      <p>
        664 件中 <strong>372 件（56%）</strong>が東欧・ロシアで発生。
        ヒグマ個体群が大きく、人口分布も森と重なっているため、必然的に接触機会が多い地域です。
        ルーマニアのトランシルヴァニア地方、ロシアのウラル・極東地方が特に多発エリア。
      </p>
      <h3>② 北米は意外と少ない</h3>
      <p>
        広大な原生林を持つ北米（米国・カナダ）は <strong>183 件（28%）</strong>と中位。
        個体群密度に比べて事案数が少ないのは、<strong>国立公園の管理体制が整備されている</strong>こと、
        住民教育が進んでいることが要因と分析されています。
      </p>
      <h3>③ 北欧は少なめ、南欧は希少</h3>
      <p>
        スカンジナビアは <strong>52 件（8%）</strong>。スウェーデン中部にヒグマ個体群があるものの、
        住民密度が低く接触機会自体が少ない。
        南欧（スペイン・イタリア）は <strong>15 件のみ</strong>。これは個体群がほぼ絶滅危惧で、頭数が極めて少ないため。
      </p>
      <h3>④ アジア地域 — 日本を含む</h3>
      <p>
        日本・トルコ・イランで <strong>42 件（6%）</strong>。
        日本は北海道のヒグマで <strong>20 件程度</strong>を占めますが、
        個体群密度に対する事案数は比較的低めという評価でした。
      </p>

      <h2 id="trend">増えているのか、減っているのか</h2>
      <p>
        15 年間の時系列分析では、ヒグマ襲撃事案は <strong>緩やかな増加傾向</strong>を示しました。
      </p>
      <ul>
        <li>
          世界全体: <strong>2000 年 30〜40 件/年 → 2015 年 60〜70 件/年</strong>
        </li>
        <li>
          特に増加が顕著: <strong>ルーマニア・ロシア・カナダ</strong>
        </li>
        <li>
          停滞〜減少: スウェーデン（管理計画の効果）、スペイン（個体数自体が少ない）
        </li>
      </ul>
      <p>
        この増加の背景には、3 つの主要要因が指摘されています。
      </p>
      <ul>
        <li>
          <strong>ヒグマ個体数の回復</strong>: 1980〜2000 年代の保護政策で個体群が回復した結果
        </li>
        <li>
          <strong>レクリエーション人口の増加</strong>: 山岳トレッキング・キャンプ・観光客の増加で接触機会増
        </li>
        <li>
          <strong>都市拡大</strong>: 街がヒグマ生息域に拡大し、軋轢が常態化
        </li>
      </ul>
      <p>
        日本でも 2025〜2026 年の出没急増は、同様の構造で説明できる部分があります。
      </p>

      <h2 id="mother">母グマ襲撃の地域差 — 欧州 vs 北米</h2>
      <p>
        Vol.12 で取り上げた Herrero 2011（{" "}
        <Link href="/articles/research-digest-012">クロクマ致命的襲撃</Link>{" "}
        ）では、母グマ襲撃は <strong>1% 未満</strong>でした。
        本論文ではヒグマで同じ分析を行いましたが、結果は<strong>地域で大きく異なる</strong>ことが判明しました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">地域</th>
              <th className="px-3 py-2 text-left">母グマ関与率</th>
              <th className="px-3 py-2 text-left">最も多い動機</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">欧州（東欧・北欧・南欧合計）</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">50%</td>
              <td className="px-3 py-2">防衛性（子守り）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">北米</td>
              <td className="px-3 py-2 tabular-nums">25%</td>
              <td className="px-3 py-2">驚き・縄張り</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">アジア（日本含む）</td>
              <td className="px-3 py-2 tabular-nums">30%</td>
              <td className="px-3 py-2">驚き・人為的接触</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        欧州では <strong>「子を守る母グマ」</strong>がヒグマ襲撃の主要因。
        北米では <strong>「驚かされた成獣雄」</strong>が中心。
        これは興味深い違いで、地域固有の <strong>生態・地形・個体群構造</strong>が反映されていると考えられます。
      </p>
      <p>
        日本のヒグマは欧州型と北米型の中間的なパターンを示し、
        どちらの教訓も部分的に当てはまる、というのが本論文の評価でした。
      </p>

      <h2 id="human">人間側の行動パターン — 何をしていたか</h2>
      <p>
        襲撃時に被害者が何をしていたかを集計すると、世界共通のリスクパターンが見えてきます。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">活動内容</th>
              <th className="px-3 py-2 text-left">襲撃時の割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">登山・ハイキング・観光</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">38%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">林業・農作業</td>
              <td className="px-3 py-2 tabular-nums">19%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">きのこ・ベリー採集</td>
              <td className="px-3 py-2 tabular-nums">15%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">狩猟</td>
              <td className="px-3 py-2 tabular-nums">13%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">キャンプ・釣り</td>
              <td className="px-3 py-2 tabular-nums">8%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">自宅周辺・市街地</td>
              <td className="px-3 py-2 tabular-nums">7%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        最多が <strong>「登山・ハイキング」</strong>（38%）。
        観光客・登山客がヒグマ域に入り込み、驚かせて防衛性襲撃を受けるパターンが世界共通で多い。
      </p>
      <p>
        日本では <strong>「きのこ・ベリー（山菜）採集」</strong>での被害が世界平均より多い特徴があります。
        東北・北陸の事案では、この活動中の被害が 30% 近くを占める年もあります。
      </p>

      <h2 id="season">季節と時間帯のパターン</h2>
      <p>
        襲撃時期は、ほぼ全地域で <strong>夏〜秋（6〜10 月）</strong>に集中していました。
      </p>
      <ul>
        <li>
          🌳 6〜7 月: <strong>繁殖期</strong>。雄ヒグマが活発化し、人と接触する機会増
        </li>
        <li>
          🌰 8〜10 月: <strong>ハイパーフェイジア</strong>（食欲増進期）で食物探索の範囲拡大
        </li>
        <li>
          🍂 9〜10 月: <strong>狩猟シーズン</strong>と重なり、人とクマの接触が増える
        </li>
      </ul>
      <p>
        時間帯では <strong>早朝・夕方</strong>（薄明薄暮性）が中心ですが、
        都市型クマ域では <strong>夜間</strong>の事案が増加傾向。
        Vol.2 で取り上げた都市型クマの夜行性化（{" "}
        <Link href="/articles/research-digest-002">Beckmann 2003</Link>{" "}
        ）が、世界的に進行している証左です。
      </p>

      <h2 id="japan">日本のヒグマ襲撃は世界でどう位置づくか</h2>
      <p>
        本論文の対象期間（2000〜2015 年）には日本のヒグマ事案も含まれ、
        その後の 2018〜2026 年の急増を加味すると、日本のヒグマは <strong>世界の中で「やや高リスク域」</strong>に
        位置づけられます。
      </p>
      <h3>日本特有の特徴</h3>
      <ul>
        <li>
          <strong>OSO18 のような「捕食性ヒグマ」</strong>: 欧州・北米では稀。北海道特有の現象
        </li>
        <li>
          <strong>市街地出没の急増</strong>: 札幌・苫前・標茶での事案は欧米でも稀
        </li>
        <li>
          <strong>畜舎襲撃の頻発</strong>: 欧州でも報告されるが、日本ほどではない
        </li>
        <li>
          <strong>人口密度との接近</strong>: ヒグマと住宅地の距離が世界的に見ても近い
        </li>
      </ul>
      <p>
        これらは「日本のヒグマだけが凶暴」ということではなく、
        <strong>「日本特有の地理・人口分布が、世界でも珍しい接近を生んでいる」</strong>
        という構造的な問題です。
      </p>

      <h2 id="lessons">国際的な教訓 — 何が共通で、何が違うか</h2>
      <p>
        本論文は最後に、世界規模の比較から得られる <strong>共通の教訓</strong>を整理しています。
      </p>
      <h3>世界共通の知見</h3>
      <ol>
        <li>
          <strong>登山・ハイキング中の事案が最多</strong> — どの国でも警戒すべき場面
        </li>
        <li>
          <strong>夏〜秋に集中</strong> — 季節別の対策が必要
        </li>
        <li>
          <strong>人為的食料が引き寄せ要因</strong> — 誘引物管理は世界共通の課題
        </li>
        <li>
          <strong>人口・観光客増加と襲撃事案数は正の相関</strong>
        </li>
        <li>
          <strong>住民教育の効果は実証されている</strong>（北米・スカンジナビア）
        </li>
      </ol>
      <h3>地域で異なる要素</h3>
      <ol>
        <li>
          <strong>母グマ襲撃率</strong> — 欧州 50% vs 北米 25% vs アジア 30%
        </li>
        <li>
          <strong>クマ個体群密度と人口の重なり度</strong>
        </li>
        <li>
          <strong>狩猟管理の有無</strong>（北米・スカンジナビアと欧州各国で差）
        </li>
        <li>
          <strong>市街地・畜舎襲撃の頻度</strong> — 日本・ロシア極東で多い
        </li>
      </ol>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>「登山時はクマ国際標準」を意識する</strong> — 鈴・スプレー・複数人行動は
          世界共通の基本装備。Smith 2008（{" "}
          <Link href="/articles/research-digest-001">Vol.1</Link>{" "}
          ）の知見を取り入れたガイドラインに従う。
        </li>
        <li>
          <strong>夏〜秋は山岳活動の警戒度を最大に</strong> — 世界共通で 6〜10 月が事案集中期。
          この時期の山菜採り・きのこ狩りは特に注意。
        </li>
        <li>
          <strong>母グマと子グマを見たら絶対に近づかない</strong> — 欧州・アジアでは特に
          母グマ襲撃率が高い。可愛い子グマに惹かれて近づくのは最悪の選択。
        </li>
        <li>
          <strong>住民教育に参加・支援する</strong> — 北米・スカンジナビアでは住民教育が事案数を
          抑えてきた。日本でも自治体・KumaWatch などの情報を住民同士で共有する効果は大きい。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Brown bear attacks on humans: a worldwide perspective（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Bombieri, G., et al. (2019).{" "}
              <em className="not-italic">Scientific Reports</em> 9: 8573.
            </div>
            <a
              href="https://doi.org/10.1038/s41598-019-44341-w"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1038/s41598-019-44341-w →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Consequences of brown bear viewing tourism: a review
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Penteriani, V., et al. (2017).{" "}
              <em className="not-italic">Biological Conservation</em> 206: 169–180.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Fatal attacks by American black bear on people: 1900–2009
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Herrero, S., et al. (2011).{" "}
              <em className="not-italic">Journal of Wildlife Management</em> 75(3): 596–603.
            </div>
          </li>
        </ol>
      </div>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
          次号予告 — Vol.15
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「ヒグマとホッキョクグマは 50 万年前まで同じ種だった」</strong> —
          ゲノム解析で明らかになったクマ科の進化史。
          氷河期に分岐したホッキョクグマがどのように極寒環境に適応したかを Liu 2014 Cell で精読。
        </div>
      </div>
    </ArticleShell>
  );
}
