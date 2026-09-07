// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月6日 / mode: daily-report / 生成日: 2026-09-07
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-06-daily-report";
const TITLE = "2026年9月6日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月6日、日本全国で66件のクマ出没が報告された。特に青森県と北海道で多発したほか、長野県軽井沢町ではキノコ採り中の人身被害が1件発生し、京都府舞鶴市では2頭が緊急銃猟により殺処分された。駅周辺や市街地中心部での目撃も相次ぎ、秋の行動活発化を前に警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-07",
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
  datePublished: "2026-09-07",
  dateModified: "2026-09-07",
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
      "title": "緊急銃猟でクマ2頭殺処分",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE45aUlyVXRGb2sxa0NMQ2x4S2Y5QkhqTUxvLXBhRnczY0JCZUo5ZTIxeDNoS2VQbE8wR2pVOUVvYmpkY1A0TElyc0duSXgya1BLQklPSFdkWU96TmdGeHFwcHluNzhtSTFYaEpsXzhJbVRSV3ViUnRfYg?oc=5",
      "site": "news"
    },
    {
      "title": "三沢駅南側や住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQcnEzZ040NlpWT3pqNzB5WmFmRUMtQWZ2Z0VER3h5blZDSVBHeWtwdVZUTTE2Yjdzemdycm9OQzhlV1lhMnlUVTB0VXAwM2JyTkpLR2dFenJQdnhkU1FkWDRjT1pFYndiLVpTVl9ESllCX193YzVFMVcwUTBHREZhWHk1dzJFRE0?oc=5",
      "site": "news"
    },
    {
      "title": "町中心部でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBTMGhHVHVyX2FDM2N3Z2RaWXpvUUsxRElMVV9xNlRnWXM1OHNZSE5PSlN3U0hyR1RZcVBZYTZjdmlVMXBDb1JxN2l0eXNkYUZxNUFJd2IwcXB6UUxwSC00?oc=5",
      "site": "news"
    },
    {
      "title": "天童市北久野本１丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSFJBc0dwY3BpRXNOeW8wcFdiZ25nLXhLM1BBQjNOZHZXb2Y4V1l0ZlJ3ZEVicjZTdW15UkVKazFHWEYzcHRTOVRvSDdIWnI5emxlWmxwRzZiNUY0NVRJR0Jza3U5QWdqeEpYRlNZQUJlQUtEdC1FOEs5VndtRG01b2Fza1UzaEwxaWQ1eWd5Zm55Z185dFNueUQyUVVibHpuZ19zSm8zQk9ZOGw4aWZ1YnlObXVXamFYVFplYzFzOURoQVhLWXUxUk9ndGw5amxkb0VQSGYyM1ZaYVIxSXJzekdQbFI2ekZnNE43SVBMNlp1QdIBogFBVV95cUxNWDdobHp5bDVyOVh3R0FzdXlqaW9mRncxUVdDdHZxTEtzbmVhLVo5ODVaTlpHcXBjTUJUbFJtdXdYdXBfQWo0WE9DZUFGX0xISnl1ZHcwcFNGOExQR2ZnZkFvNDZLRUxPTGl1VVU3cjR6eVJiRnJ1cjUxa0tEd3Q5Wm5pWnJpU2hXVkVReU1wRUQ3UU04THVCNEZtUzRpWjlNNEE?oc=5",
      "site": "news"
    },
    {
      "title": "北久野本などでクマ1頭の目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5mQjJ1SHNxTktmb0ZWUl94eGNVdERpNHBDT3d5WmlETmhtbWNtdTQ0RzlDVkcweVlXSkJEeGR1OEprdmhSWHZuU2xoc3NBcGN5Y1NQQzNfRGl3QjFLSGh1R3dsSGZOY0UxNFQwUUt1Zw?oc=5",
      "site": "news"
    },
    {
      "title": "道路に飛び出したヒグマがヤブに戻るのを目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE81X2ozMGRYLURqcXlfT29ROHNOR0Qyakt4ZDE3R3ZyTlppZU1FaUhfc3NvblFleVlzYzE1aUZEM0JhSjRhX1NzNlhrTUpuUQ?oc=5",
      "site": "news"
    },
    {
      "title": "砂川市内でまたクマの目撃",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBnUHAtVWRzRXdac2t4QnN5dGJOeFdtbzhxOHhxZWFHdFVjU2NVMk93VUJoeDB4SU92bzFsbFlRMFhsNG92bWFqS1VLRkVHZmJSbXQ4Z0ZoeVYxbkFXLTZ5ejY3TmFqWUNsSXc3ddIBckFVX3lxTFA2Qi1iMFVhMEQ0OXdSWkZUQmN0V1A3S1NQQzdEeGZLaGtRdk1yS2pZWDViM0RaamFybmxRNVFLMWhkWXU0OVg5VndBSGQ1WE83WVpUcjJkYkozQk51Uk0xX2FtQVFWVWhKbFpFUXc3UHB0Zw?oc=5",
      "site": "news"
    },
    {
      "title": "越前町小倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQS1JGNWVNQmMwWElleGROUm9yY2xfWU53Y2hRZlNTdHVyYmpWaTVrYlZRM29pUmZoUE5jM2NzVG1SdUlKQVNqZGkwcjhNOE1BeXhkYUhUNUdrNmY0c1NpWDlZR3ZDOUxzM3YxS001SG0yUTRjLThoNGpnd1p2bnRxODJHcjV5UG1oRVBrTGFielgwUW83SWd2Sm1oUFfSAaIBQVVfeXFMUHBqOFN0MVZtZ2lpTjJFNWMtRWRJcWFMXzJNWWpEaGoyYkNuLWk0X3ZRUEs0ZzdsXzFfb1VBWDlFQW5HWWdnYy1MSmdPcmtNM3FBSEFrUmc1eEQxTGtRelF6R3FnOG9QekdpM2ZlVHlGTGNnU29oMUc2ZlhhY3BCZGsxUGtVVW1zdHBMTGN1eWUteEVQRlhxakpxdXl3VmgtZ0ln?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没で恒例行事が変更",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9HREtnTzlCMEJSLU9OLWs4Umw1OE5VWFd6eUhXNWp5ajgxMVQxNFhyYXgyY0FqNzhQa0I3eDcxNzM4VWRndGdxckRDNXBPSW03NWJBWDJnRjJRd3ExeVhuWE1hX2w0bHk4a3E0TEhhTHo?oc=5",
      "site": "news"
    },
    {
      "title": "左京区鞍馬本町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUktxeHJlS1JwLTdFS0oxc2llU1I1MWNheGM0T2NRV21sVTNRVk1WVHdBVEpLNkM2azFLYVhyVVNWRFEtZmVkcUlLWDZobFJGTU1meC1ET01nVlRwVXBBMjc0ak1Nd2hmVDRRMUNoMHJ0bHpqUU5waEtiN3QyMXlmaEgxSTJiaGhYNHktaHFPc0JhSnYtWk81eTN2c1fSAaIBQVVfeXFMUGd0b21zQ0tTMER0OWFwUHhwMzcySWRJMXlfY2NFOTNoY0ZTY0xWV1lwNFBSWi05b2ZQRms5akdOZ3NaWVg1OXNBeWFDb0NWd0tOWExhOUoxY3NwWVJaVE44T2tnaks2OGs1SkZmMGJSMVlzaEpwOGJXT1F0VzMwSG92V2kzQkhzOFpnMEpsSmVra3U3cldWRlRYZkZHbjFQYk5B?oc=5",
      "site": "news"
    },
    {
      "title": "追分でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWUszWlRfVnEyZzg2WDRCVDBzYWVTVkkzR2NUbzdwWXVNNmpGU3dCNng2WWdjSEptZU5EaXM5OGhtQTQtTE5KZkJlZVZoNE5XRG11Ti0xTXM1Q0R4Z3oyMTBjc213YkRVZjA1T2ZQZk5BdjFpWHU1WmVRdHVuM1VqZ2U4SzU4bkFpRk5jaU9Ld2FHSWNsUktsN1IwcUzSAaIBQVVfeXFMTU4zMkFqUnlTc3JHc084RUpzcHFKelpta1VTX0tSVG9CSVBURnU2SFNydnJZZXNPMHFMaDg4QVlvZkt6RThxRmFMSm1oaW1HS2hXNmtId3ItRTdyM09weU44LXgybFljaEtKZG5CSjVqTnVadFlIQU5IM25vQXE1MDVIdTBOSHAtbVI1OGF3Mkc0cGc4SjBUcUdvMng5MVhhdHVR?oc=5",
      "site": "news"
    },
    {
      "title": "高松でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBCZEZlTk9rZzNSQzE5U2FTczE5bEZlOVAxd1FCTUZRZWdHWG5ENGxiQ3dXSGhJNVBrZ0pKZDRzVHpfNUxpcUtmYXgtenFDR2VRWmh4QjdMQ0ZjeGVEVWlB?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県豊岡市田結でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSjRWdUtZVi1VMUNoSk1YeHZnNlZpa0xWT09lc29WbklDdVhuTWZ3eUxwTWJEMjR6cnI3NDRzcW5NaWhrTkllQVdoY1JtUEVYVk5IVG1DVDRBbkJ1ekppdEJOMGp0Rm9jUmNKdzE3S21PT0p4UGQyU2dYVjktSEZ5UUd0Rk4xR1VGd0ZNYjdqZllmNkFNOVp2N25DOFrSAaIBQVVfeXFMTWY0NjRyR0F2REl5UV9YVmZJcFYxa0MtdGpEMU5GOGJNTmJjWUJwQ095OHd1ZnRrU1NUbUhQQWkxTkJpQ0lhR045bE9TZWExd1FFR0JSa1pmUFdKR3M0SlpfclFNdURsSUl2SEJXNUM1S0NXWWtTRFNtd0QxQjBIb1dqSXJSQ3VidXZWRzI2OTk0TzM1MC1ESkZaMzJITXRRNkFn?oc=5",
      "site": "news"
    },
    {
      "title": "高松第２６地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNTGFjTlRGNnZ0eHlRLXdUaWR0RzNRdVYxclJKNng4b0NLVl9HNUh1QXVJQThfSXRtWXRrVWtVTkFvRzNwUHdIS3NNNGZ0c0U2ckE4SUFXZ2lQZzF4czBSTzBjdXZIWERreFpqSGtqOVhjeGVuZWs5LVFoV3pPYzZhbS16MlB3eFU0LWZqd2FieXh5RkFpTnlMY3VCNnZKNDdOYjBfV284WFQxZ09OSjJfMnBVeHE1cG5ud0RiWnZRc0lMdDdhNXFJaXRzbnNXOEZOYVAxSkljTWlqeGVlX1h2bHNvVHhiaEtzdE92SzJZb1RQUdIBogFBVV95cUxNQ1p3bGdXam9rNGZsY0ZwaDF5WDFodHZnWGtkN09fLUZpc0FETmRGSUUzN0h1ZXhOWW1OQ1JxZWE0U3R6UndUWmNBSF93VmRMSm8wX0IzYThRd1dITFRsN3FQeUhjX1VjU3lYd3BmWXlpaTB4NG1IRnMxMTdqTTFERFlacVZwNFVKZDkzOWpJdnBlTHNmOUcyQTlNLXMtaWpJRHc?oc=5",
      "site": "news"
    },
    {
      "title": "太白区茂庭川添東でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxONWxhSkxzNkVDdHdOZUQwZW44R3lHR0E1MWdPd3kyZlpHMHc3RE1xTXJvTG1IWGx5Z3NCejZWeFpOR1VxSS1rUVQ1NnMzeU9BUzd0cHRNTmRZNHJMeUVDZGN0N1dTbWg5OF9TX1hrX2Q2a2NVY0FVY0l0VW9CRnNFNTdmYXBmaGtRRmFyODFUWld6Q2pvVHY4SENCTVhoUnlVX3VkcVlNVHY1YkZfX21DNk1GeUhnQXI2OFVCbFRYSHY1UHktRG50bENBLTBIMUJmQ0ZKNEtnUUpqZ2l6bkljY01lcXd3ZkxYeVlmMmpmaGZsQdIBogFBVV95cUxOZm9TeXAtRzdSNnBBdEUwbEdZYmR0Smh4bnpNa1RFN0FnRTNTRkgwYUVqZW1nN1I3U1VhcjNsUzRCLVdBd2paa2s4QW5PV18wbzNudjRuRGpxMFc3clRia0NfOUV6eE9uQm10LXQ5N1F1Z2h3U0xsMlk1VzY1WHpnYTRYdkFrejVrM3BRYXNoVGZqaTZSME1CVmZ6ZC1MOFJEZXc?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":14},{"pref":"北海道","count":8},{"pref":"群馬県","count":6},{"pref":"京都府","count":6},{"pref":"長野県","count":4},{"pref":"福井県","count":4},{"pref":"岩手県","count":4},{"pref":"福島県","count":3},{"pref":"宮城県","count":3},{"pref":"山梨県","count":3},{"pref":"秋田県","count":3},{"pref":"山形県","count":3},{"pref":"岐阜県","count":2},{"pref":"兵庫県","count":2},{"pref":"三重県","count":1}];

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
        <span>対象期間: 2026年9月6日</span>
        <span>·</span>
        <span>公開: 2026-09-07</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={66}
        periodLabel={"2026年9月6日"}
      />

      <p>2026年9月6日、KumaWatchが収集したデータによると、日本国内におけるクマの出没報告は66件に上った。本レポートは、これらの事案を地理的分布と内容に基づき分析するものである。当日は、長野県での人身被害1件、京都府での銃猟による殺処分事案、そして青森県や岩手県、山形県など複数の地域で市街地・住宅地への接近が確認されており、人とクマの軋轢が深刻化する可能性を示唆している。</p>
      <h2>主要事案の概観</h2>
      <p>当日の報告で最も深刻な事案は、長野県軽井沢町で発生した。キノコ採りのために入林していた人物がクマに遭遇し、被害を受ける事案が報告されている（サンプル[46]）。人的被害の詳細は不明だが、秋の行楽シーズンにおける入山活動のリスクを明確に示している。</p>
      <p>また、京都府舞鶴市では、2頭のクマが緊急銃猟によって殺処分される事案が発生した（※1）。人里への出没が続き、人的被害の発生が危惧される状況下での対応と推察される。このほか、北海道浜頓別町でもヒグマ1頭が捕獲されており（サンプル[2]）、捕獲・駆除対応を要する事案が複数確認された。</p>
      <p>人口集中地区への接近も顕著であった。青森県三沢市では三沢駅南側の住宅地で目撃され（※2）、岩手県金ケ崎町では町の中心部で出没が報告された（※3）。山形県天童市でも北久野本といった市街地で目撃が相次いでおり（※4, ※5）、これらの事案はクマの行動圏が人間の生活圏と深く重複している実態を浮き彫りにしている。</p>
      <h2>地域別の出没傾向</h2>
      <p>当日の出没報告は、北海道と本州の広範囲に及んだが、特に東北地方で集中的に発生した。以下に地域ごとの傾向を詳述する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主要な出没地点・事案</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">14</td><td className="px-3 py-2 text-xs">三沢市（駅周辺・住宅地）、八戸市、おいらせ町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">浜頓別町（捕獲）、砂川市、新ひだか町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">渋川市伊香保、嬬恋村、高山村など</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">舞鶴市（緊急銃猟）、京都市右京区・左京区など</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">軽井沢町（人身被害）、伊那市、辰野町</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">越前町（親子）、小浜市</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">金ケ崎町（中心部）、盛岡市、花巻市など</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>北海道では8件の出没が報告された。浜頓別町での捕獲事案のほか、砂川市では道路への飛び出しや市内での連続目撃が確認された（※6, ※7）。東北地方は全国で最も報告が多く、特に青森県が14件と突出している。三沢市、八戸市、おいらせ町など太平洋沿岸の都市部周辺での目撃が相次いだ。岩手県では4件が報告され、金ケ崎町の中心部での目撃は特筆すべき事案である。宮城県では仙台市太白区に3件の報告が集中した。秋田県、山形県、福島県でもそれぞれ3件の出没が確認されており、東北全域でクマの活動が活発化している状況がうかがえる。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では群馬県から6件の報告が上がった。渋川市伊香保や嬬恋村など、山間部の観光地や集落での目撃が中心であった。中部地方では、長野県の4件の中に軽井沢町での人身被害事案が含まれる。福井県では4件が報告され、越前町では成獣と幼獣の親子とみられる個体も目撃されている（※8）。山梨県では富士山麓の鳴沢村や富士吉田市で3件、岐阜県で2件の報告があった。また、三重県尾鷲市ではクマの出没により地域の恒例行事が変更されるなど、市民生活への直接的な影響も生じている（※9）。</p>
      <h3>近畿地方以西</h3>
      <p>近畿地方では京都府が6件と多く、舞鶴市での緊急銃猟事案に加え、京都市内（右京区、左京区）の山間部でも複数の出没が確認された（※10）。兵庫県でも丹波市と豊岡市で2件の報告があった。なお、提供されたデータセット内では、中国、四国、九州地方からの報告は確認されなかった。</p>
      <h2>リスク評価</h2>
      <ul>
        <li>季節要因：9月上旬は、クマが冬眠に備えて栄養を蓄える「大量採食期（ハイパーファギア）」の初期段階にあたる。食料への執着が強まり、行動が活発化・大胆化する傾向がある。</li>
        <li>餌資源：この時期、山中の主要な餌資源である堅果類（ドングリなど）はまだ十分に成熟していないことが多い。餌の端境期にあたり、クマは代替食料を求めて広範囲に行動し、結果として人里の果樹や農作物、生ごみなどに誘引されやすくなる。</li>
        <li>人口圏への接近：青森県三沢市（駅周辺）、岩手県金ケ崎町（中心部）、山形県天童市（市街地）など、人口集中地区への出没が全国で散見された。これは、山林と市街地の境界が曖昧になっていること、および一部の個体が人馴れしている可能性を示唆する。長野県での人身被害は山中でのレクリエーション活動中に、京都府での銃猟は人里での深刻な軋轢の結果として発生しており、遭遇リスクが多様な環境で高まっていることを示している。</li>
        <li>総括：全国的に出没件数が高い水準にあり、特に東北地方で警戒レベルが高い状態である。今後、秋が深まるにつれて堅果類の豊凶状況がクマの行動を大きく左右する。凶作の場合は、食料を求めてさらに人里への出没が頻発し、人身被害のリスクが一層高まることが予測される。自治体や住民は、生ごみの管理、果樹の早期収穫、不要な藪の刈り払いなどの予防策を徹底するとともに、最新の出没情報に注意を払う必要がある。</li>
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
          <dd>2026年9月6日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-07</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-07</dd>
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
