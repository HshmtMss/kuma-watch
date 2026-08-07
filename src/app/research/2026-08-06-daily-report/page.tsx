// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月6日 / mode: daily-report / 生成日: 2026-08-07
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-06-daily-report";
const TITLE = "2026年8月6日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月6日、国内で計55件のクマ出没が報告された。人身被害は確認されなかったものの、群馬県桐生市の市街地や岩手県盛岡市の公園など都市部での目撃が4件発生。鳥取県では農業被害を受けていた個体が捕獲された。北海道、東北地方で出没が多発しており、厳重な警戒が必要である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-07",
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
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
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
      "title": "群馬県桐生市 市街地・小学校北でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1FRDAyRUVzdVFfTC1zX0FORDVJMWJiUmNvd3dZWDc2d1hvOGNnbjB3Uy1VbFpkUEd0UHQ0TkZGeGVMaEJ6cmViX2l4R3RVQU1va3NGdHV5Z0lfUkRNUlE?oc=5"
    },
    {
      "title": "群馬県桐生市相生町5丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMzltM0lqV2k3ZWY5ZU5fQ1FpNmFlQkNhaXpwQk5nMkJIRWdsVEQwVEFuWTFGa3F0bmZEX3N5VWh6Q3lmUGJBWVlSOVRqNFdMVDlLUXduY0FSV25hNzU5SmlrN2JYQ05KWVB5Z2Z6UGVpRUx2LWZRTHdlSjdfckl0bWV4V21BZXlmSklwXzlyLWhDTUVjZk9VOGl1bTLSAaIBQVVfeXFMTV9JaTZQd0NVRldWZTRxaV91bXNTN0JWS1c2QkJ1OGZCZkk0eEtkVkhOcDNQWmtxYnFDcEtidnd2WEVMMmxvc241bm1nSWZONzMtX0FRZFZjWVNGS3B0Nk9QNUNwMWhSV1lrNE5tTms4OXY5Smo4eUhTM01tNkdRaE5feGJXeV9nZ0ZYcGU2TFRwRFBzSnpyWmZMZS1kUUdNNmVn?oc=5"
    },
    {
      "title": "岩手県盛岡市 公園でクマ目撃、周辺に小中学校",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFB3VTl3XzRzNElJVzBzLTVZS2ZCbnVYeWFqNlI1N1FUX2Q5Um45N2NTRTBrQlU0SThxY00xU3cyRXVjUnB1Zk5wRmI5Zkh1WjRSdWlTYVQwRm5rM244RC13?oc=5"
    },
    {
      "title": "岩手県盛岡市 ゆぴあす付近でクマ3頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE0zck9ELTRkcTBHNVNIZF84ZnExc0l1TlJiZUlzUnNjeldIUlQyWUFVMWx0QXRBNFZPQUpERmF5YlFleFlSVGlkTUZaVFQtenUzZzdHYjlzbWdYaWZkYmRF?oc=5"
    },
    {
      "title": "岩手県盛岡市 松園中央公園にクマ2頭",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8teGZoN2t5S1NoRWdub3V6UGdKS2cyZTcwTkVxWUh5eHI3SkRHSkpqdEJKektCakQ5TzRiOFc4aTBuVlptNzdWbEtRR25PTzR3MmJnY0RoSlA5dkExNDBQZHZxbXdxVUItNjZjUWZibXdVeWwxMFlLNEFxbmRzSzA?oc=5"
    },
    {
      "title": "岩手県盛岡市 東松園二丁目で親子グマらしきもの２頭を目撃",
      "url": "iwate-morioka-mymap"
    },
    {
      "title": "鳥取県鳥取市 梨の食害などの出没地点でクマ捕獲",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFB6eXpYOWNqaWxaUUlEaGFnZ1o0dmk0b1JSRzM0cFJEeWthUW5CSTBKMTNQZ3p2LXVvX2hRcVNpMVFROEowazFlX1VHQnNzOUho?oc=5"
    },
    {
      "title": "北海道旭川市 トウモロコシ食害と足跡発見",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9hbDNmTUlVREtyeERsZFI0YnIyZUFkREtFZzI0b0w1bEtISFA4WldQT1ZYb2hVbWljOEh6OGhsek9RVUdvNlkxSi1sMjdJZThOTndkTHZBYko5VGhpSko2bk9abkliNXNkeWZnbG13?oc=5"
    },
    {
      "title": "北海道湧別町 クマ2頭がデントコーン畑に侵入",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1tRmRzSk90SE5VTnVQNzJMdV9zUlkzenUzTTlSc1drUV9NcFQwUjdlOXlsanpickpXcnVOUUZmb2NxSWZUckJQYlJ2ZW03QQ?oc=5"
    },
    {
      "title": "北海道湧別町 約1mのクマ2頭が畑に侵入し目撃される",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBHUGN1UFNYaE5iemRUOV9RQmZBY2JiRHRNNWw2LW1HaklqRlQ1QVBhUFU0RE9iWVFnNEo0VXViX3hqZkVVb0pKY3VWUE4wQTVfY3F2VjlCcnY3NE9nWnhabURQREQ4aFdPSmxUX1ZhQjJLcGNReVJZWFFpY3pMMkE?oc=5"
    },
    {
      "title": "福島県会津若松市でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5pdVhMN3RuY2VrOTFsUE5QZDE0NUxDSks1cExrd2U5azRDRXMwUVd1UTdzTlZUOHRiQ3FuWEZrUVQyUGxPS0oyNDd2RTFHdw?oc=5"
    },
    {
      "title": "福島県会津坂下町でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1hX21LN25MUTZHcHYyeGhGa0syeFhXbkpWdnRNMUFtVTBPY0FNTEJqa05yLXBmVnVZUjE5bmFFVTZPOHpoeWNZWEExWTVNcmFtdWVTbGFBUk14a1BkSXFIOVhWRXZNRWQ2OWZiTzJmSXRGVl9yR1Y1ZA?oc=5"
    },
    {
      "title": "福島県郡山市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFAzYlVXZXpXMWlNQ2x4MU1PWGJXUExrWF95LUw3NG5NS0FJYzRYS2ZUMjJxTWt0dDlMUnM1ZGVpUExsNlJ0Wk9HdldnMllPYmtiSmdsZ2R5VF9WbkdSRWlldzM5UnBLbkRC?oc=5"
    },
    {
      "title": "栃木県那須町湯本でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWjdDcndSVGU4bUpRbnR5TnplaFViTHQxdE1SVXo4dzNBTEtDb19YRE5sdUFyczc1akhyT1M3dG5TazJKVXI4QjBBeUdSbHQ5YUFPN3dOYzVTeTIyZmlQekhKckN1bmw2UU42NE92bTAybVhYeWZJUUw2aWxNWFJtSVZoazg4RTl0TW9uWkhjRjd0Q0FIT1JnenE2VGzSAaIBQVVfeXFMTWJuczBGYVlLZ1FvT2xnZEVXVGlzMHE4MTc5TW5EYi1ueDNOZFd1eE5PdFE5bjhsSzRTYnFjcDJ1VFJTSDE1cmZ1TFB6RmxBX21RM0huYnE2a3ZWM3UyYUpkdjYtOU5tMFlWTVdmS0JLUmtaVDM4Z082NEFFbWNGZk11dndVU2tjWktTZU9FVDFHcVhBNUt6cHRGZENXdm5rSEJn?oc=5"
    },
    {
      "title": "栃木県日光市の路上でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9TRDhTSmROMXFhcW1VQ2l1bkVCZUZhRUJnVGVjc0xnTG1ES2ZFREhjNHJEU2FiTTBVa0pDMmZnOWd3T2RnblFEMEpDc1BrcERYdW43YjllczJYYUk?oc=5"
    },
    {
      "title": "長野県安曇野市 畑で住民がクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE81RExhYy1zWUkzb3d4OFl2dDhlbTBjakVDMWFnNEZPSGJmSkpVMld1cC10aGFEVzc1X3ZRZ2tWUE54cmRDZTFkN2FIWHpmZw?oc=5"
    },
    {
      "title": "長野県安曇野市三郷小倉 畑で熊目撃",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBwLWJkM3UzdTVuemNMY3luN2xlVTZuOVBQb05UbGFfLWp5SnR6aE01bDQyRzdzUlUxTDdEMGRmU3hCSzV3V0QwSEdfT01oOUVBc09vWklxaGI2U3lMdDBzSDZqOWxza2RTblBmc193Wlg?oc=5"
    },
    {
      "title": "長野県安曇野市 民家近くの畑でクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE80R011dHBNUlVuNDg1TnpEZkU0dGQtbDdCLVFYeFg3cHhTRHpEWm9jNzh5aUdzWHdrUnR5c1Q4OEhWQ1BZM1hyVjByM2lfRzlzMGZYYXRIUTFYTEpwQS1PbUdxTnBNMjdVRDNCcGRaaFBnWmxNV3ZTWUNtZldlbG8?oc=5"
    },
    {
      "title": "京都府宇治田原町 約21年ぶりクマ出没 ハチの巣箱近くで撮影",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9keXVtU1VrYU1xNFl4cldIOElVN1NxQTAybEZCX0pYbmFKcGstWVFDdG1KanN0UFpGaDg2T3lMblVCRTdRNkFYNkFGN0dxQlpLdllRTzNNRVE1MkNrdkNEeE8wWnc1Y0VrSTNsUTdIZzVBZTdLSVE?oc=5"
    },
    {
      "title": "京都府宇治田原町 ハチの巣箱近くでクマを撮影",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9XWUJIT1pCS1BVSzFOVDZPT1lxMzloaVRJS1pqTWI4WV9STzc2enZOX3F4REtoVklSNE9obkczcFZvRWFnaENGVFhjZmEwREJmMG9kNV9VdTJvVEhRRFR5S1pNd0l5S3RBaWg1ZVZsNll0WWszUlJXeGhvbWdrTU0?oc=5"
    },
    {
      "title": "京都府宇治田原町 22年ぶりにクマ出没 防犯カメラが撮影",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYWtzdHFKRTQwYjM2LTZmd05MTm16dkxnVGZ1dWprY2RXYlo5SFAxQzliOUFvdVAyLUVDWUJzY1NRZTZUeXk0bXdOcTNVZGtVeFVreEpKZXBaeHNvaXQtRVYwdGloQ1FhcUtldXVZLVV1cE53SUZIVnI5c3hMM0FGa1QxWVRnTll6aTI0VnNB?oc=5"
    },
    {
      "title": "山口県萩市高佐上でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNbnc0X0g0WG92eDFqYUZBYTZEQWdGQUJQR1lhbWJWZG5nTTlWMGg4ZTNOWEtldVU5SnJreFh3UGVBZnBfTGwyMnlTTVNya1N6V0I2S1JnczdpVG9aVjFtMmFfSnl4cnMtTk9ha1lXS2s1S0RVOUZ6VHZCRTVkZWtTTkdXT0JDd0RrbmkyeWNYZGQtemtKVkZ0UDBLUzZLZDRiamfSAaIBQVVfeXFMTW53NF9INFhvdngxamFGQWE2REFnRkFCUEdZYW1iVmRuZ005VjBoOGUzTlhLZXVVOUpya3hYd1BlQWZwX0xsMjJ5U01TcmtTeldCNktSZ3M3aVRvWlYxbTJhX0p5eHJzLU5PYWtZV0trNUtEVTlGelR2QkU1ZGVrU05HV09CQ3dEa25pMnljWGRkLXprSlZGdFAwS1M2S2Q0Ympn?oc=5"
    },
    {
      "title": "山口県萩市紫福でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5Kdy1oUVh0RHBtTm1YbW41MFpCdVQxRnFTT2FNUlJzT2FWVFFQUGw5NkhoamtUWjdTQThnN056bGYtUjlUSjVhSU9CVGpvMEgyazJyQW05TEdHTU5wa0xoZ1NFem10ZmhhWWc?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":9},{"pref":"福島県","count":8},{"pref":"岩手県","count":6},{"pref":"栃木県","count":6},{"pref":"群馬県","count":5},{"pref":"長野県","count":5},{"pref":"京都府","count":4},{"pref":"山口県","count":2},{"pref":"山形県","count":2},{"pref":"富山県","count":1},{"pref":"島根県","count":1},{"pref":"兵庫県","count":1},{"pref":"鳥取県","count":1},{"pref":"青森県","count":1},{"pref":"石川県","count":1},{"pref":"広島県","count":1},{"pref":"秋田県","count":1}];

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
        <span>対象期間: 2026年8月6日</span>
        <span>·</span>
        <span>公開: 2026-08-07</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={55}
        periodLabel={"2026年8月6日"}
      />

      <p>2026年8月6日、KumaWatchが収集したデータによると、日本全国で55件のクマ出没情報が確認された。これらのうち40件は報道機関により報じられたものであり、市民の関心の高さがうかがえる。幸いにも人身被害に関する報告はなかった。しかし、都市部での目撃が4件、捕獲事案が1件含まれており、人とクマの距離が縮まっている現状が浮き彫りとなった。本レポートでは、当日の出没事案を分析し、潜在的リスクについて考察する。</p>
      <h2>主要事案の分析：都市部出没と捕獲事案</h2>
      <p>当日は、人の生活圏における深刻な事案が複数発生した。特に注目すべきは、都市部での目撃と、農作物被害に関連する捕獲事案である。</p>
      <h3>都市部・市街地への出没</h3>
      <p>群馬県桐生市相生町では、市街地に位置する小学校の北側でクマが目撃された（※1, ※2）。同様に、岩手県盛岡市では、複数の公園やその周辺でクマの目撃が相次いだ（※3, ※4, ※5）。特に松園中央公園では親子とみられる2頭が出現し（※5, ※6）、付近の小学校方向へ移動したとの情報もある。これらの地域は住宅地や学校が隣接しており、偶発的な遭遇による人身事故のリスクが極めて高い状況であったと言える。</p>
      <h3>農業被害と捕獲事案</h3>
      <p>鳥取県鳥取市佐治町では、梨への食害が報告されていた地点でクマ1頭が捕獲された（※7）。これは、クマが農作物を安定した餌資源として認識し、執着した結果、捕獲に至った典型的な事例である。農作物への依存は、クマの人里への定着を促す要因となるため、今後も周辺地域での継続的な監視と対策が求められる。</p>
      <h2>地域別の出没動向</h2>
      <p>当日の出没は全国的に確認されたが、特に北海道と東北地方に集中する傾向が見られた。以下に地域ごとの状況を概説する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な都道府県</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">農作物（トウモロコシ、デントコーン）への食害が深刻化。</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">18件</td><td className="px-3 py-2 text-xs">福島県(8)、岩手県(6)</td><td className="px-3 py-2 text-xs">盛岡市の都市公園など、人口集中地区近郊での目撃が多発。</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">栃木県(6)、群馬県(5)</td><td className="px-3 py-2 text-xs">桐生市の市街地出没。那須、日光など観光地周辺でも目撃。</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">長野県(5)</td><td className="px-3 py-2 text-xs">安曇野市の畑など、人里近くでの活動が目立つ。</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">京都府(4)</td><td className="px-3 py-2 text-xs">宇治田原町で約21年ぶりの出没。ハチの巣箱への誘引か。</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">山口県(2)、鳥取県(1)など</td><td className="px-3 py-2 text-xs">鳥取市で農業被害個体を捕獲。広域で散発的に出没。</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>北海道では9件が報告され、旭川市でのトウモロコシ食害（※8）や湧別町でのデントコーン畑への侵入（※9, ※10）など、農業被害が深刻化している。東北地方は計18件と最も多く、特に福島県（8件）と岩手県（6件）で出没が頻発した。前述の盛岡市の事例に加え、福島県会津若松市や郡山市など、県内広域で目撃情報が寄せられている（※11, ※12, ※13）。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では11件が報告された。群馬県桐生市の市街地出没（※1, ※2）が際立っており、都市計画区域内での警戒が不可欠となっている。栃木県でも那須町や日光市といった観光地周辺での目撃が複数確認された（※14, ※15）。中部地方では長野県安曇野市に目撃が集中し、民家近くの畑での出没が繰り返し報告されている（※16, ※17, ※18）。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では、京都府宇治田原町で約21年ぶりとされる出没が確認された（※19, ※20, ※21）。ハチの巣箱近くで撮影されており、人為的な餌資源が誘引の一因となった可能性が高い。中国地方では鳥取県の捕獲事案のほか、山口県萩市など（※22, ※23）で散発的な目撃が続いている。</p>
      <h2>リスク評価</h2>
      <p>2026年8月6日の出没状況を、季節要因、餌資源、人口圏への接近度という三つの観点から総括する。</p>
      <ul>
        <li>季節要因: 8月上旬は、クマの繁殖期が終わり、秋の大量採食期に向けた準備期間にあたる。特に昨年親離れした若い個体が行動圏を拡大させる時期であり、経験不足から人里へ迷い込むケースが増加する傾向がある。盛岡市で目撃された親子グマは、子育て中の母グマがより栄養価の高い餌を求めて行動している可能性を示唆する。</li>
        <li>餌資源との関係: データからは、トウモロコシ（北海道）、梨（鳥取）、ハチミツ（京都）といった人里の餌資源への依存が明確に見て取れる。山の餌資源の状況は不明だが、これらの高カロリーな食物の味を覚えた個体は、執着を強め、人里への出没を繰り返す危険性が高い。農作物や養蜂箱の適切な管理が、誘引を防ぐ上で極めて重要である。</li>
        <li>人口圏への接近度: 群馬県桐生市の市街地や岩手県盛岡市の公園、さらにはそれらに隣接する小中学校周辺での目撃は、人とクマの物理的な距離が危険なレベルまで縮まっていることを示している。住民が日常的に利用する空間への出没は、偶発的な遭遇リスクを著しく高める。特に早朝や夕暮れ時はクマの活動が活発になるため、最大限の警戒が必要な状況である。</li>
      </ul>
      <p>総じて、人身被害こそ発生していないものの、全国的に予断を許さない状況が続いている。特に都市部や農地周辺では、自治体による迅速な情報提供と、住民一人ひとりの予防策の徹底が求められる。</p>

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
          <dd>2026年8月6日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-07</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-07</dd>
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
