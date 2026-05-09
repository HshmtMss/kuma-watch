import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-hibernation")!;

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
        <strong>結論</strong>: クマの冬眠は深い眠りではなく、
        体温・心拍を落とした<strong>軽い覚醒状態</strong>。
        刺激があれば数分で完全に活動できます。期間は地域差があり 11 月下旬〜4 月中旬。
        暖冬や食料不足の年には冬眠せず活動する「<strong>穴持たず</strong>」も発生し、冬山での遭遇リスクは無視できません。
      </p>

      <ArticleToc
        items={[
          { id: "what-is", title: "クマの冬眠とは何か" },
          { id: "metabolism", title: "代謝と体温 — どう生きるか" },
          { id: "den", title: "冬眠の場所 (巣穴) の選び方" },
          { id: "wakeup", title: "起きるタイミングと覚醒のサイン" },
          { id: "non-hibernating", title: "穴持たず — 冬眠しないクマ" },
          { id: "winter-risk", title: "冬山での遭遇リスク" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="what-is">クマの冬眠とは何か</h2>
      <p>
        哺乳類の冬眠 (hibernation) は、リスやマーモットなどに見られる「体温が外気温近くまで落ちる深い休眠」と、
        クマのように「体温を 5℃ 程度しか落とさず、いつでも目覚められる軽い休眠」(torpor) の 2 種類があります。
        クマは後者で、北米の研究でも「クマの冬眠は哺乳類の中でも特殊」と評価されています。
      </p>
      <ul>
        <li>体温は 32〜35℃ (平常 37〜38℃) — リスは 0〜5℃ まで落ちる</li>
        <li>心拍は毎分 8〜12 回 (平常 40〜50 回)</li>
        <li>呼吸数も平常の 1/4〜1/3 に</li>
        <li>排泄しない・食事しない・出産する場合もある</li>
      </ul>

      <h2 id="metabolism">代謝と体温 — どう生きるか</h2>
      <p>
        冬眠中、クマは脂肪を分解しながら水分を生成し、尿素を再吸収して窒素を再利用します。
        この機能は医療研究の対象でもあり、長期臥床の筋萎縮を防ぐ手がかりが得られています。
      </p>
      <ul>
        <li>
          <strong>脂肪燃焼</strong>:
          冬眠前のハイパーフェイジア (秋の食欲増加) で蓄えた脂肪が燃料 (<Link href="/articles/autumn">秋のクマ対策</Link>)。
        </li>
        <li>
          <strong>筋肉の維持</strong>:
          ヒトなら数週間で起きる筋萎縮が、クマでは半年眠っても起きない。
        </li>
        <li>
          <strong>水分の自給</strong>:
          脂肪分解で生成される代謝水と、尿素再吸収で水分・窒素を維持。
        </li>
      </ul>

      <h2 id="den">冬眠の場所 (巣穴) の選び方</h2>
      <p>
        冬眠場所 (デン、巣穴) はクマの生死を決める要素です。
      </p>
      <ul>
        <li>
          <strong>樹洞</strong>:
          ブナ・トチ・ホオなど大径木の空洞。北日本に多い。
        </li>
        <li>
          <strong>岩穴・洞窟</strong>:
          崖の裂け目や岩の隙間。アクセス困難で安全。
        </li>
        <li>
          <strong>地中穴</strong>:
          斜面に自分で掘る。雪の保温で凍結を防ぐ。
        </li>
        <li>
          <strong>倒木の下</strong>:
          急な冬到来時の即席シェルター。
        </li>
      </ul>
      <p>
        母グマは出産する年、より頑丈で外敵からアクセスしにくい巣穴を選びます。
        子グマは巣穴で 1〜2 月に生まれ、母乳で育てられて 4 月の覚醒時に外に出てきます
        (<Link href="/articles/cub-handling">子グマを見たらどうする</Link>)。
      </p>

      <h2 id="wakeup">起きるタイミングと覚醒のサイン</h2>
      <ul>
        <li>
          <strong>冬眠入りの目安</strong>:
          初雪 + 食料減少 + 短日化。北海道は 11 月中旬、本州は 11 月下旬〜12 月。
        </li>
        <li>
          <strong>覚醒のタイミング</strong>:
          雪解けと若芽の発生に同期。北海道は 3 月下旬、本州は 4 月。
        </li>
        <li>
          <strong>母グマと子グマ</strong>:
          母グマは少し早めに出てきて、子グマを連れて活動を始める (春が最も警戒)。
        </li>
        <li>
          <strong>刺激での中途覚醒</strong>:
          人間や他の動物が巣穴近くを通ると、起きて出てくる。
          冬山登山者がうっかり近づいて襲われる事故は実在します。
        </li>
      </ul>

      <h2 id="non-hibernating">穴持たず — 冬眠しないクマ</h2>
      <p>
        十分な脂肪を蓄えられなかった個体は、冬眠せず活動を続けます。これを「穴持たず」と呼びます。
      </p>
      <ul>
        <li>
          <strong>原因</strong>:
          ブナ・ナラの凶作、若い未経験個体、けが・病気で食料を取れなかった個体。
        </li>
        <li>
          <strong>行動</strong>:
          市街地・農作物・養蜂箱を狙うことが多く、人身事故の確率も上がる。
        </li>
        <li>
          <strong>増加傾向</strong>:
          暖冬・凶作の年に増加。
          詳しくは<Link href="/articles/winter">冬のクマ対策</Link>。
        </li>
      </ul>

      <h2 id="winter-risk">冬山での遭遇リスク</h2>
      <p>
        冬山ではクマと遭遇する確率は低いものの、以下のシーンでは警戒が必要です。
      </p>
      <ul>
        <li>
          <strong>暖冬の年</strong>:
          穴持たずが活動 / 早期覚醒個体に遭遇する可能性。
        </li>
        <li>
          <strong>巣穴近くを通過</strong>:
          ブナ大径木の根元・岩穴付近では刺激しないルート取りを。
        </li>
        <li>
          <strong>3 月下旬〜4 月の山行</strong>:
          冬眠明け直後で母グマが特に警戒モード。
        </li>
        <li>
          <strong>雪原での痕跡</strong>:
          雪上の足跡が新しいなら 1 km 以内にクマがいる可能性。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "冬眠中のクマに近づいたら起きて襲われる?",
            a: (
              <>
                可能性はあります。クマの冬眠は浅く、数分の刺激で完全覚醒できる状態。
                巣穴に気づかず近づいて噛みつかれる事故が国内外で報告されています。
                スノーシュー・スキーで枝の張り出した木の根元・崖の裂け目には不用意に近づかないでください。
              </>
            ),
            aText:
              "可能性はあります。クマの冬眠は浅く数分で完全覚醒します。スノーシュー・スキーで木の根元や崖の裂け目には不用意に近づかないでください。",
          },
          {
            q: "穴持たずはどれくらいの割合?",
            a: (
              <>
                通常年は 0〜数パーセント程度ですが、ブナ・ナラの凶作年には 1 割を超えることもあると指摘されています。
                凶作年の冬は出没情報を警戒し、農作物・養蜂箱の防衛を強化してください。
              </>
            ),
            aText:
              "通常年は数パーセント以下ですが、ブナ・ナラの凶作年には 1 割を超えることもあります。凶作年の冬は警戒度を上げてください。",
          },
          {
            q: "冬眠中の母グマに会いたくない場合の登山は?",
            a: (
              <>
                3 月下旬〜4 月中旬の低中山岳は、冬眠明けの母グマと遭遇する確率が比較的高い時期です。
                完全に避けるのは難しいですが、雪解け直後の南向き斜面 (草が出る場所) は警戒度を上げ、
                <Link href="/articles/spring">春のクマ対策</Link>を参照してください。
              </>
            ),
            aText:
              "3 月下旬〜4 月中旬は冬眠明けの母グマとの遭遇確率が高い時期。雪解け直後の南向き斜面は警戒度を上げ、春のクマ対策を参照してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "クマの冬眠は深い眠りではなく軽い覚醒状態 (体温 32〜35℃、心拍 8〜12 回 /分)。",
          "刺激があれば数分で完全活動できる。巣穴に近づくのは危険。",
          "期間は北海道 11 月中旬〜3 月下旬、本州 11 月下旬〜4 月。",
          "脂肪不足の個体は冬眠せず「穴持たず」となり、市街地・農作物を狙う。",
          "暖冬・凶作年は穴持たずが増え、冬山での遭遇リスクが上がる。",
        ]}
        footer="冬眠と一般的に思われている深い眠りとは違うことを覚えておくと、冬山の行動判断が変わります。"
      />
    </ArticleShell>
  );
}
