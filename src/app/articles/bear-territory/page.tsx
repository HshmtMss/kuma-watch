import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-territory")!;

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
        「クマには縄張りがある」とよく言われますが、これは半分正解です。クマは厳密な意味での
        「縄張り (territory)」を持たず、代わりに重なり合う <strong>「行動圏 (home range)」</strong>
        を持ちます。行動圏の広さは地域や個体で大きく異なりますが、<strong>オスはメスより広い</strong>傾向があり、
        他の個体の行動圏と重なり合っています。本記事では獣医行動学・野生動物学の視点で、
        クマの空間利用とマーキング行動を解説します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマは厳密な<strong>「縄張り」を持たず、重なり合う「行動圏」</strong>を持つ。
          </>,
          <>
            行動圏の広さは地域・個体で大きく異なり、<strong>オスはメスより広い</strong>傾向。
          </>,
          <>
            <strong>木への背こすり（ラビングツリー）</strong>などで匂いの情報を残すと考えられている。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "territory-vs-range", title: "「縄張り」と「行動圏」の違い" },
          { id: "size", title: "行動圏のサイズ — 種・性別・季節" },
          { id: "marking", title: "マーキング行動" },
          { id: "scrub", title: "樹皮はぎ (クマハギ) と爪痕" },
          { id: "rubbing", title: "ラビングツリー (背中こすり)" },
          { id: "scat-urine", title: "糞・尿マーキング" },
          { id: "encounter", title: "行動圏に入ったときの対処" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="territory-vs-range">「縄張り」と「行動圏」の違い</h2>
      <p>
        動物行動学では「縄張り (territory)」と「行動圏 (home range)」を区別します。
      </p>
      <ul>
        <li>
          <strong>縄張り</strong>: 他個体の侵入を積極的に排除する空間。
          鳥類の繁殖縄張り、ネコ科の狩り場など
        </li>
        <li>
          <strong>行動圏</strong>: 個体が日常活動する範囲だが、他個体の出入りには寛容。
          重なり合いを許容する
        </li>
      </ul>
      <p>
        クマは行動圏型で、特に食物が豊富な場所 (サケが遡上する川・堅果の豊作地) では
        多数の個体が同じ場所を同時利用する光景も観察されます。
        ただし、雄同士・母子と他個体の遭遇では緊張が高まることがあり、
        木への背こすりなどを通じて、匂いによる間接的な情報のやりとりが行われていると考えられています。
      </p>

      <h2 id="size">行動圏のサイズ — 種・性別・季節</h2>
      <p>
        クマの行動圏は種・性別・年齢・食物環境で大きく変動します。
      </p>
      <ul>
        <li>一般に、ヒグマの行動圏はツキノワグマより広い</li>
        <li>どちらも、オスの行動圏はメスより広い傾向がある</li>
        <li>同じ種でも、地域・個体・年によって広さは大きく変わる</li>
      </ul>
      <p>
        季節による変化もあり、ヒグマのオスは繁殖期 (初夏) にメスを探して広い範囲を動くとされます。
        また、ツキノワグマでは堅果類が不作の年に行動圏が広がり、人の生活圏への出没が増える要因になるとされています (環境省)。
      </p>

      <h2 id="marking">マーキング行動</h2>
      <p>
        クマが匂いなどの情報を残す行動として、主に次のようなものが知られています。
      </p>
      <ol>
        <li>
          <strong>ラビングツリー (Rubbing tree)</strong>: 木の幹に背中や首をこすりつける
        </li>
        <li>
          <strong>木への爪痕・噛み痕</strong>: こすりつける木に爪や歯の跡が残ることがある
        </li>
        <li>
          <strong>足跡による匂い付け</strong>: 同じ場所を踏みしめるように歩き、足跡のくぼみが続く道ができることがある (ヒグマなどで報告)
        </li>
      </ol>
      <p>
        これらは、他の個体に自分の存在や繁殖の状態を伝える役割があると考えられていますが、
        何がどこまで伝わっているのかは、まだ研究の途中です。
      </p>

      <h2 id="scrub">樹皮はぎ (クマハギ) と爪痕</h2>
      <p>
        スギやヒノキの幹の樹皮が大きくはがされ、上下に平行した歯形が残っているのは、
        「<strong>クマハギ</strong>」と呼ばれるツキノワグマの痕跡です。
      </p>
      <ul>
        <li>
          時期: 春〜夏 (4〜8 月ごろ) に多いとされる
        </li>
        <li>
          意味: 樹皮の下の部分を食べるためと考えられており、マーキングとは区別される
        </li>
        <li>
          経済影響: 林業では立木の価値を大きく損なう被害になる
        </li>
      </ul>
      <p>
        登山中に樹皮がはがれた跡や、幹に爪痕を見つけたら、その周辺をクマが利用しているサインです。
        樹皮の色が新しい痕跡なら、最近クマが来た可能性もあります。
        詳しくは <Link href="/articles/bear-tracks">クマの痕跡の見方</Link> も参照。
      </p>

      <h2 id="rubbing">ラビングツリー (背中こすり)</h2>
      <p>
        クマが特定の樹に何度も背中・首・肩をこすりつける行動。
        その樹には<strong>毛が大量に付着</strong>し、樹皮も摩耗して光沢が出ます。
        これは:
      </p>
      <ul>
        <li>
          <strong>痒みの解消</strong>: 毛の生え替わりや虫による痒みを取る (と考えられている)
        </li>
        <li>
          <strong>匂いの転写</strong>: 体表のフェロモン・皮脂を樹に残す
        </li>
        <li>
          <strong>情報交換</strong>: 後から来た他個体が匂いを嗅ぎ、誰が通ったかを「読む」
        </li>
      </ul>
      <p>
        ラビングツリーは複数のクマが繰り返し利用することがあり、北米ではオスの成獣が繁殖期によく利用するという報告があります。
        付着した毛の DNA を調べて、どの個体が利用したかを調べる研究も行われています。
      </p>

      <h2 id="scat-urine">糞・尿</h2>
      <p>
        クマが糞や尿をマーキングとして使っているかどうかは、はっきり分かっていません。
        ただし、糞はクマがいたことを示す分かりやすい痕跡です。
      </p>
      <ul>
        <li>
          糞: 中身 (果実の種・草の繊維・昆虫など) から、何を食べたかを推定できる
        </li>
      </ul>
      <p>
        登山道・林道で新しい糞 (つやがあり匂いがする) を見つけたら、
        近くにクマがいる可能性があります。声を出して存在を知らせながら、慎重に来た道を戻ってください。
      </p>

      <h2 id="encounter">行動圏に入ったときの対処</h2>
      <p>
        私たちが登山・ハイキング・山菜採りで歩く山道の多くは、複数のクマの行動圏に含まれています。
        無人の山林を歩くということは、クマの行動圏に入っていることを意味します。
      </p>
      <p>
        対処の原則:
      </p>
      <ol>
        <li>
          <strong>痕跡を観察</strong> — 新しい爪痕・樹皮はぎ・ラビングツリー・糞があれば、
          そのエリアはクマの利用頻度が高い
        </li>
        <li>
          <strong>音を出して歩く</strong> — クマ鈴・声出し・ラジオで自分の存在を事前に知らせる
        </li>
        <li>
          <strong>朝夕の薄明帯を避ける</strong> — クマの活動時間と重なる
        </li>
        <li>
          <strong>子グマを見たら静かにその場を離れる</strong> — 近くに母グマがいる可能性が高い。走らず、背を向けず、ゆっくり離れる
        </li>
        <li>
          <strong>事前確認</strong> — トップマップで地域の出没履歴を確認
        </li>
      </ol>

      <ArticleFaq
        items={[
          {
            q: "樹皮はぎと熊棚 (くまだな) の違いは？",
            a: "樹皮はぎ (クマハギ) は幹の樹皮をはがした痕跡。熊棚は、木に登って実 (ブナ・ミズナラ・クリなど) を食べるときに、クマが枝を折りたぐり寄せ、食べ終えた枝を尻の下に敷くなどしてできる枝の重なりです。どちらもクマがいたサインですが、でき方が異なります。",
            aText: "樹皮はぎ (クマハギ) は幹の樹皮をはがした痕跡。熊棚は、木に登って実 (ブナ・ミズナラ・クリなど) を食べるときに、クマが枝を折りたぐり寄せ、食べ終えた枝を尻の下に敷くなどしてできる枝の重なりです。どちらもクマがいたサインですが、でき方が異なります。",
          },
          {
            q: "クマの行動圏に住宅地が入ることはある？",
            a: "あります。アーバンベア化は、行動圏に住宅地が組み込まれた状態とも言えます。住宅地で食べ物を得た個体は、同じ場所を繰り返し訪れやすくなります。",
            aText: "あります。アーバンベア化は、行動圏に住宅地が組み込まれた状態とも言えます。住宅地で食べ物を得た個体は、同じ場所を繰り返し訪れやすくなります。",
          },
          {
            q: "雄同士が出会ったら戦う？",
            a: "発情期の雄同士、または食物資源を巡って遭遇した場合は威嚇・小競り合いがあり、ときに深刻な怪我に至ることも。普段は互いに避け合うのが基本。",
            aText: "発情期の雄同士、または食物資源を巡って遭遇した場合は威嚇・小競り合いがあり、ときに深刻な怪我に至ることも。普段は互いに避け合うのが基本。",
          },
          {
            q: "クマの行動圏を狭めれば被害は減る？",
            a: "個体駆除より「行動圏内の魅力的な餌資源を減らす」方が効果的。集落の果樹回収・電気柵・ゴミ管理で「人里=餌が無い」と学習させるのが行動学的な王道です。",
            aText: "個体駆除より「行動圏内の魅力的な餌資源を減らす」方が効果的。集落の果樹回収・電気柵・ゴミ管理で「人里=餌が無い」と学習させるのが行動学的な王道です。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-tracks">クマの痕跡の見方</Link> /{" "}
        <Link href="/articles/bear-communication">クマ同士のコミュニケーション</Link> /{" "}
        <Link href="/articles/bear-learning">クマの学習と「人慣れ」</Link>
      </p>
    </ArticleShell>
  );
}
