import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("playing-dead")!;

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
        <strong>結論</strong>: 「死んだふり」は<strong>条件付きで有効</strong>です。
        ヒグマの<strong>防衛攻撃</strong>には今も生存戦略の一つとして推奨されますが、
        <strong>捕食目的の襲撃</strong>では逆効果で、抵抗の方が生存率が高くなります。
        ツキノワグマでは「両手で頭と首を守る」が基本で、完全に脱力せず防御姿勢を取り続けるのが現実的な助言です。
      </p>

      <ArticleToc
        items={[
          { id: "myth", title: "「死んだふり」神話の出どころ" },
          { id: "two-types", title: "クマの攻撃には 2 種類ある" },
          { id: "by-species", title: "種別と攻撃タイプの組み合わせ" },
          { id: "how-to", title: "やるならどうやるか — 正しい伏せ方" },
          { id: "when-to-fight", title: "抵抗すべきパターン" },
          { id: "after", title: "立ち上がるタイミング" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="myth">「死んだふり」神話の出どころ</h2>
      <p>
        日本では「クマに襲われたら死んだふり」が古くから伝承されています。
        これは完全な誤りではなく、北米のグリズリー (ヒグマ) 対応の研究で、
        防衛攻撃に対しては「動かない・抵抗しない」が生存率を高めると裏付けられた助言が
        翻訳・伝聞される過程で「死んだふり」と単純化された経緯があります。
      </p>
      <p>
        ただし条件が抜け落ちて広まったため、
        ツキノワグマでも、捕食目的の襲撃でも、すべて死んだふりという誤解につながりました。
      </p>

      <h2 id="two-types">クマの攻撃には 2 種類ある</h2>
      <p>
        クマの攻撃は動機で 2 つに分類されます。これを混同すると致命的になり得ます。
      </p>
      <ul>
        <li>
          <strong>防衛攻撃 (Defensive)</strong>:
          子グマを守るため、餌場を守るため、不意に至近距離で出くわして驚いたため、など。
          目的は「人間を排除すること」。
          人間が脅威でないと判断されれば離脱します。
        </li>
        <li>
          <strong>捕食攻撃 (Predatory)</strong>:
          人間を「食料」として認識した攻撃。極めて稀ですが、
          単独行動で接近・追跡してくる、テント内に侵入する、襲っても止めない、
          といった特徴があります。
        </li>
      </ul>
      <p>
        防衛攻撃には<strong>抵抗しない</strong>が有効、
        捕食攻撃には<strong>全力で抵抗する</strong>が原則です。判断材料は次節に。
      </p>

      <h2 id="by-species">種別と攻撃タイプの組み合わせ</h2>
      <p>
        対応は「種別 × 攻撃タイプ」の 4 パターンで整理できます。
      </p>
      <ul>
        <li>
          <strong>ヒグマ × 防衛攻撃</strong>:
          うつ伏せ・両手を首後ろで組み・脚を開いて転がされにくくする。動かない。
          関心が薄れたらクマは離れる。
        </li>
        <li>
          <strong>ヒグマ × 捕食攻撃</strong>:
          全力で抵抗。スプレー・棒・石、何でも顔と鼻を狙う。
          動かなければ食われる前提で。
        </li>
        <li>
          <strong>ツキノワグマ × 防衛攻撃</strong>:
          両手で頭と首を守りうつ伏せ。完全脱力ではなく「動かないが防御姿勢」。
          ツキノワグマは攻撃が短時間で終わることが多い。
        </li>
        <li>
          <strong>ツキノワグマ × 捕食攻撃</strong>:
          頻度は極めて低いが、単独行動で執拗な場合は抵抗。
        </li>
      </ul>
      <p>
        種別の違いは<Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link>
        を参照してください。
      </p>

      <h2 id="how-to">やるならどうやるか — 正しい伏せ方</h2>
      <p>
        条件が揃って「動かない」を選ぶ場合、姿勢が結果を左右します。
      </p>
      <ul>
        <li>
          <strong>うつ伏せ</strong>: 仰向けは内臓・喉が露出するので NG。
        </li>
        <li>
          <strong>両手を首の後ろで組む</strong>: 頸動脈・後頭部を守る。
        </li>
        <li>
          <strong>肘を地面につけて頭を浮かさない</strong>:
          顔面を地面に押し付ける形で、噛まれても鼻・目を守る。
        </li>
        <li>
          <strong>脚を肩幅より広く開く</strong>:
          仰向けにひっくり返されないため。クマは噛んで腹を出させようとすることがある。
        </li>
        <li>
          <strong>リュックを背負ったまま</strong>:
          背中の保護になる。重いものが入っているならなおよい。
        </li>
        <li>
          <strong>声を出さない・呼吸を浅く</strong>:
          完全な脱力は難しいが、刺激しないことが目的。
        </li>
      </ul>

      <h2 id="when-to-fight">抵抗すべきパターン</h2>
      <p>
        次のサインがあれば「死んだふり」をやめて全力で抵抗してください。
      </p>
      <ul>
        <li>
          動かないでいるのに<strong>攻撃が止まらず、噛み続ける</strong>。
        </li>
        <li>
          クマが<strong>体を引きずって移動させようとする</strong>
          (獲物として持ち去ろうとしている)。
        </li>
        <li>
          テント内・小屋内・避難所内で<strong>夜間に襲われた</strong>
          (ほぼ必ず捕食攻撃)。
        </li>
        <li>
          山道で<strong>遠くから一直線に追跡してきた</strong>個体。
        </li>
      </ul>
      <p>
        抵抗の対象は顔・鼻・目。クマの最も敏感な部位で、ここを叩く・突くことで
        撤退に追い込める可能性が出ます。
      </p>

      <h2 id="after">立ち上がるタイミング</h2>
      <p>
        クマが離れたあと、すぐに立ち上がってはいけません。
      </p>
      <ol>
        <li>
          <strong>音と気配が完全に消えるまで待つ</strong>:
          目安は最低 10 分、可能なら 20 分以上。
          クマは離れたふりで近くにいることがあります。
        </li>
        <li>
          <strong>少しずつ頭を上げて視認</strong>:
          いきなり立ち上がらず、数センチずつ。
        </li>
        <li>
          <strong>立ち上がったら来た道を戻る</strong>:
          クマが向かった方向には絶対に進まない。
        </li>
        <li>
          <strong>応急処置と通報</strong>:
          詳しくは<Link href="/articles/first-aid">襲われた後の応急処置</Link>。
        </li>
      </ol>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "ツキノワグマでも死んだふりが有効と聞きましたが本当?",
            a: (
              <>
                条件付きで有効です。子連れ母グマや突発遭遇 (防衛攻撃) では、
                抵抗をやめて頭と首を守る姿勢を取ると関心が薄れて離脱することが多い。
                ただし完全脱力ではなく「両手で頭と首を守るうつ伏せ」が現実的な指示で、
                これを「死んだふり」と呼ぶのは正確ではありません。
              </>
            ),
            aText:
              "条件付きで有効です。防衛攻撃では抵抗をやめて頭と首を守る姿勢が有効ですが、完全脱力ではなく両手で頭と首を守るうつ伏せが現実的な指示です。",
          },
          {
            q: "捕食攻撃と防衛攻撃の見分け方は?",
            a: (
              <>
                防衛攻撃は突発的・短時間で、人間が無力化されると関心が薄れて離脱します。
                捕食攻撃は遠くから一直線に接近する、噛み続ける、体を引きずる、
                夜間にテント内に侵入する、などが特徴です。判断に迷う場合は、
                攻撃が止まらないなら捕食と考えて全力で抵抗してください。
              </>
            ),
            aText:
              "防衛攻撃は短時間で離脱しやすく、捕食攻撃は遠くから接近・噛み続ける・体を引きずるなどが特徴です。攻撃が止まらないなら捕食と考えて全力で抵抗してください。",
          },
          {
            q: "クマが立ち去ったらすぐ走って逃げてもいい?",
            a: (
              <>
                すぐに動くのは危険です。クマは少し離れて様子を見ていることがあり、
                急な動きで追跡を再誘発します。最低 10 分、可能なら 20 分以上、
                音と気配が完全に消えるまで動かないでください。
              </>
            ),
            aText:
              "すぐに動くのは危険です。クマは様子を見ていることがあり、最低 10 分、可能なら 20 分以上、音と気配が完全に消えるまで動かないでください。",
          },
          {
            q: "結局、最善の選択肢は?",
            a: (
              <>
                「襲われる前に抜くスプレー」です。撃退率は研究によって 90% を超えるとされ、
                死んだふりや抵抗より圧倒的に生存率が高い。死んだふりは「スプレーが間に合わなかった」場合の最終手段で、
                その前段で<Link href="/articles/bear-spray">スプレーを腰に携行</Link>することを最優先にしてください。
              </>
            ),
            aText:
              "最善は襲われる前にクマよけスプレーを噴射することです。死んだふりはスプレーが間に合わなかった場合の最終手段で、まずはスプレーの腰携行を最優先にしてください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
