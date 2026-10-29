import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-005")!;

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
        クマは鼻がとてもよい動物だ、とよく言われます。では、その「鼻のよさ」は研究でどこまで分かっているのでしょうか。
        そして、クマは実際に匂いをどう使って食べ物を探しているのでしょうか。
      </p>
      <p>
        今号は、嗅覚に関わる遺伝子を哺乳類 13 種で比べた研究と、
        ホッキョクグマの動きと風向きの関係を調べた研究の 2 本を読みます。
        先に断っておくと、1 本目の研究にクマは含まれていません。「動物ごとに嗅覚の遺伝子がどれくらい違うか」を知るための材料として紹介します。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 2 本の論文"
        papers={[
          {
            title:
              "① Extreme expansion of the olfactory receptor gene repertoire in African elephants and evolutionary dynamics of orthologous gene groups in 13 placental mammals",
            citation: (
              <>
                Niimura, Y., Matsui, A., &amp; Touhara, K. (2014).{" "}
                <em className="not-italic">Genome Research</em> 24(9): 1485–1496.
              </>
            ),
            href: "https://doi.org/10.1101/gr.169532.113",
            linkText: "DOI: 10.1101/gr.169532.113 →",
          },
          {
            title: "② Windscapes and olfactory foraging in a large carnivore",
            citation: (
              <>
                Togunov, R. R., Derocher, A. E., &amp; Lunn, N. J. (2017).{" "}
                <em className="not-italic">Scientific Reports</em> 7: 46332.
              </>
            ),
            href: "https://doi.org/10.1038/srep46332",
            linkText: "DOI: 10.1038/srep46332 →",
          },
        ]}
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            哺乳類 13 種の比較では、働く嗅覚受容体遺伝子が最も多かったのは <strong>アフリカゾウ（1,948 個）</strong>で、ヒト（396 個）の約 5 倍。<strong>クマは調べられていない</strong>
          </>,
          <>
            ハドソン湾のホッキョクグマは、狩りの多い <strong>冬の夜に、風を横切る向きに動くことが多かった</strong>。匂いで獲物を探す動き方と合う
          </>,
          <>
            「クマの嗅覚は犬の 7 倍」は <strong>よく使われる言い回しで、測った値ではない</strong>。それでも、匂いの管理が対策の基本であることは変わらない
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "genes", title: "論文①：嗅覚の遺伝子を 13 種で比べる" },
          { id: "wind", title: "論文②：ホッキョクグマは風をどう使うか" },
          { id: "seven", title: "「犬の 7 倍」について" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="genes">論文①：嗅覚の遺伝子を 13 種で比べる</h2>
      <p>
        鼻の中には、匂いの分子を受け取る <strong>嗅覚受容体</strong>というタンパク質があります。
        その設計図にあたる遺伝子（嗅覚受容体遺伝子）は、動物の種類によって数が大きく違います。
      </p>
      <p>
        東京大学の新村芳人さんらは、ヒト・チンパンジーなどの霊長類 5 種と、
        アフリカゾウ・ウシ・イヌ・ウマ・ウサギ・モルモット・ラット・マウスの 8 種、
        あわせて 13 種の有胎盤類のゲノムから、嗅覚受容体遺伝子を探し出して比べました。
      </p>
      <h3>分かったこと</h3>
      <ul>
        <li>
          アフリカゾウは、働く（壊れていない）嗅覚受容体遺伝子を <strong>1,948 個</strong>持っていました。
          著者らは「驚くほど大きい（約 2,000）」と書いています。
        </li>
        <li>
          ヒトの働く嗅覚受容体遺伝子は <strong>396 個</strong>で、アフリカゾウはその約 5 倍にあたります。
        </li>
        <li>
          論文の主題は、遺伝子が種ごとにどう増えたり失われたりしてきたかという進化の話です。
          13 種すべてで 1 対 1 に対応し、増減のなかった遺伝子のグループは 3 つだけでした。
        </li>
      </ul>
      <p>
        大切な注意点が 2 つあります。1 つ目は、この 13 種に <strong>クマは入っていない</strong>ことです。
        この論文からクマの遺伝子の数は分かりません。
        2 つ目は、遺伝子の数がそのまま「鼻のよさ」を表すわけではないことです。
        著者ら自身、遺伝子の数が嗅覚のどの面を反映しているのかははっきりしない、と書いています。
        数が多いことは、匂いをどれだけ細かく嗅ぎ分けられるかに関わる可能性がある一方、
        薄い匂いにどれだけ敏感かとは別の話かもしれない、という慎重な書き方です。
      </p>

      <h2 id="wind">論文②：ホッキョクグマは風をどう使うか</h2>
      <p>
        匂いは風に乗って流れてきます。理論上、匂いのもとを探すには <strong>風を横切る向きに動く</strong>のがよいとされます。
        風下側に流れてくる匂いの帯に出合いやすくなるからです。
        ただ、大型の肉食動物で実際にそう動いているかを示したデータは、これまで少ししかありませんでした。
      </p>
      <h3>どこで・何を・どう調べたか</h3>
      <ul>
        <li>
          場所はカナダ・ハドソン湾西部。対象は <strong>子連れの成獣メス</strong>のホッキョクグマで、
          2004〜2014 年に計 123 本の衛星通信つき GPS 首輪を付けました。
        </li>
        <li>
          首輪のほとんど（120 本）は 4 時間おき、3 本は 30 分おきに位置を記録しました。
        </li>
        <li>
          風は現地で測ったものではなく、気象モデルの計算値（約 55〜111 km 四方の格子）を使いました。
          海氷の上では、氷そのものの流れの分を差し引いてクマの動きを求めています。
        </li>
        <li>
          クマが動いた向きを風に対して「追い風・斜め追い風・横風・斜め向かい風・向かい風」の 5 つに分け、
          季節・風の強さ・クマの速さ・昼か夜かごとに比べました。
        </li>
      </ul>
      <h3>分かったこと</h3>
      <ul>
        <li>
          風を横切る向きの移動は、<strong>冬の夜</strong>に最も多く見られました。冬は狩りがいちばん行われる時期です。
          冬のデータでは、風が弱くクマが速く動いているときに横風向きの移動がはっきり出ました。
        </li>
        <li>
          風が強いとき（時速約 36 km 超）や、クマがゆっくり動いているときは、<strong>風下に向かう動き</strong>が中心でした。
          強い風は匂いをたどりにくくすると著者らは考えています。
        </li>
        <li>
          海氷ができる時期と解ける時期の移動も、風向きと関係していました。
        </li>
        <li>
          食べ物の少ない夏は、風に対するはっきりした向きが見られませんでした。
        </li>
      </ul>
      <p>
        著者らは、これを大型肉食動物が <strong>風を横切って匂いで探す動き</strong>を数量的に示した最初の記述だと位置づけています。
        なお、論文の中では先行研究の推定として「ホッキョクグマはアザラシの呼吸穴を最大 3 km 先から嗅ぎつけるかもしれない」という見積もりが引用されていますが、
        これはこの研究で測った距離ではありません。この研究自体は、嗅ぎつけられる距離を測っていません。
      </p>

      <h2 id="seven">「犬の 7 倍」について</h2>
      <p>
        「クマの嗅覚は犬の 7 倍」という言い方は、北米の国立公園の案内などで見かけます。
        ただし、これは実験で測った数字ではなく、鋭さを伝えるための言い回しです。
        今号の 2 本の論文から導かれた数字でもありません。
        クマの鼻が鋭いことは広く知られていますが、「何倍」と言い切れる測定値は、今回確認した範囲ではありません。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>論文①はクマを含まず、遺伝子の数と嗅覚の鋭さの関係も著者ら自身が「はっきりしない」としています。</li>
        <li>
          論文②は子連れのメスだけが対象で、オスや単独のメスの動きは分かりません。
          位置の記録は多くが 4 時間おきなので、匂いに気づいて短い時間だけ風上へ向かうような動きはとらえられません。
        </li>
        <li>
          論文②の風は計算値で、格子も粗く、向きに約 10° のずれがありました。
          クマの行動を直接見たわけではないので、横風向きの移動がすべて匂いの探索だと確かめられたわけではありません。
          夏の動きは海岸線に沿って動いた影響の可能性も挙げられています。
        </li>
        <li>
          対象は海氷の上でアザラシを狩るホッキョクグマです。森や里山で暮らす日本のツキノワグマやヒグマに、そのまま当てはまるとは言えません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        2 本の論文は、日本のクマがどれくらい遠くの匂いに気づくかを教えてくれるものではありません。
        それでも、クマが匂いを手がかりに食べ物を探す動物だという点は、身の回りの対策を考えるうえでの前提になります。
        人の食べ物や生ごみ、放置された果実は、クマを人里に引き寄せるきっかけになります。
      </p>
      <ul>
        <li>
          <strong>生ごみは収集日の朝に出す</strong>。前の晩から屋外に置かない。
        </li>
        <li>
          <strong>庭や畑の柿・栗などは早めに収穫し、落ちた実は片付ける</strong>。
          利用しない果樹は伐ることも選択肢です（
          <Link href="/articles/bear-agriculture">クマと農業</Link>）。
        </li>
        <li>
          <strong>ペットフードや家畜の飼料、米ぬかなどは屋内か密閉できる場所に</strong>（
          <Link href="/articles/home-protection">住宅周辺のクマ対策</Link>）。
        </li>
        <li>
          <strong>キャンプや登山では、食べ物やごみを外に出しっぱなしにせず、密閉して管理し、持ち帰る</strong>（
          <Link href="/articles/camping">キャンプのクマ対策</Link>）。
        </li>
      </ul>
      <p>
        それでもクマに出会ってしまったら、走らず、背を向けず、ゆっくり離れてください。
        突進してきたらクマスプレーを使います（5〜10 m で顔に向けて 1〜2 秒ずつ噴射）。
        接触が避けられないときは、うつ伏せになって首の後ろを守る姿勢をとります。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Extreme expansion of the olfactory receptor gene repertoire in African elephants and evolutionary dynamics of orthologous gene groups in 13 placental mammals（本号メイン①）",
            citation: (
              <>
                Niimura, Y., Matsui, A., &amp; Touhara, K. (2014).{" "}
                <em className="not-italic">Genome Research</em> 24(9): 1485–1496.
              </>
            ),
            href: "https://doi.org/10.1101/gr.169532.113",
            linkText: "DOI: 10.1101/gr.169532.113 →",
          },
          {
            title: "Windscapes and olfactory foraging in a large carnivore（本号メイン②）",
            citation: (
              <>
                Togunov, R. R., Derocher, A. E., &amp; Lunn, N. J. (2017).{" "}
                <em className="not-italic">Scientific Reports</em> 7: 46332.
              </>
            ),
            href: "https://doi.org/10.1038/srep46332",
            linkText: "DOI: 10.1038/srep46332 →",
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
