// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月8日 / mode: daily-report / 生成日: 2026-07-09
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-08-daily-report";
const TITLE = "2026年7月8日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月8日、国内で182件のクマ出没が確認された。人身被害の確定情報はないものの、青森県八甲田山で関連が疑われる事案が発生。特に東北地方で出没が集中し、仙台市など都市部の住宅街での目撃も相次ぎ、市民生活圏への接近が顕著となった一日であった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-09",
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
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
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
      "title": "八甲田山で男性遺体クマ被害か",
      "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBaa3AtWEFRa0RhanY4MGhaaWtPTlI2V2FfUWxhYUpVVmpSWGNzUWNrTnZtd3FKSFB0VC0yaGJiNEdNaU02NWVWTG1PblNHXzZJM2c?oc=5"
    },
    {
      "title": "宮城野区の住宅街で立て続けに2回出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9JandXbGR4UEZhWlgydmN3LU9NT0JueElnVDl5N3Vrc09wMUNPR2Q2cU5aajdJVVZYMUVQUUFwQ2t3dURMUDV4STRFV0pEMFFIRXQxVWFPako0ZkhITHpLdFhkN3dvQzd1d0lIaGxHTHRMR0FGbWRwZnMyVTdiMkk?oc=5"
    },
    {
      "title": "宮城野区原町3丁目の住宅地で立て続けに目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5HYm5pRXROd2d0dWNURnozMFB6bzFIUktfRURrMUtmampQbEpVNklMUF9zdE1lel9BcVRqYXNFa1ZmYlFZMExNVDhnMjk2cmtveTAxbWdsaXp3LW1rNnFjX24tbXdnTUQ5VHZpRGhVcXJSd2ZMWUJzenFHeDlJUFU?oc=5"
    },
    {
      "title": "深夜の住宅街にクマが出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE40cVByc19mU0g0bWNDTzNrOXNTTlRINWd2cUJaelZFejZ1WG94U20yTE53S0QtS3NOOU1xUm95T0NxbjhOUWtneDNVRE1ta1Nxd0VxUlNhSTJKdWtJVGNJYm04alVCa3JKSk9TM3ZXMmNDQlR5RFA4amp4UGszOW8?oc=5"
    },
    {
      "title": "市街地でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCT3o0UFZYbW5mT05UM1ZjbjdhOEYteXZoak50S1lxWWNySUtERG5ld2I5NVBDaFo1bkhhdzN1UnR1U1FXYnhwS3NMZThhXzhtRUROUzVSa2pkOHAxd1VqNzVaMC1RVVJ1alp3YkJOODh3dkIyVmdqSUtySW8zRVU?oc=5"
    },
    {
      "title": "住宅密集地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBtSGV3Q0JLdFFhc2ZNUUQ5dFVreWJ5N0FDN1pIYlBwenpRX2FhNjczMXlDTzNGRlppNkp6enFWWWhFZUxy?oc=5"
    },
    {
      "title": "グリーンハイツ１０丁目で出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV011Vzc3bFZibS04WnpLcWo1ejI5MG5LM1NQbzF4MlN5MnhFTmNWOG1tOTZpUEJFOVRTVWd3R21qY1M3MUxKbTE4b0ZCc25jM1NHek5uc2pHcVZEOW5VWEtpZHY4LWlUZy1VOFFXYWtOV3BiSmpNaGJfbkFQNTBadnZUSFdqMEtKcFM2WnEyLVdWWWpnUldNSFgyTlDSAaIBQVVfeXFMT1VVZnB5WjlkWGxfYjFBLVFmZVJ3MF9KMWRmNXp5OTRJR2lHOXFvQlVRa1NUbXAxeWZQcmR2cXlnYUF4TGQtTG5mNERFalNuS2Z6NTRJQXFUOVZXakhia2NfZ1luYTJDT1dOdXpFbkRsaFJfbkJUTnlUdWRTMm81cS1BYXo3LVU0Mk9GOVRmVXJ0RVNVYWx4Z0c5ZjhrXzdpTzl3?oc=5"
    },
    {
      "title": "学校駐車場にクマ",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE11dHlQbVVqMGl0dDNzSTlubVB2RlF5aUdmRzdKdkVzRDZvd0txeXh3WTZ1UGdyb0xNQXFwSXlFQU9lSktYVjY4aDdaTUxPcDJCRF9FVjBmaTExME0?oc=5"
    },
    {
      "title": "小学校近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOZXpPX2UwOVlzNGxsMTJMdkdmekxJTzZQMjktQmtkU1RDTWw3eFJTamRqUnJtU2hSbzJycXYzczduNko5a3VWcUlhcld3bTExbFlDb1NEQ3BQME8yTW81SVFFU1NkX1JCVEQzLWJLVmJORU9obThDakNHQ2d6VXZqeFRRUWlTdjQ?oc=5"
    },
    {
      "title": "升形小学校の裏山に子グマ",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1EN3ZpZ3NMZmNXc2NiYVlicnpjLVp6MmZBOVZrdmVlOVJEaWJRUUhwMi1ZSmxfTWhSWlJCRUczQ19JTE1MS2YzZFBEa0dWMHVxTlcxMGV6VlJySXVMLUJoaDYtOUl2MDBKSXBidFNmZmFkY00?oc=5"
    },
    {
      "title": "公園内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9Jd3lwbERTNllyakNzRERQVDNIWG5rVGtOazZUeWp3OVVwNDlWXzZMbjBkb2tlQjZSeUliVFByUUMxWkRaYWtPUHJHMW91RHZZVVF4MDNTRW9HVTh0eEFtRUZIckhxc1dfUzFBSlE5TU5QTU9pMk9CV09yOVhLMGM?oc=5"
    },
    {
      "title": "民家敷地内に体長約1メートルのクマ",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOQ0x2M2dxVllaRDhWdkFXU3paTk10bFU4c3VYRXVzZXl0QjB3VWkwc0NIdXZ1aW53a3RaMDdWVVoxbWg4eGVENDJFVlh2TEFEeURJaHZFaXdYRFpGbjVPSDMxRkZjekRKOVlBN19NbTk1QVZXQnhkSW9rX2J0dUhWUGRBNVBOQVVVUHRaazFLbm54SXo4elJRX1kzMllaZGg2ZXdBeGVnYjIxbVRWZHlMcU11QzRJd3BtenJIWC01QUwzc0FmT1hlTlUyX1Jzd05C0gGAAUFVX3lxTE1sa3U3X3VHQkpEZHV1RWpsdGpERWhrcWFrR0VfTTZXMDNreVI5NXg0UllMLWhBMldEWFpGMHhxZnVMamhFSzR6UEgyeWVsNHoxX0JPRU43dDlIeUNBa2hPd3ZNQW9UR1h4bDNFb0ZScmVFeFkxOWlmcXlSdXpmSkVn?oc=5"
    },
    {
      "title": "道路を横断する親子2頭",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNVjBXQTZ5ZTBUT0dNUGQ2OUpzaHJtZ2p6Mm1tMWdDYy11ZDNWZW1OUTdjTzA2bGkzWXljT2hEcmVmNlpNalpsQ0xIcnNxUWlmU3U3akN0VHhhZk42dGNmUHFfZ1RkdnJxclBpWHVCenJUd3RISG9OQ3U0RzA2LWVEWmNVRGpuX2s?oc=5"
    },
    {
      "title": "別荘点在地域でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1oVGlYWmFWVWRPWTJNbGxONzhqOXJRY04wLUg2REVOWGVrajBEbUZmbWVSNUJCNVhJMVZjSVhTcWw0SmRw?oc=5"
    },
    {
      "title": "JA育苗センター付近に出没",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5haExtQWhQb1F1alMwbHhZN1ZWbjNEYlduUmt5YzVnOVZkVFc3cThVcTZ1RGx0eG5WWVIxOFVOTkdUZko3?oc=5"
    },
    {
      "title": "親子か、クマ2頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE91blkyVHZQcmZrcllBa0ZzSXFNTHF0R2dsYTB5QXZGM2NLcjhCSksya0tJMXd3ZGozNXNQb2xaMXRIUE9DME83YXJ5cVI4YnFtUGpZWUh5Tnd2bTJIWGk5QTFFaGpkbnl2X2hmU3FsT1hxejRvRm9ublJsUQ?oc=5"
    },
    {
      "title": "親子か クマ2頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA4QnNKQktCSHdBbm1pelhhOVE3NGlvTGFwM002QkhuUXBRckNJNnpHbnEtVmUtVXZqQ2puM1pycElfa3g1azRUTXB1SGR4akhLTUlUTThzTzNCZnRNemNRUWtIdElwYkp1NUlRSUptbXo5amg5ZUIwOGxrdG5BYmM?oc=5"
    },
    {
      "title": "クマ出没の可能性 (京都市西京区)",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQbnZHeXVPZ0pfcDk2UmlVenBTSnRQYTJkMHZ1cmlGVE55Z0hjU2cwRDQtMVp4QWRudk9rT0VmZ3V2UF90LWlJZ002UG04X2szaW1NZkRaWlV2VVN6TkREVWc3VG1ONjR4d2Z0azRIQXVFVTlTZkJIdmZSV2xVTlpVVVZkWlU5WkQxbDQ1WFZuWUJoMWt5R0pudUlsalpnMFVmcjBnR0VvdDJhdzQ4SWJF0gGiAUFVX3lxTE5rQTBFb01RMFZEeE0wMVpxTjdxeXlKQ3VNRjRidVl2MFR2MW1DUnlsOGY3a3hodVZnZDh1SHRJaXNqYjZmVUhWUHkxMU5TSXNaY3JCYkRsbl9heEtwbFJrZ1IxTXhFUmloajJGS1RfZ1J6TUpCenBlbkxJVzdSYTgybGdaYlMzOWxVcExGcFJuTUhpWGNuT3lBMUNSd0ZFS25Fdw?oc=5"
    },
    {
      "title": "ヒグマのふんが発見される",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPaTNLYzhrNTNtZGhQRDlFUll5LUtoY2lHMThrdmZfSWZLNFRJWEw5V1BxTkdVRm5XTDdzQkZfUUx1SHgxVUJVMGl0clJYU1hqX2ZDTVRaTnFWS2FOcUhIbmE3NURQQ0FxeWQ5Sm5Kb0RMcW5KZXFyVmNXS01tSFhaOU0wLWRWYjNYYnJBbVJNVdIBggFBVV95cUxOam56NUI4ejdEaVNqSHdWNDJQWXk5cGlrUXhpZWdoRTlYT2E0NWQ3M2VPeV9IZFhKUDNaQmhZYlM4MEppTV9Dc0JMZjZsakRob0puNnZQTXJKVi0tM2dsVFdoNHMyaHVHSjRCWDVQTTMweTJTY3FBV2hDcmNPY2JyZldn?oc=5"
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
        <span>対象期間: 2026年7月8日</span>
        <span>·</span>
        <span>公開: 2026-07-09</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"北海道","count":38},{"pref":"宮城県","count":24},{"pref":"福島県","count":19},{"pref":"群馬県","count":17},{"pref":"秋田県","count":17},{"pref":"青森県","count":13},{"pref":"新潟県","count":12},{"pref":"岩手県","count":12},{"pref":"山形県","count":9},{"pref":"石川県","count":7},{"pref":"埼玉県","count":6},{"pref":"島根県","count":6},{"pref":"京都府","count":6},{"pref":"長野県","count":6},{"pref":"富山県","count":4},{"pref":"栃木県","count":3},{"pref":"山梨県","count":3},{"pref":"岐阜県","count":3},{"pref":"兵庫県","count":3},{"pref":"鳥取県","count":2},{"pref":"三重県","count":1},{"pref":"岡山県","count":1},{"pref":"山口県","count":1},{"pref":"福井県","count":1},{"pref":"広島県","count":1}]}
        total={215}
        periodLabel={"2026年7月8日"}
      />

      <p>2026年7月8日、KumaWatchが収集したデータによると、国内で確認されたクマの出没情報は182件に上った。ソースの内訳は報道由来が166件と大半を占め、公式情報は0件であった。本レポートでは、これらの情報を時空間的に分析し、当日の出没傾向とリスクについて報告する。</p>
      <h2>主要事案の概観：都市部への接近と被害の可能性</h2>
      <p>当日は、人身被害が確定したとの報告はなかった。しかし、青森県青森市の八甲田山で発見された男性の遺体について、クマによる被害の可能性が報じられており、予断を許さない状況である（※1）。</p>
      <p>全国で「都市部」に関連するキーワードを含む事案が11件確認されており、人間の生活圏への接近が際立っている。特に宮城県仙台市宮城野区では、深夜から未明にかけて住宅街で立て続けに3件の目撃情報が寄せられた（※2, ※3, ※4）。このほか、福島県会津若松市の市街地（※5）、新潟県妙高市の住宅密集地（※6）、福井県福井市の住宅地「グリーンハイツ」（※7）でも出没が確認されており、都市型出没が各地で発生した。</p>
      <p>また、子どもの安全に関わる学校や公園での目撃も複数報告された。栃木県那須塩原市の学校駐車場（※8）、山形県新庄市の小学校付近（※9）、同県長井市の小学校裏山（※10）、山形県鶴岡市の公園内（※11）など、市民の日常空間にリスクが及んでいる実態が浮き彫りとなった。</p>
      <h2>地域別の出没傾向</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">主な都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">特徴的な事案</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県, 秋田県, 福島県</td><td className="px-3 py-2 text-xs">104件</td><td className="px-3 py-2 text-xs">仙台市など都市部での連続出没、民家敷地内への侵入</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県, 埼玉県, 栃木県</td><td className="px-3 py-2 text-xs">25件以上</td><td className="px-3 py-2 text-xs">山間観光地周辺、学校付近での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟県, 長野県, 山梨県</td><td className="px-3 py-2 text-xs">30件以上</td><td className="px-3 py-2 text-xs">住宅密集地・別荘地への出没、親子グマの目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">道内各地</td><td className="px-3 py-2 text-xs">16件</td><td className="px-3 py-2 text-xs">市街地近郊でのヒグマの痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西・中国</td><td className="px-3 py-2 text-xs">京都府, 兵庫県, 島根県</td><td className="px-3 py-2 text-xs">10件以上</td><td className="px-3 py-2 text-xs">分布域西端での散発的な出没</td></tr>
          </tbody>
        </table>
      </div>
      <h3>東北地方</h3>
      <p>全182件のうち、半数以上にあたる104件が東北地方に集中した。宮城県（24件）、秋田県（20件）、福島県（15件）、青森県（13件）、岩手県（12件）、山形県（10件）と、全県で二桁の出没が確認され、依然として国内のホットスポットとなっている。前述の仙台市宮城野区の住宅街での連続出没は、都市環境に適応しつつある個体の存在を示唆する。秋田県秋田市では、民家の敷地内に体長約1メートルのクマが出没しており（※12）、家屋への接近が懸念される。青森県弘前市では道路を横断する親子のクマが目撃される（※13）など、繁殖期を終えた後の母子の活発な行動が観察された。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県（14件）、埼玉県、栃木県で出没が報告された。群馬県では草津町、渋川市伊香保町、みなかみ町など、山麓の観光地や集落での目撃が中心である。埼玉県では秩父市大滝や皆野町三沢など、奥秩父山地に連なる地域での目撃が報告された。特に皆野町では子グマの目撃情報があり、母グマが近くに潜んでいる可能性も考慮すべきである。栃木県那須塩原市の学校駐車場での一件（※8）は、平野部への接近事例として特筆される。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県（12件）、長野県（7件）をはじめ、富山県、石川県、山梨県、岐阜県、福井県で広域的に出没が確認された。新潟県では妙高市の住宅密集地や別荘地（※6, ※14）、長岡市のJA育苗センター付近（※15）など、人里での目撃が目立った。山梨県北杜市では親子とみられる2頭のクマが複数回目撃されており（※16, ※17）、周辺に定着している可能性も視野に入れた対策が求められる。富山県南砺市の利賀村では、子グマの目撃と同時に母グマと思われる鳴き声が確認されており、遭遇時には特に注意が必要な状況であった。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では京都府や兵庫県、三重県、中国地方では島根県、広島県、山口県で出没が報告された。件数は東北や中部に比べ少ないものの、ツキノワグマの生息域の西縁にあたる地域での継続的な出現は、分布域の変化を監視する上で重要である。京都府京都市西京区では市街地に隣接する大原野地区で出没の可能性が報告され（※18）、都市近郊林での警戒が必要となっている。島根県浜田市や益田市、山口県阿武町の国道沿いなど、山間部の人里や交通網周辺での目撃が中心であった。</p>
      <h3>北海道</h3>
      <p>北海道では16件のヒグマの出没情報が寄せられた。余市町梅川町や滝上町滝ノ上原野といった農地や山林に近いエリアでの目撃に加え、北広島市ではヒグマの糞が発見されるなど（※19）、札幌都市圏近郊での活動の痕跡も確認されている。ツキノワグマとは体格や習性が異なり、より一層の警戒が求められる。</p>
      <h2>リスク評価</h2>
      <p>総括すると、2026年7月8日のクマの活動は、全国的に見て極めて活発であり、特に人口圏への接近レベルが非常に高い一日であったと評価できる。以下にリスク要因をまとめる。</p>
      <ul>
        <li>季節要因：7月上旬は、春に生まれた子グマが生後数ヶ月を迎え、母グマと共に採食範囲を広げる時期にあたる。全国で親子グマの目撃情報が散見されることは、この時期の行動特性を裏付けている。子を連れた母グマは防衛行動から攻撃的になりやすく、人間との遭遇リスクは極めて高い。</li>
        <li>餌資源：山中の木の実などが実る前の「端境期」であり、より容易に得られる餌を求めて人里へ誘引されやすい状況にある。農作物、家庭菜園、果樹、あるいは管理の不十分な生ゴミなどがクマを市街地や住宅地へ引き寄せる要因となっている可能性が高い。</li>
        <li>人口圏接近度：仙台市、会津若松市といった都市部の住宅街や、全国各地の学校、公園での目撃は、クマと人間との物理的な距離が極めて近くなっていることを示している。偶発的な遭遇から人身事故へ発展する危険性は深刻であり、早朝・夜間の外出や山林近くでの活動には最大限の警戒が必要である。当日のデータでは捕獲や銃猟に関する情報が確認されておらず、多くの個体が依然として地域に滞在している可能性がある。</li>
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
          <dd>2026年7月8日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-09</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-09</dd>
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
