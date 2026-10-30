// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月6日〜2026年7月12日 / mode: weekly-report / 生成日: 2026-07-13
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-12-weekly-report";
const TITLE = "2026年7月6日〜2026年7月12日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年7月6日から7月12日までの期間、全国で合計1452件のクマ出没が記録された。島根県での人身襲撃や東京都山岳部での遭遇滑落事故、奈良県や岩手県での緊急銃猟のほか、東北から中部にかけての市街地や教育施設周辺への出没が顕著となった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-13",
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
  datePublished: "2026-07-13",
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
      "title": "2026年7月10日 島根県益田市 山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPQW1GejVLdkktczFreVRzeDRLTE9keXgtVjVyRzdFUmNCd1VSN3RFQ0pDLWl0enBHNWNGTnlkakpkdkdvajhzY1M3Nm9TYmxEYXpiYkI5YnhtNUU5ODRsemd5bzd5SE1ycHdwOXBhOVhockNtZkV3TGhoQ3NiLXRuM1cweXBnYU9D0gGIAUFVX3lxTE9BbUZ6NUt2SS1zMWt5VHN4NEtMT2R5eC1WNXJHN0VSY0J3VVI3dEVDSkMtaXR6cEc1Y0ZOeWRqSmR2R29qOHNjUzc2b1NibERhemJiQjlieG01RTk4NGx6Z3lvN3lITXJwd3A5cGE5WGhyQ21mRXdMaGhDc2ItdG4zVzB5cGdhT0M?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 島根県益田市 山中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQMHZmMmFxWTc3VWpnSzRKYnZTXzlHUWg2WXpKcjVoOU1YMTRKeW13Q1BmZ3o3ajdVdjlpVFJpNXY2ek03V1kwZGFmSndmdVFtWV9XdWdfeU90bUc2T1lmU2owVWs0RktHY3BScFBfWUowTlNXS18wYlBoVTgtTFozbElmY3dSa28?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 島根県益田市 益田市美都町山本の山中で男性がクマに襲われる事故の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月7日 東京都檜原村 檜原村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFA4MzVpckVmclJoVFRXa0RvNXV3d0hoV3BYcl94eFRHOHBzZDVGY215ekFRQkloblNKRjBBaFNVaGdfSDlLMlZnclQ4YlFfN2VDbXhjbHF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 東京都檜原村 都民の森 登山道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBtZHY3SHZna2pXQlNNb2ozUlpxUWVFXzg1X3AxMnRicW5MeEs0cXdKdGxLUk4tWTBxYUdydENFeEMzaTJmTFZtaTlfME0tOGlqVXZ6MTRFQ0diNVVzWWIyTkhLeVhUMVVPR3RmSjAyOHZvZGV1V2xXRmhNaDVYbFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 東京都檜原村 登山道の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260707/k10015171021000.html",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 東京都檜原村 檜原都民の森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE0xcm9WaWxNb2VVUHdUbGw5ajRseGpNaWlIT2lXRW5nVDQzdEk0YVozZmR2U0lDZXZOeGJnZGlfdngzTGxEREJ1ZTNHR2VYY0E4VmdzT0s3YjJmN29NdjlRelB1V2V2UnNCUlZUc2UxQjJzbzFlVUJkWEE2ZUVwVTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 東京都檜原村 都民の森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE0yNVhQMzNmMzFhMktBU1d5RjNXelVJbnY5Sm02cHdyWVVjM3NCay1sWjBacXBLZ1I3Zk9JRF9PN0NZaXQ1QXJzSmVra0RYY0ROMU9iMTFQZzNLNUM2QlZlV0JpQ01CSk5Z?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月11日 奈良県東吉野村 住宅倉庫の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1zc0JQSkJkcHZ1YkF5a252NUdMbHZQUUQ4RDZhSG5mN2NORFVWc0RZbC01N21LREVBZWNxMVFVVVc4MzlIc2VPUEhqZk1IUE9WazFEcDM4bV9sUXR5Y0QzRzU0Z1g?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月12日 奈良県東吉野村 住宅倉庫の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9uaHhhQ2VxaXEyUzRZUmlEV3pHZVM0ZWtOTFZmczZRVUhwQW1QQURMeGNhYVFZR3VCUk9IbGNSWlBaLW8zWnFiY0hUYVBKZDZBUVJFUHdtV3FCVkJGYkhpVkpXMVRsN0NBLTZHM2RRSG12UnhYQVRYeWEtc09oM0k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月11日 奈良県東吉野村 東吉野村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFBuT21ITTJRT0VXYTNPbHE0a3BndHlrMTJuSV9sRXQ1ZnlxZjU4OE1CX2dQS0VxSjRfcWM3VDNjTkdXUjFYd1d5MThBT0RBbHVk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月11日 奈良県東吉野村 住宅の倉庫の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5uXzZwMzlPLXBjMTFoMlJkMGF6Wmt4NDBHZnR1OHNWSGJwcm5pb2wwUTc3UkV3V1FSelR6ZWhKUk13dEI4YU91V1hHZ01IQ0lydFM0ZVJnQlpxTUlxUVlaU1lueGtDYUt2R2tEZmg0bWRRRVFnMG9RWU5GZmZwOWs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月11日 奈良県東吉野村 民家倉庫の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1VbHcxcGZ0SlJNZEgxcjBHc3gxMThWWTZJdjE3WmdtV3hVUGo3LV84QUNneDlITkVCZ2JHSFpuTEFCNDVBVUl5RGlDaENFME41dlBzZUd0b2Y?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 岩手県遠野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNN2Y1MVJFZFk1Q3BMQnZWRWlyeDl1bS15VXpaTzdFN0F3MERXYmFiRENSLXF0TnFES3ZoLUJZTjVrb2tucXUwSlVuaFQ1LThvb0pfNksxYTRaQWpsUDdlUHZvalNxTjhNUmJMZTJzQ3ZGNndCX1R0YTJiNnNQcTBNVUFJNVdCNnk4QjZZOVByTmF0Yy1PVEN6OU1paEVNeWpfQ29wRHF4Yzk3OVR5Mmo4RG12ZE56c0NXRDdvcGEtRFhPRjhsaklGU2otbXp4RjhFeEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 長野県池田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9ISHdmWnR5TnFWQUlyUXV5cVU0WnRtcnpsZzRCV2ZWMWhrTnNIN0ZjOGlrdXVuV2JQVnpwWVpna1lYQk1lU1BscW1BM2lVeXo3c0tackJxdmVGa2F2LXZka1J6V0VHdFFLRHh4adIBckFVX3lxTFA1a0xlWkNsLVQ4bHlmM1VUTFA4aUI0UzhMR0JrRjFPMGJib3VkVGhEanVqckVfWDktVldSSllKWnQ0cXpNc3p0eDJRV3E5dXU2bjN3RHpVRVNjazhKbl9LMllLUFFQVE9TRWU4VE9yU1FEdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 長野県池田町 小中学校や役場近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OaFNBN2R5UmNUMnBxZ3NBWktHb3V3YzMtdndjdHJ4Y1lRc2JsaFlaeDJTUFl4Y3BVbE5aZXZJd1pfMnlfR0FGeV96aWNCbk9mdHdMQy1pZ3hJdHN3bFRuaUsyNVQ3czRlSWhiRlN1Y3cyUnhjQnRGb1NPWm90X0k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 長野県池田町 池田町内公園近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8yY0puN00zVDJ0NER6VHZPWE1ZWFBPMHZITTdQZ2xfU2MzS0lsMTBYRFVuWkczN3JIcFcwbVZwek1NTXhMS3J3bHpvUGNHUWs0djdpQ3pSdS1oR3Fub3dSS2dvZmZjMk43N3dFN09NTV9zdlhQbF9UalhrT3ZnUTg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 長野県池田町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月10日 北海道別海町 小学校グラウンド付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBXbmY2dkxKSDloclJWT2d2eGI0UFZvOW9JWjRFR1lRMEEybEp4MU9IOHJXelN1R3RpY1M0NFhDbnBfN3pMbTBfcE4tVUduYUJORmhGUVRabjl4Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月11日 北海道別海町 小学校グラウンドの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBfV2ZmNmlQVHpReHNibHhXdnNLR2ZmUUJwN21ZMjRLcXczZU1PV0IyZUdqaTFrd2ZydENKQmR4SmFuOG1SSlNNcGdUR1NwWkpoWUthS1RUcFhOS2xmc0w0TVNQV2V0NC0tY19RRnJCZGx1NWo4ZWduQnJMQk91T1U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 北海道新ひだか町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1RNmh6cXRNSWFSWUZtU09LczJ0UlVnc2ZGVmFXNXpHdDRJOEFwMndTZVg2SmlLRl9QVF9wVGw0ZnVneWYxc01ERW1ZbHZvRGpmRk82aFc3dHlRckdvWnRleGRfdTI?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 北海道新ひだか町 小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE82UVg4M3BMZXZvUGxYdW9zd0NabHUzaDRDYVN6dWN0LXhOaVF4THNTamFDTVNtcHlwSjhFSGJZSjY1bmFTQUQ0b1llRXU3a3hKM0FYeGh5RWVzQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 北海道新ひだか町 住宅街の道路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB4cjlhMmVibFJDVTBwdnhKWC0tQVBDMjh4ZWxfSmpMZGFJbmpPa1lnXy1wZ1hpVzdEeEhTeW5oOWxha09vX2duRWt2aEhFTER5ekVVVmM1c28yeXJMRDJDYVgwdlI1WnVJQXNPeER6MkVMeTdXeFdEV1RpcjJ5SG8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 鳥取県鳥取市 河原町西郷小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPVGMzTGNHVVVMazZDTjJpbzJQXzUxMC1UZnFlS3NZdkY2eXhfVjF6Y3hXeWtKZzhBX3dwZTNBbWVVbVdWeGVXc2x4QWw4WFpWdEZqWHd1X2hEMFpyYTJ6RGk0VmFCdXBlTGR4LWJfcS04ankyTDZGRWhUc2FtX1hlTmtYMFg1ZS1jQklfRzZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月9日 鳥取県鳥取市 河原町西郷小学校の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQLU5TNnVudnFKUEFyMXNwNkV6Sm11d2pTenJ3dG1nYy1tcDdZZlFka1lXekZTVGVWRU5ISDJ1U2M1U1VtVEI0WDF6a2kwdFhEZVRMNmt6ZHVLd19rZHVwS1ZPMVpwMEFhczNRQ1pnZFdxSER1NG1aVXdmam1SQlRhN0Z5OEtldUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 鳥取県鳥取市 河原町西郷小学校近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOZVdiNDROQjVNTlMzYllRTFJVRFhmcWVIbGhKV29LOGhhMmp2S2hzc1dRZFlmU1VZQi04cnpOZ3VpdU5YMkVNeUpDQWNmYzNnaURVSkhKd19XLVIyNnJfbF9Ob0xKMmZVSDUzYzRINkdtWlRCZk42eHUySnZhN2JsZVZxZ9IBiAFBVV95cUxOZFlIUjFQYVhETXJWWk5oT3BDME1uemE5akxxQTJxM2tPQlBvVFJuVVNlai1YQW1aWjJxWnpGLW13NGNvRXBIRFpYRXdhTk5lOURGb3p6MUJraDdaVTR1ZHJlUXJLanFnb0wyQlFTRUVQVU5TZkdRVmFfdllkb090NFV4MzYxcnkt?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 鳥取県鳥取市 河原町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBPcG4wV182WXFXTHBwYUlZUWR4LXlNZUs4QzNYRHI4ZUV4QU9aZUtnbERwem9zX0lha3loeUo2R1FIb05ZN1pQVlo0UVk3ZWRpTklSaUo3cFNWZ1lzaU1LeldNTG83R1hZWk45TDlUOTFFcHRQcV9NRURrYXVHeE0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 岩手県北上市 黒沢尻北小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5HbkJlcEhWeFdCM0pIeDJqeVJmWmlGMWpJZzFzdE1CR2VCWUxfLVhsVXRyX191Z20yY2xoanpUSDI5clJIcTJMNEVuRTJCcW4yaW9sdnJXaUJNY1ZwS09UcmZOd0pocFFjVmtzNWtCb2pZbDdha0VxbmFRekVwems?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 岩手県北上市 常盤台ニ丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5FX191WDBMS0dMd2dGdzN2VWNRMVBnbzNOay04TTFwY2xubmV1Z1hhMGhocHItYXpfUEZhb0hrdTloMW9Rb0hRM0tkNGhOS2kxMlVqMFRnSEpVTTJQNk8yZFh4X2J4SmFMemhjaHNQOUl2YWNLTFNHWVBiTkI2b1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 岩手県北上市 小学校付近住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1FS2hhZmtoVzFtUXFLMHZKcGlaMGtBMU9OMnA5SkxWY3JCZG5rT2F0dkljeEllZTF5N2h2cUZhMFV5M1ZxejFuTzl2ODhnZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 岩手県盛岡市 米内中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GQ2VxQUo5Nzc4N3g4OVVPbTFnV0sxaWxlM19LaFJmZFd1bksxZURubXFYcGI0SUdJWk80V2lZcUQtbWRwOWE0WHpYV0E2UENlOWhKNnFCSk56dTd0Q3AyY0dYRnNIRFVoQmNPek8xeE1YdV84cFBvVWtZSXVEbGM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 山形県遊佐町 小学校方面の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1UOFhQUmprdzJuLVkwel84Mk5nLWRoM095clhNU09nV3psTW9maFRyX19rMWFaNXNDMlF1VDBfVmlyX2Voc2JQTW11OVlpUDFyaV9ZREZhUS1YVlJZYTVNQjFsMkdLVU1ETnllZ1lCUWRjUTJNcXVDdGtOWjg5ejQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 山形県遊佐町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1OTWNmaW9SNHBxYk9KLVM0Ty1JbWE1QXM5Ynk2NWxQQ2hXTnBlQmNmVFdfaE00cXE1YjFMTWpMRTZ2VG1zUUVhR0VyQVp3aU9zS2dDNmJudTVIWUZsV2FwUXphUk1BZnBoOXEwZ1o1a19pTVR5UnlhRG1MY0lad0U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 山形県遊佐町 遊佐町内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1oZ2xPUkFfbzRmYUNJc2R4bk9yZzEwVmhFQnZHVVhPMFg2MHVVLUpHdTFzeTQ4S0xxejV5QTlyLUZlN1BIVHpLY2ZRa2dHdzJhWnJrT0s4c1lDU1d6R3lFZWF0TkR1V3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 栃木県足利市 第一中学校の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5zT2xfbzRHU3JsNEZjR0ZwUEp3bENPOG9ySzlBZUdhd092RjdyZmRHVDc4UFh6dzQ4alpkVUxYTlY5R0pGQWt1ZzVxdnMxdjhpVktVOFRyS3ltRWF1WHZ0Mm5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 栃木県足利市 足利第一中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAxOFBVNmo0UzlRX29tYkRLTHNPTzZvQXdZaG9jd0hjclVUS240WllkT215bXo5R3lmM0JoMEJTa3hRendFUTNyaGRRVmVHVTB2VVlzODhObDVfLWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月8日 栃木県那須塩原市 学校駐車場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE11dHlQbVVqMGl0dDNzSTlubVB2RlF5aUdmRzdKdkVzRDZvd0txeXh3WTZ1UGdyb0xNQXFwSXlFQU9lSktYVjY4aDdaTUxPcDJCRF9FVjBmaTExME0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 秋田県秋田市 川尻小・保戸野小付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBWUERjVm1oVWdoRlRLU3BtQ1hJSi1SdWtZY1o0N0pUR1VmWjdQVF90dkgtbndub0VrdENMN1dKaGJ0akY1ZHJ1a3pLalVlV2R0X0tra2dRRXBnekpZUk1GSEpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 秋田県秋田市 秋田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPZ0xvWF9pRnNUOUswWjVtY3RfbFprakp1R05HQVFOSjlUbVpEaUt2T2xKZHZxX0hqR0huRTZiWWRFUnRsLTJEMkFIVkRFbUpQMFh5VUxXMnVBTmd4ajVaRkQ2dUFOSklwcTBFa1I3UHl5YjdOMVk0NVRCQnNoTmRsaGc1bWttUTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 秋田県大仙市 四ツ屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1rM3U3cFZ2T3FuU2JGV19QNzBNTUpjWXBuSGl3NVJPTm44MnRjclVkUjFOQnYxcXZySk5semp0c3FVOUY2d1d5R3VFNVRvX1Y0VkFKbDdmcUNQcFBPQzJCX3p3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 岡山県鏡野町 鏡野町こども園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE55azdzTTJJZ1BoUU1fT0ZlZkdZSHp3SFBuVjNIeTBJUmVrUXA2ZGN0SldJMzAyZDdxc1l4ajBoYWFqSVdENkp4Tm1mQkVFZWJESmhmTENrY1VTZjd0NTZiNVZHWU1jX1ppMXduZWtuTGdaa2Rma2xZZ3RTcGZXZGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 福島県会津若松市 福島県会津若松市河東町八田の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月7日 新潟県村上市 坂町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月8日 福島県会津若松市 市街地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCT3o0UFZYbW5mT05UM1ZjbjdhOEYteXZoak50S1lxWWNySUtERG5ld2I5NVBDaFo1bkhhdzN1UnR1U1FXYnhwS3NMZThhXzhtRUROUzVSa2pkOHAxd1VqNzVaMC1RVVJ1alp3YkJOODh3dkIyVmdqSUtySW8zRVU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 福島県猪苗代町 住宅庭先の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9Cd3d4V0stdjd5SDNOTV9oR3QxaUdBeHdSQ09mRTZsOTM2ZFdzNUVrSUxPakYyb212aF9oVGtDZ3loNHFJUTdjaTFHc2pLaUR1QnhxaWFEN3BrQnphT1p5Nm9tYjBHX19sNWE3bDk3TEZ3UzE5OEN0dmpxQi1MRXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月8日 福島県北塩原村 北塩原村大字桧原字湯平山の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月11日 福島県南会津町 福島県南会津郡南会津町糸沢居平１９６１の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月6日 秋田県横手市 大雄柏木南の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaVotdzFESHVMYVlIRHowd3FMTV9JdUMwQTFSekE3dFZvRENtV0tZc0dobnhlSGsxVGJIR3M5anRWWXhraHVoWlJsMGRTRmp2OEpUMEZ6YWRidHl2NnFBd0RLUEFmclAyU2VSdy1pdTRWYkdoT2JaVk0wVHRuUmkxQ1ZVcDVDdVFnY0Y1VUJieEdhUEV0VTktZmE4V3PSAaIBQVVfeXFMTlF5bWNycXIyRVEtWGFYLTZ5ckNuUjlHUy1uWGtCaGFCdFJjYXk0bjV3LV9xX25tTlV2UTVMUW1ldWtYSXJ5QmlIX09RM2FmV0tmYm5Jd3BicFpPQmdlOElCaFdXaUxGSVRmMkRiOWh4M1ZaTFpPRi1iamtEVFcwSHg1ejRGX1NFbWhkNkhXSURXeXA4U1NNOURZbmtMVVdwVDdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 秋田県上小阿仁村 沖田面の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaUpTdDJnZmlxazFYb01PUGFlckhxT09VcS1iWnMtUzMtcnlsRUFVeE9OVFVBX2o2OW9VSy1lckVicnEyWEl5Zk5HcExPVFBIQjFBRi02YUJkUWZMN0ZTTVJVVlNnVk1FdVpHR3Y1MTgzNzlCT0gyQlRZSlh1eW1wdGl2d3IxenFzdGhrNVlQanFuN1JzNHVJa05VRGzSAaIBQVVfeXFMT0ZuTzJ3MWdHUnpCVnpqQjV0QzB4blRSVTF3SkNzdGNaUjZEcFFBQlY0REYwS0NDcFpUb0lBMVR1ZlBlaHA5NkJWLWJsMWZ3RDdNaktjOU0wcERQdmdISng2cVhNNjNVQWFKVDV2UXd1X1Q4TV9aRnZWSXk3NmlBaEl4NWpWVDRNZF9HLTdYaGY0eXZJU2RkM3dkSmJuRHdPUVZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月8日 宮城県仙台市 宮城野区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9JandXbGR4UEZhWlgydmN3LU9NT0JueElnVDl5N3Vrc09wMUNPR2Q2cU5aajdJVVZYMUVQUUFwQ2t3dURMUDV4STRFV0pEMFFIRXQxVWFPako0ZkhITHpLdFhkN3dvQzd1d0lIaGxHTHRMR0FGbWRwZnMyVTdiMkk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月8日 宮城県仙台市 宮城野区原町3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5HYm5pRXROd2d0dWNURnozMFB6bzFIUktfRURrMUtmampQbEpVNklMUF9zdE1lel9BcVRqYXNFa1ZmYlFZMExNVDhnMjk2cmtveTAxbWdsaXp3LW1rNnFjX24tbXdnTUQ5VHZpRGhVcXJSd2ZMWUJzenFHeDlJUFU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月9日 宮城県仙台市 宮城野区住宅地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9oR2hiZVlZd0djSFlOU0hJVjAwaElaaTdlclBmV2JWVGdLaUVDbE1SRWM0eEQ2dWZnaGVuNDhpdTBWaTE5R0ZDeHVKREtvSDl0VGNta0xaRFJKdTRWemNXSllRNFM2RTZnMG9aYlFBSTNnV3cyMEVtUkVRMlBRVkk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 宮城県気仙沼市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1tNlgwSjkwdlZkZ1NsUHFMQVdkTS1SWVRJQmNTWFZWbDUwLTByaFYtQ2o1ZVp2UXZNTjdiWFI2N3duSkpHaGwyeDY2TnV1dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 宮城県気仙沼市 住宅敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE05SHRVRVo0U2QwMlhfOVhsOXlZRGxzZmJtUmJRdGZFQWgzVUZvb0tuUlo2T2h0Ym1jNTFyVDM4TGE1OERka2FMUnJKbGc2V05aMFlJVnB6TXBSTW1RRlhlLVg5SG1YX1dWQkNBYThpLU9CZEVLMXBJQ0FlWWRfQUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月8日 青森県大鰐町 南津軽郡大鰐町三ツ目内３２−７の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月7日 青森県むつ市 大畑町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月10日 青森県むつ市 田名部下平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNNThqRmNIc0RHWGxYOTJTU054YjVUNmo5Qmd6Y2pzQTQ0aWZuRjBKR00xbEs4MnBMYWsxSHIyRmVxZGI2b0F4OExjQW1lQURzU2RZWjFhbk52VzdoRl9HLUFST1pxakVZaWNCMjM2blpPNTV4dTB4d3dMaTdCZVV4eU4tcVgxcTNsTXpOUDFza1h6OTNtZTRHUjF1ektJNmc5NmhFa3JxWndpcW9qN203bS1PWHlqdHF0M0I2NmtVMF9kakhnZFY4VWpHNWg3dUM5Z3Z2S1h5SW40b2p2TlVlN2VCUFEyY3Bmc3pqUjZOUnF2QdIBogFBVV95cUxNaVJSLVotVE8yRU8wV1RseENWWTFlZDFUQUduZnFJNUVSX3RvMmNDQ3dBVnJZSXdJOU9YVm9yWjBkZ19ZanNlbUVhWG1qTG12eTNCZkZXd0d4d19OVlo3Wmx2X3ota0VQZFZmTHNqWlRjQTc1aW16V3oyVFpkSVpoSlk1THZpbEQ4dWQ0dGF5YlV6RlUxSVBnOFFfVU9SeW15WEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 青森県黒石市 大川原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNb3YwQUM3RFN5WjFNUGtWMFZmbTIteGpteXM0REJOb3FHdURvNm9MeW5LeDFESkotZ2hDdDczcU1TRHBHMkNfZnRrQVVWNlhqc3dvYnVaRTRuVFp5cFl6V0FXeVBwQlZJVGE3TTNIb3NfelY0dnNHM0FCcXprWFZybUZDY0RUX1NiZDEwYk1lRHFXQ0ttZlpmdC1mMUNXazdDdU5VSkpjbEFUbWppMVpSVFN0WGxjT0c3Y0JpQXpJY01tdVZOOVN4S2R1ZmsxR2lvenhhU3NWT2lDVWd0UnBmUjJPNTAtd3V5TkhTM0xEZFcwd9IBogFBVV95cUxQZ3RUc19VanVYSnRHNE1BZXQ4N3QxS1U5bzctaFozb0lLX21DUGdkVHNOMDNaUmp4azliODAwZFJ4VzhaQVgwbFJEMXRqWjV0NmZHZElEYTFxRC1GS1JFVVRWQVAtWGVkTHBZVHJOMmw2X3JxTHJsTDhvSmY5dzJVR29KaEU2clAwTlFEamJaVUVUeVV0X25GTzRhRnQtRE9xc0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 青森県八戸市 南郷市野沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPajM3NWtyQ1VYbDY4dlVnSHBxQXFablJMeHk3YUhZUmZVYUtyc0kyVmMxMjlPX1ozay1qU2R1dXBYNDV1NTRmaW5OdFl0NncxZmtMUXRqekJGVjNoTnd1VWp3TF9CVGJaczVLMmlwUEJVUVB0WGVDN2FHZG9wTFJhUVdENjZMcjlHWEZyTFFsVFVlRlVQS2FuZUY2eUXSAaIBQVVfeXFMTVVaZTdVT3p2dkY2MlAtMEJfRVVUUkpERVc0N0NSbm42OUYxbWJaNjVxNFhWVFNfbnNHd1ZGVUlXejNXMU5NWDRCRk9YVkVlNDJ5MWNBNnFrWXJfNExyQnJzWG9uOWhnSmhmMG9EckVEYTkyT1AtTlgxSEEtUHF4VTBEdS1sMmNiU040clRyeEtCN25jZWJSS2hwYXVwT3ZGTnJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 長野県飯田市 今村公園近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBneWM2UmJDeDQ4aWYycVFHZVIxNUJxTnF2elo1SFZCMnZ1aTI3MndFRU00SWpWSlh5ZGFhWHdnZFBWaWlnbVJva3BXa0VJZkpfRXR1QTl0X3FvSHJxMGFXcTEzdk5aYndoMkRha2JxQ3A?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 山形県米沢市 米沢市市街地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE12dTJ1SC1CaGhRZWw1UExCMmd5cVhld04tdnVvMi15TjBBbk4tWTFSMHBhYzVtYnJnczhZeEswNEthN2ZZVXdHdmxsQkFvZ0VvNDR4eXJvVF9GZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 山形県鶴岡市 湯温海の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1wdlZJRlI1YnhJMmlZa0xYMFFXT3ZCYy1tX3F4LTV2ZWQ1SDNFWk5taHl3a0pJV0hwRVJHNktEeDNjdHluMXRaVi1OMVV4clc3NmxJN3djdHJmdEZ0bXVYNTBMU1h1d21adldHRkRZd9IBdEFVX3lxTFBTaDRqSzc3WDRwTzc0RlVrU0pHTnE0SHZRR3Y5YlRTYnlPTlItNks1Z1k3c3lDWENWMDNxTVdTMXd4MEpyNGZFel96ejMwdTRxTUlBdE9Wc1prcUVIVHhzdmZJVlhvbDNYdEJBZGtZY2I3dy1K?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月8日 新潟県妙高市 住宅密集地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBtSGV3Q0JLdFFhc2ZNUUQ5dFVreWJ5N0FDN1pIYlBwenpRX2FhNjczMXlDTzNGRlppNkp6enFWWWhFZUxy?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 新潟県村上市 笹平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVm1rYXRWeE54cEhHbFYwbGpGUm5fOGZUd2pxVENiZkJyR1dCeFlSYjhmZVJRZkgwVHl6X3FwLUJ1dGpkNGVuUllCMmdBZUoxbWF0RXJvNEtZeFlmQVJvVWY1VW9lS0E1Tl9qbjRLVTNxZmFYOW5GWjJsOHd3cVpCNW9xQnpHbmhOQWZ1OGV1eFVOLUd1UzlyN1Y4OWLSAaIBQVVfeXFMTmxnNVliaE1zeEF1c3Nzbkc0dkZDalptOWdlNG9obklHMWJCc18tTjBsMnRxRl9qdFZ5UkNmbzhheHFkeVhGYkFwWmY1X3VKdWhKZ2FoQmhScC04aDQxaVh0TVdXa2QwNVZrTFQ0dGFMV19BNFF2c3k4MWxsUDBHNUNnQWJiTkJDYVB1UmNRdzV0Y0pYZ2JPYVk3M19QR1FHUzVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 新潟県十日町市 中条市之沢地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5OTEJsRWg5MWw5WmhWNkh6SkpHZWZXR2VhTnBBT0tOUjJwb1pzZ01FNnpEdWMyOFptMzZ6Z1o1TDNoS0ZiWnB5enUtbWhPN3hMeURXcmF3cXpTanBjbk80?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月12日 新潟県津南町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5fM1FiVlZaSFpGUDhRcEN5aGtaOXdSNEJjaGpKVzlZWmRiMFRiQU9ESmw0eGwyV1RPeC1NaVM5dlZ6dVlS?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 群馬県中之条町 五反田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPcWNobVVzeEtJeWdNeFJCVlk0OS1LeFRoT3Y3MGIzOU0yTjlNcWQ1NHE1U2g2OFdwWVp3elBRRlFPeGFUQWl4XzU5RHB6clFpR0FaZ3VjY0dPbks2RHZiY3ZwM0dHczdPQlNwRE5rOURSMTFNRnRHTFFYTFZMc0VqYVB4enR1QUpMRGV2dFdrVVZkR3czM0FPWkF1ekl6Y0ZaczhlZmNkQUlyelI5MVZV0gGiAUFVX3lxTE05ZzFxSXczZV9uYjd4NVlPVmZyWlk0N3JvcEFpNkhGVjJXa01kMENQRk1STmNTTzQzUmFYVkxTS3BnV0dxb1ZZYWVRTjctUHRQX1BNckxvUFowWUJmRWZPeXdRdmljN2p1NklMV21rUmNmUlRVQjU4b1pUeDlZZ1hMV1pPWFZjTy1LajI1VDBRd1o0d0VaX1F5V0tIY1Zid0drdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 群馬県みなかみ町 下津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOVHUwRDVwN3RCMEVQQk5SZXRpbkxjRDVKRnhYRWZvOUg5RDFveG04N1JUSGpXWmxzV2VtaHhCbGM5alRCWHlpaFQtTi1mSWhlZGNSeUJDYUVJVGxKRzh2ai1DYWY1Tk4zSUIzZkxNV2hmSEJ2M0NkRzNTaXhyQVMzN1B2S0hvNUFHTzhYckZhM05XZXpGajJmY0JzMGhnd21ROTB0TGhzY0ZjT3RWYjdwZ3lDbE9xRXdOTk4xOU1Ra2xMeGFvbVh1ZmE2SVdYT0xpaDRYOFU3eldCR3FlYVhTMU1temdVdTlxbXQyZGtQQzBKd9IBogFBVV95cUxONXRkZkNlMjhfMWdoQkc2ay1NNmZTQ254bllzMnM1QkpRMUEydGpGV3Z5NUtqeXRMVVhadkUtUWRqa1VaZnF6VGZOTGtLckFXdWNxdXU1bm1OYmZKaFdQeDBZNUJjOGlvQTJFNnFNb2QwZlNzd3I1NGhzbkV4dWc3NWVGYTBiMk9UUjd1MjBKSThRdjUxZmRqZ3FFckRPVS1uNVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 群馬県みなかみ町 みなかみ町湯原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVi0zczNuNXJ2TDBpOTVOeTZKVk1iV3YtbUtfa29DM0h0WEhselAzNE1fREpKVUZCVVZkVzJYaFR3SE9ZMmVmSkMxTXFSempTVmdMT3dRdXdoblNyWTUwZGYtQVhBajBIOVlFUVFEU0JqMzB1UlJiellfWmI3SDhDV1hxZUFQcDRNeFo0WHViV3BMaVQ4V0paN3l0Y1bSAaIBQVVfeXFMUFNucG5rMjgzcjczQXRSc3U2YWtjUGpWZkdSTzRfNEFOMDRmQWF6Ml9WcVlkcmtOdWRFSFhjR1BTWEM4emVJZkJ0WHRlUTFEQ1VtMTA3d09Zd2NrZ0oyM3A3MTlsS3lYZFc2aUM3TThvR3Y0T0NXeU92bWduZ0h4dDNWVDI4T3RxeXA3ZVpzM2h4YW4yNUtEMkMtUm8xamJqbl9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 群馬県下仁田町 荒船風穴周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9uM2lDby12QlppOTRRdzhfa0dLczNiZzk4WjBtaEFIWHMzT0JEQnNucFpwQlJudXdrcUM2RTYzZ21ka1VZS1pOdE9jV3FpV21ZaUg1T0RJYUJaallsejlQa3huelRDdExmYmpyYVFqc3FjM1XSAXhBVV95cUxPVUl3c3dmYTBRVThReEVWYkR4ZldVblZSV2ZnaDBMWXFNbEJwVnNJT2ZKanphNjlHVUpzbklvZ0k0M0hUUkZOUFBoZ0ktRkJCZ3FEOVBERkVkX0RxQWF5RFV6UVBMM1RSWHJuMjJPTnZZNWVQM0pZV24?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月7日 群馬県沼田市 白沢町上古語父の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONy1fTkxsdnZFMHdncWF1X1NROTlWVFVkNnZkekJ1RC0xd0Vab1lxdl9TeUdQTF9VNTJZX25ZcVUxWkhMbXhYQndKNm1nOXFxU21vQWxsaHp6Sk9oTjhhZFhmTmNvaGxDcnNSMV9xWHhhdEVZeWsyTy05b25JWUdKUEFfQjAybVY1dktURzcyWDdsOUNkMDFJb2FpMm3SAaIBQVVfeXFMTXNodnhEUkF2eEItanRpeXFCdXVqUGRnWHV5Qmlxd3JqNXltcnN1TWk5aVF4aXJ1aUJGb0p1ZjNKYk5KRzFqNTVpSXVnTWd0QmNrZzFpX2dwdjlaaERhakVfQk9FTWlYM1RkWTlyQ2FremVjcDlvY2d6SWhlWDNmbU5VWlNFVWUyVWtjTm5YSXhtVGszNWJnTDdCb0pCeGRXbVp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月9日 石川県津幡町 森林公園駐車場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9DUDg4RlBOLVc2ejk5T0k0THlBRlZjT3ktTElxSzh2Nzd6WFdwYUFnLUtuTldkWmRsNWJKLXNBSllWTFVDVXJQeWtORGlwRFFNWHJSMklYN3lZM21PbkhUQzR3c0RaVlk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 石川県津幡町 森林公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA0SjFtOTJUNnZKb1ZzYk5zMTRuZFNQLTNXcUhUcWl0R19GNVpJR0l6dzRuLTFJdmZ0Uy1WUGt3YnVVSk5rS1hJY3lvbzF2S2U1RDBJUUEtSUYwU2NHekZrZ2NXYjNRVTFwQ2Q0V2VWUlZZV2VsREpJRDVpOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 石川県津幡町 石川県森林公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9xYU9WNGFNTzZUdGF4ckdzamFxRHdOZ2twNk5NTC1ycmNSRllLeVByNEEybmVibm5CazM3MEhjNG9qUENmWWNpcUhvREItZmg3SnBPdW1tMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 山梨県富士吉田市 富士北麓公園野球場付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE55dzNVUGhRemtUV0lvS1pMc09ONWo0RzFBN0thbDRkbE5tVmZjaFRwUUNfUFcxejZqLW50bkQxQmZsdU5yTXZIemFzaHNkVHBZdktERm9pamRpczVJanBOaDFwYTRfZGw5SWpRaUNJUHlPODhsTWVLSzFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 山梨県富士吉田市 富士北麓公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBJelhjQkNKVVhvZ2lXM0c0Y3NPUWswalM2WU1idEV2TkdSQ1VmOUxTOExsVTdXeG1zRTcxcHZ6bFdRV1IzU3lORkh0Q1RFbURiMXNSODE4bU5BVkVuUmJGa1lXUDIwTE5TMnNVWGVmaGhSR2l2VHZUZEZCbDdyRWM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月10日 山梨県富士吉田市 富士北麓公園脇の林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYkpUVHd4RnNXdldwRDQzN2VsRnpjNHVZbHhjRmJXRGZvUldMYlBaU0NFa2I4b1l0VXlJVUtoakhtN1lkSlFGN0JlYXMtM0lQYVZxWHNhZjBjakhpNkFKRExfSU1RVzk3OHBKTnRNb0hxemhEOWktT3ZreGNVUjVYekExSDdGVFhCeHNUZnln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月6日 岐阜県飛騨市 神岡町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月9日 岐阜県白川村 牧の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月6日 岐阜県高山市 高山市朝日町西洞の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月8日 岐阜県高山市 高山市荘川町牧戸の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月11日 岐阜県高山市 高山市朝日町西洞の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月10日 山口県岩国市の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":186},{"pref":"岩手県","count":125},{"pref":"福島県","count":119},{"pref":"秋田県","count":118},{"pref":"宮城県","count":105},{"pref":"青森県","count":104},{"pref":"長野県","count":96},{"pref":"山形県","count":88},{"pref":"新潟県","count":70},{"pref":"群馬県","count":65},{"pref":"島根県","count":48},{"pref":"京都府","count":41},{"pref":"山口県","count":41},{"pref":"栃木県","count":40},{"pref":"岐阜県","count":30},{"pref":"山梨県","count":24},{"pref":"埼玉県","count":23},{"pref":"石川県","count":21},{"pref":"鳥取県","count":19},{"pref":"富山県","count":18},{"pref":"兵庫県","count":16},{"pref":"奈良県","count":16},{"pref":"東京都","count":8},{"pref":"岡山県","count":6},{"pref":"福井県","count":6},{"pref":"静岡県","count":5},{"pref":"神奈川県","count":4},{"pref":"三重県","count":3},{"pref":"和歌山県","count":3},{"pref":"愛知県","count":1},{"pref":"大阪府","count":1},{"pref":"広島県","count":1},{"pref":"滋賀県","count":1}];

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
        <span>対象期間: 2026年7月6日〜2026年7月12日</span>
        <span>·</span>
        <span>公開: 2026-07-13</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={1452}
        periodLabel={"2026年7月6日〜2026年7月12日"}
      />

      <p>2026年7月第2週（7月6日〜7月12日）における全国のクマ出没総件数は1452件であった。北海道が186件と突出して多く、これに岩手県（125件）、福島県（119件）、秋田県（118件）、宮城県（105件）、青森県（104件）と東北地方各県が続き、長野県（96件）、山形県（88件）、新潟県（70件）、群馬県（65件）といった本州中部・関東北部でも高水準の出没件数が記録されている。</p>
      <h2>今週の主要トピック</h2>
      <h3>山林部における人身被害および山岳遭難の発生</h3>
      <p>本期間中、直接的な接触を伴う人身被害および遭遇に伴う滑落負傷が報じられた。島根県益田市美都町山本の山中において、7月10日午後2時ごろ、40代男性がクマに襲われ負傷する事案が発生した（※1・2・3）。また、東京都檜原村の都民の森登山道において、7月7日に登山中の男性がクマに遭遇し、約10メートル滑落して負傷する事故が確認された（※4・5・6・7・8）。夏期の活動活発化に伴い、山林での作業者や登山者が近距離でクマと接触する危険性が実体化している。</p>
      <h3>住宅倉庫や境内への居座りに伴う緊急銃猟の実施</h3>
      <p>生活圏深くに侵入した個体に対し、安全確保の観点から緊急銃猟が適用される事案が複数発生した。奈良県東吉野村では、住宅や民家の倉庫内にクマが侵入し、7月11日から12日にかけて緊急銃猟により1頭が駆除された（※9・10・11・12・13）。岩手県遠野市においても、7月6日にクマが神社境内に居座り続けたため、緊急銃猟が実施された（※14）。建造物や集落内部の滞留は住民への直接的脅威となるため、現場での即応的な判断による捕獲・駆除措置が取られた。</p>
      <h3>学校敷地および通学路周辺における出没の頻発</h3>
      <p>小中学校や幼稚園などの教育施設、およびその通学路周辺における目撃が広範囲で相次いだ。長野県池田町では7月6日夕方、小学校校門前で成獣が目撃された後、中学校および神社境内で連続して目撃され、7月7日や10日にも学校・役場や公園近辺で目撃が続いた（※15・16・17・18）。北海道別海町では7月10日および11日に小学校グラウンドや付近で目撃され足跡が確認されたほか（※19・20）、新ひだか町でも7月6日に小学校付近や住宅街道路で目撃され橋の柵に足跡が残されていた（※21・22・23）。さらに鳥取県鳥取市河原町西郷小学校付近（※24・25・26・27）、岩手県北上市の小学校付近住宅街（※28・29・30）、盛岡市の米内中学校付近（※31）、山形県遊佐町での小学校方面への移動（※32・33・34）、栃木県足利市第一中学校付近（※35・36）、那須塩原市の学校駐車場（※37）、秋田県秋田市の小学校や幼稚園敷地近く（※38・39）、大仙市の小学校近く（※40）、岡山県鏡野町のこども園付近（※41）など、日中や登下校時間帯に重なる地域での警戒が求められた。</p>
      <h3>幹線道路における車両衝突事故</h3>
      <p>自動車とクマの衝突事故も報告されている。福島県会津若松市河東町八田の国道49号上では、7月10日に走行中の軽自動車と体長約1メートルのクマ1頭が衝突した。運転手に怪我はなく、クマは藪の中へ逃走した（※42）。また新潟県村上市坂町の国道113号線においても、7月7日に走行中の乗用車と体長約1.0メートルのクマが衝突し、運動公園方向に逃走する事故が記録されている（※43）。いずれも夜間や郊外幹線道路における移動個体との突発的な衝突であり、交通安全上の重大なリスクとなっている。</p>
      <h2>地域別動向と主要自治体の状況</h2>
      <p>上位都道府県の出没傾向を見ると、北海道（186件）では市街地や住宅街、学校周辺への進出が記録されている。新ひだか町では道路横断や橋の柵への足跡付着が確認され（※21・22・23）、別海町ではグラウンド内への侵入が発生した（※19・20）。東北地方の各県でも高密度な出没が継続しており、岩手県（125件）では盛岡市（※31）、北上市（※28・29・30）、遠野市（※14）で市街地や住宅地、学校近傍での出没が相次いだ。福島県（119件）では会津若松市の市街地目撃や国道での衝突事故（※42・44）、猪苗代町の住宅庭先（※45）、北塩原村の集合住宅敷地内（※46）、南会津町の国道上（※47）など、生活拠点での目撃が多数を占めた。</p>
      <p>秋田県（118件）では秋田市中心部に近い文教施設周辺や横手市、上小阿仁村での出没（※38・40・39・48・49）、宮城県（105件）では仙台市宮城野区原町3丁目などの住宅地で同一とみられる個体が立て続けに目撃されたほか（※50・51・52）、気仙沼市でも住宅敷地内を歩き回る姿が捉えられた（※53・54）。青森県（104件）では大鰐町（※55）、むつ市（※56・57）、黒石市（※58）、八戸市（※59）などで河川敷や道路横断が確認されている。</p>
      <p>中部・信越・関東・西日本の動向としては、長野県（96件）で池田町の学校・役場周辺（※15・16・17・18）や飯田市の公園周辺（※60）、山形県（88件）で遊佐町（※32・33・34）や米沢市街地（※61）、鶴岡市（※62）、新潟県（70件）で妙高市の住宅密集地（※63）や村上市（※43・64）、十日町市（※65）、津南町（※66）などで記録された。群馬県（65件）でも中之条町（※67）、みなかみ町（※68・69）、下仁田町（※70）、沼田市（※71）で出没した。さらに石川県津幡町の森林公園における親子連れの連続目撃（※72・73・74）、山梨県富士吉田市の運動施設林縁での親子目撃（※75・76・77）、岐阜県飛騨市神岡町や高山市、白川村の住宅地出没（※78・79・80・81・82）、山口県岩国市でのイノシシ用箱わなによる錯誤捕獲（※83）など、全国各地の多様な環境下で記録がみられた。</p>
      <h2>注目事案の時系列整理</h2>
      <p>期間内に発生した人身被害、緊急銃猟、車両衝突、住宅密集地・都市部への侵入などの注目すべき事案を時系列で整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村</th>
              <th className="px-3 py-2">場所・状況概要</th>
              <th className="px-3 py-2">対応・結果</th>
              <th className="px-3 py-2">記録番号</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">7月6日</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">遠野市</td><td className="px-3 py-2 text-xs">神社境内にクマが居座り続ける事案</td><td className="px-3 py-2 text-xs">緊急銃猟を実施</td><td className="px-3 py-2 text-xs">（※14）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月6日</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">池田町</td><td className="px-3 py-2 text-xs">小学校校門前、中学校、神社境内で連続目撃</td><td className="px-3 py-2 text-xs">日没に伴い警戒</td><td className="px-3 py-2 text-xs">（※18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月7日</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">檜原村</td><td className="px-3 py-2 text-xs">都民の森登山道でクマに遭遇した登山者が滑落</td><td className="px-3 py-2 text-xs">男性が約10m滑落し負傷</td><td className="px-3 py-2 text-xs">（※4・5・6・7・8）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月7日</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">村上市</td><td className="px-3 py-2 text-xs">国道113号線で走行中の車とクマが衝突</td><td className="px-3 py-2 text-xs">クマは運動公園方向へ逃走</td><td className="px-3 py-2 text-xs">（※43）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月8日〜9日</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市</td><td className="px-3 py-2 text-xs">宮城野区原町3丁目の住宅地で連続目撃</td><td className="px-3 py-2 text-xs">同一個体と推定</td><td className="px-3 py-2 text-xs">（※50・51・52）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月10日</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">美都町山本の山中で作業中の男性がクマに襲撃される</td><td className="px-3 py-2 text-xs">40代男性が負傷</td><td className="px-3 py-2 text-xs">（※1・2・3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月10日</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">会津若松市</td><td className="px-3 py-2 text-xs">河東町八田の国道49号で軽自動車と体長約1mのクマが衝突</td><td className="px-3 py-2 text-xs">車両損壊、クマは藪へ逃走</td><td className="px-3 py-2 text-xs">（※42）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月10日</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">岩国市</td><td className="px-3 py-2 text-xs">美和町下見のイノシシ用箱わなに侵入</td><td className="px-3 py-2 text-xs">錯誤捕獲を確認</td><td className="px-3 py-2 text-xs">（※83）</td></tr>
            <tr><td className="px-3 py-2 text-xs">7月11日〜12日</td><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">東吉野村</td><td className="px-3 py-2 text-xs">民家および住宅の倉庫内にクマが滞留</td><td className="px-3 py-2 text-xs">緊急銃猟により1頭駆除</td><td className="px-3 py-2 text-xs">（※9・10・11・12・13）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>今週のデータを分析すると、全出没件数が1452件に達し、依然として極めて高い出没圧力が全国的に継続していることが確認された。出没の形態としては、山林内での人身事故や遭遇滑落にとどまらず、都市近郊の住宅街、学校施設、幹線道路といった人間活動の中枢部への侵出が定常化している点が挙げられる。</p>
      <p>特に留意すべき傾向として以下の点が挙げられる。</p>
      <ul>
        <li>成獣単体だけでなく親子グマの目撃が公園や学校周辺などで複数確認されており、母グマによる防衛的攻撃のリスクが高まっている点（※72・73・74・76・77・15・17）</li>
        <li>倉庫や神社境内など、人工構造物や集落内部の空間に居座る事例が目立ち、緊急銃猟による排除を余儀なくされる状況が生じている点（※9・10・12・13・14）</li>
        <li>仙台市宮城野区や北上市常盤台、妙高市などの住宅密集地、あるいは国道上での衝突事故など、山林境界を越えて奥深くまで侵入する事例が継続している点（※42・63・29・50・51・52・43）</li>
      </ul>
      <p>次週に向けた警戒ポイントとして、夏季の観光や野外活動に伴う山岳登山道での遭遇防止策の徹底が不可欠である。加えて、住宅密集地や通学路周辺においてクマが目撃された地域では、見通しの悪い緑地帯や河川敷沿いの移動経路に対するモニタリングと、登下校時間帯の見守りや進入防止対策が最重要事項となる。また、住宅倉庫や納屋の施錠、果樹や生ごみなどの誘引物の除去を徹底し、集落内への居座り誘因を遮断することが求められる。</p>

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
          <dd>2026年7月6日〜2026年7月12日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-13</dd>
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
