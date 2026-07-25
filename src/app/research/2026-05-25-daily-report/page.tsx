// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月25日 / mode: daily-report / 生成日: 2026-05-26
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-25-daily-report";
const TITLE = "2026年5月25日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年5月25日、国内で31件のクマ出没が報告された。富山県(6件)と島根県(5件)で特に多く、人身被害は確認されなかった。島根県では国道沿いで幼獣が目撃されるなど、全国的に人里近くでの出没が目立ち、初夏の活動期における警戒が必要である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-26",
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
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
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
      "title": "富山県 魚津市 / 東山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUFBrS1hGM2hjazhDU2p6UEp1QXpZaDg0MktmVDhGYUlKY1dpWElfc0J4elF6UTN1Sm9zbThHbm9aTFlGY2NBWWxybnpncXRRbkRuSzN1SFNZMTJ1Sk91cVl0SWRPWl80Ui10RDFwdlVKMHJjQjRUU0JvVkJkb2Itei15VzNqeEwzd1J2NU0tUjNxaXFLNWVFNFphbGPSAaIBQVVfeXFMT0x1d3pKdmY1aC1ZbG9RSXZ3a0dCSUNDcjZBWUNpbVd3MDdnWmxGSmlWVzVoVWljRzJGaHdLVWlLT2hZeWlndl9jVV9UdEl4OHJ1U1ZaNVZ6b2RCMEVhazgzdFBBQjV0ek9XVkljalZtU2dxdEtJSWJydmpWa0JtaWh2OXJfR2IwQkV3Ry1EaGZzVXhtckdwbzBDWmxoNHJiOWdR?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県 足利市 / 足利市でクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5WT0tRVUlRMEpQWU1jdmt1dk9lUnBoQ082RUgzRUtjQkw5M2tQeFhwUHNRTEhncHBjb1dJZGJiTmZHcTJUMUt3ZTNxYkNTcDRWNDlJT2ZsUEllaXJUZWowcXhR?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 秋田市 / 御所野地蔵田４丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSklLZk9NU19jbVhEZEQ1QTV0RXVVbEhReXZ5TzQ1c19mVmhwOHdNWXU5TFZkMExDZnFzQWlybkpkcm5QNjVXaUx1TWFZRmpYQW9tcjd5MDlQQ3ZqcWlHT0pvLXczY3k2Q2JoRmtGQjk3TmZWc2RmVzlVdld1Y3pYbVA2TGpiaUMxcXk4R2ZicExsX2pMck5VUG82Mk7SAaIBQVVfeXFMTUoxc1JiNGt5OFRmSmY0cUloR2wwTlQwanlRRmFvZ3J2c2xnVUUxOElIelBKSWk3NWxGUU9laTlQUmhmZkR2VUFzZWhaekpEQmdiOFItV1c2bVhCdHZpS1B4cUd6Mkt2dXV5NjZ0NFJPSnBuVHFKWDFsYnpIa2w3cGI4aEhVT2xkZ3dWUUJURDJ0cGkzdnJZSVFuVm5uOTVhVnB3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 横手市 / 大雄田村でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRURqVkM5VzZZVHRXeDdjWDV4MUVRRzhtMm5LRlBtdlJITnBrbHFMS2xaOVhuMWlfM1JjRmNqX2gtRG54SV9FWFhTM2FiT0FMMWhZeUJTc1pYSUtBMzE3Z3puX09mTmkwMVM4SlhlSWdhMjJkbzBWZ2N6bFJmYWRIUFJ5OTNTa1ZDTmlXaVJxUVBlcW5VSmxzZ0M4NHHSAaIBQVVfeXFMTmxiUU1MeEJWZzhPUUpGdWpSUjZBbUZlRm5mcU9MdzhvMTFwUV85OW1RaEZBejdMcF9BYkRlcnpveUZIRDMtS0t0dGZ6OUV3eGRWRDc2XzVrUWVfREllOFJQTzNfT2VDVE9qQ0NZRTNtc253Unl1d3RacXJrZEhzbEg5ZkJ1RWlXVWVEeXR3YlpDSE53SUNfUzlWS0s3LXZ4d1pn?oc=5",
      "site": "news"
    },
    {
      "title": "青森県 つがる市 / 木造筒木坂鳥谷沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONjA3dmxMYmFFdkRpeW1xdXZYWEd5bUdZcXc0dTAwb0JmMmhXUy12SFNxcW5BLTdOb29Gazh4LThKZy1OX0JMX2d3Ry1aQ1J0dzhtSzh3Q0lQaU94SENxNXNndl84RzFpMmMzalJ3UDVtaGZBSHF5V1V3SUlzTVFzYzFoY0pvUmtuOE1wYUNmbmlxMmx2Uk91MFZlWTHSAaIBQVVfeXFMTWp3OXZHdHdsNEcxRVY3M251aTYwQlhGSDhycnE3d1RtcWNLRUxfYThIaWZsSzV3ZHFtVlpaSXpuZFhBOExqYmlldFlITlFwTi1XcWxHR2Z4blIwZU93aDUxMUplekx3MUkzMXl5TXFSQVF4dGRaa09vemF1dGUyR2dTSWM2VGduTzlwUl9kR3VZLXpHSkJ0U0RnN242TUJWcEJB?oc=5",
      "site": "news"
    },
    {
      "title": "青森県 平川市 / 新屋町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOF95cUoxWXBIY1h0N0lQNks1cGo5OGd2MW0xTGhVbnlyM3FtN0pvM0NfV3NxY1JURVA3Q0c0aEd6ZG0yN0ZSTW9EYXBCemV4N1VWUndIWjU2aWdIODhxMERnUWc2UWRkYmZSMk96cmtUa2JBMl8xTGtxWkl1UzlQT3ZRV0VKMUlVbG00WFloYmRQdk14Sm4weEJqYznSAaIBQVVfeXFMTVZsVUV5VTdzcndGMHRKa1ZXMGY5NTZ5cnhJRUs5QklTVUZvaGNTOFRLekE5QW8wZm84cUVJRndBMlVTVTZPdTFyMEMwN0dCaWpWd0dtS00ydWJXSU1uMGppdkk0bTZYNkpuS0dWTGFIcjFIMWJzbGhfZWNtS2dPdVRWa2JzSktqbjNIY0Q0allFemtSZXI1Rko4bDdJRW9fSFRB?oc=5",
      "site": "news"
    },
    {
      "title": "青森県 平川市 / 町居でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONnZmWmVCaDNOaHpEOEptNzN3ZnVLaDRmQUpaQ2hLMWFaV1JUZXNZY3hDbk5KZmUzU1RmemxzSi1QTmczbGpQMnNuUXJ0bHBCNFV4VjgtcG1ncDREVkEtSTJodHF3YzIxdjhHYWRHbnkzU3R4VVdkT0tpVE8tWjhWRkFUcGpxTTNqT1d2QXR6bzdVNkI3cHNrbEFFVVTSAaIBQVVfeXFMTndpY2w5WlNjYnI3cmdzX0dSVVdSWjRfaVN5QkpqV2FtRWdWWllMd0dtWW1nNnJCY3gwaC1NSVJCd1NzNVdRU2VrVVA0SXVMOW80VDU3RjFxOWlxSldabUF4ejZRdlVfeVNrM0dINzN6ZERKS2xPekVOUTFsZHpMNjJNUWVrb3lLaUViaEtQLTRSNWNZZXQtMHVzVkxWUXoyV3BB?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 千歳市 / 真町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPU25heTRiWUdISEp1Z01vbFFNYWQ5NW51LXc3bGlkczhEaEJaaUpheXdFWnNRSW5uZUZfTG1laU5wcEZIQ0g5ZmtxZUktVDRZT0FaN1R5c3BJTWFyNGpMM3RSdzJVR3NQeVhKVVpWU3JzZW1sbWQ2TG9PbXluM2tnekV1enUtdkQ0c2x5eEpMenFzZUtiTVFFRllzSTDSAaIBQVVfeXFMUF9EcVk3ZEtyLVZOZ3h4V1BSMGx3eEhOWlNnVDVpaXY1eUVVSkowS01FX296M0dNNXBpTllubjB4UWhtX0tFYkhldGFNWnZIUE9YU3JEeW5uM2tuMGF0bUdOazZvS2xzWEo3MlRsTHhnaGR0czRXalFIMjNJQ3lFTW4wek1SVkZvUlNqVVo0MWw1aDRTenhzV3BBcXZ3LW9kU19R?oc=5",
      "site": "news"
    },
    {
      "title": "京都府 京丹後市 / 峰山町内記でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ1ItSnZEX3RfRTlkbVhDTWZ4U2xucjRfLWY2UFEtNTJ4b19ScEtJTjZzVnhEdXZUQ3dRVWtzZURmS3dYMWxQWTRlLWJ2eml1ekJyMjZncW9qcklfdUZ0VWdQNHRmTF9HT2xHcnl0a0swS3ppTkw4TUJJUURrUG9XYW1lNU5OOWdreGpuNWFSZVhTTUZiMFlqdWVxYknSAaIBQVVfeXFMTzRPUmtQMUZnR1B2eEJkZGl1R2JqUmZXTWo3TG9OdXRSV0k3WEU3VlpDX2RnMXoyWFFWSm1lbXJ1Q0ppeENVbkJwRC1rMzVaYUFDNXFwRk5zelNjTWJrTGYzTHlSMjcta1huVEVLYW9WMWs1NUFWY0swMkpFNXJ2MWVOcTZOOXAwR2RpeTNLaUV6X3BEMHE4d1p2ajhlb3M2WkN3?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 久慈市 / 川崎町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeVNzMjgzblZRUk94Q2gtT1FFNjZWTm5WVXJVU3d4dC1BaXcxQ1dXb25kak5BeGJTYk1fcTR3Y2M0YWg0TTBPb3FPYXBWcmZYZFg5Z0FuLVFyWHMwRG9QREJERGh6RG5NUG82Qy1NWExTbzRNZ1V3TlRZNUhCX3hJcFUxNDNWZm9kbElMLU5HWFV5ai0wMHlIOXR5bGLSAaIBQVVfeXFMTXBjNlZYQWhta1pMbVdQRkxnR1pJTlo0VUJNX0VZSXJjRVh2WDN5Z05PRmpRTWxXUFRWbHlvVkljd3dHb3V2dWd5a0UwWnZuSWdUNzF3NHJYdllnV2VodWFXM0JSdW5XTWJoQ2N4ajBQeHljT1V2S0FOeFc0OUgyYWY5amlKaDBlazVKVWxEbW1YVmtiVGtzUzJXZWZhM29KMXd3?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 奥州市 / 胆沢小山赤堰でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNVk8taDZBS2pCaWF4emtSN3d0OEZ5endJOGkzWUZKUVAxZ1cyUmI5M2M5UjNDRkVRa211TjJjb1JPcGxHUVF0TEVtNUdGX0xxTUpWaGtYT2U5N0dlZVdtb2ZtVWVrYnJWOTk1UDlxYWlVQ2tOTHpqZlBiZGh5SGQxb0hEQ0pNdnRPYXlEOFdTel9ZUDJScUZXWjN4Ykx0cWczMVRvTVluSXcyQXhCajNz0gGiAUFVX3lxTE1GMGhaeDI1ZkdUYUhjTWVEaW0zbXp1YjB3aEdNU21UN1FkVXFuMVQxLUtRUzhaOGtsdXFyZEtQU1V6RFpfTFdyYUdQU1p5Q3lZQnIwbGZwdEw3QzJfX24tX2ZVcDlYNEJIT1FORThyRGRpVlg5bkR1T2xobE1kYWlPTC0wd3FJejE1VWxJWFIybGVMdkh3XzR2RjN1OG1pNG5TUQ?oc=5",
      "site": "news"
    },
    {
      "title": "福井県 越前町 / 青野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMWh4YWFTdmE0VWVBb1poVGlMcjdEWE9odTBHWU9lU0UxZUp3Nlh4WDI4cmRUczUzNGVoRlB0Zi1uUzc1UWZxYUVlZ1p4T0laMHRlQ2JjR0ZuZkg3dHJ6UlI2QUpyZUhBbEJFTjBrcXlxLWo1bVExQkwyUU5wTW9MRDlWWUNuNk10QXRZUWVxLVNmM3pGNWlDQjRpZjbSAaIBQVVfeXFMT0N2Wld4dTJPblFkYlo1WkpSVVRhejFCbldiOWlGLXRpb2dvVnRBYlpuMXRZQV9QekFZclM2bTd0aXQzTF9rMXItckNPOHFOVWlRRUpPYXVZRGQ1QlN4RGJ6Zjd6MWR1elBzVlRDOVBscUYyMElHWnJ3UEQ5OWpNamxwcVdXZGhUWHozV2dxdGM2RWZvSGJxX05oRjgwWGFfdDJ3?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県 丹波市 / 青垣町東芦田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT1lYbG14N3I2N0lBRnM5V3NvN2ZtcGdVV1dnM3Myb1F0akJ6Tnd2UjQxMDYxLVVtelFDdjQ0S3ZVLTg3LW4zM1RxMGtTa3lVX01lbjRQRnlDd0JvQ3NyOTFaS0xSX3YtVlEyNzJ4U3BxOXM5Z1BKLXRuWThOY0ZQb0o2eXlXU0FUQ2dHOUllUzFDRzV4NWlsOGtSdWTSAaIBQVVfeXFMT0xUVlRUaE9HZjdCeldERXcwZVh5VDI5Qm9pMEtZTnEwMzExcWk3U0ItYXRSMDFGMnluZ0FfbGF3X2ZPSU96djRseWlBdExtYjlxTnpybnVjbG9ONHJMbHEyV0tHSUlKV3ltRWRxS0xyTGtlRW9YZERHU0swZmpwNld3TjBxMzF2U0F1eEczc2RuRW9ZZUZOcXgweVAwNzEzai1R?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県 朝来市 / 立脇でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcDA2ak5VZWh0Y1BsNXdHM1JtU3JJc1djZEpqWTNLM0VNcEhhZ3dHalFYZzNzaE9MdndoS05LSEgwbllHeUlqeVVCd25NWXYwT28xSThJQWlmUUY2Ukx4RUw1X1NZNVZHVG9aWnlBSlBSakxfYXZOLUpzbXdSaUtqRWhMV2RMWEhUQk1rWGFDTk9vX2paV2R2REx5QjHSAaIBQVVfeXFMTXFjcllXQ05GWmFSR2U1Y2hFek96Ukw2MDEzUElzRFBza3lYT3h6Z2dsTEVoSy1SMC1hYlY4YlNWQW9Tdmgweno1LWJmbkRteXNCa3ZON0tndWRwWnVVa3d2dHBhbVpSd04tM3JtanQtUFc2OW9pZ0RnT2RfUVRlXzM0MUFxTWp6ckI4ZTVzaGxWYVRiMDRGNUZFZHBhU0VGLXR3?oc=5",
      "site": "news"
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
        <span>対象期間: 2026年5月25日</span>
        <span>·</span>
        <span>公開: 2026-05-26</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":43},{"pref":"福島県","count":8},{"pref":"富山県","count":5},{"pref":"島根県","count":5},{"pref":"石川県","count":4},{"pref":"新潟県","count":4},{"pref":"北海道","count":4},{"pref":"静岡県","count":3},{"pref":"山梨県","count":2},{"pref":"岩手県","count":2},{"pref":"栃木県","count":2},{"pref":"山口県","count":1},{"pref":"東京都","count":1},{"pref":"鳥取県","count":1},{"pref":"群馬県","count":1},{"pref":"滋賀県","count":1},{"pref":"長野県","count":1}]}
        total={88}
        periodLabel={"2026年5月25日"}
      />

      <p>KumaWatch（獣医工学ラボ）が収集したデータによると、2026年5月25日には国内で31件のクマ出没情報が確認された。情報源の内訳は、報道機関から14件、自治体等が公開する情報から17件であった。本データが収集した範囲において、この日に人身被害が発生したという報告はなかった。また、捕獲や銃猟が行われたという情報も確認されていない。</p>
      <h2>主要事案の分析</h2>
      <p>当日は人身被害や市街地での捕獲といった緊急性の高い事案は報告されなかった。しかし、人間の生活圏に近接した場所での目撃が各地で相次いでおり、潜在的なリスクが示唆される。特に島根県では、雲南市木次町の国道314号線沿いにある商業施設付近で幼獣1頭が目撃されたほか（※26）、同市内の別の場所でも幼獣の目撃が複数報告されている（※25, ※27）。また、同県益田市でも国道9号線で1頭が確認された（※29）。これらの主要道路沿いでの出没は、車両との衝突事故のリスクを高めるだけでなく、クマが人里周辺の環境を移動経路として利用している実態を示しており、十分な注意が必要である。</p>
      <h2>地域別動向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では千歳市で1件の出没が報告された（※7）。東北地方では、青森県で3件（※4, ※5, ※6）、岩手県で2件（※9, ※10）、秋田県で2件（※2, ※3）の出没情報が確認された。特に秋田県秋田市御所野地蔵田のような住宅地に隣接する地域での目撃事例は、地域住民にとって遭遇リスクの高まりを意味する。東北各県において、山間部から人里に近いエリアへとクマの活動範囲が広がっている様子がうかがえる。</p>
      <h3>関東地方</h3>
      <p>関東地方では、栃木県で3件の情報が確認された。このうち1件は足利市での目撃情報として報道されており（※1）、その他2件は自治体が公開するマップソース由来の情報である（※20, ※21）。詳細な状況は不明な点も多いが、関東地方においてもクマの活動が継続していることが示された。</p>
      <h3>中部地方</h3>
      <p>中部地方は、この日最も出没件数が多い地域であった。特に富山県では最多の6件が報告され、魚津市での目撃（※0, ※17）のほか、砺波市ではAIカメラによる検知も行われている（※16）。これは新しい監視技術が実用化されている事例として注目される。次いで新潟県（2件）、静岡県（2件）、福井県（1件）でも出没が確認された。日本海側から太平洋側の富士山麓に至るまで、広範囲でクマの活動が活発であることが示されている。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では、兵庫県で2件（※12, ※13）、京都府（※8）、滋賀県で各1件が報告された。いずれも山間部やその周辺地域での目撃である。中国地方では島根県で5件の出没が集中した。前述の通り、雲南市と益田市において、国道沿いや集会所付近など、人里に極めて近い場所での目撃が相次いだ。特に幼獣の目撃が3件あったことは、母グマが周辺に潜んでいる可能性を示唆しており、不意の遭遇による事故への警戒が必要である。なお、四国・九州地方からの報告はなかった。</p>
      <h2>出没情報サマリー</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">場所・状況</th>
              <th className="px-3 py-2">情報源種別</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">魚津市東山で160cmの個体目撃、砺波市でAIカメラ検知など</td><td className="px-3 py-2 text-xs">news, toyama</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">雲南市や益田市の国道沿い・商業施設・集会所付近で幼獣を含む目撃</td><td className="px-3 py-2 text-xs">shimane</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">足利市での目撃報道など</td><td className="px-3 py-2 text-xs">news, tochigi-2026-mymap</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">つがる市、平川市での目撃</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">秋田市御所野（住宅地隣接）、横手市での出没</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">十日町市で田んぼを横断、糸魚川市でバス停付近での目撃</td><td className="px-3 py-2 text-xs">niigata</td></tr>
            <tr><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">裾野市須山の富士山麓線付近での目撃</td><td className="px-3 py-2 text-xs">shizuoka-gmap</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">久慈市、奥州市での出没</td><td className="px-3 py-2 text-xs">news</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">丹波市、朝来市での出没</td><td className="px-3 py-2 text-xs">news</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <ul>
        <li>季節要因: 5月下旬は、クマが冬眠から完全に目覚め、活発に採食活動を行う時期である。特に6月からの繁殖期を前にして雄の行動範囲が拡大し、また、子育て中の雌は多くの栄養を必要とするため、親子での活動も活発化する。これらの要因が出没件数の増加に繋がっていると考えられる。</li>
        <li>餌資源: データから直接的な餌資源の状況は読み取れないが、この時期は主に山菜や若葉などを食料としている。まだ人里の農作物や果樹への誘引は本格化していないものの、里山での山菜採りなど、人間との活動エリアが重なることで遭遇リスクが増大する。</li>
        <li>人口圏接近度: 島根県雲南市・益田市の国道沿いや商業施設付近、秋田市御所野のような住宅地に隣接するエリアでの出没は、クマと人間の生活圏が極めて近接していることを示している。特に幼獣の単独での目撃は、近くにいる母グマが人間に対して非常に神経質になっている可能性を示唆し、予期せぬ遭遇は深刻な事故に繋がりかねない。</li>
        <li>総括: 2026年5月25日は深刻な被害こそ報告されなかったものの、全国的にクマの活動が活発化しており、特に人里近くでの出没が顕著であった。今後、初夏から夏にかけて活動はさらに活発化するため、山間部やその周辺地域では、音の出るものを携行する、早朝・夕方の行動を避けるといった基本的な対策を徹底し、最大限の注意を払う必要がある。</li>
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
          <dd>2026年5月25日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-26</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-26</dd>
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
