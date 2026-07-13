import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-029")!;

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
        1995 年、米国イエローストーン国立公園に <strong>オオカミが再導入</strong>されました。
        70 年前に絶滅していた捕食者が森に戻り、生態系は劇的に変化しました。
      </p>
      <p>
        その変化の中で、思いがけない発見がありました。
        <strong>ヒグマが「太った」</strong>のです。
        理由は <strong>オオカミの食べ残し</strong>でした。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Trophic facilitation by introduced top predators: grey wolf subsidies to scavengers in Yellowstone National Park"
        citation={
          <>
            Wilmers, C. C., Crabtree, R. L., Smith, D. W., Murphy, K. M., &amp; Getz, W. M. (2003).{" "}
            <em className="not-italic">Journal of Animal Ecology</em> 72(6): 909–916.
          </>
        }
        href="https://doi.org/10.1046/j.1365-2656.2003.00766.x"
        linkText="DOI: 10.1046/j.1365-2656.2003.00766.x →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            オオカミが仕留めた獲物の <strong>30〜50%</strong>はクマ・ワシ・コヨーテが「片付け」る
          </>,
          <>
            イエローストーンのヒグマは、オオカミ再導入後に <strong>体重が増加</strong>傾向
          </>,
          <>
            クマは森の <strong>「重要な腐肉食動物」</strong>として生態系の物質循環に貢献
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "「肉食動物」のもう一つの顔" },
          { id: "wolves", title: "イエローストーンのオオカミ再導入" },
          { id: "discovery", title: "クマが「太った」謎" },
          { id: "scavenger", title: "腐肉食動物としてのクマ" },
          { id: "method", title: "Wilmers らの長期観察" },
          { id: "data", title: "オオカミの「お裾分け」を数字で見る" },
          { id: "ecosystem", title: "森の物質循環におけるクマの役割" },
          { id: "japan", title: "日本のクマも腐肉食をする" },
          { id: "implications", title: "腐肉食が増える秋〜冬の意味" },
          { id: "future", title: "オオカミ再導入と日本のクマ" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「肉食動物」のもう一つの顔</h2>
      <p>
        クマと聞くと、多くの人は <strong>「狩る動物」</strong>を想像します。
        サケを獲り、シカを襲い、家畜を狙う捕食者。
      </p>
      <p>
        でも、実はクマは <strong>「狩る」より「拾う」方が得意</strong>な動物でもあります。
        死んだ動物の死骸を見つけて食べる <strong>「腐肉食（scavenging）」</strong>が、
        クマの食生活で大きな割合を占めているのです。
      </p>
      <p>
        この事実は、現代の生態学では <strong>「クマは森の清掃員」</strong>として評価されています。
        死体を森に放置すると腐敗・感染症の原因になる。クマがそれを食べることで、
        森の物質循環と衛生環境を維持しているのです。
      </p>

      <h2 id="wolves">イエローストーンのオオカミ再導入</h2>
      <p>
        1920 年代までに、米国イエローストーン国立公園のオオカミは <strong>絶滅</strong>していました。
        家畜被害を恐れた住民・牧場主たちによる徹底駆除の結果でした。
      </p>
      <p>
        70 年経って、生態学的影響が明らかになります。オオカミ不在で <strong>エルク（大型鹿）が増えすぎ</strong>、
        植生が荒廃。森の構造そのものが変わりつつあった。
      </p>
      <p>
        この問題を解決するため、1995 年に <strong>カナダから 31 頭のオオカミ</strong>を再導入。
        この壮大な実験は <strong>世界中の生物学者の注目</strong>を集め、20 年以上にわたって
        詳細な追跡研究が続けられています。
      </p>

      <h2 id="discovery">クマが「太った」謎</h2>
      <p>
        オオカミ再導入の数年後、研究者たちは奇妙な事実に気づきました。
      </p>
      <p>
        公園内のヒグマが、以前より <strong>体格が大きく、体重が重くなっていた</strong>。
        繁殖成功率も向上していた。なぜ？
      </p>
      <p>
        食物源を調べると、答えが見えてきました。クマが <strong>「オオカミの食べ残し」</strong>を
        頻繁に食べていたのです。
      </p>
      <p>
        オオカミは群れで狩りをし、エルクやムース（ヘラジカ）を仕留めますが、
        1 頭の獲物を全て食べ切らない。残った肉と内臓を、クマたちが <strong>「お裾分け」</strong>として
        食べていたのです。Wilmers らはこれを「<strong>栄養補助（trophic subsidy）</strong>」と名付けました。
      </p>

      <h2 id="scavenger">腐肉食動物としてのクマ</h2>
      <p>
        生態学では、肉食動物を 2 種類に分けて考えます。
      </p>
      <ul>
        <li>
          🦴 <strong>純粋捕食者（predator）</strong>: 自分で獲物を仕留める（ライオン・トラ・オオカミなど）
        </li>
        <li>
          🌪️ <strong>純粋腐肉食者（scavenger）</strong>: 死体だけを食べる（ハゲワシ・ハイエナの一部）
        </li>
      </ul>
      <p>
        多くの動物は、<strong>この 2 つの中間</strong>に位置します。
        クマもその一つで、状況に応じて「<strong>狩る</strong>」「<strong>拾う</strong>」「<strong>植物を食べる</strong>」
        を使い分ける <strong>柔軟な雑食性</strong>を持っています。
      </p>
      <p>
        Vol.6（{" "}
        <Link href="/articles/research-digest-006">食選好</Link>
        ）で見たように、クマはカロリー効率を考えて食物を選びます。
        <strong>「狩る労力 vs 拾うエネルギー」</strong>の比較で、状況次第で
        「<strong>拾う」が圧倒的に有利</strong>になります。
      </p>

      <h2 id="method">Wilmers らの長期観察</h2>
      <p>
        Wilmers らは、イエローストーン国立公園で 1998〜2002 年の 5 年間、
        オオカミの狩りと <strong>その後の腐肉食動物の利用</strong>を詳細に観察しました。
      </p>
      <ul>
        <li>
          🐺 <strong>GPS 首輪付きオオカミ群</strong>を追跡し、狩りの瞬間と場所を記録
        </li>
        <li>
          📷 狩りの後の <strong>獲物の場所にカメラ</strong>を設置し、誰が訪れるかを記録
        </li>
        <li>
          ⚖️ 獲物の <strong>残量</strong>を時間ごとに計測
        </li>
        <li>
          🐻 訪れる動物を <strong>種・個体別に識別</strong>
        </li>
        <li>
          🥩 各動物が <strong>食べる量・滞在時間</strong>を記録
        </li>
      </ul>
      <p>
        オオカミ群が仕留めた <strong>200 頭以上の獲物</strong>について、
        その後の物質循環を <strong>分単位</strong>で追跡した、当時の野生生物研究としては
        極めて精密な手法でした。
      </p>

      <h2 id="data">オオカミの「お裾分け」を数字で見る</h2>
      <p>
        分析結果は、生態学者たちを驚かせるものでした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">腐肉食動物</th>
              <th className="px-3 py-2 text-left">獲物 1 頭から得る肉の割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">オオカミ自身</td>
              <td className="px-3 py-2 tabular-nums">50〜70%</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">ヒグマ</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">10〜25%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">コヨーテ</td>
              <td className="px-3 py-2 tabular-nums">5〜10%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ワシ・カラス</td>
              <td className="px-3 py-2 tabular-nums">5〜10%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">その他</td>
              <td className="px-3 py-2 tabular-nums">5〜10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        オオカミが食べる量は獲物の半分から 7 割程度。残りの <strong>30〜50%</strong>を
        他の動物が食べる。その中で <strong>ヒグマが最大の受益者</strong>でした。
      </p>
      <p>
        さらに、ヒグマは <strong>強力な体格</strong>で他の腐肉食動物を追い払うことができます。
        オオカミの食べ残しに到達したヒグマは、コヨーテ・ワシなどを <strong>独占</strong>します。
      </p>

      <h2 id="ecosystem">森の物質循環におけるクマの役割</h2>
      <p>
        クマの腐肉食は、森全体の <strong>物質循環</strong>に重要な役割を果たします。
      </p>
      <ul>
        <li>
          ♻️ <strong>死体の分解促進</strong>: クマが食べ、糞として森に分散
        </li>
        <li>
          🌱 <strong>森への栄養再分配</strong>: Vol.18（{" "}
          <Link href="/articles/research-digest-018">生態系エンジニア</Link>
          ）と同じく、海・川の栄養を陸へ
        </li>
        <li>
          🦠 <strong>感染症の抑制</strong>: 死体を素早く処理し、病気の蔓延を防ぐ
        </li>
        <li>
          🦅 <strong>他の腐肉食動物への補助</strong>: コヨーテ・ワシ・カラスにも食料源
        </li>
        <li>
          🍇 <strong>種子散布</strong>: 植物食と組合せて、種子を糞で広域に運ぶ
        </li>
      </ul>
      <p>
        クマがいない森と、クマがいる森では、<strong>物質循環の速度と効率</strong>が
        大きく異なる、というのが現代の生態学の理解です。
      </p>

      <h2 id="japan">日本のクマも腐肉食をする</h2>
      <p>
        日本のヒグマ・ツキノワグマも、腐肉食を頻繁に行います。
      </p>
      <ul>
        <li>
          🐗 <strong>シカ・イノシシの死体</strong>: 自然死・狩猟残渣・交通事故死
        </li>
        <li>
          🦌 <strong>シカ駆除後の残骸</strong>: 山中での捕獲後の処理が不十分な場合
        </li>
        <li>
          🐟 <strong>サケ・マスの死骸</strong>: 産卵後の自然死
        </li>
        <li>
          🐂 <strong>家畜の死亡個体</strong>: 適切に処理されていない場合
        </li>
      </ul>
      <p>
        本州のツキノワグマは、北米のヒグマほど <strong>大型獲物への依存度</strong>は高くありませんが、
        秋〜冬の食物探索期にシカ・イノシシの死骸を発見すると、長時間滞在して食べ尽くす行動が報告されています。
      </p>

      <h2 id="implications">腐肉食が増える秋〜冬の意味</h2>
      <p>
        日本でクマが <strong>秋〜冬に家畜被害・狩猟残骸の場所に出没</strong>する事例は、
        この腐肉食行動と直接関係します。
      </p>
      <p>
        Vol.6（{" "}
        <Link href="/articles/research-digest-006">食選好</Link>
        ）で見たように、ハイパーフェイジア期のクマは <strong>カロリー効率を最大化</strong>する食物を求めます。
        山中で適切に処理されていない <strong>シカ・イノシシ駆除後の残骸</strong>は、
        クマにとって <strong>完璧な高カロリー食物</strong>。
      </p>
      <p>
        このため、現代の野生動物管理では <strong>「狩猟残渣の適切な処理」</strong>が重要視されています。
        放置すれば、クマを集めて軋轢を増やす結果になるからです。
      </p>

      <h2 id="future">オオカミ再導入と日本のクマ</h2>
      <p>
        日本では、20 世紀初頭にニホンオオカミが <strong>絶滅</strong>しました。
        現在、オオカミ再導入の議論は学術的に進められていますが、住民理解・技術的課題から
        実現には至っていません。
      </p>
      <p>
        もし将来オオカミが日本に再導入されれば、Wilmers らが示した <strong>「腐肉食を介した栄養補助」</strong>
        が日本のクマにも起きる可能性があります。シカ・イノシシの個体数管理にも繋がる、
        広域的な生態系効果が期待されます。
      </p>
      <p>
        ただし、これは長期的・理論的な議論であり、日本のクマと人の現実的な共存問題は、
        まず誘引物管理・電気柵・住民教育などの即効性ある対策が優先です。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/research-digest-018">Vol.18 生態系エンジニア</Link>
        と{" "}
        <Link href="/articles/research-digest-006">Vol.6 食選好</Link>
        を併読してください。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Trophic facilitation by introduced top predators: grey wolf subsidies to scavengers in Yellowstone National Park（本号メイン）",
            citation: (
              <>
                Wilmers, C. C., et al. (2003).{" "}
                <em className="not-italic">Journal of Animal Ecology</em> 72(6): 909–916.
              </>
            ),
            href: "https://doi.org/10.1046/j.1365-2656.2003.00766.x",
            linkText: "DOI: 10.1046/j.1365-2656.2003.00766.x →",
          },
          {
            title: "Bears as ecosystem engineers",
            citation: (
              <>
                Helfield, J. M., &amp; Naiman, R. J. (2006).{" "}
                <em className="not-italic">Ecosystems</em>.
              </>
            ),
          },
          {
            title: "The functional role of brown bear as scavenger",
            citation: (
              <>
                Penteriani, V., et al. (2018).{" "}
                <em className="not-italic">Mammal Review</em>.
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

      <NextIssue label="次号予告 — Vol.30 (シリーズ最終回)">
        <strong>「人とクマの共進化が共存の鍵」</strong> —
        シリーズの締めくくりとして、Carter &amp; Linnell 2016 TREE 誌の総説を精読。
        30 本の知見を統合し、日本でのクマと人の未来を展望します。
      </NextIssue>
    </ArticleShell>
  );
}
