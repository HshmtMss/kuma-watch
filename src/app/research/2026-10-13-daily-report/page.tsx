// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月13日 / mode: daily-report / 生成日: 2026-10-14
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-13-daily-report";
const TITLE = "2026年10月13日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月13日に収集されたクマ関連事案は計71件に上り、北海道および近畿・中国・中部地方を中心に広域での出没が確認された。当日は人身被害や捕獲の報告はなかったものの、市街地住宅街や鉄道線路上への侵入、柿や養蜂箱に対する採食行動が顕著にみられ、生活圏との接触リスクが高まっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-14",
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
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
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
      "title": "【ヒグマ速報】住宅街でクマが徘徊する姿が防犯カメラに―小学校周辺でも“幅約15センチ”の足跡くっきり＿市民は 「ただ怖いです…怖いだけです」〈警察が注意呼びかけ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1nYzB5VFNXWVZuY2hIc3kwVGxub3JnZkQ5OHU2TXZvSHZSR3NfUk94S3VIVTFkX2pUdmlNc3loZ2haRHZuY0ZBSlZhdDdzeHdlS0szRDBBa0RZYy1iWTRsSTAzTFBuaTNyOE1vTUxGV0psSm8yZHhUZk4tNW1BcUk?oc=5"
    },
    {
      "title": "京都市、叡山電鉄の線路上でクマの目撃情報 近くに駅やホテル、京都府警が注意喚起 - 京都新聞デジタル",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBjdERKQ0szNUtHblZqZW9Md2ptOEdtMzhIZXc5dDUtM0w2VGxfS01QLW5kMW5nOXc2aUg2bHFGbEN1QXFCVV95MDl4VGJXb0s4bEJhemMyWHQ?oc=5"
    },
    {
      "title": "クマ出没（新潟県村上市平林湯ノ沢）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPeDJKRUk1MzVoeG5DVnRBQVZHbVJsRk5UTEJZODNlNl9PN0xGLTEyRWF3OHRFV2p2TkRLaEhheDg4YmtyN1JvUlZRWkRpWVZFS0ZPcVUwa2lTYlZZWjQ4ZWpTODZfWnJIU194XzgtN1JFaVBQQk9FZmRXd2RyUXpYdWpmOC1xOFZoVWpXMFJUUXhpRkZuaE50TXd3V28wWmcxSUdsU1NsUHpKMjdNTERv0gGiAUFVX3lxTE5ETXMxWmUtU21FR19wZUJ3WHdfbEo1TTBJNWJaVUk1TnAyVFg1VjRXb2M3YjVEOEdWS3hCaHk2VkZMdk10bVMtQmZZS3JfQlpIUTlzTi11WGRpU3JNY0hHaTM4WUFEZUdNOFczdDRlYlc2UEZqX1FILVdwaW9WZjBKd2hRdE5Tb1M2UTgycmFITUI4VVptRl9QYkFNVUNIVUpfUQ?oc=5"
    },
    {
      "title": "クマ出没（栃木県佐野市牧町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVHMtSV9YVW9jYl92NDVUNG5vQ3pJeFpfZlJ3OVl4dnptOGlSWHIwUldST0R6QkVBUEd3NERwaG9SbzJ1WXhaRWI2SjRVTEpUT0FCTlZCTk1PYWpUcnRqeV9CQWFnLXRmZlo1dHBINDdLck5NaXVFTklIWEJxb3RRMWlPZW9FVHRWZVJma0ZFTjl1VHB2QVRqVGY0dFTSAaIBQVVfeXFMTmxaVkh4T3FaYjZqTTJCSk04UWtHM3JkSlBkMFg4S0hnVGxRWVNzcFZIa2dnX2ZMN0w0VkJOTnpaMVdlUnN0SWpobWVrWWZyTFJzbG1sM3FobFEzdlc3a2xpSmlQQmdTeTZaRDZxbTN4YjVVUFhQM2cxemJFSnlzTDhNVDQ4TDYtd3lLMGRnUWEyRHRkSGZlc013ejdPbXlCMWhn?oc=5"
    },
    {
      "title": "クマ出没（北海道千歳市柏台）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNREhobjJOU2IxSlZKM1haNUFTTU9VSmFkT0hRemloT00temlla1l2RnEyV0ZPcHFRdkdSaXZhTDZlRlhQamswLXVIaXYzdDVWa0hhWmZSbDhVdzdEZDI2X3ZOYVF1MmRTR0JfTWwyS3J5SldzTVJYT042dXp3VkVuSzJlTlBiYklQRnVtZmR1aERGeFhxTVlWMWdacWkzV3dnMWJUakpCWk9KcGJEeURR0gGiAUFVX3lxTE5Ga294LXBGMHBONm44X3FxNm1UMEpFZ2xrTEZiSGpKLWhOWng2M3dnNEJKbmRtZEJJXzQ2N0FpR3hGbnpoMW9fdHpKVlJFVFlCLWxON2hBb2dfeUlJVXlmZFMzeFMzY0xZdEE4RVJXMFFDR2VWa2Vma2xvSk5kUnA0Y0lOaTd4a2F2YmRlUGFfZnhWMmZNQnNkUHQyM1RucTNzdw?oc=5"
    },
    {
      "title": "クマ出没（北海道愛別町北町）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNOG9xbzdvYi1uSnJUbUFPSHNYQ18xV0pLNGpydEw2RDN2ZzNlTENUS1Vibkozb1RBdkVJekpYaGNFck13UkJ6MktaSEJ1T3RQQnh5WW5sSTktcDRzenBtWmpBd2RSZmw2bHJwYmNTX0owa1F4bGoySmdJWjRaaDR0ZjN5UEhtWEtPNWR1UnFwVm1QTEN4YldBSGJIVWRTVXlyY1VYd2hVeXZQSmotUUcw0gGiAUFVX3lxTFBaZk5iSi1famE4RjhlZ25sWEluMC1hZjhuYlQ1UzI4Z2hVb0h3eUpmYXBXcVVvSDJ5WmoxbmxKMlF3TGEwVElodFd4ZXFhZTlvanpia2lSSFZfRXVwWkF1WjRPLTNjSFlwbDRxSnlMT0wzZlprNzZERWlGMHRKbzJ0NW9IMFN2eDBtcWlrbHFMdXFwR0ltRVNLdXRJY2pjUVd0Zw?oc=5"
    },
    {
      "title": "クマ出没（北海道泊村茅沼村）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQM3NxdTVsZUZNWDlmZXFZOWQyVWtPSmlWR29BMmFXRl9mT2VUa2hNNVJaV0xaRktxaXBxVzhuakVrSkJHcmhRM3dVT1BqWUJaSll5WUVIY0ZCaUxGTEVNQTdwZEl1U0pLMjlkS1pwNnpDRWlnN2tjTHFUTnpudzdPVjV4UTllb2l1NUZ3TnowMnpQU2RZWkxLRDBwSkHSAaIBQVVfeXFMTjdPUzFFcjhJc2dJeUFiUmdhQ1hPUjktejg4X25FOGJ2d2E0Rml6dUhwSWJ0Tk5mcmpNQ1FaYllHaDJsS0JDS3dlb0xabTZGMEVod1BrZERhT01abWx3QTdiOEw2NE4wdUpxaTBpRVJWZHNZZTJTWDVoOWM1ZUtVZkUtRjNwYVpDd0VZLWpyMXdOWHJVaUZwN3NyZjJoaWl2bWZB?oc=5"
    },
    {
      "title": "クマ出没（北海道留萌市留萌村樽真布）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORGN4XzRMZkZJVm0xTUFtZVRSTGNZVTJoYTBnNzdEQVA0akRpalRtTHdhbDVwWUZaaGFLZWFiZGFETWlicEwwNzkwbkJ5XzhNYl90cTdQRDIycXVCYnJod2h2MUVNRFA1eHFpLWd6OVFMeW9WZEp4ZEVfZjB2ZDhaRjZveWNpbHVNQld1a1U0dTFMTmZCb3RYM0pCMlHSAaIBQVVfeXFMUGdVelNaWGlnTldHc1JVWEREaVRWanVYS1g4T1FGMU80bmlpcGgwVUNkZEdsb1VOSEtTVUNGR3BUTnFsaHNSemNtbXZKamJKbXNRc01tOWJfbjBfRXlBblpjM0I3djkzaXR5Si1tRDhTVjV3RVdGWWl0NDVkTFI2RTZ4ZllEWE5fdjJ0Y2JMTHlJcENLb2xXbjRQT2E3Wm5wVDhR?oc=5"
    },
    {
      "title": "クマ出没痕跡（山口県周南市須々万本郷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZUs5X2IycW9iLXFlMk91WVJLTDhCLWFEQ041eGNLNkxJeDNrVVQtT0RHczlTMnNpQXZMeVVIcGZlaDEyMktyUFB0WWtnaVNkYnBzNWdoR3B5dFpJOXBsbEpvNVh0Tk5lMC1GVUlBVHhzdzY0WHJyTG8ySmg1bmxJaHBueW1HMUtXWEcwMkNYUHY1ZlRMS0gzVE1wYzDSAaIBQVVfeXFMTWY4Q0l4blp6bmRUZW1sMllsNi1TNFBnVnRSM0Nvc1BOQ3pzSzlhV2J6UWd1Mzd0cHo3V2FLWEhsVzQzaU5JNXpsTHR3VlJvb2dEN1czOVB2VGFZbG93TzNWTHQydXpyVEdHMDZISXZSMFZ1R0xsc3FlcmU4VXNGcFhoMVNwRUxjRDlRWlg0OFdJOGNUSm9raUp1VUxIZ1Q2LTNB?oc=5"
    },
    {
      "title": "クマ出没痕跡（山口県岩国市通津）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNZHJxYmEwU2FzaW5OMldiZUt5NmdQTkFMODZsZ2dxSXpmN2NZUGxGWjhJeEMxdTNTTHlNeHYzMGdWQjhKYVYtNE04NVlYUmVleUZnUnJhMUFrcGM0UVc2Z0NWMElXTnBfc0xjYVJyYnhDWHh0WDJMYUxjdjVISjU5OEl4bVhaUWVhV2xxZEd0RGNiQlZXNEREaXo2TmM1aURhZHfSAaIBQVVfeXFMTWRycWJhMFNhc2luTjJXYmVLeTZnUE5BTDg2bGdncUl6ZjdjWVBsRlo4SXhDMXUzU0x5TXh2MzBnVkI4SmFWLTRNODVZWFJlZXlGZ1JyYTFBa3BjNFFXNmdDVjBJV05wX3NMY2FScmJ4Q1h4dFgyTGFMY3Y1SEo1OThJeG1YWlFlYVdscWRHdERjYkJWVzRERGl6Nk5jNWlEYWR3?oc=5"
    },
    {
      "title": "クマ出没痕跡（山口県岩国市周東町下久原下川上）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMFpiVHE3dGVkRG15WmNfV0NLSVBXYm14Qi1CLTFKVWQtTmpGUDhvLWlZdW1BNjBpTmlxcVVpaHg0U3RPRkdYUXFkLW9QckpLSXFHTEdtN00wUmV1OWR6eWhiQUp5djhQS3dwOUZva3RMZS1oN1Y5bXQ1MXhFcnhZSFMtdlJvaElFRHE3WWhvWlVnQlR4NTJCb1VILVHSAaIBQVVfeXFMTjV3M193amltLTZJcU44MHpXRUtKemJMWF9iOTBWYnVrV0hwMkJ1Z2ZGZE9kZnRRbEZRM0lDSmlzVVktUER3aVRYeDRBR0MtZTM3aE56aUpQSXVhTEMwZ3E0YWpRWnBmQjdRU2IxdTFvY3cyeno1ZkdtMGFrZHRtUElydEZoWlNjQXdHeUphWnMxYV9kN2hmMjd3M3BlVHJoY1NB?oc=5"
    },
    {
      "title": "クマ出没（山口県周南市久米）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPbnlCUHBOZDNzSFJ2NHk2Tk5LRmNSVnB3TGdVODg1b2hsNlNXZWViLWpYT0w3bDZTSVZjTzg2bGY4N1ZMMW9HTkxmU2ZBS0dVTThvWFlZUFNXdlVYWV8tTDc3WWd4NHpHU2FmOUNaNkIzc1I2Y2lmWGxqYWZldW1acUtjTV9oR2p3NUpQMndPNkRHdnAtcWNLVXR6UUU0aW8zM3fSAaIBQVVfeXFMT255QlBwTmQzc0hSdjR5Nk5OS0ZjUlZwd0xnVTg4NW9obDZTV2VlYi1qWE9MN2w2U0lWY084NmxmODdWTDFvR05MZlNmQUtHVU04b1hZWVBTV3ZVWFlfLUw3N1lneDR6R1NhZjlDWjZCM3NSNmNpZlhsamFmZXVtWnFLY01faEdqdzVKUDJ3TzZER3ZwLXFjS1V0elFFNGlvMzN3?oc=5"
    },
    {
      "title": "クマ出没（愛知県豊田市小原田代町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaHFYbzR0dlh4TGt5RGxRcUdlZVp5Rk9lZWhjVXcxb0tfbzhObTV5WkpqdnhPSHBycWlxQTFXcksyQkJvSk9mWWpLVUJYWGc1b0RUbXZ1b2lTUC16UjlhdGdTZXp6YTlyUTRIc2gwZGZSa2dDVUNBTFE2bmVac2hrVUd2WDFZSWRzdVBqYThGRThJclJJVllYZm5hYmvSAaIBQVVfeXFMTWhhUjd2OElHVjUxcktSbkNqV1pIQVY0eHl6MHoway1oak5aNVZCM2tKRmlhU3MwSjJFaHhSUXNQeEFPVU1rSnNKdVFOSEhlY2U2VWhJclFEM0JhdlM4N1FfQjdJbUtyVmRnRXhTUE56QVl1cDFYdlBJVE1lQkdiMW5TeU5Od0MtcV9HaTNNWXhzZDlmWlVoSDJjMDBMWjZsY0ln?oc=5"
    },
    {
      "title": "民家近くにクマ出没（愛知県新城市）",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE44NTc1djJWdHNDQjJwQ3ZhSmhLc1FpM3RONndHeFJpQk80emdxeWN3WU5MUEpVM3VBajlxbVRVVGVrMDJ3TXBmMHpoVWpNREgzVXFCZVlvWUExejRRUThpOGJzWFhrSjE3c3ljdDR6aHA?oc=5"
    },
    {
      "title": "ツキノワグマの親子目撃（愛知県豊田市）",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBfd2s3OWlIaGl2UjV6WXNNdUxNQnJ4REhVVHQ3OUtmZU80U3FUYV92RVNrOFJRYUpmbWtCcTVxUU5uV29LWk8ycXpuRmo0MlBYQms0WHBOM1dfaHRDa3I0dHotS3hqQ0hKVksxUlNTTjJYT2VFeDVzUFVBTdIBgAFBVV95cUxOWlEtRHRKcnBDXzFIYjBXUlltZVI3VWN3SmU5NnFRVkM3SVFlblIzV1c5dUlyV01uamVwT1h3UzQ0MnRUSWhTWDVQcFFuVlJfMU5EX3I0X1RMb0JjdGhhQW5PRVEzQS1Pb1REa3hKT0dBSGJmWE5KOXI2WjZLZXRVNQ?oc=5"
    },
    {
      "title": "クマ親子の目撃情報（愛知県豊田市旧小原村）",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1qNWU4ZWstWk5scGdweVFOQzFUWVRUSVdJa1pHWXFyYUZzMGpaRW1pMVRDQ0hOX3R1aGtFVURNdDhvQzc1OHVDQll1SnRBT2xha0J2Rkk4R3NvVVRE?oc=5"
    },
    {
      "title": "（山梨）山梨市牧丘町千野々宮でクマ出没 １０月１３日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZWFiRmNoaExyeFZMUjE3Wk1uOE4yM0RLVzR4SFJWdGVZTU9DaER3Q2Y1aExINXhUTWN6dzlkUzdUZ3lpR3pxbWJ1dzBubVI4ZjZEa1MwaDU4bjJ1U0hmN21wa2M0MnJtclMyMm9lbEJhQWE1LVJsTUFPSWkyeG1va3U3aDU1YW56ZTByY3RWdUROaDJYS3EzTUVPbVRIU3otTTIxS2REeVByYW5aeE1zSVRCTUI5dmVwS0VDTHlYdXRhNjN6a0JkZHQydmtVNmdyUHM3Vy1Mdm1zMlY1Q2JXTFliSG1YQndtOVBRbUhBaHVYZ9IBogFBVV95cUxObnRMSVZqcU5tUER3cTVTRDFQZmlXZUVrS1Z4WE9iSU5KV3lDVXA1SHR2RUxxWk83Q3JCemNzMnB0T0NOU3I2YzVIVkk1YUdxRThBdEU5a0VXY0ZBRmVMVm9YcU0yZk4tLWRZV0c1dXlUejlfU0FWc2ViSTc2TnFCSWhGa3F3UEFXTE9IQklRSVhGXzktZWZmY29DVkRNR2lLY0E?oc=5"
    },
    {
      "title": "クマ出没（京都府宮津市日置）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOWGptOXJYWWhkTWdwckFzUnJlbXR6cXBqb0g4d1NKT0xNanpON0xUTjRNdDgtZC1TYmpWaFZIZWRKeWFwVUxIakYwMkthN2FKYkRTNl92WE80YS05Sk5XZkpvVkhDS0RUbEYzUjFZOUU5b0FRZ1dma0xrNUNaUmxGVTJ3dDR6UEpqRXNCNVFhdGRhQUNaemFNY2tfd0lrMnlJS0HSAaIBQVVfeXFMTlhqbTlyWFloZE1ncHJBc1JyZW10enFwam9IOHdTSk9MTWp6TjdMVE40TXQ4LWQtU2JqVmhWSGVkSnlhcFVMSGpGMDJLYTdhSmJEUzZfdlhPNGEtOUpOV2ZKb1ZIQ0tEVGxGM1IxWTlFOW9BUWdXZmtMazVDWlJsRlUyd3Q0elBKakVzQjVRYXRkYUFDWnphTWNrX3dJazJ5SUtB?oc=5"
    },
    {
      "title": "クマ出没痕跡（京都府京丹後市久美浜町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQjNCZnJ5Vm5pUk9lQXZEQTdwOGgtRFhYRGNDODNPd3oydTFqM0RsUWtRNFNUTDBURVFkZ2N1RWVZeGRkeDNaV1RwazFFc0Nnei1kNVJYLVBDTnlrdV84bng2a0JJa0JFdUZZOU5iLUdqdlI5MEw5eWh0RVdpU0U1bE5iNU0zeWVXVU1DVzNKa1hVNFZtcDJzMXNqdGjSAaIBQVVfeXFMTm9DSU1FM3dmcUdaamxHOEFrY2hIUUJveFUyMHFnb0JwdHB0alNMS2FoYjdHc3R2Z25wLVZWc3lrVFp0ODJBaEQzNXNkSDRWSnpDNl9hN2VBel9uTUVJX0k3cHFXcnNKa3JrYmpFdzJPYWloMG9WcE1KTmx1OTBDX1hVRDZ6SjB0TGhvTHZ6U1Y2V2xsMWZTNF94WUZ4OHlrMXVn?oc=5"
    },
    {
      "title": "クマ出没痕跡（京都府京丹後市久美浜町金谷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTnk3MXVrY0daeU84NFhYVk1YS0kwMWF5TG1nMFRzZ0NtaFBDNUVOVlQwNlVVN0xkWTZlVnktRHVoRnlaV3ZnZ2R6dGY1OUh3elI2M0dyMnR5bDFzWWlVdkJ4MjJvdGY3aVh6OFg1Zk9MNU5Td0hWaE5MS3c1SkdKWmRGM2tYQ3R2VHVaUGd5VDZFZXVySGpGMVNPMU_SAaIBQVVfeXFMTXN0dng1RE1xdHVuNHI2VWJSYl9yRnpsbjZEXzhBXzRCVThxcEFyTXA4ZS1CVVZpZXJTOXdWLWcyQTlXNmNYb243UllVamJ4SnJIWkhROTV4czZMVVJkckJpTmhXSThqb1JHMzJjSDdVejd5clVrZUFxZDJ3ejZ5UEgtdmJha2g1NnlIUy1zSm5wZkROVTJxX2U1SkNzZTE1b2tR?oc=5"
    },
    {
      "title": "クマ出没（京都府京丹後市弥栄町鳥取）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMnlfOEI2WFlLd2c0ekdLQkt4RzB4MnhXYU82NHlBdjVhNnRxdl92c2UxbjgyNkZRMC14a0dSN2RhZDhNNWRBOTFUa3JsZ3A0WDNRUjByMldfNGhhd0hWcGtGZndicGtDdnhQT0Zkcm9yS3h5anIzWDFvdXloa0E5VG5oQkdhUUotY0RFZzlEZk5lSXdfWWhXMDF4NnPSAaIBQVVfeXFMT1BacF85Q2dheEZyZ1BWRUhPUFNLNU9Xa0VFM0s5R0VJWjY0X29YaHVkNnBOQ2hURGhmNVk5V0JSZUd6aUhuNk9SQm54VTAwV0NHenVhNXJqWHlKZTZuZnpaT3I1QkdJQ21sUU84WWhzWTlqN3FCX1hQMVEta1VPUVl6YktHbnJHZEVjVDRlclQ5TFlhVjNWUzBnR21rMjZTallR?oc=5"
    },
    {
      "title": "神奈川・秦野市でツキノワグマの糞確認 市が注意呼びかけ（ABEMA TIMES） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE54RXdvZTlVdkIwcGNvVDE1ZGVLNm80NVdBakpNWnVQSVNmbXFPdndIUkRpQV9TSlRBd2N3QUljTnlVS0ZyOGwzTXZKRV83a3pzc255MmFNb0FDWWlSdmRZbXNST2JVUVZTNkRGU0NzQV9YdVgwYTV6UHlIWmlVMEk?oc=5"
    },
    {
      "title": "クマ出没の可能性（神奈川県秦野市曽屋）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOUxMSENxdE4wV3RCaVpyVEJpTzZOMEQ0bEJHMzRfd3gzOGQ2d29hOUdqU096ZFBpdGhCVjJfUHpNTFdfMVpMUmRlT1k0ckRMM2d3RWk5N3NUYlJRZXlfOWZOajdUcVBNVTRNZkIySmFJUmFDZnJXZ01ab2o4MnJzOHZidldPMzlFaEJUUUpoWHR4c1V5LU5XUWxvRkPSAaIBQVVfeXFMTTVUc1dlLWZpWWNuc25ES2plekVDa2Q0QkJ6MEp4djlnSzNudEFDSjFFR2tDYjVsUWt1MnlmeGZmSmd1T3BZNXlxcmpCWWR3YW1wY3k3ZnRoQ3pyTkNRTkRfSDJDclQzeVRzTk5LRDFNS0k4NlJiV1V3Y0FmQlVKRE9iSUJlckNkaTlQTnliOHNPcnJaQ2JtdEhkOEplTHhiQkdR?oc=5"
    },
    {
      "title": "クマ出没（神奈川県相模原市緑区牧野）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVlNCRzRWdDZkcENfWUZ5TmFfbkNZZDJ5VXdJNTVLWnlFek8ybjZ5SUp3Z0pNdjdISVMtVUROc29QaUZ6dC1kTWdyRC1KbUxXakZNWnpYb3RXbWpMXzVodlgxNzNMaWJQWmkyMnZicXhrQV9rRTRJY3E0V3RtSGk4LXhGckdiclBQOTV6QXk3eTVBQXZHRkFLeFRHLWLSAaIBQVVfeXFMUFBscDhybGUyQklXMHpIWFJtTmFmV1hrdkZHeGVBWWtRMm9rbGhGX25aNDhGM3MxN01nZjhZenhONjR5dzdwdFdGSG96TDVxQ0p3UlNMTXdRY3VFclc2el9EWlFSa2FDZkhIaTZzcktFY01rREl6SHRESUJkOWhpWUtkcGVBOE80cUVScXJadUExekE5RlNLYkJPcm1xdjZsbUNR?oc=5"
    },
    {
      "title": "クマ出没痕跡（神奈川県相模原市緑区佐野川）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNTdVbnJLb0NZMXBoZFJNZGNVVUxJM0RhUGJEZ25DTnNzU1Z2SFNBN2dBWTE5MkNJcWJiTjA0RWl4OFBYSW9oZ0ktbmplcjUwRGxVVWhYMlJrQkRLNG9kQmMxM00wQWxXV2VjNU94ZHhOZjBsMTRYZDktMHZQYzNiekc1Szc2eUxlS3JjbWI1NjQwWEItZXl0TnRaNlnSAaIBQVVfeXFMUEZNOXBVUUl3MWpMa1RIdC1DemItclk4SFRzRTFqODZIR2N4N2dzNEVYS0lyZDJRdjJIa1pHbmZJenFEcVlHaUlmZUVBSWhlZUpMX1R4cXlWX1FJWDBfUUw3M0E5U3QxOGFySmxueGZnVmlEdFJEaHkzclpHRGUzemlUancwV2hybkpvRjR6czJjQ1NaVHctb1RobVVmYWhKTjBB?oc=5"
    },
    {
      "title": "「1mくらいのクマが歩いている」広島市でクマとみられる動物の目撃「クマの可能性高い」区役所が注意喚起 安佐南区・伴東 - TBS NEWS DIG",
      "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxQX24zNlYydTdTdlp0cWdETXkzR204bTNfZnF0bjhwaVpZUjRUZnJ0S3U1MklhSENkR1c2UnBmM0FNNXQxdDM2SXlybWFXcVprWFpxbXRWZGxZUnZxTXgyWnliNzdZc1RZR2Q4dUpkbXo5dDkyZE1fYWlsa2I4S0xDVnlGVkluZWxBUllRc1YwcTlOekE2WWVNV2F4V0hVZ2FSZnhQcF9CRk8zT2xWODJFMWNOMW81cTNNQURWemJvdnpfaHA2TUFzalVpdVlteU9IaE9KX3JhTHRNRTE2cWdiMXpHVWRIZmloWm52NXMzbVFwNl9Sbmc?oc=5"
    },
    {
      "title": "三種町外岡の県道にクマ 体長は約1メートル 13日 秋田 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBERkR4TUZ6T3g5ZFdNbWVZaHdpd1RUazlneG82UHJCVnFGYUZaOEtWZEJ0R0t6TUpadllqejNMS0hGQUI3UE4xODdRdGx4OGYzMl90VUdaNzV1QmIyN2FWbHhVTnlOQTZidFc2N2tYQ256WklOM2I2Szk2Y9IBgAFBVV95cUxNd19Va0lzRkZLZ3NmcXp4YmZRc2pQeEw3NlRjVkUydjlTN2NFUEx2aUdFcHVnVUVuMTkzU0ZZZUxROHhPaGlybnYtZnl0UXVGbWJaTE1tUk9rOWNxdDRMdEU0VHE5dThsb2dFTWZZaF93dVA0VlJ1R19xUUNzY0NVdQ?oc=5"
    },
    {
      "title": "クマ出没（秋田県大仙市協和上淀川坊台）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcTAydDREaHBDQm1NV3RmSElGUnVmbTBVVmRSQ0NUbXBTejYyamdKQ1BqNnpFaVFZV2Q4WWZpQnkyTDBiMnlNaUNyX1Q0TUh2VldhNnVvXzNDeVB1Rks4MVF2cENqMWM4UlJyV05fb0xkbHQzUWlHc19ham1qblNLR1ZtZHRYSWtVR2lvREQyRmU0VU9zYm1QTzEzQXHSAaIBQVVfeXFMUHprTkVCNVlnTWlNbTlZWXp5dGhFNkJLMk90Sm1TU19pWkVVUFp4TVZhaEREekpIWDQ2Q09CZkpqd3hEdjY4VDBhXzZkX0NIcW9fOTh3MHpYeXVIV0ZJNDRIc2YtaGdjWDJjTVMtQndJRTBRMHFMSFRFMXhjUUM4V0ZpTDJka09qMVd3bWpKRV8wNFo0c1RESmRSNDlIR2lzbF9B?oc=5"
    },
    {
      "title": "クマ出没痕跡（秋田県秋田市桜台3丁目）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRThLZk9reERXX3lLdGhETEtWVnRhMjJsbUVFSHlmRGFIdkIwOFZtTFNYbmYtZVdCRk1ycjRxa2VJMnhwQlF2Mm1TZ0NuajdxUFdOaG9faTYyTXBXV3ktUmJDRGdWaGVLbWRiV2ZlSXRseDhwV0V6OTFvR3lObFk3OGJSS0c0dVlfRGRaZlhHV2x5VlV5WV9DN01RSG_SAaIBQVVfeXFMTWltQXN4c18tMFpBR1ZTVnhfbkhydnpSSU0td1dXa25KR1hwUTBFOWppZzlsZ0c0Q09IYW5sSWVzWEUwR1pBUmd6VWFHT3RpYnRJem9iM29YZ3R3UGpFRUZZZnBQMHoxVzlRc3VodTNVaUFlQ1U2YmcwZlNnekFjLVZmWjFjTXVzaXZaUmFaTFRpak84Uk45bFpLMjFTdTJ1NGpR?oc=5"
    },
    {
      "title": "クマ出没（岐阜県揖斐川町上南方）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQlFWWDczVGxoYnhtRFZlYnJBNWNFNmE0dHhBMldjQzQ4ekozdlFnUE9KRkZld25WdlN1cTBTT0xjWTVpOFBxWnVkcHg2Z1p2QnFpemlBNmptUWpSWXhFZXVJbDRjUHNZSDgzQVpKMUducEN5bEhRZXR0b0pxUW5NZU9wbEYzZFBtSEI5WWVkV2ZyajRJckdNa1R6Qm_SAaIBQVVfeXFMT2hzQ1VMR0U2Y3RjV2hXcWFvU1JVM3FJbjM1OHRVVzZNVlN1bi1adjlGR1FFQndBNVlETzlNWDM4VUNfNmdsODRMbzRxM2tLajc4bkd2XzBkZDQwbHk3eGN5UEpnazI2aG10MXNraTJFekp6bHZUY2lfc3ppRTJmMXU4SzRPV0xCa1FPcnN0NjZHQVhXekF0S1g5UmQ2NklVUXFR?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":16},{"pref":"京都府","count":11},{"pref":"山口県","count":8},{"pref":"栃木県","count":6},{"pref":"愛知県","count":6},{"pref":"神奈川県","count":4},{"pref":"新潟県","count":3},{"pref":"秋田県","count":3},{"pref":"群馬県","count":2},{"pref":"山梨県","count":2},{"pref":"岐阜県","count":2},{"pref":"青森県","count":1},{"pref":"広島県","count":1},{"pref":"宮城県","count":1},{"pref":"兵庫県","count":1},{"pref":"福島県","count":1},{"pref":"和歌山県","count":1},{"pref":"東京都","count":1},{"pref":"長野県","count":1}];

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
        <span>対象期間: 2026年10月13日</span>
        <span>·</span>
        <span>公開: 2026-10-14</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={71}
        periodLabel={"2026年10月13日"}
      />

      <h2>1. 概要および都市部・主要インフラ近接事案の分析</h2>
      <p>2026年10月13日の一日において、KumaWatchシステムは全国で計71件の出没・痕跡情報を記録した。収集データの種別内訳は報道由来が47件、各自治体等の発表が24件であり、公式発表情報単体での事案集計は0件であった。人身被害および捕獲・銃猟キーワードに合致する事案は0件であったものの、都市部キーワードに該当する事案が2件確認され、生活圏や交通インフラへの著しい接近が観察された。</p>
      <p>北海道士別市では、住宅街を徘徊するヒグマの姿が防犯カメラに捉えられたほか、近隣の小学校周辺で幅約15センチメートルの足跡が確認され、警察が市民への警戒を呼びかける事態となった（※1）。また、京都府京都市では叡山電鉄の線路上でクマの目撃情報が寄せられ、近隣に駅や宿泊施設が存在することから京都府警が注意喚起を実施した（※2）。さらに、広島県広島市安佐南区伴東の住宅・都市近郊エリアにおいても体長約1メートルの個体が歩いている様子が目撃され、区役所が警戒体制をとっている（※26）。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域・自治体</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">16件</td><td className="px-3 py-2 text-xs">士別市、千歳市、愛別町、泊村、留萌市</td><td className="px-3 py-2 text-xs">住宅街徘徊・小学校近隣での足跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">京都市、京丹後市、宮津市</td><td className="px-3 py-2 text-xs">叡山電鉄線路上での目撃、農地・林縁痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">周南市、岩国市</td><td className="px-3 py-2 text-xs">集落近郊での痕跡・目撃多発</td></tr>
            <tr><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">豊田市、新城市</td><td className="px-3 py-2 text-xs">養蜂箱への食害、母子グマ目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">佐野市、日光市、那須塩原市</td><td className="px-3 py-2 text-xs">林縁部・山林内での目撃・痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">秦野市、相模原市緑区</td><td className="px-3 py-2 text-xs">住宅・農地近接部での糞確認、山間部集落</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">村上市、阿賀町</td><td className="px-3 py-2 text-xs">道路横断、ヘリポート付近の幼獣</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">三種町、大仙市、秋田市</td><td className="px-3 py-2 text-xs">県道上目撃、住宅団地（桜台）痕跡</td></tr>
          </tbody>
        </table>
      </div>
      <h2>2. 地域別出没傾向の詳細分析</h2>
      <h3>北海道</h3>
      <p>北海道では全国最多となる16件の事案が確認された。前述の士別市における市街地徘徊（※1）をはじめ、千歳市柏台（※5）、愛別町北町（※6）、泊村茅沼村（※7）、留萌市留萌村樽真布（※8）など、道内各地で目撃情報が相次いだ。農地周辺のみならず、都市近郊や文教施設周辺への進入が目立ち、大型個体の行動圏が人為的環境に深く重なっている状況が浮き彫りとなっている。</p>
      <h3>東北地方</h3>
      <p>東北地方では秋田県（3件）、青森県（1件）、宮城県（1件）、福島県（1件）で事案が把握された。秋田県三種町外岡では県道上に体長約1メートルのクマが出没した（※27）ほか、大仙市協和上淀川（※28）、秋田市桜台3丁目の住宅地域において痕跡が確認されている（※29）。青森県青森市浪岡大釈迦では車両運転中に道路を往復横断する個体が目撃された。宮城県仙台市青葉区中山台4丁目や福島県郡山市田村町徳定でも目撃情報が報告されており、幹線道路や新興住宅街への接近事例が複数地点で並行して生じている。</p>
      <h3>関東地方</h3>
      <p>栃木県（6件）、神奈川県（4件）、群馬県（2件）、東京都（1件）において事案が記録された。栃木県内では佐野市牧町（※4）や日光市、那須塩原市千本松での痕跡が報告されている。群馬県安中市松井田町では、防犯カメラによる個体撮影に加え、柿の木に登る成獣1頭の目撃や柿の実の食害が2地点で確認された。神奈川県秦野市曽屋ではツキノワグマの糞が確認されて行政が警戒を呼びかけ（※22、※23）、相模原市緑区牧野・佐野川でも目撃や痕跡が記録された（※24、※25）。東京都西多摩郡日の出町大久野でも目撃例があり、首都圏近郊の山間境界域全般で活動が活発化している。</p>
      <h3>中部地方</h3>
      <p>愛知県（6件）、新潟県（3件）、山梨県（2件）、長野県（1件）、岐阜県（2件）において事案が分散して発生した。愛知県豊田市小原田代町では養蜂箱がクマに破壊される農業被害が生じ（※13）、同市周辺では母子とみられるツキノワグマの目撃が複数報告された（※15、※16）。新城市でも民家近傍への出没があった（※14）。新潟県では村上市の平林湯ノ沢やヘリポート付近（※3）、阿賀町向鹿瀬区の山頂道路横断が確認された。山梨県山梨市牧丘町（※17）や鳴沢村の別荘地、長野県東御市和、岐阜県揖斐川町（※30）および神戸町新屋敷でも出没が確認されている。</p>
      <h3>近畿・中国地方</h3>
      <p>京都府では11件の事案が集中的に報告された。京都市左京区における鉄道線路上への進入（※2）に加え、宮津市日置（※18）、京丹後市久美浜町（※19、※20）や弥栄町鳥取（※21）など丹後地域全域で痕跡・目撃が多発した。和歌山県九度山町では柿畑において明確な食害痕跡が確認され、兵庫県丹波市青垣町遠阪でも痕跡が見られた。中国地方では山口県で周南市（久米、須々万本郷など；※9、※12）や岩国市（通津、周東町下久原；※10、※11）を中心に8件が記録され、広島県広島市安佐南区でも住宅地近接部での出没が発生した（※26）。</p>
      <h2>3. リスク評価</h2>
      <ul>
        <li>季節要因と採食行動: 10月中旬の活動期にあたり、冬眠前の栄養蓄積を目的とした活発な移動が顕著である。群馬県安中市や和歌山県九度山町における柿への執着、愛知県豊田市における養蜂箱への加害は、高カロリーな人為的食物資源への依存傾向を如実に示している。</li>
        <li>母子グマおよび幼獣の出没リスク: 愛知県豊田市における親子の目撃や新潟県村上市における小熊の単独目撃など、繁殖個体群の活動が目立つ。母子グマへの不用意な遭遇は突発的な防御的攻撃行動を誘発する恐れが高い。</li>
        <li>交通インフラおよび人口集中域への侵入: 京都市における鉄道線路、秋田県や青森県における県道・一般道路横断、士別市や仙台市、広島市における住宅街周辺での徘徊など、インフラおよび生活圏への近接が常態化している。薄暮時や早朝における遭遇リスク、車両との衝突リスクに対する厳重な警戒が求められる。</li>
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
          <dd>2026年10月13日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-14</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-14</dd>
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
