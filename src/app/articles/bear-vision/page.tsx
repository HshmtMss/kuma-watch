import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints, References } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-vision")!;

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
        「クマは目が悪い」とよく言われますが、実はクマの視力をきちんと測った研究はほとんどありません。
        はっきりしているのは、<strong>クマは色をある程度見分けられる</strong>こと（行動実験）と、
        夜にライトを当てると目が光ることです。一方、「視力は人間の ○ 割」「夜は人間の ○ 倍見える」
        といった数字には確かな根拠が見当たりません。本記事では、わかっていることとわかっていないことを分けて、
        クマの視覚と遭遇時の行動を整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマの<strong>視力を測った研究はほとんどなく</strong>、「人間より悪い」「同程度」と資料によって評価が分かれる。
          </>,
          <>
            行動実験では<strong>色を見分けられる</strong>ことが示されている。夜にライトで<strong>目が光る</strong>。
          </>,
          <>
            「動かなければ気づかれない」は当てにしない。<strong>クマを見ながらゆっくり離れる</strong>のが基本。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "acuity", title: "視力 — 測った研究はほとんどない" },
          { id: "color", title: "色覚 — 色は見分けられる" },
          { id: "night", title: "夜に目が光る理由" },
          { id: "behavior", title: "遭遇したときの行動" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="acuity">視力 — 測った研究はほとんどない</h2>
      <p>
        クマの視力（どれだけ細かいものが見えるか）について、数値で示した信頼できる研究は見当たりません。
        米国立公園局（NPS）の資料の中でも、「視力・聴力は人間と同程度」とするものと、
        「人間に比べてかなり悪い」とするものがあり、評価が分かれています。
      </p>
      <p>
        クマが主に頼っているのは嗅覚で、視覚はそれを補う感覚と考えられています。
        ただし「目が悪いから気づかれない」と考えるのは危険です。
        近い距離では人の姿や動きに気づくと考えて行動してください。
      </p>

      <h2 id="color">色覚 — 色は見分けられる</h2>
      <p>
        アメリカクロクマを使った行動実験（Bacon と Burghardt の研究）では、クマは
        <strong>青を灰色・緑・赤・黄色と、緑を灰色・青・赤と区別できる</strong>ことを
        短期間で学習しました。少なくともクロクマは色を見分けられると考えられています。
      </p>
      <p>
        ただし、人間と同じように色が見えているかどうかはわかりません。
        「赤い服はクマに見えない」「派手な色ならクマが避けてくれる」といった話には根拠がありません。
        服の色よりも、音を出して人の存在を知らせること、出没情報を確認することのほうが大切です。
      </p>

      <h2 id="night">夜に目が光る理由</h2>
      <p>
        夜にクマの目にライトを当てると光って見えることがあります。
        これは、多くの夜行性・薄明薄暮性の哺乳類と同じように、網膜の裏側に光を反射する層
        （<strong>タペタム、tapetum lucidum</strong>）があるためと考えられています。
        この層は暗いところで光を有効に使うのに役立ちます。
      </p>
      <p>
        ただし、クマが暗闇で人間の何倍見えるかを測ったデータはありません。
        クマは主に昼に活動し、明け方と夕方に特に活発になりますが、夜に動く個体もいます。
        暗い時間帯は人のほうがクマに気づきにくいので、山や出没地域の夜間・早朝の行動は控えめにしてください。
        詳しくは <Link href="/articles/night-encounter">夜間遭遇の対処</Link> を参照してください。
      </p>

      <h2 id="behavior">遭遇したときの行動</h2>
      <p>
        クマの視覚について確かなことが少ない以上、遭遇時は「見られている」前提で行動するのが安全です。
      </p>
      <ol>
        <li>
          <strong>走らない・背を向けない</strong>: 走って逃げると追われるおそれがある
        </li>
        <li>
          <strong>クマを見ながらゆっくり離れる</strong>: クマの動きから目を離さない
        </li>
        <li>
          <strong>突進されたらクマスプレー</strong>: 5〜10 m まで近づいたら、顔（目・鼻）に向けて 1〜2 秒ずつ噴射する
        </li>
        <li>
          <strong>接触が避けられないとき</strong>: 驚かせた・子連れなどの防衛的な攻撃なら、
          うつ伏せになり両手で首の後ろを守る（リュックは背負ったまま）。
          伏せても攻撃が続く・引きずるなど執拗な攻撃なら、顔や鼻を狙って反撃する
        </li>
      </ol>
      <p>
        「じっと動かなければクマに気づかれない」という考えは当てにしないでください。
        詳しい遭遇時の対応は <Link href="/articles/encounter">クマに遭遇したらどうする</Link> を参照。
      </p>

      <ArticleFaq
        items={[
          {
            q: "夜にクマをライトで照らすと逃げる？",
            a: "光で追い払えるという確かな根拠はありません。ライトはクマを追い払う道具ではなく、自分がクマに早く気づくための道具と考えてください。クマに気づいたら、クマを見ながらゆっくり離れます。",
            aText: "光で追い払えるという確かな根拠はありません。ライトはクマを追い払う道具ではなく、自分がクマに早く気づくための道具と考えてください。クマに気づいたら、クマを見ながらゆっくり離れます。",
          },
          {
            q: "迷彩服と目立つ色の服、どちらが安全？",
            a: "服の色でクマの反応が変わることを示したデータは見当たりません。クマ対策では、鈴や声で人の存在を知らせる、出没情報を確認するなどのほうが大切です。狩猟期の山では、ハンターから見えやすい色の服が勧められることがあります。",
            aText: "服の色でクマの反応が変わることを示したデータは見当たりません。クマ対策では、鈴や声で人の存在を知らせる、出没情報を確認するなどのほうが大切です。狩猟期の山では、ハンターから見えやすい色の服が勧められることがあります。",
          },
          {
            q: "クマと目を合わせてはいけない？",
            a: "クマから目を離さず、動きを見ながらゆっくり離れるのが基本です。クマを刺激しないよう、大声で叫んだり急に動いたりしないようにします。",
            aText: "クマから目を離さず、動きを見ながらゆっくり離れるのが基本です。クマを刺激しないよう、大声で叫んだり急に動いたりしないようにします。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Investigation on Perception and Behavior of the American Black Bear (Ursus americanus)",
            citation: <>Bacon, E. S. (1973). 博士論文, University of Tennessee.（のちに Bacon &amp; Burghardt 1976 として発表）</>,
            href: "https://trace.tennessee.edu/utk_graddiss/1611",
            linkText: "TRACE →",
          },
          {
            title: "Black Bears（マーシュ・ビリングス・ロックフェラー国立歴史公園）",
            citation: <>米国立公園局（NPS）</>,
            href: "https://www.nps.gov/mabi/learn/nature/black-bears.htm",
            linkText: "NPS →",
          },
          {
            title: "Bears（レッドウッド国立・州立公園）",
            citation: <>米国立公園局（NPS）</>,
            href: "https://www.nps.gov/redw/planyourvisit/upload/bears-2012-508.pdf",
            linkText: "NPS（PDF）→",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-senses">クマの感覚 — 嗅覚・聴覚・視覚 概論</Link> /{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link> /{" "}
        <Link href="/articles/night-encounter">夜間遭遇の対処</Link>
      </p>
    </ArticleShell>
  );
}
