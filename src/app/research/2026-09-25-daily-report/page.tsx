// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月25日 / mode: daily-report / 生成日: 2026-09-26
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-25-daily-report";
const TITLE = "2026年9月25日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月25日に国内で確認されたクマ関連事案は計65件であった。人身被害および都市部での重複事案は確認されなかったものの、山口県周南市におけるイノシシ用箱わなへの錯誤捕獲や、栃木県・静岡県での道路上における複数頭目撃が報告されており、秋期の活動拡大期における警戒が必要である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-26",
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
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
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
      "title": "山菅町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbEtXeVUwWHdXM0I4bzlkYTl5RDZ1MmVzVUtLNmhYUTV5ZkhSS1ZXREhiUXlLd0VlMkM0ZmVYbE44UEdxSUtVWHZxWTdCaVpUU1BVaVQ2M0lGU3I0MEZOdFdraVVCM2dlV0tBdUEwQnRTV1loSFZrNUJGVnBXaWxSSHZhRHpCWUpHZnRKTHB4b3ctLTQwaFRiUlRGNlPSAaIBQVVfeXFMTk9aSWozbVI1UVZHdFp6b3huRjVXT0xmMzFVME9ELUYwR1BEX09OcXZYV3dyaUdhWGUzbldYRWVJdVMxY1JpeWZuY3pzblJNYVFqSG5na2M5VUdOQ3kwdVBKZ25oR0JDeG5QNTAtOUdYekZHdWFadkExRUpwS24wTTJnZWdvRTdYZmgyNzN4LVBRcnhXVm5TYnlELTVvMWFTXy1n?oc=5",
      "site": "news"
    },
    {
      "title": "河川敷でクマのような動物目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1ZS1hOTWdQYzc0c1JleEFwcDV5VUxJdzNmNTlfaFdycmhyYmRDMkYzc3ZqZWhqU0Z5b1Nrck8wclk0aGJibS1JbFdjN04wQVJ1UVU4S2dBNHhGeEE?oc=5",
      "site": "news"
    },
    {
      "title": "道路上でクマ3頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5rNk1ISUVWZHJNeWpndjV1TDJGV09VWjVETkdELWJnU0J1YS12WDN1cHRPWmxGLVBYeHZtWWVLNlNESlY0TzFYcFVjMEdWb1d2UWtpaTBldDVxUQ?oc=5"
    },
    {
      "title": "周南市高瀬でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPckl3cVdGVTc5eWlkWVdOZmEwc1JqeFJFUHVlbDUyY3lIbm5CMGZQdjJZV3ZZVTliaWxYWjc3U0NkYmVWYWN4dm40WlVoU1o0V2F4cmlIQ3ZvQjBrOTlIY3BmeDVSODgwTXR6WFZKaTE5bEg4b01JNlptSmtROWpUWmZqMXNja0E4amctTUkwdkxoVXBMYnBsbnNOWG_SAaIBQVVfeXFMUFRQRF94a2RsSHdJQ09EbEJvZC1XZHNFTGdHQWxHTGtoenZZT1piUkgxLTZzbkxIdDhsNks3LUFtTnNocGpCYTllRGR3cnhiSzk3TW5FeVdhYzloV1ZoQkNJdlBpenpsRlMwSWQxUThpZXBaeFl4UTVUaVNzanVzbHg4YzMtTFl2SGlZWEFreG1ZbDItaXFRREpPUUlvTkZPUDln?oc=5",
      "site": "news"
    },
    {
      "title": "岩国市美和町生見でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOSXpRNjNtQ2tEMDVIVVNNVWRXQ3pHaDh1eUp1eWR3VWFzNEVGYTYwc05GZ3IzdWtkejRQQmhIY3RDQXM0bzRIMFlmMTQ4cmdLVXJoSzBJNnk4VnRyT1lBUldKS0FBb3FuNGNMbS05aTNFVDd3bkRKNTBzRHNOYU1WVGprTXo2MlNzUktkaG1zWmJZRUxCN0duYUFibHRpd3JINHfSAaIBQVVfeXFMTkl6UTYzbUNrRDA1SFVTTVVkV0N6R2g4dXlKdXlkd1VhczRFRmE2MHNORmdyM3VrZHo0UEJoSGN0Q0FzNG80SDBZZjE0OHJnS1VyaEswSTZ5OFZ0ck9ZQVJXSktBQW9xbjRjTG0tOWkzRVQ3d25ESjUwc0RzTmFNVlRqa016NjJTc1JLZGhtc1piWUVMQjdHbmFBYmx0aXdySDR3?oc=5",
      "site": "news"
    },
    {
      "title": "周南市下上でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNOWVrTk1xVVR1c3kya0tac2FldkliLXdfSmZGQy1RZnRvZlJ6SDVSSkk1aW5zZ1ctOVhobjNQX0ZrdWJYRkJwNFlkXzBBUkFHXzctaUV5U0I0bU4xRmVFa21hYll5cmdGeWhJNGdoZlZBN1hHLUxNcVI3SkRwTnhqSkZMcEZ5SXR5bHpNQXUzRjQ1WEhCLVpQSU1tZkpUZlR3RXfSAaIBQVVfeXFMTTlla05NcVVUdXN5MmtLWnNhZXZJYi13X0pmRkMtUWZ0b2ZSekg1UkpJNWluc2dXLTlYaG4zUF9Ga3ViWEZCcDRZZF8wQVJBR183LWlFeVNCNG1OMUZlRWttYWJZeXJnRnloSTRnaGZWQTdYRy1MTXFSN0pEcE54akpGTHBGeUl0eWx6TUF1M0Y0NVhIQi1aUElNbWZKVGZUd0V3?oc=5",
      "site": "news"
    },
    {
      "title": "東豊井でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZE1ENzhIU2kxMHZZUDZoX0V6RGpVTVZWcW1xTnhudE9EbE8zZXF3Mi1RR3lSVUdwUDgzSzg0UFpEUVJRenVMRC03emdhaUs2bnpzVjdldjJvemEyTWNZVnNYVmZDZHZkWkxVVGdnWmszOTVvTnVaU0dhM2FHRU50eFlGY29kMkplc0dmMmZqWXlKOUhVQ1ByX2xWSjjSAaIBQVVfeXFMUEZqcGk2eEtlLUwzN0I3eFNTMi1uU2NKdHdTVVpDcWN1d1FaTklESWJNYTVyNzQwRUZVekhvemFTVTVWT0JSSFo3V3hsYmEzNHgyNHpWSXNBbGxfQkktRlVhNlVMUWRxdEpuVkZJR2JiRTdMdkxaX3hHamJlM0FpQ0pfck9aejNzS1owVkE4SkJlZl9RNk92NXpISEVJM2lpbnVB?oc=5",
      "site": "news"
    },
    {
      "title": "乙津でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVkFJV3RHMWVUVUQ0cndYNjF4ejhIQnZ3RXhqNVQwQWp5OU54RXN5Y2NpLUV5eXJhSEp6S0pVdjhrZi1VRmpPNjdubE1EUWd1a0dkS2hzRzF6bDRveUFlYlJhd0xXOWpVdktfNC1RVE1SODVOc0J2cnVIYW9PWDdJUV85OWFZOG5BVjRSZ21tSGdkTG5zZlhEOFJRd3TSAaIBQVVfeXFMTUNCQlFWTkZ5NlgwZjNhYW41c0MxT2FiUmlyYzZhMG1WeGNLRnJIZncxUmdNSnlVaTZCcE45MkQ2cW5zZzhmdXFjcG52UjdrRUdseDRqYVJZMHpYTUVXOUVYQjdMNHQ3YnUzUDRzWWg4ajhUQURGLXJIMm9HcTFkeGJOekZKV0U2cTRaS1ZZNkxaVTFHNnBYMmVmb3l0R2drSHBB?oc=5",
      "site": "news"
    },
    {
      "title": "道路沿いの崖でクマ目撃か",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8wdnNRRzNzWmo0MGJRTUFuWHhBQUlROTdOaV9LQ3F3OThmUnRwRS1jLUFuczFSQmJBV1pQcWl2MUxqRVNYWjBCUG1XcE15c1R4TEhwX2FVRmlPS2x0ZHppRmhESXE3cDlWOXRHZnE0cVJqb1NjR0c0RXdPeW9XNEk?oc=5",
      "site": "news"
    },
    {
      "title": "【危険動物】埼玉でクマ出没 25日早朝 近くに観光施設が集まるエリア",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOTm53cU9MQmducGxXNGZEOUhYVjJjdGpGMWthOWZlbXJpYXJvLUhrRmxkZ3NMYWxtXzQxLWFEeUgxa0xlOEtNWGE3N0dhR01NLUM0d3hqVVZxbzFtNGQtN2toWDlKWHpEQy05X1JlcXV1cnVPc3U5ejNxZHN0Y3QzMXYwTlRXVmh1czBsbm93?oc=5",
      "site": "news"
    },
    {
      "title": "松島町高城居網でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQbWpua1dpazJYN1Y1WDZVbk9DNU02c1Q2Q2x5NTBLeV9waW95SkFaVk12S1pnTUNPc2stZUJXUTh2cjc1emRjMDF5blJyMmlmcmNXRmo2WlMyZG41T0hLQXZrUGZlbm0xbEdvd2hVVlp5VF9QWC0tVUJfVHlxeGpDajlkMGlwLXJRbXVLaHlPUTh1TTNsdDlJYVNMajkxckxTblVjVVlxc2hrWXZPN2M00gGiAUFVX3lxTE5HLVZ4MnhYNmlpclk4MDJYZDhmMUZwanluTFo5OVQ1ZVJvUGdUX1g1OTJmeE1NYkRfa2FBTldRTlBBTjZQcGZqdzRiNUxlQWp4REFKMl85cTR1bUtEQ3NiN3dXWWpaMmFGSGU1MS1QR3RPYTh2MUpvZEZRcHEwVXB0TnBab2pUYm8ycllOYU5VOVpuekc5Y0JkQVpqd3ZYRENOZw?oc=5",
      "site": "news"
    },
    {
      "title": "路上で親子とみられるクマ2頭目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQbVRMZmZGQjk4SjBtYnZfS015S18za21FS2poaURaMk5nNFh5VUtNS1pyV2VjNmZ0UmpMUHQ4Rk1YbFVFb1ZyakNFZWZRZDR3Q0FmRzBCdE9nU2xEdnVJYVZvbmhRaUJ5TERDVVN5QWRKZHZvOW11MUs5cXlEeElueExQekR3N1E?oc=5",
      "site": "news"
    },
    {
      "title": "中野市金井でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdmNzQnZyOExlVE1ydWlOSmpka2JRMUZSMTM4eGZaNE1wN2R4UWVoaHozb29hZGZKT0VzRGJud2JUaTZEc0lkWkRIU3lkcDlRMVA4MFRUcE92VXZKTHpJcUtEV2kxMTQwazdFYVctUkNKZEM3SGlEanhia1NFUVpZWGcyQ1l2a1c1MWlMYUsySFZzdFdMLUNWN0c0NjbSAaIBQVVfeXFMT3NnbEhTZDgza003bG1hYm1RbEQzVDhZR1RneEtTNGJSQ2xLQXQ4dHNVTzBCQndrUXFCWG45UlMtdTY1RmZOUW1NZ2VzczMzSVdGZDI5eFRSbktxRG1mWDVyNU9OTFZCNnlNZ3pOb2xyWWEtQUVNMjMwNlRuU0p5VG5NS3lvaXBGNF8wVllnNDBBV3dKZGhROF9IT2NCdkl2MnJB?oc=5",
      "site": "news"
    },
    {
      "title": "福崎町西治でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPUTNVWmV5ZnhDUkZzZEE5T3JYaU44MUtKeGpyTTUySWxwcnp2ZUhURWJxUDlPQkZSUkNobERyR3JKblV3eWtlMU5SaWtacEh5WmpUcnZndjNfcnJmbFdpcFZXSzl1dk1XVG02WlkzZjFGQUw5cTFCdG9YbmNfY0duWURkeXlyYU1tN2pJcHF3ZHBLZUlvV3Vvd3V5Y3VMUm5PNHfSAaIBQVVfeXFMT1EzVVpleWZ4Q1JGc2RBOU9yWGlOODFLSnhqck01MklscHJ6dmVIVEVicVA5T0JGUlJDaGxEckdySm5Vd3lrZTFOUmlrWnBIeVpqVHJ2Z3YzX3JyZmxXaXBWV0s5dXZNV1RtNlpZM2YxRkFMOXExQnRvWG5jX2NHbllEZHl5cmFNbTdqSXBxd2RwS2VJb1d1b3d1eWN1TFJuTzR3?oc=5",
      "site": "news"
    },
    {
      "title": "小島町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQallETGgxQXBBZ0pfWGxBcDVkZ29oWXVhQ1U1a09BY2tCQlJGWjRqTlV4dS0yaWVFOTFuai13SmFXZGVtSnJUYW14MkNWRTFVQ3lnMzQ4VmhRVV9tcmFGaTdOcVUyT3hQaWZKbkdmdEdsQmI4R284QV9IQ0R3aUtWcTlyWkJyanN6X0dUNWJlY0tobHVQcXRzeW9kOHduRU5WaUV6QnNjOW1NNUdNX2FJ0gGiAUFVX3lxTE9BNThOSVdIN1BIRXVrVEpLMFl3NGQwRVl2VVEzellPaTZDMndVZmVSaGs1VHctdnZDcUQ2MjkzV1NPNGtMeVhxa05yZ09FRVpDc3VOR212VlBkMkRadjdUUDV2UlR6SDRpZ3VZOEVtLW1INm1ieTFVWm56OUwxXzBfQWRqc1pDYWpNV1Zid1A1TWNLc1JMWnVuUzFBOXdJZ3ZsUQ?oc=5",
      "site": "news"
    },
    {
      "title": "警察官がクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFB0bEowYjNFMEVFR3VTakRjbWdObjIwcEwtZU9pZTJ5S2Rpc2prSE1TY2lycVM5RlpRalRRRnh0NUNXZTR2VnZmWVhXVGJ5Y01oOU9ZcU5QcW1iNEU2QS1RelRkSXE?oc=5",
      "site": "news"
    },
    {
      "title": "金沢東根仏沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVVJyU1ZGOUJlYWNVTWtlRlc2QWUzSkJ1VzVqa0M4RjZJMlNoOFVYY2JpSnhMQk05VzFoa0cwTG5rUTdYM21ILUJyRGJINHNaMmVjeHZHLTFWckZLWlJ0dEkxQm5PSFI5czQ3dkdDSTVaeEdEWkZXdHV6MmpseG84RW1CeFltMEd2QXgtSC1aX1dnSVpNVk1QRDlfR1nSAaIBQVVfeXFMTk5WTGhpZXRfOFVORHM3MHRCOFJtazVlNk5EdHVSVzY4N2owbHVrVFhaTk1kZTRzUExVSnp4bTZnTDU4cVN4akY5UENoNTVXRnJpZUF6NWtUM09IVFkzakdJWkx1QWdTLTFIRWt3WUQ2WE45QUFkRDZnRmNqdFBQaEtPUWNfdlVZNGotbXVZSjFyaVVqOV9pbUFTQ0k1T0FNWUFn?oc=5",
      "site": "news"
    },
    {
      "title": "有田川町下湯川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVHRXbW12Z2hOdjZVX0ZDM21Nb2JkTHZSanVHaG04cTFvbkwyQXVFQTJ1ZDkxSTJjbjA4RWpTZG1YcVBtMElMNTk4X0FTUENEWHF6NWJoN1RkYUw2eGFBR3JnWlFSTFBWYVhLRXl0RklxSjBNclZhRXJxUTlLVXpsdndTd0pmVlRGU2hIUGN5SjNva3lxcExma1dpM2TSAaIBQVVfeXFMUEVnbjlKamF3YlMxVEVEXzMzdG9hUW1PVTV5WC1ESmNabFVTTzZxaGV3N001SklHYjRDZ21tcGtUZ21EWnBOUUZMbkc3QzJzV0daY24zdGhCdGhiMmJ3OWdJRy1yRHJ1SDI0a2hXVTNXMzNXNm9HSjJmWVNQNUoxeEJmNDZ2THFMZnV4QXNyZldHbjZRYWpMa2dMUUZ4QW8wN1Nn?oc=5",
      "site": "news"
    },
    {
      "title": "城陽市枇杷庄西浜でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPRWFlanFjRTV6N2F5SzlCc0JYRUh1MEZMSklQQ2pXdTNReno2SXA2OUFOaGFQb1BGczlsV0pqYkYxNXBVZi1IWGJMSExEYjhxSTVyODJHOTNoNXFUZW5YMVJReVpMUUNBck02ekdtOF9heTdzMzY4cjFXd1dfV1VPdXY4aVhvTW1VQ3c1c2IwRl9NNHVCUnRCb3JUenJVTVQ0M2fSAaIBQVVfeXFMT0VhZWpxY0U1ejdheUs5QnNCWEVIdTBGTEpJUENqV3UzUXp6NklwNjlBTmhhUG9QRnM5bFdKamJGMTVwVWYtSFhiTEhMRGI4cUk1cjgyRzkzaDVxVGVuWDFSUXlaTFFDQXJNNnpHbThfYXk3czM2OHIxV3dXX1dVT3V2OGlYb01tVUN3NXNiMEZfTTR1QlJ0Qm9yVHpyVU1UNDNn?oc=5",
      "site": "news"
    },
    {
      "title": "加計でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxONnFSa29CbTZHczRNQ1lqN21MRkxqNERTakJFSHpBbGJtcmM4aVdQRTZpTjl5NlY2dGY1MXNtSlowbjBTejY1TWNmdnlDWmlwdk1iVThULXJQa0RSbGRGX1BRcmxweGNDNUdIRll4QVVsaWJGdUNXNTVMZHo3ek12anRadTg0LWM0LWdIb0lNWEVfVk83S2ZTWVBLVnBBUzhxX2fSAaIBQVVfeXFMTjZxUmtvQm02R3M0TUNZajdtTEZMajREU2pCRUh6QWxibXJjOGlXUEU2aU45eTZWNnRmNTFzbUpaMG4wU3o2NU1jZnZ5Q1ppcHZNYlU4VC1yUGtEUmxkRl9QUXJscHhjQzVHSEZZeEFVbGliRnVDVzU1TGR6N3pNdmp0WnU4NC1jNC1nSG9JTVhFX1ZPN0tmU1lQS1ZwQVM4cV9n?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"宮城県","count":11},{"pref":"栃木県","count":9},{"pref":"山口県","count":8},{"pref":"長野県","count":6},{"pref":"埼玉県","count":4},{"pref":"北海道","count":4},{"pref":"東京都","count":3},{"pref":"青森県","count":3},{"pref":"秋田県","count":3},{"pref":"京都府","count":3},{"pref":"和歌山県","count":2},{"pref":"兵庫県","count":2},{"pref":"奈良県","count":1},{"pref":"静岡県","count":1},{"pref":"石川県","count":1},{"pref":"神奈川県","count":1},{"pref":"広島県","count":1},{"pref":"岡山県","count":1},{"pref":"福島県","count":1}];

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
        <span>対象期間: 2026年9月25日</span>
        <span>·</span>
        <span>公開: 2026-09-26</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={65}
        periodLabel={"2026年9月25日"}
      />

      <h2>当日の全体動向と主要事案</h2>
      <p>2026年9月25日の集計対象事案は全国で計65件に上った。情報ソースの内訳は報道由来（news）が52件、自治体等のオープンデータ・公表情報（mymapや自治体配信ログ）が13件である。人身被害キーワードに合致する事案、および都市部キーワードに合致する事案はいずれも0件であり、直接的な人的被害は回避されている。</p>
      <p>捕獲・銃猟に関する事案として、山口県周南市大字八代においてイノシシ用箱わなにクマが錯誤捕獲された事象が1件記録された。また、行動動態における特異点として、複数個体の同時目撃が報告されている。栃木県佐野市では道路上においてクマ3頭が目撃され（※3）、静岡県富士宮市でも路上で親子とみられるクマ2頭の目撃が確認された（※12）。道路環境への進出や親子の移動行動は、予期せぬ突発的遭遇リスクを高める要因となる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主要確認地域</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">松島町、富谷市、白石市</td><td className="px-3 py-2 text-xs">沿岸寄り・内陸部双方で確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">佐野市、足利市</td><td className="px-3 py-2 text-xs">道路上3頭目撃、河川敷出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">周南市、岩国市、下松市</td><td className="px-3 py-2 text-xs">イノシシ用箱わな錯誤捕獲1件</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">中野市、小谷村、佐久市、長野市</td><td className="px-3 py-2 text-xs">山間部・集落周辺での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">飯能市</td><td className="px-3 py-2 text-xs">観光施設付近および上名栗・下名栗</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">石狩市、根室市、新得町、厚岸町</td><td className="px-3 py-2 text-xs">警察官による直接目撃等</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没状況と詳細分析</h2>
      <h3>北海道地域</h3>
      <p>北海道では計4件の事案が確認された。石狩市浜益毘砂別や根室市川口、厚岸町太田5の通りにおいて出没が報告されたほか、新得町では警察官による直接目撃が記録された（※16）。内陸部の森林境界付近のみならず、交通動線や沿岸部集落付近での確認が含まれており、広域的な移動パターンが観察される。</p>
      <h3>東北地域</h3>
      <p>東北地域では宮城県が最多の11件を記録し、青森県3件、秋田県3件、福島県1件（いわき市好間町）が確認された。宮城県では松島町（高城居網、松島三十刈、高城馬場二）において局所的な出没情報が集中したほか（※11）、富谷市平沢や白石市越河五賀荒屋敷でも確認されている。秋田県では美郷町金沢東根仏沢（※17）や大仙市協和上淀川五百刈田での出没、鹿角市花輪源田平での出没痕跡が報告された。青森県においては、弘前市湯口字二ノ下り山での子グマ1頭の東方向逃走、および東北町夫雑原における道路上目撃と森林への退避が記録されている。</p>
      <h3>関東地域</h3>
      <p>関東地域では栃木県9件、埼玉県4件、東京都3件、神奈川県1件（山北町都夫良野）が報告された。栃木県では佐野市山菅町（※1）や多田町、足利市の河川敷（※2）で目撃があり、佐野市の道路上では3頭同時の出没事案も発生した（※3）。埼玉県では飯能市の下名栗・上名栗に加え、観光施設が集まるエリア周辺の早朝出没が報道されている（※10）。東京都では奥多摩町の道路沿い崖部（※9）に加え、あきる野市乙津において成獣のクマ出没が複数ソースから確認されている（※8）。</p>
      <h3>中部地域</h3>
      <p>中部地域では長野県で6件、静岡県で1件、石川県で1件が記録された。長野県では中野市（金井、越）（※13）、小谷村千国、長野市大岡甲、佐久市協和と、北信から東信にかけて分散して出没がみられる。静岡県富士宮市では路上で親子とみられる2頭が目撃された（※12）。石川県七尾市小島町でも市街・集落近接部での出没が報告されている（※15）。</p>
      <h3>近畿地域</h3>
      <p>近畿地域では京都府3件、兵庫県2件、和歌山県2件、奈良県1件（下北山村寺垣内）が確認された。京都府では京丹後市丹後町間人や福知山市夜久野町畑に加え、城陽市枇杷庄西浜で出没の可能性が報告された（※19）。兵庫県では福崎町西治（※14）および新温泉町田井、和歌山県では有田川町下湯川（※18）と日高町池田で出没が確認されており、紀伊半島および北近畿山系からの出没が継続している。</p>
      <h3>中国地域</h3>
      <p>中国地域では山口県が8件と突出しており、広島県1件、岡山県1件が記録された。山口県周南市では高瀬（※4）や下上（※6）での出没に加え、大字八代でイノシシ用箱わなへの錯誤捕獲が発生した。さらに岩国市美和町生見での出没痕跡（※5）、下松市東豊井での出没可能性（※7）が報告されている。広島県安芸太田町加計（※20）、岡山県美作市五名でも出没情報が寄せられた。四国および九州地域での事案報告は0件であった。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>当日のデータ特性から、秋季進行に伴うクマの行動生態と地域社会への影響について以下の3点のリスク要因が整理される。</p>
      <ul>
        <li>錯誤捕獲リスク: 山口県周南市で発生したように、イノシシなど他種を対象とした捕獲用罠への誘引・錯誤捕獲が生じている。有害捕獲や個体数調整の現場における点検・接近時の安全確保手順の再徹底が求められる。</li>
        <li>道路網・集落への接近: 栃木県佐野市や静岡県富士宮市における道路上目撃、東京都あきる野市や埼玉県飯能市の観光動線近接部での出没など、交通インフラや人間活動圏との空間的重複が顕著である。早朝・薄暮時間帯における視界不良時の遭遇回避が課題となる。</li>
        <li>複数個体（親子・兄弟等）の行動: 成獣単体のみならず、親子連れや複数頭での行動が道路上で目撃されている。母グマによる防衛的攻撃行動や、未成獣の分散行動に伴う突発的出没に対する警戒水準の維持が必要である。</li>
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
          <dd>2026年9月25日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-26</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-26</dd>
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
