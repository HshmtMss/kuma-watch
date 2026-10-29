import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-002")!;

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
        人の暮らしのそばで食べ物が手に入るようになると、クマの暮らし方はどれくらい変わるのでしょうか。
        しかも、その変化はどれくらいの速さで起きるのでしょうか。
      </p>
      <p>
        今号は、米国西部のアメリカクロクマで、街の近くに住むクマと森に住むクマを比べ、
        さらに同じ地域の 10〜15 年前のデータとも見比べた研究を読みます。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Rapid ecological and behavioural changes in carnivores: the responses of black bears (Ursus americanus) to altered food"
        citation={
          <>
            Beckmann, J. P., &amp; Berger, J. (2003).{" "}
            <em className="not-italic">Journal of Zoology</em> 261(2): 207–212.
          </>
        }
        href="https://doi.org/10.1017/S0952836903004126"
        linkText="DOI: 10.1017/S0952836903004126 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            街の近くのクマは、森のクマより <strong>1 日に活動する時間が短かった</strong>（8.5 時間 対 13.3 時間）
          </>,
          <>
            街の近くのクマは <strong>活動が夜に寄り</strong>、<strong>冬ごもりに入るのが遅く、期間も短かった</strong>
          </>,
          <>
            著者らは、人由来の食べ物（ごみ）があると <strong>クマの生態は思っていたより短い期間で変わりうる</strong>と述べています
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "method", title: "どこで・何を・どう調べたか" },
          { id: "results", title: "分かったこと" },
          { id: "followup", title: "同じ地域のその後の研究" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="method">どこで・何を・どう調べたか</h2>
      <p>
        調査地は米国西部、<strong>シエラネバダ山脈とグレートベースン砂漠の境目</strong>にあたる地域です。
        この地域では人口が増え、住宅地が昔からクマのいた場所へ広がってきました。
        住宅地にはごみなど、クマにとって新しい食べ物があります。
      </p>
      <p>
        著者らはこれを「自然の実験」と見立て、次の 2 つのグループのアメリカクロクマを比べました。
      </p>
      <ul>
        <li>
          <strong>街と森の境目（urban–wildland interface）に住むクマ</strong>: 人由来の食べ物にふれられるグループ
        </li>
        <li>
          <strong>森（wildland）に住むクマ</strong>: 比較の基準となるグループ
        </li>
      </ul>
      <p>
        さらに時間の比較として、<strong>同じ個体群の 10〜15 年前のデータ</strong>（まだ人の住宅地が広がっていなかった頃のもの）とも見比べています。
        調べた項目は、1 日の時間の使い方、活動する時間帯、冬ごもり（巣穴に入る・出る時期）です。
      </p>

      <h2 id="results">分かったこと</h2>
      <p>論文の要旨には、森のクマと比べた街の近くのクマの特徴として、次の 3 点が示されています。</p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>1 日に活動する時間が短い</strong> — 平均 <strong>8.5 時間</strong>。森のクマは <strong>13.3 時間</strong>でした。
          ごみのようにまとまった食べ物があると、食べ物を探して歩き回る時間が少なくて済むと考えられます。
        </li>
        <li>
          <strong>活動が夜の時間帯に移っている</strong> — 統計的にはっきりした差がありました。
        </li>
        <li>
          <strong>冬ごもりに入るのが遅く、巣穴にいる日数が短い</strong>。
        </li>
      </ol>
      <p>
        著者らは、こうした変化をほかの肉食動物の例とも比べたうえで、
        <strong>人の活動による環境の変化にともなう肉食動物の生態の変化は、それまで考えられていたより短い期間で起こりうる</strong>
        と結論づけています。
      </p>
      <p>
        つまりこの研究が示したのは「クマが別の動物になった」ということではなく、
        <strong>同じ種類のクマでも、食べ物の条件が変わると、時間の使い方や冬ごもりがすぐに変わりうる</strong>ということです。
      </p>

      <h2 id="followup">同じ地域のその後の研究</h2>
      <p>
        ベックマンらは、その後もこの地域（タホ湖周辺を含むシエラネバダ山脈北部）で調査を続けました。
        2008 年の論文（Beckmann &amp; Lackey 2008）では、1997〜2006 年に、街に住むメス 12 頭と森に住むメス 10 頭を追跡しています。
      </p>
      <p>
        その結果、街のメスは年齢あたりの繁殖成績が森のメスより高い一方で、<strong>年齢あたりの死亡率も高く</strong>、
        街のクマの集団は数が減っていく「吸い込み（シンク）」の状態にあると推定されました。
        著者らは、タホ湖周辺の街のクマが、空いた森の生息地を埋め直す供給源にはなれないと述べています。
      </p>
      <p>
        食べ物が多い場所は、クマにとって一見「得」に見えます。しかし人の近くで暮らすことは、
        クマ自身にとっても危険の多い暮らし方である、という見方を補う結果です。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          対象は <strong>北米のアメリカクロクマ</strong>で、日本のツキノワグマやヒグマとは種も環境も違います。
          同じことが日本でそのまま起きているとは言えません。
        </li>
        <li>
          調べたのは <strong>米国西部の 1 つの地域</strong>です。ごみの出し方や住宅地の形、冬の厳しさなどが違えば、結果も変わりえます。
        </li>
        <li>
          本記事は論文の要旨と、同じ研究チームの続報の要旨にもとづいています。調べた頭数や詳しい数字の多くは、ここでは紹介していません。
        </li>
        <li>
          「街の近くに住むこと」と「ごみを食べること」以外の違い（地形や人の多さなど）も結果に影響している可能性があります。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この研究から日本にそのまま数字を当てはめることはできません。それでも、次のことは参考になります。
      </p>
      <ul>
        <li>
          <strong>人由来の食べ物は、クマの暮らし方を変えうる</strong> — 生ごみ、収穫しない果樹、屋外に置いたペットフードなどは、
          クマを人の近くに引き寄せる原因になります。片付けておくことが、人にとってもクマにとっても事故を減らす基本です
          （{" "}
          <Link href="/articles/urban-bear">市街地に出るクマと住民の備え</Link>{" "}
          も参考にしてください）。
        </li>
        <li>
          <strong>人の少ない時間帯にも注意する</strong> — この研究では街の近くのクマの活動が夜に寄っていました。
          クマが出ている地域では、早朝・夕方・夜の外出時に周りをよく確かめましょう。
        </li>
        <li>
          <strong>見かけたら知らせる</strong> — 人の近くで食べ物を覚えたクマは、同じ場所に来る可能性があります。
          見かけたら自治体や警察に連絡してください（{" "}
          <Link href="/articles/bear-report">通報のしかた</Link>{" "}）。
        </li>
      </ul>
      <p>
        もしクマに出会ったら、<strong>走らない・背を向けない・ゆっくり離れる</strong>が基本です。
        突進されたらクマスプレー（環境省が示す目安は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・有効成分 CRC 1〜2% 程度）を、
        5〜10m の距離で顔に向けて 1〜2 秒ずつ噴射します。
        防衛的な攻撃で接触が避けられないときは、うつ伏せになって首の後ろを両手で守る防御姿勢をとります。
        執拗に襲ってくる、捕食しようとするような攻撃のときは反撃します。
      </p>
      <p>
        なお日本では 2024 年 4 月に、クマ類（四国の個体群を除く）が「指定管理鳥獣」に追加されました（{" "}
        <Link href="/articles/designated-management-2026">解説記事</Link>{" "}）。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Rapid ecological and behavioural changes in carnivores: the responses of black bears (Ursus americanus) to altered food（本号メイン）",
            citation: (
              <>
                Beckmann, J. P., &amp; Berger, J. (2003).{" "}
                <em className="not-italic">Journal of Zoology</em> 261(2): 207–212.
              </>
            ),
            href: "https://doi.org/10.1017/S0952836903004126",
            linkText: "DOI: 10.1017/S0952836903004126 →",
          },
          {
            title: "Carnivores, urban landscapes, and longitudinal studies: a case history of black bears",
            citation: (
              <>
                Beckmann, J. P., &amp; Lackey, C. W. (2008).{" "}
                <em className="not-italic">Human–Wildlife Conflicts</em> 2(2): 168–174.
              </>
            ),
            href: "https://digitalcommons.usu.edu/hwi/vol2/iss2/10",
            linkText: "論文ページ（Utah State University） →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
