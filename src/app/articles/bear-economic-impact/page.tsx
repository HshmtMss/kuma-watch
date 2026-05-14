import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-economic-impact")!;

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
        クマ被害の経済損失は近年急増しており、農作物・林産物・人身被害の直接損失だけで
        <strong>年間 100 億円規模</strong>に達すると推計されています。
        加えて、観光業の機会損失・自治体の対策費・救急医療コストを含めた間接コストはその数倍。
        本記事では、農業・観光・自治体財政の 3 つの視点でクマ被害の経済影響を整理します。
      </p>

      <ArticleToc
        items={[
          { id: "overview", title: "全体像 — 直接損失と間接コスト" },
          { id: "agriculture", title: "農業被害 — 作物・果樹・畜産" },
          { id: "tourism", title: "観光業への影響" },
          { id: "municipal", title: "自治体財政への影響" },
          { id: "personal", title: "個人・家庭への波及" },
          { id: "long-term", title: "長期的な構造変化" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">全体像 — 直接損失と間接コスト</h2>
      <p>
        環境省・農林水産省・各都道府県の統計を総合すると、
        2024〜2025 年度の野生鳥獣による農作物被害額は<strong>全国で 150〜170 億円</strong>。
        うちクマによる被害は推計 10〜15%、<strong>15〜25 億円</strong>。
        これに林産物 (養蜂・栽培きのこ・植林苗) 被害、家屋・自動車被害、人身事故の医療・救助コストを加えると、
        <strong>直接損失だけで年間 50〜80 億円</strong>と推計されます。
      </p>
      <p>
        間接コスト (観光業の損失・自治体対策費・社会的コスト) を含めると、
        年間で<strong>数百億〜1,000 億円規模</strong>の経済影響があると専門家から指摘されています。
      </p>
      <p className="text-xs text-stone-500">
        ※ 上記数値は環境省「クマ類による人身被害」公表値、農林水産省「野生鳥獣による農作物被害状況」、
        及び各種自治体公表資料からの集計・推計です。最新の正確な数字は各官公庁の公表値をご確認ください。
      </p>

      <h2 id="agriculture">農業被害 — 作物・果樹・畜産</h2>
      <p>
        クマによる農業被害には、いくつか特徴があります。
      </p>
      <ul>
        <li>
          <strong>果樹</strong>: リンゴ・モモ・カキ・サクランボなど高単価作物への直撃。
          1 本の木で年間 20〜30 万円の損失となる場合も。
        </li>
        <li>
          <strong>トウモロコシ・スイートコーン</strong>: 北海道・東北で被害甚大。
          1 シーズンで 1 ha 全滅する事例も。
        </li>
        <li>
          <strong>果樹・蜜柑系</strong>: 西日本のミカン園・カキ園での被害が増加傾向。
        </li>
        <li>
          <strong>養蜂・養殖</strong>: 蜂蜜の巣箱破壊・養魚場侵入。一夜で全滅するため衝撃が大きい。
        </li>
        <li>
          <strong>畜産</strong>: 子牛・羊・鶏舎襲撃。発生頻度は低いが、被害額は 1 件で大きい。
        </li>
      </ul>
      <p>
        農家側のコストは、直接の収穫物喪失だけでなく、
        <strong>電気柵設置・維持費 (年間 10〜30 万円/ha)、見回り労働力、心理的負担</strong>
        まで含めると数倍に膨らみます。
      </p>

      <h2 id="tourism">観光業への影響</h2>
      <p>
        観光地でクマ出没ニュースが流れると、即座に予約キャンセル・客足減少が発生します。
        定量的に観察される影響は次の通り。
      </p>
      <ul>
        <li>
          <strong>登山道閉鎖</strong>: 主要登山口で 1 週間閉鎖されると、
          山小屋・登山ガイド・ロープウェイ・周辺宿泊施設の合計売上が数千万円規模で消失
        </li>
        <li>
          <strong>キャンプ場の予約キャンセル</strong>: 連休前の出没報道で 20〜40% のキャンセル率
        </li>
        <li>
          <strong>イメージ毀損</strong>: 「○○山はクマが出る」のレピュテーション悪化は、
          1〜2 シーズン以上にわたって持続することも
        </li>
        <li>
          <strong>農村観光 (グリーンツーリズム) への影響</strong>: 体験型・果樹園・農家民宿への波及
        </li>
      </ul>
      <p>
        ただし、適切な情報発信と対策の見える化 (たとえば「クマ警戒レベル○○」を観光協会が公開) があれば、
        過剰な忌避を抑え、観光業のダメージは縮小できることが、海外 (米国・カナダの国立公園) の事例から分かっています。
      </p>

      <h2 id="municipal">自治体財政への影響</h2>
      <p>
        市町村レベルでは、クマ対策に毎年次の費目で支出が発生します。
      </p>
      <ul>
        <li>
          <strong>駆除・捕獲委託費</strong>: 猟友会への委託料、罠の設置・撤去、麻酔処置等。
          1 頭あたり数万〜数十万円
        </li>
        <li>
          <strong>電気柵設置補助</strong>: 農家への 1/2 補助が一般的。1 件 20〜50 万円
        </li>
        <li>
          <strong>追い払い・パトロール人件費</strong>: 専従の鳥獣対策員、ICT 監視機器の保守
        </li>
        <li>
          <strong>人身被害見舞金</strong>: 自治体独自の制度で 5〜30 万円
        </li>
        <li>
          <strong>啓発・看板・広報</strong>: 防災無線整備、啓発チラシ・看板設置
        </li>
      </ul>
      <p>
        被害多発地域 (秋田・岩手・福島・新潟・長野・北海道など) の中規模自治体では、
        年間 <strong>数千万〜数億円</strong>規模のクマ対策予算が組まれています。
        2024 年以降「指定管理鳥獣」化に伴って国庫補助が拡充されつつあるものの、
        自治体側の自己負担は依然大きい状況です。
      </p>

      <h2 id="personal">個人・家庭への波及</h2>
      <p>
        個人の家計レベルでも、影響は表面化しています。
      </p>
      <ul>
        <li>
          家庭菜園・果樹の自衛コスト (電気柵・ネット): 数万〜十数万円
        </li>
        <li>
          通学路安全のための保護者見送り・スクールバス導入: 時間・費用の負担
        </li>
        <li>
          地域コミュニティ活動・登山サークルの自粛
        </li>
        <li>
          人身被害遺族・後遺症のある被害者の長期的経済負担
        </li>
      </ul>

      <h2 id="long-term">長期的な構造変化</h2>
      <p>
        クマ被害の経済損失は、単年度の被害額だけでは捉えきれません。
        中長期で次のような構造変化を加速させています。
      </p>
      <ul>
        <li>
          <strong>農地の放棄・耕作放棄</strong>: 高齢化と被害が重なり離農を促進。
          結果として「人がいない緩衝地帯」が広がり、さらにクマが市街地に降りやすくなる悪循環
        </li>
        <li>
          <strong>山間部の人口流出</strong>: 子育て世帯の流出加速
        </li>
        <li>
          <strong>地域経済の縮小</strong>: 観光・農業・林業の同時打撃が地域 GDP を抑制
        </li>
        <li>
          <strong>対策技術への投資加速</strong>: AI 検知・ドローン・電気柵高度化など、
          関連産業の成長 (一部の地域には経済機会としての側面も)
        </li>
      </ul>
      <p>
        被害コストを「失われる側」だけでなく「対策市場として再分配される側」も含めて見ることで、
        地域経済への影響の全体像が見えてきます。
        KumaWatch も含めて、クマ対策ソリューションの普及がこの構造に貢献することが、
        運営側 (獣医工学ラボ) の長期目標です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "クマ被害額の統計はどこで見られる？",
            a: "農林水産省「野生鳥獣による農作物被害状況」(都道府県別・獣種別)、環境省「クマ類による人身被害について」(月次速報) が一次資料。各都道府県の鳥獣保護課サイトもチェック。",
            aText: "農林水産省「野生鳥獣による農作物被害状況」(都道府県別・獣種別)、環境省「クマ類による人身被害について」(月次速報) が一次資料。各都道府県の鳥獣保護課サイトもチェック。",
          },
          {
            q: "海外 (北米) と比較して日本のクマ被害コストは大きい？",
            a: "人身被害件数は北米より日本のほうが多い (人口密度・地形が原因)。一方で農業被害は北米のほうが規模が大きい (大規模農業のため)。GDP 比でみると日本のクマ被害コストは無視できないレベル。",
            aText: "人身被害件数は北米より日本のほうが多い (人口密度・地形が原因)。一方で農業被害は北米のほうが規模が大きい (大規模農業のため)。GDP 比でみると日本のクマ被害コストは無視できないレベル。",
          },
          {
            q: "保険会社・損保業界はどう対応している？",
            a: "山岳保険・農業共済・損害保険の特約整備が進んでいます。詳しくは「クマ被害は保険でカバーされる？」を参照。",
            aText: "山岳保険・農業共済・損害保険の特約整備が進んでいます。詳しくは「クマ被害は保険でカバーされる？」を参照。",
          },
          {
            q: "クマ対策投資の費用対効果 (B/C) は？",
            a: "電気柵で農業被害は平均 60〜80% 削減と報告される一方、ICT 検知や追い払いは地域条件で大きく変動。費用対効果は 1〜5 倍と幅広く、複数対策の組み合わせが推奨されています。",
            aText: "電気柵で農業被害は平均 60〜80% 削減と報告される一方、ICT 検知や追い払いは地域条件で大きく変動。費用対効果は 1〜5 倍と幅広く、複数対策の組み合わせが推奨されています。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/electric-fence">電気柵の効果と補助金</Link> /{" "}
        <Link href="/articles/culling-debate">クマの駆除・賛否・倫理</Link> /{" "}
        <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link>
      </p>
    </ArticleShell>
  );
}
