import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-023")!;

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
        クマは「ゆっくり増える」動物だとよく言われます。では、実際にはどのくらいの年齢で子を産み、
        子グマはどのくらい生き残り、何が個体数の増減を左右しているのでしょうか。
      </p>
      <p>
        今号は、米国イエローストーン周辺のグリズリー（ヒグマ）を、首輪発信機で約 20 年追跡したデータから
        繁殖と生存を推定した研究をご紹介します。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title={
          <>
            Temporal, spatial, and environmental influences on the demographics of grizzly bears in the Greater Yellowstone Ecosystem
          </>
        }
        citation={
          <>
            Schwartz, C. C., Haroldson, M. A., White, G. C., Harris, R. B., Cherry, S., Keating, K. A., Moody, D., &amp; Servheen, C. (2006).{" "}
            <em className="not-italic">Wildlife Monographs</em> 161: 1–68.
          </>
        }
        href="https://doi.org/10.2193/0084-0173(2006)161%5B1:TSAEIO%5D2.0.CO;2"
        linkText="DOI link →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            初めて出産するメスの年齢は平均 <strong>5.81 歳</strong>（4〜7 歳）、1 腹の子は平均 <strong>約 2 頭</strong>
          </>,
          <>
            子グマ・1 歳グマの生存は<strong>住んでいる場所</strong>で差があり、保護区の外ほど低かった
          </>,
          <>
            自立したクマの死因が分かった例の <strong>85.5%</strong> は人が原因。個体数を左右するのは<strong>大人のメスの生存</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "reproduction", title: "分かったこと 1：繁殖" },
          { id: "young", title: "分かったこと 2：子グマと 1 歳グマ" },
          { id: "adults", title: "分かったこと 3：自立したクマの生存" },
          { id: "population", title: "分かったこと 4：個体数の増減" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        舞台はイエローストーン国立公園とその周辺に広がる「グレーター・イエローストーン生態系（GYE）」です。
        論文によると、この地域のグリズリーは過去 20 年ほどで数が増え、分布も広がっていました。
        著者らは、その変化に何が効いていたのかを知るために、首輪発信機を付けたクマのデータを使いました。
      </p>
      <ul>
        <li>
          <strong>繁殖</strong>：1983〜2002 年。3 歳を超える大人のメス 108 頭を、のべ 329 頭・年にわたって観察
        </li>
        <li>
          <strong>子グマ・1 歳グマの生存</strong>：メス 49 頭が連れていた 65 腹・137 頭の子を追跡
        </li>
        <li>
          <strong>自立したクマ（亜成獣・成獣）の生存</strong>：1983〜2001 年。323 頭を、のべ 5,989 か月追跡
        </li>
      </ul>
      <p>
        これらの推定値を組み合わせ、個体群が年に何倍になるかを表す「λ（ラムダ）」を計算しました。
        λ が 1 より大きければ増加、小さければ減少を意味します。
      </p>

      <h2 id="reproduction">分かったこと 1：繁殖</h2>
      <ul>
        <li>
          初めて子を産んだメスの年齢は平均 <strong>5.81 歳</strong>、範囲は 4〜7 歳でした。
          未経産のメスが 4・5・6・7 歳で出産した割合は、それぞれ 9.8%・29.4%・56.4%・100% でした。
        </li>
        <li>
          記録された出産は 104 腹で、そのうち 102 腹で子の数を数えられました。
          1 腹の子の数は平均 <strong>2.0 頭</strong>（標準誤差 0.1）。1 頭・2 頭・3 頭の割合は
          0.18・0.61・0.22 でした。
        </li>
        <li>
          子グマを連れていたメスの割合は年によって 0.05〜0.60 と大きく変わり、平均は 0.316 でした。
          繁殖率は「メス 1 頭あたり年 0.318 頭のメスの子」と推定されています。
        </li>
        <li>
          1 腹の子の数には、個体数の指標と、ホワイトバークパイン（マツの一種）の球果の実り具合が
          最も強く関係していました。個体数が多いと子の数が減る「密度効果」の可能性が示されましたが、
          生まれた直後の死亡で説明できる可能性も残る、と著者らは書いています。
        </li>
      </ul>

      <h2 id="young">分かったこと 2：子グマと 1 歳グマ</h2>
      <p>
        追跡した 137 頭の子のうち、死亡が確認されたのは 42 頭でした（子グマの年に 32 頭、1 歳で 5 頭、
        どちらの時期か分からないもの 5 頭）。これは追跡中に確認された数で、生存率そのものではありません。
      </p>
      <p>
        生存に最も影響していたのは、<strong>どこに住んでいるか</strong>でした。
      </p>
      <ul>
        <li>最も高い：国立公園の外で、米国魚類野生生物局の「回復ゾーン」の内側</li>
        <li>それより低い：国立公園の内側</li>
        <li>最も低い：回復ゾーンの外側</li>
      </ul>
      <p>
        また、生存率は個体数の指標が高いほど低く、密度効果がうかがえました。
        一方、ホワイトバークパインの種子が多い年、冬が厳しい年、1 腹の子が多いとき、
        母グマの年齢が高いときには生存が良くなっていました。
        オスが子を殺す「子殺し」の仮説も検証されましたが、結果ははっきりしませんでした。
      </p>

      <h2 id="adults">分かったこと 3：自立したクマの生存</h2>
      <ul>
        <li>
          死因が分かった死亡のうち <strong>85.5%</strong> が人間によるものでした。
        </li>
        <li>
          通常の調査で捕獲したメスの年間生存率は、行方不明の個体を除いた計算で <strong>0.950</strong>、
          行方不明を死亡とみなした計算で <strong>0.922</strong> でした。
        </li>
        <li>
          人とのトラブルで捕獲されたクマは、通常の調査個体より生存率が低い結果でした。
          メスはオスより生存率が高く、季節では秋がいちばん低くなっていました。
          ホワイトバークパインの実りが良い年は生存率が上がりました。
        </li>
        <li>
          回復ゾーンの外にいることが多いクマほど、生存率が低くなっていました。
        </li>
      </ul>
      <p>
        著者らは、1983 年に始まった大人のメスの死亡を減らす取り組みが効果を上げたと考えられる一方、
        回復ゾーンの外でも同様の対策をとれば、個体群がさらに広がる見込みが高まると述べています。
      </p>

      <h2 id="population">分かったこと 4：個体数の増減</h2>
      <p>
        シミュレーションでは、λ は子グマや 1 歳グマの生存率にはあまり左右されず、
        <strong>自立したメスの生存率</strong>の不確かさが、減少に転じる確率に大きく影響していました。
        オスの生存率は λ にほとんど影響しませんでした。
      </p>
      <p>
        1983〜2002 年の条件のもとで、個体群が減少に転じる確率を 5% 以下に抑えるには、
        自立したメス（2 歳超）の年間死亡率を <strong>10% 以下</strong>にする必要がある、と試算されています。
        ただし著者らは、これは当時の平均的な条件にもとづく短期の目安であり、標本が小さいため
        本当の死亡率を知るのは難しい、とも注意しています。
      </p>
      <p>
        さらに場所ごとに λ を計算すると、国立公園と回復ゾーンの内側では λ が 1 以上、
        回復ゾーンの外側では 1 以下でした。内側で増えたクマが外側に出て死亡が多くなる
        「ソース・シンク（供給源と吸い込み先）」の構造が示唆され、生態系の縁での人由来の食べ物の除去などを
        議論する必要がある、と結論づけています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          首輪発信機を付けたクマのデータにもとづく推定で、子グマの生存の解析はメス 49 頭・137 頭の子が対象です。
          著者ら自身も、子グマ・1 歳グマの平均生存率には大きな不確かさがあると書いています。
        </li>
        <li>
          対象は 1983〜2002 年ごろのイエローストーン周辺のグリズリーです。
          同じヒグマでも、地域や時代、食べ物の条件が違えば数字は変わります。
          たとえば米国モンタナ州の別の地域（2004〜2009 年）では、子グマの生存率 0.612、
          大人のメスの生存率 0.952、1 腹の平均 2.00 頭（出産直後の死亡を補正して 2.27 頭）と報告されています（Mace ら 2012）。
        </li>
        <li>
          日本の本州・四国のツキノワグマは別の種で、体の大きさも食べ物も違います。
          この論文の数字をそのまま日本のクマに当てはめることはできません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究から言えるのは、クマは初めての出産が遅く、1 回に産む子の数も少ない動物だということ、
        そして個体数の行方は「大人のメスがどれだけ生き残るか」に強く左右される、ということです。
        日本でも、クマは 2024 年 4 月に指定管理鳥獣に加えられ、捕獲と保護のバランスが議論されています。
        詳しくは{" "}
        <Link href="/articles/designated-management-2026">指定管理鳥獣化の解説</Link>
        をご覧ください。
      </p>
      <p>
        また、イエローストーンでは人が原因の死亡が大半を占め、生態系の縁で人由来の食べ物をなくすことが
        課題に挙げられていました。日本でも、生ごみや収穫しない果樹などをクマに食べさせないことは、
        人の安全を守るうえでも大切です。
      </p>
      <p>
        万一クマに出会ったときは、走らず、背を向けず、ゆっくり離れてください。
        突進されたら、クマスプレーを 5〜10m の距離で顔に向けて 1〜2 秒ずつ噴射します
        （環境省の推奨要件は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・カプサイシン類 CRC 1〜2% 程度）。
        防衛的な攻撃で接触が避けられなければ、うつ伏せになって首の後ろを手で守る防御姿勢をとります。
        執拗に襲ってくる捕食的な攻撃の場合は反撃してください。
        基本の対策は{" "}
        <Link href="/learn/safety">クマ対策の基本</Link>
        にまとめています。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Temporal, spatial, and environmental influences on the demographics of grizzly bears in the Greater Yellowstone Ecosystem（本号メイン）",
            citation: (
              <>
                Schwartz, C. C., Haroldson, M. A., White, G. C., Harris, R. B., Cherry, S., Keating, K. A., Moody, D., &amp; Servheen, C. (2006).{" "}
                <em className="not-italic">Wildlife Monographs</em> 161: 1–68.
              </>
            ),
            href: "https://doi.org/10.2193/0084-0173(2006)161%5B1:TSAEIO%5D2.0.CO;2",
            linkText: "DOI: 10.2193/0084-0173(2006)161[1:TSAEIO]2.0.CO;2 →",
          },
          {
            title:
              "Grizzly bear population vital rates and trend in the Northern Continental Divide Ecosystem, Montana",
            citation: (
              <>
                Mace, R. D., Carney, D. W., Chilton-Radandt, T., et al. (2012).{" "}
                <em className="not-italic">Journal of Wildlife Management</em> 76(1): 119–128.
              </>
            ),
            href: "https://doi.org/10.1002/jwmg.250",
            linkText: "DOI: 10.1002/jwmg.250 →",
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
