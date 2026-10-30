import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-tracks")!;

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
        <strong>結論</strong>: 山中で痕跡を読めると、<strong>クマの存在に「事前に」気づける</strong>。
        足跡・糞・木の爪痕・食痕の見分け方を覚えると、遭遇前に進路変更できる確率が上がります。
        新しい痕跡を見たら、その日はそのエリアを避けるのが基本です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            痕跡を読めると<strong>クマの存在に「事前に」気づける</strong>。
          </>,
          <>
            <strong>足跡・糞・木の爪痕・食痕</strong>の見分けで遭遇前に進路変更できる。
          </>,
          <>
            <strong>新しい痕跡を見たら、その日はそのエリアを避ける</strong>のが基本。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "tracks", title: "足跡 — 5 本指と独特の形" },
          { id: "scat", title: "糞 — 食性が分かる" },
          { id: "claw-marks", title: "木の爪痕・噛み痕" },
          { id: "feeding", title: "食痕 — 食べ物の残骸" },
          { id: "freshness", title: "痕跡の「新しさ」を判断する" },
          { id: "behavior", title: "痕跡を見つけたときの行動" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="tracks">足跡 — 5 本指と独特の形</h2>
      <p>
        クマの足跡は他の動物と区別しやすい特徴があります。
      </p>
      <ul>
        <li><strong>5 本の指</strong>: 指が横に並ぶように残る (犬・キツネは 4 本)</li>
        <li><strong>足の裏が大きく明瞭</strong>: 前足は幅広、後足は人の素足に似た細長い形</li>
        <li><strong>爪の跡</strong>: 指の先に爪の跡が残ることがある</li>
        <li><strong>大きさ</strong>: 前足の幅はツキノワグマで 7〜13cm、ヒグマで 12〜18cm 程度 (環境省資料)</li>
      </ul>
      <p>
        泥地・雪上・川岸の砂地が観察ポイント。残雪期や雨上がりは見つけやすい。
      </p>

      <h2 id="scat">糞 — 食性が分かる</h2>
      <p>
        クマの糞は太さ・内容物から識別できます。
      </p>
      <ul>
        <li><strong>大きさ</strong>: 太く量が多い (大きい個体ほど太い)</li>
        <li><strong>形</strong>: 円柱状で時にうねっている</li>
        <li><strong>内容物</strong>: 季節で大きく変わる
          <ul>
            <li>春: 草・若芽・タケノコの繊維</li>
            <li>夏: 昆虫の外骨格・毛・果実の種</li>
            <li>秋: ドングリの殻・栗の皮</li>
            <li>動物質: シカの毛・骨片など</li>
          </ul>
        </li>
        <li><strong>色</strong>: 黒〜茶色。完全に新鮮なものは表面が湿って光る</li>
      </ul>
      <p>
        糞の <strong>色・湿度・匂い</strong> から「いつのものか」がある程度判断できます。
        食性の詳細は <Link href="/articles/diet">クマの食性</Link> を参照。
      </p>

      <h2 id="claw-marks">木の爪痕・噛み痕</h2>
      <p>
        クマは木に痕跡を残します。
      </p>
      <ul>
        <li><strong>爪痕</strong>: 木に登ったときに幹に残る、平行に並んだ引っかき傷</li>
        <li><strong>樹皮はぎ (クマハギ)</strong>: スギ・ヒノキなどの樹皮を剥がした跡。歯型が残ることも</li>
        <li><strong>背こすり木</strong>: 背中を木にこすりつけた跡。毛が付いていることもあり、匂いによるやりとりと考えられている</li>
        <li><strong>クマ棚</strong>: 木に登って実を食べるときに折った枝を、尻の下に敷き重ねた跡。カキ・クリなどの木でも見られる</li>
      </ul>

      <h2 id="feeding">食痕 — 食べ物の残骸</h2>
      <p>
        クマが食事した跡 (食痕) もはっきり残ります。
      </p>
      <ul>
        <li><strong>朽木がひっくり返されている</strong>: アリ・幼虫を探した跡</li>
        <li><strong>蜂の巣の残骸</strong>: 樹上から落とされた蜂の巣の破片</li>
        <li><strong>ドングリ・ブナの実の殻が散乱</strong>: 木の下の地面に散らばる</li>
        <li><strong>果樹の周りの食い残し</strong>: 柿・栗の落果に歯型・爪痕</li>
        <li><strong>シカの死骸が枝・葉で覆われている</strong>: クマが餌を保管している (「土まんじゅう」)。見つけたら近づかずに離れる</li>
      </ul>

      <h2 id="freshness">痕跡の「新しさ」を判断する</h2>
      <p>
        痕跡が「いつの」ものかが、行動判断の核心です。
      </p>
      <ul>
        <li>
          <strong>足跡</strong>:
          縁がシャープで雨・風・他の動物に乱されていない → 新しい
        </li>
        <li>
          <strong>糞</strong>:
          表面が湿って光っている → 新しい。乾燥してパサパサ → 時間がたっている
        </li>
        <li>
          <strong>爪痕</strong>:
          傷口が白く生々しく、樹液が出ている → 新しい
        </li>
        <li>
          <strong>食痕</strong>:
          食べかすが乾いておらず、まだ新鮮 → 新しい
        </li>
      </ul>
      <p>
        いずれも天候や場所で変わるおおまかな目安です。
        新しい痕跡 = クマがまだ近くにいる可能性がある。引き返すか迂回するかの判断材料になります。
      </p>

      <h2 id="behavior">痕跡を見つけたときの行動</h2>
      <ol>
        <li><strong>1 つだけなら通過時の警戒を強化</strong> (鈴・ホイッスル増量)</li>
        <li><strong>複数の新しい痕跡 → エリア全体に活動中の個体がいる</strong> 引き返す判断</li>
        <li><strong>子連れの痕跡 (大小ペアの足跡)</strong> 母グマがいる前提で行動を変える</li>
        <li><strong>「土まんじゅう」 (隠した餌) を発見</strong> 即離脱。クマが戻ってくる</li>
        <li><strong>SNS・記録に位置を共有</strong>: 後続の登山者・自治体への情報源に</li>
      </ol>
      <p>
        遭遇予防の延長として、日常の山行で「痕跡の読み」を習慣にすることが安全度を大きく上げます。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマの足跡と犬の足跡の違いは?",
            a: (
              <>
                犬は 4 本指です。クマは 5 本指で、足の裏の跡が大きく、後足は人の素足に似た細長い形になるのが特徴です。幅の広い 5 本指の足跡を見たらクマを疑ってください。
              </>
            ),
            aText:
              "犬は 4 本指です。クマは 5 本指で、足の裏の跡が大きく、後足は人の素足に似た細長い形になるのが特徴です。幅の広い 5 本指の足跡を見たらクマを疑ってください。",
          },
          {
            q: "新しいクマの糞を見つけたが、どうする?",
            a: (
              <>
                新しいものなら、近くにクマが残っている可能性があります。引き返すか、視界の良い別ルートで迂回してください。一人で進むのは避け、可能なら複数人で警戒度を上げて歩きます。
              </>
            ),
            aText:
              "新しいものなら、近くにクマが残っている可能性があります。引き返すか、視界の良い別ルートで迂回してください。一人で進むのは避け、可能なら複数人で警戒度を上げて歩きます。",
          },
          {
            q: "土まんじゅうって何?",
            a: (
              <>
                クマが食料 (シカの死骸など) を埋めて隠した跡です。土と落ち葉で盛り上がっていることが多く、近くにクマがいて戻ってくる可能性が高い。発見したら即その場を離れ、自治体や警察に連絡してください。最も危険な痕跡の 1 つです。
              </>
            ),
            aText:
              "クマが食料 (シカの死骸など) を埋めて隠した跡です。土と落ち葉で盛り上がっていることが多く、近くにクマがいて戻ってくる可能性が高い。発見したら即その場を離れ、自治体や警察に連絡してください。",
          },
          {
            q: "痕跡を写真に撮って共有したい",
            a: (
              <>
                安全が確保できた距離からなら写真撮影は OK で、GPS 座標と合わせて自治体・くまウォッチの <Link href="/submit">投稿フォーム</Link> に共有すると地域の情報源として役立ちます。ただし「痕跡が新しい = クマが近い」前提で、撮影に夢中になりすぎないよう注意してください。
              </>
            ),
            aText:
              "安全が確保できた距離からなら写真撮影は OK で、GPS 座標と合わせて自治体・くまウォッチの投稿フォームに共有すると地域の情報源として役立ちます。",
          },
        ]}
      />
    </ArticleShell>
  );
}
