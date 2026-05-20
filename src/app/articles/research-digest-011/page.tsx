import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-011")!;

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
        ある日、生物学者は奇妙な事実に気づきます。
        ヒグマの<strong>交尾は 6 月、出産は 1 月</strong>。
        胎内にいる期間が <strong>7 ヶ月</strong>もある。
        ところが胎児が実際に発達するのは、その最後の <strong>2 ヶ月</strong>だけ。
      </p>
      <p>
        残りの 5 ヶ月、受精卵は <strong>子宮の中で「待機」</strong>している状態だったのです。
        この仕組みを <strong>「着床遅延」</strong>といい、クマ科の動物が持つ
        最も独特で不思議な繁殖戦略の一つです。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Evolution of reproductive seasonality in bears
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Spady, T. J., Lindburg, D. G., &amp; Durrant, B. S. (2007).{" "}
          <em className="not-italic">Mammal Review</em> 37(1): 21–53.
        </div>
        <a
          href="https://doi.org/10.1111/j.1365-2907.2007.00096.x"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1111/j.1365-2907.2007.00096.x →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            クマは <strong>6 月に交尾し、12〜1 月に出産</strong>。胎児は <strong>5 ヶ月待機</strong>
          </li>
          <li>
            母体の栄養が不十分なら <strong>受精卵が消える</strong>「妊娠キャンセル」が可能
          </li>
          <li>
            新生児は <strong>体重わずか 200〜400g</strong>。母乳で 1 ヶ月で 10 倍に育つ
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "夏に交尾、冬に出産 — 不思議な繁殖サイクル" },
          { id: "mechanism", title: "「着床遅延」の生物学的メカニズム" },
          { id: "why", title: "なぜクマはこの仕組みを進化させたのか" },
          { id: "cancel", title: "母グマは妊娠をキャンセルできる" },
          { id: "tiny", title: "200g で生まれて、5 ヶ月で 10kg" },
          { id: "evolution", title: "他の動物との進化的比較" },
          { id: "japan", title: "日本のツキノワグマでも同じか" },
          { id: "conservation", title: "保護戦略への含意 — 「凶作年は子供が減る」" },
          { id: "fertility", title: "現代の人類医療に与えた示唆" },
          { id: "today", title: "クマの繁殖から学ぶこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">夏に交尾、冬に出産 — 不思議な繁殖サイクル</h2>
      <p>
        クマの繁殖サイクルは、私たち人類のそれとは大きく異なります。
      </p>
      <ul>
        <li>
          ❤️ <strong>交尾</strong>: 5〜7 月の繁殖期
        </li>
        <li>
          ⏸️ <strong>受精卵の待機</strong>: 6〜10 月の半年
        </li>
        <li>
          🌱 <strong>着床（胎児発達開始）</strong>: 11〜12 月
        </li>
        <li>
          👶 <strong>出産</strong>: 12〜2 月、冬眠中の巣穴の中
        </li>
        <li>
          🍼 <strong>授乳・子育て</strong>: 出産後 2〜3 ヶ月、巣穴で
        </li>
        <li>
          🚶 <strong>巣穴出</strong>: 4〜5 月、母子が外の世界へ
        </li>
      </ul>
      <p>
        この特殊なサイクルの中で、最も興味深いのが <strong>「受精から着床まで 5 ヶ月以上の時間差がある」</strong>点。
        通常の哺乳類では、受精卵はすぐ子宮内膜に着床して胎児発達が始まりますが、
        クマの場合は受精卵が <strong>「胚盤胞」</strong>という極初期の段階で発達を一時停止し、
        子宮内を漂い続けます。
      </p>

      <h2 id="mechanism">「着床遅延」の生物学的メカニズム</h2>
      <p>
        着床遅延（delayed implantation, または embryonic diapause）は、
        生物学的にはきわめて精密に制御された現象です。
      </p>
      <h3>受精卵の「待機」状態</h3>
      <p>
        受精から数日で、受精卵は <strong>胚盤胞</strong>と呼ばれる細胞集団（約 80〜100 個の細胞）になります。
        通常の哺乳類はこの段階で子宮内膜に張り付き、胎児発達を始めます。
      </p>
      <p>
        クマの場合、この胚盤胞が <strong>「卵殻様膜（zona pellucida）」</strong>に包まれたまま、
        子宮内で 5 ヶ月間も「冬眠状態」を保ちます。栄養も最低限しか必要とせず、代謝はほぼ停止。
      </p>
      <h3>着床を起こす「スイッチ」は何か</h3>
      <p>
        Spady らの論文は、着床を引き起こすシグナルとして次の要因を統合的に整理しています。
      </p>
      <ul>
        <li>
          <strong>母体の体脂肪量</strong>: 体脂肪率がしきい値（推定 20% 以上）を超えると着床が始まる
        </li>
        <li>
          <strong>プロゲステロン（黄体ホルモン）の上昇</strong>: 秋になると母体のプロゲステロン濃度が上昇
        </li>
        <li>
          <strong>日長の変化</strong>: 冬至前後の短日刺激が体内時計と連動
        </li>
        <li>
          <strong>冬眠への移行</strong>: 冬眠状態への遷移が引き金になる可能性
        </li>
      </ul>
      <p>
        要するに、<strong>「母体が冬を越せる準備が整ったとき」</strong>に着床が起きるよう、
        進化的に設計されているわけです。
      </p>

      <h2 id="why">なぜクマはこの仕組みを進化させたのか</h2>
      <p>
        着床遅延は、生物学的にコストの高い仕組みです。
        受精卵を 5 ヶ月も保持し続けるには、母体側で特殊なホルモン制御と子宮内環境の維持が必要。
        それでもクマがこの戦略を進化させた理由は、<strong>「冬眠と出産を組み合わせる必要があった」</strong>ことです。
      </p>
      <h3>① 出産は最も体力を使うイベント</h3>
      <p>
        哺乳類の出産は、母体に大きな負荷をかけます。
        春・夏に出産すれば、その後は森に食物が豊富で授乳に十分なエネルギーが確保できる。
        でも子グマが生まれてすぐ外を歩けるほど成熟するには、長い妊娠期間が必要。
      </p>
      <h3>② 食物が不足する冬を「巣穴で過ごす」必要</h3>
      <p>
        高緯度地域のクマは、食物が枯渇する冬を生き残るために<strong>冬眠</strong>を進化させました。
        冬眠中は活動できないので、出産も子育ても <strong>巣穴の中で完結</strong>する必要がある。
      </p>
      <h3>③ 春に母子で巣穴を出るタイミングが命を分ける</h3>
      <p>
        子グマが <strong>4〜5 月に巣穴を出る</strong>とき、外には新緑・新芽・水が満ち、食物が豊富。
        春に外に出るためには、冬眠中に出産し、巣穴内で 2〜3 ヶ月授乳する必要がある。
        逆算すると、出産は <strong>1 月前後</strong>、着床は <strong>11 月前後</strong>になる。
      </p>
      <p>
        では、なぜ交尾を 6 月にするのか？ それは <strong>クマの食物リソース最盛期</strong>に
        繁殖活動を集中させるため。夏は食物が豊富で、雄と雌が出会いやすく、雄も繁殖期に向けて体力がある。
      </p>
      <p>
        つまり「<strong>6 月の交尾と 11 月の着床のあいだ</strong>」を埋めるために、
        着床遅延という生物学的なギミックが進化したわけです。
      </p>

      <h2 id="cancel">母グマは妊娠をキャンセルできる</h2>
      <p>
        本論文で最も印象的な発見の一つが、<strong>「母グマが妊娠をキャンセルできる」</strong>こと。
      </p>
      <p>
        胚盤胞は子宮内に漂っているだけなので、もし母体の状態が不適切なら
        <strong>そのまま吸収・消失</strong>します。これを <strong>「胚盤胞吸収（embryonic resorption）」</strong>といいます。
      </p>
      <h3>胚盤胞吸収が起きる条件</h3>
      <ul>
        <li>
          母体の <strong>体脂肪率が 20% 以下</strong>（夏の食物不足年）
        </li>
        <li>
          ブナ・ナラの<strong>大凶作</strong>でハイパーフェイジア期に十分体重が増えない（{" "}
          <Link href="/articles/research-digest-006">Vol.6 食性</Link>{" "}と接続）
        </li>
        <li>
          交尾後の <strong>強いストレス</strong>（捕食者・人為的脅威の頻発）
        </li>
        <li>
          母体の <strong>健康異常</strong>（感染症・栄養失調）
        </li>
      </ul>
      <p>
        観察データでは、<strong>大凶作年の翌年は出産率が 30〜50% 低下</strong>するヒグマ個体群も報告されています。
        これは「<strong>母体が育てられないと判断したら、最初から生まないという選択</strong>」を、
        クマが進化的に獲得した結果と解釈できます。
      </p>

      <h2 id="tiny">200g で生まれて、5 ヶ月で 10kg</h2>
      <p>
        着床から出産までの実際の妊娠期間は <strong>2 ヶ月程度</strong>。
        体重 100〜200kg の母グマから生まれる新生児は、わずか <strong>200〜400g</strong>。
      </p>
      <p>
        これは哺乳類の中でも <strong>「母子体重比」</strong>が異常に小さい例として知られます。
        人間（母 50kg + 新生児 3kg = 6%）に対して、クマ（母 100kg + 新生児 0.2kg = 0.2%）。
        母体に対する出産負担を最小化するための適応です。
      </p>
      <p>
        ただし、生まれた仔は <strong>毛も生えていない、目も開いていない</strong>未熟児状態。
        体温調節もできないので、母グマの体温で温められながら、母乳だけで急成長します。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">時期</th>
              <th className="px-3 py-2 text-left">子グマの体重</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">出生時（1 月）</td>
              <td className="px-3 py-2 tabular-nums">200〜400 g</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">1 ヶ月（2 月）</td>
              <td className="px-3 py-2 tabular-nums">1.5〜2 kg</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">巣穴出（4 月）</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">5〜10 kg</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">1 歳</td>
              <td className="px-3 py-2 tabular-nums">15〜30 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        わずか 4 ヶ月で <strong>体重 25〜50 倍</strong>。哺乳類でこれだけ短期間に急成長する例は稀です。
        この爆発的な成長を可能にしているのが、クマの<strong>母乳の濃度</strong>。脂質含量が 30%（人乳の 7 倍）あり、
        サイズ的には小規模だがエネルギー的には超濃縮された授乳戦略を取っています。
      </p>

      <h2 id="evolution">他の動物との進化的比較</h2>
      <p>
        着床遅延は、クマ科だけのものではありません。実は哺乳類全体で約 130 種が同じ仕組みを持っています。
      </p>
      <ul>
        <li>
          🦡 <strong>イタチ科</strong>（ミンク・テン・カワウソ）
        </li>
        <li>
          🦦 <strong>アシカ・アザラシ</strong>
        </li>
        <li>
          🐭 <strong>カンガルーネズミ</strong>
        </li>
        <li>
          🐾 <strong>有袋類</strong>（カンガルー・ワラビー）
        </li>
      </ul>
      <p>
        これらの動物には共通点があります。<strong>季節性が強く、出産タイミングを最適化する必要</strong>がある種です。
        着床遅延は <strong>「妊娠スケジュールを柔軟に調整する装置」</strong>として、
        独立に何度も進化してきた、と Spady らは論じています。
      </p>
      <p>
        クマ科で特殊なのは、<strong>「冬眠 + 出産 + 着床遅延」を統合的に組み合わせている</strong>点。
        この複合的な戦略を持つ哺乳類は、世界でクマ科だけです。
      </p>

      <h2 id="japan">日本のツキノワグマでも同じか</h2>
      <p>
        日本のツキノワグマも、北米のクロクマやヒグマと同じ着床遅延を示します。
      </p>
      <ul>
        <li>
          <strong>交尾期</strong>: 6〜7 月（北海道のヒグマは 5〜7 月）
        </li>
        <li>
          <strong>着床期</strong>: 11〜12 月
        </li>
        <li>
          <strong>出産期</strong>: 1〜2 月（巣穴の中）
        </li>
        <li>
          <strong>巣穴出</strong>: 4〜5 月（子グマ 3〜6kg）
        </li>
      </ul>
      <p>
        ツキノワグマの出産数は、通常 <strong>1〜3 頭</strong>（平均 1.6 頭）。
        母体の状態次第で、Spady らが報告した「妊娠キャンセル」現象も観察されています。
        ブナの大凶作年（2010 年・2020 年・2023 年）の翌年は、新生児の確認数が顕著に減るというデータが
        各都道府県の研究機関から報告されています。
      </p>

      <h2 id="conservation">保護戦略への含意 — 「凶作年は子供が減る」</h2>
      <p>
        この知見は、クマの保護戦略に重要な示唆を与えます。
      </p>
      <h3>① 凶作年の負の連鎖</h3>
      <p>
        ブナ・ナラの大凶作年 → 母グマが十分な体脂肪を蓄えられない → 妊娠キャンセル → 翌年の出産率が下がる。
        この連鎖が、地域個体群の将来人口に直接影響します。
      </p>
      <h3>② 個体数管理の難しさ</h3>
      <p>
        クマの繁殖率は <strong>母体の栄養状態に強く依存</strong>するため、捕獲や食物源の減少が
        即座に出産率の低下につながります。安易な「個体数削減」は、想定以上に長期的な減少を招く可能性があります。
      </p>
      <h3>③ 「凶作年は母グマを撃たない」原則</h3>
      <p>
        北米の多くの州では、<strong>子グマを連れた雌の捕獲を禁止</strong>するルールがあります。
        日本でも 2026 年改正で同様の運用が強化されています。
        着床遅延の仕組みを知ると、この原則の生物学的根拠が明確になります。
      </p>

      <h2 id="fertility">現代の人類医療に与えた示唆</h2>
      <p>
        着床遅延の研究は、<strong>人類の不妊治療・生殖医療</strong>にも影響を与えています。
      </p>
      <ul>
        <li>
          <strong>体外受精（IVF）の胚培養</strong>: 着床遅延中のクマ胚は <strong>「冬眠胚」</strong>とも呼ばれ、
          胚の長期保存・培養の研究モデル
        </li>
        <li>
          <strong>胚停止技術</strong>: がん化学療法中の女性の生殖能力を保護する研究で参照
        </li>
        <li>
          <strong>子宮内環境の制御</strong>: 着床不全の原因解明への手がかり
        </li>
        <li>
          <strong>絶滅危惧動物の保護</strong>: クマ科の繁殖知見が、ジャイアントパンダの繁殖戦略に応用
        </li>
      </ul>

      <h2 id="today">クマの繁殖から学ぶこと</h2>
      <p>
        クマの繁殖戦略は、私たちに自然界の <strong>「精密な設計」</strong>を見せてくれます。
      </p>
      <p>
        母体の状態次第で妊娠そのものをキャンセルできる、5 ヶ月の待機期間を持つ、
        200g の超未熟児で生まれて巣穴で 5 ヶ月で 50 倍に育つ — どれもが <strong>進化が長い時間をかけて作り上げた最適解</strong>です。
      </p>
      <p>
        だから、人間がクマの環境を変えれば（誘引物・気候・捕獲圧）、
        繁殖サイクルそのものに影響が及ぶ。地域個体群の長期的な存続には、
        母グマと子グマを「狙わない」配慮が、生物学的にも重要な意味を持ちます。
      </p>
      <p>
        関連記事として{" "}
        <Link href="/articles/bear-reproduction">クマの繁殖と出産の不思議</Link>
        と{" "}
        <Link href="/articles/research-digest-004">Vol.4 気候変動と冬眠</Link>
        も合わせてご覧ください。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Evolution of reproductive seasonality in bears（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Spady, T. J., Lindburg, D. G., &amp; Durrant, B. S. (2007).{" "}
              <em className="not-italic">Mammal Review</em> 37(1): 21–53.
            </div>
            <a
              href="https://doi.org/10.1111/j.1365-2907.2007.00096.x"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1111/j.1365-2907.2007.00096.x →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Reproductive biology and endocrinology of the giant panda
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Lindburg, D. G., &amp; Baragona, K. (2004). University of California Press.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Embryonic diapause and its regulation
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Renfree, M. B., &amp; Shaw, G. (2000).{" "}
              <em className="not-italic">Reproduction</em> 119: 1–15.
            </div>
          </li>
        </ol>
      </div>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
          次号予告 — Vol.12
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クロクマに殺された 63 人の共通点」</strong> —
          北米 110 年分の致命的クマ襲撃事例を統計解析した Herrero 2011 を精読。
          「母グマが危険」「クマは群れで襲う」といった常識が覆ります。
        </div>
      </div>
    </ArticleShell>
  );
}
