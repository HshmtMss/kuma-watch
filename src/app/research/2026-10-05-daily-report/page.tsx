// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月5日 / mode: daily-report / 生成日: 2026-10-06
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-05-daily-report";
const TITLE = "2026年10月5日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月5日における全国のクマ出没・関連事案は計95件が確認された。北海道、宮城県、青森県などの北日本を中心に多発したほか、長野県における長年追跡されていた個体の銃猟駆除や、山口県での錯誤捕獲および樹木利用痕跡の確認など、全国的に多様な事象が報告されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-06",
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
  datePublished: "2026-10-06",
  dateModified: "2026-10-31",
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
      "title": "2026年10月5日 長野県中野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBnR1dPRXluVzhLTUN6U25iZFBPNU93MnhQbmpDaUJBQmZjMDZ0enplRm1vMUt0NUs4SUloR0JSdExIdl9PLVdjcGZjbW84S09IRGpJQzFqNzVtNEFHUFlJRVVUVnU3N3FjNDE4STVhSU9obm0yN01pcnVaNjNYOFU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 長野県長野市 地附山公園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBucW94R2NyZVByNHdaelR5Ml9lZ2c0c09uYUpUMnVUZGZxTm5vTmw5WHA3V20yNENhSHVSQWw4NDE0ai1KS3l0VmdMaHlNMUY2R2lITHkxaTMyYzNGd3E3dlZDcndXM2g4TXFkdUZzbnBNa2hmQXRJaGYzWmY4SEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 長野県長野市 公園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5xSGx2aWxqTUoyTXNvSGpnWkN4TXZUVXgzWjVfM3otX25TVzdDVFVtelR2RmVNaW1DWFFVR0xQZVY0WjlsQkRYY2ZUSHlLb1FvNnRLQzZERkg0UkpodlBNRzBydWx0LURSWmxLRdIBckFVX3lxTE1HMnA0SWxPeUtSR1p3NTNldEF1eFlwMkNRYjBkT21RbEx4dm1XNXFldG5JdXRHNFBrUEdRWDBjbGd4ZURYdThBSENzaS1UUFRKdl8ydkNRSzVPQ1FGbjdpNzREeHhVaGJ0MU5NeUY2djZUUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 愛知県豊田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAzX0wzSkw4b3I1V2dIY0Z0LVY2V21yWktTNl9saWJGQnhqYlh1bGVGOHpwR3ZlZjc0amZXTzZNY0V1S3hRQjg1WG1yT1Y4LXVuSzRNYmVkNGVVc19CTE9YaFYwSTN4aURrN3JqbTRMZm5oVUZmMnZXOVNJV0FZQU0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 愛知県豊田市 柏ケ洞町郷の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 北海道厚沢部町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 北海道新得町 新得基線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVXFlRG9sSWVWNEl5a1NIb3dpbkd6SVFwdE5vY1BnblRwR2NvM2NHdnROSG9rX0VJSWNKbWRlZ3k0Z2xPajZTa0RaV05NQlVpbE1CeFFFcUdSSTRiUThuUnJfenI5VlhETmN2UE9CS01yYWUtdGgwV1lFTWNmNVo4dlVHLU9TSkdyOTNuS2F2YU05aEd5eTREMEFWalHSAaIBQVVfeXFMTS1QcVRxR1R0TVhiZFdUTUdsWlE5MFlWWmtIb29yLXZYdW1LbkcycTliNmdFTUtieVVsNVNpTE5vSGhTbUNqdjN0ckFzMS1uWEpacy1Cd2lDZGcwWkM3VWowQlY4alJVa016YW1uaXRxenc1X1RUOUVVbjhQX1V0bEs0VXI0ZHNXM2k2bXJodjVxU1dLcjlFcENIc090R1Z0V1FB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 北海道新得町 新内西２線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNQ1l2WWhTRElDZWRBLTVHdHoxbnE2QUluQU9ReFRjNXNVeXFvQzBYaDZhR1lubS05ZDkwWTN2R3U2WHZFT3MwQzFTR0RoOEwzY1p6QmFSa1FfRlk1UnQyd3BZd3ctUVU1QW9RSVZ1U0tlTmxIdEQ0M3k4aktyMjBaMG42Y1RDdDRuQUFCaFpWS1JYT2hGNXF0UkJzRnpnRlA4ekNLcnJmMDRpU1FHaFFB0gGiAUFVX3lxTE5udXV1RWk1MC02VnBBaF90aGFIMURyV2NQbHhNWmFIOTNWNTJDdVNrTEcwNmhTSFVlSWJXU0FQZGZwYW42RlBYcDRxOWFrVVVIWGx3YlU4bzhNWjk2R0Jia2pqejN1LU5XcEZtbXJiLVlfZThJd2ppNGVLeGJOaUtqSHpOam9FSDdKbjU5U2ZDcXBTLU5ZUXBCTHppZjJPcFFKUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 北海道大樹町 開進の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaG91alpxazlDV1NPdFZjbExyZk5FaF80MGxKMmhDTzVueExQcjdES3hUNFRJcXJnUUY5UUc2NkpZMXRUOE9jemdtSlJDMHZBRHVZdTR3N0JTNjVEUll0NE8wVnRWWjNzZEVFNFdncDlXVEpiVl9jYTFwc2pZdGlhVmJmcEN2SEgxeWFTUG5PMGNxZW1URVUzYmlkS3TSAaIBQVVfeXFMTmJDUjAwSTdzdWdxRXpJengxbVg0TlNrOEVGelZTeng3VktzR3lCQ09FVXd1amx3YzJ1VnVJMGtqbnhva1VrZzU3eVRPUHZrVmdNVUxNTXJOcGt5dTRERWdWUlZmQ3RyakxBY2pDclVzbzRFSm1xWkZFT25Gc2dOc1VqUENTaUFRVkNSeWZKb1NRNVpXSndHTmxHbkNJOTRpVlJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 北海道上富良野町 東６線北の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPcVF4OG95blVXc0FWSWRqY0lqQW1UaTNiX1Y3bW1wX0REY3lSTmVVUnhXeFkzYjZLX2xqUEJnX1Z5WmZ3ellmeVJUcUF6ek9pV0g4M0Utc2kyMmNQYTkwdjdqOXVNUXd5WFdpTVJ3blpoNm9OaGU3SkNpY3J5cHN4bml2azRSemV6aWdZejJUeWVFNnRsaFhPRGh2M1NoQXB0NnNPdWI4Zk15ZTlPMEttT3RWRjlDaG56bjNoNlhRZ2QxcnRkS1hRUHFRYXZQRzJQN3FSMThZbUsyYTYzVlI5czNHMmZyYWY2WlRiU29OcjVJQdIBogFBVV95cUxQZzYxWHB0N09GNkY4QnBIbE9CREpqTmhQNFVDeFg0d0JaX3JUWWlMWVVCZ0VhTEFwQkVVR2RWT3VuZTdVa1FEOEVxaTJxX3kzVE9NMmkzSUV6RG1vUlROaldEd2dOOHEtb3ZySy1feUdMYWpfVWJ3amVQODBtbEt3UjlPOWFqOXV1TktnU3JaSTZpSFlQeDgwcExGWlNNMEdrS1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 宮城県仙台市青葉区 芋沢小坂南の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVUtTZGd1dmtzSjZTR2VjYldHdE5XcjdxamRSOG9oSnVNSGdrZjBQcFMzUzdtS3pCQWRSYVpiZDBRd3lpWGdkdC1NYlE3TUkxVXRHU0J5dXh1dDlMbUUxQzQ5aTFOaTk2Q2N1UDNiNVoydGhvdmNfSVlDcWtHeFM1NmdnWnY4VEQ2LUZIQ3lNbUlQUzZ0cUZYcVowT03SAaIBQVVfeXFMT2N6UDJuTko2QnU5SlhZWTVfRW91ajFMQ3hjdUs5ejBOS2xBaW03anhET2FwQl9pb25SQXVUQUxBM05Ib3ItYmltOTY2cjJDLXhTYXI1eTdKVlZpTzlveWNfZk5IYjF2VWk2a0xtTkdNc0ZYcmRtc3BsdEIxeVNUbnpwSlNLeWxiUW1pZXExcnhpVjc1anNtaFpZN3pxWm96Q0pn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 宮城県富谷市 富谷唐竹沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcEk4UGV1Vy1ob3gtT3BKdXVZWVlvSWtBM2lqazRDdHNuUjRHVzJDbVk4X1NjMVdUNFhGWXlQdHBnZmhfTFhlVUEtMUx2aXdQUEV5UUxEc2lGcG12b1ZvN3N6eWhlbjYyRWJKV1c1YUtpNTVjNnE5NEZpZ3JST2ZHWWZ4RGZnVUFQbnMtaEFBb0pKdGkyVTBCUWlmd0zSAaIBQVVfeXFMTjBoVXFxMFRyNzU5VW5hREtQVkZoRDJMZG9NWUwyc2xuV3QtOTZhbXg1d2pZV2xLMkFCdzZDM0RjVWJGbHA2QndlT2JURHFDaTlpT0Y2SGQ4Zk1BM3RtVF9ZdDBnMWJSSE5wOFNsRzlLRzYxa3BjNzZZVDlUSlZ1Yjh0NWM1U2NsNUJLQmVxREVwOU1wVDNRLU95UDc3aU84WVV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 宮城県大和町 もみじケ丘２丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSUlLNVpaY1l4UVZxemttTmdEdWc0UTE1SU9rS2lLYjdDN0I4R2pHeEl5RUs5TGZhd0hjS09FcVE1c2lVOVBvTDkxVGFIR0lERlZ2TjBXZV9EdUZkWUJfWG9nQkR3azFTa09WX1VrZG90LTZMbG94b05FczFHMXlKQlc3LVBicG5TU3E2bzhfRUlJWE50cXM2aFdsdmzSAaIBQVVfeXFMT08xQk84M2MxQzlHcVI4S1FzNENOWXUtVHcyamVZczIySlRmYnp4VS04aEwxLS10N2NTZXZDSHpVV09CNF83b2dTU0dxcFBQVVpHT0YxdHhqZkZFSVBKQjB2MjdhVjZpb0xmV3BHZTZta01XSzlySFQzMVRyZHoxWlZlbUxyNkFaSUVhbEI3RFVDWlBDTldPMkRDMXpxbFRhcXFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 宮城県村田町 足立万崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQQ0h2REZ6NWpxZGd0QjlVeEU3cjN2MzNuSVdobGE4MDF0M29ibWFUNE9fVTcwSklWWXZMem8zMWJmUnNtcFQwdG9yQ0hpZU5KZC01YTNKSHc0WjhSZ3pJQTZKb1BpWXg5WGsxX1VNTWJUbU45THZwTGxfeTJvUnNIekZoMWg5a3VHWVgyQXBOZGo2bEppUGRpYjdKSlpIcXZzbGxoNUhNVUtqcXF3aU1r0gGiAUFVX3lxTFBndVU1OUlZMXJuVkI3UjlDZjdwVEQ2QU1sUnZJcTIzTnl4anRSZmdwS2NteUpqV1ZKbm8zbG1vdk83X1d2QzlzRnNfX1k0NURaOVJPTy1LVnRCdDBNZlU2cl94azRMZlEydVlmYWpIS2V0U1k3eTJhbTV2Z2ZtMGM0b0tBRE9KOGF5dnJWcVJFb1JrVmJxTUNybm8xTGlVMmN6QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 宮城県南三陸町 志津川天王山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTWI3cW4zSjFBcS0wUGk0RklwS2xESEdhWG9IeXJNYS1sOURvbnJfanN1OVhIeDNHam9xTWZaV2ZlTEhSU1NHaTVsVlZFRk5HWHFWY084WnRyR2gyZ3lIV2pqdTBVVlM0M2h5bVgtWFQ5STlwTUl4WmVIdkJWdXZYN0FBaWNob1h6d2VUeFpncjZMUEdhTFdWb3lXNGrSAaIBQVVfeXFMTTRrUTNSTV82R0s5SmhGZFh4MTRzZ2E2dFNkeWNKRzFFb0pWOEhId2NPVnNwUlJ1NmJFb01ObUkyLVlkOXFVMHkxZjBTVmZ6RjlyZ2dkUG9SWkd2d3M1NkFKZXY4UTB4eHNqUGRHREdWWkxocEdSQVM4VWRfVkVXTlFkQ08wX2pJNHpTVnFDc1l3NFNNNmRSRThnVFJDWUVmelh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 青森県八戸市 鮫町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPX2NDYlJUc0dLMDRhSWo5UnREMkVmQjBhT3ZYRXZyVWV6V1gzby1tV1dXdDRPM0NtZ1Z5bWNMS0dTVU90emVabi1VU3ZPNGtRRU5EUUNvUktOV1lNLThOU2Z6c1dXUkcyQmhqM1BPS0FjdlFLRWVfSVJ2TVdLX0dOODhrN0tJMkhPYWcyVnl6Yk5vX1pramlrajMzQzLSAaIBQVVfeXFMT1JrVm41YmhfOFRkWTEyaWxiVG81dER3bnRNclJ3Q1V5YTBsb3JoT284Q214c3BIdjdnNnJHVzVaeFM0eWxiTXdLbERILUhTdko2Y2dWeGl6VXJLbGtNVWliME1nZlhGTzg1V21MTzMxN3d5ajNfYzZ5ZGtMcVJwUHQza1hOZWwxTDFwYl9wY2dTS0I5TnVQWmREV3NKMl9kQ0h3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 青森県八戸市 北白山台４１の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 青森県三沢市 大町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUnVwUUNQc1htLXM0TktfSUQtUnZQLWxIREtBQ0RhX0FoektHSkFXdExfMXoxd3lDVWFjSFExdnNMQTVfcXhmSUJYTVEyclVScXU0aC1YcEo0T2FSOTJlZFd6Q0RaalVhMWs0czhWR19MeFJGbjNWNkx3eS02MDZVZEhsaXRFZkxQQ1NFeEJSZGI4Sk1mSDNzM1BrY1rSAaIBQVVfeXFMTlZYWUM3YXdkclppSHhaYmVVLVRzNFpJYmM1d1l2UmtULWNEcHd0dk1ZeXJoR2tUamRnd1kwUnVoVE5BWEx1b3hKaHh1bkh1ak02VGZlczM2aXMzVTV0UXdxWGxkVXhRRnlJenM4Wk9GNmtfMTdjY05pTzNOZ0dzTjYwcll2WFhaMURXSVo3eGE0eVZFNHNZWVpqaTEwNlZZUFln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 青森県青森市 宮田山下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMld5U1o4bERQekNuMTZBUUhWRUVWRFV5dzBkVDNlaEQ0ODh1OFd0QjNwWmN3SHV2TE5WcXZxazAxX2ZXcl9OaUZsdTMxNzF4Y21tV2lFRTd4Y0hqNlZRS2FvaUpxX1FNODNmOC1SOTg0NVVIdGMtR25oamQ1N01kWTN2eUZJOWV6VDNKdkt6dzYtRHNJLXd2X0dmTmnSAaIBQVVfeXFMT3I0Qlk1ay05S20tU3hWdnNsekNEYURVaW9WNzhnMFF2WXdFSHAzcDFmdWh1THI0ZTRQOU9wX3ZKLWdObWxTNno5c09janNWTUF1WXZyZU9uZHk4YW96eDFFME5qTWJXc0FhM0JXeXl1Qk9OSDF1RzN6UHVFWVh5WV8zZV9yUXQxUnliNVNyLVM5WEk3MUtLMXo3WndFYVJJTnBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 青森県東通村 野牛の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQaVAxZmZDT2JNVWJqblNMa3c1MVNzcmdvSE1PNnJpM3JNVGtOeFRLSTh2NVBGSUgwNzM5S044N3RpRkdJdTM5U1N4enplSVZlbWZqQ0lHQXcwRU1kcHhNTTFtZXd4b0p6VmpySWptX0hLdzJXYWhXNVlnNmZHMTBWOVJGRzNkMHlEaDlxMGk3VlhKaXZEZE5EZjYxSFdvNGJYX0t2MVJ2bXJLS3NKOFpR0gGiAUFVX3lxTE4zNEtFQk1fSDN3UU1aNWN6N2tSeDhDMVJJbkRwZEJfY0FTM0d1Q3ZqY1gtSkQ5UThzbjI2WktBRHJRZFB2WUtESXZkSHg5cndhVE5TRm82dC1Ka0ZsQ1JtejdpMXR1N1BfOTVpZG9DLU5hZkRELUdGMk9iQk5GbllJWC1Xa2pCVmNEYnVkX084NldTYldJc0phcnlUY3FGclpxQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 福島県白河市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBTZjBDdzZvUDZkR1J0eWRvQ0RyNEpiOWtsMHZ2WktUbjFfem01d1dfdm1SbVhDNlBsV21RQmtUSG5nNk5tVS1vMWpGanFpSGdyNEZ0WnE0T2toUmdLRDJERzAyaXhJaFByT0duWUItejdZcFM3UVNQNlFOYXRzNVk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 福島県白河市 関辺油久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOQTV2QWg1c3ZRdEg1S3dmQWd3TDFJLUt5eDNWSmt4NGFFcm95eWVPa3VYdklPaElIZGZEUW1yWHZTUzhrTm1IUjBCVnJVRVdGVWtDeHZQamRvTFdaR0lJTkFsN3JWbkRKaFFUYTlKUzdiU0J3NnlfZUtHQ1pJdWRDS0NTdWdWQ0Zzb2hDQ2ZqeVZ3VFA0alJFWENzNll2SWZvaVgySTNFa0l6NGpjMFlXS0pXRG9XWXJnX3pfeFBhSFNiOXFpb2ZUa3J3d216ZHcwcndrTVlOQm9hbEI4Yi1RQlFZMjBlbk5OTGp4ZDBFTUo5QdIBogFBVV95cUxNdll6M05zdzFCZmpSTVVaNFlwbnFlQ0dWVFUzQl9hTFljSEotUFpZMC1MTy01WUZDX2hvZGppR2NjVDcyeUg4MjN5dnpXN0NBdXFET0RZM3l2Z0t3WWZtVVJDVkZmbGdzYVpsbUtIeDVqMS1CSF9hd2liUmpjU0lhb1ExUkZPVjE2eXlUeXdzSG5OR0ctTnRmSTlfOTRUd3RhOWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 福島県白河市 福島県白河市関辺油久保の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 福島県二本松市 戸沢熊ノ久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbE1GNDhfREN1RmNnOGM0MU9FdXNEcml2MldkYmNTWXhsVG94Uktkc3RHUXRzQmlGNkR2Y3Q5b1JqTVpvOE5zVXg1QlBZaUVHRWp5SExGTEJEbWZIRzJsMTdfZ2JCRVlUOFYxMjNoa05FTG1zejdzVHlRWkhCemswQlRUZWsxVFY4ck5FazBXcFpSc1phTkpnVl9oejXSAaIBQVVfeXFMTmtOckY4dUtSa0NYZmVUTVhFZzZjTGwtV3FITmVGV0RrS2U0elhlb2dmeGpsWWJjZmlPaDRBVWdueklnUkJlTGxlUXZfbVc4M0IwQmVBNl9yRmZ6Vnc4ZVkwX3RTSWw5ZWRFX1dHbjdDMGdXcnh0MExyVzQwdHdiQ0RhdFNxZnl5X1Z2NGpGb1ZiV185dW1ZSHV4ZXFYTUstRGtn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 山形県天童市 下荻野戸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZVFESTJ0YmtQX1lxNjlEQUJ1Slhuc3U5cm9aVjBqNThOdkFuazloQmRoTF91a3NrcTgtQlJEUEN3SDJ1cUpad1VVZ09UMVF3bVl5RzF3dFZ4QTFyM0dmcEd0amZDZFBYMkxZVHMzUzhkenV4ZnNDa04yVXpxUVc1bTlYS2hjU2JmeHVqR2ZGcnozUkgzRnJXczYwa0nSAaIBQVVfeXFMT19jZ0xlcEhIYXhWQ2l5RENTQzVUcHpOUVZjUktaUTIyVnNwaXZTdDJnMVUwck5PbDdhR1BNMWpMM09PR1pEamlZLWQyWkxlVXJodFBQV1JiYTBOMVQ2cTdqNGJhV2pqdC1uYUN5MldwZkp5VVRYS0loRzhDd0cwYUJWOFRZeksza2UxY0xmX0swd0haT2RaNEFwUlpmd3JmaHd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 山形県天童市 大字下荻野戸の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 山形県白鷹町 畔藤の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 山形県高畠町 大字塩森の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 岩手県盛岡市 乙部１地割の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 岩手県花巻市 東和町毒沢１区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYkFndUNwNExuQlpMSjVvc0UzanNici1jcEdMeHVIQk9VVXA3MDl3X1BSMWdDR05pTnJMcGFwMk9uS1ktNXVpQ2poVFg5WkNMeEtXNy11UlZmVWlvdFZCV3c0T3hVLUdBNTA5ZjhRbUxZNEg5OGVQY0dwNUR3emtCbVlSRG5qbXdaSUxqNFU4TFpmWVpTSkpMRWl1S0HSAaIBQVVfeXFMUEJoNjFmZ2hfdlpTbFR6OG9RVGVza3RYc09vV2RpcHlQdkFob1dxdm9LdWItRjdlUEVKZUJCQXRUcXRpZ2xhWEhNVzhzV25KLV9PT2lCTGI5elFCVUZtdldzWmQ5TmdGb0RvbDRWQVJXdU1HNGluVHNXRkFxZUhiN1lJQ1hTM1dvbk9xVWZsXzhxRkdRcmtCM2Q3UUtxWEl6bV93?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 秋田県由利本荘市 岩谷町ハケノ下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT0hvVW1hclpJei1KYjRpX2otUV94OTJibFROQWtJY1hTX20zYmgtM2ZXWjgxWllWOFJJOG9CaHFKZDk1eUJzVlZuRGRXakwwc3g4SHU0QTU5MklaVFEyRjRhODRhTU1KQkYxeTFwZFZlWFdBcl9SdXZQU1F5VktlQ05DSXN1ZjBLbUUyQU45QkVmcm5kYzUycDdBcmfSAaIBQVVfeXFMT2pFNjJKcDB3ZUdyWGNYR19tQlJmeWstakpfY2Fhd1ZHdTdLVjkwMnpyZnpIQVNBLUUxdTBYREo5aC1ULUJKRnhwMEFXZ1k0NmJ2VXlfZEoxWlV2YXB6Q3l3NloxTUlQMDQ3MllpazVHRWd6YjdZTFNXczNkbUF1Z3BuenNuX0ltYk04eGUwWDRiYW01ZS1GY3F1Qkk1Qnl4Wkpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 秋田県大仙市 土川上大野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMnZnRTl5SGpQbG81dDdaQjdHUklUeE9BNzFISHVYOU5QcVpwdE0ycTJGdktSb3ZhVmdKcGFBbXoxX0o3Y3c4NG1Cajd3R0t6cUdKNlF6S0lMY0NfR1VIbEQtSFJ5dGN1aVh6cUhCY1ZfSHVjMHJCZ1lGbHRaZDJEckJQTjVVRkdISlRMcjVkbXFHUGhfTWpSbXFxUUfSAaIBQVVfeXFMT08wbWgxcDN5YVFwYm9HajZDUXJkcFRnM0RsOURXOE5aMkVnMGVobDFaeHV0U0JzcVdzWlBLV242WkZfQTZHMk9mR0l1N2xEWno0RnRCNUhVTkJUemJyRWFxc1Z3cEU2eVg5WnlSdUhTREtybUlhMUxpbkw5d0g5aEJlS2xDZHpQcW9yVkUzWTRoQkN5VGxvdHU5N3I0TkRsdDBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 秋田県湯沢市 杉沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOT05jbW5lMHNRZWcxclFaZjhRMVdTdFRkS2Vzb1Zaem9aMUtsUnIzUXJUMWg2MExILU9Fb2QySDc3dDFMTzU0REFYZlZ5TFM3c2RWZnRGUTZRSTA0dHlERW1FaTRJN0kwOVgyaEEtZEdUZzhLd2xxbEtmaFpkVGtlbnVLUE1SQldnRnR5TE9ZelJ5WFVQenc2eldJMldZd3ZpckwwNWVjNzNVZEFMR25IYnR4M1dCQ29wT0R1VXUyRFgwelhvZlNHWkE2aklHeklBcmJkZUM5WXAyWGZpbWNYUFFUbURVODdsR1VrdXgzbHFEZ9IBogFBVV95cUxQakFLN3pCd1NVVG1MWTlDTkRkcnV4THFTN3o5WVhPWnpNbDh3cnR2TkR5RDFlM2toYTJhNUNGNTV5STRLTU5SUEZaaW5zMUFuQUNKTV9xRk9faHlrNWN2ekZ5eDNCMVhvelBIWEU2eXZLMm8tTkJXVHoxUnE2S203YWc1NWppVkdZSzBDN2pkUDNLNUtrRUVjV3NVUkZWbHRoSmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 栃木県佐野市 あくと町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMzhPek92SkFKS203SS1NQXJGdkxIWHZwRS1BS09SQ21lRmFCLVZheVBtaDU3ZTVTTnVVemRjREYtR1hoZkJLMlZoYk5PNzM3b2tjc21hN0p5RVBpck5udHFFZm5KRWp4eUt3VnZRQ0Jha29USjBqREhLMW1vYzdxZmNBTFVwX05xMG9oNjRoYmI0dUdxMHdJeUdkZHTSAaIBQVVfeXFMTjRRV2RjbUlleXhRd3lESUlMSzAzcUpLbVBMR25COE51N2IzX29rbDF1WVRiTkEtUThOdnZNb1pKX2ZnWEVGNldoQ0RuMkZtUUZRTzdUVW1wV3hpRWNTOVg5a3ZoR0YxeWc2SXp0OVhROVZ4RXM2M09TVzVJSnhwdjlRU3Nfb2stNS1UcDZpR3NmNVdkU3ptTTBvWVJhY0pacThn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 栃木県佐野市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 栃木県佐野市 閑馬町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 栃木県足利市 借宿町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1uZXZzbmFoN3pWVWNCUTk0WHhJX1k3TzZRV2ZwS2RscTgtY05FTGZqT0R0RTZBSDBkNTgxeGxhRThVN3RkZmpDbFNLTXFaQU1Lc1h5THdVQlNxRVVmSFdIbFh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 群馬県みどり市 東町神戸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbG9KWFRBZVF6aDhVNHpyVlJHYUtpVDlFODFlS19vX2dLZ0tXbk9QSHlNcnNNZ3RwelVTNF9KLUFiV3RfOGp1NUp4U1hFM2xlRk5DTXZKaTlxOHo2SWF2UVh6cFBFWVBUUFE5Q05zUnNQenQxRDdtenNDT0wyalhoMmxjZVdXa0FHbkhOekoxWGZtbTJKSmp6SnFxeUjSAaIBQVVfeXFMT3ItUmQ1aHoxVzB2VV9ENnk5OUtMYktfSjBpQ2xDTXhhdUlDeVg3eTRnbFhwbGpsTklmZlN0clNlNEVFRUxoZUt2SzlBRkdjM3o3NEI3NXh1eUEzdkxuaEFFeDFPTkR0MkM3VG52U3h5RzlSaTJIaElmNHF3OGotM3pSLVBVT2pQQTN0clpPY0pZOElVQUdBazYwYk9IMVE1WWxR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 群馬県みどり市 神戸駅の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 長野県飯田市 大瀬木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNZUl3Um5lUkhoUldEY01nQlBlUU5mMk54dmo3YnhGZVRsNUpFYzI2cVltNVg5RVZhUVZFTUtLNXNiQWpsajFDRENSWHlVNlozbFpFbTh2X0lXSzdmZmJrZkR5bHh2T2l5NFF6eFZ6enE3NmxFTHpqUWExSlFoNDREQ1RYMFB0TnhpN3daTGlYQkhzUjJ3aFpqMmxtVXJLSWlfYUR4bTRNZEIyQTlMOVNR0gGiAUFVX3lxTE1ZMXgxN0hDZnpDNWpILW5xZk8tVXQwY1dHU01MSTh3UkJ4Nml6LWpLTWhvWDFPWHVrbjJKbUVxZ29udWppbi1aS283Z3p6SFJjRmE2NURLTlNJUkRJQnRGRk9aR0FjVmRESmY5NEZDb1BNQkFoX0xIQjVzYmlkYkU3d2l5SzY5dTNFbDExVG8yMEY4X3VIajJsWEZPSU1SSUMzdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 長野県平谷村 中町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORHltREhCQktVa1gxUk41UWRISmJaaUJVVW11VmEyQjdrdy14XzZUc2dIWmNSRVhUaTVkY29PZE03emhqcUJ4UEVSUm9BNTdwSS1lOVd3QmkzMkZpNnc5SnpUM2FqV1hxYnlxNDd1ZFhRemRHNmZ1SnZ3UzFxSTlmVHkzZ1VFVXBxOWZmcFp3N2Z5eE55U2h2YW50b1d1ajFWU3h6ZEtIdk4wVy1abGhZ0gGiAUFVX3lxTFB4TkpEdUdDazBTUEtaSmZOZjVjUGozQ3lrNm5MOE53ZzYxbmJVS3M5MndNY1BYZnVNd1pjU0pVTHo0eGZ6MW0zaFVvektVZEJuZnNJX3VzaHdMMjN3d1NjSG0yakkwWTAxVWVUYUhPc3RRc2ZtTWo2eGw3ZFEtUUV3LWM2ckJOX1VfemJaN3hQSG5PZDMyTUlaSDQ3R2d0dTNiUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 岐阜県揖斐川町 上南方の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 岐阜県八百津町 伊岐津志の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 岐阜県中津川市 福岡　八布施　地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 岐阜県郡上市 美並町上田下田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUUw1TG9fTWhXaG1xNHhpYVdDNnVnRGlKMUlkU2xYVkE1cFhob1ZXZzJ1N1Z1V0JyOGdKWW9CNW9vQjFVdjlhcm9JYnBKYnl3ZDRSRzFlejVSZUszei11ZVJTeldVRUxrOHhjRTVSa2s1bHBBUno2ZEN6R3Nrb003QU9rQ0lzbmYtbDlBWEhYcGVXcmZGRFFfN2lpSkHSAaIBQVVfeXFMT096UGh3djRQS3JDZDVmS25TX25YMGZGa19mSldSdnU0UjdZUXpHSk1lQVJBX05rbE9PdHhtZE1KRXdBMXp1N1pob2txdHM5aEE0RjNSLVJFa0lQUS10V3YyYkdIMDY3WlRHTENxZXJpdkkwTEsyUEtQd0dIeGptenIzclgyMnlHQlhmbDE2RmxRUUo3dnQzUFgwZlhfRlRTbWFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 新潟県上越市 三和区北代の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZF9nVGhyeGtSVTdpelZlYm5vSjdvMVVKVjZOVW9NR0pjVU5scXU5eXFLR0R3QUo4aWtUdThKTXpsbXQxc0NlRm9WbkRaMEE3MGJLZ0N1N1FOX3BfTGY1akMzUEJxNTZwcm94ZlNYd19zd2ZsamM3ODgxRlFrYkpTbjE5VVRCUWdOd05pdFRuLTdsTDdGRjVmWm5TelXSAaIBQVVfeXFMUE82dnJoVDMtc3BQS3huQ0d4MktQY0d6V0tSajdRNUFOeFg3NVN5VEVqZDhlVVVjdlJDR3pPWjVSU2VSb0UydHlvblRJM1dmWHJlR2NRM2lGa2E0UmY5UW9hUUpFRlA3UHpMSTk5UkhDUXRMMjNBTGJidm02ay1BNEJUTndRbDg2Z2o4UGJkc2FXblhBcHNuOVkwVl82OW9JR21n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 新潟県新発田市 箱岩の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZWhXTDNmeFdScVRHUzFFRkMySGVVcW1oOVRvLU8yUVNvR0NqejFTQU9nYVBsZWNtRG42WTlIZkdnMDhnaE9Qc2tENFI3eTVTc1pNbFhmZXBLVUtTYjRHcUFOZTVKVUlucHEyTWdQaTZ3WlVRM1JwNE04SS1nQlNWVEwwUkVIX3hKOW01R2I5STJDUEZvamlqZjNoYVTSAaIBQVVfeXFMUHJoSmxrd0FiOG1oWERLUFNVQWswcDlWY09CZExwUmtSdURZejBDMzhPY3p3SVF6dlFia0NPMEhnYWhwNTdDMFVUMVBFckxzYkNZT3BLUXNfbkFvWWc3YzEzQm8zTHM5VEFLUFdCRU5RQThqN2VDNXNIbTJNenJiOFFxaXJqMjBFMnZMNGUzckJzRHFBQXNfYWU4NW83eW02dmhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 新潟県魚沼市 下島の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 富山県朝日町 南保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaU1GWHV1cmRZQ2IwYm5rWkJtTno3bEpidlM3eVRWRTVJWW9yR3FxVGx5dWc2TmRDdXdjMUJTVHJuSkhsbzlRV05sWmVleUpsNmdVU3R5ZUhrN0JNN2tiWEdyaXJNTjFpUVpQemlWRktRRmYwRHhHUmJoV3VBS1ZkNHdXU3BDXzRqV19wUXpQaDRvc0RQNmhFX2cwVnrSAaIBQVVfeXFMUDBORzdfVm5udzkya250UklnTWtFVTdnU3JCWU9sVXhzSXh6MlNYalE5b3lhSGYxclBaU0NyeXhkNjRLMnNvTDFadFhQdzdDR28zM0cxTjNTZWM5WkkyVkJrdkdMc0k4c0tMQW5KTkNJbm5wYVJBOGVybHRpbU5oVzZ6Rkw4TzdDVER4aExlVms5cjAxME80RnRrU01aMUlvM0hR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 富山県朝日町 南保谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 福井県小浜市 中井下中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNNXM4a0tFQ196azBIaXZWUm1VMWx5dHBSel9CMVVUMmV5bTBzQ1AwOHp6WldLaFJhNUowVGQ5WVZHLXlaLXhYMmlIMW5nNVFKRGpiak5CREE5al9FSlNGSXZObE1RbGZnNnRyNnpVUHhnRnNFLS15aGhIUE5rY2JZSDEzWlBXeS1ULXcwODNDQ0ZfRFFrRk5YcE43d2VOZ1ZIVUVFN1RuME5qcTQ2c01z0gGiAUFVX3lxTE1hY2UyWDBjNEg3RUhUVktCQXd3MkpHR2FFSk52WnROd19aUnFoSVNPQk5JcV8yZW9MQ0NyY2JwYXBGZ3RXaVFnRWRvUU1iNFJUWjhCbzBuekhITDFsSF81QXBSZ2p1eUtfMFc0NWoxdzN4RVJDODliaGpyeGdWMVlMX2I3YnNENmJFaGVpQnU5ZTlFRFpQMkpuaXBrcTlWNnVCUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 福井県小浜市 中井（下中井）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 福井県おおい町 名田庄堂本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdGxGQmdvaDdaUlpna21UM0t6ak1YdTdnb2Vmc3oyR2xhNkw4ZEhKV0RXLWo2RFFXTTJheW94WE9YV3Z1T3o0eWZvZmY3dDhweVMtalJ2THMtYmRVUlZHd0VIZThjVHV3OVVTU3EzYWVqdWh6WHpReUJaMHBhWVBRdjZOQUVzTHFTSlpxbUlVaGVrU0lDblc1bHdEM2vSAaIBQVVfeXFMTmhoUFNKaWZZUllMN3p6alRSNXA4THN4bWpOaXMtbEtJNk9pV25ZV3RDSWhHYjNvNTU3cGhQa01OYjU3ZUJQbmFwaW9TSm1WNXFrbHVTakxIOFBwaXpIZjBXVEVUckZvUm1pZ3pUS2VpN0tHamVaeTJqMVJHRzliTDZCMkpJM0ZDblBwQmdJV19UVlJLVXFmclo1VTNWM3prUmJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 福井県勝山市 北郷町西妙金島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMEgxTmp4MXJxY0R6MGVkZHREMzdTWXY2dzZpMXBUNmU2eWtlOUtqcnlWMmhrYXQ1UzQ3TFZfTWZnc3JBbDZMVXBHNG85elR5bUwtczh3c1FlRGJGNE9PNks5OHptcnp1S3VQQ2JoVzNEa3o3RVpHQW1ZdnZfRkt0ZkdwZ2c4amhvaXVwTWV2MlcwLXk1SV9Ha3FPeXTSAaIBQVVfeXFMTl9aM3ZKT2xyems5MXM0ZzdkTzJETDZVYlNlZXlrSlBWeGktMjFFQjI3NERoTXBrTHlQT3lVdGRqYlhOYzRGWTc0dERWejlnQkcwMTJkVGI2VDV1blotcTRudU4yVXRCN0twMlBtcEZRMVdOdmRQVlQ5ZTd5SjhTSm91TEg1cllWWGtZMGdmaW0yWWpyX0ZBcGE4Q2luUTlNd2pB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 石川県羽咋市 柴垣町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORkhmMFNFLURlcXFhbG5ZM291dWhzRHE5UXdHODQxOVpQVmNKODJuS2xucWUtdTlWU29aLVl4N3hBZHZuMFFNbks3TGx5akhfWHF6cGV1dl9HYm5WNHJYVVNnanJCZG02d21fVklLN2ZkT0hkdUpLa2dpT180LXJjalBTNmJNYmIzX0pRQ3IyTHhCdUFjQ1dpZzNwZjHSAaIBQVVfeXFMTmh0cVBobzdkV0ZzWWJKSWlGR1F3TTdBMktLNDFtUjIwWWVZd1B2WGo1VXREMERpVTNSXzh2WmtVcEJqcGRjS1dRUUJidFJmdExHd2JWcmNsLXdKVW1hd3BCdmgzQnJPZV9mU1JhNDEtZThOc0RyaW0yN1lqWHVrUjU1LTNBMnhUcjNObTVvVlF2MU55Q1loeUhnLTY5MUVINk9n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 山梨県上野原市 上野原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPelBMVDQtUDAzcVktWXZvS0VpX00ybnA0NXF6WXhEbEpyQVpYT2taeEhLUVFEdzE3VVpkWnA0MWNVQUFtS09NaHhJeEsyYk1JWTRsM1J0V0xKdGtwdlJNaFE3SERxTG1tRUZsczdIanpwREZ4UXBnZ0x3SkJ5aUViVkFXVnJROThHTkNwaFVFNjZiN3RHOURnTHpQMFjSAaIBQVVfeXFMT1pPYld5SksxRXU0TmpTRDNVVUk2RWg3Z0VNaXVXdVFpeDFNekdZNE55YlhwRUVMOUJvd2QyOWtjcU41MWZ1REVyUXlFOERLbldLVno1akZVTFJUbjVHNnlzazBCLTlfdGhQOEJDX0RnbkNNNzN0Q0hmbDEtT3d6Vjc1c29sekpFbW01ZFdXbG1vUHVXVGNfbFhtWkdwdjFDT3p3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 山梨県大月市 七保町奈良子の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNTNkeGpjWUlJU1RQYjJVTk5ZLTFUbkJZWHB1LWdoN2tiNUlZeEFoX1N4elV2bjJEaUVDbzQ5WFJDQm9Oc2VfSUZ1TDVoUUd2SzY2eWZkakhTRkxPNHd0VnFuZWhkM1JBT1BUallVdFpxLVl4cGV1aUQwYkZ6TkdHeGNDaVB3ZW1GUXNkRkRhcGI0VkE0OGZSLUo1SlXSAaIBQVVfeXFMTzZtQ1VoaGZET2YzVnBCNU1DWGVienNya2h4OHYxQVRsdnRVMEpwV1JIZ2stLWk0Mk8zQ0I3TjA0emNWTXZsQm1xbVphWlFDTnVEcGtUNmdsclJjUTNYVGpuOVRqLWJQWnVpTU1TMEYya1pFQ1RrcVF1UzR4S2RnemxIU184OU10NmxtbV9QOC1teDVCWHlqd0NuYXM4UWdtQnN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 三重県大台町 大台町小滝（集落際）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 三重県紀北町 紀北町便ノ山（河川敷）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 京都府京丹後市 弥栄町黒部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWUlBTENmQTNZUGstRExESXROSk9hTUdGSV8tRVFrREdKLXc5ZWdWNllCU2x0MjdoV1V3U2hMUWM4NTZDRTVwSV94OWtlcWhUcVF6ZlV1d291bEZ4TUhERjZZdzZsREtsQkQ5SWx1cXRXQVFsaUlnUDJHeGliSjNvUlVYY0t1Ykk0bzZJR3NZSXRhZHlLeXpyNmZhZHDSAaIBQVVfeXFMUGItSUo3VC15VWpUalVxV0hFOFNFTlpad3RUOHZLTkZ0U2VBUFBnUzVVVjZiNXVwSEtWMVY2bDlrSnRHdEN6RDVzVGhUekd5bl9pN3RBWFR6T2tVN1dtR3d0MUxFZlYxNjd1NEI5VHFXT3h3VHNmNml2SVN1RERWQkJoNm1wdUVJR3RvNkNMNEdPYUZMVTRqVnpZX01laE03N3Rn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 京都府京丹後市 峰山町鱒留の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQZzlhcEJhWmY4UGVrOUdibXowN1FlUFBGVk84c0dzS3FIRWQ4SUgtMDQwSDFOTjVIUk55MFctYVF5ek1RT2NhUllpZTVsQkdxTmp4ZHQ2bjVLa0czbTgtRXJBdjZKbExQdEV3bVM1ZjRkX2NGeUI2QXYyOWVPeTFsemQtZ0duUzVKVWk2QVdUaWZTUlhib3dGcVBlZlMydmVueXfSAaIBQVVfeXFMUGc5YXBCYVpmOFBlazlHYm16MDdRZVBQRlZPOHNHc0txSEVkOElILTA0MEgxTk41SFJOeTBXLWFReXpNUU9jYVJZaWU1bEJHcU5qeGR0Nm41S2tHM204LUVyQXY2SmxMUHRFd21TNWY0ZF9jRnlCNkF2MjllT3kxbHpkLWdHblM1SlVpNkFXVGlmU1JYYm93RnFQZWZTMnZlbnl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 京都府京都市北区 上賀茂十三石山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONlBxQXQ4RnY1Y2I5SU1NOWFNNHRjUk8ybUdaMDdpeDE3TS1yYzVhc1VWOXpFajhqcnZZdEI5UjI0b1hSMEpXdDMtSEhiMTJXcW5MUUpzdWZaY3RfOVZ3VHlVSlBQTXlaYmhJc0ljOHV3aEFCZDQ0Z3owajBQM0xRZ2Z4RDBoNjNBVXQ3TDUtcl91ZUNLazBrUy1oOFLSAaIBQVVfeXFMTlRWbU14M3hfRUxLV0Y3QjA3VGczMXlrWmFyeUJueWlWcE43R3JxeFd3VXpoQTRDN1BMOFVKcEM5X09ZS0c1Vmx1SklRWEFtdFcybEtOMllPSUVRSHBQQmdtbWgzajBUalE0dm1BSVY0VDJwampMemduUjNNNG5YMlFTa3R5bWtoaGRSRzBhdFFDZGhDbHduVnhqVEJPQXRybHln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 京都府福知山市 大江町尾藤の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPSHo3dVhZSjVXM0psTzJUYVZ4N1hfRS03WXVnUGlYcE5IZVUyRkhYaDhDRGNnZGFvUTRnVW4zdHFKcE5xWGU0YjRmWnNpZXNOVlhES0U5V3Q0N2l2eENCVVNhSE9KRmxUa1V2U3hnMmtQTXUxbmV1N2xEUW1ybGJmajRucm9NQzBtTVBwcm4zZDliR3ZGdm5VcTVHOC1WZ3VHMWfSAaIBQVVfeXFMT0h6N3VYWUo1VzNKbE8yVGFWeDdYX0UtN1l1Z1BpWHBOSGVVMkZIWGg4Q0RjZ2Rhb1E0Z1VuM3RxSnBOcVhlNGI0ZlpzaWVzTlZYREtFOVd0NDdpdnhDQlVTYUhPSkZsVGtVdlN4ZzJrUE11MW5ldTdsRFFtcmxiZmo0bnJvTUMwbU1QcHJuM2Q5Ykd2RnZuVXE1RzgtVmd1RzFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 京都府木津川市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 兵庫県朝来市 澤の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNX2RIUFgzak9tWXo2cUNQdDQybzBqSzVrTXF4NVZHc2hsSm90S1JOcVM5YmlLMDctWFpuMkwzVVVCSm4xTFRfT0JDQTNWMlp3V0xfc2R2R2pNdWZnemI1MnlkelFlSmFqTWZuenpyWjZtMmVsWGZmMThCVGh1WEVMd0lQNTdJLWhNeldUWUQyZS1LUjRaSmVKcWZoaVVLa1BuRVHSAaIBQVVfeXFMTV9kSFBYM2pPbVl6NnFDUHQ0Mm8waks1a01xeDVWR3NobEpvdEtSTnFTOWJpSzA3LVhabjJMM1VVQkpuMUxUX09CQ0EzVjJad1dMX3NkdkdqTXVmZ3piNTJ5ZHpRZUphak1mbnp6clo2bTJlbFhmZjE4QlRodVhFTHdJUDU3SS1oTXpXVFlEMmUtS1I0WkplSnFmaGlVS2tQbkVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 兵庫県市川町 下牛尾の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVzFSeC1jSmRyNU52cGlwRzJNalFjZnRTdTNTd3BpZGYxQmRSSjhUY1dIakhDXzZqQXlvYXJQR1BIbDVzcVBxRVFCRVhSLW5jcGt3M2NrTDFTZnBwNGJfVHVxblIxUFlLelRqdkVqQi1jWVpiUHBKYjZqRF9VU0lLbnFIaFl4NjZ4d2JDNHdZX0dHVEhuMkRrd2RpdWzSAaIBQVVfeXFMUEZRVnoxTmJWWkZWclJPQW8zN2ozQ3Y0UWF2VnpaNmpaaV9aSmMyVTVGUWdyTE1MVl8zRjJuaUJxY3hPOGItWGVSdjNUVGxqMHlqVElLM2RyeldQLWRNanVWaHVYSVNoS1lEMzNRYkoyNzBrN3lhWHNBSVk3ZHlwSEZRb3FSemtWS0NmMi04RGFtdWVGTWNYc0lQOUlNNWxhUm1B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 山口県周南市 四熊の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 山口県周南市 大字四熊の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 山口県周南市 上村の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 山口県周南市 大字上村の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 山口県岩国市 錦町須川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSXI4OVdwWGdxZXd6ajZLZ3Jmc0dJMXhUcXM0WUZRRjNiOVNjSGlxMlB1c241ZVpRMVhZSExRMHBCV1RqTlJKYXc0WklobkNIZUg4R29rUmIxVExyUy1ZU0dlLThTckh1ak5xQS1hWVppZ1VZZFNnZ0JIaXV6bFZrVU9ZX2djQlRUV28zWGNiQk5NdHhZcDFudW95TEXSAaIBQVVfeXFMTUxhRkZCd1hiYkxVUmk1a3BPOXlITm9ETXJ6aVpScF9GemZZRHpqTEZQbmV6aTl6OGhuMGNqdDZFemdKUkpScGIwWXVvbFU2d2cyRlItcDV0QnJxSWE2Uktpcm5QUWZYZGVYS2dhUEx1Q1hvT1pOZ0FlalctVUJnOXZBajY0MHQ5aXVqb2ZWTXdSNUVrUjQybmxUbng2VWx3UjNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 島根県奥出雲町 奥出雲町亀嵩の大仁広域農道付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 島根県益田市 遠田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaU1oNmhZQ3d6azRiQTRtN05xRzBSRE91Q2tZSG01b0tYZDJVNFgtdVROczJPQzlBc2MwR1dSZ2FmT2JYR2tRcEtkYzA2U1J1cnV6UVVfemtlMlpwd2Q1OTdmOVBKRUV1TG5LQ2lGNll6bGxfUWlKMEQtOF9qUXBRNHV3bl9qeVZfNHdkR3l2OHBaRDRJLWE0MXlDSkrSAaIBQVVfeXFMTjg4OFhIUHl4SUJnb2JqSmY1dm9EYVFnVjVQNWREZFJsOEdVZ1ZWSzctVWdYYktOLTA1Y2xZR3JGRVlZYWFJZUdJTVd2S2xqVWN3am9ESDFWdHVDQ3JoZTRlZVZYS2VaT2JUUGExbHlwSVJmNHhvTTJpMzNscWo3X3pXRzF1X05XVEVOZ1NMZFdMbHJwYmdNUGRqTnEyYWhRZ0dR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月5日 島根県益田市 益田市遠田町、国道9号から市道竜田線に入った付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月5日 岡山県美作市 野原の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":14},{"pref":"宮城県","count":11},{"pref":"青森県","count":9},{"pref":"山口県","count":6},{"pref":"京都府","count":5},{"pref":"長野県","count":5},{"pref":"福島県","count":4},{"pref":"山形県","count":4},{"pref":"栃木県","count":4},{"pref":"岐阜県","count":4},{"pref":"福井県","count":4},{"pref":"新潟県","count":3},{"pref":"島根県","count":3},{"pref":"秋田県","count":3},{"pref":"群馬県","count":2},{"pref":"富山県","count":2},{"pref":"三重県","count":2},{"pref":"岩手県","count":2},{"pref":"愛知県","count":2},{"pref":"山梨県","count":2},{"pref":"兵庫県","count":2},{"pref":"石川県","count":1},{"pref":"岡山県","count":1}];

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
        <span>対象期間: 2026年10月5日</span>
        <span>·</span>
        <span>公開: 2026-10-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={95}
        periodLabel={"2026年10月5日"}
      />

      <h2>全国の出没概況と集計データ</h2>
      <p>2026年10月5日の全国におけるクマ出没・痕跡確認などの総件数は95件であった。広範囲において人里周辺への出没が相次いでおり、特に北海道および東北各県での報告頻度が高い水準を占めている。各地域における上位都道府県の内訳は以下の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な確認地域・市町村</th>
              <th className="px-3 py-2">主な事案種別</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">14件</td><td className="px-3 py-2 text-xs">新得町、上富良野町、大樹町、厚沢部町</td><td className="px-3 py-2 text-xs">目撃、捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">仙台市青葉区、富谷市、大和町、村田町、南三陸町</td><td className="px-3 py-2 text-xs">出没、目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">青森市、八戸市、三沢市、東通村</td><td className="px-3 py-2 text-xs">出没、目撃、痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">周南市、岩国市</td><td className="px-3 py-2 text-xs">錯誤捕獲、食痕（クマ棚）、痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">京都市北区、福知山市、京丹後市、木津川市</td><td className="px-3 py-2 text-xs">目撃、痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">長野市、中野市、飯田市、平谷村</td><td className="px-3 py-2 text-xs">銃猟駆除、公園付近目撃、出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">白河市、二本松市</td><td className="px-3 py-2 text-xs">道路上目撃、出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">天童市、白鷹町、高畠町</td><td className="px-3 py-2 text-xs">出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">佐野市、足利市</td><td className="px-3 py-2 text-xs">出没、目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">岐阜県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">郡上市、揖斐川町、八百津町、中津川市</td><td className="px-3 py-2 text-xs">農地出没、道路上目撃、出没</td></tr>
          </tbody>
        </table>
      </div>
      <h2>特異事案および重点対応事例の分析</h2>
      <p>当日は、個体の行動激化に伴う緊急的な対応事例や、利用者の多い公共施設周辺での出没が確認された。長野県中野市では、8年間にわたり被害をもたらし追跡されていた識別個体（通称名を持つ個体）が、立ち向かってきた警察官に対して15メートルの至近距離から2発の銃撃を受けて駆除された事案が報告された（※1）。長期にわたる出没個体への対応における現場の緊迫した状況を示す事例である。</p>
      <p>また、長野県長野市の地附山公園付近では、成獣とみられるクマ1頭の目撃情報が寄せられた（※2・3）。住宅地に近接した公園周辺での事案であり、パトロールが実施されたものの発見には至らず、安全確保のため公園が臨時休園措置をとるに至った（※2）。愛知県豊田市においては、住宅の敷地内へのクマ出没が報告されており、同市内での今年度の出没件数が昨年度同時期の約1.5倍となる43件に達していることが示されている（※4・5）。</p>
      <h2>地域別の出没状況と動向</h2>
      <h3>北海道</h3>
      <p>北海道内では全国最多となる14件が計上された。厚沢部町で捕獲が1件記録されたほか（※6）、十勝管内の新得町新得基線や新内西2線（※7・8）、大樹町開進（※9）、上川管内の上富良野町東6線北（※10）など、農地や道路基線周辺における目撃・出没が相次いだ。広域にわたる活動が継続している。</p>
      <h3>東北地方</h3>
      <p>東北地方では計30件以上の出没が集中的に発生している。宮城県では11件が記録され、仙台市青葉区芋沢小坂南のほか（※11）、富谷市富谷唐竹沢（※12）、大和町もみじケ丘2丁目（※13）、村田町足立万崎（※14）、南三陸町志津川天王山（※15）など、市街地周縁や住宅団地近傍を含む広い範囲で出没が確認された。</p>
      <p>青森県では9件が報告された。八戸市鮫町や北白山台41では夜間21時15分頃に体長約1メートルのクマが雑木林へ入る様子が目撃された（※16・17）。さらに三沢市大町での出没（※18）、青森市宮田山下での痕跡確認（※19）、東通村野牛での目撃（※20）が記録されている。</p>
      <p>福島県では白河市関辺油久保の道路上で体長約1メートルの個体が目撃された事案をはじめ（※21・22・23）、二本松市戸沢熊ノ久保での出没が確認された（※24）。山形県では天童市下荻野戸（※25・26）、白鷹町畔藤（※27）、高畠町大字塩森（※28）で出没情報があった。岩手県では盛岡市乙部1地割の果樹ほ場付近で親子グマ3頭が東の山林方向へ移動する姿が目撃されたほか（※29）、花巻市東和町毒沢1区でも出没があった（※30）。秋田県においても由利本荘市岩谷町ハケノ下（※31）、大仙市土川上大野（※32）、湯沢市杉沢（※33）でそれぞれ目撃された。</p>
      <h3>関東地方</h3>
      <p>栃木県では4件が計上された。佐野市あくと町や閑馬町での目撃情報（※34・35・36）、足利市借宿町での目撃（※37）など、平地や河川沿い近傍での行動が警戒されている。群馬県では、みどり市東町神戸および神戸駅周辺での出没が確認された（※38・39）。</p>
      <h3>中部地方</h3>
      <p>中部地方各県でも多様な事象がみられた。長野県では中野市での駆除（※1）や長野市での公園付近目撃（※2・3）に加え、飯田市大瀬木での出没（※40）、平谷村中町での出没の可能性が報じられた（※41）。岐阜県では4件が記録され、揖斐川町上南方の農地で未明3時から4時頃（※42）、八百津町伊岐津志の道路上で早朝5時から6時頃（※43）、中津川市福岡八布施地内の山林で夜間20時から21時頃（※44）、郡上市美並町上田下田（※45）でそれぞれ目撃・出没があった。</p>
      <p>新潟県では上越市三和区北代（※46）、新発田市箱岩（※47）での出没のほか、魚沼市下島の畑で足跡が発見された（※48）。富山県朝日町南保では道路から山へ入る約80センチメートルの動物が目撃された（※49・50）。福井県では小浜市中井（下中井）において夜間21時10分頃に成獣1頭が目撃されたほか（※51・52）、おおい町名田庄堂本（※53）、勝山市北郷町西妙金島での痕跡確認（※54）があった。石川県羽咋市柴垣町でも出没が確認されている（※55）。山梨県では上野原市上野原（※56）や大月市七保町奈良子（※57）、三重県では大台町小滝の集落際での目視（※58）、紀北町便ノ山の河川敷での糞の確認（※59）が報告された。</p>
      <h3>近畿地方</h3>
      <p>京都府内では5件が記録された。京丹後市弥栄町黒部での出没および峰山町鱒留での痕跡確認（※60・61）、京都市北区上賀茂十三石山（※62）、福知山市大江町尾藤（※63）、木津川市での近隣情報共有（※64）が含まれる。兵庫県では朝来市澤（※65）および市川町下牛尾（※66）で出没が確認された。</p>
      <h3>中国地方</h3>
      <p>山口県では6件の事案が確認された。周南市大字四熊ではイノシシ用箱わなへの錯誤捕獲が発生した（※67・68）。同市大字上村では家の前の柿木にクマ棚（採食痕跡）が発見されており、人里の果樹への強い執着が示されている（※69・70）。岩国市錦町須川でも痕跡が確認された（※71）。島根県では、奥出雲町亀嵩の大仁広域農道付近で午前8時頃に成獣1頭が目撃され（※72）、益田市遠田町では夕方18時40分頃に国道9号から市道に入った付近で3頭が目撃された（※73・74）。岡山県では美作市野原で事案が記録された（※75）。</p>
      <h3>四国・九州地方</h3>
      <p>四国地方および九州地方においては、当日の出没や痕跡等の報告は記録されていない。</p>
      <h2>リスク評価</h2>
      <p>本日のデータ分析から導かれる管理上の留意点とリスク評価は以下の3点に集約される。</p>
      <ul>
        <li>季節要因と餌資源利用: 10月に入り、冬期前の採食行動が顕著となっている。岩手県盛岡市での果樹園付近における親子グマ目撃（※29）や、山口県周南市における家屋前面の柿木でのクマ棚形成（※70）、新潟県魚沼市の畑地での足跡確認（※48）など、栽培果樹や農作物等の人里由来の食物資源に誘引される事例が目立つ。</li>
        <li>人口圏への接近度: 長野県長野市における都市公園近接地域での目撃と臨時休園措置（※2）、愛知県豊田市の住宅敷地内出没（※4）、宮城県仙台市や八戸市の住宅地周縁での出没（※11・17）にみられるように、市街地周縁部や集落内への侵入が恒常化している。日中・夜間を問わず住民との不意の遭遇事故が生じやすい状況にある。</li>
        <li>わな等の管理と個体駆除の安全性: 山口県周南市でイノシシ用箱わなへの錯誤捕獲が確認されたように（※68）、他獣種を対象とした捕獲器具への誘引・混獲リスクが存在する。また、長野県中野市で確認されたように、追い詰められた個体が向かってくる事例もあるため（※1）、駆除現場における安全管理体制の再徹底が強く求められる。</li>
      </ul>

      <p className="text-sm text-stone-500">2026 年 10 月 31 日 改訂：同じ出没の重複を束ね、その後に集まった記録も含めて、本文を作り直しました。件数は公開時と異なることがあります。</p>

      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                {r.url.startsWith("http") ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.title}
                  </a>
                ) : (
                  // 取り込み元 ID (例: iwate-morioka-mymap) は URL ではないのでリンクにしない
                  // (相対リンク /research/<id> になり 404 を生むため)。
                  r.title
                )}
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
          <dd>2026年10月5日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-06</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-31</dd>
          <dt className="text-stone-500">データ範囲</dt>
          <dd>くまウォッチ sightings.json (内部集計データのみ)</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、くまウォッチが収集した出没データを LLM が分析・文章化した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
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
