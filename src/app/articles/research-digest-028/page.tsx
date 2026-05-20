import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-028")!;

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
        ある日の朝、山の羊飼いが羊小屋に行くと、<strong>羊が 3 頭、無残な姿で横たわっていました</strong>。
        昨夜のクマの仕業です。羊飼いにとって、これは <strong>1 ヶ月分の収入</strong>が一夜にして失われる事態。
      </p>
      <p>
        クマ・オオカミと家畜の軋轢は、世界中の山岳地域で <strong>農家の生計</strong>を脅かす問題です。
        ルーマニアの羊飼いを 6 年間追跡した経済研究で、農家が <strong>実際にいくら失っているか</strong>を
        定量化した古典的論文を精読します。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Economic aspects of large carnivore-livestock conflicts in Romania
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Mertens, A., &amp; Promberger, C. (2001).{" "}
          <em className="not-italic">Ursus</em> 12: 173–180.
        </div>
        <a
          href="https://www.jstor.org/stable/3873242"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          JSTOR で見る →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            ルーマニアの羊飼いを 6 年・<strong>200 件超</strong>の家畜被害を追跡
          </li>
          <li>
            羊 1 頭あたりの損失は <strong>「肉の値段の 5 倍以上」</strong>になる場合も
          </li>
          <li>
            補償制度・共存技術への <strong>「保護への投資」</strong>が経済的に正解
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "家畜被害は「肉の値段」の何倍に膨れ上がるか" },
          { id: "scene", title: "ルーマニアのカルパチア山脈 — 牧畜とクマの戦場" },
          { id: "team", title: "6 年・200 件超を追跡した経済学者たち" },
          { id: "direct", title: "直接損失 — 家畜の価値" },
          { id: "indirect", title: "見えない損失 — 間接コストの正体" },
          { id: "carnivores", title: "クマ・オオカミ・リンクスの加害比率" },
          { id: "compensation", title: "補償制度の経済学" },
          { id: "prevention", title: "「予防への投資」が結局安い" },
          { id: "japan", title: "日本の畜産家・養蜂家でも同じ構造" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">家畜被害は「肉の値段」の何倍に膨れ上がるか</h2>
      <p>
        家畜被害の話をすると、多くの人は <strong>「羊 1 頭の値段」</strong>を想像します。
        市場価格で 100〜200 ユーロくらい。だから被害額もその程度だろう、と。
      </p>
      <p>
        ところが現実は違います。<strong>1 頭の損失</strong>には、肉の値段だけでなく、
        多くの <strong>「見えないコスト」</strong>が積み重なっています。
        Mertens &amp; Promberger は、これを科学的に明らかにした最初の研究者でした。
      </p>

      <h2 id="scene">ルーマニアのカルパチア山脈 — 牧畜とクマの戦場</h2>
      <p>
        舞台は <strong>ルーマニアのカルパチア山脈</strong>。
        欧州最大のヒグマ個体群（推定 5,000〜8,000 頭）が生息する地域で、同時に伝統的な
        山岳牧畜が今も続いています。
      </p>
      <p>
        毎年 5〜10 月、羊飼いたちは家畜（羊・山羊・牛）を高地の牧草地に連れて行きます。
        ここでクマ・オオカミ・リンクスとの遭遇が日常的に発生。
      </p>
      <p>
        ルーマニア政府は <strong>「家畜被害補償制度」</strong>を運営していましたが、
        補償額の根拠は <strong>「市場の家畜価格」</strong>だけ。これに対して農家からは
        <strong>「実際の損失はもっと大きい」</strong>という不満が長年続いていました。
      </p>
      <p>
        この問題を科学的に解明するため、Annette Mertens と Christoph Promberger が
        ルーマニア大型肉食獣プロジェクト（Romanian Carnivore Project）として
        6 年間の実態調査を行ったのです。
      </p>

      <h2 id="team">6 年・200 件超を追跡した経済学者たち</h2>
      <p>
        研究方法は地道でした。Mertens らは 1995〜2000 年の 6 年間、
        カルパチア山脈の <strong>10 地域・200 件超の家畜被害事案</strong>を追跡。
      </p>
      <ul>
        <li>
          🐑 各家畜被害事案で <strong>「実際に農家が失ったもの」</strong>を聞き取り
        </li>
        <li>
          🏪 <strong>市場価格</strong>との差を分析
        </li>
        <li>
          📊 <strong>長期的影響</strong>を翌年・翌々年も追跡
        </li>
        <li>
          🐻 加害動物の種類（クマ・オオカミ・リンクス）を識別
        </li>
        <li>
          🏛️ 補償制度の <strong>実際の受給状況</strong>と運用課題を調査
        </li>
      </ul>

      <h2 id="direct">直接損失 — 家畜の価値</h2>
      <p>
        まず最も分かりやすい「直接損失」から見ましょう。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">家畜の種類</th>
              <th className="px-3 py-2 text-left">市場価格（当時）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">羊 1 頭（成体）</td>
              <td className="px-3 py-2 tabular-nums">80〜150 ユーロ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">山羊 1 頭</td>
              <td className="px-3 py-2 tabular-nums">80〜200 ユーロ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">牛 1 頭</td>
              <td className="px-3 py-2 tabular-nums">800〜1,500 ユーロ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">馬 1 頭</td>
              <td className="px-3 py-2 tabular-nums">1,000〜2,000 ユーロ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        これは「<strong>肉や乳・羊毛として市場で売れる値段</strong>」。
        当時のルーマニア政府の補償制度は、この市場価格 <strong>のみ</strong>を補償していました。
      </p>

      <h2 id="indirect">見えない損失 — 間接コストの正体</h2>
      <p>
        ところが Mertens らが現場の聞き取りを進めると、農家の <strong>「実際の損失」</strong>は
        市場価格を遥かに上回っていることが分かりました。
      </p>
      <h3>①「失った将来収入」</h3>
      <p>
        羊は単に肉として売られるのではなく、<strong>「数年間の乳・毛・子の生産」</strong>を生む資産です。
        1 頭を失うと、その個体が生涯にわたって生むはずだった収入も失われます。
      </p>
      <ul>
        <li>
          🐑 雌羊 1 頭の生涯収入: <strong>羊毛 5 年・乳 4 年・子 4〜6 頭</strong>分
        </li>
        <li>
          🥛 乳・乳製品の年間収入: 1 頭あたり 200〜400 ユーロ
        </li>
        <li>
          👶 子羊の値段: 1 頭 100 ユーロ × 生涯 4〜6 頭
        </li>
      </ul>
      <p>
        これらを合計すると、雌羊 1 頭の生涯収入は <strong>1,500〜3,000 ユーロ</strong>。
        市場価格の <strong>10〜30 倍</strong>に相当します。
      </p>
      <h3>② 群れへの影響</h3>
      <p>
        クマの襲撃で群れが <strong>パニック状態</strong>になると、他の家畜にも影響が及びます。
      </p>
      <ul>
        <li>
          💪 ストレスで <strong>乳量が一時的に減少</strong>（数日〜数週間）
        </li>
        <li>
          🚶 群れの <strong>移動・離散</strong>で他の被害もリスク増
        </li>
        <li>
          🩺 妊娠中の雌が <strong>流産</strong>するケース
        </li>
        <li>
          🩹 物理的に <strong>負傷した家畜</strong>の治療費
        </li>
      </ul>
      <h3>③ 防衛装備への支出</h3>
      <p>
        被害を受けた農家は、再発を恐れて防衛装備を強化します。
      </p>
      <ul>
        <li>
          ⚡ <strong>電気柵</strong>: 設置費 500〜2,000 ユーロ
        </li>
        <li>
          🐕 <strong>家畜用守護犬</strong>: 訓練済み 1 頭で 1,000〜3,000 ユーロ
        </li>
        <li>
          🔦 <strong>夜間照明・センサー</strong>: 数百ユーロ
        </li>
        <li>
          👨 <strong>追加の人員</strong>: 夜間の見張りに人件費
        </li>
      </ul>
      <h3>④ 精神的・社会的コスト</h3>
      <p>
        繰り返される被害で、農家は <strong>精神的疲弊</strong>。
        家畜飼育を諦めて廃業するケースも報告されています。これは数字に表れないが、
        地域社会・伝統的牧畜文化に大きな影響を与えます。
      </p>

      <h2 id="carnivores">クマ・オオカミ・リンクスの加害比率</h2>
      <p>
        ルーマニアでは大型肉食獣 3 種が共存しており、農家の被害を引き起こすのも 3 種すべてです。
        Mertens らは加害動物の比率も分析しました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">加害動物</th>
              <th className="px-3 py-2 text-left">被害件数の割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">クマ（ヒグマ）</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">~40%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">オオカミ</td>
              <td className="px-3 py-2 tabular-nums">~50%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">リンクス</td>
              <td className="px-3 py-2 tabular-nums">~10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        興味深いのは、クマとオオカミでは <strong>加害の仕方</strong>が異なる点です。
      </p>
      <ul>
        <li>
          🐻 <strong>クマ</strong>: 1 度に 1〜2 頭を獲って食べる。「特定狙い撃ち」型
        </li>
        <li>
          🐺 <strong>オオカミ</strong>: 群れで複数頭を一斉に襲う。「無差別」型で被害大
        </li>
        <li>
          🐆 <strong>リンクス</strong>: 単独の若い羊・小型動物を狙う
        </li>
      </ul>
      <p>
        クマ被害は 1 件あたりの損失は小さくても、<strong>頻度が高い</strong>。
        オオカミは 1 件で数十頭を殺すこともあり、<strong>1 件の損失は最大級</strong>。
      </p>

      <h2 id="compensation">補償制度の経済学</h2>
      <p>
        ルーマニアの補償制度は、当時 <strong>「市場価格のみ」</strong>を補償していました。
        Mertens らの研究は、この制度の <strong>不十分さ</strong>を定量的に示しました。
      </p>
      <p>
        実際の総損失（直接 + 間接）を 100% とすると、補償制度がカバーする割合は次の通り：
      </p>
      <ul>
        <li>
          市場価格補償のみ: <strong>10〜30%</strong> をカバー
        </li>
        <li>
          残り 70〜90% は <strong>農家の自己負担</strong>
        </li>
      </ul>
      <p>
        農家の不満が大きいのは当然でした。Mertens らはこの研究を基に、ルーマニア政府に対して
        <strong>「実損失ベースの補償」</strong>への制度改革を提言。
        その後、EU の枠組み（CAP: 共通農業政策）で <strong>補償制度の高度化</strong>が進められるきっかけになりました。
      </p>

      <h2 id="prevention">「予防への投資」が結局安い</h2>
      <p>
        本論文の最も重要なメッセージは <strong>「事後補償より、事前予防の方が経済的」</strong>という事実です。
      </p>
      <p>
        Mertens らは、補償制度と予防対策（電気柵・守護犬・夜間収容）のコスト比較を行いました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">対策</th>
              <th className="px-3 py-2 text-left">年間コスト（1 群あたり）</th>
              <th className="px-3 py-2 text-left">被害削減効果</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">何もしない</td>
              <td className="px-3 py-2 tabular-nums">0</td>
              <td className="px-3 py-2 text-red-700">毎年大被害</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">補償のみ</td>
              <td className="px-3 py-2 tabular-nums">~500 ユーロ</td>
              <td className="px-3 py-2 text-amber-700">被害は減らない</td>
            </tr>
            <tr className="bg-green-50/50">
              <td className="px-3 py-2 font-semibold">電気柵 + 守護犬</td>
              <td className="px-3 py-2 tabular-nums">~800 ユーロ</td>
              <td className="px-3 py-2 text-green-700 font-bold">80〜95% 減少</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        「<strong>事前予防への投資</strong>」が、長期的には <strong>「事後の補償と被害」</strong>より安い、
        という結論。Vol.7（{" "}
        <Link href="/articles/research-digest-007">電気柵の検証</Link>
        ）と同じ方向性を示します。
      </p>

      <h2 id="japan">日本の畜産家・養蜂家でも同じ構造</h2>
      <p>
        日本でも、クマによる家畜・農作物被害は同様の経済構造を示します。
      </p>
      <ul>
        <li>
          🐝 <strong>養蜂家</strong>: 蜂蜜被害 + 巣箱破損 + 蜂群消失（蜜源の喪失）
        </li>
        <li>
          🐄 <strong>畜産家</strong>: 子牛被害 + 母牛のストレス + 飼料汚染
        </li>
        <li>
          🍎 <strong>果樹園</strong>: 果実被害 + 木の枝折れ + 翌年の収量低下
        </li>
        <li>
          🌾 <strong>水稲</strong>: 倒伏 + 周辺作物への影響 + 防護費用
        </li>
      </ul>
      <p>
        日本の自治体補償制度も、ルーマニア同様 <strong>「市場価格中心」</strong>の補償でしたが、
        近年は <strong>「間接損失」</strong>も含めた補償の動きが各地で出てきています。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-compensation">クマ被害の補償・賠償ガイド</Link>
        と{" "}
        <Link href="/articles/bear-agriculture">クマと農業</Link>
        を参照してください。
      </p>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>農家・養蜂家は「総損失」を計算する</strong> — 補償申請時は市場価格だけでなく、
          間接損失（将来収入・群れへの影響）も明示。これは交渉や政策提言の根拠になる。
        </li>
        <li>
          <strong>事前予防に「投資」する</strong> — 電気柵・守護犬・夜間収容は初期費用がかかるが、
          長期的には事後対応より遥かに安い。自治体補助金も活用。
        </li>
        <li>
          <strong>「保護 + 補償 + 予防」の三位一体を支持する</strong> — クマを保護するなら、
          被害農家への <strong>適切な補償と予防支援</strong>もセットで。これが現代の野生動物管理の標準。
        </li>
        <li>
          <strong>共存事例を学ぶ</strong> — ルーマニア・スロベニア・スウェーデンなど、
          欧州のヒグマ密度の高い地域では、長年の経験で <strong>効果的な共存システム</strong>が整備されています。
          国際的な知見を参考に。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Economic aspects of large carnivore-livestock conflicts in Romania（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Mertens, A., &amp; Promberger, C. (2001).{" "}
              <em className="not-italic">Ursus</em> 12: 173–180.
            </div>
            <a
              href="https://www.jstor.org/stable/3873242"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              JSTOR で見る →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Economic costs of livestock predation by carnivores in Europe
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Kaczensky, P. (1999).{" "}
              <em className="not-italic">Ursus</em> 11: 59–71.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              鳥獣被害防止総合対策交付金（農林水産省）
            </div>
            <a
              href="https://www.maff.go.jp/j/seisan/tyozyu/higai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              maff.go.jp →
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
          次号予告 — Vol.29
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマは森の『清掃員』だった」</strong> —
          オオカミ・コヨーテと並ぶ重要な腐肉食者としてのクマの生態系役割。
          動物の死体が森を巡るリサイクルメカニズムを精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
