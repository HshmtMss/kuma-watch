// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月9日 / mode: daily-report / 生成日: 2026-07-10
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-09-daily-report";
const TITLE = "2026年7月9日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月9日、日本全国で181件のクマ出没が報告された。人身被害は確認されなかったが、岩手県や宮城県仙台市などの都市部での目撃が14件あり、クマの活動域が市街地に接近している状況が顕著である。本レポートでは、地域別の出没傾向とリスク要因を分析する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-10",
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
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
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
      "title": "住宅街でクマ１頭目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQd1BPVnBCRVpfXzhrNnl4aXBsM29KLXRNTkZ6RW1nNFpDYVhIT0JmNWtjSVhfUE5OM3M1eFhpVWEtX2NTTms0QXVSYndlU1dwSUN5RmdDb1hlTmZaaUtQQXByZW4xR3hwNXdfWG9GbHdGUkJBY19OeVFBd0JnNkprb1JCRHVUWEU?oc=5"
    },
    {
      "title": "住宅地に一時クマが現れる",
      "url": "http://www3.nhk.or.jp/news/html/20260709/k10015173101000.html"
    },
    {
      "title": "学校給食センター敷地にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE54TzlNOW8taDYxczRndnd2WEhqT2tLcW9ZS1p3YUc5bGpGQU5RTXVzSWpKSlZBcl9xUnBfNXpNQW9WVDItWGphU0JmNktJQQ?oc=5"
    },
    {
      "title": "住宅密集地や給食センター敷地にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFAzTFA3U0E0aHpCTUl0RnFUTFE5T24zOWliN05KYkFPTkV3bkN2bm51RjEtSnpnVml4M0VUcjdjdmFxWmIzSW1pYmU3YWlBQWxLZU1sSTZLY2xOdnN1UWQw?oc=5"
    },
    {
      "title": "宮城野区の住宅地で2回目撃。同一個体か。",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9oR2hiZVlZd0djSFlOU0hJVjAwaElaaTdlclBmV2JWVGdLaUVDbE1SRWM0eEQ2dWZnaGVuNDhpdTBWaTE5R0ZDeHVKREtvSDl0VGNta0xaRFJKdTRWemNXSllRNFM2RTZnMG9aYlFBSTNnV3cyMEVtUkVRMlBRVkk?oc=5"
    },
    {
      "title": "深夜の住宅街にクマが出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1Od3pkWm9DclNvRmxlck9TNzhXYTNjWUlwWGtzSVdyS3MxUnRqT28xMzhQbnU2a3ZaOXdoY1h5dUtxTXJGdk5Dc0NYV0RKVVpNME5CLWE3M2N2YUQ1TGxhdUtLRV85UmV5ejJHWHpMSE5jSHQzNXY0Zm42dUN0RVE?oc=5"
    },
    {
      "title": "青葉区の住宅街でクマ2頭の目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE45NzVnMEM3WG51MUR2dTd0V053MGZ0aGt2V1pEWmpTcnJwRF9ETHpCanhlNlFFLWpjeFVUeVhKd3dGX0M0ekJBaTFCOWtFXzh3N05STVJhekMzLWROQWlrUk5NTGwzZTl2MjdGTHJQQUNpckgwQnRDZ1VaYUR3Wnc?oc=5"
    },
    {
      "title": "原町3丁目で熊が2度目撃される",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5aaXJDQ1dkWjZyLUxXYzVEbUotdnhYeEdFa0cxa3d5aWE2cW9salNxekF0QWxEZ18yWnJkQmFzdHcyb2RrbmFXWlFlNkpMVWRZWU81R2NxTnN3RzVLMmZfbg?oc=5"
    },
    {
      "title": "森林公園の駐車場に親子クマ",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9DUDg4RlBOLVc2ejk5T0k0THlBRlZjT3ktTElxSzh2Nzd6WFdwYUFnLUtuTldkWmRsNWJKLXNBSllWTFVDVXJQeWtORGlwRFFNWHJSMklYN3lZM21PbkhUQzR3c0RaVlk?oc=5"
    },
    {
      "title": "背後から忍び寄るクマ。距離約180m。",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9LbnI5aWkzSmhWV1BRc2RUUURFZE1OZmE3NUpFN0NxU3FHdHVTbkFtUE1zR2VjQmdQUjZzbm1FLVJsaTZFeURwOTY3VXFWdw?oc=5"
    },
    {
      "title": "浪岡のため池付近で親子グマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNWGJvZ0ZCSzR3c1cyT1hZZm5YQWVxRmZhZ1dUNGRUQWlrT2djV0xrSENtUU9qMVNQNTBIUU52bjNQTFI3MWhnaElEanNidFJrdkkzbzZUWld4Q05nbmpNb3FtR3dnbXdGYi0yZnlIWEhiZDdGWXE3UHlqYnIwVHlCVm8yMy11YnM?oc=5"
    },
    {
      "title": "羅臼岳で登山者を追いかけるクマを確認",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9VNGNXT2xEZGFDRjloaG95Ujk2WkVyWlJHZjhKM2luMkwzZ2tNWTdDSlVfd0ZOZjNQSGh1Z0dELVdsU2p4SnA4NE9yQkgxdGtubTZmM1dQQ0o1ejR3d1gzY1ZpUUNpNUZBbnoteC1JMEVEeWpuRVNaZkNUcw?oc=5"
    },
    {
      "title": "背後から忍び寄るクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5rVm1BSjJ1cGJEbjhXT3kzaDZqQnNqWlJnMFJQbm81Ulo4VnZwR0VvUm55WXJ0V0Y4d0tYcGFRdjJWcENjTUJHV05oRllyVmFyWXVDcFRBQzNvT1REVWNLaE9kRWVXWXBmTHVVTURGSGlxc0dBdEp5d3FxUnU5akk?oc=5"
    },
    {
      "title": "東大沼野営場付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBISVRiVi1mNDJ6VXU0RkgyS3JsMHhwVTcyVjVPaTFiRmxOcnZFakNZYnBoM2kyUWFBMzgxNzF4VnBHLTBOdDE2UURPNFBxbW1CakIyWkdtU2ZjbVVhcFI0UWhWUkFtX0xhUlB3VFBhay14SS1OclhrLVdvWjjSAYIBQVVfeXFMTkg3UFUyQ0lIaTZ3UzAwOXNvMUpfYTN5RTAwNlQzTW1XSlZTbi1iNFZxTzVkdEZpUUxsUDNVSjk4M3NldXd4QnpDRjlfaUdld0I0bW9ZeVlXV1ZkSm4tTFNqTFdRUVJxZE1rTVRyMENNZ0JtaVRaRUxsdkJvS2VPTjV4UQ?oc=5"
    },
    {
      "title": "三峰でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNd3lKOUEtOHFaRDdCcC1nVmtmN0ZxeWdfcGdpeGE5OVFXNldpNlJ0WFhrVXRuRDU0TXVYTmFFbjlQdm1tby1VSTdvQmxYbzlrV0NPOHJ2ejJZbmNUU2FUbzd1cUo3LVZqdWR0UjVkcVBrakZDdWRBTzhPN2x1Z3hLTFJuSXJnTFhmekZqRnBLdmt6ZnZCeEY2Z2o1ZEPSAaIBQVVfeXFMTTJqMmpZZ3VfMkNTc2lhb19YWE1UNW9tdVdGY3R0YzdJbHVPNVR2eEdKUG5MbUlZQ2lIUEhWQXhOUG0wck90TXhHd2pFcDBLaVZVRGhpX0w1Y2gxdmxoTlJBUnY1b3gxR2RsRndoMTBsbHYtUGM4dDNxMzNMMk5RV0VJal9OWXRMY1ZEdS12dE9RUEp3dTdaQm9EdXZubXQxR1NB?oc=5"
    },
    {
      "title": "路線バスと熊が衝突",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5CYzJYeHRCekZtZTB6eWN0My00bXh4WS1pNjlJeFJ1azdHUE1KY2J6cC1nY1VWdVFhVE1XazA3RElzM0UwLXpMaW1SOE9pelJlZDRkbUw4REY2bVBjUlE?oc=5"
    },
    {
      "title": "市道でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1xU0F3dl9OQktja3VQV2NuTjJua1ZGQ0JIbFlmUWo1ay14NXFRS1QzNlFrbFJfVzRFQ0NSX2VJTjFZUktXd1pqZEdNdGtFdU5DUktYVW5vS3hjaUU?oc=5"
    },
    {
      "title": "高久乙でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQa2hVWE13cXBTNUFhZWFYSVFTSGFHR0RTYUxmdkZobGZCQmRYVjdHUnFmSEsyWHVrUDhlUGxKWEVkdGJ5S0tRV19Mb01qS3FJVjBmY3BJVjFRd2NhbGNLcTFObFI0d09idHM2VC0zM2Y2VXZMdThKMk44ZzFEV2ozYjhENGJaZU9VWUFmVWRnRGh2SDJXcU1mNzNLdnnSAaIBQVVfeXFMTnNYcGxoRUJZWl9qZVN6cU1IdFpPVnhRRXBBOG0wUm43QVp3YmFrbFA0NXdDY29GZGRRZE1MVE9KU2JkMUs5MEtkQmRGZUZQcWxJRHBDTGl2dzE5bGljZWNzZTNMNnJub3dRZzlvTXpKeng2RTdFRE1tcFF6V081WnEzOVhSdTFvMzhoUXRodUhuTl9yS2tabzZEM3R6UzBuNGZn?oc=5"
    },
    {
      "title": "利賀村百瀬川谷内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONUFXSDhJRW50MGlaZ3cyZ1pqSHZsaXk2TTdRMDJkYkt2aklwb2lKSHc5UWQ3dXd0QjV5YWhmaXRLb2hxdG5rMDhHWHFtVGtSeGJ1a0dmS3JtMnByakVtbFZNb0t4QlZ3MXBUdWc0WTVHTzd2VHE4XzRqZ0JvQmZyRWhBY2Q0RFZLNXZSZmlKNVdkTW5HRXMzVzJKZFgxUXVLOF9IYmM1V05faWNLT2o3ajlXNlRCZzRvOWhLa3U3V3NqV1h0eXhLekpqWXVvMDkydkkyRy1YLWdwWXlpS29yWmczeEhUMGVYOEszdlotS1lxQdIBogFBVV95cUxPUmFzQUFQeHhzSXhPVWdUN050bzVBWC1HUG1TSTNKVjhwSmhkZl90R3pGeWhxdHFnN2NRMUo0b01FbG1YR3NiNGU1R1ZWcnVEd3B2QkZTdDhrLXZoNDJ2SExocHlYXzhUdXJIV25JNlZobm54SHcySGI5UTFhNGZtaVNCUDFDOVpGaGZ1dzB0azF3dFpVUVJqOWlVUzdTQW9ybFE?oc=5"
    },
    {
      "title": "ＪＲ鎌手駅から600m付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE94Vl9lZXdXMGtyeXVkRkVaaVFzMXhTY0llWG9JX3BoQ3hpZUQydnV3bHQyUWk4M1ZOejdzYkdPTlhUckxPRVZDTVlVWEItdnNnckRRVXpHd1ljaWhkVUNRN29VdWpSY1BvdGwwTHM3bGQzdU92OG43MlF4NFlfenc?oc=5"
    },
    {
      "title": "浜田道・旭ＩＣ下り口付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE94Vl9lZXdXMGtyeXVkRkVaaVFzMXhTY0llWG9JX3BoQ3hpZUQydnV3bHQyUWk4M1ZOejdzYkdPTlhUckxPRVZDTVlVWEItdnNnckRRVXpHd1ljaWhkVUNRN29VdWpSY1BvdGwwTHM3bGQzdU92OG43MlF4NFlfenc?oc=5"
    },
    {
      "title": "米原市西円寺でクマ出没可能性",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNQzB3QlYzekZxZ1BIQks1NTRWZE5UNy1iVVhadGduYk50T3AzMVBYRmhhSnozck0xVV9scTBUbFljVGwyZTA0UnppU1NwQnoxd0I3QXBpRElKLTFqM0VZZlJqSURJSDdVWDhpdHlxeWs3d0hUcjIyVHpuX0lId2ZMYjBEcXZGQU53UlBaaFE5U2dnUmxXQnRSbHVsSXNUTmM4U2fSAaIBQVVfeXFMTUMwd0JWM3pGcWdQSEJLNTU0VmROVDctYlVYWnRnbmJOdE9wMzFQWEZoYUp6M3JNMVVfbHEwVGxZY1RsMmUwNFJ6aVNTcEJ6MXdCN0FwaURJSi0xajNFWWZSaklESUg3VVg4aXR5cXlrN3dIVHIyMlR6bl9JSHdmTGIwRHF2RkFOd1JQWmhROVNnZ1JsV0J0Umx1bElzVE5jOFNn?oc=5"
    },
    {
      "title": "美和町生見志谷でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVVk1TldOUldvb1ZUeTZOWFZJeXVsY3ZNY0VXcHVlek9Kai0zTmhLUzJOTHVCVE1oeFhnbnFmMWNmYzZLRlY2c1B6NjJJcWJuTU5ndE8yc3czdS1TLWwzRml5QmczemhUYXBmRzlIMnM2SEVlRnZMaWZpVGxMR2xleHlWdDRwQmlUSUhFSVVuNjdPeXFqc1J3S0JWeG7SAaIBQVVfeXFMUEp6UmkxY1dJY2NMdTFReHlZZXFuSV9abC1NVHI4b0Z2djNJYkcyZ0s1cVBuTGZhNkZlMVNnVWJibE9XVXFZTFl4ZTh1TG9sMndhY3RST2RCcVVJSXotVndQWmtVaWhxV0ROSWhHVWJmbUllTmJoSkpLd01EUDVzMWdPcjJVWEFobExNNzl2a3FNblFZdEYwbUVSQWFQYlh0UGN3?oc=5"
    },
    {
      "title": "木子でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPazdKS3M4dW1FWWN3S0oyX2J0RzJhQWpLMG9hQUxLN0JpS2dYb2tKS0Fab1NaSTY2STN2dVBFQUxhYV9nNFFkc1JHZmhocU84dTNITThNM2N0Z29mZmVuekoxYUxzNXk3d3B1UUdZc2ZveEFMakNPWDJtTWJhXzNxLXRRQUhoaHRGM1l5cFZVeElpVm1aSi1GcDlNRGYyUVRHZGfSAaIBQVVfeXFMT2s3SktzOHVtRVljd0tKMl9idEcyYUFqSzBvYUFMSzdCaUtnWG9rSktBWm9TWkk2NkkzdnVQRUFMYWFfZzRRZHNSR2ZoaHFPOHUzSE04TTNjdGdvZmZlbnpKMWFMczV5N3dwdVFHWXNmb3hBTGpDT1gybU1iYV8zcS10UUFIaGh0RjNZeXBWVXhJaVZtWkotRnA5TURmMlFUR2Rn?oc=5"
    },
    {
      "title": "畑中２丁目でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdXlxa0V3d3YxRnAzOGxON2JDTTZvb3d3TG9uaUVobXhUYWRIWGtXeU5xZUsxVTQ1QmxXT29rb2w3LXdndDMyU0RjVERKNC1YT3VqV0w0V3BaNmtxNFhYMmtZM2tNbVdFVndlYkdZa21fVnV5OGNNT1lzQTVnbGJzVWdJcmZuSVVUQ3lBQkVPZUNRYzdNMkVMNnlwUk7SAaIBQVVfeXFMUFVjQU9ndlFuN3NlbDQ1MURJZHJfS05NenhBVGhlRTNCV1pTWFEtT0lyS2FjUFFoeE9mNW5qLXBNNFMyVDZ4ZjU4VC11aXkwOUl1bVhudFEtMUFtUkVWVmNjRlc3eHktUmU1Rkg4T2trcE5SNkJ1X3BTa2ZZdm44R1FPRHVWN2U2T0RyaUdLcDBORWdHR3FSN3E1Mzd6WjF0dXBn?oc=5"
    },
    {
      "title": "大久野でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTnJtOFdvVE1XVzVkS0FPXzJ1ZTFWSlRVOWlmbWMtZzNGRTU5b081RjFqMDRNdWJkUmQ4QTVVOWdqbVVXdjBhVDBsbUR4MzJfVmV0RmJRcnNydVVDNV9GejRGVGhjSklnMHRic051RG9jVlBvWE1mSml2blhWUVNKUktJY2FMS1c1eWh2QVNjMHMxY2d3Zkt0bVRSd0HSAaIBQVVfeXFMTjRieURfQUFEb1YzWXJHWTNpcVRVTkEyT0tVaUVpd0xBX09XQ0hjckp1UXFZQnpqUy1XUDZnOU43NDhvWk1VQjV3Q3gxSEYwYk9ocjBSR3lZajN5Z1ZTbk1zUFJHTjM5TEl3N29GQkMyUFBlMmotbkhtcUJpTHJzUEtpNUR0em16RXZCVy11RW5CMVR4YWlsQTJmYUZXZnEtdl9B?oc=5"
    }
  ];

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
        <span>対象期間: 2026年7月9日</span>
        <span>·</span>
        <span>公開: 2026-07-10</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"岩手県","count":31},{"pref":"北海道","count":26},{"pref":"青森県","count":18},{"pref":"秋田県","count":18},{"pref":"福島県","count":14},{"pref":"新潟県","count":13},{"pref":"栃木県","count":11},{"pref":"富山県","count":8},{"pref":"島根県","count":8},{"pref":"宮城県","count":7},{"pref":"京都府","count":6},{"pref":"兵庫県","count":6},{"pref":"石川県","count":5},{"pref":"山形県","count":5},{"pref":"埼玉県","count":4},{"pref":"長野県","count":4},{"pref":"山梨県","count":4},{"pref":"群馬県","count":3},{"pref":"鳥取県","count":2},{"pref":"東京都","count":2},{"pref":"滋賀県","count":1},{"pref":"山口県","count":1},{"pref":"神奈川県","count":1},{"pref":"静岡県","count":1},{"pref":"福井県","count":1}]}
        total={200}
        periodLabel={"2026年7月9日"}
      />

      <h2>総括：都市部への接近と潜在的リスク</h2>
      <p>2026年7月9日に集計されたクマの出没情報は全国で181件に達した。人身被害や、対応としての捕獲・銃猟の報告はなかったものの、都市部での目撃が14件確認されたことは、この日の動向を象徴する重要な点である。特に、岩手県盛岡市の住宅地や学校給食センター敷地内（※2, ※3）、北上市の住宅街（※1）、宮城県仙台市の複数の区の住宅地（※5, ※6, ※7）など、人口密集地での出没が相次いだ。これらの事案は、クマの生息域と人間の生活圏の境界が曖昧になっている現状を強く示唆しており、市民の安全確保に向けた対策の重要性を改めて浮き彫りにしている。当日は報道機関からの情報が148件と大半を占め、市民の関心の高さも伺えるが、自治体等からの公式情報は0件であり、情報発信体制の課題も残されている。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では16件の出没が報告された。特筆すべきは、観光やレクリエーション活動における遭遇リスクを示す事案である。斜里町の羅臼岳では登山者を追いかける個体（※12）が、七飯町では人の背後から約180mの距離まで忍び寄る個体（※10）が目撃されている。また、同町の東大沼野営場付近での目撃情報（※14）もあり、野外活動における厳重な警戒が必要な状況である。</p>
      <h3>東北地方</h3>
      <p>東北地方は全国で最も出没が集中した地域であり、岩手県（31件）、秋田県（20件）、青森県（18件）、福島県（9件）、宮城県（7件）の順で多くの情報が寄せられた。山形県でも複数の目撃情報がある。特に岩手県盛岡市では、住宅密集地や学校給食センターといった都市機能の中枢に近い場所での出没が複数報告されており（※2, ※3）、クマが都市環境に誘引されている可能性が懸念される。宮城県仙台市においても、宮城野区や青葉区の住宅街で同一個体と思われる目撃や2頭の目撃が報告されており（※5, ※7）、都市部での定着リスクも視野に入れた監視が求められる。秋田県、青森県、山形県、福島県でも、民家の敷地内や山林に隣接する地域で広く出没が確認されており、地域全体で出没リスクが高い状態が続いている。</p>
      <h3>関東地方</h3>
      <p>関東地方では、栃木県（11件）を中心に、埼玉県、群馬県、東京都、神奈川県で出没が報告された。栃木県では日光市、那須町、那須塩原市など山間部およびその周辺での目撃が中心である（※17, ※18）。埼玉県秩父市でも三峰などで目撃されている（※15）。注目すべきは、東京都青梅市の畑中２丁目（※25）や日の出町大久野（※26）でも出没の可能性や痕跡が報告されている点であり、首都圏においても山間部ではクマとの遭遇可能性を常に念頭に置く必要がある。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県（12件）と富山県（8件）で出没が多かった。新潟県妙高市では路線バスとクマが衝突する事案が発生し（※16）、人間の社会活動への直接的な影響が出ている。富山県では南砺市や砺波市などで目撃が報告された（※19）。石川県津幡町の森林公園駐車場では親子グマが目撃されており（※9）、子連れの母グマに対する注意喚起が必要である。その他、長野県、山梨県、静岡県、福井県など、広範囲の県で出没が確認された。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府、兵庫県、滋賀県で、中国地方では島根県（8件）と山口県で出没が報告された。いずれも山間部が中心だが、島根県浜田市では浜田自動車道の旭IC付近で目撃されており（※21）、高速交通網周辺にもクマが活動していることがわかる。京都府北部や兵庫県北部での目撃も散見され、これらの地域では依然として警戒が必要である。</p>
      <h3>四国・九州地方</h3>
      <p>提供されたデータ内では、2026年7月9日において四国・九州地方での出没報告は確認されなかった。</p>
      <h2>リスク評価</h2>
      <p>7月はクマの繁殖期にあたり、雄の行動圏が拡大する。また、春生まれの子グマを連れた母グマの活動も活発になる時期であり、実際に青森市（※11）や石川県（※9）で親子グマが目撃されている。子グマを連れた母グマは非常に警戒心が強く、攻撃的になる可能性があるため、遭遇時のリスクは極めて高い。山中の餌資源が端境期にある場合、クマは匂いに誘われて人里の農作物や生ゴミ、残飯などを求めて活動域を広げる傾向がある。岩手県盛岡市の学校給食センターへの出没（※2, ※3）は、食料の匂いが誘引要因となった可能性も否定できない。当日のデータで最も懸念されるのは、人口圏への接近度である。東北の主要都市である盛岡市や仙台市の住宅街への侵入は、偶発的な遭遇から人身被害へと発展するリスクを内在している。路線バスとの衝突（※16）や高速道路IC付近での目撃（※21）は、人間のインフラとクマの移動経路が密接に交差している証左である。人身被害の報告はなかったものの、いつ発生してもおかしくない状況であり、住民への一層の注意喚起と、自治体による効果的な予防策の策定・実施が急務である。</p>

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
          <dd>2026年7月9日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-10</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-10</dd>
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
