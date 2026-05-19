import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-001")!;

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
      {/* オープニングフック */}
      <p className="lead">
        ある研究者が <strong>21 年間</strong>、アラスカ中を駆け回って集めたものがあります。
        それは <strong>175 件の「クマに襲われた・襲われそうになった」事案の記録</strong>でした。
        うち <strong>72 件</strong>は、明らかに人を狙って向かってきた攻撃事案。
        この 72 件のうち、ほぼ全員が <strong>無傷で帰宅</strong>しています。
        その鍵となった「ある道具」の話から始めましょう。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Efficacy of bear deterrent spray in Alaska
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Smith, T. S., Herrero, S., Layton, C. S., Larsen, R. T., &amp; Johnson, K. R. (2008).{" "}
          <em className="not-italic">Journal of Wildlife Management</em> 72(3): 640–645.
        </div>
        <a
          href="https://doi.org/10.2193/2006-452"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.2193/2006-452 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            攻撃してきたクマに対し、スプレーは <strong>10 回中 9 回</strong>「逃がす」結果に
          </li>
          <li>
            <strong>3 種類のクマ全部</strong>で、ほぼ同じくらい効いた（生物学的に重要）
          </li>
          <li>
            ただし<strong>「噴射 = 完全勝利」ではない</strong>。14% は同じクマが戻ってくる
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "story", title: "クマの研究者が 21 年集め続けたもの" },
          { id: "headline", title: "「で、結局スプレーって効くの？」" },
          { id: "three-species", title: "驚くべき発見 — 3 種類のクマ、みんな苦手だった" },
          { id: "after-spray", title: "スプレーをかけた後、クマは何をしたか" },
          { id: "back-14", title: "「14% は戻ってくる」が意味すること" },
          { id: "no-death", title: "死者ゼロという数字、どう受け止めるか" },
          { id: "weak-points", title: "とはいえ、この研究にも弱点はある" },
          { id: "vs-firearm", title: "意外な続編 — 実銃 vs スプレー" },
          { id: "japan", title: "日本のツキノワグマでも、これは効くのか？" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "why-classic", title: "20 年経っても引用され続ける理由" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="story">クマの研究者が 21 年集め続けたもの</h2>
      <p>
        1985 年のアラスカ。
        当時 USGS（米国地質調査所）でクマの研究を始めたばかりだった <strong>Tom Smith</strong> は、
        ある違和感を抱えていました。
      </p>
      <p>
        「<strong>クマスプレーは効くらしい</strong>」 — そんな噂は北米全土に広がっていました。
        メーカーは「90% 以上が撃退できる」と宣伝し、登山ガイドはそれを信じて客に勧める。
        でも、その<strong>「90% 以上」の根拠は何だったのか？</strong>
      </p>
      <p>
        実は当時、まともな科学的検証は存在しませんでした。あるのはメーカーの自社調査と、
        ハンターや観光客の体験談だけ。<strong>査読を通った論文</strong>はゼロでした。
      </p>
      <p>
        「<strong>誰かがちゃんと数えなきゃダメだろう</strong>」
      </p>
      <p>
        そう考えた Smith は、北米のクマ研究の重鎮 <strong>Stephen Herrero</strong>（カナダ・カルガリー大学）と組み、
        アラスカ中を回り始めます。国立公園レンジャーに、ハンターに、写真家に、観光客に。
        「クマスプレーを使ったことがある人を知りませんか？」と尋ねて回った 21 年間。
      </p>
      <p>
        集まった事案は <strong>175 件</strong>。
        2008 年、Smith らはこの記録を <em>Journal of Wildlife Management</em> 誌に投稿しました。
        それが今でもクマ対策の<strong>世界中の公式ガイドラインで引用され続ける伝説の論文</strong>です。
      </p>

      <h2 id="headline">「で、結局スプレーって効くの？」</h2>
      <p>
        結論から言います。<strong>効きます</strong>。それも、想像以上に。
      </p>
      <p>
        175 件のうち、特に厳密な分析対象になったのは <strong>「クマが明らかに人を狙って接近してきた」72 件</strong>。
        この最悪のシナリオで、スプレーがどれだけクマを退けられたかというと —
      </p>
      <div className="not-prose my-4 rounded-2xl border-2 border-green-300 bg-green-50 p-6 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-green-800">
          攻撃してきたクマへの撃退成功率
        </div>
        <div className="mt-2 text-5xl font-bold text-green-700 tabular-nums">92%</div>
        <div className="mt-2 text-sm text-stone-700">
          72 件中 66 件で、クマがその場から離れた
        </div>
      </div>
      <p>
        さらに、好奇心で近づいてきたクマには <strong>90%</strong>、
        スプレーを使った人の <strong>98%</strong>が無傷で帰宅、
        <strong>死亡例はゼロ</strong>。
      </p>
      <p>
        この数字は当時の業界が宣伝していた「90% 以上」とほぼ一致しました。
        違いは、これが <strong>査読を通った公的な統計</strong>だという点。
        メーカーの宣伝コピーから、世界中のレンジャーが教科書として参照できる根拠データへと、
        クマスプレーの地位が一気に変わった瞬間でした。
      </p>

      <h2 id="three-species">驚くべき発見 — 3 種類のクマ、みんな苦手だった</h2>
      <p>
        この論文が革新的だったもう一つの理由は、調査対象に <strong>3 種類の異なるクマ</strong>が
        含まれていたことです。
      </p>
      <p>
        アラスカは世界でも珍しく、<strong>ヒグマ・ホッキョクグマ・アメリカクロクマ</strong>の
        3 種が同じ地域に生息する場所。普通なら 1 種類でも貴重なデータなのに、Smith らは
        3 種類すべてを集めることに成功しました。
      </p>
      <p>結果はこうです。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">クマの種</th>
              <th className="px-3 py-2 text-left">事案数</th>
              <th className="px-3 py-2 text-left">撃退成功率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ヒグマ</td>
              <td className="px-3 py-2 tabular-nums">133</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">92%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ホッキョクグマ</td>
              <td className="px-3 py-2 tabular-nums">32</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">100%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">クロクマ</td>
              <td className="px-3 py-2 tabular-nums">10</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">90%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        体重 600kg のホッキョクグマも、わずか 100kg のクロクマも、唐辛子成分（カプサイシン）の前では
        ほぼ同じく逃げ出した。これは「カプサイシンへの嫌悪反応はクマ科で共通する仕組みらしい」
        という生物学的な発見でもあります。
      </p>
      <p>
        そして、これは <strong>日本のツキノワグマにも同じスプレーが効く可能性が高い</strong>ことを
        強く示唆します（詳しくは後述）。
      </p>

      <h2 id="after-spray">スプレーをかけた後、クマは何をしたか</h2>
      <p>
        論文がもう一つ丁寧に調べたのは、<strong>噴射後にクマがどう振る舞ったか</strong>。
        これは「使い終わったあと、自分はどうすべきか」を考えるうえでとても大事な情報です。
      </p>
      <p>分類してみると、こんなパターンがありました。</p>
      <ul>
        <li>
          🐻💨 <strong>即座にダッシュで逃走</strong> — 最も多いパターン。噴射の数秒以内に向きを変えて走り去る
        </li>
        <li>
          🐻💧 <strong>その場で苛立ち → ゆっくり離れる</strong> — クマが顔をこすりながら、徐々に後退
        </li>
        <li>
          🐻↩️ <strong>一度離れて、戻ってくる</strong> — 全体の <strong>14%</strong> でこのパターンが観察された
        </li>
        <li>
          🐻🚶 <strong>ほぼ無視 → 通過</strong> — 稀。クマが無関心で人の横を通り過ぎる
        </li>
      </ul>

      <h2 id="back-14">「14% は戻ってくる」が意味すること</h2>
      <p>
        「<strong>14% は戻ってくる</strong>」— これ、地味だけど重要な数字です。
      </p>
      <p>
        スプレーは<strong>「クマを倒す道具」ではない</strong>。
        あくまで <strong>「自分が安全圏に逃げ込むための時間を稼ぐ道具」</strong>です。
        噴射 → ホッとして座り込む、ではなく、噴射 → 即座に方角を変えて落ち着いて離れる、が正解。
      </p>
      <div className="not-prose my-4 rounded-xl border border-red-200 bg-red-50 p-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-red-700">
          現場での教訓
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-800">
          スプレーを使ったあと、「<strong>クマが本当に去ったか</strong>」を確認しながら
          <strong>静かに後退</strong>するのが原則。決して走らない（追跡本能を刺激する）、
          背中を見せない、そして<strong>遠くまで離れる</strong>。
        </p>
      </div>

      <h2 id="no-death">死者ゼロという数字、どう受け止めるか</h2>
      <p>
        175 件全体で <strong>死亡例ゼロ、重傷例ほぼゼロ、98% が無傷で帰宅</strong>。
        これは強烈な数字です。
      </p>
      <p>
        ただし、ここで一歩立ち止まる必要があります。175 件で死亡ゼロは
        「<strong>スプレー使用時の死亡確率がゼロ</strong>」を意味するわけではありません。
        統計の言葉で言うと、「真の死亡確率は <strong>0〜1% 程度</strong>と推定される」が正確な解釈です。
      </p>
      <p>
        とはいえ、参考までに比較しましょう。
        スプレーを持っていなかった人が <strong>「攻撃された」</strong>事例の北米統計では、
        <strong>死亡率は数 %、重傷率は 30〜40%</strong>と推定されています。
        スプレーの「ほぼゼロ」と比較すると、その差は歴然です。
      </p>
      <p>
        要は、<strong>「持っていれば死なないかも」ではなく「持っていれば死亡リスクが大きく下がる」</strong>
        と理解するのが、この論文の正しい読み方です。
      </p>

      <h2 id="weak-points">とはいえ、この研究にも弱点はある</h2>
      <p>
        ここまで読むと「スプレー最強！」という気分になるかもしれませんが、
        論文には正直に向き合うべき<strong>限界</strong>もあります。
        Smith 自身も論文中で次の点を率直に認めています。
      </p>
      <ul>
        <li>
          <strong>失敗した人は記録に残りにくい</strong>: 噴射に失敗してクマに襲われた人が
          そのまま亡くなった場合、データに入ってこない可能性
        </li>
        <li>
          <strong>「使わなかった対照群」がない</strong>: 同じ状況でスプレーを使わなかった場合と
          直接比較する設計ではない
        </li>
        <li>
          <strong>クロクマのサンプルが少ない</strong>: 10 件しかないので、90% という数字の精度は荒い
        </li>
        <li>
          <strong>風向き・距離・タイミング</strong>の細かい分析は浅い
        </li>
      </ul>
      <p>
        要するに <strong>「効く」という方向の主張は強固だが、「常に効く」とは言っていない</strong>。
        これは Smith 論文の誠実さでもあり、後続研究の余地を残した点でもあります。
      </p>

      <h2 id="vs-firearm">意外な続編 — 実銃 vs スプレー</h2>
      <p>
        Smith らは 2008 年の論文の 4 年後、続編を出しました。タイトルはこう。
      </p>
      <p className="text-center text-sm italic text-stone-600">
        「アラスカにおける実銃でのクマ撃退の効果」<br />
        Smith et al. (2012) — 同じく <em>Journal of Wildlife Management</em>
      </p>
      <p>
        同じ手法で、今度は <strong>銃を使った 269 件</strong>を分析。
        さて、銃とスプレーではどちらが効いたでしょうか？
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">対策</th>
              <th className="px-3 py-2 text-left">撃退成功率</th>
              <th className="px-3 py-2 text-left">使用者の負傷</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">クマスプレー</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">92%</td>
              <td className="px-3 py-2 text-stone-600">少ない</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">実銃</td>
              <td className="px-3 py-2 text-amber-700 font-bold tabular-nums">76%</td>
              <td className="px-3 py-2 text-stone-600">多い</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        意外なことに、<strong>銃を持っていてもスプレーよりも撃退率は低かった</strong>のです。
      </p>
      <p>
        理由は単純です。銃は「構える → 狙う → 撃つ」までに数秒かかる。
        装填不全や故障も起きる。至近距離では狙えない。さらに、命中しても急所を外せばクマは逆上する。
        対してスプレーは <strong>「向けて、噴射」</strong>だけ。
      </p>
      <p>
        この研究の結果、現在のアメリカ国立公園局・カナダのパークスカナダの公式ガイドラインは
        いずれも <strong>「クマスプレーを最優先装備として推奨」</strong>に統一されています。
      </p>

      <h2 id="japan">日本のツキノワグマでも、これは効くのか？</h2>
      <p>
        さて、肝心の日本での話。アラスカのクマで効くのは分かったが、
        ツキノワグマでも同じだろうか？
      </p>
      <p>
        答えは <strong>「ほぼ確実に効くと考えられる」</strong>です。理由は次の通り。
      </p>
      <h3>① 生物学的に、クマ科共通の弱点</h3>
      <p>
        カプサイシン（唐辛子の辛味成分）への嫌悪反応は、嗅覚・粘膜に依存します。
        この仕組みは哺乳類でほぼ共通で、<strong>3 種類のクマで一斉に効いた事実</strong>は
        「クマ科で共通の現象」を強く示唆します。ツキノワグマも例外ではないはず。
      </p>
      <h3>② むしろ、ツキノワグマの方が撃退しやすいかも</h3>
      <p>
        ツキノワグマは成獣でも <strong>体重 80〜150kg</strong>。
        ヒグマ（200〜400kg）と比べてかなり小型で、性格も<strong>「驚き反応で逃げる」</strong>傾向が強い。
        スプレーの効果はむしろ高い可能性すらあります。
      </p>
      <h3>③ ただし、日本ならではの課題も</h3>
      <p>
        日本でのスプレー普及を妨げているのは、<strong>生物学ではなく制度・流通の問題</strong>です。
      </p>
      <ul>
        <li>登山用品店・専門店・ネットで購入は可能だが、<strong>認知度が低い</strong></li>
        <li>航空機への持込不可（容量制限あり）</li>
        <li><strong>空撃ち訓練の機会が少ない</strong>ので、初使用がリアル遭遇</li>
        <li>人に対して使えば暴行罪（クマには合法）</li>
      </ul>
      <p>
        具体的な選び方・携帯ルールは{" "}
        <Link href="/articles/bear-spray">クマよけスプレーの使い方と選び方</Link>
        と{" "}
        <Link href="/articles/spray-travel">クマスプレーの持ち運び</Link>
        にまとめています。
      </p>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <p>
        この論文を読んで、明日から実践できることをまとめます。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>登山・トレッキングには必ず携帯する</strong> — リュック内ではなく、
          <strong>腰のホルスター</strong>か胸ポケットへ。バッグの中ではクマと遭遇したとき
          数秒間に間に合いません。
        </li>
        <li>
          <strong>家で空撃ちを試す</strong> — メーカーが訓練用のダミー（中身が水）を販売しています。
          実物の重さ・噴射音・反動を経験しておくと、本番で動揺しません。
        </li>
        <li>
          <strong>「噴射 = 安全 ではない」を理解する</strong> — 14% は戻ってくる。
          噴射したら<strong>静かに後退</strong>、走らず、背中を見せず、遠くへ。
        </li>
        <li>
          <strong>有効期限を確認する</strong> — クマスプレーには 3〜4 年の使用期限があります。
          いざという時に噴射圧が落ちていたら本末転倒。買い替えサイクルを忘れずに。
        </li>
      </ol>

      <h2 id="why-classic">20 年経っても引用され続ける理由</h2>
      <p>
        2026 年の今、Smith 2008 はクマ研究分野で <strong>250 件以上に引用</strong>される伝説の論文になりました。
        後続研究はたくさん出たのに、なぜこの 1 本が今も第一線で読まれるのか。
      </p>
      <p>
        筆者らの考えはこうです。
      </p>
      <ul>
        <li>
          <strong>結論が明快</strong>: 「90% 効く」という一義的な数字
        </li>
        <li>
          <strong>サンプルが立派</strong>: 21 年・175 件は容易に超えられない蓄積
        </li>
        <li>
          <strong>続編で銃と比較できた</strong>: 業界の議論を一段落させた
        </li>
        <li>
          <strong>政策が動いた</strong>: NPS・パークスカナダの公式装備に
        </li>
        <li>
          <strong>命を救った</strong>: スプレー装備がスタンダードになり、人身被害が減った
        </li>
      </ul>
      <p>
        Smith 2008 を読むということは、ただ「90% 効く」を記憶することではありません。
        <strong>「<em>どうやって</em> その 90% を導いたか」「<em>何が分かって何が分かっていないか</em>」</strong>
        を理解することで、初めてその知識が現場で使えるものになります。
      </p>
      <p>
        次号 Vol.2 では、もっと最近の研究 —
        <strong>GPS テレメトリーで明らかになった「都市型クマの夜行性化」</strong> —
        を取り上げます。市街地に出るクマは、本当に夜行性になりつつあるのか？
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Efficacy of bear deterrent spray in Alaska（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Smith, T. S., Herrero, S., Layton, C. S., Larsen, R. T., &amp; Johnson, K. R. (2008).{" "}
              <em className="not-italic">Journal of Wildlife Management</em> 72(3): 640–645.
            </div>
            <a
              href="https://doi.org/10.2193/2006-452"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.2193/2006-452 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Efficacy of firearms for bear deterrence in Alaska（実銃比較編）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Smith, T. S., Herrero, S., DeBruyn, T. D., &amp; Wilder, J. M. (2012).{" "}
              <em className="not-italic">Journal of Wildlife Management</em> 76(5): 1021–1027.
            </div>
            <a
              href="https://doi.org/10.1002/jwmg.342"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1002/jwmg.342 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Brown bear attacks on humans: a worldwide perspective（世界のヒグマ襲撃メタ解析）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Bombieri, G., Naves, J., Penteriani, V., et al. (2019).{" "}
              <em className="not-italic">Scientific Reports</em> 9: 8573.
            </div>
            <a
              href="https://doi.org/10.1038/s41598-019-44341-w"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1038/s41598-019-44341-w →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              <em className="not-italic">Bear Attacks: Their Causes and Avoidance</em>（古典書籍）
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
          次号予告 — Vol.2
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「市街地のクマは、本当に夜型になりつつあるのか？」</strong> —
          世界中の GPS テレメトリー研究を横断し、人慣れクマの行動時間帯シフトを精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
