import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-013")!;

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
        山を歩いていて、樹皮が剥がれて茶色い毛が付着した木を見たことがあるでしょうか。
        その木は <strong>「ベアラブツリー（bear rub tree）」</strong>と呼ばれ、クマがわざわざ選んで
        背中をこすりつけている <strong>「クマだけの社会的メッセージボード」</strong>です。
      </p>
      <p>
        森に無数にある木の中から、クマは特定の数本だけを選んで使い続けます。
        どんな基準で？ なぜ？ Clapham ら（2014）の論文がこの謎を解き明かしました。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          The function of strategic tree selectivity in the chemical signalling of brown bears
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Clapham, M., Nevin, O. T., Ramsey, A. D., &amp; Rosell, F. (2014).{" "}
          <em className="not-italic">Animal Behaviour</em> 87: 151–156.
        </div>
        <a
          href="https://doi.org/10.1016/j.anbehav.2013.10.024"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1016/j.anbehav.2013.10.024 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            クマは森に無数にある木の中から <strong>特定の数本だけ</strong>を選んで擦りつける
          </li>
          <li>
            選ばれる木は <strong>道沿い・直径 30cm 以上・樹皮の質感が独特</strong>
          </li>
          <li>
            これは <strong>「化学メッセージ」</strong>を残す行動で、性別・繁殖状態などを通信
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "what", title: "「ベアラブツリー」とは何か" },
          { id: "researcher", title: "クマの BearID Project を率いた研究者" },
          { id: "method", title: "60 本の木と 200 頭のクマ — 試験方法" },
          { id: "selection", title: "クマが選ぶ「特別な木」の条件" },
          { id: "message", title: "クマは何を伝えているのか" },
          { id: "who", title: "誰が、いつ、なぜ擦るのか" },
          { id: "japan", title: "日本の山でもラブツリーを見かける" },
          { id: "monitoring", title: "保護研究での活用 — DNA 採取拠点として" },
          { id: "social", title: "クマの「社会性」を再考する" },
          { id: "action", title: "山でラブツリーを見つけたら" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="what">「ベアラブツリー」とは何か</h2>
      <p>
        ベアラブツリー（bear rub tree）とは、クマが <strong>背中・首・お尻を擦りつけることを繰り返している木</strong>。
        北米・欧州・アジアの森林で広く観察される現象です。
      </p>
      <p>
        実際にラブツリーを見ると、次のような特徴があります。
      </p>
      <ul>
        <li>
          🌳 <strong>樹皮が剥がれ</strong>、つるつるになっている（高さ 1〜2 m の範囲）
        </li>
        <li>
          🐻 <strong>茶色や黒い毛</strong>が大量に付着している
        </li>
        <li>
          🪵 <strong>爪痕</strong>（バークスクラブ）も併存することが多い
        </li>
        <li>
          🌊 <strong>木が斜めに傾く・幹が窪む</strong>（長年使われた結果）
        </li>
        <li>
          🦴 周囲に <strong>クマの糞・足跡</strong>が頻繁
        </li>
      </ul>
      <p>
        昔から「クマが背中をかゆがって木に擦りつけている」と思われがちですが、
        実はもっと <strong>戦略的な意味</strong>を持つ行動であることが、近年の研究で明らかになりました。
      </p>

      <h2 id="researcher">クマの BearID Project を率いた研究者</h2>
      <p>
        筆頭著者 <strong>Melanie Clapham</strong>は、Vol.3（{" "}
        <Link href="/articles/research-digest-003">AI 顔認識</Link>
        ）でも登場した、クマ研究の若き第一人者。
        本論文発表時はカンブリア大学（イギリス）の博士課程学生で、
        後にカナダで BearID Project を立ち上げ、AI 個体識別の世界的研究者に成長します。
      </p>
      <p>
        共著者の <strong>Frank Rosell</strong>（ノルウェー・テレマーク大学）は、
        匂いを使ったコミュニケーションの第一人者で、ビーバーの肛門腺研究で知られます。
        この 2 人が組んで、クマの「<strong>化学的シグナリング（chemical signalling）</strong>」を本格的に解析した最初の研究の一つが本論文でした。
      </p>

      <h2 id="method">60 本の木と 200 頭のクマ — 試験方法</h2>
      <p>
        舞台はカナダ・ブリティッシュコロンビア州の <strong>クニソンインレット保護区</strong>。
        ヒグマの密度が高く、トレイルカメラと現地観察が組み合わせやすい場所です。
      </p>
      <p>
        Clapham らの方法は次の通り。
      </p>
      <ul>
        <li>
          🌳 <strong>60 本</strong>のラブツリー候補（過去に使用痕跡が確認された木）を選定
        </li>
        <li>
          📷 各木の前にトレイルカメラを設置し、24 時間体制で撮影
        </li>
        <li>
          📏 各木の <strong>樹種・直径・樹皮の質感・周囲の植生・道沿いの有無</strong>を測定
        </li>
        <li>
          🐻 撮影された <strong>約 200 頭のヒグマ個体</strong>を識別（後の AI 顔認識研究の前身）
        </li>
        <li>
          🗓️ <strong>2 年間</strong>のデータを蓄積し、季節・年齢・性別との相関を解析
        </li>
      </ul>
      <p>
        60 本というサンプル数は、当時としては相当な規模。
        この大規模データセットがあったからこそ、「<strong>クマは無作為に木を選んでいるのではない</strong>」
        という結論を統計的に主張できるようになりました。
      </p>

      <h2 id="selection">クマが選ぶ「特別な木」の条件</h2>
      <p>
        2 年間の観察で、ラブツリーになる木とならない木の <strong>明確な差</strong>が見えてきました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">特徴</th>
              <th className="px-3 py-2 text-left">クマが選ぶ条件</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">場所</td>
              <td className="px-3 py-2">クマの通り道（獣道・林道）沿い</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">樹種</td>
              <td className="px-3 py-2">針葉樹（モミ・ベイマツ・スプルース）を強く選好</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">幹の太さ</td>
              <td className="px-3 py-2">直径 30 cm 以上</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">樹皮</td>
              <td className="px-3 py-2">粗くて剥がれやすい質感（匂いが残りやすい）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">周辺環境</td>
              <td className="px-3 py-2">見通しが良く、近くに障害物がない</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">道路との距離</td>
              <td className="px-3 py-2">「道沿い」を強く選好（無作為より 4 倍頻度高）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        統計的に最も強い要因は <strong>「道沿いであるかどうか」</strong>。
        これは別の言い方をすると、<strong>「他のクマが通る確率の高い場所」</strong>に
        集中していたことを意味します。クマたちが <strong>「メッセージを残す場所」</strong>として、
        効率的なポストを選んでいる証拠です。
      </p>

      <h2 id="message">クマは何を伝えているのか</h2>
      <p>
        では、何を伝えているのでしょうか？ 残された <strong>毛・体液・皮脂</strong>のサンプルを採取して
        分析することで、いくつかの「メッセージ」が解読されています。
      </p>
      <h3>① 「自分はここにいる」</h3>
      <p>
        最も基本的な情報。<strong>クマの個体ID</strong>がフェロモン・体臭から識別されます。
        別のクマがそれを嗅ぐと、「ここを通ったのは誰か」が分かる。
      </p>
      <h3>② 「自分の性別・年齢・体格」</h3>
      <p>
        匂いの成分から、雄か雌か、若いか成獣か、体格はどれくらいかが識別できます。
        繁殖期の雄にとっては、自分の<strong>存在感</strong>をアピールする手段になります。
      </p>
      <h3>③ 「繁殖期の状態」</h3>
      <p>
        雌の発情期（5〜7 月）には、ホルモン由来の<strong>性フェロモン</strong>がより強く出ます。
        遠くにいる雄も、ラブツリーの匂いを嗅いで雌の発情状態を察知し、移動を始めます。
      </p>
      <h3>④ 「ここは自分の縄張り」</h3>
      <p>
        強い雄の匂いがあるラブツリーには、他の雄が近づきにくい傾向。
        これは <strong>テリトリーの間接的な主張</strong>として機能します。
      </p>
      <h3>⑤ 「最近通った時間」</h3>
      <p>
        匂いの強さから「<strong>つい最近か、数日前か、数週間前か</strong>」が分かる。
        クマには鋭い嗅覚があるので（{" "}
        <Link href="/articles/research-digest-005">Vol.5</Link>{" "}）、時間情報も読み取れるのです。
      </p>

      <h2 id="who">誰が、いつ、なぜ擦るのか</h2>
      <p>
        トレイルカメラのデータから、利用パターンも明らかになりました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">クマの種類</th>
              <th className="px-3 py-2 text-left">利用頻度</th>
              <th className="px-3 py-2 text-left">時期のピーク</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">成獣雄</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">最多</td>
              <td className="px-3 py-2">5〜7 月（繁殖期）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">単独の若い雄</td>
              <td className="px-3 py-2 tabular-nums">中程度</td>
              <td className="px-3 py-2">夏全般</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">発情期の雌</td>
              <td className="px-3 py-2 tabular-nums">中程度</td>
              <td className="px-3 py-2">5〜7 月</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">子連れの母グマ</td>
              <td className="px-3 py-2 text-green-700 tabular-nums">最少</td>
              <td className="px-3 py-2">稀</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        圧倒的に <strong>「繁殖期の成獣雄」</strong>がラブツリーを多用していました。
        これは Vol.12 の「致命的襲撃の 88% が成獣雄」（{" "}
        <Link href="/articles/research-digest-012">Herrero 2011</Link>{" "}
        ）と整合的で、雄ヒグマが <strong>テリトリーと繁殖機会</strong>を巡って活発に通信していることを示します。
      </p>
      <p>
        逆に、子連れ母グマはラブツリーをほとんど使いません。
        子を守るために <strong>「自分の存在を匂いで主張しない」</strong>戦略を取っているのでしょう。
      </p>

      <h2 id="japan">日本の山でもラブツリーを見かける</h2>
      <p>
        日本のツキノワグマ・北海道のヒグマでも、ラブツリーは確認されています。
      </p>
      <ul>
        <li>
          <strong>北海道のヒグマ</strong>: 大雪山系・知床・日高山脈の登山道沿いに多い
        </li>
        <li>
          <strong>本州のツキノワグマ</strong>: 東北・北陸・中部山岳の道沿いに点在
        </li>
        <li>
          <strong>選ばれる木</strong>: 北米と同じく針葉樹（モミ・ツガ・カラマツ）が中心
        </li>
        <li>
          <strong>剥がれた樹皮の高さ</strong>: 1〜1.5 m（ツキノワグマは小型なので低め）
        </li>
      </ul>
      <p>
        登山中に「あれ、この木だけ樹皮が剥がれているな」と気づいたら、
        ラブツリーである可能性があります。爪痕や付着毛があればほぼ確定。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-tracks">クマの痕跡を見分ける</Link>
        と{" "}
        <Link href="/articles/bear-territory">クマの縄張りと行動圏</Link>
        を参照してください。
      </p>

      <h2 id="monitoring">保護研究での活用 — DNA 採取拠点として</h2>
      <p>
        ラブツリーは野生動物管理の現場でも <strong>「貴重なデータ取得拠点」</strong>になっています。
      </p>
      <ul>
        <li>
          🔬 ラブツリーに付着した <strong>毛から DNA を抽出</strong>し、個体識別・性別・血縁解析
        </li>
        <li>
          📸 トレイルカメラを設置して <strong>個体数推定</strong>
        </li>
        <li>
          📊 利用頻度の変化で <strong>地域個体群の活動状況</strong>をモニター
        </li>
        <li>
          🧬 長期的な <strong>遺伝的多様性</strong>の変化を追跡
        </li>
      </ul>
      <p>
        ラブツリーは <strong>クマが自然に集まる場所</strong>なので、トラップを仕掛けるよりも倫理的負担が少なく、
        近年の野生動物モニタリングの定番手法になっています。
      </p>
      <p>
        Vol.3 の AI 顔認識（{" "}
        <Link href="/articles/research-digest-003">Clapham 2020</Link>
        ）も、ラブツリーで撮影された顔写真を学習データとして活用しています。
      </p>

      <h2 id="social">クマの「社会性」を再考する</h2>
      <p>
        クマは <strong>「単独行動の動物」</strong>として有名です。雄も雌も、繁殖期以外は基本的に
        単独で森を歩く。だから「クマには社会がない」と長らく考えられてきました。
      </p>
      <p>
        しかし、Clapham らの研究は、この見方を覆します。
      </p>
      <p>
        クマたちは、互いに <strong>顔を合わせなくても</strong>、ラブツリーを介して
        <strong>非同期的に情報をやり取り</strong>しています。これは
        <strong>「電子掲示板に書き込みを残す」</strong>のとほぼ同じ仕組み。
      </p>
      <p>
        個別の出会いは少なくても、地域のクマたちは <strong>互いの存在・状態を把握し合い</strong>、
        テリトリー・繁殖機会・親子関係を調整しています。
        単独行動の動物にも、独自の <strong>「社会的ネットワーク」</strong>があったのです。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-communication">クマ同士のコミュニケーション</Link>
        も併読してください。
      </p>

      <h2 id="action">山でラブツリーを見つけたら</h2>
      <p>
        登山・トレッキング中にラブツリーを見つけたら、次のことを意識してください。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>その場所は「クマの通り道」</strong> — 道沿いにラブツリーがあるということは、
          ここをクマが頻繁に通っている証拠。通過時は鈴・声出し・周囲確認を強化。
        </li>
        <li>
          <strong>樹皮の状態で「最近性」を判断</strong> — 樹皮の剥がれが新しく、毛も乾燥前ならば
          数日以内にクマがいた可能性。引き返すか、警戒度を上げる。
        </li>
        <li>
          <strong>写真を撮って自治体・KumaWatch に投稿</strong> — 樹幹マーキングは公的データとしても貴重。
          {" "}<Link href="/submit">出没情報の投稿</Link>{" "}で位置情報付き写真を共有すると、地域の警戒度評価に活用されます。
        </li>
        <li>
          <strong>触らない、近寄って嗅がない</strong> — クマの匂いが付くと、トレッキング中の自分が
          別のクマに「侵入者」と認識されるリスク。匂いの強い場所は避けて通る。
        </li>
        <li>
          <strong>季節を意識する</strong> — 繁殖期（5〜7 月）はラブツリー周辺のクマ活動が活発。
          特にこの時期の道沿いの新鮮なラブツリーは警戒最大に。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              The function of strategic tree selectivity in the chemical signalling of brown bears（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Clapham, M., Nevin, O. T., Ramsey, A. D., &amp; Rosell, F. (2014).{" "}
              <em className="not-italic">Animal Behaviour</em> 87: 151–156.
            </div>
            <a
              href="https://doi.org/10.1016/j.anbehav.2013.10.024"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1016/j.anbehav.2013.10.024 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Multi-modal scent communication in brown bears
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Clapham, M., Nevin, O. T., Ramsey, A. D., &amp; Rosell, F. (2012).{" "}
              <em className="not-italic">PLOS ONE</em> 7(4): e35404.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              BearID Project — Clapham らの非営利開発プロジェクト
            </div>
            <a
              href="https://bearid.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              bearid.org →
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
          次号予告 — Vol.14
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「世界 664 件のヒグマ襲撃メタ解析」</strong> —
          18 ヶ国 15 年分のヒグマ襲撃事例を統合解析した Bombieri 2019 Scientific Reports を精読。
          ロシア・東欧での襲撃の多さ、母グマ関与率の地域差、人間側のリスク要因まで網羅。
        </div>
      </div>
    </ArticleShell>
  );
}
