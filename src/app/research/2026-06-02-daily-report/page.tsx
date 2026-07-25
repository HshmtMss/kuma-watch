// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月2日 / mode: daily-report / 生成日: 2026-06-03
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-02-daily-report";
const TITLE = "2026年6月2日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月2日、国内で42件のクマ出没が報告された。特に福島県福島市の工場ではクマが侵入し4人が負傷する人身被害が発生した。出没は秋田県（12件）、新潟県（6件）など東北・中部に集中する一方、西日本や北海道でも確認され、全国的に警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-03",
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
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
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
      "title": "福島県 福島市 / OKIシンフォテック",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1ZRDFpRTl3blJQdHZRc2xmcW1PeUFDZUV4VE5OSk9Jd1d3LXFDNEotLVd6bjg3bFlHazcyR2ZOaXJoYmR2Nkk4YW10Wmh3a1FsaW9kbml5OA?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 福島市 / 工場",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBqVzU3bjI4ZnVuRENicl96c2c1eWJXTEN0ZW9pSWhQLWw3ZkUwamlYQ1JLRnFyVFZ6UXloaHJTaUxLeDl3ejBWMGFlZmdyNGJJbXhoM25hdWhsNERIM1IxRHE4OXNUSjlXQnhNT0tFS0xVcWE5U1ZnN1lCMGxmMW8?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 盛岡市 / 小鳥沢二丁目",
      "url": "",
      "site": "iwate-morioka-mymap"
    },
    {
      "title": "群馬県 桐生市 / 黒保根町下田沢楡沢",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVUxWdUtJMDJiRURQd2s5bkdHdHotWDR3NWFfYV9MR1lTWmVPVDBhMWhCY1pVbnRDTnNDdFZsU2k0RHlRRk11T0ZZdl8tREwxV1h2NEp5UzZCSWFxZ2gza0o3ajJHN0szQ0VRR2R0U1NTMkQ0VWFHVVNIWlRTbjE5ZFJsZzRnazNCSEVUN1JBOGw3c3VNSl9PdkdvZzTSAaIBQVVfeXFMTnZ5WjRBVTVNeGd6N09Bc1hYUXoxUFM3SG5FWDM0TkRXNUtOOEdVS0tKVTNSSDExeGNFR2J0X3RIdDNVZHVfZEg5cFo4aGNlOWt4SUpNR2tQN0dOTWhQdGRrTVBRRTd1MnUxUkhiTk5IVnl2M1hIaG1WWWtjR29uemNKNmRtSTdzWElxYjRIeF9oajlYOHl1ZnktZWR2X2RzRWl3?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉県 秩父市 / 田村",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNS29fWTVHR0Itc0JTYm1UV2V4U2pSNnUyai1QSTRLQ1RYNVAwa05mdllPWS1XRkN5TmEtWURPTmhPeWk5YUdyU1MwOXRpVGZVZnFaQmhpMTFSaWtGVFowRmVjbGppMUwyMkxmRF8yYllqaHh5U2JaMFNXekI3dlJuYVRhZXhOdXdPaWRTYlRVU3V4b0g2WTM3NWRmZEXSAaIBQVVfeXFMUDZJNGxtLVNkSUxZZUxfa1lLTHRMTkloYzRKeUdzcjUxT0lCdEUzblNJcVA0eU1ydTFURFExVGlSWE1YUGd5dWtBeGFMMDNoWGMwbTNVVEY4UDY0WUd6N3JDbGZmczNxYVlaOGVOdW1XbkFDYlBiczJaakxNcTBRZTVFNmUydXB6Y3RxaXRLS3RGNUpCUm9NUXFyY0NlZkloWHBn?oc=5",
      "site": "news"
    },
    {
      "title": "富山県 立山町 / 横江",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUXpYT2tmMmh0SWFDaFZ3TUs4bHA2N21SaHpJX2RuUkxNX1RXZVFsNlFiTnZhOVlYSFRkdGJPNG5zYkVNRGhHeTV2SDRJRGxBVTdST3pqTUdjMHNOeGdFbWJWdW9keTZaSGRCZENQRVZpdHB0VlVzd1dJdS0tdDdaWUkwZjJEUWhpdVVha09OYlIySU1LSnZFZTBWRkrSAaIBQVVfeXFMTlpDdV8tUzFKWEtCbUlXU1ZVQ0pEZ1dtTVItOW1xQm9qcHA3Q2lIZEM1Y3BXdW1SOHNJWWFIX2lVdEtaY1JKeHAwbkFzMzJTMEpjWXVGSk1jSWRqVmxiSExmMUZGLTlCdnBCOW55b3JSYWRXcmxDLWVlbllGdWE4REMxUVlVeDZhSlN6T1VORm1ZaEJtRGFzYXpDdUJjTXpSaEd3?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 花巻市 / 大迫町大迫第12地割",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVUZEWnptX0dFN0VMREJKOUhfWmFkN0pSdURWZTktQ3d4Q3B1SnVBTXVjcjFDQ1ozSEMzR3NpbXRwUnJBWmFNanc0UWpBWlJoU0ctUkVGTUM3ZV9DTHRteUw0dVNMR013UEZZellkd3F3NnByWDlZdDBWUGdNYlNuMFF5bmQxYmNYcVJ0UU5MMlJfc0R2TUZvMkNYdknSAaIBQVVfeXFMUHAxc0pRNFgtVXBpc3d5Z1BIVWNKTDZoU2ZhUlhVY0h1SEFQbXpsdWI0dVNacXBLd1RiSEJMYUdCY2x2d2NFdmE3Yi1SMWFZSEZKNm1VclVVUmJDbERrbWctV3NCSnhHbFBSa3k3N0ExcjluWHdQR1RNUE5IaWVLN29nNEZoOE9PWjBXbS02RmM4OENIWnVKczJwU0V2cEJrRXFR?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 花巻市 / 天下田",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcnA4cGJpNnBmSDFDN0s4QXQ4TDh0TF9OWnpEV21TT2xMZHp3dUVjR3FmaEpZUlB3bVFlSVBWb3dUeHk0U3VhQ0E4cG41anhMTE0yUUVOenpZVWc3NG1lTkZtTGFvTWo1QlQtZmxXcTlXVVNiSGNfQzU0S2tFbG9LSi1YZ3lQTUpNQXJuYzNkRFVOZjUwUU9rS0FCUUvSAaIBQVVfeXFMUHNJMHIwcGtJclhfT1RoVGVMcXhLOW5XbjI3ejdCeUFDRXl2Vjl4NTlROXMzOFlvMmZhckhzWVZQMHo3V3VWSGVGWW8wY0VtbE8zS0FVVnZfVUhHWnVXdHdYV0ppenNXR3MtdzdBeVhaa0NRbm9PYnBpQVJpQWdpS082VjhrLTJ2aDFPNmszZ1NOMU5heVF2QTR3NHFQckhkZVFB?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 宮古市 / 津軽石第15地割",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNjhhOXRGRmpRQ0VFclZZZ2RTbjNXalY4R1czbXpPbnNqd2dFS3JaQl9KSnowZEJnN2FBT3JXaVVvN2VCcVZEeW1lTzBUY1h4SDl2YU1FSll1VVZ3U1V1SXZ2Q2I3Nmx4SXZObnQyRjdkSVp5RzZYZU12dGRkcVhNTFVkbGk0RjdPUHV4TXNtYWNUTVVPa3dnTmlBVS3SAaIBQVVfeXFMT1pqS0RhTURpVGFCclQ1aXpIeV9leElTai1wd2N0ZElxRklkNnVrOHFwMUI5TEFDYVRGTTU3MV9IaVhjS25jdzFJVmQ1OW1Gai12ZzYzY2tpREZrWkpJZm5MSktyNDIzOThROGFXdGphbnc0Z2N6UWY1VEEwQ2F4OTcza3pUUzl4em9kQWVNSTVzcWRqQ05YMXVQX3hPU2txZV9R?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 宮古市 / 花原市第1地割",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOY185c1JsQm9rVWpfTlJ4UmdJSGkzQkpHcVNVeW9GLU1ZaWpqVWZNUnRuT0hUNFRtckZYZGVaVmR0VmQ5Q3RQaG5fT1hlM0NOZ0dpT1ZaMWN5WHNjMThtckhLZm9BR0Q1bHdGdUlYdFRhd2hMekFMZTBsY2tFUlJ6QnpYQVhzRU9ydmphNTVUWHVoZ2J0bUhLa3FRMGtLLV9DMGxUTW1wVFgycng0OXZXTU9jaUV5SEg5SVloYXFRbmM1QWJIdXd5Qm5RVjVUc1lJQ2JKejh3MEFYR0xBWHdwTV9STVduR2RubEFCeW1lczF1UdIBogFBVV95cUxQUUh4ZF90NVFoMkhaTFJQNDFIekRXWWJhU1BCN3dHYTZNV1I1cC1QQ3ZiZ3dHaXdJbENmQi1PWHliSXhGZDdRZDZkOWdSUi1qd01yNTVsRGNHMUZrdzlCTUI1Z3Z1MUJNRnVYMkhaX2FnUVdYU3psRjNPNTlSbk1jOGJZdk5yRVhteUZSVWFwTmRJX0dXeG1JQ3hyeXhaUkU1SXc?oc=5",
      "site": "news"
    },
    {
      "title": "山形県 山形市 / 岩波",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOTU2LTBrZzl2Rm02MFBkQUwtZmtBRGZXamtQWTh3VjNIeEZOUG5vNThxODQwR1RROURoaUt4OWNJcjlZbXpYM0htRW5TZnlOUWdOUm1BWHhpakhvam45ZlgzdXZnb2dZNnMyUk5JVS1sWXdOX1hOY29JbnRpRWloYWtJUDR3ZFdJS1Fxbk9RYW5sckc4bm9QaHN5QW_SAaIBQVVfeXFMUFZuaDA4MkhUbFBFaldDcGt4X3BWM0xqWnJIM1VfcXlKeW9UUm54YkpGUTRkUTdHeUZJUzVlZzl6dFl4aGE2eHE3aDZvNUJFaUhxeUF6LWQ2NzQzR1JISS1NUlJyS2Ixc05Id1ctazFrQzgzN0FYZWJHTXdRc2ZYRHpXZVViMHBaaTFJd2xRaGlSZTc2ZzJmSHZaS2pTOTc0Y0NR?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県 豊岡市 / 瀬戸",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSGIyc2luTGZDd1phUGgzYmEwWkFsUmZlZ2tGVm5iS09ENzc5NGNEODY1RmlOQmgzb0tpcjZlWEpfMkt6Sm9qSnF2Ul95cDExdm1nM2dqNkpGX3VfbXJua09zSkFPWlRteVlVMjZkUUROck9wZG82QkhQVWMxSUVidlZpTEYwREpQZnc0WGdJU2d4T0Jld2FrM0k3d2nSAaIBQVVfeXFMTmxNdGNCSFNoRE9xMTRnRHZ2Z2RhZzdPa2xCQVF4M1pCX0FHbjUtOXctNF9XT3NNaVhiT0tPbzNVMTZMYmJuV2FMQlNQbXRFYmhxSmQ4MWRIRWVDcUZCbjJ6dDV0WHN3TU9ISHpQcEJDclNFMVdiWUVtSzZQQXhwYU9QdVJQTXY0UkdrTGo1NWV4LVpDVF9wN0RmZXV2M0kzNXRn?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 函館市 / 蛾眉野町",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYW5pRG9CY1B3VGNvVHZ0dGZHaXJUT3dyV3J6N3NNVnlPdlZ0VVVlcWl3aDFZcDc4QU4zZDVVUENma3Y1MjRYVm92MXJDSi02eXFUWWVwdHpzSDY3OUh5dzg5MmtHZk03S2tVQmtGalpKdzg1bFd6U3VGaHVMRGtuYWR6NEh4QktTM2RWdzlPZlBDcS1PbnUySjMzLUPSAaIBQVVfeXFMT2xmSGJEd1RKUm5MbGxYcGdreW1rMzlWdGxqeU90cFBpako2NG9tN2s4clZMX2tfOVFIR01qT0k1Q25jOWdSY0o4NWhzNGNHeDJHelpRTS1UM3lrYjJCSlVnZDZNS2NCbWgxOTVLOTVueDhGX1dvRWhUTTR2V25MalhrOEdubDZ4WWd2NzhiRENPMXpzVE5DZG4zb0NJYk9ibThR?oc=5",
      "site": "news"
    },
    {
      "title": "岡山県 鏡野町 / 下斎原",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdlRsbHJhTVYwSjg1QXF0ODQwdXRkZ0lwMVZ0bEFxVTJGT1p4VU0yeUl4NHdEbGYxWWIzM0FRb196cWMwYk0tREgxb3FsQ1c4aGtkTUJEYUJQUng0ZGVwcUtPV1JSN2drS2d5ZU4yeWQ1ZGRlcnY1cUlTTnNNZnh6SlhSMUtha2QxdndvUzJ1dW82MU5rOUpBaklNUjNzSVhNZkRDbnZKb3I4bThOeV92cWY0NG94YTZrMWFpX2tMZU5qVTVRSWZPN1F5ZEpKN1lTT19UbHE1ZDAtNDVGREZONlJHUl9tNkZmYnlvRUZOWDUzQdIBogFBVV95cUxQbjJ3c3ViVEdhT0Y5aUtCbWZFS1JWeFBmeXgyV1JQblRFeUdLT2ZCVld1dGZuNjY2MUdpbF81ZDhLWDNyUEtKbnAzMm45QmhSTmxBZnFqdmFTQVZnVV9LRnJSYndnVDNaa3NCREtaU0lCODJ2OUhDN256ZWFWMVpBd3prTUl4WUdTeHE4RGdCa0R5Tlk5RnIyeDgzZExWX25ZaVE?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 大仙市 / 南外大畑潜沢",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQUFAxRlNBRVVMNmh3MXg4NXVzQVBBQUxocHd1WGJja3VtcnFGUUk3MFk2SFdGODNhVGltc3FqcWVqRHphV2dTckhlQ3cxbzR1dzZDb3UwT2ZyczNjeEJNLWtaVFJzZ0hzSGkxbjVNRHNjNUlNcXBTMHJFN0xrSFp4QXZjaFhxNkViVFNoMGFqUENLaVJlNFk5TkpBN1ktWnA3SFRUbXdiMFBuYTczUjNPOHlsLVRWdEZQN2l5ODZZOFV1a1JGNFhfYV9YNG5VZm8yZFJFTTJIbEZGa0tpTlM0SGI4SFQ2bEtWSzlqMUZ4OG5VZ9IBogFBVV95cUxQZVJFb1FNc1FrTFNKZE5QcUpvWU52SHZPMjRtNDFTMkZ4NHJkVEpndElORjdhMENpZ1lUanVRejRNZmZKcjluQTlLYlFaQ2FUalBKWDZNejgzczVrbXZnTW9QRkVBa3ZCOTNLNG1CWlo0Y1RaMGRZcWdHWFQxNmNkUWFHMHJoVG1zbXhuSXdGQ09NZ2NUbEh1VFM1cHdKT0VaN2c?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 八峰町 / 峰浜目名潟大沼",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU1FpVzZFLWstbzlDVW1jMEl4TnFLRGhGMkFxRUpYZm91aEVYSTV4LTlYNXdWZG9BcVVTVGxqX3JxS0dmQ2w4Mk5RREZNOERabXhFdGlTRHk5a3JOQUMwT1lwY193UXhYMFFfS0U1UXBEUWM3Qlg5LVdXN2hJZEttbXVxWmt1RHpOQ3R6Q1dJbWlzYmN1WVpsNnV3UGLSAaIBQVVfeXFMUHNSV3BISDlZREpRc05ncHZEZUdubjctQ0VxQ0JVVU53ZTROSGhNNnZCcmltVWNIWVlDSnA4Zm83WlZmWFo5TFVVTFpBYWtCMWtYU09nZWkzZmh3S1lyc0pmay1mOGcxckMzcTdFMWppZXhkeHV5M1NRdFBBR3N1VUpWX3lwRThNcWFST2dCblVRU0JEWm80UENOT2RuMVBKTUVB?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 男鹿市 / 脇本田谷沢立木沢",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNC1IalJaWlJHV2FOTUhKYm5RaVdvWHhadlNfY1hMTmFkS1A5YlZxeUZlR0xwRUhkdl9kNzVoSmZ1cHI1aTVPUmJyaWE1NGx6U3Z5ZllqUHhHdmJ0c3BCYWRFYS1xdzBmemdqMXZGZFZyZHNubjI0ZTViS2hNNjByYS1PZ2RvN2NZTVdudlBxWEpJQVpFX0VpbWZXQznSAaIBQVVfeXFMT0p0a3h4c0kyaHBBaEhPWmlpUDhzdDM3MXFrTEhJUTBiWGhlNnZST3JvX2JGYXlIWFV3a2xqREgyellSRUV2UVRkdnZXbG5PLVR3M2wyMUQ0Y3pJU25WS2kzSmo2MmtzUkhEX2phTG81OHVRbDA4d3hjNGNPaG1IWnBfeTZ2dkRuLXJBbGFWZUczMUVaNkhucW0zc3pMN2Q0dW9R?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 横手市 / 雄物川町大沢大沢",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRlBscENjWjRWZmwwU0lkRlF4bDFjZEJmR3ZoU2NBbzRTZVV5anZOcGF2d29LdnRNdGdKV3l3U3FNX1FydDhZSHF0LW9UZ0w4X0YzNXJmNUlyOFJ4eHJJRHpqWHpjSUVlRlVXLUpvd2lKMzU3bEZzRFhUQ2tqdVloZnlpVzY5dUlhZGswblY4dzlORWJrZlAwcV9NVVrSAaIBQVVfeXFMT3FURUtmSHlIZ2xQamJtUkN4c2V2dElOY3h6YzFIUjAwMjA0LUo2LWY4R3dKbV9WUThWYlhOSkdLN25PcldVUXIwYmN1OVBOaUNpbDlwdnk1WlEtNXdyX0hyUDB1SUJEUEpDUkk2clU5SzQ0VnpDYlJROVhId3FZTFk3bUN5VkNJQzk5dHA5em90akYxNVNYdm92MUNXbzRMTTRR?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 秋田市 / 下新城青崎雷田",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNERwc3JCVmk1eVI3YnBiS3J3Nl9weWQ3bnpabERwT1pKZWNuN0tjYloyWHMzaGVaakswdDJJbUcxaXNuVVY1M19YVnFWdElwODA1bjNtel9meDRpaTNxS2plXzdEUHE3MlNCN2VCWEtoZ2hnNktkbmlUMzRvblo0NENrREgwSkl1c0NLSndGcGliY3c0dUxudmJORUPSAaIBQVVfeXFMT0dCOE5vbzVBNjI3dDFsNjA5SnJnamp4OXM3MEFMc3E2M0kwMW1nUFlJQ1k2STZ0dGlUdTdaNmVZcHh2X0tEay1aR0NaN2JkZXBRRmJsV2dqVVdOMEhZQXJNdFRuS3ItNGRYdGl3MF9PYmR1bGc5SC01RlFTb21rMjY3emREQ21sY193NmhQZHRweWRDTl9tRk1wSjEtRzlRbE1R?oc=5",
      "site": "news"
    },
    {
      "title": "青森県 むつ市 / 大畑町",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOelgyZHpTdjZrMmVoVENQcGZrRkVEcEw0R1dlN3M2ZWNZNm9LVmx0dVctdDNLZGNlS1A3bldaeEJmeGplaVBBYTdJcnI4NHRTZXRZQi1Oemw1eVVIZExVVzMwcGE1SWI3dkszQzBGT2IzWjg1RzZSdHNSTzZZekNiZ0pKXzM4Qk91dmxIcHdPVzY2eEt1RTBhcUcteHbSAaIBQVVfeXFMTkkxd19SRWNoYXBKQ2hsWllJSThVTGZCQjIyRUotLVlZTkFBNm9SYU0ybENlVmhKSnppY2VEeko5VllKY3hIMGtlVlpVTEFvNjljMndLTmVoZ1RSSHg1X2lQdVI1cmlVem1JSGhMa0JCSzdJLVpHLUJTWkJtVFhmUkNvVVF0NTlpNkp6NUw3MF9RRnJwSkFkdXdlY3RTRDRLX25B?oc=5",
      "site": "news"
    },
    {
      "title": "青森県 青森市 / 高田朝日山",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQT1dZZmdEWUZYc0lXVmdXdHBKSzdWbzZOeVFOdENfWk1BRUtVQWxCOE9fc0tjazFkRG03NmRabjBFMS12UFJIMGU3TkRjY0dtVG41cktMeGtQZ3ZnWDdERE5fNThldlJiZUNDZ2RyR2E1TUd1VDdZa3Fkci1TdENsTEZLaHp3NmpTZTZ4TWZBMWJsanFfN3NzdVVxWkHSAaIBQVVfeXFMUDVRcVE0TUdrV1p6RGNhLWs1cHh3a2Y2RVZ0RllFemhFSllycmZYTlVNYmlCN2luMk9vRE5ySVc4WVdfSGx4WWxiRGlORnNHS3Q3WUZOTHFVQUpucXRLX3Frc1RZSWZhSHNqbTR2Y1F0bnJVclByYmxOVzBMQTNNNnRveHM0RXdnUGpMX3VIVG5PcGc3MU1FaXBNZktET2dRTll3?oc=5",
      "site": "news"
    },
    {
      "title": "長野県 軽井沢町 / 軽井沢",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQelgtRDN1WGFxNW9HLVZ2blU5Sjg5OWpPYldsRUFSenF3RDh1QWMtWS1OQ1ZXakM3eUVXQjZZVDFRRU14eGVIdHJUQnZqLUNNaDVSUmRlM1VSQk1rZFBhU2x1VXRYcjBiMFBYVlRIVDNjVjRILWdNZjJCbjBURk5lZG5ianVpdklDNjNUN0xaSmpsZFpyRlFJbTNUZ2HSAaIBQVVfeXFMTnEtYXF4SURodnZ2Sk1qbXMxanNvcDU4QVF3N3NlcGkwRng1U3RnMGtxbDRUclg3SjRnR25HSlh0Y2ZXYlUxdHg0MFFzTGdkQ3FSaDNnaFBFMzRTSXRVZ2NKY1BLOHlfQm5XbF9EcHBOTVhoMm40M3RfUll6U0NrWG9OY1FtdklBcEtWYjFHTUFUdkZTUHdJRWF2cjdieVJsNXNB?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県 桐生市黒保根町下田沢楡沢地内黒保根渓流フィッシング入口付近 ",
      "url": "",
      "site": "gunma"
    },
    {
      "title": "群馬県 東吾妻町大字松谷 中尾集落付近 ",
      "url": "",
      "site": "gunma"
    },
    {
      "title": "埼玉県 秩父市 / 秩父市荒川白久地内（白久駅より東に約７５０ｍ付近）",
      "url": "",
      "site": "saitama"
    },
    {
      "title": "新潟県 阿賀町 / 白崎",
      "url": "",
      "site": "niigata"
    },
    {
      "title": "新潟県 魚沼市 / 新潟県魚沼市田戸",
      "url": "",
      "site": "niigata"
    },
    {
      "title": "新潟県 阿賀町 / 西",
      "url": "",
      "site": "niigata"
    },
    {
      "title": "新潟県 阿賀町 / 京ノ瀬",
      "url": "",
      "site": "niigata"
    },
    {
      "title": "新潟県 見附市 / 本町３丁目",
      "url": "",
      "site": "niigata"
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
        <span>対象期間: 2026年6月2日</span>
        <span>·</span>
        <span>公開: 2026-06-03</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":51},{"pref":"北海道","count":9},{"pref":"新潟県","count":6},{"pref":"福島県","count":5},{"pref":"石川県","count":4},{"pref":"群馬県","count":4},{"pref":"富山県","count":3},{"pref":"山梨県","count":3},{"pref":"岩手県","count":2},{"pref":"埼玉県","count":1},{"pref":"島根県","count":1},{"pref":"岡山県","count":1}]}
        total={90}
        periodLabel={"2026年6月2日"}
      />

      <p>2026年6月2日、KumaWatchが収集したデータによると、日本国内で確認されたクマの出没事案は42件に上った。このうち、福島県福島市では工場内にクマが侵入し、従業員4名が負傷する深刻な人身被害が発生した。出没件数は秋田県が12件と最も多く、次いで新潟県が6件、岩手県が5件と、東北地方および隣接する中部地方に集中する傾向が見られた。しかし、北海道から中国地方まで広範囲で出没が報告されており、クマの活動が全国的に活発化していることが示唆される。</p>
      <h2>主要事案：福島市工場における人身被害</h2>
      <p>当日の事案の中で最も深刻なものは、福島県福島市の「OKIシンフォテック」工場で発生した。6月2日、工場内にクマ1頭が侵入し、従業員4名が負傷する事態となった。クマはその後も工場内に留まっていたが、翌3日の夜に逃走したことが確認されている（※1、2）。この事案は、クマが工業地帯という都市機能の一部にまで侵入し、閉鎖空間で人的被害を引き起こした点で極めて危険性が高い。逃走した個体の行方は不明であり、周辺地域では厳重な警戒が必要である。</p>
      <h2>地域別動向</h2>
      <p>当日の出没事案42件は、北海道から中国地方まで、広域にわたって確認された。以下に地域別の傾向を詳述する。</p>
      <h3>東北地方</h3>
      <p>報告された全事案の半数以上にあたる22件が東北地方に集中した。都道府県別では秋田県が12件と突出しており、大仙市、八峰町、男鹿市、横手市、秋田市など県内各地で目撃が相次いだ（※14-18）。岩手県でも5件が報告され、盛岡市、花巻市、宮古市と内陸部から沿岸部まで広く出没が確認されている（※3、7-10）。その他、青森県で2件（※19、20）、山形県で1件（※11）、そして前述の人身被害が発生した福島県で2件が報告された。東北地方は依然としてクマの活動が最も活発なエリアであると言える。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では計5件（群馬県3件、埼玉県2件）、中部地方では計11件（新潟県6件、富山県4件、長野県1件）が報告された。関東では、群馬県桐生市や埼玉県秩父市といった山間部での目撃が中心であった（※4、5、23）。中部地方では、新潟県で阿賀町、魚沼市、見附市などで6件の出没があり、国道を横断する個体や田んぼの足跡など、人間の生活圏への接近が目立った（※26-30）。富山県でも立山町、南砺市、小矢部市で計4件の目撃情報が寄せられている（※6、31-33）。</p>
      <h3>北海道・近畿・中国地方</h3>
      <p>これらの地域では出没は散発的であったが、広範囲にわたる活動が確認された。北海道函館市（※13）、兵庫県豊岡市（※12）、岡山県鏡野町（※14）、島根県奥出雲町（※34）でそれぞれ1件ずつの出没が報告されている。特に西日本での出没は、クマの生息域が依然として広範囲に及んでいることを示している。</p>
      <h3>都道府県別出没件数（上位）</h3>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">12</td><td className="px-3 py-2 text-xs">大仙市、八峰町、男鹿市、横手市、秋田市</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">阿賀町、魚沼市、見附市</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">盛岡市、花巻市、宮古市</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">立山町、南砺市、小矢部市</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">桐生市、東吾妻町</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>2026年6月2日の出没状況を分析すると、以下の3つの観点からリスクが非常に高い状態にあると評価できる。</p>
      <ul>
        <li>季節要因：6月はクマの繁殖期にあたり、雄グマが雌を探して行動範囲を拡大させる時期である。また、春に冬眠から目覚めた個体が本格的に採餌を行う時期と重なり、活動全般が活発化している。春に出産した母グマが子グマを連れて行動を開始する時期でもあり、子を守るための警戒心から攻撃性が高まる可能性も指摘される。</li>
        <li>餌資源の状況：春の山菜シーズンが終わり、夏の漿果類が実るまでの間は、山中の食物が一時的に減少する「餌の端境期」にあたる。この時期、餌を求めて人里の農作物や生ゴミなどに誘引され、人間の生活圏へ接近する個体が増加する傾向がある。</li>
        <li>人口圏への接近度：福島市での工場侵入・人身被害は、クマが市街地や建物内部にまで侵入するリスクを現実のものとして示した。また、新潟県や埼玉県などでも道路横断や住宅地付近での目撃が報告されており、偶発的な遭遇から重大な事故につながる危険性が全国的に高まっている。捕獲や銃猟に関する報告が0件であることから、多くの個体が野外に留まっていると考えられ、継続的な警戒と対策が急務である。</li>
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
          <dd>2026年6月2日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-03</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-03</dd>
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
