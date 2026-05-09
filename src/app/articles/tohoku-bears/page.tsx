import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("tohoku-bears")!;

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
        <strong>結論</strong>: 東北 6 県は本州ツキノワグマの主要生息地で、
        近年は<strong>秋田県の人身事故が全国最多</strong>を更新し続け、
        岩手・山形でも市街地出没が常態化しています。
        奥羽山脈・出羽山地・北上高地という大面積の山林と、
        過疎化で里山が放置されている社会条件が重なった結果です。
        県別の事情・最新の傾向・地域固有のリスクを整理します。
      </p>

      <ArticleToc
        items={[
          { id: "overview", title: "東北全体の状況 — 数字で見る" },
          { id: "akita", title: "秋田県 — 全国最多の人身事故" },
          { id: "iwate", title: "岩手県 — 北上高地と市街地出没" },
          { id: "aomori", title: "青森県 — 白神・下北の生息地" },
          { id: "yamagata", title: "山形県 — 月山・蔵王・果樹園被害" },
          { id: "fukushima", title: "福島県 — 阿武隈・会津の動向" },
          { id: "miyagi", title: "宮城県 — 仙台近郊への南下" },
          { id: "what-to-do", title: "東北で活動する人がやるべきこと" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">東北全体の状況 — 数字で見る</h2>
      <p>
        東北 6 県には推定 5,000〜8,000 頭のツキノワグマが生息しているとされ、
        本州・四国の総個体数の半数近くを占めます。出没・人身事故も全国の半数前後がこの地域に集中。
        ヒグマは生息していないので、対象は基本的にツキノワグマのみです。
      </p>
      <ul>
        <li>
          <strong>主要生息域</strong>: 奥羽山脈 (青森〜福島の脊梁山脈)、
          出羽山地 (秋田〜山形)、北上高地 (岩手〜宮城)。
        </li>
        <li>
          <strong>近年の人身事故</strong>: 秋田・岩手・山形が常に上位。
          2023〜2025 年は記録更新が続いています。
        </li>
        <li>
          <strong>背景</strong>: ブナ・ナラ凶作、過疎化、耕作放棄地の拡大、
          人口減少による里山の機能低下。
          詳細は<Link href="/articles/why-increasing">なぜ出没が増えているのか</Link>。
        </li>
      </ul>

      <h2 id="akita">秋田県 — 全国最多の人身事故</h2>
      <p>
        秋田県は近年、ツキノワグマによる人身事故件数が全国最多を続けています。
      </p>
      <ul>
        <li>
          <strong>主な発生</strong>: 県北 (鹿角・大館・北秋田) と県南山間部 (湯沢・横手)。
        </li>
        <li>
          <strong>事故シーン</strong>:
          山菜採り・きのこ狩り・農作業中が大半。住宅地への出没も急増。
        </li>
        <li>
          <strong>象徴的な過去事故</strong>:
          1970 年の十和利山熊襲撃事件 (詳細は
          <Link href="/articles/historic-incidents">過去の重大事故</Link>)、
          2016 年のタケノコ採り連続襲撃事件。
        </li>
        <li>
          <strong>地域の取り組み</strong>:
          集落単位の<Link href="/articles/electric-fence">電気柵</Link>整備、
          猟友会と自治体の連携駆除、防災メールでのリアルタイム共有。
        </li>
      </ul>

      <h2 id="iwate">岩手県 — 北上高地と市街地出没</h2>
      <p>
        岩手は本州最大級の山林面積を持ち、ツキノワグマの個体数も多い県です。
      </p>
      <ul>
        <li>
          <strong>主な生息域</strong>: 奥羽山脈 (西側) と北上高地 (東側) の二大山塊。
        </li>
        <li>
          <strong>近年の特徴</strong>:
          盛岡市・花巻市・遠野市などの市街地・住宅街での目撃が常態化。
          通学路出没も年に数十件規模。
        </li>
        <li>
          <strong>農業被害</strong>:
          リンゴ・梨・トウモロコシ被害が多く、果樹園経営の悩みに。
        </li>
        <li>
          <strong>三陸海岸沿い</strong>:
          海岸近くまで出没する個体が報告されており、観光地でも油断は禁物。
        </li>
      </ul>

      <h2 id="aomori">青森県 — 白神・下北の生息地</h2>
      <p>
        青森は世界遺産・白神山地のブナ原生林を擁し、ツキノワグマの良好な生息環境。
      </p>
      <ul>
        <li>
          <strong>主要生息域</strong>: 白神山地、八甲田、下北半島、岩木山周辺。
        </li>
        <li>
          <strong>下北半島の個体群</strong>: 本州ツキノワグマの北限個体群。
          孤立しやすく、地域個体群として保護優先度が高い。
        </li>
        <li>
          <strong>登山シーズン</strong>:
          白神・八甲田の登山道では、入山届と複数人行動を徹底。
        </li>
        <li>
          <strong>果樹被害</strong>: リンゴ栽培地帯での電気柵整備が進む。
        </li>
      </ul>

      <h2 id="yamagata">山形県 — 月山・蔵王・果樹園被害</h2>
      <ul>
        <li>
          <strong>主要生息域</strong>: 月山・葉山・朝日連峰・吾妻連峰・蔵王。
        </li>
        <li>
          <strong>農業被害</strong>:
          サクランボ・ラ・フランス・リンゴ・柿などの果樹園被害が深刻。
          天童市・東根市・寒河江市の果樹地帯で電気柵設置が広がっています。
        </li>
        <li>
          <strong>登山リスク</strong>:
          朝日連峰・飯豊連峰は上級者向け縦走路で、エスケープ困難なエリアが多い。
          スプレーと
          <Link href="/articles/encounter">遭遇時の対処</Link>を必修。
        </li>
        <li>
          <strong>市街地出没</strong>: 山形市・上山市の住宅街での目撃が増加傾向。
        </li>
      </ul>

      <h2 id="fukushima">福島県 — 阿武隈・会津の動向</h2>
      <ul>
        <li>
          <strong>主要生息域</strong>: 会津 (奥羽山脈側) と中通り西部、阿武隈高地。
        </li>
        <li>
          <strong>特徴</strong>:
          阿武隈高地は標高が低く里山的な環境のため、人里に近い遭遇が多い。
        </li>
        <li>
          <strong>会津の山岳</strong>:
          飯豊連峰、磐梯山、安達太良山など登山対象が多く、観光・登山リスク高。
        </li>
        <li>
          <strong>中通り南部</strong>: 茨城県北との県境エリアでも目撃情報あり。
        </li>
      </ul>

      <h2 id="miyagi">宮城県 — 仙台近郊への南下</h2>
      <ul>
        <li>
          <strong>主要生息域</strong>:
          奥羽山脈 (船形・栗駒・蔵王の県境) と、北上高地南端の登米・栗原。
        </li>
        <li>
          <strong>市街地出没</strong>:
          仙台市青葉区・太白区など仙台市内住宅地への出没が常態化。
          通学路や公園での目撃情報があり、子供のいる世帯への影響大。
        </li>
        <li>
          <strong>登山地</strong>:
          蔵王・船形・栗駒で目撃が常に。
          仙台都市圏からのアクセスがよく、登山者が多い分注意が必要。
        </li>
      </ul>

      <h2 id="what-to-do">東北で活動する人がやるべきこと</h2>
      <ul>
        <li>
          <strong>市町村の防災メール登録</strong>:
          目撃情報がリアルタイムで届きます。県外からの観光・登山者も登録可。
        </li>
        <li>
          <strong>くまウォッチの<Link href="/">出没マップ</Link>確認</strong>:
          直近の目撃地点を入山前にチェック。
        </li>
        <li>
          <strong>クマよけスプレーの携行</strong>:
          東北の山で活動する人は腰のホルスター必須。
          <Link href="/articles/bear-spray">使い方ガイド</Link>。
        </li>
        <li>
          <strong>山菜・きのこ採りは複数人で午前中</strong>:
          特に秋田・岩手・山形では単独行を避ける。
        </li>
        <li>
          <strong>果樹園・農作業は電気柵 + 匂い管理</strong>:
          <Link href="/articles/electric-fence">電気柵の張り方</Link>と
          <Link href="/articles/home-protection">餌場を作らない管理</Link>。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "東北で一番危ない県はどこ?",
            a: (
              <>
                人身事故件数では秋田県が突出しています。次いで岩手・山形・福島。
                ただし「行動範囲のクマ密度」と「単独行で山に入る頻度」の組み合わせでリスクが決まるため、
                どの県でも警戒は必要です。県北山間部が共通して高リスク。
              </>
            ),
            aText:
              "人身事故件数では秋田県が突出し、次いで岩手・山形・福島です。ただしリスクは行動範囲のクマ密度と入山頻度で決まるため、どの県でも警戒は必要です。",
          },
          {
            q: "東北のクマはツキノワグマだけ? ヒグマもいる?",
            a: (
              <>
                東北 6 県にいるのはツキノワグマのみで、ヒグマはいません。
                ヒグマの生息域は北海道のみで、本州・四国・九州はツキノワグマです。
                生態と対処の違いは
                <Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link>を参照。
              </>
            ),
            aText:
              "東北 6 県にいるのはツキノワグマのみで、ヒグマはいません。ヒグマは北海道のみに生息します。",
          },
          {
            q: "観光で東北の登山に行くが、特別な準備は必要?",
            a: (
              <>
                スプレー (現地レンタルがある山小屋もあり)、鈴 + ホイッスル、明るい服装、
                複数人での行動を基本に。秋の紅葉登山はハイパーフェイジア期と重なるので
                とくに警戒度を上げてください
                (<Link href="/articles/autumn">秋のクマ対策</Link>)。
              </>
            ),
            aText:
              "スプレー、鈴とホイッスル、明るい服装、複数人での行動を基本に。秋の紅葉登山はハイパーフェイジア期と重なるので警戒度を上げてください。",
          },
          {
            q: "市街地でクマを見かけたらどこに連絡?",
            a: (
              <>
                即時の危険があれば 110 番。子供や高齢者が近くにいる場合も即 110 番。
                危険が薄い目撃情報は市町村の鳥獣担当課か防災担当へ。
                くまウォッチの<Link href="/submit">投稿フォーム</Link>でも記録共有が可能で、
                地域全体の情報源として役立ちます。
              </>
            ),
            aText:
              "即時の危険があれば 110 番、危険が薄い目撃情報は市町村の鳥獣担当課か防災担当へ。くまウォッチの投稿フォームでも共有可能です。",
          },
        ]}
      />
    </ArticleShell>
  );
}
