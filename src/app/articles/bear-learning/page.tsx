import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-learning")!;

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
        クマは犬や霊長類に匹敵する学習能力を持ち、<strong>食物の場所・人の行動パターン・電気柵の弱点</strong>
        を一度学ぶと数年は覚えています。一度市街地に出てゴミ・果樹で成功したクマが何度も同じ場所に来るのは、
        <strong>「人慣れ (habituation)」と「餌付け学習 (food conditioning)」</strong>という
        獣医行動学のメカニズムによります。本記事ではクマの学習能力と、アーバンベア化を防ぐ知見を整理します。
      </p>

      <ArticleToc
        items={[
          { id: "cognition", title: "クマの認知能力 — どれくらい賢いか" },
          { id: "habituation", title: "人慣れ (habituation) — 怖くなくなる過程" },
          { id: "food-conditioning", title: "餌付け学習 — 最も問題が大きい学習" },
          { id: "spatial-memory", title: "空間記憶 — 「あの場所」を覚えている" },
          { id: "fence-learning", title: "電気柵を学習で突破するクマ" },
          { id: "social-learning", title: "母子の社会的学習" },
          { id: "prevention", title: "学習を起こさせない対策" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="cognition">クマの認知能力 — どれくらい賢いか</h2>
      <p>
        クマの脳重量は体重比で大型肉食獣の中でも上位、認知行動研究では犬や類人猿に匹敵する能力が示されています。
      </p>
      <ul>
        <li>
          <strong>道具使用</strong>: 北米のヒグマで「岩で頭をこする」「枝で蜂の巣を叩く」などの観察例
        </li>
        <li>
          <strong>数の認識</strong>: 飼育下のアメリカクロクマが「多い・少ない」の弁別課題を 80% の正答率で解いた研究
        </li>
        <li>
          <strong>因果関係の理解</strong>: ロープを引くと餌が出る仕組みを 3〜5 試行で学習
        </li>
        <li>
          <strong>遅延報酬</strong>: 「いま小さな餌 vs 数分後に大きな餌」を選ぶ実験で大きな餌を選ぶ能力
        </li>
      </ul>
      <p>
        これらの認知能力は、雑食性 × 季節変動の大きい食物資源を最適に利用するための進化的適応と考えられます。
      </p>

      <h2 id="habituation">人慣れ (habituation) — 怖くなくなる過程</h2>
      <p>
        <strong>人慣れ (habituation)</strong> は「何度も同じ刺激に晒されると反応が弱まる」基本的な学習現象。
        クマが本来持つ「人を避ける」本能が、繰り返しの人接触で薄れていきます。
      </p>
      <p>
        典型的なプロセス:
      </p>
      <ol>
        <li>
          初回: 人を見て即座に逃走
        </li>
        <li>
          2〜5 回目: 人を見ても 50m 程度の距離は保ったまま観察、警戒
        </li>
        <li>
          10〜20 回目: 距離 10〜20m まで近づくこともある
        </li>
        <li>
          50 回以上: 人を「危険ではない物体」と認識、無視
        </li>
      </ol>
      <p>
        人慣れだけでは積極的な攻撃には繋がりませんが、<strong>距離が縮まることで遭遇事故・餌付け事故のリスクが上がります</strong>。
        観光地・登山口で人をじっと見ているクマは、まさにこの状態の典型例です。
      </p>

      <h2 id="food-conditioning">餌付け学習 — 最も問題が大きい学習</h2>
      <p>
        <strong>餌付け学習 (food conditioning)</strong> は、特定の場所や対象に「食物」を結びつけて学習する強力なメカニズム。
        人慣れより数倍も深刻で、一度学習すると消去 (extinction) が非常に困難です。
      </p>
      <ul>
        <li>
          <strong>ゴミ漁り</strong>: 集落のゴミステーションで一度高カロリー食物 (生ゴミ・余ったご飯) を得たクマは、
          数キロ離れた場所からでも同じゴミ場に通うようになる
        </li>
        <li>
          <strong>果樹園</strong>: 一度リンゴ・カキを食べた個体は翌年同じ時期に必ず戻る
        </li>
        <li>
          <strong>キャンプ場</strong>: テントサイトの食料に学習したクマは、人の有無に関わらず夜間侵入する
        </li>
        <li>
          <strong>養蜂・養魚</strong>: ハチミツ・養魚場のサーモンは特に強い学習を起こす
        </li>
      </ul>
      <p>
        食物の単一の成功体験で、行動パターンが半永久的に変わります。
        「人 = 餌」の連合が成立した個体は、捕獲・移送しても元の場所に戻ろうとし、
        最終的に駆除対象となるケースが多いのが現実です。
      </p>

      <h2 id="spatial-memory">空間記憶 — 「あの場所」を覚えている</h2>
      <p>
        クマは広大な行動圏内で<strong>数百か所の食物地点を記憶</strong>しています。
        記憶できる情報は次の通り。
      </p>
      <ul>
        <li>季節別に実る果実の場所と熟す時期</li>
        <li>過去にサケが多かった川の区間</li>
        <li>水場・休憩場所・冬眠候補地</li>
        <li>過去の遭遇地点 (回避用)</li>
      </ul>
      <p>
        北米の追跡調査では、ヒグマが<strong>10〜15 年前に訪れた果樹園</strong>に
        ピンポイントで戻った例も報告されています。
        この記憶力こそがクマの生存戦略の核であり、同時にアーバンベア化を加速させる要因でもあります。
      </p>

      <h2 id="fence-learning">電気柵を学習で突破するクマ</h2>
      <p>
        電気柵は最も効果的なクマ対策の一つですが、学習能力の高いクマは弱点を見つけて突破することがあります。
      </p>
      <ul>
        <li>
          <strong>地面の隙間を掘る</strong>: 柵下に隙間があれば下から侵入
        </li>
        <li>
          <strong>枝越し・倒木越し</strong>: 倒れた枝を経由して通電部を避ける
        </li>
        <li>
          <strong>電源 OFF タイミングの学習</strong>: 古い電池の電源が弱まる時期を察知
        </li>
        <li>
          <strong>毛による絶縁</strong>: 冬毛の厚いクマは電圧が弱い柵を「ちょっと痺れる」程度に感じて慣れる
        </li>
      </ul>
      <p>
        したがって電気柵は「設置すれば終わり」ではなく、<strong>定期的な電圧測定・草刈り・電池交換</strong>
        を含めた継続管理が学習による突破を防ぐ鍵です。
        詳しくは <Link href="/articles/electric-fence">電気柵の効果と運用</Link> を参照。
      </p>

      <h2 id="social-learning">母子の社会的学習</h2>
      <p>
        子グマは母グマと一緒に過ごす 1.5〜3 年間で、生存に必要な技術を観察学習で身につけます。
      </p>
      <ul>
        <li>
          <strong>食物の選び方</strong>: 季節別に何を食べるか、どこに行くか
        </li>
        <li>
          <strong>巣穴の作り方</strong>: 母グマが選ぶ立地・掘り方を観察
        </li>
        <li>
          <strong>危険の認識</strong>: 人・他のクマ・蜂の巣など何を避けるか
        </li>
        <li>
          <strong>狩猟技術</strong>: サケを捕る・果実を採る・蜂の巣を壊す
        </li>
      </ul>
      <p>
        重要なのは、<strong>「人を恐れない母グマ」の子は同じく人を恐れない</strong>ということ。
        アーバンベア化した母グマの子は、生涯にわたって市街地利用するアーバンベアになりやすい。
        これが世代を超えてアーバンベア問題が深刻化する一因です。
      </p>

      <h2 id="prevention">学習を起こさせない対策</h2>
      <p>
        クマの学習を防ぐ・止める原則は次の通り。
      </p>
      <ol>
        <li>
          <strong>初回の成功を絶対に許さない</strong>: ゴミ・果樹・養蜂箱の徹底管理。
          一度の成功体験が長期記憶に焼き付く
        </li>
        <li>
          <strong>不快体験で「人 = 嫌な刺激」を強化</strong>: 大きな音・閃光・電気柵で
          人接触を負の体験として学習させる (積極的脅嚇)
        </li>
        <li>
          <strong>群集行動を遮断</strong>: 集落全体で食物管理を徹底し、
          1 軒だけ管理が緩いと「学習源」になる
        </li>
        <li>
          <strong>母子グマの早期対応</strong>: 人慣れした母子は次世代の問題個体を生む。
          母グマの段階で再野生化させる介入が重要
        </li>
        <li>
          <strong>地域全体での情報共有</strong>: 個体識別・行動記録を蓄積し、
          問題個体の早期発見・対応
        </li>
      </ol>

      <ArticleFaq
        items={[
          {
            q: "クマよけスプレーで撃退した個体は、次から人を避ける？",
            a: "嫌悪学習が成立し、人を避けるようになる可能性が高い。ただし複数回のスプレー使用で逆に「人 = スプレー = 走って逃げれば終わる」と学習する個体もいるため、初回の強烈な体験が肝心。",
            aText: "嫌悪学習が成立し、人を避けるようになる可能性が高い。ただし複数回のスプレー使用で逆に「人 = スプレー = 走って逃げれば終わる」と学習する個体もいるため、初回の強烈な体験が肝心。",
          },
          {
            q: "捕獲して山奥に放獣しても戻ってくる？",
            a: "成体は数十 km 離した放獣でも戻ってくる事例が多い。空間記憶と方向感覚で帰巣する習性があり、特に学習した食物地点には強い回帰性を示します。",
            aText: "成体は数十 km 離した放獣でも戻ってくる事例が多い。空間記憶と方向感覚で帰巣する習性があり、特に学習した食物地点には強い回帰性を示します。",
          },
          {
            q: "AI で個体識別すれば「問題個体」だけ駆除できる？",
            a: "理論的には可能で、北米の一部地域で実装され始めています。獣医工学ラボのクマ検知 AI も、こうした個体識別 + 行動履歴での選択的対応を目指す方向性です。",
            aText: "理論的には可能で、北米の一部地域で実装され始めています。獣医工学ラボのクマ検知 AI も、こうした個体識別 + 行動履歴での選択的対応を目指す方向性です。",
          },
          {
            q: "クマは「クマ鈴」の音を学習しない？",
            a: "「鈴の音 = 人がいる、避ける」と学習する個体もいれば、「鈴 = ザックに食物」と逆方向に学習する個体もいる。地域・個体差が大きいテーマです。",
            aText: "「鈴の音 = 人がいる、避ける」と学習する個体もいれば、「鈴 = ザックに食物」と逆方向に学習する個体もいる。地域・個体差が大きいテーマです。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/urban-encounter">アーバンベアと市街地遭遇</Link> /{" "}
        <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link> /{" "}
        <Link href="/articles/electric-fence">電気柵の効果と運用</Link>
      </p>
    </ArticleShell>
  );
}
