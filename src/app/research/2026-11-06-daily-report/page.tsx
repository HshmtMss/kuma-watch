// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月6日 / mode: daily-report / 生成日: 2026-11-07
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-06-daily-report";
const TITLE = "2026年11月6日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月6日の全国クマ関連事案は総計55件であり、北海道の10件を筆頭に福井県、岩手県、神奈川県などで多発した。山梨県早川町では人身被害と2頭の駆除が確認されたほか、東京都八王子市では緊急銃猟地点近隣での出没、岩手県盛岡市では学生寮やゴミステーション付近を含む生活圏への出没が記録された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-07",
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
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
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
      "title": "2026年11月6日 山梨県早川町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1QQ0hIZTRJS2dLZHR3X19vbUlnVG90U2hHaFI3cmlzQk9wX0I5MlpPZVkyWHVtclBkT2hsdk0yZkpnNkd4bEtfNy05Y0I5X2FCeGRyYnRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 山梨県早川町 保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaERRTGw2bTY5VzNwMGVtSWFCOHplVE5RcmV5ZlpVX25ObGstVHF2aF9VZjhNb2g1VTNVZTYyMmpKUEdqVUhaeU9oWUw3Y0tOVVFXMEZpTGJSVnlXYU9hMmdsVm5hYUNRdnRGc2tlMGFUbktRRnBheG1IWnQ2b2p6QVhIcHZndENqTHBhSzVVRFJpLW9YY0d0OGU0VzHSAaIBQVVfeXFMT3hwR2daTGJtOGtqT3lYOTBhWFhpc2xXRkl0ckZldkxZRWstdHlZN0VKLXp4SHlVbVdKUWxwTXp3dHNuNUFfVFZiSXVFWVlBamp0M1IzbTJLRmJOWVI0NlNYTTBrR1BCRnhUMWZhbVhXRW1ydjIwNFY2ZFhrSDlYbUxOR21pZVZxNHBSUnptQnpEdGpMcFZPMGh1dkNpbkN2eXN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 東京都八王子市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPU2VmMzJwRk55RWIwb3RlcVJpd0UzbHdSUE13VVBSZkNTTVMyTzV1dGYwbFVOSjFYWE10MktSR2Fxc2VHejR1STB5MU12TElsVzdGWWJjWDJMWWhNc21OeTY3VFdhdFJudTUyVHRuVmVuVXhRYXQwNFdzdDFpS1VEQUdhQlB1ZmtaS1pRSWVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 東京都八王子市 小津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYk1Cei15YTdINlVfUlJmd2EtV0FGcU1OSC1FdkU3X2VFOFU0djYyU1B5U1N4NTA4M09yZGJXOVBCVFJUNXNraHlGTjlwekVyNkJ0OGRuYlE5Ukc3LUliM1pTUGoxaVRvZzF1RGFOVXB6amZVak1WNWtoaTRfNnRyOWliMGdRR1AtWmlkTXlLTnBZQVRydFRIak1lcWfSAaIBQVVfeXFMT0lNZmYyMG1ubXlFT01NcDRUX1dqMVJtWFZSdl9IOGFabEFnVGRHenlvRThMWkF3clE5RjM4aG5tMVZQME1Qb29tQ1JNbURrMVdNYVpxU1REOXF3Q3owMGNrTEhJd3I5NnpTcGx4YXMwelZpaEFBSVNMeG56cjMyN1N6RmpNTHJyYzNmeDk1VUdUTmxsMXVLYWpMb28wb3Fab3V3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 岩手県盛岡市 住宅街周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1OeGdWbUtCZnZjRU51d0hkZ3N1Uk5UZW9DYU9FdmhFM20yNGVXLTI1aENXWXNQZ3BDV3UxQ1BBazUxZDBSanNmcDJidEZCWHJGNUVzT0JGSXB3UDR5V3BSSA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 岩手県盛岡市 小鳥沢2丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPano4aVVqQ0d2azJFcUp0aHpYMXpjWUczTnBWU3I5cWpDaXotdXp5NjR0OV91WTdtNVdnOHBFOEpOSXJFcTdlSUsyOEljWk4xdTd3d1I2OGdiUmdhS1ZCa3puckFzUjcyVlBuUm5lMkI4cDVWTG9WVHdEeFpVVXFaaGFEVmlEZzFuX0ZWUThBa1AwaDFMRTVoVzlMQmfSAaIBQVVfeXFMTlo5ckpSMThYbWpVQ2lNazZqSG1YWnlPMVh6NHItQnV5TlhFNjVNQk42LXVLeDNmaFhveF9MYlVCeE0xaks4dW91QnpiSzEyUVdoVXFuV1Jwc05LeUQtUkFWaHotZnhTQXluSGZnSU5pZHNxM1ozQ05kdFlxa2ZOQl9uNkNBVkZGT2hvY2R1VGNocVg2U01RUWpRZ01tb3NycFFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 岩手県盛岡市 小鳥沢二丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 岩手県盛岡市 梨木町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPd2VpeXNBZl9meXA4ZXlRMzQwX3UtdWxOVkwzSlNEcG56aUNmcW54d3JhWG9SeFAyZWtGZmpKUTdCRzZ5Ynp6aVZ4N3dCSlNzaGRYYlBCcEdQU1E3N1NNSzhkYnVhay1sVTBRMWN3V2d6U1VzbC1hc2NHQXpwMEpqaTA3cU0tWnhqYlRnbm1PYkw4NkhFVWJQLWVmUW3SAaIBQVVfeXFMT2NxRHJka1V4REowT2FPX0NHOVAtTFp4ek5GQXQ1UWJCRmRsMl9HMmtuUFY1MU55aTFQSDNCYlRMa1BPVmxSTHZUSmNfNy10SjRUemNfUGZBN25LdklxYUw1QjI1QXR2TE1CQnlrQWVwLVJ3VjdBWEE4OWhBdzhfc3N2Y2FheGd1bTVNUldVUTY4MXJ6R0tSRHY4bndlMXp0N1Z3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 岩手県盛岡市 梨木町11の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 北海道枝幸町の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 北海道歌志内市 文珠高台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMkFoaG1ZUU1HOVhNTE5vNzcxdU5hb2E5blVNUHlGWnh5V05BNkl4UHMtOUlTRk15UDZGa1BoWmEyZ0o5S3BJVDhPOE1VZlA4M2NYTGZSN1lna2liTk1sUE0wd1dtN3gzemNfV1NIQlo5TnJBMlhOeFVnX0VSbzUtX1RPLWZXMVh2VXBHOUxLT0ZWSU93dHVOeVVEOVbSAaIBQVVfeXFMUHlQQ2V0X2NjZktyS1hHWW1mamJrYnNSbHNYZE9RUUx1VEszekZCMzlJb3ZSMFA4Njg3dmZsRTNpOWlNQVNTelNLMUxsZmVjWXBSblpGZ2psTXNoOWhHVF84ZmgxZWd5RnpfeVA0SjYtSElnQk5DRmVGWS1hNjdubjJrLU95X2laeDZkUjNFUGpmbndIbjBQQS12Q2NHS0hUTVh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 北海道鹿部町 本別の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdk1FbWEzcF9KSTJlM0JLN1k5MTRySk5QalEzVF9mTHVKSFhCLUp2OEdJbi1INUlVVGNlOGRDbUNEVEM0VkNzTk5oSWVYLUFwdWM3MnNDY0VnS3FmTEpkNjN1c2gtMmxTOXAxemtuMmlSUlVtX0ZKb21YVm9IdENEOEFmRG5tdE05MllSTzhkOGVRek5lcW9LSnhMM2zSAaIBQVVfeXFMTUtMRmk3Z1pVLXlzdlNBNXdnMGJFZXE0VUJJNGU0STFnNVNJR2lacDZ2NTIwMzNRaENBMEZfSVlnSmxsMDZpejdmeERrSVkySFlZc0VpVjU0QnNsUDlPb1kyZnQwQl9EY1JyOG9sYjRDUGZjQkdQZ3VKRnBUS2s1aEg0dU5fdk5YVjlWUjJmdVhKQzFqRmxZNkNmeF96TEQwNUxn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 北海道苫前町 香川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPNWttSEdTc3VrSXV2N0tCdGQ0VlBrcDkzWmcyQ000UGlzS1NGVXV4WC02ZjF3Ykd1RnVydHkxdk9oZ1ZuR3lYUjllU1dJTGl2UHhQZWdZTmVSVnlyOGdSbVp6YVF0aTFuMWZtNUdIWTJhNmt6eGtUXzZRYlNIR3dXT2hncXlCWlU4REJnWXJRSkRYb050bzRxakNOMVhINTB5dkJ0bmNWZXBqekhpUEZmNFpwN0dKdGVWZ3VfSlJfTmJybUR0R3hNS2s2U2hrdzBmNmMyVUNKWE84UUdsbmFSRTZHZFliOXBXT2Z3UFI1N1JLd9IBogFBVV95cUxOemRIcGhyeDBfb1JKWGN0OF8tTklKUTRSenBsWGJXanhZektldEFUa1pmZ1lYTEF4R2lyb3RIbDVjTWo1VnY5UWZ2SXRkQ1lBQ3VtREVtbVBDdUJYcFVOa2hfYUNNa25kQU90QjIxT3ZodGdhNGZVbXdZZHl3ejFIM1JxU3pVWGR4UWNuZl9lb1FpS3JaM2ZYOElic3JBM1BVa1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 北海道遠軽町 生田原八重の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOb09tMjhRM2FJT0psdVV4MzEzaktvbW5aT3ZEOGdJdjdUTlFUdjgwOU9iZEswUXNZMXBQX2pHZGhLcnRsc0tWeXYtZmRtN3VCOG1ndFFBeXBoUFQyZW9KYkFab1ZTSFRBSS1uSHV3Mzl4Q19Kcm51eW5SVUJ6eDhiWW81alNoQUJoTUc5cVg0WEhpc2dvSDlTQWR1MWzSAaIBQVVfeXFMUHJuZmJENDl2MWxjaTE3aURKTEllODVlLUdRWG1RVWJ4NlBBMldJLS1ackVYUGk0aXMyMDdndGcydzJ3bWVGaHJJTW1JQ0VKdS0tYm01YkRmblc0aFZqYW5LckNoZUtmM25vT3lFakFBd0lxSlVHUUVaOE5UNU5EVWpuWG5sY3dqdVZnVnhSSml4TER0ZS01OThEY1ZjN0ljYXF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 宮城県富谷市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAxa2dZcWpnU0pZTEdmcnQ3SW1PbGFLNFdiOV9NVmVDTTJLZ2IwOVVMY01zYUNBbS1TYjZnb3p1LXd4S1lRMXZCRmdNeWlGRTdmUm5kRTNOZTIxTEk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 神奈川県相模原市 緑区小原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTkdLM01VQ0d4aDF1TDN1X3dZcl9RcU84MVFITTJ2YWlobUdsc1ktLVFNQ0xUcC12eWkwZHBhbjFYQ2Z4UmZuZmdQZFFBTWdNMTRkLUJsZDg4NHNHTkFhUl9qUXRYaXQ4Wl9hdV84ZG5tRG1HNmdRaWdFbzhrdXM1aEd4Zl9RVGxVRVk3LWNUaE9ybnVpOUpfR1Q0N2fSAaIBQVVfeXFMTzM2NGpoZGpZclMtd1EzRHV2bjlPOExkZ1hka1JJRjlGTHNDU3VUSFdBSDh3S1pZMVkzejFraUtmNlhLTGNEOG1WTnJNbzEyS3NMcFlVRzB1c3hMRDBhR1RNNmtoZ183YWg0djFPTG56eU44QmVJeWtJbkFLZUN2Y3o3ZlotdlE1WDN1dElrTEtZOFhZUl9sUXBQSDJCbGVmVjNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 神奈川県相模原市 緑区小倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQanhBWE4xZG9YTFpMMExvZ2NobklXcF9jQ3RnQzZwRDVFQ2ZIU0x5akZrbTlCZEZoeFozWjRuQTdhMm1jLV9ScGxsUFVabURxejlhYi1SQkZaLXhjb3BEcnBONVhsWlU3WHdfSk9WaFBOYVNSUGtxLXFnSEFJZGQzNUg0dGhrY2dNWFZoVklRWkEtWXpZTUdwWnRNck3SAaIBQVVfeXFMTUhnc1I3eFVZazNEWDF3aEtZZTRCeThzLWMyVktoQ1V4TXl0T18ybE85eTV1bmFvUTBlbllRTHBkRXNMSzl5SDdsblU4b1BrdjJ6Q0lNc045UVpVemw0bU1kekpaNGdUeGFzZ2hBWUR0blhIc0RxdFV3YlZYVjdVX1dEMWhZNm5aZFRmbjNtelI1UDR3ZnZaV0tyRm94bFhfYTVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 神奈川県厚木市 まつかげ台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRFBBQWdnUnJXalctbU5sUkE2WF9TdC15YXhVRHpPQmtTVUpkTFB1UEVvel91NTBIQ19NZTd0R1ZkWmlOQ2hfTm5sNnJ4Q0MwRkJVMWQ3ZWdVZ2RIT2hwUERrTW1oX1VzTHVIVTZVMl94VzVHREtaMkZUOXRyVzZVXzNiN2N5czhxWjNKZjMzUVE0RG81VXBTRmg2WF_SAaIBQVVfeXFMTnhEUlA1dU8zVmtXQTVod211d0NTSlZEd0xCNGxVSUwyaUF6eUdpRWNYbXQzRnZrM05FM2tFS01pS202Mk1lSnVVS3ZfcGtZVWhhQTh2N2FqZTVQZnl3aWN3ZjJIUzUxX05Ma1VKODNYYVZpbnhxSF83bThmMW0yN0FCYWNmcXJkZEZaWEVIYmZtMHZqM2g0XzcxdE03V1dZY2RR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 神奈川県松田町 松田惣領の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNGNWbnZlalR3My1DUUwtMURzdUczMkJuWXBqY19ObUp5eTdNVG5XVHFQSXFPMUp5eDJ0NW9fSC1kZXVtS2JubVlNNzBtTnRmM3VDOFV3Zml0bmo1YzdHVVFJQkozY2REcTlhVWhkeXF3UmtQZXRUVk9RWGZRUDBJNGlCTkdJTmVyWV81THZJSUc3em9RSXVpUnByRTfSAaIBQVVfeXFMUGs0NDI0NGc4UGxod0E0QnI2UjExSDM5WGl6aGVjX3h3RzNnckl0ZFItQnlzaHMwRmlMYzhKVTJPckh3X19IZVlkbF92SUo5T0JZY1dMM3FsczVDN2VDSVVDbDVrWlVXT1huUEFFTllZbnp2QS1xSXJDbEFxdnJHcDRmV2tHbHAxSDV1dG1RZlQzUkFjMTBsOHpueWhGZXc4UVpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 神奈川県松田町 中央農道付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 東京都青梅市 裏宿町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaW1LR0Z4T2JWTHRRS0xzQVJHeFRrTkF5WkVzNVFFUmoxc29hYmZpZTEyZVNGenVJWnpneFhyR1lOb2RSNjF3cG5lMHE0eFFfZV85VDQyV2xDaUx5WkRDdl9abkVFdE1maUN6bkVfTTFRR2xoaDlUQmhfd203S3hna09SNXlyM2tlZnlXeG1UM3I3WFFVaXBvZmcwUHfSAaIBQVVfeXFMTUZjUVdoSjVXVHBQYUJraXRfWDJBN0dscDA2X2dZSHFWQWNHMkg5UDZScnVhd3RzbF9URGhWRndiaFJGb2NUcjYzZUVSMGVVMHFFc2lSWWV3TTRFQ09feWsyNGkxbGEwUUpuaUY5TGFDeTlEeXVVUjI1b2FmS3Y3YnBNaUV6WW9tTHNBVGRSckxzdXJoMDd1eVVNZ1JrRE1iZVB3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 東京都青梅市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9SSl8wUlhXdTRtWGRuRGRURUR5YXR5M1RjMmRwRzI5ZVIwUnFfREZicjY2QV9OWmlPcVRZM3k5TTZPZ3VOX3p2b21JVVB5SktOcEI5Z3Bn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 埼玉県小鹿野町 両神薄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc2FqLVJuZXQ1b0RKc2trSldhdzRrQzdScWQzZnBxNk5UZXcwNzUxOC1SSEJORFJ1YzRibFoxQTVtZWhkeHlaOGJxZXRoazZUZW9wcnFZZjlqVUVsTW5qaHY3bWtyaWF0SUc4Q290aDRIZEpZR3V1R2ZMNzNQLUpyeWNsTnlDVUsyQUhCQ0ZFM3B5Sl93bDZfREQwZ2bSAaIBQVVfeXFMUFhmRi1YeGw2c0FPZmsxWURaMFFwMHl5UFUxVExCbU9HNHFpbElidHVWbGotaGhzVlMyTXZ4Z05jeFZGWXV1TkJ4SHFiU3l0cXR6NWwzWUZZVDdYb01GVWR0QWE3YjNjNTBDakcwNlJKVV9IOVk4dDVFMkxWYnktY0tsb0JOZ0wtV0tPSGF3dEZrMk1BSTAzeGptVHZHODlkcU53?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 埼玉県小鹿野町 両神小森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYzFZeFByQi1UNDNMc3lhTmJrRFdRajJBQTFBTVZJT3RjYnJITzRXNWdzbnAtTmFWZFVGMVRMVzM0Q1JQZ2JlSzNGNTB1ZTRlMHAxS1ZkOWx6dGtJV2VCYkVWakhpSklNZ0dxSVpsekJiWmk2WWFTOUp2SUpKdklTN2pudTRBRkZQX0JoUm1HTWkzQlRidEdYTzQ1QjjSAaIBQVVfeXFMTURIbG8zZDZveGRqa2tIRVlTeHllQ2dCZWFpanVtcEtLazYxNndKanVuU01paTZJV25tbVlHRk5CM3N0RVdTNF8zSS1SZE03MlF2OUMyXzRZcDhoZk9GVUF1b0xMRzd4WUc2SnNPSmxFNkJLa0tzX2FWNmV1enJpSF9iT3NDNWo1MDFvdU9XZm5SV3MtVkZpYnBxVnB4VmJjVnNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 埼玉県飯能市 美杉台7丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWjI4OERlNk5uaGVBeG12elJmVG9pUmR1VHBvS2t4OXJWOWNfV3Z1SF9JZ1hBVjZlUWpVRTczd083aDRSZ3E1VnU4c3pOWXFqREVvcFJtcElOTzRHenVST2YtSUhzenJlTm1KbDYxTnZZWG0xRzF4RHpjMUNPR2xGZUxoRG9zQ0kza212QThFRzhiYVNkY3pOdzRCam7SAaIBQVVfeXFMUDJaRTlMU1NzbjY2aFV2ZE9iYTYzb29ETUNPNVpIVjBVRUF0REx4U3Z6MTFCSkRjbFdDcUd0N2NpMGt6ZnU2TEJraXgzYi1BQ29LYldmVk9aUG9Va3hUZUI5cjRUT21DanEyLVpIakxHU0Jrc2NlS3VTM0ZoV3E4dzhWZE5pMURJWHRmdDkzQjNZMGhhVkNwWUhiYmtCcnRvaWpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 群馬県前橋市 富士見町小暮の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOC1DSTVqaVptWDBPWHJ3ZnNmMkkzZ1ZwLXZ6YVRlbGpPR2tkUnJ0VW9kN2UxRUE5aTlhZFp0LV9zWGdSX01Hc3NPZG5ZMmhPSU4wd2hScEh4bHVxU3B4RWRvTWlGX0VtMjZzeVR6WjdtSE02RWc4QldraTRwc3F2aTFPSV91dFk2M1ZmY0FfdmljU25KUGtrLUZPQmLSAaIBQVVfeXFMTXhCUVVpM0JLRDdiNV9yYzQ3WW5DaHZ4Wm1tVVhrY093Wlo1S0tSam1iSmFsMVNEN3dIUU1keGlmLW5kMHBTUkZkNEs2ZGpNcUh1aGJLUlJpR1BxYWpJTS1PYWdJQXF1X3MxQ0JHY2VtTUJ4OEl3QWM3S09SZ1hzVmFQZkVUMUxGQnFPTGwtek1RQzNaSkZZaExqSnFQT2xUekF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 群馬県桐生市 小梅町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQV2Z6RW9rSFpzMThOQkNUZ2tUX3VRWmV2SnFCeTJlaDZHVE9PZnRkVE8waHQ2c1VDd1FuT0hHZHdhLUhfZmR6bHZPbzh3X3FiN0c2S3RKYzNrMnN6X0tiQnpQYXMxeUtZLUk5cV9kVDVtOXloYVdUd3pSR2Voa3A5OGp1c3ZudzhVYnc0am5GV1VxN0RNcVlXaENIWGLSAaIBQVVfeXFMTldmQUZVdkJSbkpOT1NfRVlPQTNjZ0gzQTFnZy10RWxGemhac21DSy0xR1FnVGRZLXlvenFqdzlmMVpJUFJHTVZ1QTE2X2ZucmswTDl6RWlJbHNkd0tCSC1tT2UzaVRYUEVpRF9mbG9IR2VqaWlSODBPODBXcnVTak82aUo2MWtfX04xSEdxR3VMeVp2Si1XaER4QUE0V2QtRm9n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 山梨県上野原市 大倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUTU4blEyUXJHZ2tCT2dLaVlOcC1IMTlHZld6T3pvdUlOa3NXejB3SDNqTWVpS192YTlPRkJzMVpIZzJZN251cU4xb2FuX2stYkh5dzNPZFBkR2cwNVVkakpValVCeFhrcjdBaHFhejQ4Tzh4eTVRNjdpNkstWVp1Mjhkd0FiT0tMSDJINTU4ak9wUVhtNlBqd0pCc0vSAaIBQVVfeXFMUDY5VHpUYkRqOWRST0cxb3V0aEFRM1pkQUFIVFNSdDk2NGtNZ1ZuMnQxNlhaaFFGc21yamJHR1JVa1JMTHlwckFQalRrLW5ia0dFUXE3Q3lWbkVfbHFwUTVtOUI0TGZTUDFLYjhQT3NaenE5cFBwRkNaYVEwcElEdFZlSzBXaUZxSU1iRlpibjBqVmRnMldJeFFWelNXMVI5OXpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 福井県小浜市 尾崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRFpwOEw0THgtSllPOFhTeGJtZ3pwZENzMk1TMXF2a0RMSmtOcDFTWHkzNXZsWHA1aHZFb0YtRHlPZjR6SVVsZG9KUFlZNUEwdkxkRGREdElKcjJBekJLS1VBSGhiZkkwemFfZGkwSGEwWndLMDRIblJjZXgzR2hWRHBYM1NiN1RUNllaZndHYVg0MzJMY21CTDdnb2LSAaIBQVVfeXFMT1ctdF91aVFJVUJuWlJjS1liYmUyRVBlak9yOENMRVVEQjJ4eGpHTUcxbU1EYVFmbmV5dEVRY0VfMTA3RHpKOVFGdV94dF8ySl9uYWRZVmtPQ1FKbFhSX0pqT3c2WkxOSEROZVR3UGhDdjdzVGMtUHVUVmxRUjI2OHJIWFZBeUJHTUcydWItaGFDV0Vka21KN2NoWEhIdUF4Nk9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 福井県小浜市 中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbXZHWEtjS0ZDbDZsZnhMMTNaUHMwcmg1Z3NCWUJmSUJpaXlxVzZ6ZThlcG5KUFRBM0FlUjZ4OFZLS1M0Vl9NcUt3dTJrSGJOV2F2bGVEYld2clAtQUlPTVBYZ2pXWTNPRXNBU3Y5VjRmRDFrZmhFaDdTcVVtY0ZRMkhJU29vakRFVDhDUEhPQ3VNanhJSmFlZEdRR0LSAaIBQVVfeXFMTkxpZWRfbDltNFZXZUFGbjlKcTRNWF85NVI2WTdYVTRRR0xHbldEQlVYclNNSWVWWmJSN3ItTjk5RG8xY3gtY0VfQ3RMNVFleUlRNExwSGFQVzhGWlNlVGxEMzRDNDg4NXpJWDR6cEhzQ2gzeU8yNkRGOFdLM0dabVNHRXE1QjA0cVd2RUszbjA3N2E5N242NDJnNjFBejQ3WFRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 福井県鯖江市 西袋町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPd0pwTGJ2NUdWMVhfY0xvcmczVWJaVFlQMUhjbmc2N0lwbHFMcnQ0RC12T2tUVlZEM0gzUl9MUngwU0pieW44M21VZnBKM1pGLU1lRzhYbEVKdllTOGpKOUkwejZRZnJvVVZKV2d1MlZFbGdqUnhxSkhmb0tPZ1JRMWVQbTR4OC1XV3oyQ093bS1GbGlvRTdjN1JJUG9BOURnajlONjFmZllEeTM2d0Q40gGiAUFVX3lxTE9NV0RFci1oZHF6cmFNdUhLMVhDSFJXdE1FZmZKNkV2TlBYaVJNb0gtSDJ5d21RbmUyVzY4clpwbFRUa0hSeHRqR3hPN2UtRGR5SXFhRjIxNU1zci1Ka2Z2MzJnUVhPWEJONkJpQTIzd2pGMC1paThTMkd4VTE1TXYwemc4SFh3SUpVbmFrYTB1MDJLdEpHVzBibUFhTEhnMm5Udw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 福井県あわら市 坂口の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 福井県勝山市 平泉寺町岩ヶ野の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 富山県黒部市 宇奈月町音澤の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWFhJTGJNUkcwLUlycFFzYjZESHFZY2tqMzYtdjR5N2V4Z3dpNFczMVZLcTc1cDI2N1hhQ1ZoN1VvNVliSllJbmFTSzJxRkVGV3Y1WkJmVWpkcURXWEVNMXI1aDZXYVYzV3doSmV0TXZ2ZWs5c21WeTF5d3JJSWwzNWdBY2QyZlB4ai1QUnQzeXV5ZEJEUDV6NVZ6RTHSAaIBQVVfeXFMT0VYM1VLRmRMSThQZXhtb2JId3NiYklOOEF3U2dxcEg3bGl6TERaU2hEOExDOG9EU3o0TmdvRk1lV19KUFFjYmluUFo5RWtZQkxaMFdONXpGLV85Yy03Uzl4RVhCaGFlVnp1c0FLQU9FTzBiUnBsV1oxNnlyRU91VWhZWDFWS0VkTDZlZ3RCRVVJdDRid21SWmZ0UkZRMGtDS0xB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 富山県黒部市 宇奈月町内山地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 石川県中能登町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE8tWlIyOU1PU0dYY2wwUmxDQWY3VDlWT1dpOHpuaW5lRDFKbW9VV0phZ0RzemkxbHVmLVc0WVgtNEtaTmxCak4wUEFMaXZ1ZHAtMS1Sc1FEVQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 新潟県小千谷市 南荷頃の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbEVMZ0laSGlVSFJjZ1Btc19lVVNnbW51ODJIWHJkQWJkWHZObzh4R2lSb3l1dlc5bjBINXFscGZlV0hwVllnTjJLQ01aRVJrSEFPWkRZODNlcjA3Wll5czQyWkZ4cUhmenN2N2Rfb25fbkVPTFpZWGszUjRfX01VMFctejY3UlJuUWNDZkJiV1pYNzZFdzRfdk4wM2FUc3FuMllPd0plOEZGaHdrOUFaSmRPUVpZUzM1OE9BVmc2V04zcUZXa3hLUnY1RVpLQUY0eE5HekhwcVJjNGZuLXk4QUR6b3U1TzBEQndDM2pNRWxUQdIBogFBVV95cUxQT0xkcm9ubVMxMHgxMUpoS2ozamJlX2EycVB5elRvdE5IbzNHWndCcnk5ZzF2OFlScWJKX3ptS0dlS3hyejlOSWJRSmRRSDVPRUI1czR0UDB3WVBsYzlodkVnSWNIaGU2Vml4dG9MR1hObU0tLWhZQXNkVFg1cGJnRExaT0JFUTFFbnRId3o0dldfUThsaDhNc0xyMmczZnREOGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 岐阜県揖斐川町 春日六合の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaWhrQ2hNS0RDcjdybXprejFhQzlFZFI3dXpzUFNOMk5IQkUxaDVWV0tzRTJXS2JnaEE1X1EzSG5lNVZwVXJlRTM4ZTZxSVZCd3FPeTctdUJSUktqNmNOMmtJc0xpMEFPZFNadDNIMTRBV3V4Q3FTMmdJSjlJQTBneVBTamJhM0Rzejc1c2xQS1FyLVcyNkk1OGVtNzPSAaIBQVVfeXFMTnRJZktUZlkzcnExODBMbXpfMDdoM2ZseUNjdEh5elA0WTdUYjdrXzBGcVJxdEtTNmRVWUYxalQ4RHB0OWdILVFOM3ZGVldJSGMtWng3TmtWOVlDTy1NSUJsaHhndnBIdG5rcW04Q3l0NG9mT0wtcHdlNHI1Uk9OZWM5QkUtd2oyb01UY25PNjdVQ2g4LUpOa1R6V2c5V0JsY1dR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 岐阜県高山市 山田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMmhWUkx4cG9mTTdIbnV0cDZJa3U0SzRsNzRQM1ltbDQxV0otdjZacnVER2VDOFFyTmthd1RfMDlrS1hqUDZLSEF0Wlo2c1RfU0RvU2lJZEYxNTFZRkFSZDUzYnNKYXF2VnJQZ1NlVTc2clo2eTJSMFB0ZldGcXJHRWswUXk3cUZBUkZCTGlsdkRuWXV2cWF5SEkxcULSAaIBQVVfeXFMUEg0RWJUeDBTT21hTHhuNHA1ZzVNc2FoajB6ZGFNLXdhZWw4YzJ6RDRQMFlNWjB2OC1vUExLeFUzM29PYmlGUWFXcmZYcE92NFRhYmkzN3ZKaUxvWFZyNTZjUUNUVTl3MXpFeTVDZFZ3WVVYbWRuVEQ1ZmVVVThrV3V0dUJpalVnV2VpUTlYV0h4Y25HN2xSVmN2M3BYR1lmRkVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 愛知県豊田市 稲武 小田木町水別の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 兵庫県朝来市 和田山町和田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPU1RHdDhTSUQtQlppd0NsS3o3ZUJJOWd4eUpUU3VvQXIyNW5SYldjc2VlVWlBTUU3bGM4ZmZnQ3I2ZFRZMVIzcXhBSzhKaHdLQjhJSUk1RUdWZmRRX2R4d2J3eTVkTjd6WW5CUVFKRlFSeHlKS19lTW9qMUw0SGhWbzNIRnpZYUwxZXVvSDhzUWEteWdfc1U0SDg5ZzbSAaIBQVVfeXFMUEFZUWI0VjRqdURxNXlKdV8tZzQ5WV96YU1BSG43a2dMNUNfTFhQRWhtN1VmajJFS2RoN1pmaDFXUmxsRkNBa0FTSEFsNjV3R0R0TndxRlNuM1JiMkxOLXBwelEtWHZjUDZ5aTM2QnhrYUlSQlYwelE2X090Qk44bXJsNmdBX2hiWHVjZVBaWVREWWo3WmcxYlhCd01ncWxZOUtn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 兵庫県宍粟市 山崎町梯の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZU5LeDZtbGRTZnlqaHQxQnJ3aXczbEU2TjBsV1laeGo3Q242TEl0NV9JeHBuZl9nUkRRUmp4OTk1dzVDMm9UZnNjVHBEcnZ5N0dtbjktTzhSeEwxYmZHbUNhMnhUbkM5QmVZdTNMTVlVZ2hTYmpqTDVzN09SUVhIT1FManpLa0ZwdTQyWUt5ZlBkR0NpNnBHdEZ1cTTSAaIBQVVfeXFMTm9WYU96a1JUXzYtSUpwLXlwTEpFcWJDS2JnY3dBYUJOWE5IMkVZX3BqRU1mOHFQX2FvUFZrYmo3TGxwSEk4RXlaWkE3R2JOQnRLZ3lCWW0wSDlYbWhBdDJoakczTTEyRFFDRFJfSkpCaFB2SHBrZVNPVGZOaUdPYXRuUXc0UnBaSm1TbWFra3lWQXN0SFJRSmp6QS1QdFZZci1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 滋賀県高島市 新旭町饗庭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNU2tRSlRxeS12MS14aFZ6cVVObTRaQ0VrVVgzMG04Sl80OHZrclRxWEhJVkxJcUNqb21EWVpfeGVZYzdPeDNJc04xY0dJX3daWEtlZFVqa1JNbUR5bGp1aS13bFc1RXpUamhlX3hzWWxSZkxUMFR0d0pOMV81YWQ5dHJYbmZwaFJ1RGRWSnYxUkFSOTFWQlhabThoNnVULXNVWHJwaHlPbzNLOXBmaFFjZjFVUEJld3FzUTVvZDZmcTY2N0JBUy0zanpTeTQ1N0ZfUnA5dEF6cHJNRzFBazVvTmNTSzQ3V2dwZ1duU2tXamJsZ9IBogFBVV95cUxNdUlDWWI0T0g5Vm42Z0syTS15eU9UOVdpcWRxQXBlSWdiRllCN29hMzZVbENPMFFjcF9xcnNCQ3dtSktNRXRfRm9hM1ZrNWJsUnRSbThvSFdmdTdNWU9HYWdpZ1o4Z0pJNGxKbVZZUURvRGpSNlZ6ZEdDLUw5TnpXS0FZa1VHdmNNYVBGRkZKeHA5S1dod2FjWDZ2VUc1Rm9qQXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 和歌山県橋本市 学文路の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 山口県周南市 大向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYkllTjZCb2JvYmtFUlhpU3RpZEtudUoxR2Y0am1BN19UOENtamNxVW4yejNfZ0Vxb0ZlbFZQYXVwQ2ZjVGRHOGtSYTk4QnFxMHhjTXJuaVdzRE10Ql93ek5IQ0l0UExILS1xbjZTU1J6QzhTUlpPYWJqWmttVURVRHdoX0Y1ZEtuLWl6OUtTNkF0aGlDNXR2MzNRVmvSAaIBQVVfeXFMUENYX01yRzFDNlhWeUhuUk5sZ2tZTkJSQjRaZzVmVDFFZ1NmNEc3bGNBNEg3TUwteHZUMGN5b3djWi1YWjFkVUk0MVZRZ250bmxDQWFQS05OeE1nYl9aUUZjSVoySWx2c2dqaVI0QkZnWGRnVmFBcEdGbVZpd0hnSklwc1F1andDN0h1dnhjQ2JLLXlWbndnUlFET183WTFzaTRB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 山口県周南市 大字大向の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 山口県周南市 鹿野下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPOWswU01mbXBXekc1Z0poZzBQZHN0dzEzMG03djYwOWZxSGlFSG53alphZ0lvNE82QU5sNUQ4VGZfUGhnOVRnT3VkNXhJQmtfUWhZcWoyald6bWVrYW5USWxMd0hZQWJqcVlLcWtpd1lWNTJQRnU2dE8zUFJVajYzOHB3bGYtQ2Y3eERadDFUNnlEZGh4eG9NQ0o4MlXSAaIBQVVfeXFMTklTSVctR1piNTd5d0h2cDRocEZSZW12UktfaFdUTVZLOUdiTFZwMHF6RFRTYVU1YnNVZi1ra25VcHNLaVRZc3pqYU5Cb0VHNC0wVjNsVmV2X3lmaEUyZWpZc1N4QVRteHd6UkZhYWdaSm5aTVBtYm1fLTNLdFM0Mk5EQVpWUVVqdVFoS0ppUDV2dXR2RXNnajhyYURUQ1JyMGln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月6日 山口県周南市 大字鹿野下の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月6日 鳥取県岩美郡岩美町 荒金の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":10},{"pref":"福井県","count":6},{"pref":"岩手県","count":5},{"pref":"神奈川県","count":5},{"pref":"山口県","count":4},{"pref":"東京都","count":4},{"pref":"埼玉県","count":3},{"pref":"山梨県","count":3},{"pref":"富山県","count":2},{"pref":"群馬県","count":2},{"pref":"岐阜県","count":2},{"pref":"兵庫県","count":2},{"pref":"鳥取県","count":1},{"pref":"和歌山県","count":1},{"pref":"愛知県","count":1},{"pref":"滋賀県","count":1},{"pref":"新潟県","count":1},{"pref":"石川県","count":1},{"pref":"宮城県","count":1}];

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
        <span>対象期間: 2026年11月6日</span>
        <span>·</span>
        <span>公開: 2026-11-07</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={55}
        periodLabel={"2026年11月6日"}
      />

      <h2>全体概況および主要事案の分析</h2>
      <p>2026年11月6日に収集されたクマ関連事案の総件数は55件である。都道府県別の集計では、北海道が10件と最も多く、福井県（6件）、岩手県（5件）、神奈川県（5件）、山口県（4件）、東京都（4件）、埼玉県（3件）、山梨県（3件）、富山県（2件）、群馬県（2件）と続いている。本日は人身傷害事案や緊急銃猟指定区域周辺での活動、生活圏のインフラ周辺における出没が顕著にみられた。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域・自治体</th>
              <th className="px-3 py-2">事案類型</th>
              <th className="px-3 py-2">個体情報・規模</th>
              <th className="px-3 py-2">特記事項・環境</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">山梨県早川町</td><td className="px-3 py-2 text-xs">人身被害・駆除</td><td className="px-3 py-2 text-xs">駆除2頭</td><td className="px-3 py-2 text-xs">91歳女性が襲撃を受け負傷。猟友会により2頭駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">東京都八王子市</td><td className="px-3 py-2 text-xs">出没</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">緊急銃猟地点近く、住宅が点在する地域での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県盛岡市</td><td className="px-3 py-2 text-xs">出没・生活圏接近</td><td className="px-3 py-2 text-xs">1頭（各所）</td><td className="px-3 py-2 text-xs">梨木町の学生寮付近、小鳥沢のゴミステーション等で目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">石川県中能登町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">体長1メートル1頭</td><td className="px-3 py-2 text-xs">おり（箱わな）による捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道枝幸町</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">午前9時00分頃、神社から美深方面約1.3kmの草地で捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">和歌山県橋本市</td><td className="px-3 py-2 text-xs">痕跡確認</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">学文路の柿畑において出没痕跡を確認</td></tr>
          </tbody>
        </table>
      </div>
      <p>山梨県早川町では、91歳の女性がクマに襲われて負傷する深刻な人身被害が発生した。事案発生後、猟友会によって2頭のクマが駆除されたと報じられている（※1）。同町内では保地区においてもクマの出没が記録されており（※2）、集落近隣に複数個体が滞留していた可能性が示唆される。</p>
      <p>東京都八王子市においては、緊急銃猟地点の近傍にあたる住宅点在地域でクマの出没が報じられた（※3）。八王子市内では小津町でも目撃されており（※4）、山間部から居住地域にかけての移動や滞留が懸念される状況である。また、岩手県盛岡市では市街地・住宅街周辺での目撃が相次いだ（※5）。小鳥沢2丁目のゴミステーション付近で1頭が目撃された事案（※6・7）、および梨木町の岩手大学学生寮付近で1頭が目撃された事案（※8・9）がそれぞれ確認されており、いずれも人間活動が活発な生活拠点至近への侵入例として注視される。</p>
      <h2>地域別の出没状況と詳細傾向</h2>
      <h3>北海道</h3>
      <p>北海道内では計10件が記録された。枝幸町歌登上徳志別では、午前9時00分頃に神社から美深方面へ約1.3km離れた草地において1頭が捕獲された（※10）。このほか、歌志内市文珠高台（※11）、鹿部町本別（※12）において出没が報告されたほか、苫前町香川では出没の可能性（※13）、遠軽町生田原八重ではクマの痕跡が確認されている（※14）。捕獲事例も含め、平地草地から丘陵地にかけて広範な動向がうかがえる。</p>
      <h3>東北地方</h3>
      <p>東北地方では岩手県で計5件が計上され、盛岡市内に事案が集中した（※5・6・8・9・7）。学生寮近辺やゴミ収集施設周辺など、人工物に近接した空間での移動が同一日内に複数報告された。また、宮城県富谷市に関しては、発生日自体は不明ながら1週間に7回の目撃が確認されたことを受け、注意報が発令されたと報じられている（※15）。</p>
      <h3>関東地方および山梨県</h3>
      <p>関東圏および隣接する山梨県では、住宅地近傍への出没が目立つ。神奈川県（計5件）では、相模原市緑区の小原（※16）および小倉（※17）で出没の可能性が記録されたほか、厚木市まつかげ台の住宅地（※18）、松田町松田惣領および中央農道付近の松田山中腹（※19・20）で目撃が確認された。</p>
      <p>東京都（計4件）では前述の八王子市（※3・4）のほか、青梅市裏宿町で出没の可能性が記録され（※21）、青梅市内では発生日不明ながら出没事案が報じられている（※22）。埼玉県（計3件）では、小鹿野町両神薄（※23）および両神小森（※24）において11月5日から6日にかけて出没が認められたほか、飯能市美杉台7丁目でも出没の可能性が報告された（※25）。群馬県（計2件）では前橋市富士見町小暮（※26）および桐生市小梅町（※27）、山梨県（計3件）では早川町での人身被害・出没（※1・2）のほか、上野原市大倉（※28）で目撃されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県が6件を記録した。小浜市尾崎（※29）および中井（※30）、鯖江市西袋町（※31）、あわら市坂口（※32）で出没情報が寄せられ、勝山市平泉寺町岩ヶ野では午前9時00分頃に痕跡が確認された（※33）。富山県（計2件）では、黒部市宇奈月町音澤および内山地区の音沢大橋左岸側下流約500m付近においてクマらしき動物2頭の目撃が報告されている（※34・35）。</p>
      <p>石川県中能登町では、設置されたおりに体長1メートルのクマがかかり捕獲された（※36）。新潟県小千谷市南荷頃（※37）、岐阜県揖斐川町春日六合（※38）および高山市山田町（※39）でも出没が報告されている。愛知県豊田市稲武小田木町水別では、農道上でクマらしき動物1頭が目撃された（※40）。</p>
      <h3>近畿および中国地方</h3>
      <p>近畿地方では、兵庫県朝来市和田山町和田（※41）や宍粟市山崎町梯（※42）、滋賀県高島市新旭町饗庭（※43）において出没が記録された。特筆すべき点として、和歌山県橋本市学文路では柿畑においてクマの痕跡が確認されている（※44）。</p>
      <p>中国地方では山口県で計4件が計上された。周南市大向（※45・46）および周南市鹿野下（※47・48）において、それぞれ同地点での出没痕跡が確認されている。鳥取県では岩美郡岩美町荒金において記録が残されている（※49）。</p>
      <h2>リスク評価：環境要因と人間活動圏への影響</h2>
      <p>本日の記録からは、人間活動が営まれる生活圏への強い接近傾向と、誘因物・農地への依存が読み取れる。和歌山県橋本市では柿畑での痕跡が確認されており（※44）、結実した果樹などの農業資源がクマを引き寄せる要因となっている。また、岩手県盛岡市小鳥沢ではゴミステーション至近での目撃が記録されており（※6・7）、人為的な廃棄物管理の不備が出没を誘引している実態がうかがえる。</p>
      <p>さらに、盛岡市梨木町における学生寮近辺（※8・9）、東京都八王子市の住宅点在地域（※3）、厚木市まつかげ台（※18）や飯能市美杉台（※25）といった住宅団地・市街近接エリアでの出没が継続している。これらの地点では日常的に歩行者や住民の動線が存在するため、山梨県早川町で発生したような偶発的遭遇による人身襲撃事案（※1）に至るリスクが極めて高い。枝幸町（※10）や中能登町（※36）のような積極的な捕獲対応、早川町での駆除（※1）が行われているものの、農道（※40）や草地（※10）、河川・橋梁周辺（※34・35）を利用した個体の侵入経路を考慮した厳重な警戒と管理が求められる。</p>

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
          <dd>2026年11月6日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-07</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-07</dd>
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
