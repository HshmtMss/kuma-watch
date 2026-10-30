import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-communication")!;

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
        クマは無口で単独行動と思われがちですが、<strong>鳴き声・匂い・姿勢・接触</strong>
        といったさまざまな手段で情報をやりとりしています。
        母グマと子グマのやりとり、雄同士の威嚇、匂いを残す行動 —
        本記事では獣医行動学の視点でクマのコミュニケーションを解説します。
        遭遇時に「クマが何を伝えているか」を読み取れるようになることが、安全行動の第一歩です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマは<strong>鳴き声・匂い・姿勢・接触</strong>などで情報をやりとりする。
          </>,
          <>
            <strong>立ち上がりは威嚇でなく「確認」</strong>など、行動には意味がある。
          </>,
          <>
            <strong>「何を伝えているか」を読める</strong>ことが安全行動の第一歩。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "channels", title: "4 つのコミュニケーション・チャネル" },
          { id: "vocal", title: "鳴き声 — 文脈で意味が変わる" },
          { id: "olfactory", title: "嗅覚 — 匂いで何を伝えているか" },
          { id: "posture", title: "姿勢・身振り — 立ち上がる意味" },
          { id: "tactile", title: "接触 — 母子・遊び・威嚇" },
          { id: "threat", title: "威嚇行動の見分け方" },
          { id: "human", title: "人間との「会話」が可能か" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="channels">4 つのコミュニケーション・チャネル</h2>
      <p>
        クマのコミュニケーションは大きく次の 4 つに分類されます。
      </p>
      <ul>
        <li><strong>音声 (vocalization)</strong>: 鳴き声・歯打ち・息遣い</li>
        <li><strong>嗅覚 (olfactory)</strong>: フェロモン・尿・糞・体臭</li>
        <li><strong>視覚 (visual)</strong>: 姿勢・身振り・立ち上がり</li>
        <li><strong>触覚 (tactile)</strong>: 接触・噛みつき・抱きしめ</li>
      </ul>
      <p>
        多くのコミュニケーションは複数のチャネルを組み合わせて行われます。
        例えば緊張したクマは、息を強く吐く音や歯を打ち鳴らす音と、姿勢の変化を同時に見せることがあります。
      </p>

      <h2 id="vocal">鳴き声 — 文脈で意味が変わる</h2>
      <p>
        クマの鳴き声はおおむね次のように分類されます。
      </p>
      <ul>
        <li>
          <strong>うなり (growl) / ガオー</strong>:
          威嚇・警戒。低くずっしり響く声。雄同士の対峙、人との遭遇直後
        </li>
        <li>
          <strong>歯打ち (jaw popping / tooth chatter)</strong>:
          口を開け閉めして歯や顎を鳴らす。強い緊張・ストレスのサイン
        </li>
        <li>
          <strong>ハフ (huff) — ハッ・ハッ</strong>:
          強い息遣い。警戒中・人を発見した瞬間
        </li>
        <li>
          <strong>子グマの鳴き声</strong>:
          授乳中にのどを鳴らすような声 (ハミング) を出したり、不安なときに大きな声で鳴いたりする
        </li>
      </ul>
      <p>
        最も重要なのは、人との遭遇時に<strong>歯打ち音や強い息遣い</strong>を聞いたら、それ以上近づかないこと。
        クマが強く緊張しているサインです。<strong>走らず、背を向けず、クマを見ながらゆっくり離れて</strong>ください。
      </p>

      <h2 id="olfactory">嗅覚 — 匂いで何を伝えているか</h2>
      <p>
        クマの嗅覚は非常に優れています (「犬の 7 倍」とも言われますが、測定された値ではありません)。匂いは重要な情報源です。
      </p>
      <ul>
        <li>
          <strong>匂いを残す</strong>: 木に背中をこすりつけるなどして匂いを残し、他の個体がそれを嗅ぐ
        </li>
        <li>
          <strong>繁殖の情報</strong>: 匂いを通じて繁殖期の情報が伝わっていると考えられている
        </li>
        <li>
          <strong>食物情報</strong>: 遠くの食べ物の匂いもかぎつけると考えられている
        </li>
      </ul>
      <p>
        登山者・キャンパーが「臭わない」よう、食料・調味料・汗のついた衣類の管理が重要なのは、
        クマの嗅覚が私たちの想像を超える鋭敏さだからです。
        詳しくは <Link href="/articles/bear-canister">食料の匂い管理</Link> も参照。
      </p>

      <h2 id="posture">姿勢・身振り — 立ち上がる意味</h2>
      <p>
        クマの姿勢には複数のメッセージが込められています。
      </p>
      <h3>立ち上がり (Standing on hind legs)</h3>
      <p>
        映画的にはクマが立ち上がると「襲ってくる」と思われがちですが、実は<strong>威嚇ではなく観察行動</strong>です。
      </p>
      <ul>
        <li>高い位置から周りを見る</li>
        <li>匂いをよく嗅ぐ</li>
        <li>何がいるのかを確かめようとしていることが多い</li>
      </ul>
      <h3>頭を低くして横向き (Lateral display)</h3>
      <p>
        体を横向きに見せて頭を低くする姿勢は「自分を大きく見せる威嚇」。
        雄同士の対峙などで見られます。
      </p>
      <h3>四つ這いで突進 (Bluff charge)</h3>
      <p>
        「最大の威嚇」。突進してきても直前で止まることが多い (= ブラフ)。
        詳しくは <Link href="/articles/bluff-charge">ブラフチャージへの対応</Link> を参照。
      </p>

      <h2 id="tactile">接触 — 母子・遊び・威嚇</h2>
      <p>
        クマの接触行動は次のように使い分けられています。
      </p>
      <ul>
        <li>
          <strong>母子の接触</strong>: 子グマを舐める・前足で軽く触れる・引き寄せる。
          子グマは独立するまで母グマと一緒に行動する
        </li>
        <li>
          <strong>遊び (play fighting)</strong>: 兄弟同士でじゃれ合う、噛みつくふり、押し合い。
          体の使い方を身につける機会になっていると考えられる
        </li>
        <li>
          <strong>繁殖期</strong>: 雄が雌に寄り添い、匂いを嗅いだり体に触れたりする
        </li>
        <li>
          <strong>威嚇接触</strong>: 噛む・引っ掻く・突き飛ばす。人への攻撃もこのカテゴリ
        </li>
      </ul>

      <h2 id="threat">威嚇行動の見分け方</h2>
      <p>
        遭遇時に見るべきは、クマが強く緊張・興奮しているか、様子を見ているだけか。目安として次のようなサインがあります。
        ただし、サインを出さずに突然向かってくることもあります。
      </p>
      <h3>強く緊張・興奮しているサイン (走らず、クマを見ながらゆっくり離れる。突進されたらクマスプレー)</h3>
      <ul>
        <li>歯を打ち鳴らす音 (jaw popping)</li>
        <li>低く唸る・短く強いハフ音</li>
        <li>前足で地面をたたく</li>
        <li>耳を後ろに倒し、頭を低く構える (この姿勢で一直線に突進してくるのは、防衛のための本気の攻撃のサイン)</li>
      </ul>
      <h3>様子を見ているサイン (静かに距離を取る)</h3>
      <ul>
        <li>立ち上がって観察</li>
        <li>耳を立てて凝視</li>

      </ul>

      <h2 id="human">人間との「会話」が可能か</h2>
      <p>
        クマと人が直接コミュニケーションを取ることはできませんが、お互いに信号は読み取れます。
      </p>
      <ul>
        <li>
          落ち着いた低い声で話しかける → 人間であることをクマに知らせる (米国立公園局 NPS の指針)
        </li>
        <li>
          クマを見ながらゆっくり後退する → 緊張をあおりにくい
        </li>
        <li>
          叫ぶ・走る → 走ると追いかけられるおそれがある
        </li>
      </ul>
      <p>
        最も実用的なのは、<strong>クマの言語に「合わせる」のではなく「不要な刺激を与えない」</strong>こと。
        走らない・背を向けない・クマを見ながらゆっくり離れる — これが基本です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "ラジオを鳴らしていてもクマは寄ってくることがある？",
            a: "あります。人に慣れた個体や、人の食べ物を覚えた個体は、人の音がしても逃げないことがあります。音は出会い頭の遭遇を減らす補助で、食料を密閉するなど、人の食べ物を覚えさせない管理が前提です。",
            aText: "あります。人に慣れた個体や、人の食べ物を覚えた個体は、人の音がしても逃げないことがあります。音は出会い頭の遭遇を減らす補助で、食料を密閉するなど、人の食べ物を覚えさせない管理が前提です。",
          },
          {
            q: "クマに名前を呼ばれて反応する個体は？",
            a: "動物園などで飼育されているクマが、飼育員の呼びかけに反応することはあります。野生のクマに呼びかけても、そうした反応は期待できません。",
            aText: "動物園などで飼育されているクマが、飼育員の呼びかけに反応することはあります。野生のクマに呼びかけても、そうした反応は期待できません。",
          },
          {
            q: "クマ同士の喧嘩は深刻？",
            a: "繁殖期の雄同士の争いでは、けがをすることもあります。普段は互いに避け合うのが基本です。",
            aText: "繁殖期の雄同士の争いでは、けがをすることもあります。普段は互いに避け合うのが基本です。",
          },
          {
            q: "歯打ち音を録音してクマよけ装置にできない？",
            a: "効果を確かめた研究は見当たらず、おすすめできません。クマを刺激するおそれもあります。音による対策は、人の存在を知らせて出会い頭の遭遇を避ける目的で使ってください。",
            aText: "効果を確かめた研究は見当たらず、おすすめできません。クマを刺激するおそれもあります。音による対策は、人の存在を知らせて出会い頭の遭遇を避ける目的で使ってください。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bluff-charge">ブラフチャージへの対応</Link> /{" "}
        <Link href="/articles/bear-territory">クマの縄張りと行動圏</Link> /{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
      </p>
    </ArticleShell>
  );
}
