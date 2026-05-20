import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-007")!;

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
        日本のクマ被害は <strong>農作物だけで年間 4〜7 億円</strong>。
        その中でも、長野県のリンゴ農家は特に深刻な被害を受けてきました。
        実りの秋に、せっかく育てた完熟リンゴが一夜にして食い荒らされる。
        この問題に立ち向かい、<strong>「ほぼ被害ゼロ」</strong>を実現した研究があります。
      </p>
      <p>
        2001 年、ベルギー出身の研究者と日本の研究者がタッグを組み、
        長野県のリンゴ園で行った電気柵試験。世界中の野生動物管理研究で
        今も引用される、<strong>日本発の現場研究</strong>です。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Use of electric fences to reduce Asiatic black bear depredation in Nagano prefecture, central Japan
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Huygens, O. C., &amp; Hayashi, H. (2001).{" "}
          <em className="not-italic">Wildlife Society Bulletin</em> 29(3): 959–964.
        </div>
        <a
          href="https://www.jstor.org/stable/3784422"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          JSTOR で見る →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            長野県のリンゴ園 <strong>12 か所</strong>に電気柵を設置し、ツキノワグマ被害を測定
          </li>
          <li>
            設置 1 年で <strong>92〜100% 被害減少</strong>。多くの園で被害ゼロを達成
          </li>
          <li>
            費用は 1 園あたり <strong>約 10 万円</strong>。被害額と比べれば即元が取れる
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "context", title: "長野のリンゴ園が抱える「クマ問題」" },
          { id: "researcher", title: "ベルギー人研究者と日本のフィールド" },
          { id: "design", title: "12 か所のリンゴ園 — 試験設計" },
          { id: "specs", title: "電気柵の仕様 — 何 V・何段・どう張る" },
          { id: "results", title: "結果 — 92〜100% の被害減少" },
          { id: "why", title: "なぜここまで効くのか" },
          { id: "cost", title: "コスト・労力・耐用年数" },
          { id: "fail", title: "効かないケースもある — 失敗パターン" },
          { id: "national", title: "全国で広がる電気柵活用" },
          { id: "subsidy", title: "自治体補助金で実質負担を減らす" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="context">長野のリンゴ園が抱える「クマ問題」</h2>
      <p>
        長野県は日本有数の <strong>リンゴ産地</strong>です。
        年間生産量は青森県に次ぐ全国第 2 位、収穫高は約 130,000 トン。
        小布施・須坂・松本・伊那 — リンゴ栽培の名産地が県内に広がっています。
      </p>
      <p>
        ところがこの長野県には、もう一つ厄介な存在があります。
        <strong>ツキノワグマ</strong>です。県内には推定 <strong>4,000 頭</strong>のツキノワグマが生息し、
        全国でも有数の生息密度を誇ります（{" "}
        <Link href="/research/wildlife-plans">都道府県別管理計画</Link>
        参照）。
      </p>
      <p>
        リンゴの収穫期（10〜11 月）はクマのハイパーフェイジアと完全に重なります。
        Vol.6 で取り上げたように、<strong>リンゴはクマにとって完璧な栄養比率の食物</strong>（{" "}
        <Link href="/articles/research-digest-006">Erlenbach 2014 参照</Link>
        ）。1 頭のクマが一晩で 100 個以上を食べ尽くす事案も報告されています。
      </p>
      <p>
        農家にとっては <strong>1 年の収益が一晩で消える</strong>悪夢。
        この被害をどう防ぐか、20 世紀末まで決定打のない状況が続いていました。
      </p>

      <h2 id="researcher">ベルギー人研究者と日本のフィールド</h2>
      <p>
        <strong>Owen Carl Huygens</strong>（オーウェン・カール・ハイヘンス）は、
        ベルギー出身の野生動物研究者。1990 年代に日本に滞在し、長野県の<strong>軽井沢ベアプロジェクト</strong>
        などでツキノワグマ研究に従事しました。
      </p>
      <p>
        共著者の <strong>Hideyuki Hayashi（林秀行）</strong>は、長野県林業総合センターの研究者。
        現場のリンゴ農家・自治体・猟友会と長年関係を築いてきた、地元の専門家です。
      </p>
      <p>
        この 2 人が組んだことに意味があります。
        Huygens は <strong>「世界の野生動物管理の知見」</strong>を持ち、Hayashi は <strong>「現場の実情」</strong>を持つ。
        欧米で電気柵がうまくいった事例を、そのまま日本のリンゴ園に適用するのではなく、
        <strong>日本の地形・気候・農法に合わせた電気柵の最適仕様</strong>を試行錯誤で見つけ出すことが目標でした。
      </p>

      <h2 id="design">12 か所のリンゴ園 — 試験設計</h2>
      <p>
        Huygens &amp; Hayashi は、長野県内の <strong>12 か所のリンゴ園</strong>を選び、
        次のように試験を組み立てました。
      </p>
      <ul>
        <li>
          試験前年の被害状況: 12 園全てで前年に被害発生（被害率 75〜100%）
        </li>
        <li>
          各園の周囲（350m〜800m）に電気柵を設置
        </li>
        <li>
          設置後 1 シーズン（収穫期 10〜11 月）の被害を記録
        </li>
        <li>
          隣接する電気柵なしの園（対照群）とも比較
        </li>
        <li>
          柵への接触頻度・破損状況・誤通電の有無も並行記録
        </li>
      </ul>
      <p>
        重要なのは、これが <strong>「実際の農家の畑」</strong>で行われた現場試験だった点。
        実験室の理想条件ではなく、日々の農作業・天候・野生動物の自然な行動の中での効果検証です。
      </p>

      <h2 id="specs">電気柵の仕様 — 何 V・何段・どう張る</h2>
      <p>
        試験で採用された電気柵の仕様は、現在も日本の標準として参照され続けています。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">項目</th>
              <th className="px-3 py-2 text-left">仕様</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">電圧</td>
              <td className="px-3 py-2 tabular-nums">5,000〜7,000 V（パルス）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">段数</td>
              <td className="px-3 py-2 tabular-nums">4〜5 段</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">最下段高さ</td>
              <td className="px-3 py-2 tabular-nums">地上 20 cm</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">最上段高さ</td>
              <td className="px-3 py-2 tabular-nums">地上 120〜150 cm</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">段間隔</td>
              <td className="px-3 py-2 tabular-nums">25〜30 cm</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">支柱間隔</td>
              <td className="px-3 py-2 tabular-nums">3〜5 m</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">給電</td>
              <td className="px-3 py-2 tabular-nums">バッテリー or ソーラー or 商用電源</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">接地</td>
              <td className="px-3 py-2 tabular-nums">アース棒 1〜3 本（土壌湿度次第）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        この仕様には<strong>科学的根拠</strong>があります。ツキノワグマの平均身長 (鼻先) は 1.5m 前後、
        子グマは 30〜50cm。最下段 20cm は子グマも触れる高さ、最上段 1.2〜1.5m は成獣の鼻先までカバー。
        段数 4〜5 段なら、クマがどの高さから侵入しようとしてもいずれかに接触する設計です。
      </p>

      <h2 id="results">結果 — 92〜100% の被害減少</h2>
      <p>
        設置 1 シーズン後の結果は、驚異的でした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">指標</th>
              <th className="px-3 py-2 text-left">前年</th>
              <th className="px-3 py-2 text-left">電気柵設置後</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">被害発生園の割合</td>
              <td className="px-3 py-2 tabular-nums">12 / 12 (100%)</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">1 / 12 (8%)</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">園あたり平均被害果実数</td>
              <td className="px-3 py-2 tabular-nums">100 個超</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">0〜数個</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">被害減少率（園ごと平均）</td>
              <td className="px-3 py-2">—</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">92〜100%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        12 園のうち <strong>11 園で完全な被害ゼロ</strong>。残り 1 園は数個の被害があったが、
        その原因は <strong>柵の角の不備で、クマが下をくぐった</strong>ことが判明しました（後で修正後は被害消失）。
      </p>
      <p>
        専門用語抜きに言えば、<strong>「適切に設置された電気柵は、ほぼ完璧にクマを止める」</strong>。
        これが本論文の核心メッセージです。
      </p>

      <h2 id="why">なぜここまで効くのか</h2>
      <p>
        電気柵がここまで効く理由は、3 つあります。
      </p>
      <h3>① 物理的バリア + 痛みの組合せ</h3>
      <p>
        クマは <strong>「学習する動物」</strong>です（{" "}
        <Link href="/articles/bear-learning">クマの学習と記憶</Link>
        ）。一度電気柵に触って強い痛みを経験すると、その場所を強く忌避します。
        他の同種個体への伝播もあり、地域全体で「あの畑はヤバい」という認識が広がる可能性も。
      </p>
      <h3>② 嗅覚の鋭さを逆手に取る</h3>
      <p>
        クマは匂いに敏感（{" "}
        <Link href="/articles/research-digest-005">Vol.5 嗅覚論</Link>
        ）。一度感電すると、その時の痛み + 場所の匂いがセットで脳に記憶されます。
        次回その場所に近づくと、距離があっても警戒します。
      </p>
      <h3>③ 心理的バリアとしての効果</h3>
      <p>
        実は最も興味深い発見は、<strong>「電気柵にほとんど触らないクマもいた」</strong>こと。
        柵の存在自体に警戒し、近づかない個体も多く観察されました。
        他のクマが感電する音・反応を見て学習する個体もいたようです。
      </p>

      <h2 id="cost">コスト・労力・耐用年数</h2>
      <p>
        効果は分かった。では費用と労力は？
      </p>
      <ul>
        <li>
          <strong>初期費用</strong>: 1 園あたり <strong>約 10 万円</strong>（350〜800m 分の柵 + 給電設備）
        </li>
        <li>
          <strong>設置時間</strong>: 2 人で 1〜2 日
        </li>
        <li>
          <strong>耐用年数</strong>: 5〜10 年（給電設備は 3〜5 年で交換）
        </li>
        <li>
          <strong>維持費</strong>: 年間 1〜2 万円（バッテリー交換・草刈り・接続部の点検）
        </li>
        <li>
          <strong>労力</strong>: 週次の電圧チェック（テスター 1 分）、月次の草刈り（漏電防止）
        </li>
      </ul>
      <p>
        平均的なリンゴ園の <strong>1 年の被害額が数十万〜100 万円規模</strong>であることを考えれば、
        電気柵は <strong>1 年で元が取れる投資</strong>です。さらに自治体補助金を活用すれば、
        実質負担は 1/2〜1/3 まで下がります（後述）。
      </p>

      <h2 id="fail">効かないケースもある — 失敗パターン</h2>
      <p>
        Huygens &amp; Hayashi は「電気柵は効く」だけでなく、<strong>「効かない原因」</strong>も率直に報告しています。
      </p>
      <ul>
        <li>
          <strong>電圧不足</strong>: 推奨 5,000V を下回ると、クマが痛みを「我慢できる」レベルに。
          特に降雨後の漏電・電池切れに注意
        </li>
        <li>
          <strong>段数不足</strong>: 3 段以下では、ジャンプや下くぐりで侵入される
        </li>
        <li>
          <strong>角・出入口の隙間</strong>: 柵の死角になりがちな箇所が侵入ポイントに
        </li>
        <li>
          <strong>草刈り不足</strong>: 雑草が電線に触れて漏電し、電圧が落ちる
        </li>
        <li>
          <strong>「学習済みクマ」への対応遅れ</strong>: 過去に弱い柵を経験してしまったクマは、
          より強い柵が必要
        </li>
      </ul>
      <p>
        論文は<strong>「電気柵は『正しく設置・維持』されて初めて効く」</strong>と結論。
        導入後の <strong>週次点検と年次再評価</strong>がセットで必要なメッセージです。
      </p>

      <h2 id="national">全国で広がる電気柵活用</h2>
      <p>
        本論文以降、電気柵は日本の各地で標準的な対策手法となりました。
      </p>
      <ul>
        <li>
          <strong>長野県</strong>: リンゴ園・ぶどう園・養蜂場で広く普及
        </li>
        <li>
          <strong>秋田県</strong>: ナシ園・畜舎・牧草地で活用
        </li>
        <li>
          <strong>岩手県・宮城県</strong>: 米作地・水稲被害対策
        </li>
        <li>
          <strong>富山県・新潟県</strong>: 柿園・栗園
        </li>
        <li>
          <strong>北海道</strong>: 養蜂場・畜舎・トウモロコシ畑
        </li>
      </ul>
      <p>
        現在、農林水産省の <strong>「鳥獣被害防止総合対策交付金」</strong>でも電気柵設置が補助対象になっており、
        全国数万 km 分の電気柵が稼働しています。
      </p>

      <h2 id="subsidy">自治体補助金で実質負担を減らす</h2>
      <p>
        電気柵設置を検討する農家には、多くの自治体で <strong>補助金</strong>が用意されています。
      </p>
      <ul>
        <li>
          <strong>市町村単独補助</strong>: 設置費の 1/2〜2/3 を補助（市町村による）
        </li>
        <li>
          <strong>都道府県補助</strong>: 県の鳥獣被害防止対策事業
        </li>
        <li>
          <strong>国（農水省）の鳥獣被害防止総合対策交付金</strong>: 自治体経由で配分
        </li>
        <li>
          <strong>JA・農業共済の連携支援</strong>: 一部で利子補給や共同購入の仕組みあり
        </li>
      </ul>
      <p>
        申請窓口は <strong>市町村役場の農林課・産業振興課</strong>。
        詳細は{" "}
        <Link href="/articles/bear-agriculture">クマと農業 — 果樹園・養蜂・水田・畜産の被害と対策</Link>
        にまとめています。
      </p>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>すでに導入済みなら、電圧チェックを週次で</strong> — 5,000V を切ると効果が激減。
          テスターで毎週測定して、足りなければバッテリー・草刈り・接地点検。
        </li>
        <li>
          <strong>未導入なら、市町村役場に補助金を問い合わせる</strong> — 「鳥獣被害防止対策の電気柵補助制度はありますか？」
          と農林課に電話するだけで、申請書類の案内が受けられます。
        </li>
        <li>
          <strong>仕様は「5,000V 以上・4〜5 段」を守る</strong> — 安物の 2,000V 程度の柵は逆に学習リスクを生みます。
          一度学習した個体には強い柵を作り直す手間が増えるので、初回からしっかり設計するのが結局安上がり。
        </li>
        <li>
          <strong>近隣農家・自治体と情報共有</strong> — 一つの園だけ守っても、クマは隣の園に移動するだけ。
          地域単位での電気柵普及が長期的な効果につながります。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Use of electric fences to reduce Asiatic black bear depredation in Nagano prefecture, central Japan（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Huygens, O. C., &amp; Hayashi, H. (2001).{" "}
              <em className="not-italic">Wildlife Society Bulletin</em> 29(3): 959–964.
            </div>
            <a
              href="https://www.jstor.org/stable/3784422"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              JSTOR で見る →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Black bear exclusion fences to protect mobile apiaries
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Otto, T. E., &amp; Roloff, G. J. (2015).{" "}
              <em className="not-italic">Human-Wildlife Interactions</em> 9(1): 78–86.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              鳥獣被害防止総合対策交付金（農林水産省 公式案内）
            </div>
            <a
              href="https://www.maff.go.jp/j/seisan/tyozyu/higai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              maff.go.jp →
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
          次号予告 — Vol.8
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマの冬眠は人類医学のヒントになる？」</strong> —
          心拍 14 bpm、代謝 25%、なのに体温はたった 5°C しか下がらないクマの冬眠の謎を、
          Tøien et al. 2011 (Science) を精読しつつ、脳卒中・外科手術への応用研究まで解説。
        </div>
      </div>
    </ArticleShell>
  );
}
