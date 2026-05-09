import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleHowTo from "@/components/ArticleHowTo";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-canister")!;

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
        <strong>結論</strong>: バックカントリーでクマを引き寄せる最大の要因は
        <strong>食料・調理器具・歯磨き粉などの匂い</strong>。
        対策の核は <strong>ベアキャニスター (フードコンテナ)</strong> か <strong>フードハング</strong>。
        テント内に食料を置かない・匂いを残さない・調理場所と就寝場所を 100m 離す、の 3 点で
        遭遇率は劇的に下がります。
      </p>

      <ArticleToc
        items={[
          { id: "why", title: "なぜ食料管理が最重要か" },
          { id: "canister", title: "フードコンテナ (ベアキャニスター)" },
          { id: "hang", title: "フードハング (吊るし保管)" },
          { id: "pct-howto", title: "PCT方式の吊るし手順" },
          { id: "smell-list", title: "匂い管理対象リスト" },
          { id: "fail-cases", title: "よくある失敗" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why">なぜ食料管理が最重要か</h2>
      <p>
        北米の調査では、キャンプ中のクマトラブルの 80% 以上が食料・匂い物質に関連します。
        日本のキャンプ場でも、生ゴミ・残飯・調味料の匂いが個体を呼び寄せて常習化させる事例が多数。
      </p>
      <ul>
        <li>クマの嗅覚は犬の 7 倍 (<Link href="/articles/bear-senses">クマの感覚</Link>)</li>
        <li>密閉してもジップロック程度では数百 m 先から検知される</li>
        <li>一度味を覚えた個体は同じテン場に再来訪する習性</li>
      </ul>

      <h2 id="canister">フードコンテナ (ベアキャニスター)</h2>
      <p>
        硬質プラスチック製の密閉容器で、クマの牙でも開けられない構造。北米の国立公園では使用義務のエリアあり。
      </p>
      <ul>
        <li>
          <strong>代表機種</strong>:
          BearVault BV450 / BV500 (透明ポリカーボネート) や Garcia Backpacker Cache、
          Wild Ideas Bearikade (軽量カーボン製)。
        </li>
        <li>
          <strong>容量</strong>:
          1 人 1 日約 1L。3 泊 4 日なら 8〜10L が目安。
        </li>
        <li>
          <strong>使い方</strong>:
          食料・歯磨き粉・化粧品をすべて収納。
          就寝中はテントから 100m 離した平らな場所に置く。
          石などで重しはせず、転がっても破れない設計を信じる。
        </li>
        <li>
          <strong>注意</strong>:
          川縁・崖際に置かない (転がって紛失)。匂いの強い容器は外側も拭く。
        </li>
      </ul>

      <h2 id="hang">フードハング (吊るし保管)</h2>
      <p>
        ロープで木に吊るす方式。コンテナよりかさばらず軽量だが、適切な木と高さが必要。
      </p>
      <ul>
        <li>
          <strong>必要な高さ</strong>:
          地上 4m 以上、幹から 2m 以上、最寄りの枝から 1m 以上。
        </li>
        <li>
          <strong>適した木</strong>:
          直径 30cm 以上の幹で、地上 5m 付近に水平な細い枝 (直径 5cm 以下) があるもの。
          太い枝はクマが登る。
        </li>
        <li>
          <strong>ロープ</strong>:
          直径 3〜4mm のダイニーマ系で 30〜40m。投擲用の小石入りスタッフサックも用意。
        </li>
        <li>
          <strong>食料袋</strong>:
          ドライバッグ + 匂いシール袋 (OPSAK 等) の二重構造を推奨。
        </li>
      </ul>

      <h2 id="pct-howto">PCT方式の吊るし手順</h2>
      <ArticleHowTo
        name="PCT方式 (Pacific Crest Trail方式) のフードハング"
        description="ロープを 1 本だけ使う最も普及している方式。木の枝に石でロープを通したあと、カラビナで食料袋を引き上げ、自分の高さで結ぶことでクマが届かない位置に固定します。"
        totalTime="PT15M"
        tool={[
          "30〜40m のダイニーマロープ (3〜4mm)",
          "カラビナ 1 つ",
          "投擲用の小石を入れたスタッフサック",
          "食料用ドライバッグ",
        ]}
        supply={["匂いシール袋 (OPSAK 等)", "握り棒として使える小枝"]}
        steps={[
          {
            name: "適切な枝を選ぶ",
            text: "地上 5m 以上、幹から 2m 以上離れた細い水平枝 (直径 5cm 以下) を選ぶ。クマが登れない太さが重要。",
          },
          {
            name: "ロープを枝越しに通す",
            text: "石入りスタッフサックをロープの片端に結び、枝越しに投げる。何度かやり直しても焦らない。",
          },
          {
            name: "食料袋にカラビナを通す",
            text: "ドライバッグの取っ手にカラビナをかけ、ロープに通す。",
          },
          {
            name: "袋を地上 4m まで引き上げる",
            text: "ロープの反対側を引き、袋を地上 4m 以上、最寄りの枝から 1m 以上離れた位置まで上げる。",
          },
          {
            name: "ロープに小枝を結ぶ",
            text: "袋から 2m ほど下、自分の手が届く位置にロープを小枝で「8 の字結び」して止め、余ったロープを上に引いてクマが届かない位置に固定する。",
          },
          {
            name: "翌朝降ろすときは小枝を解く",
            text: "結んだ小枝を解き、ロープを引っ張って袋を降ろす。木の真下に立たない (落下注意)。",
          },
        ]}
      />

      <h2 id="smell-list">匂い管理対象リスト</h2>
      <p>食料以外もコンテナ / ハングへ:</p>
      <ul>
        <li><strong>調理器具・洗い水・残飯</strong>: 調理直後にすべて密閉</li>
        <li><strong>歯磨き粉・歯ブラシ・うがい水</strong>: ミントの匂いも誘引</li>
        <li><strong>日焼け止め・リップ・ハンドクリーム</strong>: 香料がクマを引き寄せる</li>
        <li><strong>サンスクリーン・虫除け</strong>: ディート系も対象</li>
        <li><strong>ペット用品 (ドッグフード)</strong>: 強い誘引源</li>
        <li><strong>ザック・ウェア</strong>: 食料を入れた服は別保管</li>
      </ul>

      <h2 id="fail-cases">よくある失敗</h2>
      <ul>
        <li>
          <strong>テント内に食料を置く</strong>:
          雨 / 寒さでつい持ち込み、夜間侵入を誘発。
        </li>
        <li>
          <strong>調理場所と就寝場所を離さない</strong>:
          ほぼ同じ場所だと匂いが寝具に染み付く。100m 離すのが原則。
        </li>
        <li>
          <strong>木が細すぎる・枝が太すぎる</strong>:
          幹が細いと木ごと揺すって食料を落とされる。
        </li>
        <li>
          <strong>ロープを枝に直接結ぶ</strong>:
          翌朝固結びになって解けない。スタッフサック投げ + 8 の字止めが基本。
        </li>
        <li>
          <strong>ハングの高さ不足</strong>:
          地上 3m では立ち上がったクマが届く。最低 4m 必須。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "日本のキャンプ場でもベアキャニスターは必要?",
            a: (
              <>
                必須ではないものの、北海道の道北・道東、東北山岳のテン場では強く推奨。
                キャンプ場が指定する保管庫がある場合はそれを利用、無い場合は車に施錠保管か
                フードハングが現実的です。詳しい背景は
                <Link href="/articles/camping">キャンプ場でのクマ対策</Link>。
              </>
            ),
            aText:
              "必須ではないものの、北海道の道北・道東や東北山岳では推奨。指定の保管庫があれば利用し、無ければ車内施錠かフードハングが現実的です。",
          },
          {
            q: "1 泊だけでもフードハングは要る?",
            a: (
              <>
                クマ生息域なら 1 泊でも対応すべきです。クマは 1 晩でテン場を見つける感度を持っています。
                夜間にテントを荒らされると 2 日目以降の行動計画が崩壊するリスクもあります。
              </>
            ),
            aText:
              "クマ生息域なら 1 泊でも対応すべきです。クマは 1 晩でテン場を見つける感度があり、テントを荒らされると行動計画が崩壊するリスクもあります。",
          },
          {
            q: "適切な木が無い場所ではどうする?",
            a: (
              <>
                森林限界より上やブナ林以外の植生では適木が見つからないことがあります。
                その場合はフードコンテナを<strong>テントから 100m 離した岩陰や窪地</strong>に置き、
                何度も転がして探しにくい場所を選びます。匂い対策の二重袋は必須。
              </>
            ),
            aText:
              "森林限界より上などで適木が無い場合はフードコンテナをテントから 100m 離した岩陰や窪地に置き、匂い対策の二重袋を併用してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "キャンプ中のクマトラブルの 80% 以上は食料・匂い物質が原因。",
          "解決策はベアキャニスター or フードハング。テント内に食料を置かない。",
          "PCT方式 = 地上 4m / 幹から 2m / 最寄り枝から 1m 以上の位置に吊るす。",
          "歯磨き粉・日焼け止め・リップ・残飯も同じ扱い。匂いは食料と同等の誘引源。",
          "調理場所と就寝場所を 100m 離す。匂いが寝具に染み付かない設計を。",
        ]}
        footer="フードハングは熟練が要ります。最初は明るいうちに練習しておきましょう。"
      />
    </ArticleShell>
  );
}
