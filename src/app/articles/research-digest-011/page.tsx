import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-011")!;

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
        クマの仲間の多くは、交尾をする季節と子を産む季節がはっきり決まっています。
        なぜそのような「季節で区切られた繁殖」が生まれたのか。
        今号では、クマ科 8 種の繁殖のしかたと系統（進化の道すじ）を突き合わせた総説を読みます。
      </p>
      <p>
        論文が投げかけるのは、「環境が大きく変わる時代に、クマの繁殖はどう影響を受けうるのか」という問いです。
        その答えを考える土台として、繁殖の季節性がどんな環境の中で形づくられてきたのかを整理しています。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Evolution of reproductive seasonality in bears"
        citation={
          <>
            Spady, T. J., Lindburg, D. G., &amp; Durrant, B. S. (2007).{" "}
            <em className="not-italic">Mammal Review</em> 37(1): 21–53.
          </>
        }
        href="https://doi.org/10.1111/j.1365-2907.2007.00096.x"
        linkText="DOI: 10.1111/j.1365-2907.2007.00096.x →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            現存するクマ科 8 種のうち <strong>7 種</strong>は、交尾の季節と出産の季節がはっきり分かれている
          </>,
          <>
            古い系統の種は、気候の季節差が強まった<strong>鮮新世</strong>に「条件しだいで季節的になる」繁殖を、
            残りの種は<strong>更新世の氷期</strong>に「必ず季節的な」繁殖を身につけたと論じている
          </>,
          <>
            季節的な繁殖は厳しい環境への適応と考えられ、いまの環境変化が繁殖にどう響くかを考える手がかりになる
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "なぜこの研究が大事か" },
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと" },
          { id: "diapause", title: "補足：着床遅延とは" },
          { id: "limits", title: "限界と注意" },
          { id: "japan", title: "日本で暮らす私たちへ" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">なぜこの研究が大事か</h2>
      <p>
        論文の冒頭によると、クマ科 8 種のうち 6 種は現在絶滅のおそれがあり、残る 2 種も将来の存続に大きなリスクを抱えています。
        大きな脅威の一つとして、著者らは地球温暖化・化学汚染物質・森林伐採といった、人間による環境の改変を挙げています。
      </p>
      <p>
        環境の変化がクマの繁殖にどう影響するかを考えるには、まず「クマの繁殖が、どのような環境のもとで今のかたちになったのか」を知る必要があります。
        この総説は、その下地をつくることを目的にしています。
      </p>

      <h2 id="overview">研究の概要</h2>
      <p>
        本論文は、新しい野外調査や実験の報告ではなく、これまでの研究をまとめた<strong>総説（レビュー）</strong>です。
        著者らは、クマ科の繁殖生物学（交尾や出産の時期など）と系統（どの種がどの順に分かれてきたか）を照らし合わせ、
        繁殖の季節性がどのように進化してきたかを考察しています。
      </p>

      <h2 id="findings">分かったこと</h2>
      <h3>8 種中 7 種に、はっきりした繁殖の季節がある</h3>
      <p>
        現存する 8 種のうち 7 種は、交尾の季節と出産の季節が明確に決まっています。
        著者らはこの季節性を、厳しい環境条件への適応である可能性が高いと位置づけています。
      </p>
      <h3>季節性は 2 つの段階で現れた</h3>
      <ul>
        <li>
          <strong>古い系統の種</strong>：気候の季節差がしだいに強まった<strong>鮮新世</strong>に、
          状況に応じて季節的に繁殖する「条件的（facultative）な季節性」を進化させた。
        </li>
        <li>
          <strong>残りの種</strong>：<strong>更新世の氷期</strong>に、季節によって食べ物が厳しく制限される条件のもとで現れ、
          「絶対的（obligate）な季節性」が生まれて現在まで続いている。
        </li>
      </ul>
      <h3>環境変化を考えるための文脈</h3>
      <p>
        著者らは、クマの季節的な繁殖が地球規模の気候変化に応じて進化してきたことを知ることが、
        現在の環境変化がクマの繁殖に及ぼす影響を理解する文脈になる、とまとめています。
      </p>

      <h2 id="diapause">補足：着床遅延とは</h2>
      <p>
        クマの繁殖の話でよく出てくるのが<strong>着床遅延</strong>（胚休眠ともいいます）です。
        ここは本論文の抄録ではなく、別の総説（Renfree &amp; Shaw 2000）に基づく一般的な説明です。
      </p>
      <p>
        着床遅延とは、受精した胚が<strong>胚盤胞</strong>の段階でいわば一時停止の状態に入る現象です。
        細胞分裂を止めるか、ごくゆっくりとしか育たない期間があります。
        この仕組みは哺乳類の中で何度も別々に進化し、7 つの目のおよそ 100 種で知られています。
        何が引き金になるかは種によって大きく異なり、生態的には「交尾と出産を、その種にとって都合のよい時期に合わせる」働きがあると説明されています。
      </p>
      <p>
        クマでも着床遅延が起こることは、たとえば北海道のヒグマで着床遅延期の黄体を調べた研究（Tsubota ほか 1994、3 頭）などで扱われています。
      </p>

      <h2 id="limits">限界と注意</h2>
      <ul>
        <li>本論文は総説であり、進化のシナリオは系統と繁殖の特徴から推定したものです。</li>
        <li>
          今回は抄録で内容を確認しました。8 種のうちどの種が季節性をもたないのか、どの種が「条件的」「絶対的」に当たるのかといった細部は、
          本文で確認できなかったため、この記事では書いていません。
        </li>
        <li>
          子グマの出生時の体重や成長の速さ、母グマの体脂肪と妊娠の関係などは、本論文の抄録には含まれていません。
          旧版の記事にあったこれらの数字は削除しました。
        </li>
        <li>日本のツキノワグマやヒグマにそのまま当てはまる具体的な数字を、本論文から導くことはできません。</li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへ</h2>
      <p>
        この論文から言えるのは、クマの繁殖が季節と食べ物の条件に深く結びついた形で進化してきた、ということです。
        食べ物の量や気候が変わると、繁殖にも影響が出うる。その視点は、地域のクマの動きを長い目で見るときの参考になります。
      </p>
      <p>
        なお、日本では2024 年 4 月に、クマ類（四国の個体群を除く）が「指定管理鳥獣」に追加されました。
      </p>
      <p>
        出会ってしまったときの行動は、繁殖の季節に関係なく同じです。
        走らない・背を向けない・ゆっくり離れる。突進されたらクマスプレーを使い（5〜10m で顔に向けて 1〜2 秒ずつ）、
        防衛的な攻撃で接触が避けられなければ、うつ伏せになって首の後ろを守ります。
        詳しくは <Link href="/learn/safety">クマ対策の基本</Link> をご覧ください。
      </p>

      <p className="text-sm text-stone-500">
        2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Evolution of reproductive seasonality in bears（本号メイン）",
            citation: (
              <>
                Spady, T. J., Lindburg, D. G., &amp; Durrant, B. S. (2007).{" "}
                <em className="not-italic">Mammal Review</em> 37(1): 21–53.
              </>
            ),
            href: "https://doi.org/10.1111/j.1365-2907.2007.00096.x",
            linkText: "DOI: 10.1111/j.1365-2907.2007.00096.x →",
          },
          {
            title: "Diapause",
            citation: (
              <>
                Renfree, M. B., &amp; Shaw, G. (2000).{" "}
                <em className="not-italic">Annual Review of Physiology</em> 62: 353–375.
              </>
            ),
            href: "https://doi.org/10.1146/annurev.physiol.62.1.353",
            linkText: "DOI: 10.1146/annurev.physiol.62.1.353 →",
          },
          {
            title:
              "Immunolocalization of steroidogenic enzymes P450scc, 3βHSD, P450c17 and P450arom in the corpus luteum of the Hokkaido brown bear (Ursus arctos yesoensis) in relation to delayed implantation",
            citation: (
              <>
                Tsubota, T., Nitta, H., Osawa, Y., Mason, J. I., Kita, I., Tiba, T., &amp; Bahr, J. M. (1994).{" "}
                <em className="not-italic">Journal of Reproduction and Fertility</em> 101(3): 557–561.
              </>
            ),
            href: "https://doi.org/10.1530/jrf.0.1010557",
            linkText: "DOI: 10.1530/jrf.0.1010557 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
