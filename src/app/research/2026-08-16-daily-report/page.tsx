// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月16日 / mode: daily-report / 生成日: 2026-08-17
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-16-daily-report";
const TITLE = "2026年8月16日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月16日、国内で報告されたクマの出没事案は76件に達し、特に北海道で26件と多発した。岐阜県ではランニング中の男性が襲われる人身被害が発生したほか、京都府の観光地・天橋立での捕獲や宮城県の小学校付近での目撃など、人の生活圏への接近が顕著に見られた。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-17",
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
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
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
      "title": "岐阜県池田町の林道でランニング中の70代男性が襲われけが",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNSzc2dDBuY3l4a1haOEZ5LS1KVmlPYnpTRjNzTmVsVU5QUEU0MWFGbGRtaHMydmRJWDMzampBRnZDUlE1R2RRZGFCeWRFOHRTTkM2Z2p2a3IwTDVFNWduZHZvNE8wYWREaGFsMzd2LWZ3dVUtdUpQZXVVUjZLeFc2eDFJVjJfRVXSAYwBQVVfeXFMT1BSRnpjV2FIS1VzdGI2WHVRYjE3bURjc3dTMmFEN1dBNndrWU4yYms3cWJqRzVVXzhpOGlmclh2YmFZR1A1Sllxa3ZYUFRHZGJfNFpqSDZ2TWZlQmJqQVp1M3h3VEtQekFvcUpLU0Q4NDQ5N1J3M1ZXQ05DVXdfTVJZcE1nTzF3dng5d2U?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県池田町の林道でランニング中の男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBSaHVqZVpmemtGUnp0Z1phT0QxeHZJUV90bTgxUW5FMi14T0x2MTlBX28wbjhUTmkxY2hkNXlRWTFnTUxEYWN2ZGxwS1BENmFrbVZqSE91V2tCdDZEbGJoR2wxOGV4T1E5NkpqbmRHRlJnQTVNS3AtUzliYnlkbjQ?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県池田町内でランニング中の男性がクマに襲われ軽傷",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9BMDVtZk0wd1lvNlZfNnAwSHpCWS05V2dWMlltb1JaeXBRYldzdnNtTThMSmNTcjJhRlFDOC1rdjFSczBFbG9TdEIxSTVwRXEzdnhQUnRoUGhqM3pvR2txUVpVb2QtZ1RMUi0yZkNtbw?oc=5",
      "site": "news"
    },
    {
      "title": "京都府宮津市の天橋立付近にクマ、麻酔銃で捕獲",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQTEhxR2Ezd1VhQnlXX1R6YmRmOTlVV3Z4WFIxMkhicHczVUdRYWw4SldTSDBTY2ZrMXc0MlJBdkZhZHEwMzd6WlFNd0Fod25aNUlocGZvdlh2RkpRT1lEZjR5WmpRRW1ISmsxMlVvWFpqY1ZDN3UyeE5zVnVNekZhRWxjMlhPeFhEYjVaTTB4aTNFZmt1bzhtRjRvSWJHZEdUSW1kam5ra0tTTVNMV2JKN3VB?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県美里町の小学校そばでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1mZFpfdkltQkJ3VXo2TkpGSDl2NHBKU2x2QkNXdTIxUlh4Nzk5YVhhbnNJMFRoVXhBaVQzdVAtQkpzZ3NxYUZ2eEpPLWlBU2RkT2ZELW5tMUp1M29qSU9fcTJLVEk4QUp6ZVo5WXRaUWhlTmNJODcwMThLTUJRdHc?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県美里町の小学校付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9iMVJqR2IxTHNDdzZWZUF6LXhEcVg3Mll1a1BfOWZJcVVZMUFCU3c5eWMwZ1dTSlNrSEJxV045N0l1aUgzeTMwSEN3WkNIUElaZU5EQkF0c0hFQmtOOHhRbHFTQUNVWVFkYlFCbnFBQVZheTM3MHFzNjJJRmFqeUE?oc=5",
      "site": "news"
    },
    {
      "title": "長野県箕輪町の民家の庭で熊目撃、巣箱壊される",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1nbnYwcmFpYW5ZN0R2LW9CLXMzLV9XVUNkV2xKNVJwamt3RFJPWWIwVDYyc1hycGxOcmpPS0JMdEYxU2VvRXFfMDN0MEtrbmVoWmVsUllqSG55SjhDLWZVZXByc21FWkZNOFZ0QXFfbUc?oc=5",
      "site": "news"
    },
    {
      "title": "北海道遠軽町の自動車専用道路で親子グマ2頭と衝突",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5XaWVsQ2N4WVh1ZEdqbVdfdEVoZHJqQWRKQmxKblVsaVZVbzUyZE1yeXNqdXpCTFhObUNsMXh3Sm5uVkRNX0RzMDBiX2RabHFCZ2M2U1huRVE2RlY1MVo2eTVUMmpWb0E1N1dtTzNwTzF2bkFocDRlSTl0cUxGWG8?oc=5",
      "site": "news"
    },
    {
      "title": "北海道遠軽町の旭川紋別自動車道でクマ2頭と衝突",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE15RG1qY3o3NEpXMFpZaVhwRjZHWXh4bFJnMU95NE9mRVBoMmM1a1ZnZk01ZFF6d0VxNmcyNGJnVEVzOFlCZDFHREJOcWN3RGdjbkhoV1pDQmJkcDdHV3cyUW9iUkM0bms?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県大崎市岩出山通丁でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWURscDB5WXFZREsyRTEycmNmejlfcTk0RU5QakFqTUxPbzh2YUtTV19zUTJlLVRpRHJhSlc0aGdZTm9wMjhFV0l5Z2pGZWg3UFd0SmV5NnV1cy13YWd4dzJZOFJnRFlURFppMWhQVjZud3hEY1RCekFoSzdCY1BZNkh2ck80VGhKdmpoc3dyaWhrU0tSVnNVallsZ2PSAaIBQVVfeXFMT1hyZUFMd2lHVFJUNTFleG5wRHdYVld2cWwycFlxc3FrbUZEVmR1ZHVLSEJHZWV6R0JwWXdjN2lrLWlRbGR3QkVrVS1SNmxzZ1ZZMTVmU0szcmp1U05EZ2ptcEJkcGFDMy1qREFzTjE5TFRXbjZSNWZMREUwX2R0STQ1YzRhMG1aVVJRcUZBVEV0bzJLTmZ0bnpHX2lwLXJZaEF3?oc=5",
      "site": "news"
    },
    {
      "title": "福島県柳津町の国道400号線でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5aaGc3NTZ4RUxDRTNkTmtIRnRmWlJYQ3J2ajJCZTVwQWtiNGY0VnlKRzU4aF94aWQ4b1k5Zms3eWZENS1HalhITG9WeTZUZi1DYS1LMjZIUjVteUVxUmx4bmNrV3p6YUhPLS1uYXhicDBvcklnWjFrZ08yTkVJeFk?oc=5",
      "site": "news"
    },
    {
      "title": "福島県柳津町飯谷中平でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPU3ZMVkVBN2hqc3NmcGdsc0pBZ1dJSEpwdkU0Y1BMMFV2ZDlLNndaTmRreUxsT1J6aER0ODRvd1hfT0pNenY4U0MxRXJsZlpnN0ZHTHNwNVhxS0I4d202bldUTVp3ZWtVdlN3a2tTczNJcktHYUg0REJrQlhwNVdwMXNxTmpzTnZSQi1XY2tMNHZSMnpFMUxkZWxUTzjSAaIBQVVfeXFMTmRtMXhkV0ZQMVAtVkk3UXhiUHYxa0NFMVBaaFN2OXptNDBYUGVieGtBUnZBZkUyRElDMVNaWW5EOFNOb2FOWHpKaFRHb1JJQjN1QWxNVG1UU0hMVDl0NllWQ3Y5QTlFaTlJNktlZU9kd0dQeVZwODU3VEY5bEhoR2R2WW44bGxSQXFfSmxxWUdZdzhrUG9BdTc4RndYM2FZYUpn?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県中之条町下沢渡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPcEQ3ZXZPN2tXWmt4TTVETWhBbnFwTWN1UEVCNVM5cVlOcTNkZTlZZ2N0Wm8xTVQ5RWw3R2l5UlVtOXhsVnY1dUh2enJ1SXJjUFVjZFAzU01OMFhhMjRUNXJJeERfQUtLUEtZbU9lNk5xVXk4ZVNPUW1xX05jNkM1QzVDSi1HVzBTSS1hcEVEWUR5TThMWVh5T2ZrUW5ja013ZlFUMmFXZTFfU1YxR1Jxd2duREdTNXN6WEc5ZXdqWGdHMlNINFBRQmJKUjRkYUYyU3pYVzJqemF5V0s4REFYWW9MLTMxMzhDMjZHS1RIUlVwZ9IBogFBVV95cUxOeFhqVVN5eC1fY1R5ZkhBY3ZaWUd2R2Z5ZDQ4VHpfaU5mTTlJSjZ1X1Z2UUdHVFcyYU4zbTZCX0ExdmpmRkhEb2NlN0VkbG5PdFdYQ3ZSRkpMeFkxUU1ZSVFnWkZrb2dsZU83aHZUUGFUalIzcTNIX1pEVXVOV2VqNXpIZmFSTDJhQ0g4cWduclQyT29PN25TNldGeUVGRlo5Q1E?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県みなかみ町相俣でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOZWI1N3FHLWhxbFRvUjBYWXBobUpFdXMwTzhRT2xTVWV0bDAtMWZjQnJTM0JNUjZ2b3ZhLUVsWEQ3cXVUNDh5SFlkM3FmcDdwVmRpSTNDMUNXR2djaUJuWXh2aXhGdEd2T0pIeFVocHhBeGJKVFh2TTE0U3hfd3NKNUU4Q3pOTnE1akZrSGhGU05TdE5rZEJnR3ZqWEMzN3JmbjdjaUhZOXJMa1p3NXNVSjdMY0JPTXpTS1VMdUl1RGVkanlGb1NIVmtDZXdoMHJ6aEhVREM3TnRnZTh1Vm42S1pJYTlHODJPYklCXzBLTEI2QdIBogFBVV95cUxNT0ZCRHFrTXhzMEhqU1hVN0haWjExOUl1aXU5cFhQZFo0TGJJOHBlcnpjUUJNbHRLM1NfMHZIVmhYamtlX0d6OXI0YjNKQnhmYnBwVlBrTWRLQ29rMFE0TGNNM3R1SDdCYzFBN2VGNnR5Yy1hV1NlQWNuLTB2ZW0xaWFreTVRRnlkRll5dmhzNnR1dWFPWmp1SkVndWVtU2xhLUE?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県前橋市三夜沢町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQMWpMMG9OZ3M0S053TmxHUzd5UTZJaFBjS0oyV095MFpTSUhueW1WSHcyalZZM2NmYTNOTzE3dmE1aVJSeUVITG52dFJGUGtRZnV3T2FIWldqUVRDSWozNnlBdEREeGFoWHpZSHI4VzF6aVhTUkl4Q1RoeXhWc0FUd0hIN21iRDJydUxwQ2NmUm1DcENKeUFBc2pjXzg0NS1fSHVqNm1rQnRJM3dLZmlrVHNkelJmbE9iUHhPU1dYS0VDWFJ1MXNfdFQ2ZWlYN29KRkc3SXNlMmI2SHJzeTk1bGp2MVE3YXdfZnhBVnRycWFDQdIBogFBVV95cUxNeWZPNjd1VGFPcTlKQUtZR1hfRGxaS180RGJJbUFDZEtfWHFJaE42aFN6STlIWjNkamdjUzdYTHk3TkZTWGFVR3VpUVVLNkFrZWtJOHJWcUlHdGpJRjhtSzFBd2dGVjdldFZ5Ym5JeUtwNmZRTlMzVkdxV0lua0FsNkhfY01KNzdOemRzdFpZT3R4bGtHNlJ1OVV0NjFHRTVEeFE?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県日光市の市道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9qNFRMVGZYeGR6T1ljSzJPM0JOY2o5aWIzZ2JFRnF0REY2UVM4Xzd2NzVabWF6SU0xZUZQN3B5bTRGVnhwVU5FVGVDYjlwX3I3eHZLamN4MmVzakk?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県日光市細尾町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPeE5SeGRfQnZPVHpJT1ZDNE5GYnVmdnUwYjYxaldUSFQ2SU9LVmE2emw4RlZlMm5WTGtubE81cFVxYlZ5WkZ0V180SERXSTlFcjRWSlJPUGZpd2Rya2dyYWlEdGYwXzlJLVpHai1SdFplLXhpYnZla20zYVRFTVdRdG5fYlZZcEt1emtrUDdTSmt3NUc0UFlhREVXY1ZwRDlyOVhMSk9ReUt6TkdpZ0ZyV2RmUi03cVVUa2tXcUlKdVJhbHJKT1dXclVqYWdtdWgzZ0w0eEdvaDFfWVZ4RGhBdC1HYlg3eGtXY2UyQ0FQQjN4Z9IBogFBVV95cUxQaEZBXzlJbDUxS2ZuMUpxbFdJZlc1Vk1pdFZ6UDZnQlhPZ0tDbFZDR2x4cFNiME44a2czZXFlRjE3cHI5WkxoY0R4YkpvYWhhWENwWlFxRkc1RmNjNktEbEZicDlXbjhCOXRvM3Y1bTRWejRnODI1MkNuWmtTa2x6R0tFSVZ0c3ZyVVdDN2lGRmFKRWpISXFUdklFZ0hJZXJuV0E?oc=5",
      "site": "news"
    },
    {
      "title": "神奈川県相模原市緑区鳥屋でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSHBLaTBYSDdZbWVMSThaNU9vVHM3YU94cGtYdWRqSlQ0NFNmMlZGcFo1WEF5b2p0OTZTN3h4RTdnY1NCdW1XLU1meXZ0QVRla3BnYWUwM210ak1keFdLSlh4VlVIYTNjb1dsb2hXckJSWTc0SjNvSkMzcFQyUlFGQmFKQUkxTnRrMlpSSC1naFl3OElTYzdQOWJraGzSAaIBQVVfeXFMUGFDUFI5QURoV2NMLUM1RFRlSXY5Vlo5blNsRS1JbjJHRzV5a19sdkNaYWMwVVdVbVBWaERKRHpQNlJMZU9qYWdlaG9QNWo2X2E4anh5N1F6eDhBcmRnbHZoQk5NTHpJQWk1dGtuYS15dUsyeklZcnhndW5wMDhMU2VzWGZ5Ums3eUlZdmtXUjZXUTZPQlg5UGI4elVpcENVd3Jn?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県上越市吉川区町田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU215d1E4SWduTldWdFpQLWlsclVUU3EyNkdnRnllcmRTNENGU0RBbXVoNlkxR3BUV2FkdnhhbWR0SXpUT0wzQ3lHWk5ObVRzRXJhLURBYUVSaXlyZjQ3N2hqTWY3V0EzODVzSi1fNEg2a0RVRS13Qlo1LWFPT1I2eWxMR2NrZTBkNFN3bXVKYkpNdUxBNHNNaGtTeTfSAaIBQVVfeXFMTk5CaGVob0lRRmQ0NzZDbVdkZlc1MVAyTEljdjNxSDVpRDAyV1l0U3k3OVY4MkRZdDZuVjkybFJadWRNZ0paTjJSd19rRnBlS191b091NWwtZnEwY3l2YlE1UzdJMkc4d2JuQWdoV2N1bVI2Ukl5ZjBqeFI1SWV6VXUxNEFhRVlqN3hnZW5hLVJ3ZjhzSmZIN0RiVW9fTDZWNVhB?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県糸魚川市今村新田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYVFwQklXTHdnTWdqdUxKYlFYeXNfWGk5Q2p3Z1d6SGkxUFNOZmFrQ2lPTzlhVVhKNG5jSTFRb0M0eVY1elVtSHk2dXlOM3Y5RDlmbFRDQm5QZHhYLTV6cDFraS1PUmlNM0NWaW5MQkUzbG1QZVJKNVdSQXN4bnQ2ZXZKcF9mdDZhbXhXS3FWUkkzWGE1bFQ0ZllrX2vSAaIBQVVfeXFMT01hR25ZblFvRnpNOG5QN3pqZmcwcmZhVzhzUzVxakptWDJVakFZVEUtbnRLOEthdWt5c1RlcmFONTM3alFxZS1PWm82RkRxVWFHUW4weVBLamNwLXExYTFwZC1HNTBPX05YWWhSU2UwZzlPVDhGWUV3YVRJM1VGbXBDVWRJU3JCcUNJUTFIOEFKbmNoOXRpaU5QRzlRZWo1dURB?oc=5",
      "site": "news"
    },
    {
      "title": "長野県安曇野市穂高北穂高でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaUJIazlMelBPVVNSMTkwcFprZVBKdWpRZnVkU0ZYRE5xNkJrNUVFOHBqNFNRNi1xS2VZWGlBWnlXMm9LS1hIRzduYjdkelQ0bWE5ZlJiUzBrQk5mbHhjLXVLYUJCWWpSSjdrZW1mX1BXelFleE9jbUI0bzBGY3BhZDVSUnE5NkFEV2p1eGdhMEJFeWRnSmJmSG01VmrSAaIBQVVfeXFMTXJjSl95ZkJsOXhrVTJaYVVYdWRfNHNNTFBJTU5rN0g0d3liLVdvMWJ3dWcyYUVNZmxxWGxINnhLbGdQSnlYUWlpY053RTFic0NBUlhyZzRUWmF4Q19YWVpMZEhRcjBJSVBEVzZySUk4S2Z6ZnAzVXFFalVHVEJqa3Q0TTlfRmJqbUE2NnpLaHd3OXpQUVJ5Wl8ybDNHa3ctX3V3?oc=5",
      "site": "news"
    },
    {
      "title": "長野県山ノ内町木戸池近くでクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE04SndUOVl0T2xfdGQzX19HT3ZTcXZFdThJVmlOYUhjZkFOUU5IY1JQeUd4Mi1rSllhaTNlSG5YSjBlQnJTWGctQXJHT1A4MkFqaS1RQlJRRURrTTdtTzJsLUVhZlR4Z0ZzZ2RYeDdUa3g?oc=5",
      "site": "news"
    },
    {
      "title": "富山県立山町奥大日岳でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNeE5GWHdQR24tWUY1SmFJX05rSjl5TkFrd3AwRGY0cC1nTl9YcENZYlRrLVk3UHlXOGJGeXJ4Ql9ZbnJ3YlhUYm5JdXNyYWhVMDVWNndrUU92dDBLOFJCSUpxUlhCRWRVdzd6VnFHd2ZQeFRZNUV4UURGcWkxekF1cHpldzlvbEF1TFpIcmRZaHVRZmh0WkZhaTNkemfSAaIBQVVfeXFMTmhDV2RmcGRJQi14dzQ2aDF4eldkNzBRQWZmR1BHc0hxZGVuVmpyQTJfb19QTDh0M2VKZno4UWZYLXNELWtqdkhYdzB5RWNFTDBMUjJIalFiTldnMDdZc3BxS2hMT21ubHg0aEdpM1ljNXV6NTREUS16dTkyOEdZXzlicHNvLTRBTGZBWVpsdU5fc0diZzhQMlpQWnR5WFpybjRB?oc=5",
      "site": "toyama"
    },
    {
      "title": "和歌山県田辺市龍神村柳瀬でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQXpyc0duYmJFOFRJQlFJckZ3czd2NE4xQldJd2JGa1lqN2ZEb21BcllXdzJvQVB6aGQ3R2ZsMTVEU1c0ejlCd0wtME5uVDRJbHZYNTN1cE9nVXdvZElqZGxWc0h5eUpfaGRZbEVBajhxVG9jQzJ3OG9UX1h2MHB0REpubmF1eXd5MHJEZDJyVzQ1elZpQ3EtQ3V4WW_SAaIBQVVfeXFMUDU4ZHRkOHYwU1BCQlY3Q05GVFBCXzRXbEhuQnB4c0V5YzZKd28xcnN3M0wzSFpqVi1MaEFrS3V5R0ZCQ0N6UEU1TUFsNTJRSzBqWkR0aXZHLUNIYldfNmhTN0dUY2NIUWprNUVRSklzZHctbmNfQk45OTVIaWQwSGttbW4wMlgwU0MyRmpvMEJXa182cklFN3VrSFY0ZnpRMUpB?oc=5",
      "site": "news"
    },
    {
      "title": "島根県浜田市旭町今市でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNTDZWeENJRmJSTm1vd29feVNrTWMwX21IWnRVWnV5QjJ5c0RqRElwa3VreVMtLVpENm9ibDJSWURadmtqUDFNbDRfckZDSUFGRmVpamZRbW1ZckFLZnBsbWdjd2pEeVctaHVQMFUwcXgxTEs5QWtHbkdDQUJQMGtNV0VIV3ppRzFDWXdyN3FTMVlFR2U0aXJtdUE2SVA3dzB6NXQ4bGs3N0pTY0tnQTJPRTlSdl9IYm5DVENYRWpkZ3Y4WGxYWUJYVE42R1FWYlNEVlVsTXNZM0R3WDU3Q29ZWGdPSkZIa2xMdkJueEhqQlhXd9IBogFBVV95cUxOZ3NzVlMxZV9PbEFZNXdETl9JTWkyRkdjUmN1WG44VjFGeFFwNFdQdXllLUJvRm5QTjlTY0QxVGdScjk3THNyT0MzdE95eDVuUFdPaXYzeHl2ejVlRkZvVUxEdXZWUWZob192bGx0eWpSTFI5SmNXbndwZGpQS3ZINnp6NU4yS0lEc0E1ei1ZUWdTSG9kem9tWlpNZmh5b3YtS3c?oc=5",
      "site": "news"
    },
    {
      "title": "山口県岩国市柱野でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWVhuejJHbGpMMC1mcU5zSWs1alFLU2w4WHpvd1Z4WWhzbEJyRGhxcElEU2tuTUd0QXU3WTU5R0c3U3JYVVEtRGl1LWNNSGp0NE90T0g5bnNSSldILWhULUlUYTNhYzBQVXZUUEtiSHdlS1RReU5ldFhNbjlxWDIyVDAwZkFJc0hCZHRKWTVVNDB4YjctZHRzaTZyNHluUUZKNEJuZW5vMWQyeVZSY240RTFYT1YxMXY3VnY2ZS13UUJ5a1JaVHZUU3AtRHRWQTJNUEJjN2M5Mk5oMnFNODZUOGlCSndkVTBkdHQzZEJOT2hDQdIBogFBVV95cUxNeW82WjB2d25BdkppMGhoVllDM29mV1BiVURIYUZFcnowNXFOYlFLZTNSdUVoZkRnbXlBUE1Ec0Y4Z0JnSElvZERCSmozbmlFenpqZlBCaHljMVFKZlVjMEdYMk9RVHBhNE5FM1lDdmxpVDcxOFBEeGdkcEU0a3A5NXhmX3FRQ09IWjR2Zk5ncVVSdlFjWGxteGh6THVab3hTalE?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":26},{"pref":"岩手県","count":6},{"pref":"宮城県","count":6},{"pref":"群馬県","count":5},{"pref":"新潟県","count":5},{"pref":"青森県","count":5},{"pref":"福島県","count":4},{"pref":"栃木県","count":3},{"pref":"長野県","count":3},{"pref":"秋田県","count":3},{"pref":"岐阜県","count":3},{"pref":"京都府","count":2},{"pref":"富山県","count":1},{"pref":"神奈川県","count":1},{"pref":"和歌山県","count":1},{"pref":"島根県","count":1},{"pref":"山口県","count":1}];

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
        <span>対象期間: 2026年8月16日</span>
        <span>·</span>
        <span>公開: 2026-08-17</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={76}
        periodLabel={"2026年8月16日"}
      />

      <p>2026年8月16日、KumaWatchが収集した国内のクマ出没関連情報は76件にのぼった。都道府県別では北海道が26件と全体の3分の1以上を占め、次いで岩手県と宮城県が各6件、群馬県、新潟県、青森県が各5件と、東日本を中心に広範囲で出没が確認された。当日は、岐阜県での人身被害や、観光地、市街地近郊での目撃・捕獲事案が複数発生しており、人の活動域とクマの生息域の錯綜が深刻化している状況が示された。</p>
      <h2>主要事案の概要</h2>
      <h3>岐阜県池田町における人身被害</h3>
      <p>当日の最も深刻な事案として、岐阜県池田町の林道で人身被害が1件報告された。林道をランニング中であった70代の男性がクマに襲われ、負傷した。この事案については複数の報道機関から情報が寄せられており、同一事案に関するものと分析される（※1, ※2, ※3）。夏場の早朝や夕方の活動時に、山林に隣接した場所で人とクマが遭遇するリスクの高さが改めて示された。</p>
      <h3>観光地・市街地近接と捕獲事案</h3>
      <p>人の生活圏への接近事例も顕著であった。京都府宮津市では、日本三景の一つである天橋立付近でクマが出没し、麻酔銃で捕獲される事案が発生した（※4）。多くの観光客が訪れるエリアでの出没は、偶発的な遭遇による事故のリスクを浮き彫りにする。また、宮城県美里町では小学校のすぐそばでクマが目撃されており（※5, ※6）、地域社会に大きな不安を与えた。長野県箕輪町では民家の庭にクマが出没し、設置されていた巣箱が壊される被害も確認されている（※7）。これらの事例は、クマが餌を求めて都市部や集落へ侵入していることを示唆している。</p>
      <ul>
        <li>北海道厚沢部町：捕獲事案が発生。</li>
        <li>北海道滝上町：1頭が目撃され、駆除された。</li>
      </ul>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>26件と、全国で最も多くの事案が報告された。厚沢部町での捕獲や滝上町での駆除といった対応措置が取られたほか、遠軽町の旭川紋別自動車道では親子とみられるクマ2頭と車両が衝突する事故も発生している（※8, ※9）。広大な生息地を持つ北海道では、道路上での遭遇や農地への出没など、多様な形態での人との軋轢が確認された。</p>
      <h3>東北地方</h3>
      <p>岩手県（6件）、宮城県（6件）、青森県（5件）、福島県（4件）、秋田県（3件）と、東北全域で出没が報告された。岩手、秋田、青森では山間部の地名での目撃情報が多い一方、宮城県では美里町の小学校付近や大崎市の市街地近郊（※10）、福島県では柳津町の国道400号線沿い（※11, ※12）など、人里に近いエリアでの目撃が目立った。地域によって、出没の空間的な特性に違いが見られる。</p>
      <h3>関東地方</h3>
      <p>群馬県（5件）、栃木県（3件）、神奈川県（1件）で出没が確認された。群馬県では中之条町、みなかみ町、前橋市と広範囲にわたる（※13, ※14, ※15）。栃木県日光市でも市道や町内での目撃が複数報告されている（※16, ※17）。神奈川県相模原市緑区鳥屋でも出没情報があり（※18）、首都圏近郊の山間部においてもクマの活動が活発であることが示された。</p>
      <h3>中部地方</h3>
      <p>新潟県（5件）、長野県（3件）、富山県（1件）、そして人身被害のあった岐阜県（3件）で報告された。新潟県では上越市吉川区や糸魚川市など（※19, ※20）、長野県では安曇野市や山ノ内町の観光地近郊での目撃があった（※21, ※22）。富山県では立山町の奥大日岳登山道で目撃されており（※23）、登山やハイキングなど夏場のレジャー活動における遭遇リスクが懸念される。</p>
      <h3>近畿・中国地方</h3>
      <p>京都府（2件）、和歌山県（1件）、島根県（1件）、山口県（1件）と、西日本でも散発的ながら出没が報告された。特筆すべきは前述の京都府宮津市天橋立での捕獲事案である。和歌山県田辺市龍神村（※24）、島根県浜田市旭町（※25）、山口県岩国市柱野（※26）など、いずれも山間地域での目撃であり、生息域の西端に位置する個体群の動向として注視が必要である。</p>
      <h2>情報ソースの分析</h2>
      <p>当日に収集された76件の情報ソースを分析した結果、報道機関由来の情報が59件（77.6%）と大半を占めた。自治体等の公式サイトからの直接的な情報は限定的であり、市民への迅速な注意喚起において報道の役割が大きいことがわかる。一方で、情報の重複や錯綜を避けるためには、公式情報の一元化と迅速な公開が引き続き課題となる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">ソース種別</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">報道 (news)</td><td className="px-3 py-2 text-xs">59</td><td className="px-3 py-2 text-xs">77.6%</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道庁 (hokkaido)</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">11.8%</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県 (niigata)</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">3.9%</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県 (gunma)</td><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">2.6%</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県 (fukushima)</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">1.3%</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県 (toyama)</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">1.3%</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県 (tochigi-2026-mymap)</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">1.3%</td></tr>
            <tr><td className="px-3 py-2 text-xs">合計</td><td className="px-3 py-2 text-xs">76</td><td className="px-3 py-2 text-xs">100.0%</td></tr>
          </tbody>
        </table>
      </div>
      <h2>総括およびリスク評価</h2>
      <p>2026年8月16日の出没状況を分析すると、夏場のクマの活動が全国的に活発化していることが確認された。季節要因として、繁殖期を終えた雄グマや、子別れした若い個体が行動圏を広げる時期にあたる。餌資源の観点からは、山の実りが本格化する前の端境期にあたり、トウモロコシなどの農作物や、民家の果樹、養蜂箱などを求めて人里へ接近する誘因が働いている可能性が高い。岐阜県の人身被害や宮城県の小学校付近での目撃、京都府の観光地での捕獲など、人口圏への接近度が非常に高い事案が多発している点は最大の懸念材料である。夏休み期間中のレジャー活動と重なるため、山間部や河川敷、観光地などでの不意の遭遇リスクは依然として高い水準にある。今後、秋の食い溜め期に向けてクマの活動はさらに活発化することが予測されるため、継続的かつ広域的な監視と、住民および観光客への的確な情報提供が不可欠である。</p>

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
          <dd>2026年8月16日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-17</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-17</dd>
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
