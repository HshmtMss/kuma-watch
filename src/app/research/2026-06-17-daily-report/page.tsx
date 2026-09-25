// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月17日 / mode: daily-report / 生成日: 2026-06-18
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-17-daily-report";
const TITLE = "2026年6月17日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月17日、国内で238件のクマ出没が報告された。島根県、奈良県、石川県では計3件の人身被害が発生。山形県や京都府では市街地や観光地で駆除事案も確認されるなど、全国的にクマの活動が活発化し、人口圏への接近が深刻な課題となっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-18",
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
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
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
      "title": "島根県邑南町で50代男性がクマに襲われ手足を負傷",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFB6b2RRbTlSdHZlVzNDazZsc2dQWWlQMjdjV1hNZ0FkLTdvN1RFQTJMQVBoOUgyWTNpaVpCM2VnVTltODJkZEwwcTJ3ZC1CdEZCMkduVXBIQ0NGTjhzZDZHMmRCRjVaaDViVUxRM3ZwdUJuUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県邑南町の造林地で作業中の男性がクマに襲われる",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5pMG9KTWpJUExfMUk1RGpXR00yRFN3MUpNbnNsVl9oMy1la0VqOHA5czlzTTdUZ0dkWlAzdEZNbGdRNlVZM0NaUXNNMG9JNkRQNzd3UEZqU3hIdUlqVUZTb21kWkUtYjg?oc=5",
      "site": "報道"
    },
    {
      "title": "奈良県下北山村の自宅敷地でトイレを出た男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1oWlpRVWpiZ1RsanZKMWxYX2dyV1hkQ2ttNlF0cUtROTZmOHJyVUl6NHFwYjZKVTM3RTBKRHNUYml5QjdJN2VCOFFzd0oxUDBmMGREalFGMTJBMl9fTGJMWXAtVU4xaVZOd005QkdHTFJHMjA5VnRPTHhUTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "奈良県でクマに襲われ頭と顔から出血",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE14QmVqUFpRal9vRkNIUFNvb0xteVF6VHFyaWhLNkQ3SUNubGFnZzMwd25iSDRsWmdpZGwzOTh6bkdUQkFWWUlhUGkwUUNfN1ZTS0w0U3ZmSWlzdTBHQ1RVMF9CTnZ4UlNxMlRVQTE1WUltSjE1WnNocjl4QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "石川県小松市の山あいで散歩中の80代男性がクマに襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260617/k10015152251000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "石川県小松市で80代男性がクマに襲われ重傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9pdU11TXlROHpGc055QXVEQl93Zl9ibEhCSk1FeHhpZHN6b1FiN2lvcFFvY1ZmRVV0R1hiREFxY0hMS1FPVHR2bzRXVlBxXzNKdGJqRzJGZVc?oc=5",
      "site": "報道"
    },
    {
      "title": "山形県南陽市 JR赤湯駅近くでクマ1頭を駆除",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNN2FFdmVpNEh5Zi1oUFNRUzR6REphbkhPSXA5TnliTW5oTDhmMGtVc0FJandJRVlfdmZ1MEcxN09VWW5XejhqZV9JaGo3WktJakx1ZnNPcFlfZ29ULUhfZWZ3bksxTWhnVVlIUGM5bmdvaWxKYU1aNHkxSklELUZkQnoyWk12VTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "京都府宮津市の天橋立にクマ出没、海を泳ぎ駆除",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1OMWZLYTJKMkJ5bE12ZlV5dFVxVFZfMXQ1RmU4VENoaFFncVA2UmFweXp3dTBoY0xVRnZ6MFo4aWcwMjByb2hlaHk3bw?oc=5",
      "site": "報道"
    },
    {
      "title": "宮城県仙台市宮城野区の住宅地近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5TZElvbUZHdzJkZnZJbjJMSXN6SFozSXBvVUwwbERCMk9uZnFOV2xIZ3YyaDNjblo1Yk9FOWJHeWF4eUcwOXZ4WFpwZ05HWXIxODB5Q0txV0RKWURCRVpnNjZjbFBJWjlMZ0lFeWJKSHdkV2s0UndDdmJiRFdJZ0U?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道旭川市東旭川町でクマの出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObk9xc3FHOGxLUnFYX3B5SENGOEE5VGNub09sRUNWSTRqMVFyQURhRURUU21lWDYyZTQ4MTFhcGFwZGc2a19idDhFdnV6NXhFS3QxcXlxOFpPeExLM0RaVWJMbHRxaGVLUzVRYmNQUjZFSjB5T0IwT1VQUm96Z3JDV0IyWjNZNlVIeFhza3E2UEpyZF91V2FBTzJNX0fSAaIBQVVfeXFMT0dXR0t5NjFHWm1OdjBZbFZBYmZwUWUyRTllbUFQcXF2VTNkZV9FQnZHQ09oR0R1Z1lKYTJQcDFLMmZKcHNya3BnakFyRFlvcnpCUWZVaHNjdEZvVmYwVW4zUFFpTklwaWhVbk01eFZXQ3VvWm1WVWlJbUU1RzdlSDBEcVFHV1J0OWxyZktKbWhlMmdDOG5qVkkyWlJRU1dXTFFn?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道福島町で車の前をクマが横切る",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBPcVNCb0tNeElEUUZ1emI1N2tUUXhrVEFUUjRwQ0VBMUdVaGkwa0dRUzZjakd1bDJHeklwWWI5Ti1hOTMxbXpCcWViczRBRGpqam84N0JEbWhueTc4V1R4am9TQTJlXzhnVElaaVRCVjFOUWJlM1UtR1ZaNlZCaDg?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県盛岡市の住宅裏の空き地でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE40VjRpdGpoZWk2QS01LUlVd2Zma04xWm1QZkFpNThISW9ENFFndjdDM2RkUjZtUzloelF1M1R3OHk3Tk53YXQ2RGxnXzRfZEc5SWk3Q3RhXzZVZTRPTFVTN3dralVrUlRiUkZNMm1JY250TzIzRWRmMXpnWG04UGs?oc=5",
      "site": "報道"
    },
    {
      "title": "埼玉県秩父市の県道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE45UDZuejMxVGxvb1k5VlYxaFllZFNMbkdBMFZBRENnRFRPa09SbUxVMG5mcUFZbEFaUEY3NWdVZ09MQjJTdzhwTjYxYkdMdG1sS2U1NF9raw?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県松本市の城山公園展望台からクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5xa1oybkt1UHlFOWJ4VGxWdWhKUWRBalpKdzY3Yk9xWlYxWDdJb183MjJRRXdaTWRhYkxHYkFCaVl0VFg2cjhTRTZIZGJ2QzBkTmJLYmlLcEJBcGVHUzdKVk9OQVVGN0N3QVFNSFBLVVE?oc=5",
      "site": "報道"
    },
    {
      "title": "富山県氷見市の国道160号沿いでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1TYm1yZTdVZGY2UGtvZF9iV05NMTZKNXhjNG0wMmhscjBublRsejgzSkVfVXBfREE2ZVVrc0JEeVJsSXlORHktb0ZNVkU1dw?oc=5",
      "site": "報道"
    },
    {
      "title": "新潟県三条市大谷地でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMVFncmx6UnFrOTZZaEhCVVVxZ1Z4aFJKYVpyYnhzQWgxa0RpYzNhLWJ1QXplNVhBclVnTjNncjU0S2lhek45RmhvQngwOVE4S0h2cVdjNkh2US0yWGlwYnJySkVjWU5ORUNQd3dDZEtmT1ZTZE9EYXp1Umc1ZGZvOVJGUWhVMlNFaGlidjFDR3ItVjJNOVZlT2Zhcl_SAaIBQVVfeXFMTVBIMkx6RUExd0ctUWY5am1wSDVJcEltUWFkX0JISUZ0TEJkT0NNOF9OR1pDRy1IVGhaYkQzc0tyVURvVGJqazQxZXNSSV8zZlVLX3FxNkR2SF8wY1k2SXZEUzZ1ZDY2NndKSVFqNTVTcHA0UTNIUjVDLUtYckk1TVNCaHhqal84Sk9fLU8tWEg4QUlVNXF2aW14YXFGWDZxVXJR?oc=5",
      "site": "報道"
    },
    {
      "title": "兵庫県宝塚市の公園付近でクマのふん発見",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE10OTd4OExaYzM0YmltU1JHRUhpNUFqX1ZPdUwtcFlCampfMUpBTDlDZWxwWndXelNFMUZOaWNwV1VqenJweXNzdjhlWUYxNkc2cVR1MWlWWXlLYy10S3BFR25aUkNGYlZsZHhFVGRFQkZ5eHM?oc=5",
      "site": "報道"
    },
    {
      "title": "大阪府豊能町でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBFcU8xSDgyMHlDM1dWQnJrdXBPVzEtOUJsNGxjeUFhMjZVVHVOTDRCVU81TWhzaGlhcTVoaGo5bENzdnN5ak1KRnZ6UXp5WUx6dVRLRXFzcjVkb01MOUlnUUFMU3FTLUk?oc=5",
      "site": "報道"
    },
    {
      "title": "広島市安佐南区の県道に体長1mのクマが出没",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE43My1EZ2R4Z3duNkVmbFA0TFAxaEkzOFBpdWhtcmtTRVJ0VEFIZWVPMjU5MTctSGV2TDRwRVlJT1lLcFRJREM4U1BIUTRYQXlsR2pleEVjMU9pRFJxXzRkbjB3Zm5wVG1jVGRZby1WQ2xmSWhYU2FLZHJwS19uUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "石川県白山市で子グマ2頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9SaUd5ejV2QVZMMXNubmZ5Nl9oTXFLTTVndkZualgyOS1wcW5UV0hVTHVPbjA3LTVDaEdZQlBPWjc5dEc1dEtYQVVGY1BmN0VaUWR4NG1VblR2a2JtN1FLRlNmWHM5YVlUMkhSdjhKYWhtSWpoVlRXMnVabzJENms?oc=5",
      "site": "報道"
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
        <span>対象期間: 2026年6月17日</span>
        <span>·</span>
        <span>公開: 2026-06-18</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年6月17日、国内におけるクマの出没件数は238件に達した。最も多くの報告があったのは宮城県の23件、次いで長野県の22件、島根県の19件であり、広範囲で活発な活動が確認された。当日は人身被害が3件発生したほか、市街地や観光地での銃猟・駆除も行われており、人間社会との軋轢が深刻化している状況がうかがえる。本レポートでは、当日の主要事案と地域別の傾向を分析し、リスク評価を行う。</p>
      <h2>主要事案の概観：人身被害と市街地近郊での対応</h2>
      <p>当日は、人的被害を伴う深刻な事案が複数発生した。また、市街地や観光地といった人口密集地での出没と、それに伴う緊急対応も確認された。主要な事案は以下の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日時</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">状況概要</th>
              <th className="px-3 py-2">情報源</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026年6月17日</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">邑南町</td><td className="px-3 py-2 text-xs">造林地で作業中の50代男性が襲われ負傷。（※1, ※2）</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026年6月17日</td><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">下北山村</td><td className="px-3 py-2 text-xs">自宅敷地内でトイレから出た男性が襲われ負傷。（※3, ※4）</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026年6月17日</td><td className="px-3 py-2 text-xs">石川県</td><td className="px-3 py-2 text-xs">小松市</td><td className="px-3 py-2 text-xs">山あいの地域を散歩中の80代男性が襲われ重傷。（※5, ※6）</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026年6月17日</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">南陽市</td><td className="px-3 py-2 text-xs">JR赤湯駅近くに出没した1頭を緊急銃猟で駆除。（※7）</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026年6月17日</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">宮津市</td><td className="px-3 py-2 text-xs">日本三景の天橋立に出没し海を泳いでいた1頭を駆除。（※8）</td><td className="px-3 py-2 text-xs">報道</td></tr>
          </tbody>
        </table>
      </div>
      <h3>人身被害の状況</h3>
      <p>島根県邑南町の山中では、林業作業中の50代男性がクマに襲われ、手足などを負傷した（※1）。奈良県下北山村では、男性が自宅敷地内のトイレから出た際に襲われ、頭や顔から出血するなどの怪我を負った（※3）。石川県小松市の山あいでは、散歩中だった80代の男性が襲われ重傷を負うなど、いずれも日常的な活動の場で被害が発生しており、深刻な状況である（※5）。</p>
      <h3>都市部・観光地での出没と対応</h3>
      <p>山形県南陽市では、朝に目撃が相次ぎ、JR赤湯駅近くで1頭が緊急銃猟により駆除された（※7）。また、京都府宮津市では、観光地である天橋立にクマが出没し、海を泳いでいるところを発見され、駆除されるという異例の事態となった（※8）。宮城県仙台市宮城野区では、七北田川沿いの住宅地近くで目撃され、住宅地方向へ立ち去るなど（※9）、都市部への接近も顕著である。これらの事案は、クマの行動域が人間の生活圏と大きく重複している現状を示している。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では16件の出没が報告され、旭川市で足跡などの痕跡が確認されたほか（※10）、福島町では車道を横切る個体が目撃されている（※11）。東北地方では、宮城県（23件）、山形県（17件）、岩手県（15件）、福島県（15件）を中心に多数の出没が確認された。特に宮城県仙台市や岩手県盛岡市（※12）では住宅地裏の空き地や草地で目撃されており、市街地への接近が顕著である。山形県南陽市の駅周辺での銃猟事案は、この地域の緊張度の高さを象徴している。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県、埼玉県で出没が報告された。群馬県高崎市や桐生市の渡良瀬川付近、埼玉県秩父市の県道沿いなど（※13）、河川や道路といった人間の活動ラインに沿った場所での目撃が中心である。件数は限定的であるが、都市圏と山間部の境界域での警戒が引き続き必要である。</p>
      <h3>中部地方</h3>
      <p>長野県（22件）を筆頭に、新潟県、富山県（11件）、石川県、山梨県、静岡県と広範囲で出没が報告された。長野県では松本市の城山公園や大町市の「アルプスあづみの公園」付近など（※14）、市民の憩いの場での目撃が相次いだ。石川県小松市では深刻な人身被害が発生した。富山県氷見市の国道沿い（※15）や新潟県三条市の農道（※16）など、インフラ周辺での目撃も多い。</p>
      <h3>近畿（関西）地方</h3>
      <p>京都府（14件）、兵庫県（13件）を中心に報告が集中した。京都府宮津市天橋立での駆除事案は、観光への影響も懸念される。兵庫県宝塚市では公園付近でフンが発見され（※17）、大阪府豊能町でも目撃情報があるなど（※18）、関西圏においても都市近郊林でのクマの生息が常態化していることを示唆している。兵庫県多可町や滋賀県では、シカ用の罠に錯誤捕獲される事例も報告された。</p>
      <h3>中国・四国地方</h3>
      <p>島根県で19件の報告があり、邑南町で人身被害が発生した。広島県広島市安佐南区の県道（※19）や北広島町の団地付近、山口県山口市の山中などでも目撃されており、中国山地一帯での活動が活発である。四国地方からの出没報告は確認されなかった。</p>
      <h2>リスク評価</h2>
      <ul>
        <li>季節的要因：6月はクマの繁殖期にあたり、雄グマの行動圏が拡大し、遭遇リスクが高まる時期である。また、岩手県盛岡市や石川県白山市で幼獣が目撃されており（※20）、母グマが近くに潜んでいる可能性が高い。子連れの母グマは特に攻撃的になる傾向があり、極めて危険な状況と言える。</li>
        <li>餌資源との関連：全国的に住宅地や市街地への出没が多発している背景には、山林内の餌資源の不足が潜在的な要因として考えられる。生ゴミや果樹など、人里にある誘引物に引き寄せられている可能性も否定できず、餌場の探索行動が活発化していると推察される。</li>
        <li>人口圏への接近：当日のデータは、公園、駅周辺、観光地、住宅地、国道・県道など、あらゆるタイプの人口圏でクマが目撃・捕獲されている実態を明確に示している。これは、クマと人間の生活空間の境界が曖昧になっていることを意味し、偶発的な遭遇による人身被害のリスクが全国的に増大していることを警告するものである。</li>
      </ul>
      <p>総括すると、繁殖期における行動の活発化と、人口圏への接近・侵入の常態化が相まって、非常に高いリスクレベルにあると評価できる。特に、早朝や夕暮れ時の活動、山林に隣接した地域での行動には最大限の注意が必要であり、地域社会全体での情報共有と警戒体制の強化が急務である。</p>

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
          <dd>2026年6月17日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-18</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-18</dd>
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
