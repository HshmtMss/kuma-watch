import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-gallbladder")!;

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
        クマの胆嚢を乾燥させた「<strong>熊胆 (ゆうたん / くまのい)</strong>」は、
        中国や日本などの伝統医学で古くから使われてきた生薬です。
        主な成分の一つである <strong>ウルソデオキシコール酸 (UDCA)</strong> は日本で熊胆から見つかり、
        いまは化学合成した医薬品として使われています。
        本記事では獣医薬理学・保全生物学の視点で、熊胆の科学・歴史・取引の問題を整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            <strong>「熊胆」はクマの胆嚢を乾燥させた生薬</strong>。古くから伝統医学で使われてきた。
          </>,
          <>
            成分の<strong>UDCAは合成した医薬品があり</strong>、肝臓・胆道の病気の治療に使われている。
          </>,
          <>
            ツキノワグマは<strong>ワシントン条約の附属書 I</strong>。熊胆を求める密猟・違法取引が保全上の問題になっている。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "anatomy", title: "クマの胆嚢と胆汁" },
          { id: "udca", title: "ウルソデオキシコール酸 (UDCA) とは" },
          { id: "history", title: "熊胆の歴史と伝統医学" },
          { id: "modern", title: "現代医療での代替 — 合成 UDCA" },
          { id: "poaching", title: "密猟・違法取引の問題" },
          { id: "conservation", title: "ワシントン条約と国内の法律" },
          { id: "farm-ethics", title: "「クマ農場」の倫理問題" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="anatomy">クマの胆嚢と胆汁</h2>
      <p>
        胆嚢 (たんのう、gallbladder) は、肝臓で作られた胆汁をためて濃くする袋状の臓器です。
        胆汁の主な成分は<strong>胆汁酸 (bile acids)</strong> で、脂肪の消化・吸収を助けます。
        クマの胆汁は、人や多くの哺乳類と比べて<strong>ウルソデオキシコール酸 (UDCA) の割合が高い</strong>
        という特徴があります。
      </p>

      <h2 id="udca">ウルソデオキシコール酸 (UDCA) とは</h2>
      <p>
        <strong>ウルソデオキシコール酸 (Ursodeoxycholic acid, UDCA)</strong> は胆汁酸の一種です。
        人の胆汁にも少量含まれますが、クマの胆汁には多く含まれます。
        名前の「ウルソ」は、クマを意味するラテン語 (ursus) に由来します。
      </p>
      <p>
        UDCA は医薬品として、次のような目的で使われています。
      </p>
      <ul>
        <li>胆汁の流れをよくする (利胆作用)</li>
        <li>コレステロール系の胆石を溶かす</li>
        <li>慢性の肝臓病で肝機能を改善する</li>
        <li>原発性胆汁性胆管炎 (PBC) の治療</li>
      </ul>

      <h2 id="history">熊胆の歴史と伝統医学</h2>
      <p>
        熊胆は中国の伝統医学で古くから使われ、唐の時代の本草書にも記載があるとされます。
        日本でも「熊の胆 (くまのい)」として、胃腸の薬などに用いられ、高価で取引されてきました。
      </p>
      <p>
        伝統的な熊胆は、捕獲したクマの胆嚢を取り出して乾燥させたものです。
        現代の科学では、これに含まれる UDCA が薬としての働きを持つ主な成分の一つと考えられています。
      </p>

      <h2 id="modern">現代医療での代替 — 合成 UDCA</h2>
      <p>
        UDCA は日本の研究者によって熊胆から見つけ出され、化学合成の方法も日本で確立されました。
      </p>
      <ul>
        <li>1927 年、正田 雅人が熊胆から UDCA を結晶として取り出し、命名</li>
        <li>1950 年代に化学合成が実現し、東京田辺製薬 (当時) が「ウルソ」として販売</li>
        <li>現在は、主にウシの胆汁に含まれる胆汁酸を原料に工業的に作られている</li>
        <li>品質と用量が一定の医薬品として、医師の処方で使われる</li>
      </ul>
      <p>
        日本では UDCA を成分とする医薬品が、胆石の溶解や慢性肝疾患、原発性胆汁性胆管炎などの治療に使われています。
      </p>

      <h2 id="poaching">密猟・違法取引の問題</h2>
      <p>
        合成 UDCA が普及した今も、アジアでは「天然の熊胆」への需要が残っており、
        クマの密猟や違法取引の動機の一つになっていると指摘されています。
      </p>
      <ul>
        <li>
          <strong>日本国内</strong>: 熊胆が高値で取引されることが、クマの密猟の動機になりうると指摘されています。
          許可なくクマを捕獲すれば、鳥獣保護管理法違反になります
        </li>
        <li>
          <strong>アジア各地</strong>: 生きたクマから胆汁を採る「クマ農場 (bear bile farm)」があり、
          胆汁製品の流通が問題になっています (後述)
        </li>
      </ul>

      <h2 id="conservation">ワシントン条約と国内の法律</h2>
      <p>
        クマ類の国際取引は、<strong>ワシントン条約 (CITES)</strong> で規制されています。
      </p>
      <ul>
        <li>
          ツキノワグマ (アジアクロクマ) は<strong>附属書 I</strong>: 商業目的の国際取引は原則禁止
        </li>
        <li>
          ヒグマは<strong>附属書 II</strong> (ブータン・中国・メキシコ・モンゴルの個体群は附属書 I): 国際取引には輸出国の許可などが必要
        </li>
        <li>熊胆などクマ由来の製品も対象になるため、海外で買って日本に持ち込むことはできないと考えてください</li>
      </ul>
      <p>
        国内では、種の保存法でツキノワグマ (アジアクロクマ) やヒグマなどが「国際希少野生動植物種」に指定されています。
        ただし、同法で売買などが規制されるクマ類の器官・加工品は<strong>毛・皮とその製品</strong>で、胆嚢は含まれていません。
        一方、熊胆は日本薬局方に載っている生薬で、<strong>医薬品として販売するには医薬品医療機器等法 (薬機法) の許可が必要</strong>です。
      </p>
      <p>
        旅行先などで熊胆やクマ由来の製品を見かけても、安易に購入しないでください。
      </p>

      <h2 id="farm-ethics">「クマ農場」の倫理問題</h2>
      <p>
        中国・ベトナムなどでは、生きたクマから胆汁を採る
        <strong>「クマ農場 (bear bile farming)」</strong>が動物福祉の面から問題視されてきました。
      </p>
      <ul>
        <li>狭い檻で長く飼育し、体に管を入れるなどして胆汁を繰り返し採取する</li>
        <li>感染症や肝臓の障害など、クマの健康を損なうことが指摘されている</li>
        <li>Animals Asia、World Animal Protection などの動物保護団体が長年廃止を求めてきた</li>
        <li>ベトナムは 2005 年に胆汁の採取を法律で禁止し、飼育されるクマは大きく減った。韓国は 2026 年 1 月からクマの飼育と胆汁の採取を禁止した</li>
      </ul>
      <p>
        UDCA は合成した医薬品で手に入ることが広く知られることも、熊胆への需要を減らす力になります。
        獣医工学ラボとしても、熊胆への需要を抑え、合成医薬品への移行を支持する立場です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "ウルソ® (人間用) は熊胆と同じ効果なの？",
            a: "ウルソ®の成分は、熊胆に含まれる成分の一つである UDCA です。熊胆には他の成分も含まれるため完全に同じではありませんが、医薬品は品質と用量が一定で、医師の判断で使われます。",
            aText: "ウルソ®の成分は、熊胆に含まれる成分の一つである UDCA です。熊胆には他の成分も含まれるため完全に同じではありませんが、医薬品は品質と用量が一定で、医師の判断で使われます。",
          },
          {
            q: "祖父母の家にあった古い熊胆を売るのは違法？",
            a: "熊胆は日本薬局方に載っている生薬で、医薬品として販売するには薬機法の許可が必要です。個人での販売・譲渡は避け、扱いに迷う場合は都道府県の薬務担当窓口に相談してください。",
            aText: "熊胆は日本薬局方に載っている生薬で、医薬品として販売するには薬機法の許可が必要です。個人での販売・譲渡は避け、扱いに迷う場合は都道府県の薬務担当窓口に相談してください。",
          },
          {
            q: "他の動物 (ウシ・ブタ) の胆汁にも UDCA は含まれる？",
            a: "多くの動物では少量です。医薬品の UDCA は、主にウシの胆汁に含まれる胆汁酸を原料に化学的に作られています。",
            aText: "多くの動物では少量です。医薬品の UDCA は、主にウシの胆汁に含まれる胆汁酸を原料に化学的に作られています。",
          },
          {
            q: "なぜクマだけ UDCA が多いの？",
            a: "はっきりした理由はまだ分かっていません。冬眠と関係があるのではないかという見方もありますが、確かめられてはいません。",
            aText: "はっきりした理由はまだ分かっていません。冬眠と関係があるのではないかという見方もありますが、確かめられてはいません。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-laws">クマと法律 — 駆除・所有・狩猟</Link> /{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/bear-fat-metabolism">クマの脂肪蓄積メカニズム</Link>
      </p>
    </ArticleShell>
  );
}
