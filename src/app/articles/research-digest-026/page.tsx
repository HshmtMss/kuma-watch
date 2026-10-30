import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-026")!;

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
      Pagano, A. M., Durner, G. M., Rode, K. D., Atwood, T. C., Atkinson, S. N., Peacock, E., Costa, D. P., Owen, M. A., &amp;
      Williams, T. M. (2018).{" "}
      <em className="not-italic">Science</em> 359(6375): 568–572.
    </>
  );

  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        野生のクマが 1 日にどれだけのエネルギーを使い、どれだけ食べればやっていけるのか。
        身近なようでいて、野外で実際に測るのはとても難しい問題です。
      </p>
      <p>
        今号は、北極の海氷の上で暮らすホッキョクグマの雌 9 頭について、
        <strong>1 日のエネルギー消費量（野外代謝量）</strong>と行動、体重の変化を同時に測った研究を紹介します。
        2018 年に Science 誌に掲載された論文です。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="High-energy, high-fat lifestyle challenges an Arctic apex predator, the polar bear"
        citation={mainCitation}
        href="https://doi.org/10.1126/science.aan8677"
        linkText="DOI: 10.1126/science.aan8677 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            春の海氷上のホッキョクグマ（雌 9 頭）の野外代謝量は、平均で<strong>それまでの想定の約 1.6 倍</strong>（1 日あたり約 12,300 kcal）でした
          </>,
          <>
            収支を保つだけでも、<strong>10〜12 日ごとに成獣のワモンアザラシ 1 頭</strong>（または亜成獣 3 頭、生まれたての子 19 頭）を食べる必要があると見積もられました
          </>,
          <>
            8〜11 日の調査期間中に<strong>半数を超えるクマが体重を減らし</strong>、うち 4 頭は体重の 10% 以上を失っていました
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why", title: "なぜエネルギー消費を測るのか" },
          { id: "method", title: "研究の概要 — 9 頭を 8〜11 日間" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界・注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="why">なぜエネルギー消費を測るのか</h2>
      <p>
        ホッキョクグマは、クマの仲間のなかで最も肉食に偏り、海氷の上でアザラシなどの海獣を狩って暮らしています。
        論文の序論によると、北極の海氷の最小面積は <strong>10 年あたり 14%</strong> の割合で減っており、
        春の氷の崩壊は早まり、秋の結氷は遅くなっています。
      </p>
      <p>
        海氷の減少がホッキョクグマの体の状態や生存率の低下につながる、という報告はそれまでもありました。
        ただ、その「しくみ」を説明するのに必要な、<strong>海氷の上で活動しているクマの実際のエネルギー消費量</strong>は、
        測られたことがありませんでした。それまでのモデルでは、待ち伏せ型の狩りをすることなどから、
        消費量は比較的低いと仮定されていたと論文は説明しています。
      </p>

      <h2 id="method">研究の概要 — 9 頭を 8〜11 日間</h2>
      <p>
        米国地質調査所（USGS）などの研究チームは、2014〜2016 年の 4 月に、アラスカ北方の
        <strong>ボーフォート海</strong>の海氷上で雌のホッキョクグマ 9 頭を調べました。
      </p>
      <ul>
        <li>
          <strong>二重標識水法</strong>：体内に入れた安定同位体の減り方から、8〜11 日間のエネルギー消費量（野外代謝量）を求める方法です。
        </li>
        <li>
          <strong>GPS とビデオカメラ付きの首輪</strong>：位置と、クマ目線の映像（狩りや食事のようす）を記録しました。
        </li>
        <li>
          <strong>加速度センサーなどの記録計</strong>：歩く・泳ぐ・休むといった行動を記録しました。
        </li>
        <li>
          <strong>再捕獲時の測定</strong>：体重、体組成（脂肪と脂肪以外）、血液の成分を調べ、食べられていたかどうかを確かめました。
        </li>
      </ul>
      <p>
        あわせて、飼育下の成獣の雌 1 頭で、安静時の代謝量も測っています。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>エネルギー消費は想定の約 1.6 倍</h3>
      <p>
        9 頭の 1 日あたりの野外代謝量は、平均 <strong>51.6 MJ（約 12,325 kcal）</strong>でした。
        これは、それまでホッキョクグマについて仮定されていた値の平均 <strong>1.6 倍</strong>（個体によって 1.0〜2.6 倍）にあたります。
        一方で、同じくらいの体の大きさの肉食哺乳類から予測される値とはおおむね同じ水準でした。
      </p>
      <p>
        消費量は、体重が重いほど、よく動き回るほど大きくなっていました。
        たとえば、平均の移動速度が時速 1.0 km 以上だった 3 頭は、それより遅い 6 頭に比べて代謝量が約 1.5 倍でした。
        論文は、基礎的な代謝・移動・活動がエネルギー消費の主な要因だとしています。
      </p>

      <h3>収支を保つにはアザラシが 10〜12 日ごとに 1 頭</h3>
      <p>
        測った代謝量から計算すると、春の海氷上で単独で暮らす雌が収支をとんとんに保つには、平均して
        <strong>10〜12 日ごとに、ワモンアザラシの成獣 1 頭、亜成獣 3 頭、または生まれたての子 19 頭</strong>
        のいずれかを食べる必要があると見積もられました。
        これは「やせない」ための量であり、夏に向けて脂肪をたくわえるには、さらに多く食べるか、消費を抑える必要があります。
      </p>

      <h3>半数を超えるクマが体重を減らした</h3>
      <p>
        映像から、狩りの 90% は待ち伏せ、残り 10% は忍び寄りでした。
        成獣か亜成獣のワモンアザラシを仕留めて食べたクマは体重を増やすか保っていた一方、
        死体をあさるだけだったクマや、食べた形跡がなかったクマは体重を減らしていました。
      </p>
      <p>
        9 頭のうち半数を超えるクマ（USGS などの発表によれば 5 頭）が体重を減らし、
        <strong>4 頭は 8〜11 日間で体重の 10% 以上</strong>を失っていました。
        この 4 頭の減り方は平均で 1 日あたり体重の約 1%（約 1.95 kg）で、陸上で絶食しているホッキョクグマについて報告された値の約 4 倍（割合で比較）でした。
      </p>

      <h3>行動の内訳</h3>
      <p>
        加速度センサーの記録（6 頭）では、休息以外の活動に使っていた時間は平均 34%、
        歩いていた時間は 28%、泳いでいた時間は 0.3% でした。
      </p>

      <h3>著者らの結論</h3>
      <p>
        著者らは、エネルギー需要がもともと高いため、海氷が減って細かく割れることで移動や活動が増えると、
        エネルギー収支がさらに厳しくなり、繁殖や個体群に悪い影響が及ぶ可能性が高いと述べています。
        また、ボーフォート海の成獣の雌のうち、2000〜2016 年の春に捕獲された個体の 42% が捕獲前 7 日以上食べていなかったという先行研究を挙げ、
        夏の開水面期より前の春の時点ですでに、氷の状態が獲物の得やすさに影響している可能性を指摘しています。
      </p>

      <h2 id="limits">限界・注意点</h2>
      <ul>
        <li>
          対象は <strong>雌 9 頭</strong>、期間は <strong>1 頭あたり 8〜11 日</strong>、季節は <strong>4 月</strong>だけです。
          雄や子連れの雌、ほかの季節・地域にそのまま当てはまるとは限りません。
        </li>
        <li>
          捕獲後しばらくは活動が落ちる（回復に 2〜3 日かかる可能性がある）ため、著者ら自身が、
          測った代謝量や活動量は <strong>控えめな値</strong>と考えるべきだとしています。
        </li>
        <li>
          「それまでの想定の 1.6 倍」は、過去にホッキョクグマについて仮定されていた値との比較です。
          ほかの肉食哺乳類と比べて特別に高いという意味ではありません。
        </li>
        <li>
          ホッキョクグマは海獣を主食とする特殊なクマです。木の実なども食べる日本のツキノワグマ・ヒグマとは、食べ物も暮らし方も大きく異なります。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究は北極のホッキョクグマを調べたもので、日本のクマについて直接何かを示すものではありません。
        それでも、「クマの行動を、食べ物から得るエネルギーと動き回って使うエネルギーの収支として見る」という視点は、
        クマを理解するうえで参考になります。首輪型カメラと二重標識水法を組み合わせた手法も、野生動物の暮らしを測る方法の一例です。
      </p>
      <p>
        日本でクマに出会ったときの基本の行動は、次のとおりです。
      </p>
      <ul>
        <li>
          <strong>走らない・背を向けない</strong>。クマを見ながら、<strong>ゆっくりその場を離れます</strong>。
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

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "High-energy, high-fat lifestyle challenges an Arctic apex predator, the polar bear（本号で紹介した論文）",
            citation: mainCitation,
            href: "https://doi.org/10.1126/science.aan8677",
            linkText: "DOI: 10.1126/science.aan8677 →",
          },
          {
            title: "High-energy, high-fat lifestyle challenges an Arctic apex predator, the polar bear（USGS の論文紹介ページ）",
            citation: <>U.S. Geological Survey, Alaska Science Center.</>,
            href: "https://www.usgs.gov/publications/high-energy-high-fat-lifestyle-challenges-arctic-apex-predator-polar-bear",
            linkText: "USGS →",
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
