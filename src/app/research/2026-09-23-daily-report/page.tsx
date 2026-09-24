// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月23日 / mode: daily-report / 生成日: 2026-09-24
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-23-daily-report";
const TITLE = "2026年9月23日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月23日に記録されたクマ関連事案は計61件に上り、秋田県森吉山における登山者の人身被害や札幌市・釜石市・山形市等での生活圏進入、さらには宮城県塩釜市での島嶼部上陸など多様な空間動態が確認された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-24",
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
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
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
      "title": "秋田県北秋田市 森吉山 登山中の男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNM1lZeGxPSlBkZkJMQjhmZm5BZnU1b0RRME16QVNPTk5FZXRBM3o4TVZtLWk3WkFfLVRrTVVyWjV3NGFnNWZpZTM0Z3B3Q2RNOXZiVWNZUmxZSDJUaFhCcWxWa194LWRQdDdkWWMwMmtrbHo4bTB1LW0zNGZuYlZNb0d5NDVtQlE?oc=5"
    },
    {
      "title": "秋田県北秋田市 登山中の男性がクマに襲われけが",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBnRVZya245djFiTHRNd0JRRVIyTjZVdmwxdXFVeTZ4aWxXUzU3cFU5cUdibUpHYVRuNjFUY1poTmpXSWFHdlhONXh6elNYTWZMU3JEZmEtbzA?oc=5"
    },
    {
      "title": "北海道札幌市西区 住宅の庭でクマの痕跡",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1lZVlfTXp6TkdMbmdjMGdiQS1VMGM5d3JQbE5ianZ0X2dwamlWSXFFNkJOUGFJQm9QTUdEOW9xLWdTaWVvVEVkOTMteTFQb3cwRkZLQjlLVEN2TXFuVkNFUkpXNXRDR2gzMXhmQUUyS2pGYUxlQkltMEx1c9IBgAFBVV95cUxNejhLR3ZuTHlZRThOSEJGUF9PeVlTVFJ5TlFxSEpfZk5hdjlKbnRiNmpnMW84WVpNN3hJWlQ5TWJrVHJYbDRSVVRCVjRYVWp0MkNSaXJMel9fbjNXSFNHZFZDb0dVNS1pWngwQlpPZWlOQTNING1aRVQ1ajl5Y1FWWg?oc=5"
    },
    {
      "title": "岩手県釜石市 市街地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOcUdtQTRSR2U0cEJMa2VqOVR5WF9RVkJjZjZiOVE5d0RiOXRXLWpJLWh2SVVqV1djQ3Y0MFVoT2Y4R1JYNEhsbUZLZEpPa0FmeXhVMVg0VE85aTAxY3dEbkVJY3ZHU0k1MTJzSXFORWpYbjRfMmU1OFZSdjFRVHNfOUdkM20zUzg?oc=5"
    },
    {
      "title": "福島県福島市松川町 クマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBVSEZkNXJlLUhtRnNFWDJvNHdWeVRQMUxZc3NTckJvNDlIZ0Y4b2xoZDJ2a3dDMHhMeTZscVVEdmhaRmZzaVBvYzcxbXRKQQ?oc=5"
    },
    {
      "title": "福島県福島市 散歩中の女性が市道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFAwV3ZHRnRrN3cyemhpRGkwVFY1R2pIZk5nTFNLSHJQWkRJUXl0bnA3RGxoYjJndFk4ZE02cFJQUEYxSkQyQk5uN080SldxZUFHS244cEtDQzdXaENMUnNkYThlVC1TcGs5NXB6Z2tLMl9ubXBjenhVTENPTdIBgAFBVV95cUxQQ0lJRjc0d2NmTWJybzhOMy1fRlpPRWVjdG5WTHJmYVBYYlg2Z2c3cHVONTdLR21RbVdjek5YdFo5R2o5QWlMY21pSElFTEdWOWxINm9pWkh3Q0lvc0Q5cmRpUFJjaDA0UmJXdnZpUkhXN3JFdHMzZ3NLWllmWGZSUw?oc=5"
    },
    {
      "title": "福島県福島市松川町杉内 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPbzhQOURPYVNvV0NDRDFFaVpjNXBLTW1kWm1xVWhaSTFLWU4tbkh2NGNhaE1sNFFCMDVMQzlkUm43bWNkcnZrRFZ0eDBabnh0MmZiaGdsXzRwb0FnN1BpMXhWYVZtUG9Jd04yTG5na3gwSWJ3TzBDZUVQN3NRcTRyWVlLc2ZfZm1HSWEtbjVycS1kc1hsYmhiMFRjcFRpWTcxWlhqckNBTG9YcXBrdkJN0gGiAUFVX3lxTE5GMWdiRngxck9kempNM2JiMkxTb3NHLW5HNExTZVNtMmRiNTJhb2Y0clRfQXRXeFVISGZmblU0SXBpV2RJdjE0ZnRqY2FpN1IyNVphRVJVWXpWSFE0UUNxRUFpSXU1SjlKcm8wcHZnbmhoYUZmcGJybXMwWVZaQUhka0gxb0pSN2s0eXExaThCNUJsYndFMUpYV2tEM2FMZklpdw?oc=5"
    },
    {
      "title": "埼玉県小鹿野町両神薄 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMk0wMEdwSXBYTVkxeWRvVFpTeFJya095RW9WSFk1V1h5YWloQ0I2RmUzQkR6Zmg3WG9Hb2NsZ1FMd184UTJOR2RwU1Q4ZTBvaGo0bWNlb0ZXWWp5a084MTJkTXFUV1Rta3RNcDhUOG1id0Z5aVRVQldud2N5LXBDeFI4U2twVnR2TVhUaFJtUS1vTmx1S0xudjFFQ1DSAaIBQVVfeXFMTVRvdVhBRUdRT3lWNUx1bTVmODRyX0FiLTdBZ28wQXQ3ZnM3NURWQ1Q4TlY5VGZQQ0szcENrUWZVYUJOWUpjSWhxbkJ3Y0JrMHRMTXRNd011S1QwZTJVa0NocTBHdTM0RGs1eUsxTHNiZ1o4MThoMnhONFdZWWd2T2NBbUxyU0VGQjNFQUlkODVNNE91ZXFhMmNDekNXN0pLNlZR?oc=5"
    },
    {
      "title": "栃木県鹿沼市板荷 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNMzZyYVJtTV96SnlDZnpadWNjVmE4ZmtWaWVPbEdIU2hrSnVMTHdudWxJT0FwYUdTRUdyeWp3WEZIRHFYTWg0OHowZk1hRTNjMzhfdnVueUJTOXZ2Y1JwY3I5TG1GUnFYUGxLMkJxcTV1NmdSXy0tQU1lcTNDRzl2RGtEYzRVUzNjMjdjTk1zMi1XWWlIaXBraF9XZmJjQ0xwUk9aZGFCZE04VnY4dU1PVHJJQVRYYkZnOS1vU1V4dEQ0TmR5ZTVuU3lkdXRsWDJLMEllNGxTWmpLZksweVpROXJwMGhWbW9jSjNVWW40NnMzZ9IBogFBVV95cUxOSWtLZHQwaHNHeldScmZzendaRnVYa3pfbmxJSHZjVjhKelZJZXdmdURXRlpfVndGa1RBWEs3MFJ4Z1h0WEhmbFN2MURGWGNGZE54TWIwbHlnM3JtTEktd0c5TklPM1dKMFFlRlRQQTdxa01BNVhhUllfYlA2aEtpV3dmMEllRUxuWGtfOEpTV0ZxeE9pUmtJcGoyczZzblloUHc?oc=5"
    },
    {
      "title": "栃木県佐野市作原町 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdktydkJnRWhxLTJDd0h6NXVqMmtITGdESndxWFlnZDdNb19NcHZWcE1GeGhsWlAwTnlJVnNZTm1PZENXNE9VNkc2SUI3RkdZdjlwZVJYR1hER1JjSXE3amxvTHNnb1Q1djQ5VnJyNWxUMEMyZUNfS3FsOGhzTjd4Y0RPX19GRFB1bDRNYTFKeDZCSzRpS1lBemZRczdMcU1SLTZoTlZQOG5KYXF6bVp5X2JHc2F6V2RFRlExVHRLelpnVUdWVXBuZEh0X055ZjFQTExXRUxnRVpjVXFZSTZTam5qMktyel8zM3lZYURBTzJvd9IBogFBVV95cUxPUWNQS1BocTJVWnJaZDVvNlJSSkxIMGloUmllWGJvREdCcEVBMkMzWVRzQVVxbmdieWNNalZSdS1FdEJubjRwcjA5THk0cEpoN1NnektTVVlCQ1RmZ3hNV0tZRnFvMW5qQzJYdU9kQlRfdUdyRk5vdldNUjRjd3dBLW1IZ0ZvQWRDSThlQ01Eb1ZXYzJqWDNSUUZTeTVEQ2lvNWc?oc=5"
    },
    {
      "title": "島根県益田市 国道沿いバス停付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9Sd2xQWnFWTkRrWDdaWWVPMnRQZng2bEUybnBuMUtMQ2M3YUNUNERiVU9IU0VPU1BUNDhIZFJ6c1MzN1VmcmhBaUFQbm84VnkwVVNFU3dPbUNuUTJEd096Zm5qVnpUazJkREszcmc3MVF6aWl0bVY5Y2NQVTFZck0?oc=5"
    },
    {
      "title": "島根県益田市白岩町 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUjBaY19Uc2V0aVJQTW1LVEMyR3NqZlc0UFVPM29ibVBkQUFuUkF4elk4eHFMbERJYTRJczRjTmdRTUhhZDBKTnVQa1hUYXBzdVVMLUM3bW9Wdm0zTDFKaHY0YjBCdnhJVUpCd2NjekpRYjVIOFluY3ZVcFhuR1dxTlczTGNobW5EZ1lPajZZNVNkSER6NnNkcXRvSDHSAaIBQVVfeXFMUDZiUXc0OHZDOXRjelRGTm9oQjVtaXlTc2VNQVRIa2NHNHBsNTFCenQwX0pYSVNEQmpLMEg2ckN4cjFVOWRLY2EyOGJIZVFjNnV6UVk4QzFmMkdxRzhxQ1BhRHdyQ25YbEhUOUJOazU3cmg1SFNRMERxVlRuT1hmOEI5TFlWTTFnRWNXZ1NyTGFMMmoyNmQ0cW9PSXdTMDlEREZR?oc=5"
    },
    {
      "title": "北海道猿払村 道路脇に体長1.5mのクマ1頭",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9JNkF1dTM0OXAzdTN6RWlhMDlQS3RiOHpZWFBxQmplS09xVlFueFhJaU9GNFU1YURVajRrcnUzeU9zU1FKRS1DeUtub1duMXF0MU1US1lOc3hTVzRUNmR4U1c4QUVsLVA3b3RqYtIBckFVX3lxTFBBaC1udVpLUGs5QXc5Q3BqU3k4ZXFJNHI2LUVjVC1WN2EwSmxEczRfMzN3M2NMdEJxeXlTc0lvU1VVZjI1czN2Ul9FbHFDOGtmeng2T3NxODVkaHhTYkViZUk2M1l0SVVENThVUDNnV2pxZw?oc=5"
    },
    {
      "title": "北海道札幌市西区西野９条８丁目 クマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSTh1aVJJM1phVDZocXJVVm5XQk5FNm1yaVdVVGx6ajNMdmY2bjBaaG92dmtDZUNMOVNXY2tSN2VUSEtQcjJCMnJ1dnVSM2xmTmsxN0hPMWNxV3pvNGdnSjlIOHU3Qzd1S3VpMjdBbFhVLWdVRFVwc250QVptNXZLbjdyVklqZDFTM25NU3VfSGIxbXNVVlRSUUpBUkTSAaIBQVVfeXFMTFBhd2RQNXF4V2lEQXZ2eTFSU1VjeUlSUXoxTmlYdzZ0VVMyZjlFMlVUeHl6OFpDeXloSWQzd3J4WXZtWDJJYzNFdzZva0tLX3RHcER6QS1SQnpfTktWa0xqR0ZXOV9yVWpDTEZON0R0Zk13RkMtZnFDczFYV1hzTHY4bnFLRlNPdmVSVzMxTUpxaHQxWFoxM1JyYzQxcjlVaHl3?oc=5"
    },
    {
      "title": "北海道新得町屈足 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeWVNY3dCWFpud0xRTjZIajRKeDJrZ1VOREItSm16bjdsNFhLZDcxQUk2dG5TdFNnZm9veVNYcGtkMGpTcTVnSzhwSW5HQkxNV3ZhZ3FiR051dUxSRTFRT0RUWmlwRy0xdGtXbk1BdzRIc3Y2R1NCS3BTZGROTHZjYlU1bzZFQkZ5RUpITF9paHRfbTh0SFpmQkI0TkLSAaIBQVVfeXFMT25KcFhtYzFYYnRqZnFJSnM2cnNBbU93NVNoaW1WTTQ4eUd3RWF1RTNQNTdhNzU4N2g1NDRzNFdHWUhCYWVDV096V1g1dXJ2LWtva0pPU2gyRWxiU2M0SHo2ZnVlQnZldmZPUFdLaFl3VWxwSGVMaWVrbGI0UFEwUTRYa21ZLU9yVERBM0E3NEhRQzFSdjhoUW8xQjJBZFQ0cEd3?oc=5"
    },
    {
      "title": "山口県周南市夏切 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNXzBqMFJJZTJwNFVfcjRfdXlSQlBnT05ZT1hxQ0FHRGUyaUN3cXJ1em04SllaZ1lzcUJQY1RraWZPdHFZMk9aQ0hfVWRqc21vQjR0TEo3dTJaVHZ1enE4cmd4eG03SmJwZFZVSjBnZmFhQWdxYTA4d0NacVhmdF9RSWQ4SXhCeW5YU0pCa0Nna1dUWmUzWDktbkNFY2l1anF4U1HSAaIBQVVfeXFMTV8wajBSSWUycDRVX3I0X3V5UkJQZ09OWU9YcUNBR0RlMmlDd3FydXptOEpZWmdZc3FCUGNUa2lmT3RxWTJPWkNIX1VkanNtb0I0dExKN3UyWlR2dXpxOHJneHhtN0picGRWVUowZ2ZhYUFncWEwOHdDWnFYZnRfUUlkOEl4QnluWFNKQmtDZ2tXVFplM1g5LW5DRWNpdWpxeFNR?oc=5"
    },
    {
      "title": "山口県岩国市美和町生見 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNmlZRlpGMkZMNGZ2ZmotYW44VmNtUTZBVkxTd2gxWjNjMEVyekNrTlNLNjJTV1FYdUx5X3VHLWRhbm5RaEtuOWF5azg1QjFZQS1IU0FmLWUwdTgzenhsZWI5bVp2R2xWWkxaQm9SZWJnc2RhT0JnbHVvQTVTaG04dHpzRFBFVlBJa1l4VEFaZFBNZ2lQMXY1ck5zU0_SAaIBQVVfeXFMUFZkNmtwODlBQlJPdGthc2ZuUVRaQUZUN1ktenVUTjljdTJhLXR5ZWJ2ZERjZ09mRENIUGF2Y2VXZkxJN3o4dG5YUk5IMUpsLVNzNk44T1JOSUZSWW1Ba1BXZkh1VU5VRXNzNENiTVZCNU9tcG9KUEgyaC00d2FaX3JQWDc5THNMQXVuWHdxS0RmRkFYZ2x3VXE5VmNBeW1yNjlB?oc=5"
    },
    {
      "title": "山口県岩国市錦町須川 クマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQSXFLVThLOFp2UmlndWxiZmpHTTgtakQtejhUSDEyRExySGpNN3FYb05aWXJDanpIZmxueWlQbXoxMldOdGJ3dUVJUEJBbHR5T2U4eE9EUWZQNlNMOGVGY1lVWUlQQmhoY2xERTNxekhnNkY2WXRaZ2hOYlFnYTYyOU5tYnI0Wl9MSFFjYy13RWtIc1NMUm05a3lzZnJXYkNOZkHSAaIBQVVfeXFMUElxS1U4SzhadlJpZ3VsYmZqR004LWpELXo4VEgxMkRMckhqTTdxWG9OWllyQ2p6SGZsbnlpUG16MTJXTnRid3VFSVBCQWx0eU9lOHhPRFFmUDZTTDhlRmNZVVlJUEJoaGNsREUzcXpIZzZGNll0WmdoTmJRZ2E2MjlObWJyNFpfTEhRY2Mtd0VrSHNTTFJtOWt5c2ZyV2JDTmZB?oc=5"
    },
    {
      "title": "青森県階上町鳥屋部 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVUNHTEZfeWI3OVpGdTY4Y2RrVXBxLWE1YktoSmc5YUxEZzJJOHB1LXQ2RkxfU0ZHSGRzUmROUUV3ZWZGOGhyb1R5MUhQNnJVNzNaRWZCV3pxRjB0bS1KZXNERWlZbUg2c21HeHlmUWpQa18ydDhtZE5SeWtVNGhQejM4RHFiaVZRLTdfTDJsOFZFaDM0NlgtQUlIVDfSAaIBQVVfeXFMTUsxb3NwOWVWejl4WWMxcHRfU2ZpUDRuUENTekFRNzdxVlNKNzVKLS04OEtXQUdKRVljeWI4LTQtdnNmVHhwaXlVOUFhV0M0THN3clVfaVlWdzNuVWsteWNPbkQ2OTgxTGl4V3dvTjFHZmFoVHpEeVdycGkxQVV5VlotcmhsU2JqOS14Qzd5NmFBRkRHUUgyNURmQmN6T2VQb1NR?oc=5"
    },
    {
      "title": "青森県横浜町吹越 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNOEVGZXFSSzIwdWJHbm96cURkRkJGcG9KVHkya0hGTV9KeWZGejdmSVhHQzh1cll3OGgxSXRLTDhGdFhOQzZDV2F1RU9ZLWZCVHRpcTBlemZUa0RrQU9tVUpfYUk3N2ptd1psOXRSci1tWGVZdGh6bzlVNmhxWE5XN1h1RlFYdEdBZExDTXNWWlZoNGJBby1rT2JzRU1PTzFFR1RZU2RYNUEtdnpIUDJJ0gGiAUFVX3lxTFB1Vm1KZ2FUMm13VU9fcld1TVhqSFFRRzVOYWpHWGZfT1JkU3BfbkZhUFFQVDRRUkNrUTJyeWtwYVk2QU40OE5fcGJqX1VVZHk1RUlxQ2NUT2FxaUFJY1Fub3VEcE5WZ0lYaTZjS2J6ZUhoTXNkcEJUUkhNOHY2U0VlWE5kQ3dyQWpSXzJ5Yld6MFRrd3gxWmxpREJlTzJsVTAyZw?oc=5"
    },
    {
      "title": "岩手県久慈市長内町第４３地割 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOM2JhU1FhbWhUOUJvSkxYSmhNdXVfczhmWnJ1bjJ0SGxSd1ZFNjYxWVNGU1VhMXZqcnpnbXh5RTByY3FtaERpQWpZSHVsamVlRk9RSTd2S3ZDQ3dtMUMzY0F0SmtRUWxKcVBSaFBQRExQTDhKT2J0T1lEcEhSSk5EOGc2alA4Ni16UzdTZWExTDNSaVNYQzh0ZVYxRljSAaIBQVVfeXFMUGhJSHpNWWNLSE4ybTNOLS10VEdwZmFoQmdTeHA1R2xrWmMyMTk1dUpvVFh5NGk0eXNELWZ5SFRRcGFzZUtzeU90aVlYd0poYzJ4YXJseV9JMXIzRWlGWC1rNklndVFKVmpfb1ZNS3N5bmllbjZydDNTelAzTWdhd0E3NXJSNVhVTkVFRnhzNmVQdXFsdVFna3lpX09yMGVjeWd3?oc=5"
    },
    {
      "title": "宮城県大崎市三本木蟻ケ袋下賀家 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRTF6OVA5bFpPR0NJdW1wNjF0TjdYZkVVMkYwNHpMX3pUazFHRDJCOHMzRWF6d0RWcldEZ1pSUDdIUXluR1hyeVNCSWM1NjlJWi1iQ1kzVXpvVVpMN2lsNHB6amhzYjYzYng4bFRhdl9VWkhENkZ1QUo1Z2hKT2FNNkUzcFVYbGJ0QjUzWEFfR2x3ZEQwWUdkcXdiUVnSAaIBQVVfeXFMTzBVY1dKV25PZFo5ckFaeU9NSW56T2NaOVFJcUtYeXAyXzBFRXp2ekYzeWhIXzhnZG44MUY3c1RHUjBuMWtWZzloUERraEg3dmt3THc1c3R5V3dmZnEwSDVlWmZKZ0pWVkN2WGdqWkVDTHVRUVFBLUpidUlPYlVTbW8wc3Uxd2pGQ3NiRE83cmlsZzdnQjVZX2FFeElTUXl3blRB?oc=5"
    },
    {
      "title": "宮城県塩釜市杉ノ入裏 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUmdoeUhKZk9DZUdPM3dOOERqYk5YYVBKSVE1dTNfREJNZUtfak5NdGphc21lVjBPdjhiWk9zNFdzUi12N1pkUWd4UGtlbzkzWDlROTNiRURoalpqNXltZUhwWDhGNTZvUXZMZERjNGJXdXNycWtFdVdyZWg0bDdVLWVHQzJaeFRvM1hVelk5d1pwRkR2WkRrUHRuX07SAaIBQVVfeXFMTUZfZ2gwSDZHRlQtZl9VRi04VF85eEF5TDVVZTNIa0drNGJGR09iR3BJUUVXVGFYOUVCQ3JkOWIxVFdzeGF1aXpJNXBNcGR1eERvLWVjWWJlbDdDNXZNZU1fVGNTUjFwZ29iNURsam1OUEs1QnFta2ZjMzRmVU5heW45U1otOEQycl9XQmd6NGcxaGlkcWdIMTZzNzl4UVV3czh3?oc=5"
    },
    {
      "title": "宮城県仙台市泉区根白石青笹山 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPZ0xZWlRCUjVXUndsQlBZSVlIMkIzREhJelZfUGI3WGo3Nk96ZGcxb1l0c2lpTVZSTnNmREpJSGVob2ZTQ05Pa0hDVDU4eTFsX1hIU1BYam8xNVBDb0M0dnRuMm12VkFXcXVMU1RldjdQQkxRVko4WGZaSFpyMmx1MTk5UE9TaXFYT2hxaG5JTHhfWVR6dkZraGd2aU9IeU1DYTJmazBrbnN6eFg2bzFtRWFTT1huNTE3MlZTWURyMFlJV3BZM0x2RER6aGtnRUx1clJmWldTT00yWk5qREVFUGdHUW9FRHRSYzhkRHlzaFN3QdIBogFBVV95cUxPRE1Jck5uRG9PQTRfWk9ySzZLZEYyQjNIZHQzNF8wMFVBYXd5aDBFVWhBUG9lenR5WGFpS0JJZVF6eUFESGZmazRCcEpmeVducEE5ZVBRZDdKSlBtYTBWdF9nbk9EamJoLVJMM2hXbWM0REtaM0pXVGkyeC1YQmtKS3Rmak5maWlOVHVBQ05DeWdCUGtZNnQ3V3RieVJPZVNvbHc?oc=5"
    },
    {
      "title": "宮城県富谷市大清水１丁目 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTUtOTXNwZ1k3anNBSklGUzUyZ3lhZ0xnMWJpYTlnQmRUai0yM25rZlp6UnlYYlVUN2p5bUVBdGlSV0ROd2hyRzAycXp5S2huYS1vcU1zYWo2UTE4NUZMUjFqUkxRQnN3YTNxQllkVU5JNUpObm9NekJpNG1Hc3hQTWtZU0syWGxWZGV6R0lmajVhdjU0M1dJM0V5aDfSAaIBQVVfeXFMTTRMZlAtUU8yTGhWa1RTTF9ZTDItQTFiNGNiQzNFWnJwa0U1SXpKMFAyUFBTbHpkVk1sVHZhTXNEcWl3cHZtZDd3ekZ4eTVhM0ozYzhFRGU4QmRVUDNCUEFLWWx1U0Z3SzJYNXlVNjNxazhENGRMQmZrckZUZHFmV1FwZHRVVGlqY0Ftd1pxSXlJaUY5S0FjV0pabzN2eUZZQlFR?oc=5"
    },
    {
      "title": "宮城県塩釜市 無人島にクマ上陸、船から目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB1RF9ZYUJkeGhjekxMaTdkaV9yRXpTQ0lWSk80TkRFWDdMaFRhT0hRN3A5M29qUDVOcFM1amdrZ1Uwbk9aUDZUUzdRcTJvRUgzdk9GVlJoVFVvNUVlSHdYMDhxQVBkOXk1a0VMVnZUUXRjRlphZnZHd21fdVAxOFk?oc=5"
    },
    {
      "title": "山形県山形市花楯2丁目 クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMXgwaVpaMHJpdUtKU0hwbUJFMlhwUnc5WHZVMm5nSlJ4RDlwOW0yZWQyR1pUOGFET3V5aVB4dUpOZUl1eDg5bHYweGM5NGd3WjZkRUFOTnZjV1A4ZjR5enJyVFJSVE9qcC1BcDV1T3FEYWlTb2g5T012aEtzOVlVTmY0eUcwb29YdXJMVG50Nlk3X256NElJWm9JNFDSAaIBQVVfeXFMT2xpTDhmbGRjNEV1aTQ5TktGSTFoLXhrNkdCY0U3a2JvNFB5a2pNZHRBV1I0Vy1wcTJ2SElhYlZrUVdZQkZaeG05MUk0QWJEcVhsOHlseUxtbmVTZE1Xem9Ea3ZxeERqNGtOYzhHSGs4SHZOZDFsOEg1YmhsOXp3RkZLdXAtRXpSbGs1NkR5XzNVcHBTeXhQLTdlaFBnSkg4S0V3?oc=5"
    },
    {
      "title": "京都府京丹後市丹後町平 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdGg5M1ZBd0o3V3JrY3JHM1hYck1RWnVFSng1bHE0VTN0YUt3UVNrYzh4ZG4wbC1FNEdqWlQycG5EUzRxOGp3ZEIzTmk3d3h4ZXZDQUM4M1QtajhZWlNHejBRV19sNkN2U1kyZGRuU0JzUW9FSEg1cnBINGZYTWlkajRtNXdRQm9rVVlTbDRaNzBwdFcyUm9ILVlTTHLSAaIBQVVfeXFMTk5jQ0J5eU50Nnc4eFBBVzdBRWlIX3ZGczBERjNqR2VfaGE3UEZWTEtDeWdoUG5YYmxUWDZET1A3ZzlkaXNaeUtSU0JlWDZxLTRpeHBPcWdlUmo2MGtldGxYZHk0U1FJaGhNUHdJaEVGNDF1UDZyLTRGNjMzU1dGMFBOaVg5bHZYNThiRjJWV09PUTlQcjlZaGhXUWpDX0pLY0Jn?oc=5"
    },
    {
      "title": "兵庫県西脇市西田町 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQ1VXWU9JTWRDM2JGUVZlMV8zSmhCY0FleGpmOTlQNWpicTI5aFk0empWYTI4eHhqZ2RrOFo2QWdXZEtCZVJHWXRwWTZDQzRWOEZSYkVUU012M21CVnJtRkQzNXdIY3gwUENOa3FxT1NzQmE1VG1VWk10LXNXdV82ZkVTcmpRNWNzcEp3dGlJWnBCU1Z0XzhGdllqNTTSAaIBQVVfeXFMT3IyOTMwdXhzVFdEZGdOaEZKTWg5OXVlWF9SazVwNDVRekdJWXpUV0xfeWVNUTNrXzRNSUJtTUluNDNSWGN5NEdBaE9UX2YtWEo5ckJmeVk0Zm9MajVsVE9JMU9tcnV0b1M0REZKTEp1NERzejBDeElaUHI0SFBvNGVJRHQyNExkUU03WTFZT0JsQU5XMTNMWVdsMmhDemJzSFN3?oc=5"
    },
    {
      "title": "東京都あきる野市乙津 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLXVBZzFMampBczdzU0hMM0VYVllpcDh6WUc2LXhTMEFldzZoNlVqY2NNbXVTNjFBRWpkQ2dUaDFzdUhMUldlUlBZbVNJY0ZBWHhHYjJMWjRiTzJoS2oyVmd5dk5obU15WVBmZWRMeVFxMDR5NTBtcEtuRUVFX2JDekdyV0xPQlp1dDZBUEhSa2F1UEctbjhqWGNvYmrSAaIBQVVfeXFMT0hfNS0wYmtTTVlWZEJHdjVISVlUdU80d3dtUkQ0N2FwM2N4LVdNVndmUDlYcWRqOVVkV3dYRjdyYkFFS2hGWk81dHJiMVVFX3FWMERfQXY2UVhfaXZhWVBGajhHZFh2ckc0WFFLYXpQRkJ3a2Vvb3VsVDJheVdzSklVUTRTREdwZGRlT0lCOS1heVJxQWZncnpGZTFuWVJRNS1n?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":10},{"pref":"宮城県","count":8},{"pref":"山口県","count":5},{"pref":"岩手県","count":5},{"pref":"福島県","count":4},{"pref":"栃木県","count":4},{"pref":"青森県","count":4},{"pref":"秋田県","count":4},{"pref":"山形県","count":4},{"pref":"京都府","count":4},{"pref":"島根県","count":3},{"pref":"埼玉県","count":2},{"pref":"愛知県","count":1},{"pref":"奈良県","count":1},{"pref":"兵庫県","count":1},{"pref":"東京都","count":1}];

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
        <span>対象期間: 2026年9月23日</span>
        <span>·</span>
        <span>公開: 2026-09-24</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={61}
        periodLabel={"2026年9月23日"}
      />

      <p>2026年9月23日における国内のクマ関連データは全国で計61件が収集された。収集ソースの内訳は報道由来（news）が47件、自治体等のオープンデータや報告が14件（北海道3件、周南市2件、青森県クマログ2件、福島県1件、埼玉県1件、栃木県マップ1件、佐野市1件、島根県1件、豊田市1件、奈良県PDF1件）となっている。本日の事案では、人身被害キーワード該当が2件、都市部キーワード該当が3件、捕獲・銃猟キーワード該当が2件記録された。都道府県別では北海道（10件）が最多であり、宮城県（8件）、岩手県（5件）、山口県（5件）、福島県（4件）、栃木県（4件）、青森県（4件）、秋田県（4件）、山形県（4件）、京都府（4件）が続いている。</p>
      <h2>重大事案の分析：人身被害・捕獲事案・市街地進入動態</h2>
      <p>本日の最重要事案として、秋田県北秋田市の森吉山における人身被害が挙げられる。山中を登山中だった男性がクマに襲われ、負傷する事案が発生した（※1、※2）。秋季の山岳部における人間活動とクマの遭遇リスクが顕在化した典型例である。また、捕獲・銃猟関連としては北海道津別町上里地区で1頭が捕獲されたほか、山口県周南市大字須々万奥において錯誤捕獲が1件記録されている。</p>
      <p>都市部や居住地周縁への進入動態としては、北海道札幌市西区の住宅敷地（西野9条8丁目など）の庭先においてクマの出没痕跡が確認された（※3、※14）。岩手県釜石市では市街地での直接目撃が発生した（※4）。さらに山形県山形市では花楯2丁目、泉町、土樋など市街地・居住エリア近傍においてクマまたはクマと思われる動物の目撃が複数報告された（※27）。加えて、宮城県塩釜市では海上の無人島へクマが上陸している様子が船上から目撃されるという極めて特異な移動動態が報告されている（※26）。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域・自治体</th>
              <th className="px-3 py-2">事象区分</th>
              <th className="px-3 py-2">場所・詳細</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">秋田県北秋田市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">森吉山（森吉山麓高原）</td><td className="px-3 py-2 text-xs">登山中の男性が襲われ負傷（※1、※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道津別町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">上里地区</td><td className="px-3 py-2 text-xs">1頭捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県周南市</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">大字須々万奥</td><td className="px-3 py-2 text-xs">錯誤捕獲の発生</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道札幌市西区</td><td className="px-3 py-2 text-xs">生活圏進入</td><td className="px-3 py-2 text-xs">西野９条８丁目ほか住宅敷地</td><td className="px-3 py-2 text-xs">庭先で足跡等の出没痕跡確認（※3、※14）</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県釜石市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">市街地</td><td className="px-3 py-2 text-xs">市街地エリアでの直接目撃（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県塩釜市</td><td className="px-3 py-2 text-xs">特異出没</td><td className="px-3 py-2 text-xs">無人島・杉ノ入裏</td><td className="px-3 py-2 text-xs">島嶼部への渡海・上陸事案（※23、※26）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没傾向と空間分布</h2>
      <h3>北海道</h3>
      <p>北海道では計10件が記録された。政令指定都市である札幌市西区の住宅街庭先での痕跡発見（※3、※14）に加え、猿払村では道路脇において体長約1.5メートルの個体が目撃された（※15）。また新得町屈足での出没（※17）や、津別町上里地区における1頭の捕獲事案が記録されており、森林部から居住区近郊、道路インフラ周辺に至る広域でヒグマの活動が確認されている。</p>
      <h3>東北地方</h3>
      <p>東北地方は計29件（宮城8件、岩手5件、福島4件、青森4件、秋田4件、山形4件）と全国の約48%を占める最大の集中地域となった。秋田県北秋田市での登山者襲撃事案（※1、※2）や由利本荘市中帳田ノ沢での出没のほか、岩手県では釜石市の市街地目撃（※4）および久慈市長内町第43地割、第17地割、第8地割、中町第1地割と局所的な出没集中がみられる（※21）。宮城県では大崎市三本木（※22）、富谷市大清水（※25）、仙台市泉区根白石（※24）、塩釜市での沿岸・島嶼部目撃（※23、※26）と内陸から臨海部まで多岐にわたる。福島県では福島市松川町周辺（杉内等）の市道や集落で体長約0.5メートルの個体や散歩中の住民による目撃が相次いだ（※5、※6、※7）。青森県では階上町鳥屋部や横浜町吹越（南部小学校付近から海側林へ向かう親子連れ2頭）での出没が報告されている（※19、※20）。山形県山形市では居住地区周縁での目撃が相次ぎ警戒が強まっている（※27）。</p>
      <h3>関東地方</h3>
      <p>関東地方では計6件が記録された。栃木県では佐野市作原町の林内や鹿沼市板荷で目撃が確認された（※9、※10）。埼玉県小鹿野町両神薄（日向大谷付近）では登山客による目撃事案が発生した（※8）。東京都においてもあきる野市乙津の山間集落周辺で出没が報告されている（※30）。いずれも山地と生活圏が隣接するエリアでの確認となっている。</p>
      <h3>中部・近畿地方</h3>
      <p>中部地方では愛知県豊田市大野瀬町マセドの山中において設置カメラによる撮影が1件確認された。近畿地方では京都府で4件、兵庫県で1件、奈良県で1件が記録されている。京都府では京丹後市（丹後町平、久美浜町橋爪、大宮町明田）での連続的な目撃や出没痕跡（※28）、相楽郡和束町白栖下出での目撃可能性が報告された。兵庫県西脇市西田町での出没（※29）、奈良県上北山村小橡での目撃情報も寄せられており、丹後半島から紀伊山地・北播磨にかけて点在的な分布を示している。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方では山口県で5件、島根県で2件が記録された。山口県では周南市（夏切、須々万奥での錯誤捕獲）（※16）や岩国市美和町生見、錦町須川（※17、※18）で痕跡や出没が報告された。島根県では益田市白岩町の国道沿いバス停付近（白岩下バス停付近）で夜間に1頭が目撃されている（※11、※12）。四国地方および九州地方における事案の記録は本日確認されていない。</p>
      <h2>リスク評価：秋季の行動圏拡大と複合的リスク</h2>
      <p>本日の集計データから得られるリスク評価は以下の通りである。</p>
      <ul>
        <li>季節要因と活動活発化: 9月下旬という時期は冬眠前の過食期（ハイパーファジー）に移行する段階であり、山岳部での採食活動が活発化している。北秋田市森吉山での登山者負傷事案や埼玉県小鹿野町での登山道目撃が示すように、山岳レクリエーション客と活発に移動する個体との遭遇リスクが極めて高くなっている。</li>
        <li>水系・沿岸部を利用した長距離移動: 宮城県塩釜市における無人島への上陸事案や青森県横浜町での海側林への移動など、水域や河川・海岸線を横断・経由する大胆な移動動態が観察される。個体の行動圏が局所的な山林にとどまらず、予想外の地理的障害を越えて拡大している点に留意が必要である。</li>
        <li>人口圏・都市機能への接近: 札幌市西区の住宅敷地内痕跡、釜石市街地での目撃、山形市街地近郊での連続目撃、福島市市道での散歩中遭遇など、一般市民の日常生活導線とクマの活動空間が直接交差している。集落周縁部の緩衝地帯管理やゴミ等の誘引物排除、住民への早期情報周知が不可欠である。</li>
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
          <dd>2026年9月23日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-24</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-24</dd>
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
