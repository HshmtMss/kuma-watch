// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月29日 / mode: daily-report / 生成日: 2026-08-30
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-29-daily-report";
const TITLE = "2026年8月29日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月29日、国内で33件のクマ出没が報告され、特に東北地方で活動が活発化した。岩手県雫石町では河川敷で50代男性が襲われる人身被害が1件発生し、秋季の食料探索行動に伴うリスクの高まりが示唆される。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-30",
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
  datePublished: "2026-08-30",
  dateModified: "2026-08-30",
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
      "title": "岩手県雫石町の河川敷で50代男性が襲われ指骨折",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFA5UjY5dm55VFZobU1XbFpqZjlxSk1NZWNnVHF0LU9WbEtPT3pkT3d2UGtIMVprSWpCd2xUTEQ5T0NFSmpZekpBU3ZKdlpJOHp0QU45YUdKeE82WWw0Xy1YTHB6bHk1RDRnM1ptNFBn?oc=5"
    },
    {
      "title": "青森県七戸町舘野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNWmZ0N2lPVUwzM1lCbzBCWGI2MWg0TDdBVTdTSnVLOUtHeWV0bVNpRmpXWWxvN2k3NkVOdnAzNkVHb3Q5UFlTVW8yNFJUY3ZHem5QcWl0b0Uweml6Z2FRQUdZZlFja0VuM2ZxSk50aEZjZkhFWUlFT1VhSl8yVnZWenRVTmUxLWJTOHo5RXdMbzVuVC1JTG9KM3ZZWTVqSUVMOUU4LWo4UFZGNjdqSGZJ0gGiAUFVX3lxTFBNTmRIeGNYU1pqRFdacEEzUk4tTzZ1V0NNX05QQmNLSnRVdklGbGw0ZTRfLTBDTGRzVGVfYUpHMF9XbXZwdkRyWVBnR0hlREYwSTRtUndUY2kyWXI3OWVOOTVHVnpWTWZBR3FXSW96Nmk4Z21zanAyZVRGeGRTTzRmQXNCMXF6UkwyLTM4OUNKVW5zWExXOVhyZzUxZ1FjYllXdw?oc=5"
    },
    {
      "title": "青森県つがる市木造越水でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeEljLUxxUXZncjFfLVhweE05VS1hOGJad0xFdHI4Sy1PdTlQT2piM3ZRQTM1UWZkeVhnVlF0SFJtVEtNc2swTXI5WndJd3o4WUFDMHdJZ2xKdXI4NnUyMnhSM0w4R3dQQ0JuTmxadWxoUTNodTV4dWVxX3dFYk1KY2ZvZTNXVmdDMEtBZGJJbHd6d2FBWnh3cUFQNEHSAaIBQVVfeXFMTktfZF9vM2Y3dkkzZUNnVWlocTJDSnhhZ2otaTlQenVteXY4Q3RUWHA5UlBXUG4ybDdFbTJJR1FhZlB6dXd1UFMzVm51QjNnNDgwTldqYVZuOUZ5UWJIc3JRamRiemlrSUJCNGkyTVdJNG91ZnFSWEpPZGNiZEV4N0NhMldTd0pfNENLY3Y3SWVkTnhmMVBmOEJmQ2xsVXBVd1RB?oc=5"
    },
    {
      "title": "青森県むつ市川内町福浦山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWEZCOHhFNngzcm5OYTczSS1SM2xUTDNzRVNvbGppb09rXzNjaGVsYjFKV1JwNURNMHlVTzVVcXN5THpNU0JnVkhSQS0tQUU0OTdITHJwV2tqUWdORTFtVklUbThLSzVVNUFMZUozNi1WX045SzhOVHZGX0tOZEpPR09xam5QT0ZZMkFEbXQ1bWs4T0ZMS01zbjEtVk_SAaIBQVVfeXFMTlluMzVVOUM0QmRrMWdjT2lMbW9RRXV4cExINjAxYWdHSHk0akQ0Sy0tZnNZQTViMHpHOWhUbTZOWlYtTEw5MXhjbnBfUXhwS3J2c1ZBckNtX3pKNkQzeWhwYTVLdlBrRE05X05lTG5sU0tHWkYweDZRS0xFbnVwQlowa2pEUzZNNWlIdVMtTWZGRTMzc0ZIZnNvM3BkdXc1dUlR?oc=5"
    },
    {
      "title": "福井県小浜市相生東相生でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNnk5bHBXaTRtc2NUbEdZWGVUbGttQ1NQVUpiQVo3WlQtVlY1T1kzUGI3cU9HZmpPRDlCX25kZlRwVHNEbm53NGNJcENENTNidjVid3o1aVhfc1FjUXVvVXh3dmdlV0w5aVVmXzVkVkQ0LUxhQ05UdUkxNlBYNmZxQVdUaTBRYXpaeXVCdS1RSnNBYnlvQ3dqMzJIMVTSAaIBQVVfeXFMTlFwWEpDTENUaUVDQ3dWdnlUNlJrVHZGWXcwVC10Nl9CWWZDT2pDb2dmajlLS3BiYVNvbEVWSUc2dFBFWWR0UE1jM0ZrRmdBM1VCVTUtZUFJdFlGUXRkTE5wZGY1VUZITzhJbUp3SEdOYzVqbm1sa1ZNdGRPQW0xcDVLbWZrcVZEZWZmOENJZng5NHdCZ1hQYlNBZm96NmdpVHJB?oc=5"
    },
    {
      "title": "秋田県秋田市寺内の民家にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBsS1BFNy1DVmJvV1B0cjFGWXVyTlFhQXdzV19OV3FZZ1VQUXdnQUlwTWZnZ0d4RHhCTzl6aWU0OFFSaldqUkRISDZMd1pINnlXSHBlY0JvZ2dqcUZBRGZsYTBB?oc=5"
    },
    {
      "title": "秋田県秋田市寺内大小路でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNaE9GS3VrWWFlbVhlZGNBeXpxeXR6ZnpSZGphcHY3Zlh4cTd6TnB4Rm1xRmpxOUNYRDhRNHc4OXVkaDBUNlhWbzRBZGlHenBMYUN1TXhpMkxuUHJiTkhfdUpLTWQtZFBUaDRlOFBWWXVJN3VlenhYckMwbU4yeVgzTWdMUm0yYVhfOEIxcHFjR1VYV3hTTW5GNVJKY0FOdUw3NmIwM2gzRmExdUo5S0FVb1gySHhINHB5cFAyWUt0MVRYTkVOZk1hUmVSdlVlb2ItbjdMZ3h6a1NnakhOZWRhVXc1VEpzcVFYc1NDVmNETW1tZ9IBogFBVV95cUxQU2pZQW01NXE0OGVqUzVfUHZzRGhHYjR5LVd3Ni1ubTFpUG92eWVrTVQ5bHBma0ZweTgza1FFSENKZ1hhcm5fM1RzM3ZtNnR6Ykt2bHN6UGxIaklFbG1BeWxOLVVMZkpiOVJqQ3QwLXBaV0dpNERFa1VqSl9UNnR4ZG1mZk8yc1FTRnhNNVUtX3dKU21rVG1sQ1BiU0VJendWX3c?oc=5"
    },
    {
      "title": "秋田県秋田市河辺和田北条ケ崎でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOalhYWVEzVlRmbTEwblU3ZHZ2SzJpbHJFR0s3VEVsdlRPYTljYWpwZS1NbFlzSTF4dENoQmZrdU5YWjBwNWJzOFEwOS1TU291WnRKckNZMTd2QnVmdS1BTGltTVIzYXZ0ZV9ySjFrTTlGZ09BSEZucmpXM2p2WGxna3JEQTBHSmE3MVZtdnM5TkJ3TU9sSnNjYVJVel_SAaIBQVVfeXFMTmNLeTQxOUs0dFg0Umd2LU5tYUc4eFMwYTc0WWNydGFwTDBUNDZla18wWi1Fa0wwNFRMcm5raWc5S1NHYkpnaWtSRHRzYUtQa19lNUNYMmhySmU5TTNQWUVYaVUzdTQtMy01RXVYdTREMzZNbmVvbjVrLTFmMTVldS0tckhaM2U0VDlZVWhzYzVDdUpkODR6Q1d5UzhJRXlXN2Nn?oc=5"
    },
    {
      "title": "山形県山形市高沢でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5EYktzb2hnOXQ2WE1PSGJJejRsa3dMQnMxUWxheWRFQ1FwQUh0MEYtUmN6Tmt5VkZRUGhwYjNOQnQyRmVtbUxrVTdFRnJPb0QxUTRyZWVXQmxwRGNBaWFQV3FwQ2ZRVDdrbVl5RGp4TQ?oc=5"
    },
    {
      "title": "山形県東根市温泉町3丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQVgwbW1UcTQzbzNUTlU2eVhiZk5pdi15QnVBRzVIQkJWSHZKS1FUelE2VmwzM19VaVJvOFlxVWJ4UDQ5R1lnbVNvcTZ0Tkx1YWdXVEFJa240QUNoUHVlV1cxa0VXZlFSdl9jbi1CN2F1LUxrb3BNQjd6UE5hV2ZvOXlIMXdROExyUVpDUTZleVBFYndMLUh6UnRWaGvSAaIBQVVfeXFMT3d4Y0xiR2RibmxIQ1F2Y2RFb2l6alRUOUtrbnVxenM5NnJGMWhBUEFBdHo5WGVGSHNaemNSM2ZYQ09veER4UzJBYVA3VlpuM0dRbTVPN3hVQzdxOU0tdE9ieGwtenVfUmZXTTlkN2JBbnhmUURodkgxSFZpLXFnOWVKaFFTMHJXWTVNUVM1azNpY1ZPeHRxV2V0MDVhSFhWcHVR?oc=5"
    },
    {
      "title": "北海道森町で米ぬかの袋が食い破られる被害",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQQlFSeGNBV2tKMlU4YjdWQmVJa2tpUVBzTExobFhWeFJ5MHJzdmJkTHNIX2VtemotUC1BRkV3WWtTejZrM1ZhbHhyY0Z1bmxhb2hScjJkNG5hbGNreVU2aUdPUzI2UEtlaUlCZXdFX29sNjFMZldzNC10Y1BtX0V1ZkZMNE0wb0U?oc=5"
    },
    {
      "title": "北海道留寿都村豊岡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdUJoazdSc3hyNlNSTTVKOUsxcGIyOThRZXRmbnpTWUhDSlplN0xTdzhLRl9DS3FZU01RdmNrcl9OekxMdnYtTUJIc0oydzhyejFtUWNld0ZUSzZuVldTajhsdUtvdG1kMjl6X1JSbDRqeXN6VUlCeVZZX2ZlcUlpSVdvVm54di1xdVpQWkVJUzVFWmdYNlh3dWdzaUPSAaIBQVVfeXFMTW1kc2hmSC1kVy1OdzkzSXJyVWVSelh3cXMwaVVXOE9SZUczMF9hTXgxdk5SSXNBdU5NWm9ZUnBJSy1JTU1zd3pTNndCZkdiTTZPa0FCSk04NUlXS0V5Y2s5ckhGdUJyN2xnLXc4MElMdmd0QnhTdklobGRwZnV3OXhVRnhEMW1Gb3FxZm1jWUR6TmpTYjhIOXotLUtCV0VJRlpR?oc=5"
    },
    {
      "title": "北海道弟子屈町屈斜路でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbGFiQXp2ZEFkOEZFRWQxaFhnQmh6ZmNuMkZxQzdLbHFlUjgwRHpkRkpUMWhveVNRV3BVczFrcEFsdUVpUTFzMFg1WFRPUE95SmN2cXZ4SGNOYmpaT3Z5R1E3T29kMUNYckFIRnhOdi1rWF96NzljMjlQMzEza0xRY2NRS3BoemcxTVFXU3pUZnVBWDZnLU9FLTFGTlDSAaIBQVVfeXFMT3VlMTR4UFZJbEtPak9tV3pGY2tnMlpDT29aaVhQMEJFaVZ1Y19sZThVYXp2YkQwSE5yU0xWWVhleWJKRDh3OHNVeC0wQVNOTFN5UVhzWFJSVXpkbFVPckZYSmxPVDNuZFhVMS1sM1RpVlZaNUxaZjBhRElfb1o4ZEE0RkpkLWJEbkhLQmpJWXd2ZG5ybVc5dEpRenljM2NRQXl3?oc=5"
    },
    {
      "title": "北海道当麻町北星３区でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNC1FWWs5QTh6SEVaYW5mVThOQkdWLUFaV0xMSk9Jc18zRHJXUTNJYWNuY3pzRENXbzc0YV9kdE0zc2dUV2dPWjlmd3RKZkNRak5EWTQwMEcyZmVUMlQySm44dkdINm5WMldUSXhWQVR4Z01WSW1GcTk4LVBXSkV6TFB2R0c3RVhWRnZWUDRzQXNjaVRFZzR0Snh6ZkvSAaIBQVVfeXFMUENqOTd2eGlXbG5jQlAtVllIUG5vazJWZmZrMi1xWGFRa2U5OEVFTHNkamFQZFQ0UEtyMXlsTS10ODFzbnZDTXJ6ZDd2aFRSNV85OUFfU3FNMkE0TUZ2eURSbmM3cjJXM1NXVUtxS01tdlBIWDZDeTlYUGRrNkp5ODBwZG5MZXlERGpXZ280ck0zcEtaN09mTmFzaUJMUnR4X01B?oc=5"
    },
    {
      "title": "北海道愛別町愛別でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNY2ZvcS1QN1VxVFYxZUdkVnVFYTMtWWtwaXVscmpxQnFma2Y2YnVSTHd1Tm02MXNmZ0YxU0FITFlkQXlwb0Z0RnFEWktYTlczTGcwRXRLN0lhUklXQXlZam1sQWhqNzFySUgtWWtuNTNlZkNmOGJSRGdNVGpYWVVkTkthSHBvUlBrTXpEWTdsUTgyajBMREVyVVJTc1rSAaIBQVVfeXFMUElESkExUFl0UlJRSElNRENiVTRrUWI4ejk4UTVSZm11ZlM3ZXpfTjd4VnVNc2FrV3Z4RTJBbElvN0lvblI0bTFpbE9GbHNIdTl5RzBqUkxKS1ltbzM4YTFSc0N1a1lzVXJ2a0dfdHhsMjJNaWd0OHAzRGdJc1haVWJBZDAtdEkzQ1FqS3NRakF0WDFjR2RKby1RdWNTSEZTNk53?oc=5"
    },
    {
      "title": "岩手県北上市さくら通り5丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPM3NmZ1BabmNGLUZxX1JreC1adVFUaThDVEVSOXdkUW5OVndZVUI1SHBMWGdqM1JQX1BHRUt4S1U2dGF4MWF3QWw1T2hHUFdmVTJ6UWNOUnR2U3hIUTB2WS1kNXVCTTFaUVJXb2ExUnpxYXpNaXpSU2h5WG9lazdQRWJXS0FhYjkxSFNqeFl4RlJJa2ZBckZuMHBjVjR4d1o2UFZFcnpHUFRQYUhNSW1n0gGiAUFVX3lxTE85WlVaSDh5b1hmSGRONzJEM3RlWHY2NFdZY2VQeXV5N0k0UUdpQWtLbkplRmRVWUI5eXdGU0V4Wm9iUU5sT2tSWERUYmw0bldaV0h4bGhLZi1jUE9ITzhrM1Z4MFFRR0RfQnVia1dVZjVEQjRSWW53RmYyUVJvWUR0OEEtLTVURWs0eHpwazdBS3ZLTDRsZmdQV0ZkQ3RtTjJ4Zw?oc=5"
    },
    {
      "title": "岩手県岩手町土川第４地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU0I1XzdrYUNiOF9Dbzk5SC0tS0JNQTRSZWxfb0RGYUd6b1o5VGluYkFjRHg1U2tWZlg4cWpCcVRfQ2NoYThVWVJ4dV90ZHBGTmJtcjAySlhEOG5sZlA3cTBEdDV1RUx1amcyTXhpRHdoNFU0R3diYkZLdGZ4TG9mVkZpRUZCUDM3YnVqUlR3QTFnbUNPYzBCTjNhMl_SAaIBQVVfeXFMUDBreVpMc3FWbGc1Z0JJeHlHZU9uYnZWYzZrQXI2WVEtWjdGcHJNMllucW5XTEhVd2I0T2JucUJHdlFWMGFtaU9FdmxvdW5pRkFvZzhiUUZpckMxcExPX1hxcmh6UVI3RjZkYjJmUW1OUHhUUmg0a2tmanV0M29LalpoMEdON2kyLVptdTVfT2laLWFsamQ3aWpSTE0wN3g2Skdn?oc=5"
    },
    {
      "title": "岩手県花巻市松園町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNR1BPNkxJWG5Fci04MmQwZkUxQXh4MlIzTG1aWjNhZWQ1UnpseWxPOG9lZV91akRoMUlyUzRrRmJ1LTFZemVYc2R4OWJkb1ZRSS1YcGR6Y3ktLXlMVXhMZE01ZEktOFNheHVsZWdkenB0WDFqM1F4N24yT3Q1MFR1WElFQkFzdHhVZ0dxOHJXSUxsanpnSy1kUVRUNmXSAaIBQVVfeXFMTUJLdmVxaWRUclRVaUZKZFNueXpRVDJSVk5xdDc2ODFCYjU4TWloVnNDQzNpS0I4a1lHbDdaMlhzdUdUbXpTdzZPWmZ2M09hZXlma2taeGdTdmxLekU2T0dfMGpPMGFkQ3hhYXo2ejNnbEhwbVNoN01LeU1YWmlLczNzWVBvVFRodlZBVm5kN3duLWYxV2x1Qnl1a2xrT1FJY1pB?oc=5"
    },
    {
      "title": "栃木県栃木市でクマのような動物を目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5WRmVibGZoNnRtdjNLVzFTZ04tN1pZeUg4a1VKRDdzWVo1X1JrZFYxWWYzVHFUTDZiOTNPakR6VC1RUmxZWFdQVTEwMTQwZGVlV3oyLW52UmlBaGc?oc=5"
    },
    {
      "title": "兵庫県養父市大屋町夏海でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbG1VamNHWHNyOFNwRjdGcG53UldxWVFCOUhBamtsVmRiOTdudVRpVk04NXhZVFEyUDVrdURITktkem4tdm1RbmRJNEtxZE5JTTNQUTBmNjRkRWR2cmoxSkR2ZUFwOFJNc0t2aTNqSmV4bVVBNFdQZjhvMU1Ia2ZFMFY1bjVJRkxBNnRnVC1FWW41VHRldjhCdGtzaTTSAaIBQVVfeXFMUHhSOUc0ZjhNRFZ0N0ZwU1NTTVlER09Lel9GenJ1UTJjcmJqLTJmbEx5eV9IX1BWTklSQnNmYnY1R1lPRDBqNVVET0htTlF2VXY4WEFPY1dkUm9FWHg1YlVXUWdGNDVZZC1lSy03NmVxbWpjZ1NFSTNfR0o0TTBHcWgybnBUWjNSU2tCQ2JlazFVeXNzVFBRZU0yMmsycHg4N1hn?oc=5"
    },
    {
      "title": "群馬県みどり市大間々町桐原でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORGRwM3A1cUJObjhoamtlXzlTU1NtOHRJQy1mNE4tRGRDd21DajZybnV0QlFrbGNocXJZRDJIeHBEWE5OcnhVUXlSZmJkQTM1MEFQT3Zzdjc4R3g3NUh3RkJlNUVvQ2hIcXFxVXVBRnNDR1ZtM3NxQkltcndGY1puVWIxdFFpTXFOQ2daN3ZqOEMtcGRfNmVXdEd0UDfSAaIBQVVfeXFMTUdyM3hDb29kbGgwVWFUc0tGejlud21HcnNnSGt5dHNISkFNcHU1Qk5XUUN3T0xGRmxMNXVGdm9xMXBRR1lndmxVZDZoUVVzcEYzUlVJdVFNRzdwQy1MRnZqMnpsRjdxT3dSUjVaTEtpMHNqMEFoa1dLRU9UZnY2U0ZpLWx2SUplTTNvc0NHT3V5Y25BZkprMkRtYnl6SG9sZ2dn?oc=5"
    },
    {
      "title": "群馬県みなかみ町小日向でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU3djekg2dEg4OUlWNGFtaXVLQmlieVFiVXJJUzZkdVlPUFFIZUFOVVVZRUJQYXdRdXVtMDBWQlU1LXJrbDQyV2tqRHdmYWJwWV9YMDZFNFVIR180S1czQ2NhZWloZGRTclR6aXFTT2RBQjF0VDdIT3h1MWJxR3BtSm9xRVdqRjloVXdkSmJuajV0ZmZ2cENaLTNMSXTSAaIBQVVfeXFMUDN1SzUxRjk3aGM0clhuTVEyVVNYNjBxQjZvaWNtNXA0NVdOU3c2bnlYMjFwc2swc2FOYnlSSzRMd0ZKWDFtdHk2cHJpbmYzaC1BOXZxaE15Skl1eDdWYnNsOTE2Y3V1U0s3cW0xUi1CWTVwWWo5YVhaZzlPZC11SkkyMml2aXNyRkJyYzVyd3VCRDIycEpvMENQZEZ4QzBsNkdB?oc=5"
    },
    {
      "title": "福島県楢葉町でクマ３頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBhTXlib1VCdkhzWVl0WldWaUM0czM5N0ptMlIzSGdXb0h4aklxSG1oelIwRFNvaUFBOGlRRzVPT1pKQzhpVEYzZEZwalBQS1dxS1BIdnpfWUU1LTRwMXIzMUd3UjQ3OUg2Z1BIQkdQeEJSZUtlUnIyVXBxSHlMbWc?oc=5"
    },
    {
      "title": "静岡県富士宮市羽鮒でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPV09nNFpnY0FTWjBIRmhCUW9adUF0Uzl0YnRBSi1VUGxTcFkyY3RYekhGaDQ3UGQ1TWU0YnplQnpHaWJ5SWpxbG5zT3dsM05XaDUyR3pfX0c1VFhsY25UMjVxb2Zvbm9vb2JfdFU2eDRzTndoc3BpVGhlME1KQWk4TmozRGp4b25fdzVTQUhvS3R0RDdPc3JxaE5jV3TSAaIBQVVfeXFMUHNJNVd1ZElReEVvUjhLMHVGM2NDeEh0b3RaRl9TLWVxeWxUMnpQV3lzWE1DdTFuRjBaM19CNnllb1FFalp0TF92ZU41T29KSkt4dUpzcHViOXp6MV9aWVZBaU02dnNZSUxGUXFiUGg2eTl1WWJCWXlsaTZlRU54dDJXNjNKSkY2dTN1Y3JUU2FtQjdMeWduMkpiX0l4NFlycGNB?oc=5"
    },
    {
      "title": "石川県七尾市能登島須曽町でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORGFnTEJCLVlIOTNoeDNRNktrSXJNaGVzU1FkN2l0SU51a3U2VXlOYVJSXzlMVnpOYzlKSzI5SzZUaVRudlpWekVLa0liTVh6OXAxR3B4a3JDVDZHeElEQndqdjhGdUpVY1d0QWtOa3lYWkhpWUh3clFETGN4bi15a2pzd3NKWGNYSDZmSGE2Ylk5TVlKcmJHN0tYVDPSAaIBQVVfeXFMTURnNUpIby03TnZvM0MxV3h4bkFHTU1uRHRzWjNVUU1xUGVEZmxPYWFKS1hzSmE3emU3ekxBUWRyOTZYLWpqZUtvYTdkY19PUXotRkxXbzFsMmRTdTh0WmFDc0F4WGJoUFZnUy1ORjRja0pNZ1pWNF95bnpIT0NTVHo5VDc3WENHQmlDX2NsUFFqYm9oVkpRT0xLZmc5NmY5NDBR?oc=5"
    },
    {
      "title": "宮城県仙台市青葉区で2件のクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8wY0FZb005QWFlLXhMOGhPUUYyNGpHdG5oZ2tQc0FZaGZWVjljdjJvRktoaHpXaFJ5XzM1bmhOVldyRkFYVlAtOXQ1elBXbml3NHEzeVhQVVZHeEstbHFTYmVuNVRKdmRYQmlnZzhBeDU3dlJNbWVjMkotbVctY0E?oc=5"
    },
    {
      "title": "島根県雲南市掛合町で成獣1頭目撃",
      "url": "shimane"
    },
    {
      "title": "青森県むつ市川内町でクマ目撃",
      "url": "kumalog-aomori"
    },
    {
      "title": "青森県七戸町舘野でクマ目撃",
      "url": "kumalog-aomori"
    },
    {
      "title": "福井県小浜市東相生で幼獣1頭目撃",
      "url": "fukui"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":7},{"pref":"北海道","count":6},{"pref":"岩手県","count":4},{"pref":"秋田県","count":3},{"pref":"福井県","count":2},{"pref":"山形県","count":2},{"pref":"群馬県","count":2},{"pref":"島根県","count":1},{"pref":"栃木県","count":1},{"pref":"兵庫県","count":1},{"pref":"福島県","count":1},{"pref":"静岡県","count":1},{"pref":"石川県","count":1},{"pref":"宮城県","count":1}];

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
        <span>対象期間: 2026年8月29日</span>
        <span>·</span>
        <span>公開: 2026-08-30</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={33}
        periodLabel={"2026年8月29日"}
      />

      <p>2026年8月29日、KumaWatchが収集したデータによると、日本全国で33件のクマの出没が報告された。出没情報は北海道から中国地方まで広範囲に及び、特に青森県（7件）、北海道（6件）、岩手県（4件）など、東北・北海道地方に集中する傾向が見られた。当日は岩手県で深刻な人身被害が1件発生しており、秋の食料探索期（ハイパーファギア）を迎え、クマの活動が活発化していることが強く示唆される。本レポートでは、これらの事案を時空間的に分析し、リスク評価を行う。</p>
      <h2>主要事案：岩手県における人身被害</h2>
      <p>当日報告された事案の中で最も深刻なものは、岩手県雫石町の河川敷で発生した人身被害である。報道によれば、50代の男性がクマに襲われ、指を骨折する重傷を負った（※1）。現場は河川敷であり、人の活動エリアとクマの生息域が近接、あるいは重複している場所で発生した典型的な遭遇事例と言える。8月下旬という時期を考慮すると、冬眠に備えて採食活動を活発化させた個体が、餌を求めて人里近くまで行動範囲を広げた結果、偶発的な遭遇に至った可能性が高い。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道（6件）</h3>
      <p>北海道では6件の出没が確認された。内訳は、森町、留寿都村、弟子屈町、当麻町、愛別町など広域にわたる（※12, ※13, ※14, ※15）。森町では米ぬかの袋が食い破られる食害が発生しており（※11）、農作物や人由来の餌資源への誘引がうかがえる。その他の地域は目撃情報が中心であり、特定の地域に集中する傾向は見られないものの、全道的にクマの活動が継続していることを示している。</p>
      <h3>東北地方（18件）</h3>
      <p>当日の出没報告の半数以上（33件中18件）が東北地方に集中しており、最も警戒が必要な地域である。青森県で最多の7件、次いで岩手県4件、秋田県3件、山形県2件、宮城県1件、福島県1件と、東北全域で活発な活動が確認された。青森県では七戸町、つがる市、むつ市など県内各地で目撃が相次いだ（※2, ※3, ※4, ※28, ※29）。岩手県では、雫石町の人身被害に加え、北上市の「さくら通り5丁目」や花巻市松園町など、市街地に近接したエリアでの出没も報告されている（※16, ※18）。秋田県では3件すべてが秋田市内で報告され、寺内地区では民家の敷地内でクマが目撃されるなど（※6, ※7, ※8）、住民の生活圏内への侵入が確認された。山形県、宮城県、福島県でもそれぞれ山形市や東根市（※9, ※10）、仙台市青葉区（※26）、楢葉町（※23）で目撃されており、地域全体での警戒が求められる。</p>
      <h3>関東地方（3件）</h3>
      <p>関東地方では群馬県（2件）と栃木県（1件）で出没が報告された。群馬県ではみどり市とみなかみ町（※21, ※22）、栃木県では栃木市で「クマのような動物」が目撃されている（※19）。いずれも山間部に近い地域であり、従来の生息域周辺での活動と見られるが、レジャー等で入山する際には注意が必要である。</p>
      <h3>中部地方（4件）</h3>
      <p>中部地方では福井県（2件）、静岡県（1件）、石川県（1件）から報告があった。福井県小浜市では、相生東相生地区で幼獣1頭を含む2件の目撃情報が寄せられた（※5, ※30）。幼獣の目撃は、近くに母グマがいる可能性を示唆するため、特に注意が必要である。石川県七尾市の能登島や静岡県富士宮市でも出没が確認されており（※24, ※25）、広範囲での警戒が求められる。</p>
      <h3>関西・中国地方（各1件）</h3>
      <p>関西地方では兵庫県養父市（※20）、中国地方では島根県雲南市の国道54号線沿いで（※27）、それぞれ成獣1頭の出没が報告された。これらはツキノワグマの生息域の西端に近い地域での報告であり、分布域における動向を継続的に監視する上で重要な情報である。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>2026年8月29日の出没状況を分析すると、以下の3つの観点からリスクの高まりが指摘できる。</p>
      <ul>
        <li>季節要因：8月下旬から秋は、クマが冬眠に備え採食活動を最も活発化させる時期（ハイパーファギア）にあたる。この時期のクマは、高カロリーの餌を求めて広範囲に行動するため、人里への出没頻度も必然的に増加する。岩手県での人身被害は、この時期特有のリスクが顕在化したものと考えられる。</li>
        <li>餌資源への誘引：北海道森町での米ぬかへの食害や、秋田市での民家敷地内への侵入といった事案は、自然界の餌資源が不足している、あるいは人里の餌資源に容易にアクセスできる状況を示唆している。カキやクリなどの果樹、生ごみ、農作物が誘引物となり、人とクマの距離を縮める要因となっている可能性がある。</li>
        <li>人口圏への接近：岩手県北上市や山形県東根市、秋田県秋田市など、都市部やその周辺での目撃が散見される。これは、従来は山林と人里を隔てていた緩衝地帯（バッファーゾーン）が機能しなくなりつつあることを示している。クマが人の生活圏を恐れずに行動する「アーバンベア」化の兆候とも捉えられ、今後の対策において重要な視点となる。</li>
      </ul>
      <p>以上の分析から、今後9月から10月にかけて、出没件数はさらに増加し、人身被害や農業被害のリスクも高まることが予測される。特に、出没が頻発している東北地方や北海道では、より一層の警戒と、誘引物の適切な管理、地域住民への迅速な情報提供が不可欠である。また、公式情報が0件であるのに対し、報道由来の情報が27件を占める現状は、迅速なリスク周知における報道機関の役割の大きさを示している。</p>

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
          <dd>2026年8月29日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-30</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-30</dd>
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
