import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-report")!;

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
        <strong>結論</strong>: クマを見たら、緊急度に応じて
        <strong>110 番（警察）/ 119 番（救急）/ 市町村役場</strong>を使い分けます。
        人身被害がある or 市街地で目撃 → 110 番。山中での目撃 → 市町村の鳥獣担当または専用フォーム。
        痕跡だけ → 市町村に翌日でも OK。本ガイドで通報の判断基準と伝えるべき情報を整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマを見たら緊急度で<strong>110番／119番／市町村役場を使い分ける</strong>。
          </>,
          <>
            <strong>人身被害・市街地目撃→110番</strong>、山中の目撃→市町村の鳥獣担当。
          </>,
          <>
            痕跡だけなら<strong>市町村に翌日でもOK</strong>。通報時に伝える情報を整理。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "priority", title: "緊急度別の連絡先早見表" },
          { id: "police", title: "110 番（警察）に通報すべきケース" },
          { id: "ambulance", title: "119 番（救急）が必要なケース" },
          { id: "city", title: "市町村役場に通報するケース" },
          { id: "what-to-say", title: "通報時に必ず伝える情報" },
          { id: "photo", title: "写真・動画撮影の注意" },
          { id: "after", title: "通報後の流れ" },
          { id: "online", title: "オンライン通報フォーム" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="priority">緊急度別の連絡先早見表</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">状況</th>
              <th className="px-3 py-2 text-left">連絡先</th>
              <th className="px-3 py-2 text-left">緊急度</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-red-50">
              <td className="px-3 py-2">人がクマに襲われた</td>
              <td className="px-3 py-2 font-bold text-red-700">
                119（救急）+ 110（警察）
              </td>
              <td className="px-3 py-2 text-red-700">最優先</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-3 py-2">市街地・住宅地でクマを目撃</td>
              <td className="px-3 py-2 font-bold text-red-700">110（警察）</td>
              <td className="px-3 py-2 text-red-700">最優先</td>
            </tr>
            <tr className="bg-amber-50">
              <td className="px-3 py-2">学校・通学路・公園でクマ目撃</td>
              <td className="px-3 py-2 font-bold text-amber-700">
                110 + 学校 + 市町村
              </td>
              <td className="px-3 py-2 text-amber-700">高</td>
            </tr>
            <tr>
              <td className="px-3 py-2">登山中・里山でクマを目撃</td>
              <td className="px-3 py-2 font-semibold">
                市町村（鳥獣担当）or 専用フォーム
              </td>
              <td className="px-3 py-2 text-stone-600">中</td>
            </tr>
            <tr>
              <td className="px-3 py-2">フン・足跡・爪痕などの痕跡を発見</td>
              <td className="px-3 py-2 font-semibold">
                市町村（翌日でも可）
              </td>
              <td className="px-3 py-2 text-stone-600">低</td>
            </tr>
            <tr>
              <td className="px-3 py-2">農作物・養蜂が被害を受けた</td>
              <td className="px-3 py-2 font-semibold">
                市町村（農林課）+ JA
              </td>
              <td className="px-3 py-2 text-stone-600">中</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="police">110 番（警察）に通報すべきケース</h2>
      <p>
        警察への通報は <strong>人身被害が発生した場合</strong>、または
        <strong>市街地・住宅地・通学路など人通りのある場所でクマを目撃した場合</strong>
        に行います。警察が現場到着し、市町村・猟友会との三者連携で対処します。
      </p>
      <h3>110 番が必要な具体例</h3>
      <ul>
        <li>人がクマに襲われた（自分・他人を問わず）</li>
        <li>住宅地・市街地の路上でクマを目撃</li>
        <li>学校・幼稚園・公園・スーパー駐車場で目撃</li>
        <li>家屋・畜舎にクマが侵入</li>
        <li>クマに追跡されている・接近されている</li>
        <li>子供・高齢者が危険にさらされている</li>
      </ul>
      <p>
        110 番は携帯・固定電話どちらからでも繋がります。
        市街地での目撃は <strong>通報した時点で警察が周辺住民への注意喚起</strong>を始めるため、
        「迷ったら通報」が原則です。
      </p>

      <h2 id="ambulance">119 番（救急）が必要なケース</h2>
      <p>
        119 番は <strong>人身被害が発生し、医療的処置が必要な場合</strong>
        に通報します。クマによる外傷は深く、感染症リスクも高いため、軽傷に見えても救急要請を優先してください。
      </p>
      <ul>
        <li>出血を伴う外傷</li>
        <li>顔・首・頭部を負傷</li>
        <li>意識が混乱している・ショック症状</li>
        <li>骨折・脱臼の疑い</li>
        <li>多発外傷（複数箇所の傷）</li>
        <li>感染症リスクのある傷（クマの爪・歯による）</li>
      </ul>
      <p>
        119 番した後は <strong>110 番にも連絡</strong>してください（同時通報が原則）。
        詳細な応急処置の手順は{" "}
        <Link href="/articles/first-aid">クマに襲われた後の応急処置と通報</Link>
        を参照してください。
      </p>

      <h2 id="city">市町村役場に通報するケース</h2>
      <p>
        市街地ではない山中・里山・農地で目撃した場合、<strong>市町村役場の鳥獣担当課</strong>
        に通報します。通常、平日昼間は役場、夜間・休日は警察経由で受け付けます。
      </p>
      <h3>市町村への通報が適切なケース</h3>
      <ul>
        <li>登山中にクマを目撃</li>
        <li>里山・林道で目撃</li>
        <li>クマの痕跡（フン・足跡・爪痕・木の損傷）を発見</li>
        <li>農作物・養蜂被害を確認</li>
        <li>過去の目撃場所を再訪して活動の兆候を確認</li>
      </ul>
      <p>
        担当部署は自治体によって名称が異なりますが、典型的には
        <strong>「農林課」「環境課」「鳥獣対策室」「産業振興課」</strong>
        などです。電話する際は「クマの目撃情報の通報」と伝えれば適切な部署に転送されます。
      </p>

      <h2 id="what-to-say">通報時に必ず伝える情報</h2>
      <p>
        通報の質が対応の質を決めます。次の情報を準備してから電話するとスムーズです。
      </p>
      <h3>場所</h3>
      <ul>
        <li>市町村名 + 地区名（〇〇市〇〇町〇〇）</li>
        <li>目印（学校・神社・コンビニ・道路標識など）</li>
        <li>住所が不明な場合は <strong>緯度経度</strong>（スマホの地図アプリで取得可）</li>
      </ul>
      <h3>クマの情報</h3>
      <ul>
        <li>目撃時刻</li>
        <li>クマの大きさ（成獣 / 仔グマ / 親子連れか）</li>
        <li>移動方向</li>
        <li>行動（採食中 / 移動中 / 攻撃的）</li>
        <li>距離（自分との距離）</li>
        <li>頭数（複数か単独か）</li>
      </ul>
      <h3>自分の情報</h3>
      <ul>
        <li>氏名・連絡先</li>
        <li>現在地・現在の安全状況</li>
        <li>負傷の有無</li>
      </ul>

      <h2 id="photo">写真・動画撮影の注意</h2>
      <p>
        証拠として写真・動画が残せれば対応の質が上がりますが、<strong>安全が最優先</strong>です。
      </p>
      <ul>
        <li>
          <strong>近距離（30m 以内）では撮影しない</strong> — 即座に距離を取る
        </li>
        <li>
          <strong>遠距離（50m 以上）で安全が確保できる場合のみ</strong>撮影
        </li>
        <li>
          <strong>フラッシュ・音声を OFF</strong> — クマを刺激しない
        </li>
        <li>
          <strong>痕跡（フン・足跡・爪痕・木の損傷）は安全に撮影可能</strong>
        </li>
        <li>
          撮影した位置を <strong>スマホの地図アプリで記録</strong>（緯度経度を控える）
        </li>
        <li>
          SNS への投稿前に <strong>位置情報メタデータ</strong>を確認・編集
        </li>
      </ul>

      <h2 id="after">通報後の流れ</h2>
      <p>
        通報後、状況に応じて以下の対応が取られます。
      </p>
      <ol>
        <li>
          <strong>市街地・人身被害の場合</strong>: 警察出動 → 市町村・猟友会の招集 → 警戒態勢
        </li>
        <li>
          <strong>住民への注意喚起</strong>: 防災行政無線・防災メール・町内会回覧
        </li>
        <li>
          <strong>学校・通学路の場合</strong>: 集団下校・パトロール強化・臨時休校の検討
        </li>
        <li>
          <strong>追跡・追払い・捕獲の判断</strong>: 自治体・猟友会・警察の三者協議
        </li>
        <li>
          <strong>必要に応じて自衛隊派遣要請</strong>（2025 年改正法で市街地での猟銃使用が一部容認）
        </li>
      </ol>
      <p>
        対応の法的枠組みは{" "}
        <Link href="/articles/bear-laws">クマと関わる法律</Link>
        、駆除をめぐる議論は{" "}
        <Link href="/articles/culling-debate">駆除をめぐる議論</Link>
        を参照してください。
      </p>

      <h2 id="online">オンライン通報フォーム</h2>
      <p>
        多くの自治体・都道府県がオンラインの目撃情報投稿フォーム・LINE 連携を整備しています。
        緊急時は電話を優先しますが、目撃の事後報告にはオンラインが便利です。
      </p>
      <ul>
        <li>
          <strong>各都道府県の専用フォーム</strong>: 「{`{県名}`} クマ 目撃情報 投稿」で検索
        </li>
        <li>
          <strong>市町村の LINE 公式アカウント</strong>: 札幌市など複数自治体で運用
        </li>
        <li>
          <strong>くまっぷ・くまMap など民間アプリ</strong>: 住民投稿型
        </li>
        <li>
          <strong>KumaWatch の投稿機能</strong>:{" "}
          <Link href="/submit">出没情報の投稿</Link>
        </li>
      </ul>
      <p>
        ただし <strong>オンライン通報は緊急時の代替にはなりません</strong>。
        市街地での目撃・人身被害は必ず電話で 110 番してください。
      </p>

      <ArticleFaq
        items={[
          {
            q: "クマかどうか分からない場合でも通報すべき?",
            a: "迷ったら通報してください。「カモシカと間違えた」「イノシシだった」場合も警察・市町村は対応に慣れています。誤通報のペナルティはありません。",
            aText:
              "迷ったら通報すべき。カモシカ・イノシシとの取り違えも警察・市町村は対応に慣れている。誤通報のペナルティはなし。",
          },
          {
            q: "夜間・休日でも市町村に連絡できますか?",
            a: "夜間・休日は役場が閉まっていますが、人身被害や市街地目撃は 110 番すれば警察経由で関係部署に連絡が回ります。山中での目撃のみであれば、翌日の業務時間に役場に連絡で問題ありません。",
            aText:
              "夜間・休日は役場閉。人身被害や市街地目撃は110番すれば警察経由で関係部署に。山中目撃は翌日業務時間に役場連絡で可。",
          },
          {
            q: "目撃情報を KumaWatch に直接投稿できますか?",
            a: (
              <>
                はい。
                <Link href="/submit">出没情報の投稿</Link>
                からどなたでも投稿できます。ただし
                <strong>緊急時は必ず先に 110 番</strong>してください。投稿情報は KumaWatch のデータベースに反映され、近隣ユーザーの参考情報になります。
              </>
            ),
            aText:
              "KumaWatch の /submit からどなたでも投稿可能。ただし緊急時は必ず先に110番。投稿情報は近隣ユーザーの参考情報になる。",
          },
          {
            q: "通報した目撃情報は公開されますか?",
            a: "市町村経由の場合、自治体の公開判断によります。多くは公式ページ・防災メールで匿名化して公表されます。KumaWatch では各自治体の公開情報を統合してマップ表示しています。",
            aText:
              "市町村経由は自治体の公開判断による。多くは公式ページ・防災メールで匿名化して公表。KumaWatch では公開情報を統合してマップ表示。",
          },
          {
            q: "他人が襲われているのを目撃したら?",
            a: (
              <>
                <strong>自分の安全を最優先</strong>に。建物・車内に避難してから 119 + 110 番。
                クマがその場を離れた後に救助に向かう。クマがまだ近くにいる場合は無理に救助せず、警察・救急の到着を待ちます。詳細は{" "}
                <Link href="/articles/first-aid">応急処置と通報</Link>
                を参照してください。
              </>
            ),
            aText:
              "自分の安全を最優先。建物・車内に避難してから119+110。クマが離れた後に救助。まだ近くにいる場合は無理せず警察・救急の到着待ち。",
          },
        ]}
      />
    </ArticleShell>
  );
}
