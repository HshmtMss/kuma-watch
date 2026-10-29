import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-015")!;

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
        白い毛で海氷の上に暮らすホッキョクグマと、森や草原に暮らすヒグマ。見た目も暮らしも大きく違う
        2 つの種は、いつ分かれ、どのように北極の暮らしに適応したのでしょうか。
      </p>
      <p>
        2014 年に学術誌 <em>Cell</em> に発表された Liu らの研究は、ホッキョクグマとヒグマのゲノム（全遺伝情報）を
        比べ、この問いに答えようとしました。今号ではこの論文の内容を、原典に書かれている範囲で紹介します。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Population genomics reveal recent speciation and rapid evolutionary adaptation in polar bears"
        citation={
          <>
            Liu, S., Lorenzen, E. D., Fumagalli, M., et al. (2014).{" "}
            <em className="not-italic">Cell</em> 157(4): 785–794.
          </>
        }
        href="https://doi.org/10.1016/j.cell.2014.03.054"
        linkText="DOI: 10.1016/j.cell.2014.03.054 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            グリーンランドのホッキョクグマ <strong>79 頭</strong>とヒグマ <strong>10 頭</strong>、計 89 頭のゲノムを解析
          </>,
          <>
            2 種が分かれたのは <strong>約 48 万〜34 万年前</strong>と推定。これまでの多くの推定より新しい
          </>,
          <>
            ホッキョクグマで強い選択を受けた遺伝子には、<strong>心臓・血管</strong>や<strong>脂肪の代謝</strong>に関わるもの（APOB など）が多かった
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "何が分かっていなかったのか" },
          { id: "method", title: "研究の概要" },
          { id: "divergence", title: "分かったこと 1：分かれたのは約 48 万〜34 万年前" },
          { id: "genes", title: "分かったこと 2：心臓・血管と脂肪に関わる遺伝子" },
          { id: "geneflow", title: "分かったこと 3：ヒグマへの遺伝子の流れ" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">何が分かっていなかったのか</h2>
      <p>
        ホッキョクグマとヒグマがいつ分かれたかについては、研究によって推定が大きくばらついていました。
        論文の中では、化石にもとづく推定（約 80 万〜15 万年前）、先行するゲノム研究の推定（約 500 万〜400 万年前）、
        約 60 万年前とする推定などが紹介されています。
      </p>
      <p>
        また、ホッキョクグマは一生の大半を海氷の上で過ごし、アザラシなどの脂肪の多い海獣を食べます。
        論文によると、ホッキョクグマの乳の脂肪分は約 27%、体脂肪は体重の 50% に達することもあります。
        こうした暮らしを支える遺伝的な仕組みも、よく分かっていませんでした。
      </p>

      <h2 id="method">研究の概要</h2>
      <p>
        研究チームは中国（BGI）、デンマーク、米国などの研究者による国際チームです。
      </p>
      <ul>
        <li>
          <strong>ホッキョクグマ 79 頭</strong>：すべてグリーンランド産。北西グリーンランド（ケイン海盆・バフィン湾）と
          中部東グリーンランド（スコアズビー湾周辺）の個体です。うち 18 頭は高い精度、61 頭は低い精度で読み取りました。
        </li>
        <li>
          <strong>ヒグマ 10 頭</strong>：スカンジナビア、米国本土（モンタナ州グレイシャー国立公園の個体を含む）、
          アラスカ沖の ABC 諸島（アドミラルティ島・バラノフ島・チチャゴフ島）の個体です。
        </li>
      </ul>
      <p>
        これらのゲノムの違いのパターンから、過去の個体数の変化も考慮できる 2 つの統計手法を使って、
        2 種が分かれた時期や、その後の遺伝子の行き来を推定しました。さらに、約 2 万個の遺伝子について、
        ホッキョクグマの系統で自然選択を強く受けた形跡があるものを探しました。
      </p>

      <h2 id="divergence">分かったこと 1：分かれたのは約 48 万〜34 万年前</h2>
      <p>
        推定の結果、ホッキョクグマとヒグマが分かれたのは <strong>約 47.9 万〜34.3 万年前</strong>でした。
        先行研究の数百万年前という推定よりずっと新しく、論文はこれを「最近の種分化」と表現しています。
      </p>
      <p>
        論文では、ホッキョクグマが少なくとも約 11 万年前には海の食べ物に適応していたことを示す
        スバールバル諸島の顎の骨の化石にも触れています。分岐の時期と合わせると、北極の暮らしへの適応は
        比較的短い期間に進んだと考えられる、というのが著者らの見方です。
      </p>
      <p>
        また、ホッキョクグマは分岐後に、ヒグマよりも強い（または長い）個体数の減少を経験したと推定され、
        長期的な集団の大きさもヒグマより小さいことが示されました。
      </p>

      <h2 id="genes">分かったこと 2：心臓・血管と脂肪に関わる遺伝子</h2>
      <p>
        ホッキョクグマで強い選択の形跡があった上位の遺伝子を調べると、<strong>上位 16 個のうち 9 個</strong>が
        心筋症・動脈硬化・血管の病気など、心臓や血管の働きに関わるものでした。
        機能のまとまりとしては、心臓の発達、血液の凝固、脂肪組織の発達などが目立ちました。
      </p>
      <p>
        中でも注目されたのが、上位 2 番目の <strong>APOB</strong> です。APOB は、血液中で脂質を運ぶ
        LDL（いわゆる悪玉コレステロールを運ぶ粒子）の主要なたんぱく質を作る遺伝子です。
        ホッキョクグマでは、たんぱく質のアミノ酸を変える変異が <strong>9 か所</strong>で固定していました
        （比較対象のヒグマでは 0 か所）。著者らは、こうした変異が、ホッキョクグマが一生を通じて
        高い LDL 値と付き合える理由を説明するかもしれない、と述べています。
      </p>
      <p>
        このほか、毛の色に関わる可能性がある遺伝子として LYST と AIM1 が挙げられています。
        ただし、これらの変異が実際にどのように働くかは、この論文では実験で確かめられていません。
      </p>

      <h2 id="geneflow">分かったこと 3：ヒグマへの遺伝子の流れ</h2>
      <p>
        分岐したあとも、ホッキョクグマから北米のヒグマへ遺伝子が流れ込んだ形跡が見つかりました。
        ただし解析では、ごく最近の交雑の形跡は見られず、遺伝子の流れは古い時代のものと考えられています。
        その量や時期は手法によって推定が異なります。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          ホッキョクグマはグリーンランドの個体だけ、ヒグマは 10 頭だけです。北極全体や世界のヒグマ全体を代表するものではありません。
        </li>
        <li>
          <strong>北海道のヒグマ（エゾヒグマ）は解析に含まれていません。</strong>
        </li>
        <li>
          分岐の年代は、突然変異の起こる速さや世代の長さなどの仮定にもとづく推定で、幅があります。
        </li>
        <li>
          選択を受けた遺伝子の働きは、主に人などで知られている機能からの推測です。
        </li>
        <li>
          この論文は過去の種分化と適応を扱ったもので、現代の気候変動がホッキョクグマに与える影響を予測した研究ではありません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        日本には、北海道のヒグマと、本州・四国のツキノワグマがいます。この論文は日本のクマを直接扱っていないため、
        結果をそのまま当てはめることはできません。クマ科の系統については{" "}
        <Link href="/articles/bear-phylogeny">クマ科の系統と進化</Link>
        もあわせてご覧ください。
      </p>
      <p>
        一方で、同じ「クマ」でも、暮らす環境によって体の仕組みまで大きく変わりうることを、この研究は示しています。
        地域ごとのクマの性質を知るには、その地域のクマを調べることが欠かせません。
      </p>
      <p>
        クマに出会ったときの基本は、種類にかかわらず同じです。走らない・背を向けない・ゆっくり離れる。
        突進されたら、5〜10m の距離で顔に向けてクマスプレーを 1〜2 秒ずつ噴射します
        （環境省は噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上などの製品を推奨）。
        身を守るための攻撃で接触が避けられないときは、うつ伏せになって首の後ろを守る防御姿勢をとり、
        執拗に襲ってくる場合は反撃します。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Population genomics reveal recent speciation and rapid evolutionary adaptation in polar bears（本号メイン）",
            citation: (
              <>
                Liu, S., Lorenzen, E. D., Fumagalli, M., et al. (2014).{" "}
                <em className="not-italic">Cell</em> 157(4): 785–794.
              </>
            ),
            href: "https://doi.org/10.1016/j.cell.2014.03.054",
            linkText: "DOI: 10.1016/j.cell.2014.03.054 →",
          },
          {
            title: "Polar and brown bear genomes reveal ancient admixture and demographic footprints of past climate change",
            citation: (
              <>
                Miller, W., Schuster, S. C., Welch, A. J., et al. (2012).{" "}
                <em className="not-italic">PNAS</em> 109(36).
              </>
            ),
            href: "https://doi.org/10.1073/pnas.1210506109",
            linkText: "DOI: 10.1073/pnas.1210506109 →",
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
