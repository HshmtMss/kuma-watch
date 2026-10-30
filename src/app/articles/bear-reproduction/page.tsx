import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints, References } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-reproduction")!;

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
        クマは哺乳類の中でもユニークな繁殖のしかたをします。
        交尾は <strong>初夏（6〜7 月ごろ）</strong>、ところが出産は <strong>翌年 1〜2 月</strong>。
        受精卵はすぐには子宮に着床せず、秋の終わりまで発育を止めて「待機」します。
        これを<strong>「着床遅延 (delayed implantation)」</strong>といいます。
        そして出産は冬眠の真っ最中、巣穴の中で行われます。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            交尾は<strong>初夏（6〜7月ごろ）</strong>、出産は<strong>翌年1〜2月の冬眠中</strong>。
          </>,
          <>
            受精卵は<strong>11月ごろまで着床しない「着床遅延」</strong>。秋の栄養状態が妊娠に影響すると考えられている。
          </>,
          <>
            子グマは<strong>とても小さく生まれ</strong>、ツキノワグマは約 1 年半、母グマと過ごす。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "cycle", title: "クマの繁殖サイクル" },
          { id: "delayed", title: "着床遅延 — 発育を止めて待つ受精卵" },
          { id: "birth", title: "冬眠中の出産" },
          { id: "newborn", title: "とても小さく生まれる子グマ" },
          { id: "mother-cub", title: "母子関係と子別れ" },
          { id: "vet-implication", title: "保全・管理からの含意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="cycle">クマの繁殖サイクル</h2>
      <p>
        環境省の資料をもとに、ツキノワグマ・ヒグマの繁殖の流れをまとめると次のとおりです。
      </p>
      <ul>
        <li><strong>6〜7 月ごろ</strong>: 繁殖期（交尾期）。オスとメスが一時的に行動を共にすることがある。資料によっては 5〜8 月と幅を持たせて書かれている</li>
        <li><strong>夏〜秋</strong>: 受精卵は発育を止めたまま子宮内にとどまる（着床遅延）</li>
        <li><strong>11 月ごろ</strong>: 受精卵が着床し、胎児の発育が始まる。11 月下旬〜12 月ごろに冬眠に入る</li>
        <li><strong>1 月下旬〜2 月上旬ごろ</strong>: 冬眠中の巣穴で出産。ツキノワグマの平均産子数は 1.86 頭という報告がある</li>
        <li><strong>3〜5 月</strong>: 冬眠明け。出産したメスは冬眠明けが遅い傾向がある</li>
        <li><strong>その後</strong>: ツキノワグマは約 1 年半、ヒグマは 1〜2 年半、子育てをする</li>
      </ul>
      <p>
        繁殖ができるようになる年齢は、ツキノワグマでオス 2〜3 歳・メス 4 歳程度、
        ヒグマでオス 2〜4 歳・メス 3〜4 歳とされています（環境省）。
      </p>

      <h2 id="delayed">着床遅延 — 発育を止めて待つ受精卵</h2>
      <p>
        <strong>着床遅延 (delayed implantation / embryonic diapause)</strong> は、
        受精卵が<strong>胚盤胞 (blastocyst)</strong> の段階で発育を止め、
        しばらく子宮に着床しないまま過ごす現象です。
        クマのほか、イタチ科やアザラシの仲間、カンガルーの仲間などでも知られています。
      </p>
      <p>
        クマでは、秋に十分な栄養（脂肪）を蓄えられたかどうかが、その冬の出産に影響すると考えられています。
        栄養状態が悪ければ妊娠が成立しないことがある、という考え方です。
        飢えた状態で出産しても子を育てられないため、母体を守る仕組みとして働いている可能性があります。
        くわしい仕組みはまだ研究途中です。着床遅延が進化した背景については{" "}
        <Link href="/articles/research-digest-011">研究ダイジェスト Vol.11</Link> も参照してください。
      </p>

      <h2 id="birth">冬眠中の出産</h2>
      <p>
        クマの出産は<strong>冬眠中、巣穴の中で行われる</strong>のが特徴です。
        母グマは出産後も巣穴にとどまり、食べず飲まずのまま子グマに授乳しながら春を待ちます。
      </p>
      <p>
        このタイミングには次のような利点があると考えられています。
      </p>
      <ul>
        <li>巣穴は外敵から守られ、安全に出産・子育てができる</li>
        <li>春に巣穴を出るころには、子グマが母グマについて歩ける大きさに育っている</li>
      </ul>
      <p>
        クマの冬眠中の体温は、小型の冬眠動物のように大きくは下がりません。
        アメリカクロクマの研究では 30〜36℃ の範囲に保たれていました
        （<Link href="/articles/research-digest-008">研究ダイジェスト Vol.8</Link>）。
        体温が比較的高く保たれることが、冬眠中の出産・授乳を可能にしていると考えられます。
      </p>

      <h2 id="newborn">とても小さく生まれる子グマ</h2>
      <p>
        生まれたばかりの子グマは数百グラムほどしかなく、母グマの体の大きさと比べると、
        哺乳類の中でも極端に小さく生まれます。目は閉じていて、毛もまだ短く、母グマに頼って育ちます。
      </p>
      <p>
        子グマは巣穴の中で母乳を飲んで育ち、春に巣穴を出るころには何倍もの大きさになっています。
        たとえば秋田県北秋田市のくまくま園で 1 月下旬に生まれたツキノワグマの双子は、春の公開時に 2.8〜3.2 kg に育っていました。
        母グマは冬眠中に食べずに授乳を続けるため、春には大きく体重を落としています。
      </p>

      <h2 id="mother-cub">母子関係と子別れ</h2>
      <p>
        子グマは母グマと一緒に過ごすあいだに、食べ物の探し方などを身につけると考えられています。
      </p>
      <ul>
        <li>母グマは子を強く守り、子の近くに人や他のクマが現れると攻撃的になることがある</li>
        <li>子別れは繁殖期（初夏）と同じころに起きる</li>
        <li>
          親から離れた若いオスは、生まれた場所から離れて移動する（分散）。
          これが春から夏に人の生活圏への出没が増える要因になる（環境省）
        </li>
      </ul>
      <p>
        子グマを見かけたら、近くに母グマがいる可能性が高いと考え、すぐにその場を離れてください。詳しくは{" "}
        <Link href="/articles/cub-handling">子グマを見たら何をすべきか</Link> と{" "}
        <Link href="/articles/spring">春のクマ対策 — 母グマの保護本能</Link> も参照。
      </p>

      <h2 id="vet-implication">保全・管理からの含意</h2>
      <ul>
        <li>
          <strong>栄養と繁殖</strong>: 秋の栄養状態が妊娠に影響すると考えられるため、
          ブナ・ミズナラなどの堅果類の豊凶は、出没だけでなく翌年の出産にも関わる可能性がある
        </li>
        <li>
          <strong>個体管理</strong>: 繁殖するメスや母子グマの捕獲は、次の世代の数に直接影響する。
          地域個体群の保全では、捕獲の内訳（性別・年齢）を記録することが大切
        </li>
        <li>
          <strong>飼育・救護</strong>: 動物園や救護施設で妊娠を判断するときにも、着床遅延の知識が必要になる
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマは何頭子供を産む？",
            a: "1〜3 頭ほどです。ツキノワグマの平均産子数は 1.86 頭という報告があります（環境省 中国四国地方環境事務所）。",
            aText: "1〜3 頭ほどです。ツキノワグマの平均産子数は 1.86 頭という報告があります（環境省 中国四国地方環境事務所）。",
          },
          {
            q: "なぜクマは冬眠中に出産するの？",
            a: "巣穴の中が安全なこと、春に巣穴を出るころに子グマが歩ける大きさに育っていることなどが利点と考えられています。",
            aText: "巣穴の中が安全なこと、春に巣穴を出るころに子グマが歩ける大きさに育っていることなどが利点と考えられています。",
          },
          {
            q: "母グマが死んだら子グマはどうなる？",
            a: "母乳に頼っている時期の子グマは、単独で生き延びるのは難しいと考えられます。子グマだけを見かけても、近くに母グマがいる可能性があるので、近づいたり保護しようとしたりせず、市町村に連絡してください。",
            aText: "母乳に頼っている時期の子グマは、単独で生き延びるのは難しいと考えられます。子グマだけを見かけても、近くに母グマがいる可能性があるので、近づいたり保護しようとしたりせず、市町村に連絡してください。",
          },
          {
            q: "オスのクマは子育てに関わる？",
            a: "関わりません。子育ては母グマだけが行います。ヒグマなどではオスが子グマを殺す「子殺し」が知られており、母グマはオスを避けるように行動すると考えられています。",
            aText: "関わりません。子育ては母グマだけが行います。ヒグマなどではオスが子グマを殺す「子殺し」が知られており、母グマはオスを避けるように行動すると考えられています。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "クマの生態",
            citation: <>環境省 自然環境局</>,
            href: "https://www.env.go.jp/nature/choju/effort/effort12/kuma-habitat.pdf",
            linkText: "環境省（PDF）→",
          },
          {
            title: "ツキノワグマ四国個体群の保護対策",
            citation: <>環境省 中国四国地方環境事務所</>,
            href: "https://chushikoku.env.go.jp/content/900119255.pdf",
            linkText: "環境省（PDF）→",
          },
          {
            title: "くまくま園 ツキノワグマの双子の公開",
            citation: <>北秋田市</>,
            href: "https://www.city.kitaakita.akita.jp/archive/contents-593",
            linkText: "北秋田市 →",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/cub-handling">子グマを見たら何をすべきか</Link> /{" "}
        <Link href="/articles/spring">春のクマ対策</Link>
      </p>
    </ArticleShell>
  );
}
