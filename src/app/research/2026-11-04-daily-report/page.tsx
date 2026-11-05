// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月4日 / mode: daily-report / 生成日: 2026-11-05
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-04-daily-report";
const TITLE = "2026年11月4日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月4日における全国のクマ出没・痕跡確認事案は計39件が記録された。人身被害は報告されていないものの、北海道での捕獲事案に加え、秋田県や京都府における果樹被害、市街地・集落内の道路横断や民家敷地への侵入が複数確認されており、生活圏周辺への接近傾向がみられる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-05",
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
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
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
      "title": "2026年11月4日 北海道池田町の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 秋田県鹿角市 十和田錦木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9rQzNEWUMzT1k3d25Kb0JHLU5RY0g3UTM3Ry1fTXlXRnhIbUhpOE9ISkdzNWZwUnRWWTdlTHAzTUxBUWlMeFd2Ym9yYkFvMjBVdnZDLVBzRVg5Tm1lMlY5VDd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 京都府与謝野町 字加悦奥の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 秋田県にかほ市 象潟町小滝の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5UOTNCbE1SRlJUOHZGU2hmNkxvSHV4bEdsX0RaOFJpanNreGxQcUxmdTQzLUlObE9jV0VCdURPVEZYM1hLNkpETlk1cFBmdTl3dE9fNzJSY2N6M1lmdFhSTUk4cGphRVRidU1kNXhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 秋田県秋田市 新屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBOaTQ3QlJOSlFtQmw4ZUJONURHbzZ1SC0zbVJWdmE5cnVEQTh5d0NfMUhhUkI1X194SWZ2cWZQWEdDcDJBMUdZZF90NExRSGU4NjdkWUtHNTdObHNsYzlnT2RJUzQwYTQtUmcxVUFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 長野県長野市 信州新町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5jRkJCeWRINGhGdlBSNW5TemRmRDFnY1YwQmxCb04zX1dJYXp0cGdvY09mZUtJSEZvZ0NJaTVoaTA1TlFoQVpnMDBGM1drYVplRGZRa1JCbGhBcXJOdkFwRnZUR0ZWTlVoQXQtT2JoeXE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 島根県奥出雲町 奥出雲町竹崎で1頭の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 北海道斜里町 峰浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPTlVCZ2Z3ZDZRVkFCd185dmhidkdDRTRIYUVWVmMwaEhJa1o3T19VRVhWM1Zmdk9fQUs1YVJtYXVMeEc4ZVBQOFBXcUY1NjJIenppR1NmS2xxM054Y1BsR0xua1RnclBUdFNmYXdCbS15UGE0VUp1MkIza1pmdW5mb0M2UVpkRzhUdkNUWldqcmVnNUxFQXo3eklPcTN4MWZDcDBKQi12cFA5SndtOHkzcEJlWkxZZ3lycHF4cjViT2p2MGpuR0ZDQTVNUGlrY3RvUm03TVd1bEd6bU5MMHh5djRPQjNXazB0WGlOLWlVeVFMQdIBogFBVV95cUxQb3hGbVBGY2dsWGxlT2ZuUXJnR3RjVnZmdWNvZ1VHb3RCYmlFUkpJVWxJZ0hNMVJzWWpkRzRnTFI2OWthcXl2bUdTcmFuWjQxdmVTc0lzanJGRUVWMVNYSVhSZTloQmNqRW9CUXNXZDhEM3k0dGtDS09fLWdVMUJrNThkWWpGWE00VXVHdW1tX3NNMmFHU1ZaNXppNWpYWnA0Rmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 北海道積丹町 美国町船澗の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZndpZ3hGS0lJRzh3NmFjYU90S3c0MlEzOUM0a1R4cG9SOVRUNXVGWFdqYnNoUlpEYkJYa2ZyYW5qQ3FPVGNfWGVKN1FCdWxXbnUwcGU5Vm5ReFpZd0J6dVVmQ1AyVWdwZTRGdFp4R1FKd1FWamgwYkVOWmtENWhpQVZvM0QyOUg2MEZTLW15TTNUMFhJckVscUowNnDSAaIBQVVfeXFMT2lGXy13V0QwdDlia3lOT2t3T1dFTUEwdXFqeXNXaktINVdXU2IxRFlFdGtqSU1FQTQ4Rl9yX1A1ZU45RndzTjdqTTNmX0NEUHZxa3A4dHpGbHFVbm56ZVpXcmJHekhCVEFEWEhZdkNzVXNhQVFQNi15WEVpZ3pvQWlCRklzSjhpWVZ1eFpxMnkzMDVFZi1vUXZTM0F1STdhZzB3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 北海道小平町 鬼鹿田代の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWTRnMlExeEZHWmdtbm9uYWRaNVg3MEF4TWg5WWZhMXVOLWxucEl4UGIzTmtZZUMyeG1aa1lIRDJQS2NxTkw0emgyUl8wc0tqZXRlZ2lHcTR3am8zUkFFdDJpaGZGR1JOV0w5X1ZjeVBfOHNGZXpGcy1IYnNEd0d1V2MxLVdzSVltcjZCN1U5QmRtdUVXN3VodGxBSlXSAaIBQVVfeXFMTnQ4Mnh6RnBhNTQyM2h5eV9lUjhkNU9MVFRvRkt3cURnUFJZblZXMC00c1gyLVlCNGlKTm1yckt4VkhCNF9yTFdTOWF4OFRZZFppS3o4S1dLTXpWeVRFdmR4b2lNclJZZHdPRVloM1BYaEJ1NHFWc2xRZEVwc3lfN3NPVk5yQmdiSWRiel80XzFsTm01ZnlFc0lzYjZyRVdmMTVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 北海道別海町 別海寿町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWHI5ZHZaeTRwRWZoSzFzQTZseEhGdTFzRUdMUWVNeXJQdVZWT19qTEI1c2NRNjBnNnc1Mi1kOTNnNlpnaUNiZHdvLXZLWlFtZU5ISmJPVG1QZ09lM3VvVmhCdE9IeGdqSTdrR21BWGdURWRVOTdnTldtMzVLMmtibG1vS1NFUlFzR180alFzd0M5cG5pSUI1RDd6Mi04UUdRd2J2T3VvUUNBSktCeFNWZGtmdTZRQkpLNTBpbjRCZi1rTTVqaExROWVtblY4d0dhUW54ekZ4aWhyVUdOVTBKc0RfRXQxc3RXV3lXSkZ3Yzl1QdIBogFBVV95cUxQbE9STWlfOXYyNE1IUmtySVN6akpRWnZjMkJnYUdlazk1dVdYSGxXQ0Z1RldHTzZoSk4zR3pUanQ4QWZpUy1GME9OMk1sMDVRUVBfX0dtSEMtbWU3YlM3YTJHT1pCMmFOVFhpUGRXVUVlN3lWWGFWblpMTmhrSjJYakNqVmhfUHNmTnFSVXFROVJZTmw5Z19aV2d6RENZYUFNS2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 秋田県鹿角市 八幡平志和前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWUpybXM0ZFBVaWRvX01oZTRubFBDX2JISjlza2JFUUhpREhIdEhHcmQzU3gxUkxRYms2dVNGNkpLZmd3eFNBSGtnWEt6dlROX0xxRmtsZTZLNnRBaGV6cWIwNkdpalNEbXFFMW1fVndpY1pjV05fNE1JOHgxQmlRYnkzMGp1MVN5c2s2RS0zVk1RVXd6Yk9sa2hqMU3SAaIBQVVfeXFMTS05aFY5dVFEMndkOE9JbWFIZXFZQmhoSFZBU2kzOTZjTGxRWHVnQVVDU3QxdWxOa0hFcGNIMmpKWGhsUE5GdURPaXdhazhZM0pHaG0xZ0c0UjRWb2lsekdRZUxCR29tUFAzekdKaGVreDIyeUE5bENHTWVhSmh5M3hGcHdBTXFmbjlqdjg2U3pvZ3ZhMDJ6TUljNlRjcVdHR193?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 岩手県大槌町 赤浜1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPVS1CcURJUU5DN3ZNeGd5NER3WkRzNzFVLVhHTWJtVGdhZndNRkdPalBFQTdJQWQ4RFRUUWxWV0Jzem9fVGZTLUNET21nMGZYWmhYVmxhUWlxekJoUWl0TWVTZWFjWmZScWowa1hXSTRmZUJjMjdkQUVQSm5iV2xIb3NrNk10dkdMOUpZZXZNQ0FUYmRiRVZuWEtBbzA1Vm9KRGlwYkNyUVlUdFBtYUVz0gGiAUFVX3lxTFB6Rnl6UlRHRHJ0VHlIZ2tKdTdfUXhzazNia3hlNEcxNDdIYlJNQkRsdTltQTV3UmZVWE1fLWpfbDhSaDFaLXhIMTg5cUNlYmRsd25kcG55VngyRmg3WWtsMkZva2xDSXdneGpKbjh4UWdUVXpDVjV2NVJGV1JCNWNnTzJ3d2FWOWpxMGRMcW9nc2VYRmgzRVpJT0IweVdrMTg1QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 岩手県花巻市 東和町土沢1区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbkh5TFMwODdndXpNUWg5NUlSQVRLMEg3VXZMWUJrTXlPTURTbEkxWk5jMk1nb2dyY05OSEVseHFROE5JOGJvOVVkNGhhS1hjMjNlS0lCYmVBUXlGMmNQMWVXM3BPeUgzRXZZQWNTY3NaWDFob0hvRjJla2hVQ1lzdXVUM2FEMVZmMDI1Vy1zX1JSdnZqNjhJYVVyUUXSAaIBQVVfeXFMUHFic2F2VVhUZzJSTjYzaEkyOWE5bmxqSkdMTi12ZE1uZFFxSDJoUmJraWVCem44dDhQd1BLUXI0NTJnaXpMZU9BM0YwX2Y2Z0ttWWJTNXJMejRNYTM5dTRxbVVEY3hFS2ktVTdlVERxT0pKN3N2Uk9Wc3gtMEtNRmQtSGhRXzhxYzk4ME9CcHkteXdRdlpMbVQ4V3JWY2J2S3p3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 宮城県仙台市 太白区茂庭原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNajY1MTA4b1YtVFh4ZU1NMnNNOUJsSVpYSW9OZzZkODc4SDhIajN6QnJ2VDJ0d3c0X0drWWxJTGhsYk5uT1pSdWFOS21DbDd0QTFBMEE5RXVValF4c005QzVENUZmaV9PX042WF9zTW14eXVoeVVIUWd1eEJ2MEZQd0F1bEU5LUU1OUFMV0RKR3JHRnc4M2hxbkNqUUHSAaIBQVVfeXFMTVYyUGRNamtpazBUSVFiSTA3aTlFb19sMGFacXRVVDBMdVJfQzVMLUdyUTllNms3eVd2MXA5SDMxT3J1aWJNNnlUU1YyNENnckVTbnkwRy1vd3FHUGMtX2xwbFd0ZFBoUzNpNkFJZG1rNmN4TUdaTEgxLW5CQlVJVjloYUxRck5iSlRNTHhwWFE5bGtlbXhVQzFnV2ZLZkd1MjBn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 宮城県気仙沼市 松崎鶴巻の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPS2Z4Q2pXZWE3WHF4NW8xNFJhYXMtM2w0S3E4UEQtZENJUHZ3aHluZm92bE9ieW5zdUJpQUlDNTB1UE95Qk95STRKdFRjZWF0VTIyaWJXd0phMDVydW5SRHMxR3BLbnN5MHRMbzdqNnNtT0h3RDktZnR6U2pYVmRUUjJ5UHl1TVZBVW8wZS1vNTlVRFFWX0R1VGVVbGIyaXQzdDU0Tzd0bVIzMy1hdzgzSEJjWXNEUkQ3bTVOM3ZHN1dvSUxleEU3b3NTbFViNTBMQVdPamtqS2F3djNNc3VscUJ1OEFERFB1MzBldmc0VjJRZ9IBogFBVV95cUxNNXRDMFU2UC1GeFZNOXd6eG9yZEhzYmpSUktMdUw5OU1oWVNwdFc4amdudk9NSG5sNUpSRXZBblpLZkhZUWQ1VTFlaVBIN1g4bHZPRTFKN09jdTlxRUw1SVg5VUotZHJ0Vks1TzhBMkxHaFhPbXc3ZzZZeXcxX3A0V2puZUFEaDd2cWFtTWszeGt1UURIZEx3WDdXNmhEM1VQYlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 埼玉県秩父市 秩父市大滝字大久保の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 埼玉県秩父市 大滝の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeWRWZXB3LTFIZlNZZ2ZFRWV1QVVPUFFuZFlHZUJKd2FWZEx6QXBobURaNDBlaDFnUW9iQ1dzNTR1dVZVVjhudmNtZ0tWMDhrOGx2bDUzYTRPX1hvRlJrZWJiME1UMWJtWnd6bk9kc01DV1Fqckh0ZHlFaVNOXzhFZ3NPOUJYbFZESmx2OVlQdl9DbWdxTFpwT1VlN1HSAaIBQVVfeXFMTmVpYzQ5c19nT3MteEc0U2l2dDhMbFIzdHpZTTdOS05yUWFlWkJjZk5sSjRQNTllendrTV9QdURmZ3VHS3NUYXZ1dWNfZzY2Y1hLU0haYVg0R2RUX0pNUm1CYjd6VXlOVDBGZ0o0bVZIb0E3UGlucmhHTHBvd0tfaWxWSTJtQ3ZrUEdyYjBfYmxoeXNlNk1MV29ZYVNmUXVIU05B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 埼玉県秩父市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE10OU5UZGdrME5JOVVsd2tiY1ppV2w2WnRWYUxvdE9rTkQwemtLbWVzMDZHYTF3NmMtcmMyVHhEWEM2NTZOU0d4MThkQlgxcV9RX3NyRERtMGNRZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 埼玉県小鹿野町 両神薄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPa3h5WmV0T2lLV1pwT1lTcFZEa0RWOHY5SG1vWmFsOFhrODN3b0xWbnM1amlYZV9vdXhSZnBGXzlfNWVLZnJMcVpLMkFfZWN2S01YMjRRblVQNlNzVXpDeml6TkN0ZW5idVJrZHo2a19HSjR3OWtSZWJVUEFHbFNpN0xQdVdybmVmb3lKU1RzUzl5ZE1RY1ZKel84WEhQdlZocGhWN0RBandId0pfOS05UV85VDhYYnpSc1RMZGl6bktqS0QyTHJIeDFzVndob0lHYzFRd0JkS1BLd3lTdFpydVpnQUU1cTNsbW5BeWZPeW5fZ9IBogFBVV95cUxNRTJ1aEFZYlgtMGRjX182eWlGOWRLRnBKbkFtNnB1VFdRWnNRMmF4TzN4RzlQQ2dKclk2RWF6MWUxa05fb2cwRUhrLVkzelNhT2MyUHJ3cE95eDJ1dTFnY1g4cUdBWWdqOTNod3M4WG9ZVVlpc19vcDdzU1M3TmlYNXU1djA4XzhoRUxhbGl1dXBLeFdLNE1mUTFNUU9XMVpHaFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 群馬県東吾妻町 郷原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNR192a0dKM2xkcVplLXZuS2tWRVNsbVBYQmRIVEE1b2dUc0hXNnNJcnBVbmdoMHdPOUlkbTJDTnBjWnZsNG5iNGl3WlVUUjh4NkxRRTNZZWxNN1NRVmwtQ2RseTZVWHhnY2JCV3l2TjR5Zzhid0ptdmgxeUxfREZlcGVjblpzTDlQaFhVTjRPaTlpQWJXYUZxTHQ1XzHSAaIBQVVfeXFMTmFubFVqQWxFUFl2X0hTbjNBVjVTVnZnY0JUUXVqc05NTF9GQjk2ZzVaLWl6V2JKeDdlOW83Z2MyTFpWeEZhVGlla2NleXZ3N0ZzN0dlLXZTT3BVRFhrTmk3MXZGV19LTGxTSDRZU3FZNmh3Q0tzcFZWdXJfb0RhTXhaem9oLXlKSVVMNDRxcG1uMl9VbklDRTlKRVlIbktsdzVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 神奈川県相模原市 緑区与瀬横橋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNd1Ftel80bjI2VEFmTXdheDJqSjR1RTdZLWJGaHh5TE5OQ3J5SXdxcnF4eF8teFB0ZjFRZ3lDQk1lZG94UVN6LW0yY0dnTkEzVXRqTFFva3lMcDYtWTVXbEpYMThMNTVkajVCSHFtaF9OaXlqRGxLZWhtUVI3MDQyTlVEVFVVYTN6MDJlSF91MmJ6SjJwV3Y2NmlnMnrSAaIBQVVfeXFMTmRmZVBmSk54UGhvdU94UU16b29rMlF0VkRvT29vT2RxaURvSFR5RDR1U01EeDg4enRacmJMdGIzWHJoWW01b2J4VGJZNlJNUG01aDRka1Ryb3BNSXY1SThQU3ZLUUdOUGdRX21GV0c3ZGU4dmlQVFM0WW5wVmlxYmZkRjlkTlhrRFBPWWV6aEhQU245dkFmVk1FUHlBLTlzN1dn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 山梨県大月市 七保町林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZVJ6UEQtVVVGS2dPRUxiRWVMb3RVZzFMRzQyZnhFMlg2Z0dLck1aQ212RUdON0dQLXl4V0RNWVVsbXFRekVwNF9Ec0xEWWgwWFFTaGxabC1uOENyZnJsc1NMcldKdXBqNzlBYU02T1dVN1NUMzA5ZDVsMG0tRF84WFh2SXRyd1J4WEd3dlhqVXNPbkNhUFk1N182U3bSAaIBQVVfeXFMT2hQamdzeVhuNXpncWZVTTZlb1RybHJHSlUzSVRRU1BOZHdpbDJLcHQwOW5MNHdOUlBTQjZaVjhsVWFiRlNKUEYwX0NuMVRldVJ4YzFPNTFCYUdQckd4akpwVnFuSkE4QVMzNmN4Qk1hVVdRYnUwR2xkWmZxblBKc05hLWdBNDQ5LTU4UkRVTkV1UGlpQ005V2tPM0JRWHR4V1B3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 山梨県北杜市 株式会社MWD付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 福井県勝山市 平泉寺町平泉寺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdWRuSklHSWFSdVM5elQ2Qm52cFRNX1dYcENBSDAwMnNPd0UxX2dlaGhNZmtsZ0xrTFFXZEo5bkU4VVNzdTlwUmJuTnhrRlRlcFRadU5DcjJmRkxBWjZaZTFwMWE1QzhEOGpGSkJQanM2bmt5UFozRjgwQ2UyQnZNX0ZlZUk5bTVzYVc3QVcwdEZ6SnF1eDJPUXVhcXLSAaIBQVVfeXFMTUNJT0lyZXJYeW1QUTZJeDFXMC10TFZFWXYtVDExenZyd0NjR1pKRnU0X3YxOEhocHpwMFpYY2xSM2lkUjNYRjhZX1plQno1c2xYbnNLVnlsLUZSc0NZQjJCSHhxbThmUTFoR1ZGRjNRR1FPdFFJUEd6MS1mSHdpNWt4bnJpVVlmMmx1TzJxYUFOMXRTcjdwOUFSdVZ0bUIwa3Jn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 福井県小浜市 深野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdGRFZndsVEh5dzZBSlh0RGFCWUhtdnhsOXlfZlZMRjI3MTB5WFJWVGpncnVKY1ZKYVRTMEJKbVViYUwxcW9FNHFqdERNSmU0bHZkZ1BsRzFOb05rN3JONzRDTW1TWmttcWxOclJuTnZvODN4WTFtLXQzb2JFbzZYdDhjSWkxOXNRVG0yamRsQmZuWjZxcHU3MXE0SWzSAaIBQVVfeXFMTXJ6MDR2SnBqdGNwWFdDNE16UUVERHFPNVVjZGQzNUFRZlozUGJOOUpvYUNHRWtpWXljdnJ4WUp5cU9MRk02X1IxRkN1ZTB5Zy1XZkhCZEY0eVQxdnZGbTRubUVtQU1IRHRicEdUVjV3ci1NVDQ0SnloQUtpR3U4bGZQajBZYnFMTXI3WnlYczZrelZlZFBuck54TEZFNWlFeEp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 福井県小浜市 尾崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYTFXbUpJQVQtd2RRT1g2bk9NbUJmRWh1aHVRb3c2SXV1OTVYNU10QVJ2SC1xcFNRc1ZvVUxwMXhRaF9ULTQwVzUtU3VyM1F4WkNEX2Q2d3d3elVxWjV6NjRfWDdXb25DTlBRRmVJNlVUd1JuRU9nZ2ZtSk5iU01LRHA5WGp3dmtvaE9DbWh5VDMwZ2xWYm1jcEVndGTSAaIBQVVfeXFMT2NleXNacS1jNm1wS01LRWs5WXA5dUY4TjNIcnBwMG83TnJZY0h1eDZvUGdWREJBYlF0aDZyeWhjZGNuWXBEUGRyNVMtdkdRSmFhSGdEZDhSSVRWLWJOZkR6LUpYT3RoZzFmd1dpS1hNNGRLS1c3YzFoUWtsT2h4ck9sRFVRUXhvaWJVbE5rVFQyLVI1akhwVlZ3czNhWTR1Qm9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 新潟県妙高市 東四ツ屋新田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOLWd5bmtjdm1MbWpjcDdDSTEza3V0QmRhcDdwVW5iTTVnNXNOLW1OUzhJWkxMLU0wYzYtYmFtOTJJNHJRb2VHbEZCZW1rZENRRTlOcUg0RnktX1BmSV9oUnZiXy1kYUFEdlZBakpTcWs1U0RnZ2N0ZkhpLWpLS1RUU052czk2WmpNMW1ySm5HZkRqTkhISXliNlFzZjFsZ05zSkJ0STR6aTZ1dEJOVWlrdjVqa1k2SDFvT2RLRkpVcV85ZDF2allER3ZjWmVPazVHZG5wUHBPaUxzZ0Z6MDUxSGRPT1FjS2ROcmpwRWdDZ3lJQdIBogFBVV95cUxPRWxZdlVCOG12eEVyNlEtckplNXhqcjdpTm41Q3U3OGE5bl9ucm9iZEdiTTg3bVJ0NWtIRTkzMUZ5dkZWeTNsUkZyVWFvNGgySlpOdk16NGhRbUYyVHpxQXJFX2tobkg5bUJTZkJ6NGs4MURLbkV5X1VCZnlNbkp3NEZkX0UzRW9qWW8zel9EYUJIWGtrQWYwN2hfX1YydTlmalE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 愛知県豊田市 松平町盗人神の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 三重県多気町 多気町車川（山林）の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 三重県大台町 大台町神滝（山林）の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 兵庫県神河町 猪篠の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOV3MtQ2pHMFZLT0RMeTVOVkNSUjJHX3VlbHA2bHN2bnVlSXhJLUtjM01aWXdBQ2VzbGhINnRDUVN1OGFJTXBUWDNldlRVeFNlRnY3b2pOa2FtZ0FQenlEbWdQVXYtVHlTZDNid1h2VEZNMFJOdUZyQUtLaEVYOEF4X3pLUlNxRDh0OTlwVXY5YUFLMkJDd3k1eVFmWl9BbjY2aEI5ZzhjNjh6SExkZGxOUmlVUzNRanIwZTNQQVhyQnpWYVlJLUg2RHlPbXM5WG5yZGhjMGNqcWlPSHhsRWlLN1drUkg3MHBiVjIzV21YUHd3d9IBogFBVV95cUxNazBsT29DRDlLZHdyWnlBMDBfaWN1U29qY19adlhfcmlCbjhSMFktdDhIYXk4US1xTDFHak56cno5ZVY2d3R6UHBocXhYWU9iZ1FLTUYtZmZWZWtNLVU0OEFZUFdVSnl4azhCa3lGdFNBdDdzeTFaQVNva1RyNWtCMjVJWnpVMzZEWGdxWDhDdEE1dWZ1UjF0MU9qbWp2YVp0ZkE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 兵庫県香美町 村岡区福岡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNFNQOFgzUnlrM2lrclZSNVVYWG91bElGMHF1anBzTWhMeks5SzBVU0NhdEg1YW1UT2ZId1QtbGMyLVRkekM1YUR1T3RiS3NPWkd5cDQtSVpTREhkQldNZFhBdktKNmZSSThJaVJIbGJ0X0Y5M3VGaF9TZElfUUZ4ZndCM2JLVVF4TFA5RlJxT0ZSbm5USGg1OUpqR1jSAaIBQVVfeXFMUGp5cURxNHhoa1NLVVg5WkxmQW5ZLTZYR3VGWHZnaUFVT0xVV2NHZWt5aXlId2RPbDEyMzRtSXhtZEZZRC1EOGgtTExxUDhFeHVSc0dBQjRGWVp0cmZNcy1NMlA5dlU4NGJrV2ktNFdnaVZJSGpPc2VzdVNOUll3aWFIUHBweXg3VTlrQXBMRUlPVEN1RDJMZjV3NzZvM1NZOF9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 兵庫県神戸市 北区道場町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFAxM0t4RVd0RWl3UVVNak40YkVfTGdjcHVMSG9LTWQ5OVgzbEpsTV84dEtVZXVTRTgySUs4djViVm4xRGlBNnJndkswbURLbnFXUVZHZk5Ib1NVTVFSMUJV?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 京都府京丹後市 久美浜町布袋野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNcGFleUUyT205MU1YMlVyR2ZXUzhQU2IzN0dfV0ZvRmI2WDZNRDdGVXRwUjRQZmVRb21ja2M5MEc3dDVNcTR5ZlQ4NXJGdnZneThwcjkwTHIyemF5cUxtQ3FBcTZUdjVyR0FNSG95UjUtbHF0RXhNczN0RHgzV2xWZHlfZTJQXzQxODM5QXROclM3bGZNSzRpOTA3M3V2dmgyeGfSAaIBQVVfeXFMTXBhZXlFMk9tOTFNWDJVckdmV1M4UFNiMzdHX1dGb0ZiNlg2TUQ3RlV0cFI0UGZlUW9tY2tjOTBHN3Q1TXE0eWZUODVyRnZ2Z3k4cHI5MExyMnpheXFMbUNxQXE2VHY1ckdBTUhveVI1LWxxdEV4TXMzdER4M1dsVmR5X2UyUF80MTgzOUF0TnJTN2xmTUs0aTkwNzN1dnZoMnhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 滋賀県高島市 朽木地子原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdlFtdmpXVHdDZWZLQlVDTjZwcFVNaUFvQTNFVVdVempMbDdkTzJWT0lvZzhrSmxQY0JDRWxWbEt2TGRqd2RIMUlvd202dFItVXFpQlhac0NxNUUwb2ZETGhhTTBSV1RvcUp1N29HeTY5cVl0SEJWOXFnMjVueGxNZmhTeEF2YUVxRUdqdE5PemQ1MGVWcVZGQ0E5ZXfSAaIBQVVfeXFMTlpZYS1jNDdUSUhCVXhzQTJVY19ueG5lUjN3VmJUTkJ6QmdtVDBYTDRZY2ZTanc3dDRPY2lPa2tvQXQ5QkJTN2tmaWE5bjZ6REdZQ0FwOHhSY1lzWHl4Mk4xVkhBWnI4R1BZUUxnZm5YZUVKcHd5YU9ocm9jVEJxY0NjMzhJdlNXREpGU2VuZUlQNGFZOTgwNWtDVlMxLXpXVkZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月4日 奈良県宇陀市 榛原石田の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 鳥取県西伯郡伯耆町 清原の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月4日 山口県周南市 鹿野中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMWNjbVhWbG1RTFpEd1dhUXcwVHE2VVFWVUx1bW1OcmE4cXhlcUFIbFRBc2laNGwzOGlfbHBtWEl2SU5kbkhXZjZyak1CMmNIVktjYzBJSXhhbFRNajc5ZWY2cXhodWJaMF9EOG44bzl6ZGNJUm9aLVFSMXBxQTJEN1pteE9SNGlKb3JYTEU2TlNJbzZjZUk3VURlRTfSAaIBQVVfeXFMUDVXUHVmdm5wTU80eW55aHJOWWZXcHkzWHhnbnJicEZfQXlKcFFGTGhaR3FUUWRVdHFuZ05aQTN5aXpsNHF3a3dmM1g2N1dJNy1TMFJZZEVlNUdvenlyU1k0eExkc1lHRGVQNFlTVXR4X1lzTHVLVmNkSUVSbW8yVjF6NmZ4UlBVUmItSW1fOEFqVjdWVUQ1RktsZVFJZ3FYbHhB?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":5},{"pref":"埼玉県","count":4},{"pref":"秋田県","count":4},{"pref":"福井県","count":3},{"pref":"兵庫県","count":3},{"pref":"三重県","count":2},{"pref":"京都府","count":2},{"pref":"山梨県","count":2},{"pref":"岩手県","count":2},{"pref":"宮城県","count":2},{"pref":"島根県","count":1},{"pref":"鳥取県","count":1},{"pref":"奈良県","count":1},{"pref":"山口県","count":1},{"pref":"愛知県","count":1},{"pref":"群馬県","count":1},{"pref":"新潟県","count":1},{"pref":"滋賀県","count":1},{"pref":"神奈川県","count":1},{"pref":"長野県","count":1}];

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
        <span>対象期間: 2026年11月4日</span>
        <span>·</span>
        <span>公開: 2026-11-05</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={39}
        periodLabel={"2026年11月4日"}
      />

      <h2>公表事案の全体概要と主要事案の動向</h2>
      <p>2026年11月4日に集計されたクマの出没・確認件数は全国で39件であった。都道府県別の分布をみると、北海道が5件で最多となり、埼玉県が4件、秋田県が4件、福井県が3件、兵庫県が3件と続いている。さらに三重県、京都府、山梨県、岩手県、宮城県で各2件が記録されたほか、群馬県、神奈川県、新潟県、長野県、愛知県、滋賀県、奈良県、鳥取県、島根県、山口県でも出没や痕跡の確認がなされている。</p>
      <p>当日における重大事案の動向として、人身被害に関する記録は確認されなかった。しかし、北海道池田町富岡地区の山林内において捕獲が1件確認されている（※1）。また、農業被害および生活圏への近接事例として、秋田県鹿角市十和田錦木では畑のリンゴ被害が報告され（※2）、京都府与謝野町字加悦奥においても果樹の被害が発見されている（※3）。</p>
      <p>さらに、人や車両が通行する道路および居住地への侵入事例も複数発生している。秋田県にかほ市象潟町小滝では民家敷地内で2頭のクマが目撃されたほか（※4）、秋田県秋田市新屋では体長約1メートルのクマ1頭が県道を横切る様子が確認され、警察による注意喚起が行われた（※5）。長野県長野市信州新町では空き家の庭で1頭が目撃されており（※6）、島根県奥出雲町竹崎では県道108号から東に500メートル付近の場所で1頭が目撃された（※7）。これらは人為的空間と野生動物の活動圏が交錯する地点での事案として注視される。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>北海道地域</h3>
      <p>北海道では計5件が記録された。池田町富岡地区では山林内での捕獲が11月4日に確認された（※1）。目撃情報としては、斜里町峰浜（※8）、積丹町美国町船澗（※9）、小平町鬼鹿田代（※10）でそれぞれ出没が報じられている。また別海町別海寿町ではクマ出没の可能性が報じられた（※11）。道内各地の広域に分散して出没および生息痕跡・捕獲事案が記録されている。</p>
      <h3>東北地域</h3>
      <p>東北地域では秋田県4件、岩手県2件、宮城県2件の計8件が記録された。秋田県においては、にかほ市象潟町小滝の民家敷地内における2頭の目撃（※4）や、秋田市新屋の県道を横断する体長約1メートルのクマの目撃（※5）など、生活動線への浸入が目立つ。鹿角市では八幡平志和前での出没（※12）に加え、十和田錦木において畑のリンゴが被害に遭う事案が発生した（※2）。岩手県では大槌町赤浜1丁目（※13）および花巻市東和町土沢1区（※14）で出没が確認された。宮城県では仙台市太白区茂庭原（※15）や気仙沼市松崎鶴巻（※16）で出没が報じられており、都市近郊や沿岸部を含む地域での確認がみられる。</p>
      <h3>関東地域</h3>
      <p>関東地域では埼玉県4件、群馬県1件、神奈川県1件の計6件が報告された。埼玉県では秩父市大滝地区において近所で働いている者による目撃（※17）や出没の報道（※18）があり、発生日は不明ながら秩父市内でクマの目撃情報が報じられた事案もある（※19）。また小鹿野町両神薄では11月3日から4日にかけてクマ出没が報じられた（※20）。群馬県では東吾妻町郷原（※21）、神奈川県では相模原市緑区与瀬横橋地区（※22）で出没が確認されており、山間部から集落にかけての境界域での出没が継続している。</p>
      <h3>中部地域</h3>
      <p>中部地域では福井県3件、山梨県2件、三重県2件、新潟県1件、長野県1件、愛知県1件の計10件が記録された。山梨県では大月市七保町林での出没報道（※23）や、北杜市内の事業所付近における目撃（※24）があった。福井県では勝山市平泉寺町平泉寺（※25）、小浜市深野（※26）、小浜市尾崎（※27）で出没が相次いだ。長野県では長野市信州新町の空き家の庭で1頭が目撃された（※6）。新潟県では妙高市東四ツ屋新田での出没が報じられた（※28）。愛知県では豊田市松平町盗人神で道路を横切るクマらしき動物1頭が確認されている（※29）。三重県では多気町車川の山林で足跡（※30）、大台町神滝の山林で目視等（※31）が記録され、山林環境内での痕跡把握がなされている。</p>
      <h3>関西地域</h3>
      <p>関西地域では兵庫県3件、京都府2件、滋賀県1件、奈良県1件の計7件が記録された。兵庫県では神河町猪篠（※32）、香美町村岡区福岡（※33）で出没が報じられたほか、神戸市北区道場町において発生日は不明ながらクマが確認されたと報じられた（※34）。京都府では京丹後市久美浜町布袋野での出没（※35）に加え、与謝野町字加悦奥で果樹被害が確認された（※3）。滋賀県では高島市朽木地子原で出没が報じられ（※36）、奈良県では宇陀市榛原石田で南の方へ走る個体が確認されている（※37）。</p>
      <h3>中国・四国・九州地域</h3>
      <p>中国地域では計3件が記録された。島根県奥出雲町竹崎では午後4時40分ごろに県道108号から東に500メートル付近で1頭が目撃された（※7）。鳥取県西伯郡伯耆町清原では子グマらしき動物が確認された（※38）。山口県周南市鹿野中ではクマの出没痕跡が報じられている（※39）。なお、当日のデータにおいて四国地域および九州地域に該当する出没・確認記録は存在しない。</p>
      <h2>主要な出没・確認事案一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村 / 地区</th>
              <th className="px-3 py-2">事案区分</th>
              <th className="px-3 py-2">主な状況・内容</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">池田町 / 富岡地区</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">山林内で11月4日に確認（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">にかほ市 / 象潟町小滝</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">民家敷地内で2頭目撃（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">秋田市 / 新屋</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">県道を横切る体長約1メートルの1頭（※5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">鹿角市 / 十和田錦木</td><td className="px-3 py-2 text-xs">農業被害</td><td className="px-3 py-2 text-xs">畑のリンゴ被害（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">長野市 / 信州新町</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">空き家の庭で1頭（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">与謝野町 / 字加悦奥</td><td className="px-3 py-2 text-xs">農業被害</td><td className="px-3 py-2 text-xs">果樹の被害が発見（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">奥出雲町 / 竹崎</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">県道108号東方約500m付近で1頭（※7）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>11月上旬という季節要因において、採食行動に関連する農作物への接近が確認されている。秋田県鹿角市での畑のリンゴ被害（※2）や京都府与謝野町での果樹被害（※3）の記録が示すように、人為的に管理されている果樹資源への執着が観察される。これらの果樹が存在する空間は人間の生活域や農地と直接接しているため、採食を目的とした誘引が生活圏への出没リスクを高める要因となっている。</p>
      <p>また、人口圏への接近度に関しても高い警戒を要する状況がみられる。民家の敷地内への侵入（秋田県にかほ市）（※4）や空き家の庭での目撃（長野県長野市）（※6）は、集落・居住空間内部まで個体が侵入している実態を示している。さらに、秋田市新屋における県道横断（※5）、愛知県豊田市における道路横断（※29）、島根県奥出雲町の県道至近での目撃（※7）など、道路網と交差する事案が複数発生している。</p>
      <p>山林内での足跡確認（三重県多気町）（※30）や出没痕跡（山口県周南市）（※39）のように、直接的な視認に至らない潜在的な活動の兆候も各地で把握されている。人身被害自体は発生していないものの、果樹等への誘引、集落居住地への立ち入り、道路横断が複合的に記録されていることから、地域住民の生活動線における不意の遭遇リスクが存在しており、継続した監視と警戒体制の維持が求められる。</p>

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
          <dd>2026年11月4日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-05</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-05</dd>
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
