// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月27日 / mode: daily-report / 生成日: 2026-08-28
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-27-daily-report";
const TITLE = "2026年8月27日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月27日、国内で61件のクマ出没が報告された。人身被害は確認されなかったが、群馬県桐生市の市街地で1頭が捕獲されるなど、都市部での出没が4件発生し、人口密集地域への接近が顕著な一日であった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-28",
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
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
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
      "title": "群馬県 桐生市 / 市街地でクマ1頭捕獲",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5rWHlxVnlqUGh1N3NwZWhub3hxSG9uUmcyOEFRaUQwZHFSb3JsMVdrdEltVElSWlhHcmpfZ3Q0NFFyQXo4WHNDb001SENrcVdLUlptNHBfTEJEM0ppQk5MVVhWUllNUVptelRVWFVOT05QR1U5dWRSSHZieElldjg?oc=5"
    },
    {
      "title": "群馬県 桐生市 / 今月5度目撃のあった場所でクマ捕獲",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1oZGNXU01kRWtHT2dGSVNNeTBnNEVsSlA3Y3BRLV9CMWNmOVJzMEVwaHJjNzBfeTNYRXBud0tiRDlQUldOYzk2UTMzUldORlZuSjhVSlB6cWNIZFJ0N1E?oc=5"
    },
    {
      "title": "福島県 福島市 / 福島市の住宅街にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5sd09Ga1ZHRnpUdkFXWnRYVlk3VXk3dnFWX2xZblJUQjYxR3dMMFFrcnRtUjRwTHRJaVA2R0hFNHk4dzItMVFVSFJFSVk2OGJuOXJ3SjNPY2xkTjNFQndPUUVhbUVRR1E1TUlfSS1fOTAwSXJ4WnVaUlVlaExCaHM?oc=5"
    },
    {
      "title": "山口県 柳井市 / 住宅に親子とみられるクマ3頭が出没",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE11MlhiWjFJWndoNGRLLXFhRHlDd1dPOGg1Q1hHWUZmOEYta2g1MXVFX3FMM1NmbmxNVmtrZ1A3dXhBYjNFZWIybFQ5M2lKczZGeDN2dUQycVJIRUk?oc=5"
    },
    {
      "title": "北海道 別海町 / 中西別でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORlQ4ekZsOWJ2YnRLejJBelpEckJhdHV2bzhXYzl5anpXS2Q1OHZGUE1qdzZiTFltU3dNR2F6YW1SWjNZUWlQY2ZjVXZaQmFIUk5Xc0NRMW10blNOQXpXUlpNMUxicm1wSVNoOU1NTXBQcHo1MWYteURRTTkwQjFaX2U0cThRa2R0YVJWZG5lUUEwT0txdzA0ZUE1SUzSAaIBQVVfeXFMTUh1dXYxeENMT0VSajdCMGh0blRUSHo4QmFsRHBXTDd0LW5TMHhNQTl1MlVUNV9uclZXXzhqTUhHQ1JuTDVaOFdhdmRSd3JscVpleFEtcVdIeXRmbmh0R0VrWnVYaW5TUFlTamMyc1NLS3RrZEF2WVFfdFBRd3RCalREV1gzbmlWWW52VzExQmtsR2IzTFd1TFgyaW4wZ1pVQVJB?oc=5"
    },
    {
      "title": "北海道 別海町 / 別海町西春別でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNMEZmTnctOTdMd09BVkZSNnBUN2RZSmw2Q285VzZMTDd3TmpEN19RQjVicnRUU0NNTVNObG5uYVdnaURFRTd1T3NfRXQwbzhPakR1SEhhLUNja2VDWmhDTE9tLUhxdVNqeTJKdllVWndIWVFPLXFwVkVQVjFCM3RCMnlWcEhUTl8wWDdtcUpoYThsa1Z5bjVpRVl4cDlQUGROMHhNeDhya19fZ0NtSXJmRXpxWGllMzFVOUVraW1sN3lTZEFPUVh5ZXlvaXZPb3hHLUFqeUsyNlZvOUNrV21DaWZZUUVfazQwd2JMZ25kc3NDZ9IBogFBVV95cUxObDdqWkR3UnNhZFJGc0VxckdtN2xDa2JoZE5VbUEzTFBkVjBOdVVHUlUxS3B4X2h2LTJwZFJGOFRLNkwyejZvNG1kbmVYY3FuQkhJaGdZMmp4VEFBWkJja3NFaWtuX2xWNXFWRWVhSkRnaGktQjl0N21Ub3ozay1ZQ1ZBSjV4Sm44Uk85M09uZGx4ZFNQNEZGWll1NE1HbGNUYXc?oc=5"
    },
    {
      "title": "北海道 上士幌町 / 幌加でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNcGxIa2t5anV3SGNmT050aHJfZHJPVjVKNmU2X1Fad2Q1V09iaDItLTdFdUN4YklvLXpBUGxaeGV3bjdHM2FQUDl2N21EUE9pYU9hY01mdXpZSzVYZjZKX2pEY2xXZ25PWVFOWFFvSENXWlh5eDBZOEk0S0paRmFSbV9hVUZYU1ZKVUFpWlZieUtsOEtqV01hOGctQXZCZUZYS2FKN1Y5QXFLY2lVN0Utb29aeFNPMTFxUFFodkI5Y0R3Y1NCeUJYNGdzNUpiZ2tVMFdLWjFtTmsybnRrS0tKdlpnUWFhUDBCOWl4X3Bsa1Ytd9IBogFBVV95cUxOVEtLdmhhVDBOSGhVYmZqUGhjbHJOc2ZsQmxmTFNRRW9zRXNDaHdGYVdnaldsZ1UtS1BxTXgzRTltVWZhemVZZGViSTJmRnpUamhzN1JlUWE2S2gtSXpmbHQyUUF1QjNXdWJYODVJcUtVZENyTFRfLWZSVVRUeUtMLWhvRFpwQ3FHSXp3aTRPZWR2VURrcDdMaVQ5LTZBS0FoQkE?oc=5"
    },
    {
      "title": "青森県 弘前市 / 常盤野湯の沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNRHpwVFdSUzFLM0xnWXFoeU9DMklmR0lDZFJIMWwweEFBVEdYb1RzXzdUeTBTNGE3dDhXamEzbVFXZW9JcVZEcFlMQTNxX3dsanRkNlJIZFhVelVfQm1tR0VmM2pWbWswLXVkRHJnZU83MmdVMGJjcEhiR01Wd1ByZEl6azhUR0JvcUp4S3JKYk5pRDB4NmRQTG9hUUhhS0hzVzhzaEVYbHo3ejJ4T0xtNExCWmVUM1FFc3I2NHU2T3hINzNpT2xYdnpIa3YyREtTVndQSVU2NzQ0R3F2M2lHZXFkNnI0VEtkbGpQVHdKODQtd9IBogFBVV95cUxOeC1pVlQyS0w3UjNtT1dUSDVFNi1lOW1OZkVjT1E1SXhMRXYxeXdKWW9kMWRsdDVQY3ZHSnQ1QkRyLVZ3azU1Z2x5YU5pY0NodkhjaHphSkVGelZVb3lRa1BLSjNtOHU5LWxZZ092bUxySV9LOXJqR2FXbkpVVWYyN25Ec3NNLVRIblluQ1VPaXBtVDQ4X2dYVXJCLVlmdVVaQVE?oc=5"
    },
    {
      "title": "青森県 弘前市内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1ITGFLZzlFWC1UbGZvd1Rsc2xJSmQwRjJvYUVEUXF3YThJYUZQbmJSUl9TNjQ1X3o1TzNiaFZqc182bG5PM3RhTHZVcjJnMTZ6dDN6VUdCbzdWZEh0Z3dDRC1yOEZ2QnY0RldDUlhoZ2FBd1ZYS1ctYzdtRmRrR3M?oc=5"
    },
    {
      "title": "青森県 平川市 / 碇ヶ関でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1ITGFLZzlFWC1UbGZvd1Rsc2xJSmQwRjJvYUVEUXF3YThJYUZQbmJSUl9TNjQ1X3o1TzNiaFZqc182bG5PM3RhTHZVcjJnMTZ6dDN6VUdCbzdWZEh0Z3dDRC1yOEZ2QnY0RldDUlhoZ2FBd1ZYS1ctYzdtRmRrR3M?oc=5"
    },
    {
      "title": "岩手県 宮古市 / 宮古市山口5丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQa2NOZXBGVmdvWFZRV240MzlvMnM0RGJnNDBYMi1IMEYwamtJUlVtRzRVSlV0dnJROXNHRG92b3ZtdGU2NmVFQlBxVzRNdm04c3pQYUhXcTYtdkh2NXBaOFAwLUVITXdnTzY4Tm01NnlzMkNER3JReVFabjkyVWVRZFlGZnQyVV9odFFQb2xwZjAzbnJyMU5ySFNORVZET0hlYzJSNTFXRlR6LTdWaEZB0gGiAUFVX3lxTE5PTWZxcE9Yd09ob1YtTFhPV0tycTJkZFdURjVSX0M5TE5tb0xFV0pBZHdWQ1NOZF9uT2RBTjJfd0VpTjhHYVp5M2NBV3EwTGxxbzd6cFNLcXUyTDVnMVVVclY0OVRTNmhYWlkxeXRpenp4bkxKRWMxVVZaWllLUmRFWlRHRGQ3bFFvMTZtRGJEMDlpLXhCWlp6Z1pkZ1BsQlo5UQ?oc=5"
    },
    {
      "title": "岩手県 宮古市 / 山口でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOM0g5T1BlNEU4bW5zbTBDYXhpODdPRU52REhmaGdCT3I3NmxrRTNkMXlnek1UeTBpbVpXcERfOXdVM1NIQTJqSVdVd1hSZDg1a3BmWERyZnh5TVJ3N3o5R3pka1dYTEkyTjd2Q0hpUWFpMzA0cTVMT19aUTRaWllqaUE2YWpTcGlMSGZlSkF0QkdJMk5fd1AwVVIxYWpmY0o2VmfSAaIBQVVfeXFMTjNIOU9QZTRFOG1uc20wQ2F4aTg3T0VOdkRIZmhnQk9yNzZsa0UzZDF5Z3pNVHkwaW1aV3BEXzl3VTNTSEEyaklXVXdYUmQ4NWtwZlhEcmZ4eU1Sdzd6OUd6ZGtXWExJMk43dkNIaVFhaTMwNHE1TE9fWlE0WlpZamlBNmFqU3BpTEhmZUpBdEJHSTJOX3dQMFVSMWFqZmNKNlZn?oc=5"
    },
    {
      "title": "岩手県 北上市 / 和賀町岩崎新田６地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNWXRLZEI5allZVlZBbWNNQ0xUREthU202a05OVXRqb2tFYjdZMWIzNHhkY3d2R3pWcHhoZU5HRWtzbWNpeHFkVzBfeHZta2pnaU1iVE11X240UnN0QkNNNDRzT2o0VGxNaC1xR1dFT3ZBTUV4V05sTnRmU2RWMkt1b2NFeGhSN3Y0WWhJYkZSQ0M1Ul9udTJqS2QzbEI1bUd4QS1UM1BFRWxudFhfVF9fR2trOVFUY2JtaTRkNm5VaVg3emV5dXJ2bGduVl95ZXZqTVR0U2VDV1VxTDBKVFJaZFBucXRLbVN3OENtT1pEbW4zd9IBogFBVV95cUxPMzJiQ25yX1FZd1lveHVBdGZlcFhSdC14Y1NKYVRteWptZEtuUk54cXA0TGxXcjRpSGQ3N0h2UjN2ZHA0OENqempuWENyQ2c0S1FvamlNQVZfeDlvUjl5dHVKSFUya0M2T3hCLUVjdmVNLTctOGRxMHQwc1NncmdneVpQT2p3Q3NILXhqR3RZQ3UwN3U0bUZGbGdPc1N6R3E2bXc?oc=5"
    },
    {
      "title": "岩手県 奥州市 / 胆沢小山野中でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOY2tXalJWcVJTU29fVDYzTGl0bWtUZjhkSlVLUEh1NzgteXlHYjY5eWFmSVNiWV90WEFNczBfa3ZaenFrQkhSa3NjdkdxNWdYcDB6ekRlZFQxYXZ0R3JFNnoxdkNoNTVyR0ZaN001dUp1emNEbVU5Nmo2NFZ1YkVCYjFOUmxKWmtjNjV6aFFJbUF6U3lUeE1CSkVIN3JFZl9GSDJXZS1WdndzTUtxR01OeXducjk3Y28yWlJrOVE1OFhzUlNTbkE5S2xXMENFUlA4Q01pVDA2aVNIdHljbzBGVUo2OVBHSlIwWFdYdjcyenJKUdIBogFBVV95cUxOWl9ibVM3MnhvaTB5Z3BEblRrei1EdC1QY0p6aGE5cjhZTzNZdlo4V0dyX014SGxzakczNVFqSVc0cHRIalRpUnlLU19vZ01lMUdFd3hEdDlWYVlzT3FOWGoycjlCUEl5OWJsUFV2RVhLdWR0c0V2ZlV6LU42VGlsb3ZGV0RIcTZ3cExxLUxZallnclJTSnF0N1AxcjJSemRXbnc?oc=5"
    },
    {
      "title": "秋田県 秋田市 / 雄和左手子上野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOblEwSnJnR0tXWUk4Skt4T1Y2ZFJUR2xiNVFnTDBxN0p1dmMzbVZ3MnBrdmp2dkxuTF92RmtOb1JPR1JDZWs3UGlnUlJ0VDdOS2VYcWprbnRvcXdscUx4N3ZiSFROdzc0eHFWQTZhZjNwaW9FQTZsT3pzU1JQX05xemJzLURvdUh1ek42THBhWmtKcHkzdnBwQXpQVzFpU2Q4QnhpZDBlVXk3ak02a05ZZEVZbUczcFJTYkZmZTVhMlFCSnY0T2VlMjFpYU1jRjRXLXpPRUk4d2JaYkNOc0hZeHhXcVFRczA3UjZnTWNodnlId9IBogFBVV95cUxOZjFZUXJ0WXlnZDNWOURMY3VvbkM0WmxEYUU4VFdKVGtvTHNZTFZHdzBuRWY3U2N5TEJzS3ZIeWdTQWhPU05RSTdiN2FlYUNBcEd1ZXBQMXVuekFERHdiSjEyV0s4bHJoUTNSWFIwYVo3dzFvOFNOV29Oako5WlgwTUdXN296Tm9pV2ZVTzI2LWhHMEl4S3dJS09wV1czXzBWcUE?oc=5"
    },
    {
      "title": "秋田県 由利本荘市 / 東由利田代走出でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOa3Npd0N6RFF2eGlTRWRwQW03OGZoT19aVDdVNHl6Sk9kTGFLTkpfME9QejROVlVBM1ZFdUFrMkVxNVF6dVRDd3lrYWw2aTQwN1plVGVaTTJheWktUFZsdmh6dnBROUp0TTZmQnNxcWlwazBEUld1Sk1janpMc3hMbHJUSzkyVmpHQzhyRmlaSDBIQTdTRENKQzRwbWp6YzFENFVGa3pOU1QyNjNUc1AyWk9QT1lxczJVWnUzdjFHV2tIbndUWUVhbmZuWEJqQW5CRGtXc3luMklINFlGNm9TaU1GMGdVWnlZNXVhbUlkNElsd9IBogFBVV95cUxNNnRDV0F1ZnV6bFRPWGZNcVVJOWZrRWJIQ0VJcWY5NWNDU2szaS1CTkpOZVd6czdSUzVybFdpOHp6T1kwaGhFNkhDelFOelg0VlFzODY5Q24wa2ZxSGVxdDVuWXdQN3hERkJfZlhMcUlpWjBJaHJaQTR0dTIzNWxGNHZ4elRCZDdYYzNacDl6X2lJMWxud1c4bm1KRkE5QmpFY0E?oc=5"
    },
    {
      "title": "福島県 会津美里町 / 会津美里町の河川敷でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFByOXZHT1BkTG9SSW5XcnZwTGdndndJN0lSTXlHTlZZZUw1dDJ0ZlZPNUhVMUdwb0ttVU5icWI4OFFMUDlIWU54OHZTd1htNkloemxVZjNadGtVWUtmektXWTZodkdCTDBnTW02ZHQ5RE1tRXdXSkIzcF9yQW1GcHc?oc=5"
    },
    {
      "title": "群馬県 高山村 / 尻高でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOY25WeTdjZDdfemtMRXpONC10MnE3ZGFZUWlhd2JLU1U1UTJINFFwQzJCNWFpVkp2UWhubmdpUjVaVkZMVV9DdjlTNkZFd2VvTzViT21pUHdUTjA3Rm5pdHNxYjFWQWtTWE13NGUtbF8xeTcycjdiWDNlamcxS0FPck5TeU15clFiWkFla2RtUWozNDFoSDRjRTNBNE8xNlAtUEdWcU5KdlBVdDA0TGJVRTFxUEFYZWtIX0JKUFJWS1lzTVk0NkV6YnoxVDRpWlFEMFFabmI3R05oQ0hja0lSTUM2b0gzNWFxLVVEMDhUZWFiZ9IBogFBVV95cUxOeTlXa1VVS3JzQXAtMUZWWW15TWRXZkh4U3g2ZVJMSXk0RC05T2thbGJMMEFzUGFPaUlNUHFkb01tTHZWZG80bUdYcXNLZk1QYXhpaVZGWVVJbzctWm1abmo2YXpDYTduYk9pU0pUWko3SjZYM3BMbjYwUXBBVVoyeVFudThkcWtFX1N6d1NDZVVwZVRNNjhpX0dCWktzLXRCbmc?oc=5"
    },
    {
      "title": "群馬県 安中市 / 安中市松井田町新堀でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNTm1zNWxmWEhzd0x0aGtRNktLZmFNRW5HX2U1NnYxdHZqWTAzZ2Y0Q29JSFBzQW5tWEtMTmFEY0J4YkdDdHhMa0tQSHZXdWYtSHhrVHVSeTVQTUJ2elpYeHJLSWpKOEhDbFY2M05HZTlqWUtERDczZy1KLXdFODBfMHZhZUlYeGdTUmJrb3RtbGpOMHRUR2dmMzlMQmxzYzRCa2k5cDl0eEdYc2xRYmRzZ2p3YWJualFtRjVOWkdVeDl5ODNSemdqbTNhcHdhTS1yaE0taVFuX1dwT0JzR2Q3bnZMSVpTN2V6Qzc2aDAtTmRZUdIBogFBVV95cUxOSmdtXzVUSm5QeHVDcy1lYWtyemMweHpQV2VPSnNQNWtPbDZ0a1dvTFZMWmV2NmZzS1REVnVaZmY2MTJsWG0yUlgyMDJJSHJIbU1EU255QkJaRHY2X2Q2QmJWVXJtU2RNREk1WFpSUTV1dXRxSVRqamQzRzZ2VjR6ZGFBSnlDYjRTcEIxRlBnWUtwNTM1MTlvaVRKeXZybndsb1E?oc=5"
    },
    {
      "title": "埼玉県 飯能市 / 阿須でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOYWVLNy1HUHpod1lpZHFqV0VmMEl0QTlZMkRfWnZPcEhCeGpmUG5zR01VOXVMRWw1MVdGYmxieXhXTjNyREIycXZURUhXTlVhWEFKMFBHTzl3eUVQOEgzM1c5blptSzRITXA3TnRySXJRYVQwQV9EWlhIU1JGNXBFNkZmcXE0RnJJRGdQWDJEbS15Y083TXN2VHhxVWRXNzNXamE2VW5LQzNBd3FQUktr0gGiAUFVX3lxTE01TVpMQUFyYmVFeW5HTEU3SVc4TDk1MlN0NGFwRjFjSEZLZjZEdHkyYzlTckl4amJycndKam5NeHpEWnZvSXNrUkhTUUxFUW5WWUxMbm11bllkV2V1Y0ZLNGxlNWtKaHRzNWZ5MlphTFFMeFJXcjNNTG1LVGtlcXVkaXZMenZLTWh2bFh4X2FQRXRVMXp2U3oyZE85bW1jX1VZUQ?oc=5"
    },
    {
      "title": "長野県 長野市 / 長野市川合新田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdXJLTmVGWlBvdmFSM0hoY3J3eVZiLUVhOFg3Q25BS1A4WHB6S1NFbmV3UVlfZElzMnJ6LUg3WlJRaWNGaEhDcE9ET2lBMkFZNDYwVEZYc0dZaE1PMWx1WnVDbllES2tacXU3S0VmSjRLRlljRjdnd3J3Z1FqQUJmeG5fazEzYmhjbXFiTl95MWpOejB4SlpEcHQtaHjSAaIBQVVfeXFMUFZzdzdPdTJLdXNXc2V3aEhvTGlONU9McmZQQ1ZRdXF4ZHJScXF6U1RVcEM4Q09mTjFUdktKUVRNV2tNcUI3YkVkalh5ZUY4X1o2OGRTaVZUNF9kZ0l2RW5YLTcybGZ5ZV9mV2hidEVmaHEzbFNCV2J2MU4wSkRiaVV4YU9Ia2RBQW1zNUp4ajJDNkhRdkk5MWhlb29rM0c3Ukxn?oc=5"
    },
    {
      "title": "長野県 千曲市 / 千曲市森でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQd0RvMnhuVklJMG1ZaUZMYUxDaGZSbi1BMGVBbnZYRC1RaEduOUhFSW9jWnV5Q29yVGFMU0NHYXpWUlhwdzM2bEQxR1FBbU9xWk1sUF9DRzZ3aHdKd1NLakhDYUV2RmhkTEQ4cFo2cXZtRjdvRjhzdkNnYzY4VXJMQ3E0SFZmcDFjSW15UVBYcTFhbXhUZGVkbmZvUmszektMOUkxLWM0OHRKSWlJUXJoX3lHd2NyRmZSemVWMUhxZ2kwZGxiWndDa01JVUVlak1HZ2FKSHFWYWVKdnRySFdnTlNsb255SkZ2aFU0N2FtR3A1d9IBogFBVV95cUxOZUF1UG5pMk5PbWRlR2VlSUdMaFh3QUVtRUVMcmEzWnZNc0ozVXdYSFQyZ1k1SXRpZ2stbm92SU9qbmxEVFotY2pJdmZIRE1LUXBuTmlsQ1p2RWpUN3RDSXNfZnRyWGxEZU5qSEt6RHFpc1lnc29sYl9kMFJzS0IyMkZyY1dzcFZHcm5zNHJ5Mkd5bE5ZVTVhZUxGY1hpZUNmZmc?oc=5"
    },
    {
      "title": "長野県 富士見町 / 富士見町富士見でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOd25mNE45SUZGSGpTTkF2Z2VaTHA1YXRfVlptRFByTWJWRnRBN3BKblRJU0NucV8zTjlGMUFZQUNSYW5nZFBVUDJJclhQNUpzZWxNU3dPUkZ3b2pTZ1cyMDhUZW16X2xTcHJ0TG5NLXJiMERERDJ3VkwtMHpiTDdCbkZ0NmRGQjY4R2pOMUdYT1BPMVFYWnBFdVUyelg3NWE5TmdocmxXZHRKeVBFbTRvUF90YnAzRHhhMlJaYTdfUVlfQTVnVTdRdkFuYlZGa2I3N0J5YmJVazhOU3FEVzJ5SC1USzVJemUyQ1FNUWhQMUk1UdIBogFBVV95cUxPOXp1U09laF9YLXhIajIyRlNoYkc3OGhVanQwcTBLcDdsVndqQzdQa0E4a1Etem5OQW5QalpQOWVsU2lIU1hnNmhiVWM0UzlYYlpfeFhHMXRNek1PNlR5bnpaZTYzUDZza0VXZk1DNnQxaUpuam9zZ0lVSTVGQ1h6LVhEaDZURlBtOFFkaHJHbjRNZzl0cndkdXBwWHZ2ZTNJZWc?oc=5"
    },
    {
      "title": "山梨県 上野原市 / クマ3頭の目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE91WG41TW5TbXBnRUJmRmhfSk1odjMwLVhzVkRrWGFBbkpPWVVrczZFTDk0b2s3dFNEaEpvbXNBYVlKTDVja3c0eHVnQUdpdTk0OGw3dEZwZGNXSjNKMkQ2cDM5SDY?oc=5"
    },
    {
      "title": "静岡県 富士宮市 / 富士宮市山宮でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPT2lqQlRsWEdqdEFxZS04RFNMUTJ6eDgtRVdyOHdja213OUNudDBBZExnRkNZVU5pY2w0OEJnU2Flb00xUzF0VXp1X2hPaG1oRVY0T0RkOHlvQVVoOVhOSlRuZWtRMjFOVXB4cnlZRnB0Um1GU050ajltMzlFR0VzRGdMVE95Vjg5c1hQT0pja0JHN3lhNjlGT240NG5kcWluelhuSDhpSGNabExyV1F4cGxzbVJnYm91U0JZdlBIYm15OVFVbzRad0NrX2EtelhHNG5neGNrQzJzaVpFMVIxMloyZXdnTmFCWExRd0hzeV85d9IBogFBVV95cUxQRnZtckZwRDROMUdCYkkza3RSSXdkWXEyNTBqOVFtNGh1M250UTRxM2d4VzZwX2NubUtpQTY5MF9HNjBHaUdjZWhGZkhoSFJFNFR0b2Z6VmNES0lBVm1Zd3ozUGg1UTBOWTIyS0hnS1ZtTXBjMVdka3h1QTBldmNxRnNIVkxHOS1YblRzMjE4Y1lJZWFWOWpSUEt6U0dQdmF6WVE?oc=5"
    },
    {
      "title": "岐阜県 高山市 / 高山市高根町中洞でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPcFRqR0J1ekZCMktrUWxvQ0hoZ1ZBWVlUeHFLUlpCck9MNkZWbERJY1c3b0JaZG8wTEs1RGZ1em85THdSckZqeEhlVE50NVhVLWM2TGpyUHc2SUVrcHMzUkM1ZWpYSGotNEpmTmppWExzN0VxZl9TbEx2dU1YMXRWNW9KNm9vUl9Gdk56S1NUc2pYNDZOUmV2cURUUDhlSUNldWVSYzBzdU5kT0NtSU9tMnNNeW5UTWszUlFySVZ2d3pyZUQ2Y2xCR0dEWmpWd0dfRldPUC0yNjBtaUt3VXZEdllVa2ZWdU1ZRU81cm5IYVI0d9IBogFBVV95cUxON0FpeFNnZUZ6dkhQRnB3RHlxMDlqcEpnZjFnRi1GU1BJUHFwdWJfOEx3REpyNUZCUWRsRTJNSDlXOWloazJxVkRoQ3FuZU5ONHFXT3o3dEdMSlZ2anB0TUppdWlsQ3dWWU5NdS1tdWpHUV8zSjgwUXJDUktzZzA4SzdJMTdIWmZwSFJTTkFqMkhRWW1JYnlsTEYtRTVxc1JON1E?oc=5"
    },
    {
      "title": "京都府 福知山市 / 三和町岼でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcGJWZWdFY3JfbzZ3ZlZxYzNfVzIxMnpDa3NBVEJUTkcxOXpSSEttWk0wTDdhWFFaM2tCNk1MMlNlZEU2NjYyb1BJcnFNZWZZLWVCRWhvMFZ6YlBnY0N5dTRDMnFPQlk5aW1lZ1E3RWNVdHZJR0NndUE4WFh2UjBjVWFBX2xBN1Zqamh6bW1kQVloWkZhU0NRZENDTkXSAaIBQVVfeXFMV9FeFJaYTlSNUJjdWx1MFYxek1iSHFZOFlXbUZVODQxbmdBZ1diMnpIckliOW9kXzdRRkQwYWk2RnNETjg2dHJ5anNod1ZfNHo3emdXNDhZOGJhNlBnRE5CRzk1bklfQkJwekFJa0hBeEtsUm56TkY1MjJhTkRUbjJtNlRBaG44cE1BMlRTejhZV2tpYmpIb0xvRENtX1Z1NElR?oc=5"
    },
    {
      "title": "京都府 亀岡市 / 亀岡市本梅町西加舎でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOU1psbUVPOGtWSXJ6dU01bERnbXdGX0dBS201MEV1UHI0alJCMFVLZVQzTXozSEhHOHlQRzVGUnpPcXNfUnRTUE9iNzNzdnlsLUtET1d3VGVkZzJTcWFzZ2NVZXZfcE1iVGwzV1lsNjBOdS0ybHhuX1c5aGI5WTBTbE5uYjZHaHYxR1psZ1VVTG0yM2xMX3huaXA0NHk4ZHlBbnfSAaIBQVVfeXFMTlNabG1FTzhrVklyenVNNWxEZ213Rl9HQUttNTBFdVByNGpSQjBVS2VUM016M0hIRzh5UEc1RlJ6T3FzX1J0U1BPYjczc3Z5bC1LRE9Xd1RlZGcyU3Fhc2djVWV2X3BNYlRsM1dZbDYwTnUtMmx4bl9XOWhiOVkwU2xObmI2R2h2MUdabGdVVUxtMjNsTF94bmlwNDR5OGR5QW53?oc=5"
    },
    {
      "title": "京都府 南丹市 / 南丹市日吉町中でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNa1A2dXVKeS1QbHBxYWFsTVotUkt2MGlacUc0MkhBdWpqY0FBQXV5RnZtWl9xcEFiOFRtY3lTeEFjN1F5bDZWaHh5ZUVGOUxfTlpTNzJ2RENxR1hIR1M2cUE0czF0RHJpRkhPci02SlByZ3FjbXc1cm5UWlhLS1RUNVVuaVBlUFZMek9fQWVKNUJrVkhXcUpWMWdmZTLSAaIBQVVfeXFMUE9wdVNnY0U2MWN2N292WGN6SGU5TmxRQl8yRVB0cWVzcXNkNXJROTJmWklUU29leWFCZGoyR2hwVTlONTlDdm9FeC1FYy1MT3NUbDFSQVR3YUdkSVhtTFdZVE5QOERzNjdOMld0ZUxDTElxYTU1OGdId2NSZnRnS0pIMDQ1ZjdJQUQ2aTFNdXRER2huTzl2bnRMakF5bEJ3Z2pR?oc=5"
    },
    {
      "title": "島根県 益田市 / 喜阿弥町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOUElCNFgwV3Ftb1c5Qml0OVB0aTJYcUhUNXk4LVRLcGMzWkczc3NEUWxOeUVuLWdRTVVibG45aGtFckJYWV80OHVrOUZEVkxyWF9nU1RrTnJfaHpwSEVDY3ZFWHFmcXUzRFdCSmpKZDc4dkVxLTBDM19OOUVaZU1DbDhLX002UFg4ZVJ3QlA2d1pvMTJFWWVScWdkalB6ZVFyQ3pKdlNnMlhrX0pSWXBOSDFJSGcwQlhOdFJNcDl1dXhGNy1PbTVPdUN0VlRpd1h3ZjdQQzZCeDBNcVRfeTlrOWdwb1l4d0RRNlJhWEkycXV3QdIBogFBVV95cUxQUzg1bnFOSWgzSnNtX1R3dHZFcEoyeUVRWE9KdTV3NjBWdUo0Z0hreUR6Ri02M1l2SDB2NHNjUjlMTWctRlhlWlFRSmZnbEV3bkRuMmdOblRhc1NtWW5ieW5FcVl5T1pDdVFyNER4ME54alBkNmgzUUdfdC1mWEI0M0hoZ29rX051SVc0dHZ2OE03YnlMNXhCLWtXVVFDTWdTVHc?oc=5"
    },
    {
      "title": "島根県 雲南市 / 雲南市大東町篠淵でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYndJUnZlaXlfdjN4Rzl6cHFHSFQ1OUYzVDJyLS1SWWlOY2dsY2dMQVZXWXdkSml6amZFYTFWZ0l0SDNYczRwMWd5ZEV6UjhyYUN2bm9NcHJwemhpWjZqWEJHcmVYclVoV0hYa2lBc015bHpsZGhzSWhCZmlyUHFETktzYllzT3FVZG94YmFLUlRvRi1PbFVGLUR5VWRCSERDR2I1OElLUERMN2lsbFAtX1RzZ1pZWUY2ZjBONDJYcHdkRHVYSmJFSDBNWmR2Nlh6VE9EMFZQSTZlVTFuVUVjVWNIRVR2Q3RaZXoyZ3drWDlnd9IBogFBVV95cUxOOWxzR1lmX1ZYMGRfTXc1VFJnc3VVWnBYQzhoME5PNG1DNER3SDFUYWlWdHBEaWV4Nzc1bkpWSjNoLWlCM3N1VWRrd2tPLTFtNHNjV0d5VXYyNXI4RDJjWS1vWlBObGZpTXgtc0FqVVhFeFZ1OTRyRVhkS0dIVUJQdFlFa1VLRC1VY0cyQWtQazdhRmJjOGpueDlQbTFLS2pwUGc?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":11},{"pref":"島根県","count":9},{"pref":"北海道","count":7},{"pref":"群馬県","count":6},{"pref":"京都府","count":5},{"pref":"長野県","count":5},{"pref":"岩手県","count":4},{"pref":"秋田県","count":3},{"pref":"福島県","count":3},{"pref":"山梨県","count":2},{"pref":"福井県","count":1},{"pref":"埼玉県","count":1},{"pref":"静岡県","count":1},{"pref":"兵庫県","count":1},{"pref":"岐阜県","count":1},{"pref":"山口県","count":1}];

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
        <span>対象期間: 2026年8月27日</span>
        <span>·</span>
        <span>公開: 2026-08-28</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={61}
        periodLabel={"2026年8月27日"}
      />

      <p>2026年8月27日、KumaWatchが収集したデータによると、国内のクマ出没事案は総計61件に上った。都道府県別では青森県の11件が最多で、島根県（9件）、北海道（7件）が続く。人身被害に関するキーワードを含む報告は0件であったが、都市部での目撃が4件、捕獲・銃猟関連が2件確認されており、人間とクマの生活圏が近接している状況がうかがえる。</p>
      <h2>主要事案：都市部への出没と捕獲対応</h2>
      <p>当日は特に人口密集地での出没が注目される。群馬県桐生市の市街地ではクマ1頭が捕獲された（※1）。この場所では同月に入り5件の目撃情報が寄せられており、個体が定着、あるいは繰り返し出現していた可能性が示唆される（※2）。また、福島県福島市の住宅街（※3）や山口県柳井市の住宅付近でも出没が報告された（※4）。特に柳井市の事案では親子とみられる3頭が目撃されており、繁殖個体群が人里近くに存在していることを示している。これらの都市部・住宅街での出没は、住民への直接的なリスクが高まる事案であり、迅速な情報伝達と警戒態勢が求められる。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では7件の出没が確認された。別海町の中西別（※5）や西春別（※6）、上士幌町の幌加（※7）などで目撃されている。また、知内町では子実コーンの食害が、今金町では詳細不明ながら被害が報告されており、農作物への影響が出始めている。夏の終わりから秋にかけての餌不足が、農地への侵入を誘発している可能性がある。</p>
      <h3>東北地方</h3>
      <p>東北地方は全国で最も出没件数が多く、合計21件（青森11件、岩手4件、秋田3件、福島3件）に達した。青森県では弘前市（※8, ※9）や平川市（※10）で目撃が相次ぎ、活動の活発化が顕著である。岩手県では宮古市（※11, ※12）や北上市（※13）、奥州市（※14）など広範囲で、秋田県では秋田市（※15）や由利本荘市（※16）などで確認された。福島県では前述の福島市住宅街の事案に加え、会津美里町の河川敷でも目撃情報があった（※17）。地域全体でクマの活動レベルが高い状態が続いている。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県（6件）と埼玉県（1件）で報告があった。群馬県では桐生市での捕獲事案（※1）のほか、高山村（※18）や安中市（※19）でも出没が確認されている。埼玉県飯能市では出没の可能性が報告された（※20）。都市近郊の山間部を中心に、引き続き警戒が必要である。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県（5件）、山梨県（2件）、静岡県（1件）、岐阜県（1件）、福井県（1件）で出没が確認された。長野県では長野市（※21）、千曲市（※22）、富士見町（※23）など県内各所で目撃されている。山梨県上野原市では親子とみられる3頭のクマが目撃された（※24）。静岡県富士宮市（※25）、岐阜県高山市（※26）、福井県敦賀市でも出没しており、広域での注意喚起が重要となる。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府で5件の出没があった。福知山市（※27）や亀岡市（※28）、南丹市（※29）など、北部の山間地域が中心である。中国地方では島根県で9件と多数の報告が寄せられた。益田市（※30）や雲南市（※31）で複数の目撃があり、地域的な集中が見られる。山口県柳井市では住宅近くで3頭が出没する事案（※4）も発生した。これらの地域では、従来クマの生息域とされてきた山林から人里への行動圏拡大がうかがえる。</p>
      <h2>リスク評価</h2>
      <p>8月下旬は、クマが冬眠に備えて栄養を蓄える「大量採食期（ハイパーファギア）」にあたり、行動が極めて活発化する時期である。本データからは、自然界の餌資源の状況を直接読み取ることは困難だが、北海道でのトウモロコシ食害の報告は、農作物が誘引物となっている実態を示す一例である。全国で61件という高い出没件数、そして市街地や住宅街への4件の侵入事案は、クマが餌を求めて人里へ接近するリスクが極めて高まっていることを物語る。特に、一度出没した場所に繰り返し現れる傾向（桐生市の事案）や、親子連れでの出没（柳井市、上野原市の事案）は、次世代のクマも人里周辺を行動圏として学習する可能性を示唆し、中長期的なリスク増加要因となりうる。人身被害は報告されなかったものの、遭遇の可能性は依然として高く、厳重な警戒と対策が不可欠な状況である。</p>

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
          <dd>2026年8月27日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-28</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-28</dd>
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
