import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import {
  PaperCard,
  KeyPoints,
  Callout,
  StatCallout,
  References,
} from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-033")!;

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
      {/* オープニングフック */}
      <p className="lead">
        「人に慣れたクマは、いつか駆除される」——よく言われることですが、
        その代償は<strong>本人だけでは終わらない</strong>かもしれません。
        知床のヒグマを長年追った日本の研究は、衝撃的な事実を示しました。
        <strong>人に慣れた母グマのもとで育った息子グマは、その 70% 以上が人に殺されていた</strong>のです。
        「人慣れ」は、母から子へ受け継がれていました。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title={
          <>
            Maternal human habituation enhances sons&rsquo; risk of human-caused
            mortality in a large carnivore, brown bears
          </>
        }
        citation={
          <>
            Shimozuru, M., Shirane, Y., Yamanaka, M., et al. (2020).{" "}
            <em className="not-italic">Scientific Reports</em> 10: 16498.
            （北海道・知床国立公園のヒグマ）
          </>
        }
        href="https://doi.org/10.1038/s41598-020-73057-5"
        linkText="DOI: 10.1038/s41598-020-73057-5 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            知床で、<strong>人に慣れた母グマの息子は 70% 超が人に殺されていた</strong>
          </>,
          <>
            子グマは母から<strong>「人を怖がらない」ことを学習</strong>して受け継ぐ
          </>,
          <>
            だから対策の本丸は<strong>「最初の 1 頭を人慣れさせないこと」＝餌付け・生ゴミの根絶</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "人慣れは「遺伝」ではなく「学習」で伝わる" },
          { id: "study", title: "知床という、世界でも稀な観察フィールド" },
          { id: "finding", title: "息子の 70% 超が、人の手で死んでいた" },
          { id: "why-sons", title: "なぜ「息子」なのか" },
          { id: "mechanism", title: "母から子へ — 人慣れの連鎖" },
          { id: "implication", title: "対策の本丸はどこにあるか" },
          { id: "action", title: "私たちにできること" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">人慣れは「遺伝」ではなく「学習」で伝わる</h2>
      <p>
        クマが人を恐れなくなる「人馴れ（human habituation）」は、
        クマと人の双方にとって最悪の入り口です。
        人を恐れないクマは人里に居つき、トラブルを起こし、最終的に駆除される。
        この研究が問うたのは、もう一歩深い問いでした——
        <strong>「人慣れした母グマの子は、どうなるのか？」</strong>
      </p>

      <h2 id="study">知床という、世界でも稀な観察フィールド</h2>
      <p>
        舞台は北海道・<strong>知床国立公園</strong>。
        世界自然遺産でもあり、ヒグマの高密度生息地として知られます。
        研究チーム（北海道大学などの下鶴らのグループ）は、
        <strong>個体を識別して長年追跡</strong>し、母グマごとの「人慣れの度合い」と、
        その子ども（独立後 1〜4 歳）の<strong>その後の生死</strong>を結びつけました。
      </p>
      <p>
        個体を識別し、母系をたどり、子の運命まで追える——
        これは世界的にも極めて貴重なデータセットです。
      </p>

      <h2 id="finding">息子の 70% 超が、人の手で死んでいた</h2>
      <p>
        結果は厳しいものでした。
        <strong>人への慣れが強い母グマ</strong>のもとで育った<strong>オスの子（息子）</strong>は、
        その<strong>70% 以上が人に殺されていた</strong>（駆除・事故等の人為的死亡）。
        これは、人馴れの度合いが低い母グマの息子に比べて<strong>明らかに高い</strong>割合でした。
      </p>
      <StatCallout
        label="人慣れした母グマの息子の人為的死亡率"
        value="70%+"
        note="人慣れの弱い母グマの息子より明らかに高かった"
      />

      <h2 id="why-sons">なぜ「息子」なのか</h2>
      <p>
        差がとくに<strong>オス</strong>で大きく出たのには理由があります。
        ヒグマはメスが母の行動圏の近くにとどまりやすいのに対し、
        <strong>オスは独立後に広く分散し、長距離を動き回る</strong>。
        人を恐れない性質を母から受け継いだオスは、
        その「物おじしなさ」を抱えたまま広範囲を移動し、
        <strong>人の生活圏に踏み込んでトラブルを起こし、駆除される</strong>確率が高まる——
        という構図です。
      </p>

      <h2 id="mechanism">母から子へ — 人慣れの連鎖</h2>
      <p>
        ここが本研究の核心です。人慣れは<strong>遺伝子で決まるのではなく、
        子グマが母と過ごす中で「学習」して受け継ぐ</strong>と考えられます。
      </p>
      <p>
        母グマが人や人里を恐れず、生ゴミや畑の作物を食べて暮らしていれば、
        一緒にいる子グマも「人は怖くない」「人のそばには食べ物がある」と学んでしまう。
        独立後、その子は<strong>同じ行動を再生産</strong>し、やがて駆除される。
        <strong>一頭の人慣れが、次の世代の死につながる</strong>。
        人馴れは個体の問題ではなく、<strong>世代を超えた連鎖</strong>なのです。
      </p>

      <h2 id="implication">対策の本丸はどこにあるか</h2>
      <p>
        この研究は、クマ対策の優先順位をはっきりさせます。
        出てきたクマを駆除するのは「下流」の対症療法にすぎない。
        本当に効くのは<strong>「上流」——そもそも 1 頭目を人慣れさせないこと</strong>です。
      </p>
      <Callout label="要点" tone="emerald">
        餌付け（意図的・非意図的を問わず）と生ゴミ・残飯・放置果樹は、
        クマに「人＝食べ物」を学習させる入り口。
        ここを断つことは、目の前の 1 頭だけでなく、
        <strong>その子・孫の世代まで救う</strong>ことにつながります。
      </Callout>

      <h2 id="action">私たちにできること</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>絶対に餌をやらない・残さない</strong> — 観光地での餌やりはもちろん、
          生ゴミ・弁当の残り・釣りの撒き餌も「餌付け」になります。
        </li>
        <li>
          <strong>里の誘引物を管理する</strong> — 収穫しない柿・栗、放置された果樹、コンポストは
          クマに「人里＝食料」を学習させる典型。早めに処理を。
        </li>
        <li>
          <strong>「かわいい」で近づけない</strong> — 人を恐れないクマや子グマに餌・接近をすると、
          その個体だけでなく次世代まで「人慣れ」を植え付けてしまいます。
        </li>
        <li>
          <strong>出没情報は早めに共有・通報</strong> — 人慣れが定着する前の早い段階の対応が、
          連鎖を断つ鍵になります。
        </li>
      </ol>
      <p>
        誘引物の管理や遭遇回避の基本は{" "}
        <Link href="/measures">クマ対策の総合ガイド</Link>
        にまとめています。前号
        <Link href="/articles/research-digest-032">Vol.32（クマ鈴）</Link>で触れた
        「鈴の先に餌があると逆効果」という話も、本号の「人慣れの連鎖」と地続きです。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: (
              <>
                Maternal human habituation enhances sons&rsquo; risk of
                human-caused mortality in a large carnivore, brown bears（本号メイン）
              </>
            ),
            citation: (
              <>
                Shimozuru, M., Shirane, Y., Yamanaka, M., et al. (2020).{" "}
                <em className="not-italic">Scientific Reports</em> 10: 16498.
              </>
            ),
            href: "https://doi.org/10.1038/s41598-020-73057-5",
            linkText: "DOI: 10.1038/s41598-020-73057-5 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>
    </ArticleShell>
  );
}
