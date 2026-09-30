// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月29日 / mode: daily-report / 生成日: 2026-09-30
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-29-daily-report";
const TITLE = "2026年9月29日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月29日に記録された国内のクマ関連事案は計57件であった。当日に人身被害は報告されなかったものの、東京都八王子市における駆除や和歌山県、北海道、山口県での捕獲を含む計5件の捕獲・銃猟が確認されたほか、公園や学校周辺、幹線道路など住民生活圏への接近事案が各地で目立った。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-30",
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
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
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
      "title": "クマ1頭を駆除",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9tY1BpRkIwcFc3S25SNmtuSkN3Z0wxRjNhdkFwREQxcmF1QS1UM2Vyd2QyRFY2SloyYzY0VGVVcC1GVnBqRE1hd1BQZW9XeXVxS29Z?oc=5"
    },
    {
      "title": "クマ1頭捕獲",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE43THI2RGMwZFNoUXVRUDk1S3NrOGpFbDRlZVpvRV9iN2NyWEluV2wwQ1I1eGNwQkNtSnR0SkZienRfNmluQW5lU2k3Qk1qZDNORzBCSE9YTHY?oc=5"
    },
    {
      "title": "公園にクマ",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBHX1VQMXlyWkUwTWVvWXEzYm9aREJfTTZwemVqYmhyNjJFLXhzM3VYWjlYZlR5MGZkS1NmSGlsN3F4MFZ4MVF1OFVIazJreVRnb2VqenZLcTVTY1RpY3JJY3JB?oc=5"
    },
    {
      "title": "小学校付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE0wSm0wem5McXl1d045U3JtcHBqT3J1bktHMEdSUmhETTNWbWduTWNmbm9wWTBPb2xaRVJsT3NEZXlmZjdFbTBhdWtmcUo0empaX3c4U013WHBocjBFejlFVWVMQUtaMDlBSXUtcHN3c9IBdEFVX3lxTE8wQ2RSTVRHdmh4ZTVIZlRYc3pkamlrMDJVLXJCb2t3R2FjMkhtMHQxYWZWOWZJbHBDNklNOXk3VkExMlI5a28xMXpzbU1ueGt2VXVvVWNYM0h4Z01SMzhWbXNEaGZEZjN4ZzFHd0p6cU5vcVdj?oc=5"
    },
    {
      "title": "車と並走するクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5fdkhXa3hJX1dfUUpvQ082MHd2OTluaHZQY3B5ejNydnEwVjVhLWhxZmlnc0FPUW9xWHZXaXhPWmdQcG56V0lidWlIZG5ial91MXFaRG1PMVp4MDh3eHNCX2ktYldnWVN0VzZkRHEwRWlSYVU0MlNEQzJOQTloVVk?oc=5"
    },
    {
      "title": "（北海道）根室市酪陽でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdndlRmhiNnhaaEZaR0lhQlpLRmlnQXdxaWZkd2JBUWRYYjJVaXIwaWkzeFY5WWhwQ3AwMFVJazJnSXhvN3pNV0xTSEQyTUlLQmNYRUR1T005SEw2WVZ1S3psS05Qa2tncDYxOXZseDM0NE92OVhBT0pfcEk3ZHdKN18xX1lXejg1Y2RBN3hCSi04UGVCd1drTGxLbEPSAaIBQVVfeXFMTTJrSHVIblhTWVVBVExsNWVFclFFS1pXekZvS0dROU9YaU5ETnd6ZF9IVlJ1bFRZX290ZElQTElWWEc0R0xJczRETnJhcklQS0YxcTV1TUhaU1FBNXZqQ0YwZjd0TWctbkk0dFpwX3RyTWVSRUNKM1h1Qks1S3NfVUNuNVFZdC1XVDY3TGl3d2x5TnM1T21nUEtXMXV3eTBXeUdn?oc=5"
    },
    {
      "title": "（北海道）由仁町川端でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNFZ6elNZNmNCdU42cmQ3U2JxYUtOaU5JQWU1cjA5SVcyVFV0NmlFaW1BSTJTNmROMkRZcHE4WVlxNzdRUDRuaHEzNm90bEwyOVd5WVlvXzZQUk9XS1pEbDNVUGNIV2dvTmhjWjhfTGIyTGN6eTBzcFVwUXpCbV9VTVpYTGUzWkpCVDJTdU9vU1hwOUdMLWRudnp5eTXSAaIBQVVfeXFMT3otcFJUUjY1ZGZEVGk0M1pTTGgyTE5GQ1NKRlNHbzJDX1JNZ0VzOXZob29ub0xXck9oakNtQWptZXZ2ZTFWcWl0Q2JvOS1Ud2hlN0d2bFNVWEZhX3dKSEpuNFU3S0RVb2VTczRVcjB5MUloRnR0bFh6eTF1SUxzU25qOU13SkRnalpJWE1FaExzMU9fOGowbVFLNXowUkU4US1n?oc=5"
    },
    {
      "title": "クマ出没（青森県青森市浪岡王余魚沢）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPblpOeGdMcy1aVWI4eFRWWEdpQ0FvczFWMTJfNFV1SW1MS1lDVF9YOVY2Z19YX0pNc01FRnNHWHlSLUNUQWhSSXNxVHl4ZnRoWDVkZ0cxb2NtVV9EZ2tjNFVldzRlTk1NUlFuUGJKanQwOUhYM2FTb09oeEljcTl1bmwxS3hRUkdPRmJaMk5EU3h6NVVEX2pLQmFseGxmUVFOUTRHdFhpSEExWFRUVFRn0gGiAUFVX3lxTFBoTUI3RjVzcGRNdnJEN0k2RVRyS1ZWcVJxenducDAtem1Rbi1abUZ5QXA1XzhsRWd6SFlZang0NFN0NjhzWlV1NTZyd3JRMUF0R25XeUozQlp6RDk2Tkt3VmdvMzZGOTF6WDR5YldVSDZXZEZHdENfbzJMLVlnMkgzd1FZOXI1U256d3d2SERiX0lHRTEwbWNtOGRNWDgwUFpodw?oc=5"
    },
    {
      "title": "（青森）南部町剣吉下山でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZG04SFhXcHRyWlotREo0X19YeTM2TkpOTFJQTk9qUGkwSkZlMHgyVU5GT3dTX2x4OW1RZUZRN1pCYUtMUlQ4SnNsd2pfNGFuWnlYVUE3cldOMnBmRm1BM1ZIU2xDQjBtS2dwYlN3ZEhvOUhZU3pKandzWUhBeXE4MV9nZnhLYUZTVGdmWDdSd09seFo2Wk05ZEtSWFHSAaIBQVVfeXFMTUFrUGFwNzdiTWVaeE1LWElKSGZNWGtBYk0xcFdweGhRRXBMbWpsYmZQeGY5ZFNOSDI5alNaS1hhUFJ0RXdCYkpSVDF3SjMtS284cGEzUS14Q29WTGhSVnJmLVBVb18xcnNRRUYyaXJYdFRTOFVUVzFaeVhxQVlFMFdwWmE3aEtTSElqWFJwdEx3bndTTXRuMFFNRnBqNTI4aXBR?oc=5"
    },
    {
      "title": "茶畑でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE85c2hEYjlTVzlXMkFRR2VsUkZhVUNHS1kySi1fYWZKbWpGY2xGWTNxRUVDSkpwTFg3Z1BmaDRubzFXRXpnRFBYUm8wVjBiYVlIWlN6ZmJSV1AyRXU0bVZVSA?oc=5"
    },
    {
      "title": "茶畑1丁目でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxONTU2a0NST0l5TzhZVmVnZDlDWXBkX3BocnppeGdPYUh3VjhmLVdST2V1M0JRM0xsbjRHN1g2dzVwWW5mYkpFUkdKY2VRalViVnlkRnRTSktHVWtKWXhXWGJRRVRxb1lrU2k2S3VCRktiUjYtdEdqelhBT3M4YlRIY2tLWjU1Um8?oc=5"
    },
    {
      "title": "（岩手）花巻市石鳥谷町江曽第５地割でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUnBFVmNUNktydlpma3M4SW9jekxDYjhNM2lTZXpwSnVRZjFMWnRuZ1U1bGt2WFRaaU9sYTNTSWZ4V056ZklSQlBBUUk3R0xzdk4zOWZrR3VZNHZPQ3V5VU1sNVNGWXo5cHVaVEtPeFVQb0dVdHpjOVNLdm5uRlh1MklzbHB3WlUyZ1NIakJtUFVXajZlQm9sc0ZOU0TSAaIBQVVfeXFMT2pJbW5KOWx4cUVhczY3OFZLbTJBQjJHbWF5amVoZ05hNnRjX0dJclNVV193UEJ3TWwxVkF3OXFURElZOEw2ZzFncVYtZ0RPbmJRanZ3YVRmc3NDdWM1VFlGM2M4SFNDejBuenNwd3Bsei1EQ3pjZ2RMckd6dldzQjJpQVFaZTBlMDVHcU1NNXl4dEQ2Nk9IbFBCV3NTTGw0eTJR?oc=5"
    },
    {
      "title": "（宮城）仙台市泉区松陵３丁目でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNODRCdjR1d01ZMDB2S2NXM3VWaWhabzNkck9wN1JBQ19FWTQ1c1F1YzVKVHJ6RGppYmhRTnFBNG1uT0J5dUhNaTFaSnV6cENtaUlMWDFkVWlKUjB4WC1YWkthZjdxMEhHNUhmZk5FMTRQbFN6S2tVR0doWDVGZTJIa1ZyNVlqRVJDNHUtU2Y4eWhMdy1RVnBMSkp2bDDSAaIBQVVfeXFMTmtOdVk5VFZ0UWtfTFNFQzhtMWN3SWMxRmNVOVNhbl83X19FaHBWYkdrOG5xb3oySHFJeGNMTWR0MERZQ3NLQ2U0YXhhQjhhLTVPT1pYT0dxZi1ITkFmNHhRYTdBX09wdE5ob3dPVW04Ukx3ODdqLTYtVmdqTndMeEExamV6V29hMC1mVzJnZXVvZ3NYcWFqT3M3WkNqOFIwbEdR?oc=5"
    },
    {
      "title": "（宮城）富谷市高屋敷でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSWRKb29HQWMtbXd5U25JZ0hlX2hZSmhLbVJjTDh2WUhtOUdIRUEwLWdLVVV6a1ZfN0l3MHVySWpzbmJpTXVRMUJRS1ZUUE5hRmh1amxxREVGekZVbXdTZlQ3dHhXbWFFMVhac2hmYjNWOUtfVERpYUFma2RGN29sOW82U3FlS3c0aEU2WmFlMEF2T3pJOEZjdHdDeDXSAaIBQVVfeXFMTzJmU0JDMHo0QWUyWHlrRWhiSGw2Q2hkT2xVdXVaWUtDT0d5Tnk5NHU2Rlp4bkdYaE1OR2YtbjB5T1BxR19XR1kxNVhwSXVGdF9HRkR1UF9YUHozUm1UV2kxOU92ajBiV1liQkFjU191dlo0NHl6Y1FVNjNtNmRSVWduX0FCSVN6RF96bnJkZURwVDZsV09iM1FzUjU0bGlyamtB?oc=5"
    },
    {
      "title": "畑でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5CVHdaR25XQ1R0a3dZaUhzY1BrWENWNnp1ZHFqdkM4c3hybGExeE5HZUdBemFiU3RnSUhFTVhJTl80RmttMGdJcUlEanVUS2VsUUF0cTRiTHF1Q0pnYWw4RDJ0RnYwQjJkQ2hfb2ZOREg1dnEyekFTMVJEYzEwVUU?oc=5"
    },
    {
      "title": "クマ出没（宮城県大郷町不来内門前）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWmE4UjhDN1Jhb3pnT1REV1VTZkthMzRKTkVXdF81MU55RGthTGY2YWRZcXF4aDFfdDhwd1RobmVkMHl1SGhoZlRlS3pnSDFqNUdpZDZZaEtfdzY1dm5ldkQ2SmNrMjZjOC1PREltVnpkQ0hYY1YzMTVELS0wb3EyMFFrZVl2WXVxakkwTlBfZzI1RXFBcjNmWUdPa0fSAaIBQVVfeXFMTm5iTzNzRVR3UjNVLWlDX1M0VXBIX3lzenNJdkN2QkNfY2xtclVkbFJJb2pQU2xMMmxCdTExS0ZCTVJvd3N4ZWhkQVB2LS1adnZIUmZDNVhSakh6NE9qdTh1TG13aTVZNVRKZGt2aHI1ek4weG1yUlIyQnpJZnc2b1prREdoOTRGT296Wm81bDhCSE5uUUk0VVYzTndqdG5UZXl3?oc=5"
    },
    {
      "title": "（東京）あきる野市伊奈でクマ出没の可能性　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNMFl6WE1QUjRETjdWOVhUQUNNRDVIWHIwb2Z6eXVfeFQ4QXlFTDg0SDJ6d0RkbFpjX0tablZTcF9YeHItT1hqS0ZTNHJFRnFpT1hzZi0yVXFVVzBzcl83WUtOVlQxT01UY3FhYVVrQ1RhUkxzd3F5WElMbzRYSDFiT1VhNEhNYy02eEVHdXhXdDRHSEg1eGtLV2dCdGQwTUpteEgzRnRQbDI4QTdXczNoVHRHdExqYmFKcEtELU1hVWZvWW9LZFVJN0UwWU1ZZ2RLb293QlJaSm5NQkROSWlEdnROek5IZ2JMR1AtNHJLbWNRUdIBogFBVV95cUxQUS1IZEVGc3h3Mi0wbDB6djJsVkk5bjM5SUpJY1N1MFpXYjdTdnBQSkYzdm1xcmlmc0prQWxScV9CUl9TVWtBYWNsV2E1UXhfRVA5NWZqbm5IRjFiNEljdG92c1dzVmdCYUhCS0cyMmdaUWFoZ1lVZGthSXRiU2RfZFpUbHBNNTlVOXpUcksxVGZqUG9KMnRBcW93S1RHNkVqa1E?oc=5"
    },
    {
      "title": "山林でクマらしき動物の目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5TeVowdDcwdFhTMC1hcmZEQmcxbi1ZbTU3T0dPTkJKRkx0S1o1SW0wMEFrQjhwOHlPUzQ2aWYwUGpYaEJNWHh3OEtuNUFSUkJ5TUdGS0cwUjVVQWZYQUFVTmo1b01CVEZ3c0dfLW5KMWN6MW1XVlRvbXFYWFpScGM?oc=5"
    },
    {
      "title": "クマ出没（東京都檜原村三都郷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbXc0UzBta25sOHhuQ3dqTjQwWElBcHlFTVdOOEV0QUNOQXNnenZMbmZGdlZQa2tfdExldjFzVURZbXpsNVhHNEx5dlBGMEZleVpyT2tyNzVfVGVULVFiLXdHRTR5dm53M3JEZFpIZVVVT1UxLXhyc3NQY0tpUl9IY1NjQ0hXQUh2ZHN1Q1EyeW9HU29KeDRXeGlVUVfSAaIBQVVfeXFMTjBNRkVkLUxaenlBeDZmTmpxYnAxV3lyR0RlM05ndk9KbUJJN0NtMlNNeGZ1ZzZDVWxkRzJJQ1Z2cjZmcWVmLVFpUDZrUE45YlpqZ1Y4SGZYam9iOEM0VzhEM2s1cEdlbGNNelFyVDZ0UzVCX2xVWjBPV0Q2eG9TYngyZENKSWJ5YXM4azkyTDBhbVdwaHZvOWRGV0RXLS1BNXVR?oc=5"
    },
    {
      "title": "体長約1mのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBNdnFaVjF1S0syMEpNcTdkeU9qMG9HTGQwbHpfR3NITWRMdTVTd21RVkI2dFFRLTdLS1p1UEVhbGdkb1Judm1lWU1zTVQzcjE1MTVrb2dwdFpZUQ?oc=5"
    },
    {
      "title": "クマ目撃情報（栃木県足利市鹿島町）",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBKTVlfaWZFMTNkRXdUZlVmRFl4XzJVbk5sS29xVXZZLWJyeTFfeGs0Z2owMWJ2alAtS2VLQTdUUTBOakFXc1MxRHZmT29qZEtmVVNKZ25MdVA3QXBCTUd2SG9B?oc=5"
    },
    {
      "title": "クマ出没（栃木県那須塩原市中塩原）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZG0xUjFibjRhMlNwc3lFUElCOXE2a29DcUFTMzQzRnJQVUZ0VVNFUXo2Y0pGVzFCVi1vMmNsaHlWeS0xYnJDOW8zc3M0TU9pczhfMWpqd1NNd3liWVFfRHBfbTgxOVF6ajVfR1dJODVUYlNLLTAtUDVaVnV3VFFnRlNqckJKbEFEbjlpODIwT09rRDlIbk9jM2pzRHIzcm9UOHhvUnRHcHNfMzNwUjZReW9iU3hfODBmRmRPT2ZfVEpkeHRGeXpIazVJcG1WN21sZTdEM0pCMmprSk5BQi1TRVZpSy1BQ293RV8xNll6ZlBmd9IBogFBVV95cUxNQzRxaDRPY0lQM2xUMmR4VUpicmZ5MDJuRFQtaEMyZVBDZ0l6QWtwYjR6dzdHRjRXMWdqYnUxYXd6M3B3M2M2dGs5NDdsbG9QVEhiSDBGeUgxVkZLdFNKeUR3ZlQyZF9Cc0phT3lTMHBaczh5OW5abF9DTGs1NTNKQzJzVUhPemJwdDBrMTV0d3VMSTlKbXZUWDdZNThiMTczY0E?oc=5"
    },
    {
      "title": "（群馬）みどり市大間々町桐原でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNd0U4S1phVWw1a3htM2kxaXVhTENtRXBrOVBYcFhtV01uRzQzNzkzcTRQRjBjdUxIczg4X081REo1NXBOWkJocy1tSGM2T2ZmdjB6NFY3OFlrcFZOLU9ZWWw2X09ZMnlnemlKdnhzSWxodTNoR0tNTWpqczVjRVNhSHBSQk1fOHpNcy1TRjZlN011R2UtTUxhb3E2cGLSAaIBQVVfeXFMT0VwQUdZcWpub3h0YXdWMHJKcmZlN0tqcEtGR0NTVGhNNWFpemlvelE2QzlSM2wyN3g3SHFKeGJWLTFEUGdycnRnQU4yS0ROaXJlY2tpUzBmbTNQekFRQ3ZxbnliMElDWWlKRFljbEUwaFlDRmZwM015SmRaTWtmdDkxSnVJUTEtbVRndXk0QWcycTRfMDBCMi1OYzhYWFljbFdB?oc=5"
    },
    {
      "title": "クマ出没の可能性（神奈川県相模原市緑区小渕）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMHBlSU9sZjBnZVE3NmF2cm54NkNSUEp4MjZrRDR1dkR6bjdjcjRiVGJsaUUwN0dXTVlEZi1LbHFfRkZBM2l4cDBiS3hLcExmcmdOWWRpdkFRQW80TVZWMFlqMmh5VFFjQkJOTlJrYkl3ekVBRmxJSzNXeWFlU3VLMzVVOEdBOWtwUzVGWXhhblZ2b1pqb1R2Y0VwU03SAaIBQVVfeXFMTW5aMG9ndEczcUNsaVY5Ukllbk90VEs2UXNESUtqSzRWZVk0SmZ1NWpUTjRwVDNPMVRIcks3ZFp0WDB3YmxMR1VtLXJnYkpnNTlvLWNNT3FES29vazZwZXFkUk9mRW1fUnZDRkYwVkozTmJ3Z3E2aHVmSTFPa2FNQkxUUUl2SWR1NkczMUttSTBjTkhvOVNfcEtwbE9EY01GeVZB?oc=5"
    },
    {
      "title": "クマ出没の可能性（神奈川県清川村煤ケ谷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeVB5aG4ySDRmdVhxZUZHLUFUZloyTnFPRFVkclFzMjhGSkxTUXRFbmpraExnR2pwSm1pV0lWRWdJX244QVM3YzgyUFY5SkVfT0ZlY0xqN3dRMlQxZUU3aDJHbjRETjY4aTI2MVNGX1pqM2Z3eDM4bmNkOFZ2N01xbW5iZXZ4ZVhITGFISjg1S296VVhzVVFYVnlDODjSAaIBQVVfeXFMUGdiMllUcDIxWmk4TS13U3lldXdDRHdaWlN3bkktTFg4ZTlNMjRuQVh3ZmhYa21RY19DdWNmMFVzUmpwU2o2VVF6a202LWJjbEJURXdwcWhrZ0RyRkRXVjh2U18zdENrR0NwRmxhZHVHQ0M3YzRWU3ZOdm4tQTBXUFdrTFBQMk45N3VNLVE5TkVZdlVWZGhTaXd1bDNPWG9RaDFB?oc=5"
    },
    {
      "title": "（富山）氷見市戸津宮でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOGFpcXdIMUtXcy1YOG1oSS1Td2VzSVVNOXNEeHFrMzZ1UUNYSk5CZjlyLU9fb0dGUWNqNXZVOGMtOHJJQWMxcWY4ZjAyekZNVmpFTU9nX1ctVm1SUEV6OUFGNDFtQnp5eUwwR3BDT2xYMi1RcnVqZkh6ZWhSRjZ4YnVVemN2M1Rtb2Q3eG5qUkIwc3VzM3NQSDVmYkLSAaIBQVVfeXFMTXZBWEVJOXpkd3JjTWJKVVczcHdnbzdNTWVIVHJnSjEtWURja3h2bGJTNU9rSFRMMktYSnVCNExIWjNtcnV4dnV4TUVwMnlXZGYxOHB3ejBHU3JIUE5ETTVKTFlIQnh5RmtQXzJfekF6dklKUUVKS0FNRlhLN3ByZVpqWVYxRTBzUGRBODZCTFdQdFN3aVFFS1NtQmRlbG1GRE5n?oc=5"
    },
    {
      "title": "（長野）中野市金井でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPMEhGWFF1QWFFR0hHOTNXeWdSZmtsUGl6c2dnOEpGUTUxQzZzb0JFSzlYZzN3RjQ3Y1FWdURlX1JlTjZsVDFEYVVRRUllaUFvbGFJNGgxbEVDNHlwcV9STTJRZ25feTN4VXZtMzUtRm1oRzZLR0tkMTdzZkQzem9MV0JfR3Z4c3hqQjVvVEM4MHd3ZWtJT05oenZObEExbnRtTHZSWkpBcjFSRE90cGdNOXBMdkVyWURaSFp3dV9jZkV4aWRtQmFPMjRWTnByZkpibVg2d3ZPbW5WS3hUNFd0WFlQNGJFSUFrWDNkeTdOMWh4Z9IBogFBVV95cUxNRllFQ2VqVzhzOUJwRWQwN3g1b2U0cXBxOHdsUElqdVEzUkx1dnFXVEhlenVVM2tRZlFVNDB0OXA2dU9CbXFxUjVjRDZyWERtYlpWU2Y2S2tmY3NYYzE5di0zWWJGbVpHY2VCUUthM1N4SkQ1MEJsbTlVbkR0WVJTbmdmdXVNYjN0R3B0NDI3OGFwNl9tQV9uLTZ6T1F6MWF5TGc?oc=5"
    },
    {
      "title": "（長野）軽井沢町長倉でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbjNqRERkbkcycnBtS3JIUHZ1VDhFcEs4bTZjSHRZNmI5Y2pGRTF2bXBiWFdTODBmQUtBLVZCTGFpbHF6ZVVkS3J4R2Q4bEtXb2RvbWxncThhclQzVmlHTmFhdUFSdU1GYnFnYjBPYzNOX21sVE9CTlpCamRLOTFYZU1PUTJhcGhVdDdUV0tUcVRzdmtfZzFfWnBlbk3SAaIBQVVfeXFMT2VwRU5mVEdvQXNuekdSbkduMXJRUkI5b18taThacWxNcDk2cDNLOGJYR0pyQnZZS2Ezb1lmaEVYemc0WV81RXY4dHdHU25lWGxBOWV6cWl2a2piZU9qZUtUdzRWQWZuQnVUZjNjTVZITVk2b2FUUzNTbGxnTnExZ0R0bW5vbEJjWUgyZExQRWotLThWRXd3ejFWdE9laWtWYVdn?oc=5"
    },
    {
      "title": "（新潟）村上市中継でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQS09nRFhHT19pR2psTWNlcEVwWUltWFVjV004cFh0V2Z1NU8yQWtVY19RMHZyVHp5ZktNeVF5RVJ3RG1MN25rZnA5N0E2TVp5SUpTVDQxSVZQei1KaUV3UjRvRFVDY0liYTVMSzdEelBZck5nbFdaNnRlNzFRTlg1Q1V1elNwVDhEb3BhSFdYdFMxTVZ5bUNtSGdMTDhZVDRRc3d0a0dQRHRsY01mOVJxMXRMZnk5Z0RwWWotMGJFQzljQ1ZmS0dhd0ZuOXJBTlBycFEtNXNiRFFKV3RDYXhNMTdSOHRqRE1UcHN4bURiU1RrUdIBogFBVV95cUxNV0Y4WG11dlNBTUtoa196R1RhMjlTakVWWEVMMGJCRF83RDN1VVZTVm9vMUlTRTVUMC1tTUFjcWRxdXpXejJoTjRhNFhEQkMySGlUVUJCaVRhbnFta282bU5mSy1aeGNaRU45bUxmZ0ZnUWhrLUx3Z2Z4a3M1YXNXdVZQQWZ5SV8zbXgzUy1wdk1hcHV6UGEyaFJrRlliQ1htZGc?oc=5"
    },
    {
      "title": "（兵庫）豊岡市出石町寺町でクマ出没　９月２９日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMDg3MmE2WTFDZ2dPdTUzYWFzb0F1ZmxLV0VSNmVEbGkteEk1dnUtaGpjVEtKbTBYNkcxMUhqNTFucElxODRqem5ybXZkUVhFVzJsZHVPaU1iLWxoTm1MMVBmdWE2UjdfYWE2WG84dXRNd0lqQTNJSEhpSXcxNVhuQXJhUl9mSUFyanVjME9yRHBjLVJNMl94YXpSZ1bSAaIBQVVfeXFMUG5TZFFBb1dDbEcyUWlrcXlaaW01bEJIYXNHdUx1bGoxTHQyMDN2RWxfaGREUnZETnZtRkRNVFZ6T1NVajN1bF9DQ08zQTZsUndOaDEzOFFJV2ZTbldaWXMwRHoxU0tRVDJ0X25jRHljUHZqbm0wa1VSSTRZMmVrbkItZER4WWNEZDRyU1FUUDRXcGVhTFQtYU9XcEVTRUgtRzhn?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":9},{"pref":"栃木県","count":8},{"pref":"東京都","count":5},{"pref":"宮城県","count":5},{"pref":"青森県","count":4},{"pref":"山口県","count":3},{"pref":"兵庫県","count":3},{"pref":"岩手県","count":3},{"pref":"富山県","count":2},{"pref":"群馬県","count":2},{"pref":"長野県","count":2},{"pref":"神奈川県","count":2},{"pref":"愛知県","count":1},{"pref":"山梨県","count":1},{"pref":"新潟県","count":1},{"pref":"秋田県","count":1},{"pref":"鳥取県","count":1},{"pref":"山形県","count":1},{"pref":"和歌山県","count":1},{"pref":"広島県","count":1},{"pref":"京都府","count":1}];

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
        <span>対象期間: 2026年9月29日</span>
        <span>·</span>
        <span>公開: 2026-09-30</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={57}
        periodLabel={"2026年9月29日"}
      />

      <h2>本日の概況と捕獲・駆除および生活圏接近事案</h2>
      <p>2026年9月29日の集計では、全国で計57件のクマ出没・捕獲情報が収集された。都道府県別の内訳では北海道が9件で最多となり、次いで栃木県が8件、東京都が5件、宮城県が5件、青森県が4件、山口県・兵庫県・岩手県が各3件、富山県・群馬県が各2件と、北日本から西日本に至る広域で出没が確認されている。情報ソースの内訳は報道由来（ニュース）が41件、各自治体のオープンデータや専用通報システム（hokkaido、tochigi-2026-mymap、yamaguchi、kumalog-aomori等）が計16件であった。</p>
      <p>人身被害の報告は0件であったが、捕獲・銃猟キーワードに該当する事案が5件記録された。具体的には、東京都八王子市においてクマ1頭が駆除された事案（※1）をはじめ、和歌山県有田川町での1頭捕獲（※2）、北海道厚沢部町および津別町最上地区での捕獲、さらに山口県山口市阿東地福下におけるイノシシ用箱わなへの錯誤捕獲が報告されている。また、都市部キーワード一致事案が2件記録されたほか、秋田県秋田市南ケ丘の公園（※3）や山形県酒田市の小学校付近（※4）といった教育施設・公共スペース近傍での目撃が相次ぎ、住民生活圏と野生個体の活動領域が近接している状況が浮き彫りとなっている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">自治体</th>
              <th className="px-3 py-2">事案分類</th>
              <th className="px-3 py-2">状況概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">八王子市</td><td className="px-3 py-2 text-xs">駆除（銃猟）</td><td className="px-3 py-2 text-xs">クマ1頭を駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">有田川町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">クマ1頭を捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">厚沢部町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">町内において捕獲を確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">津別町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">最上地区にてクマ1頭を捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">山口市</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">阿東地福下にてイノシシ用箱わなに錯誤捕獲</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没傾向と分析</h2>
      <h3>北海道</h3>
      <p>北海道では最多となる9件の事案が確認された。厚沢部町および津別町における成獣等の捕獲に加え、根室市では車と並走するクマが目撃されるなど（※5）、車両交通に直接影響を及ぼす事象が報告されている。また、同市酪陽（※6）や夕張郡由仁町川端（※7）でも相次いで出没が記録された。道東および道央・道南の双方で事案が分散しており、農業地帯や主要道路沿いへの個体進出が継続している。</p>
      <h3>東北地方</h3>
      <p>東北地方では、宮城県5件、青森県4件、岩手県3件、秋田県および山形県で各1件が記録された。秋田市南ケ丘では公園内での出没が確認され（※3）、酒田市では小学校至近の生活道路沿いでの目撃情報が寄せられている（※4）。青森県においては、青森市浪岡大字王余魚沢の青森空港料金所から約500メートルの地点で体長約150センチメートルの個体が道路を横断する様子が目撃されたほか（※8）、三戸郡南部町大字剣吉字下山では国道4号線を走行中の車両から体長約1メートルの個体が横断する姿が確認された（※9）。岩手県では盛岡市茶畑および茶畑1丁目の住宅地近接エリアでの目撃（※10、※11）や花巻市石鳥谷町江曽（※12）での出没が報告されている。宮城県では仙台市泉区松陵3丁目（※13）、富谷市高屋敷（※14）、大崎市三本木の農地（畑）（※15）、大郷町不来内門前（※16）などで目撃が多発しており、仙台北部から大崎平野にかけての丘陵部境界域で警戒水準が高まっている。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で8件、東京都で5件、群馬県で2件、神奈川県で2件が記録された。東京都内では八王子市における有害駆除（※1）のほか、あきる野市伊奈の住宅・山林境界部（※17、※18）や西多摩郡檜原村三都郷（※19）での出没が記録されており、多摩西部の山間部から丘陵地にかけて個体の活発な動きが見られる。栃木県では佐野市内で体長約1メートルの個体目撃（※20）や関連情報が相次いだほか、足利市鹿島町（※21）、那須塩原市中塩原（※22）で出没が確認された。群馬県ではみどり市大間々町桐原等で目撃され（※23）、神奈川県でも相模原市緑区小渕（※24）や愛甲郡清川村煤ケ谷（※25）において出没の可能性が報告されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では富山県2件のほか、長野県、新潟県、山梨県、愛知県で各1件が確認された。富山県氷見市戸津宮では、大きさ約1メートルの成獣が道路を横断する様子が目撃され、現場ではクマの足跡も採取されている（※26）。長野県では中野市金井（※27）や軽井沢町長倉（※28）の別荘地・集落エリアで出没が確認され、新潟県村上市中継（※29）、山梨県北杜市下条ため池付近、愛知県豊田市小原沢田町千人塚の山間幹線道路での目撃が記録された。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では兵庫県で3件、京都府で1件、和歌山県で1件が記録された。有田川町での捕獲（※2）に加え、兵庫県では豊岡市出石町寺町（※30）、高砂市阿弥陀町魚橋、神河町山田で出没または出没の可能性が報じられた。京都府京丹後市峰山町矢田でも出没が確認されている。中国地方では山口県で3件、鳥取県および広島県で各1件が確認された。山口県山口市阿東地福下ではイノシシ用箱わなへの錯誤捕獲が発生したほか、周南市高瀬や岩国市美和町百合谷で痕跡が確認されている。広島県三次市三良坂町灰塚や鳥取県米子市でも単発の目撃事案が報告された。</p>
      <h2>リスク評価</h2>
      <p>本日のデータから得られるリスク評価は以下の3点に集約される。</p>
      <ul>
        <li>季節要因と行動圏拡大：9月下旬は冬眠前の過食期（ハイパーファジー）に移行する重要な移行段階にあたり、採食行動が一段と活発化する。山間部の堅果類の結実状況や低地の農業残渣を求め、個体の行動圏が日常的な山林域から低標高地域へと大きく広がっている。</li>
        <li>交通インフラおよび人口集中域への接近度：青森市空港料金所付近や南部町の国道4号線、富山県氷見市、北海道根室市のように、主要幹線道路を横断する事例や車両との遭遇が多発している。また秋田市の公園や酒田市の小学校周辺、盛岡市や仙台市の住宅地近接エリアでの目撃は、住民との突発的な偶発遭遇リスクが極めて高い水準にあることを示している。</li>
        <li>捕獲現場・罠管理における安全確保：八王子市での有害駆除が成立した一方で、山口市ではイノシシ用箱わなへの錯誤捕獲が確認された。他獣種を標的とした罠にクマが誘引・捕獲される事例は放獣や止め刺し作業時における人身事故のリスクを孕むため、周辺地域への迅速な警戒喚起と適切な錯誤捕獲対策の徹底が求められる。</li>
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
          <dd>2026年9月29日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-30</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-30</dd>
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
