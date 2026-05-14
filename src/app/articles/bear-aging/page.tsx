import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-aging")!;

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
        野生のクマの平均寿命は <strong>15〜25 年</strong>、最長記録は野生で 30 年以上、
        飼育下では 40 年を超える個体もいます。野生・飼育下それぞれで老齢個体に多い疾患は、
        実は人間や犬と共通する<strong>関節炎・白内障・歯磨耗・腎臓病</strong>。
        本記事では動物園・救護施設での老齢ケアの実際と、野生の老齢個体が市街地に出やすくなる傾向まで、
        比較老年医学の視点で解説します。
      </p>

      <ArticleToc
        items={[
          { id: "lifespan", title: "クマの寿命 — 野生と飼育下で大きく違う" },
          { id: "age-estimate", title: "野生クマの年齢推定法" },
          { id: "diseases", title: "老齢クマに多い疾患" },
          { id: "behavior", title: "老齢個体の行動変化 — 市街地に出やすくなる" },
          { id: "zoo-care", title: "動物園・救護施設での老齢ケア" },
          { id: "comparative", title: "比較老年医学 — 人間・犬との共通点" },
          { id: "death", title: "野生のクマはどう死ぬか" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="lifespan">クマの寿命 — 野生と飼育下で大きく違う</h2>
      <p>
        クマの寿命は環境で大きく変わります。
      </p>
      <ul>
        <li>
          <strong>野生のヒグマ</strong>: 平均 15〜20 年、最長 30 年程度
        </li>
        <li>
          <strong>野生のツキノワグマ</strong>: 平均 15〜20 年、最長 25〜30 年
        </li>
        <li>
          <strong>飼育下のヒグマ</strong>: 平均 25〜30 年、最長 40 年超
        </li>
        <li>
          <strong>飼育下のツキノワグマ</strong>: 平均 20〜25 年、最長 35 年超
        </li>
      </ul>
      <p>
        野生・飼育下の差が大きい主な理由は:
      </p>
      <ul>
        <li>飢餓・凶作の影響を受けない</li>
        <li>怪我・感染症が早期に治療される</li>
        <li>捕食者・人間との衝突がない</li>
        <li>厳しい冬眠を強いられない (栄養豊富)</li>
      </ul>
      <p>
        ただし、飼育下では運動不足・肥満・関節疾患など、人間と類似した「文明病」のリスクが上がります。
      </p>

      <h2 id="age-estimate">野生クマの年齢推定法</h2>
      <p>
        野生個体の正確な年齢を知るには、次のような獣医学的手法が使われます。
      </p>
      <ul>
        <li>
          <strong>セメント質年輪法</strong>: 抜歯した小臼歯のセメント質層を顕微鏡観察し、
          樹木の年輪のように年齢を数える。最も信頼性の高い方法
        </li>
        <li>
          <strong>頭蓋骨の縫合線</strong>: 若い個体は縫合線が明瞭、高齢になると癒合
        </li>
        <li>
          <strong>歯磨耗</strong>: 切歯・臼歯の摩耗パターンから概算
        </li>
        <li>
          <strong>体毛・皮膚の状態</strong>: 老齢個体は毛が薄く・白くなる
        </li>
      </ul>
      <p>
        北米の野生動物管理では、捕獲個体のセメント質年輪測定が標準化されており、
        個体群の年齢構造を継続追跡するデータベースが整備されています。
      </p>

      <h2 id="diseases">老齢クマに多い疾患</h2>
      <p>
        動物園・救護施設・解剖記録から、老齢クマに多い疾患は次の通り。
      </p>
      <h3>運動器系</h3>
      <ul>
        <li>
          <strong>変形性関節症 (OA)</strong>: 股関節・膝・肘の関節軟骨摩耗。
          重量級の動物に特に多い。階段・坂道で動きが鈍くなる
        </li>
        <li>
          <strong>椎間板変性</strong>: 腰椎の変性で運動量が低下
        </li>
      </ul>
      <h3>歯科系</h3>
      <ul>
        <li>
          <strong>歯磨耗・歯折</strong>: 硬い堅果類・骨を噛む生活で進行
        </li>
        <li>
          <strong>歯周炎・歯根膿瘍</strong>: 食物選好の変化を引き起こす
        </li>
      </ul>
      <h3>眼科系</h3>
      <ul>
        <li>
          <strong>白内障</strong>: 水晶体の混濁。視力低下から行動パターンが変わる
        </li>
        <li>
          <strong>網膜変性</strong>: 老齢で進行
        </li>
      </ul>
      <h3>内臓系</h3>
      <ul>
        <li>
          <strong>慢性腎臓病</strong>: 多くの哺乳類で老齢期に頻発
        </li>
        <li>
          <strong>肝機能低下</strong>: 飼育下では脂質代謝の問題も
        </li>
        <li>
          <strong>心筋症</strong>: 老齢個体で運動量と心臓への負荷の関係から
        </li>
      </ul>
      <h3>腫瘍</h3>
      <p>
        飼育下の長寿個体では各種腫瘍 (肝腫瘍・乳腺腫瘍・皮膚腫瘍) が観察されます。
        野生では発症前に他の要因で死亡することが多く、腫瘍を持つ個体は少ない。
      </p>

      <h2 id="behavior">老齢個体の行動変化 — 市街地に出やすくなる</h2>
      <p>
        野生の老齢クマは身体的衰えにより<strong>行動範囲を縮小</strong>させ、
        体力的に楽な食物源を選ぶようになります。これが市街地・果樹園での問題を引き起こします。
      </p>
      <ul>
        <li>
          <strong>歯磨耗</strong>: 硬い堅果を割れなくなり、柔らかい果実 (リンゴ・カキ・養蜂のハチミツ) を求める
        </li>
        <li>
          <strong>関節炎</strong>: 急峻な山地を避け、林道・里道で食物を探す
        </li>
        <li>
          <strong>視力低下</strong>: 食物探索が低効率化し、長時間活動が必要に
        </li>
        <li>
          <strong>免疫低下</strong>: 寄生虫・感染症の負荷で更に体力低下
        </li>
      </ul>
      <p>
        北海道・本州で「人を恐れない高齢個体」「異常に痩せた個体」が市街地・住宅地で目撃されるのは、
        多くがこのパターンです。最終的に駆除されることが多いですが、解剖結果から重度の関節炎・歯科疾患が
        確認される個体が増えています。
      </p>

      <h2 id="zoo-care">動物園・救護施設での老齢ケア</h2>
      <p>
        飼育下の老齢クマには、人間や犬と類似した老齢医療が提供されています。
      </p>
      <ul>
        <li>
          <strong>定期健康診断</strong>: 年 1〜2 回の麻酔下健診で血液・尿・レントゲン
        </li>
        <li>
          <strong>関節サプリメント</strong>: グルコサミン・コンドロイチン・オメガ 3 脂肪酸
        </li>
        <li>
          <strong>歯科処置</strong>: 抜歯・歯石除去・歯根治療
        </li>
        <li>
          <strong>食事調整</strong>: 軟食化・低脂質・タンパク質管理
        </li>
        <li>
          <strong>運動療法</strong>: 水浴び・遊具・パズルフィーダーで認知刺激
        </li>
        <li>
          <strong>緩和ケア</strong>: 痛み管理 (NSAIDs・オピオイド)、人道的安楽死の判断
        </li>
      </ul>
      <p>
        多くの動物園では、繁殖期を過ぎたクマの「老後の生活の質 (QOL)」を中心に据えた
        飼育設計が標準になっています。これは比較老年医学の応用事例として国際的にも注目されています。
      </p>

      <h2 id="comparative">比較老年医学 — 人間・犬との共通点</h2>
      <p>
        クマの老齢病態と人間・犬の老齢病態には、共通する生物学的メカニズムが多くあります。
      </p>
      <ul>
        <li>
          <strong>関節軟骨の劣化</strong>: 体重負荷の影響、コラーゲン代謝の低下
        </li>
        <li>
          <strong>水晶体タンパクの変性</strong>: 白内障の共通機序
        </li>
        <li>
          <strong>テロメア短縮・酸化ストレス</strong>: 細胞レベルの老化
        </li>
        <li>
          <strong>免疫老化 (immunosenescence)</strong>: T 細胞機能低下
        </li>
      </ul>
      <p>
        クマで興味深いのは、<strong>冬眠中に骨・筋肉が衰えない</strong>特性。
        この仕組みの解明は、人間の寝たきり高齢者・宇宙飛行士の筋骨格維持研究につながる
        重要な医学的知見です (詳しくは{" "}
        <Link href="/articles/bear-fat-metabolism">クマの脂肪蓄積メカニズム</Link>)。
      </p>

      <h2 id="death">野生のクマはどう死ぬか</h2>
      <p>
        野生クマの死因は次の通り (推定割合は地域・年により変動)。
      </p>
      <ul>
        <li>
          <strong>狩猟・駆除</strong>: 30〜50% (人による直接的死因。地域差大)
        </li>
        <li>
          <strong>交通事故</strong>: 5〜15%
        </li>
        <li>
          <strong>飢餓 (特に若齢個体・凶作年)</strong>: 10〜20%
        </li>
        <li>
          <strong>他個体との闘争 (雄の発情期)</strong>: 5〜10%
        </li>
        <li>
          <strong>感染症・寄生虫</strong>: 5〜10%
        </li>
        <li>
          <strong>事故 (滑落・凍死)</strong>: 5〜10%
        </li>
        <li>
          <strong>老衰</strong>: 稀 (野生で寿命を全うする個体は少ない)
        </li>
      </ul>
      <p>
        野生のクマは人間や犬のように「老衰死」することは少なく、
        老化で身体能力が落ちた個体は他の死因により早期に淘汰されます。
        野生における「老後」は短期間で、その間に市街地に出る・他個体に襲われる・餌が取れず飢えるなどで終わるのが現実です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "クマの「人間年齢換算」はある？",
            a: "明確な換算式は無いが、おおよそクマ 1 年 = 人間 3〜4 年に相当。20 歳のクマは人間で 60〜80 歳に近い。",
            aText: "明確な換算式は無いが、おおよそクマ 1 年 = 人間 3〜4 年に相当。20 歳のクマは人間で 60〜80 歳に近い。",
          },
          {
            q: "野生で 30 歳超えのクマは確認されている？",
            a: "北米のヒグマで 30〜34 歳の個体が確認されています。日本のエゾヒグマでも 30 歳超えの捕獲記録が稀にあります。",
            aText: "北米のヒグマで 30〜34 歳の個体が確認されています。日本のエゾヒグマでも 30 歳超えの捕獲記録が稀にあります。",
          },
          {
            q: "動物園の最長寿命クマは？",
            a: "アメリカクロクマで 44 歳、ヒグマで 40 歳前後の記録があります。日本国内では 30 代後半まで生きる個体は珍しくありません。",
            aText: "アメリカクロクマで 44 歳、ヒグマで 40 歳前後の記録があります。日本国内では 30 代後半まで生きる個体は珍しくありません。",
          },
          {
            q: "高齢のクマは攻撃的になる？",
            a: "個体差が大きいですが、痛み・栄養不良・認知機能低下で人との距離を取れなくなる傾向はあります。痩せて高齢のクマが市街地に出現したら距離を取ってください。",
            aText: "個体差が大きいですが、痛み・栄養不良・認知機能低下で人との距離を取れなくなる傾向はあります。痩せて高齢のクマが市街地に出現したら距離を取ってください。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-fat-metabolism">クマの脂肪蓄積メカニズム</Link> /{" "}
        <Link href="/articles/bear-anesthesia">クマの麻酔と捕獲時の獣医処置</Link> /{" "}
        <Link href="/articles/urban-encounter">アーバンベアと市街地遭遇</Link>
      </p>
    </ArticleShell>
  );
}
