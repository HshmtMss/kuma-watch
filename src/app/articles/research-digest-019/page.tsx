import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-019")!;

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
        ヒグマはふだん、ほとんど単独で暮らす動物です。
        ところが、サケが川をさかのぼる季節には、限られた漁場に何十頭ものクマが集まることがあります。
        そのとき、クマどうしはどうやって場所を分け合っているのでしょうか。
      </p>
      <p>
        今号は、アラスカのマクニール川の滝で 1970 年の夏にヒグマを観察した、
        1972 年発表の古典的な論文を読みます。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Social Behavior of the Alaska Brown Bear"
        citation={
          <>
            Stonorov, D., &amp; Stokes, A. W. (1972).{" "}
            <em className="not-italic">Bears: Their Biology and Management</em> 2: 232–242.
          </>
        }
        href="https://doi.org/10.2307/3872587"
        linkText="DOI: 10.2307/3872587 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            アラスカ・マクニール川の滝で、1970 年の夏に <strong>52 頭</strong>のヒグマと
            約 <strong>600 回</strong>の攻撃的なやりとりを記録した
          </>,
          <>
            大きな雄が最上位、次に子連れの雌、その下に単独の雌や小さめの雄、
            若いクマは最下位という <strong>大まかな順位</strong>があった
          </>,
          <>
            夏が進むと突進は減り、<strong>譲る行動が増えた</strong>。
            クマは場所だけでなく <strong>時間もずらして</strong>漁場を分け合っていた
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "なぜ「集まるクマ」を調べたのか" },
          { id: "study", title: "研究の概要 — マクニール川の滝" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">なぜ「集まるクマ」を調べたのか</h2>
      <p>
        論文の冒頭で著者らは、ヒグマはたいていの状況で社会的なつながりを持たない、と書いています。
        例外は、母と子、母から離れたばかりのきょうだい、繁殖期の雄と雌の関係です。
      </p>
      <p>
        ただし、ゴミ捨て場やサケの産卵河川のように食べ物が集中する場所では、クマが集まります。
        限られた食べ物を効率よく使うには、何らかの安定した関係が必要になるはずです。
        著者の Derek Stonorov と Allen W. Stokes（米国ユタ州立大学）は、
        サケが集まる滝で、クマどうしの関係がどうつくられ、食べ物が場所と時間でどう分けられるかを調べました。
      </p>

      <h2 id="study">研究の概要 — マクニール川の滝</h2>
      <p>
        調査地は、アラスカ州魚類野生生物局が管理する <strong>マクニール川クマ保護区</strong>
        （アラスカ半島の付け根付近）です。河口近くで川が大きな岩盤の上を流れ落ちる約 150 ヤード
        （約 140 m）の区間が「マクニール川の滝」で、サケにとって川で唯一の障害になっています。
        滝の上下は水が深くクマがサケを捕りにくいため、サケの遡上の最盛期には
        <strong>30 頭以上が同時に</strong>滝を使うことがあります。
      </p>
      <p>
        観察期間は <strong>1970 年 6 月 1 日〜9 月 1 日</strong>。
        2〜4 人の調査班が、川から 20 ヤード（約 18 m）の小さな岩穴から、明け方から夜まで観察しました。
        個体は顔つき、大きさ、性別、傷あと、耳標や首輪で見分けています（13 頭は麻酔銃で捕獲して標識）。
      </p>
      <p>
        著者らは「攻撃的なやりとり」を、2 頭以上のクマが互いに反応して、移動・採食・休息が中断された場面と定義し、
        そのたびにどちらが退いたか、どんな姿勢や動きをしたかを記録しました。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>52 頭が滝に来た</h3>
      <p>
        夏の間に滝を訪れたクマは <strong>52 頭</strong>で、周辺ではさらに少なくとも 18 頭が見られました。
        クマが滝に現れたのはサケが届いた直後の 7 月 12 日で、数は急に増えて 7 月下旬にピーク
        （7 月 27〜31 日は 1 日平均 31 頭）を迎えました。記録した攻撃的なやりとりは <strong>約 600 回</strong>です。
      </p>

      <h3>大まかな順位</h3>
      <p>
        多くのやりとりでは、どちらが優位でどちらが退いたかを見分けられました。
        著者らは 7 回以上のやりとりが記録された 22 頭（子グマを除く）について順位表をつくっています。
      </p>
      <ul>
        <li>
          <strong>最上位は非常に大きな雄</strong>。夏の別々の時期にいた 2 頭の雄は、決着のついたやりとりで一度も負けませんでした。
        </li>
        <li>
          その下に <strong>1 歳以上の子を連れた雌</strong>。中くらいの体格で非常に攻撃的な子連れの雌 1 頭は、
          ときに最上位の雄 1 頭を除くすべてのクマを退かせました。
        </li>
        <li>
          次に <strong>単独の雌と小さめの雄</strong>（繁殖年齢と推定）。上の層にはほぼ従い、同じ層どうしでは攻撃的でした。
        </li>
        <li>
          その下に、いっしょに行動する <strong>若いきょうだいの組</strong>。
        </li>
        <li>
          最下位は <strong>単独の若いクマ</strong>で、滝そのものをほとんど避けていました。
        </li>
      </ul>
      <p>
        なお、その春に生まれた子を連れた雌も滝を避けていましたが、著者らはこれを順位が低いためではなく、
        子の安全のためだろうと考えています。
        また、順位表を見ると同じ 2 頭の間で勝ち負けが入れ替わる例もあり、
        すべてのクマが一列に並ぶ厳密な順位ではありません。
      </p>

      <h3>争いのきっかけと、体で伝えるしぐさ</h3>
      <p>
        攻撃が起きたのは、(1) 相手との距離が近すぎるとき、(2) 負けたクマが別のクマに八つ当たりするとき、
        (3) 良い漁場の取り合い、(4) 初対面と思われる出会い、の 4 つの場面でした。
      </p>
      <p>
        クマは耳や尾が短く毛が長いため、体の向きや動きで相手に伝えていると著者らは考えました。
        優位な側に多かったのは <strong>相手に正面を向ける、近づく、犬歯を見せる</strong>などで、
        退く側に多かったのは <strong>横向きになる、顔をそむける、頭を下げる、座る・伏せる</strong>などです。
        ただし著者ら自身、これらが本当に相手の行動を変える「合図」なのかを示すにはデータが足りない、と書いています。
      </p>
      <p>
        順位の近いクマどうしでは、口を開けて頭を上下に動かす「ジョーイング」と呼ばれる行動がよく見られ、
        実際のけんかになることはまれでした。記録された 52 回のうち 73% は雌どうしでした。
      </p>

      <h3>夏が進むと争いは穏やかに</h3>
      <p>
        やりとりのうち突進を含むものの割合は、7 月中旬（7 月 14〜18 日）の 62% から、
        8 月上旬（8 月 8〜12 日）には 16% に下がりました。
        反対に、どちらかが譲る場面は 36% から 67% に増えています。
        著者らは、優位なクマがより弱い威嚇に切り替えたように見えた、と述べています。
      </p>

      <h3>場所と時間をずらして分け合う</h3>
      <p>
        クマは漁場に間隔をあけて並ぶだけでなく、時間もずらしていました。
        滝に最も長くいたクマでも 6 時間で、ふつうはもっと短く、ひとつの漁場を 1 日のうちに何頭も使っていました。
        7 月中旬の典型的な午後には 15〜20 頭が見えていても、実際にサケを捕っているのは 4〜5 頭で、
        ほかのクマは条件の悪い場所や川から離れた所で空きを待っていました。
      </p>
      <p>
        著者らの結論は、ヒグマは 1 年に 45 日足らずの漁の時期に、性別・年齢・体の大きさにもとづく順位をつくり、
        優位なクマが最も良い漁場を使い、下位のクマは順番を待つか、悪い場所を使うか、滝から締め出される、というものです。
        順位が高いことが体重の増加や冬越し、繁殖に有利かもしれない、という点は推測として書かれています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>1 か所・1 夏の観察</strong>：マクニール川の滝で 1970 年に観察した結果です。
          年や場所が変われば関係も変わりえます。
        </li>
        <li>
          <strong>後の研究では順位がよりあいまい</strong>：同じ滝で 1972〜73 年に行われた
          Egbert と Stokes の調査では、成獣の雄どうしの関係が年によって三すくみになったり一列になったりし、
          クマの級（年齢・性別のグループ）の間の関係も年によって変わりました。
          Egbert の博士論文の要旨では、同じ級のクマどうしの順位は成獣の雄を除いてはっきりしないことが多かった、とされています。
        </li>
        <li>
          <strong>人が近くにいる環境</strong>：観察地のクマの多くは人に慣れており、
          写真撮影の人が来るとクマが対岸へ移って争いが増えることも記録されています。
        </li>
        <li>
          <strong>種と環境の違い</strong>：対象はアラスカ沿岸のヒグマです。
          日本の北海道のヒグマや本州・四国のツキノワグマに、そのまま当てはまるとは限りません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究が示すのは、ふだん単独で暮らすクマでも、食べ物が集中する場所には集まり、
        体の大きさや子連れかどうかによって、誰がいつどこを使うかが変わる、ということです。
        日本でも、サケ・マスがさかのぼる川や実りの多い場所、放置された果樹や生ごみなど、
        食べ物が集まる場所にはクマが寄りやすくなります。
        誘引物を片付けることは、クマを人里に集めないための基本です。
      </p>
      <p>
        また、論文では子連れの雌が非常に攻撃的になりうることや、若いクマが優位なクマに押し出されて
        条件の悪い場所へ追いやられる様子が描かれています。
        クマに出会ったら、走らず、背を向けずに、ゆっくりその場を離れてください。
        突進してきた場合に備えてクマスプレーを携行し、
        防衛的な攻撃で接触が避けられないときは、うつ伏せになって首の後ろを守る姿勢をとります。
        最新の出没情報は <Link href="/">地図</Link> で確認できます。
      </p>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Social Behavior of the Alaska Brown Bear（本号メイン）",
            citation: (
              <>
                Stonorov, D., &amp; Stokes, A. W. (1972).{" "}
                <em className="not-italic">Bears: Their Biology and Management</em> 2: 232–242.
                （IUCN Publications new series No. 23 に収録）
              </>
            ),
            href: "https://doi.org/10.2307/3872587",
            linkText: "DOI: 10.2307/3872587 →",
          },
          {
            title: "The Social Behaviour of Brown Bears on an Alaskan Salmon Stream",
            citation: (
              <>
                Egbert, A. L., &amp; Stokes, A. W. (1976).{" "}
                <em className="not-italic">Bears: Their Biology and Management</em> 3: 41–56.
              </>
            ),
            href: "https://doi.org/10.2307/3872753",
            linkText: "DOI: 10.2307/3872753 →",
          },
          {
            title: "The Social Behavior of Brown Bears at McNeil River, Alaska（博士論文）",
            citation: <>Egbert, A. L. (1978). Utah State University.</>,
            href: "https://digitalcommons.usu.edu/etd/2101",
            linkText: "DigitalCommons@USU →",
          },
        ]}
      />

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
