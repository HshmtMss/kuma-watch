import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-and-dogs")!;

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
        <strong>結論</strong>: 犬の役割は 3 種類に整理できます。
        <strong>家庭の番犬</strong>は「警報装置」、<strong>熊狩り猟犬</strong>は「狩猟補助」、
        <strong>ベアドッグ</strong>は「追払い専門」。
        家庭飼育で安全に効果を得たいなら、犬を「攻撃手段」ではなく「早期警報装置」として扱うのが現実解です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            犬の役割は3種類。<strong>家庭犬=警報装置／猟犬=狩猟補助／ベアドッグ=追払い専門</strong>。
          </>,
          <>
            <strong>「犬を飼えばクマよけ」は誤解</strong>。攻撃手段にはならない。
          </>,
          <>
            家庭では犬を<strong>「早期警報装置」</strong>として扱うのが現実解。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "myth", title: "「犬を飼えばクマよけ」の誤解" },
          { id: "watchdog", title: "番犬としての家庭犬" },
          { id: "hunting", title: "熊狩り猟犬の歴史と現状" },
          { id: "beardog", title: "ベアドッグ（カレリアン）の仕組み" },
          { id: "hiking", title: "犬連れ登山と遭遇リスク" },
          { id: "recommend", title: "実用的な使い方の推奨" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="myth">「犬を飼えばクマよけ」の誤解</h2>
      <p>
        ホームセンターやネット記事で「クマよけには犬」という言説をよく見かけますが、
        実態はかなり複雑です。<strong>犬の存在自体がクマを遠ざける効果は限定的</strong>で、
        条件次第ではむしろリスクを高める場合もあります。
      </p>
      <ul>
        <li>
          <strong>条件付きで有効</strong>: 中型〜大型犬が屋外で吠える環境では、クマが警戒して近寄りにくくなる
        </li>
        <li>
          <strong>条件付きで逆効果</strong>: 小型犬や繋ぎ犬は、クマに刺激を与えると逃げ場がなく襲われる
        </li>
        <li>
          <strong>個体差が大きい</strong>: 同じ犬種でも臆病な個体は逆に隠れてしまう
        </li>
        <li>
          <strong>都市部のクマには通用しない</strong>: 人慣れ・犬慣れした個体は犬の鳴き声を無視する
        </li>
      </ul>
      <p>
        北米の研究（Garshelis 1989 ほか）でも、犬がいる家屋への侵入は減少傾向にあるが、ゼロにはならないと報告されています。
      </p>

      <h2 id="watchdog">番犬としての家庭犬</h2>
      <p>
        家庭で飼う犬の最も現実的な役割は <strong>「早期警報装置」</strong>です。
        人間より先に匂い・物音を察知し、吠えて知らせてくれる。
        クマと闘わせるのではなく、住人がクマに気づくための時間を稼ぐと考えるのが安全です。
      </p>
      <h3>番犬として効果が出やすい条件</h3>
      <ul>
        <li>屋外飼育（小屋・庭）で警戒範囲が広い</li>
        <li>夜間も外にいて吠える環境</li>
        <li>中型以上で声が大きい犬種（柴犬・甲斐犬・北海道犬・秋田犬など）</li>
        <li>家屋の周囲に十分な視界がある</li>
      </ul>
      <h3>注意点</h3>
      <ul>
        <li>
          <strong>繋ぎっぱなしの犬は逃げられない</strong> — クマが寄ってきた場合、犬が犠牲になるリスクが高い
        </li>
        <li>
          <strong>ドッグフードが新たな誘引源になる</strong> — 屋外保管は厳禁、密閉ストッカーへ
        </li>
        <li>
          <strong>近隣への騒音問題</strong> — 過度に吠える犬は別の問題を生む
        </li>
      </ul>
      <p>
        家屋全体の対策として、犬を含めた多層防御を組むのが効果的です。詳細は{" "}
        <Link href="/articles/home-protection">住宅周辺のクマ対策</Link>
        を参照してください。
      </p>

      <h2 id="hunting">熊狩り猟犬の歴史と現状</h2>
      <p>
        日本の伝統的な熊狩りでは、<strong>マタギ犬</strong>と呼ばれる中型犬が活躍してきました。
        北海道犬・甲斐犬・紀州犬・四国犬などが代表種で、クマを追い詰めて吠え続け（吠え止め）、
        猟師の射撃を補助します。
      </p>
      <h3>熊狩り猟犬の役割</h3>
      <ul>
        <li>クマを追跡（足跡・匂いで追う）</li>
        <li>クマを停止させる（複数頭で取り囲んで吠える）</li>
        <li>クマを誘導する（猟師の射程内へ）</li>
        <li>負傷したクマの止め刺し補助</li>
      </ul>
      <h3>現代の課題</h3>
      <ul>
        <li>
          <strong>狩猟者の高齢化・減少</strong> — 1975 年に約 50 万人いた狩猟者は 2024 年に約 18 万人。優秀な熊犬を育てる猟師自体が減っている
        </li>
        <li>
          <strong>事故リスク</strong> — 犬がクマに殺される事例は毎年発生
        </li>
        <li>
          <strong>素人飼育は不可能</strong> — 訓練には数年単位の経験と知識が必要
        </li>
      </ul>
      <p>
        熊狩り猟犬は「持っていれば家庭で使える」装備ではなく、
        伝統猟の専門家集団の技術として理解すべきです。
      </p>

      <h2 id="beardog">ベアドッグ（カレリアン）の仕組み</h2>
      <p>
        北米でクマ管理の現場で広く使われているのが <strong>「カレリアン・ベアドッグ」</strong>です。
        フィンランド原産の狩猟犬を、米国のウィンド・リバー・ベア・インスティテュート（WRBI）が
        専門訓練し、自治体・国立公園・農場へ派遣しています。日本では <strong>軽井沢のピッキオ</strong>が
        2004 年から導入し、独自の運用ノウハウを蓄積してきました。
      </p>
      <h3>ベアドッグの基本的な働き</h3>
      <ol>
        <li>クマを発見すると激しく吠えて威嚇</li>
        <li>クマが逃げ始めるまで追跡（深追いはしない）</li>
        <li>クマに「人間の側は危険」という学習を植え付ける</li>
        <li>ハンドラーが指示で呼び戻し、過剰な追跡を防ぐ</li>
      </ol>
      <p>
        ポイントは「殺さない・捕まえない・教育する」こと。
        殺処分しないで人里への侵入を抑制する <strong>「非致死的管理（non-lethal management）」</strong>
        の代表的手法として、世界的に評価されています。
      </p>
      <h3>日本での運用</h3>
      <ul>
        <li>軽井沢町（ピッキオ）— 2004 年から運用、町内のクマ管理に大きく貢献</li>
        <li>富山県・長野県の一部自治体が試験運用</li>
        <li>2024 年以降、複数の自治体が導入検討中</li>
        <li>訓練済み個体は世界的に希少で、1 頭育てるのに数年・数百万円規模</li>
      </ul>
      <p>
        ベアドッグは <strong>専門ハンドラーとセット</strong>で初めて機能する装備であり、
        個人で導入して家庭で使うものではありません。
        詳細は{" "}
        <Link href="/articles/bear-detection-ai">クマ検知 AI とは</Link>
        の比較表もご参照ください。
      </p>

      <h2 id="hiking">犬連れ登山と遭遇リスク</h2>
      <p>
        登山・トレッキングで犬を連れる場合は、注意が逆方向に働きます。
        北米の研究では <strong>「リードなしの犬連れ登山者はクマ襲撃を受けやすい」</strong>
        という統計があります（Smith et al. 2010 など）。
      </p>
      <h3>なぜリスクが上がるか</h3>
      <ol>
        <li>犬が興奮してクマを追いかける</li>
        <li>クマが反撃して犬を追う</li>
        <li>逃げた犬が飼い主のところへ戻ってくる</li>
        <li>クマも一緒に飼い主のところへ到達</li>
      </ol>
      <h3>犬連れ登山の注意点</h3>
      <ul>
        <li>
          <strong>リードは必須</strong> — 離した瞬間に上記シナリオが発動
        </li>
        <li>
          <strong>クマスプレーは犬の方向にも使えるよう携帯</strong>
        </li>
        <li>
          <strong>クマが多いエリアは犬連れを避ける</strong> — 自分と犬の両方を守る判断
        </li>
        <li>
          <strong>母グマ・仔グマと遭遇したら絶対に犬を放さない</strong> — 最悪のシナリオを誘発
        </li>
      </ul>
      <p>
        トレッキング全般の注意は{" "}
        <Link href="/articles/trail-running">トレラン・登山中のクマ対策</Link>
        を参照してください。
      </p>

      <h2 id="recommend">実用的な使い方の推奨</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">用途</th>
              <th className="px-3 py-2 text-left">推奨</th>
              <th className="px-3 py-2 text-left">理由</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-green-50/40">
              <td className="px-3 py-2 font-semibold">家屋の早期警報</td>
              <td className="px-3 py-2 text-green-700">○ 推奨</td>
              <td className="px-3 py-2 text-stone-600">
                屋外飼育の中型犬は人間より早く察知。窓・玄関周りの安全確保に役立つ
              </td>
            </tr>
            <tr className="bg-stone-50/40">
              <td className="px-3 py-2 font-semibold">畑・果樹園の見張り</td>
              <td className="px-3 py-2 text-stone-600">△ 条件付き</td>
              <td className="px-3 py-2 text-stone-600">
                電気柵との併用なら有効。単独では犬が犠牲になる
              </td>
            </tr>
            <tr className="bg-red-50/40">
              <td className="px-3 py-2 font-semibold">登山・トレッキング</td>
              <td className="px-3 py-2 text-red-700">✕ 推奨しない</td>
              <td className="px-3 py-2 text-stone-600">
                リードなしの犬連れは襲撃リスクが上がる。リード必須
              </td>
            </tr>
            <tr className="bg-red-50/40">
              <td className="px-3 py-2 font-semibold">熊狩り（素人）</td>
              <td className="px-3 py-2 text-red-700">✕ 危険</td>
              <td className="px-3 py-2 text-stone-600">
                熟練猟師の専門技術。素人が真似すると犬も人も危険
              </td>
            </tr>
            <tr className="bg-amber-50/40">
              <td className="px-3 py-2 font-semibold">自治体の追払い事業</td>
              <td className="px-3 py-2 text-amber-700">◎ 専門ハンドラー前提で有効</td>
              <td className="px-3 py-2 text-stone-600">
                ベアドッグ + ハンドラーは非致死的管理の最有力手段の一つ
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ArticleFaq
        items={[
          {
            q: "ベアドッグを個人で飼うことはできますか?",
            a: "技術的には可能ですが、推奨されません。訓練には専門ハンドラーが数年単位で関わる必要があり、家庭での日常管理も困難です。日本国内の訓練済み個体は数頭しかなく、入手も極めて困難です。",
            aText:
              "個人飼育は可能だが非推奨。訓練に数年・専門ハンドラーが必要。国内に数頭のみで入手も困難。",
          },
          {
            q: "小型犬でもクマよけになりますか?",
            a: "「早期警報」としての効果はありますが、クマを威嚇する効果はほぼありません。むしろ刺激してクマを攻撃に誘発するリスクもあるため、室内飼育を推奨します。",
            aText:
              "小型犬は警報効果のみ。威嚇効果なし。刺激でクマを誘発するリスクあり。室内飼育推奨。",
          },
          {
            q: "犬連れで登山するとき、クマ鈴は必要ですか?",
            a: "必要です。犬が鳴く声はクマよけにはほぼなりません。クマ鈴を首輪に付けるか、登山者自身が携帯してください。詳細は《クマ鈴の効果と使い方》を参照。",
            aText:
              "必要。犬の鳴き声はクマよけにはならない。首輪に鈴または登山者が携帯。",
          },
          {
            q: "夜中に犬が吠えたらクマがいる可能性はありますか?",
            a: "あります。クマの活動時間は夕方〜早朝が最も多く、夜間の異常な吠え方は要警戒。ただしタヌキ・イノシシ・人間の侵入者の可能性も同程度あるため、明かりを点ける・大きな音を出す・100m 以上離れた場所から目視する、を優先してください。安易に外に出てはいけません。",
            aText:
              "可能性あり。夜間の異常な吠え方は要警戒。ただしタヌキ・イノシシ・人の可能性もある。明かりを点ける・音を出す・100m 以上から目視。安易な外出は厳禁。",
          },
          {
            q: "近所の犬がよく吠えるからクマは来ないと聞きました",
            a: "完全には信用できません。人慣れ・犬慣れした「都市型クマ（アーバン・ベア）」は犬の鳴き声を無視します。犬がいるエリアでも電気柵・誘引物管理など多層対策が必要です。",
            aText:
              "完全には信用できない。人慣れ・犬慣れしたアーバン・ベアは犬を無視。電気柵・誘引物管理など多層対策が必要。",
          },
        ]}
      />
    </ArticleShell>
  );
}
