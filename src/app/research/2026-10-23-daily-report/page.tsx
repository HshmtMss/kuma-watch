// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月23日 / mode: daily-report / 生成日: 2026-10-24
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-23-daily-report";
const TITLE = "2026年10月23日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月23日、国内で計84件のクマ出没・痕跡事案が記録された。人身被害の報告は確認されなかったものの、北海道（17件）や京都府（15件）、兵庫県（8件）をはじめ広域で生活圏への接近が目立ち、三重県大台町では許可捕獲が1件記録されるなど、地域管理上の注視が必要な状況が続いている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-24",
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
  datePublished: "2026-10-24",
  dateModified: "2026-10-24",
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
      "title": "岩手県盛岡市三ツ割4丁目で成獣1頭が移動",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBVbXhYZjJid2hqeFo4NFVIMVlyb1JRRUhncmQyem9adG9tMmVfbFNiYlhSaXFzUWZ4R0FaT0ItbnF1QkRLcnR2YVYtRkxCQ0FPdU8xUWwteWJGTlNhUURUbTZUTnRIQ213UVlFekpNZ0U0SlRNWXNyTUZXemdudlk?oc=5",
      "site": "news"
    },
    {
      "title": "奈良県吉野町飯貝でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNzg1MXhNOHlSXzVqMExfUW5LUWMzU1Jxeno0YmZib0t4dzJoREN4dWk4NXk1YkFEYUJVdlp5QXBXQTdPUVF2MnZuZ0QxU05QNlhjRG0zRHFEUFlXbG85MWdPdXFJYmRzZExJMnE0M0VwNXowb2xHRFFiUVlzajJZdkdFNk00WDhZaE1oWGM2Mlh1OGRtbk9iX1NXblHSAaIBQVVfeXFMTjctUldRRldfbGFkQ1M0MGR4eEhkUjlNYUI2Zkc4bU1EVjQzeXhfY0RXUkZvcDJjVGJyTnJwMG1ZaUZNQ1VwMGR3VVdwb19wSi1GZ3ZGYk1aVjZHeFVrM201MXd6cFlxRGhQMXJNNk9fLXFoMlJ4YjdnallBWXVMWFE5cTBINFVNbW9rcUJGTk16Q204U09qMTFkck5GLUhfNjhB?oc=5",
      "site": "news"
    },
    {
      "title": "藻岩山の登山道でヒグマ目撃 体長1メートル、登山客下山",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE82U0h6Z1lYQlpVRzUza1M2WWN0czNROHJTSFVMdDdpcDRObDJlcERrczZjaG9fOFdSVnpCNU1WdFZnTV9Kejh0UVU4Y3B4eHVyVkFldVVMUFRQUQ?oc=5",
      "site": "北海道新聞デジタル"
    },
    {
      "title": "北海道名寄市東５条北６丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbUZNNG80dzR5Ymk2QjFPOF9Lajk1c1ZoVzVILUwxUzYxMlA2T3BJRkFuU1RWZG55NHJXYUFlN3psWE9YMzcxeU5rc3BRbS13NTFCS1U4YW50akpHWktPSU9qYk9aaTlVaVg0akJRMDd5T3dWcXgzZzVxWG16YlVNbnVCRllUa0NPTy1PM3hMeFQweUVRM2RVcndhN3lBWGJvLVU1WWNLZE9Jckstb0xMeWVWcC1nUDl3LTJEa3BMYlRaYXRwTXRjTUo5MXJYVG81VWF1eU5SZHV6MkZNS1gyeTdJQ2N1bUFlMW5YWWl4QzdWd9IBogFBVV95cUxPNEIyY1BsM1Q1cEkyUVJ4djF1NWxXN1c1Skh6dkNWZW1USGtyMlo0RG9LM3dndEdNUEtqaS1jSEs5Q3N6VHc0ZndVeHVjZl9PNnNpbThpdXpuMHlvLUZTazltajc2RjRYeE1JbnItQl8wejRzQXhOWUFrS0s3bEVfT2lSaW5mNndiU210dkhSZllaRTRLa0JGWFdWXzYzRmk4Zmc?oc=5",
      "site": "news"
    },
    {
      "title": "函館市旭岡町の市道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4xR3NrTUwxd2ZHVEdDcUhOU0EteU9TSXAzS0EzTjE2dnRqVUxzb1JQSVBwa1Y2TTlVSXRoZXo4NHR6bUdWaTBzdXhYeGJQSzlVbTB3T0MzY2VJdw?oc=5",
      "site": "北海道新聞デジタル"
    },
    {
      "title": "（北海道）標茶町中チャンベツ原野でクマ出没　１０月２３日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOS254Q2V6NF9Objk3eXhkMmpBMGRfbVJCcS1KSUlDRTJJRGNScWpTdHlaRFJJbUIzTXQ3VVFuRzh6U1JZZElBakpRS3UwMlhwM1paTnZ1dlJZZ2pGVFdDa2pxOEp4SXJnMzBMUDdTcHpiWlgyMWo0Q2V0SHhzT0xUX0p1VTlLdUFqRnl5ZzFQU29kTkh6ZUM5MGJVZ1HSAaIBQVVfeXFMTDJBQmpLRzF1U1A5TXZ5Y0VyWGM4eEc5NU5RdWk1ZDM5bV9xYlN5Y0E5U3ptZ1VkbFhRMnRXSm5DSFdERENNSDdSN2FMNWh0eGw2SFJxd0pzYU1zaW1lbWVxYzlPVWkyY0djODBJMU1YSzc0M3FOQ29HS0ltdUZFUDROeDRxT0pGTXZQNzYxMmt2ekVQZnBTS0xyY1VTaXZmak5n?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（北海道）むかわ町花岡でクマ出没　１０月２３日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZXlPSjQ0a29qbi1sVm1mb09FVWtYbnNBdWFuQjN2X2xaMkt5WHM1anh1OVRjV1BCTWxYVVdueHVGd0FrU19qUG01OFI1MEJ2R3RrUFo4NzJURThheGk4dTBzNHJ6bmR1cThoOXg2dkJkOFlhYlFnNDA2OUQ3Y3lmTmdsS0ItSHdFdnpDNTdDUkxhVmY1X01oS19KRDfSAaIBQVVfeXFMTWRGeTRibGJUNGdIVHg0cWNlRUdRTTF5ZG83OFY1SXBKQWpZQjdXUms4cUZnU3laV0lMcDFaQUd4Q21scEhUd3hMaG9DVVpBSnB2UnlzNVZwOTloZmZvQkdxbmVCZ0xsTVl5VnJQV19aRUlsYXB3N3c1TEY4VkRMS3F0eERsTzM1WnlzcHJ3V3VFdFNETldrVUk3TWhtWjlVby1R?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "秋田県秋田市手形中台でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOa0JFRXN0YXl1aGM3czV3UDAteTYxNTBuUjhrQndrcHM5YTJmVU1rcHRKUTVtUXQtb0xuVXdldU5IdWhDTGtoaDdLQzQ3bTRMMzlfQUJiYWdDMkE3V3NQcWQwMWNFTnZtYlRfNWJ1UzQxblZQN3VvR1Z5XzN2S1Z6cjd3VTNTMm4waFd3UUhmRDd4SHhSbnlsRmlzSVhOeGdBNGstMDUzd1loT3lNemFtSmRqZnhxRHEyLWFWMVhTai1ZeDVzdmlRSlFUU1NtS0l1dEx2SGdwUHdEQzRfTnlXeXZ5a2VnbmEtTWhvSUoxdkl2UdIBogFBVV95cUxNOEZyMHlwUFRSbURxWjRKaFRkanRmV2JUNk9OQm5EUGliMGp0NmE4M1doVVpSMDJ5d04tb3dlSFZKaVZzcmhqMVR1dGFCVnlwUTFDR1JPc2hCRXhBam5CajI2b2hyWnNYSi1XRjhWYlNFaWw5TTBXbjRSTWFQS3ZrOFE1N1QwNkJBUU9Vc3E0MWFrWHp0UXp1WDNkODVKbFkyRUE?oc=5",
      "site": "news"
    },
    {
      "title": "足利の路上でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFB3TVNJVDJFYmNBMkZDdWlCUW5mbmh2NFFNbmhHQktHdXhXbjJNSXpUQmE0VFBFbDNDV2VISzhCdnhIYy1qZURxcVBxOEVycnJYaTkxUjZ2S0pxSFk?oc=5",
      "site": "下野新聞社"
    },
    {
      "title": "上永野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOTGd1OW51RVg2QkxRQTBpcVQ3UjZ3VkRjSW03R3Y2SEtnSXpFVVZrSjY4RnpKQTFYd0RINEZ2SFV1VnNId01aMUMwSUp3eHl1S2h0TUgyeERjdnA0LWszV2wyOE82VWFtUEQ4VTRRYVJVellvT3lQSFBsZzVxVkJIcm1tWEdRTklrM1hfYlNnM3BrRndCZ09FWmJjdnZBN1dXTlRVRFNsb2lRb0tJbHRORUFUeUR3RFpiM05Kd1JSTmpkejZCMGJBTlF3ZDAzMmFzbE5kR0Y3aG9iWk05UGxzeUI5Sm9keGJCdEpPVk8wT1pSZ9IBogFBVV95cUxPeVBwNU83RDR3NFBZUDNtdDVLSmFTU0F0dGtoYkVXSWl6b29zUXpRRU83SHFKekNHRDRIdjhFNGthdS1rU3JfOWI4U2V5VnhYTVlwbUN0Y0dqTDF2RWxxU1BkVDBxNERnN1QtWHVCTFFDWW4zZ08wcEdLR190OXpoSUhXSk9OZWhaWWhSc0w0TEh6Sm5Xd0ZiTXVvdE8wdGtaNnc?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉県秩父市荒川贄川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOZlZPN19wZ2p1c0oyY1kzbzduRVREc3k4X2VQRWlKb29aWFVKYU8ydkZYVlBlblZJRm9CRzZmQm5xWm5fSDhnX2RldDNUNXl2NEFCX2xqOXVfSEVzQWw0Z0dleTJ6bnJkV1QwQkhpQ0VhMUxUcGUxVnR5cEJzQ0VaWlR5WEoyV242Z1hSLVF2ZVZHbXNGWFBtb2w4Wl8zX1R0X1ZMXzBOLUJfa2hfLTk5UHllYS1NU3BVd0dKWmZGa0U0aXhPdEpEZjhyQWQ0MVRrRkdoTnRHZjRMNmFGWDlWUHU0YVRCa2stc1FIXzBnalVnUdIBogFBVV95cUxPckRvN0xDMDNkNmtGdFpCOU0wQndEeTJ3T2wyOENTcWRKbzl0VHloenhIa2VKUy1pM2poWm5hX1pzSEctY1FsSFBiLXFiN1prSDBtNVNaeUtkQW9URmpXb1VYNlpCSzRSTnQ5Xy1QbElST0FuMko4OE9xVlRIY25fLVhGdEQxTUF3SWVrOEVmdFFISWFuQTlQQ3d5ZzZqOVNQMHc?oc=5",
      "site": "news"
    },
    {
      "title": "東京都青梅市日向和田2丁目で出没可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVUY0ZFoyMWVLZ1VOc0V4TlpzNmg5Y29HWkVJWXRmaEtGTW1jeEV5RWdwRkR6ZERwMDZzeGpSaWxJRS1NRGY0TkM1V2gzMm45MThNc2lLa0NxX2UyZUFZSmdWUmczbE85eld0M0twSGRYd1NYR2o4cDcyV3FTM29GZjlSalNhcVg3ZEhiVWRmTVdMbXR0TVVJTVhqWEzSAaIBQVVfeXFMUGhEc2RIclJqZkl2UjBObDBhdlh3aGQ1VFZlQkplcEZBYTlwWlhjNlc3UG1PMnpLZHJGMHpwS0ZjWEZBanV6ZXJnLVVJTHFRXzRuUTctbGJJMmVnMXFhRGt0Ql9iamh1cmNNWUsydkV4LXFpVEtJaFo4bGV6aWlESy1kV0VzYkQ0RGdOZkVOYlJQd1BRekcxNWVLdWFRM3JqaU5R?oc=5",
      "site": "news"
    },
    {
      "title": "（静岡）富士宮市羽鮒でクマ出没　１０月２３日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUExLVWFndHlOc2x4ZklhOXlnMVRLY3NBNDE0VWNKeWxiZ0dRdlZuejJ5UG94bXZZeWhCUTdNdkxKWVJ0WXM3QlhXVDVFZXdXSExEa25vMlNSUFFkVFZiY1VRWldLSWo5bHFNZlczVXo3eVRPekdkWW5wMlZuQW5PQWFSNWpoZl91MDBJSUJzSFpvREZmVzhWWU5OLXnSAaIBQVVfeXFMT3lUUkhsSndoWTAweVdCSm96NjFiX29HUkFhRkxHMWpUUmV5ZnRUamVzaXRXU01nOURZSmFfN1g5c2Q4c3JQSG9lTzd5QzlvRWtzY2YxMUZfaUgtZ1U5QmlpTllQYzJPbmxlVm9XZU9xNE9XblZzQW9zWnFBVFo5UTYxZmZSMHItalh3eUhrUzJ3b1hRSEwzVkVDd2Etd0FfdGNB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "京都市右京区龍安寺でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ0JtbTVac1ljRFpMNVFFMXh6Mi0wRHpTWEZycjc4N0FmQWE0V2RaSkJjblhveWxvSWdtTENHdDRBbXVfaDAzM0w5YmhwZ3hxSW1PQXFxNnRxZnlnb01XLUhVcGRWdTNJeTJ5dUtKWlVzemxXUUVCUHJ0VzIteFUyR2R3T2x1LTZlTzRBdTc2Z0NCZmdxblNqamp1ZznSAaIBQVVfeXFMUHhOTldwakZvaXA0SDNKb0JWWVA5RlJPYzloNUNlb2ZZRWFUejQzWklxemQyMzZoOHRaZUhkd0tTSzFsZFQwWmxiZ3V4dWxUM1hWMHdNSjgxaThIVzNoTXJxQk5NV3ozdGFIdEhvMldhZVRCeVpIaFFWLThZR3pWbG5GWlptOWhlWkg4cmVJRk5TRTJHeW4yVlh4QnMzbk11ODRn?oc=5",
      "site": "news"
    },
    {
      "title": "（京都）綾部市星原町堂前でクマ出没　１０月２３日",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPNlY3cGl6NUpfM0ZmZm1OOGQ4SEMycXJVaXA0aGtlNWlOSlN5UWs1VWNZdVl5T1YxZmdDanZzeW5pa3NKcXJxeFB0bFpGRXNXdVgwYTJSSGFSNzgzdXRmVWk1RGJkV0NrZWZjb040NjFiclNNZlotWU4zUHdSN3d5VHN5WmZLbFQ1T09ZTXRIM0g1cGNPZUtpSXFYSWhhT3pRREHSAaIBQVVfeXFMTzZWN3BpejVKXzNGZmZtTjhkOEhDMnFyVWlwNGhrZTVpTkpTeVFrNVVjWXVZeU9WMWZnQ2p2c3luaWtzSnFycXhQdGxaRkVzV3VYMGEyUkhhUjc4M3V0ZlVpNURiZFdDa2VmY29ONDYxYnJTTWZaLVlOM1B3Ujd3eVRzeVpmS2xUNU9PWU10SDNINXBjT2VLaUlxWEloYU96UURB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "兵庫県養父市八鹿町浅までクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMTQyUDE4X0ZwX05MekhOTE1qVF9iMVZ5WnJCNExMZTJHRGg0cUo0WHV3bXlEQ2xteWJkQkF1Sk1RWE9ZR2JFczR5TDlsVjFuOVdOMUhTQTdxVS1VY0M0WmxsUENLUG5nQ1Z2WHBRZzN0ak9LMEtsY3JsNU1KM2lQT2w3ODUyOVZibk5DN211R2U4TmdocWJ4VmF5NlTSAaIBQVVfeXFMT0ljNS1GVnBDb19zb1VldkNjSnVTOWdtM0xSWkRWWGdpNW9wZVJGUDVrR1M0RTY3MnBiaF9oZ1ZNMTFmVTRDYTlwYTFKQW02WFpncEV1dUt4bnRjUHRmSloyQ2FSM0dQYXl4bFhVUDA2VU1nZ0ZDNURMMXpSM2tBNktTdjNOQ21hRWNnSVlIVHJORTlxeFJmT0JRZ2twWDgyS2VB?oc=5",
      "site": "news"
    },
    {
      "title": "島根県益田市高津町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdHhrUVB5eGlQbHpfQzB0eVQ0MHA3VGNQTWRhbHN0TllOcXhLYzh2Z2FXQ3ZfR0ZRNUprOFhwMmdsclpQUnVBd3d0ZkE4d2hRbTRpZUh6OTNTZ0NWQ0dLcXg5UXlXcGktQXN5Ry1GbVMwT1FBTkx4bURNREI3OC1YZlAtWnVhcTJkNWhmdGZ4akR3RTFIdUhjcXF5UGhiaU91cHYxa0p2NUNwcUhJRnVDVFJFYXV1QUFWandKdDBPUlJQLTZGUFFNblN1MDlkMDF2RHZZdERyRzFiX2dPRl9INEVsb1pFMXlrYjkydWlCM0dwd9IBogFBVV95cUxOMnpFVkVKMnFJZ2IyY2x2QzBjbGszMTBPdTBCVmVhR281eEczZF8wYWtyWF9ELTU3X0luVXZMQzlYbjRwbXp6YUxNR2UwYlZvdDJTRlZNdGczU2htdkg1eVNlcFl0RENuNkdnNnppVmdhbkdKeUJxVE5mb2tuYzRsYjR3aWlSallWaWh2Y1ZlbWx2cE5WQlE0em0zcnlqTGF6UEE?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":17},{"pref":"京都府","count":15},{"pref":"兵庫県","count":8},{"pref":"栃木県","count":6},{"pref":"山口県","count":6},{"pref":"埼玉県","count":4},{"pref":"島根県","count":4},{"pref":"群馬県","count":3},{"pref":"岩手県","count":2},{"pref":"奈良県","count":2},{"pref":"静岡県","count":2},{"pref":"山梨県","count":2},{"pref":"東京都","count":2},{"pref":"秋田県","count":2},{"pref":"青森県","count":2},{"pref":"広島県","count":2},{"pref":"長野県","count":2},{"pref":"三重県","count":1},{"pref":"福井県","count":1},{"pref":"愛知県","count":1}];

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
        <span>対象期間: 2026年10月23日</span>
        <span>·</span>
        <span>公開: 2026-10-24</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={84}
        periodLabel={"2026年10月23日"}
      />

      <h2>1. 主要事案の動向：捕獲・生活圏および公共空間への接近</h2>
      <p>2026年10月23日の集計において、人身被害に該当するキーワード一致事案は0件であった。しかし、人間活動が活発な生活インフラや公共施設周辺への侵入・接近事例が複数報告されている。</p>
      <p>捕獲・銃猟関連としては、三重県大台町桧原の山際において許可捕獲が1件実施された。一方で、都市近郊や文教・商業施設への接近として、岩手県盛岡市三ツ割4丁目のドラッグストア付近で成獣1頭が移動する様子が確認された（※1）。また、奈良県吉野町飯貝では高校敷地内および橋付近での目撃があり（※2）、教育機関周辺における動線交差の危険性が示された。さらに、北海道札幌市の藻岩山登山道では体長約1メートルのヒグマが目撃され、登山客が下山を余儀なくされる事案が発生している（※3）。</p>
      <h2>2. 地域別の出没状況と分析</h2>
      <h3>北海道</h3>
      <p>北海道では全国最多となる計17件の事案が確認された。前述の札幌市藻岩山（※3）に加え、名寄市東５条北６丁目といった市街地区域での出没が確認された（※4）。さらに函館市旭岡町の市道（※5）、標茶町中チャンベツ原野（※6）、むかわ町花岡（※7）など、道内各地の農村・山林隣接域から都市周辺道路に至るまで広範囲でヒグマの出没が記録されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では岩手県（2件）、秋田県、青森県などで報告された。岩手県盛岡市三ツ割では商業施設付近を成獣が通過したほか、秋田県秋田市の手形中台（※8）や旭川南町で相次いで出没・目撃が記録された。青森県内でも弘前市小沢山崎や十和田市切田岩船での痕跡発見が報告されており、集落近傍での活動が継続している。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県（6件）、埼玉県（4件）、群馬県（3件）、東京都（2件）などで事案が記録された。栃木県では足利市大前町の路上（※9）や鹿沼市上永野（※10）で目撃が相次いだ。埼玉県では秩父市荒川贄川の日向橋付近（※11）や皆野町大字下田野の皆野長瀞インターチェンジ交差点、横瀬町芦ヶ久保の林道起点で地域住民による目撃や痕跡発見が報告された。群馬県では富岡市上高瀬や桐生市広沢町、藤岡市三波川で出没があり、東京都内でも青梅市日向和田（※12）や檜原村人里で出没および出没可能性が確認されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県、山梨県、静岡県、福井県、愛知県、三重県で確認された。山梨県北杜市では白州町大坊公民館付近やシミック八ヶ岳薬用植物園の道路上での目撃が相次いだ。静岡県富士宮市羽鮒では芝川駅北東約450メートルの市街地近接部で出没が記録された（※13）。福井県鯖江市別司町では夜間（21時30分頃）に成獣1頭・幼獣1頭の親子グマが目撃された。長野県大町市（美麻新行、八坂）や愛知県岡崎市桜形町でも出没が確認され、三重県大台町では許可捕獲に至っている。</p>
      <h3>近畿・関西地方</h3>
      <p>近畿地方では京都府（15件）、兵庫県（8件）、奈良県（2件）を中心に集中的な事案発生が見られた。京都府では京都市右京区龍安寺および龍安寺御陵ノ下町周辺で出没の可能性が報じられた（※14）ほか、綾部市星原町堂前（※15）や里町鹿ノ子、南丹市日吉町胡麻ミロクで出没痕跡が確認された。兵庫県では養父市八鹿町（浅間・八鹿）（※16）、朝来市和田山町宮田、宍粟市一宮町上岸田、豊岡市福成寺など但馬・中播磨地域を中心に広範な出没・痕跡が記録された。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県（6件）、島根県（4件）、広島県（2件）で事案が把握された。山口県周南市では夜市、鹿野上、鹿野中において複数の出没痕跡が確認された。島根県益田市では藤ケ峠トンネル付近（美都町山本）および家族の森広場付近（高津町）で個体が目撃された（※17）。広島県廿日市市でも吉和花原や友田里地山で出没痕跡や可能性が報告されている。</p>
      <h2>3. 当日の地域別出没集計</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">上位都道府県</th>
              <th className="px-3 py-2">総件数</th>
              <th className="px-3 py-2">主な出没環境・特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道 (17)</td><td className="px-3 py-2 text-xs">17件</td><td className="px-3 py-2 text-xs">札幌市登山道、名寄市街地、函館市道など</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手 (2), 秋田, 青森</td><td className="px-3 py-2 text-xs">4件以上</td><td className="px-3 py-2 text-xs">盛岡市商業施設周辺、秋田市住宅隣接域</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">栃木 (6), 埼玉 (4), 群馬 (3)</td><td className="px-3 py-2 text-xs">15件</td><td className="px-3 py-2 text-xs">足利市路上、皆野町IC交差点、青梅市</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">山梨, 静岡, 長野, 福井, 三重</td><td className="px-3 py-2 text-xs">8件以上</td><td className="px-3 py-2 text-xs">富士宮市駅近傍、北杜市公民館、大台町許可捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都 (15), 兵庫 (8), 奈良 (2)</td><td className="px-3 py-2 text-xs">25件</td><td className="px-3 py-2 text-xs">龍安寺周辺、吉野町高校敷地、但馬地域一帯</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口 (6), 島根 (4), 広島</td><td className="px-3 py-2 text-xs">12件以上</td><td className="px-3 py-2 text-xs">周南市痕跡多発、益田市広場周辺</td></tr>
          </tbody>
        </table>
      </div>
      <h2>4. リスク評価</h2>
      <p>本日のデータ分析から導かれるリスク評価は以下の3点に集約される。</p>
      <ul>
        <li>季節要因と活動レベル：10月下旬という時期区分において、北海道から中国地方に至る全国84件という高い出没水準が確認されている。福井県鯖江市で確認された成獣・幼獣の行動に見られるように、越冬を控えた活発な移動行動が各地域で継続している。</li>
        <li>人口圏・生活インフラへの接近度：岩手県盛岡市のドラッグストア、奈良県吉野町の高校敷地、静岡県富士宮市の駅徒歩圏（約450m）、埼玉県皆野町のIC交差点など、交通結節点や商業・教育施設といった人間の核心生活圏への浸入が顕著である。</li>
        <li>出没形態の多様性：単なる山林内の目撃にとどまらず、山口県周南市や兵庫県各市町で見られる「出没痕跡」の定着化、道路や市道上の横断・移動が多数を占めており、偶発的な遭遇によるリスクが極めて高い状態にある。</li>
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
          <dd>2026年10月23日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-24</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-24</dd>
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
