import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-phylogeny")!;

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
        現生のクマ科 (Ursidae) は世界に <strong>8 種</strong>。
        ジャイアントパンダもクマ科の一員で、最も古く 1,800 万年前に他のクマと分岐しました。
        ホッキョクグマはヒグマからわずか 25 万年で分岐した「最も若いクマ」。
        本記事では分子系統学・古生物学の知見から、クマ科 8 種の関係と進化の物語を整理します。
      </p>

      <ArticleToc
        items={[
          { id: "eight-species", title: "現生クマ科 8 種" },
          { id: "tree", title: "系統樹で見るクマの分岐" },
          { id: "ancestor", title: "最古のクマ — 4000 万年前のダウニング祖先" },
          { id: "panda", title: "ジャイアントパンダ — クマ科で最も古い枝" },
          { id: "polar", title: "ホッキョクグマ — ヒグマから 25 万年で分岐" },
          { id: "japan", title: "日本のクマ 2 種の系統的位置" },
          { id: "extinct", title: "絶滅したクマ — ホラアナグマ・短顔グマ" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="eight-species">現生クマ科 8 種</h2>
      <p>
        現生のクマ科動物は次の 8 種です。
      </p>
      <ol>
        <li>
          <strong>ヒグマ (Ursus arctos)</strong>: 北米・ユーラシア大陸。北海道のエゾヒグマも本種
        </li>
        <li>
          <strong>ホッキョクグマ (Ursus maritimus)</strong>: 北極圏
        </li>
        <li>
          <strong>アメリカクロクマ (Ursus americanus)</strong>: 北米大陸
        </li>
        <li>
          <strong>ツキノワグマ (Ursus thibetanus)</strong>: アジア大陸 (本州・四国・九州含む)
        </li>
        <li>
          <strong>マレーグマ (Helarctos malayanus)</strong>: 東南アジア。最小のクマ種
        </li>
        <li>
          <strong>ナマケグマ (Melursus ursinus)</strong>: インド・スリランカ。シロアリ食特化
        </li>
        <li>
          <strong>メガネグマ (Tremarctos ornatus)</strong>: 南米アンデス山脈
        </li>
        <li>
          <strong>ジャイアントパンダ (Ailuropoda melanoleuca)</strong>: 中国西部
        </li>
      </ol>
      <p>
        生息地は南極を除く全大陸 (アフリカ・オーストラリアにも自然分布なし) で、
        森林・草原・極地・高山と多様な環境に適応しています。
      </p>

      <h2 id="tree">系統樹で見るクマの分岐</h2>
      <p>
        分子系統解析 (ミトコンドリア DNA・核 DNA) に基づくクマ科の主な分岐は次の通り。
      </p>
      <ul>
        <li>
          <strong>約 1,800 万年前</strong>: ジャイアントパンダ系統が他のクマ科から分岐
        </li>
        <li>
          <strong>約 1,000〜1,300 万年前</strong>: メガネグマ系統が分岐
        </li>
        <li>
          <strong>約 500〜700 万年前</strong>: マレーグマ・ナマケグマが分岐
        </li>
        <li>
          <strong>約 400〜500 万年前</strong>: ツキノワグマ・アメリカクロクマ・ヒグマ系統が分岐
        </li>
        <li>
          <strong>約 250〜350 万年前</strong>: ヒグマとアメリカクロクマが分岐
        </li>
        <li>
          <strong>約 25 万年前</strong>: ヒグマからホッキョクグマが分岐
        </li>
      </ul>
      <p>
        重要なのは、現在「クマ」と呼ばれる動物群は<strong>200〜500 万年前</strong>に多様化した
        比較的若いグループだということ。それ以前の祖先種は、現代のクマとは見た目も生態も異なる
        小型の雑食性肉食獣でした。
      </p>

      <h2 id="ancestor">最古のクマ — 4000 万年前のダウニング祖先</h2>
      <p>
        クマ科の最も古い祖先は<strong>ダウニング祖先 (Amphicynodontinae)</strong> と呼ばれる
        北米・ヨーロッパに分布した中型雑食性肉食獣。約 4,000 万年前の始新世にさかのぼります。
      </p>
      <p>
        この祖先群から徐々に体格が大型化・雑食性に特化し、3,000 万年前頃には現代のクマ科に近い体格になりました。
        その後、寒冷化・乾燥化に適応して各大陸で多様化していきます。
      </p>

      <h2 id="panda">ジャイアントパンダ — クマ科で最も古い枝</h2>
      <p>
        ジャイアントパンダがクマ科に分類されることに違和感を持つ人も多いでしょう。
        竹を主食とし、見た目も生態も他のクマと大きく異なります。
      </p>
      <p>
        分子系統解析と化石記録から、ジャイアントパンダは<strong>1,800 万年前に他のクマから分岐した
        最も古い枝</strong>であることが分かっています。竹食への特殊化は約 200〜700 万年前と推定されています。
      </p>
      <ul>
        <li>
          手の親指の隣に「第六の指 (橈側種子骨)」を発達させ、竹を掴めるように
        </li>
        <li>
          消化器は他のクマと同じ肉食性配列のまま (短い腸)、竹をうまく消化できない
        </li>
        <li>
          一日 12〜16 時間食べ続けて栄養を補う非効率な食性
        </li>
        <li>
          冬眠しない (竹は年中入手可能のため)
        </li>
      </ul>
      <p>
        パンダの竹食特化は「最も適応していない適応」と言われ、保全上の脆弱性の根本原因でもあります。
      </p>

      <h2 id="polar">ホッキョクグマ — ヒグマから 25 万年で分岐</h2>
      <p>
        ホッキョクグマはクマ科 8 種で最も若い種で、約 25 万年前にヒグマから分岐しました。
        進化のタイムスケールでは「ごく最近」で、ヒグマとの遺伝的距離は近く、現在も交配して
        雑種を作れる近縁関係にあります (グリズリー・ポーラー雑種、グロラー)。
      </p>
      <ul>
        <li>
          毛色: 白〜淡黄色 (実は皮膚は黒で、毛が透明)
        </li>
        <li>
          食性: 完全肉食化 (アザラシ・鯨類)
        </li>
        <li>
          体格: クマ科最大級。雄で 700kg を超える
        </li>
        <li>
          冬眠: 出産期の雌のみが部分冬眠。雄は活動継続
        </li>
        <li>
          泳力: 60〜70km 連続遊泳可能
        </li>
      </ul>
      <p>
        気候変動による海氷減少は、ホッキョクグマの食料源 (アザラシ) を奪い、
        この若い種を急速に絶滅の危機に追い込んでいます。
      </p>

      <h2 id="japan">日本のクマ 2 種の系統的位置</h2>
      <p>
        日本のクマ 2 種は、世界のクマ科の中で次の位置を占めます。
      </p>
      <ul>
        <li>
          <strong>ツキノワグマ (Ursus thibetanus)</strong>:
          アジア大陸を中心に分布する種。本州・四国・九州の個体群は同一種だが、
          北海道にはおらず、日本列島内でも地域個体群間で遺伝的差異がある
        </li>
        <li>
          <strong>ヒグマ (Ursus arctos)</strong>:
          世界で最も広く分布するクマ。北海道のエゾヒグマは亜種 (U. a. yesoensis) に分類される。
          シベリア・カムチャツカのヒグマと近縁
        </li>
      </ul>
      <p>
        日本列島の地理的分布の理由は、次の進化史記事で詳しく解説しています:{" "}
        <Link href="/articles/bear-japan-evolution">日本のクマの進化史</Link>
      </p>

      <h2 id="extinct">絶滅したクマ — ホラアナグマ・短顔グマ</h2>
      <p>
        現生 8 種以外にも、過去には数十種の絶滅したクマが存在しました。代表的なものを 2 つ紹介します。
      </p>
      <h3>ホラアナグマ (Ursus spelaeus)</h3>
      <p>
        ヨーロッパに分布した大型のクマ。約 2 万年前の最終氷期に絶滅。
        洞窟で集団冬眠し、化石が大量に発見されることから命名されました。
        最近の DNA 解析でヒグマと近縁であることが分かっています。
      </p>
      <h3>巨大短顔グマ (Arctotherium angustidens)</h3>
      <p>
        南米に分布した史上最大のクマ。推定体重 <strong>1,600〜1,750kg</strong>。
        現生のホッキョクグマの 2〜3 倍の体格で、立ち上がると 4m を超えたとされます。
        約 50 万年前に絶滅。メガネグマと近縁。
      </p>

      <ArticleFaq
        items={[
          {
            q: "なぜジャイアントパンダはクマと呼ばれる？",
            a: "1869 年の発見当初は「ネコ熊」として議論があり、解剖・分子系統が確立した 20 世紀後半にクマ科として確定。最古の枝として独自進化したクマです。",
            aText: "1869 年の発見当初は「ネコ熊」として議論があり、解剖・分子系統が確立した 20 世紀後半にクマ科として確定。最古の枝として独自進化したクマです。",
          },
          {
            q: "クマとアライグマ・タヌキは近縁？",
            a: "アライグマ科 (Procyonidae) はクマ科に近縁ですが別科。タヌキはイヌ科で系統的にはクマと別グループ。クマに最も近いのはイタチ・アシカ・アザラシなどの「鰭脚類」。",
            aText: "アライグマ科 (Procyonidae) はクマ科に近縁ですが別科。タヌキはイヌ科で系統的にはクマと別グループ。クマに最も近いのはイタチ・アシカ・アザラシなどの「鰭脚類」。",
          },
          {
            q: "ヒグマとホッキョクグマの雑種は生存可能？",
            a: "野生でもグリズリー・ポーラー雑種 (グロラー) が確認されており、繁殖能力もあります。気候変動でヒグマが北上することで雑種化が進む現象。",
            aText: "野生でもグリズリー・ポーラー雑種 (グロラー) が確認されており、繁殖能力もあります。気候変動でヒグマが北上することで雑種化が進む現象。",
          },
          {
            q: "日本にもかつてはヒグマ以外のクマがいた？",
            a: "化石記録ではホンシュウヒグマと呼ばれる別個体群、また小型のツキノワグマ亜種が存在したことが示唆されています。氷河期の海面変動で個体群が分断された痕跡があります。",
            aText: "化石記録ではホンシュウヒグマと呼ばれる別個体群、また小型のツキノワグマ亜種が存在したことが示唆されています。氷河期の海面変動で個体群が分断された痕跡があります。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-japan-evolution">日本のクマの進化史</Link> /{" "}
        <Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link> /{" "}
        <Link href="/articles/world-bears">世界のクマ種</Link>
      </p>
    </ArticleShell>
  );
}
