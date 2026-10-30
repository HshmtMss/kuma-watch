import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        ジャイアントパンダもクマ科の一員で、約 2,000 万年前 (推定 1,800〜2,200 万年前) に最も早く他のクマと分岐しました。
        ホッキョクグマは数十万年前にヒグマから分かれた「最も若いクマ」です。
        本記事では分子系統学・古生物学の知見から、クマ科 8 種の関係と進化の物語を整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            現生のクマ科は<strong>世界に8種</strong>。パンダも約2,000万年前に最初に分かれたクマ科。
          </>,
          <>
            <strong>ホッキョクグマは数十万年前にヒグマから分岐</strong>した「最も若いクマ」。
          </>,
          <>
            <strong>分子系統学・古生物学</strong>が8種の進化の物語を明かす。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "eight-species", title: "現生クマ科 8 種" },
          { id: "tree", title: "系統樹で見るクマの分岐" },
          { id: "ancestor", title: "クマの祖先 — 「夜明けのクマ」ウルサブス" },
          { id: "panda", title: "ジャイアントパンダ — クマ科で最も古い枝" },
          { id: "polar", title: "ホッキョクグマ — ヒグマから数十万年前に分岐" },
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
          <strong>ツキノワグマ (Ursus thibetanus)</strong>: アジア大陸と日本 (本州・四国。九州では絶滅したとされる)
        </li>
        <li>
          <strong>マレーグマ (Helarctos malayanus)</strong>: 東南アジア。最小のクマ種
        </li>
        <li>
          <strong>ナマケグマ (Melursus ursinus)</strong>: インド・スリランカなど。アリ・シロアリ食に特化
        </li>
        <li>
          <strong>メガネグマ (Tremarctos ornatus)</strong>: 南米アンデス山脈
        </li>
        <li>
          <strong>ジャイアントパンダ (Ailuropoda melanoleuca)</strong>: 中国西部
        </li>
      </ol>
      <p>
        現在の分布はユーラシアと南北アメリカで (オーストラリア・南極、現在のアフリカにはいない)、
        森林・草原・極地・高山と多様な環境に適応しています。
      </p>

      <h2 id="tree">系統樹で見るクマの分岐</h2>
      <p>
        ミトコンドリア DNA の全配列を使った解析 (Krause ほか 2008) に基づくクマ科の主な分岐は次の通りです
        (年代は推定で、研究により幅があります)。
      </p>
      <ul>
        <li>
          <strong>約 1,800〜2,200 万年前</strong>: ジャイアントパンダ系統が他のクマ科から分岐
        </li>
        <li>
          <strong>約 1,200〜1,600 万年前</strong>: メガネグマ系統が分岐
        </li>
        <li>
          <strong>約 400〜550 万年前</strong>: 残る 6 種 (ナマケグマ・マレーグマ・ツキノワグマ・アメリカクロクマ・ヒグマ・ホッキョクグマ) の系統が短期間に次々と分岐
        </li>
        <li>
          <strong>数十万年前</strong>: ヒグマからホッキョクグマが分岐
        </li>
      </ul>
      <p>
        重要なのは、パンダとメガネグマ以外の 6 種が<strong>約 500 万年前前後</strong>に一気に多様化した
        比較的若いグループだということ。短期間に分かれたうえ種間の交雑もあったため、
        この 6 種の細かい関係は今も研究が続いています。
      </p>

      <h2 id="ancestor">最古のクマ — 4000 万年前のダウニング祖先</h2>
      <p>
        クマ科の起源は数千万年前にさかのぼるとされます。
        初期のクマの仲間として知られるのが、約 2,000 万年前のヨーロッパにいた
        <strong>ウルサブス (Ursavus)</strong>、英語で「夜明けのクマ (dawn bear)」と呼ばれる
        小型の肉食獣です。
      </p>
      <p>
        こうした祖先から体が大型化し、雑食へと幅を広げながら、各大陸で多様化していきました。
      </p>

      <h2 id="panda">ジャイアントパンダ — クマ科で最も古い枝</h2>
      <p>
        ジャイアントパンダがクマ科に分類されることに違和感を持つ人も多いでしょう。
        竹を主食とし、見た目も生態も他のクマと大きく異なります。
      </p>
      <p>
        分子系統解析と化石記録から、ジャイアントパンダは<strong>1,800 万年前に他のクマから分岐した
        最も古い枝</strong>であることが分かっています。竹食への特殊化は数百万年前から進んだと考えられています。
      </p>
      <ul>
        <li>
          手の親指の隣に「第六の指 (橈側種子骨)」を発達させ、竹を掴めるように
        </li>
        <li>
          消化器は他のクマと同じ肉食性配列のまま (短い腸)、竹をうまく消化できない
        </li>
        <li>
          一日の多くの時間 (10 時間以上とされる) を食べることに費やして栄養を補う
        </li>
        <li>
          冬眠しない (竹は年中入手可能のため)
        </li>
      </ul>

      <h2 id="polar">ホッキョクグマ — ヒグマから 25 万年で分岐</h2>
      <p>
        ホッキョクグマはクマ科 8 種で最も若い種で、数十万年前にヒグマから分岐しました
        (ゲノム解析では約 35〜50 万年前、約 60 万年前などの推定があります)。
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
          体格: クマ科最大級。大きな雄は 500kg を超えることもある
        </li>
        <li>
          冬眠: 出産期の雌のみが部分冬眠。雄は活動継続
        </li>
        <li>
          泳力: 9 日間で約 690km を泳ぎ続けた例が報告されている
        </li>
      </ul>
      <p>
        気候変動による海氷減少は、ホッキョクグマがアザラシを狩る足場を奪うため、
        個体数への影響が懸念されています (IUCN レッドリストでは危急種 VU)。
      </p>

      <h2 id="japan">日本のクマ 2 種の系統的位置</h2>
      <p>
        日本のクマ 2 種は、世界のクマ科の中で次の位置を占めます。
      </p>
      <ul>
        <li>
          <strong>ツキノワグマ (Ursus thibetanus)</strong>:
          アジア大陸を中心に分布する種。日本では本州・四国に分布し (九州では絶滅したとされる)、
          北海道にはいない。日本列島内でも地域個体群間で遺伝的差異がある
        </li>
        <li>
          <strong>ヒグマ (Ursus arctos)</strong>:
          世界で最も広く分布するクマ。北海道のエゾヒグマは亜種 (U. a. yesoensis) に分類される。
          ミトコンドリア DNA では北海道内に系統の異なる複数のグループがあることが知られている
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
        ヨーロッパに分布した大型のクマ。最終氷期のうち約 2 万数千年前に絶滅したとされます。
        洞窟で冬眠し、洞窟から骨が大量に見つかることから命名されました。
        最近の DNA 解析でヒグマと近縁であることが分かっています。
      </p>
      <h3>巨大短顔グマ (Arctotherium angustidens)</h3>
      <p>
        南米に分布した史上最大のクマ。推定体重 <strong>1,600〜1,750kg</strong>。
        化石の骨から推定された値で、現生のどのクマよりも大きかったと考えられています。
        数十万年前に絶滅。メガネグマと同じ短顔グマの仲間です。
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
            a: "アライグマ科 (Procyonidae) はクマ科とは別科ですが、同じ「クマ下目」に入る仲間です。クマ下目にはアザラシ・アシカなどの鰭脚類やイタチの仲間も含まれます。タヌキはイヌ科で、クマとは別のグループです。",
            aText: "アライグマ科 (Procyonidae) はクマ科とは別科ですが、同じ「クマ下目」に入る仲間です。クマ下目にはアザラシ・アシカなどの鰭脚類やイタチの仲間も含まれます。タヌキはイヌ科で、クマとは別のグループです。",
          },
          {
            q: "ヒグマとホッキョクグマの雑種は生存可能？",
            a: "カナダ北極圏の野生でもグリズリー・ポーラー雑種 (グロラー) が確認されており、雑種どうしの子 (2 代目) も見つかっています。ただし確認例はまだ少数です。",
            aText: "カナダ北極圏の野生でもグリズリー・ポーラー雑種 (グロラー) が確認されており、雑種どうしの子 (2 代目) も見つかっています。ただし確認例はまだ少数です。",
          },
          {
            q: "本州にもかつてヒグマがいた？",
            a: "はい。本州各地の更新世 (氷河期) の地層からヒグマの化石が見つかっており、かつては本州にもヒグマがいたことが分かっています。現在の本州にはいません。",
            aText: "はい。本州各地の更新世 (氷河期) の地層からヒグマの化石が見つかっており、かつては本州にもヒグマがいたことが分かっています。現在の本州にはいません。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-japan-evolution">日本のクマの進化史</Link> /{" "}
        <Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link> /{" "}
        <Link href="/articles/world-bears">世界のクマ事故事例</Link>
      </p>
    </ArticleShell>
  );
}
