import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-027")!;

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
        アラスカ・カトマイ国立公園のブルックス滝。毎年夏、世界中から数千人の観光客が集まり、
        サケを獲るヒグマを <strong>「LIVE 配信」</strong>付きで観察します。
        高級ロッジの 1 泊は <strong>1,000 ドル</strong>を超え、それでも予約は数年先まで埋まる。
      </p>
      <p>
        クマは、観光業として <strong>大きなお金</strong>を生む動物でもあるのです。
        世界中のベアウォッチング・ツーリズムを総合レビューした Penteriani 2017 を精読し、
        その経済効果と倫理的課題を整理します。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Consequences of brown bear viewing tourism: A review
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Penteriani, V., et al. (2017).{" "}
          <em className="not-italic">Biological Conservation</em> 206: 169–180.
        </div>
        <a
          href="https://doi.org/10.1016/j.biocon.2016.12.035"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1016/j.biocon.2016.12.035 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            世界のベアウォッチング・ツーリズムは <strong>年間 10 億ドル超</strong>の経済規模
          </li>
          <li>
            アラスカではヒグマ 1 頭が <strong>年 1 万ドル</strong>を観光収入として「稼ぐ」
          </li>
          <li>
            しかし、観光がクマの <strong>行動・健康</strong>に与える影響にも要注意
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "「クマを見る」だけで成り立つ巨大産業" },
          { id: "history", title: "アラスカから始まった巨大経済" },
          { id: "data", title: "ベアウォッチングの世界経済規模" },
          { id: "places", title: "世界の主要ベアウォッチング地" },
          { id: "value", title: "クマ 1 頭の「経済価値」" },
          { id: "conservation", title: "観光が保護を支える構造" },
          { id: "concerns", title: "観光がクマに与える影響" },
          { id: "guidelines", title: "「責任ある観光」のためのガイドライン" },
          { id: "japan", title: "日本のベアウォッチング" },
          { id: "future", title: "未来 — 共存型観光の可能性" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「クマを見る」だけで成り立つ巨大産業</h2>
      <p>
        多くの人は、クマを <strong>「経済的にコストの動物」</strong>と考えがちです。
        被害補償、駆除費用、対策装備 — クマがいることで自治体・住民の負担が増えるイメージ。
      </p>
      <p>
        でも、世界規模で見ると話は逆です。クマは <strong>「経済的に儲かる動物」</strong>でもあります。
      </p>
      <p>
        その鍵が <strong>「ベアウォッチング・ツーリズム」</strong>。
        野生のクマを安全に、近距離で観察する観光が、世界中で巨大産業を形成しているのです。
      </p>

      <h2 id="history">アラスカから始まった巨大経済</h2>
      <p>
        ベアウォッチング・ツーリズムの先駆けは、1970 年代のアラスカでした。
      </p>
      <p>
        カトマイ国立公園の <strong>「ブルックス滝（Brooks Falls）」</strong>。
        ここではサケが滝を遡上する 7 月に、数十頭のヒグマが集まってサケ漁を行います。
        国立公園局が安全な展望台を整備し、ガイドツアーを開始。
      </p>
      <p>
        当初は地元のアウトドア愛好家が中心でしたが、1990 年代以降に <strong>世界中のメディア</strong>に
        取り上げられ、観光客が急増。今では年間 <strong>1 万人以上</strong>が訪れる
        世界最大級のクマ観光地になりました。
      </p>
      <p>
        Penteriani らは、こうしたベアウォッチング・ツーリズムが世界各地でどう発展し、
        どんな経済効果を生んでいるかを <strong>体系的にレビュー</strong>しました。
      </p>

      <h2 id="data">ベアウォッチングの世界経済規模</h2>
      <p>
        本論文と関連データから推計されるベアウォッチングの世界経済規模は次のようなものです。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">国/地域</th>
              <th className="px-3 py-2 text-left">年間観光収入（推定）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">米国（アラスカ中心）</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">~5 億ドル</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">カナダ</td>
              <td className="px-3 py-2 tabular-nums">~2 億ドル</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">フィンランド</td>
              <td className="px-3 py-2 tabular-nums">~5,000 万ドル</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">スウェーデン・ノルウェー</td>
              <td className="px-3 py-2 tabular-nums">~3,000 万ドル</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ルーマニア・スロベニア</td>
              <td className="px-3 py-2 tabular-nums">~2,000 万ドル</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ロシア・極東</td>
              <td className="px-3 py-2 tabular-nums">~1,500 万ドル</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">日本（知床中心）</td>
              <td className="px-3 py-2 tabular-nums">~1,000 万ドル</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        合計すると <strong>世界で年間 10 億ドル（約 1,400 億円）規模</strong>。
        これは野生動物観光の中でも有数の規模で、サファリ・ホエールウォッチングと並ぶ
        <strong>「動物観光の 3 大ジャンル」</strong>の一つに成長しました。
      </p>

      <h2 id="places">世界の主要ベアウォッチング地</h2>
      <h3>北米</h3>
      <ul>
        <li>
          🇺🇸 <strong>カトマイ国立公園（アラスカ）</strong>: ブルックス滝のヒグマ
        </li>
        <li>
          🇺🇸 <strong>イエローストーン（ワイオミング）</strong>: 公園内でのヒグマ観察
        </li>
        <li>
          🇺🇸 <strong>グレートスモーキー（テネシー）</strong>: アメリカクロクマの観察
        </li>
        <li>
          🇨🇦 <strong>大グリズリー保護区（BC）</strong>: ヒグマ + サケのコラボ
        </li>
      </ul>
      <h3>欧州</h3>
      <ul>
        <li>
          🇫🇮 <strong>マルティンセルカ（フィンランド）</strong>: 隠れた小屋からヒグマ観察
        </li>
        <li>
          🇸🇪 <strong>ベルガモ（スウェーデン）</strong>: 夜間ベアウォッチング
        </li>
        <li>
          🇷🇴 <strong>カルパチア山脈（ルーマニア）</strong>: 欧州最大のヒグマ個体群
        </li>
        <li>
          🇸🇮 <strong>スロベニア</strong>: ヒグマ密度の高い地域
        </li>
      </ul>
      <h3>アジア</h3>
      <ul>
        <li>
          🇯🇵 <strong>知床国立公園（日本）</strong>: 船からのヒグマ観察
        </li>
        <li>
          🇮🇳 <strong>カンチェンジュンガ（インド）</strong>: アジアクロクマ
        </li>
        <li>
          🇰🇿 <strong>カザフスタン</strong>: ティエンシャンクマ
        </li>
      </ul>

      <h2 id="value">クマ 1 頭の「経済価値」</h2>
      <p>
        Penteriani らは、クマ 1 頭が <strong>「観光収入として年間どれだけ稼ぐか」</strong>を試算しました。
      </p>
      <ul>
        <li>
          🐻 <strong>アラスカのヒグマ</strong>: 1 頭当たり <strong>年 5,000〜10,000 ドル</strong>
        </li>
        <li>
          🐻 <strong>フィンランドのヒグマ</strong>: 1 頭当たり <strong>年 3,000〜5,000 ドル</strong>
        </li>
        <li>
          🐻 <strong>ルーマニアのヒグマ</strong>: 1 頭当たり <strong>年 1,000〜3,000 ドル</strong>
        </li>
      </ul>
      <p>
        アラスカのヒグマ 1 頭の生涯（20 年）で計算すると、観光収入は <strong>10〜20 万ドル</strong>。
        これに対し、駆除コストは数千ドル、家畜被害は数百〜数千ドル。
      </p>
      <p>
        単純な経済計算で言えば、<strong>「クマを殺すより観光資源として保護する方が経済的」</strong>
        という結論が、世界的に支持されつつあります。
      </p>

      <h2 id="conservation">観光が保護を支える構造</h2>
      <p>
        ベアウォッチング・ツーリズムの最大の貢献は、<strong>「保護のための財源」</strong>を生み出すことです。
      </p>
      <ul>
        <li>
          💰 <strong>観光税</strong>が地域の保全予算に充当
        </li>
        <li>
          👥 <strong>地元雇用</strong>: ガイド・宿泊・運転手・料理人
        </li>
        <li>
          🌐 <strong>住民の意識変化</strong>: クマを「資産」と認識
        </li>
        <li>
          🏛️ <strong>政治的支持</strong>: 経済価値で保護政策が通りやすい
        </li>
        <li>
          📚 <strong>研究資金</strong>: 観光関連の予算が研究にも回る
        </li>
      </ul>
      <p>
        ルーマニアのカルパチア山脈では、<strong>「ベアウォッチング → 地域経済活性化 → 保護政策強化」</strong>
        という好循環で、欧州最大のヒグマ個体群（5,000〜8,000 頭）が維持されています。
      </p>

      <h2 id="concerns">観光がクマに与える影響</h2>
      <p>
        ただし、Penteriani らは <strong>「観光が万能ではない」</strong>ことも警告しています。
      </p>
      <h3>① 行動の変化</h3>
      <p>
        観光客に慣れたクマは、<strong>本来の警戒心が薄れる</strong>。
        Vol.2（{" "}
        <Link href="/articles/research-digest-002">都市型クマの夜行性化</Link>
        ）でも見たように、人慣れは長期的に問題行動の原因になります。
      </p>
      <h3>② 採餌時間の損失</h3>
      <p>
        観光客の存在で、クマがサケ漁に集中できない時間が増える。
        Vol.6（{" "}
        <Link href="/articles/research-digest-006">食選好</Link>
        ）で見たように、クマには「<strong>必要な摂取カロリー</strong>」があり、採餌時間の損失は
        繁殖成功率に影響します。
      </p>
      <h3>③ ストレスホルモンの上昇</h3>
      <p>
        コルチゾール濃度の測定で、観光地周辺のクマは <strong>慢性的に高ストレス状態</strong>
        にあることが報告されています。
      </p>
      <h3>④ 「給餌型ツーリズム」のリスク</h3>
      <p>
        一部の地域で観光客集めのために <strong>「クマに餌を与える」</strong>事例があります。
        これは Vol.20（{" "}
        <Link href="/articles/research-digest-020">嫌悪条件付け</Link>
        ）で見た「学習による問題行動」を生み、長期的な軋轢を増やします。
      </p>

      <h2 id="guidelines">「責任ある観光」のためのガイドライン</h2>
      <p>
        Penteriani らは、ベアウォッチング・ツーリズムが持続可能であるための基準を提唱しています。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>給餌は絶対禁止</strong> — どんな理由でも、観光のためにクマに餌を与えない
        </li>
        <li>
          <strong>観察距離は最低 50m</strong> — 望遠レンズで撮影、近づかない
        </li>
        <li>
          <strong>固定された観察ポイント</strong> — クマが予測可能な人の所在を学習
        </li>
        <li>
          <strong>観察時間の制限</strong> — 1 日 4〜6 時間、クマが採餌できる時間を確保
        </li>
        <li>
          <strong>専門ガイドの同伴必須</strong> — 緊急時の対応と教育機会
        </li>
        <li>
          <strong>収益の保護への還元</strong> — 観光税・収益の一定割合を保全予算に
        </li>
      </ol>

      <h2 id="japan">日本のベアウォッチング</h2>
      <p>
        日本でも、特に <strong>北海道・知床</strong>ではヒグマ観光が成立しています。
      </p>
      <ul>
        <li>
          🚢 <strong>知床クルーザー</strong>: 海上から海岸のヒグマを観察
        </li>
        <li>
          🏔️ <strong>知床五湖</strong>: 専門ガイドツアーでクマと自然を体験
        </li>
        <li>
          🚁 <strong>羅臼漁港</strong>: ホエールウォッチング + 偶然のヒグマ目撃
        </li>
        <li>
          🏞️ <strong>登別熊牧場</strong>: 飼育下のヒグマ観察（観光地化された施設）
        </li>
      </ul>
      <p>
        本州・四国・九州ではツキノワグマの観光は限定的ですが、長野・群馬の温泉地周辺で
        散発的な観光資源化の試みがあります。
      </p>
      <p>
        日本の観光業は <strong>「クマを恐れる」</strong>方向で発展してきましたが、
        知床の成功例を見ると、適切な管理下では <strong>「クマと共存する観光」</strong>が
        日本でも可能性を秘めていることが分かります。
      </p>

      <h2 id="future">未来 — 共存型観光の可能性</h2>
      <p>
        Penteriani らの論文を読み終えて感じるのは、ベアウォッチング・ツーリズムは <strong>「両刃の剣」</strong>
        だということです。
      </p>
      <p>
        適切に運営されれば、<strong>クマと地域経済の双方に</strong>大きな利益をもたらす。
        逆に、利益優先で運営すれば、<strong>クマの行動を変え、長期的には種としての健全性を損なう</strong>。
      </p>
      <p>
        日本でも、人クマ軋轢を <strong>「コスト」</strong>として捉えるだけでなく、
        <strong>「観光資源としての価値」</strong>を視野に入れた議論が、長期的な共存への道を開く可能性があります。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/inbound-tourism">訪日観光客向けクマ情報</Link>
        と{" "}
        <Link href="/articles/research-digest-018">Vol.18 生態系エンジニア</Link>
        も併読してください。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Consequences of brown bear viewing tourism: A review（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Penteriani, V., et al. (2017).{" "}
              <em className="not-italic">Biological Conservation</em> 206: 169–180.
            </div>
            <a
              href="https://doi.org/10.1016/j.biocon.2016.12.035"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1016/j.biocon.2016.12.035 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Wildlife tourism: a global perspective
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Higginbottom, K. (2004). Common Ground Publishing.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              知床財団（公式サイト）
            </div>
            <a
              href="https://shiretoko.or.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              shiretoko.or.jp →
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
          次号予告 — Vol.28
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「家畜 1 頭の損失で農家がいくら失うか」</strong> —
          ルーマニアの羊飼いを 6 年追跡した Mertens &amp; Promberger 2001 を精読。
          補償制度の設計と共存への投資を読み解きます。
        </div>
      </div>
    </ArticleShell>
  );
}
