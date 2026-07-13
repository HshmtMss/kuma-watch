import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-026")!;

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
      <p className="lead">
        北極のホッキョクグマに、<strong>小型カメラと加速度センサー</strong>を装着する。
        そんなクマ目線の研究が、2018 年に Science 誌に掲載されました。
      </p>
      <p>
        11 日間の連続記録から見えてきたのは、ホッキョクグマの <strong>「予想外に高いエネルギー消費」</strong>。
        従来の想定より <strong>50% も多く</strong>エネルギーを使っていたのです。
        温暖化で氷が減るなか、これは何を意味するのか？
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="High-energy, high-fat lifestyle challenges an Arctic apex predator, the polar bear"
        citation={
          <>
            Pagano, A. M., Durner, G. M., Rode, K. D., et al. (2018).{" "}
            <em className="not-italic">Science</em> 359(6375): 568–572.
          </>
        }
        href="https://doi.org/10.1126/science.aan8677"
        linkText="DOI: 10.1126/science.aan8677 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ホッキョクグマ 9 頭にカメラ + 加速度センサー + 同位体追跡で 11 日間記録
          </>,
          <>
            消費エネルギーは予想の <strong>1.5 倍</strong>、生存にはアザラシ <strong>2 ヶ月毎に 1 頭以上</strong>必要
          </>,
          <>
            気候変動による氷の縮小で <strong>狩猟効率が下がり、種としての将来が危ぶまれる</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "「クマがどれだけ食うか」を測ることの難しさ" },
          { id: "tech", title: "クマ目線のカメラ + センサーで判明" },
          { id: "method", title: "9 頭のホッキョクグマで 11 日間" },
          { id: "findings", title: "結果 — 予想を大きく超えるエネルギー消費" },
          { id: "seal", title: "アザラシ 1 頭で何日生きられるか" },
          { id: "fail", title: "9 頭中 5 頭が体重減少 — 飢餓の現実" },
          { id: "climate", title: "気候変動が決定的なリスク要因" },
          { id: "implications", title: "ヒグマ・ツキノワグマへの示唆" },
          { id: "future", title: "ホッキョクグマの将来は?" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「クマがどれだけ食うか」を測ることの難しさ</h2>
      <p>
        動物の <strong>「1 日に必要なカロリー」</strong>を野外で正確に測るのは、極めて難しい問題でした。
      </p>
      <p>
        動物園や実験室なら、餌の量を計量して測れます。でも野生では、いつ何を食べているかも分からない。
        ましてやホッキョクグマのような <strong>北極の頂点捕食者</strong>を追いかけて、
        食事と運動の全てを記録するのは <strong>これまで不可能</strong>と思われていました。
      </p>
      <p>
        この壁を初めて突破したのが、米国地質調査所（USGS）の <strong>Anthony Pagano</strong>率いる研究チーム。
        2018 年に Science 誌に掲載された彼らの研究は、ホッキョクグマのエネルギー収支を <strong>初めて野外で精密測定</strong>
        した画期的な成果でした。
      </p>

      <h2 id="tech">クマ目線のカメラ + センサーで判明</h2>
      <p>
        Pagano らが使った技術は、当時最先端のものを組み合わせたものでした。
      </p>
      <ul>
        <li>
          📹 <strong>クマ目線の HD カメラ</strong>: 首輪に装着、何を食べたか・どこを歩いたかを記録
        </li>
        <li>
          📊 <strong>加速度センサー</strong>: 歩行・走行・水泳・休息を毎秒記録
        </li>
        <li>
          🌐 <strong>GPS テレメトリー</strong>: 位置と移動距離を追跡
        </li>
        <li>
          🧪 <strong>同位体ラベル水（doubly labeled water）</strong>:
          摂取と排泄の同位体差からエネルギー消費を計算
        </li>
        <li>
          ⚖️ <strong>体重測定</strong>: 開始時と終了時を比較
        </li>
      </ul>
      <p>
        この組合せにより、<strong>「実際の運動量・体内代謝・食事内容・体重変化」</strong>を
        統合的に測ることが初めて可能になりました。
      </p>

      <h2 id="method">9 頭のホッキョクグマで 11 日間</h2>
      <p>
        対象は、北極アラスカの <strong>ボーフォート海</strong>に生息する <strong>ホッキョクグマ 9 頭の雌成獣</strong>。
        2014〜2016 年の春期（4 月）に捕獲し、上記の装備を装着。11 日間の連続記録の後、
        再捕獲して機材を回収・体重を測定。
      </p>
      <p>
        4 月を選んだ理由は明確です。これはホッキョクグマの <strong>「最重要食事シーズン」</strong>。
        ホッキョクグマの主食は <strong>アザラシ</strong>で、氷の上で狩りをします。氷が広がる 4 月は
        アザラシ捕獲に最も適した季節です。
      </p>
      <p>
        ここで上手く食べないと、夏期の氷消失期を生き延びられない。
        9 頭がそれぞれ何を、いつ、どれだけ捕って食べたか、そして体重がどう変化したかを記録しました。
      </p>

      <h2 id="findings">結果 — 予想を大きく超えるエネルギー消費</h2>
      <p>
        分析の結果、ホッキョクグマの <strong>1 日のエネルギー消費</strong>は予想を大きく上回りました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">指標</th>
              <th className="px-3 py-2 text-left">従来の予想</th>
              <th className="px-3 py-2 text-left">Pagano 実測値</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">基礎代謝率</td>
              <td className="px-3 py-2 tabular-nums">~8,500 kcal/日</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">~12,300 kcal/日</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">予想との比</td>
              <td className="px-3 py-2 tabular-nums">×1.0</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">×1.5</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">運動量（1 日）</td>
              <td className="px-3 py-2 tabular-nums">~50 kcal/kg</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">~80 kcal/kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        平均体重 175kg のホッキョクグマが <strong>1 日 12,000kcal 以上</strong>を消費していました。
        これは人間（成人）の <strong>5 倍以上</strong>。
        従来は同じ大型ネコ科動物のデータから <strong>1.0 倍</strong>と推定されていましたが、
        実測ではそれを <strong>50% も上回って</strong>いたのです。
      </p>
      <p>
        理由は、ホッキョクグマが <strong>「歩く・泳ぐ・氷を渡る」</strong>動作で
        想像以上にエネルギーを使っていたから。氷の上を 1 日 30〜40 km 歩くこともあり、
        その大半が食物探しの「無駄足」になっていることも明らかになりました。
      </p>

      <h2 id="seal">アザラシ 1 頭で何日生きられるか</h2>
      <p>
        では、これだけのエネルギーをどうやって賄うのか。答えは <strong>「アザラシ」</strong>。
      </p>
      <p>
        アザラシ 1 頭（体重 30〜100kg）の脂肪・タンパク質含有量から、含まれるカロリーを計算すると：
      </p>
      <ul>
        <li>
          🦭 <strong>小型のフトワモンアザラシ（30kg）</strong>: 約 180,000 kcal
        </li>
        <li>
          🦭 <strong>標準的なワモンアザラシ（50kg）</strong>: 約 300,000 kcal
        </li>
        <li>
          🦭 <strong>大型のヒモアザラシ（100kg）</strong>: 約 600,000 kcal
        </li>
      </ul>
      <p>
        1 日 12,000 kcal を必要とするホッキョクグマは、<strong>標準的なアザラシ 1 頭で約 25 日</strong>
        生きられる計算。逆に言うと、<strong>2 ヶ月毎にアザラシを 1 頭以上は確実に捕る</strong>必要があります。
      </p>
      <p>
        Pagano らの研究では、観察期間中に <strong>「アザラシを 1 頭以上捕った個体」</strong>と
        <strong>「捕れなかった個体」</strong>で体重変化が明確に分かれました。
      </p>

      <h2 id="fail">9 頭中 5 頭が体重減少 — 飢餓の現実</h2>
      <p>
        最も衝撃的だったのは、観察期間 11 日間で <strong>9 頭中 5 頭が体重を減らした</strong>こと。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">アザラシ捕獲状況</th>
              <th className="px-3 py-2 text-left">11 日間の体重変化</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">1 頭以上捕獲（4 頭）</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">+2〜+5%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">捕獲ゼロ（5 頭）</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">−3〜−10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        春期の <strong>「最重要食事シーズン」</strong>で、半数以上が <strong>体重を減らしていた</strong>。
        これは将来の <strong>夏期氷消失時の死亡リスク</strong>に直結します。
      </p>
      <p>
        Pagano らは、これを「<strong>ホッキョクグマの食糧危機の早期警報</strong>」と表現しました。
      </p>

      <h2 id="climate">気候変動が決定的なリスク要因</h2>
      <p>
        ホッキョクグマの狩りには <strong>「氷」</strong>が不可欠です。氷の上で待ち伏せ、
        浮上したアザラシを捕獲する。氷がなければ、効率的な狩りができません。
      </p>
      <p>
        現在、北極の海氷は <strong>毎年 13% ずつ縮小</strong>しているとされます。
        ホッキョクグマの主要狩猟期間（春〜夏）の氷被覆も急速に減少しており、
        従来の狩猟方法が <strong>機能しなくなりつつある</strong>状況です。
      </p>
      <p>
        Pagano らの発見した <strong>「1.5 倍のエネルギー消費」</strong>を組み合わせると、
        ホッキョクグマの生存方程式は次のようになります。
      </p>
      <p className="text-center my-4 text-sm">
        <strong>「消費エネルギーが想定の 1.5 倍」 × 「氷縮小で狩猟効率半減」 = 生存崩壊</strong>
      </p>
      <p>
        これはホッキョクグマが、種としての <strong>「臨界点」</strong>に近づいていることを示唆します。
        Vol.15（{" "}
        <Link href="/articles/research-digest-015">クマ進化</Link>
        ）で見たように、ホッキョクグマは <strong>「最近のヒグマ」</strong>として 35〜48 万年前に分岐し、
        氷河期環境に高度に特化しました。その特化が、温暖化下では <strong>致命的な脆弱性</strong>になりつつあります。
      </p>

      <h2 id="implications">ヒグマ・ツキノワグマへの示唆</h2>
      <p>
        本研究はホッキョクグマが対象ですが、知見は <strong>ヒグマ・ツキノワグマにも応用</strong>できます。
      </p>
      <h3>① ヒグマも予想以上にエネルギーを使う可能性</h3>
      <p>
        ヒグマも GPS 追跡で <strong>1 日 20〜50 km</strong>歩くことが知られています。
        Pagano らの方法を応用すれば、ヒグマの実際のエネルギー消費が判明し、
        従来の <strong>「ハイパーフェイジア期に必要なカロリー」</strong>の推定が更新される可能性があります。
      </p>
      <h3>② 食物減少の影響は想像以上に大きい</h3>
      <p>
        ブナ・ナラ凶作年に <strong>「クマがどれだけ困窮するか」</strong>は、これまで推測でした。
        Pagano らの手法を本州のツキノワグマに応用すれば、凶作年の <strong>体重損失・繁殖低下の定量化</strong>
        が可能になります。
      </p>
      <h3>③ 「冬眠しないクマ」のエネルギー収支</h3>
      <p>
        Vol.4（{" "}
        <Link href="/articles/research-digest-004">気候変動と冬眠</Link>
        ）で見た「冬眠期間短縮」と組み合わせると、温暖化下のクマは
        <strong>年間のエネルギー予算</strong>が厳しくなる可能性があります。
      </p>

      <h2 id="future">ホッキョクグマの将来は?</h2>
      <p>
        Pagano らの研究は、ホッキョクグマの将来について <strong>厳しい予測</strong>を示唆しています。
      </p>
      <ul>
        <li>
          🌍 IPCC の温暖化シナリオでは、2050 年までに <strong>北極海氷の夏期消失</strong>がほぼ確実
        </li>
        <li>
          🐻‍❄️ アラスカ・北極の個体群は <strong>2050 年までに 30〜50% 減少</strong>と予測
        </li>
        <li>
          🔄 一部の個体群は陸地への <strong>「ヒグマ化」</strong>（陸上採餌・植物食化）も観察される
        </li>
        <li>
          🧬 Vol.15 で見た <strong>「ヒグマとの交雑（グロラベア）」</strong>増加の可能性
        </li>
      </ul>
      <p>
        野生のホッキョクグマが、22 世紀には <strong>「種としての形を失う」</strong>可能性が
        生物学者たちから真剣に議論されています。
      </p>
      <p>
        ホッキョクグマだけでなく、温暖化はクマ科全体の生態に影響を及ぼし続けるでしょう。
        詳細は{" "}
        <Link href="/articles/research-digest-004">Vol.4 気候変動と冬眠</Link>
        と{" "}
        <Link href="/articles/research-digest-015">Vol.15 クマ進化</Link>
        も併読してください。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "High-energy, high-fat lifestyle challenges an Arctic apex predator, the polar bear（本号メイン）",
            citation: (
              <>
                Pagano, A. M., Durner, G. M., Rode, K. D., et al. (2018).{" "}
                <em className="not-italic">Science</em> 359(6375): 568–572.
              </>
            ),
            href: "https://doi.org/10.1126/science.aan8677",
            linkText: "DOI: 10.1126/science.aan8677 →",
          },
          {
            title: "Behavior and energetics of polar bears",
            citation: (
              <>
                Pagano, A. M., et al. (2020).{" "}
                <em className="not-italic">Journal of Experimental Biology</em>.
              </>
            ),
          },
          {
            title: "USGS Polar Bear Research",
            href: "https://www.usgs.gov/centers/alaska-science-center/science/polar-bear-research",
            linkText: "USGS →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.27">
        <strong>「クマを見る観光」は世界で年 10 億ドル産業」</strong> —
        ベアウォッチング・ツーリズムの経済効果と保護への貢献を、
        世界各国の事例で精読します。
      </NextIssue>
    </ArticleShell>
  );
}
