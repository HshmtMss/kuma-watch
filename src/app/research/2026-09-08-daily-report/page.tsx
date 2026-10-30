// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月8日 / mode: daily-report / 生成日: 2026-09-09
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-08-daily-report";
const TITLE = "2026年9月8日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月8日における国内のクマ出没・関連事案は計93件が記録された。青森県や北海道をはじめとする北日本から日本海側、中国地方に至る広範囲で目撃や痕跡が相次ぎ、学校敷地や市街地、道路など生活圏への接近事例や農業被害、捕獲が確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-09",
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
  datePublished: "2026-09-09",
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
      "title": "2026年9月8日 岩手県八幡平市 中学校校庭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1DdGJnZzZFLXUtT3RuZ2Q4QS1lZVpIcHJFeTg2TWRueTdZOHliaXhLNnZPWGJDNlJVNDlhNWhydHUzeVNRc0VwUjl6U1NLOExFUlhPLXNOYjlkajh3d1BF?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山形県村山市 葉山中学校の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOR1h0LXQwUHJlQ3hHSWF2enlpRmN6U1ZkQjBlWU5IQkpxdDZTemd5UEE3Tm16ZEZDTGNVX1paTVptcEdmOFBMZFpWY040UmJQZE5hdmcxQnY3UmxFLWo5dEY0TkVzbGVhVjdUZ3RyVDRUVjlBOV95bmI0MUk2ZGt5VXBIVnZfNjQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山形県村山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5RTGlTRGZucmluMi1LVWVGTE9Bdjl4Mm5WeG5wVVVFcjNnZ21BSHd0Ql82YlVFNWFXeFlBTW15d0VsLWNwRWU2Vzh6YVpDZk5xSGU2N3dZcDhfNGNOZmF3Uzg0WVZrcHYtWFl6YUt4MA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山形県天童市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQZGtieFZORlNubmtlSFhCUlZ4NUx4d2tudjdJODRHMnJFb0stNC1OMHU4ekRLVVNjcHAwQTRYSV95NEdIVFVfUVc2Zko4WlBxSFZ6d21wNDk1bkFCRDZ3RDJleFVGMjNsSEFta1Y2cE9tTXRzdTc5MkZpNEN5bUN0SVVNS2tBS2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 青森県鶴田町 北津軽郡鶴田町境８２−１の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 島根県益田市 本俣賀-石見横田駅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPcllXcXV5cU1EMkJkNld2OW5iUVhSTE9BRE96a0c5VlBFN1p4cks2RTVaYVM5dHNjMVFJVTh1MFpsZXFsWVl3SzNIYWctYWN1aVhweTZrU2lmRWQxSFAyLUEwVTV3bFNZQkhoblpQaDVyc2xmRUFtZGxUYUhHUFQ4eWEyOC1nUmlKdEItOTk1YTROSTI2emhid0hMcnFwcXdxMVk4MFlhUTNSMWo3WmhybmxEV0ZRTklGWEdpYkxSYmt0SzZDemdVY1hacDM3TVRMYzhlVkxpWHFTSUp6VnfSAY4BQVVfeXFMT1RQdzQzUXJBTWY4ZDdrOGFLdXp6MGp1b0FTdnoybklJa3FONERCNzFESllFT1VvV2xHdlEyNjRNdHhqZTdXaFAxVkp5UWZFRER1d3hhSVhubzA4VXZ1YXZNbHc3YUlXcHEzRElMUUY5bkRLQXhNb28tajNKMHhjSm1kenRsb1UtUU5QVHV2dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山口県岩国市 美和町生見の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 青森県鶴田町 鶴田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPY1VzY3JqWHhhMjhaeEZfb2E4N1owM0RQbVVUWDNNbVFfZGNJOTZCQjRFRDk0T04yQkpqNnF5MnhtWHB1UlVRYlBteTRFQ1l1STBtZkUyRTR3X093WXMyd1ZPaDBfa0NYekJVTUFoZE9zS2hNQ1FXM1c0bW9rWkdwRFZkTEZmcnhtZDdkRTFlNjV4cVdFQ0NOb1dJLW7SAaIBQVVfeXFMUDhlNDhPTmFXSzFnOUI3YXhsSi03YWZtSnRqckhuZkxxbHVoY2FORkczTFJnMzc3elZXTHlYNnA4M2hIcFpUYjk1aUdheHloR3ctY0E2MG1IX3JqNFpLLVRWcU1GZGNYbXhTV2ZURFdJQi1hRF8yTERnbi1vb0ljaWFodmJ6QkFsVGhOcEMxOFpwSmdsNEZjNU45UExUWFd4MGVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 青森県五所川原市 金山盛山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONFhEd2lMak9EX2VxWTVwRXNKdGxMekwwRWFaWlVOQmhJeGkzZXhwcjlhenV5OVNKbHc4Yzh6OEwwU1NEVmVqQ2xIXzN5NDBkU1A2VnRSWkY2UnI3WGZNeDFfY2NuWlhSRDV0bWlEOFpGM2tEb0V0RnZfWjFyek9WcEo1d0Q5MU1WNXhXaE14TGI3eElBanFrM2Q3cm12VU9KTnFpdWI5MGpaR1VSQmd5OXBsVGR4VzhKdE5oRGsydml0ZnQ0Wnl5UmpZLWtPUGJNX0hMb1hpb1NNYzk1SXpQNU1EdWVfUXJHN3BLQlNBVUVJZ9IBogFBVV95cUxNVUZobm9Sd21FSEVXZXRVTkR6QUFoMG8wd1c0TkxhQnYxT2RiN3BodmlDMVduMG8ycllpRWtGc1N4ZXplUndoQVExSi1QYnoyWHpOS2V6V242a2tFSUo3T2RDSUxGTmFjMjV4QVZETVUxeUFQVVg2OU1ONFJPSlNRcHdOa2dxQjIyR2NjYkVCQW9zN3pmbnBQRXp0NWgteWV5ZUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 青森県弘前市 貝沢沢辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNnlfZWhiYnRyZWt5VmYxVGhsZEpPai10ZFlWZ1dOZDhMUWtPbExPYTZmVlBVclAyMWljZXBVVGNyYzF1ZzdSdWczWk1PODdYcS1XYWlUZ0VlYmFPby1nM29TcVJpWjUtdmNOZUhEQ0QyR2owUmtyYkhkX3ZacmdfUlkzODlsak1HR3hMbHpmcnZxQ0RVazdJNXBhbHrSAaIBQVVfeXFMTjRNR2ZGdUp5ejBmX3VvREZuYTN0WUhSLVM0MXVkUU4zQkViMGVsZW5MT0JFQXNucmJqdlB0S1I2Y0FXNG1JOTVpQzNpcVVnTkdlWVZYNktiWVlvc1hjVWNwdjFaN1ViRFduR3ZyMXlXYm81X0cyWVRWdlhVS1JPOVB6WEdlTmZkbFNURmVMUUt4NzFralJ5ODZGRVE3STJsajFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 青森県三沢市 三沢下沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORjRsWmFSQkoyQTltdVBjemUwcmlQbWdkX2l3RnNBRHloUFpwdkREaTZkczdsaDZMcFVrRWdaakhOZHhiVVlrQWRRdC1wTVNzamF1WHZCckhOVjJfa2RDR1cwdGMtTU1rUko3RFNqTjRSUnhlbHdfMmsxTmhxSVpQRDJWTS1Jc0ZEWkhOUGlCWmliVXVNcldFV25HQl_SAaIBQVVfeXFMTVZyQUl2eWVSSFliYVNjd1RFalFRWndKanQ5bmFVN2dPSEhZdzdGZUNPdEJ5LWlXNEtPaHNmRV9iQWtzVEZKbmJ3c2Y4TWxUNS1UYXhTU2ltSm9FVFdxYlRCdktxTUZ6VG0tTWQ3UDVORDlLMmoxYWtvWmtGR2ZWU2xFOFlnV1hRUFJDMWRtLTQ0UlFXbklRSzFRWWpiQXhFUWp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福島県いわき市 小浜町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPaGFoUTNjMW1EQUFqVHVwZ0g0YnlkTFlqNmlnaS1YdE9YT1RiMmduX2RIMHNhaURwb3ItazhvVXFWdzJWMHpVcURmSGl1REZvTFZvbTRrbktpY0QxdU1ONDh6Z1BnM1ptTkNEcDBtVVdMV1pHSGhEMm9NVTVYNmw2N3EwVWlaUWxva3NDanZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福島県いわき市 小浜町西ノ作の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSUVKZDdaOU9CXzlfRnNZbjVwSExxTXQtNmZOaUJqRkpZS3hUVmI0MmdraFJZaUpWNkhRcG1DbWZ4Z25xcmFmczlNRVk1TVFQZnctYkJDeVdJaTYwOG1La0FCbDQ4c1NnS2NNVHdhclBFdUd6cl8zY3UxNlBZcjFSM2R4MFhNYjNCYklEajdZbjJDc2dkcmx4ZEJjS2LSAaIBQVVfeXFMUEVEVHRCWGtrYnEwU1JscVdWV0pXbTJ4N0U2TlFrSVJiRUVCWnZ6NWhKYXFsc3JpM3pLOThiUFl2b2x0cWpNeGVfWHpaQ3VKdElkT1JCZ3h0eXduM3pMRXRveUFoWERpM0dybnYxd0ZLdEZZZTJoa0Y0MGFpVldMWjFpWGQ4VjE0Q3paVjZDNWZvQWxQbmZycEpjQmJvSUNIN0t3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福島県いわき市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9idUJjNFRDWk1jcXBGSUpoRDNuMGtXUkFCMjJCSlNvOU9tc3c2SlF0cWpXY1NkajhmQkwxUzI2Z2FIU3B3Ui1VRl9YU25HdDhEZk9udUZGOFBlMm1lcnB4ak9qY2hqaFpDX0RBeVJHc3RBRDVXdVR0cDFGcjFmajg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福島県川俣町 秋山若林山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdkFxS2xLaVJ3cm1aV1RyaXNNUVdwT1h6RWFPYWlLdjRyV1AyV0diaUxSc3VGSTdDd2QxWjlVYWVxMVZNazN6SFZseW9NVlJ2UEFDdFJSUldLdi1IV3lmMXdBR0d5dlJTQjlOSXFsVHEwbGItSTlUV1hzYVVLR3Q3X2E4alJwTHQyODRuaFJzZUV5SHNGdGUwMkxmRW_SAaIBQVVfeXFMTWhwaS1fSzNCcG95QThnYlV1dXlwVG9nX1l6Vnk1ZHI5Q1k1RE12cVNsOWJ0UjQ4TUtqRDJuck5iZlg0dUI5aktlYjlvdDZzY2ZrT3RYTnFoMHhoZGh4UWtSSVVEbGFtU1l5NmhzakoxazBPOWdaTGFxbl9vMW1fZjVhLTdEM0pjRWhlLUdHcENQMzlmVXJzSmRKcm1EMWVUTW5R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福島県川俣町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9idUJjNFRDWk1jcXBGSUpoRDNuMGtXUkFCMjJCSlNvOU9tc3c2SlF0cWpXY1NkajhmQkwxUzI2Z2FIU3B3Ui1VRl9YU25HdDhEZk9udUZGOFBlMm1lcnB4ak9qY2hqaFpDX0RBeVJHc3RBRDVXdVR0cDFGcjFmajg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山形県村山市 戸沢地域の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 山形県河北町 谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFA5VEJaTHkxZFNyN3ltRlJKNFZSbWJQV0RsTUhvd2tFNmIxQ1BnWmxYVVAxZFUyZnh6RjlEWjFiYms5Z3FfZlNlbmtGLWV3OUFQWkdOM1JKZlhxaHNFSUVVUnVKcXg0TF9IT09vSGtQWQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 宮城県富谷市 日吉台1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ0Q2OVlCc0tyZkNyckNNaHVMYTJQOG9rejZxSld4TnBGSnlwWXk1WmZmdm8zb2pqZXJFTWlSUmI4NXVONGZLUzRGY0tFS0U5czYzYzB4ZHhWNkVJUXJpSUtIbndSZXNGRHZqVkV1cEMtZ0lYWHBvdGd2bUNUelJZVUxXVjZ2SVEzY3IwVlZGOTl2ZGg3UDZ0dGdfWjLSAaIBQVVfeXFMTlJVQzJhNGhmMFlFUk9LMDdOcDR5MW9lMkd2ZGgxaFJ2cVRjSjRsY1RXYUxlYmF0M1FNcXROSkRDb2RPNEE3S25nTzFZMW1wck14NWplZUFXVGszc3NERWd2ZFFua2FEZ3VicmdtMkthRUkyT3JIQWVuT2xRV0Z6TlI1d2l4UC15a2Y3T25GMmJqVVcyM2hEcmpaQWdCTlFKcE9n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 宮城県富谷市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 宮城県東松島市 矢本上館下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdEI2NVFTRjZFQ0VROFBfcHVLZmdSNWtGVVNlVTF6aTlRc3FSd3Z0Mnl5UnJWbFFZbmNSeVNoRTU0NXhPNlktb3dSRDVhUUNYbXNuVko3ZVlEc0h3RVdDTFhSeERCa2pxa0RqeGZDQi1ZWEkzQk1MUWdyWDk3a0pjTE5WMUh4YlRiS2FYdEpyVmdsRzdGZnExMzJFZHfSAaIBQVVfeXFMUFdsWHdYLUgtWkdZb2paV2tQcm9MYUNoZVpQZVRBYkNLUlNUV01lY0lwN0hOU1hJNzhKSkI5MVZDckg2WHlZdXdNLUZpWC1wNlBYc2pVVkhoOWJSNFhfa2NYazA5NnNuQzhDcTd0bXA0aUF0cHR2Ny15bzhXcUx5UnlEWEx3aGgtbDVTTzItWU5URDZJa280RkxwVEFWZkdGcjhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 宮城県東松島市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 宮城県仙台市青葉区の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 秋田県男鹿市 男鹿中滝川根田面の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQnRJVmgxYjNnQm5DOUxDOVp3QVlGUHJwcUN6WjhoV2VOTTM4YkVvQWxqcWcyREdtVUNfMk5RWVJ1SGpodXFUWF9sdXpEejBiaENUcndWMUhBZWJwSTF1Uk5CR1FTT3liaVpDT1RBdFJrQlpybUhhekpuRlJ5TFpnSElnbXFXNlZNcEhmZlJyUXlVMHhvaDVhaG9HYTLSAaIBQVVfeXFMTW5DZzNNV1JaZlZXZDd3MzhhYzFMU1JVTWRYMVEyWE1YMHhZVDN5RzFLSDc3akNfNHU4T2tpdlBRYlRIRldRd1ZNRHB6X1l2ZDN2ck5PVkNjUTNQemNyQWpFVTU5MmhJaE5pMUpSR29URjFNc1dHMjJiWkdYbXNKZkJPZGtGYWk5VlJ2bHlrNmJfdlhUMnA5S2dwUi1pU2owLWZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 秋田県仙北市 田沢湖生保内武蔵野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZDNaSHB1bjlzZTlFRVFDejZ0NG1YWldrMEk3OEdCa3JhOUk4UFd4OFFhUWs1WTQ5Y1hBWlNnSGpMeTJ4Nmd2T1hQMlFMUnc4cF9FcEtxcTNVSXg4Y0xxcTlacGdYbUpBYUZPR3RUTExCeTdiUGNNTmc1NU9XU2dnUVNJQ1JVNy16SGJCMV9KbURDdUZUZnUwaEdaM3EtU0hEQmtCNUxIclhfUXZseWk5NWRkcW03eWhjdTdseTk1b2VFSWI3Z0k0UWZGc2dJbFFqY1ZsenliOHVwMlllY1NFN2hPeTl6eXlyRzZXTGROakFnQdIBogFBVV95cUxPR0pZRXg0SUVfU1ZrWWNyVVdJZVcwalpWYUxlRnFNMUExeHFNd245UGRwUVU1THJwUURyTHd5c2dCeWIzeUZ1QjBKd1Zzc3ZMbHMtQUpUSGJIVnE5VXZvRUxSeGNLNFJNRnBPOUZGem1lSXU5M2FobmlaUERJN0t4emhFcS1QSkE1ZzBkRGxIMkFmcG9DSlFwYXE3X3QwMnQzVXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 秋田県三種町 鹿渡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPWmd2UWIxQVpNd3IwLURJY1JKT2Rfamg3ZFUzUHlmMXFiRXhmRG4tRHJtZU53enVtVVAtcThCRUFhR3VYdFZ5dXJvck00RU5FcFNPaDNVdXVDMTBOX0U2b0dzQlJ2MlF3ZDdRR1FyQ05Gdk9vQ1dVSjdiTWhRWE5Od1NwLXQ2dlAyTGJmTm42Q0FreVdMa0o5VHNLVGRrek9hcEFmSDl3bmVmTm54MTdlbmFaRG9Wd2JQU052aERrSllFbEdhMVI0UlNuNEFLbkt6WVFJcnppaDgzX3RkVE81cUlsWVJvaEdLZkIzUnNydjY3UdIBogFBVV95cUxPSWw2VXpQQ2NWaDFXOGhYNlg4blJVTkxDV2JKNGpjTGxLU3EzU2RrLWpYVFVmd21hMGp4aGVtRS1ycHZFaXpsYnJQVW9HRHRuS2txYm5ZMkR0c1VUWFFMVnVIek5kcjFPaHRZLXZOYS1vcVQ1NHVxbWRrbHhNTlc1MFBwN1Y1VDdCUGRDbjNKZDJoQ2NKbXZ5UmhUaUQ1b1dXNGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 秋田県秋田市 新屋町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE0xREJUZnJ4bXZsUXBKYmRPMWJRT296RVlDaEVpUmdFQVhMYVhDeGNNbHpjWXJjNF9WSmE2MnpGbmtlVWdRR1o5bmowMmdjNUs1SzRWT0VXdkpxbWpGeGgyMjRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 秋田県秋田市 河辺北野田高屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZFhqN2RtMDBxRHBRcHlQNzJtVTVRbVRwa0Q1eWg3UTE3aV9uMWQweTBaQVRBZTh5M2F2bUdSajVobkFXcE9SUTdPeUdabVBBZEM4MGc4cjJUUTFSZGl4Q3ZtaVByTUVBaVpOUk8tNEF0eEIxSVpEYWNPazNsbzdUV3ZEbEh6Mno3cWFCcXpNVHd3bVphOXdBZWhpZzlIal8yUTN4YUFlRHlRVmxuNWg40gGiAUFVX3lxTE9wTjZxbEsxZEdLMVdVRVZpSGlhNXNwNWhheDFmX2RaamV0NEp0amRVQ014UzdZbXhUN3pfakdwUkpjU2NLR1BCdGNRUzFtTWxsTnZJb0xud3NrakVSWDVYQjg4YkJkYzZ0VnBCOGNaVlEzS21mbTltcjVtc1ZQN0k1d3R2NWxwUjNINHNaVFhoY25aTGVCVFZfNHJMTnZYRkRmdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 北海道標津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9Ld3ZDTTd6QXNoNkNmZzlLdWh0Mnc1cWEyejhyejl4OEw0WlRUZHZYT0tRRy1DVDNSSDdUdy1wTnJPcjZjRGUyejJ0V0dvdXRzSFNKYldfNVlIVTJ0cFlYcGhqbjBBTU1VeHNGZ094RGhpU3diZG8yWnhCSWt4Vm8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 北海道標津町 古多糠の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQc3pVMGUzWHJIbDZqLXJobkVSVUlvYm5MeUhRb3pVQ3ZOa04wX0dYdC1Pc3pHTUZwTjZNdDFpa01nVHlBdnhBV0dYb2JsXzVxRE16U3QzZ0hJM3lOR1NndnlRX1J0bm9PRGpOdWxxNGEzalAxQ0pKNFRxaktfdFc0MEVjbkJwaXh4WnVfSFFoMTFDU3UtSDlqbmNwQ1dkc1ktQWt1NXBST3NEbzlWaVB2d21RcjE3bFBrbkpoUlFUNFZpTUotYjJEanlnaFBiUlVUOXg3VU9peFg4ZHA4NGxmTlJwb1NBREc5NWpZNkhvYXZuZ9IBogFBVV95cUxNeEpzNmN6bHJYS0l4c3lrM3ptc1Z5ZXhDd3BHY196c1hfdnotTmxzb0ZVY2hLRG1xUllyTlhMX3lBN0NNeE1vQjN5c0RsdFNWc2J4Yi1qSmxyUDBCRng0dDZiX2FfdUNoQXUzbERzWDY3WmE3c2JvMzdHTk4tRjZpRkhkbFFCNDROOTJkU2tnWlZzZDFrcmZMaWt4LWtrX2pGX0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 北海道天塩町 タツネウシの出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQN21GS2tiLWQ5Y2R3NUp0WXpqNVRTa2hFcFlhSjluRXdabnl4RjE0N0tJMjdTTlptUmpEejU4TEI2SmY4RE5ab1VpUi1LVGV0OHpaaXJPTUk5V3p1bzBvcHphLS01UExUMno1dFlxSVVNQWdRcEFwMGtCNzBoSVp3Tno4VS1WTTIwLUhwZGIyRGZQVW5pdHdlS3V1dVLSAaIBQVVfeXFMTmxwMVhFWEdsMVFNd3RJUm4yVVYyWVhIcFVtelotdU9EanplS25DRUlKYlMtUG13cHd2blRBM3RFdFRXNGZsaDZWaXJLM29tcUVJLTVxWnpLY3Roa2dHdGJ6SzFZWFZTTXpZVHc1d1FGQXZJWENia1dtSkY2dy1uVER3S08waXpILV9uVnFxMFBMSXRCdG5ueFdsWlUySnBtMFpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 北海道弟子屈町 国有林周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOXBHbG1RLU1ZSVU2LXFuQ0V6QlNmMkhHWlB2RjgzWHNRRjdGOGVJckxsY2k5MGFMZzZueFplYS1KMWFneTMwcFd0TGQ5dkVJMnhhTlFYZ0duaEYwVUJ2V3huX2NSQTVvUk5oWE5HN1E0cC02QVF1R0RCTHdVdkhLY3hTTE1ibjRmeTBSb2hIUy1aUk44YjVFdXY0ajbSAaIBQVVfeXFMTTNCdG5sdGNLMUF1X285ZFYzRXRhX1JES3VHYjJ0LW8yLTVodXBDTGpTVklDQmlOaFcyZTBNZWZ5QUpucW4yYUhLeWxFMXVuOXBlSTB1bDJ0R1dlUHVzd095MEREbzRXMElSYWxKTFU1Q29RSHctc0VuZGp6MzhDY1dsUVNDS2JpQVVhbnlzaTRCTGgwaDBZdGwwUGF2VlQ3MHpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 北海道足寄町 芽登の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQVUyaUlmdVBVQ3J2M1AycTd3OEV3RlIzY1NvS3JadWNEM1lUUGZ0WnkxTjRKa1lYSVZrQ1RrVnFLUHpMQ1B0QVZxRGdoSUpnVXJKSlQ4ekNqaTVJYnNQVkhpQjBOT3ptN2xGVV9JWVZIUDNhMmM0ZVAxd05OLWxYdldsRml5Ql9iNXdzcGxDVzdQRGNsTVdoNXJhNWPSAaIBQVVfeXFMTTdOSkx3dG9yXzR5UGp2aFBqMlIxN2M5eGlnYkxRV3NOTUdlUi1MdFctMXZNaGMtTlBCRHFuNGx4RThNUVBIZmdKVG1OdHczNUJIMXFlY1h4cjV3cTFWUTlTT2hWUFpYVk1xWi03M2lqNjhyY2phZjQ0LUUtcUN2b3RDbjJLRHNmZUttR3E3Qk8xdldTNWY4RUNpdlFwaDdmaXhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 群馬県渋川市 祖母島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcGx3X0xRWmZFSnQ5TG9VRldVSUpGb1FtZ3RFZlEzY2s3amYtTFdqQVg0TVc3eGFUbVNvbXdKWXNGbkd4NHpUTWk5Zi0xcHFZdDEtYm1wRkRBT0psd1BwSVVpVzZOV3NERTJqa0phMENfb2Y1Sm1sUXhoYUxLYU5NVGpOSWs5dS15U29LNjNES1RLSUlzdU00aDl1TkjSAaIBQVVfeXFMUDhfcDlSblVlYjR2T0piZ19jMG1vd0JOR3NkcGZCTzNXajhhXzhpUmpoem94TU5CLU1aU0FYUUlfUjMwLUs2eWduOHBGTGNZU3M5M1ptQ0JieS14ZWtSQ2FBOGwyTGxyVTFHV2phdFpTb3pEN3BEamptZDhQUDBMNU5za0NrNkcxX0s0QnVVNTNHZjhsazRmVzFBR01OcDFJa1dB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 群馬県渋川市 渋川市祖母島　金島大橋北50m付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 福井県若狭町 気山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPeVlMUzdlSlNsWGRsQUZDa0phaEJNYnBheTRUWGcxU2JGeWlma3lmTFVsTjVpblVuY2gtdUdUOGF6aDZzOWNSSW8wbzN6SVVhUTFSck1JWUptRnY2NDQ1VlFVM1gxZmlCeFBmbVZFazl5TGFERW5KSktvUi1EX0JhQ1huaFljUjJ0MHo4SzRQeTVGeVJYbEpLd2pRSmthWjVNd2Q5UDJCMGFWSnd4M1Jj0gGiAUFVX3lxTFBSY2d4UzEwd0V6QlpDWXMzOUtNeUVPMVZUckNzOUktamtlY09MRG14dmg0N204dERicWhJdGtuTHFUU2JLMlRsUlVDeERvX0RjVGFmclRpMUdMRW9jUk5WbXd3bHBGRFZLVXB6SGY1LVVmdm1MM2lPUFNsRHFjeEQwNmRVa2k4NTVEaTBhT2hUMkdBYXFVRXQ5bWFJenJJWG56Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福井県南越前町 大桐の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRGFtZEFWdnVsTDlWMDFUWm9qUGJNQk9Zd2pvdkhFb2g5WUFROHo3RGxFRzA4QmZoaEUxaE9tUjZXZC1MY3pERDhCRlQ2cXJrb3FnR1hyU0kxSUdMNEVob3A1VjVPLW5aNGxGUlJKVU0zVDYtRHFWdHRmT2RZQXZUMlF6OWw4eWJHVkRhTnB6NmI5blAxZEtXekpVRErSAaIBQVVfeXFMTTJiY2xzUXQ2NDh2MUVfajlqYWNiQnFsdVROcGpVU1Bla1pwRHRJZGQzNDRTOVhpQTA3TFlvX3lGZlVHVTIwWmlscHNEd0dSc2tsd1gzeDhBNXFpYzJwZzE5N2k5NVhxU2cxSExTMlBncklRSTA0emoybEFoT1pyemk0SW1yVFRNYzJYRE9uakVfZE5ic0xkdUFZN2xQRy0wb1N3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福井県小浜市 和多田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcVBqbXhsTzMyRHdtTkR6MkUzZ0hHeTBycTIxLVV0eDV5UVl3RFlhZ2MzWU4yaXo2dG8zYUJFdkRZeHU0UW9kV3BWLXNMN3RtcWw0dmd5ZHlQV3pUWXVlYm9mTTRwb2pPQ2xCbUtGQl95SnQzb1R5TExGRS1zZXdwWm1jRWwxanMwckd1N2xIVjJEUk5DX1NSVkg4d2rSAaIBQVVfeXFMUG5xcXdOaW12M2VGZk5rd2JqY0UxVi1CcXpWOVQ0X2Q3RVI0REFwankxWmpjRTJRak5iSUJVU29ESk5EWEFnWEtTMkNaNm1XZ0lDbzdkbjlCYWJMUjJiSGJFQ0hibHlrRkpPa3duSjlQa3UzaldGNUItcUh2YVZaWmpaNHhBbGpxRFloUU5maXQzajAycE1uN1Nad1dJWGE1Umtn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 福井県南越前町 大桐地係の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 福井県小浜市 和多田（塩瀬）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 長野県川上村 大深山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNU2R1aXVZcWZJRi1TZkpyT0RhWjdzd3RhM25RRzFYZktOR2VncFFLQ1BDbzN6T09jZ0RBQ1o5VWphMTN4Smo4Z1dBckJQLURWcTRRSDB0YlYxaDhWSGgwYjVvTXJuMVZXcGxSLWduNTVHNl9nMW42TVJLUkw4WW4tb3hvaWI2VkNnQ1lTV0Z3VjlnVUR5cjBBTFZPNHrSAaIBQVVfeXFMTVJqZVVRTVlMdFNmTU9YbG1fMEhvRGRldUwyNTloaGNOMVVXS2UwVFlHLTZEYTVIbm9TV0hVaDhOd2dJLVAzZFROZEQ1TFhhWU5sZm50UjQyUWxsa2t5bGlkUTBIUjNHSmhGaUItdk1lb3BvRFdKUnZjMmFTU3BOaldqWERzZnBMU3ZFZjFnLXpwZ01HeTRPUkozd1FoOURHbXFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 長野県飯田市 山本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQejU0X0dHX1NuMUdUYUJuWDFtU2daLUdzcmFYSG9FODJEVjFRV3M3ZHd5UnlLRGl4YlpsMTEyZW94VkRuczJXSUU5TDV0SWctZmNnMFVPVUZFLUdaT0N1QnlHMjJPUlFUc1NVNGQ1N0xVdFQwSENRalFZeWV6LTdBQTFYVGN4b3V1V0s2STdzS0JwaXFVbFRYOGIzWlXSAaIBQVVfeXFMTm90d3hUVG5Fb1pIOWpXZUFUS2EzOUczcE56ZmZwdlNTRlQ3Vk1tX056RWxqdmJjRnlFOXNialNReHl1ZnduMUhVN1poY1Q5WDRLdEZvdFduNENLZWQxOXcxRUQwSEhFdjIydzBqNlR1N2lpZjZnN1BJTzk2SEdSV0FYNkJDV19HNWd4OEItT0FROUpBVVNFOUdyMXpaRTNKaVJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 長野県安曇野市 穂高有明の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT2c1azNCNGNuV1k1amRoQkNTeWZNNWpLUnY3M01Lajl2NGpDbkZLTnMxVl9OR0UwUFNJcjY0ckwtd2RPM1JrVUZycUlodVJQVGFyc2F5azRmb3RFR3VIM05yeHZKU1N4NkhzTkRjbWEyNTlYMHNEblNqX3VvTE1Ib180cTNUSzdTNXppSzF3bS0tdUhJcU9valh6Y3PSAaIBQVVfeXFMUHVqd3ZtZmMybFJ5YXpqMWFnSWFyUlViTjVyZEJZdk9pRjN6b3EycS12WURVVzlQZU44eFM1Ylp5cjBPNkRHR2dUOFN6aHZiV1FSbzlyRG9GdTd4cFNYVVlfRDVwSkRCUHJxUXcwdVd4Sjc1SVA2dmNxdVk3TDFqcnFObTJobHB1bHUyem0yRHV2N3Jqa2Jhdm53Mk1WN2pCYUZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 長野県茅野市 宮川地区.道路上の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 新潟県関川村 桂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdnFRaG9JME9tUk5ONFFadk1zZ0NvRHo1enRldTR3UnIzaXVVN3hQOHZwRl9NSllCekZQLUFRdEU0Zm9tOWd6ZExVMkhwa1djY3JuZjRGYUh6LUlONEl1SFJwU08wYkU4YmxnUF9nQ0dycWRLejRMR25GQWpwQmtGa0lQLVBoZDdIU3hCanM2eFVRZ0NTTmx0UldXSUTSAaIBQVVfeXFMTU1ueU9jSGpYX2JxVGNKeGQzcnB0TkpOR0hidXB5UV9teUJ4TmZSbTNYWm9hU2Ziek9BSGVOdDJoZXotTUc3b2JUVVgxWjB2VWVTX01UbG0tX0RlOEllYkM4TEFGUGgyNEFzRnJBN1lwTmFWTXU2M3k3TE9ydDlYMk9jNVptaEVCVk1ZNEEyV3ZiS2NHWEpnWjBhbUJjVVJOMXNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 富山県立山町 日中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPSkxybUtBRUVWX3RMWnRLTGVseUFncXROMWVJcUd5ZEdKY0t1NHdValRFYUxLQnBoSWVqNWVFWFM1LTcweUhWQWFDN21PQ1JTWUhlS0JZYVF3aWpQc1dLRkJXbWk3STQwbExxZmhubWRBMFdsUWFnNWNfZThJVklqQWw1Z09CRC1oQXp3WHNwem5Kcy02Y3ZWeUQ2Nm5hOWQwM1RrajdZcWNHWGh0LURJanE2QVNRaU5aVUlwaG9XbFY2bEVZZlRMOER4bElrWG84dmZUWmNEWlZQdV9XdFIxV0ZFXzBBTGs2VHlqQ2tTSFViZ9IBogFBVV95cUxNNGFiakF6ZXZxSUZYWjNrV0t2X3FlU1RGemkwMDlpWm11djRHMGlwOThCTWxnSkt4d2xncXRNUmhqQU9oMDZubUtXWGF1c0libzZsVjVUUm5tYXZxYWNsaGRud0d1U0dLeDQ0TXktZHpTZ2htWXB1bWlOYTAxZzY4WU80dU5pNjYtcjRIdjJEU2FyeWRRVlpLNFp4NXgtUHl4dHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 石川県宝達志水町 子浦地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 岐阜県川辺町 上川辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbTdhamZaM0NZV2VIcC1XSXp2NW5yVzB2c2dub2VJTVhWd2gxamY0WFF6NTM2WldkOVFfQklUeHlCVFA2U0RkWklvV3d2RGR1NlhCYUg2NDlNcW1HcFBlSHhuTnExcXJvX281M3BsN2xTUnhpdG16Sk1jLXpja1ZibzVjTGNmTC1DWVRfOUhINjhYalI1OVBpWGMzaGXSAaIBQVVfeXFMTXp6czZVSU42NkhFN1hqSFVhYlBNSzZtMl9aUUxObVd2TnlGU2FON1FpOGlucFl0b0NhREppTmdUSy1McTdfVWFCVjNoZ2hDb0JKMDJzeGtlZXBaaFNNbV80YjBTNnB0WnYwTHhoMm8xbGhNVGxxWjYyWUlnMlh1MVhRR1JuZHVsZGF5c2FReHdWRk1pQzNhSkJJeW9Ucm1SOEdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 兵庫県小野市 桜台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQRzhlQjg0S2VMRGhVZUF0Q2ZpZmcxSUVzbVAzaC1LNEc3cFZoNUxWSkVOUTV2NUhKMzBOejRadzdadGFkX0MwMmZrV09VV19xTS1GTzA0c21UYThvcXptMlZmcW8xaWlzNHROT3lHMzZZeGFoZWhwUmJGUTNVU0NqVmJtV0RZMzlYSlcwMTBwMHpaWGNLWVA0ZWE1eEt6a2FBX2fSAaIBQVVfeXFMUEc4ZUI4NEtlTERoVWVBdENmaWZnMUlFc21QM2gtSzRHN3BWaDVMVkpFTlE1djVISjMwTno0Wnc3WnRhZF9DMDJma1dPVVdfcU0tRk8wNHNtVGE4b3F6bTJWZnFvMWlpczR0Tk95RzM2WXhhaGVocFJiRlEzVVNDalZibVdEWTM5WEpXMDEwcDB6WlhjS1lQNGVhNXhLemthQV9n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 兵庫県丹波市 青垣町東芦田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZEhnNGo5aUVsRGlEd2xtUDFnNldHbFpkZFN5dU5vY3c0ZExNd1o5a1JCdFdKZ0U2aU5NRnhmVFdqSWVuU0Zjb3RJMTQ2T24tZ1ZaaDBWcWdYUndITHRvem5RTDRNd1l4RlV4VzA2SjQwTGFMZTYyLXk4cGMzU21hVDFrNU9TNVdHWWZaNGRja1lMTXFqNGdSbDVsd0HSAaIBQVVfeXFMUFlKVmFYSGJWd0FLNkxySGUxMDl4STliT0hnODQ5aDJKWG9YOHF0c2t1Vjdjb1FLUXlTRmVyQk5IQjdCSWZ3NW0tcE1JbHJlaEQwMzMtQk5xTXYtSDFyeDNBLXBZdFg3VDhVVzlDMlU0ZkpLQ2lXdldjTk9IOE5KQ0dzNEl3OEdiTHNDQkxWNS13eGcwVmRjTDNSVkVIbzgwQlR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 兵庫県朝来市 和田山町市場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLXhCVHU0N2xXZ0hDOHlMM3BrcDVMeUg3Z3ZlY2VLemdTTUFpX3VZYTBnVnlfSmY3Z0lzY1dYMTdIUk45OUJsY2ozV055eVZIMFItakxNRVdIdlhhRkotXzhCU2xqSC1RdW91T0FkLW1ZQmNtUXVoZmw3MTJpLTdEeTZoNHA0N3BrRlZQQWpFbE9XTTliZFpSY1dQV07SAaIBQVVfeXFMTlRFUG1hLU02QkoxQldpVFRQYkFIa2V5ZHY0bTQzZkYxZFpOaWdBVmRBOGVSOE0tOWR6OWdyQUhuSlY0aDMzVUVtdzNpak0yMVp1Um5BaklzRUJYcHBMVXhRdThtaFNsampvLTBtMlNhRVRDWHhGT2tuWm1rbzdtbzFPWEVuaHBnLURpQktSQkJiSF92LWRIV21NcFJjMzNRcl9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 兵庫県新温泉町 境の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRGhwbjJjUnlld2dIbGtHVXNJZ3VZTmkzZ0lLOUJ6VHA1MEdHSnRzcnFJbFBkSzNqdXlGNzBNaUJESE1MbWFSTzJkN1RGa0h4YkFPRGpZdFpnT0p5TmlLVndwTWhfQXNXYnhmSmZNLVlYOFVGNi03NHFDZ090SXE1TWZTaVRQNV9Oc2MzRDhGZl9xaER0b2twTkZhVmvSAaIBQVVfeXFMUHdVT0o0QWotNGEzdURTUEwxUlVXMlB4TDNVbjU3SHdLRHFvVmI2X1FGWEUzd0hCck11UG9IbjNrZkNQdnYxRWVoQW5DMXl4bDlRb3VvSGp6eTA4UmVfSnhIakpXXzRNLVFaNEZISm1QSnNJRHNLVjRnbmc1SURqU1FfQ1lwOXJYbU5JMzh5QjF6eVNlN0MtWFBEcXQ3eHJSMU9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 京都府京田辺市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 島根県益田市 美都町山本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTW0wZWFKa0lxa1BFbkRZVFdqZ0dkOUNlSFc1OXRhd1RYcXZfUF90QzlNTmgzangybEgzcjFYVHY4R1NINnBjMEYtNWFSVzNpbkdYeEt3UUUzMENuUVQzQVFwMGdmSlVWR1ZvQXZRZHRDZkVZWTNZV3FmMTU2bVlwdHVPRFJhc0pzWG8yTXNfYlRTTVVGLU1ZaHpXUlPSAaIBQVVfeXFMTVRwMmpIcDJCNEt5dDJoVENIUklxdGFMWl9ocU1jTjU3eHN3UGdwSjBHWktXUDZHVWJtLXlwcjlvUTJwMWRLUUZGUllhMGhUQW9wLUdrNkZMXzA0YTg2M3N5OU9ZU3BLX2JCYnctTHVJLUN5dXJQODJBXzhhLWdLTW1OTTRRUFhrYjdfd21QekQ5SW9lUnNMYk9paDdzY0RhMnB3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 島根県益田市 久々茂町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVXBpR3ZoUUtLclF6MG44SkNyWVBJWURoVEcyeFo5aW54Wk5LempMX2FscUUwYXJqdERqeXBLRXhXaFdnY0tBX0hrazVUM1dwRkpuZTFIcW1SQjlOd2F0SzNIdGxqR29Lb0UzUUtmQlVzUnNmQXFhS2ZVenVWa180QWxyaXdiUEZuMDZVdTNkOVBLTHl2S1RQVXZna3jSAaIBQVVfeXFMUG50dFNpQ3I4Yk1XVWY3VzBEaGJhTS0zYXljWHB6Y01wUmRtaUZiTmlBa0JKMjQ1WXpPa1ZOUnlNRTY1eGtBN0NFV1pvQ2pNbFFPSTMxRk8wVGwycTBRYVBvRVR5ZlVoajF6WlhLR1hOb1lmbHhrVjFweGdwaFRWVURtU2NjVWFMMkJJelY0OXpIQk9ZTnd4anh6aVFtRTNueUtR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 島根県益田市 梅月町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUjN1VEUzXzRVV0RaSFpZdHRmQTdOX05sWXBPWEVaZFQ1S0sxaTltZTQ1TXJ4Q2xWeVJkY0lzZ0VPM0ozendRMmNrTGFiUlgwMFptdGNJaEpxbHBtOHdOQ3Z5VFhyLXl3eFdPNmtCb3JsY2ZYZjJOb2c2UHV6bFpuamh2VFc2bjZpUFhTX0NmWkZONldSZGdldWZfN0bSAaIBQVVfeXFMTzdCOTZUVVh2T2lwT0thQUdOWjhuRFVQRENheXpsMHZPOFhQWmh1SUROdm0zdjFaZEQ0US0zNklmYWNJWWx4WlV4UGhzNEZaLUc1cU0zQVF6OXhUaGtrZjdLbFZ4aF9RWUxucUQtNXphSUJ2MlBRdkVTTUhmYjNzeHEwLWtBa1JBY1hLUFR6ZmltQ2JRQVlLTmhuSjJpTmRIMlhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 島根県浜田市 三隅町三隅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPemdrUW9LSVM2bVhJMDUtQkhyWTBNd3QyaFZsT1ByNXRXRXNKVXktYWIxZXZ0WnBoX1hCbGpzczZzMTBrSk5vbmxYTFd5QnliQjVCMUlfV0lwVGhHWm5VWHJIODBCRnh2Mll4OGZkWnlDdmlITnVxZFJldE52R0ZGNEZSWWJJbHF6eHJZc2xSbzFud0wtTnR0WHhhcDnSAaIBQVVfeXFMT2VDY2ZhYmJaYzdDZUxYek5DeGdtVHExWTVfWVlKMm9FRFJmWDVZNmdqaC1neUd4M0ZXaVVpWi1CQWJvZTBsYTdUS0tMN2M2RG1kVkxMeHh2SWlKNlkwTGRtX1dPS3VRNTlEN3pIT245UGEzbmdiWXFFb1ZqSUxaeThGLUY5RnVjRmpvUnV2NjRvWm1tVG5OV1RHcEltQmpoMEdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山口県岩国市 柱野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYkhMQldITERZXzBfSW5wVUxxaGpkcUQyZDVHSUpUdzk3VHF6MUtzd3VmeUZEMXdTT3BTUXNseUdSVEhRLW9DMnFqamd6UENpRDdWWEhJSGZTWTNvcXVZT2dla3FERFdXUnJNZENzcDNFMTIyd25OdXhrQk1oVmVnekFRQldIRjN1X0c1cVp3enlRWTZVS293Y2NYWXPSAaIBQVVfeXFMTlRGTFp6ZHJMRkpKbnZqcU1HTGVyTTJfdXVrRjJLX3FYNnkxSlh3TXBBTzRZRWxlblNTeVhYeklDYlpaZm9iT0duS2E1ejVsLVJWSXdkWElUbWR2c1FzUHllNmdoc0hucmI1cjdJdEpYR0FocmhZUnREbkpSSVF6eXdwclk3dkYyYnpac2Y3OTI5ZUwyN3ZNY2YzbDhEX011MzV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山口県山口市 阿東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBtWHFOeHNGTFNmdWFFaWotQzBZSWpKNU00NWpIaEJ4YnBWY0JKaXktaldKRlBmbXBNSHlHZDJ2bWlnMUtFOGtWbEVfYThVVGEtLXE5ZXRKdkJWTTNLbmw2ZGZjbExaSGlGMGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月8日 山口県長門市 深川湯本の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月8日 鳥取県八頭郡八頭町 志谷の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":17},{"pref":"北海道","count":13},{"pref":"島根県","count":10},{"pref":"福島県","count":9},{"pref":"山形県","count":6},{"pref":"宮城県","count":6},{"pref":"福井県","count":6},{"pref":"秋田県","count":5},{"pref":"長野県","count":4},{"pref":"山口県","count":4},{"pref":"兵庫県","count":4},{"pref":"群馬県","count":2},{"pref":"富山県","count":1},{"pref":"石川県","count":1},{"pref":"鳥取県","count":1},{"pref":"京都府","count":1},{"pref":"岐阜県","count":1},{"pref":"新潟県","count":1},{"pref":"岩手県","count":1}];

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
        <span>対象期間: 2026年9月8日</span>
        <span>·</span>
        <span>公開: 2026-09-09</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={93}
        periodLabel={"2026年9月8日"}
      />

      <h2>主要事案の概要と動向</h2>
      <p>当日において人身被害の報告は確認されていないものの、人間の日常生活圏に極めて近接した空間での出没が複数記録されている。特に学校施設への侵入・接近事案として、岩手県八幡平市の中学校校庭における目撃（※1）や、山形県村山市の葉山中学校での目撃（※2）が発生した。さらに村山市の葉山中グラウンドにおける目撃も報じられている（※3）。児童生徒や教職員が活動する教育現場周辺への出没は、偶発的な遭遇による事故の危険性を高める事案である。</p>
      <p>また、市街地や幹線道路周辺への出没も顕著である。山形県天童市では市街地でクマが目撃され（※4）、青森県鶴田町境では12時15分に道の駅向かい側にあるガソリンスタンドを横切って国道339号線を横断しようとする個体が確認された（※5）。島根県益田市では駅間周辺での目撃があり（※6）、交通網や商業インフラが集中するエリアへの進出がみられる。加えて、山口県岩国市美和町生見ではドラム缶わなによる有害捕獲が1件実施されている（※7）。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地点・事案類型</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">17件</td><td className="px-3 py-2 text-xs">鶴田町、五所川原市、弘前市、三沢市</td><td className="px-3 py-2 text-xs">国道横断、市街・農地近接</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">13件</td><td className="px-3 py-2 text-xs">標津町、天塩町、弟子屈町、足寄町</td><td className="px-3 py-2 text-xs">道路横断、国有林周辺出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">10件</td><td className="px-3 py-2 text-xs">益田市、浜田市</td><td className="px-3 py-2 text-xs">駅間目撃、複数地区での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">いわき市、川俣町</td><td className="px-3 py-2 text-xs">小浜町周辺、山間部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">天童市、村山市、河北町</td><td className="px-3 py-2 text-xs">中学校敷地、市街地、河川遊泳</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">富谷市、東松島市、仙台市青葉区</td><td className="px-3 py-2 text-xs">住宅街・市街近接での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">若狭町、南越前町、小浜市</td><td className="px-3 py-2 text-xs">成獣・幼獣複数頭の目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">男鹿市、仙北市、三種町、秋田市</td><td className="px-3 py-2 text-xs">河川敷土手、集落出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">川上村、飯田市、安曇野市、茅野市</td><td className="px-3 py-2 text-xs">道路上出没、山間地目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">岩国市、山口市、長門市</td><td className="px-3 py-2 text-xs">有害捕獲、親子グマ目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没状況の詳細</h2>
      <h3>東北地域</h3>
      <p>東北地方では計43件に及ぶ出没が確認されており、全国の中でも極めて高密度な発生状況を示している。最多件数を記録した青森県（17件）では、鶴田町境での国道横断事案（※5）のほか、鶴田町鶴田（※8）、五所川原市金山盛山（※9）、弘前市貝沢沢辺（※10）、三沢市三沢下沢（※11）など、津軽地方から三八上北地方にかけて広域で出没が確認された。</p>
      <p>福島県（9件）では、いわき市小浜町（※12）、同町西ノ作（※13）、いわき市内各所（※14）のほか、川俣町秋山若林山（※15）や川俣町内（※16）での目撃・出没の可能性が記録されている。山形県（6件）では、天童市市街地（※4）、村山市葉山中学校（※2）や戸沢地域（※17）のほか、河北町谷地で最上川を泳ぐクマが目撃されたと報じられている（※18）。宮城県（6件）では、富谷市日吉台1丁目（※19）や富谷市内（※20）、東松島市矢本上館下（※21）および東松島市内（※22）、仙台市青葉区（※23）で記録された。秋田県（5件）では、男鹿市男鹿中滝川根田面（※24）、仙北市田沢湖生保内武蔵野（※25）、三種町鹿渡（※26）に加え、秋田市新屋町の河川敷土手（※27）や同市河辺北野田高屋（※28）での出没がみられる。岩手県でも八幡平市の中学校校庭への出没が記録されている（※1）。</p>
      <h3>北海道地域</h3>
      <p>北海道では計13件の出没が記録されている。標津町では道路を横断する個体が報じられたほか（※29）、同町古多糠での出没が確認された（※30）。また、天塩町タツネウシ（※31）、弟子屈町国有林周辺（※32）、足寄町芽登（※33）など、道北・道東の山林隣接地域や幹線道路網周辺での出没が継続している。</p>
      <h3>関東・中部地域</h3>
      <p>関東地域では群馬県渋川市祖母島において出没が記録されており（※34）、同地金島大橋北50メートル付近では山林に入る子熊を通行者が目撃した事例が報告されている（※35）。</p>
      <p>中部地域では、福井県（6件）において若狭町気山（※36）、南越前町大桐（※37）、小浜市和多田（※38）での出没が記録された。福井県の詳細情報として、南越前町大桐地係では17時50分に成獣1頭と幼獣2頭が（※39）、小浜市和多田（塩瀬）では18時10分に成獣1頭が目撃されている（※40）。長野県（4件）では、川上村大深山（※41）、飯田市山本（※42）、安曇野市穂高有明（※43）、茅野市宮川地区の道路上（※44）で事案が発生した。新潟県関川村桂（※45）、富山県立山町日中での痕跡確認（※46）、石川県宝達志水町子浦地内（※47）、岐阜県川辺町上川辺（※48）でも出没が報告されている。</p>
      <h3>近畿・中国地域</h3>
      <p>近畿地域では兵庫県において、小野市桜台での出没の可能性（※49）、丹波市青垣町東芦田での痕跡確認（※50）、朝来市和田山町市場（※51）、新温泉町境（※52）での目撃が相次いだ。京都府京田辺市では近隣市での出没情報が共有されている（※53）。なお、四国および九州地域における事案の記録はない。</p>
      <p>中国地域では島根県（10件）が最多であり、益田市本俣賀と石見横田駅の駅間（※6）、同市美都町山本（※54）、久々茂町（※55）、梅月町（※56）、浜田市三隅町三隅（※57）など、特定自治体周辺に集中している。山口県（4件）では岩国市柱野での出没（※58）や同市美和町生見でのドラム缶わなによる捕獲（※7）のほか、山口市阿東の山中でクマが目撃されたと報じられている（※59）。長門市深川湯本では散歩中に親子グマが目撃された（※60）。鳥取県八頭郡八頭町志谷では、梨の食害および糞が確認されており、農作物被害の発生が記録されている（※61）。</p>
      <h2>リスク評価と分析</h2>
      <p>本日のデータ分析に基づき、以下の3点からリスク評価を総括する。</p>
      <ul>
        <li>季節要因と行動特性: 9月上旬の時期特性として、日中から夕方にかけての活動が活発化している。福井県南越前町における成獣1頭・幼獣2頭の連れ立ち（※39）や、山口県長門市での散歩中における親子グマ目撃（※60）、群馬県渋川市での子熊単独の目撃（※35）など、母子グマや幼獣の行動圏拡大がうかがえる。</li>
        <li>餌資源と農業被害: 鳥取県八頭町において梨の食害および糞が確認された事案（※61）に示されるように、収穫期を迎えた果樹園への誘引が実証されている。山間部から集落近郊の結実した果樹や未収穫作物は、クマの誘引源として高いリスク要因となっている。</li>
        <li>人口圏・生活インフラへの接近度: 学校敷地（八幡平市（※1）、村山市（※2・3））、市街地（天童市（※4））、幹線道路やガソリンスタンド周辺（鶴田町（※5）、茅野市（※44））、鉄道駅間（益田市（※6））、河川敷土手（秋田市（※27））など、人間の生活圏・活動動線と重複するエリアでの出没が顕著である。人身被害は発生していないものの、日常生活における不意の遭遇リスクが極めて高い水準にある。</li>
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
          <dd>2026年9月8日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-09</dd>
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
