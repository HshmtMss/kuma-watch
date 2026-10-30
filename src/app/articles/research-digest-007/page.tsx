import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-007")!;

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
        畑や養蜂場にクマが来るようになったとき、まず候補に挙がるのが電気柵です。
        では実際の畑で、電気柵はどのくらいクマを止められるのでしょうか。
        今号は、1990 年代後半に長野県で行われた現場試験の論文を読みます。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Using electric fences to reduce Asiatic black bear depredation in Nagano prefecture, central Japan"
        citation={
          <>
            Huygens, O. C., &amp; Hayashi, H. (1999).{" "}
            <em className="not-italic">Wildlife Society Bulletin</em> 27: 959–964.
          </>
        }
        href="https://conservationevidencejournal.com/individual-study/7621"
        linkText="Conservation Evidence の要約を見る →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            長野県で 1997〜1998 年、クマの被害が出ていた <strong>スイートコーン畑 24 か所と養蜂場 2 か所</strong>を電気柵で囲った
          </>,
          <>
            電気柵を<strong>通り抜けたクマは 1 頭もいなかった</strong>。柵に触れて引き返したクマや、下を掘ろうとしてあきらめたクマが記録された
          </>,
          <>
            一方で、柵から <strong>13〜120 m 離れた柵のない畑</strong>では被害が 8 件起きた
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要 — どこで・何を・どう調べたか" },
          { id: "results", title: "分かったこと" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要 — どこで・何を・どう調べたか</h2>
      <p>
        著者は、長野県でツキノワグマを研究していた Huygens 氏と Hayashi（林）氏です。
        試験は 1997〜1998 年に長野県内で行われました。
      </p>
      <ul>
        <li>
          <strong>対象</strong>: 林に接し、最近クマの被害を受けていた
          <strong>スイートコーン畑 24 か所</strong>と<strong>養蜂場 2 か所</strong>
        </li>
        <li>
          <strong>方法</strong>: それぞれを市販の電気柵で囲い、柵のまわりでのクマの行動と被害を記録
        </li>
        <li>
          <strong>設置期間</strong>: 場所によって 2〜65 夜
        </li>
        <li>
          <strong>柵のつくり</strong>: 電線 4 本を <strong>24 cm 間隔</strong>で張り、
          さらに柵の <strong>30 cm 外側・地上 30 cm</strong> の高さにもう 1 本の電線を加えた
        </li>
      </ul>
      <p>
        実験用の囲いではなく、実際に被害が出ていた畑で試したところに、この研究の価値があります。
      </p>

      <h2 id="results">分かったこと</h2>
      <ul>
        <li>
          電気柵を<strong>通り抜けたクマは 1 頭もいませんでした</strong>。
        </li>
        <li>
          柵の近くでクマが確認されたのは <strong>23 回</strong>。
          そのうち <strong>3 頭</strong>は柵に触れたあと立ち去り、
          <strong>1 頭</strong>は柵の下を掘って入ろうとしましたが、入れませんでした。
        </li>
        <li>
          一方、柵から <strong>13〜120 m</strong> 離れた、柵で囲っていない畑では
          <strong>8 件</strong>の被害がありました。
        </li>
      </ul>
      <p>
        つまり、囲った場所は守れたものの、クマはその地域から消えたわけではなく、
        近くの守られていない畑に向かうことがあった、ということです。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>規模が小さい</strong>: 畑 24 か所と養蜂場 2 か所、2 年間の試験です。
          設置期間も 2〜65 夜と短い場所を含みます。何年も使い続けたときの効果は、この論文からは分かりません。
        </li>
        <li>
          <strong>作物が限られる</strong>: 対象はスイートコーンと養蜂場です。
          果樹園など、ほかの作物や地形にそのまま当てはまるとは限りません。
        </li>
        <li>
          <strong>電圧や費用は分からない</strong>: 今回確認できた範囲では、柵の電圧や設置費用は示されていません。
          「何ボルトあれば十分か」「いくらかかるか」をこの論文から言うことはできません。
        </li>
        <li>
          <strong>近くの畑への影響</strong>: 柵のない近くの畑で被害が出たことから、
          1 か所だけを囲うと被害が隣に移る可能性もあります。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        この試験からは、<strong>きちんと張った電気柵は、囲った畑や養蜂場をクマから守るのに役立つ</strong>
        ことがうかがえます。実際に使うときは、次の点を意識するとよいでしょう。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>下からの侵入に備える</strong> — 試験でもクマが柵の下を掘ろうとしました。
          最下段の電線を低めに張り、地面との隙間をつくらないことが大切です。
        </li>
        <li>
          <strong>電気がきちんと流れているか確かめる</strong> — 草が電線に触れると電気が逃げます。
          草刈りと、テスターでの定期的な点検を続けましょう。
        </li>
        <li>
          <strong>地域でまとめて考える</strong> — 柵のない近くの畑で被害が出たように、
          1 か所だけの対策では足りないことがあります。近所や集落で相談するのがおすすめです。
        </li>
        <li>
          <strong>具体的な仕様は地元の指針に従う</strong> — 電線の段数・高さ・電圧などは、
          都道府県や農業関係機関（市町村の農林担当、JA、農業改良普及センターなど）の手引きに従ってください。
          設置費用の補助がある自治体も多いので、市町村の窓口に問い合わせてみましょう。
          くわしくは <Link href="/articles/electric-fence">電気柵の記事</Link> と{" "}
          <Link href="/articles/bear-agriculture">クマと農業の記事</Link> にまとめています。
        </li>
      </ol>
      <p>
        なお、電気柵はクマに出会ったときの身の守り方の代わりにはなりません。
        畑でクマに出会ったら、走らず、背を向けず、ゆっくり離れてください。
        突進してきたときは、クマスプレー（噴射距離 7.5 m 程度以上・噴射時間 6 秒程度以上のもの）を
        5〜10 m の距離で顔に向けて 1〜2 秒ずつ噴射します。
        接触が避けられないときは、うつ伏せになって首の後ろを手で守る防御姿勢をとりましょう。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Using electric fences to reduce Asiatic black bear depredation in Nagano prefecture, central Japan（本号メイン）",
            citation: (
              <>
                Huygens, O. C., &amp; Hayashi, H. (1999).{" "}
                <em className="not-italic">Wildlife Society Bulletin</em> 27: 959–964.
              </>
            ),
          },
          {
            title: "Conservation Evidence による同論文の要約",
            href: "https://conservationevidencejournal.com/individual-study/7621",
            linkText: "conservationevidencejournal.com →",
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
