// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月24日 / mode: daily-report / 生成日: 2026-09-25
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-24-daily-report";
const TITLE = "2026年9月24日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月24日のクマ関連事案は全国で総計90件が記録された。富山県南砺市の大門山登山道付近では成獣による人身被害が確認されたほか、宮城県、北海道、山口県などで二桁の事案が確認され、学校周辺や集落など生活圏への接近事例も報告された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-25",
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
  datePublished: "2026-09-25",
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
      "title": "2026年9月24日 富山県南砺市 大門山登山道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1SOExlUjB3UGE5NGlDeThfX2RyRUVQbTZ2NmVXUnpUY2dsSEg2eEZfQ2l0Mk1NWU9LLVZPX0NUal9heVhfWHpSaGpLb20tcFZRcUw2LV83dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 富山県南砺市 ブナオ峠の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 山形県山形市 住宅地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9BZEpjeEdIYTVhQjRQVkxMRWU2bnhFX1lrTnZXek0wc0kyY21DVVhvSVpibG52eTBXZTU0eUVyVW9TZVRKdm5vSnFsNnhYZDR0LTdZWGM1alZPQWtMRHRQV0lCMnE0Y0tPTnVYYlp4M0thY09LaDB5dnRzWjh6WWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 岩手県釜石市 小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5UdDNZVE12bkpOVXgwMHFTeWluVUdhb1cxS0tEQ0hhSllZM0k5R0lqSFdFNFh0ckprWWh6RU5mSUxYVTRwTk9RVlhDVkFudmdYNjRSd0NzbVBETUpXazNfdQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 青森県五戸町 三戸郡五戸町豊間内１−１０５９の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 宮城県塩釜市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQX0tBOEZkMUtQT0hfRUoyLUtPYk9QNkZCYXR4MXlpVnZiVE9qLXNzT3hYLVltczMyYmxERkVhWXVyUFprTlhwSDEyMm5oVnlxT21XODlxb0FKcXMxbFA3YmlwTGU2bm5JUTFTeWdxVHA1ZzRhS0hQVUowbzZxUTcyQmZXMVZCZUlseEdvYTU4Z1A5TTN0U3M0b0tVOHhkRGhQWUttVm1RTUpOcUFkbXdFcXg2a2ZwLXM3WEtGOTlpeTBlQWs0QTh4eDlDUmVicnhRRWs0RdIBhAFBVV95cUxPNWxnbktwQ2g2WkJ1ZF9yWE82eW40N2VnSE5hMFZTdUF1eHVrNHlqclA2ZjlNOGh0RVpWdUsxbGJmWlRDdmhlbHgxX3VTMzJJM01FQ0hYU3dKUGRGeWowemhoNDRTamxPdHEyZ2lEaFg2Y2dQcVdYLTdTSnhtNEJPZVVFSDY?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 北海道日高町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPRGk4dTl6enVzeklDRVlmbWctZm16aWdpRjg4VzV6akdLa2FsTC1JdnpsRktjYmRjSHdFWExfVVRrU2VWSllxR0Jna0lNOGpQOU9lYXMtYlJ6Uk5rUEFzTXRud0MyZTd1V0hHVndZdXhacy1WT3RmT2pvblZEWUpYMWJSQjFqZll1alVhWmFORVF6cTYxZlNuQ0Rra3VWYmp2ZlRtWnp4cmhSWVRGU2pCWVk3UnhqY0p5bVdVSWVXaDYwWVh30gF0QVVfeXFMTWNVeVRtUzBHWWd2Z2hTaXVMUzAtcjA3eF9mZzRSUFBReC16Rk5qZVd3MkVpVWxDQWp5dEdEYUpHVjVYbWFIYVdLMXVFZnlsVElVQmRTMUdrVDk2SVdwX0VlOVU3Y3VvMXBxek1pOERmeU1KMV8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 北海道湧別町 東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9Lb01jNEdPeEs4ZjNCekVORVZDNllrc1VadkM0aUZ1Uk1kY0hZenhJb1pNS2VYUmNCTVZIZGV3cHZqVDFXQVRRWHBPNU9TbVNGM09ZZGNqRkFlbi1hT0dJNUs3OUlabUx1SklPOUtvNNIBdEFVX3lxTE5URldGNTQ1N2E5RkUwalk3TjJaMk4xVHFra2Q4RkZ5NDJtX1lORmJvak8ydkRCcUF3eFBTTmdrdDdjZGVSd1NlbXdSLTNIWjcya2Z1ellDWnU0cmt0NktZQlZBYkJDZEszMmE4NjR5NnNOOGEt?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 北海道湧別町 湧別町東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbDk1TlQySk1zSnJWcWYyTHNOaTVHUVBhcGl3ZmhRYUg2bmRxQUd4YzgwOE80cU9SS1B6NWRpZURqc0lRbmZfWTBFMEQxMDNzQWY2cnJ5WHdPdWZTMzR5X3ZXWUVzUFB6VktVQV9uSkFaUm5oTjZmczRIVFV0X0Vfc1lrUk04bzJLQWh2N3hldzhIcWFkX25neUxZN2TSAaIBQVVfeXFMTjF4SUFNelRjNXNRWUF0clVxZVpBTUpwcTdMTjJGSXozWFh4cTYzUHJTZjdRRHNhbjBfeGc1aDNtazc1dWFicDROREVoSDNkUFFwRG80bUtlREZsSld3OW91MkhSbzhVODVEVmhjeGdNdDJGY0pzS0U3SjQ1aDNuT25YRjJscjlOWDk5ang0TVp0NzJzR21uNXZVanIyTHR3eUxR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 北海道新得町 上佐幌西3線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNSlNmcXhRSkhHRkwzdE1jbEdlUk5reU1UcHIzWjFXQ1VVS0MtdkNTWURjTnd1b3NTUE1iNlk5T1ZCRmg1QklRRWhiRl9WR3N3TGtkbHphZHhSN0JaVEpPSHRhOTl3b3Y0T1hhOFVkV0lXdXpoYXNGaklxNTNtU05ZbzEwZ3NQdVR2cWRYT1lJNDJKMThuSGkyY18ySzJpMnhZZmx1eGdWUHRkbG9NZWx30gGiAUFVX3lxTFBZc2tsSjNsSWdrZFlRR3FMZWlpc0kyeTFiamxiSF9kSWRWTlNkNEhJd3VSNGtIZkZfOU5IV3hFdnhCSU1OeWNoQmhDV2VnRFFhV1pKMFhOa0UtOHAzbXZxaHNLSGdVWkFlaGs2aHAwVGltbEV6RHlwb29jc2p6YklWcWpmbEgzUjg0Qk82NzNNeWRDWFV3eVZnTlo3eU1tQmFrUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 北海道比布町 石狩川周辺地域の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPR0s0Z1RZd1FzTERaaEd3SWl3N2xCbktkRFNZNVhUc1BQUHJ4SlNrRUNYSE1HUm1jcmljZnJFeVctZmxFX2h1UDhUWFdRTU9vTy1zbmFXTFJuVUIyd3lJVEFLWU9kVnREb1YtcjF0X2lvaTJZYmMwVXktdWhxRWVWN3Y2ajNWTS02ZS0wLTljc2ZQMG8xbm4waWZlS1XSAaIBQVVfeXFMTzNLTUpidFdhakhpVlFjV0hldUNlQUZoYmh0NkoweE1xMGN3cnBQeUljRS1SaHc0OVMtVDR6aGs1b1NQdmlyRWlxVWFRc2lXRFhJOVdUNGdvSTZaeDh4MGZ3MDlVczBqNFRDZHZhRU5MTFhYR3BOenNjcEx3V1ozaFV0Z2VPTHJOd1VRNWNpLUhmNl9ZME8xMmRmYnRyY0Z4NlpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 宮城県栗原市 鶯沢南郷北沢向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOQU5lXzNHQWJIV1lya3gzLXFsd0lBemhlT3NkUWNLbXZiTGIyc0h2NkNrWjc0VV9XaGItd0l2SF85VHRGWVhuVkh3N1pZUjRJS0pSbGlZWk9UNFFGbVBvRGNRcVBsZm8wTFFoRl9VZENxajJpLUFvdWt1c0lSY21DR29YUlBNRnJaRENrbGlLaERMeE1Fa3pJa3Jod3BNaXZLcC1NWFEzbGhVUDhtVmdRd3ZqZnY2a0duT3k3Wlh0YjNSSGl0UkxIWGxQbjljNTY0WU1NdnhTeVFnYjFORlNoTTJWRkVjR1JvTjlCSlRWdFpSUdIBogFBVV95cUxPVnl6WlY2Z1BDaWRBZkxjSFpwOFVsRlZicFlVYjhyclZVN2o0S3VGbHQwWnZ1czRCczI0WjUxV29kUDh6SDZQenlFUGlycUtVQ2JPSHdSQmhCZ2pGeldtOC1uU040TU00SFJ0VGk4ek0yb05oaWhkRDUwZFRsTHMwbC03VnRyTzl2MlJ6Q0tiajRSXzYzZUg4emk5dFQ0Y2c0d3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 宮城県登米市 豊里町大椚の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSlotZmhYd0tlZjFOellBNGZRUmpjNmJNdWF4VXVyeE11NUdnbzNKM19nSmJYY1JURTdOZ1Bib2c5U0hMRTlQMUhkemNPM3JSNmN5WEhvNmswcUtsV2hQbEFGaXNHUWlGYzBmU1N0S3J0RDllc2JUN19vVlNQVEE0a3VKd3NPWm5GT08tdWhqVUJoMG91U0hFdHVGbk1ZcHdfRUxxUjg1Mkk3WmRwUGVpeE1Lak1tUTRqVVp6aDRFQ0RCbDRsQVhDZkVqcElFS0hYSTkzN0Y1QzY1cDZ6eHVuQXk4dWFZSnpkZ2dHSnJEMWwtZ9IBogFBVV95cUxPem1tV19sYkxTMGJIdUpyM1lZSjU1dmlFbnFueXVabWFNOWRKR2U5WGpnejBHblBlSmJuWGZLX0M0REpnLXMtSk8xQzkyWjNNQ1pmU19fZk9DS2JoSUFCeEFWbDBndjFWR0g1TzdlM2o1QWJlblo4M1J3d3N6RlJCNkRYWFBUMzhfM3dxRVN5bUtacWM0Qldhd3dGWVRVSkJfbmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 宮城県登米市 豊里町大沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQOWJyamRlay1WOFBfZmRnd3JXVlptZ2ZxTGo2eS1lalBWUmxfZXl1VUEzQzB1aVhWZm1ZbnFhUk56S1hwVnlWMTkzY01YTG1YRFhRMUtxb21KRU9xYUtNWVZVbHNzQ1Q4eVdmZlE3QU5WOHdsZ1RjVDBBTml6YTVpWjVzNDZ2cmVCVzdzYk53ZkhVQ3lhRjI3OC1jRWFoNHJ2dVhJV2JqaGg3UVN1QXJSZGxDX2RCWGJ4MUlkeHJRVWRSOEEzYjUtUVlBdFNOcnhiUVpfQ1lfdm5jck42Z2FPdzI5UUhXWFhjOXN1Mi1iT3FOd9IBogFBVV95cUxNZGdzZUlweEp3OTJmcWF3cHVVdGtpRHc5bTZHV2dHbG5iT0Vsb0pBNzFkMllFMkd5SnFBdmR5dFdJYmI4NzFlZWQ3eWh6RUM0Yi1aQU40U0FuWmNtZVZaU1JaWGFiR0dwZzVCRG9icHptWnh4M3Y3VW9uODQ3aWxZX0FMU09CNW91aWRlODdoTHlpdnZNUV9fUXVGSVFHci1wRHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 宮城県仙台市 青葉区芋沢横向山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVnlMVHpNaUZDWWRIQ2Vpa1IwdHBfYm5acnF5bFFKQ1ZISlhGOXd6WjNCU2szN0FDWkYydHFEYkp0M0doOFV1OFl3a2JpRUtVSU9hZTBYUzVOYkhqelNHZTB4UmtwV19IcDJwY0VBRTZwLUlCZHRXODN3QXd3MDVMaks4ekZVVV9EVkRIMXNLMWNpV2pURzVoam1tZ0vSAaIBQVVfeXFMTXA2RVBZZFhYWGdLVVRKYmZDMnZPVXk1cDJOSDlSdXlqbmNZZjNqUjNET0JXQVdrOEI5dFpKLWo0b2RjNXppWGZUc1ZQSUVWZFdiRHN0TmkzNDdFMXRkQjR3Q1Nod1Q1OU1oYUgxcmRaLV9FVG0zekR0SE9GVjVmQlBwei1rY21GSEZVOUdMMjIxQngtNE9nSGJVdk9ZTkRCMmFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 青森県つがる市 木造館岡上沢辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMWpDbXFSYk5aVncyOWRUWlg2OU5MU1Q0WlhvQkYwLTJZbXJXVkR2TGlxV05XTk82R2RBNTB4VVdLWDFUOTgzM2JtVUJrVXQxbUNud1VtSnVfSExIZ2dvcmMxX0hVTmc5all2ZkNIS181bF9IZFcwSDNCWWJDRDBNdWlIZUUzdC1hN01zYzRiVWUtZThHQ052akRwZDPSAaIBQVVfeXFMUFBvalZibm1td2duLTNXdnJxSnJ3UnVaUkhmanhxS0ZzX3otemR3SkNTT3dhUFZlcnlCTEc4MWp2TE1lcHhNMGNzQXBiSDBzS0g0ZFhMZjBDTDFvVWM5UEZCa18taG1aS1BGcHN1LTMwOWJrdm8tdV8zMHQwNm0xQnhWWlRSZUJIYVV6T1JnYVg0VXRJZXNTclNCMndTM1N3SzVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 青森県五戸町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPRDVITGJsYUZaNk8ybWZkWmFZeGpmc3QydU1KUzEyZEJnRlZKdEp0YlQtZFRYRnk2OUtFd25JV1I3SXhVYU1DZmNhdUdvazNrTVNEMjlfN2hPZVdVQTNVenNPeDJxNmhTMTBlaWR6djZNOTB0d1JHbnM5bXFIQXA0Tk9yUdIBiAFBVV95cUxNRFFnN0xMQW4zUGg2ZGtrVjlGODlCU2VSLW5lWExDdFZ6SlBuR0VOV3cyWWtEYkV2aHg0QnhMdk5vMmwyYXNMNlF1Zk9NdXhOb0ZMRkZyQlAzRW5SejAwbU1XODFyQzhsTzNfVmRZQ09PYmRTTmJIQXBlYVJmakRHWGpzbnM5d0pJ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 青森県五戸町 豊間内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPV2s3d1k2MS1YYlpyTWp1bzA2NEFWMU1wWVBiRU5YRWpQWDlQMzRaNDlGd2F5ajdScno0Z1pwTVRxekxqR05JMGwzV0RPQVpoVVNEbjUtQm5ScFdfSlVfdld6dkhEWGppVmJHZ1B0Tm5BUlB2cDVRc053cjZNeWVPRHl6MEZhaHhFbGNCUmVkOHZwcDRlT0l0RDhDYV_SAaIBQVVfeXFMTXpBTlFMSVFtZGtBSXh2Zmt5OWVkYmhTUG5oT1dPbUhMSHJ0QkdqRUZmWFJxelJtUXVMQmhqREZpZ1pYQnkzdV92ejlIdGtEekpVMDdQS3pCTHI5amJ5d3Y4Wk5fRldzZ3J0TlNMNFZDaVVyVUJpWnR1bE5kVGRObWMxN0lEYXlpXzczRGR2VkdnT1VId1lXNGl2Z0ZvVm0taHZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 青森県東北町 ガス平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPcExtXzRQbTE2djVad2kxdVFNRlBDbmJJbEpHd1JyNzdSaGkzZEh0eXB2cDZKY1o0YW1ZSHpCN1NmNDEtaURYdjRTdHRVRkl6ZFliNlA1WFc4dTd5RE1yY1dzMFJLMERyQ19KZmR0eDBNS1VvTGwyRkduMHhlcnFpVHVSNzgyaHlFMWpTQzhnMDMxalpqMFBOcVhERmk3Xy1yOEsxbklvSThteFhkQ0NBc25PRDhBODBqNjViamtMUFFJSUkycUNrd3pWLTJ5ZzcwNHBTcmZSaEF1TjZsOUhCNmdrNGxtS2RTNkgtX1JpVXJiZ9IBogFBVV95cUxQYUZTQ2s1a0V5bjJxUmNHVmUxY2FvT2VDb0F0cTVkaVRZLW9lMEpfMUwtcnJiM2hxSDk1MTRDRTBkcV9LSnZtOXdHSkx5M0RDZHpERGFHTzBvUWs1TDZfSEJOcUszSWN2SkFIUy1MVUMydTRXcS1MNkszYzN5M191VUp5OWc2YUc1YVREWjJLd3FVN2xnLXdSdHNNclJHOWM5dUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 岩手県釜石市 新町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQd2FHa1NCTXM0R0JvTl9Vb3E5WXZxYUlLSGpzUzhBX1lTNU1ESVUyTHZHQ09IRjVUOW9QUHdVV2pTTGNrdnJsbU5sLUFCQW12Y2JGWnVpOVlrSVNJRThmelVMc0NLdlpzbUdWQ0FKNHhCbmI0bDVqaUNSby0yV3QtV0NadHJyQ1JIby1sVEpsb3lBeERraUhieEo4RFPSAaIBQVVfeXFMUFg0UXI2MnBOMFhIUFBkV05Yb2ZKTm9lUVdQbkVWTjBoMFZLQWVmYUZMWk5NaERLSWtLbTUzNjR1N25Da3BFb1VCdWJMbXBLZ3A1QzZCNXhtWWkzV09JNnhJLXpCTmNaa0pvT3prVXZMUldEVzdYSTA1bnFhbGFVY1l3SnBEWnBwYndFVVkzUXE1OFdvc2NpNDZJbHlOc3hEVGV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 岩手県大槌町 大槌第１２地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObmNsSzdTRVJjS1drSFhaM29qdURMXzJxZHJCSlpaemJ4b0VkR0RHY1pPclhyaEoyMHQyajJ5eFFaOXNIMzducHFNdmlhNTlRdUhwazhHWmxLMlFaMHprZ0ZJWXdDS1pUNmJjUU90Z0hJdzZEVnRYbm0yWHRRQmRPZHlfOFdpWEt1LVdJaldhbW9oNkF5QjB2bm00N0jSAaIBQVVfeXFMT21vWGRCN2Z4Wko4MHNiVWpxdzRHdUx2dG1Ga1dGc1lheExPckFFaVVfd1lRbWVLcDlPQ1dTbk9FTTJDbmRXMVpEc1Q1YXlhcmFlUWNJbEkxSGpobW8zNHdmeHdYQkNNejl5cG9wQWg4RmtXelUtTS1rMnFXbFBNU2w0UzctTVJ3eDRuT3VRZEo4OGpQbnd5VElCZzF4djV1aEdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 岩手県北上市 和賀町岩崎新田１地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPdlNHSUh5N1kwQkpNbC1qalFuR3AwVW9VQ3RRdWhKMHpzQ1B5clV6T0pJSDB6UjNZTFR6T1dPbE1TWHNsUjgtNFJaR1BwMjRRU2dwUjlOb01TT2VHMWY2MHNLTEo0aHlxRVh6VzJaRHUtRUV0T3EwckJYMWgzUnRLbHBMbW1jeXdfYlFPUGdrOEpRS1JHYUU5ektfRjg5R2laeE13R3NFZUVwM2R5MUJJ0gGiAUFVX3lxTFBIX2dBU2NhSDY0d3ZadWViZkR4dDlKRUxPSUF5dUVBeGU0ZnlNbVpiQS1nRGhWcTJDT1R2bkgySThaSUFWN19idWhOSkRnUWdMSXV6czFNS0VHVE1yNFBxdVdQXzNQSG9od0N0SnFwdl9XWVJKeXRuUXA3dGVjWHVIbTA5M0htVkJzUGg4RE9UZ29DQTN5MHhhajRiS2xmVkFZdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 岩手県久慈市 小久慈町第１４地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNzFRZHBZTXpHOTdiTHJaazFiZ1hpT3ZjU3dpb1FaSG9rbXNCSG1OcThyY2VNckVtRTY4R3l3WFVIdl9nMjFRNkw4XzFqbzhEYW5tZHMxM1liVXR5U2RqaXVYalRqVjlveURvalptdUJKb0VhSWtPcGVTY2JxRUNpaXJNeUdHMzJRdDExUS1kMHZIV24wUmZOakl0OXTSAaIBQVVfeXFMT3lfdlkxMnl2S00wcVpQdmZfaFJyamRjRlA4blJTNElmZVg1cGFpcE9XcFlEaEhocndmbWdRaTFmOHEtSGJRcU12eWRKZ1laejZQczNOUnBtS0V3Z2ZlWHFjTHB2MDl1akF2dXhPMFVEbVBhemJkQ0ltZm9FYXUxWWE2ZXZvaVdIRUxVcW5qUDk4R1ltTVNGbUVZWkFQQ203UlJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山形県南陽市 川樋の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 山形県南陽市 元中山の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 秋田県湯沢市 駒形町八面佐野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNcnBKS0pJZXl0cEhBU0V6ZkVCbnhPUy1Wc2UybkE0cjNfczRGZU5vS1pvdFE5Sklyd05vNlRONkZzNk9HVWxHSFhtQXZFa0tUWTFpdUpJSXVTcjkwZFExQU01YzYwYUZxYjBUNU44cW4wUkpURl9ta3VISk5tWkc0R0N0NndEMFgxRTNRRWl2alVWZFgxekhLcHcwWTF5QklCOC1OWkdPYnRuMnRZTlM1RXkxUnRPcmh3VENLOExacjZ1MTlaUU9QQkQta2FwNkk5LVNjdVJUYXdTX2pYcHpaVDdxcUYyRExDVkFVNHVVWFJBd9IBogFBVV95cUxQTUlwTTFsb0UwRzZfZkltNkdIZkZhcHhDV0szaVUzWnYya1dsV0VzdTdrMmkxalltd3kxLTdUb2gtbWxncUNWTkp5M0RSX2hjRzZKNk1oS0o3bFRKbmxNUkxnQWVWdDE2eUF3M2VIYnlKaldjWkpKUEF0ajNxeGN1UXl2VGIwUExKVHdVaGRhVlE0anhPQ1FaaXA5U2VobFBoOHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 福島県葛尾村 福島県双葉郡葛尾村落合の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 群馬県沼田市 下発知町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeXZ4bENtWGM3bVRVY0lDUHluWEhONGJ6T0w4WFJIVnhGclBmSHJXaEVsVlZMdXhXTHpWUUx3S3I1cVd0ejVFNXpWWjJHTzhKWFlQc2hvdFpGcmxmdGlmOTg4bjd4WmRJRkRIaXhvazlmTmEwWEVVX2d5QktsTGdPNnI0ekFVY2xOYXR1SkdjZDBjVlVzVk10Vk5IZkvSAaIBQVVfeXFMUDFDYlBzOV82TVoxTHRZRTEwX1JlS2s3MVVDdENxWVFfN1RyTlhFMjhkT3BrdVlUSVRMWkl5WTBkWlNhdGEzcEZ1MDcxaktMX2xyNjFIU25uMFZRUGFadkhVM2ZlVUw2VWc0SHVMT2owc2E1R3NacjJJMTBybDhjbGkza2E1OV9nQ1RpNlFfcWlWRWJlZVc3UWNVZUFuT0dkNy13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 群馬県沼田市 下発知町地内　発知新田駐在所の南方150ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 群馬県安中市 松井田町八城字二本杉西の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 群馬県みどり市 大畑集会所の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 栃木県佐野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1WbkNWNDdkNjdJSGhFSFl4OVNXdEtMaFVkRklBUFhDSGJvM2I1UlpPWEZ5ZlNodVV3eUpDRFRzT2pQQXJ5eV9Cc0p5Yzl4YmlOeHliRWxLTG1OT0tvSTFRcExiRTZyWnPSAWxBVV95cUxQOHdlMTB2Z0VQSldzUHVNVkJ0eS0wRml0Yml2bnRCQUMwem4yR19RVklsRFlzbkpQSUN1UG85b280NFloOG9xQmNiOUJPVVl5dnAxTEYwZExBSjllZlJxR21DYlhCQjBNbVlWQlg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 栃木県佐野市 山形町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPQ3B3S1gxMHFldlp5NXBxZHQyaEF6WHZHbFF6a1ZjNk1IX3lZc0syRVR3MDQycklSazFfSXJmWFpJWl9QR29OVGJWZDI3NVF5X3lYODBPaDNSaHhNSzBYQzdOZnFGcGdNY3Zub1hHeTB0Y05kN0xSMVM0aFlqRGRzNWV0c2thbFV3Q2RjTGVSQ0RfRGJTZzZ2ekp3dWg3OFhkWFNtTnA4ZGZsYUpnZmM1R29NU0hDM2lnZkNRTmRqcGRFX1hfSFp4aE01LTNmOXJ5dzlWYVplcEhDZTNFZlRMSGgxNHoxZkowdEZJZUQtZ3k5Z9IBogFBVV95cUxNbkZ3MTNhcDJyZGtRbEJFMGc0VUd5cmw3VExINUVSTHBBRDJiZXZCczIxRlJzaFVwVVRLUGVuU2JjcjlpU3A5WUxMdkxNWDdaRC16eDFjdnpTSDNiX0VZVDFvZ21QbEoxUGpUdHpNRDFyWF9fZ3NRSEVZUWwwQ04taTZkUXBlaEtCYm0yYUs3b0d2aG1Ha3o5Q25HdjBDYnJKQ2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 栃木県佐野市 閑馬町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONjB1ajBqcUoyX25qNk5ZRElFalJkb1JJVWRVbWFFbXRpMmw4a2RTLWlOci1LRzd3eFF5Y0VlLWM4Qmd1a2ZYWVA3OTRERUdxWnotb2pfOTU3MFFKZUlrMW13X3VaVzBLSGQwZmRackM3cUEtM3JoODRkUVctSHRreVdiY1ByemlVWF9aaGl5aHhHeVhwTl8zeVlfVEnSAaIBQVVfeXFMTUVKS1dpRTdWNGFsTkxMSzAwdmlGeHJ2WmlvSl9xMi1PY21kUGR6UUM3WGM5blRzZFBvME9xSlJ2Y2EyUDdKdUhMMjNqbkI4aURKdl9tWXdsVV9IX1Q3NE1udTRxVWVaRDRMMDNLXzJoYktPZjhzM2VOTUpQYUhEeWZaTnZleXJoMVVyd1RWVjVxYmk1dTFIYmNBcGNiMjZwUm13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 栃木県佐野市 仙波町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRnFzUzhGdHY1VnU3UHU2RXdveENCWU5FbjJUZGxMUEU3TUgtV2NfeGdCWmlpYzRoUDBDUURZNkZ6bzEtWTJlVlByT0l6T05OZTNJQkhRZUlmTGZGdk5aczJDY21ETUhWV3Nnd1ZtLThBNGdFTzhvTHhfbHZrazlaTkd6Y3Z5eW1PV3ExcV9YeXVWc1ZDRDBFRU90RjPSAaIBQVVfeXFMTmktbnNNV1ExNTh3NTlad1R2RWxCNFFpazlSZ2Vpc1UzWU5LWUUwenVpR1R3cGo0dG8zWnNsTGR5eXp4X3NuSVUtLUJBa25DdlBzaXlyQ1pGa0lOT2VZRWVVeWxPZlZDdmR0ckFnUk9rYXhQUDhQeDhHT19Lb2psTXdTT2Y4UTFWQnNDNEs0eXE0dEJJNkhKM05uNkk3bUswRzdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 埼玉県越生町 成瀬の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNaVJ4WFdHa1ZmTXJMVk5xS2FmMGFWWFZCaGJIU0FIVlRzUFpWMXRzMVZMTDBoTDNOYnpMVWRWNTAwREVTYjNlMHpkMFU0MzRPdWVsRkc4RmRrTnhHX21wNXBhNVFkRE9tYXU0VUs5RGxwQ1YxUmgydGFFb2JkRE9odG9Ua25QelYzS1JqbjRRSkJHbkVaOTVFc0pqYmhueGNFeGJDY3ZDNTFrWkFqYUJB0gGiAUFVX3lxTE5uNlljeUxvYzM4eXIxSXl4Q0pIanpLYk1Zdm1HUnctN3NMYmNkeWhaWUNhVXh6R19Kai1veDN2aTdfVENMWjdidWd2LXNyVVpOMExRc2FKaGdVVHBiRjltWG9tUkxQZHRNSTJsSHo4SU44YW9FUmZRYy1RcWNZR0ZRYjRETmo5ZnZrU18wbWxZY19RMTF4OFlQVWN4U05OckhaUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUzNqQk9pNGI5V3lqMkNWVHlmZDl5bGhIRWY3WU1yN3JjZmUtSF9pbDc1ZlgwYmVISmFySVJ2cGo0VVNsSnJNVGxsMGhVQmRSMUtyQWFvRzBnMG9GSFdNclNZeHpSZzdRbkEwanN4dkN5VndlcHc2aTZKWnhnN3ZORG9qYzF0UjJNbTc3SGtjU3pVVkZkaTBJRmdyd1bSAaIBQVVfeXFMTm5kNHBjd3hWWWVyNmFNY3RwQU5nQ0FBbHNTNzJyXzRzdkxRZUtDR2hkNWIzVFBUOG85SG1TV01oM0xWaE9ocDB5VWNwVl96QTBneGJEbkRpUl9KZ1BTVFVubGd2MlNCd2dfelRfWDNUaUNvNThFTnJpN3dqSHJVemMwMldlajQ3VTBsWC1FTU5VbHFHdEV3VmNRUzYxcVg1QUlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 富山県南砺市 刀利の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWXk3ZE95SHZQVXU2NjJSV2RfWGZia0p6dHVTYWpaZ3hNdXg3bGtoLVV0Nk5ORVlzUDFraFh0NWFmTnVBb2xPbEQ1YTRVQWIxOHBUVlZKeTNyRmg0NWRidDh6S2NPendfTUhENzZyUnFvWjdLcTNneUtMYXB6NVBScjZfREx1cEZMSTZtZU04dmhLQm05bmNFa0ZOYTnSAaIBQVVfeXFMUHJDWTVoRDNrSEdqTjRGYXpfMTNwNFBuWEQxZmdzd2JXSkxueHRSZl9GX3loMmtqMTAxVXBiUmNrYUd1S093cU56NDZPOVRyOVA1YWtza194T3I1dHRWVWlmUkVrQUgzTEdwUDFwendQc0VGVHNSMGp0cllTZmxIMDI4VDZBWUZpcWUyZ3diZm5aTW1kTWE4S1Vsb08wY2E1dXhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 石川県七尾市 松百町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWHU3QnBUWlB1N040ZkEyRGRuczZwaE1qM29aMWc3UmRCUW9IUExnTXVmZ2p3TUZmYXlLbVEydjVVekNhZm94Nl9Ta1UwZnB3MXAwRWZfSGZEQ0s2clFFazhjSkIwZ0NhLXMyQ3UwRzgxeG1OZTdDOFY3S2Jrc1dKUXI1ZmExMFlMNWdRQUUtUkF6aWlhMGhkVkRXM2jSAaIBQVVfeXFMUGJKbmpXeUxBYmE5OVo3am1RM05tbXByZi1iNW5UcXVFR1loQThNS1JnRnc0Y1A5ODNHNm8ybzNZQ2o4WXRSeGZQY01POU5GUk1KZEdhV1d1Wnctd3FMYnZqd1AxZHhpSndqSzQ2OVpJektqLU9QX3NsaWJoMGNCM3UySlhIaW1DR0k5X1EtYTU3SmwwSFd2S1JaY3MzYzVDNVFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 石川県加賀市 栄谷町地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 福井県あわら市 二面の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONUxDZU1FYTliNEZSX1E0dWVob2d3bnlyUW9TbGtHeTJoa1lxUnpmOFhpVjJUcEtVSkxyT0ljYVBFWklmMktjd0FSUFVna2c5TzlTMU9fZkN4SGl3bFVMSlR3VmJPTlVvdnBKdXJwTm5mamN2dEViTXlSNWpkRk12aThIekw0UHptN3hEQkpQb1lCUWEtMThiLWs5N2dDeWJsYkpQNUVlZFVGUzlKUzREcFpPbzYyU1E3eVE3eXh1Yy1VOTJOcmg2T05nUUo0dWw3NlI0R09NWVVyZVlJRWRxOWFHNHFvMGpMNnVxQVU1OWxBd9IBogFBVV95cUxOdmMyMHB4aDlyZjRLLVU5Q2hzamtyR0hka0tnVUJxN21ycHFEbWswR044VjFXQVByZ1UzYzNvVl9Eem1aUy14WWtwRFFONzNhTlhNVkhua210VzJPYzRFdUc2MHV4OGtac2cwZG1raGpVNXI0a1BPa2dyWk5raS1pU21wTHkwdUl5WVF4RTF1bTktUHpYb213YnRZTXdCRTBpZEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 福井県南越前町 今泉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQS21uUF9jS09jUXB2YjlkaWFLdXJZN1FXRmx4R0NybDkxWUVYZXAxV21UQko1cXdtN200dHZCVkVLNVlYWDF4a25JaEtHR3MzUzI4MDlDUmh5MGs5R1hTd1E3QUpsbjdKa2o0ckNlOGNvWUhXaUNpd3VhMWJlbkNFdHc0TlRKTkFIZXpWcnhNVXpmVkxFRUVHeEJqZDMwUXMzdkNhZXRJYm5WVGRTT0lr0gGiAUFVX3lxTE1YbmZFWWxJYWhCZ3FrWl9WanZaRHZpQlFLVVBKaE41T2ZlUzJaVXZqZnBKTktqSi1Ia0pnejJMQXp4dHdjcmdQQjlJSHBTSzBQY0Z6NWpVWDI1dXhaUU1iN3lUVmg0MXgtRU5zcl9STU93ME0xN2NRZndMemlFYVM4VzQyZi1wSHdMcGV1eTZSRkZ0bURWaUh4eXE2YVhmTHl2QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 福井県南越前町 今泉地係の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 長野県中野市 金井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQc3d6SlFEV3lVVEJfT2VDTTJROXU2UDF4dGhvcldWbU16RlNoWVpDQU1ncmFXd2ZNb1VfdGFvSnNlYmo2VEVVZjVMeHc5U21hY3Z4NTNqRUplR19odzdVbGMzbmNpa2h3eEFNVDJsZWtsVEpLX0pkLU5MN2RzQ0poWkFtcHJnNnVSeUk3OWZIV1p4VFFWQkYzWEV5bmTSAaIBQVVfeXFMUEVUSmtpeXBxazBBbnJSZ01Qc295V1lyRExPNWdUT0NiQWlpaWtNUmpZV29iYzU0ajdiLTJwcmRnRU9wNV9ZOGtEOFU3Tkt3NmQySW9PeE1UZ2dPMkRiSm9XbDEyQzlTcGlBNTRodnh6a2VhelFVeVhfelZPX093N1RLcHlnbHFrajRPT3VlanBabjZIWlVTSW02U0wwdVh3RHBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 長野県中野市 越の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYVJVOFFhVU8xOEpZbFhCZnJJQkMyZ2RtaTRVQ0NTbjVNT2UzSEJoNEUzSFlCQ25CZEdzd1c4Y0E2YjEwQ1BMRjhGcGFZa3lBQkJQbE1XMjdTQjdZMWRFR2xmYmFTNGVPT2JiYzJsVTJzckN1dzlhX0RrY3EwS2xnUkQwRFpVQnl4TnIxdE9EdjdkRFFxZTJ6T1puTUbSAaIBQVVfeXFMTUJGUU81dUY1QmF6clZYMjNWRkltNHNhdjRmV3k5TEFLdldZMHg5ejN2SnpCaElwQXZDTmNocEtwaUpkM2JrYmhqYlgtUjJDYlVhUW52Z3phS0ZSTndkQ051OTVVQ0xRWnhzTGs3ek12QThMa3E5ZElIT3c5Rl9SRjZKLXBtUlRXTEY0UWhoTENGRzFLNWZxOW5WUktGQ2FXeHpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 長野県軽井沢町 長倉星野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZUxJZ1UtQ08zY0hHT3IzVFRIc0JIM21jQVY0cFJ1ZmR2R0RiREJYU3ZMVjVVdF81RHRVYnkwcGZZVlUxQnJYTGxFVjNEcG5yampLeVczeUM1Q3BSSG5XUEE1V3NuWWI3dnk1VzkxUXpUWi1GcVFFU3pvdGFCV21ra0Uwdm9OVmRqZGJuNUItLWRXVVVkQzMyb2hsMW_SAaIBQVVfeXFMUHgwNmRnel91aF9YakN3RVFVcU5xcFlxcUctOW9qZWxTU1VNMWxxTU1oRUdpQ1lDdzdkYXRPQUlOVEFRZDF6aFJIN0dacExoZ2JHYUM4T2s5UUxHTFM4RWRWQjlkVjZ5SjRLY3Rlci13dXNhSlVpR0ZEa1I3YmFyckJSTDBzYVBPbGltRGVQTWRGeHE1bHAxSGwycXZEZ0dFekJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 長野県飯田市 中村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeHhJRWRYQ1FteWoxbjB0SnRtSktmenBxallWVFNpUjFqUVlKc0luMmpzcGhCTF95M2NBRFotODVxbk1QMkhqTjBlbVRMVUhReUQtZ0F0NjZqT0g1WHVlaTBJbGMtN21wT3RiX0ROV3NIWUx6N214cXF1QzkyclZxSkwyczlMSE9kUk5pUm1WdTNyLWdPVXFMZnZpYk3SAaIBQVVfeXFMUFNMbHlXMGQwVlJkaEU5d3JYbDVvdkY5YzA3X2p5Y0lPbFg2Wk5NS1JrbjcxdV9yOVpLcWxTU1lfQVhLbTZmS1RKbTNsZnd1bDZXdUItbkJCWW8ySm4wT2NkeWNldFBzLXZoOG0zR1lwOS1pQVB1M196SVdTSnVFcU13VlZiQVRGcU1IUnh2Y08za3F4SUFxTk42R19WOXh6MmVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 長野県飯田市 上川路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbjJ0MWw3WVpsMHB6VjVqdEpQTHVJNUExOTZYOVQ0d0xVN3RhY0ZITWxBVnl3b1lXTWp6dVc2MEVUTTFIOFRHek1GUXMwejgzUHI0czRTdW5IZ29SN2lCcEoxNEJRdEwwb2ZjSjRWSElkZjBQTF8yTmdJZDZUa0k3TmNGa3dUZ2ZmdXRhNGtndGNka05yUURhN0dkRDfSAaIBQVVfeXFMTUJrRmp5ZFV5NWdUZkhpZmE3OUxLN3MyRDFHZ2FUYmhOY3ljRG1GWDZqYldKSkFxR051WlhULXB4U1dVeXBzMm9nc1NDSEh3QWI1XzRaV3hxc3hqaVY5U1ZYUVFvMGhxVlgzUkhvbmtwWFRKM1hOb29BTURMMWNRV3BFLVZmSTRqR3lMQWZSZHRfNF9wejA4X00tMklwdkQxTjZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山梨県大月市 七保町下和田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQd1NpZElVblNXMVpCZ1VDUHhRclhHXzlHUUp1MVFxa05DZjlpeFItckpYVHRGUTBuNWltSGl4d003clBuWGZ2Qy02c2FjOGhhS05NMVgxX1RqSnJYUkgyaVBsaWw0QVJpS25iMlIyMGNQNEdzbjVKNTdwaURaZ2wtcXdKR1JBN3JuMUpQblRYVHNSa2I2RlBTTEQ0OUnSAaIBQVVfeXFMUE1IUFMxRDNVdVdiUmtjQmJMQTFydHpxQjBqRWNaQ0dxWDB1U3d3MnV2c19KdW1la0ZVTVhIeExGc3BIUHgzUzBVaWRMalhTRFJ0TGIzdEZuLVhud2lZOGhNcVQzN3RTUFhrelJyWXU0VG1IVWgxNGpyOG9Zc0VHalhyV0pjUFp3QjlMSFlWZllOX3BKdHJmNWxCb2ZKeVVqM1BB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山梨県上野原市 大椚日野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR3ZZYkw0dDN6UjkzN2dEQlN2NlZsWFBWek81NlhWSGl3S1lzYU9tSnFGNU90V240cXZkUFdSc1hLbkxPZXlKa3BsN2Myd3VqMUZBbEkzNjFIVVRYemp3aEttRi1nTW9FdGVLb0VrN3RxR015c3lKeFJTNkNVV0Q2azFyU3RGR2tvWldESmlzYzBsTGhEaU53cUktTWjSAaIBQVVfeXFMT3djUzMzZWxYN1lpbXFQOW5GZXd1a0Zod3dfVEJ5VTc1cHl4LUFoUzhtQXJ0SC1fNlltbXN0ZU5SQzUxdEJJTWUtaHNmVGdSX3hLMlF3UGlDV25XQl9HWFZMZWhrcjdISi1Bd3YybGUxMEVKbEZtcGdBZkl3SnlvVTZfYjdkTU0tR0YzLW80NzFBY29UZzFsMnN0SXYtWXRBVS1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山梨県上野原市 大鶴地区日野地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 静岡県富士宮市 羽鮒の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRmlVUHlQdUJyRjlpNlVDZm9BcFhDeHVSdi05U1Jab1BGOGs3ZUZWV05ZOTRzYkZFV2J6WkI1M19pNTZyOUZZaGFweE1PV2I0LWhSLW1WWmF2eGNZQXBmRzlNanl4SjVDeFhCQkQteUtyQUI2OXhrRmlmMk1QR1ZnQjVuQ3pIM0h4Qmt1eDRBNFU5NEJsQy1uRGlSWETSAaIBQVVfeXFMTjFHVi1RZmZ5UjNaLXdPX3A5MTdRZndMYVN1TXlSZW9GemlHVmVvRk5MdkZZYWdqMWt2Zm1nTktFYy1XRTkxYzVNQ2wzbGVfODN4NC11dFpldlg2d0tSRUk5eEhuOGJlMVpScEdKb1ZlUElBdDc5YU82Nm9OS2Y3dFRiRktUVnRTbjhQTmZCc1RHSmNKaXpYYUUzQU1WandZRkJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 静岡県富士宮市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBNRXFBRGpzOUdiVFZtbUlLUXd1V1daTENiOTRUcjFBYlkzSWhHY3djMDZMaDhVZncxNlVwN3VEZmNHZlJXMFA0Vm93ZTZ6LXNxc2NYa3hTME5SX1FDWlM1ZXJaSFlUQUlCX1pwTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 愛知県豊田市 大野瀬町マセドの出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 岐阜県中津川市 福岡　柏原の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 京都府京丹波町 下山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNSTBDXzFEOU9aRnE4VUVrYXBXNXZnZzNGMkRHUXMtamlnNmE2bkpBb0FhRzJlUUJ4VjVyOHJiODJ1SzVHUG5fTy0xal8wWk1QSld3WTNscE5TTXdEamJoNzRxakp4ZXg3a1hQdTlkX0xadFJXV1NvZFR0a3MtOU5wcUhJZ1VKeUlSeTVsYlpWcHQtNXRLS3FKa2QyMzVWME1wV3BpOEpVdFNlSDdjVmM00gGiAUFVX3lxTFBMN1J0SEc3alh5cWc2RmNWdUo0a25SUURFNnNJWWFKTjFVR3F5MmZFV2hsbGYzd1p6WjF5WVNnZUlzYm1zb0ZyTV9WbFpBeTNLRHZieENRVzRIR0NMUWZVNjExdXR4VHFOUXdsNmRrbkJSY1RPTFZLbzEwNEUxYy1BbHBhSTJneHB5M01sLVhNNzNCNjk1ckJzUERaRlEyRjBBUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 京都府綾部市 物部町岸田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOcUlyNFFVWVc5UFhGamw4MXQzZ184ZENrcUhyUG1hbWk2NWJPT0swZUVTQTlPY1pFNVRtTmNFRUx1R0JVVHQ5TjBfdDNXRkoyNEpwaldCQkIyTzJLUVpkM0RkaUhSUlljTUdxaWtLV01RdUlkbUIwSmlHZ01NNDk1bWkxbDJVdmtjOEtLekdNTzRER3p1WWVtdmUwVTNpMnBuRDI2VGlERThXVm5pcGJr0gGiAUFVX3lxTE9zVC1YT3pQUUV6aFdqcFJuZGhHQzUydjZJLXh0dUhuWHdzMHZMR0tnbVMyTVZ2dmVfNEh4RjRqeWpVZ2hNLXpHWXRlUnMyQWhtYk91YkFFRWQtSUN6Ty0xaGlBNjFEallGa0lMLVBWaGhOeVhiS0pfMTZUcUlaLTVEZVhlZmF5WWMwV3Q0QzhwbkNLUE5ZS3VER0RLR0JKd0pkQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 京都府京丹後市 大宮町奥大野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZHh1c21FcTBSUm80dDFTMEpRQmY0SE9teVFneWc0TlRPYkVZN2NPN3hvRnFRUTV4SlFtM29tN1pPMWQxUkZ1dlVnWTJ5djlPaUVlZmNoMk8yZTAwSk1zaU5mYnd0Ml9mM002cXNWZzBlTEhHQ25KZTVpTkt4b2stVzBKekZSUWVxcmV4Q3AwaENtYXFOcVhYbktrenbSAaIBQVVfeXFMTmRnY2ZvTUF6UVlSX2RiWnVFb2hxZHg2OUFNTnVvOFlueHF4X0RkSjVNdHRFaVlJOHA5bVRZSUREbDBMUFFaekZRY2lGdk1kNkNudmpJWjdnSmd1Ti1Ra212RVFaVHI3SjJNS3VZZ1NDVDY4bERyeUF0M2VYZkhUS2RieWlLRXREVUxqRWwwRTBMRVFKS1R0elk2SjJwankwS3FR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 京都府舞鶴市 三浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSkJjRXNNdHBIdzU4V0ZQejExOXpmWFRjMlBGMWs5ZTlvbkNCT1cyRVZoQU9zYzVUZUdESFhRT0Jpc2J3SzR6RzJrdUpJRVR0ZFNtc2w2dm0wYWpEX1FaQmd5RkhQRHhaNWRiYVBSRUFkbVpyOTZFb3M4ektReDVmR0N3WEwxY0lOSnpIc3FVc1d3RDBuU0I2ZEdyc2HSAaIBQVVfeXFMT2JGNnhRSFJCSFdvYXhfTjB5OXlkVDk0VVdNWmhEbktTZlVZaFFaNDlNMlJyREN5dndXSWh1QlVwbm9oRHBGUldYVU9yVVJ6VlNLNGdNX2cxcnJmYjRRaVJzaDZZdlFWZ0V2TVlvZFBtRVBaOHNlNkI1OHhxajBZVWpiVWNSVVpPcDIwSjRHZzlQLXZuVktGWlBYZ1lNZjhaS2VB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 滋賀県高島市 朽木地子原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQm02S29uQ3I1VDdaQU5DemFha29jOUpBRnBhWUhaUXF6bEtQSHJIV0RDYVpNQjc1RE9DT1J1MHRqR09NNHZZb3BsQ3FidGJOX25XM1M4NnBlTHc4NXRNcXBzSVdob2FBV1d5Mm8yU0o4VzFhaG1NbWt4VDQ1NVNtckNna3cyYVJmREVrQzBxUGZmYVZSaFZLTWh1azPSAaIBQVVfeXFMTjdqbzhGS2s1MFJqSm1nX3VRQ3pfcTVScXh0eERHMkZobXVXSmhlM3dEYlFINWRpUmk5ZDVRUzZrMElSVWtuRWx3ZWs3a3lMMVBSZzJJVFh2QVBxSEphb0NpSnFkdnFfOHFlMzM1MjczVVc5alJqVk5aaExTRVcxaDdaN3JmWnl0ekFtdDRIR0xGcUQxc1h3ZUM2TFJIaTFoSkRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 兵庫県豊岡市 但東町出合の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdHNWS01aYU9xclZEOVFnbWRyY3l5aHR3clZZZUJuTEpkbVN4V3NjTHVHd2xpNEI4REZKY0g1SWhleTBGYWRUdjVNRVlJZjZxRWRnZktaT3hBdWozR1g1WWIzSTFldnE4dDI1S1pCdDVaaUtJaXFMZkZqZzZrNjcxTTBZaEU3cUktT3RTQlYwSHY2Ti1yX2pEVm1ydmvSAaIBQVVfeXFMTk00MmQzcDBIV2lGakJPWDg5WHB0cHNkejVObEdmaUJxa0ZzWmFVd0pDZ2c0Q0hQNEF2aENXQnBnclZ2NnRzUDZDRzhjcU52V3J6c1dNWTY0NjhYT3N5QVZEY1RybXVZa041dzhaTVc5MU1qcUdDeE9LTDBnVklCbDJuU3VXeno4WEcwWUdjTzlsVVcwaF9wMWNYd3VpaFJuM2xR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 奈良県下北山村 寺垣内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 山口県下松市 公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNUTJGZk01ZlJNdnp3dDZUM0xrT3JvRmh4T1dQVEZmaDdoYkROVmVyMzhCdEpsdzNxRHM2aGp3VlpDTElMNjB4VlZ6S1hReUtFQ3dpUk1scDQ0cUUtNlFfMU9uVDFXQXpqeFdJWC1iUExZalEyZTBpR0VSWkl3d2RjS3MzcjI4MXV5MkdzM2dHcEZrOUwzQ3ZtZEJvSkQ5UUdYamZqZUg4Q1dQLWp1U3pqZDZjYl9DSVR0RE4tZ2VwdVphTXc00gF0QVVfeXFMT3hKQkg5c2xwaUNUejFJOVhyaE1ienhFdzhfMm56Vjc0MmlicUVINDdWQWxwLWxfRkJYQXpUZ3hyd2g0WDl0ZVhQcGtBaHpzRE9teEdPMnR1VEZneWdmWjZmTHZMWDI4ZGJrdWVIaUhvVkF3Zl8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山口県下松市 登山道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1NcDJXcHRaVjhjY0FBcXlhOW9KV2Q1REhOVFlSN1B2TlMzNmZJM2dTaG9ibE40WWNJQWJuYW9TMFBIME4wdG1rY2JieE1DZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山口県岩国市 周東町祖生の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOM2IybWhHYzUxNkRXOUE5ZHo1ZV9NUGdaaG1wN05GZ3NSQVp3dmtqRkw4NjdvMFd3c1BVLThZQVpqZHIydTRNbmdmNUo1MmtDSDZhc1g3bEZ6UjV2WFJ5cDJ5UDV2ZVdMckN3VHZvTG1rYUt5Y3RfbzJoZjZnRkZ6ZXVQVU1JaU1aWnZ2V3N3aTBySWZheFprVURGSFTSAaIBQVVfeXFMTmYyVFY5ZDNFeVB0ZjFsOUV1bzJyaXZ2MkxaRTVpR3h5MFRab1ZVZUh0bGkxa0lSay1NN3dYQ0RQLUZ1ZUNHMkFTSW5MZmFURnVsQ0pldFg3cjJYbUl0OTZCMW1NZU12TldHcWVkdTYwTGtNMnhqcHl5ckFnUV9xQnBlV2lLQzhGMllWQTg0TTk5SWVKcml0aF9HeTFRQ0wzT1JB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山口県岩国市 錦町府谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSEs0SV9hczlfbm5PUmh0SUpqbUR2ZFByN2QzbUNkMjNiZlRjbS1DejdWZW9DX1pUT1dIT1VWcmZETVlOMG5wQlpJdTRRN2MyaFhkaHU4OGxTaWNRVFlwWGpoVlgwNHlFcWNWc1ZnOGNlLW9mOVFhV0M0LVZQamVMeVRoaXFzcG95OUVsRW9jZm9NTXF0dDZ4NlJJdULSAaIBQVVfeXFMT2wwdS15MkU4SkZBdkc4ejJUZHVTWDNWa1JqYTRCX0xuZklScmRoeEhKZXVpd081OTBELVlLTm1MbkpHZTJjSUtDT2wtWV80bFZfOWFTWTBKdTQ0VDgxX1VpUmNYTDFnTVFMci1RMGpHWGNMQ0duTTB6WWFUQTRZUXFGVEZzdTYzYVMxWTIwb252MnR6QkFlRW02TXhXd2NjZEZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 山口県周南市 久米の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTmxjemxabDBQN1FLejNLakZ4VUtZbERTYzEyeFJvbGJRcV9wZXBMWHpVbGV6SUxlWXM5V1ZkLU81cjh4Vjh0ZlZmR2dpMkZmQUZlN3pJMmItTnhpUE5NanJZWXZ5WHVvTzRHeERIYjR0SFlrUjRXbmRKSGdFZnFjOVB4bUJSakxjMTA5VG9aVWZkM3h2OWNsQzdCMF_SAaIBQVVfeXFMUFRCTVU0NUhabEgxanhBdFRCQzRUZXRDaXZUMjNDSW9yN1FmZzJxQXBsUGdTVmZ1X0wtUFpNb1lNX1JfMXRHeGZxXy1mSWN0ZFRERGRjeWM1Y2pMWDYyNUdqUl9BNUtra2xENmdSTFBraTE0UExYRE1VbktZZEJyMDQzbEhkMGNTWWN6Q05mLUtobkNXQ014UUdHNUJZekhmVjd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 島根県雲南市 三刀屋町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9INkRkVzZFTFViWWJ5RHYyVnA1ejh1MFhvQnV4Ul8zcnk1UTZvYjE4Sl9mSWVXM2prUWxOMHlzN3ZYNTBEOE1GZXE1X3NwQUNJZlVwTlE3Z1FQajNydTBtLVVwbGVGLUkxLVB4QkUxZ2VaVmxTWDB6MlBQbHFDNnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 島根県雲南市 三刀屋町給下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOLXZnZmpNYjhoUDhQMUpKdE8xT3VyMlpLWDNsSDBoZGNYdlpHQ0JKMjFxeFJaU214RWsxcnNKQTFlbGhmNHNTTHNEcFhJeWk0SURHXzU0SHFpRjRNUmFiaTVJZEhieEFLVHNKYXB3WXRLcFVnVzBLVlZ6cl9qc1duS3k4Vi14Y0k3UWFuaGZJalRHRGZJaVZwOXY1b3pKTkVYMjRnYXlUQU4zdGRxeHFn0gGiAUFVX3lxTE5wTTA2a1VMb3k2NUczeENrY2pMVzhfQndkRlBpSGRDTm5qcFVQNVNpNUhwUXhaRmxNYl9IUmVYUHM3U293NW91eEp2cWplV052cmx6bl9GX1FQaVBfUEhfOVItVU5CYXIzbURaYmxQdlNqcUZKcFRNSkQ3WEtldlFPWGxUbzFKLURhLThTZ0dnUy1SQ2pCamhvQW1UdVh5NUQ2dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月24日 島根県雲南市 雲南市三刀屋町給下の市道土手内線付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月24日 島根県益田市 桂平町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUzkxaEJic1RkUy0zdkFqMURwZVlzMm9EWTcxSEhMZmNvX2FGdjV3c3hWOVdUcGw2OU9Ya2FVS2JPSUVtWkxVQ04zUUs0ZlVJQmhSOXJhLWpVdi1ncVZ1UnBpQTk4bERFT2g5ZHdLMUJuNGxlcHptU1RrLU9ZWTdvbnoxSVJ5WTNKU3U2UHVwdlNaN0h2dDRYRUhCUFrSAaIBQVVfeXFMT21tS3Q1dFNpcmxEX3dIaTRMdnluT2pjSlhwRFU2LUxXN1RHeVRBRjU4Q0EtT0JaSUh1U1NiWVVuQk5faktBZ2lzM3YwNE01R3p6d1RVUnhoR0Y2VzBtX2FpeEdZZ1hXQmNuU2lDcDA2bUVXaXluTVBTZVp3cjBfLU1BMlF5ejZ3cEg0akhxdGpNZDhLRTc0N0pBSTBldTA3eEl3?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"宮城県","count":11},{"pref":"北海道","count":11},{"pref":"山口県","count":11},{"pref":"青森県","count":6},{"pref":"長野県","count":5},{"pref":"岩手県","count":5},{"pref":"群馬県","count":4},{"pref":"栃木県","count":4},{"pref":"島根県","count":4},{"pref":"京都府","count":4},{"pref":"富山県","count":3},{"pref":"山形県","count":3},{"pref":"山梨県","count":3},{"pref":"福井県","count":3},{"pref":"石川県","count":2},{"pref":"静岡県","count":2},{"pref":"福島県","count":1},{"pref":"愛知県","count":1},{"pref":"奈良県","count":1},{"pref":"岐阜県","count":1},{"pref":"秋田県","count":1},{"pref":"滋賀県","count":1},{"pref":"兵庫県","count":1},{"pref":"埼玉県","count":1},{"pref":"東京都","count":1}];

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
        <span>対象期間: 2026年9月24日</span>
        <span>·</span>
        <span>公開: 2026-09-25</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={90}
        periodLabel={"2026年9月24日"}
      />

      <h2>総件数と地域分布の概要</h2>
      <p>2026年9月24日に報告されたクマの出没および痕跡等の総件数は90件であった。都道府県別の分布をみると、宮城県、北海道、山口県で各11件と最多を記録した。これに次いで青森県が6件、長野県および岩手県が各5件、群馬県、栃木県、島根県、京都府が各4件の順となっている。北海道から中国地方に至る広い地理的範囲で記録が確認されており、本州各地の山林部のみならず市街地近郊や生活圏境界域での事案が多く含まれる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な出没地域・動向</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">栗原市、登米市、仙台市青葉区、塩釜市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">日高町、湧別町、新得町、比布町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">下松市、岩国市、周南市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">つがる市、五戸町、東北町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">中野市、軽井沢町、飯田市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">釜石市、大槌町、北上市、久慈市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">沼田市、安中市、みどり市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">佐野市（山形町、閑馬町、仙波町など）</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">雲南市、益田市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">京丹波町、綾部市、京丹後市、舞鶴市など</td></tr>
          </tbody>
        </table>
      </div>
      <h2>重大事案および生活圏接近事案の動向</h2>
      <p>当日の特筆すべき事案として、富山県南砺市の大門山登山道付近において、成獣1頭に襲われ70代男性が負傷する人身被害が発生した（※1・2）。山岳・登山道エリアにおける突発的な遭遇事例であり、明確な被害が確認された重大な事案である。</p>
      <p>人身被害のほか、教育施設や市街地周辺といった人流の多い生活圏への接近も複数報告された。山形県山形市では中学校や小学校の近くの住宅地でクマが目撃されたと報じられた（※3）。岩手県釜石市においても小学校付近でクマが目撃されたと報じられている（※4）。また、青森県五戸町豊間内では午前8時30分にふれあい市ごのへ付近から団地方面へ向かうクマが目撃された（※5）。さらに宮城県塩釜市では、泳いで離島に上陸したクマが報じられるなど、通常とは異なる移動形態による出没も記録されている（※6）。</p>
      <h2>地域別の出没状況</h2>
      <h3>北海道</h3>
      <p>北海道では計11件の事案が確認された。日高町でヒグマ1頭が目撃されたほか（※7）、湧別町東でヒグマ1頭が目撃されたと報じられ（※8）、同町東では出没情報も記録されている（※9）。新得町上佐幌西3線（※10）や比布町の石狩川周辺地域（※11）でもクマの出没が確認されており、河川周辺や平地境界部における活動がみられる。</p>
      <h3>東北地方</h3>
      <p>東北地方では計28件の記録があり、宮城県（11件）と青森県（6件）、岩手県（5件）を中心に活発な動向を示した。</p>
      <ul>
        <li>宮城県: 栗原市鶯沢南郷北沢向（※12）、登米市豊里町大椚（※13）、登米市豊里町大沢（※14）、仙台市青葉区芋沢横向山（※15）で出没が記録されたほか、塩釜市で離島への上陸事案が報じられた（※6）。</li>
        <li>青森県: つがる市木造館岡上沢辺で痕跡が発見され（※16）、五戸町（※17）、五戸町豊間内（※18・5）、東北町ガス平（※19）で目撃や出没が報告された。</li>
        <li>岩手県: 釜石市新町（※20）、大槌町大槌第12地割（※21）、北上市和賀町岩崎新田1地割（※22）、久慈市小久慈町第14地割（※23）で出没が確認され、釜石市では小学校付近での目撃が報じられた（※4）。</li>
        <li>山形県・秋田県・福島県: 山形県南陽市川樋（※24）および元中山（※25）で記録されたほか、秋田県湯沢市駒形町八面佐野で出没があった（※26）。福島県葛尾村落合では車両同乗中に路肩の草むらに佇む体長約1.5メートルのクマ1頭が目撃された（※27）。</li>
      </ul>
      <h3>関東地方</h3>
      <p>関東地方では群馬県（4件）および栃木県（4件）を中心に活動が記録された。群馬県沼田市下発知町では出没および道路を東から西へ横断する様子が確認され（※28・29）、安中市松井田町八城字二本杉西では柿の木の枝が折られ柿を食べた痕跡、糞、クマだななどの痕跡情報が報告された（※30）。みどり市大畑集会所でも事案が記録されている（※31）。</p>
      <p>栃木県佐野市では体長約50センチメートルのクマ目撃が報じられたほか（※32）、山形町（※33）、閑馬町（※34）、仙波町（※35）と同市内の複数地点で出没が集中した。埼玉県越生町成瀬ではクマ出没の可能性が報告され（※36）、東京都日の出町大久野ではクマ出没痕跡が確認されている（※37）。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県（5件）をはじめ、北陸各県や東海・甲信地域で記録が相次いだ。富山県南砺市では登山道での人身被害（※1・2）に加え刀利での出没があった（※38）。石川県では七尾市松百町で出没の可能性が報じられ（※39）、加賀市栄谷町地内でも記録された（※40）。福井県ではあわら市二面（※41）や南越前町今泉で出没が確認され、南越前町今泉地係では午前11時に成獣1頭の目撃が記録された（※42・43）。</p>
      <p>長野県では中野市金井（※44）および越（※45）、軽井沢町長倉星野（※46）、飯田市中村（※47）や上川路（※48）で出没やその可能性が報告された。山梨県では大月市七保町下和田（※49）や上野原市大椚日野（※50）で出没があり、上野原市大鶴地区日野地内では高速道路北側の側道で発見されたクマが北側の山側へ移動した事案が報告された（※51）。静岡県富士宮市羽鮒（※52）や同市内でクマとみられる2頭の目撃があり（※53）、愛知県豊田市大野瀬町マセド（※54）、岐阜県中津川市福岡柏原の山林（※55）でも事案が確認された。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府（4件）をはじめ各地で記録された。京都府内では京丹波町下山（※56）、綾部市物部町岸田（※57）、京丹後市大宮町奥大野（※58）、舞鶴市三浜（※59）と北部から丹波地域にかけて出没がみられた。また、滋賀県高島市朽木地子原（※60）、兵庫県豊岡市但東町出合（※61）、奈良県下北山村寺垣内（※62）においても出没や目撃が記録された。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で11件、島根県で4件の事案が確認された。山口県下松市では公園でクマのような動物が確認され、公園近くの登山道でもクマが目撃された（※63・64）。岩国市では周東町祖生での出没（※65）および錦町府谷での出没痕跡（※66）、周南市久米でも出没痕跡が確認された（※67）。島根県では雲南市三刀屋町で目撃情報があり（※68）、同町給下の市道土手内線付近で午後6時半ごろに成獣1頭が目撃されたほか（※69・70）、益田市桂平町でも出没が記録された（※71）。</p>
      <h2>リスク評価</h2>
      <p>当日の記録から、リスク要因として以下の特徴が確認される。</p>
      <ul>
        <li>人口圏・生活圏への接近: 山形市や釜石市での学校周辺における目撃事案（※3・4）、五戸町での団地方面への移動事案（※5）、下松市での公園周辺事案（※63・64）、上野原市での高速道路側道事案（※51）など、日常的な人間活動領域への接近が顕著である。</li>
        <li>結実果樹および餌資源利用の痕跡: 群馬県安中市において、柿の木が折られて実が採食され、周辺に糞やクマだなの形成が確認された（※30）。里山や集落周辺における果樹資源の存在が誘引要因となっていることが示されている。</li>
        <li>山岳・森林エリアにおける突発遭遇: 富山県南砺市の大門山登山道付近では成獣による人身被害が生じており（※1・2）、登山道や峠などの山岳域において人間とクマが至近距離で遭遇するリスクが依然として極めて高い状態にある。</li>
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
          <dd>2026年9月24日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-25</dd>
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
