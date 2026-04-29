import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-spray")!;

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
        <strong>結論</strong>: 正しく使えば撃退率 90% 以上 (銃器より高い)。
        容量 230g 以上、射程 5m 以上、ホルスター付きで腰に固定するのが基本。
        本番で確実に動けるよう、練習用 Inert で抜き出し → 安全ピン解除 → 噴射の流れを 5 秒以内にできるようにしておくこと。
      </p>

      <ArticleToc
        items={[
          { id: "effectiveness", title: "クマよけスプレーは効くのか" },
          { id: "selection", title: "選び方 — 容量・射程・噴射時間" },
          { id: "holster", title: "ホルスターは必須" },
          { id: "how-to-use", title: "噴射の基本" },
          { id: "caveats", title: "使うときに注意するポイント" },
          { id: "transport", title: "飛行機・公共交通での扱い" },
          { id: "training", title: "練習用スプレーで訓練" },
          { id: "combination", title: "スプレー以外との組み合わせ" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="effectiveness">クマよけスプレーは効くのか</h2>
      <p>
        クマ撃退スプレー (ベアスプレー) は、唐辛子由来のカプサイシンを高圧で噴射する護身具です。
        米国アラスカでの長期調査では、クマに襲われそうになった事例の 92%
        がスプレーで停止し、銃器使用 (76%) より高い撃退率が報告されています。
        正しく使えば、クマと遭遇したときの最後の砦として最も信頼できる装備です。
      </p>

      <h2 id="selection">選び方 — 容量・射程・噴射時間</h2>
      <ul>
        <li>
          <strong>容量</strong>: 230g (約 8oz) 以上を推奨。
          150g 未満の小型は射程・噴射時間ともに不足
        </li>
        <li>
          <strong>射程</strong>: 5m 以上。理想は 7〜10m。
          至近距離では風で自分にかかるリスクがあるため、距離があるうちに使うのが基本
        </li>
        <li>
          <strong>噴射時間</strong>: 6〜9 秒の連続噴射が可能なものを選ぶ。
          1 回の遭遇で 1〜2 秒 × 数回の噴射が想定される
        </li>
        <li>
          <strong>カプサイシノイド濃度</strong>: 1.0〜2.0% が一般的。
          米 EPA 基準準拠の製品 (Counter Assault, Frontiersman, UDAP など) が信頼できる
        </li>
      </ul>

      <h2 id="holster">ホルスターは必須</h2>
      <p>
        スプレーをザックの中にしまっておくのは、持っていないのと同じです。
        遭遇から噴射までは数秒の勝負。腰のベルト or ザックのショルダーストラップに、利き手で 1 秒以内に抜ける位置に固定してください。
        歩いているときにブッシュで引っかけて落とさないよう、ホルスターは固定式 (バンジー or ベルクロ) を推奨します。
      </p>

      <h2 id="how-to-use">噴射の基本</h2>
      <ol>
        <li>
          安全ピン (オレンジのクリップ) を外す。
          通常は人差し指で押し倒すだけで外れる構造
        </li>
        <li>
          両手で構え、相手の顔の高さに向ける。
          クマが立ち上がっている場合は胸〜頭の高さ
        </li>
        <li>
          1〜2 秒の連続噴射。クマが進行を止めるまで小刻みに繰り返す
        </li>
        <li>
          ガスがクマの目・鼻に届けば、ほぼ確実に進行を止め、後ずさりして去る
        </li>
        <li>
          噴射後はその場を速やかに離脱。クマが復活する前に風上 (噴射ガスを浴びない方向) へ移動
        </li>
      </ol>

      <h2 id="caveats">使うときに注意するポイント</h2>
      <ul>
        <li>
          <strong>風向き</strong>:
          風下に向かって噴射すると自分にかかる。逆風では距離を詰めてから。
          風の影響が読めないなら、横風になる位置取りを意識
        </li>
        <li>
          <strong>狭い室内・テント内</strong>:
          ガスが充満して自分も無事では済まない。屋外専用と考える
        </li>
        <li>
          <strong>低温</strong>:
          氷点下では噴射圧が落ちる。冬季・早春のキャンプではポケットで温めて携行
        </li>
        <li>
          <strong>有効期限</strong>:
          製造から 3〜4 年。期限切れは圧力低下で噴射しないことがある
        </li>
      </ul>

      <h2 id="transport">飛行機・公共交通での扱い</h2>
      <p>
        クマよけスプレーは航空機への持ち込み・預け入れ共に禁止です (ICAO 規定の引火性エアロゾル相当)。
        遠征先で使う場合は現地で購入する必要があります。
        登山口の山小屋・道の駅・アウトドアショップでレンタル・販売しているケースもあるので、出発前に確認を。
      </p>

      <h2 id="training">練習用スプレー (Inert Spray) で訓練</h2>
      <p>
        本番のスプレーを訓練に使うのは勿体ない (1 本数千円) ので、各メーカーが出している練習用 Inert タイプを 1 本買って実際に噴射してみることを推奨します。
        ホルスターからの抜き出し → 安全ピン解除 → 構え → 噴射の流れを 5 秒以内にできるようにしておけば、本番で確実に動けます。
      </p>

      <h2 id="combination">スプレー以外との組み合わせ</h2>
      <p>
        スプレーは「最後の砦」であり、そこに至らないことが最善です。
        スプレーと併せて、<Link href="/articles/bear-bell">クマ鈴・ホイッスル</Link>
        などで遭遇自体を回避する装備、複数人で行動する習慣、出発前の
        <Link href="/">5kmメッシュ警戒レベルマップ</Link> での情報収集も合わせて行ってください。
      </p>

      <p>
        遭遇したときの距離別対処は <Link href="/articles/encounter">クマに遭遇したらどうする</Link> で詳しく解説しています。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマよけスプレーはどこで買える?",
            a: (
              <>
                登山用品店 (好日山荘・モンベル・石井スポーツなど) や Amazon・楽天などで購入できます。米国ブランド (Counter Assault, Frontiersman, UDAP) は容量・射程ともに信頼性が高く、登山道入口・山小屋でレンタル販売しているケースもあります。価格は 5,000〜10,000 円が相場。
              </>
            ),
            aText:
              "登山用品店 (好日山荘・モンベル・石井スポーツなど) や Amazon・楽天で購入できます。米国ブランド (Counter Assault, Frontiersman, UDAP) は容量・射程ともに信頼性が高く、価格は 5,000〜10,000 円が相場です。",
          },
          {
            q: "飛行機に持ち込めますか?",
            a: (
              <>
                持ち込み・預け入れともに不可です (ICAO 規定の引火性エアロゾル相当)。遠征先で必要な場合は現地で購入するか、登山口の山小屋・道の駅・アウトドアショップでレンタルを検討してください。
              </>
            ),
            aText:
              "飛行機への持ち込み・預け入れともに不可です。遠征先では現地購入か、登山口の山小屋・道の駅・アウトドアショップでレンタルを検討してください。",
          },
          {
            q: "有効期限が切れたスプレーは使える?",
            a: (
              <>
                推奨されません。製造から 3〜4 年で噴射圧が低下し、本番で噴射しないリスクがあります。年に一度はチェックし、期限切れのものは練習用として使い切ってから廃棄してください。
              </>
            ),
            aText:
              "推奨されません。製造から 3〜4 年で噴射圧が低下し、本番で噴射しないリスクがあります。年に一度はチェックし、期限切れは練習用に使い切って廃棄してください。",
          },
          {
            q: "風が強いときはどう使う?",
            a: (
              <>
                風下方向にクマがいる場合、噴射ガスが風に流されて自分にかかることがあります。逆風時はクマの距離を詰めてから噴射するか、横風になる位置取りに移動してから使うのが基本です。
              </>
            ),
            aText:
              "風下方向にクマがいる場合、噴射ガスが風で自分にかかることがあります。逆風時はクマの距離を詰めてから噴射するか、横風になる位置取りに移動してから使うのが基本です。",
          },
          {
            q: "クマよけスプレーがあれば他の対策は不要?",
            a: (
              <>
                スプレーは「最後の砦」であり、そこに至らないことが最善です。<Link href="/articles/bear-bell">クマ鈴・ホイッスル</Link> で遭遇自体を回避し、複数人で行動し、出発前に <Link href="/">出没マップ</Link> で情報収集する。スプレーはこれら予防策の最後尾に来る装備です。
              </>
            ),
            aText:
              "スプレーは最後の砦であり、そこに至らないことが最善です。クマ鈴・ホイッスル で遭遇自体を回避し、複数人で行動し、出発前に出没マップ で情報収集する。スプレーはこれら予防策の最後尾に来る装備です。",
          },
        ]}
      />
    </ArticleShell>
  );
}
