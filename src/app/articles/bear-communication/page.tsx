import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        クマは無口で単独行動と思われがちですが、実は <strong>鳴き声・匂い・姿勢・接触</strong>
        の 4 つのチャネルを使った複雑なコミュニケーションを行います。
        母グマと子グマの会話、雄同士の威嚇、雌の発情期のフェロモン、痕跡を介した非同期メッセージ —
        本記事では獣医行動学の視点でクマのコミュニケーションを解説します。
        遭遇時に「クマが何を伝えているか」を読み取れるようになることが、安全行動の第一歩です。
      </p>

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
        例えば威嚇行動は「歯を打ち鳴らす音 + 体を大きく見せる姿勢 + 強い匂いの放出」の合わせ技。
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
          上下の歯を素早く打ち鳴らす。ストレス・警戒の最高レベル。
          襲撃直前の信号と考えられる
        </li>
        <li>
          <strong>ハフ (huff) — ハッ・ハッ</strong>:
          強い息遣い。警戒中・人を発見した瞬間
        </li>
        <li>
          <strong>子グマの鳴き声</strong>:
          母を呼ぶ「ヒィー」、満足時の「クルル」、痛み時の「キャー」など多様。子犬に似た声
        </li>
        <li>
          <strong>発情期のうめき</strong>:
          雄の求愛・雌の応答。低周波で遠くまで届く
        </li>
      </ul>
      <p>
        最も重要なのは、人との遭遇時に<strong>歯打ち音</strong>を聞いたら<strong>即時撤退</strong>すること。
        これはクマが極度に緊張しており、襲撃直前の最終警告である可能性が高い信号です。
      </p>

      <h2 id="olfactory">嗅覚 — 匂いで何を伝えているか</h2>
      <p>
        クマは犬の 7 倍以上の嗅覚を持つと言われ、匂いは最も豊富な情報源です。
      </p>
      <ul>
        <li>
          <strong>個体識別</strong>: 体臭・尿の匂いで誰が通ったかを識別
        </li>
        <li>
          <strong>発情情報</strong>: 雌の尿に含まれるフェロモンで発情周期が伝わる
        </li>
        <li>
          <strong>緊張・恐怖</strong>: ストレス時に分泌されるアポクリン汗で警戒情報を発信
        </li>
        <li>
          <strong>食物情報</strong>: 数 km 先のサケ・果実の匂いを察知して移動方向を決める
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
        <li>視野を高くして遠くを見る</li>
        <li>匂いを広範に取り込む</li>
        <li>怖がっているのではなく「興味と警戒」の中間</li>
        <li>立ち上がったまま身を低くしたら撤退の可能性、頭を下げて 4 本足に戻ったら接近の可能性</li>
      </ul>
      <h3>頭を低くして横向き (Lateral display)</h3>
      <p>
        体を横向きに見せて頭を低くする姿勢は「自分を大きく見せる威嚇」。
        雄同士の対峙で多く見られ、人にも稀に見せます。
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
          スキンシップを通じて子の体温調節・社会性を育てる
        </li>
        <li>
          <strong>遊び (play fighting)</strong>: 兄弟同士でじゃれ合う、噛みつくふり、押し合い。
          狩猟・自己防衛技術の学習
        </li>
        <li>
          <strong>求愛接触</strong>: 雄が雌の体を鼻で触れる、首を舐める。発情周期確認も兼ねる
        </li>
        <li>
          <strong>威嚇接触</strong>: 噛む・引っ掻く・突き飛ばす。人への攻撃もこのカテゴリ
        </li>
      </ul>

      <h2 id="threat">威嚇行動の見分け方</h2>
      <p>
        遭遇時に見るべきは、クマが「攻撃モード」か「警戒モード」か。次のサインで判別できます。
      </p>
      <h3>攻撃モードのサイン (即時撤退または防御態勢)</h3>
      <ul>
        <li>歯を打ち鳴らす音 (jaw popping)</li>
        <li>低く唸る・短く強いハフ音</li>
        <li>耳を後ろに倒す</li>
        <li>頭を低く構えて四つ這いに</li>
        <li>毛を逆立てる (鋸状の背線が浮き出る)</li>
      </ul>
      <h3>警戒モードのサイン (互いに距離を取れば回避可能)</h3>
      <ul>
        <li>立ち上がって観察</li>
        <li>耳を立てて凝視</li>
        <li>息を強く吐く (huff) だけ</li>
        <li>同じ場所で前後に動く (ストレス行動)</li>
      </ul>

      <h2 id="human">人間との「会話」が可能か</h2>
      <p>
        クマと人が直接コミュニケーションを取ることはできませんが、お互いに信号は読み取れます。
      </p>
      <ul>
        <li>
          人が大きな声・低い声で話しかける → クマは「異種だが脅威ではない」と判断する場合あり
        </li>
        <li>
          静かに後退 + 落ち着いた声 → 緊張を煽らない最善の対応
        </li>
        <li>
          叫ぶ・走る → 「弱い獲物」または「攻撃者」と認識される可能性
        </li>
        <li>
          目をじっと見る → クマ社会では威嚇のサインなので刺激になる
        </li>
      </ul>
      <p>
        最も実用的なのは、<strong>クマの言語に「合わせる」のではなく「不要な信号を出さない」</strong>こと。
        静かに、ゆっくり、低姿勢で、視線は外さず — これがクマ社会で「弱い敵意」を示す中立シグナルです。
      </p>

      <ArticleFaq
        items={[
          {
            q: "ラジオを鳴らしていてもクマは寄ってくることがある？",
            a: "あります。「人の音 = 食物がある」と学習した個体には逆効果。ラジオは事前警告として有効だが、餌付け学習を起こさない管理 (食料の密閉) が前提です。",
            aText: "あります。「人の音 = 食物がある」と学習した個体には逆効果。ラジオは事前警告として有効だが、餌付け学習を起こさない管理 (食料の密閉) が前提です。",
          },
          {
            q: "クマに名前を呼ばれて反応する個体は？",
            a: "動物園・救護施設で個体識別を伴う飼育を受けたクマは名前に反応します。野生個体は反応しません。",
            aText: "動物園・救護施設で個体識別を伴う飼育を受けたクマは名前に反応します。野生個体は反応しません。",
          },
          {
            q: "クマ同士の喧嘩は深刻？",
            a: "雄同士の発情期の戦いは流血を伴うこともあり、稀に致命傷となります。普段は互いに避け合うのが基本。",
            aText: "雄同士の発情期の戦いは流血を伴うこともあり、稀に致命傷となります。普段は互いに避け合うのが基本。",
          },
          {
            q: "歯打ち音を録音してクマよけ装置にできない？",
            a: "理論的には可能ですが、慣れによる効果減衰・誤った文脈での威嚇誘発などリスクがあり、実用化は研究中です。",
            aText: "理論的には可能ですが、慣れによる効果減衰・誤った文脈での威嚇誘発などリスクがあり、実用化は研究中です。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bluff-charge">ブラフチャージへの対応</Link> /{" "}
        <Link href="/articles/bear-territory">クマの縄張りと行動圏</Link> /{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
      </p>
    </ArticleShell>
  );
}
