// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月5日 / mode: daily-report / 生成日: 2026-06-06
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-05-daily-report";
const TITLE = "2026年6月5日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月5日、国内で報告されたクマの出没事案は50件に達した。特に北海道、長野県、福島県で各6件と多発した。人身被害等の重大事案はなかったが、岩手県で物損が確認されたほか、全国的に山林から人里への接近が広域で見られ、警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-06",
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
  datePublished: "2026-06-06",
  dateModified: "2026-06-06",
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
      "title": "クマにより小屋のガラス戸が損壊",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOLXpEX3lYVWlsNjdianQ4TWlrVFhSdW5jTzE4Y1dLTGlPWGV3VFo4ODJNdl9BN05UcURaV19iQ29LQ1ZJLWNveXVZUEpENGhldHRLWkFFc3lwSFhROXBGLS1CNVQxdEg1NGJ4WmFjN1Z4SW9VNDRXQnlaUHJRVjl4dFFqMWdYdzQ?oc=5"
    },
    {
      "title": "苫小牧市丸山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNLWQ2UGMyc0xOck14YlVyZWx5SVFEXy1vQk56eWljdGZxS1duY3lSTC1fN1BrRXRuSU9GUmZOaV92WGVvUlRyWlZxVm02bU5sV0FCNHNINzNiaWxlQVBhX3JVZ0M5VllzTVVIT0tyQ1dUOXlxbW9MdEJ4WmwwOXphUllaZi13cXlXUW9DYTV3bmNEXzdEVFZZVlJHcXnSAaIBQVVfeXFMTksyMVZfMmpSRV9rV29fN2h5eWcyME1WcjFQNTVhSWtFRHhVdEVuVzNCTGlkQk5zazF0MlNwYnprb2x3aEtvSkc1WFNvSVJBMmZHV0V1RG5XekF3TTVhR2t5V1d3Z1V5UmN0d2YyRk1SNEpGTE53Q1ZzVzVnNEdjUnJ5Q0VwOW53b2FkY3BDS2h0V2o1bE1UeXRmRml3ZkhuMWpB?oc=5"
    },
    {
      "title": "初山別村明里でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQaExHMXBNSlR4U3o0M2R6MDBiVWFZaEVMaFlUNkxPSndXZFFhcXd1TDRhY3BWNXJOTkNZZ1NTYWpnMjRrblFaNVBOYnZGb0JWTFk0c2hLeERsSG1TaGNOWG9ZclZsamdYYS1PZkVpV3hRdTRQVWFjcm5OOVhUbnZBZUtPV2hYUXJuTUFzSXhVQW1hSzctMjFaTVdHcmtSaS1LMlVRSkdXTTdicnlZUHFj0gGiAUFVX3lxTE5ZVnNNREVIR2MwWDBXdlR2RXQyVzd0V0FLQ0lHX2VXQm9QVkZsMnQ5UGxZanNfVWcxUjltdDliYnJ3ckdFdnpsX0laRFU2MlJjM2dlRnNfVmJYMFhhbE8ycU1UV0FKdy1lWWRDTXA3czBfQ1RMUEdSdmNzNUhIZ29DWno1bmt3eUVpZWQ2Y0NrSWpFV2JxdEVOYVJWY2Z5cC1MQQ?oc=5"
    },
    {
      "title": "三笠市美園町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdEI4V3FXQ3UwRkNZME9kUUlQMXdBWHpzdTJPd19mWXU2SGptSUdoTEFRVGo0dkRiUEJ3WUNQcE1ieWI0Rmhfc21lQlpsQmtRLTBWaUdWUGlwSG9MRi1tZ0szWVFyNEZhWEVqM2dHSm45OFRrU3lkVWtiWk5yNUF1aTZpZUUxRG9jWHZpT2FjbkN4ZnlyV1ppUlMzSlPSAaIBQVVfeXFMT1lUTU54T0I1QlZhdzcwVHNQRkZWZ2RWbFJ3M2JIRzJsTV9UMmE2clNOUG80MUZfNjJPRExzTmJlV2EzaFdZTGxXUXZTcnhEZWhoZjZkWVNKdmtBaDNtbUpCbnpHendqbnlWU0s2cFpSMHlrTEFFMzVXZ29vQlRoODZ0emdtOUE0TTFlQzVFUlo1SXRDY1RtYW1OVjFDZ2d6VF93?oc=5"
    },
    {
      "title": "知内町湯ノ里でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaW15d3prRFNzREVlcnhWT0VLQThGZnFpWFhkMmxTZjZlZHJ4dEtxQnJWeTNvTTUwZkNGa0VTcDZMMENobll2RWlvODZCQUdidGF0cUItelVBVjdmQTRaVUF3QnBSSzdBZ3NndHJpdG1fTDlRQ0Ytdk9oQlRTRHZ2OU9ic2lRalVmclFsWG9zM3lKbzBFWnVqX3NudGTSAaIBQVVfeXFMTzdwY2FrRENSRm5uRFBUVDBzdC1fVTZzRFJWeDlBWXlOd213NkdsenB2bG40ZGVEZ2JuODhCZkRMcllBREJKdzhQVHhFNVFtbG1FMzAtWDA3NE1GNFZUNmRVbUREM202RDMydW5SMFhxLVl2d2s5VUNuRjU0NGVicXVrUkdmUFhURVpzZG9uUjhyYWJaUE5HTE4wRWJwX2NNbU9R?oc=5"
    },
    {
      "title": "郡山市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1uRzBtYkVLQW9HVG40bElCaU1TRjB2bGZkMW0xQzdac3paMFlUYm82M1VvWDEzUXhzVnRqbDhBc3k0a1BuTnZuLW5IN3B2ZlhRMW4ySFVoSQ?oc=5"
    },
    {
      "title": "須賀川市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1uRzBtYkVLQW9HVG40bElCaU1TRjB2bGZkMW0xQzdac3paMFlUYm82M1VvWDEzUXhzVnRqbDhBc3k0a1BuTnZuLW5IN3B2ZlhRMW4ySFVoSQ?oc=5"
    },
    {
      "title": "いわき市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1uRzBtYkVLQW9HVG40bElCaU1TRjB2bGZkMW0xQzdac3paMFlUYm82M1VvWDEzUXhzVnRqbDhBc3k0a1BuTnZuLW5IN3B2ZlhRMW4ySFVoSQ?oc=5"
    },
    {
      "title": "青葉区上愛子道上でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdlZRclQyUDFkbHhZR0pYWnlZQWdVM05CVzg0RlBlb0dkLVZBc21uUlk2bjRIVlJTS1J1SHAzbzRsWTV5NDlSb3p5S1RUOTJpSHdKM0pKbGs0cnhmc3BUblV6Ukh1OEQzX1BPWHhLcm1zdXAwNjJITENicVVLYUswUTJUdG1zd0dPX210QVZBdUI1NkNMMVd6T2daWUzSAaIBQVVfeXFMUDB5OVBpNjkxWU9fLTdSLUxBWjVSVDQ3ZE1GeW16dWZkR1gzU0EyT19DSENpdGRSLU14azdFWi1GYjk0RVI4Z2t2Rm1hTmNqWmVOUzkwakNaQUdTMWlkbWZaaS1qQWNmZ1k5VnB4OUhtZ2NLUXlCeTN0NzV5WWJadWpIazFMdmhYd2IzTzJQUUZRM2RIX25LelhKeGwtT05heGZB?oc=5"
    },
    {
      "title": "松島町高城動伝一でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQdDJjSFJrN3RiNDdvNFgwaEd5Q2d1Wkp0aWZ1NWJrUGtSbHhSOUlEMEQxaXdyX0VVQ1NMWk9JQV83T3NLWnlHRnQ4UFVrTzBWNkE2T3lVTHNEMWhQdUxRaTc0bmtJOTlqUlVZR0g4cnRpVFlKTjVRcjNidFVVTXlLSnJ0WS1VNXRHdmJxVHBSd3hibWlfa21TY19uemE1Y0ZBcWZfRXBBdktmS2VsbTd6US16Unh5YlhnbUlsc2M4Q2R0QUhhNVBvbHRwWWFpejlnc3Z6WUg5RGxfOEhheFliM0tseE9yWV9KMVA2Nklyemxud9IBogFBVV95cUxNVlQ3YWJVQkVqNW13QzBZVnpLdy1KTlJhUlk3SUlFbGVLWFdlQjdiaG42RG9xcjZ1aE52MGg4eGJDdi1GdDhqVnlIcjBmV1JXQ2l0V0N6WlNSZ0M2OXFHbVVLZEtxLU5GX1pBaHZ4S01kRUpsNjVtVGpOdENRV1I2TlBQR25VLWZCcTV6V0ZicFAtdFNWcFpoSVhoa2cwRVVtenc?oc=5"
    },
    {
      "title": "おいらせ町萱の前でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU1NJVnBjZ0NscjdQUHR3MEdKTHVBNEVESXRHV2N0YzZoZWNUOXh6djZxaWNuMDBZRVJVTVlSYTJUZ0xVSFVMeC1zemdvUXdONjFBQVI5RXd3YUpEc2szbUQxci0xeXRwWDJIQVJwRUtNWW9YUlc4bDZXeG12WkpZSnZWTGJqZVM4dmhNR25BNTk5dWNwWS15M1pHZznSAaIBQVVfeXFMT2Z0MS1OMkktVmlZakk0VmRtTmJqMHVFeFdvR3lOMjltRDJkbUxNNEo4ZS1XV1J1MkFGZ0VlMFM0aFFTazZmc0VvUUpySUwtaGc4YzFXX3g0TDdRWGRsUDNxV1NJVXZJRWZzMGVUOVpWb0tXb0tuX29Iei1mc0JaVkNYaHBTTTdzaEpPOENEenpyVG5MVl9TNjhJZGxrVl82b0pn?oc=5"
    },
    {
      "title": "釜石市甲子町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPamh3Vl8zX0FMSkRhRS1IYWZ3ZU5MUkZjTC0zcU1wY0VmSnFIQ3ZkY0FjNE0zMC15d2RmbzRxNkpGRnlIVnVqN2RuSVo2VjZQRUwyb1ZtcVRwMW1sVDgyS1pGSzBtbWdVQmVCV25EYkI2cG1MOHhWanFPUU5mQ1A2cDJFWUpMekFleGxvMlVGWVF4SmZkU2x0MHJETTjSAaIBQVVfeXFMTnB4c1RUMFBRZTdsSlpTOEF1ZXhzdlRRVm9sN1RqQXdMTm5NQ1A0ZmVJVHVBNExPRERvczhuNENXTmNYRkpjc0MxT01LVDlOM3BqUTRUbzdmTnhsT0c2alA5eDBQY21wMnhOa3h5elBYTWMxdUtNckFiTzFCMExZY0YyTXl3cDAxMS1BZDZmODNvblQtamJMcm8yeDZHSUh2Vm1n?oc=5"
    },
    {
      "title": "横手市上内町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcVhzRHB1dlY5UUlFNmg4dERIWHFsdkRTYXJEVHl6Y0d1TnhuWVJjSzdDaDh4YWszY2tqaWlZSlFLaXh0WUstdlJFMmFXZ3NkZEcyRTYyQWEzNzdSQkI1akJnTnI4WjdHQ0pUWGFLbUNkSW9jT3VjNlBCZEplMHBqNTVTTVJSZHFRa2stRXV0SERlM3B6N3R4MmJHV2XSAaIBQVVfeXFMTU5nZ3E2SWN6b2FHVy1JRFBjLU1GbXQ4eGFOVW42RXdZRUZIZ2ZHbk5zWWRmRTlid3dZS3g3czdpTFZiTnEya2V3eVJ2X1FXMThpN0lRTDc0cDFyUTVMRXJzNFU5ME01RFg1LTk1YnN4blRLVHFkODNnY0Q1amdOdEVJbHNnZVFQQWpzUWVNTGRnUXN6TE5DVUxRdzFReTlETENB?oc=5"
    },
    {
      "title": "中之条町入山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWVVROW82MS1UcTdEMDhMQVRXOGExMVc3WndfazJXeUFWWlotMG1hUTBRY0V4OTd0VzVNRGZPdjFUdE1jOV9TXzJUTnhKb0FyLV83NGR2X3NGYk9Na0RCQmxwVFAzQUJSSmlXRHJuaU5waWsxY004d3NtQjV6TjBtdzlQRmNveW52Q1pjcGlJNXpGMEFCZ2tNZkVyVDLSAaIBQVVfeXFMUEVJOHdfemtVMGxzY2N6WXp6Y3UtTTJVSWZnYnQwYUNSNXVEeE5aSnVLZDJWVlBmMW92TGtfUktxMzY1eXJCeFVYTHE2LXd5cUtmcS1nWW95clJxUkgwdGlzYmE3MkFLeXZRUy15eENnbmtQMXJqX2ZoU3h0dWMyMWVVd0I3dXhiSHFrenpMekNWMWhQdFE4a2w3OW1fYVl5S3Z3?oc=5"
    },
    {
      "title": "長岡町の山林でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBrU3BlVlM0VElVSUhoOTgwSUEzZEJNRjFHN0g2WWl2S2tSSmN1ZFZiMlVqYnpWX0pTdWFtMXd0VlpjRWROalE0TmhyaVRkUTlfVXh1dFlqT2labWs?oc=5"
    },
    {
      "title": "飯田市上郷黒田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOS2daUmtadk1VWG5HRWtMcG1WMlVjMFM2Nm1CcTZxOW96UUdFczRpVF9zTVh5WERvT0RrUUt5blFSR0xZNjI5U0pFd1lVOS1Dc0FKMl9jMlJSeWh2ckEtb2hwdWstTTAyTlFRMnJEOG5yTTRJOGh0bFZONS1ENUs2NFJEVkRvRWt4UnkwNnh3WFZGS1lhNkxHWFZmT07SAaIBQVVfeXFMTzgxNVpxbTZ6VHdrZnp4ZDFXOVNGM1ZxXzBFbmE1TEVoS0JxZFRXVmRITHh1QUstTGZJbG81RjhxV2VVdjdpS2U5QUlnaGNuNlh6S2ttRm5ycXFod1JWVDJwZnNOV2gySF83TlFDR3JGYmpFUGZsVE1rM0xXRVQtQ2xMVnpSWUtWcjNQY0RFbktpNjZOaWctdWdIb3lRTEY4b2NR?oc=5"
    },
    {
      "title": "上田市上塩尻でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOHdxWjRyLWt3azY2c0lGYzkwWmlOS2xXdzVGLXdWTV9OeVpuc2plSHJ3MU9zSHl3cEp6NEQyY1R4c2hKNGpvVW8wdWw1MFJsS29MYkpTdng5MUhHOFR2QmNSSDVKTGQ5S1h4ZFFqYnhUanlwbFkyakNRc0dzcHNsM3NtYzlSMUJjbDlWXzRyR0FuWldhdURBdGpBT1nSAaIBQVVfeXFMTkpGNEFjalV5RWFIQUFMaVc4N3VfTkVRd3JuV08zZk1NWTBuUGxoeDcwbG03cDBneENfTlBtelJsYjhscVItbGdmckFwdTdfbDJqSjVtOXVyMy1wVVhwalNVYmZmYXNpRmlWQkhCN1B0UVVBd3BGRzhRUTZDclhOdGpYcVhON1oya054SHpFVTBXZXNXOTViMTRhUUVTNzJ3RUdn?oc=5"
    },
    {
      "title": "黒部市荻生でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOVJ1Q1pLVXpwT3lxOW5JSl9ZZTBNZTVzMVl1YmpHaWlrbFZsQTEwNjdINXNYU1M2aXhpX213eHZxQ0wtcTNsTXV6b2RzT01JWnFFZEZlV3B1VHRiakg4ZUJSclVReFdWMmVlOGFIYVZnaElkZEgyLUktTF9DSGdXQ0N1cWU5bHZLU0IyUzJJZy1Vd1d6amhPb0FYeUTSAaIBQVVfeXFMTnJJb1dqWjRFV01yTTIyR2hkU2hWdC1SUkwwb3pnTHJVV21YWE1maWNkdWxLVld6d3dqTVY1M1AxVkZWVzQzbVlSa2N2dVM5WFBoZ19fMmxYUVJWY28tLWxVSEdrQ3QtdzlLSmMxUG40cTN4Ny1tOGhxV1lpUEdHdGxyc3FSNThyVWNlOGRydkYzTHI2d2VsMUVNbkpDYUpoOTZB?oc=5"
    },
    {
      "title": "南砺市成出でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUmttU2hCOWRYSFBWN0JoWFJmakhpUjdRMExlQ0hjODEwVWRBZVoxYndlZTlmSEQ3ZWgzbFB0c3dHVEhMV3AyOEd5S24yOGFLRVJhYlR2U2toa1dqN1M0Z1RUQktqdVdheGdfay05dFF5OU1HQTJvZ3EwT2tadV9VaGZCNUJ6SjdZMU9hZnduczUwUjNlX1pfTVltTmHSAaIBQVVfeXFMTk9NN1JicWx5VG00LXIxMENEOVVUcUJmWnN2MF9mdVFYNDYzQThpd2xHNTdqb1pCQ0hYOWNhTVd6RFItUHhpbEU1b0tXSHBHOUVhU0tOWVp3OGRxQ2VCdWQtb0dXbUREQkF6MDZ1MUx0U21ZTjcyczF2YXBMSW5KOHBGa0t1OU53alJ6WlBzQ09oNmc0YkZFOG85UTRzRU5Vc0NR?oc=5"
    },
    {
      "title": "越前町米ノでクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaHJYLXpmNFhDZTRYZXAtSy00S1N1QmU3OElzMTVubDV0YXFiZmpfMHN5LUV4dmdYVmk0eDhMcjhRZy1xUDNnaW10Z0dEdVA2RU9aNER5bnZzOHFwcjN3SVk1cEo0dmtJNDVsTjE4MUV3UkFZdExuemdBQnBfcHhLb2puVEF4NXJyZjFuc2NXNDI1Sk92bnRWcE54bjLSAaIBQVVfeXFMTndSNXdRRjVhVE9LUlgzampJeXZtLURMb1RsQVlmb3o3eDZGY3Fkc2Zpc0N6NWU4Q1JfV3VybW1sYWhCeGt3QW5Eby1Ra3ZsTmwxczUzQTNFMUROSEZlc0NTM0hZR1BNTnViMllKT1FzQVBVdjljck9ORndCYjNjc2xnMzVCSVNYckljOGxqS2FnM1pVNmpLOWZpWDZtMzhTR0xn?oc=5"
    },
    {
      "title": "高山市高根町小日和田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPQmlYUFlBbTFCZ3poRWxudUMwTU1XS0lhbFc1Qk83a0ZiamU3NFVBRUowQThMR2I4ZmU5V1pSbEdKYkVoOWNSOXZ5VEFVNll6cGNoZWtrcXhqYWR0bjdSNU9QQk12UXVrbzdaVnRYZTNIUHdnQjlsX0NZRHUxdTNNZFdvRS1FaHRHZGFUM2RmLTNtdWo5SnNEMVRuaGJqYUZzTzQtWF9EeXhQZUQtRnkwLURMdENXdElNQmlRd19iSTR0c002SEtHcE1EM2d6LUhCMEVfeVhURzcxUER2T21MOEVweXQxVS1jOFFDWFUxdmpzZ9IBogFBVV95cUxOWUNHNFJkSzNWQ3RWZDZqa2JsZjFQRkY2XzNseFdqOU9Pd25jcFhHRldyR1p4N1JHOThvNE1kaEl0QWRTRGVHZ19BUWlkLVRxV0dEdl80MGUtbllaNkIxeFZJc1NrZmNWM3duUTVDZm1oUFJTQ0FESWdFZ2cxNDZhbTFDRl83Z1AtODlZVjNuNGx4dGNEakh6QThMQ3Fpc1JHZUE?oc=5"
    },
    {
      "title": "新温泉町久斗山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSWF3VngtbXI1NjhZTU1UVmh6RU5QdU9HVVdXS055NkhyeE5nVlpQazlzRm1kNmRES29WNnhrcUpqb3B2THdERGJOYXRvb3NVNmt4NWNUWXlRMFZYYUpWRjA2SEpxZmZ0aHgxdzNKVi1ObTkzNVFzT2FGR01qVFRKVnNDS055UkJMSTljX05QZVVVNVZ4YWJuRDQ0Ti3SAaIBQVVfeXFMTnpVSzZheVJNcEtCbkpUaTBDeFZGUXg2QkJDeUVUbUxRTlNrUXRmNFNzWGUyQ3g5UWppajR2NXBrOFJLR1VORUpsOWx2Uk1zb3Y3aXFvb2ZQazNHTGJpVDk1MTdaQUhNc1JhWEMwYXV4MmdZcFYzVlVscFl5UXVIWHg2OTBKZ1VCMTJCZlVHNkVtdjMzX3RSNnlPeU1CU2lLWFJ3?oc=5"
    },
    {
      "title": "京丹後市網野町島津でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYTJzRkZOelhHRzJvUlZRWVZCNUpibk9qaDlqcHRsb09vOS1JdjlKMVBhUkpIT0RjWUdNSjBWNkdqUUx0R0VJVGpBemJUbGVTZVRsUElJSllFOE5mQ0N5N3VoRF9QTVhTWVFjZnVDQmJhUVpDaTVuTFZINGJKSk9PLTZYSFhxSnBTNUZ5cUx6d3ZJOW4wOWROSll5cWrSAaIBQVVfeXFMTTRjOEtsVXY1cms4cXAwMmFvLWJWeHNDcWJUSzZraUp5UFZSVVdPS3JzaWU5Mkh3X0pEVnZPamo2c0FlSjZTVHVWcEU0NHc5RWEyczBYQXhnVnBLbzBUbXhwVGNQZVpRZHhtc1I1NXNCRncxV1h5akstYlVtNktEZXNDRzRZWmdkTkNpeXY2cGtZdGhhUjZ1SFBCbUkyUGY1RXRn?oc=5"
    },
    {
      "title": "浜田市で幼獣一頭の目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5GTnJUWXV1QWRpT0RUM01fMTFiUGxlc1kxeGNjZmZCVkYtUXBWZUM2SWxkc0pxcmJPbW51djdsQnpuYUZlXzFMZVlJTVJ4QWRneVRxZDF4LU5jRE5UbGs0emdzSllLYVYtdDlxbHktNHJ6enFQQkhoSFdQa3FRY28?oc=5"
    },
    {
      "title": "益田市美都町笹倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWWttU1BGalliN0pjeE5EdEhwRlJBY04yQS1wVXpuMzhIT05sclpiS21OQ2hYeWVuV1MzbVM0SzRWUWZrYTlMa2xWUGZndjBpa3JBaVpheERuZmg0YW9qdS1BdUg3Vmc4QzZ6Y2FpZTY0WXVGNWsxTGJBVllIV2RnYzRvX3BRS20yaVNKNk5KNVdTV2VfazZXMWs2UXDSAaIBQVVfeXFMTVNpOTc5U3FmclhaYzhZUHR0elJsRjlVSE1NZS1zT3lobTl4S01Sa1pFQnZpT211MTRJdWF4cVZiZHU1aEdwN2p6OFJLcG96SGk5bGVVRWExM3A1VTNSMFl1UW5GYUw5TmZ3b213VXRUQ2tQOUxVUTk3S19sSFpleHFaOGNod0h0djJOLVNWZms2bkxaNGdNUXBYWENoNEp2TWpB?oc=5"
    },
    {
      "title": "益田市で1頭の目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5wZzZuLWVpZkxhYV91THZjSi1nSzVyM3NwUThROGFKSDIwdTZYWFdLY2xRMk9oaTV5RlpNY1J4TzBvSHF0ZzlOaGhvaHVoZDdrVTEzOUItOTBrWnFzZUM2dmdhZllkcndlZ1NaNjBvMWlobWplWW1KdDI5S0ExY0U?oc=5"
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
        <span>対象期間: 2026年6月5日</span>
        <span>·</span>
        <span>公開: 2026-06-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":34},{"pref":"北海道","count":16},{"pref":"福島県","count":14},{"pref":"島根県","count":6},{"pref":"富山県","count":5},{"pref":"石川県","count":4},{"pref":"新潟県","count":4},{"pref":"群馬県","count":3},{"pref":"岩手県","count":3},{"pref":"鳥取県","count":2},{"pref":"山梨県","count":2},{"pref":"三重県","count":1},{"pref":"栃木県","count":1},{"pref":"岡山県","count":1},{"pref":"長野県","count":1}]}
        total={97}
        periodLabel={"2026年6月5日"}
      />

      <p>2026年6月5日、KumaWatchが収集したデータによると、日本国内で確認されたクマの出没事案は合計50件に上った。幸いにも人身被害に関連するキーワードに一致する報告はなかった。情報の内訳は、報道機関からの情報（URL付き）が38件と大半を占め、その他は自治体等の情報源によるものであった。本レポートでは、これらのデータに基づき、当日の出没状況を地域別に分析し、リスク評価を行う。</p>
      <h2>主要事案の分析</h2>
      <p>当日報告された50件の事案において、人身被害、市街地など人口密集地での出没、あるいは緊急の銃猟対応といった、社会的に影響の大きいキーワードに合致する事案は確認されなかった。しかし、岩手県盛岡市ではクマによって小屋のガラス戸が損壊される物損被害が報告されており（※1）、人的被害には至らないものの、クマが建造物に直接的な被害を及ぼす事例が発生している点には注意が必要である。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道地方</h3>
      <p>北海道では計6件の出没が確認された。内訳は苫小牧市で2件（丸山、錦岡）、初山別村明里、三笠市美園町、知内町湯ノ里などである（※2, ※3, ※4, ※5）。道南から道北まで広範囲にわたっており、特定の地域に集中しているわけではない。いずれも山林に隣接した地域での目撃情報であり、恒常的な生息域での活動の一環とみられる。</p>
      <h3>東北地方</h3>
      <p>東北地方は、福島県6件、宮城県3件、青森県3件、岩手県2件、秋田県1件と、合計15件の出没が報告され、全国的に見ても活動が活発な地域であった。</p>
      <p>福島県では郡山市、須賀川市、いわき市、猪苗代町、柳津町と、県内の中通りから会津地方にかけて広範囲で目撃情報が寄せられた（※6, ※7, ※8）。宮城県では仙台市青葉区上愛子（※9）、松島町高城（※10）、大崎市松山で出没が確認されており、都市部の近郊までクマが接近している状況がうかがえる。青森県でも、おいらせ町、五戸町、青森市と3市町で出没が報告された（※11）。前述の物損被害に加え、岩手県釜石市（※12）や秋田県横手市（※13）でも目撃されている。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県で3件、栃木県で2件の出没が確認された。群馬県では中之条町入山で2件の報告があり、うち1件は成獣とされている（※14）。東吾妻町でも集会所付近での目撃があった。栃木県では宇都宮市長岡町の山林で目撃されている（※15）。いずれも山間部およびその周辺での事案である。</p>
      <h3>中部地方</h3>
      <p>中部地方は長野県6件、富山県5件、新潟県4件、岐阜県1件、福井県1件と、合計17件の報告があり、この日最も出没が集中した地域となった。</p>
      <p>長野県では飯田市、上田市、東御市、佐久市、大町市と、県内各地で出没が相次いだ（※16, ※17）。富山県では黒部市、南砺市、富山市で目撃や「クマらしきもの」の報告、砺波市では足跡の発見など、直接の目撃以外の痕跡情報も含まれる（※18, ※19）。新潟県では上越市、長岡市、糸魚川市、見附市で出没が報告され、運転中の目撃や田んぼでの痕跡発見など、生活圏に近い場所での確認が目立つ。その他、福井県越前町（※20）、岐阜県高山市（※21）でも出没が確認されている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では兵庫県新温泉町久斗山（※22）、京都府京丹後市網野町（※23）で各1件の出没があった。中国地方では島根県で4件の情報が確認された。特筆すべきは、浜田市（※24）および雲南市で「幼獣」の目撃情報が報告されている点である。益田市でも2件の報告があり（※25, ※26）、幼獣が目撃される場合、付近に母グマがいる可能性が極めて高く、遭遇時のリスクは非常に高まるため、厳重な警戒が必要である。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>季節要因として、6月はクマの繁殖期にあたり、特に雄グマの行動圏が拡大する時期である。また、春に出産した母グマが子グマを連れて活動を開始する時期でもあり、実際に島根県で複数の幼獣の目撃が報告されたことは、この季節的特徴を裏付けている。子連れの母グマは防衛本能が強く、人間に対して攻撃的になる可能性が高いため、特に注意を要する。</p>
      <p>餌資源との関連では、この時期は山菜などの春の餌が減少し、夏のベリー類が実るまでの食料の端境期にあたる。餌を求めてクマが人里近くまで行動範囲を広げる可能性があり、新潟県長岡市で田んぼの痕跡が発見されたように、農地が採餌場所となることも考えられる。</p>
      <p>人口圏への接近度については、明確な「都市部」での出没はなかったものの、宮城県仙台市青葉区や栃木県宇都宮市、新潟県見附市など、市街地に隣接する地域での目撃が確認された。道路上での目撃も複数あり、車両との衝突事故のリスクも潜在している。これらの情報は、クマの生息域と人間の生活圏が密接していることを示している。</p>
      <p>総括として、2026年6月5日は全国的にクマの活動が活発であり、特に北海道、東北、中部の山間部を持つ県で出没が多発した。人身被害という最悪の事態には至っていないが、物損被害や幼獣の目撃、生活圏への接近など、潜在的なリスクは高い状態にあると言える。今後、夏に向けてレジャー等で山に入る機会が増えることから、地域住民および訪問者は、クマに関する最新の情報を確認し、遭遇を避けるための対策を徹底する必要がある。</p>

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
          <dd>2026年6月5日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-06</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-06</dd>
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
