// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月20日 / mode: daily-report / 生成日: 2026-09-21
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-20-daily-report";
const TITLE = "2026年9月20日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月20日に国内で確認されたクマ出没等の事案は計65件であり、北海道、宮城県、岩手県を中心とする北日本から近畿、中国地方にかけて記録された。住宅敷地内での緊急銃猟や港湾施設への侵入など、人間活動圏への接近事例が複数報告されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-21",
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
  datePublished: "2026-09-21",
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
      "title": "2026年9月20日 山形県酒田市 住宅敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9kOHY2S1o3bURlZzlfRUowQ3hLZTY1a2pNaXpKRmh6NWNWVTYwWmdVU1BBR3JyQXNndWRaT1RKTVdVNWRPUC1BbmNfMXBrWno5cC1CUjY0LWpKY2FBcHItRHZNZGFVNmJKZ1JfTTFQd2pIekg00gF6QVVfeXFMTkFMRHo1bVhoOVNnNVByT3FwU1hRUFdsOGxQQ3pyeEVHUThMYUN5NWFwRnJybGdvb3V4aVY1Ukttcjh2LVJocGM3TmR6aGJmTDU3enVHX0VHeGVmS1RMbElGcGxRNFR4eUU0VGxkaVZEQXZaUC1oRXNFaVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山形県酒田市 新橋付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFB6a1U2TGFSRlBaYzEtOWxPUHI5QUU4ZWRDUF9yeDlIWkh6Ni1ocGpEbWc2YU93U1BIdnBzRFdTT1FIRlNfSjM0dm1Mczgza3d0Q2pNb1ptMnk2Y3BjeURZVVNSMWl1enkxdm9fQWxfMNIBdEFVX3lxTE4wR0NHcTJuTlprS1FWclJzTDhRR2FHVTZjSWxkNmI2Z2hYdXMtUm9td3dZOHF1VFB4aG9NOWp5REpMUjU3enVQc25uNkVBXzZ1Z2RSNkQyVWtOem5ZRFBEWmI2aDc4NHB6WTlROEhzc2FuOXJV?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山形県酒田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBjdDRSd3YtbG13QWowVDZZbTdPeHJCZDNBWVZ0d1NLRjhFcmk5eDZUZTBoWjZDb3Rxc3M3R2pQX3JHR2pqQXUxcXktWnc2SmFPdVVZQi1TQkE0bElsR0pWN2VUNUVkaGJYS3RnMVdlRERva0JWWkJCeG9tSkxEZ0U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山形県酒田市 新橋1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxObGtwWmF0c0psV2ptRWdUam9mc2JGZVAyUlRFZ2taZ0oxWThwNXNNZjRnWjZ4SHc4TDJSd3pOWlgwd29WaGNrNkl5RVB1aEFwRjVlSjNIUTA2MDhzN1lFNFVNQlZKMVNveTNJdlhtYXFoOVZ3cExhcGNpYTM3QWhaSjFkaGUzekExTzlmUG1UY2xKX3ZiUVRaZFFrT0R4N0ZpdFR2RG1CRTVZQ2hBQzBSaDVreXdJYmREbEZqYUlVTl9ESnZ50gF0QVVfeXFMTThWOERpSVhaZzVRWVhRUVhNNktNTDdkRENqVlVCSkJ6N2ZCLUZhUUhaeEloTDhhT1YzRWM3WS1vNjRmblJUd3pSS2NVazlnRDA3RnFPZE85S1ZkUFl4dWFmRmdTZjZiMTNiZHRiWUwzVlI2aGw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 宮城県塩釜市 塩釜港の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE92MWdwVTRHMmh1YTNIaHFhMWlnTUhwbnkyeGx5U1RmUXNyWGEzY2ZsQmdVM2pscFMySmJPRjZNY2d6OTVBS0lzYXZ2UGF0V0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 宮城県塩釜市 漁港周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFAxejV1azdTZWlwRDMyTGk0bTZuMjJNOFNZTXBkaUFKVFB1VDEzck5DS1VyRlVFdVM5UUJ1R2tIeU85NVY5LXd4Z0dXVkFyUjktMDVsNTVTcmdpNHZfalU4TFJiNGUyRjFPSkJmaGRla9IBdEFVX3lxTE1HeWZSY1FNakcxdlJibnBKNkI2alBfRnhtcHJGSHc5ZDFuSUN2bVc5UDU2LVJOMC02U0taVmdzRHd5blBYclUzSW81T2gxcm9SbTdmdjhXejJaY2pxeHQ0WnRQR05JLUFLWGUtc0Nrei0tOGhS?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 宮城県多賀城市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9hTU56SDNhRlZUOTN5bVhQcXdhdExCM3c3X1JwYTdJOEdtMmJHenJWSUhOWk5NOUF4SXB5ZzJ3Y3dhLVpsOUJJYWFfaFhpNk9PVkJsdUdhMWRVMi1fZU4zT0NSa0d2TENPSFZUZ19GNmdVcy1zUGxjamx1LWJ1M2s?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 北海道浜頓別町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 北海道厚沢部町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 北海道根室市 酪陽の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbm14NWtibDFlR0c0bEVhVjhBTzNuNXc2cTZaRk83X2dIemhOTENuajZyV0ZIUFQwbVBkNTRQTk10UGtqR3k0NXNfNU12OTF3ZHgtMWcyeVVCd0FEemJkVzI4eTJVNW16azFxOGl2NThCenZEb0wzWTlwZG9xb2JsWGV0N1l4dWhtMlJkN1VzZ05DeWRjbWhpRmduWGhLd3FKXzZvYmt3NVZ3alJ3NXZGem8tTHZkYjgzTFg2Q0VqVkg2WF9rQUM3N0ZadEtrNjNzNUdyQnZ2bk5heFRjMG5UWC0wRlpXT0MzdVluZDM0Q3FNUdIBogFBVV95cUxPdUJDbXJHbUhZdzJuLVFqZEtsNzVUYk56RmY1Q0twbmRRZUVKSGhjcktoelk2Z0hYYUdRNGNrM2ptc2ViX1ltTk5Tem5FQnBVQS1RSnZ5SC1ydmZvYVdBMTQwZFBzbnRGWm5mTS13MVl0VU9reGk3UWllb245NzlON0VjZTBpdHpKdGpmbm5CSjNTWHZKMDhqVk9NdDZva3BFUmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 北海道中頓別町 松音知の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUTlKTG16anRYR05CZHJXV3gyTHRuUWM4RkJ5d2diVHZILUNmY2pYVWpjbnRkLXpUWkhwbVYxTXVjblNxdUpyYUphcm5ybmJBclF4OHp5c21jMzdlX2ZqaWFjVElWSGltU3lGWHF1TkVhWkpjSXdoNlV4aHZtbmZnd2o2RWlBVGNWWkNreUMwaXAyM0FXZEY4MC1ybGzSAaIBQVVfeXFMTXc0cEI2eFN0N2NzOUpiRmk2cThBM1p5MkhuVy1XclZRV3ZZakVZNU5SRWl2bFRuVWpfWl9QcHVkZy1ESkM4SlNfMEliaUdhSk1lRUF0TFJUZFIzYmJOdHloanM1bkF0VTBPTFpKYldPYXk2RTB3eFZNSUFmZ0RvU1NIN3RLQV9vSnVfd19Jdjh3MDhfR2VpdWN5QmFtczdpbGJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 北海道喜茂別町 道路脇駐車場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5zQjZDVEhOQjh3OEtGa2h6QWNuVjZFV3NvckV5c3RXaTktU1habWtCcDFzNnZ3ZFBxS2JsZXdKRmpKZGdzSWtxeW9yTmVkX0ljRVZjMV9oMTZSYXp6ay1hOXdEa0prNzVKWTZMd9IBckFVX3lxTE5BcTFYYk05cTVrMW9EeHU5QlNGNWhPaWJFWURsSlplcDRHcGZsVmpuV2FJRE5CbXFtVzRRQW0teFAzWE9QVUxoVTMxNjk5cXNXWjVnZ0ZnbEZRSEs4YkpWaFJBQWJvTl9fQkNNa1V1NnBLQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 宮城県富谷市 高屋敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdklkMzNYdWhWQ1VjMmc1Mzd6d0NRcnJuWGxVZDEtWExGMkFQTjBEaFJZLTRuMTRWekRqaUFwVktiZDJzX2c4OThNb0YzX0tGcERBUmJoal96dWFVWlRsamliQUVCM2xaZWRzM1lZdUV0aVVOU3E3bUprT2NjT1FtMmo1UG4tVUtiVlNqRTB1TjRGbUduV1pidVc4U1PSAaIBQVVfeXFMT2xia3I3YnNCUm0zaFVIM3kwRUJCbHNOT3BDbmczNTZCNGFEYWQwRzRta2tUb2dwMXZhY2loR052eU10aXVraTVsazdkVTVmdDNqZWtacFBjQUthU2lNY2ZQYXB6cHJ5SnVIeWdYMDYxVzdCbVFkS0EzOUhUUWVTcnJSTGhZcjJFWnBWTnVaX1hHMGtFMXIxb0pRRmFQd2ZTeHhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 宮城県富谷市 富谷高屋敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVDJUUHpEY0NVSy1WcmdRQnNYbzh5bWw0VHVOSFhTWVBlQ0NlTFdNZDM1MmNicmlqUFlvMWM5SDFzNF8yMDR6a3lReTZIeVZ3LUpQa0hPLU9rTUxSbXlhQk1vaW0wQ1dCNlJybzVFcGFhWERlclBwMG11ODAxUXZ5QUJSWTNEc3ZTQ2RRbFE2SGNpNEI3VC0tUlA2RzXSAaIBQVVfeXFMUDNlMS0wbE1Ud3JUMmpWeV9ReS1KWWZXeTEtOHFsa2VqODBIei01Sl9pejJZX1RyUEFab2U5dVdQRlVoRXpQQ3dGNTBuTEwzRVlrUUxCN2k4a2NuMUFNUzRzVGxPVXp0RnNrak9hckNnUldSV09ZcVZNRGVMeWs3bmdSRFlxdlRxVEViOEdfUjJ4M2hWTUJfMkJQcTBRRVB0RGtn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 岩手県盛岡市 岩山入り口付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNWDBKdWI1OFFIUzZtSFVudHRCcnNCRHUzSEs2dWdNSFEwTlN6X0E0czFqTXk3c1dicjBIczJZcVpOUTZnbVB0RUpvN1hxTUNrUTU5UEVMX3dpYS1MOGJkOElMSmtaRXF1Q0xBc0Z6V3g2Q0J6WU1jeGJobmJycXF5emlTMGZZVXM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 岩手県奥州市 胆沢若柳上萱刈窪の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPSDJjZUtEUEJpTE4xSUJ1VEpkQS1CR1pyS0NyZTRrcEJUdEI5WTV6SmtnVURuNTB0UnRTc0dIRjV5WF9IOG8xOFUzUHVid09VM3N4X3NtdXJmX29oa3E1WmdEZlFuQmNaVWJRaGU3cWt6NHg0WFhRVnBKM3FOMDQybTNSdmh1dk9LYU4yYm1PcjV2OENOdjEwS0JxMFpGQnlGV3AyVlBBM0NMRmpCZ1Mzc1dhNWstRnNoRS1MSjEwWjdXcUZ1MVpwdEdBLXZmY2VvOVBKQ3R2YUdldExVSC1SbkZ2cFRlZ1IzVHlJTnJlRUFQQdIBogFBVV95cUxPeXNhOE5XMEliTXlQamxFYS0tb3BqLWNYUEJQRUlieVRHVnJ0Qk9Sd05pLW1oUUxkbGRlVWhQdHp2VDlKcjFMbWlFNE4zT2poZTdFcFhIZHU1NUVqQ3V1VVJnU0RLemVoUURJMExURlFWQ3ZSMXlEUVgwbEVmbFIzMi1halZ5TzhCUlZJMDhYSVc4c0hCY1ZibzZTTDFtWjVFSFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 岩手県盛岡市 住宅地近くの緑地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0ycC1CWTJYZ1gxMXhFZFlxdnVvTk9fVFNUb0JLa2tvRTRkSEcxWV92NnlzYTlKMjZwSXpwMmh6aFgyLXlmRVpMTmZodGhvS2J5eE1PeFk3VGpXZFJidVlobg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 岩手県盛岡市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNd0pHUFF0cnlGS0pYbjhZTUJIYm5SS3hkYzFtUWFna0hxSEh0T0syLVVDLU9DWTJjRWdpTFlveE9WLWhEQmNHOGxIOWRuazVqR0FoeUtaelBMalhnTWJqM3hKOEVKN1hYUmtUZThCMnRwZ3BndVdqWFBLOXRCREJYTHpYdXVfRDQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 岩手県盛岡市 四十四田ダムの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5rUFpqTWxaTDFQTEhBWXpkOUZnOFRlbGd3YTQ2bTNCUlhRMy1rNDhObzR0TE14aVd3b3hUUHhWMzBfQjA2Y19UMWlfREZsNmNQU2dJQkc2Y2lXR05oTUJmVg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 福島県福島市 福島県福島市松川町水原狼ケ森の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 福島県福島市 松川町水原狼ケ森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNeDBrdGstNDAzZGVraHRha1k1Qm11Zmp0MXJBQ1UyUW5keFVzdFNWbEFiYkttVkQ1VGlSU2dvM3BUclpDeTlEWGVXTDJYVFo2UEtCSURHQklRM1AzWUtCaDl6X2JldW9naVk4NWZ0VEVTMWFpa05Na2h2RWN6Qk13YUFyVjlVRGlYWGF4OXJFQUNWMDdjeHozQnhQODRZSzdlQnJ0b2pYc0NWbC1KQ1BVVWRKZ0VZUHo0ZlNHcS1PbFJ0MzJnRWV5VWk1SnJCdW1mSjF1enlaTENkVE1XU3JxSEgxaDRkZ3ZqY0ptMk9TVThlZ9IBogFBVV95cUxNRjE4dDVjUXpsNWs5ME1XOXhzRjVuTzBKY015Y2dUdEQzOWwxS3ZyWm5seHJmM2dCRkw5akdMbGFEdmdURWQyd0Q5Wkg4VndkUkhNTFQ5WElLNTJ1X2l2SFRUN1ZBWTRQMzZnYjRVcWVnNE5SOTlod3JxQVVjeV9MaWYxUmk5MDZUU3Uwc2FqaGd2ZnczN1lRNlh0SjVHdTJ1V0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 福島県福島市 松川町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1oaVh4d192T0lwMENlMks4NEJDd2Vnb2xlbGhnWGZ6a0NRMkoxRVg2blhkRGRraEJuRkFWWmNBY29NTnpIdHZHTEpYRTUyUV9WOGpkT3BHcUhjanFiWHVqQkluZ05aaEFUQ0tfVjdtVUJ2UG5wUDV5ODJOSdIBgAFBVV95cUxPRUN0X3VxNDdEbVVsR1F6RlAtTVZEWm04MmhITEtTczFvRVdVWDBZRVlfTk51MHM3SnpqcW5qTHFYYXdqRjJBQ1pkdVBvQ0M4T1pvTTFaVFVKS2dyb3dOU1B3ZFNsNlhmMzdpSm1JWEhmQjNaN3BzUHQ3ejlZWEhUdQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 秋田県秋田市 雄和戸賀沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQUF2M0RmMWdfak9RRzY2V2diZHlpSlB5S3N6bzh1YWFGWE5BSS1PNEJ5ZmYxUndxeVZRU3dYMVllZjV4aDN6djBYYVlpNWJaVkdaZmJ5STIybFhTOXR0TUxIejJxVlB5dklKVDdFdXRhTG1sRFRZRmh6Vmx4YVhyaF84cGx4VEVsdVkwekpjT3AyckhOTl82Yi0wODXSAaIBQVVfeXFMTUxHelIycE91VDNDZmQ2QnA2YmZpZXJPdmVDMzUwZTl5MEUxQ2tTZTJLSVp1S2pUdTBvQlBENk9tOU45NUJ3QXAtN2JKeE1KSndzd1VDOHFRT09SdGVHMmdkS3dubGJZU3VIZk5ZcTZ3M2Vqd2g3WlBFOHVXc05FczB6MkpuY2FfTDJ4Z05oLWhRbjdhSHBYcm5yZFZhQV9lbVRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNcDhwNkxCZm9jS3BHNG5EdGNtM21Fb0QwNTBFR1VSbEdwZkJBUjVodEctdWpQbnAwUUJuZTlRWGxlemg0U3VoUDVfaXJodld3UUVHV0VyZFR6MUdyWVA0cGZFSkdkNWZnTFhmUWRWVUlPTHdQTWJZQnlOUGtLWTBfaGN0SEw3OGZJd1ljQ1MzdU9tSk04Zy1ySDBEeS1ycWIxZC1La29pc3ozY3NjdXZpVmdwdjFROU5WMVFVaEFzUlhMNS1RaUZ0RTBWcmZXMkNmTXl1bWp2M29pNDM2cXVxODE0TTV4dTlRNWJjVW9jSHA2Z9IBogFBVV95cUxNSXU3SlhNNjFDRFBlMzRPYndqalpPQWkxcnhESVYzZjBfcGE5Y0dMTXprMDRWWjM2NlVWNnRnd2tRVHduQ2FLczk5eU8teVpBTWk0cEg3NnoxZkFuQUpDVWgwMHA3V2RJR0UzZzNhY2RnamNTb1l6LU55S1R6eGZJVF9FZHM0MUtYckJJU2lURjdfQll0ajV0Ni1XQlk5OGgtNVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 栃木県佐野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE56R3NYZDVxR1hxcktteDFmblZYRkpKMlhVVXU2aVVoU0wxU0o3bjFrNGRDRHlCREhxTDhtUDZMbUptb0JpVWZ5N0pILTFWcWtvaUN1UFhMa2xiZDg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 長野県安曇野市 穂高有明の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSnE3c2daQWJ1SW9iZEsxQlk5d2VaaG5WWnpaMkZwa3ZSandKY29nTFZDUUdjSmFqZVVEcFZWaVAtcUc4Z3RIamR3RVVBT0dHMzNWY2dYeURJS2hIZ1hUTUEtZnlockJLc3Vaa1A4VkpsV3JxaGR1bG45c3RJWUNMZWVsVjByV0VQR0E4NG54ZTFWNzQ5YklkYVlqWmzSAaIBQVVfeXFMTUpjTTBqYkNvTXVadm1LNWlmU0R5WFNCOWg2S3dNai12UmY3QWh4c1hjOFoyWHpadkN1c1ZxV1BhdW13YVhzSVlBT0UyQTRWUDhXY1N2eVJ3NXJVa0RNdF9FZEd6anJCUklUbjgxYi02eFJsa2p2MjB3ZmF4LU4xNnM2RHVEX09OLTFIZlI0cW5pYjNodFdpNG5xMU4xTGpERzZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 新潟県糸魚川市 徳合の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVkFDc3Rrd002Skg0WmRObnA4dXB5TVMyY2RrUEZfT0tTanI3eDByaEVhRTBPYXpoWU4taDJxQ1RkQ2dhWXpRTlYxUUhWaWdmdUFTQVV2S0tUYU1ETWRYZVd2ZFJvNEFxLU1aS2lkWlg4bUstWTcyR0xoY1o5NTYwM3VDeVF3enN6OHpKZUtMZmdENWZaOVZvTWJxaXfSAaIBQVVfeXFMTmpkTmJ1WjlWSTF4ZE1UVnNaSHVzQzBlNGlhSXpmNTdCeW5wUDNoOEpDMVdzRVBBT1RxYk4ycVY2UE9OcVZJWDBlVlZfc1VFSzhCNFpyRm5MeTJCNUdDektkeHRiWU4zdEdBbm1HekVVb3JUeUQ5YlBPRzkzMGpvUTVxSlN3ai0tSjJIME1IaXYwTG1Rc200SDlqbC1zVUpfT0Z3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 愛知県豊田市 折平町西屋敷の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 京都府京都市 嵯峨清滝月ノ輪町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxORzZGRmVKTklLXzBQME0ybUV2bnVRcmtuc2NKSzlkSXJDSm51ZlpJYlFKeWFnQTZ6TldLWHpMcG9ocnhJX0RsZnZCV0VOb29Ta2xwZkJXc0lCbk5ueV84alpVQWxZYmRuTUJGVXpCUjZYZThfWlc2RUhfX0RlUm1aV0hpcXV4QWhHOHpiV1VGV2g2aWFBcThucUFCQlVUNWpzcWfSAaIBQVVfeXFMTkc2RkZlSk5JS18wUDBNMm1Fdm51UXJrbnNjSks5ZElyQ0pudWZaSWJRSnlhZ0E2ek5XS1h6THBvaHJ4SV9EbGZ2QldFTm9vU2tscGZCV3NJQm5ObnlfOGpaVUFsWWJkbk1CRlV6QlI2WGU4X1pXNkVIX19EZVJtWldIaXF1eEFoRzh6YldVRldoNmlhQXE4bnFBQkJVVDVqc3Fn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 京都府京丹後市 網野町新庄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNMzYzbC1fdjh1SlFMMU1mTTl6OUdnSzlXamN1OVdsVWFkdEh5SHpZRndaLUhvQjNKUUFyY0lqR01BM29hTlo2eWk3aTV1MmUyUzNFX2gxb1RnaTB3SUo1MzJiRFFIWFVFYm82UlJWUzJ5OE02UGRsS01EREt2R2FKOWcxX2ZXZkF2SGtHSmJkek9UQjVtc2Rsd09KdDFDclZ2bnfSAaIBQVVfeXFMTTM2M2wtX3Y4dUpRTDFNZk05ejlHZ0s5V2pjdTlXbFVhZHRIeUh6WUZ3Wi1Ib0IzSlFBcmNJakdNQTNvYU5aNnlpN2k1dTJlMlMzRV9oMW9UZ2kwd0lKNTMyYkRRSFhVRWJvNlJSVlMyeThNNlBkbEtNRERLdkdhSjlnMV9mV2ZBdkhrR0piZHpPVEI1bXNkbHdPSnQxQ3JWdm53?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 京都府京丹波町 質志の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOX0tyVjJ4ZkQyNlBhb3U0c2gwQjJrN0hZUWlIWmVaanpsZklwem9oeUU5VV9xZl9zTmpOMDVidG9heHNycGQ1MzI0dkZMR2hZQUFabUZZdTJyN1Y5ZXdiNlN0bHlzTFFlN2ZLV2M1VUhlbEVOeGpEb2RCQmQwaUFJRXVsck1DZk8xX1hURThBclIyVkpnYzhFdmc5SHpOSjVoUVpueEwtbE90azhFRjZXZlFZTFhSR1k0RW1xZkVHcVFiQ01nUVdyMTlnTDU4Vnc4Yy1ldTdoYmtpSm9UaGw1cFNITW9PZUROQmVreXFWODZKZ9IBogFBVV95cUxOb2RLUkdOc1VwWVEzUG5zc0VfbFMtanNaUFkxRVdtLXJTcUhicU4ybDk1cG9MRC1KNjJCUmFFYlBWRWY4eldmZkx4M2lQZXZfUnVkMUFnRnJULTlpOGtkbnZfb2dxZV9mV2Y4Sjg5dXRNRW4tWUx5d1hpT2JGVnFmZ3hzbTI1VFZQbmZfaVdSbVlrMDYtUXhidVNTR2QxU0dqR3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 奈良県御杖村 菅野の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 奈良県上北山村 西原の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 和歌山県紀美野町 毛原中地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 大阪府豊能町 余野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaUFDRThMZ0VRVE1hQjJPc3p1ZWtVbzZObXlrbFhOejV1dkRaVHdXV1NTMFFvdkM3SGExMnJVS2lwaUVFcXpxOFZfSGtzRXB6eFhFUnRlT2ViMlNMb2s4d1lkUXRBQ2ZzSGt3OXU1M0dJS2tFelhFSUpTX2JQZk1fYkFaRWRwRWtOY1VCcEZQZXRxNGVrN01GLU5fdXLSAaIBQVVfeXFMTjNEclhUa2p0REY4NVhyb0dBeFN2amVSc1dNZnhyajVHZFRreXVnNkFnNVg2S09OMHNyMGtUQ3M4ZmJ1SFVPV2tTOTc3VW12Q1h4UHpLWml5T1FMMml5UUx1X0lIQ29wQUVaOS1ZUXE0ZGp5a2Y2enRXMHdXSTFlMkdGWGNESUE0NDBJaVhTaUFVdjVQMFBoYS1KTDBxdmY1dG1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山口県岩国市 錦町大野の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月20日 山口県柳井市 柳井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPQXh1dDhaYjlyazB1bXByTnJMNkRZeWVCMTdicmNWdVNOb2dhNE1sQ1hxbTdmMHphUkJIRDFBZ09sOGtrNC0wTExhVURHYnVCZ0NmNmYwalZkRURab1NlZm42bEZob2Z0OC1JelNrZ1kyNkJLVnQxUVJ2TEgtRjBFOXRMbGRtRGdXNWNUWDloV3BPbktjcE5iUE9sTGJEdFUtT3NpNXA1UDVlcHBfRV8wbmNvTm1RdmxyUkEzOWJ5Z1RMcThuaVRZTjlqSGY0RVZ1M2tyS0hsN2lUdjBMcngtOThwM202cnNRNmlLYXE0N0loZ9IBogFBVV95cUxPdE9WUFl5NjVVVTlDRWE5NFNYMWVVbzd0SUEyVVp0TnpoZWtyV0JKaHVZYnVmanR4aXlEbHNrM1BpeFpySXlHaXkzVzBtbUg1dS1aUWJhTGx0VW9CcGRKMnF0bF83NEhfRFEyV3A3ZVpfQk1Na1pQYktORWx6Xzczek5uOUJIbWlVRWJ6NnBVRU14RVliTkpVWmlOazlsNFJ2aEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山口県萩市 下田万の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdkhuWlZ1MTFWa0xDT0VhUW5JOWtNQWd1Z2xKWjhCQ1JBMXVYQ2F4TF9lUnMtNVY1alJvaG5KOTVRXzRTOWIxV2xDYUN0dHJKc2RzV1hWajV2bnJZRGNKSU5Wby1vd0J0SmN5OEFuMkNKRlg3MVA0Y0ZrZkprMFpaTlpNRWNNTHV1X3VzdDdYZWFZclhFREVtd1pQaDPSAaIBQVVfeXFMTXBzQ2Fxd0c0RnFFUDRWNC1wallVbjZjOHdldWxiWktnaHRWTUlkMWliWGVRMGhFVE9MWkNrSHdVc3FXNWVnSFRvY2RBWHJfbEZDdGZSa3VlcGpwYWcyZEFvWWMwZmJqMWJMX3hFa2ZyN1hiQXhxNEdrcGtZTS1rektFNE9PdnhsU3hVQ0xvLXdaNkVOdWdhLWhtNXpFNllNNTNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山口県山口市 徳地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9lZ0k1TnlkaHRmeDFWNm5RS093b05FRGZlUEtXOXlGcndacGVRWks3dDZtMG5PaTdTUGhTdGF6UmJmZl96cUVzUlJ1b0U3NDUtSThORnhYS0lLZXc2THFQY0d0emxwRzhXU2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 山口県山口市 阿東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9aUGM0akc4a09famxiYVV4TmE1amtXYmlpTFRiTzRvbmhfQWZfMm1BRXNrYWgyZTlQM2FXQ0w3RWp6bUltcmtNb044bkFDSkhPZDJRdmU0TGE4U1lpMWpYTzZIMmdMbEs0dUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 島根県益田市 下波田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUGpZRnRWSDV6Vk9fZy16ZmViUHgzREZreTVQcnhTY2xSeDJTWG96UDVlSG9VdDdsZkp6enlOMXBoVmNYMXg0eUV3RkZzTmppSEJaeTB1cno1X3NMekt3QkpfWGNKR3haTFJCSGZlZW5BbzE0eVBrWW5wcWZULUl0aEktU0QtTnJYbHpaVVFCOWk3V2pWZ0s2NXVLb1PSAaIBQVVfeXFMUHBxeUxSNmxiUElWY2hHOWd6YjNlWnZfMnM4Nm90d29KR1hRbDNqd2dZbXdWNUVUOWtRUGZiS1BzUlRhLWRON2M2NWtpc1p2OUJTUlo5c0F3cmd1cFF4bUJfQTRnXzFuLUJtSWRCWUI0SGZScDlTSTRiSkV3MnhVMm4xZDhLRVRYc09nLVlka0ZWWXlTeVhIdW9Kdk8yNUx5cFpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月20日 島根県益田市 益田市波田町、市道下波田寺の前線付近の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":14},{"pref":"宮城県","count":13},{"pref":"岩手県","count":11},{"pref":"山口県","count":5},{"pref":"山形県","count":4},{"pref":"福島県","count":3},{"pref":"京都府","count":3},{"pref":"島根県","count":2},{"pref":"奈良県","count":2},{"pref":"和歌山県","count":1},{"pref":"愛知県","count":1},{"pref":"東京都","count":1},{"pref":"長野県","count":1},{"pref":"新潟県","count":1},{"pref":"秋田県","count":1},{"pref":"大阪府","count":1},{"pref":"栃木県","count":1}];

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
        <span>対象期間: 2026年9月20日</span>
        <span>·</span>
        <span>公開: 2026-09-21</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={65}
        periodLabel={"2026年9月20日"}
      />

      <h2>出没件数の集計と概況</h2>
      <p>本報告の対象期間において集計された事案の総件数は65件である。事案が確認された地域は、北海道および東北地方に集中しているほか、中部、近畿、中国の各地方にも及んでいる。都道府県別の件数は北海道が14件と最も多く、次いで宮城県が13件、岩手県が11件、山口県が5件、山形県が4件、福島県が3件、京都府が3件、島根県が2件、奈良県が2件、和歌山県が1件となっている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な確認自治体</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">14件</td><td className="px-3 py-2 text-xs">浜頓別町、厚沢部町、根室市、中頓別町、喜茂別町</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">13件</td><td className="px-3 py-2 text-xs">富谷市、塩釜市、多賀城市</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">盛岡市、奥州市</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">酒田市</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">福島市</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">岩国市、柳井市、萩市、山口市</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">京都市、京丹後市、京丹波町</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">益田市</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">御杖村、上北山村</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">1件</td><td className="px-3 py-2 text-xs">紀美野町</td></tr>
          </tbody>
        </table>
      </div>
      <h2>主要事案の動向</h2>
      <p>当日は、人為的構造物や生活圏内への接近に伴う駆除や特異な出没が複数記録された。山形県酒田市では住宅敷地内でクマが目撃され、緊急銃猟による駆除が行われた（※1）。同市内では新橋付近において体長1.5メートルのクマ1頭が駆除されたほか（※2）、クマ1頭が駆除された事案（※3）や新橋1丁目での目撃事案（※4）が報じられている。</p>
      <p>また、宮城県塩釜市では沿岸部の特異な事案として、塩釜港において漁船にクマが居座る事態が確認された（※5）。塩釜市の漁港周辺では初のクマ目撃となり、漁船に居座った後に海へ逃げた事案も報じられている（※6）。さらに多賀城市では、小学校近くでの目撃情報が報じられた（※7）。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では計14件の事案が確認されている。浜頓別町では、住宅の裏庭で落ちているクルミをヒグマが捕食しており、住民に気付いて南側へ逃走した（※8）。厚沢部町では捕獲が記録されている（※9）。このほか、根室市酪陽（※10）や中頓別町松音知（※11）で出没が記録された。また、喜茂別町の道路脇駐車場において体長2メートルのクマが確認された事案が報じられている（※12）。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県、岩手県、山形県、福島県を中心に多数の記録が集積した。宮城県では塩釜市や多賀城市の事案に加え、富谷市高屋敷（※13）および富谷高屋敷（※14）で出没が記録された。</p>
      <p>岩手県では計11件が記録されており、盛岡市岩山入り口付近の斜面草むらにおいて親子とみられるクマが目撃された（※15）。奥州市胆沢若柳上萱刈窪ではクマの痕跡が確認されている（※16）。盛岡市内では、住宅地近くの緑地での目撃（※17）、釣り中に泳ぐクマの目撃（※18）、四十四田ダム付近での目撃（※19）がそれぞれ報じられている。</p>
      <p>福島県では、福島市松川町水原狼ケ森において体長約1メートルのクマ1頭が目撃された事案（※20）や同所での出没（※21）、同市松川町でクマが市道を横切って山林へ向かった事案（※22）が記録された。秋田県においては、秋田市雄和戸賀沢で出没が確認されている（※23）。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では、東京都日の出町大久野においてクマ出没の可能性が記録された（※24）。栃木県佐野市ではクマ3頭の目撃が報じられている（※25）。中部地方では、長野県安曇野市穂高有明（※26）や新潟県糸魚川市徳合（※27）で出没が確認された。愛知県豊田市折平町西屋敷においても記録が確認されている（※28）。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府で3件、奈良県で2件、和歌山県で1件などが記録された。京都府内では、京都市右京区嵯峨清滝月ノ輪町（※29）、京丹後市網野町新庄（※30）、京丹波町質志（※31）でそれぞれ出没が確認されている。奈良県では、御杖村菅野にて16時00分（※32）、上北山村西原にて15時45分（※33）に記録された。和歌山県紀美野町毛原中地区ではクマとみられる動物の目撃が記録され（※34）、大阪府豊能町余野では出没の可能性が報じられている（※35）。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で5件、島根県で2件の事案がある。山口県岩国市錦町大野では、有害鳥獣捕獲許可による捕獲が記録された（※36）。このほか山口県内では、柳井市柳井での出没の可能性（※37）、萩市下田万での出没（※38）が記録され、山口市徳地での目撃の頻発（※39）や山口市阿東の県道での目撃（※40）が報じられている。島根県益田市では、下波田町での出没（※41）のほか、益田市波田町の市道下波田寺の前線付近において午前8時20分ごろに1頭が目撃された（※42）。</p>
      <h2>リスク評価</h2>
      <p>本日の記録から観察される動向として、住宅周辺や市街地縁辺部、さらには港湾施設に至るまで、人間の居住・活動領域への接近が顕著にみられる点が挙げられる。北海道浜頓別町では住宅の庭でクルミを捕食する行動が確認されており（※8）、秋季における堅果類の利用が個体を人間の居住空間近傍へ誘引する要因となっている。</p>
      <p>また、山形県酒田市の住宅敷地内では緊急銃猟による駆除が実施され（※1）、宮城県多賀城市では小学校近隣での出没が報じられるなど（※7）、人身への危険が強く懸念される空間での遭遇リスクが生じている。塩釜市において漁船上に居座った事例（※6・5）や、岩手県盛岡市において遊泳する個体が目撃された事例（※18）に示されるように、水域や港湾といった特異な環境へ進入する個体も存在しており、従来想定される森林境界にとどまらない警戒とモニタリングが求められる。</p>

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
          <dd>2026年9月20日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-21</dd>
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
