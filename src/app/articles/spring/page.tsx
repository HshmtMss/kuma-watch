import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("spring")!;

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
        <strong>結論</strong>: 4〜6 月のクマは冬眠明けで飢えており、子連れの母グマは年間で<strong>最も攻撃的</strong>です。
        雪解け直後の山菜採り・新緑登山では、薮を見通せず母子グマの存在に気づかないまま接近する事故が多発します。
        単独行を避け、音を出して歩き、子グマを見たら即離脱が鉄則です。
      </p>

      <ArticleToc
        items={[
          { id: "why-spring", title: "なぜ春が危険なのか" },
          { id: "mother-cub", title: "子連れの母グマが最も危険" },
          { id: "sansai", title: "山菜採りでの遭遇事故" },
          { id: "trail", title: "春の登山で気をつけること" },
          { id: "gear", title: "春の必須装備" },
          { id: "if-encounter", title: "遭遇してしまったら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-spring">なぜ春が危険なのか</h2>
      <p>
        ツキノワグマ・ヒグマとも、4〜5 月に冬眠から覚めて活動を再開します。
        この時期のクマは数ヶ月間ほぼ何も食べておらず、体重が冬眠前の 70〜80% まで落ちている個体も珍しくありません。
        そのため餌を求めて積極的に動き回り、行動範囲は他の季節より広がります。
      </p>
      <p>
        雪解け直後の山では、まず日当たりの良い斜面の草本やタケノコ、新芽、フキノトウなどが芽吹き、これらがクマの主食になります。
        山菜が出る場所と人間が山菜採りに行く場所が完全に重なるため、春は遭遇率の高い季節です。
      </p>

      <h2 id="mother-cub">子連れの母グマが最も危険</h2>
      <p>
        春は出産から数ヶ月のメスが子グマを連れて活動を始める時期でもあります。
        子グマを連れた母グマ (子連れグマ) は防衛本能が極端に強く、子に近づく動物・人間を即攻撃する個体が多くなります。
        過去のクマ襲撃事故の半数以上は、この「子連れの母グマ」によるものです。
      </p>
      <p>
        山中で子グマを単独で見かけた場合、必ず近くに母グマがいます。
        子グマだけが見える状況は「母グマがすでに人間を視認していて警戒している」可能性が高く、極めて危険です。
        詳細は <Link href="/articles/cub-handling">子グマを見たらどうする</Link> を参照してください。
      </p>

      <h2 id="sansai">山菜採りでの遭遇事故</h2>
      <p>
        春の遭遇事故が集中するシチュエーションが、山菜採りです。理由は明確で:
      </p>
      <ul>
        <li>クマも山菜 (タケノコ・ウド・ワラビ等) を食べる ので場所が完全に重なる</li>
        <li>採集中は下を向き、視界 5m 未満で薮に入っていく</li>
        <li>沢沿いや藪は沢音・風で足音や鈴の音が消えやすい</li>
        <li>夢中になると数時間人がいない場所に居続けてしまう</li>
        <li>単独行が多い (収穫場所を秘密にしたいため)</li>
      </ul>
      <p>
        対策は、複数人で行動・常時声を出す・ホイッスルを定期的に鳴らす・収穫より安全を優先する、の 4 点に尽きます。
      </p>

      <h2 id="trail">春の登山で気をつけること</h2>
      <p>
        新緑の登山シーズン (5〜6 月) も春のクマ活動期と重なります。注意点:
      </p>
      <ul>
        <li>
          <strong>残雪の上の足跡</strong>:
          雪解け前の山では、クマの足跡が雪上にはっきり残ります。新しい足跡を見たら無理せず引き返す
        </li>
        <li>
          <strong>食痕 (シカの死骸など)</strong>:
          クマがシカ (餌) を埋めて隠している場合、戻ってくる可能性があるため近づかない
        </li>
        <li>
          <strong>沢筋や水場</strong>:
          冬眠明けのクマは水を求めて沢筋に降りやすい
        </li>
        <li>
          <strong>新緑が濃い場所</strong>:
          視界が悪く、互いの存在に気づきにくい
        </li>
      </ul>

      <h2 id="gear">春の必須装備</h2>
      <ul>
        <li>クマ鈴 + ホイッスル (詳細は <Link href="/articles/bear-bell">クマ鈴の効果</Link>)</li>
        <li>クマよけスプレー (<Link href="/articles/bear-spray">使い方と選び方</Link>)</li>
        <li>長袖・長ズボン・革手袋 (襲われた際のダメージを多少軽減)</li>
        <li>携帯電話・予備バッテリー (通報・応急時の連絡用)</li>
        <li>応急処置キット (<Link href="/articles/first-aid">襲われた後の応急処置</Link>)</li>
      </ul>

      <h2 id="if-encounter">遭遇してしまったら</h2>
      <p>
        春の遭遇は子連れの可能性が高いため、特に慎重に対処します。
      </p>
      <ul>
        <li>正面を向いたままゆっくり後退する。背中を見せて走るのは絶対 NG</li>
        <li>子グマを見たら、母グマがすでに見ている可能性が高い。即時離脱</li>
        <li>母グマが向かってきたら、スプレー噴射 → スプレーが無ければ伏せて頭を守る</li>
      </ul>
      <p>
        距離別の詳細な対処は <Link href="/articles/encounter">クマに遭遇したら</Link> で解説しています。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "春のクマはおとなしいと聞いたが本当?",
            a: (
              <>
                誤解です。冬眠明けで体力は落ちていますが、飢えていて餌探しに必死な分、警戒心が強く出会い頭の遭遇では即攻撃に転じる個体もいます。「冬眠明けで弱っている」と油断するのが最大のリスクです。
              </>
            ),
            aText:
              "誤解です。冬眠明けで体力は落ちていますが、飢えていて餌探しに必死な分、警戒心が強く出会い頭の遭遇では即攻撃に転じる個体もいます。冬眠明けで弱っているという認識は誤りです。",
          },
          {
            q: "山菜採りでクマと遭遇しないには?",
            a: (
              <>
                複数人で行動し、常時会話・ホイッスル・ラジオなどで音を出し続けてください。同じ場所に長居せず、定期的に位置を変える。藪の中でしゃがみ込んでいる時間を最小化することがポイントです。
              </>
            ),
            aText:
              "複数人で行動し、常時会話・ホイッスル・ラジオなどで音を出し続けてください。同じ場所に長居せず、定期的に位置を変える。藪の中でしゃがみ込んでいる時間を最小化することがポイントです。",
          },
          {
            q: "母グマと子グマに出会ったらどうする?",
            a: (
              <>
                子グマだけが見えた瞬間にその場を離れてください。母グマと自分の間に子グマが入ると、母グマは子を守るために即攻撃に転じます。視認した瞬間が分岐点です。
              </>
            ),
            aText:
              "子グマだけが見えた瞬間にその場を離れてください。母グマと自分の間に子グマが入ると、母グマは子を守るために即攻撃に転じます。視認した瞬間が分岐点です。",
          },
          {
            q: "5月の連休に登山予定だが大丈夫?",
            a: (
              <>
                出発前に <Link href="/">トップページの警戒レベルマップ</Link> または目的地の市町村ページで直近の出没情報を確認してください。最近の目撃が多いエリアは時期をずらすか、人気のあるルートを選ぶと遭遇リスクが下がります。
              </>
            ),
            aText:
              "出発前にトップページの警戒レベルマップ または目的地の市町村ページで直近の出没情報を確認してください。最近の目撃が多いエリアは時期をずらすか、人気のあるルートを選ぶと遭遇リスクが下がります。",
          },
        ]}
      />
    </ArticleShell>
  );
}
