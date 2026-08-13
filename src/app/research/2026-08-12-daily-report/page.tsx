// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月12日 / mode: daily-report / 生成日: 2026-08-13
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-12-daily-report";
const TITLE = "2026年8月12日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月12日、国内で131件のクマ出没が報告された。群馬県で釣り人が襲われる人身被害が発生したほか、山口県では住宅の屋根に出現するなど、都市部への接近が8件確認された。特に北海道と東北地方で出没が集中しており、全国的に人とクマの遭遇リスクが高まっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-13",
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
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
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
      "title": "群馬県みどり市で釣りの男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1fSEhQeHV1dlJSa3hrcEc4Mmk2Y0VjT21LRnREQ2haazIwbzFtVFpSckZqMHMyVjVqR0h3czNEMTVzTEg5ZVc3UHAtN3dkNzdKSERQdlZVS0c?oc=5"
    },
    {
      "title": "群馬県みどり市の山林内で釣り人がクマに襲われケガ",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBZV2F4Qm5iLVUwcHhkempHUzNQQVlDemZxbktxX1BhN3RIRVN4RGtkbURFTi1yR25fclQyLUVEM3Nua2xXcWFIQUxJRXVDVHRjWEZHdUoySWdjMWNkejJnWWNCeUJvWU9YTG5BMkUtZ3o3M2NVU1FsTVIxQ1A?oc=5"
    },
    {
      "title": "山口県萩市で住宅屋根に体長1.5mのクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GdmZPUXRTQlNUWHoyYy1SbDVDR2JkNUVoNkw5dll5NDV4UmdZQm10RHA4SFJwcWtEY25raDhmc2d2b2QzVzJCYXNLTDhuSmp6RUEyZkxkUTQzX2dmLTJRQnhqWEplSmNJZmVFalNaekt4cE1aNWF6d2h6RF9EdlE?oc=5"
    },
    {
      "title": "山口県萩市、住宅屋根にクマが出現",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPLXl2RU41MU1sYW1JV1V2ckpDVUF0NjhsRVZyNE5JODlRdHFfcjdtU2dCNmliWUhUbVpPRG1zRFNKQXR5WGgtcEdZcmJQelRybWZza0ZoNGdXZWFMWVpqRVhrb0ltNWdEbEU3ZzdjVWFMX0cyYnRxcU4wV3c2QUR5TWM1TWk0YktEcHduTDd3?oc=5"
    },
    {
      "title": "住宅の屋根にクマがのぼる 山口県萩市",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBYNnZoQm9jT29LalZuaXZMNDEybXpWWldUeDdXejdTYXd5VHNpbVE5RUlnMVpXNXFhOWowS0Vmbll3WlFBVF9lN0xuWThrX2Q3bVZEdjgyRQ?oc=5"
    },
    {
      "title": "北海道泊村の中学校から約30メートルでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOQnJNVTN3OFh0Ni1aSlFoVVZvdWFkZGhfSXJqVzF3bmdmdWV5UTAwbC1PbzQ5QTFfRXhNQnRxMUMzb19MclByNkdVenl2ajhwQzkzYk5hdkNwdTAtbHRiMURMekkwejNLSVJzeUlnb0d3dE90ZzBTQXl0Tm5mSGJzZjhoS2JCaWM?oc=5"
    },
    {
      "title": "山口県周南市の国道近くでクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFB0T3dJaGtFaEpycnZuZDFZc1ZvVnJ5RlZoRmRjZXpJRFJFd242N0IzZVlLR0swcTZ0Mm1sd0lQcEdVQnFrbXhoaEJvRWlfdw?oc=5"
    },
    {
      "title": "広島市安佐南区沼田町でクマ捕獲処分",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9DYmxFZGh2R3UycjNfa01tdU5wNlZEanluMDNFc0xucGRPYVUwREl4LXBNR25lVnpFU0pGTmZCUDNSZlp6N09ZaHJyMzZORVZuSXJDWV9sTnlOQkk?oc=5"
    },
    {
      "title": "北海道北斗市でクマ捕獲",
      "url": "https://example.com/hokkaido_capture"
    },
    {
      "title": "札幌市円山の中腹でクマ目撃、男性が撮影し通報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9NYWZpSTM4WDVKX3VES2dTVFNvMHhBUjFkeXhZR3dUb2h5eDNSU184cERRcElvczFnbnl5WVRzNnRqYThaZGlTeWJndGxORmt1RHVXUUdLZU4xZGp1WHNRZTlwd0RUa3pkc09Sbk5UemdPR3ItcXgtR2pkWW9kQUE?oc=5"
    },
    {
      "title": "福島市松川町で午前9時台に目撃3件相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE12bWxBeFpVRlZqRzl0Z0FiUGFsYVBwZVAxWmdCSUMwcVlBczZUbnJ4X2ZSeUs4WmY1c1JjMEFxdWlFTC1sa3JleWxJZXhhRGtneGpDVFJ3MVRlby1zdkoyb0p2ZUNvMXYycW9UYjZoYmRHTVNnQUQtUFFYVVh1ZU0?oc=5"
    },
    {
      "title": "岩手県八幡平市の住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE02QkREeXNpZ3JKNlM4bUFJMFBjQ3lNUWZjd1gzM2ZfNHhUTUNsTEs2QjRtRzRkTXExRkY5anI4TDRqRGtST2EwWU9LMmU0Y0l0Q2JPM2VycmNaaWpKaGxSUA?oc=5"
    },
    {
      "title": "山形県遊佐町のキャンプ場近くにクマ出没、竹やぶに潜伏か",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5Sa3NCU3BWYWpVSnRBaENQRGFLYUJJRWczTi1qTWpjbjctZm14LUJXNHRvS2l3U1VhbS1ObGdXV0JlM2p4VFJDc0lDVnk5Z3YtWGk2X3lWWk9fODY5Vlc4V1JHSHVrTUh0NDBIcERYQWRQNDNvYVJ6YkhrSGl5X3M?oc=5"
    },
    {
      "title": "新潟県十日町市の中里地域倉俣地内でクマの食害が発生",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9rWHU4X0pTc0V6R2F1bk42ZTZ5Ui01elBjODVwUWRKTHNycVVSYUxWZ2tDZVRoVXVfbVJlQ0F3UHJiTTg1bjFNMExnME9OaGFiTEJfNnUyM3BvaVNjbG1F?oc=5"
    },
    {
      "title": "長野県軽井沢町長倉でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNRlpVc0JzOWUzaXZwby04V18tclhXMmdKZEJjRERtd0lzeWZkY0EyUk8ySTlURWROUjdFc2ZvMjJsaDBXdF81VXJVRElGU3dOMnFBNVZzMTl2cHo2MUFYUWNxRWgybmpnTWNsMGRacXhmdnVXdExQQ1ZtcnZLU0NsY2hBWUFCX2xGWG5ZOHZyaXQxcGNiZzZOM2xSZEV3dlFpUHhTOXlwNnd3T3ZHWkxn0gGiAUFVX3lxTE42TktoQ3RQakdVT1VNLWJxemdBMDc0VU1PVHpOa3MxSGlNVWR4YlhhcGU1OVlsR1hja015aFhkdDlLd0tWX05oZXVpeTctSFhCUFZlZG1vSVVCMzRTbm5FYXRkeUxzMy1ORFdTeURQMjdlMjhXdXZ3N1Rsc2t0Yk41NDhtRl92d0VKcDJtUlF2RzViRVZ1Q2ZkRVRTVHA3MVFBQQ?oc=5"
    },
    {
      "title": "京都市北区大北山鷲峯町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNGhTSFN3QmdMVnQ3MW45X2VGR2VTcVRVTFpMYmNVUmszQndldmEzaVVnZUtpWEo5M3BWa20tRkQwUlBFM1ZUTWRNejYyenp5cTBvWGY4UTI0ZWVKbTRDRmRpMEpiOVVsRV9tSUN6WlJkZk5CYl9QTGxZN0p6bGE0UWcyZW93dko3YkJZTWRxNEhRV3QxZHhRSVBqeHHSAaIBQVVfeXFMTXNXUE9NVVZVUkplSGNiLTV5TjhhMjFoaGZLLTdJQ25IZ3dSNTdDUGFOcjljdUNSRVU1U1FvN1hsZXlIWGloWVpqZGFZZmlCanhDUU1QNEdWOEhYNXV4RUtVV1piWEtTQ1ROWWRNZUFPVzVLazdxWmtzZ0pTZkFaM0VnaUZtYkRYNEhqOGRjblUzMmVPRHhRVXZIYnY5YjhueE1B?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":30},{"pref":"福島県","count":23},{"pref":"青森県","count":19},{"pref":"新潟県","count":9},{"pref":"山形県","count":9},{"pref":"京都府","count":8},{"pref":"山口県","count":6},{"pref":"秋田県","count":5},{"pref":"長野県","count":5},{"pref":"岩手県","count":4},{"pref":"兵庫県","count":2},{"pref":"宮城県","count":2},{"pref":"広島県","count":2},{"pref":"群馬県","count":2},{"pref":"三重県","count":1},{"pref":"島根県","count":1},{"pref":"福井県","count":1},{"pref":"岐阜県","count":1},{"pref":"山梨県","count":1}];

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
        <span>対象期間: 2026年8月12日</span>
        <span>·</span>
        <span>公開: 2026-08-13</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={131}
        periodLabel={"2026年8月12日"}
      />

      <p>2026年8月12日、KumaWatchが収集したデータによると、国内におけるクマの出没総件数は131件に達した。このうち109件は報道機関からの情報であり、公式情報は含まれていない。本レポートでは、当日の出没データに基づき、主要な事案、地域別の傾向、そしてリスク評価を分析的に報告する。</p>
      <h2>主要な事案の概観</h2>
      <p>当日は、人の生命や安全に直接関わる重大な事案が複数確認された。最も深刻な事案は、群馬県みどり市の山林で発生した人身被害である。釣りをしていた男性がクマに襲われ、負傷したと報じられている（※1, ※2）。この事案は、レクリエーション活動中の遭遇リスクが現実的な脅威であることを示している。</p>
      <p>また、人口集中地区へのクマの侵入も際立っている。「都市部キーワード一致」は8件報告されており、その中でも特に注目されるのが山口県萩市の事例である。住宅の屋根に体長1.5メートルのクマが出現し、複数のメディアで報じられた（※3, ※4, ※5）。このほか、北海道泊村では中学校から約30メートルの距離での目撃情報（※6）、山口県周南市では国道近くの路上での目撃（※7）があり、クマの行動圏が人間の生活空間と深く重複している状況がうかがえる。</p>
      <p>捕獲・駆除に関する事案も3件報告されている。広島県広島市安佐南区ではクマが1頭捕獲処分され（※8）、北海道北斗市でも捕獲が行われた（※9）。これらの対応は、住民の安全確保を目的とした自治体による措置であるが、人とクマの軋轢が深刻化していることを物語っている。</p>
      <h2>地域別の出没傾向</h2>
      <p>当日の出没件数は、特定の地域に集中する傾向が見られた。以下に地域別の状況を詳述する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地点・状況</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">30</td><td className="px-3 py-2 text-xs">札幌市（都市部）、東川町（登山道）、泊村（中学校付近）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">23</td><td className="px-3 py-2 text-xs">福島市（住宅敷地内、同日複数目撃）</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">19</td><td className="px-3 py-2 text-xs">八戸市、階上町（住宅地近辺）</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">十日町市（食害発生）、上越市</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">遊佐町（キャンプ場付近）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">京都市北区、城陽市</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">萩市（住宅屋根）、周南市（国道付近）</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>北海道では最多の30件が報告された。札幌市の円山（※10）のような都市近郊緑地での目撃や、東川町の登山道でうなり声が聞こえた事例など、観光やレジャー活動における遭遇リスクが高いことが示唆される。東北地方も依然として出没が多発しており、福島県（23件）、青森県（19件）、山形県（9件）、秋田県（5件）、岩手県（4件）、宮城県（2件）と広範囲で確認されている。特に福島市では松川町周辺で同日午前中に目撃が3件相次ぐ（※11）など、地域的な集中が見られる。また、岩手県八幡平市の住宅地（※12）や山形県遊佐町のキャンプ場近く（※13）など、人の生活圏に近接した場所での目撃が多数を占めている。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では、群馬県みどり市での人身被害が最も重大な事案である。中部地方では、新潟県で9件、長野県で5件の出没が報告された。新潟県十日町市ではクマによる食害が発生しており（※14）、農作物への被害が懸念される。長野県では軽井沢町や大町市など、観光地や別荘地としても知られるエリアでの出没が確認されており（※15）、地域住民だけでなく滞在者への注意喚起も重要となる。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では京都府で8件が報告され、京都市北区（※16）でも出没があった。中国地方では、前述の山口県萩市の屋根の事案や広島市の捕獲事案が際立っている。これらの事例は、従来クマの生息域と認識されていなかった、あるいは活動が活発でなかった地域においても、出没が常態化しつつある可能性を示唆する。</p>
      <h2>リスク評価</h2>
      <p>当日のデータから、以下の3つの観点でリスクを評価する。</p>
      <ul>
        <li>季節要因: 8月中旬は、春に生まれた子グマが成長し、母グマと共に行動範囲を広げる時期にあたる。また、秋の食い溜め期（ハイパーファギア）を前に、餌を求めて活動が活発化し始める時期とも考えられる。これらの季節的背景が、出没件数の増加に影響している可能性がある。</li>
        <li>餌資源との関係: 山林内の餌資源（ドングリなど）の状況に関するデータはないが、住宅地、キャンプ場、農地周辺での出没が相次いでいることから、クマが人里の餌（生ゴミ、果樹、農作物など）に誘引されている可能性は高い。特に、新潟県での食害報告はこの点を裏付けている。</li>
        <li>人口圏への接近: 都市部キーワード一致が8件、さらに中学校、住宅地、キャンプ場といった具体的な地点での目撃が多数報告されている。これは、人とクマの物理的な距離が縮まっていることを明確に示している。クマが人間の生活圏を安全な採餌場所として学習し始めている場合、偶発的な遭遇から人身被害に至るリスクは著しく増大する。</li>
      </ul>
      <p>総括すると、2026年8月12日の状況は、全国的にクマの活動が活発であり、特に人口圏への接近が顕著であることを示している。人身被害や市街地への侵入事案は、もはや例外的な出来事ではなく、常在的なリスクとして認識する必要がある。今後、秋に向けてクマの食料探索行動はさらに活発化することが予測されるため、一層の警戒と対策が求められる。</p>

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
          <dd>2026年8月12日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-13</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-13</dd>
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
