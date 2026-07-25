// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月9日 / mode: daily-report / 生成日: 2026-06-10
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-09-daily-report";
const TITLE = "2026年6月9日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月9日、国内で39件のクマ出没情報が報告された。新潟県（10件）を筆頭に中部地方で多発し、関東、東北でも出没が相次いだ。人身被害はなかったものの、子グマの目撃が複数あり、繁殖期における行動の活発化と人里への接近が顕著に見られる一日であった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-10",
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
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
      "title": "群馬県中之条町四万におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZjRsaDVuLTRYT3VRcldpU3p1aWlxRXpQRWVPaGxHS3lTb1JIWXV6SFFZMV9CZjdDczY1TXExbjhPYUU0aWhFVFVMSDdJNEpNOEhaQ3FJMlotVHF2RWVQbnRZb2Y3eHpOUHEtb0pxSno4MVM2bmc3enNGTDBHMENtdmJ5M2pEUm5NZkJTVkhOU05qQkJCTnZwUUhENzbSAaIBQVVfeXFMT0R4dzAyQW5hNXZXQjBpU0NKVlRfR1lMMkEtUGowSGRiOWs4WDNmNUZCdGc1ekRKTnQyOHlZcE9mTmo2a3FFc0NYbDlJOV9Mc1M1ZUZOV2lXNklWeTdGR1JDX3U1SmoybjJYTG9Kdm1ua1RNa0hvMVVfczdPc0UxU1J1UGM1dnlBN1NhaW8tX0dlUFJhbzRxcHBheGxBU1h3RVJn?oc=5",
      "site": "Google News"
    },
    {
      "title": "新潟県糸魚川市一ノ宮におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUU9hSmhyMlpQTXNIQzVnbmR0MUhmSFBPRy12NGFrM00yS3A0VnhXTzAwMUtJWktPd052WkZYODZJbmx6RkZWREVnSTNfeEI3amJTeVZ3UTkxYkZaQkNmTW9zZ01aM1lCRHl3Y2JONlRPclM1M1RfVmZfTmk3a3R6SnhmMkZNeWdNXzZiUE50ZERMTzl1R0pKQmhjWEXSAaIBQVVfeXFMTUowN192VjNYdTZiWWZaODdYYS1iT0Y4UWdDNEdLRDVVTUtjbkppM3RGdmtTUHFIcmdWRzlEWGpROHJ6STdYdjJ4dFg5UXQyWkRKQ3RmVzFtMzlPRXBGdU5MRHJyUHFxTUw1MDRyUE1uckJaZkw5X2V1ZXV4Zm5XenBvbjhBOTRweTVnUjF6YTFQTm51TXVHVmwwUERpdXV1aGpn?oc=5",
      "site": "Google News"
    },
    {
      "title": "富山県立山町西大森におけるクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPci1Udm5XaHZ4ZTRUdWQ1bEV3RXZScXVua2lOdkZPSzV0akNha0JKWVRNVk9RTHlZZ2J5TUNSTFAwemViNlNUVmZ6SGNZN1VXeDc4d2FJRWZXT1AzOVBWOHd5cG5paXF2ZkY5RmlqNC1mVWg0WDk4MkV5dUdHWnIteDI5TFhBWjZLRWN3ZGFHeWh2R0llTjZMZ1VrdmzSAaIBQVVfeXFMUFdsR2VMN0xVN2tmT2xmNVRIaUVibVdFc2sxMS04YkVnOGEwUjN1amR1ekhRMlVtVk9iOUIwWW05X3ZSWG9VTXlUN1BBTlVqcnk3cFpweUFnRENiWHBBUVk4ZThmYTZ4SHEyUnJTUllJX3dscFNldG9LN0hZSTFPYTAya3lPeTc5LUc0YnBtY2ZnR0F2Vll6cXhXdXQ3TXdVTmlB?oc=5",
      "site": "Google News"
    },
    {
      "title": "岩手県釜石市甲子町第５地割におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbWdVbzZERkpiVnQ1emlDLS1Zc2pjeGpaWTZ5V0JtV3dsc3RzSURyYzZ1R2NyOE8xaFItVnhVYXJkTjZkaTVKVW1PclBGZEZ1UDVvd0FsVGJVYzE1Z01uQzVkYmxIQVV5aHA0Y1E2clZlLTR0dW50U1lySTY4U19VMXhJS0ZWZ25CMlNYWUlvN2prRVV6c201cWNJNUXSAaIBQVVfeXFMT2EtbmEyU1YtT1JIaG5ZdnFvbnR2M1pfX19MYnU0VTFDd1RqZ3RlVUszQzk3aWpJeTg1MWxuRXNvUl9QeHpOTHEyUzlIQ3dXeG5PMGxVQ3pITi1seFd3c3hGZ1U3aUIyYWdKSWFWcF9sUWd6R3dZbXpHNDVaaFREZ1RNZWVuNDFaZHNqUDZGM05XMEtFdHVKTmxFNHNsWlE3MTBn?oc=5",
      "site": "Google News"
    },
    {
      "title": "岩手県釜石市大只越町１丁目におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNM29lVDNXQjhqYzN5RE1KOE9ObGhyS1VVRWNNZnoxUUllMFhVZkVucHF1UGxzZ0ExaUFGcHNEQmZxcHJYQlk5Y2wzcnc4OS15ODhhdFVLNDY0TDR3WThGQTh1OWcxd0stckNweWt6VV9CRm9iSmlTeVlJUEhiemgyaF9qUmprdHZ5WXE0cVNuaG9PVTFTRXYtU0hSVTF4LVQ2ck96VUkzM1g2TVFOb2xj0gGiAUFVX3lxTE5wOWRNbDhvbXdULWJManhYeHNNRXNBUzU4UG5FV0ZhejVBTUY1R2ZfcHlYSWhHa284blNwdnNQalNkZlZYSHlINTExbmh0V1BUdW55WWwtdi1tSmxENnVMV0lBU2Q4SlNwTnl4TlhqWjhva2ZNaFdQbURKUmpTRzI4SFlaOG1XaTA2NGthM1JQdFBTZHRBZm1LWUNuRTYtWVNOUQ?oc=5",
      "site": "Google News"
    },
    {
      "title": "岩手県奥州市前沢石田におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc0JGd195ZUhQZFBXOUZvLWdxM0RKUUktYnlPeUVlSFpEc3BUdWlRaGxZVG1wVzFmX3JuVVhOU2taRDJ3ZEhCMlFzcDJ4cDRQdE0xMmJ4YTdQS3R1cjVLakpVRkNWLVFaM0IwU2puNzJIWjlQNVJrNWVTeUsyT0w3YTFza0Y0cDNRMU5QTW93LUJJMTUzbWFlaWhteTDSAaIBQVVfeXFMT2JvdXJtamFKcl9ITDhZc2ZIZGZNa08zLXVaU3FEa0dMci1fYmFPSEh3ek5oLUZLQ0hJMjNxM2lVX1I3Y1FxTWVkUHRkQ3ZjR21VdUNEdjFKSDFOa1hmNlZnVDdfQm9SWFRjSGg4SW5YT1JuV3I4S3EtcDZteC1kZXpTOHI0d1ZVRFo1OGRTYlVuX1F4dkVybTg5RWJCTVBtSjJn?oc=5",
      "site": "Google News"
    },
    {
      "title": "栃木県那須塩原市塩原におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdERic0NuaGQwNE95Vlg2blJVWGFNaUloOUpoOXJFVmJmWU5wVW15eEk4dGwxWmdPbVM4STJrN3NkbjNQQjFncnJxSVdmYkVxNnU3cTNBcTI5OG5JMkkzNXk1N25XdDNQZ2w2blh6OF9VeGV4eGpidjI0UGgxZjBzaHpmOTlzeC1DOUozVVhHNHBLY0JYOFV6OVVZMXDSAaIBQVVfeXFMTzhfTHpyQXVMTkZPZXNaaUUyakZWX08tMkRCZHlYeDhmVmRuYjFHUjFIbElmdTNQd2dsNU1tdmVocExpRmMzZWQ5RmQtbS1FLWMycFFOTUtQb203bnVWVkg0S1NtVEhNZjFOYWxhUVdtQWV4ZkdRSFNGUXpvMWhHZXB0Uk5zVThkeGJyUnF2RWRZYmdSOVpDZkE2N0FqbkU1MFdn?oc=5",
      "site": "Google News"
    },
    {
      "title": "京都府綾部市五津合町村前におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPdEladUFZU2FIeERqb1dmUXVESms0YjFnalh6cnVZV2RyLTRhdXA3d3NkZVgyZmxqQktxMzU1cVNXU1lRSGFOVmIzNjVSbHYtWThPUk43dUNhRVB4QVBlQjROdVctVUdjUkZaajJsZUJWX0Y4bG1lTmpqRjdiTWNmYkU1ODhqQTE4dnp4Wjd4VW9PeGdRNFMxcFVndDU2azNlbWfSAaIBQVVfeXFMT3RJWnVBWVNhSHhEam9XZlF1REprNGIxZ2pYenJ1WVdkci00YXVwN3dzZGVYMmZsakJLcTM1NXFTV1NZUUhhTlZiMzY1Umx2LVk4T1JON3VDYUVQeEFQZUI0TnVXLVVHY1JGWmoybGVCVl9GOGxtZU5qakY3Yk1jZmJFNTg4akExOHZ6eFo3eFVvT3hnUTRTMXBVZ3Q1NmszZW1n?oc=5",
      "site": "Google News"
    },
    {
      "title": "京都府綾部市五泉町神子谷におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRkUxdlpGU0EzTDVUNWlHWWZlQU9LTm5nVlJNMHAwUDNCOWVwU3VZTHZIVWVFVzFlZ0t2WGhlYy1VOENKMDBvalgtcUZsalhzUFNRUlR0azNrTkxHQ2YxdWgtVktzODcxWUd0ZF9pOXQ0YmpaUGk1QXdCaWRsWGRWQXRTMktUWWJUck85ZHJPbmVaOWRxbFppNTdYWU7SAaIBQVVfeXFMTkNJMTI5b1VHeDRrMnoyeXk3d0lBSkx1OUFfUzB2dklVSUh6OWhOb2JOdDNmaG84Wld3ZFZFeHpXRmg3TUwzVzl0eVJmekQ0eWltU2JYYjk3MzRTZ3lCWnlfZ0xibC1pNi04dzBkN1ZXcHVncmpUZHc5MDVBZnIyU3NfTzBnRlRvT2tPZFhCS3J0Tnl5YzhjWVc3ZWtWSW5mLUZ3?oc=5",
      "site": "Google News"
    },
    {
      "title": "京都府京丹後市丹後町袖志におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZHRMaE5aZmE1T3Z3Vk9PQk01UDd0WUNSWlduckV4Wk9MX2xyN2I4amRhSjY0MGJfTmxvMFdHMEpBbVNaS1JOWDloWWM4QWN5VkY5bVp5SGRkT2V4amZfcFNXbEprSnVZYUlvaUgyNVMyRnBQSFlDR192dFNOQXRHeG5aeVAtU3phSTBXNm5uTzR1ZzRxYTYydWxtSDLSAaIBQVVfeXFMUFBaSVRvRER1Mlc0ai12T3RhWHB5N1BOSDZGOW1RWmF2R0FuLTJhMGNrMjU4NVRfX0p3Szg2cnNhMDVXVm5iUzJQWEhYUHRmTVFZZ3hnVXZTNlBGT3M2ZWJkWXN4V1dpVE9XWVlnSkdQMUh1Q3JMMThPTzE0YlZ3eUQwbFVvdk1rUzhkNVg0S2pqbHRRYmlxYWNNZENRLTR5VjZn?oc=5",
      "site": "Google News"
    },
    {
      "title": "岐阜県高山市朝日町一之宿におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUDQ0MWFNakhWdi1jS2ZCaGpfMURZTVliU21wMGJTSHJSLVVucl9XaXg3ZXhodXpZcHFkeWlTUGV6WFVhN3hyWEtxMEd4SkEzeDNhenFMM1ZmZUU4bnc5MFRoQmpxQ2ZKUU1EZkpzM192LVN3bzNrM2NucDl2MEpTUnR3THh5Y2Q0cmo3VHVYSlhjY1JBZ0d5dDFjSl_SAaIBQVVfeXFMUFZFaGtnYTRwcUN3WjdLVUc3dm51NEZrUnhxZEh2OURvUDVNaUU1WHJjWWVLSHZPbFFZM3RtYVh2SEhuUlhueS1LSzlfSWNwZ2ZNdTRZNFdCYzFDQXNpRGQydmNrdXpxM1ZMSThEbHlndzJDNzhqSk9WbU1FREtja1BEeTl3NnN1dzQwSjZocG90cDU3WmlLTG9lTjVIdWdNRXNB?oc=5",
      "site": "Google News"
    },
    {
      "title": "岐阜県揖斐川町上南方におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYVF6ODR2bjVFU20xd1o0YU4wRjNWUkRWZWVxTWZMN1hiRngyakZ2eTI3YjlWc1lwT0U0OGEzaGpDdnRENXhHQ0hYemtHLUR1X1RIRXAtaXRsdFpYUF90SjF2MHQzZjA1c0NPZ2FUUTN6MXc2S3RQQjBISVpfWlY0bjhaZDlNV1NCRWJlVkRrTEtfOUVkVGRtaUJOYXbSAaIBQVVfeXFMTUVKZXphQ0ZMWVI1QzNvVlNEZ0pZSkt4cERyZ0pCMk8zRXJOMWZLVUNiY00zZUE5N1NkMW91cjA1RGJXUHh1czZ1cG1yRTVLMGZkZTV1enZTeVZQWXA1QzYxYlkteFFoaHMwWUx6MzdOLUR6STF3ZzR2bmtjY0Nud3Y4dUNIc1pMZFlKbHZTYzBzYVAyaGdTSWxKNnhYNnFna01n?oc=5",
      "site": "Google News"
    },
    {
      "title": "秋田県由利本荘市松ケ崎宮ノ後におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeEtRZ0J6eG9uZzdHbEwzb1NyMEUtNUdBUUJMd1ozUW9NeHZVX3RpaFF3V0JOeUpnWXB4eEo3Z3F6RkhtV2xQX2NzeTMxRzBZcnZpTWZaZE4wNjM4bWlFQUVuRjdMY1ZUX2RGNXFhaVNka0hySUdxN1otRE4xakRTdVE1Ylp2elQ4UGQ3SUZDbjdoSFctdjNVLU4yVHbSAaIBQVVfeXFMTXNzbU1iSzZ2dWpPc2RLSnVhMWdqZzhxVnVocTFVaWRlU1dJa244emliQzBFZEIwdGFrNzREVklaMlkwSmFGQ194RGRReHF5N0F5UEFqMmxTTUtieG84QmI3ZTVQWUl2c3l4N3BCNUNCWG5wQ3loOGdQc0JjSk05ejVGNTdyUGNkYkhCQTFILThjZnR3VnVZcjlVSVFHNFFTcjhB?oc=5",
      "site": "Google News"
    },
    {
      "title": "秋田県秋田市浜田石山におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWndWWlVsQi0yZTdZNVpjX21vT1dUT2VCTDgwTHJMd08zdkxjcENkNlZVWFdvY2xmQXlidWx2QkxCQk9kelFDamtWS19yNmx0cGI2Y3haR3JYMEhaenhCMjJXbFh3bzYtM0EyMEhjbGlUbzBmUjFYV0lGdkZ2TTZ4Qmh3QTdLVjVnWE5sNFphUE1aQzMxUHZVZkdxS2HSAaIBQVVfeXFMUHdCSkR0X2NURzlkMEVKeTRsRndqNWhPZFRMRWpjODNRZW5XYkR5ZnVRU1hhMkhPNnpVWUhhMnZQUmwxbDYxMy1oQW5JLW1lZ2kyLW5FQmNDV01yTFlfZW1yWjJLZjIxQm1ISWlXTzNSMEFVeThUbjFJemRLbUdMUl8wbkRqcEtWZmJvUnNvY2VzaXR1cmxFT1ZsTXRkSTEzYi13?oc=5",
      "site": "Google News"
    },
    {
      "title": "石川県白山市桑島におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPajZxbVdoM1VnMzlxOEZodFdfeThlalZ2TGdGbzNBdUNSSkp2WVI0ZmlVU09YampPa3lQRkR2QXlUanZhVDJoRld0cmljaWN2endKYUV4dGYxQ2VHT1JCOXFZVVZtYzZ4REJSVGhwS05nbmpSa2ZOdER1ckI1TF9oMFVLa0Y3RWpoTm1LdmlyYXoxQ3RfZm4yU3h5UHjSAaIBQVVfeXFMTnBDTWlaeHpoNHcwSDREWWFOcTBhNFo2bV9PdEJIbHM4MUt4SWhpdUNqWm4zdmktY3hPSmE3dXpjY1J2Rm9hdXp6WjFKVHhJM2ZFbFllTTF3NTg5RS05XzZuei1FUzBqTlhwUlJlSzRpY0ZDbUVOSVpwYjkyVlVMWVJzblNIWktRUEx6MjB0UVdHcDFTTWl1MUFKdVZPem1KaUhR?oc=5",
      "site": "Google News"
    },
    {
      "title": "長野県大町市社舘ノ内におけるクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbktidTdHM2RkM0NVRVVabXd1SWEzS0VmZ013QVVsUE5PYVFaeDdyeEJwZUN2dzlnaGItdjZJMHhEYnhRRlFQdkhPc0RNLVFuTG9aR29YS0F0dE1Gd3BjY3J2elZ3YmI2S0hISFNyVHdYbHZKV0s0YkM0ekg1QkdwSi1TamRDRlU3MExIczFNeTJpdklxUEtXY3AybzjSAaIBQVVfeXFMT2FVZEZ3VFhGWHI0UTdTLUVyQW0wamNTQkJMTUczMks3dUxSNzktUGViOHhXOW02bXNEMEdCUEZfVGNHdmxJMTY0ci1Deks3SnRNTHdlZHN1M3pqeU1XTHhObFFjczV2Z3R2UGYwdDRjdlotZm96ZlZiTTBqaEJSQzBLX0hMVnRsc0hPZUt4TGItZ3JCLXdRSXRkVW9JLVdZM3ZR?oc=5",
      "site": "Google News"
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
        <span>対象期間: 2026年6月9日</span>
        <span>·</span>
        <span>公開: 2026-06-10</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":48},{"pref":"新潟県","count":9},{"pref":"北海道","count":6},{"pref":"福島県","count":5},{"pref":"石川県","count":4},{"pref":"群馬県","count":4},{"pref":"岩手県","count":4},{"pref":"栃木県","count":4},{"pref":"富山県","count":3},{"pref":"山口県","count":2},{"pref":"埼玉県","count":2},{"pref":"島根県","count":2},{"pref":"鳥取県","count":1}]}
        total={94}
        periodLabel={"2026年6月9日"}
      />

      <p>2026年6月9日、KumaWatchが収集した国内のクマ出没事案は総計39件に上った。都道府県別では新潟県が10件と最も多く、次いで群馬県と栃木県が各5件、岩手県が4件と、本州の広範囲で出没が確認された。これらの情報は、報道機関から16件、自治体等のウェブサイトから23件収集されたもので、公式発表に基づかない情報も多数含まれている。幸いにも、この日に人身被害が発生したとの報告はなかった。また、捕獲や銃猟に至った事案も確認されていない。一方で、都市部への接近を示唆するキーワードに合致する事案が1件報告されており、クマの行動域が人の生活圏に及んでいる状況がうかがえる。</p>
      <h2>主要事案の概況</h2>
      <p>当日は、人命に関わるような重大事案の発生はなかった。しかし、人の生活圏への接近は看過できない状況である。都市部キーワードに合致した事案が1件記録されたことは、市街地やその周辺部における潜在的な遭遇リスクを示唆している。具体的な地点や状況の詳細は不明であるが、クマが従来の生息域である山林から、より人口密度の高いエリアへ活動範囲を広げている可能性を考慮する必要がある。</p>
      <h2>地域別の出没傾向</h2>
      <h3>中部地方：新潟県で多発</h3>
      <p>全39件のうち、中部地方では新潟県(10件)、富山県(3件)、岐阜県(2件)、石川県(1件)、長野県(1件)の合計17件が報告され、全国で最も出没が集中した地域となった。特に新潟県では、糸魚川市(※2)や上越市名立区丸田での目撃情報のほか、胎内市の畑で足跡が発見されるなど、目撃と痕跡の両面からクマの活動が確認されている。妙高市大貝では体長50cm程度の子グマが目撃されており、母グマが近くにいる可能性も懸念される。富山県では立山町西大森(※3)や南砺市利賀村、岐阜県では高山市朝日町(※11)や揖斐川町上南方(※12)で出没が報告されており、広範囲で注意が必要な状況である。</p>
      <h3>関東地方：群馬・栃木で目撃相次ぐ</h3>
      <p>関東地方では、群馬県(5件)、栃木県(5件)、埼玉県(2件)の合計12件が報告された。群馬県では中之条町四万での出没(※1)のほか、万座ハイウェイ付近で通行者が子グマを目撃した情報や、同町内の神社付近で幼獣が目撃されるなど、子グマに関する報告が目立つ。栃木県では那須塩原市塩原での目撃情報(※7)に加え、詳細地点不明ながら報道に基づく4件の情報が報告されている。埼玉県では秩父市大滝や横瀬町の山中で、登山者や猟友会による目撃情報があり、山間部でのレジャー活動における注意喚起が必要である。</p>
      <h3>東北地方：岩手・秋田で広域に出没</h3>
      <p>東北地方では、岩手県(4件)、秋田県(2件)の合計6件が報告された。岩手県では釜石市の甲子町(※4)と大只越町(※5)、奥州市前沢石田(※6)で出没が確認された。また、盛岡市の岩山展望台駐車場付近では幼獣1頭が目撃されており、ここでも子グマの存在が確認されている。秋田県では由利本荘市(※13)と秋田市(※14)で出没があり、いずれも人の生活圏に近いエリアでの報告であった。</p>
      <h3>近畿・中国地方：散発的な出没</h3>
      <p>近畿地方では京都府で3件の出没が報告された。綾部市の五津合町(※8)と五泉町(※9)、京丹後市丹後町(※10)でそれぞれ目撃情報が寄せられている。中国地方では島根県大田市仁摩町馬路の空き地で体長1メートルほどの個体1頭が目撃されており、山林から離れた場所にも出没する事例が確認された。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>2026年6月9日の出没状況を分析すると、以下の3つの観点から今後のリスクを評価できる。</p>
      <ul>
        <li>季節的要因：6月はクマの繁殖期にあたり、雄が雌を探して行動範囲を拡大させる時期である。また、前年に生まれた子グマが親離れを迎える時期でもあり、単独で行動する経験の浅い若グマが、餌を求めて人里近くに迷い込む可能性が高まる。群馬県、岩手県、新潟県で子グマや幼獣の目撃が複数報告されていることは、この季節的要因を裏付けており、子を連れた母グマとの不意の遭遇は極めて危険性が高い。</li>
        <li>餌資源と生息域：今回のデータのみで山中の餌資源の状況を判断することは困難であるが、畑や空き地といった人里の環境にまでクマが出没している事実は、生息域の拡大や、何らかの誘引要因が人里側に存在することを示唆している。特に新潟県胎内市や南魚沼市で発見された足跡は、住民が認識していない時間帯にクマが生活圏内を移動している証拠であり、潜在的なリスクの高さを示している。</li>
        <li>人口圏への接近：人身被害は発生しなかったものの、全国の広範囲で、道路、畑、神社、観光地の駐車場付近など、人間の活動エリアに隣接した場所での目撃が多発した。これは、クマと人間との物理的な距離が縮まっていることを意味する。今後、農作業や林野での作業、観光やレジャー活動において、クマとの遭遇リスクは継続的に高い水準で推移すると予測される。</li>
      </ul>
      <p>結論として、当日は幸いにも人的被害には至らなかったが、出没件数の多さ、地理的な範囲の広がり、そして子グマの目撃情報の存在は、決して楽観視できる状況ではないことを示している。各地域において、住民への注意喚起を継続するとともに、ゴミの管理徹底や誘引物の除去といった予防策を講じることが、今後の被害を防ぐ上で不可欠である。</p>

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
          <dd>2026年6月9日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-10</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-10</dd>
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
