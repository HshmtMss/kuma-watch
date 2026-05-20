import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-017")!;

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
        北米のロッキー山脈で、ある研究者が古いログハウスを発見しました。
        分厚い丸太の壁に <strong>幅 5 cm の溝</strong>が深く刻まれている。
        それは何十年も前、1 頭のヒグマが歯と顎の力だけで丸太を <strong>「噛み砕こうと試みた」</strong>痕跡でした。
      </p>
      <p>
        クマの咬合力（噛む力）は伝説的に語られてきました。
        丸太を砕く、頭蓋骨を粉砕する、ヘラジカの大腿骨を二つに割る — どれも事実です。
        では、ライオンやトラと比べて実際どれだけ強いのか？
        2007 年、世界中の博物館の標本を測定して定量化した壮大な研究があります。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Bite forces and evolutionary adaptations to feeding ecology in carnivores
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Christiansen, P., &amp; Wroe, S. (2007).{" "}
          <em className="not-italic">Ecology</em> 88(2): 347–358.
        </div>
        <a
          href="https://doi.org/10.1890/0012-9658(2007)88[347:BFAEAT]2.0.CO;2"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1890/0012-9658(2007)88[347:BFAEAT]2.0.CO;2 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            食肉目 <strong>151 種の頭骨</strong>を計測して咬合力をモデル化
          </li>
          <li>
            ヒグマの咬合力は <strong>約 1,200 N</strong>。ライオン（600 N）の <strong>2 倍</strong>
          </li>
          <li>
            体格補正でもクマは <strong>上位グループ</strong>。骨や植物繊維も粉砕できる強さ
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "「クマは丸太を噛み砕く」は本当か" },
          { id: "method", title: "151 種の頭骨を世界中から集めた" },
          { id: "physics", title: "咬合力を「計算」する仕組み" },
          { id: "result", title: "結果 — クマは食肉目トップクラス" },
          { id: "lion", title: "ライオンとの比較で見える違い" },
          { id: "why", title: "なぜクマはこんなに強く噛めるのか" },
          { id: "anatomy", title: "ヒグマの頭骨と顎の構造" },
          { id: "diet", title: "「噛む力」が雑食を可能にした" },
          { id: "japan", title: "日本のクマでも丸太や頭骨を砕ける" },
          { id: "implications", title: "人クマ遭遇時の意味 — 致死的になる理由" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「クマは丸太を噛み砕く」は本当か</h2>
      <p>
        クマの咬合力に関する逸話は、世界中で数多く伝えられています。
      </p>
      <ul>
        <li>
          🪵 <strong>蜂蜜を求めて木の幹に穴を開ける</strong>（数センチ厚の樹皮を噛み剥がす）
        </li>
        <li>
          🦴 <strong>ヘラジカ・トナカイの大腿骨を割る</strong>（直径 5 cm の骨を中で割って骨髄を食べる）
        </li>
        <li>
          🥜 <strong>クルミ・栗を殻ごと食べる</strong>（人間の手では割れない硬さ）
        </li>
        <li>
          🥩 <strong>凍ったアザラシ・サケを噛み砕く</strong>（北極圏のヒグマ・ホッキョクグマ）
        </li>
        <li>
          🏠 <strong>木造小屋に侵入</strong>（壁・扉・窓枠を破壊して侵入）
        </li>
      </ul>
      <p>
        これらは「逸話」だけでなく <strong>実証された行動</strong>です。
        でも、なぜそんなことが可能なのか。具体的に <strong>何ニュートン</strong>の力で、
        他の肉食動物と比べてどう違うのか — 2007 年までこれは科学的に未測定でした。
      </p>
      <p>
        この問いに、デンマーク・コペンハーゲン動物博物館の <strong>Per Christiansen</strong>と、
        オーストラリア・ニューサウスウェールズ大学の <strong>Stephen Wroe</strong>が挑みました。
      </p>

      <h2 id="method">151 種の頭骨を世界中から集めた</h2>
      <p>
        Christiansen らの方法は、極めて地道でした。世界中の自然史博物館を訪ね、
        <strong>食肉目 151 種、計 700 個以上の頭骨標本</strong>を実測したのです。
      </p>
      <ul>
        <li>
          🐯 大型ネコ科: ライオン・トラ・ヒョウ・チーター・ジャガー
        </li>
        <li>
          🐺 イヌ科: オオカミ・コヨーテ・ジャッカル・キツネ
        </li>
        <li>
          🐻 クマ科: ヒグマ・クロクマ・ホッキョクグマ・ツキノワグマ・パンダ
        </li>
        <li>
          🦝 アライグマ・イタチ・ハイエナ・ジャコウネコ系
        </li>
        <li>
          🐧 海棲食肉目: アザラシ・アシカ・セイウチ
        </li>
      </ul>
      <p>
        各頭骨について、咀嚼筋の付着位置・顎の長さ・歯の形状などを 3D 計測しました。
        この膨大なデータベースを使って、各動物の <strong>咬合力</strong>を計算式で推定する研究でした。
      </p>

      <h2 id="physics">咬合力を「計算」する仕組み</h2>
      <p>
        生きた動物の咬合力を測るには、本人に <strong>「専用の力センサー」を噛ませる</strong>方法があります。
        実験室の犬や、麻酔した野生動物では実測例があります。
      </p>
      <p>
        しかし、ヒグマやホッキョクグマで実測は危険すぎる。そこで Christiansen らは
        <strong>「頭骨の形から咬合力を物理計算する」</strong>手法を使いました。
      </p>
      <p>
        基本原理はシンプルです。咬合力は次の 3 要素で決まります。
      </p>
      <ul>
        <li>
          <strong>咀嚼筋の量</strong>: 頭骨の咀嚼筋付着部の大きさで推定
        </li>
        <li>
          <strong>テコの原理（顎の長さ）</strong>: 顎の支点・力点・作用点の距離関係
        </li>
        <li>
          <strong>歯の位置</strong>: 犬歯か臼歯か、奥か手前か
        </li>
      </ul>
      <p>
        これらを統合的に計算するモデルが、当時最新の <strong>「動物生体力学（biomechanics）」</strong>として確立されていました。
        Christiansen らはこれを 151 種に適用し、初めて種横断的な比較を可能にしたのです。
      </p>

      <h2 id="result">結果 — クマは食肉目トップクラス</h2>
      <p>
        ヒグマと他の代表的食肉目の咬合力（犬歯位置で噛んだ時）を比較すると、こうなりました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">動物</th>
              <th className="px-3 py-2 text-left">咬合力（N、犬歯位置）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ヒト</td>
              <td className="px-3 py-2 tabular-nums">~150</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">家畜イヌ（中型）</td>
              <td className="px-3 py-2 tabular-nums">~250</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">大型イヌ（マスティフ）</td>
              <td className="px-3 py-2 tabular-nums">~552</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ライオン</td>
              <td className="px-3 py-2 tabular-nums">~600</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">トラ</td>
              <td className="px-3 py-2 tabular-nums">~1,050</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ハイエナ</td>
              <td className="px-3 py-2 tabular-nums">~1,100</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">ヒグマ</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">~1,200</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ホッキョクグマ</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">~1,200</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ジャイアントパンダ</td>
              <td className="px-3 py-2 tabular-nums">~1,300</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ヒグマの咬合力は <strong>約 1,200 ニュートン</strong>。
        これは人間の <strong>8 倍</strong>、ライオンの <strong>2 倍</strong>、トラより少し強い、という結果でした。
      </p>
      <p>
        驚くべきは <strong>ジャイアントパンダ</strong>が 1,300 N でクマ科最大級。
        肉食しないのに咬合力は最強級 — 竹の硬い繊維を噛み砕くために特化した結果と考えられています。
      </p>

      <h2 id="lion">ライオンとの比較で見える違い</h2>
      <p>
        「クマがライオンの 2 倍」と聞いて意外に思う方もいるでしょう。
        ライオンは <strong>百獣の王</strong>のイメージがあり、噛む力も最強と思いがちです。
      </p>
      <p>
        しかし、Christiansen らの解析では、ネコ科は <strong>咬合力よりスピード・俊敏さ</strong>に
        特化した進化を遂げており、絶対的な噛む力ではクマ科に及びません。
      </p>
      <ul>
        <li>
          🐯 <strong>ネコ科</strong>: 細長い顎、長い犬歯、素早い噛みつき。獲物の喉を素早く絞める用途
        </li>
        <li>
          🐻 <strong>クマ科</strong>: 短く太い顎、強い咬筋、ゆっくりだが破壊的な噛む力。骨・植物繊維も砕く
        </li>
      </ul>
      <p>
        ライオン・トラは <strong>瞬間最大力</strong>でクマに劣るが、<strong>狩りに最適化</strong>されています。
        クマは <strong>幅広い食性</strong>に対応できる「万能型」の咬合力を持ちます。
      </p>

      <h2 id="why">なぜクマはこんなに強く噛めるのか</h2>
      <p>
        クマの咬合力の強さには、3 つの解剖学的な理由があります。
      </p>
      <h3>① 巨大な咬筋・側頭筋</h3>
      <p>
        頭骨の側面と頬骨に付着する咬筋・側頭筋が、他の食肉目と比べて <strong>2〜3 倍</strong>の体積。
        頭骨の頂部（矢状稜）も発達しており、強力な咀嚼筋を支える構造を持ちます。
      </p>
      <h3>② 短く太い顎</h3>
      <p>
        テコの原理として「<strong>力点（顎関節）から作用点（歯）までの距離が短いほど力が出る</strong>」。
        クマの顎はネコ科より <strong>明らかに短く太い</strong>。これによりてこ比が有利になり、強力な咬合力が出ます。
      </p>
      <h3>③ 大きな顎関節と頭蓋固定</h3>
      <p>
        強く噛むためには <strong>顎関節がガッチリ固定</strong>される必要があります。
        ヒグマの顎関節は周囲の頭骨と強固に連結しており、力を逃さない設計。
      </p>

      <h2 id="anatomy">ヒグマの頭骨と顎の構造</h2>
      <p>
        実際にヒグマの頭骨を観察すると、以下の特徴が分かります。
      </p>
      <ul>
        <li>
          🦷 <strong>歯の構成</strong>: 切歯 12 本・犬歯 4 本・前臼歯 16 本・後臼歯 10 本（合計 42 本）
        </li>
        <li>
          🦴 <strong>犬歯の長さ</strong>: 5〜7 cm（人の犬歯の 5〜7 倍）
        </li>
        <li>
          ⚪ <strong>臼歯の幅</strong>: ネコ科の <strong>2 倍以上</strong>。植物・骨を砕くために発達
        </li>
        <li>
          ⚙️ <strong>顎関節</strong>: 大きく頑丈、横方向の動きが制限される（噛み下げに特化）
        </li>
        <li>
          🏔️ <strong>頭蓋骨の厚み</strong>: 強い咬合力で割れないよう、ネコ科より厚い
        </li>
      </ul>
      <p>
        この構造は <strong>「骨を割って骨髄を食べる」</strong>「<strong>堅果・植物繊維を粉砕する</strong>」
        「<strong>木をかじる</strong>」といった行動を可能にします。
      </p>

      <h2 id="diet">「噛む力」が雑食を可能にした</h2>
      <p>
        進化的に見ると、クマの強力な咬合力は <strong>「食性の幅広さ」</strong>を生むための適応です。
      </p>
      <p>
        多くの肉食動物は、特定の食物にしか対応できません。
        ライオンは大型獲物の喉笛を絞めるのに特化し、それ以外の餌（堅果・骨・植物の根）は食べにくい。
        逆に植物食動物は、強い咀嚼力を持つが <strong>肉を噛みちぎる</strong>力は弱い。
      </p>
      <p>
        クマは咬合力を「<strong>強くしすぎず弱すぎず、幅広い食物に対応</strong>」する設計を選びました。
        この結果、ベリー・草・堅果・キノコ・魚・小型哺乳類・骨髄・蜂蜜まで、ほぼ何でも食べられます。
      </p>
      <p>
        Vol.6 の食選好研究（{" "}
        <Link href="/articles/research-digest-006">Erlenbach 2014</Link>
        ）で見たように、クマは栄養バランスを最適化するために <strong>多様な食物を選択</strong>します。
        その「選べる幅」を支えているのが、強力で汎用的な咬合力なのです。
      </p>

      <h2 id="japan">日本のクマでも丸太や頭骨を砕ける</h2>
      <p>
        日本のツキノワグマ（成獣 80〜150kg）も、ヒグマほどではないが <strong>強力な咬合力</strong>を持ちます。
      </p>
      <p>
        推定咬合力は <strong>約 800〜1,000 N</strong>。
        体格はヒグマの 半分程度ですが、咬合力は <strong>3 割減程度</strong>に留まります。
        これは小型クマでも <strong>「噛む力に特化した進化」</strong>が保たれている証拠です。
      </p>
      <p>
        日本のツキノワグマができることの実例：
      </p>
      <ul>
        <li>
          🌰 <strong>クリ・トチ・クルミの殻を割る</strong>
        </li>
        <li>
          🦴 <strong>シカ・イノシシの大腿骨を割って骨髄を食べる</strong>（屍肉採食時）
        </li>
        <li>
          🌳 <strong>ブナ・ナラの樹皮を剥がす</strong>（マーキング時、Vol.13 参照）
        </li>
        <li>
          🐝 <strong>養蜂場の巣箱を破壊</strong>（蜂蜜を求めて）
        </li>
        <li>
          🚪 <strong>木造の納屋・倉庫の扉を破壊して侵入</strong>
        </li>
      </ul>

      <h2 id="implications">人クマ遭遇時の意味 — 致死的になる理由</h2>
      <p>
        この咬合力の知識は、人クマ遭遇時の <strong>致死性</strong>を理解するために重要です。
      </p>
      <p>
        人間の頭蓋骨の厚さは約 6〜7 mm、強度は約 500 N で破壊されると推定されます。
        ヒグマの犬歯一噛みは <strong>1,200 N</strong>。クロクマでも <strong>700〜900 N</strong>。
        ツキノワグマでも <strong>800〜1,000 N</strong>。
      </p>
      <p>
        つまり、<strong>クマが頭部を本気で噛めば、人の頭蓋骨はほぼ確実に破壊される</strong>。
        日本でも過去のクマ被害事案で、頭蓋骨損傷による致命傷の報告は少なくありません。
      </p>
      <p>
        だからこそ、Vol.1（{" "}
        <Link href="/articles/research-digest-001">Smith 2008 クマスプレー</Link>
        ）で見たように、<strong>「噛まれないための予防」</strong>が最も重要。
        噛まれてからの治療は極めて困難で、致死率も高くなります。
      </p>
      <p>
        遭遇時の対処は{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
        と{" "}
        <Link href="/articles/first-aid">クマに襲われた後の応急処置</Link>
        を参照してください。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Bite forces and evolutionary adaptations to feeding ecology in carnivores（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Christiansen, P., &amp; Wroe, S. (2007).{" "}
              <em className="not-italic">Ecology</em> 88(2): 347–358.
            </div>
            <a
              href="https://doi.org/10.1890/0012-9658(2007)88[347:BFAEAT]2.0.CO;2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI link →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              The dietary specializations of the giant panda from a biomechanical perspective
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Tseng, Z. J., &amp; Wang, X. (2010).{" "}
              <em className="not-italic">Journal of Vertebrate Paleontology</em>.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Biomechanical evidence of bone-crushing capability in dire wolves
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Wroe, S., McHenry, C., &amp; Thomason, J. (2005).{" "}
              <em className="not-italic">Proc. Royal Society B</em>.
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
          次号予告 — Vol.18
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマは森に『サケの栄養』を運んでいた」</strong> —
          ブリティッシュコロンビアの 50 川を調査した Hocking 2011 Science。
          クマがサケを森に運ぶことで、植物の多様性と樹木の成長が大きく変わる
          「生態系エンジニア」としてのクマの役割を解説します。
        </div>
      </div>
    </ArticleShell>
  );
}
