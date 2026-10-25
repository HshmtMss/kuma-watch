// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月24日 / mode: daily-report / 生成日: 2026-10-25
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-24-daily-report";
const TITLE = "2026年10月24日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月24日に報告されたクマ関連事案は全国で計21件であった。人身被害や捕獲・銃猟の事例は記録されなかったものの、都市部・生活圏接近が3件確認された。北海道、東北、中部、関西を中心に住宅敷地内や小学校近傍のカキ畑、駅周辺、幹線道路への出没が相次いでおり、秋季における生活圏との空間的重複が顕著となっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-25",
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
  datePublished: "2026-10-25",
  dateModified: "2026-10-25",
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
      "title": "【クマ情報】住宅の防犯カメラにクマ 60代女性がスマホの通知で確認すると体長約1.5ｍの1頭がのしのしと歩く姿 北海道士別市",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9fTlJQV3JwdDlNYk1HQzFMUXRvRTFDRzBBSnlXdDBzdWloXzNZSUN2eXgza2ZpMzlpZWhkZEhXUGQ5cHVwZ2RzYXRVMnVYSVZIOXVlVlB5bw?oc=5",
      "site": "TBS NEWS DIG"
    },
    {
      "title": "（北海道）石狩市厚田望来でクマ出没 １０月２４日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOV1otRllTMmV5SkYtbmg0WnR5OGMta1FXMmt0MFhPeWUzQjJfaWluWXRLQzE3SURJY1NUczBaNEFPcXZvYm5LYTUzUFlLS0FEMlZMZ0lTamRuTFh6d3Jab00wT1MtcUpOMjJIcWcxMUM4a0IzaXZfOG5DZnVzcTZlTnJDT1VQYjBqSHYzY2ZXWUVlMWhuTXRqdmt4OVjSAaIBQVVfeXFMT0RMQlFyb2VCd3VRSlBreE1TVWc1TVFWTC1RVVk0US1ubmJBa1QxaGY2bVgtZnNyZzJnZ1lsYWVOMjA0UUtWakdGcGFCTlh1U09tbWhTcXVMc2owV3JNY0FZWHg4aUplRW5wUEJxX3hEYmhVXzRneHlHcmdlcXYwWl9HZEkydFdGS1BJYmFNM002Z2pSZ2dxVURFLUlnVkktM0ln?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "ヒグマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5UcC0waEM4SS1qR0JWWGxjalBaekZSQ1NKSGhYLVItbGs2T2tURHZPZ1c1MXlPY3BBQ1pVazFMejV1cVBGREk2NEI3MXJpVW11dWdLcFVzd2NpQQ?oc=5",
      "site": "ニュース"
    },
    {
      "title": "【熊出没】10月24日（土）福島県のクマ目撃情報 北塩原村の国道を横断 《随時更新》",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQLWFpNF82R3o1S1Y1SWFDdkIwMWkwVzEwV192aHJHR2RLQ0ZhTmN1bm83bHNWU2NKdWlPbmhqVlNtZFBHd29xN1ZOR2RFLW00MmZ3TnVWaGJlOFJvdDhnUEFHdUNvYXZHR2JYUy1GLTNFTk0ySjdKWlhCTUttajM3cy1mdzI3TEJ0czFaRHl3?oc=5",
      "site": "福島テレビ"
    },
    {
      "title": "再出没、放獣個体と判明",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE01YU5sVjhPQkJXLXpDNXVuY0R3SU0yWHExZWVyR1VWd0FFdGNzdjdtN2txRWRUaEhPSXVUeG1PY0FHdjhJMmpSNnlqZnYzSDFaaE0wa19JcTR1aEIzSTNR?oc=5",
      "site": "ニュース"
    },
    {
      "title": "（京都）京都市北区西賀茂蛙ケ谷でクマ出没 １０月２４日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNThxSC03Qm9MQVN6WEt6UnhjNVhPaXE5OVdIQTVDY24wZGZ2eUIwYTZYYjFCU3dtcFk3dG9vazJsTWpRUVNlWjVfNHVoUkZjazVvdUlva241eDlSc2FKRlZ0VnRDYjBQMVQ4RWd3R21TdHRhY01rei1vZjB1bHpscy16RTBIVktQLTYwY25RaXlJUmdfNG5oS09VaVXSAaIBQVVfeXFMT0pXTlFOWHlmcGVjclRVZDItODc5S3MxMG10alpSbVpiR0dMUzdGMTFnUFQ4QXgzaklhejZZbEJEbnRDZkFOUUJBaUpXM3g3MEJuZ3VtQmNjQVpkY19GREtKWkxqOWt5SGdOeDBEYm13UXAwSXZIREJPZC1hLWpxTTVMSjZOLUo3NFdSY3oyYjBkLW56dDVKUjNZRXVxOEJ1NFRn?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（京都）南丹市美山町鶴ケ岡でクマ出没 １０月２４日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPTVFmcXFVV0NOUWQ2akNPeXlTazQ2Vi1JRi0teG9rUnk1aF8zcEk1RVd1Y1JDN0hENDd4MWN6UU1pN08zUV9IWEtmVnpDVDAydElaN1N6TnE4cTQ1RGQzT0dEcWFQeldqVGlhVlVNaERBdUJia2JzenZLWTBXVjh5MGVsZWVMMHNySS0tMFdGT0FHUllpeS1ZS3VoV0JnN1pON2F1WHVPTVlCdE1zTDFKbHdJcGtyNjlaTmtQYkk2aXZlaDhiSlMxVkhCaXZNTlFCLTNzdndMRGRfaVlkMjJQc0d4WnlOTGJiYlg0UmNwRGlFZ9IBogFBVV95cUxONlRjYzhVRFRCWWZybnRTQjdKeVBIRGxfaE5hWWp0UFp1M3pDOHJBYXF3YUJzNlVXUFdSQlBTNlJXcHE2Y2RTOGZFY0dpMWljZWJOaGJBTmd5cDVoWk8tMmlrRVRvLVBhR2pkTmM0aHNIM3QtaHRlRlVva0lDNjNQand6N1pfaTV2ZmFFTS1yQWc0TjVVWjBZcHh6OTJVU2xfakE?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "北区でクマのような動物を目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONXRvSHpKcFV5UnlBamh4NDB3ajllN0tMNkttX21UR1VlNHQza2FTVzllTW1XVTJTZVI5UDF2dUhKbVAzRUV4TldMb0Mwa0cwd2FSLW5LT3FqdU9rVkczQzVHT2hXMjJobmpnM3ZjNzFqX3JLZVc1c0VOUGJqazllamJYZG1UMVpxQ3BVOVB3?oc=5",
      "site": "ニュース"
    },
    {
      "title": "（京都）京丹後市久美浜町でクマ出没 １０月２４日",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOYmp5dGdRcV9YbnlHbS1zUGlBWUxiRVNEZGVDaFhkS2ZKSzA5dkFrUTJPcWpRNFVPUVpsVExkWTg0YW45LUJFQVQ0VVR1Q0t5SDlXcERHMXg2RkdXaHd2b1Z0T1BwVlRISENCVTdBVlk0enZzZTllY090Y2ZiYnBpdHJlUUNSVG12cFdnV2Z5QjFyeHkyQkl5cVQyc2JiaU8yUEHSAaIBQVVfeXFMTmJqeXRnUXFfWG55R20tc1BpQVlMYkVTRGRlQ2hYZEtmSkswOXZBa1EyT3FqUTRVT1FabFRMZFk4NGFuOS1CRUFUNFVUdUNLeUg5V3BERzF4NkZHV2h3dm9WdE9QcFZUSEhDQlU3QVZZNHp2c2U5ZWNPdGNmYmJwaXRyZVFDUlRtdnBXZ1dmeUIxcnh5MkJJeXFUMnNiYmlPMlBB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（青森）五所川原市金木町喜良市桔梗野でクマ出没 １０月２４日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU3ZDTmhkcWd1UDdCa2hxaGNPQ3RSVFN3bEZxS3RPR3ZZa2paX3dHMlU5S21Od2oyUzRGN0VOTjhrV3l3SXFVN2Y4OGRfSnVDUnEwbHYzSHRyQ0dVM3pxLWNLcFhRN2FieDFzVUNnUzRZazU3SmZBSWw4czgwM1RlUndnNUVYN3pGa0JJTjhXdnlzc0U1MXVsYm9Fa0rSAaIBQVVfeXFMT2ZCRDZsTjNhZXVxNklvdVhNWlBTUTVmdmF4Q3VMR3ZRUWtJVjBMQkdXVlpSTFNfcnRhOGt3dTJPN2ROUms4c1hmbFhTT0FNaDFRSThodC1VVWZoczVIbzJCcFNaTGJfU0twZDUtUW9aaEZMaDAzNkhuUll2bEhvNHhQMGFZbmhsbk5nMGZ2LVprODNIVW8zOUUxZU1KUDNfVWZB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（兵庫）朝来市澤でクマ出没 １０月２４日",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQN05Ldm9Ja3JpV0J5REtxalZQQWF2VnNSaElUU3BmSkp6aWwzNzNfa2xyR2xPUlhUdEh2bXdKbF9sbmdmUHd5Z2FyQ2x5bk5FMlo5S3ZEaXB6YVRyWWl4U1NURG5jcHprUFpRdlluRDFyOXUwdEhudWtaNWN0TU83R0h2aVc3VjZvYlltU3JyeWE0TTNxeVAzSE5sM1NzczVJX2fSAaIBQVVfeXFMUDdOS3ZvSWtyaVdCeURLcWpWUEFhdlZzUmhJVFNwZkpKemlsMzczX2tsckdsT1JYVHRIdm13SmxfbG5nZlB3eWdhckNseW5ORTJaOUt2RGlwemFUcllpeFNTVERuY3B6a1BaUXZZbkQxcjl1MHRIbnVrWjVjdE1PN0dIdmlXN1Y2b2JZbVNycnlhNE0zcXlQM0hObDNTc3M1SV9n?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "足利でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBqMjVqOEFXdjdZWU1NM3RVeW5Ub3hrS2FfRXdTb1VxMENFanJrZWVXbWlxSDBydWk3V3RNWFdMVFIzdUtGSmRlMUNCQVZpZXFnRlUzS1lNOFV2bVU?oc=5",
      "site": "ニュース"
    },
    {
      "title": "市道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE44T1FKdTlLY0syaUhoZ0h3NnItWldyd3JZVlI5QlBVeEdxdG1UTGJwU3dDWWVBSURhSkhYRGllSkhhZXlCc3NMUjR6NktaZjVkMjJCRWxndTVCN29qXzc2eVdtdGpxNHVEaUE?oc=5",
      "site": "ニュース"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":4},{"pref":"京都府","count":4},{"pref":"福井県","count":3},{"pref":"福島県","count":3},{"pref":"島根県","count":1},{"pref":"静岡県","count":1},{"pref":"山口県","count":1},{"pref":"神奈川県","count":1},{"pref":"青森県","count":1},{"pref":"兵庫県","count":1},{"pref":"栃木県","count":1}];

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
        <span>対象期間: 2026年10月24日</span>
        <span>·</span>
        <span>公開: 2026-10-25</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={21}
        periodLabel={"2026年10月24日"}
      />

      <h2>主要事案の分析（人身被害・都市部および生活圏出没）</h2>
      <p>2026年10月24日の集計において、人身被害キーワードに合致する事案および緊急銃猟等の捕獲事例は0件であった。しかしながら、都市部キーワードに合致する事案が3件抽出されたほか、人間の日常的生活空間に極めて近接した危険度の高い出没が複数記録されている。北海道士別市では、住宅の防犯カメラに体長約1.5メートルのヒグマが歩行する姿が捉えられ、住民がスマートフォンの通知によって目撃する事態が発生した（※1）。また島根県安来市荒島町では、夕刻に荒島小学校に近いカキ畑で成獣とみられるクマ1頭が目撃された。さらに静岡県富士宮市下稲子では、JR身延線稲子駅付近での出没が確認されている。加えて、神奈川県秦野市の弘法山公園では過去に放獣された個体の再出没が確認されており（※5）、生活圏や利用頻度の高い公共空間への侵入事案が各地で目立っている。</p>
      <h2>地域別の出没状況と傾向</h2>
      <h3>北海道地方</h3>
      <p>北海道内では計4件のヒグマ関連事案が報告された。士別市での住宅敷地内カメラへの撮影（※1）のほか、石狩市厚田望来（※2）および空知管内の上砂川町（※3）において出没が報告された。また最北部の猿払村鬼志別東町では足跡が確認されている。市街地周縁の住宅地から農村部、沿岸域に至るまで幅広い環境で痕跡や姿が確認されており、秋季の移動範囲の広域化がうかがえる。</p>
      <h3>東北地方</h3>
      <p>東北地方では計4件の出没が記録された。内訳は福島県3件、青森県1件である。福島県では耶麻郡北塩原村において国道459号を含む幹線道路を横断する事案が集中的に報告された（※4）。青森県においては五所川原市金木町喜良市桔梗野の集落周辺での出没が確認されている（※10）。東北地方の事例では、交通網と交差する山林境界部での移動事案が顕著であり、車両との衝突リスクや通行者との遭遇リスクが懸念される。</p>
      <h3>関東地方</h3>
      <p>関東地方では計2件が報告された。神奈川県秦野市の弘法山公園では、過去に捕獲・放獣された個体が再び公園内に出没したことが判明した（※5）。都市近郊の緑地空間において、学習放獣された個体が再度人間活動域に定着または再侵入している実態を示している。また栃木県足利市においてもクマの目撃が報告されている（※12）。</p>
      <h3>中部地方</h3>
      <p>中部地方では計4件が記録された。福井県小浜市において3件の集中した目撃が報告されており、同日15時35分に須縄で成獣1頭・幼獣2頭の親子グマ、16時10分に谷田部で幼獣1頭、21時00分に和多田で成獣1頭がそれぞれ目撃された。日中から夜間にかけて異なる集落環境で目撃が連続しており、複数個体群の活発な移動が確認される。また静岡県富士宮市下稲子の身延線稲子駅付近でも目撃があり、交通インフラ近接域への進出が記録されている。</p>
      <h3>関西地方</h3>
      <p>関西地方では計5件が確認され、全国で最も高い集中度を示した。京都府内では4件が報告され、京都市北区西賀茂蛙ケ谷（※6）および北区内でのクマ様動物の目撃（※8）、南丹市美山町鶴ケ岡（※7）、京丹後市久美浜町（※9）と、丹後から丹波、京都盆地北端の山麓部に至る広範囲で出没がみられた。兵庫県では朝来市澤で出没が確認されている（※11）。市街地近郊山麓および中山間地域の集落周縁での出没が主となっている。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方では計2件が記録された。島根県安来市荒島町の小学校近接カキ畑における成獣の目撃、山口県萩市椿東の市道における目撃（※13）である。いずれも集落内や道路インフラ上への侵入である。四国地方および九州地方における出没情報の報告は0件であった。</p>
      <h2>2026年10月24日 出没・痕跡確認事案集計表</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村</th>
              <th className="px-3 py-2">場所・詳細</th>
              <th className="px-3 py-2">頭数・規模</th>
              <th className="px-3 py-2">情報源</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">士別市</td><td className="px-3 py-2 text-xs">住宅敷地内（防犯カメラ）</td><td className="px-3 py-2 text-xs">成獣1頭（約1.5m）</td><td className="px-3 py-2 text-xs">報道（TBS NEWS DIG）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">石狩市</td><td className="px-3 py-2 text-xs">厚田望来</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道（dメニューニュース）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">上砂川町</td><td className="px-3 py-2 text-xs">町内</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">猿払村</td><td className="px-3 py-2 text-xs">鬼志別東町</td><td className="px-3 py-2 text-xs">足跡</td><td className="px-3 py-2 text-xs">自治体情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">五所川原市</td><td className="px-3 py-2 text-xs">金木町喜良市桔梗野</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道（dメニューニュース）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">北塩原村</td><td className="px-3 py-2 text-xs">国道459号ほか</td><td className="px-3 py-2 text-xs">横断目撃</td><td className="px-3 py-2 text-xs">報道（福島テレビ等）</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">足利市</td><td className="px-3 py-2 text-xs">市内</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">秦野市</td><td className="px-3 py-2 text-xs">弘法山公園</td><td className="px-3 py-2 text-xs">放獣個体1頭</td><td className="px-3 py-2 text-xs">報道</td></tr>
            <tr><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">富士宮市</td><td className="px-3 py-2 text-xs">下稲子（稲子駅付近）</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">自治体情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">須縄</td><td className="px-3 py-2 text-xs">成獣1頭・幼獣2頭</td><td className="px-3 py-2 text-xs">自治体情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">谷田部</td><td className="px-3 py-2 text-xs">幼獣1頭</td><td className="px-3 py-2 text-xs">自治体情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">和多田</td><td className="px-3 py-2 text-xs">成獣1頭</td><td className="px-3 py-2 text-xs">自治体情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">京都市</td><td className="px-3 py-2 text-xs">北区西賀茂蛙ケ谷</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道（dメニューニュース）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">南丹市</td><td className="px-3 py-2 text-xs">美山町鶴ケ岡</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道（dメニューニュース）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">京丹後市</td><td className="px-3 py-2 text-xs">久美浜町</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道（dメニューニュース）</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">朝来市</td><td className="px-3 py-2 text-xs">澤</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道（dメニューニュース）</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">安来市</td><td className="px-3 py-2 text-xs">荒島町（小学校至近カキ畑）</td><td className="px-3 py-2 text-xs">成獣1頭</td><td className="px-3 py-2 text-xs">自治体情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">萩市</td><td className="px-3 py-2 text-xs">椿東（市道）</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">報道</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価（季節要因・餌資源・人口圏接近度）</h2>
      <p>10月下旬という季節要因において、クマ類は冬眠前の採食行動（過食期）に伴い活動域を拡大させる傾向がある。島根県安来市の事例にみられるように、小学校に隣接するカキ畑といった未収穫果樹や残存果実の存在は、野生動物を人間居住圏へと強く誘引する要因として作用している。また、福島県北塩原村における幹線道路（国道459号）の横断や、山口県萩市での市道出没、静岡県富士宮市での鉄道駅付近への出没など、交通動線と生息域の境界部における遭遇リスクが急増している。さらに神奈川県秦野市で発生した放獣個体の再出没事案は、一度人為的介入を行った個体であっても、人間圏周辺の緑地に再定着する可能性を示唆している。福井県小浜市のように同日内で成獣・幼獣・親子連れが別地点で確認されている地域も含め、生活道路、学校周辺、農地周縁における早朝・夕刻の移動には警戒が必要である。</p>

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
          <dd>2026年10月24日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-25</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-25</dd>
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
