import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("culling-debate")!;

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
        <strong>結論</strong>: クマ駆除は「人身被害の抑止」と「動物の命の倫理」が衝突する論点。
        自治体・猟友会・動物保護団体・住民それぞれの立場を理解し、放獣 vs 殺処分の
        判断基準を整理します。SNS では極端な意見が目立ちますが、現場は常に
        「人を守ること」と「個体群を守ること」のトレードオフで動いています。
      </p>

      <ArticleToc
        items={[
          { id: "background", title: "なぜ駆除が議論になるのか" },
          { id: "stakeholders", title: "関係者の立場と動機" },
          { id: "criteria", title: "放獣 vs 殺処分の判断基準" },
          { id: "process", title: "実際の駆除プロセス" },
          { id: "sns-debate", title: "SNS で起きる論争" },
          { id: "moving-forward", title: "建設的に関わるには" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="background">なぜ駆除が議論になるのか</h2>
      <p>
        近年、クマ出没・人身被害が記録的水準で続き、自治体の駆除件数も急増しています。
        市街地に出てきた「人慣れ個体」を撃つ場面が SNS で拡散され、賛否が大きく分かれる構造に。
      </p>
      <ul>
        <li>「危険なクマは駆除すべき」という被害地住民の声</li>
        <li>「殺さなくても解決できる」という保護派の声</li>
        <li>「現場の判断を尊重して」という自治体・猟友会の声</li>
        <li>「税金で殺さないでほしい」という納税者の声</li>
      </ul>

      <h2 id="stakeholders">関係者の立場と動機</h2>
      <ul>
        <li>
          <strong>自治体 (鳥獣行政担当)</strong>:
          住民の安全 + 個体群保全 + 予算制約のバランス。
          法的には<Link href="/articles/bear-laws">鳥獣保護管理法</Link>に基づき判断。
        </li>
        <li>
          <strong>猟友会・委託業者</strong>:
          現場で実働する側。倫理的な葛藤を抱えながら職務として実行。
          高齢化・担い手不足が深刻。
        </li>
        <li>
          <strong>動物保護団体</strong>:
          安易な駆除への反対声明、放獣の促進、餌場対策の推進。
        </li>
        <li>
          <strong>被害住民</strong>:
          作物被害・人身被害を直接受ける当事者。「いつ襲われるか」の恐怖。
        </li>
        <li>
          <strong>研究者</strong>:
          個体群の長期的維持・地域個体群の絶滅回避を視野に提言。
        </li>
        <li>
          <strong>都市住民・SNS ユーザー</strong>:
          直接の被害を受けない立場から意見が出やすい。
        </li>
      </ul>

      <h2 id="criteria">放獣 vs 殺処分の判断基準</h2>
      <p>
        実際の現場で適用される判断基準には、以下のような要素が含まれます。
      </p>
      <ul>
        <li>
          <strong>放獣優先になりやすい条件</strong>:
          初出没・若い個体・市街地に出ていない・人身事故ゼロ・地域個体群の保護優先度が高い (西日本など)。
        </li>
        <li>
          <strong>殺処分判断になりやすい条件</strong>:
          複数回の市街地出没・人身被害発生・人慣れ個体・捕獲後の攻撃性が高い・放獣後の再来訪。
        </li>
        <li>
          <strong>個体群の状況</strong>:
          東日本・北海道のように個体数が安定している地域では駆除しやすく、
          西日本のように絶滅危惧の地域では放獣を優先。
          <Link href="/articles/western-bears">西日本のツキノワグマ</Link>。
        </li>
      </ul>

      <h2 id="process">実際の駆除プロセス</h2>
      <ol>
        <li>
          <strong>住民・登山者からの目撃通報</strong>:
          110 番、市町村の鳥獣担当課への連絡。
        </li>
        <li>
          <strong>自治体の現地確認</strong>:
          被害状況・個体の特徴・出没頻度を調査。
        </li>
        <li>
          <strong>有害鳥獣捕獲許可の発出</strong>:
          鳥獣保護管理法に基づき、市町村が許可を出す。
        </li>
        <li>
          <strong>猟友会・委託業者の出動</strong>:
          わな (箱罠・くくり罠) の設置 or 追跡駆除。
        </li>
        <li>
          <strong>捕獲後の判断</strong>:
          現場で殺処分するか、放獣するかを基準に応じて決定。
          研究者の調査用に DNA・年齢サンプルを採取することも。
        </li>
        <li>
          <strong>記録・報告</strong>:
          捕獲数・場所・性別を年度報告に反映、次年度の管理計画に。
        </li>
      </ol>

      <h2 id="sns-debate">SNS で起きる論争</h2>
      <ul>
        <li>
          <strong>駆除写真の拡散</strong>:
          殺処分されたクマの写真が SNS に流れ、賛否両極の意見が殺到。
          自治体への抗議電話が業務妨害になる事例も。
        </li>
        <li>
          <strong>「放せばいいのに」論</strong>:
          放獣の現実 (個体管理の困難・再来訪・GPS 装着の限界) を理解しない発言が混じる。
        </li>
        <li>
          <strong>「都会人が口を出すな」論</strong>:
          被害地住民との分断を生む反応。
        </li>
        <li>
          <strong>建設的な議論</strong>:
          餌場対策・電気柵の設置・里山管理の予算化など、駆除以外の選択肢を増やす議論。
        </li>
      </ul>

      <h2 id="moving-forward">建設的に関わるには</h2>
      <ul>
        <li>
          <strong>事実を確認する</strong>:
          自治体の管理計画・年度報告書を読み、個別事案の背景を理解。
        </li>
        <li>
          <strong>予防への投資を支持する</strong>:
          <Link href="/articles/electric-fence">電気柵</Link>、
          <Link href="/articles/home-protection">餌場対策</Link>、
          里山管理の予算は駆除より長期的に効率的。
        </li>
        <li>
          <strong>現場の声を聴く</strong>:
          被害地住民・猟友会・自治体担当の声と、保護団体の声を両方読む。
        </li>
        <li>
          <strong>怒りを自治体への威圧で発散しない</strong>:
          抗議電話・SNS 攻撃は職員の離職を招き、結局住民に跳ね返る。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "なぜ放獣ではなく殺処分するのか?",
            a: (
              <>
                市街地に複数回出没する個体・人身被害を起こした個体は、放獣しても同じエリアに戻るか、
                別の集落で同じ問題を起こす確率が高い。GPS 装着しても全頭管理は不可能で、
                結局「次の被害」を防ぐために殺処分判断になります。判断は地域・個体群の状況で大きく変わります。
              </>
            ),
            aText:
              "市街地に出没する個体や人身被害を起こした個体は、放獣しても戻ったり別の集落で同じ問題を起こす確率が高く、結局殺処分判断になります。",
          },
          {
            q: "クマを「殺さない街」のような取り組みはあるの?",
            a: (
              <>
                里山管理 + 餌場対策 + 電気柵 + 周知教育を重点化し、結果として駆除件数を抑えている自治体はあります。
                ただし完全ゼロは難しく、「殺さない」より「殺さなくて済む環境を作る」方が現実的です。
                取り組みは長野・京都・兵庫などで先進事例あり。
              </>
            ),
            aText:
              "里山管理・餌場対策・電気柵・周知教育の重点化で駆除を抑制している自治体はあります。完全ゼロは困難ですが、長野・京都・兵庫などで先進事例があります。",
          },
          {
            q: "個人として何ができる?",
            a: (
              <>
                家庭の柿・栗・生ゴミの管理 (<Link href="/articles/home-protection">家庭でのクマ対策</Link>)、
                登山時の食料・痕跡管理、自治体への建設的な提案・予算支持、保全活動への寄付などが具体策です。
                クマを「悪者」にしないトーンで広めるのが、長期的には一番効果があります。
              </>
            ),
            aText:
              "家庭の餌場対策・登山時の食料管理・自治体への建設的提案・保全活動への寄付などが個人にできること。クマを悪者にしないトーンで広めるのが長期的に効果的です。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "クマ駆除は人身被害の抑止と個体群保全のトレードオフ。",
          "判断基準は出没頻度・人身被害の有無・個体群の状況など複数の要素。",
          "西日本の絶滅危惧個体群と東日本・北海道の安定個体群では判断が真逆。",
          "SNS 抗議電話は自治体職員の離職を招き、結局住民に跳ね返る。",
          "予防投資 (電気柵・餌場対策) が長期的に最も効率的な選択肢。",
        ]}
        footer="極論ではなく、現場の判断基準と関係者の立場を理解することが、議論を前に進める出発点です。"
      />
    </ArticleShell>
  );
}
