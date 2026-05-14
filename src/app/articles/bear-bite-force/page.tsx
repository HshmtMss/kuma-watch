import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-bite-force")!;

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
        ヒグマの咬合力 (噛む力) は推定 <strong>500〜750 PSI (約 35〜50 kg/cm²、絶対値で 600〜800N)</strong>、
        人間の約 5〜10 倍に達します。雑食性ゆえに犬歯と臼歯が両方発達した「万能型」の歯列で、
        硬い堅果類・骨・甲虫の外殻まで噛み砕けます。本記事では獣医解剖学・口腔生理学の視点で、
        クマの歯と顎の構造、咬合力の生体力学、そして遭遇時のリスクを整理します。
      </p>

      <ArticleToc
        items={[
          { id: "numbers", title: "数値で見るクマの咬合力" },
          { id: "dentition", title: "歯列 — 雑食性ゆえの万能型" },
          { id: "muscles", title: "咬筋と側頭筋 — 噛む力を生む筋肉" },
          { id: "skull", title: "頭蓋骨の構造とテコの原理" },
          { id: "usage", title: "実際の使い分け — 食物別の噛み方" },
          { id: "attack", title: "襲撃時の咬みつき方とダメージ" },
          { id: "comparison", title: "他の動物との比較" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="numbers">数値で見るクマの咬合力</h2>
      <p>
        動物の咬合力は<strong>PSI (pounds per square inch)</strong> や<strong>N (ニュートン)</strong> で表されます。
        主要な動物の咬合力概算は次の通り。
      </p>
      <ul>
        <li>人間 (奥歯): 約 120〜150 PSI</li>
        <li>イヌ (大型犬): 約 200〜300 PSI</li>
        <li>ヒョウ・ジャガー: 約 700 PSI</li>
        <li>ライオン: 約 600〜800 PSI</li>
        <li><strong>ツキノワグマ</strong>: 約 400〜500 PSI</li>
        <li><strong>ヒグマ</strong>: 約 500〜750 PSI</li>
        <li>ホッキョクグマ: 約 1,200 PSI</li>
        <li>ナイルワニ: 約 5,000 PSI (動物界最強級)</li>
      </ul>
      <p>
        ヒグマはクマ科の中では中位ですが、人間の頭蓋骨を砕くには 200〜300 PSI で十分とされ、
        ヒグマの咬合力はそれを大きく上回ります。
      </p>

      <h2 id="dentition">歯列 — 雑食性ゆえの万能型</h2>
      <p>
        クマの歯列は <strong>42 本</strong> (永久歯)。獣医歯科学の歯式で表すと次の通り。
      </p>
      <p>
        切歯 3/3、犬歯 1/1、前臼歯 4/4、後臼歯 2/3 × 2 (左右)
      </p>
      <p>
        この歯列は雑食性の哺乳類に典型的で、次のように役割分担しています。
      </p>
      <ul>
        <li>
          <strong>切歯 (前歯)</strong>: 果実・葉・小型獲物の切り取り
        </li>
        <li>
          <strong>犬歯</strong>: 鋭く長い。獲物への突き刺し、威嚇、雄同士の戦い。
          雄ヒグマの犬歯は長さ 5〜7cm に達する
        </li>
        <li>
          <strong>前臼歯</strong>: 比較的小さい。咀嚼補助
        </li>
        <li>
          <strong>後臼歯 (大臼歯)</strong>: 表面が広く扁平。
          堅果類・骨・繊維質をすりつぶす
        </li>
      </ul>
      <p>
        肉食動物 (ネコ科) の後臼歯は鋭利な鋏歯 (carnassial teeth) ですが、
        クマでは扁平化しており、これがクマを「食物の汎用性」で進化的に成功させた鍵です。
      </p>

      <h2 id="muscles">咬筋と側頭筋 — 噛む力を生む筋肉</h2>
      <p>
        噛む力を生み出すのは主に 2 つの筋肉です。
      </p>
      <ul>
        <li>
          <strong>側頭筋 (temporalis)</strong>: 頭の側面・上から下顎を引き上げる大型筋。
          ヒグマでは頭蓋骨の上部に「矢状稜 (sagittal crest)」という骨の隆起があり、
          ここに側頭筋の付着面積を広げて強い噛み込みを可能にしている
        </li>
        <li>
          <strong>咬筋 (masseter)</strong>: 頬骨弓から下顎の角に走る。すりつぶしの主役
        </li>
      </ul>
      <p>
        この 2 つの筋肉が下顎を強烈に持ち上げ、上下の歯で食物・骨・標的を挟み込みます。
        矢状稜の発達は、雄ヒグマで特に顕著で、頭の上にトサカのように盛り上がって見える個体もあります。
      </p>

      <h2 id="skull">頭蓋骨の構造とテコの原理</h2>
      <p>
        生体力学的には、頭蓋骨は「テコ」として機能します。
      </p>
      <ul>
        <li>支点: 顎関節 (側頭骨と下顎骨の接合部)</li>
        <li>力点: 咬筋・側頭筋の付着点 (頬骨弓・矢状稜)</li>
        <li>作用点: 歯</li>
      </ul>
      <p>
        ヒグマの頭蓋骨は<strong>短く・幅広い</strong>のが特徴で、
        これが「噛む力を効率的に歯に伝える」設計になっています。
        対照的に細長い頭蓋を持つ動物 (シカ・ウマ) は咬合力は弱いです。
      </p>
      <p>
        さらにヒグマの下顎骨は<strong>骨が厚く硬い</strong>ため、強い噛み込みでも骨折しません。
        この設計は、骨を噛み砕いて骨髄を食べる行動 (大型獲物の死骸を処理する場面) を可能にしています。
      </p>

      <h2 id="usage">実際の使い分け — 食物別の噛み方</h2>
      <h3>果実・木の実</h3>
      <p>
        ブナ・ナラの堅果や柿・リンゴは、奥歯ですりつぶして果肉を取り出します。
        噛み砕く力よりも「すりつぶしの面積」が重要なので、頭蓋骨の前後運動も併用。
      </p>
      <h3>魚類 (サケ・マス)</h3>
      <p>
        北海道のヒグマは産卵期のサケを犬歯で押さえて切歯で剥がす独自の手法。
        頭部の脂肪質と魚卵を選り好みする「贅沢な食べ方」が観察されています。
      </p>
      <h3>骨</h3>
      <p>
        他の動物が残した骨を奥歯で割って骨髄を取り出します。
        この行動は、栄養豊富な脂肪源を効率よく確保する戦略です。
      </p>
      <h3>シカ・コウシ等の獲物</h3>
      <p>
        通常は腐肉食 (スカベンジ) で、生きた獲物を仕留めることは稀。
        仕留めた場合は犬歯で頸動脈を狙うか、後ろから腰を噛み付けて行動不能にします。
      </p>

      <h2 id="attack">襲撃時の咬みつき方とダメージ</h2>
      <p>
        人を襲うとき、クマの咬みつきは主に次のパターンを取ります。
      </p>
      <ul>
        <li>
          <strong>頭部・顔面・首</strong>: 最も致命的になりやすい部位。
          犬歯が頭蓋骨に達することがあり、頭蓋骨骨折・脳挫傷・頸動脈損傷を起こす
        </li>
        <li>
          <strong>腕・肩</strong>: 反射的に振り上げた腕を噛まれる事例が多い。
          骨折・神経損傷
        </li>
        <li>
          <strong>体幹</strong>: 横倒し状態の被害者の腹部・背中。
          内臓損傷リスクあり
        </li>
      </ul>
      <p>
        咬合力に加えて<strong>「振り回し」「引き裂き」</strong>の動作が組み合わさり、
        小さな噛みつきでも傷は深く・複雑になります。
        死んだふりが「攻撃を続けない可能性を高める」根拠もここにあり、
        激しく動くと振り回し攻撃を誘発する可能性があるためです。
        詳しくは <Link href="/articles/playing-dead">死んだふりの正しい方法</Link> を参照。
      </p>

      <h2 id="comparison">他の動物との比較</h2>
      <p>
        クマの咬合力を他のクマ・大型動物と比較すると、進化的な位置づけが見えてきます。
      </p>
      <ul>
        <li>
          <strong>ホッキョクグマ</strong>: 約 1,200 PSI。アザラシなど厚い脂肪と皮を噛み破る必要があるため最高位
        </li>
        <li>
          <strong>ヒグマ</strong>: 約 500〜750 PSI。雑食ながら骨・大型獲物にも対応
        </li>
        <li>
          <strong>ツキノワグマ</strong>: 約 400〜500 PSI。植物食寄りで、骨を砕く頻度は低い
        </li>
        <li>
          <strong>ジャイアントパンダ</strong>: 約 1,300 PSI。竹を噛み砕くため咬合力は驚異的
        </li>
      </ul>
      <p>
        食性 (何を食べるか) が咬合力の進化を強く決定していることが分かります。
      </p>

      <ArticleFaq
        items={[
          {
            q: "クマよけスプレーはクマの口に届くと効果ある？",
            a: "口腔内・気道に入ると即座に呼吸困難を起こし攻撃を止める可能性が高い。ただし狙って口を狙うのは難しいので、顔面 (鼻・目) 全体を狙うのが基本。",
            aText: "口腔内・気道に入ると即座に呼吸困難を起こし攻撃を止める可能性が高い。ただし狙って口を狙うのは難しいので、顔面 (鼻・目) 全体を狙うのが基本。",
          },
          {
            q: "クマに腕を噛まれたとき、腕を引き抜こうとしていい？",
            a: "強い咬みつきは引き抜くと組織損傷が拡大する場合があります。基本は「動かさず、相手の関心が逸れた瞬間に静かに引く」。激しく振り回されるとさらに大ダメージ。",
            aText: "強い咬みつきは引き抜くと組織損傷が拡大する場合があります。基本は「動かさず、相手の関心が逸れた瞬間に静かに引く」。激しく振り回されるとさらに大ダメージ。",
          },
          {
            q: "ヘルメット・自転車ヘルメットは頭部を守れる？",
            a: "完璧ではないが、咬合力の一部を分散させ、犬歯の貫通を防ぐ効果は期待できます。林業従事者の安全ヘルメット (耐衝撃) は推奨されます。",
            aText: "完璧ではないが、咬合力の一部を分散させ、犬歯の貫通を防ぐ効果は期待できます。林業従事者の安全ヘルメット (耐衝撃) は推奨されます。",
          },
          {
            q: "歯と犬歯の長さで個体識別できる？",
            a: "犬歯のすり減り具合と切歯の摩耗パターンから年齢推定はある程度可能。北米の野生生物管理では、頬歯のセメント質層の輪を数えて年齢を測定します。",
            aText: "犬歯のすり減り具合と切歯の摩耗パターンから年齢推定はある程度可能。北米の野生生物管理では、頬歯のセメント質層の輪を数えて年齢を測定します。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-senses">クマの感覚 — 嗅覚・聴覚・視覚</Link> /{" "}
        <Link href="/articles/playing-dead">死んだふりの正しい方法</Link> /{" "}
        <Link href="/articles/first-aid">襲われた直後の応急処置</Link>
      </p>
    </ArticleShell>
  );
}
