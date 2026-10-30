// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月1日〜2026年9月7日 / mode: weekly-report / 生成日: 2026-09-08
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-07-weekly-report";
const TITLE = "2026年9月1日〜2026年9月7日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年9月1日から9月7日までの全国におけるクマ出没総件数は581件となった。山林でのキノコ採り中の人身被害や市街地・学校周辺への出没が複数確認されたほか、住宅軒下に居座った個体に対する緊急銃猟など、生活圏での重大事案が相次いだ。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-08",
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
  datePublished: "2026-09-08",
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
      "title": "2026年9月5日 長野県伊那市 山林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPOUdlZVRtRGIzaGZYZHJ4MzhURHJVejNBOGF3dFVWTW1QZDZQcDhMeUFnQnFlMkh5d2ZjeVI2SDhfczJIRU1kMFZNakpEdHdiWmNvSzlLaVJRTWlKVThxZVpsZy1RVU5TZko5dkRJY21KSXQtWXdRZFBFMm1KbHBaZGVSUWY0dFNnVTJ4Wjh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 長野県伊那市 伊那市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9XM1RDVG0yOHBkX21GOGFETEhrTFY3TzRSM1dTdkF6XzNUN2Y4a3E0Uk90dUlBbTYxcjBqZXA0Y3BmRS0wdGVxRF9RTmZkdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 長野県軽井沢町 国有林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5DMVd1TUxyUHYyOF9EUFhPdDlJeS12cEZGWnFzbVNZMzBNT25lZmw4QzhDek93Mm9JbG11ZDdkcnRKMmxTN29FUGo0aTlUU0Nfd0J4T1Q0dGljZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 山口県田布施町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ydUlGcTlXcURIemM3UTVHMnk5aWhXZTcwSF93TlVRWTZmNjhBLU05bXFqNmNtNXl0S0JILWg4MFkwNHFlX05wRFctRGxOalROZWhjOUkzOVdQM1JDdmlmcmo2NHdPLWRia25OMU5kY9IBdEFVX3lxTE5TM1d5QW1YM2ZIOXE1d3pBUXZqRUtJTEZwZ29ZN0tyRGppcGQtbjRIUnFXQnk4eE1PY1JGRkQ1Z0xKZFl0MkdwOGJZazV0cjFpaHFtekFMUlNLV0JrNUxVbk10ZDRDNXdyVXJvVkVwVTc3dE5I?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 京都府舞鶴市 住宅軒下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBOXzVuNTRKS1F3TzA5cnN2X0ZhV3BqTnljajdmX3hQOVIyUE50aHc2aFlMcEtNZ1RTblNLd1IyOWNEZ1pwbkZkVU1GY0RYdHY5a19YNG1uYms?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 京都府舞鶴市 住宅の軒下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9iSzY4Z1RUN0ZaYk1PaXpPVjZtMzFlLTB1eG56a29QZnlNcXhRWGhuYkhCSnVqTGZCZGdOOGFmRUpRWW9vQ3ZCQ2wyZ3FIMnpxRkRvRFBTSDBEMzUzMWhfZU42VkZPZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 京都府舞鶴市 住宅の軒下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNczdxc0RkN1hyX2xHNjJJeF8zWlVMQUoyMm5tYWdNUUFxa3c3aXJNcFdPdXZMeEg5QVpPMmlpWFYtZ2F2d2FSbWJrQWpNem00U2lzbE9VMGZvN01XVjhqRVlORnF4N0RHWDZ3YXBaVHJzbXZucm5JN2p0X1A4SnVYbnFtWjVFN29WQTVsVjhKUdIBggFBVV95cUxPWGpiX1B2c1NFT2UxTDRBN3FkdVlPeUVMeG1rcGsyWlB2MVpsWVlPX1BYdXctUnBLUHhnR3hGYXRMa1NjUnF1SWJaNm16bGZSV2ZrTDVkeU4zYUtzWTFjdDBiMTRQZ0JXd2ZFLXVoc3dyOERiZUFUZkFWX3V6RmRveGxB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 京都府舞鶴市 住宅の縁の下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5Wd0MyU0FNWWREeUdRZHVocjkxdVVUc1VZMEhHcHkySS1abHZrdGpQZmphUk52dVppdFV4RkFrRFBWMXdOVGRRR1hETnI5dGdGT3R1Qm55eFdrd3FDbDFGVE1pV0tXT0JDTFdaV0tZR3h3d1c2NTcwcFZ4X2pzU2M?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 京都府舞鶴市 住宅街の縁の下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPNHhucmI3UE5uWm1udlRnTTljSTQ4QnAtTkdqaVVHdTF2d3puSzg1eXpXbzBhZ29LUTRSbTY1bEp2STN4d0tQNTB3aFZTS1Azd0FnU3I5NmYwOGFEQzdONmRyT2JKR2hoSHh6bnluc3BCa2dyUjRLU3h6Zk1YZDRRbDFwX1ptM1U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 北海道砂川市 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9kZXYyc3VTTDdvcjNoMjNnRVBLYlM4MzFKYmR4U09haUwxTVRNMm4xTXFMeTRvS1BEUGhVSkJiQ1Bob1A4bGlBMDRNYnEzdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 北海道砂川市 JR砂川駅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAwR1ZEMlJHdUJwUzFrQnhjVE5FR0JaMVZRRFdVZU5Sd28zSTN4b1ZaX0hTdHlJdGRFaThzbUVva0FlZVdyampqT3g3LWlrNU5scmNYNkh4T3h1dE9OUDRBUEJBTWUyRS1MMXpYcURmNW5EY0hQQlNNdzBHbXdxMDQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 北海道砂川市 砂川駅周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE95RHJQM1J1a3lyb2pleUNYQXo0NWhwandPQkNKYmtZQXVSZDFuNExHMkw2ZE1fYnlwTTBfQVlLYmZ1NWpHdXRYWG5JNUY1QUx5UTVDdUN1aXhtdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 北海道砂川市 JR駅近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9EZEgyektJRU1wR3BPcmVZU0d4VHRUM3FRelBMOEUxYVdyd1pfYmhtaFhYZDBnVmtaNFpkZmZCWHZURUpSaXlUOFFZLWl0cG44X3hXU3Bib0NmNjJSaTh0VWJSZ19QZ1VCZFBWNU5tZlBtZVlmaEMxcEplZlNJNUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 北海道滝上町 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBORTBreXduV2FnNTgzdUhnZzBrenB6QUZmZXhsdnNGcFFZckxyZjA4ejg1WjhKYkxqQThFbUxuM1NzWFdIVFFxTGx3VGtVMF82aFIyMll0STRiQktaX2VFZGI4cGlZdmVNQnM5RzFsVHdBb0ZScXM0aDhWQdIBgAFBVV95cUxNMGh6QkRkTHotYVpubW1QY3RkNTI3NFJYMm9tYnJra2o3RTMtV3h2WGc3Z2dSZGdJTkQ5bHlYenBTeU1XZHBQb1BCZzBubDNPYkdjR19nOXdDYkF5blBHM2VhRjVKZGVHeHM4VmJYWkxELUREa1N4ankteTFrRWx5Uw?oc=5",
      "site": "報道"
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
      "title": "2026年9月5日 青森県三沢市 古間木2丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR21KVnZaN05xTXpsSmc0eFpaQnA1UU1JdXdZRnY4ZHk4bE5EeXJsRHNhcjl3SjZtT2pTOWZLQUFsMFFobVN0MVFMVXdkS19WaWlZNFk4WFJ4TnBqTGFJR1JnRHZvUC1WSHZxMG5FR0RsTW5hMzZ6TEwxbE5iOWFFaDZXMHVWNWVKUjJNdTJMQ3k5RDc3dm5FSjZKbkbSAaIBQVVfeXFMUE14R2t1cW9ZMVZsN21JTEVLSi1vOXc3Wks0S2hlN0NWenRoTjNLbC1ZTmhXcmgyeUwtbVQyOGlmVUdiV3JHM2dWazRvbFlMZEhMWVg1SVRfR3JMci1lUlBybVZ0QzM5NDVyRWhLdEVkTnJ6dmMxdHNLeVRORHk1NG8yTnlSMENzUUVUYlRvU2xIZmNDcDM5azc1c29rM3JERVRB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 岩手県盛岡市 住宅地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE56Q1FPUHo1am95MVV5UldJX1pKOEJwSzNNVjZqMkF4SXpIaGxyc2h5dThubVQ4el9fcXdOX1NkUnJLWUM4RnNuZHRNN3Z4eW51VDRLNnVEVjdHMkpETDUw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 岩手県盛岡市 盛岡市北部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE5xLU9qUVVNRkJwa0F2TkE2TXJjNDh0VThWRXYxMVlKdmxjT2ZXWGdhck4yU3ZZSlEwaTBPck9jelZiaThOT3U2N3NmaEpFVy1QREY1S0k4TQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 岩手県盛岡市 小鳥沢二丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 岩手県盛岡市 上田四丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月7日 山形県天童市 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9kd3NHWWJ5MHJGaDQxQlRpR2dScFNVUXZnSG5tMEwyX01kcV9tblRHbi1zTzhLeE11YlFhU2xoVGQ5azIxbEFBT0gtdG5UQXdoWG9GdERSS1BFLTlxcE95djBoSEV3Ni10QmVUeEpXUS0tdllYTzhnb2p0N09xeWs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山形県天童市 北久野本１丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSFJBc0dwY3BpRXNOeW8wcFdiZ25nLXhLM1BBQjNOZHZXb2Y4V1l0ZlJ3ZEVicjZTdW15UkVKazFHWEYzcHRTOVRvSDdIWnI5emxlWmxwRzZiNUY0NVRJR0Jza3U5QWdqeEpYRlNZQUJlQUtEdC1FOEs5VndtRG01b2Fza1UzaEwxaWQ1eWd5Zm55Z185dFNueUQyUVVibHpuZ19zSm8zQk9ZOGw4aWZ1YnlObXVXamFYVFplYzFzOURoQVhLWXUxUk9ndGw5amxkb0VQSGYyM1ZaYVIxSXJzekdQbFI2ekZnNE43SVBMNlp1QdIBogFBVV95cUxNWDdobHp5bDVyOVh3R0FzdXlqaW9mRncxUVdDdHZxTEtzbmVhLVo5ODVaTlpHcXBjTUJUbFJtdXdYdXBfQWo0WE9DZUFGX0xISnl1ZHcwcFNGOExQR2ZnZkFvNDZLRUxPTGl1VVU3cjR6eVJiRnJ1cjUxa0tEd3Q5Wm5pWnJpU2hXVkVReU1wRUQ3UU04THVCNEZtUzRpWjlNNEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 山形県天童市 北久野本2丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9xaHc0SmVMYTFWT3FIZVUxNENVMUkyQ3A0R3ZtdzF0d2pUaHZDeGVaVk5vRHEwZ3VydWtvMEJ4RV80NWY3M1NqcVl3aDk2UmlLQ3lxWlU4bTdjYnd6RFVRenJmazRVOERHMllvRWNZVQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 新潟県魚沼市 湯之谷中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBhaDZqdEI4WDlaVFYwMjg4d0J4RDg5MktqYWlGVjVJeHNCTWtzUjctUm53eUt3THltNmpzX3pkSlRoQlFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 新潟県魚沼市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5feXQwM1YtMkpwdVFQTmU1eWFLNXl3bFVwN0wxeXFySlNTOWxYQlo1OGVHdVhaUTItaUVEbnNZQmhOc0drU3FrNWY5WHQ5QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 岩手県奥州市 水沢の小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBMc1NJSmFPanNDSE0tRDZpUjlIMkE0bHdnaWZjZ21meXdDdG45eHF1TmNjaUxYVGZveVpUaU5uekZnQlBaY2g2WDV6OWh3TlhyVlhZa1ZvLXpWTzFzTTJN?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 長野県安曇野市 小学校の近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1TMi10eXpQbUhZc2V1X0VMWE90YkJZQU9DcEFrT3VqdzloVjFCV2dBWEFDQW56alktSk52VFM4bl9GVnpVTENaa0Z3UlhvbVhyRXJKT0RlMExidWpEM3hsdlhxYmF5Ui1jOFZaOUlnd04?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 長野県飯田市 西中学校近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBTTDRCVU5GZXJPcGp6alJjNS1BMlBZejRVMlNYU180ZndKMEg3RGo3cU02bkd0MllXTjRfeDBON0RoSnRXcUFTU1RvUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 山口県山口市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5RRmNrZXlJYzNNY1F1YkI2WlFLdEo1cHRJWWVRTWlaRloyQi1sd0o5V0hxcGlxNTlsS0ZfOVNqMHdaTVB2Tk5kektBS3ZfeS1McWNLem9Ea0xyNXVuM0FOU3JsUEN0bnNpNERyMDlDNEhtM1NDUzRjUWk1M3l4aTg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 島根県安来市 旧小学校前県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1QN054QVVBTWpRWkRNZ1hWRzRGUDM5b1pya2pUTVVEd0JYcHBxYnlwUDhlQ2dVVmhwLU9LRWlHZGc0LTd0R050YUw0aFRUNHlwN3VkbFd3R1NqRTcxNUpHVE5OZm02cXVERnZJaTJDb0pPeG8xd2prcE9qTlQyTnM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 島根県安来市 旧小学校前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPNF82NV9TY2pWQU1aazFpSTdSd2k3Qk9FdmZaSzBTeENzTG9aMFg5bWNfZ21FZ3NSMU9TM252UmVxQ1E1QWlydWRaX1B0WGphTmhmdFJMMVFDbF96MDJCVzdvaDlJMzhGZGwzb1NHVmpuNFFqek1BZGo2MTNVd1I1QklyTUJ1TUZK0gGOAUFVX3lxTE01V2tvUXA3RWhONFpaQUVfZm9aNkxXbG5FZDExbFUtX0RrbDl3MjNuUmlfTjZ6UjJsUWhRWlBHQXRVRHpFamRvY2JVR2xkeGJJc0xINHRtdW9uNmFNdEZuNHAtbFpSaFdwSXZqUlpablV2NXg0T0FSbnRub2xUVkRSZklTbktwQ29FWFNMcFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 島根県安来市 旧小学校前の県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQRl9yMTVDMGV0S044SUVHX1dYSVB1d3lGWHdTenFnV0ZMbC12WTFxZTZDN2UwbHB0WGVZTnZQT3BNdFZUQjQ4akJ5Z1ZvSklrS0owclVWVGpybkwzbWhXQU95dXVnemwzdUoySTVpWlZHNW8ybXpfaW42WkZydFItRmttSmJ1RUZpTjJ0SHhFWTBiU0FfZ3ppOTY1LVhzZ3puWGs2cGxlV2pCT0ZPNVlRVVNFcHdHSXNHdGxCNHJXUlVmc203WVNDY3prTDNiVDhHQ3I2VWNuV3dqSXY0ZUHSAY4BQVVfeXFMTTVXa29RcDdFaE40WlpBRV9mb1o2TFdsbkVkMTFsVS1fRGtsOXcyM25SaV9ONnpSMmxRaFFaUEdBdFVEekVqZG9jYlVHbGR4YklzTEg0dG11b242YU10Rm40cC1sWlJoV3BJdmpSWlpuVXY1eDRPQVJudG5vbFRWRFJmSVNuS3BDb0VYU0xwUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 島根県安来市 安来市広瀬町奥田原の旧奥田原小学校前の県道安来木次線の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 三重県熊野市 私有地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNS3NsUWxFMDZiR21GT1F1SkQyQllJemZMYkx4cktBWHJ2cUtJREFwcFkwblFGN0hUTXhueXRHemV6ZHBzZF9lMFZWX2Z6M1dHQ09LUjJFek1aVElRVElzeHRkeFcxUFNfUWQxQkZzWUxaSGgtRHMtc2E3cGdMZlBZRmhYbjA0MFnSAX5BVV95cUxQajFmZHNnYmtCNG1WWkp5SVVJS05NY29CMk9JSm43eTlKZUlBcnlDYlhtNHd4TGN2d2k5NjNCV0FkY2RpRWRaa01veU1wRktzRUs1dzJ6akhSM1R2emJVanAtS2V2RGVlWnc4YndHY2U0V1ZmTm1lTzJucWdUa1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 三重県尾鷲市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPX1RHUFl4YnQyc21KOEI2enlsSkhzenRhUTRKUUkydkFabU9qSDF6al9sSlRwd0tuNzdIT0tFZlVGcUItRXQ5UkVidzI4TklTYmxtMGoxZHhMVzgzN2JaYUI0eGZFeFEtcHYwS0cyRHRHbTNIZFpxTzRjNWtCNTNTcGxNdEpER1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 三重県尾鷲市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9HREtnTzlCMEJSLU9OLWs4Umw1OE5VWFd6eUhXNWp5ajgxMVQxNFhyYXgyY0FqNzhQa0I3eDcxNzM4VWRndGdxckRDNXBPSW03NWJBWDJnRjJRd3ExeVhuWE1hX2w0bHk4a3E0TEhhTHo?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 兵庫県高砂市 阿弥陀町阿弥陀の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPcmJJM2tUalYzdGFPc0dRZUFtb3FTY3d6T1pOYmxhX0ZYVmpFWDAzR1lRb1RIY2N6ZTdIbUFyRUpVdGNWTUdaWWZtbExTcmdOWWp5cGVvLVExU1MyNk9UeTBLaXg4b2o3NHVOaWptZ0pERkdwdGR1TUFtaGU0SWdkanl1M0N3V01CcTY1VDVwOFlXLWdyV2lBS2hfdHptOEZlTTJNTm9mWHM0TjNmUnhvckdnZmJ0N1FhMXlIYzBBcVNaVlNPcV90eVBIRDZZelNjd19kYW5BOV9DRFhjUGR4QWZNU0JCN29GR28zcXZPZHdMQdIBogFBVV95cUxQV2R5TGpZenptd0MxcmNSZGxDZWp6b1haby1XMVdiNGFoX1NETERGM3doTUR6eGlSU1NFU0Q0R0doOUtuM2RyUTR0MDZpYWJoTE5pem5XVGpTYm41ODNWam9QNVRCUEZ0c2VfTVZPMjl4N29UOS12ZnVuTlZ4QUs3ZTRxaE5CQi01cGdtU3lpRXZHcjk4ZjZxa1BaWFBGRDg3dWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 兵庫県高砂市 高御位山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE40UURKN0ZTbXA5REVUUGpoWkRTMUhRVnpIbmVidlhCZWlBV1VmOW8yN2NYLXh1MjNQdjNiNmdpQl85cU9aaENRV0d3dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 山口県岩国市 周東町川上の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月7日 山口県周南市 八代の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 青森県おいらせ町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBKLU14OS0wS2hGNXR3ekQxdlVLUDFnOEpkNFdwT1NvcnBZRF9MbHdDX0ZwSEJvRC1mODhCNkJnRUt0NlJzWTR2dVRJRlkxb19zSTVFVDV3VTRIUUpDOVZ4bGIxNy0yak95NWl4WHZuNUlQUDlaeF9pQm56RdIBgAFBVV95cUxORVIzcTMtVU00cmtXaWlzYU1SX2VESjlGOU5TMHhpWG0ya1VnMkNCaGhwOFZXOFdfeXhMY2NEbm9CSzVQWHRzQjJpcWlxZzNhT2VtUkFXb3NHRlhSMlhKRjctTHdRN3VHUmdxU0t1OW1EaEFXNVRVU0E0UUFzUVIxaQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 青森県五所川原市 金木町川倉七夕野４２６−３の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 福島県国見町 国見町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9QeFd4WURGQng3LTlhemVTVkhkR0lJUkNmMVBzcEQ4dlZqUmRBRDdmX3R2VkRoVF84d2J6SUxmWmNUaUVuUlFXZU1vcEZJVDlxWlI5cTlzZW15N2RoWTN0RGUydWRvZlhjZHpaNnNEV25mQUdJaDE3TFdnOXhvZDA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 福島県国見町 県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9mZWNJOVRrMGV4dmR3a2pXaUR6X3dEdWpzOW5DNnI0MDlTRHFPSWd2TXhuR3RHMC1NcTRNbmFvd0thMW43d1pEc1VHMUVLcnVjVGQ3blc4SkFFdjZac3hNRTJfSHFyXzA3ZzVqSnlrZl9sVE9icl9jUFJwemxDeDg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 福島県いわき市 小名浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBpYmRfZ2ZBZGI4ZWFMVmxhdGJNNlo3NGo2SXQ2YkJvOG1LSm0wS2Z0cGhfSm1uS2JLNDlGYWJfQUZ5bnBTaUJkTk14dmpkX09HLV8tT3BVZE80ZU4xU3ZzcnhqTTVuNm56?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 福島県いわき市 小川町上平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNY0lVOGxTSUN2cEFXM0ZhMEtqLU8zNW9TVGgxWjBpZDFmaExUT05KZ0RIZ1lrMXJjeGtQSXRqcVlGVjlfeFowUzY0Wkw4NHVjT0NZb2dtMmg4X0ktR1hWaW0ydnNsT3ViTThjd0dBaHFWc04wbzBOX1JoQXlCTXhGM2xjUUxDTno1WWtWbkdnclJjMjdVcWRwY213LU5peFpkbjZSWWpJNXQzVF9ob1A4OGNzZ0RzOFJhZUJ0RWdVelh2Zngxa1dYRGJSVk82YjJ1U0VLTVBOaEVSWEVWbm14MF9vMGE2TDVkbjRNU2drOVg5Z9IBogFBVV95cUxQUWwySW5mZ0ZnNmhTNE9KMExuMTFfRFcxRU12V0FBRFdDZUpNU1k1NE5YYkE0TFk2OXVGQm8zTUFoT0JrMlVaSzVRTEpEeGlxam5UcmdjbzdpMWxNb2U0VFB3VmNKNldxRWRoRF9EMmRJMVp3c0JGTkJSWnVtZ1ZudkJjSG9mdThlczdDR1JoMlU2SjZnM2VNbDZKZnl6STVfZkE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 福島県いわき市 いわき市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1wQjU0dmhoVXdfVHRkYjRCd2ZsTTFEWklDYWZqYW1EaXBDVURMUkU3dFhDWkI0RTFIQUQxaG93UnVWbTlral81aGhVbG01RGx6Z0lnLU9Fb044bnNZOEo3bHZUWHUxLXM3dnpib0NPOUhpSGtJbzJsd0NxejRLR00?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 宮城県仙台市 八幡3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5RQUMyZDVremhZUTZQMUhhMUZtRzI4Z1ZsOTVseVQteTBwczN4Y25keGRYeExiVlpYYkhVOTJCWjBfQUJYSFhkalJ3Yi1FVjJLdkM1OXN3RzE2NmM1ZzJ2a0xGVzRfSTNKc1M3Umxwb0llX3RORE1NTEU0NXhQaVU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 宮城県富谷市 富谷熊谷下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWG9RdldtM1hwSTVwaGJVX1pKa0F2Yk1wV3VyWG9KTEtyTU5aX1MwX05RWGwyWU1tSlJWTUZZRnJESy1FLTRTMEZUUE9LdTE2Q3dDUGpXNXRmU3I0Q1RJakx2eHo3SGdMMkdlMXRYanE1TFFGaTZuQk5ka3QyQXRfSmxuSkxteGtkNzB1NlRVcERXeTF0ME43cUVuWXrSAaIBQVVfeXFMTlpFX3U4M0N3eWI2WGU0VXJndnNTeThCYmROZ3E1TlQxcU14MW9sVG13RGFra04tc3lnYzdEcHItc0NLVExzYjR4cUQwdFI4WGlhRVpFV0pLelk5VFNYUXhZVGRhcXZJb2xVMnZaRmlXdjJCT1lqZ09BYkhPal8tMnVHSkN5cDM1Rl82SXc3ZElYZFltMWJyOUtBTU9yQ0JWOEZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 宮城県富谷市 富谷大清水下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONEZ2QXd6WVhHb2w4blJzSnlGV25vbWR6X2xwTmJ4bVh6ODFUektDZENiaGdWRlVESE4zTGNJVHVxbHVGeDlwMGp1WGtHZkhDNHBmZ2ZtQVJYY05UQTVBX1hlWHNrbm1hcDN0Qy1ITlFkd1J5cExDY0V0MHZCZHRNa1FSWU9jbzg2NnRfMml2N2V6LUJaa2xZY1pZZW9QM2NzcDhFZHhLNGV5S0Exajh5VjZBZ2hfM0JKdUVCYmxEY1R4MW9oUjB1OE5oMDJTVEpucnZRUHY3YjhhT29kZzEzYXNHUkRrcmJQNWY5cjRtMUZTZ9IBogFBVV95cUxNdVpBUzJZcU1abm56VDhfSktvY0s0RXlPYkxyT3FKMVBwRVhfVFZwVFdxVTZyR185RHJMdlFHU1VYeUEwdmI0emYtalhSLUdFUjllSV9oWXJySHp4UXEyb1JpYzk1RTF0MHZ4WkVzSk1zUW84aTk3czJBbmdSZWZlUXM3T0xwOVdma1A2V2VCYUVsNkV4eXBMOHc4a0F5NzcxVUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 山形県河北町 谷地工業団地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9QN1BrRVEzeWVOOWk0YVBYMUo5TmJhRDcwNEhNX2hCQ0IzaEtTSzMxVGVDZGlKdXhRVlM5c1pjdW9WOG9PbEpuOThhS05NUzFFaWtraVp4Wjh5UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 山形県山形市 インターチェンジ付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1SQWtKVTdhSHVzU0NQVnRUT1R3UjVud1Y0Rld0ZDZqY0syZTRJbENnMmhkU01kQUlSLUM5d3lHUktQbGNfWVpjX0s2VjJzUmJWYzJ4eXI1cnpQUlNjT2Q1c1hiaGxrVGVCeWtoZXFMNNIBdEFVX3lxTE5GVlk3bXZTOTZaalZtOENmZ2tkZ0Y0NW5FMmVXOGoyZWZyU0puLUdzbEk4N05OS0t6bG0tSWFURHllMjZtalBjZ0RKdE1YOWJiZnVqdjNNUy0tVVAwcUVjUU14S2xuYVlnWmFzOU9BWHdTbVEz?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 秋田県秋田市 新屋比内町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQN0hycjhjYnkzR09YNENhWUM3ZVBJZjJJMWQ3X0I5WUYydXpIeHR4Z21lQjNXcWpTc3BhcDczQ3JlWjByNEhNbTRKUy01RVhQcjROcGRzUHZxbTk3SDhLcmVkSmtaanZOc1dwSVRoZzVJR2NXTFllTFI5WlNwbE9vSXlEU292eUdKdHREWUVzQWRVN21PM19VUnBRMjFkR0dScjFRYndtTlhhMXRhWHRLa1QwY05EYXhaS1hrOFlRSGRFN19zTzBjdWktdXVHTzFWaGVhMFFrNHJIUDAtcGQ0czBjM3d5VG5aZWxyQTJ5eEpld9IBogFBVV95cUxQdWdoa2lhXzFpdWFWTjRGRzk3Y25vdXlITzdheGZ6bHpkakczYXBSbVVOaV9HRzQzTnZtblVYempFd3Fac1J4YmZBY25GTFkyaG5meXRIWUdjUHdjbldHUldzRUxEcl84VEJ5NEFINERYRzdMZUMzM2gxdGQwUC1TaGlfVnlUNXFSMThEUF91SFZvWUxLbjl1N1RVRi05dXVWNXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 秋田県秋田市 寺内神屋敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQN2FhZEgyaC1fV2JJeXc4YTFVQjNESFBxTHRqalJQOWIweVEybEhwSlpPNHdrV3FhUFo0enJfRFZDQUVUaTFxcWhEM1hPVndBRHRLaUZFa1luTmZ6UEJRSnU0SVVFSmU2VkpRUnRhWU9KMThsbE0tX0h6cERBcmVHUGxQMlhiZTJ1NkVtZFdmYUFJckY5YzVXcTVTdTRSdkJWOFVsZHk4MVpHZDY4V0xidjBQdkJyLUU1dWlMOHZuVjk1Y05TMTFYUGtDSmpLc01rSVJFOWhNMHJ4aXowZTNjTUYzdGZFUkRiSXQ3ZW5IS25UZ9IBogFBVV95cUxQM0JjVDYyQm9lcjA0X1d5WmdQMzhQc19VTGRfdVA0SVdFemFjdnoxV183dDBzTDJ4SU02T3kxbE8tMEdrV1VPLUdRampJUl9vRXBKYk5EZmk3VzBLVHBNZmFMdUlaYVdqS1R3aWI0aW5Ua2lZVHJzZ1RfaVVJeHBZZ0N0a3UtUUk0N1RzNnRKV2Q3Zzh1NHFvV0g1dy1HWGUxZUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 秋田県秋田市 寺内児桜１丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPWE1LdVg3SWlyMGJjNXBTZzRfMXZwcWJJbG4xUmlXNjRIOHE5V2RaSF9wVzVUc21vMnpoaC0wUXptVXdKRXYyN05nWG9oUXlNZzNyVkt0eTVoTnFPSU1XSXU4REhMRjBka1plZlpMcVFjTnhENTd6SXdnbDE4QjlHRVpQQV9MX2JiWkFOZWFDWmFBYkdGaksydVZwNElWUGVaUGtPNmRJandEc0w0OTJMRFIyakFTUVJkck9YbXpQVVBlekdzTzlFekVrbWtTaU9RazA4ME05TW9HQ3V2Wm5Pb01ZeEFhZ05hR1F2TWM1UThoZ9IBogFBVV95cUxQNWM2VmhseEJGV01aaF9KdFJwRlFXbTF3WlNRR2Q0WGptSUZ6eWtoZTRhcFpLMUJVb0ZqTFM5RDJNVjZodXZiVjJTbW8yU3RsRFFJM1ZPSmtuSDdkMWNpM2dMcmdETWNPSXZiajRUZXRPczBUY0RaMmxtSG5GSDItYy1MRHl3VWppbGFPRW9mdE1BMTRidWRCSUt2dThsdElZdFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 秋田県鹿角市 駅近くの市街地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1WazFJYzdWTkl3X0Rzb1hwTHhqOXY1dG1YOTBiUkZPQ3FzcVRrSHA1NVVIeHBzbGV1aTdUOWRaQlYyX21zTWl4LWJneUFRTVVkV0wtclkyZTNrZDh2MHVGaG9taEtWcWt5QXVMOWxzYm1XNGRBWlh2U3FXc9IBgAFBVV95cUxOdDg5YjVBS3BiZjhId1I5OU5aRno5OHRJUFZZMUlMUlBtTG81YkY2SFZvLTJJOWRDU25DSGowQXJ6NElidVViZVZLMzVTbGV6ZlJrREktbTQ3MW5fSXlPQ1lEem5PMmFHdkpzck9pZnBjWExrNTlkYnRJTS1PREQ4UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 群馬県富岡市 妙義町諸戸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNc2c1RXkwUEw1UmpTODQzYjAyMDB3cUVXZlpQZ2lSWk9QSTljQlkya3EtdFZPWmxKLVc3VE9ESFNRb1VfS2ltMEo2QzFWVUh2STVuLVB3RXY5aF91R05NMWZtc2RmOUxkeklnTEExal9LdUxoalZlZFViSDJUOW1ITkNoclFubldqaXVKSEZUWVd4WEpPQnNrOFRhOGU1WjZkUVlGbUtlQ2lDRUFvempjenNaSFFyRklXdUJXRWVpbjVEZjhoZ243c2hNVU1zVkVZaklldFNCMkROZjVLNlFwVUQ4eWQ2RUlVdktJSWFmZTZtZ9IBogFBVV95cUxNZHloRHBSakZ5SlFmTWpvX1lxYWtZUzk0V0tzNnFBWmp2cjMtbHRacEdiUDQ1N19vM1BIZWdKRE4zNl91b1U3Y1RNUkdHN0loU3U0b255SXduVUd6N1FrakNaMzUycUNnVmkzLVFLMm9ZemNQenVJRHUyYmxWLV9Mc3ZoT28yZ2ZMWnR3RXB3WWp3ajJUYWJIbi0xZHc4bldMOXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 群馬県前橋市 鼻毛石町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcHFMMVBYSHlzQXRtVnJIcmRwQlRndnQ4eWxMTkUteGxQRmdJMVRINl9FYTM4REZhTXc5NUVWRlotX195UGdxYmUteXduV1RleE1XNDgtb3dBSmN4ZzJZb2IzdXRMbDgzS29wZXVYNzlWZXBVMGp4am5TX0VleW9rdXZIOWVpZ0NpaGZIejlQeWR2U1F2N2czQVVWZDPSAaIBQVVfeXFMTmRYSkE1WkpFT1ZrWnRlNk4xY0VVd1FKaVlMUXNqTHZIaXBSYXZ6Z3JnXzRaLThHR1FzZ3Q1UlBGQnAwMzlnVHktZFFPSnhvYzIyZGtsR05uM3ZiLW5zYVZ0OTRTNFBGa0c3blY4QVdYbWpnb2RRaWp5LXRDdGJHeXJ6bE9WTFoybXQtcm1Sei1SVU9vNDhHaE1oYjRjMnZrSkFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 群馬県下仁田町 西野牧の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOEw0OHpsdk9pQV9vVUFBWG1Iblhzbmlpbl93blo3aDd5OHdXdE01Mmo2bXlrWnBPU1lFTXFxRFljOXlEZFo4MFdFOTVaNTBWWU10a1FJNDlTdjR6NGpSdk41RWQyYWNmandid21rZ3lHN1dKTENzSW9VN0liZzg5ZFNRZnBOSE4zdkxScFZhcXMtSTEyUEFmS0ZJNUXSAaIBQVVfeXFMT0xwSEhXUEdnaEpvaVFibnRmUHJFTkhOOEpIdk44WDBoYVFnVEY0R3BUZk9qcG12Nmx6Mk9tRjh2cGhPTG1lNzIwQzR3MkdVcldJTGg1aENlTDkxckJQbTdJMkdab0laOElQWXB4TFlFRmprbjgzWmVWRjd6VVNsWDN1MWV2VDlnSlp5ZkcxLTRUQmxSakxEUkJYdDRVM3JrNFFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 群馬県安中市 松井田町二軒在家の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQV0NNajNQaWo3TDdkS0dsYUdLUC1iUWszZkd5MHIyelJZYmE1SHQ5eFZRMFdnbDdsWE94Z1JoQy03aDJzd0tKY2NKM2wzRGZjeVFRNld0dWdEQ0g0dlFRaW9CalRVcG9KdmFOTElia2N5R2tlX0dBVENHckRjQ2V4cnRiWG4wWHpGV081OEpETG41dDFrcldKdXZiWHbSAaIBQVVfeXFMT1FxaHpRdTlJbUg0YlZIUHRuWmdYSHVqelA0Y25uOHl0YWxiNXl5ZUZuN1paeXNhclpBRndEckc0SDZCNmg4UGdUSUdZcVUtUUswTTg2eW5FMF9JRXhMT09LdUVodHZsMGM5Q1BSRGtQOHBIV1d5eDFDRkRYZXI5UDFoRW51ZlFHTUEyOWl6WU5zTmxiZTFhOEhDRHo5TUlFdVln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月6日 群馬県渋川市 伊香保町伊香保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVk1fclQyVE5PeEFrSTZjYU1acnlaei1nWjZQT1VSdENHd0hUTkJKRFJYelhXck1jUHZiclYtTUE2di1RMTE0WVFxRkRXeDFBZmY3b3N4dWJqNUJmTVdFT01WdHRWUWZlNUhaNVEwQmRjdWVUZnMxSlRQYnZ1Z3FUREZ0ckdZV1RiM0xReV9mcWZEa2tBdTM1LXhxdzDSAaIBQVVfeXFMTnh0M2ZJTjRyaDRmZnJZb2JMTlFPUUR6bklrWGZWbnBHNkNUVVlNWF9IZlo0LW9pQ3IxZWw4RDZsX0M1WkY5NHJuMXhUQkUyRFFyOTdSVjk0MFc0dFhCdTMxSk5vczYwX2ZVbnI0bkdjUVk3VW1RMUtBMzFvT19mOWR3ZXBjR0N2cHJ1RWs5bjR1Wnk5QWpmelgwYkw3ZE9FalpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 栃木県佐野市 路上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5xNU5IbHpSQlJJaDZ4QURjUVc5Y3ZiaGc3TnFQYXRxeFlYTTdvWERKX3FQYTdNVVFuX2VFR1d6ci1WT1VPZHJZaERzTGF5QWtXYXplNXphUHVjNnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 栃木県佐野市 山林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFByc1M5UWcxQ1BuVVQwaC1QLUNZaXUxcV84NHhHLVBzYzBGd0F2YUs3Z2x0V3R6TTQ4emtEWU4yMVJDNlNPZnh6OTR3WnBpTzNmeEZTbGZUYUM1X28?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 栃木県那須町 高久乙の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeWpheUlJMUJVTkxiUkxGZmlLalVfWDM4Ui1ISGtaakliQzgxM0FzbFNyczFqem5jaVM5LWFkdExDRHlyTTZVNHJVQ3dsaWpWZV95WUdXbzd4d01JWmh0b2dSREtpbGp5TVRvMW51N3kzdmszY1JrNXdzMENnX1BDOE1FSjNnQjlCUDFoOHo0RHFlRXM0c1V1WWFXZzbSAaIBQVVfeXFMTTh3ZWM3WTRaaDE5cUVvZjBnREw0RjNyc0lZc1FRSlpnckptWXoyOXIzMWZRNVVYbXVlOEJIV0VRc21hT1kxWklWV29vVTl2c1hTYWdZYUhOYmVUa1ZFalRPaXFVTmtqV0MweDBQQ3kyMXBfVmdnWWhNbUlYSGFqSG9jc3g4SV9kTlB2T2N5YksxUVROaWNEOGt5aFZLc2VJSnN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 栃木県那須町 高久乙の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTWlrUC1rdTlnOG5HRXk2bFY0YzNlQmZfNDhpREhQNTdOTXF1VndGTjE5TVJRVXNVcC1UZElaWWNmRTZud3hEaXFMLTJobThCbk0wV2RQTmdXamctbUpRa0VITGswa2dscWo1cEx1cko3MTJieklzeU5OMmFIS1RILTk2VWxYX01adnQ3c3FuVTRkaHNwQklpQ2V6dU7SAaIBQVVfeXFMUGhxNTg1czhPTnhHZnVNaXEzUWNGUFlydTJON21oQlVTcHBiMW1MTFY4RjVYM0tGSXIyUDVhTFZuVkFINFhqeWZ2bXFaV0RWcUFsOFVNYTY0ZW8yV29KZzlHY00zRHRmV2VjcXpJZlljbGN2WU93ZmU2Ujh2SjZrSF9lbktvMnVWMFB0dDJYdVlkOERxSjZTYmFQa2JTdnRudVVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 栃木県佐野市 下彦間町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYm9hUzdSLWphTkZTcUU5YjljT0pMXzBtUTNOM2VSTGVpZEhjSnBILW9YWkhnRDR3MVgwaUxoVUZzcTJjYlNiQ2pRU0h0a250cGN6T21aSmdFWnh1TXZjOGF0OHRtX3UweHU1RDZ5OWZaTE56MXJuT09KYlpkXzJoQW5BSzdVWTBwcVprV0gxTV9fSXdHb1FmX2Z0MTTSAaIBQVVfeXFMUElQNDc1Qi1qTl9PSzE2Z053QnZlbHNlVDlmUDM4N3RoUmh4djIwaThGOXh0MDJxSnVVT284ckl2MjRsbHBnUWZqdjdvY3cyZEt0a0FudUV6enBmSTFGVHdNdEZFOWF3X1VzU01EVlRnMDNEQXBCMXdrbGVnUXV4bU5mSU1XZ1RXb29Wc29Kc2ZUbVVlLTFMZjNqQ3hVVmdYWTNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 埼玉県秩父市 大滝の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObWVmWDVlak01OWpRRUNtNm50NTZmb0R3Nm9zMWZUaGM3ZGJid1FEYW1ycW5DYTVLQkxob2JmRlNLSHFXbjd3bFN2U2taMXlHYlVsRWZEalNzeGJWbFJ0SzZJQzFESk55ZmNvcnJYLUFQZTY4cjhjN0ZPQl9Ic1A0bTFDSjV0aXVKNG5tUFJRZi13eTc4SEp1S3M4OWrSAaIBQVVfeXFMUFVoVGFreXJQWW5Yc24wa3VTV1BoZkQ4MERwTWtDd1FhbkFuM3RYSG00TlUtYzZXVVh0R2l4RUo4Y19uWGFUcGMxMjJ3VkMtSnlQMHI4ajcxZFlxSEtNOGFsZlVmSWJTV09DSkN0MkxVampvd1NDU0YyYlZFMzU0QTN5cXVQRkJ2UDVVNUtHbENNU2ZuQlRjUGc4YlFJQ1dQX2xR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 埼玉県秩父市 秩父市大滝の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月5日 埼玉県小鹿野町 小鹿野町河原沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 東京都あきる野市 菅生の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNEZxdTJtODk4M1p3MXNRRENDUnVwZTFTS0M5ODgzcmJCUkJMNk1VaFVzRVF0cHhfMUl6ampIVHZNeFdkYWpub2RfUGprSndEOUhlZGhKQjBFZmZWMXZobHo3cmxSTVBGc1ZMMGJOWU5xRkVaTFdtYVRsa3lzWWVzOVh1UW9Mb1YwNDViWXc4b2F3akJkbVBOMlRkeHDSAaIBQVVfeXFMTVpKQ2lpcnZTY04xUWJteXNLU01UWlk1VmpNNldTODlLZWFiM0JGUmxZNmx0M0ZwZUJ6NFBiVUphNDdDUnk2cVVTRG5GTnk1Unh5cGtQSUNXdG9BaXRiZHpkMy1ZT0RGT2c0c3ZTVVpVbnNSaUZvX1NhZ0k4cmNDMDVhUmZTRGxvZHBOSUx3SldMM1lva1MwbUdlNFpGdk41Y1ZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLUFFYnFhd3gzRlZ3aHVaRzcwOHNKZTZ5UXAtNzM2em5xUlIzNUhHbW5FRGV6aVR6dzRRM1JSenBUWGhua0QzblRzamVFUXJNc0ZsdjhWSWlVc3lmRFllakJhWkY0aS1jTzVsTXlod25HR3lub0lPT19uMElDb1lsZC1Cd0lhY2ZJYUMyNllSd2FfTENLN1pMYzc5RHPSAaIBQVVfeXFMTTdxNTZYVHpnMlVyZ0ZJbmpTUnNWYm5uWjlQNDVmdHNrbUdvdVBMRm1BTHJrN3pfZWNPWDRNNHRGM1dmTGxOUFptLUNyd3I4MGJ2M1Nady1QVVFFY0w1MXU0VE9yelZLNm1SeV82cXZPTmVJcmJEbER3YU9yczRCZU4wTTJQVTlKbEpoWG82R29NVkVOV0xHbkRIN2VQTjNPak13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLUFFYnFhd3gzRlZ3aHVaRzcwOHNKZTZ5UXAtNzM2em5xUlIzNUhHbW5FRGV6aVR6dzRRM1JSenBUWGhua0QzblRzamVFUXJNc0ZsdjhWSWlVc3lmRFllakJhWkY0aS1jTzVsTXlod25HR3lub0lPT19uMElDb1lsZC1Cd0lhY2ZJYUMyNllSd2FfTENLN1pMYzc5RHPSAaIBQVVfeXFMTTdxNTZYVHpnMlVyZ0ZJbmpTUnNWYm5uWjlQNDVmdHNrbUdvdVBMRm1BTHJrN3pfZWNPWDRNNHRGM1dmTGxOUFptLUNyd3I4MGJ2M1Nady1QVVFFY0w1MXU0VE9yelZLNm1SeV82cXZPTmVJcmJEbER3YU9yczRCZU4wTTJQVTlKbEpoWG82R29NVkVOV0xHbkRIN2VQTjNPak13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNM01ncUpPYXd4N05SUzZrQUpwdkdiU3VQYS1nWl9EOFAtQ05vVzBpaGgwSkw1TF9LNGlrSDRGZG9GM25KYlRNaEdFejM4TDd1MWdDOVk3aVlNTXhwWWVON09FUDRISjZkY21UQ3hHaGNUM2gzSjZ4cW1WdkdzZi1OYUwySzAtOHdpR2szRmxVV1RrWENqcy1UVzZWemfSAaIBQVVfeXFMUHZfZFA4cTREdXlLOUNOMWlYVzJCY0ppeEZIN1pyQThraTdBbWhxc2lhOEY4VVUxUmZmNXZhN3ZWS2FBaWc3NzJjU1ZNSS1YbGRCdGZrRDhCOEVHRnk0S1ljU3NJQzJ4eXhWdHN5VXpiLWM0TlRiYVhZRE91N21MVTFfMDh5cURva3dUdEdnOEdiV3cwdk5ZdE45OXBFbXI1M1hn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 東京都あきる野市 菅生116番地付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月5日 新潟県魚沼市 魚沼市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBMTWdsaHIzaDVuV0VFNUtGNzl6SFRlOUlYV3ZVYXV4OUxVeEh4SHVNUUhSeFNVZjk1NzdfM2Rxd29ORzNZb2YwZXEySUtoSEtzVDdZOUJFbWVKTnhkWWVz?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月3日 新潟県見附市 牛ヶ嶺町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 富山県富山市 八尾町深谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1YMndsdjM2U3J1cUJmYk9OY3BuVGd4a2UtVGYzWjhCN1RDWlFiYUxPT1ExZDh5MngxN1pyT3BILTJGSnd0N3dDRmlOQlEwdkFCazZ3OTM1bzkzUVRXLWd1V1FFYlFMaEYtQnlCVmUtckJtZEI0TjhWZzRB0gF_QVVfeXFMTnlPQWRBWWFGMlVQMmFobDVkWk9kWW9vNjVUS19PU0wwN1FYUGx4WTNVbEJVWGdOM3dZemNPYVNpcEpIcDNreVhaS1VnTlRkM3pMLWJpQVUySHZOZXhaY3dYYXo0RjJUWVFXV041aGZVOHU1MGRoV0U1alVlU0hZZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 富山県高岡市 二上町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNjh0MlJXSmRzblJHTTdRVDdoOUpPSnZMcEpZcG1VSlFPcWhGNzV1VzR4cTNBSkRFOUdKM0NteEZRWE01Z2tMbFdFYjRXLUJ1WDdCa0lCb1pkOURtRW5fUk9mMU80VXEtcVQyS0VWbFZBUUFYelk4OXptQVV5dHlGNlgyR05TQTVOVWZvTUU4TVFDckVsbHIxSVBGbnjSAaIBQVVfeXFMTUtjalJXRkFYaGRNTkdweURrNmZkTEVGQkFDY2xScENsYUhXUTJnLTgweXUyOVpiWHlZdXFIc2dxN0NsbGxZenBLNkItX2ZlcE1IU2EzTkNrWHhFVUFrVlFxcFFfY2dHU2hxdmw1eHY4NVJZOU8zdlN2TUQzNVBDWVZQRWRQVjZpTnRMZ09nLWlpajVldEdkMVpwRHFDVTctTWFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 富山県立山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1FUHpKOTZKTmJnNkc1S1E4VGpmeURQaXJCM1AxUzNzemprTDNnVkcxbnBkM0VRY0tBS0RVYWJOOTREcEZpaUFZOURCUzNVbWgyVUJjbmFVRFItZi1RQjNDN3A0aUFqRE3SAWxBVV95cUxNUm5qMk1XM0Uydm11Z2F0d1dSNUxxeEFWa09lbGNlV1lXOFlERGFUblk4VFVOM2xHaXJrbTByQzRJZEl6TVNvYW1PemRadTFqeDl6Mk03SnhqZWxpcW5CSGdOcE9nWE9NWFN4Qkc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 富山県立山町 石坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUDJWdXFuSjNqMGZjRnZDcTFRQjFTMTBZaW4xVnBqRmE5R0tiYUd4UnpDQWNOWmZxUVp3WjQ0UVgzV21TTHY2Wmx0NkxNTVRkdzR4alc1RDQ1LXNQZW9TckhwcEcyUkUwemJaRkt3NGlxTUtHejI2eFhrSHl5bFNSSFJBS2phY0FoNW9zS3h4TEhrU2czbUN4RGpnRjHSAaIBQVVfeXFMUENpMDA1R1VxazNTUnhTZXFqQzJPTDlpRGFFcEh1bTlxdVl4cVVFN0M5d1pmTU9XTWVkR1NXNVg2OGZCdm4xRDhzZUUtY3FMX2ZsSERxX2laazRBeUp2ZExsN2M3OFZJQlRGaHU2dUZhSGViNm4tMlRhRzBSV3R5eUowN05DYnVoUnlIVDM4MWpWRm5kSVl6aVRWQ3pZTXY2bUJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福井県坂井市 三国町安島海浜自然公園付近の出没情報",
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
      "title": "2026年9月6日 山梨県北杜市 武川町山高地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月2日 山梨県富士吉田市 松山地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 三重県熊野市 熊野市飛鳥町野口（河川敷）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月2日 三重県熊野市 熊野市金山町（山際）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 兵庫県加西市 上道山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUXpCaV81OFlKZV9hNkQtRU5RcDBYeW5Ha3pGS2JhWmlCQUdSMUM5cE5YWFVKWE9NYllZa0NvN3JUaTRJdE9GSXBTUjFHa2lJblh5UGk3azBvOExLcU5EblN2ZWgxV3YtUTJCZm1Dc1NOaXJUdk1jc0VzS1VTcjNWYTVGUlZrRlNsUFdKR3BxQ0x4eFRqcjctcEl4dWrSAaIBQVVfeXFMT1Q1ZFVLU29IRXM1M0FxYzVvc0w0V1dRdmdMTnR2RWw5N0xNdkxqR2dQcnZIM1RqU2h3Rk9DUHVqOFEydVM5ZVh1M3hNX2ZaWnZ5WklGaEpReU1pZkxGcVdDeGJobUdnd1FpZzB3WlRoSGEyaHp6X1N4ZTZCalptWnlfTHR6ZTNyNUNtVTY0WGhqd3pybHV5OWtNX1NpalRjWWhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 兵庫県加西市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9Id1B6S1pUWXZyakp2UTNzTWJoNWNfS3RPUVhLODZtQVhJRGpuZ1Jzc2dveVNweGtleVBYVC1zOWEyd0R5Wnc2QmtqVnFIY2pEMklnUXZXQU5yelpzM3FjWURNeEZQQmZhdV9WNUZMRThlTldLMTRtY0dsQnZlMHM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 兵庫県加西市 加西の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE0zLW5PVzc0Rm8za2lPVlB1NmNLX3J4RTBOZGo0bjloMWJDdTJsTlg5ZDRiQm4xVl9WcFJyemJLdlk4Nnp2ODFjNm9GNThkUUJnSlBCNmJTMzVpT1dPX0pyTFpXZ3lQcmdTNldXckNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月5日 奈良県十津川村 長殿の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 奈良県十津川村 長殿の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 奈良県十津川村の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月3日 大阪府豊能町 高山1028-1付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月7日 島根県浜田市 浜田市弥栄町田野原、県道34号付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 広島県三原市 久井町下津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOX1F3U25iUDY5OGdNMGFnb25WN3otZ2NudE93Qm5Fc3Z0OGtyVTdPcTdVSHBFUTY5QjlLVEMxRU5NR1lmbVBNai1TWFotLXZPeFRET09famM0R1B5dnZMNXZtZlpuMlpuSllfM2VlQ2NFMEdpb0o3NjgtRUJ5b0RfY1lYNFZqcjZ2VXc3TFZ1X2NSTDJvQ0ZLekhMWTZ3R1hGM0HSAaIBQVVfeXFMTl9Rd1NuYlA2OThnTTBhZ29uVjd6LWdjbnRPd0JuRXN2dDhrclU3T3E3VUhwRVE2OUI5S1RDMUVOTUdZZm1QTWotU1haLS12T3hURE9PX2pjNEdQeXZ2TDV2bWZabjJabkpZXzNlZUNjRTBHaW9KNzY4LUVCeW9EX2NZWDRWanI2dlV3N0xWdV9jUkwyb0NGS3pITFk2d0dYRjNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月1日 広島県廿日市市 原宇治久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeHNYLUhkTkh4MkRvMVNYdWRnbkRHS3JLM3JfV0txWkI5eG5LNGFvWnJ4a2dXcEJnajVMTWROOFFTUUN0M0xYdnRBaDFoRFhoWWZ2QmM0ZUpMUDVyQkVXa2UyM2FJV1p4c2VDSzZIT21YRVdaZ0tCcV9Hejlnd2QzZkl0UENSTDFWelhseWVDY1JnSHFFcjFHemduNk_SAaIBQVVfeXFMT1QtbzNtbmF0R21EM3lldjVzZ3U5QU5zQUludW1rR0xlbFlHWUlXUnJ3MThkajRYTXBfWGhyTWZRN2VrMmd6RjJROW5UbU5VZXhORzNoUnlCaUc4TGZvR2FIYzRRNFhjQ1dSQnBIZVRYRjFLamlaajN5YmRIUWtRYmJGZmJlZ05rc2tweVJVdi1IN1V3MUtMbVhzNFBqSTZKMFRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月2日 広島県北広島町 奥中原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNWGxtRHBKUjd6R29NclkySEFkQnlXSVBZUUdvWjBka19mSl9QdC05M3pXQUdDcTJmdDdvTkh5LXotTGNCRFotTmNMVzBQNklpZmczMXFGcUFFQlZQM3JyLXJXbldLUHBZaThlZVBPRlhQbnhLZ09vSFpxY2NlZXdQMlQzTWhiZjg3ejBsMFVVeUpiOWNXTUViMHhDcWMxQWFBUWFqWFYtVlM5bHREZGtnX0NxWjdTUmlrWW0tS1hIek5JYTBHX1ZaSjJDMEs0ZXFNc1FzN0l3TXZOeWNEaUJKODZzREw2bnRXczhFQ19HOERrd9IBogFBVV95cUxNY1hTdUN4ZnJvUkM3cVlSWTVrSGRDdV92LUhHLVJ1UkNDYU9jWTFmN0VqVFZZblplZDlLcGFxVHdIT0dLY284UGg4eGkxMnJ2dWxPbmV3M1F3dXI3TUE3SFVGZ0tYa0QtdG9wTXI5andFbTNtNEEzakhVOHNLalRaMmZGMzBMVGg3Wm1QY19IRkllOUxtZjNxaVVTcE4ydmx5NlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 広島県廿日市市 原上川末の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeU9yd2NnVXZzSzh5NC1Famh2VHhmNFhQZEhQOTZMWEdENkNUSXk3UjljMUhoY0UtXy1vUjZkUjFHdVl5WjRoeDNVZ0VlSGZLTzVmVUJGVHZHZWxfam9IRnM1NWE2blhHVi0yeDk0Wk5ocWtUU1JiX0xveVJ6Ti1ZRC15TDhndDZGVi04Zmg5UW5HLXRZVWJVLWpkT2rSAaIBQVVfeXFMTlVHVV8xOVh5OWxPM3g2UDR0VU5odUhKX3VzTkJqQmhZdXdBN3pOeV9pRmgtQlpjNng4YnA2SFFHS3hEdUtzSEtsUTNoMG9OYnduMmZRWXZBYW43ejA0NTBKOUVYSzdNQWtMaHdfMzZlbHpJRjZuMHh5a3pOenNPZ0ZwYk5mZ2E4cTRHenhiN2M4bmtjQ05naDI3a1dYXzFiVHFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 広島県三次市 作木町下作木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPZmlwM01NR1lrVFl3M2tHNFhJNFR5MnpJRVlIMU5URVZHTDFRYlhIQVpBTUNPcnhpNU9UY2pEeTJXM2VLRE81dFFWbVFEckM0WG1TTEhBcmt2V0ZMZWNwX2txYmQtTkItOTNyT3FhVFJpbUxlZGFpRkJJOFpNWVVkT3owRUdTWjFlQnp0OWVCaUQzdVo1T3ZMdzNKT3kxNEdjSzR6WnZndEFkemxOVmwyZXVQRWFmbXhQczQyRUJJWUxZTzM0NTBLblo5QlVaWDBlNExlNm5qTXZIMVVmdEJpa2N1VWVfV0FjaDktYkNWNnpId9IBogFBVV95cUxNbTZuSFExM3JSRDVXX2tNT1NROU5TYzNLd081TVVJaXdmTmlJanVWSkpkd0FaTVk5UXZwX0dyRTZ0Ti14QkhxUkg0bDJncDU1SmZHMEZSNWg4YVE4Qi1TMWRrYjF0LWY3NG1jV1lUSUt4elYtSUh2Wk9HSTBZZkFYT0dJRnJzeTVsVkVrRGRTelk2Z0kxU0tnOTB1aVZZNHhVSHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月7日 鳥取県日野郡日南町 宮内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月6日 鳥取県鳥取市 滝山（上野）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 鳥取県八頭郡智頭町 中原の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月3日 鳥取県岩美郡岩美町 荒金の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月1日 鳥取県鳥取市 国府町清水の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":101},{"pref":"青森県","count":52},{"pref":"京都府","count":43},{"pref":"岩手県","count":41},{"pref":"福島県","count":36},{"pref":"宮城県","count":32},{"pref":"島根県","count":32},{"pref":"長野県","count":26},{"pref":"山形県","count":25},{"pref":"群馬県","count":23},{"pref":"山口県","count":23},{"pref":"秋田県","count":23},{"pref":"岐阜県","count":16},{"pref":"栃木県","count":14},{"pref":"山梨県","count":13},{"pref":"新潟県","count":10},{"pref":"富山県","count":10},{"pref":"兵庫県","count":10},{"pref":"福井県","count":9},{"pref":"広島県","count":8},{"pref":"鳥取県","count":6},{"pref":"三重県","count":5},{"pref":"岡山県","count":5},{"pref":"東京都","count":5},{"pref":"埼玉県","count":3},{"pref":"奈良県","count":3},{"pref":"石川県","count":2},{"pref":"静岡県","count":1},{"pref":"滋賀県","count":1},{"pref":"愛知県","count":1},{"pref":"大阪府","count":1},{"pref":"和歌山県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          週次レポート
        </span>
        <span>対象期間: 2026年9月1日〜2026年9月7日</span>
        <span>·</span>
        <span>公開: 2026-09-08</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={581}
        periodLabel={"2026年9月1日〜2026年9月7日"}
      />

      <h2>全国の出没概況</h2>
      <p>本対象期間（2026年9月1日〜9月7日）において、全国で記録されたクマの出没件数は重複を束ねた集計で581件に達した。都道府県別の出没件数上位は、北海道が101件で最多となり、次いで青森県が52件、京都府が43件、岩手県が41件、福島県が36件、宮城県が32件、島根県が32件、長野県が26件、山形県が25件、群馬県が23件となった。北日本を中心に高い件数が記録されているほか、近畿や中国地方の一部地域でも高水準の出没件数が確認されている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">出没件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">101件</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">52件</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">43件</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">41件</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">36件</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">32件</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">32件</td></tr>
            <tr><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">26件</td></tr>
            <tr><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">25件</td></tr>
            <tr><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">23件</td></tr>
          </tbody>
        </table>
      </div>
      <h2>主要トピック</h2>
      <h3>キノコ採り等に伴う山林内での人身被害および回避時の負傷</h3>
      <p>秋の味覚採集シーズンに入り、山林へ立ち入った住民がクマと遭遇して負傷する事案が発生した。長野県伊那市の山林において、キノコ採りをしていた男性がクマに襲われ、格闘の末に負傷した事案が確認された（※1・2）。また、同じく長野県軽井沢町の国有林においても、キノコ採りをしていた男性がクマに襲われて負傷したと報じられている（※3）。さらに山林内だけでなく、山口県田布施町ではクマから逃げる際に小学生が転倒してけがを負う事案も発生しており、遭遇時の直接的な攻撃のみならず、突発的な対面に伴う二次被害への警戒が求められる（※4）。</p>
      <h3>住宅密集地・建造物近接箇所への居座りと緊急銃猟の実施</h3>
      <p>市街地や集落内への侵入にとどまらず、家屋の敷地内に長時間滞在する危険な事案が確認された。京都府舞鶴市の住宅街において、住宅の軒下・縁の下にクマ2頭（親子）が居座る事態が発生し、住民への危害を防ぐため緊急銃猟が適用され、2頭とも駆除された（※5・6・7・8・9）。市街地や住宅敷地内では発砲に伴う安全管理上の制約が大きいなかで、住家構造物への居座りという高リスクな状況に対し、緊急銃猟による殺処分という強い対応が取られた事例となった。</p>
      <h3>駅周辺・住宅街および学校近接エリアへの頻繁な出没</h3>
      <p>日常生活の動線となる駅周辺や住宅街、学校付近での目撃が各地で相次いだ。北海道砂川市では、JR砂川駅付近の住宅街に体長約1メートルのクマが出没し、50代女性の前に現れるなど連日にわたり警戒が敷かれた（※10・11・12・13）。また北海道滝上町でも体長約2メートルのクマが住宅街を歩き川へ立ち去る姿が確認されている（※14）。東北地方でも青森県三沢市の三沢駅南側や住宅街での出没（※15・16・17）、岩手県盛岡市北部の住宅街における連日の目撃（※18・19・20・21）、山形県天童市の住宅街での体長80センチメートルの個体出没（※22・23・24）などが記録された。教育施設周辺では、新潟県魚沼市の湯之谷中学校付近（※25・26）、岩手県奥州市水沢の小学校付近（※27）、長野県安曇野市および飯田市の学校付近（※28・29）、山口県山口市の小学校近くの県道沿い（※30）、島根県安来市の旧小学校前県道（※31・32・33・34）など、通学路に近接する環境での出没が顕著であった。</p>
      <h3>農業被害・地域活動への影響および錯誤捕獲</h3>
      <p>出没に伴う生活や地域行事への影響も表面化している。三重県熊野市ではクマによって養蜂箱が破壊される農業被害が発生した（※35）。また三重県尾鷲市ではクマの出没を受けて小学生の恒例行事が変更される事態となった（※36・37）。兵庫県高砂市の高御位山では熱源が確認され、入山自粛が呼びかけられた（※38・39）。捕獲面では、山口県岩国市や周南市において、イノシシ用として設置されていたくくりわなや箱わなにクマが錯誤捕獲される事例が相次いで報告された（※40・41）。</p>
      <h2>地域別動向</h2>
      <p>各地域における主要な出没傾向は以下の通りである。</p>
      <ul>
        <li>北海道（101件）：道内全域で高水準の出没が続いており、滝上町住宅街での大型個体（約2メートル）の徘徊（※14）や、砂川市のJR砂川駅周辺住宅地における連日の出没（※10・11・12・13）など、市街地侵入が目立った。</li>
        <li>東北地方（青森県52件、岩手県41件、福島県36件、宮城県32件、山形県25件、秋田県）：青森県では三沢市街地や住宅街での目撃（※15・16・17）、おいらせ町での連続目撃（※42）、五所川原市の運動公園付近（※43）など平野部・住宅部への浸透が見られる。岩手県では盛岡市北部の住宅地道路での相次ぐ目撃（※18・19・20・21）や奥州市の小学校近隣（※27）が報告された。福島県では国見町の県道（※44・45）やいわき市小名浜の住宅地近く（※46・47・48）、宮城県では仙台市八幡の住宅街（※49）や富谷市（※50・51）、山形県では天童市の住宅密集地（※22・23・24）や河北町の工業団地（※52）、山形市のインターチェンジ付近（※53）、秋田県では秋田市住宅街（※54・55・56）や鹿角市の駅近傍・牛舎（※57）など、都市近郊・交通結節点での出没が多発した。</li>
        <li>関東地方（群馬県23件、栃木県、埼玉県、東京都）：群馬県では前橋市、富岡市、下仁田町、安中市、渋川市伊香保町など広範囲で出没を記録（※58・59・60・61・62）。栃木県では那須町や佐野市の路上・山林（※63・64・65・66・67）、埼玉県では秩父市大滝や小鹿野町河原沢（※68・69・70）、東京都ではあきる野市や日の出町大久野において痕跡や出没の確認が続いた（※71・72・73・74・75）。</li>
        <li>中部地方（長野県26件、新潟県、富山県、福井県、山梨県、岐阜県、三重県、静岡県、愛知県）：長野県では伊那市・軽井沢町でのキノコ採り中の負傷事案に加え（※1・2・3）、安曇野市や飯田市の学校周辺での目撃が発生（※28・29）。新潟県魚沼市の中学校周辺（※25・26・76）、見附市の県道走行中の目撃（※77）、富山県富山市の田園地帯痕跡（※78）や立山町・高岡市（※79・80・81）、福井県坂井市の海浜自然公園付近（※82）や越前町・小浜市（※83・84）、山梨県北杜市の農道北側での採食行動（※85）や富士吉田市での車内対面・木登り（※86）、三重県熊野市の河川敷・山際や養蜂被害（※35・87・88）など、多様な環境での記録がある。</li>
        <li>近畿地方（京都府43件、兵庫県、奈良県、滋賀県、大阪府、和歌山県）：京都府舞鶴市での住宅軒下居座り個体への緊急銃猟駆除（※5・6・7・8・9）が最大のトピックとなった。兵庫県加西市での成獣目撃（※89・90・91）や高砂市の山林における熱源確認（※38・39）、奈良県十津川村での複数回目撃（※92・93・94）、大阪府豊能町の車道横断（※95）などが記録された。</li>
        <li>中国地方（島根県32件、山口県、広島県、岡山県、鳥取県）：島根県安来市の旧小学校前県道横断（※31・32・33・34）や浜田市の県道・河川移動（※96）、山口県田布施町の小学生負傷（※4）、岩国市・周南市でのイノシシわな錯誤捕獲（※40・41）、広島県廿日市市や三原市、北広島町、三次市での痕跡・出没（※97・98・99・100・101）、鳥取県各町での目撃（※102・103・104・105・106）など、山間部から集落境界部での活発な動きが確認された。</li>
      </ul>
      <h2>注目事案の時系列</h2>
      <p>期間内に発生した人身被害、市街地侵入、駆除・錯誤捕獲などの主要事案の推移は以下の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日・報道日</th>
              <th className="px-3 py-2">所在地</th>
              <th className="px-3 py-2">場所区分・環境</th>
              <th className="px-3 py-2">事案内容</th>
              <th className="px-3 py-2">記録ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">9月1日</td><td className="px-3 py-2 text-xs">山口県田布施町</td><td className="px-3 py-2 text-xs">町内</td><td className="px-3 py-2 text-xs">逃げる際に小学生が転倒し負傷</td><td className="px-3 py-2 text-xs">（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月1日</td><td className="px-3 py-2 text-xs">岩手県盛岡市</td><td className="px-3 py-2 text-xs">住宅地道路</td><td className="px-3 py-2 text-xs">住宅地内道路で1頭目撃、北へ移動</td><td className="px-3 py-2 text-xs">（※20・21）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月1日</td><td className="px-3 py-2 text-xs">宮城県仙台市</td><td className="px-3 py-2 text-xs">八幡3丁目住宅街</td><td className="px-3 py-2 text-xs">住宅街で目撃</td><td className="px-3 py-2 text-xs">（※49）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月1日</td><td className="px-3 py-2 text-xs">東京都あきる野市</td><td className="px-3 py-2 text-xs">菅生</td><td className="px-3 py-2 text-xs">集落・道路付近で目撃</td><td className="px-3 py-2 text-xs">（※71・75）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月2日</td><td className="px-3 py-2 text-xs">北海道砂川市</td><td className="px-3 py-2 text-xs">駅周辺住宅街</td><td className="px-3 py-2 text-xs">体長約1mのクマが出没、50代女性の前に出現</td><td className="px-3 py-2 text-xs">（※10・11・12）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月2日</td><td className="px-3 py-2 text-xs">秋田県鹿角市</td><td className="px-3 py-2 text-xs">駅近く市街地・牛舎</td><td className="px-3 py-2 text-xs">駅近く市街地や牛舎で目撃</td><td className="px-3 py-2 text-xs">（※57）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月2日</td><td className="px-3 py-2 text-xs">山梨県富士吉田市</td><td className="px-3 py-2 text-xs">松山地内</td><td className="px-3 py-2 text-xs">車内から目撃、対峙後クマが木に登る</td><td className="px-3 py-2 text-xs">（※86）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月3日</td><td className="px-3 py-2 text-xs">京都府舞鶴市</td><td className="px-3 py-2 text-xs">住宅軒下・縁の下</td><td className="px-3 py-2 text-xs">住宅軒下に居座った2頭（親子）を緊急銃猟で駆除</td><td className="px-3 py-2 text-xs">（※5・6・7・8・9）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月3日</td><td className="px-3 py-2 text-xs">兵庫県高砂市</td><td className="px-3 py-2 text-xs">高御位山</td><td className="px-3 py-2 text-xs">熱源確認に伴い入山自粛呼びかけ</td><td className="px-3 py-2 text-xs">（※39）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月4日</td><td className="px-3 py-2 text-xs">三重県熊野市</td><td className="px-3 py-2 text-xs">私有地</td><td className="px-3 py-2 text-xs">養蜂箱が破壊される被害</td><td className="px-3 py-2 text-xs">（※35）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月4日</td><td className="px-3 py-2 text-xs">福井県坂井市</td><td className="px-3 py-2 text-xs">海浜自然公園付近</td><td className="px-3 py-2 text-xs">15:45頃に成獣1頭を目撃</td><td className="px-3 py-2 text-xs">（※82）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月4日</td><td className="px-3 py-2 text-xs">三重県尾鷲市</td><td className="px-3 py-2 text-xs">市内</td><td className="px-3 py-2 text-xs">クマ出没により小学生の恒例行事を変更</td><td className="px-3 py-2 text-xs">（※36・37）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月5日</td><td className="px-3 py-2 text-xs">長野県伊那市</td><td className="px-3 py-2 text-xs">山林</td><td className="px-3 py-2 text-xs">キノコ採りの男性が襲われ格闘し負傷</td><td className="px-3 py-2 text-xs">（※1・2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月5日</td><td className="px-3 py-2 text-xs">北海道滝上町</td><td className="px-3 py-2 text-xs">住宅街</td><td className="px-3 py-2 text-xs">体長約2mのクマが住宅街を歩き川へ立ち去る</td><td className="px-3 py-2 text-xs">（※14）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月5日</td><td className="px-3 py-2 text-xs">新潟県魚沼市</td><td className="px-3 py-2 text-xs">湯之谷中学校付近</td><td className="px-3 py-2 text-xs">中学校付近で1頭目撃</td><td className="px-3 py-2 text-xs">（※25・26）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月6日</td><td className="px-3 py-2 text-xs">青森県三沢市</td><td className="px-3 py-2 text-xs">松園町・駅南側住宅地</td><td className="px-3 py-2 text-xs">散歩中の住民が目撃後、住宅庭に体長100〜130cmのクマ</td><td className="px-3 py-2 text-xs">（※15・16・17）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月6日</td><td className="px-3 py-2 text-xs">山口県岩国市</td><td className="px-3 py-2 text-xs">周東町川上</td><td className="px-3 py-2 text-xs">イノシシ用くくりわなに錯誤捕獲</td><td className="px-3 py-2 text-xs">（※40）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月7日</td><td className="px-3 py-2 text-xs">長野県軽井沢町</td><td className="px-3 py-2 text-xs">国有林</td><td className="px-3 py-2 text-xs">キノコ採り男性が襲われ負傷と報道</td><td className="px-3 py-2 text-xs">（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月7日</td><td className="px-3 py-2 text-xs">島根県安来市</td><td className="px-3 py-2 text-xs">旧小学校前県道</td><td className="px-3 py-2 text-xs">13:20頃に成獣1頭が県道を横断</td><td className="px-3 py-2 text-xs">（※31・32・33・34）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月7日</td><td className="px-3 py-2 text-xs">山形県天童市</td><td className="px-3 py-2 text-xs">北久野本住宅街</td><td className="px-3 py-2 text-xs">住宅街で体長約80cmのクマ目撃</td><td className="px-3 py-2 text-xs">（※22・23・24）</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月7日</td><td className="px-3 py-2 text-xs">山口県周南市</td><td className="px-3 py-2 text-xs">八代</td><td className="px-3 py-2 text-xs">イノシシ用箱わなに錯誤捕獲</td><td className="px-3 py-2 text-xs">（※41）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>今期（9月1日〜7日）の出没動向における最大のリスク要因は、季節活動に伴う山林内での人身接触と、市街地深部・住宅敷地への個体の侵入・定着傾向である。長野県伊那市および軽井沢町でキノコ採り中の男性が相次いで負傷した事案（※1・2・3）は、秋期の森林内活動における遭遇リスクの高まりを明確に示している。森林内へ立ち入る際は、鈴や音の出る器具の携行、複数人での行動、見通しの利かないヤブへの接近回避といった標準的な安全策の徹底が不可欠である。</p>
      <p>市街地においては、京都府舞鶴市の住宅軒下に居座った個体への緊急銃猟適用（※5・6・7・8・9）や、北海道砂川市の駅周辺住宅街への連日出没（※10・11・12・13）、青森県三沢市の住宅庭への出現（※16）など、住宅密集地や建造物への依存・滞在行動が複数地点で確認された。これらは人間活動地域と野生動物生息域の境界管理における極めて高いリスクを示唆している。さらに学校周辺や通学路での目撃例も多く（※25・27・28・29・30・34）、登下校時間帯の安全確保が重要課題となっている。</p>
      <p>次週に向けた警戒ポイントとして、以下の3点が挙げられる。第一に、秋のキノコ・木の実採取シーズン進行に伴う入山者の安全管理であり、山林内での遭遇・人身事故防止の周知が最優先される。第二に、市街地・集落内における誘引物管理の強化である。住宅敷地内への居座りや養蜂箱の破壊（※35）、生ゴミや果樹等の放置は個体の居着きを招くため、敷地周辺の環境点検が必要である。第三に、農業用わな（イノシシ用箱わな・くくりわな）への錯誤捕獲の増加傾向（※40・41）に留意し、見回り時の安全確保および錯誤捕獲発生時の迅速・適切な放獣・対応手順の再確認が求められる。</p>

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
          <dd>2026年9月1日〜2026年9月7日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-08</dd>
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
