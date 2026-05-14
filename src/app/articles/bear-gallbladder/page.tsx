import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        クマの胆嚢から取れる「<strong>熊胆 (ゆうたん / くまのい)</strong>」は、
        中国・日本・韓国の伝統医学で 2000 年以上前から肝臓病・消化不良・解熱に用いられてきた高価な生薬です。
        有効成分の <strong>ウルソデオキシコール酸 (UDCA)</strong> は現代医療では合成可能になっており、
        熊胆そのものを医療目的で使う必然性は薄れています。
        本記事では獣医薬理学・保全生物学の視点で、熊胆の科学・歴史・密漁問題を整理します。
      </p>

      <ArticleToc
        items={[
          { id: "anatomy", title: "クマの胆嚢 — 解剖と生理" },
          { id: "udca", title: "ウルソデオキシコール酸 (UDCA) とは" },
          { id: "history", title: "熊胆の歴史と伝統医学" },
          { id: "modern", title: "現代医療での代替 — 合成 UDCA" },
          { id: "poaching", title: "密漁・違法取引の現状" },
          { id: "conservation", title: "保全と CITES の規制" },
          { id: "farm-ethics", title: "「クマ農場」の倫理問題" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="anatomy">クマの胆嚢 — 解剖と生理</h2>
      <p>
        胆嚢 (たんのう、gallbladder) は肝臓で作られた胆汁を貯蔵・濃縮する袋状の臓器です。
        クマの胆嚢は人間より大型で、体重比で約 2〜3 倍の容積を持ちます。
        これは食事の不規則さ (一気食い + 長時間の絶食) に対応するため、
        胆汁を大量にプールしておく必要があるからです。
      </p>
      <p>
        胆汁の主成分は<strong>胆汁酸 (bile acids)</strong> で、脂質の消化吸収に重要な役割を果たします。
        クマの胆汁は、人間や他の哺乳類より<strong>ウルソデオキシコール酸 (UDCA) の比率が高い</strong>
        という特徴があります。
      </p>

      <h2 id="udca">ウルソデオキシコール酸 (UDCA) とは</h2>
      <p>
        <strong>ウルソデオキシコール酸 (Ursodeoxycholic acid, UDCA)</strong> は親水性の胆汁酸で、
        他の動物の胆汁にもごく微量含まれますが、クマ (特にツキノワグマ・ヒグマ) の胆汁では
        全胆汁酸の<strong>30〜60%</strong> を占めるという、自然界では極めて特異な高比率を持ちます。
      </p>
      <p>
        UDCA の主な薬理作用は次の通り。
      </p>
      <ul>
        <li>胆汁の流れを改善 (利胆作用)</li>
        <li>胆石の溶解 (コレステロール系胆石)</li>
        <li>肝細胞の保護 (抗炎症・抗アポトーシス)</li>
        <li>免疫調節 (原発性胆汁性胆管炎の進行抑制)</li>
      </ul>
      <p>
        これらの作用は現代医学で薬として確立されており、ウルソ®・チオプロニンなどの製剤が
        肝臓病・胆道疾患の標準治療に使われています。
      </p>

      <h2 id="history">熊胆の歴史と伝統医学</h2>
      <p>
        熊胆の医療利用は<strong>中国の唐代 (7〜10 世紀)</strong> の医書に既に記載があります。
        本草綱目 (16 世紀) では「肝臓病・胃腸病・痙攣・小児疳の虫に効く」と記され、
        日本でも江戸時代から「熊の胆 (くまのい)」として高価で取引されてきました。
      </p>
      <ul>
        <li>日本三大熊胆 (信州熊胆・出羽熊胆・北海道熊胆) の伝統</li>
        <li>1 g あたり 5,000〜数万円の高値で流通する場合も</li>
        <li>奈良の修験道・薬師信仰とも結びつき、宗教的価値も</li>
      </ul>
      <p>
        伝統的な熊胆は、捕獲したクマの胆嚢を取り出して陰干しした「乾燥胆嚢」のことを指します。
        現代の科学的視点では、これに含まれる UDCA が薬理学的に活性を持つ主成分です。
      </p>

      <h2 id="modern">現代医療での代替 — 合成 UDCA</h2>
      <p>
        現在、UDCA は<strong>化学合成で工業的に大量生産</strong>されており、
        熊胆そのものを医療目的で使う必然性はほぼなくなりました。
      </p>
      <ul>
        <li>1955 年に日本で世界初の合成 UDCA が完成 (田辺製薬)</li>
        <li>「ウルソデオキシコール酸 ○○mg」として、世界中の薬局で処方される</li>
        <li>純度・品質・用量が一定で、伝統熊胆より医療上は優位</li>
        <li>原料はウシ・ブタの胆汁を化学変換して製造</li>
      </ul>
      <p>
        日本では UDCA を主成分とする「ウルソ®」が肝機能改善薬として保険適用され、
        胆石症・原発性胆汁性胆管炎・C 型肝炎の補助治療などで標準的に処方されています。
      </p>

      <h2 id="poaching">密漁・違法取引の現状</h2>
      <p>
        合成 UDCA が普及してもなお、東アジアでは伝統的な「天然熊胆」への需要が残っており、
        密漁・違法取引の対象となっています。
      </p>
      <ul>
        <li>
          <strong>日本国内</strong>: ツキノワグマの密猟事案で、肉と胆嚢の双方が違法取引されるケースが今もある。
          鳥獣保護法・狩猟法違反として摘発が続く
        </li>
        <li>
          <strong>中国・韓国</strong>: 過去には大規模な「クマ農場 (bear farm)」が存在し、
          生きたクマから胆汁を採取するカテーテル飼育が行われていた (一部は現在も)
        </li>
        <li>
          <strong>東南アジア</strong>: 観光客向けの密売市場で「ベアバイル (bear bile) 製品」が出回る
        </li>
      </ul>
      <p>
        これらの取引は<strong>絶滅危惧種国際取引規制 (CITES)</strong> に違反し、
        日本でも持ち込みは厳しく取り締まられています。
      </p>

      <h2 id="conservation">保全と CITES の規制</h2>
      <p>
        ヒグマは<strong>CITES 附属書 II</strong>、ツキノワグマ (一部地域個体群) は<strong>附属書 I</strong>
        に掲載されており、国際取引が規制されています。
      </p>
      <ul>
        <li>附属書 I: 国際取引を原則禁止 (絶滅の恐れが最も高い)</li>
        <li>附属書 II: 国際取引には輸出国の許可が必要</li>
        <li>胆嚢・骨・皮など、クマ由来製品全般が規制対象</li>
        <li>日本に持ち込む際は税関で証明書の提示が必要</li>
      </ul>
      <p>
        観光地で「クマ製品 (熊胆・骨・皮)」を見かけても安易に購入しないこと。
        違法取引の温床になります。
      </p>

      <h2 id="farm-ethics">「クマ農場」の倫理問題</h2>
      <p>
        中国・ベトナム・ラオスなどでは、生きたクマから胆汁を採取する
        <strong>「クマ農場 (bear bile farming)」</strong>が問題視されています。
      </p>
      <ul>
        <li>狭い檻に長期間閉じ込め、腹部に金属カテーテルを留置して胆汁を継続採取</li>
        <li>感染症・腹膜炎・肝臓障害などで多くの個体が苦しむ</li>
        <li>世界動物保護団体 (Animals Asia, World Animal Protection 等) が長年廃絶運動を展開</li>
        <li>2010 年代以降、中国の一部・ベトナムでは段階的廃止が進む</li>
      </ul>
      <p>
        現代医学の合成 UDCA で代替可能であることが広く認知されることが、
        この産業を廃絶する最大の力となります。
        獣医工学ラボの基本姿勢としても、熊胆需要を抑え、合成医薬品への移行を支持する立場です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "ウルソ® (人間用) は熊胆と同じ効果なの？",
            a: "有効成分の UDCA は同じです。むしろ製剤化されたウルソ®の方が用量・純度が一定で、医療上は熊胆より優れます。",
            aText: "有効成分の UDCA は同じです。むしろ製剤化されたウルソ®の方が用量・純度が一定で、医療上は熊胆より優れます。",
          },
          {
            q: "祖父母の家にあった古い熊胆を売るのは違法？",
            a: "国内取引でも鳥獣保護法・薬機法に抵触する可能性があります。販売・譲渡は避け、保管したい場合は専門家 (博物館・大学) に相談を。",
            aText: "国内取引でも鳥獣保護法・薬機法に抵触する可能性があります。販売・譲渡は避け、保管したい場合は専門家 (博物館・大学) に相談を。",
          },
          {
            q: "他の動物 (ウシ・ブタ) の胆汁にも UDCA は含まれる？",
            a: "微量に含まれています。ウシの胆汁を原料に化学変換して工業的 UDCA を製造するのが標準的な合成プロセスです。",
            aText: "微量に含まれています。ウシの胆汁を原料に化学変換して工業的 UDCA を製造するのが標準的な合成プロセスです。",
          },
          {
            q: "なぜクマだけ UDCA が多いの？",
            a: "進化的な理由は完全には解明されていません。冬眠中に胆汁が長期間貯留しても胆石・胆嚢炎を起こさないよう、肝細胞保護作用の強い UDCA が選択されたという仮説が有力です。",
            aText: "進化的な理由は完全には解明されていません。冬眠中に胆汁が長期間貯留しても胆石・胆嚢炎を起こさないよう、肝細胞保護作用の強い UDCA が選択されたという仮説が有力です。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-laws">クマと法律 — 駆除・所有・狩猟</Link> /{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/bear-fat-metabolism">クマの脂肪蓄積メカニズム</Link>
      </p>
    </ArticleShell>
  );
}
