// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月6日 / mode: daily-report / 生成日: 2026-06-07
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-06-daily-report";
const TITLE = "2026年6月6日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月6日、国内で10件のクマ出没が確認された。栃木県で6件、新潟県で3件、富山県で1件が報告され、特に関東と中部地方での活動が目立った。人身被害等の重大事案はなかったが、繁殖期を背景に、クマが山麓から農耕地など人里近くへ活動域を広げている傾向が見られた。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-07",
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
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
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
      "title": "下野新聞記事",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360254",
      "site": "下野新聞 SOON"
    },
    {
      "title": "下野新聞記事",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360274",
      "site": "下野新聞 SOON"
    },
    {
      "title": "下野新聞記事",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360331",
      "site": "下野新聞 SOON"
    },
    {
      "title": "下野新聞記事",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360344",
      "site": "下野新聞 SOON"
    },
    {
      "title": "下野新聞記事",
      "url": "https://www.shimotsuke.co.jp/articles/-/1360465",
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
        <span>対象期間: 2026年6月6日</span>
        <span>·</span>
        <span>公開: 2026-06-07</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年6月6日、KumaWatchが収集したデータによると、日本国内で合計10件のクマ関連事案が確認された。これらの事案は栃木県、新潟県、富山県の3県に集中しており、いずれも人身被害や市街地中心部への出没、捕獲・銃猟といった特異事案には至っていない。しかし、目撃や痕跡の情報から、クマが人間の生活圏に近接して活動している実態が明らかとなった。本レポートでは、当日の出没データを地域別に分析し、季節的背景や環境要因を考慮したリスク評価を行う。</p>
      <h2>全体概況</h2>
      <p>当日に確認された全10件の事案は、関東地方と中部地方のみで報告された。都道府県別に見ると、栃木県が6件と最も多く、全体の60%を占めている。次いで新潟県が3件、富山県が1件であった。データソースの内訳は、栃木県の6件がすべて「tochigi-2026-mymap」、新潟県の3件が「niigata」、富山県の1件が「toyama」となっており、自治体からの公式発表や報道機関が直接報じたURL付きの情報は含まれていない。ただし、栃木県の事案には、地域メディアである下野新聞の記事URLがコメントとして付記されており、間接的に報道と関連していることが示唆される。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">確認件数</th>
              <th className="px-3 py-2">ソース内訳</th>
              <th className="px-3 py-2">事案種別（判明分）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">tochigi-2026-mymap: 6</td><td className="px-3 py-2 text-xs">詳細不明（報道URLあり）</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">niigata: 3</td><td className="px-3 py-2 text-xs">目撃: 3件（うち1件は子グマ）</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">toyama: 1</td><td className="px-3 py-2 text-xs">痕跡（足跡）: 1件</td></tr>
            <tr><td className="px-3 py-2 text-xs">合計</td><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs"></td><td className="px-3 py-2 text-xs"></td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没動向</h2>
      <h3>関東地方：栃木県における集中的な確認</h3>
      <p>関東地方では、栃木県のみで6件の事案が確認された。これは当日報告された全事案の過半数を占める突出した数値である。しかし、提供されたデータにおいて、これらの事案は具体的な出没地点や状況に関する詳細情報が欠落している。唯一の手がかりは、コメント欄に記載された下野新聞社の記事URLのみである（※1-5）。これらのURLからは、同日に県内の複数箇所でクマ関連の事案が報道された可能性が高いと推測される。個別の事案分析は不可能であるが、6件という件数自体が、栃木県内の広範囲、あるいは特定の地域において、クマの活動が活発化していることを強く示唆している。背景には、地域的な餌資源の変動や個体数の増加などが考えられるが、断定するには更なる情報が必要である。</p>
      <h3>中部地方：新潟県・富山県での山間部近接エリアにおける活動</h3>
      <p>中部地方では、新潟県で3件、富山県で1件の計4件が報告された。これらの事案は、いずれも山林と農耕地、あるいは集落が隣接する「里山」と呼ばれる環境で発生しており、具体的な状況が記録されている点で重要である。</p>
      <p>新潟県では、長岡市川口中山で2件の目撃情報が寄せられた。1件は「中山バス停付近」での子グマ1頭の目撃、もう1件は「畑」でのクマ1頭の目撃である。両事案ともクマは北東方向へ移動したと報告されている。出没地点が近接していること、移動方向が一致していることから、母グマと子グマのグループが分離して行動していた可能性、あるいは近接した時間帯に別々の個体が同じエリアを利用していた可能性が考えられる。特にバス停という人間が利用する施設の至近に子グマが出没した点は、母グマが近くに潜んでいるリスクを考慮すると、極めて注意を要する状況である。また、畑での目撃は、農作物への誘引を示唆している。</p>
      <p>同県上越市吉川区泉では、県道を通行中の車両からクマ1頭が目撃された。クマは東の山側へ移動していたとのことであり、山林間を移動するために道路を横断していたと推測される。このような道路沿いでの出没は、運転者との不意の遭遇や車両との衝突事故のリスクを高める要因となる。</p>
      <p>富山県朝日町高畠では、耕作者によって田んぼでクマの足跡が発見された。これは直接的な目撃ではないものの、夜間から早朝にかけてクマが農耕地へ侵入していることを示す確実な証拠である。農作業を行う人々が日中に活動する場所までクマが接近している事実は、作業中の遭遇リスクが存在することを示している。足跡の発見は、周辺地域におけるクマの存在を住民に知らせ、警戒を促す上で重要な情報となる。</p>
      <h2>リスク評価</h2>
      <p>2026年6月6日の出没データに基づき、季節要因、餌資源、人口圏への接近度という3つの観点からリスクを評価する。</p>
      <h3>季節要因</h3>
      <p>6月はツキノワグマの繁殖期（交尾期）にあたり、雄は雌を探して行動範囲を大幅に拡大させる。このため、普段は姿を見せないような場所でも目撃される機会が増加する。また、春に冬眠穴から出た母グマと行動を共にしていた子グマ（1歳半）が親離れを迎える「子別れ」の時期でもある。自立したばかりの若い個体は、経験不足から人里に迷い込みやすく、人間の生活圏周辺での出没の主因となることがある。新潟県長岡市で子グマが単独で目撃された事案は、まさにこの「子別れ」後の分散行動の一環である可能性が考えられる。</p>
      <h3>餌資源</h3>
      <p>初夏にあたるこの時期は、山中ではまだブナやミズナラなどの堅果類（ドングリ）は実っておらず、クマにとって主要なカロリー源が乏しい「端境期」にあたる。クマは山菜や昆虫、草本類などを採食するが、より栄養価の高い餌を求めて行動する。新潟県長岡市の畑や富山県朝日町の田んぼといった農耕地への接近・侵入は、山中の餌資源が不十分であるか、あるいは人間の生産活動によって生み出される食料（農作物やその残渣など）に強く誘引された結果と推測される。こうした農耕地での採食行動が常態化すると、クマの「人馴れ」を進行させ、より大胆な行動につながる危険性がある。</p>
      <h3>人口圏接近度と総括</h3>
      <p>当日の事案において、市街地の中心部といった都市部への出没は確認されなかった。しかし、新潟県でのバス停付近や県道沿いでの目撃、富山県での田んぼへの侵入は、クマの活動域と人間の生活・生産空間が近接、あるいは重複していることを明確に示している。現時点では人身被害は発生していないが、これらのエリアでは、農作業中や早朝・夜間の外出時に予期せぬ遭遇が発生するリスクは潜在的に高い状態にあると言える。栃木県で報告された6件の事案は詳細不明ながら、その件数の多さから地域全体としてクマへの警戒レベルを高める必要があることを示唆している。総じて、2026年6月6日の状況は、繁殖期や子別れといった季節的な要因を背景に、クマが餌を求めて山麓から人里へと活動範囲を広げている過渡期を示している。今後、夏から秋にかけて果樹や農作物が成熟すると、農耕地への出没はさらに増加・深刻化する可能性があるため、継続的な監視と地域住民への迅速な情報提供、そして誘引物除去などの予防策の徹底が不可欠である。</p>

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
          <dd>2026年6月6日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-07</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-07</dd>
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
