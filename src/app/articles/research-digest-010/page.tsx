import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-010")!;

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

export default function Page() {
  const mainCitation = (
    <>
      Vonk, J., &amp; Beran, M. J. (2012).{" "}
      <em className="not-italic">Animal Behaviour</em> 84(1): 231–238.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        クマは食肉目（ネコ目）の中で、体の大きさに対する脳の大きさがとくに大きい動物です。
        それなのに、クマの「考える力」を実験で調べた研究はほとんどありませんでした。
        今号では、アメリカクロクマが「数の多い・少ない」を見分けられるかを、タッチスクリーンを使って調べた 2012 年の論文を紹介します。
      </p>

      <PaperCard
        label="今号で紹介する論文"
        title={<>Bears &apos;count&apos; too: quantity estimation and comparison in black bears, Ursus americanus</>}
        citation={mainCitation}
        href="https://doi.org/10.1016/j.anbehav.2012.05.001"
        linkText="DOI: 10.1016/j.anbehav.2012.05.001 →"
      />

      <KeyPoints
        label="3 行まとめ"
        items={[
          <>
            米国の動物園で飼われている <strong>アメリカクロクマ 3 頭</strong>に、タッチスクリーンで点（ドット）の数を比べる課題を出しました
          </>,
          <>
            点が止まっている課題では、<strong>3 頭とも偶然より高い確率</strong>で正しい方を選べました
          </>,
          <>
            点が動く課題は難しく、どの条件でも偶然より上だったのは <strong>1 頭だけ</strong>。クマは「面積」も手がかりにしていましたが、「数」も使えていました
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        研究したのは、米国オークランド大学の Jennifer Vonk と、ジョージア州立大学の Michael J. Beran です。
        実験は米国アラバマ州ウィルマーの <strong>Mobile Zoo（モービル動物園）</strong>で、展示エリアの裏にあるクマの飼育スペースを使って行われました。
      </p>
      <p>
        参加したのは、きょうだいの成獣 <strong>3 頭（メス 1 頭・オス 2 頭）</strong>で、名前は Brutus、Bella、Dusty です。
        クマは自分の飼育スペースを自由に動ける状態で、課題に参加するかどうかはクマ次第でした。
      </p>
      <p>
        金網越しに 19 インチのタッチスクリーンを置き、画面に左右 2 つの点の集まりを表示しました。
        1 つの集まりの点の数は <strong>1〜10 個</strong>です。正しい方に触れると音が鳴って食べ物がもらえ、
        間違えるとブザーが鳴って少し待たされます。Brutus は鼻先で、Bella と Dusty は主に前足で画面に触れました。
      </p>
      <p>
        訓練のしかたは 3 頭で違いました。
      </p>
      <ul>
        <li><strong>Brutus</strong>：点の数が <strong>多い方</strong>を選ぶように訓練</li>
        <li><strong>Bella と Dusty</strong>：点の数が <strong>少ない方</strong>を選ぶように訓練</li>
      </ul>
      <p>
        点の大きさはばらばらにしてあり、「点の数が多い方が、点の合計面積も大きい」問題（一致）と、
        「点の数が多い方が、合計面積は小さい」問題（不一致）を混ぜました。
        こうすると、クマが「数」を見ているのか「面積（黒い部分の広さ）」を見ているのかを区別できます。
      </p>
      <p>
        テストは約 6 か月間、1 回 100 試行のセッションで行われ、次の 3 種類の課題が順に出されました。
      </p>
      <ol>
        <li>点が止まっている課題</li>
        <li>点が画面の中で動き回る課題</li>
        <li>黒い点と赤い点が混ざって動き回り、黒い点だけの数を比べる課題（点は 1〜12 個）</li>
      </ol>

      <h2 id="findings">分かったこと</h2>
      <h3>点が止まっている課題：3 頭とも偶然より上</h3>
      <p>
        3 頭とも、「一致」の問題でも「不一致」の問題でも、<strong>偶然より高い確率で正しい方を選べました</strong>（統計検定で p &lt; .001）。
        不一致の問題でも成功したことから、面積だけでなく数も手がかりにできていたと考えられます。
      </p>
      <p>
        ただし、くわしく見ると 3 頭の傾向は違いました。Brutus は一致の問題の方が成績がよく、
        Bella と Dusty は面積を手がかりにする傾向がみられました。
      </p>

      <h3>点が動く課題：どの条件でも偶然より上だったのは 1 頭</h3>
      <p>
        点が動くと、どのクマも成績が下がりました。Bella は 20 セッションたっても改善がみられなかったため、ここで動く課題のテストから外れています。
      </p>
      <p>
        最も難しい「赤と黒が混ざって動く中で、黒い点だけを比べる」課題では、
        <strong>Brutus だけが一致・不一致の両方で偶然より高い成績</strong>でした（どちらも p &lt; .001）。
        Dusty は不一致の問題だけ偶然より上で、一致の問題では偶然と区別できませんでした（p = .14）。
      </p>

      <h3>比べる数の比率の影響</h3>
      <p>
        2 つの数が近いほど見分けにくくなる傾向がみられました（イメージとしては、1 対 2 より 9 対 10 の方が難しい、ということです。この組み合わせは説明のための例です）。
        著者らは、この傾向がこれまでにサルなどの霊長類で報告されてきたものと似ていると述べています。
        また、少ない方を選ぶより多い方を選ぶ方がやさしかったことも、霊長類の研究と似た点として挙げています。
      </p>

      <h3>著者らのまとめ</h3>
      <p>
        著者らは、「クマは面積を手がかりに使っていたが、数を手がかりに使うこともできた」とまとめています。
        また、群れで暮らさないクマでもこうした能力がみられたことから、数を見分ける力は群れ生活がなくても持ちうる、と考察しています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          対象は <strong>3 頭だけ</strong>で、著者ら自身も標本数が小さいことを認めています。
        </li>
        <li>
          「多い方を選ぶ」訓練を受けたのは Brutus 1 頭だけなので、「多い方を選ぶ方がやさしい」という結果が、課題の違いなのか個体の違いなのかは切り分けられていません。
        </li>
        <li>
          動く課題では 3 頭のうち 2 頭が最後までテストを終えていません。
        </li>
        <li>
          1 か所の動物園で飼われているクマの実験で、野生のクマが山の中で同じように数を使っているかどうかは調べていません。
        </li>
        <li>
          調べたのはアメリカクロクマで、日本のツキノワグマやヒグマでの実験ではありません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究は飼育下の 3 頭で「数や量を見分ける力」を調べたもので、出没対策の効果を直接確かめたものではありません。
        ただ、クマが画面上の課題を訓練で覚え、手がかりを使い分けられることは、クマを「本能だけで動く動物」とみなさない方がよいことを示しています。
      </p>
      <p>
        日常の対策としては、生ごみや収穫しない果実など、クマを引き寄せるものを人里に残さないことが基本です。
        山でクマに出会ったときは、走らず、背を向けず、ゆっくり離れてください。
        詳しくは <Link href="/learn/safety">クマ対策の基本</Link> をご覧ください。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: <>Bears &apos;count&apos; too: quantity estimation and comparison in black bears, Ursus americanus（本号メイン）</>,
            citation: mainCitation,
            href: "https://doi.org/10.1016/j.anbehav.2012.05.001",
            linkText: "DOI: 10.1016/j.anbehav.2012.05.001 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>
    </ArticleShell>
  );
}
