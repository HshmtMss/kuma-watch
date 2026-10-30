import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-brain-cognition")!;

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
        クマは「ただ大きいだけの森の住人」ではありません。Vonk らはアメリカクロクマが
        <strong>数の多い・少ないを見分けられる</strong>ことを実験で示し、
        野生のヒグマが石を道具のように使う様子も報告されています。
        一方で、クマの認知の研究はまだ数が少なく、分かっていないことも多い分野です。
        本記事では、確かめられている研究をもとに、クマの認知能力と、それが人とクマのあつれき (human-bear conflict) にどう関わるかを解説します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマは食肉目のなかで<strong>体の大きさの割に脳が大きい</strong>グループとされる。
          </>,
          <>
            <strong>数の多少の見分け・道具のような物の使い方・足場を使った問題解決</strong>が報告されている。
          </>,
          <>
            人の食べ物を覚えたクマは繰り返し来やすく、<strong>最初に覚えさせない予防</strong>が大切。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "size", title: "クマの脳 — 体の割に大きい" },
          { id: "spatial", title: "空間の記憶と季節の食べ物" },
          { id: "number", title: "数の多少を見分ける — Vonk らのクロクマ実験" },
          { id: "tools", title: "道具使用と問題解決" },
          { id: "social", title: "母から子へ伝わる採食行動" },
          { id: "learning", title: "人の食べ物の学習と人慣れ" },
          { id: "implications", title: "クマ管理への含意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="size">クマの脳 — 体の割に大きい</h2>
      <p>
        クマは、食肉目 (イヌ・ネコ・イタチなどのなかま) のなかで<strong>体の大きさに対する脳の大きさが大きい</strong>グループだと指摘されています
        (Deecke 2012、Vonk &amp; Beran 2012)。
        ただし、脳の大きさだけで「賢さ」を測ることはできず、どの課題がどれだけできるかは、実際に調べてみるしかありません。
      </p>
      <p>
        クマの嗅覚が優れていることはよく知られていますが、「犬の 7 倍」といった数字は測定値ではなく、言い回しとして広まったものです。
      </p>

      <h2 id="spatial">空間の記憶と季節の食べ物</h2>
      <p>
        クマは広い行動圏を持ち、季節によって食べ物の多い場所を移動しながら暮らしています。
        ツキノワグマでは、春は若葉や草、夏は昆虫や果実、秋はブナ・ミズナラなどの堅果類と、季節で主な食べ物が変わります。
      </p>
      <p>
        食べ物の場所や時期を覚えて利用していると考えられていますが、
        クマが「いつ・どこで・何が食べられるか」をどのように記憶しているのかを直接確かめた研究は、まだ限られています。
      </p>

      <h2 id="number">数の多少を見分ける — Vonk らのクロクマ実験</h2>
      <p>
        クマの認知研究でよく引用されるのが、Vonk と Beran (2012, <em>Animal Behaviour</em>) の実験です
        (<Link href="/articles/research-digest-010">研究ダイジェスト Vol.10</Link>)。
      </p>
      <ul>
        <li>
          飼育下のアメリカクロクマ <strong>3 頭</strong>に、タッチスクリーンで 2 つの点の集まりを見せ、
          多い方 (1 頭) または少ない方 (2 頭) を選ぶ課題を行った
        </li>
        <li>点の数と全体の面積が一致する場合もしない場合も、3 頭とも偶然より高い割合で正しく選んだ</li>
        <li>
          点が動く課題では難しくなったが、1 頭は面積と数が一致しない条件でも数の多い方を選べた
        </li>
        <li>クマは面積も手がかりにしていたが、数も手がかりとして使えることが示され、成績のパターンはサルの研究と似ていた</li>
      </ul>
      <p>
        対象は 3 頭だけで、野生のクマが日常でこの能力をどう使っているかまでは分かっていません。
      </p>

      <h2 id="tools">道具使用と問題解決</h2>
      <ul>
        <li>
          <strong>石を道具のように使う</strong>: アラスカ南東部で、若いヒグマがフジツボの付いた石を前足で持ち、
          首や鼻先をこする様子が観察されました。野生のヒグマの道具使用として初めての報告です (Deecke 2012)
        </li>
        <li>
          <strong>足場を使う</strong>: 米ワシントン州立大学の飼育下のグリズリーで、切り株や箱を動かして足場にし、
          吊るされた餌を取る様子が報告されています (Waroff ら 2017)
        </li>
        <li>
          <strong>人の設備を開ける</strong>: 北米の国立公園では、車に侵入して食べ物を取るクマが問題になってきました。
          国内でもゴミ置き場や小屋への侵入が繰り返される例があります
        </li>
      </ul>

      <h2 id="social">母から子へ伝わる採食行動</h2>
      <p>
        クマは単独で暮らす動物ですが、子グマは独立するまでの間、母グマと一緒に行動します。
        米国のセコイア・ヨセミテ国立公園で野生のアメリカクロクマを調べた研究 (Mazur &amp; Seher 2008) では、
        子グマが人の食べ物をあさるようになるかどうかは、<strong>育った環境 (母グマの行動)</strong> と強く関係していました。
        人の食べ物を覚えた行動は、母から子へ伝わりうるということです。
      </p>

      <h2 id="learning">人の食べ物の学習と人慣れ</h2>
      <p>
        被害管理の上で重要なのは、<strong>一度人の食べ物を覚えたクマは、その場所に繰り返し来やすい</strong>ことです。
      </p>
      <ul>
        <li>
          <strong>食べ物を得た経験</strong>: ゴミ・果樹・農作物などで食べ物を得たクマは、その場所を再び訪れやすい
        </li>
        <li>
          <strong>追い払い</strong>: 大きな音などで追い払っても、効果が長続きしないことがある。
          効果は状況によって大きく変わる
        </li>
      </ul>
      <p>
        人の食べ物を覚えたクマ (food-conditioned bear) が繰り返し出没し、被害の原因になることは多くの地域で問題になっています。
        そのため、多くの管理指針は<strong>「最初に覚えさせない」予防</strong>を重視しています。
      </p>

      <h2 id="implications">クマ管理への含意</h2>
      <ul>
        <li>
          <strong>予防を優先する</strong>:
          覚えてしまった後に追い払うより、最初に食べ物を覚えさせない方が対策として確実
        </li>
        <li>
          <strong>ゴミ・残飯・果樹の管理は地域全体で</strong>:
          対策していない家が 1 軒でもあると、そこにクマが引き寄せられるおそれがある
        </li>
        <li>
          <strong>同じ個体が繰り返し来ている可能性も考える</strong>:
          同じ場所で出没が続く場合は、食べ物を覚えた個体が繰り返し来ている可能性がある
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマはどれくらい賢いの？ イヌやネコと比べて？",
            a: "同じ課題で比べた研究がほとんどないため、単純には比べられません。数の多少を見分ける、道具のように物を使う、足場を使って餌を取るといった能力が報告されています。",
            aText: "同じ課題で比べた研究がほとんどないため、単純には比べられません。数の多少を見分ける、道具のように物を使う、足場を使って餌を取るといった能力が報告されています。",
          },
          {
            q: "ヒグマとツキノワグマで認知能力に差はある？",
            a: "両者を直接比べた研究はほとんどなく、差があるかどうかは分かっていません。",
            aText: "両者を直接比べた研究はほとんどなく、差があるかどうかは分かっていません。",
          },
          {
            q: "「一度ゴミを覚えたクマは忘れない」は本当？",
            a: "どれくらいの期間覚えているかを示すはっきりしたデータは限られますが、人の食べ物を覚えたクマは同じ場所に繰り返し来やすいことが知られています。「そのうち忘れる」と期待して放置せず、ゴミや果樹などの誘引物をなくすことが大切です。",
            aText: "どれくらいの期間覚えているかを示すはっきりしたデータは限られますが、人の食べ物を覚えたクマは同じ場所に繰り返し来やすいことが知られています。「そのうち忘れる」と期待して放置せず、ゴミや果樹などの誘引物をなくすことが大切です。",
          },
          {
            q: "鈴・ラジオで「人 = 危険」を学習させられないの？",
            a: "鈴やラジオは、人の存在を知らせて出会い頭の遭遇を避けるためのものです。クマに「人は危険」と学習させる効果は確かめられていません。根本的な対策はゴミ・果樹などの管理です。",
            aText: "鈴やラジオは、人の存在を知らせて出会い頭の遭遇を避けるためのものです。クマに「人は危険」と学習させる効果は確かめられていません。根本的な対策はゴミ・果樹などの管理です。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <ul className="text-sm">
        <li>
          Vonk, J., &amp; Beran, M. J. (2012). Bears &quot;count&quot; too: quantity estimation and comparison in black bears, Ursus americanus.{" "}
          <em>Animal Behaviour</em> 84(1): 231–238.{" "}
          <a href="https://doi.org/10.1016/j.anbehav.2012.05.001" target="_blank" rel="noopener noreferrer">DOI: 10.1016/j.anbehav.2012.05.001</a>
        </li>
        <li>
          Deecke, V. B. (2012). Tool-use in the brown bear (Ursus arctos). <em>Animal Cognition</em> 15(4): 725–730.{" "}
          <a href="https://doi.org/10.1007/s10071-012-0475-0" target="_blank" rel="noopener noreferrer">DOI: 10.1007/s10071-012-0475-0</a>
        </li>
        <li>
          Waroff, A. J., Fanucchi, L., Robbins, C. T., &amp; Nelson, O. L. (2017). Tool use, problem-solving, and the display of stereotypic behaviors in the brown bear (Ursus arctos).{" "}
          <em>Journal of Veterinary Behavior</em> 17: 62–68.{" "}
          <a href="https://doi.org/10.1016/j.jveb.2016.11.003" target="_blank" rel="noopener noreferrer">DOI: 10.1016/j.jveb.2016.11.003</a>
        </li>
        <li>
          Mazur, R., &amp; Seher, V. (2008). Socially learned foraging behaviour in wild black bears, Ursus americanus.{" "}
          <em>Animal Behaviour</em> 75(4): 1503–1508.{" "}
          <a href="https://doi.org/10.1016/j.anbehav.2007.10.027" target="_blank" rel="noopener noreferrer">DOI: 10.1016/j.anbehav.2007.10.027</a>
        </li>
      </ul>

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-learning">クマの学習能力と「問題個体」化</Link> /{" "}
        <Link href="/articles/bear-senses">クマの五感 — 嗅覚・聴覚・視覚の鋭さ</Link> /{" "}
        <Link href="/articles/bear-kidney-nitrogen-recycling">クマの腎機能と窒素リサイクル</Link>
      </p>
    </ArticleShell>
  );
}
