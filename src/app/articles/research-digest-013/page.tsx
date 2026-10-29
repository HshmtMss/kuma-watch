import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-013")!;

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
        クマは木に背中をこすりつけたり、かじったり、爪を立てたりして、においの印（マーキング）を残します。
        では、森にたくさんある木のうち、どの木が選ばれているのでしょうか。
      </p>
      <p>
        今号は、カナダ西海岸のヒグマを対象に「マーキングに使われる木」と「周りにある木」を比べた
        Clapham ら（2013）の論文を読みます。著者らは、ヒグマのマーキング用の木の選び方を調べた研究は
        これが最初だと述べています。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="The function of strategic tree selectivity in the chemical signalling of brown bears"
        citation={
          <>
            Clapham, M., Nevin, O. T., Ramsey, A. D., &amp; Rosell, F. (2013).{" "}
            <em className="not-italic">Animal Behaviour</em> 85(6): 1351–1357.
          </>
        }
        href="https://doi.org/10.1016/j.anbehav.2013.03.026"
        linkText="DOI: 10.1016/j.anbehav.2013.03.026 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            マーキングに使われた 50 本の木は、<strong>すべて獣道の上</strong>にあり、河口や川の周り（食べ物が多い場所）に集まっていた
          </>,
          <>
            クマは周りにある木をそのまま使うのではなく、<strong>その場所では少なめの樹種</strong>や、<strong>平均より太い木</strong>を選んでいた
          </>,
          <>
            著者らは、よく通る場所の目立つ木を選ぶことで、<strong>においの印を効率よく他のクマに届けている</strong>と考えている
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "なぜ「どの木か」を調べるのか" },
          { id: "method", title: "研究の概要 — どこで、どう調べたか" },
          { id: "results", title: "分かったこと" },
          { id: "related", title: "関連研究 — 誰がどのくらい時間をかけるか" },
          { id: "limits", title: "限界・注意" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">なぜ「どの木か」を調べるのか</h2>
      <p>
        多くの哺乳類は、目立つものににおいの印を残します。においを作って残すには時間とエネルギーがかかるため、
        「相手に気づかれやすい場所・ものを選べば、その手間を減らせるのではないか」という考え方があります。
      </p>
      <p>
        ヒグマについては、マーキングされた木がどのような木なのか、はっきりしていませんでした。
        著者らは「ヒグマはマーキングに使う木を選んでいて、その木はクマがよく訪れる場所にあるはずだ」という仮説を立て、
        実際に周りの木と比べて確かめました。
      </p>

      <h2 id="method">研究の概要 — どこで、どう調べたか</h2>
      <ul>
        <li>
          <strong>場所</strong>: カナダ・ブリティッシュコロンビア州、ナイト・インレット（Knight Inlet）の
          グレンデール・コーブ（Glendale Cove）。秋にはおよそ 40〜50 頭のヒグマがサケの産卵水路を主な食料源として使う地域です。
        </li>
        <li>
          <strong>期間</strong>: 2009〜2011 年の 5〜10 月。
        </li>
        <li>
          <strong>マーキング用の木の見つけ方</strong>: 長年くり返し使われている跡がある木だけを対象にしました。
          一度こすっただけの木は含めていません。カメラトラップで、跡がツキノワグマではなくヒグマのものであることも確かめています。
        </li>
        <li>
          <strong>比べ方</strong>: 森の中をまっすぐ歩いて木を数える調査（13 本、計 2.6 km）と、
          獣道に沿って木を数える調査（16 本、計約 2.2 km）を行い、さらにマーキング用の木の周りの木も記録しました。
          樹種と幹の太さ（胸高直径）を、マーキングされた木とされていない木で比べています。
        </li>
      </ul>

      <h2 id="results">分かったこと</h2>
      <h3>場所: すべて獣道の上</h3>
      <p>
        記録された 50 本のマーキング用の木は、すべて獣道の上にありました。
        森の中をまっすぐ歩く調査で見つかったのは 50 本中 2 本だけで、残りは獣道の調査や探索で見つかっています。
        よく使われる獣道ほど、よく使われる木がある傾向でした。
      </p>
      <p>
        木は河口や川の周りの森の縁に集まっていました。春はスゲの生える湿地、秋はサケの遡上する川という、
        食べ物の多い場所の近くです。山の斜面にも跡のある木はありましたが、間隔が広く、
        くり返し使われる木とは言えない程度でした。
      </p>

      <h3>樹種: 少なめの樹種を選ぶ</h3>
      <p>
        この地域で最も多い木はアメリカツガ（Western hemlock）です。
        ところがマーキングに使われた木の内訳は、アマビリスモミ 23 本、シトカトウヒ 11 本、アメリカツガ 8 本、
        ベイスギ 7 本、レッドアルダー 1 本でした。
        周りの木の構成と比べると、アマビリスモミなどは期待より多く、アメリカツガは期待より少なく選ばれていました。
        著者らは、アマビリスモミやシトカトウヒは傷つくとにおいの強い樹脂を出すことに触れ、
        樹脂がにおいの印を長持ちさせたり、相手を引きつけたりしているのかもしれないと推測しています（推測であり、検証はされていません）。
      </p>

      <h3>太さ: 平均より太い木</h3>
      <p>
        マーキング用の木の胸高直径は平均 42.5 cm で、近くのマーキングされていない木（平均 31.7 cm）より太いものでした。
        樹種による太さの違いはなく、樹種に関係なく太い木が選ばれていました。
        一方、木の傾きには差がありませんでした。
      </p>

      <h3>その他</h3>
      <ul>
        <li>
          30 本で測った跡の一番高い位置は、平均約 2.0 m でした。
        </li>
        <li>
          ぬれた毛でこすった跡は 2 時間もたたずに見えなくなる一方、かじった跡や爪の跡はその年のうちは新しいまま残っていました。
        </li>
        <li>
          マーキング用の木に向かって、足を踏みしめた跡のくぼみが続いている木もありました。
        </li>
      </ul>

      <h2 id="related">関連研究 — 誰がどのくらい時間をかけるか</h2>
      <p>
        同じ著者らは、同じ地域でマーキング用の木の前に設置したカメラトラップの画像を使い、
        年齢や性別による違いも報告しています（Clapham ら 2014）。抄録によると、
        おとなのオスはおとなのメスや若いクマより長い時間をマーキングにかけ、より複雑な一連の動きを見せました。
        おとなのオスの行動は繁殖期の外でも変わらず、著者らはオス同士の競争に関わる行動だと考えています。
        また、幼い子グマは母グマの動きをまねることが多く、少し大きな子グマは自分からマーキングをする傾向がありました。
      </p>

      <h2 id="limits">限界・注意</h2>
      <ul>
        <li>
          調べたのはカナダ西海岸の 1 か所の河口周辺だけで、マーキング用の木は 50 本です。
          森の樹種構成が違えば、選ばれる樹種も変わると考えられます。
        </li>
        <li>
          対象はヒグマです。日本のツキノワグマや北海道のヒグマで同じ傾向になるかは、この論文からは分かりません。
        </li>
        <li>
          樹脂のにおいの役割や、においの印が何を伝えているかは、この論文では直接は測っておらず、著者らの解釈・推測の部分です。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究で、マーキング用の木はクマがよく通る獣道の上にあり、食べ物の多い場所の近くに集まっていました。
        日本でそのまま当てはまるとは限りませんが、山の中で樹皮がこすれたりかじられたりした木や、毛の付いた木を見かけたら、
        「この辺りはクマが通る道かもしれない」と考えるきっかけになります。
      </p>
      <ul>
        <li>
          そうした木や獣道の周りでは、写真を撮るために長くとどまったりせず、周りに気を配りながら通り過ぎましょう。
        </li>
        <li>
          クマに出会ったときは、走らない・背を向けない・ゆっくり離れる、が基本です。
          突進されたら、5〜10 m まで引きつけてクマスプレーを顔に向けて 1〜2 秒ずつ噴射します
          （詳しくは <Link href="/articles/bear-spray">クマスプレーの使い方</Link>）。
        </li>
        <li>
          クマの痕跡の見分け方は <Link href="/articles/bear-tracks">クマの痕跡を見分ける</Link> にまとめています。
        </li>
      </ul>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "The function of strategic tree selectivity in the chemical signalling of brown bears（本号メイン）",
            citation: (
              <>
                Clapham, M., Nevin, O. T., Ramsey, A. D., &amp; Rosell, F. (2013).{" "}
                <em className="not-italic">Animal Behaviour</em> 85(6): 1351–1357.
              </>
            ),
            href: "https://doi.org/10.1016/j.anbehav.2013.03.026",
            linkText: "DOI: 10.1016/j.anbehav.2013.03.026 →",
          },
          {
            title: "Scent-marking investment and motor patterns are affected by the age and sex of wild brown bears",
            citation: (
              <>
                Clapham, M., Nevin, O. T., Ramsey, A. D., &amp; Rosell, F. (2014).{" "}
                <em className="not-italic">Animal Behaviour</em> 94: 107–116.
              </>
            ),
            href: "https://doi.org/10.1016/j.anbehav.2014.05.017",
            linkText: "DOI: 10.1016/j.anbehav.2014.05.017 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.14">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
