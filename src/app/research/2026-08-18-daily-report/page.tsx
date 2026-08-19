// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月18日 / mode: daily-report / 生成日: 2026-08-19
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-18-daily-report";
const TITLE = "2026年8月18日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月18日、国内で85件のクマ出没が報告された。特に北海道(19件)、福島県(13件)で多発した。宮城県仙台市では園芸店従業員が襲撃された現場付近での目撃情報があり、都市部における人身被害リスクが顕在化した一日であった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-19",
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
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
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
      "title": "宮城県 仙台市青葉区：園芸店従業員襲撃現場近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5mSjAxR180eW9jWS1tNnpMMERMaUwzOTdJNl9iMGwySk5oSm5BR0JnbWZscTZFY09jRGJTSkxtTmVDSEVtN1U4bDg5NklwSEZhczNmSUc4aV9KaWRQQmVlcTE3YXBueERGTm52OFVjSmR0aW82LW5BWm5meXRMLVU?oc=5"
    },
    {
      "title": "宮城県 仙台市青葉区：青葉区の園芸店近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9MbzNrdXNCSkQ4MTRDVHRXQkVWUnhkeDAtZGwtS3ZDZk1pZ0plbGg1M1l6M29HeERPYkFEeW9jVEttS3VnWDM3TmxhajNaX2hHTVU4VUZfMW51LXhHSkZYeHdwaUtMSDlfdmp0cDQtQVFKWEt6SXRsMmc1dEFCVkk?oc=5"
    },
    {
      "title": "宮城県 仙台市青葉区：青葉区の園芸店近くで目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1CUEs4MXlwbUhWVXZsampidHdlWVN5S1NucUw4dGN5eEVWRk15cnRPRElYcnNMVTdoem9MZkVROHJPY2NuOGhIQ3BhUmI4ZU0?oc=5"
    },
    {
      "title": "北海道 浦河町：上向別でクマ出没痕跡あり",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdlVEZURHd0U3RjZIV3RKdjNacFo2eG9RTDhaT1NFbGw3cmtPdDFpUk0tOU9OREZ2NWxSMGtZaHBwbDgxVTZLVXBKVkJrQlB3WnUzY2RIS0wxUEpmeC00ZHhlZkx4YzB0dlVVNTRMcHVGZDBHS0RSZ212MFdxYy1GV0JQc3FtSlItaUJEazhDMVo0TEZRNHBDVl9Ld2_SAaIBQVVfeXFMUDdFdkJUMzZYdXg5dWlwbmFlRm9fNW9wVXZ5R2dHZ3dYVEZHd3VuX2dnWWNTZzZob1hYR2NHeDVFdlFzcEptX0NKeEtGdjNSYl8wYlJfbzZtTjRvS2g5b2pWSVRFNk5qVmowOS1lYTFUTGxIckRTVWRxZG9TY0R4MWZaZG5tODIxdU9tRWV2NWlKbmlKcmJfeTY5Qm1Tb1M2eDFn?oc=5"
    },
    {
      "title": "北海道 森町：森川町でクマ出没痕跡あり",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcE1iZDZ2NVl3UWs1ZTQxcG1DZ0ZQWnlRRUhaRGRVTzBWZ19kbTJ5UDFZX0RuRUNEekNtR3NBTmJzVTJSQmxEbEp4aXFIN3IxWDdNd0U2dEMzclFrQUtySGJPNWZrUmlMSDFERFFoZ2N0ckQ4SGNqQkw1TmRFRVBHM2Y2UjhWRmRXc0tjdm4xdC05UE1XWGFkNDF4MU_SAaIBQVVfeXFMT0NfN3A2dUl0RWRVYUpqU1hCRE5kOHB2RGo3NXM0YW9lNmYtaVpONW00anhoNDhiVzlLb2NSb2ZJY0t1eExMaUZSVm1uRVFPOTQ2OE5JbHN6YURVSER3QjBsb0wzS1BsSmtoNWtGYzVNaGRrbldISU1aVkZDV2lfMDZUbEhxbnRSSlFCLTh2c2lNYWFjVHBMM0Y3MWFOdjdKcHd3?oc=5"
    },
    {
      "title": "北海道 小樽市：朝里川温泉１丁目でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUXlnTmRpV256SFZpWVBnQnVfWW5kNXJnd1FQd1FqNF9wMXR3S1FQOV9NVEdkQW9kNUdxRmc2VmpKUWxXaFVpMHc0T2hKMW4wZHB5dUEzWWNieFpVdGZJaThNcW5MbVB4MEo5U2hPX3ZZRUk1VTYwZjBYWXdHR3Z3WUJaUkc5VWpOYmhadHRXM2Q5NWlOZzZtbTlXVGHSAaIBQVVfeXFMUEhMT25UeVUtOUVncXl4MXg4U0YwZVFYeTlrNjh0Vl96SjlGbGZMTW1heHJaNzZPTTNrZTVYQ1FhRFFuZXYxd2pHeUZYczV6d1pIaHN3SUU0TjZIaE54dlVpX1VtZ3JOZ3JqNGd5UEx1QkxQdWt0MTlBcmNwNU42NkI2YmpkaGptV3R4cUZFTUxrUHB3RGNXeHdWdmktTG14NGxR?oc=5"
    },
    {
      "title": "北海道 天塩町：天塩町川口でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT3dQTUV5RUdXd19sQU5hVjFRTlQtSzY1Vno1dkNXZTU0M3huMVFiRGFvQWJHdHYyUVRkeUZTSU5BSGV2WEs3R2NMaTRabi1qQm1nUUw1UzlGV1VscDVIWkxPaVhkX00xb3hKWDNMeUN1SWc0dzJjaTVCRnJ6cDR0ZVdJUnp1S2pWRldSUU1OdjlSTnlkZGJMWDRfNnPSAaIBQVVfeXFMTUlnTFpLb0tsMlh2V2kxYnlhUnkxUmtQUTZKZnF4ZlM2RzZOc2xhOTQ5NndNYTUxTG1UMlpyQ3psZ2VwWXhqbXBWazEyajgzVUd0WlZyZmlSWUNXWk9vV09ZNW9WVFI4djJzQUNHZG9OSUlKRUloVTRXc1R4TjE5UDZOSUUxMnR2VEJTcnBhVFZqbllGemtuUjc5Sl8xcVY1Z1ZB?oc=5"
    },
    {
      "title": "北海道 厚岸町：厚岸町有明２丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNjFlRGJibXpxbG94aXhYTkNwQkQwTUxmQy1IaDE1LWloMmpJTFBnelZjb2haMElDRlFXOFQ1R19SRUNMaVQ5Wno5dWtaVHNINm5hTzZRUkZEbjJFdThPTUZaSEx2YnVpQy15bGpKSzhOeGs1OV8wcUZUdTlPRFNWbFJPQzV2T2p4S29VVmFCY3BRN3lDQ21ENm9MZkbSAaIBQVVfeXFMTXVINkpOcDI3STROcGY3NmlEclpFLVN2ZGNpWWYtdEtacENEX2VvQVJyMWgybFR6R2wxS2t1VXAzYzh6TzBBRmJVZmxjNkJFYkpMaHBhRjNlNkZXZ21uNkkzaGNSRmdSMTBKdTlEQnQtODRGNVpDTFZoZ2UwcHY5RGs3Y2xMUTFXb3haSVEtMTNicV9fRTJVMDluMEZ2N3MwZXVR?oc=5"
    },
    {
      "title": "秋田県 鹿角市：果樹園でモモ10個が食べられる被害",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5pQm1HTVpHZHdHbWRSeWE3UmxpWUNZTDZYUGFST25fOTREb05ITmluVUFVWFhCVmxIUXpjbTZraHhYTmhscXpvbzhGZVRnUmJVdEFwTjlqM0dTckhyYzNFVDZB?oc=5"
    },
    {
      "title": "秋田県 由利本荘市：軽乗用車とクマが衝突",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5Id2xiOEhDMnUyUWZyTjhGTEtWUVRreXdSeXIwT01Md1RCRExBZEJkdXQ3Zk1QYjVqSGd1U3ZMU3kzZkZxZDJhWllXeTgzeXQ0UklVdW5nQkZaVlRydU94TG1n?oc=5"
    },
    {
      "title": "青森県 青森市：浪岡でクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1FNnBBLXVUclFoZmVmRVE3MGxWN2MxT0NMRVdUYndzZEJ6NlRTRzZuaWJBRFp5Zm9RYW56LVlXd0pBN3JfRkZZdzgyS3BueXZfcDFYV2Z2NFE?oc=5"
    },
    {
      "title": "群馬県 渋川市：伊香保町伊香保でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdmlHNHE4SEpRN0I5NTFjVFZURzZNUHZ5WUhRUGdheFktUXVLX2p4NGRGeVdtbVVpUjZ5SEh5Yl91MER1bHBRZ0FTM2RtNGl0SDRmbDVUSU5iY3d3Tzg0Z1diZG1DYXEwNWlOS0ROU0RRY1lnWU5odmNfb3FhcEhmZnIzRWlndjVTSzIwak9EZU5od3otcWRESXNsZWfSAaIBQVVfeXFMUFdvelFYYXpIRWJpTnhrM3VEYjZOcXhuSEFiSXFGTnlERERKTVJHQjFmRlR5SUd5N0l4NGFlYnlhOUZaLVkwYmxsZXMtWU51QUdmcXhNeVM1ME95NS1HZHJsdVVOSnFzVXBoMUNtTmlHS1N1Ry1ZYnIxbFo2ckZ2WXRDTTJkUkM0LWZQWXZwSnhmSHVIUWR2a1pydFRyWkE1OXNR?oc=5"
    },
    {
      "title": "群馬県 みなかみ町：小川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPeFNwcVRnSFNJSmF3OFphUTByaE4tNVpYb3lqSEZseWJMSC0taHBka2pILWUzVWZ2WFlqNk40S2M3WF9XMTNWVTBzNFRvNUVIdElSUW9Mb2RIQkN0UXgxSWJVd0JIMmdSbXIybWF6di1KUHdtdWxrckJtQURseGZtUUZpd2Q2VWZ6ZEtrdHdqOVc3YW1KSVY3dFBmOUE4Z3FERkZnTk5TMUlsdUQtek1OaGUtRjMtVEhYUEpSX0xaWGI1NXFZbnRuU0JzUFc2NWZhQVBfY0RpdGd5a3Y2Y1VxdW5ocHFaY2FBWkhzWnFRQlFOUdIBogFBVV95cUxOTHU4QmNCdHFEYVludXFfMm1wVnFBekpDY0p5THMxSXpNbjJpQjdyOEg4VVlyRGNpT3hnMHlLS1A3ZmhjTnlOanZ4SUNaMVVjQ2lyMlhmSGRaM1ZlZlU4d1ZWeDMzclFQNXRQUFhFMk9vbTlNVk5jT3hZSk1SWm5Sc2JOek5JaXpyT3Z4VUdlRk1SaHEzSVJNTFJLQ2ZXMWNuLXc?oc=5"
    },
    {
      "title": "東京都 奥多摩町：原でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPczlxODBfdFBzdHQ4YmZ0XzJOdnRsZ1N5bFJTSm1NUEJ2TEZVZU9EOC1EV2pBSlp6MWxYSjJ1TExCRVFOZE9nZElXZ1k0ejJvdVE4T28zMUpOTGRxTUxRQktTNFBYRkhWUjU0YXppVjJCZzZMdXNKM2pBYm5Cd0stZVpuMlJsSVMyRDBVcnUwX3FYZ0FmX0xTcllEeGJHcDBUbUNqVVd5MUlWMm9yWkZ6aUtOTGFGV1BPZ0tVWl91VG9DWEZ2YUlTSXMwTjJKRG9QWnVSak1fN2owQkxidElIUURIRUxnMzdpcXcxSV95Y3Bnd9IBogFBVV95cUxQZzRRWHMwMS12NEtoUWFXV2VjNmpmVGtCMXpobl9kTVhPSkk0MUVDNVh6MXQyaTRNZUpKbFg0aVhWbTZ4dDE4ZlJXZnlWeV9HdGVOMVhTbTZKbG1qcDB5bXNOR0pBWDhvaFlka1dtRTRHdUZiYjJTbmpUT0Q5VGtJR0RIRHQzTHlwNlowRmxNWE9oOEFDVFY0dlU5N0prQXRHZkE?oc=5"
    },
    {
      "title": "長野県 千曲市：市内の畑でブドウの袋が落ちている食害跡を発見",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPOWZwT284TkViRHFCdjRTUC1VM3V3X1F4NVBDMk1mWXAydXRhT09ubFg0VmRZbmtfblRzWWQwOHFBQjFwX0V1dGZ5cjZ3YnRRenRyUm00Nkh5UTVCanNhdld6clczYWVkWHJPS2c4OW5xYlZaZkRXam02d2R3VmF2SDM2N1lnS1kyNWphZFVqWFYtR3k4YlJMQXhIRS1fQ0M3Yk94TGxna216WTB4WUYwd0VpNklzeW1hYnh2MVJOVFJ0N2dTOE9yUDh30gF6QVVfeXFMTk9fUW1ScWp1cjBxd0w1bVlBbVFpTlk3RzVLWU5IN1dpRVdYLW5YQnE2RzR6X1l4cDIyWEN3dEdsRm93SFJYbkx1R1BUNTMwTDlkdGM2Qm1yZzM1U04zcjNVSjdMc0dNcGhWY05CbkplbjBCUXNkdy1Mc3c?oc=5"
    },
    {
      "title": "京都府 京都市北区：大北山鷲峯町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVWt1TEF2TEVEaFBrcUxhSFZqZW1kcWZSUzdMN0twUXhRR2hfZGFTSVZOR0ZzN2MxZ1BLTEZWeldCVURTM0pJc3FOZFoza0FTRXpDSzc4NjVreGp3NXJnN2FkMDg5dTVhaTRJSG9MWUZwZEp5WF9uNWZoSEI1UXc5RVF5WG4yZnozamRFakdCeVBKSkI2Y2RNWUZDRFHSAaIBQVVfeXFMTnpCMkw5dkx6MEhFWUc2VlRLVjlBbHl6dnJVb2pEeDNoNnl6UU9iZjBmcFAwTVZuckY0RThVdlp0akl5Z2VoZ2Q1eUdCdWFSTU1MRVM1OGpzTGFkM1hLZ1A4QlNGM2FDeE1kVWRwVnNNUDh6cUl5c1d3TjZrcW8zY2RzT1Y1SkNKREZHTktOMFhTNWNWMmJJM2JvRmRIYlY5MldR?oc=5"
    },
    {
      "title": "京都府 舞鶴市：舞鶴市堂奥でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOTFZ0Z0JuN1J6QmI3NHlZNC1FdzYwaFlBYWZhR3ptbjhPbzZoekY0dE55MnBQUzBkLXFHWF9iTEF5bGh3RW5jblhmR2JxcTV1ejdpaEpPMS1UM3h3RXZILXUxUzVxNm1La0hzMEZObzhsbUVJeWpoOU5nem5QWVc3SnVoRzBqU1YybW9Ia0JhOGJKOXhNWWZzRnRtaUlHTE8xVHMydkZEeFpObEJZNWpSZVJvaVlWbXhBallINGw0M085b3U1U05USE5ybW5sNm9vR3VVTHBzeF9TanBkNGxaRmZVc0JHeDdmZ0lnSURmbEJhQdIBogFBVV95cUxPVGR4QThQWDV2V3U4cGY3MWt3TjAyQ2V6dUM0TXBzTHFkQTZVS0xHSUhSSUlmcGw3djh6MzdDNy1CSkJFdkZBQ1pvYzZjenN1ZFVOYzBXUlRWRGFYTXgzTkN0ZHN6bjBucWhSTzBtV0YyTmJZM29nQS13NGFMV2JOWTA2cG1OcFlaRWllNzVHUDJfMzNrdVM4ZUgtc0lfdUdfeEE?oc=5"
    },
    {
      "title": "京都府 亀岡市：亀岡市保津町葛原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUWF6UGxsVkFjckF2bG5PMkh0SHBtc2hxOXV3LUNZUkozV2p1SElfcURqZExMNmhsZzVvd3lDYkh2MG12U1JoY2drM09CeHd6c0NMZTBlbGo1RV9oVVRDUmtpRXpqWk9TMkVsdW43YWFEQUlYblc0all5YUNFTmxzd0xzeEF5UFh6SVV4dHRUSXl4VzFuZGEzTWI0S1rSAaIBQVVfeXFMUFV6Slhpa2hEQWpVVGFZTkljRHdFcHdkRVBJaldpR0cydFNGbGxWbXoyYkZiRS1ub0lLNFpWNlVjUUZuLVRwYnh3UHR6bjJqeW5Dc3pDYlFISnhZT3FqRjFEYU5QeGRPUnJOZUV0MHRRZmRXNndpN2dVeVV3VDB6YmNrbmlNaWlESms1NVNfNWFTby1kQTVYWldDQURGX1IzVlVR?oc=5"
    },
    {
      "title": "兵庫県 西脇市：西脇市合山町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPbmxhQURSZWVMWjQ4c19Oa1ZqNjVUVE1aSU92RS12VUJxNVQxN2JLNmVSWlpxOExrd3NTRlJoaVR5c2o1dndaeVJwMFE3ZHRzRkUySTE0OXE1T056eGhvSTFkdlJwNHpmZWxBVy1LN0NWcFA4VzUtTmV1bWFobUc3ZWotQ0tyTlZSQ29fcndxcXB5N1pkN004ODhZUE8tWkpBSDJFYl9HcUx3bGxLWlc2R2ZyX3c0elNmdkZsZ1RZUV9lSkFqSnNGSkVKOF9sR2VrTFo2SDBiV2dVNHlmb1N1TVlnYVRqd1lXcC1tNG5ua2NYZ9IBogFBVV95cUxQc19SdlhyUE5VTUtrTUNQbXF2SzdBQkI1Q1diLV9oelVTSGpnTFdFYnVYclBWT2RLZnpyX3lIeVFLWHg0dTBjY2J5WTRVVFg1S1pFeUNvNHFQMzlfOE9qNXp1RDdSdlp0aGQ0UE95SlNvdXVBT3Q3VHJadkpRd0Qxb250V2xCZG54X09yV2Q5aFpaMS1DR0c3eGkxbWx4ZTAzTUE?oc=5"
    },
    {
      "title": "兵庫県 新温泉町：湯でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVGZyejVyV0k0U09JTnE2TTBnSHVHTkpQVU5RbFEydVZDdVpNU3FJaTZKTFlFc0FWclpVNWtkUHZEcGhuaWFuSk5wVnBFN0dxSmx0WjhYeFpOdnp6dG0xRkM1MmxPaS1IZTZfelg4Mld3Zk9GQjBGaEprclM0WHlYV0FZTlFRT2FMTk40ektYVXVUbWZjNVgySUszQXHSAaIBQVVfeXFMTjZOV0JrZWE3OFJRX25YUXR1eUt0c1VKVWNpelV3c0ZiRmlMTWRMeEk4ZUhfZUduZ29URGxTS1RwYXhYbnBIY3l6YkpIMjRSVkhDZ3h4X1RlbFdFYmUwX1dNNVVPcDN4czZrZzE5OUlxUHNielNMSXRTM0hwQmsyUTk1bkQ0bnRZZEVmY1EwYWxfZ1dIcGJGZWtLbFZzcE9WWjh3?oc=5"
    },
    {
      "title": "島根県 益田市：横田町でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOMGYtZDBCcUJSOVoxZkdNT0lTQW00dHUzREpxQ0trd2RLWE9kSTJVMGRaYW1JVzhCemJrRUowSUZ2WWV2dThDSko3cG1rUXRRZFg0WDdrT2xWNEZjeTBvemxnVHltS3piN1RoZzJ6MkUyeWJYcVJTTUNLRE5SMW0xbi1KTmp3dVZmczktQ0I5cGZZYnFUMFdoN0g2V0RTOHpVd0dISjZfYk5HLV9UUTY0LXdSejlrSFFRWDRRNWU2U1ZKWXpPbXZXRnJid3N3aVJZMTBpRkNOWkxEOW5BVWZIMmY4ZmlrOF9TbVM5anktMEdtUdIBogFBVV95cUxNTUFHQlpTS0NyRTh2NC0tWlI1a3hfNWp2TjhOY0lyRmc5cHhkXzlyaEdrbTFvSXpxSW1uTmRNWnZVVG1vMkxjNTRlbFgyVWVGMWpfdjVZdndqVXljMS0xQ1Q3OHNMTENRUFVOVlJYQmczOGwzYnlCNVNGYzNLb2NiNzhKN0lybEkyalpLT2hmT1hMS2hQTDZCQ2RLaV9DbkMxU0E?oc=5"
    },
    {
      "title": "山口県 萩市：須佐の市道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE96QW5wanhtWEJWZXR2aXZUS2gzeEwzZ1NzTThucGZjMHNtZWVBRE1wS2RPaDJqb1I4dERmLVAyMFBjRjA3TFZYd0REV0NsbGFSNE9DRlFPYlV1cjEwUE1jdXZYMWluN0VjLUE?oc=5"
    },
    {
      "title": "福島県 福島市：桜本玉南でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSW4xMDdLeTRCZ3FwNHRaTktOR25YbW1oZDJUd2dRWWZCRWlXa2NvYXF6X0FiZGd6QmNNWXdHc2tjbTFQNEgzcHVhUVViM2gwNDlmZVJqd2hNbjgtcldaVi1MQV9fRDBOWFlDRWxfcEktS3lqc0pqaV91Q1lZNXF5VFB3dWRteXloclZXc1U2ZUt2ZDVRV19qQUlISmwxLXlQbW5aZXFnbFVuTlVDWjA4a19zWXl4RHI1UUhDTnVxVkhxbmNPelRrYTRkQkFWT3owQ01HRVdCSjVqWnJEQW51U2JzRDZ1LS1uMEhpamVqWEdud9IBogFBVV95cUxOVE9Wb1l3WG5vUk1FR19JSkI5dGNueUZXSGdUaDVQR3FmOC1vYzE2SDBBc2FPSEF4U0ZNNUp6eUlFN2dkUktwWDVXcGZTakZqQVdiTWFDenowV0FQNzY0b3V0STNPRGpOMGkwcFZrTllucC1EN2tXYjQ2ek44ci15NEtiQ2Z6TTBtajZ0bDhIUWR3ZnNnLXhCSHlBWkltMVIyWXc?oc=5"
    },
    {
      "title": "福島県 福島市：福島市でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9NaHAtZzVDVDRybVJucUVyMjJjNjVjaDhMRndPRTdMWUMtZ052dmZNZnp5TWRNNl9TMUZ2dzdhSVhLLUptMzRpRHhZLUduQXpiN2FZcVZRd0Fxc3NwOFNHX2VRdm52c2hY0gFuQVVfeXFMT2lVZzBEMjUzcTdNUlVtRTRORUhFLUo3ZU5xcklaZ2cwaENsSE5yenZucEJWT0Fmb2RVeVllaHhidEZHaF8yZVJFdUIycll2aVgwc0JHR211ZlFDM1ZaNVVsTFVSaEdWQVJ3Y0x6Tnc?oc=5"
    },
    {
      "title": "福島県 福島市：桜本で市道を横断するクマが目撃された",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOMEprSG9PTGFFal94NVA1eVgyVVp6V1RST19ZYVFZeFNpVGRLNEZhTGxseDBjdEl2M2hCNGlZY2hqd0lMbFlWUkRPV0s3MnhOUmdmMkVGZVI0cHdrRDdVX0ZyVDJtbUZTMXl2U05pLTVsd1g4bko4aWxZZlNkV3BWcmZR0gGHAUFVX3lxTE13WWZJZm91MlZCSGhJaWxvb0NwNWVpS0I0VFRpc1VwaHA2eHQtWEV5Y29icWpuVVRLbUYwcnZPS3hEQm0yOTk0NU5OVHBvbkVZWk9KSTdLWmpQM0thdWNQclY5ZXFULVFOTmIzRXdGVUFiRkxTN1NHOG5YcWJuaDJfWGNURGJuaw?oc=5"
    },
    {
      "title": "宮城県 富谷市：富谷市大亀佐野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQV1piMGpVWmtScjExQWl1ZG5GaEFOMU05ZW1qTTdPVlVPU1hhU0R0S0hIN1VuSlpkelVuS3BLdUVUM1UwRlk3V2ZpT0lxMGp5RlZ5U2t4OGNvNGlFa3B0SUtZRmh5MFZ2YWVWU3FVNDkzQ00zS2t3cFltR0JoM1VYbEplN0xIQVBfdGFlRTVnbDktSjBzc1FXOWgxN0Qyb1JaUkp2X0Z1UDJJRXhJcS1pU1k4MlREWEdtMy16STFLanNhRGFRa0h1X2g1d1dEbXFzTDZhc3FpcHBTU3BVbW9mRGRxMF84MWNzNDdPTHJna1JTZ9IBogFBVV95cUxPUC01Zk1qUVhFOXRqMkhrVmFodFZOV21CV3lGTU5wOVNkMC1EeHZ2enJER1c2YkFLeXZvdlJ2c0tCT184TlFRaWxHWmxiOTFSaUdsSlozeGc0NWtSNFdrN0pKTVdHaVFNOThadDc0MHVENnJlc3lJdVdoZDFEUGoxWVVMc1VlVnNRTEZlelFtUWhiR0hLR2FOaEs0TFFHZC12SVE?oc=5"
    },
    {
      "title": "長野県 安曇野市：安曇野市穂高牧でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxObTR6TXBEOXp6YTlPVndvbTBQVTFwWjl6Y3VMWUZ1ZkFmYWV5ZEZWbzlFUTlWQ2NxcmhQNU1pYW1OS1NEdlZUSzhfc1JVUUgwSzlKLVcwOF94SHlnckV3TmVabEJnVEdpR2FtSFV3R0ZoU2JqeEZxaTM2bEJ6VHdIUXdmZlZxcE5ySDdLbkRva05hYWRFS0tBQlo5UWcyWUdfQkZLQmdINEZvMElFNUhiTWZUZ1FhbUJsNEkzVXBla0tQdmpjX2phVk5yclA2aExBc3JjWDEyREs2MmxNay1SMTZHZEdKWnotYW1XbVhjSjR6QdIBogFBVV95cUxNemdScGZ5eUN6VER2Q3REUkhHSktyQVRaYkZfQWVLZ3A0cW02U2JvTHpDMHV2WW53cjhEMnhtT05DZXhsRXlFc2FPeG9fa1g0X2d6aHlPV3dqa2lHZEtBMWk4UkI4TUV1MFhvdkpDa25pcVJIUFhMM29WdTJJRHgtZ2tIRDJzTjNJb1RCaktxZFJUdy12WkpnSE85dTl1YWJHaGc?oc=5"
    },
    {
      "title": "青森県 八戸市：八戸市尻内町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYk1lUW9ybWpHV0djbjBkRXkyT09hc3E0cFc1NzFvdVNkZVRhbUE4dzh5RkJMZmVLRi1uc1hZemZMN2thY2xNTVBlREJMVllFMUxOM1B6bVJ5QVp6SVVQOHUyUVJCQm9XaDI1cmxlVGNMQWZkdXdOR0JoV1JhNm1DLVdMazYyNDZIcVJUdXJHcjVvTnlCbThfbUlyRUfSAaIBQVVfeXFMUFVOT2wxanlMUlVCV3BSZ043QlI1Sy1NeElYZ3cxZVdfQ19oUWczd1NuTXNPOHBhcGd5bU9iblplTVhYX21peVA5UnhrY0tjdzIyTVJ0UzRXcXNoeFQzX2tGWWsxckx6empjbjQxUlYxS3BZbFRYR3pLM0RIb3dBMEYxcTdqNjl5M0ZKeHlieVhlUnk5eWxLOXZjUnhXeThIX1RB?oc=5"
    },
    {
      "title": "岐阜県 高山市：丹生川町坊方でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeGswbTZvazFvR3VXSF93QkZodEVmTktyUDJVeTBjRFdBZzByMU9Qc1ZMVzZCNWxpTVZqd251b2MyTnoxMV9GNEQyMGU5WHRhMzR4YklXS3lITVZpZ3BXMmxwVGxqc0V6a1hKenZjSjA5TTBJWDkwRy1UNmdTc1FiTFlZMDczSTd3V1VId3J4WllqbVc1UjdES1dSRVrSAaIBQVVfeXFMT0JZUHlMcjZ6VHNEZF84eFJvNWh3QU1sVFJHUGhzd3UxaW5BbF9qdjVDeXEyQ3Y4b1NlX2l3bXEycFYyYm41emZrMW1rdERaRDdrZlh5Z0s5LTJQNnI5eE5ZaS00ZmRnVmtWQjQxZVJ1ZVhtYmRTbjdtdUk0ZHlzbVllZFlyWlg3ZVphdXJnbUtSRTZMaTdnUVZQYXk1djNvOVNn?oc=5"
    },
    {
      "title": "岩手県 滝沢市：滝沢市内でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBsMmh1LUNJNmpYeDhrMFU0Rk9FckpQZ3hWYWJwQXlOSkxRUlNySFV5TTZieW1qdE9BaXdleFctYzVOaU1MN3B2U29XMW84ZkFYN1YtUEdYd2NjemtncEt6M0p1X3dQbkRlbTNSNGoyVXpnaGktd3A3YjBsaWVhMm8?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":19},{"pref":"福島県","count":13},{"pref":"京都府","count":9},{"pref":"宮城県","count":8},{"pref":"群馬県","count":6},{"pref":"青森県","count":6},{"pref":"新潟県","count":4},{"pref":"島根県","count":3},{"pref":"秋田県","count":3},{"pref":"長野県","count":3},{"pref":"山形県","count":2},{"pref":"兵庫県","count":2},{"pref":"岐阜県","count":2},{"pref":"岩手県","count":2},{"pref":"東京都","count":1},{"pref":"福井県","count":1},{"pref":"山口県","count":1}];

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
        <span>対象期間: 2026年8月18日</span>
        <span>·</span>
        <span>公開: 2026-08-19</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={85}
        periodLabel={"2026年8月18日"}
      />

      <h2>概況</h2>
      <p>2026年8月18日、KumaWatchが収集した国内のクマ出没関連情報は85件に達した。情報源の内訳は、報道由来が67件と大半を占め、その他は北海道、福島県、新潟県、群馬県、島根県の各地域ソースから提供された。公式発表に基づく情報は0件であった。人身被害を示唆するキーワードを含む事案が1件、都市部での出没キーワードに一致する事案が1件、捕獲や銃猟に関する事案は0件であった。</p>
      <p>都道府県別では北海道が19件と最も多く、次いで福島県が13件、京都府が9件と続く。以下に上位10都道府県の出没件数を示す。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域・状況</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">19</td><td className="px-3 py-2 text-xs">浦河町、森町、天塩町など広範囲</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">13</td><td className="px-3 py-2 text-xs">福島市、郡山市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">京都市、舞鶴市、京丹後市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">仙台市（人身被害関連）、富谷市</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">渋川市伊香保、みなかみ町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">青森市、八戸市、むつ市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">長岡市、上越市、魚沼市</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">益田市、奥出雲町</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">鹿角市（食害）、由利本荘市（車両衝突）</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">安曇野市、千曲市（食害）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>主要事案：宮城県仙台市における人身被害と都市部出没</h2>
      <p>本日最も注意すべき事案は、宮城県仙台市青葉区で発生した。同区の園芸店付近で、「園芸店従業員襲撃現場近く」でのクマ目撃情報が報告された（※1）。この情報は、既に人身被害が発生したことを強く示唆しており、極めて深刻な状況である。複数の関連情報が寄せられており、同園芸店近くでの目撃が複数確認されていることから（※2, ※3）、個体が周辺に留まっている可能性も考えられる。政令指定都市の市街地近郊における人身被害は、クマと人間社会の軋轢が新たな段階に入ったことを示す事例であり、今後の対策策定において重要な指標となる。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道地方</h3>
      <p>19件の報告があり、全国で最多となった。浦河町、森町、小樽市では出没の痕跡が報告されており（※4, ※5, ※6）、直接の目撃はないものの、クマの行動圏が人里に及んでいることを示している。一方で、天塩町や厚岸町では出没そのものが確認されており（※7, ※8）、道内全域で警戒が必要な状況が続いている。</p>
      <h3>東北地方</h3>
      <p>福島県(13件)、宮城県(8件)、青森県(6件)、秋田県(3件)、山形県(2件)、岩手県(2件)と、広範囲で活発な出没が確認された。特に福島県福島市や宮城県仙台市といった県庁所在地での目撃が複数報告されており、都市部への接近が顕著である。秋田県鹿角市では果樹園のモモが食害に遭う被害が発生し（※9）、由利本荘市では軽乗用車とクマが衝突する事故も報告されている（※10）。青森県でも青森市浪岡地区で目撃が相次ぐなど（※11）、地域住民の生活に直接的な影響を及ぼす事案が多発している。</p>
      <h3>関東地方</h3>
      <p>群馬県で6件、東京都奥多摩町で1件の報告があった。群馬県では、渋川市の伊香保温泉街（※12）やみなかみ町（※13）といった観光地周辺での出没が報告されており、観光客への注意喚起も必要となる。東京都奥多摩町でも出没の可能性が報じられており（※14）、首都圏においても山間部では常にリスクが存在することを再認識させる。</p>
      <h3>中部地方</h3>
      <p>新潟県(4件)、長野県(3件)、岐阜県(2件)、福井県(1件)で出没が報告された。長野県千曲市ではブドウ畑での食害跡が発見され（※15）、新潟県魚沼市では養鯉場の給餌機が攻撃される形跡が見つかるなど、クマが積極的に食料を求めて行動している様子がうかがえる。これらの事案は、農作物や人工物を食料源として学習している可能性を示唆する。</p>
      <h3>近畿・中国地方</h3>
      <p>京都府で9件と、西日本の中では突出して多くの出没が確認された。京都市北区（※16）や舞鶴市（※17）、亀岡市（※18）など、府内広域で報告が上がっている。兵庫県でも西脇市（※19）や新温泉町（※20）、島根県では益田市（※21）、山口県萩市でも市道での目撃（※22）があり、中国山地周辺での活動も継続している。</p>
      <h3>四国・九州地方</h3>
      <p>当日は、四国地方および九州地方からの出没報告は確認されなかった。</p>
      <h2>リスク評価</h2>
      <p>2026年8月18日の出没状況を分析すると、以下の3点からリスク評価が可能である。第一に季節要因として、8月中旬は子グマが成長し親離れに向けて行動範囲を広げ始める時期であり、経験の浅い若い個体が人里に迷い込む可能性が高まる。第二に餌資源の観点から、秋の堅果類の豊凶が不透明な中、クマはより確実で栄養価の高い食料源を求めて行動する。秋田県や長野県での果樹食害は、その典型例であり、農作物への依存度が高まっている可能性を示唆する。第三に、人口圏への接近度が著しく高まっている点が挙げられる。宮城県仙台市の市街地近郊における人身被害関連の目撃は、最も深刻な兆候である。これは山林と市街地の緩衝地帯が縮小・消失し、クマが都市環境に侵入するリスクが常態化しつつあることを示している。総じて、全国的にクマの活動が活発であり、特に都市近郊や農地における遭遇リスクは極めて高いレベルにあると評価される。</p>

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
          <dd>2026年8月18日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-19</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-19</dd>
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
