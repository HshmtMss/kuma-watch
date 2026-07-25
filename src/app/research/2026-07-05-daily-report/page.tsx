// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月5日 / mode: daily-report / 生成日: 2026-07-06
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-05-daily-report";
const TITLE = "2026年7月5日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月5日、国内のクマ出没報告は217件に達した。秋田県では山菜採り中の男性が襲われる人身被害が発生。東北地方と北海道で出没が集中する一方、仙台市や盛岡市など都市部への接近も複数確認され、全国的に警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-06",
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
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
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
      "title": "秋田 由利本荘 山菜採りの83歳男性 クマに襲われけが",
      "url": "http://www3.nhk.or.jp/news/html/20260705/k10015169281000.html",
      "site": "NHK"
    },
    {
      "title": "クマに襲われ８０代男性けが 秋田・由利本荘",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9RODN6blpEbWppUjUzT25WdE5GaEo1UUlBSnhsSFdFTm8zY1ppREk3SlZGbkdjZGNtQnpZM0RuYklYRXpyblNuMDlXYm5LRTY3ZTZfdEU3cGdPNXVtRGVnbVZR?oc=5"
    },
    {
      "title": "【速報】仙台市宮城野区の苦竹駅近くの河川敷にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOaTU4VUgwVVJNNUh3Mkl3WVZhWEFNMENqdWNJcVQxODJMdDFzN0NIM3lJbEdQVEMwQjN4Z0xHUnUtbklBeWdIZmIza1MteXRNaFRQZjd5c0xzVUJpYW9mdGJQWnBVMkt6YkxYUS1rV0tEVkNXQWY1dWpTQnlIYk9mOExXYkNHTFVoeHBrYjZ3?oc=5"
    },
    {
      "title": "仙台・宮城野区の住宅街で目撃相次ぐ クマ1頭が出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAwR0c0bndIN1V5ZVg5SVpLMzJ4V1JyU01odlpFUWNhT0xrZnRUd3NRV1diNFB1MVdJWER5WV9VeFk5T3VRM0J6M3dJcVRKdW8wVW85QUVpR2lVaFhGQmtIQjhId3o1a1J5LTd2UVNjUXBsZXF4em1qUk9EcEUwNXc?oc=5"
    },
    {
      "title": "岩手・盛岡市上米内でクマ1頭目撃、付近に小学校",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1iUE1IZU9iYnNJOEhQSFQ1ci1mVUhLTjlwTWFDbWh3ZlNmRjFPUlc1RHpRMTNyb1c3WUVBWXF1b3pwRWNqZm50eWpGV2ZFZw?oc=5"
    },
    {
      "title": "新潟・南魚沼市でクマの目撃情報 住宅や学校付近",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1WbjdYNC1sU1V5VVZRQVJVVG5CVDlmc2xzZmtMU1M2OFRLOWZOWi1YZV9UWGhlNk8ta1NicFdZYmdEc1RP?oc=5"
    },
    {
      "title": "新潟・南魚沼市でクマの目撃 住宅や宿泊施設付近",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5PTVdWWjdpWTRiRVcyN1dzMWlRdnF5QVJfeEdXNEJ6Wnl4MDU3cmNHRVo4RkozWjRaeVBWQ3BxcUJpcVBa?oc=5"
    },
    {
      "title": "石川・能美市の住宅地近くで体長1メートルのクマが出没",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBqSTBXd051NmZwYklPcDVMbmF2X2ZiT1VoWkFGeVNvTm9OeDBsTTZlVjYtTEZhQm5ybFJtWURHTUpsQ1p0NEVPSVdia05HQjQtbDFIWjRwS1Z4Qm9JbEhreVNSX1VEWUNMMGYyZmhQb1dTSl9KcmhQMEhZMA?oc=5"
    },
    {
      "title": "青森・青森市原別でクマの出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcjNCRkZzYThxNlVHTzh4SEo4anRXTDNDc1B0YjQxdk11T2ZZTGV3ZnM1N3ZVaURaUm5tMF9FSzJRRC1uMnp0aWlFd016NkFQMUJSeURxd2NIUVZQckJuR2p5Q1pXa2tpbkpjbVktUGxDbFcwWGt5M09HOWQ2aF9UNGxSSVhRd2lGMkE3R3Y4UEE0T2tlWmp0SEVQNHjSAaIBQVVfeXFMUE9PZFlfUk1UVDVVcTd2bkFhRkRQVmZYUU9mVllKZUtXX2J4RmJOZXVVMUx3ZEw4ZWNZWEVIcHRBd25aVmRybVBGT2twVTdCdkctYjY3R3Q3cFduUkx4Y3d0SURFWlkyTEs0X0dXWVQ2WXVNZWppTDNubkhpWXRhOGU2OUVnSnVDNDhDMHF5V1FWZXpDN2NBZ0JoSzdjVlNqWjVR?oc=5"
    },
    {
      "title": "群馬・長野原町北軽井沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOUmNNWlllTnNxVTY2ZXB6TUFFR2U3R1BabURieS01d3dYWkxkNTZSVmxhM2lhQUZTakRMR0hpOXdWd1Vrajh0RGlHcFY4V1NDQTRpVjJla29Qa3AwZDdmaDdBaGZXaTZLdmZmMEoxdHAzU3huckd5ODRORFRRN3Z1TnZtR2lsSlBtNjVzLWZmZ1doX1NZcTlHVjVlLS1MTkQzUEhMcUY2OXdRSzB1NE92dUw3UWx5TkNreldoTDBOcHdLbWNsZjZjMC1yTjdsbkJqREk2QmpycDMtb3ZCWUJaMTJURGtoZ0l3cjZHTmxfd3pVUdIBogFBVV95cUxOOEw0SURESUI0WHlvWmFfUlNHVi1xakZIM21XbkZ3VjhELXJ0Wll6S3ctb3F6SjU4elZNRkU0cF9XN2daNG1WbkpQcUxhQ2tyUGs4VlZMZFFzYXBpOVFmay0tQWFHTGN1Mm5FWFNTbGJKOHlqVGI2dE5UMmd3YVdLQUVPNHdiMUNWRHFDV2d3RDVsZkF3S1lsZlVzV3l4MzBVakE?oc=5"
    },
    {
      "title": "新潟・妙高市でクマ目撃 別荘やペンション付近",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE85ZHE0U3hnN0tjU3FLejc5c0NHZE8xeUd3bnh2cVlMdHdmVG9GZGFXb1B1NFhqSDB4NmJDS24xY09NOFRD?oc=5"
    },
    {
      "title": "長野・軽井沢町追分でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWE1nckdPVl9qazQtenJJVy1iUFdRNTQxU2xHdFYtNmxxcEtQU1lnQ2lxZVZCeFk4ZnRfREFZU1piZjFuQm14alZ5OTZYVGVVYmlLTHN6TjBvSHktNGlTSm1obzNsSnhFajE3Mlo2ZzVxN25yamZXZ3ZWSmVDcTlYWFRuQktGdTBBS0J0eDlTbjFLcmtsZGlXaXJjYU94VERSemtXaGNfSEpsWklTRndnWm5LOXVEMlNiR2JQeDVCMGJjX0kwVGtzWXpBUFRJbFVpY01SYWJlUlFvUVQwZ0tKQWVnV2JHLVV0N2hxSkZDU3BzQdIBogFBVV95cUxPTTZLRXJfVjhqSUo1ZzBzb1hxQ0c2TDJScm5EMWxUNVNnWlQybEhNcDliODVkWVQ2RVpmT1FlTFNYc2o0dm1EUkZ2RlBfQ1l5Nm1aT2VxcUcxa0wySUd0VDU3ZjRkTy13RHZfLTZ1RmwzdnBURUlJWWlYdDY4VGJXQjNIQk1ULTF0SnhnRTVRTnBRWFdZbHNneVVXTkFYMWdGSEE?oc=5"
    },
    {
      "title": "静岡・熱海市の岩戸山でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE84T1prWFIzY0RFY1RWQ2d0VnZDdmFnajdFejh6MDBBdE9uYzZ5TGtGYmJNSHk2WmZLQ2sxMmVZRlViYldMajhBUWd0dkZxdw?oc=5"
    },
    {
      "title": "富山・富山市八尾町でクマの痕跡発見",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ0hPaWVLQVh4QkpBQlQ5Q3ota2Rtc1A0ZVJ4WjY3MzBWVzZIUjVqX2FHckFKVXl0U3hSWXl2X252ZWg5SnlJZXNPU25OdVNxai1rWmNFZzh4MGw3RHl5VGxxYnpqRzhSbk44eFQtRThlek83NlJnSHRkdm1zaEpLSVJua0NSOHRrbWJnRVZsVHZrbFNsdm5lQ0podzfSAaIBQVVfeXFMTkdDemVQZ0l5bHdzRHRNeFVKQmIwaWk2LWtjVExFMThaaEx3ZzU2aGZMbVVkTnRpb3YtRm1waF9KSGo1XzRLVFdlV0UxSGpza3Z1SVpZY2lhMmEwOFNQRkFtNGJwUldpaU1BQkFXaGwza2ZiMXlOSjB0YUtILWFPa2lpZVduOHI5R25LSGxwVGRUdlptRS0xVWZDdkw2akZObjd3?oc=5"
    },
    {
      "title": "岐阜・高山市高根町でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbGFHMVVQTXFaZlpPYUdfM2o1NGtUU1dWeDl3bmRnRmRuU2JKNDhDekNDZWJSV1ZxbmF0RjM1eUpJSGp1TEE0bWR2WU94dUlIYllCOUFXekRUTXFzcE9rNU1BMlZXY0hYSUJtMHdGem4tSjREeF9DVkd4dkpRMi04c0pVV1BSc3FCUVlxbV9RbWFZZ1NUeE9mZnRnREHSAaIBQVVfeXFMTzVtcVg1WWI1N3N2M1ZIUGdYMm9hUDBYU0VtWkFqTmZWaXB1WEstRzBBMkE2cExYNFRMYnR0eXIwWnRsMFhibHdRZzNMb2x2WlpRVkZLMXZMamJOSDhoRmRjOXBZTTJ6Rk9VTS01eUM3N05falAzZzNPSm9ld2t3ZHNzV1AzTGYyQWRQTjBNSXZyZUVVRGNkN2NNT18wZEhXdC13?oc=5"
    },
    {
      "title": "島根・浜田市三隅町西河内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWVpUdG1uOXhXQlRQS28zVGZyUF9Td21Cd3lESmhzVVJwRUFRdk1pam5lV3hhckNNelIzZUF4ZVM3LS1jcEVBcVZLclllSUJMYXJfeHp4WlJmSS1ER1NzUUxQZWp0YU9zR3oyOFAyWjlQVEhnQTBUdTRrWTZmUW15ZFRReUc0OEJWZ1hISmVMUG5oWVVKUVZPQWNHNm1MNzhQNGsxZnR0blNFTHN0RGZPZGdHQnBVbF8tZWt4X1M1ZWJIaXlrbURkUUdXX3pzaDlBRmxTVTVoT2VJc1NfVWd1OS0wRXBvRTg0U0lfR2RaX2RvZ9IBogFBVV95cUxOSWlxd1NhV28xQ29HYWgydzJ6Zk1jeTQzWVNMNkIzTlVyVDh5bnJ0YVd3LTQzRkxCTnFIdExWbjF6Y3R1MktNMGpiQUlEQURlNEVGQS1DRDdIUjBJVnlXTzhfVFppWjFCQTB3RzVZWDVPUUs0V1BoQTJ6UlZrSHktZ1o2ZGI0eWN0RkZ0c1RjbUFTRFZHQUxRZjdaZXNZSGNOeWc?oc=5"
    },
    {
      "title": "山口・宇部市の市道で車の前を横切るクマ2頭の目撃",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5GNjlCdEtienRjcC11anUtSUZWeWxVeDJlUHVYbFdFbVYxWkc2QTFYaXpnQnlldWY3UG1Wb3piVjIyZHlYc3FrdmE3QjFYQ2Z0bmdOdWo1aXdoTGtMNU9FZ0U2UFR5Ump0dW1NS0tR?oc=5"
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
        <span>対象期間: 2026年7月5日</span>
        <span>·</span>
        <span>公開: 2026-07-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"北海道","count":48},{"pref":"秋田県","count":37},{"pref":"岩手県","count":25},{"pref":"新潟県","count":20},{"pref":"宮城県","count":19},{"pref":"青森県","count":18},{"pref":"群馬県","count":16},{"pref":"京都府","count":13},{"pref":"福島県","count":6},{"pref":"山口県","count":6},{"pref":"山形県","count":6},{"pref":"石川県","count":5},{"pref":"島根県","count":5},{"pref":"兵庫県","count":4},{"pref":"岐阜県","count":4},{"pref":"富山県","count":3},{"pref":"静岡県","count":3},{"pref":"長野県","count":3},{"pref":"埼玉県","count":2},{"pref":"岡山県","count":2},{"pref":"和歌山県","count":1}]}
        total={246}
        periodLabel={"2026年7月5日"}
      />

      <p>2026年7月5日、KumaWatchが収集した国内のクマ出没関連情報は217件にのぼった。これらのうち206件は報道機関のURL付き情報であり、情報の信頼性は高い水準にある。都道府県別では秋田県（37件）、北海道（33件）、岩手県（24件）が上位を占め、東北地方と北海道での出没が依然として多い傾向を示している。当日は人身被害につながる事案が1件発生したほか、都市部や住宅地での目撃も14件確認されており、人とクマの遭遇リスクが多様な環境で高まっていることが示唆される。</p>
      <h2>主要事案の動向</h2>
      <h3>人身被害事案</h3>
      <p>秋田県由利本荘市で、山菜採りをしていた83歳の男性がクマに襲われ負傷する人身被害が発生した（※1, ※2）。この事案は複数の報道機関によって報じられており、当日の「人身被害キーワード一致」4件はすべてこの一件に関連するものと考えられる。7月は山菜採りやハイキングなど、人間の入山活動が活発な時期であり、山林内での不意の遭遇が重大な事故につながる危険性を改めて示す事例となった。</p>
      <h3>都市部・住宅地への出没</h3>
      <p>都市部やその周辺での目撃情報が14件確認された。特に顕著なのは宮城県仙台市宮城野区の事例で、JR苦竹駅近くの河川敷にクマが出没したとの報告が相次いだ（※3, ※4）。また、岩手県盛岡市上米内では小学校付近で（※5）、新潟県南魚沼市では住宅や学校、宿泊施設の付近でクマが目撃されている（※6, ※7）。これらの事例は、クマの行動域が人間の生活圏に深く侵入している実態を浮き彫りにしている。石川県能美市でも住宅地近くでの出没が報告されており（※8）、地域を問わず市街地での警戒が求められる。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では33件の報告があり、弟子屈町、乙部町、紋別市など道内広域で出没が確認された。東北地方は出没が最も集中した地域であり、秋田県（37件）、岩手県（24件）、宮城県（19件）、青森県（18件）、山形県（6件）の5県合計で104件と、全国の約半数を占めた。前述の主要事案に加え、山林部から市街地周辺まで多様な環境で報告がなされている。青森県青森市原別ではクマの痕跡が確認されるなど（※9）、直接の目撃に至らない潜在的な出没も多いと推察される。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では群馬県（12件）と埼玉県（1件）で報告があった。群馬県長野原町北軽井沢や中之条町など、山間部の集落や別荘地での目撃が中心である（※10）。中部地方では新潟県（19件）が最も多く、南魚沼市や妙高市の別荘地・ペンション付近での目撃が報告された（※11）。その他、長野県軽井沢町（※12）、静岡県熱海市（※13）、富山県富山市（※14）、岐阜県高山市（※15）など、観光地や中山間地域での出没が広く確認された。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府（13件）、兵庫県、和歌山県で出没が報告された。京都府綾部市や南丹市など、北部の中山間地域での出没が目立つ。中国地方では島根県（5件）、山口県、岡山県で報告があった。島根県浜田市では、国道9号沿いや集落間の道路で幼獣が目撃されており（※16）、母グマが近くにいる可能性も考えられ、注意が必要である。山口県宇部市では市道で2頭のクマが車道を横切る様子が目撃された（※17）。四国・九州地方からの報告はなかった。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>7月上旬は、クマの繁殖期と重なり、特に雄グマの行動圏が拡大する時期である。また、春に生まれた子グマを連れた母グマが、子の成長に必要な栄養を求めて活発に採餌する季節でもある。これらの生態的な要因と、レジャーや農作業で人間の活動が活発化する時期が重なることで、人身被害のリスクが高まる。秋田県の事例は、まさにこの典型的な状況下で発生したと言える。</p>
      <p>全国的に都市部や住宅地への出没が頻発している点は、最も警戒すべき傾向である。背景には、山麓部における耕作放棄地の増加や、市街地内の緑地帯が野生動物の移動経路（コリドー）として機能している可能性などが考えられる。人とクマの生息域の境界が曖昧になり、遭遇の機会が急増している現状は、地域住民の安全確保に向けた新たな対策の必要性を示している。当日の捕獲・銃猟に関する報告は0件であったが、出没が常態化する地域では、自治体によるパトロール強化、GPSを用いた個体追跡、そして科学的根拠に基づく個体数管理といった、多角的なアプローチが不可欠となるだろう。</p>

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
          <dd>2026年7月5日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-06</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-06</dd>
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
