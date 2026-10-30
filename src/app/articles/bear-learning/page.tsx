import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-learning")!;

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
        クマは学習する動物で、<strong>食べ物のある場所や、人の生活のどこに食べ物があるか</strong>を覚えます。
        一度市街地に出てゴミ・果樹で食べ物を得たクマが何度も同じ場所に来るのは、
        <strong>「人慣れ (habituation)」と「餌付け (food conditioning)」</strong>と呼ばれる学習によるものです。
        本記事ではクマの学習について分かっていることと、アーバンベア化を防ぐための考え方を整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマは<strong>食べ物の場所などを覚える学習能力</strong>を持つ。
          </>,
          <>
            <strong>「人慣れ」と「餌付け」</strong>でゴミ・果樹の味を覚えたクマは繰り返し来やすい。
          </>,
          <>
            アーバンベア化を防ぐ鍵は<strong>誘引物をなくし、最初に覚えさせないこと</strong>。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "cognition", title: "クマの認知能力 — 分かっていること" },
          { id: "habituation", title: "人慣れ (habituation) — 怖くなくなる過程" },
          { id: "food-conditioning", title: "餌付け — 最も問題が大きい学習" },
          { id: "spatial-memory", title: "空間記憶 — 「あの場所」を覚えている" },
          { id: "fence-learning", title: "電気柵が破られるとき" },
          { id: "social-learning", title: "母子の社会的学習" },
          { id: "prevention", title: "学習を起こさせない対策" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="cognition">クマの認知能力 — 分かっていること</h2>
      <p>
        クマは食肉目のなかで体の大きさの割に脳が大きいグループとされます。
        認知の研究はまだ数が少ないものの、次のような報告があります
        (詳しくは <Link href="/articles/bear-brain-cognition">クマの脳と認知能力</Link>)。
      </p>
      <ul>
        <li>
          <strong>道具使用</strong>: アラスカの野生のヒグマが、フジツボの付いた石を前足で持って首や鼻先をこすった観察例 (Deecke 2012)
        </li>
        <li>
          <strong>数の認識</strong>: 飼育下のアメリカクロクマ 3 頭が、タッチスクリーンで点の数の多い・少ないを見分けた研究 (Vonk &amp; Beran 2012)
        </li>
        <li>
          <strong>問題解決</strong>: 飼育下のグリズリーが、切り株や箱を足場にして吊るされた餌を取った研究 (Waroff ら 2017)
        </li>
      </ul>

      <h2 id="habituation">人慣れ (habituation) — 怖くなくなる過程</h2>
      <p>
        <strong>人慣れ (habituation)</strong> は「同じ刺激に何度もさらされると反応が弱まる」基本的な学習です。
        人と出会っても何も起きない経験が重なると、クマが人を避ける反応が弱まっていきます。
      </p>
      <p>
        人慣れしただけで攻撃的になるわけではありませんが、<strong>人との距離が縮まることで、事故や餌付けにつながるリスクが上がります</strong>。
        人がいても逃げずに行動を続けるクマは、人慣れが進んでいる可能性があります。
      </p>

      <h2 id="food-conditioning">餌付け — 最も問題が大きい学習</h2>
      <p>
        <strong>餌付け (food conditioning)</strong> は、人や人の生活の場と「食べ物」を結びつけて覚えることです。
        人慣れよりも問題が大きく、一度覚えるとやめさせるのが難しいとされます。
      </p>
      <ul>
        <li>
          <strong>ゴミ</strong>: 集落のゴミ置き場で生ゴミなどを得たクマは、同じ場所に繰り返し来やすい
        </li>
        <li>
          <strong>果樹</strong>: カキ・クリ・リンゴなどを食べた個体が、実る時期に再び来ることがある
        </li>
        <li>
          <strong>キャンプ場</strong>: テントサイトの食料を覚えたクマは、キャンプ場に繰り返し現れることがある
        </li>
        <li>
          <strong>養蜂</strong>: 養蜂箱も強い誘引物になる
        </li>
      </ul>
      <p>
        人の食べ物を覚えた個体は、捕獲して別の場所に放しても戻ってくることがあり、
        最終的に駆除の対象になることも少なくありません。
      </p>

      <h2 id="spatial-memory">空間記憶 — 「あの場所」を覚えている</h2>
      <p>
        クマは広い行動圏のなかで、季節ごとに食べ物の多い場所を移動しながら暮らしています。
        次のような情報を覚えて利用していると考えられています。
      </p>
      <ul>
        <li>季節ごとに実る果実や堅果の場所</li>
        <li>水場・休む場所</li>
        <li>人の生活圏で食べ物を得られた場所</li>
      </ul>
      <p>
        どのくらいの期間覚えているのかを直接確かめた研究は限られますが、
        この記憶力が、人の生活圏に繰り返し出てくる一因になっていると考えられます。
      </p>

      <h2 id="fence-learning">電気柵が破られるとき</h2>
      <p>
        電気柵は効果的なクマ対策の一つですが、管理が不十分だと突破されることがあります。
      </p>
      <ul>
        <li>
          <strong>地面の隙間</strong>: 柵の下に隙間があると、下から入られる
        </li>
        <li>
          <strong>倒木・枝</strong>: 倒れた木や枝が柵にかかると、そこから越えられることがある
        </li>
        <li>
          <strong>電圧の低下</strong>: 電池切れや草の接触で電圧が下がると、効果が落ちる
        </li>
        <li>
          <strong>毛の厚さ</strong>: 毛の厚い部分が触れても電気が伝わりにくいため、鼻先などが触れる高さに電線を張る
        </li>
      </ul>
      <p>
        したがって電気柵は「設置すれば終わり」ではなく、<strong>定期的な電圧測定・草刈り・電池交換</strong>
        を含めた継続管理が大切です。
        詳しくは <Link href="/articles/electric-fence">電気柵の効果と運用</Link> を参照。
      </p>

      <h2 id="social-learning">母子の社会的学習</h2>
      <p>
        子グマは独立するまでの 1 年半〜2 年半ほど、母グマと一緒に行動し、食べ物の選び方や場所などを身につけると考えられています。
      </p>
      <p>
        米国のセコイア・ヨセミテ国立公園の野生のアメリカクロクマを調べた研究 (Mazur &amp; Seher 2008) では、
        子グマが人の食べ物をあさるようになるかどうかは、<strong>育った環境 (母グマの行動)</strong> と強く関係していました。
        人の食べ物を覚えた母グマの行動は、子に受け継がれうるということです。
      </p>

      <h2 id="prevention">学習を起こさせない対策</h2>
      <p>
        クマの学習を防ぐ・止める原則は次の通り。
      </p>
      <ol>
        <li>
          <strong>最初の成功体験を与えない</strong>: ゴミ・果樹・養蜂箱などの誘引物を管理する。
          一度覚えるとやめさせるのは難しい
        </li>
        <li>
          <strong>追い払い</strong>: 大きな音などでの追い払いは行われているが、効果が長続きしないこともあり、
          誘引物の管理と組み合わせることが前提
        </li>
        <li>
          <strong>地域全体で取り組む</strong>: 集落全体で食べ物の管理を徹底する。
          1 軒だけ管理が緩いと、そこにクマが引き寄せられるおそれがある
        </li>
        <li>
          <strong>情報の共有</strong>: 出没の場所や時間を記録・共有し、繰り返し出てくる個体に早く気づく
        </li>
      </ol>

      <ArticleFaq
        items={[
          {
            q: "クマよけスプレーで撃退した個体は、次から人を避ける？",
            a: "そうなる可能性はありますが、はっきり確かめられてはいません。スプレーは身を守るための道具として使い、クマを「しつける」目的では使わないでください。",
            aText: "そうなる可能性はありますが、はっきり確かめられてはいません。スプレーは身を守るための道具として使い、クマを「しつける」目的では使わないでください。",
          },
          {
            q: "捕獲して山奥に放獣しても戻ってくる？",
            a: "戻ってくる例が知られています。特に人の食べ物を覚えた個体は、その場所に戻ろうとすることがあります。",
            aText: "戻ってくる例が知られています。特に人の食べ物を覚えた個体は、その場所に戻ろうとすることがあります。",
          },
          {
            q: "AI で個体識別すれば「問題個体」だけ駆除できる？",
            a: "研究は進められていますが、野外で確実に個体を見分けて対応する仕組みは、まだ研究段階です。獣医工学ラボのクマ検知 AI も、将来的にこうした選択的な対応に役立てることを目指しています。",
            aText: "研究は進められていますが、野外で確実に個体を見分けて対応する仕組みは、まだ研究段階です。獣医工学ラボのクマ検知 AI も、将来的にこうした選択的な対応に役立てることを目指しています。",
          },
          {
            q: "クマは「クマ鈴」の音を学習しない？",
            a: "人に慣れた個体では、鈴の音がしても逃げないことがあります。鈴は出会い頭の遭遇を減らすための補助と考え、出没情報の確認や誘引物の管理と組み合わせてください。",
            aText: "人に慣れた個体では、鈴の音がしても逃げないことがあります。鈴は出会い頭の遭遇を減らすための補助と考え、出没情報の確認や誘引物の管理と組み合わせてください。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/urban-encounter">アーバンベアと市街地遭遇</Link> /{" "}
        <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link> /{" "}
        <Link href="/articles/electric-fence">電気柵の効果と運用</Link>
      </p>
    </ArticleShell>
  );
}
