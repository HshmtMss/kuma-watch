// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月3日 / mode: daily-report / 生成日: 2026-06-04
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-03-daily-report";
const TITLE = "2026年6月3日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月3日、国内で少なくとも37件のクマ出没が報告され、特に島根県（7件）と新潟県（6件）で多発した。人身被害は確認されなかったが、仙台市や東京都青梅市など都市部での目撃が2件あり、人とクマの生活圏の重複が顕著となっている。本レポートでは、当日の出没状況を地域別に分析し、リスク評価を行う。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-04",
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
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
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
      "title": "群馬県渋川市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOWJXOU1RVUx5TjVJWW5IUUVRQWNmNy1OTVFiMjR6QjYtSHdIT0JTbVNlUGIzSHNGYldBRlA3R0cxUDN6eDFxSkFZUHBvSXR0aWRESWl5enJLWlFtVjZaM19qeFk1R0xmeE8tMjgzNVJMbWh1Wl8tME4wbDBMSTlGc0RYX0kxN2VqRHdvVHhsMUZoRlY5SFVzSloxU0fSAaIBQVVfeXFMTU5YdGdZOFBRSEthb2RUbUdVOGJfOTc5NjlFU2Z6TUxFdUlIeUp3THZ0aF8wb1dKMXg0dmRWbkJlUmd3R2NlM2JpdzdTQWxSUENxckxEdC0yczBscU1SSHVnbXpLU1NQSFBLdWwwcXFiN0RxZEhYZHRXaEkybmxVVWk4dHZUZGdxU2NMdlFfVHRTdVhHNkdia2dRVXgxcHRTNUN3?oc=5",
      "site": "news"
    },
    {
      "title": "島根県益田市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQd0N1VTYtV0o0TGNIa2wwc01hVUFuLXBoMEd2OFlUNWZuaVN6SUFuNG8xdHh4aEh6dDI2NkxHalJqWXNicmYzcERTdk1rMkV6WWplTGttUDNBeFdnek1xNXRxQ3pIeUFwdUl0azdQRXpSR3hQRnlTYmJPX1RNb2Z1cFdMZjNsRHZoQ3BmYm80eVRtNnYxci14XzRRVm1veWt0ZFotaHRpZEF6V0JsVTRvU3pOc3k0Y1pQY09Vb3A4SzdFbTRJeXhNeWkzOGFCUVNYS2xBcENfb0w5X0ZGM1dHUlU1RUlDV0VUcU1UbFlUb3JVd9IBogFBVV95cUxNbUFnV1JzLUNrV0dnb1VNeWh1XzYxUGJzb1lvWVRvT3NYUkJnWHRnVkhvUWlqaEFFT2VsMkRtejVwRFRHWFBqQlBSN0dncHpSeU9CaFVLZWlZZTdqbnFMTzF1V3hNWjM3Y1BOMUdwQkV5SmQwTFBqT3FxRG0wQTc4VWpmd0NVM21TTXBCYjNVQ3h0b05CT0RIR3JidjZQM091QXc?oc=5",
      "site": "news"
    },
    {
      "title": "島根県浜田市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeE82LV9QQ3VBS3lYWEk0QUlwWk1uOGxPaXlXVXhVYUFBemczMGhZdElTS0E1Sk1VMFpERnZMMHdobWZTMDFrY1VveHEzWExiZWRRaG5lOEJPeHo3Tnp2dXBhc2JzUFQxUkpPcFE2a3BwS0FLdTQza0xkOGZNTzVPcC02OUc1c0VVZk9kNUx3a21Ocm0wd1F2ZmdhU0nSAaIBQVVfeXFMTlNTZkM1VVA1NG4zWTZLWVVKXy1GVmJCMmFTOEN1MlNyTHBQdU9xclZpS0E5a0VwNXE3cUFQUFcxWDVQZmFJdzBXRHJ0OVJjc0ZuLVNjUjNJWjdfNmNmemlLOUV0d2VWdjBrRGdRSE5xOVlxUTk3QmpYZk1sd1k3dG0yNDhqXzJSQ0FIRktqdTNKeUxSUVlmbEdYd0pzUU04NHRB?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県市川町でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWmhSOHFCbkVXZVJ2TGZ0Z0FkMHpBT2p1a3l0X2wtY01TVWlqaEw3dDlrUl9pcmVSTTJESlFIZk12SVJWd09wQ280dXJac05McHRzRzdUbFV5YWV1RUtwdld6bU9UWk1FWEZ4WnNEZ3Bxc0kxM29NQjhsNFprUDhtNkhkRGRkOTI1ZTBRaGhfZ0gtVWtTSnJhby1ULXTSAaIBQVVfeXFMUG5WT3JmQm5wNzlSOThvWlpkUVFHR2RPVGNnQzNiYXNPeklfY2h6OURNN2VHMVVIamlUTmplcEl2RHdPSE9CRnpkNUZ3enVkT3VtdTBoVGtBdzllQ1h2MGc3eC1waWF2UnNrZjNFcEZuM2lVZ080S3JuXzBiZVdNbV9sT1BMc3NxLU9MTktmRXdidGhicVJUOU5xWGZrZnp6M1dB?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県加東市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRFV1aVdCTkp5UFJfUFFMRHBUTzhMUWJSR0NVRnRIM2lGVWlaWmo2clhrTmhxa0NJWDMxZ2FfM2JEbUdIVExqS1ZmWDg4bHBzZnpTY2JqVlpwQnlZYXZYOGZ0QVRHeGpBQmRNVlR4UUlIcS0yNi1EOXpuT1BNbEZ4RXU1U3h0ZExkaHNIc24zZGstdUZJMVYtVjE4dTLSAaIBQVVfeXFMTVJGZFhHN25XbWJmTVQ2WVUwUUZIdmlCRzJkcFhjOGRCQk1laFJka05YVF8zaWFpV0k4ZDNtczVIOTlyNlE2bDJ0LTBTbXNCSmlEQWYzNTlyLWRmVHYtdWpMbFRTX0RyMkhEV2RoRmEwamY4aEctUHc2WHltQVQtaUNXbV9oa0VHQldBS2NQOW01WnNRZTZveUpyaEF0Tl9ST0Zn?oc=5",
      "site": "news"
    },
    {
      "title": "京都府綾部市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcFVXd0ZzVEowZFhBaFEyYzBrZUd1MC10TW5OdHlTNHlDMUVnUDlEUWJFRE9yM3h5YlZDOGpjcXZUZ1MtSDhkXzRITDJGWUtybFBwREFqT0NlSlY5WGVpcXVGVHdXYjA2SmxpVEJfY01rek1TWUplT05DVnBqYWF5N1Y3NzlBS2lma0Q5R0dqQVVBdndEUHNuc3dVVFfSAaIBQVVfeXFMT3NBdURYSXl5X2hYMnBHRVgxSW03Rld3dXpzRXJBM1FWRFZ3YXl6Zjl4UmNYTU1tRFI0QURLQWxtRkVGSmF2VmVOaGVTY0hPNEgxSDBKYnBGdVR3TlVnS21FaXREX21PbnV5bDl0cmZkaURmdVRBSVlMd3lMT0V5eElZbGVhcVNmOVZLX0VVd0l4eXhZQWt5c3hxZzNUSU1DYVJR?oc=5",
      "site": "news"
    },
    {
      "title": "北海道千歳市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPNUhFbFljWm9LdHI5cmg3bV9nOTlwSmxqU0c3azNWcDY5YUYtRDBQeFY2VDVGNG1Vb0RXQ3RHVzBOZWhVc2phYWlXSGxwSjVySTJESmJYbUsyVlNVR3pEdEZCLXBJOU5KTEI4eHM4SVktQld2OUxyU0REeEpZNGQ1ZnZ6aUhFU2RzUGNvVUt1MEQyalNrZW9qck1zd1AxUXNxclpjaWtFZUlYVjl1VTYyM0xPYllaUmRJLWg2bndsTHk4Y0l2TTNWRXVIdHFqX2VKSHpMWFNlQi1HQjlfd1A0am9UcEdLY0lrSDE5SlBGSWtPUdIBogFBVV95cUxPU1BJRnY2R2NoR3FVTlBsTk9ZQmg3MmlCOXRKWEttNEtLcmtkR0cyVXAxc09iM2d5NDdIenFsSVNrd3B5Z29Hc29ZLWRaVnRxX3dscm50ZUtPa3JwTXllNjRRcFVGTTN3YUc3dDFFTTJ5N0V4eFRpSEw3NVY0Q0JRWV9GOGdaZWs1R3cyald1VUQ2d0VKM3VyWm03ZVVnZk45QkE?oc=5",
      "site": "news"
    },
    {
      "title": "北海道室蘭市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxORlRodkdnRnAtVlkyLTc3R2ZNQVdnZFppN0hsQmV5TGE4ZmRUbExyNzRvRERnMDFYVmVGekxPR1U0dVFuUGMtdFhZbG9GRlJPVUpWVExlemV5d196OElkSGNJeTBaZTR2MnVBRWF2dUJjNVBtSUV6M2hrZ1BzWGRtbkI1bGd1Z1pJTGNLZkxNaV9iTFQtcmxmcGZPZ3NiejcwY0pOMUZLQ0RoeXRQTUlrYW5BVGZBVmhpcW95YjM4OWg4UjRrdEFoZjk3NWwyUmN4d3FPa0dUaFdlSDdXN1pHcHlvUWJkdUF5UUlsOVZxRHhvUdIBogFBVV95cUxOWjFRdEo2dG5LOGhGcGw2LUJITnQ1VEctb0s4X0hMWmdmbHdILWZaVUV4SWJ0NzItR3BjSmpsaU1DcjdDaWNCczdYSkJmblR0bmd0MktUVXZHWF9oTkdCU2hJcm9EUjVVNUdYT0g2M2oyRnkwS2ExeTZGZ2dGLVUzTFlfbWwyX0gxWEdoM2tvREVCbHRyQUlteUdKd2NSa3pscFE?oc=5",
      "site": "news"
    },
    {
      "title": "福島県福島市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMHZkd05QUGRIcjJadmFmNXhVRlNsRHg5LXRTTlVlM3J1ckZLYlFRbnpMSWpNV2tPUWljckZaTV9IS3RYMmN3SVNFMmV1NlhiT3huZlJYbW9zLVlXVlVILXVCcWRMNHEtRVlQV1dfYTM0Q2tGekZaUWFHZGtGbk1teFYzR1pzYkMwMU9tWm9aRmxzSVJZUjdMVEpXaTXSAaIBQVVfeXFMUFZfVlZtODE5QTBvVXA0WUFPZUVYY2V0NEVtNm1ES3dwc0xLVUhSOEdvTlRIRU13VDdPVXI0ZEd5bnlfYnQxYUx5VUNlejhjSXFWZGVjX1R1RGxISVBTVGh1d2UxTTdIZ0Z6UV9qNHM1NXp4UHNkYXpDcDgtZHdROGdnS2NhMGEwMmxRRklWQmlYQ0w1VXJCU2dfY0VLejNTYXRR?oc=5",
      "site": "news"
    },
    {
      "title": "福島県会津若松市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT3ZWMUlkWVRtLVZnWjFzODlGTXNmYnJpRFM0ZmRMdVo3bC1EVS0tUml6Uk04OEs3STlERUxTZzlFRlh6TWlzVkp3dnc4RUpKN0hFUUc2eWNZUEdZal9QQXZRQk95UjVQaUxrNHZoV3BGbGRkczNHSHRoWEtpSXdEMVRlN29Fd3liNUZINWhQcURxY21iTURJLVdnMjHSAaIBQVVfeXFMT1NyUzlkUmtsVm1IWVFFQjdPOERYVHJnaGFqRTM3dElINVlMUW45QlJTRWdIXzY1SU9JVDlVWGJpX0gxblNiQzFFQkJRZUJKR3BRUnhxMkQzeXg0M19NbldGb2tzdlFpdERGc0x5bnpOOWFGYlB2ZUJxX2s3T3hOMnhCcDZieHBieWdfWTNJQnA0UU0xXy0yS0Zxc2dzWUJBb2pn?oc=5",
      "site": "news"
    },
    {
      "title": "東京都青梅市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxON1RRTXZoRC1SWnZsVzVLTU5HQnpkc3A4Zk9fdEVOV29PVEtGb3lLUFRNczRMTUZpaENuZW81cXFlN2hFcEQ3QmQ5Yk5TWUt1RF9xRWlGUGM3ZXJIUUh3MmdIZ1RkbEpuRTdwc1lITEhJODlTSV9EU3Zvc2Fhb3VGcUtSVm5TUFdLczE5eDRwX0ZZLURsNnZXX3hPakTSAaIBQVVfeXFMT1Y0UVNfYnFBYnBVT19RN0hKYjdoSENUb3JxTUJ5dDkwUG5HY2NHbDlkQmVuUlFBcjRUUmlJMUJVZ1NmbFFXZ1JVLUtjbjJsX3pxaFRzN3hFM1BGczE0VW40LXhPeEVMU3FHVjFaa244SXk0MjlCWkEyZXhBSDQ4VGNwM3lMc1FwZm1RWl9vUFp2MnEya2JmNmNsX0hVbVZucjZ3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObzlNNHFSMnZPOC1wWll6eXU1RFYwTW9YOHJkTTk2MW1GOEFEcm5jYlY5WHNNLVZzY0V0M2xTUFdiZllpTTFNNlVUSFZWZ2hNVUtpdzExdEpvdnM4Tzhic3JXRVFzOTVySGF4U3UxLW80eGkzOU0wWlhjVS1mMk9iV1pDWGE2WmtQTWY5M0xjdC1MUmRXbnpQWk9Vc0TSAaIBQVVfeXFMUGFkRENNVFFqQ25vaEVScVlHUkJxdVFVRzllLXBmdFhEWlFnNUt2NTB0bVF6R3BvYXlNZ3M5MEJQUFZpNkRpVEJESDhhTlIwUFNkWm5qN0t3TEdyOGFNQktkdWJFbHV1NEhmQVVWb0pVV0k3OTBSS2N0Q1IwM3ptYkRTbVBxU0VxV2tOMF9mTzlyUmdTekZ6SVQyV2NkV3VJR1VB?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNXFhaXFicmtCZFh0THRCQ1AwbFZGWHR0ZXlOX2hQTEd6eUlreTNyT0JlNHFSalkxQ1REWjZUTmdDWE9hWWlSMV9Vb3FQWWlOSFlYZnUtVE1uTjdISktQNHpjajNDRFdPdDNRQXNMWE1OOTdEWFp0Z3N4N1kyTnpmV2xnbW94YS16VDlyMEo2QkNKaGhEdDhhckozdm_SAaIBQVVfeXFMUDBPaUVxckUySzF4TVJWaVF1TTZydE5wUFB4UEpTRklxM2xIQTFXLVpaZ0pMSUJscExSVWhORlJqUjZiYTNnRHJCUTAtUnBBb2xyVnFGS1k0WlJwZTVUdkZYUmJ6SWtOMVVsMEs3d1dQTzRBTkFPWm9XYW9ISHZXZlVfNzZvNnRqUzFCN2ZHd2gwY09pM3VmSXh0TmpUbHdRUkFB?oc=5",
      "site": "news"
    },
    {
      "title": "長野県辰野町でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb2VaNUEyN2NqOVNQT3BBbEMtTkdWODIxRklsZmFHZXd0ZmNUN2JHMjJLdTNseWstczl2c0UxNzVjckF4RXFnNm40RGhpeE9kcjJNZFNPaEI5dFhXeXlFQ0V2YlNwQndmNG1OeDA1S1J0aGdqMUFVcng4Wjc2VWxZWC1feEl3Q0lCcGZVZWdWUFF5LWYybkNUbk94TzjSAaIBQVVfeXFMUEU3LUQwWk5tSGtZLTF3SFNHNExUUkJ3UHk2LVZKREszeXJnU2JCOEJWbXdiNVZwZlhrT0hBS19aYWdydEt0YWhmNUQ0d0pzTW0tRVc1RFVFWWFTMzc4N2lOaC1XYjBQNFBZR010Z0Fna2JpNHVkbUV4c2xtc0FIZ3dDZ2VjLXVrUDEzSFhITHlIRFdoSXVhdDgzeGstQzJjZF9n?oc=5",
      "site": "news"
    },
    {
      "title": "長野県飯綱町でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOYnl2UXU0dU9IVkMyY09KSVFhZXZhQjRnZ0g3RU1rTFBMaU5iR0V0cEk5dVdrWmo5Vkh5RUo5RFNmMU9jNVRCVEdUSENLaXVsVnEtWDZUaWJZdFpBaExucGwxdE0xSEZ1bERsOUhvNTVzOTlhV3RCRnNuNmowOXFoWWxGeGNCRWZpVy1VckRINzZTV2pYbUYzRkFLLWFVeVJTeXhvdjR2d0hHa3JWZmFhNWlFak5Bb1oxYThRdlJ4bEprd2NXYVdoUVRqOHZmemtwSDJQWEt2cExyYk5MRG5VeW9uaU84RWV3Q2sxQml5cnVPUdIBogFBVV95cUxNUmRmMXFKQjBRaVBveUQ1emllYVk0M182ZEphRjNYZHNvcU9ZcER4VktYWTBWUjBDeTRvLTllVlo5clVDeWg1NmlpR3BWSjAwckFTVEREZldtNTFYSzdMMGp1NlNKdjFQRmVsYlAtZGVuWXJENHZXTU5xQV9mVlBCYXpRaFRfUDRyTUtkWFhoUHlxRTNjbG1XWjhZajZtWWswSnc?oc=5",
      "site": "news"
    },
    {
      "title": "長野県飯山市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWkViNDJXT0tLemtUZXNmTTlBd0ctS1VYcm4wVVNFT3hiQkUyODdSVzRXSUJ3cjVRdjZyell3b1NzN0dadTZpdllId2pDV1lXNVdWXy01ZnNJTWwwa1dDd0Z0M00zR2F4MzRudjRRWmY2a3lGbHRZYnhjODA3d0x2YTdVMjZrMDR5SVRSMnBONFNjWGMzQ0hHakxEYXpWS1JBTFJBSmJCamRBT1NxZGc0QW1DZXdDZEJPcGNRQUd2Q1RXVV8tcWxBSzI4b0RZX3ZPRGV3X3dXbHc2b3oyWEdENWFMRXhQY2pYQ0FnSm1xSWxNQdIBogFBVV95cUxPNkFEMXhEUUNEN3VNcTJzcjBZd1BmNGVhbkY3a0dZTzVtV3lRNHZqSTlhN2R5TjZoakFUbDdwb1Z3a0hid0hPNngxbDhIRnB3NGU0T1NpZVM2NGZSVmRsRHM3RmxrLUJEZC1BaXNObEEyRURtYl9vdUtfcktxVTViWmJWUzNPclQ2STBpcTh5MFJfcUZHelRobXFXZWdmR2dvbUE?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県仙台市でのクマ出没報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOYnZnMnlnM2FlTTNaWVNzZTNfWmFpbkowS0tyQVhyR3dzcjlxN3o5WWVoRDltM29oX05MLTRWZ3ZiT3otemc2dEpTUUFJdVk0YlBHR0VxejRyZFpkOUF1TTVvUEdzMFRRSElnRUlJb2ZUb1dlUWFLME1fSUZyWFBMZHRIMVFpUGRWOTFDSERsbTdDXzdiQVEyQ1lpcWdpaW5Jc3NzU1NuVEtfVHUwR3RoRGlyQW9GcWlqbmxlTWcyWmZFeUdwdGt5Vnkzd05DS0o3YjZwMW81LW9vWWRkRVkteVd4Z1NveUdUSEJtT0RvQUotZ9IBogFBVV95cUxOVmU3Nmx2X1dyd3YtOXRvMVhLRXZURnhveEJITHFGbXFEX3VkR21BNXlyZTltTTllN0xLNDIyc3hvN19zaGltR3ZPakFJcFhCWWE3TkdKdThFSnNRUHdneWRwdTFHb2lpa3RmWFJYWnpRb2ZyVnNtZnROcmZzTm5oWnR6MWZGd2taQWZVcHJSekVsZ0pmY2hyNjg1dl9YZmlRakE?oc=5",
      "site": "news"
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
        <span>対象期間: 2026年6月3日</span>
        <span>·</span>
        <span>公開: 2026-06-04</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":65},{"pref":"福島県","count":15},{"pref":"北海道","count":14},{"pref":"新潟県","count":6},{"pref":"島根県","count":6},{"pref":"群馬県","count":4},{"pref":"岩手県","count":3},{"pref":"山口県","count":2},{"pref":"石川県","count":2},{"pref":"富山県","count":2},{"pref":"埼玉県","count":1},{"pref":"岡山県","count":1},{"pref":"青森県","count":1}]}
        total={122}
        periodLabel={"2026年6月3日"}
      />

      <p>2026年6月3日、KumaWatchが収集したデータによると、国内におけるクマの出没報告は総計37件に上った。情報源の内訳は、報道由来のものが17件と最も多く、次いで新潟県（6件）、島根県（5件）など各自治体からの情報が続く。当日は人身被害や、対応としての捕獲・銃猟といった深刻な事案は報告されなかった。しかし、都市部やその周辺での目撃が2件確認されており、潜在的なリスクは依然として高い状態にある。本稿では、これらのデータを基に、当日の出没傾向を分析する。</p>
      <h2>主要事案の概観</h2>
      <p>当日は人身への直接的な被害は報告されなかったものの、人間の生活圏への接近が強く懸念される事案が複数確認された。「都市部キーワード」に合致した2件は、宮城県仙台市泉区住吉台東3丁目（※17）と東京都青梅市千ケ瀬4丁目（※11）での目撃である。これらは人口が集中する都市部の住宅地に隣接するエリアであり、クマが都市環境に適応しつつある、あるいは何らかの要因で誘引されている可能性を示唆する。幸いにも直接の遭遇には至らなかったが、市民の安全確保の観点から、これらの地域では特に警戒が必要である。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では千歳市と室蘭市でそれぞれ1件の出没が報告された（※7, ※8）。東北地方では、岩手県で3件、秋田県と福島県で各2件、宮城県で1件が確認された。特に岩手県盛岡市では、成獣1頭のほか、親子グマ3頭、幼獣1頭と、繁殖期に関連する多様な個体の目撃が報告されている。秋田県秋田市御所野下堤3丁目（※12）の事例は市街地に近いエリアであり、ここでも都市部への接近が見られる。福島県では福島市と会津若松市で報告があり（※9, ※10）、広範囲でクマの活動が確認された。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県で4件、東京都で1件の出没があった。群馬県では渋川市と高崎市の山間部において、県道沿いやバス停付近での目撃が報告されている。これは、クマが人間の交通網を横断、あるいはその周辺を行動圏としていることを示すものである（※1, ※20, ※21）。東京都青梅市の事例は、首都圏においても山間部ではクマとの遭遇リスクが常に存在することを示している。</p>
      <h3>中部地方</h3>
      <p>中部地方は出没件数が多く、新潟県で6件、富山県と長野県でそれぞれ3件が報告された。新潟県では上越市から関川村、阿賀町まで県内の広範囲で目撃されており、活動の活発さがうかがえる。磐越自動車道の工事ヤード内で小グマが目撃された事例は、大規模な開発地域がクマの生息域と交差している現状を示す。富山県立山町では子グマの目撃が2件あり、この時期の幼獣の活動が活発であることが示唆される。長野県でも飯山市、飯綱町、辰野町と広域で報告があった（※14, ※15, ※16）。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では、兵庫県で2件（市川町、加東市）、京都府綾部市で1件の報告があった（※4, ※5, ※6）。中国地方では、島根県で7件の出没が確認され、当日の都道府県別件数で最多となった。特に益田市と浜田市に目撃が集中しており（※2, ※3）、特定の地域でクマの活動が極めて活発になっている可能性が考えられる。店舗裏の山や県道など、人里に近い場所での目撃が相次いでおり、地域住民の警戒が必要な状況である。</p>
      <h2>出没情報一覧（抜粋）</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日時</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">状況概要</th>
              <th className="px-3 py-2">情報源</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市泉区</td><td className="px-3 py-2 text-xs">住吉台東３丁目でクマ出没（※17）</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">青梅市</td><td className="px-3 py-2 text-xs">千ケ瀬４丁目でクマ出没の可能性（※11）</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">西平原町の公園付近で１頭を目撃</td><td className="px-3 py-2 text-xs">shimane</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">阿賀町</td><td className="px-3 py-2 text-xs">磐越自動車道の工事ヤード内で小グマ１頭を目撃</td><td className="px-3 py-2 text-xs">niigata</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">簗川第２地割で親子グマ3頭を目撃</td><td className="px-3 py-2 text-xs">iwate-morioka-mymap</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">高崎市</td><td className="px-3 py-2 text-xs">バス停付近でバス運転手が目撃</td><td className="px-3 py-2 text-xs">gunma</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">飯綱町</td><td className="px-3 py-2 text-xs">倉井でクマ出没（※15）</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-03</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">立山町</td><td className="px-3 py-2 text-xs">子熊らしきものが道路を横断</td><td className="px-3 py-2 text-xs">toyama</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>当日の出没状況を総合的に評価すると、以下の3点が指摘できる。第一に、季節要因として、6月はクマの繁殖期にあたり、雄グマの行動圏が拡大する。また、前年に生まれた子グマが親離れする時期でもあり、経験の浅い若い個体が人里近くに迷い込みやすくなる。岩手や富山での親子グマや幼獣の目撃は、この時期の生態的特徴を裏付けている。第二に、餌資源との関連である。データから山中の餌資源量を直接判断することはできないが、全国の広範囲で人里への接近が報告されている事実は、クマを誘引する要因が人里側に存在するか、あるいは山中の食物が不足している可能性を示唆している。第三に、人口圏への接近度である。仙台市、東京都青梅市、秋田市などの都市近郊住宅地での目撃は、人とクマの遭遇リスクが地理的に拡大していることを示している。また、国道や県道、高速道路工事現場など、交通インフラ周辺での目撃が複数報告されており、人間の主要な活動領域とクマの移動経路が頻繁に交差している実態が浮き彫りとなった。総括すると、6月3日時点では重大な被害こそ発生していないものの、全国的にクマの活動は活発化しており、特に都市部やその周辺における潜在的リスクは看過できないレベルにある。継続的な監視と市民への的確な情報提供が不可欠である。</p>

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
          <dd>2026年6月3日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-04</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-04</dd>
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
