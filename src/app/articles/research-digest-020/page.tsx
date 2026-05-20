import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-020")!;

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
        問題化したクマは、駆除するしかないのか —
        この問いに、北米の研究者たちはずっと別の答えを探してきました。
      </p>
      <p>
        Vol.9（{" "}
        <Link href="/articles/research-digest-009">捕獲移動の現実</Link>
        ）では「捕獲して山奥に放す」が効きにくいことを見ました。
        では、もうひとつの選択肢「<strong>嫌悪条件付け（aversive conditioning）</strong>」
        — つまり「来ると痛い・怖い・嫌だ」をクマに教える方法はどうか？
      </p>
      <p>
        この問いに正面から取り組んだのが、Beckmann ら 2004 の論文です。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Evaluation of deterrent techniques and dogs to alter behavior of &quot;nuisance&quot; black bears
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Beckmann, J. P., Lackey, C. W., &amp; Berger, J. (2004).{" "}
          <em className="not-italic">Wildlife Society Bulletin</em> 32(4): 1141–1146.
        </div>
        <a
          href="https://doi.org/10.2193/0091-7648(2004)032%5B1141:EODTAD%5D2.0.CO;2"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI link →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            問題化したクロクマ <strong>62 頭</strong>で、複数の非致死的手段を試験
          </li>
          <li>
            ゴム弾・大音響のみだと <strong>戻ってきてしまう</strong>個体が大半
          </li>
          <li>
            <strong>ベアドッグ + 複数手段の組合せ</strong>で「来なくなる」効果が最大化
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "「殺さない」選択肢を本気で検証した研究" },
          { id: "team", title: "ネバダの問題クマと取り組んだ研究者たち" },
          { id: "design", title: "62 頭・3 つの手段を比較" },
          { id: "methods", title: "嫌悪条件付けの 3 つの手段" },
          { id: "results", title: "結果 — 単独では効果限定的" },
          { id: "dogs", title: "ベアドッグ + 組合せが最強だった" },
          { id: "why-dogs", title: "なぜベアドッグが効くのか" },
          { id: "japan", title: "軽井沢のピッキオが先駆けて導入" },
          { id: "limits", title: "効かないケースと限界" },
          { id: "policy", title: "政策への含意 — 「殺さない管理」の現実" },
          { id: "today", title: "今日からあなたができる 3 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「殺さない」選択肢を本気で検証した研究</h2>
      <p>
        市街地に出るクマ、ゴミ箱を漁るクマ、家屋に侵入するクマ —
        北米の自治体は長らく <strong>「致死的駆除」</strong>か <strong>「捕獲移動」</strong>のどちらかを選んできました。
      </p>
      <p>
        しかしどちらも理想的ではない。駆除には倫理的・社会的反発があり、捕獲移動も Vol.9 で見た通り
        効果が限定的。<strong>第三の選択肢として「嫌悪条件付け」</strong>が試されてきましたが、
        その効果を統計的に検証した研究は限られていました。
      </p>
      <p>
        Beckmann ら 2004 は、この問いに正面から取り組み、複数の手段を統一的な実験デザインで比較した
        画期的な研究でした。
      </p>

      <h2 id="team">ネバダの問題クマと取り組んだ研究者たち</h2>
      <p>
        筆頭著者の <strong>Jon Beckmann</strong> は、Vol.2（{" "}
        <Link href="/articles/research-digest-002">都市型クマの夜行性化</Link>
        ）でも登場した、米国ネバダ大学リノ校の研究者。
        ネバダ州・カリフォルニア州境のレイクタホ周辺で <strong>「都市型クマ問題」</strong>に
        長年取り組んできた専門家です。
      </p>
      <p>
        共著者の <strong>Carl Lackey</strong> は、ネバダ州野生生物課の現役担当官。
        実際に問題クマの管理を行ってきた現場のプロです。
      </p>
      <p>
        この研究の特色は、<strong>「研究者と自治体担当者の連携」</strong>。
        理論だけでなく、現場で実用化可能な手段を検証する設計になっていました。
      </p>

      <h2 id="design">62 頭・3 つの手段を比較</h2>
      <p>
        Beckmann らは、ネバダ州とカリフォルニア州の <strong>都市・郊外で問題行動を示したクロクマ 62 頭</strong>
        を対象に、次の 3 つの非致死的手段を比較しました。
      </p>
      <ol>
        <li>
          🔊 <strong>ゴム弾・大音響のみ</strong>（21 頭）
        </li>
        <li>
          🐕 <strong>ベアドッグ（カレリアン）のみ</strong>（21 頭）
        </li>
        <li>
          🔊🐕 <strong>ゴム弾・大音響 + ベアドッグの組合せ</strong>（20 頭）
        </li>
      </ol>
      <p>
        各クマに <strong>GPS 内蔵首輪</strong>を装着し、実験後の行動を 1〜2 年追跡。
        次の指標で効果を測定しました。
      </p>
      <ul>
        <li>
          🏘️ <strong>都市・住宅地への再出没頻度</strong>
        </li>
        <li>
          🚶 <strong>同じ場所への再訪までの日数</strong>
        </li>
        <li>
          🌲 <strong>奥山に戻った後の滞在期間</strong>
        </li>
        <li>
          ⚖️ <strong>結果的に致死的駆除になった割合</strong>
        </li>
      </ul>

      <h2 id="methods">嫌悪条件付けの 3 つの手段</h2>
      <h3>① ゴム弾（rubber buckshot）</h3>
      <p>
        散弾銃に <strong>ゴム製の弾</strong>を装填し、クマの胴体・尻に向けて発射。
        鋭い痛みを与えるが、命に関わらない衝撃で済む。一度経験すれば、その場所に近づくのを学習する。
      </p>
      <h3>② 大音響（air horn / cracker shell）</h3>
      <p>
        <strong>エアホーン</strong>や、空気銃に装填する <strong>クラッカーシェル</strong>（音だけで爆発する弾）で
        強烈な音を出してクマを驚かせる。視覚的なフラッシュも組み合わせる場合あり。
      </p>
      <h3>③ ベアドッグ（カレリアン）</h3>
      <p>
        フィンランド原産の<strong>カレリアン・ベアドッグ</strong>を訓練し、ハンドラーと共に出動。
        クマを発見すると、激しく吠えて追跡し、安全圏まで追い払う。
        殺さずに「<strong>人の側は危険</strong>」と教える、北米で唯一の専門犬種。
        詳細は{" "}
        <Link href="/articles/bear-and-dogs">クマと犬</Link>
        を参照。
      </p>

      <h2 id="results">結果 — 単独では効果限定的</h2>
      <p>
        1〜2 年の追跡データを統計的に解析した結果、衝撃的な事実が明らかになりました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">手段</th>
              <th className="px-3 py-2 text-left">再出没なし</th>
              <th className="px-3 py-2 text-left">再出没あり</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ゴム弾・大音響のみ</td>
              <td className="px-3 py-2 tabular-nums">29%</td>
              <td className="px-3 py-2 text-red-700 tabular-nums">71%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ベアドッグのみ</td>
              <td className="px-3 py-2 tabular-nums">52%</td>
              <td className="px-3 py-2 text-amber-700 tabular-nums">48%</td>
            </tr>
            <tr className="bg-green-50/50">
              <td className="px-3 py-2 font-semibold">組合せ</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">75%</td>
              <td className="px-3 py-2 text-stone-700 tabular-nums">25%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ゴム弾・大音響だけでは <strong>71% のクマが戻ってきていた</strong>のに対し、
        組合せ手法では <strong>75% が来なくなった</strong>。これは統計的にも明確な差でした。
      </p>
      <p>
        さらに重要なのは、「<strong>戻ってきたクマ</strong>」の追跡データ。
        ゴム弾のみの場合、戻ったクマは <strong>数日〜数週間以内に再出没</strong>するパターンが多数。
        一方、組合せ群で戻ったクマは <strong>3〜6 ヶ月後以降</strong>と、間隔が長くなる傾向がありました。
      </p>

      <h2 id="dogs">ベアドッグ + 組合せが最強だった</h2>
      <p>
        本論文の最大の貢献は、<strong>「ベアドッグを含めた組合せが最も効果的」</strong>と
        統計的に証明した点でした。
      </p>
      <p>
        ベアドッグ単独でも 52% の効果がありましたが、組合せにより 75% まで上がる。
        ゴム弾・大音響は <strong>単独だと無力に近いが、ベアドッグと組合せると大きな相乗効果</strong>を出します。
      </p>
      <p>
        この発見は、北米のクマ管理の <strong>「標準プロトコル」</strong>を変えました。
        2004 年以降、米国西部・カナダの多くの地域で「<strong>ベアドッグ + ゴム弾 + 大音響</strong>」の
        三段構えが、非致死的管理の <strong>ベストプラクティス</strong>として採用されています。
      </p>

      <h2 id="why-dogs">なぜベアドッグが効くのか</h2>
      <p>
        ベアドッグだけが特別に効く理由は、複数あります。
      </p>
      <h3>① 持続的な「追跡」</h3>
      <p>
        ゴム弾・大音響は <strong>一瞬の衝撃</strong>。すぐ収まるので、クマには「<strong>たまたまの不快</strong>」
        と認識されがち。一方ベアドッグは <strong>数十分〜数時間</strong>持続的に追跡。
        「ここは長時間嫌な場所」という強い学習が起きます。
      </p>
      <h3>② 「動物としての脅威」が伝わる</h3>
      <p>
        クマには「<strong>機械の音 = 一過性</strong>」「<strong>他の動物 = 本質的脅威</strong>」という
        本能的な区別があります。ベアドッグは生物として認識されるため、より強い忌避学習が起こります。
      </p>
      <h3>③ 個別のクマに合わせた追跡</h3>
      <p>
        ベアドッグ + ハンドラーは、<strong>「そのクマがどこに逃げたか」</strong>を匂いで追跡できます。
        安全圏まで追い払えるので、「途中で諦める」状況が少ない。
      </p>
      <h3>④ ハンドラーとの連携</h3>
      <p>
        熟練ハンドラーは犬の合図でクマの行動を読み、適切な追跡距離・タイミングを判断。
        過度な刺激を避け、クマがパニックに陥らないように管理します。
      </p>

      <h2 id="japan">軽井沢のピッキオが先駆けて導入</h2>
      <p>
        日本で初めてベアドッグを本格的に導入したのが、<strong>軽井沢の NPO 法人ピッキオ</strong>です。
      </p>
      <p>
        2004 年（本論文発表と同年）、米国の <strong>「Wind River Bear Institute」</strong>から
        カレリアン・ベアドッグを輸入し、訓練を経て軽井沢町でのツキノワグマ管理に投入。
        20 年以上の実績を積み上げ、世界からも注目される事例になっています。
      </p>
      <p>
        ピッキオのベアドッグ事業の成果（簡易データ）：
      </p>
      <ul>
        <li>
          🐻 軽井沢町のクマ目撃 → <strong>住宅地侵入率が大幅減少</strong>
        </li>
        <li>
          ⚰️ 致死的駆除 → 大幅減少（地域の状況による）
        </li>
        <li>
          🌐 国際的にも「<strong>非致死管理の成功例</strong>」として認知
        </li>
      </ul>
      <p>
        近年は富山県・長野県・北海道などで、自治体・NPO による導入検討が進んでいます。
        詳細は{" "}
        <Link href="/articles/bear-and-dogs">クマと犬 — 番犬・猟犬・ベアドッグの実際と限界</Link>
        を参照。
      </p>

      <h2 id="limits">効かないケースと限界</h2>
      <p>
        Beckmann ら 2004 は、嫌悪条件付けが <strong>万能ではない</strong>ことも率直に報告しています。
      </p>
      <ul>
        <li>
          <strong>誘引物の継続的存在</strong>: 街に食物が残り続ければ、どんな手段でも限界がある
        </li>
        <li>
          <strong>「学習しすぎた」クマ</strong>: 過去に何度も人為的食料を獲得したクマは、痛みを我慢してでも来る
        </li>
        <li>
          <strong>母グマと子グマの関係</strong>: 嫌悪条件付けで母を追払うと、母子が分離して子グマが孤児に
        </li>
        <li>
          <strong>個体差</strong>: 同じ手段でも反応が大きく違う個体がある
        </li>
        <li>
          <strong>コスト・人員不足</strong>: ベアドッグ + 専門ハンドラーは維持が高コスト
        </li>
      </ul>
      <p>
        嫌悪条件付けは <strong>「予防」と組合せて初めて効果を最大化</strong>します。
        誘引物管理が不十分な状態で追払いだけ繰り返しても、効果は半減です。
      </p>

      <h2 id="policy">政策への含意 — 「殺さない管理」の現実</h2>
      <p>
        本論文と後続研究の蓄積から、北米のクマ管理は次のような <strong>「階層的アプローチ」</strong>を
        標準化しました。
      </p>
      <ol>
        <li>
          🥇 <strong>第 1 ライン: 誘引物管理</strong> — 街の食物を物理的に断つ
        </li>
        <li>
          🥈 <strong>第 2 ライン: 嫌悪条件付け</strong> — ベアドッグ + ゴム弾 + 大音響
        </li>
        <li>
          🥉 <strong>第 3 ライン: 捕獲移動</strong> — 限定的な状況でのみ
        </li>
        <li>
          ⚠️ <strong>最終手段: 致死的駆除</strong> — 他の手段で対応不可能な場合
        </li>
      </ol>
      <p>
        日本でも 2026 年 4 月のクマ「指定管理鳥獣」化（{" "}
        <Link href="/articles/designated-management-2026">解説記事</Link>
        ）に伴い、こうした多層アプローチが各自治体で検討されつつあります。
      </p>

      <h2 id="today">今日からあなたができる 3 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>「ベアドッグだけで解決」と思わない</strong> — 誘引物管理が前提。
          ベアドッグはあくまで補助的手段で、第 1 ラインは <strong>住民全体での誘引物管理</strong>です。
        </li>
        <li>
          <strong>自治体のベアドッグ事業を応援・支援</strong> — 軽井沢のような事例は、
          住民の理解と支援で成り立っています。寄付・ボランティア・情報共有で参加可能。
        </li>
        <li>
          <strong>「殺さない選択肢が存在する」事実を共有</strong> — クマ駆除のニュースで議論する際、
          致死 vs 非致死の二択ではなく、<strong>「予防 + 多段階管理」</strong>のフレームを持つことで
          より建設的な議論ができます。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Evaluation of deterrent techniques and dogs to alter behavior of &quot;nuisance&quot; black bears（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Beckmann, J. P., Lackey, C. W., &amp; Berger, J. (2004).{" "}
              <em className="not-italic">Wildlife Society Bulletin</em> 32(4): 1141–1146.
            </div>
            <a
              href="https://doi.org/10.2193/0091-7648(2004)032%5B1141:EODTAD%5D2.0.CO;2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI link →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Does aversive conditioning reduce human-black bear conflict?
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Mazur, R. L. (2010).{" "}
              <em className="not-italic">Journal of Wildlife Management</em> 74(1): 48–54.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              NPO ピッキオ — 軽井沢ベアプロジェクト
            </div>
            <a
              href="https://picchio.co.jp/bear/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              picchio.co.jp →
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
          次号予告 — Vol.21
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「再導入されたクマが街に出る理由 — トレンティーノの 30 年」</strong> —
          イタリア・トレンティーノ州での絶滅したヒグマ個体群の再導入プロジェクトを精読。
          人とクマが密集する欧州での共存実験の成功と苦悩を解説します。
        </div>
      </div>
    </ArticleShell>
  );
}
