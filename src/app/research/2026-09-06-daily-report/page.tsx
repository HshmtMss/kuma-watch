// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月6日 / mode: daily-report / 生成日: 2026-09-07
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-06-daily-report";
const TITLE = "2026年9月6日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月6日に記録されたクマ関連事案は計75件であり、青森県、北海道、群馬県、山梨県を中心に広範囲で出没が確認された。住宅密集地や鉄道駅周辺への接近、錯誤捕獲、緊急銃猟による駆除、キノコ採りでの遭遇などが発生しており、生活圏境界における動向に厳重な警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-07",
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
  datePublished: "2026-09-07",
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
      "title": "2026年9月6日 京都府舞鶴市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE45aUlyVXRGb2sxa0NMQ2x4S2Y5QkhqTUxvLXBhRnczY0JCZUo5ZTIxeDNoS2VQbE8wR2pVOUVvYmpkY1A0TElyc0duSXgya1BLQklPSFdkWU96TmdGeHFwcHluNzhtSTFYaEpsXzhJbVRSV3ViUnRfYg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 北海道浜頓別町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 山口県岩国市 周東町川上の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 青森県三沢市 三沢駅南側の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQcnEzZ040NlpWT3pqNzB5WmFmRUMtQWZ2Z0VER3h5blZDSVBHeWtwdVZUTTE2Yjdzemdycm9OQzhlV1lhMnlUVTB0VXAwM2JyTkpLR2dFenJQdnhkU1FkWDRjT1pFYndiLVpTVl9ESllCX193YzVFMVcwUTBHREZhWHk1dzJFRE0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 青森県三沢市 松園町３丁目８番４号の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 群馬県嬬恋村 JR吾妻線万座鹿沢口駅の裏手（黒岩オート裏)の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 長野県軽井沢町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 三重県尾鷲市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9HREtnTzlCMEJSLU9OLWs4Umw1OE5VWFd6eUhXNWp5ajgxMVQxNFhyYXgyY0FqNzhQa0I3eDcxNzM4VWRndGdxckRDNXBPSW03NWJBWDJnRjJRd3ExeVhuWE1hX2w0bHk4a3E0TEhhTHo?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 青森県八戸市 鮫町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcmFjNmtIaDdrNW9DVlN2UVFzNGNuR1Z3cDU3aEtiT0RGMGJwQlROWUI4MGZ3QlYwckYyY0NqeGlOaWZHWlpFbjdkNnJYRGVFNC0tUU1YT0RZOHRwNnBuZDRTQjMtM3hsdDdNUXNWNUktWGZnQXMwM3FRcXk0ZnBNbmUtZTBkNUVfWlJtbWtabWg3THpKRTBFZUE4RnDSAaIBQVVfeXFMUENXdFJCMEJWNmdrZDRZVk5vWTZ3czBYUDAxSjNRTnpTQldsVmpIemJMbHAtVURsQVlfWTFnX1VxS3Q1T2NBMl9taEk1Vm8tWmVRUGFILWFrWF9TMVNLWVJ5MWJjQnBmZ1JCX2UyNEdzaWFJeW90TXFnRUJuN05rRWNwemdteVg3YXdqS3Y0MFVvQzdVb3hVSXN6SFg5bGhiSXZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 青森県おいらせ町 住吉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWkNxejBGLWRCdEJXdU1oUHZYMW5wM0p1Nl83TjVQSzNyajBNTGZhSUlNQTUxRGlJcXE4eXIydUF4czZRcUtkLWRyckFRUllpTWVjd0ZUd01LQUliS3hwTk9qTFZrUVBwZXEwbHVMQkJuMV9Dbk5RNjlrSUVhYzRMQkNkUGJxMVgtUG5GUkYxNG80VDI1VmljaTVZYkrSAaIBQVVfeXFMUF9LSzNuZUNkRW1ndnJSZEJuSWUxMVcxRS1hNmdjQmt1VWhCOVY3R2Jod1ctU1FSRWFjcGU2blMtaHRMVHJvaDc4Y2Y3WW9jSTdfVFJpNGoxSDU2RFBRMi02U191bFp4TkpMTjBRQzMyR3BlQTlCRGtxQlg5WTdOWGFhYTh1VDFuTE9Mc0xCUVRGWlRTWkhLbERYUWF2MThFNE93?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 青森県おいらせ町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBKLU14OS0wS2hGNXR3ekQxdlVLUDFnOEpkNFdwT1NvcnBZRF9MbHdDX0ZwSEJvRC1mODhCNkJnRUt0NlJzWTR2dVRJRlkxb19zSTVFVDV3VTRIUUpDOVZ4bGIxNy0yak95NWl4WHZuNUlQUDlaeF9pQm56RdIBgAFBVV95cUxORVIzcTMtVU00cmtXaWlzYU1SX2VESjlGOU5TMHhpWG0ya1VnMkNCaGhwOFZXOFdfeXhMY2NEbm9CSzVQWHRzQjJpcWlxZzNhT2VtUkFXb3NHRlhSMlhKRjctTHdRN3VHUmdxU0t1OW1EaEFXNVRVU0E0UUFzUVIxaQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 岩手県宮古市 西町３丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxON2tldVdnb3ZjVEViaEpqWG1DUGVET2xsaFdsdlowZzZJLVp1NFYtdk9yTVNLSjFQTi13aWRta21BRnhnTzQxdllLeTRFLXNVcWJ0Y2tsakptd242eVFua3dYdnNTWEFxOWFrcFAzMldPekhldjR1b3FlYkVuZmllVjR1NUktQk10X0ZWbVVNa2syYTdSeUxxYVUwZHXSAaIBQVVfeXFMUC1EZVNGUzVPVDV1V2lPYXFHVHc2MG11R1JONVQ3NkxtRUlEeWwwUWdWS045dXFEOTJUcmFkOHdubThmTF9FZl9PZUd0eUh1SGxfekw5V2VWclJXU21KdWoxUzVGQkxsU2lJVDh0WEZTRWRhbVJ6SGdpd01VVG1Ickd0TTZMT01fZUZWSWF0WU1uQ2R2djJId1hnODdwQXdPZFpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 岩手県花巻市 高松第２６地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNTGFjTlRGNnZ0eHlRLXdUaWR0RzNRdVYxclJKNng4b0NLVl9HNUh1QXVJQThfSXRtWXRrVWtVTkFvRzNwUHdIS3NNNGZ0c0U2ckE4SUFXZ2lQZzF4czBSTzBjdXZIWERreFpqSGtqOVhjeGVuZWs5LVFoV3pPYzZhbS16MlB3eFU0LWZqd2FieXh5RkFpTnlMY3VCNnZKNDdOYjBfV284WFQxZ09OSjJfMnBVeHE1cG5ud0RiWnZRc0lMdDdhNXFJaXRzbnNXOEZOYVAxSkljTWlqeGVlX1h2bHNvVHhiaEtzdE92SzJZb1RQUdIBogFBVV95cUxNQ1p3bGdXam9rNGZsY0ZwaDF5WDFodHZnWGtkN09fLUZpc0FETmRGSUUzN0h1ZXhOWW1OQ1JxZWE0U3R6UndUWmNBSF93VmRMSm8wX0IzYThRd1dITFRsN3FQeUhjX1VjU3lYd3BmWXlpaTB4NG1IRnMxMTdqTTFERFlacVZwNFVKZDkzOWpJdnBlTHNmOUcyQTlNLXMtaWpJRHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 岩手県金ケ崎町 中心部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBTMGhHVHVyX2FDM2N3Z2RaWXpvUUsxRElMVV9xNlRnWXM1OHNZSE5PSlN3U0hyR1RZcVBZYTZjdmlVMXBDb1JxN2l0eXNkYUZxNUFJd2IwcXB6UUxwSC00?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 岩手県盛岡市 高松の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBCZEZlTk9rZzNSQzE5U2FTczE5bEZlOVAxd1FCTUZRZWdHWG5ENGxiQ3dXSGhJNVBrZ0pKZDRzVHpfNUxpcUtmYXgtenFDR2VRWmh4QjdMQ0ZjeGVEVWlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 秋田県美郷町 六郷東根下馬転の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONWhGUzE3OWF5RHpHc1R2ZFQ1SFJGem95Ti1IXzZWVlBraDJkeHRZakNiSzl6cEJtS3hOR0NSWHVoSmF1V2Z0dzlaNDBVeGJZLUlJcDdneUZrSEJEUVR4ZGIyMXViNnNZbzNFMURSTnF5c0NHeVZUc2xRaEZSbV9ycjZDNXI3azU3clVOTV9meTJCcVU5bnJRZGJLaXXSAaIBQVVfeXFMTWYtVWNMaS11a2lhRHA4QWZTQXZBZG5MRGFMa0F4R3pmdktXRVRYM3VGbGJxcUZKTHYxWFE1dmhwVVNPZkhZMmw1eVdUdmFKTnhla0d5ZWppcGdmazVDcU14MVFvQjljWUNIaDhZdklIUUFER3RCU0ZuMDdEMDNUa0FrdFVoc3ZpQ2lqM1I2U0s5cjkyOURrU0M0UTlFOHctMzRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 秋田県鹿角市 尾去沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVEt6amxxU00yM182N1VROTNPcHJsb1MzNlItSG5pSG9rRHZWelYtSmFoWjRBeWFaWnBOc1JCWTZUaU9VYm1DejRPSjRQcWJqNkhnZFdkR281d3RIYTdxbm5lWUJaTTB3bGdFVERXSUlfWFVMVEJsajMyV3lteHhid2V0M1pZbnFZNkprVjIyS0UtbFhycDdUX3pURUPSAaIBQVVfeXFMTWhrTGVISHRfUS03SmpxRXdPakhLSWpFcUpBbnl6Y0pfbnhYWVF0ZUNUTVZQWV9oUExNMzNXWjhhU3NkOERFLVdnMG0yNExURjhnREhQV0p4MFhVaHdYdUI4TzJleGNvZXl6aTVsNTlRX0JvZlZSMVVEUUdZVEotRG1INEplZWFPbkFhTkJHay1GVTdEYjlDc2FXa19jOHh4Wmh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 秋田県鹿角市 花輪高市向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNVE1LNVJKMzVSQjkxU2I0MFZMNnB3WVpwQjlxUGhsSHJMNzdZUEhVTWlRUDJtTW9jdXVOSk9lVk15aHVyXzY3ai1iUlpyZFBKLWdmNVN5dkdzODlmQllqcE9wb3lycXJNSlAteE5wcXJsWC1FNmdSS1dvNi1pcm9KRWlKa0NCb1ZXWUowbXljd3o0TWtIOTNTb0sySUlhSkZ1ZmJVVGVuN0NtZy1HV2wzZVo1MDFUdVN6RjlHRXMwbW0zUktZcDlZSXlJdHZ6a2VQbllWRk9HX2lPY0V6M3VvQ0NxNDN1aVI1dl9BeXJja2YtQdIBogFBVV95cUxORjdaeE5lcG95dVBzMlBMaFd2bnczNWlzb1o1UXgtRTdGTkUzWEtGbjJOR3hKUE1RSEdLY1FhemFtT0FpbHROczJ4RFRZQzdqQXdKV2g5c3c1RjRVZC0ySGlZMXFwUEdQZFNyQUtQQ2FrWGVCSDNxN3VpcFJhYnZEYk1OOXlXR0FyZ3M5N3VjYkZISWhxOFFVaFM5X2FUTExnQ2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山形県天童市 北久野本１丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSFJBc0dwY3BpRXNOeW8wcFdiZ25nLXhLM1BBQjNOZHZXb2Y4V1l0ZlJ3ZEVicjZTdW15UkVKazFHWEYzcHRTOVRvSDdIWnI5emxlWmxwRzZiNUY0NVRJR0Jza3U5QWdqeEpYRlNZQUJlQUtEdC1FOEs5VndtRG01b2Fza1UzaEwxaWQ1eWd5Zm55Z185dFNueUQyUVVibHpuZ19zSm8zQk9ZOGw4aWZ1YnlObXVXamFYVFplYzFzOURoQVhLWXUxUk9ndGw5amxkb0VQSGYyM1ZaYVIxSXJzekdQbFI2ekZnNE43SVBMNlp1QdIBogFBVV95cUxNWDdobHp5bDVyOVh3R0FzdXlqaW9mRncxUVdDdHZxTEtzbmVhLVo5ODVaTlpHcXBjTUJUbFJtdXdYdXBfQWo0WE9DZUFGX0xISnl1ZHcwcFNGOExQR2ZnZkFvNDZLRUxPTGl1VVU3cjR6eVJiRnJ1cjUxa0tEd3Q5Wm5pWnJpU2hXVkVReU1wRUQ3UU04THVCNEZtUzRpWjlNNEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山形県天童市 北久野本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5mQjJ1SHNxTktmb0ZWUl94eGNVdERpNHBDT3d5WmlETmhtbWNtdTQ0RzlDVkcweVlXSkJEeGR1OEprdmhSWHZuU2xoc3NBcGN5Y1NQQzNfRGl3QjFLSGh1R3dsSGZOY0UxNFQwUUt1Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山形県山形市 新山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbXgtOXFhR3N1elBBSnNIdGR1LUJDSjRpZlN1TTg2ZkFDLXVBejJ3ejFJdVlMdmlUNUdpdlR3aUhjd0hlWEk0VDBqOXlxYlMyMno0VUFKSlprOEVub2NZeUlnUXptUVcxRHZ5MHo1SDRzUXVPQ3BZQjZVMWo0ZlgzV1pJYWhlZ3FxU3ZrVnAwYlpMOEhqVUQteWRNYVXSAaIBQVVfeXFMTW4xbndLNzA4eXBqZWU3VkZHRDhXT1d1Y3ZIS1VCbWo0UGxybmJOU0taS2IyNWNaYjY3THZxb3pMVW1LRThhTm5yWUpXSFVjalY1NFpKbTV1UnpVM3dxcDVkRVg3LVdGWUpEN1BYTXNFcm9hSEVTbFd2ZUpDbjhKQXJYelljQjJNQjV3ZmZCTHFPT205RE8zOGx4UXlXeHBUVUxR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山形県山形市 大字新山の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 宮城県仙台市 太白区茂庭川添東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONWxhSkxzNkVDdHdOZUQwZW44R3lHR0E1MWdPd3kyZlpHMHc3RE1xTXJvTG1IWGx5Z3NCejZWeFpOR1VxSS1rUVQ1NnMzeU9BUzd0cHRNTmRZNHJMeUVDZGN0N1dTbWg5OF9TX1hrX2Q2a2NVY0FVY0l0VW9CRnNFNTdmYXBmaGtRRmFyODFUWld6Q2pvVHY4SENCTVhoUnlVX3VkcVlNVHY1YkZfX21DNk1GeUhnQXI2OFVCbFRYSHY1UHktRG50bENBLTBIMUJmQ0ZKNEtnUUpqZ2l6bkljY01lcXd3ZkxYeVlmMmpmaGZsQdIBogFBVV95cUxOZm9TeXAtRzdSNnBBdEUwbEdZYmR0Smh4bnpNa1RFN0FnRTNTRkgwYUVqZW1nN1I3U1VhcjNsUzRCLVdBd2paa2s4QW5PV18wbzNudjRuRGpxMFc3clRia0NfOUV6eE9uQm10LXQ5N1F1Z2h3U0xsMlk1VzY1WHpnYTRYdkFrejVrM3BRYXNoVGZqaTZSME1CVmZ6ZC1MOFJEZXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 宮城県仙台市 太白区坪沼の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOSkRURzFlYTk1ZS1mMGhOakpQUEtVMjFZRElkUDhqRm4tRGk1TWpnQ3Y0aFFMWFVWa2dzcXRTZ01qQ1JObjVRdVVnV2dIOWdyMVV5aWI1YlcxVm94cFNISW10OWJKWjRxYVdxa0xLdEVIZDNSNFJZelU2U0NiSXYyRnNIRHpaSW5LRWtzNXpxS0NIVG8tZllXVVBmcXJ6bS1VOEdKS1M5Y0xXb1k1ajRF0gGiAUFVX3lxTE5xMGRlV3ExWThPOWVwMDlDR3VOOTlKRS1xaU5NZHFTRktjZVZyTFVEZmcyZ0hiUlNDVFU1RzVYLWhfcnhFdTZwajE2ZzkwVDB5clZScVlMUGo0eHdZWks5Z1pIU3k5RjdCaWdrUHRPMEdwS1Q0bFFlNE9KQmM2S0tJX0lDMzltVVZLa3dYbVl2TmxVdEJXbk5MUGVmSjN2bkNwZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 宮城県仙台市太白区 坪沼の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZXZuSzMwa29tZHFmTDlhZEhkMGo0blA4TDhCbWVlVmRINTVtWkczeGNOdXRQeUJuMnhqb1VGLXJ2R1hOb2lPYTFpbXhYMEZRZURLZXgtd2o5Q2dZb2YzMl9TSC1jeWdmbDVCZEpSek9ESS1veG45NWdRdHVhcDVPTl9uNXhJa2Q0NHloSGs0bGZsMmFjNE0tZVEyWl_SAaIBQVVfeXFMTnEwZGVXcTFZOE85ZXAwOUNHdU45OUpFLXFpTk1kcVNGS2NlVnJMVURmZzJnSGJSU0NUVTVHNVgtaF9yeEV1NnBqMTZnOTBUMHlyVlJxWUxQajR4d1laSzlnWkhTeTlGN0JpZ2tQdE8wR3BLVDRsUWU0T0pCYzZLS0lfSUMzOW1VVktrd1htWXZObFV0QlduTkxQZWZKM3ZuQ3Bn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 宮城県仙台市太白区の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 宮城県大和町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 福島県福島市 平石蛇石の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVHNJSHVKT1hGNllHeHNIT1V1dFJxbml3bkRQMmxZR3J3ejM5U1NmWUdwSERqUUdjam8tcXowSUtsNXhVd0dIbVkwVlZnNkt2d0E5VkY3OTlIbzhiMXN3RVdKbG95ZXNsRXJWOU9FMTR1ZDJrbF9JSEpFZjBNT3pRTUVUX0NUUXdiQzlmYk1BYnlTSHJiR0NWQ0tFWWLSAaIBQVVfeXFMTnoyQWVTVlFHTnlPR2U3OGxUVjRyWXlveDBLRmxjY2VVWXQ5Qkx6dTY0QW1PbkJrUmN6Wlo0cUduaTA0azc4Q2ZKbGhUYzVtbnpBcmdnNjkzZGctaDZjTlRYSkRzNTMyY1lrMi01cHYwU3FlYUlQWlNLQzlabmZJSTEwY0d0ay1sdWJnQTF2alBQVjVSWXUtV003R0xqLTZWX3lR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 福島県福島市 福島県福島市平石谷地の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 福島県福島市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5wclFaQmJqQVlLTjdrM1pmcFVlekxtcHBEVXNKNldwdXNRSVV0SzNGT0tHQkplRngwVFZVTzNKSUdiVUxJRmFydTctRHdwQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 福島県福島市 福島市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOZkloYllER3RwUHJPcTlEbHlwS2JINzV0ZWxxM1I2bkw4bWtmbEFveDgwcmVJTGFLNW95RVNIME1HNnJEbVFnV2N0M2w5TEhiVEFqdVZvMkszelE4R3gwQjhQWXEzWnBQb2FWS3hDSGhGckx5Z2VabHBKak96cTVHSVBwaEIzVXJiRUZZVWh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 群馬県嬬恋村 鎌原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaHRTY0l3ZFRNU0dQQnhFbDhMc05sRjFfQUZFb0d3bmdOaDJSdWtKd0NaN2gtOTQ4TjI5TWtldlNsdkxOYm5fWnZWV0sySzRoOVJNVTVEbThPeWVYT3g0ZmdJTGE2Ym1jRko2RVN1VUY5QTV4dnllV1NZbXU1OTRRdXVjcHNnQURFa2hWQndaNGpJWW8ydG1JVzRkOVjSAaIBQVVfeXFMT3NfNzJYLXJpTy1xN3FrMzhmTkIzOVBPeHR3b0pVNHdjYmxzS2lDbXNIX2JMeG92dDg2LWJKSzVhSndfQ3M0V1BkUUo2ellraHNmMmE0aWllM1h2aURBTFZRaVNlTWgya2JGM2owU2RRMDJ3MU1QcUxQVDdaWmxUM001cDNON0xST0J6LUxtSVkzVlpZSGFtLUpGcFdvMnZtZWxn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 群馬県渋川市 伊香保町伊香保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVk1fclQyVE5PeEFrSTZjYU1acnlaei1nWjZQT1VSdENHd0hUTkJKRFJYelhXck1jUHZiclYtTUE2di1RMTE0WVFxRkRXeDFBZmY3b3N4dWJqNUJmTVdFT01WdHRWUWZlNUhaNVEwQmRjdWVUZnMxSlRQYnZ1Z3FUREZ0ckdZV1RiM0xReV9mcWZEa2tBdTM1LXhxdzDSAaIBQVVfeXFMTnh0M2ZJTjRyaDRmZnJZb2JMTlFPUUR6bklrWGZWbnBHNkNUVVlNWF9IZlo0LW9pQ3IxZWw4RDZsX0M1WkY5NHJuMXhUQkUyRFFyOTdSVjk0MFc0dFhCdTMxSk5vczYwX2ZVbnI0bkdjUVk3VW1RMUtBMzFvT19mOWR3ZXBjR0N2cHJ1RWs5bjR1Wnk5QWpmelgwYkw3ZE9FalpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 群馬県高山村 中山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb09EbW5jNGRNWmYycnkzb1NGTjhOUnpoUUZQakFqYXdQU1ZET05LRldQOUo3dUQzT2VISTBmZy1kWlUwM3BodlpQWGx0bHFUTHpfZEtERTg4V3UtcUFuLUFqWWFQTm5IXzQ1cmlSalNnOEhUNXI0Q0ZzZ1U5Z3lMN2tqSWxqY00xQk1wUXgzUnJqMEgxVG9jWVpZcXDSAaIBQVVfeXFMT0FXZG1fX1JpUjFHUF9DMHdXaG83Y2NQZnMzV1Y1Y2NjZ0xtcGxVeXE5OFlQdVpEU3kyOFFDcVFGLVRUTWJodndQbmkzN05UNWw0dGhsWUlveVdtZ0gzeGhpOFFDRzVXbDk5aWlBNXF2cE5saXJRUjNOM04wV1U5SDRSbmZaNjk3RkRZSDhBUk5rTG5TdGlvUDF1d29nek95eThn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 群馬県高山村の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 山梨県北杜市 武川町山高地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 山梨県市川三郷町 中山地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 山梨県富士吉田市 上吉田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeDFTTTFiR0xJdzZWV1FzUVZXVmphRmQ0RndOcklqRm96NnpJbUE5Z3AzUkNGT1R0aGRnSkVOM0h5emczbHo2VUdkS00tczdHY0JTTUM4WDU0eU5femZ0NjNFNExEV29jNGNzQWdFRVZFSF9KNmZMd1VxT3R1ckJ2MVZIUjMwWkFUSXdDeS1semRzb01NOHYxM09IMHnSAaIBQVVfeXFMUEd0N1JjNGJLbXZVdG1hd3BSSDVNNFVyQktUY0tSYTJ1cVA3NTNRdFdfU2d3NlpFRzZxZjFlYmRPcXQwdi05Z2dUWVdLSFNVRzhDY2dRZEZLeGU4eFh2X1VmRDF3eGdnSjQ5ay1iNU1XeGhOVnI0YkNtN253SlNjUHA0Yno4YXU0WkxEaHhFTVc1UnF0VjNQbUxYdFpTbDRYaFZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山梨県鳴沢村 鳴沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVEx5U0VnMlU5U0VFZVdGSWNva3BaTXVrLW5PN1ZDQkxUeHdaMHA1V1dzMDB1M1drNTJPYngyanV2SEpFTjBIWUVSbVFwLXdnNEcwSnVMcTlUM0VJMEVOd2JGd1FXSzhYejMwS2dSWk9QT1R6V1lzR3JlUFNjYjhnb0ZrMS1lS1pJSXFTd3FlbWFiMzJYbjNuX0FpMVLSAaIBQVVfeXFMTlZmRVpIUkdBMUZ4UnhlWEc1QUFxQU1qRWxGRW5tSEFLd25vX0pMVHVFUndmVWhGQnpOWG9kUmtTUkpST2N0QXRJbHk4UHc1M3QxVGZkYktpUC1iaTd2Ny11VmtkTGhIM3FGeHQxQXl4ZGpwRER4LXRrRm5kY1ZvRnAyRFB5emg5Tk80YllldmxZc3ZFYmxyYm1FZWN4Z3lTZzhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山梨県鳴沢村の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 長野県軽井沢町 追分の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWUszWlRfVnEyZzg2WDRCVDBzYWVTVkkzR2NUbzdwWXVNNmpGU3dCNng2WWdjSEptZU5EaXM5OGhtQTQtTE5KZkJlZVZoNE5XRG11Ti0xTXM1Q0R4Z3oyMTBjc213YkRVZjA1T2ZQZk5BdjFpWHU1WmVRdHVuM1VqZ2U4SzU4bkFpRk5jaU9Ld2FHSWNsUktsN1IwcUzSAaIBQVVfeXFMTU4zMkFqUnlTc3JHc084RUpzcHFKelpta1VTX0tSVG9CSVBURnU2SFNydnJZZXNPMHFMaDg4QVlvZkt6RThxRmFMSm1oaW1HS2hXNmtId3ItRTdyM09weU44LXgybFljaEtKZG5CSjVqTnVadFlIQU5IM25vQXE1MDVIdTBOSHAtbVI1OGF3Mkc0cGc4SjBUcUdvMng5MVhhdHVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 長野県辰野町 伊那富の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVHU2TGM5cHI2SEV4RGw2c2dwM3BFX0xNX3pxdlJzZVBTdEkwd0Z4b3dzS1RkVzhpT1NjOUt3eG9BaW94Nm9uakV1Z19IOG5XNlJOd2luUlhsOXNyNWcwaWFGUEtYRWFON1FCbFhETTVfUm5ES05JM291SnNWRjhKQmN2VGktQU1vWi1vSGxnZnZhNGM4WEFfalY0MEPSAaIBQVVfeXFMUEtLcDY1ckUwaVZlVzI5dVFoMDUxUnViTXQwQ0xoTTFZanNDSU9BdHU0a1N6cktzYVUxTDNCZGdlRldaYlJJS3JpZ3lYeEZKTjNSUHRLeHFNUVpFT2VudTNBdTY2NWVLbWxfT1V3elI4Z0MtaHZRZndZeTNkMGp2X2h2T2twSnpJVElXeEMxcWlrVlF6WF9NRnMwNTVJcmNhaXhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 長野県伊那市 高遠町長藤の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORTlnakFsbUF4MkF5dFdsN0d5OTMzdkZBbWtVLVRSMGtoeDhYZ2lUUjFia1c4bWdxeVFxbkVaakRrUXJyVnlZNHF3cGxkWjlocXNneHU0a2k3aXh6THl4ckJMMzNmRk5GOGdQVFpTM2E4R2FFY1ljMm1aZ1NOTHRDWWp3bjVxdzMyNUVEbzRvYXFRVUlxVDQwbmpZZ0VQQkRVLTh4STQwVzhhMWhFWGVB0gGiAUFVX3lxTE9qdGV0cGQ4Y3FLZTM3bUEtcWwxZXM1YXNoLTJpRnFvbHFteFQ4N09MNV83QmlyTEtIellHX3VXUmVvX1Q0cXpPQmNUQ3ZYajVydkRxejRqR3JDbWRJSUJwTzJleWZtOGxzRnZpUDM0TFFOTTIyZHFUdkhwSjU5alJJN2pBS2U3SlEtOEhsYUY1UnJWQnV0RXQ2SnloanZDc0hmUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 岐阜県揖斐川町 上南方の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 岐阜県中津川市 福岡　八布施　向島の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 福井県越前町 小倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQS1JGNWVNQmMwWElleGROUm9yY2xfWU53Y2hRZlNTdHVyYmpWaTVrYlZRM29pUmZoUE5jM2NzVG1SdUlKQVNqZGkwcjhNOE1BeXhkYUhUNUdrNmY0c1NpWDlZR3ZDOUxzM3YxS001SG0yUTRjLThoNGpnd1p2bnRxODJHcjV5UG1oRVBrTGFielgwUW83SWd2Sm1oUFfSAaIBQVVfeXFMUHBqOFN0MVZtZ2lpTjJFNWMtRWRJcWFMXzJNWWpEaGoyYkNuLWk0X3ZRUEs0ZzdsXzFfb1VBWDlFQW5HWWdnYy1MSmdPcmtNM3FBSEFrUmc1eEQxTGtRelF6R3FnOG9QekdpM2ZlVHlGTGNnU29oMUc2ZlhhY3BCZGsxUGtVVW1zdHBMTGN1eWUteEVQRlhxakpxdXl3VmgtZ0ln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 福井県小浜市 深谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUHFXd3VHM2xObGEwTFlDczFaSUhXaTFqQVNFRWlnNnI5eDExUFRxMS1Vc1ZvY0Q4VTVCZkNPdlpRdDZWVWRGaGhpODVhNnNSdkpNejVCX1ZrTnZqcEJBeGZpOU9obGxhSmhaRmptcnNwdlZ1NzVZOThzdlVjUktEQkhRMGNpbHJkeExzNDdsQUJjTTdtd1pIY3d4VmbSAaIBQVVfeXFMTWR0YWJ4eDFZUU4zQThCdkp4Z1k1YkluSFdWWU1hNXdudThFMTE5a00wRVlfbTUyNXF6RjYwZzl6TEdlTGxTb1cxZjNpUFh2bTg3MWRVeUlvM21kMFY2MUNraEJrZWR2TXhBbXdTa3QwQkMyOUdhSDVpaWFNMlJkMGlKNjBDZkxZNGM4djc1MlRpajNMYnZNUHpiOXY3bG1wV2FB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 京都府舞鶴市 大波下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQN0VOcVFUV25JMTdTUWJZZVRSUURQMTFmWFBXMGhERDJlTjV4cFIzcDVXSjJYUmNELWZUZTNwOUVULWFHMVZ3Z0M5bDNtazZXZEJQUmNsVzluVXREc2dHTlRldnF5QTh6b3BJVVRMem5fZnU2WEUyM082dzVpWDRFWXppMTlXWkd6S1BjeHYxWkxnQ3IwTTFLNWQ5N0bSAaIBQVVfeXFMT1dnV1NGamZ4aE5rTXc4YWRvRHM5RUxkd2RYSjg4TWZwcl9uN2JhY2hKVUlDNDNjTDlSRXRwZ0JMMEIwSlFZcDdXd2FjdlpxQlNsc3p6dkJlZ3FDNmVVQWpWaHVGczFUcDZUVUF2ajRMdzJqek5mZjNnbmdDLTFjbHJUWUsxYl9leWJNUTBnOUowaU93RXZramFsa1IwY0xwUWxR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 京都府京都市 右京区京北宇野町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcGVDLUlsRjRrRUZTRHdYLWlMN0lNTzNvS2p5alp0dDRJLWl1WDJmbjUxYWp4WDdNcXIxRkJkNVhCT3Fac1pwdzZZczNYalVoaWJyUXFIUHlSSkxIRkVwN29fZ3FFcUdvTlh0cUxZNXF3WmxJUE5QemlIY2FMa0tQelBnLXlaZUsxWGZQS3ZTeF9zUGZMNFBuSENrNXDSAaIBQVVfeXFMT25EN0diV0NLd0RDdGNJU3VDRTdnckVUdUZWSzMwVTNwQUl4UTgzREVTSnc3cFBFcVRxZktGZkxzVzdWZ2w2QWwxQk5QdHgxcm5VZXZMdEU5ejdySDdqTWRHYU9TVTNIdzY1UEFIUzJGTzNvbDZiTHJVV19UMnpKb0VrRVE4b2t6elNnLXlmQWNVZ0NtU21DZ1hpamgtdExKMXNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 京都府京都市 左京区鞍馬本町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUktxeHJlS1JwLTdFS0oxc2llU1I1MWNheGM0T2NRV21sVTNRVk1WVHdBVEpLNkM2azFLYVhyVVNWRFEtZmVkcUlLWDZobFJGTU1meC1ET01nVlRwVXBBMjc0ak1Nd2hmVDRRMUNoMHJ0bHpqUU5waEtiN3QyMXlmaEgxSTJiaGhYNHktaHFPc0JhSnYtWk81eTN2c1fSAaIBQVVfeXFMUGd0b21zQ0tTMER0OWFwUHhwMzcySWRJMXlfY2NFOTNoY0ZTY0xWV1lwNFBSWi05b2ZQRms5akdOZ3NaWVg1OXNBeWFDb0NWd0tOWExhOUoxY3NwWVJaVE44T2tnaks2OGs1SkZmMGJSMVlzaEpwOGJXT1F0VzMwSG92V2kzQkhzOFpnMEpsSmVra3U3cldWRlRYZkZHbjFQYk5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 京都府京都市左京区 鞍馬本町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQZ3RvbXNDS1MwRHQ5YXBQeHAzNzJJZEkxeV9jY0U5M2hjRlNjTFZXWXA0UFJaLTlvZlBGazlqR05nc1pZWDU5c0F5YUNvQ1Z3S05YTGE5SjFjc3BZUlpUTjhPa2dqSzY4azVKRmYwYlIxWXNoSnA4YldPUXRXMzBIb3ZXaTNCSHM4WmcwSmxKZWtrdTdyV1ZGVFhmRkduMVBiTkHSAaIBQVVfeXFMUGd0b21zQ0tTMER0OWFwUHhwMzcySWRJMXlfY2NFOTNoY0ZTY0xWV1lwNFBSWi05b2ZQRms5akdOZ3NaWVg1OXNBeWFDb0NWd0tOWExhOUoxY3NwWVJaVE44T2tnaks2OGs1SkZmMGJSMVlzaEpwOGJXT1F0VzMwSG92V2kzQkhzOFpnMEpsSmVra3U3cldWRlRYZkZHbjFQYk5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 兵庫県豊岡市 田結の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSjRWdUtZVi1VMUNoSk1YeHZnNlZpa0xWT09lc29WbklDdVhuTWZ3eUxwTWJEMjR6cnI3NDRzcW5NaWhrTkllQVdoY1JtUEVYVk5IVG1DVDRBbkJ1ekppdEJOMGp0Rm9jUmNKdzE3S21PT0p4UGQyU2dYVjktSEZ5UUd0Rk4xR1VGd0ZNYjdqZllmNkFNOVp2N25DOFrSAaIBQVVfeXFMTWY0NjRyR0F2REl5UV9YVmZJcFYxa0MtdGpEMU5GOGJNTmJjWUJwQ095OHd1ZnRrU1NUbUhQQWkxTkJpQ0lhR045bE9TZWExd1FFR0JSa1pmUFdKR3M0SlpfclFNdURsSUl2SEJXNUM1S0NXWWtTRFNtd0QxQjBIb1dqSXJSQ3VidXZWRzI2OTk0TzM1MC1ESkZaMzJITXRRNkFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 兵庫県丹波市 市島町下鴨阪の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPenp2WW00T1NVd3dsS1ByZlNvWVV1N2szaFIyNVRKajBGZHp1SXh2Szl3cVNocVg3TzNjZnROaFloaXlDT0w2WGROTFBDeUpiUkxTekwtWVlLVTFQVmZXeWlRTHhYanJhWmZ5TVhjSl9qQThJYUFHaVJMY09vbElwNVNiZlZEOWNsSTFlbnU5X2RTZjcydU0tOWstbW3SAaIBQVVfeXFMUG9oN25XWFRVc1lDeVFYWDFVangxcGlUYWlvblYzQ0ZvNmRQNTY0WGxrY29Id0R1UGQ5cTAxeDV5MTM3al91UnQ0Q01RMS1jOC04bFZQdUl4eXhTS2VjNXhzVlA1SWdFSDlYdUozZEdhX2hMT2pmMU81eXE5LUtyVDZNVUhlTUcyRmV1QWhSdjdlSExMYTBDbzlrYVVMSV9ZcTdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 岡山県新見市 哲西町大野部の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 岡山県美作市 東青野の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 鳥取県鳥取市 滝山（上野）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 北海道新ひだか町 静内御園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRENiRFpfeUNEd3JhQlRWZ056VHJDTTRzdHdEQ0pqczlNUXo1czRYRk5HWjdBak8tS0FuODlITlBEQmEwclFIbXhlczN0Tk1BUThra0F3bHVYaXIwMjhyZHRMSk9ZTXRDWXlGOGdrSzY0SFpIZnpVamhhaHU4TUU2aXRTdy1MNVowcFBuellsTGNxYllkV0JoMlhsSGXSAaIBQVVfeXFMTkdBdUNFblZKVjIwMUlhZnBkVmg4b2ZSdGRCUlAzckNkWC1LRkdoNmd2eE1KR3FZNWJ1XzZZOFRReGIwdGJzdXFKbWVsMTdPY09uXzJWM0Y4SzB0NHFhM3pxVkZOYkluMkFHR2VXV1I0QWhoLXExRjNuUjRkdzFVZlJNZktwckEzYnhnOUlhLThfMGRXOURKcWxZSnFaaTYxeG1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 北海道砂川市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE81X2ozMGRYLURqcXlfT29ROHNOR0Qyakt4ZDE3R3ZyTlppZU1FaUhfc3NvblFleVlzYzE1aUZEM0JhSjRhX1NzNlhrTUpuUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 北海道砂川市 砂川市内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBnUHAtVWRzRXdac2t4QnN5dGJOeFdtbzhxOHhxZWFHdFVjU2NVMk93VUJoeDB4SU92bzFsbFlRMFhsNG92bWFqS1VLRkVHZmJSbXQ4Z0ZoeVYxbkFXLTZ5ejY3TmFqWUNsSXc3ddIBckFVX3lxTFA2Qi1iMFVhMEQ0OXdSWkZUQmN0V1A3S1NQQzdEeGZLaGtRdk1yS2pZWDViM0RaamFybmxRNVFLMWhkWXU0OVg5VndBSGQ1WE83WVpUcjJkYkozQk51Uk0xX2FtQVFWVWhKbFpFUXc3UHB0Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 北海道滝川市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE55bV9iZzhyX1haV1ZzNnV2dmtPRUhpWFFoYTloMzdCallJczBIVUNiNGdZVWRyNTNPMERoWHNGSHlPbjVIV1N4NW1oSEhFdTE3WDdvYmd2SkpEZw?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":13},{"pref":"北海道","count":8},{"pref":"群馬県","count":7},{"pref":"山梨県","count":7},{"pref":"宮城県","count":5},{"pref":"京都府","count":5},{"pref":"福島県","count":4},{"pref":"山形県","count":4},{"pref":"長野県","count":4},{"pref":"岩手県","count":4},{"pref":"秋田県","count":3},{"pref":"岡山県","count":2},{"pref":"岐阜県","count":2},{"pref":"福井県","count":2},{"pref":"兵庫県","count":2},{"pref":"鳥取県","count":1},{"pref":"山口県","count":1},{"pref":"三重県","count":1}];

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
        <span>対象期間: 2026年9月6日</span>
        <span>·</span>
        <span>公開: 2026-09-07</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={75}
        periodLabel={"2026年9月6日"}
      />

      <h2>全体動向と主要事案</h2>
      <p>2026年9月6日の集計における総事案数は75件であった。出没が報告された上位の都道府県は、青森県の13件を筆頭に、北海道が8件、群馬県と山梨県が各7件、宮城県と京都府が各5件、福島県、山形県、長野県、岩手県が各4件となっている。事案の内容は目撃や痕跡の確認にとどまらず、住居敷地への立ち入り、野生鳥獣捕獲用わなへの錯誤捕獲、行政や猟友会による捕獲および駆除対応など多岐にわたる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な出没地域・動向</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">13件</td><td className="px-3 py-2 text-xs">三沢市、おいらせ町、八戸市など生活圏での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">浜頓別町での捕獲、砂川市や滝川市などでの出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">嬬恋村、渋川市、高山村での目撃および追い払い</td></tr>
            <tr><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">北杜市、市川三郷町、鳴沢村、富士吉田市での採食・移動</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">仙台市太白区、大和町での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">舞鶴市での緊急銃猟、京都市内での目撃・出没可能性</td></tr>
          </tbody>
        </table>
      </div>
      <h3>主要な捕獲・駆除および生活圏接近事案</h3>
      <p>個体管理に関する重要事案として、京都府舞鶴市において緊急銃猟によりクマ2頭が殺処分されたと報じられた（※1）。また北海道浜頓別町では、地元猟友会のパトロールによってヒグマ1頭が捕獲された（※2）。山口県岩国市周東町川上においては、イノシシ用くくりわなにクマが錯誤捕獲される事案が記録されている（※3）。</p>
      <p>人間生活圏への深刻な接近事案も複数報告された。青森県三沢市では三沢駅南側や住宅地でクマが目撃され（※4）、同市松園町３丁目８番４号では08時25分に散歩中の住民が近距離で目撃して避難した後、正面の住宅の庭からおおよそ100センチから130センチの個体が目撃されている（※5）。群馬県嬬恋村ではJR吾妻線万座鹿沢口駅の裏手において、木に登っていたクマを住民が目撃し、花火による追い払いが実施された後、個体の逃走を確認した警察がパトカーによる広報活動を行った（※6）。また長野県軽井沢町ではキノコ採り中にクマと遭遇する事案が発生し（※7）、三重県尾鷲市ではクマの出没に伴い恒例行事が変更されたと報じられた（※8）。</p>
      <h2>地域別の出没傾向</h2>
      <h3>東北地方</h3>
      <p>東北地方は当日の総件数において最も大きな割合を占めている。最多の13件を記録した青森県では、三沢市内での生活圏出没（※4・5）のほか、八戸市鮫町での出没（※9）、おいらせ町住吉での出没（※10）が記録された。さらにおいらせ町ではクマの目撃が相次ぎ4件にのぼったと報じられている（※11）。岩手県では4件が計上され、宮古市西町３丁目（※12）や花巻市高松第２６地割（※13）で出没があったほか、金ケ崎町中心部でクマが目撃された事案（※14）および盛岡市高松でクマが目撃された事案（※15）がそれぞれ報じられた。</p>
      <p>秋田県では美郷町六郷東根下馬転（※16）、鹿角市尾去沢（※17）、鹿角市花輪高市向（※18）で出没が確認された。山形県では4件が記録され、天童市北久野本１丁目（※19）や天童市北久野本などで1頭の目撃が相次いだ事案（※20）、山形市新山（※21）および山形市大字新山（※22）での事案がみられた。宮城県では仙台市太白区茂庭川添東（※23）、仙台市太白区坪沼（※24・25）、仙台市太白区（※26）、黒川郡大和町（※27）で記録された。福島県でも福島市平石蛇石（※28）、福島市平石谷地（※29）、福島市内（※30・31）などで目撃や出没情報が継続している。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県において7件が集計された。嬬恋村鎌原での出没（※32）やJR吾妻線万座鹿沢口駅裏手での木登り個体確認事案（※6）のほか、渋川市伊香保町伊香保（※33）、高山村中山（※34）での出没がみられた。また高山村では目撃個体が南の山へ向かって移動する様子が記録されている（※35）。駅周辺や集落近傍など、人間の活動領域への直接的な侵入が顕著である。</p>
      <h3>中部地方</h3>
      <p>中部地方では山梨県で7件、長野県で4件が記録されるなど広域で活動が確認された。山梨県北杜市武川町山高地内では住宅から甲斐駒ヶ岳広域農道を挟んだ北側で草のようなものを採食する姿が目撃され、通報中に消失した（※36）。市川三郷町中山地内では県道３６号線上九一色方面を通行中の車両の前を横切り河川へ逃走した事案が発生し（※37）、富士吉田市上吉田（※38）や鳴沢村鳴沢（※39）、鳴沢村で東方向へ移動した事案（※40）が記録された。長野県では軽井沢町でのキノコ採り遭遇（※7）や軽井沢町追分（※41）、辰野町伊那富（※42）での出没、伊那市高遠町長藤における出没の可能性（※43）が報告されている。岐阜県では揖斐川町上南方の山林で0時から1時にかけて（※44）、中津川市福岡八布施向島の河川敷で13時から14時にかけて目撃された（※45）。福井県では越前町小倉（※46）、小浜市深谷（※47）で出没があり、三重県尾鷲市ではクマ出没による行事変更が報じられた（※8）。</p>
      <h3>近畿・中国・北海道地方</h3>
      <p>近畿地方では京都府において舞鶴市での緊急銃猟（※1）や舞鶴市大波下での出没（※48）、京都市右京区京北宇野町での出没の可能性（※49）、京都市左京区鞍馬本町での出没（※50・51）が報告された。兵庫県では豊岡市田結での出没（※52）のほか、丹波市市島町下鴨阪で痕跡が発見されている（※53）。</p>
      <p>中国地方では岡山県新見市哲西町大野部（※54）、美作市東青野（※55）で情報が寄せられ、鳥取県鳥取市滝山（上野）ではクマらしき動物が目撃された（※56）。山口県岩国市周東町川上ではイノシシ用のくくりわなへの錯誤捕獲が確認された（※3）。</p>
      <p>北海道地方では計8件が記録された。浜頓別町でのパトロール捕獲（※2）のほか、新ひだか町静内御園での出没（※57）、砂川市で道路に飛び出したヒグマがヤブに戻る行動（※58）が目撃された。また砂川市内での再度の目撃（※59）や滝川市でのヒグマ出没情報（※60）がそれぞれ報じられている。</p>
      <h2>リスク評価</h2>
      <p>季節要因および餌資源の観点において、9月上旬は秋季の過食期に向けた行動圏拡大の過渡期に相当する。北杜市において草本類の採食が確認された事例（※36）のように、林縁部や農道沿いの植物資源に依存する動きが観察される一方、軽井沢町でのキノコ採りによる遭遇事案（※7）が示すとおり、森林内へ立ち入る人間側の活動と個体の行動圏が重複することによる突発的遭遇の危険性が高まっている。</p>
      <p>人口圏への接近度については、青森県三沢市の駅南側や住宅街の庭先（※4・5）、群馬県嬬恋村の鉄道駅裏手（※6）、岩手県金ケ崎町の町中心部（※14）など、市街地や交通結節点への侵入事例が各地で散見される。道路横断や河川敷の利用（※58・37・45）も確認されており、緑地帯や水系が人里への移動経路として機能している実態がうかがえる。駅周辺や住宅地での追い払い対応および広報活動（※6）、緊急銃猟（※1）、錯誤捕獲への対処（※3）など、各地域における迅速な安全確保対策が不可欠な状況である。</p>

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
          <dd>2026年9月6日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-07</dd>
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
