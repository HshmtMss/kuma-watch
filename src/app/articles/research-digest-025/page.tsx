import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-025")!;

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
        映画やアニメで描かれるクマは、たいてい <strong>「ガオー！」</strong>と吠えています。
        でも、実際のクマがそんな大声を出すのは <strong>めったにありません</strong>。
      </p>
      <p>
        クマは <strong>静かな動物</strong>ですが、無口ではない。ドイツの動物行動学者 Gustav Peters は、
        1980 年代に世界中の動物園・野生のクマを観察し、<strong>12 種類以上の異なる音声</strong>を体系的に
        分類しました。子グマの泣き声、母の優しい呼びかけ、求愛のゴロゴロ音 — クマの声の世界を解読します。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く論文群
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          ① The acoustic communication in bears (Ursidae)
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Peters, G. (1984).{" "}
          <em className="not-italic">Acta Zoologica Fennica</em> 171: 11–24.
        </div>
        <div className="mt-3 text-sm font-semibold text-stone-900">
          ② Vocal repertoire of brown bear cubs
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Wiebe, J. P., &amp; Bunnell, F. L. (1983).{" "}
          <em className="not-italic">Bears: Their Biology and Management</em>.
        </div>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            クマは <strong>12 種類以上の鳴き声</strong>を状況に応じて使い分ける
          </li>
          <li>
            母子の鳴き交わしから求愛、警告まで <strong>意味のある通信</strong>
          </li>
          <li>
            近年は <strong>AI 音響識別</strong>で野生クマのモニタリングに応用も
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "myth", title: "「クマはガオーと吠える」は誤解" },
          { id: "peters", title: "Peters の体系的分類" },
          { id: "categories", title: "12 種類の音声カテゴリー" },
          { id: "cub", title: "子グマの「ハミング」と「泣き声」" },
          { id: "mother", title: "母グマの呼び戻し・警告" },
          { id: "courtship", title: "求愛時の「ゴロゴロ」音" },
          { id: "warning", title: "警告と威嚇 — 危険信号" },
          { id: "ai", title: "AI 音響識別への応用" },
          { id: "japan", title: "日本のクマの音声研究" },
          { id: "encounter", title: "遭遇時のクマの声を理解する" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="myth">「クマはガオーと吠える」は誤解</h2>
      <p>
        映画・アニメ・絵本で描かれるクマは、必ず <strong>「ガオー！」</strong>と大声で吠えます。
        でも、現実のクマの観察記録を見ると、これは <strong>例外的な行動</strong>です。
      </p>
      <p>
        野生のクマと長年付き合ってきたレンジャー・研究者・写真家は、口を揃えて言います。
        「<strong>実際のクマは、ほとんど無音に近い</strong>」。
        森の中を歩いていても、クマの足音や呼吸音すら聞こえないことが多い。
      </p>
      <p>
        ただし、クマが <strong>「無口な動物」</strong>かというと、それも間違い。
        観察を続けていると、状況に応じて <strong>多種類の音声</strong>を使い分けていることが分かります。
        その全体像を初めて系統的に整理したのが、Peters 1984 の論文でした。
      </p>

      <h2 id="peters">Peters の体系的分類</h2>
      <p>
        ドイツの動物行動学者 <strong>Gustav Peters</strong> は、1970〜80 年代にかけて欧米の動物園・野生現場で
        クマ科の動物を観察。各種の音声を <strong>スペクトログラム（音響解析グラフ）</strong>で
        詳細に分析しました。
      </p>
      <p>
        対象は <strong>クマ科 8 種すべて</strong>（ヒグマ・クロクマ・ツキノワグマ・ナマケグマ・メガネグマ・
        マレーグマ・ホッキョクグマ・ジャイアントパンダ）。世界中の動物園から音声録音を集め、
        音響学的特徴と発生時の行動文脈を結びつける、地道で壮大な研究でした。
      </p>
      <p>
        この論文は今もなお、クマの音声研究の <strong>基礎文献</strong>として引用され続けています。
      </p>

      <h2 id="categories">12 種類の音声カテゴリー</h2>
      <p>
        Peters らは、クマの音声を機能的に <strong>12 種類以上</strong>に分類しました。
        以下、主要なものを整理します。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">音声タイプ</th>
              <th className="px-3 py-2 text-left">発生状況</th>
              <th className="px-3 py-2 text-left">意味</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ハミング（ハミング音）</td>
              <td className="px-3 py-2">授乳中の子グマ</td>
              <td className="px-3 py-2">満足・安心</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">高音の鳴き声</td>
              <td className="px-3 py-2">空腹・迷子の子グマ</td>
              <td className="px-3 py-2">救援要請</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">母グマのうなり</td>
              <td className="px-3 py-2">子を呼ぶ時</td>
              <td className="px-3 py-2">「こっちに来なさい」</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ゴロゴロ（喉音）</td>
              <td className="px-3 py-2">繁殖期の雄</td>
              <td className="px-3 py-2">求愛・自己アピール</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">フー息</td>
              <td className="px-3 py-2">警戒・不快</td>
              <td className="px-3 py-2">「近づくな」</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">顎打ち音</td>
              <td className="px-3 py-2">威嚇</td>
              <td className="px-3 py-2">攻撃寸前</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">舌打ち</td>
              <td className="px-3 py-2">遭遇直前</td>
              <td className="px-3 py-2">驚き・興奮</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">咆哮（ガオー）</td>
              <td className="px-3 py-2">闘争時</td>
              <td className="px-3 py-2">本気の攻撃前</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        この他にも、軽い喉鳴り・地面叩き音・パンチング音など、行動と組合せた <strong>「マルチモーダル通信」</strong>
        を行っていることが報告されています。
      </p>

      <h2 id="cub">子グマの「ハミング」と「泣き声」</h2>
      <p>
        最も特徴的なのが、<strong>子グマの音声</strong>です。
      </p>
      <h3>ハミング音</h3>
      <p>
        母乳を飲んでいる時に子グマが出す <strong>「ンー、ンー」</strong>という低く連続した音。
        満足・安心を表すこの音は、人間の赤ちゃんの鳴き声とも類似性があり、
        母グマには <strong>授乳成功の信号</strong>として伝わります。
      </p>
      <p>
        ハミングは <strong>「クマの感情的な声」</strong>として、世界中の動物園で日常的に観察される、
        最も愛らしい音の一つです。
      </p>
      <h3>高音の泣き声</h3>
      <p>
        子グマが空腹・迷子・不安を感じた時に出す <strong>高音の「ピー」「ヤー」</strong>という鳴き声。
        遠くの母グマにも届くよう、人間の赤ちゃんの泣き声と同様、<strong>耳に残る周波数特性</strong>
        を持っています。
      </p>
      <p>
        野生のクマが子を連れている時、子グマがこの泣き声を出すと <strong>母グマは即座に駆けつけて</strong>
        強い防衛反応を取ります。子グマの泣き声を聞いたら、登山者は <strong>直ちに距離を取る</strong>必要があります。
      </p>

      <h2 id="mother">母グマの呼び戻し・警告</h2>
      <p>
        母グマが子グマに発する音声も、複数のパターンがあります。
      </p>
      <ul>
        <li>
          🐻‍❄️ <strong>低音のうなり</strong>: 子を呼び戻す「こっちに来なさい」
        </li>
        <li>
          📣 <strong>鋭いウー音</strong>: 危険を察知した「動くな・隠れろ」
        </li>
        <li>
          🛑 <strong>長いフー息</strong>: 子に「離れろ・登れ」（侵入者から逃がす指示）
        </li>
        <li>
          🤝 <strong>柔らかいハミング</strong>: 子に「大丈夫、安心しなさい」
        </li>
      </ul>
      <p>
        これらは <strong>人間が観察しても聞き取れる</strong>範囲の音。
        登山中に <strong>「クマのうなり声」</strong>を聞いた場合、それが母子コミュニケーションである可能性を
        考慮すべきです。母グマと子グマが分離している危険な状況の可能性もあります。
      </p>

      <h2 id="courtship">求愛時の「ゴロゴロ」音</h2>
      <p>
        繁殖期（5〜7 月）の <strong>雄ヒグマ</strong>は、雌に求愛する際に特殊な音を出します。
      </p>
      <p>
        <strong>「ゴロゴロ」「ンゴ、ンゴ」</strong>と低い喉音で長時間続けるこの音は、
        <strong>人間の耳には地響きのように聞こえる</strong>こともあります。
      </p>
      <p>
        Peters らの分析では、この音は <strong>「自分の体格と健康をアピール」</strong>する機能を持ち、
        雌は音の質から雄の <strong>適齢度</strong>を推定していると考えられています。
      </p>
      <p>
        この音は登山者にとっては <strong>「成獣雄の存在の警告サイン」</strong>。
        繁殖期の雄は普段以上に活動的で、人との接触リスクも上がります。Vol.12（{" "}
        <Link href="/articles/research-digest-012">クロクマ致命的襲撃</Link>
        ）で見たように、致命的襲撃の 88% が「単独成獣雄」であることとも整合します。
      </p>

      <h2 id="warning">警告と威嚇 — 危険信号</h2>
      <p>
        実際の遭遇場面で最も重要なのが、<strong>警告・威嚇の音</strong>です。
      </p>
      <h3>段階 1: フー息（huff）</h3>
      <p>
        <strong>「フッ！フッ！」</strong>と短い呼気を勢いよく鼻から出す。
        「近づくな・引き返せ」の最初の警告。この時点で離れれば、クマは攻撃に移行しません。
      </p>
      <h3>段階 2: 顎打ち音（jaw popping / jaw snapping）</h3>
      <p>
        <strong>「カチカチ・パン・パン」</strong>と歯を鳴らす音。これは <strong>攻撃寸前の威嚇</strong>。
        体勢を低くし、後ろ足で立つこともあります。<strong>すぐに退避</strong>が必要。
      </p>
      <h3>段階 3: 咆哮（roar）</h3>
      <p>
        映画でおなじみの <strong>「ガオー！」</strong>。
        これが出るのは <strong>戦闘時か、極度の興奮時のみ</strong>。日常では稀ですが、
        この音を直接聞いた場合は <strong>即座に防衛準備</strong>（スプレー用意）が必要。
      </p>
      <p>
        重要なのは、これらの警告音は <strong>「クマからの最後通牒」</strong>であり、
        無視すれば確実に攻撃に移行する、ということです。
      </p>

      <h2 id="ai">AI 音響識別への応用</h2>
      <p>
        2010 年代以降、<strong>機械学習</strong>でクマの音声を自動識別する研究が進んでいます。
      </p>
      <ul>
        <li>
          🎤 <strong>森にマイクを設置</strong>し、24 時間音声を録音
        </li>
        <li>
          🤖 <strong>ディープラーニング</strong>で「クマ音声」と「他の動物・自然音」を分類
        </li>
        <li>
          📊 <strong>個体数・行動パターン</strong>の自動推定
        </li>
        <li>
          🚨 <strong>市街地侵入の早期警報システム</strong>
        </li>
      </ul>
      <p>
        Vol.3（{" "}
        <Link href="/articles/research-digest-003">AI 顔認識</Link>
        ）の音声版とも言える展開で、近未来のクマモニタリングを変える可能性があります。
        KumaWatch を運営する獣医工学ラボでも、関連研究を進めています（{" "}
        <Link href="/articles/bear-detection-ai">クマ検知 AI とは</Link>
        を参照）。
      </p>

      <h2 id="japan">日本のクマの音声研究</h2>
      <p>
        日本でも、ヒグマ・ツキノワグマの音声研究が進められています。
      </p>
      <ul>
        <li>
          🏔️ <strong>北海道大学・京都大学</strong>での野生ヒグマ音声録音プロジェクト
        </li>
        <li>
          🎓 <strong>東京農業大学</strong>のツキノワグマ動物園音声記録
        </li>
        <li>
          🌐 <strong>軽井沢ピッキオ</strong>でのベアドッグ訓練に音声を活用
        </li>
        <li>
          🎙️ <strong>市民録音プロジェクト</strong>: 山中での音声記録の共有が始まりつつある
        </li>
      </ul>
      <p>
        日本のクマも、Peters らの分類に当てはまる音声パターンを持つことが確認されています。
        ただし、ツキノワグマは <strong>ヒグマより小型</strong>で、音声の周波数特性も
        やや高めという報告があります。
      </p>

      <h2 id="encounter">遭遇時のクマの声を理解する</h2>
      <p>
        登山中にクマと遭遇した場合、<strong>音を聞いて状況判断する能力</strong>は命を守ります。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>子グマの泣き声 → 即退避</strong>: 母グマが必ず近くにいる。最も危険な状況の一つ。
        </li>
        <li>
          <strong>母グマのうなり声 → 距離を取る</strong>: 子の存在を警告している。後退して回避。
        </li>
        <li>
          <strong>フー息 → 直ちに退避</strong>: クマからの最初の警告。無視すれば攻撃。
        </li>
        <li>
          <strong>顎打ち音 → 防衛準備</strong>: 攻撃直前のサイン。スプレー用意、低姿勢で後退。
        </li>
        <li>
          <strong>咆哮 → 防衛行動</strong>: 戦闘モード。プレイデッドかスプレー、種別判断を即座に
          （Vol.12 参照）。
        </li>
      </ol>
      <p>
        詳細な遭遇対処は{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
        と{" "}
        <Link href="/articles/bear-communication">クマ同士のコミュニケーション</Link>
        を参照してください。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              The acoustic communication in bears (Ursidae)（本号メイン①）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Peters, G. (1984).{" "}
              <em className="not-italic">Acta Zoologica Fennica</em> 171: 11–24.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Vocal repertoire of brown bears
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Wiebe, J. P. (1983). University of Calgary thesis.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Passive acoustic monitoring for large carnivores
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Stenset, N. E., et al. (2016).{" "}
              <em className="not-italic">Wildlife Biology</em>.
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
          次号予告 — Vol.26
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマはアザラシ 1 頭で 1.5 ヶ月生きる」</strong> —
          ホッキョクグマに小型カメラを装着して野外でエネルギー収支を初測定した
          Pagano 2018 Science を精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
