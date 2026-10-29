import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-008")!;

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
        アメリカクロクマは 1 年のうち 5〜7 ヶ月を冬眠して過ごし、その間は
        <strong>食べず、飲まず、排尿も排便もしません</strong>。
        そのあいだ、体の中では何が起きているのでしょうか。
      </p>
      <p>
        今号は、アラスカ大学フェアバンクス校とスタンフォード大学の研究チームが 2011 年に
        Science 誌に発表した論文を読みます。冬眠中のクマの代謝と体温を測り、
        「エネルギーの使い方を大きく落とすこと」と「体温を下げること」が、
        クマではかなりの部分で別々に起きていることを示した研究です。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Hibernation in black bears: independence of metabolic suppression from body temperature"
        citation={
          <>
            Tøien, Ø., Blake, J., Edgar, D. M., Grahn, D. A., Heller, H. C., &amp; Barnes, B. M. (2011).{" "}
            <em className="not-italic">Science</em> 331(6019): 906–909.
          </>
        }
        href="https://doi.org/10.1126/science.1199435"
        linkText="DOI: 10.1126/science.1199435 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            冬眠中のクマの代謝は <strong>基礎代謝の約 25%</strong> まで下がった
          </>,
          <>
            それでも体温は <strong>30〜36°C</strong> の範囲に保たれ、数日がかりで上下をくり返した
          </>,
          <>
            巣穴を出て体温が戻ったあとも、代謝は <strong>最大 3 週間</strong> 低いままだった
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why", title: "なぜこの研究が大事なのか" },
          { id: "method", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="why">なぜこの研究が大事なのか</h2>
      <p>
        冬眠する小型の哺乳類の多くは、体温を大きく下げることでエネルギーの消費を抑えます。
        体温が下がれば体内の化学反応はゆっくりになるので、「代謝が下がるのは体温が下がるから」
        と考えるのが自然です。
      </p>
      <p>
        一方、クマは冬眠中も体温があまり下がらないことが知られていました。
        では、クマの代謝はどのくらい下がっているのか。体温の低下だけで説明できるのか。
        この論文は、その問いに実測データで答えようとしたものです。
      </p>

      <h2 id="method">研究の概要</h2>
      <ul>
        <li>
          <strong>対象</strong>：アメリカクロクマ 5 頭。人の生活圏に近づいたため、
          アラスカ州魚類野生生物局に捕獲された個体です。
        </li>
        <li>
          <strong>飼育環境</strong>：大学の研究施設に移し、人の気配から離れた林の中に置いた
          木製の巣箱（自然の巣穴をまねたもの）で冬眠させました。巣箱には赤外線カメラや活動を測る機器が付けられていました。
        </li>
        <li>
          <strong>測ったもの</strong>：体内に埋め込んだ発信機で体温・心拍・筋肉の活動を記録し、
          巣箱の空気から酸素の消費量（代謝率）を測りました。
        </li>
        <li>
          <strong>期間</strong>：冬眠の約 5 ヶ月間を昼夜通して記録し、春に巣箱を出たあとも追跡しました。
        </li>
      </ul>
      <p>
        つまり、野山を自由に歩く野生のクマではなく、<strong>屋外の囲いの中で、自然に近い条件で冬眠させたクマ</strong>
        を詳しく測った研究です。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>代謝は基礎代謝の約 25% まで下がった</h3>
      <p>
        冬眠中のクマの代謝率は、<strong>基礎代謝（安静時の最低限のエネルギー消費）の約 25%</strong>
        まで下がっていました。論文発表時の報道発表では、夏の水準と比べておよそ 75% の低下と説明されています。
      </p>

      <h3>体温は 30〜36°C の間で、数日周期で上下した</h3>
      <p>
        体温は <strong>30°C から 36°C の範囲</strong>で調節されていました。
        論文発表時の報道発表によると、体温が 30°C 付近まで下がると震えて体を温め、
        36°C 付近まで上がると震えを弱めてまた下がる、という変化が
        <strong>2〜7 日ほどの周期</strong>でくり返されていました。
      </p>

      <h3>心拍は 1 分あたり最少 9 回まで落ちた</h3>
      <p>
        心拍数は、平常時の <strong>1 分あたり約 55 回</strong>から、
        少ないときには <strong>9 回</strong>まで下がりました（論文発表時の報道発表では、冬眠中はおよそ 14 回）。
        呼吸に合わせて心拍が大きく変わる「洞性不整脈」が強く見られ、
        息をするたびに心拍が一時的に速くなり、呼吸と呼吸の間は心拍がゆっくりになっていました。
      </p>

      <h3>巣穴を出たあとも、代謝はしばらく低いままだった</h3>
      <p>
        春に体温が平常に戻り、巣箱から出たあとも、クマの代謝は低い状態が
        <strong>最大 3 週間</strong>続きました。論文発表時の報道発表では、出てきた直後の代謝は夏の約半分だったとされています。
      </p>

      <h3>結論 — 代謝の抑制の多くは体温と独立している</h3>
      <p>
        体温は数度しか下がっていないのに代謝は大きく下がり、体温が戻っても代謝はすぐには戻らない。
        このことから著者らは、<strong>冬眠中の代謝の抑制の大部分は、体温の低下とは別の仕組みで起きている</strong>
        と考えられる、とまとめています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          対象は <strong>5 頭</strong>と少数です。個体差や年による違いがどの程度あるかは、この研究だけでは分かりません。
        </li>
        <li>
          人里に出て捕獲されたクマを、<strong>研究施設の巣箱</strong>で冬眠させた結果です。
          野生の巣穴で冬眠するクマでも同じ値になるとは限りません。
        </li>
        <li>
          対象はアラスカの <strong>アメリカクロクマ</strong>です。日本のツキノワグマやヒグマは種も気候も異なるため、
          数字をそのまま当てはめることはできません。
        </li>
        <li>
          「代謝の抑制が体温と独立している」ことは示されましたが、それが
          <strong>どんな仕組みで起きているのか</strong>まではこの論文では明らかになっていません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究から言えるのは、冬眠中のクマが「体温を大きく下げて仮死状態になっている」わけではない、ということです。
        体温は 30°C 以上に保たれ、震えて体を温めることもありました。
        日本のクマについて同じ数字が当てはまるかは分かりませんが、
        <strong>冬だからクマは動かない、と決めつけない</strong>心構えは役に立ちます。
      </p>
      <p>
        冬から春先にかけて山に入るときも、出没情報を確認し、クマに出会ったら
        <strong>走らない・背を向けない・ゆっくり離れる</strong>ことが基本です。
        対策の全体像は <Link href="/learn/safety">クマ対策の基本</Link>、
        冬眠についての一般的な解説は <Link href="/articles/bear-hibernation">クマの冬眠</Link> をご覧ください。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Hibernation in black bears: independence of metabolic suppression from body temperature（本号メイン）",
            citation: (
              <>
                Tøien, Ø., Blake, J., Edgar, D. M., Grahn, D. A., Heller, H. C., &amp; Barnes, B. M. (2011).{" "}
                <em className="not-italic">Science</em> 331(6019): 906–909.
              </>
            ),
            href: "https://doi.org/10.1126/science.1199435",
            linkText: "DOI: 10.1126/science.1199435 →",
          },
          {
            title: "Bears uncouple temperature and metabolism for hibernation, new study shows（論文発表時の報道発表）",
            citation: <>American Association for the Advancement of Science（EurekAlert!, 2011 年 2 月 17 日）</>,
            href: "https://www.eurekalert.org/news-releases/664527",
            linkText: "EurekAlert! →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
