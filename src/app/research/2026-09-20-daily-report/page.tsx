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
const TITLE = "2026年9月20日 国内クマ出没事案の時空間分析と動態報告";
const DESCRIPTION = "2026年9月20日に全国で集計された49件のクマ関連情報に基づき、市街地侵入に伴う緊急銃猟事例や港湾部での特異行動を含む時空間分布を報告する。人身被害は確認されなかったものの、住宅敷地や小学校近傍など人間活動圏への侵入が複数報告された。";

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
  dateModified: "2026-09-21",
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
      "title": "住宅敷地内でクマ目撃、緊急銃猟で駆除（山形県酒田市）",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9kOHY2S1o3bURlZzlfRUowQ3hLZTY1a2pNaXpKRmh6NWNWVTYwWmdVU1BBR3JyQXNndWRaT1RKTVdVNWRPUC1BbmNfMXBrWno5cC1CUjY0LWpKY2FBcHItRHZNZGFVNmJKZ1JfTTFQd2pIekg00gF6QVVfeXFMTkFMRHo1bVhoOVNnNVByT3FwU1hRUFdsOGxQQ3pyeEVHUThMYUN5NWFwRnJybGdvb3V4aVY1Ukttcjh2LVJocGM3TmR6aGJmTDU3enVHX0VHeGVmS1RMbElGcGxRNFR4eUU0VGxkaVZEQXZaUC1oRXNFaVE?oc=5"
    },
    {
      "title": "クマ1頭を駆除（山形県酒田市）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBjdDRSd3YtbG13QWowVDZZbTdPeHJCZDNBWVZ0d1NLRjhFcmk5eDZUZTBoWjZDb3Rxc3M3R2pQX3JHR2pqQXUxcXktWnc2SmFPdVVZQi1TQkE0bElsR0pWN2VUNUVkaGJYS3RnMVdlRERva0JWWkJCeG9tSkxEZ0U?oc=5"
    },
    {
      "title": "体長1.5mのクマ1頭を駆除（山形県酒田市新橋付近）",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFB6a1U2TGFSRlBaYzEtOWxPUHI5QUU4ZWRDUF9yeDlIWkh6Ni1ocGpEbWc2YU93U1BIdnBzRFdTT1FIRlNfSjM0dm1Mczgza3d0Q2pNb1ptMnk2Y3BjeURZVVNSMWl1enkxdm9fQWxfMNIBdEFVX3lxTE4wR0NHcTJuTlprS1FWclJzTDhRR2FHVTZjSWxkNmI2Z2hYdXMtUm9td3dZOHF1VFB4aG9NOWp5REpMUjU3enVQc25uNkVBXzZ1Z2RSNkQyVWtOem5ZRFBEWmI2aDc4NHB6WTlROEhzc2FuOXJV?oc=5"
    },
    {
      "title": "新橋1丁目でクマ目撃（山形県酒田市）",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxObGtwWmF0c0psV2ptRWdUam9mc2JGZVAyUlRFZ2taZ0oxWThwNXNNZjRnWjZ4SHc4TDJSd3pOWlgwd29WaGNrNkl5RVB1aEFwRjVlSjNIUTA2MDhzN1lFNFVNQlZKMVNveTNJdlhtYXFoOVZ3cExhcGNpYTM3QWhaSjFkaGUzekExTzlmUG1UY2xKX3ZiUVRaZFFrT0R4N0ZpdFR2RG1CRTVZQ2hBQzBSaDVreXdJYmREbEZqYUlVTl9ESnZ50gF0QVVfeXFMTThWOERpSVhaZzVRWVhRUVhNNktNTDdkRENqVlVCSkJ6N2ZCLUZhUUhaeEloTDhhT1YzRWM3WS1vNjRmblJUd3pSS2NVazlnRDA3RnFPZE85S1ZkUFl4dWFmRmdTZjZiMTNiZHRiWUwzVlI2aGw?oc=5"
    },
    {
      "title": "初のクマ目撃、漁船に居座り海へ逃げる（宮城県塩釜市）",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFAxejV1azdTZWlwRDMyTGk0bTZuMjJNOFNZTXBkaUFKVFB1VDEzck5DS1VyRlVFdVM5UUJ1R2tIeU85NVY5LXd4Z0dXVkFyUjktMDVsNTVTcmdpNHZfalU4TFJiNGUyRjFPSkJmaGRla9IBdEFVX3lxTE1HeWZSY1FNakcxdlJibnBKNkI2alBfRnhtcHJGSHc5ZDFuSUN2bVc5UDU2LVJOMC02U0taVmdzRHd5blBYclUzSW81T2gxcm9SbTdmdjhXejJaY2pxeHQ0WnRQR05JLUFLWGUtc0Nrei0tOGhS?oc=5"
    },
    {
      "title": "漁船にクマが居座る（宮城県塩釜市塩釜港）",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE92MWdwVTRHMmh1YTNIaHFhMWlnTUhwbnkyeGx5U1RmUXNyWGEzY2ZsQmdVM2pscFMySmJPRjZNY2d6OTVBS0lzYXZ2UGF0V0E?oc=5"
    },
    {
      "title": "小学校近くでクマの目撃情報（宮城県多賀城市）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9hTU56SDNhRlZUOTN5bVhQcXdhdExCM3c3X1JwYTdJOEdtMmJHenJWSUhOWk5NOUF4SXB5ZzJ3Y3dhLVpsOUJJYWFfaFhpNk9PVkJsdUdhMWRVMi1fZU4zT0NSa0d2TENPSFZUZ19GNmdVcy1zUGxjamx1LWJ1M2s?oc=5"
    },
    {
      "title": "クマ出没（宮城県富谷市高屋敷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdklkMzNYdWhWQ1VjMmc1Mzd6d0NRcnJuWGxVZDEtWExGMkFQTjBEaFJZLTRuMTRWekRqaUFwVktiZDJzX2c4OThNb0YzX0tGcERBUmJoal96dWFVWlRsamliQUVCM2xaZWRzM1lZdUV0aVVOU3E3bUprT2NjT1FtMmo1UG4tVUtiVlNqRTB1TjRGbUduV1pidVc4U1PSAaIBQVVfeXFMT2xia3I3YnNCUm0zaFVIM3kwRUJCbHNOT3BDbmczNTZCNGFEYWQwRzRta2tUb2dwMXZhY2loR052eU10aXVraTVsazdkVTVmdDNqZWtacFBjQUthU2lNY2ZQYXB6cHJ5SnVIeWdYMDYxVzdCbVFkS0EzOUhUUWVTcnJSTGhZcjJFWnBWTnVaX1hHMGtFMXIxb0pRRmFQd2ZTeHhR?oc=5"
    },
    {
      "title": "クマ出没（宮城県富谷市富谷高屋敷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVDJUUHpEY0NVSy1WcmdRQnNYbzh5bWw0VHVOSFhTWVBlQ0NlTFdNZDM1MmNicmlqUFlvMWM5SDFzNF8yMDR6a3lReTZIeVZ3LUpQa0hPLU9rTUxSbXlhQk1vaW0wQ1dCNlJybzVFcGFhWERlclBwMG11ODAxUXZ5QUJSWTNEc3ZTQ2RRbFE2SGNpNEI3VC0tUlA2RzXSAaIBQVVfeXFMUDNlMS0wbE1Ud3JUMmpWeV9ReS1KWWZXeTEtOHFsa2VqODBIei01Sl9pejJZX1RyUEFab2U5dVdQRlVoRXpQQ3dGNTBuTEwzRVlrUUxCN2k4a2NuMUFNUzRzVGxPVXp0RnNrak9hckNnUldSV09ZcVZNRGVMeWs3bmdSRFlxdlRxVEViOEdfUjJ4M2hWTUJfMkJQcTBRRVB0RGtn?oc=5"
    },
    {
      "title": "住宅地近くの緑地でクマ目撃（岩手県盛岡市）",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0ycC1CWTJYZ1gxMXhFZFlxdnVvTk9fVFNUb0JLa2tvRTRkSEcxWV92NnlzYTlKMjZwSXpwMmh6aFgyLXlmRVpMTmZodGhvS2J5eE1PeFk3VGpXZFJidVlobg?oc=5"
    },
    {
      "title": "釣り中に泳ぐクマを目撃（岩手県盛岡市）",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNd0pHUFF0cnlGS0pYbjhZTUJIYm5SS3hkYzFtUWFna0hxSEh0T0syLVVDLU9DWTJjRWdpTFlveE9WLWhEQmNHOGxIOWRuazVqR0FoeUtaelBMalhnTWJqM3hKOEVKN1hYUmtUZThCMnRwZ3BndVdqWFBLOXRCREJYTHpYdXVfRDQ?oc=5"
    },
    {
      "title": "四十四田ダム付近でクマ目撃（岩手県盛岡市）",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5rUFpqTWxaTDFQTEhBWXpkOUZnOFRlbGd3YTQ2bTNCUlhRMy1rNDhObzR0TE14aVd3b3hUUHhWMzBfQjA2Y19UMWlfREZsNmNQU2dJQkc2Y2lXR05oTUJmVg?oc=5"
    },
    {
      "title": "斜面の草むらに親子とみられるクマ（岩手県盛岡市岩山入り口付近）",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNWDBKdWI1OFFIUzZtSFVudHRCcnNCRHUzSEs2dWdNSFEwTlN6X0E0czFqTXk3c1dicjBIczJZcVpOUTZnbVB0RUpvN1hxTUNrUTU5UEVMX3dpYS1MOGJkOElMSmtaRXF1Q0xBc0Z6V3g2Q0J6WU1jeGJobmJycXF5emlTMGZZVXM?oc=5"
    },
    {
      "title": "胆沢若柳上萱刈窪でクマ痕跡（岩手県奥州市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPSDJjZUtEUEJpTE4xSUJ1VEpkQS1CR1pyS0NyZTRrcEJUdEI5WTV6SmtnVURuNTB0UnRTc0dIRjV5WF9IOG8xOFUzUHVid09VM3N4X3NtdXJmX29oa3E1WmdEZlFuQmNaVWJRaGU3cWt6NHg0WFhRVnBKM3FOMDQybTNSdmh1dk9LYU4yYm1PcjV2OENOdjEwS0JxMFpGQnlGV3AyVlBBM0NMRmpCZ1Mzc1dhNWstRnNoRS1MSjEwWjdXcUZ1MVpwdEdBLXZmY2VvOVBKQ3R2YUdldExVSC1SbkZ2cFRlZ1IzVHlJTnJlRUFQQdIBogFBVV95cUxPeXNhOE5XMEliTXlQamxFYS0tb3BqLWNYUEJQRUlieVRHVnJ0Qk9Sd05pLW1oUUxkbGRlVWhQdHp2VDlKcjFMbWlFNE4zT2poZTdFcFhIZHU1NUVqQ3V1VVJnU0RLemVoUURJMExURlFWQ3ZSMXlEUVgwbEVmbFIzMi1halZ5TzhCUlZJMDhYSVc4c0hCY1ZibzZTTDFtWjVFSFE?oc=5"
    },
    {
      "title": "松川町水原狼ケ森でクマ出没（福島県福島市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNeDBrdGstNDAzZGVraHRha1k1Qm11Zmp0MXJBQ1UyUW5keFVzdFNWbEFiYkttVkQ1VGlSU2dvM3BUclpDeTlEWGVXTDJYVFo2UEtCSURHQklRM1AzWUtCaDl6X2JldW9naVk4NWZ0VEVTMWFpa05Na2h2RWN6Qk13YUFyVjlVRGlYWGF4OXJFQUNWMDdjeHozQnhQODRZSzdlQnJ0b2pYc0NWbC1KQ1BVVWRKZ0VZUHo0ZlNHcS1PbFJ0MzJnRWV5VWk1SnJCdW1mSjF1enlaTENkVE1XU3JxSEgxaDRkZ3ZqY0ptMk9TVThlZ9IBogFBVV95cUxNRjE4dDVjUXpsNWs5ME1XOXhzRjVuTzBKY015Y2dUdEQzOWwxS3ZyWm5seHJmM2dCRkw5akdMbGFEdmdURWQyd0Q5Wkg4VndkUkhNTFQ5WElLNTJ1X2l2SFRUN1ZBWTRQMzZnYjRVcWVnNE5SOTlod3JxQVVjeV9MaWYxUmk5MDZUU3Uwc2FqaGd2ZnczN1lRNlh0SjVHdTJ1V0E?oc=5"
    },
    {
      "title": "クマ目撃、市道を横切り山林へ（福島県福島市松川町）",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1oaVh4d192T0lwMENlMks4NEJDd2Vnb2xlbGhnWGZ6a0NRMkoxRVg2blhkRGRraEJuRkFWWmNBY29NTnpIdHZHTEpYRTUyUV9WOGpkT3BHcUhjanFiWHVqQkluZ05aaEFUQ0tfVjdtVUJ2UG5wUDV5ODJOSdIBgAFBVV95cUxPRUN0X3VxNDdEbVVsR1F6RlAtTVZEWm04MmhITEtTczFvRVdVWDBZRVlfTk51MHM3SnpqcW5qTHFYYXdqRjJBQ1pkdVBvQ0M4T1pvTTFaVFVKS2dyb3dOU1B3ZFNsNlhmMzdpSm1JWEhmQjNaN3BzUHQ3ejlZWEhUdQ?oc=5"
    },
    {
      "title": "クマ出没（秋田県秋田市雄和戸賀沢）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQUF2M0RmMWdfak9RRzY2V2diZHlpSlB5S3N6bzh1YWFGWE5BSS1PNEJ5ZmYxUndxeVZRU3dYMVllZjV4aDN6djBYYVlpNWJaVkdaZmJ5STIybFhTOXR0TUxIejJxVlB5dklKVDdFdXRhTG1sRFRZRmh6Vmx4YVhyaF84cGx4VEVsdVkwekpjT3AyckhOTl82Yi0wODXSAaIBQVVfeXFMTUxHelIycE91VDNDZmQ2QnA2YmZpZXJPdmVDMzUwZTl5MEUxQ2tTZTJLSVp1S2pUdTBvQlBENk9tOU45NUJ3QXAtN2JKeE1KSndzd1VDOHFRT09SdGVHMmdkS3dubGJZU3VIZk5ZcTZ3M2Vqd2g3WlBFOHVXc05FczB6MkpuY2FfTDJ4Z05oLWhRbjdhSHBYcm5yZFZhQV9lbVRR?oc=5"
    },
    {
      "title": "大久野でクマ出没の可能性（東京都日の出町）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNcDhwNkxCZm9jS3BHNG5EdGNtM21Fb0QwNTBFR1VSbEdwZkJBUjVodEctdWpQbnAwUUJuZTlRWGxlemg0U3VoUDVfaXJodld3UUVHV0VyZFR6MUdyWVA0cGZFSkdkNWZnTFhmUWRWVUlPTHdQTWJZQnlOUGtLWTBfaGN0SEw3OGZJd1ljQ1MzdU9tSk04Zy1ySDBEeS1ycWIxZC1La29pc3ozY3NjdXZpVmdwdjFROU5WMVFVaEFzUlhMNS1RaUZ0RTBWcmZXMkNmTXl1bWp2M29pNDM2cXVxODE0TTV4dTlRNWJjVW9jSHA2Z9IBogFBVV95cUxNSXU3SlhNNjFDRFBlMzRPYndqalpPQWkxcnhESVYzZjBfcGE5Y0dMTXprMDRWWjM2NlVWNnRnd2tRVHduQ2FLczk5eU8teVpBTWk0cEg3NnoxZkFuQUpDVWgwMHA3V2RJR0UzZzNhY2RnamNTb1l6LU55S1R6eGZJVF9FZHM0MUtYckJJU2lURjdfQll0ajV0Ni1XQlk5OGgtNVE?oc=5"
    },
    {
      "title": "穂高有明でクマ出没（長野県安曇野市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSnE3c2daQWJ1SW9iZEsxQlk5d2VaaG5WWnpaMkZwa3ZSandKY29nTFZDUUdjSmFqZVVEcFZWaVAtcUc4Z3RIamR3RVVBT0dHMzNWY2dYeURJS2hIZ1hUTUEtZnlockJLc3Vaa1A4VkpsV3JxaGR1bG45c3RJWUNMZWVsVjByV0VQR0E4NG54ZTFWNzQ5YklkYVlqWmzSAaIBQVVfeXFMTUpjTTBqYkNvTXVadm1LNWlmU0R5WFNCOWg2S3dNai12UmY3QWh4c1hjOFoyWHpadkN1c1ZxV1BhdW13YVhzSVlBT0UyQTRWUDhXY1N2eVJ3NXJVa0RNdF9FZEd6anJCUklUbjgxYi02eFJsa2p2MjB3ZmF4LU4xNnM2RHVEX09OLTFIZlI0cW5pYjNodFdpNG5xMU4xTGpERzZ3?oc=5"
    },
    {
      "title": "クマ出没（新潟県糸魚川市徳合）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVkFDc3Rrd002Skg0WmRObnA4dXB5TVMyY2RrUEZfT0tTanI3eDByaEVhRTBPYXpoWU4taDJxQ1RkQ2dhWXpRTlYxUUhWaWdmdUFTQVV2S0tUYU1ETWRYZVd2ZFJvNEFxLU1aS2lkWlg4bUstWTcyR0xoY1o5NTYwM3VDeVF3enN6OHpKZUtMZmdENWZaOVZvTWJxaXfSAaIBQVVfeXFMTmpkTmJ1WjlWSTF4ZE1UVnNaSHVzQzBlNGlhSXpmNTdCeW5wUDNoOEpDMVdzRVBBT1RxYk4ycVY2UE9OcVZJWDBlVlZfc1VFSzhCNFpyRm5MeTJCNUdDektkeHRiWU4zdEdBbm1HekVVb3JUeUQ5YlBPRzkzMGpvUTVxSlN3ai0tSjJIME1IaXYwTG1Rc200SDlqbC1zVUpfT0Z3?oc=5"
    },
    {
      "title": "右京区嵯峨清滝月ノ輪町でクマ出没（京都府京都市）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxORzZGRmVKTklLXzBQME0ybUV2bnVRcmtuc2NKSzlkSXJDSm51ZlpJYlFKeWFnQTZ6TldLWHpMcG9ocnhJX0RsZnZCV0VOb29Ta2xwZkJXc0lCbk5ueV84alpVQWxZYmRuTUJGVXpCUjZYZThfWlc2RUhfX0RlUm1aV0hpcXV4QWhHOHpiV1VGV2g2aWFBcThucUFCQlVUNWpzcWfSAaIBQVVfeXFMTkc2RkZlSk5JS18wUDBNMm1Fdm51UXJrbnNjSks5ZElyQ0pudWZaSWJRSnlhZ0E2ek5XS1h6THBvaHJ4SV9EbGZ2QldFTm9vU2tscGZCV3NJQm5ObnlfOGpaVUFsWWJkbk1CRlV6QlI2WGU4X1pXNkVIX19EZVJtWldIaXF1eEFoRzh6YldVRldoNmlhQXE4bnFBQkJVVDVqc3Fn?oc=5"
    },
    {
      "title": "網野町新庄でクマ出没（京都府京丹後市）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNMzYzbC1fdjh1SlFMMU1mTTl6OUdnSzlXamN1OVdsVWFkdEh5SHpZRndaLUhvQjNKUUFyY0lqR01BM29hTlo2eWk3aTV1MmUyUzNFX2gxb1RnaTB3SUo1MzJiRFFIWFVFYm82UlJWUzJ5OE02UGRsS01EREt2R2FKOWcxX2ZXZkF2SGtHSmJkek9UQjVtc2Rsd09KdDFDclZ2bnfSAaIBQVVfeXFMTTM2M2wtX3Y4dUpRTDFNZk05ejlHZ0s5V2pjdTlXbFVhZHRIeUh6WUZ3Wi1Ib0IzSlFBcmNJakdNQTNvYU5aNnlpN2k1dTJlMlMzRV9oMW9UZ2kwd0lKNTMyYkRRSFhVRWJvNlJSVlMyeThNNlBkbEtNRERLdkdhSjlnMV9mV2ZBdkhrR0piZHpPVEI1bXNkbHdPSnQxQ3JWdm53?oc=5"
    },
    {
      "title": "クマ出没（京都府京丹波町質志）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOX0tyVjJ4ZkQyNlBhb3U0c2gwQjJrN0hZUWlIWmVaanpsZklwem9oeUU5VV9xZl9zTmpOMDVidG9heHNycGQ1MzI0dkZMR2hZQUFabUZZdTJyN1Y5ZXdiNlN0bHlzTFFlN2ZLV2M1VUhlbEVOeGpEb2RCQmQwaUFJRXVsck1DZk8xX1hURThBclIyVkpnYzhFdmc5SHpOSjVoUVpueEwtbE90azhFRjZXZlFZTFhSR1k0RW1xZkVHcVFiQ01nUVdyMTlnTDU4Vnc4Yy1ldTdoYmtpSm9UaGw1cFNITW9PZUROQmVreXFWODZKZ9IBogFBVV95cUxOb2RLUkdOc1VwWVEzUG5zc0VfbFMtanNaUFkxRVdtLXJTcUhicU4ybDk1cG9MRC1KNjJCUmFFYlBWRWY4eldmZkx4M2lQZXZfUnVkMUFnRnJULTlpOGtkbnZfb2dxZV9mV2Y4Sjg5dXRNRW4tWUx5d1hpT2JGVnFmZ3hzbTI1VFZQbmZfaVdSbVlrMDYtUXhidVNTR2QxU0dqR3c?oc=5"
    },
    {
      "title": "余野でクマ出没の可能性（大阪府豊能町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaUFDRThMZ0VRVE1hQjJPc3p1ZWtVbzZObXlrbFhOejV1dkRaVHdXV1NTMFFvdkM3SGExMnJVS2lwaUVFcXpxOFZfSGtzRXB6eFhFUnRlT2ViMlNMb2s4d1lkUXRBQ2ZzSGt3OXU1M0dJS2tFelhFSUpTX2JQZk1fYkFaRWRwRWtOY1VCcEZQZXRxNGVrN01GLU5fdXLSAaIBQVVfeXFMTjNEclhUa2p0REY4NVhyb0dBeFN2amVSc1dNZnhyajVHZFRreXVnNkFnNVg2S09OMHNyMGtUQ3M4ZmJ1SFVPV2tTOTc3VW12Q1h4UHpLWml5T1FMMml5UUx1X0lIQ29wQUVaOS1ZUXE0ZGp5a2Y2enRXMHdXSTFlMkdGWGNESUE0NDBJaVhTaUFVdjVQMFBoYS1KTDBxdmY1dG1n?oc=5"
    },
    {
      "title": "下波田町でクマ出没（島根県益田市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUGpZRnRWSDV6Vk9fZy16ZmViUHgzREZreTVQcnhTY2xSeDJTWG96UDVlSG9VdDdsZkp6enlOMXBoVmNYMXg0eUV3RkZzTmppSEJaeTB1cno1X3NMekt3QkpfWGNKR3haTFJCSGZlZW5BbzE0eVBrWW5wcWZULUl0aEktU0QtTnJYbHpaVVFCOWk3V2pWZ0s2NXVLb1PSAaIBQVVfeXFMUHBxeUxSNmxiUElWY2hHOWd6YjNlWnZfMnM4Nm90d29KR1hRbDNqd2dZbXdWNUVUOWtRUGZiS1BzUlRhLWRON2M2NWtpc1p2OUJTUlo5c0F3cmd1cFF4bUJfQTRnXzFuLUJtSWRCWUI0SGZScDlTSTRiSkV3MnhVMm4xZDhLRVRYc09nLVlka0ZWWXlTeVhIdW9Kdk8yNUx5cFpn?oc=5"
    },
    {
      "title": "下田万でクマ出没（山口県萩市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdkhuWlZ1MTFWa0xDT0VhUW5JOWtNQWd1Z2xKWjhCQ1JBMXVYQ2F4TF9lUnMtNVY1alJvaG5KOTVRXzRTOWIxV2xDYUN0dHJKc2RzV1hWajV2bnJZRGNKSU5Wby1vd0J0SmN5OEFuMkNKRlg3MVA0Y0ZrZkprMFpaTlpNRWNNTHV1X3VzdDdYZWFZclhFREVtd1pQaDPSAaIBQVVfeXFMTXBzQ2Fxd0c0RnFFUDRWNC1wallVbjZjOHdldWxiWktnaHRWTUlkMWliWGVRMGhFVE9MWkNrSHdVc3FXNWVnSFRvY2RBWHJfbEZDdGZSa3VlcGpwYWcyZEFvWWMwZmJqMWJMX3hFa2ZyN1hiQXhxNEdrcGtZTS1rektFNE9PdnhsU3hVQ0xvLXdaNkVOdWdhLWhtNXpFNllNNTNR?oc=5"
    },
    {
      "title": "徳地でクマの目撃相次ぐ（山口県山口市）",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9lZ0k1TnlkaHRmeDFWNm5RS093b05FRGZlUEtXOXlGcndacGVRWks3dDZtMG5PaTdTUGhTdGF6UmJmZl96cUVzUlJ1b0U3NDUtSThORnhYS0lLZXc2THFQY0d0emxwRzhXU2c?oc=5"
    },
    {
      "title": "阿東の県道でクマ目撃（山口県山口市）",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9aUGM0akc4a09famxiYVV4TmE1amtXYmlpTFRiTzRvbmhfQWZfMm1BRXNrYWgyZTlQM2FXQ0w3RWp6bUltcmtNb044bkFDSkhPZDJRdmU0TGE4U1lpMWpYTzZIMmdMbEs0dUE?oc=5"
    },
    {
      "title": "柳井でクマ出没の可能性（山口県柳井市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPQXh1dDhaYjlyazB1bXByTnJMNkRZeWVCMTdicmNWdVNOb2dhNE1sQ1hxbTdmMHphUkJIRDFBZ09sOGtrNC0wTExhVURHYnVCZ0NmNmYwalZkRURab1NlZm42bEZob2Z0OC1JelNrZ1kyNkJLVnQxUVJ2TEgtRjBFOXRMbGRtRGdXNWNUWDloV3BPbktjcE5iUE9sTGJEdFUtT3NpNXA1UDVlcHBfRV8wbmNvTm1RdmxyUkEzOWJ5Z1RMcThuaVRZTjlqSGY0RVZ1M2tyS0hsN2lUdjBMcngtOThwM202cnNRNmlLYXE0N0loZ9IBogFBVV95cUxPdE9WUFl5NjVVVTlDRWE5NFNYMWVVbzd0SUEyVVp0TnpoZWtyV0JKaHVZYnVmanR4aXlEbHNrM1BpeFpySXlHaXkzVzBtbUg1dS1aUWJhTGx0VW9CcGRKMnF0bF83NEhfRFEyV3A3ZVpfQk1Na1pQYktORWx6Xzczek5uOUJIbWlVRWJ6NnBVRU14RVliTkpVWmlOazlsNFJ2aEE?oc=5"
    },
    {
      "title": "道路脇駐車場に体長2mのクマ（北海道喜茂別町）",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5zQjZDVEhOQjh3OEtGa2h6QWNuVjZFV3NvckV5c3RXaTktU1habWtCcDFzNnZ3ZFBxS2JsZXdKRmpKZGdzSWtxeW9yTmVkX0ljRVZjMV9oMTZSYXp6ay1hOXdEa0prNzVKWTZMd9IBckFVX3lxTE5BcTFYYk05cTVrMW9EeHU5QlNGNWhPaWJFWURsSlplcDRHcGZsVmpuV2FJRE5CbXFtVzRRQW0teFAzWE9QVUxoVTMxNjk5cXNXWjVnZ0ZnbEZRSEs4YkpWaFJBQWJvTl9fQkNNa1V1NnBLQQ?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":13},{"pref":"岩手県","count":7},{"pref":"宮城県","count":7},{"pref":"山口県","count":4},{"pref":"山形県","count":4},{"pref":"福島県","count":3},{"pref":"京都府","count":3},{"pref":"島根県","count":2},{"pref":"和歌山県","count":1},{"pref":"東京都","count":1},{"pref":"長野県","count":1},{"pref":"新潟県","count":1},{"pref":"秋田県","count":1},{"pref":"大阪府","count":1}];

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
        total={49}
        periodLabel={"2026年9月20日"}
      />

      <h2>主要事案の分析：住宅地侵入に伴う緊急銃猟と港湾部・生活圏での特異出没</h2>
      <p>本報告期間中、人身被害キーワードに合致する事案は0件であったが、捕獲・銃猟に関する事案が3件、都市部キーワードに合致する事案が4件記録された。特に山形県酒田市では、新橋1丁目周辺の住宅敷地内においてクマが目撃され、緊急銃猟により体長1.5メートルのクマ1頭が駆除された（※1、※2、※3、※4）。住宅密集地における大型個体の滞留は偶発的遭遇による人身事故のリスクが極めて高く、迅速な緊急対応が講じられた事例である。</p>
      <p>また、宮城県塩釜市の塩釜港および漁港周辺において、同地域では初となるクマの目撃が報告された。当該個体は係留中の漁船に居座った後に海へ逃走したことが確認されており、港湾インフラという極めて異例な環境への進入行動が記録された（※5、※6）。さらに、宮城県多賀城市では小学校の近傍において目撃情報が寄せられており、文教・生活圏への接近が確認されている（※7）。</p>
      <h2>地域別出没状況の分析</h2>
      <h3>東北地域</h3>
      <p>東北地域では岩手県（7件）、宮城県（7件）、山形県（4件）、福島県（3件）、秋田県（サンプル1件を含む）から出没が確認され、全国の過半を占める高頻度な出没地域となった。岩手県盛岡市では住宅地近くの緑地での目撃（※10）に加え、四十四田ダム付近（※12）、岩山入り口付近の斜面草むらにおける親子とみられる個体の出現（※13）、さらには釣り中に川や湖沼を泳ぐクマが目撃されるなど水系や緑道を利用した移動が観察されている（※11）。また、奥州市胆沢若柳上萱刈窪では痕跡が確認された（※14）。</p>
      <p>宮城県では塩釜港（※5、※6）や多賀城市の小学校近傍（※7）に加え、富谷市高屋敷において複数の出没情報が記録された（※8、※9）。福島県福島市松川町では、水原狼ケ森付近において体長約1メートルの個体が目撃されたほか、市道を横切って山林へ移動する姿が確認されている（※15、※16）。秋田県秋田市雄和戸賀沢でも出没が報告されている（※17）。</p>
      <h3>北海道地域</h3>
      <p>北海道では全国最多となる13件の事案が集計された。喜茂別町の道路脇駐車場において体長2メートルの大型個体が確認されたほか（※30）、中頓別町の国道脇で体長1.5メートルの個体が目撃され（※29）、同町松音知や根室市酪陽でも出没が報告された。また、東川町の大雪山系旭岳周辺（裾合平分岐から姿見駅方面中間のP14付近）では、登山道上でヒグマのものと思われる糞が発見されており、山岳・山麓から幹線道路・交通結節点に至る多様な空間でヒグマの存在が確認されている。</p>
      <h3>関東および中部地域</h3>
      <p>関東地域では東京都日の出町大久野において1件の出没可能性が報告された（※18）。中部地域では新潟県糸魚川市徳合（※20）および長野県安曇野市穂高有明（※19）においてそれぞれクマの出没が確認された。いずれも山林に隣接する生活域周辺での目撃である。</p>
      <h3>近畿・中国・四国・九州地域</h3>
      <p>近畿地域では京都府で3件（京都市右京区嵯峨清滝月ノ輪町、京丹後市網野町新庄、京丹波町質志）（※21、※22、※23）、大阪府豊能町余野で出没の可能性が1件（※24）、和歌山県紀美野町毛原中の山中で目撃が1件記録された。中国地域では山口県が4件（山口市徳地・阿東、萩市下田万、柳井市柳井）（※26、※27、※28、※29）、島根県益田市波田町で2件（※25）の報告があった。なお、四国地域および九州地域における出没事案の記録は0件であった。</p>
      <h2>出没状況の地域別集計一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">主な確認都道府県</th>
              <th className="px-3 py-2">件数構成</th>
              <th className="px-3 py-2">主な出没環境・特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">13件</td><td className="px-3 py-2 text-xs">道路脇駐車場（体長2m）、国道脇、登山道（痕跡）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県、宮城県、山形県、福島県、秋田県</td><td className="px-3 py-2 text-xs">21件以上（上位県計）</td><td className="px-3 py-2 text-xs">住宅地敷地内（緊急銃猟駆除）、港湾部漁船、小学校近傍、水系</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">1件</td><td className="px-3 py-2 text-xs">山間部近接生活圏（日の出町）での出没可能性</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟県、長野県</td><td className="px-3 py-2 text-xs">各1件</td><td className="px-3 py-2 text-xs">農山村境界部（安曇野市、糸魚川市）での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都府、大阪府、和歌山県</td><td className="px-3 py-2 text-xs">計5件</td><td className="px-3 py-2 text-xs">山間部、郊外地域、町域周辺での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県、島根県</td><td className="px-3 py-2 text-xs">計6件</td><td className="px-3 py-2 text-xs">県道脇、山林近接市道、集落周辺での出没相次ぐ</td></tr>
            <tr><td className="px-3 py-2 text-xs">四国・九州</td><td className="px-3 py-2 text-xs">（報告なし）</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">期間内の報告事案なし</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価：季節要因・餌資源・人口圏接近度</h2>
      <p>2026年9月20日のデータ分析から得られたリスク特性は以下の通りである。</p>
      <ul>
        <li>季節要因と行動圏拡大：秋季への移行期にあたる9月下旬において、個体の移動範囲が拡大しており、河川等の水系を利用した移動（盛岡市での遊泳目撃）や広域的な行動が確認される。</li>
        <li>生活圏・人工構造物への接近：山形県酒田市の住宅敷地侵入や宮城県多賀城市の小学校近傍、さらには塩釜港の漁船への侵入など、従来は想定されにくかった人工空間への出没が顕在化している。</li>
        <li>大型個体の出現と緊急対応の必要性：酒田市で駆除された体長1.5メートルの個体や、喜茂別町で目撃された体長2メートルの個体など、成獣とみられる大型個体が住宅街や駐車場等の開けた場所に現れており、偶発的接触を防ぐ厳格な監視と緊急捕獲体制の維持が不可欠である。</li>
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
          <dd>2026年9月20日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-21</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-21</dd>
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
