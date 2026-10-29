import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-017")!;

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
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        「クマは噛む力がとても強い」とよく言われます。
        では、ライオンやオオカミと比べると実際はどうなのでしょうか。
        頭骨の形から噛む力を推定した研究を読むと、クマは
        <strong>体の大きさの割には、噛む力が強いほうではない</strong>という、
        少し意外な姿が見えてきます。
      </p>
      <p>
        今号では、食肉目（ネコ・イヌ・クマなどのなかま）151 種の噛む力を比べた
        Christiansen と Wroe の 2007 年の論文を中心に、
        具体的な数字を示した Wroe らの 2005 年の論文もあわせて紹介します。
      </p>

      <PaperCard
        label="今号で読み解く論文"
        title="Bite forces and evolutionary adaptations to feeding ecology in carnivores"
        citation={
          <>
            Christiansen, P., &amp; Wroe, S. (2007).{" "}
            <em className="not-italic">Ecology</em> 88(2): 347–358.
          </>
        }
        href="https://doi.org/10.1890/0012-9658(2007)88[347:BFAEAT]2.0.CO;2"
        linkText="DOI: 10.1890/0012-9658(2007)88[347:BFAEAT]2.0.CO;2 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            食肉目 <strong>151 種</strong>の噛む力を頭骨の形から推定し、体の大きさをそろえて比べた
          </>,
          <>
            体格の割に噛む力が強いのは<strong>硬い植物を食べる種</strong>と<strong>大きな獲物を狩る種</strong>。雑食の種は中間
          </>,
          <>
            Wroe ら（2005）の推定では、犬歯で噛む力はヒグマ <strong>約 751 N</strong>、ライオン <strong>約 1,768 N</strong>。クマは体格の割に低め
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "method", title: "噛む力を頭骨から推定する" },
          { id: "result", title: "分かったこと — 食べ物と噛む力の関係" },
          { id: "numbers", title: "クマの数字 — ライオンより弱く、体格比でも低め" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="method">噛む力を頭骨から推定する</h2>
      <p>
        野生の大型動物に力のセンサーを噛ませて測ることは、ほとんどできません。
        そこで研究者は、博物館などに保管されている<strong>頭骨の寸法</strong>から、
        あごを動かす筋肉の太さ（断面積）を推定し、あごを「てこ」とみなして
        噛む力を計算する方法を使ってきました。
        Wroe らの論文では、これを「ドライスカル（乾燥頭骨）法」と呼んでいます。
      </p>
      <p>
        Christiansen と Wroe（2007）は、この考え方を使って
        <strong>現生の食肉目 151 種</strong>の噛む力を推定しました。
        食肉目の 8 つの科すべてを含み、小さな動物から大きな動物まで、
        食べ物の種類もさまざまな種がそろっています。
      </p>
      <p>
        噛む力は、体が大きいほど強くなります。そのまま比べると「大きい動物ほど強い」
        という当たり前の結果になるため、研究では<strong>体の大きさの影響を取り除いて</strong>
        比べました。Wroe ら（2005）は、この体格補正後の値を
        「咬合力指数（BFQ）」と呼び、平均を 100 としています。
        100 より大きければ体格の割に噛む力が強く、小さければ弱い、という意味です。
      </p>

      <h2 id="result">分かったこと — 食べ物と噛む力の関係</h2>
      <p>
        論文の要旨によると、体の大きさをそろえて比べたとき、噛む力は
        <strong>食べ物の種類（食性）のグループによってはっきり違って</strong>いました。
      </p>
      <ul>
        <li>
          <strong>体格の割に強い</strong>：硬い植物の繊維を食べる種と、大きな獲物を狩る種
        </li>
        <li>
          <strong>中間</strong>：雑食の種と、小さな獲物を食べる種
        </li>
        <li>
          <strong>体格の割に弱い</strong>：昆虫食に特化した種
        </li>
      </ul>
      <p>
        著者らは、噛む力の違いは食肉目が進化するなかで<strong>食べ物に合わせて形づくられてきた</strong>
        と結論づけ、化石の動物が何を食べていたかを考える手がかりにもなると述べています。
      </p>

      <h2 id="numbers">クマの数字 — ライオンより弱く、体格比でも低め</h2>
      <p>
        クマについて具体的な数字を示しているのが、同じ方法を使った Wroe ら（2005）の論文です。
        この論文は 39 種（現生 31 種・絶滅種 8 種）、49 個の頭骨標本から、
        犬歯で噛んだときの力と BFQ を推定しています。表の一部を抜き出すと次のとおりです。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">動物</th>
              <th className="px-3 py-2 text-right">推定体重（kg）</th>
              <th className="px-3 py-2 text-right">犬歯で噛む力（N）</th>
              <th className="px-3 py-2 text-right">BFQ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ライオン</td>
              <td className="px-3 py-2 text-right tabular-nums">294.6</td>
              <td className="px-3 py-2 text-right tabular-nums">1,768</td>
              <td className="px-3 py-2 text-right tabular-nums">112</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">トラ</td>
              <td className="px-3 py-2 text-right tabular-nums">186.9</td>
              <td className="px-3 py-2 text-right tabular-nums">1,525</td>
              <td className="px-3 py-2 text-right tabular-nums">127</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ブチハイエナ</td>
              <td className="px-3 py-2 text-right tabular-nums">69.1</td>
              <td className="px-3 py-2 text-right tabular-nums">773</td>
              <td className="px-3 py-2 text-right tabular-nums">117</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">オオカミ</td>
              <td className="px-3 py-2 text-right tabular-nums">34.7</td>
              <td className="px-3 py-2 text-right tabular-nums">593</td>
              <td className="px-3 py-2 text-right tabular-nums">136</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">ヒグマ</td>
              <td className="px-3 py-2 text-right tabular-nums">128.8</td>
              <td className="px-3 py-2 text-right tabular-nums">751</td>
              <td className="px-3 py-2 text-right tabular-nums">78</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">アメリカクロクマ</td>
              <td className="px-3 py-2 text-right tabular-nums">105.2</td>
              <td className="px-3 py-2 text-right tabular-nums">541</td>
              <td className="px-3 py-2 text-right tabular-nums">64</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">ツキノワグマ（Ursus thibetanus）</td>
              <td className="px-3 py-2 text-right tabular-nums">77.2</td>
              <td className="px-3 py-2 text-right tabular-nums">312</td>
              <td className="px-3 py-2 text-right tabular-nums">44</td>
            </tr>
          </tbody>
        </table>
        <p className="border-t border-stone-100 px-3 py-2 text-xs text-stone-500">
          出典：Wroe ら（2005）Table 1。体重・噛む力はいずれも頭骨からの推定値。BFQ は体格補正後の値で、平均を 100 とする。
        </p>
      </div>
      <p>
        この推定では、ヒグマが犬歯で噛む力はライオンの<strong>半分弱</strong>でした。
        体格補正後の BFQ も、クマ 3 種は 44〜78 と、ネコ科やオオカミ、ハイエナ（100 以上）より低い値です。
        論文は、クマの BFQ が低いことについて、クマが
        <strong>比較的小さな獲物しか狙わない</strong>こととあわせて述べています。
      </p>
      <p>
        つまり「クマは噛む力が飛び抜けて強い」というイメージは、少なくともこの推定方法で見るかぎり当てはまりません。
        大きな獲物を仕留めることに特化したネコ科やイヌ科とは、体のつくりの方向性が違うと考えられます。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          数字はすべて<strong>頭骨の形からの推定値</strong>で、生きたクマで測った値ではありません。
          また、犬歯の位置で静かに噛みしめたときの理論的な最大値で、奥歯で噛む力とは別です。
        </li>
        <li>
          Wroe ら（2005）の表は、1 種あたり 1〜数個の頭骨にもとづきます。
          個体の大きさや年齢で値は変わるため、「ヒグマは 751 N」と決まっているわけではありません。
        </li>
        <li>
          表のツキノワグマの標本がどの地域の個体かは、本文からは分かりません。
          日本のツキノワグマにそのまま当てはまるとは限りません。
        </li>
        <li>
          Christiansen と Wroe（2007）については、今回は要旨を確認しました。
          151 種それぞれの数値は本記事では扱っていません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        「体格の割に噛む力が強くない」といっても、ツキノワグマの推定値（約 312 N）は
        人を大けがさせるには十分な力です。クマの被害では、かまれる・爪で引っかかれるけがが起きており、
        噛む力が平均より低いことは「安全」を意味しません。
      </p>
      <p>
        大切なのは、噛む力の強さではなく、<strong>そもそも襲われない行動</strong>です。
      </p>
      <ul>
        <li>クマに出会ったら、走らない・背を向けない。クマを見ながらゆっくり離れる</li>
        <li>
          突進してきたらクマスプレーを使う。5〜10 m まで近づいたら、顔に向けて 1〜2 秒ずつ噴射する
          （環境省は、噴射距離 7.5 m 程度以上・噴射時間 6 秒程度以上・カプサイシン類 CRC 1〜2% 程度の製品を目安としています）
        </li>
        <li>
          防衛的な攻撃で接触が避けられないときは、うつ伏せになり両手で首の後ろを守る。
          しつこく続く攻撃や、捕食目的と思われる攻撃には反撃する
        </li>
      </ul>
      <p>
        くわしくは{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>、{" "}
        <Link href="/articles/bear-spray">クマよけスプレーの使い方と選び方</Link>、{" "}
        <Link href="/articles/first-aid">クマに襲われた後の応急処置</Link>
        をご覧ください。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Bite forces and evolutionary adaptations to feeding ecology in carnivores（本号メイン）",
            citation: (
              <>
                Christiansen, P., &amp; Wroe, S. (2007).{" "}
                <em className="not-italic">Ecology</em> 88(2): 347–358.
              </>
            ),
            href: "https://doi.org/10.1890/0012-9658(2007)88[347:BFAEAT]2.0.CO;2",
            linkText: "DOI link →",
          },
          {
            title:
              "Bite club: comparative bite force in big biting mammals and the prediction of predatory behaviour in fossil taxa",
            citation: (
              <>
                Wroe, S., McHenry, C., &amp; Thomason, J. (2005).{" "}
                <em className="not-italic">Proceedings of the Royal Society B</em> 272(1563): 619–625.
              </>
            ),
            href: "https://doi.org/10.1098/rspb.2004.2986",
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
