import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-006")!;

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
        「クマは雑食性で、何でも食べる」 — これは間違いではないけれど、不正確な表現です。
      </p>
      <p>
        ワシントン州立大学のクマ研究センターで行われたある実験で、研究者たちはヒグマたちに
        <strong>「好きなだけ何でも食べていい」状況</strong>を用意しました。
        その時、クマたちが見せた選択行動は、私たちの常識を覆すものでした。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Macronutrient optimization and energy maximization determine diets of brown bears
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Erlenbach, J. A., Rode, K. D., Raubenheimer, D., &amp; Robbins, C. T. (2014).{" "}
          <em className="not-italic">Journal of Mammalogy</em> 95(1): 160–168.
        </div>
        <a
          href="https://doi.org/10.1644/13-MAMM-A-161.1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1644/13-MAMM-A-161.1 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            ヒグマは <strong>カロリーではなく「栄養バランス」</strong>を最適化して食を選ぶ
          </li>
          <li>
            選ばれる比率は <strong>タンパク 17% / 脂質 + 炭水化物 83%</strong>に集中
          </li>
          <li>
            秋のクマが市街地で柿・果樹を狙う理由はここにある（高炭水化物・低タンパク食）
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "myth", title: "「クマは何でも食べる」の落とし穴" },
          { id: "lab", title: "ワシントンのクマ研究施設で何が起きたか" },
          { id: "method", title: "「自由選択餌」実験のセットアップ" },
          { id: "result", title: "結果 — クマは「17:83」を選んだ" },
          { id: "why", title: "なぜタンパク質を避けるのか" },
          { id: "wild", title: "野生のクマでも同じことが観察される" },
          { id: "autumn", title: "秋の出没急増は、栄養計算の結果だった" },
          { id: "urban", title: "市街地の食物が「最適」すぎる問題" },
          { id: "japan", title: "日本のツキノワグマと果樹被害の構造" },
          { id: "action", title: "今日からあなたができる 4 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="myth">「クマは何でも食べる」の落とし穴</h2>
      <p>
        野生動物の教科書で、クマはたいてい「<strong>雑食性</strong>」と紹介されます。
        実際、クマは植物の根・果実・草・昆虫・魚・哺乳類の死骸・蜂蜜・キノコ・人工食まで、ほぼ何でも食べます。
      </p>
      <p>
        でも、「<strong>食べる</strong>」と「<strong>好んで選ぶ</strong>」は別の話。
      </p>
      <p>
        「目の前にある食物の中で、何を、どれだけ食べるか」を選ぶときには、
        クマには明確な「戦略」があります。それを定量的に示したのが本論文です。
      </p>

      <h2 id="lab">ワシントンのクマ研究施設で何が起きたか</h2>
      <p>
        ワシントン州立大学（WSU）プルマン校には、世界でも珍しい
        <strong>「クマ研究施設」</strong>があります。広さ約 8,000 ㎡の敷地に、
        ヒグマとアメリカクロクマを <strong>長期飼育</strong>している、本格的な実験施設です。
      </p>
      <p>
        ここを率いてきたのが <strong>Charles T. Robbins 博士</strong>。
        野生動物栄養学の世界的権威で、40 年以上にわたってクマの食性研究を行ってきました。
        本論文の Erlenbach は、彼の研究室の博士課程学生（当時）です。
      </p>
      <p>
        この施設の特徴は、<strong>「クマが自分で食べ物を選べる」</strong>環境を再現できること。
        野生では難しい統制された実験条件下で、クマの「真の選好」を測れるのです。
      </p>

      <h2 id="method">「自由選択餌」実験のセットアップ</h2>
      <p>
        Erlenbach らは、ヒグマ <strong>5 個体</strong>に対し、次のような実験を行いました。
      </p>
      <ul>
        <li>
          3 種類の餌を同時に提供:
          <ul className="mt-2 space-y-1 pl-5 text-sm">
            <li>🥩 <strong>サーモン肉</strong>（高タンパク・高脂質・低炭水化物）</li>
            <li>🥩 <strong>赤身肉</strong>（高タンパク・低脂質・低炭水化物）</li>
            <li>🍎 <strong>リンゴ + 蜂蜜</strong>（低タンパク・低脂質・高炭水化物）</li>
          </ul>
        </li>
        <li>クマは何を、どれだけ食べてもよい</li>
        <li>毎日の摂取量を計量・記録</li>
        <li>2 年間（複数シーズン）にわたって追跡</li>
      </ul>
      <p>
        この実験で測りたかったのは、「<strong>クマが自由に選んだとき、どの栄養バランスに着地するか</strong>」。
        理論上はカロリーが最大化される食物（脂質が多いサーモンなど）を選び続けるかと思われましたが、
        結果は違いました。
      </p>

      <h2 id="result">結果 — クマは「17:83」を選んだ</h2>
      <p>
        クマたちの選好は、想像以上に <strong>「精密」</strong>でした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">栄養素</th>
              <th className="px-3 py-2 text-left">摂取エネルギー比率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">タンパク質</td>
              <td className="px-3 py-2 text-amber-700 font-bold tabular-nums">17%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">脂質 + 炭水化物</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">83%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        どの個体も、どの季節も、ほぼ <strong>「タンパク質 17%」</strong>の地点に着地しました。
        これは個体差・季節差を考慮しても統計的に明確な収束で、
        <strong>「クマは自然界の中でこの比率を目指して食を選んでいる」</strong>という仮説を強く支持する結果でした。
      </p>
      <p>
        さらに興味深いことに、この比率を選んだクマは <strong>体重増加が最大化</strong>されていました。
        他の比率（例えばタンパク質 30%）を強制すると、同じカロリー摂取でも体重が増えにくくなる。
        17:83 は <strong>カロリー利用効率の最適点</strong>でもあったのです。
      </p>

      <h2 id="why">なぜタンパク質を避けるのか</h2>
      <p>
        「タンパク質が多すぎると太れない」 — これは哺乳類の生理学では一般的な現象で、
        <strong>「タンパク質代謝のコスト」</strong>が原因です。
      </p>
      <p>
        タンパク質を消化・代謝するには大量のエネルギーが必要で、副産物として尿素・熱が発生します。
        高タンパク食をすると、消化吸収だけでエネルギーの 30〜40% が使われてしまう。
        一方、脂質・炭水化物のコストは 5〜15% 程度です。
      </p>
      <p>
        冬眠前に <strong>体重を 30% 増やす</strong>必要があるクマにとって、
        効率の悪いタンパク質を大量に食べるのは合理的でないのです。
        だから「<strong>脂質と炭水化物が中心、タンパク質は最小限</strong>」という戦略が遺伝的に組み込まれていると考えられます。
      </p>

      <h2 id="wild">野生のクマでも同じことが観察される</h2>
      <p>
        飼育下の実験結果が、野生でも当てはまるのか。これも後続研究で検証されています。
      </p>
      <p>
        Coogan ら（2014, PLOS ONE）はカナダのヒグマの胃内容物を分析し、
        季節を通じての <strong>「栄養バランス」</strong>を計算しました。
        春は新芽・若草で炭水化物中心、夏はベリー・昆虫で炭水化物 + タンパク質、
        秋はベリー・堅果で炭水化物中心。
      </p>
      <p>
        平均すると、野生のヒグマも <strong>「タンパク質 17〜25%」</strong>程度に着地。
        飼育実験の結果と整合しました。
      </p>
      <p>
        サーモン産卵期のアラスカヒグマだけは例外で、タンパク質比率が一時的に高くなりますが、
        これは「サーモンが大量にいるから、選択の余地が限られている」状況であり、
        やはり<strong>体重増加効率はやや低い</strong>とも観察されています。
      </p>

      <h2 id="autumn">秋の出没急増は、栄養計算の結果だった</h2>
      <p>
        ここで日本のクマ事情と接続します。
      </p>
      <p>
        日本のクマが <strong>秋に大量に出没</strong>する理由は、これまで「ハイパーフェイジア（食欲増進期）」
        と漠然と説明されてきました。
        でも、Erlenbach らの研究を踏まえると、もっと精密な説明ができます。
      </p>
      <p>
        秋のクマは「<strong>17:83 の栄養比率で、最も効率よくカロリーを摂取できる食物</strong>」を探しているのです。
        山中ではブナ・ミズナラ・コナラのドングリ。これらは<strong>炭水化物 70%・脂質 15%・タンパク 6%</strong>程度で、
        ほぼ完璧な「17:83」食です。
      </p>
      <p>
        ところがブナが凶作だと、山中のドングリは激減。クマは「17:83」を求めて山を降ります。
        そして人里で見つけるのが —
      </p>
      <ul>
        <li>
          🍎 <strong>柿</strong>: 炭水化物 75% / 脂質 1% / タンパク 4% （ほぼ完璧）
        </li>
        <li>
          🌰 <strong>栗</strong>: 炭水化物 60% / 脂質 25% / タンパク 6% （理想的）
        </li>
        <li>
          🍯 <strong>蜂蜜</strong>: 炭水化物 82% / 脂質 0% / タンパク 0%（最高効率）
        </li>
        <li>
          🌽 <strong>トウモロコシ畑</strong>: 炭水化物 70% / 脂質 4% / タンパク 9% （理想的）
        </li>
        <li>
          🥫 <strong>生ゴミ（特に米飯・パン）</strong>: 高炭水化物（クマには「ご馳走」）
        </li>
      </ul>
      <p>
        これらは <strong>「17:83 仮説」</strong>から見て、完璧な秋食です。
        山で食べられなかった分を、街で完璧に補える。クマが市街地に来るのは「飢えているから」ではなく、
        <strong>「最適な食物を求めて」</strong>なのです。
      </p>

      <h2 id="urban">市街地の食物が「最適」すぎる問題</h2>
      <p>
        さらに皮肉なことに、人類が作る加工食品は <strong>クマの栄養目標とほぼ完全に一致</strong>します。
      </p>
      <ul>
        <li>パン・米飯・うどん: 炭水化物中心</li>
        <li>砂糖・蜂蜜: 純粋な炭水化物</li>
        <li>ジャム・果物加工品: 高糖質</li>
        <li>ドッグフード（特に乾燥タイプ）: 比率設計されている</li>
        <li>家畜飼料（特にサイレージ）: 発酵で高エネルギー</li>
      </ul>
      <p>
        これらは野生食では味わえないほど <strong>カロリー密度が高く、効率も最高</strong>。
        一度味を覚えたクマが何度も街に来る理由は、ここに帰結します。
        Vol.2 で取り上げた <strong>「都市型クマの誕生」</strong>（{" "}
        <Link href="/articles/research-digest-002">Beckmann &amp; Berger 2003</Link>
        ）の栄養学的説明とも言えます。
      </p>

      <h2 id="japan">日本のツキノワグマと果樹被害の構造</h2>
      <p>
        ツキノワグマでも同じ栄養選好が観察されています。
      </p>
      <p>
        森林総研・各都道府県研究機関の調査では、ツキノワグマの胃内容物の
        <strong>季節別の栄養比率</strong>はヒグマと類似しています。
        特に秋（10〜11 月）は炭水化物比率が <strong>70% を超え</strong>、
        Erlenbach の「17:83」モデルに極めて近い構造を示します。
      </p>
      <p>
        日本でクマ被害が <strong>柿・栗・蜂蜜・トウモロコシ・水稲</strong>に集中するのは偶然ではなく、
        これらが <strong>「クマの栄養目標を完璧に満たす食物」</strong>だからです。
        詳細は{" "}
        <Link href="/articles/bear-agriculture">クマと農業</Link>
        と{" "}
        <Link href="/articles/beech-mast-bear">ブナとクマ</Link>
        を参照してください。
      </p>

      <h2 id="action">今日からあなたができる 4 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>秋の「高炭水化物食」を屋外に置かない</strong> — 柿・栗・りんごの放置は厳禁。
          砂糖・蜂蜜・ジャムの屋外保管も禁止。これらは「17:83」を満たす完璧な誘引物です。
        </li>
        <li>
          <strong>「カロリー」ではなく「炭水化物 + 脂質の組合せ」で考える</strong> — 同じカロリーでも、
          バランスが「17:83」に近いほどクマを呼びます。米飯・パン・ジャムを優先的に屋内保管。
        </li>
        <li>
          <strong>ペットフードの屋外保管禁止</strong> — 多くのドッグフードは <strong>栄養比率がクマに完璧</strong>。
          屋内・密閉保管が鉄則。
        </li>
        <li>
          <strong>果樹の落果は毎日拾う</strong> — 完熟して地面に落ちた果物は、
          発酵 + 糖度上昇でクマには <strong>究極のご馳走</strong>。日次の片付けが効果的。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Macronutrient optimization and energy maximization determine diets of brown bears（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Erlenbach, J. A., Rode, K. D., Raubenheimer, D., &amp; Robbins, C. T. (2014).{" "}
              <em className="not-italic">Journal of Mammalogy</em> 95(1): 160–168.
            </div>
            <a
              href="https://doi.org/10.1644/13-MAMM-A-161.1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1644/13-MAMM-A-161.1 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Macronutrient optimization and seasonal diet mixing in a large omnivore, the grizzly bear: a geometric analysis
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Coogan, S. C., Raubenheimer, D., Stenhouse, G. B., &amp; Nielsen, S. E. (2014).{" "}
              <em className="not-italic">PLOS ONE</em> 9(5): e97968.
            </div>
            <a
              href="https://doi.org/10.1371/journal.pone.0097968"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1371/journal.pone.0097968 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              WSU Bear Center — Charles T. Robbins 教授の研究施設
            </div>
            <a
              href="https://labs.wsu.edu/bearcenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              labs.wsu.edu/bearcenter →
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
          次号予告 — Vol.7
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「日本のリンゴ園で実証された電気柵の効果」</strong> —
          長野県のリンゴ園 12 か所での電気柵試験で、ツキノワグマ被害が 92〜100% 減少した
          Huygens &amp; Hayashi 2001 を精読します。日本人研究者による「世界に通じる現場研究」。
        </div>
      </div>
    </ArticleShell>
  );
}
