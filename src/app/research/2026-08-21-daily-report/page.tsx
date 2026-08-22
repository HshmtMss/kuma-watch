// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月21日 / mode: daily-report / 生成日: 2026-08-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-21-daily-report";
const TITLE = "2026年8月21日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月21日、国内で報告されたクマの出没件数は63件に達した。宮城県仙台市では園芸店の男性が襲われる人身被害が発生し、事態の深刻さを示している。地域別では北海道と東北地方で出没が集中しており、秋の行動活発化を前に警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-22",
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
  datePublished: "2026-08-22",
  dateModified: "2026-08-22",
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
      "title": "園芸店の男性がクマに襲撃される",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1xU1NORE5JSzczdTI4dVZpTVNSVVZubnlKa2VubzZ1Q0dOZlNjRXh6anFFYzlTbVdQZXhmMTE3RXR1SHgtaFVrMmhDQklra2NlRjZzQm4yeGhVUHdhV1pmVnE1bWwzZnR3anpoWkhXZ0pKb05icTEtaQ?oc=5"
    },
    {
      "title": "住宅地の入り口に体長約1mのクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1zNkl1b0trVXVZMTh1T0lFaXFybXh6dTFnd21sT0hwUmR5SG1lZDRQLW0xSHI2Zm9TWUF2a0FLeEYxYy0zNk5ITlRzSkNMcGF6cGwwOGtWbDd2dHVIaUNHY2VVUGYtQmdlWVo2WWo1dmVDdWJublBFdDdaVlp0LTg?oc=5"
    },
    {
      "title": "牧区宮口でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTDJKT2tqNjZ2UXVGZW1HeGxIWHNuOXBwZU14WmRoTnBhQ1FOWTRCSVAzSlpBM1UzQjZPaVFLeHJsQm9aZUFmb1BRWjI5SkZmbTN2SEZYU0E5akFON0pJTEdrdldOYjAzNEdsS0RZdUpOUWxTdlhWTkl4RjExYmoxVVhpNXhDRlNfQ2YyS0s3bF9LRlhBZ0lCZnh0cE7SAaIBQVVfeXFMUHNiY21JN2tNLW5wdlpHODE4bmMxREdLNUxBcWVDUUtzYzlzd3c4T2E2aVJhZ0dDNFdCWkFzLWlDZWZENDFETnpMZS00Yl9ueThKX3RJSmMxdGlsaWJHWXItR3RKTzlhNmNCYjBEYzFDUjU2Q202cGZSTUpFOHNrRGU1N09IS01WcFVZSEhscEtVZFN3SmZyNnFMV01tbVMtTGdn?oc=5"
    },
    {
      "title": "変電所付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE15aFhBdzJ1UjNCZTdpYk04c3NTUlgwczlDVkJ3LXIxTXhaVUJJZVFFM2g3S3lCSGo0ZlhxWHpVaDlKV282?oc=5"
    },
    {
      "title": "足尾町砂畑でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPRFhVRHQ5S3dCYUVjU0pxQ3R6ZHpVZTA2SGJUbTY0OWFuU2l6V0M5cDRZTjZNMW1EaW5kVVU1Z0EwbjRmYVc4SEVDejcxZTZDZGtvMFJheUVTYWcya3NFTXRYUGNCV2JQeHIzMkl3QTVVQ3NCLVlLMjZqWkJ4UUhtOEw1bDQ0ekdMZm5Qd1pfR08zb0xXU2w1WHJIN3pTbEwzSkZsMzdFNTBVa0J6QWZSX01OcHJzTmFUT0RGOG4tSEl1bVVTanJoMjAzNlltc3dmYWFnUmQ4UnROTXJQTkVnRTRBMWVDVkZXekliSU1vXzVGQdIBogFBVV95cUxNTTdzTExDX2hhNVZPVWw1RGJFcGt5Y192MV90c09EYlFoM3dNUzhKdUFaMVFpbGMtNWMwYzhoa2t2YTc3bnNldDZ6RkJ6R0dCQTBaSGFBMGJvamFnbXVWeFlWV094eGZrNTdHcGVEYzBtdXJsSU15dDB2U1c1c3FrOFhhWFVFbE9pbG94c2RQOWVUSU4xcm5Qa1NhOVBCbTVCVkE?oc=5"
    },
    {
      "title": "市道付近でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9kcUg3ZGV3T2tucnhSTkNVTUN5c2tOanYwQVJqVVBTUFdnQnBxQmRIYnJwaGVMUHU1c1ptWjlGenhWUl9haV9ka0tTck4ydnFxb2h5V25HcTNaRnIzd1lyanNQQzdYS0RfYVZyQW1RTnhYcFZtWlF5Qy1QSUdZdTg?oc=5"
    },
    {
      "title": "美都町山本でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNS1QNDRqdkR3M1dPT29oNzBMeGx6dGdVYzRjbjZwZzY1ZnFOMjZHejhvRGx4WVpsazlERFpOTVJhLTVGRE5GUHlINjVhY3VjVGZlNTR5N1N5UEd1Vk5POG9ZZDE3X1I1ZERFSEJNdTRSZnlFNXNVUlFtMWlKMk5EcWxidkZnQ3lxRnQyWGRncDdVdUp1OUZIclJCOWTSAaIBQVVfeXFMT2VheEhVMzhnMGFfQkhQcVAzVTFBZG1OY3NtYncxSkxkdVE1OVhVekFKM05GdGtoZUdycWdYODA2MV96UWp5Zm9KWmFwdlJoQ3U4QmQ4Rm1COU13NEUtNTRvempHZUtZNUlEZy1jQVNlSjJaZUlybDVDQlFleml2TDZ3ckJnVExjY3E4UkY4UVF4dVpfSE9TdS1rUUxmbW51WWp3?oc=5"
    },
    {
      "title": "旭町丸原柳でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaVpvOUlxM3pFS3N1SV9mQmtLX2wzRXM4NTBqZXl4aVM3c0xHeGNKRUIzQ2s5YnRQSHNNSnd0VjZQOFA2VmN3RDlHOHFFUnVDOE1XaTkzRDljbjRyRzBJaUhJb2dHc2Vud1p0dllZeXZaOXc0Q2ticHh6VTVRWXQ3S0xzQ0ZUblRTMnBjMVpZZHlXR0ZCeFB1OHdmZ1rSAaIBQVVfeXFMTXk4QWhwTkR2SDY2VDRBR295ejVSdE5EMjJSeGhvZmIwMXUyVnVrUjBMczNFZXhzRXZkYkI3azZXT3N1VzNXd29oYUxlY1FFaHpNQW1xSU9Da0tEWGVTRTFEdnAzYzZ0eUZoYzBzWUlHejVvRjRQUEFRek41YXVFNzdwZlZaNzhYdE1FSHljUjdKZ2hfODhPcXRzS3VKbnZFYXZR?oc=5"
    },
    {
      "title": "美都町仙道でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOYWhVbHVTTzluaVZHVEZ0VWt1RzlqU3J6bWpuY25BZFBFeGtic180RkM2VTdNZFZ1Rlg4bllHUW80dWZBa3BPSlIxQUQ2WDFLcXBoOXQ3S1p0dC1HWUZRVmxBM0daQlZpaGRreGdEeDQwZ1YxNjEwRTRFRlFkZFNfZDNGeUNRUTQ1aXdNazBJQ0sySTZrc2cwVk9SWGxnd3VMcDBhanVGYkZ4R2hlQjZhcDRfQmtxbW9Pa0FVRXlYcGN1djBtcmgtSzBLaDA5OHFBU1JyUjNseU9nQWF3UkVhSUttazAyUjktRTNkYmgwSUthZ9IBogFBVV95cUxQM1g2SFcwU2hOWFdMUzdTUVk1M1V0cklBa1R0ZkhCTVJJYmRySERoSkY2azZyN3FCTlQ1N2pQY1dZaUhfdDBxUXJZRHE1VWl6WGJDVjhqOEt1M1hhZl9LdGh2Q0d4X0VrZ3VxQW9RRUthWTROTi1XTGxhUU1UOXZvcFRVLWZkTVZyOUNPQkZfeXRlMXF3ZHc2V2NTSXNmR3JuX0E?oc=5"
    },
    {
      "title": "保育所の近くでクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOR1Znd3JrZHBDOV9uRnc5d3U4MDcyY3AxVG5aNDE2Vk9FOE05b2szdFRqeFVVRkZpN0tidjZ3OElORWgtQXRYMU1RT1Itbm00X2hjUjM5MU1VRGxDeDdrckN5bkp1Y2ZuS25INXg2RGIxLWYyZ1AzY1VsNHlZTHdCOHJJelR5aUNC0gGOAUFVX3lxTFA4TFlaY202RjNNQXNiZ09GcWNPNkt2blgwSmJsMVRnZ1BTQTZ5bWFDOEJpTU5MT0Y0QmllMzM4QVI3MUlvcmRCbDlwREVlNU9TYTZhYkU2R2diNTdfR1lEN2RDOTh2Zld0NXFUZURZSm9kRFFNNE1JQWt1ejBLX2I0NU5PVGZwbW1Ud05HTVE?oc=5"
    },
    {
      "title": "ヒグマの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9qMXRCZThva1V2RTFkWjJEWjduR1IySzZkX0hhd2FHVEt4UFNGVlQ1eVlkWGRQQTNsN0ZhVVZiOWR2YU8wV1hjVFBhbThXMkpibS1kRWl4eVRGdw?oc=5"
    },
    {
      "title": "ヒグマの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9qMXRCZThva1V2RTFkWjJEWjduR1IySzZkX0hhd2FHVEt4UFNGVlQ1eVlkWGRQQTNsN0ZhVVZiOWR2YU8wV1hjVFBhbThXMkpibS1kRWl4eVRGdw?oc=5"
    },
    {
      "title": "三石西端でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPenhUcm1YNExHay14UHQ1UmZ6bWhRU21pSHlhM2xaQUFnbEhXWVJoQ1AtUFNKRXlocHZZc2s5Ml9GTjBkT000VzFOTmpuU1FzZGNRWTcwVDhRa25xWFhtdEhXWUtPZjNETUNMcVlHZzd3c25zUWdGZmF5dVg0MHZnMVQ0V1pVQ2tybjdsMVlNZk1nQi1SUG5qMjBNZTTSAaIBQVVfeXFMUEJncXQtMHBmTV9meGxudGM1YXlFQjBiMkVSVGtiV19tZ1Y1OUJBN1djRHpKOU5CTG1oT0E5bnY2LWNST2VfUFBJN2pIbVo2R3oyNlJzTUVyWkNoalQ4bzR4R3Y2TF9maVpUVXBqTG1oaU9HV2ZOYzJXRXk0emh5OE5nUXRDWGtOWkRQajhqa2x4bG04RG44T0gwclJ0S3BoSHlB?oc=5"
    },
    {
      "title": "赤井川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVWRwRHhNYXlRc1o2OGcxZ1RzOHNsazVJYlVMSk1DNXAxdzY3S1pXcWxnQ0xkMHl6WTBDV3phR1JiSjNxelk5TjRGOEJuVF84ZnZ4MFl1M1ktNndvOHBDRkJ0bWNqT0tCcGZ0QklpNjdYckxPbjZEdkVBTzQ1X2NxOEYzbHFYUXZIU0t2SzNEYXdlVDRvYVFEWmM4RlTSAaIBQVVfeXFMTWE2UUFkcEUyenQzVjFSd1c1NlkzMDVFMmtDRnE0MHRoUXM0UmxnbTVNazFHSDFRT01YOGpxQVlvdHROUTlMWUNlNERaZVdMam1NQzdtdHU3czRoQmVqdWNHcGtSLU0wdm9zT0NGNjdwWWdfZkdJMlY0WWFkRjhPV2Z4YV9saGc3RTJnNHZma25sS0hrQzAwUHMyR0xON3YzYk5R?oc=5"
    },
    {
      "title": "富武士でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWHk5Ny1yWlVkbHg0dmRhUXNZMkNnWEh4Zkh0aE1GX0ZBcTVWTE9kT29yUWozV0VraXVIelhUUW5vMmFmOGJvc0pkbkpfcTU4UmtxMkIzWGw2MzNtdVcwVkwxRmUzT0tDS2phOFdjclptbkRkMXRScFItQzh6eFFySU5vVXo5aV9SM2NYRG5CY082UUVMQlg3U1RsMkvSAaIBQVVfeXFMUE14b1V1SUN5RzlSOEhiTW5DdU9INE51dEpqdlJfaE80N2ljamhJY1duc1Z3UzczQ1ljS00xWVdCRjdiUE15UWs1VVp2NzBmRzNJdW5odTZGTVg3OVY2TUhmYXdmMlEtbW93RDJBcHdJcEFCNm4wUlpKenM0dDlXYkVrRGcycUM0Q1ZOdjFKVUZqR1V2eWlRelpnSXFxbF9kVmxB?oc=5"
    },
    {
      "title": "神宮寺笹倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUkN6RDFFbG95Z0VRMENQajljUFNsTGFDWV8yLS1ydFlncnpvV1BCYXZfX1RXbGNZaFhycU5VQ1FDUFJycHpMbnlTTTV3bW9YdWlEbUJST2VYVDZKVjBGOTFBOHVOaGJteHpoRnRrR2lFa0VuekVRczJ0WG00UVF0b2sweDlZSGxMcnR3c1lBMTNYYV96ZzVBMFY3OTfSAaIBQVVfeXFMTlBHOVFQb2xtVWNLek9wWk54Ry03Z1R3eVNaWmR1cllIMW9RdUpjRVZBTFk5ZmE3NENaYlVfZXI4UFZCaUQxdzdJVDU0aDJfc3Z4bHlkdnlCV3ZtXzQ0bGNZZzdZQlJSQlY0eUJfMnpTQ3c5R0dMSkhLcjl2TVBycEdJN0dBZzQzQUEza3RpNVotZTg2YTU0Y2RZb1BGRE1UMUlB?oc=5"
    },
    {
      "title": "寺内神屋敷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNanZFQ2NGN3hYbTVLVDNEZGNWVlVOaGV6b1ZHU2hGaURtVG9jbG4xTTMzbExfdGN5STBfYTN3VVYyVjNtX214ZGJxUEcxUDlwMWJHcjctUTJ6STFHNlpYVEh6X0dYbHAxeEtFU3VyYzktU2JuTXF2SWZSRm1QQjhkRDl0VVlPMWx1VlJ1aWs3TENaOGQwZ2dnU1NJM1nSAaIBQVVfeXFMT0hyUWVENVp4RDBVdUN1ckdsZEVfZlEyR0h6YjFsMTM1eksyNEdhNmswRUZCMWJtOEFnNkNOTUZ1VkRrUnRUSjlmYjNqbkdGUktqYzR1TVN5MXhSVlh5b0FFajFPelpXVWJKZ2FORXNkMmo1b2p0Y0JvZy1oNXE5OThjNUFTV1NNeW9jNG9ETFdDVDZGNFNfQzZvUTFiRm1hUmRB?oc=5"
    },
    {
      "title": "花輪猿ケ平でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNGtCZUlJUjVSUzEzLVdxM2dLYzU0M093ejM3UnpheWF3TlJKZFNUazhQRnlsRXJQa0xIdl80dS12UXFGMjF4OUw1cGNFMWV2Z2pRU2N4UVVObmxLRUhpWEV0NkdhX1VUUDZPRkQ0dW8yZ2R2Q2pFSWRsT21QWVAzN1luQXdPWVJ2OGhsRlpPMWRXRUdnd29TaXBtYW7SAaIBQVVfeXFMTTB3ZThJR1Q2d055X01pN0NBZUZ6NENkUl9IeWVQWFhhZU43dG5BYlJvSHphTmNGVG9EaVZtcWZoQ0lucTRZUzE4SndvYmFXRGFub1ZsRlhsZlRSQS1MRmFiTDIwUjdrb0FzRllVZmZmTFp5V2U2SFNUaWVYa3JmZk5Ic0JOa3BlaExNM2owd1NnR01WWTFGeU1meEdOMTktemNR?oc=5"
    },
    {
      "title": "ソバの実が食べられ足跡を発見",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE43cDA4MFRHOElUbFkweVN2Ny1JSHlKeHpQMnlPRzZXNjRoZUtkQVBLV2FxMHBnbXNzMDByZnRNQUdxcXNTWUQzeGJWeVBDbWZtUjJIYkJiX3RwNWNmWmVzVkJVTnJ3XzF3bkdTU3RscVBua0hHUVE1dnNNc9IBgAFBVV95cUxNUC1QR0kyR3R5RVpxejk1UjdLYW1VZ0F0NFg5RkFwRm5PS1ZBUndfLW1LLVpmX3JNTk81aHFWcHFOQWlJbEFIUlZ4TFpnLVBFUHVHTWZoNGZtV0FyOEdlUjBnLW9xMnhnS3lXdlp5c1pQVHZWMWJKU2xybHpzRVkydw?oc=5"
    },
    {
      "title": "羽後町払体でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOb1JlYjdOa0hPTGt0Vy12NFR2NHc5Wm9hT0dQSnB4RkhNQ19XbzcwUzdnY3JCRGtZRGdDb214d3FodzE4UzMwSERUOUhvT3dvWHhCcWpXeEk2R29HendfRjhyaFVHeHo1enU5RWx0QmpBaGN5b2JkVy1MeTVPUWE3RklVWFc2d3Z5LWRtOEo0bU1XcnQzRWs0ZWdUUi3SAaIBQVVfeXFMT3V0QkMtemNMZjNZTTNwZ0RZbEJUcnJWSG5tc290R1g4dHY5c3BQN0xNQXB3c0FxMmFYazhRQkJlaEQwSnJ4YnJrN2pTNVVvRHl0WmEyYmlJYzJobFhWYlpTZ2lVeXB0b0hudDBPLW94aFFMSk0ydExON3A4amRVNzUwaE1rc3hoVDVlMFk0UFJfbWlXVzIxcGZNVlFzbmZmYWx3?oc=5"
    },
    {
      "title": "高山市新宮町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSXduZmhUVlRpUll5TTZjWWstdVhCa1g5VWhYajdXWkNNZElDeHFoc05vVmpSWTdnUFlWLTBta2hOdnpYb2F3UllpSGFnWTFaVnNJWm5ubUxVdUhUZFJ0WGlHdG9xaWREYldTVlVzcG5aOU9xRnlza3kzOWhaNmtYVGxWU0ZvWUNBdlJnT0JnOVdONHE1NVYtWG84WG9XVEJ4cHVTMzFZYjdDR3V6N0I2VGp4Nl84Q1JicDB5dEdPdjBfUENiUTJKejZmUG1KMUdReTdnbmd3Tmg5YUJMUnhySWdDMlhXSzdUcjE5UGhOWTFnUdIBogFBVV95cUxPT0I3a3FvbTFUM2NHVXhsajZqaF9ZWG1LWVFNTjZpc0p3X2syYXltalM1WUYzRXpVNk13ZjJmZ1liZXVJLTJwcjNQd0lHZHdlNURXV21iY1VGS1BHNVNDemxyOHhyVHdraV9xTVVMMFMwZlFzdlRwd2xzenFJNGd5VWFtcmJveWhTSzVISVo3aGoyWUxvRDJORG8wZmVRbUxTZ3c?oc=5"
    },
    {
      "title": "丹生川町日面でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaEJQVjBYN2p6cUwya01hWmhiUTF4ZGZWRXI0cGp0dFZUYW1IY0hQLS1kY20yLVctM1ZnSVhvV3dVTUtxVm1kb2JkSW0zZE5kUU9TcTFvSG1oMmluVjFBZXRPV2p1VmhEQU80TU9WVjlScTJQeUJOV3pXTHJzb0twMGRJWmNQRmMtbExuOGtQcTdMTE91aFVVRWN0VlXSAaIBQVVfeXFMTUx2c0pkcnhWQmJZVDRDV25Kay16dkhvLW1XYlNpQjcwTk5fOExRRlJoLUw5XzhhT2Jmc2RPUUtPTU5yN3dtaUp2NVdhLTR6STY0bktuTE9FczhtWW9mZVpPUmdKVkp1LUE1LVlOU3h6Q1JIcE1nMW1Hck1MVmVydG5jc01XZ0lDa3ltS3VVSV9oV0lZWFFhV00wamwyV21JLWdn?oc=5"
    },
    {
      "title": "花巻市太田第２９地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQOTJuTHl4ZXN6OENhY0xOeWF4cXhvWHFNTmFZdnhxRXVRSU5paXZreUxfdkRIRW45R01DSy04STBhN0IyWWFDNFNIV1lOZU0yaHVJbjdoMzRac2ZBbXY5X3RMNHpFYjJuOHFFOEdteGRSSUNaNWhtRzBaMXN4OUZGSHRFR3JzNEFDeVNoS05tbVE2d3RleUw1cGk0X2Nia2ZZQ29renplSnZKcERIQW1qYXFGcUFtN1VpcXVDdi1saUpFd1JNNHVQX3JwTkdsTXYyVFlPTUIyQjktTjFYUWxyRVBzWTJFRjJqYmFlQ2lsdkkyUdIBogFBVV95cUxNVjRpZGFZVGdYLWF5SEJfRGp3RmFieDNtR09hOUpEMjBmTnpFVmZsd0VWR21DRWFrY0tONU9qQU1OZF81NnpmZlAxRldLcGlDZmUxbGJFM3NDNmx2STQtWHhWZlRZcURrb3VvTUpJR2MzX1FDUVE3czNIV3NIcjVTaE5QTnh6NnFsWVU4Nk9HbERaR09wb3lPTmRKcERHNnQ5U2c?oc=5"
    },
    {
      "title": "花巻市下似内第５地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQS1lPX2wwd0Nwb010RVp4LVVBN1prQjNacnhyTW44cDUzeFdxeWlieVRpWGt4aVNoT0kxdTdGaUNUM0FISENaN1ZRcGhQNG9qWE81NDk2WjZyZzRBcjJIWlFrSXB0ekstLTZHT1k1OFpPcWpaUjhub0tmRHQ5OUx1NTNoR2FRV2FJOEZ1WklWanUyVWcwYzNCTlB4bUZXTTdoa3k1NUxpaWJ2b0hwVHhZYV9kS0h5V0dJZ09jT01Ub1NKNDJNcFIzX0twUnpjRmFZMXBEZ1IwWTBIWkJSeThVZ2Rtb3FCd2xJZjgxQ2xjcTNMUdIBogFBVV95cUxOLUlqZHRvWURGTzNuTDkwclk4SURFNHh2QUpjSUhRZ285ODVuYi1TaEZreFA4eEY1WmpJUW1sTGNzX2FVbnRVekw4Zi1FUC1IMU5hczVLM2lhZzg3UjZEV0R5R2ktQ1F6UjRla3pKQ3ZTZjFVQW04Q2E5d3RFeFM0X0hSa3Q2cFhDZDFQZ2ZiUFZ5U29UOGJkNGVXbE9xUkdmRnc?oc=5"
    },
    {
      "title": "花巻市矢沢第１３地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQR0N3OHYxRGNvRFlscEdvV0ctRnpwVkVaNndLM0RDN1h0M1RQODhFUkthaERhcVVLeURPeS1EWU40OUo2NlY0TFdYRnZuXzBMWTI3SkR2MzIwVHd3YVRrcktqdHB3SVhKZmpKbW5hQTFTRWZ3NkxqOHRud1BtaHJPdzV6OEVCMG9rZmxDcDhEWGZLeHVaNC0wam81WjdsaDNQT2dFWkJkSlUtTUFiRTEzeUI2aTZ6WnA2WHNKNmw0OGktVnRlYXVUby1ubnZlZFlyWjFoU1BNNlppQVdxWlltWmxwUllENzJZVjZzR2VrbU1oUdIBogFBVV95cUxQcDBIbVEzLUlpNkJYZ1NkSDN6X0hLazNVdFA3bnJIRkdqME5oa3RfYnN3bHA5VTNyMmNjR05NbGlESU1qczFwRUY1Qm1tc1poV1ZHTjV1eWpHOVBKY0dJTm5ndVc3TTRIbF9zeEcyZ2cxTUF0MDFyeDJ4M0dmYW1FUk5HWmJzY3hib0Jpd0RHYTY3QTJhVDhiazQ0am9OT093a3c?oc=5"
    },
    {
      "title": "花巻市横志田６地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQM19uSkN5UXFIcnVCSkJhVHczMEJ4clgzal9ROXB1cVgzSTVwMG9yUXV4a2xCOWFGQmszYVE2cUtZY2FyM1NRanFhWnhLZlpaWUdPdXBmUFZkZWNkeDhCY3Y3QWY3NmhJRUMzMlUxcGtEaVQyY3lOZEp4Yk9jOWx5blFZTnRqSDBFS21WZzBmTUlsTmk5OHJQbVZnQXBuOTBaSXJ3Zl9rS19DOXJTNTFIY2VuWHczR0JXQ0h5cFo3M2kzMXVVdlUwVGlXX1d6UU13dEliNlZHWV9Bc2FOdkhQY2VIcTEzelg2cUdkSVdwWHRnd9IBogFBVV95cUxNU2RCS204X0VIMkF1ZUJjVzVuY3o0RjNoUm9UUkZmeGRKV2Y3bHU4M29rcHRIdUVpVkx6SEdDVW00cHNvX0Y1WHF5Q1Z1TzZ4ckxNRkVscXVUbDJXSlI0M3ZaZEFIM0xoZ3JNZE9feklkaFI1aHRXbm5HdXR4SmpUejZYb1hDdUtEMmpBWkExN0R5aDh0cll2Q2lMOV96cjJ1SEE?oc=5"
    },
    {
      "title": "椿東目代でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQa05zTkI1ZnduYjMxTFRYNUIzeS00ZmNsaVUzLXNPR0FlY0x1bEJsQ0R6X1BqcWFldUlaalc0c2U2cWtkTHViU2x0VkFteFdmVmlNbnBPd3FKemktXzUzcUt5OW55YXlkMW9DYkExM1NpWHQyTjZqR3hYQTkyTm5sbzFiMWJ2UHFFRUJwc3N4SlBDTEY2QlFMdlBmVXHSAaIBQVVfeXFMTVd5Z0FGejYxa0tLb0JYUk5jU1hqeVlQeWRJc2k4cEpQeHk2Z2poY2RQRUNXVUFPdmxQc0FiQnUzZWRfSGUydVZtRmp1YnhnSUxwNldPd3hSU1p2NUMxMnlqVUlmS1JmMTQ2MEZSbGR0R0d2REY0TGU1NGtqV3BJaGtOTHVMTGRKR3pycG5nd0w2UDdSQ0lkNllJQW9CSnlWOTl3?oc=5"
    },
    {
      "title": "上田万上組でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSXluWWxFem11SWlmYXJDZVZvNkF0TFZrcHg5MHZZeU15VThvYW9rbnQ3LW9hREpxSWFRenR2eGxSaWZDYXJ4dWQtYllwVDdnTk9GdW1EaFhmVEhja3BPeFRXZzVlWkMyOEJxeWJTLUtxV1ZvTGJBU3BaS0J5UmgybEZJZlVIYXFRRXJGdXNJMFhfSUNQbThsSWdRYTPSAaIBQVVfeXFMT3d4dlA5U3VhYlRKMnBqOG9yTFRTenNaZ3BkLVZvWW9aX3N0TFRTQ29vRXp1aTlwV1pXWElBVkhLWjlPWGc2NjFZWEF3Q1NwZkp1VUl0aW5nbk4wd200emdfUGtiVmRtWUExeVh0TmZhNTNyS3N2YTFfOVRuLTR3TV9ORWQ2ZU9qaWtLVjh4THdpWUw4YjRSUUFvbGNlTUREYWJ3?oc=5"
    },
    {
      "title": "入山峠周辺地域でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQT2o5SmFsTzFVbHRLc1hjWl9QakpXbWc3cGxpQ3dsSjdTaHc5Y3FzZFJKTXAyZzczLWI2Tjk0OU9jdHoxcnp2dTZmUW03cVNLR3JRb0lXLVNjcklSVkNQYmRXRlVWYkRkb3hMRm9uZXBHVXVmYnJma2x6a0h0TzN5VHlTdWlyQmYtS1dKTEhfSy1PeDZUZC1WMU9CYkbSAaIBQVVfeXFMUDltQlo2SzJidUJSdHE4cmZFRkZFOGUxYU9KT0RBQktzek1oR1I5WVBXSjYzeW00MWVEcS1VUncwVHNSRTNqSkYyekZTdmJleXpVOHFJSzBnV3h5QVFqdG84NWtpNDhnWmRKM09kZ2ExRGNKSkdtSUswSnUzMHBOSmpEV005M1ZDWkI5akdybjVjQXZ4YmVqeTZ5bFRQcjJ5WlNn?oc=5"
    },
    {
      "title": "龍神村甲斐ノ川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT21VLU40V3RjUnFOcTJsT0F4ajgwYlVTNXo1eXhCVWZwOWI0U0g0Yl96Tko5ZzNpVWl2RnNPa3czY1pOMk04U3VEYjdnWnRKQnktUy04UHVPZkg3dXR4TW0wZkxoUmw3enVpM19SZ3RfS0JWbVNwcVhwZWNhbmJJRXJWSU5uSm4zazZNdWkzQ1daSmNwSGlvcmtEeDnSAaIBQVVfeXFMUGtWMHFOSEFhaUc1S21oWWVEcG8tQXRGVkJUbWRHM19TM1o1Yjl5REpMQUZTUlBvSDAwQ2lUWlVHdjVqTkU1T0JBLS1vTEZaRFhZcWx3ZlZLM2pZWE5MWnZQOExxM2c2bXAzVG9sVmVJbW1WS09mR3VFMjVuR19mZ21NUm5RemdLWjN3WF9OakhTaU03OXdPUFItNkZBOUVfbnFn?oc=5"
    },
    {
      "title": "桃山町調月でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSElNdllOWm90b28yWFNRTFBhU0diUWZiOWprelNQRHVxMFEwOWZyZm9TQk11eTRpRlpSdGl5TDJ5VzNWUHlVSktWOWNQcEtVR0RUR3k3aHViTnpqeGdxeDJaeFFjVklOVHl4MkdVQmZXcG01RjVEOEtPTVVjLUR6NF90c3FhWEVxV0RsdjBrRW5Ydzlnd2JKbDRpT3XSAaIBQVVfeXFMUHoyQ1NHNzhHOWQ4VU9EUHVhSWtMVk9iLVNzU2djSFFtVjlLNjYtaW95b1VoTTA4MFlodUpwTFhFZDZyalR3Vk1LS3ZjRUtEN1o0QnR5RkFscnEwcTZWdFlyOUgxb2laYURLT2k2eDR0bWh2WHFCUHJsR1l6XzhEeC1NaXk5dk5FNU9qM2swWUlsSl9IUlVGUWN5WW5oNm1PeXpB?oc=5"
    },
    {
      "title": "泉区福岡平場でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVXg4RDNTdFFhNlRiVVdhZWc5OE1WM0tGdnc2UVBJaW05cmx2QWZMaDZxNjdzUUx3eVFUT09PMGZGVndFNVVYdWlCSE1jQ181UDFiTG55OE1TVmNURkk4XzRLeGI0Slc4QWtPWkVZS0h3eXRoMHJ1cE1saGNhbU1XdzBvVzIzSlZfdHF4VEFQcG95djFMWXc1SXo5UWzSAaIBQVVfeXFMUHA1RUlnTkZtbjlxUTVJY3E3SHZmRGR4X3dxSzh4LXlkanQtZmpxVURXb0wxUVhNdXhTS1NsLVdqY1B3aEltTXpQWU9Qc05xOUxTMUtVRGlJdkVsY28xUnJ6ajl5UVlyVkNUY1hUMUFWY01tT3hHMUI1RFcwYzVXR09yMEVFLURCbVBLcHFBX0ZoVGY3TVlkWjlTaUhZVWFRY05n?oc=5"
    },
    {
      "title": "泉区福岡岳山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUnhwcXJ2dXBCUzRaS3pBRTN1bXpyUlVtQndnSzZnQjZKWnZHekpHTUZJMG9MSVAtdUthdmZWM2FYWDc0RGllRW1aV0pycDk4SWpEQm5aRVZEVW5zTUIwLUo3ZWpqU2kyc3FFSk9sRzdtM2hKZ21ZcFMxVDRKNzBlMHI3b3ZkcTREbUMzUFk3NFNqQW9QOW44YjNjSGLSAaIBQVVfeXFMUEloRjYxc1pyTUE5bzhXcHJER0Q3dDg4RllQRkhudUM3VElaY3k2dDJXNGN4OHQ5bm5RMjFyNTFOd3hQeFRrLWQtem5NR0I3RE85alZlZmFONWdJN2hnTG9kaEVkcXYxRHp2OFc0eFdxUTV1cDF4RHVTWkZhdG9iZFkzbVdwV3E4VUplOWRxSGR3aEloVS1GM1JLUW9OTXZlRWNn?oc=5"
    },
    {
      "title": "車の前をクマが走っていたと目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5iRXNfaUhXZklXTU9HMjNlbXpjWGxYVDJoRGZRZHZVUEVqaVhIYzNaejQyVnE4YnBQc1h1RU9LUUZaQ1R0UmNCX3BpSHRCSU5aQXhlWDl6ZDRHbGVoRXBDR2Y5NVFzNWJxX21pZnVfQXB2Yk85WnpqdVZqNEswSjA?oc=5"
    },
    {
      "title": "福知山市夜久野町畑でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPMjZSN2lLZE5qY2EwSGU3NHI5dThzY1E5OWgteGNDVzVVNmpZWUlvQjlWTWhtLXM5Q2g4dzNMdWhWQjhjWldYWndkTXRnZU9YVDcxa211WkRZZlpCQjJhVTFjNFlOZ3FPTHc5X1lnR0FPZ3FvcW5LdWlSMk1DTlJNN0R1bFRtQjEtWWlmV203RC1tTzJBeC13cTR5eXhlWDN4cEhac2lrcENZZFRrSXI3VDdGN21Cc20wV1N1VnFlUmp4a2U4V1FLNm1lbEtRd3pPb01SR1Jra2MwdVZ1NFctWEtIQnl6TUZTUUV3azdQLUE3QdIBogFBVV95cUxQSF9BbC1MM2J5ejNDX1d0TGdQXy1vU2VGVEw5cUdqWWtfeWNPaVBVdWFGWTFXRW1RMzlZNjh1WFhGQmN4cGJmemJRU2VNWlY3aUwwUHdIaEdGc25IcTZpd1VDV3FJakUyVURQQ1hYclVRbkR5UVVXZWFKWTdCTndnQnpMRENpTWxjb2tJZlFsbDJ4bVVBTDExb3cydHpXOVVDUWc?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":15},{"pref":"岩手県","count":13},{"pref":"島根県","count":7},{"pref":"秋田県","count":5},{"pref":"青森県","count":4},{"pref":"宮城県","count":4},{"pref":"新潟県","count":3},{"pref":"栃木県","count":2},{"pref":"岐阜県","count":2},{"pref":"山口県","count":2},{"pref":"長野県","count":2},{"pref":"和歌山県","count":2},{"pref":"福島県","count":1},{"pref":"京都府","count":1}];

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
        <span>対象期間: 2026年8月21日</span>
        <span>·</span>
        <span>公開: 2026-08-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={63}
        periodLabel={"2026年8月21日"}
      />

      <p>2026年8月21日の国内におけるクマの出没総件数は63件と報告された。特筆すべきは、宮城県仙台市で発生した人身被害事案である。地域的には、北海道（15件）と岩手県（13件）をはじめとする東北地方で出没が際立っており、これらの地域で全体の半数以上を占めている。出没情報のソースは報道由来が53件と大半を占め、自治体等からの公式情報は確認されていない。本レポートでは、当日の主要事案、地域別傾向を分析し、今後のリスクについて考察する。</p>
      <h2>主要事案</h2>
      <h3>宮城県仙台市における人身被害事案</h3>
      <p>本日報告された中で最も深刻な事案は、宮城県仙台市の園芸店で発生した。園芸店の男性がクマに襲撃されるというもので、人間の活動が活発な商業施設において直接的な被害が発生した点は極めて重要である（※1）。同市内ではこの他にも、泉区福岡平場（※38）、泉区福岡岳山（※39）、および市内の路上で車からの目撃情報（※40）が報告されており、市街地周辺にクマが複数個体侵入、あるいは定着している可能性が示唆される。都市部における人とクマの遭遇リスクの高まりを象徴する事案と言える。</p>
      <h3>岩手県滝沢市における都市部近郊での出没</h3>
      <p>岩手県滝沢市の住宅地入り口において、体長約1mのクマが目撃された（※2）。この事例は直接的な被害には至っていないものの、「都市部キーワード」に一致する事案として分類されており、住宅地という人間の生活圏中枢への接近が確認された点で注目される。このような市街地近郊での出没は、住民の日常生活における偶発的な遭遇のリスクを大幅に高めるため、地域社会全体での警戒体制の構築が急務となる。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では最多の15件が報告された。歌志内市（※11）、沼田町（※12）、新ひだか町（※13）、森町（※14）、佐呂間町（※15）など、道内広域でヒグマの出没が確認されている。報告件数の多さは、生息数の多さに加え、人間の生活圏とヒグマの行動圏が広範囲にわたって重複している現状を反映している。特定の地域に集中するのではなく、広域で散発的に報告されている点が特徴である。</p>
      <h3>東北地方</h3>
      <p>東北地方は、北海道に次ぐ出没多発地域であり、岩手県（13件）、秋田県（5件）、青森県（4件）、宮城県（4件）、福島県（1件）の合計27件が報告された。特に岩手県では、花巻市内で太田（※28）、下似内（※29）、矢沢（※30）、横志田（※31）と複数の地割で目撃が相次いでおり、特定のエリアにクマが集中して出没している状況がうかがえる。秋田県でも大仙市（※16）や秋田市（※17）など県内各地で報告があり、鹿角市八幡平ではソバの実の食害と足跡が確認される（※19）など、農作物への被害も発生している。青森県、宮城県でも複数件の出没が確認されており、東北全域でクマの活動が活発化している。</p>
      <h3>関東・中部地方</h3>
      <p>関東・中部地方では、新潟県（3件）、栃木県（2件）、岐阜県（2件）、長野県（2件）で出没が報告された。新潟県上越市牧区宮口では、報道と自治体ソースの両方から出没情報が寄せられている（※3, ※42）。栃木県日光市足尾町（※5）、岐阜県高山市（※26, ※27）、長野県軽井沢町入山峠周辺（※34）など、いずれも山間部やその周辺地域での目撃が中心である。広域的な多発傾向は見られないものの、各県で継続的な出没が確認されており、レジャーや農作業における注意が必要な状況である。</p>
      <h3>近畿・中国地方</h3>
      <p>島根県で7件の出没が報告されており、中国地方では突出して多い。特に益田市では市道付近（※6）、美都町山本（※7）、美都町仙道（※9）、保育所付近（※10）と市内各地で目撃が多発しており、地域的な警戒レベルの上昇が求められる。山口県萩市でも2件の報告があった（※32, ※33）。近畿地方では、和歌山県田辺市（※36）と紀の川市（※37）、京都府福知山市（※41）でそれぞれ出没が確認されており、これらの地域においてもクマの生息が確認され、人里への接近が起きていることが示された。</p>
      <h2>リスク評価</h2>
      <p>8月21日の出没状況を分析すると、以下のリスク要因が浮かび上がる。</p>
      <ul>
        <li>季節要因: 8月下旬は、秋の堅果類が本格的に実る前の「端境期」にあたり、餌を求めるクマの行動が活発化しやすい時期である。冬眠に向けた栄養摂取のため、より広範囲を移動する傾向が強まる。</li>
        <li>餌資源との関係: 今年の山中の餌資源（ドングリなど）の豊凶は本データからは不明だが、人里への出没が全国的に見られることは、少なくとも一部地域で餌不足が生じ、クマがトウモロコシなどの農作物や生ゴミといった人為的な餌資源に誘引されている可能性を示唆する。</li>
        <li>人口圏への接近: 宮城県仙台市の園芸店、岩手県滝沢市の住宅地、島根県益田市の保育所付近など、人間の生活圏の奥深くまでクマが侵入している事例が複数確認された。これは、クマが人間を恐れない「アーバンベア化」の兆候とも考えられ、偶発的な遭遇から深刻な人身被害につながるリスクが非常に高い状態にあることを示している。</li>
      </ul>
      <p>総括として、夏の終わりから秋にかけて、クマの出没頻度と人身被害リスクはさらに高まることが予測される。特に、既に市街地近郊での出没や人身被害が発生している地域では、住民への注意喚起の徹底、専門家による迅速な現地調査と危険個体の特定、および適切な個体管理が急務である。今後、全国的に一層の警戒と対策が求められる。</p>

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
          <dd>2026年8月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-22</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-22</dd>
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
