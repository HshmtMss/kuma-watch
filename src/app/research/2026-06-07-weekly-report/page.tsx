// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月31日〜2026年6月7日 / mode: weekly-report / 生成日: 2026-06-08
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-07-weekly-report";
const TITLE = "2026年5月31日〜2026年6月7日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年5月31日から6月7日にかけて、国内のクマ出没報告は158件に達した。新潟県で46件と突出して多く、栃木県、岩手県が続く。群馬県ではJR線で列車とクマが衝突する事故が発生し、岩手県盛岡市など都市部での目撃も頻発。人間社会との軋轢が深刻化している状況が浮き彫りとなった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-08",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-06-08",
  dateModified: "2026-06-08",
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  mainEntityOfPage: `${SITE_URL}/research/${SLUG}`,
};

const REFERENCES: { title: string; url: string; site?: string }[] = [
    {
      "title": "クマの目撃相次ぐ　秋田市の民家敷地内や公園、五城目町の町道",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE4ycGVYQW9aVHVZbG03TkVhbFFCRzloeEdIRDlMNzdoZWNPLXNKLVBmV0U4S3VVVWdiaVExQnVNdjB6RWJxMVBBc2dGcw?oc=5",
      "site": "秋田魁新報"
    },
    {
      "title": "渡良瀬遊水地でクマ目撃情報　野木町、注意呼びかけ",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBRYXNyS3JQdFNKNGxFWFpLc1MtaUxlWF9LQ3NoU3NISUI4SV8yQzN2Ml9wSUJ1ckNpandCS19RcF83X01waDV0UHJmcHliNzdVNXRfbzVheUYtdw?oc=5",
      "site": "下野新聞 SOON"
    },
    {
      "title": "クマ目撃情報（小山市、野木町）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356149",
      "site": "下野新聞 SOON"
    },
    {
      "title": "クマ目撃情報（那須塩原市）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356516",
      "site": "下野新聞 SOON"
    },
    {
      "title": "クマ目撃情報（佐野市）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356703",
      "site": "下野新聞 SOON"
    },
    {
      "title": "クマ目撃情報（宇都宮市）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356947",
      "site": "下野新聞 SOON"
    }
  ];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          週次レポート
        </span>
        <span>対象期間: 2026年5月31日〜2026年6月7日</span>
        <span>·</span>
        <span>公開: 2026-06-08</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":294},{"pref":"北海道","count":103},{"pref":"福島県","count":66},{"pref":"新潟県","count":42},{"pref":"島根県","count":28},{"pref":"石川県","count":24},{"pref":"群馬県","count":23},{"pref":"栃木県","count":21},{"pref":"富山県","count":19},{"pref":"岩手県","count":16},{"pref":"山口県","count":11},{"pref":"山梨県","count":11},{"pref":"鳥取県","count":5},{"pref":"埼玉県","count":4},{"pref":"静岡県","count":4},{"pref":"岡山県","count":4},{"pref":"三重県","count":3},{"pref":"東京都","count":2},{"pref":"長野県","count":2},{"pref":"滋賀県","count":1},{"pref":"青森県","count":1}]}
        total={684}
        periodLabel={"2026年6月1日〜2026年6月7日"}
      />

      <p>本レポートは、2026年5月31日から6月7日までの7日間にKumaWatchが収集した国内のクマ出没事案を分析・総括するものである。この期間に確認された総件数は158件に上り、全国的にクマの活動が活発な状態が続いていることが確認された。特に新潟県での出没が46件と全体の約3割を占め、突出して多い。これに栃木県（23件）、岩手県（19件）、島根県（18件）、富山県（17件）、群馬県（16件）が続き、これら上位6県で全体の86%を占める地域的な集中が見られた。情報源の内訳としては、自治体等が公開するマップ情報が多数を占め、報道機関が報じた事案は3件に留まった。期間中、人身被害につながる可能性のある事案が1件、都市部での出没が9件、捕獲・銃猟関連が1件報告されており、市民生活への影響が懸念される状況である。</p>
      <h2>主要トピック</h2>
      <h3>1. 新潟県における出没の激化と広域化</h3>
      <p>期間中、新潟県では全国最多となる46件の出没情報が報告された。その内容は目撃だけでなく、足跡や糞といった痕跡の発見も多数含まれている。具体的には、長岡市柿町でクマのものと思われる糞が発見された（5月31日）ほか、南魚沼市君帰（5月31日）や村上市仲間町（5月31日）では畑で足跡が確認されるなど、農地への侵入が相次いだ。これらの痕跡情報は、クマが人里近くのエリアを日常的に行動圏としていることを示唆している。さらに、十日町市南鐙坂では小学校体育館裏の農地でクマ1頭が目撃されており（6月7日）、教育施設の周辺にまで接近している実態が明らかになった。県内全域で確認される広範な出没は、地域住民の警戒レベルを一段と引き上げる必要があることを示している。</p>
      <h3>2. 関東地方における平野部への接近とインフラへの影響</h3>
      <p>栃木県（23件）、群馬県（16件）、埼玉県（5件）といった関東地方でも出没が多発し、特にこれまで比較的安全とされてきた平野部や都市近郊への接近が目立った。栃木県野木町の渡良瀬遊水地付近での目撃情報（6月4日）は、大規模な河川敷がクマの移動経路や潜伏場所として利用されている可能性を示している（※2）。群馬県では、前橋市の市街地に近い「からっ風街道」で道路を横断する個体が目撃された（6月1日）。中でも深刻な事案として、東吾妻町のJR吾妻線で発生した列車とクマの衝突事故（6月4日）が挙げられる。この事故ではクマ1頭が死亡し、もう1頭が山林へ逃走したと報告されており、鉄道という公共交通機関の安全運行に直接的な影響を及ぼした。これは、クマの活動域拡大が、野生動物と人間社会との新たな軋轢を生み出していることを象徴する事案である。</p>
      <h3>3. 岩手県盛岡市における住宅地への集中出没</h3>
      <p>岩手県で報告された19件の多くは、県庁所在地である盛岡市に集中していた。特に5月31日には、湯沢中央公園付近で成獣1頭が目撃された後、同日中に周辺の湯沢西一丁目、湯沢東三丁目、流通センター北一丁目などで複数の目撃情報が寄せられた。これは同一の個体が長時間にわたり市街地を徘徊していた可能性を示唆している。その後も、小鳥沢二丁目（6月2日）や黒川13地割（6月5日）で住宅敷地内の痕跡が確認されたほか、黒川6地割（6月2日）や乙部19地割（6月3日）では住宅のすぐ近くで複数のクマが目撃されるなど、市民の生活空間とクマの活動域が極めて近接、あるいは重複している危険な状態が続いている。都市部に隣接する緑地がクマの侵入経路となっている可能性が高く、都市計画における野生動物対策の重要性が問われている。</p>
      <h2>地域別動向</h2>
      <p>上位都道府県における出没は、特定の地域に集中する傾向が見られた。</p>
      <ul>
        <li>新潟県 (46件): 長岡市、南魚沼市、村上市、十日町市など、中越から下越にかけての広い範囲で出没が確認された。農地や山林だけでなく、小学校裏といった生活圏での目撃もあり、住民の注意が喚起されている。</li>
        <li>栃木県 (23件): 渡良瀬遊水地のような平野部の広大な緑地での目撃が特徴的であった。報道機関からの情報も複数あり（※4、※5、※6、※7）、県内での関心の高さが伺える。</li>
        <li>岩手県 (19件): 盛岡市に報告が集中。住宅地での目撃や痕跡確認が相次ぎ、都市型出没の典型例となっている。</li>
        <li>島根県 (18件): 益田市、大田市、浜田市など県西部を中心に報告が多かった。夜間や早朝の目撃も報告されており、時間帯を問わない警戒が必要である。</li>
        <li>富山県 (17件): 立山町、南砺市、小矢部市、富山市と県内全域で散発的に目撃された。車両からの目撃報告が多く、幹線道路沿いでの活動が活発である可能性が示唆される。</li>
        <li>群馬県 (16件): JR吾妻線での列車衝突事故に加え、中之条町や桐生市で幼獣や子グマの目撃が報告されており、繁殖期に関連した母グマの行動に注意が必要な状況である。</li>
      </ul>
      <h2>注目事案の時系列整理</h2>
      <p>期間中に報告された事案のうち、特に社会的影響が大きい、あるいは市民生活へのリスクが高いと考えられるものを以下に整理する。キーワード分析では「人身被害」に一致する事案が1件あったが、具体的な被害内容は確認されていない。また、「捕獲・銃猟」に一致した事案として、滋賀県での錯誤捕獲が報告された。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">概要</th>
              <th className="px-3 py-2">分類</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">5月31日</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">湯沢中央公園付近で成獣1頭、その後周辺で複数目撃</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月1日</td><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">大津市</td><td className="px-3 py-2 text-xs">伊香立生津町で錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月2日</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">住宅裏の敷地内で痕跡を確認</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月4日</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">東吾妻町</td><td className="px-3 py-2 text-xs">JR吾妻線でクマと列車が衝突、1頭死亡、1頭逃走</td><td className="px-3 py-2 text-xs">インフラ被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月4日</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">野木町</td><td className="px-3 py-2 text-xs">渡良瀬遊水地で目撃（※2）</td><td className="px-3 py-2 text-xs">都市部近郊</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月5日</td><td className="px-3 py-2 text-xs">三重県</td><td className="px-3 py-2 text-xs">伊賀市</td><td className="px-3 py-2 text-xs">桐ヶ丘の集落内で映像等により確認</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月7日</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">秋田市</td><td className="px-3 py-2 text-xs">民家敷地内や公園で目撃（※1）</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">6月7日</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">十日町市</td><td className="px-3 py-2 text-xs">小学校体育館裏の農地から山へ移動するクマ1頭を目撃</td><td className="px-3 py-2 text-xs">都市部</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>当期間の出没件数158件は依然として高い水準であり、全国的にクマの活動が活発な状態が継続していると評価される。特に、新潟県での突出した多発、岩手県盛岡市での都市部への集中、そして群馬県での列車衝突事故は、今期のクマ問題の深刻さを表している。出没は山間部だけでなく、平野部の農地、河川敷、都市公園、住宅地にまで拡大しており、人間とクマの活動域の重複が常態化しつつある。これにより、偶発的な遭遇による人身事故のリスクは全国的に高まっていると判断できる。幼獣の目撃情報も散見されることから、母グマが子を連れて行動範囲を広げている可能性があり、これが予期せぬ場所での出没の一因となっていると考えられる。</p>
      <p>次週に向けては、以下の点に特に警戒が必要である。第一に、引き続き早朝および夕暮れ時の農作業や屋外活動には最大限の注意を払うこと。第二に、都市部や集落においては、生ゴミの管理徹底や、果樹の適切な処理など、クマを誘引する要因を徹底的に排除すること。第三に、幼獣を目撃した際は、近くにいる母グマを刺激する危険性が極めて高いため、絶対に近づかず、静かにその場を離れ、速やかに関係機関に通報することが求められる。各自治体が発信する最新の出没情報を常に確認し、危険とされる地域には立ち入らないなど、予防的な行動が重要となる。</p>

      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
                {r.site && <span className="text-stone-500"> — {r.site}</span>}
              </li>
            ))}
          </ol>
        </>
      )}

      <ResearchPlaceLinks slug={SLUG} />

      <hr className="my-10 border-stone-200" />

      <div className="not-prose rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-700">
        <div className="mb-2 font-semibold text-stone-900">監修・編集</div>
        <dl className="grid grid-cols-[6rem_1fr] gap-y-1 text-xs sm:text-sm">
          <dt className="text-stone-500">執筆</dt>
          <dd>AI（大規模言語モデル）による情報集約</dd>
          <dt className="text-stone-500">監修</dt>
          <dd>獣医工学ラボ（リサーチコーディネート株式会社）</dd>
          <dt className="text-stone-500">対象期間</dt>
          <dd>2026年5月31日〜2026年6月7日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-08</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-08</dd>
          <dt className="text-stone-500">データ範囲</dt>
          <dd>KumaWatch sightings.json (内部集計データのみ)</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、KumaWatch が収集した出没データを LLM が分析・文章化した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
          <a
            href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20研究記事の訂正"
            className="text-blue-700 underline"
          >
            contact@research-coordinate.co.jp
          </a>
          {" "}までご連絡ください。
        </p>
      </div>
    </PageShell>
  );
}
