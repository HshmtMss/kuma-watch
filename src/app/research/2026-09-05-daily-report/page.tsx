// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月5日 / mode: daily-report / 生成日: 2026-09-06
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-05-daily-report";
const TITLE = "2026年9月5日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月5日、国内で62件のクマ出没が報告された。長野県でキノコ採り中の人身被害が発生したほか、京都府では住宅地に現れた2頭が駆除されるなど、人間の生活圏における深刻な事案が多発した。北海道、青森県、京都府を中心に全国的に出没が確認されており、秋の行楽期に向けて警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-06",
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
  datePublished: "2026-09-06",
  dateModified: "2026-09-06",
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
      "title": "京都府舞鶴市 / 住宅の軒下 - 住宅軒下に居座ったクマ2頭を緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9iSzY4Z1RUN0ZaYk1PaXpPVjZtMzFlLTB1eG56a29QZnlNcXhRWGhuYkhCSnVqTGZCZGdOOGFmRUpRWW9vQ3ZCQ2wyZ3FIMnpxRkRvRFBTSDBEMzUzMWhfZU42VkZPZw?oc=5"
    },
    {
      "title": "長野県伊那市 / 山林 - キノコ採り男性が格闘し負傷",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPOUdlZVRtRGIzaGZYZHJ4MzhURHJVejNBOGF3dFVWTW1QZDZQcDhMeUFnQnFlMkh5d2ZjeVI2SDhfczJIRU1kMFZNakpEdHdiWmNvSzlLaVJRTWlKVThxZVpsZy1RVU5TZko5dkRJY21KSXQtWXdRZFBFMm1KbHBaZGVSUWY0dFNnVTJ4Wjh3?oc=5"
    },
    {
      "title": "長野県伊那市 / 伊那市 - キノコ採りの男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9XM1RDVG0yOHBkX21GOGFETEhrTFY3TzRSM1dTdkF6XzNUN2Y4a3E0Uk90dUlBbTYxcjBqZXA0Y3BmRS0wdGVxRF9RTmZkdw?oc=5"
    },
    {
      "title": "京都府舞鶴市 - 緊急銃猟によりクマ2頭を駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBOOHRRYlUtajNzU1djRlVlT0JOSkJNMVFUNGpBQWRpMnA2SHBfZFQ3Q1JGWTBFX2FkT25JdFFFRjl6RVNzRkNsZThVSy1NeHVLOWNKNHNNcU83TE9vdDREZTZMTFc5NkVSbm5FNEJ6WE5ZR0lmaEl0cVVyVVdNUEk?oc=5"
    },
    {
      "title": "新潟県魚沼市 / 湯之谷中学校付近 - 湯之谷中学校付近でクマ1頭の目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBhaDZqdEI4WDlaVFYwMjg4d0J4RDg5MktqYWlGVjVJeHNCTWtzUjctUm53eUt3THltNmpzX3pkSlRoQlFR?oc=5"
    },
    {
      "title": "北海道滝上町 / 住宅街 - 体長約2mのクマが住宅街を歩き川へ立ち去る",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBORTBreXduV2FnNTgzdUhnZzBrenB6QUZmZXhsdnNGcFFZckxyZjA4ejg1WjhKYkxqQThFbUxuM1NzWFdIVFFxTGx3VGtVMF82aFIyMll0STRiQktaX2VFZGI4cGlZdmVNQnM5RzFsVHdBb0ZScXM0aDhWQdIBgAFBVV95cUxNMGh6QkRkTHotYVpubW1QY3RkNTI3NFJYMm9tYnJra2o3RTMtV3h2WGc3Z2dSZGdJTkQ5bHlYenBTeU1XZHBQb1BCZzBubDNPYkdjR19nOXdDYkF5blBHM2VhRjVKZGVHeHM4VmJYWkxELUREa1N4ankteTFrRWx5Uw?oc=5"
    },
    {
      "title": "京都府舞鶴市 / 住宅の縁の下 - 親子クマ2頭を駆除、1頭逃走中",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAtc01NRjZLZHNQQkFZcjJVSXZoVktSZUVualhLYkdFemF0bThzRTZqTmZDNllXbmpkeWdpcnRMZmhfZnY4OVRBWlAxUzV3MlJyLVZZWi1lQmJaMkplM3FrcjZpb3FKYjF0UkstR1BZYWgtMXoySXFyU1BwQ2dtV3c?oc=5"
    },
    {
      "title": "新潟県魚沼市 - 魚沼市でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5feXQwM1YtMkpwdVFQTmU1eWFLNXl3bFVwN0wxeXFySlNTOWxYQlo1OGVHdVhaUTItaUVEbnNZQmhOc0drU3FrNWY5WHQ5QQ?oc=5"
    },
    {
      "title": "新潟県魚沼市 / 魚沼市 - クマ？のような動物を目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBMTWdsaHIzaDVuV0VFNUtGNzl6SFRlOUlYV3ZVYXV4OUxVeEh4SHVNUUhSeFNVZjk1NzdfM2Rxd29ORzNZb2YwZXEySUtoSEtzVDdZOUJFbWVKTnhkWWVz?oc=5"
    },
    {
      "title": "栃木県那須町 / 高久乙 - 高久乙でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTWlrUC1rdTlnOG5HRXk2bFY0YzNlQmZfNDhpREhQNTdOTXF1VndGTjE5TVJRVXNVcC1UZElaWWNmRTZud3hEaXFMLTJobThCbk0wV2RQTmdXamctbUpRa0VITGswa2dscWo1cEx1cko3MTJieklzeU5OMmFIS1RILTk2VWxYX01adnQ3c3FuVTRkaHNwQklpQ2V6dU7SAaIBQVVfeXFMUGhxNTg1czhPTnhHZnVNaXEzUWNGUFlydTJON21oQlVTcHBiMW1MTFY4RjVYM0tGSXIyUDVhTFZuVkFINFhqeWZ2bXFaV0RWcUFsOFVNYTY0ZW8yV29KZzlHY00zRHRmV2VjcXpJZlljbGN2WU93ZmU2Ujh2SjZrSF9lbktvMnVWMFB0dDJYdVlkOERxSjZTYmFQa2JTdnRudVVn?oc=5"
    },
    {
      "title": "島根県雲南市 / 吉田町 - 島根県雲南市吉田町でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPZnBkaWlfZEd6OEV0WWxVa1ZwdjVpd2FQVGxCS056cG52aTdDS1AzZnp1RjB1dmY1WjdGYTNnc3RSeWFXamhTdEplRm9fRDhGSi1KVGNuRmNfNzJFcHM0UUhlVFhXd2c2Z25XZ3pkQlJxYkVtVUszWFJNYlpmdmJJaHJQaEk1cDg3Q19wX0V2YmhxZ1JPMW1BVmJycTMtQk5XWXk4QUNaNElyUlAxTS1ERE9URDdydG9OYzNxOGNyVTlUcmRJU05ieUZUN2NDQ1ltaWtzalpaYmI1c0tQbFHSAY4BQVVfeXFMTWtNWS1qTzUtTTdXNDVUcVQ1YUlKVEhHUmFXazRaZVY5SEZGOTlwSWRZajVKc0U5VW5nR05saW0yamdzOFZhbGlyTzVPa2doaE9SWGgwcVBMUUVENGtOa0Q1dnUteUU2YUNHamUwWGJBdVZCWjBxekYtaF9vQmpiX3o3N2luZVNUemg0MGt5dw?oc=5"
    },
    {
      "title": "北海道喜茂別町 / ゴルフ場 - ゴルフ場の9番ホールにクマ2頭",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB2WmxZdlJsbFZEd1pOaFVFOUdCSlpPYXpjUkF5VThYVnpyQ3R6UktWMEUtX2FHVU05WXJzLVVVbzNkUTdLWEYxVDlRNlVRbGktRkhDM3RVS3o4MjJza0U2dGpJci0xUUlwWVZKLVFQWGFKRFBDcjlwaEtkeDR3aHM?oc=5"
    },
    {
      "title": "北海道枝幸町 / 歌登大曲 - 枝幸町歌登大曲でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWENQTnFVR3p0bGF2SldlLXpFOVgtZFVnOVk3UVFxVVdxS3FuLWxiSXZZeEN5dGhBQ3ZmNUQ1VnJBelhLeU9GUDVKLXp3Y3BwM1hGZ2R0MDhMTUM1RnpJNlo3R3l5WlhLYmQxTlpjdVdnRE43bXZ0SmptV1BndC1uNEdsVDJSU2lZdU5yTGF2Z0RSR08xUlZuNHNFUDbSAaIBQVVfeXFMTVZMUm01RDBnUi03Q056RzBvekRYdkh1V3BPUmhXdnh2YlIyZlJmRGZXbVhEdElzYWJ5QS1BQThaczZBVHkzVnk0WWQ2UVpFOXhjSWFRc1VRd3d0UXVac0phTnpSN0VTRVFrVi1nNXBYTVJaZVJBS0NEeTN4eDlfT3kzaEhFMjRmZ0FBci1HaVBMQjRQOWtSVnM2VGRQanI0X1Zn?oc=5"
    },
    {
      "title": "北海道森町 / 石倉町 - 森町石倉町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbFlvckJxNTY5bkRCdFRsTEozbDNKb1RrS0VZbk5CcGpFVEdWRUJWcHBsSi1yY3FkS2hsc3VxdjdvVDUwRzAyQTUyaVNMdWVLMURmRFRNM2NFUUlpTVVjWnN6ZWdpaGlub0U0RXlWQWE2SndPZlJ3RmZGcjdfb3loZV9mLTdOTW5KVnpjQmtzc3ZBdzRZMTNiY2JuTnFVWUVfOENrRU5OQjcxbFFqeUN1aU4zR21wTUVJOVd4RnpURFdHZmNHRFJvcUhaV3lCMXVyR1BxbG1ydmN1Wlk4TXU1OGZ4Mk1FMUtLZ2lHMF9GZEVDQdIBogFBVV95cUxOX2JrOVhQcG5QQ1N6TFNqdk50RW0tRXJEaXpBMWVfOU5hSHYwVVJqVnVtTy1PcHYyMlZHQkpHSW1CRGV1b2NIMEYzMTV0YXQ4dExZV0hSRGJyZTZweTZtZTI4RWtNd0lLMWktSFVfOWJLNVBDWVNySTRIVF9WQl9McVJTQ3EtR1EyMHJ1U3pUcDBBNlNvRTRrNnFqNmtTMDRjNkE?oc=5"
    },
    {
      "title": "青森県八戸市 / 大久保大塚 - 八戸市大久保大塚でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdEpSWUpFQ2VyOENtczRDWnBsYlFYX0dKdXFhMGduRmQ5WFkycXhqM1RoSzhZMDhYTmZRYzE2anQ3ZTFKWERaRERzU0ZOM3BvTU8wWW02Z0N3R3d3OXZrLTlUV012TkZGTUpPSjN6Ni1EWXExRTFXMU5ocXE3eWRDNFgzWTVTVGRTb3YwX0ZJTlVlbUowVXJVRU14N2LSAaIBQVVfeXFMTVh4UV9tdlNodklnamVhcDJJTTV6NjRmQTVzYWVKNUFfRU9ReVh2WVh4NVYwMkpLRW5oYmFTRDREZ25DY2ZSb3F5TzV0bDV6cjFlMlY3NWVEVmxZTk9WNE5OVlBMSHd5VFJPMUI5NV9sbXN0aHBTVW4zTEJuaXlycncxbGx1WmgzeS1vMF82cmRBbV9qUU1PZEM0S0w0ZUpiNldB?oc=5"
    },
    {
      "title": "青森県三沢市 / 古間木2丁目 - 三沢市古間木2丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR21KVnZaN05xTXpsSmc0eFpaQnA1UU1JdXdZRnY4ZHk4bE5EeXJsRHNhcjl3SjZtT2pTOWZLQUFsMFFobVN0MVFMVXdkS19WaWlZNFk4WFJ4TnBqTGFJR1JnRHZvUC1WSHZxMG5FR0RsTW5hMzZ6TEwxbE5iOWFFaDZXMHVWNWVKUjJNdTJMQ3k5RDc3dm5FSjZKbkbSAaIBQVVfeXFMUE14R2t1cW9ZMVZsN21JTEVLSi1vOXc3Wks0S2hlN0NWenRoTjNLbC1ZTmhXcmgyeUwtbVQyOGlmVUdiV3JHM2dWazRvbFlMZEhMWVg1SVRfR3JMci1lUlBybVZ0QzM5NDVyRWhLdEVkTnJ6dmMxdHNLeVRORHk1NG8yTnlSMENzUUVUYlRvU2xIZmNDcDM5azc1c29rM3JERVRB?oc=5"
    },
    {
      "title": "青森県むつ市 / 川内町福浦山 - むつ市川内町福浦山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNakdCSUJRYjRKU1VGdEx0RTVGYlY3RHBuVVVDNFBIbTJyaFU0UEZNWUtHWVd5cy1aRWpQVHI0Y29GZVVMSTRFWUhHQVg5ZUcwLUE5YnlRbXVoTWxjbG9aVHVIa1poUllKcVhYcXBmQjBsVHFpOXVTakFtQU9taC1SRjZ4SVJGSWk4MVBfMnZ1NjVrcFdfd0tYNm5zV3rSAaIBQVVfeXFMUFZBOFpra3otWUhQVzRHVjF2aFByU0dRSTFDOHA0cGVUN3kyQzNMbHJWQThpcFVsR01mRU43YkF6LVR0X2Jaa1ZnSGstcFFBY2lXRllGZnNhdnlnbDBiRmRycV9pbmpEV2xGalc5NjhwLXZOUXdCVXlhZWwwcTNTV3pybjJsN3hFOEtyb3hibmZhOUM4X3dqTkQ3cmNyTXFiUnJn?oc=5"
    },
    {
      "title": "青森県東北町 / 大沢 - 東北町大沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQUUxbnNPUmlZeDdOR3EwYWVKTFdVU1M2V2JoYjJvOUJaS0M2NU1oYTFIbWlCbTRIRTlyM0Z3X3R0VGctTlhMM1ZtWmJiYlE2RnBYZTJkdUlfcGNNMzFmRGZCM1I1NHVZTWVyRVg4cnFadFRvSlR3QmRQemszcXVWYnkycy1EbkdLN3FWTFdKQTVyVklrZV8tTzl2UDXSAaIBQVVfeXFMTzZCbVJyOUNZMW4yaGMwRHlVVnZvYTk4T0FPOFZuczgza3NVbjZoLUZtM2FWbS0wa25sZ1V3VUs0ZHJKZWJYMnlpUVlmSDlCQ2g2S0ZCYkFnbFdCMVVWd0txLVA4WUJzLUtJM2EwOF9iZzNuZ2NQYmhLaGRpWDNOYkozMXgzSzE5NUJYOERxdFlFQlpRQUxvNGozT2ZPUDVCNW5B?oc=5"
    },
    {
      "title": "京都府京都市 / 御陵大枝山町１丁目 - 京都市西京区御陵大枝山町１丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNRkNuQ3NIbE5Kb1YtVkxRZG94YUdkbUtZZ1BqNnNkUUVUUXJlcEVFNzc4ODNqMUZxZzUtU0VWQWc5cEJGWWVDMGRRcjBXdF92TUdaelpIZm1GcWtxMk5FbldXbEZFX1lHa1M1a2FHUGppdG9VdXJoMGQ0dldwQTltZ09mS2E0aHBYTlJLdjZOaVJlb3JwNFl6em12NzdsNzZpdXVCV1ZtczJjWlpCVHVFM2Z6SWhqbzl0WkgtY1pfU3ctY1pMSVJNakt5ekJBWko1Tk9UT19IUkVBejlzckM3eTVicFNKdDRxRFBMV1h6WUFUUdIBogFBVV95cUxPS2RvLS01Qk5qVkFSY1p1NnE3RUg0VjVLc21RZGhzbGJEcGRHRTFyUG0ya2hIMEZNTEh5MmcxZlNuQ0xjMGctYVNxWDJpTUtjdURJeDRSQm5ub2Z1c1U5WVhrUzl6RmYwYVNaUUxBSVY3LVFFYVJJb0tUd3FCZ1gyUnlQMUJ0SGtENFpGNTBPQmZHcV83b0ZMWUppYWJwbXYzNkE?oc=5"
    },
    {
      "title": "京都府亀岡市 / 篠町山本六ノ坪 - 亀岡市篠町山本六ノ坪でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWmpSclo2cktvLXluWUpPRDIwbDFlUlBmb09tOWNYZDd4eGExSE1nbFVfdEdCcUtFNWRkTlZxa2JJWjNNenZzc3JwNEpOYzd4SjJtYm5JalNZa0lDT2dzdmliQUx0UHM3cDJwVGpmTE94NjJqa2tDRVkyd3N6QnlvN1lKSWNvdUpxSEVrdmhNWVhoVWozQ1k2a3oxM0VWeGlrYzRiZk5wS1pSb296M3YxWUtYTUYyQnd4WHRpU1J0a1kyYzZWMk8wWnBHQkxrb1JWdEg1ZFlBNkxfUW5MSW9ZRk9GNjE5MjR2SWIxTklQbzNvUdIBogFBVV95cUxNSnZ1U1EyQUNsRlcyTWpULTBvTFZLSzRvcDRXTVlkSzdmVnlwQ2lYb2syRHBJSzZ3VTYtVFNtQjBCWUJMSmh5aXRzd2puQ2gyQWtyWXhYRE1HaVJCZkJZQWh3TUhkVDl6bWdpQUlPdUxMSEJ1LUF3RzZkU3pxeG1SSlEyend5azdjdXFBOHVBdGpmWnR5MGhSakkyblZFd3d3c2c?oc=5"
    },
    {
      "title": "岩手県盛岡市 / 北松園 - 盛岡市北松園でクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBFa2dWX2UwcDJRRi1CT3RXSFZKR2JMM3NzdEd4YjZJYy1QWjI0a1RsVEMtOU9UQURiYzdBQ29mejJ6T3FjSEdFZDFFYndEUDhiY3U4VGJ0Qk85RUQzYzVz?oc=5"
    },
    {
      "title": "岩手県北上市 / 和賀町藤根１地割 - 和賀町藤根１地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPa3lzVG5wRFJZY0luU2dMYk5RdTllRFNORUFsZS1vTlUwUUItaE9sNWozMjhSNGhKZVRISHhFUEFXM3J6ZHJEVTNmeGRUS2g3RENMeEgzcS1ldkVjc2F5azNiNGFWMVhtTU9paWJiSkZwZmZDd0k2MWI0QTdIM2RGallMa09LdmNBN0MteGJCOUVHQW1XS1g0YzBzLUjSAaIBQVVfeXFMUDZiTWxmZ2Z2SkgtMXQ0b1pGUDBPd3hRMmVHUWdqZXBlbTNtZTlWWHRGY1FENkZnRU9ma25RcjBkMVlJSlVISGhPQkZkSUpERnoyRWJSUnNTUjZ1ZVJCdGg1amJYR2t2RnNqcUM1NUNkOU44MFM2UFdLRmNhMF9lLVBaLVVCSUlQb2duX0MyQUJjd3NVZDVFVnRYUWt0U0owTzJB?oc=5"
    },
    {
      "title": "岩手県花巻市 / 西宮野目第１４地割 - 西宮野目第１４地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQS3JYQkdkcE5XdmUwaURmMVYtbDVvTW90U1dGd1kwZGxJcC12cWdSWElkby1NbW44RHBhSVZpOFBjV0RfZ0VDU2hZNHVrc25sbGt3X3lZRWZZbXJuanZrMEJWWUVvOGhycVo5RXczTllCNFAyZ1duaUQ0WGdoTzU4QnVtbnpkM0FVNFp1MUxtMGRDNkJCTEE3UnJ6M1rSAaIBQVVfeXFMTm9NaDBta2RVS0x2UzVQckppcGhVOVJEb0Z3ajJ2d3hFeEQzM1luVkZxbnF1aVBzUVlRSWVsTE0xVUV2NVI1RWlVV0JlaldQWFdlWUVyZGZWd0hTZjlCVjd6V3h3clVSUVJUSkU4OEZ6MGgwREJJMHdXY1VGazlQYXZBajFXd0tmdHJDRFhsOHA4WlVyeVV2amtLVm50MHl0Z0dB?oc=5"
    },
    {
      "title": "岩手県盛岡市 / 高松4丁目 - 成獣のクマ1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQVnEydHRvMy1nR1ZYVlppREhCYjZDaHpjUmx4SWpldEJWREFkT1p2X3VpalVFY2FOTTExeVZua0tXUzhtMkxldFdMbXo4RnpWYmtvTEFDYVVZb29CdTJaQnoydktKcFZyZTUwSjFHOWgyYTZiaUxkX0NHY1QyR0JvZnVfQkJ0WjQ?oc=5"
    },
    {
      "title": "秋田県男鹿市 / 五里合中石野那神台 - 五里合中石野那神台でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPMHJCV3ViSGJZd1RwZVJDa2xBS1d0THNmNHZ3c0tGSXJaTlFiVkdEdFdTcVFpR25rRDNtTjY2Q2xCa3A4WUJ0MWNCWjhLMFVPUWplUXZQeUw0SW9yNXFBbldTdUFWTEdrcThuaGptYWxHRjFwYnV4dUFna3RUQy02N1lRdmZqTHg2bjhIV0VIenE1YnozSTZOQXR5cUtRUUFVTk1JVUpkZnFXaEpsd1pEOVpRRm55QjNDNnZWckJsR2Z5bG1YYU5UVzFac1lXLTZwRGxiTHhGTHM5V0VRWWMxWWNLSldhSTdWZDJfa1hWQjBKZ9IBogFBVV95cUxQT2RzRncwVU0tbTY4NWN2LWtaR1A1RmFWa1pUMEpvQmp6SGoyaTI2MTlOYzdfODRtaVFZQ3A2UGtGNzFqYnk4WGdVZUZEeXpPYUYxbUZmcVh3cXNPdE9JSWUxWVZSUjh5ajk5QURxZmZHTEhyRTJKbkhxOUZoaXdpYkszOVktU0ppNENjLXdVVWg2QXMxTGFvRzVSNndVNjFWQ2c?oc=5"
    },
    {
      "title": "秋田県横手市 / 明永町 - 横手市明永町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPR2xnTUZ4dm9qRTFfZjFvYmZza0lvdDZfYUFhdVZpem1WdDFjTURSdGkteEZUMnJjb3Itemo3T1BLWmdaQzVDWkU3WFBTYTJwVTVhaGh6X2tnZkFzWExQZEZCLXFlc3RNZ0oxS3VkZEUwVFdSSE9Rb1lTQnRfaFo4N2tMMFFza2NhWEpENGVZeV9fUFQ1YkY0Q3J1ekUtbk9mMmFlNzBBRk0zLU1EZGRpcTFtSFRPVGVoN09XVWphUjBqaWVzemFGdlFIOE1wYjFZQWppZGQyMVZkSWM0UTdCRllHdHZ6ZlBLbVdscHhnTFlid9IBogFBVV95cUxNaVhRS3RUXzdFdW1yVmNfM1BKUVFtV1ZfMUQ2UnZsdU5IalVNRnJ3ZEhZeTNMeHpyOUE1cnFDbGRObTJKQTRnTi1ZSzhaRnpYNVEwMWVpMmdqUngzbjlsUi1HWDZnSFJpWUJFUHFvMnF0VWFtR3FKZ19zNnhrVGZqM191TUZ4YUxNWnVMNElES25XbUotZm1JSnhpU2Y1UVBEenc?oc=5"
    },
    {
      "title": "石川県羽咋市 / 千里浜町 - 千里浜IC付近でクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOS3I2VVM1RG00V2ZFWS14YXBDM2U0WWhLM0czRlNZRUFfOGRPbXEwUVJ3RVR3U3E3ajZpQTlQckI2WF9ic0pReTh6UFQ5a0FwYllIVTFPWXFUMmRLY3NLb1p3NWdJNS0zeWJlVkFYblAwUmhfRnRRcnRYSmhiUGx0X1dVVdIBiAFBVV95cUxNQ0t0dFk3MjcyUlZkVnNCREstRnVrSzFpVXBQUTdyV21MR3dmd2VFd0VjWVJpMk5UM0hjQUd3djNFUjBhSlFOdElPcDBEQ1VRVE9HRlVpTGkybnJKR1lIamdZbTE3Y0ZBWnFIeHFFTVQxWFFWOUJqSFdGM2FMS3FHVDE1MVZUOGJ3?oc=5"
    },
    {
      "title": "石川県津幡町 / 浅谷 - 津幡町浅谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLTFyT3pDQXZ3R3BtOHF1V2I0QS1QQXhHNjZleTBObHdFOUpWVzZlTzgtLWhkckh2c0xMRTktN3Jhbkw5ckQ5NnRJc0ZqbmhGRXRpLTdoX005RDhUV3ZzdU9IXzYzOXN1YTBWb3dDdUJyUU9aSFNwbUljNVJFTXBab2Vjak80cHZtUHhPT2VhbnVUOTRYSnZjZ0Q4aU7SAaIBQVVfeXFMTTZaM1J3emlDTy1SYWc0c0RyOW8yY2t5NTNDNDlnNGhHMUVWTGg4bUdGWG5QdV9IRy1CU2FvLW1ld0N5c2dmUDh1ZlJkaldWNXVELU00aHFpMWg1aFdiODVYZUQzTURUQmotZEN2b05HdXQ4RlVTZ2J5RkgyNmw0MWhfMjBPblRHeEdVZ2IzRkJuYkdzYmdXcERzeHM0OTFMQ1BB?oc=5"
    },
    {
      "title": "東京都日の出町 / 大久野 - 日の出町大久野でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNM01ncUpPYXd4N05SUzZrQUpwdkdiU3VQYS1nWl9EOFAtQ05vVzBpaGgwSkw1TF9LNGlrSDRGZG9GM25KYlRNaEdFejM4TDd1MWdDOVk3aVlNTXhwWWVON09FUDRISjZkY21UQ3hHaGNUM2gzSjZ4cW1WdkdzZi1OYUwySzAtOHdpR2szRmxVV1RrWENqcy1UVzZWemfSAaIBQVVfeXFMTm9NaDBta2RVS0x2UzVQckppcGhVOVJEb0Z3ajJ2d3hFeEQzM1luVkZxbnF1aVBzUVlRSWVsTE0xVUV2NVI1RWlVV0JlaldQWFdlWUVyZGZWd0hTZjlCVjd6V3h3clVSUVJUSkU4OEZ6MGgwREJJMHdXY1VGazlQYXZBajFXd0tmdHJDRFhsOHA4WlVyeVV2amtLVm50MHl0Z0dB?oc=5"
    },
    {
      "title": "山口県萩市 / 国道 - 国道でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9yWE9UakFXSUJJNjVLWEl3aUFhaEM1YU0yVkltZ2VlZ0o2Mkd3Z3ppemZLNjRDZ3NOaDFqZWVxNUUtdjFxX2xnSTRYS0loTEZITTdTZTJDcDA2SWNnVTlEQ05LR080bFJNcVE?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":17},{"pref":"青森県","count":8},{"pref":"京都府","count":8},{"pref":"長野県","count":5},{"pref":"新潟県","count":4},{"pref":"岩手県","count":4},{"pref":"栃木県","count":2},{"pref":"島根県","count":2},{"pref":"秋田県","count":2},{"pref":"石川県","count":2},{"pref":"滋賀県","count":1},{"pref":"岐阜県","count":1},{"pref":"東京都","count":1},{"pref":"富山県","count":1},{"pref":"宮城県","count":1},{"pref":"山口県","count":1},{"pref":"群馬県","count":1},{"pref":"福島県","count":1}];

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
        <span>対象期間: 2026年9月5日</span>
        <span>·</span>
        <span>公開: 2026-09-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={62}
        periodLabel={"2026年9月5日"}
      />

      <p>2026年9月5日、KumaWatchが覚知した国内のクマ出没事案は62件に達した。報道由来の情報が50件と大半を占め、北海道、青森県、京都府で特に多くの出没が報告された。この日、長野県では人身被害が、京都府では市街地近郊での緊急銃猟が行われるなど、住民の安全を脅かす重大事案が発生した。本レポートでは、当日の出没データを分析し、地域別の傾向とリスク評価を報告する。</p>
      <h2>主要事案：人身被害と市街地近郊での対応</h2>
      <p>当日は、人身被害と市街地への出没に伴う緊急対応という、深刻度の高い事案が2件発生した。</p>
      <ul>
        <li>長野県伊那市における人身被害：伊那市の山林でキノコ採りをしていた男性がクマに襲われ、負傷する事案が報告された（※1, ※2）。秋の入山シーズンを迎え、山菜やキノコ採りなどで人が山に入る機会が増える中、クマとの偶発的な遭遇リスクが現実化した事例である。入山者への注意喚起の徹底が急務である。</li>
        <li>京都府舞鶴市における緊急銃猟：舞鶴市の住宅地において、住宅の軒下などに居座ったクマ2頭が、緊急銃猟により駆除された（※0, ※3, ※6）。親子とみられる個体も含まれており、人家のすぐそばまでクマが侵入し、長時間にわたり住民に危険が及ぶ状況であった。これは、クマの市街地への適応と、それに伴う行政の困難な対応を象徴する事案である。</li>
        <li>都市部への接近：上記以外にも、「都市部キーワード」に一致する事案が3件確認された。北海道滝上町では体長約2mの大型個体が住宅街を徘徊し（※5）、新潟県魚沼市では中学校付近で目撃された（※4）。これらの事例は、クマの出没がもはや山間部だけの問題ではなく、都市近郊の住民にとっても身近な脅威となっていることを示している。</li>
      </ul>
      <h2>地域別の出没動向</h2>
      <h3>北海道：生活圏・レジャー施設への出没が多発</h3>
      <p>北海道では全国最多の17件が報告された。滝上町の住宅街や喜茂別町のゴルフ場（※12）など、人間の生活圏やレジャー施設での目撃が際立っている。鷹栖町では1頭が捕獲される（※7）など、行政による対応も行われているが、広範囲で出没が常態化しており、住民と観光客双方の安全確保が課題となっている。</p>
      <h3>東北地方：広域での活発な活動</h3>
      <p>青森県（8件）、岩手県（4件）、秋田県（2件）などを中心に、東北地方全体で活発な出没が確認された。青森県では八戸市、三沢市、むつ市（※15, ※16, ※17）、岩手県では盛岡市（※21, ※24）など、各県の主要都市近郊でも目撃されている。地域全体でクマの活動が活発化していることを示しており、広域での連携した情報共有と対策が求められる。</p>
      <h3>関東・中部地方：入山シーズンにおけるリスク</h3>
      <p>関東地方では栃木県那須町（※10）や東京都日の出町（※33）、中部地方では長野県、新潟県、石川県などで出没が報告された。特に長野県伊那市の人身被害は、この時期の入山に伴う危険性を明確に示している。新潟県魚沼市の中学校付近での目撃（※4, ※8）も、地域社会に不安を与えるものであり、通学路の安全点検などの対策が必要である。</p>
      <h3>近畿・中国地方：都市圏に隣接するリスク</h3>
      <p>京都府で8件と突出して多くの出没が報告された。舞鶴市の駆除事案に加え、京都市西京区（※19）や亀岡市（※20）といった都市部に隣接する地域での目撃が相次いでおり、都市圏の住民にとってもクマは無視できない存在となっている。また、島根県雲南市（※11, ※42）や山口県萩市の国道（※36）でも目撃されており、西日本においても警戒が必要である。</p>
      <h2>出没情報の内訳</h2>
      <p>2026年9月5日に報告された出没情報の都道府県別上位10件は以下の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主要な出没市町村</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">17</td><td className="px-3 py-2 text-xs">滝上町、鷹栖町、喜茂別町、枝幸町、森町</td><td className="px-3 py-2 text-xs">住宅街やゴルフ場での目撃、捕獲事例あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">八戸市、三沢市、むつ市、東北町</td><td className="px-3 py-2 text-xs">県内広域で目撃情報が多発</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">舞鶴市、京都市、亀岡市</td><td className="px-3 py-2 text-xs">住宅地での駆除事案、都市近郊での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">伊那市、軽井沢町、安曇野市</td><td className="px-3 py-2 text-xs">キノコ採り中の人身被害が発生</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">魚沼市</td><td className="px-3 py-2 text-xs">中学校付近での目撃が複数</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">盛岡市、北上市、花巻市</td><td className="px-3 py-2 text-xs">県内各地で目撃情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">那須町</td><td className="px-3 py-2 text-xs"></td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">雲南市</td><td className="px-3 py-2 text-xs">市道での目撃情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">男鹿市、横手市</td><td className="px-3 py-2 text-xs"></td></tr>
            <tr><td className="px-3 py-2 text-xs">石川県</td><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">羽咋市、津幡町</td><td className="px-3 py-2 text-xs">高速道路IC付近での目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>総括とリスク評価</h2>
      <p>2026年9月5日の出没状況は、秋を前にしたクマの行動活発化と、それに伴う人間社会との軋轢の増大を強く示唆している。以下にリスク要因を総括する。</p>
      <ul>
        <li>季節要因：9月上旬は、クマが冬眠に備えて栄養を蓄える「大量採食期（ハイパーファギア）」に入る時期にあたる。食料を求めて行動範囲が格段に広がるため、人里への出没が必然的に増加する。今後、この傾向はさらに強まると予測される。</li>
        <li>餌資源との関連：山中のブナやミズナラなどの堅果類（ドングリ）の豊凶が、クマの人里への出没を大きく左右する。山中の餌が不足した場合、柿や栗といった果樹、あるいは残飯などを求めて、より積極的に人間の生活圏に侵入する可能性が高まる。</li>
        <li>人口圏への接近：当日の報告では、住宅街、学校、国道、ゴルフ場など、人間の活動エリア内での目撃が極めて多い。これは、クマと人間との物理的・心理的な境界が曖昧になっていることを示している。長野県での人身被害や京都府での駆除事案は、この危険な接近がもたらした直接的な結果であり、今後も同様の事案が全国で発生するリスクは高いと評価できる。</li>
      </ul>
      <p>以上の分析から、地域住民への迅速かつ正確な情報提供、ゴミ管理の徹底、そして特にキノコ採りなどの入山者に対する具体的な注意喚起が、被害を未然に防ぐ上で不可欠であると結論付けられる。</p>

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
          <dd>2026年9月5日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-06</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-06</dd>
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
