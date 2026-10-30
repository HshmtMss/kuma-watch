import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        人身被害が当時の過去最多となった 2023 年度は<strong>秋田県 (70 人) と岩手県 (49 人)</strong> に被害が集中し、
        2025 年度も東北を中心に再び大量出没が起きました。
        奥羽山脈・出羽山地・北上高地という大面積の山林と、
        過疎化で里山が放置されている社会条件が重なった結果です。
        県別の事情・最新の傾向・地域固有のリスクを整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            東北6県は<strong>本州ツキノワグマの主要生息地</strong>。
          </>,
          <>
            <strong>2023 年度・2025 年度は東北を中心に大量出没</strong>。2023 年度の人身被害は秋田県が全国最多。
          </>,
          <>
            <strong>大面積の山林＋過疎で里山放置</strong>という社会条件が重なった結果。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "東北全体の状況 — 数字で見る" },
          { id: "akita", title: "秋田県 — 2023 年度は人身被害が全国最多" },
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
        東北 6 県は本州のツキノワグマの主要な生息地で、
        出没・人身被害の多い年はこの地域に被害が集中します。
        ヒグマは生息していないので、対象は基本的にツキノワグマのみです。
      </p>
      <ul>
        <li>
          <strong>主要生息域</strong>: 奥羽山脈 (青森〜福島の脊梁山脈)、
          出羽山地 (秋田〜山形)、北上高地 (岩手〜宮城)。
        </li>
        <li>
          <strong>近年の人身被害</strong>: 2023 年度は全国 219 人のうち秋田県 70 人・岩手県 49 人。
          2025 年度は全国の人身被害者数が 238 人となり、過去最多を更新しました (環境省)。
        </li>
        <li>
          <strong>背景</strong>: ブナ・ナラ凶作、過疎化、耕作放棄地の拡大、
          人口減少による里山の機能低下。
          詳細は<Link href="/articles/why-increasing">なぜ出没が増えているのか</Link>。
        </li>
      </ul>

      <h2 id="akita">秋田県 — 2023 年度は人身被害が全国最多</h2>
      <p>
        秋田県は 2023 年度、ツキノワグマによる人身被害者数が 70 人と全国最多でした。
      </p>
      <ul>
        <li>
          <strong>主な発生</strong>: 県北 (鹿角・大館・北秋田) と県南山間部 (湯沢・横手)。
        </li>
        <li>
          <strong>事故シーン</strong>:
          山菜採り・きのこ狩り・農作業中が多い。住宅地への出没も相次いでいる。
        </li>
        <li>
          <strong>象徴的な過去事故</strong>:
          2016 年に鹿角市の十和利山周辺でタケノコ採りの 4 人が死亡した十和利山熊襲撃事件 (詳細は
          <Link href="/articles/historic-incidents">過去の重大事故</Link>)。
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
          盛岡市・花巻市などの市街地・住宅街でも目撃が相次いでいる。
        </li>
        <li>
          <strong>農業被害</strong>:
          リンゴやトウモロコシなどの農作物被害がある。
        </li>
        <li>
          <strong>三陸沿岸</strong>:
          北上高地は沿岸近くまで山が迫り、沿岸の市町村でも出没がある。
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
          環境省レッドリストで「絶滅のおそれのある地域個体群」に掲載されてきた。
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
          果樹地帯では電気柵による被害対策が進められています。
        </li>
        <li>
          <strong>登山リスク</strong>:
          朝日連峰・飯豊連峰は上級者向け縦走路で、エスケープ困難なエリアが多い。
          スプレーと
          <Link href="/articles/encounter">遭遇時の対処</Link>を必修。
        </li>
        <li>
          <strong>市街地出没</strong>: 山形市など市街地の近くでも目撃がある。
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
          奥羽山脈 (船形・栗駒・蔵王の県境) と、北上高地の南端。
        </li>
        <li>
          <strong>市街地出没</strong>:
          仙台市青葉区・太白区など、仙台市内の住宅地の近くでも出没がある。
          通学路や公園での目撃情報もある。
        </li>
        <li>
          <strong>登山地</strong>:
          蔵王・船形・栗駒で目撃がある。
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
                年によって変わります。人身被害が当時の過去最多となった 2023 年度は秋田県 (70 人)、次いで岩手県 (49 人) が多くなりました。
                ただし木の実の豊凶でどの県も大量出没しうるため、
                どの県でも警戒は必要です。
              </>
            ),
            aText:
              "年によって変わります。2023年度は秋田県 (70人)、次いで岩手県 (49人) が多くなりました。ただし木の実の豊凶でどの県も大量出没しうるため、どの県でも警戒は必要です。",
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
                クマよけスプレー (飛行機には持ち込めないので現地で用意)、鈴 + ホイッスル、
                複数人での行動を基本に。秋の紅葉登山はハイパーフェイジア期と重なるので
                とくに警戒度を上げてください
                (<Link href="/articles/autumn">秋のクマ対策</Link>)。
              </>
            ),
            aText:
              "クマよけスプレー (飛行機には持ち込めないので現地で用意)、鈴とホイッスル、複数人での行動を基本に。秋の紅葉登山はハイパーフェイジア期と重なるので警戒度を上げてください。",
          },
          {
            q: "市街地でクマを見かけたらどこに連絡?",
            a: (
              <>
                市街地でクマを見たら、距離にかかわらず 110 番してください。
                山林での目撃情報は市町村の鳥獣担当課などへ。
                くまウォッチの<Link href="/submit">投稿フォーム</Link>でも記録共有が可能で、
                地域全体の情報源として役立ちます。
              </>
            ),
            aText:
              "市街地でクマを見たら、距離にかかわらず 110 番してください。山林での目撃情報は市町村の鳥獣担当課などへ。くまウォッチの投稿フォームでも共有可能です。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
