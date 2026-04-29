import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        <li><strong>5 本の指</strong>: 全ての指が平行に並ぶ (犬・キツネは 4 本)</li>
        <li><strong>足の裏 (蹠球) が大きく明瞭</strong>: 人間の手のひらに似た跡</li>
        <li><strong>爪の跡</strong>: 各指の先に細い線が残る</li>
        <li><strong>大きさ</strong>: 前足 12〜16cm、後足 18〜22cm (ヒグマはさらに大きい)</li>
        <li><strong>歩幅</strong>: 30〜50cm 程度の規則的な間隔</li>
      </ul>
      <p>
        泥地・雪上・川岸の砂地が観察ポイント。残雪期や雨上がりは見つけやすい。
      </p>

      <h2 id="scat">糞 — 食性が分かる</h2>
      <p>
        クマの糞は太さ・内容物から識別できます。
      </p>
      <ul>
        <li><strong>太さ</strong>: 直径 4〜6cm (大きい個体ほど太い)</li>
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
        <li><strong>爪痕</strong>: 木の幹に縦に並んだ 4〜5 本の線。指 1 本分の幅 (1.5〜2cm)</li>
        <li><strong>噛み痕</strong>: 木の樹皮を剥がした跡。歯型が残ることも</li>
        <li><strong>ベアトリー (Bear Tree)</strong>: 同じ木に複数の個体が痕跡を残す習慣あり。匂い付け・縄張り表現と推測される</li>
        <li><strong>枝折り痕</strong>: 果実 (柿・梨など) を食べる際に枝が折れている</li>
      </ul>

      <h2 id="feeding">食痕 — 食べ物の残骸</h2>
      <p>
        クマが食事した跡 (食痕) もはっきり残ります。
      </p>
      <ul>
        <li><strong>朽木がひっくり返されている</strong>: アリ・幼虫を探した跡</li>
        <li><strong>蜂の巣の残骸</strong>: 樹上から落とされた蜂の巣の破片</li>
        <li><strong>ドングリの殻が散乱</strong>: ブナ林の地面に大量に散らばる</li>
        <li><strong>果樹の周りの食い残し</strong>: 柿・栗の落果に歯型・爪痕</li>
        <li><strong>シカの死骸が枝・葉で覆われている</strong>: クマが餌を保管している (「土まんじゅう」)。これを見たら絶対近づかない</li>
      </ul>

      <h2 id="freshness">痕跡の「新しさ」を判断する</h2>
      <p>
        痕跡が「いつの」ものかが、行動判断の核心です。
      </p>
      <ul>
        <li>
          <strong>足跡</strong>:
          縁がシャープで雨・風・他の動物に乱されていない → 新しい (数時間以内)
        </li>
        <li>
          <strong>糞</strong>:
          表面が湿って光っている → 数時間以内。乾燥してパサパサ → 数日以上前
        </li>
        <li>
          <strong>爪痕</strong>:
          切り口に樹液が出ている → 1〜数日以内
        </li>
        <li>
          <strong>食痕</strong>:
          ドングリの殻が湿っている → その日の朝
        </li>
      </ul>
      <p>
        新しい痕跡 = クマがまだ近くにいる可能性が高い。引き返すか迂回するかの判断材料になります。
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

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマの足跡と犬の足跡の違いは?",
            a: (
              <>
                犬は 4 本指で爪が指の先端から少し離れた位置に残ります。クマは 5 本指で爪痕が指のすぐ前にしっかり残るのが特徴。サイズもクマの方が大きいので、 12cm 以上の足跡で 5 本指ならクマと考えてください。
              </>
            ),
            aText:
              "犬は 4 本指で爪が指の先端から少し離れた位置に残ります。クマは 5 本指で爪痕が指のすぐ前にしっかり残るのが特徴。サイズもクマの方が大きいので、 12cm 以上の足跡で 5 本指ならクマと考えてください。",
          },
          {
            q: "新しいクマの糞を見つけたが、どうする?",
            a: (
              <>
                数時間前のものなら、近くにクマが残っている可能性が高い。引き返すか、視界の良い別ルートで迂回してください。一人で進むのは避け、可能なら複数人で警戒度を上げて歩きます。
              </>
            ),
            aText:
              "数時間前のものなら、近くにクマが残っている可能性が高い。引き返すか、視界の良い別ルートで迂回してください。一人で進むのは避け、可能なら複数人で警戒度を上げて歩きます。",
          },
          {
            q: "土まんじゅうって何?",
            a: (
              <>
                クマが食料 (シカの死骸など) を埋めて隠した跡です。土と落ち葉で盛り上がっていることが多く、近くにクマが残って戻ってくる可能性が極めて高い。発見したら即その場を離れ、通報してください。最も危険な痕跡の 1 つです。
              </>
            ),
            aText:
              "クマが食料 (シカの死骸など) を埋めて隠した跡です。土と落ち葉で盛り上がっていることが多く、近くにクマが残って戻ってくる可能性が極めて高い。発見したら即その場を離れ、通報してください。",
          },
          {
            q: "痕跡を写真に撮って共有したい",
            a: (
              <>
                安全が確保できた距離からなら写真撮影は OK で、GPS 座標と合わせて自治体・KumaWatch の <Link href="/submit">投稿フォーム</Link> に共有すると地域の情報源として役立ちます。ただし「痕跡が新しい = クマが近い」前提で、撮影に夢中になりすぎないよう注意してください。
              </>
            ),
            aText:
              "安全が確保できた距離からなら写真撮影は OK で、GPS 座標と合わせて自治体・KumaWatch の投稿フォームに共有すると地域の情報源として役立ちます。",
          },
        ]}
      />
    </ArticleShell>
  );
}
