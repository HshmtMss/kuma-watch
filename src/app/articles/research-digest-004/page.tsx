import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-004")!;

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
        「クマは冬眠する」 — これは小学校の教科書にも書かれている基本知識です。
        ところが近年、世界中の研究者から不穏な報告が相次いでいます。
      </p>
      <p className="text-center text-sm italic text-stone-600">
        「クマの冬眠期間が、明らかに短くなっている」
      </p>
      <p>
        スウェーデンの研究チームが、22 年分のヒグマデータを集めて、この問いに正面から取り組みました。
        その結果は、私たちの想像を超える <strong>「自然界の時計のズレ」</strong>を示すものでした。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Hibernation patterns in brown bears are influenced by environmental cues"
        citation={
          <>
            Pigeon, K. E., Stenhouse, G., &amp; Côté, S. D. (2016).{" "}
            <em className="not-italic">Journal of Mammalogy</em> 97(5): 1380–1393.（関連: Evans et al. 2016, Frontiers in Zoology）
          </>
        }
        href="https://doi.org/10.1093/jmammal/gyw105"
        linkText="DOI: 10.1093/jmammal/gyw105 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ヒグマの冬眠開始日は過去 22 年で <strong>平均 6〜10 日遅延</strong>
          </>,
          <>
            覚醒日も早まり、<strong>活動期間が年間 2〜3 週間延長</strong>
          </>,
          <>
            「冬は安全」という前提が崩れ、<strong>人クマ軋轢のシーズンが拡大</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "context", title: "冬眠が「短くなる」とはどういうことか" },
          { id: "data", title: "22 年・100 個体超のテレメトリーデータ" },
          { id: "shift", title: "数字で見る冬眠期間の短縮" },
          { id: "why", title: "なぜ冬眠が短くなるのか" },
          { id: "extreme", title: "「冬眠しないクマ」という極端例" },
          { id: "impact", title: "活動期間が延びると何が起きるか" },
          { id: "japan", title: "日本のクマでも同じことが起きているのか" },
          { id: "oso18", title: "OSO18 という「冬眠しなかったクマ」" },
          { id: "future", title: "気温が 2°C 上がる世界で、クマはどうなる？" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="context">冬眠が「短くなる」とはどういうことか</h2>
      <p>
        まず基礎知識から。クマの冬眠は、ヤマネやリスのような「真の冬眠」とは少し違います。
      </p>
      <p>
        クマの冬眠は <strong>「擬似冬眠 (torpor)」</strong>と呼ばれることもあり、
        体温は 4〜5°C しか下がりません（リスは 5°C 以下まで下がる）。
        ただし代謝は 25% まで落ち、ほぼ飲まず食わず排泄せずに数ヶ月過ごす、生物学的にきわめてユニークな現象です。
      </p>
      <p>
        この冬眠開始のタイミングは、何で決まるのか。古典的には次の 3 要因が関係するとされてきました。
      </p>
      <ul>
        <li>
          🌡️ <strong>気温</strong>（特に最低気温）
        </li>
        <li>
          ❄️ <strong>積雪</strong>（巣穴の準備・体温保持に関係）
        </li>
        <li>
          🌰 <strong>食物の有無</strong>（ドングリ・堅果類の残り具合）
        </li>
      </ul>
      <p>
        では、地球温暖化でこれらの環境要因が変わると、クマの冬眠はどうなるのか？
        この問いに、長期データで答えようとしたのが本論文です。
      </p>

      <h2 id="data">22 年・100 個体超のテレメトリーデータ</h2>
      <p>
        舞台はスウェーデン中部の <strong>ダーラナ地方</strong>と<strong>イェムトランド地方</strong>。
        北緯 60〜62 度、ヨーロッパヒグマの主要生息域です。
      </p>
      <p>
        スカンジナビアン・ベア・プロジェクト（Scandinavian Brown Bear Research Project, SBBRP）は、
        1985 年から続く世界最長級のヒグマ長期研究プロジェクト。
        Pigeon らはこのプロジェクトが蓄積した <strong>1991〜2013 年・約 100 個体・600 冬眠分のデータ</strong>を解析しました。
      </p>
      <p>
        各個体には <strong>GPS 内蔵首輪</strong>が装着されており、毎日数回の位置データが記録されています。
        冬眠中は「動かない」、活動中は「動く」 — このシンプルな違いから、
        個体ごとの冬眠開始日・覚醒日を正確に判定できる仕組みです。
      </p>
      <p>
        合わせて気象データ（気温・積雪・降水）と、個体ごとの体重・年齢・繁殖状態を統合解析しました。
      </p>

      <h2 id="shift">数字で見る冬眠期間の短縮</h2>
      <p>
        論文の主要な発見をまとめます。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">指標</th>
              <th className="px-3 py-2 text-left">過去 22 年での変化</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">冬眠開始日</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">6〜10 日遅延</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">冬眠覚醒日</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">7〜14 日早期化</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">冬眠期間の総延長</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">14〜24 日短縮</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">活動期間（裏返し）</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">+2〜3 週間</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        分かりやすく言えば、<strong>「クマが起きている期間が、22 年で 1 ヶ月近く延びた」</strong>のです。
        これは個体差や年変動を踏まえても、統計的に明確な傾向として観察されました。
      </p>
      <p>
        後続の研究では、北極圏に近いノルウェー北部のヒグマで <strong>さらに大きな変化</strong>が確認されており、
        高緯度地域ほど影響が顕著です。
      </p>

      <h2 id="why">なぜ冬眠が短くなるのか</h2>
      <p>
        Pigeon らは、何が冬眠タイミングを動かしているかを統計的に解析しました。
        最も強く効いていたのは、予想通り <strong>気温</strong>でした。
      </p>
      <ul>
        <li>
          <strong>11 月の気温が高い年</strong>: 冬眠開始が明らかに遅れる
        </li>
        <li>
          <strong>4 月の気温が高い年</strong>: 冬眠覚醒が早まる
        </li>
        <li>
          <strong>積雪量の少ない年</strong>: 同じく覚醒が早まる
        </li>
        <li>
          <strong>体脂肪の多い個体</strong>: より早く冬眠に入れる（余裕がある）
        </li>
        <li>
          <strong>妊娠中の雌</strong>: 子を産むため、より長く冬眠する（性差・繁殖差）
        </li>
      </ul>
      <p>
        重要なのは、<strong>気温変化が直接の引き金</strong>になっていることが定量的に示された点。
        スウェーデン中部の研究地では、過去 22 年で <strong>11 月の平均気温が約 1.5°C 上昇</strong>しており、
        この温暖化幅が冬眠開始遅延の主要因と推定されました。
      </p>

      <h2 id="extreme">「冬眠しないクマ」という極端例</h2>
      <p>
        平均値の話だけでなく、論文では<strong>極端な個体</strong>も観察されました。
      </p>
      <p>
        通常 5〜7 ヶ月冬眠するはずのヒグマのうち、<strong>1〜2 個体は冬眠しなかった</strong>のです。
        その個体は人為的食物源（ゴミ・畜舎飼料・狩猟残渣）に依存しており、
        冬の間も食べ続けて活動を維持していました。
      </p>
      <p>
        これは「気候変動」というよりも、<strong>「人為的食物への学習」と気候変動の合わせ技</strong>で
        生まれた現象です。Vol.2 で取り上げた都市型クマの研究（{" "}
        <Link href="/articles/research-digest-002">Beckmann &amp; Berger 2003</Link>{" "}
        ）と本論文を組み合わせると、人クマ軋轢の構造が一気に見えてきます。
      </p>
      <ul>
        <li>気温が上がる → 冬眠が短くなる</li>
        <li>人為的食物がある → さらに冬眠が短くなる、または冬眠しなくなる</li>
        <li>活動期間が延びる → 人と接触する機会が増える</li>
        <li>母から子へ「冬眠しない生き方」が伝わる</li>
        <li>世代を超えて「冬眠しない個体群」が形成される</li>
      </ul>

      <h2 id="impact">活動期間が延びると何が起きるか</h2>
      <p>
        2〜3 週間の活動期間延長は、地味に聞こえるかもしれません。でも結果は深刻です。
      </p>
      <h3>① 人クマ遭遇シーズンの拡大</h3>
      <p>
        従来「クマは冬眠中だから安全」とされてきた 11 月後半〜3 月の山仕事・狩猟・年末年始の登山で、
        遭遇事例が報告され始めています。
      </p>
      <h3>② 春の母子グマ事故の増加</h3>
      <p>
        覚醒が早まることで、雪解け前の <strong>「春先の母子グマ」</strong>と遭遇する人が増えます。
        春は母グマの攻撃性が最も高く、最も危険な季節です。
      </p>
      <h3>③ 体重減少・繁殖低下のリスク</h3>
      <p>
        逆説的ですが、冬眠期間が短くなることでクマ自身の健康にも影響が出る可能性があります。
        食物が十分にない地域では、活動期間が延びることで体力消耗が増え、繁殖率が下がるという報告もあります。
      </p>
      <h3>④ 個体数推定の前提が崩れる</h3>
      <p>
        従来のクマ管理計画は「冬は活動なし」を前提に組み立てられてきました。
        この前提が崩れることで、捕獲計画・モニタリング設計・予算配分の再検討が必要になっています。
      </p>

      <h2 id="japan">日本のクマでも同じことが起きているのか</h2>
      <p>
        日本でも気候変動の影響は確実に進行しており、いくつかの間接的な証拠が出てきています。
      </p>
      <h3>① 冬期目撃事例の増加</h3>
      <p>
        北海道・東北で、過去 5 年間で <strong>1 月〜2 月のクマ目撃通報</strong>が
        以前と比べて明らかに増えています。雪が少ない年は特に顕著です。
      </p>
      <h3>② 3 月の早期覚醒</h3>
      <p>
        本来 4 月前後に覚醒するはずのヒグマが、2026 年は北海道で <strong>3 月初旬から目撃</strong>されています。
        2026 年 4 月の{" "}
        <Link href="/articles/autumn-forecast-2026">秋出没予報</Link>
        の前提となる「春の早期覚醒」は、まさにこの現象です。
      </p>
      <h3>③ 11〜12 月の遅延出没</h3>
      <p>
        12 月に入っても市街地・農地で出没情報が継続する地域が増えています。
        2025 年秋田・新潟では 12 月の人身被害事案も複数報告されました。
      </p>

      <h2 id="oso18">OSO18 という「冬眠しなかったクマ」</h2>
      <p>
        日本で最も有名な「冬眠しなかった可能性のあるクマ」が、
        2018 年から 2023 年まで北海道標茶町・厚岸町で乳牛 66 頭を襲い続けた巨大ヒグマ
        <strong>「OSO18」</strong>です。
      </p>
      <p>
        OSO18 はその活動パターンから、研究者の間で <strong>「冬眠していない、あるいは極端に短期間しか冬眠していない」</strong>
        個体ではないかと議論されてきました。捕獲後の体格・栄養状態の解析からも、
        冬の間に十分な栄養を維持していた可能性が指摘されています。
      </p>
      <p>
        OSO18 の例は <strong>「人為的食物（牛）+ 個体の学習」</strong>と「気候変動による活動期間延長」が
        重なった、Beckmann &amp; Pigeon の知見の延長線上にある現象と理解できます。
      </p>

      <h2 id="future">気温が 2°C 上がる世界で、クマはどうなる？</h2>
      <p>
        IPCC（気候変動に関する政府間パネル）の予測では、2050 年までに地球平均気温は
        <strong>+1.5〜2.5°C</strong>上昇する見込みです。
        高緯度地域ではこれより大きく、北海道では <strong>+3°C</strong>を超える可能性も指摘されています。
      </p>
      <p>
        Pigeon らの研究で得られた「気温 1°C 上昇あたり、冬眠が約 5 日短縮」という関係を当てはめると、
        2050 年の日本のクマは <strong>今より 1 ヶ月以上活動期間が長く</strong>なっている可能性があります。
      </p>
      <p>
        つまり、現在「冬は安全」と考えられている 11 月〜3 月のうち、
        多くの期間がクマ警戒シーズンになる、ということです。
        これはクマ対策のあり方そのものを変える話で、自治体・観光業・登山業界が今から備える必要があります。
      </p>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>「冬は安全」と決めつけない</strong> — 冬期登山・年末年始の山仕事・スキー場周辺などでも、
          基本装備（ホーン・スプレー・複数人行動）を意識しましょう。
        </li>
        <li>
          <strong>春先（3〜4 月）の山入りに最大警戒</strong> — 覚醒直後の母子グマと遭遇する可能性が高い時期。
          春の山菜採り・林業作業はリスクが特に高くなっています。
        </li>
        <li>
          <strong>誘引物管理を「年中」徹底</strong> — 冬の間も食物を求めるクマが現れる以上、
          ゴミ・果樹・畜舎飼料の管理は年中通じて。冬だから油断、は通用しません。
        </li>
        <li>
          <strong>冬期の目撃情報を必ず通報する</strong> — 「冬眠していない個体」を早期に把握することは
          地域の安全管理にとって極めて重要です。{" "}
          <Link href="/articles/bear-report">通報マニュアル</Link>
          を参照してください。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Hibernation patterns in brown bears are influenced by environmental cues（本号メイン）",
            citation: (
              <>
                Pigeon, K. E., Stenhouse, G., &amp; Côté, S. D. (2016).{" "}
                <em className="not-italic">Journal of Mammalogy</em> 97(5): 1380–1393.
              </>
            ),
            href: "https://doi.org/10.1093/jmammal/gyw105",
            linkText: "DOI: 10.1093/jmammal/gyw105 →",
          },
          {
            title:
              "Climate change drives shorter denning duration in Scandinavian brown bears",
            citation: (
              <>
                Evans, A. L., et al. (2016).{" "}
                <em className="not-italic">Frontiers in Zoology</em> 13: 7.
              </>
            ),
            href: "https://doi.org/10.1186/s12983-016-0140-6",
            linkText: "DOI: 10.1186/s12983-016-0140-6 →",
          },
          {
            title: "Scandinavian Brown Bear Research Project（プロジェクト公式）",
            href: "https://www.scandinavianbearproject.org/",
            linkText: "scandinavianbearproject.org →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.5">
        <strong>「クマは何を嗅いで人里に来るのか？」</strong> —
        ヒグマの嗅覚は犬の 7 倍、人の 2,100 倍。匂いだけで数 km 先の食物を見つけられる
        という驚異の感覚を、行動学・解剖学・心理学の最新研究から精読します。
      </NextIssue>
    </ArticleShell>
  );
}
