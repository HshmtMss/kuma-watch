// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月12日 / mode: daily-report / 生成日: 2026-09-13
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-12-daily-report";
const TITLE = "2026年9月12日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月12日に記録された全国53件のクマ出没動向を分析した。長野県塩尻市において住宅敷地内で飼い犬が襲撃される被害が発生したほか、東北地方を中心に住宅地近接エリアや農地への侵入が多数報告されており、人間居住圏との空間的重複が顕著となっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-13",
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
  datePublished: "2026-09-13",
  dateModified: "2026-09-13",
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
      "title": "住宅の庭でクマが犬を襲う",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE84QzRGTTNDdUdacGFCQmduYkI4YUFLSWZ0dGFPeUdMWFZOX0x6UWJQQ3B4OUMwa2pCd21FU1BpN0w4VDA2dkhTU25wQ05aVlhUOVoxTEdjb2xtbE55OFFnNTNJSzViN1QzWnpLLVpPUUZ4UlYydklSLUtKYmgybkE?oc=5",
      "site": "news"
    },
    {
      "title": "住宅の庭で飼い犬が襲われる",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE40Tlk4Wm1XMXBhSGRJMkhNQzdLejZmZWQ2dktIdWJQaXcxOWxEN01XeEcwWUJ1T3pjNXZxUzBSYTl5ZU5xdUFqbnBmQ1RUdw?oc=5",
      "site": "news"
    },
    {
      "title": "飼い犬が襲われる人身・動物被害",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9VUEVpNDlwX0tDc3dUU3BETUI4aVM3U2UtZUxWcWJ6TDVmLUJ6NGkyQ1hTTlZ5T2NqSXIyWXdzSVVhc2dTbWdsX3N0OXRzYUk0Zmhwdk03OXcxTlUwekE?oc=5",
      "site": "news"
    },
    {
      "title": "川上でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQb0lia3o4ZXVSOXhUaWUwaVpBV0diU1NScXFpX19QQVVuQnNESThOazRBcnN4bGxKekRlaG5zT0k5QzRTNmNlZXlvMFZxdmFGSW9qeWVaVXF0Zmd2ajYtbkZTVUQ1ZVVRa25xVnpZVkNUUnhjRnhOd0haT3YwbWRrLWo0SnphUFpld1VnV01hdzdFZDRIZHk3eW8xYnHSAaIBQVVfeXFMTUlzbkVHMHlqV3FyeEV6Vkk3bmNxdFNTZnh3Rnc0d05WOVdxUmhlVTRaU1JON0pwdHZWS19wMkN4TE9LT2xHb2Y3MnlDUXY4NVpqb2V0M1dQX3RZMWlNMGZHdm1HVjZTNHFadHpVLWJ2R0Q1RVlZWGxEUEZ3WHNPeUtkcHA5RkhWV2dhbmJQMmFxTFhqWG56aVRSallvWTZQZXhn?oc=5",
      "site": "news"
    },
    {
      "title": "開盛でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOREVOWjF6TXBTRVV5clA4dGpkQVplcDhVeXdpNjE2Yi1IeGh4X0NPcUo1ZXVmdXBRdmcyc0E0NXZrb2FYZ0FfWXM3OXpOc0gzQjk1WS1nYlVxU0lpeG5OcDFKSEFBbnFWODFRT1djZkg3MmZkNnJzaHZkU213Y2ZQQndPZ0ppMTdRazhwdFA0aGNJdnNuUWc3dXhRS2VxUDR4NUlXN21KQUNwd1FXNGVEN3Z6RWt6ZXdXd3dGdUM5Qk9PM0g5SG9IUElONmI1Q18tRFJHUXF5VFQwdmNsTXBfSnZWWEd5aXVNbGQ5MGN5RVZqQdIBogFBVV95cUxPcGFkRVB3VllUdDNlNnpNMlpQZ3pqclZoVk9KdGpFMVczXy1hZmxGN3pSeVBQaU1VWDBXbDd2V1BxUTVsM0dlNmpSTWhmdEl4OEVaWG4zV2oxZ3dIc0pGVUNPNnh4Qk5xek0zeGdDWFcxcXN3RnR2V3QwWXNiYWhLbUJya2RtSWNENDRrUlF0dHdHVmhtTThiLXNGTGZrWkctTmc?oc=5",
      "site": "news"
    },
    {
      "title": "訓子府町 ヒグマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOREVOWjF6TXBTRVV5clA4dGpkQVplcDhVeXdpNjE2Yi1IeGh4X0NPcUo1ZXVmdXBRdmcyc0E0NXZrb2FYZ0FfWXM3OXpOc0gzQjk1WS1nYlVxU0lpeG5OcDFKSEFBbnFWODFRT1djZkg3MmZkNnJzaHZkU213Y2ZQQndPZ0ppMTdRazhwdFA0aGNJdnNuUWc3dXhRS2VxUDR4NUlXN21KQUNwd1FXNGVEN3Z6RWt6ZXdXd3dGdUM5Qk9PM0g5SG9IUElONmI1Q18tRFJHUXF5VFQwdmNsTXBfSnZWWEd5aXVNbGQ5MGN5RVZqQdIBogFBVV95cUxPcGFkRVB3VllUdDNlNnpNMlpQZ3pqclZoVk9KdGpFMVczXy1hZmxGN3pSeVBQaU1VWDBXbDd2V1BxUTVsM0dlNmpSTWhmdEl4OEVaWG4zV2oxZ3dIc0pGVUNPNnh4Qk5xek0zeGdDWFcxcXN3RnR2V3QwWXNiYWhLbUJya2RtSWNENDRrUlF0dHdHVmhtTThiLXNGTGZrWkctTmc?oc=5",
      "site": "news"
    },
    {
      "title": "川口でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQRVNIa2w3UjA2SlJBRS1NcFAwWWZ0OHpaenFxQXFISm91XzF4TGlXeVVMN0FBNzVUdTFLREtING8tMVFjNWQzb0NSd3VSWFJrcXEtZGJBa1NSZzVYaGswOUR6cjZZRWlnRHlfYnowT2ZZVmxwVlhiRlhkSVhEOWFjb0k5X1dkVGVFd0tZWnliWEhvT0hWcTgwR0dMZ0FWYXA0Q20wRERpMVJYRG5CaTNB0gGiAUFVX3lxTE41YVlhNG55akR1Ui01UTJueGlzbnJyWm1XRUJiSml2VTNmMjN2ZC1ESTR5RzB1RTNNYTcteHkyc3hhMGU3Tk9vek5uaWI1US0yVUtzRzJzY1BQa3NiV3V4ZEwzZXdkSm5GcC1UUU51TmE3djh4VkJOaXhoclEwTnA1UXdKMkgwOEhjakR6LWI4Z1pCb0VkZjhiWFJINHZmS0pLdw?oc=5",
      "site": "news"
    },
    {
      "title": "木に登るクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBqZWxha1dCVFJjdXBZOEZHTDF0SEFCNkM1cVFMT3dxWml5clpzZE8yTkRpWFdvQ3I5dmpQV01LbU5lTXVaN3d4QmZWa2QzTG5jNmVDWUpuVjkxQWoxbEdRSHNKZjJEUXZU0gFuQVVfeXFMTjF0T3dhaWMxdHo2MU1sTlV6YWYzaDJaRXFwdDhVZkJOWlEwb3pnQzQzWnQzMWpkcnlmYXo2UzQxVlVnUm1ZbnNOMWVRcXJzX29HYWlfeWdjUGpZNU9Oc3F2THg2eUNrNXNpWjNWcHc?oc=5",
      "site": "news"
    },
    {
      "title": "登世島西林乙でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTmhZb0thOTk0ZE5aOE02Mnl5NTJjTkU3NF9RckMzd2pORzBvRkNmelVycXpMcW5QeHhlRXEyTVFSWVdIM0dteVdlWVE2UE9nZExOeDduOEVHVDZiUVJLSzN4WWVxa2REelh3RHdvQlU2NDk4SEhOejNocFJTcDUwaENjc1lsTjRLS2RfRWlSNWtWLUh6TjNwRVZ6anXSAaIBQVVfeXFMTUlrTExoZWVMejdpNmtEZ0N2TXdRT2dCSHloelpieTB2ZVFLTHBoUzlETjFMNkpZVnNlU24wRk1TV0ZIM216RXZtVFh0WFNrdmVvQVVjbWhkMXBPWnUtTzhud194YTRHSjFZN09pVE90QzhOTmRMVWs0dG03QVpGTjJTUVJIMFNYRTNXenpLcnJMcXU4OFlmTTM1MnVtMXBZQy1B?oc=5",
      "site": "news"
    },
    {
      "title": "畑でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9ycllRcl9GcXpmOFZrNC1oLTd4RUFRNVluM0EyR3Zjc3RKVlFRTEtHVzFMMzMwQi1jZldKazNUa253SUFWbmZ3dlZnLVV2VG5TT3RzSVVtSnRQYXJuTHFCTkdSSnpzSC1PTlZfWnpCVF9BNmxSRjlSbm44MXlqOGM?oc=5",
      "site": "news"
    },
    {
      "title": "青田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQMUFRVTQ4ejN2QUhkaG52UWFFU21pOTdzRHQxa3VvWk5SWjd5dXMySXZRZzVxNVJMaURUSFpYbm5UN19qTkZLT2xpMmZMaFhmSE5QUFNicEU5MjRXY25NekdTcUJ4MG5naUs2MDNFNklNRzd0blFTYmY3cG1hZDFRRHNRbTBweWRxUEZFZEhVT21fSGlSSk5MWkl3WGhTZHpyTC1LRkNJZzlmSUg0bzd3cjhoak5jQXJaS1B1b19Sd3dvVmtFdllUcjQ4UFhPNzJwSHFIRkpWZ19kWmhfdjRWOUt0WXU3UXZOcGF6ei1pNnhxd9IBogFBVV95cUxQcTZSUk9mbEUybTFUeE1va3JPNE9kcnhmaFV0M0Rkb3pBVjBEcDhiXzNUWXI4MHMzT0dWN1ZjY2hMSVpLclQwaUIzLTluT2ZkQWUwZUQyTHdfZzJzQkQ5TVJ6TzRBQzR3UGxabnFsQTJpZnNCRkp2NUZERDM2dGFhLXljY0RvOVFCaVg4QmJyTHFjYUl6bmtSYlZ6ZHVRUFh6OHc?oc=5",
      "site": "news"
    },
    {
      "title": "（福島）喜多方市熱塩加納町相田北権現森甲でクマ出没 ９月１２日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQjZ6NXRZRmtpd2xQSGRCU1JlUXlxQ2xqaV80eVIwZy1wdF92X3BwRHJ1T1F4XzhCVENvdTFDbHJKV3hFV2NoNW9TUTJPZ0JUZ2NtejdoNlgzZUtEbzRrTEt4Wl9iNzhaM2RFTDRHcEk1OExweU0tR05acHJmcFJKZmNjaXByWFFqdTQ3aFdTSXhKenB1OVI2cGI3VUfSAaIBQVVfeXFMUEZWd09EMUxVc3lSX0lQZlpXYTRpUTRmNjE4ZFJXSXRZOFEwMXhSOHNOYkQ2VGNLd1JoWVM4MDNvSmFiU2FiYjE4RVl0UWVaTVZ0eEVOZTNYMmhEc2ZUbWxTX1JHUEpLdzdVMDdZMElRTzJnbGdYY1BiQU1GOVRXSS1NeTBYYUZBWUpDdUxlWlZTZmxDdWJyUGxNWnFrVU5RVTFn?oc=5",
      "site": "topics.smt.docomo.ne.jp"
    },
    {
      "title": "相坂上前川原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQi1GTVZHWkg0LTVkbFZvdEczc1VsRUtkWEtaUTNrSjBiQUx3dk4zYWdQY21aRmZKRWlkSGJoSjhmOTBsb3l1Zi1JRVlydGxLU3doUzJBNC12cW9qQlY4VjBaa1NsMHFVR0NHZzRNUjB2N1c3MUN5N1JBYWZUTlhUMTA0OVZtSUFrOEVXaXBYcTBGcE03NGRWdzZUR3fSAaIBQVVfeXFMT2hBYVUxQmp3STkzUUFBT3JTbE5ELTVwcnBDYTVBb3RmbGo0cEpfdDNObE9xTDJfV0ZBM08zZ184TlZWblhSa0NQb2NIMUJPYnZaazRzU2R4OTNIYXRjdWVOaGsyckxCSEdmRmQwbWZkZVNPVnVybHUwWks3dEJENWJ1aklINWhKOEdKZTJDbDRQc2luekRZOTNWd2h6YXpMcFVR?oc=5",
      "site": "news"
    },
    {
      "title": "相坂白上でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObXF5UktMTWFzVWJGOXROaFNVa1BFa0lpRlU3d3RiSldOSkFUWk15QnZjeXU5Y3cyQ2pwandIYWtaazUybXNsaGIwRlNsWUx6SXU5NXJCMWpUSndOc21DTVlHYVctZ1IwbDhhNUo0Y1V1VGpOWlh5Q0t6ZzhpeEk4VmhodlVzTGttOW9FZ016c0NMS2VlMWNDWjlhNjfSAaIBQVVfeXFMTzNjQjRHUXpvLVRRdnVaZnk2dmVPdWJKclhna0RyQUQwLV9uRlhsbDNhT3NtZVZ2eVNSRGdETmx0aC0yMWRUVGZCUmxYRWFjNU9aVFppN29hZEYteGhBV1ZsUDJkLVduY2dCdzhjRWdDNEhhbDNITW5DM2ZOSHR6WUlnX21IQUlzZ3BlbHp4RkhFYUVDa21mTFRmSDYxeThYWWZB?oc=5",
      "site": "news"
    },
    {
      "title": "櫛引沢田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWV9Lb01sMkhSUFJxUHpxVFh2WTdTTUhjYlhwTzllWERBUUsxSHJXMmhBQlg4eGJHaktGNzc4SlEtTlB0cUM5VTdvaWw0UlhlZi1Nb2dLMVJEeHdob21MREQ1UjRPSFFrVHNBYl8xaTA0OElnMUZGR3VsQmY0SHRicU0tU3BHTlBIV2k0NzFqVC1uUEplTzA4ZXJ2MHTSAaIBQVVfeXFMTmhhdEFObVREUlR0clROMFlibDdHR0FyRE1ObFduU1RNc1pvblBVRUI2Z2hfSTl5NDZOZzYtbTZSdTczWFVPT3RCdkZSdC1mRDZ6TF95SE52UDk4RWJMOWRkVVdIOHpiNHg5QVBnNVYyVE95S2xBdk9MMS1EajJJTy1rYWpyMU1qVGVRTklNZzBkclktWDd2bEVFa1FSbXdpN3FB?oc=5",
      "site": "news"
    },
    {
      "title": "（青森）青森市荒川でクマ出没痕跡 ９月１２日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTmdUQmh0c3VLT1NKRUxnNm5OS01PVnFZOXRVX3R0WUdSTW4wNmV4NFUxdWxGU25xaVU4dHRNMFZyMzdXQTRZVE5iZWVNRXN0Nkw2N3d5Qnd4NmQ5YmNZcjlCZWdnbDE2TnhZMVFvSzVfTXJIcWVQcTVXWV9kUVp1eGxhXzhpRW4taHFjU3NGNGZvZ0o5bjZjREFscGLSAaIBQVVfeXFMT3dVbm1vd1NiVlllM25VRW5hODQ3Qm1UOXVRY0tPd3d6Tkc3NnVmRWRQZ0hTVDNnaGxlTlFYYlZKblZGWVR5T1U0bUZheHJBUFlaZ200czJzLWFlUFBiZzlLdE9hNmRVb19Ud2c5cl9zdTBPQnBjYnN6MVdOU0FSbjZkRDhBUm9jSms5WmU1eG5PVHhlZ0tBSTdZVEU4b2pNSmFn?oc=5",
      "site": "topics.smt.docomo.ne.jp"
    },
    {
      "title": "秋田市河辺岩見でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZnptUzNLUVJNZWNwTEh3Y2xlVlNEazFUakFBcXNzLTZNa2R6ck82cFhtcWVNWVYxMi1lR2l0MlVFM1dTZjdmUll4MTJkMXRRSjZjckNwNExfVzJrelZ1UTh4Y25lRm5Kc1VCdV83MTNDSlVSbkxRTExjMEcwWndEOFFkQThMaWY1RWlMeHVwUElYNWpKTTJYT25BWEFIUGFvZ3ctNUwtWmk1Q2RvZnAwc3ZlMUtQRDNpVFNtdVJRR01MU2JRbXQ1ZG1DRklSM09YbG9KVW8xUFVIR3l1cmxZdG9MaTNRSnZHWmFoMWprb1h0QdIBogFBVV95cUxPLXdTdWdlX0FweDk4dHF2ZTdNZWc1ZjFVQXhlSGI5ZWZYakxtS2pRQlNYUjVHc0c1c2dkRlQ3UWRjTmtFRnRqLU9rY1p4MjVjQjlpclJkazRmWUhoSnZmZURqSXBLWktpZTFBeS1oelY3cUtUaTFTZFJsNHdkVkc3THhvRzBFajZ6Y2JKcmRqdnhkMGlJZHM5YWJPUENjcDlSU0E?oc=5",
      "site": "news"
    },
    {
      "title": "横手市赤坂家ノ前でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOQnM4LU1md25kQ3NXd1pBc3pGQWVkeVRneWFwTnFKclhzb0lvd0hxYWxEZTIxRGZrMDFRMjMzblM4MGhDdS1KRHliRzlNQ1JrUVV2aDdzbUUyN3B5VFZDWmoxZllKekV0b3U2OWRiOTF4VS1kTERJT1VqS0tCeEpFbEdTVVU0X0dNaUZYWkU0WHBxX0psQ252WkwyS05GN2sxLUlQTTdraHpMVTRLemUtTGh2SHFQUHl6bW1BZDFYYVdTOXFKS1V3Y0haRHhpZjFMSmVaZHJ0WGhFdGd0WE44dXh1TUpwSXAzLVpTUGxsTlI1UdIBogFBVV95cUxOUWV4MlJBVFFJZU1WTV92Wm4yZXh1aHlMR1haa2ZETjZIWEhIY2pNNmJlQS1ONDNZWW8tdmpFTFlsNmI5UTVaLUxFRV9GeDR1amFPV0RWei15RnhhLW1vbE82WGcya25iZ3NwcUhPd3NzZERaa3ZkMXhlbk11VTFMTnRUTGhRbER1aXB4Nnp2eHFTY0lKOWhZX21fWlY5UXdhaEE?oc=5",
      "site": "news"
    },
    {
      "title": "男鹿中滝川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWXh0d3NIUC14VDJNYWlOOGJyN01FLXE5VkdvWWxDRG1iWThNRzBGbHhOUUdQellVckY2V0xtSGlvY29rQWo0X2NDaVhDaVBoVlZWcGZKZWw3c2hkVUk1eUFpd2xJYmN1SmthWVlsS0E4SFg3dXpTaUE0bVRYTTV3Nnc4SG1tN2REaUhSVGJIcXJ4VDAtYkYtb3pkSUzSAaIBQVVfeXFMTW9hR2dQU2NlRzlUbk9DZ3I3LWNvbXJhYkVVeEdWbDhJQ09nWEVrOUtCdDEyNDVUQm1QdHpnWlVDbklac2lpcEZIbFRKWTc1WWVqNGhrUUNvMmZHYzdqX1ZCcUVoa3ExOGhLWUt5OG5VTlF5OXlpQk8yZ0RxZEJmZjUtcmJvUFFhREdvV0VsSGgwSXRIV3RzVVdVcDhsWkZ6b2l3?oc=5",
      "site": "news"
    },
    {
      "title": "（秋田）八峰町峰浜石川稲子沢でクマ出没 ９月１２日",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQaFJNZmM5ay1vU09CaFI1dkdEcmFyQjhZNWI1S0VyODRPaThSOVNESWdEWXg3dlVHRXp1OEFOU20xMVp0QUlqdG01cHNVNmFyYUMtQXFvTVJtZ1VpU2UwR0lyNF9tekxSa0hVN1ZrdENDa1VVYWlfLVFNZVJvdHgtWGxJbFpPMGoybFFGSXNqRUs1Wk1zT1N4ell2cU8zN0FXdnc3eUdtZnJmWUNCRzl30gGiAUFVX3lxTE5VLWRCc0JRWkVuNlp1V3BwZEZlT3hZb0NhZkdmeHU0MktYbkQxdHBMX1RBdHZXQTBValVLdDdTUURWMEVnYkFPamhERUJCSmpIUVIyWWdzTnExYjgtbGw4cTNJRV9USTlpbVhuVGhVMTRGQmpDRl81SWFRQXo0UGVHR3h4XzlmVUxLQXRPdEdPcUxyenJDVDYyc3dSSHV0d0NSdw?oc=5",
      "site": "topics.smt.docomo.ne.jp"
    },
    {
      "title": "高木第１９地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdnJiZk52OFctSGs4ZTh6SDg2RmF6LVpMMDgwTDZsVjRLamVoOVFRR2VONDFJQWc0SzRrU1ZfUlVQdkEtY2dHblJaTmxTT3ZqX2FoaU1obE5lNGEzeVI4Zk0wM0JiYzdjdnJJS0NZeHcxZVREVjctNlZpeEdhSV9nVFFLaGxaR2xCMjJFaFY3ODlwbzR0cHM0WVYzUVXSAaIBQVVfeXFMTmJjVEU4SzYzdHFLYkVfMi11UjRoX0M4bXVLRmdETjdPZHgxaklVdWJ6eXN6enNlNXI2MlR4SVdSRm5tOWxSYW1jZTlfclo1Q3FZR2JOS3Jla0NwV3JYaTJGM0F5TWE5TEZLTnpWWEgzaE5jSDdLa1VMeF9GLXZkRzA0RkVyclZTMUo2OHI5UE8tZjNCWGhqT1pmOE1JVjE1d0d3?oc=5",
      "site": "news"
    },
    {
      "title": "大堤東１丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNU2h4aG1qNl94dDk3Y2tSaE03WTV0dGVYSmp3OUhpbkgzR1Y4ekZJdktmdWJTMmtYcUZmcDR4MEdXc1JNXzJHd0l4SHVtUk1TZkd4NXZKbm43REptWmRsRWpsRWE0MHhEMVlxVWFhTHZjcUl6QlpKbGU5eWVmRGVqYlpNbzBsb20yaS0ta1NzYVZjRkNlRmZFUkM4MkHSAaIBQVVfeXFMTW9VM1F2elYycWlvNER0RTZoRGRzV1NqWDRTWWUyRVNYZHQ1ODJVMzJ5XzRxZGlyemFiUjA4dGh3amxaNk5ZQUlDcDk1bFdJLXRXellvMW50MGZGM2VfNjg2cGZCb1RQOEZCRUlrZ1RBQWRheHlYSnBhWl9qYTdPeHQzWDRWalczZmlMem1pRUdaUHNXM3FUZWZEVV9xMTVScjZn?oc=5",
      "site": "news"
    },
    {
      "title": "南仙北2丁目で小グマ1頭 目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOMlRqTDM4MUYyeFZ3Sm5MM19ScGtNWmlQOUxZb01Palo2Q0dvRGNrYTZrV0VEdnp5bGlJY0FWVU9jUU9LQngwWVFEZjAyRFU3OFRVU2VJdm51UXkxaEYxSGc2bm4tcEpaTDl0QU1qM3BZUUJrNUVWSld2OE5hTWxTS3F1X2dfRWc?oc=5",
      "site": "news"
    },
    {
      "title": "西目でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1yYm91V212S0tkQ0lqYVBlTFNvWi12UzNib0JHb3JReEt2bFdGVEl1NFdhVmlBbUxqYklQWmZRZ2dsc21QMkRFTWVxbHZ0TUN6RmRWYkFQYWtEN25Yazh2bktzSGE2Ym5jMzE3UGU1OA?oc=5",
      "site": "news"
    },
    {
      "title": "大舟でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMXZUczlueV9NdTFqZ2F2ZXVMdW44MVdoWHE1NVIxMTJicHNXQklJSnhMMFNhOEF4cnpYSHM0OFdCTHZudGhZb0Iyb2NqWVpHN0F2czBkWlNuWlpQczkzWFJENFZRQmk1TG43Q21ERFF0UmRvQUMxME1mdURIQ0JfV0paV3dpMXRtZGhqV0g3czBfdmxKVGZkU0Y2VDnSAaIBQVVfeXFMTUE0N2Zudlg4TzdwQUVmZW56VlpvejY3S1VfRHRzdVIyVFhJejJNV3NiU0U1QTF1WUhfdTFOZ3JXVlNpem5UdXJFMDJuMFZPUzhRcmdxRXJFOC00STZ2cEROZEMtZmRSSWRaQmF3aWFsRk1ZanpJQVVFNEFub09BSUtPU25QTEIzcEZVdmpWa0VYdEUtdVBsOU9tbllZajFZckRn?oc=5",
      "site": "news"
    },
    {
      "title": "（宮城）仙台市青葉区大倉高柵でクマ出没 ９月１２日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbmZNak54YUdxb3Frczh3cVd5czNlMEotNjI3M2ZtZXZ0MERzWFROV2c0S3FlWjBqWDVsZlFncHFteFZadHI0a1JXcV9XcHlOeTl1MDBjanFmVTNrR1FJQ2JNRTZaUDQ5cXFTbnNJVzBBRFJKUjY2Q1hRTUFxVUZDV1lYbVI1U2g5Wl9ETEhVVzMzbV91T0NQVlFuVEPSAaIBQVVfeXFMT0pQTjNzaTdGdFlSVDB6aWd1blVTU096X3ZqUl85N0UwLWlLOWlIQ2hiS3d3bjRwNWhLVkNIY0loa3dCSXNJdzE0NEdHZFRoUlpGeXVBeXVhZDdmb1M1ZEpXdzZxY2dzRk1QUjItWm9ucFFVaklaZktfa3lpeVoyaUVSQ3R4YlU2b2xPTVNlWERNTUYxVHE4ZkRpdEJNRHg4bjd3?oc=5",
      "site": "topics.smt.docomo.ne.jp"
    },
    {
      "title": "（栃木）栃木市尻内町でクマ出没の可能性 ９月１２日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTm9oTHpObVdyeFpic0pYNFJhOUxSRmt6b011RzRIMTYycXdHSFZrQ01VMXZsVkgtd2xELVZzb2RDaVNGSVBZSXVyQklsZEVNUVp5Ty1EWkczam5zbG9WTWdhZk9KeW1ZLTNnOUIxZnlPWnMwRHI4VXdhVGZDbXdwYW9ISVpsVjJicU5OV1lUOGg2MmhucDROS2VCTTfSAaIBQVVfeXFMTUVIU0lseHY1WUdKX0hJZ1QzbzJpeUpGcndRNG0wa25uSnZCb3RMY3BRTWlzZkZ5a0hHSnpyX3dxZW9jV2xEcmhFZ2lVNkhrelRJU25UTE1tZ0owdFdnSkY4MVdPWnRSVFZmVXhicFVBVVZwbkQ4b0VSXy1EQUxObkQ2bHVNNWw5dW5fX3J5YXNscFhHaHZvX1FFa0NEaDM2blB3?oc=5",
      "site": "topics.smt.docomo.ne.jp"
    },
    {
      "title": "（栃木）栃木市都賀町臼久保でクマ出没の可能性 ９月１２日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWDZTMm9JQWQxSml6Qk5BcjNGMTBEQlpnMGpfSE1rVURUM0VWakZ6RkhJNVAzVl9iamUyTWo0N3BKcW05a2NBV0huUkg0MWpBLTJGVGZJUFZ1STRCWUdDcHJtai1lNEViU3FOMWc0emtaUnh5TUtEa3RNQ1kxcEFqRGdDbDZ5c0xydFRVUk0xclNMRjY0a2NJZ1J6LWHSAaIBQVVfeXFMT0ZLNDNsdERzZHJXbURZd1kxeC1HYnFJRnJVS0Z1OVJMaVVDNkFUTXU5VDI4UnFiSU5zWUc5X3FNR2NoZVZCd2JQeGlEamhGTEFfOFU5a0dJVlFwTWVSSnI3S2ptSmt6dGRnemxsLXM2bzJ2Z21Sb1N4UEVwRFRSWWtpQ3RKekViOC0zQVlkSTJ5TlVzMVQ4cUM4M1NOTnk2elBB?oc=5",
      "site": "topics.smt.docomo.ne.jp"
    },
    {
      "title": "栃木市でクマのような動物の目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE13VVdBQXhDZXhzb3d5NThHQlM5bzJWZGN0UVJlWVA2T0FnVWFXdERPVGZYUEFvR2s5bDk3NkZsR2lCU2VadVR0V3I4dU5mY2RlVEVrVDE1NjZVRlU?oc=5",
      "site": "news"
    },
    {
      "title": "伊香保町湯中子でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWHBKTXJlSlZBbmYyVnpmdFBPRWczaklXdnNOOUlNNnR2S1JkM0s1Q25GbDVQRnNLYTdaRUgzY3RSeUhrdmhvT1VSTnViQ1NrMkhQSDF5WDdDb1hhcy1wNEpteXdDdS14VFh6Qkh0Rl9PMFJUcUwwNE91cUhnbTVpQXE4bTd6VVEwOGY1UURPRmRMbXlBNTJCdFprWWLSAaIBQVVfeXFMTU41aUxHTHhMVFh6SzctaFFPODRlTnhVazJiTmI5bmJRZzYzSVBOQU1vSkJSYVQ0cGlIVlV0MkVPel9zdjQyZXpNYlZwaklLZVlSclRBN0I5SWNTOGg4azlob1VIZHU3S1JibUJKc1pKYmIxQTk0bnd2UW9XX3ZFRlh3MXhueW8tVkVPUGhuTFczQS05WUtfblFKOWUwVUpsc1N3?oc=5",
      "site": "news"
    },
    {
      "title": "青倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZUhXZUI3SjVTYThnbDRBWmliVGx5NnFVRHlNamdoUGh0UDJKVFBWaEZKbnRGanNjWUpmUExYRFZ2NTBISzB1VE5ZVmxSY1dZQUJBa19JblR6dktmcUdZNEZKeHZlb1pydlhLeE9FME9oX2FTRUUwN2k1dThKT1hpVWhqLWRIU3J5QUtzbS1DMUhjSE1aWjV5UFZLZXLSAaIBQVVfeXFMT1ZUYXdZc1g3azZuMzJ3aEVhanFCdV9uYW1Dby1yVkJzUDZoY1hTZTdUXzdBR0k2SXZCNUJVZEJSX3JvNllLeWxvTUd3SVo0OFhJZlhaajI3R0NMRFI1R19uTDhUN1c5aWh3WThQSWRYSllBTVh6Z1NwRFNmVXZ2YW1LckRZYVR4b1ZqTzg4OWdWVVNCVFk2amxoNzEwcW5PTFZn?oc=5",
      "site": "news"
    },
    {
      "title": "水橋中村でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOLUNMOGstNXUtcDRiMzZNMUJHenN1akF5a3E3bGJXWHZid1AyOFlLYlBMLS12NkVsVFZYWUs0bXo3NndYMEhPbzhvdVEtWGUwNnJOQkt1LTBxLVRzaW5nbzJ4WkJsbnFLMHR4bThFckVjY1FiSlBUcVlobUN4Q1FkYW84d2VNWVVNalJnemMxWmptRU16cWpfVHNWck5iMEpaMW9ZekFMUFNkeFZFc0FKY0pyb05vQWJWbXVLU3A1TFM1TWJPeTZWNExoTHh2STcycmZlS29UTVpMSWxFZUlITHJySjc2bVBTTnJaZnZwcGhBd9IBogFBVV95cUxQNzVMRXh6eDk0SVZhTG9QaEF0bGo0U09GTkIwOXNSemFCcTlNaWZBZkg3SFYtTGtIMjBxUGxkaVBxamFQRVlpYm5pVXAzMktiSUhrSzNQSnVBTTR5cUJrWnBsLS1vUEpaSERKY1d2T2RQdGZZMmlob2c4eFlfbHBwR3U4NWV6dlIwZ2cxbTdDekI3b0JPRGQtcUItWHpoMFZhT0E?oc=5",
      "site": "news"
    },
    {
      "title": "学生寮近くで目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1BUnA1eE5ueU9NVnNmSk4xM0IzQTRnWnFtY1p0LUNISG05RXkza0J5RE1wbmdIaFFadnd0NjI3MVZEWHJYWVdRUHN5eVJiS3lsN0pKd0hZSElfanVwTS1yZXBwYnlpX1F0c2VYdGRGYVphSjRMa1lpbjFna2J2OGs?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"福島県","count":8},{"pref":"青森県","count":7},{"pref":"島根県","count":5},{"pref":"北海道","count":5},{"pref":"秋田県","count":4},{"pref":"長野県","count":4},{"pref":"岩手県","count":3},{"pref":"京都府","count":3},{"pref":"栃木県","count":3},{"pref":"富山県","count":2},{"pref":"兵庫県","count":2},{"pref":"山形県","count":2},{"pref":"群馬県","count":2},{"pref":"滋賀県","count":1},{"pref":"石川県","count":1},{"pref":"宮城県","count":1}];

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
        <span>対象期間: 2026年9月12日</span>
        <span>·</span>
        <span>公開: 2026-09-13</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={53}
        periodLabel={"2026年9月12日"}
      />

      <h2>1. 主要事案の分析：長野県塩尻市における住宅敷地内侵入および動物被害</h2>
      <p>2026年9月12日の集計において最も警戒すべき事案として、長野県塩尻市で発生した住宅敷地内へのクマの侵入および飼い犬への襲撃事案が挙げられる（※1、※2、※3）。人身被害キーワード一致件数（3件）はすべて本件に関連するものであり、人間が直接負傷する事態には至らなかったものの、日常生活の場である住宅の庭先にクマが深く侵入し、繋留中あるいは飼育下の犬を直接攻撃している点は極めて深刻である。住宅地という完全な人口圏内での攻撃的行動の発現は、人間との偶発的な遭遇による重篤な人身事故へと直結する危険性を内包している。なお、当日は全国で捕獲・銃猟キーワードに一致する事案は0件であり、侵入個体の排除や確保には至っていない。</p>
      <h2>2. 地域別出没傾向と時空間分布</h2>
      <p>当日に報告された総出没件数53件は、北は北海道から南は中国地方（島根県）に至るまで広範囲にわたっている。特に東北地方での事案集中が全体の半数近くを占める一方、甲信越、北陸、近畿、山陰の各地域でも集落近接部での出没が確認された。</p>
      <h3>北海道地方（計5件）</h3>
      <p>北海道内では計5件が確認された。喜茂別町川上（※4）、訓子府町開盛（※5、※6）、根室市川口（※7）での目撃報道に加え、鷹栖町では17時50分にセンサーカメラによって1頭の姿が記録されている。道東・道北・道央の各地域で分散して発生しており、農地周辺や森林境界部における行動が継続している。</p>
      <h3>東北地方（福島県8件、青森県7件、秋田県4件、岩手県3件、山形県2件、宮城県1件）</h3>
      <p>東北地方は合計25件に達し、全国で突出した最多発生地帯となった。福島県では西会津町（木登り行動や登世島西林乙での出没）（※8、※9）、本宮市の畑および青田（※10、※11）、喜多方市熱塩加納町相田（※12）などで確認された。青森県では十和田市相坂地区において相坂上前川原（※13）、相坂白上（※14）、相坂24での道路横断（体長約1メートル、16時55分）と短時間の間に連続して目撃が集中したほか、八戸市櫛引沢田（※15）や青森市荒川での痕跡確認（※16）が報告された。秋田県では秋田市河辺岩見（※17）、横手市赤坂家ノ前（※18）、男鹿市男鹿中滝川（※19）、八峰町峰浜石川稲子沢（※20）で確認。岩手県では花巻市高木第19地割（※21）、北上市大堤東1丁目（※22）、盛岡市南仙北2丁目での小グマ目撃（※23）があり、山形県では鶴岡市西目（※24）、川西町大舟（※25）、宮城県では仙台市青葉区大倉高柵（※26）で出没した。盛岡市や北上市などの市街地・住宅地街区への出没も含まれる。</p>
      <h3>関東地方（栃木県3件、群馬県2件）</h3>
      <p>関東地方では5件が報告された。栃木県栃木市では尻内町（※27）および都賀町臼久保（※28）でクマの出没可能性が報じられたほか、同市内においてクマのような動物の目撃が相次いだ（※29）。群馬県では観光地・温泉街近接の渋川市伊香保町湯中子（※30）や、山間集落を抱える下仁田町青倉（※31）で出没が確認されている。</p>
      <h3>中部地方（長野県4件、富山県2件、石川県1件）</h3>
      <p>中部地方では合計7件を記録。塩尻市の住宅庭先での犬襲撃事案に加え、長野県木曽郡南木曽町読書東町でも出没が確認された。富山県富山市水橋中村では小グマらしき個体の目撃情報が複数ソースから報告された（※32）。石川県では羽咋市千里浜の沿岸部近傍においてクマが目撃されており、海岸線に近い低標高地域への迷出が示唆される。</p>
      <h3>近畿地方（京都府3件、兵庫県2件、滋賀県1件）</h3>
      <p>近畿地方では合計6件の事案が集計された。京都府では南丹市美山町高野、舞鶴市下東、京丹後市弥栄町黒部と丹後・中丹・南丹の各地域で発生。兵庫県では宍粟市一宮町福知、豊岡市日高町栗栖野の山間集落・農地近接エリアで確認され、滋賀県高島市朽木麻生でも目撃情報が記録された。</p>
      <h3>中国地方（島根県5件）および四国・九州地方（0件）</h3>
      <p>中国地方では島根県西部において5件が集中して記録された。浜田市弥栄町稲代の稲代集会所付近に位置する住宅農地では、正午ごろに体長1メートルのクマ1頭が目撃されたほか、同市内では学生寮付近という教育・居住施設近傍での出没も報告された（※33）。益田市西平原町でも出没情報があり、午後9時ごろには国道9号から市道西楽寺線に進入した地点で1頭が確認されている。なお、四国地方および九州地方における出没事案の記録は0件であった。</p>
      <h2>3. 出没環境と土地利用区分</h2>
      <p>当日に確認された代表的な出没地点の類型と環境特性を以下の通り整理した。森林内部にとどまらず、農地、住宅敷地、道路網、文教・生活施設周辺にまで出没が広がっている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">土地利用区分</th>
              <th className="px-3 py-2">該当地域・事例</th>
              <th className="px-3 py-2">出没状況・特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">住宅地・庭先</td><td className="px-3 py-2 text-xs">長野県塩尻市</td><td className="px-3 py-2 text-xs">住宅の庭に侵入し飼い犬を襲撃（動物被害・人身被害一致）</td></tr>
            <tr><td className="px-3 py-2 text-xs">住宅地・街区</td><td className="px-3 py-2 text-xs">岩手県盛岡市南仙北、北上市大堤東</td><td className="px-3 py-2 text-xs">市街地隣接街区における目撃、小グマの徘徊</td></tr>
            <tr><td className="px-3 py-2 text-xs">農地・果樹・樹木</td><td className="px-3 py-2 text-xs">福島県本宮市、西会津町、島根県浜田市</td><td className="px-3 py-2 text-xs">畑での出没、木登り行動、集会所付近住宅農地での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">交通・道路沿線</td><td className="px-3 py-2 text-xs">青森県十和田市相坂、島根県益田市西平原町</td><td className="px-3 py-2 text-xs">道路を東西に横断、国道9号から市道へ進入した地点</td></tr>
            <tr><td className="px-3 py-2 text-xs">文教・生活施設</td><td className="px-3 py-2 text-xs">島根県浜田市</td><td className="px-3 py-2 text-xs">学生寮付近での目撃情報</td></tr>
          </tbody>
        </table>
      </div>
      <h2>4. リスク評価</h2>
      <p>9月中旬という季節的要因において、クマは秋季の活発な採食行動期に入りつつあり、行動圏を拡大させている。当日のデータから観察されるリスク要因は以下の3点に集約される。</p>
      <ul>
        <li>季節要因と行動圏拡大：福島県西会津町での木登り行動や本宮市での畑への出没に見られるように、農作物や樹上資源への志向性が高まっており、採食を目的とした行動範囲の拡大が認められる。</li>
        <li>人口圏への高い接近度と滞留：長野県塩尻市における住宅敷地内での飼い犬襲撃や、島根県浜田市での学生寮付近・集会所農地、青森県十和田市の市街地近接道路横断など、人間の生活動線および居住空間との重複が極めて高いレベルに達している。</li>
        <li>捕獲対応の遅滞リスク：当日報告された全53件中、捕獲・銃猟キーワードに該当する対応は0件であり、住宅地や農地に侵入した個体がそのまま周囲の緑地や山林へ移動・潜伏している可能性が高い。</li>
      </ul>
      <p>以上の状況から、住宅地境界部や農地周辺では、昼夜を問わず突発的な近距離遭遇のリスクが存在している。特に庭先など居住用敷地内への物理的侵入事例が確認されていることから、屋外での繋留動物の管理や夜間・薄暮時の不用意な屋外行動には高度な警戒が求められる。</p>

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
          <dd>2026年9月12日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-13</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-13</dd>
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
