// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月10日 / mode: daily-report / 生成日: 2026-07-11
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-10-daily-report";
const TITLE = "2026年7月10日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月10日、国内のクマ出没は158件報告された。島根県益田市では山中で男性が襲われ負傷する人身被害が発生。また、山形県酒田市の中心市街地をはじめ都市部での目撃が13件確認されるなど、全国的に人口圏への接近が顕著な一日となった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-11",
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
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
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
      "title": "山で男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPQW1GejVLdkktczFreVRzeDRLTE9keXgtVjVyRzdFUmNCd1VSN3RFQ0pDLWl0enBHNWNGTnlkakpkdkdvajhzY1M3Nm9TYmxEYXpiYkI5YnhtNUU5ODRsemd5bzd5SE1ycHdwOXBhOVhockNtZkV3TGhoQ3NiLXRuM1cweXBnYU9D0gGIAUFVX3lxTE9BbUZ6NUt2SS1zMWt5VHN4NEtMT2R5eC1WNXJHN0VSY0J3VVI3dEVDSkMtaXR6cEc1Y0ZOeWRqSmR2R29qOHNjUzc2b1NibERhemJiQjlieG01RTk4NGx6Z3lvN3lITXJwd3A5cGE5WGhyQ21mRXdMaGhDc2ItdG4zVzB5cGdhT0M?oc=5",
      "site": "news"
    },
    {
      "title": "山中で40代男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQMHZmMmFxWTc3VWpnSzRKYnZTXzlHUWg2WXpKcjVoOU1YMTRKeW13Q1BmZ3o3ajdVdjlpVFJpNXY2ek03V1kwZGFmSndmdVFtWV9XdWdfeU90bUc2T1lmU2owVWs0RktHY3BScFBfWUowTlNXS18wYlBoVTgtTFozbElmY3dSa28?oc=5",
      "site": "news"
    },
    {
      "title": "中心市街地にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9HNjAyZVY1aFQzUjU5X1Q2NnJIV2Vyc25kMXZmdk5QcFY1amF3Z3Vad3BCUzBKZWhNdGwwSmJJb1JiMmlTYlJ5UlMyRnZMU0hLNkxqVGJwMUNmMHNKWmhYaExLdFY?oc=5",
      "site": "news"
    },
    {
      "title": "光ヶ丘の踏切付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9FWm5GbGdqallKbTc5a1lhbmlsdEpzb0toYnU1UFBxa2JQUUdZNjU1RTJDb2VJejVZa0lGTElWek5RVVdlYVdwY2ZBNE81dXJVeW5idnpfS1hhSFgwSmRIX3hldUZEQ284R191ZkZGc1VuY3dNcm1Canpld3hsZ00?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市将軍野南1丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNS00ycUpDaDNDYnFNQkZpRjRxYTY1NzZjU3oyeGItRkNwR1lFLTE2S0xtTGtvZEJWdlZES3pxekJzVFhLWjQ3MmpacTJaTUxRZ1lwellUc1l0UWphaDVHcnVWeXZMR0RxcmQ3WUJkakFLSnk4VHhUVWZKS0FjOTZOc3ktQ04yOTZlakVZZlRob241YnBSdlJLN29WMUV6cERhQjZta1F4SWozR0NDckRz0gGiAUFVX3lxTFBHdjRzREx5QWRkVjkwZkxrXy1WaVpfX1VKXzExU19uT190a2VwcDdEbFROV2p1N0E3a3lvLU9SenFPS1cyUERZM3FBbExlRktFQ3hSOC0tek11Q0ExSjlfcVdBZGRUSkhwRmRFU3hqaXNicXlSYzh0SkVQaTlEb1VqU2laUDE2emYtNjRmemhjaTRJXzZLWDdzYTg1d281RGMtZw?oc=5",
      "site": "news"
    },
    {
      "title": "仙台市泉区明通１丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVWtNSDZMSXBjd3E2dHlnVHJPdmk2eTY3dkpNdmhqOWdQWHJxVjBGRUU0VnRtMkRDV3I2MWE3WFlNZ2NLS3J3OGpDMTdwNEpDMUFDRC14WXlEZ2t3MFFMYW1oSWg0X1pFa2ZyX0QyQ19kdENkNUUtQm1EX1RQLWdLVXpVdjB6c0c5YkpfU1N4dUI0Q1FFN0tIWTNnYVrSAaIBQVVfeXFMTWxjNm9wR3Y3UlNaQ3dzVUpDM09TengwQXY0Rm9sZEp0ZG5DYjVKazhyV3RXcGp3cXUxaTBIT3ZvRHhQbGJVUnpVWm9fQjRHS1pIOXktNkQ0U2Qza3A5U0EzQWJ5dm1hclFFTkN2eXhIcDJ0VEpkS3g1M2xRbHRFcmVMaXdyVlk5WkVXbTRHOUtYQjJEMjh6Ym9hS0h1YWFoSmt3?oc=5",
      "site": "news"
    },
    {
      "title": "登山者追いかけるヒグマを確認",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOeDIweWlQQmZycXpEbUE4WllKWVJhN1Z0V292QUN4TmN6aWxKdmpRa21GM0RHdlVmbUduNmk5Zlk4QWtPSUhYVmlsUzJnQVhLay01dHBPWnYxVjhQN1h2ajVDVEZBck9MRFFybWFZX0dFLTBCRFIxTkhjV2dxN2ZxWFhJZVpkMWc?oc=5",
      "site": "news"
    },
    {
      "title": "羅臼岳で登山者がヒグマに追いかけられる",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE40aEJlbmo1bGpLbzNocTdKWDdEbkFWNTFTSnhYNV9EMkdlS0VaNnpZcEFnVjRHLWF6OWpNdHFNVERqbklUZlFmRDlIREtEcmdFMm12dTYwdGozQXZhckZCdDR0WjRuRUhKLU14SkZFS203NGdqejJ1QktxREhYcEU?oc=5",
      "site": "news"
    },
    {
      "title": "盛岡市 小鹿公園のトイレ付近で成獣１頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMVFLOGExcXB5dW5Ja3JsU2FiYlJFeFhCVTJ3b0dESFRmVU1tb3oyQmpTaDZqT0JTSTN3dEtPWFBBVGR6ZG80RE1oZ2VzQ185aHZfOWcwbWFWYkdXTV96UWRfZTVjWTF4dlgxZkxFQlNXcW4ycVNyT3NvSUF6TVpTRFZ5bGRLNWJ1cEFCeWxNZF9XTnRtLWljQTJmNzjSAaIBQVVfeXFMTXMxWFoxeF9JdGlUbWFXMndjd0oxN1RPYldqWVk5NHdkbnVBMC1nU29LVk1GSzJFb00xeTdDOWphQjdUVGkxWHg5NXhld3F2ZGs3UE9YblRBWHlKMmVhUUpCczZWeWtCNkdpMkZZOXkwdHU3UFhXTTBsc3FsS1B3SnJqYzlkV3V3MmpzU25QdEN2M05QUi1obGZjanBqVERMVE9B?oc=5",
      "site": "news"
    },
    {
      "title": "国道49号で車とクマが衝突",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBWTFZuV3hhN2s2dEkzYkktLWR3ZmNuRWdMOUtyUjNtSW5xQ3lTRFlYYkY3dUJNQmNZZGZndC1GU19vN3lobmQwRkZoaVYwUEZGTVNyMzVJZHFQLWgzUFBycEtKVURBTENhTENMUnkwZVRaSTV3blpHOWg3cTktNWc?oc=5",
      "site": "news"
    },
    {
      "title": "北軽井沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQREFwbENiV1dPZTg0cGgzTVJRT0Z6QWtqbUpGZ3IyNUFGWXFEN3o5Ynk3VWp6WFVOaEJ1Mk1WNHlYTE1TaTVwYk9tWFU5WGJ3WURrSll5dkp2SFhHSi00NkFpSDhVS3FMWUVNR19uOGloYlJjeTIzcWdkYXQ4bkp4YUpDWGdKRHZxdWFJNHFvdVAyY0pHcEo3M1VhZjjSAaIBQVVfeXFMT1VuNngxa2ZKaFRoX2VUV2I2RXhMV0lqMV9pdEh5bjU0MmE3OE9MQXd6TWxRdDBFWG1rSzJKWUs1eGFDUEpqeWFyaWFEcURVNUFFd0cyTTBLMlUxUWNIQ3R5V2ZZTm50QWhybDE1X0lULXZGOXhkNVY4NGxjR2plT2JaNWRudjAxOWtId2RvV29Mc1lnai1uaVpYbWtwYkdsSDVn?oc=5",
      "site": "news"
    },
    {
      "title": "三峰でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdzlDLWw4YzdDNThlMi1TR2NPd250NllRUE43bWFaMEJqOEFKWVBhOWNzekRuVTF6NW1TaXJwSFR0dWs4RDZtdVNrSmJ0RHhVUWpFeExzenE2QXF6QTZDTG5hdFBRM3gxSzFSdHRvWnlEM2M0Z0pfWTZoYjZwck9yNFpIWk1ZdHRrN21Fcm94NzU0dnVMYnoxMXJBRWfSAaIBQVVfeXFMTzJrUmtFTFlmcEYtNFZPY1p2N3F4MER5ZFp2U0tvVFUyRXhOZHVhTE5yUkJCUHczN0llNGVlYmNxSC13OU50czlMWGhfalQ1cGpEZHNZc3MyTEU1UVRJZnhvcFVPSmlOWkpNS2VhN3lINjdseXBHQURlOVR4ZmpDMUUtd2prSlIzVGxJeEk3RHF4LUtwRU9ueFJIbnlEZ0tSV0VR?oc=5",
      "site": "news"
    },
    {
      "title": "駐車場手前1キロメートル付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNb1ZkcGRQam8yVWFGNVBHTk4zRTR6TWxDSlg5aENYZHJaalN0anNBNEt2eHZRSzVSN1dXWG9qNGh0Z1pjcjVhT3dRN0lVNmxlMWx2YnlBRkstQlAwREstUlZoQktBcjc3SkRCU2RHZ0g0NmxQWUNOb3FBT3RoWUh5MmJ4RHpxOEFHajFiUVFR?oc=5",
      "site": "news"
    },
    {
      "title": "森林公園で出没相次ぐ 体長1メートル",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA0SjFtOTJUNnZKb1ZzYk5zMTRuZFNQLTNXcUhUcWl0R19GNVpJR0l6dzRuLTFJdmZ0Uy1WUGt3YnVVSk5rS1hJY3lvbzF2S2U1RDBJUUEtSUYwU2NHekZrZ2NXYjNRVTFwQ2Q0V2VWUlZZV2VsREpJRDVpOA?oc=5",
      "site": "news"
    },
    {
      "title": "公園脇の林に親子とみられる大小2頭のクマ",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYkpUVHd4RnNXdldwRDQzN2VsRnpjNHVZbHhjRmJXRGZvUldMYlBaU0NFa2I4b1l0VXlJVUtoakhtN1lkSlFGN0JlYXMtM0lQYVZxWHNhZjBjakhpNkFKRExfSU1RVzk3OHBKTnRNb0hxemhEOWktT3ZreGNVUjVYekExSDdGVFhCeHNUZnln?oc=5",
      "site": "news"
    },
    {
      "title": "筒石でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQS05UDVZT29qY29CeWRMQ0dZRFFSejc0OElsX0I3aENMOFY1a0hsRGF0RC05OEVFWU1UUmkwQWo3OElDcENwYkZRS2RxY0toUmxBYnBZSGtLU05hckJFSlh0OTVxajl3eHJ4cDNaZm1ELUJIVEtTMlFUS2V4cmU1aFhPTGNieVlJNVlFWXFublJwa0QzUVM3b1NYcGTSAaIBQVVfeXFMTWZsdHNYNWY3YmNZVTI0Zl83aFRRVGp2a21oWmJtVkJUNmczUTA4dzh6cFFNT0FydGhPN1B4ZzZSYzZremg2cjNuRTFWX2cyMHNwWl9ydXhsb0diTjJUS3FyenBBRENTMFg3WVRHdFR6czJnSGJrTTFMSHZVMHdEMDhuUjJDVGRxU2FZZmMyMkxDd3FWZ18yMkZEZGNCTmEyZVZ3?oc=5",
      "site": "news"
    },
    {
      "title": "公園近くで子グマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8yY0puN00zVDJ0NER6VHZPWE1ZWFBPMHZITTdQZ2xfU2MzS0lsMTBYRFVuWkczN3JIcFcwbVZwek1NTXhMS3J3bHpvUGNHUWs0djdpQ3pSdS1oR3Fub3dSS2dvZmZjMk43N3dFN09NTV9zdlhQbF9UalhrT3ZnUTg?oc=5",
      "site": "news"
    },
    {
      "title": "小学校近くの県道脇で子グマを目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPVGMzTGNHVVVMazZDTjJpbzJQXzUxMC1UZnFlS3NZdkY2eXhfVjF6Y3hXeWtKZzhBX3dwZTNBbWVVbVdWeGVXc2x4QWw4WFpWdEZqWHd1X2hEMFpyYTJ6RGk0VmFCdXBlTGR4LWJfcS04ankyTDZGRWhUc2FtX1hlTmtYMFg1ZS1jQklfRzZB?oc=5",
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
        <span>対象期間: 2026年7月10日</span>
        <span>·</span>
        <span>公開: 2026-07-11</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"北海道","count":26},{"pref":"岩手県","count":21},{"pref":"福島県","count":19},{"pref":"秋田県","count":14},{"pref":"群馬県","count":13},{"pref":"島根県","count":13},{"pref":"長野県","count":13},{"pref":"山形県","count":9},{"pref":"青森県","count":8},{"pref":"埼玉県","count":6},{"pref":"宮城県","count":6},{"pref":"鳥取県","count":5},{"pref":"石川県","count":5},{"pref":"京都府","count":5},{"pref":"栃木県","count":4},{"pref":"山梨県","count":4},{"pref":"新潟県","count":3},{"pref":"富山県","count":2},{"pref":"静岡県","count":2},{"pref":"和歌山県","count":1},{"pref":"福井県","count":1},{"pref":"兵庫県","count":1}]}
        total={181}
        periodLabel={"2026年7月10日"}
      />

      <h2>主要事案の概況</h2>
      <p>2026年7月10日、KumaWatchが覚知した国内のクマ出没関連情報は158件にのぼった。このうち、最も深刻な事案として島根県益田市の山中で男性がクマに襲われ負傷する人身被害が1件発生した（※1、※2）。現場は山中であり、作業中の突発的な遭遇であったとみられる。人身被害につながる事案は、人とクマの活動域が重複するエリアにおける潜在的リスクを改めて示すものである。</p>
      <p>また、都市部への出没も各地で確認された。特に山形県酒田市では中心市街地の踏切付近で目撃情報があり、住民の生活圏に著しく接近した事案として注目される（※3、※4）。このほか、秋田県秋田市の住宅地（※5）や宮城県仙台市泉区（※6）など、地方中核都市の市街地やその周辺での目撃も報告されており、都市部におけるリスクの高まりが示唆される。当日の都市部キーワード一致事案は13件に達した。一方で、捕獲や銃猟に関する情報は報告されなかった。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道（18件）では、知床半島の羅臼岳で登山者を追いかけるヒグマが目撃され、観光・レジャー活動における深刻なリスクが改めて浮き彫りとなった（※7、※8）。このような執拗な追跡行動は、人への警戒心が薄れた個体の存在を示唆しており、極めて危険な兆候である。</p>
      <p>東北地方は国内で最も出没が集中した地域であり、岩手県（20件）を筆頭に、秋田県（15件）、福島県（13件）、山形県（9件）、青森県（8件）と、全域で活発な活動が確認された。岩手県では盛岡市の公園内での目撃（※9）をはじめ、広範囲の市町村で出没が報告されている。秋田県、山形県、宮城県では前述の通り都市部への接近が目立ち、住民の日常生活に直接的な影響を及ぼす事案が散見された。福島県では国道で走行中の車両とクマが衝突する事故も発生しており（※10）、交通網におけるリスクも顕在化している。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県（12件）、埼玉県（6件）、栃木県で出没が報告された。群馬県の北軽井沢（※11）や埼玉県の三峰（※12）など、避暑地や山岳観光地での目撃が中心である。これらの地域は観光客の往来も多く、不慣れな訪問者がクマと遭遇するリスクが懸念される。埼玉県秩父市では、駐車場付近での目撃情報が複数寄せられており（※13）、車から降りた直後の遭遇にも注意が必要である。</p>
      <h3>中部地方</h3>
      <p>長野県（13件）を含む中部地方では、石川県、山梨県、新潟県などで特徴的な出没が報告された。石川県津幡町の森林公園では複数の目撃情報が寄せられた（※14）。山梨県富士吉田市の富士北麓公園でも、親子とみられる大小2頭のクマが目撃されている（※15）。新潟県糸魚川市では、えちごトキめき鉄道の筒石駅付近で子グマが目撃された（※16）。公園や駅周辺といった不特定多数の人が利用する施設への出没は、偶発的な遭遇のリスクを著しく高める。特に長野県池田町では公園近くや複合施設の敷地内で子グマが目撃されており（※17）、母グマの存在を前提とした厳重な警戒が求められる。</p>
      <h3>近畿・中国地方</h3>
      <p>中国地方では島根県（12件）での活動が活発であり、益田市で発生した人身被害は当日の国内で最も深刻な事案であった。鳥取県鳥取市では小学校近くの県道脇で子グマが目撃され（※18）、通学路の安全確保が喫緊の課題となる。近畿地方では、京都府や和歌山県など、山間部を中心に散発的な出没が報告されている。</p>
      <h2>リスク評価</h2>
      <p>2026年7月10日の出没総件数は158件に達し、全国的に高いレベルで推移している。特に人身被害が1件発生し、都市部への出没も13件確認されるなど、人とクマの物理的・心理的距離が著しく縮まっている状況がデータから読み取れる。</p>
      <ul>
        <li>季節要因: 7月はクマの繁殖期と重なり、特に雄グマの行動圏が拡大する。また、春に生まれた子グマを連れた母グマの活動も活発になる。山梨県での親子グマや、長野県、新潟県、鳥取県での子グマの目撃は、この時期の典型的な特徴である。子グマの近くには非常に警戒心の強い母グマがいる可能性が高く、遭遇した場合、防御的な攻撃を誘発するリスクが極めて高い。</li>
        <li>餌資源との関連: 本データのみから山中の餌資源の状況を断定することはできないが、これだけ多くの個体が人里近くに出没している背景には、自然界の食料不足が一因として考えられる。農作物や集落の生ゴミといった人為的な餌資源への誘引が、クマの行動をより大胆にさせ、人口圏への接近・定着を促す危険性を孕んでいる。</li>
        <li>人口圏への接近: 最も懸念されるのは、人口圏への接近レベルの高さである。山形県酒田市の中心市街地への出没は、山林と市街地が近接する地方都市の脆弱性を象徴している。また、全国各地の公園、学校、駅、幹線道路といった公共空間での目撃は、住民が日常生活の中でクマと遭遇する確率が無視できないレベルに達していることを示している。偶発的な遭遇から人身被害へ発展するリスクは、今後も全国的に高い状態で続くと評価される。</li>
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
          <dd>2026年7月10日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-11</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-11</dd>
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
