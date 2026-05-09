import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("urban-encounter")!;

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
        <strong>結論</strong>: 市街地・住宅街でクマに遭遇したら、
        <strong>屋内退避 → 110 番 → 自治体通報</strong>の順序が基本。
        山中とは違い、自分で追い払おうとせず、警察・自治体・猟友会の対処を待ちます。
        子供・高齢者・通学路の場面では特に「動かない・建物に入る」を最優先に。
      </p>

      <ArticleToc
        items={[
          { id: "why-urban", title: "なぜ市街地に出てくるのか" },
          { id: "first-action", title: "見かけた瞬間にやること" },
          { id: "with-children", title: "子供がいるとき" },
          { id: "report", title: "通報の流れと使う番号" },
          { id: "avoid", title: "市街地でやってはいけないこと" },
          { id: "after", title: "目撃後の数日間" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-urban">なぜ市街地に出てくるのか</h2>
      <p>
        近年、住宅街・商店街・駅前にもクマの出没が増えています。背景には:
      </p>
      <ul>
        <li>
          <strong>餌場の縮小</strong>:
          山のドングリ・ブナの実が凶作の年は、人里の柿・栗・生ゴミが代替餌になる。
          <Link href="/articles/why-increasing">なぜ出没が増えているのか</Link>を参照。
        </li>
        <li>
          <strong>里山の崩壊</strong>:
          人と山の境界 (緩衝帯) が放棄され、クマが連続的に住宅地まで降りられる経路に。
        </li>
        <li>
          <strong>「人慣れ個体」の増加</strong>:
          一度人里で食料を得たクマは学習し、再来訪する。最も危険なタイプ。
        </li>
        <li>
          <strong>都市部の緑地</strong>:
          公園・河川敷・通学路の街路樹が連続するエリアは「クマの回廊」として機能。
        </li>
      </ul>

      <h2 id="first-action">見かけた瞬間にやること</h2>
      <ol>
        <li>
          <strong>(0 秒) その場で止まる</strong>:
          走らない・大声を出さない。クマがまだ気づいていない可能性もある。
        </li>
        <li>
          <strong>(1 秒) 屋内 / 車内 / 鉄製柵の内側へ静かに移動</strong>:
          コンビニ・住宅・店舗・駐車場の車などに退避。ガラス越しでも一定の安全を確保できる。
        </li>
        <li>
          <strong>(数秒) 周囲に大声で警告</strong>:
          屋内に入ってから「クマ! 入って!」と周囲に知らせる。屋外で叫ぶとクマを刺激する。
        </li>
        <li>
          <strong>(屋内) 110 番</strong>:
          場所・方角・個体の大きさ・人や子供の有無を伝える。
        </li>
        <li>
          <strong>(屋内) 自治体・学校に連絡</strong>:
          通学時間帯なら学校・教育委員会へ。商業地区なら商店会へ。
        </li>
      </ol>

      <h2 id="with-children">子供がいるとき</h2>
      <p>
        通学路・公園・住宅街での「子供 + クマ」は最も警戒すべきパターンです。
      </p>
      <ul>
        <li>
          <strong>子供を抱きかかえる</strong>:
          子供を地面に置かない。叫ばせない。
        </li>
        <li>
          <strong>低い姿勢にしない</strong>:
          屈むとクマの捕食動機を刺激する。立ったまま静かに移動。
        </li>
        <li>
          <strong>近くの大人・店舗に助けを求める</strong>:
          手を上げて静かに合図。
        </li>
        <li>
          <strong>学校・保護者間 LINE で即時共有</strong>:
          後続の子供を巻き込まないため。
        </li>
      </ul>
      <p>
        通学路の事前対策は<Link href="/articles/school-route">通学路のクマ対策</Link>を参照。
      </p>

      <h2 id="report">通報の流れと使う番号</h2>
      <ul>
        <li>
          <strong>110 番</strong>:
          人身危険・近距離 (50m 以内) で目撃した直後。最優先。
        </li>
        <li>
          <strong>119 番</strong>:
          負傷者がいる場合。クマ襲撃後の<Link href="/articles/first-aid">応急処置</Link>と並行。
        </li>
        <li>
          <strong>市町村の鳥獣担当課・防災担当</strong>:
          危険が薄い目撃 (遠くにいる・離脱を確認した) の情報共有。
        </li>
        <li>
          <strong>くまウォッチの<Link href="/submit">投稿フォーム</Link></strong>:
          地域住民への共有として併用。後日でも遅くない。
        </li>
      </ul>

      <h2 id="avoid">市街地でやってはいけないこと</h2>
      <ul>
        <li>
          <strong>近づいて写真を撮る</strong>:
          クマの捕食動機を刺激し、SNS でも「危険行為」として批判される。
        </li>
        <li>
          <strong>追いかけて様子を見る</strong>:
          専門家でない人の追跡は事故誘発要因。
        </li>
        <li>
          <strong>家庭ゴミ・生ゴミを通常通り出す</strong>:
          目撃のあった日は収集まで屋内保管。
        </li>
        <li>
          <strong>柿・栗の落果を放置</strong>:
          「クマの餌場」を作らないため、収穫物・落果は同日中に片付ける。
          詳細は<Link href="/articles/home-protection">自宅・果樹園のクマ対策</Link>。
        </li>
        <li>
          <strong>「もう離れたから大丈夫」と判断</strong>:
          一度入ったエリアにクマは数日間戻ります。
        </li>
      </ul>

      <h2 id="after">目撃後の数日間</h2>
      <ul>
        <li>
          <strong>同じ時間帯・同じルートを避ける</strong>:
          クマは規則的に行動圏を巡回します。
        </li>
        <li>
          <strong>家族で目撃マップを共有</strong>:
          自治体の防災メール、くまウォッチの<Link href="/">出没マップ</Link>を活用。
        </li>
        <li>
          <strong>近隣の餌場対策</strong>:
          柿の木に電気柵を設置するなど、再来訪を防ぐ
          (<Link href="/articles/electric-fence">電気柵の張り方</Link>)。
        </li>
        <li>
          <strong>登下校・買い物時間を調整</strong>:
          薄明薄暮を避け、複数人で行動。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "市街地でもスプレーは持ち歩いた方がいい?",
            a: (
              <>
                クマ目撃が頻発するエリアの住民・通勤者ならホルスター式の小型スプレーを腰に。
                ただし都市部では人混みがあり噴射方向に気を付ける必要があるため、
                屋内退避が間に合うなら退避を最優先にしてください。
              </>
            ),
            aText:
              "目撃が頻発するエリアでは小型スプレーの腰携行が有効ですが、都市部では人混みに気をつけ、屋内退避が間に合うなら退避を最優先にしてください。",
          },
          {
            q: "車内ならクマから安全?",
            a: (
              <>
                ドアロック・窓閉めの状態なら一定の安全。ただしクマがフロントガラスを叩く事例もあり、
                可能なら車を発進させて距離を取るのが理想。発進前に周囲にクマがいないか確認してから動かします。
              </>
            ),
            aText:
              "ドアロック・窓閉めなら一定の安全ですが、フロントガラスを叩く事例もあります。発進前に周囲を確認してから車を動かすのが理想です。",
          },
          {
            q: "目撃したが警察に通報すべきか迷うレベルだった",
            a: (
              <>
                危険があれば必ず 110 番。判断に迷うレベルの目撃でも、市町村の鳥獣担当課には共有してください。
                数日内の市街地巡回・餌場対策の判断材料になります。
                くまウォッチの<Link href="/submit">投稿</Link>でも問題ありません。
              </>
            ),
            aText:
              "危険があれば必ず 110 番。判断に迷うレベルでも市町村の鳥獣担当課には共有してください。くまウォッチの投稿フォームでも問題ありません。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "市街地でクマを見たら、屋内退避 → 110 番 → 自治体通報の順序。",
          "走らない・大声を出さない・近づいて撮影しない。",
          "子供は抱きかかえて、屈まずに立ったまま屋内へ。",
          "目撃のあった日は生ゴミ・落果を屋内保管し、餌場を作らない。",
          "数日は同じ時間帯のルートを避け、複数人で行動する。",
        ]}
        footer="一度市街地に降りたクマは数日間戻ります。家族で目撃マップを共有して再来訪に備えましょう。"
      />
    </ArticleShell>
  );
}
