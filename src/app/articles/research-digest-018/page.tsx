import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-018")!;

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
        晩夏のブリティッシュコロンビア、ある森の調査で研究者たちは奇妙な事実に気づきました。
        川に近い場所の木が、なぜか川から離れた場所の木より <strong>明らかに太く成長している</strong>。
      </p>
      <p>
        原因を探っていくと、衝撃の結論にたどり着きました。
        <strong>クマがサケを森に運んでいたから</strong>です。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Impacts of salmon on riparian plant diversity"
        citation={
          <>
            Hocking, M. D., &amp; Reynolds, J. D. (2011).{" "}
            <em className="not-italic">Science</em> 331(6024): 1609–1612.
          </>
        }
        href="https://doi.org/10.1126/science.1201079"
        linkText="DOI: 10.1126/science.1201079 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ブリティッシュコロンビア <strong>50 流域</strong>でサケと森の関係を調査
          </>,
          <>
            クマがサケを森に運ぶことで <strong>植物多様性が変化</strong>し、樹木の成長が早まる
          </>,
          <>
            クマは「捕食者」ではなく <strong>「海と森を繋ぐエンジニア」</strong>だった
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "海と森が繋がっている — その仲介役" },
          { id: "salmon", title: "サケが森にもたらすもの — 窒素同位体の話" },
          { id: "study", title: "50 流域を 5 年かけて調査した壮大なプロジェクト" },
          { id: "findings", title: "結果 — サケが多い川では植物が変わる" },
          { id: "bears", title: "クマが「運び屋」になっているメカニズム" },
          { id: "scope", title: "クマ 1 頭が森に与える影響量" },
          { id: "trees", title: "木が太く育つ、植物の種類も変わる" },
          { id: "japan", title: "日本でも同じ現象が見られるか" },
          { id: "conservation", title: "クマを「殺さない」生態学的な理由" },
          { id: "broader", title: "他の動物にも応用できる『生態系エンジニア』概念" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">海と森が繋がっている — その仲介役</h2>
      <p>
        生態学では <strong>「海と森は別の系」</strong>と考えがちです。
        海は水、森は陸。住む生き物も違うし、循環する物質も別だと思われてきました。
      </p>
      <p>
        ところが、太平洋沿岸の温帯雨林を研究してきた生態学者たちは、徐々に
        <strong>「海と森は繋がっている」</strong>という仮説を立てるようになりました。
        その繋がりの主役が <strong>「サケ」</strong>と <strong>「クマ」</strong>です。
      </p>
      <p>
        毎年秋、太平洋のサケが <strong>故郷の川</strong>に戻ってきます。
        川を遡上したサケは産卵後にほぼ全てが死亡。
        その死骸を <strong>クマ・コヨーテ・ワシ・カワウソ</strong>が食べる。
        食べられなかった残りも腐敗して、川と岸辺の土壌に <strong>栄養</strong>を残す。
      </p>
      <p>
        この自然のサイクルが、森全体の生態系をどれだけ変えているのか —
        2011 年、カナダの研究者がこの問いに <strong>科学的な答え</strong>を出しました。
      </p>

      <h2 id="salmon">サケが森にもたらすもの — 窒素同位体の話</h2>
      <p>
        サケの体は、海で蓄えられた <strong>窒素・リン・脂質</strong>に満ちています。
        この海由来の窒素は、特殊な目印である <strong>「窒素同位体 N-15」</strong>を持っており、
        森の土壌や植物の窒素（陸由来）と区別できます。
      </p>
      <p>
        N-15 は <strong>「サケ印」</strong>のような目印。
        森の植物・土壌・葉から N-15 を測定すれば、その森が <strong>サケの栄養をどれだけ受けているか</strong>
        が定量化できます。これが本論文の解析の基本ツールでした。
      </p>

      <h2 id="study">50 流域を 5 年かけて調査した壮大なプロジェクト</h2>
      <p>
        Hocking らは、カナダ・ブリティッシュコロンビア州の <strong>50 河川</strong>を選び、
        5 年間（2006〜2010 年）にわたって調査を続けました。
      </p>
      <p>
        各河川で次のデータを収集しました。
      </p>
      <ul>
        <li>
          🐟 <strong>サケの遡上量</strong>: 毎年のサケ個体数を計数
        </li>
        <li>
          🐻 <strong>クマの活動度</strong>: ヒグマ・クロクマの目撃・痕跡
        </li>
        <li>
          🌳 <strong>樹木の成長</strong>: 樹齢・直径・高さ・幹密度
        </li>
        <li>
          🌿 <strong>植物多様性</strong>: 217 種の維管束植物の個体数・分布
        </li>
        <li>
          🧪 <strong>土壌・葉の N-15 含有率</strong>: サケ由来窒素の指標
        </li>
        <li>
          📐 <strong>河岸からの距離</strong>: 0〜500m での違いを比較
        </li>
      </ul>
      <p>
        これは <strong>「世界最大規模のサケ生態系調査」</strong>でした。
        2011 年に Science 誌に掲載され、生態学界に大きな反響を呼びました。
      </p>

      <h2 id="findings">結果 — サケが多い川では植物が変わる</h2>
      <p>
        分析結果は、生態学者を驚かせるものでした。
      </p>
      <h3>① サケ由来の窒素が森の植物に残っていた</h3>
      <p>
        サケが多く遡上する川の岸辺では、植物の葉の N-15 が <strong>明確に高い</strong>。
        距離が 500m 以内では効果が特に強く、土壌中の窒素も増加していました。
      </p>
      <h3>② 植物の多様性に変化があった</h3>
      <p>
        サケが多い流域では、<strong>窒素を好む植物（カエデ・ヤマモミジ系）</strong>が増加し、
        <strong>窒素を嫌う植物（一部の針葉樹・草本）</strong>が減少していました。
        全体として、植物群集の組成がサケの量によって左右されていたのです。
      </p>
      <h3>③ 樹木の成長速度が違う</h3>
      <p>
        サケが多い流域の樹木は、<strong>同じ樹齢でも幹の太さが明らかに大きい</strong>。
        サケが少ない流域と比べて成長速度が <strong>3 割以上速い</strong>場合もありました。
      </p>

      <h2 id="bears">クマが「運び屋」になっているメカニズム</h2>
      <p>
        ここで重要なのは、<strong>「クマがいるかいないか」</strong>がこの効果を大きく左右することです。
      </p>
      <p>
        サケが川にたくさんいても、クマがいない場所では <strong>森全体への栄養移動は限定的</strong>。
        サケの死骸は川の中に残り、水中の生態系にだけ影響します。
      </p>
      <p>
        ところがクマがいると違います。クマは <strong>サケを口にくわえて</strong>、
        川から数十〜数百メートル離れた森の中まで運びます。
        そこで食事をして、食べきれなかった分の <strong>死骸・骨・内臓</strong>を森に残す。
        さらに食べた後の <strong>クマの糞・尿</strong>も森全体に分布。
      </p>
      <p>
        この「<strong>サケ → クマ → 森</strong>」の運搬チェーンによって、
        海の栄養が森の奥深くまで届けられているわけです。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">経路</th>
              <th className="px-3 py-2 text-left">運搬されるサケの量</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">川岸への自然散布</td>
              <td className="px-3 py-2 tabular-nums">~10%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">小型哺乳類・鳥類</td>
              <td className="px-3 py-2 tabular-nums">~20%</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">クマによる運搬</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">~50%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">水中で分解</td>
              <td className="px-3 py-2 tabular-nums">~20%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        サケが森に届く栄養の <strong>約半分</strong>はクマが運んでいる、というのが本論文の重要な数字でした。
      </p>

      <h2 id="scope">クマ 1 頭が森に与える影響量</h2>
      <p>
        クマ 1 頭がサケシーズン中にどれだけのサケを森に運ぶか、後続研究で推定されています。
      </p>
      <ul>
        <li>
          🐻 1 頭のヒグマが <strong>1 シーズンに食べるサケ</strong>: 500〜700 匹
        </li>
        <li>
          🐟 1 匹のサケの重量: 3〜10 kg
        </li>
        <li>
          🌳 川から運ぶ距離: 平均 <strong>50〜100m</strong>、最大 <strong>500m</strong>
        </li>
        <li>
          💚 1 頭が森にもたらす <strong>窒素量</strong>: 約 <strong>50〜100 kg/年</strong>
        </li>
      </ul>
      <p>
        これは <strong>農場の肥料</strong>に換算すると、ヘクタール単位の森を肥沃化する量。
        個体数の多い流域では、クマたちが <strong>森を肥料漬けにしている</strong>とも言えます。
      </p>

      <h2 id="trees">木が太く育つ、植物の種類も変わる</h2>
      <p>
        この栄養供給が長期にわたって続くと、森の構造そのものが変わります。
      </p>
      <ul>
        <li>
          🌲 <strong>巨木が増える</strong>: シトカトウヒ・ベイマツが他の流域の <strong>2 倍以上</strong>太く育つ
        </li>
        <li>
          🍁 <strong>広葉樹が増える</strong>: 窒素好きのカエデ系が定着しやすくなる
        </li>
        <li>
          🌿 <strong>下層植生が豊か</strong>: 林床のシダ類・苔類の多様性が増す
        </li>
        <li>
          🐦 <strong>鳥類が増える</strong>: 植物多様性につれて昆虫・鳥類の種類も増加
        </li>
        <li>
          🐭 <strong>小型哺乳類が増える</strong>: 食物連鎖全体が活性化
        </li>
      </ul>
      <p>
        クマがいる森と、クマがいない森（同緯度・同気候の比較地点）では、
        <strong>明らかに異なる生態系</strong>が形成されているのです。
      </p>

      <h2 id="japan">日本でも同じ現象が見られるか</h2>
      <p>
        日本でも、同様の <strong>「クマとサケと森」</strong>の繋がりが研究されています。
      </p>
      <h3>北海道の知床・羅臼地域</h3>
      <p>
        知床国立公園では、サケ・マスの遡上にヒグマが集中して採食します。
        北海道大学・知床財団の研究で、河川沿いの土壌・植物に <strong>サケ由来の窒素</strong>が
        検出されており、北米と同様のメカニズムが働いていることが確認されています。
      </p>
      <h3>本州・四国・九州のサケ・マス</h3>
      <p>
        本州ではサケの遡上量が北海道に比べて少なく、効果はより限定的。
        ただし、ヤマメ・サクラマス・カラフトマスなどがツキノワグマの食物となる地域があり、
        類似のメカニズムは存在すると考えられています。
      </p>
      <h3>研究の余地</h3>
      <p>
        日本では北海道以外でのクマ – サケ – 森の関係が <strong>本格的に定量化されていない</strong>のが
        現状。今後の重要な研究テーマと位置づけられています。
      </p>

      <h2 id="conservation">クマを「殺さない」生態学的な理由</h2>
      <p>
        この論文の最大の含意は、<strong>「クマがいる」ことが森全体の生産性に直結する</strong>事実です。
      </p>
      <p>
        クマを駆除して個体群を大きく減らすと、森への栄養供給が止まり、
        <strong>長期的に森の生産性が落ちる</strong>可能性があります。これは林業・漁業・観光業に
        間接的な影響をもたらすかもしれません。
      </p>
      <p>
        本論文が発表されて以降、北米では <strong>「クマは生態系エンジニア」</strong>という認識が広がり、
        保全計画にこの考えが組み込まれるようになりました。
      </p>
      <p>
        日本の文脈では、人クマ軋轢の解決が最優先課題ですが、<strong>「クマがいるから森が豊か」</strong>
        という生態学的な視点を持つことも、長期的な野生動物管理には大切です。
      </p>

      <h2 id="broader">他の動物にも応用できる『生態系エンジニア』概念</h2>
      <p>
        Hocking らの研究を契機に、<strong>「生態系エンジニア（ecosystem engineer）」</strong>という概念が
        生態学全体で注目されています。
      </p>
      <p>
        生態系エンジニアとは、<strong>その存在自体が環境を大きく変える動物</strong>のこと。
      </p>
      <ul>
        <li>
          🦫 <strong>ビーバー</strong>: ダムを作り川の流れを変える
        </li>
        <li>
          🐘 <strong>象</strong>: 森を踏み倒し、新たな草原を作る
        </li>
        <li>
          🐻 <strong>クマ</strong>: サケを森に運び、栄養循環を活性化
        </li>
        <li>
          🐳 <strong>クジラ</strong>: 深海から表層へ栄養を運び、海洋生産性を支える
        </li>
        <li>
          🦡 <strong>アナグマ・モグラ</strong>: 土壌を撹拌し、植生多様性を支える
        </li>
      </ul>
      <p>
        これらの動物を <strong>「単なる捕食者・草食者」</strong>として見るのではなく、
        <strong>「生態系のメンテナンス役」</strong>として尊重する考え方が広がりつつあります。
        クマもその代表例として、世界の生態学のテキストに記載される存在になりました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Impacts of salmon on riparian plant diversity（本号メイン）",
            citation: (
              <>
                Hocking, M. D., &amp; Reynolds, J. D. (2011).{" "}
                <em className="not-italic">Science</em> 331(6024): 1609–1612.
              </>
            ),
            href: "https://doi.org/10.1126/science.1201079",
            linkText: "DOI: 10.1126/science.1201079 →",
          },
          {
            title: "Importance of meat, particularly salmon, to body size, population productivity, and conservation of North American brown bears",
            citation: (
              <>
                Hilderbrand, G. V., et al. (1999).{" "}
                <em className="not-italic">Canadian Journal of Zoology</em> 77(1): 132–138.
              </>
            ),
          },
          {
            title: "Keystone interactions: salmon and bear in riparian forests of Alaska",
            citation: (
              <>
                Helfield, J. M., &amp; Naiman, R. J. (2006).{" "}
                <em className="not-italic">Ecosystems</em> 9(2): 167–180.
              </>
            ),
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.19">
        <strong>「クマの色覚は思ったより豊か」</strong> —
        動物園のヒグマで色の識別実験を行った Kelling 2006 ほかを精読。
        「色盲」のイメージで知られるクマが、実は青・黄・緑をしっかり見分けていた事実を解説します。
      </NextIssue>
    </ArticleShell>
  );
}
