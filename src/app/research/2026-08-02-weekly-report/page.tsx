// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月26日〜2026年8月2日 / mode: weekly-report / 生成日: 2026-08-03
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-02-weekly-report";
const TITLE = "2026年7月26日〜2026年8月2日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年7月最終週から8月初週にかけ、国内のクマ出没は821件報告された。特に北海道と東北地方で件数が集中し、都市部や住宅地への出没が頻発した。富山県では市街地での緊急銃猟が2件発生するなど、人とクマの距離が近接する事案が目立った。期間中の人身被害は報告されなかった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-03",
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
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
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
      "title": "北海道札幌市: 西区の住宅街でクマ目撃、警察官も目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONjhFZW12dE5hbnhHMXVaWWpYdmxfcngza0IySDktX2tZdFE1c2I1MlFSNERJT2J4bzdoS1c5a1RJb1pVV0J1NUk3aTd4Wnlhdm9KZ1pXMnZwU0pSUHpzX2hhbDQ0amM0MWpMdUdrN0ZrbUFTTVFMSEVnV1R4YTN0bkVyelNabUpmRy1aZjZR0gGAAUFVX3lxTFBLLUQteS15b3ExX0pkekN5eEowUHlNTEhTYzFBZ1A1QjBWQUlGYzFBQWlUWS1NeG45akYtVjhBUFpXNnNra05seElLc3F6QlBZbFBTdHg5UzRkakZnNks2UHN6TVAtVlJYTVdZVFdRYlB4amVvb0NrTjhtOTZBR2Ft?oc=5"
    },
    {
      "title": "北海道札幌市: 西区の住宅街でクマ出没、女性や警察官が目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBOZFpINHo2RGlvbjlrUmFzb1dRdERZdWxhUnhfMHltNU1yMkRFNElNMXNWLXB5ZDZzQVYxd3hPak9ncGw0ZkxVVjVRS1R2LWs1QzVLTHY4Q19YbGdsUFk2QnREeHFpR2tSWlBkWUFneFg3REp6ODlURUpiZw?oc=5"
    },
    {
      "title": "北海道札幌市: 住宅街で子グマが女性に歩み寄る",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1BcXVRSlBKM1pvc2JkQzJyUjYtV3gzZ28zZ0VxeFlhYjFvSXNGdkVTemVWUmVzbHZHMjlXb0Mta1V6ZW5pX2pLYk1va3Z3UQ?oc=5"
    },
    {
      "title": "秋田県秋田市: 民家敷地にクマ、小学校まで30m",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE45dEctUy1hZVI4cEVhRGM1MDBFUkpNRkVVNlNRLXRzSHBkbGl1MjFUQXcwNk9Sa1lkMXFEMVVIRjR6dnYwSFUzcFVYLV9HUmpueFFGWGNGeno0UndUaUZIYWV3?oc=5"
    },
    {
      "title": "秋田県秋田市: 寺内蛭根地区の住宅地でクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9GZHRiRGVNdU91NnBzR1lDSFprOV9jd3hPUFVjSnd5N3BhUWhaQ0lpd2pPRWxaTFE2RTVYX3U5dE16ODVoWHFRUHEtSUlMQTN2SWhERHF6LV9oZXFMN2NrNC02SUJsaG4yVTYwVUFvRmdVTTM3NzZVbHhpNNIBgAFBVV95cUxNLTBWWWFUa3ZPYXZDYWhQYVhZVVdZaF9Ya3UxVUM4ejRsWk1sckh6aFVMMG43dFlpOFUwZUFZNTNxZzRrVzZvaTIyUVcwUl9mX2l5YVBFTk56TU84VUVwOW5pbEJ5c05uUEhRRnk2aVJkS0YtV3R1aXFETGp2S1E5RQ?oc=5"
    },
    {
      "title": "富山県富山市: 住宅街でクマ出没、映像や食害",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5wb1d1YXZSblh4US15a2pWcm1IbGJ6SWhwM0RTdGlEZjdaaTJvM2ZPV240SlhQT19NbEtVX3VaWXE3dWZvQmVjVURkOFlLVDBfMS1RZHEwOTk0QlRUcXR2OEV0WEJKcTU0bm1VTEVuNGxrZ2VnT0ZPcG930gF_QVVfeXFMTlh2S1RZM09vSkRfYV81YWQwdEhJLTliMnBUMnVCYi1CRmZtQkZTclZxZXBxVlI0d1F2akNkNTZhbkJOWE5qRHQyUlBYV05xc2NMYlNqOTNqTnBvUEVabHAzdXlRYzZicUxEMkVxcjNvaldXZmp1TGVUdWlkdFpyNA?oc=5"
    },
    {
      "title": "富山県立山町: 中心部近くでクマを緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNZ0dWbzFiWjMwQXJjbmRvSWdkemprLTFNMXliMmlZSWhocjNvUnRXYnhIY2hIV1N4LVctM2dNOUNodlpSRi1KRjZreThnVkhwX0RzRDlLa2ZGcGtpS1V0amFQSkgtX3V3Qk93dDJaMmgtWnloZE9OcFZjbjhLTGozd25HUUg1NzQ?oc=5"
    },
    {
      "title": "富山県立山町: 立山町中心部の建物内にクマが入り込み緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNeXBlR0YxQUhnTzdGUU9PNGJsN1NXWVNiekVsRVFObmt3aTVnUk1RczRkcDdGZTFlNVFkYmVBSlR1bDdXY19mVV8xa1l3OS1FVkZLbTNSRHV5U0xjRlBEM3Zpc2g1STlNNVZxOHY5QTRnZE9uVnhqWUhMbDREY0tsdmxkUzZGMTA?oc=5"
    },
    {
      "title": "秋田県秋田市: 住宅街でクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1Odlp0dGVfeXIwbVgzREFULXVqYV9KbTMyaXBFQ1dxeE9CUUw5cTJwRndxQ2tSOWloOV82QmJrSDVZNzRHUThoSWhwNjFkUW5DNW02bjd3QWcyNkJvdTVVLVo3TQ?oc=5"
    },
    {
      "title": "富山県富山市: 住宅街の堀川で道路を横切るクマの目撃",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1OdUs2cTZ4eGs2Q1ZrRGtDM21UZFpNRkdpbU94Tzg2MUYwdUJjdmczRXFIVkNFdGI2ajI2azhtM3pjNDBLcHkzaExvLVdrRk0zMlJSeWVIdw?oc=5"
    },
    {
      "title": "新潟県妙高市: 住宅密集地にクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBrWDdMRkxiNllNLXV5eE9mT0FvV21ScVdBb0VLQ2VmaDRZeDFVZ056R3QtdjJxY0xXQ0ZpWGZnTzhnWFFD?oc=5"
    },
    {
      "title": "岩手県盛岡市: 中学校近くでクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBmRXRmTW5yWTdreHlmX2dKbHBSeF9FakFvV01sblE2bXNZV181bmNhQnBSRXBqN1dDNnJGU1AwbHhhQ09iUlp4UWRRZGN3U3hrVXZsSU4zMWsxT1hXcVFyNQ?oc=5"
    },
    {
      "title": "福島県猪苗代町: 集合住宅でクマ1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9PNGZRbldqZFpJMjNfV3Nzb1hIRmYtdHBkb3RGcDFUMEF0c21oUnVZcWpzUTEta1lSR2VwSjRYbnJHZE9USHhJQlo4SUNwSlo1Rjc0LVFCeUlRWjl6OFMzLXNENjY0amo2LWsySzQxeEZINGxveDRvWHFLWlZWYzQ?oc=5"
    },
    {
      "title": "栃木県日光市: 日光の住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9xdHU2U3FEN1hHT2ZLanNSMjl2UGxTb3lULXVGZFBZQlRRTkhPb01OU2djSlVjOTdrU0puNndGNVkyMG9seWtaSl9qNUlHTDctdWdXTjdiVzcwcjg?oc=5"
    },
    {
      "title": "新潟県新潟市: 東新津駅近くの踏切付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBJVXFFZlFMTjZ5ZlRLSDFZcUJrVEp2Z3dGTVpqSFNhMXE2SXd3RkE2QnRIMUNhcHN6RC1PQW9pWHJkeGZy?oc=5"
    },
    {
      "title": "宮城県仙台市: 泉区高森の公園でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1fdmw4cmRaMF8xem1PYnpmeG5JWmNaMDRETlFPR0I4bGIxUGdROXpaMkpfR3JGekMzOFlWeG45dlFjaUpIeXhkWjNxanp6ZTA?oc=5"
    },
    {
      "title": "山形県山形市: 小学校近くの住宅街で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5idEh2UzdmcWVuU1I4SG10Y0h4ZDY2bnFwemdPNE9xU092Z3MyR1FPRzB6Rl9XZ0dva0tFdXU0TTViODYtOWVIRnhGNldfczRCY2dvQzRNeDBZTEJmNFhSbk9JOE9WWmtyRy1JUHNIZllOdE03bFJsYjlCMEhYbjA?oc=5"
    },
    {
      "title": "長野県塩尻市: 体重100キロのオスを捕獲・駆除",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBJWG9CS1owSlNBelB4MWNycG9xWGhmM2l0d0psQThwWHg1b2pPd21XSUVtN3dBams2TjQzN1VwQkwtTHg1WFVLSF9uSXgzalVpQ2RMUmdjM0V4b0V6UGZOVXU3Qy1rcEZscEpEZHd0Nm9ETEg30gF6QVVfeXFMT3VQRjFSbHNVMHVKVnMyUWVES3FiempMQlpRVW9zZHlzWkExQkRyRWlNMElsQlphcDRUQWIyTGZxMG85WVl5c09CcHMxUXQ4Yjd3cVhUbXBPbkZuWDhtZHdabFAtVW0tZmFEX05WTFl2YnlrVFUxM0lxRGc?oc=5"
    },
    {
      "title": "岩手県滝沢市: 住宅でトウモロコシなど被害",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBIWkhkVTlTTWdUNG1MNGFDcTFOOGppU2Jfa3lISVFNTTR5eUk2SVhKVU5NbmNXdm1XcFN0dkxtaVdhNTRROTU1YlZEVlBudmpPemFaWTJ5bzNYamFKdXhLZVk3YXcwT09OZ2FtMW01Qm1QRk9mOEpYMVV0OTgtUW8?oc=5"
    },
    {
      "title": "鳥取県鳥取市: 梨園で梨約200個が食い荒らされる",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8yQ3lGZWs1R0RFSzJDLVJLX3BOZWZ6dlNqZ2VsMFRhTFdoZmc5MGNKUmlWSThkZmtPX3hORzk3M3RPUWhWUlhTWERLWGdSQWhlYUN2OENTc1VYR3I0dlE3SzZMajBnRkVRMTR3VzdzNDRrQURZZTFmZ0VpanpXSFU?oc=5"
    },
    {
      "title": "広島県廿日市市: ゴルフ場にクマ目撃、芝生に足跡",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBrU0lSRXFxUHYyeHh3R3JMVGNHLWtHbnJkT24zNlNwOEs4OWF2blV5T0h1alVXbUJ4aXZMSXZPeENYbV9rZ2gwMzFyUU42NnIxaXJRUDVGRDFEUQ?oc=5"
    },
    {
      "title": "兵庫県市川町: 山林内の住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5MSUUtLVo4V3FhWHhMNmpqUW5jYWxzQktXYnNFTGM5T1I2YWpiTU4yYVNTenV3MDY3X1NidmdNTEg5UWpBM0xSZ1BVS0hTRlB6NDJobnduTkRxYTNya0hzd1VvUndrcDQ3LWZRa1FfOERIbGREWFhvT0VaT3dRcHM?oc=5"
    },
    {
      "title": "兵庫県市川町: 住宅分譲地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBYc3hIZXktMEJ4OEtTUDhNMTBvX1FoaWx6V1hmWHU2Wjg1M1NEakpGWFc5a3NHdXc0ZlFrbFcwamVVaTFlT1pVRU9JRnl1V1JYWmg3ZkhSZ24tUlBYUlFWVzhGQjhmaWJhM0ROZFFR?oc=5"
    },
    {
      "title": "宮城県富谷市: 住宅敷地内を横切るクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBtQmx0eEN3YktUMDVfNGVWQVlQRDVsWWZUeGwtTnRPWS1HMzVKNDR5bHlLMElKXy1hRnRrOVo0VG13Tm5HcU1mYTh5Nm5OVkVRd1dEU1NFdUEtTzJkUG9QRW9Gd3JJNWdDUDRqeURoXzFnTzU0MWdCclVfRTM4N0E?oc=5"
    },
    {
      "title": "長野県塩尻市: クマ1頭を捕獲",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1rNk1HM25FVV9aOVRTTzVoYkVabWFnVFBKYlI4VGZUNWtlSXVQT0VsM3k3S3FiTTlWZ2NRRE1scTdmczhtaWJ3QU9Ma0ZZdzhMd3VjSGFEeGlzV0VsQ2hiVXZqSGdqYkxwWEk1WnVRWmk?oc=5"
    },
    {
      "title": "鳥取県鳥取市: 佐治の果樹園でクマ被害",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE12R0djaWxNVHo5V0wzNXN4Z1c5LThHRHYzekYtMU84ZjgxbEg5LVRPcFNoUGZidXFoNmU2bFFhSXQ5S3VncUhGR1U2TVhxUlRq?oc=5"
    },
    {
      "title": "兵庫県市川町: 散歩中の男性が山林内の住宅分譲地で目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOUVVYY1pYNE9kNlBPSlZhVzZJbk1OWU5fUFhVNE1tdWd5akhNVmFRRTljNW1TNWYwTGVRSmxMcTBYaEd5ZHJNS0lFUm9KWHg1TG8tZDhzSjV4NWFNNzd6VmR0MV9oNndNTVdoMlVtTGNnc0kxLXFzamFQaEM3QXFoQ2R4RG5kV3RtZ3pUdkxR?oc=5"
    },
    {
      "title": "栃木県鹿沼市: 鹿沼の住宅敷地内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE53Sjc5STZKMkxUcnV0cjNGMmxoRWd6a1BPa3ctZ3g3eUlYa284a3lrSjdjU2xzR2V1b3pOd2NCUXQ3WUp6WjFBZXg4Qkt2aU51YWw3NXdzZjFfd0U?oc=5"
    },
    {
      "title": "山梨県甲府市: 自然体験施設付近の道路で目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBpcFRDWE9KckhobTVBVWN1WU5uNkZCSkl3S1FTVmZWdXJka2ZEYVBQdEJxX3QxZGVMVFlFUEhIVnFWY0s2SnQ2YV9zQkpjWWw3d1FpbkhuM0Q4QWZfMnQ3RTNBWklDTWFCOWoyNUtyelh0Vk1oRkR6WnlVUQ?oc=5"
    },
    {
      "title": "秋田県秋田市: 寺内蛭根地区で住宅地でのクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9GZHRiRGVNdU91NnBzR1lDSFprOV9jd3hPUFVjSnd5N3BhUWhaQ0lpd2pPRWxaTFE2RTVYX3U5dE16ODVoWHFRUHEtSUlMQTN2SWhERHF6LV9oZXFMN2NrNC02SUJsaG4yVTYwVUFvRmdVTTM3NzZVbHhpNNIBgAFBVV95cUxNLTBWWWFUa3ZPYXZDYWhQYVhZVVdZaF9Ya3UxVUM4ejRsWk1sckh6aFVMMG43dFlpOFUwZUFZNTNxZzRrVzZvaTIyUVcwUl9mX2l5YVBFTk56TU84VUVwOW5pbEJ5c05uUEhRRnk2aVJkS0YtV3R1aXFETGp2S1E5RQ?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":144},{"pref":"秋田県","count":104},{"pref":"富山県","count":71},{"pref":"福島県","count":56},{"pref":"岩手県","count":56},{"pref":"栃木県","count":52},{"pref":"新潟県","count":51},{"pref":"青森県","count":44},{"pref":"群馬県","count":36},{"pref":"宮城県","count":34},{"pref":"長野県","count":21},{"pref":"島根県","count":20},{"pref":"京都府","count":20},{"pref":"兵庫県","count":17},{"pref":"山口県","count":13},{"pref":"山形県","count":13},{"pref":"山梨県","count":12},{"pref":"埼玉県","count":7},{"pref":"福井県","count":7},{"pref":"和歌山県","count":7},{"pref":"静岡県","count":5},{"pref":"東京都","count":5},{"pref":"滋賀県","count":4},{"pref":"岡山県","count":4},{"pref":"岐阜県","count":4},{"pref":"鳥取県","count":4},{"pref":"三重県","count":3},{"pref":"広島県","count":2},{"pref":"石川県","count":2},{"pref":"神奈川県","count":1},{"pref":"愛知県","count":1},{"pref":"岩和県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          週次レポート
        </span>
        <span>対象期間: 2026年7月26日〜2026年8月2日</span>
        <span>·</span>
        <span>公開: 2026-08-03</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={821}
        periodLabel={"2026年7月26日〜2026年8月2日"}
      />

      <p>本レポートは、2026年7月26日から8月2日までの7日間における、日本国内のクマ出没事案を分析・総括するものである。この期間、KumaWatchが収集したデータによると、総件数は821件に上り、全国的にクマの活動が活発な状況が続いている。出没情報は北海道（144件）、秋田県（104件）、富山県（71件）をはじめとする東日本、特に北海道・東北地方に集中する傾向が見られた。報道由来の情報が621件と大半を占め、市民の目撃情報が迅速に共有されている状況がうかがえる。幸いにも人身被害につながる事案は報告されなかったが、「都市部キーワード一致」事案が38件、「捕獲・銃猟キーワード一致」事案が18件確認されており、人間の生活圏での深刻な遭遇リスクが潜在していることを示している。</p>
      <h2>主要トピック</h2>
      <h3>1. 都市部および住宅地への出没の頻発</h3>
      <p>当期間において最も顕著な傾向は、都市部およびその周辺の住宅地へのクマの出没が全国的に頻発したことである。特に札幌市、秋田市、富山市など、各地域の主要都市で目撃情報が相次いだ。札幌市西区では、連日にわたり住宅街でクマが目撃され、警察官も出動する事態となった（※1, 2）。中には子グマが住民の女性に歩み寄るといった、至近距離での遭遇事案も報告されている（※3）。秋田市では、寺内や牛島東といった住宅密集地での目撃が続き、小学校からわずか30mの民家敷地内に出現したケースもあった（※4, 5）。富山市でも、住宅街での食害や道路を横切るクマの姿が映像で捉えられ、中学校付近でも目撃されている（※6）。これらの事案は、クマが山林だけでなく、人間の主要な生活空間にまで活動範囲を広げている実態を浮き彫りにしている。</p>
      <h3>2. 北海道・東北地方における高水準の活動</h3>
      <p>地域別に見ると、出没件数は北海道および東北地方で際立って高水準を維持している。総件数821件のうち、上位5道県（北海道、秋田県、富山県、福島県、岩手県）で481件と、全体の約59%を占めた。最多の北海道（144件）では、前述の札幌市に加え、下川町の住宅地で窓から2mの距離で目撃されるなど、危険な遭遇が報告されている。秋田県（104件）でも秋田市の事例が目立ち、県全域で警戒が続いている。岩手県（56件）、福島県（56件）、宮城県（34件）、青森県（44件）でも多数の出没が確認されており、東北地方全体でクマの活動が活発化していることが示唆される。この背景には、地域の植生や気候、土地利用の変化などが複合的に影響している可能性がある。</p>
      <h3>3. 富山県立山町における連続的な緊急銃猟事案</h3>
      <p>人とクマの軋轢が深刻化した事案として、富山県立山町での対応が挙げられる。7月28日、同町の中心部近くで目撃されたクマ1頭が、緊急銃猟によって駆除された（※7）。さらに翌29日には、同じく立山町の中心部で建物内にクマが入り込む事案が発生し、再び緊急銃猟が行われた（※8）。人口が集中するエリアで連日銃猟が実施されるのは異例であり、地域住民に大きな不安を与えた。この事案は、特定の個体が人や人工物を恐れず、餌を求めて市街地に侵入・定着しようとしている可能性を示唆しており、今後の対策を考える上で重要なケーススタディとなる。</p>
      <h2>地域別動向</h2>
      <p>上位都道府県では、特定のエリア（ホットスポット）に出没が集中する傾向が見られた。</p>
      <ul>
        <li>北海道（144件）: 札幌市西区の住宅街で7月29日から30日にかけて複数の目撃情報が寄せられた（※1, 2）。複数の住民や警察官が目撃しており、同一個体もしくは親子の個体が周辺に滞在していた可能性が高い。</li>
        <li>秋田県（104件）: 秋田市の寺内地区および牛島東地区がホットスポットとなっている。7月28日から8月2日にかけて、住宅街での目撃が断続的に報告された（※5, 9）。</li>
        <li>富山県（71件）: 富山市の堀川、山室といった市街地での出没が7月27日から28日にかけて続いた（※6, 10）。また、前述の通り立山町中心部での銃猟事案が特筆される（※7, 8）。</li>
        <li>その他の東日本地域: 岩手県（滝沢市、盛岡市）、福島県（猪苗代町）、栃木県（日光市、鹿沼市）、新潟県（妙高市、新潟市秋葉区）など、東日本の広域で住宅地や市街地への出没が報告されており、地域的な問題ではなく、広域的な現象であることがわかる（※11, 12, 13, 14, 15）。</li>
      </ul>
      <h2>注目事案の時系列</h2>
      <p>当期間に発生した都市部への出没、銃猟、捕獲といった注目すべき事案を時系列で以下に示す。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">状況・場所</th>
              <th className="px-3 py-2">種別</th>
              <th className="px-3 py-2">参照</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-07-26</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">猪苗代町</td><td className="px-3 py-2 text-xs">集合住宅で目撃</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">※13</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-27</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市</td><td className="px-3 py-2 text-xs">泉区高森の公園で目撃</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">※16</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-27</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">山形市</td><td className="px-3 py-2 text-xs">小学校近くの住宅街で目撃</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">※17</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-28</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">立山町</td><td className="px-3 py-2 text-xs">中心部近くで緊急銃猟</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">※7</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-29</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">立山町</td><td className="px-3 py-2 text-xs">中心部の建物内に侵入し緊急銃猟</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">※8</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-29</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">札幌市</td><td className="px-3 py-2 text-xs">西区の住宅街で目撃、警察官も確認</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">※1</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-30</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">秋田市</td><td className="px-3 py-2 text-xs">民家敷地（小学校まで30m）に出現</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">※4</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-31</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">塩尻市</td><td className="px-3 py-2 text-xs">体重100kgのオスを捕獲・駆除</td><td className="px-3 py-2 text-xs">捕獲・駆除</td><td className="px-3 py-2 text-xs">※18</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-01</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">新潟市</td><td className="px-3 py-2 text-xs">秋葉区東新津駅近くの踏切付近で目撃</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">※15</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <h3>リスク全体傾向</h3>
      <p>当期間のクマ出没リスクは、全国的に「高い」レベルで推移したと評価できる。総件数が800件を超え、特に北海道、東北、北陸地方で活動が極めて活発であった。人身被害の報告はなかったものの、これは幸運な側面が強い。住宅地や市街地への出没が常態化しつつあり、住民が不意にクマと遭遇するリスクは非常に高まっている。富山県での銃猟事案は、人とクマの物理的距離だけでなく、心理的な緊張も高まっていることを示している。農作物被害の報告もあり（※19, 20）、経済的な影響も無視できない。</p>
      <h3>次週の警戒ポイント</h3>
      <p>次週以降も、引き続き厳重な警戒が必要である。特に以下の3点に注意を要する。</p>
      <ol>
        <li>都市部・生活圏での警戒継続: これまでの傾向から、都市近郊の緑地や河川敷などを通じて、クマが住宅地に侵入する可能性は依然として高い。早朝・夜間の外出時には特に注意し、音の出るものを携帯するなどの対策が推奨される。生ゴミの管理徹底も不可欠である。</li>
        <li>農作物被害への対策強化: 岩手県のトウモロコシ（※19）や鳥取県の梨（※20）など、農作物を狙った出没が報告されている。収穫期を迎える作物が増えるにつれ、被害は拡大する恐れがある。農地周辺では、電気柵の点検・強化や、収穫残渣の適切な処理が求められる。</li>
        <li>母子グマへの注意: 札幌市や盛岡市で子グマの目撃が報告されている（※3）。子グマの近くには必ず母グマがいる。母グマは子を守るために極めて攻撃的になるため、子グマを見つけても絶対に近づいたり、刺激したりしてはならない。速やかにその場を離れ、関係機関に通報することが重要である。</li>
      </ol>

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
          <dd>2026年7月26日〜2026年8月2日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-03</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-03</dd>
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
