// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月5日 / mode: daily-report / 生成日: 2026-07-06
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-05-daily-report";
const TITLE = "2026年7月5日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月5日における全国のクマ出没件数は179件に達した。秋田県での人身被害をはじめ、住宅内への侵入や都市近郊・観光施設周辺での出没が確認されており、生活圏への接近リスクが顕著となっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-06",
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
  datePublished: "2026-07-06",
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
      "title": "2026年7月5日 秋田県由利本荘市 山林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE81U3NLYmRCejh0WGs5Y2tKM3AxSFpJNkxYRGNOTzJoTV9ER2lNMHVid2k3MEJCTThrVWpwSXlxMFFfM1o5cEZlRGNOcmNJSWhtdVljSmpnTjNtc2pPWUpZczZJQWY?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 秋田県由利本荘市 由利本荘市の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260705/k10015169281000.html",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 秋田県由利本荘市 鳥海町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9RODN6blpEbWppUjUzT25WdE5GaEo1UUlBSnhsSFdFTm8zY1ppREk3SlZGbkdjZGNtQnpZM0RuYklYRXpyblNuMDlXYm5LRTY3ZTZfdEU3cGdPNXVtRGVnbVZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岩手県雫石町 雫石町の住宅の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260707/k10015171111000.html",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 宮城県仙台市 宮城野区苦竹駅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOaTU4VUgwVVJNNUh3Mkl3WVZhWEFNMENqdWNJcVQxODJMdDFzN0NIM3lJbEdQVEMwQjN4Z0xHUnUtbklBeWdIZmIza1MteXRNaFRQZjd5c0xzVUJpYW9mdGJQWnBVMkt6YkxYUS1rV0tEVkNXQWY1dWpTQnlIYk9mOExXYkNHTFVoeHBrYjZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 宮城県仙台市 苦竹駅近く河川敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB0WlB6RDVWWndoWkdXbW1BRU01bVBsbGJTajhOcXVUeDNGZG5qMnlvN2pEbHZTb0FNRnY5SG9GOU9peHRmWDVmb19uTlBXQk8tVEMwLVJrNVVjanY0N0FjanI4dVJwRGY2NzRyNnRtVkJ3TnlYbFZfOGVMNl9makk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 宮城県仙台市 苦竹駅近くの河川敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9NUGtGbXhlZF9NNWg0cVB5YzZoRFdOa0kzOXUwSjNHYURLWGstb3JkOE1ReXBRdUpjLWl4c3F3M0VPa2k1R2s0SFFlNW4xVWhtVTdvX0FYaFRrY09rMW1ibjU3R1UyYmd4bW1YOFpvV0I?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 宮城県仙台市 宮城野区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAwR0c0bndIN1V5ZVg5SVpLMzJ4V1JyU01odlpFUWNhT0xrZnRUd3NRV1diNFB1MVdJWER5WV9VeFk5T3VRM0J6M3dJcVRKdW8wVW85QUVpR2lVaFhGQmtIQjhId3o1a1J5LTd2UVNjUXBsZXF4em1qUk9EcEUwNXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 宮城県仙台市 宮城野区住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE5rNFNPMkJrRGRIOFB4aWNCRnlXWU5RenFTaERLWGw5SEtGYnNvcmpSanI2ZFVra0YyUExBbWJEd2RYTFNPMnpRSVhvYU9XWlBMOGg0bUdpUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 群馬県下仁田町 荒船風穴の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE8zTE5ORDl4T3VxWmsxRFUyYm9TdGthU01BT1ZieS1kT1RlYlJWM0Jpa3U4MDFUQjFBMVE0bE1WUW9qV3Z3bENHU1hqVEdkbktNR3Z4dU50OGY?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 北海道足寄町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 北海道今金町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 北海道名寄市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE4waUtaTFBwZVZYd191TUlXb21MTmhOQWR6ekhxbWRObFh0S3dwTXEtQ1JZMTlFMXpuMnRiMldwNGR0Ty04QXRzc2VTM1dqUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 北海道弟子屈町 摩周1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaEJHTzlvbmNrZVJFLUlJaDFjZmljM0ZRQjFZUHhzb3RxOFZad2RqdTRweTNXb3BXVU9qQTdWM0VxTDAwaG55TjllcFd1bkk0bWN4V2J1dzRCYTA2ZjNIa0lhUWFNNzNyWlBpSkVZUmVMOVl0ZG9tSjlfRGZTLWk5bE9GSHBpQlFuazR6c2ZScG1HQUY2YWpWam5rQXHSAaIBQVVfeXFMTW9mZjdRT0VFWmxwaGNLWnFtM1JCaUwxNmlJYmlBcW45d2ZaNDNUNURQWUpKYlpwMkxxb3FYM2RQVVF5LXdUcGNwbVVRYkxZM1dwREE0d1Blanpyd0l5NlljWE1pckJUSktrRlI2Z3R0VFpWUWdJd19qN09MWjU5Y0h4V0pIaDUtSE5NMmRrNl9OeHJmQ3NscmdndWdCS2JreDBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 北海道乙部町 豊浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbEJBWHNtZVBmcmdUdHZrRDA3SEdxakt3dE84QzVXNlhDM0VsN2h2MEpVbzlVdl9uekdiNDZua0tyQl9QaVVfbzRhMnV2eFh1M05HaEZqU05rbmlNaE9fM0xURXdZOEo1R0ZkR0trcGVQMWJRZGg0THozbTJ2SVZtakg5clNsMEQ1TVJBalBVeEwwTHJjcEltdVhSaG7SAaIBQVVfeXFMTklyOGtGVURBRE1Fb3VoXzMyN2xuRG56UDRYZlAzT21fVDBUSnJGZTZrd3FyeHRmQjdZbHlXaDdpYXJsX0NBX1g5Q1EtdFJfT2VIY0xJb1NjNHNibl9uR2tpLU8xejRxY0RCUzdSZVhodk5Kc2NNVmhuNkcta3lDSG1vbjJNZl9Ed0xsTmJCZkNqaDhGT1pKWjg4aEZHQm5LLWxn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 青森県弘前市 小沢字井沢106-81付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 青森県弘前市 小沢井沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPT3NQQ1ZVcmZUMXZYMmJqcG43d2hpdlREWnEtcDMtYUdqTHB4MnY4cXZXWEYxVlZpWjlCQkMweWxOTFFRUDZlX29hUHE1Si0xRzNTZ0lSdVFCd0V1cngza0o0elBBTmdCclVKQ0V1R0NqSEFhdHlOYWxVeTJ0dlpvNVRfRHd3QXRfNDI4b2xmbWdJb09aQVlsa19sMGdhb1pJMktpUDNRZTVpLTNmYUVnOEU2RTJoWDFRMlFTSWducmhpeW04d2JBTnZmUUVWV29IbmVkSHN3N0liZ2xLUVBucGk2QnRaV2RtRmJqQ2REMW9NUdIBogFBVV95cUxOR21CcGVrLXZSNGtnaDBfYnVlcV9Kd1laQWVxeFlYZUxrOUZxa1BxLUdzOUo3R0pFSU82RllBU05GTTRSdXM0a1lDWUh4ZnViRjFrSldoR1hPODBaNFFwWjdYVlB4aGd3a1hFMDFsMVFDVGtVUEozb3FtNTNOZVlBLWF6Nk0yUEZ6RkVqVHNDTkNnYjJ0ZlRibVFJbGdjb3RFRUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 青森県十和田市 伝法寺大窪の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQNTJ6S2Q2Tm5vVVZ2eVFwZl9QYUlkdGNqVnNyMkpxN3NaemUya01nYU9OcklGRE9pbkpndlB0eVY2ZkVpSHZPa0lkYkp3MGdMeXhMLVJHT0o3TERXZXBXMUxNa1loM2xwRC00RnQzaXVUWDhQXzdLcjdfemhYOVdXeTZHNEFOZ2pUaGJmTXBpaVoxMFdLNE84dnNxZnpWT2pLR0JXdnhsOXktWlnSAaIBQVVfeXFMTVRKc2l5MzJzRlhzMnJ3aURlX0FOM3BlV043djlldnZJNXpwOWhHUXRaeWF1YW1sVUxlVmtaakdodExkUmhsdmJfaFBRWmZlX2tjNmNqUUxYTWRhQm02OWVLRFU0N3NqTjZvUmZ4VzhiR0JtUG9IYmwwR0sxTE9tcm1ZWmR1N1hHVmxiejNXQ2ZFMW45RFVKMEpGRXQzbE1jY3Fn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 青森県西目屋村 川原平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQN3hiTGlpSXhmbHMxM3UtT29fVThIUzlEOWRWMEY4SUFaZV9mODByWDZyUmo0S29qNnA4Sm1zbUNRTUNhMVdnMXNFV1ZyQVY3ZTlOSG9xclIxd3RoYjRKaWs4a3BDcVZTY0JrXzdPdHJ0bUY5NTdHdk1JcjFSTmtUd2lNZ29hMzJZUW1wc3JqREJKN295VnBueFdTbmtZMVdEc2pSOFpHQjF5eWFhM2JVQ1d0TWJURE43QzNjemlhTzRDVkp4MVl2dDAtX1E2U2t2VGgwNkl0U2pTYmhHU2owQXVDYWRIY3NwUGp1b29PZEw1Z9IBogFBVV95cUxOYWJ6aGhIb1BRbUNNTUpBcU5jeF85UVozV044dlJXQWlGRmFuZ1dTb0V1Q2ZpX2ZBelQ5MENsdU9hVFBDdl81R3F0bV9RQVY0cjVBdE42Q1B0NEdBU1k3YkRvQmpHcVNyTzVGNzlvSHNwOWpFRERpNERjUGV0RW9FV2F3VW9KR2k5bklYdmlYV1VxU0FUcTVYVmQ5c2tIUnVQX3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 青森県青森市 原別の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcjNCRkZzYThxNlVHTzh4SEo4anRXTDNDc1B0YjQxdk11T2ZZTGV3ZnM1N3ZVaURaUm5tMF9FSzJRRC1uMnp0aWlFd016NkFQMUJSeURxd2NIUVZQckJuR2p5Q1pXa2tpbkpjbVktUGxDbFcwWGt5M09HOWQ2aF9UNGxSSVhRd2lGMkE3R3Y4UEE0T2tlWmp0SEVQNHjSAaIBQVVfeXFMUE9PZFlfUk1UVDVVcTd2bkFhRkRQVmZYUU9mVllKZUtXX2J4RmJOZXVVMUx3ZEw4ZWNZWEVIcHRBd25aVmRybVBGT2twVTdCdkctYjY3R3Q3cFduUkx4Y3d0SURFWlkyTEs0X0dXWVQ2WXVNZWppTDNubkhpWXRhOGU2OUVnSnVDNDhDMHF5V1FWZXpDN2NBZ0JoSzdjVlNqWjVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 秋田県大館市 長走陣場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQa3c0S0VSTHVSUXJyVUtiYVdubFoxTGc4Zkw0YUNxY0hnZE5SdkNEb3ZsS01yNjhELVdKdXdTcjRyWmxacFRkWUNfd0ZCdWxTTmd4ZWNYMExpOHZuT2ROWXRUSGk2VGRrdXh2cUNQNkVwQjBfdDNmdXVNeUZINUhYTld2Mmh1c2RpYmMtVjJ6SWlhaXByeUdOdVRxT1ZpSHh3b3BpWXl6eWlucHZMNnlmbHJrZHNEczdsQTh1TGR6bWhBdUdkVkt1LVBwdS1vYnQ2T29kOFlhT1RzWUZfTUxVMXBJcXJLWV9IMUtkRjl5Mm0zZ9IBogFBVV95cUxPUGhubHVQalJ6VWNTYzU2a29Jeko5MWZBR2gzT21mYmlvbHZ1TC02WTN1VC14VDNXdF9rRlNHQWRmM1ZoMHJvM1c4aXNtS3BmWndHazVDS3diYmM5S1d4WU9YWVAyQnRqaFBWZWpPcGFPY3JhTElUMDJ6Sk5WeW9yTEFSRk5YdmZhRnMzZ2k2cFoxNjVoalBtYnZ0OU43dGotV2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 秋田県小坂町 小坂沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOQzdzMFhoZnUzRmI0WW00Q0NuRE5MUFZNZ0dlY0JjaUlNN016US10STRHbXZ6R0VZdmd4T2tVNnl6RDBoSmpfb3hQbmRzeXM2QnVuSHgwZFJFWE0tcm8wWXcyZFFkMXhPamhyREwzd2Y5bkNfcjNWZW54Zl82Wjl6U0QwX2MxVmdzeUxjSXdrcGY1bUU0bW9aWGlhOGp2eEl3Z1VINE9DUzRIZnlQbFU40gGiAUFVX3lxTE1SNlVIb1AzbmFHRENfRHZqVFBFak5VV3BOOW1HRXdTa2ZqMEVBX3oyQzBxa0R4dDRMMmcyRE5RbFBRUE1SLXRaUm0temJrQkNPLUNoTFZ3bTV0cHI2TjcxeXBSaEdYX1FiTmVGYlA3Ujg0VUgwNEZSOXAxMGxNMzVoTHB0am9YYUVRY2JENktCcHpXRzExODhta3hhdmlHZk9sQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岩手県盛岡市 上米内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1iUE1IZU9iYnNJOEhQSFQ1ci1mVUhLTjlwTWFDbWh3ZlNmRjFPUlc1RHpRMTNyb1c3WUVBWXF1b3pwRWNqZm50eWpGV2ZFZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岩手県宮古市 日立浜町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZHlCZlRwSDFYdUF1dU0wUDBBMUhQek1LOG8taVpvNThkbjM2Y2FtTmtya1h3NTdSUnNvOUlXeVp1ZVpjWExBU0VtV296bVFramJzdHFCU2U2RUQ5dERIOWVmRXRCRmpEd1NRQVlrRTJaZnlUN2Z5VVJXNWZDSzR6RlJqZlRCWjRPSFM2MDI5VWd1YWdOWUtJNThlX3jSAaIBQVVfeXFMTV9rU0VGZnIwZ25lb0ZRMDg5cWZIdmUwYjhPOXpGREh3cUNGeldVRTRXS01PWm1PM0hUdkRCblNpdGdvV0QyZ0FYNVEzSlAzQ2dNSHdoY3RVellpelZRUnh3eXhveUIyS0hod3UwYzBMMVFyNlpZQlVVLWJrbEdYYTJIYk5MZTdpcF82ZTZvT1pFNmJ4cUlhMDFyeFRQNzJ6UjhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岩手県大槌町 小鎚第１８地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQklrbktPZzU4UDE1LVliek5rR0gyV1pxWC0zXzY0OEoxYTJBQ3drQXBCSUFiaEc0SUlLcVhnMG43aHZRNW9aQkUwNHR3N1FNOGJjaDA1VmstbUhZYm1zX21CcERacUM5b3hBY0xmeUZzcmFveHBCUXJJYlpqZDJsUFM0MGYwMk1XQVZhc2F5cDlUQ29XWExndURNT2_SAaIBQVVfeXFMUG9UNWE5WUVEalN4bzdxRzdJa3BrTUVLQXRYNWRJQmpfeDRhS3hFUGl2bUNhM1lWdUlta04wY1h0YVMzSjQ1bXlxeGhSa1cweTJOMnIzNFRFb3pLYWRpM3pNUVEyQzJVdGpBaVVDMkp5Rmtmb20yZVNpTXJIUS1tLUpaa25ucGZPelFRbDZEV1B5emxwSW9KeUFlcnd1a1dXQV9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岩手県岩手町 五日市第１０地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUlRaU3RnR0hwOEIydHJ1UzhkYUZ1R0hrUndycDA4cGl0dEl4cXY0bUlvMXQyVzItV1Z6eTZuVGRJb2YwRUVQTE9NRUtKNlI5WEtHbFZxbU9SMHJva2E1cU1hT3NfTzFtUFRfcG1oMFpzSE51WTdQUzRTRXRacWo0YmQ1UURjWVd1eERyU18tVmhPWE1hZ2N5Qy1nZ0vSAaIBQVVfeXFMTUNiaDlKTm1lbEI4SFAxc0RpOGViRk40OG1GMlM1Mm5tME9YNUFQaEtBQVBBZmNIdlNJOHhOZDd2WHVmdWd6X2RoYk5sTk1ZZkRQeUQ4VGtDYXFMU0ZvWlBpWkQwc3AyM2gtTUxEaXlaaDY0NVVHVEhsVV9BOWJqQW1XcjM4Qm9OZFlDWl9lTkk5dHh3VmwzUXlKVEJQMDd5VUdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山形県米沢市 米沢市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1mcnRGbEFfaU5CU1JUWTJOM1JtVy13cnVOVllUbkVldDN2ZWE4Yy1YckQxSnNiai1ZVTZEOS1MbFI5Y3FYUmJUd3JrVFZIMWsyTVNreWlnbnY5OFRQQlZ1NDNhU0ZnTzZCNm4wS3k2NXRZZk1Id0t0N2NQcEdkY0U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山形県朝日町 役場付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1HZlgza1ByaHlIbWJHWEtjd29QazJBZUY4WkZESXBzTTJYTXU5c1JZMVVkbld2elhJZWE4amhEWFJNb2g4UzhYaWdCamNzMGdDVVZZSUlHLWhURHRfd3g0LThxWGdzc004QVJmVDczQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山形県山形市 蔵王温泉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWG9Gc0ZfdnVSRUdkZS14UXRNQXZMbGdKUVBVSUszcGF2aVV0RHNHOWxndjZEZGdJWUkyVFl4R0xfUGcxYVNLRzZyNnk4Z0EydjVFSFFRclBnblVyWjUwQnM1V0tqMFFXUm5IX0NocURoNGZZc0lTZzhuM3Jkb0JzRHJ3dkNTTzlMQV9kY0t6THlmMkpJNjZUVk95YkvSAaIBQVVfeXFMTl9xZjBDbERfQ1EyWHBxcGJ5Zl9nT0QydENNSzlteUlkbzJaNUhZdFVVeWRqbUlsVElOTktGclBOM29NRlA2aHBxWEVEMlN0VWNYSUlIMXNTOFZmOW5Dcm9wanRCdG9GMnp6NlpzVm1mcDhURDhEcmd2NllaVnl5QXAzYUY5dDhNdVdCTXJ5WXVEYnBxMk5pRUlpSVo2V2c5Y2J3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山形県川西町 上奥田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTk9KZ3lTekt1akJsSnVUMTU0VUFGQkQ4R251WGN2ZU00M1pjcFdaamFRWEd2ME54cWx3SHdMS0x3YXRRXzBxcjlhUmVfS2RobHh3QlhUWnV6a3BhbGM2M0p6a29jQTBsc1BnVGFONzVldGlJZFR6RlJXMk80N2d0QkFWWlM0WEIzMElRTUVDZUltNEs2bDBxNkJ0VXTSAaIBQVVfeXFMT1pHU0dzdEpmQzFVY01jd3o4bFhVdDNaMzdNd1lGb3hlME83ZERpdGtXYW5wVEZJUnJvYkVTWXBxeFVLRFJySk1ycjRFbjFsajNweDhrNXBqa0pnMldWS1AxazZEeHhsejN3VlZFTGQxOHJub21ZM2o3LVctSVFFaGg4R0RkaUUxN3pQODFpenBONHZIQ2dvRTE4ejVqNm9zUGxR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山形県大蔵村 大字合海の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 福島県北塩原村 桧原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNeDFoYzhKbEtXb1hXWmpVU1d2dHR3R0NQYklKUERIcnlmRXlhVXp1dHlqekU4ZGY0S1JsOTl5SG1jVGpwcUswbng3bExKTTRrUDI2bEVHS2FVYmU4MDY3aFNlUTlESEtGMDY5UEFoS196U2hFbzNVZjJDcVNEdkVDUTRWWk5MdUN1LXk2WE1vN0NDNEZkbFFyU0RDbGZKQnZEOVdCMEkzZ0FIcW5qelVpd0tKZ01RQzlqd01NWmpBWVBiZ3ZJdXVUSU1jRTRDQ2FyLUV3RHJyb244ZFlUdm0xR3ktWG9NYnp2MW9nM0tGYnVGUdIBogFBVV95cUxNRGxkLUF3UVctOTFRS1pEZ2N4azRKZS1LanI4aDRpLVg2Q3VRbXZzalpadGdfRmNuczVkNVRaUGhRVm9RakxwTlFzTXAydmtQVHZzdS1XZnZFV1BsSkZVN2xuai1rNm5NSEtta2VhRUZYZnpiVGctXzQ1c0JHb0xkWXpqLTFGTi1wVTlpUF9WamotM1g2THg4RzNYTmdIVnhlWmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 福島県北塩原村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE01V1pxbFhTY1JwZVBCcFlBa1FTVTNCWGJDdENzU3NJTkE5TFlrWk0xVHRwaUtiUndSamFHeGVNcE1JdHlVYXdQekNzclIyNnpGZUZ1UU5RaXRjV3pFa0RtbkVQZVVRQXlp?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 福島県会津若松市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE01V1pxbFhTY1JwZVBCcFlBa1FTVTNCWGJDdENzU3NJTkE5TFlrWk0xVHRwaUtiUndSamFHeGVNcE1JdHlVYXdQekNzclIyNnpGZUZ1UU5RaXRjV3pFa0RtbkVQZVVRQXlp?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 福島県二本松市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9WbFNNVGdhLVNkVzhiSW8tbDhqbzNPZzR3M3dUQnc5QkpkbUtCTlV1ZVZ0QURRU1Q2dFhQM2lqVTFCQ0Zfa2RkV1o5aFNtd3hzMnV5M3BWQU1MX2hHWk1MRV9aRnFQNElYWFFGVnZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 福島県天栄村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9WbFNNVGdhLVNkVzhiSW8tbDhqbzNPZzR3M3dUQnc5QkpkbUtCTlV1ZVZ0QURRU1Q2dFhQM2lqVTFCQ0Zfa2RkV1o5aFNtd3hzMnV5M3BWQU1MX2hHWk1MRV9aRnFQNElYWFFGVnZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 群馬県長野原町 北軽井沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOUmNNWlllTnNxVTY2ZXB6TUFFR2U3R1BabURieS01d3dYWkxkNTZSVmxhM2lhQUZTakRMR0hpOXdWd1Vrajh0RGlHcFY4V1NDQTRpVjJla29Qa3AwZDdmaDdBaGZXaTZLdmZmMEoxdHAzU3huckd5ODRORFRRN3Z1TnZtR2lsSlBtNjVzLWZmZ1doX1NZcTlHVjVlLS1MTkQzUEhMcUY2OXdRSzB1NE92dUw3UWx5TkNreldoTDBOcHdLbWNsZjZjMC1yTjdsbkJqREk2QmpycDMtb3ZCWUJaMTJURGtoZ0l3cjZHTmxfd3pVUdIBogFBVV95cUxOOEw0SURESUI0WHlvWmFfUlNHVi1xakZIM21XbkZ3VjhELXJ0Wll6S3ctb3F6SjU4elZNRkU0cF9XN2daNG1WbkpQcUxhQ2tyUGs4VlZMZFFzYXBpOVFmay0tQWFHTGN1Mm5FWFNTbGJKOHlqVGI2dE5UMmd3YVdLQUVPNHdiMUNWRHFDV2d3RDVsZkF3S1lsZlVzV3l4MzBVakE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 群馬県長野原町 照月湖付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 群馬県中之条町 折田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMzUzZUtKUEJEYzI1bjUxR3lBNDlRT2dQdEJOanVtQ0Vvbm15b2lKVG13cVY2VkJ4bF90elVoY1g0R2FhYnJOaFJ1M3NlQkRBREM1anRReGlfanNTcFYtbTAxbGJqb2VwWUo2R2JyOHgzNUVvYXBueF9pREdCNFhmX1NBT0VlZGszU1hvTTFTdTMtcnhFY2hwUThudC3SAaIBQVVfeXFMTlhMeHNqLV9hX2g2UE83dk5uLU9lNDZWUlNNd2tpQl9PNDNCR0c2Y29OZnNHZUxDd1dTYVhVUzVHSFV5NGk2Wk4zblNtRDk1SjRXN25JMy1OWDd5V3VuUFF1NFhuT2U2SGF6WDhvZm9FNzRFSWRnM29KX1lEcjFvRTFlUWpJLVUtTDRHVjF6WDhlcnAyNXZQUWpicVNZY0NibjhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 群馬県富岡市 妙義町上高田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVkg5ZGRYVGk4c0tDNGIxb2E0a1dZczl2dGk1WHFKMENnWUhOYW1UOUVhaldwaEpCS0JaQ2pIc2ZEWHhmNzJVX2MwMlFfbFpSc0lZVWFoT3BjaTRlNUVtTzlEVmJyOGJNWkJibzdlbTVuQ0hfN3czSTNEN3JxQjFud3paVWVTOVlkdU5USXZiWU5RVTNYczBJZ2l0ZV_SAaIBQVVfeXFMTktyMGh6SDN4MEVLWHhVSVhWR2JfR3VJT2hIMzNaUUNlSWU3X1dXeVdYYkJSZ1RuVWtjLUJoTzBQblJMMy10Y0RGUEl4UFNFd0FOQXFzY3lEZWpfZ05wNjJPR21kY3NvVTd4bHZkT1FTcFNNQTE5cXBfeVJFaW5yR1Z6bmtZdHZhMlBMSTd1ejd4LWxTNGVjQ0l0Z2FYSGV5OEZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 埼玉県秩父市 大滝の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNXN4SF9Yc180VnVBY05KNW9uWVpFUmdFOXo5NHl0alVMR3kzRFVoTmliQWw5ak9QOGRtNzhreWxmVThnenZQdEotRlJBWjU2eTF6RlNBYUJRS2g3Rjh1TGJoWERNSXdmX2dpaFdsZm9Md0dXWGVoUEQ5akE4dzJMVjV1OEg3M0V2NFF2M0poa25nMUlFOUFMNWJzajTSAaIBQVVfeXFMT3k0VzJyYUkxMHc4MVc1MmlUaW93V2t2M0RsLTYtSG1vUjFSUWFMM0xZLWRYN3FHWnRIU1JxT3Z4TGRHNUhBelo1VmNzNTdhdmFzTWVPcnZUQ2tkZHZqNTVHUmZZNzlod3A3ZXFVWWlUaU5Zakh6NVlyY0NLTHg4S3VNRjA3Wi1nXzBXZzQxMS1TbW1sRm1LOTFYVGZYUXpkZE5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 埼玉県秩父市 秩父市大滝地内（上強石付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 新潟県南魚沼市 住宅や学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1WbjdYNC1sU1V5VVZRQVJVVG5CVDlmc2xzZmtMU1M2OFRLOWZOWi1YZV9UWGhlNk8ta1NicFdZYmdEc1RP?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 新潟県南魚沼市 住宅や宿泊施設付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5PTVdWWjdpWTRiRVcyN1dzMWlRdnF5QVJfeEdXNEJ6Wnl4MDU3cmNHRVo4RkozWjRaeVBWQ3BxcUJpcVBa?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 新潟県関川村 滝原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaGJqOWhhOGdYaDNrbDZIamEtbl9LN3B5ajE0bDVwVFBrbHBieDJKN1FuekZXZS1sSFZGZ3FKWlJkcHluaF96a09COTVkQnA0MkNlSFh1Y01Wb1YtYU4wSDJkVjIzU2tLZ0RDVlVxYmg4WU5UN0NmQkpCRXlES1VqTl9oQmoweC1wOW1tUXlzOVBEX3BjNGVuMVM1VUXSAaIBQVVfeXFMTXNzaTNVdGxJN3ZRNno4RFFKb1pEUU52ajZyTkxzVkZXTGZyNklEZzhyRk5NZjN3b3BpalFXbkdWd3pMbVYwdXdOOTVjbFNCalA2WkVac3E0OGdTOExYS2U4Z1p1eW9HQzM5ZkVKdmNqY2x6YVZ6c3h6bThsdzVFRkFDbllyTk1xTXBDcURwOVR6SE5sVThDS2VyV2RNSlNhOEdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 新潟県妙高市 別荘やペンション付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE85ZHE0U3hnN0tjU3FLejc5c0NHZE8xeUd3bnh2cVlMdHdmVG9GZGFXb1B1NFhqSDB4NmJDS24xY09NOFRD?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 新潟県村上市 桃川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYTlPb1ExTlRXT0hHR0tPVDF4cFlHQWNTVHNSNS1STzlYT2VDVm5ZNGxFRkFjTmxIOUdFUTJEMmJCa0lhVDIxWHNVRDU1eEkzQTJWWWd1UTdyX3dmbGk5emR3RWttTFZWVktBLXFJNGRXTFMyVjBqYTJIcFBOZU5FT3JGMnhvR1FGeUhaSFhGOGl1elRnS3NxeFpTcXHSAaIBQVVfeXFMTnZLeHZydGphcXdyVGZMZzU4QWpCSDRMeGxYdGoxUjN0ZWVxSkItbUtLNUgxQVFBdF9Vak05akY5OXNrNk83SnQxYWxyeVJ6OEotSnpoSXFseVpNOWVEZ2tGUWZmdm56QTd6aHl1SFRPYU5Nc2dQTDY3anlTTmlfNGhwOG9NY2dWeTE0YWJfNlJEQUpaYVV5R3pRZ080NUxqOWJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 長野県軽井沢町 追分の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWE1nckdPVl9qazQtenJJVy1iUFdRNTQxU2xHdFYtNmxxcEtQU1lnQ2lxZVZCeFk4ZnRfREFZU1piZjFuQm14alZ5OTZYVGVVYmlLTHN6TjBvSHktNGlTSm1obzNsSnhFajE3Mlo2ZzVxN25yamZXZ3ZWSmVDcTlYWFRuQktGdTBBS0J0eDlTbjFLcmtsZGlXaXJjYU94VERSemtXaGNfSEpsWklTRndnWm5LOXVEMlNiR2JQeDVCMGJjX0kwVGtzWXpBUFRJbFVpY01SYWJlUlFvUVQwZ0tKQWVnV2JHLVV0N2hxSkZDU3BzQdIBogFBVV95cUxPTTZLRXJfVjhqSUo1ZzBzb1hxQ0c2TDJScm5EMWxUNVNnWlQybEhNcDliODVkWVQ2RVpmT1FlTFNYc2o0dm1EUkZ2RlBfQ1l5Nm1aT2VxcUcxa0wySUd0VDU3ZjRkTy13RHZfLTZ1RmwzdnBURUlJWWlYdDY4VGJXQjNIQk1ULTF0SnhnRTVRTnBRWFdZbHNneVVXTkFYMWdGSEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 長野県軽井沢町 軽井沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPSkgxWkdEYVRhTWZTZndUOXRwdDlfQUlyQmlpcnJzM1Vvc1JJbzdBWXF4RzNhbUplNlVQdFQ3d2x0XzVTQU03MDU4N25nQlJ3V0h4WlNDaHBxb2lqOS14d0kxQWpzN3hmc2VfS21lQ0tIdHdSamEta0xtb2ZHX3pWSEtlZDlHSDh0NExaZGhCRHU2eEdIUzRGaWwwX0tmSVdjTU1odkZNQjltUUlxRDNR0gGiAUFVX3lxTFB5b3oyR0ctVzJYb2xLWlZsYVpBRVdMem5fdTFsNDBoTllUUGh0OUU0di1qbW1UdlgtWEJVeS1NYUpYdThsQzRjam1FTVRlOHc0X1hjQWZTb0pXUXZjSDBpMEplQzJGUnZxeWt5WGl6blItU3hGaEYtNk1EOU5QbmRjektJQ0tZM1NpZjlJUmdwU2pRMF9iZEdKQ3VBMjhqajhCUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 長野県大町市 社の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNODlvYVQtOGZTR2JTdTI2TlRvYzhLREFoRVFvamVPZGxONmFuZ2UwQnRJZ3BGdmhvaV9NTkZsVW11X01xX2ZrN0EwMnB2V2pBWnJyZHlGTnhXN21vRHkzdnl3T0RDVDZnbmQxZ3FVTTl0WFdZR3dTYjNyOFRXeWlWME51bktPTEJ5am55d3hiajBsOFJQQkJyM2dkV1RlR2JpaGlJbjJ6RHFxMV9PME0yX2k5SkJZRE1TOGJUZFJ3X0tDV2ZNOW9ma2JrOWZyOXJDcDVkRDdIMWxsQXJXdnRsYmtaMGVIblhMQk5YdVc1NnRBd9IBogFBVV95cUxNeDNWb2ktTnlnTFJvNGhmM2hseDhBRGxzaHJFbzhKX3VtTGdyTFQ2eTJoTTdVQXQwQnF6NTVWM2EzbC1xaDFCVXZMTy14M1pwaEdKVjRlbTQ4UFNKS2ZxMUFPVnNCczI2S0Q4ZE9zaDRmRWZMdXRzajZhTjJOcHdCbnQ3MlhWc2twUVUxaWtPWWhEbGM4YzNDdmpMMUNKd1ZlNmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 長野県坂城町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 長野県軽井沢町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 石川県能美市 能美市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBqSTBXd051NmZwYklPcDVMbmF2X2ZiT1VoWkFGeVNvTm9OeDBsTTZlVjYtTEZhQm5ybFJtWURHTUpsQ1p0NEVPSVdia05HQjQtbDFIWjRwS1Z4Qm9JbEhreVNSX1VEWUNMMGYyZmhQb1dTSl9KcmhQMEhZMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 石川県能美市 住宅地近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBqSTBXd051NmZwYklPcDVMbmF2X2ZiT1VoWkFGeVNvTm9OeDBsTTZlVjYtTEZhQm5ybFJtWURHTUpsQ1p0NEVPSVdia05HQjQtbDFIWjRwS1Z4Qm9JbEhreVNSX1VEWUNMMGYyZmhQb1dTSl9KcmhQMEhZMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 石川県能美市 能美市住宅地近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5hTE9vNktWQlhvREF3OVVnYm03bmNFWGJ1T3Vvak4wV19rNnVER1NBbzM2M1Vlc1I5MEFsb19xZElQWlN3TW9PTkpYTkk4TFZXQlVIWTR3dWYyY2NxSTFBMVRIVHloLW9KMEltTXZxM3V0UjdkQlJEV0t5UHE3UUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 石川県能美市 松が岡五丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 石川県能美市 松が岡地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 富山県富山市 八尾町布谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ0hPaWVLQVh4QkpBQlQ5Q3ota2Rtc1A0ZVJ4WjY3MzBWVzZIUjVqX2FHckFKVXl0U3hSWXl2X252ZWg5SnlJZXNPU25OdVNxai1rWmNFZzh4MGw3RHl5VGxxYnpqRzhSbk44eFQtRThlek83NlJnSHRkdm1zaEpLSVJua0NSOHRrbWJnRVZsVHZrbFNsdm5lQ0podzfSAaIBQVVfeXFMTkdDemVQZ0l5bHdzRHRNeFVKQmIwaWk2LWtjVExFMThaaEx3ZzU2aGZMbVVkTnRpb3YtRm1waF9KSGo1XzRLVFdlV0UxSGpza3Z1SVpZY2lhMmEwOFNQRkFtNGJwUldpaU1BQkFXaGwza2ZiMXlOSjB0YUtILWFPa2lpZVduOHI5R25LSGxwVGRUdlptRS0xVWZDdkw2akZObjd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山梨県小菅村 橋立地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 山梨県南アルプス市 芦安安通地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 岐阜県高山市 高山市高根町日和田の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 岐阜県高山市 高根町日和田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbGFHMVVQTXFaZlpPYUdfM2o1NGtUU1dWeDl3bmRnRmRuU2JKNDhDekNDZWJSV1ZxbmF0RjM1eUpJSGp1TEE0bWR2WU94dUlIYllCOUFXekRUTXFzcE9rNU1BMlZXY0hYSUJtMHdGem4tSjREeF9DVkd4dkpRMi04c0pVV1BSc3FCUVlxbV9RbWFZZ1NUeE9mZnRnREHSAaIBQVVfeXFMTzVtcVg1WWI1N3N2M1ZIUGdYMm9hUDBYU0VtWkFqTmZWaXB1WEstRzBBMkE2cExYNFRMYnR0eXIwWnRsMFhibHdRZzNMb2x2WlpRVkZLMXZMamJOSDhoRmRjOXBZTTJ6Rk9VTS01eUM3N05falAzZzNPSm9ld2t3ZHNzV1AzTGYyQWRQTjBNSXZyZUVVRGNkN2NNT18wZEhXdC13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岐阜県高山市 丹生川町日面の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZlFPOGFVZFRhRmdIamNSXy1tQ3Bna0RGcDdFZzhYdUVUM1RXS1p2YmVOS0ZaeGZIaXh5cTVtdTVkM3FPOEVLcThua3c2Mkdzc2JobkphLS1uSkw3dVRtNXphQjhjZmVfenBKcDVVdVk4eU9WSVpyNzFGbmc3QjlZUk1qS0gtcVRWcUxSaFUtVU5oUnBsQ0Zhd0RYZUHSAaIBQVVfeXFMTlQzVXozT1d3bVpNaS1ld0ZLUkV6NnowZmhlbkZUNlRuS3Y1NFRaaG9LQzhVTUhRNW45RVFhNFZ3S0w3OXJ0VTQ1M1BWVlhFdWtFRTBZd0hqU05SNHI5SWRVYWFnNXFpM3dRenZVYXYyNlN5T0RPZTNzb3ROdWRYX1hpWEpyNEhvSV9WS3FYa1JJZ3k3Zmd3U2NtTnpBNXlwdFV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岐阜県高山市 高山市丹生川日面の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 静岡県熱海市 伊豆山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSWtDcE9hVnVseHdKMWRoOF9YM0txTHJSb0VjbUxGNk5sYWx2dU00YVB1Q1ZPdHBaVzU1QVAyWUJ5TTNjNTdjTUJRZ0xLZlMyTDlNMm5kczA0c3FiRzBHaG8ybGtMeUNtWFEzRmxXaFdXbDNOR0g2V1REUlVvRm5Bd1JCcTQ1TjNXcXlmX0FENlVwR0tSa3pIbUlzZm7SAaIBQVVfeXFMTkNiOEJadmtobjFSNzRfM0g1ZnRWRGtlX1YtM1RlUmlJMWJZaTRTdjduczNiaTdXVGVPNEV4bFJnRHRzaVg3Q0xpTnc1S3cyd1ZkdWFMWlRMTEE5V1dISktVS1kxWFh2WE1OUmlVTzNwZVc2d2l3VGtHR2xsQ1Rmc2lxQjhtVFkwS2ZKa1hrTnd1X3RETDF6SEJBeHQ4OGxHWll3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 静岡県熱海市 岩戸山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE84T1prWFIzY0RFY1RWQ2d0VnZDdmFnajdFejh6MDBBdE9uYzZ5TGtGYmJNSHk2WmZLQ2sxMmVZRlViYldMajhBUWd0dkZxdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 兵庫県養父市 八鹿町岩崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbVlRbHQwWjVGVkZUTC10bEdtdkRGajJfLUtDNFZ4eWJCZ195WkMwVHJya25TbUd6Wk1xeV9EanZSMl9URkdwU0hsZ3hkVlN3azFGN21aUy1SMUFKb0Qzdl9BT29DbE93aW5oeUdhSWRKRzZaTGtWUENMOFlmZDg5YWsxQ190c3FQSEZoU3VlOTRFdmY0Tk11WXRZYk7SAaIBQVVfeXFMT0p1WmVHTktZNUNYWjZtX2UxOEZLU0pHX3E3bVdtRWV3eUdWV2dwUnFWQ2Y4SWxQbUpxRUpnZVFFSTE5WGN6WnVHVlE5cGZlRzF5YjVIY0ZqbDVaMWVyRjNXQUt2Y0RpSktURmtmVG5Ja0VUQzNERGFKNmhoeXdMdlVZcXNMeWl2LV9kSzYtVWJnSEpIUVJ2Xzc0elQ3TjZ4MmNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 和歌山県高野町 高野山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPZHVNY3BVQlo4OGNtYkpua1E4T2lBc0xaNEZiMXVXZDdDTGdpSWFLd3VLSUc0T0ozVjZQVTFBZGx2ampYUVRsSFI0NFM0cXZOZmpGR2ZRMHItR0FjS2t3YnZLQk1hUUJvSUYwQWZlNHlzaDZ6TDlNU3JUdlZDYXRERDRZS3lFMFJGcW4zTW14Xy1hTWFXWE5NR1NjQmFtWFQ5blo1Mm05bUpfN0dTaWR0SF8weXkxSWxfaDBHUjBELVBjaW93b3dWOXpZd0pPMmJtcUlWZVFfQUhEbHlkZ1dwRzBNRXYwUFdPakxvOW9IYkhjd9IBogFBVV95cUxNdnVQcERqNTNmWmJ6aFU0Q1RmaFVRMWt3VkdVak95M1VWaS1BQnJCNUZDTUF4bFM5eFh1N2JJMkdXNWFOYTd6cDR1VHFIOTJmWHJMd3Z2QmEzYXdTUjVYa0hUNm5ncUxRYTZMRi0wRWh2T2pvc0drcE54YldrdDVXaWtXLWNpdTdDNmRuS0lnSzMxQ3lDU1AtdWRPbHp6RHFITlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 京都府綾部市 小呂町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZXpjRHE1SVR4UExHWEpVS296ZmVuOTBIaWdzSVhsWTBNWWlxWlhWZVlVbFZYOXdsTlpWM0xLcF9DT1dwY0k0RllkVTM3cUhBTEZvMlJ5RkRuQlVaUlVILUhoN3BqbU5TSXdJOWpmU1pvQkZsMW8xVXZyZEpJMTBhNUowdG5KTGg3dWMzbGY2aTNZNURUTm11LTFvamvSAaIBQVVfeXFMUDkwOGVQal82Z2prR1NiUHZIaTU5RGRwUjZXZ3UwRW5MbGdpRjhqcGdMVU5rX2JSdGFENFhrNXRTamVLdHZqVDlRZmlKS0lQU1pWc0RFNnlpdVVITElIb3pNdVdqZXpfUDQ4aTI1R1ZLMURXNmFoeHB3cTZab1NQSWhlcU5UeXNpdlFvMWFmd2R5c2hGdGdCOGtLcEZ6VjM2b2l3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 京都府綾部市 下八田町峠田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOTk82R1MxSGpBQTZ3a2VabmRVYWVNanZINmJCY25UR2huNTRqaVJCbkczNXp2NHRSNUFXV0xrN3lkTmdxdTBvSkhUVGltSTg3N3FzaEJvclY1Nk9pTzFXTHVxcngtZkRnTEIwek1xcEVZY19MY29WcHU1RHloMS1lQTJrNHdOc25LQTRHT211MGk5NjUxdVR5TTN3dHRYSEFWSlJXMm4waldnU2hVUWtz0gGiAUFVX3lxTE1FTWxRT3JtS0xDTFNnYTRScDZ5d2NJSURsQVo3dmI5bTFnUl9vTHEzY0tYYjN1dlVLeDFObTk5OXl3bHpfd2FYUXoyWEVsNmExY2p5RzNVdF8ybERyeFVpaWpJcUZocDVra3J0NWFMZVEyYzNWQlNqN1dnZy11cFF6Nks4VGtJSUFYemZHZ05BMWRxeGRDQ05MaElzYjJRTUdPdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 京都府綾部市 上八田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOUHJkcDV6MkR1WkstZ08yZE1UZnlXYkkyckcyX0puNWxoeXZLOTM5MVJkdUF1N1VST1ZSdXF4THFvYWdoWS03Rm5UcVk2WWZyNFR3b2dlQUxENnY3RlEzd2NCVmprWlFzZ2oyWmRpYU5aQ1VGaFlqUmZBRlBVMXFzRm1FeVNjZFhSM3VMU2pqUjJmTF9HS1dtRU9VV0NKdXR4cERPVTlld1JySXdSeEc40gGiAUFVX3lxTE55NTBkRGlmSjBNUkwwQ3NWVjNFWXpOaVlGdzY3TlVkMDBHeGN2WWdKRUJxdlpxVXJ1Rm56WFhKcDU2MnpqVWNCeVRNU1ItbUhpVUJraUQ0RnUxR1hYM1lzajcwaWtKeGZPMHVHR19ya0k2ZVFxX3c2V2RVTE44bGh1Y2VEb3U0dXFBX2gxenkxTW56ZWkzRGdId0NQLTFOZjRyZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 京都府南丹市 美山町上平屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcXZyN0ZzSmVpZml0bGpFcEJaQ3JzaTVpeFUxbnZ6UVQzRm9KZmhSdVNMczBmSHdRTkFvWWxlcWJfWEhNX1Q3bmlvT2xBdjVCV194VUNoNVdJYU9RdTd2Zi1LOTJSTEtuM1dSUFpSVkFvQVFFdGh2RHNUVzctQ1RjeTlWalFHRGQwd1l0Z0NrQWJJRWlURmtKMEwxMmfSAaIBQVVfeXFMTVNCU2l4Z09xVFBYOGFTTEUyYi1rdDl5Si1uUldoUFZDcnhseEVvX0dweHpXYlgzelJPMU9TVmRPeDNxci1nd0QydVBkY3RUaU1zeVBlT3pMamhXdjd6NGJjd1ZwT1BLZFJnVDBINnhTYkw1RlY1dmhzUWZ6Y1VNa3d2LXo2dy01UWR3LTZlQzFiNlR6RDIzUWJOZ1JDa0pSWXVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 大阪府豊能町 新光風台3丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 島根県浜田市 三隅町三隅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNUFpCeExLSV94dmdKR1dGc21weVNOczZ0Ty1lZlFLTXpuQ21aZVBQMEtkNmFpdVNjWm83eHVJaXdmTzg5ejBXRjAydFpIOHpUQUpDSFhFa3U3WnhJTUdsRTlVcUdkbkNpVFZNeEg2UVFsVzY0ZEJhbXNKckpCRHQwRkRUa1lHenVVcUVPOUNXNnZKMVpOZUs5eFp2U0tkbDZ1Wk5SajVxZDhVYWdFZFRVY25QaVU5N2NJR201bnlyQy1kVzJGY3ZaX0JrSWtDMFdBbm9HT0pIbGxZcVJEQl8yTHVvdGxOS0t5bGFmb05uRVFQUdIBogFBVV95cUxOcmo3c3ZGTmh1ZktJWkpRYWd1T2d0TTh1NEVQbHRUanhOUHpiMVNTakJrWVpyN0lJOUx2ajdEczFRR1E4a01DcGtoUHNHSDFwN2Q4MDd6bThTWFh5Rm5YdEJQTmN5U21Cb296NUVQeGFsZFVRRFJKbWsyeEZTN2ZGODlzLTU4NW5TdkljRmxsSGlHRUFRQnZnZ2s0VFZwckNybHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 島根県浜田市 浜田市三隅町三隅のJA葬祭センター付近の国道9号沿いの出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 島根県浜田市 三隅町西河内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWVpUdG1uOXhXQlRQS28zVGZyUF9Td21Cd3lESmhzVVJwRUFRdk1pam5lV3hhckNNelIzZUF4ZVM3LS1jcEVBcVZLclllSUJMYXJfeHp4WlJmSS1ER1NzUUxQZWp0YU9zR3oyOFAyWjlQVEhnQTBUdTRrWTZmUW15ZFRReUc0OEJWZ1hISmVMUG5oWVVKUVZPQWNHNm1MNzhQNGsxZnR0blNFTHN0RGZPZGdHQnBVbF8tZWt4X1M1ZWJIaXlrbURkUUdXX3pzaDlBRmxTVTVoT2VJc1NfVWd1OS0wRXBvRTg0U0lfR2RaX2RvZ9IBogFBVV95cUxOSWlxd1NhV28xQ29HYWgydzJ6Zk1jeTQzWVNMNkIzTlVyVDh5bnJ0YVd3LTQzRkxCTnFIdExWbjF6Y3R1MktNMGpiQUlEQURlNEVGQS1DRDdIUjBJVnlXTzhfVFppWjFCQTB3RzVZWDVPUUs0V1BoQTJ6UlZrSHktZ1o2ZGI0eWN0RkZ0c1RjbUFTRFZHQUxRZjdaZXNZSGNOeWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 島根県浜田市 浜田市三隅町西河内の晴海台集落から福浦集落につながる道路の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 岡山県鏡野町 鏡野町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9tbExqMVJ1MnZ4OUV5Rld3Nk5NTGRsRjhGS0JRY0hVZkZud3doSjZ4enM0c21DMU1NVXN5d2NlVGowX2JvZElzWVJBbUtpOURzM0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 岡山県勝央町 田井の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月5日 山口県宇部市 市道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5GNjlCdEtienRjcC11anUtSUZWeWxVeDJlUHVYbFdFbVYxWkc2QTFYaXpnQnlldWY3UG1Wb3piVjIyZHlYc3FrdmE3QjFYQ2Z0bmdOdWo1aXdoTGtMNU9FZ0U2UFR5Ump0dW1NS0tR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山口県宇部市 宇部市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9IWm5RcG1fRW9Ja2tXMTlUdXgycm1QRzBNRnJtRlBmekE0THhnelh2Vkh2dk1ENDNkUVFKY1hVSjBJTERYQmtObjBiMHFvYWdKaXFCSjVjdWNKdl9hRjNZM05KYw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月5日 山口県宇部市 大字東岐波の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":28},{"pref":"青森県","count":20},{"pref":"秋田県","count":19},{"pref":"新潟県","count":17},{"pref":"岩手県","count":16},{"pref":"宮城県","count":16},{"pref":"長野県","count":9},{"pref":"群馬県","count":8},{"pref":"山形県","count":8},{"pref":"福島県","count":6},{"pref":"石川県","count":5},{"pref":"島根県","count":4},{"pref":"岐阜県","count":4},{"pref":"京都府","count":4},{"pref":"山口県","count":3},{"pref":"埼玉県","count":2},{"pref":"山梨県","count":2},{"pref":"静岡県","count":2},{"pref":"岡山県","count":2},{"pref":"富山県","count":1},{"pref":"大阪府","count":1},{"pref":"兵庫県","count":1},{"pref":"和歌山県","count":1}];

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
        <span>対象期間: 2026年7月5日</span>
        <span>·</span>
        <span>公開: 2026-07-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={179}
        periodLabel={"2026年7月5日"}
      />

      <h2>主要事案の分析：人身被害・住居侵入・都市生活圏への接近</h2>
      <p>本日確認された事案の中で最も重大なものは、秋田県由利本荘市における人身被害である。山林において山菜採りをしていた83歳の男性がクマに襲われ負傷した（※1）。由利本荘市では山菜採り中の男性が襲われてけがを負った事案（※2）、鳥海町で80代男性がクマに襲われけがをした事案（※3）がそれぞれ記録されており、山林内での活動中にクマと遭遇し人身被害に至るリスクが現実化している。</p>
      <p>人身被害に加えて、人間活動空間への直接的な侵入や生活基盤の近傍での出没も複数報告されている。岩手県雫石町では、クマが住宅内に侵入し漬物などを食べるという事案が発生した（※4）。これは人間の生活圏内の食物資源がクマの誘引要因となっていることを示している。また、宮城県仙台市宮城野区においては、苦竹駅近くの河川敷でクマの出没が相次いだほか（※5・6・7）、同区内の住宅街でも目撃が相次いで記録された（※8・9）。駅周辺や住宅密集地といった都市的空間への接近は、住民への突発的な遭遇事故の危険性を高める。</p>
      <p>公共施設や観光資源への影響としては、群馬県下仁田町においてクマの出没に伴い荒船風穴が臨時休園措置をとる事態が発生した（※10）。さらに捕獲事例としては、北海道足寄町において被害発生と同時に1頭の捕獲が行われ（※11）、今金町においても捕獲が記録されている（※12）。</p>
      <h2>都道府県別出没状況の集計</h2>
      <p>2026年7月5日の総件数は179件である。上位10道県における報告件数は以下の通りであり、北日本および東日本を中心に広範囲で多数の事案が確認されている。</p>
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
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">28件</td><td className="px-3 py-2 text-xs">足寄町、今金町、名寄市、弟子屈町、乙部町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">20件</td><td className="px-3 py-2 text-xs">弘前市、十和田市、青森市、西目屋村など</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">19件</td><td className="px-3 py-2 text-xs">由利本荘市（人身被害）、大館市、小坂町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">17件</td><td className="px-3 py-2 text-xs">南魚沼市、関川村、妙高市、村上市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">16件</td><td className="px-3 py-2 text-xs">雫石町（住宅侵入）、盛岡市、宮古市、大槌町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">16件</td><td className="px-3 py-2 text-xs">仙台市宮城野区（河川敷・住宅街）など</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">軽井沢町、大町市、坂城町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">長野原町、中之条町、下仁田町、富岡市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">米沢市、朝日町、山形市、川西町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">北塩原村、会津若松市、二本松市、天栄村など</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では本日最多となる28件の事案が集計されている。足寄町では被害発生と同時に1頭が捕獲されたほか（※11）、今金町でも捕獲が記録されている（※12）。また名寄市では車から6メートルの至近距離に1頭が立っている姿が確認された（※13）。このほか弟子屈町摩周1丁目（※14）や乙部町豊浜（※15）など、市街地周縁や集落近傍での出没が継続している。</p>
      <h3>東北地方</h3>
      <p>東北地方は各県で極めて高い出没頻度を示している。青森県（20件）では、弘前市小沢字井沢付近のアップルロード上で体長50から60センチメートルほどの子クマ1頭が林から出てくる様子が14時25分に目撃され（※16）、同市小沢井沢でも出没が確認された（※17）。十和田市伝法寺大窪（※18）、西目屋村川原平（※19）での目撃のほか、青森市原別では出没痕跡が発見されている（※20）。</p>
      <p>秋田県（19件）では由利本荘市での人身負傷事案（※1・2・3）に加え、大館市長走陣場（※21）や小坂町小坂沢（※22）での出没がみられた。岩手県（16件）では盛岡市上米内で付近に小学校がある地点での1頭の目撃（※23）や雫石町での住宅内採食事案（※4）のほか、宮古市日立浜町（※24）、大槌町小鎚第18地割（※25）、岩手町五日市第10地割（※26）で出没があった。宮城県（16件）では仙台市宮城野区の苦竹駅近くの河川敷および住宅街で相次ぐ目撃が集中している（※5・6・7・8・9）。</p>
      <p>山形県（8件）では米沢市内で目撃が相次いだほか（※27）、朝日町役場付近（※28）、山形市蔵王温泉（※29）、川西町上奥田（※30）、大蔵村大字合海（※31）で記録された。福島県（6件）では北塩原村桧原（※32）や北塩原村（※33）、会津若松市（※34）、二本松市（※35）、天栄村（※36）で目撃情報が報告されている。</p>
      <h3>関東地方</h3>
      <p>群馬県（8件）では下仁田町の荒船風穴がクマ出没により臨時休園となった（※10）。また長野原町北軽井沢での出没（※37）や長野原町照月湖付近での木に登っているクマの確認（※38）、中之条町折田（※39）、富岡市妙義町上高田（※40）での出没が報告されている。埼玉県では秩父市大滝（※41）および同市大滝地内の上強石付近で地元住民による目撃があった（※42）。</p>
      <h3>中部地方</h3>
      <p>新潟県（17件）では南魚沼市の住宅や学校付近（※43）、住宅や宿泊施設付近（※44）で目撃されたほか、関川村滝原（※45）、妙高市の別荘やペンション付近（※46）、村上市桃川（※47）で出没している。長野県（9件）では軽井沢町追分（※48）、軽井沢（※49）、大町市社（※50）で出没したほか、坂城町の里地で成獣が確認され（※51）、軽井沢町林内では17時30分頃に成獣がバルコニーの階段に昇りかけて逃避する事案が発生した（※52）。</p>
      <p>石川県能美市では住宅地近くで体長1メートルのクマを含む出没が複数報告され（※53・54・55）、松が岡5丁目バスロータリー付近でのクマらしき動物1頭の目撃（※56）や松が岡地内での事案（※57）があった。富山県富山市八尾町布谷では痕跡が発見された（※58）。山梨県では小菅村橋立地内の養魚場内での目撃（※59）、南アルプス市芦安安通地内の瀬戸大橋付近道路上での1頭の目撃があった（※60）。岐阜県高山市では高根町日和田の住宅地で18時から19時頃の事案（※61・62）、丹生川町日面の道路上で14時から15時頃の事案（※63・64）が記録された。静岡県熱海市では伊豆山（※65）や岩戸山（※66）での出没情報がみられた。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では兵庫県養父市八鹿町岩崎（※67）、和歌山県高野町高野山（※68）で出没が記録された。京都府では綾部市小呂町（※69）、下八田町峠田（※70）、上八田町（※71）、南丹市美山町上平屋（※72）で出没がみられた。大阪府豊能町新光風台3丁目では道路を横断する個体が目撃されている（※73）。</p>
      <h3>中国地方</h3>
      <p>島根県浜田市では三隅町三隅のJA葬祭センター付近国道9号沿いで午前8時10分頃に幼獣1頭が目撃され（※74・75）、三隅町西河内の集落間道路でも午前10時40分頃に幼獣1頭が目撃された（※76・77）。岡山県では鏡野町でツキノワグマ成獣とみられる目撃情報（※78）、勝央町田井での記録がある（※79）。山口県宇部市では市道で車の前を横切るクマ2頭が目撃され（※80）、2キロ先でも2頭が目撃されたほか（※81）、大字東岐波で道路を横断するクマらしき動物が確認されている（※82）。</p>
      <h3>四国・九州地方</h3>
      <p>本日の集計データにおいて、四国地方および九州地方におけるクマの出没事案は記録されていない。</p>
      <h2>リスク評価：季節要因・餌資源・人口圏接近度</h2>
      <p>本日の分析データから抽出されるリスク評価は以下の通りである。</p>
      <ul>
        <li>季節要因と行動圏拡大：7月上旬の時期特性として、山林での人間活動（山菜採り等）と野生動物の活動空間が重複しやすく、秋田県由利本荘市における人身被害事案のように直接的な接触事故につながる危険性が高い（※1・2・3）。</li>
        <li>餌資源と誘引物の管理：岩手県雫石町において住宅内に侵入したクマが漬物などを採食する事案が確認された（※4）。また山梨県小菅村では養魚場内への侵入・目撃が発生しており（※59）、人間の生活圏内に存在する貯蔵食品や管理水産資源が強力な誘引物質として機能している。</li>
        <li>人口圏・生活基盤への接近：宮城県仙台市宮城野区の駅近傍河川敷や住宅密集地（※5・6・8）、石川県能美市のバスロータリーや住宅地付近（※53・54・56）、新潟県南魚沼市の学校や宿泊施設付近（※43・44）など、日常的に人間が利用する空間への浸入が多数確認されている。さらに長野県軽井沢町では建物のバルコニー階段に昇りかける事案も発生しており（※52）、建造物至近での偶発的遭遇に対する継続的な警戒が求められる。</li>
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
          <dd>2026年7月5日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-06</dd>
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
