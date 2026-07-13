import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-019")!;

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
        「クマは単独行動の動物」 — これは生物学の教科書にも書かれている常識です。
        オオカミやライオンが群れで暮らすのに対し、クマは森の中をひとりで歩き、ひとりで食べ、ひとりで眠る。
      </p>
      <p>
        ところが 1970 年代、アラスカ・カルク湖でひと夏を過ごした 2 人の研究者が、
        この常識を覆す驚くべき観察をしました。<strong>サケが大量に遡上する川に集まる時</strong>、
        ヒグマたちは <strong>明確な序列社会</strong>を形成していたのです。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Social behavior of the Alaska brown bear"
        citation={
          <>
            Stonorov, D., &amp; Stokes, A. W. (1972).{" "}
            <em className="not-italic">Bears: Their Biology and Management</em> 2: 232–242.
          </>
        }
        href="https://doi.org/10.2307/3872586"
        linkText="JSTOR で見る →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            アラスカ・カルク湖のサケ漁場で <strong>40 頭以上のヒグマ</strong>を 1 夏観察
          </>,
          <>
            雄の体格・経験で決まる <strong>明確な序列社会</strong>を形成（直線的階層）
          </>,
          <>
            「単独行動」と「集まる時の社会性」の <strong>使い分け</strong>がクマの本質
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "myth", title: "「クマは単独」という常識の落とし穴" },
          { id: "karluk", title: "カルク湖の夏 — 観察の舞台" },
          { id: "method", title: "1 シーズン・40 頭のヒグマを記録" },
          { id: "hierarchy", title: "見えてきた直線的な序列" },
          { id: "rules", title: "「礼儀正しい」クマたちの暗黙のルール" },
          { id: "mother", title: "子連れ母グマは独自の戦略" },
          { id: "subadult", title: "若いクマの「学びの場」" },
          { id: "japan", title: "日本のクマでも同じことが起きるのか" },
          { id: "implication", title: "「単独」と「社会性」の使い分け" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="myth">「クマは単独」という常識の落とし穴</h2>
      <p>
        従来の動物行動学では、哺乳類は <strong>「単独 vs 群れ」</strong>の二分法で語られてきました。
        オオカミ・ライオン・ハイエナは群れ、トラ・ヒョウ・クマは単独。
        この単純化は教科書的には便利でしたが、現実の動物行動を捉えきれていませんでした。
      </p>
      <p>
        実際、クマも <strong>季節・状況によって</strong>群れ的に集まる場面があります。
        サケが遡上する川、ベリーが大量実りする草原、堆肥置き場、ゴミ集積所 — 食物が集中する場所では、
        通常なら出会わない複数のクマが顔を合わせます。
      </p>
      <p>
        そのとき、クマたちはどう振る舞うのか？
        単純に「<strong>力の強い者勝ち</strong>」で混乱するのか、それとも何らかの秩序があるのか？
        この問いに、Derek Stonorov（当時、米国アイダホ大学の博士課程学生）と
        Allen Stokes（指導教官）が初めて系統的な答えを出しました。
      </p>

      <h2 id="karluk">カルク湖の夏 — 観察の舞台</h2>
      <p>
        舞台はアラスカ南部の <strong>コディアック島</strong>。世界最大級のヒグマ（コディアックヒグマ）の生息地として有名です。
      </p>
      <p>
        島内にある <strong>カルク川</strong>は、毎年数百万匹のサケが遡上する世界有数の漁場。
        この川の上流にある <strong>カルク湖</strong>周辺には、コディアックヒグマが何十頭も集まってきます。
      </p>
      <p>
        Stonorov らは、湖畔の隠れた展望ポイントから <strong>双眼鏡と望遠カメラ</strong>でクマたちを観察。
        個体識別のために、各個体に毛色・体格・耳の傷・性別から名前を付けて記録し、
        <strong>個別の行動パターン</strong>を追跡しました。
      </p>

      <h2 id="method">1 シーズン・40 頭のヒグマを記録</h2>
      <p>
        1 シーズン（夏期 6〜9 月）で <strong>40 頭以上のヒグマ</strong>を識別・記録。
        各個体について、次のデータを取りました。
      </p>
      <ul>
        <li>
          🐻 <strong>性別・推定年齢・体格</strong>
        </li>
        <li>
          🎣 <strong>釣り場での立ち位置</strong>（どこに立つか、誰の隣か）
        </li>
        <li>
          🤝 <strong>他個体との遭遇</strong>（時刻・行動・結果）
        </li>
        <li>
          📊 <strong>支配・服従行動</strong>（威嚇・回避・追跡・闘争）
        </li>
        <li>
          🍣 <strong>採食パターン</strong>（何を、どれだけ、いつ食べたか）
        </li>
      </ul>
      <p>
        これだけ綿密な観察は、当時のヒグマ研究としては <strong>世界初</strong>。
        現代の野生動物行動学の <strong>標準的な手法を確立した</strong>のが本論文の歴史的意義です。
      </p>

      <h2 id="hierarchy">見えてきた直線的な序列</h2>
      <p>
        Stonorov らがデータを整理して見えてきたのは、見事に明確な <strong>「直線的順位社会」</strong>でした。
      </p>
      <p>
        順位の決定要因は次の順でした。
      </p>
      <ol>
        <li>
          <strong>性別と年齢</strong>: 成獣雄 &gt; 成獣雌 &gt; 若いクマ &gt; 子グマ
        </li>
        <li>
          <strong>体格</strong>: 大きい個体が小さい個体より優位
        </li>
        <li>
          <strong>戦闘経験</strong>: 過去に闘って勝ったクマが優位
        </li>
        <li>
          <strong>常駐期間</strong>: 漁場に長く出入りしている個体が優位
        </li>
      </ol>
      <p>
        この序列は <strong>「直線的」</strong>。つまり、A &gt; B、B &gt; C なら必ず A &gt; C という関係が成立し、
        観察期間中はほとんど変化しませんでした。
        まるで <strong>「クマ同士で覚えている地位」</strong>が個体間に共有されているかのよう。
      </p>

      <h2 id="rules">「礼儀正しい」クマたちの暗黙のルール</h2>
      <p>
        さらに興味深いのは、序列が決まった後の <strong>クマ同士の振る舞い</strong>でした。
        毎回闘って序列を確認するのは、双方に負担が大きい。だからクマたちは
        <strong>「闘わないで済むためのルール」</strong>を確立していました。
      </p>
      <ul>
        <li>
          🚶 <strong>距離を保つ</strong>: 上位者が来たら、下位者は事前に <strong>3〜10m 離れる</strong>
        </li>
        <li>
          🪑 <strong>位置を譲る</strong>: 良いポジションは上位者から順に占有
        </li>
        <li>
          👀 <strong>目を合わせない</strong>: 直接視線を交えると挑戦と見なされる
        </li>
        <li>
          🦶 <strong>歩き方を緩める</strong>: 上位者の前ではゆっくり、低姿勢で
        </li>
        <li>
          🍣 <strong>食物を取り合わない</strong>: 上位者が捕ったサケは奪わない
        </li>
        <li>
          🤐 <strong>近づかれたら離れる</strong>: 「自分が下」と認めることで攻撃を回避
        </li>
      </ul>
      <p>
        これは <strong>人間社会の暗黙のマナー</strong>に近い構造です。
        満員電車で目を合わせない、上司の前では緊張する、行列に割り込まない —
        クマたちも、無用な争いを避けるための「<strong>森のエチケット</strong>」を持っていたのです。
      </p>

      <h2 id="mother">子連れ母グマは独自の戦略</h2>
      <p>
        この社会構造の中で、<strong>「子連れ母グマ」</strong>は特殊な立場でした。
      </p>
      <p>
        体格では成獣雄に劣るが、攻撃性は群を抜いて高い。子を守るためなら、自分より遥かに大きい雄にも
        立ち向かう。だから単純な力関係の序列の外側にいる、独自のカテゴリーでした。
      </p>
      <p>
        実際の行動パターンは次の通り。
      </p>
      <ul>
        <li>
          🐻‍❄️ <strong>サケ漁場の周辺部</strong>を選ぶ（中央の競争を避ける）
        </li>
        <li>
          ⏰ <strong>時間帯をずらす</strong>（成獣雄が活発な時間帯を避ける）
        </li>
        <li>
          ⚠️ <strong>子グマを威嚇する個体に即攻撃</strong>（成獣雄でも怯まない）
        </li>
        <li>
          🚪 <strong>逃げ道のある場所</strong>を選ぶ（袋小路は避ける）
        </li>
      </ul>
      <p>
        これは Vol.12（{" "}
        <Link href="/articles/research-digest-012">クロクマ致命的襲撃</Link>
        ）で見た「母グマ襲撃は実は稀」と一見矛盾しますが、別の側面を表しています。
        <strong>クロクマは子を守るためあえて人間に対しても積極攻撃しない</strong>が、
        <strong>ヒグマでは状況次第で母グマも極めて危険</strong>になりうる、ということです。
      </p>

      <h2 id="subadult">若いクマの「学びの場」</h2>
      <p>
        サケ漁場は、<strong>若いクマたち（2〜5 歳）の「学校」</strong>でもありました。
      </p>
      <p>
        母グマから独立して間もない若いクマは、サケ漁が下手。
        最初は <strong>大人の真似</strong>をして、何度も失敗を繰り返しながら、徐々に上達していきます。
        同時に、社会的なルールも観察と試行錯誤で覚えていく。
      </p>
      <p>
        Stonorov らは <strong>「サケ漁場が若いクマたちの社会学習の場」</strong>になっていることを指摘。
        これは Vol.10（{" "}
        <Link href="/articles/research-digest-010">クマは数を理解する</Link>
        ）で見たクマの認知能力と整合的で、若いクマたちが <strong>「他個体から学ぶ」</strong>
        能力を持つことを示しています。
      </p>

      <h2 id="japan">日本のクマでも同じことが起きるのか</h2>
      <p>
        日本では、アラスカのカルク湖のような <strong>大規模なサケ漁場</strong>はありません。
        ただし、いくつかの状況で類似の社会階層が観察されています。
      </p>
      <h3>北海道のヒグマ</h3>
      <p>
        知床・羅臼半島のサケ・マス遡上河川で、複数のヒグマが集まる現象は観察されています。
        北米ほど大規模ではないが、複数頭が <strong>距離を保ちつつ並行採食</strong>する様子は記録されています。
      </p>
      <h3>本州のツキノワグマ</h3>
      <p>
        本州では <strong>「ナラ林の堅果豊作地」</strong>や <strong>「果樹園・養蜂場周辺」</strong>
        で複数頭が出没することがあります。複数のツキノワグマが同じ場所を <strong>時間差で利用</strong>する
        パターンが GPS テレメトリーで確認されており、間接的な社会階層の存在が示唆されます。
      </p>
      <h3>都市型クマでの新展開</h3>
      <p>
        Vol.2（{" "}
        <Link href="/articles/research-digest-002">都市型クマの夜行性化</Link>
        ）で見たように、市街地クマの間でも <strong>「同じゴミ集積所を時間差で利用」</strong>
        といった社会的調整が観察されています。これは Stonorov らが示した <strong>「直接対峙を避ける」</strong>
        ルールが、都市環境にも応用されている可能性を示します。
      </p>

      <h2 id="implication">「単独」と「社会性」の使い分け</h2>
      <p>
        Stonorov &amp; Stokes 1972 の最も重要な含意は、
        <strong>「単独」と「社会性」は二分法ではない</strong>ということです。
      </p>
      <p>
        クマたちは、状況に応じて両方の戦略を使い分けています。
      </p>
      <ul>
        <li>
          普段の森の中: <strong>単独</strong>で行動（テリトリー内・個別採食）
        </li>
        <li>
          食物が集中する場所: <strong>序列を守って共存</strong>（漁場・果樹園）
        </li>
        <li>
          繁殖期: <strong>一時的なペア</strong>を形成（数日〜2 週間）
        </li>
        <li>
          子育て期: <strong>母子の単位</strong>で 2〜3 年（最長 4 年）
        </li>
        <li>
          密度の高い地域: <strong>互いの匂いを介した間接コミュニケーション</strong>（Vol.13 参照）
        </li>
      </ul>
      <p>
        これは私たち人間も同じです。家では家族、仕事場では同僚、街では他人 —
        状況に応じて社会性のレベルを使い分けている。クマたちも、思った以上に <strong>「フレキシブルな社会動物」</strong>
        だったのです。
      </p>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-communication">クマ同士のコミュニケーション</Link>
        と{" "}
        <Link href="/articles/research-digest-013">Vol.13 樹幹マーキング</Link>
        も併読してください。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Social behavior of the Alaska brown bear（本号メイン）",
            citation: (
              <>
                Stonorov, D., &amp; Stokes, A. W. (1972).{" "}
                <em className="not-italic">Bears: Their Biology and Management</em> 2: 232–242.
              </>
            ),
          },
          {
            title: "The social behaviour of brown bears on an Alaskan salmon stream",
            citation: (
              <>
                Egbert, A. L., &amp; Stokes, A. W. (1976).{" "}
                <em className="not-italic">Bears: Their Biology and Management</em> 3: 41–56.
              </>
            ),
          },
          {
            title: "Ecology and behavior of North American black bears",
            citation: (
              <>
                Powell, R. A., Zimmerman, J. W., &amp; Seaman, D. E. (1997). Chapman &amp; Hall.
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

      <NextIssue label="次号予告 — Vol.20">
        <strong>「クマを『殺さず追い払う』科学」</strong> —
        ベアドッグ・ゴム弾・大音響など非致死的手段の効果を 62 頭のクロクマで比較した
        Beckmann 2004 の実証研究を精読します。
      </NextIssue>
    </ArticleShell>
  );
}
