import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-022")!;

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
        1 頭の雄ヒグマが歩き回るエリアは、どれくらい広いと思いますか？
        <strong>200 km²</strong>くらいでしょうか。それとも <strong>1,000 km²</strong>？
      </p>
      <p>
        GPS テレメトリー（衛星追跡）の発展で、ようやくこの問いに正確な答えが出るようになりました。
        驚くべきことに、雄ヒグマの行動圏は <strong>500〜2,000 km²</strong>。
        東京 23 区（627 km²）の 3 倍以上の範囲を、1 頭が動き回っているのです。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く論文群
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Major components of grizzly bear diet across North America
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Mowat, G., &amp; Heard, D. C. (2006).{" "}
          <em className="not-italic">Canadian Journal of Zoology</em> 84(3): 473–489.（行動圏分析含む）
        </div>
        <a
          href="https://doi.org/10.1139/z06-016"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1139/z06-016 →
        </a>
        <div className="mt-3 text-sm font-semibold text-stone-900">
          Ecology and behavior of North American black bears: Home range, habitat, and social organization
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Powell, R. A., Zimmerman, J. W., &amp; Seaman, D. E. (1997). Chapman &amp; Hall.
        </div>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            雌ヒグマ: <strong>50〜300 km²</strong>、雄ヒグマ: <strong>500〜2,000 km²</strong>
          </li>
          <li>
            雄が広いのは <strong>繁殖期に雌を探して長距離移動</strong>するため
          </li>
          <li>
            日本のヒグマ・ツキノワグマでも GPS で <strong>同様のパターン</strong>を確認
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "「クマの行動圏」を測ることの意味" },
          { id: "history", title: "VHF から GPS へ — 追跡技術の進化" },
          { id: "method", title: "GPS テレメトリーの仕組み" },
          { id: "results", title: "雌 vs 雄 — 行動圏の劇的な差" },
          { id: "why", title: "なぜ雄ヒグマは 2,000 km² も歩くのか" },
          { id: "seasonal", title: "季節で変わる行動圏のサイズ" },
          { id: "habitat", title: "クマが選ぶ「良い場所」とは" },
          { id: "japan", title: "日本のクマの行動圏" },
          { id: "kumawatch", title: "KumaWatch データへの応用" },
          { id: "action", title: "今日からあなたができる 3 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「クマの行動圏」を測ることの意味</h2>
      <p>
        野生動物の <strong>「行動圏（home range）」</strong>は、その動物が日常的に利用する地理的範囲を指します。
        単に「ここで見たことがある」場所ではなく、<strong>食物・水・繁殖相手・冬眠地</strong>を全て満たす
        個体の生活空間です。
      </p>
      <p>
        この行動圏が分かると、私たちは多くのことを理解できます。
      </p>
      <ul>
        <li>
          🐻 <strong>個体数推定</strong>: 1 頭が使う面積が分かれば、その地域に何頭住めるか推定可能
        </li>
        <li>
          🏘️ <strong>軋轢予測</strong>: 行動圏に人口集中地域が重なれば、出没確率が予測できる
        </li>
        <li>
          🌲 <strong>保護区設計</strong>: 自然公園・保全区域の必要サイズが決まる
        </li>
        <li>
          🚗 <strong>道路・インフラ計画</strong>: 動物のために生態回廊（緑の回廊）を設計
        </li>
      </ul>
      <p>
        2000 年代以降の野生動物研究の進展は、行動圏の精密測定なしには語れません。
      </p>

      <h2 id="history">VHF から GPS へ — 追跡技術の進化</h2>
      <p>
        クマの追跡は、技術の歴史でもあります。
      </p>
      <h3>第 1 世代（1970〜90 年代）: VHF テレメトリー</h3>
      <p>
        クマに <strong>VHF（超短波）発信機</strong>を首輪に装着。研究者が車・小型機で受信機を持って
        信号を追いかける。位置情報は <strong>週 1〜3 回</strong>程度で、精度も荒い（±100m）。
        Stonorov &amp; Stokes 1972（{" "}
        <Link href="/articles/research-digest-019">Vol.19</Link>
        ）はこの世代の手法でした。
      </p>
      <h3>第 2 世代（2000 年代）: GPS テレメトリー</h3>
      <p>
        首輪に <strong>GPS 受信機</strong>を搭載。衛星から位置情報を取得し、内部メモリに記録。
        数十分〜数時間ごとの位置情報を <strong>1 年以上連続記録</strong>できる。
        Mowat &amp; Heard 2006 はこの世代の代表研究です。
      </p>
      <h3>第 3 世代（2010 年代〜）: GPS + 衛星通信</h3>
      <p>
        首輪が <strong>衛星経由でリアルタイムにデータを送信</strong>。研究者は地球の反対側にいても
        クマの動きを <strong>リアルタイム</strong>で追える。データの精度・量・即時性が桁違いに向上。
      </p>
      <h3>第 4 世代（2020 年代〜）: GPS + 加速度センサー + 心拍計</h3>
      <p>
        位置だけでなく、<strong>「クマが何をしているか」</strong>（歩行・走行・採食・休息）も推定可能。
        個体の生理状態も同時記録できる、現代の最先端モニタリング体制です。
      </p>

      <h2 id="method">GPS テレメトリーの仕組み</h2>
      <p>
        現代の GPS 首輪は、次の流れでデータを取ります。
      </p>
      <ol>
        <li>
          🛰️ 24 機の GPS 衛星からの信号を 4 機以上受信
        </li>
        <li>
          📍 位置情報を <strong>±5〜10m</strong>の精度で算出
        </li>
        <li>
          💾 首輪内部メモリに記録（数十分〜数時間ごと）
        </li>
        <li>
          📡 同時に <strong>衛星通信</strong>でデータを送信（オプション）
        </li>
        <li>
          🔋 バッテリーは <strong>1〜3 年</strong>持続（重さ 1〜2 kg）
        </li>
        <li>
          🪛 一定期間後に首輪が <strong>自動脱落</strong>（タイマー付き）
        </li>
      </ol>
      <p>
        1 頭のクマから 1 年で <strong>数千〜数万件の位置データ</strong>が取得できるようになり、
        従来は想像でしかなかった「<strong>クマの 1 年</strong>」が見えるようになりました。
      </p>

      <h2 id="results">雌 vs 雄 — 行動圏の劇的な差</h2>
      <p>
        Mowat &amp; Heard 2006、Powell 1997 ほかの研究を統合すると、次のような結論になります。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">クマの種類</th>
              <th className="px-3 py-2 text-left">雌の行動圏</th>
              <th className="px-3 py-2 text-left">雄の行動圏</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ヒグマ（北米）</td>
              <td className="px-3 py-2 tabular-nums">100〜400 km²</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">800〜2,000 km²</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">クロクマ（北米）</td>
              <td className="px-3 py-2 tabular-nums">20〜80 km²</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">100〜400 km²</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ヒグマ（欧州）</td>
              <td className="px-3 py-2 tabular-nums">50〜200 km²</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">300〜1,000 km²</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">エゾヒグマ（北海道）</td>
              <td className="px-3 py-2 tabular-nums">~50〜150 km²</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">200〜500 km²</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ツキノワグマ（本州）</td>
              <td className="px-3 py-2 tabular-nums">20〜80 km²</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">50〜300 km²</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        どの種でも <strong>雄は雌の 3〜10 倍</strong>の行動圏を持っています。
        個体差や地域差も大きく、北米のヒグマでは雄個体で <strong>2,000 km² を超える</strong>例も。
      </p>
      <p>
        2,000 km² と聞いてピンとこないかもしれませんが、これは <strong>東京 23 区の 3 倍以上</strong>、
        またはマレーシアのクアラルンプール都市圏とほぼ同等の広さです。
        1 頭のクマが、これだけの土地を <strong>「自分のテリトリーの一部」</strong>として歩き回っているわけです。
      </p>

      <h2 id="why">なぜ雄ヒグマは 2,000 km² も歩くのか</h2>
      <p>
        雄と雌の行動圏の差は、進化的に明確な理由があります。
      </p>
      <h3>① 繁殖戦略の違い</h3>
      <p>
        雌は限られた数の子を育てるため、<strong>食物源が安定した狭いエリア</strong>に居続けます。
        子グマの安全と栄養を確保するためには、知っている場所で過ごす方が有利。
      </p>
      <p>
        雄は <strong>「繁殖相手の雌を探す」</strong>のが進化上の主要タスク。
        雌が広く散らばっているため、雄も広く動き回って繁殖機会を最大化する必要がある。
        Vol.5（{" "}
        <Link href="/articles/research-digest-005">嗅覚研究</Link>
        ）で見たように、繁殖期の雄は <strong>数 km 先の雌のフェロモン</strong>を嗅ぎつけて移動します。
      </p>
      <h3>② 体格の違いと食物要求</h3>
      <p>
        雄は雌より 2 倍以上大きく、<strong>必要なカロリー量も多い</strong>。
        食物を確保するための採餌範囲も広くなります。
      </p>
      <h3>③ 縄張りの主張</h3>
      <p>
        雄は <strong>他の雄との競争</strong>のために、ラブツリー（{" "}
        <Link href="/articles/research-digest-013">Vol.13 樹幹マーキング</Link>
        ）で広範囲にマーキングを残します。これによっても行動圏が拡大します。
      </p>

      <h2 id="seasonal">季節で変わる行動圏のサイズ</h2>
      <p>
        さらに興味深いのは、<strong>季節で行動圏のサイズが変わる</strong>こと。
      </p>
      <ul>
        <li>
          🌷 <strong>春（4〜5 月）</strong>: 冬眠覚醒直後、まだ動きが少ない。<strong>狭い行動圏</strong>
        </li>
        <li>
          ❤️ <strong>初夏〜夏（6〜7 月）</strong>: 繁殖期で雄が <strong>最大の行動圏</strong>を示す
        </li>
        <li>
          🌰 <strong>秋（9〜11 月）</strong>: ハイパーフェイジア期で食物探索範囲が拡大
        </li>
        <li>
          ❄️ <strong>冬眠前後</strong>: 巣穴近辺に行動範囲が縮小
        </li>
      </ul>
      <p>
        この季節変動は、人クマ軋轢の発生時期とも整合します。
        繁殖期の雄は人里に下りやすく、秋の食物探索期は市街地出没が増える。
        Vol.14（{" "}
        <Link href="/articles/research-digest-014">世界ヒグマ襲撃メタ解析</Link>
        ）で見た「<strong>夏〜秋に集中する襲撃事案</strong>」は、
        この行動圏の季節変動で説明できる部分があります。
      </p>

      <h2 id="habitat">クマが選ぶ「良い場所」とは</h2>
      <p>
        GPS データを地形・植生・人口分布データと重ね合わせると、クマが <strong>「どんな場所を選ぶか」</strong>
        が見えてきます。
      </p>
      <p>
        Mowat &amp; Heard 2006 の北米ヒグマでの解析結果は、こうでした。
      </p>
      <ul>
        <li>
          <strong>強く選ぶ</strong>: 河川沿い、低標高の森林、被覆植生豊富、サケ豊富地域
        </li>
        <li>
          <strong>避ける</strong>: 人口集中地域、主要道路から 500m 以内、開けた農地
        </li>
        <li>
          <strong>状況次第</strong>: 山岳の高標高（夏は使うが冬は避ける）
        </li>
      </ul>
      <p>
        ただし「<strong>都市型クマ</strong>」では、この選好が逆転します。Vol.2（{" "}
        <Link href="/articles/research-digest-002">Beckmann 2003</Link>
        ）で見たように、人為的食料がある場所を <strong>積極的に選ぶ</strong>個体群が形成されつつあります。
      </p>

      <h2 id="japan">日本のクマの行動圏</h2>
      <p>
        日本でも、各都道府県・大学・研究機関が GPS テレメトリーで個別のクマの行動圏を調べています。
      </p>
      <h3>北海道のヒグマ</h3>
      <p>
        北大・知床財団等が GPS データを蓄積。雄成獣は <strong>200〜500 km²</strong>、
        雌成獣は <strong>50〜150 km²</strong>程度。
        OSO18 のような特殊個体は <strong>1,500 km² 以上</strong>を歩き回っていたと推定されます。
      </p>
      <h3>本州のツキノワグマ</h3>
      <p>
        長野県・岐阜県・新潟県等で GPS 追跡が実施。雄成獣は <strong>50〜300 km²</strong>、
        雌成獣は <strong>20〜80 km²</strong>。北米のクロクマと類似のサイズ感です。
      </p>
      <h3>近年の動向</h3>
      <p>
        市街地隣接エリアで GPS 追跡されたクマは、<strong>行動圏に都市域を含む</strong>パターンを示し、
        従来の <strong>「奥山と街は別」</strong>という前提が崩れつつあります。
        この変化は KumaWatch のような市民科学プラットフォームでも観察可能になりました。
      </p>

      <h2 id="kumawatch">KumaWatch データへの応用</h2>
      <p>
        KumaWatch では、全国の出没情報を集約することで、間接的にクマの行動圏推定に寄与しています。
      </p>
      <ul>
        <li>
          🗺️ <strong>個別市町村単位</strong>での出没件数とパターン
        </li>
        <li>
          ⏰ <strong>時間帯・季節別</strong>の集中傾向
        </li>
        <li>
          🚶 <strong>連続する目撃情報</strong>の繋がりから個体の移動を推定
        </li>
        <li>
          🏘️ <strong>「市街地侵入リスク」</strong>を地理空間的に表示
        </li>
      </ul>
      <p>
        個別個体の正確な行動圏は専門研究機関の GPS データに依存しますが、
        KumaWatch のような <strong>「人による目撃情報の集約」</strong>もデータとしては
        十分に貴重な情報源になっています。詳細は{" "}
        <Link href="/articles/bear-monitoring">クマ研究のモニタリング技術</Link>
        を参照。
      </p>

      <h2 id="action">今日からあなたができる 3 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>「自分の住む市町村のクマ行動圏」を意識する</strong> —
          市街地から 30〜100 km の山岳エリアに住むクマは、状況次第で街に下りる可能性があります。
          KumaWatch の{" "}
          <Link href="/place">都道府県別ページ</Link>{" "}
          で周辺市町村の出没情報を確認。
        </li>
        <li>
          <strong>「広い行動圏」を踏まえた対策</strong> — 1 頭の雄ヒグマが東京 23 区 3 倍を歩くなら、
          そのクマは <strong>多くの自治体を跨いで活動</strong>します。広域連携・情報共有が重要。
        </li>
        <li>
          <strong>目撃情報を必ず投稿する</strong> — 個別目撃情報の集積が、地域全体のクマ行動圏の理解に
          直結します。{" "}
          <Link href="/submit">出没情報の投稿</Link>{" "}
          で位置情報を共有。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Major components of grizzly bear diet across North America（本号メイン①）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Mowat, G., &amp; Heard, D. C. (2006).{" "}
              <em className="not-italic">Canadian Journal of Zoology</em> 84(3): 473–489.
            </div>
            <a
              href="https://doi.org/10.1139/z06-016"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1139/z06-016 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Ecology and behavior of North American black bears: Home range, habitat, and social organization（本号メイン②）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Powell, R. A., Zimmerman, J. W., &amp; Seaman, D. E. (1997). Chapman &amp; Hall.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Home range analysis: a review of recent methods
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Walter, W. D., et al. (2015).{" "}
              <em className="not-italic">Wildlife Society Bulletin</em> 39(2): 380–388.
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
          次号予告 — Vol.23
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマの赤ちゃんは何頭生き残るのか — 仔グマ死亡率の真実」</strong> —
          ヒグマ・クロクマで仔の生存率を 20 年以上追跡した Schwartz ら（2006）を精読。
          母グマの育て方、人為要因、気候の影響を解説します。
        </div>
      </div>
    </ArticleShell>
  );
}
