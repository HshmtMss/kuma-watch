import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bluff-charge")!;

export const metadata: Metadata = {
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
        <strong>結論</strong>: クマがこちらに突進してきた場合でも、その<strong>多くは威嚇 (ブラフチャージ)</strong>
        で、直前で止まる、または向きを変えることが多いです。耳や頭の位置・音の有無などが本気の攻撃を見分ける手がかりになります。
        威嚇に対して<strong>背を向けて走る</strong>と本気の攻撃を誘発するので、
        正面を向いたまま動かない・スプレーを構えるのが鉄則です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            突進の多くは<strong>威嚇（ブラフチャージ）</strong>で、直前で止まるか向きを変えることが多い。
          </>,
          <>
            <strong>耳や頭の位置・音の有無</strong>が本気の攻撃を見分ける手がかりになる。
          </>,
          <>
            背を向けて走ると本気の攻撃を誘発。<strong>正面のまま動かず、スプレーを構える</strong>。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "what-is", title: "ブラフチャージとは何か" },
          { id: "vs-real", title: "本気の攻撃との見分け方" },
          { id: "during", title: "突進中にやるべきこと・絶対NG" },
          { id: "after", title: "止まった後の行動" },
          { id: "species", title: "ヒグマとツキノワグマで違うか" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="what-is">ブラフチャージとは何か</h2>
      <p>
        ブラフチャージ (bluff charge) は、クマがこちらを威嚇するために行う「途中で停止する突進」です。
        子グマ・餌・縄張りを守ろうとする防衛行動の一種で、クマ自身もリスクを取らずに脅威を排除する手段。
      </p>
      <ul>
        <li>急速に近づき、直前で止まる、または向きを変える</li>
        <li>停止後に首を振る・地面を叩く・「フウッ」という鼻息を出す</li>
        <li>多くの場合、人間が冷静に後退すれば離脱する</li>
      </ul>
      <p>
        北米のグリズリーで体系化された概念ですが、日本のツキノワグマ・ヒグマでも同じ行動が観察されています。
      </p>

      <h2 id="vs-real">本気の攻撃との見分け方</h2>
      <p>
        瞬時に判断するのは難しいですが、以下のサインの組み合わせで「ブラフ寄りか本気寄りか」が読み取れます。
      </p>
      <ul>
        <li>
          <strong>ブラフ寄り</strong>:
          頭や耳が上がったまま / 後肢で地面を蹴る音が大きい /
          途中で立ち止まりかける / 口を大きく開けて威嚇音を出す
        </li>
        <li>
          <strong>本気寄り</strong>:
          耳が後ろに完全に倒れる / 頭を下げて低い姿勢を維持 /
          無音で一直線に加速 / 口を閉じている
        </li>
      </ul>
      <p>
        「無音で耳を倒し、低姿勢で一直線」は、防衛的な本気の攻撃の典型です。
        接触されたら、うつ伏せで両手で首の後ろを守り、リュックを背負ったまま動かない防御姿勢をとります。
        詳しくは<Link href="/articles/playing-dead">死んだふりは効くのか</Link>を参照。
      </p>

      <h2 id="during">突進中にやるべきこと・絶対NG</h2>
      <p>突進されている数秒で判断すべきこと:</p>
      <ul>
        <li>
          <strong>絶対 NG</strong>:
          背を向けて走る / 急に大声で叫ぶ / 物を投げつける /
          木に登ろうとする (時間が足りない)
        </li>
        <li>
          <strong>正解</strong>:
          正面を向いたまま動かない / スプレーを構え、5〜10m まで迫ったら顔に向けて 1〜2 秒ずつ噴射 /
          目を逸らさず、低い声で「落ち着け」と話しかける
        </li>
      </ul>
      <p>
        スプレーは <Link href="/articles/bear-spray">クマよけスプレーの使い方</Link> 参照。
        ブラフか本気かは途中で見分けられないことも多いので、迫ってきたらためらわず噴射してかまいません。
      </p>

      <h2 id="after">止まった後の行動</h2>
      <ol>
        <li>
          <strong>クマが離れたあと最低 10 分は動かない</strong>:
          すぐに走り出すと再追跡を誘発します。
        </li>
        <li>
          <strong>同じ方向には進まない</strong>:
          クマの逃げた方向には絶対に向かわず、来た道を戻る。
        </li>
        <li>
          <strong>自治体・他の登山者に共有</strong>:
          くまウォッチの<Link href="/submit">投稿フォーム</Link>等で位置と時刻を残す。
        </li>
        <li>
          <strong>下山後に体調確認</strong>:
          急性ストレスで脱水・心拍異常になる例があります。
        </li>
      </ol>

      <h2 id="species">ヒグマとツキノワグマで違うか</h2>
      <p>
        ヒグマもツキノワグマもブラフチャージを行いますが、頻度と威圧感が違います。
      </p>
      <ul>
        <li>
          <strong>ヒグマ</strong>: 体格が大きく、ブラフでもかなり近くまで迫られることがある。
          スプレーの射程内で確実に発射する判断が必要。
        </li>
        <li>
          <strong>ツキノワグマ</strong>: 突進というより、短い「踏み込み」程度のこともある。
          ただし<Link href="/articles/cub-handling">子グマ連れ</Link>の母グマは例外。
        </li>
      </ul>
      <p>
        種別差の詳細は<Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link>。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "突進されたら本能的に逃げてしまいそうだが、訓練できる?",
            a: (
              <>
                完全に克服はできませんが、「動かない・スプレーを抜く」を口頭で繰り返しシミュレーションすると、
                実際の場面で迷いが減ります。スプレーの抜き方を月 1 回、ホルスターから空打ちまで反復しておくと、
                突進時に体が先に動くようになります。
              </>
            ),
            aText:
              "完全に克服はできませんが、動かない・スプレーを抜くを反復シミュレーションすると、実際の場面で迷いが減ります。月 1 回スプレーの抜き方を反復してください。",
          },
          {
            q: "ブラフチャージの確率はどれくらい?",
            a: (
              <>
                はっきりした割合を示せる統計はありませんが、突進の多くは途中で止まるか向きを変えるブラフだとされています。
                日本のツキノワグマでは記録自体が乏しいのが実情です。「突進＝確実に襲われる」ではない、
                ということだけ覚えておくと冷静さを保ちやすくなります。
              </>
            ),
            aText:
              "はっきりした割合を示せる統計はありませんが、突進の多くは途中で止まるか向きを変えるブラフだとされています。突進＝確実に襲われるではないと知っておくと冷静さを保ちやすくなります。",
          },
          {
            q: "スプレーが間に合わなかったら?",
            a: (
              <>
                ブラフなら停止しますが、もし接触されたらうつ伏せで両手で首の後ろを守り、リュックを背負ったままの防御姿勢へ。
                <Link href="/articles/playing-dead">死んだふりは効くのか</Link>と
                <Link href="/articles/first-aid">応急処置と通報</Link>を参照。
              </>
            ),
            aText:
              "ブラフなら停止しますが、接触されたらうつ伏せで両手で首の後ろを守り、リュックを背負ったままの防御姿勢へ。死んだふりの記事と応急処置の記事を参照してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "クマの突進の多くは威嚇 (ブラフチャージ)。直前で止まるか向きを変えることが多い。",
          "「無音・耳を倒す・低姿勢で一直線」は防衛的な本気の攻撃のサイン。接触されたら防御姿勢。",
          "突進中は背を向けて走らない。正面を向いたままスプレーを構える。",
          "スプレーは 5〜10m まで迫ったら顔に向けて 1〜2 秒ずつ噴射。風向きに注意。",
          "クマが離れても最低 10 分は動かない。来た道を戻る。",
        ]}
        footer="ブラフチャージは「動かない訓練」が一番の対策。月 1 回はスプレーの抜き出しを反復しておきましょう。"
      />
    </ArticleShell>
  );
}
