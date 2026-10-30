import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-021")!;

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
        イタリア北部、アルプス山脈の南側にあるトレンティーノ自治県では、1990 年代の終わりに
        ヒグマがほとんどいなくなっていました。そこへ隣国スロベニアからヒグマを運んで放す
        <strong>「Life Ursus（ライフ・ウルスス）」</strong>という事業が行われました。
      </p>
      <p>
        クマを「増やす」ための事業ですが、数が増えたあとに何が起きたかは、クマが増えて人里への出没が
        相次いでいる日本にとっても参考になります。今号では、放獣から約 10 年後の状況をまとめた
        Tosi ら（2015）の論文を中心に読み解きます。
      </p>

      <PaperCard
        label="今号で読み解く論文"
        papers={[
          {
            title:
              "Brown bear reintroduction in the Southern Alps: To what extent are expectations being met?",
            citation: (
              <>
                Tosi, G., Chirichella, R., Zibordi, F., Mustoni, A., Giovannini, R., Groff, C.,
                Zanin, M., &amp; Apollonio, M. (2015).{" "}
                <em className="not-italic">Journal for Nature Conservation</em> 26: 9–19.
              </>
            ),
            href: "https://doi.org/10.1016/j.jnc.2015.03.007",
            linkText: "DOI: 10.1016/j.jnc.2015.03.007 →",
          },
        ]}
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            1999〜2002 年に、スロベニアから <strong>10 頭</strong>のヒグマが運ばれ、放たれた
          </>,
          <>
            2012 年には少なくとも <strong>47 頭</strong>、年 <strong>15.6%</strong> のペースで増加
          </>,
          <>
            一方で養蜂・家畜の被害が増え、住民の受け止め方は<strong>歓迎から反対へ</strong>変わった
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "なぜクマを「放す」ことになったのか" },
          { id: "study", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "after", title: "論文のあとに起きたこと" },
          { id: "limits", title: "限界・注意" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">なぜクマを「放す」ことになったのか</h2>
      <p>
        トレンティーノは北緯 46 度前後にあり、北海道の最北端（北緯 45 度半ば）よりもさらに北に位置します。
        アルプスの森が広がる山岳地帯です。
      </p>
      <p>
        計画段階の論文（Mustoni ら 2003）によると、ヒグマはかつてイタリアのアルプス一帯に広く
        分布していましたが、18〜19 世紀からの森林伐採や駆除によって各地で姿を消しました。
        最後に残ったアダメッロ・ブレンタ山地の集団も、1989 年以降は<strong>繁殖しない 3 頭</strong>だけとなり、
        生物学的には絶滅した状態とみなされていました。
      </p>
      <p>
        Mustoni らは、外からクマを補う「再導入」が回復に最も適した方法だと結論しました。
        20 年分の生息記録をもとに地図上で分析したところ、クマは落葉樹林を好み、馬や羊の放牧が盛んな場所・
        岩場・農地・市街地を避けていました。あわせて、住民の意識調査と教育を広く行う必要性も強調しています。
        この計画が Life Ursus 事業として実行に移されました。
        なお、イタリア中部のアペニン山脈には、アルプスとは別のヒグマの集団が今も生き残っています。
      </p>

      <h2 id="study">研究の概要</h2>
      <ul>
        <li>
          <strong>どこで</strong>：トレンティーノ自治県（アダメッロ・ブレンタ自然公園の周辺）
        </li>
        <li>
          <strong>何を</strong>：1999〜2002 年にスロベニアから運ばれた 10 頭と、その子孫たち
        </li>
        <li>
          <strong>どう調べたか</strong>：電波発信器付きの首輪（ラジオテレメトリー）による追跡、
          目撃や痕跡の記録、被害や捕獲・除去の記録、住民への聞き取り
        </li>
        <li>
          <strong>問い</strong>：事業を始めたときの期待（クマが定着して増える、地域に受け入れられる）は
          どこまで達成されているか
        </li>
      </ul>

      <h2 id="findings">分かったこと</h2>
      <h3>数は順調に増えた</h3>
      <p>
        2002〜2012 年の間に <strong>34 回の出産</strong>が確認され、生まれた子グマは
        合計 <strong>74 頭</strong>。2012 年時点で少なくとも <strong>47 頭</strong>がいると
        数えられました。増加率は年 <strong>15.6%</strong> で、死亡も多く、2013 年と 2014 年には
        少なくとも 2 頭が違法に殺されていたにもかかわらず、高い伸びでした。
      </p>
      <p>
        生息密度や、若い雄が遠くへ分散していく様子、繁殖の力は、ヨーロッパの他のヒグマ集団と
        同じ程度だったと報告されています。このままの傾向なら、2017 年には 60〜94 頭になると
        見込まれていました。
      </p>

      <h3>被害と「問題グマ」</h3>
      <p>
        数が増えるにつれて、ミツバチの巣箱や家畜の被害が増えました。被害の多くは、
        一部の限られた個体によるものでした。人が軽いけがを負った襲撃が 1 件あり、
        接触はないものの危険を感じる場面も何度か報告されています。こうした問題を起こした
        クマのうち 3 頭は、その地域から取り除かれました。
      </p>

      <h3>住民の受け止め方が変わった</h3>
      <p>
        事業の始まりには住民の多くがクマの復活を受け入れていましたが、数が増え、問題グマの
        出来事が続くと、反対の声が大きくなっていきました。著者らは、
        <strong>問題グマをきちんと管理することが、社会の受け入れを取り戻す鍵になる</strong>
        とまとめています。
      </p>

      <h2 id="after">論文のあとに起きたこと</h2>
      <p>
        論文の発表後も、トレンティーノでは個々のクマをめぐる出来事が大きく報じられました。
      </p>
      <ul>
        <li>
          <strong>M49</strong>：捕獲されたあと、トレント近郊の収容施設カステッレールから 2019 年と
          2020 年の 2 度逃げ出しました。2020 年 7 月の 2 度目の逃走では、国の研究機関 ISPRA が
          現地を調べ、金網の一部が破られていたと報告しています。
        </li>
        <li>
          <strong>JJ4</strong>：2023 年 4 月、ジョギング中の 26 歳の男性が山中でクマに襲われて
          亡くなりました。DNA 鑑定で雌グマ JJ4 と特定され、同月に捕獲されました。
          その扱いをめぐっては、県の殺処分の決定に対して裁判で争われるなど、議論が続きました。
        </li>
      </ul>
      <p>
        どちらも、少数のクマの行動が地域全体の受け止め方を大きく左右する、という論文の指摘と
        重なる出来事です。
      </p>

      <h2 id="limits">限界・注意</h2>
      <ul>
        <li>
          数字は 2012 年までの調査にもとづくもので、その後の頭数はこの論文からは分かりません。
        </li>
        <li>
          「少なくとも 47 頭」は確認できた個体を数えた最小値で、実際の頭数はこれより多い可能性があります。
        </li>
        <li>
          対象はヨーロッパのヒグマで、数頭からやり直した小さな集団です。日本のツキノワグマや
          北海道のヒグマとは、種・頭数・土地の使われ方が大きく異なります。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        日本ではクマを放して増やす事業は行われていませんが、この研究からは控えめに次のことが読み取れます。
      </p>
      <ul>
        <li>
          クマが増えると、人との軋轢も増えやすい。そして、その多くは一部の個体が起こしている。
        </li>
        <li>
          人里に慣れた個体への対応を早めに決めておくことが、地域の安心と受け入れにつながる。
          日本でもクマは 2024 年 4 月に指定管理鳥獣に加えられ、管理の仕組みづくりが進んでいます。
        </li>
      </ul>
      <p>
        出会ってしまったときの基本は、どこでも同じです。走らない・背を向けない・ゆっくり離れる。
        突進してきたらクマスプレー（環境省の推奨要件は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・
        カプサイシン類 1〜2% 程度。5〜10m まで近づいたら顔に向けて 1〜2 秒ずつ噴射）。
        身を守るための攻撃で接触が避けられなければ、うつ伏せになって首の後ろを守る防御姿勢をとり、
        執拗に襲ってくる・捕食しようとする攻撃なら反撃します。詳しくは
        <Link href="/learn/safety">クマ対策の基本</Link>をご覧ください。
        駆除をめぐる考え方は<Link href="/articles/culling-debate">駆除をめぐる議論</Link>でまとめています。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Brown bear reintroduction in the Southern Alps: To what extent are expectations being met?（本号メイン）",
            citation: (
              <>
                Tosi, G., Chirichella, R., Zibordi, F., Mustoni, A., Giovannini, R., Groff, C.,
                Zanin, M., &amp; Apollonio, M. (2015).{" "}
                <em className="not-italic">Journal for Nature Conservation</em> 26: 9–19.
              </>
            ),
            href: "https://doi.org/10.1016/j.jnc.2015.03.007",
            linkText: "DOI: 10.1016/j.jnc.2015.03.007 →",
          },
          {
            title:
              "Planning the Brown Bear Ursus arctos reintroduction in the Adamello Brenta Natural Park. A tool to establish a metapopulation in the Central-Eastern Alps",
            citation: (
              <>
                Mustoni, A., Carlini, E., Chiarenzi, B., Chiozzini, S., Lattuada, E., Dupré, E.,
                Genovesi, P., Pedrotti, L., Martinoli, A., Preatoni, D., Wauters, L. A., &amp; Tosi, G.
                (2003). <em className="not-italic">Hystrix, the Italian Journal of Mammalogy</em> 14(1-2).
              </>
            ),
            href: "https://doi.org/10.4404/hystrix-14.1-2-4313",
            linkText: "DOI: 10.4404/hystrix-14.1-2-4313 →",
          },
          {
            title: "Second escape of the M49 bear（ISPRA, 2020 年 7 月）",
            href: "https://www.isprambiente.gov.it/en/archive/news-and-other-events/ispra-news/2020/07/second-escape-of-the-m49-bear",
            linkText: "isprambiente.gov.it →",
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
