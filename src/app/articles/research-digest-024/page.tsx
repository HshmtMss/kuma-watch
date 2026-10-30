import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-024")!;

export const metadata: Metadata = {
  ...reviewRobots(meta.slug),
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
        冬のあいだ、クマは巣穴にこもって過ごします。母グマはその巣穴で出産し、春まで子を育てます。
        では、巣穴にいるクマは、人の活動にどれくらい影響を受けるのでしょうか。
      </p>
      <p>
        今号は、この問いについて当時の研究をまとめた総説（レビュー論文）を読みます。
        新しく野外で測定した研究ではなく、ヒグマ・アメリカクロクマ・ホッキョクグマについて
        それまでに報告された観察や研究を集めて整理したものです。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="How vulnerable are denning bears to disturbance?"
        citation={
          <>
            Linnell, J. D. C., Swenson, J. E., Andersen, R., &amp; Barnes, B. (2000).{" "}
            <em className="not-italic">Wildlife Society Bulletin</em> 28(2): 400–413.
          </>
        }
        href="https://www.jstor.org/stable/3783698"
        linkText="JSTOR で見る →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ヒグマ・クロクマ・ホッキョクグマの巣穴と人の活動に関する報告を集めた <strong>総説</strong>
          </>,
          <>
            巣穴から <strong>約 1 km 以内、特に 200 m 以内</strong>の人の活動には、クマの反応がさまざまで、
            巣穴を捨てる例もある（特に巣ごもりの初めのころ）
          </>,
          <>
            行動圏の中にほかの巣穴の候補があれば、巣穴を 1 つ失っても必ずしも害になるとは限らない
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why", title: "なぜ巣穴の時期が問題になるのか" },
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="why">なぜ巣穴の時期が問題になるのか</h2>
      <p>
        多くの大型の肉食動物は、人が近づいても、少し移動するだけで避けることができます。
        移動にかかるエネルギーは大きくありません。
      </p>
      <p>
        ところが、巣穴にこもっている時期のクマは事情が違います。
        この時期のクマは食べ物をとらず、蓄えた脂肪で冬を越します。
        そのため、人の活動で起こされたり、巣穴を離れたりすると、
        <strong>エネルギーの面で大きな負担になるおそれ</strong>があります。
        著者らは、これが「巣穴のクマは人の活動にどれくらい弱いのか」を調べる理由だと述べています。
      </p>
      <p>
        クマの冬ごもりの体の仕組みについては{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠</Link>
        の記事もご覧ください。
      </p>

      <h2 id="overview">研究の概要</h2>
      <p>
        著者らはノルウェーとスウェーデンの研究者で、筆頭著者の Linnell はノルウェー自然研究所（NINA）に所属しています。
        この論文は、ヒグマ・アメリカクロクマ・ホッキョクグマについて、巣ごもりの生態と、
        人の活動に対する反応を報告した文献を集めて整理した <strong>総説</strong>です。
      </p>
      <p>
        もとになったのは、ノルウェーで軍の演習場を新しく設ける計画に関連して作られた報告書
        （NINA の報告書、1996 年、ノルウェー語・英語要旨つき）で、2000 年に英語の論文として発表されました。
      </p>
      <p>
        著者ら自身も、巣ごもり中の撹乱（人の活動による邪魔）についてのデータは
        <strong>あちこちに散らばっていて、まとまった量はない</strong>と述べています。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>距離と反応</h3>
      <p>
        集めた報告からは、巣穴から <strong>約 1 km より近い</strong>ところ、
        特に <strong>200 m 以内</strong>での人の活動に対して、クマの反応はさまざまでした。
      </p>
      <ul>
        <li>人の活動を許容するクマもいて、巣穴の中まで人が入っても留まった例がある</li>
        <li>
          一方で、この範囲の活動に反応して <strong>巣穴を捨てる</strong>クマもいる
        </li>
        <li>
          巣穴を捨てる反応は、特に <strong>巣ごもりの初めのころ</strong>に起こりやすい
        </li>
      </ul>
      <p>
        つまり、「この距離なら必ず逃げる」「この距離なら大丈夫」と一律に決められるものではなく、
        個体や時期によって反応が違う、というのが論文のまとめ方です。
      </p>

      <h3>巣穴を 1 つ失うことの意味</h3>
      <p>
        同じクマでも、年ごとに使う巣穴は離れていることが多いと報告されています。
        このことから著者らは、人の活動で巣穴を 1 か所失っても、
        <strong>行動圏の中にほかの巣穴の候補があれば</strong>、
        必ずしも悪い影響につながるとは限らないと考えています。
      </p>

      <h3>管理への提言</h3>
      <p>
        もとになった NINA の報告書では、管理上の提言として、
        <strong>分かっている巣穴から 1 km 以内では人の活動を避ける</strong>ことが挙げられています。
        あわせて、巣穴の多い場所を地図にまとめること、巣穴に向いた自然の地形がある場所を守ること、
        決まったルートを外れた予測しにくい活動は影響が大きいことにも触れています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          この論文は総説で、新しい測定データを示したものではありません。
          もとになった個々の報告は、種・地域・調査方法がばらばらです。
        </li>
        <li>
          「1 km」「200 m」は、反応が見られた範囲の目安であり、
          その外なら安全、内なら必ず逃げる、という境界線ではありません。
        </li>
        <li>
          扱っているのは北米・北欧のヒグマ、アメリカクロクマ、ホッキョクグマです。
          日本のツキノワグマやヒグマについて調べたものではなく、
          日本の山の地形や人の利用のしかたにそのまま当てはまるとは限りません。
        </li>
        <li>
          2000 年の論文で、その後の研究で分かったことは含まれていません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        日本でも、冬に山へ入る人はいます。冬山登山、スノーシュー、山スキー、林業などです。
        この論文から、控えめに言えることは次のとおりです。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>巣穴があるかもしれない場所には近づかない</strong> —
          木の根元や岩の下の穴、雪面の不自然な穴などをのぞき込んだり、そばに長く留まったりしないようにしましょう。
          巣穴のクマにとって負担になるうえ、人にとっても危険です。
        </li>
        <li>
          <strong>「冬だからクマはいない」と決めつけない</strong> —
          巣穴にいるクマも、近くの人の活動で目を覚まし、巣穴を出ることがあります。
        </li>
        <li>
          <strong>クマに出会ったら、走らない・背を向けない・ゆっくり離れる</strong> —
          突進してきたらクマスプレーを使います。環境省が推奨する目安は、噴射距離 7.5 m 程度以上、
          噴射時間 6 秒程度以上、カプサイシン類（CRC）1〜2% 程度のもので、
          5〜10 m まで近づいたら顔に向けて 1〜2 秒ずつ噴射します。
        </li>
        <li>
          <strong>防衛的な攻撃で接触が避けられないとき</strong>は、うつ伏せになって首の後ろを手で守る防御姿勢をとります。
          執拗にくり返す攻撃や、人を獲物として狙うような攻撃であれば反撃します。
        </li>
      </ol>
      <p>
        基本の対策は <Link href="/learn/safety">クマ対策の基本</Link> にまとめています。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "How vulnerable are denning bears to disturbance?（本号メイン）",
            citation: (
              <>
                Linnell, J. D. C., Swenson, J. E., Andersen, R., &amp; Barnes, B. (2000).{" "}
                <em className="not-italic">Wildlife Society Bulletin</em> 28(2): 400–413.
              </>
            ),
            href: "https://www.jstor.org/stable/3783698",
            linkText: "JSTOR →",
          },
          {
            title:
              "Hvor sårbare er bjørner for forstyrrelser i hiperioden? En litteraturoversikt（上記の元になった報告書）",
            citation: (
              <>
                Linnell, J. D. C., Swenson, J. E., Barnes, B., &amp; Andersen, R. (1996).{" "}
                <em className="not-italic">NINA Oppdragsmelding</em> 413.
              </>
            ),
            href: "https://nina.no/archive/nina/PppBasePdf/oppdragsmelding/413.pdf",
            linkText: "NINA（PDF）→",
          },
          {
            title: "Denning behaviour of Scandinavian brown bears Ursus arctos",
            citation: (
              <>
                Manchi, S., &amp; Swenson, J. E. (2005).{" "}
                <em className="not-italic">Wildlife Biology</em> 11(2): 123–132.
              </>
            ),
            href: "https://doi.org/10.2981/0909-6396(2005)11[123:DBOSBB]2.0.CO;2",
            linkText: "DOI →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
