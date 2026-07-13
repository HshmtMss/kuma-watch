import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, Callout, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-030")!;

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
        2026 年春。本シリーズ「クマ研究ダイジェスト」もついに最終回を迎えました。
        Vol.1 のクマスプレー研究から始まり、進化・冬眠・AI 個体識別・食性・社会・観光・経済学まで、
        世界各国の <strong>30 本の論文</strong>を読み解いてきました。
      </p>
      <p>
        最終回となる今回は、<strong>「クマと人の未来」</strong>を考える総説として、
        Carter &amp; Linnell（2016, Trends in Ecology &amp; Evolution）を取り上げます。
        シリーズ全 30 本の知見を統合し、日本のクマと人の関係を未来に向けて展望します。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文（シリーズ最終回）"
        title="Co-adaptation is key to coexisting with large carnivores"
        citation={
          <>
            Carter, N. H., &amp; Linnell, J. D. C. (2016).{" "}
            <em className="not-italic">Trends in Ecology &amp; Evolution</em> 31(8): 575–578.
          </>
        }
        href="https://doi.org/10.1016/j.tree.2016.05.006"
        linkText="DOI: 10.1016/j.tree.2016.05.006 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            人とクマの共存の鍵は <strong>「双方の適応」</strong> ＝ 共進化
          </>,
          <>
            動物だけ変えるのではなく、<strong>人間社会も意識・行動を変える</strong>必要がある
          </>,
          <>
            シリーズ 30 本の知見すべてが、この「<strong>共進化フレーム</strong>」に収まる
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "シリーズ最終回 — 何が見えてきたか" },
          { id: "paper", title: "Carter &amp; Linnell の総説の核心" },
          { id: "old", title: "従来の発想 — 「動物を変える」前提" },
          { id: "new", title: "新しい発想 — 「人間も変わる」共進化フレーム" },
          { id: "examples", title: "世界での共進化の成功例" },
          { id: "japan-now", title: "日本の現状を 30 本の論文から見直す" },
          { id: "where", title: "私たちはどこにいるのか" },
          { id: "where-next", title: "私たちはどこへ向かうのか" },
          { id: "five-pillars", title: "共進化の 5 つの柱" },
          { id: "personal", title: "個人ができる共進化の実践" },
          { id: "closing", title: "30 本の論文を読み終えて — 編集後記" },
          { id: "list", title: "シリーズ Vol.1〜30 のリスト" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">シリーズ最終回 — 何が見えてきたか</h2>
      <p>
        Vol.1〜29 まで、世界各国の 29 本のクマ研究を読み解いてきました。
      </p>
      <p>
        振り返ってみると、それぞれの論文が <strong>異なる角度</strong>から
        クマと人の関係を照らしていたことが分かります。
      </p>
      <ul>
        <li>
          🐻 クマの <strong>身体能力</strong>: 嗅覚・咬合力・エネルギー収支（Vol.5, 17, 26）
        </li>
        <li>
          🧠 クマの <strong>認知能力</strong>: 数の理解・学習・社会階層（Vol.10, 19）
        </li>
        <li>
          🌳 クマの <strong>生態系役割</strong>: 生態系エンジニア・腐肉食（Vol.18, 29）
        </li>
        <li>
          🏘️ 人クマの <strong>軋轢構造</strong>: 都市型・襲撃・経済（Vol.2, 12, 14, 28）
        </li>
        <li>
          🛡️ 対策の <strong>科学的検証</strong>: スプレー・電気柵・ベアドッグ（Vol.1, 7, 20）
        </li>
        <li>
          🌍 共存の <strong>制度・政策</strong>: 再導入・捕獲移動・観光（Vol.9, 21, 27）
        </li>
      </ul>
      <p>
        これら全てを統合する <strong>「フレーム」</strong>は何か？
        この問いに答えるのが、本号で取り上げる Carter &amp; Linnell 2016 の総説です。
      </p>

      <h2 id="paper">Carter &amp; Linnell の総説の核心</h2>
      <p>
        筆頭著者 <strong>Neil Carter</strong> は、米国・ミシガン大学の野生動物保全学者。
        トラ・オオカミ・クマなど大型肉食獣と人の共存研究で知られます。
      </p>
      <p>
        共著者 <strong>John Linnell</strong> は本シリーズで Vol.9・Vol.24 にも登場した
        ノルウェーの保全研究者。食肉目の管理の世界的権威です。
      </p>
      <p>
        この 2 人が 2016 年に Trends in Ecology &amp; Evolution 誌（生物学界の超一流誌）に
        発表した総説の核心メッセージはシンプル。
      </p>
      <p className="text-center my-4 text-sm italic text-stone-600">
        「大型肉食獣との共存には、動物だけでなく、<strong>人間社会も適応する</strong>必要がある」
      </p>
      <p>
        これを <strong>「共進化（co-adaptation）」</strong>と呼びます。
        生物学的な進化ではなく、<strong>動物の行動と人間の行動が双方向に変化していくプロセス</strong>を指します。
      </p>

      <h2 id="old">従来の発想 — 「動物を変える」前提</h2>
      <p>
        20 世紀型の野生動物管理は、<strong>「動物を人間社会に合わせる」</strong>発想でした。
      </p>
      <ul>
        <li>
          🔫 <strong>問題個体を駆除</strong>して、人慣れない集団に置き換える
        </li>
        <li>
          🚚 <strong>捕獲移動</strong>で危険な個体を遠ざける
        </li>
        <li>
          🔧 <strong>嫌悪条件付け</strong>で動物の行動を変える
        </li>
        <li>
          🏞️ <strong>保護区を分離</strong>して、動物を狭い範囲に閉じ込める
        </li>
      </ul>
      <p>
        Vol.9（{" "}
        <Link href="/articles/research-digest-009">捕獲移動</Link>
        ）と Vol.20（{" "}
        <Link href="/articles/research-digest-020">嫌悪条件付け</Link>
        ）で見たように、これらは <strong>部分的にしか機能しません</strong>。
        その理由が、本論文の出発点でした。
      </p>

      <h2 id="new">新しい発想 — 「人間も変わる」共進化フレーム</h2>
      <p>
        Carter &amp; Linnell の提案は、<strong>「人間も適応する」</strong>という発想の転換でした。
      </p>
      <ul>
        <li>
          🗑️ 人間が <strong>誘引物管理</strong>を徹底する（クマを呼ばない暮らし方）
        </li>
        <li>
          🛡️ 人間が <strong>適切な装備と知識</strong>を備える（遭遇しても安全に対処）
        </li>
        <li>
          📚 人間が <strong>地域全体で教育</strong>を継続する（世代を超えた知識の継承）
        </li>
        <li>
          🤝 人間が <strong>制度的に支え合う</strong>（被害農家への補償・予防への投資）
        </li>
        <li>
          💼 人間が <strong>クマの存在を経済資源</strong>に転換する（観光・研究・教育産業）
        </li>
      </ul>
      <p>
        動物だけを変えようとするのは、<strong>「片側通行の関係」</strong>。
        共進化は <strong>「双方向の関係」</strong>。後者の方が、はるかに持続可能で生産的だ、というのが
        論文の主張です。
      </p>

      <h2 id="examples">世界での共進化の成功例</h2>
      <p>
        Carter &amp; Linnell は、世界の代表的な共進化事例を整理しています。
      </p>
      <h3>🇮🇳 インド・ベンガル地方のトラ</h3>
      <p>
        人口密度の高い地域でトラとの共存を実現。住民教育・補償制度・保護区連結の組合せ。
      </p>
      <h3>🇪🇪 エストニアのオオカミ</h3>
      <p>
        家畜飼育者への <strong>守護犬・電気柵への補助</strong>が広く行きわたり、軋轢が大幅減。
      </p>
      <h3>🇮🇹 イタリアのヒグマ</h3>
      <p>
        Vol.21（{" "}
        <Link href="/articles/research-digest-021">トレンティーノ再導入</Link>
        ）で見たように、絶滅寸前から個体群回復。住民教育の継続が鍵。
      </p>
      <h3>🇸🇪 スウェーデンのヒグマ</h3>
      <p>
        個体数と被害をバランスさせる科学的管理体制。狩猟と保護の共存。
      </p>
      <h3>🇺🇸 アラスカ・カナダのヒグマ</h3>
      <p>
        Vol.27（{" "}
        <Link href="/articles/research-digest-027">ベアウォッチング観光</Link>
        ）で見たように、観光資源としての価値が保護を支える。
      </p>

      <h2 id="japan-now">日本の現状を 30 本の論文から見直す</h2>
      <p>
        ここで、本シリーズ全 30 本の知見を日本の現状に当てはめて整理してみましょう。
      </p>
      <h3>✅ できていること</h3>
      <ul>
        <li>
          <strong>科学的モニタリング</strong>: GPS テレメトリー・カメラトラップが各都道府県で運用（Vol.3, 22）
        </li>
        <li>
          <strong>電気柵の普及</strong>: 日本発の研究を基に各地で実装（Vol.7）
        </li>
        <li>
          <strong>ベアドッグの導入</strong>: 軽井沢を先駆けに広がりつつある（Vol.20）
        </li>
        <li>
          <strong>知床のベア観光</strong>: 共存型観光の好例（Vol.27）
        </li>
      </ul>
      <h3>⚠️ 課題が残ること</h3>
      <ul>
        <li>
          <strong>誘引物管理</strong>: 都市型クマの増加が示すように、まだ不十分（Vol.2, 5, 6）
        </li>
        <li>
          <strong>住民教育</strong>: 世代を超えた継続的教育の仕組みが不足
        </li>
        <li>
          <strong>補償制度</strong>: 「実損失」をカバーする制度設計が遅れている（Vol.28）
        </li>
        <li>
          <strong>気候変動対応</strong>: 冬期・春期出没への準備が不十分（Vol.4, 26）
        </li>
        <li>
          <strong>共進化視点</strong>: 「人間が変わる」発想がまだ限定的
        </li>
      </ul>

      <h2 id="where">私たちはどこにいるのか</h2>
      <p>
        2025〜2026 年、日本では <strong>クマ出没・人身被害が記録的なレベル</strong>に達しました。
        2025 年の全国出没は <strong>39,801 件</strong>（KumaWatch 集計）、過去最高水準です。
      </p>
      <p>
        この状況は、これまでの <strong>「20 世紀型」管理</strong>の限界を物語っています。
      </p>
      <ul>
        <li>
          🔫 <strong>捕獲駆除中心</strong>: 個体数は維持されているが、軋轢は減らない
        </li>
        <li>
          🏘️ <strong>誘引物の放置</strong>: 都市型クマが増え続ける
        </li>
        <li>
          📚 <strong>住民教育の単発</strong>: 世代を超えて知識が継承されない
        </li>
        <li>
          🌡️ <strong>気候変動への遅れ</strong>: 冬期・春期の対応が不十分
        </li>
      </ul>
      <p>
        Vol.30 までの知見を踏まえると、私たちは <strong>「共進化への転換点」</strong>に立っているのです。
      </p>

      <h2 id="where-next">私たちはどこへ向かうのか</h2>
      <p>
        Carter &amp; Linnell が示すように、共進化の達成は <strong>10〜20 年単位</strong>の取り組みです。
        一朝一夕には変わらない。でも、世界各国の事例は <strong>「達成可能」</strong>であることも証明しています。
      </p>
      <p>
        日本の場合、2026 年 4 月の <strong>クマ「指定管理鳥獣」化</strong>（{" "}
        <Link href="/articles/designated-management-2026">解説記事</Link>
        ）は、共進化への重要な一歩と位置づけられます。
        国の交付金で予防・誘引物管理・教育に投資できる体制が整いつつあります。
      </p>
      <p>
        これからの 10 年、日本のクマと人の関係は <strong>大きな転換期</strong>を迎えるでしょう。
      </p>

      <h2 id="five-pillars">共進化の 5 つの柱</h2>
      <p>
        本シリーズ全 30 本の知見を統合すると、人とクマの共進化を支える <strong>5 つの柱</strong>が浮かび上がります。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>誘引物の徹底管理</strong> — クマを呼ぶ食物・匂いを生活圏から除去（Vol.2, 5, 6, 28）
        </li>
        <li>
          <strong>科学的モニタリング</strong> — AI・GPS・市民投稿でクマの実態を可視化（Vol.3, 22, 25）
        </li>
        <li>
          <strong>多層的な防御技術</strong> — 電気柵・スプレー・ベアドッグの組合せ（Vol.1, 7, 20）
        </li>
        <li>
          <strong>持続可能な制度設計</strong> — 補償・教育・予防への公的投資（Vol.21, 28）
        </li>
        <li>
          <strong>個人と社会の意識転換</strong> — 「動物だけ変える」から「人間も変わる」（本号）
        </li>
      </ol>

      <h2 id="personal">個人ができる共進化の実践</h2>
      <p>
        最後に、本シリーズの締めくくりとして、個人レベルでできる共進化の実践を整理します。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>誘引物管理を厳密に</strong> — 生ゴミ・落果・ペットフードの管理
        </li>
        <li>
          <strong>装備と知識を備える</strong> — スプレー・鈴・遭遇時の対処を学習
        </li>
        <li>
          <strong>地域でデータを共有</strong> — KumaWatch・自治体への目撃情報投稿
        </li>
        <li>
          <strong>世代を超えた教育</strong> — 子供・若者にクマの知識を伝える
        </li>
        <li>
          <strong>多面的な対策を支持</strong> — 駆除一辺倒でなく「予防 + 補償 + 観光」の多層管理を支持
        </li>
      </ol>

      <h2 id="closing">30 本の論文を読み終えて — 編集後記</h2>
      <p>
        2026 年 5 月。本シリーズの最終号を書き終えて、編集部として感じることがあります。
      </p>
      <p>
        クマは「<strong>敵</strong>」ではありません。<strong>「対話の相手」</strong>です。
      </p>
      <p>
        Vol.1 のクマスプレー研究で見たように、クマは <strong>適切な装備</strong>で人間を傷つけずに済みます。
        Vol.10 で見たように、クマは <strong>賢く学習する</strong>動物です。
        Vol.18 で見たように、クマは <strong>森の生態系エンジニア</strong>です。
        Vol.30（本号）で見たように、クマは <strong>共進化のパートナー</strong>です。
      </p>
      <p>
        私たち人間とクマは、数万年にわたって日本列島・地球で <strong>共生</strong>してきました。
        その関係が今、新たな局面を迎えています。
      </p>
      <p>
        本シリーズが、皆さんがクマと人の関係を <strong>科学的に考える</strong>きっかけになれば、
        編集部としてこれ以上の喜びはありません。
      </p>
      <p>
        ご愛読ありがとうございました。
      </p>
      <p className="text-right text-sm text-stone-600">
        — KumaWatch / 獣医工学ラボ 編集部
      </p>

      <h2 id="list">シリーズ Vol.1〜30 のリスト</h2>
      <div className="not-prose my-4 grid grid-cols-1 gap-1.5 text-xs">
        {[
          ["01", "クマスプレーの撃退率（Smith 2008）", "research-digest-001"],
          ["02", "都市型クマの夜行性化（Beckmann 2003）", "research-digest-002"],
          ["03", "AI 顔認識で個体識別（Clapham 2020）", "research-digest-003"],
          ["04", "気候変動と冬眠（Pigeon 2016）", "research-digest-004"],
          ["05", "嗅覚は犬の 7 倍（Niimura 2014）", "research-digest-005"],
          ["06", "栄養バランス食選好（Erlenbach 2014）", "research-digest-006"],
          ["07", "長野リンゴ園電気柵（Huygens 2001）", "research-digest-007"],
          ["08", "冬眠生理と医学応用（Tøien 2011）", "research-digest-008"],
          ["09", "捕獲移動の現実（Linnell 1997）", "research-digest-009"],
          ["10", "クマは数を理解する（Vonk 2012）", "research-digest-010"],
          ["11", "着床遅延と繁殖（Spady 2007）", "research-digest-011"],
          ["12", "致命的襲撃の統計（Herrero 2011）", "research-digest-012"],
          ["13", "樹幹マーキング（Clapham 2014）", "research-digest-013"],
          ["14", "世界ヒグマ襲撃メタ解析（Bombieri 2019）", "research-digest-014"],
          ["15", "クマ進化（Liu 2014 Cell）", "research-digest-015"],
          ["16", "腸内細菌と冬眠（Sommer 2016）", "research-digest-016"],
          ["17", "咬合力比較（Christiansen 2007）", "research-digest-017"],
          ["18", "生態系エンジニア（Hocking 2011）", "research-digest-018"],
          ["19", "社会階層（Stonorov 1972）", "research-digest-019"],
          ["20", "ベアドッグの効果（Beckmann 2004）", "research-digest-020"],
          ["21", "トレンティーノ再導入", "research-digest-021"],
          ["22", "GPS 行動圏（Mowat 2006）", "research-digest-022"],
          ["23", "仔の生存率（Schwartz 2006）", "research-digest-023"],
          ["24", "冬眠巣穴の選定（Linnell 2000）", "research-digest-024"],
          ["25", "クマの 12 種類の鳴き声（Peters 1984）", "research-digest-025"],
          ["26", "ホッキョクグマのエネルギー収支（Pagano 2018）", "research-digest-026"],
          ["27", "観光経済（Penteriani 2017）", "research-digest-027"],
          ["28", "家畜被害の経済学（Mertens 2001）", "research-digest-028"],
          ["29", "腐肉食動物としてのクマ（Wilmers 2003）", "research-digest-029"],
          ["30", "共進化の総括（Carter &amp; Linnell 2016）", "research-digest-030"],
        ].map(([no, title, slug]) => (
          <Link
            key={slug}
            href={`/articles/${slug}`}
            className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 hover:border-amber-400 hover:bg-amber-50"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-bold tabular-nums text-stone-700">
              {no}
            </span>
            <span className="text-sm text-stone-900">{title}</span>
          </Link>
        ))}
      </div>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Co-adaptation is key to coexisting with large carnivores（本号メイン）",
            citation: (
              <>
                Carter, N. H., &amp; Linnell, J. D. C. (2016).{" "}
                <em className="not-italic">Trends in Ecology &amp; Evolution</em> 31(8): 575–578.
              </>
            ),
            href: "https://doi.org/10.1016/j.tree.2016.05.006",
            linkText: "DOI: 10.1016/j.tree.2016.05.006 →",
          },
          {
            title: "Status and ecological effects of the world's largest carnivores",
            citation: (
              <>
                Ripple, W. J., et al. (2014).{" "}
                <em className="not-italic">Science</em> 343(6167): 1241484.
              </>
            ),
          },
          {
            title: "Recovery of large carnivores in Europe's modern human-dominated landscapes",
            citation: (
              <>
                Chapron, G., et al. (2014).{" "}
                <em className="not-italic">Science</em> 346(6216): 1517–1519.
              </>
            ),
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <Callout label="シリーズ完結" tone="amber">
        全 30 本の研究ダイジェスト、お読みいただきありがとうございました。
        世界の最前線研究を引き続きキャッチアップし、新シリーズ「Vol.31〜」も予定しています。
        ご意見・取り上げてほしい論文は KumaWatch の{" "}
        <Link href="/credits" className="text-amber-700 underline">
          運営情報
        </Link>
        までお寄せください。
      </Callout>
    </ArticleShell>
  );
}
