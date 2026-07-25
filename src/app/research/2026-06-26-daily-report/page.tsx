// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月26日 / mode: daily-report / 生成日: 2026-06-27
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-26-daily-report";
const TITLE = "2026年6月26日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月26日、国内で280件のクマ出没が報告された。富山県南砺市では工事作業員が襲われ重傷を負う人身被害が発生し、青森県八戸市では市街地に出没した個体が緊急銃猟される事案も確認された。全国的に人間の生活圏への接近が目立ち、高い警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-27",
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
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
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
      "title": "下水道工事の撤収中にクマに襲われ男性重傷",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1tUTlpbjljZU9zaGNyeTEzSmt6aVZHVWpwMWhQcmlRZmZzNE9pdW9pZnAzcHhGQ0RKZTEwWGtLenRWTThFRHhXclFYbw?oc=5"
    },
    {
      "title": "クマに襲われ50代男性が負傷",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5BVnBmWlN6UkVlQXEzcnVTYTBDRVpsc2J5N0tWVXRvMXN0bFN1YW9rQ2RVemI1Q2J6OFI1QVZjOGR3M3hVX3ZGUG1MM1ZzUXBOX2w4WGxrSnR3Mk13SEd0UG9EMFc?oc=5"
    },
    {
      "title": "八戸市でクマ1頭を緊急銃猟により駆除",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9vdVB0N00wZ2sxNlZlSDRfZXhWMVBEQjhyOWZ3Q3doSEZyendsZ3FXbU1jM0lPeTFSRTRHRnB4aHl1bjBiRGZrRkVNQk42a1FRb1h2WVRHaXY?oc=5"
    },
    {
      "title": "海岸付近で緊急銃猟により駆除",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9idDdqQ1FDR0VIa0lRazR2OWVLVVhRTGd4RlJrS3h4eDdsTXg2cmR0N0dBY3M1YU0tZHlFaTRYbG83Zy1CYUhEZnd0LXd4LU51Q1BhSENmaTE?oc=5"
    },
    {
      "title": "鉄鋼製造工場敷地内で緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OZ0RDcGFvcENxWERFOUY3dGZDSGlrSFlaZU8wdlJtN0JtRmZQeVNBajg3Z2lQUnJNWVpSVDAxcDd6WjRsajliZVVUNDFWYnBVTDg2cnFFc3h1UW9xWmpia3VQY1NZQXBGNWhoek0wUmRmWExlalpWaWJSUWxnTXc?oc=5"
    },
    {
      "title": "中心部でクマ目撃 小学校付近",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE02UFB1S2VGdmJJUzAxZzRRZG9hNEZNdTNUY2cwaWJpXzB2VGZUaVd3bXRrb2czU1hyVGVCX0o4ODlZeWl2Xy1STTNNbHBTNThyVE5IWVFXZjA3VEpJQk5Id1puUGdYUk00TXNMbWZtcUFJZkZFamFJZ0lBQ2xObjg?oc=5"
    },
    {
      "title": "小学校運動場でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE45SUhhcXZLdVFnTmNleDhXeVc5VW5Bd3hjU2RkRWFsaVJvOHpBb0pRUHhuSU9YaGRzYkJkb2ctVFVERzVyQ3Npak1WUQ?oc=5"
    },
    {
      "title": "玄関開けたら道路にクマ 10代女性目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9RdnBhcTRqZnp5NXlGTEJYYnNzOTBQN0RlcmE5UF9uOGcyVWhSVk93NXpvSXZDY1dYTERXdDZiVkIxSE92MW11ek9yanRZZHZKVUpjQ2ItbmlJcVdrUGpZQWVn?oc=5"
    },
    {
      "title": "町の中心街でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE4zQUdwMG4ycndTLU1kQ2dkZTJYUDVqdWJhSV9FS19rRE15TW9pSlVYazhjelF6YlF1aXJ5M2xiVVJRWl9mTGJlMEgyZjdUd0M4R1Q5bjk2clB3d0piMTFn0gFkQVVfeXFMUElSR2Y0dG9vX0hNVmpnaEVjdFVubXdGa0tpZ2I2dm43OHRCR3VwandEejJJTUNGSDR6OWpKZUFZY2Z5WEk2MG9hMVZJdDcxWmpmX1Q5a1R2UFpoVVRUOThkb0xqSw?oc=5"
    },
    {
      "title": "南区定山渓でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOHFudVE0b1pfYmMwNkRQTXhGTG5mZmNYWmVTdWhxX2RIY0Nab1NidUxkSlQ0bi1wVUIteDR4czl4ZnhZbWxNNDJpVF8yQ1pBeXFfdEltOGxKN3FFZVFmX2o1bTZ1UkNuV0FveTh1WTFSR05valVxaE4xMGU0aFlXVndlUDNvTkI2VHpnUnRvTC1KaFlDUzd2SDNoSnHSAaIBQVVfeXFMT19EVEJVVnQwdWhPWVY4OWhNcUxLMkVkbC1ZclBtRm5yUTg3YlZTODdfZE9ud2lhYlhoLTR0OG5EeVg4d2hZWE9Dakk0TFZ5Q2VTQk5CWVQyZi1HZ1hZUks2d0xhNVlLQ09HTkpXRlI0azhnMy1mLV9zNUZ3eWtkUE1YZ2tjeFNSNXg2YkF5ell1VXl0ZTlyWHpPU2ZtOEt2TjFB?oc=5"
    },
    {
      "title": "小学校近くの公園でヒグマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1PVWNEYUc2cTE4a3hlMmZZUW80b1ZWd2FZSnpMVXhwdHVrMUF2bGJwQjhER0gxZUFQaUNrWmhyN0FvXzRnZGxLbmVSMmFaSlhsWjFaMlM3VkI?oc=5"
    },
    {
      "title": "大沼公園IC付近の道道で目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBNZ0NGZG5wRzlGeVNHbGF1TVF5V0VWaUxFX2ktYTVlWk1wWTlhSmRaYno0akVmNnhzVW5LVm40XzNKNmNpQUxZMF9qaEZwRUVyaGdHWHFKRndGZw?oc=5"
    },
    {
      "title": "御殿場公園付近でクマ3頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5iemt6dGxQWFc5MTlNeWVjVTkybjU1QldjT1Y0V0hlSmdfOXU4QkJud1c0S0hiM0locnNBWmJ0U3hPejhSUFJIY0RVSlRncWNFR2lNOTFNSmdyYU40bVZzcE1iZnV0MXktNElDS1BJMUIzZlMtb2lxbnFR?oc=5"
    },
    {
      "title": "御殿場公園付近に熊3頭が出没",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9RMTI4bk5tMW8xbHZLblRyX25HalV4c2NPX1d1cldyOVNfaVBCYWw3ZWNtZVUxaExmUHBWOXN4ZXZiZUZwX3ctM0pXV2xuZ2Vpd2lKY2NGZXcwX2oxMUk1TGJhY2pUcFd3REExZ0I4YlhQMXFJaXRsQjNBSQ?oc=5"
    },
    {
      "title": "新里町新川・国道353で目撃",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1ZWDhyaWFzNDFWZER6SjJQbjAtLXVuZVhxQUYxazJoNWRtSE8ydlBmb2Y3RE5xSWZ2UkVNR0dtT3lWSWpvak91V1BmTWdiWWZ3NUVCMy10QW9sWTZVZVE?oc=5"
    },
    {
      "title": "鹿沼市上粕尾でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOajJ4dC1pcHpTVVRsLVJDelRKWkd2UFd4eDJZSjFDY0d4T05tSGZaVlpQNlJ4SEpJWml4RlBSV3BMaG54M205N0ZNQnpsdFRTOV85ZHFUZHZrZ1ZGN3lUTVRQbmNzelhUTHBwN05ZX0d4MGIxbWZwbzZQeUI0RkNBWVpFWXlTLWlWTjRQeFFtUWsxRnlsSEZDMDRJSjPSAaIBQVVfeXFMUG9TeHFabVhhNlNpcFVIc1BybVZtVklWWFd6M0NzNVRlUzNBbmdIdGhYYzNhWHNhdHhxM3VXRHJJZ0xGS19RQndLVUNTVkxvaERCQ3pPczJOSk5FT29FM0p4czc3Ylc3MV9hSHd1aXFYbGtyZGxyX3Q4YXdGMm4zbGYyNkwtb0R0VW9GaURxcW52N2ZSZU1nX2xfc25MR0pUVXJ3?oc=5"
    },
    {
      "title": "民家近くで体長約50cmのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5tWkhVUnY4aWFXdFFxS3p6bU9zOVBScHhTaUZfUmE4OUlRc25ySjlUcl84X1M5VXVfZFZhMUlhMTNZNTJueFVpMnVGUEM1dnUwVnlYdzZOZjhpTmJnYThwd1FXLVQ0cXpybUx3cl9LN0g2YmNVaXhpdENXZmItXzg?oc=5"
    },
    {
      "title": "県道上に体長約1メートルのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBZUXlfUHJQSmpoNDhBeHo4TGZDeVNwOFR6M2JQQVcxdTlyTmZMZElrcS1OalZ2MUVDdmVXcmhuQmVwT0FGRjVwQjIxWk9pNWxYWWhXX0FNekRMcnRDRGxiZXlYZ0JwUVVSWnJxbTVEVlBYQkdfWVJVZVNPc3FoZGs?oc=5"
    },
    {
      "title": "久美浜町大井でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQ2c0aDJtUnJRRm80TzdKSkJuR1NOaVdpenRDbktsYzNTa3dpSHJNcjN2UTJBeUluSEpPMm5xMEtvUll3TVhaVmdONE5pUHg3MjRaZEdTN1g5eFNIRDBHelRQWWt1QUJDTTZmSVVlR3RiM19YOWJEc1Q2ZlhWWmRWbjExRUt0UVJob3c3LWEzWHRESVB5ZU9PcFBZSEnSAaIBQVVfeXFMTlpLenA2Ymdqd21ZOGxtcHJTZVN6ZF80RkgxMHBSeVNzSWo5Mi1Rb0NHeGk0d2Rmdzg1a0hwR2NiYVBvZlB2UW83MFQ2eHhWRW5XY0dYVmlHZkJtV0dBZi05aF93d3dwV256R3FfWnNxRGFXek9LOWZycU5YeDlpZVFXM3djSjZ5V0RLS0s4THV5OE5vRmZKTVpvSnVvSGt5SkVB?oc=5"
    },
    {
      "title": "安佐北区の旧給食センター付近で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE8taFBfVm8yRjVYU09GeWE4cjg2M3VySU43VTczNm5YRmFNVGVBWEs1VGtRWmI2dWNLc3Y5bUdYZm1UT25EdjNrMXNfUQ?oc=5"
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
        <span>対象期間: 2026年6月26日</span>
        <span>·</span>
        <span>公開: 2026-06-27</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"福島県","count":48},{"pref":"北海道","count":46},{"pref":"秋田県","count":37},{"pref":"新潟県","count":36},{"pref":"京都府","count":25},{"pref":"山形県","count":20},{"pref":"青森県","count":19},{"pref":"群馬県","count":17},{"pref":"栃木県","count":12},{"pref":"島根県","count":12},{"pref":"富山県","count":10},{"pref":"長野県","count":7},{"pref":"宮城県","count":6},{"pref":"石川県","count":5},{"pref":"鳥取県","count":5},{"pref":"兵庫県","count":4},{"pref":"広島県","count":4},{"pref":"福井県","count":3},{"pref":"岩手県","count":3},{"pref":"滋賀県","count":2},{"pref":"山口県","count":1}]}
        total={322}
        periodLabel={"2026年6月26日"}
      />

      <p>2026年6月26日、KumaWatchが収集したデータによると、日本全国で280件のクマ関連事案が報告された。出没件数は福島県（45件）、新潟県（35件）、北海道（32件）、京都府（25件）の順で多く、広範囲で活発な活動が確認された。これらの情報のうち261件が報道機関を情報源としており、公式発表は0件であった。特筆すべきは、人身被害を示唆するキーワードを含む事案が10件、都市部での出没が13件、捕獲や銃猟に関連する事案が6件確認されたことである。本レポートでは、これらの事案を分析し、当日の傾向とリスクについて報告する。</p>
      <h2>主要事案：人身被害、緊急銃猟、都市部への接近</h2>
      <p>当日は、人々の安全を直接脅かす深刻な事案が複数発生した。富山県南砺市では、下水道工事の現場で作業員がクマに襲われ重傷を負う人身被害が報告された（※1, ※2）。桜が池付近の工事現場で、撤収作業中の50代男性が被害に遭ったとみられ、複数のメディアがこの事案を報じている。</p>
      <p>青森県八戸市では、市街地に近接したエリアでの対応事案が確認された。河原木地区の海岸付近や鉄鋼製造工場の敷地内に出没したクマ1頭が、緊急銃猟により駆除された（※3, ※4, ※5）。通常、クマの生息域とは考えにくい工業地帯や沿岸部への出没は、行動範囲の異常な拡大を示唆している可能性がある。</p>
      <p>さらに、全国各地で都市部や人口集積地への接近が目立った。宮城県富谷市の中心部や小学校付近（※6）、石川県加賀市の小学校運動場（※7）、秋田県秋田市では住宅の玄関先（※8）、埼玉県では町の中心街（※9）での目撃情報が報告された。これらの事案は、住民が日常生活の中で不意にクマと遭遇するリスクが高まっていることを示している。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では32件の出没が報告された。札幌市南区定山渓（※10）や函館市の小学校近くの公園（※11）、大沼公園IC付近の道道（※12）など、観光地や都市近郊での目撃が特徴的である。ヒグマの行動圏が人間の生活・レクリエーション空間と重複しており、注意が必要な状況が続いている。</p>
      <h3>東北地方</h3>
      <p>東北地方は全国で最も出没件数が多く、福島県（45件）、山形県（20件）、青森県（19件）が際立っている。前述の八戸市での緊急銃猟に加え、福島県喜多方市の御殿場公園付近では、3頭のクマ（親子と推定される）の目撃情報が相次いだ（※13, ※14）。宮城県、秋田県、岩手県でも広域で出没が確認されており、地域全体で警戒レベルが高い状態にある。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県（16件）と栃木県（12件）で出没が集中した。群馬県桐生市や沼田市、栃木県那須町や鹿沼市などで、国道や県道沿いでの目撃が報告されている（※15, ※16）。また、埼玉県では町の中心街での目撃があり（※9）、関東平野部における都市圏への接近事例として注目される。</p>
      <h3>中部地方</h3>
      <p>中部地方は、富山県での人身被害が発生したほか、新潟県で35件の多数の出没が報告された。新潟県では上越市、妙高市、長岡市など県内広域で目撃されており、民家近くや県道上など、人との遭遇リスクが高い場所での情報が寄せられている（※17, ※18）。長野県、石川県、福井県でも出没が確認されており、中部山岳地帯から平野部にかけてクマの活動が活発化している。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府で25件の出没が報告され、特に京丹後市に集中する傾向が見られた（※19）。兵庫県や滋賀県でも目撃情報がある。中国地方では島根県で12件が報告されたほか、広島県広島市の安佐北区では旧給食センター付近で目撃が相次ぐなど（※20）、特定の地点に繰り返し出没する個体の存在が示唆される。鳥取県、山口県でも出没が確認された。</p>
      <h2>リスク評価</h2>
      <p>2026年6月26日の出没状況を分析した結果、以下のリスク要因が考えられる。</p>
      <ul>
        <li>季節要因：6月下旬はツキノワグマの繁殖期にあたり、雄の行動圏が拡大し、通常は慎重な個体も大胆な行動をとりやすい。また、春に生まれた子グマを連れた母グマは、子を守るために極めて攻撃的になる可能性があり、遭遇時のリスクは非常に高い。</li>
        <li>餌資源との関連：山中の餌資源の状況は不明だが、人里の農作物や生ゴミ、放置された果樹などが誘引源となり、クマを人間の生活圏に引き寄せている可能性は否定できない。一度味を覚えた個体は繰り返し人里に現れる傾向がある。</li>
        <li>人口圏への高度な接近：当日の事案では、公園、学校、工事現場、国道、市街地中心部など、人間の活動が活発なエリアへの出没が全国的に確認された。これは、クマが人間を恐れない「アーバンベア（都市型グマ）」化の進行を示唆するものであり、偶発的な遭遇から人身被害につながるリスクが極めて高い状態にあることを示している。</li>
      </ul>
      <p>以上の点から、全国的にクマとの遭遇リスクは非常に高いレベルにあると評価できる。住民や事業者は、屋外での活動時に最大限の警戒を怠らず、自治体が発信する最新の出没情報に注意を払う必要がある。</p>

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
          <dd>2026年6月26日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-27</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-27</dd>
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
