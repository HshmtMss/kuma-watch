import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-028")!;

export const metadata: Metadata = {
  ...reviewRobots(meta.slug),
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
        クマやオオカミが家畜を襲ったとき、飼い主は実際にどれくらいのお金を失うのでしょうか。
        ルーマニアのカルパチア山脈で、夏の羊の放牧キャンプを 2 シーズン調べ、
        被害を「キャンプの収支」と並べて評価した論文を読みます。
      </p>
      <p>
        ルーマニアは、ヨーロッパで最も多くの大型肉食獣が家畜の近くで暮らす国です。
        著者らは、被害の大きさを「何頭やられたか」だけでなく、
        キャンプを運営する人の収入に対してどれほどの重さなのか、という形で示しました。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Economic aspects of large carnivore–livestock conflicts in Romania"
        citation={
          <>
            Mertens, A., &amp; Promberger, C. (2001).{" "}
            <em className="not-italic">Ursus</em> 12: 173–180.
          </>
        }
        href="https://www.bearbiology.org/download/economic-aspects-of-large-carnivore-livestock-conflicts-in-romania/"
        linkText="国際クマ学会（IBA）で全文 PDF →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ブラショフ県の羊キャンプ 36 か所（1998 年 19・1999 年 17）を夏に毎週訪ね、聞き取りで被害を記録
          </>,
          <>
            1 キャンプあたり平均 <strong>9.9 頭</strong>の羊が殺され、損失は平均 <strong>465 ドル</strong>。運営者の収入の <strong>74%</strong> に当たる
          </>,
          <>
            加害はオオカミ約 6 割・クマ約 4 割。公的な補償は<strong>ほとんど支払われていなかった</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "study", title: "研究の概要 — どこで・何を・どう調べたか" },
          { id: "damage", title: "分かったこと① 被害の大きさ" },
          { id: "economics", title: "分かったこと② お金に直すと" },
          { id: "dogs", title: "分かったこと③ 番犬を増やす費用との比較" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="study">研究の概要 — どこで・何を・どう調べたか</h2>
      <p>
        調査地はルーマニア中部、ブラショフ市を囲むカルパチア山脈の一角です。
        論文によると、ルーマニアのカルパチア山脈には当時、ヒグマ約 5,400 頭・オオカミ約 2,800 頭・
        オオヤマネコ約 1,800 頭がいるとされ、3 種がそろって健全に暮らす、ロシアを除くヨーロッパで唯一の地域でした。
      </p>
      <p>
        この地域では、夏のあいだ村の家畜をまとめて山の放牧キャンプに預けます。
        キャンプを取り仕切る「運営者（organizer）」が羊飼いを雇い、預かり料とチーズの売り上げで費用をまかないます。
        昼は羊飼いと番犬が群れにつき、夜は羊を木の囲いに入れるのが伝統的なやり方です。
      </p>
      <p>
        著者らは 1998 年と 1999 年の夏（6 月上旬〜9 月中旬）、ブラショフ市から半径 25 km の範囲にある
        70 のキャンプから無作為に選んだ <strong>1998 年 19 か所・1999 年 17 か所</strong>（範囲は 917 km²）を調べました。
        方法は次のとおりです。
      </p>
      <ul>
        <li>羊飼いに 4 種類の質問票（キャンプの基本情報・守り方・収支・肉食獣による被害）</li>
        <li>各キャンプを<strong>毎週訪問</strong>し、その週の被害を聞き取り</li>
        <li>収入と支出のデータは、村役場・羊飼い・地元の市場から集める</li>
      </ul>

      <h2 id="damage">分かったこと① 被害の大きさ</h2>
      <ul>
        <li>
          殺された羊は 1998 年に 192 頭、1999 年に 166 頭。群れの大きさで重みをつけた損失率は
          <strong>2.4%</strong>（1998 年）と <strong>1.8%</strong>（1999 年）
        </li>
        <li>1 キャンプあたり平均 <strong>9.9 頭</strong>。被害ゼロは 3 か所、損失 2% 未満が 20 か所、10% を超えたのは 3 か所</li>
        <li>殺された家畜の約 91% が羊（羊が最も多く飼われていたため）</li>
        <li>
          加害したのは主に<strong>オオカミ（59.9%）</strong>と<strong>ヒグマ（39.7%）</strong>。
          オオヤマネコによるものは羊 1 頭だけでした（論文冒頭の要旨では夏の家畜全体でオオカミ 63%・クマ 36% と書かれています）
        </li>
        <li>オオカミだけの被害が 14 か所、クマだけが 6 か所、両方が 13 か所。種類による殺された頭数の差は統計的に認められませんでした</li>
        <li>1 回の襲撃の 88% は 1〜3 頭で、平均 2.0 頭。10 頭がやられた例は 1 件だけでした</li>
        <li>昼夜が記録された 264 頭のうち 56% が夜間で、夜に多い傾向がありました</li>
      </ul>
      <p>
        羊飼いや番犬が少ない（羊 1 頭あたりで見て手薄な）キャンプほど殺された頭数が多い傾向は、
        特殊な 1 か所を除いたときに見られました。ただし、全データでは関係がはっきりしなかったと著者らは書いています。
      </p>

      <h2 id="economics">分かったこと② お金に直すと</h2>
      <p>
        著者らは羊 1 頭の市場価格を <strong>40 ドル</strong>（1999 年基準）としました。
      </p>
      <ul>
        <li>9.9 頭の損失は市場価格で 1 キャンプあたり <strong>387 ドル</strong></li>
        <li>殺された羊が乳を出さなくなる分の減収（チーズの売り上げ減）を加えると、平均 <strong>465 ドル</strong></li>
        <li>面積あたりでは 1 km² あたり 35 ドル</li>
      </ul>
      <p>
        これをキャンプの収支と比べると、重さがはっきりします。
        簡単なモデルでは、運営者の手元に残る利益は夏の 4.5 か月で平均 627 ドル（月 139 ドル）でした。
        羊とチーズの損失は、この<strong>運営者の収入の 74% を減らし</strong>、
        キャンプ全体の支出を <strong>10%</strong> 押し上げる大きさだったのです。
        被害を受けた頭数の割合は 2% 前後でも、利益の薄い小規模経営には重い負担だと分かります。
      </p>
      <p>
        一方、補償の仕組みはほとんど働いていませんでした。
        法律上は、適切に見張っていた場合などに保護動物による被害を払い戻す規定がありましたが、
        手続きが非常に複雑で、オオカミやクマによる被害への<strong>公的な補償はごくわずかしか支払われていません</strong>でした。
        民間の保険も小規模な飼い主には高すぎ、ほとんど使われていなかったと書かれています。
      </p>

      <h2 id="dogs">分かったこと③ 番犬を増やす費用との比較</h2>
      <p>
        著者らは、守りを厚くする費用もざっと見積もっています。
      </p>
      <ul>
        <li>
          番犬を今の 2 倍（平均 8.3 頭 → 16.6 頭）にすると、運営者の追加負担は約 <strong>210 ドル</strong>。
          これは失われた羊とチーズの平均額より少ない
        </li>
        <li>羊飼いを 1 人増やすと約 486 ドルかかり、今の平均被害額を上回る</li>
      </ul>
      <p>
        このため著者らは「番犬を増やすことは損失を減らす助けになりうるが、羊飼いを増やすのはおそらく割に合わない」
        と述べています。ただし、番犬を増やしたら何頭被害が減るかは分からず、あくまで推測だと断っています。
        結論として、大型肉食獣との軋轢を減らすには、小規模な飼い主を経済的に支える仕組みが大事だという仮説を示しました。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          被害の数字は<strong>羊飼いへの聞き取りだけ</strong>に基づいています。
          著者ら自身が「桁の大きさは正しいが、正確な数字とは限らない」と書いています
        </li>
        <li>36 キャンプ・2 夏という小さな調査で、1 つの県の夏の放牧だけが対象です</li>
        <li>加害の約 6 割はオオカミです。オオカミのいない日本とは、被害の構造がそもそも違います</li>
        <li>金額は 1990 年代末のルーマニアの物価に基づくもので、今の日本の金額には置き換えられません</li>
        <li>番犬を増やす効果は実際に試したものではなく、費用の比較による提案にとどまります</li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        日本の状況にそのまま当てはめることはできませんが、考え方として参考になる点があります。
      </p>
      <ul>
        <li>
          <strong>被害は「頭数」より「経営への重さ」で見る</strong> — 損失の割合が小さく見えても、
          利益の薄い小さな経営では収入の大きな部分が消えることがあります。
        </li>
        <li>
          <strong>対策の費用と被害額を並べてみる</strong> — この論文は、番犬を増やす費用が被害額より少ないかを比べました。
          日本でも電気柵などの対策を考えるとき、同じ比べ方ができます（{" "}
          <Link href="/articles/electric-fence">電気柵の張り方</Link>）。
        </li>
        <li>
          <strong>補償は「制度がある」だけでは足りない</strong> — ルーマニアでは規定があっても手続きが複雑で、
          ほとんど使われていませんでした。日本の制度については{" "}
          <Link href="/articles/bear-compensation">クマ被害の補償・賠償ガイド</Link>{" "}
          と <Link href="/articles/bear-agriculture">クマと農業</Link> をご覧ください。
        </li>
      </ul>
      <p>
        なお、畑や牧場でクマに出会ったときは、走らず、背を向けず、ゆっくり離れてください。
        突進されたらクマスプレー（環境省の目安：噴射距離 7.5 m 程度以上・噴射時間 6 秒程度以上）を、
        5〜10 m で顔に向けて 1〜2 秒ずつ使います。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Economic aspects of large carnivore–livestock conflicts in Romania（本号メイン）",
            citation: (
              <>
                Mertens, A., &amp; Promberger, C. (2001).{" "}
                <em className="not-italic">Ursus</em> 12: 173–180.
              </>
            ),
            href: "https://www.bearbiology.org/download/economic-aspects-of-large-carnivore-livestock-conflicts-in-romania/",
            linkText: "全文 PDF（bearbiology.org）→",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.29">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
