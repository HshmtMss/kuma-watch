// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月21日 / mode: daily-report / 生成日: 2026-10-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-21-daily-report";
const TITLE = "2026年10月21日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月21日に記録された国内のクマ関連事案は計79件に達し、栃木県日光市における作業員の負傷事案や、市街地・住宅地への接近事例が複数確認された。本稿では収集されたデータに基づき、重要事案の概要、地域別の出没空間分布、および秋期の生態的要因を踏まえたリスク評価を報告する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-22",
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
  datePublished: "2026-10-22",
  dateModified: "2026-10-22",
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
      "title": "クマに襲われ作業員けが",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1XWGJnb2V5bFdnN051d2JZWmV6bEE4MFczSnlDbjQ1bTZTNURoZ21ybW1JNzhJX1VLYmN1b3ozbGwycnVucDQtNXRDRFBfN0drM0s2Mmk3YnktVnBPYUlOVnlxVkwxQVU?oc=5"
    },
    {
      "title": "市街地でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBINy1fOTV0WDR0X216cGQyQ0lkdGt2MThCLWNYMWFCc3VxQ0t2bTlNaklmZTBiVTVVNzE3YlN0MW9kQTlsS2hNZnBaNlpxY1NFU1VSVl8ySUczNFhKZV9yUEVPT3BQSHh5cnc5dVJfeEtOVW5VR0d6TWFUOFUySVE?oc=5"
    },
    {
      "title": "住宅街でツキノワグマ出没",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOVXZYcTZNM0dxTmZWVUx0YlhkcUd5eUZ3WWZpQWYtUUxzQWtuZThGemdIQVJHcDRXdEpRTHNkRFR4RWFjdmFYX1YxU1hOS19DT05ZVm0tbTE2OE5KMUJsc2ljWFFpWUdSbjlvcUYxbjdpZzFhcnJZYmp6cWhwcnlnS3hrdw?oc=5"
    },
    {
      "title": "クマ出没（小鹿野町河原沢）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPWDZfNl8zVXVYei1iX0pBaGhId1U2YldMMEtmWHBoZ1M0QkthMFp2ZFZGbHZHM0ZzV1ZCX3A3d01hRUlQdVlySjlMaExoZDZNR3dGYXdJdVBjRDNjRkZSMFJJQ192ZXphV2RsNnY0ODZwVnhIa3BrcUdpYUhtV3RnUUFsX2YzMy12R3hxMVgtNk9GSUJma2ZMdERZQkhHWnZNRDF1UGRITXdNMzlpRHBr0gGiAUFVX3lxTE1iQkJtRGp2dTBaZGluUkNJcjViMzUzVzVDVEtNdl9TY0g4Q3QzQWJHdlhULXVVb0lKSTEwYldSRGJIV2xKQTRzeXlVeE5DT2FkbklzTHZrak16U1ZRdEtiY051ZW0xb3lmZ0xWS3ZpUndrekVmc3NfTnU3WTMtNHFKcS1mMXozUDlMNDZqVGYwX3htV1J2TG5oM0RXVmJUd2NuZw?oc=5"
    },
    {
      "title": "クマ出没（秩父市荒川白久）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPMW9aT3FqeTNQOUdoVXZXRmFWdnplZkR0dXJGcHNJMkZMYzBUUkV1OFVlYl8xa1JJRGhpRjkzZFVSZkdHUUJuN19jRnRqcFRIWHMxYU1MUmoxb0k4Wi1RdVB0YTI2a3l3cWhVTFd1NW5NM0Z3M3k4cHAyLVpsTDJFdW9KcEFGaDZXVDh2TU5MUVpTZUhTR1B0WnMxMXpxSTVBQmhlTHpWYnZvQ2JUZkxn0gGiAUFVX3lxTFBqV0JTZEptQ0V4Zk4tT3Q3UjB4N1NiVzljZ1JtMF9IYURZdlRDRUNqQzFfMEtHSGJaelRpR1RKOG1rTkNnTC1tVVhNSGVlZkNydnNRUnh2bWE4V2tTU2pQd21FbVJ0aHAxWVNVU2NGem9meXlhNWVfZUtYOXlkaldmYlpUZU5FZnQ0dmhuT0NTTVZZZTljQXpxV0RRRUFEN2Fqdw?oc=5"
    },
    {
      "title": "クマ出没の可能性（秩父市久那）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNMnJKZkxRSlpFOTR4czh0dml2OEFZczl5cGlGeFVrYnZGTmJXN19rVWpjRVE1T0JkelJRTGZGQjJWN2VjUUk4cUhWd3I3UGR3OE9iem9nRGlrdkpGR3lrY2NJNVZhNEtXaFJyNzlJSWY1dlN5b0d4eHZhb0RRLTJLb2lkcmZLMC1TcXFlQW9sOV9BUEV1US1aNEVMLXlmaHFCWDBhcWRXN2p4UmJEUi1hZzBrVkZ6LWg0eFdpcVRWd01vZU5iN1pQLVR5VlEycTNaWXFDNnR6NS1CM0MzZ2NRUDRsLXJ3NnFRYjlXMjlKUjVJQdIBogFBVV95cUxQV282VGRrZmlYekFNMzljU2MwellOUHI0S3JFTTMtQ0Q0TGR3c2p3RG9RT2ZhUW1iaVM0ZUdwZjVnbUJ0eGZYWnpHWVJoWFlwT1hBU3AwTkU0bVdzTWxHZ0dybTVWaEFqUHNxdHFzYlM2V3hSUjFzS0J6RjhHVUVlWnlFVnNFZThqSFZJeG0tOVNoOU1YVDBNdWtVb1NNOXdJcWc?oc=5"
    },
    {
      "title": "高校近くでクマ目撃（盛岡市）",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBtNXQ3a0h3X09Yal9temw2VHlWTnFiOGlCWlNkcGFRMS1IYTFHREVqU2lXaWNtRk81Y0I4d09jTW4tY18xVC1pT21xU2E0TDhtYm1kbGFobEJid0ZoTldXUEln?oc=5"
    },
    {
      "title": "盛岡工業高校北付近でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQbUhrUE9Pdjd2cFpzcjRLR1plb0ZGUm1Id1J6WVhud1F2dGZCd3BTNVFfVV93cFYwX281VDhqWHNSMU9xb2VONDN4ZkI4bncyQ3JRZXkzellpS09SaFBKVm51UFlOS3VfT1FHRTl2cXRHSW5Xa2dOTVQxOHZHa0kwRFR1WFJTa28?oc=5"
    },
    {
      "title": "村田町足立馬立でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdHA4MlppV0F6OGdrVldzMGI2bXliVS1samktbV84ZDI5WlhKWWtIWDN5aGJnb0t3QUdBVHN4R2hiYzl1MDkzOEN2eHBSS2twS2dwWTcwcU5ZcjZkN0lVRk16MERma2t6RjFGc21tOUpwbFAxdTBpZFVEcHhYRVNjRU5yTW9nZDlfTlFYSUxhYW5zZzdYelo5MVZsMjc1eXQ1eFJwZXhmLU9iWUR2SW1ZUE53d1E0ZXdPRlMyTzFnWlZ3emU2MXo3ZVI0eFZENUN2Qzhhd2I2eWk2dnlTc3BTencyLTRjNU1XdUxnVWRYMUt4UdIBogFBVV95cUxOdDkzczAyRzhUZ3dCRl9XdExGNDcxeG90UUlYR05icy0waXQ0M2hRQTZKZzhYOUV1R29vcWdyOFhTR2NKODBUYWI2M3loU2VkaFNxNEpSN05ENzMwV2dMUGlRWG5ldVUtb25CaHlnbXpIcXJQTkxWOFFfZTg3VUc2ZnhmWUdlUUg4SFN0WHQzdmZRTlRpRkNBTm44NW5FdkJkaEE?oc=5"
    },
    {
      "title": "佐野市飛駒町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONzlRLVU1c2h5MXhwaXdJM0dZZ2MybHA1UlB0WWZWVzBZbTg3T3N4c014Zml5UUxJUVhNcWptRGVMMXA0Njh0VnpOMkdjYTRSTFZZY2lMX284MEN3djRjQ3dsMHlwRUxaTm1WZndtQXkxWVpPY0NsSHZmSG50eFZyblZjNW13RXpNcmxzbjdHaERkUHNmTHpKbUtNNknSAaIBQVVfeXFMTFBzYnk2ZGk1cUdTdUpyX1MtNngtN3dZSGhpYi1DR3BRbVpta041UXJkRjcxN3RJS3JLMHYxdHllRmg1cmVLdkRNNzlwRDAtR1p0d2hCUlYxSXJ2WHM0M1ZTXzEycWNEc2loNTM2VkJsb0RrbDlMXzZleXdETUY3MW1ubTVXX0lCRExWb09BeVAzemxLMDIxWjZRSDgxWWpyMUhB?oc=5"
    },
    {
      "title": "体長1.5mのクマ目撃（佐野市）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBEeVBIRUhBS3FMOHlrZ3ZmZUhuNFFpcVNUcXRlOWlTUHdyRGNqd0s4cGNic3ZKbzk3ZFBDR09JNWw1MklYZDBUc05zbFpVOWpFdVZBOWkzaV9YZmt3Yzc2dmpueGxrSEsxOE5faUlaS1NOTzJIUmRvY2xVY0tqNXM?oc=5"
    },
    {
      "title": "佐野市閑馬町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNclRzSklOT2d4TkJJVUd1N3psZnFMT29RVDFvcl80Q3FjS1pzaDVoRjl6VFV6ck5CS3lDNnFfWmFZUDh1QVlzd09sNldvWVNmSXRpNEREQW5ZZTVEUVBTbExZTDVUUFU4N250NUZaaVo3QThtWHlaMko4am1LNkM0d2Q1T2VhbEhrZmJlRTJxNG5oNHhZWllBZ1U0dV_SAaIBQVVfeXFMT2ctTmVDc1pLSVZJY281REk2T3k4OGs5WW8zQlczZ1lYR3FmR1FiVm0zbzJSMURYeDUtZmVGTnhfeUNCcEgxOWZyV0lSb24zM2pzQ0h6d2ZlWkxOTHdJRk1qb3A2N2VXeTBnaUxkYTA0N2hWdEtxZ1d3SmNINWo3TVl1a2FDeVdObnhVeUFlYmJLSkxoMGtMMWhqV3JmUm5iRjVR?oc=5"
    },
    {
      "title": "佐野市牧町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxORFhCZmdrSWgxV0YwVEpCUkVQNWlkUHliNWlPLXJVQlo0MzY2V1RIMzlIRkc4cE1KQ1d0X3pnalVwQTVVaWhiNWZ5Rkk2cmNORmMyUGE3NXlLQUlfRTdfc3pRSWYzNUF5anJib1p0bjFwbUVyeXQ0RFRtdTA5SWhzRWQ5aDBEaHRYT091WU1yTUszOHFmU3dTQzNZMzhCdTIzRjU2ai1LNVNaNUZZbm5aRUwxNnNiY1VJS0lOZU9pcWdVZnN4NkFuNENyS0lXQk90VFVkb2ctV2Y3bTV3akZneVZKS2pCbHNEdW91b21qaHRBQdIBogFBVV95cUxOTURtaGpyMlkyRjNjaHdBVnRVWktYNHQxVnNFYktUbzhuNVluaVRmcmprYUgyRmY3dzl1d0J2eVlrTzV2clJzSWs3SkFRbnlFejRUUkdwcTNuZDZFdDR2MWlGOTBGZ1NVMEN4clZYQ3ZZVld2MGtNam9yLTZlWTU2RmZSQ0ZiU3U1cWJqeV9QeTlOTDhGMmpwMndTSHBpVy1femc?oc=5"
    },
    {
      "title": "当別の市道でクマ目撃（北斗市）",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1OVkg3c0ZjeHBveXl4eU1wZXdLN1BjSzVIVllFRFlaLU1sVmRtN2YyaHZHbnNnMnVTWm11bE9WcTB3N1hPRVpGZ01WSHE5LTA1RDE0elZCNEphUQ?oc=5"
    },
    {
      "title": "建石でクマ出没（松前町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcmxLZTMwY0x2Ylo5MEpVOGIzWWs2MTJUemRhQ1A1UDZLSDZ2SERHWjZtcmo1MFNuTVppTWhlSHZRMWpBbDRQVVNHamY0N3QwcXpxaktQZGdlbEZMa3pGc0lwV3hqREYzTWdjdGtjaWVCZ0t4blBXZWk5WHpYbnpEVzFjNlBHejktUWNRSHFQYWFQNVZPOUFzeFBhb1bSAaIBQVVfeXFMT084VWVfdmRybmFha0t4TzR6WXpZTXFQay0zVTRnT2VoU05PU2FSQzU3aUFZSE9WNVVqTVFEWVppZkhIV0JnUnpLQklJX25VYjZBMnhwZFlMY3daV1NVMFVjYXRkcURNY3lRcUNOT1F1b2hmYW5uMXM0YnY1MVd5Y1JwQXNjblgyczN3Z2xHWjBsUFpZa1lHeUxjNXlKMVNpSjJB?oc=5"
    },
    {
      "title": "大宮町河辺でクマ出没（京丹後市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOaTBxZ3QzaUZ6ZTl1Z3JhbGZqcGxVSmpMdmJkMzB0V2djNkhfLWUyXzRRNEZZMUxpVFVLWS1YX3UwUmdBY1FxTU1uanJPWGtRalI2dmVYemlwVzdNV3ZWM2dQZl9mUW5vTUQ4MGNHME9SaU9CZVQ1a3g2ZDMxOGhvazl5WWh5OUZhM3RxanNOajFLczdxbEx5SElORlB6REZ3bUd6NzBsc0ZBQmd1RkVreW05SFVDOXV5eUw4VEhiMGJWWVo5d0gwRzlrWWN6MHNhOEpndUtGcW83dFN6YkZ5Mmt4R1ZhRFpYM3dqV0FDX2szQdIBogFBVV95cUxOMlIxYVplMlBKckJjUkNEXzQ3d2RJbThTVUZ5Y19WSE9OcVp5MHNYS29PcGFfdmxIRVhJZ3RzbVE1Z0w4a0trRGQ5M2RLRWZCZzJzYy1RVHFCNC1BdkUtWHdfWGh2bHpxZjc0TS1KUVNmWUxsZDQ4Vk0zY2QyVjlHZ1lCMDhCTk8tenNmbTJtNnU0MDdwYnNOQTQxNmdSS0poMnc?oc=5"
    },
    {
      "title": "京丹波町升谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRU02SWEzajJvUHY4SjFEQVlObjRnbktIWDFkMUU1N1JOYXhqNldrWVlKcGxWdmJ2VUp4N1pFMUFidGJxaFkzeXpUQlFZTlV1R1NHY20yWGd4ZUUyQU51OFRET1A4a1ZsNGhvdU5HV21xZDhOSUtaT21FMVRCTU9rUjIyUFYyc1Jxc1pyTDFzc0RUMzZFTmZpREQwX1LSAaIBQVVfeXFMTkNiUndyZWJVVkU5Q3hWaHVyS2J5VElxMmdvdDQ2SXJwU21tQm16cnBwaUd4cFZmaHZtaWNHODFoQ1JzM3liQkhONnJNYUNHTWxDLUo2Q0pzdUJmYmwyemlzamR2VWdZUHM3aHdMSWlfSE1ZVGtwa0NmS25zVXhuN0FXZ0o2SG4zM2ZJQTVfTVVlS1ZYU1lXVGJZNTd4alFKUWxn?oc=5"
    },
    {
      "title": "久美浜町栃谷でクマ出没（京丹後市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPM1dIWmNUaG1SVG9OdUpLdVYtRm40MTRtdlNFZk1yV0FEVzRYSE03ODg3TFRpUnNuUWdIdXlVaXFiVjFnUVZGem5TeTE3Vzg1V1EwcW9hSVJvemozUTNHTElJUGNDMU8zVFRRY1lwT2VQRHV3RTlEd0pkQ2xERTJUNGhRRGItTkRKRzVwWFR2aE1GTjlSQTVSTTZrMGE3cjdiU0UwdUFScDRHV0ZkZnJfaU14RGlwYnB0UVE5eUhGZFVKQ2UteWtqUDBxMUw3Y29vRUMzcHhSbXFYUDNzMXpfc2ZCb3JLNjF5MDY1SUl2RmNBd9IBogFBVV95cUxNWVVBV2dUbEhQaUZKTlc5blVBQlFJWVBNeGVqY0ctWEtTUDZPem5MREFyQ0JiQ2hqY21sSHpNbjA1c3NYaFU5cFpwV2VCNGp1MGV2VUYtYVIzbWwzZnZxUDRfRWx5R3kwQ2laMnBiX1Z4YXpFLThQNm5tak9BdEt1TS1PMG1OdDM4dXRIVGxtYnd0V21Nb0xZeC1UakxPdWxzTHc?oc=5"
    },
    {
      "title": "周南市鹿野中でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ201ZW5QU3BwM2RlbU91ZEZDRXE4Wl8wQWwwRi1mTFZueW9LRXl5aDRMaFhHOGRQQUsxeWVLNlR3SjN0MUJQbExKMmFhYmNVN2hNRDUwQllVVGVpZXVzSk5tSUxNcHRpeDVOZXNJcWJPWUUwVGhacV9iSDE1eUVyRFg2UExDU1RpRXdFR2F0eC1UTVJGRzBNblNkUWTSAaIBQVVfeXFMTzhOU0xHN2J2S01WeUQzYVdydmxFVWhvOTZWZUxveTZsYVFJTWt5SW14X3duU3YzWENUamctTFZjSWFUMlQyRC1qamducjNMakJna1hENkhldEZhc1ZYQ2VDbmlfR0ltM2Nxb0pZQnFGS0hEaGx2TjBtbHprOWpfRnVIYUJ5OVYzZ2dPUTAxaEhmQ2E2OXpjR2NWdkRCZTlHU0tR?oc=5"
    },
    {
      "title": "萩市椿東でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT0dfdkRrcG40dE1WaGY3eHRxdG45Y0Z2OFNsb0ZyR2g2eTFWcDV6M1A5RFU3cExXOHI0d3g1REd0MUhfTE84ZkdSLVB3b0huSXhOM3V4OTBaTDJjcXktMDE0UmNhWGpPLS11WW5JcTRrbEtMWXpaQ2dHTTlNMUhvUjYtdlJyMEphU2VvMk15RlRPdFZHeHBEOXlMNHDSAaIBQVVfeXFMTkhYZEJrX3I4N2VIdm5lel9lWU1IMkVIVlBIc0NhSnM1dG52MVVBeUgxVGd1UkFnbmlmejFpTGlvajVLZWpjUWlLc2J4a2g4Xzg0dXQ3MWNXVFgtSWdxQlJZRjVlMURaT1RpZ21mcVdlc1N2VFd0VFVRb2tyaUV0WU1sTXI0ZElLUjhKM1dBbjB4T09JZGxXZXk5YzFNZUx4blhR?oc=5"
    },
    {
      "title": "あわら市花乃杜でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNc3lTZHVEdm11ZlY2Y1ZyZzdQNWJuLVd2OVctWEdpZXlILU4zU0hGRS1GRXdDLVRpZGJGOWdnNnRPcm1OR0g3czhZSG1iZmItYjd4dWpKVG51OUZiY3gtakQ4YWVWQkRsWmhqb1FEVkppV2JCcjVTY3VlejhPTC1DenVWZlVpVmZKd1VKa0NiZUdYYTMzSDJnQllhSk3SAaIBQVVfeXFMUEV1SnVnaWluR1h1cVpZOWMwVlMtM2Njd3RLdUxVcEZHbHV6Vi1hbUU5RW9KVmE2QS16UkZ3aTBod2swUWVyRlRqM2FtVDRLU1pkX0VuM0wtZS1Ed2JhOHRqT0RzVkw5aXhtdVFSeWRjaEJ3NGhJLUVPUDFtSm1zMVgtSVdmak5MeXhGVkNiUXpCRmVZVkZyZmdhTllCRnZaLU1n?oc=5"
    },
    {
      "title": "若狭町安賀里でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNb0ZOZ1loUng0a0Vpc0tJNDVGOGZCNXdTV1VvMk5rVjB0SW9Oam8xY1FVNTVicXpBeHh5c3FVQWtOaFlPWk5ySXptVWs3UHJoc0NOT0NHNkoxdEFob004ZktMQ0ItWldSSFdfSlBXcTcyM25BMkt2ME1ROGhCZzZHVnZZLVhMb2RLVTc2a194ZlJNTmhXWVgwVjJGYy1fbHRMMnZDR0ZNc3A1WUVVXzlKaldVbTA5MU1Sd2lSUVlxYlV6OUptZzNrSm1seVI0YWI3SWNKSXdURFFyQjNCUmdzcEFjVFRMZjVYdm11c3ZFVkFPZ9IBogFBVV95cUxPWW1ieGFDeWJwajZ5Y1F4elNObzBGcktRaXdVbndDU01uVG1sSGU5aGM4aUoyVlI2WUFZc1lTU0lNdmJWRkdhdHRVMTVkcXZvUFUwd2dYYklSTVlmaEFzdVhoM1FScFlsOTBfZmR0dE52Y0NRQlI4UjBjSXZUNWR2MnYzS2M1QnNRNjZtaGlJSWNqUlpqQWxjQ3ptbC1VVk0wcFE?oc=5"
    },
    {
      "title": "若狭町新道でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNdUlEVzhiVjFtbHJYcUFaY3Q3VkhXdW9kM3BYcG5kWWY2ZUgtbGd1aXRab0ZBQkdRcklnWmc1Q1NGbUk0eXE2b1lIUHFVUHlJZzRkOU9BRDZZQjZfQ2ZPcHV4VV9tVVMySmZudFAwY1JUMXh2THZTMGU3NmtOUnpUZXZDNHFadEpGOFlEMFRvc2tKYWdqNlUzZmtROS1GYkdpRXBnbFRKSlV0a0N5T24tdTRPRUhwYndNb3k1SjVIVkJnS2Y5MzBSTmpDa2xweFQta0lIUXhxVWh2b2c2TjBucW5STEcwbFhKWmlGcjFzdlN5Z9IBogFBVV95cUxOczdVUS1XYWZwQU5iWWM0dTlOXzlhU1FMMXlCZzhvYUJocWliVnVoWmhoSnQzTDBTZEJtYUdHTGRuMXJUczYtbXlwbFlMaFhKNEJpWWoweUdldUd5eXZzNl9hekkwOTcwQTdIZFFtRHk1QnR5b2hfbEVaQ2U4dGJmSVlzWmZ0RTN3Y1o3MmxIaWNWbDltd0NBOG5jRkJEUGtYMGc?oc=5"
    },
    {
      "title": "小浜市下田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdWkzUl82bk5nUlpCLWt3RUJwZWVBRVl3WEs1QkJXUk1wWktoSU1obldlWEEtNFRSd1V2Y0FZRkpoVUZZREltc3dCVWFLNUJFWDR6YUFtcjdUNXBMYWZJZnNJMDgybzN4MTZGUXQzbjhmeXJhUGVNU1J4NVNBU21GNnRZZG1oVFNCUTd5eVdxYTZaeENQS3hJcVNQM3l6UUdsTHBBUWU0Z2dIRW93WmxxclZKVUlna1RCcEVDNUh5cklkOFVpMkh5d1NER2Z4NDh1dVRqcm85ZnJOdEVpRU51bENuUE1hNng2Slk1b2dZT09Nd9IBogFBVV95cUxQOVY0eV82TENHX01LUzA4blpLc1plbVYyQ2VFdUxGLU1MZlloZUc1MFJMUUVTU3VKTVd1aGJTd3Npb0gyTzhJZjVTR2puVXNXemJGbTlVWkxTcEc3ZTRZRjA4Tm5EcE1mcGNhZTh3V3BBMTNDeEltTlBTQVJQRERFYVhjUkctNUYxSXQwZ0tTN3hBeWlmMU9UbENoMFAtdnpFeHc?oc=5"
    },
    {
      "title": "東田原でクマ出没の可能性（秦野市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcjFFd1dFR2dNbWdURHRHdV9QZFV6N181M2drU01ld3ZkTTFrNUpMRTNxdFk4RzRYNzZoSGtJc05mRk8tTHNQMWFuQzRzMExJelVEZ3BodEdZelBDekh6MjNvNTNZcFZ5ZDNsU1YtWVFtbUx4QWt3Uy1KWXoxWFMzNmpNYmRLVklnamdGNUhmT0lWMWo2VVdSWm42aTPSAaIBQVVfeXFMTU15aHdjNEZyNm1WbklHb0tGc29JX1NPc1M0dmw3WEdMMFFscjJJZDJwd3hxdzZCYzRHX3lLamlSbi1iVjFySmdTblUtbzltTThNNjlJUy1OVF9ucDlfZngtcDZBaHozSU9Zd1VFbXQzLUozX2pNSWlNc3ZLbUowV05rbTJkR3FXbGU2a3FuQXlfWVdQQ3dFaTVXTjJBSS0tVzlR?oc=5"
    },
    {
      "title": "相模原市緑区三ケ木でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPYlVWWjNweWk5VzRMb3VTX3c5dGd0dERxaWVpd1JCWXFPNGYyQlcyVm5aNS14SmVEMXo4RGswV09HMFF0anpPQzhpQWVxWUxGelJOV0xGb0oxUU1VdkhqZ0ZGMEFoanlOMjQtaWcxMGFPYl8xeHdyTW9XSmRPZnNlcnBwMGZlN2JZcUVUTnk3TERnRnFXYURYd3R0Z2FYcUF4WmNsQ1pkTXlXN1kyX2d0TC12Z19LY2ltVGZsMDB4QUlzLS0tbkV4dGo5bnJSbzBBZ3NqM0ppdGRzN0J4NHZISVgzaXJpaFc2bEg2TmR6R0hVUdIBogFBVV95cUxNNTl3bEVQeUtUUXRBblRiUEw5Zm5abkFQbkpxTTl2dXFwdHQ5dmMwcTl5NGFuR3dvNjA0elR4YzZrdXItalRXbUhxbktNeDJzZlRDS093SWJpUWdOUDJsMEgtZGRyckExQXNhb1NhNnhuYkJfUkZoVUR6RWQ2bGVKejBzWFM0ejN6WG54Ym5hU19BNnFWRjVFdm5jQ1FkZWE3RHc?oc=5"
    },
    {
      "title": "揖斐川町市場でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeDFBcXphN1lvQjRndnBMVTBhTGFxN0pKQXhwamZVdjRUSDl1anh1VXROYlRFTXo5eGViRkx0TVpwWnFxOVE3SWFaMU42SFNSMm4xMklrUm5LdnJfaDBURHJfOVZxeU1kYnRKejdtZVliblQ3LVZIdm1mQ0dpdEFvWUt3ckFLajIxSXlEVENhRGlwZEltaWJsS2JtenDSAaIBQVVfeXFMUHNOd0stckEwakRYNEhzRGZTQ3NEdktRSlVNTkdsVkJCUk1ncWtYRWxsLTh5NzFuYmloVTlaMGc0S2tMSW1Jc040UFhxQlFPT1Uxd2FCYnRBMjZxVDE1ei1rNGtxODZHb3lZSVREcEtyU0NvTlN4RnBJUWU3WmRxYTJzbTVuNVBQdUVFT1U3alhBSUc1eGJuNmhObDl3bWE1Uzd3?oc=5"
    },
    {
      "title": "奥多摩町海澤でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOGxOYjZfa3JmRlYyb0laaWgxVFB4WHNtaTc5d05kcEpjWktpbkVzTFN3TXA5ZXhNcmtLSHJiNlUwSGc4SVVjT0RhUWduMTZZNFNqa0gwcUdmWllodnZmVnZYRGdwSlFRSXB0SkhrVUg0VjlKSkcxNkhFVEx0TnB2QUN4ZUc3NHF6ZklWcWRLN0s3ZkVlWEdiOUV5QUbSAaIBQVVfeXFMTXFjUzdBQmtDRnhLb21RcmpkTkt6Mnl2bnhURTI0V2lrRGNIVUFVNGZQYzJLX3ZvOEJlNXFuSXZrc19zY1lkTHUzUFU1cXhmSWV2SS1uVmpXMUVsSzJpTEg2T0tqR0JmTnB3c2tvWmM1RWlQeHJIUXlZUVIwSlV1VEZkMGJrN0prTUJSMFBzVktPcnRpT2plLUJ1WjBFeE51Ry13?oc=5"
    },
    {
      "title": "八王子市でクマ出没、柿の木に爪痕",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE90TUdQeGxIMU96dHdNMTFRRlpISWdnR084bF9UcktLZFhBb3pROGpUandjN1I0VnNicUQwLVFqeS1sWFJ6U2k4VUt2aHdvVW9BODFZc3ZaQ05XV3RLUXZfdWY3WmNXX2Vi?oc=5"
    },
    {
      "title": "福島市阿武隈川でサイクリングロードを横断",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9jMS1CeEw3ZTgyT2xpTmpiTHR0NlkwcFU2RzQ5dnkyUGY5OXp1WnRVQ1QwQ0g2OUZWNExXM2RQZ3RpaG0tc1hISFZhMWQtSVloNUNkT3NDR2tqR3MtcTZoRktlaUY2X3NiWFhlTjlXT19FQ2t6VUo1R2xUU2V1VEk?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"栃木県","count":17},{"pref":"福井県","count":8},{"pref":"北海道","count":7},{"pref":"奈良県","count":5},{"pref":"山梨県","count":5},{"pref":"兵庫県","count":5},{"pref":"埼玉県","count":4},{"pref":"京都府","count":4},{"pref":"神奈川県","count":4},{"pref":"岩手県","count":3},{"pref":"山口県","count":3},{"pref":"岐阜県","count":3},{"pref":"宮城県","count":2},{"pref":"東京都","count":2},{"pref":"福島県","count":2},{"pref":"新潟県","count":2},{"pref":"滋賀県","count":1},{"pref":"愛知県","count":1},{"pref":"長野県","count":1}];

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
        <span>対象期間: 2026年10月21日</span>
        <span>·</span>
        <span>公開: 2026-10-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={79}
        periodLabel={"2026年10月21日"}
      />

      <h2>1. 概況および重要事案（人身被害・捕獲・生活圏侵入）</h2>
      <p>2026年10月21日の集計データにおいて、報告されたクマ関連事案は全国で計79件であった。情報ソースの内訳は報道由来が46件、自治体マップや公開情報等のオープンデータが33件となっている。このうち人身被害キーワードに合致する事案が1件、都市部キーワードに合致する事案が4件、捕獲・銃猟に関する事案が1件確認された。特筆すべき事案として、栃木県日光市の林道において作業員がクマに襲われ負傷する人身被害が発生している（※1）。山林内での作業時における突発的遭遇の危険性を示す重大な事例である。</p>
      <p>また、人的被害には至らなかったものの、人間の生活圏への顕著な接近事例が複数報告されている。神奈川県秦野市では市街地での出没が確認されたほか（※2）、愛知県豊田市猿投地区の住宅街においてツキノワグマが出没した（※3）。岐阜県恵那市串原閑羅瀬でも深夜帯（0時〜1時）に住宅地での出没が記録されている。さらに東京都八王子市では出没とともに柿の木にクマの爪痕が確認されており（※29）、実りの時期を迎えた果樹が誘引要因として機能している実態がうかがえる。北海道浜頓別町においては、地元猟友会によるヒグマ1頭の捕獲事案が記録された。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村・地点</th>
              <th className="px-3 py-2">事案分類</th>
              <th className="px-3 py-2">状況概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-10-21</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">日光市 林道</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">林道にて作業員がクマに襲われ負傷（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-10-21</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">浜頓別町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">地元猟友会によりヒグマ1頭を捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-10-21</td><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">秦野市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">市街地におけるクマの出没（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-10-21</td><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">豊田市 猿投地区</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">住宅街におけるツキノワグマの出没（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-10-21</td><td className="px-3 py-2 text-xs">岐阜県</td><td className="px-3 py-2 text-xs">恵那市 串原閑羅瀬</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">未明（0時〜1時）に住宅地での出没を確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-10-21</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">八王子市</td><td className="px-3 py-2 text-xs">生活圏接近</td><td className="px-3 py-2 text-xs">クマ出没、柿の木に爪痕を確認（※29）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>2. 地域別の出没動向と空間的特徴</h2>
      <h3>北海道地方</h3>
      <p>北海道では計7件の事案が確認された。浜頓別町における猟友会による捕獲のほか、美深町では14時20分頃に町道（仁宇布高台道路）の道路上、仁宇布小中学校から東方面直進のカーブ手前においてヒグマ1頭の目撃があった。道南地域においても北斗市当別の市道での目撃（※14）や、松前町建石での出没（※15）、函館市での目撃情報が記録されており、道北から道南にかけての幹線道路・生活道路周辺で目撃が相次いでいる。</p>
      <h3>東北地方</h3>
      <p>東北地方では岩手県（3件）、宮城県、福島県で報告があった。岩手県盛岡市では盛岡工業高校北付近をはじめとする高校至近（※7、※8）や、羽場15地割の酒屋付近において成獣1頭が目撃されており、文教施設や商業施設が点在する人口集積地近傍への進出が目立つ。宮城県では村田町足立馬立での出没（※9）が報じられた。福島県福島市では阿武隈川沿いのサイクリングロードを横断する姿（※30）や、瀬上町でのクマと思われる動物の目撃が確認されており、河川敷が移動回廊として利用されている傾向が読み取れる。</p>
      <h3>関東地方</h3>
      <p>関東地方は本日の最多件数を記録した栃木県（17件）を中心に、埼玉県（4件）、神奈川県（4件）、東京都で確認された。栃木県では日光市での作業員負傷（※1）のほか、佐野市において飛駒町（※10）、閑馬町（※12）、牧町（※13）、体長1.5メートルの個体目撃（※11）など局所的に情報が集中している。埼玉県では秩父市荒川白久（豆早原区公会堂より北東約100メートル付近含む）（※5）や久那（※6）、小鹿野町河原沢（※4）など山間集落周辺で目撃が継続。神奈川県では秦野市の市街地（※2）および東田原（※25）、相模原市緑区三ケ木（※26）、清川村宮ヶ瀬北原交差点の県道70号で確認された。東京都では西多摩郡奥多摩町海澤（※28）に加え、八王子市の柿の木がある敷地（※29）への侵入が確認されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県（8件）および山梨県（5件）を中心に、岐阜県、新潟県、長野県、愛知県で事案が発生した。福井県ではあわら市（花乃杜（※21）、新みどり）、若狭町（安賀里（※22）、新道（※23））、小浜市下田（※24）など嶺北・嶺南双方の平地・集落周縁で出没が報告されている。山梨県では大月市（猿橋町小沢（※26）、梁川町綱の上（※27））、上野原市（※28）、早川町で記録された。新潟県長岡市では楡原（※34）での目撃のほか民家直近への出没（※35）、長野県佐久穂町では畑への侵入（※46）、愛知県豊田市猿投地区での住宅街出没（※3）、岐阜県では恵那市の住宅地や揖斐川町市場の河川敷（早朝4時〜5時）（※27）での確認があった。</p>
      <h3>関西地方</h3>
      <p>関西地方では奈良県（5件）、兵庫県（5件）、京都府（4件）、滋賀県（1件）で事案が記録された。奈良県吉野町では津風呂（採石場付近等）や入野（入野橋付近の農地、夕刻18時等）、川上村西河（19時15分）など山間農地・事業所周辺での活動が確認された。兵庫県では北部を中心に養父市十二所（※41）、新温泉町千谷（※42）、丹波市青垣町口塩久（※43）、香美町香住区油良（※44）、朝来市和田山町寺内（※45）と広域で集落周辺への出没がみられる。京都府では京丹後市（大宮町河辺（※16）、久美浜町栃谷（※18））、京丹波町升谷（※17）、与謝野町字与謝で確認され、滋賀県大津市南小松でも目撃があった。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方では山口県において周南市鹿野中（※19）および萩市椿東（※20）で出没が確認された。なお、本日のデータ集計において四国地方および九州地方に該当する報告事案は存在しない。</p>
      <h2>3. リスク評価</h2>
      <p>2026年10月21日の集計データから導かれる野生動物管理上のリスク要因は、以下の三点に集約される。</p>
      <ul>
        <li>季節要因と活動時間帯: 10月下旬という時期は冬眠前の採食行動が活発化する段階にあり、日中のみならず未明（岐阜県恵那市：0時〜1時、揖斐川町：4時〜5時）や夕刻・夜間（奈良県吉野町：18時、川上村：19時15分）の活動が複数記録されている。薄暗い時間帯の行動範囲拡大に警戒を要する。</li>
        <li>餌資源と誘引物: 東京都八王子市で柿の木に爪痕が残されていた事案や、長野県佐久穂町の畑、奈良県吉野町の農地出没に示されるように、人里に存在する果樹や未収穫農作物が強力な誘因となっている。放置果樹の除去や電気柵等の防除対策の徹底が急務である。</li>
        <li>人口圏接近度と突発的遭遇リスク: 日光市での作業員負傷事案に見られる林道・山林作業での危険性に加え、秦野市や豊田市のような市街地・住宅街への侵入、盛岡市における高校周辺、福島市における河川敷サイクリングロードなど、住民生活や通学動線とクマの移動経路が重複している。視界不良箇所での音響器具の携行や、早期の情報伝達が不可欠である。</li>
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
          <dd>2026年10月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-22</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-22</dd>
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
