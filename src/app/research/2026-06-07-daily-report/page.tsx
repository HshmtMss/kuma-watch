// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月7日 / mode: daily-report / 生成日: 2026-06-08
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-07-daily-report";
const TITLE = "2026年6月7日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月7日、国内で26件のクマ出没が報告された。特に秋田市では民家敷地内に出没するなど都市部への接近が確認された。新潟県と栃木県で各8件と多発したが、人身被害の報告はなかった。繁殖期と重なり、引き続き警戒が必要である。";

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
      "title": "秋田市でクマ目撃情報相次ぐ 民家敷地内や公園など",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE4ycGVYQW9aVHVZbG03TkVhbFFCRzloeEdIRDlMNzdoZWNPLXNKLVBmV0U4S3VVVWdiaVExQnVNdjB6RWJxMVBBc2dGcw?oc=5",
      "site": "報道"
    },
    {
      "title": "栃木県内におけるクマの目撃情報（2026年6月7日）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360684",
      "site": "下野新聞 SOON"
    },
    {
      "title": "栃木県内におけるクマの目撃情報（2026年6月7日）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360754",
      "site": "下野新聞 SOON"
    },
    {
      "title": "栃木県内におけるクマの目撃情報（2026年6月7日）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1361066",
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
          日次レポート
        </span>
        <span>対象期間: 2026年6月7日</span>
        <span>·</span>
        <span>公開: 2026-06-08</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":33},{"pref":"北海道","count":14},{"pref":"福島県","count":12},{"pref":"新潟県","count":8},{"pref":"栃木県","count":8},{"pref":"群馬県","count":5},{"pref":"島根県","count":4},{"pref":"富山県","count":2},{"pref":"山口県","count":1},{"pref":"東京都","count":1},{"pref":"鳥取県","count":1},{"pref":"山梨県","count":1},{"pref":"岩手県","count":1},{"pref":"静岡県","count":1},{"pref":"岡山県","count":1},{"pref":"長野県","count":1}]}
        total={94}
        periodLabel={"2026年6月7日"}
      />

      <p>2026年6月7日、KumaWatchが収集したデータによると、国内で少なくとも26件のツキノワグマの出没事案が確認された。出没件数が特に多かったのは新潟県と栃木県の各8件で、次いで群馬県と富山県の各3件、島根県の2件と続く。幸いにも人身被害の報告はなかったが、秋田市では市街地の民家敷地内や公園で目撃されるなど、2件が都市部での出没と判定された。本レポートでは、これらの事案を地域別に分析し、潜在的なリスクについて考察する。</p>
      <h2>主要事案：秋田市における都市部への接近</h2>
      <p>当日の事案で最も警戒を要するのは、秋田県秋田市浜田・新屋・向浜地区での出没である。民家の敷地内や公園といった、市民の生活空間に極めて近い場所での目撃情報が報道されている（※1）。都市部への出没は、住民との偶発的な遭遇リスクを著しく高める。餌資源を求めて河川沿いを移動してきた個体が市街地に迷い込んだ可能性も考えられるが、いずれにせよ、都市環境がクマの移動経路、あるいは滞在場所になり得ることを示す重要な事例である。自治体による迅速な情報提供と住民への注意喚起が不可欠な状況と言える。</p>
      <h2>地域別の出没傾向</h2>
      <h3>東北地方：都市部と農地での確認</h3>
      <p>東北地方では秋田県と岩手県で計2件が報告された。前述の秋田市の都市部出没に加え、岩手県盛岡市では畑でクマの痕跡が確認されている。これは農地がクマの行動圏に含まれていることを示しており、農作業中の遭遇リスクへの注意が必要である。目撃情報だけでなく、痕跡情報も地域の潜在的なリスクを把握する上で重要となる。</p>
      <h3>関東地方：栃木・群馬での多発</h3>
      <p>関東地方では栃木県で8件、群馬県で3件の計11件が報告された。栃木県の8件は新潟県と並び当日最多であったが、公開されている情報は限定的である（※2, ※3, ※4）。一方、群馬県の3件はすべて前橋市富士見町の赤城山周辺、特に覚満淵の入口、赤城神社東、黒檜山山頂といった観光地や登山ルート上で発生している。これは、多くの観光客や登山者が訪れるエリアにクマが出没していることを意味し、レクリエーション活動中の遭遇リスクが高いことを示唆している。入山者への情報提供と、鈴やラジオなどの音が出るものを携行するといった対策の周知が求められる。</p>
      <h3>中部地方：生活圏近隣での目撃が相次ぐ</h3>
      <p>中部地方では新潟県で8件、富山県で3件の計11件が報告された。新潟県では、十日町市の小学校体育館裏の農地、上越市の上越高田インターチェンジ料金所ゲート付近、南魚沼市の林、胎内市や上越市の県道沿いなど、人間の生活圏や交通インフラに隣接した場所での目撃が多数を占めた。特に教育施設の近隣や交通量の多い高速道路付近での出没は、市民生活への影響が大きい。富山県では黒部市と南砺市で3件が報告されており、そのうち2件は「クマのような動物」という不確定な情報であった。南砺市では国道を横断する子グマが目撃されており、母グマが近くに潜んでいる可能性も考慮すべき事案である。</p>
      <h3>中国地方：国道沿いでの出没</h3>
      <p>中国地方では島根県で2件が報告された。いずれも国道沿いでの目撃であり、雲南市の国道54号では幼獣1頭、奥出雲町の国道432号では成獣1頭が確認されている。車両との衝突事故のリスクや、ドライバーがクマに気を取られることによる二次的な交通事故のリスクも懸念される。道路沿いの藪の管理などが、見通しを確保し、急な飛び出しによる遭遇を減らす対策として考えられる。</p>
      <h2>出没個体の特徴と行動</h2>
      <p>当日の報告からは、子グマや幼獣の目撃が複数確認された点が注目される。新潟県南魚沼市、富山県南砺市、島根県雲南市で子グマまたは幼獣の目撃があった。これらの個体が単独で行動していたのか、母グマが近くにいたのかは不明だが、子グマの存在は繁殖が順調に行われていることを示す一方、子を守るために神経質になった母グマとの遭遇リスクを高める要因となる。特に、母グマは子グマを守るために非常に攻撃的になることが知られており、子グマを見かけた場合は決して近づかず、静かにその場を離れることが極めて重要である。</p>
      <h2>リスク評価</h2>
      <p>総括すると、2026年6月7日の出没状況は、人身被害こそ発生しなかったものの、クマの活動が人間の生活圏へ広範に及んでいることを示している。以下の3つの観点からリスクを評価する。</p>
      <ul>
        <li>季節要因：6月はクマの繁殖期にあたり、オスの行動圏が拡大する。また、春に生まれた子グマが活発に動き始める時期でもあり、子を守る母グマは非常に攻撃的になるため、遭遇時のリスクが高い季節である。</li>
        <li>餌資源：山中の餌資源（山菜や昆虫など）の状況は本データからは不明だが、不足した場合、人間の生活圏にある生ゴミや農作物などを求めて人里へ誘引される傾向が強まる。秋田市の事例は、都市部の潜在的な餌資源に引き寄せられた可能性も否定できない。</li>
        <li>人口圏への接近度：秋田市の市街地、新潟県の小学校や高速道路IC、群馬県の主要観光地、島根県の国道など、人間活動が活発なエリアでの目撃が顕著であった。これは、偶発的な遭遇から人身事故へ発展するリスクが高い状況を示唆しており、地域住民や観光客への一層の注意喚起と、自治体による効果的な情報発信が引き続き求められる。</li>
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
          <dd>2026年6月7日</dd>
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
