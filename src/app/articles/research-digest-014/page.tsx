import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-014")!;

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
        ヒグマは北米・ヨーロッパ・ロシアなど、北半球の広い地域にすんでいます。
        人がクマに襲われる事故は、どんな場面で、どれくらい起きているのでしょうか。
        国ごとの記録をまとめて、世界規模で見比べた研究を紹介します。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Brown bear attacks on humans: a worldwide perspective"
        citation={
          <>
            Bombieri, G., Naves, J., Penteriani, V., Selva, N., Fernández-Gil, A., López-Bao, J. V., et al.（著者 78 名）(2019).{" "}
            <em className="not-italic">Scientific Reports</em> 9: 8573.
          </>
        }
        href="https://doi.org/10.1038/s41598-019-44341-w"
        linkText="DOI: 10.1038/s41598-019-44341-w →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            2000〜2015 年に北米・ヨーロッパ・東部地域で起きた <strong>ヒグマによる人身被害 664 件</strong>を分析
          </>,
          <>
            状況が分かった事例では <strong>子連れの母グマとの遭遇が 47%</strong> で最多
          </>,
          <>
            被害は年々増えており、<strong>クマが多く人が少ない地域</strong>ほど起きやすかった
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "scope", title: "研究の概要" },
          { id: "where", title: "どこで起きたか" },
          { id: "how", title: "どんな場面で起きたか" },
          { id: "when", title: "いつ、どこで増えているか" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="scope">研究の概要</h2>
      <p>
        この論文は、ヨーロッパ・北米・ロシアなどの研究者 78 名が共同でまとめたものです。
        2000〜2015 年に起きたヒグマによる人身被害を、各国の行政記録・研究者の記録・報告書・報道などから集め、
        重複を確かめたうえで <strong>664 件</strong>のデータにしました。
      </p>
      <p>
        地域は「北米」「ヨーロッパ」「東部（ロシア・トルコ・イラン）」の 3 つに分けています。
        事例ごとに、襲われた人が何をしていたか、どんな状況だったか、季節や時間帯、けがの程度などを記録し、
        クマの密度や人口密度との関係も統計的に調べました。
      </p>

      <h2 id="where">どこで起きたか</h2>
      <ul>
        <li>
          <strong>北米: 183 件</strong>（アラスカ 51、ブリティッシュコロンビア 42、ワイオミング 29 など）
        </li>
        <li>
          <strong>ヨーロッパ: 291 件</strong>（ルーマニア 131、スロバキア 54、スウェーデン 28、フィンランド 17 など）
        </li>
        <li>
          <strong>東部: 190 件</strong>（ロシア 111、トルコ 54、イラン 25）。著者は、東部は情報が足りず実際より少なく数えられている可能性が高いとしています。
        </li>
      </ul>
      <p>
        664 件のうち <strong>568 件（85.7%）はけが、95 件（14.3%）は死亡</strong>でした。
        死亡の割合は地域で差があり、ヨーロッパ 6.6%、北米 13.1%、東部 32.0% でした。
      </p>

      <h2 id="how">どんな場面で起きたか</h2>
      <p>
        状況が分かった 289 件では、<strong>子連れの母グマとの遭遇が 47%（137 件）</strong>で最も多く、
        北米でもヨーロッパでも最多の場面でした。
        続いて、単独のクマとの不意の遭遇 20%、犬が一緒にいた事例 17%、撃たれたりわなにかかったりしたクマによるもの 10%、
        捕食的な攻撃 5% でした。
      </p>
      <p>
        襲われた人の活動が分かった 560 件では、
        <strong>レジャーが 50%</strong>（ハイキング 88 件、ベリー・きのこなどの採集 64 件、キャンプ 31 件、釣り 18 件、ジョギング 17 件など）、
        <strong>屋外の仕事が 28%</strong>（農作業・家畜の番・林業など）、<strong>狩猟が 22%</strong> でした。
        屋外の仕事中の被害はヨーロッパに多く、その多くがルーマニアでした。
        また、<strong>63% は襲われたときに 1 人</strong>でした。
      </p>

      <h2 id="when">いつ、どこで増えているか</h2>
      <p>
        季節では <strong>夏が 48%</strong> と最も多く、時間帯では <strong>73% が日中</strong>でした。
        世界全体では年平均約 40 件で、<strong>期間中に有意に増えていました</strong>。
      </p>
      <p>
        統計モデルでは、<strong>クマの密度が高い地域ほど被害が多く、人口密度が高い地域ほど少ない</strong>という関係が出ました。
        人の多い場所ほど危ないのではなく、人が少なくクマが多い場所で起きやすい、という結果です。
        大陸の違いや、クマの狩猟を行う国かどうかでは、はっきりした差は見られませんでした。
      </p>
      <p>
        著者らは、こうした事故は全体としては非常にまれで、多くは命に関わらないとしたうえで、
        子連れの母グマがよく使う場所への立ち入りの制限、クマのいる場所で自分の存在を知らせること、
        犬をつないでおくこと、ごみの管理などを勧めています。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>記録の出どころがさまざまで、国によって集め方や詳しさが異なります。</li>
        <li>状況（場面）が分かったのは 664 件中 289 件に限られます。</li>
        <li>東部地域は情報が不足しており、統計モデルからは外されています。</li>
        <li>
          文献から見つかった 61 件（うち日本 35 件）は、情報が足りないため分析から除かれました。
          <strong>日本のデータはこの分析に含まれていません。</strong>
        </li>
        <li>
          対象はヒグマだけです。本州・四国にすむツキノワグマは扱っていません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        日本の事例は分析に入っていないため、この結果をそのまま日本に当てはめることはできません。
        それでも、子連れの母グマとの遭遇が多いこと、山菜・きのこ採りや屋外の仕事中にも被害が起きていること、
        1 人のときに襲われた例が多いことは、山に入るときの心構えとして参考になります。
      </p>
      <ul>
        <li>クマの出没情報を確かめ、できるだけ複数人で行動し、音を出して自分の存在を知らせる。</li>
        <li>子グマを見かけたら、近くに母グマがいると考えて近づかない。</li>
        <li>
          クマに出会ったら、走らない・背を向けない・ゆっくり離れる。突進されたらクマスプレーを使います
          （環境省が示す目安は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上。5〜10m の距離で顔に向けて 1〜2 秒ずつ）。
        </li>
        <li>
          接触が避けられないときは、うつ伏せになって両手で首の後ろを守る防御姿勢をとります。
          執拗に襲ってくる場合は反撃も選択肢です。
        </li>
      </ul>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Brown bear attacks on humans: a worldwide perspective（本号メイン）",
            citation: (
              <>
                Bombieri, G., et al. (2019).{" "}
                <em className="not-italic">Scientific Reports</em> 9: 8573.
              </>
            ),
            href: "https://doi.org/10.1038/s41598-019-44341-w",
            linkText: "DOI: 10.1038/s41598-019-44341-w →",
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
