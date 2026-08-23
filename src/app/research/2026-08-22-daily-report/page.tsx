// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月22日 / mode: daily-report / 生成日: 2026-08-23
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-22-daily-report";
const TITLE = "2026年8月22日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月22日、国内のクマ出没報告は44件に達し、特に北海道と東北地方で多発した。青森県十和田市では観光客が被害に遭う人身被害が4件報告されており、夏の観光シーズンにおける深刻なリスクが浮き彫りとなった。全国的にクマの活動が活発化しており、厳重な警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-23",
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
  datePublished: "2026-08-23",
  dateModified: "2026-08-23",
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
      "title": "青森県十和田市で外国人男性が負傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5KZHZ3Rkh3Mm9ENzhCMDROcTY2SVByTlE0MFU0YmVLZ19LTTJqV3VIZ1dYRDlhakJzS3NPZGFZMC03dzFRSHlrR0t6U0tvbm5UMHJTTUMyWVY?oc=5",
      "site": "news"
    },
    {
      "title": "青森県十和田湖畔で男性が噛まれ負傷",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPMzM2aXNuSUlpaXZLSE5xUUFkYWUtVE9TaWVBUEJTRXZDd01Nc01oYndhaWVDWGw2RnRILUVWdUZyT25WSzZIY2pLcXlORkdmLXpxbkRXZmdubHMzQXBiNnQ4TmduOHlUZW41elF4cUVJcy1wQXpVaGxaSmgzM21lVEluTEPSAYoBQVVfeXFMTkxJWU9DUFZxQjlGUW1vLXdwRXc2c3R3MnhuVjRpMTMtRjdEN1VRWGZxbFBHRjZ6ZnpqMndrOHZlNmlRbG54a29CNHF3WlRnakJETG5HTnY4WUNSOHExSHpjNldHWngxQVFubkl1RjNlNlVzYUtIWkk1RXhyQnZBNDZYRDlUNFp4dHdn?oc=5",
      "site": "news"
    },
    {
      "title": "青森県十和田市 瞰湖台展望台付近で男性けが",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9QMzhkcnliVzR2ZmtxVHFWWERjTDVBU2NGeWxwOTJPVmFfenJMd0Z6TndXSTJDZTE0SHpCZHZxVHRxdlNHX1JyOHRvWEExUUtLYm5uSVFaWFc?oc=5",
      "site": "news"
    },
    {
      "title": "青森県青森市で外国人観光客がクマに襲われ搬送",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9lSWhIRjM4VWtFbWd4NWJNZG8yZTBNclkxVjlZSk5QOTFaOW5ZMmRBMGs4ak5JR3Z0dW5iMHpsSzQwTG0wYjNnbFV1Z2tGX2xoWHJZbG1Vejk?oc=5",
      "site": "news"
    },
    {
      "title": "北海道増毛町舎熊でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZjF1dGFraVEzdmJVU21UaTNfUFpiQTBRTS1xWTZmeFBvZ3VWMjBTTnhDR0xndnJYX091YzE3d2owZ05GTEhyekJxNklUSzBwd2kzVWdJYzdZNVo0N3dxdlBxYVlreUcwMTRPeWdzMDZQN0FLOGk4M0xxYS1mSVViNkFvZUlxNnhxSW41OW4xQmRGd2p5ZGxmRlBOVUbSAaIBQVVfeXFMTUMwWTlIZ2FWRHhKMXY2THJ4UDNMcUVaX0ktbkFSU3kySDZGanlBNUJ4YTROWVFsNnBLOTZMMlNZV19DQlRZeFNWbVk4cnQ3ZTN2SkNmcHNsazNka1h5bTVHUlI1Zm4wdTlWVEtCMnNHd0h4Q3lMZnRnQ0FSZTVGcnowM0JNM08zTkl3LVNVYldwRlZ1WHdxWlJ0UkJLbUlaQVNB?oc=5",
      "site": "news"
    },
    {
      "title": "北海道北竜町岩村でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU3Q0WS1TU25FYllTZDhKT2RTLWhST0lIQS1fN3pjcFB3clVYZzAtMGNXOEZRMnBUbzZFZmM3TGxzS095ZUNOWFUyZmVtdEVWRWVERUx2LU9Jek1DQTBodWJkX0kwNTc2d21rQUpRckpLUE02TFlxMTZEM1NXLWdiVndNMjRXckZBTWU5RjZpZ1RMbGYzVUowN0g1UFHSAaIBQVVfeXFMT3AzNnFpRXlUcDJVUUdtcFNxWGpKRHEtUWVhTG9rQ3RHX18xcG9GMW0yeXlaUUpiM2d3Z09Id3lhVzVBRWJCcEdDdzRjYWp0MW8yTTJKRF9VWHY3MHZfTHdaakdlMlJGRXlwWGRUTi1lYmtacVAzQkpWcHFVSkN3N0t0S2pkR1kwTElkYU94WmJYTGgwWVFZUGl3UFFPSG5yOFJn?oc=5",
      "site": "news"
    },
    {
      "title": "北海道弟子屈町プイラクニでクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZjNlUnJDZGlWQzc2RDUzaFNOalBZYlZ4LUlBRXR5NzJQSk5NM3dlMUpxZDlnMnJabHNXRlJXbnQxdXJkdjJvc09PaERPSzZHR0JkaklmNnNPajRlM2RGOXNTZ1k2dFNuSjlYdnBBRnpqa3FrVzJydW0yOFppUFM0cGNFTklKVl9vd1FTSDdwWExEMGRpMUNzeGUxUlbSAaIBQVVfeXFMT0J2aE5vWVhITkpEQmRLWElRNWZZazNqQVM3N013OW0xS1RUWjRFVkNqQ1d4cmpHV21iRGN1OFl4U1o5cno0ZEtLNFZEaWdmRlRZdlNxa2JTYmhQUUhRcTBUR2dtZFJNbWRJQUVvMFBuYUtsUFV4V2p5NEdnbFo4aEV5eDMxcDBVVENfYnFFT3NrV3dJaGptclFlRExldmJkQWp3?oc=5",
      "site": "news"
    },
    {
      "title": "北海道留萌市潮静４丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOUEZ2dzBXVXV4YXBYV1FKUG9oM2loZlF6MVJTUF9TdGpJc1NLcEgzZnhQYzZWc0tKRXdzWUxsYThvNXBlVzFHb0dkVkNaOWo2MXU0V1ZQQ2lJbmVfM0h0cmV4dEtxYmp1NjhsTTNxNGl0anlLcUY3WFhQbHJZSGs3ODI2aldKZGZQYVIxRklLdFBBSmdXMFQ2U2xNVHFHdkxjMkV4WnlHcEYya1hXT2Fr0gGiAUFVX3lxTE9PeE9rdW5BOEF3d3l4TzFjbmEtcVRoODlIZGlFLUJDYlF0ZjBzZ09ZeHBTVEpGY0ZvOEI5dHVPaWcyc0JvTldvOUdiMGFqRVJmYUw1MlhCaGk3clFSWVN4MTd1WXhETFNnM0tKekpBcFlCd3JEVVNXWlBZVDN6aHpCbU00clBDSjI0eHRUbUNLM0xfYW1HbGZpR0llemtpZHpNUQ?oc=5",
      "site": "news"
    },
    {
      "title": "北海道新ひだか町静内川合でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQRWV5SWNQeFJXVUF3V2NaeDUxejhpY0RjMzFxY3B1VHBIempqdExhOVM4VG9PbkxhQk9WYTNOdXBidjZYZTR5VVh2MkJCb1pPX0JYczgyeWhtYjR1X2E0MWppdjFDLS02ZW14dlk5OGZJNHFBeXhQZEc0SW51QnJ6VExxV19qYmloa0ZxN1ZZVWZwU29Jajh6aE9leFNfQkY2SDlOTmQtdTdnaVhEQzM40gGiAUFVX3lxTE5ocmowai02V2JaVUNoZG1kVzNCc01fYlgwYldGQnRZTHJaZnZFQTNrYl9iVU96bUYwa3lEc0oxQVdITmkyTGpFci1BZWtzeXM5Z1I0eDJ0bzlOM2x6YUpnZTVuaXFWX0l4U3B3Q2cwUnV6T1FjT1FvVFFaWHJ1ZC14UmpOZjc5Yk1PVmxWUHNvdEk5ZVp3Qk1CMUx1SVZYZm5mQQ?oc=5",
      "site": "news"
    },
    {
      "title": "青森県弘前市 岩木青少年スポーツセンターで目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE12TmcyazJRY1ZyNVI2RUZuSjUtbGloUjFLZ0VZbDIxWXZGZGVnT1oxWWstb0hMUzdNVldNU3Z3ZjJPUy1hR21iSGhOTk03SkRiVGhwMzNxYkVENFZmbDI0aFFrLTNFczZScUFzZm9CVmxSdzF4WVRtTFBOSGF3Y0k?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県北上市和賀町藤根２地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNUGc2ZTJqdUUxNmM5elFyUUxWT2p4NFFqSV9aeWI3UWRlck9aV0tydFFaMDktM2ZtSzFEZGVyLThueEE4R0lPY09iVllNS2hONkF4VlppUWRCYThWWWJOS2VFcVgzLVBNYVZyZmd2b1RuTG05TEhLaEpQMDREMjl2RDRsSXdjU051dlhRU1F3bEJwQnU0RDRYNEx5azJiTTJmUEJyVmRtcDRIX3VPX3dlT3dVS1RQWnkzeHZfd3ZFYjFmZXFWbGJWYUoxWTJOOENVMnNjOGNjbVJ2QXJwY1c2ZVdQSjdGYnZPSVFTWGhUeV9HZ9IBogFBVV95cUxQWlVUbVluUGFkM1dvTDdlQjFOUjNURzZ4MEFfVUU4ZGhyblF3c0ktNHZfUVJCbmRrLURlckFtcUlacW9lX2RmdnU5ZUtjM0FOOXYtRHhodTV1WGl4Z2ZZMk9hU2ViaWI5eDRpaS1pdXlWNVJWdUJRVTAzMGVpTEQ4WU94bWY4a195YmI4VkFJSHY3aDV4Z0tmNHgtc3plZWdZVXc?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県北上市二子町上野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZWZPZGdZMm1xaFliaVlkcVZ5S3Vud0lSX0FEN2hHWTFsTU1PZVlMYml0cHdiWW93eG9ieGxMaFo0dUZ4YTl3aFFHdHZIc2FkM1ZmeFNoTTlqS2JZWkpPOEt3RUJNNmUwa0wwU1R2ZnN3SHYyOUFNWEFhbDNMaXA1UW1RMS1pcU54alpUSUVNZDZtNUZsQ0ZYRXI4OETSAaIBQVVfeXFMT24zdTV4dU9laDJKNkhjQ2FONnloRmR1U3ZkLTgxOHpNVVc4RU9lbVRYME1nTURRTlBKNE0xQzB5eHFCcDBsd3lZNUcyeEpScHpwTDA5QnlzVXY3TnFyc2U5eUZ4Q2FabHJKbllselNlS05PYnM3VkVtblNuTkRYbm9MZ0tSWVY2WUxIaGJPWjRXeFJmcXNwanJDanh4Y0xEb19B?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県岩手町江刈内第１地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONlpIMmxfNWxmZUNZcC1Eb2JtZHZYUTBsSlpsSFZHWFlRcnQ2dkpaYVBxUVN4VEZ0cHhSdUhiNUUwOGdwNzBCbHVJbUJFSE5EZFdmRDdjUHBvRXRQRHZBWUJNeVEtQ1Nmd3VkU0hvcmFuQkxKMlFUV0hQTVY5OFgyeTRLcGppSFdrdmJvYzB4WWFfbHQxd1NyaWhBXzczNmlsVWctVVlFc1RUTjVaSE9PODlNX0oxYVlMZDdYc0ZJblJrLW5GbkpSLXA5bFpvdEJDRml1MFhiQzNnU1V5alR2Zl9Tbk9MbUpNdnRBb2RqRllHUdIBogFBVV95cUxOQmVzeDZydTAxS0FZYjhURHR3ajI0ZnVsMmtkVURxYWF2Q1BGTVUwNHlYVG9WbW5scmRySVdRZ3BXNXA5TEFKbFpWNWxLS0RFSm1xUllZX1Q3Sm1GZXRaU0I0NndJdVh6UFY3T3RjWHRSMTR5a25UQWNia09jOEktanNWQlRpV1lxdmlFS1ZIbjg2NC1SalFYTHBPVWExVWVwSVE?oc=5",
      "site": "news"
    },
    {
      "title": "福島県本宮市青田裸山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWEhqR2M1Ni1CTGh3X2RQYzVob2ZKYk9rWHkwZXRMS1BiRzlnWDdhYlJLTjBqMEdadmhETEZ0bEJpVXJPTVo3bU5FUExmdFo4dTJFSFlBLUpQWW11aXNHUDVreXkzNGJlVEVnX1NJbzNLbTRsMTlqTUZyVDFGZEZxNkxpLVd4bkpDcFFaNmdKUDRfaGZIeWQwdTJRVFJxVGRxMW1ndHZqN2U5OHNaNC1NM1BEZnNWR1EyajlIMS0xWmFXUm5JdHRTQnZ2eHhEeVlGM1dGN3hNX19XSUxLS1RaOG9KUE5neFJRQjd2dzZNNkNwZ9IBogFBVV95cUxPZmVuanlIeWdYRmVpczV2Z2JibXBROHB0OUdDS3oyTXB2WEhVSEluOGpJZTZGcGdvdmhNTGd6ZnpBMldNMy02dTByUzFmRTZ1NWZzNFpVMUJOc2JsNURFYS1ndFZJRy1NdVBoLWlNWS1PR1dPdUlPaHJOb0xyMW1BTjZ3VUdEU29oejRrbDFRcE1SUW9STEhCRENwWkxnNzJTWnc?oc=5",
      "site": "news"
    },
    {
      "title": "福島県北塩原村桧原剣ケ峯でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTGVsbzBsZXdfZFNya1JaVEZLaXF4cXJGa09aRF85TlNwN0NKOF9QSEQzLV9wLUJpVXdRRVB0bXFnajhpUjUwWkxOaDgxRVB0U0ppUWF6R29ucFdsUW9Uak02RS11OVpHNS1mVU9admYyZWNwUUhrODVDVm1IX0ExZVVnOEVjMHFJNEowUmszRmJwak52Q0dXWFFJUW3SAaIBQVVfeXFMT0V5a3BRWkxYQnhteWRXUWJ2eU1sdTNpZkhBbFk5S0h6cV8xQk14SnNsVV9JMzdfMmxpdTMxeVFjbks2dkNQallQN1VWYmg1S2RxN3ZGQ2tGLTVsNlBLLVBTbzJDMGlraEwxX25fQlZQRHZCQ1pOQnZ3OUtjRU55cU95Ml8xOEkxX3hVeE1pZkg0Y3R3U2p1WVViSk81TEwtN3VB?oc=5",
      "site": "news"
    },
    {
      "title": "福島県北塩原村 国道わきでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQYXJZQVgzb2ZWR05KU01OWmJtTDI2WWVkOHJ3QjZqVWF0ZHlDY3JCRkVhVFBjQWRZd1FidEJoYlhtbmJ4dDFHQ2xRcVJPR01DZ2Q1dEZIMFA4S2JWdE1qc2lWczVNdFJXWVFxcmY3SUo2TUxhMkhWOUxJaGkzVmQ1NDdVVU9fbldFbVZvMkI5ZUltQ1JK0gGHAUFVX3lxTFBnX184OFpkN0RtRFNmRDE4ZXlxZjc2MG52WG52OEkydV85RWhXSHdiRDJ1WlVVSDM1VEJ1dzVEMkF5bzB5ZWNxUWlIZGw0NHZOOWdXM0RzNjVoS0pKYXhxMUNYdTdCZVQwV3hLX29fSWlIUnluZDcxRkJLR0YtRWZWbGtHOFNkVQ?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市寺内神屋敷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU1E4UTZ6OUE3czFNQVd3MDJGR0dNeW5qU3hyUFFWdlA2N3hFblBHZXpRUFBvNnhYZ3NGV0JhWG5wWDRFbWJxbWhlNXd0UFg4OEJPWldYME5SWEZUWm5HTm9Ia0I5a0ptNFFselZHVDdZX1c2QU02SWZKMlVrNnJ6b1BrZWV1SVNYUVJTcVhSTzhhMUpjSl9Zc1BuaTbSAaIBQVVfeXFMTTJoa1p0VU5Zb2FWS1N3SmJaLTJOY3Z3YTRVbmxDV2llQ3lOSnZOSGFlWDF0My1aSWtscWdjeXcxczZKNzJsR3dTRF9BOW5QLUhWai1PSi1YVGhjdWhpUVhZZXUzYllmMkRhaE5PWTdzT1VCcEMzNURMWFl6UGlIZzFaenNyS3FubnBabzhLTWNvQmc0bHE3SXppTlNYODd5ejRB?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市雄和種沢館ケ沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVTFOdVlZSFVlUnN0WUNsRTJYTEhwY05WVmZ1ZzRoby1UX2Rsa285YkVYY2pRWHJQckIyZkJIc3dIME5fdEtIVVFYRHpTNGlFZ3F3Q0E5VEVmTl9CaWdrS0EyM0hlZTJvU0NsWlBZMmtyT1MtaW9YT2Y0Vy12N29uWEIzTV9nQUYtS25pcl9NeGpVak1TaWdiWEhzaXTSAaIBQVVfeXFMUEI5cjhiU2NGWWhDenhaRkUtR2FoejJtdlpJYVZvUHlJU2F2Qmg1NDNuQXB5U1RxdW1XSHI3Si1yeERpdnhNZjJTVU4yQlFRUW9oaVRkcUlCdlU1eWsySkR2OEhlNkJBWEFxRW9nZmJtaHhIdW1sMEJwR3BaNkFSMHFZMzVWQ21XOEZLRGRHSlVoclJrMU1aMHNfajI5eEpnTFpR?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県みなかみ町上牧でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaEpXYlM5MWhyR194STdjVFVmc2R0MWU4WkFPdWFVZ1FwMlIwNnJpTGwwZTA4Wnk1cEZWNkpRZkM3WXBHSGpVOURham9LSG1rRlY1NVoydkcyZGRaRUV0MnZoc2NsRGtzeHo5WUVWRXBBbkNxZ19QeE5EYmN5R0hoOHlMRXZLekVWNlRKNlVNRGFXWFplMDc4dEtYMlXSAaIBQVVfeXFMT1ZLeGxQOUlxcm5maW54T3JHOThyV3JMY1JxcjlfWWU5N2F0eDktZVY3SnRKZkJCODVFV2Z6VjF6QWZjRUZUSG5XVmJib1lUd04zdzd1QWp5VURMM1RORWVhb0JLVVY5ejZrNTY0SEVFSWRtS2FlM2tBT3hpSEc3VWxfVkJpSUNjeWQ3a0dBVE1tTTJRU3hSWHM3RWYwMU9ia2pR?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県高山村中山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcXlmcVR1VFg5bXVTOERFRVNnOGtpRWZiNVRSeXIzN1BJZnV2R3oxRkg0RklHX0FZVG1VU2d2Vk9INnMtaG14YmxYNzBGd0RZajFWREd1TlljWmw0MGJCbUttQ1hQbFdSdjFHcHhaMnVEWEFPb2E4OWNQYkk5Z2kyNWdNODdkV1VaOW1UOVI4RFlOc0lOUW14Wmt6QVrSAaIBQVVfeXFMTjZXRzRvRXdMYXc1dF9ZQlEzRk5PYWpVUmxaeWFZWGVqdzlLc29TVC1yLURBTndWUFRxVVpTVVdOSEdxYUtWa3RKV1AwSVFyY2M0aDFuZ184RWNDSVpOV3NqYTgycHpqaHNqcnJUanVGby16OE9sNTlUWkVpaEdIMVk3ZEltTTNyajV0YUNXa3U1UUlpMmFoMFpIYndSbFNwdnpB?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県安中市松井田町八城でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdjdxV2haeFV2T0xhVzRoZlM0NFFpeDUzQ2lhSzZUWnI4UHIyTWNzS3o0S1N4OWVYNGcwSWlSSnM0cDBzcmVDdUt1N3BINU9UenJkU1AxdjlBRFNyVV9GUlFfVXV0VmMxZ1M5R0N3VWs1eFplZ3pPcHkwbzhSNEQ5WXZVUFlPMjBJZWFvZHZnQWNNdTNOZUItQjBwcWFEMjdDY3g2ZGdEVXJKeU9XNkdPUldVd0dpdTVMUi0tbDY4QUI1RVBXUkZ1YndPRGJOWWFQeFdFMTRTNl9LSl9WaVNzX0p1Tl8tRkN3ZmxvNGJrSTdNUdIBogFBVV95cUxOWVcwN3doTEsyRVNnM25sVGpfS2xzS3B0QkxHQ2VtVUZZYUpYS2dzRWVwR3ozZ2lHN2xNdFlCeGg0UjZEN2xnbUlrcTVCMk56LWtuczRWYTFmUTd2Ym1MenRGcnFPSE5FTzdjeFF0eGl3RXJfSGRBZkJYQWNreFhnZDBhNlBDOTgzMU04aGdNOFpFay1rdE43V0pqSmhGYU5Pd3c?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県那須町寺子乙でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQnNVSzJoWWlVSnlESUNFZlpMV0NaX3NyekNpdXVrdTRFa055cXQ2U1RtZzhYb1ZZSXVJLXVoZ3U0d05zYXQyTl96a3hsajEweTZHWnNGOFZUamZLMmtLUzJ2Vnp3OVRnRlJDOHBwNEpicWs2ZDE2d3JuRGVvdjE1UnRFYTQtbTVjUDlHa1VXcnFJVFl6TVl3V0RvUlTSAaIBQVVfeXFMTlpEUDBSM0hGREFRT2RNZ0pIdnVycFhTd1NDV3BhSDdUZ18temtwSmRXalRaZlFxaElBSnF4V1lYbWVsbEZwaE5KZW01NHZLLVJkNWJYWXRpRmxQcVluOURyRUkyb0lvTU82cDhXcl9nMVdyVEVfY29ZMmJEOXlTZlVqYW9wUW55dWhSTHZwYnpub1hieFJkNllGUk4xN0NVdll3?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉県秩父市中津川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNLU1tWmdkc0U4dXZKY1puYWVzc2NKa1ZZX1pXV2NXbnBkenZDR1RILVEyUWcwa1RBVzNIUlJTbnZIUDJyeGs2S0FLRmdQYkp3ZmZ2ak5HaE1RRUt3N3JBaGNBbUp1UGd6akdIWUJRdHJlRXp1Mjk5bThBYzl0eWtvdGtGYi1NakVJRnc1LTVuZEdqQ0lOSlRSWVFxb2FyNk1Rdjg5NVEyWWNiVTk4cjdWTnFMRV9qWTBvWEJoUFkwNnRXRDY1ZXZEcXJ1VE5BbHNxVWItYkFGbjdydTQwMnZuTWlQS3FCNFJkNVJQX2ZSN0pYUdIBogFBVV95cUxNa0lzYWxPNHNCSV9KOEhSMEhwT0FFTDZfczl1REJyUDlnXzcxMmtVSUlOVEgwbF9BeGpoQl9NdnhmQlljcldfdEx0LXNxSktHSXYyaVRPcFVtY01NMy1xZEZDaXVRbFdUYTVJRk1wajZ2TEFGc2dhZW1SbzVIeXRiWS1WNmJtdUNpZW40dXJLWUd3WWs1QWZ6SThLNC1rb3FXU0E?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉県小鹿野町小鹿野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPX3ZPS3BSbjNWaDlsSzlYRWtTV2lkcDNqcGx5TmJhT3Z6MjJOb2JfUHJaeEVFM2JIOS1DRUJoaEl2b0FwRnVXV05VVTVGV2hqNU5JTHgzTUJxejdxc280S19MenFOcWxVV0ZpLXd2SDNZTmQ1RGQtMkxFdzNlUDFNb2hhRXFLc2wwM09TdlFhZ1ljMzAxaHF1Mm13WTPSAaIBQVVfeXFMTmZMdEdvZXIxVHJVTkQ5LXZqYy1Hcl9xWEhCcUk1dTNyRWlpLVdXZWpGaTktZjZhUW5Ta2tpRzJOeWxWT1Njd1JTNlM2aXF0R3I4S0hheTVobGxNcy0xMnhCM1ZxZU1ORHVma28wQ2JkRUc0a3E5MksydlRacVVKaF9HcW9VWnNPVk1HN29ZbUdiVUNuWkJGOXV1MmdfcXRVdGFn?oc=5",
      "site": "news"
    },
    {
      "title": "神奈川県厚木市七沢でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMXVLSVNZT2UwcS1mMDBzWXBRWlpSc25TMzJ0ZkpQSDhvYTczQlFJZVA2dzNqNlBZd052S2dTdFoyN0lRQnZBdVVlR1hrRnc1cnFxY0s0WUdqMDJVQlFiVzI1MV9Sal9td3NibXF2N0ttcEV5aG1Xcm5YLWRhZDZwOVNjMlRJdlhvWWw1bjg2ajYwa2RRa0gzQzJxcGLSAaIBQVVfeXFMTzJKSDNGS1BnSmRHV3ZwQllEWmJjUE9DVzUyWlpicU1wU3RKMG5PX3FvRERYWERGX2hUYlo3QXUzTzBieTR3NmdySTdfUWxleElaazZOODMwRndmVzNBN3hJWWhUYzM1UUxfQjNMNDVQVkt4Ym1MdXlXVXpoY1Q1SXY5aFRSZkt0clZ2S25jQlo5WmdHNV9ZY2I2OXZTVHBoRDVn?oc=5",
      "site": "news"
    },
    {
      "title": "富山県富山市婦中町上吉川でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOODFjMkFHbm5hZUdYZy1VZDdBcjBUWHI0WklXQW9TdmRJUXlTQVg3WHdFUDA5NVlpc0RmQW40X0Z1RmZuMjhJVkxnNmRMbXAyZnI3R1N3SEt4LTNzTk9jQldhTnRLOE9LcWJIQTFWVXlvaG1ZR21xbWtiRWg3aUJ1a0NSRzRzTEVHckR0c1U1ZmlBSHRQN0lCWHVvbFpXNnhzSDVfVlhZRXVEeDRfemJTb01jNEJEdGYzaUwwWi1nOTRQSm5hTFRNN3lPaVh5LWpzTk5ZdHVqeGdPRWs3VWtpdVZwdHAzSU9TaHliUnhoOW9jQdIBogFBVV95cUxQcFRwQnIwUDZvNDE3ZUVuRlhqU2wwSHhPSThvX0trcVdXT3dMbmg0LUdtWHRJbFJPWVZ6eWhnUU42c1ZaUlRSMm5VZVlaT2ZQUEtKZ0JsS1NjaFRyc3Y4NXlYNERvU21zR3djSnkwM1ZncjB5TFB6R0VNcTFaUWpLZnFQSXEyZTcxQWFyT0hxQ1BOdVRwTU84T2pacV92S1B1UlE?oc=5",
      "site": "news"
    },
    {
      "title": "京都府舞鶴市引土でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNdkRHalFiemR1blMtY1MzV2VHYzJhSUU2M0dmeXV6SVdTaEpLR0RxOHNTRnJyX1Q2TVdjWndXbFFaQzVkVFdHSHVDMnhmWWZTWmNQX3gyakRVa21pcTcteEplZGJ6Wk1PMzd4VXNrSG9zME9ZRFNDYlJFd1RDQ2s0QzZvcDZCZXVCenVFektjZkFiVU5zRmV6QnhubUtTaml6a1pLektTb0t3MnYyWTZkVzJaMm56YjU1S1JZR0phdE4yYS1uUGR1Ukg0MGFPYkJyTWJad21Yai0wcWs5MTg3MHM5OThDZkpha2p0R2IzbG1pZ9IBogFBVV95cUxObEg0TWFEQnE2dEw4OVBBYXlWbFB3Y2poVkFPdFY1Vk5EZDJmWEtPaHEwQW1Xd0ptQW9qSERrUUVVM2hxOGRXTng3SzNieVVkd1hpMVpwcHItNEp6TnpwQmhodE1qQVRnNVRqVHNkaFd4OFVvckJycDNRTjM4TlZhaV9Gc28wOFJOelB0eEMxcXQ4Z2w4cENLU1JUTnZSMDVXZ2c?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県神戸市灘区箕岡通４丁目でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNmVfa2tLVllSNWxaVkQ1bF8wd002Tzl3NHdnZ1BSSG93Mmg2WWNjc0dmLW1IYTU3QmZRbjgzY1VrZHpka1ZFbUNlelZXa2R1cGFyVGZ4RXloYjRjRFN4ekJETW53dzJZSnFHcEZGRDd5aXZNd203Z19yUjZmaEUybGQtWmxqWlZ5Sm9OeW42SkU1NHB1SGdyQ1pPZWRtWGhUSzUtZHZQdG5iamVVbnRfLWttQkhhVlJ2LW93cU4tN2UtRWhselBzU1RoX3ZGLVV1LXFyeUdFNG9XWlEyM2tOUGpaVWVVckdENEZzdVZlY01XUdIBogFBVV95cUxPSG9TaUgzenJUUkdMOHowNVY1S0RYeGlfOFRvZ3hDbHFjWS1NbzdscGl4cEE5NHVYbFItSkhUUFU3Q091Rkt5QWUwXzE2Zm9fTmpsb3BzSnJUMkRCejctSHdJOXBYQ05hM0dWSkVLZmt6R3pYcVFuU21fQ2VjZjlGemtzQlNZT3BIemNoaVN6aFZ6RGZBd3VTMHVYc0RiTDM1dEE?oc=5",
      "site": "news"
    },
    {
      "title": "石川県津幡町上大田でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRktUcWZTV0FwTUpPYzJvRjEyU3Y2WU5BNnVjVk14THIwVmxBMG5wb3pLc1hjN0xlUXBpbWdMc21GcjBjdldzeC0yU25weGI2anR6a3BKbzR0Nlk2cFJUX2l4a3ZmRWtxSzJGV0htTVhBMnM2LVFhNmYtNGVOWDlTdDEyS0NyVDlzQ0FFRDYtTU9QYVJTaXJQc2Y5bU_SAaIBQVVfeXFMT3lkcEdBWlJwOFJvVWhhZ04zU1ZBdDVnMWFCOGxDMVU2SW9faUVwMnk4ZjVNQ01ZY2NRTUdkaWU4VzVUVWY3bUNsWVpzMFlQWndxeXpSa1FwbUh1ZmxXNlc1U0s2YWUyZVREY3VSNEVPRTBUMkZxTFd5S1hfU3g4a0VmNzNoMmVJMGo4aWM4V3hZZUVuV0VyaDBlVWhXdFBEdzNn?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":12},{"pref":"青森県","count":10},{"pref":"群馬県","count":4},{"pref":"岩手県","count":3},{"pref":"福島県","count":3},{"pref":"栃木県","count":2},{"pref":"秋田県","count":2},{"pref":"埼玉県","count":2},{"pref":"富山県","count":1},{"pref":"京都府","count":1},{"pref":"和歌山県","count":1},{"pref":"神奈川県","count":1},{"pref":"兵庫県","count":1},{"pref":"石川県","count":1}];

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
        <span>対象期間: 2026年8月22日</span>
        <span>·</span>
        <span>公開: 2026-08-23</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={44}
        periodLabel={"2026年8月22日"}
      />

      <p>2026年8月22日、KumaWatchが収集したデータによると、日本国内におけるクマの出没事案は44件報告された。都道府県別では北海道が12件と最も多く、次いで青森県が10件、群馬県が4件と続く。特筆すべきは、青森県十和田市の観光地周辺で人身被害が4件発生したことである。本レポートでは、当日の出没事案を地域別に分析し、リスク評価を行う。</p>
      <h2>主要事案：青森県十和田湖周辺での人身被害</h2>
      <p>当日は、青森県内において4件の人身被害が報告された。これらの事案は十和田市の十和田湖周辺に集中している。十和田宇樽部では外国人男性がクマに噛まれて負傷（※1）、十和田湖畔でも男性が噛まれる被害が発生した（※2）。さらに、瞰湖台展望台付近でも男性が襲われ負傷しており（※3）、青森市内でも外国人観光客が襲われ病院に搬送される事案が確認されている（※4）。一連の被害は、日本有数の観光地である十和田湖周辺で立て続けに発生しており、夏の行楽期における観光客への深刻な脅威となっている。被害の状況から、同一個体による連続した襲撃の可能性も考えられるが、現時点のデータのみでは断定できない。いずれにせよ、当該地域における緊急の安全対策と情報提供が不可欠である。</p>
      <h2>地域別動向</h2>
      <h3>北海道</h3>
      <p>北海道では12件の出没が報告され、全国で最多となった。増毛町、北竜町、弟子屈町、留萌市、新ひだか町など、日本海側からオホーツク海側、太平洋側まで広範囲にわたっており（※5, ※6, ※7, ※8, ※9）、特定のエリアに偏らない全域的な警戒が必要な状況が続いている。北竜町では出没の痕跡も確認されており（※6）、住民や訪問者への注意喚起が重要である。</p>
      <h3>東北地方</h3>
      <p>東北地方では、青森県の10件（うち4件が人身被害）を筆頭に、岩手県3件、福島県3件、秋田県2件の合計18件が報告された。青森県弘前市の岩木青少年スポーツセンターでの目撃情報（※10）は、公共施設への接近事例として注意を要する。岩手県では北上市や岩手町（※11, ※12, ※13）、福島県では本宮市や北塩原村（※14, ※15, ※16）、秋田県では秋田市内（※17, ※18）と、各県の中山間地域から市街地に隣接するエリアまで、広域で出没が確認されている。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県4件、栃木県2件、埼玉県2件、神奈川県1件の合計9件が報告された。群馬県みなかみ町、高山村、安中市（※19, ※20, ※21）、栃木県那須町（※22）、埼玉県秩父市、小鹿野町（※23, ※24）など、従来の生息域である山間部での目撃が中心である。神奈川県厚木市七沢でも出没の可能性が報告されており（※25）、首都圏近郊の山麓エリアにおいても警戒が必要である。</p>
      <h3>中部・関西地方</h3>
      <p>中部地方では富山県富山市（※26）と石川県津幡町で、関西地方では京都府舞鶴市（※27）、兵庫県神戸市灘区、和歌山県有田川町でそれぞれ出没が報告された。特に兵庫県神戸市灘区箕岡通での出没可能性の報告（※28）は、大都市の市街地に隣接する地域であり、人とクマの生息域の重複が深刻化していることを示唆している。</p>
      <h3>中国・四国・九州地方</h3>
      <p>当日のデータでは、中国、四国、九州地方からの出没報告は確認されなかった。</p>
      <h2>出没情報の内訳</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">項目</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">備考</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">総件数</td><td className="px-3 py-2 text-xs">44件</td><td className="px-3 py-2 text-xs">報道由来が42件、自治体情報等が2件</td></tr>
            <tr><td className="px-3 py-2 text-xs">公式情報</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">報道機関による速報が中心</td></tr>
            <tr><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">すべて青森県で発生</td></tr>
            <tr><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">キーワード一致ベース。市街地近郊は複数あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">捕獲・銃猟</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">当日の報告データには含まれず</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>2026年8月22日の総報告件数は44件であり、依然としてクマの活動が活発な状態が継続していると評価できる。特に、著名な観光地である十和田湖周辺での人身被害の集中発生は、極めて深刻な事態である。夏の観光・レジャーシーズンとクマの活動期が重なることで、偶発的な遭遇から重大な事故に至るリスクが非常に高まっている。</p>
      <p>季節要因として、8月下旬は秋の大量採食期に向けた準備期間にあたり、クマは餌を求めて行動範囲を広げる傾向にある。山中の餌資源が不足した場合、人里の農作物や観光客の残飯などを求めて、より積極的に人口圏へ接近する可能性が高まる。今回のデータでは「都市部キーワード一致」は0件であったが、秋田市や神戸市灘区といった市街地に近いエリアでの報告は、人とクマの生活圏が近接している現状を示唆している。観光客を含む一般市民は、山林やその周辺地域での行動に際し、音の出るものを携行する、早朝・夕方の行動を避けるといった基本的な対策を徹底する必要がある。また、自治体や関係機関は、迅速かつ広範な情報提供と、必要に応じた立ち入り制限などの措置を講じることが強く求められる。</p>

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
          <dd>2026年8月22日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-23</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-23</dd>
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
