import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-001")!;

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
      Smith, T. S., Herrero, S., DeBruyn, T. D., &amp; Wilder, J. M. (2008).{" "}
      <em className="not-italic">Journal of Wildlife Management</em> 72(3): 640–645.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        クマスプレーは「持っていると安心」と言われますが、実際に使った場面でどのくらい役に立ったのでしょうか。
        アラスカで実際にスプレーが使われた事例を集めて整理した 2008 年の論文を、抄録（論文の要旨）に書かれている数字をもとに紹介します。
      </p>

      <PaperCard
        label="今号で紹介する論文"
        title="Efficacy of Bear Deterrent Spray in Alaska"
        citation={mainCitation}
        href="https://doi.org/10.2193/2006-452"
        linkText="DOI: 10.2193/2006-452 →"
      />

      <KeyPoints
        label="3 行まとめ"
        items={[
          <>
            アラスカで 1985〜2006 年に起きた <strong>83 件</strong>のクマスプレー使用例を分析した研究です
          </>,
          <>
            スプレーでクマの困った行動が止まった割合は、ヒグマ <strong>92%</strong>・アメリカクロクマ <strong>90%</strong>・ホッキョクグマ <strong>100%</strong>（2 件）でした
          </>,
          <>
            一方で、使った人の <strong>14%</strong> が自分にも刺激などの影響を受けたと報告しています
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        この論文は、米国アラスカ州で <strong>1985 年から 2006 年</strong>までに起きたクマスプレーの使用例を集め、
        まとめて分析したものです。実験ではなく、実際の出来事の記録をあとから整理した研究です。
      </p>
      <p>
        分析の対象は <strong>83 件</strong>。クマの種類ごとの内訳は次のとおりです。
      </p>
      <ul>
        <li>ヒグマ：61 件（74%）</li>
        <li>アメリカクロクマ：20 件（24%）</li>
        <li>ホッキョクグマ：2 件（2%）</li>
      </ul>
      <p>
        このうち、人が<strong>自分の身を守るために</strong>クマへスプレーを使った例は <strong>72 件</strong>で、
        ヒグマ 50 件（69%）、アメリカクロクマ 20 件（28%）、ホッキョクグマ 2 件（3%）でした。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>クマの行動が止まった割合</h3>
      <p>
        論文では、唐辛子成分のスプレーがクマの「困った行動」（人に向かってくる、近づいてくるなど）を止めた割合を種類ごとに示しています。
      </p>
      <ul>
        <li>ヒグマ：<strong>92%</strong></li>
        <li>アメリカクロクマ：<strong>90%</strong></li>
        <li>ホッキョクグマ：<strong>100%</strong>（ただし 2 件のみ）</li>
      </ul>

      <h3>けがをした人</h3>
      <p>
        スプレーを持っていた人のうち <strong>98%</strong> は、近い距離でクマと出会った場面でもクマによるけがをしませんでした。
        身を守るためにスプレーを使った場面でクマにけがをさせられた例は <strong>3 件</strong>で、
        いずれもヒグマによるもの、入院を必要としない比較的軽いけがだったと報告されています。
      </p>

      <h3>風の影響と、使った人への影響</h3>
      <p>
        使用例 71 件のうち <strong>5 件（7%）</strong>で、風がスプレーの狙いを妨げたと報告されました。
        ただし、どの例でもスプレーはクマに届いていました。
      </p>
      <p>
        また、71 件のうち <strong>10 件（14%）</strong>では、使った人自身がスプレーの影響を受けたと報告しています。
        内訳は、軽い刺激が 8 件（11%）、ほとんど動けなくなるほどの影響が 2 件（3%）でした。
      </p>
      <p>
        著者らは、クマスプレーは銃などで殺傷する方法に代わる有効な手段であり、クマのいる地域で遊んだり働いたりする人の身を守る選択肢として考えるべきだとまとめています。
      </p>

      <h3>別の研究：銃を使った場合</h3>
      <p>
        同じ研究グループの一部は、2012 年に<strong>別の論文</strong>で、アラスカで銃が使われたクマとのトラブル 269 件（1883〜2009 年）を分析しています。
        そこでは、クマの攻撃的な行動を止められた割合はライフルや散弾銃などの長い銃で 76%、拳銃で 84% でした。
      </p>
      <p>
        ただし、この 2 本は対象の年代も事例の集め方も違う別々の調査です。数字を並べて「どちらが何ポイント上」と単純に比べることはできません。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>事例の数が多くない</strong>：全体で 83 件、種類ごとではアメリカクロクマ 20 件、ホッキョクグマは 2 件だけです。特にホッキョクグマの「100%」は、2 件とも止まったという意味にすぎません。
        </li>
        <li>
          <strong>実際の出来事を後から集めた研究</strong>です。スプレーを使わなかった場合と同じ条件で比べたものではありません。
        </li>
        <li>
          <strong>地域と種類が違う</strong>：対象はアラスカのヒグマ・アメリカクロクマ・ホッキョクグマで、日本のツキノワグマや北海道のヒグマを直接調べたものではありません。
        </li>
        <li>
          <strong>使った製品や状況はさまざま</strong>です。手元のスプレーで同じ結果になるとは限りません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この論文は日本のクマを調べたものではありませんが、「実際に使われた場面で、多くの場合クマの行動が止まった」という記録は、クマスプレーを持つ意味を考える材料になります。
        同時に、風や、使った人自身への影響があったことも示しています。
      </p>
      <p>日本での基本的な行動は、次のとおりです。</p>
      <ul>
        <li>クマに出会ったら、<strong>走らない・背を向けない</strong>で、クマを見ながら<strong>ゆっくり離れます</strong>。</li>
        <li>
          突進してきたら、クマスプレーを使います。目安は <strong>5〜10m</strong> まで近づいたところで、クマの<strong>顔に向けて 1〜2 秒ずつ</strong>噴射します。
        </li>
        <li>
          環境省はスプレーの目安として、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・カプサイシン類（CRC）1〜2% 程度を挙げています。
        </li>
        <li>
          防衛的な攻撃で接触が避けられないときは、<strong>うつ伏せになり首の後ろを手で守る</strong>防御姿勢をとります。執拗に襲ってくる、捕食しようとするような攻撃のときは反撃します。
        </li>
        <li>風上に向けて噴射すると自分にかかりやすいことも、頭に入れておきましょう。</li>
      </ul>
      <p>
        スプレーの選び方・持ち方は{" "}
        <Link href="/articles/bear-spray">クマよけスプレーの使い方と選び方</Link>、
        持ち運びのルールは{" "}
        <Link href="/articles/spray-travel">クマスプレーの持ち運び</Link>
        にまとめています。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Efficacy of Bear Deterrent Spray in Alaska（本号で紹介した論文）",
            citation: mainCitation,
            href: "https://doi.org/10.2193/2006-452",
            linkText: "DOI: 10.2193/2006-452 →",
          },
          {
            title: "Efficacy of firearms for bear deterrence in Alaska（銃についての別の研究）",
            citation: (
              <>
                Smith, T. S., Herrero, S., Layton, C. S., Larsen, R. T., &amp; Johnson, K. R. (2012).{" "}
                <em className="not-italic">Journal of Wildlife Management</em> 76(5): 1021–1027.
              </>
            ),
            href: "https://doi.org/10.1002/jwmg.342",
            linkText: "DOI: 10.1002/jwmg.342 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>
    </ArticleShell>
  );
}
