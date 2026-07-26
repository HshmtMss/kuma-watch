import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-monitoring")!;

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
        <strong>結論</strong>: 野生クマの個体数推定・行動研究には <strong>4 つの主要技術</strong>
        が組み合わせて使われます。①カメラトラップ、②GPS 首輪、③ヘアトラップ（毛 DNA）、
        ④標識再捕獲法。それぞれ得意な情報・コスト・限界が異なり、目的に応じて
        組み合わせるのが現代の野生動物管理の標準です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            野生クマの個体数推定・行動研究には<strong>4技術を組み合わせる</strong>。
          </>,
          <>
            <strong>カメラトラップ・GPS首輪・ヘアトラップ(毛DNA)・標識再捕獲法</strong>。
          </>,
          <>
            それぞれ<strong>得意な情報とコストが異なり、目的に応じ組み合わせる</strong>のが標準。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why", title: "なぜモニタリングが必要か" },
          { id: "camera", title: "カメラトラップ（自動撮影カメラ）" },
          { id: "gps", title: "GPS 首輪（テレメトリー）" },
          { id: "hair", title: "ヘアトラップ（毛 DNA 採取）" },
          { id: "mark", title: "標識再捕獲法" },
          { id: "ai", title: "AI とデータ統合の現在" },
          { id: "kumawatch", title: "KumaWatch のデータ活用" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why">なぜモニタリングが必要か</h2>
      <p>
        クマの個体数推定値は、政策・予算・現場対応の<strong>すべての出発点</strong>になります。
        管理計画の捕獲上限、補助金の配分、地域住民への説明、研究・保護の方向性 —
        いずれも「現在何頭いるか」「どこに分布するか」「どう移動するか」のデータがなければ
        合理的な判断ができません。
      </p>
      <h3>モニタリングで明らかにする項目</h3>
      <ul>
        <li>地域個体群の頭数推定</li>
        <li>性比・年齢構成・繁殖状況</li>
        <li>行動圏と季節移動</li>
        <li>食物資源との関連</li>
        <li>人間活動との接触頻度</li>
        <li>遺伝的多様性（個体群の健全性指標）</li>
      </ul>
      <p>
        実際の都道府県別個体数推定は{" "}
        <Link href="/research/wildlife-plans">
          都道府県別 クマ管理計画ハブ
        </Link>
        にまとめています。
      </p>

      <h2 id="camera">カメラトラップ（自動撮影カメラ）</h2>
      <p>
        最も普及している手法で、赤外線センサーで動物を検知して自動撮影するカメラを
        森林に多数設置します。動物の姿・行動・時間帯を直接記録できる強力なツールです。
      </p>
      <h3>仕組みとコスト</h3>
      <ul>
        <li>カメラ単価: 1〜10 万円</li>
        <li>必要台数: 調査面積 1km² あたり 1〜3 台</li>
        <li>電池寿命: 3〜12 ヶ月</li>
        <li>SD カード回収頻度: 1〜3 ヶ月に 1 回</li>
        <li>1 台あたりの年間データ量: 数千〜数万枚</li>
      </ul>
      <h3>得意な情報</h3>
      <ul>
        <li>個体識別（胸の白斑模様など）</li>
        <li>行動時間帯（昼夜・季節）</li>
        <li>母子連れ・繁殖状況の確認</li>
        <li>同地点を訪れる頻度</li>
      </ul>
      <h3>限界</h3>
      <ul>
        <li>地点での <strong>「点」の情報</strong>で、移動経路は分からない</li>
        <li>個体識別は経験と専門ソフトが必要</li>
        <li>カメラの故障・盗難リスク</li>
      </ul>

      <h2 id="gps">GPS 首輪（テレメトリー）</h2>
      <p>
        生きたクマを捕獲して GPS 内蔵首輪を装着し、行動圏を時系列で追跡する手法。
        個体レベルの詳細な移動データが取れる一方、装着には専門技術と倫理審査が必要です。
      </p>
      <h3>仕組みとコスト</h3>
      <ul>
        <li>首輪単価: 30〜80 万円（VHF + GPS + 衛星通信）</li>
        <li>追跡期間: 1〜3 年（電池寿命）</li>
        <li>記録間隔: 数十分〜数時間ごと</li>
        <li>データ取得: 衛星経由 or 受信機で接近して回収</li>
      </ul>
      <h3>得意な情報</h3>
      <ul>
        <li>行動圏のサイズ・形状</li>
        <li>季節移動・冬眠地</li>
        <li>1 日の行動パターン</li>
        <li>道路・川など物理的バリアの影響</li>
        <li>人家・誘引物への接近頻度</li>
      </ul>
      <h3>限界</h3>
      <ul>
        <li>個体単位でしか取れず、頭数推定には別手法が必要</li>
        <li>捕獲・装着の手間と倫理的負荷</li>
        <li>装着個体の代表性（捕獲しやすい個体に偏る）</li>
      </ul>

      <h2 id="hair">ヘアトラップ（毛 DNA 採取）</h2>
      <p>
        有刺鉄線を貼ったヘアトラップを設置し、通過したクマの毛を採取して DNA 解析する手法。
        個体識別・性別・遺伝的多様性を非侵襲的に調べられる近代的な方法です。
      </p>
      <h3>仕組みとコスト</h3>
      <ul>
        <li>トラップ設置: 1 ヶ所あたり数千円</li>
        <li>誘引餌: 蜂蜜・肉など（賛否分かれる）</li>
        <li>DNA 解析: 1 サンプル 3,000〜10,000 円</li>
        <li>調査期間: 1 シーズン（夏期数ヶ月）</li>
      </ul>
      <h3>得意な情報</h3>
      <ul>
        <li>地域個体数の推定（標識再捕獲法と組み合わせ）</li>
        <li>個体識別（DNA フィンガープリント）</li>
        <li>性比・血縁関係</li>
        <li>遺伝的多様性・地域個体群の独自性</li>
      </ul>
      <h3>限界</h3>
      <ul>
        <li>DNA 解析コストが高い</li>
        <li>サンプル数が少ないと推定誤差が大きい</li>
        <li>誘引餌が学習につながるリスク</li>
      </ul>

      <h2 id="mark">標識再捕獲法</h2>
      <p>
        統計学的手法で、最も古典的な個体数推定の枠組み。
        近年は <strong>「カメラトラップ + 個体識別」</strong>や
        <strong>「ヘアトラップ + DNA」</strong>を組み合わせた
        現代版で活用されています。
      </p>
      <h3>基本原理</h3>
      <p>
        ある期間に「目撃された」個体と「目撃されなかった」個体の比から、
        全体の個体数を統計的に推定する手法。<strong>Lincoln-Petersen 法</strong>や
        <strong>SECR（空間明示捕獲再捕獲法）</strong>などの数式モデルが使われます。
      </p>
      <h3>応用例</h3>
      <ul>
        <li>北海道・東北のヒグマ・ツキノワグマ個体数推定の主流手法</li>
        <li>環境省「特定鳥獣生息状況等調査」の標準</li>
        <li>絶滅危惧地域個体群（西中国地域など）の精密推定</li>
      </ul>

      <h2 id="ai">AI とデータ統合の現在</h2>
      <p>
        近年は AI 画像認識でカメラトラップの個体識別を自動化したり、
        複数の手法のデータを統合解析する <strong>「データ統合モデル」</strong>が
        実用化されつつあります。
      </p>
      <h3>近年の動向</h3>
      <ul>
        <li>
          <strong>画像認識 AI</strong> — カメラトラップ画像から種・個体を自動識別
        </li>
        <li>
          <strong>音響モニタリング</strong> — マイクとAIで動物の鳴き声を識別
        </li>
        <li>
          <strong>環境 DNA</strong> — 河川水・土壌からの DNA 検出
        </li>
        <li>
          <strong>衛星リモートセンシング</strong> — 食物資源（堅果類）の広域評価
        </li>
        <li>
          <strong>住民投稿型データ</strong> — KumaWatch のような市民科学プラットフォーム
        </li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-detection-ai">クマ検知 AI とは</Link>
        を参照してください。
      </p>

      <h2 id="kumawatch">KumaWatch のデータ活用</h2>
      <p>
        KumaWatch は研究機関ではありませんが、全国の公開データ（自治体・警察・報道）を
        集約することで、専門家の現場データを補完する <strong>「広域・準リアルタイム」</strong>
        のレイヤーを提供しています。
      </p>
      <h3>主なデータソース</h3>
      <ul>
        <li>全国 70+ 自治体の出没情報公開ページ</li>
        <li>警察庁の 110 番通報統計</li>
        <li>環境省・林野庁の公式データ</li>
        <li>主要メディアの報道（Google News RSS）</li>
        <li>ユーザー投稿（{" "}
          <Link href="/submit">出没情報の投稿</Link>）</li>
      </ul>
      <h3>研究機関・自治体との関係</h3>
      <p>
        専門研究機関の長期定点観測データは <strong>正確性</strong>に優れ、
        KumaWatch のような市民科学プラットフォームは <strong>網羅性・即時性</strong>に優れます。
        両者は競合ではなく補完関係にあり、今後もそれぞれの強みを生かした連携が進む見込みです。
      </p>

      <ArticleFaq
        items={[
          {
            q: "カメラトラップを個人で設置できますか?",
            a: "技術的・コスト的には可能ですが、自分の土地・許可を得た場所に限ります。他人の土地・国有林・国立公園には許可が必要。盗難リスクも高いので、設置場所の選定と所有者の同意が重要です。",
            aText:
              "技術的・コスト的に可能だが許可された場所に限る。国有林・国立公園は許可必要。盗難リスクあり、所有者同意が重要。",
          },
          {
            q: "GPS 首輪はクマを傷つけませんか?",
            a: "適切に装着すれば短期的な影響は最小限とされています。麻酔下で装着し、首輪は数年で自動脱落する設計が一般的。研究は倫理審査を経て実施され、個体への負荷を最小化する手順が確立されています。",
            aText:
              "適切装着で短期影響は最小限。麻酔下で装着、数年で自動脱落設計。倫理審査経由で実施。",
          },
          {
            q: "個体数推定はどれくらい正確ですか?",
            a: "「数百〜数千頭の幅」がある推定です。多くの都道府県で「中央値 + 90% 信頼区間」で表示され、たとえば「北海道 11,700 頭（6,600〜19,300 頭）」のように示されます。捕獲上限などの政策判断には中央値を使いますが、上下限も合わせて見るべき数字です。",
            aText:
              "数百〜数千頭の幅推定。多くは中央値 + 90% 信頼区間で表示。例: 北海道 11,700 頭（6,600〜19,300）。中央値で政策、上下限も併用。",
          },
          {
            q: "AI 画像認識でクマを完全に個体識別できますか?",
            a: "現時点では「補助的に有用」レベル。人間専門家の補助には十分使えますが、完全自動化には精度・データ量が課題。胸の白斑模様（ツキノワグマ）など特徴的な個体は判別できても、似たヒグマは難しいケースが多いです。",
            aText:
              "現時点は補助的に有用レベル。人間専門家の補助には十分。完全自動化は精度・データ量課題。白斑模様のツキノワは可、似たヒグマは困難。",
          },
          {
            q: "市民が観察データを共有することは研究に役立ちますか?",
            a: (
              <>
                はい。市民科学（Citizen Science）は野生動物研究の重要な手法として確立されています。KumaWatch の{" "}
                <Link href="/submit">出没情報の投稿</Link>
                や、各自治体の専用フォームへの投稿は、専門家の現場観察を補完する貴重なデータになります。
              </>
            ),
            aText:
              "はい。市民科学は野生動物研究の重要手法。KumaWatch の投稿・自治体専用フォーム投稿は専門家観察を補完する貴重データに。",
          },
        ]}
      />
    </ArticleShell>
  );
}
