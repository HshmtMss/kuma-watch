// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月8日 / mode: daily-report / 生成日: 2026-06-09
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-08-daily-report";
const TITLE = "2026年6月8日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月8日、国内で27件のクマ出没が報告された。栃木、新潟、富山県で特に多く、人身被害はなかったものの、高速道路サービスエリアでの親子グマ目撃など、人口圏への接近が目立った。繁殖期に入り、クマの行動が活発化していることが背景にあるとみられる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-09",
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
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
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
      "title": "白屋でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPd3o3OTdFaFFfTGg0blNZTjZEdjZiZ1NDRTdpeHFYWDVwV2xudWJYdFhocXRjVHZBRS1rX2VUQlJDaVJtSjc2Q3JKcUd0WUYxNGJITTJLazA4enEtNmNET3lrcm1QbTJPQnJaU1I1OFRQNjBtajlCN0lhU2V4NllOVTJZTXhOUG1aaXJ4ci1sX3JyUDg5NURuNnNVZzRQQnpScFHSAaIBQVVfeXFMT3d6Nzk3RWhRX0xoNG5TWU42RHY2YmdTQ0U3aXhxWFg1cFdsbnViWHRYaHF0Y1R2QUUta19lVEJSQ2lSbUo3NkNySnFHdFlGMTRiSE0yS2swOHpxLTZjRE95a3JtUG0yT0JyWlNSNThUUDYwbWo5QjdJYVNleDZZTlUyWU14TlBtWmlyeHItbF9yclA4OTVEbjZzVWc0UEJ6UnBR?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県のクマ出没情報",
      "url": "https://www.shimotsuke.co.jp/articles/-/1361127",
      "site": "shimotsuke.co.jp"
    },
    {
      "title": "栃木県のクマ出没情報",
      "url": "https://www.shimotsuke.co.jp/articles/-/1361289",
      "site": "shimotsuke.co.jp"
    },
    {
      "title": "栃木県のクマ出没情報",
      "url": "https://www.shimotsuke.co.jp/articles/-/1361299",
      "site": "shimotsuke.co.jp"
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
          日次レポート
        </span>
        <span>対象期間: 2026年6月8日</span>
        <span>·</span>
        <span>公開: 2026-06-09</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <h2>全体概況と主要事案</h2>
      <p>2026年6月8日、KumaWatchが収集したデータによると、国内におけるクマの出没関連情報は計27件確認された。都道府県別に見ると、栃木県が7件と最も多く、次いで新潟県と富山県が各5件、群馬県、三重県、岩手県、静岡県が各2件、埼玉県、京都府が各1件と続く。これらの情報は、自治体からの公式発表が0件である一方、報道機関からの情報が1件含まれている。この日の報告では、人身被害や捕獲・銃猟に至った事案は確認されなかった。</p>
      <p>本日の主要事案として、都市部もしくはそれに準ずる人口集積地への出没が1件報告されている。新潟県阿賀町では、阿賀野川サービスエリアの従業員駐車場で親子グマが目撃された。高速道路の付帯施設という不特定多数の人間が利用する場所への出没は、偶発的な遭遇のリスクが非常に高いことを示している。幸いにも直接的な被害には至らなかったが、クマが交通インフラ周辺を臆することなく行動圏としている可能性を示唆する重要な事例である。</p>
      <h2>地域別動向</h2>
      <h3>東北地方</h3>
      <p>東北地方では、岩手県盛岡市で2件の事案が報告された。1件は、湯沢東三丁目の敷地内に置かれていた園芸用の土袋が食い荒らされるという痕跡情報である。これは、クマが人の生活圏内にある物品を餌として認識し、執着している可能性を示す。もう1件は、大ケ生で宅地内に幼獣1頭が出没したという目撃情報である。幼獣の単独行動は稀であり、母グマが近くに潜んでいる可能性が非常に高く、極めて慎重な対応が求められる状況であったと推察される。いずれの事案も、住宅地に隣接したエリアでの発生であり、住民の日常生活における警戒の必要性を示している。</p>
      <h3>関東地方</h3>
      <p>関東地方では、栃木県、群馬県、埼玉県で計10件が確認され、全国で最も多い報告があった地域となった。栃木県では7件の情報が寄せられたが、個別の詳細は不明であり、報道機関の記事URLがコメントとして付記されているのみである（※2, ※3, ※4）。群馬県では2件の目撃情報があった。渋川市では体長約80cmの個体が道路を横断し竹藪に入る様子が、甘楽町では子熊が庭先で鳴いていたとの報告がなされた。庭先という人間との距離が極めて近い場所での子熊の目撃は、母グマとの遭遇リスクを孕んでおり、特に注意を要する。埼玉県秩父市でも地元住民による目撃情報が1件あり、関東山地一帯におけるクマの広範な活動が継続していることを示している。</p>
      <h3>中部地方</h3>
      <p>中部地方では、新潟県、富山県、静岡県で計12件の報告があり、広範囲でクマの活動が活発であることが確認された。新潟県では5件の多様な事案が報告されている。十日町市の公園脇農地では3頭分の足跡が、三条市の民家敷地では柿の木に爪痕や枝折れの痕跡が発見された。後者は、人里の果樹がクマの誘引物となっている典型例である。このほか、阿賀町のサービスエリアでの親子グマ目撃、長岡市や妙高市での道路横断など、人々の生活圏や交通網の周辺での出没が相次いだ。富山県でも5件の目撃情報があり、黒部市、立山町、高岡市、南砺市と県内各地で確認された。特に立山町と南砺市では子グマの道路横断が報告されており、この時期の親離れや親子での行動範囲拡大が背景にあると考えられる。静岡県富士宮市でも2件の情報があったが、詳細は不明である。</p>
      <h3>関西地方</h3>
      <p>関西地方では、三重県で2件、京都府で1件の計3件が報告された。三重県の事案は、紀北町での映像記録と松阪市での糞の発見であり、いずれも痕跡情報である。京都府舞鶴市では、出没情報が報道機関によって伝えられた（※1）。具体的な状況は不明だが、これらの情報は近畿地方北部から紀伊半島にかけての山間部におけるクマの生息と活動を裏付けるものである。</p>
      <h2>リスク評価</h2>
      <p>2026年6月8日の出没状況を分析すると、以下の3つの観点からリスク評価が可能である。</p>
      <ul>
        <li>季節要因：6月はクマの繁殖期にあたり、雄は雌を求めて行動圏を大幅に拡大させる。このため、普段は姿を見せない場所での目撃が増加する傾向にある。同時に、前年に生まれた子グマが独立（親離れ）する時期や、春に生まれた子グマを連れた母グマの活動が活発化する時期でもある。実際に、新潟県阿賀町での親子グマや、群馬県甘楽町、富山県立山町・南砺市での子グマの目撃が報告されている。特に子連れの母グマは非常に攻撃的になる可能性があり、遭遇時のリスクは極めて高い。</li>
        <li>餌資源との関連：山中の餌資源が不足していることを直接示すデータはないが、人間の生活圏にある誘引物への依存を示唆する事案が確認された。岩手県盛岡市での園芸用土袋への食害や、新潟県三条市での柿の木への痕跡は、クマが容易に得られる食料源として人里の物品を学習している可能性を示している。生ゴミ、果樹、ペットフード、農業資材などの適切な管理を徹底することが、人里への出没を抑制する上で不可欠である。</li>
        <li>人口圏への接近：本日の報告27件の多くが、宅地内（盛岡市）、民家敷地内（三条市）、庭先（甘楽町）、公園脇（十日町市）、さらには高速道路サービスエリア（阿賀町）といった、人間の生活・活動エリア内で発生している。これは、一部のクマ個体群において人間への警戒心が薄れ、人里を日常的な行動圏の一部として利用している実態を浮き彫りにしている。今後、市街地や集落での突発的な遭遇のリスクは、季節を問わず高い水準で推移する可能性があり、住民一人ひとりが日常生活においてクマの存在を意識し、警戒を怠らないことが重要である。</li>
      </ul>

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
          <dd>2026年6月8日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-09</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-09</dd>
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
