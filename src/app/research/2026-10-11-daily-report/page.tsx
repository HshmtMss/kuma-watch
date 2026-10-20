// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月11日 / mode: daily-report / 生成日: 2026-10-12
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-11-daily-report";
const TITLE = "2026年10月11日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月11日に収集された計57件のクマ関連情報に基づき、愛知県豊田市で発生した玄関先での人身被害や兵庫県豊岡市での緊急銃猟事案、北海道から近畿・中国地方に至る全国の出没傾向を体系的に整理し、野生動物管理の観点からリスク評価を報告する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-12",
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
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
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
      "title": "玄関先で男性がクマに襲われ重傷（愛知県豊田市）",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBDS2JyNExUZnBBZnFrdm5EQTI4SDhCM1VlRHNlR3IxZmZlLTVxd052dW0zXzV0YnVZdFhpQVViWTI3OG5qbFpJRUVqemg4Yk85TGZydkJzUUJ3UGhCQWNFNVpHdngwNHM?oc=5"
    },
    {
      "title": "自宅前で59歳男性が襲われ負傷（愛知県豊田市）",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNM3pBeUNXYjFNZE1RSDhjeGxnSHpGMUxnX3NXT2hCcFVUbVJhYWlGeEItUFR2MFRWVzhLSmFoLTFqRHAwSzZsQmQyU01mOW1Fb09DcWR1ZHRwOXFZZVN4V0JGa1Nyd0s2Qy1TV1luUV9aVTVwclpTM19UZkNfVVVMS2UzU3VZejlqVzRVT2VKcFZOMF9sTS04V21JV2pHSHBCeGQ5U21HRVdMZ1d0RWZPVms3ZTB6a3dFOWtpc0hHRG15WlNkV20tSFRkVmtIVGNZ0gGAAUFVX3lxTE9BelJTeWZESE44MVQwdjhvM29RU2VTMnlBamttbDNwTzBKTXFSdWlFQ3JaWUdDaXlLSjExOGM5Z2EzWlBwS3FWeFFpdndNRW0xaWdYUXZXSGlrY0V2SDdEb1FqOWJRWnJJV0FqNzZyaVlkeEtLMEZ4dFNHTkRfUTBz?oc=5"
    },
    {
      "title": "民家近くでツキノワグマ発見、緊急銃猟（兵庫県豊岡市）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA5SzU2REthRm0wQ3MxZVY2V3dEUTBWc0YxVDkwSEdOdGFzd01WZzhDc0lZQk9aYjFFaTJhVnZneS1WM0pFWUpwTUVIZ3Npc0xyUEdPWG41NWdWZFdxdHpRcXpfRHhscXJhSlhFd0ZjY1p5QkFGT0kyT2YyWnN1S1U?oc=5"
    },
    {
      "title": "ツキノワグマ捕獲（奈良県明日香村）",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9OdUxjYzh6M0l3dXVjX1FvS2xWdkJjSWZoMXl3NXBjM2FIaUo4dzJNbWMyTXU2VkpkeGRxbGtVcTBRQ1h3UFYtc2pzR19ra1hxV1ZkdC0yOGdKRUx0a3M4?oc=5"
    },
    {
      "title": "赤川町でクマ出没（北海道函館市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORUo5UVJuWHcxdk5KQjhlNy1PRnBzM21TOGdnNmdzMnVBUnNIRjdIY2FOUERXWmwwek5ZSUhlOVNTNTJlR0hJdi1PREkySDdidmxvd1RjU0U3T3NmODYydERtRjlicTVZXzNoSTB5Q1pkdFFISGFxOXlJNHJnSmNTeWVTdi1QR2FpMHZzLUdRb0syR1FKaWN4aWdILTPSAaIBQVVfeXFMTVFGWTlNaGV5eW5BZFpjZFlTc1BpYjhJTFpSUEtBWEF0aDlLM1dIY3VoRW1CVi1wMnNHcDBKU3Q0OFhURFpMSjA3LVJ1cjhwVFBrNmlEWEYyOHotdmRkbTRZT0JzRmZPUUZHVE51aDBNeUw4SFg5Yldubk1JcFkzeFRyZ2x6V0FaRU9BeDNqVlpYSzY0U2syTnh0TmRIYTE2VlJB?oc=5"
    },
    {
      "title": "クマ出没（北海道旭川市神居町西丘）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY0Y0cExlYk9abWlwaEFya2pCZkZpbV9WOFhRTlVuYjRXbG9mSkNqRHdJQmpfbkVHZjU4cktVUW9fWUwyRzctSXc3NTVwUm04QzJoTEZhcmlnTDZhaFJkRF9tOF9mY2hJVm1yWm9vc2xWRG95YWtWM3VDeUJqVVNPU011TUhtNEh1eF9RWl83NFJuekI0UEY5bDhOanrSAaIBQVVfeXFMT1RGeU03akZRaDBLcXFpcDdCaWY0TlBacU8tX3ZLc0xzRE16d0VyMHhiM0U2c0J1V1ZJOUJhNWwzYk0xSFVRMGNWRzdaQmZtTzNXelEzclo0OUp3ODdQRlFEdTB2NXE0b3B5MktuYmpWRHRhSUxjWmF0UEJtUkpJcS01T0UtQ0NJX3pwNV9XUlpqdHltbWt6OEJqMTBMSVk3aDN3?oc=5"
    },
    {
      "title": "クマ出没（北海道根室市温根沼）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaUlpSzE2UTNhQlZid3FYWXAxRC1qamVvTjJ0cW8tZUNrU0JjbHI4UlhHNEtfemFrcWtvMUcwMF9LNzlUUXhieHBIemJ1UGRyZzl3RG9aZ0FEYjFXbFZtNGxNQnU0ZHF2OVVJNkFuRTBuV0ZCc1A2WlQ4M3dLdnZZVnM1Vk5KSGc0ajNEck9UdnZ4dVFWaWhNZ2F2Vl_SAaIBQVVfeXFMTklKeDhHYU1MYml4emRmVkpLaXJ0VF9JUWYtbnQ4b2U0OFZvRjMzbEFUVnRScUd1eFl6aVhFazlTUzBydjN6TjUxWUlFcHVRbGNtd0RHTmNDak9uNEc4S1p3aTRpX0pTRmpEbXJYeTRQYkU4QWxacVctVHdVUkZ2LXlFdFhKNklqTVF0Szk2N3laYXlEalFXYlluV1hENGtzMWZB?oc=5"
    },
    {
      "title": "屈斜路湖畔で親子とみられる3頭目撃（北海道弟子屈町）",
      "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxNTWlhZ3p1OWd3R1dCMlhuS3ZlRGRXVkJCMXEyZ19feklXUWtvQXFaRjB5THVLYnpvTnRTU2hxZFhCb1F2VnZqeHJIbGFjRlJQcHNzX3ZrMXZKc1JQT1paUXJwOGNkX0ZsT1dFRnVUNjlTMTd6Z09BUG92SXRoMEVvTjFXeVdWVzNwRjNIN3BtcjRhR3duUTVrYV96dzVqNkkwTlhzVkRONjBMZXFzV3UwaWQteld2X2cyWGY1ZVgtcGNOXzNqNmJfR1N1WGxEQkVveGl6c09jeWduZDBpLUdGcUVkODBEdHpnR0lWLVE4eDR2TUxmamc?oc=5"
    },
    {
      "title": "車で発見、道路脇の草むらに1頭（北海道清里町）",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9EdWVCX2NaTGZfOTNpVzJZemdZTG13Nk92QnFwc2RhN2N1ckFWVmhudF9HZGtaUFAtejRvSmQxWWFja2hmQVQyMURrNl85MXk0YjRCbTRVdm5kWlAxZFNSVzVKSEVkNS13cS1VY9IBckFVX3lxTE0wYXAyMXpGR2xwMXBVcElUS2pOWC1DczhfU3ljbWVZaEY1aWdidnRvWVZjOF9DVUNXLW1XcVZHX1J1M2YzbG92OEZoaUdvZnJmQWF4a3R3NW92ZDBSakN5YmRhSW5KSG5xd0NhLU5ZWUhpQQ?oc=5"
    },
    {
      "title": "四竃大原でクマ出没（宮城県色麻町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZVprWktsWW5HZGZidkRoY05fb0tuVXYyaUIzWVpOcGtKbEV1alFDVHE1VEptOUNrNEdqQ2stYWd5bFVsaVRpRWNGaUFFZkJFaXM3ZjNxbEROUUZ5bFQ4UjNlSkVaeTNtRzVUQU1lbjlNQUNOQUZENDhXWWJSc0hBNkwwRmNYTTZPeHRFS1d1Y0l1eFlwODFhdWV2REvSAaIBQVVfeXFMTXQ0bnBETmVFQ2tNVXZvbldOTl9rNmt4WmRwSlJMTkpYdUVGZVlOLVVKSDQ0aUhYV0xKUU9wczJXazJwRVJsLW1KX1hVd09NUGM4d2dZX1dYNFA4Qjh1YW5teFF2YlVadkN6VkhxOElOaHJZWEdONVRwRWY1elpkNS1sUWNUdUlJVW1vbDAwLTAzSlhXbmFHQUhjRFRzQnNBaVJ3?oc=5"
    },
    {
      "title": "相互台東1丁目でクマ出没（宮城県名取市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONmJCUkl6Ql85cXc0bHJNbm5lTjB1a0Q3b21kSXp1cmd4WmE2TlNxeHhnM0c4c3lDck9YamgxOXpwWDVIWGRJQVctWXFhaDJkTzNrWGlyZGVHUWx5TDZaaV9RZTZTcHZBYWVidklqY0VCN3E5QXRXOXQ1bEJfbzNkRXFBTlVzMWFVdS1EbGYtS2xUZE4yd294RlRLbEPSAaIBQVVfeXFMTUhRVXVRZDhyMGI5V0FNMTdycE9wUGlIdWJHY2ZtZXhUckFpMWktbHZvakdwQ0pUZkk2YVBZQzA4Vy1BaVFoN0d2S0RSZlR0dDZUb0RCTXJteExuVHVHUG1Kc1YzTG9Db3JFdUlLeDlwVkJBZy03eVJ5dkptOGVoTTQ0Z3hkR0ZPdHFvcGl4ekdLQkRxdDdDNzBPMjZ1a3BMUDlB?oc=5"
    },
    {
      "title": "クマ出没（宮城県栗原市栗駒沼倉耕英東）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdUpyZm5xR2R2MHk3RmpHYldjYzlNSFZJTUJ0dXpvUmpwcXBzUG1KZ1VhQWxaTTdjcjhwZmhJRFZjc01GYWltNlhUczZralYyUTdnX3VvQi1lYnNGaU4tX1pEQjctWEZUdE1GMldUenMxTHJEX2pJSl9hTFhsT1BuakRMeGNlMFlmOUpIZ1BIR0tWTnkxTklxLUoxZTVtQy1UOHM4ekJBa0R1Z1JhUUhtSkZyTVlkM0dMeUdUWTktS185QmZJUVlCeXRDZ3hOQ0RxWXBZelBibnVRUDJPYVdMYXo5QldBT0xYNDAxdUdNR19uUdIBogFBVV95cUxOYkVJNllpVkJMZ2YtSjFpbVRDeUF0Nl9fSmFSRVRTOWdwLUhfME5mOWtxNWdmLTZFVy1wanJPVmJuQlVsWnlKWDZzWWFrQmVEWDBwRl9XSE16aGVPdlRMWl8tRVpaTlFWN09DUnNLWE5jNnhHUkhKT0NZbmhPUHktRDFzN1Y3T2pzOUo1SHRXS0hKYlNTQXZhREV2cmluY2lBMHc?oc=5"
    },
    {
      "title": "クマ出没（宮城県白石市小原新湯）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYmhxdnRXcDB5Z1dxS1BudXB5dnJyNzNVcjduUnA1NWNWSkJFMXk2QzduTmJ4bUpuOTNmcTZuSHZydE5HZ1JHX1EtdDEzY2QxT3NSbVFLVldkMjlLaDVnRHRQZG94SU9ReDZBNDRZZzA5RmFBY1MyR204MXRieGE1bHRlZ1JjVjV4d2FKbU9iYXJVNUdjYlVDRHVjZ1fSAaIBQVVfeXFMUHZOOXljWVFodUUxZGU5T2kxaWVnVE5wZXRKZGZZaTlsa2JJUW9kX3ZKT0FKTnJ5VXdVdGVhQXZCYkgtTDdLN29Db3VvWTl2M0d5NTdBM0M0R25mckhXM2ZWYmV5SkRtak8tcmVvVDF2bDRMc241RkIwSnJhdHpGX0tYTEtoeHU0VWV5VTI1Z1FRb09yMnloVm4wNF9KeUVHdlNn?oc=5"
    },
    {
      "title": "田んぼを歩くクマ目撃（宮城県涌谷町）",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1fN0E2eWlOY2lMaFBBeXUtWEdhZ2loTmRDbGpZbHhldzdnYXBVOG9USnBSeFZkRUtFQTNfRHR5VExPX3UwUXVZci1RSGxpZHR0UTBUalNMWmZmeGtEQXpr?oc=5"
    },
    {
      "title": "小鳥沢2丁目付近でクマ目撃（岩手県盛岡市）",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQa0dnNHRjbFNtY3FBSFEzUlRvdXZTQnY1Y1pLMW5lU1JSa2FVMTlHT1NMckNzNTJ3R3ktYS1Gby1CazQxdjR6UUw0Z2w2VjhVWmxPZnFJMXpoVi1DRkVkMFNDNlVuckd1bVlsdnBqSjdJaDZxd3B1akJjbHgwZHAweFNlNzBZMWs?oc=5"
    },
    {
      "title": "クマ出没（岩手県久慈市宇部町第21地割）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSWxIYjMtVVlHU3dyczJhd1RwSEhWc3lGQWhWUUJULUNDMGNSV1RNYUNyTzk5WHgzYS1jRnlYUTNxWDNoMmNSYUEtSXlFOHVSaF9KX1RfRkNQTHJHUldYbV9Vb3Y5ZE1tcDhrUzhZY3RpVFZobjRQbmtWWmJlbEg2YkVFaEx4cENoQlRoVDhWaks4QWd3RDl3b0NXYl_SAaIBQVVfeXFMTzNNLXNrdDFYbll0dUJIeUQ5dmJJa1hQUVR4VklRZ1lrVUk5dENJUG5xajVZcHF4Z2ZGTWFiSnpKVmFjV2FMY2RRMUpUem9JOVVTNWw4UGFnaG1kWFo0cmRYRHVzcHgtSi1leGpLNHJTNFU2VUxkMnJ6WmNQUGRIbm5xRUNaSzRrUXJhelBXVDFYeUVLd25kSURzVG9YYWxDTWxB?oc=5"
    },
    {
      "title": "新聞配達中の男性がクマ目撃（福島県郡山市）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE53N1UyT29xblFwRExjYnFDbVo2NEdQdkw1RU1NSktwOU1vMzlXaTVhN2czMDZwcjJlSWgzZlhtbDkwOU9OWHBiMHdqUXNYYi00YWxBSWM2VGZUSjRtX2R4elk4SC1BeVZrVXRPandnMVpCamZleDRIVmFGYTByQWM?oc=5"
    },
    {
      "title": "クマ出没（栃木県鹿沼市上南摩町）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbzZpZXFlZkFLRjZlVWp0WWlxMTdMNGZQaF92MmNRVERSd1prSFBEejhLUjRROTFTRlZ3czN0SVBVY01tMmI3N2VEOUhadHdWYUlGM0tJdi05aDRNa0VFSmg1NjYwM3NEZzVJRExEUDU4eFAwb3FsUFlaaS1wRVB2b1A4Tlp6Rkhlc1lVMWtwMnpVbDg5clJRaXhTUmjSAaIBQVVfeXFMTUotSERWWEtEWjlwSjItT0F4UGpxU2tmVE5MeWNkcGRQSGdLalNpcTB1c08wYWxvOXFBU2I4QTlNMzhDWXdBMUp6SnMyQWlUWkc2OWljSVZhc2cxdjhqVHlhbHZ6QU9aS1gxbThXcEhBOTBrWTlDeTR2UG9uLVFKc0g1MEJYcWhsaUdadlE4bmlDZkNlYmJ6RlpuUDM3UU5TVWV3?oc=5"
    },
    {
      "title": "路上でクマ2頭目撃（栃木県大田原市）",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1ERWw0eGRGd3NvSFN4OXo3NWQ3aXkzSXBaMms3cWJPcFZyak1VMVI5LWxOU0NJZEI1eWFMcXpmbEM1bGRZcDB0aXNPWWdpOVhiY3BvMWM5TlpkQVk?oc=5"
    },
    {
      "title": "大田原市出没マップ情報",
      "url": "https://www.shimotsuke.co.jp/articles/-/1438677"
    },
    {
      "title": "クマ出没（群馬県みどり市東町小中）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ0JkcDAwY3NmdWhwQmVwUk8wMFd1Vm5POHFMTkxrR0cyOEdENUhmQ25fZzBWNWtabnVpSEFXZ3JTdjVxdWd3MXE3ZzBUaDFfaWpCWTF1bTh4VUZJTUFGclBjY2hWa2ZCanJGelpUc2VlUXZMOUhhU01OV3Z2VmgtS2Jfd21PaEF5RkZ5VExVTWRLREswbUdIOXBwNEjSAaIBQVVfeXFMTXZHT0FUTnhFNGhXbHNrX2J0eER1dExENk1RalNKSF91RE1NYjlYRnpiV1hBMnNmTnpYc1ZqVy1TMVZ6YnlkTzJOR0hMWjktUkxjU1Q3djl1dkwyaHhFY08xTkxwS2NUNjA3UDM0QmtsSWh3YXk1eUlPZ3RzQVVSZVBTTmx6SEZORmFZQ0J0MEUyd2NuN2h3SmptZzl2eU85SjR3?oc=5"
    },
    {
      "title": "クマ出没（埼玉県秩父市久那）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPZ3hyel94a2VlWUtYT1Jpa1BkVWtBZ2ZmcldmR09aRmRSYWdVVGVTdDBVNnhWVjFSeWpHY2JWV05xRW1ZMGVidzRERkJmZHE4WlRLNGVBaUp6aXRSWlFHR3QxVjdWRXQ2cmhYR0V0WDd2TFFTZkVhYnhtdXFMOXNVQ2dFU1dUV0g3NUhkNlgyTkxSUnp4aXRzcnlYWVRLYnU3M3JTUjNaSnQ3aHpyUExXWFRtTG1yTmI3ZmJENTVnZ0MzQzk0cVducWJTUnlJRU93RWRVbnZ1YUN3SC1jZjBaLUxLdEZDR2FMLXYxb2phUmZzQdIBogFBVV95cUxOdTFvYWxSVGYxVzhkNDR6aW5abGRjWlB1ODRIYUx6Mm8yVmVHeTF5MFpybzBFTHFncWdhcUVtVko4amVPSUpYVldodHQwTVRxcVo4bWxPTm94QUl6T1dNanRWaFF1UmU0OGVlcHhyRTRkZlhCdDByVVJIOTFCNFFqRnVZdkN6eUtiRUFzc3lRR0tmYmQ3bW9kN0VWanNXSjRmZGc?oc=5"
    },
    {
      "title": "クマ出没の可能性（東京都日の出町大久野）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNczlnS3ZINjU4dzA5dFdlQVoyN01tWHlJU2EzUnZwalVfdzdBaXhjYnRMYmFLc3JteS01N09mdnU0c0p1MzE3emk3R2JsRmd5SHBXWnFOSDl4UHN6SzVoQ2ZwZndubjRyaFd0NGpyYU1OTTkwNUFmdVZLS2FDR1hKcXExU21iWHozZVA3bXhDLVJGX2lBME5RSWFueHHSAaIBQVVfeXFMTUo0NUZUSW0yejI1U1RIdG82dklOa0dsTV9NSU9MS1QtLUV2dVB0UjBPYndmSnhyQ1BRb1dtRDc2TVB3S1Y0SmtWQjFvTWtKMTR2V1VOQ3I0SGFjYjBWZ3BRSUtDNUphT09veENISFlhSnNnT3FkQ1ZBTzRTU2RURzd4aHBFR1FqdE1LUGlqQ25tc1BFcmUzSjNnX2xqbXpRZTZ3?oc=5"
    },
    {
      "title": "小原北町でクマ出没（愛知県豊田市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcXBkTncxV2laenFXbjNkME5vRUU0cGpYU29ReENPbjQzNXlmRkZINGUxU3NSOFFFWjRWT0huYXFwVjlWN1FzOXR0N25sZ3FpdUlNdFFpOHVFMGxsU3ZrZU9iQ2pEckhZanZUSzJYTUFiUnptcXFvSzhrekszLTVldGZwY3RZeVNpeng3TjNUY1FYQTVwaWpwTlYzR3jSAaIBQVVfeXFMUHhCaEhLNVVLcVpCSndqbmpYQUMwU1dFQTZfbW0yX3I2dDR1M1Bqc2hxTWVfVG5TcVJjZlZCNWNTUVBIbHBfNzdicHMyWkU3eXB2dndUSjE2R3BVS1RsbVV6Q2ZwWGZtWDh0VDBTb0pUZVBGZTJ4MWdHdktOSVRtVk9jMXNoa0k2MDNFbS1fTWFKMWdVZ19KOWFRUnVpblFvd1NB?oc=5"
    },
    {
      "title": "クマ出没（愛知県新城市作手木和田）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNU2dETDVFc2QwNTVwdE0yVjBBNEYzNm5XSlNQb3V4TG9paVBRLXp6dThuazJVOWItbm9lS2EzRGg3czNfY2ZSRnl6LXc1NFd5Z1BYTVZHVHRXd2VqZFl2MnczMy1ONURxSnpMNE5jZDBmeXc0d1Q4bGpBaWsyUDk0dDlDTVVoSktaRDBtemZxbkNDdDVGbGtoVmJXbzTSAaIBQVVfeXFMUDNTNzZhcUhLenN1RkRfcGRXWldaaDJNZ3N2YmhZQWpWWVhJaFFobVd5RUUzMDZnZC04S1g2eXV6RU0wbU5Yejk4YXZSNHQzZWtkY1VSMURqaXJtb2xYRzlWY0prWlNzSHRKT2hzdFdWLXRBYXZRQ3lEZUpEeVc2ZDI1c1o1eUlaa0ZBakpGbDdPaHQ1R293b2ZfQlN4bFBxell3?oc=5"
    },
    {
      "title": "宮津でクマ出没の可能性（富山県魚津市）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSGlxNkJNU0hkaWh4dGFkR3lrM19CcG9mclU1dnhtMGJpVWhFX2JJY2RLaU9DX0hHQ1o1endGQnhTTXZDVU1BcEhxUlBwUTdEa2RhYXQ5UHFuMlFsX3BTWk5WT1J6dmJXTVhickJMUmFyd2Y0ZUtKWE9ERG1VTGktbVRXN1NDbFF6bHc2cElQdERLS2U0VWRWbWYzUWzSAaIBQVVfeXFMUEtwWkJFcS1aa3FMT0Y2R2J4b1NhUHp1dWxDREhrQ0EwTkhfbUVFbWtiRllwYXF6dlJ0eVpPcHpRZkFaTkhJNkxRNktMNVJnNk56aGljZk1kejVQd3M4Q21lcmtJOFNxZmMxRVJZdUN5OW9VdUoyUGx5clBKRllCV1lVOWk0blAyOXZYT0FNTVd5bVduQy1xYVdrRUFBRWI2RHdR?oc=5"
    },
    {
      "title": "クマ出没痕跡（富山県富山市八尾町福島）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLXp6amxOQ1F5SlNVWHRwR09PdzZRNXBmblY0ZF9DMGxaUXlhUmk5RzYyWmRqakRIVW90RU1ESmVZSlRkaVdTRER5YWpybXR1cVNSZy00X2hnQ3B1UFFRRWlfSWpycW9PYUR5c3hMOS1Eal9pdFJ6YVBQdmQwQnFsc05Cc20zMTZma0R0al9jSFJWTEhJTllhUVBuLUTSAaIBQVVfeXFMTWJMRnBBWU1xeTF0Z193NnA1Mm51S0szZ0d2cWwxUVoxOXJiLU9BaWc3OWg0ZUE4WmdHaVpfZVNjdHdEcTA5dHo5LThkc0JQQUlaZ1g1cnlRSm0tNFl6N2Rqd0tFUW1Yb1ZWM0V1dkdfOUlYYWx5UXd3TkhPcExiOTY5bkVxQ2dKWW9ubS1qTzhzcjM0ejIydFgtNkFpblNqaF9n?oc=5"
    },
    {
      "title": "クマ出没の可能性（富山県氷見市神代）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTFJqbXAyM3RKVG1uZS0tdWdCVC1oTEtoQnZtQllEdUVQY0QyNjV6RGpCeG1hTkswTkFIdThzU0hjSDRlLThYVmZtMUw0LWQ4ZC1xZWR0R1FWaEJYemZlT1lIVUI3Y0wxbEtxeDFjNnd3YnJTNXd3NU1HdTlYMkhQTGpmTUM4TjdJVzZqVWRBWlFuRGlyRWtsS3dwOGXSAaIBQVVfeXFMT3BXd0JXM1ZDTUxFQVBySDBRNVJXLTlGVi1qRnRBV04zcll6Rnh2Ym52WmNfUEtkamN0UnlZdl9fV0w4cFlXMzIyOUdPUVM4MjFpN0tKMjJVOG1JT3ZtV05GakltMTVBRjV1VXJrODZNbDQtNnVTaTVSVGZkNmp4dUFaSWNVUFg1U3ZzY1BBSXNmSm1lVHQ2cjQzTXQ5Tm9HTExn?oc=5"
    },
    {
      "title": "クマ出没（福井県小浜市深谷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNa0RFcFRvV1pVUHhENVRFbDR4MURqUG9VcWpLSF9wZUJGOEcyN3V1eU9kRVZTRnA0dHVpUTJ0WV9GUGNCLUNIUmQtMHpLUko3Y25ZdF9wdXJabW9CTnY2ZVg3ZDNPTUc0ZVNqZW5SVl9KSFRrRnNBak5EeDNMVTJVZ2NCaUQwcW8xMFpKaU0xZndPdTR2SjVPbXc1QlDSAaIBQVVfeXFMTUV4dmlzVGxNcFNEbWtaUnpCaUxLZnJfZ29HYjY2eUdReERPQV91QlNmYU1uemtXYmNuYUVrVXpzNDUxMkUtYzJRdEpEa1Nqbl9YanJRb2RqRktTTXY0NTg5VTlQMm5rQzMwVHdKellkbTJRZGJGZ256RkNRYXBlbkpxR0twRVhhSXFfcjF4Z2NmLTBvMHpXQ0MtUGoySGpBUy13?oc=5"
    },
    {
      "title": "道路脇から田んぼにクマ（新潟県胎内市）",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE9heVlYVVJjVzNfVER0OFFSVldyUmRoTVJZUGFKNkZUdG05T1VJeFB4SXJJVEJUdEpObk5pVEthSUNmODJU?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":10},{"pref":"島根県","count":6},{"pref":"宮城県","count":6},{"pref":"和歌山県","count":5},{"pref":"愛知県","count":4},{"pref":"栃木県","count":3},{"pref":"富山県","count":3},{"pref":"福井県","count":2},{"pref":"京都府","count":2},{"pref":"岩手県","count":2},{"pref":"兵庫県","count":2},{"pref":"山梨県","count":2},{"pref":"長野県","count":2},{"pref":"新潟県","count":1},{"pref":"福島県","count":1},{"pref":"奈良県","count":1},{"pref":"埼玉県","count":1},{"pref":"東京都","count":1},{"pref":"群馬県","count":1},{"pref":"山口県","count":1},{"pref":"滋賀県","count":1}];

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
        <span>対象期間: 2026年10月11日</span>
        <span>·</span>
        <span>公開: 2026-10-12</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={57}
        periodLabel={"2026年10月11日"}
      />

      <h2>主要事案：人身被害および緊急対応の発生状況</h2>
      <p>2026年10月11日の集計データにおいて、人身被害キーワードに合致した事案は2件、捕獲・銃猟キーワードに合致した事案は2件記録された。当日の最重要事案として、愛知県豊田市における人身受傷事故が挙げられる。豊田市小原地区（小原北町周辺を含む）において、自宅前および玄関先で59歳の男性がクマに襲われ、重傷を負う事案が発生した（※1、※2）。生活圏の直近である玄関先での遭遇・襲撃事案であり、極めて危険度の高い状況が確認されている。</p>
      <p>また、捕獲・駆除に関する事案として、兵庫県豊岡市において民家近くでツキノワグマが発見され、安全確保を目的とした緊急銃猟が実施された（※3）。さらに奈良県明日香村においてもツキノワグマの捕獲が報告されている（※4）。いずれも人家や集落に近い環境下での介入であり、地域住民の生命・身体への危険を回避するための措置が執られたことが示されている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生地域</th>
              <th className="px-3 py-2">事案区分</th>
              <th className="px-3 py-2">発生場所・状況</th>
              <th className="px-3 py-2">対応および結果</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">愛知県 豊田市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">小原地区（自宅前・玄関先）</td><td className="px-3 py-2 text-xs">59歳男性が襲われ重傷・負傷</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県 豊岡市</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">民家近く</td><td className="px-3 py-2 text-xs">ツキノワグマ発見に伴う緊急銃猟対応</td></tr>
            <tr><td className="px-3 py-2 text-xs">奈良県 明日香村</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">村内</td><td className="px-3 py-2 text-xs">ツキノワグマの捕獲</td></tr>
          </tbody>
        </table>
      </div>
      <h2>全国出没動向の全体概況</h2>
      <p>当日記録された総出板块数は57件であった。情報ソースの内訳は、報道由来（news）が48件、自治体等のオープンデータや情報マップ（hokkaido 4件、shimane 2件、tochigi-2026-mymap 1件、wakayama-kimino 1件、fukui 1件）が計9件となっており、全体の約84%を報道ベースの情報が占めている。都市部キーワードに合致する事案は0件であったものの、集落内や道路、田畑など生活圏への近接例が多数を占めている。</p>
      <p>都道府県別の出没件数上位は、北海道が10件で最も多く、次いで島根県（6件）、宮城県（6件）、和歌山県（5件）、愛知県（4件）、栃木県（3件）、富山県（3件）、福井県（2件）、京都府（2件）、岩手県（2件）となっている。本州では東北から中部、近畿、中国地方にかけて広域的に情報が分散しており、局所的な多発エリアと散発エリアの双方が確認された。</p>
      <h2>地域別の出没状況分析</h2>
      <h3>北海道</h3>
      <p>北海道では最多となる10件の事案が確認された。函館市赤川町での出没（※5）や旭川市神居町西丘（※6）、根室市温根沼（※7）など道内各地に分散している。弟子屈町の屈斜路湖畔では親子とみられるクマ3頭の目撃が報告されており（※8）、清里町では道路脇の草むらにいる個体が走行中の車から発見された（※9）。幹線道路周辺や観光水辺地、郊外住宅地隣接部など多様な景観での出没がみられる。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県（6件）、岩手県（2件）、福島県（1件）の計9件がサンプル等で把握された。宮城県内では色麻町四竃大原（※10）、名取市相互台東1丁目（※11）、栗原市栗駒沼倉耕英東（※12）、白石市小原新湯（※13）での出没に加え、涌谷町では田んぼを歩くクマが目撃された（※14）。岩手県では盛岡市小鳥沢2丁目付近（※15）や久慈市宇部町第21地割（※16）で目撃があり、福島県郡山市では早朝の時間帯に新聞配達中の男性がクマを目撃する事例が報告されている（※17）。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で3件（鹿沼市上南摩町（※18）、大田原市の路上での2頭目撃（※19、※20））、群馬県みどり市東町小中（※21）、埼玉県秩父市久那（※22）、東京都西多摩郡日の出町大久野（※23）で各1件が記録された。大田原市のように路上で複数頭が目撃された事例や、山間部から丘陵地にかけての生活道路沿いでの目撃が中心となっている。</p>
      <h3>中部地方</h3>
      <p>中部地方では人身被害を出した愛知県をはじめ、富山県、福井県、新潟県、山梨県、長野県にまたがり記録されている。愛知県では豊田市小原北町（※24）や新城市作手木和田（※25）で出没が相次いだ。富山県では魚津市宮津（※26）、富山市八尾町福島での痕跡確認（※27）、氷見市神代（※28）で報告されている。福井県小浜市深谷では17時25分に成獣1頭の目撃記録（※29）がある。新潟県胎内市では道路脇から田んぼへ進入する個体が目撃され（※30）、長野県では上田市（※31）および下諏訪町（※32）、山梨県では大月市大月町真木（※33）や早川町高住（※34）での出没が確認された。</p>
      <h3>近畿（関西）地方</h3>
      <p>近畿地方では和歌山県（5件）、兵庫県（2件）、京都府（2件）、滋賀県（1件）、奈良県（1件）の計11件が確認された。和歌山県では日高町原谷（※35）、紀美野町梅本（※36）や生石高原登山道周辺、海南市扱沢（※37）、田辺市龍神村福井手谷（※38）と広域に及ぶ。兵庫県では豊岡市の緊急銃猟事案（※3）のほか多可町中区牧野（※39）、京都府では福知山市夷（※40）および京都市左京区岩倉村松町（※41）、滋賀県高島市マキノ町大沼（※42）、奈良県明日香村の捕獲事案（※4）と、紀伊半島および近畿北部・山間集落において活発な動向が観察された。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方では島根県で6件、山口県で1件が記録された。島根県益田市では左ケ山町（※43）や美都町丸茂（丸茂トンネル付近にて午前5時30分ごろに3頭目撃）（※44、※45）、美郷町（※46）などで集中的に出没が確認されている。山口県では岩国市錦町宇佐郷での目撃があった（※47）。なお、提供データ内に四国地方および九州地方に関する出没・捕獲記録は含まれていない。</p>
      <h2>リスク評価</h2>
      <p>本日のデータに基づき、野生動物管理上のリスクを以下の観点から総括する。</p>
      <ul>
        <li>人口圏・生活空間への極近接リスク: 愛知県豊田市で発生した玄関先での重傷人身被害が示す通り、山林境界部のみならず住宅敷地内へのクマの侵入が現実的な危害事象に直結している。兵庫県豊岡市での民家近くでの緊急銃猟対応と合わせ、集落境界部での出没は極めて重大な偶発的遭遇リスクを内包している。</li>
        <li>農業環境・インフラ周辺での活動: 宮城県涌谷町や新潟県胎内市における田んぼ周辺での目撃、島根県益田市丸茂トンネル付近や栃木県大田原市の路上での目撃など、農地や道路インフラを移動経路として利用する個体が複数確認されている。早朝（島根県での午前5時半、福島県郡山市の新聞配達時）や夕方（福井県小浜市の17時25分）など薄暮時間帯の活動が目立つ。</li>
        <li>複数個体（親子連れ等）の出没リスク: 北海道弟子屈町屈斜路湖畔（3頭）、島根県益田市美都町丸茂（3頭）、栃木県大田原市（2頭）など、複数頭による出没が記録されている。子連れの母グマ等である場合、防衛的攻撃行動が誘発されやすく、人身被害リスクが通常以上に高まる点に留意が必要である。</li>
      </ul>

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
          <dd>2026年10月11日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-12</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-12</dd>
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
