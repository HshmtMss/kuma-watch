import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-025")!;

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
      Peters, G., Owen, M. A., &amp; Rogers, L. (2007).{" "}
      <em className="not-italic">Acta Theriologica</em> 52(4): 379–389.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        映画や絵本のクマは、よく大きな声で吠えています。けれども、クマが実際にどんな声を出し、それが何を意味するのかは、
        まだ分かっていないことの多い分野です。今号は、クマの子どもがよく出す「ハミング」と呼ばれる独特の声を整理した
        2007 年の論文を、抄録（論文の要旨）に書かれている内容をもとに紹介します。
      </p>

      <PaperCard
        label="今号で紹介する論文"
        title="Humming in bears: a peculiar sustained mammalian vocalization"
        citation={mainCitation}
        href="https://doi.org/10.1007/BF03194236"
        linkText="DOI: 10.1007/BF03194236 →"
      />

      <KeyPoints
        label="3 行まとめ"
        items={[
          <>
            クマには、さまざまな名前で呼ばれてきた<strong>長く続く独特の声</strong>があり、著者らはこれを<strong>「ハミング」</strong>と呼ぶことを提案しました
          </>,
          <>
            ハミングは<strong>ジャイアントパンダを除く現生のクマ全種</strong>で見られ、主に<strong>子グマ</strong>が出しますが、おとなも出すことがあります
          </>,
          <>
            何のための声なのかは、まだ<strong>確かめられていません</strong>。母グマと子グマを対象にした実験が必要だとされています
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "polar", title: "野生のホッキョクグマの記録" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        著者は、哺乳類の音声を研究してきたドイツの Gustav Peters らです。
        クマには、長く続く独特の声があることが以前から知られていましたが、研究者によって呼び名がばらばらで、
        詳しく調べられてはいませんでした。
      </p>
      <p>
        この論文では、それまでの文献を整理し、過去に録音されたテープを分析し、著者ら自身の観察も合わせて、
        この声がクマ科のどの種にあるのか、どんな音の構造をしているのか、どうやって音を出しているのかをまとめました。
        ほかの種類の声と混同しないよう、この声を <strong>「ハミング（humming）」</strong>と呼ぶことを提案しています。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>クマ科のほぼ全種に共通する声</h3>
      <p>
        ハミングは、<strong>ジャイアントパンダを除く現生のクマ全種</strong>で確認されました。
        種が違っても、音の構造や出し方はよく似ていたと報告されています。
      </p>

      <h3>主に子グマが出す</h3>
      <p>
        おとなのクマもハミングをすることがありますが、出すのは<strong>主に子グマ</strong>です。
      </p>

      <h3>息を吐きながら、短い音を速く連ねる</h3>
      <p>
        ハミングは、<strong>ごく短い音を素早く連続させた声</strong>です。
        息を<strong>長く吐きながら</strong>音を出し続け、その合間に、音を出さない<strong>短い吸気</strong>がはさまります。
        そのため、途切れずに長く続いて聞こえます。
      </p>

      <h3>声と体の振動が、コミュニケーションになっている可能性</h3>
      <p>
        著者らは、ハミングの音そのものと、声を出すときの体の振動の両方が、コミュニケーションの役割を持っている可能性が高いと考えています。
        ただし、これは考察で、<strong>何を伝えているのかはまだ確かめられていません</strong>。
        著者ら自身も、母グマと子グマを対象にした体の働きを調べる実験が必要だと述べています。
      </p>

      <h3>クマに特有の声か</h3>
      <p>
        著者らは、ハミングはクマ科に共通する声のタイプで、陸上の他の食肉類（ネコやイヌのなかま など）が出す声とは系統的なつながりがない、と考えています。
      </p>

      <h2 id="polar">野生のホッキョクグマの記録</h2>
      <p>
        その後、野生の子グマでもハミングが記録されています。
        2010 年の短い報告（Derocher ら）では、ノルウェー・スバールバル諸島で、<strong>授乳中のホッキョクグマの子グマ</strong>の声を録音しました。
        約 3 分間の録音で、1 回の声は <strong>30〜55 個</strong>の短い音（1 つ約 0.05 秒）からなり、
        最も強い音はおよそ <strong>0.28 kHz</strong> 付近にありました。
        役割は分かっておらず、安心している状態に関係するのか、母グマの乳の出をうながすのかなどの可能性が挙げられています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>役割は未確認</strong>：ハミングが何を伝えているのかは、実験で確かめられていません。「満足の声」などと言い切ることはできません。
        </li>
        <li>
          <strong>文献と過去の録音の整理</strong>：新たに多くの個体を決まった条件で録音した研究ではなく、既存の資料と観察をまとめたものです。
        </li>
        <li>
          <strong>野生での記録は限られる</strong>：上で紹介したホッキョクグマの報告も、子グマ 1 頭の約 3 分間の録音です。
        </li>
        <li>
          <strong>日本のクマについて</strong>：論文はツキノワグマ（アジアクロクマ）とヒグマも含むクマ科全体を扱っていますが、
          日本の野外で録音・分析した研究ではありません。
        </li>
        <li>本記事は主に論文の抄録にもとづいており、本文の細かな内容までは紹介していません。</li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        ハミングは主に子グマが出す声で、人に向けた合図ではありません。
        ただ、野外で子グマを見かけたり、その声が聞こえたりしたら、近くに母グマがいると考えて、すぐにその場を離れましょう。
        子グマに近づいたり、写真を撮ろうとしたりするのは避けてください。
      </p>
      <p>
        クマが人に出会ったときの反応については、論文ではなく、米国国立公園局（NPS）の安全ガイドを参考に紹介します。
        NPS は、クマが<strong>「ウォッ」と鼻を鳴らす、うなる、あごをカチッと鳴らす、耳を後ろに倒す</strong>といった様子を、
        身を守ろうとする反応として挙げています。こうした様子は、クマが緊張し、落ち着かない状態にあるサインと考えられます。
        一方、<strong>後ろ足で立ち上がる</strong>のは、多くの場合よく見たりにおいをかいだりするためで、威嚇とは限らないとしています。
        また、クマは突進してきても直前で向きを変える<strong>「はったり」の突進</strong>をすることも多いとされています。
      </p>
      <p>
        ただし、声や仕草から「この後どうなるか」を確実に読み取ることはできません。
        「今離れれば襲われない」「無視すれば必ず襲われる」といった決まりはありません。どんな場合も、次の基本を守りましょう。
      </p>
      <ul>
        <li>
          <strong>落ち着いて、走らない・背を向けない</strong>で、クマを見ながら<strong>ゆっくり離れます</strong>。クマの声をまねするのはやめましょう。
        </li>
        <li>
          クマスプレーはすぐ使えるように準備しておきます。突進してきたら、<strong>5〜10m</strong> まで近づいたところで、クマの<strong>顔に向けて 1〜2 秒ずつ</strong>噴射します。
          環境省はスプレーの目安として、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・カプサイシン類（CRC）1〜2% 程度を挙げています。
        </li>
        <li>
          防衛的な攻撃で接触が避けられないときは、<strong>うつ伏せになり首の後ろを手で守る</strong>防御姿勢をとります。
          執拗に襲ってくる、捕食しようとするような攻撃のときは反撃します。
        </li>
      </ul>
      <p>
        詳しくは{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
        を、出没を見かけたときの連絡先は{" "}
        <Link href="/articles/bear-report">通報マニュアル</Link>
        をご覧ください。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Humming in bears: a peculiar sustained mammalian vocalization（本号で紹介した論文）",
            citation: mainCitation,
            href: "https://doi.org/10.1007/BF03194236",
            linkText: "DOI: 10.1007/BF03194236 →",
          },
          {
            title: "Nursing vocalization of a polar bear cub",
            citation: (
              <>
                Derocher, A. E., Van Parijs, S. M., &amp; Wiig, Ø. (2010).{" "}
                <em className="not-italic">Ursus</em> 21(2): 189–191.
              </>
            ),
            href: "https://doi.org/10.2192/09SC025.1",
            linkText: "DOI: 10.2192/09SC025.1 →",
          },
          {
            title: "Staying Safe Around Bears",
            citation: "U.S. National Park Service（米国国立公園局）",
            href: "https://www.nps.gov/subjects/bears/safety.htm",
            linkText: "nps.gov →",
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
