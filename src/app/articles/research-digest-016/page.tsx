import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-016")!;

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
      Sommer, F., Ståhlman, M., Ilkayeva, O., Arnemo, J. M., Kindberg, J., Josefsson, J., Newgard, C. B., Fröbert, O., &amp; Bäckhed, F. (2016).{" "}
      <em className="not-italic">Cell Reports</em> 14(7): 1655–1661.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        ヒグマは夏から秋にかけてたくさん食べて脂肪を大きく増やし、冬眠中はその脂肪を使って過ごします。
        人なら体に負担がかかりそうな「季節ごとの太り方」をしても、クマは代謝の面で健康を保っているとされます。
        2016 年の論文は、この仕組みに「腸内細菌」が関わっているのではないかと考え、野生のヒグマと実験用のマウスで調べました。
        論文の要旨（抄録）と、出版元の発表資料に書かれている内容をもとに紹介します。
      </p>

      <PaperCard
        label="今号で紹介する論文"
        title="The Gut Microbiota Modulates Energy Metabolism in the Hibernating Brown Bear Ursus arctos"
        citation={mainCitation}
        href="https://doi.org/10.1016/j.celrep.2016.01.026"
        linkText="DOI: 10.1016/j.celrep.2016.01.026 →"
      />

      <KeyPoints
        label="3 行まとめ"
        items={[
          <>
            野生のヒグマの腸内細菌を、活動期（夏）と冬眠中で比べた研究です
          </>,
          <>
            冬眠中は細菌の<strong>多様性が下がり</strong>、フィルミクテス門とアクチノバクテリア門が<strong>減り</strong>、バクテロイデス門が<strong>増えて</strong>いました
          </>,
          <>
            夏のクマの腸内細菌を無菌マウスに移すと、<strong>脂肪が増えやすくなりましたが、血糖の処理（耐糖能）は悪くなりませんでした</strong>
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
        研究を率いたのは、スウェーデン・イェーテボリ大学の Fredrik Bäckhed のグループです。
        腸内細菌と肥満・2 型糖尿病の関係を調べてきたチームで、スカンジナビアのヒグマ研究プロジェクトの研究者も共著者に加わっています。
      </p>
      <p>
        調べたのは、野外で暮らす野生のヒグマ（<em>Ursus arctos</em>）です。研究チームは次の 2 段階で調べました。
      </p>
      <ul>
        <li>
          <strong>クマでの観察</strong>：冬眠中と活動期にクマのふんを集めて腸内細菌の顔ぶれを調べ、あわせて血液中の脂質などの代謝物を比べた
        </li>
        <li>
          <strong>マウスでの実験</strong>：夏（活動期）と冬（冬眠中）のクマの腸内細菌を、腸内細菌をまったく持たない「無菌マウス」に移し、体重・脂肪・血糖の処理などを比べた
        </li>
      </ul>
      <p>
        2 段階目の実験は、「季節で変わる腸内細菌そのものが、体の代謝を変える力を持つのか」を確かめるためのものです。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>1. 冬眠中は腸内細菌の顔ぶれが変わる</h3>
      <p>
        活動期と比べて、冬眠中の腸内細菌には次の違いがありました。
      </p>
      <ul>
        <li>細菌の<strong>多様性が低下</strong>していた</li>
        <li>
          <strong>フィルミクテス門</strong>と<strong>アクチノバクテリア門</strong>の割合が<strong>減っていた</strong>
        </li>
        <li>
          <strong>バクテロイデス門</strong>の割合が<strong>増えていた</strong>
        </li>
      </ul>
      <p>
        冬眠中のクマはほとんど食べないため、腸に入ってくる食べものが大きく変わります。
        腸内細菌の顔ぶれが季節で変わること自体は、この状況を考えると自然なことといえます。
      </p>

      <h3>2. 脂質に関わる代謝物も季節で変わる</h3>
      <p>
        クマの血液では、<strong>中性脂肪（トリグリセリド）・コレステロール・胆汁酸</strong>など、脂質の代謝に関わるいくつかの物質が、冬眠によって変化していました。
      </p>

      <h3>3. 夏の腸内細菌を移したマウスは脂肪が増えやすかった</h3>
      <p>
        夏のクマの腸内細菌を移したマウスは、冬のクマの腸内細菌を移したマウスより、<strong>体重と脂肪が多く増えました</strong>。
        一方で、血糖の処理（耐糖能）は<strong>悪くならず</strong>、出版元の発表資料では「差がないか、わずかに良いくらい」と説明されています。
        マウスの血液中の代謝物にもクマと似た点が見られ、季節ごとの代謝の特徴の<strong>一部</strong>が、腸内細菌を通じてマウスに移ったと考えられています。
      </p>
      <p>
        著者らはここから、夏の腸内細菌は食べものからエネルギーをより多く取り込む方向に働いている可能性があり、
        季節による腸内細菌の変化が、冬眠するヒグマのエネルギー代謝に<strong>関わっているかもしれない</strong>、と結論づけています。
      </p>
      <p>
        冬眠中の体の働き（体温や代謝の下がり方）については、{" "}
        <Link href="/articles/research-digest-008">Vol.8</Link>
        {" "}でも取り上げています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>「関わっているかもしれない」段階の結果です</strong>。著者らも「寄与しうる（may contribute）」という表現にとどめており、腸内細菌が冬眠の代謝を決めていると示したわけではありません。
        </li>
        <li>
          <strong>マウスに移ったのは特徴の一部</strong>です。マウスは冬眠しない動物で、クマと体のつくりも暮らし方も違います。
        </li>
        <li>
          <strong>人の医療にすぐ結びつく話ではありません</strong>。研究を率いた Bäckhed 自身も、発表時に「とても基礎的な研究で、人の肥満対策について言うのは早すぎる」と話しています。
        </li>
        <li>
          <strong>対象はスカンジナビアのヒグマ</strong>です。日本のツキノワグマや北海道のヒグマは、食べものも冬眠の環境も違うため、同じ結果になるかは分かりません。
        </li>
        <li>
          この記事は論文の要旨と出版元の発表資料をもとにしています。調べたクマの頭数やマウスの実験条件など、細かい数字は原典でご確認ください。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究は、クマの体が季節に合わせて大きく切り替わることを、腸内細菌という新しい角度から示したものです。
        クマが夏から秋にかけて脂肪をためこむのは、冬眠を乗り切るための体の仕組みの一部です。
        秋にクマが食べものを求めて動き回ることが多いのも、この「冬に備える時期」と関係しています。
      </p>
      <p>
        人の生活圏では、生ごみや収穫しない果樹、ペットフードなどがクマを引き寄せることがあります。
        こうした誘引物を片づけておくことは、季節を問わず大切な対策です。
        万一クマに出会ったときは、走らず、背を向けず、ゆっくりその場を離れてください。
        詳しい行動は{" "}
        <Link href="/learn/safety">クマ対策の基本</Link>
        {" "}にまとめています。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "The Gut Microbiota Modulates Energy Metabolism in the Hibernating Brown Bear Ursus arctos（本号で紹介した論文）",
            citation: mainCitation,
            href: "https://doi.org/10.1016/j.celrep.2016.01.026",
            linkText: "DOI: 10.1016/j.celrep.2016.01.026 →",
          },
          {
            title: "The Hibernator Microbiome: Host-Bacterial Interactions in an Extreme Nutritional Symbiosis（冬眠動物と腸内細菌の総説）",
            citation: (
              <>
                Carey, H. V., &amp; Assadi-Porter, F. M. (2017).{" "}
                <em className="not-italic">Annual Review of Nutrition</em> 37: 477–500.
              </>
            ),
            href: "https://doi.org/10.1146/annurev-nutr-071816-064740",
            linkText: "DOI: 10.1146/annurev-nutr-071816-064740 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
