import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-020")!;

export const metadata: Metadata = {
  ...reviewRobots(meta.slug),
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

const DOI_URL = "https://doi.org/10.2193/0091-7648(2004)032%5B1141:EODTAD%5D2.0.CO;2";

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        街に出てきたクマを捕まえ、痛い・怖い思いをさせてから放せば、もう戻ってこなくなるのか。
        「追い払い」の効き目を、比べる群を設けて確かめた研究を読みます。
      </p>
      <p>
        住宅地に出没するクマへの対応として、北米ではゴム弾や大きな音などでクマを追い払い、
        「人の近くは嫌な場所だ」と覚えさせる方法（非致死的な追い払い・嫌悪条件付け）が広く使われてきました。
        ところが論文の著者たちによれば、こうした方法がどれだけ効くのかを厳密に調べた研究は、当時ほとんどありませんでした。
        そこで米国ネバダ州のレイクタホ周辺で、実際に街に出てきたアメリカクロクマを使って確かめたのが、今号の論文です。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title={
          <>
            Evaluation of deterrent techniques and dogs to alter behavior of &quot;nuisance&quot; black bears
          </>
        }
        citation={
          <>
            Beckmann, J. P., Lackey, C. W., &amp; Berger, J. (2004).{" "}
            <em className="not-italic">Wildlife Society Bulletin</em> 32(4): 1141–1146.
          </>
        }
        href={DOI_URL}
        linkText="DOI link →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            街で捕まえたクロクマ <strong>62 頭</strong>を「何もしない」「追い払い」「追い払い + 犬」の 3 群に分けて比べた
          </>,
          <>
            62 頭中 <strong>57 頭</strong>が同じ街に戻り、<strong>33 頭（53%）は 30 日以内</strong>に戻った
          </>,
          <>
            戻るまでの平均日数に<strong>群のあいだで統計的な差はなかった</strong>。追い払いより、ゴミなどの誘引物を断つことが大切
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "design", title: "どこで・何を・どう調べたか" },
          { id: "results", title: "分かったこと" },
          { id: "authors-view", title: "著者たちの結論と提言" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="design">どこで・何を・どう調べたか</h2>
      <p>
        調査地は、米国ネバダ州西部、シエラネバダ山脈のレイクタホ周辺です。
        論文によると、1990〜2000 年にタホ湖周辺の人口は 26% 増え、クマに関する住民からの苦情は 10 倍以上に増えていました。
      </p>
      <p>
        研究チームは 1997 年 7 月から 2002 年 4 月にかけて、市街地でクマを箱わなで捕獲し、麻酔をかけて電波発信器付きの首輪を装着しました。
        そのうえで <strong>62 頭</strong>を、くじ引きのように無作為に次の 3 群へ振り分けました。
      </p>
      <ul>
        <li>
          <strong>対照群（21 頭）</strong>：追い払いをせず、静かに放す
        </li>
        <li>
          <strong>追い払い群（21 頭）</strong>：放すときにトウガラシスプレー（ペッパースプレー）を浴びせ、12 番径散弾銃のゴム散弾とゴムスラッグ弾を当て、クラッカー弾（大きな音を出す弾）と大声で驚かせる
        </li>
        <li>
          <strong>追い払い + 犬の群（20 頭）</strong>：上の追い払いに加えて、猟犬（ハウンド）に追わせる。条件をそろえるため、毎回同じ犬を使った
        </li>
      </ul>
      <p>
        これらは、当時の米国の州機関でよく使われていた方法です。
        なお、追い払いは組み合わせて行ったため、ゴム弾だけ・スプレーだけといった<strong>個々の方法の効果は区別できない</strong>設計です。
        放す場所は捕獲地点から 1〜75 km の範囲で、個体によって違いました。
      </p>
      <p>
        効果の物差しは、<strong>放してから、捕まった街に再び戻ってくるまでの日数</strong>です。
        天候が許す限り週 1 回、小型飛行機から電波で各個体の位置を確かめました。
        分析では、年齢・体重・季節・性別・移動距離・処置の 6 つの要因を検討しています。
      </p>

      <h2 id="results">分かったこと</h2>
      <h3>ほとんどのクマが戻ってきた</h3>
      <p>
        62 頭中 <strong>57 頭（92%）</strong>が、捕まった街に戻りました。
        戻るまでの日数で分けると次のとおりです。
      </p>
      <ul>
        <li>30 日以内：33 頭（53%）</li>
        <li>31〜180 日：17 頭（27%）</li>
        <li>181〜365 日：7 頭（11%）</li>
        <li>365 日を超えても戻っていない：5 頭（8%）</li>
      </ul>
      <p>
        全体の 70%（44 頭）は 40 日未満で戻っていました。
      </p>

      <h3>群ごとの内訳</h3>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <caption className="px-3 pt-3 text-left text-xs text-stone-500">
            街に戻るまでの日数ごとの頭数（論文の表 1 より）
          </caption>
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">戻るまでの日数</th>
              <th className="px-3 py-2 text-right">対照（21 頭）</th>
              <th className="px-3 py-2 text-right">追い払い（21 頭）</th>
              <th className="px-3 py-2 text-right">追い払い + 犬（20 頭）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 tabular-nums">
            <tr>
              <td className="px-3 py-2">30 日以内</td>
              <td className="px-3 py-2 text-right">16</td>
              <td className="px-3 py-2 text-right">9</td>
              <td className="px-3 py-2 text-right">8</td>
            </tr>
            <tr>
              <td className="px-3 py-2">31〜180 日</td>
              <td className="px-3 py-2 text-right">2</td>
              <td className="px-3 py-2 text-right">9</td>
              <td className="px-3 py-2 text-right">6</td>
            </tr>
            <tr>
              <td className="px-3 py-2">181〜365 日</td>
              <td className="px-3 py-2 text-right">3</td>
              <td className="px-3 py-2 text-right">2</td>
              <td className="px-3 py-2 text-right">2</td>
            </tr>
            <tr>
              <td className="px-3 py-2">365 日超（未帰還）</td>
              <td className="px-3 py-2 text-right">0</td>
              <td className="px-3 py-2 text-right">1</td>
              <td className="px-3 py-2 text-right">4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>平均日数には統計的な差がなかった</h3>
      <p>
        戻るまでの平均日数は、追い払い + 犬の群が 154 日、追い払い群が 88.4 日、対照群が 64.6 日でした。
        数字だけを見ると犬を使った群が長く見えますが、どの群も個体差がとても大きく（犬の群は 5〜641 日、全体では 1〜641 日）、
        <strong>3 群の平均日数に統計的に意味のある差はありませんでした</strong>（分散分析で P = 0.55）。
      </p>
      <p>
        別の統計モデル（生存時間分析）では、6 つの要因のうち「処置」だけが説明に残り、追い払いに一定の影響があることをうかがわせる結果も出ています。
        ただし、どんな個体・どんな条件なら追い払いが効くのかを予測できるモデルは作れなかった、と著者たちは書いています。
      </p>

      <h2 id="authors-view">著者たちの結論と提言</h2>
      <p>
        著者たちの結論は、タホ湖周辺では、州などの機関がよく使う非致死的な追い払いは、
        <strong>1 か月を超える期間でクマの行動を変える効果は大きくない</strong>、というものです。
        犬を加えても、1 か月を超えて行動を変える効果は乏しかったとしています。
        人の食べ物（主にゴミ）に慣れ、街の近くで暮らすことに慣れたクマは、こうした追い払いでは行動を変えにくい、という見方です。
      </p>
      <p>
        そのうえで著者たちは、「二度とそのクマに対応しなくて済む」ことを目標にするなら、追い払いはまず達成できないだろうと述べています。
        一方で、数週間〜数か月そのクマに対応しなくて済むことや、住民の理解を得ることが目的なら、追い払いは役に立ちうる、とも書いています。
      </p>
      <p>
        より効果が期待できる対策として著者たちが挙げているのは、次のようなことです。
      </p>
      <ul>
        <li>住民への積極的な啓発</li>
        <li>意図的・非意図的な餌やりを禁じるルールづくり</li>
        <li>住宅や事業者にクマが開けられないゴミ容器の使用を求める条例</li>
      </ul>
      <p>
        論文では、啓発や条例、クマが開けられないゴミ容器の義務化などを組み合わせた地域で苦情や被害が減った例も紹介されていますが、
        これらは関係者からの聞き取りに基づく紹介で、この研究の実験結果ではありません。
        著者たちも、啓発やゴミ容器の効果は今後の研究で確かめるべきだとしています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>標本数</strong>：62 頭は野生の大型動物の研究としては少なくありませんが、著者たち自身が、個々の方法の本当の効果を見分けるにはもっと多くの頭数が必要だと述べています。
        </li>
        <li>
          <strong>方法を個別に比べていない</strong>：追い払いは組み合わせで行い、「犬だけ」の群もありません。どの方法が効く・効かないかは、この研究からは言えません。
        </li>
        <li>
          <strong>地域と種の違い</strong>：対象はネバダ州の乾燥した山地に住み、ゴミに強く依存していたアメリカクロクマです。日本のツキノワグマやヒグマ、日本の山や集落の環境にそのまま当てはまるとは限りません。
        </li>
        <li>
          <strong>個体の経歴が不明</strong>：捕獲した時点で、それぞれのクマの過去の行動は分かっていませんでした。
        </li>
        <li>
          <strong>トウガラシスプレーの使い方が違う</strong>：この研究のスプレーは、捕獲したクマを放すときに追い払いの一つとして使ったものです。人が山でクマに突進されたときに身を守るための使い方とは目的が違い、この結果から「クマスプレーは役に立たない」とは言えません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究から読み取れるのは、<strong>追い払いだけでは長く続く解決になりにくい</strong>ということです。
        街や集落にクマを引き寄せる食べ物が残っている限り、追い払ったクマが戻ってくる可能性は高いと考えられます。
      </p>
      <p>
        日本の暮らしで言えば、次のような「クマを呼ばない」工夫が基本になります。
      </p>
      <ul>
        <li>生ゴミは収集日の朝に出し、屋外に置きっぱなしにしない</li>
        <li>収穫しないカキやクリなどの果実は早めに取り除く</li>
        <li>米ぬか・家畜の飼料・ペットフードなどを屋外に放置しない</li>
      </ul>
      <p>
        一人の家だけでなく、地域全体でそろえることが大切です。
        追い払いや捕獲は行政や専門の担当者が判断して行うもので、住民が自分でクマを追い払おうとするのは危険です。
      </p>
      <p>
        万一クマに出会ったときは、走らず、背を向けず、ゆっくりその場を離れてください。
        突進された場合に備えるなら、環境省の推奨要件（噴射距離 7.5 m 程度以上・噴射時間 6 秒程度以上・カプサイシン類 1〜2% 程度）を満たすクマスプレーを携行し、5〜10 m まで近づいたら顔に向けて 1〜2 秒ずつ噴射します。
        防衛的な攻撃で接触が避けられないときはうつ伏せになって首の後ろを守る姿勢をとり、執拗に襲ってくる・捕食的な攻撃の場合は反撃してください。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: (
              <>
                Evaluation of deterrent techniques and dogs to alter behavior of &quot;nuisance&quot; black bears（本号メイン）
              </>
            ),
            citation: (
              <>
                Beckmann, J. P., Lackey, C. W., &amp; Berger, J. (2004).{" "}
                <em className="not-italic">Wildlife Society Bulletin</em> 32(4): 1141–1146.
              </>
            ),
            href: DOI_URL,
            linkText: "DOI link →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
