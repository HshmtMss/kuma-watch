// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月26日 / mode: daily-report / 生成日: 2026-05-27
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-26-daily-report";
const TITLE = "2026年5月26日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年5月26日、国内で報告されたクマの出没は40件に上り、特に新潟県、富山県、群馬県で多発した。人身被害はなかったものの、住宅地や学校近くなど都市部での目撃が3件確認され、市民生活圏におけるリスクの高まりが懸念される。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-27",
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
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
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
      "title": "京都府福知山市の小学校近くの田んぼで子熊を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1tSDJsVWMyMkcxVElsYjIzb1daRF9adWhHQVE1RlJHbXhWR0dXT3FpTXVIeUIwS1lBTkttNnJwcWV1UjVlNGliQnBQSVg5MDF5ZXpib0hxU0QtanQ0TmtrbTZJTkVibkxpLVVjdW8xUDlPV2Y0OEdnbUdQU1pudms?oc=5"
    },
    {
      "title": "新潟県十日町市菅刈でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRmZ6SWMyejhxbkU3VklNSUl2bTVCc1NEcW5vTmtBQkFiaWNnc2lhblprZG5UNHlnQmpWUlZXQnlnRVhYdWc0NlMzUWZfSWxPal9hX2hXUGR4Vl9hSWRac2FoSjFJaExjaW5OanZmdXpxZU5uTDNidFVTdTZZc3JRT0dKdEZ3bnJWQzFaTE5VSFVDaW5rbkdBTDlmZlrSAaIBQVVfeXFMTnVMdWQ0Q2picFYtYmNJSXJNSE1GSkJGNjBVcXhuTXVSbFhvYk9TY1BuOVJpdG1SSXhtOEp0QWlJMTRLZENpM284TDNnZEZ3dU5FeTdXN2xzc1ViY19fRHJSNGNOVF90SzZtek9YbVRzVk1PSl91dVpXcWlWVi1ZN2pVbzM0aXQ4OHBhZWpBODhkYzQxZWVUaXA4SUU4UF9ZSDNB?oc=3"
    },
    {
      "title": "新潟県十日町市室野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRjdWbTJyUDk0cTl6ZnFNekVnczBGV1NIMFdPWGRSZ0kzdXMyVzZvYW9SOTlJWmtRMFpnbFVJQnQzc1FKOURUMkRsSmdfcG5iLUQ5MnFhZUVJOUFWREhsa25KWmY1c2ZobHd0a0NOX0M4NmVha1dkSXQ2eE8zQmdQTHcxcXk1ZU1oaFFzYkdYc2pkVjZ0M3YxTDNhQVrSAaIBQVVfeXFMTXVjd0VCeFR2T3VaLTZTVC1MXzYyWW1BM295Zm84Wmw5bFpydjZ3QXVoNFpHTFJwekc0cW1TUFpLLUkzYUlzeU5NeDM4OWgyR1BtVjJZQ05oSENuemVzTUI2Ri1ULVM4ZFZTcGJDcEhET0x1QzhtZ3VmTDRicU9BQjNLUWlGbjY1Y0MxYU1vWTNBRzdrZVpJV0pXYnBrNHdMQkdB?oc=4"
    },
    {
      "title": "富山県南砺市利賀村でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdnA4cDE0ckNTWUQ0WWU4ZmxpUWk0YzRfMHphNWVGeDQ4V1dQZGljUXdkcmJiWExPQk4xZzhuUThCLWZucV96WFhpM0dPblJNdEExUFhaV2daOEpSbF9QWUJuWW5pWGhqdXBUeDUydXM2a0dGMmZySlA4WWxGdkNpZkpMUXBlMW9PWWRFZnFNTGFxWVhQSDg4U0RKdlbSAaIBQVVfeXFMUG9vZVREUlZlamk4TjNzaHZ6WVNvZkpYdXpIcmEtbXdtbVNubGZJRk9qYWpXMmdGanZ0alZ4c3BqMWFId1E4X0dHWnc4SEhFeHcyM01mcFBad3ZQOE83QVlkR2pkanROVzNYU1d6RjlncDdnX216LVg5RV9xeXlzWUxzU2x1QVVFRVlFT0JHal95aHBHNmlmWHRDTTVVdzd4aGFR?oc=5"
    },
    {
      "title": "栃木県那須塩原市高林でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNR2Y0TTRlaU8wMFhPc21GbHlsMXlzalFYQ1RRajdrSnl1ODBmdXU0ZW42VGVHR1ZncklaY09yMkVHR0RnYlc3UENvdTZvRXlCRkZWc1AzTkFyV2ZrTGdUV0VjLWhJSWhCbzEtME42eFFENEZJWnN2ZGZvOTdzODdRNTE4eGpCUUtVOXBFcjdILTFFSW5JcEdrX1BmZnfSAaIBQVVfeXFMTW5CRy1wcVNfalhReUwyV01SQzJFdmhnUEg2T2ZLNzcxUG5yc25peDJDdmRJQ0xBRlEwOWFXOUN0bEctNG92WWxUMlQ1aXhNMkpDeFJFQWxGWDlUQUNzM0hUcUFYbWNOWFRHNmhzdzNXQlRRSGRfWjZJcThHM3BGT25mZGF1SmJNOXJ4QjFvZ01rc1EwQkRjNXhRWEtFZDlIVWJR?oc=6"
    },
    {
      "title": "山口県萩市椿東目代でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSzlSNC14c3dkcjNaNzU1eDVYYWE1THppUG00d3diM0xjbEt2SlE0NDlhbGd0czJvdS0zS2J2YWNrWEdWU2t6NW5ieWZOLXB3QmZGdldLWTVXTnliX1VtNzRDX0xRd3d0bHlBRTdRejBodE9RbW5hb1FHZzR6RmZLWE9ib21aZHFPbFJuYWhnU01vSEUtenJYZnFPQ0vSAaIBQVVfeXFMTVN5cGNKdmNEX1pkaTVSS3d6NEVSUDlpMGtId0x0c0lhVWMwQWJuZDhSWTJxWlJhQk5sbTBnTURnaDk5ZW5pMlRLeTRsTWJneWgtbkowWk9IdXcySDlLVmtGRDFtajVXODRadS1zVDUzR0s5enFrTEdUR2Q2SWJpT3pmOUV3ZlRXRlpFNW1aSzc1Z2w1aU1GLTA4ZDhjQXlRQnhB?oc=7"
    },
    {
      "title": "宮城県富谷市高屋敷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOMnVzQ2g4SzIzR2d0ci1xb1dHM1RQcjFIRWhTWndIeDU5UXFVMkp4a19pZzZaUDh2Y3plQWN5NG1RZU1XMHMteUFDXzFoUmJ1ck1yMkRTZllqbjJaWW5Qd1o0bUFiUGNhWGJOYWkxR2lWUUNQaEhhT0tIdEJLa2FRQmlRMzlJNTd5NTI1eWI0M29OUnJocklTQm1xSEswdHk0Nk9NZm8yLWJPZlBuNlI5UUlGVHZoRUZxWFViV0VULXUxNEdJSUFLaEFsRGU4RHN2VnNfS3NpbXprRzU1b3BkNVRGOWFMWUV2UGE0UkVMWWJmd9IBogFBVV95cUxOa1RLNkIzcENjSVpEMENxTDRIUDNNRkpHUXRJdmtPeWx2LTZuTDdob2U5dHd6M3paQnR1ZldnY25obFpqM3ZMa1A1aFc2cm9EVTlmNzlVRG9NWnlndk4zcy1TV1pRckwzZjNvaTVqZzNBUkxTbXNoQVhmWEhHNWNkV3kyM1hfRmN0YnprdDB0UXNjcFRSOFZYcjdZV3l2ZWVqQ0E?oc=8"
    },
    {
      "title": "北海道根室市東梅でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRTU2U01lN1ZSRXlkLTZocjZqWVNTVGZCRldCOW1HcGVZU2k2VXV1YTlQUXA5TVpzQmpOdnE5M0hPQXN2QTA3aDIzWGVmRDJUc3I3c2lOYTlJMV96QURoYjlmSFhWTnRlaXlzbmI0dWtVMnl5M1BoYlNGdGJ5VFFNMU5oUHBDcVRXdHlTMTZ2c1VkTEQzZW90Rlg4OEjSAaIBQVVfeXFMUG1PVjJCVjl6andmOTU5NjhvSFE5ODJWZDBfSS1fLW5ReWFaaTFxVnNpMDM4d0F0MF9Dc1FHNzg4ekVkM0FhVjBITkJMUDRhekpxc291YVFfMFdrVmk4Tlh2RlhJUGxEdnNIeTVRTV8wdEtYWjBRRjN3UWt0UlJ2Q0dPNmVUYWo2YVlaTWxBUEJ4VXF4WTY3Q2VmeWI2VFVQMlV3?oc=9"
    },
    {
      "title": "北海道根室市落石東でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdDVxZlA0OUM2dnZIY2hnQjktaklnNzFJMS01b3VFXzh0ZGRyNVBLYk1NQ25TQ05RbVdsQkxuRHlOQ015Y1RlT01ST1c0dkU3LVB3OVBZOWlDM2doRjFoUG1FbnljcExnUVFKMXN3Q0t2azliR1ZEc3Fvc01IOHVoTlBuWXZQdE9LSzd4WWFHbWhpbFJfY3dScld3dTfSAaIBQVVfeXFMT1lCV2dXVUgwelVhX2hTY1dINklZRHlRQzdzcFdRSmV0eWJKc3JLUVVtdlF5M0t0ME1CVk16d3dCUmdETENJcDZOZEtSaWY4c3lrVTRrUWlWTl9Kam9wMWFWRFJZMTdqQWJYOFNiZjFoeE10Wl8xU3FNUjliLUlzbWtubkMwLV9tM0NTVV9IQXI5dERjOUlKTWpOSEh2QklOMHd3?oc=10"
    },
    {
      "title": "北海道根室市湖南でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONzk0endObnByNXE3NFB2T3hqRVppejhXbVNNQjVabHFHOTgtZldzUEVfZGtTcWFyWlBoRlFTVUdyY0EzM3U1aTNZYWhSbE1XSTZTNmRiQ2FsQk1FSDY1NXc0WUJYb0dTblJUanE3THpSOTVMQTN2VnVNQTRkNmI3alFpYmlUcnoxZGo5ajNjUVJURVdlT0FzZndQVUbSAaIBQVVfeXFMTlpTYkV3ZFFqRTRHSXB0S0pQMjdLM0s1TnM3d2I0TnJ3TndyeXI0RXNVSXRBc3lVQTJIQTdtVnJ6eGFhc0QxLVcxR2N6em1BaEhYbkxIZlhLQVJEMFoyQktEYUthWGdEdXM2RVhkdThMcmRRNXFuekMya1JWRkltMUxRT09weHc5RU5hS2pMczNzdkxUR2VqVDJJTmw0dDZka2pR?oc=11"
    },
    {
      "title": "青森県青森市野沢小牧野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaDBkMW1tdEs5WDRBS0xXRU8wNHFOcW1yRm9GR0dnRXYwVk5oeGdLOUl1UzlDSFZNOHRmM2tIenI5d19mYnNNRTZTWEhfcFFNSU5aZkFZSXo4ckNySHE0bEpCSEdYbGJkT1ZyVGRZdHgyd2xIOEdYeDNDZ09VLWNmLUJ4M0MwZ2pheGdTQ0c4RFdfMTQwdGhXMWw1VDDSAaIBQVVfeXFMTnY5emlvZ0MxU3NRalhzSHhpM21lbHBELVQ4b2dkbjRVeVdaWm5MQmRtS1d3VnZQdVpMeXIxZmcyeVMwLUg3VFo2THVIblpDd1VZNVF1blpLUlJrYTF1V1QwelNFTUxaVXJpeHk3cjQ5NUlWMmZKSzl4d0IwTXJzZ1pNdnhKS1FXYXVkcjBwa3haRkF5RVR1X1VPLVpNS0dmLTNR?oc=12"
    },
    {
      "title": "青森県十和田市奥瀬でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNY0tsVGFzRTRBTjUzbHpvMVJISFJoR0ItcVdvb29CVzdZSTVHTF9VN0d1dWdrM1A3RWtnaFdOdDA1cGZRWXh4X0trRFk2NHBjWHh2YWJaUDZxN2ZmcERXNjM3Y0dVUUJBZTVjS0JBOVFuX1h1dFJsbGRoM1Bpd1BqaGstcUIxVEliNVd3cEw5aFdWeXI2SzN5MkRHY07SAaIBQVVfeXFMTjRqLVJ6elg0REVES2VTTmhSM0N0SEdMaWZvdGNzM1dteTJXZkdPM21KTW1CWmMzSGptVG1vcWFxamszU3h4Q2JMWk93blEtMzFTamgwYzRNd3g3LXQ5ZjdqNkNEWDZhTHR5eTBlWmtVRDU0MkNZVm1ldXNQS3lJWlN2VmRfc0VsV08xVkFqQlBvcFFUYVZNS20zWElaeFVkU3ln?oc=13"
    },
    {
      "title": "岐阜県高山市高根町中洞でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeVFYWEdTSkFLN0h2WGlsa2dvR1dISEZMaXVkY1ZUSnNEQW1oZllHS3k3Nl91bVVQRHU0UEtWa2l1UF9rVFdVWWVlQWxXOTRJenp6RW1sSW5icFloMWFSMjh3aWRHdVFMUDZrQ1BhTGtJOFBxQkwzMXFLTW5nRUFmdXZ6eW1ydjdSUGFBQ3FhdzVtNGFfOHUza01PSFHSAaIBQVVfeXFMUHlHczVFakZ4QnR1ZnVFTFZPSE5xWllwRldzZWlYNU1ScmRJUVk3UFotQzR4VzNFd281NjNYaURJckszNzgzUmJhLVVqS2ZFdEVuVVJsVFV0S2JZNTROWGVZU3g1WkZ2bUNZUHhEVnhaSTJEaF82Ny10ak1XRTE1STk3akhpZklHTlVzbzBBRmpZakJJTE8zRGtiQU1ydWVvc3VB?oc=14"
    },
    {
      "title": "広島県廿日市市津田でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVmhqQ0hoSHEzTVhZM3U5RkRTTkdFUjNGNGhfZTdtaGRxOFFlVkxVNHMxQ1huOGcyTFZaYXZJa3FMeEdlN1hzX2ZJRWtaRk50a2dYcWxOcW1Wa2pFaExSckpRUjdJbWNMRG9wLWs0OGlnMVFXdFd2T3c4WDJ3UGNsX3RPMTZndUQ4X1Z5UjVINTlmOU1nOGdGUG9veG7SAaIBQVVfeXFMT0dMN2ZjWHJkOWhyb1lWc01oZG9IcE1MTERPbWRNRmx2Z3JRa0xiR1RDMmZIYWFjNDVCLXNTRW16U1lHMEV2dFdrREcxWjFPekJqbXJ0RExWbzNBYmJiZjNDTl9yVXVWQThGdDYtYTJnSV8tbWU3Zmx4WmU1ODdQeUFpSEJlVnNYbTR0X0VKN2Fqb3pVV1J4WTVnTm1OWnM0NjJR?oc=15"
    },
    {
      "title": "福井県あわら市笹岡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdXR4Y3FrSk1CcVVyWUtuTlc3bThJUVUxUHBSRVY1N2o1cW9aeEk0dmlLdEtqRTNTeTJoTk5KUXNZTXhoVEFmOUJzZDNIeXYzMlVBUy1sT29fWFQ1c3BqWThXaTBPNWNmNW1lYUFkN3NvQUZnajh2cXN3YjM5UkRWQ3Z4YkVXZUdtQVFYb1d1d2ZqTHlvLVZ2QXVodmzSAaIBQVVfeXFMUGxhQkNCVElQb3JRTXFEVDRlTjhUWmJQUTdmZlBYdzUzaDRqSDduSlk3VEpYX0VXb2xrVzhmelZ6cXNTUU03SzlvR1hIUE1QR1lYcUdEY3N4aHN2STctMUR0cVdBTWVzMXRSNngwSmhFajJIRG9MMVZsZ3ZGZkYtS3VENHZYTkdFRTJ2Y2VENFhDQTJvcU94d3NxV1pPVVBra2ln?oc=16"
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
        <span>対象期間: 2026年5月26日</span>
        <span>·</span>
        <span>公開: 2026-05-27</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":23},{"pref":"北海道","count":12},{"pref":"福島県","count":8},{"pref":"新潟県","count":7},{"pref":"山口県","count":5},{"pref":"群馬県","count":5},{"pref":"富山県","count":5},{"pref":"石川県","count":4},{"pref":"島根県","count":4},{"pref":"岩手県","count":3},{"pref":"鳥取県","count":2},{"pref":"山梨県","count":2},{"pref":"栃木県","count":2},{"pref":"静岡県","count":2}]}
        total={84}
        periodLabel={"2026年5月26日"}
      />

      <p>2026年5月26日、KumaWatchが収集したデータによると、日本全国で40件のクマ出没事案が確認された。都道府県別では新潟県と富山県が各6件で最も多く、次いで群馬県が5件、島根県が4件と続いた。情報源の内訳は報道由来が15件を占め、自治体等からの公式情報は含まれていなかった。当日は人身被害や、対応としての捕獲・銃猟に関する報告はなかった。しかし、人間の生活圏への接近を示す「都市部キーワード」に一致する事案が3件確認されており、今後の動向を注視する必要がある。</p>
      <h2>主要事案：都市部への接近</h2>
      <p>当日は人身被害に至る深刻な事案は報告されなかったものの、クマが人間の生活空間に大きく接近した事例が複数確認された。これらは、地域住民との偶発的な遭遇リスクが高いことを示唆している。</p>
      <ul>
        <li>京都府福知山市では、小学校近くの田んぼで子熊が目撃された（※1）。通学路や児童の活動エリアに近接しており、特に注意が必要な事案である。</li>
        <li>岩手県盛岡市中野二丁目では、住宅地内でクマ1頭が目撃された。市街地における出没は、住民に大きな不安を与えるものである。</li>
        <li>群馬県桐生市菱町では、桐生工業高校の硬式野球場北方の河川敷で目撃情報があった。学校施設に隣接する場所であり、生徒や教職員の安全確保が課題となる。</li>
      </ul>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では根室市に集中して3件の出没が報告された（※10, ※11, ※12）。東北地方では、岩手県で3件、青森県で2件、宮城県で1件の計6件が確認された。特に岩手県盛岡市では、住宅地や公園北側など、市街地に近いエリアでの目撃が相次いでおり、都市型の出没リスクが顕在化している。青森県でも青森市や十和田市で目撃されている（※13, ※14）。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県で5件、栃木県で3件の計8件が報告された。群馬県では、前橋市の赤城総合案内所西や県立赤城森林公園といった観光・レクリエーションエリアでの目撃があり、行楽客がクマと遭遇するリスクが懸念される。また、中之条町では幼獣が目撃されており、母グマが近くに潜んでいる可能性も考えられる。</p>
      <h3>中部地方</h3>
      <p>中部地方は最も出没件数が多く、新潟県（6件）、富山県（6件）、山梨県（1件）、静岡県（1件）、岐阜県（1件）、福井県（1件）の計16件に上った。新潟県では上越市大貫2丁目や大字向橋といった市街地に近い場所での目撃や、魚沼市での足跡の発見が報告されている。富山県でも小矢部市や高岡市など平野部での目撃が複数あり、農作業中の注意喚起が必要である。小矢部市では田んぼで子グマが目撃されており、周辺に母グマがいる可能性が高い。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では、前述の京都府福知山市での1件が報告された。中国地方では島根県で4件、山口県で1件（※8）、広島県で1件（※16）の計6件が確認された。島根県では大田市、益田市、奥出雲町と広範囲で目撃されており、地域全体で警戒レベルが上がっている。特に大田市三瓶町の事案では、民家の敷地内で体長1.5メートルの個体が目撃されており、住民への危険性が高い状況であった。</p>
      <h2>リスク評価</h2>
      <p>5月下旬は、冬眠から完全に目覚めたクマが繁殖や採食のために活発に動き出す時期である。特に、昨年生まれの子グマを連れた母グマは、子の安全を確保しつつ栄養価の高い食物を求めて行動範囲を拡大させる。今回、親子グマや子グマの目撃が複数報告されたことは、この季節的な特徴を裏付けている。子を守る母グマは非常に警戒心が強く、攻撃的になる可能性が高いため、遭遇時のリスクは極めて高いと評価される。</p>
      <p>餌資源の観点からは、春の山菜などを求めて山麓部から人里近くの田畑や河川敷まで活動域を広げていると推察される。データ上、農地やその周辺での目撃が多数含まれていることは、人間の生活・生産空間がクマの採食エリアと重複していることを示している。</p>
      <p>最も懸念されるのは、人口圏への接近度である。全国的に住宅地、学校、公園、市道など、人間の生活インフラ周辺での目撃が常態化しつつある。特に「都市部キーワード」に一致した3件の事案は、クマと人間との物理的・心理的な境界線が曖昧になっている現状を浮き彫りにした。これは、意図せざる近距離での遭遇を誘発し、人身事故につながる潜在的リスクが非常に高い状態であることを示している。各地域コミュニティにおいて、より一層の情報共有と具体的な注意喚起、予防策の徹底が不可欠である。</p>

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
          <dd>2026年5月26日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-27</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-27</dd>
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
