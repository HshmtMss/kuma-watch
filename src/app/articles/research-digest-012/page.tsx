import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-012")!;

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
        「クマで一番怖いのは、子連れの母グマだよ」 — 登山愛好者なら一度は聞いたことがある言葉です。
        本やネット記事にも、たびたび出てくる「常識」。
      </p>
      <p>
        ところが、北米 110 年分のクロクマ襲撃データを統計的に分析した有名な論文によると、
        この常識は <strong>事実とは大きくズレている</strong>ことが分かりました。
        命を守るためには、<strong>本当に危険な状況</strong>を知っておく必要があります。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Fatal attacks by American black bear on people: 1900–2009
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Herrero, S., Higgins, A., Cardoza, J. E., Hajduk, L. I., &amp; Smith, T. S. (2011).{" "}
          <em className="not-italic">Journal of Wildlife Management</em> 75(3): 596–603.
        </div>
        <a
          href="https://doi.org/10.1002/jwmg.72"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1002/jwmg.72 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-red-300 bg-red-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-red-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            北米 110 年分の致命的クロクマ襲撃 <strong>63 件</strong>を統計分析
          </li>
          <li>
            襲ったクマの <strong>88% が単独の成獣雄</strong>。「母グマが危険」は誤り
          </li>
          <li>
            大半は <strong>捕食目的</strong>。「驚いた・防衛」ではなく「食べに来た」
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intuition", title: "「子連れの母グマ」幻想を覆す事実" },
          { id: "researchers", title: "クマ襲撃研究の世界的権威たち" },
          { id: "data", title: "110 年分・63 件の致命的事案" },
          { id: "shocking", title: "衝撃の事実① — 襲ったのは「単独の成獣雄」" },
          { id: "predatory", title: "衝撃の事実② — ほとんどが捕食性襲撃" },
          { id: "victims", title: "犠牲者の特徴 — 単独行動・寝ている時" },
          { id: "geo", title: "地理的・時期的なパターン" },
          { id: "vs-brown", title: "ヒグマの襲撃と比較すると" },
          { id: "japan", title: "日本のクマでも当てはまるのか" },
          { id: "what-to-do", title: "もしクロクマ的個体に遭遇したら" },
          { id: "myth", title: "他にも覆されたクマ襲撃の俗説" },
          { id: "action", title: "今日からあなたができる 5 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intuition">「子連れの母グマ」幻想を覆す事実</h2>
      <p>
        私たちが <strong>「クマで一番怖いのは母グマ」</strong>と思うのは、自然な感情です。
        映画・小説・絵本でも、「子を守る母グマの猛攻」は定番のシーン。
        実際、ヒグマでは子連れ母グマの攻撃事案が多いのも事実。
      </p>
      <p>
        ところが <strong>アメリカクロクマに限定すると、この常識は完全に間違っている</strong>。
        Herrero らの分析結果は、それまでの北米のクマ対策ガイドラインを根本的に書き換えるものでした。
      </p>
      <p>
        なぜこの違いが生じたのか。そしてこの知見は、日本のツキノワグマにも当てはまるのか。
        順を追って見ていきましょう。
      </p>

      <h2 id="researchers">クマ襲撃研究の世界的権威たち</h2>
      <p>
        本論文の筆頭著者は <strong>Stephen Herrero</strong>。
        Vol.1（{" "}
        <Link href="/articles/research-digest-001">クマスプレー検証</Link>
        ）でも登場した、北米クマ襲撃研究の第一人者です。
        1985 年の名著 <em>Bear Attacks: Their Causes and Avoidance</em> 以来、
        <strong>40 年以上にわたり個別事案の蓄積と分析</strong>を続けてきました。
      </p>
      <p>
        共著者には、米国国立公園局や州野生生物課のベテラン研究者たちが集まりました。
        この 5 人が <strong>110 年分の事案記録</strong>を統合し、初めて統計的に解析できる
        データセットを作り上げたのです。
      </p>

      <h2 id="data">110 年分・63 件の致命的事案</h2>
      <p>
        分析対象は、<strong>1900〜2009 年の 110 年間に北米で発生した、アメリカクロクマによる致命的襲撃事案 63 件</strong>。
      </p>
      <p>
        データの出所は次の通り。
      </p>
      <ul>
        <li>米国 25 州 + カナダ 6 州の野生生物管理機関の事故報告書</li>
        <li>新聞・メディア報道（過去 1 世紀分）</li>
        <li>検死報告・警察記録</li>
        <li>遺族・目撃者への聞き取り（可能な場合）</li>
        <li>Herrero らの個別蓄積データベース</li>
      </ul>
      <p>
        この 110 年分 = <strong>北米のアメリカクロクマ全体生息範囲・全期間</strong>を網羅したサンプルです。
        個別の体験談や地域の事案だけでは見えない、<strong>大局的なパターン</strong>がここで初めて見えるようになりました。
      </p>

      <h2 id="shocking">衝撃の事実① — 襲ったのは「単独の成獣雄」</h2>
      <p>
        63 件の襲撃クマを、性別・年齢・親子か単独かで分類した結果は、まさに常識を覆すものでした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">襲ったクマの分類</th>
              <th className="px-3 py-2 text-left">割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-red-50/50">
              <td className="px-3 py-2 font-semibold">単独の成獣雄</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">88%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">単独の若い雄</td>
              <td className="px-3 py-2 tabular-nums">8%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">単独の雌（子なし）</td>
              <td className="px-3 py-2 tabular-nums">3%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">子連れの母グマ</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">&lt; 1%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        子連れの母グマが致命的襲撃の原因になったケースは <strong>63 件中ほぼゼロ</strong>。
        対して、<strong>9 割近くが「単独で動く成獣雄」</strong>でした。
      </p>
      <p>
        さらに、襲ったクマの体重・年齢を見ると、<strong>多くが繁殖期の壮年雄（5〜15 歳・体重 70kg 超）</strong>。
        若くて経験の少ない雄や、子育てに集中している雌ではなく、
        <strong>独立して縄張りを持つ「働き盛りの雄」</strong>が圧倒的多数を占めていました。
      </p>

      <h2 id="predatory">衝撃の事実② — ほとんどが捕食性襲撃</h2>
      <p>
        次に、襲撃の<strong>動機</strong>を分析しました。クマの襲撃には大きく分けて 3 つのパターンがあります。
      </p>
      <ol>
        <li>
          <strong>防衛性襲撃</strong>: 子を守る、縄張りを守る、食物を守る、急に驚かされた
        </li>
        <li>
          <strong>捕食性襲撃</strong>: 人を「食物」と認識して襲う
        </li>
        <li>
          <strong>偶発的襲撃</strong>: 巣穴侵入や直接接触など特殊な状況
        </li>
      </ol>
      <p>
        多くの人は、クマ襲撃は <strong>「驚かせたから」「子を守ったから」</strong>といった
        防衛性のものが大半だと思っています。実際、被害件数（負傷含む）では防衛性が多い。
      </p>
      <p>
        ところが <strong>致命的襲撃に限定する</strong>と、結果は逆転します。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">襲撃の動機</th>
              <th className="px-3 py-2 text-left">致命的事案での割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-red-50/50">
              <td className="px-3 py-2 font-semibold">捕食性襲撃</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">88%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">防衛性襲撃</td>
              <td className="px-3 py-2 tabular-nums">~12%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        致命的なクロクマ襲撃の <strong>9 割は「捕食性」</strong>。つまりクマは、
        被害者を <strong>「食料」と判断して</strong>襲ったケースが圧倒的多数だったのです。
      </p>
      <p>
        これは「子を守ろうとして攻撃された」とは全く違う構造です。
        防衛性襲撃は <strong>「攻撃して引き下がる」</strong>のが普通で、命を奪うところまで行きません。
        捕食性襲撃は <strong>「食べるまで攻撃を続ける」</strong>、だから致命的になります。
      </p>

      <h2 id="victims">犠牲者の特徴 — 単独行動・寝ている時</h2>
      <p>
        次に、被害者の状況を分析。これも興味深いパターンを示しました。
      </p>
      <ul>
        <li>
          <strong>単独で活動していた</strong>: 91%
        </li>
        <li>
          <strong>夜・夕方・早朝</strong>: 66%
        </li>
        <li>
          <strong>寝ているとき・キャンプ中</strong>: 38%
        </li>
        <li>
          <strong>食料を持っていた・調理していた</strong>: 50%
        </li>
        <li>
          <strong>子供（18 歳未満）</strong>: 30%（人口に対して過剰代表）
        </li>
        <li>
          <strong>森林の奥地・キャンプ場周辺</strong>: 71%
        </li>
      </ul>
      <p>
        犠牲者の多くは <strong>「単独」「夜間」「食料あり」「奥地」</strong>という、
        クマが捕食対象として「狙いやすい」条件にいた人々でした。
      </p>
      <p>
        特に子供の被害率が高かったのは、捕食性襲撃では <strong>「体格の小さい個体」</strong>が
        標的になりやすいというパターンを反映している、と Herrero らは解釈しています。
      </p>

      <h2 id="geo">地理的・時期的なパターン</h2>
      <p>
        110 年分のデータから、地域と時期の傾向も明らかになりました。
      </p>
      <ul>
        <li>
          <strong>地域</strong>: アメリカクロクマの致命的襲撃の <strong>86% が、人口密度の低い辺境地域</strong>で発生
        </li>
        <li>
          <strong>時期</strong>: 5〜9 月の<strong>夏季</strong>に集中。秋のハイパーフェイジア期は実は少ない
        </li>
        <li>
          <strong>時代</strong>: 過去 50 年で <strong>件数増加傾向</strong>（人口・登山客の増加が主因）
        </li>
        <li>
          <strong>カナダ・アラスカ・ロッキー山脈北部</strong>に集中
        </li>
      </ul>
      <p>
        辺境地域での発生が多いのは、<strong>「人慣れしていない雄クマ」</strong>がそこに多く、
        かつ被害発見が遅れて致死率が上がる、という構造を反映しています。
      </p>

      <h2 id="vs-brown">ヒグマの襲撃と比較すると</h2>
      <p>
        本論文はアメリカクロクマに焦点を当てていますが、Herrero は別の論文（Herrero &amp; Higgins 2003）で
        ヒグマ襲撃事例も分析しています。両者を比較すると、特徴の違いが浮き彫りに。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">特徴</th>
              <th className="px-3 py-2 text-left">アメリカクロクマ</th>
              <th className="px-3 py-2 text-left">ヒグマ（grizzly）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">主な襲撃者</td>
              <td className="px-3 py-2">単独の成獣雄（88%）</td>
              <td className="px-3 py-2">母グマ・成獣雄が混在</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">主な動機</td>
              <td className="px-3 py-2">捕食性（88%）</td>
              <td className="px-3 py-2">防衛性（70% 以上）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">死亡時の対処</td>
              <td className="px-3 py-2">反撃推奨（plays dead は危険）</td>
              <td className="px-3 py-2">プレイデッド推奨</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">体格</td>
              <td className="px-3 py-2">中型 70〜200kg</td>
              <td className="px-3 py-2">大型 200〜400kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        この違いは、対処法の <strong>根本的な違い</strong>を生みます。
      </p>
      <ul>
        <li>
          <strong>ヒグマに襲われたら → プレイデッド（死んだふり）</strong>
          : 防衛性攻撃なので、無抵抗を示せばクマは離れる
        </li>
        <li>
          <strong>クロクマに襲われたら → 反撃</strong>
          : 捕食性攻撃なので、無抵抗だと食べられる
        </li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/playing-dead">プレイデッド（死んだふり）の正しい知識</Link>
        も合わせて参照してください。
      </p>

      <h2 id="japan">日本のクマでも当てはまるのか</h2>
      <p>
        日本にはアメリカクロクマは生息しませんが、近縁種の <strong>ツキノワグマ</strong>が本州・四国・九州に。
        Herrero らの知見は、ツキノワグマにも適用可能でしょうか？
      </p>
      <h3>① 体格・行動が比較的近い</h3>
      <p>
        ツキノワグマ（成獣 80〜150kg）は、アメリカクロクマ（70〜200kg）と体格・性格が近く、
        類似の行動パターンを示します。
      </p>
      <h3>② 日本でも「単独成獣雄」の人身被害事例が多い</h3>
      <p>
        東北・北陸の事案を見ると、人身被害を起こしたツキノワグマの多くは
        <strong>3〜10 歳の単独雄</strong>です。子連れ母グマによる致命的襲撃は、日本でもむしろ稀。
      </p>
      <h3>③ 捕食性襲撃も日本で報告されている</h3>
      <p>
        OSO18 のような <strong>「人慣れせず畜舎襲撃を学習した雄ヒグマ」</strong>は、まさに本論文が指摘するタイプの個体。
        2025 年の秋田・新潟の人身被害事案にも、<strong>「明確な捕食意図」</strong>が疑われる事例が複数含まれていました。
      </p>
      <p>
        ただし、日本では <strong>2 つの注意点</strong>があります。
      </p>
      <ul>
        <li>
          ヒグマ（北海道）はアメリカクロクマと違い、<strong>防衛性襲撃が多数</strong>。プレイデッドが有効
        </li>
        <li>
          ツキノワグマでも <strong>「驚かせた・追い詰めた」場合は防衛性</strong>。状況判断が必要
        </li>
      </ul>

      <h2 id="what-to-do">もしクロクマ的個体に遭遇したら</h2>
      <p>
        本論文の知見を踏まえ、捕食性襲撃と判断すべき状況を整理します。
      </p>
      <ul>
        <li>
          単独のクマが <strong>静かに・じわじわと</strong>近づいてくる
        </li>
        <li>
          顔・耳の動きが <strong>「観察モード」</strong>（攻撃前の威嚇音なし）
        </li>
        <li>
          進路を変えても、クマが <strong>追跡してくる</strong>
        </li>
        <li>
          近距離での <strong>「食事を始める」「咬みつく」</strong>動作
        </li>
        <li>
          襲撃を受けて <strong>抵抗しても続けて攻撃される</strong>
        </li>
      </ul>
      <p>
        この場合は <strong>「反撃」</strong>が原則。鞄・棒・石・スプレー、何でも使って
        クマを<strong>苦痛・恐怖を感じさせる</strong>ことが、生存率を最大化します。
        プレイデッドは絶対 NG。詳細は{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
        を参照。
      </p>

      <h2 id="myth">他にも覆されたクマ襲撃の俗説</h2>
      <p>
        本論文と関連研究で、他にも多くの「クマ常識」が覆されています。
      </p>
      <ul>
        <li>
          ❌ 「クマは木に登れないから木に登れば安全」 → アメリカクロクマは <strong>登る</strong>。
        </li>
        <li>
          ❌ 「クマは水に弱いから川に逃げれば良い」 → クマは <strong>泳ぎが得意</strong>。
        </li>
        <li>
          ❌ 「夜は襲ってこない」 → 致命的襲撃は <strong>夜・夕方に集中</strong>。
        </li>
        <li>
          ❌ 「子グマがいないなら安全」 → 子連れ母グマ被害は <strong>1% 未満</strong>。
        </li>
        <li>
          ❌ 「群れで襲ってくる」 → クマは <strong>基本単独</strong>。
        </li>
        <li>
          ❌ 「クマは臆病だから人を襲わない」 → <strong>単独雄</strong>は人を食料として認識する個体がいる。
        </li>
      </ul>
      <p>
        この「俗説」をクマ目撃に関連する{" "}
        <Link href="/articles/bear-myths">クマの誤解 5 つ</Link>
        にもまとめているので併読を。
      </p>

      <h2 id="action">今日からあなたができる 5 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>単独行動を避ける</strong> — 致命的襲撃の 91% は単独行動中。
          山に入るときは複数人で、最低でも声が届く距離で。
        </li>
        <li>
          <strong>夜・夕方の単独行動は最大限避ける</strong> — 致命的事案の 66% がこの時間帯。
          キャンプの調理・トイレも明るいうちに済ませる。
        </li>
        <li>
          <strong>キャンプでは食料を厳重保管</strong> — 食料の保管不備が捕食性襲撃のトリガーになる。
          ベアキャニスター（{" "}
          <Link href="/articles/bear-canister">ベアキャニスター解説</Link>
          ）を使用し、テントから 100m 以上離す。
        </li>
        <li>
          <strong>「子供を森の奥に単独で行かせない」</strong> — 体格が小さい個体ほど捕食対象になりやすい。
          山菜採り・きのこ狩りでも子供を単独行動させない。
        </li>
        <li>
          <strong>襲われた場合の対処法を「種別に」覚える</strong> — ヒグマはプレイデッド、
          クロクマ・ツキノワグマで捕食性なら反撃。判断は瞬時に必要。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Fatal attacks by American black bear on people: 1900–2009（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Herrero, S., Higgins, A., Cardoza, J. E., Hajduk, L. I., &amp; Smith, T. S. (2011).{" "}
              <em className="not-italic">Journal of Wildlife Management</em> 75(3): 596–603.
            </div>
            <a
              href="https://doi.org/10.1002/jwmg.72"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1002/jwmg.72 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Field use of capsicum spray as a bear deterrent
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Herrero, S., &amp; Higgins, A. (1998).{" "}
              <em className="not-italic">Ursus</em> 10: 533–537.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              <em className="not-italic">Bear Attacks: Their Causes and Avoidance</em>
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Herrero, S. (1985, revised 2018). Lyons Press.
            </div>
          </li>
        </ol>
      </div>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
          次号予告 — Vol.13
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマは何を木に擦りつけているのか — 樹幹マーキングの謎」</strong> —
          BC 大学の Clapham 2014 が解明した、クマが特定の木を選んで背中をこすりつける行動。
          そこには「クマだけの SNS」のような複雑な情報交換が隠れていました。
        </div>
      </div>
    </ArticleShell>
  );
}
