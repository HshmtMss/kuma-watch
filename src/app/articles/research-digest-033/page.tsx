import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import {
  PaperCard,
  KeyPoints,
  References,
} from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-033")!;

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
        人を見ても逃げないクマは、人とのトラブルにつながりやすいと言われます。
        では、人に慣れた母グマから生まれた子どもは、その後どうなるのでしょうか。
        知床半島のヒグマを 20 年近く遺伝子で追跡した研究が、この問いに答えようとしました。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title={
          <>
            Maternal human habituation enhances sons&rsquo; risk of human-caused
            mortality in a large carnivore, brown bears
          </>
        }
        citation={
          <>
            Shimozuru, M., Shirane, Y., Yamanaka, M., et al. (2020).{" "}
            <em className="not-italic">Scientific Reports</em> 10: 16498.
            （北海道・知床半島のヒグマ）
          </>
        }
        href="https://doi.org/10.1038/s41598-020-73057-5"
        linkText="DOI: 10.1038/s41598-020-73057-5 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            人をまったく避けない母グマが多いルシャ地区では、
            <strong>息子の 71%（31 頭中 22 頭と推定）が 1〜4 歳のうちに人の手で死んでいた</strong>
          </>,
          <>
            ルシャのクマは人に「慣れて」いるが、人の食べ物を覚えた（餌付いた）わけではない。
            それでも息子の死亡は多かった
          </>,
          <>
            子が母から人慣れを学ぶ可能性を著者は示したが、
            <strong>子の人慣れそのものは測っておらず、確かめられてはいない</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "「人慣れ」と「餌付き」は別のもの" },
          { id: "study", title: "研究の概要" },
          { id: "finding", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">「人慣れ」と「餌付き」は別のもの</h2>
      <p>
        この論文を読むうえで大切なのは、2 つの言葉の違いです。
        <strong>人慣れ（human habituation）</strong>は、人に出会っても逃げたり警戒したりしなくなること。
        <strong>餌付き（food conditioning）</strong>は、人の食べ物や農作物の味を覚え、
        人のそばに食べ物があると学んでしまうことです。
        この研究の主役は、前者の「人慣れ」した母グマです。
      </p>

      <h2 id="study">研究の概要</h2>
      <p>
        舞台は北海道東部の知床半島、主に知床国立公園の西側です。
        研究チーム（北海道大学など）は 1998〜2018 年に集めた毛などの試料から 896 頭のヒグマの遺伝子型を調べ、
        母子関係を割り出しました。
        母グマ 62 頭について、1997〜2015 年の記録をもとに、その子どもが 1〜4 歳のうちに
        人の手で死んだ（有害駆除や狩猟）かどうかを調べています。
      </p>
      <p>母グマは住んでいる場所で 3 つのグループに分けられました。</p>
      <ul className="my-4 list-disc space-y-2 pl-5">
        <li>
          <strong>グループ 1</strong>：ウトロの町に近い公園の手前側（23 頭）。
          クマはパトロールする管理者に追い払われる。周辺は住宅と畑が近い
        </li>
        <li>
          <strong>グループ 2</strong>：その奥、ウトロから 12〜22 km ほど離れた地域（26 頭）
        </li>
        <li>
          <strong>グループ 3</strong>：半島奥のルシャ地区（13 頭）。許可なく人が入れない保護地区で、
          この地区の漁業者が数十年にわたりクマを追い払ってこなかったため、
          13 頭すべてが「20 m 以内に人が近づいても嫌がらない」最も強い人慣れの段階と判定された
        </li>
      </ul>
      <p>
        人慣れの程度は、経験の長い管理者や調査者が、パトロールや調査の記録から
        クマの反応を 4 段階で判定しています。
        なお、子どもの数は直接数えたものではなく、母グマの生存年数に繁殖率と子グマの生存率をかけて推定した値です。
      </p>

      <h2 id="finding">分かったこと</h2>
      <p>1〜4 歳のうちに人の手で死んだ割合（推定）は、次のとおりでした。</p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">グループ</th>
              <th className="text-left">息子</th>
              <th className="text-left">娘</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1（ウトロ近く）</td>
              <td>30/56（54%）</td>
              <td>21/56（38%）</td>
            </tr>
            <tr>
              <td>2（中間）</td>
              <td>17/45（38%）</td>
              <td>3/45（7%）</td>
            </tr>
            <tr>
              <td>3（ルシャ）</td>
              <td>22/31（71%）</td>
              <td>0/31（0%）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="my-4 list-disc space-y-2 pl-5">
        <li>
          全体で見ると、<strong>息子（52%）は娘（18%）よりずっと死にやすかった</strong>。
          著者は、オスが独立後に母の行動圏から遠くへ移る（平均 18.3 km）ことが関係すると考えています。
        </li>
        <li>
          人慣れした母を持つルシャ（グループ 3）の息子の死亡率 71% は、
          グループ 2 の 38% より高く、複数の比較を補正（Holm 法）したあとも差は統計的に意味がありました（P = 0.039）。
          著者が「母の人慣れが息子の危険を高める」とする主な根拠はこの比較です。
        </li>
        <li>
          一方、<strong>グループ 1 とグループ 3 の息子の差は統計的に意味がありませんでした</strong>。
          娘では、母の人慣れによる差は見られませんでした。
        </li>
        <li>
          グループ 1 では、子の死亡の主な理由は餌付きで、息子は他より若い年齢（平均 1.9 歳）で死んでいました。
          著者は、町や畑に近いため餌付きやすいことが影響していると見ています。
        </li>
      </ul>
      <p>
        なぜルシャの息子が死にやすいのかについて、著者は、
        子グマが母と過ごす間に人への警戒の薄さを学ぶ（社会的学習）可能性を挙げています。
        警戒心の薄いまま遠くへ移り、人の住む場所でトラブルになるという筋書きです。
        ただし、これは仮説として示されたものです。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul className="my-4 list-disc space-y-2 pl-5">
        <li>
          <strong>子ども自身が人に慣れていたかは調べられていません</strong>。
          著者も「人慣れした母の子が人慣れするかどうかは不明」と書いています。
        </li>
        <li>
          人慣れが学習で伝わるのか、遺伝などほかの要因が関わるのかは区別されていません。
        </li>
        <li>
          子の数は推定値で、母グマの数も限られ、人慣れした母はルシャに偏っています。
          そのため「人慣れの効果」と「ルシャという場所の効果」を完全には切り分けられません。
        </li>
        <li>
          知床は保護地区、観光船によるクマ見物、漁業が重なる特殊な場所です。
          ツキノワグマや本州の里山にそのまま当てはまるとは限りません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究から言えるのは、<strong>クマに人の食べ物を与えないこと（餌付けさせないこと）だけでなく、
        クマを人に慣れさせないことも大切</strong>らしい、ということです。
        著者は管理の面では、住宅地に入れない電気柵などの対策や、
        公園の外で餌付きを防ぐことを挙げています。
      </p>
      <ul className="my-4 list-disc space-y-2 pl-5">
        <li>生ゴミ、収穫しない果実、農作物など、クマを引き寄せるものを片付ける</li>
        <li>
          写真を撮るためにクマに近づかない。車から降りたり、そばに居続けたりしない
        </li>
        <li>
          クマに出会ったら、走らず、背を向けず、ゆっくり離れる。
          突進されたらクマスプレーを使い、防御的な攻撃で接触が避けられないときは
          うつ伏せになって首の後ろを守る
        </li>
      </ul>
      <p>
        誘引物の管理や出会ったときの行動は{" "}
        <Link href="/measures">クマ対策の総合ガイド</Link>にまとめています。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: (
              <>
                Maternal human habituation enhances sons&rsquo; risk of
                human-caused mortality in a large carnivore, brown bears（本号メイン）
              </>
            ),
            citation: (
              <>
                Shimozuru, M., Shirane, Y., Yamanaka, M., et al. (2020).{" "}
                <em className="not-italic">Scientific Reports</em> 10: 16498.
              </>
            ),
            href: "https://doi.org/10.1038/s41598-020-73057-5",
            linkText: "DOI: 10.1038/s41598-020-73057-5 →",
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
