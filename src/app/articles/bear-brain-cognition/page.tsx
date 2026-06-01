import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        クマは「ただ大きいだけの森の住人」ではありません。Vonk らがアメリカクロクマで示した
        <strong>数概念の理解</strong>、Mazur ら によるヒグマの<strong>季節別餌場の地図化</strong>、
        そして電気柵やゴミ箱を巧みに解除する<strong>問題解決能力</strong> — これらは
        哺乳類の認知研究で繰り返し報告されてきました。
        本記事では比較認知科学の知見をベースに、クマの脳構造と認知能力の現在地、
        そしてそれが人クマ軋轢 (human-bear conflict) にどう影響するかを解説します。
      </p>

      <ArticleToc
        items={[
          { id: "size", title: "クマの脳 — 大きさだけでは語れない" },
          { id: "anatomy", title: "解剖学的特徴 — 嗅球と前頭葉" },
          { id: "spatial", title: "空間記憶 — 数百 km² を「地図化」する能力" },
          { id: "foraging", title: "餌場マップ — 季節別の食物探索戦略" },
          { id: "number", title: "数概念 — Vonk らのクロクマ実験" },
          { id: "tools", title: "道具使用と問題解決 — 檻・電気柵を破る個体" },
          { id: "social", title: "個体識別と社会的認知" },
          { id: "learning", title: "リスク学習と人慣れの非対称性" },
          { id: "implications", title: "クマ管理への含意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="size">クマの脳 — 大きさだけでは語れない</h2>
      <p>
        ヒグマの脳重量はおよそ <strong>300〜500 g</strong>、ツキノワグマで 200〜350 g。
        体重比では 0.1〜0.2% 程度で、これは食肉目のなかでは平均的な数値です。
        ところが脳の絶対サイズは認知能力の指標としては乏しく、
        重要なのは <strong>大脳皮質の表面積</strong>と<strong>領域ごとの細胞密度</strong>です。
      </p>
      <p>
        Sakai ら (2016, <em>Frontiers in Neuroanatomy</em>) は食肉目 5 種の脳を比較し、
        クマの大脳皮質は前頭葉と頭頂葉が相対的に大きいことを報告しました。
        この発達は、空間認知・意思決定・運動制御を支える基盤と一致します。
      </p>

      <h2 id="anatomy">解剖学的特徴 — 嗅球と前頭葉</h2>
      <ul>
        <li>
          <strong>嗅球 (olfactory bulb)</strong>: イヌの 5〜7 倍とも言われる超大型の嗅球を持つ。
          これは認知能力の物差しではないが、「<strong>匂いで世界を構築する動物</strong>」であることを示す
        </li>
        <li>
          <strong>前頭葉</strong>: 計画立案・抑制・意思決定に関わる領域。
          ネコ・キツネなどと比較して相対的に大きい
        </li>
        <li>
          <strong>海馬</strong>: 長期記憶と空間ナビゲーションを担う。
          季節的食物探索を行うクマでは、頭頂葉とのネットワークが発達していると推測される
        </li>
      </ul>

      <h2 id="spatial">空間記憶 — 数百 km² を「地図化」する能力</h2>
      <p>
        GPS テレメトリーで追跡された北米のヒグマは、行動圏が <strong>200〜2,000 km²</strong> に及び、
        その中で<strong>季節ごとに異なる「重要地点」</strong> (採餌場・水場・休息場) を反復利用します。
        これらの地点間は数十 km 離れていることが珍しくありません。
      </p>
      <p>
        Mazur と Seher (2008, <em>Animal Behaviour</em>) によるブリティッシュコロンビアの研究では、
        ヒグマは<strong>過去 2〜3 シーズン前に訪れた採餌場を、季節タイミングを合わせて再訪</strong>することが示されました。
        これは単なる地形記憶ではなく、「<strong>いつ・どこで・何が食べられるか</strong>」を結びつけた
        <strong>エピソード様記憶 (episodic-like memory)</strong>に近い能力と解釈されています。
      </p>

      <h2 id="foraging">餌場マップ — 季節別の食物探索戦略</h2>
      <p>
        クマの認知能力で最も実用的なのが「<strong>季節別の食物探索戦略</strong>」です。
        ヒグマの 1 年は、おおまかに次のような食物カレンダーで構成されます。
      </p>
      <ul>
        <li><strong>春 (覚醒〜5 月)</strong>: 越冬死した有蹄類の死骸、若草、山菜 → 標高の低い谷沿いを巡回</li>
        <li><strong>初夏 (6〜7 月)</strong>: アリ・スズメバチの巣、ヤマブドウ蕾、産卵期のサケ → 渓流沿いを移動</li>
        <li><strong>盛夏 (7〜8 月)</strong>: ベリー類、サケ遡上ピーク → 河川 + 山腹のベリーパッチ</li>
        <li><strong>初秋 (9〜10 月)</strong>: 堅果類 (ブナ・ナラ)、果実 → 山腹〜尾根筋の堅果林</li>
        <li><strong>晩秋 (10〜11 月)</strong>: 残存堅果、農作物 → 残された資源を求めて広域移動</li>
      </ul>
      <p>
        重要なのは、これらの行動が<strong>毎年同じ場所・同じタイミングで反復される</strong>こと。
        個体が「ベリー園は 7 月下旬、サケは 8 月上旬に来る」というスケジュールを内部表象として保持しているように見えます。
        この能力は出没予報の設計にも示唆を与えます — クマは無秩序に動いているのではなく、
        <strong>記憶に基づいた採餌スケジュールに従っている</strong>のです。
      </p>

      <h2 id="number">数概念 — Vonk らのクロクマ実験</h2>
      <p>
        クマの認知研究で最もよく引用されるのが、Vonk と Beran (2012, <em>Animal Behaviour</em>) の数概念実験です。
      </p>
      <ul>
        <li>
          飼育下のアメリカクロクマ <strong>3 個体</strong>にタッチスクリーンを与え、
          2 つの図形のうち「ドットが多い方」を選ぶ訓練を実施
        </li>
        <li>個体は <strong>1 対 2、2 対 3、10 対 20</strong> など異なる比率で正解率が高かった</li>
        <li>
          ドットの密度・配置を変えても「<strong>数量そのもの</strong>」に基づく判断ができていることが示された
        </li>
        <li>これは霊長類・カラス科鳥類と並ぶ高度な数量認知の証拠</li>
      </ul>
      <p>
        実生活では、「<strong>大きな群れより小さな群れに近づく</strong>」「<strong>食物が多い樹を選ぶ</strong>」
        などの判断にこの能力が使われていると推測されます。
      </p>

      <h2 id="tools">道具使用と問題解決 — 檻・電気柵を破る個体</h2>
      <p>
        Waroff ら (2017, <em>Animal Cognition</em>) は飼育下ヒグマ 8 個体に
        手の届かない餌をパズルボックスに入れて与える課題を実施し、
        <strong>4 個体が試行錯誤で解法を獲得</strong>、うち 2 個体は手順を記憶して翌週も再現したと報告しています。
      </p>
      <p>
        野生でも以下のような道具使用 / 工夫が観察されています。
      </p>
      <ul>
        <li>
          <strong>石を使って岩のフジツボを剥がす</strong> (アラスカのヒグマ、Deecke 2012)
        </li>
        <li>
          <strong>電気柵を解除する</strong>: 柵下を掘って侵入、または絶縁体になる物を投げて踏み超える事例 (Hopkins 2013)
        </li>
        <li>
          <strong>ゴミ箱・餌箱を開ける</strong>: ヨセミテ国立公園で報告された「クマ対策ロッカー」突破事例の蓄積
        </li>
        <li>
          <strong>巣穴の枝の配置</strong>: 入口に枝を持ち込み風よけ / 雨除けに使う観察例
        </li>
      </ul>
      <p>
        とくに「人間の対策設備を解除する」事例は、<strong>1 個体の学習が群れに広がらないが、
        その個体は再侵入を繰り返す</strong>性質があり、被害管理上の重要課題です。
      </p>

      <h2 id="social">個体識別と社会的認知</h2>
      <p>
        クマは単独性の動物と思われがちですが、社会的認知能力も研究が進んでいます。
      </p>
      <ul>
        <li>
          <strong>個体識別</strong>: 嗅覚 + 視覚で他個体を識別。ある研究では母グマが
          5 年前に別れた娘グマを優先的に許容することが観察された
        </li>
        <li>
          <strong>階層認識</strong>: サケ遡上河川では、優位個体が好漁場を占有し、
          劣位個体は順番待ち。優位順は反復的に維持される
        </li>
        <li>
          <strong>子グマの社会学習</strong>: 子グマは母から 1〜2.5 年にわたって食物選好・採餌技術・
          危険回避を学ぶ。<strong>「人慣れ」も母から子へ伝達される</strong>
        </li>
      </ul>

      <h2 id="learning">リスク学習と人慣れの非対称性</h2>
      <p>
        被害管理上、最も重要なのが<strong>「リスク学習の非対称性」</strong>です。
        以下の事実が研究で繰り返し確認されています。
      </p>
      <ul>
        <li>
          <strong>正の強化 (食物を得る) は 1〜2 回で学習</strong>:
          ゴミ箱から食物を得たクマは、その場所を高確率で再訪
        </li>
        <li>
          <strong>負の強化 (痛い・怖い経験) は 10 回以上必要なことがある</strong>:
          ゴム弾・大きな音などの忌避刺激は、繰り返し与えなければ学習効果が定着しない
        </li>
        <li>
          <strong>条件付き忌避</strong>: 「人 = 危険」よりも「特定の場所・状況 = 危険」を学ぶ傾向。
          同じ場所で繰り返し追い払うことが効果的
        </li>
      </ul>
      <p>
        この非対称性が、いったん人慣れした個体が
        <strong>「学習された問題個体 (food-conditioned bear)」</strong>として
        慢性的な被害源になる主因です。多くの国の管理ガイドラインは「<strong>人慣れさせない予防</strong>」を
        最優先に置いており、これはクマの認知能力に対する敬意の表れでもあります。
      </p>

      <h2 id="implications">クマ管理への含意</h2>
      <ul>
        <li>
          <strong>予防が圧倒的に有効</strong>:
          学習されにくい忌避より、最初に食物を覚えさせない管理が桁違いに費用対効果が高い
        </li>
        <li>
          <strong>ゴミ・残飯・果樹の管理</strong>:
          地区単位で 95% 以上の世帯が対策しないと、1 件の不備が地域全体の問題に発展しうる
        </li>
        <li>
          <strong>「同じ個体」が繰り返し出ている前提で対応</strong>:
          目撃情報が連続するエリアは、複数個体ではなく 1 頭の学習個体の可能性が高い
        </li>
        <li>
          <strong>子グマ単独の処理判断</strong>:
          母グマから引き離された子グマは社会学習が止まり、後に問題個体化するリスクが高い
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマはどれくらい賢いの？ イヌやネコと比べて？",
            a: "課題によりますが、空間記憶・問題解決ではイヌを上回るとされ、数概念ではネコ・イヌを上回り霊長類に近い水準。社会性が限定的なため対人コミュニケーション能力では劣ります。",
            aText: "課題によりますが、空間記憶・問題解決ではイヌを上回るとされ、数概念ではネコ・イヌを上回り霊長類に近い水準。社会性が限定的なため対人コミュニケーション能力では劣ります。",
          },
          {
            q: "ヒグマとツキノワグマで認知能力に差はある？",
            a: "正面比較の論文は少ないが、行動圏のスケール (ヒグマ 200〜2,000 km² vs ツキノワグマ 30〜300 km²) に応じた空間記憶の差はあると推測されます。基本的な学習能力は同水準と考えられます。",
            aText: "正面比較の論文は少ないが、行動圏のスケール (ヒグマ 200〜2,000 km² vs ツキノワグマ 30〜300 km²) に応じた空間記憶の差はあると推測されます。基本的な学習能力は同水準と考えられます。",
          },
          {
            q: "「一度ゴミを覚えたクマは忘れない」は本当？",
            a: "正の強化学習は強固で、数年経っても再訪することが GPS テレメトリーで確認されています。忘却を期待した放置は被害拡大につながる前提で対応する必要があります。",
            aText: "正の強化学習は強固で、数年経っても再訪することが GPS テレメトリーで確認されています。忘却を期待した放置は被害拡大につながる前提で対応する必要があります。",
          },
          {
            q: "鈴・ラジオで「人 = 危険」を学習させられないの？",
            a: "限定的に有効。ただし「鈴の音 = 人 = 食物源」と覚えてしまう個体もおり (ヨセミテで報告)、忌避刺激は文脈依存で効果が変わります。鈴は遭遇回避の補助、根本対策はゴミ・果樹管理です。",
            aText: "限定的に有効。ただし「鈴の音 = 人 = 食物源」と覚えてしまう個体もおり (ヨセミテで報告)、忌避刺激は文脈依存で効果が変わります。鈴は遭遇回避の補助、根本対策はゴミ・果樹管理です。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-learning">クマの学習能力と「問題個体」化</Link> /{" "}
        <Link href="/articles/bear-senses">クマの五感 — 嗅覚・聴覚・視覚の鋭さ</Link> /{" "}
        <Link href="/articles/bear-kidney-nitrogen-recycling">クマの腎機能と窒素リサイクル</Link>
      </p>
    </ArticleShell>
  );
}
