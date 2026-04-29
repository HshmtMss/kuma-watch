import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("autumn")!;

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
      <h2>なぜ秋にクマの目撃が急増するのか</h2>
      <p>
        全国のクマ目撃情報を集計すると、9月〜11月の 3 ヶ月で年間目撃件数の半分以上を占める年も珍しくありません。
        この時期、クマは冬眠に備えて 1 日 2 万キロカロリー (人間の 8〜10 倍) を摂取しようとする「ハイパーフェイジア (過食期)」に入り、
        食料を求めて行動範囲を大きく広げます。
      </p>
      <p>
        さらに、ブナ・ミズナラ・コナラといった主食のドングリが凶作の年には、山中で必要なカロリーを得られず、
        柿・栗・果樹園・生ゴミなど人里の食料に依存するクマが急増します。
        これがいわゆる「クマの大発生年」です。
      </p>

      <h2>2024 年以降の状況 — 過去最悪レベルの出没</h2>
      <p>
        2023 年度のクマ被害は人身被害・出没件数ともに統計開始以来最多を記録し、2024 年以降も高水準が続いています。
        東北・北陸・甲信越のブナ凶作と、里地のクマ慣れ (人里の餌に依存する個体の世代交代) が背景にあります。
      </p>
      <p>
        市街地での目撃も増えており、北海道・東北を中心に、住宅街での襲撃事例も報告されています。
        「山に入らなければ大丈夫」という前提は、もはや成立していません。
      </p>

      <h2>秋に避けるべき場所・時間帯</h2>
      <ul>
        <li>
          <strong>早朝・夕方の薄暗い時間</strong>:
          クマの活動ピーク。視界が悪く、人間もクマも互いに気づきにくい
        </li>
        <li>
          <strong>沢沿い・尾根の死角</strong>:
          沢音で足音が消され、見通しが悪く、クマも涼みに来やすい
        </li>
        <li>
          <strong>果樹園・柿の木がある集落の縁</strong>:
          落ちた果実に夜間集まる
        </li>
        <li>
          <strong>キノコ・山菜採りで藪に分け入る場面</strong>:
          視界 5m 未満になることも。クマも同じ食料を探していることが多い
        </li>
      </ul>

      <h2>秋に必ず守るべき 5 つの基本</h2>
      <ol>
        <li>
          <strong>音を出して歩く</strong>: クマ鈴・ホイッスル・ラジオ。
          会話しながら歩くだけでも遭遇率は大きく下がる
        </li>
        <li>
          <strong>単独行を避ける</strong>: 複数人での行動はクマが警戒する一番のシグナル
        </li>
        <li>
          <strong>クマよけスプレーを携行</strong>:
          詳細は <Link href="/articles/bear-spray">クマよけスプレーの使い方</Link> を参照
        </li>
        <li>
          <strong>食べ物の管理</strong>:
          匂いの強い食料は密閉。テント内・車内に放置しない
        </li>
        <li>
          <strong>事前に出没情報を確認</strong>:
          KumaWatch のトップマップ、もしくは目的地の市町村ページで過去 90 日の出没を確認してから出発
        </li>
      </ol>

      <h2>家庭での秋のクマ対策</h2>
      <p>
        山に入らない人にも秋のクマ対策は重要です。クマは食料の匂いに驚くほど敏感で、5km 以上先の匂いを察知するという研究もあります。
      </p>
      <ul>
        <li>柿・栗・りんごなど熟した果実は早めに収穫し、落果はその日のうちに処分</li>
        <li>生ゴミは収集日の朝に出す (前夜に出さない)</li>
        <li>コンポストは密閉式・電気式に切り替え、屋外に放置しない</li>
        <li>飼料・ペットフードは屋内に保管</li>
        <li>夜間の家周りは外灯・センサーライトで明るく</li>
      </ul>

      <h2>もし遭遇してしまったら</h2>
      <p>
        秋は子別れ後の若グマが多く、好奇心から接近されるケースもあります。
        遭遇時の正しい対処は <Link href="/articles/encounter">クマに遭遇したら</Link> の記事で詳しく解説しています。
        距離別に行動を覚えておくだけで、被害リスクは大きく下がります。
      </p>

      <h2>地域別の最新出没情報</h2>
      <p>
        KumaWatch では <Link href="/">トップページの 5kmメッシュ危険度マップ</Link>
        と、各都道府県・市町村ページから直近の目撃情報を確認できます。
        例えば <Link href="/place/長野県">長野県のページ</Link>
        からは県内 各市町村の傾向を一覧できます。
      </p>
    </ArticleShell>
  );
}
