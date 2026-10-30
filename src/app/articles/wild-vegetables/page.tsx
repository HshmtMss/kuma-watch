import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("wild-vegetables")!;

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
        <strong>結論</strong>: 春〜初夏のクマ人身被害は主に山の中で起き、山の中の被害で最も多いのが
        <strong>「山菜・キノコ採り」</strong>の最中です (環境省の分析)。冬眠明けで空腹の個体・子連れの母グマと、
        屈み込んで地面に集中する人間の組み合わせは、年間で最も危険な状況の 1 つです。
        4〜6 月は装備・場所・時間帯のすべてを「クマ前提」で組んでください。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            春〜初夏の被害は主に山の中。<strong>山の中での被害で最も多いのが「山菜・キノコ採り」</strong> (環境省)。
          </>,
          <>
            冬眠明けで空腹の個体・子連れ母グマと、<strong>屈んで地面に集中する人間</strong>は危険な組合せ。
          </>,
          <>
            4〜6月は<strong>装備・場所・時間帯をすべて「クマ前提」</strong>で組む。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "spring-risk", title: "春のクマがなぜ危険か" },
          { id: "stats", title: "山菜採り中の被害が多い理由" },
          { id: "where", title: "危険な場所と時間帯" },
          { id: "gear", title: "山菜採り用の装備チェックリスト" },
          { id: "behavior", title: "現場での立ち回り" },
          { id: "encounter", title: "母グマと遭遇したら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="spring-risk">春のクマがなぜ危険か</h2>
      <p>
        春 (4〜6 月) は冬眠から出たばかりのクマが活動を再開する時期で、
        年間で最も警戒すべきタイミングの一つです。
      </p>
      <ul>
        <li>
          <strong>空腹</strong>: 冬眠中は何も食べずに過ごし体重を大きく減らしているため、
          食べ物を求めて動き回る時期です。
        </li>
        <li>
          <strong>子連れの母グマが多い</strong>: 1〜2 月に冬眠中の巣穴で出産した母グマは、
          雪解けとともに子グマを連れて行動を始めます。子を守ろうとする母グマは、驚くと防衛的な攻撃をしやすくなります。
        </li>
        <li>
          <strong>食料が少ない</strong>: 春先は若芽・タケノコ・ふきのとうなど、
          人間が山菜として狙うもの<em>そのもの</em>がクマの食べ物でもあります。
        </li>
      </ul>
      <p>
        詳しい背景は<Link href="/articles/spring">春のクマ対策</Link>と
        <Link href="/articles/diet">クマの食性</Link>を参照してください。
      </p>

      <h2 id="stats">山菜採り中の被害が多い理由</h2>
      <p>
        環境省が令和 5〜7 年度の全国の人身被害を分析した資料では、被害の多い年も少ない年も、
        春〜初夏の被害は主に森林・河川敷など「クマの生息域」で起きていました。
        生息域での被害 (172 件) を被害者の行動で分けると、「山菜・キノコ採り等」が最も多くなっています。
        東北では、ネマガリダケ (チシマザサのタケノコ) 採りの時期に被害が相次ぐ年もあります。
      </p>
      <ul>
        <li>
          <strong>食べ物の競合</strong>: クマも同じタケノコ・若芽を食べているため、
          採り場でそのまま鉢合わせる確率が高い。
        </li>
        <li>
          <strong>姿勢が無防備</strong>: しゃがみ込み・前傾で視野が狭く、
          クマの接近に気づくのが遅れる。
        </li>
        <li>
          <strong>夢中になる</strong>: タケノコや天然物が出ると周囲確認の頻度が落ちる。
        </li>
        <li>
          <strong>沢沿いに集中</strong>: 山菜の好適地と、母グマが子を連れて移動する経路が重なる。
        </li>
      </ul>

      <h2 id="where">危険な場所と時間帯</h2>
      <p>場所と時間でリスクは大きく変わります。</p>
      <ul>
        <li>
          <strong>沢筋・谷筋</strong>: 水場と日陰があり山菜・クマ双方の好適地。
        </li>
        <li>
          <strong>放棄された林道・廃道</strong>: 人気が少なくクマの常用ルート化していることがある。
        </li>
        <li>
          <strong>残雪の縁</strong>: 雪解け直後の地面で若芽・冬眠明けのクマがほぼ同時に動く。
        </li>
        <li>
          <strong>果樹園・里山の縁</strong>: 山と人里の境界 (エコトーン) はクマの通り道。
        </li>
        <li>
          <strong>明け方・夕方</strong>: クマが特に活発な時間帯。環境省も山菜・キノコ採りでは「明け方・日の入り前に行動しない」ことを勧めている。日中も遭遇はあり得る。
        </li>
      </ul>

      <h2 id="gear">山菜採り用の装備チェックリスト</h2>
      <ul>
        <li>
          <strong>クマよけスプレー (腰のホルスター)</strong>:
          屈み姿勢から 1 秒で抜けることが大事。詳しくは
          <Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>。
        </li>
        <li>
          <strong>鈴 + ホイッスル</strong>: 鈴は立ち止まっている間は鳴らないので、
          定期的にホイッスルを吹く・声を出すなど能動的な「人間サイン」を加える。
        </li>
        <li>
          <strong>明るい色の衣類</strong>: 視認性が遠くから取れるもの。
        </li>
        <li>
          <strong>救急セット (止血パッド・三角巾)</strong>:
          襲撃の最大リスクは出血。
          <Link href="/articles/first-aid">応急処置と通報</Link>を参照。
        </li>
        <li>
          <strong>携帯電話 (圏外メモを準備)</strong>:
          山深い場所では圏外のことも多いので、家族への入山時刻・予定経路の事前共有を必須に。
        </li>
        <li>
          <strong>収穫物用の二重密閉袋</strong>:
          ふきのとう・行者ニンニク・タラの芽は強い匂いを発します。
        </li>
      </ul>

      <h2 id="behavior">現場での立ち回り</h2>
      <ol>
        <li>
          <strong>1 人で奥へ入らない</strong>:
          採り場で人の声が聞こえる範囲、もしくは複数人で動く。
        </li>
        <li>
          <strong>こまめに立ち上がって周囲を確認</strong>:
          屈み姿勢のままだと、近くまで来られても気づけません。クマは木登りが得意なので頭上にも目を配る。
        </li>
        <li>
          <strong>風下に注意</strong>: クマが匂いで人間の存在を察知できないと、
          すれ違いざまに鉢合わせます。風向きが変わったら警戒度を上げる。
        </li>
        <li>
          <strong>子グマの「キャー」「ピー」鳴き声を聞いたら即離脱</strong>:
          母グマがすぐ近くにいる前提で行動。
        </li>
        <li>
          <strong>「土まんじゅう」を発見したら即下山</strong>:
          落ち葉と土で盛り上がった山は獲物の埋没。クマが戻ってきます。
        </li>
      </ol>

      <h2 id="encounter">母グマと遭遇したら</h2>
      <p>
        山菜採りの現場で最も警戒すべきは、子連れの母グマとの突発接近です。
      </p>
      <ul>
        <li>
          <strong>子グマを先に見つけた場合</strong>: 写真撮影は絶対 NG。
          見えない母グマがすでにあなたを警戒している前提で、静かに後退・離脱。
          詳細は<Link href="/articles/cub-handling">子グマを見たらどうする</Link>。
        </li>
        <li>
          <strong>母グマと至近距離 (10m 以内)</strong>:
          走らない・背を向けない。クマを見ながらゆっくり離れる。大声や物を投げて威嚇しない。
          ホルスターのスプレーに手をかけ、突進されたら顔に向けて 1〜2 秒ずつ噴射。
        </li>
        <li>
          <strong>突進されて間に合わなかったら</strong>:
          うつ伏せになり両手で首の後ろを守る (リュックは背負ったまま)。
          子連れの母グマの攻撃は防衛的なことが多く、動かずにいると立ち去ることが多い。
          ただし、つけ回す・伏せても攻撃が続くなど執拗な攻撃なら顔や鼻を狙って反撃する。
          ツキノワグマでもヒグマでも基本は同じです。
          <Link href="/articles/playing-dead">死んだふりは効くのか</Link>も参照。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "毎年通っている山なら大丈夫?",
            a: (
              <>
                「いつもの山」だからこそ警戒が緩みます。クマの出没状況は年によって変わり、
                エサが不作の年には行動範囲が大きく変わります。毎回「初めて入る山」と思って
                装備・確認を組むのが安全です。
              </>
            ),
            aText:
              "「いつもの山」だからこそ警戒が緩みます。クマの出没状況は年によって変わるため、毎回「初めて入る山」と思って装備・確認を組むのが安全です。",
          },
          {
            q: "ラジオを大音量でかければクマは寄ってこない?",
            a: (
              <>
                人の話し声が一定して鳴ることで「人間がいる」サインにはなりますが、
                人に慣れた個体には効果が落ちるとも考えられます。
                ラジオは「無いよりはるかに良い」程度に位置付け、複数の手段と組み合わせを。
              </>
            ),
            aText:
              "人間サインとしては有効ですが、人に慣れた個体には効果が落ちるとも考えられます。ラジオは複数の手段と組み合わせて使ってください。",
          },
          {
            q: "タケノコ採りで沢沿いに入る予定だが、安全な時間帯は?",
            a: (
              <>
                「この時間なら安全」という時間帯はありません。クマが特に活発な明け方と夕方は避け、
                日中も鈴・声・スプレーの備えを続けてください。
              </>
            ),
            aText:
              "安全と言い切れる時間帯はありません。クマが特に活発な明け方と夕方は避け、日中も備えを続けてください。",
          },
          {
            q: "山菜の収穫物の匂いはクマを呼ぶ?",
            a: (
              <>
                ふきのとう・行者ニンニク・タラの芽は強い香りを発します。二重の密閉袋に入れ、
                車に戻ったら速やかに匂いを車内から遠ざけてください。
                ザックを車内に放置せず、トランクや屋外保管が安全。
              </>
            ),
            aText:
              "ふきのとうや行者ニンニクなど強い匂いの山菜は二重の密閉袋に入れ、車に戻ったら匂いを遠ざけてください。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
