import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-009")!;

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
  const mainCitation = (
    <>
      Linnell, J. D. C., Aanes, R., Swenson, J. E., Odden, J., &amp; Smith, M. E. (1997).{" "}
      <em className="not-italic">Biodiversity and Conservation</em> 6(9): 1245–1257.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        クマが人里に出て捕まったというニュースが流れると、「殺さずに山奥へ放せばいいのに」という声がよく上がります。
        では、問題を起こした肉食動物を捕まえて別の場所へ運ぶ方法（捕獲移動・奥山放獣）は、実際にどのくらい役に立ってきたのでしょうか。
        1997 年に発表された、この方法についての研究をまとめて見直した論文（レビュー）を紹介します。
      </p>

      <PaperCard
        label="今号で紹介する論文"
        title="Translocation of carnivores as a method for managing problem animals: a review"
        citation={mainCitation}
        href="https://doi.org/10.1023/B:BIOC.0000034011.05412.cd"
        linkText="DOI: 10.1023/B:BIOC.0000034011.05412.cd →"
      />

      <KeyPoints
        label="3 行まとめ"
        items={[
          <>
            北米とアフリカ南部で行われてきた、問題を起こした肉食動物の「捕獲移動」の研究をまとめて見直した論文です
          </>,
          <>
            クマでは、11 件の研究のうち 10 件で、運ばれた個体の <strong>45〜100%</strong> が元の場所へ戻っていました（最大 <strong>229 km</strong>）
          </>,
          <>
            運んだ後の追跡や被害の記録がほとんどなく、<strong>本当に被害が減ったのかは確かめられていない</strong>のが実情でした
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "なぜこの研究が大事なのか" },
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">なぜこの研究が大事なのか</h2>
      <p>
        捕獲移動は、動物を殺さずに済むため、多くの人に受け入れられやすい方法です。
        北米やアフリカ南部では、家畜を襲う個体や人の生活圏に出てくる個体への対応として、長く使われてきました。
      </p>
      <p>
        一方で、「運んだ後、その動物がどうなったのか」「被害は本当に減ったのか」は、あまり確かめられてきませんでした。
        著者らはノルウェーの研究者を中心とするグループで、ヨーロッパでクマなどの大型肉食動物が増えつつあり、
        今後トラブルも増えると考えられることから、この方法を取り入れる前に、これまでの経験を整理しておく必要があると考えました。
      </p>

      <h2 id="overview">研究の概要</h2>
      <p>
        この論文は、新しく野外調査をしたものではなく、すでに発表されていた捕獲移動の研究や記録を集めて見直したものです。
        対象は主に北米と中南米、アフリカ南部の事例で、クマについてはアメリカクロクマの研究 7 件とヒグマの研究 4 件が含まれていました。
        ほかにヒョウ（3 件）、ライオン（2 件）、ジャガー（2 件）などの研究も取り上げられています。
      </p>
      <p>
        見ているのは、主に次のような点です。
      </p>
      <ul>
        <li>運ばれた個体が、元の捕獲場所へ戻ってきたか</li>
        <li>運ばれた後、家畜を襲う・人の生活圏に出るといった行動を再び起こしたか</li>
        <li>運ばれた個体が生き延びたか</li>
      </ul>

      <h2 id="findings">分かったこと</h2>
      <h3>多くのクマが元の場所へ戻っていた</h3>
      <p>
        クマ（アメリカクロクマとヒグマ）の研究 11 件のうち 10 件で、運ばれた個体の <strong>45〜100%</strong> が元の捕獲場所へ戻っていました。
        戻ってきた距離は、最大で <strong>229 km</strong> にのぼります。
        論文の要旨では、大型の肉食動物全体として、<strong>最大 400 km</strong> 離れた場所からでも捕獲場所へ戻る力がくり返し示されている、と述べられています。
      </p>

      <h3>ほかの肉食動物でも、問題行動がくり返された</h3>
      <p>
        クマ以外でも似た結果が報告されています。
        国立公園へ運ばれたヒョウ 8 頭はすぐに公園の外へ出て、一部は再び家畜を襲いました。
        5〜300 km 運ばれたライオン 25 頭（2 件の研究の合計）では、少なくとも 6 頭が再び家畜を襲っています。
      </p>

      <h3>「うまくいったか」を判断する材料が足りなかった</h3>
      <p>
        この論文でとくに大事なのは、運んだ後の追跡がほとんど行われておらず、
        移動させた後に被害がどう変わったかのデータがほぼ無かった、という指摘です。
        つまり、捕獲移動で被害が減ったのかどうかは、そもそも評価できない状態でした。
        また、運ばれた個体の生存率が低かったと示された例もあると述べています。
      </p>

      <h3>著者らの提案</h3>
      <p>
        著者らは、人とのトラブルが起きにくい適当な放獣先が無い場合には、
        捕獲移動に頼るのではなく、そもそもトラブルが起きにくい状態をつくること、
        それが難しい場合は捕獲して処分することも含めて考えるべきだ、としています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          新しい調査ではなく、既存の研究をまとめたものです。元になった研究の多くは追跡期間や記録の取り方がそろっておらず、
          数字は研究ごとにばらつきがあります。
        </li>
        <li>
          対象は主に北米とアフリカ南部の事例で、日本のツキノワグマやヒグマを調べたものではありません。
          地形や人の住み方、クマの密度が違うため、数字をそのまま日本に当てはめることはできません。
        </li>
        <li>
          1997 年の論文で、その後の研究の積み重ねは含まれていません。
        </li>
        <li>
          「捕獲移動は絶対に効かない」と結論づけた論文ではありません。分かったのは、
          戻ってくる例が多いこと、そして効果を確かめるデータが足りなかったことです。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この論文から言えるのは、問題を起こしたクマを別の場所へ運ぶだけでは、
        長く続く解決にならないことが多い、ということです。
        クマが戻ってくれば、同じ場所で同じことがくり返されるおそれがあります。
      </p>
      <p>
        クマが人里に来る理由の一つは、生ごみ、収穫しない果樹、放置された農作物など、
        そこに食べ物があることです。運ぶかどうかの前に、クマを引き寄せるもの（誘引物）を減らすことが大切になります。
      </p>
      <ul>
        <li>生ごみは収集日の朝に出し、屋外に置きっぱなしにしない</li>
        <li>収穫しない柿や栗は早めに取り除く</li>
        <li>畑や家畜の周りには電気柵など、クマを近づけない工夫をする</li>
      </ul>
      <p>
        日本では 2024 年 4 月にクマ類が「指定管理鳥獣」に加わり、国の支援を受けながら地域で計画的に管理を進める仕組みになりました（{" "}
        <Link href="/articles/designated-management-2026">解説記事</Link>
        ）。捕獲をどうするかの判断は自治体が行いますが、誘引物を減らすことは、私たち一人ひとりにもできる対策です。
      </p>
      <p>
        もしクマに出会ってしまったときの行動（走らない・背を向けない・ゆっくり離れる など）は{" "}
        <Link href="/learn/safety">クマ対策の基本</Link>
        にまとめています。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Translocation of carnivores as a method for managing problem animals: a review（本号で紹介した論文）",
            citation: mainCitation,
            href: "https://doi.org/10.1023/B:BIOC.0000034011.05412.cd",
            linkText: "DOI: 10.1023/B:BIOC.0000034011.05412.cd →",
          },
          {
            title: "Conservation Evidence による本論文の要約（英語）",
            citation: <>Conservation Evidence, individual study 863.</>,
            href: "https://conservationevidencejournal.com/individual-study/863",
            linkText: "要約ページを見る →",
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
