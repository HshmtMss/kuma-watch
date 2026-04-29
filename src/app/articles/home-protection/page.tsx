import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("home-protection")!;

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
        <strong>結論</strong>: クマを呼び寄せる最大の要因は、人里にある「<strong>餌場</strong>」。
        柿・栗・果樹園・生ゴミ・コンポスト・ペットフード — 匂いの強い食料を放置すると、クマの目当てになります。
        家庭でできる対策は意外とシンプルで、5 つの習慣を変えるだけで集落全体のリスクが大きく下がります。
      </p>

      <ArticleToc
        items={[
          { id: "concept", title: "「餌場」の概念" },
          { id: "fruit-trees", title: "柿・栗・果樹の管理" },
          { id: "garbage", title: "生ゴミ・コンポスト" },
          { id: "pet-food", title: "ペットフード・飼料" },
          { id: "fence", title: "電気柵による隔離" },
          { id: "kids", title: "通学路・子供の安全" },
          { id: "community", title: "集落全体での取り組み" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="concept">「餌場」の概念</h2>
      <p>
        クマは食料の匂いに極めて敏感です。
        鼻の感覚は犬の数倍とされ、5km 以上先の匂いを察知するという研究もあります。
        そして一度でも食料を得た場所はそのクマの記憶にしっかり残り、定期的に巡回してくる「餌場」になります。
      </p>
      <p>
        さらに恐ろしいのは、<strong>母グマの行動を子グマが覚えること</strong>。
        人里の餌場を世代を超えて利用するクマの系統 (人里依存型) ができあがってしまいます。
      </p>

      <h2 id="fruit-trees">柿・栗・果樹の管理</h2>
      <p>
        集落のクマ出没の最も典型的な誘引源は柿の木です。秋に熟した柿が落ちて発酵し、強い甘い匂いがクマを引き寄せます。
      </p>
      <ul>
        <li>
          <strong>収穫しない柿の木は伐採する</strong>:
          高齢化で収穫できない場合、思い切って木自体を切ることが最も効果的
        </li>
        <li>
          <strong>収穫期に毎日落柿を回収</strong>:
          落ちた果実をその日のうちに処分。発酵させない
        </li>
        <li>
          <strong>果樹園は電気柵で囲う</strong>:
          りんご・梨など商業果樹園は電気柵 (3,000V 以上) が標準対策
        </li>
        <li>
          <strong>栗・クルミの放置林</strong>:
          所有者不明の山栗林もクマを呼ぶ。自治体と相談して管理を
        </li>
      </ul>

      <h2 id="garbage">生ゴミ・コンポスト</h2>
      <p>
        家庭ゴミの匂いは予想以上にクマを引き寄せます。
      </p>
      <ul>
        <li>
          <strong>生ゴミは収集日の朝に出す</strong>:
          前夜に出すのは絶対 NG
        </li>
        <li>
          <strong>ゴミ捨て場は密閉式・金属製</strong>:
          木製の囲いはクマが破壊する
        </li>
        <li>
          <strong>コンポストは密閉式・電気式に</strong>:
          開放型のコンポスト・堆肥場は強烈な誘引源。発酵途中の生ゴミは特に匂う
        </li>
        <li>
          <strong>BBQ の残飯・油は持ち帰る</strong>:
          屋外の焼き網・ピザ窯・グリルは焼いた肉の匂いが残る
        </li>
      </ul>

      <h2 id="pet-food">ペットフード・飼料</h2>
      <p>
        意外と見落とされがちなのが、ペット・家畜の餌です。
      </p>
      <ul>
        <li>犬・猫の餌は屋内で管理。屋外の餌皿に残飯を放置しない</li>
        <li>鶏・ヤギ・ヒツジの飼料は密閉容器・倉庫で保管</li>
        <li>養蜂の巣箱は電気柵で囲う (蜂蜜はクマの大好物)</li>
        <li>豚・ヤギの糞尿も匂いの誘因になりうる。離隔距離を取る</li>
      </ul>

      <h2 id="fence">電気柵による隔離</h2>
      <p>
        最も確実な物理的対策は電気柵です。
        家庭菜園・果樹園・養蜂場・養鶏場などをぐるりと囲い、クマが触ると 3,000〜5,000V のショックを受ける仕組み。
      </p>
      <ul>
        <li>高さは下端 20cm、上端 1m〜1.2m を目安</li>
        <li>電線は 3〜4 段</li>
        <li>ソーラー式・電池式が保守しやすい</li>
        <li>除草を怠ると漏電するので定期的なメンテが必須</li>
        <li>自治体によっては設置補助金あり</li>
      </ul>

      <h2 id="kids">通学路・子供の安全</h2>
      <p>
        近年は集落・住宅地・通学路でのクマ出没が増えており、特に子供の安全確保は重要です。
      </p>
      <ul>
        <li>朝夕の薄暗い時間帯は集団登下校</li>
        <li>子供にもクマ鈴・ホイッスルを携帯させる</li>
        <li>クマの目撃情報を学校・PTA で即時共有</li>
        <li>校内・公園の植え込みは見通しの良い高さに刈り込む</li>
        <li>遭遇時の対処を家庭で繰り返し教える (詳細は <Link href="/articles/encounter">クマに遭遇したらどうする</Link>)</li>
      </ul>

      <h2 id="community">集落全体での取り組み</h2>
      <p>
        個別世帯の努力だけでは限界があり、集落・自治体単位の連携が効果を生みます。
      </p>
      <ul>
        <li>放任果樹の伐採を自治会で組織的に進める</li>
        <li>緩衝帯 (集落と山の境界) の薮刈りを年 1〜2 回実施</li>
        <li>目撃情報の共有 (回覧板・LINE グループ・SNS)</li>
        <li>狩猟組合と連携して個体数管理</li>
        <li>自治体の鳥獣対策窓口と定期的に情報交換</li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "電気柵は本当に効果ある?",
            a: (
              <>
                正しく設置・維持されていれば 90% 以上の侵入防止効果があります。失敗の多くは「除草不足で漏電」「電圧が低い」「下端の隙間が大きい」など設置・保守の問題です。設置時は専門業者・自治体相談が確実です。
              </>
            ),
            aText:
              "正しく設置・維持されていれば 90% 以上の侵入防止効果があります。失敗の多くは除草不足で漏電・電圧が低い・下端の隙間が大きいなど設置・保守の問題です。",
          },
          {
            q: "柿の木を切るのは抵抗がある…",
            a: (
              <>
                家族の歴史や思い入れがある木を切るのは確かに辛い決断です。代替策として「毎日落柿を回収」「電気柵で囲う」「収穫を地域団体に委託」などもあります。ただし高齢で管理できない場合は、伐採が地域全体の安全に最も寄与します。
              </>
            ),
            aText:
              "家族の歴史や思い入れがある木を切るのは確かに辛い決断です。代替策として毎日落柿を回収・電気柵で囲う・収穫を地域団体に委託 などもあります。ただし高齢で管理できない場合は、伐採が地域全体の安全に最も寄与します。",
          },
          {
            q: "生ゴミを夜に出すのが地域のルールなのだが…",
            a: (
              <>
                自治体・自治会に問題提起してルール変更を求めるべきです。クマ出没が報告されている地域では「収集日の朝に出す」が標準ルールに変わりつつあります。一世帯の対策では限界があるので地域全体で動くのが効果的です。
              </>
            ),
            aText:
              "自治体・自治会に問題提起してルール変更を求めるべきです。クマ出没が報告されている地域では収集日の朝に出すが標準ルールに変わりつつあります。",
          },
          {
            q: "クマに会わないために家の周りに何を置けば良い?",
            a: (
              <>
                忌避剤として木酢液・人毛・ハバネロ系スプレーなど色々売られていますが、効果は限定的・短期的です。最も効果的なのは「餌場をなくす」こと。匂いの管理に集中するのが結局一番です。
              </>
            ),
            aText:
              "忌避剤として木酢液・人毛・ハバネロ系スプレーなど色々売られていますが、効果は限定的・短期的です。最も効果的なのは餌場をなくすこと。匂いの管理に集中するのが結局一番です。",
          },
        ]}
      />
    </ArticleShell>
  );
}
