import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-cycling")!;

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
        <strong>結論</strong>: 自転車は徒歩より速度が高いため
        <strong>クマ鈴の警告効果が薄れ、急ブレーキで転倒すると至近距離になる</strong>
        という特有のリスクがある。低速 (登り・砂利) では音と視認、
        中速 (一般道) では事前情報と回避ルート、
        高速 (下り) では「気付かれている前提」で速度制御がポイント。
      </p>

      <ArticleToc
        items={[
          { id: "why-different", title: "なぜ自転車は徒歩と違うのか" },
          { id: "low-speed", title: "低速域 (〜15km/h) — 登り・砂利路" },
          { id: "mid-speed", title: "中速域 (15〜30km/h) — 一般道・林道" },
          { id: "high-speed", title: "高速域 (30km/h〜) — 下り" },
          { id: "gear", title: "サイクリスト向け装備" },
          { id: "scenario", title: "遭遇したらどうする" },
          { id: "route", title: "ルート計画 — 出没情報の確認" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-different">なぜ自転車は徒歩と違うのか</h2>
      <p>
        徒歩向けのクマ対策と自転車のそれは、いくつかの点で大きく異なります。
      </p>
      <ul>
        <li>
          <strong>速度が早い</strong>: 走行音 (タイヤ・ペダル) はあっても、人の存在を遠くから知らせる「音源」としては不足。
          鈴を鳴らしても、自分の方が先に通過してしまう。
        </li>
        <li>
          <strong>視認距離が短い</strong>: ヘルメット・サングラスで視野が狭まり、
          コーナーで見通せない区間は徒歩より遥かに多い。
        </li>
        <li>
          <strong>急停止が危険</strong>: 急ブレーキで転倒する可能性。ロックや ABS のない一般車では、
          パニックブレーキで前転して頭部を路面に打つリスクがある。
        </li>
        <li>
          <strong>装備の制限</strong>: ザックを背負わず・サドルバッグ運用の人は、
          クマよけスプレーを持ち運ぶスペースが限られる。
        </li>
      </ul>

      <h2 id="low-speed">低速域 (〜15km/h) — 登り・砂利路・グラベル</h2>
      <p>
        低速時はクマ鈴・声出し・ベルの<strong>音による事前警告</strong>が有効。
        徒歩と同じく、人の存在を早めに知らせて遭遇自体を回避する戦略を取ります。
      </p>
      <ul>
        <li>ヘルメットに小型のクマ鈴を装着、または前カゴ・ハンドルバーに大型鈴</li>
        <li>登り区間は遠くまで届く声出し (「ホイホイ」など) を併用</li>
        <li>コーナー手前ではベルを鳴らす習慣を</li>
        <li>砂利路 (グラベル) は徒歩以上にゆっくり進み、見通し悪い場所は降車</li>
      </ul>

      <h2 id="mid-speed">中速域 (15〜30km/h) — 一般道・林道</h2>
      <p>
        中速域では、クマ鈴の効果は限定的。
        <strong>「ここはクマが出る区間」と事前に知っているか</strong>が安全度を決めます。
      </p>
      <ul>
        <li>
          出発前に <Link href="/place" className="text-blue-700 underline">都道府県別マップ</Link>
          または <Link href="/spot" className="text-blue-700 underline">観光地・登山口マップ</Link>
          で出没履歴を確認
        </li>
        <li>林道・峠道は<strong>朝夕の薄明薄暮</strong>を避ける (5〜8時、16〜19時)</li>
        <li>視界の悪い区間は減速して進む。コーナー手前で先まで見えなければ徒歩で押し進む</li>
        <li>単独走行を避け、複数人で隊列を組む。先頭・最後尾に明確な音源</li>
      </ul>

      <h2 id="high-speed">高速域 (30km/h〜) — 下り</h2>
      <p>
        下りは反応時間が極端に短くなります。<strong>「気付かれていない」前提を捨てる</strong>
        ことが第一。次の 3 つを徹底:
      </p>
      <ul>
        <li>
          <strong>速度制御</strong>: 視界の届く範囲で止まれる速度に抑える。
          見通しの悪い区間で 40km/h を超えるのは絶対 NG
        </li>
        <li>
          <strong>ブレーキ操作</strong>: 急ブレーキは前転リスク大。
          下りで遭遇したら、まず減速 → 自転車を盾にできる位置で停車 → 後退
        </li>
        <li>
          <strong>音の連続</strong>: 下りはタイヤ・風切り音が大きいので、それを利用する。
          無音の電動アシスト車・電動バイクは特に注意
        </li>
      </ul>

      <h2 id="gear">サイクリスト向け装備</h2>
      <ul>
        <li>
          <strong>クマ鈴</strong>: ヘルメット・ハンドル・サドルバッグへの後付け可能なクリップタイプ。
          振動でしっかり鳴る金属製を選ぶ。詳しくは{" "}
          <Link href="/articles/bear-bell">クマ鈴は効くのか</Link>
        </li>
        <li>
          <strong>大音量ベル</strong>: 通常の自転車ベルより大きな「ロード用ベル」を装着。
          コーナー手前で 1 度鳴らす癖をつける
        </li>
        <li>
          <strong>クマよけスプレー</strong>: ホルスターをトップチューブ・ステム周辺に装着。
          パッキングの邪魔にならない小型タイプ (225g 程度) 推奨。
          飛行機輪行は不可 (<Link href="/articles/spray-travel">スプレーの持ち運びルール</Link>)
        </li>
        <li>
          <strong>ヘッドライト</strong>: 朝夕の薄明帯走行は強力ライト (300lm 以上) で
          視界確保 + クマへの「人の存在」アピール
        </li>
        <li>
          <strong>スマートフォン・通信機器</strong>: 山間部の林道は圏外が多いので、
          GPS 単独で動くアプリ (YAMAP・ヤマレコ) と組み合わせる
        </li>
      </ul>

      <h2 id="scenario">遭遇したらどうする</h2>
      <ol>
        <li>
          <strong>急ブレーキは禁物</strong>。徐々に減速して停車。
          自転車を盾にして体の前に出す (クマと自分の間に車体)
        </li>
        <li>
          視線を逸らさず、ゆっくり<strong>後退</strong>。
          自転車を押しながら、横道・分岐があれば迂回する
        </li>
        <li>
          走って逃げると<strong>追跡本能を刺激する</strong>。
          ペダルを踏みたくなる衝動を抑え、徒歩相当の速度で離脱
        </li>
        <li>
          至近距離 (10m 以下) で威嚇・突進を受けたらクマよけスプレー
        </li>
        <li>
          襲われたら自転車を盾に、首・顔を腕で守る。詳しくは{" "}
          <Link href="/articles/bluff-charge">ブラフチャージへの対応</Link>{" "}
          /{" "}
          <Link href="/articles/playing-dead">死んだふりの正しい方法</Link>
        </li>
      </ol>

      <h2 id="route">ルート計画 — 出没情報の確認</h2>
      <p>
        サイクリングコースは登山道より広範囲なので、出発前のルート全体の出没確認が重要です。
      </p>
      <ul>
        <li>
          <Link href="/place" className="text-blue-700 underline">都道府県別マップ</Link>
          で通過予定の県・市町村の警戒レベルをまとめてチェック
        </li>
        <li>
          通過予定の<Link href="/spot" className="text-blue-700 underline">観光地・峠</Link>
          ページで周辺 10km の出没傾向を確認
        </li>
        <li>
          5 月の山菜採り期・10 月のハイパーフェイジア期は林道避け推奨
        </li>
        <li>
          ブルベ・センチュリー走行など長距離は、
          ルート上の出没多発区間を回避する代替ルートを 1 つ用意しておく
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "電動アシスト自転車・E-MTB は静かでクマに気付かれにくい？",
            a: "その通りで、無音で接近するためリスクは高まります。クマ鈴・ベルでの意図的な音出しを必須にしてください。",
            aText: "その通りで、無音で接近するためリスクは高まります。クマ鈴・ベルでの意図的な音出しを必須にしてください。",
          },
          {
            q: "ロードバイクのドロップハンドルでベルは不格好。代替は？",
            a: "STI シフター近くに装着できる小型ベル、またはハンドルテープの中に隠せるタイプもあります。ヘルメットに付けるクマ鈴もスマート。",
            aText: "STI シフター近くに装着できる小型ベル、またはハンドルテープの中に隠せるタイプもあります。ヘルメットに付けるクマ鈴もスマート。",
          },
          {
            q: "子どもとファミリーサイクリング、何に気をつける？",
            a: "子どもの目の高さはクマの視線と近く、襲われやすい統計があります。林道・砂利路は避けて舗装路に。隊列の真ん中に子どもを配置し、保護者が前後を挟む。",
            aText: "子どもの目の高さはクマの視線と近く、襲われやすい統計があります。林道・砂利路は避けて舗装路に。隊列の真ん中に子どもを配置し、保護者が前後を挟む。",
          },
          {
            q: "夜間のロングライド (ナイトライド) は危険？",
            a: "クマの活動時間 (薄明薄暮〜夜間) と重なるため、極めてリスク高。夜は林道・峠・山間部を避けて市街地ライドに限定するのが基本。",
            aText: "クマの活動時間 (薄明薄暮〜夜間) と重なるため、極めてリスク高。夜は林道・峠・山間部を避けて市街地ライドに限定するのが基本。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/trail-running">トレラン中のクマ対策</Link> /{" "}
        <Link href="/articles/night-encounter">夜間遭遇の対処</Link> /{" "}
        <Link href="/articles/bear-spray">クマよけスプレーの選び方</Link>
      </p>
    </ArticleShell>
  );
}
