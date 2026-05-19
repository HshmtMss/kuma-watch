import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-002")!;

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
        「最近のクマは夜に出る」 — 秋田や盛岡、札幌の住民から、ここ数年よく聞くようになった声です。
        昔のクマは早朝や夕方に出るものだったはず。
        本当に夜行性に変わりつつあるのか？ あるいは私たちの気のせいなのか。
      </p>
      <p>
        この問いに、米国・タホ湖のクロクマで <strong>20 年かけて答えを出した研究</strong>があります。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Rapid ecological and behavioural changes in carnivores: the responses of black bears (Ursus americanus) to altered food
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Beckmann, J. P., &amp; Berger, J. (2003).{" "}
          <em className="not-italic">Journal of Zoology</em> 261(2): 207–212.
        </div>
        <a
          href="https://doi.org/10.1017/S0952836903004126"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1017/S0952836903004126 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            タホ湖周辺のクロクマは <strong>30 年で「昼型」から「夜型」へ</strong>大変化
          </li>
          <li>
            街のクマは <strong>体が大きく、冬眠期間が短く、子をたくさん産む</strong>
          </li>
          <li>
            原因は「人のゴミ」。一度学習すると <strong>子グマにも伝わる</strong>
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "story", title: "タホ湖のクロクマたちが変わってしまった" },
          { id: "method", title: "20 年間の追跡で何を調べたか" },
          { id: "shift", title: "数字で見る「昼型 → 夜型」シフト" },
          { id: "fatter", title: "街のクマは大きく、太り、冬眠しない" },
          { id: "why-night", title: "なぜ夜行性になったのか" },
          { id: "learning", title: "母から子へ「街での生き方」が伝わる" },
          { id: "ecology", title: "これは進化なのか、学習なのか" },
          { id: "japan", title: "日本でも同じことが起きているのか" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "reversibility", title: "都市型クマは元に戻せるのか？" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="story">タホ湖のクロクマたちが変わってしまった</h2>
      <p>
        アメリカ・ネバダ州とカリフォルニア州にまたがる <strong>タホ湖</strong>。
        サウスタホ・インクライン・ビレッジなど、湖畔には人口数千〜数万人の街が並びます。
        そのすぐ裏は、シエラネバダ山脈の深い森です。
      </p>
      <p>
        この街と森の境界線で起きていた変化に、最初に気づいたのは
        <strong>ジョン・ベックマン（Jon Beckmann）</strong>という若い研究者でした。
        1996 年、ベックマンがクマの研究を始めたとき、地元のレンジャーたちは口を揃えて言いました。
      </p>
      <p className="text-center text-sm italic text-stone-600">
        「昔のクマは昼にしか見なかった。最近のクマは、夜にゴミ箱を漁る」
      </p>
      <p>
        ベックマンは、これを科学的に検証することにしました。
        指導教官は野生動物保全の世界的権威 <strong>ジョエル・バーガー（Joel Berger）</strong>。
        2 人は <strong>1996 年から 2002 年までの 6 年間、計 30 頭以上のクロクマに VHF / GPS 首輪を装着</strong>
        し、24 時間体制で行動を追跡しました。
      </p>
      <p>
        さらに過去のデータ（1980 年代の記録）と比較することで、
        <strong>「過去 30 年でクマたちの行動はどう変わったのか」</strong>という
        長期的な視点での解析を実現しました。それが 2003 年に発表された本論文です。
      </p>

      <h2 id="method">20 年間の追跡で何を調べたか</h2>
      <p>
        ベックマンらが比較したのは、ざっくり言うと <strong>「街に住むクマ」と「森に住むクマ」</strong>です。
      </p>
      <ul>
        <li>
          🏘️ <strong>都市隣接群（urban interface）</strong>: 街から 1km 以内をうろつくクロクマ群
        </li>
        <li>
          🌲 <strong>奥山群（wildland）</strong>: 街から離れた森の奥に生息するクロクマ群
        </li>
      </ul>
      <p>
        この 2 群について、次の指標を 6 年間追跡し、1980 年代のベースラインデータと比較しました。
      </p>
      <ul>
        <li>
          <strong>活動時間帯</strong>（昼か夜か、それとも全時間帯か）
        </li>
        <li>
          <strong>体重・体格</strong>
        </li>
        <li>
          <strong>冬眠期間</strong>（いつ冬眠して、いつ起きるか）
        </li>
        <li>
          <strong>繁殖成功率</strong>（何頭の子グマが生まれたか）
        </li>
        <li>
          <strong>行動範囲</strong>（テリトリーの広さ）
        </li>
      </ul>

      <h2 id="shift">数字で見る「昼型 → 夜型」シフト</h2>
      <p>
        最も衝撃的だったのが、活動時間の変化です。
        本来クロクマは <strong>「薄明薄暮性」</strong>と呼ばれる、早朝と夕方に活動が集中するパターンが基本。
        ところが、街に住むクマたちは見事に「夜型」へと変わっていました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">活動時間帯</th>
              <th className="px-3 py-2 text-left">奥山のクマ</th>
              <th className="px-3 py-2 text-left">街のクマ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">昼間（明るい時間）</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">90%</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">10%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">夜間（暗い時間）</td>
              <td className="px-3 py-2 text-stone-700 tabular-nums">10%</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">90%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ものの見事に <strong>真逆</strong>です。同じ「クロクマ」なのに、街に近い個体は
        <strong>活動の 9 割を夜に行う</strong>ようになっていました。
      </p>
      <p>
        さらに 1980 年代のデータと比較すると、その変化は明らかに最近のもの。
        1980 年代の街周辺のクマは奥山群とほぼ同じ昼型だったのに、
        <strong>たった 20 年で逆転</strong>していたのです。
      </p>

      <h2 id="fatter">街のクマは大きく、太り、冬眠しない</h2>
      <p>
        変わったのは時間だけではありませんでした。街のクマは <strong>体つきまで変わっていた</strong>のです。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">指標</th>
              <th className="px-3 py-2 text-left">奥山のクマ</th>
              <th className="px-3 py-2 text-left">街のクマ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">体重</td>
              <td className="px-3 py-2 tabular-nums">基準値</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">+30%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">体脂肪率</td>
              <td className="px-3 py-2 tabular-nums">普通</td>
              <td className="px-3 py-2 text-red-700 font-bold">明らかに高い</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">冬眠期間</td>
              <td className="px-3 py-2 tabular-nums">5〜7 ヶ月</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">0〜2 ヶ月</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">子グマの数（1 回出産あたり）</td>
              <td className="px-3 py-2 tabular-nums">2 頭</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">3 頭</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        いちばん衝撃的だったのは <strong>冬眠期間</strong>です。
        本来、クロクマは秋から春先まで 5〜7 ヶ月も穴ごもりするのが普通。
        ところが街のクマの一部は <strong>「ほぼ冬眠しない」</strong>個体まで現れていました。
      </p>
      <p>
        理由は単純です。<strong>冬の間も食料が手に入る</strong>から。
        街のゴミ箱、ペットフード、放置された果樹、釣り餌、レストラン裏の生ごみ。
        年中食べ放題なら、体力を温存するために冬眠する必要がないのです。
      </p>
      <p>
        さらに <strong>体が大きいほど子グマがたくさん産まれ、生存率も高い</strong>。
        街のクマは生物学的にも「成功」していました。
        これは保全としては良いことのように見えますが、実は別の問題を引き起こします（後述）。
      </p>

      <h2 id="why-night">なぜ夜行性になったのか</h2>
      <p>
        ここで本論文の核心。クマは進化的にも文化的にも昼行性〜薄明薄暮性なのに、
        <strong>なぜわざわざ夜に活動するように変わった</strong>のでしょうか？
      </p>
      <p>
        答えは「<strong>人間との接触を避けるため</strong>」です。
      </p>
      <p>
        ベックマンらは興味深い観察を記録しています。街のクマたちは決して人を襲おうとはせず、
        むしろ <strong>「人がいない時間」を選んで街に降りてくる</strong>。
        昼間は近くの森に潜み、人通りが減る夜 9 時以降に行動を始め、夜明け前に森へ戻る。
      </p>
      <p>
        これは <strong>「人嫌い・餌好き」のジレンマを最適化した戦略</strong>と言えます。
        街のクマは人を避けたいが、街の食物は捨てがたい。
        この相反する要求のバランスを取るために、活動時間帯を <strong>「人がいない時間」</strong>にシフトさせたのです。
      </p>
      <p>
        この戦略は世界中の都市環境に住む大型哺乳類で確認されており、
        <strong>「人為的夜行性化（anthropogenic nocturnality）」</strong>と呼ばれます。
        その代表事例として、Beckmann &amp; Berger の論文は今も引用され続けています。
      </p>

      <h2 id="learning">母から子へ「街での生き方」が伝わる</h2>
      <p>
        さらに衝撃的なのは、この行動が <strong>母から子へ受け継がれていく</strong>ことです。
      </p>
      <p>
        ベックマンらは GPS データから、街のクマの子グマが
        <strong>2 歳で母グマから独立した後も、街周辺に留まる傾向</strong>を見出しました。
        奥山で生まれた子グマは奥山で暮らし続け、街で生まれた子グマは街で暮らし続ける。
        まるで <strong>「街の住人」</strong>として代替わりしているかのように。
      </p>
      <p>
        これは遺伝ではなく <strong>学習による伝達</strong>です。
        母グマと一緒に過ごす最初の 2 年間で、子グマは
        「ゴミ箱はどこにあるか」「人が活動する時間帯」「車を避ける方法」など、
        街での生き方の <strong>マニュアル</strong>を母から教わってしまうのです。
      </p>
      <p>
        これは「<strong>都市型クマは一過性の現象ではなく、世代を超えて続く</strong>」ことを意味します。
        一度形成された「都市型クマ個体群」は、その地域で安定して存在し続ける可能性が高い。
      </p>

      <h2 id="ecology">これは進化なのか、学習なのか</h2>
      <p>
        この発見をめぐって、当時の生物学者たちは大きな議論を始めました。
      </p>
      <p>
        「クマは進化的に夜行性に変わりつつあるのか？」
        「それとも、その世代だけの学習行動なのか？」
      </p>
      <p>
        現時点（2026 年）の理解では、両方の要素が混じった
        <strong>「行動の可塑性（behavioral plasticity）」</strong>として解釈されています。
        つまり、遺伝子のセットは同じでも、環境と学習に応じて活動時間を柔軟に変えられる
        柔軟性がクマ科の動物にはもともと備わっており、それが今、北米都市部で発現している、
        という見方です。
      </p>
      <p>
        ベックマン自身、2008 年の続編論文で「<strong>これは文化的な変化に近い</strong>」
        と表現しています。子グマが母グマから学ぶ知識が世代を超えて蓄積される様子は、
        進化というより、文化伝達の方が近いという解釈です。
      </p>

      <h2 id="japan">日本でも同じことが起きているのか</h2>
      <p>
        では、日本のツキノワグマでも同じことが起きているのでしょうか？
      </p>
      <p>
        日本では北米ほど大規模な GPS テレメトリー研究は行われていませんが、
        間接的なデータから <strong>「ほぼ確実に起きている」</strong>ことが推測できます。
      </p>
      <h3>① 出没データの時間帯シフト</h3>
      <p>
        秋田・盛岡・札幌・富山などで近年急増している「住宅地クマ目撃」の通報時刻は、
        圧倒的に <strong>夜 20 時〜深夜 2 時</strong>に集中しています。
        2025 年の秋田市内の事案では、住宅街での出没の <strong>7 割以上が夜間</strong>でした。
      </p>
      <h3>② 体格の大型化傾向</h3>
      <p>
        2026 年 4 月、北海道苫前町で <strong>330kg のヒグマ</strong>が捕獲されました。
        これは過去 30 年の平均より明らかに大型で、専門家からは「人為的食料への依存」が指摘されています。
        ツキノワグマでも、果樹園・サイレージ・廃棄食品にアクセスできる個体は大型化傾向があります。
      </p>
      <h3>③ 冬眠の不全</h3>
      <p>
        近年、<strong>「冬眠しないクマ」</strong>の事例が日本でも報告されています。
        北海道のヒグマ「OSO18」（2018〜2023 年に乳牛襲撃を続けたヒグマ）は、
        冬眠していない可能性が議論されていました。
        ツキノワグマでも、雪の少ない地域・人為的食料源がある地域で同様の現象が見られます。
      </p>
      <h3>④ 親子伝達</h3>
      <p>
        市街地に出る母グマが子グマを連れているケースが増えており、
        2025 年秋田・新潟では市街地への母子グマ出没事案が複数報告されました。
        Beckmann が指摘した「親子伝達」が日本でも進行中である可能性があります。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/urban-bear">アーバン・ベア — 市街地に出るクマと住民の備え</Link>
        を参照してください。
      </p>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <p>
        この論文の知見を、日本の生活レベルで生かせるアクションは次の通りです。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>夜の出歩きを「リスク管理」する</strong> — 市街地近隣の山間部居住地では、
          夜 20 時〜深夜の散歩・ジョギング・ペット散歩は最大の警戒時間帯です。明かりが多い時間帯に時間をずらす。
        </li>
        <li>
          <strong>誘引物を徹底排除する</strong> — クマが街を「居場所」に選ぶ最大の要因は<strong>食べ物</strong>です。
          生ごみは収集日まで密閉、果樹は完熟前に収穫、ペットフード屋外保管禁止、コンポスト堆肥は野生動物に触らせない。
        </li>
        <li>
          <strong>「親子クマ」目撃に最大警戒</strong> — 母グマは攻撃性が極めて高いだけでなく、
          子グマに「街での生き方」を教えている真っ最中。<strong>すぐ自治体に通報</strong>することで、
          世代を超える定着を防げます（{" "}
          <Link href="/articles/bear-report">通報マニュアル</Link>{" "}参照）。
        </li>
        <li>
          <strong>「一度来たクマは何度も来る」と理解する</strong> — 学習したクマは数年単位で同じ場所を訪れます。
          1 回の目撃で対策を打ち、誘引物管理と通報を徹底することが、長期的な住みつきを防ぐ最良の方法です。
        </li>
      </ol>

      <h2 id="reversibility">都市型クマは元に戻せるのか？</h2>
      <p>
        この論文の最も重い問いは、「<strong>一度都市型化したクマを、再び奥山型に戻せるか</strong>」です。
      </p>
      <p>
        ベックマンらは続編研究（Beckmann &amp; Lackey 2008）で、いくつかの介入実験を行いました。
        ゴミ箱の <strong>クマ対策化（bear-proof container）</strong>、住宅地の<strong>果樹伐採</strong>、
        コンポスト管理の徹底、罰金つきの<strong>「ごみ管理条例」</strong>などです。
      </p>
      <p>
        結果はある程度ポジティブでした。<strong>個体群レベルで誘引物を徹底排除した地域では、
        次世代のクマが再び奥山型の生活に戻る兆しが観察された</strong>のです。
        ただし、これには年単位の時間と地域住民全員の協力が必要でした。
      </p>
      <p>
        日本では今後、同様の介入が <strong>自治体・警察・住民の三者連携</strong>で
        進められる必要があります。クマが市街地に来る根本原因の多くは「誘引物の存在」であり、
        それを断つことなしには夜行性化・大型化・繁殖成功率の上昇は止まりません。
        2026 年 4 月のクマ「指定管理鳥獣」化（{" "}
        <Link href="/articles/designated-management-2026">解説記事</Link>{" "}）は、
        この方向への大きな一歩と言えます。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Rapid ecological and behavioural changes in carnivores: the responses of black bears to altered food（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Beckmann, J. P., &amp; Berger, J. (2003).{" "}
              <em className="not-italic">Journal of Zoology</em> 261(2): 207–212.
            </div>
            <a
              href="https://doi.org/10.1017/S0952836903004126"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1017/S0952836903004126 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Carnivores, urban landscapes, and longitudinal studies: a case history of black bears
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Beckmann, J. P., &amp; Lackey, C. W. (2008).{" "}
              <em className="not-italic">Human-Wildlife Conflicts</em> 2(2): 168–174.
            </div>
            <a
              href="https://digitalcommons.unl.edu/hwi/55/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              全文（DigitalCommons） →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              The influence of human disturbance on wildlife nocturnality（夜行性化のメタ解析）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Gaynor, K. M., Hojnowski, C. E., Carter, N. H., &amp; Brashares, J. S. (2018).{" "}
              <em className="not-italic">Science</em> 360(6394): 1232–1235.
            </div>
            <a
              href="https://doi.org/10.1126/science.aar7121"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1126/science.aar7121 →
            </a>
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
          次号予告 — Vol.3
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「カメラトラップ × 深層学習 — AI はクマを見分けられるか？」</strong> —
          年間 320 万枚の動物画像を学習し、種同定 96.6% を達成した深層学習研究（Norouzzadeh et al. 2018, PNAS）
          を精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
