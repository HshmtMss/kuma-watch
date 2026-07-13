import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-023")!;

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
        母グマが冬眠中の巣穴で出産する仔グマは、平均 <strong>2 頭</strong>。
        春に巣穴を出て、可愛らしい姿で母にくっついて歩く子グマたち。
        でも、その後 1 年で <strong>半分が命を落とす</strong>のが現実です。
      </p>
      <p>
        北米のイエローストーン国立公園で 20 年以上に渡ってヒグマを追跡した
        Schwartz らの大規模研究が、クマの繁殖の <strong>厳しい数字</strong>を明らかにしました。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title={
          <>
            Temporal, spatial, and environmental influences on the demographics of grizzly bears in the Greater Yellowstone Ecosystem
          </>
        }
        citation={
          <>
            Schwartz, C. C., Haroldson, M. A., White, G. C., et al. (2006).{" "}
            <em className="not-italic">Wildlife Monographs</em> 161: 1–68.
          </>
        }
        href="https://doi.org/10.2193/0084-0173(2006)161%5B1:TSAEIO%5D2.0.CO;2"
        linkText="DOI link →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            イエローストーンのヒグマ <strong>20+ 年・数百頭</strong>の繁殖を追跡
          </>,
          <>
            <strong>1 年目の仔グマ生存率は 60〜80%</strong>、母グマの生涯出産数は数頭のみ
          </>,
          <>
            人為要因（交通事故・密猟・自衛駆除）が <strong>仔の死亡要因の上位</strong>
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "クマの赤ちゃんは、なかなか大人になれない" },
          { id: "yellowstone", title: "イエローストーンの 20 年研究" },
          { id: "method", title: "数百頭のヒグマを追跡した統計学" },
          { id: "litter", title: "1 産あたり何頭生まれるか" },
          { id: "survival", title: "仔グマの生存率 — 年齢別の冷徹な数字" },
          { id: "reasons", title: "なぜ仔グマはこんなに死ぬのか" },
          { id: "lifetime", title: "母グマの生涯出産数" },
          { id: "human", title: "人為要因の影響 — 街と道路が殺す" },
          { id: "conservation", title: "個体群維持のための数学" },
          { id: "japan", title: "日本のクマでも同様の構造" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">クマの赤ちゃんは、なかなか大人になれない</h2>
      <p>
        多くの人はクマの繁殖について、こんなイメージを持っています。
        <strong>「強い動物だから、子供もよく育つ」</strong>。
      </p>
      <p>
        ところが現実は逆です。クマは大型動物の中でも <strong>繁殖力の弱い種</strong>。
        1 年に 1 産しかせず、子供の数も少なく、しかも生存率が低い。
      </p>
      <p>
        この現実を最も精密に定量化したのが、Schwartz らの 2006 年の大著です。
        100 頁を超える <strong>Wildlife Monographs</strong> 誌の特別号として発表され、
        野生動物保全の必読文献となりました。
      </p>

      <h2 id="yellowstone">イエローストーンの 20 年研究</h2>
      <p>
        舞台は世界最古の国立公園、米国 <strong>イエローストーン国立公園</strong>。
        ワイオミング・モンタナ・アイダホ 3 州にまたがる広大な保護区で、ヒグマの主要生息地です。
      </p>
      <p>
        1973 年から始まった <strong>「Interagency Grizzly Bear Study Team（IGBST）」</strong>
        という連邦・州横断プロジェクトが、ヒグマの個体群動向を継続的に追跡してきました。
      </p>
      <p>
        Schwartz らは、1983〜2002 年の <strong>20 年分のデータ</strong>を統合解析。
        対象は <strong>数百頭</strong>のヒグマで、生まれ・育ち・繁殖・死亡を <strong>全てを統計的に追跡</strong>
        した壮大な研究です。
      </p>
      <p>
        ここから得られたデータは、北米だけでなく <strong>世界中のヒグマ保全</strong>の基礎となっています。
      </p>

      <h2 id="method">数百頭のヒグマを追跡した統計学</h2>
      <p>
        20 年に及ぶ研究では、次のような労力が積み重ねられました。
      </p>
      <ul>
        <li>
          🐻 <strong>個体識別</strong>: VHF / GPS 首輪を装着し、生涯追跡
        </li>
        <li>
          🍼 <strong>母子の確認</strong>: 春の巣穴出時に母グマと一緒の子グマの数を計数
        </li>
        <li>
          📈 <strong>毎年の再確認</strong>: 翌年も生き残った子グマを照合
        </li>
        <li>
          ⚰️ <strong>死亡確認</strong>: 死体発見・GPS 信号停止での死亡時期と原因の推定
        </li>
        <li>
          🧬 <strong>遺伝子サンプル</strong>: DNA で個体間の親子関係を確認
        </li>
      </ul>
      <p>
        これらを統計的に統合し、ヒグマ個体群全体の <strong>「人口統計（demographics）」</strong>
        を明らかにしました。生存率・繁殖率・移動率を年齢・性別ごとに精密推定。
      </p>

      <h2 id="litter">1 産あたり何頭生まれるか</h2>
      <p>
        まず基本データから。母グマは <strong>4〜5 歳で初めて出産</strong>し、
        その後 2〜4 年に 1 回のペースで出産します。
      </p>
      <p>
        1 産あたりの仔グマ数（litter size）の分布は次の通り。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">1 産あたりの仔グマ数</th>
              <th className="px-3 py-2 text-left">割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">1 頭</td>
              <td className="px-3 py-2 tabular-nums">~25%</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">2 頭</td>
              <td className="px-3 py-2 text-amber-700 font-bold tabular-nums">~50%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">3 頭</td>
              <td className="px-3 py-2 tabular-nums">~20%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">4 頭</td>
              <td className="px-3 py-2 tabular-nums">~5%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        平均は <strong>約 2 頭</strong>。4 頭の双子（四つ子）は稀ですが、発生します。
        母体の栄養状態が良いほど多く生まれる傾向。Vol.6（{" "}
        <Link href="/articles/research-digest-006">食選好</Link>{" "}
        ）と Vol.11（{" "}
        <Link href="/articles/research-digest-011">着床遅延</Link>{" "}
        ）で見た栄養 → 妊娠の経路がここに繋がります。
      </p>

      <h2 id="survival">仔グマの生存率 — 年齢別の冷徹な数字</h2>
      <p>
        次に生存率。これがクマ繁殖の <strong>厳しい現実</strong>を物語ります。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">年齢段階</th>
              <th className="px-3 py-2 text-left">年間生存率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-red-50/50">
              <td className="px-3 py-2 font-semibold">仔グマ 0〜1 歳</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">60〜80%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">幼獣 1〜2 歳</td>
              <td className="px-3 py-2 tabular-nums">80〜85%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">若獣 2〜5 歳</td>
              <td className="px-3 py-2 tabular-nums">85〜90%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">成獣 5〜20 歳</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">90〜95%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        最も死にやすいのが <strong>「0〜1 歳の仔グマ」</strong>。1 年間で 20〜40% が死亡。
        これを 4 歳までの生存率に積算すると、結果は衝撃的です。
      </p>
      <ul>
        <li>
          0 歳から 1 歳まで: 60〜80% 生存
        </li>
        <li>
          0 歳から 2 歳まで: 約 50% 生存
        </li>
        <li>
          0 歳から 4 歳（独立して繁殖可能になる）まで: <strong>約 40〜50% 生存</strong>
        </li>
      </ul>
      <p>
        つまり、<strong>「生まれた仔グマの半分は大人になれない」</strong>のがヒグマの世界です。
      </p>

      <h2 id="reasons">なぜ仔グマはこんなに死ぬのか</h2>
      <p>
        Schwartz らは死亡要因も詳しく分析しました。
      </p>
      <h3>自然要因</h3>
      <ul>
        <li>
          🐻 <strong>同種雄による殺仔（infanticide）</strong>: 雄が他個体の仔を殺して母を繁殖サイクルに戻す
        </li>
        <li>
          🌪️ <strong>事故・落下・溺死</strong>: 川渡り・崖からの転落
        </li>
        <li>
          🍴 <strong>母グマの食料不足</strong>: ハイパーフェイジア期の凶作年は仔も衰弱
        </li>
        <li>
          ❄️ <strong>冬眠中の死亡</strong>: 巣穴の崩落・極寒・母乳不足
        </li>
        <li>
          🦊 <strong>他種による捕食</strong>: オオカミ・ピューマ（北米）
        </li>
      </ul>
      <h3>人為要因</h3>
      <ul>
        <li>
          🚗 <strong>自動車衝突</strong>: 経験不足な若グマほど道路で事故に遭いやすい
        </li>
        <li>
          🔫 <strong>密猟・違法駆除</strong>: 母グマを撃たれて孤児になった仔
        </li>
        <li>
          ⚖️ <strong>自衛駆除</strong>: 家畜被害などで母グマが駆除される際、仔も連動
        </li>
        <li>
          🚮 <strong>誘引物中毒</strong>: ゴミ・農薬・人為的食物による中毒
        </li>
      </ul>
      <p>
        分析の結果、人為要因が仔グマ死亡の <strong>30〜50%</strong>を占めていた、というのが
        Schwartz らの結論の一つでした。これは保全政策に直接影響を与えました。
      </p>

      <h2 id="lifetime">母グマの生涯出産数</h2>
      <p>
        さらに別の角度で見ると、<strong>「母グマが生涯で育て上げる仔の数」</strong>はもっと少なくなります。
      </p>
      <ul>
        <li>
          🎂 平均寿命: <strong>15〜25 歳</strong>（野生）
        </li>
        <li>
          🍼 初産年齢: <strong>4〜5 歳</strong>
        </li>
        <li>
          📅 出産間隔: <strong>2〜4 年に 1 回</strong>
        </li>
        <li>
          👶 平均 1 産あたり仔: <strong>2 頭</strong>
        </li>
        <li>
          ✅ 仔の成獣到達率: <strong>40〜50%</strong>
        </li>
      </ul>
      <p>
        これらを掛け合わせると、1 頭の母グマが生涯で繁殖可能年齢まで育て上げる仔は
        <strong>平均 3〜5 頭</strong>程度。
      </p>
      <p>
        生まれる仔の数は多くても、生き延びるのは少ない。これがクマの繁殖戦略です。
        Vol.11（{" "}
        <Link href="/articles/research-digest-011">着床遅延</Link>
        ）で見た「妊娠キャンセル機能」と組み合わせると、クマは
        <strong>「無理に生まない、生んでも全部は育てない」</strong>戦略を取っていることが分かります。
      </p>

      <h2 id="human">人為要因の影響 — 街と道路が殺す</h2>
      <p>
        Schwartz らの最も重要な発見は、<strong>「人為要因の累積効果」</strong>でした。
      </p>
      <p>
        個別の自動車事故・密猟・自衛駆除は、それぞれは小さな数字に見えます。
        でも、これらが <strong>毎年積み重なる</strong>と、母グマの世代交代に追いつかなくなる。
      </p>
      <p>
        モデル計算では、<strong>仔グマ年間生存率が 70% から 60% に下がるだけで、
        50 年で個体群が半減</strong>するという結果が示されました。
        わずかな変化が長期的に大きな影響を生む、という事実は保全政策に明確な指針を与えました。
      </p>
      <p>
        その後、イエローストーンでは以下の対策が強化されました。
      </p>
      <ul>
        <li>
          🚗 <strong>道路への動物用フェンス・横断橋</strong>
        </li>
        <li>
          🚫 <strong>母子クマの密猟厳罰化</strong>
        </li>
        <li>
          🗑️ <strong>キャンプ場のベアプルーフ・ゴミ箱導入</strong>
        </li>
        <li>
          📚 <strong>住民・観光客教育の徹底</strong>
        </li>
      </ul>

      <h2 id="conservation">個体群維持のための数学</h2>
      <p>
        Schwartz らの研究は、<strong>「個体群維持のための数学」</strong>を確立した点で歴史的でした。
      </p>
      <p>
        保全に必要な基本式は、シンプルに表せます。
      </p>
      <p className="text-center my-4 text-sm">
        <strong>「成獣メスの数 × 繁殖率 × 仔生存率 ≥ 成獣メスの死亡率」</strong>
      </p>
      <p>
        この式が崩れると、個体群は減少に向かう。逆に、この式が「&gt;」で大きく成立する限り、個体群は安定または増加します。
      </p>
      <p>
        Schwartz らの数字を当てはめると、ヒグマ個体群は <strong>「絶妙なバランス」</strong>で
        維持されていることが分かります。仔生存率が少し下がる、または成獣の死亡率が少し上がるだけで、
        長期的な減少傾向に反転する。これは絶滅危惧個体群（西中国・四国）にも当てはまります。
      </p>

      <h2 id="japan">日本のクマでも同様の構造</h2>
      <p>
        日本のヒグマ・ツキノワグマでも、繁殖の基本構造は同じです。
      </p>
      <ul>
        <li>
          <strong>ヒグマ（北海道）</strong>: 1 産 1〜3 頭、仔生存率 60〜70%、初産 4〜6 歳
        </li>
        <li>
          <strong>ツキノワグマ（本州）</strong>: 1 産 1〜2 頭、仔生存率 50〜70%、初産 4〜5 歳
        </li>
      </ul>
      <p>
        日本のクマも <strong>「ゆっくり増える」</strong>動物です。
        個体数が大きく減ると <strong>回復に 20〜30 年以上</strong>かかる。これは Vol.21（{" "}
        <Link href="/articles/research-digest-021">トレンティーノ再導入</Link>
        ）の事例にも整合します。
      </p>
      <p>
        個体数管理の際には、<strong>「過剰捕獲のリスク」</strong>を常に意識する必要があります。
        詳細は{" "}
        <Link href="/research/wildlife-plans">都道府県別 クマ管理計画</Link>
        と{" "}
        <Link href="/articles/designated-management-2026">2026 年指定管理鳥獣化</Link>
        を参照してください。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Temporal, spatial, and environmental influences on the demographics of grizzly bears in the Greater Yellowstone Ecosystem（本号メイン）",
            citation: (
              <>
                Schwartz, C. C., Haroldson, M. A., White, G. C., et al. (2006).{" "}
                <em className="not-italic">Wildlife Monographs</em> 161: 1–68.
              </>
            ),
          },
          {
            title: "Interagency Grizzly Bear Study Team annual reports",
            href: "https://www.usgs.gov/centers/norock/science/interagency-grizzly-bear-study-team",
            linkText: "USGS IGBST →",
          },
          {
            title:
              "Estimating population vital rates and viability of an isolated brown bear population",
            citation: (
              <>
                Mace, R. D., et al. (2012).{" "}
                <em className="not-italic">Journal of Wildlife Management</em>.
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

      <NextIssue label="次号予告 — Vol.24">
        <strong>「クマの冬眠巣穴は『人がいない場所』で選ばれる」</strong> —
        スウェーデンの 100 巣穴を測定し、人家・道路との距離を解析した Linnell 2000 を精読。
        冬眠中のクマと仔の脆さを解説します。
      </NextIssue>
    </ArticleShell>
  );
}
