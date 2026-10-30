// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月21日 / mode: daily-report / 生成日: 2026-09-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-21-daily-report";
const TITLE = "2026年9月21日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月21日に記録されたクマ出没事案は全国で計48件に上り、北海道の10件を筆頭に宮城県、長野県、岩手県などで多くの出没が確認された。漁港や商業施設周辺、路線バス内といった人為的空間への侵入事案も含まれており、生息域周辺のみならず生活圏における監視体制の重要性が示されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-22",
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
  datePublished: "2026-09-22",
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
      "title": "2026年9月21日 宮城県塩釜市 漁港の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBnSHFsblVoV3dZVTFRSHFIaGM2YUpsMzFxdXBKSzZjQ0tvV0hmTHdJUVpTNGhMNXp2ajdhMTB6eDBMRVduM0RhUHVEc3FSbEtTYkVheFMwT2IwV2p5RzVmeEZpaDByZGVYSlBEOTdWUGZFd1FLNjVHczB2QXh0eEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 岩手県盛岡市 渋民の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPd1F6Z1V6THBYMF9yMExtbmNPcWdIdDFXeEdUdVRQbmtXOGVmX0J3cDlPcXhPVmJWUzhHRXJVeEQ0X3R3WEpYUUN6QXVjSUZFQW9LUHctYWFOeUxEekhtbUJtcTZGS0NGVmNEaExUcVhkZFZOOWhDTTMyalRTZ1ZuSHlvYmJ4SWs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 岩手県宮古市 スーパー付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5iUjdXbXlDM2w2ZUhRejc1UEZOdno3ek1lRDZjckhfU25QTlNyN21FeVBfUGw0dHpjSUN5Z2o1STZiWjNEenZiTC05U2Q3d0pudHdpV0g2Q3FxQUpZYjdPTw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 京都府宮津市 バス内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOckhqSG5HSktHRW9HWWh2MTg3aDZsX0xkOFNrcTFVWnBZSDRVeUtydVdKUUZ4bDNkaHZzVEQwSkN4NWVuTllGR2hTUHZVZko5QzRKb2xHQzU3RVViYXo2SXVHejhKcXBab2FmN3dUVVlIeXR5ck14UFRrVkpSWUFJVzJ1b0tLbHp3aVBkbmloMGdQRTZFOUVkS2lOb0fSAaIBQVVfeXFMTk5SNW9UbGVIVzJzRjFlQjlsWkN3NHJ3Mk42Q2Y5SGJhb211U2w3QmJHQmQ4b1gxaXd2UmtDSEJfUmZMVThNX1hGS3o2b0Z3bDExY2t2MHZvbXBWR3dDcnN2cFNhWjhFZDBndEcyZnpNb0dBNlpNNUdidXBQZXZSWWhVU2JBWXVVVms5VVBYNWs5MGxvV29ZelN2YlFMdHd3aFZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 山口県萩市 大字佐々並の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 北海道石狩市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE85SzE4OWZKcGxIR0UtVjJsQnJLb3U3czJlUjZ0d1luZ2dBN3FiWUtRWjBJZVRfdmV5RHBTVlNFY2ZTUmtPN3ZrNnQ2Vll6dFNiV3lwODJ1ZnVLenVxNVh0eV9YUEZHUndfNE1WVVVLMG0xR3NUWDdJNmdqWExkcUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 北海道根室市 酪陽の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVndQeHM5Q1FwYjFFOE9lZkpsNFBPbU02WHhvNjY3UmNOWWFEWXQyeEdXMVdjRk5LVFpHaEtiNXRYTWlqS0FNbmE4M1lRTk40eHNTZmVCcFZXY1VKaTZTazhWdEJ6SzlyUkJkRE9wUUJTYWFsd1h6NkJNejhtektZLVVJamE2d05kMTF0SnNaazcwOElsUHZUWDZxdDjSAaIBQVVfeXFMTTl1X2RYVk1aX2V6aVB5a3M1UkJqZUtsaTk5ejRTOTcyd0JWTE04QmtuVzVmZEtuU25MSUFKMnluaEQxejZFV3FXR3phdjV4OEdIX0Y2YUs4Z1Q2VmpUem5aSVJCMWxIODY0UUVGX00xTzFmMnFxaUdmNFBOX1BlWWZmSFRGaXc1cGh1LVQ2cFByb3hLYnBUamViMVJrVDNCWHln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 北海道根室市 川口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQOFo1Y0kwMmZoZWhaQW9MSG5HbE01NFhsbG9VTXdWR0xyZnNCM0k1NktGZzUtVERqZ0Nld3BTRlZYWUJaSkFOUEc4MUhnckNNYVhwT2JMcnk1ZGFYcXZiSUo3M0NlQlRPUXpsNkVDenFuOHh0WnBNTDFKSlFoZHBsRi1WeW1adGMwSDFZTUc0bkttMFg2eFI1a21IdTFzMUlpTG5SMVhJYjVIOTlhRXpj0gGiAUFVX3lxTE1UR01UYWQ4c0FoT241X1BaOFpMcDRiUXR1N3dhaDd2ZXdkSkVxQ3h6NFFvTS1HRGpMTzFmQjNaa3gyNl9NQ25QNmtBcDZjY1VIYUFCSW9CRFQtczhZaWVOcmViVDVVbWRKQzFqOUt6MlBwS0R1eDJiT0E0Z3dqeXo1Nll3bEZqeVlzaHpBWU1HMnRWNXUzQW5RTTFRNFVpZlI5Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 北海道中札内村 南札内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdUwzbThLeU03ckRxUGNTUElqRFktOVpJQi1nQjhSQm9CSWJGY19DX0dxbzZsTmU2NkREZWdFdVlqbFlPVjlRRnEwQUNBSHFxWDQ3d2dYMnVrR2JYdHg1TDA5eTZFZlFPTDY1V3lOX2p5RlU4U3JGbVI3ZDdTemNEd3VfSmRlYzdBZlpRTVJLNnhiMHhWa1hWNDNBTTHSAaIBQVVfeXFMT0E5b09JM3g1dHJ1SEstbHdxc2NPZ3pYR0N5WGExWlhfWW5oUzdGTFJNcVNJd0VocS1KZ19sTE1tU08wLW5UeWNGU1JZRkVTUzI2eUlFeVpJd1VUaVBLaE0xLUVYS25MakZqTUZYMGdnMzVKVHpXaWJTWjY0bnAzREFUNzd3NlF6Z29GUGdWU2NnRnBqYXllZm8yaDVpY3dDbnVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 北海道猿払村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE96Q3A2Yzh6NklWeGU3eWFQS204bzRxZjZualdvQ1VacC1rbWM3RVg0anVSRWpyVWFiSC1LN1Z4RVM4bFh2bmcxazc4c1JsdmJWS0hFQTVIRXppQ2dMVUViUnB0MjcxWmQ3SzNhRXc2dEkxSWluZDJ5aHZqX0VZQ0k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 宮城県山元町 鷲足山崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOT1k4RGxTTko0SWFIWDZjcUE4dkc1bUZEdFRpT080UjlPMzdLWnJYX0tqcHJISkN0WTBNM2pNQlQ4cGtlTkM2R243ZUdMSUZvQmhHV2dyY3BqWkJCNlc5ZDBfbmN0ZVlKelFJY0hEYk5BTDVDNDhQY0N4d0RvdTZlWkRHc2NHWFRIalBTS01pOEgxcTV1aGd2VmdtOHliRmFPbWltT3pmZHNpNUt4Vi15a3Z1bkRjVTJCN190NEFkTVVuZzFWb0pKbHAzTmRoUDF2X0gydGhYQU16QkVoRjA2dk9CMnI1Y2dJV2lva2w2aU1RZ9IBogFBVV95cUxQNlhyd0g4Q3Y2UFB2dkl4RE5FbTdkdWc3MXM1NlFXRGthbUZabWtRTTgxbGpZbm8xZ2RsYXFONDJpMXhGYVdKMm5EZUdvdG42RjJzMkVWb05WUHlST3VqbTVWbWZwRlkwdzZVcXhUWEhyOVJ5Y2JOUEFzZEQ1VE5DR3RWU2NYSERKcUhCYno3LXlPd0tkLWU4RHJscm5oTzVhT3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 宮城県山元町 アップルラインの出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQOXg0SFZtcWlhQW4tZ3gtWHFsVlYtMTZVYThFeWFSMVFxVlZ6cjlMdVRwYVMtY3BIaDFYZ09MdWMtT1lfd3ZZaHRXQ0U5UlAyQ01xa3dzYjB2d1RkVU1ZVGhWVlZCZ2V4dzJoR2lPdG1aODFYaGZpczVhVEx0czZ3aTF6UElpTEk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 宮城県東松島市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 宮城県仙台市青葉区の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 岩手県奥州市 江刺岩谷堂下苗代沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYzB0Ml9aeGdwaFQ3WW80THVXTVJjQnpXVk8xX3Y2T2xUREtXLXBUZTRlOTV2NHp4aXc5U0gwbDhUMlF5UjZ0VkRLMUR2S0o2bDRkajZEa2RrXy0ycVFZa3NuT0pJbnpXZ3hXRWg4VHVaNlRaeTliMXhUWWQxY25nWDVVQ2pGTUEzdWRxS1M0VWxuNEo4OXFqZ0VHbjXSAaIBQVVfeXFMUFMxYWxxNmlyVG8zVHVfOHZZVDVLNVExVWNGMjR0aUhTY0ZpZHVidWdPWElEeHdOUDVoWmJEa0xWNUNraU4tTVZpc2R1ZUN5X2FpUHBmWHdudmdRanBnS2RVTXoyeG5kYkdDNE1iN0ZZV0VFNzVQXzJ0VjlwN1FaWTM1N2lNU2JPZG9Qcm5kcHNRSXFvdzFSQlJOSnNjSE9XeTVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 岩手県北上市 和賀町横川目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQb1RaRE9lRTJfODNtS29MYmdjT2lMZkxhYlRWT2hLa204bHVpNTh2STVEdVg0VHY1SHJ3TU5ETVZTSGI2dThSSExnQWYxNEEzdFppOGhPRUpMLVBRU3l2TmRlRzlsR1Zlbk5TUm1fSjd3TkxnZ1NReDNtc3JmOW1VM1U5NXc4VFlRcVA5YVlyWkFaZ3FSWHAzM2gtekbSAaIBQVVfeXFMTW5UZ3RETGRoRWt0dmhxaVdaOUhqWVpEQVdORnZNYnpjeXFISjJWbzVmd0RpeFNTNG9EVDl0S1AweHFEQjNuaUNkbG9Cckl6OWcwQlFwMkRUN1hUWTFjWkdCSThRYTBfakp6QXNSeC1lWk5nZ3N5YkMtUlZRZGlISUdPV2wyajVQd202S3hOZjdHSXh4UGVXZkVkS2c5SHJCc1dn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 秋田県秋田市 河辺三内丸舞口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb1dLUmlXeFFqNDBCRDd3N0RGOWl0VXFlaEttOE9KOVU0RHBwWVA1OGNMRWFrbmpJNGNHZ3FaeDkxUmctZFFVV0ljZ005blNtVEYtTkVMNmVpRkFGNHBwVTFla3BaaUV3TEFtRmtIYjQyTWg2NnM2N3A2X2ZiY0JmdnhoWHVocDFwQzJNUE8xQ0NpTDZRZnhmdlc2RFLSAaIBQVVfeXFMTUZPUllXQjR4czBjR09NYVQyVjZVaDRKTldydjMxVGdsSFNIREQxLU85NjZud3EwU0IyNU5Fc2I5S2Zpcm44THhaSlVEQjRMSXBvblFsZjNlYmJzd1pRRDlwNEl0VXFVNjM2a1pLU3p0ZVQxZWRiYWhFZkdLRTdTYW5Idjh0WUV3TEFFTjZtOUNBQzh6eHA3anRhaFhqRWZhdXlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 栃木県佐野市 小中町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRURHaFF5Y0RPNy1iQmI4ZU13bU41YUQ2WnFvYzY1MnZEMlBpbl9SSjFqcE5aRHJ4cHdYbGs2MktLdjJaUWpNdHBLZ05TWXdoaVFfMndzd1pfWGRYZ3dHNGdpaTV1czdKMXg3Z1lLSS1mQ3ZJR3pjZVFHcXFuczUyMFJSR0lBblV1YlZkTW4zTTBORXJ0eGg5WE03bGHSAaIBQVVfeXFMUDQtYUF1R3NzSDVJLTYtZU8zZm5paHViSU9VOUtyYUxwNDVCZ2tKMVZqdnZDLXIzbFhJcFpnUXFBemgzM3BtTU41WE9mNDhobVZjd2Z3dXBYZ1lncVJKX1dIa3E0VVJoZTYwQU81QUxNUHRtN1BxRUNRX25wejhzRkk0eWlRRE8ybXgzZmVZT3NsMDJCMTRodW90dHp5dUZQR213?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 栃木県佐野市 小中町・旗川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9mTWZxN2xMc1JKVEpSVUlpbGMzUWN5SDRGcXd5eGxSbmVLMndNSmRSYWVlWXRRQlpBSkVIQmRLVXdKUk9DT2lLc3RjT3Y0eTlvLWpqU1NYeEdrRERt?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 栃木県佐野市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 神奈川県相模原市 緑区長竹の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNcjFSalJ2dU5XYlRuNWJrakdLNUtHdEMzMGczRlhYMTlJVjNOZ3N5M3pGb0ZkZzdya3BRUElkRWFqWGNMWFRRMnpiZnBLVzlMSTNIblRSZVVRdGZVdVNfNlRIQzdGZGpPYVZRbkJkbHVHcHdfZUd5RWxLUHNXcHNaNFBQaVJFOURHa2Q3X3hidGhpRFdoNU9laElOZ0s5dXBkN3JsMEZVVWtRZ0E1Y0dyTHhaVEdKVHJ3TDExanlnM0xGb2NrWkN6RFpHVjNpM3FyM3c1VEtiNk9fS1RtLWx1S3hIT1gzUnZtdENRTml4M01tQdIBogFBVV95cUxPcGdxQWpHcTNRRkhOX1gweHlCNERWUE5JWmJoMC1FNWU1Q0tBT0hOcFJVc3ZCQlNqWFBYX0M1TVFlZVRRZ212T1BIdDk3Ti1xUXFsYXlLSXBiNW1WNUxpaGtkSnB6TU14ZDZzZWRxZVVQeEZ5XzBORHdHZkdfaUhzNnpQUDdkNFEtbWJaVGF1TzA1NmZjNEJKOWk4bk5jVmdNLWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 長野県軽井沢町 軽井沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMnRpTW1BMjF4LWRPdGtkZDJULWZiZm00ckRYUnkwdGpvdTEyaDdidk5aUjkzWGxWY1pTaWhEemZjdFlidEVEQ0wxbjhyYWNCM3A1RWtpRFRDMDd4Y3QtaC1HbWFKOUVZZnJERTl1Tjd0N2RLc1BScWFJazg4RExKNGRwR1hadzFFbl8xN2ZSTE53TGd2akJuTEdNLW3SAaIBQVVfeXFMUGxnYThnTjhXTUpFbTl5U3NtTUh1a2JZMURNcFVySm9TYmVRVk44eURFdFk2eDBXT2FLR20yZEZFaEl5Q01ZZjJROHFaN3VBa0U5cnc2dHhlSFBhNjNHdkFweUk0dVVwYk9YenN5MXJfZTlSZldnb090U1NpNTJOYl9GNVBjZnFjWWhZSVBhZ3NGOWVnT2RNcy1kTm5hSmozVFd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 長野県大町市 美麻青具の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeDF1QlMwWDdxMnFHaUU0S240cU9jbk5mZzNDSHVMMVhQUm9LQVlHSzk1T1poLUcySTFwUUZiTWE2SFc1T05LeDl3ZmgxTTk5RlQ0bjllbkhWVk0tRmhhQUs0TWJwNnQ0V3J5NE1GaFFtdE9kYk1EQTBXY1hkaWRUTEZqd0RhVkd0MjBwbm5qdU1ySEZJSmNKQUxqTUPSAaIBQVVfeXFMUF9rdS1mM0lhTk14ZnB1RVpWQ0VLN1hRejJYSEhubG5Yend6bmhEYTZWWmtjT3A5ZG5pMktnMUhVdHZ1WTFOcURMOXdsV1hlakJXYjB0eGpWaVRQR25qbXRnSlBmWlVZbXBwaW5mbi11VFpFUk5FUTBKWHhpVnJBcGxFNVFXenJwekxKT041enRvQ2Z3dzBPcmFyWjFXWklVa09B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 長野県塩尻市 下西条の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNM05uTVFxSjNOcTFGZTdCYkZiRUhaY0VBUi1Bcm1DY3hiaG01Y043b3psSTg3YUpEQ1JGdmZXa2JaTXFkb3BiUWNCY29CajZRNlo3UnpDMGs1UGQ3bUI3S21DSVd0aXZoRXlid1hpUHJJdFczSDAwWW14N3VmQXkzalVwNkdlNzkyYUpzUHhkY2VhbFppZ2c2WnZpMTfSAaIBQVVfeXFMTVgyaUpQaUY1cHg1TGpRaE02V1BLV3FGTjFtTDhkaWYzQUs3YXAyUXBrNU5ueGF2cWdldzZUUDJwaUgtQXhRUnNyNGRBRUFYakxXMG1lREdrc0FVT3dmOXF6cThvMDBxTjB1aEZjaXNpWG5QSjQwUkxJUXhkNnliRG9QVmN4Um9oRE0yNFppXzJOZzJCRjZlSERzNklZclZaTFdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 長野県飯田市 松尾清水の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaElRUXcxWXA4SnNCTUp3aTZKank2aXFqME0tdDJJUWJwU0JRWDhUdE9KRm0tWkNYYUNTTmlSUTl4eTRRQjZvUHE4NFRObjIzdl9VTEpIZkQ5aEU3dkF3aHd1S2ZEaUtBMGFKZjJVaHZvUHdvRV9WdzZ3QUc3ZllURW52Szg0Z2JXRjAwQjJoYVJqeTRwN2xMQ0JRQWvSAaIBQVVfeXFMT0JORlhiNzB3a1Vsa3pmSzlhdVA0U29TUTBKNEVRNmFQOUdQakM4N2t4azUxczAyaDV3dl9zcHhVMXVteUtqVFRiam5tNkw1OW9tMnprNFYtWFZORTdaMTFaa3VjTUhYYllFWWJOVkx0ZzlYbERkRTB2bmNjRklxQjdhNkxLRkhCSU9pZGxQSUU2Sk8tZjl1RXlVNUgzWVdoUWRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 長野県飯田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFAzUy1McnlwSEJlUXUtZ3JacUxYYWdqUmlzbmdmemNzSkNHOERnR290UE14bmJlVnNzWndjUGxKQ0FXc21JUVJsM2ZXMWM2Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 福井県南越前町 奥野々の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOUDhtQWZEOUxnd09hWHQ3WUJTdjZqX0NJMVBpNUduT28zNTNzbjF0M2pCR2ljVUlaSXdMbFdlb2RBS0Q1R3dxMGtrYmFqYUVLNVpzYTQ2SnhqRmRFdFpyM2g1OGNDVmd2WUpsR1psLVh6X0F4eVBBNDBwRlJSUFVOMTBKcTBTS1psdzYwS3BjTlBya2t0VFJqaVBIbk9hVHI3MEI3MllfdUdENmd2aGxsakFrQnl6MHp6WGJkdmg1YmJOZGpBcl9lOERLQVZmWDBXTmEwVzQ2ckNVUmlSeWRWNFI4LVQ5bGc1NHU3a25mSk1uUdIBogFBVV95cUxOODYxcDkyZ0l6SUY4ZkEySThlR090d3V3WnNlQmVCUlBWbnpCVm1VY2tGbWRGWnVrbVN0bjIzS0lMcUpxUy1hU3ZfU1dFNjhId2J6N1FLS0FLSXRYamtnV2FORkhGbXl5SDNKSFhNZ3VlQmxleWdqZ1BPSXZNeDJQR1hyZkVuNVF2UHlHYjUyVmNMcnVERzFWQ3FWS0VTSGFONGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 福井県美浜町 笹田の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 福井県南越前町 奥野々地係の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 新潟県加茂市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE4ySS1LWHk5S1JmX3RMOThRTklGU2ZxOUVFMVVScWZuVFV1bjl2Wkt2emJtUzRmbGJ0T1hfeUlwYTl0LXpvclJ6OTdNS1lzVnIwTWRZeG5DZXRUeVdsQi1oMkllbkljWWMzLUlORGV2b1NXdzhsc2F0M9IBfkFVX3lxTE1KU3VkaklRY3VpU1B0NkkzOVNOQXdkeUNzUUY3X3BCNzgyYkpWR3k3bjdMRFIwV1lla1VZbFFvS3pMcndIMFFoUXFFOFlyVTRvUjljU19qcUJJQV9RbXh4SDJHSzV2ZnVZNkdwQU1fcDM0M2lSa29SNDluOWpxUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 新潟県加茂市 下高柳の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 山梨県都留市 法能の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWjEyblF3ZVJMdlEzVXM5bUE1bWcxWTJEeHp6Sjc5ZmxqWmhDTWh6OG9saVRIeVQ0TmZIRjZMOFRObmlSODlwVmRxcW9qdWJOQ3lIZkFtcThSaUxmSzUxakhKeWhjd2d2M0s5TFdaR2NEbEZpZmE0V3ZpSDAycjdEa1BKODBGRkF5VzU1NnFNbUhOOEUwUGpKV1FVZXHSAaIBQVVfeXFMT3hkNTNlTng5WTU5NFNFdDVpSFRJR05rWTZ2LVowSDNxWElmOWJLN3ktNEJmdFE1ZFlkd0puM1dONnpIVEo2RUxzaDBONm9UbzVkLVo1QnY5c2ZNZkFnNlZJWEJ6S2VTRjRMVXlPTTZISVFVOGZLSXJ6eTlrbUg5QlNmZXVieGRYV0xLaExoZmtMZGlrVE4xVmtnV1g1aU9yU1dB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 愛知県豊田市 大野瀬町タカ子の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 岐阜県恵那市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 三重県紀北町 紀北町相賀（山林）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 奈良県下北山村 寺垣内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOEVTRjlMT3lwMmIwSzhITm9pb1BOMUU2TjRIVXBFSDF3UnFmSU41S19FN3ltenA5YmVCbWRFeFJtbVdSdk1KQjJyYzRUU2tUY2tjcC1aSkxzVTdkVGg5dUI4VW9CUjFBb0taa3ZsSDVGRnhYQ2FkT3lYNC1lVXJfYVBzcHBfcjdDQ3VLQjFFLXBhQkpabW9acjM1U0bSAaIBQVVfeXFMT3FyYnZaamxwS19xeFk1ckJQVkJXRXJwdktNWEJGOGFrR2RrRTdlMFVTWW9ucjJLaTQyTG5mQnRxZ1BYWEpwZ04yWGZXNzNaVHJmT2kzeWlUQVlfeWdadGUwSU5HQ0h0RnJqU09iUGVTWjdvTHJDakJfdkJteFJhQlFybVpLZURSblNvSUhlRkItdFI3UUI1YVc5dXhtanVMNEJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 奈良県上北山村 西原の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 和歌山県田辺市 中辺路町栗栖川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVzlmdkZJeExKWUJuWGdKbWx4QWFobkF5WGV5V2NyUEFCUHdIWUluaGd3aFYxaFBCQndGa09maThsbjhXdTRXM1FMZHhXNUFUYnBzd1FBQ2c1TzZVZTFFZzBHdHRscnhsSEN2VVBiVjRQUzFRS19CdmZjSWY5XzBYM1RGR0J2WllYNlJKcG1CUUlnLWItbGlJMDRFWWLSAaIBQVVfeXFMUEYwLWRPZGNVd0NXaVZpNjlUNzI4bjVwdkZOOHh4cmU5X3FvR1NxUjZFN1E5M2FyMnVMZVRpMGdtcmxBTUMyUkxxdEdoWjRLdXJiNmFVNmd0bU40OUJXVHF5RjVsLTh4NU11VWI1TmpIczk5a2p0Y2o5S0gtMFlEN3EzbXR5QVlTX0RVQWJnc2c4ZDVaMHMtVC16WWVHd3ZVVkpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 兵庫県神河町 川上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZjhITldxRTF1MldORFNhMDYzbzhyOWhOY2xFVlJPS1d3Y2lDVjhkNlRpQ2s2X2g1a0I4UEVWUkhUcHhFbGlFU2Ftem9JT2pLNldoMkZQYWt3aUhKaWZfMm1VRmItZERSRDFfNUhxMXpGcWxFZ3FUZC13d0RoNUgyVlhPWVZ2a2Y2eXpPZldRR1BqX1JJcVlJYVB4VDXSAaIBQVVfeXFMT1FLYWNEZnk4UV90cG5pMXdPMlE1X3RoV1hENWJaTjhlUlRRTlh5WTBqZzZic3NPZXBaQl9OZDRCT3luN25JS3ZRZ0lVZmF6Ym1OQkNaMFJvTDBDQ2gwTDR1b2lqNEhORlUySlJ3QWxHQXd0UG5aMEI1X2M5Z2FVaHVFZDhiQ0xERWJ1RC1JSjZJcnp6bzV2cFNORkZqaGd4MDd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 島根県雲南市 掛合町松笠の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVXIzYkZXaHpXbm5iWUkzV1JRcWppd0xsalNlclhzZ3l5U2pkRlJDbXAwUlBEbDZRQUs5eDRQNGl1NGc3eWhPWFdMbWZlN2ZZNE1TYzFiQWs3VmlmN2p2RTZHNGlJQUh3aHRzSWFURmNVU0F0ZXliQWhzTFVpaG9LalNxOEdYSVdpbGtZbUFSalpieTk0UE9rY3lZOVHSAaIBQVVfeXFMUGtidk9sWk9VT2UwWFZ1YmlCOVBsUmpqeWo4Y05nWVA1VVNaSEdlRUdJUDdqWW1FNTBkLVZ0bTZFeWpDSG53MDV1VEdQbTVramdqUkN2bFhjNjRfYVFXMXNPbG1XX3llMjRMWkJHQjctb29MbHE4eFRuV2dPeVJYdXZuOVRMOHNlVHdWUHNHUXFJV0J4NXgwcW9od3gyWWY1cnBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 島根県雲南市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1UZGF6a2lSU3lMbjA4SHNVYUthcm9aUXZNNUEzZWVheTYtMjlfRjdwaFR2d0NkdVZHZUxoRjB0Y3g3TVZkeDU2VkNma0FtMlVIQjAweE1SYXZKQlM5ZU42dVdxZVN1cVdEMm9iZDhyenVLVmwtdmFQWTNtSmVocHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月21日 島根県雲南市 雲南市掛合町松笠の竜頭ケ滝の高領橋付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月21日 山口県山口市 徳地柚木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1iX0N5OVlldjg0Sm12bnRmM3hLMVhMUUQwaXNRcmpsclp5QS1PUlFpYmlMUmd3THJPUlJKX29uOVhCck9DT3VrNHdBT2hraUNYU096ZFRsbDVVRUhqMlMyb1VIN0FBMGlCU3c?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":10},{"pref":"宮城県","count":5},{"pref":"長野県","count":5},{"pref":"岩手県","count":4},{"pref":"栃木県","count":3},{"pref":"島根県","count":3},{"pref":"福井県","count":3},{"pref":"新潟県","count":2},{"pref":"山口県","count":2},{"pref":"奈良県","count":2},{"pref":"三重県","count":1},{"pref":"山梨県","count":1},{"pref":"愛知県","count":1},{"pref":"岐阜県","count":1},{"pref":"和歌山県","count":1},{"pref":"秋田県","count":1},{"pref":"兵庫県","count":1},{"pref":"神奈川県","count":1},{"pref":"京都府","count":1}];

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
        <span>対象期間: 2026年9月21日</span>
        <span>·</span>
        <span>公開: 2026-09-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={48}
        periodLabel={"2026年9月21日"}
      />

      <h2>主要事案の分析</h2>
      <p>当日に報告された事案のうち、特に人為的空間への接近や特異な環境での確認事例として複数の事案が挙げられる。宮城県塩釜市の漁港では、パトカーに追われたクマが漁船に逃げ込んだ後に海へ入り、行方不明となって注意が呼びかけられたと報じられた（※1）。また、岩手県盛岡市渋民ではイオンスーパーセンター前での目撃があり（※2）、同県宮古市においてもスーパー付近で目撃情報があったと報じられている（※3）。京都府宮津市ではバス内での出没が記録された（※4）。</p>
      <p>加えて、農業関連施設への接近事例として山口県萩市大字佐々並で養蜂箱が倒されている痕跡が発見された（※5）。さらに北海道石狩市では、釣り人から通報があり、カゴの中のサケが1匹減りクマがサケを持って行ったと報じられる事案も確認されている（※6）。人身被害の発生は記録されていないものの、生活動線や産業施設周辺への出没が目立っている。</p>
      <h2>地域別出没動向</h2>
      <h3>北海道</h3>
      <p>北海道では計10件の出没が記録され、全国で最も多い件数となった。根室市では酪陽（※7）および川口（※8）においてそれぞれ出没が確認された。中札内村南札内でも出没が記録されている（※9）。また、猿払村では運転中に車の前を左から右へ横断して草地に消えた体長1.5から2メートルのクマ1頭が確認され、約200メートル離れた場所に野球場があったと報じられた（※10）。石狩市におけるサケの持ち去り事案も含め（※6）、農地・草地から水域近隣まで広い範囲で活動が確認されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県で5件、岩手県で4件、秋田県で1件が記録された。宮城県では前述の塩釜市の漁港での事案（※1）のほか、山元町鷲足山崎での出没（※11）、同町アップルラインの町道における1頭の目撃（※12）、さらに東松島市（※13）および仙台市青葉区（※14）で記録されている。岩手県では盛岡市の商業施設前（※2）や宮古市のスーパー付近と報じられた事案（※3）のほか、奥州市江刺岩谷堂下苗代沢（※15）、北上市和賀町横川目3地割（※16）で出没が記録された。秋田県では秋田市河辺三内丸舞口で出没が報告されている（※17）。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で3件、神奈川県で1件が記録された。栃木県佐野市では小中町での出没（※18）、小中町・旗川での目撃情報と報じられた事案（※19）、および佐野市内での事案（※20）が記録されている。神奈川県相模原市緑区長竹では出没の可能性が報告された（※21）。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県で5件、福井県で3件、新潟県で2件のほか、山梨県、愛知県、岐阜県、三重県で各1件が記録された。長野県では軽井沢町軽井沢（※22）、大町市美麻青具（※23）、塩尻市下西条（※24）、飯田市松尾清水（※25）での出没が確認されたほか、飯田市で道路を横切り警察などがパトロールを行うも発見に至らなかった事案が報じられている（※26）。福井県では南越前町奥野々（※27）、美浜町笹田で午前10時に成獣1頭の目撃（※28）、南越前町奥野々地係で午後9時に1頭の目撃（※29）が記録された。新潟県加茂市では住宅街付近での目撃（※30）に加え、下高柳の国道290号で道路上の1頭が南方面の藪に入っていく様子が目撃された（※31）。山梨県都留市法能（※32）、愛知県豊田市大野瀬町タカ子（※33）、岐阜県恵那市大井町（※34）、三重県紀北町相賀の山林（※35）でも確認されている。</p>
      <h3>関西地方</h3>
      <p>関西地方では奈良県で2件、京都府で1件、和歌山県で1件、兵庫県で1件が記録された。奈良県では下北山村寺垣内（※36）および上北山村西原で午後2時45分に出没が確認された（※37）。京都府宮津市ではバス内での出没が報告され（※4）、和歌山県田辺市中辺路町栗栖川（※38）、兵庫県神河町川上（※39）においても出没が記録されている。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県で3件、山口県で2件が記録された。島根県雲南市では掛合町松笠での出没（※40）、市内での目撃と報じられた事案（※41）、および掛合町松笠の高領橋付近で午後1時10分ごろに成獣1頭が目撃された事案（※42）がある。山口県では山口市徳地柚木の国道で目撃されたと報じられた事案（※43）に加え、萩市大字佐々並で養蜂箱が倒される痕跡が確認されている（※5）。</p>
      <h3>四国・九州地方</h3>
      <p>四国地方および九州地方における出没記録は存在しない。</p>
      <h2>確認された主な出没事案一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村・地点</th>
              <th className="px-3 py-2">事案内容</th>
              <th className="px-3 py-2">記録</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">石狩市</td><td className="px-3 py-2 text-xs">サケ持ち去りと報じられた事案</td><td className="px-3 py-2 text-xs">（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">猿払村</td><td className="px-3 py-2 text-xs">道路横断・草地への移動と報じられた事案</td><td className="px-3 py-2 text-xs">（※10）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">塩釜市（漁港）</td><td className="px-3 py-2 text-xs">漁船侵入・海への逃走と報じられた事案</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市（渋民）</td><td className="px-3 py-2 text-xs">イオンスーパーセンター前での目撃</td><td className="px-3 py-2 text-xs">（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">佐野市（小中町）</td><td className="px-3 py-2 text-xs">小中町での出没</td><td className="px-3 py-2 text-xs">（※18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">加茂市（下高柳）</td><td className="px-3 py-2 text-xs">国道290号上での目撃</td><td className="px-3 py-2 text-xs">（※31）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">宮津市</td><td className="px-3 py-2 text-xs">バス内での出没</td><td className="px-3 py-2 text-xs">（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">萩市（大字佐々並）</td><td className="px-3 py-2 text-xs">養蜂箱が倒された痕跡の発見</td><td className="px-3 py-2 text-xs">（※5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">雲南市（掛合町松笠）</td><td className="px-3 py-2 text-xs">高領橋付近での成獣1頭の目撃</td><td className="px-3 py-2 text-xs">（※42）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>9月下旬という季節要因において、全国で計48件の出没が記録されている。この時期は北海道から本州にかけて広域で活動が維持されており、北海道（10件）、宮城県（5件）、長野県（5件）など特定の地域で集中がみられる。</p>
      <p>餌資源に関連する事案として、養蜂箱が倒される被害（※5）や保管されていた魚類が持ち去られる事案（※6）が確認されており、人為的な管理下にある食料資源が誘引要因となっている側面が示されている。</p>
      <p>人口圏接近度の観点では、住宅街付近（※30）や商業施設周辺（※3・2）、国道や町道といった交通網上（※12・10・43・26・31）での目撃が多数を占めている。さらに漁港（※1）やバス内（※4）といった極めて人為的な空間への侵入・目撃も記録されており、人間活動の領域と動物の移動経路が近接している状況に対する継続的な警戒が求められる。</p>

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
          <dd>2026年9月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-22</dd>
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
