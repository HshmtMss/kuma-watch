// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月7日 / mode: daily-report / 生成日: 2026-08-08
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-07-daily-report";
const TITLE = "2026年8月7日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月7日に記録されたクマ関連事案は全国で118件に達した。岐阜県高山市における人身被害をはじめ、北海道および山口県での捕獲、農作物食害や教育施設敷地内への接近など、全国各地で人間活動圏との交錯が確認された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-08",
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
  datePublished: "2026-08-08",
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
      "title": "2026年8月7日 岐阜県高山市 高山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9tU2FIY25VT0htOHVhbFFFZUN1VjI2YVQyZUw4WENVQ19xanFsRjdDeUVQOUp3OHBrV3FEUzFUV3FDa3JhRFpiOUw5d0hDaWJ3MzM1OHdJbVhEaEhpMEcxUThORXJMaGpoNkI0LTdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 岐阜県高山市 高山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5DUXhtMXNGN3g1VUR3QU1jZWkxaGxfeU5NSzI4YWpWdV9UYTlqY1pUUlpiV2RTbndoRTVxUjR1MnJERTBRTTFBQzVfNlh0RXBpb094MHVKQ3hhMlAxZnduNXdIWjJHeVp1?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 岐阜県高山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9QcEpFaE9pOE1ERHBZQXRoSXdxanJ1WmU3X1gzQ3c2TDVNSmRTMzBxZFVzSzQtU21kNWRDLW9HU1pEa2hZeUJhU1NHcXJzV0xWUDJpWXlmVERPOWZEM2hpREJTTW5yMGJ4b3BPV1Rn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 北海道厚真町の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 北海道足寄町の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山口県岩国市 美和町生見の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 北海道函館市 函館市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9MeXl4ZXJqZ3NDR09ybTBMY0txQnlaZ282bndES1JYUW5oU1EyZXhXRUVyYmVSM3FuaHluejN6TENZQXdHVFZDdVljcDROaXI4MWtZb0hMNWJSZGJGNXh2c3pPWWxRaHFha1RoVXJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 秋田県鹿角市 八幡平の畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFA3Qm5NWnUwSVdseWpQUm9KNEZEVXpIa1dIOUx4cG9paDN5LXJlNHFLNTFUTFRKdTl4dFFGTWRZV0RfbXMyMXV4V1A2SVNYVGFmSGlXTDhMdElzcnFUVVpOQTdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 長野県箕輪町の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 広島県大竹市 比作地区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9Kd3R4al9SSGJ0MGRCbUxaa200dXIxek9oTGdRR3N4bDZDR05QRmE4NTNnbHVheVc2NUlwbW1wUWRNYTR1YmwyVlZIc1ZyUm45QUwzbjdiS05Nd1ZYU2Y0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 群馬県沼田市 利根町追貝地内　北部簡易水道第2配水池の南東800ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 北海道札幌市 南区定山渓の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYU5vM3BLQ1NJV2lydFd2RTA2YjFwVEpMa2dkRlJOVHBRaGVISnZMT2RvZGpPODVtVlFpRDVIRVN6d0pOLWxuZ09OUldWaHdrS0hWcHV6WTV3NnJIZjlyelVUb3VmOEVpc00zZW1fVDFsLUYwMnVBNU10c09raUluMnc1R2FhY0s4eWZBYjhTcWtiaGhURFhzaFRPT0HSAaIBQVVfeXFMUEVBREk3MFUzaUpSNUpuTU1ERFJVWnlzaEU0eUFYbXVhTFhUeG1HU1dWMkRjR0pZRDh3ZnBwY0hITmZ6d19MWno2MHVmaEczTk9Wd0ZGamR1ay1BVEJZUzFrS0JmNjVMWGxhTFVxUUptaVhUazRIcGt3M3hmc1FjU25EWHNyOW5sWWtMMFJQcVZGTk9FMy1TRjJPdU14bkh1d3R3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 北海道美瑛町 旭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbWJrZHJlR3dURGJ1MXpKdUxSSTd6dHZaRjRVNE9iRTRVX0RDdWRYaXVRSjJhYV9HaTI4VE5DSlpQaXNtdUQ4NFUxemZ2QzRDTFhmd2NZUVRMZHljdXRXZWN0SE9HSGozZ0tHZ0c3UDhTZ245NkNLemNZLVBNc3Ezb0dxaElLSGE2akJ4RlpqZzBCM3B6aDNCUWlsNUTSAaIBQVVfeXFMTlVSOVRJbWx4cnpUYnczaGE4VmdOU2hLSElaaDBlcUZfZ0x3cU5Zd081X3NKZkFNZ3pETzRuTnBwS09FaGoydW1DOTFSS0pGOTI3d0tPcGFKWUJFRXRVaTR4N0VxM1FtMi1PeGM0VmpYbnotUnhrc2lLZjBpSjdxUmpMcXpYcmpwRVo4ZTVMZFBaV0RXME9kcHhnWDdIZnE2ZzVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 青森県田子町 道路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9wX25YelN6d1dBWC1uZDZWalpfakZnVDlLbkc1UWhSM1V6dW9RRFFLZHZ5YkU0NFMxcmkyQW16SFQwQm4waGtzaVpjSHVoWTBvODk4SEFGNVRQYV9WVS1zdkFRU2tKV0pLWWU2SEdkVlI5bE8zeFBkT3BKV0ZJWTg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 青森県田子町 田子町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxORWhGcFZ4R3ZObG1VN1B2aGZTNF9zdWwzenJWMGxWQlYwZHZ2VVRoa0NiYU41NVlkMTk4dWR2VHNWWGNhVUlDNi1NcmFGM3A4bkFPSllSRU5Jc0FhbnNmXzdzQXh4cklfY0ZNeW1fVnlpTnNfbFpoajVaQ0VfeHowa2RveVJBa2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 青森県つがる市 メロンロード近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA0Qy1OcDh6NFhuNFFxUjdQMkFRUnpIUnBITGk4R1NnOTJhZzR1Um94cjRxZzVjU3pvWmZkWHU3V2ptWi1VQm1YWkZXd2JITUpGU3JIY3J1Tm1LM3hpdDNNcTVvTENaMUdlUFpzTnJxdzFObW9hNjA2aVFzN19lcDg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 青森県八戸市 八戸市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBSQkl4WklYdEVPRzZYRGtfc29Hb250V2ZjMlFIeURjc2tOWHItUHJBbllfLTBBdzhlSFgyX25yTVA5WU5kZXd5aWZYWUYxd3ctWXRLWXFJZEk1Uk5nMFBOY3c2NEdfOWtwQTI3RHpYZktCcmhHT3V4elVKX3ltNnM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 青森県六ヶ所村 六ヶ所村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBSQkl4WklYdEVPRzZYRGtfc29Hb250V2ZjMlFIeURjc2tOWHItUHJBbllfLTBBdzhlSFgyX25yTVA5WU5kZXd5aWZYWUYxd3ctWXRLWXFJZEk1Uk5nMFBOY3c2NEdfOWtwQTI3RHpYZktCcmhHT3V4elVKX3ltNnM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 福島県福島市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9IZV83Z2J4WnRyRW5CMG84UHpFZWw5ZnQ3anVrR2ZTenh3TkdVVVFpWVBwUEhHU29rNUNGNnZYMWt2RThyRjJ3N2ltdmtpSmZfLXRTLUFMZTlBN3hfTkMwRFdCTDBxQ2ZMX2E3SGU1c2hJcHhNVWU4ZnhTMW9VbG8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 福島県福島市 福島市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9SNkJqd0dmVDdvN3lnOC1UM0pvbWdSLURLTnk5ajh4cTV3NlIzdGM4TWdkUU1nako4VzAzdlZNWnd0WGEzNjh5NnROS3ZxSnlrZ2FmOGtkMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 福島県柳津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE95LVNzcEJRUGZmUXZzRnk0aXF1WjZrbjh4ajN6Y21IeTJieXNIdlljdGR0U1NDR0ZhRGdURGY5a05vdXQzWXJ2Z2FRZDVIQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 福島県柳津町 柳津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1pbnhSS0hSdGZramNzbWtXN255WlFCNkVKRlR3cFJFRXN2WUJfcy01M1pqaVpINWhMSVZNWFdXaVN1N21FbmZzclo1aVVHRWtMR1VMeEtBbUh2aHhCdjU0U1lnV0N1MWJtZ2VHLVFnb2l1UHRRYl9tUVJMVTNKNFk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 福島県玉川村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5qdkVKanRxd1N1V2VPbmU3M0hkSzZpdnB5NFBMd2dYQzc1NWMwUWpRMEZrVTd2YmYzcGJSRGpTZEo0OVo4dEdTakczaWtsREM3VkJKOHRrczRlMF9nazdoUktfRWx1SUx1M3l2UFg0TdIBdEFVX3lxTE1lLXA0UFBQN2hjV1J2UWZvM29mZ0VrUDY4Vkl1ODhoR2dzZlRMWmN2blM2dG9QblBxZzctdmt2ankxemJ4TTdkMlRDcjNlN09BNVNEUXNOa1hGSDM3aHMtSHRqT3pFT3g4b3dDck9hUWkwZHJq?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 宮城県仙台市 宮城大近くの会社敷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBSNkcwMFAwaHByTk9EcU90VU9xR1NFTXp0TTdIM1Vua19qQnlUOTBRYjk0Q1ZCQy1mcXYzY2ZCZ2RHME9vc0ZBVXdqaw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 宮城県仙台市 宮城大近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9rdHN0aXVlelpGMWlSVDJwUXNGd0g0bzNfWkZKRU4xWXlnNVp5dXc5bkpMbWVPV0R6WDFJTGtLVE9RalRybFV2alJDWXpZTFB5V083NGxKemZoM3d2RmIzaA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 宮城県仙台市 青葉区上愛子宮下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWjg5bWFlOVdGaFlOcVVQWVk1aE1nNFpFdTJqem92dy1GeUxFVXpqTktMbmY5NkIxOWN3V3pNR2xlazVYbVBaWlZaeHNGOVVpaE44X25wMmVmWW1mRU5SOFkzSXhLT2lUaG1LTm9ncVRRSWE5a3JVajhiUzVSeDFiVnk2TjNRaUVHVGJuODFFeGhTOENDREpPNkx3TGbSAaIBQVVfeXFMUGlWaHp3WG94elB3WVpvWjFzQW1XaHE4TVBKWHhLR2FUQlBfb3ljRktWZTVsOXJvemVTNzVnNWVmaFZXeFVoUHlIeFFteFBObFI0QnRaMG5rS09IVWlPcWsxV0hHSnhyZG5oQ05CNlNtRjhsdUhoVXBkbGctUlhvQnMyU2trOEpVNVZITm1XS2hRS0U0dVFoRmpFcVVzNUlHbVNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 宮城県仙台市青葉区の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 宮城県大和町の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山形県鶴岡市 高校の敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1QS3hJNnp4SEoxcFotYmxhUzh0QkhJdVBaQTBYTWV2YmdpTnhrTFNibWxBdEthck1sMlk4N2hjbFYxYlFKRDlkdWZhX0NlWVlRdW9XTWdtVUQ2RlpLeWpNMnFoQTNMalVocEVBVU9jY9IBdEFVX3lxTE9Lak15b2dWX2Q0cXYxcXFZWnJyOFY4Qmt4Qm1HWi1DRzV2dkFSVnBobVcta1BGaDZEUkNFN1E0YnhRRVV6UWZwVXRYYXFuR3hCblJyT0Q0SF8wNG5yWkdYblF6ZThMdlo2ell0Mno3UExmSV9W?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 山形県鶴岡市 高校敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBPRXJYV3JDTEhPYXVmUHhPckNpYlJTRXdhTkJfT084YWZiUFRUdlVhYWt6S2ZTNVpmSkc3d2tyVVVCSEVNYmk4Y2hKRVRuTlBtQnBvWFRPMmhxdGd0S2FpV3AweHJYaGhoM3h0UjZzTkZTZFVxOU5QRmVGdXJpM0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 山形県西川町 大井沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山形県酒田市 浜中の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山形県尾花沢市 尾花沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 岩手県盛岡市 北松園三丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 岩手県盛岡市 北松園3丁目付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOZG9raWUwdGZqQWViMWNISUx6c1ZVVXhLbDdHNmRYakZQVEYtdG1CbW5hU29Bd01mVTUzTGU0Q21mVkp2XzlYelBaUVd1bFI2MXg5YWh0VTZDa0s1QXF6dW4tQ1BfSjlocVJCZ2pPMjJvUFRRZTNhUUR0UzRLUGhQTGRvT3BldUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 岩手県盛岡市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE00c2ZyYko5OC15cE5hUjdqT1FxOGs4RFlLLVFyWEc4YV9wMVJUbGdEajFrOEhBMV9JNGFqVkY1LUpySWllS0p4U1BZVklBaFBfdVJVTFJScE45NjEyTU04?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 秋田県潟上市 昭和大久保元木田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR1B3UVUzNjhDZjB5bi1aM0h3T2UyUEk2X2NzMkRtd2s5XzVRbzRISW1CODBrUkY2ZDF2LVZEeTkxOE4wdVktNXBjTHVSR0dtX1pFZm92ZE4yX1VSWW1ROXNqVTZvSktFLXdsSHNNSDNkRkZ1V2d3V3M0cmgyUjF6RTI5T0hieTdPdWt5anRYQlhXSnR6NElCZGVBVEnSAaIBQVVfeXFMUEpWWEtlLWxFTEFsWWxXdnBOX0lYbXJNaWlWZ0hYY0VNY3I5UVktSjZUb1hXTC1wbDhxSmtWMUV4Z0JCVGdBTHRnR192b0FPc0QzLW5Ta19DaE12TDNYWS1Jckw0RTFaVExiMVdOZF9TSk9qR2NKUWJIZmRZazFVeUxackVNUERtUEVaX2pRN0ZtZ2lnUTIxdWYzeHk3bVo1Tmpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 秋田県秋田市 仁別小水沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdVU2eW15QjM5MHAxalpNMUJLWEhtQVNoUUJoQXJSUG9RV01Hc29nSms3dEpIdGZFazdUcjhnQnI5a0thSC1TcWVaYUNxcnNVeWpxdnlza3plSTVyYlZQZDVnM3J4QTFxeGhzQjRzWC1Kc1dBWC0xSmlZemRwcG9SVGF2eWZXQklpTDdkbnVkYkdsazhrNWctREV0YTjSAaIBQVVfeXFMTnU2bkZkVWlZYU5PXzcxUW52R3ptMEstcW1qTnhXZS1haTRvYVdDN2ttSDM4S2w1QnZKX3pEVkpZYlJqczUxNGlqMExXQmJpejRmaWZLRG1jUk1CMF8tZFRyU0tzOWFGNnNMbVVGVzBTd0JfUEpZVGpEa0d6NTBWMEpyMHMtTlJZTW9uTEMyVVRiZDRzS3hwYjhXdTBSOEhWSW1B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 秋田県羽後町 中仙道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZXhqZUNNUmtwZkJ1d0w4bFlONlJxUGRqM05vcEdUYkNYX3hscHFVbG4zWDlELXptTUo0MkdtYXkwZXM3a3h5Unp5M2V1NjBqSVV5ZW9KbXpzaHBHQzFRcWRLdEl5eS1GeWsyeFBWSjYwSEZ4QXN4bVlMb3BUSnNpYXgtSHRzcXprOWNhWVlmWXZzVUJlWk5KXzRpYWbSAaIBQVVfeXFMTklRUWJnVTdLM202eHJuNFQtTGJXSUdXeUV3dzEzUHYxUnRfZTBseDU3XzdOc3Jnb2pkVUpiSkQxV0ZhbU82Z1IweEJKQ2pGR1RwRzdnMGo4d19CdUlQU21KUEJFZWRVVUF1MERfWHgtd3hQTmRHbW1ybXM5VDRJVG5jRUpHTVhsSXRadVZPSUJsTDdhZ0xSYTJSZTFlNlpCVGJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 群馬県桐生市 住宅地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9IcGVDdUZpcmVmUEhnVktLRldobFRYdWVvSmNOQnQzVFJ3bHFTWlZpWVdhMHJRNUg2U0NFZVFHUFR4S3FfeS1KUDNORDhqd2RpRW5wQnE1eTU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 群馬県嬬恋村 嬬恋村大笹パノラマラインのウダラ沢付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 群馬県嬬恋村 嬬恋村芦生田小熊沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 群馬県みなかみ町 小日向地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 埼玉県深谷市 武蔵野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONXViTmRXYU1oaXdpVjdubW1BUG1yMzZFcGx0QVFGeE15SUR6Q3hRZkNNM0dGSmVXa01yR0pXOFRfSm83a2VjZ1NtX0JrVlRVVmw1aWhwTVJySGFoSW5GQVBiYjJXOUpNdkk2YjRKcFBUQ20xWWtkQnZmX05nbUtfNk9sRDlENkpJS3pDcDFESXczVlFwRXFYaFp0M2jSAaIBQVVfeXFMUEtFWFlTeDd4YnlVN0RRd2ZkOW9DRlJiN0NPbWg4RE5GYUh3VnlLSUtOSWViY0FydUJUM1MzZzBoR1FZQnRfd0o3al83RUR2RWc5RGpqNXNQY0VPOGFuaExnYk9WMGxUUVR0Vm5abG1XcnRXczF5bnN1RHJ2NDNPRmZjdzB1bkhGZWF1VG9UcENzdVg5M1ZLQmhkMmNsNndUdXFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 埼玉県深谷市 深谷市武蔵野の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 栃木県那須塩原市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1PbUd3SGI4S0tpZUFuSXlaLVlQXzRqTWpCX2syZlJLNy1WNEVEdXNTY2pvQnF2bnl0bEhqaHp2eGV5YlZjVDhKNTBXUFhySzZRa25uRFVJZzJ3RUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 栃木県那須塩原市 那須塩原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1oS3pUWm9NMEg1NmxJNE0xWDJNWldXU3hmVm9KN2Z6d3dnQ3JVN2gzSTltVlBpaU1qU2EzeHFaMkRyd3BieGFmeGRCQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 栃木県那須塩原市 戸田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT2xjQl82cFUxNEk4OVlEWkZORVhZSDlBdEZlaGcyY000T05QbC1lWmcyRksxdXYyWHNNSE9sdjFpT0lHbXRyb0xRWkw1SHE1aUVIWUJMSkZ3Q1BlMmN0WjFlc0U5OUl5WkZ6QzI2cDFSNU84NzhCRHUzbEUxcGIyMThtNlU3d0hWbFl4WEZCcElaTDYzMnJDeEI5dWzSAaIBQVVfeXFMT0RsdTREVkFEOHR6RlJTRkxYTWVCWjdUc1BEWUVTTE1DNU1ZOGdYWnlLWEozSE9pbVl1ejRJX2IxZi1FTFp5YUFLUHQ1QmlHeEtmaHloampiU0ZMa0xWZC00UE5CeHhFN2doNDM1V2ViTkFXelEtMWFJbjJ5SGRyRERRTzR5NEEzQnk5N2NVcG1CZXp3dTBBczNLX1VhRDZqMDZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 岐阜県高山市 高山市高根町阿多野郷の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 岐阜県白川町 黒川の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 新潟県新発田市 紫雲寺の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 新潟県新発田市 藤塚浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQTlQVzhEUEx5ckxYeHRXOUZGc0trbnQydUxZVThEcFRfYUxDdnBScUNPZFJKSDFtd1FzN25Qc2RvOWxlZTdTMkNIeThIREpMSUVCSFJJdk4wamZfZkI2eTNJMXZNeFYwU1l6dmVOckFBUUt0OEtHRVdZUFBaQkRBNWVlc1pNNzZ0cTlDUS1aSXlvaVViU2RLZVBtWjbSAaIBQVVfeXFMT2JvVHNMWWJwNk4tWnliT09rNXJYWWo5OGVadmRNcXJQZ21ocHdOY3lhYTZtS1RFc1VaZnR4UV9JaWQtZFRtbUdNa3g1RlRhV1doX0U3Y0J3V0Zmd3lfUE1KWU93UW91UWdvLW5LUFVLQ3hNMkc5T001SE9aUWU4MlVtOVJyU01YOXZDQ3VDZTJ0UV80eEVrd1hDWDhhNzdBSHFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 新潟県新発田市 新発田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE80Tkd0UWF2OXRMSXk2bF9wYVcyMXVIdXZUUk4tNjBUd0dGajN1eG9EazFxQlpfQjlPQmxQUWg5SFN3NzJOdnNPTGdfcw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 新潟県新発田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5VV0I5TUlzUWZJUE1ZWWF4M1BBekxOMkY0emstZnZHN3lFc2tVMkRNYnhRX29uOVY2S29pdFBLRXFkQVdoUUxJay1rSlZZNS1KaFF6SERHTWpfYW56X0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 新潟県津南町 上郷寺石の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTV9TNktQTkFwemRkSTRaZkstQUVpRWphM2wyZDlqS0wycGZ6UEpXYUN4aEhuS0lDbXplck1scTA3NHNpVHJvWWlUTkpBSnVQSUdKTlY5SVVyS1ZIdlBfRG9wZW1vMUlFUHZvOEp5RDVlTC05T3h3VUdOWHhDZ2pVWG5BZ2REUEZnbzRYOEhkNFhUa2ZzeFQ1UkFwTGfSAaIBQVVfeXFMTWx4Ui1QQXYzWjNiSXlmSVJwOUlhT2FjcjVXYzdoU0JtNmFyTlZhb2VsUFlpNkxOdFFFSW5iWmQtLW53aENVLWx2UmlTWUdrSlBILVNxa1c5eTlSLVpLVVR6WFNCT0FvQ1d3eEF4WmoyNVZ5T041aEFmbkZHbkkwZi1KSHZmcnNubFVSTUlaM2JKeEppbXJVR1BjV3RDYUxBbmVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 富山県富山市 小見の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 富山県富山市 高屋敷の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 富山県南砺市 砂子谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdVBYUDVlM0ZhUVo1MmxhczRpOEYyTjM0MXpSTmxINmk1VVpCbF9NQk9FcXNTT2I2bzBFYlBvR2x0U1p5MURxX09VaWVMLWRTQkZIN0ZENGVvU2RhemJOQ2xNMzBKYnM4WGVudnRwZmlTcTdRQVppb0FnS1ByaU9sZzBtSnNUcFdfS0hIVDBXTUtDV3FPOFB3cDI5OGbSAaIBQVVfeXFMTnRscnB2Q252Nk1NdG5ERVhNbHBEaWdGejV1ZUhHV3lKRFZBZjVSMUd1MnFIQUdJS2R6RmJBU0ZMOU9oREhDWTJNdkUyU2RKVE9WMnVIeXQtMWk0cmJtWllubGdQVlNmaWUwWkIwek9BSEtfa1ZxLTJ6TkluY3JWc3NSWDU1VzNjSnBpTGtZaWdrUDVhUkEwU1h2a2FXMFpVcWRB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 富山県南砺市 上見の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 富山県小矢部市 横谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 長野県軽井沢町の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 長野県中川村 片桐の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSmFfRGFXX3NoSE9kZG4yUE5jamtxZGpxWDl0T3cxa25LS0drbHJYTkVSVmhwZjV0bXQwZklTM0hWc1VFcE1pZk8zMHFsSWFHeTZMWjNyNW9QenpEYkdlbTg4UGVhbWp5clE4NE0xZmNoM3VGV1BYajMzRFRWbExPTXlsd3JRN0N5N3lTSUE0Y21adXJQS21hdFBpV3jSAaIBQVVfeXFMTmNxOVE0U1Y0QURLdndJVkFtckdWS1FLWXhmZEhNczU0NEJNSExJcm52YzFMWmk3ZGVwQUY3ejZOOGhaQlM4TE0xZ3lrUFk2XzJlcmRqd29rRXZlMFUyZkIxbmtCSXBEVW9MSGl6czk4VEFkcS1henV1MFlCcUV0RFpiNTRtaDNPSnJ2NjdJdjFydzVmNFFkakNLd1hkS3kzWkNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 長野県中川村の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 長野県塩尻市 広丘郷原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcVF4c2xFdDcwZW8wcEJDZ3ZTRnJZUWxJZHhvcGxWODh2dUk0MERBQTQzS3d4SFdHcHd3YVcyLTZQTE8tU2h0LTBmWWlydF9kekJneE1iamVLdlcxVDExeVBsWmRYVkRSVTdFR0N6UVB6QURvNjNVMEJoaTM5bHNMMEtLcm10ZHpEaUMxekRoM1NQejJvSDJMN1JKUWzSAaIBQVVfeXFMT1pISWpnX3FpVXhVejhRTllfcHh5ZzBKVVFqU1lQTzFFc0dHRFVjUXFnd2N3SnAxdF9EMXFFZ2xjM2JVTTVUWmlLQjN6QTU2NDZMNDRENHZ1RjZYMXhVSE50WG5WTmhtdHlxbkJrZ0x1NmJtdF85RVVYejAyM2R2NElNT0E2Zld0SUU5b0pwSEhySXF2cjNnVVpDOHg1RUtlR0Zn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 福井県高浜町 鎌倉の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山梨県早川町 薬袋の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 石川県白山市 釜清水町地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 静岡県静岡市葵区 中平の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 京都府宇治田原町 農地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBUZlhCSU9tNWRlZWRLZEhiSGZXamNKUEh3VFgxYkF0Y0NYTDVOaFVJdndpZjVhdkJZTDI0N1VXaDFNX1FMNnh5VlFkMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 京都府宇治田原町 宇治田原町の農地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5faDhDc3BoazA4ZjdHVl90VTlMNUFRcmRsUUlEN2tsVkdqV1JEdERBaEhjdXFCX0RoUDdrUXV1N1o4cGg0M2JXRXFyRTNReU5Hek05cTMyZURTWEtEeXF0XzRGVmJVaXJfMTVFWkVlXzV2TlBDQXExNw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 兵庫県豊岡市 出石町谷山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVE9qcjM2WHowUXVoMzFaaEdoVUFIY1EzYmpaeENCT3FkSTFORnEzSWJLZHdnaGxtSWRJN01Qb29EUTdSNDVSZGtkZzdSbXFMZ0wxQ1ZQUjhrR0E4TWphYmk2MkhnQkk4SXNlWHR0UlM3RmlHV2U0RU9zUkJkdXpTb21McS1UUENoYXhFTmRoOGNDSjJ1OTNZeEJGcmXSAaIBQVVfeXFMTjJQRkZLQXBMSEEtbm1pWjRwV0RtanduczQ2dW4tVlFmYklSVTN4Z21TTkRxTHNRWUxGWWlqN2pITXBjVE4tOWY5WjFtQ2RicmVmWkUza21iemVzYlcwcmliYVoxdnpWUGM4cmNBVjB4c0paN3E3RnF6SUNuX19KbDhLZHZ6bHFhc3Z3d1MwZm1ieWlzaFdwVkttT2lfdlJjVTVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 兵庫県上郡町 旭日乙の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNNkZsNlZLSVJtUzRoVWJOVnlfTndzZTdkN2tKVG1iQVNfa29nWG90NGZYQ1d0MXJIQWQ1ZWFKSG9yLUhYX0F4cDBTb3VwZnNoYkpadjh2S2l0dU5oNTdsWHM1emRSVzdZM3hxOGdQZVVJYnotcTRhc3BqRV9XQ0NJZU5aazNBYnV4MXRpY2RINlBVNnhPR21Na1E4MXA0eVQtLVHSAaIBQVVfeXFMTTZGbDZWS0lSbVM0aFViTlZ5X053c2U3ZDdrSlRtYkFTX2tvZ1hvdDRmWENXdDFySEFkNWVhSkhvci1IWF9BeHAwU291cGZzaGJKWnY4dktpdHVOaDU3bFhzNXpkUlc3WTN4cThnUGVVSWJ6LXE0YXNwakVfV0NDSWVOWmszQWJ1eDF0aWNkSDZQVTZ4T0dtTWtRODFwNHlULS1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 兵庫県丹波市 市島町北奥の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWXBvWU5NXzFoaGdRVTN4U1RyN0l4MG1ldmpzQTNWdm9vc3NKSkpDSGhqNlFmcFB6Q0c3UlhuRmFIZDZlYmFDSnFEMXVxVkFkeWlDYi1uSGNWd1JEaEtDV3M2Ym9TY3d1UG45OWdnYUF0dkZCOXAtUWhxNkloaDYzS2ZMbFlVMTNhd1R5M1lLSGJHSDNQY3pfazJuMmLSAaIBQVVfeXFMTmdiTnA2OEdQQ0dGemdRNXo0emhIcnBVWnFyT1BQQ1FUZnJOSFZScjJzYW9zS2VyZTRGem1WYlFSS29tbndHUXM5TWR1OGtfdmtuNG5HOXVEdzhxZHhNNmtud1UzM2lOQjlVVlk1Z3FXOGxWd0VlWmNtQUpDLWhHYXJESTJ1MVMtMTBFcGtndXRUUHhwZU1OeE8tcGFRbk1MSEZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 兵庫県養父市 船谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPakR2S2JWdV9yVmE2S2dZaWVqZTIxaEgzVUNLb1I0aEZ5UDl4a0xWYU5JbEllSG9YdjVSTHJ6OTJJaERoTzgyLTZyVlZZSWJtaW1kTXZad2ZsZVVVNnVtcWMwaWVweE5sdGROakZLS1Bld1gxOWdLcHNEajFNallmU3d3Z19zVVlESVAzNHBKTGFEbk1FRVVIb3I2SEp3LS1pNXfSAaIBQVVfeXFMT2pEdktiVnVfclZhNktnWWllamUyMWhIM1VDS29SNGhGeVA5eGtMVmFOSWxJZUhvWHY1UkxyejkySWhEaE84Mi02clZWWUlibWltZE12WndmbGVVVTZ1bXFjMGllcHhObHRkTmpGS0tQZXdYMTlnS3BzRGoxTWpZZlN3d2dfc1VZRElQMzRwSkxhRG5NRUVVSG9yNkhKdy0taTV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 奈良県十津川村 湯ノ原の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山口県岩国市 美和町北中山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVU05eFR5SmFwY2tSQUJ1dC04czN3X284cTFZbXZ3Y3BnRzZ1N042REdmUjBIZ1Ezay10cDFrYXFQWEdEbHloQ2xGWUU0UEYwN0JnN1dOT1RpS2dsTERUU2xTOFhUMnB4QmhyNDduU3hlTkxZQmt0RVdtM3FtOUpaaWItaEhzOE9RYzhZLVMwZzA2eU1vWW02Zk9FQ2bSAaIBQVVfeXFMTWZ1cFBVVmsyeFFfV1hfS1p0NUNzREpGZE43VEl0cnRuTFNHem1ZTjFZTXNMVGNzekw1M1lxZnFmV1FEaTdpMnBVbWhiSHJ1NWRUdmJjeWFLVzU2R3dtOEU3bmtsaUlYZWczRlBuWlJRcnZnbDNhdkphZHVpU2hiRXdOQ2tFZ3VTVWYwYzhuZ3pDOEoyb1luZ2tJUHJKWWNTOG13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 山口県岩国市 美和町秋中の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 山口県周南市 須々万奥の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPeVd4WERYdXNGSy1mb1hBdnFKZzdFeW11ZEpDaG53am8ydHNRTWp6UUNzeFprZmdYV2pYOEQ2VmV0dGFfRkcyWEkyVmFQeE1Jd1huNWhIdFpXeUdEakFJLUtyTTRsbmtHckJhekNUY0RGSldMNm1MRXJOd0RMZGdsN2YyR3h4eXhqZW50VVY1djZjZXNwUE1PYVpDUTBoY0QxREHSAaIBQVVfeXFMT3lXeFhEWHVzRkstZm9YQXZxSmc3RXltdWRKQ2hud2pvMnRzUU1qelFDc3haa2ZnWFdqWDhENlZldHRhX0ZHMlhJMlZhUHhNSXdYbjVoSHRaV3lHRGpBSS1Lck00bG5rR3JCYXpDVGNERkpXTDZtTEVyTndETGRnbDdmMkd4eHl4amVudFVWNXY2Y2VzcFBNT2FaQ1EwaGNEMURB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年8月7日 山口県周南市 大字須々万奥の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 広島県大竹市 比作の出没情報",
      "url": ""
    },
    {
      "title": "2026年8月7日 島根県益田市 益田市神田町の神田大橋付近の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":19},{"pref":"青森県","count":15},{"pref":"福島県","count":11},{"pref":"宮城県","count":7},{"pref":"長野県","count":7},{"pref":"富山県","count":6},{"pref":"山形県","count":6},{"pref":"山口県","count":6},{"pref":"群馬県","count":5},{"pref":"新潟県","count":5},{"pref":"岐阜県","count":5},{"pref":"秋田県","count":4},{"pref":"兵庫県","count":4},{"pref":"岩手県","count":3},{"pref":"栃木県","count":3},{"pref":"埼玉県","count":2},{"pref":"広島県","count":2},{"pref":"京都府","count":2},{"pref":"山梨県","count":1},{"pref":"石川県","count":1},{"pref":"静岡県","count":1},{"pref":"島根県","count":1},{"pref":"奈良県","count":1},{"pref":"福井県","count":1}];

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
        <span>対象期間: 2026年8月7日</span>
        <span>·</span>
        <span>公開: 2026-08-08</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={118}
        periodLabel={"2026年8月7日"}
      />

      <p>2026年8月7日におけるクマの出没事案等は全国で合計118件が記録された。都道府県別では北海道の19件を筆頭に、青森県で15件、福島県で11件、宮城県と長野県で各7件、富山県、山形県、山口県で各6件、群馬県と新潟県で各5件が計上されている。本報告では、人身被害や捕獲事案、生活圏への侵入状況を地域別に分類し、野生動物管理の観点から記録事実に基づく分析を行う。</p>
      <h2>主要事案および人身被害・捕獲対応</h2>
      <p>本対象日には人身被害が岐阜県において記録された。高山市において男性がクマに襲われ腕をかまれる事案が発生した（※1）。また同市ではランニング中の男性が襲われ負傷した事態が確認されており（※2）、同一地域においてランニング中に襲われ男性がけがをしたとも報じられている（※3）。</p>
      <p>捕獲対応としては、北海道厚真町で1頭が捕獲され（※4）、足寄町では被害発生と同時に1頭の捕獲が行われた（※5）。また山口県岩国市美和町生見において有害鳥獣捕獲許可による捕獲が記録されている（※6）。</p>
      <p>農業被害および生活圏インフラ等への直接的影響も報告された。北海道函館市ではトウモロコシやニンジンに食害被害が生じたと報じられ（※7）、秋田県鹿角市八幡平の畑ではミニトマトがクマに食われる被害が報じられた（※8）。長野県箕輪町では、趣味で栽培している庭のブドウを食べている成獣が家の中から目撃された（※9）。さらに広島県大竹市比作地区においてクマの出没および物損被害が報じられ（※10）、群馬県沼田市利根町追貝地内の畑では足跡や食痕といった痕跡が確認されている（※11）。</p>
      <h2>地域別の出没状況と傾向</h2>
      <h3>北海道</h3>
      <p>北海道では最多となる19件が記録された。捕獲が行われた厚真町（※4）や足寄町（※5）、農作物食害が報じられた函館市（※7）のほか、札幌市南区定山渓での出没（※12）、美瑛町旭での出没（※13）が記録されている。都市近郊の緑地から農地、山間部に至るまで空間的な広がりを見せている。</p>
      <h3>東北地方</h3>
      <p>東北地方では青森県、福島県、宮城県、山形県、秋田県、岩手県において出没が相次いだ。青森県では田子町の道路を横切る1頭の目撃が複数記録されたほか（※14・15）、つがる市メロンロード近くで1頭（※16）、八戸市（※17）、六ヶ所村（※18）での目撃が報告されている。福島県では福島市（※19・20）、柳津町（※21・22）、玉川村（※23）で出没が記録された。</p>
      <p>宮城県仙台市では宮城大近くの会社敷地でクマが目撃されたと報じられ（※24・25）、青葉区上愛子宮下での出没（※26）や青葉区内での出没（※27）、大和町での出没（※28）が確認された。山形県鶴岡市では高校の敷地内における目撃が報じられたほか（※29・30）、西川町大井沢（※31）、酒田市浜中（※32）、尾花沢市尾花沢（※33）で記録されている。岩手県盛岡市では北松園三丁目の住宅地内で南東に向かいせせらぎ緑地方向へ移動する幼獣1頭が目撃され（※34）、北松園3丁目付近で小グマ1頭の目撃（※35）や市内の目撃情報が報じられた（※36）。秋田県では鹿角市での食害報道（※8）のほか、潟上市昭和大久保元木田（※37）、秋田市仁別小水沢（※38）、羽後町中仙道（※39）で出没がみられた。</p>
      <h3>関東地方</h3>
      <p>群馬県では、桐生市の住宅地で目撃情報が報じられたほか（※40）、嬬恋村大笹パノラマラインのウダラ沢付近で道路を横切る個体が車での通行者に目撃され（※41）、同村芦生田小熊沢では建設業者の資材置場作業員により川沿いを歩く姿が目撃された（※42）。また、みなかみ町小日向地区での徘徊（※43）、沼田市での畑の痕跡（※11）が記録された。埼玉県深谷市武蔵野では出没の可能性が報じられ（※44）、通りがかった人による目撃も記録された（※45）。栃木県那須塩原市でも目撃情報が報じられ（※46・47）、戸田での出没が確認されている（※48）。</p>
      <h3>中部地方</h3>
      <p>岐阜県では高山市での人身負傷事案（※3・1・2）のほか、同市高根町阿多野郷で12時から13時における記録（※49）、白川町黒川の国・県・市道で18時から19時の記録（※50）があった。新潟県では新発田市藤塚浜地内の国道113号線道路上で1頭が目撃されたほか（※51）、新発田市内での出没や目撃（※52・53・54）、津南町上郷寺石での出没（※55）が記録された。富山県では富山市小見で親子グマが目撃され（※56）、高屋敷で足跡を確認（※57）、南砺市砂子谷での出没（※58）や上見で糞らしきものの確認（※59）、小矢部市横谷で足跡らしきものの発見（※60）が報告された。</p>
      <p>長野県では、軽井沢町の里地において6時頃に庭で目撃され矢ヶ崎川内に逃避後すぐ橋から車道に上がり東側の森方面へ去った事案（※61）、箕輪町の里地における庭の果樹食害（※9）、中川村片桐での出没（※62）、同村林内での親子の記録（※63）、塩尻市広丘郷原での出没の可能性（※64）が記録された。福井県高浜町鎌倉では8時20分に幼獣1頭が目撃され（※65）、山梨県早川町薬袋では町道を徘徊し山へ向かった記録（※66）、石川県白山市釜清水町地内（※67）、静岡県静岡市葵区中平（※68）での記録が存在する。</p>
      <h3>近畿地方</h3>
      <p>京都府宇治田原町の農地では、クマが防犯カメラに写った事案が報じられた（※69・70）。兵庫県では豊岡市出石町谷山（※71）、上郡町旭日乙（※72）、丹波市市島町北奥（※73）、養父市船谷（※74）で出没が相次いだ。奈良県十津川村湯ノ原では19時30分に出没が記録されている（※75）。</p>
      <h3>中国地方</h3>
      <p>山口県では岩国市美和町生見での捕獲（※6）のほか、美和町北中山での出没（※76）、美和町秋中で山へ入る個体がドライブレコーダーに撮影された目撃（※77）、周南市須々万奥での出没（※78）および大字須々万奥で走行中に道路を横切る個体の目撃（※79）が記録された。広島県大竹市比作では物損被害の報道（※10）および出没痕跡（※80）が確認され、島根県益田市神田町の神田大橋付近では午前11時40分ごろに1頭が目撃された（※81）。</p>
      <h2>出没件数の上位地域分析</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没形態・特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">19</td><td className="px-3 py-2 text-xs">捕獲2件（厚真町、足寄町）、農作物食害（函館市）</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">15</td><td className="px-3 py-2 text-xs">道路横断目撃（田子町）、幹線道路付近出没（つがる市）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">11</td><td className="px-3 py-2 text-xs">複数自治体（福島市、柳津町、玉川村）での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">大学近隣会社敷地内目撃（仙台市）、市街近接出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">里地住宅庭園侵入・果樹食害（箕輪町、軽井沢町）、親子連れ確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">親子グマ目撃（富山市）、足跡・糞痕跡確認（小矢部市、南砺市）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">高校敷地内目撃（鶴岡市）、各地での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">有害鳥獣捕獲（岩国市）、車載カメラ撮影・道路横断目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">住宅地目撃（桐生市）、道路横断・資材置場接近（嬬恋村）、農地痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">国道上目撃（新発田市）、複数地点での出没</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>本日の集計データから導かれる野生動物管理上のリスクは以下の通り整理される。</p>
      <ul>
        <li>人口圏・生活空間への接近：盛岡市や桐生市など住宅地内への直接的な侵入や、仙台市の事業所敷地、鶴岡市の高校敷地内といった人が日常的に利用する施設内への進入が複数地点で確認された。生活圏と生息域の境界部における遭遇リスクが顕著である。</li>
        <li>農業被害と誘引リスク：函館市のトウモロコシやニンジン、鹿角市のミニトマト、箕輪町の家庭栽培ブドウなど、農作物や園芸作物の採食行動が記録された。管理地内の作物が誘引源として機能している状況が示されている。</li>
        <li>交通インフラ周辺での目撃：新発田市の国道上や嬬恋村、田子町、周南市などの道路上を横断する事例が多数確認された。車両との接触事故や通行人との不意な遭遇の危険性が高い。</li>
        <li>人身事故と個体行動特性：岐阜県高山市ではランニング中の市民が襲撃され腕を負傷する人身被害が発生した。また富山市や中川村で親子グマ、盛岡市や高浜町で幼獣の単独行動が確認されており、母グマによる防衛行動や親離れ時期の幼獣による偶発的な市街地侵入への警戒が求められる。</li>
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
          <dd>2026年8月7日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-08</dd>
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
