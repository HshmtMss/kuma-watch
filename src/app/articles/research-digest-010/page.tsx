import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-010")!;

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
        オハイオ州の動物園で、ある日 3 頭のアメリカクロクマが小さなタッチスクリーンの前に座らされました。
        画面には <strong>「ドットが 2 個」と「ドットが 5 個」</strong>。クマが多い方を選んだら、ご褒美。
      </p>
      <p>
        結果、クマたちは <strong>はっきりと多い方を選び続けました</strong>。
        当時の動物認知学者たちは衝撃を受けます。
        「クマって、サルやイルカと同じくらい賢いんじゃないか？」
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title={
          <>
            Bears &apos;count&apos; too: quantity estimation and comparison in black bears, Ursus americanus
          </>
        }
        citation={
          <>
            Vonk, J., &amp; Beran, M. J. (2012).{" "}
            <em className="not-italic">Animal Behaviour</em> 84(1): 231–238.
          </>
        }
        href="https://doi.org/10.1016/j.anbehav.2012.05.001"
        linkText="DOI: 10.1016/j.anbehav.2012.05.001 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            アメリカクロクマ <strong>3 頭</strong>にタッチスクリーンで「多い数を選ぶ」課題
          </>,
          <>
            正答率は <strong>サル並み（~75% 以上）</strong>。クマが数量を理解することを実証
          </>,
          <>
            クマの賢さが「<strong>学習する都市型クマ問題</strong>」の根本原因
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why-cognition", title: "なぜクマの「賢さ」を研究するのか" },
          { id: "experiment", title: "オハイオの動物園で行われた認知実験" },
          { id: "what-they-did", title: "クマに何を見せ、何を選ばせたか" },
          { id: "result", title: "結果 — サル並みの正答率" },
          { id: "discrimination", title: "数だけでなく「面積」も理解" },
          { id: "transfer", title: "学習が新しい問題にも応用される" },
          { id: "what-this-means", title: "クマの認知能力、想像以上に高い" },
          { id: "wild", title: "野生で、この知能はどう発揮されるか" },
          { id: "urban", title: "「学習するクマ」の脅威 — 都市型化の認知基盤" },
          { id: "japan", title: "日本のツキノワグマでも同じか" },
          { id: "ethics", title: "賢いと知ったら、私たちはどう向き合うか" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="why-cognition">なぜクマの「賢さ」を研究するのか</h2>
      <p>
        クマ研究の世界で、長らくクマは <strong>「身体能力で生きる動物」</strong>と考えられてきました。
        強い握力、鋭い嗅覚、巨大な体。これだけで森を生き抜けると思われていたのです。
      </p>
      <p>
        ところが現代の野生動物学では、クマの<strong>認知（学習・記憶・問題解決能力）</strong>に
        対する関心が急速に高まっています。理由は明白です。
      </p>
      <ul>
        <li>
          🏘️ <strong>市街地に出るクマ</strong>は明らかに「ゴミ箱の開け方」を学習している
        </li>
        <li>
          🚗 <strong>道路を渡るクマ</strong>は信号や車の動きを観察している
        </li>
        <li>
          🍯 <strong>養蜂場を襲うクマ</strong>は柵の弱点を覚えて再侵入する
        </li>
        <li>
          🐻 <strong>母グマから子グマへ</strong>「街の暮らし方」が伝わる
        </li>
      </ul>
      <p>
        これらは <strong>「単純な本能」では説明できない</strong>行動です。
        クマには、人間が想像する以上の認知能力があるのかもしれない。
        この問いに、米国の 2 人の研究者がタッチスクリーン実験で挑みました。
      </p>

      <h2 id="experiment">オハイオの動物園で行われた認知実験</h2>
      <p>
        実験を行ったのは、米国オークランド大学の <strong>Jennifer Vonk</strong>と
        ジョージア州立大学の <strong>Michael Beran</strong>。
        2 人とも動物認知の権威で、Vonk はオランウータン、Beran はチンパンジーの数量認識研究で有名でした。
      </p>
      <p>
        実験の舞台は、米国オハイオ州の <strong>「Bear Hollow Wildlife Trail」</strong>という動物保護施設。
        ここで飼育されている <strong>アメリカクロクマ 3 頭（Brutus、Bella、Dusty）</strong>が
        被験者として協力しました。
      </p>
      <p>
        被験者を選ぶには、まずクマたちが <strong>タッチスクリーンを操作できるよう訓練</strong>する必要があります。
        鼻先でガラスに触れると報酬が出る、という単純な仕組みを覚えてもらうのに数週間。
        この訓練を完了できたのは 3 頭の中の 1 頭、Brutus（推定 16 歳の雄）が中心でした。
      </p>

      <h2 id="what-they-did">クマに何を見せ、何を選ばせたか</h2>
      <p>
        Brutus のタッチスクリーンには、毎回 2 つの図形が表示されました。
        例えばこんな組み合わせ。
      </p>
      <ul>
        <li>● ● vs ● ● ● ● ● （ドット 2 個と 5 個）</li>
        <li>■ ■ ■ vs ■ ■ ■ ■ ■ ■ ■ ■ （3 個と 8 個）</li>
        <li>★ ★ ★ ★ ★ ★ vs ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ （6 個と 10 個）</li>
      </ul>
      <p>
        Brutus は「<strong>多い方を選ぶ</strong>」ことを徐々に学習しました。
        正解すれば食べ物の報酬、不正解なら次の問題。これを 1 日数十回、数週間繰り返しました。
      </p>
      <p>
        さらに研究者たちは、より難しい条件を加えました。
      </p>
      <ul>
        <li>
          <strong>サイズが異なるドット</strong>: 「大きい 2 個」vs「小さい 5 個」（数 vs サイズの分離）
        </li>
        <li>
          <strong>動くドット</strong>: ドットが画面上で動き、瞬時にカウントが必要
        </li>
        <li>
          <strong>近い数の比較</strong>: 6 vs 7、8 vs 9（差が小さい判別）
        </li>
        <li>
          <strong>逆順での学習</strong>: 一度「少ない方を選ぶ」と教え直してから再テスト
        </li>
      </ul>

      <h2 id="result">結果 — サル並みの正答率</h2>
      <p>
        Brutus と他のクマ 2 頭の正答率は次の通りでした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">課題</th>
              <th className="px-3 py-2 text-left">正答率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">差が大きい（例: 2 vs 8）</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">90%+</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">中程度の差（例: 4 vs 7）</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">75%+</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">小さい差（例: 6 vs 7）</td>
              <td className="px-3 py-2 text-amber-700 font-bold tabular-nums">60〜70%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">動くドット</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">70%+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        これは <strong>チンパンジー・オランウータン・ネズミ・イルカ</strong>などの過去の実験結果と比較しても遜色なく、
        哺乳類全般の中で <strong>「上位グループに匹敵する数量認識能力」</strong>を示すものでした。
      </p>
      <p>
        特に驚いたのが、<strong>動くドットの認識</strong>。これは「数量を瞬時に推定」する高度な認知が必要で、
        ヒトの幼児や霊長類でも難しい課題です。クマはこれを 70% 以上で正解していました。
      </p>

      <h2 id="discrimination">数だけでなく「面積」も理解</h2>
      <p>
        実験ではさらに、<strong>「数」と「総面積」の関係</strong>も検証されました。
      </p>
      <p>
        例えば「大きいドット 2 個（総面積大）」と「小さいドット 5 個（総面積小）」を見せたとき、
        クマが選ぶのは「数の多い 5 個」なのか「面積の大きい 2 個」なのか。
      </p>
      <p>
        結果、クマは <strong>「数」と「面積」を別の概念として識別</strong>できることが分かりました。
        指示によって「数を比べる」「面積を比べる」を切り替えることが可能だった、というのは
        動物認知としては非常に高度な能力です。
      </p>

      <h2 id="transfer">学習が新しい問題にも応用される</h2>
      <p>
        もう一つの重要な発見が <strong>「転移学習」</strong>。
      </p>
      <p>
        ドットで「多い方を選ぶ」を学んだクマに、次にバナナの絵・木の絵・幾何学模様で同じ課題を出すと、
        <strong>初見の図形でも正解できる</strong>。これは「数量という抽象概念」を理解していることを示します。
      </p>
      <p>
        「ドットの多さ」を覚えただけのクマなら、別の絵では使えないはず。
        でも実際には、Brutus は <strong>「目の前にある『個数』という概念</strong>」自体を内在化していました。
      </p>

      <h2 id="what-this-means">クマの認知能力、想像以上に高い</h2>
      <p>
        Vonk &amp; Beran の研究の意義は、単に「クマが数を理解した」ことだけではありません。
        <strong>クマの認知能力の枠組み</strong>を、霊長類学の延長線上に位置づけられたことです。
      </p>
      <p>
        現在のクマ認知研究では、Vonk &amp; Beran 2012 以降に次の能力も確認されています。
      </p>
      <ul>
        <li>
          <strong>因果推論</strong>: 「これを動かすとこうなる」という因果関係の理解
        </li>
        <li>
          <strong>道具使用</strong>: 北米のヒグマで石を使ったセルフグルーミングが観察
        </li>
        <li>
          <strong>長期記憶</strong>: 数年単位で「食物がある場所」「危険な場所」を覚える
        </li>
        <li>
          <strong>社会的学習</strong>: 母から子へ「街での生き方」が伝わる（{" "}
          <Link href="/articles/research-digest-002">Vol.2 参照</Link>{" "}）
        </li>
        <li>
          <strong>個体識別</strong>: 他のクマ・人間・特定の場所を識別
        </li>
      </ul>

      <h2 id="wild">野生で、この知能はどう発揮されるか</h2>
      <p>
        飼育下の実験結果が、野生でどう活きるか。それを観察すると、クマの知能の真の意味が見えてきます。
      </p>
      <h3>① 食物源の記憶</h3>
      <p>
        クマは <strong>「去年、あそこの果樹が美味しかった」</strong>を 1 年以上覚えています。
        翌年同じシーズンに同じ場所に現れる事例は、野外調査で頻繁に観察されます。
      </p>
      <h3>② 「人がいない時間」の学習</h3>
      <p>
        Vol.2 で見た都市型クマの夜行性化（{" "}
        <Link href="/articles/research-digest-002">Beckmann 2003</Link>
        ）は、<strong>「いつ人がいないか」を学習した結果</strong>です。
        単純な本能では、これだけ精緻な行動シフトはあり得ません。
      </p>
      <h3>③ 電気柵の「弱点」探索</h3>
      <p>
        Vol.7（{" "}
        <Link href="/articles/research-digest-007">Huygens 2001</Link>
        ）で見たように、電気柵の <strong>角や出入口の死角</strong>を探すクマが報告されています。
        これは試行錯誤での問題解決能力を示します。
      </p>
      <h3>④ 「危険なクマ」になる学習過程</h3>
      <p>
        OSO18 のように <strong>「人を恐れず畜舎を襲う」</strong>個体は、複数回の試行で
        徐々に「家畜を襲う = 楽な食料」という認知を獲得していきます。
        これは数量理解と同じく、抽象化された学習の一つです。
      </p>

      <h2 id="urban">「学習するクマ」の脅威 — 都市型化の認知基盤</h2>
      <p>
        Vonk &amp; Beran 論文の重要な含意は、現代の <strong>「都市型クマ問題」</strong>の根本に
        クマの認知能力があるという点。
      </p>
      <p>
        都市型クマがゴミ箱を漁る、ペットフードを探す、養蜂場を狙う、これらは全て
        <strong>「概念の理解と学習」</strong>を前提とした行動です。
        単なる嗅覚やランダム行動ではなく、クマは <strong>「ここに来れば何があるか」</strong>を
        論理的に予測しているのです。
      </p>
      <p>
        さらに恐ろしいのは、この能力が <strong>世代を超えて伝わる</strong>こと。
        母グマが「街で生き延びる方法」を子グマに教えるのは、子グマがその知識を吸収する
        <strong>認知能力</strong>を持っているからです。
      </p>
      <p>
        だから「誘引物管理」を中途半端にやると逆効果。クマは <strong>「半分の確率で食物がある」</strong>
        と学習し、より粘り強く街に通うようになります。やるなら徹底、です。
      </p>

      <h2 id="japan">日本のツキノワグマでも同じか</h2>
      <p>
        日本のツキノワグマでも、認知能力の高さは多くの状況で観察されています。
      </p>
      <ul>
        <li>
          長野県のリンゴ農家が「<strong>同じクマが毎年同じ時期に同じ畑に来る</strong>」と報告
        </li>
        <li>
          秋田・盛岡の住宅地で「<strong>夜の決まった時間にゴミ集積所を漁る</strong>」個体
        </li>
        <li>
          学校近くの果樹林で「<strong>子供がいない時間帯を選んで採餌</strong>」する事例
        </li>
        <li>
          軽井沢のベアドッグ事業で「<strong>追払いを経験した個体は再度近づかない</strong>」効果
        </li>
      </ul>
      <p>
        ツキノワグマは体格こそアメリカクロクマより小さいですが、認知能力は同等以上である可能性が高い、
        と推測する研究者は少なくありません。実験的検証はまだ不十分ですが、現場の観察事例が裏付けつつあります。
      </p>

      <h2 id="ethics">賢いと知ったら、私たちはどう向き合うか</h2>
      <p>
        「クマは賢い」と知ることは、私たち人間の対応にも責任を要求します。
      </p>
      <p>
        知能の高い動物への対応は、本能で動く動物への対応とは違うべきだ、というのが
        多くの動物倫理学者の見解です。クマは「<strong>学習する存在</strong>」だからこそ、
        私たちは <strong>「教えない」</strong>選択ができる。
      </p>
      <ul>
        <li>
          ゴミを徹底管理することは、クマに「街には食物がない」と教えること
        </li>
        <li>
          電気柵を一度設置することは、クマに「ここは痛い場所」と教えること
        </li>
        <li>
          ベアドッグの追払いは、クマに「ここは怖い場所」と教えること
        </li>
        <li>
          逆に放置・中途半端な対応は、クマに「ここは食べ物がある場所」と教えること
        </li>
      </ul>
      <p>
        クマの知能を侮ることが、結果的に <strong>クマと人の双方を不幸にする</strong>。
        Vonk &amp; Beran の論文を読み終えて、改めてそう感じます。
      </p>
      <p>
        関連記事として{" "}
        <Link href="/articles/bear-learning">クマの学習と記憶</Link>
        と{" "}
        <Link href="/articles/research-digest-002">Vol.2 都市型クマの夜行性化</Link>
        も合わせてご覧ください。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: (
              <>
                Bears &apos;count&apos; too: quantity estimation and comparison in black bears, Ursus americanus（本号メイン）
              </>
            ),
            citation: (
              <>
                Vonk, J., &amp; Beran, M. J. (2012).{" "}
                <em className="not-italic">Animal Behaviour</em> 84(1): 231–238.
              </>
            ),
            href: "https://doi.org/10.1016/j.anbehav.2012.05.001",
            linkText: "DOI: 10.1016/j.anbehav.2012.05.001 →",
          },
          {
            title: "Levels of abstraction in orangutan (Pongo pygmaeus) and human cognition",
            citation: (
              <>
                Vonk, J., &amp; MacDonald, S. E. (2002).{" "}
                <em className="not-italic">Animal Cognition</em> 5(4): 225–238.
              </>
            ),
          },
          {
            title: "Recent advances in bear behavior and cognition research",
            citation: (
              <>
                Stirling, I., &amp; Derocher, A. E. (2020).{" "}
                <em className="not-italic">Annual Review of Ecology, Evolution, and Systematics</em>.
              </>
            ),
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.11">
        <strong>「クマの妊娠には『着床遅延』という奇跡がある」</strong> —
        夏に交尾しても、受精卵が動き出すのは半年後の秋。母体の栄養状態次第で
        妊娠そのものをキャンセルできるクマ独自の繁殖戦略を、Spady ら 2007 ほかで精読します。
      </NextIssue>
    </ArticleShell>
  );
}
