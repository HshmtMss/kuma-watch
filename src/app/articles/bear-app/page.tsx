import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-app")!;

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
        <strong>結論</strong>: クマの出没情報源は1つではなく、
        <strong>(1) 市町村の防災メール</strong>、<strong>(2) 都道府県の出没マップ</strong>、
        <strong>(3) 民間アプリ・SNS</strong>の組み合わせが最強。
        それぞれ強みが違うので、自分の活動エリアと頻度に合わせて 2〜3 個並行運用するのが現実的です。
      </p>

      <ArticleToc
        items={[
          { id: "sources", title: "クマ情報源マップ" },
          { id: "city", title: "市町村の防災メール" },
          { id: "pref", title: "都道府県の出没マップ" },
          { id: "private", title: "民間アプリ・サービス" },
          { id: "sns", title: "SNS の使い方と注意点" },
          { id: "config", title: "通知設定のおすすめ" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="sources">クマ情報源マップ</h2>
      <ul>
        <li>
          <strong>市町村</strong>: 地区単位の即時通報。最も粒度が細かい。
        </li>
        <li>
          <strong>都道府県</strong>: 県全体の集計マップと年度報告書。
        </li>
        <li>
          <strong>民間アプリ・サービス</strong>: ユーザー投稿や複数自治体の集約。
        </li>
        <li>
          <strong>SNS</strong>: 現場速報の流通スピードはトップだが信頼性のばらつきあり。
        </li>
      </ul>

      <h2 id="city">市町村の防災メール</h2>
      <p>
        最もリアルタイム性が高いのが市町村の防災メール / 防災 LINE / 防災アプリ。
        登録は無料で、住んでいない地域でも登録可。
      </p>
      <ul>
        <li>
          <strong>登録手順</strong>:
          市町村サイトで「防災メール」「防災情報」を検索。多くは登録フォーム経由。
        </li>
        <li>
          <strong>通知内容</strong>:
          目撃地点・時刻・個体の大きさ・通学路情報など。
        </li>
        <li>
          <strong>強み</strong>: 地区メッシュが細かい / 市町村職員が確認した一次情報。
        </li>
        <li>
          <strong>弱み</strong>: 自治体ごとの仕組み差。隣接市の情報は別途登録が必要。
        </li>
      </ul>

      <h2 id="pref">都道府県の出没マップ</h2>
      <p>
        県単位では出没マップを Web 公開している自治体が多数。年度の集計値や統計表もここに集まる。
      </p>
      <ul>
        <li>
          <strong>例</strong>: 秋田県・岩手県・長野県・山形県は地図ベースの公式出没マップを運用。
        </li>
        <li>
          <strong>強み</strong>: 信頼性 / 県全域のカバー / 過去履歴の閲覧。
        </li>
        <li>
          <strong>弱み</strong>: 通知ではなく Web 訪問が必要 / 反映に半日〜1 日のタイムラグ。
        </li>
      </ul>

      <h2 id="private">民間アプリ・サービス</h2>
      <p>
        複数自治体の情報を集約し、地図 UI と通知を提供するサービスです。
      </p>
      <ul>
        <li>
          <strong>くまウォッチ (kuma-watch.jp)</strong>:
          全国の出没マップをブラウザで提供。
          <Link href="/submit">投稿フォーム</Link>からユーザーも追加可。市町村ページで地区ごとのリスクが見られる。
        </li>
        <li>
          <strong>登山系アプリ</strong> (YAMAP、ヤマレコ等):
          登山道のレポート機能で他のユーザーがクマ目撃を共有することも。
        </li>
        <li>
          <strong>地方放送局・新聞社の Web 速報</strong>:
          地域ニュースで即時報道。RSS / 通知設定可能なものもある。
        </li>
      </ul>

      <h2 id="sns">SNS の使い方と注意点</h2>
      <p>
        速報性は最強ですが、誤情報・古い情報・刺激目的の投稿が混じります。
      </p>
      <ul>
        <li>
          <strong>X (旧Twitter)</strong>:
          「クマ 目撃 ◯◯市」で検索。位置情報付きの一次情報を優先。
        </li>
        <li>
          <strong>地域 LINE オープンチャット</strong>:
          市町村単位の住民コミュニティで一次情報の流通速度が速い。
        </li>
        <li>
          <strong>注意</strong>:
          「画像の使い回し」「数年前の事案を最新風に投稿」などのパターンを警戒。
          投稿日時と URL を必ず確認する習慣を。
        </li>
      </ul>

      <h2 id="config">通知設定のおすすめ</h2>
      <ul>
        <li>
          <strong>通勤・通学エリア</strong>:
          市町村の防災メール (または LINE / 防災アプリ) を 100% で受信。
        </li>
        <li>
          <strong>登山エリア</strong>:
          入山予定の市町村の防災メール + 登山系アプリの掲示板を入山日朝に確認。
        </li>
        <li>
          <strong>家族間共有</strong>:
          家族 LINE グループに「目撃したらここに」のルールを作る。
        </li>
        <li>
          <strong>スマートウォッチ通知</strong>:
          山中で着信音に気づきにくいので、Apple Watch / Garmin の通知連携を有効に。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "市町村の防災メールに「クマ」枠はあるの?",
            a: (
              <>
                ほとんどの市町村で、防災メールはクマ・サル・イノシシなどの目撃情報を「鳥獣」カテゴリで配信しています。
                登録時に「鳥獣情報」「動物関連情報」のチェックを入れ忘れないようにしてください。
              </>
            ),
            aText:
              "ほとんどの市町村で防災メールはクマなどを「鳥獣」カテゴリで配信。登録時に鳥獣情報のチェックを入れ忘れないようにしてください。",
          },
          {
            q: "圏外でも情報を取れる方法は?",
            a: (
              <>
                登山前に出没情報を Web からスクリーンショット保存しておくのが基本。
                Garmin の inReach Mini など衛星通信デバイスがあれば圏外でも家族から最新情報をテキスト受信できます。
                くまウォッチの市町村ページも入山前に開いておくとオフラインで参照できる場面があります。
              </>
            ),
            aText:
              "登山前に出没情報をスクリーンショット保存。衛星通信デバイス (Garmin inReach 等) があれば圏外でもテキスト受信できます。",
          },
          {
            q: "他人の目撃情報、どこまで信用すべき?",
            a: (
              <>
                自治体公式・新聞報道は一次情報、SNS は二次情報として扱うのが安全。
                位置情報・撮影日時の付いた SNS 投稿は信用度が上がります。
                判断に迷ったら市町村の鳥獣担当課に問い合わせれば確認可能です。
              </>
            ),
            aText:
              "自治体公式と新聞報道は一次情報、SNS は二次情報として扱うのが安全。位置情報・撮影日時付きの SNS 投稿は信用度が上がります。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "市町村の防災メールを最優先。登録時に鳥獣情報を有効にする。",
          "都道府県の出没マップで広域動向を把握。",
          "民間アプリ (くまウォッチ・登山系) を併用して粒度を補完。",
          "SNS は速報性に強いが二次情報として扱う。",
          "通知はスマートウォッチ連携で山中でも逃さない。",
        ]}
        footer="情報源は1つに絞らず、市町村 + 県 + 民間 + SNS の 4 段構えがおすすめです。"
      />
    </ArticleShell>
  );
}
