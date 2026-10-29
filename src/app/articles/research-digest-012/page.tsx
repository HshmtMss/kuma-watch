import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-012")!;

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
        「クマで一番危ないのは子連れの母グマ」とよく言われます。
        北米のアメリカクロクマについて、人が亡くなった事故を約 110 年分集めて調べた研究は、
        少なくともこの種の死亡事故では、この見方が当てはまらなかったことを示しました。
      </p>
      <p>
        今号では、その論文が何を調べ、何が分かったのかを、論文の要旨に書かれている数字に沿って紹介します。
        あわせて、日本のツキノワグマにそのまま当てはめられない点も整理します。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Fatal attacks by American black bear on people: 1900–2009"
        citation={
          <>
            Herrero, S., Higgins, A., Cardoza, J. E., Hajduk, L. I., &amp; Smith, T. S. (2011).{" "}
            <em className="not-italic">The Journal of Wildlife Management</em> 75(3): 596–603.
          </>
        }
        href="https://doi.org/10.1002/jwmg.72"
        linkText="DOI: 10.1002/jwmg.72 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        tone="red"
        items={[
          <>
            1900〜2009 年の北米で、野生のアメリカクロクマによる死亡事故は <strong>59 件・63 人</strong>
          </>,
          <>
            著者らは死亡事故の <strong>88%（56 件中 49 件）</strong>で、クマが人を獲物として襲ったと判断
          </>,
          <>
            獲物として襲った事例のクマは <strong>92% が雄</strong>。子連れの母グマが最も危険とは言えなかった
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        この研究は、カナダと米国で 1900 年から 2009 年までに起きた、
        <strong>飼育されていないアメリカクロクマ（<em>Ursus americanus</em>）による死亡事故</strong>を集めて分析したものです。
        筆頭著者の Stephen Herrero は、北米でクマによる人身事故を長く研究してきた研究者です。
      </p>
      <p>
        著者らは、集めた事故それぞれについて、場所、被害にあった人の人数、
        人の食べ物やごみが関わっていたか、クマの性別や年齢、そしてクマがどんな動機で襲ったと考えられるか
        （獲物として襲ったのか、など）を整理しました。
        さらに、州や地域ごとのクマの推定数や、10 年ごとの人口と事故件数の関係も調べています。
      </p>
      <p>
        対象は「人が亡くなった事故」だけです。けがで済んだ事故は含まれていません。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>件数と地域</h3>
      <ul>
        <li>
          110 年間で、少なくとも <strong>63 人が 59 件の事故</strong>で亡くなっていました。
        </li>
        <li>
          事故は <strong>カナダとアラスカで 49 件、アラスカを除く米国本土 48 州で 14 件</strong>でした。
          カナダとアラスカの事故は本土の約 3.5 倍でしたが、クマの数は約 1.75 倍にとどまり、
          人とクマが接する機会もずっと少ない地域でした。
        </li>
        <li>
          地域ごとのクマの推定数が多いほど事故が多い、という弱い関係が見られました。
          ただし、クマが多いのに死亡事故がない地域もありました。
        </li>
      </ul>

      <h3>時代の変化</h3>
      <p>
        死亡事故の <strong>86%（63 のうち 54）は 1960〜2009 年</strong>に起きていました（年あたり約 1.08）。
        10 年ごとの事故の数は、米国とカナダの人口が増えるのと並行して増えていました。
      </p>

      <h3>どんな状況で起きたか</h3>
      <ul>
        <li>
          死亡事故の <strong>91%（54 件中 49 件）は、1〜2 人で行動していたとき</strong>に起きていました。
        </li>
        <li>
          状況が分かった 40 件のうち <strong>15 件（38%）</strong>では、人の食べ物やごみが、
          クマがその場所にいた理由になっていた可能性が高いと判断されました。
        </li>
      </ul>

      <h3>クマは獲物として襲っていた</h3>
      <p>
        動機を判断できた 56 件のうち <strong>49 件（88%）</strong>で、著者らはクマが人を獲物として扱っていた
        （捕食的な攻撃だった）と判断しました。
      </p>
      <p>
        獲物として襲った事例のうち、クマの性別が分かった 36 件では、
        <strong>33 件（92%）が雄</strong>（成獣 23 頭、若い個体 10 頭）でした。
        著者らはこれを、雄と雌の体や行動の違いを反映したものと考えています。
      </p>
      <p>
        そして、死亡事故の多くが捕食的で、1 頭のクマによるものだったことから、
        <strong>アメリカクロクマでは、子連れの雌が最も危険なクマとは言えない</strong>と結論づけています。
        論文は、人を獲物と見ているクマの振る舞いは訓練で見分けられるようになり、
        捕食を思いとどまらせる行動をとれる、とも述べています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>種が違います。</strong>アメリカクロクマは北米にすむクマで、日本の本州・四国にすむツキノワグマ
          （アジアクロクマ）とは別の種です。名前は似ていても、人との事故のパターンが同じとは限りません。
        </li>
        <li>
          <strong>死亡事故だけの分析です。</strong>けがで済んだ事故まで含めると、別の傾向になる可能性があります。
        </li>
        <li>
          <strong>件数が少ない分析です。</strong>110 年で 59 件で、動機や性別が分からない事例も含まれます。
          割合はそれぞれ「分かった事例」の中での数字です。
        </li>
        <li>
          <strong>動機は著者らの判断です。</strong>「獲物として襲った」かどうかは、残された記録をもとに著者らが判断したものです。
        </li>
        <li>
          <strong>環境が違います。</strong>事故の多くは人の少ないカナダ・アラスカで起きており、
          人里近くでクマと出会うことが多い日本の状況とは異なります。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この論文から日本のツキノワグマについて直接言えることは限られます。そのうえで、
        参考にできそうな点を控えめに挙げます。
      </p>
      <ul>
        <li>
          <strong>「子連れでなければ安心」とは考えない。</strong>少なくとも北米のアメリカクロクマでは、
          死亡事故の多くは子連れでない雄によるものでした。どんなクマでも距離をとることが基本です。
        </li>
        <li>
          <strong>少人数での行動に気をつける。</strong>死亡事故の 9 割は 1〜2 人のときに起きていました。
          山に入るときは、なるべく複数人で行動しましょう。
        </li>
        <li>
          <strong>食べ物やごみを外に置かない。</strong>キャンプや農作業の場では、食べ物やごみがクマを呼び寄せないよう管理しましょう。
        </li>
      </ul>
      <p>
        クマに出会ったときは、<strong>走らない・背を向けない・ゆっくり離れる</strong>が基本です。
        突進してきたら、クマスプレーを 5〜10m の距離で顔に向けて 1〜2 秒ずつ噴射します
        （環境省は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・有効成分 CRC 1〜2% 程度の製品を推奨しています）。
        驚いたクマの防衛的な攻撃で接触が避けられないときは、うつ伏せになって首の後ろを手で守る防御姿勢をとります。
        一方、執拗に続く攻撃や、獲物として狙われていると考えられる攻撃では、反撃することが勧められています。
        詳しくは{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
        と{" "}
        <Link href="/articles/bear-spray">クマスプレーの使い方</Link>
        をご覧ください。
      </p>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Fatal attacks by American black bear on people: 1900–2009（本号メイン）",
            citation: (
              <>
                Herrero, S., Higgins, A., Cardoza, J. E., Hajduk, L. I., &amp; Smith, T. S. (2011).{" "}
                <em className="not-italic">The Journal of Wildlife Management</em> 75(3): 596–603.
              </>
            ),
            href: "https://doi.org/10.1002/jwmg.72",
            linkText: "DOI: 10.1002/jwmg.72 →",
          },
        ]}
      />
    </ArticleShell>
  );
}
