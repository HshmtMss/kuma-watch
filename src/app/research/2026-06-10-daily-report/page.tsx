// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月10日 / mode: daily-report / 生成日: 2026-06-11
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-10-daily-report";
const TITLE = "2026年6月10日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月10日、日本全国で82件のクマ出没が報告された。人身被害は確認されなかったものの、岩手県遠野市では運動公園に出没した個体が駆除される事案が発生した。新潟県(12件)、京都府(10件)を筆頭に、都市部や生活圏への接近事例が相次ぎ、全国的に警戒が必要な状況が続いている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-11",
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
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
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
      "title": "岩手県遠野市 遠野運動公園にクマ出没、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9aLWJod0s3WWZYcTF2aWJTWHdYV1NLUzRZLWJQNjZVd2c1elhWcXgxRzdCWkhxNlo1M0tHVVdSQVRBX3dSX3JPcVF2NUhjUVlYT3M0cUtPamYzdw?oc=5"
    },
    {
      "title": "岩手県遠野市 遠野運動公園にクマ出没、駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9UMTMwWW1Nd2xEVjNCdU5aU00wTFNzc043aUtiZFUyaEZIRUJ3cFVPMXA5b19KSEF1QjYtZTBjdW12SWIyQjZDZm95RElMSVY5M1RwcERuMnVPSVEzNzAwazgzbU92NFlDWFBkOExEd2hhTXVuTkxuaXBrZkx1bGc?oc=5"
    },
    {
      "title": "北海道苫小牧市 錦岡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcnRuYkMtVkNNUGkyOFFfRmxUZkE0RjEycHpFaDFOcFlCVmM3UkozX3ZyclpHR2s2Z0VfeG41RVRBeXNlUXJLUVhfNWZOZXRQekJ3OVRaY09PR1c3UFBsMjFXQmlkWkRwUl81NTNCNWdqV0syU2c2RmVQLUtMbjU5RzRia1lMdElDM1ZvS2hSa1hFSXlSV2dTaVpvclbSAaIBQVVfeXFMTTFhdmM2S0hUTUgtdDZIQ3NDTDNneWdHdjEtRHhsVFFOWVhDdEhkUGhRVDRGd3FLRXJrZlpjOXY4SlQyckQ0Mk9meS1lVUlzSXF4bVQySWMwRXMxOUFLZ2w1dXZOREpjNzlDbnJicGdiYkFWNlNUbHJjV3RjMXJoeHV2ZHVsM1Z5V05Ub3pEQXlUc0E1UUg0VWdHdVFNZ1JKMW1n?oc=5"
    },
    {
      "title": "北海道苫小牧市 錦岡でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcnRuYkMtVkNNUGkyOFFfRmxUZkE0RjEycHpFaDFOcFlCVmM3UkozX3ZyclpHR2s2Z0VfeG41RVRBeXNlUXJLUVhfNWZOZXRQekJ3OVRaY09PR1c3UFBsMjFXQmlkWkRwUl81NTNCNWdqV0syU2c2mVQLUtMbjU5RzRia1lMdElDM1ZvS2hSa1hFSXlSV2dTaVpvclbSAaIBQVVfeXFMTTFhdmM2S0hUTUgtdDZIQ3NDTDNneWdHdjEtRHhsVFFOWVhDdEhkUGhRVDRGd3FLRXJrZlpjOXY4SlQyckQ0Mk9meS1lVUlzSXF4bVQySWMwRXMxOUFLZ2w1dXZOREpjNzlDbnJicGdiYkFWNlNUbHJjV3RjMXJoeHV2ZHVsM1Z5V05Ub3pEQXlUc0E1UUg0VWdHdVFNZ1JKMW1n?oc=5"
    },
    {
      "title": "北海道佐呂間町 東でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQSk1vM1k2SEZIUHMwc1piRDJ3dWZhelBRcmNQNkVFX212VmtLMWNtUEhoZGJsT0hSUnhpZm1vZnpTLXY5YnlTMWlEV01qVEZ5OHZTc2h0UHVmUUJHb1pQNVNaTTBuUjc1WGRXeWNmdVlEX2ZpeWNwaHZka0F5bXNTV2RVdW1WQTVya3N1SmtVcVE4RUM2X3g3TDJTNnZ4bUZaN2tfUy1EQTQ2R2RqUk9r0gGiAUFVX3lxTE4wSUk3ZmZJdTlvQVYwYkRXZXk2Y3J1VEl4YmEwYUpJTmRGTjNwVFZwb1kyNC1ydlNLamRCR29FbnR4QzZkLUZIOFZuSDhMM2d5RWIxc2RfRWVvT090T0RIWVY3YWVCSks1NmVUYmx3Mzk1NHFZNTlFcWVacHBWaDN0VGR1c1JsdFBwZGpUT2VLenV5WFFnaHIybGphcW43cjB5Zw?oc=5"
    },
    {
      "title": "北海道佐呂間町 町内でクマの出没痕跡を発見",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQSk1vM1k2SEZIUHMwc1piRDJ3dWZhelBRcmNQNkVFX212VmtLMWNtUEhoZGJsT0hSUnhpZm1vZnpTLXY5YnlTMWlEV01qVEZ5OHZTc2h0UHVmUUJHb1pQNVNaTTBuUjc1WGRXeWNmdVlEX2ZpeWNwaHZka0F5bXNTV2RVdW1WQTVya3N1SmtVcVE4RUM2X3g3TDJTNnZ4bUZaN2tfUy1EQTQ2R2RqUk9r0gGiAUFVX3lxTE4wSUk3ZmZJdTlvQVYwYkRXZXk2Y3J1VEl4YmEwYUpJTmRGTjNwVFZwb1kyNC1ydlNLamRCR29FbnR4QzZkLUZIOFZuSDhMM2d5RWIxc2RfRWVvT090T0RIWVY3YWVCSks1NmVUYmx3Mzk1NHFZNTlFcWVacHBWaDN0VGR1c1JsdFBwZGpUT2VLenV5WFFnaHIybGphcW43cjB5Zw?oc=5"
    },
    {
      "title": "岩手県盛岡市 上米内松木平でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeExXVUVqMUVITENYaFVuNXBrN21SOVlNYndhTEpIb29wOE1mbWxZbnZmSlFQM2dqekhyYTBFUFFkcVgzVXF2cXdlRHZic0IyY2JGeHZRSW5WdzdobXJEbV9hUUFxNm90MmNxY0sxOXAzOF9WdHJ4Rk1NWEpYc2lZZ3VtRmV0TDRtVVI0MjR4bU5PQXFBRjdkOF9ZMDLSAaIBQVVfeXFMTmRoUENxU1E2OGF2RERaZTBzaEp3NmlaYW1PN3RrYXJueVZiN0Q5eVp0RW45eTNSVHFhYm5OenpvdTVGcTVnLWNLMWowWkdFRGlUOTBSNm9NdHFLWDhQMUNLNDV0SlhCTHZrd1JJbzJfbGMzNjJWem9jakt0TEJCcVVXSmxhRXJsNGFWd1NsNVY4enVTelhQZXVUS2hSQkpFV1JB?oc=5"
    },
    {
      "title": "岩手県一戸町 小鳥谷中屋敷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQ3FkVm5jWVpvc21ZMGZkdzc5UmZUeUwtUmJ2cTdmZ3hLZ1hPeHNiUnA1a1hvYTZ2cGp0UXRvRkFUTXV5RGFLRm8zM1RSd0VmWDZ0SnYyQkNTUFR2X2UyN1JWX1lRbUhSWEN5VzlFa1U4NWxGS0Z2d1oxQ0hmbC10YzRwQVMyWm9HQVBqWTNRX2lnaE1iR1UzWF85OUvSAaIBQVVfeXFMUDIzTTI5WktGRTFHbFZJMzh6YkpWX2JmMTYxNmlici1MRDh5MGhodGptaUFWMzdWdmIxX3NiVjZuTHRkckdZUm4wSnVKZVkxOFNaUTJBQm1lRjJQU1RiSjNONE5IQ25QMW1MSEFPYk9pY3lYS3lMdHdnTWkxck1TTVo1R183RmEzdWZhLVZKZkxackhlaDRXX1RfZVRka09BVFVn?oc=5"
    },
    {
      "title": "秋田県横手市 雄物川町大沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQa2dhMzNwdkFkUmhRSEpvN2tWRlZEUW1xNjgxdUd2dEt5aTBfVV8tZVNQRGVPOFBhZ3dJeXhiTzI4WFpGeHZmRlNEdUtSWXM3UzNRbDdTUXJGX2NrMzU4b2V5RUNMdWZRb2w0U2ZUb003aUo4TE04RjE0b2t1WkJUTW9tb1R4dUxlS1MzVXdrOWI2TnBjNmlTNzJmZ1rSAaIBQVVfeXFMTVgxMGtnNEVrWk9PQmZMQ19xSFJuNUFRbU1oM3BRWHdNRUZrY0Vac2JydlVlWURua2NpcVU3S21adGtvaVVSV3JuNlR6cllFNE5Xd0tQX1dPVzgyc1A4Znd1NzRYNS1OU09sRHB5WkItMXlaZkhLTmVZUHFDLUJzbUt6Z1p5NndJdVhmUVN3Y2FtdVQwTVdNVnBkNS02QlA5SllR?oc=5"
    },
    {
      "title": "福島県磐梯町 赤枝雁ケ峠でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRHp1aUgzQXBZYVp0NHdPdWxleFUzaHdfLTg1bnRyakktdm1KcE1YRER4ZFhhN1JCZ09mNTRsemxtbDVpYWhQVkJMWUFmVFgtd05HRF9FcGNsR25YT2E2d0NGNzJQLUE3WWMyRzMwVnBhVTJNZkY0ZnpxSnJYQmNpWXAtUmxMN3VtM3hsTEcyZDJHMENvblRwNXgzVVbSAaIBQVVfeXFMUGRycHVqVFlNRXRXWnVRV0o1eU80UFpyQjNvMkFiMGpXa3hTOThfY0ktcHN1M21HNmdUSXNpeVZOQ1N0WlNmSnVjVVZsWVhRV0QyZEF0YndlU25qREdfY0x2MDRaUzBwUFpoU2Vhd2dXNTBONEhaWk1RR2ZUamZGMmZHbGQtMXJLR0hhaEdVRGNCeXZZMmFDNTJxVmZiX01WeV93?oc=5"
    },
    {
      "title": "青森県むつ市 大畑町下川原でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWUlrdllIckN1aVYxODlHWlFfUm15a3FocWNWcUlYV3dCVHdEUDd6Z2RTUkZYUWcxVHA5bzBuQWwyQWJYOEtIYkFPUnEwMkpHb1BUejd4dFlPMTFPeFB0OEFxYVN5elRFM3NFRW5TWFpLZ3c1Uk4ySWt5MmZ2UEp5RzlKcTVJaC1TSm5uY2UyMmd5SzNOdDVORG9YRkvSAaIBQVVfeXFMTVlOajg0UVc2eVFmLUg2YmY4Ny1EVEtCMDlienVVeDUxR2xkVnY2dlBZUHNMQTZYd3dLYnlqbERmbzNkUW5FZEVkZUJlOWpJZS1QY3pMRGR6R1dScFFWc255RV9USkNXcHdBTVAyTHU2WFB6RTdOcUVUaE1saGxZd244V3FwSTlRLVlrVzdlZTFlOUw2SGdVcDBFYktnMTBNNkR3?oc=5"
    },
    {
      "title": "群馬県長野原町 北軽井沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdC1JR1p2X1dxcUNIelNGc21mcGRtaTZRWnZFUWZaOW55ZjdBOWgwTzNoWjBkR3NVRU1NT1daWk83eHNBb1hfQmh0U3I1aGk4bGRMd1VLNnZkaDRvcXcxdnl6M1U5X3hra0t0aW91aHNZTndFX2Z1SXBUWDNBdmdfbjVFS0p6YnppeHFuRjdzZlgxNFc3NWZvME55MnbSAaIBQVVfeXFMTkQzQlVKSS1jLUM4cVFGRW4yVVV3RE5TU3pMYXlLTEFsZEhCUjREcXdDWHZSaWpQaTR5OHAyRW9fNDU2aUVRc3hCYTRrcmtvVE1xYmdLOEM0WloxOXNEMFFmTHVuOGQxcGlsb240bTBSbUk5b3ozVWpoSi0zNmI1aHVMN0VRWXZWcVNnZU1KVy0tZm4zUC13MVJXenNTVGJIZERn?oc=5"
    },
    {
      "title": "栃木県那須塩原市 塩原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNnRHZ01Za25NNFR1bXRMNllpVEkzQmlmZVlwWkNLZEtfOWVzaEo4NWZYUDBVRE1xMm1RVzEzZTQ5NjBjLU0xMVFLWDBIOHJVZS1XVGFUVE13ZkZOaXlPMmpFdE90d1VBTC1Gd2dEUk5OcF82Um93WF9iby1rWDRhbW5tNmFXX0FzaUFENV94eDJQWWE4TXgxV2xISU3SAaIBQVVfeXFMTzhWeERXci1LNVpHUzJOUVpRMkZrcW5ZN1pDUnFKX29hWURFX3RiSFBVbzZjWlhteDBoM2RhTnh2YkVwTC1CLTh3OVFKeWJEOHBQMmZnNGFtZklYQXBlcDJueFlQaWxRYlFaejdPYm1KOVNHak1pXzlIU3BXUmE4VWlqX0hjX3pHalpqRVBoa2xqckF6OXpDVTNwY3o4TUxLblBR?oc=5"
    },
    {
      "title": "新潟県三条市 栗山でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMnc4aHFrREF4R3hoQXFmQkEyaTlyOUVJNUMwVlBMNFJPRzNtSVRhdGtyYVVlSld5VzR6WnYyOXNfeVVFeFVlZ2lVWkpHRzh2MUpJUDNhTVRrMDc2aW1BTllOaUdPbUNBcXEyX1BOSEpXWmJQNFZPeXN6TWlfT0c5QTd0bmY1M29MTzdIYkg2ZzNvM2NzN0lnbVJBSUXSAaIBQVVfeXFMTVNERzZsSzJtMDZDYUN1Y0wybFoxX0F2NWdBM0cxR2NCT2h2dmYzNC1YVTh2OW1lWHI1c2t0OFFHMDJ4eWRHODBuYms1N2J4VUFoZU9YQ0hmemZyQXBpRWM4VXVPOWlVdm9ScE5kbWpfcVBnSFNPQm5xeUw1NmdIdUN3cnVUb2V0MzlHZEpfM1paZ0w3Nzd5ZWs0ZVZCQUdJWVhR?oc=5"
    },
    {
      "title": "新潟県村上市 緑町でクマの出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPblRZVXJmYnJkRW9uRk10Y3c3V2tYdEJ4NlExUXBMSkdEbmctVmJCcVVtNV92QlB0SU55RFh3NG9UQXVIdmpEZF91ajVUeHp0UVY0WGdmcVFQU1l0aEotQ1lnUm03bUhpNjBLSHpLMWpvVWtNLXJDUjMwMFU0ZzMyOEhuYnJJdWJEenByQXhNdzZ4NEZvQTNQVXFadnnSAaIBQVVfeXFMTjlTZEdxdzhfZ3pPeTRUTC1wQXl2WUNvSG5vN0dFU1lwNEo4dDc2Y3pjc3VDS1hQRlg4WmE5TV9SeUZScE1QZHY3Ym9WTmg4RVJHOFFmLXpfWUJidExQcGdTeFBid2M0bmRTVW9vV2lST3FfMjJCSWZqQjVLZk12bzl3LTYzUVhmTGE4dWVJQi14YXZXSENVQ1NtU09QNmtjVHJn?oc=5"
    },
    {
      "title": "新潟県上越市 柿崎ダム下流地域でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQ2JUektCeElNWWRlR01obldnbmZjZS1oR0pjRFVZYnZuc1ZvVWtwWk84dHNTNGN4bHMzSEp1dmhrazVWRVMyVkpDbHRfRThNY2VNRUU0Uk9HQTJPeTJfRDloRE4xMFNjWDFhUGMyRVlsXzFiZ1dkUkhNNHMtQURZeEhTQ2hnVTBGUlBCRzVJMENaSnNCOFpnUUFscXrSAaIBQVVfeXFMT0dobWV4UEdaLXlNa2dwMTdxRzNKRUtDTnpqN3BBQVRVanJBbDdJSkY5M1RYeEwtdGlnaTZBb0lJUlJ0Z2JfY1hQQ2FyQmp5VXVlRUJ2ZmhuSlMzLXR5c2dtWVJYaWJUUG9HVndiYXFTaDk2RUZHdHRPT0NzbUJUb0lRTmZ5cXM0a3JSZVliSC1DcG5URDRObVZEVG5MYjYtUl9n?oc=5"
    },
    {
      "title": "富山県黒部市 工場敷地にクマの足跡",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPaEkzVGdVQzB1cW5Ea2RsUDFGNkJuNFdZOVZDaV90Vk5ORVMtd3NMLUo5djNtaVg2el9SMjhMdllIZy1ZV2ZocERYeDBIc21Da2xkRHdpQkxKLU5tWGt1T2V4TDUwRDlKQ1RvZzBYOW5SV19wS19VeWdaMk05cXlFZjlFdDg5X2M?oc=5"
    },
    {
      "title": "長野県大町市 大町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdHZMbkJiUUxLYzF2bFg5azF2ZDZGZDlnQk5OOVlhdURldS1OSUs2eWtMU0NFaFMyQ09jeTdJZWt3YXZwN25yelpZaWtvejJ0eHZycW1rdTVjVFhhYnhBdW43bC1IUUF2MW1pMDdHLUh4eGd4dFBZYnpjX19zeDNlUHA0RDFidHh2OF9EbkotZXRDTHN4VFN2ekRLN2XSAaIBQVVfeXFMUHQxRzh6bUxFSnVZM0JtYUw4R2VmazhSRXlGZjlua3BHS1dwZzhHQzYxNmxOLVNLR2g0VG56VVlvN29GSGRhX1ZtdG42LXVrSnNtcFZUWURNdEZzX3pyUVJSVnV5VlEyWXFUbjlxYVJjZXVBMjEzYWdsR2RsWF9mZzAtVWZhNjNJLTZOS1FnZE1rWlczM01nSEc3US1vcURGaHln?oc=5"
    },
    {
      "title": "長野県南箕輪村 大芝でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdmdTczIwdGdnRlhsSWZmUTIxQ1E0TUExWG1jNlBWNmlaOUxDZE5hTWdpbDBWWHZYcFZ3X2M0Mmg4RnZkUzE1VGlZVU9xWEFjT1VMbzdybFNVdTRnVEwwSjcwVmpHdVU5eGZlakd2V2VmeU9adFB3SnVQNkZTLUdQTW5ydmY1TGVqeXc3bkRma3AtWGx3cWN0YWd1YXrSAaIBQVVfeXFMUDNOTUNnSHR0YjBnZEtZaVpfSnRVaXZGUVo1Y1Z6RVhlNTg3Z3dqQl9BcFBuNEZZZzlQNWRYcEJjWXZiam96YmZVdWlHTloyLVhVQ0lXV2k3SHJPWldxMHp2dkk1SXJ1RmFzeHRmTmozMHh0TVVwT09neW45UTFjYk5nOWFlVUFQNzVRdVpnd2Q1NlVwaFFmckRqaVBOdUQtS1l3?oc=5"
    },
    {
      "title": "福井県福井市 島寺町でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYVBDc0V2c0dMTVpZNmcwcUV0ZV9rZ1hqMVpfdDF4V0wxYUJRLUUweEFROXBiZEl1ZnFGN0VHYmRTZ21GQktrR0xqSHUzbWl3SVNkbm05UU5nTVlsRk5Gb040Z29FU1F2cHg2QlN0cDhmN2RvNVBhSWdndlNQYy1WTWNVNXB2RG83NHhiRFRPM2VoN1JBdjR0ZmJISTfSAaIBQVVfeXFMT2pkR2l6VnhraUxIVXAxd1BVQjVDTUx2NjJSajYyeXpmZG5HTGZZRmxKVlBZelRnSXFKWVA3czhrdTEtTjR6OVhWNGQteDlOSlpSOVlJOW5kQ193S0tyR2lKNGN0VG1id09pZHM1TmN5WWJmQV9YWnpZNUwwSjZKcDA3RmlPUmpkZkNKb184VjNhSVlaazZ1a1hyMlgzWVM5azBB?oc=5"
    },
    {
      "title": "京都府京丹後市 久美浜町橋爪でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdlBPcnZtbDRhMkFfRXY0ZVFPX0dYSzZkUEdGY1REMkk5ODNkV0lnaVlKTE9QakhCWXdiWldqYlRLQlJQRTVma1dmckEtenIzanpkV0lEbU9nMzREM00tblk3bzVTc0dDUXdydlVxYzVTb3lfUXpzT1l2cXF2UjYwR095eFhZM1BXRkMxbTUxVWV3cEk0VUFIUXltanjSAaIBQVVfeXFMT09WMTB6aTF5bXFoZkNNZjNNZElnbFZ1eTJhbHk3NkhzTktJbF9hM1VnRXYwODRLMEQ5RVp6OTFiektnOS1ualhNaE1QTFc4Nk02Rm91MTJmSERBUmdTOV9UVkZpVDl6NWd1SGtUX0ZuVlVCVVpINUZ2QmZnNFRBUmN3dXFEdjVDQWJHWlFURkRkQmllTmZXNG1zbkxtbXV1YTR3?oc=5"
    },
    {
      "title": "京都府京丹後市 丹後町大山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcHYxRVIybEFmNHFvR09yRXE0cFNOSXhQMks1RVl5dnllV2txNGhXVHhFMDh5ZXhXY1RMbHJRMUozTWc2S09MVEdBdmFTdnBCVE84eDJPMXpUVFBTcDN5aXVLYWoya2FZU0Nkd3lXbjJIb1dsY2dxbzhERDVXaVNOVk1Za3ZQYzE2bFY2cGdDY29mdThvRUhPZklkd2HSAaIBQVVfeXFMTVBTdjE0dUQzWkZYT2FBLWhDVGxjNkZiNS1ad1RqS0d5OUJrYkJzd3VEamFIZEdQVEYxMUdNSVhFc2xTMjdCZnFETUdIajRqYTVNdmxicGE3VGQ4aVlHeDV1R2taUHFFX2pGUi1VWkxZWVlPY21YUmpXekdqTGRWeXZvbzVvMUpRTEEzaEg5NHRtV29UcVFiM2x3MDd1YXhkRXhB?oc=5"
    },
    {
      "title": "京都府宮津市 獅子崎でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQzF3TVFOZkkxVDBSQmUyT1FIN3VXb1pnYVBzSmdadDBLTWs5ZENoMElGXzdQX1dYb2JJZFR1bnJuUU1fX2FxZERSTmJhVXpybGZmQ09CU2Q1R2RsMzJlX2twYkpVQjd4YnBaam0zSUc3eWFzSlNjblBMRTF4c3ZieXFza3dBQ0ZYSlVpZ1RsSG0zVEpya1pvSk90MW3SAaIBQVVfeXFMT2tyZlNhV2h1UjA2bk9HS2JQZjhidUc2eWYxOEFZQm9aUjVSS2N1QnREbllKUDgxM1dQQXBqdnhqOVMwRTFEdzg5X3ZDSlFuazRQUEVqdlJWQW1MR0IwSGpTVEFBRG9uR0Z2MHJvUEZkMVZ2czR1LUROMUYycUtoZlJtb3FwSlBHcW9qX3U2d2VrVVl2eFNESW12Y3dHRnVDdWJB?oc=5"
    },
    {
      "title": "京都府福知山市 上佐々木でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTVVmdFFvTzUwWlJsaHZZVzBlaER3bXp0TlFJaUN6RXF3b0RUXzlUZHowN0s4Z3BiLWR5Uy12NEk1TU04UGdfZ1RiMDZydHdUY05UODVnb3RQczBLc0VoX0xJOTJUc2Nlb2trbHFJN2doSmFQTHpMemcwUXBmY211YllSTG9MbW9FbjF4UHl2b29mQUxKOVFyc1lpeDDSAaIBQVVfeXFMT2xhMkFnYVFmVDd4aFdjUnota2dBMnk3NlJuMlE1Uy1rSXRLM3pXQU9na0Y4RnY2VG8ySVlxaV9oTWhVS25uM3B0OVBMQXFPRWVQb3pOS1FUX2xydjNNaDk0MWVFWFBFbWxJVUdJVHVMZnBJelhCM3JyNDR6Mm9meE5WRl9lRGZYWlU3TVpOU3Z4aGpFWVJHRUhxRUVRM1VTWTZn?oc=5"
    },
    {
      "title": "京都府福知山市 大江町公庄でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMmtqenRVeU00VFFOLVFJNGNUMmduZ1E2aXZybEJ4VVlRN3JmUjFQY1NJcEo2Rzh1N21wc0ZwN19VZHpSR2xoSjhRbHJRN01nY0JaZWk3dUpoWmE4NFFCbHlydkFKOXptWGdSXzlHaHk1dmxZb0J1VlFjVGVlQ19TR0JSRTA0VXlScTZTcFBFM2hvUjB5YjJqYUxuQkLSAaIBQVVfeXFMTVgwRFdNclptWGZ2Rk5BcFNENlc3cDBlbkFEY3RYUUJETU5yVm14MGRVbnVsMVdSd2doX0pwSlZ3ZlNTSjV2Y2xadTBCTmNHUVVKVGwtX2pPNlZnOGRhcDl2VVpmYkY2TGNHb0JmQmt4VUlkWHhkWVZuZDIwOGJrM0VGSy1FTDNfQ25oUEwyamJOTjQ4V0NGVHdjemtHQ3ZsSDBB?oc=5"
    },
    {
      "title": "和歌山県高野町 花坂でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNMEYxOHFNam5Tc3RRaktSWXB6WmMxaW5Tc21TazZOVzZpa1dXZjBHS0dxQk55bHN4ZjV3WnI0UHE5YWxUX0FIMHpnbm51NUFsMXYzeUhFc1BEYklfcGcxQWt3eDAtVjNvMVlRWTNXOGFkOGxZeXZMR1Zta3pobzhjc0JIMWo3MTNZd3ptel9RSHpsb1JIVm5mVVlWSldwUjNOR3gzbC14SjBaekwwY0gw0gGiAUFVX3lxTE9FWVNJVVB1TFNrZ0RaOFFPY1pKR0NTN01vei1RRGlqN19PRWcyNFZ3Z3hhdkVpWk9MTjQ1aDh3TDZYYkp5NVJiRUpCbGNXRmhkZ1NmclMtZ2pxOWVRaFBMRFhVa291NVFsTUJvTldpMVFZRklzdTlyNGE1X3lRbW05dk8zaktKZ3BTYkRUVmJFNzY5TTBPejQ1NF9CZ1NYclBTdw?oc=5"
    },
    {
      "title": "和歌山県広川町 下津木でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPRUhUU0N5Z1ZmOGpHcnFyWXFyUDdUb0wxMDdPY0lNdEJhM0xUWldkUHoxdVhyUGt6UjNLM0F3cDBDb1RFcUFJZmhiaDMyRmZYMVJCYU0tZkltTU5HeU4wd2JwRzREdFFta0hiaDI4Xy1uY01xY2xSUE1RVDlTVHFFNlVPdG5aX1BDazM3ZEJZeFZ0eHI0d1hhY3VHWndDRFFlLWfSAaIBQVVfeXFMT0VIVFNDeWdWZjhqR3JxcllxclA3VG9MMTA3T2NJTXRCYTNMVFpXZFB6MXVYclBrelIzSzNBd3AwQ29URXFBSWZoYmgzMkZmWDFSQmFNLWZJbU1OR3lOMHdicEc0RHRRbWtIYmgyOF8tbmNNcWNsUlBNUVQ5U1RxRTZVT3RuWl9QQ2szN2RCWXhWdHhyNHdYYWN1R1p3Q0RRZS1n?oc=5"
    },
    {
      "title": "島根県益田市 トンネルや橋付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOUWFrQTA1TEFDMEE5VXNkQmxULTFlRnJJVVZadktWaUQ4aGhBR3JWSi1aTEowQ3R1amctdlNnc1lWeDgtd21YN3lxX3AzTV9pTUZxV3FVZV92VjA0RWgyZ2VEX0dPV1RIb0ZYTG1wRXA2RlZmN2VaaFpteFZ6Tnp1MFpXeFp1cUtwS240aUp3?oc=5"
    },
    {
      "title": "山口県山口市 前日も同じエリアに出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1RbldDcktzeE0zR19zX3pCUlk0bkg2TWo0UmZnZWdJNjQ5SjEwZURVLXJlQlh2Q1Y2b3hEdmdkN3V0ZVRpSmNuTFRfQkZROXdVQmk1TlVUMVhnb0M5bU5IMjZqMld1dk9jdUVidjFsVVd5YmZQeGRtNVNlWERHbzg?oc=5"
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
        <span>対象期間: 2026年6月10日</span>
        <span>·</span>
        <span>公開: 2026-06-11</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":37},{"pref":"石川県","count":20},{"pref":"北海道","count":19},{"pref":"福島県","count":14},{"pref":"京都府","count":14},{"pref":"新潟県","count":13},{"pref":"群馬県","count":10},{"pref":"岩手県","count":9},{"pref":"栃木県","count":9},{"pref":"大阪府","count":9},{"pref":"島根県","count":8},{"pref":"富山県","count":6},{"pref":"長野県","count":4},{"pref":"和歌山県","count":4},{"pref":"山口県","count":3},{"pref":"鳥取県","count":2},{"pref":"埼玉県","count":1},{"pref":"福井県","count":1},{"pref":"青森県","count":1}]}
        total={184}
        periodLabel={"2026年6月10日"}
      />

      <p>獣医工学ラボ（KumaWatch）が収集したデータによると、2026年6月10日の国内におけるクマの出没件数は、報道および自治体からの情報を合わせて計82件に達した。このうち、人身被害に関する報告は確認されなかった。しかし、岩手県遠野市では、遠野運動公園に出没したクマ1頭が緊急銃猟により駆除されるという重大事案が発生した（※1、※2）。また、全国で3件の「都市部キーワード一致」が記録されており、新潟県妙高市では交番付近、富山県黒部市では公民館付近で目撃されるなど、クマが人間の生活圏へ深く侵入している実態が浮き彫りとなった。本レポートでは、当日の出没事案を地域別に分析し、リスク評価を行う。</p>
      <h2>地域別動向と分析</h2>
      <h3>北海道地方</h3>
      <p>北海道では計4件の出没が報告された。苫小牧市錦岡（※3、※4）での目撃情報に加え、佐呂間町東では出没痕跡が発見された（※5、※6）。道内での出没は広域にわたるものの、件数自体は他の地域と比較して限定的であった。しかし、痕跡の発見は、住民が直接目撃していない場所でもクマが活動していることを示しており、継続的な注意が必要である。</p>
      <h3>東北地方</h3>
      <p>東北地方では岩手県での出没が7件と際立っており、特に遠野市の運動公園での駆除事案は、人間との軋轢が深刻化していることを示す象徴的な事例である。同県では盛岡市（※7）や一戸町（※8）など、内陸部を中心に広範囲で目撃されている。このほか、秋田県横手市（※9）、福島県磐梯町（※10）、青森県むつ市（※11）でも出没が確認されており、東北全域でクマの活動が活発化している状況がうかがえる。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県と栃木県でそれぞれ9件の出没が報告され、突出して多い状況となった。群馬県では、長野原町北軽井沢のようなリゾート地（※12）での目撃や、青倉保育園南70m付近という極めて人里に近い場所での目撃が報告されている。また、中之条町では幼獣が目撃されており、母グマが近くにいる可能性も懸念される。栃木県でも那須塩原市塩原（※13）などで複数の目撃情報が寄せられた。さらに埼玉県飯能市でも目撃情報があり、首都圏近郊の山間部においても警戒レベルを引き上げる必要がある。</p>
      <h3>中部地方</h3>
      <p>中部地方は、全国で最も出没件数が多い地域となった。特に新潟県は12件と全国最多であり、三条市（※14）、村上市（※15）、上越市（※16）、妙高市と、県内全域で出没が確認された。妙高市では交番付近で目撃されるなど、市街地への侵入事例が深刻である。富山県も9件と多く、黒部市の工場敷地内で足跡が発見される（※17）など、産業エリアへの接近もみられる。長野県でも大町市（※18）や南箕輪村（※19）で計4件が報告されたほか、福井県福井市でも出没の可能性が報じられる（※20）など、広範囲で予断を許さない状況が続いている。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府で10件の出没が集中した。京丹後市（※21、※22）、宮津市（※23）、福知山市（※24、※25）など、府北部の中山間地域を中心に目撃情報が相次いでいる。この地域での出没件数の多さは、個体群の安定的な定着と行動圏の拡大を示唆している可能性がある。和歌山県でも高野町（※26）や広川町（※27）で計4件が報告されており、紀伊半島の生息域でも活動が活発である。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県で7件の出没が報告された。益田市のトンネル・橋付近（※28）や、飯南町の国道54号付近、浜田市の消防出張所付近、江津市の山林など、県内各地で目撃されている。人間の生活インフラに近接した場所での目撃が多く、車両との衝突事故などのリスクも懸念される。また、山口県山口市でも前日に続いて出没が確認されており（※29）、特定の個体が同エリアに滞在している可能性が考えられる。</p>
      <h3>四国・九州地方</h3>
      <p>当日のデータにおいて、四国地方および九州地方からのクマ出没報告は確認されなかった。</p>
      <h2>総括とリスク評価</h2>
      <p>2026年6月10日の出没状況を分析すると、以下の3つのリスク要因が浮かび上がる。</p>
      <ul>
        <li>季節要因: 6月はクマの繁殖期にあたり、特に雄グマが行動範囲を拡大させる時期である。また、春に生まれた子グマを連れた母グマが、他の雄グマを避けて人里近くに現れるケースも増加する。群馬県での幼獣目撃は、この時期特有のリスクを示唆している。</li>
        <li>餌資源の端境期: 山中ではタケノコなどの春の食物が減少し、秋の堅果類が実るまでの「餌の端境期」に入る。この時期、クマは新たな餌を求めて行動し、農作物や果樹、さらには人間の廃棄物などに誘引され、人里へ侵入しやすくなる。</li>
        <li>人口圏への接近常態化: 全国の事例を見ると、運動公園、交番付近、工場敷地、保育園付近など、人間の生活空間そのものへの出没が常態化しつつある。これは、山林と市街地の緩衝帯機能の低下や、クマの「人慣れ」が進行している可能性を示している。特に新潟県や京都府での多発は、地域的な個体数増加と生息域拡大が背景にあると推測される。</li>
      </ul>
      <p>総じて、当日は人身被害こそ発生しなかったものの、駆除事案や都市部への頻繁な出没が確認され、全国的にクマとの遭遇リスクが非常に高い一日であった。出没が多発している地域では、住民への一層の注意喚起、ゴミ管理の徹底、藪の刈り払いといった環境整備が急務である。今後、夏から秋にかけては、農作物の収穫期や行楽シーズンと重なり、人間とクマの活動域が交錯する機会が増加するため、引き続き厳重な警戒が必要である。</p>

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
          <dd>2026年6月10日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-11</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-11</dd>
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
