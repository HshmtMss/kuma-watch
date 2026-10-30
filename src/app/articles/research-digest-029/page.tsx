import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-029")!;

export const metadata: Metadata = {
  ...reviewRobots(meta.slug),
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
        オオカミが獲物を仕留めると、その「食べ残し」はカラスやワシ、コヨーテ、クマなど多くの動物の食べ物になります。
        頂点の捕食者が戻ってくると、こうした「おこぼれ」の量や時期はどう変わるのでしょうか。
      </p>
      <p>
        今号は、米国イエローストーン国立公園へのオオカミ再導入を「自然の実験」として、
        オオカミが倒したエルク（大型のシカ）の死骸がどれだけ残され、冬のあいだ腐肉食の動物にどう行き渡るかを調べた研究
        （Wilmers ら 2003）を読みます。クマも腐肉を食べる動物の一つです。
        「死骸は動物を引き寄せる」という身近な話につながる研究です。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Trophic facilitation by introduced top predators: grey wolf subsidies to scavengers in Yellowstone National Park"
        citation={
          <>
            Wilmers, C. C., Crabtree, R. L., Smith, D. W., Murphy, K. M., &amp; Getz, W. M. (2003).{" "}
            <em className="not-italic">Journal of Animal Ecology</em> 72(6): 909–916.
          </>
        }
        href="https://doi.org/10.1046/j.1365-2656.2003.00766.x"
        linkText="DOI: 10.1046/j.1365-2656.2003.00766.x →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            オオカミが倒したエルク <strong>57 頭</strong>の死骸を観察し、オオカミ自身が食べた割合を調べた
          </>,
          <>
            雪が浅いほど、群れが獲物に対して大きいほど、道路から遠いほどオオカミがよく食べ、
            <strong>中くらいの大きさの群れ</strong>が腐肉食の動物に最も多く残していた
          </>,
          <>
            オオカミがいると、腐肉が手に入る時期が<strong>冬の終わりに集中せず冬じゅうに広がり</strong>、
            年ごと・月ごとのばらつきも小さくなる、と推定された
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "背景：オオカミの再導入" },
          { id: "method", title: "どんな研究か" },
          { id: "results", title: "分かったこと" },
          { id: "bears", title: "クマとの関わり" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへ" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">背景：オオカミの再導入</h2>
      <p>
        イエローストーン国立公園では、オオカミは 20 世紀前半に姿を消していました。
        1995〜96 年にカナダから合わせて <strong>31 頭</strong>（1995 年は 14 頭）のオオカミが放され、
        公園に頂点の捕食者が戻りました。著者らはこれを、頂点の捕食者が生態系のはたらきに与える影響を調べる
        「自然の実験」と位置づけています。
      </p>
      <p>
        オオカミは獲物を食べ切らないことが多く、残りは腐肉を食べる動物（スカベンジャー）に回ります。
        関連する続報（Wilmers &amp; Getz 2005）では、オオカミの獲物によく現れる動物として、
        ワタリガラス、ハクトウワシ、イヌワシ、カササギ、コヨーテ、ハイイログマ（ヒグマ）、アメリカクロクマが挙げられています。
        オオカミがいなかった時代、これらの動物は主に冬の厳しさで死んだエルクに頼っていました。
      </p>

      <h2 id="method">どんな研究か</h2>
      <p>
        著者らは、オオカミが倒したエルク <strong>57 頭</strong>の死骸について、食べられていく様子を観察し、
        食べられる部分（可食部）のうちオオカミ自身が食べた割合を 1 頭ずつ求めました。
        そのうえで、この割合が雪の深さ、オオカミの群れの大きさと獲物の大きさの比、道路からの距離などで
        どう変わるかを回帰モデルで分析しました。
      </p>
      <p>
        さらに、そのモデルをオオカミ再導入「前」の年に当てはめ、「もしオオカミがいたら、腐肉はいつ・どれだけ手に入ったか」を計算し、
        以前に発表されていた冬の死亡エルクにもとづく腐肉の指標と比べています。
      </p>

      <h2 id="results">分かったこと</h2>
      <p>オオカミが死骸を食べる割合について、次の傾向が見られました。</p>
      <ul>
        <li>雪が浅いほど、オオカミが食べる割合が高い</li>
        <li>群れの大きさが獲物に比べて大きいほど、食べる割合が高い</li>
        <li>道路から遠いほど、食べる割合が高い</li>
        <li>腐肉食の動物に最も多くの腐肉を残すのは、<strong>中くらいの大きさの群れ</strong></li>
      </ul>
      <p>
        オオカミがいない場合、腐肉は主に冬の終わりに、雪の深さなど気象条件しだいでまとまって出る「波」のようなものでした。
        オオカミがいる場合は、腐肉が手に入る期間が長くなり、冬のあいだ比較的一定に出るようになり、
        その量は気象よりもオオカミの群れの状態に左右される、と推定されました。
        年ごと・月ごとのばらつきも小さくなっていました。
      </p>
      <p>
        著者らは、オオカミが腐肉を「食べ物の多い冬の終わり」から「少ない冬の初め」へ、
        「多い年」から「少ない年」へと移していることを、腐肉食の動物への<strong>時間的な補助</strong>
        （temporal subsidy）と表現しています。
      </p>
      <p>
        続報の Wilmers &amp; Getz（2005）は、この考え方を気候の変化に広げました。
        冬が短くなり雪解けが早まると、オオカミがいない場合は冬の終わりの腐肉が大きく減る（3 月に 27%、4 月に 66% 減）のに対し、
        オオカミがいる場合の減り方は小さい（同 4%、11%）とモデルで見積もっています。
      </p>

      <h2 id="bears">クマとの関わり</h2>
      <p>
        この研究の主役は「腐肉の量と時期」で、クマ自体を詳しく調べたものではありません。
        クマの体重や繁殖が変わったかどうかは、この論文では扱われていません。
      </p>
      <p>
        ただ、ハイイログマやアメリカクロクマは、オオカミの獲物に現れる腐肉食の動物として挙げられています。
        続報では、腐肉をめぐる優劣関係の上位に<strong>ハイイログマとコヨーテ</strong>がいると述べられています。
        クマにとって、他の動物が残した死骸は手に入れやすい食べ物になりうる、ということです。
      </p>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          直接の観察は <strong>57 頭</strong>の死骸で、オオカミ再導入前の年については、その観察から作ったモデルによる推定です。
        </li>
        <li>主な対象は冬の腐肉です。クマが冬眠している時期と重なる部分があります。</li>
        <li>
          北米の国立公園、エルクとオオカミという組み合わせの結果です。
          オオカミがいない日本や、ツキノワグマにそのまま当てはまるわけではありません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへ</h2>
      <p>
        日本にはオオカミはいませんが、シカやイノシシの死骸は、病気や事故、捕獲などさまざまな理由で山に残ります。
        この研究が示すように、死骸は多くの腐肉食の動物にとって食べ物で、クマもその一つです。
        山で動物の死骸を見つけたら、近くにクマがいる可能性も考えて近づかず、その場を離れるのが無難です。
      </p>
      <p>
        クマに出会ったら、走らず、背を向けず、ゆっくり離れます。突進されたときはクマスプレーを使い、
        5〜10m ほどの距離で顔に向けて 1〜2 秒ずつ噴射します
        （環境省の推奨要件の目安は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・CRC 1〜2% 程度）。
        接触が避けられない防衛的な攻撃では、うつ伏せになり両手で首の後ろを守る姿勢をとり、執拗に襲ってくる・捕食的な攻撃の場合は反撃します。
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Trophic facilitation by introduced top predators: grey wolf subsidies to scavengers in Yellowstone National Park（本号メイン）",
            citation: (
              <>
                Wilmers, C. C., Crabtree, R. L., Smith, D. W., Murphy, K. M., &amp; Getz, W. M. (2003).{" "}
                <em className="not-italic">Journal of Animal Ecology</em> 72(6): 909–916.
              </>
            ),
            href: "https://doi.org/10.1046/j.1365-2656.2003.00766.x",
            linkText: "DOI: 10.1046/j.1365-2656.2003.00766.x →",
          },
          {
            title: "Gray Wolves as Climate Change Buffers in Yellowstone",
            citation: (
              <>
                Wilmers, C. C., &amp; Getz, W. M. (2005).{" "}
                <em className="not-italic">PLoS Biology</em> 3(4): e92.
              </>
            ),
            href: "https://doi.org/10.1371/journal.pbio.0030092",
            linkText: "DOI: 10.1371/journal.pbio.0030092 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>
    </ArticleShell>
  );
}
