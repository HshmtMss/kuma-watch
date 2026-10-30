import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("diet")!;

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
        <strong>結論</strong>: クマは雑食ですが、季節ごとに食べ物がガラッと変わります。
        春は若芽・タケノコ、夏は昆虫・果実、秋はブナの実・ドングリ・栗、と<strong>食性カレンダーが行動エリアを左右します</strong>。
        これを知っておくと「いつ・どこ」で遭遇しやすいかの予測精度が上がります。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマは雑食だが<strong>季節ごとに食べ物がガラッと変わる</strong>。
          </>,
          <>
            <strong>春=若芽・タケノコ／夏=昆虫・果実／秋=ブナの実・ドングリ・栗</strong>。
          </>,
          <>
            食性カレンダーを知ると<strong>「いつ・どこ」で遭遇しやすいか</strong>の予測精度が上がる。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "omnivore", title: "クマは植物寄りの雑食" },
          { id: "spring-food", title: "春: 若芽・山菜・タケノコ" },
          { id: "summer-food", title: "夏: 昆虫・果実・蜂の巣" },
          { id: "autumn-food", title: "秋: ブナの実・ドングリ・栗・柿" },
          { id: "winter", title: "冬: 冬眠 (餌は食べない)" },
          { id: "human-food", title: "人里の食料に慣れる怖さ" },
          { id: "predicting", title: "食性から出没予測へ" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="omnivore">クマは植物寄りの雑食</h2>
      <p>
        ツキノワグマもヒグマも、食べ物の大部分は植物です。
        肉食のイメージを持たれがちですが、主なエネルギー源は木の実や草などの植物です。
        ただし「食べられるものは何でも食べる」雑食性なので、シカの死骸・サケ・昆虫・人間の生ゴミまで、機会があれば手を出します。
      </p>

      <h2 id="spring-food">春: 若芽・山菜・タケノコ</h2>
      <p>
        4〜6 月は冬眠明けで体力回復が最優先。日当たりの良い斜面で芽吹いたばかりの草本、フキノトウ、山菜、タケノコが主食です。
        特に <strong>タケノコ (ネマガリダケなど)</strong> はクマがよく食べるもので、人間の山菜採りと場所も時期も重なります。
        詳細は <Link href="/articles/spring">春のクマ対策</Link> を参照。
      </p>

      <h2 id="summer-food">夏: 昆虫・果実・蜂の巣</h2>
      <p>
        7〜8 月は、春の若芽が硬くなり秋の木の実もまだ実らない、山の食べ物が少ない時期とされます。クマは昆虫や果実など、さまざまなものを食べてしのぎます。
      </p>
      <ul>
        <li><strong>アリ・ハチ・幼虫</strong>: 朽木をひっくり返してアリの巣・ハチの幼虫を食べる</li>
        <li><strong>蜂の巣</strong>: ニホンミツバチ・スズメバチの巣を襲い、蜜と幼虫を食べる</li>
        <li><strong>キイチゴ・サルナシ・ヤマブドウ</strong>: 早めに熟す野生の果実</li>
        <li><strong>シカの死骸</strong>: 機会があれば腐肉も食べる</li>
      </ul>

      <h2 id="autumn-food">秋: ブナの実・ドングリ・栗・柿</h2>
      <p>
        9〜11 月は冬眠前のハイパーフェイジア (過食期)。
        冬眠に備えて脂肪を蓄えるため、食べ物を求めて広く動き回ります。
      </p>
      <ul>
        <li><strong>ブナの実、ミズナラ・コナラのドングリ</strong>: 主食。実りの豊凶によって出没の多さが大きく変わる</li>
        <li><strong>栗・クルミ</strong>: 高エネルギー。栗林に常駐するクマもいる</li>
        <li><strong>柿</strong>: 集落の柿の木はクマを誘引する典型例</li>
        <li><strong>果樹園のリンゴ・梨</strong>: 商業果樹も狙われる</li>
        <li><strong>ヤマブドウ・サルナシ</strong>: つる性の野生果実</li>
      </ul>
      <p>
        ブナやドングリの凶作年は山の食べ物が不足し、人里へ出てくるクマが増えやすくなります。
        詳細は <Link href="/articles/autumn">秋のクマ対策</Link>、
        <Link href="/articles/why-increasing">出没増加の原因</Link> を参照。
      </p>

      <h2 id="winter">冬: 冬眠 (餌は食べない)</h2>
      <p>
        冬はおおむね 12 月ごろから春まで冬眠します (時期は地域や年で変わります)。木の根元の穴、岩穴、樹洞などで代謝を下げて過ごし、その間は餌を食べません。
        ただし暖冬や食料不足の年は、冬眠せずに活動する個体 (穴持たず) も少数いて、雪上で目撃されることがあります。
      </p>

      <h2 id="human-food">人里の食料に慣れる怖さ</h2>
      <p>
        一度人里の食料 (生ゴミ・果実・養蜂・ペットフード・飼料) を食べたクマは、それを「効率の良い餌場」として記憶します。
        山の食料が豊富な年でも人里に下りてくるようになり、連れている子グマがその行動を覚えることもあるとされます。
        この「餌付け状態」を作らないことが地域全体の防護に直結します。詳細は <Link href="/articles/home-protection">家庭・果樹園のクマ対策</Link> を参照。
      </p>

      <h2 id="predicting">食性から出没予測へ</h2>
      <p>
        食性カレンダーを知っておくと、「いつ・どこ」で遭遇しやすいかが見えてきます。
      </p>
      <ul>
        <li>5 月の竹林 → タケノコ目当て</li>
        <li>8 月の中腹部の朽木周辺 → 昆虫食</li>
        <li>9〜10 月のブナ林・ナラ林 → ブナの実・ドングリ</li>
        <li>10〜11 月の集落の柿の木周辺 → 落柿</li>
      </ul>
      <p>
        くまウォッチの地域ページで季節ごとの目撃傾向を確認しつつ、食性カレンダーを重ねて見ると予測精度が上がります。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマは肉食ですか?",
            a: (
              <>
                植物寄りの雑食です。ツキノワグマもヒグマも食べ物の大部分は植物です。ただし機会があればシカの死骸・サケ・昆虫・人間の生ゴミまで何でも食べます。
              </>
            ),
            aText:
              "植物寄りの雑食です。ツキノワグマもヒグマも食べ物の大部分は植物です。ただし機会があれば動物質も食べます。",
          },
          {
            q: "ドングリが凶作だとなぜ出没が増える?",
            a: (
              <>
                冬眠前に必要な栄養を山中で得にくくなり、食べ物を探して広く動くうちに、栗・柿・果樹園・生ゴミなど人里の食料にたどり着く個体が増えるためと考えられています。
              </>
            ),
            aText:
              "冬眠前に必要な栄養を山中で得にくくなり、食べ物を探して広く動くうちに、栗・柿・果樹園・生ゴミなど人里の食料にたどり着く個体が増えるためと考えられています。",
          },
          {
            q: "蜂の巣を襲うのは本当?",
            a: (
              <>
                本当です。ニホンミツバチ・スズメバチの巣を木から引きずり下ろし、蜜と幼虫を食べます。養蜂家にとってはクマは深刻な被害源で、電気柵で囲うのが標準対策です。
              </>
            ),
            aText:
              "本当です。ニホンミツバチ・スズメバチの巣を引きずり下ろし、蜜と幼虫を食べます。養蜂家にとってはクマは深刻な被害源で、電気柵で囲うのが標準対策です。",
          },
          {
            q: "クマはサケを食べるの?",
            a: (
              <>
                ヒグマはサケを捕食します。北海道のヒグマがサケ漁をする映像は有名で、秋の遡上期に集中して食べます。ツキノワグマには本格的なサケ漁の習慣はありません。
              </>
            ),
            aText:
              "ヒグマはサケを捕食します。北海道のヒグマがサケ漁をする映像は有名で、秋の遡上期に集中して食べます。ツキノワグマには本格的なサケ漁の習慣はありません。",
          },
        ]}
      />
    </ArticleShell>
  );
}
