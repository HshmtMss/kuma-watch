import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-031")!;

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
  const doiUrl =
    "https://doi.org/10.2193/0022-541X(2004)068[0979:RBCIBP]2.0.CO;2";
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        クマのニュースが多い年と少ない年があるのは、なぜでしょうか。
        その手がかりの一つが、秋の山の<strong>ブナの実のでき</strong>です。
        今回は、東北地方でブナの実の不作と、人の生活圏に出てきて捕獲されたクマの数との関係を調べた
        Oka ら（2004）の論文を読みます。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Relationship between changes in beechnut production and Asiatic black bears in northern Japan"
        citation={
          <>
            Oka, T., Miura, S., Masaki, T., Suzuki, W., Osumi, K., &amp; Saitoh, S.
            (2004). <em className="not-italic">Journal of Wildlife Management</em>{" "}
            68(4): 979–986.
          </>
        }
        href={doiUrl}
        linkText="DOI で原典を見る →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            東北地方の 7 つの地域のうち <strong>5 地域</strong>で、ブナの実の不作の度合いと、
            <strong>有害捕獲されたクマの数</strong>に統計的に意味のある正の相関がありました（P &lt; 0.05）
          </>,
          <>
            調べたのは「目撃件数」ではなく「捕獲数」です。捕獲数が増えたことは、里への出没が増えたことを<strong>示唆</strong>します
          </>,
          <>
            著者らは、既にあるブナの実の観測網を使えば、不作の年に<strong>前もって注意を呼びかけられる</strong>と提案しています
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why", title: "なぜブナの実が注目されるのか" },
          { id: "study", title: "研究の概要" },
          { id: "finding", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "action", title: "私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="why">なぜブナの実が注目されるのか</h2>
      <p>
        ツキノワグマは秋、冬眠に備えてたくさん食べます。
        ブナ（<em>Fagus crenata</em>）の実は、その時期の大切な食べ物の一つです。
      </p>
      <p>
        ブナは毎年同じように実をつけるわけではなく、たくさん実る年と、ほとんど実らない年があります。
        宮城県によると、ブナは大豊作の翌年に大凶作になりやすく、その年は人里への出没が増えると言われています。
        山に食べ物が少ない年に、クマが食べ物を探して人の生活圏に近づくのではないか——。
        この考えを、行政の記録を使って確かめようとしたのが今回の論文です。
      </p>

      <h2 id="study">研究の概要</h2>
      <p>
        著者らは東北地方を 7 つの地域（ゾーン）に分け、地域ごとに次の 2 つを比べました。
      </p>
      <ul>
        <li>
          <strong>ブナの実の不作の度合い</strong>（論文では「ブナ堅果の凶作指数」と呼んでいます）
        </li>
        <li>
          <strong>有害捕獲されたクマの数</strong>（農作物の被害や人への危険などを理由に捕獲されたクマ）
        </li>
      </ul>
      <p>
        ここで大切なのは、比べたのが「クマを見た件数（目撃・出没件数）」ではなく、
        <strong>「有害捕獲の数」</strong>だという点です。
        なお、論文の本文は購読制で、今回は抄録（要旨）で内容を確認しました。
        そのため、調査の年数や指数の細かな計算方法は、この記事では紹介していません。
      </p>

      <h2 id="finding">分かったこと</h2>
      <p>
        7 つの地域のうち <strong>5 つの地域</strong>で、
        ブナの実の不作の度合いが大きい年ほど、有害捕獲されたクマの数が多いという
        <strong>正の相関</strong>が見られました（統計的な有意水準 P &lt; 0.05）。
        残りの 2 地域では、統計的に意味のある相関は確認されませんでした。
      </p>
      <p>
        有害捕獲は、クマが人の生活圏の近くに現れて問題になったときに行われます。
        そのため、ブナが不作の年に捕獲数が増えたことは、
        <strong>その年に里への出没が増えたことを示唆する</strong>と考えられます。
        ただし、この論文が直接数えたのは出没ではなく捕獲です。
      </p>
      <p>
        著者らはこの結果から、秋にクマがブナの実に大きく頼っている地域では、
        <strong>既にあるブナの実のでき具合の観測網</strong>を使い、
        不作の年に行政が「クマが里に出やすい」と注意を呼びかけられると提案しています。
        そうした呼びかけは、人とクマのあつれきを減らし、クマの保全への理解を深めることにもつながるとしています。
      </p>
      <KeyPoints
        label="論文の結果（抄録より）"
        tone="stone"
        items={[
          <>対象: 東北地方の 7 地域</>,
          <>比べたもの: ブナの実の凶作指数 と 有害捕獲されたクマの数</>,
          <>
            結果: <strong>5 地域</strong>で正の相関（P &lt; 0.05）
          </>,
        ]}
      />

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>相関であり、原因を直接示したものではありません。</strong>
          ブナの実以外の食べ物の状況や、クマの数の変化なども関わっている可能性があります。
        </li>
        <li>
          <strong>捕獲数は出没そのものではありません。</strong>
          捕獲の数は、自治体の方針や捕獲の体制など、人の側の事情にも左右されます。
        </li>
        <li>
          <strong>7 地域すべてで関係が見られたわけではありません。</strong>
          著者らも、提案は「秋にブナの実に大きく頼っている地域」に向けたものとしています。
        </li>
        <li>
          <strong>対象は東北地方です。</strong>
          ミズナラやコナラなど、ほかの木の実が主な食べ物になる地域や西日本に、そのまま当てはまるとは限りません。
        </li>
      </ul>

      <h2 id="action">私たちへの示唆</h2>
      <p>
        いまでは、ブナなどの実のでき具合を調べて出没に備える取り組みが行われています。
        たとえば宮城県は、ツキノワグマの大量出没の時期を予測するため、ブナとミズナラの実り具合を調べ、
        住民への周知などに役立てています。東北森林管理局も、管内のブナの開花・結実の状況を公表しています。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>秋は地元の情報を確認する</strong> — お住まいの県や森林管理局が出す木の実の調査結果や、出没の注意情報を見ておきましょう。
        </li>
        <li>
          <strong>里の食べ物を片づける</strong> — 収穫しない柿や栗、生ゴミなどはクマを引き寄せることがあります。早めに片づけましょう。
        </li>
        <li>
          <strong>出会ってしまったら</strong> — 走らず、背を向けず、ゆっくり離れます。
          詳しくは <Link href="/measures">クマ対策の総合ガイド</Link> をご覧ください。
        </li>
      </ol>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: (
              <>
                Relationship between changes in beechnut production and Asiatic
                black bears in northern Japan（本号メイン）
              </>
            ),
            citation: (
              <>
                Oka, T., Miura, S., Masaki, T., Suzuki, W., Osumi, K., &amp;
                Saitoh, S. (2004).{" "}
                <em className="not-italic">Journal of Wildlife Management</em>{" "}
                68(4): 979–986.
              </>
            ),
            href: doiUrl,
            linkText: "DOI で原典を見る →",
          },
          {
            title: <>ツキノワグマ出没予測を目的とした堅果類豊凶調査について</>,
            citation: <>宮城県 林業技術総合センター</>,
            href: "https://www.pref.miyagi.jp/soshiki/stsc/buna-mizunara.html",
            linkText: "宮城県のページを見る →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">
        次号も研究ダイジェストをお届けします。
      </NextIssue>
    </ArticleShell>
  );
}
