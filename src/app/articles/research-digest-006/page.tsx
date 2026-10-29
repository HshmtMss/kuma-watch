import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-006")!;

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
        クマは「雑食性で何でも食べる」と紹介されます。では、食べ物を自由に選べるとき、クマは何をどれだけ組み合わせて食べるのでしょうか。
        飼育下のヒグマでこの問いを調べた研究を紹介します。
      </p>
      <p>
        クマが何を求めて食べ物を選ぶのかを知ることは、人里の食べ物がなぜクマを引き寄せるのかを考える手がかりになります。
        今号では、論文の要旨で確認できる内容に沿って紹介し、日本のツキノワグマにそのまま当てはめられない点もあわせて整理します。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Macronutrient optimization and energy maximization determine diets of brown bears"
        citation={
          <>
            Erlenbach, J. A., Rode, K. D., Raubenheimer, D., &amp; Robbins, C. T. (2014).{" "}
            <em className="not-italic">Journal of Mammalogy</em> 95(1): 160–168.
          </>
        }
        href="https://doi.org/10.1644/13-MAMM-A-161"
        linkText="DOI: 10.1644/13-MAMM-A-161 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            消化しやすい餌を 2〜3 種類、好きなだけ選べる条件で、飼育下のヒグマは
            <strong>タンパク質が代謝エネルギーの約 17%</strong> になる組み合わせを選んだ
          </>,
          <>
            このタンパク質の割合は、<strong>食べたエネルギーあたりの体重の増え方が最も大きくなる</strong>水準だった
          </>,
          <>
            タンパク質以外のエネルギー源としては、<strong>炭水化物より脂質を強く好んだ</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "wild", title: "野生のクマについての関連研究" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        この研究は、米国ワシントン州立大学の Robbins 博士らのグループが、飼育しているヒグマ（<em>Ursus arctos</em>）を対象に行ったものです。
        野生では、クマが「何を選んだか」と「その場に何があったか」を切り分けるのが難しいため、
        餌の条件をそろえられる飼育下で調べています。
      </p>
      <p>
        クマには、消化しやすい餌を <strong>2 種類または 3 種類</strong>、量の制限なしで同時に与えました。
        それぞれの餌は、タンパク質・炭水化物・脂質のどれかが多いものです。
        クマが自分で選んで食べた量から、食事全体の栄養の割合を計算しました。
        季節による違いを見るため、春と秋の比較も行っています。
      </p>

      <h2 id="findings">分かったこと</h2>
      <p>
        論文の要旨によると、主な結果は次のとおりです。
      </p>
      <ul>
        <li>
          クマが選んだ食事では、<strong>タンパク質が代謝エネルギー（体が実際に利用できるエネルギー）の 17%（標準偏差 ±4%）</strong>、
          乾物重量の 22%（±6%）を占めていました。
        </li>
        <li>
          このタンパク質の水準は、<strong>食べたエネルギーあたりの体重の増え方（増体）が最も大きくなる</strong>水準でした。
          つまり、クマは同じエネルギーを食べたときに最も効率よく太れる組み合わせを選んでいたことになります。
        </li>
        <li>
          この割合は、ほかの雑食動物が好む水準に近く、肉食に特化した動物（完全肉食動物）が好む水準より低いものでした。
        </li>
        <li>
          タンパク質の割合は春と秋でほぼ同じでしたが、<strong>秋のほうが脂質の割合が高く</strong>なっていました。
        </li>
        <li>
          クマは <strong>炭水化物より脂質を強く好みました</strong>。
          ただし、タンパク質を目標の割合まで薄めるという点では、脂質と炭水化物を同じくらい効率よく使っていました。
        </li>
      </ul>
      <p>
        ここでいう 17% は、<strong>エネルギーに占める割合</strong>です。
        食べ物の重さに占めるタンパク質の割合（食品の成分表に載っている「100 g あたり何 g」）とは別の物差しなので、
        食品の成分の数字と直接比べることはできません。
      </p>
      <p>
        著者らは、クマの食事は「タンパク質を一定の割合に保つこと」と「エネルギーの獲得を大きくすること」の両方で決まっている、とまとめています。
      </p>

      <h2 id="wild">野生のクマについての関連研究</h2>
      <p>
        同じ 2014 年、Coogan らは、カナダ・アルバータ州西部のグリズリー（ヒグマ）について、
        既存の食性データと、食べ物ごとの栄養成分の推定値（主に米国農務省のデータベースなど）を組み合わせ、
        どんな食べ物の組み合わせなら上の「タンパク質 17%」に近づけるかをモデルで検討しました。
        これは胃の内容物を分析した研究ではなく、食べ物の成分にもとづく計算です。
      </p>
      <p>
        その結果、この地域の食べ物の多くはタンパク質に比べて脂質・炭水化物が少なく、
        シカなどの有蹄類の死体を食べるだけではタンパク質が多すぎること、
        <strong>果実が手に入る時期には、果実を混ぜることで目標の割合に近づける</strong>ことが示されました。
        秋に果実がなければ、目標の割合には届きにくいとしています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          飼育下の実験で、与えられたのは消化しやすい少数の餌です。野生のクマは、食べ物を探す手間や、食べ物の量・季節の変化の中で選んでいます。
          飼育下で選んだ割合が、野生でそのまま実現されているとは限りません。
        </li>
        <li>
          対象は北米のヒグマです。日本のツキノワグマで同じ割合が当てはまるかは、この論文では調べられていません。
        </li>
        <li>
          この論文は、クマが人里に出てくる理由や、特定の果樹・農作物を狙う理由を調べたものではありません。
        </li>
        <li>
          関連研究の Coogan らは、成分の推定値にもとづくモデル研究であり、野生のクマが実際に何をどれだけ食べたかを直接測ったものではありません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究から言えるのは、クマが「手に入るものを何でも同じように食べる」のではなく、
        栄養の組み合わせを選び、エネルギーを効率よく得ようとする動物だということです。
        特に、脂質や炭水化物のようにエネルギーになりやすい食べ物は、クマにとって価値が高いと考えられます。
      </p>
      <p>
        ただし、日本のツキノワグマがどの食べ物を、どんな理由で選んでいるのかは、この論文からは分かりません。
        そのうえで、一般的な対策として次のことは変わりません。
      </p>
      <ul>
        <li>生ごみ・ペットフード・米ぬかなどを屋外に置かない。収穫しない果実や落ちた果実は早めに片付ける。</li>
        <li>
          クマに出会ったら、走らない・背を向けない・ゆっくり離れる。突進されたら、クマスプレーを 5〜10m の距離で顔に向けて 1〜2 秒ずつ噴射する
          （環境省が示す目安は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・CRC 1〜2% 程度の製品）。
        </li>
        <li>
          防衛的な攻撃で接触が避けられないときは、うつ伏せになり首の後ろを手で守る。執拗に攻撃が続く、捕食的な攻撃のときは反撃する。
        </li>
      </ul>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Macronutrient optimization and energy maximization determine diets of brown bears（本号メイン）",
            citation: (
              <>
                Erlenbach, J. A., Rode, K. D., Raubenheimer, D., &amp; Robbins, C. T. (2014).{" "}
                <em className="not-italic">Journal of Mammalogy</em> 95(1): 160–168.
              </>
            ),
            href: "https://doi.org/10.1644/13-MAMM-A-161",
            linkText: "DOI: 10.1644/13-MAMM-A-161 →",
          },
          {
            title:
              "Macronutrient optimization and seasonal diet mixing in a large omnivore, the grizzly bear: a geometric analysis",
            citation: (
              <>
                Coogan, S. C. P., Raubenheimer, D., Stenhouse, G. B., &amp; Nielsen, S. E. (2014).{" "}
                <em className="not-italic">PLoS ONE</em> 9(5): e97968.
              </>
            ),
            href: "https://doi.org/10.1371/journal.pone.0097968",
            linkText: "DOI: 10.1371/journal.pone.0097968 →",
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
