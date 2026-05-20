import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-021")!;

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
        1990 年代後半、イタリア北部 <strong>トレンティーノ州</strong>のヒグマは
        絶滅寸前まで追い込まれていました。残ったのは <strong>たった 3 頭</strong>。
        繁殖能力のある雌が含まれているかも不明という、絶望的状況でした。
      </p>
      <p>
        この危機に対し、EU 主導の壮大な再導入プロジェクト <strong>「Life Ursus」</strong>が動き出します。
        20 年後の現在、トレンティーノには <strong>100 頭超のヒグマ</strong>が生息するまでに回復しました。
        でも、新たな課題も生まれています。人クマ共存の最先端実験を読み解きます。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 2 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          ① Planning the brown bear (Ursus arctos) reintroduction in the Adamello Brenta Natural Park
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Mustoni, A., Carlini, E., Chiarenzi, B., et al. (2003).{" "}
          <em className="not-italic">Hystrix Italian Journal of Mammalogy</em> 14(1-2).
        </div>
        <div className="mt-3 text-sm font-semibold text-stone-900">
          ② Brown bear reintroduction in the southern Alps: To what extent are expectations being met?
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Tosi, G., Chirichella, R., Zibordi, F., et al. (2015).{" "}
          <em className="not-italic">Journal for Nature Conservation</em> 26: 9–19.
        </div>
        <a
          href="https://doi.org/10.1016/j.jnc.2015.04.001"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1016/j.jnc.2015.04.001 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            残存 <strong>3 頭</strong>のヒグマに、1999〜2002 年でスロベニアから <strong>10 頭</strong>を補強
          </li>
          <li>
            20 年後の現在、個体群は <strong>100 頭超</strong>に回復（10 倍以上）
          </li>
          <li>
            新たな課題は <strong>「人クマ軋轢の急増」</strong>。最近年は襲撃事案も発生
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "history", title: "イタリアにヒグマがいたという事実" },
          { id: "decline", title: "20 世紀末、絶滅寸前の 3 頭" },
          { id: "life-ursus", title: "EU の「Life Ursus」プロジェクト発足" },
          { id: "reintro", title: "10 頭のスロベニア産ヒグマを補強" },
          { id: "recovery", title: "20 年で 10 倍に — 個体群の回復" },
          { id: "challenges", title: "成功の影 — 軋轢の増加" },
          { id: "andrea", title: "M49・JJ4 — 個別事案が地域を分断" },
          { id: "lessons", title: "再導入から日本が学べること" },
          { id: "japan", title: "日本でクマの再導入はあり得るか" },
          { id: "ethics", title: "「絶滅させない vs 安全な暮らし」の倫理" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="history">イタリアにヒグマがいたという事実</h2>
      <p>
        多くの人にとって意外かもしれませんが、<strong>イタリアにもヒグマが生息</strong>します。
        本州よりやや南の緯度ですが、アルプス山脈の南斜面（ドロミテ・トレンティーノ地方）に
        歴史的にヒグマの個体群がありました。
      </p>
      <p>
        中世までは <strong>イタリア中部のアペニン山脈</strong>にも生息し、
        ローマ時代から人間との関わりが文献に残っています。
        ところが 19〜20 世紀の狩猟・農地開発・森林伐採で、ヒグマの分布は急激に縮小。
        20 世紀後半までに、トレンティーノ州ブレンタ山塊（アダメロ・ブレンタ自然公園）の
        <strong>わずかな個体群</strong>だけが残るまでになりました。
      </p>

      <h2 id="decline">20 世紀末、絶滅寸前の 3 頭</h2>
      <p>
        1990 年代後半の調査で、研究者たちは衝撃の事実を確認します。
      </p>
      <p>
        ブレンタ山塊に残っていたヒグマは <strong>「わずか 3 頭」</strong>。
        しかも全て高齢で、繁殖能力のある雌が含まれているかも不確実。このままでは
        <strong>「数年以内に絶滅」</strong>することが避けられない状況でした。
      </p>
      <p>
        単に「数が少ない」だけの問題ではありませんでした。3 頭という個体数は
        <strong>「遺伝的多様性が崩壊している」</strong>サインでもあり、たとえ繁殖しても
        近親交配で子孫の生存率が低下するリスクがあった。
      </p>
      <p>
        この絶望的状況を見て、EU・イタリア政府・トレンティーノ州・アダメロ・ブレンタ自然公園が
        合同で立ち上げたのが <strong>「Life Ursus」プロジェクト</strong>でした。
      </p>

      <h2 id="life-ursus">EU の「Life Ursus」プロジェクト発足</h2>
      <p>
        Life Ursus は 1996 年に始まった EU 環境保全プログラムの一環。
        プロジェクトの中心目標は明確でした。
      </p>
      <ol>
        <li>
          🐻 トレンティーノのヒグマ個体群を <strong>絶滅から救う</strong>
        </li>
        <li>
          🧬 遺伝的多様性を <strong>外部から補強</strong>する
        </li>
        <li>
          🌍 アルプス山脈全体への <strong>分布回復</strong>を目指す
        </li>
        <li>
          🤝 地元住民との <strong>共存基盤を整備</strong>する
        </li>
      </ol>
      <p>
        Mustoni らは、再導入の計画段階で <strong>地形・食物・人口分布・社会受容</strong>を多角的に分析。
        トレンティーノの地理は人口密度がそれほど高くなく、アルプス南部の森林が広がっており、
        ヒグマの再導入には十分適していると結論しました。
      </p>

      <h2 id="reintro">10 頭のスロベニア産ヒグマを補強</h2>
      <p>
        補強元として選ばれたのは <strong>スロベニアのヒグマ個体群</strong>。
        トレンティーノに最も近いヒグマ生息域で、遺伝的にも近縁、生息環境も類似していました。
      </p>
      <p>
        1999〜2002 年の 4 年間で、<strong>10 頭のスロベニア産ヒグマ</strong>（雄 4 頭・雌 6 頭、
        いずれも若い成獣）が捕獲・輸送・放獣されました。
      </p>
      <ul>
        <li>
          📦 各個体は GPS 首輪を装着して放獣後の行動を追跡
        </li>
        <li>
          🚛 輸送中の安全と医療管理を獣医師が担当
        </li>
        <li>
          📍 放獣地点はブレンタ山塊の中心部の自然保護区
        </li>
        <li>
          📚 放獣前後の住民教育プログラムも並行実施
        </li>
        <li>
          💰 EU から <strong>200 万ユーロ規模</strong>の予算
        </li>
      </ul>

      <h2 id="recovery">20 年で 10 倍に — 個体群の回復</h2>
      <p>
        プロジェクト開始から 20 年が経った 2020 年代の現在、トレンティーノのヒグマ個体群は
        確実に回復しました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">年</th>
              <th className="px-3 py-2 text-left">個体数（推定）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">1999（プロジェクト開始時）</td>
              <td className="px-3 py-2 tabular-nums">3 頭（残存個体）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">2002（再導入完了）</td>
              <td className="px-3 py-2 tabular-nums">~13 頭</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">2010</td>
              <td className="px-3 py-2 tabular-nums">~30 頭</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">2015</td>
              <td className="px-3 py-2 tabular-nums">~50 頭</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">2023</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">100〜120 頭</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        20 年で <strong>10 倍以上</strong>の回復。これは生物保全プロジェクトの成功事例として
        世界的に評価されており、保全生物学の教科書にも掲載される事例となりました。
      </p>

      <h2 id="challenges">成功の影 — 軋轢の増加</h2>
      <p>
        しかし、個体数の回復には別の側面もありました。
      </p>
      <p>
        個体数が増えるにつれ、<strong>「クマと人の接触」</strong>が増えました。
        村への出没、養蜂場への侵入、家畜被害、ハイカーとの遭遇 — どれも増加傾向。
      </p>
      <p>
        2014 年以降、地元紙では <strong>「ヒグマ被害」</strong>のニュースが頻繁に取り上げられるように。
        2017 年・2020 年・2023 年と <strong>人身被害事案</strong>も発生し、地元住民の中には
        プロジェクトに対する不満が広がってきました。
      </p>
      <p>
        Tosi ら 2015 は、この問題を率直に指摘しています。「<strong>個体群復活は成功したが、
        共存の社会的基盤整備は遅れた</strong>」と。
        個体数管理・住民教育・補償制度を <strong>個体群回復と同時並行で進める必要があった</strong>、というのが
        本研究の重要な教訓です。
      </p>

      <h2 id="andrea">M49・JJ4 — 個別事案が地域を分断</h2>
      <p>
        この共存課題が爆発的に表面化したのが、<strong>「特定問題個体」</strong>の事案でした。
      </p>
      <h3>M49 のケース（2019 年）</h3>
      <p>
        7 歳のヒグマ M49 は、繰り返し家畜・養蜂を襲い、<strong>3 度逃走</strong>して全国を騒がせました。
        トレンティーノ州知事が射殺命令を出すも、SNS で激しい反対運動が起きる。最終的には保護施設へ移送。
      </p>
      <h3>JJ4 のケース（2023 年）</h3>
      <p>
        17 歳の母グマ JJ4 は、子グマを守るため <strong>26 歳のジョギング中の男性を襲撃して死亡させた</strong>。
        州は射殺命令を出すが、動物愛護団体が訴訟。司法判断で射殺は停止、捕獲・施設収容となりました。
      </p>
      <p>
        これらの事案は、地元住民・州政府・保護団体・SNS という <strong>分断構造</strong>を生み出し、
        Life Ursus 全体の評価にも影を落としました。「<strong>絶滅させない</strong>」「<strong>安全な暮らし</strong>」
        の両立がいかに難しいかが浮き彫りになっています。
      </p>

      <h2 id="lessons">再導入から日本が学べること</h2>
      <p>
        Life Ursus の経験は、日本のクマ管理にも貴重な教訓を与えてくれます。
      </p>
      <ul>
        <li>
          📈 <strong>個体群回復と軋轢増加はセット</strong>: 数が増えれば必ず人クマ接触は増える
        </li>
        <li>
          🏛️ <strong>制度整備は個体群回復と同時並行で</strong>: 補償・教育・特定個体管理の仕組みを先に
        </li>
        <li>
          📣 <strong>住民教育は永続的に必要</strong>: 一度教育して終わりではなく、世代を超えて継続
        </li>
        <li>
          ⚖️ <strong>個別問題個体の対応プロトコル</strong>を明確に: 「いつ・誰が・どう判断するか」を事前に
        </li>
        <li>
          🤝 <strong>地域の利害関係者を巻き込む</strong>: 農家・養蜂・観光・自治体・NGO の連携
        </li>
      </ul>

      <h2 id="japan">日本でクマの再導入はあり得るか</h2>
      <p>
        日本では、ヒグマ・ツキノワグマとも <strong>個体数自体は豊富</strong>な状況で、
        本格的な再導入の必要性はありません。ただし、絶滅危惧地域個体群はあります。
      </p>
      <ul>
        <li>
          <strong>四国のツキノワグマ</strong>: 推定 16〜24 頭、極めて深刻な絶滅危機
        </li>
        <li>
          <strong>九州のツキノワグマ</strong>: 1957 年に最後の確認、現在はおそらく絶滅
        </li>
        <li>
          <strong>西中国（中国地方西部）</strong>: かつての絶滅危惧個体群（現在は回復傾向）
        </li>
      </ul>
      <p>
        これらの地域でクマの再導入が検討される可能性はゼロではありません。
        Life Ursus の経験は、その際の <strong>計画・実施・住民対応・モニタリング</strong>の
        貴重な参考事例となるでしょう。
      </p>

      <h2 id="ethics">「絶滅させない vs 安全な暮らし」の倫理</h2>
      <p>
        Life Ursus が突きつけた最も難しい問いは、<strong>「クマと人、どちらの生命を優先するか」</strong>
        という倫理問題です。
      </p>
      <p>
        絶滅させたくない、共存したい — これは美しい理想です。
        でも、共存の代償として <strong>人身被害・農業被害・行動制約</strong>が出るのも事実。
        誰がその負担を負うのか、どこまでが許容可能か、社会全体での合意形成が必要です。
      </p>
      <p>
        この問いに、Mustoni らは「<strong>科学だけでは答えが出ない</strong>」と認めています。
        生物学的データを基に、社会的議論・住民参画・倫理的検討を <strong>並行して進める</strong>
        必要がある、という慎重なメッセージで論文は締められています。
      </p>
      <p>
        日本のクマ管理にとっても、この姿勢は重要です。
        詳細は{" "}
        <Link href="/articles/culling-debate">駆除をめぐる議論</Link>
        も併読してください。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Planning the brown bear reintroduction in the Adamello Brenta Natural Park（本号メイン①）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Mustoni, A., et al. (2003).{" "}
              <em className="not-italic">Hystrix Italian Journal of Mammalogy</em> 14(1-2).
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Brown bear reintroduction in the southern Alps（本号メイン②）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Tosi, G., et al. (2015).{" "}
              <em className="not-italic">Journal for Nature Conservation</em> 26: 9–19.
            </div>
            <a
              href="https://doi.org/10.1016/j.jnc.2015.04.001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1016/j.jnc.2015.04.001 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Trentino Province annual bear reports（自治体公式報告）
            </div>
            <a
              href="https://grandicarnivori.provincia.tn.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              grandicarnivori.provincia.tn.it →
            </a>
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
          次号予告 — Vol.22
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマの行動圏は最大 2,000 km²」</strong> —
          GPS テレメトリーで初めて精密測定できるようになったクマの行動圏。
          雄と雌の差、季節変動、地形の影響を Mowat &amp; Heard 2006 ほかで解説します。
        </div>
      </div>
    </ArticleShell>
  );
}
