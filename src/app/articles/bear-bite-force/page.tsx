import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints, References } from "@/components/ArticleCards";
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
        「クマは噛む力がとても強い」と思われがちですが、頭骨から噛む力を推定した研究では、
        ヒグマが犬歯で噛む力は<strong>約 751 N（ニュートン）</strong>と、ライオン（約 1,768 N）の半分弱でした
        （Wroe ら 2005）。体の大きさの割には、クマの噛む力はむしろ<strong>低め</strong>です。
        それでも人を大けがさせるには十分な力です。本記事では、クマの歯と顎のつくり、
        噛む力の数字の読み方、そして遭遇時に大切なことを整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            頭骨からの推定で、ヒグマの犬歯の噛む力は<strong>約 751 N</strong>、ライオンは<strong>約 1,768 N</strong>。
          </>,
          <>
            体格の割にクマの噛む力は<strong>低め</strong>。植物も多く食べる雑食向きの歯と顎。
          </>,
          <>
            それでも<strong>人を大けがさせるには十分</strong>。大切なのは襲われない行動。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "numbers", title: "数値で見るクマの噛む力" },
          { id: "dentition", title: "歯列 — 雑食性に合った歯" },
          { id: "muscles", title: "咬筋と側頭筋 — 噛む力を生む筋肉" },
          { id: "usage", title: "何をどう食べているか" },
          { id: "attack", title: "襲われたときのけがと身の守り方" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="numbers">数値で見るクマの噛む力</h2>
      <p>
        野生動物の噛む力は、生きた個体で直接測ることがほとんどできません。
        そのため研究では、<strong>頭骨の形（筋肉が付く面積やテコの長さ）から理論的な最大値を推定</strong>します。
        Wroe ら（2005）は、この方法で犬歯で噛んだときの力を推定し、体格補正した値
        （咬合力指数 BFQ、平均を 100 とする）と並べて示しました。一部を抜き出すと次のとおりです。
      </p>
      <ul>
        <li>ライオン: 約 1,768 N（BFQ 112）</li>
        <li>トラ: 約 1,525 N（BFQ 127）</li>
        <li>ブチハイエナ: 約 773 N（BFQ 117）</li>
        <li><strong>ヒグマ</strong>: 約 751 N（BFQ 78）</li>
        <li>オオカミ: 約 593 N（BFQ 136）</li>
        <li><strong>アメリカクロクマ</strong>: 約 541 N（BFQ 64）</li>
        <li><strong>ツキノワグマ</strong>: 約 312 N（BFQ 44）</li>
      </ul>
      <p>
        クマ 3 種の BFQ は 44〜78 で、ネコ科・オオカミ・ハイエナ（100 以上）より低い値でした。
        これらは 1 種あたり 1〜数個の頭骨からの推定値で、個体の大きさや年齢で変わります。
        また奥歯で噛む力とは別の値です。詳しくは{" "}
        <Link href="/articles/research-digest-017">研究ダイジェスト Vol.17</Link> をご覧ください。
      </p>
      <p>
        インターネット上には「ヒグマの咬合力は ○○ PSI」といった数字が出回っていますが、
        出典がはっきりしないものが多く、本記事では扱いません。
      </p>

      <h2 id="dentition">歯列 — 雑食性に合った歯</h2>
      <p>
        クマの永久歯は <strong>42 本</strong>で、歯式（片側の上/下）は
        切歯 3/3、犬歯 1/1、前臼歯 4/4、後臼歯 2/3 です。
      </p>
      <ul>
        <li>
          <strong>切歯 (前歯)</strong>: 葉や果実をかじり取る
        </li>
        <li>
          <strong>犬歯</strong>: 大きく発達している
        </li>
        <li>
          <strong>前臼歯</strong>: 小さい
        </li>
        <li>
          <strong>後臼歯 (大臼歯)</strong>: 表面が広く平たい。植物をすりつぶすのに向く
        </li>
      </ul>
      <p>
        環境省の資料でも、クマは「大きな犬歯を持つが、食べ物は植物質中心のため、
        大臼歯は食べ物をすりつぶすのに適した形状」とされています。
        肉を切り裂くことに特化したネコ科などと比べると、クマの奥歯は平たく、
        何でも食べる雑食向きのつくりです。
      </p>

      <h2 id="muscles">咬筋と側頭筋 — 噛む力を生む筋肉</h2>
      <p>
        噛む力を生み出すのは主に 2 つの筋肉です。
      </p>
      <ul>
        <li>
          <strong>側頭筋 (temporalis)</strong>: 頭の側面から下顎を引き上げる大きな筋肉。
          頭頂部の骨の隆起（矢状稜）は、この筋肉が付く場所です
        </li>
        <li>
          <strong>咬筋 (masseter)</strong>: 頬骨から下顎の角に走る筋肉
        </li>
      </ul>
      <p>
        頭骨からの噛む力の推定は、こうした筋肉の付く面積と、
        顎関節を支点にしたテコの長さをもとに計算されています。
      </p>

      <h2 id="usage">何をどう食べているか</h2>
      <p>
        日本のクマは植物質中心の雑食です。季節ごとに次のようなものを食べます（環境省）。
      </p>
      <ul>
        <li>春: 山菜や草本類。冬に衰弱死したシカの死体などを食べることもある</li>
        <li>夏: 草本類、アリなどの昆虫、イチゴ類・サクラ類の果実。シカの新生子を食べることもある</li>
        <li>秋: ブナ・ミズナラなどの堅果類、ヤマブドウ・サルナシなどの果実。サケ類が遡上する川ではサケも重要（特にヒグマ）</li>
      </ul>
      <p>
        動物を積極的に襲うことはまれですが、シカの死体などを利用することはあります。
        平たい奥歯と体格の割に控えめな噛む力は、こうした食べ物に合ったつくりと考えられます。
      </p>

      <h2 id="attack">襲われたときのけがと身の守り方</h2>
      <p>
        噛む力が体格の割に低いといっても、ツキノワグマの推定値（約 312 N）でも
        人を大けがさせるには十分です。クマによる人身被害では、頭や顔、腕などを
        噛まれたり爪で引っかかれたりするけがが起きています。
      </p>
      <p>
        大切なのは、噛む力の強さではなく、そもそも襲われないことと、襲われたときの身の守り方です。
      </p>
      <ul>
        <li>クマに出会ったら、走らない・背を向けない。クマを見ながらゆっくり離れる</li>
        <li>突進してきたらクマスプレーを使う。5〜10 m まで近づいたら、顔（目・鼻）に向けて 1〜2 秒ずつ噴射する</li>
        <li>
          驚かせた・子連れなどの防衛的な攻撃で接触が避けられないときは、
          うつ伏せになり両手で首の後ろを守る（リュックは背負ったまま）
        </li>
        <li>
          つけ回す・伏せても攻撃が続く・引きずる・テントに入ってくるなど、
          執拗な攻撃や捕食的な攻撃なら、顔や鼻を狙って反撃する
        </li>
      </ul>
      <p>
        詳しくは <Link href="/articles/encounter">クマに遭遇したらどうする</Link>、{" "}
        <Link href="/articles/playing-dead">死んだふりの正しい方法</Link>、{" "}
        <Link href="/articles/first-aid">襲われた直後の応急処置</Link> を参照してください。
      </p>

      <ArticleFaq
        items={[
          {
            q: "クマはライオンより噛む力が強い？",
            a: "頭骨からの推定（Wroe ら 2005）では、犬歯で噛む力はヒグマ約 751 N、ライオン約 1,768 N で、ヒグマはライオンの半分弱でした。体格補正した値（BFQ）でも、クマはネコ科やオオカミより低い値です。",
            aText: "頭骨からの推定（Wroe ら 2005）では、犬歯で噛む力はヒグマ約 751 N、ライオン約 1,768 N で、ヒグマはライオンの半分弱でした。体格補正した値（BFQ）でも、クマはネコ科やオオカミより低い値です。",
          },
          {
            q: "噛まれたらどうすればいい？",
            a: "接触が避けられない防衛的な攻撃なら、うつ伏せで両手で首の後ろを守る防御姿勢をとります。伏せても攻撃が続く、引きずられるなど執拗な攻撃なら、顔や鼻を狙って反撃します。助かったら傷が小さくても必ず医療機関を受診してください。",
            aText: "接触が避けられない防衛的な攻撃なら、うつ伏せで両手で首の後ろを守る防御姿勢をとります。伏せても攻撃が続く、引きずられるなど執拗な攻撃なら、顔や鼻を狙って反撃します。助かったら傷が小さくても必ず医療機関を受診してください。",
          },
          {
            q: "クマの年齢は歯でわかる？",
            a: "わかります。歯の根元のセメント質にできる年輪のような層を数えて年齢を推定する方法が、日本でも海外でも使われています。",
            aText: "わかります。歯の根元のセメント質にできる年輪のような層を数えて年齢を推定する方法が、日本でも海外でも使われています。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Bite club: comparative bite force in big biting mammals and the prediction of predatory behaviour in fossil taxa",
            citation: (
              <>
                Wroe, S., McHenry, C., &amp; Thomason, J. (2005).{" "}
                <em className="not-italic">Proceedings of the Royal Society B</em> 272(1563): 619–625.
              </>
            ),
            href: "https://doi.org/10.1098/rspb.2004.2986",
            linkText: "DOI link →",
          },
          {
            title: "クマの生態",
            citation: <>環境省 自然環境局</>,
            href: "https://www.env.go.jp/nature/choju/effort/effort12/kuma-habitat.pdf",
            linkText: "環境省（PDF）→",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/research-digest-017">研究ダイジェスト Vol.17 クマの噛む力</Link> /{" "}
        <Link href="/articles/bear-senses">クマの感覚 — 嗅覚・聴覚・視覚</Link> /{" "}
        <Link href="/articles/playing-dead">死んだふりの正しい方法</Link> /{" "}
        <Link href="/articles/first-aid">襲われた直後の応急処置</Link>
      </p>
    </ArticleShell>
  );
}
