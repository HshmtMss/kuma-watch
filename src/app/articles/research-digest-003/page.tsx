import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-003")!;

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
        クマの数や動きを調べるには、「この写真のクマと、あの写真のクマは同じ個体か」を見分ける必要があります。
        ところがクマには、トラの縞のような一頭ごとに決まった模様がほとんどありません。
        今号は、ヒグマの顔写真から AI で個体を見分けようとしたカナダと米国の研究を紹介します。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Automated facial recognition for wildlife that lack unique markings: A deep learning approach for brown bears"
        citation={
          <>
            Clapham, M., Miller, E., Nguyen, M., &amp; Darimont, C. T. (2020).{" "}
            <em className="not-italic">Ecology and Evolution</em> 10(23): 12883–12892.
          </>
        }
        href="https://doi.org/10.1002/ece3.6840"
        linkText="DOI: 10.1002/ece3.6840 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ヒグマ <strong>132 頭・約 4,700 枚</strong>の顔写真で、顔から個体を見分ける AI「BearID」を作った
          </>,
          <>
            学習に使ったクマの識別は <strong>83.9%</strong>、全工程を通すと <strong>82.4%</strong> の正解率
          </>,
          <>
            学習していない新しい個体の照合は <strong>約 71%</strong> にとどまり、カメラトラップでの検証もこれから
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why", title: "なぜ個体を見分けたいのか" },
          { id: "method", title: "どこで・何を・どう調べたか" },
          { id: "results", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="why">なぜ個体を見分けたいのか</h2>
      <p>
        野生動物の調査では、同じ個体を何度も数えてしまわないよう、一頭ずつ見分けることが基本になります。
        個体が分かれば、何頭いるかの推定（標識再捕獲法）や、特定の個体の行動を追うことにも使えます。
      </p>
      <p>
        しかし論文が指摘するように、多くの哺乳類には一生変わらない固有の模様がありません。
        ヒグマもその一つです。今の方法としては遺伝子による個体識別がありますが、費用がかかります。
        そこで著者らは、人の顔認証と同じ考え方で、写真に写ったクマの顔から個体を見分けられないかを試しました。
      </p>

      <h2 id="method">どこで・何を・どう調べたか</h2>
      <p>
        著者らは、カナダのビクトリア大学と非営利の BearID Project などのメンバーです。
        写真はカナダ・ブリティッシュコロンビア州の <strong>ナイトインレット（Knight Inlet）</strong>と、
        米国アラスカ州カトマイ国立公園の <strong>ブルックス川（Brooks River）</strong>の 2 か所で、
        2009〜2017 年の 5〜10 月に撮られました。
      </p>
      <ul>
        <li>
          個体数：<strong>132 頭</strong>（ナイトインレット 59 頭、ブルックス川 73 頭）
        </li>
        <li>
          写真：<strong>4,675 枚</strong>（抄録では 4,674 枚）。1 頭あたりの枚数は中央値 22 枚、1〜242 枚と幅があります
        </li>
        <li>
          カメラ：ほとんどが一眼レフで撮った写真で、自動撮影カメラ（カメラトラップ）の写真は <strong>19 枚</strong>だけです
        </li>
        <li>
          正解の個体名：写真を撮った人が、毎日観察していたクマの見た目や来歴の知識をもとに付けました
        </li>
      </ul>
      <p>
        AI は 4 つの段階でできています。
        ①写真の中からクマの顔を見つける、②顔の向きをそろえて切り出す、
        ③顔の特徴を 128 個の数値に変換する（深層学習のネットワーク ResNet-34 を使用）、
        ④その数値から「どのクマか」を判定する、という流れです。
        写真の 80% を学習に、残り 20%（935 枚）を成績の確認に使いました。
        このソフトウェアは公開されており、誰でも使えるようになっています。
      </p>

      <h2 id="results">分かったこと</h2>
      <ul>
        <li>
          <strong>顔を見つける段階</strong>：平均適合率（AP）は 0.98 で、写真の中のクマの顔をほぼ見落とさずに検出できました。
        </li>
        <li>
          <strong>学習済みのクマの識別</strong>：確認用の写真で <strong>83.9%</strong> の正解率でした。
        </li>
        <li>
          <strong>全工程を通した成績</strong>：顔の検出から判定までをまとめて動かすと <strong>82.4%</strong> でした。
        </li>
        <li>
          <strong>学習していない新しいクマ</strong>：学習に使っていない個体どうしを照合した場合の正解率は <strong>約 71%</strong> で、
          既知のクマより低くなりました。
        </li>
      </ul>
      <p>
        つまり「すでに登録したクマのうちどれか」を当てるのは 8 割強できる一方、
        「初めて写ったクマを新しい個体として扱う」部分はまだ弱い、という結果です。
        なお、この論文は人の専門家と精度を比べたものではなく、処理速度も報告していません。
      </p>
      <p>
        著者らは、この方法が模様のない他の動物にも応用できる土台になりうるとし、
        カメラトラップを使った個体数推定、個体の活動パターンの把握、
        人とのあつれきを起こす個体の特定などへの利用を将来の候補として挙げています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>カメラトラップでは未検証</strong>：写真の大半は人が一眼レフで撮ったものです。
          自動撮影カメラの画像で同じ成績が出るかは、著者ら自身が今後の課題としています。
        </li>
        <li>
          <strong>新しい個体の扱い</strong>：新しいクマは人の手で学習データに加える必要があり、照合の精度も約 71% にとどまります。
        </li>
        <li>
          <strong>見た目の変化</strong>：年齢や体重の増減、顔のけがが精度にどう影響するかは、さらに調べる必要があるとされています。
        </li>
        <li>
          <strong>地域と種の違い</strong>：学習に使ったのは北米の 2 地域のヒグマだけです。
          日本のツキノワグマや北海道のヒグマにそのまま使えるかは、この論文からは分かりません。
        </li>
        <li>
          <strong>過学習の可能性</strong>：学習時の誤差がごく小さく、学習データに合わせすぎている可能性も著者らは挙げています。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究は、模様のないクマでも顔写真から個体を見分ける道筋があることを示しました。
        ただし、条件のよい写真を中心にした北米での結果であり、日本の山林で自動撮影カメラに写る画像で
        同じように使えるかは、別に確かめる必要があります。
        「AI で地域のクマを一頭ずつ見分けられる」段階には、まだ届いていないと考えるのが妥当です。
      </p>
      <p>
        個体識別の技術が進んでも、身を守る基本は変わりません。
        クマに出会ったら走らず、背を向けず、ゆっくり離れてください。
        突進された場合に備えて、クマスプレーを携帯することも選択肢の一つです。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Automated facial recognition for wildlife that lack unique markings: A deep learning approach for brown bears（本号メイン）",
            citation: (
              <>
                Clapham, M., Miller, E., Nguyen, M., &amp; Darimont, C. T. (2020).{" "}
                <em className="not-italic">Ecology and Evolution</em> 10(23): 12883–12892.
              </>
            ),
            href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7713984/",
            linkText: "全文（PMC）→",
          },
          {
            title: "BearID（論文で公開されたソフトウェアのアーカイブ）",
            citation: <>Zenodo. doi:10.5281/zenodo.4014233</>,
            href: "https://doi.org/10.5281/zenodo.4014233",
            linkText: "DOI: 10.5281/zenodo.4014233 →",
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
