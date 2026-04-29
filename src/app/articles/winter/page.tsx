import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("winter")!;

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
        <strong>結論</strong>: 「冬はクマがいない」は誤解です。<strong>冬眠せずに活動する個体 (穴持たず)</strong> が確実に存在し、暖冬や食料不足の年は数が増えます。
        スキー場・冬山登山・スノーシューでも油断せず、雪上の足跡や食痕に注意してください。
      </p>

      <ArticleToc
        items={[
          { id: "hibernation", title: "クマの冬眠とは" },
          { id: "anamotanazu", title: "穴持たず — 冬眠しないクマ" },
          { id: "ski", title: "スキー場・スノボでの遭遇" },
          { id: "winter-mountain", title: "冬山登山のリスク" },
          { id: "snow-tracks", title: "雪上の痕跡を読む" },
          { id: "warming", title: "気候変動の影響" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="hibernation">クマの冬眠とは</h2>
      <p>
        ツキノワグマ・ヒグマとも 12〜3 月頃に冬眠期に入ります。
        体温は通常より数度下がり、心拍数は 1 分間に 10 回程度まで低下、餌は基本的に食べません。
        冬眠場所は岩穴・樹洞・倒木の下・木の根元の穴など。
      </p>
      <p>
        妊娠中のメスは冬眠中に出産し、子グマは穴の中で 2〜3 ヶ月ほど過ごしてから春先に外に出てきます。
      </p>

      <h2 id="anamotanazu">穴持たず — 冬眠しないクマ</h2>
      <p>
        全てのクマが冬眠するわけではありません。秋の食料不足で十分な脂肪を蓄えられなかった個体は冬眠せず、活動を続けます。これが「穴持たず」と呼ばれる個体です。
      </p>
      <ul>
        <li>飢えており、餌探しが切実 → 攻撃的になりやすい</li>
        <li>雪上を歩き回り、痕跡が残るので発見しやすい</li>
        <li>三毛別事件 (1915) のヒグマも穴持たずだったとされる</li>
        <li>暖冬・食料凶作年は穴持たずの数が増える</li>
      </ul>

      <h2 id="ski">スキー場・スノボでの遭遇</h2>
      <p>
        スキー場での目撃事例も毎年報告されています。
      </p>
      <ul>
        <li>圧雪されたゲレンデの脇 (林間コース・パウダーゾーン) を移動</li>
        <li>ナイター営業中の照明の届かないエリアでの遭遇</li>
        <li>リフト下の樹林帯でゴミを漁るケース</li>
        <li>春スキーのシーズン (3〜4 月) は冬眠明けの個体と重なる</li>
      </ul>
      <p>
        スキー場経営側もクマ対策をとっていますが、利用者個人もコース外への侵入は避け、薄暗い時間帯のナイター利用は慎重にしてください。
      </p>

      <h2 id="winter-mountain">冬山登山のリスク</h2>
      <p>
        冬山登山者がクマに遭遇する可能性は低いものの、ゼロではありません。
      </p>
      <ul>
        <li>低山・中山の冬季登山では穴持たずに遭遇する可能性</li>
        <li>テント泊の食料管理は通常より重要 (匂いが雪上に強く残る)</li>
        <li>雪洞泊で動物の気配を察知する力が落ちる</li>
        <li>春に近い 3〜4 月の残雪期は冬眠明けと重なる</li>
      </ul>

      <h2 id="snow-tracks">雪上の痕跡を読む</h2>
      <p>
        雪上はクマの痕跡が最も見つけやすい場所です。
      </p>
      <ul>
        <li><strong>足跡</strong>: 5 本指の前足・後足の特徴的な形 (詳細は <Link href="/articles/bear-tracks">クマの足跡・糞・食痕の見分け方</Link>)</li>
        <li><strong>ラッセル跡</strong>: 雪を掻き分けた跡が線状に残る</li>
        <li><strong>糞</strong>: 雪上では小動物の血や毛が混じった糞が見やすい</li>
        <li><strong>休憩跡</strong>: 雪を踏み固めた寝床のようなくぼみ</li>
      </ul>
      <p>
        新しい (=その日のうちの) 痕跡を見たら、無理せず引き返す判断を。
      </p>

      <h2 id="warming">気候変動の影響</h2>
      <p>
        近年の暖冬で、クマの冬眠期間は短くなっており、活動期間が拡大しています。
      </p>
      <ul>
        <li>冬眠開始が遅れる (12 月後半まで活動)</li>
        <li>冬眠明けが早まる (2 月末から目撃も)</li>
        <li>暖冬時の中断 (短期間の活動再開)</li>
        <li>穴持たずの増加</li>
      </ul>
      <p>
        詳細は <Link href="/articles/why-increasing">なぜ出没が増えているのか</Link> を参照してください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "冬山なら絶対安全?",
            a: (
              <>
                絶対安全ではありません。穴持たずや冬眠の浅い個体に遭遇する可能性はゼロではありません。雪上の足跡・痕跡には常に目を配ってください。
              </>
            ),
            aText:
              "絶対安全ではありません。穴持たずや冬眠の浅い個体に遭遇する可能性はゼロではありません。雪上の足跡・痕跡には常に目を配ってください。",
          },
          {
            q: "スキー場で目撃情報があったら?",
            a: (
              <>
                ゲレンデ脇の樹林帯・コース外には絶対に立ち入らず、ナイターは敬遠してください。スキー場側の指示に従い、必要なら別エリアの利用に切り替えるのが安全です。
              </>
            ),
            aText:
              "ゲレンデ脇の樹林帯・コース外には絶対に立ち入らず、ナイターは敬遠してください。スキー場側の指示に従い、必要なら別エリアの利用に切り替えるのが安全です。",
          },
          {
            q: "穴持たずに遭遇したらどうする?",
            a: (
              <>
                穴持たずは飢えているので通常より攻撃的になり得ます。基本の遭遇対処 (<Link href="/articles/encounter">距離別の対処</Link>) は変わりませんが、より警戒度高く、スプレーをすぐ取り出せる体勢で。
              </>
            ),
            aText:
              "穴持たずは飢えているので通常より攻撃的になり得ます。基本の遭遇対処 (距離別の対処) は変わりませんが、より警戒度高く、スプレーをすぐ取り出せる体勢で。",
          },
          {
            q: "冬眠中のクマの巣穴を見つけたら?",
            a: (
              <>
                絶対に近づかないでください。冬眠中のクマも気配で目を覚まし、防衛行動に出ます。出産直後のメス・子グマがいる場合は最も危険。発見した場所は通報し、自治体・専門家に判断を任せてください。
              </>
            ),
            aText:
              "絶対に近づかないでください。冬眠中のクマも気配で目を覚まし、防衛行動に出ます。出産直後のメス・子グマがいる場合は最も危険。発見した場所は通報し、自治体・専門家に判断を任せてください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
