// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月28日 / mode: daily-report / 生成日: 2026-10-29
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-28-daily-report";
const TITLE = "2026年10月28日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月28日における全国のクマ出没関連事案は計59件が記録された。京都府の13件を筆頭に、北海道や山口県、福井県、秋田県、兵庫県などで複数件の報告が寄せられ、教育施設周辺の生活圏への侵入や農業被害、くくりわなへの錯誤捕獲および殺処分といった重要事案が確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-29",
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
  datePublished: "2026-10-29",
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
      "title": "2026年10月28日 秋田県秋田市 手形の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOcXdwWUxkX0lWR3dUTHlpS1BVVHNRUzNGck5NMkZ0ZTFJUVpPUHNMZUtxdFlRMUQwUlM5ck90U2FzSGdsZmJrY1FhaUVzeEhPckNZZG9tNWlsQ1hpV0RGWHB3MnhIaHJRYkh3M3pHb21BeTdEaVFxNGVuYjdKYWFldFBpWXR6bHNtRERPbW5B0gGAAUFVX3lxTE1GV04wT3otcVlGTVg4N3RzOWxCSjREMFBRb2dkallJSjkyNElqbS05YkNTOFQ1dU40dk5nN09pckVDVnAxcGE4ZnZVcjlNaExKb0RoYktEaEdDVnBlbHNxSzEwM1EtTzIwNnlqRXZDSER5ZHFjMWNOY0dVZnNNaHlv?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 秋田県秋田市 手形大沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQZFFadllUVkhwb3l6VldZbEtQOF9xeXdMQlhfc2gzMkt1MmFYTURPQkU0UXctcUpnaDVEUU5iZmZibVBKSGFzM3dvVWZKTDJocEZIaXFlTS1XS1BKNDVUaFJFZjZEb3VhZDh4VTdDbXBUZVBUOS1sdHpDRUdFT3NXU0loTWRXdExoSGJ6ODZYMFlmT1VKR2c4MDJVcnMtRllTWkJ6TFUyRXljQXIyUkFz0gGiAUFVX3lxTE54S2Y5UWhpZ2ZBQ3FhZUdHOHJLY1Utd1V1S2N3U2JnenVvMzJBNHVQYy1WbTVSSUpEcnJLYzFxVkxJSzgyWU5DZWxDMDRJLWlraXdFc29RRVkydU1XMGc0LWFJN0I2dmMxSHdDcnk3Wjh5eG54VGlqRHBhY3BKUTJydlZzQUF3VXFkMmpCR1VJQ2RGeGFNRXBCT3hJMDhnUUxKUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 秋田県秋田市 手形中台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNa0RKUFQ0VlJNN2FmSjJ1TlhQaUdkTmwxUFd4RHd1TE1MMlgwdUUwdnpCN2hyejdfeVk5TkMyM3VJMUJlZHZFODVhbGQ2X2V3bGVoNHdCWDBYRGJOWHBjbDFHNFRuWUprck1zbVBxUGkwU05wTWVfM1lDdmVJSk1KTVZfbE0xR2p0MmQ0RmVQQ2lRdkw0RER1WGp4UkV4Q0g3S21TM2d2blNhQVBLeVlWWWVnWlFxOE5lSmNBTmJudjFiU1VzUm05UGRCY0hUY2pmSk1FV0themtIMFZYRXJnRHJUaXh3V1BPQno5SjZVVnFjUdIBogFBVV95cUxQX3l5MXdGZkZONlQyR1o1WFZOVWJKNlFGUFpPc3JMWVZQd2tRYURXTXpzWlhJMmVveWYyMEpTeVBiWDlJVTdkM2lXSTFsMUY5azdMTmpITDIyc1QzVU5HMWNCb3ZRb3N1ODlJU0RPdUFpUVJ2SXd2bGFlNmd6UTMwZmRadkhyVzBvOHQyRHRkd19FQ1EwTUZ1dV8teTUyak8wQWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 広島県広島市 安佐北区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNSmdieEs0V3g3MnlMclBhSVFSSDFVOEFSNnJHeWhfV2pnSGtONmVnZHREOXpmVWpsa1lzcjZ1UzJhSWVUX2M4X3p0UnlfME92NF9JY1dzZzdfWVBlaVZFS0FJdGNTUkJTRUlKWjc2SGlsWUVnLXpjcV9NS1JFcmk2RtIBgAFBVV95cUxNSmdieEs0V3g3MnlMclBhSVFSSDFVOEFSNnJHeWhfV2pnSGtONmVnZHREOXpmVWpsa1lzcjZ1UzJhSWVUX2M4X3p0UnlfME92NF9JY1dzZzdfWVBlaVZFS0FJdGNTUkJTRUlKWjc2SGlsWUVnLXpjcV9NS1JFcmk2Rg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 山口県岩国市 周東町祖生の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 山口県岩国市 美和町下畑の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 鳥取県八頭郡八頭町 徳丸の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 北海道登別市 胆振幌別川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFAxRjU1TEdwV1lrbjBZVXRjek5VdG51S1RDOFBoUEtvZE1PTWlkcUhSRng2dTZBN09oMHFBVVFvZ2M5czFIQTVFNmUtaEd6cVhHMk1GYm5PejNvUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 北海道登別市 新川町3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQ0dyYVlGbllZaWthdF9Ca0FxWHdwSjhiOGgydElBSTduclVLQm0tQ2ZoZHNNdlozT1hPcGw2Z2k3X1pZdUQxbDR6bDVPMVJLazMyUUR6aUFuNGh3ZmVtTjFpdGV4T3dqWFV2VFQ5SXFoQmRPQ0hLSFhUekYxOG9qdVhxR2JtU29TR3RkUzNMcjgyOFVnd0E3TXFaMkbSAaIBQVVfeXFMTl8tcWNXQzl0Q3Vhekg3NGY4aFQxaUVfanNxVjlCQlFOTHo4TXpvRk5yVjUzSTF2bzZ2M200QVhPTUpJTkhoWHc3cDM1SVZPTFN6RnhyWS1XeFltazdTR2g1YWRCOE1DNTZZYkZnYVQ1MHBnRUR5ai1WSmFkcFZFMF9XX2NKelktX2tRYlZndUxRUFdoNTFFZ1FkZzdlcUEyUXdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 北海道士別市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 北海道歌志内市 神威美山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUnJvcnFVWkppUDQ5Q01wcmlsMUNWSWdGektjQ0ZWU3lxcFBmSW5HN0NQVjhuRlpBTklXcy03ZTZzUExGRDBRLXhqYjNhaHl6R3hZa21lQnNOS0pMMFdwLTRCdlJEX2NaWVhLT0tFTkxZNTF2TjZhOGZrRFlINkJVQTRrOXVENGN4TXgwTHRPWmVrRUJ6QU1lX185c1LSAaIBQVVfeXFMTmlIc0wwWTdLOHhuaTJMMm9jNnVOZVRJVXJ4S2ltT0xEaFJORkQ0bGk5RDJManR0UFlpQk5ZVEV1c29xWHQxRlN0OTVSOWpINkkxLU81VGl3ZWVOZUUwRnB6clhqdUcwbk1sNWd6VEpkQUd5cWVNY0N6djc4bWV4WU9la2twZUg0N21PN2pjYU9LaVN3TlZtLXloTEJHcGRzWjRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 北海道浜頓別町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 秋田県北秋田市 小森岩ノ目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNemNnUXF2RDhVX0tBWFkzRGVFWFk4eVNWcXNRYmswRndNeHcwRmd4cTYyX2FabjZQZGFkcWxVN2ZBdHYzNHM0cVZURllMc2lxY2pfWDB0S3NLWGV3czE3NHRnc2ZHV2NQdTIxc0hqYWF6Y0RFblR0bDJNWFlhSGJ6eFdRbThnYzZBY0xrQko2Q1ZuREs4dTMzVmZIWUtnTUlnYnBZdDVlQm1FRjFVT1d5MUFlWURXTnFQNXJQNEFJUEY2QXNvWTFwZks3dWN5TjVrWVRwcjFzeFprZXExQVBYY3p2YXFQTmlmQV9LZDFDWk5nd9IBogFBVV95cUxPRWFCU2Q2OFlHU3k3ZWhjc25xelpUUlh6V0ZPWXJuRG5ndTZpYmNQak1SX0l3a3M5eDNmaDFsRmVza1ZoU2VQY0RyR2Y4VGFrYmI1MnhJS1FMMlU0NV9FUURGYkdRaUlEMUV1cVh4TndDTUpHSWtCTlMtTVE0NHVvbWFVa05HSktMX1hEOE51cEJOWi1lNFdfSm9jdzRWMVlzRWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 青森県五戸町 切谷内小渡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc25DTmowUnV2a0RWekJCQzBaSkt1bXJwX0tOSFMxZGhHN2x0RjNjaTVsaXVxMXpPdjRPTHdGNmJrWmRaM1ZOWHg5TkVaTV9QNUVxaDJQbGZkVm9nejVPZjBQeDlyRDVYSm1WbmhDc1YzSllLLW5HVi1xMFNGbXVZUTZSQTlQTnYyeTY3a2xlT2l2YURtUEtrMk9nUWjSAaIBQVVfeXFMUDI5WVYwa3c3NktJNEVZeDlBTW0tbm1oVGVadkFlNEFUWklHZ2dEdlNnWlcwbzdpLUJmTVhDOFhrejhBRzhIdDNTdnZqVS1JRnkzYVBJYnB2ajhPbm55b2hUbkhVaC10SXlicThnNURwdDMwbHFIWGFnTEtlZThiaXVnVDhFUUdlQ296dnljZVRDbVFKc0daUU5XSGM0emxKdXdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 岩手県花巻市 石鳥谷町中寺林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNajQ0Q1NwYzdiZS1vTFNISHBpTGU0NmFvZW5vNVZUYkhHWnVrSzJHQmJnXzFNYmpEVzJrTUE4YnFzcnR0SldyVFVaME94WTZKVUVOYTdNWk9Nc2FQbkQ3R3FLenp3OEo1MVpCZVhOVnRLOTZLb1N2d3plcWNwdVBxLWgwSDRhd2dVb1FQb0Ezc2F6UGoySGg0SVY2X2MyZUpuS1pNNHdHOW9wTmgzTUhPN0RGQzYwSUtmUnFoekVocFFjQjJYTW1JTTN4Q3VTeUdpd2pITmEtMERaR3BvcTVxNExPU0hqRy1yb19Pd0gxdGpQZ9IBogFBVV95cUxONmdSUjZTRk0xQmZBNHdqY08zZklSaWVCWFQtQXJFVXRjR0YtY29CcXRnOTRGaWxidzEtVjJJTzRub1pyb0dwTlFHOG1RVmw4Q3FIRjY3YWNBN0RuaEhfT0ZObm43MDFWczcyVnJVQTdxTllfSWFWdWszNXU4ek44R1FXMlVBSmlQdWJ3cDZQMkQzYkFzaS1HMGxEUndLeW5hTWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 福島県白河市 市道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQdEtST3ZFNWtBbEtBbUVtMms0UGZkX3QwODRIckQ5ZTI5OTRRZTlKNnFuMFJEQTZEdXpFa3N0aldaQ1hQRkk0U2dJTUJMUU5NQ3RqLUxBeDFrUmlnYUlGc0pCd2dScXhiZncwd0pjSHJSN09Jd3Z6YUtHVGVjd2l0d1Q1MXJwSDRScDhyaVdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 宮城県登米市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 宮城県大和町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 群馬県長野原町 民家庭の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 群馬県沼田市 白沢町平出の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNmJhODBScDhFTC04cEdnX3BkUVctMW5JVklJN19CeW1TNllIMVo1eGprRTd2NV9XTzlfeVF4NXFLMGhWY3JYOVRQMmowaEZfMjlMQklVa0FtSkM2UmJTRGtBbHQtWFM0SmdTb2hNTnJWcjM3RGo1X2pHQ3lMYUZreDZRNld6UDQ0aUQ2bDhfLTVHeWJrVWoyLW5tNknSAaIBQVVfeXFMTnJVX1RycmlYYXBZUWlHMXVFdTJodHF0ZUo1S0xtOUFGUVI3R1g2UjRBanNydU5pR29ta0FQa05nQk9UOEJxTE9oelBDTG1GUFFOcFZyeFFBTmdSRlZfVUVwMkdSSjlPNms2bEtkVWpMQXh1MTBfd1VDNTJzM0ZDTUlwNXhBLTVmQlN0STNxOWNJbU1Hck94Y0dpeUUyMVV2T19n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 山梨県上野原市 鶴島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbXdfekZsQXcwTDBXeGtiVkMzVVpJQ080XzhDTFZadTFPaUJPbVVqTkh5YmFXMEhmS0VFeWdOSnU5bnpfTVM3c2YwZll2X0pjSVlUeEZMQnJpYzZUYlJqYTVhZjhwX2diSGZESnE2OTh3QWt3TlA5RGNjZXd2WFpBejI5MkNDVTdsZUNTaVh6UXNjc2psemFJZ1BvMkvSAaIBQVVfeXFMT2ZiUHNpUlRqbUVteElkMEN4OGtzNGpxZEVzTGRqRTJaR244UWU1Z3oydXEwdi1IdXVPVmtnUWQ4eU40SEVnRDc0Y3dVRzZHaldWcEhPQnNrQzhrd1FWX3I1N0pYbEFhcloxYU5GX0x5ekY0RHVpVmZyZy1FaWZYVUQ2WDZlbUhDcUFmbUF0SXo3UTI4STA0RndyV2xUbThPNkhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 山梨県富士吉田市 新屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRXZkVnUyMllQeFNPdWVhU0xPUG1FS2IxM3NzX3ZOQnpXd0tNSTFVZmUtZXFwQ1p3eWxaY1p5MnRuY1MzX1Jyb3hZS1JVNVQ4dVo5QWVjWmZxaExCbHktVU9oVVlYa1ZjZ3kzMXJNOEVZMVUtNnZnSDhiLXY5ejR4M1JMaHFLSGpqRlAyTGhVS1FwZm8weXlLVm82ZUnSAaIBQVVfeXFMT0tJczdpaktYaGJiaUpneE96V0J3NEk5MEdKRERQUmRTZW5oN1Foa3ZyM2lHYlpFdkJldzkxZzkzc1BvbWpFOUhad1NZYWZnVFo1cFBSS1JHUkNITGVfVVpxZkpBLW1qZ1B4anZubXpObG9OWEFQeXpIOVpWVjFBVVBndDJVT2l4OExncHdEcko4Y3Zlb0VBaUhhZ1FrbzFRZktB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 山梨県大月市 梁川町塩瀬の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOVW1HVS1Fd2o1UUJoMGZZSHJiWnhsVjZVMzZXVVZ1UFo4V1ZnYm85YUNOTjZkRndJYmNnZDRuajJ1dzF5bW5tUVVUaV9YZFI0b2RMZ0c0RVNvT1R6WkY5alBCNXY0VDdhS2FzQ2NGZW9fOS11aUI4MjN5T0NyR3poT1UxX3FQczlMU2c3WWNfaUlaUWVJajU4THI4ckRIc251Y05NWXhfTTQ3NEd2aGVlNFZ4VHFHRk5abmVGZ3BOM1R4dWZDYjR5OWZLenozWklNNkVKS2ltS2dVenBqZXkzS0tINXBNNXRscFI1OFk5anl5UdIBogFBVV95cUxORmtBazV3V3pzMlhkQTVKQ3NzcEI1WUwyQ0VoMWRXU1FURjVkVzNjb2lpQnVuVE4zUHlQWU9zRFU5VDFTMFRGY3FYYjBja1NGNjdtWnlLZHl1amxoWGFUdFpzMWwzd2JKUzlJb3JiaU9WQmJ5Rk9FSGdTSU9xTUtLMHRRNlAyWEZ0LTZ4X01uVXZyaWdaODN1V1V2Vk54alNpR1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 神奈川県松田町 織戸組付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 神奈川県松田町 寄の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZnZKMElBM0poNEtDam9FZ2RZR0JoTExRdXhnejZ3aXFDMzhHeVZRVlVDaFpVSlZIek9lVDBKbzZTb1FnZVJxZXExcmZxandpaXprMi1HeXhRazlIWTR3aFo0VVNONXJNeWNFM0t0RUFiNmlYV0NzYzhDSzNiS213WmpEVUpQdnJCdXJWX3BhazNINDJCaGNLZzJ4NTjSAaIBQVVfeXFMTXVOdlZ2am9YZW5WYUtyeUhrUG95djA0RHhBaHhjeEdQOGpYbjJGeG5YZkRUMHExdUdEZEJONWNtSTNkMzZvNnF3T29kT2R5YUpwOUQ0enotT3dNNUozQmVheEF5RE1jMnMyaEVQYm9rajNhd0ZmMjVia3NjaU9ZQ2lsR1QzRjk4RWVrQVdjb1JYVWdVdFZfUmstcnFrR3FyUlVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 福井県小浜市 尾崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNenBkZi1YcTEwaTNIenZxTDJwT3kzb1BnZzMtRF9hQkNyNXcwdW5oUmZUdURmSkpfN09jVkxhc29hdkN6ZGl0b0M4ZDRvMWtvSnFrbmV1R3FmZFBDbHR1d0Z4ajFkUEVIbnZXeHRQQ0V2SGxOSW5IbHVqbl8zbDZWRFVDLURKSklkMEhnbzRjTjg4MGpmVHBqN25EZWTSAaIBQVVfeXFMTlQ5UkdlWXlnQjN5UW4wYUw5NkVkcEc3MVRaRDd4M3lTZGxZelE3ck0xcW9Xd2NxNUdvSnBZamtMVDhMZ1UxRWVGakw0RTA0T3ZKMEdhNGoxcFRaVGgwQ0VsYk1JV2RPVzB6U0RTOVJjdnk5YUVzRzVJZUVzbWtxS2wwUmNvUWZ2Yzk1TWNLdDRNVU4wUHFqUU1WclZrYnJtMnF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 福井県小浜市 須縄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ3h0Tk9tMUg4NS0yWHNSRzJKN1ozYnE3SEgwLUZ4U0Q2T1hTTUxZR050eTlQenhlWHVDSklhTmRrUHBhNjAybU95cTZYODROQTJDVTVnZENKUjR4U0FUVFNnLUdFb1BIbDc3SU16M3RnczAySVRBUjh0UUkzU2NfeDB0NEtxRG9xZHEtRTlqQ010TnVybUxsOWUxNnTSAaIBQVVfeXFMUEFreE1ZTEVoRW1EMnc2VEt4RWJUSFpQem44Q24tWndjWDhaVHg2T0E3V1pCb3ltOVBQNjhkSzhaUUxUbUxBOEhkSWxsU0p1d3p3QXA0aHZGMXpqNHZEU1gxX2w0clg2S0xaWXRJV3ZaVzZmQ2pVbzVoS0Z4bXM2Y1JRaWs1V1d4SEJxRTlBbUpsQmhFVlJ2V0xKcVRHQ21BQUt3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 福井県若狭町 天徳寺の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 福井県高浜町 笠原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 岐阜県揖斐川町 春日美束の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 岐阜県恵那市 武並町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 長野県中野市 間山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPM2pRb05ZS1doSHNiRURfRG9kQ3I2alhGeXJiY1d3anM1Z0hxaUVJSzdVUTZaWEl2ZzVsd25PZVhES294c2FuR0VZVFRIUDA4Vm9TazN1eUJRMEFfUFdzTml5cTRySHVtdmJMY21EcFNyeFBMdHZaQU5rRm9BMmJfVTVpUGpsRGsxdmZpUTFuZUJVUmFDVEhKb0pUUXFjOTA5d1FkalVZQk9nYnZiN1N4RzRTc2cwS3VYZGVaWEpYOVM5cDVZMjloaElYODY1MGV6Y1Jnd1BjYXdBZkg5NXFVaFg3a2xWZDFvdzhnU2E3dnQ0Z9IBogFBVV95cUxOTFRydTdHemNZNk1LVXR6RlFXNG5KRWtJeC1iUWtKM1BlQnQxVUJvZGNBUktWenU2eXpwbTlIYWdoZTNFaGNWQTltcktjVVZZYjF6OWRmVmJ3cXpfXy1VeElUWjdOOVVFTkVtZ2QzTTZ1MVpWTm5TUUdHQzk2elpHWHJoU21ZeEk0c1oxYVF2cFkzU2hncVB2ZkRodXVCSlNKdlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 新潟県南魚沼市 原小路の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 愛知県設楽町 津具泥沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVERGOW1MRWEtTmlLZ1N4YVZKWDBnS0ViTER1TmVhZko3bXNybEp5YkV3LV9tVTFnVHlVaEFOLUQ3MHBSM3BZMFpjMlgzWUEtVUVkMkFTczlyczdESEZ6QW4zV0ppWVJwbDBzR0R4bl9qYTRKcU12bm00RVRNMjJSUnR5ODZOSmRzLVlVQW5iUzYydVgwLTJ2MmtUX1jSAaIBQVVfeXFMT0d1Ri1kUUdNem5uVWtqd2IwWUo1anpDYV9hVmlXSk42VlJuTkVKeUJubTZUcFV5RlA1SU1nQ21qbUtrdnREWTlzRTZreXNQVldJaVpKcDBuX21UeVNvMWthWlBzRnF1Y1g5TGRDSGRKNWVDY0tFc0hXdXpnR3BoU1k3NzZ3TE1jYTBReWVVZnJGeWJ4OWlEYktyNDFlSHZhMUlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 京都府南丹市 美山町内久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRnpLUlhSdkY5MFEtTnJ2NTRZYXpIX2h0VVBKVllwakFSOVZhZnotNEl3cEgwLXlGS1E0dGNobU5Mb19CclNIRlhvS1piN0tmaUtQV0tqUERhRVdidlhtNlJHdnpUS19oTDFWWVhYV29xdnI2Q05HZTNFMENhT3plbm83R1VHenV0MmxOX0R1U1lNdzBMLTc3WXptTUbSAaIBQVVfeXFMTVFDNy10bEdBS0J6MnhwMFhNU01XV3hVdzJRWi1XLWhDR2dOOEt5MG9iTGdfUXJJNkc3cUxZZU01OFJWemhnUWVmREV3Tk05V01nRjlkZDdGeGlVQWFGZWcwdGc5SzdXTWdRRG9qWnJDMm16aUFBanBSUVNZS0FFaEpQR3hnNE0zMlgxY2hJeHBLNTFtWXJzQVBwZk5Kc0JoZzF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 京都府南丹市 美山町鶴ケ岡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOVpkekFPUzBaenZjaGVxQ2kxYWw2SkdjTlhjbTBzbVFDeWRIVGRwZG02UTBGNkRhbTdzbTZEcGF3MVk4MkxpMFA3anFId09UVUc5bVpQR3MySS1KYzFNRjA0NjVLcWRsLU92djJfSjlSaVFROVVmRndwY0tuME8tQTMtZ1FiNlBJVFVpMjZTX3hMT2pFbjJ3VEpwUmfSAaIBQVVfeXFMUEV6bkdKdmxWV2dfOTlWTDVGOEx5cHJzcXI2U2cxQWRfQWlQaW8xbE1UNGVJLVRheFZIbGVrNzNUM0ZYVURSOWRfN3l4TGZCeXRMRExhdklpUzRIRkVObmJlOTNtMm9HMmM2VVlZYVhxWjVycFhldS0ybXp2cWwyLXpEYTFEV3ROdEZ5OG1nNmlUT2lZN3RQcGNYbjNBMUJsUk1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 京都府綾部市 青野町出口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPU1E1dEVmT3dxR0dfc2tVUDM0Q0VuWUFkXzVYWW1PUWMxakdOYWxjcFlaa3N2U2xaSjdDRnJZNk44c21DU0ZHdUh2QlRMZUFYWDZVeld2VURBVXV5WndCY0l4ZzhrT3BudjEzcjJhUEhxODlMMWF2ejcwQ0FzYWtpMXBPRmZORUVWVXA4S1FxMzVZX3NYNm9hLUVNSS1CQTRxdEg1am9EaGVkd042QURj0gGiAUFVX3lxTE1lU0dxWUowVjJsSWFXZjBaSXp2NkJ1cWNxNDRuUjNEbnJ2bHBqYS1KS1pNQVNSSER5UFJOeFdrbzNfOWJfLUF1aXFoOEMwRG5IV1d2R3lVVkpoYTlxSXpqU3JQTnJvWFdqVVdyTGFTTUJzemhKU29XRG1WbmZBUmlJd21IMmpMMEtmS2QwWkJGUGlLZlNQWmZzMDRBUjhSUTR4QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 京都府京都市 左京区広河原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONHg3RkxYcU1BOFM5UUY1LXpiSE9ReVVpV2JIWmZFelBwdk1KOGJrbktrQWVpYlhWVnJadWVVV2t2aDNUWDZWZG5mRnpkX2Nvcy0zQ0JJZm5pVDhLYjVJMk14TlJmMG9xTVMxaVNiZEtUZE5wc2tNWEJqMmZnVFRDakxlMFlTZjRWb25PNlVxZi1CejBYR2FXNXNuMDZYRUpKeUhOSkFnMWlWUEMwaENzUGNNQ0xNMHVhcUZZQlJPYjRSV3VvUXhKLUlzY3lyOUg1SDd1c3ltR0lsbE9aSFNTNHhublFZZE04Z0NwNGZlR0xmQdIBogFBVV95cUxOLV9RUmJpTGlReDBuYTJSSVJkc2tkVk9BUnc3ZEtOY3RlTnVqWl9Od3U5ajZsbF8zQjlDWUVzbVhPZkwyQXdha0ZiZHg4Z00ycU14RzN4LWY3aHQ3bTk0TjZnY09aeXFqdDR4RUl5NkZBT1o4Sks0S0ZLTkc3SnNUR010aHFZd2F3LW1PTkdaQ3k0UFE5U1MzbFR0YWxmel8wY3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 京都府京都市 左京区八瀬の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQLXl0bWxOdmZVTElxV2JLWHdtMGZTLXcyaUo0UjFBLXVrOVV3UU9yY1ZveFNuMDRpTmdPTnJKb2thdFF0VG1qRzE1eUFHSm9fLWdvdUs1VHd0blAyemhnM21sZDBrTUd4N1IwbVBVSjFMQkhta19sVlNvbFVnUzJGN2Q3NXJYTlpfdmlfWkJZZm9KeFlVck8tY3hQLUzSAaIBQVVfeXFMT29DZ0tXclJ2UklRaVcwT2JrQlVIUFBNU01PWXcwWU1HZEJXa0xrMzlTcDg0dUxzNHhERzlXcGFpQzU1VWlEczYyUWlUa09yR2hwdjU2M0pMeWFVSldrejZKekw3NHdKeHRDMm9XOWs1cDRNenlOUGNKX3I1OFpncEp0T05EdHMwZzdZUVFZUWVSYXpXMXhvb0RlYmdKSEF0OFVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 兵庫県新温泉町 多子の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaWIyLUZIUXN3aVc0ZzNTbHZjWDBrZENYTERPRTdiamZaY01qcUFoVEVYakthYnJTV1NwSWM3TVM4V1RXdEF4Y1JJdlUtc1VPSlVjcWJFdW40RUVOM2NZZ2drY0YyeUozT05TenBzMzhja0hnWXJWMUJaTmlxWUd2LVdrQVhiRVM5Y2VUdk1qLU5oaGpyNXlpaV9VNlTSAaIBQVVfeXFMTTRpcGNteGpETE1MQnFja3VhYWYyTFVqN2VMVFFKVVFhZnhuQ0Vlc2NBTC1iNXRqeGRpSVBNZS1aNF9LbnpSbnpVc2tpUEZlRm11V3FjaG00QjlwVV9CWjdvd29HQkFQZ1FRR0VBUjlmNnVHUWxfZ1pnUkZnTHF4bEVGU2hFb2RpTGM0ZHM1TXExRndaaURKcEFPeENaT09ORE13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 兵庫県豊岡市 加陽の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRG9GcUJYczRlT0hKdXZZeFcxbVkzaHpoY0NUZVhnRV9rSW51MllxYUh3V0ZQNzVkX1Z4Wjk1bnJ2N2RWX2dJc2FiaU9aeEt6b0FGYVRfOU92UWlGQmM4TTlpR1NTU290WWJxdVA2OGtSUGhZV0RHR055Ym9Hb3Y2VHl3YWZjZk4yMm1VQnptN3lXVW5paXJQWmd6TEvSAaIBQVVfeXFMT0JlbzY1bHUzb1AxWmlrTFBJZVFsNW5MS3BNblA4b2Zfd2oyeTBfbFdfUWtvOVJJcjBIbWN3Z3BtSm1jSEV1NlVsQ3QybFhJY3RiM0EzcmdOUzM0UHdsXzhGU2hJV2F6cXhHSGhGcFhJX0lVMWJHV1NUV0RhS0FQTUF6c2JObVFKRlkxVFNQN1RocXBCbTNlSmVGR3NtblA1R1RR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 兵庫県養父市 大屋町樽見の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNjBIWnZRR01MMDFJRFMzX24zVDFlNlhrWHU4Y1ZGNGpDUjVtUFJITHRKS1hFbVNHVkZHbF90YWgxcm9vemQ5YXhROUJCNGlocVgxbWg4R0t5OFJCdkl3MjFZZGUwMWFaZExHR09fWG9DUzV2U0t2XzBrOWhnSWRuOWZFck9GWmNWZ21HVGJySkRzOTZIV0xxLTVUckPSAaIBQVVfeXFMUGR4dk1HNHhVb250RzV2MU5UOFd1R1Etd0VGTFV2RnR0eVhSV1BuMUNtSmVHUGRxcnVoMldUcVBkRXpLUlA0M1ZBTmhKN2NFQlYzRktVeGtSVG1rWW9KRFJpLTFDSDgxTXotUDl4ZDBjR1ZRR09fdW91dHhSWVhyWHU3ZW9XOVV3VjRXSDdWNU8tZnZJM0x5RF9ib2tPMTNqeFRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 兵庫県香美町 香住区大野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPMV9UQXFFSzVCaTZIVmhhYWthYVBiaFRMbEJOWjh0OTA4YThTWVZ1cmlGd19UemE5YTIwNzhqNXhHTUZWREphVF9QYUlaLUJRWjItdzIzNVZxckhhclZTdHdxbHZlV2Z4MC00SnAzSWE1cXoyQ1dMUzE1bDdTbEo4NnNZQVVKdnBNd3NYbkd2ZTZkTjM4QTB1empzXzY2bTFiUEhYRDNLcUVfdV9lVUltTEpfY1pPeXRrU1pSTUx0eWxybENWY0o0NjNwem0tVE5VNk9WaXNJQ08yMENqN0hJbW14cUZCYTZBVmFra2N1SUdOd9IBogFBVV95cUxOdGcyRkR6Zkt2cm42MDVPeTRYQmdSbGpMZl9tN0hpT3hTa0ZNMEJJUmNUeFZmTTIyVE5JcDdZR29FcXBPenJxR3g5M2JyUjQxNmZsUmk1cjV0OTdITVFDQXdxODNob2g1ck5MWkdSVHhqcnMyNFdMTHVGcENvTEJYNDliWENXaXZOcW5vWjNwQ0Nya3JvSXV3M2taaGhVRGFWaHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 奈良県五條市 大日川の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 和歌山県海南市 九品寺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORzVmWEpnR2NVSWI5TFpRc1JIY20tZ0NLa3lEX2tUZU5hcl9TVy13aGdQZkJyY29QRVlHLUNMVUVlcE9fekNYTGgxUXlNRFVETlFxOFRxRjhBUmJ3RTBLd0JUZEUzVTM4WkdpaXZjUUl6U0xscVB1cGRtUHI2SGtXRHJNb1ZJOEJyTk56dUlZNTBUUmJGd1FPQ0tvMTnSAaIBQVVfeXFMUFlnQW9YOHBfamoxN1drdFAxcVo5aUFaTkRJdktGeEJvRFQwY3pHOHQ5QWhOcFNhNXF4X0t2OGFXUmRkWHRQZlNXeVlQWUxWNVd6dDhucDFzSnJkRzBWd0lQSnl1VjZjaU1rZFhJUThIZC1CX1EyUG9FLW9UUWRCX1ZXYU5SUnJpaEpXeVY5N2ZndDZiLU1HRjBqWHY5dUQtc3dR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 山口県周南市 大道理の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOeEMxaTBBbkVBTG9KczlNdWZXYXdFTmVBSG00TU5KUEdWNlFlTWhuT08yT2pjYUhyVzFtUDRKSjZVa1g3aGJrTHJMZ1lLZVVWUGdwdTI5UTZLTy1vWDVmeDYxeFFkcTJtUUFBN2dEbmRoWXlKMmU2Y3NTZWJFX3lqWUNxZzZtMGJqVTZIdnQ1X2RxRnJyWFBwQmM1am1YWU54RVHSAaIBQVVfeXFMTnhDMWkwQW5FQUxvSnM5TXVmV2F3RU5lQUhtNE1OSlBHVjZRZU1obk9PMk9qY2FIclcxbVA0Sko2VWtYN2hia0xyTGdZS2VVVlBncHUyOVE2S08tb1g1Zng2MXhRZHEybVFBQTdnRG5kaFl5SjJlNmNzU2ViRV95allDcWc2bTBialU2SHZ0NV9kcUZyclhQcEJjNWptWFlOeEVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 山口県周南市 大字大道理の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 山口県下関市 菊川町大字田部の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月28日 島根県大田市 長久町土江の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPODJKT0FVV1gwY2tzV0xYWXJuN3RxMC1wdzJLSUJMbkVpUUpSMzJaa0RqVndXUkVSYnhDdHA1MWJ1VmdEM3RibVMzRkkwN1E4WDJtdW9LVWVMcmdFcy1ma012dUt1R0huX2tYY0VmN2tvZk1lUlNuQXhISGYzM2xSVWhYQ1RHUFNHbjBXbEF1dm5JaWNYX0Q4eHhjYkVKVHZ1LWRyTXhwSjhVUzFGTnI2LUlaR2pXQlM4WW5rSFF0TU1tWWxZamFKajQxUTBzSHdtWWxRQXplQ1N2bFdzZ2N0Q1dsUms5R29WaktYN2FNSFo5Z9IBogFBVV95cUxPNTNYY042X3NDR0NjdjdpOXdEdzV3bmtNc3JnYTRhb1pCeUdHVXFzemlNNE5xekJjQkdQdUh0VnJ4OXVNbXc3cDlrV2d3eWVqc05nbVo4c1FHZk1oZDVFMWN2VHVFZDU5Zm9vc3F1aFkxa3hOZ25rNUVLenhlUkxmNkVlOGJ4bkQxUS1PS3F0NlVkaFYwTklSUlR2MlNaUmdnSkE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月28日 島根県大田市 大田市長久町の市道稲用線付近の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"京都府","count":13},{"pref":"北海道","count":5},{"pref":"山口県","count":5},{"pref":"福井県","count":4},{"pref":"秋田県","count":4},{"pref":"兵庫県","count":4},{"pref":"山梨県","count":3},{"pref":"群馬県","count":2},{"pref":"宮城県","count":2},{"pref":"島根県","count":2},{"pref":"神奈川県","count":2},{"pref":"岐阜県","count":2},{"pref":"新潟県","count":1},{"pref":"鳥取県","count":1},{"pref":"奈良県","count":1},{"pref":"青森県","count":1},{"pref":"愛知県","count":1},{"pref":"広島県","count":1},{"pref":"岩手県","count":1},{"pref":"福島県","count":1},{"pref":"東京都","count":1},{"pref":"和歌山県","count":1},{"pref":"長野県","count":1}];

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
        <span>対象期間: 2026年10月28日</span>
        <span>·</span>
        <span>公開: 2026-10-29</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={59}
        periodLabel={"2026年10月28日"}
      />

      <h2>主要事案の概況：市街地・教育施設接近と捕獲事案</h2>
      <p>2026年10月28日に収集された全59件の事案のうち、特に人身への危険性や自治体の管理対応が注目される事案として、都市的生活圏への接近および個体の捕獲・殺処分事例が報告された。秋田県秋田市手形では、周辺に秋田大学や秋田高校が位置する市道において体長約1メートルのクマが出没した（※1）。同地区周辺では手形大沢（※2）や手形中台（※3）でも出没が確認されており、文教施設や住宅が集中する空間への継続的な接近がみられる。</p>
      <p>一方、中国地方では個体の捕獲と処分に関する事案が相次いだ。広島県広島市安佐北区において、捕獲されたクマ1頭の殺処分が執行された（※4）。また、山口県岩国市では周東町祖生（※5）および美和町下畑（※6）の2地点において、イノシシ用くくりわなにクマが誤って捕獲される錯誤捕獲がそれぞれ記録された。これらはいずれも錯誤捕獲時の安全管理や対応手順の重要性を示す事案である。さらに鳥取県八頭町徳丸では、梨に対する食害痕跡および糞が確認されており、果樹を中心とする農業被害も発生している（※7）。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生地域</th>
              <th className="px-3 py-2">事案内容</th>
              <th className="px-3 py-2">特記事項</th>
              <th className="px-3 py-2">記録番号</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">秋田県秋田市手形</td><td className="px-3 py-2 text-xs">市道での目撃</td><td className="px-3 py-2 text-xs">周辺に秋田大学・秋田高校、体長約1m</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">広島県広島市安佐北区</td><td className="px-3 py-2 text-xs">捕獲個体の殺処分</td><td className="px-3 py-2 text-xs">自治体による殺処分対応</td><td className="px-3 py-2 text-xs">（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県岩国市周東町祖生</td><td className="px-3 py-2 text-xs">くくりわなによる錯誤捕獲</td><td className="px-3 py-2 text-xs">イノシシ用わなへの錯誤捕獲</td><td className="px-3 py-2 text-xs">（※5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県岩国市美和町下畑</td><td className="px-3 py-2 text-xs">くくりわなによる錯誤捕獲</td><td className="px-3 py-2 text-xs">イノシシ用わなへの錯誤捕獲</td><td className="px-3 py-2 text-xs">（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">鳥取県八頭郡八頭町徳丸</td><td className="px-3 py-2 text-xs">農業被害・痕跡確認</td><td className="px-3 py-2 text-xs">梨食害および糞の確認</td><td className="px-3 py-2 text-xs">（※7）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没状況と傾向分析</h2>
      <h3>北海道地域</h3>
      <p>北海道では計5件が記録された。登別市では胆振幌別川沿いの市街地近郊で目撃情報があったほか（※8）、新川町3丁目においてもクマ出没の可能性が報告された（※9）。また、士別市川西町では早朝7時10分に足跡が確認され（※10）、歌志内市神威美山町での出没（※11）や、浜頓別町において地元酪農家により道道586号線を横断するヒグマが目撃された事案（※12）など、河川敷や道路を移動経路とした出没が広域で確認されている。</p>
      <h3>東北地域</h3>
      <p>東北地域では秋田県で4件、宮城県で2件、青森県・岩手県・福島県で各1件が記録された。秋田県では前述の秋田市手形周辺における複数事案（※2・3・1）に加え、北秋田市小森岩ノ目でも出没が報告されている（※13）。青森県五戸町切谷内小渡（※14）、岩手県花巻市石鳥谷町中寺林（※15）、福島県白河市の市道（※16）でも出没や目撃が相次いだ。宮城県内においても登米市（※17）および大和町（※18）で記録されており、幹線道路や市街地近接部への進出傾向が継続している。</p>
      <h3>関東地域</h3>
      <p>関東地域では群馬県で2件、山梨県で3件、神奈川県で2件、東京都で1件が記録された。群馬県長野原町では民家の庭に侵入した個体の姿が防犯カメラにより確認されており（※19）、沼田市白沢町平出でも出没があった（※20）。山梨県では上野原市鶴島（※21）、富士吉田市新屋（※22）、大月市梁川町塩瀬（※23）と山間部や居住地に隣接する地域で連続して発生した。また神奈川県松田町では織戸組付近の県道710号での目撃（※24）や寄地区の山中における15時頃の目撃（※25）があり、東京都日の出町大久野でも出没の可能性が報告された（※26）。</p>
      <h3>中部地域</h3>
      <p>中部地域では福井県で4件、岐阜県で2件、長野県・新潟県・愛知県で各1件が報告された。福井県では小浜市の尾崎（※27）および須縄（※28）での出没に加え、若狭町天徳寺で15時頃に成獣1頭・幼獣1頭の親子とみられる目撃があり（※29）、高浜町笠原でも18時30分に成獣1頭・幼獣1頭が目撃された（※30）。岐阜県では揖斐川町春日美束の住宅地で23時から24時にかけての出没（※31）や、恵那市武並町での記録（※32）がある。さらに長野県中野市間山での出没（※33）、新潟県南魚沼市原小路での体長不明の足跡発見（※34）、愛知県設楽町津具泥沢での出没の可能性（※35）が記録されている。</p>
      <h3>関西地域</h3>
      <p>関西地域では京都府が全国最多となる13件を数え、兵庫県で4件、奈良県および和歌山県で各1件が確認された。京都府内では南丹市美山町の内久保（※36）や鶴ケ岡（※37）、綾部市青野町出口（※38）での出没のほか、京都市左京区の広河原杓子屋町（※39）や八瀬野瀬町（※40）といった山間集落・居住地での出没が目立つ。兵庫県では新温泉町多子（※41）、豊岡市加陽（※42）、養父市大屋町樽見（※43）、香美町香住区大野（※44）と北部地域に事案が集中した。このほか、奈良県五條市大日川で13時に確認された事案（※45）、和歌山県海南市九品寺での出没（※46）が記録されている。</p>
      <h3>中国地域</h3>
      <p>中国地域では山口県で5件、島根県で2件、広島県および鳥取県で各1件が記録された。山口県では岩国市での2件の錯誤捕獲（※5・6）に加え、周南市大字大道理での足跡痕跡確認（※47・48）、下関市菊川町大字田部での目撃（※49）が報告されている。島根県大田市長久町土江では市道稲用線付近を午後2時半ごろに体長約1メートルの個体が横断する姿が目撃されたほか（※50・51）、前述の広島市安佐北区での捕獲個体の殺処分（※4）や鳥取県八頭町での果樹食害（※7）など、多様な様相を示している。なお、当日の四国および九州地域における記録は存在しない。</p>
      <h2>リスク評価：季節要因・餌資源・人口圏接近度からの総括</h2>
      <p>2026年10月下旬における出没状況の評価として、秋季におけるクマの行動圏拡大と人口集積地域への接近傾向が強く現れている点が挙げられる。群馬県長野原町における民家庭への侵入（※19）や、岐阜県揖斐川町の住宅地における夜間の出没（※31）、秋田市手形の学校周辺市道への出没（※1）など、人間の生活圏と重複する事案が複数発生している。</p>
      <p>また、鳥取県八頭町で確認された梨の食害（※7）に代表されるように、結実期を迎えた農作物が誘引要因となっていることが確認される。さらに、山口県岩国市において同日に2件の錯誤捕獲が発生していること（※5・6）、福井県若狭町および高浜町で成獣と幼獣の連れ立ちが目撃されていること（※29・30）から、山林近接部や農地周辺での罠の管理および住民の薄暮時・夜間の外出に対する警戒対応が重要であると分析される。</p>

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
          <dd>2026年10月28日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-29</dd>
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
