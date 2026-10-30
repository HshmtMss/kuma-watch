import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        <strong>結論</strong>: 4〜6 月のクマは冬眠明けで食べ物が乏しい時期にあり、生まれたばかりの子を連れた母グマは<strong>特に警戒心が強く</strong>なります。
        雪解け直後の山菜採り・新緑登山では、薮を見通せず母子グマの存在に気づかないまま接近する事故が多発します。
        単独行を避け、音を出して歩き、子グマを見たらすぐにその場を離れるのが鉄則です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            <strong>4〜6月は冬眠明け</strong>。子連れの母グマは特に警戒心が強い。
          </>,
          <>
            雪解け直後の<strong>山菜採り・新緑登山</strong>は薮で見通せず、母子グマに気づかず接近しやすい。
          </>,
          <>
            <strong>単独行を避け、音を出して歩く</strong>。子グマを見たら即座に離脱する。
          </>,
        ]}
      />

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
        ツキノワグマ・ヒグマとも、3〜5 月ごろに冬眠から覚めて活動を再開します。
        冬眠中はほぼ何も食べずに過ごすため、冬眠明けのクマは体重を大きく減らしています。
        春先の山はまだ食べ物が少なく、クマは芽吹いたばかりの草や新芽を探して動きます。
      </p>
      <p>
        雪解け直後の山では、まず日当たりの良い斜面の草本やタケノコ、新芽、フキノトウなどが芽吹き、これらがクマの主食になります。
        山菜が出る場所と人間が山菜採りに行く場所が重なるため、春は遭遇に注意が必要な季節です。
      </p>

      <h2 id="mother-cub">子連れの母グマが最も危険</h2>
      <p>
        春は出産から数ヶ月のメスが子グマを連れて活動を始める時期でもあります。
        子グマを連れた母グマ (子連れグマ) は子を守ろうとする防衛本能が強く、近づいた人を防衛的に攻撃することがあります。
      </p>
      <p>
        山中で子グマだけを見かけた場合も、近くに母グマがいる可能性が高いと考えてください。
        子グマに近づいたり、母グマと子グマの間に入ったりするのは極めて危険です。
        詳細は <Link href="/articles/cub-handling">子グマを見たらどうする</Link> を参照してください。
      </p>

      <h2 id="sansai">山菜採りでの遭遇事故</h2>
      <p>
        春の遭遇事故が集中するシチュエーションが、山菜採りです。理由は明確で:
      </p>
      <ul>
        <li>クマも山菜 (タケノコ・ウド等) を食べるので場所が重なる</li>
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
          沢音で足音や鈴の音が消え、互いに気づきにくい
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
        <li>子グマを見たら、近くに母グマがいる可能性が高い。子グマに近づかず、すぐに離れる</li>
        <li>母グマが向かってきたら、クマよけスプレーを顔に向けて噴射 → 接触が避けられなければ、うつ伏せになり両手で首の後ろを守る (リュックは背負ったまま)</li>
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
                誤解です。冬眠明けで体重は落ちていますが、出会い頭の遭遇では防衛的に攻撃してくる個体もいます。「冬眠明けで弱っている」と油断するのが最大のリスクです。
              </>
            ),
            aText:
              "誤解です。冬眠明けで体重は落ちていますが、出会い頭の遭遇では防衛的に攻撃してくる個体もいます。冬眠明けで弱っているから安全という認識は誤りです。",
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
                子グマだけが見えた瞬間に、子グマに近づかずその場を離れてください。近くに母グマがいる可能性が高く、母グマと子グマの間に入ってしまうと、母グマが子を守るために攻撃してくることがあります。
              </>
            ),
            aText:
              "子グマだけが見えた瞬間に、子グマに近づかずその場を離れてください。近くに母グマがいる可能性が高く、母グマと子グマの間に入ってしまうと、母グマが子を守るために攻撃してくることがあります。",
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

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
