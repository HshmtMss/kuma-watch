import type { Metadata } from "next";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("species-difference")!;

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
      <h2>日本にいる「クマ」は 2 種類</h2>
      <p>
        日本には大きく分けて 2 種類のクマが生息しています。
        <strong>ツキノワグマ (アジアクロクマ)</strong> は本州・四国に、
        <strong>ヒグマ (エゾヒグマ)</strong> は北海道に分布しており、生息域は重なりません。
        この 2 種は体格・性格・遭遇時の対処方法が大きく違うため、訪れる地域によって対策を変える必要があります。
      </p>

      <h2>サイズの違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>: オス成獣 80〜120kg、体長 1.2〜1.6m。
          胸に三日月型の白斑が特徴 (個体差あり、無い個体もいる)
        </li>
        <li>
          <strong>ヒグマ</strong>: オス成獣 150〜400kg、体長 2.0〜2.3m。
          肩のコブ (筋肉質) が目印。日本最大の陸上動物
        </li>
      </ul>
      <p>
        体重差は 3〜4 倍。立ち上がるとヒグマは 2.5m を超え、人間が抗うのは事実上不可能です。
      </p>

      <h2>分布の違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>: 本州 (青森〜中国地方)、四国 (剣山系のごく少数)。
          九州では絶滅。日本の自治体の大半で「クマ」といえばこちら
        </li>
        <li>
          <strong>ヒグマ</strong>: 北海道全域。札幌・旭川・函館などの市街地周辺にも分布
        </li>
      </ul>
      <p>
        本州で「クマ」と聞けばツキノワグマ、北海道での「クマ」はヒグマです。沖縄にはクマはいません。
      </p>

      <h2>性格・行動の違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>:
          基本的に臆病で、人間を避ける傾向が強い。襲撃の多くは「驚かせた」ケース。
          子グマを連れた母親、または人間の食物に執着した個体は別
        </li>
        <li>
          <strong>ヒグマ</strong>:
          臆病な個体が多いが、攻撃性は ツキノワグマより明らかに高い。
          一部の個体は「捕食目的」で人間を襲うケースがあり、過去には集団襲撃事件 (三毛別事件・福岡大学ワンゲル部事件) も起きている
        </li>
      </ul>

      <h2>遭遇時の対処の違い (重要)</h2>
      <p>
        ここが最も重要な違いです。襲われそうになったときの対応が真逆になることがあります。
      </p>

      <h3>ツキノワグマに襲われた場合</h3>
      <p>
        基本は「<strong>動かないフリ</strong>」が有効です。両手で頭と首を守って伏せ、リュックを背負ったまま固まります。
        ツキノワグマの多くは防衛行動として襲ってくるため、抵抗が止まると関心が薄れて立ち去ります。
        反撃しても体格差がそれほど無いとはいえ、爪の威力は人間の比ではありません。
      </p>

      <h3>ヒグマに襲われた場合</h3>
      <p>
        ヒグマは判断が分かれます。
      </p>
      <ul>
        <li>
          <strong>防衛襲撃 (子グマ・餌の防御)</strong>: 動かないフリが有効
        </li>
        <li>
          <strong>捕食襲撃</strong>: 反撃必須。鼻先・目を狙って棒・石・スプレーで全力抵抗
        </li>
      </ul>
      <p>
        判別が難しいため、ヒグマの場合は「動かないフリ → 効かなければ反撃」の順で対応すると判断されています。
        ヒグマが執拗に近寄ってきたり、伏せた人間を引きずり出そうとした場合は捕食目的の可能性が高く、ためらわず反撃に切り替えてください。
      </p>

      <h2>食性の違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>:
          雑食だが植物食寄り (90% 以上)。ドングリ・ブナの実・果実・蜂の巣・若芽・昆虫
        </li>
        <li>
          <strong>ヒグマ</strong>:
          より動物食寄り。シカ・サケなどを狩ることもある。北海道のヒグマがサケ漁をする映像は有名
        </li>
      </ul>
      <p>
        ヒグマがより危険とされる理由の一つは、この捕食性の高さに由来します。
      </p>

      <h2>地域別の事前情報収集を</h2>
      <p>
        本州・四国を訪れるならツキノワグマを、北海道ならヒグマを想定して装備と知識を整えてください。
        どちらの種でも、出発前に目的地周辺の出没情報を確認しておくことが最善の予防です。
        KumaWatch の <a href="/place/北海道">北海道のページ</a>、
        <a href="/place/長野県">長野県のページ</a> など、各都道府県・市町村のページから直近の目撃を確認できます。
      </p>

      <p>
        いずれの種でも、遭遇時の距離別対処は <a href="/articles/encounter">クマに遭遇したら</a>
        を、装備の選び方は <a href="/articles/bear-spray">クマよけスプレーの使い方</a>、
        <a href="/articles/bear-bell">クマ鈴の効果</a> を参照してください。
      </p>
    </ArticleShell>
  );
}
