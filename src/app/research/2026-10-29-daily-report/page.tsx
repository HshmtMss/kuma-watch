// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月29日 / mode: daily-report / 生成日: 2026-10-30
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-29-daily-report";
const TITLE = "2026年10月29日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月29日に全国で記録されたクマの出没事案は計81件に上った。京都府と北海道を中心に全国各地で出没が相次いでおり、住宅街への侵入や教育・公共施設周辺での確認、車両衝突事故、農作物や人工物への接触など、人々の生活圏に近接した事案が目立つ。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-30",
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
  datePublished: "2026-10-30",
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
      "title": "2026年10月29日 北海道札幌市 豊平区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE94NUhYcGllMVAyM3lpRXdhd0V0Z1NWSTlTTzh1bUFUbnNZaHNndEZET1VYRzF4OHpIdl9KbzU5UU9KeHJ3dHJtaFVUUHlKa2loa3UzWW93dVRULVN4b1hvMF9yUTJ5QldoeFcwUFFoWFZ5b2FRcFRWalJTQ1JCdEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 北海道枝幸町 保育所付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5fcGIxaFNPb2JVa2pZbXk5R3N1TnFwd0NiZ2RjZmtRdFAyVVJrb2RqaThYTUZpR2FWc0trVExscTRDWGxJTjhKTlZXWGFOSDd3Y1RqMjBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 神奈川県伊勢原市 県立公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9EbGJIbWNnVnA5dUJ3a0tLcE1KdXJueWhhcXRfamozdFF2UC1rUHlTeHRhQ0ZsUVJ3czFJU19IZFBUNkQtM0NPeldLQlE4OHhnX3F5NERuMS16ZjgwMDhFRzVaMXZlUmpxQmNTT0F3VTY5TmczT191ZlBKQ19NQnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 福島県福島市 国道115号の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1UNTdZSnctUWE0NjZxOUN2bHdJTFpjdUNYaF9faVZHZ0pCZERRTWZFT2Z6MmE1WEpDeXBKQS13bmwxVkdVc1JDS1lJY2tOUVQ0VzRSanJ3Z2k1YTk5VmxBQ3NHcE5zQzVjQng5SU9UOFpJdUxsbXlpaS1BTGZRb1U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 島根県奥出雲町 奥出雲町八川の国道314号付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 北海道新得町 上佐幌基線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNdDNNVkpYVVV0RDdLMHRCUGNtTUk0QVhReDBmaUZ0dVVYdXRUTDRWbjIwM0N6OFVsSkxENWtoNmJTWnpXRGpWYlJpRFp2QjU1RDF2RUFRRm9lTEtTUm1Tay0wZTZVSC15bXRuMzQwWnVJWWg5VWtPQ0sxSUlJTXIyUkFra1hQMkNaYWc1clcyMXVRdVdxdUYwS2FwVnZGWURzOXpHZm96T2ZPamVaNC1zRlFzMV9Pb2JRUjQ1b2syeUV3RUo5MkVFaDBYdnd1MXRoV1V0cGVrNzF2X09RS1A5S2xxQzlBOG54bGliMUpTcmJDZ9IBogFBVV95cUxQamtNMXhwZmtZcDRTUGVRMTlLSlVMa3F1MjhST3ItdUZPNXRiWkJNWk5UbjRFcTd6NWlWak1qRTBnX1RTaFpwdTJLclJCQ1BSNG9za1hwSU44bnppbTBXd2tnbjBUUkNjREI0Y2xhdGZRM2xHSkpnbzVUYV9pWlFidGRvS3g3Ukk3VnJfUzAwbVdsOE1GTEkxWGhFQkZpaGNWTnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 北海道留萌市 大和田1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOLWZDMDVOd2pSV1RmVFlnOGNiUHgtdDduWFFBZTlLT3N0REcxb3V3cUtfVE9sYXB4SXNyUGtwNVU0Q0tmTWZ6OEhob2ptOVJ1SmVTSTN3ZTdCTk45NmFIUWJlMFl2Z3VOUDN1RWlTLXlHa0hWRDVVZGRVNTNUR1gtWTNhSXhMZ3FrWFZTX3d6RExqaEVOZTYtU3VaOThZN3ctRUV0NlJZVlV1Q3FnVzVV0gGiAUFVX3lxTE0zV2tFcmFMX01nRFRybFBZQzRfbW1VRXRpcEREMEVkOFJFSU0tMDBFU3NzOFlDcXMtRlJCcGFiZFdWeV82SVV4MmtXQ2xuYzU1ZThMV3FrV2tsUU5YNFJ3RTAxX0Y5WGxnaGQ1cU4tWFMyTEhKYVBOSkZMRFlwa0QtVkp3dmhjLVphaG1JYmlnS1lXU09XWUxxWXJpRzNMdnViQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 北海道南富良野町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 福島県白河市 市道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBMRV9VdVI3THFTWjU0eWlOdzVxa3hmcTRKQWdmcENfRWh0Y3JaM1JBVXd6N3FvSWc3OWJvdzI5alFJaEdjLVNNOHh3djlMN0RTSWxRTEo4NGxmWWZEQnJYX2h4UXZDM2Q1XzV5YUFnem9rbWxVOWxrSGRySG5yV0U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 福島県柳津町 柳津町内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBBTDJ5TlBpTFlRWGMxTjJ6TzJIdUFKZXpaODZXdnlZVjZGMnhqX0tnWWlacjFyNzRzYTd2Ti02ZlVqZ0Y5TmdQNmNHWVFkNHM0M3BZVk43MWswQ0xGbFNPeVBNY214b25ta05rbmdWWTdxX18zRWc0V1VLTXM5YmM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 福島県柳津町 柳津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5EazN1Q1VsMFNIRFFITjlHTEFuVmdQVmVkWHE4b25fYkI4U2RIdG12UW00ZnZpVDRFUXdEb0YzR0lQZktJSXRkNVhtcHVTWmNwX3d4REtlWF9UMUVoSFFRS0duejlXY3pqbC05azhPbWpGRXJUaEZuUkFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 福島県柳津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNc3paM3UyOGxac0RFRW9LZV9SUGVoT0thbmhtVUh6UjVySU5UQjBPS05xT3pWMWhHUkpNYWxGUGZhbkNOSXBKTDVkY09hY3U1RlFWTVBlM2xuT0xBWm5pMVBrOG1JdDBFLWRERmplN0xZd2VxaTd2RG1iZVYxc1NRX2h3c0IzXy1icnhsVkpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 岩手県盛岡市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1xVlJRNkkxQk01UldQWFVwNlFhcWtmb3NWWGY0VnhPdW10LWI2eVYtNHlLQmFuSE9seW1iTlBGY01McmlhWlJSWVR6SkhWSEliT0hnTVFablc3MnRvUldHbF9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 岩手県盛岡市 上堂4丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUHdkMFhHSkprYzFtRmg5Y3labmhaYlVLRGdqalk5SS1JMzZtSXR1d1VYcGJrQ3l4TzMycDVNZkFEdW9wQUhOU0dUZTZrSDM4VkRmREhIYklZTDRBYzZRRTVoVG9ZZzNnS1QyNzU4Z084OHIzQTBkbHUtYW5NaTJqZXNaeFE3LXBrZTRfdnl5cVhOLWtVWUpTVVVXTjLSAaIBQVVfeXFMTmdCVWk3R3lVOUU5bnIxUEkyc1VfeFBVeGNsdGlnNVA4bHI2RHBUT1lVbGNkUE1DOGtwQWcyVFBjb0FsTXlHTF9xM0JONTV5dVE2N3FHMmYxQ21MTHdWeVB5dHZiMjFNZ21YVEpkeXZWYVl5dFZBNXhXZ0FCLWh6UTN0WnptN1AyT1ZxeVdkdFRjc2daNDByQndxRTdvanJzNzN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 岩手県花巻市 東和町落合の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOenBkdVlNNVEzcWtERVAwVXpETEN4V2ZpYlZRTTE4LVhqTUhQWXhsSkR4aGhXRzc5eS1PamxvRWpfU2pBQWlyYjd2dG1POXVETGhHa3I2b0FGNGZNeWdkS0ZsYmo1Nk5qcWhERXVoRFhFYUFyclFMaUNfbTlkMGtELU1kMFN3VTR3UEZJX0VHOFgwaklDSm5rMlE4bzhESG45aE0yYzE5cmRQd0FCRm4w0gGiAUFVX3lxTE1aLUNhdjdwaXJ3SlRjZFkyYXlsRi14Q3gwTkRjLXpnOUhVLWtCeTMtdmVYeEY5YVVyZFNUaGYyTUpOYnZ4dnl4dTFlMjhsYzBvVS12QjVVdUFBdEt4a0dUMHN6NlNkS0FhQ3laRU54cFpza0ZzZm44aXhpRTNPaEJjU2VuUVFNeHY3ZDNqenNrQkY1T1g5UlIyQTNjT0xpSlJ6dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 青森県十和田市 米田笊畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNdWJhbWZSTnR0TVRXemV2M0tNdXVtdFRabmxlY0FvMExJc2tBN1dWTDdZTEsxWmJlWlRQNTEtVkwxUmNzNHNPS0NRc1pHdHhUeERlaDV4WkVUOEpHVG1xeUZBYTZLMzY3cm1MZk9MQ2UwRDBkdHVKMTBjTkdDUUtyZnRqaG5uTU9jS2puSFJ5bl9zNHZuNGlJSVhuZFhYTjgxVnF3bHZDWEdGckRJanFlTU9IOGFHVHdBTlpFUlpCZUkxaFVNcmJBVkVOeDBMYzk3NHpsMl9MeEVlWl8xODVoMWFTWE1hUzJuMlVBdDljSEx6Z9IBogFBVV95cUxOdWdXVDBKZVhEVG5PT2tpbzNzbGVxQXBhbHpCT2l2THk1eTczZzJtSTJRdy1xd1cwSFhkT0NwZ1ZFQ3RoMGNnRnhYQ0dPeGRVRkF1UF9wTnBhRUs0MlR4d0FIaUJZQ3lsdzJNZHE0Z3dZaFpfMmlnb3BuVGt1UHctM255SjZSNmxmRmhaVmdQZ3RfUm0ySUFyZWdBbkZKMi1vWFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 青森県十和田市 滝沢指久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbEJhelhaYWtuMEN4VFJELXBzZVhDYkZUcTdYc3AtTlU3R3RERm1Yc3h6M3dicUR3NWplOXB1YzI1XzM2VGd3aDJQNzU3WUZvczZvZDNTNDZ6R2REZmNYNlEwWXJURWtsNnVjdXBRT0xTdWxjOTRSVFdYeHZtNlRBYmRSUEhvU2N3ejNHOC05YURZVy1TVl9aV2dkcEdDS24tZVlFazBNRU1WaVdETi1Qa1doS04xdkZ5QWNiRm9Od09TOXZWR1hfLTAyVXY1Ukp2c180SzI5TjZJeXFTOWpCZmhhTlU5WVFyS0YwMnZzZ1JkQdIBogFBVV95cUxPUmI5azd2WDlVQkk3dVpFUkNnMUFHdUFMV3dFQklmaTAwTFc4QzFrTEpkbGNYNUNnSlZabk5hRTB5aWI0bnlZaUtmNnQzcmFjRk5uVXktMUlKUUsya0ZaZmxiQXlDWnc5Nlh6eWFJSjVTcmdHVjYtRnRFLXNuSlJwbDA4d0pqYjZhZWc3NTRWR1RFUzRSTXFaejFxQ1IzUVd4TEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 宮城県富谷市 明石杉ノ入の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQX2NQcHhIcWZQMzhaOEY5c1dJT08yc29Pa1BKRktHZWRLVFR0Vm9oMmRTQS1IVEtfbU1ldGxsVENDTnItQkYzSzV2Tkc3cnlldThGTUpnTFZBZ2pjUV9TOHhJcDVHLXFoUnBXZ1VFNlllcjdldzNkU21KYzRlaHpsUUUxSTUtaXlhcXN4SW40UE5ZWnZZQ3Uta1AtMknSAaIBQVVfeXFMTm5ibTNJNHZ1bVo2Yk5sblZ4RWEyc2JwNkRDOEI5WmU0YmpLOWhYWTd5VWtOc2ZLMzRXekZtYUdmUWlPa3NBSmxBaVVxaWNYLUVTOTlYLVVLY0V1VVhxX0RlUkFxYUNCVzU0U3gyQlhHRjlKVHVJdlBfVUQ3ZzlzTnFPME1HX2hhUkh2Rnd5a2FtSDNPS2MtSUkzSWVMWmVoT0N3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 秋田県由利本荘市 岩城二古向村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOS2Q1OHlhNXFaam5FVVBZVHBDbkM3TWFBRVplcDF0V3Bmem9ZcGREaWpTZTlMMmlOclg5dmlqeTlyRFpjc0xUY0p6b1lSalRCbHFCUTNKZ3ZwSFV3QXlQWFFBYVdhUW84azdOZlZ0c3BrdnFEeTRBMG9XQ0kxaWJCNDVUQTlndXBlNWNCOFRlcjB5ZTk2TVplUW1xTWdNZWhVWm9KOGhQOGllbjVGYldQUkNmRXgwLUp1dGszQVRTVEU2OVBPS1pKeUIwcUtjdzNjN01iRjFPU2tremJTdG5qNkJYUnh0ZkNtaVNIUE96Sm5UUdIBogFBVV95cUxQOW5WRlo0djNXclFaUlZxdWpSZVJhYmVSSG1LdE1lM1loRFEtV0tZaFMzRS00TjdWZGNHN1VvZVYzcnVINWVBWk9WS0YtY3VxZGN3WG1nLTZ2RmVHcDU0Um83bGN3OUQ2Y3EyTEFQbVJYNHQ2LTloQ0tKWWZqZFB5ZWtQaWU2UjhhVmQ1ak11dnFLdlEtd19OcjQ0MzhIZXpqcWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 東京都あきる野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9iTkk1TlE4M05Nd21VbkpkMDNyd1RBZFhpZlMzdEllTlRaT01OR18wMVhRcU5WNWhkVWlEd3N0dGg5ZzMzeXkwRmk0aDdfa0lROXlEYWNYV2k5Y0RfQi1ZblZ1eDFTd1NZTUVkYUQtcFFzazFOOC0yWjRRYTJyRFk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 東京都あきる野市 入野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYkFkc25nd1lFSzBXMUZyVVdKVFpON0ZySFJSNUdDQkFiYXpKb1VycXJHa1FrWnY4NHVNVkJRRVh1d3BWS19FU3ZuQXZRNmlkU0dVellfek5jMGttekVTbVptSVlmZFBocGdaTHdfbV9aMjVOcURpMURqRHF1YjN1YVlSSXRhQmhPV3dEZEprN0lIajNrY1hQa2tQVUpVWFVSWFRzeE5jdUdLMXZ0Nnl1Q2xmUGd2T0ZrMWQ3eUV4aTdFS2dSTEpGdERCRFVydXhyZXlubUdTR1BPeURDNkJXUm01VUlib3JRdlZWbDRDbUEtd9IBogFBVV95cUxNbGQ0LWJjOWdvWkZldUltWDdXbXlVY05JWG1TTUVGWlpkRU9FWGtXTVdTeDAycW9Ca05fWG14VVgyRk9iR3U0NS1rUEtWZU5KTExSOFA3ODJmbG5HRFowNy1vcnZJQVNsUWNvdkxXSEkxUFlVc2ZhTlV5cmY5dGFBSnk4ZlMzWExtVUJZNnE4MjJoSzJycFNxRFRJMTRJdGtRUUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 東京都あきる野市 入野359-5付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 東京都奥多摩町 白丸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOb1pydVBZNlZFUkhQRW93a25IOTVXdWlMOHpITGZRRXJVNllhUFdpNGhBUWgxVlh1c1daVjJJX1hWMXJfOEpjdmVjSUlfZ3d4ZnRoVjl5Umo3bWhiN2tNMkJnaml2UFRQNXU1UUdPbE05U2RqVGJkRkdHd2JNeHV1Z0YweXhWaU95aGRVaW00QXZQNUI5TDNCUnRQU0HSAaIBQVVfeXFMTWNaY2lQWU9rbi1aY2NGbURJSzQxTWRObTRITVRSeHVjMHFselp6ejZkRXRqNzF0VGFfeFU4RTdfUUJGQUUyOFlFRUZJSWJPcG9JNV9uUFJIUkFyZUFyVmg0RmJmTjRoZnhmZmM2eG1MdWlETEF6YmhUcFFwdXZLWGNfYndCNTJRYXVHZ2xUR2NITi1zeXQwcGtIcFRqcGFKQ1V3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 東京都青梅市 柚木町3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUXJPVGNYd1oyWmJHNFZ3aDdYY1d6bnZSMkFPRnhEaVpaOHY3VFhsTXNmV1lBa0RyWFBqMGNieEFsOUR4WVQ0Z3RxdTA5alI5Z1U5WVRidEpQQm1kR3l4bnZMYlBvbVh0T0NpaGRVQkpFczR4VmJ6RzB3eFhHemVqRWsxTlJPYi1ZUGNZdW96eExkQy03U1MxWUhZWGXSAaIBQVVfeXFMTU5tSU56SkI0Z0pOd0NucFRJMGF6Y2g5azRDb2hOWlRFOXIyQzlJMWtDczB4eGZabnVESlJ1azUtOWFlYlhWY05SVGV4VkNqQ1ZMMXc4Q01WeXROVDdta1JQNHdwVUFwMlo4N1ViMzVyZ3FDVHhVYmhVc0RXVzBDRHFaVzVkVWlEQmY2VUZ3clVFMENiVEZJSHFIaS1BeUs0ckFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 神奈川県伊勢原市 三ノ宮の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPV0RWaFAtd2QtVm5CSzRvNTZEajZPSmlSc3JaeVN0YTltMEJUeVpRZmdzaGx5aE1kbUVyekMwRXV0dlJsSEx2b3R5UVlkenhhalFia1FLV183UF9UNWhhYzVLVWFxR2J6djkwQ0JtMENwRUVlYW9BWldrOGhzbmY1am9GX0tlYWJ2UHZEY3d2aFdnYnJnelhVV2dsNWzSAaIBQVVfeXFMTzc5a1R5R255N0s2Nm9ZOWY2alA4MzA0cFF1QTMxdFdhd0ZzT2RFQk45Rl95NEswMzFMS3FlVktaUUdQUnp4S3hTRXRTa3NWSVFydVg5RTVTS1RoSE41SGxnM2c2bFBYaHdlMjRJRE9hRDB1VHdSMGZDZnMxYTZZWFNnbGpCZmlHUE1jczNUcDlfZU1ybFJCZlB3TkZ6MFBrcGF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 神奈川県松田町 松田庶子の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWkJQOTY5WXNGTEhSejNrMjRfc1NFQXdjWkZlNlIwaU1wd1Zhc1NsOHhaTnptaVZiT3cwT3ljaVFRTTJKSVNLMVMxLTZGR1BJOVlXa3JSZjZYUE1xUFMyTjVrOU9hZTN3anlzc0w1dUwyRy16Ymw0dWJzRHpiYmpKb1o2TkhoRVhLTHdGSTRVTG5mRnltRDRKVnEza23SAaIBQVVfeXFMTkhlaEc0NkNaNngzWV93Sy1qQ3kyUi0tMGdBZl9ZdHhPYWQyaFlkR0RJeVlmYzBpUl9qZFZjeWxqV3pPMHF3NUtNRGIzcVVDeS1WSVJXZ1FDaUtURW94UFV3Wk5ES2hYOVZCMnh2WWNzWVlUU015dGl6MXFnWXJlYzdSVFo5RTlOTHZZSGZIRDJvTFNpdDdyV1M4YlBWb2R5OVFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 神奈川県山北町 川西の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWUd6aDFBc2s4UGhLVWNESENjSWd4elRrV3Z6RjRnOG5wdDZ6TUpaTUExME55S1lvR0Q2TmpiRUVTN3o4ZFZjSXFBU2RTZkpIeGRPSlRESkUxX0JEaXVRYTZiemdyX2NZbjBqU3haWE45WmxrUHIxNHZ3Y004emVEcEZOTFMweVdYY3djT0dwT1hZUGRxTkU1U0p0SE3SAaIBQVVfeXFMT1lUTlR1Q0JLTUlYM043SXkwZ0RpVnZJUEZxMXNFS3VvV0ROOGR3MThRVEJSSk1GY2ZqYjBQNmpLQ1dERVZvTzJRakVXcjl5eVVNb2FTMktUejRQVHJlVGFhYWR4MGNBY0dnRWR2MEVSMGJnMGl0VHI5WGc2aElGR1BvbWNfek9zYVlXekFCd08tSDNIc0xmNWFYZGRvajZxd1dB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 神奈川県相模原市 緑区青根の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUW9UVVJuZ2J2bG9RRGYtVGdyS204QVNUbnBUdEh5V1hja05fanZlanFZNkZTWE5Db3haUGhWUTRya3VSZFBtVDhnT2ZDTXhWT1d1VzhEbU9UR0pZV3R3UjdYYWx4MExsWjF4cWFIbjd2SFNabVpxYUUtUlJtSXBtWEFpUkptWjJiZzliQkNObGNkcnJqdk03WERydWTSAaIBQVVfeXFMTW9NUU04Q2ZHSzlfZjA0STFTTHFqYjJoU2F5cmZBTzR1OHdfS0hUOTNwTi1CbTVZV1VYVjFNV04wM3RyMEZEd01Jc3dFNHJVeUcwUE03bHlEWVVwbXJTM2NDbHFROVlIZURGcXhrWkQ2TnBvY3p4XzVRSUJ3bThSM3FNRjktU1FjWlYzMnk1WUNHN0Z2TU41TWVfZzk5Y1BkYndR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 群馬県長野原町 北軽井沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWDlWS0FqNXZBMldjN3NmWTlCYy01M2hkb2FRLVc0UjlqVTJfV25vMGlyOTFMaDVsVE8xV1dwRm9WdS1zZjJrVDNZbWtFRFM4NHNMWlk2eVA0MFZZc2Q0bC1DbmZXS1d6ci16QThReThINmZjTUlHcklVbFhvOHhJUkxvNEhzZ0FXaFNidE42VzByV3Y3UlczX3pCeHrSAaIBQVVfeXFMTW5kNjEyc2dfNW5CZE1ud3pGZ1Mtb0FHZ3VJWW16QngzazRhTWM1MnNWOEVsNFVYN0JicmtzN2hKTTRjZ0xLcHk1czFHaHc0cy1HU0R2T0xnS0dVRVBCVk5ZeUJ4VVNsWHNQSHFfX3NyVEdsVVhadkpobHFOSXhjRC11NTFxUlJrOURmSUM1bFF5VmcxOFVtOU00VG9BVUpXWm9n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 群馬県桐生市 広沢町6丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE16Qzk5SXNnZEMzOUUyY2xqaHMwVXI4c1h3ZGFFT2pkQVZLMXpKa3dKSXRKb1Z4MXNuaFRDV0NRZHJNelBXdGltNndwRUVNMFhmaTEya3VFNmtNak9UaGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 群馬県長野原町 浅間牧場交差点北側　国道沿いの出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 群馬県南牧村 群馬県甘楽郡南牧村大字大塩沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 埼玉県秩父市 荒川日野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTjdhblRneHZxTDZla1NtUzZNaXc2dXJjQmttOElsUllPbzJrYXhMOE1Qemo5Y3BVTTBzeGF1M3FPYXd0VHllQUk5YS1paVhwTHJ2aEJId3dfeTVnUzhLSnBQUmhuRUd4VlpTVTF4cnFXM1BoZmRPSE9Ib1JfbHVXT2xpZHBxYVh2eC02RzFkLUNiN2N0WkxBaTA2UVnSAaIBQVVfeXFMTVZlcjBIUzM3UFdieUdVc090TkVlVmhFTVk5R0lHcnNsd3JsRE9KR21mLUplTDFKNExmck1BSlZtMlpYYVRoZDlWQ2hZcXRqek4yZzFaeGNQcVV3alNsaEpSMlpRcFNJWXUta0RsT1JCZXFZYjRiVFlBQTJaSUdLcjF0NFVWcnZGSi1IQWlUWkY4QV8zVnN3M3hWdmd5UnpRV1d3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 埼玉県秩父市 秩父市荒川日野地内（荒川中学校より北側に約２００ｍ）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 埼玉県小鹿野町 般若の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQR1ZjUnFURGREUGF0VjhhRFFGRHlTb2JybklUbVF4b21DQkhhRnFnM3hUenQzdENQSXBBSVpPVUpDSVlCemVSRU5sV2VWdUNvb3lOQ0xCNXp2d0d5c3VzY1Z5dnRmdEhFaWhpcUtZMTJzZkRJX1Y5a2hsUVhuZFZ3X2xtS0hZU0Q4bE1WRzh6OU9XWWlyMG9kTmhuVWdYX0FmWlRkcXFvMzV1Z19HR2FsT3YyUzhhQ3EzTWJ6QlF0Szc4bDJ1Q1JDR0F1ZF9xa00tVWxQbWxEbVQzSlNQM0lqTld5VC1GaXZzU2RLLVhjd0syQdIBogFBVV95cUxPMWZNRkVNNlQ4a0QtZjB3Y2ZuWFc4NWZlQ2FFdDBLR0x4Y0RpamFyNmtweTY3LUx6TlMwN0pFQVFXRVlfVHNfSW9MblFZZV9mNlppQlhHcjJpV3NreE5xRDdROXlqZ1Z1Z1VGSURJSk56ZzdMdndBekhiSXFvOENSdjdhTlA5X2oxMXFDNEdISC1oWGFKNXlOOUpaZHZ3Tm94YlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 埼玉県小鹿野町 小鹿野町般若492番地付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 栃木県足利市 月谷町地内 (月谷町自治会館から東へ約200m付近)において、ツキノワグマと思わの出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 山梨県北杜市 武川町山高の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOSjdOTVUwb2ZKUDZIcGVILU5JU0VYRF9CTHVjWk93aFg2SjJnUmRSSUhZNWVJWHI5a2NhejhqdzFQV1RPY0xjQ0JxdVYzUjVFLWVrMVozdjhQTWRKSXZGc1BDcnlVaHg5TnlKUWhRYllPYnFWbTVkZDJaN0V0U0sxOWRFak5zZ0g5ZzJpdGItREJ3ZEhnTWNmZXhFSGNRa0o5VzJ5SnFZaFp5TEpYdW530gGiAUFVX3lxTE9YYmxjOWE3bE9oLTMzUm80LVZMR3NuZUZqZTZORUdWM2I4Zkpha3BNV3hzTWJLazgzSTdiU1dWVDIyc0ZOU3p0VGs3OVIzVU55MS13VjZPaWRScXZmUmE5aUI5eXBKRFdsRURpOTZTWXV0X29JbHB2ZlNva3F2VjZSZXFLNjVtbFdBeml0WEtINXpCSXg4Ti1NbzNlSU9aNXA0UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 山梨県北杜市 山高入口の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 山梨県大月市 大月町花咲の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQYUNuZ3RZeVhDaURjVWtLQTJTaGdMZzZTUkJhdXBGd3JJWi1nZGNXSXdtRGZYOV90S29ObV81R216VjdtRmx3SzBqbE5lTXFtNTRkck0xWnN1eGgtbmdPeUVxWDJiU0tIWFdTTzdGam9WY2Ezbm1SM2NkQzNMMkhkVzlaVzRYWHFWMjZQY2F4TWJwTGNQX0VRSndwbW5FMVAtX2c2SlptYkJkRnfSAaIBQVVfeXFMTzZTUGN1TkNJNnA1NHB0MWtJNTdsQVZTZkNlbTRjbnM2a3NXbG1veGlreExpRzNVZ3VGbmhvTl9ZWlhBOEMyNHV6RW1QWHNKdXM2cmFDcWl4cS1uNjlqX3lGLWw1OExXOW9vUWdtSUpaaWEzVG8zTDFHcERvNUlIOXZ5QXNacC03MUZyemxzQnZOa2toblhXWHpCaGxsVlhCeXFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 山梨県大月市 七保町林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWkROQWRxc09OZERYSmlpSHlhMFNEcTNSTXdwOFNDUVR6X25yRENXLWphdGtQenNQZlFnYlV6eVFuay1BeHlTVWFkZGRFVWR3VVBQbG5rSm42ZmJfUUpISlZVRjNPUEtieC1QVUR4RzFuQmtlcDhTQ1YtaWJuX2RtZkhUVDFzUEJ6ZWNCSjNDendFQW15ZVJrdFp4UlbSAaIBQVVfeXFMTVVqN0FCWWZSVG9NeUJGSFc5N1lMVkQ2Q2JMaUVKcWptRVNWc1ZKRjFDd0MwcnpEaE54V0dVdlJHU2wtRDVhUkVpd2lkeW55cm4yLXZ2cXhPZ25wWkR0Y3oyWEQzazR2WW9UdmZhSDJpck1LZlNyRnQ2bGZOTmpBQlZMVmoyZEZuY0w0Y3l0eVk2MmNpZFJwZlczYXc1clF1QXNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 山梨県大月市 大月町真木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZHNzVnJ3WENLZFpBd1pXWnBYN0hyd3JpejJNel9ROFdfblViclBNM1g2UjFNMjkxWEZzaEVDS21yeUhmQW5MN05BV1pJMjJ6aG5WTUlIdFhLd2h6dDBESzZ6eVhPLTJUUTVleXdHTlFta1djaXNudGo1eTRkMEZQR1hBcEo5b2xYdkxKMXE0NkUtVmFtMGhEVmN4UVHSAaIBQVVfeXFMTlBwSHNKZmZoY3pWR1J0RGlMZ1RfYUhiRTZmUnY3SzhnRDRGZ0o2emZqeDhIXzNtZVAwSTZfU21hSW9VbGVRWVhubU5EVk1YOTQwMTdBcndlTkdfenZBRWxGcXlIU0lyd0M2MDM5RGw2NE5WN3htaEJDNHprY09vR0FkRWU0d0pyNVFZaWcxT2hZYjREbUpjYkYweUZlajdESGp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 新潟県阿賀町 平堀の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9hYlZ6bVRUZERYbVBXYTlOTlZjTlhkV2NQLW9kTjN4ZkEzNFJlTDhZMWNXQUw3OEdfUVNKeDNjbkwxRmM1MVAzalk3M1M5ZVB6d1VYZUNJRE45ZWRRVl94S2RMUnJtdmF5UjVvQ0d6XzllYXc3YnctMtIBfkFVX3lxTE1FTHg2c3hWVl9DSF8xWlZ4UFQ0a0lFaFkzbl9wWDJ3c0tMODJLX2pLRXZyd2hSLW5ETFIta1RDN1NEMTZ5RW4xTk13clBWSHA1ZDB4UUwwSGlhMTB1TTAtWjRJbEpabHNNSFNCbGl1NWdfZGRTeUcyQkxfYnR2UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 新潟県阿賀町 平堀の畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE41ZGNZNU54eHJPV0hUSk1Dbm9XcHVSU19fSkMwcjFmYW1LNThmanhKTC12RnVPZVNOUmJfbHI5MlpIUy1oNmxNVmVldw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 富山県富山市 婦中町塚原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOM1I4NUphOGg3dUNJUzdSRXZsNlMzVlk5Rzh3ckhQeGt6enM4R3VNUnZGeWtaVFhoMnhXTU5XU3lhODJrTXpRYWRzNWxGM0ZPM1ppQkw2akktQ3pHNmFSampSQUhpX0VfWTdCeFNiRW5KRi05Rk52Z1R3VU5STk16T3FfN0Zrdm0xS3dLbDFGQk84VXFYWTA1RndkcGPSAaIBQVVfeXFMTlNrQ2NrbWJxbktSME5YOXFPdlFhY0s3NkN2OGRCbWNBZjN4TEZnTk5MSjdYTkh5NjJGV2JMbzJmWVdQdWtUMWZsMzJwVjNVVXFBZkpBZVd1eDZjV3JTbVNjSDVNR0dlZmt1alNRYzJwN2x1My1ObjNwUV92c01FVjR1S0lLTlpFaHRacFFmNVh2bkJSVjlIMHZPOWZLUlZ2ZEV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 富山県富山市 婦中町塚原（神通川内）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 岐阜県関ケ原町 野上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPXzhGR3JZcWIyT3RRVHNQM3haZnVhOXNPZmdhRDNkWVg4NmR4cktPdHNfZ2diWnloZzFaQWlzTTdpdklXa216aWdVX21vaG9aUGZiSGJfZEhtdkRhclAySzRKTnZLemgybHZ5SHc3X29WUENTdUt1UUhVZEFUQ1BFcU9qUlo4R3ZjNnZFUk5veHBTMGJYeVE5YnRyZnNfOHMtWHJPQXd3WnU4bVNEMlJDYlI4bE9GdlVhcTRCQkRTdmdIOEhjQnJZS0R3bE8xMlFuRnRFTUpGZzZNWnkyNHZhemFxb1p4dGJyNllYZmtrQWRlQdIBogFBVV95cUxNUDE2WkRVVWxhUnFSYjh4M3Z6eGRCaXItNFoyOUdFWlh2V2hZdVQ3cHJtN3BpN0xSUFFJYUZzYk5CODRzSkZvX0VqU0MxaDVpbVNDdERKZkZzUEtEMjZhalhETFMwWmQtVy1ub3R6OVA0Rjhsc0xVN2FPTGNpWlhsZ1R5ajZueGFQamtYbHlrZWpKZzYwckJjdEQ2aWJmRTlmcVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 岐阜県高山市 上宝町蔵柱の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOU1JQOHY0SWhrZEtSVnhNT1c1ODBvSmI3NWwyOUlVZW1IV1FRUkZwY2VoRVBCdUlZLUY4dWNVNXN6dVU3bUxSbUt4LUtGTXBtLXFSMHNhQ2FMTEM1bFJQUjZSWkY2a1I1emFxRVpUMmZDaGk5YnNkOGpBYUg1UTFBSmM2d1JZUzZMcnNyUHA1eVE4Y0w5UjBVNWRKQUZtZ2VheWw5ZW9QbmtZRy1IVmc2TnhtNzlVNnVESGtfTGtfMDVabWhyc3l4ZWhZNGZuamFDNkU2X2xCYkt2LUM1WGlGZ3NkYW9RaUlkdjFXUGRpRkhhZ9IBogFBVV95cUxQSV9CMDRQazAtdjhOS3JqdnFHMjlMd3hFeHQxTW9UM01QZUVCVkZCY3EwbkEweTVkaFJZRWY3ZWNBcXliLU91T01fV2I0UXJ3MHZ4MkZlRkM3RWxFN0d2eFJONTRMeV91Y3FMR2V6SEo4Q3U0VHVESHM3bjE1SXJjN1phQWNLZDF5ZmRKYWpsaW1STi15S3BlcV9LZ3QxazJvYUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 福井県小浜市 和多田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORVh3VnJDS2p0enFwb3p4N0RraFdHazRuRldfR2hKaGRMdE53blJyWDJvbURDRlFvblpKdS1rbVhvNnk4QnB1RlA2U2JnSXY5OE5sMVVvcVFKQUlVdm5GMTExNmszZmZGd1NzX0w0Q1pVZE1EYVR3UkZBYXNBNTRmSUpaQ2pYc3pScWlidVhSbGh6eThwa0dKVnBicTjSAaIBQVVfeXFMUE9qSXEzcWxmbHliaEd3RkN6NDlpM1VsQ0ZOaHYtdHhnSU03ZUp6NHhTRDBHQ1ZLMHp0cFBhS0sxUDJxZzFsZFk4aXNSTGg0dG5YOTZmOTNETUhaTFJsVTJXNC1rRlBxVXJmNzhZQy1qY3Jtd3RDYm8yR2hqcVR5bzQwOTBtV0VXOHcyVEhTRHFlNVhRUmhqbkNzbFhJMDh4cEl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 福井県小浜市 須縄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZFR6Zm1vcnZ4dDY0dFdMZWFVN0dyQzB2MmtCMjVQVE9HamxtWlBKd0ZZSUF4b1QxZnJVOUU0Q05lVHBVS19OYkkxZC1PTVBjdzcxU1gtSXlIQXFjNUdpWktEajluUmhCSGVSeDIwckdtbWRhNjAxYTlyalRWalEwOER5RlZ6NnJXUVRySHZRSldhWHdVZkpmOHJkZ2zSAaIBQVVfeXFMTkRaTTBNZ2gxWUtFMU0zU0t3MHJVdG15eUx2V0ZGRVNHa1M5VHlVN0hhY0xQcTFJdzhZbHE4UFFtaHo4c21rcEY5Q3UtR3cySDZVRUx4am01Ym5JS3FWTUxDazJ4elBRRm5RS1dFOUQ0RVVUWjR2eVcwaXN3dVYxUVJVVk15eno0Ny1vbXRKLVl1eElxdUhpNmpQT2hwQ3pYRlZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 静岡県富士宮市 長貫の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 三重県紀北町 紀北町小山浦（山林）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 京都府京丹後市 丹後町宮の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNX1Q0Ync5azAwaEt4eEl6aEg1VFp2NDBoSTZ6NWNyRHN4eGRrTU5RZlJQeGNtbVNZSHZZMmdxbE1SOGlrZlhtRG1aMFhXRl9NeXpQNFNiNjRHeXNHbVNSR3l1VjBCZjMyZ0E2OF9xM1h0NEI5Sm9WUV9SdGdPblY1ZDlZSmZTV2tmQkZOUXdVempaOWdPdnFvMVdEbExiNFl5SGlZUjdxRXV2d0VKUzRj0gGiAUFVX3lxTE9UMzdVcXk2UE8tc3p4N0MzMkhIclZ4a0VBd0dUSXptT0FiMGktTTZPMmxGRTlyZS1JRk9GbFJkMC1IWEljUUhtOVFHamhidzQ2Zks4bkZQX0E1NFNqWllBV0hudjFvVk5FaU9SbzJJcmlvMWV2ZjdFYUtOZTcwSWw2OF9kS0ttM0N6b3p6X2dDVXNfTjF2MUcxYmxreGtaNlZBdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 京都府京丹後市 大宮町周枳の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVWxLcHVHcGJUckZVNFJDNi1xSnYweVRhT1hjXzZuWjV1WWZ1ZVRhaEM0SFl5LXdHY2RLQjkyYVBoRUZrcjRHbTNCVXc5Y19VYTBvdDA2Q3I0SUFZMXlTaHp6emx6YmFaV1VHZHpDRUlpRWk2SXRzRjkxQjVLcGcxVGozbHlKbnJSX2NXejZHNi1jS1ZQYjBHcjNyMnDSAaIBQVVfeXFMTjltV05RLTl2ZXd3c0NSQ2NkeFVDdnAyb3lKenJvYUtQSzI1MXM2dm9BVVdGQXV0V0FMN0JuLXBRNkRZX0w3dXROcmUxbnBWbC1WYXRMdC0tdEl6aFZEbVF1TjRCT2RJY2hLbTBXdVF6OGpNRENZckxrLWtieXNmVGRXemlTWTFOZ1ZlYzg0OUF0S2x3VHk1WkNZMk1OTFY3UDRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 京都府京丹後市 大宮町久住の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQY0Uwdl9SY2ZtQk85RFdjemZCOXlVMXBtNjlNdXdCN1djZ2ttQTRPbDI4SU1LS0U5cElucC1aV0dNMmFwMklrczRvcWlScmJWRWVKMmFzdktEQTlXNEFDSWpTQW5YckpQWWRqdFNqQjdwZFBoRFRIcWtrZGlNOVFCaGtqREtUbHVCYVBjNWFudnRsSEhVX0N0M2lkdXDSAaIBQVVfeXFMTVo4YjFjV1lIbVRRNGdxQlBDQ1d0elpGVGF1Ti1qa0piWmdNQ1doVFlleHZrR04wLW1lZVZ3ajF4RkdDd1c5VVNXWjh6TVhtT2NZM21pRzZveUk1NVY3dDRGQ0VqeHBjOGdWaGR1VE9GaEFtTW1SUWswWE81enFYcHM2TUJNaGM4S1lTbjdjOThLcnlRNkNwRlltcUNZZDdZNVJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 京都府京丹後市 大宮町森本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQbVVWckVjWGpxYlUwZ3NMYXRIcHJVQzJUcWN2N1ZRdWc3ZW9kdXhKckVWQVZ6UXF5N3BXUm9fRFhfelE1bkNMc2EtazBiNEpGU0V6REduWDE2QnE3WXNOYkJ6aDJNdTlIM2daem1BbDVrd3R5Y2ZhVXROQTMxVVR1cEx0NlJlTV9sNl9UbEp5RGVqZ05hY3JVck9XNC1hVXQ0c3fSAaIBQVVfeXFMUG1VVnJFY1hqcWJVMGdzTGF0SHByVUMyVHFjdjdWUXVnN2VvZHV4SnJFVkFWelFxeTdwV1JvX0RYX3pRNW5DTHNhLWswYjRKRlNFekRHblgxNkJxN1lzTmJCemgyTXU5SDNnWnptQWw1a3d0eWNmYVV0TkEzMVVUdXBMdDZSZU1fbDZfVGxKeURlamdOYWNyVXJPVzQtYVV0NHN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 京都府福知山市 拝師の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTkZhNzYzYVJGY3U5eW1FT1R0M1VKT1NTYlhpMWhqbjRPVENUMHRnT0d6TExmZVpEM1ZMdHU2aVhzelZtMVZNVUxLczVMMHY5YVllWDJ1YzNxVExLWnJlSzdXMW0zbWFaZnIzaFRPbjFJZHZhVkRPVk5zeF9ZakhJd1QwU2RSQ1VoUlh0UnJGbVJpbHZDRnFlS2RYN2PSAaIBQVVfeXFMTjZEY1dZS2l4MHRJQ1B0UV9yd00xOV85SVFUOGJMQmkxc1BQRW0zSFY2NmJmcjR0TTY3RE9NbUthUGVGblNDbk03ZmtYeXRkT2FQVkZkbVZ3cFZFeWVhQ1FtTFR3MXVWX05zemlJbldZbXkxZVN5cHJ6Yjdqb2hmUjYwaXpPTThnb3hIcVJRSFhJRVA5R29EZmRtN2k4MXJEVzRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 兵庫県香美町 小代区茅野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQUhVN3NzRGI2cnAwQkx2TkFueWhUaE9kU05oV213eXZYeUo3SjhCZTFyX3BXREpiVFdRN2N0ZXZWdWptSVFPTkdiTFZscnljSm5HZ2JKRG1wcS1XZndtVksxWGJTRHR3TTQ0WmhwaURkRXA5TUtFX1FGWmNwdkZ5d2gwT3VOUVZuc0RXaTZJdjRGRGZZak10WHFSNETSAaIBQVVfeXFMT2pPc24wRml2aERzZWRBYV9zNjdQZHZXeTVxU09CZHFvdFpNRENpeElCczRlN3ljN3hTQzgzVjJrcGM0SjU3ZnhtZ2trdDM4ejVuLUxEOG1fbGowMUpXb015cUMtVnBTMTQ4d2t4TkxPdXdTSktrdFNkTlJpOWV5R2lnTC1SM1FFdkpUNGo1ekM1QXVyYzlnVC1KY1ZaVnJha1Rn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 兵庫県香美町 村岡区森脇の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVDVISmpCRDRNSEVIWWJPZ1NTT0xla3pHRzZnajZBNHE4RUR2TlFYWmRFang2blBsWHBpM3lXWWkzR2laVDR6a0tZM1dWTW9uYU52dlVZcWVPRHc0NFd1RDkwbG80OVNWWUFSTTB1LXlENWdtbEtUelNEbUhhLWg5dzJpdE5JQWRzQ1FjVTI5RjYtNjVwSFh1aTZZUm_SAaIBQVVfeXFMT0VnZVdWSEF3bkdZZ3JucE5GM1BZRTZVMTRKcENJaWpTYXBWSk1TaDc2TG4xbENiMVo4U0hwSDF0YktZUk9hUGh2SHN4MHEtcW9GZ3AzVU1OWmpMcG92bno4dE1TUU1qaWdKR3ZMWURUUmhldUdqRVlUUFdsUkE2NVhQMmxETVdCaWJNWW1xVWo1UVNhakFFMHloUWh6MGllcWxn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 兵庫県豊岡市 三宅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONXlCTVh0bjQ0XzBmN2RmWTlEbFdCQXdzODNkeC1CSlAxcHFKRkg0RUhpbXNwa2ZEd2ViTzlnOTlib0VJSWpNX0lOVlhyanpLeTE2LTNKZ1JKRmN0QzF5dmFSNkhONUJKUmY3WTVzS2pERjEwZTFWWDBmWU1UaHFSeXpoQzVyLWhtWC1FREVlQXNBbXJxTmIycXpCTVbSAaIBQVVfeXFMT282aV9mWEhCREtLS1JHRl9mam9VTEdBWWRING1XYkFFcm10ZFAtSExIRFZGczhRZ250cXhyNmhfOWtZTGFqOGlCbzZVaWw0RjdzTDlUelFPSFN2QjhkS1QyWDRwVV9ockJyNHpld3NGSjROdWlwNUFFOGNZR29PcDNKX05YbXAxUUZ6eXlTVmRfV2dFVXpObktHZjgzaDg1anFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 兵庫県豊岡市 出石町寺坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVXpLei0xcVpJOFFPNWItdFotUVVOclhEQlVvdVBXTW40WUpzZ1B3c2pTcm9MNUN3dkxKclBQcjctbGNPdFNjdUkxN3lzUEszWmptbDdaVXNtbERCZHNrZXFhcnRIclBzX1NiZUFxX05QR0lqdl9NelJMWnZQUW5ZdzQwR1JjNEpjaGFtRC1mbkdlYmh5SXphLWJKcGXSAaIBQVVfeXFMTzBUbVFIWEcxRjFvblVrTVpWWnY4dTFhYXJIUVl3RGpKem5uQ2I3LVZySC1YNXlWMjUyYUFzeUpWcHphUXJNT2JiVThzLTFqNllETGVNdDdLMjhlRGc4RGVYbFlBdTYwcU9tbEtLeXZZNlI1NW4wQU1GWUVzNktQOFZfUno3V3RCWmFZQ3JQbFBkcGo4UVpkWHVJVTV0dXZTcFFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 兵庫県朝来市 山東町粟鹿の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORXhSUlhiVm5pRTJ3cGhYUnhRUC16cjJVeGdXM3hyTUptaUxFNng0V1hGMnhGTzEzUFFEejR3T1FFd0tlV0FFQjdKREg5QzdOUDRBbkstaHU5a2dPSVFBb1lMb0Y4RFk2YWlxcUdTMk1fcUJRdzJuUGJGTkNQVUlneTJ2RFJHU1UyWG12ejRLWHZyWjBGV0p4UE1UNUXSAaIBQVVfeXFMUDNqRGMxVGdSRW9HLWdSY1lLa0hxbUpnaTMwN2lmQUFhYkRrR1JDLVJsS1kxMGgwVk5scFRjOTV3b3VDdDRVUVByZmt0bDZTVk1qX0llVlUydHVYMlF1RWh4NXNESzJCcV9NVUNid0VzMHJiOGdEdFJ2SVFxQ2JkeXpURkJxekJmMVVKaWo4SXY0YXlYVDRFOUlPMGpCR2J1TUFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 奈良県五條市 西吉野町尼ヶ生の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 奈良県川上村 伯母谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 鳥取県岩美郡岩美町 洗井の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 鳥取県日野郡日野町 三土の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 鳥取県八頭郡八頭町 日下部の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 鳥取県鳥取市 佐治町加茂の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 鳥取県鳥取市 佐治町畑の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月29日 広島県廿日市市 吉和細井原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPS3o5RUFwSHp4bEZXYzNIUXl4UUhXcmpGOWRwWjVpT3ZvempOUDVqMzhTZWk4ZTFPOXhJZTV2YXRZaFMzdHhzS0NJbElZdHVZQXk1djVGS2tlSVJEX1JKTF82Rm9TY1AwSGZldTZHVGV2YWFOQWhVTzJiSlhfNUM1Y2RGTTNVa2hLbHlEWml3TmlTQTBPSWppUjlHclLSAaIBQVVfeXFMUFlrR1J0ZWl6WV9FelA3YXpsNUxLNkVBUWd4T1NnWUVJemxmQklRb01WcXZuejhXNlBOUk5JSEdFMXA4OFJSSGx1TXc4anRQamdwYmFUdS11NW9iZmFhVVNJblFVQzYtcjl4Wi1CQzl4OTlJZnNVbkFKTllGdXdtNERGN0dIUHVoMWZzckZ5T3V1NlUtZlBlLXpNT21wSHVHeFV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 山口県下松市 星が丘の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZkFpQ2xUYVlpSVg4eHlrMTNqYXJ6VlE2M1N6Xzh3SkhHRXFkcW4wZGlJOXNZcEFzQzY1ZEM5WUw1NEZuNURzYlFrWHdiZVFNd0UydmpVUTQwdC1hUC1JSVVxLTlVVlhYTmtBekFLT0F4MGFlVmRJTlMyamUzS3BpSDdFUlRZdmxldzBMc2F6WVcwb21WTGJ1SFZnaHPSAaIBQVVfeXFMTmN3WlVaVnpwY1dQd19xWXQwUEFWbkxJdmlQZ0M0VHp5a1FTbnVBOEZnNVJoZ1ZLeHhYYTBBY1dFdnJaVHNzWjdCcGNkblFkMWdJeFlQNTFwLTFhaXlYOW1MWXZhUW82NDhXeHhpSTBFOTVfTFhwWnB1bmxadlJDZG1pZ2FjUVVrckFQMzd1OTVXQUdlRUtJeUlPZXFVZXBKN2ZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月29日 山口県下関市 菊川町大字七見の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"京都府","count":10},{"pref":"北海道","count":9},{"pref":"鳥取県","count":5},{"pref":"山梨県","count":5},{"pref":"東京都","count":5},{"pref":"兵庫県","count":5},{"pref":"福島県","count":5},{"pref":"神奈川県","count":5},{"pref":"群馬県","count":4},{"pref":"埼玉県","count":4},{"pref":"岩手県","count":3},{"pref":"新潟県","count":2},{"pref":"富山県","count":2},{"pref":"山口県","count":2},{"pref":"奈良県","count":2},{"pref":"岐阜県","count":2},{"pref":"福井県","count":2},{"pref":"青森県","count":2},{"pref":"三重県","count":1},{"pref":"島根県","count":1},{"pref":"栃木県","count":1},{"pref":"静岡県","count":1},{"pref":"広島県","count":1},{"pref":"宮城県","count":1},{"pref":"秋田県","count":1}];

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
        <span>対象期間: 2026年10月29日</span>
        <span>·</span>
        <span>公開: 2026-10-30</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={81}
        periodLabel={"2026年10月29日"}
      />

      <h2>全国の出没動向と特筆すべき事案</h2>
      <p>2026年10月29日の集計において、同一事案の重複を除いた全国の出没総件数は81件であった。都道府県別の内訳では京都府が10件と最も多く、次いで北海道が9件、鳥取県・山梨県・東京都・兵庫県・福島県・神奈川県がそれぞれ5件、群馬県・埼玉県がそれぞれ4件と上位を占めた。</p>
      <p>当日には人身被害の発生は確認されていないものの、生活圏や公共インフラに極めて近接した特筆すべき事案が各地で記録された。北海道札幌市豊平区では、深夜にごみを出しに外出した住民によって住宅街をうろつく体長約1メートルの1頭が目撃され、警察が警戒活動を継続していると報じられた（※1）。また北海道枝幸町では、保育所付近でクマがハロウィンのカボチャを食べ、近隣の小学校付近にも現れたと報じられている（※2）。神奈川県伊勢原市の県立公園ではフンが発見されたことを受け、安全確保のため当面の間閉園する措置が取られたと報じられた（※3）。さらに、交通インフラに関わる事案として、福島県福島市の国道115号においてクマと車両の衝突事案が発生した（※4）。島根県奥出雲町八川では、午後4時55分ごろにJR出雲坂根駅から約600メートルの国道314号付近で体長約1メートルの個体が目撃されている（※5）。</p>
      <h2>地域別の出没状況と傾向</h2>
      <h3>北海道</h3>
      <p>北海道内では計9件が記録された。札幌市豊平区の住宅街における深夜の徘徊（※1）や、枝幸町の保育所・小学校周辺への出没（※2）のほか、新得町上佐幌基線（※6）、留萌市大和田1丁目（※7）、南富良野町（※8）においても出没が確認されている。都市住宅地から農林業地帯まで幅広い環境下で個体の活動が確認された。</p>
      <h3>東北地方</h3>
      <p>東北地方では福島県を中心に複数県で目撃が相次いだ。福島県では計5件が記録され、白河市の市道上で車の前に体長1.5メートルの個体が出没したと報じられた事案（※9）や、福島市の国道115号での車両衝突（※4）、柳津町内での目撃（※10）に加え、柳津町で3頭が目撃された事案が別に2件記録されている（※11・12）。岩手県では、盛岡市で高校の近くにおいて2頭が目撃されたと報じられたほか（※13）、盛岡市上堂4丁目での出没（※14）、花巻市東和町落合2区での出没（※15）が確認された。青森県十和田市では米田笊畑（※16）および滝沢指久保（※17）で出没し、宮城県富谷市明石杉ノ入（※18）、秋田県由利本荘市岩城二古向村（※19）でも出没が記録されている。</p>
      <h3>関東地方</h3>
      <p>関東地方では東京都と神奈川県が各5件、群馬県と埼玉県が各4件、栃木県が1件記録された。東京都では、あきる野市でクマらしき動物の目撃情報を受けて市が注意を呼びかけた事案が報じられたほか（※20）、あきる野市入野（※21）および入野359-5付近の畑（※22）でクマらしき動物が目撃された。さらに奥多摩町白丸（※23）、青梅市柚木町3丁目（※24）でも出没の可能性が記録されている。神奈川県では伊勢原市の県立公園での閉園対応（※3）や同市三ノ宮（※25）、松田町松田庶子（※26）、山北町川西（※27）で痕跡が発見されたほか、相模原市緑区青根でも出没の可能性が報告された（※28）。群馬県では長野原町北軽井沢（※29）、桐生市広沢町6丁目（※30）のほか、長野原町浅間牧場交差点北側の国道沿いから南側へ移動する様子（※31）、南牧村大字大塩沢で柿の木に登り実を採食する様子（※32）が確認された。埼玉県では秩父市荒川日野（※33）および同地内の荒川中学校より北側約200メートルでの住民目撃（※34）、小鹿野町般若（※35）および同町般若492番地付近での痕跡発見（※36）が記録された。栃木県では足利市月谷町自治会館から東へ約200メートル付近で個体が目撃されている（※37）。</p>
      <h3>中部地方</h3>
      <p>中部地方では山梨県が5件と目立ち、北杜市武川町山高（※38）、北杜市山高入口のデマンドバス乗り場付近（※39）、大月市大月町花咲（※40）、同市七保町林（※41）、同市大月町真木（※42）で記録された。新潟県阿賀町平堀では通常の目撃（※43）と畑での目撃（※44）が記録された。富山県富山市婦中町塚原では出没の可能性が報じられたほか（※45）、神通川内を動くクマらしきものが目撃され、痕跡は未確認とされている（※46）。岐阜県では関ケ原町野上（※47）と高山市上宝町蔵柱（※48）、福井県では小浜市和多田（※49）と同市須縄（※50）、静岡県では富士宮市長貫の芝川出張所南西100メートル付近（※51）、三重県では紀北町小山浦の山林（※52）で目視等の記録がなされている。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府が10件、兵庫県が5件と多発した。京都府では京丹後市丹後町宮（※53）、大宮町周枳（※54）、大宮町久住（※55）、大宮町森本（※56）、福知山市拝師（※57）で出没した。兵庫県では香美町小代区茅野（※58）、村岡区森脇（※59）、豊岡市三宅（※60）、出石町寺坂（※61）、朝来市山東町粟鹿（※62）で出没が記録された。奈良県では五條市西吉野町尼ヶ生で13時00分（※63）、川上村伯母谷で19時26分（※64）にそれぞれ記録された。</p>
      <h3>中国地方</h3>
      <p>中国地方では鳥取県が5件記録され、岩美町洗井（※65）、日野町三土（※66）、八頭町日下部（※67）、鳥取市佐治町加茂（※68）で記録されたほか、鳥取市佐治町畑では柿の食害およびフンが確認された（※69）。島根県では奥出雲町八川の国道付近で目撃され（※5）、広島県廿日市市吉和細井原では出没痕跡が確認された（※70）。山口県では下松市星が丘で出没の可能性（※71）、下関市菊川町大字七見で目撃（※72）が記録された。</p>
      <h3>四国・九州地方</h3>
      <p>四国地方および九州地方においては、対象期間中の出没記録は存在しなかった。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没状況・特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">10件</td><td className="px-3 py-2 text-xs">京丹後市や福知山市で多発</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">札幌市豊平区住宅街の深夜徘徊、枝幸町保育所周辺</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">鳥取県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">鳥取市佐治町での柿食害・フン確認など</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">大月市、北杜市デマンドバス乗り場付近など</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">あきる野市畑周辺、青梅市、奥多摩町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">香美町、豊岡市、朝来市での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">国道115号での車両衝突、柳津町で3頭目撃など</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">伊勢原市県立公園でのフン発見に伴う閉園措置など</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">南牧村での柿食害、長野原町国道沿いなど</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">秩父市中学校付近、小鹿野町での痕跡確認など</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>本日の記録から、餌資源の探索行動と人間活動圏への顕著な接近という2つのリスク要因が明確に示されている。群馬県南牧村（※32）や鳥取県鳥取市（※69）では柿の実の採食や食害痕跡、フンが確認されており、さらに北海道枝幸町では保育所付近のカボチャが食害を受けている（※2）。これらの事例は、集落や施設周辺に存在する果実や農作物が誘引源として機能していることを裏付けている。</p>
      <p>また、人口圏への接近度については、札幌市豊平区の住宅街における深夜の目撃（※1）、枝幸町の保育所・小学校近隣（※2）、盛岡市の高校近隣（※13）、秩父市の中学校から約200メートルの地点（※34）、北杜市のデマンドバス乗り場付近（※39）、足利市の自治会館付近（※37）など、生活動線や教育・公共施設と重複する地点での事案が多数見られる。加えて福島市（※4）や奥出雲町（※5）、長野原町（※31）、白河市（※9）のように幹線道路・市道上での遭遇や車両衝突も発生しており、早朝・日中・夜間を問わず、住民の日常動線や交通網における突発的な遭遇リスクが高い状態にある。</p>

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
          <dd>2026年10月29日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-30</dd>
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
