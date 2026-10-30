import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
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
      <p className="lead">
        <strong>結論</strong>: 本州・四国は<strong>ツキノワグマ</strong>、北海道は<strong>ヒグマ</strong>。
        体格はヒグマが 2 倍前後大きく、性質にも違いがあります。
        ただし遭遇したときの基本の対処は、どちらの種でも同じです。
        訪れる地域にどちらのクマがいるかを知り、正しい対処を身につけておきましょう。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            <strong>本州・四国はツキノワグマ、北海道はヒグマ</strong>。ヒグマは体重が2倍前後。
          </>,
          <>
            遭遇時の<strong>基本の対処はどちらも同じ</strong>。走らず、見ながらゆっくり離れる。
          </>,
          <>
            襲われたら<strong>防衛的な攻撃なら防御姿勢、執拗・捕食的な攻撃なら反撃</strong>。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "two-species", title: "日本にいる「クマ」は 2 種類" },
          { id: "size", title: "サイズの違い" },
          { id: "distribution", title: "分布の違い" },
          { id: "behavior", title: "性格・行動の違い" },
          { id: "response", title: "遭遇時の対処 — 基本は同じ (重要)" },
          { id: "diet", title: "食性の違い" },
          { id: "regional", title: "地域別の事前情報収集を" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="two-species">日本にいる「クマ」は 2 種類</h2>
      <p>
        日本には大きく分けて 2 種類のクマが生息しています。
        <strong>ツキノワグマ (アジアクロクマ)</strong> は本州・四国に、
        <strong>ヒグマ (エゾヒグマ)</strong> は北海道に分布しており、生息域は重なりません。
        この 2 種は体格や性質に違いがありますが、遭遇時の基本の対処は共通です。
      </p>

      <h2 id="size">サイズの違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>: 体重 70〜120kg、体長 120〜145cm 程度。
          胸に三日月型の白斑が特徴 (個体差あり、無い個体もいる)
        </li>
        <li>
          <strong>ヒグマ</strong>: 体重 150〜300kg (最大 400kg)、体長 180〜200cm 程度。
          肩の盛り上がり (筋肉) が目印。日本最大の陸上動物
        </li>
      </ul>
      <p>
        数値は環境省の資料によるもので、体重はヒグマが 2 倍前後。メスはどちらもオスより小さくなります。
      </p>

      <h2 id="distribution">分布の違い</h2>
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

      <h2 id="behavior">性格・行動の違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>:
          基本的に臆病で、人間を避ける傾向が強い。襲撃の多くは「驚かせた」ケース。
          子グマを連れた母親、または人間の食物に執着した個体は別
        </li>
        <li>
          <strong>ヒグマ</strong>:
          臆病な個体が多いが、体が大きいぶん襲われたときの被害は重くなりやすい。
          人間を執拗に襲うケースもあり、過去には複数の人が犠牲になった事件 (三毛別事件・福岡大学ワンゲル部事件) も起きている
        </li>
      </ul>

      <h2 id="response">遭遇時の対処の違い (重要)</h2>
      <p>
        体格や性質に違いはあっても、<strong>遭遇時の基本の対処はツキノワグマでもヒグマでも同じ</strong>です。
      </p>
      <ul>
        <li>
          <strong>遭遇したら</strong>: 走らない・背を向けない。クマを見ながらゆっくり離れる
        </li>
        <li>
          <strong>突進されたら</strong>: クマスプレーを顔に向けて噴射する
        </li>
        <li>
          <strong>防衛的な攻撃 (驚かせた・子連れなど) で接触が避けられないとき</strong>:
          うつ伏せになり、両手で首の後ろを守る防御姿勢をとる (リュックは背負ったまま)
        </li>
        <li>
          <strong>執拗・捕食的な攻撃</strong> (つけ回す・伏せても攻撃が続く・引きずる・テントに入ってくるなど):
          顔や鼻を狙って反撃する
        </li>
      </ul>
      <p>
        ツキノワグマでも、人を執拗に襲った事例は起きています。「ツキノワグマだから伏せていれば大丈夫」とは考えず、
        攻撃の様子で防御姿勢と反撃を切り替えてください。
      </p>

      <h2 id="diet">食性の違い</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>:
          雑食だが、食べ物の大部分は植物。ドングリ・ブナの実・果実・若芽のほか、アリやハチなどの昆虫も食べる
        </li>
        <li>
          <strong>ヒグマ</strong>:
          雑食で、植物を中心にしながらもツキノワグマより動物質を多く食べる。シカを食べたりサケを捕ったりすることもある
        </li>
      </ul>

      <h2 id="regional">地域別の事前情報収集を</h2>
      <p>
        本州・四国を訪れるならツキノワグマを、北海道ならヒグマを想定して装備と知識を整えてください。
        どちらの種でも、出発前に目的地周辺の出没情報を確認しておくことが最善の予防です。
        くまウォッチの <Link href="/place/北海道">北海道のページ</Link>、
        <Link href="/place/長野県">長野県のページ</Link> など、各都道府県・市町村のページから直近の目撃を確認できます。
      </p>

      <p>
        いずれの種でも、遭遇時の距離別対処は <Link href="/articles/encounter">クマに遭遇したら</Link>
        を、装備の選び方は <Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>、
        <Link href="/articles/bear-bell">クマ鈴の効果</Link> を参照してください。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "ツキノワグマとヒグマ、どちらが危険?",
            a: (
              <>
                体が大きいぶん、襲われたときの被害はヒグマの方が重くなりやすいと言えます。ただし、本州のツキノワグマでも人身被害は毎年多く、死亡事故も発生しています。「自分が訪れる地域のクマ」に対して正しく備えるのが大切です。
              </>
            ),
            aText:
              "体が大きいぶん、襲われたときの被害はヒグマの方が重くなりやすいと言えます。ただし本州のツキノワグマでも人身被害は毎年多く、死亡事故も発生しています。自分が訪れる地域のクマに対して正しく備えるのが大切です。",
          },
          {
            q: "ヒグマに襲われたら寝たフリしていいの?",
            a: (
              <>
                「寝たフリ」ではなく、うつ伏せで両手で首の後ろを守る防御姿勢をとります。驚かせた・子連れなどの防衛的な攻撃で接触が避けられないときに有効です。つけ回す・伏せても攻撃が続く・引きずるなど執拗・捕食的な攻撃なら、顔や鼻を狙って反撃してください。これはツキノワグマでも同じです。
              </>
            ),
            aText:
              "寝たフリではなく、うつ伏せで両手で首の後ろを守る防御姿勢をとります。驚かせた・子連れなどの防衛的な攻撃で接触が避けられないときに有効です。つけ回す・伏せても攻撃が続く・引きずるなど執拗・捕食的な攻撃なら、顔や鼻を狙って反撃してください。これはツキノワグマでも同じです。",
          },
          {
            q: "ツキノワグマに胸の白斑がない個体もいる?",
            a: (
              <>
                います。三日月型の白斑は個体差があり、薄い・ない・部分的にしかないなどのバリエーションがあります。白斑の有無で種を判定するのは確実ではないので、地域 (本州・四国 = ツキノワグマ、北海道 = ヒグマ) で判断するのが基本です。
              </>
            ),
            aText:
              "います。三日月型の白斑は個体差があり、薄い・ない・部分的にしかないなどのバリエーションがあります。白斑の有無で種を判定するのは確実ではないので、地域 (本州・四国 = ツキノワグマ、北海道 = ヒグマ) で判断するのが基本です。",
          },
          {
            q: "九州や沖縄にもクマはいる?",
            a: (
              <>
                九州のツキノワグマは 2012 年に環境省のレッドリストで絶滅とされました。沖縄には生息していません。
              </>
            ),
            aText:
              "九州のツキノワグマは 2012 年に環境省のレッドリストで絶滅とされました。沖縄には生息していません。",
          },
        ]}
      />
    </ArticleShell>
  );
}
