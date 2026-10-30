import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-004")!;

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
      Pigeon, K. E., Stenhouse, G., &amp; Côté, S. D. (2016).{" "}
      <em className="not-italic">Behavioral Ecology and Sociobiology</em> 70(10): 1745–1754.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        クマが冬ごもりの巣穴に入る日と、春に出てくる日は、毎年同じではありません。
        では、その時期は何によって決まるのでしょうか。カナダのグリズリー（ヒグマ）を長年追跡したデータから、
        「巣穴に入る時期」と「出てくる時期」を左右する要因を調べた 2016 年の論文を、抄録（論文の要旨）に書かれている内容をもとに紹介します。
      </p>

      <PaperCard
        label="今号で紹介する論文"
        title="Drivers of hibernation: linking food and weather to denning behaviour of grizzly bears"
        citation={mainCitation}
        href="https://doi.org/10.1007/s00265-016-2180-5"
        linkText="DOI: 10.1007/s00265-016-2180-5 →"
      />

      <KeyPoints
        label="3 行まとめ"
        items={[
          <>
            グリズリー <strong>73 頭</strong>（オス 15・メス 58）の <strong>11 年分</strong>のデータで、巣穴に入る日・出る日を左右する要因を調べた研究です
          </>,
          <>
            巣穴に入る時期には天気の影響が見られず、<strong>秋の木の実（ベリー類）が多い年ほど遅く</strong>入っていました
          </>,
          <>
            巣穴から出る時期には天気が関わり、春の最高気温（月平均）が <strong>4°C 高いと約 10 日早く</strong>出ていました
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "sweden", title: "スウェーデンのヒグマの研究では" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        著者らは、カナダ・アルバータ州でグリズリーの調査を続けている研究プログラム（fRI Research）に関わる研究者です。
        この論文では <strong>11 年分</strong>のデータを使い、オス <strong>15 頭</strong>・メス <strong>58 頭</strong>のグリズリーについて、
        巣穴に入った日（入穴日）と巣穴から出た日（出穴日）のばらつきが、何でどのくらい説明できるかを調べました。
      </p>
      <p>調べた要因は、主に次の 3 つです。</p>
      <ul>
        <li>クマの性別と繁殖の状態（子連れかどうか など）</li>
        <li>天気（気温や降雪など）</li>
        <li>秋に食べられる木の実（ベリー類）の量</li>
      </ul>
      <p>
        木の実の量は、ベリー類がどこでどのくらい実るかを推定した地図をもとに、<strong>13 頭</strong>の行動圏について <strong>3 年分</strong>を見積もっています。
        つまり、木の実の分析に使えたのは全体の一部の個体・年に限られます。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>性別・繁殖の状態</h3>
      <p>
        性別と繁殖の状態で説明できたのは、入穴日のばらつきの <strong>22%</strong>、出穴日のばらつきの <strong>14%</strong> でした。
        オスかメスか、子連れかどうかなどで、冬ごもりの時期にある程度の違いがあるということです。
      </p>

      <h3>巣穴に入る時期は「秋の食べ物」</h3>
      <p>
        入穴の時期には、<strong>天気の影響は見られませんでした</strong>。
        一方、秋のベリー類の量は入穴日のばらつきの <strong>39%</strong> を説明し、
        <strong>ベリー類が多いほど巣穴に入るのが遅くなる</strong>関係がありました。
      </p>

      <h3>巣穴から出る時期は「春の天気」</h3>
      <p>
        出穴の時期には天気が関わっていました。標高と春の気温で出穴日のばらつきの <strong>26%</strong>、
        標高と冬の降水（降雪）で <strong>21%</strong> を説明できました。
      </p>
      <ul>
        <li>春の最高気温（月ごとの平均）が <strong>4°C 高い</strong>と、巣穴から出るのが<strong>約 10 日早く</strong>なっていました。</li>
        <li>降雪が <strong>1.25m 多い</strong>と、出るのが<strong>約 1 週間遅く</strong>なっていました。</li>
      </ul>
      <p>
        著者らは、入穴は食べ物の量に、出穴は天気により強く結びついているとまとめています。
        そのうえで、植物の育つ期間が長くなり、穏やかな気候が増えれば、グリズリーが巣穴で過ごす期間は短くなるだろうと述べています。
        これは今回のデータから考えた<strong>見通し</strong>で、冬ごもりの期間が年々短くなっていることを確かめた研究ではありません。
      </p>

      <h2 id="sweden">スウェーデンのヒグマの研究では</h2>
      <p>
        同じ 2016 年には、スウェーデン中南部のヒグマを調べた別の研究（Evans ら）も発表されています。
        野生のヒグマ <strong>14 頭</strong>（オス 8・メス 6）に体温や心拍を記録する機器を付け、<strong>3 冬</strong>にわたって体の変化を追ったものです。
      </p>
      <ul>
        <li>
          巣穴に入ったのは 10〜11 月（中央値 10 月 30 日）で、雪が積もり始め、気温が平均約 1°C のころでした。
          暖かい冬のほうが入穴が遅く、冬ごもりも短い関係が見られたと報告されています。
        </li>
        <li>
          巣穴から出たのは 3 月下旬〜5 月上旬（中央値 4 月 6 日）でした。
          体温は出穴の約 2 か月前から上がり始めており、出穴日と外の気温との間にははっきりした関係は見られませんでした。
        </li>
      </ul>
      <p>
        著者らは、冬ごもりの始まりは周りの環境が、終わりは体の状態がきっかけになっているのではないかと考えています。
        カナダの研究とは「どちらの時期に何が効くか」の結果が異なっており、
        地域・調べ方・個体数によって答えが変わりうることが分かります。どちらか一方が正しいと決められる段階ではありません。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>説明できたのは一部</strong>：たとえば木の実で説明できたのは入穴日のばらつきの 39% です。残りは今回調べた要因以外で決まっています。
        </li>
        <li>
          <strong>木の実のデータは限られる</strong>：ベリー類の量を見積もれたのは 13 頭・3 年分だけです。
        </li>
        <li>
          <strong>関係を見た研究</strong>：気温を人為的に変えた実験ではなく、年ごと・個体ごとの違いを比べたものです。
        </li>
        <li>
          <strong>地域とクマの種類が違う</strong>：対象はカナダのグリズリーで、主な食べ物も気候も日本とは異なります。
          日本のツキノワグマや北海道のヒグマにそのまま当てはまるとは言えません。
        </li>
        <li>
          本記事は主に論文の抄録にもとづいており、本文の細かな条件までは紹介していません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この論文は日本のクマを調べたものではありません。ただ、「冬ごもりの時期は毎年同じではなく、秋の食べ物や春の天気で前後しうる」という考え方は、
        日本でも参考になります。カレンダーの日付だけで「もう冬ごもりしたはず」「まだ出てこないはず」と決めつけないことが大切です。
      </p>
      <p>
        晩秋や早春に山や里に出るときは、地域の出没情報を確かめましょう。くまウォッチの{" "}
        <Link href="/">地図</Link>でも、最近の出没情報を確認できます。
      </p>
      <p>クマに出会ったときの基本的な行動は、次のとおりです。</p>
      <ul>
        <li>
          <strong>走らない・背を向けない</strong>で、クマを見ながら<strong>ゆっくり離れます</strong>。
        </li>
        <li>
          突進してきたら、クマスプレーを使います。目安は <strong>5〜10m</strong> まで近づいたところで、クマの<strong>顔に向けて 1〜2 秒ずつ</strong>噴射します。
          環境省はスプレーの目安として、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・カプサイシン類（CRC）1〜2% 程度を挙げています。
        </li>
        <li>
          防衛的な攻撃で接触が避けられないときは、<strong>うつ伏せになり首の後ろを手で守る</strong>防御姿勢をとります。
          執拗に襲ってくる、捕食しようとするような攻撃のときは反撃します。
        </li>
      </ul>
      <p>
        出没を見かけたときの連絡先は{" "}
        <Link href="/articles/bear-report">通報マニュアル</Link>
        にまとめています。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Drivers of hibernation: linking food and weather to denning behaviour of grizzly bears（本号で紹介した論文）",
            citation: mainCitation,
            href: "https://doi.org/10.1007/s00265-016-2180-5",
            linkText: "DOI: 10.1007/s00265-016-2180-5 →",
          },
          {
            title: "Drivers of hibernation in the brown bear（スウェーデンの研究）",
            citation: (
              <>
                Evans, A. L., Singh, N. J., Friebe, A., Arnemo, J. M., Laske, T. G., Fröbert, O., Swenson, J. E., &amp; Blanc, S. (2016).{" "}
                <em className="not-italic">Frontiers in Zoology</em> 13: 7.
              </>
            ),
            href: "https://doi.org/10.1186/s12983-016-0140-6",
            linkText: "DOI: 10.1186/s12983-016-0140-6 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
