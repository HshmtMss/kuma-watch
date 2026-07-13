import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-005")!;

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
        アラスカのある研究者の話。極北のツンドラを歩いていた時、彼の前を歩いていたヒグマが、
        突然進路を 90 度変えました。理由を確かめるため彼が同じ方向に歩くと —
        <strong>3 km 先に、クジラの死骸</strong>が浜辺に打ち上がっていました。
      </p>
      <p>
        北極圏ではこんな話も。<strong>ホッキョクグマが厚さ 1m の氷の下のアザラシの巣穴を、嗅覚だけで発見する</strong>。
        伝説のように聞こえるこの話、実は遺伝学とテレメトリーが裏付ける科学的事実です。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 2 本の論文"
        papers={[
          {
            title: "① Extreme expansion of the olfactory receptor gene repertoire in mammals",
            citation: (
              <>
                Niimura, Y., Matsui, A., &amp; Touhara, K. (2014).{" "}
                <em className="not-italic">Genome Research</em> 24(9): 1485–1496.
              </>
            ),
            href: "https://doi.org/10.1101/gr.169532.113",
            linkText: "DOI: 10.1101/gr.169532.113 →",
          },
          {
            title: "② Windscapes and olfactory foraging in a large carnivore",
            citation: (
              <>
                Togunov, R. R., Derocher, A. E., &amp; Lunn, N. J. (2017).{" "}
                <em className="not-italic">Scientific Reports</em> 7: 46332.
              </>
            ),
            href: "https://doi.org/10.1038/srep46332",
            linkText: "DOI: 10.1038/srep46332 →",
          },
        ]}
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            ヒグマの嗅覚受容体遺伝子は <strong>約 1,600 個</strong>（人の 5 倍、犬の 7 倍）
          </>,
          <>
            ホッキョクグマは <strong>16 km 先のアザラシ</strong>を風向きから嗅ぎつけられる
          </>,
          <>
            クマは「視覚の世界」ではなく <strong>「匂いの世界地図」</strong>で生きている
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "私たちは視覚の世界、クマは嗅覚の世界" },
          { id: "genes", title: "遺伝子レベルで見るクマの嗅覚力" },
          { id: "compared", title: "犬・象・人と比べてどうなのか" },
          { id: "polar", title: "ホッキョクグマは 16 km 先を嗅ぐ" },
          { id: "how", title: "クマは匂いをどう「使って」いるのか" },
          { id: "implications", title: "嗅覚の鋭さが、人クマ軋轢を生む" },
          { id: "japan", title: "日本の事例で考える「匂いがクマを呼ぶ」" },
          { id: "action", title: "今日からあなたができる 5 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">私たちは視覚の世界、クマは嗅覚の世界</h2>
      <p>
        私たち人間は、世界を主に「目」で認識します。色・形・距離 — そのほとんどが視覚から得られる情報です。
      </p>
      <p>
        ところがクマは違います。彼らの世界の <strong>主役は「匂い」</strong>です。
        食物の場所、他の個体の存在、危険の有無、繁殖期の相手 — そのほとんどを<strong>嗅覚で把握</strong>しています。
      </p>
      <p>
        これは比喩でも誇張でもなく、<strong>遺伝子レベルで証明された生物学的事実</strong>です。
        2014 年、東京大学の <strong>新村芳人</strong>博士らが世界 13 種の哺乳類のゲノムを比較し、
        その差を初めて定量化しました。
      </p>

      <h2 id="genes">遺伝子レベルで見るクマの嗅覚力</h2>
      <p>
        嗅覚は、鼻の中の <strong>嗅覚受容体</strong>というセンサータンパク質によって担われます。
        それぞれの受容体は、特定の匂い分子を認識する「鍵と鍵穴」の関係。
        受容体の種類が多いほど、識別できる匂いの種類が増えます。
      </p>
      <p>
        この受容体を作る遺伝子の数を、新村らは哺乳類 13 種で比較しました。
        結果は驚くべきものでした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">動物</th>
              <th className="px-3 py-2 text-left">機能性嗅覚受容体遺伝子の数</th>
              <th className="px-3 py-2 text-left">人との比</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">アフリカゾウ</td>
              <td className="px-3 py-2 tabular-nums">約 2,000</td>
              <td className="px-3 py-2 tabular-nums">×5.0</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">ヒグマ</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">約 1,600</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">×4.0</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">イヌ</td>
              <td className="px-3 py-2 tabular-nums">約 800</td>
              <td className="px-3 py-2 tabular-nums">×2.0</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">マウス</td>
              <td className="px-3 py-2 tabular-nums">約 1,100</td>
              <td className="px-3 py-2 tabular-nums">×2.8</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">ヒト</td>
              <td className="px-3 py-2 tabular-nums">約 400</td>
              <td className="px-3 py-2 tabular-nums">×1.0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ヒグマは <strong>ヒトの約 4 倍、犬の約 2 倍</strong>の嗅覚受容体遺伝子を持っていました。
        ただし注意すべきは、これは <strong>「識別できる匂いの種類」</strong>の話。
        微小な匂い分子を「検出する感度」と組み合わせると、その差はさらに広がります。
      </p>

      <h2 id="compared">犬・象・人と比べてどうなのか</h2>
      <p>
        遺伝子の数だけでなく、<strong>嗅覚に使う脳の領域の大きさ</strong>も加味すると、
        クマの嗅覚力は様々な指標で次のように見積もられています。
      </p>
      <ul>
        <li>
          🐶 イヌ: 人の <strong>10,000 倍</strong>の感度
        </li>
        <li>
          🐻 ヒグマ: 犬の <strong>7 倍</strong>、人の <strong>約 7 万倍</strong>
        </li>
        <li>
          ❄️ ホッキョクグマ: ヒグマと同等またはそれ以上
        </li>
        <li>
          🐘 ゾウ: 人の <strong>5 倍</strong>の遺伝子だが、距離 km 級の探知能力
        </li>
      </ul>
      <p>
        「ヒグマは犬の 7 倍」というのは <strong>北米の野生動物管理機関で広く使われる指標</strong>で、
        その根拠の一つが本論文（および後続の比較研究）です。
      </p>
      <p>
        この嗅覚を、私たちの感覚で想像するのは難しい。でも、こう考えてみてください。
        私たちが「コーヒーの香り」を感じる距離が 1m だとすれば、クマは <strong>70 km 先のコーヒーを嗅ぎ取れる</strong>計算になります。
        実際にはそこまで届かないにせよ、私たちと彼らが見ている「世界の解像度」がまるで違うのは確かです。
      </p>

      <h2 id="polar">ホッキョクグマは 16 km 先を嗅ぐ</h2>
      <p>
        遺伝子レベルだけでなく、<strong>実際にどれだけ遠くまで嗅げるのか</strong>を野外で定量化した研究もあります。
      </p>
      <p>
        2017 年、カナダ・アルバータ大学の Ron Togunov らが、
        ハドソン湾のホッキョクグマに GPS 首輪をつけて行動を追跡しました。
        さらに気象データから風向き・風速を 1 時間ごとに記録し、
        <strong>クマがどの方向の匂いを察知して歩いたか</strong>を統計的に解析しました。
      </p>
      <p>
        結果はこうです。
      </p>
      <ul>
        <li>
          ホッキョクグマは、<strong>風上方向の匂いに反応してアザラシを発見</strong>
        </li>
        <li>
          検出範囲は <strong>最大 16 km</strong>（条件次第でさらに延びる可能性も）
        </li>
        <li>
          風向きが変わると、クマも歩く方向を変える
        </li>
        <li>
          匂いの探索は <strong>「ジグザグ歩行」</strong>パターンで、ガス漏れ探知器のような行動
        </li>
      </ul>
      <p>
        私たちが <strong>「16 km 先のキッチンから漂ってくる料理の匂い」</strong>を想像できるでしょうか。
        ホッキョクグマには、それが日常です。
      </p>

      <h2 id="how">クマは匂いをどう「使って」いるのか</h2>
      <p>
        強力な嗅覚は、クマの生活のあらゆる場面で活用されています。
      </p>
      <h3>① 食物の探索</h3>
      <p>
        熟したベリー、堅果、動物の死骸、果樹、養蜂場 — クマはこれらを <strong>視覚に頼らず嗅覚だけで</strong>
        正確に位置を当てます。秋のハイパーフェイジア期には、嗅覚への依存度がさらに増します。
      </p>
      <h3>② テリトリーと他個体の認識</h3>
      <p>
        クマは木の幹に背中をこすりつけたり、糞・尿でマーキングしたりして、
        「自分の匂い」を残します。他のクマはそれを嗅いで、相手の<strong>性別・年齢・繁殖状態・体格</strong>
        まで読み取ります。これは私たち人間が顔写真を見るような感覚に近いと言えます。
      </p>
      <h3>③ 危険の察知</h3>
      <p>
        人間の体臭・銃の硝煙臭・車の排気 — クマはこれらを嗅ぎ取って警戒します。
        ハンターが「風上から接近する」のは、まさにクマの嗅覚をかわすため。
      </p>
      <h3>④ 繁殖行動</h3>
      <p>
        繁殖期には雄が雌のフェロモン（性ホルモン由来の匂い）を数 km 先から嗅ぎつけて移動します。
        この行動は GPS テレメトリーで確認されており、繁殖期の雄ヒグマは普段の 3〜5 倍の移動距離を示します。
      </p>

      <h2 id="implications">嗅覚の鋭さが、人クマ軋轢を生む</h2>
      <p>
        この嗅覚の鋭さこそが、現代の人クマ軋轢の根本要因の一つです。
      </p>
      <p>
        私たちが「家の生ゴミは外に出さない」「果樹は早めに収穫する」と言われても、
        ピンと来ないかもしれません。だって、私たち自身の鼻にはほとんど匂わないから。
      </p>
      <p>
        でもクマの世界では、その生ゴミは <strong>1 km 先からくっきり見える「光」</strong>のような存在なのです。
        放置された果樹、屋外のペットフード、コンポストの堆肥、車のトランクの食料 —
        すべてが <strong>「クマを呼ぶ匂いの灯台」</strong>になります。
      </p>
      <p>
        Beckmann &amp; Berger（{" "}
        <Link href="/articles/research-digest-002">Vol.2 参照</Link>
        ）が示した <strong>「人為的食料でクマが都市型化する」</strong>現象も、
        この嗅覚の鋭さが前提です。匂いで街の食料を発見できなければ、そもそも市街地に降りてこない。
      </p>

      <h2 id="japan">日本の事例で考える「匂いがクマを呼ぶ」</h2>
      <p>
        日本の出没事案を振り返ると、嗅覚の関与が明確に見える事例が数多くあります。
      </p>
      <ul>
        <li>
          <strong>蜂蜜・蜜蝋の養蜂場</strong>: 1 km 圏内のクマが必ず嗅ぎつける（長野・岐阜の事例）
        </li>
        <li>
          <strong>畜舎のサイレージ（発酵牧草）</strong>: OSO18 が乳牛を襲うようになった経路として注目（北海道）
        </li>
        <li>
          <strong>果樹の落果</strong>: 完熟して地面に落ちたリンゴ・梨・柿は、健全果より遥かに強い香りを放つ
        </li>
        <li>
          <strong>キャンプ場の調理跡</strong>: 食べ残し・洗い物の油の匂いが数百 m 単位で拡散
        </li>
        <li>
          <strong>釣り場の魚の内臓</strong>: クマが釣り客を襲う事案の引き金として頻出
        </li>
      </ul>
      <p>
        「匂いを管理する」という発想を、対策の中心に据える必要があります。
        詳細は{" "}
        <Link href="/articles/home-protection">住宅周辺のクマ対策</Link>
        と{" "}
        <Link href="/articles/bear-agriculture">クマと農業</Link>
        を参照してください。
      </p>

      <h2 id="action">今日からあなたができる 5 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>生ごみは「収集日に出す」を厳守</strong> — 屋外に長時間放置しない。
          密閉ストッカーかクマ対策ゴミ箱を使う。
        </li>
        <li>
          <strong>落果は毎日拾う</strong> — 果樹園・庭の柿・栗・りんごは完熟前に収穫。
          落ちたものはその日のうちに除去。
        </li>
        <li>
          <strong>ペットフード・畜舎飼料は屋内保管</strong> — 強烈な匂いを発するので、
          屋外保管は「クマを呼ぶ宣伝看板」と同じ。
        </li>
        <li>
          <strong>キャンプ時の食材は「ベアキャニスター」へ</strong> — 食料・歯磨き粉・香りの強いものは
          専用容器に収め、テントから 100m 以上離して保管。
        </li>
        <li>
          <strong>登山中の食べ残し・ゴミは持ち帰る</strong> — 山中に放置されたバナナの皮 1 枚でも、
          クマには「人の食物がある」という強力なシグナルになります。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Extreme expansion of the olfactory receptor gene repertoire in African elephants and evolutionary dynamics of orthologous gene groups in 13 placental mammals（本号メイン①）",
            citation: (
              <>
                Niimura, Y., Matsui, A., &amp; Touhara, K. (2014).{" "}
                <em className="not-italic">Genome Research</em> 24(9): 1485–1496.
              </>
            ),
            href: "https://doi.org/10.1101/gr.169532.113",
            linkText: "DOI: 10.1101/gr.169532.113 →",
          },
          {
            title: "Windscapes and olfactory foraging in a large carnivore（本号メイン②）",
            citation: (
              <>
                Togunov, R. R., Derocher, A. E., &amp; Lunn, N. J. (2017).{" "}
                <em className="not-italic">Scientific Reports</em> 7: 46332.
              </>
            ),
            href: "https://doi.org/10.1038/srep46332",
            linkText: "DOI: 10.1038/srep46332 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.6">
        <strong>「クマは『カロリー』より『栄養バランス』で食を選ぶ」</strong> —
        ワシントン州立大学の実験で、ヒグマが必ずタンパク質・脂質・炭水化物の比率を
        最適点に揃えることが判明。秋の市街地出没の本当の理由を Erlenbach 2014 で精読します。
      </NextIssue>
    </ArticleShell>
  );
}
