// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月21日 / mode: daily-report / 生成日: 2026-05-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-21-daily-report";
const TITLE = "2026年5月21日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年5月21日、国内で14件のクマ出没が報告された。人身被害は確認されなかったが、島根県（5件）と新潟県（4件）で出没が多発。国道やバス停、インターチェンジ付近など、人間の生活圏に近接したエリアでの目撃が相次ぎ、偶発的な遭遇リスクの高まりが懸念される状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-22",
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
  datePublished: "2026-05-22",
  dateModified: "2026-05-22",
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
      "title": "青森県十和田市奥瀬地区でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV190S2pXWEdFT1plbE9yamY2dDRXTldmRXpGUXZ5anBkVHF2NllDajRMWWREXzJkRklpamRMVm9kT3VKMGdyUlBJaFhIbGtMQlk4bnJNX0M5eFN0VjdRY3ZnWE1QMjN1R3dXWlN3elhwMHJTUUFCWG5ZQTlfdXBvM0g3dkdrLWU3T1dzX0JwX1E4YTl4WnQ1VGNiVHjSAaIBQVVfeXFMTUJhUnNMT2owOUhnM3JZeEdZMk1HZGtXcFFVS0xwamloT2xLNkVfWEtNOGM2RDdoX0dFZ1BfcE1fTEg2dFBmQUt4M3BFMGI0N053Nmw0VkFpMHJTTDFLX3JLbDliYUVwaTQtTmRCZDZadkVVcEdRZXhwY0xwUXhtSDhmTFRVMl96TjVJQUlGUXdOUENzV1NHejNtWVIwdWhSUHBn?oc=5",
      "site": "報道"
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
        <span>対象期間: 2026年5月21日</span>
        <span>·</span>
        <span>公開: 2026-05-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":40},{"pref":"北海道","count":13},{"pref":"福島県","count":5},{"pref":"島根県","count":5},{"pref":"新潟県","count":4},{"pref":"石川県","count":2},{"pref":"富山県","count":2},{"pref":"山梨県","count":2},{"pref":"静岡県","count":2},{"pref":"山口県","count":1},{"pref":"東京都","count":1},{"pref":"岡山県","count":1},{"pref":"長野県","count":1}]}
        total={79}
        periodLabel={"2026年5月21日"}
      />

      <p>本稿は、2026年5月21日にKumaWatchが収集した国内のクマ出没事案に関する日次分析レポートである。当日は全国で14件の出没情報が確認された。これらのデータに基づき、主要事案の概況、地域別の傾向、そしてリスク評価を分析的に報告する。</p>
      <h2>主要事案の概況</h2>
      <p>5月21日の出没事案において、人身被害に関する情報は報告されなかった。また、行政による捕獲や銃猟といった対応が実施されたとの情報も確認されていない。一方で、都市部への接近を示唆するキーワードに一致する事案が1件記録されており、クマの行動圏が人間の生活圏へ拡大、あるいは重複している状況が続いている。特に島根県益田市では、バス停やインターチェンジといった交通インフラ周辺での目撃が報告されており、潜在的なリスクが認められる。</p>
      <h2>地域別の出没傾向</h2>
      <p>出没情報は東北、中部、中国の3地方に集中し、他の地域（北海道、関東、関西、四国、九州）では報告が確認されなかった。都道府県別では島根県が5件と最も多く、次いで新潟県が4件、富山県と静岡県が各2件、青森県が1件であった。</p>
      <h3>東北地方</h3>
      <p>青森県十和田市奥瀬地区で1件の出没が報道機関より報告された（※1）。詳細な状況は不明だが、当該地域におけるクマの生息が示唆される事案である。</p>
      <h3>中部地方</h3>
      <p>新潟、富山、静岡の3県で計8件の出没が確認され、当日の報告数が最も多い地方となった。特に新潟県では、国道や県道といった主要道路沿いでの目撃が4件すべてで報告されている。十日町市の2事案では、クマが信濃川方面へ移動する様子が観察されており、河川が移動経路（コリドー）として利用されている可能性が考えられる。富山県上市町では、駐車場から走り去るクマ2頭が目撃されており、人間の生活空間への侵入事例として注目される。静岡県裾野市須山では2件が報告されたが、詳細な状況は不明である。</p>
      <h3>中国地方</h3>
      <p>島根県内のみで5件の出没が報告された。これは当日、単一都道府県での最多件数である。大田市、雲南市、益田市と、県内の広範囲で目撃されている点が特徴である。特に注目すべきは、雲南市で幼獣2頭が目撃された事案である。これは付近に母グマが存在することを示唆しており、子を守るために攻撃的になる可能性があるため、特に警戒が必要である。また、益田市では市内の3地点（喜阿弥バス停付近、萩・石見空港IC、竹ノ下橋付近）で相次いで目撃された。これらは交通の結節点や生活インフラに近接した場所であり、クマが人里に深く接近している実態を示している。</p>
      <h2>2026年5月21日 クマ出没情報一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">時刻</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村</th>
              <th className="px-3 py-2">場所・状況</th>
              <th className="px-3 py-2">頭数</th>
              <th className="px-3 py-2">ソース</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">午前</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">十和田市</td><td className="px-3 py-2 text-xs">奥瀬地区で出没</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">十日町市</td><td className="px-3 py-2 text-xs">水沢第3、国道117号を横断し信濃川方面へ</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">niigata</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">長岡市</td><td className="px-3 py-2 text-xs">山古志東竹沢、県道23号線沿い、谷川へ逃走</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">niigata</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">十日町市</td><td className="px-3 py-2 text-xs">姿第1、主要地方道を通行中、信濃川方面へ</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">niigata</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">村上市</td><td className="px-3 py-2 text-xs">石住、県道鶴岡村上線付近</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">niigata</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">富山市</td><td className="px-3 py-2 text-xs">婦中町新町でクマらしきもの</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">toyama</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">上市町</td><td className="px-3 py-2 text-xs">上市町舘、駐車場から走り去る</td><td className="px-3 py-2 text-xs">2頭</td><td className="px-3 py-2 text-xs">toyama</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">裾野市</td><td className="px-3 py-2 text-xs">須山</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">shizuoka-gmap</td></tr>
            <tr><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">裾野市</td><td className="px-3 py-2 text-xs">須山</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">shizuoka-gmap</td></tr>
            <tr><td className="px-3 py-2 text-xs">午前8:00頃</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">大田市</td><td className="px-3 py-2 text-xs">五十猛町畑井の市道</td><td className="px-3 py-2 text-xs">1頭 (体長80cm)</td><td className="px-3 py-2 text-xs">shimane</td></tr>
            <tr><td className="px-3 py-2 text-xs">午後6:10頃</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">雲南市</td><td className="px-3 py-2 text-xs">掛合町入間の国道54号付近</td><td className="px-3 py-2 text-xs">2頭 (幼獣)</td><td className="px-3 py-2 text-xs">shimane</td></tr>
            <tr><td className="px-3 py-2 text-xs">午前8:30頃</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">喜阿弥町の喜阿弥バス停付近、国道191号を横断</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">shimane</td></tr>
            <tr><td className="px-3 py-2 text-xs">午後2:15頃</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">飯田町の萩・石見空港IC</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">shimane</td></tr>
            <tr><td className="px-3 py-2 text-xs">午後4:30</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">梅月町、竹ノ下橋付近</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">shimane</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価と今後の展望</h2>
      <p>5月21日の出没事案を総合的に評価すると、人身被害こそ発生しなかったものの、クマと人間の活動圏が著しく近接している状況が浮き彫りとなった。</p>
      <ul>
        <li>季節要因：5月下旬は、冬眠から覚めたクマが繁殖や採食のために活発に行動する時期にあたる。特に、昨年独り立ちした若い個体や、新たに子を産んだ母グマが行動圏を広げる過程で、人里に迷い込む可能性が高まる。島根県雲南市で幼獣2頭が目撃されたことは、この時期の繁殖生態を反映した事案と考えられる。</li>
        <li>餌資源：本データからは山中の餌資源の状況を直接読み取ることはできない。しかし、この時期はまだ山の実りなどが端境期にあたるため、クマがより容易に得られる食料を求めて人里周辺の農作物残渣や生ゴミなどに誘引されるリスクが依然として存在する。</li>
        <li>人口圏接近度：当日の事案の多くが、国道、県道、市道といった道路網に沿って発生している。これは、人間が作り出したインフラをクマが移動経路として利用している、あるいは行動圏が重複していることを強く示唆する。島根県益田市のバス停やインターチェンジ、富山県上市町の駐車場といった場所での目撃は、偶発的な遭遇の危険性が非常に高いレベルにあることを示している。</li>
      </ul>
      <p>総括として、特に中部地方および中国地方において、クマが人間の生活圏に深く侵入している傾向が顕著である。人身被害は発生していないが、これは幸運に過ぎない可能性もある。道路利用者や地域住民は、朝夕の薄暗い時間帯や見通しの悪い場所での活動に際し、クマとの遭遇に最大限の注意を払う必要がある。今後の動向を引き続き注視し、地域レベルでの効果的な注意喚起策が求められる。</p>

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
          <dd>2026年5月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-22</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-22</dd>
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
