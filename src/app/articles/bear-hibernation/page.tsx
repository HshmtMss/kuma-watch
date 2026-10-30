import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        体温は数℃しか下がらず、代謝と心拍を大きく落とした<strong>浅い休眠</strong>。
        刺激で目を覚まし、動き出すことができます。時期は地域や年で前後し、おおむね 11 月下旬〜12 月ごろに巣穴に入り、3〜5 月に出てきます。
        冬のあいだに活動している「<strong>穴持たず</strong>」と呼ばれる個体もいるため、冬山でも油断はできません。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマの冬眠は体温を数℃しか下げない<strong>浅い休眠</strong>。刺激で目を覚まして動ける。
          </>,
          <>
            おおむね<strong>11月下旬〜12月ごろに入り、3〜5月に出る</strong>。地域や年で前後する。
          </>,
          <>
            冬に活動している<strong>「穴持たず」</strong>もいる。冬山でも油断しない。
          </>,
        ]}
      />

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
        リスなど小型の冬眠動物の多くは、体温を外気温近くまで大きく下げて眠ります。
        一方クマは、冬眠中も体温を数℃しか下げません。それでも代謝は大きく落ちていることが分かっています。
        アラスカのアメリカクロクマ 5 頭を調べた研究 (Tøien ら 2011、
        <Link href="/articles/research-digest-008">研究ダイジェスト Vol.8</Link>) では、次のような値が測られました。
      </p>
      <ul>
        <li>代謝は基礎代謝の約 25% まで低下</li>
        <li>体温は 30〜36℃ の範囲で、数日の周期で上下</li>
        <li>心拍は平常時の 1 分あたり約 55 回から、少ないときは 9 回まで低下</li>
        <li>冬眠中は食べず、飲まず、排尿・排便もしない。メスは冬眠中に出産する</li>
      </ul>
      <p>
        これはアメリカクロクマの値で、日本のツキノワグマやヒグマにそのまま当てはまるとは限りません。
      </p>

      <h2 id="metabolism">代謝と体温 — どう生きるか</h2>
      <p>
        冬眠中、クマは脂肪を分解しながら水分を生成し、尿素を再吸収して窒素を再利用します。
        この仕組みは、長期臥床による筋萎縮などを考える医療研究の対象にもなっています。
      </p>
      <ul>
        <li>
          <strong>脂肪燃焼</strong>:
          冬眠前のハイパーフェイジア (秋の食欲増加) で蓄えた脂肪が燃料 (<Link href="/articles/autumn">秋のクマ対策</Link>)。
        </li>
        <li>
          <strong>筋肉の維持</strong>:
          何か月も動かずに過ごしても、筋肉の衰えが人の寝たきりに比べてずっと小さいとされる。
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
          大きな木の幹の空洞。
        </li>
        <li>
          <strong>岩穴・洞窟</strong>:
          崖の裂け目や岩の隙間。
        </li>
        <li>
          <strong>地中穴</strong>:
          斜面などの土の穴。
        </li>
        <li>
          <strong>倒木や木の根元の下</strong>:
          根元のすき間などを使うこともある。
        </li>
      </ul>
      <p>
        ツキノワグマの子は冬眠中の 1 月下旬〜2 月上旬ごろに巣穴で生まれ、母乳で育てられて春に外に出てきます。
        出産した母グマは、冬眠明けが遅い傾向があるとされます
        (<Link href="/articles/cub-handling">子グマを見たらどうする</Link>)。
      </p>

      <h2 id="wakeup">起きるタイミングと覚醒のサイン</h2>
      <ul>
        <li>
          <strong>冬眠入りの目安</strong>:
          ツキノワグマはおおむね 11 月下旬〜12 月ごろ。秋の食べ物が多い年ほど遅く入るという海外の研究もある
          (<Link href="/articles/research-digest-004">研究ダイジェスト Vol.4</Link>)。
        </li>
        <li>
          <strong>覚醒のタイミング</strong>:
          おおむね 3〜5 月。春の気温が高いほど早く出るという海外の研究もある。
        </li>
        <li>
          <strong>母グマと子グマ</strong>:
          出産した母グマは冬眠明けが遅い傾向があるとされる。子連れの母グマは神経質になっているので、春は特に注意。
        </li>
        <li>
          <strong>刺激での中途覚醒</strong>:
          人などが巣穴の近くに来ると、目を覚まして出てくることがある。
          巣穴の近くで人が襲われた事例は国内外で報告されています。
        </li>
      </ul>

      <h2 id="non-hibernating">穴持たず — 冬眠しないクマ</h2>
      <p>
        冬眠の時期になっても巣穴に入らず活動している個体は「穴持たず」と呼ばれます。
        十分に脂肪を蓄えられなかったことなどが理由として挙げられますが、詳しいことはよく分かっていません。
      </p>
      <ul>
        <li>
          <strong>原因として言われること</strong>:
          ブナ・ナラなどの凶作、若い個体、けがや病気で食べ物を十分に取れなかった個体。
        </li>
        <li>
          <strong>行動</strong>:
          食べ物を探して人里に近づくこともある。
        </li>
        <li>
          <strong>実なりの悪い年</strong>:
          冬眠に入るまでの間、広い範囲で活動することがある。
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
          雪の上の足跡が新しければ、近くにクマがいる可能性がある。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "冬眠中のクマに近づいたら起きて襲われる?",
            a: (
              <>
                可能性はあります。クマの冬眠は浅く、刺激で目を覚まして動くことができます。
                巣穴の近くで人が襲われた事例は国内外で報告されています。
                スノーシュー・スキーで枝の張り出した木の根元・崖の裂け目には不用意に近づかないでください。
              </>
            ),
            aText:
              "可能性はあります。クマの冬眠は浅く、刺激で目を覚まして動くことができます。スノーシュー・スキーで木の根元や崖の裂け目には不用意に近づかないでください。",
          },
          {
            q: "穴持たずはどれくらいの割合?",
            a: (
              <>
                割合を示した信頼できるデータは見当たりません。
                ブナ・ナラなどが凶作の年は、冬に入っても出没情報に注意し、農作物・養蜂箱の対策を続けてください。
              </>
            ),
            aText:
              "割合を示した信頼できるデータは見当たりません。凶作の年は、冬に入っても出没情報に注意してください。",
          },
          {
            q: "冬眠中の母グマに会いたくない場合の登山は?",
            a: (
              <>
                3〜5 月は冬眠明けの時期で、子連れの母グマにも注意が必要です。
                完全に避けるのは難しいですが、雪解け直後の南向き斜面 (草が出る場所) は警戒度を上げ、
                <Link href="/articles/spring">春のクマ対策</Link>を参照してください。
              </>
            ),
            aText:
              "3〜5 月は冬眠明けの時期で、子連れの母グマにも注意が必要です。雪解け直後の南向き斜面は警戒度を上げ、春のクマ対策を参照してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "クマの冬眠は体温を数℃しか下げない浅い休眠 (アメリカクロクマで体温 30〜36℃、代謝は基礎代謝の約 25%)。",
          "刺激で目を覚まして動けるので、巣穴に近づくのは危険。",
          "おおむね 11 月下旬〜12 月ごろに入り、3〜5 月に出る。地域や年で前後する。",
          "冬に活動している「穴持たず」もいる。",
          "実なりの悪い年は、冬に入っても出没情報に注意する。",
        ]}
        footer="冬眠と一般的に思われている深い眠りとは違うことを覚えておくと、冬山の行動判断が変わります。"
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
