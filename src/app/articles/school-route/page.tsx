import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("school-route")!;

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
        <strong>結論</strong>: 通学路でのクマ遭遇は、<strong>家庭・学校・地域</strong>の三方向の連携で大きく減らせます。
        集団登下校、装備の携帯、目撃情報の即時共有、緩衝帯の整備 — 子供を守るための具体的な行動を整理します。
      </p>

      <ArticleToc
        items={[
          { id: "current", title: "近年の通学路でのクマ事例" },
          { id: "high-risk", title: "通学路で危険なシチュエーション" },
          { id: "kids", title: "子供にできる対策" },
          { id: "parents", title: "保護者にできる対策" },
          { id: "school", title: "学校にできる対策" },
          { id: "community", title: "地域・自治会にできる対策" },
          { id: "if-encounter", title: "通学中に遭遇したら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="current">近年の通学路でのクマ事例</h2>
      <p>
        2023 年以降、通学路・住宅地でのクマ目撃と児童・高校生の遭遇事例が報告されています。
      </p>
      <ul>
        <li>登校時間帯 (7〜8 時) の住宅地での目撃</li>
        <li>下校時 (15〜17 時) の通学路での遭遇</li>
        <li>校庭・公園周辺での出没</li>
        <li>商業施設の駐車場・駐輪場でのクマ出現</li>
      </ul>
      <p>
        都市部・郊外でも安心できない時代になっています。背景は <Link href="/articles/why-increasing">なぜ出没が増えているのか</Link> で詳述。
      </p>

      <h2 id="high-risk">通学路で危険なシチュエーション</h2>
      <ul>
        <li><strong>朝夕の薄暗い時間帯</strong>: クマの活動ピークと重なる</li>
        <li><strong>植え込み・茂み・空き地</strong>: クマが潜伏できる藪</li>
        <li><strong>柿の木・果樹のある集落の縁</strong>: 落果がクマを誘引</li>
        <li><strong>集会所裏の生ゴミ集積場</strong>: 餌場化している場合あり</li>
        <li><strong>河川敷・橋の下</strong>: 通り道に使われやすい</li>
        <li><strong>裏道・近道</strong>: 視認性が低く一人で通る</li>
      </ul>

      <h2 id="kids">子供にできる対策</h2>
      <ul>
        <li><strong>クマ鈴・ホイッスル を携帯</strong>: ランドセル・ベルトに装着</li>
        <li><strong>遭遇時の対処を覚える</strong>: 「逃げない・大声を出さない・ゆっくり後退」を年齢に応じて教える</li>
        <li><strong>1 人で通らない</strong>: 集団登下校を徹底</li>
        <li><strong>クマの痕跡 (足跡・糞) を見たら大人に報告</strong>: 詳細は <Link href="/articles/bear-tracks">痕跡の見分け方</Link></li>
        <li><strong>イヤホンで音楽を聞かない</strong>: 周囲の音が分からなくなる</li>
        <li><strong>スマホを見ながら歩かない</strong>: 視界が落ちる</li>
      </ul>

      <h2 id="parents">保護者にできる対策</h2>
      <ul>
        <li><strong>毎朝の出没情報チェック</strong>: 自治体の防災アプリ・LINE グループ・<Link href="/">KumaWatch</Link></li>
        <li><strong>登校時の付き添い</strong>: 出没情報がある日は親が同行</li>
        <li><strong>遭遇時の対処を家庭で繰り返し教える</strong>: 詳細は <Link href="/articles/encounter">クマに遭遇したら</Link></li>
        <li><strong>家の周りの餌場を排除</strong>: <Link href="/articles/home-protection">自宅・果樹園のクマ対策</Link></li>
        <li><strong>近所との情報共有</strong>: 目撃情報を即 SNS・LINE で共有</li>
        <li><strong>子供のクマ装備 (鈴・ホイッスル) の点検</strong>: 月 1 回くらいの頻度で</li>
      </ul>

      <h2 id="school">学校にできる対策</h2>
      <ul>
        <li>クマ目撃情報の即時メール配信</li>
        <li>集団登下校の体制 (教員・PTA の見守り)</li>
        <li>校内・校門周辺の植栽の刈り込み (見通しを良くする)</li>
        <li>校舎周辺のセンサーライト・警報装置</li>
        <li>クマ遭遇時の避難訓練 (半年に 1 回)</li>
        <li>地域・警察・自治体との連絡体制の整備</li>
        <li>子供向けクマ教育の年 1 回実施</li>
      </ul>

      <h2 id="community">地域・自治会にできる対策</h2>
      <ul>
        <li>緩衝帯 (集落と山の境界の藪刈り) の年 1〜2 回実施</li>
        <li>放任果樹の伐採運動</li>
        <li>生ゴミ収集ルールの統一 (収集日の朝に出す)</li>
        <li>電気柵設置への補助金活用</li>
        <li>狩猟組合・猟友会との連携</li>
        <li>住民見守りパトロール (高齢者の散歩・通学路パトロール兼用)</li>
      </ul>

      <h2 id="if-encounter">通学中に遭遇したら</h2>
      <p>
        子供がクマに遭遇したときの行動を、年齢に応じて教えておく必要があります。
      </p>
      <ol>
        <li><strong>走らない</strong>: クマの追跡本能を刺激</li>
        <li><strong>大声で叫ばない</strong>: 近距離では刺激になる</li>
        <li><strong>クマの方を見たまま、ゆっくり後ろに下がる</strong></li>
        <li><strong>近くの建物・お店・大人のいる場所に避難</strong></li>
        <li><strong>大人 (家族・学校・110) に連絡</strong></li>
        <li><strong>地面に伏せて頭を守る (襲われた場合)</strong></li>
      </ol>
      <p>
        詳細な距離別対処は <Link href="/articles/encounter">クマに遭遇したらどうする</Link> を参照してください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "通学路でクマ目撃情報があった日の登校はどうする?",
            a: (
              <>
                学校・自治体の指示に従い、状況によっては臨時休校・集団下校・親送迎などに切り替わります。出没情報を受けた場合は、子供を 1 人にせず、可能なら親が登校に同行してください。
              </>
            ),
            aText:
              "学校・自治体の指示に従い、状況によっては臨時休校・集団下校・親送迎などに切り替わります。出没情報を受けた場合は、子供を 1 人にせず、可能なら親が登校に同行してください。",
          },
          {
            q: "子供にクマよけスプレーを持たせてもいい?",
            a: (
              <>
                推奨しません。誤噴射のリスクがあり、子供同士のトラブル時に使われる可能性も。代わりに大型のクマ鈴 + ホイッスルで存在を知らせる方向に振ってください。スプレーは大人が携行するのが基本です。
              </>
            ),
            aText:
              "推奨しません。誤噴射のリスクがあり、子供同士のトラブル時に使われる可能性も。代わりに大型のクマ鈴 + ホイッスルで存在を知らせる方向に振ってください。",
          },
          {
            q: "学校での避難訓練はどのくらい必要?",
            a: (
              <>
                年 1〜2 回が目安です。クマ出没エリアの学校では実施が推奨されています。シミュレーション形式で「もしクマが校門前に現れたら」「下校途中に遭遇したら」を具体的に練習することが重要です。
              </>
            ),
            aText:
              "年 1〜2 回が目安です。クマ出没エリアの学校では実施が推奨されています。シミュレーション形式で具体的に練習することが重要です。",
          },
          {
            q: "通学路の藪を刈り取りたいが、誰の許可が必要?",
            a: (
              <>
                土地の所有者と自治体の許可が必要です。自治会長・教育委員会・市町村の鳥獣対策窓口に相談すれば、地域全体の取り組みとして進められることが多いです。一方的な伐採は所有権・条例の問題になりうるので必ず確認を。
              </>
            ),
            aText:
              "土地の所有者と自治体の許可が必要です。自治会長・教育委員会・市町村の鳥獣対策窓口に相談すれば、地域全体の取り組みとして進められることが多いです。",
          },
        ]}
      />
    </ArticleShell>
  );
}
