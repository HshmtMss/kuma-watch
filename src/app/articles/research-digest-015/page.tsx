import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-015")!;

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
        ホッキョクグマとヒグマは、外見も生息地も全く違います。
        北極の氷の上で生きる白いクマと、温帯〜亜寒帯の森に住む茶色いクマ。
        まったく別の動物のように見えます。
      </p>
      <p>
        ところが 2014 年、世界 30 ヶ国の研究者が両者の遺伝子を比較した結果、
        <strong>「ホッキョクグマはヒグマからわずか 35〜48 万年前に分かれた」</strong>という
        衝撃の事実が判明しました。地質学的に「最近」と言える短期間で、ホッキョクグマは
        極寒環境に適応していたのです。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Population genomics reveal recent speciation and rapid evolutionary adaptation in polar bears
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Liu, S., Lorenzen, E. D., Fumagalli, M., et al. (2014).{" "}
          <em className="not-italic">Cell</em> 157(4): 785–794.
        </div>
        <a
          href="https://doi.org/10.1016/j.cell.2014.03.054"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1016/j.cell.2014.03.054 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            ホッキョクグマ <strong>89 頭</strong>とヒグマ <strong>10 頭</strong>の全ゲノムを解読
          </li>
          <li>
            両者の分岐は <strong>35〜48 万年前</strong>。それまで予想されていた時期の 1/5 以下
          </li>
          <li>
            脂肪代謝（特に <strong>APOB 遺伝子</strong>）が爆速進化、心血管系の毒性を回避
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "old-belief", title: "「ホッキョクグマは 200 万年前から」だった常識" },
          { id: "team", title: "中国・米国・デンマーク連合のゲノム研究" },
          { id: "method", title: "89 頭のホッキョクグマと 10 頭のヒグマ" },
          { id: "discovery", title: "分岐はわずか 35〜48 万年前という衝撃" },
          { id: "genes", title: "爆速進化した 16 個の遺伝子" },
          { id: "apob", title: "APOB という「コレステロール処理遺伝子」" },
          { id: "diet", title: "脂肪 50% のアザラシ食を可能にした適応" },
          { id: "hybrid", title: "ヒグマとホッキョクグマの交雑事例" },
          { id: "climate", title: "気候変動と「ホッキョクグマ消失」シナリオ" },
          { id: "japan", title: "日本のヒグマとも血のつながりがある" },
          { id: "implications", title: "進化はこんなに早く起こるのか" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="old-belief">「ホッキョクグマは 200 万年前から」だった常識</h2>
      <p>
        Liu らの論文が出るまで、ホッキョクグマとヒグマの分岐時期について科学界は混乱していました。
      </p>
      <ul>
        <li>
          化石記録ベース: <strong>「100〜130 万年前」</strong>と推定
        </li>
        <li>
          ミトコンドリア DNA ベース: <strong>「16 万年前」</strong>という新説
        </li>
        <li>
          一部の核 DNA 研究: <strong>「338 万年前」</strong>という超古い説まで
        </li>
      </ul>
      <p>
        分岐時期がこれだけ揺れていたのは、それぞれの推定方法に大きな欠点があったため。
        化石記録は不完全（北極では化石が残りにくい）、ミトコンドリア DNA は<strong>交雑の影響</strong>で
        時期を過小評価する傾向がある、ということが知られていました。
      </p>
      <p>
        この問題を解決するため、Liu らは <strong>全ゲノム解析</strong>に挑みました。
        ホッキョクグマとヒグマの「<strong>すべての遺伝情報</strong>」を比較することで、
        曖昧さの少ない分岐時期を推定しようとしたのです。
      </p>

      <h2 id="team">中国・米国・デンマーク連合のゲノム研究</h2>
      <p>
        この研究の指揮を執ったのは、デンマーク・コペンハーゲン大学の <strong>Eline Lorenzen</strong>と、
        中国 BGI（華大遺伝子研究所）の <strong>Shiping Liu</strong>。
        さらに米国ペンシルベニア大学・カリフォルニア大学バークレー校・スタンフォード大学が参加。
        中国の高性能シーケンサー（DNA 解読機）の能力と、欧米の集団遺伝学の知見が結合した
        国際チームでした。
      </p>
      <p>
        BGI は当時世界最大のシーケンス能力を持つ研究機関で、本論文ではホッキョクグマ
        <strong>89 個体・ヒグマ 10 個体</strong>の全ゲノム解読を実施。
        これだけの個体数は、当時の野生大型哺乳類研究としては画期的な規模でした。
      </p>

      <h2 id="method">89 頭のホッキョクグマと 10 頭のヒグマ</h2>
      <p>
        Liu らは、ホッキョクグマ <strong>89 個体</strong>を北極圏全域から、ヒグマ <strong>10 個体</strong>を
        欧州・北米・アジアから集めて全ゲノムシーケンスを行いました。
      </p>
      <p>
        重要なのは <strong>サンプリングの広さ</strong>。ホッキョクグマは「<strong>北極圏のあらゆる地域</strong>」
        （アラスカ・カナダ・グリーンランド・スバルバル・ロシア極東）から代表的に集められ、
        遺伝的多様性の全体像が捉えられました。ヒグマもユーラシア大陸・北米大陸から多様な集団を含めました。
      </p>
      <p>
        分岐時期の推定には <strong>「合祖理論（coalescent theory）」</strong>という集団遺伝学の数理モデルを使用。
        ゲノム全体の変異パターンから、両者の共通祖先が何年前に存在したかを統計的に逆算する手法です。
      </p>

      <h2 id="discovery">分岐はわずか 35〜48 万年前という衝撃</h2>
      <p>
        分析の結果、ホッキョクグマとヒグマの分岐時期は <strong>「343,000 〜 479,000 年前」</strong>と推定されました。
      </p>
      <p>
        これは、それまで化石記録ベースで考えられていた <strong>「100〜130 万年前」</strong>の
        およそ <strong>3 分の 1 から 5 分の 1</strong>の長さしかありません。
        地質学的時間スケールで言えば <strong>「ごく最近」</strong>のことです。
      </p>
      <p>
        どれくらい「最近」かというと、人類の進化と比較すると分かりやすい。
      </p>
      <ul>
        <li>
          🧬 ネアンデルタール人と現生人類の分岐: <strong>約 50 万年前</strong>
        </li>
        <li>
          🐻‍❄️ ホッキョクグマとヒグマの分岐: <strong>約 35〜48 万年前</strong>
        </li>
      </ul>
      <p>
        つまり <strong>「ホッキョクグマがヒグマから分かれた時期」と「ネアンデルタール人が現生人類から分かれた時期」が
        ほぼ同じ</strong>なのです。私たちホモ・サピエンスが「最近のサル」とも言えるように、
        ホッキョクグマも「最近のヒグマ」と言える程度の親戚関係なのでした。
      </p>

      <h2 id="genes">爆速進化した 16 個の遺伝子</h2>
      <p>
        分岐がそこまで最近なのに、ホッキョクグマは <strong>外見も生態も大きく違う</strong>動物に進化しました。
        どうやってこんなに短期間で変われたのか？ Liu らはゲノム全体の中で、
        <strong>「自然選択を強く受けた遺伝子」</strong>を 16 個特定しました。
      </p>
      <p>
        強く選択された遺伝子の機能は、見事に <strong>「北極での生存に直結する」</strong>ものでした。
      </p>
      <ul>
        <li>
          🩸 <strong>脂肪代謝（APOB, LPL ほか）</strong>: 高脂肪食の処理
        </li>
        <li>
          ❤️ <strong>心血管系（NOS3, AHSP ほか）</strong>: 高脂肪血症への耐性
        </li>
        <li>
          🐟 <strong>食物処理（PIK3CD ほか）</strong>: アザラシ脂肪の消化
        </li>
        <li>
          🌬️ <strong>呼吸器系</strong>: 極寒環境での酸素代謝
        </li>
        <li>
          🤍 <strong>毛色・皮膚色</strong>: 白い体毛、黒い皮膚
        </li>
        <li>
          🌡️ <strong>体温調節</strong>: 厳しい寒冷への適応
        </li>
      </ul>
      <p>
        Liu らは、これらの遺伝子に <strong>「強い淘汰圧」</strong>がかかった証拠を統計的に示しました。
        進化的にぐっと圧縮された時間の中で、北極環境に「<strong>絞り込まれた最適化</strong>」が
        進んだのが分かります。
      </p>

      <h2 id="apob">APOB という「コレステロール処理遺伝子」</h2>
      <p>
        その中でも特に注目されたのが、<strong>APOB</strong> という遺伝子。
        APOB は <strong>「アポリポタンパク質 B」</strong>を作るための遺伝子で、
        血中のコレステロール・脂肪を肝臓に運ぶ「<strong>運搬車」</strong>のような役割をします。
      </p>
      <p>
        ヒトでこの遺伝子に異常があると、<strong>「家族性高コレステロール血症」</strong>になり、
        若くして心筋梗塞・脳卒中を起こす危険な病態になります。
      </p>
      <p>
        ホッキョクグマの APOB は、ヒグマと比べて <strong>「機能が変化した」</strong>変異が複数蓄積していました。
        これにより、アザラシ脂肪を大量摂取してもコレステロール血症にならず、健康に生きられる仕組みが
        進化したと考えられています。
      </p>
      <p>
        この発見は人類医学にも示唆的です。ホッキョクグマがどうやって高脂肪食の害を回避しているかが分かれば、
        <strong>ヒトの肥満・糖尿病・心血管疾患の治療</strong>に応用できる可能性があります。
        実際、Liu 2014 以降、ホッキョクグマの APOB 研究は医学界の注目テーマとなり、
        現在も研究が続いています。
      </p>

      <h2 id="diet">脂肪 50% のアザラシ食を可能にした適応</h2>
      <p>
        ホッキョクグマの主食はアザラシ。それも <strong>「アザラシの脂肪」</strong>を中心に食べます。
        アザラシの皮下脂肪は体重の <strong>30〜50%</strong>を占めるエネルギー塊。
      </p>
      <p>
        この異常な高脂肪食を食べ続けるには、肝臓・心臓・血管・腸が <strong>すべて適応</strong>する必要があります。
      </p>
      <ul>
        <li>
          肝臓: 大量の脂肪を素早く処理
        </li>
        <li>
          心臓: 血中脂質が常に高い状態でも詰まらない
        </li>
        <li>
          血管: コレステロール沈着を防ぐ仕組み
        </li>
        <li>
          腸: 高脂肪食の吸収効率を最大化
        </li>
      </ul>
      <p>
        これらすべてが <strong>35〜48 万年の間に進化した</strong>。地球の進化史的にはほぼ瞬時の変化です。
        ホッキョクグマは、種としての <strong>「実験的特化</strong>」とも言える存在なのです。
      </p>

      <h2 id="hybrid">ヒグマとホッキョクグマの交雑事例</h2>
      <p>
        分岐が最近ということは、別の意味も持ちます。<strong>両者はまだ交雑可能</strong>なのです。
      </p>
      <p>
        実際、北米北部では <strong>「グロラベア（grolar bear）」</strong>または<strong>「ピズリ（pizzly）」</strong>
        と呼ばれる雑種個体が、過去 20 年で複数確認されています。
        2006 年・2010 年・2017 年・2021 年と、目撃事案は増加傾向。
      </p>
      <p>
        交雑が起きる理由は、気候変動。地球温暖化で北極の氷が後退すると、ホッキョクグマが
        <strong>陸地（ヒグマ生息域）</strong>に下りる頻度が増えます。
        逆にヒグマも温暖化で北上し、両者の接触機会が増えています。
      </p>
      <p>
        グロラベアは雑種第一代（F1）として生存可能で、繁殖能力もある可能性が示唆されています。
        これは生物学的に <strong>「両者がまだ完全に種分化していない」</strong>ことの証拠でもあります。
      </p>

      <h2 id="climate">気候変動と「ホッキョクグマ消失」シナリオ</h2>
      <p>
        Liu らの研究は <strong>「気候変動でホッキョクグマがどうなるか」</strong>にも光を当てます。
      </p>
      <p>
        35〜48 万年前の分岐時期は、地球が <strong>「氷河期」</strong>に入った時期と一致します。
        ホッキョクグマは<strong>氷河期の北極に適応した特化種</strong>であり、
        氷が広がる環境を前提に進化しました。
      </p>
      <p>
        現在は気候変動で北極の氷が急速に減少。ホッキョクグマの生息地は <strong>狭まりつつあり</strong>、
        個体群は減少傾向。一方でヒグマは温暖化に適応しやすく、北上しています。
      </p>
      <p>
        Liu 2014 の知見からは、気候変動が続けばホッキョクグマは
        <strong>「ヒグマに吸収される（交雑で遺伝子が拡散）」</strong>か、
        <strong>「絶滅する」</strong>かのシナリオが想定されると論じられています。
        どちらにせよ <strong>「種としてのホッキョクグマ」は消滅</strong>する可能性が、
        進化のスケールで言うと意外と近いのです。
      </p>

      <h2 id="japan">日本のヒグマとも血のつながりがある</h2>
      <p>
        本論文で扱われたヒグマには、<strong>北海道のエゾヒグマ</strong>も含まれます。
        遺伝的にエゾヒグマはユーラシア大陸のヒグマの一系統で、約 30〜40 万年前にサハリン経由で
        北海道に渡来したと考えられています。
      </p>
      <p>
        つまり、北海道のエゾヒグマも <strong>「ホッキョクグマと共通祖先を 35〜48 万年前まで共有していた」</strong>
        系統です。北海道の山中で出会う 300kg のヒグマは、進化的にはホッキョクグマの「いとこ」
        と言える存在なのです。
      </p>
      <p>
        本州のツキノワグマはこの議論とは別系統で、ヒグマからは <strong>約 470 万年前</strong>に分岐した
        独立した種です。詳細は{" "}
        <Link href="/articles/bear-phylogeny">クマ科の系統と進化</Link>
        を参照してください。
      </p>

      <h2 id="implications">進化はこんなに早く起こるのか</h2>
      <p>
        Liu らの研究が示した最大の学術的衝撃は、<strong>「進化は意外と速く起こる」</strong>という事実でした。
      </p>
      <p>
        従来、種が大きく変わるには <strong>「数百万年」</strong>かかると考えられてきました。
        ところがホッキョクグマは <strong>「数十万年で大型哺乳類が完全に別の生態に適応した」</strong>
        という稀有な例を提供してくれます。
      </p>
      <p>
        これは保全生物学にも重要な含意があります。
      </p>
      <ul>
        <li>
          <strong>気候変動への動物の適応</strong>: 数百万年の時間軸より、十万年単位での適応が可能
        </li>
        <li>
          <strong>絶滅危惧種の遺伝的回復</strong>: 数世代で意外と回復するかもしれない
        </li>
        <li>
          <strong>「進化に時間がかかる」前提の見直し</strong>
        </li>
      </ul>
      <p>
        ただし、ここで言う「速い」は地質学的な意味であって、人為的な環境破壊のスピードに
        進化が追いつくわけではありません。ホッキョクグマが現代の急速な氷消失に
        進化的に追従するのは不可能、というのが本論文の苦い結論でもあります。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Population genomics reveal recent speciation and rapid evolutionary adaptation in polar bears（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Liu, S., Lorenzen, E. D., Fumagalli, M., et al. (2014).{" "}
              <em className="not-italic">Cell</em> 157(4): 785–794.
            </div>
            <a
              href="https://doi.org/10.1016/j.cell.2014.03.054"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1016/j.cell.2014.03.054 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Polar and brown bear genomes reveal ancient admixture and demographic footprints of past climate change
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Miller, W., et al. (2012).{" "}
              <em className="not-italic">PNAS</em> 109(36): E2382–E2390.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              The Genetic Architecture of Adaptation to Climate in Polar Bears
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Welch, A. J., et al. (2014).{" "}
              <em className="not-italic">Molecular Biology and Evolution</em>.
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
          次号予告 — Vol.16
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマの腸内細菌が冬眠の鍵を握っていた」</strong> —
          ヒグマの腸内細菌を無菌マウスに移植して代謝を直接実証した Sommer 2016 Cell Reports。
          肥満・糖尿病研究への波及まで含めて解説します。
        </div>
      </div>
    </ArticleShell>
  );
}
