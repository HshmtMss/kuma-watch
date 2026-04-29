import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-bell")!;

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
      <h2>「クマ鈴は意味がない」説の根拠</h2>
      <p>
        近年「クマ鈴は効かない」という説が広がっています。代表的な根拠は次の通りです。
      </p>
      <ul>
        <li>
          人里近くのクマは「鈴の音 = 食料 (ザックの中の行動食) を持った人間」と学習している可能性がある
        </li>
        <li>
          クマは聴覚は鋭いが、鈴の音は風や沢の音に紛れて遠くまで届かない
        </li>
        <li>
          実験でクマ鈴を鳴らしても、近距離のクマが逃げないケースが観察されている
        </li>
      </ul>
      <p>
        これらは事実ですが、「鈴は無意味」という結論は早すぎます。
      </p>

      <h2>「クマ鈴は効く」説の根拠</h2>
      <ul>
        <li>
          多くの遭遇は「人間の存在を事前にクマが察知できなかった」ケース。鈴で先に存在を知らせれば回避される
        </li>
        <li>
          クマの聴覚は人間の数倍。沢音より高い金属音は遠くまで届く
        </li>
        <li>
          実際の山行で「鈴の音が聞こえてクマが見えなくなった」という証言は多数
        </li>
        <li>
          各都道府県の野生動物センターも「音を出して歩く」ことを公式に推奨している
        </li>
      </ul>

      <h2>結論: 「過信せず、しかし携行する」</h2>
      <p>
        最新の研究と現場知見をまとめると、クマ鈴は次のように評価できます。
      </p>
      <ul>
        <li>
          <strong>遭遇率を下げる効果は確実にある</strong> —
          特に山中の見通しが悪い場所では、互いの存在を早く知らせるための最も簡便な装備
        </li>
        <li>
          <strong>ただし「鈴があれば安全」ではない</strong> —
          慣れたクマ・近距離・風下では効果が下がる
        </li>
        <li>
          <strong>他の対策と組み合わせて使う</strong> —
          鈴は「予防」、スプレーは「対処」。両方が必要
        </li>
      </ul>

      <h2>音が大きい鈴を選ぶ</h2>
      <p>
        市販の鈴で音量・音質の差は大きいです。選ぶときのポイント:
      </p>
      <ul>
        <li>
          <strong>真鍮製で大型 (φ 4cm 以上)</strong> が音量・音域ともに優秀
        </li>
        <li>
          <strong>消音機能付き</strong>: 山小屋・公共交通でうるさくならないよう、磁石でシャッターできるタイプが便利
        </li>
        <li>
          <strong>ザック外側に固定</strong>: ザックの中に入れると音が籠もる。
          ショルダーストラップやベルトに固定して、常に揺れる位置に
        </li>
      </ul>

      <h2>ホイッスルとの併用が最強</h2>
      <p>
        クマ鈴の弱点は「常に同じ音 = クマが慣れる」ことです。
        ホイッスルは数百メートル先まで届く高音で、慣れにくく、緊急時の合図にも使えます。
        ホイッスルを首掛けで携行し、視界が悪い場所・沢音が大きい場所では数分おきに数秒鳴らすのが効果的です。
      </p>

      <h2>ラジオは効果的、ただし注意</h2>
      <p>
        人の声や音楽はクマにとって「人間の存在」を強く示すシグナルです。
        山行中に小型ラジオを携行する人もいますが、他の登山者にとってはノイズになるため、人気のあるルートでは音量に配慮を。
        単独行・薮漕ぎ・沢登りなど人が少ない場面で活用するのがマナーです。
      </p>

      <h2>シーン別の使い分け</h2>
      <ul>
        <li>
          <strong>ハイキング・縦走</strong>: クマ鈴 + 会話で十分。複数人なら鈴は 1 人で OK
        </li>
        <li>
          <strong>単独行・早朝出発</strong>: クマ鈴 + ホイッスル + ラジオ
        </li>
        <li>
          <strong>山菜・きのこ採り</strong>: 藪に入る前にホイッスル数回。鈴は常に
        </li>
        <li>
          <strong>沢登り・渓流釣り</strong>: 沢音で鈴の音が消えるため、ホイッスルが主役
        </li>
        <li>
          <strong>住宅街・果樹園周辺</strong>: 音具よりも電気柵・餌場管理が優先
        </li>
      </ul>

      <h2>本当の安全は組み合わせで作る</h2>
      <p>
        クマ鈴は「単体では完璧ではない、しかし携行コストが低く確実に役立つ」装備です。
        遭遇予防 (鈴・ホイッスル・ラジオ) と、遭遇後の対処 (
        <Link href="/articles/bear-spray">スプレー</Link>、
        <Link href="/articles/encounter">距離別の対処</Link>) を組み合わせ、
        さらに出発前に <Link href="/">出没マップ</Link> で情報収集する。
        この三段構えがアウトドアでクマと共存するための基本です。
      </p>
    </ArticleShell>
  );
}
