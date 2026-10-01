// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月30日 / mode: daily-report / 生成日: 2026-10-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-30-daily-report";
const TITLE = "2026年9月30日 国内クマ出没事案の時空間分析と動態報告";
const DESCRIPTION = "2026年9月30日に確認されたクマ関連事案は計69件であり、人身被害は0件であったものの、京都府綾部市での住宅地侵入に伴う緊急銃猟駆除や各地での生活圏侵入が確認された。北海道、東北、北陸、近畿、中国地方など広範囲で集落近接・錯誤捕獲事例が報告されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-01",
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
  datePublished: "2026-10-01",
  dateModified: "2026-10-01",
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
      "title": "住宅地にクマ1頭、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5jOUpmb0llNHBVVWEwZ2F3TUR6M1ZxbWloWFQ4YXpXajRCaERlSXIyMWhneGZVVHNmSmFBVXA2ZHNKaGVDVkQxOGxkNmtPVDRHa2ZPUFZJU3Q?oc=5"
    },
    {
      "title": "民家敷地内にクマ、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNRWpjS0U0VmJRRVFlSURUd0NFUFRMR3RTMWY3aXZ2dmFGeG5FbjNRWDdOd1E3dXhtZkJnaFpnRHZEWmRFMDJGNlpCVkVQcnRSaUdCQzNkb2RoR1M0VFpOaDF4SVlqNUJfQ3pOTWp0MGdJYmdlZHlCV0tFRXFaZERfRUtoV2tYV2NFMnRIVVU5Qng4Y1NxSjh2andXNDRTc2h1WEpCTtIBqgFBVV95cUxQM2pXTksyaF9fclphR01iSHh4bjVRbDdLa0lRZmNMRDlUeFdyalVVOGFaU05LVWtJLVB0bzRzQW5vTHg5RFpjQ0ZTdGVkVVVXLWFVVHNQYk1JTHpFSUtyZ0pXaTh4c2JWQzBhV2d3cmQ1a1l2eVJ2Q0RMOFI3QUNlTDdBMk5Ha3lVOE9BTVlEZHhLejlmV2tRWHN3QnVYb1NKTnQtWE5adHZ0dw?oc=5"
    },
    {
      "title": "建物間に居座るクマ、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBURk14ZlNXYnVPMzhpeFJjTVZ6d1pWY0kzMTB2MkJ2djVucnVRYVdjVlJEb3cyN18wMjNON2hEOWtIUHY4RlJwSnkzcTRBdHFrbHliNEVtXzZYS3NL?oc=5"
    },
    {
      "title": "空き家の敷地にクマ、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9RQzZ3QzhyY0JYb3JlS0dTZVZiYjZDVU1JZkxwQ0x0OU9FSUNHYXlhRnhvT0E1cDAzUUxvbzlEQ09Td0QxcG5ENzFWZDQ3MUJqSVAzUEVUb0NjcmM4dWp3dlM0X21UT25US21PbEotZFRqTXowSE4zaU0wUjcyLVU?oc=5"
    },
    {
      "title": "空き家間に出没、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE52Y0ZOWm9HX2J3YzV6Q3BiZkNYT3ByM0dzdGlscG92RlRBNnhsaEc0TDh4TzlhQzRVR1ZYOG1YM0kyanhDZFd2RUtDWGlsUTJnNmlfUXdVcmF0SWl1NVRHX3hxbUxUR1BRM3pUVmJRT3l3ZDVUMEZUUVFZUdIBgAFBVV95cUxNR245bXJYQllaQVNwWkdvQmxqeG9tM3lpXzQzb2REZzg4N05TYjUwNHc3bzJLaVBQa1dnT0hfaWJVcERjR2t5Q0JPR2MyV25nR0pSY29rSUg2R08xcUdKNjBwczNVa0lIVkRtdEgtQVVrVTdheDNybE5pdFplRmxrNw?oc=5"
    },
    {
      "title": "田畑でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5GSnc3WHB1MUVCQmJPRVdMM2N2eW5QT2hQcnZLVi1SSVc0Y3JJQTZqcFp5SV95N3kwbk1yUXd2eHkzVTNnMkxPZTV0bDRpUE1sS3E1UzZtaEQ1YWd5ZE53cXhqeHNMR1NXS3dVeDJ6Z9IBdEFVX3lxTE1DVDZPOXE2M0ZtQ3VVQno4M1VaeUE3bm1UZEZjRUdiNEU4aWxrREFTVkoyUWxQY1VmRGVKbzRrVE8yVXRYMmJHdk1Ob1lyeG01QkdsSzdsbEQ1Q0hlRV9oRzh0VXVuTG9abDJXdkxCQ1FLZkJx?oc=5"
    },
    {
      "title": "袋田でクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBJVVh3dnIwN3B4QmowMUE1enNOWWpiSXcxWGhqZjZlYUszM2pLUm5NS0htUURyYzdJc3JMSXc3bmdMUHZGWVpYLXdOOGw4MndmR3JwelpGZ3ZZMGhhdmpXbVdiM3hlSXNuUWxNbE8zenNERjBnV3VsM09aTnlOVWM?oc=5"
    },
    {
      "title": "ふれあいセンター付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE83VXpaS3FuRWtMSUQzRVd1RW13WkxfQnVlZHQ1SkNzWThSdElCT0g4Y2JCdzFnRXh5SWItWm1QdmtfeEh5?oc=5"
    },
    {
      "title": "民家裏手に出没",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5SdHdodWo5cEI5QnRPTm1UX1JqR3hRQUhrYWh4OThiRExuRm1oTEQzd3J0UU1lYk84akd0Vk1Qb0dtNDdK?oc=5"
    },
    {
      "title": "市内でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBQVnZJSjJITC1SVi1CbndadGJhM0Y0NURxZ1VVcDNjNjd4WDdTWWViS2oxejVvUWZ5N2ZLWTB4STNhSWk5?oc=5"
    },
    {
      "title": "クマらしき個体の目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5aeDVKdmxfQ29KX05wd3RmQ0JxOG9CSmROMjREQm1qdU9KU3pBWHMxLUlVamxUcHJGWXpWTkp3VEYtbWhuQnFPQ3Q0RXJSMnVhcHFuWExxZ1F5X0lYb2U3LXdCam5wZXRWWk5OaUxSajNXMHNHeHBkQzV6bDJHa2s?oc=5"
    },
    {
      "title": "三刀屋町多久和でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNUNYb25Kb0Zza3ExVXRIMWFoU0pheDlUdGtqblVnX0pzNVVIQW5nbEhGZ3NlOEFQYnZSUGt1NkNUazZRYjRmd3pUU2V6bW1vaUhkdjBUX2ZtNG8tdkdlMmtaeWRORExTYi1wbnFJSm00Zl9Sbjd3UFRuQl9SaFlsNEJOd1RIa1E0elY0T3VUOFducjVQeTd0amRfdGlaU19qRjF3YmVyVlFkQ2JJY0N1aEtyblJjQnNuNldBZ0h1ZmlqU2RoNkJwdURhX2lSa0tZdjM4RVQ5RzE3aXNZQ0JCcWpTa045ZE9wWk1sczVmM1dnUdIBogFBVV95cUxQTnBuWlNPNzlVbjNwTkdOYjNkdlNZRUpSRmRSUDhxRmFsMzR1aklvRUU1TmxULVQtTXdTcWhhWmlsMjVZdXQyXzRSZmpWOTBRRXB4eGRRN214NDgtclYxR2RWS213NHRjZWtzRlJjZkdjb2VNZU5UamJyOV9pVTFaRXE0VWJod1B2Tk9BS0ZyNU1TTW5ITU9RbGVfRFZCOXJFenc?oc=5"
    },
    {
      "title": "クマの出没（羽幌町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSHRHdE42cHMwWU9uWU1iQTdoSGxYbGFvVG0zaXlGa0Q2U2QxN1pSMTR1eHFoS0JoNkNFTEtubkI2TEJ1VnlHRklQTDRNVTNDNzRhU1RDNXVXSlNvemFYdTdLSWRJZUVhdEtKakgtVTFzZEtjQURFQjdtOVduYXZBWEtPRWk3Y0djNnA3TlFDZDI4bDlsRWg2ZWJhUmPSAaIBQVVfeXFMTk9WaGxZQmJ4MkgydDlHb2c4S2FtYmI3SlFLU1RWM2ZLTG1WZWMwanJaSHlsMzkyR3Y5cm5HNDhJWTJvUHRUMVllenZ6cjRwb2FKcngzTzhMaDVZdjhzNVRFWXRLLVJzQTdYNWdrbUNzMkp1dkh5eWxWdDhqVDJQeHplc1Y1cUJXNi0xZ0V1LXZiU3pMTC04NHZFd3VXM1J6MG1R?oc=5"
    },
    {
      "title": "クマの出没（鹿部町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSGhuZE5vdGJMb2tPTHg3QVpvVG9VcFI2WGE1QmFsVkJPN0kwRjRRVGtTOGswOUw5bGl2Uk1rZnVNNGRiT3Frd3B4TENucGNGLTZKSjBHZWZWYy1PMUVDcWtFalI3MWQtV3VocTFFMzNFWnBpYTkwSERwdllUaTJBOTM4amFmTF9zWjV4azNjQ0hRR1RTM2c2bTFnWFnSAaIBQVVfeXFMTkZ2VGdfTXpiODBFNzFiSXNOVHhzNy1hTy1SWHpCWkJ5OGEtTzZYalVsdzNEd0pXVHlZYmpVQjRoYzZMWk1QcTR4Q1NWcTRCSVNfUVUyUGFONERFRjg5aWpwWUhKRWJDa3JhSU9fUUZud08yZ29NemduZ2w3VGY0UkZwMmtkVUNFTUFxZkxtaUEtUGZFTm5QOWtCWW9oN0dxb3FB?oc=5"
    },
    {
      "title": "クマの出没（根室市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZlJRUENEUDFfVWw0VFVCSkg0NlhWczBzdXNNRTJaMlFiRmJWa01SSUJELTFBRlBXSDZ5RXdUZ2c0YUhuazY3RmdUUE5rRmphM0FZQXA5Sk1pSmlNRXhmazBHQmJIWWpxZnVua3VELWR4UnBaRURLTE1jYXpHSjZMNk4zMUMwYU9MWXppZmdpWXVSTDdfYWVqR1pSNknSAaIBQVVfeXFMT2wtX21GcFVIQktYRi0yZl9BR19WQUF5NWJCN0ZHdUZIS29zUjVjTmlqMmpjZDhNQVZHZVAwd0RlejVoR0RjeTVqVnZhUE5xTkVTM3k3VG04bmdhM2dkaTJ6Rkw3b0RiT3ZtVk0yTm5qSzh4bXVNS0xjMlE4N3ZualA3X3E0N2JKdXlIc1NqZUpJbHZjZ2lNNnR5dFZOaVk4Z2VR?oc=5"
    },
    {
      "title": "下御料でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSi1YWXVkUzQ4dURHekJ6Uk1QOUZyYmxzaDNULXFMVjJ1eERwVFhBYTJIQ3Q4ZEUwd2MxZWtBeXN5T2sxS1h2X0FmX3doNmp3WTR5N0hiSXJQRHA5RXdBMGVtTk5jVW1uRWkyRmVjejkzNXEyWDZFemtqbkF2MWJhOUYzZXFVbTI3aVN0UmdzR2RpZmRYMUc3OF9tVi3SAaIBQVVfeXFMT3hYMUxFUjJjVDNFbVlMbUUxSFRhcHFmYkRnSlpKS2dmMzZVbGZ0Y1VuQXFaVlM0YldCdnNDTHlVTWU1eUdWLTZBbTlZeFg1ZkdEMzRWT3NwZ0RtQjI5YmN5eUFzblJkdTFiTm9wbkJud2VfQ3gycm9WcEdhckQ1ajBQR3VKanJoajZvd0dLX2x0TkpiUU1sTTVudTNRVlB2ZzRR?oc=5"
    },
    {
      "title": "集会所付近で1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBJQjZGRHhHbXduWW01MzJYSnNjZ1hlM1FWMXU4QXZlYU1DN1FaSWRCVEhlVVdzYTRwaTFPel9Ebmc0bGk3TWljTXB4b3dLbVRoaF9fNWF0R0JpTzhvRDVabzB5clNIMndybDVFZFFBRVk0ZXhHdXB0clhIb9IBgAFBVV95cUxPaElxTHlybVpuaVNCeUNYLW9ZTVdoV1FCWGZ4bjlzUENnQjRDQklBcXlPSVlrYnllMk55NmJEUk1MTWhpNmY5NURFMXlEc0EzS0dSUXFycGJKeEIzeGsyeTRJeGp5QXNnNkRMaENOb3BsWTRuSE1IY3dzLXVoVVhLaw?oc=5"
    },
    {
      "title": "道路付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOcTlKdnkzT2dONVpDYlVuRktTUVA1WmhOWXhONW81YWtFZ2FuenlPRW5ia3V4U2tUNjQwOHdQTUVYa3hfYzNMSEctNUtYSzdlMjhFdEVhWGw1aEZVWVFaNFRRVWh5OTFhbWZZN19PMm1FaG1wTENHUzR5SktWSGQ3WTBmQ3hfUW1Mc2k5LVp0dk1fVXFkd0JPT0lCTm1LNXYya0psbFJtOWJuVmNyaExua3l1eEgySm5uMWpqb0xaV0JmVDhpekxnVzRKYV9LM2120gGAAUFVX3lxTE5KNTZ0TE8zWHpVVHZkc3U2MEgtUDd0YW95U1dCU0ZxUHdnajRBQ25GVXdvNXFLZ09admlqZVpJdUhoR1lpNnA2c2x0VDJiWFF3Yk9idTcyT29RTFRKYzQtdXFOTjh5aV9vOURGaFYwSWNWSmZHMmw4alNiOU44aFNz?oc=5"
    },
    {
      "title": "クマの出没（七戸町後平）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ3daeDdsNS04SEtTNm9BWklFdkNNV3Z2M1A4S3VqZVZybGFoZkpzVjhqdG05QTlXS2JockItNkZaNDdvRl9IV2VSaWdRNElwekRyY1NBWF9IVUhEUDRUODJDc25Vdl9hVjNPRWY1QktfTE12R2NfNnVwZXNYanpLM1dTcnpzcEI2dklCUXpFb1VpSUZUY0FndXcwWjDSAaIBQVVfeXFMTUdjNzdrdXdkcGhYa3lSczZJSEx1UVZ5aVllX3dvX3pNQmUzS1RSTWlpUno3aGFRbFRXdXVta0dvWHdLRTRTXzBHa204dWVPdmNiZHlaLTMzTkc4VUpRM1JYQlVYNVEteDl1SUJNN1VpNVdTaHQwTGE2NXZpMXVKMEtFeHFyMkFVLVZUN1pRM2d6LXlpTXMtLUgzQ2xYbXlzUDln?oc=5"
    },
    {
      "title": "犬落瀬でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOeWxVOWowWTVLM1NOZnhPZ05jWWktWGo2dUJwT3ptNWlJNDlMV2k4NTRJcDJ0Z19kaTRvUzJhMVhCMU95VEI0ZU90OHU2eTQ4cEpRN2lmRk1MZFpTMW9aUVJwbjVuXzEyZ1AtUE9OODNFXzF0VjhYTVBqRTNJdTlERnczNmhuMkNlWENKZGNxNnFXeEtqRU4xczZaTTJiVWlWdk5ZV19CSERia3ZOYmFF0gGiAUFVX3lxTE9rUVlIZW1ta2Y3RHpDLXNIT3ZxcHVjUmp0X1FDSGtIU2lGWFlBb1RmN0VoQW96OXFzTmxRVlotakNKOW5xSEt3cTd3SzRpVmlDelR0eElRMWRhbGlZcmQtYTNONkFGYTNYZnNxS1pvLW5SSGxJeHkzdmlwYVk2MkhTTm1NZFhsTnNMRXRRc3RiUERzNjRPekRnUEh1NndRajNuZw?oc=5"
    },
    {
      "title": "駒込でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOTGRqbEg2b2M4Mm9yeUdBOWt6N2JyVDNZcGIwSXhNUmIwWTB4REE1d21VOG1yWDdvaS1zOF9XbGFwbEpsNEtmSVRlWjVRb2IyMUhzd3pZeU82Y2FQdEpTc1hZRGFmYU1lbVNhTUpmdE9pNl9VY080cUI4TTl1U0Rkc0NkSl8yOUt3RjZBRU55elFPRGVTaHM2TUhRWS12cXIwbUo2UWZHWTVHQnhXV0ZR0gGiAUFVX3lxTE90U0VRQjBrMThNTE5ic2xEOUw2bjMwYlU2UENxTEhZUHIyci1TT3NaQzZZcnlSNFAtelpUcEZOTmFMLXRycHRjMzhvd3dfa21zZFB5RThDS1lMaDUyOWxGVXVmZEw0Z1o5VjNwS3prUloyR3NHdGc1Qm9lSHJTRFExMjZKQWJSTHdyaWlTNVZDVmpzeU1BRnRDUHJlLUZvWFY3dw?oc=5"
    },
    {
      "title": "民家近くの木にクマ棚を確認",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOTTE3cmdOTGViWjNzNjlyY2VsMkZ5dV9yM2tTZzRncGd3Q3NoYnRHdzNIR0xzOVRNSXNlTVpGcEZwdDlTTlUyWFpYSXF5dE5BcVNCcm5YWEI5d3NrV0xBVGdZZXJEMEhtYWkzbEp0ejVScS1HNDdsaGNJYmVnc0lCZF9wVmo5dXM?oc=5"
    },
    {
      "title": "クマの出没（仙台市太白区）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQnpwbjF6YnR0c2c1ZmhLcVFqSkVMSUZ1THJrWnpraE1oRFNSeWVOMTcxVTZweEhTaDlKSTg4WlZ5MnJpVDBkbXlTSG12YXExa1RIY2dSSVYwVUdqQWlXMThkbnRqNE5DVlZ1T1ZGYUkzV3NMTkNPcDluWk5KelR1bjBNcjNlRElMNldGLWpDTGR4V2JVSXpKYmkwSl_SAaIBQVVfeXFMTTdhSWFucHM1TE4xc1RNRTVZcGJTUDBTQW8yUlRhTjFXYWxnYXBHT1I4dVJ6UVE3bjBQb3NlUXNUWU9aY2dKbjdscTIwR3E3QjFlWF9FV2UybkRmS01Lb2lHaXJtUkI3c3owWV9VNmFUb1dHTm8xb0g3T3RtRk8tTnhJbExIaDZMOEVSckpUTTVKenZHcFFVQWppa19rR0tQVjdB?oc=5"
    },
    {
      "title": "クマの出没（大郷町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdS0xd1pPSjlqejZ3RVhrbEdEU1RnbVl6VGFUbG1OUWRjckZ4Wk1yVTdmSGdhV1hNR1Fzb0hmZEI3cXlEbG5obWdISHd4ZFlzRnRINkJFY2NsWUtVTUhBZjFLQWNCTUtLRTkwbW5vNTRwVWEtN0o3SlZjbkZpRFhzMkVFZWo0ejd5LW1NQmpOb0F3Q2U0d3ctSGxYT3rSAaIBQVVfeXFMTlhvdi1RZk5fRDZ6b0VMaFQ5ekJOZnlUZU9HRUJTQTk0NWRoX3lRc1VRQ2hIWGM2dUVLcjZWZGl6M3pqa1M2MUdMbzNrV3hUSzFFRklVUGhjVW10VXlRN0w3RkRNY05qTHo0bU1GekVKckhzbFNZMVFKM0FYcHItdVY0SjVCWFk0ZldhbDdCZjE4dXRPbjNQZ25YdmloZS1xNFFn?oc=5"
    },
    {
      "title": "クマの出没（富谷市杜乃橋）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPR1VHTXFXZWlpU2d0Z2ZWM3o2VHFQNWQybWQ0NlJWUHNVc1dwa0wyV2RmRkFoQldhbnVQa1JldjhUZDREQ1JNNmFzM2haeHRGNUxFcTlUWFV6b0thQmN5VGtPcWFXRDlzWkphOFBuTE0ydklFTm44M1JqaHhIaWIzdWdwMGRxNFMta21EWGM2eUtycEt1QTRrdTd0MDDSAaIBQVVfeXFMTzNrVzFVQ0h4Z182S0xXWmJRaDRPbHVVNTN1XzRURTJxdU5FZ2J2cFFIZE5Fb01zcU5Edi1abmpaY2NHWVF5YjljZTRSQWRud29qNlZyQlpwWS1tUk5lUGtEOWJmX1NHVk9TM2dTNy1tOFlEN0VUV2VhTW9iSE01bEdBeW9UZXlja0hFQ1NwbUo5cGNDNVQ2WTU1MndzR3RjQUtR?oc=5"
    },
    {
      "title": "仙台・上愛子で熊目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1lWkU1V2xfbEVPUkJ2YllRSGpQTTNSRllyUHhPNlk4M2tmUlZkVmFXeEMzWE1wN1k2S3NpOEdhXzRiVHhHYkhaQV80Z0ZxQTBlYkl0MmNfSXo5a0taSDdHYw?oc=5"
    },
    {
      "title": "クマの出没（北上市）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbmVHVm9vMWJhMm0zLWotLUtmeTZPWFdCbElhZWFGM2xVNFBoTldtRTdoQk9NUlQtc19admpNRVEydjIxMU50WTFjTkRNWjk2dWNkX0V5UmVxVFdaX2ZyaW14ZF9mTlFTZmw5TmVNMzktRE1ZV0RGR3lXMEI1TWZlTjBqdmoxb2x5d2tuRnExVWQxY1B5ZUpreW55aS1yZWp6NF9PZGNtZmF1ZDNPcm9ZeWllUHlrTWVRcVhFX1VHS3REemJMc191Tkl0ZjRMY000OEpGWHJ2aG9ydTBjVnlQTVRsbE5IUFozMThRcG1nX05Dd9IBogFBVV95cUxPTGxkMjF3WU5VQ2MzM0pfTjkzWDF0SHpMbFpMclIzRUNzUkZfNVRzaUNub3Z4R05mMEc4bV8wX21uVDlSdHU0TTc1cWhDMndJZ2p2R0RfRzRXbkN2c0IwbkF6My1YLWlNbVRHY0t6MTNFbTFSeDd3NHN1NFFjYThaUFZ1UlVuS1MxWUpuYUVYNUNtUjJyTEpXU3lHNGJVSDhWSHc?oc=5"
    },
    {
      "title": "明科中川手でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ3VxTWM5Zy1CQXlYUU1RVjFZa3p1Y3d3ZlRaOHp0YlBfakpmWVdKMnNadXVEbzJ6enlwTkVCb1g0YVhPNVVWNUxUeDVXZHg0LU9iRFVKaTRkTGkzMWNMZ1l1MHF2UDdwcW9qSWgyMF9fXzkyOHRQc05iemFENzh3Y2JVelFTbjJHX0U4Rjh4VGI4MmxTdmNrLTRGVULSAaIBQVVfeXFMT2ZJWnVJNTk4LWNISVg5TGZtRFZ1ZDdRLXlERG5aZzdqQy12OGkxTl9mclJZcEcwNVZxdFYzbVdQVlhhdlBkaFRQZzB5MDlFVFZuekxJcjJLdGowc2ZMdWRKQlBnQWVWTGV0bzIxUGxxZ0w4NktKLXNNYzNKblRWc0tjTkRMZkVSdW9iZGhsNkRERzBfOTBmcEZmY3VMTmI5eXZ3?oc=5"
    },
    {
      "title": "小坂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUHBUTTluandDaTBnbmV0U1RFU0NZTU1kcElINllFRi1lVURHMUsyQjdId1lxWFFkbE90X3hJNmJsTVZpemRHRGxXWHpoTElKbllzdlpDNHM3ZVB4amEydjdJalVOdXEzNTF4TUtUNVVVQVpVaXEtTXl0bFpmSlM1TXhXU05IVE9XZkNOSGtvRU93SXA2bzNETUc3N0zSAaIBQVVfeXFMT0c3STFyaG4wbjJFajBOaGdUMmhjYi1xdUdBRXJ0NExXOEdJWkh3ak42V04zR2xNUVdEMzk0aUN0X2N0T0J0cG1FWnZkQ1BVTlZrX0dUTHdIT0pyVTY2M0pSWU13Mk54eE14TVZDR2lPcEprQnUwcUhnVmF4VWRZQm1lRUR1YVo2dDN5N19kamhKX1J2RXlzVUVtdVZrZXpIQlFR?oc=5"
    },
    {
      "title": "上桜田でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQQzVfRW9vX28ybUptejdyVWNyTzIwSExkUDRNWFkxblJsSm55MEdGUjg1ZGxPQnpKZGt0b3JlWmxMRkZHN1lWWUlwWkZlVFdJUlBJQzBMN01zRFRUOTd3aGp5YlV3cGpIekM1TWxjbGJ4OG5ZbDZIbHZWNWhrM3hTSXdzTjhUSTU3al9NbHkzNXV1TVlaa253OEFLX2J6NjVvUUZhdzRwU3ExWUNLQnhN0gGiAUFVX3lxTFBONk94eFpLZmhsbFZvMHYyR0RUQXE2ZWJEWmpyZElSYkM0Ni1GSlZSVXhLX29kZmdUR1k2YkFfeGdyZ2pMTjAwMlh4TnU4Zll0MDh6cGJnaGJydnBoRkE1LXpHb1Vpc1M2cEpQRms0QUdhVmxjSVlMM3FhYy1KS1Z3WXY5aGNnYmVMUFFMQm5WSVBDRTFJdzhod2xxWDIyaU93dw?oc=5"
    },
    {
      "title": "都留市大野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdDBKNVhVakJveDcxQWhqbnJBWTZCMkJZRWg0OWp4WUVvUkxaZnNQcl94a0h6OGs5V09uUXROZ0I0TDdQXzlLWDlGVzVWZnF2NFJUaG1FSmtTZHpGbWllS2Y2YXN6NTlaNThLWDRzRlhxVVE3eGJQQ1ZVUEtfdk1ab3dzZkpIcDJxUmdYYkJQck96SUVYUG5LUmRwR0LSAaIBQVVfeXFMUFNYdHo2Z0ZZdVVGSE5sOWRvWEtXSzNiSWE2eUd6SGU4V2dudlFOci12VWdBLTJYeUhUcnY3WGtuS1hXYzE2TlcxQUdPVXViR0RqaWU1c0hYVFFGd0NPaGR2TFNsUnFlSlI1bkpaVkVDV2tSVmJjbFB0VWRnbDZqMUJVWWpYaGhrRnhFclF0RkRzaFZQWmxJMTR4djFyX1BpMUN3?oc=5"
    },
    {
      "title": "猪之頭公園付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5kbURFUFNieHdoU05WOUdnVE5zU0dIbHFVbkRYS3BMdlVKZG9zdS1kdHZpckJ2M1VwdTRsU0dNVmZZSE82eTd1UXVjTzU4M2VtVl9WZWRlMnYyZw?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":13},{"pref":"青森県","count":10},{"pref":"京都府","count":8},{"pref":"新潟県","count":5},{"pref":"山口県","count":5},{"pref":"島根県","count":4},{"pref":"宮城県","count":4},{"pref":"福島県","count":3},{"pref":"富山県","count":2},{"pref":"栃木県","count":2},{"pref":"和歌山県","count":2},{"pref":"兵庫県","count":2},{"pref":"山梨県","count":2},{"pref":"福井県","count":1},{"pref":"愛知県","count":1},{"pref":"静岡県","count":1},{"pref":"岩手県","count":1},{"pref":"長野県","count":1},{"pref":"秋田県","count":1},{"pref":"山形県","count":1}];

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
        <span>対象期間: 2026年9月30日</span>
        <span>·</span>
        <span>公開: 2026-10-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={69}
        periodLabel={"2026年9月30日"}
      />

      <h2>主要事案：京都府綾部市における緊急銃猟と生活圏出没</h2>
      <p>2026年9月30日の集計データにおいて、人身被害の報告は0件（キーワード一致0件）であった。しかし、京都府綾部市では住宅地、民家敷地内、および空き家の敷地建物間に居座るクマ1頭が確認され、緊急銃猟により駆除された（※1、※2、※3、※4、※5）。都市部キーワード一致は3件、捕獲・銃猟キーワード一致は計9件に達しており、市街地や住宅密集地への侵入に対して自治体および猟友会が迅速な対応を実施した事例として注目される。</p>
      <p>また、山口県周南市大字長穂ではイノシシやくくり罠等への錯誤捕獲が確認されたほか、北海道厚沢部町においても捕獲が記録されている。人身被害に至らない場合でも、家屋や公共施設周辺における出没事案は高水準で推移している。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">自治体・地点</th>
              <th className="px-3 py-2">事象区分</th>
              <th className="px-3 py-2">概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">綾部市（住宅地・空き家）</td><td className="px-3 py-2 text-xs">駆除（緊急銃猟）</td><td className="px-3 py-2 text-xs">民家敷地・空き家間に居座る1頭を緊急銃猟で駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">厚沢部町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">個体の捕獲を実施</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">周南市大字長穂</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">長穂地区において錯誤捕獲を記録</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">佐野市前日橋付近</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">河川内にてクマ1頭を目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">豊田市</td><td className="px-3 py-2 text-xs">痕跡</td><td className="px-3 py-2 text-xs">民家近くの樹木でクマ棚を確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">雲南市三刀屋町・掛合町</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">県道付近で成獣・幼獣、会館付近で幼獣を目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没傾向と発生動態</h2>
      <h3>北海道</h3>
      <p>北海道では本日最多となる13件の事案が集計された。厚沢部町での捕獲事例のほか、羽幌町曙（※13）、鹿部町本別（※14）、根室市酪陽（※15）、富良野市下御料（※16）など、道南から道北・道東・道央に至る全道域で目撃や出没情報が継続して報告されている。農地や山林境界部だけでなく、集落近郊での活動が依然として活発である。</p>
      <h3>東北地方</h3>
      <p>東北地方では青森県が10件、宮城県が4件、福島県が3件のほか、岩手県、秋田県、山形県でも各事案が確認された。青森県内では七戸町坪集会所付近（※17）や後平（※19）、平川市碇ケ関樋ケ沢の道路付近（※18）、六戸町犬落瀬（※20）、青森市駒込（※21）など、集会所や生活道路周辺での目撃・痕跡が相次いだ。宮城県では仙台市太白区秋保町湯元（※23）および上愛子（※26）、大郷町山崎舘（※24）、富谷市杜乃橋1丁目（※25）と住宅街近接地域で目撃された。福島県須賀川市では袋田地区などの田畑において体長約1メートルの個体が目撃されている（※6、※7）。岩手県北上市北鬼柳（※27）、秋田県小坂町小坂（※29）、山形県山形市上桜田（※30）でも出没・痕跡が報告された。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で2件の報告があった。佐野市前日橋付近の河川内においてクマ1頭が目撃されたほか、同市内での情報提供が継続している。河川敷は山林から市街地近郊への移動回廊として機能しやすいため、河川周辺の警戒体制が重要となる。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県で5件、富山県で2件が記録されたほか、長野県、山梨県、静岡県、愛知県、福井県で各事案が確認された。新潟県長岡市ではふれあいセンター付近や民家裏手での出没（※8、※9）、魚沼市下田では道路を東方向へ横断する子クマ1頭が目撃された（※10）。富山県富山市では中田や婦中町新町で子グマらしき個体が目撃されている（※11）。愛知県豊田市では民家近くの立木にクマ棚（樹上採食痕）が確認され（※22）、長野県安曇野市明科中川手（※28）、山梨県都留市大野（※31）、静岡県富士宮市猪之頭公園付近（※32）、福井県小浜市下根来でも成獣が確認されている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府綾部市で8件の集中記録があり、家屋周辺への定着個体に対する緊急銃猟が実施された。兵庫県では丹波市青垣町沢野での痕跡や新温泉町栃谷での出没が報告され、和歌山県田辺市中辺路町小皆や紀美野町毛原下地区山中でも出没・痕跡が記録された。中国地方では山口県で5件、島根県で4件が集計された。山口県周南市では錯誤捕獲に加え大字須々万本郷や大字徳山で痕跡が確認され、岩国市美和町でも出没痕跡が見られた。島根県雲南市三刀屋町多久和の県道272号付近では成獣1頭と幼獣1頭、掛合町波多宮内の宮内会館付近では幼獣1頭がそれぞれ目撃された（※12）。四国・九州地方からの報告は本日のデータには含まれていない。</p>
      <h2>リスク評価：生活圏接近と管理上の課題</h2>
      <p>本日の観測データ（総件数69件）を野生動物管理の観点から総合的に評価すると、以下の3点が顕著な特徴として挙げられる。</p>
      <ul>
        <li>人口圏・居住空間への高深度な侵入：京都府綾部市における民家敷地や空き家間への居座り、新潟県長岡市の民家裏手、愛知県豊田市の民家近隣樹木でのクマ棚形成など、人間の日常的居住エリアの極めて近傍で活動する事例が複数確認された。</li>
        <li>移動回廊および採食環境の利用：栃木県佐野市の河川内目撃や、福島県須賀川市の田畑、島根県雲南市の県道沿い・会館付近など、河川敷や道路インフラ沿いを移動ルートや採食場として利用している様子が示されている。</li>
        <li>個体群属性と管理介入：島根県雲南市での成獣・幼獣の同行や単独幼獣、新潟県魚沼市・富山県富山市での子クマ目撃など、成獣のみならず幼獣・親子の徘徊が目立つ。また、山口県周南市での錯誤捕獲や綾部市での緊急銃猟駆除に見られるように、生活圏防護のための物理的排除・捕獲圧の行使が必要とされる局面が発生している。</li>
      </ul>
      <p>人身被害は発生していないものの、空き家や河川敷を伝った集落・住宅密集地への侵入リスクは高く、自治体・住民・猟友会の連携による警戒体制と迅速な安全確保措置の維持が求められる。</p>

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
          <dd>2026年9月30日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-01</dd>
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
