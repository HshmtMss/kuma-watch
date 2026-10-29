import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-032")!;

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

const SOURCE_URL = "https://conservationevidencejournal.com/individual-study/8101";

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        登山口でよく見かける「クマ鈴」。鈴が実際にクマの行動を変えるのかを、野外の記録で調べた研究は多くありません。
        今号は、その数少ない例としてよく引用される Jope（1985）を取り上げ、
        <strong>論文で分かったこと</strong>と<strong>分からないこと</strong>を分けて読みます。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Implications of grizzly bear habituation to hikers"
        citation={
          <>
            Jope, K. L. (1985).{" "}
            <em className="not-italic">Wildlife Society Bulletin</em> 13(1):
            32–37.（米国の国立公園で、ハイカーとグリズリー〔ハイイログマ〕の遭遇を調べた研究）
          </>
        }
        href={SOURCE_URL}
        linkText="Conservation Evidence の要約を見る →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ハイカーが 150 m 以内でグリズリーを見た報告 <strong>97 件</strong>を集め、鈴を付けていたかどうかで比べた
          </>,
          <>
            鈴ありでは、止まっていたクマが離れていった割合が<strong>67%</strong>（鈴なし 26%）、突進は<strong>0%</strong>（鈴なし 14%）だった
          </>,
          <>
            ただし鈴ありの遭遇は<strong>20 数件と少なく</strong>、北米のグリズリーの結果。日本のツキノワグマで同じ効果があるかは確かめられていない
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
        調査は米国の国立公園内の森林で、約 154 km² の範囲を対象に、
        1980 年（6 月 3 日〜9 月 15 日）と 1981 年（6 月 14 日〜9 月 22 日）の夏に行われました。
      </p>
      <ul>
        <li>15 日おきに時間を決めて登山道の利用者を数え、そのときにクマ鈴を付けているかどうかも記録した</li>
        <li>ハイカーに聞き取りをして、クマとの遭遇の様子（クマがどう動いたか）を集めた</li>
      </ul>
      <p>
        つまり、研究者がクマの前で鈴を鳴らして比べた「実験」ではなく、
        <strong>ハイカーの報告をもとにした観察研究</strong>です。
      </p>

      <h2 id="findings">分かったこと</h2>
      <p>
        ハイカーから集まった、150 m 以内でクマを見たという報告は 97 件でした。
        そのうち、ハイカーが鈴を付けていたのは<strong>24%</strong>です。
      </p>
      <KeyPoints
        label="鈴の有無で比べた結果"
        tone="stone"
        items={[
          <>
            はじめ<strong>止まっていたクマ</strong>のうち、ハイカーから離れていった割合：
            鈴あり <strong>67%</strong> ／ 鈴なし <strong>26%</strong>
          </>,
          <>
            クマがハイカーに<strong>突進した</strong>割合：
            鈴あり <strong>0%</strong> ／ 鈴なし <strong>14%</strong>
          </>,
        ]}
      />
      <p>
        数字だけを見ると、鈴を付けていたハイカーの前では、クマが離れていきやすく、突進は起きなかったことになります。
        「人が近づいていることを、クマが早めに知る」ことと矛盾しない結果です。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>件数が少ない</strong>：97 件の 24% なので、鈴ありの遭遇は単純計算で 20 数件です。
          「止まっていたクマ」に限った比較はさらに少なくなります。
          1〜2 件の違いで割合が大きく動く大きさです。
        </li>
        <li>
          <strong>観察研究である</strong>：鈴を付ける人と付けない人では、歩く場所や人数、話し声の大きさなど、
          ほかの条件も違っていたかもしれません。差がすべて鈴のおかげとは言い切れません。
        </li>
        <li>
          <strong>報告はハイカーの記憶にもとづく</strong>：遭遇の様子は聞き取りで集めたもので、
          見落としや思い違いが入る余地があります。
        </li>
        <li>
          <strong>北米のグリズリーの結果</strong>：日本にいるツキノワグマやヒグマとは、種・地形・人の利用の仕方が違います。
          <strong>日本のクマに鈴が同じように効くかは、この研究では確かめられていません。</strong>
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究だけで「鈴を付ければ安全」とは言えません。一方で、環境省や各地の自治体は、
        山に入るときに<strong>鈴やラジオ、声などで人の存在をクマに知らせる</strong>ことを勧めています。
        Jope の結果は、その考え方と食い違うものではありません。
      </p>
      <ul>
        <li>
          鈴は「人がいることを知らせる手段の一つ」と考え、見通しの悪い場所や沢沿いなど音が届きにくい場所では、ときどき声を出すなども組み合わせる
        </li>
        <li>
          クマに出会ってしまったら、<strong>走らない・背を向けない・ゆっくり離れる</strong>
        </li>
        <li>
          突進されたらクマスプレーを使う（5〜10 m で顔に向けて 1〜2 秒ずつ噴射。環境省が示す目安は、噴射距離 7.5 m 程度以上・噴射時間 6 秒程度以上・CRC 1〜2% 程度）
        </li>
        <li>
          防衛的な攻撃で接触が避けられないときは、うつ伏せになって首の後ろを手で守る。執拗に襲ってくる・捕食的な攻撃なら反撃する
        </li>
      </ul>
      <p>
        遭遇を避ける基本は{" "}
        <Link href="/measures">クマ対策の総合ガイド</Link>
        にもまとめています。
      </p>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Implications of grizzly bear habituation to hikers（本号メイン）",
            citation: (
              <>
                Jope, K. L. (1985).{" "}
                <em className="not-italic">Wildlife Society Bulletin</em> 13(1):
                32–37.
              </>
            ),
            href: SOURCE_URL,
            linkText: "Conservation Evidence の要約を見る →",
          },
        ]}
      />
    </ArticleShell>
  );
}
