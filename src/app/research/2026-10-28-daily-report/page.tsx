// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月28日 / mode: daily-report / 生成日: 2026-10-29
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-28-daily-report";
const TITLE = "2026年10月28日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月28日に全国で収集されたクマ関連事案は計27件であった。当日は人身被害の報告は確認されなかったものの、北海道登別市における市街地近接での目撃や、広島県広島市安佐北区での捕獲・殺処分事案が記録された。福井県（6件）や北海道（4件）をはじめ、近畿・中部・中国地方など広範囲で出没が確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-29",
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
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
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
      "title": "市街地近くでクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFAxRjU1TEdwV1lrbjBZVXRjek5VdG51S1RDOFBoUEtvZE1PTWlkcUhSRng2dTZBN09oMHFBVVFvZ2M5czFIQTVFNmUtaEd6cVhHMk1GYm5PejNvUQ?oc=5",
      "site": "news"
    },
    {
      "title": "安佐北区で捕獲されたクマを殺処分",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNSmdieEs0V3g3MnlMclBhSVFSSDFVOEFSNnJHeWhfV2pnSGtONmVnZHREOXpmVWpsa1lzcjZ1UzJhSWVUX2M4X3p0UnlfME92NF9JY1dzZzdfWVBlaVZFS0FJdGNTUkJTRUlKWjc2SGlsWUVnLXpjcV9NS1JFcmk2RtIBgAFBVV95cUxNSmdieEs0V3g3MnlMclBhSVFSSDFVOEFSNnJHeWhfV2pnSGtONmVnZHREOXpmVWpsa1lzcjZ1UzJhSWVUX2M4X3p0UnlfME92NF9JY1dzZzdfWVBlaVZFS0FJdGNTUkJTRUlKWjc2SGlsWUVnLXpjcV9NS1JFcmk2Rg?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（島根県大田市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPODJKT0FVV1gwY2tzV0xYWXJuN3RxMC1wdzJLSUJMbkVpUUpSMzJaa0RqVndXUkVSYnhDdHA1MWJ1VmdEM3RibVMzRkkwN1E4WDJtdW9LVWVMcmdFcy1ma012dUt1R0huX2tYY0VmN2tvZk1lUlNuQXhISGYzM2xSVWhYQ1RHUFNHbjBXbEF1dm5JaWNYX0Q4eHhjYkVKVHZ1LWRyTXhwSjhVUzFGTnI2LUlaR2pXQlM4WW5rSFF0TU1tWWxZamFKajQxUTBzSHdtWWxRQXplQ1N2bFdzZ2N0Q1dsUms5R29WaktYN2FNSFo5Z9IBogFBVV95cUxPNTNYY042X3NDR0NjdjdpOXdEdzV3bmtNc3JnYTRhb1pCeUdHVXFzemlNNE5xekJjQkdQdUh0VnJ4OXVNbXc3cDlrV2d3eWVqc05nbVo4c1FHZk1oZDVFMWN2VHVFZDU5Zm9vc3F1aFkxa3hOZ25rNUVLenhlUkxmNkVlOGJ4bkQxUS1PS3F0NlVkaFYwTklSUlR2MlNaUmdnSkE?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（北海道歌志内市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUnJvcnFVWkppUDQ5Q01wcmlsMUNWSWdGektjQ0ZWU3lxcFBmSW5HN0NQVjhuRlpBTklXcy03ZTZzUExGRDBRLXhqYjNhaHl6R3hZa21lQnNOS0pMMFdwLTRCdlJEX2NaWVhLT0tFTkxZNTF2NjZhOGZrRFlINkJVQTRrOXVENGN4TXgwTHRPWmVrRUJ6QU1lX185c1LSAaIBQVVfeXFMTmlIc0wwWTdLOHhuaTJMMm9jNnVOZVRJVXJ4S2ltT0xEaFJORkQ0bGk5RDJManR0UFlpQk5ZVEV1c29xWHQxRlN0OTVSOWpINkkxLU81VGl3ZWVOZUUwRnB6clhqdUcwbk1sNWd6VEpkQUd5cWVNY0N6djc4bWV4WU9la2twZUg0N21PN2pjYU9LaVN3TlZtLXloTEJHcGRzWjRR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没の可能性（北海道登別市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQ0dyYVlGbllZaWthdF9Ca0FxWHdwSjhiOGgydElBSTduclVLQm0tQ2ZoZHNNdlozT1hPcGw2Z2k3X1pZdUQxbDR6bDVPMVJLazMyUUR6aUFuNGh3ZmVtTjFpdGV4T3dqWFV2VFQ5SXFoQmRPQ0hLSFhUekYxOG9qdVhxR2JtU29TR3RkUzNMcjgyOFVnd0E3TXFaMkbSAaIBQVVfeXFMTl8tcWNXQzl0Q3Vhekg3NGY4aFQxaUVfanNxVjlCQlFOTHo4TXpvRk5yVjUzSTF2bzZ2M200QVhPTUpJTkhoWHc3cDM1SVZPTFN6RnhyWS1XeFltazdTR2g1YWRCOE1DNTZZYkZnYVQ1MHBnRUR5ai1WSmFkcFZFMF9XX2NKelktX2tRYlZndUxRUFdoNTFFZ1FkZzdlcUEyUXdn?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（福井県小浜市尾崎）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNenBkZi1YcTEwaTNIenZxTDJwT3kzb1BnZzMtRF9hQkNyNXcwdW5oUmZUdURmSkpfN09jVkxhc29hdkN6ZGl0b0M4ZDRvMWtvSnFrbmV1R3FmZFBDbHR1d0Z4ajFkUEVIbnZXeHRQQ0V2SGxOSW5IbHVqbl8zbDZWRFVDLURKSklkMEhnbzRjTjg4MGpmVHBqN25EZWTSAaIBQVVfeXFMTlQ5UkdlWXlnQjN5UW4wYUw5NkVkcEc3MVRaRDd4M3lTZGxZelE3ck0xcW9Xd2NxNUdvSnBZamtMVDhMZ1UxRWVGakw0RTA0T3ZKMEdhNGoxcFRaVGgwQ0VsYk1JV2RPVzB6U0RTOVJjdnk5YUVzRzVJZUVzbWtxS2wwUmNvUWZ2Yzk1TWNLdDRNVU4wUHFqUU1WclZrYnJtMnF3?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（福井県小浜市須縄）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ3h0Tk9tMUg4NS0yWHNSRzJKN1ozYnE3SEgwLUZ4U0Q2T1hTTUxZR050eTlQenhlWHVDSklhTmRrUHBhNjAybU95cTZYODROQTJDVTVnZENKUjR4U0FUVFNnLUdFb1BIbDc3SU16M3RnczAySVRBUjh0UUkzU2NfeDB0NEtxRG9xZHEtRTlqQ010TnVybUxsOWUxNnTSAaIBQVVfeXFMUEFreE1ZTEVoRW1EMnc2VEt4RWJUSFpQem44Q24tWndjWDhaVHg2T0E3V1pCb3ltOVBQNjhkSzhaUUxUbUxBOEhkSWxsU0p1d3p3QXA0aHZGMXpqNHZEU1gxX2w0clg2S0xaWXRJV3ZaVzZmQ2pVbzVoS0Z4bXM2Y1JRaWs1V1d4SEJxRTlBbUpsQmhFVlJ2V0xKcVRHQ21BQUt3?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（京都府綾部市）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPU1E1dEVmT3dxR0dfc2tVUDM0Q0VuWUFkXzVYWW1PUWMxakdOYWxjcFlaa3N2U2xaSjdDRnJZNk44c21DU0ZHdUh2QlRMZUFYWDZVeld2VURBVXV5WndCY0l4ZzhrT3BudjEzcjJhUEhxODlMMWF2ejcwQ0FzYWtpMXBPRmZORUVWVXA4S1FxMzVZX3NYNm9hLUVNSS1CQTRxdEg1am9EaGVkd042QURj0gGiAUFVX3lxTE1lU0dxWUowVjJsSWFXZjBaSXp2NkJ1cWNxNDRuUjNEbnJ2bHBqYS1KS1pNQVNSSER5UFJOeFdrbzNfOWJfLUF1aXFoOEMwRG5IV1d2R3lVVkpoYTlxSXpqU3JQTnJvWFdqVVdyTGFTTUJzemhKU29XRG1WbmZBUmlJd21IMmpMMEtmS2QwWkJGUGlLZlNQWmZzMDRBUjhSUTR4QQ?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（京都府南丹市美山町内久保）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRnpLUlhSdkY5MFEtTnJ2NTRZYXpIX2h0VVBKVllwakFSOVZhZnotNEl3cEgwLXlGS1E0dGNobU5Mb19CclNIRlhvS1piN0tmaUtQV0tqUERhRVdidlhtNlJHdnpUS19oTDFWWVhYV29xdnI2Q05HZTNFMENhT3plbm83R1VHenV0MmxOX0R1U1lNdzBMLTc3WXptTUbSAaIBQVVfeXFMTVFDNy10bEdBS0J6MnhwMFhNU01XV3hVdzJRWi1XLWhDR2dOOEt5MG9iTGdfUXJJNkc3cUxZZU01OFJWemhnUWVmREV3Tk05V01nRjlkZDdGeGlVQWFGZWcwdGc5SzdXTWdRRG9qWnJDMm16aUFBanBSUVNZS0FFaEpQR3hnNE0zMlgxY2hJeHBLNTFtWXJzQVBwZk5Kc0JoZzF3?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（京都府南丹市美山町鶴ケ岡）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOVpkekFPUzBaenZjaGVxQ2kxYWw2SkdjTlhjbTBzbVFDeWRIVGRwZG02UTBGNkRhbTdzbTZEcGF3MVk4MkxpMFA3anFId09UVUc5bVpQR3MySS1KYzFNRjA0NjVLcWRsLU92djJfSjlSaVFROVVmRndwY0tuME8tQTMtZ1FiNlBJVFVpMjZTX3hMT2pFbjJ3VEpwUmfSAaIBQVVfeXFMUEV6bkdKdmxWV2dfOTlWTDVGOEx5cHJzcXI2U2cxQWRfQWlQaW8xbE1UNGVJLVRheFZIbGVrNzNUM0ZYVURSOWRfN3l4TGZCeXRMRExhdklpUzRIRkVObmJlOTNtMm9HMmM2VVlZYVhxWjVycFhldS0ybXp2cWwyLXpEYTFEV3ROdEZ5OG1nNmlUT2lZN3RQcGNYbjNBMUJsUk1n?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（秋田県秋田市手形大沢）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQZFFadllUVkhwb3l6VldZbEtQOF9xeXdMQlhfc2gzMkt1MmFYTURPQkU0UXctcUpnaDVEUU5iZmZibVBKSGFzM3dvVWZKTDJocEZIaXFlTS1XS1BKNDVUaFJFZjZEb3VhZDh4VTdDbXBUZVBUOS1sdHpDRUdFT3NXU0loTWRXdExoSGJ6ODZYMFlmT1VKR2c4MDJVcnMtRllTWkJ6TFUyRXljQXIyUkFz0gGiAUFVX3lxTE54S2Y5UWhpZ2ZBQ3FhZUdHOHJLY1Utd1V1S2N3U2JnenVvMzJBNHVQYy1WbTVSSUpEcnJLYzFxVkxJSzgyWU5DZWxDMDRJLWlraXdFc29RRVkydU1XMGc0LWFJN0I2dmMxSHdDcnk3Wjh5eG54VGlqRHBhY3BKUTJydlZzQUF3VXFkMmpCR1VJQ2RGeGFNRXBCT3hJMDhnUUxKUQ?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（山梨県上野原市鶴島）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbXdfekZsQXcwTDBXeGtiVkMzVVpJQ080XzhDTFZadTFPaUJPbVVqTkh5YmFXMEhmS0VFeWdOSnU5bnpfTVM3c2YwZll2X0pjSVlUeEZMQnJpYzZUYlJqYTVhZjhwX2diSGZESnE2OTh3QWt3TlA5RGNjZXd2WFpBejI5MkNDVTdsZUNTaVh6UXNjc2psemFJZ1BvMkvSAaIBQVVfeXFMT2ZiUHNpUlRqbUVteElkMEN4OGtzNGpxZEVzTGRqRTJaR244UWU1Z3oydXEwdi1IdXVPVmtnUWQ4eU40SEVnRDc0Y3dVRzZHaldWcEhPQnNrQzhrd1FWX3I1N0pYbEFhcloxYU5GX0x5ekY0RHVpVmZyZy1FaWZYVUQ2WDZlbUhDcUFmbUF0SXo3UTI4STA0RndyV2xUbThPNkhR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（山梨県富士吉田市新屋）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRXZkVnUyMllQeFNPdWVhU0xPUG1FS2IxM3NzX3ZOQnpXd0tNSTFVZmUtZXFwQ1p3eWxaY1p5MnRuY1MzX1Jyb3hZS1JVNVQ4dVo5QWVjWmZxaExCbHktVU9oVVlYa1ZjZ3kzMXJNOEVZMVUtNnZnSDhiLXY5ejR4M1JMaHFLSGpqRlAyTGhVS1FwZm8weXlLVm82ZUnSAaIBQVVfeXFMT0tJczdpaktYaGJiaUpneE96V0J3NEk5MEdKRERQUmRTZW5oN1Foa3ZyM2lHYlpFdkJldzkxZzkzc1BvbWpFOUhad1NZYWZnVFo1cFBSS1JHUkNITGVfVVpxZkpBLW1qZ1B4anZubXpObG9OWEFQeXpIOVpWVjFBVVBndDJVT2l4OExncHdEcko4Y3Zlb0VBaUhhZ1FrbzFRZktB?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（山梨県大月市梁川町塩瀬）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOVW1HVS1Fd2o1UUJoMGZZSHJiWnhsVjZVMzZXVVZ1UFo4V1ZnYm85YUNOTjZkRndJYmNnZDRuajJ1dzF5bW5tUVVUaV9YZFI0b2RMZ0c0RVNvT1R6WkY5alBCNXY0VDdhS2FzQ2NGZW9fOS11aUI4MjN5T0NyR3poT1UxX3FQczlMU2c3WWNfaUlaUWVJajU4THI4ckRIc251Y05NWXhfTTQ3NEd2aGVlNFZ4VHFHRk5abmVGZ3BOM1R4dWZDYjR5OWZLenozWklNNkVKS2ltS2dVenBqZXkzS0tINXBNNXRscFI1OFk5anl5UdIBogFBVV95cUxORmtBazV3V3pzMlhkQTVKQ3NzcEI1WUwyQ0VoMWRXU1FURjVkVzNjb2lpQnVuVE4zUHlQWU9zRFU5VDFTMFRGY3FYYjBja1NGNjdtWnlLZHl1amxoWGFUdFpzMWwzd2JKUzlJb3JiaU9WQmJ5Rk9FSGdTSU9xTUtLMHRRNlAyWEZ0LTZ4X01uVXZyaWdaODN1V1V2Vk54alNpR1E?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（青森県五戸町切谷内小渡）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc25DTmowUnV2a0RWekJCQzBaSkt1bXJwX0tOSFMxZGhHN2x0RjNjaTVsaXVxMXpPdjRPTHdGNmJrWmRaM1ZOWHg5TkVaTV9QNUVxaDJQbGZkVm9nejVPZjBQeDlyRDVYSm1WbmhDc1YzSllLLW5HVi1xMFNGbXVZUTZSQTlQTnYyeTY3a2xlT2l2YURtUEtrMk9nUWjSAaIBQVVfeXFMUDI5WVYwa3c3NktJNEVZeDlBTW0tbm1oVGVadkFlNEFUWklHZ2dEdlNnWlcwbzdpLUJmTVhDOFhrejhBRzhIdDNTdnZqVS1JRnkzYVBJYnB2ajhPbm55b2hUbkhVaC10SXlicThnNURwdDMwbHFIWGFnTEtlZThiaXVnVDhFUUdlQ296dnljZVRDbVFKc0daUU5XSGM0emxKdXdn?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（兵庫県新温泉町多子）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaWIyLUZIUXN3aVc0ZzNTbHZjWDBrZENYTERPRTdiamZaY01qcUFoVEVYakthYnJTV1NwSWM3TVM4V1RXdEF4Y1JJdlUtc1VPSlVjcWJFdW40RUVOM2NZZ2drY0YyeUozT05TenBzMzhja0hnWXJWMUJaTmlxWUd2LVdrQVhiRVM5Y2VUdk1qLU5oaGpyNXlpaV9VNlTSAaIBQVVfeXFMTTRpcGNteGpETE1MQnFja3VhYWYyTFVqN2VMVFFKVVFhZnhuQ0Vlc2NBTC1iNXRqeGRpSVBNZS1aNF9LbnpSbnpVc2tpUEZlRm11V3FjaG00QjlwVV9CWjdvd29HQkFQZ1FRR0VBUjlmNnVHUWxfZ1pnUkZnTHF4bEVGU2hFb2RpTGM0ZHM1TXExRndaaURKcEFPeENaT09ORE13?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（兵庫県豊岡市加陽）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRG9GcUJYczRlT0hKdXZZeFcxbVkzaHpoY0NUZVhnRV9rSW51MllxYUh3V0ZQNzVkX1Z4Wjk1bnJ2N2RWX2dJc2FiaU9aeEt6b0FGYVRfOU92UWlGQmM4TTlpR1NTU290WWJxdVA2OGtSUGhZV0RHR055Ym9Hb3Y2VHl3YWZjZk4yMm1VQnptN3lXVW5paXJQWmd6TEvSAaIBQVVfeXFMT0JlbzY1bHUzb1AxWmlrTFBJZVFsNW5MS3BNblA4b2Zfd2oyeTBfbFdfUWtvOVJJcjBIbWN3Z3BtSm1jSEV1NlVsQ3QybFhJY3RiM0EzcmdOUzM0UHdsXzhGU2hJV2F6cXhHSGhGcFhJX0lVMWJHV1NUV0RhS0FQTUF6c2JObVFKRlkxVFNQN1RocXBCbTNlSmVGR3NtblA1R1RR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（兵庫県養父市大屋町樽見）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNjBIWnZRR01MMDFJRFMzX24zVDFlNlhrWHU4Y1ZGNGpDUjVtUFJITHRKS1hFbVNHVkZHbF90YWgxcm9vemQ5YXhROUJCNGlocVgxbWg4R0t5OFJCdkl3MjFZZGUwMWFaZExHR09fWG9DUzV2U0t2XzBrOWhnSWRuOWZFck9GWmNWZ21HVGJySkRzOTZIV0xxLTVUckPSAaIBQVVfeXFMUGR4dk1HNHhVb250RzV2MU5UOFd1R1Etd0VGTFV2RnR0eVhSV1BuMUNtSmVHUGRxcnVoMldUcVBkRXpLUlA0M1ZBTmhKN2NFQlYzRktVeGtSVG1rWW9KRFJpLTFDSDgxTXotUDl4ZDBjR1ZRR09fdW91dHhSWVhyWHU3ZW9XOVV3VjRXSDdWNU8tZnZJM0x5RF9ib2tPMTNqeFRR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没の可能性（愛知県設楽町津具泥沢）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVERGOW1MRWEtTmlLZ1N4YVZKWDBnS0ViTER1TmVhZko3bXNybEp5YkV3LV9tVTFnVHlVaEFOLUQ3MHBSM3BZMFpjMlgzWUEtVUVkMkFTczlyczdESEZ6QW4zV0ppWVJwbDBzR0R4bl9qYTRKcU12bm00RVRNMjJSUnR5ODZOSmRzLVlVQW5iUzYydVgwLTJ2MmtUX1jSAaIBQVVfeXFMT0d1Ri1kUUdNem5uVWtqd2IwWUo1anpDYV9hVmlXSk42VlJuTkVKeUJubTZUcFV5RlA1SU1nQ21qbUtrdnREWTlzRTZreXNQVldJaVpKcDBuX21UeVNvMWthWlBzRnF1Y1g5TGRDSGRKNWVDY0tFc0hXdXpnR3BoU1k3NzZ3TE1jYTBReWVVZnJGeWJ4OWlEYktyNDFlSHZhMUlR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（群馬県沼田市白沢町平出）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNmJhODBScDhFTC04cEdnX3BkUVctMW5JVklJN19CeW1TNllIMVo1eGprRTd2NV9XTzlfeVF4NXFLMGhWY3JYOVRQMmowaEZfMjlMQklVa0FtSkM2UmJTRGtBbHQtWFM0SmdTb2hNTnJWcjM3RGo1X2pHQ3lMYUZreDZRNld6UDQ0aUQ2bDhfLTVHeWJrVWoyLW5tNknSAaIBQVVfeXFMTnJVX1RycmlYYXBZUWlHMXVFdTJodHF0ZUo1S0xtOUFGUVI3R1g2UjRBanNydU5pR29ta0FQa05nQk9UOEJxTE9oelBDTG1GUFFOcFZyeFFBTmdSRlZfVUVwMkdSSjlPNms2bEtkVWpMQXh1MTBfd1VDNTJzM0ZDTUlwNXhBLTVmQlN0STNxOWNJbU1Hck94Y0dpeUUyMVV2T19n?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"福井県","count":6},{"pref":"北海道","count":4},{"pref":"京都府","count":3},{"pref":"山梨県","count":3},{"pref":"兵庫県","count":3},{"pref":"島根県","count":2},{"pref":"神奈川県","count":1},{"pref":"秋田県","count":1},{"pref":"青森県","count":1},{"pref":"愛知県","count":1},{"pref":"群馬県","count":1},{"pref":"広島県","count":1}];

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
        <span>対象期間: 2026年10月28日</span>
        <span>·</span>
        <span>公開: 2026-10-29</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={27}
        periodLabel={"2026年10月28日"}
      />

      <h2>当日の主要事案：市街地近接出没および捕獲・殺処分の動向</h2>
      <p>2026年10月28日の集計データにおいて、人身被害キーワードに合致する事案は0件であった。しかしながら、都市部・市街地周辺への接近や、生活環境防除に関わる重要事案が記録されている。</p>
      <p>北海道登別市の胆振幌別川付近では、市街地近くでのクマ目撃情報が報告された（※1）。河川沿いは山林から居住区を結ぶ移動ルートとなりやすく、住民生活圏への侵入リスクを高める事象として注視される。また、登別市内では新川町3丁目においてもクマ出没の可能性が報じられており（※5）、同一地域周辺で複数回の兆候が確認されている。</p>
      <p>一方、中国地方の広島県広島市安佐北区においては、捕獲されたクマを殺処分した事案が報道された（※2）。同区における捕獲・銃猟キーワード一致事案であり、個体管理および危険排除のための具体的な対応が実施された事例となっている。</p>
      <h2>全国出没状況の地域別分析</h2>
      <p>本日の総報告件数は27件であり、都道府県別では福井県が6件と最多で、次いで北海道が4件、京都府・山梨県・兵庫県が各3件、島根県が2件、秋田県・青森県・神奈川県・愛知県などが各1件であった。情報ソースの内訳は報道由来（news）が20件、自治体等のオープンデータ（fukui 4件、shimane 1件、hokkaido 1件、kanagawa 1件）が7件となっている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">該当都道府県</th>
              <th className="px-3 py-2">件数（代表サンプル記載分等）</th>
              <th className="px-3 py-2">主な発生地点・傾向</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">登別市（胆振幌別川、新川町）、歌志内市、士別市での目撃および足跡痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県、秋田県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">五戸町切谷内、秋田市手形大沢での出没報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県、神奈川県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">沼田市白沢町での報道、松田町寄での山中目撃情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県、山梨県、愛知県</td><td className="px-3 py-2 text-xs">10件</td><td className="px-3 py-2 text-xs">福井県小浜市・若狭町での親子熊目撃、山梨県上野原市・富士吉田市・大月市、愛知県設楽町</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都府、兵庫県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">京都府綾部市・南丹市、兵庫県新温泉町・豊岡市・養父市での出没報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">広島県、島根県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">広島市安佐北区での捕獲殺処分、島根県大田市長久町での市道横断目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道ブロック</h3>
      <p>北海道では計4件の事案が確認された。登別市では胆振幌別川の市街地近接エリアでの目撃（※1）および新川町3丁目における出没の可能性（※5）が報じられた。歌志内市神威美山町でも出没が報道されている（※4）。さらに自治体情報として士別市川西町3033番地付近において、7時10分にクマの足跡が確認された記録がある。市街地近接から河川敷、農山村地域まで多様な環境で痕跡や目撃が確認された。</p>
      <h3>東北ブロック</h3>
      <p>東北地方では秋田県秋田市手形大沢（※11）および青森県五戸町切谷内小渡（※15）においてそれぞれ1件の出没が報道された。いずれも人身被害は伴っていないものの、地域住民への警戒喚起を要する出没事例である。</p>
      <h3>関東ブロック</h3>
      <p>関東地方では、群馬県沼田市白沢町平出での出没が報道された（※20）。また神奈川県の公式情報として、足柄上郡松田町寄の山中において15時頃にクマ1頭の目撃情報が記録されている。山林域を中心とした生息圏内での確認が主体となっている。</p>
      <h3>中部ブロック</h3>
      <p>中部地方は全体で最も報告が集中した地域であり、福井県で6件、山梨県で3件、愛知県で1件が記録されている。</p>
      <p>福井県では、小浜市尾崎において14:00に成獣1頭・幼獣1頭、16:50に成獣1頭・幼獣2頭の目撃が自治体データに記録されており、同地区で同日に複数回の親子熊の徘徊が捉えられている。さらに若狭町天徳寺でも15:00に成獣1頭・幼獣1頭の目撃があった。また小浜市須縄（※7）や尾崎（※6）での出没が報道でも取り上げられている。</p>
      <p>山梨県では、上野原市鶴島（※12）、富士吉田市新屋（※13）、大月市梁川町塩瀬（※14）と、JR沿線や主要道路が通る谷筋・盆地周縁の自治体で出没報道が相次いだ。愛知県では北設楽郡設楽町津具泥沢において出没の可能性が報じられている（※19）。</p>
      <h3>近畿ブロック</h3>
      <p>近畿地方では京都府で3件、兵庫県で3件の出没が報告された。京都府では綾部市青野町出口（※8）のほか、南丹市美山町内久保（※9）および美山町鶴ケ岡（※10）と美山町地域に集中している。兵庫県では但馬地域に位置する新温泉町多子（※16）、豊岡市加陽（※17）、養父市大屋町樽見（※18）において相次いで出没が確認された。</p>
      <h3>中国・四国・九州ブロック</h3>
      <p>中国地方では島根県で2件、広島県で1件が記録された（四国・九州地方の報告は0件）。島根県大田市長久町土江では報道による出没情報（※3）に加え、自治体情報として午後2時半頃に市道稲用線付近を横断する体長約1メートルのクマ1頭の具体的な目撃が記録された。広島県では前述の通り広島市安佐北区で捕獲個体の殺処分が実施されている（※2）。</p>
      <h2>リスク評価</h2>
      <p>2026年10月28日の記録に基づき、以下の3つの観点から出没リスクを評価する。</p>
      <ul>
        <li>時間帯および個体属性の傾向：福井県小浜市や若狭町の記録では、14時〜16時50分の午後の時間帯に成獣と幼獣を伴う親子の目撃が連続して記録されている。子連れの個体は警戒心が高く、接近時の突発的な事故リスクをはらんでいる。</li>
        <li>河川・市道等の移動導線と人口圏接近度：北海道登別市の胆振幌別川周辺での市街地近接目撃や、島根県大田市における市道横断事案など、道路や河川周辺での目撃が複数報告されている。線状の地形やインフラを利用して人里近くへ到達している可能性が示唆される。</li>
        <li>対応措置と継続的警戒：広島県広島市安佐北区において捕獲個体の殺処分が行われたように、生活圏周辺での個体排除が実施されている地域がある一方、各地で同日内に同一地区での連続目撃（福井県小浜市尾崎など）が確認されている。出没が報じられた地点周辺では、依然として遭遇リスクが存在するため継続的な注意が求められる。</li>
      </ul>

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
          <dd>2026年10月28日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-29</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-29</dd>
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
