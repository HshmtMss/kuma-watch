import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        を持ちます。雄ヒグマの行動圏は <strong>500〜2,000 km²</strong> という広大なもので、
        その中に他個体の行動圏が部分的に重なります。本記事では獣医行動学・野生動物学の視点で、
        クマの空間利用とマーキング行動を解説します。
      </p>

      <ArticleToc
        items={[
          { id: "territory-vs-range", title: "「縄張り」と「行動圏」の違い" },
          { id: "size", title: "行動圏のサイズ — 種・性別・季節" },
          { id: "marking", title: "マーキング行動 — 4 つの手段" },
          { id: "scrub", title: "ベアスクラブ (樹皮剥がし)" },
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
        ベアスクラブなどのマーキング行動を通じて間接的な情報交換が行われています。
      </p>

      <h2 id="size">行動圏のサイズ — 種・性別・季節</h2>
      <p>
        クマの行動圏は種・性別・年齢・食物環境で大きく変動します。
      </p>
      <ul>
        <li>
          <strong>ヒグマ (雄)</strong>: 500〜2,000 km²。広いオスは 3,000 km² 超え
        </li>
        <li>
          <strong>ヒグマ (雌)</strong>: 50〜300 km²。子持ちはさらに狭くなる
        </li>
        <li>
          <strong>ツキノワグマ (雄)</strong>: 20〜100 km²
        </li>
        <li>
          <strong>ツキノワグマ (雌)</strong>: 5〜30 km²
        </li>
      </ul>
      <p>
        季節変動も大きく、春は山菜・冬眠明けの探索で広く動き、夏は河川沿いに集中、
        秋のハイパーフェイジア期は堅果類の場所を求めて急拡大します。
        この時期は普段の行動圏外まで移動する個体もおり、市街地への出没が増えます。
      </p>

      <h2 id="marking">マーキング行動 — 4 つの手段</h2>
      <p>
        クマは縄張り誇示・コミュニケーションのために 4 つの主な手段を使います。
      </p>
      <ol>
        <li>
          <strong>ベアスクラブ (Bear scrub)</strong>: 樹皮を爪で剥ぐ
        </li>
        <li>
          <strong>ラビングツリー (Rubbing tree)</strong>: 樹幹に背中をこすりつける
        </li>
        <li>
          <strong>糞・尿マーキング</strong>: 行動圏内に痕跡を残す
        </li>
        <li>
          <strong>フェロモン分泌</strong>: 足裏・首腺などからの分泌物
        </li>
      </ol>
      <p>
        これらは他個体への「私はここにいる」というシグナルであると同時に、
        自分自身の縄張り認識・安心感の維持にも役立っていると考えられています。
      </p>

      <h2 id="scrub">ベアスクラブ (樹皮剥がし)</h2>
      <p>
        ベアスクラブはクマが樹幹の地上 1.5〜2.5m の高さで爪を使って樹皮を縦に剥がす行動。
        通常 30〜60cm 程度の細長い剥がれ跡が残ります。
      </p>
      <ul>
        <li>
          樹種: ブナ・スギ・ヒノキ・カラマツなど針葉樹・広葉樹を問わず
        </li>
        <li>
          意味: 縄張り誇示・サイズアピール (高さで体格を示す)
        </li>
        <li>
          時期: 春〜夏に多く、秋は減る
        </li>
        <li>
          経済影響: 林業では立木の商品価値を大きく損なう
        </li>
      </ul>
      <p>
        登山中に樹皮が縦に剥がれた跡を見つけたら、近くにクマの行動圏があるサイン。
        新しい (樹液がにじむ) 痕跡なら、その日のうちにクマが通った可能性も。
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
          <strong>痒みの解消</strong>: ノミ・ダニ・夏毛抜けの違和感を取る
        </li>
        <li>
          <strong>匂いの転写</strong>: 体表のフェロモン・皮脂を樹に残す
        </li>
        <li>
          <strong>情報交換</strong>: 後から来た他個体が匂いを嗅ぎ、誰が通ったかを「読む」
        </li>
      </ul>
      <p>
        ラビングツリーは複数のクマが代々利用する「共同情報板」になることも。
        DNA 解析で同じ樹に何個体の毛が付着しているか調べる研究も行われています。
      </p>

      <h2 id="scat-urine">糞・尿マーキング</h2>
      <p>
        糞 (フン) と尿は最も身近なマーキング手段。
      </p>
      <ul>
        <li>
          糞: 食物の内容物 (果実種子・繊維・骨片) が分かるので、何を食べたかも推定可能
        </li>
        <li>
          尿: 雄の発情期に分泌が増加。雌の発情周期もフェロモンとして他個体に伝わる
        </li>
        <li>
          位置: 通行路の中央・分岐点・ラビングツリーの足元など、目立つ場所が選ばれる
        </li>
      </ul>
      <p>
        登山道・林道で新しい糞 (光沢があり匂いがする) を見つけたら、
        近距離にクマがいる可能性が高いシグナル。
        その場で大きな声を出し、慎重に来た道を戻ることを推奨します。
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
          <strong>マーキング痕跡を観察</strong> — 新しいベアスクラブ・ラビングツリー・糞があれば、
          そのエリアはクマの利用頻度が高い
        </li>
        <li>
          <strong>音を出して歩く</strong> — クマ鈴・声出し・ラジオで自分の存在を事前に知らせる
        </li>
        <li>
          <strong>朝夕の薄明帯を避ける</strong> — クマの活動時間と重なる
        </li>
        <li>
          <strong>子グマを見たら全速撤退</strong> — 母グマが近くで保護モードに入っている
        </li>
        <li>
          <strong>事前確認</strong> — トップマップで地域の出没履歴を確認
        </li>
      </ol>

      <ArticleFaq
        items={[
          {
            q: "ベアスクラブと熊棚 (くまだな) の違いは？",
            a: "ベアスクラブは樹皮を剥がす行動の痕跡。熊棚は果実 (ブナ・ヤマブドウ等) を食べる際にクマが枝を折って作る一時的なベッドの痕跡。両方ともクマの存在シグナルですが、機能は異なります。",
            aText: "ベアスクラブは樹皮を剥がす行動の痕跡。熊棚は果実 (ブナ・ヤマブドウ等) を食べる際にクマが枝を折って作る一時的なベッドの痕跡。両方ともクマの存在シグナルですが、機能は異なります。",
          },
          {
            q: "クマの行動圏に住宅地が入ることはある？",
            a: "あります。アーバンベア化はまさに行動圏に住宅地が組み込まれた状態。一度成功体験を積んだ個体は同じ住宅地を繰り返し訪れます。",
            aText: "あります。アーバンベア化はまさに行動圏に住宅地が組み込まれた状態。一度成功体験を積んだ個体は同じ住宅地を繰り返し訪れます。",
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

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-tracks">クマの痕跡の見方</Link> /{" "}
        <Link href="/articles/bear-communication">クマ同士のコミュニケーション</Link> /{" "}
        <Link href="/articles/bear-learning">クマの学習と「人慣れ」</Link>
      </p>
    </ArticleShell>
  );
}
