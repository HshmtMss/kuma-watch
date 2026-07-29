// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月27日 / mode: daily-report / 生成日: 2026-07-28
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-27-daily-report";
const TITLE = "2026年7月27日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月27日、日本全国で138件のクマ出没が報告された。人身被害は確認されなかったものの、東北地方を中心に都市部や住宅地での目撃が頻発した。特に秋田県、北海道、富山県で件数が多く、農作物への食害や捕獲・駆除事案も発生しており、クマの活動域が人間の生活圏へ拡大している状況が示された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-28",
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
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
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
      "title": "住宅街でクマ出没、映像や食害",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5wb1d1YXZSblh4US15a2pWcm1IbGJ6SWhwM0RTdGlEZjdaaTJvM2ZPV240SlhQT19NbEtVX3VaWXE3dWZvQmVjVURkOFlLVDBfMS1RZHEwOTk0QlRUcXR2OEV0WEJKcTU0bm1VTEVuNGxrZ2VnT0ZPcG930gF_QVVfeXFMTlh2S1RZM09vSkRfYV81YWQwdEhJLTliMnBUMnVCYi1CRmZtQkZTclZxZXBxVlI0d1F2akNkNTZhbkJOWE5qRHQyUlBYV05xc2NMYlNqOTNqTnBvUEVabHAzdXlRYzZicUxEMkVxcjNvaldXZmp1TGVUdWlkdFpyNA?oc=5"
    },
    {
      "title": "住宅街の堀川で道路を横切るクマの目撃",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1OdUs2cTZ4eGs2Q1ZrRGtDM21UZFpNRkdpbU94Tzg2MUYwdUJjdmczRXFIVkNFdGI2ajI2azhtM3pjNDBLcHkzaExvLVdrRk0zMlJSeWVIdw?oc=5"
    },
    {
      "title": "家庭菜園のスイカ全滅、ドラレコに成獣、フンも発見",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5nZU5wamNPMnFNZXRaMWxoUDRTc1VCeVJOcm9HTkJfaThRc2xaZnhLcV9xbzluRk5Vdnh0d0F5WjBOcFhmVVl2T2NGR3BGdw?oc=5"
    },
    {
      "title": "寺内蛭根でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5YZjlleXZ0bk5VZlVUVEJYVDZrVFdoN2oyc1VlLU1McHZJZkdVSkpsc1ppOENvYm9JVUFLQkhCdUhPcXNRdWJUQ2dsdzh0NHlaVTZ3aVJlREwtQi1Mck9NUkRR?oc=5"
    },
    {
      "title": "公園でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1fdmw4cmRaMF8xem1PYnpmeG5JWmNaMDRETlFPR0I4bGIxUGdROXpaMkpfR3JGekMzOFlWeG45dlFjaUpIeXhkWjNxanp6ZTA?oc=5"
    },
    {
      "title": "泉区北中山１丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOVjNqTTJhdHJ1Ul9zWGpGM3JYRmM1UGUwWGplQ195bWZqZnNwQm9kVGxBRnc0QlMyZnl0cHRwVXNZQVpsQXJvNlNVLV9nckVOcUFoWTYxeWNjY2N0RTNhcjRFbTBrRUlOS2ZoSEU5YTVQQmlxWkx4RVJVc2dQQXNWZ0wxdVJVdEVhcF8yaXpIQ2JKdE11UGdmY1pfMjFnejlKZ0E2LS0yS1NzTTNseURaMUktSzh2bEZyS1gyTGdWTnZ3V3N4eVB2b2NaMlZ5V1V0NGNEbF9ZLVBrV2EycE9jS2lPaXp5alRTLWhSb00wMTFWUdIBogFBVV95cUxQLURpNTVnT1lhWEZoM2czVlR3enFtUzhDSXlpZ1pBSktkaW1SaTdWTU1mc2ZwNnpBMW5DSjVGSGtMTm16X3FlRFoybDMtaENPTGdhTEJBandENDhST2pqWE53YWxaYWk3NDBQMmhHSi1YVnV4TjNub01kV0paeUhDeUgwaVRIX3dMZ19hTWJUNHY1YjJOUnNwS0JLUzFQZnlJSXc?oc=5"
    },
    {
      "title": "梅田川河川敷のクマを駆除",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5BV3Q0SkFfZGdoek9IdExMcUVLdGZuU2R6YVY4NzRTLUVXVnNxbDFucU9DcjdvX2tWcERkQXpJTEJZQkpNZVVSQXVRYmNpU0k?oc=5"
    },
    {
      "title": "住宅の窓から2mの距離で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5fY0YzVzNuMk43OFhndExVZFBUckxHYi0xTDY3V2hmMkM2aXBOMURjaTdGdXZVdEdNN1hCUkRrQUU5cm9OUGtfLWFkM0gyM3Y4RTJ2cUlrbDVla0p5WU5YbExqS2hTQ2lHdEdQaldMeFRLczJCU0VUT3IteS12NXc?oc=5"
    },
    {
      "title": "国道235号で歩道上のヒグマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9VZWRzdFdRd0UteFlUSWs2Rm40WUxtQ2ljcHZrdjNraEhsMmVDU1EwRFBCTVRxLWxHQ0owUms4ZXpoNmd2cTBqZEhmNHZCNFhMSHFYSHlGbTlHcS1vUXpoZHVUazZZQkFDLWJ1ekVUZ9IBdEFVX3lxTE5NcmZvNS1XYmItN1B6ellRbTFTNTB4UzJJclhGS21CV1pGQTU4RHVua0Z3Z0pTaEhNN3BuczhjS05qaFVmb2hYTFJFdXJwb2VVaUhPZE53Q3hqY1hQTDN6SE9hVllWckpEaUhDQWhwQVY0Y2lh?oc=5"
    },
    {
      "title": "中学校近くでクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBmRXRmTW5yWTdreHlmX2dKbHBSeF9FakFvV01sblE2bXNZV181bmNhQnBSRXBqN1dDNnJGU1AwbHhhQ09iUlp4UWRRZGN3U3hrVXZsSU4zMWsxT1hXcVFyNQ?oc=5"
    },
    {
      "title": "那須塩原市中塩原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOTliLUJmd2htanhUckdkV3V1NTFOal9HV0JhTWZOT2hibU9vOFowUHlzeG5NeXVaX0RRempSb1pCbzBXeTc4VTBqNlU3enh3WkdjN3k1cmFJLTkyZ2J5NzdaZFBmdVd0a25zbTloaUk0aEdPRHF3Mk9Wb09tTmJseHZtVnpBYUkzMnp3bk1Zd2RPNDE2Q0V2NXE2Tk7SAaIBQVVfeXFMTzBmdjduNExjTGd1WXFrdUh6WlEwR2ZiSk5KalNKc05pX1BTd0hMbERuVHNiUnJMbDNUUXRwOEZjODljaV9RLXR0RnBFS0NMeDcwSmN2R1RNOWZQTHpjbC1rNEtsX1Z5bTJaWkJOc3A1Z1d3ckdDU25Xdk1JZE5wNXBSa2x2dVlRNERORUZkS1BsaHE0a1VYay1ENWdOWms4ZDVR?oc=5"
    },
    {
      "title": "栗山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZXl3RzdaODNFNkNfOEJnbkFsUGJzR3B3T29CY2F0OWVBRnJnNlN0T2Z2dlhfQWUwblIxaXZ6OFh6TUdPQ2dNeml6cldXcm9JVGR0eG40QjhSRlViWTdLT0N3aEZkRGxoQXVtTWVjRVNDc18xNUkzVXVWaDhXZ1ZaVko1bnFQUnJHRWxsLVZub2Vqamp6SFF1RFB2OWPSAaIBQVVfeXFMTmdsZElnM1VCYktDRnVVNWVmWHlfWExDaERxeFduOUV5ZWZLVmhHaDQ5bU1rREFoTHN4TWxxRzExSExBTHpZUnZWSktmVDNMMTFROEktN2EwMzU4TTZ5eE9JdEVRQUk3SGZ0c1BVYnluajJNS1NsRDRCVlF3Tm9lSUNCcmVpUjF6VHpUc3pXRnBMaE55QkNXWTQ2V1VOcm1oTnhR?oc=5"
    },
    {
      "title": "果樹園でツキノワグマによる食害",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE83WEtIZkdHaUsyUFFmazFWTlM4V2JlNmUxSjRybmhJMXFqNF9yMlRwS1o0YTA4SzZPZ2hNMGtzMGx0VVRjOXFZWUpXa3lpcEVmd1F3cVhreDdBVjh2WVhyejZoRlhpNEQxcGZLZG1MM09Vb2s5Z3JBQ2N1aHZPREE?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"秋田県","count":25},{"pref":"北海道","count":23},{"pref":"富山県","count":19},{"pref":"岩手県","count":9},{"pref":"栃木県","count":8},{"pref":"青森県","count":8},{"pref":"山形県","count":6},{"pref":"長野県","count":5},{"pref":"山口県","count":5},{"pref":"群馬県","count":4},{"pref":"山梨県","count":4},{"pref":"宮城県","count":4},{"pref":"新潟県","count":3},{"pref":"島根県","count":3},{"pref":"和歌山県","count":3},{"pref":"兵庫県","count":3},{"pref":"福島県","count":2},{"pref":"鳥取県","count":2},{"pref":"神奈川県","count":1},{"pref":"福井県","count":1}];

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
        <span>対象期間: 2026年7月27日</span>
        <span>·</span>
        <span>公開: 2026-07-28</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={138}
        periodLabel={"2026年7月27日"}
      />

      <p>2026年7月27日、KumaWatchが収集したデータによると、国内でのクマ出没関連情報は138件に達した。このうち報道機関から得られたURL付きの情報が110件を占め、公式発表は0件であった。人身被害に関するキーワードを含む報告はなかったが、「都市部」に合致する事案が8件、「捕獲・銃猟」に関連する事案が3件確認されており、クマと人間社会との距離が縮まっている現状が浮き彫りとなった。</p>
      <h2>主要事案の概観</h2>
      <p>当日は、特に人口が集中するエリアでの出没が際立った。富山県富山市では、住宅街の道路をクマが横切る様子や、家庭菜園のスイカが食い荒らされる被害が報告された（※1, ※2, ※3）。秋田県秋田市では、寺内蛭根地区で目撃が相次ぎ（※4）、宮城県仙台市でも泉区の公園や住宅地で出没が確認された（※5, ※6）。これらの事例は、クマが都市環境に適応し、日常的に出没する可能性を示唆している。</p>
      <p>また、直接的な対応として捕獲・駆除が行われた事案も3件報告された。宮城県仙台市では梅田川の河川敷に出没したクマが駆除され（※7）、北海道では松前町と足寄町でそれぞれ1頭が捕獲された。これらの対応は、人的被害を未然に防ぐための措置であるが、同時にクマが人の生活圏に深く侵入している実態を示している。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道（23件）</h3>
      <p>北海道では、住宅地への近接事案が目立った。下川町では住宅の窓からわずか2メートルの距離で目撃されるなど（※8）、住民に不安を与える事例が報告された。また、苫小牧市では国道沿いの歩道でヒグマが目撃される（※9）など、交通量の多い幹線道路付近にも出没している。前述の通り、松前町と足寄町では捕獲も実施された。</p>
      <h3>東北地方（秋田25件、岩手9件、青森8件、山形6件など）</h3>
      <p>この日、最も出没件数が集中したのが東北地方である。特に秋田県（25件）では、秋田市の寺内蛭根地区や下浜羽川の民家敷地内など、市街地での目撃が多数を占めた。岩手県（9件）では盛岡市の中学校近くや住宅地で3頭のクマが目撃され（※10）、青森県（8件）、山形県（6件）でも同様に住宅地や小学校近くでの出没が報告された。宮城県仙台市では駆除事案も発生しており、東北全域でクマが人里近くに定着しつつある可能性が懸念される。</p>
      <h3>関東地方（栃木8件、群馬4件など）</h3>
      <p>関東地方では、栃木県日光市や那須塩原市（※11）、群馬県安中市や渋川市など、主に山間部や観光地の周辺での出没が報告された。神奈川県松田町でも出没の可能性が報じられており、レジャーや観光で訪れる人々への注意喚起が必要な状況である。</p>
      <h3>中部地方（富山19件、長野5件、新潟2件など）</h3>
      <p>富山県（19件）では、富山市の都市部での出没が極めて活発であった。住宅街での目撃に加え、家庭菜園のスイカが全滅するといった食害も発生しており（※3）、都市部がクマの餌場となっている実態が明らかになった。長野県では軽井沢町や安曇野市といった別荘地や山麓の居住区で、新潟県糸魚川市では子グマの目撃が複数報告されており（※12）、広範囲で注意が必要である。</p>
      <h3>近畿・中国地方（山口5件など）</h3>
      <p>山口県では、国道や県道沿いでの目撃が5件報告された。また、鳥取県鳥取市の果樹園ではツキノワグマによる食害が確認されており（※13）、農作物への被害が顕在化している。兵庫県や和歌山県、島根県でも山間部を中心に散発的な出没が報告された。</p>
      <h2>リスク評価と今後の展望</h2>
      <ul>
        <li>季節要因：7月下旬は、春に生まれた子グマが成長し、親離れした若い個体が行動圏を探索する時期にあたる。これらの経験の浅い個体が、餌を求めて人里に迷い込むケースが増加していると考えられる。福島県会津美里町や岩手県盛岡市では親子とみられる複数頭の目撃情報もあり、次世代のクマが人里近くで生息している可能性を示している。</li>
        <li>餌資源：山中の餌資源（ブナ科の堅果類など）の豊凶が出没に大きく影響するが、現時点での都市部での菜園被害や果樹園への侵入は、クマが容易に得られる高カロリーな食物として農作物に強く依存していることを示唆している。この傾向が続けば、秋の大量採食期に向けて、さらに人里への出没が活発化する恐れがある。</li>
        <li>人口圏への接近：全国的に、住宅地、学校、公園、国道といった人間の生活・活動空間へのクマの侵入が常態化しつつある。特に秋田市や富山市の事例は深刻であり、住民との偶発的な遭遇リスクが極めて高い状態にある。今後は、都市計画のレベルで緩衝帯（バッファゾーン）の管理や、住民への具体的な対策（ゴミ管理の徹底、藪の伐採等）の周知が急務となるであろう。</li>
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
          <dd>2026年7月27日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-28</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-28</dd>
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
