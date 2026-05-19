import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-agriculture")!;

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
        <strong>結論</strong>: 農業現場のクマ被害は <strong>品目ごとに対策が異なります</strong>。
        果樹園・養蜂・水田・畜産で、クマがどこを狙い、何が誘引源になり、
        どの装備が効くのかを実務目線で整理します。
        電気柵の設計、誘引物管理、自治体補助金の活用までを含めて解説します。
      </p>

      <ArticleToc
        items={[
          { id: "overview", title: "農業被害の全体像" },
          { id: "orchard", title: "果樹園 — リンゴ・梨・柿・栗" },
          { id: "beekeeping", title: "養蜂 — 蜂蜜と巣箱が狙われる" },
          { id: "rice", title: "水田 — 稲作・畔・サイレージ" },
          { id: "livestock", title: "畜産 — 飼料・畜舎・廃棄物" },
          { id: "fence", title: "電気柵の設計 — 品目別の最適仕様" },
          { id: "subsidy", title: "自治体・JA の支援制度" },
          { id: "report", title: "被害が出たときの報告手順" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">農業被害の全体像</h2>
      <p>
        農林水産省の野生鳥獣被害統計によれば、クマによる農業被害額は
        全国で年間 <strong>4〜7 億円</strong>規模で推移しています
        （イノシシ・シカと比べると被害額は小さいが、地域偏在が大きい）。
        被害は秋（9〜11 月）に集中し、果樹・はちみつなど高単価品目で被害単価が大きいのが特徴です。
      </p>
      <ul>
        <li>
          <strong>被害品目 top</strong>: リンゴ・トウモロコシ・カボチャ・スイカ・水稲（種類は地域差あり）
        </li>
        <li>
          <strong>被害多発地域</strong>: 東北・北海道・中部山岳・北陸。本州ツキノワグマ域がほぼ重複
        </li>
        <li>
          <strong>季節性</strong>: 9〜11 月のハイパーフェイジア期がピーク。柿・栗・養蜂が集中
        </li>
        <li>
          <strong>被害単価</strong>: 養蜂は 1 巣箱あたり 5〜10 万円、リンゴ園は 1 回の侵入で数十万円
        </li>
      </ul>
      <p>
        農業被害が深刻な背景は{" "}
        <Link href="/articles/why-increasing">クマ出没はなぜ増えているのか</Link>
        、年次の振り返りは{" "}
        <Link href="/articles/bear-2025-retrospective">
          2025年クマ大量出没を振り返る
        </Link>
        を参照してください。
      </p>

      <h2 id="orchard">果樹園 — リンゴ・梨・柿・栗</h2>
      <p>
        果樹園はクマの食物源として極めて魅力的です。糖質が高く、樹上で簡単に食べられる果実は
        ハイパーフェイジア期の理想的なカロリー源。一度味を覚えた個体は繰り返し侵入します。
      </p>
      <h3>狙われやすい品目</h3>
      <ul>
        <li>
          <strong>リンゴ</strong> — 8 月下旬〜11 月の収穫期。早生〜中生種が特に狙われる
        </li>
        <li>
          <strong>梨</strong> — 8〜10 月。果実が大きく食べやすい
        </li>
        <li>
          <strong>柿</strong> — 10〜12 月。木に残った果実が長期間誘引源に
        </li>
        <li>
          <strong>栗</strong> — 9〜10 月。落果が大量にあると毎日通うクマも
        </li>
        <li>
          <strong>桃・ぶどう</strong> — 7〜9 月。糖度が高く狙われる
        </li>
      </ul>
      <h3>果樹園の対策</h3>
      <ul>
        <li>
          <strong>電気柵（最重要）</strong>: 高さ 1.5m 以上、3〜4 段、地面から 25cm 間隔。
          7,000V 以上の電圧を保つ。果樹園周囲を完全に囲む必要があり、入口は必ず電気門
        </li>
        <li>
          <strong>収穫しない果実の早期撤去</strong>: 樹上に残った果実・落果は秋になる前に片付ける。
          放棄園が周囲にあれば自治体に相談
        </li>
        <li>
          <strong>収穫タイミングの最適化</strong>: 完熟まで待つと被害リスクが高まる品種は早摘み
        </li>
        <li>
          <strong>夜間照明・センサーライト</strong>: 補助的だが、人の存在感を演出
        </li>
        <li>
          <strong>カメラ監視</strong>: トレイルカメラ・AI 検知カメラで侵入を早期検知。
          <Link href="/products?for=gov">自治体向け AI 検知ソリューション</Link>
          も検討対象
        </li>
      </ul>

      <h2 id="beekeeping">養蜂 — 蜂蜜と巣箱が狙われる</h2>
      <p>
        養蜂は被害単価が農業の中で最も大きく、ベテラン養蜂家でも 1 シーズンで全巣箱を失うケースがあります。
        クマは <strong>蜂蜜よりも蜂の幼虫</strong>を好み、巣箱を物理的に破壊して中身を食べます。
      </p>
      <h3>狙われやすい状況</h3>
      <ul>
        <li>山林・里山に設置された巣箱（移動養蜂含む）</li>
        <li>夏から秋にかけての採蜜期</li>
        <li>近隣で野生のミツバチコロニーが減っている地域</li>
      </ul>
      <h3>養蜂の対策</h3>
      <ul>
        <li>
          <strong>電気柵が最も有効</strong>: 巣箱の周りを 1〜2m の高さで囲む。
          地面から 20cm 間隔で 3〜4 段。ベテラン養蜂家の多くが採用
        </li>
        <li>
          <strong>巣箱の地上設置を避ける</strong>: 鉄柵の上やコンクリート台上に設置すると物理的に倒しにくい
        </li>
        <li>
          <strong>移動養蜂は事前の出没情報確認</strong>:{" "}
          <Link href="/place">都道府県別ページ</Link>
          で設置候補地周辺の出没状況を必ず確認
        </li>
        <li>
          <strong>クマ被害保険</strong>の付帯を検討。詳細は{" "}
          <Link href="/articles/bear-insurance">クマ被害保険</Link>
        </li>
      </ul>
      <p>
        養蜂被害は地域の自治体・JA も把握していることが多いため、設置前の相談が有効です。
      </p>

      <h2 id="rice">水田 — 稲作・畔・サイレージ</h2>
      <p>
        水田自体への直接被害は少ないものの、近年は <strong>畔の通行</strong>や
        <strong>収穫期前の稲穂への被害</strong>、<strong>サイレージ・籾倉庫への侵入</strong>
        が報告されるようになっています。
      </p>
      <h3>水田周辺で気をつけること</h3>
      <ul>
        <li>
          <strong>畔・農道の早朝・夕方の単独作業</strong>を避ける
        </li>
        <li>
          <strong>収穫後の籾・稲わら</strong>を野外に放置しない（誘引源に）
        </li>
        <li>
          <strong>サイレージ（飼料用）</strong>はクマが匂いで集まる。密閉保管必須
        </li>
        <li>
          <strong>水田に隣接する里山の藪刈り</strong>で見通しを確保
        </li>
        <li>
          <strong>クマ鈴</strong>を携帯して作業（
          <Link href="/articles/bear-bell">クマ鈴の選び方</Link>
          ）
        </li>
      </ul>

      <h2 id="livestock">畜産 — 飼料・畜舎・廃棄物</h2>
      <p>
        畜産農家では、家畜そのものよりも <strong>飼料・廃棄物・サイレージ</strong>
        がクマを引き寄せます。北海道では実際に酪農家のサイレージや堆肥場が狙われる事例が継続的に報告されています。
      </p>
      <h3>畜産の対策</h3>
      <ul>
        <li>
          <strong>飼料の屋外保管をやめる</strong>。倉庫・サイロは必ず施錠
        </li>
        <li>
          <strong>家畜の死体・廃棄物は適切に処理</strong>。野ざらしは厳禁
        </li>
        <li>
          <strong>畜舎周辺の電気柵</strong>。特に夜間にクマが侵入する事例あり
        </li>
        <li>
          <strong>近隣地域の出没情報</strong>を{" "}
          <Link href="/">KumaWatch トップマップ</Link>
          で日々確認
        </li>
      </ul>

      <h2 id="fence">電気柵の設計 — 品目別の最適仕様</h2>
      <p>
        農業被害対策の柱は電気柵です。品目によって最適な設計は異なりますが、共通の原則があります。
      </p>
      <h3>共通原則</h3>
      <ul>
        <li>
          <strong>電圧</strong>: 7,000V 以上を維持。週次でテスター測定
        </li>
        <li>
          <strong>段数</strong>: クマ用は最低 3 段、推奨 4 段
        </li>
        <li>
          <strong>地上高</strong>: 最下段 20〜25cm、最上段 90〜120cm
        </li>
        <li>
          <strong>下草刈り</strong>: 月 1 回。漏電すると電圧が落ち効果が激減
        </li>
        <li>
          <strong>入口</strong>: 必ず電気門。ゲート部分が弱点になりやすい
        </li>
      </ul>
      <h3>品目別の追加考慮点</h3>
      <ul>
        <li>
          <strong>果樹園</strong>: 周長が長くなる。電源は商用 or ソーラー併用
        </li>
        <li>
          <strong>養蜂</strong>: 巣箱単位で囲む小規模設置でも効果大
        </li>
        <li>
          <strong>畜舎</strong>: 既存柵に追加できるタイプを選定
        </li>
      </ul>
      <p>
        具体的な設置方法は{" "}
        <Link href="/articles/electric-fence">電気柵のクマ対策</Link>
        を参照してください。
      </p>

      <h2 id="subsidy">自治体・JA の支援制度</h2>
      <p>
        多くの自治体・JA でクマ対策の補助制度があります。
        補助率・上限額は地域差が大きいため、必ず地元に確認してください。
      </p>
      <h3>代表的な支援メニュー</h3>
      <ul>
        <li>
          <strong>電気柵の購入・設置補助</strong>
          — 多くの市町村で 50〜90% 補助、上限 10〜50 万円
        </li>
        <li>
          <strong>共同設置への補助</strong>
          — 複数農家でまとまった面積を囲う場合に補助率上乗せ
        </li>
        <li>
          <strong>被害補償</strong>
          — 一部地域で被害額の一部を補償する制度あり
        </li>
        <li>
          <strong>クマ撃退装置のレンタル</strong>
          — モンスターウルフ等の自治体導入分を農家に貸出
        </li>
        <li>
          <strong>営農指導</strong>
          — JA の営農指導員による誘引物管理アドバイス
        </li>
      </ul>
      <p>
        自治体向けのソリューション（AI 検知・撃退装置）は{" "}
        <Link href="/products?for=gov">対策製品一覧（自治体向け）</Link>
        を参照してください。
      </p>

      <h2 id="report">被害が出たときの報告手順</h2>
      <p>
        被害発生時は <strong>速やかに自治体・JA に報告</strong>することが重要です。
        統計が集まらないと補助金や対策予算が確保されないため、報告は地域の対策強化につながります。
      </p>
      <ol>
        <li>
          <strong>市町村役場（農林課・産業振興課）</strong>に被害状況を連絡
        </li>
        <li>
          <strong>JA</strong>（地域の農協）の窓口にも併せて報告
        </li>
        <li>
          被害現場の <strong>写真撮影</strong>（クマ特有のフィールドサイン含む）
        </li>
        <li>
          人身被害があれば <strong>110 番</strong>
        </li>
        <li>
          <strong>共済・保険</strong>の請求は被害証明書が必要
        </li>
      </ol>
      <p>
        クマのフィールドサインの見分け方は{" "}
        <Link href="/articles/bear-tracks">クマの痕跡を見抜く</Link>
        を参照してください。
      </p>

      <ArticleFaq
        items={[
          {
            q: "電気柵を設置すれば被害はゼロにできますか?",
            a: (
              <>
                適切に設計・維持された電気柵は <strong>9 割以上の被害を防げます</strong>。
                ただし「下草刈り不足で漏電」「入口の電気門の電源切れ」「電圧不足」など運用ミスでゼロにはなりません。
                定期点検が肝要です。
              </>
            ),
            aText:
              "適切に設計・維持された電気柵は9割以上の被害を防げる。下草刈り不足の漏電、電気門の電源切れ、電圧不足など運用ミスでゼロにはならない。定期点検が肝要。",
          },
          {
            q: "電気柵の電圧が下がる原因は?",
            a: "最も多いのは下草が電線に触れて漏電するパターン。次に電池切れ（ソーラーは曇天続きで電力不足）、電線の断線、接続部の腐食。週次のテスター測定で早期発見可能。",
            aText:
              "下草の漏電が最多。電池切れ、電線断線、接続部腐食も。週次のテスター測定で早期発見可能。",
          },
          {
            q: "養蜂の巣箱はどこに設置すれば被害を避けられますか?",
            a: (
              <>
                完全にクマを避けるには、市街地寄り or 標高の低い里山近くを選ぶのが現実的。
                ただし蜜源との兼ね合いもあるため、設置候補地周辺の出没履歴を必ず確認してください。
                <Link href="/place">都道府県別ページ</Link>
                で過去の出没状況が見られます。
              </>
            ),
            aText:
              "市街地寄りや里山近くを選ぶのが現実的。蜜源との兼ね合いもあり、設置候補地周辺の出没履歴の事前確認が必須。",
          },
          {
            q: "クマ被害は農業共済の対象になりますか?",
            a: (
              <>
                品目によります。果樹共済・畑作共済の補償対象になっているケースがあります。
                NOSAI（農業共済組合）に確認してください。
                クマ被害保険一般の解説は{" "}
                <Link href="/articles/bear-insurance">クマ被害保険</Link>
                をご覧ください。
              </>
            ),
            aText:
              "品目による。果樹共済・畑作共済の補償対象になっているケースあり。NOSAIに確認。",
          },
          {
            q: "周辺地域の出没情報を継続的に追うには?",
            a: (
              <>
                <Link href="/">KumaWatch のトップマップ</Link>
                で全国の出没情報を日次更新で表示しています。
                自分の地域については{" "}
                <Link href="/place">都道府県別ページ</Link>
                から市町村単位で確認できます。最新ニュースは{" "}
                <Link href="/research">研究・知見ページ</Link>
                でも随時更新しています。
              </>
            ),
            aText:
              "KumaWatch トップマップで全国の日次更新を表示。地域別は都道府県別ページから市町村単位で確認可能。",
          },
        ]}
      />
    </ArticleShell>
  );
}
