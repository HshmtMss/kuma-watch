// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月21日 / mode: daily-report / 生成日: 2026-11-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-21-daily-report";
const TITLE = "2026年11月21日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月21日に収集されたクマ関連事案は全国で計11件であり、栃木県で3件、北海道および群馬県で各2件、滋賀県、京都府、山梨県、新潟県で各1件が記録された。住宅街や集合住宅の駐輪場といった居住区近接域への出没が目立ち、大津市では錯誤捕獲も確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-22",
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
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
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
      "title": "2026年11月21日 群馬県前橋市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5HUkdCb25nZUtwMUlNWmllUzM5MkNMSkFOM1g0QWFYaTJlUDI5UjlmREJsa1FjcWdOcTg1cV9EWXp0anRMSllhRldMZHdjeTRUYVZFZFRxVFpNWFhaVldZZE44N1JPX1dzYlc1dWtydVByeDlKeHBzbnFBWUx2TlU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 群馬県前橋市 文京町2丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTG9ROUpsaTBFaGlrdmFTZUowQUlnWGpTQmg5Q2hrT3NyVDV4eDBaamdRdURYZjdXQlVTNS1FOVdscHg5VGZlU1pQUlBQN2pHX3hpQ1BveHlNRGVWNzNUV0hwSmM1cVp6ank3OUFSUkNONldwMmdWalYyREx1cGVPRlYxQVRONlVTc2dkNGpSMExkQTBhTUNrNjJVY3bSAaIBQVVfeXFMT3lNbTRyblVFSkFmTGl0NEtIZkJNQVd0WjhVdHR0aWZqWHE5d19CTXhyOGd0TU9xRm43a1ZvT2ZPZ2YxTkE0Y2EtU0R4MjItdS1OVEZvTGxKM2hFdU1aOWd3ODIzY20xQ25RVW1qSWFEeWN5UTBIN2tsaFlrTHpZMnFZR1pVSmIxbmxkVW05Vjc3ZUR6dmlaSmxyNlZwd1pZVEFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 北海道千歳市 公務員住宅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9jbmlXY2oyNmtoU2FpbEZCdUdJUEU4a3JJcElkZ0xfUWxOWmtPNk12NlB0MmJNNkNWSFJPY21lSkRHNkk0NHFlRlVrZ0Z2Z2pjdVQ5cE93LUxhLUEyNnNYRFRVa183ZUtGOEczNkpCMXVZSEI5bkxKdmYxX3p1RDQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 北海道名寄市の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月21日 栃木県那須塩原市 横林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdjkyYk9CejRScnZ2V2dqQkl2dEVlWDd2a2lHeUJIVnhES1pHajdDa1ZmNG9UX2lFY1dncXBERHozMmpwY3ZTd1czc2J3eVh2ZnNBQWF6NTFsM2ZhNlZZX094bjUwWWFLQjZ6RjJ2TGJRUm9BRDZEUGI2R1U0b3duVjNmelRMSDQ5VWNscl91SzNOU3lGMXJYUzd0b1HSAaIBQVVfeXFMTkNXcTVyVGhWZ0RGVTZFOVp5WXBxSTJibVJzakhzYlpqRExjY2NxWUJMX1EybkdpWDJHLWMwUVAyYUlZSGp6d2dJaU5OWFZwRTVEaGtGcUxENG1YY1Y3aHJwblplUXlKZUN4YlYzbzNxaWxiaktDdGY5cjYwU2FsYl83eUNPczBoQVlvS1JtVnNUbjJ3SjNxZ09GOTZ2eFVIM0ZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 栃木県那須塩原市 塩原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFB6WVFiRVM2aWdzdS00eU44eXFWR3QwVW9JOVpsR3lId2pJeVRWdFM5cHhsQjNjTHhfU256NEpqcVZPN3N6cXVwdEpiWQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 栃木県那須塩原市の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月21日 山梨県上野原市 鶴島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWkpycm9BQTBNcG9NQ0RjcFBRYWxzOWRLZjNYR1JHX09iQ2FmaU5IVXppQkExYkN4aHExbUluUk5KdUNQeVppUGZJNWtLMzRGa2Z3UlljRzRzMDBGQ1JYY01uNlBWT1B0bEd3M2lOQkFCVVFhRFk0aWJkQk5fekFET0NkVkZwRUxvRExOa2s3NkQyQy03R0hLWFVwdXrSAaIBQVVfeXFMT0ZDbktfaFo2TDV5S0Zrd1BWRktEZHMwZzFldG5QOXVPelhOeldPUFVXbXdkaUR3WkNlRGx2Q3JRZnFuZnpsU2hGMVhqNFJuZ1VfZmpUbVFBaE51d2hPZGpGMnFKNjJrR0p4Q21peHB4TGx2cTlQZUFBVjlSVDNWenFBMFhMa1hLWFd0eEVoaTZvakFQUHdlWE9GN2RVRUxvMmVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 新潟県阿賀町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE11amJReGFXS1R4cmZ4SnB5b0JRZXJkQjlHcGR2NVJJUTZ5eDc3MEwwbUpIVHlFYVRsVnJQdWlGaTFmbTho?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月21日 滋賀県大津市 栗原の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月21日 京都府京丹後市 峰山町鱒留の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPU0ZfMEN4N1hQY3NzQzIyelhoTU9SQmwzWlRYTEptNFZWdWhaOEFhLVBwWHRqeWtWYVM1S3JXVHAwc1FHWjIyMDIyZ2JVSjZkb21mOGVnYXhhY3B5M28yWHJLcm10b19iWFFnYU1VaUktRktXNXNTT2RuS1ZhNGoxVXdvemFwZkp4MUotczF5dTVJUkg4emVQREpocTHSAaIBQVVfeXFMUFcxWFVyUndCMGZUS2hPRExZMnN4UEtNRHhIeTN6aldsb0xoejVrbG5VNXRoNzhTc1ZTLXRYb1I3eEhQR1RtT3kwMU1LTGNzaE53VmJ5cDc3LTMtWmZEdVBnVGFqSGQ0VVF3VUt3RnJGZU5UMk1iNThvRXpMZ2pZTlZEOUZiMlhNckxZU1Nsb0M3Zzl3ekFXSVlZWER2MmxDSktR?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"栃木県","count":3},{"pref":"北海道","count":2},{"pref":"群馬県","count":2},{"pref":"滋賀県","count":1},{"pref":"京都府","count":1},{"pref":"山梨県","count":1},{"pref":"新潟県","count":1}];

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
        <span>対象期間: 2026年11月21日</span>
        <span>·</span>
        <span>公開: 2026-11-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={11}
        periodLabel={"2026年11月21日"}
      />

      <h2>主要事案の状況</h2>
      <p>当日に記録された事案のうち、特に人身安全管理上の懸念が高い事例として、市街地や住宅密集地における目撃が確認された。群馬県前橋市では、高校生が追いかけられた場所の近くにあたる住宅街においてクマが目撃され、捕獲準備が進められていると報じられた（※1）。また同市内では文京町2丁目においてもクマ出没の可能性が記録されている（※2）。住居が集合する空間における出没は住民の生活動線と直接交差するため、高い警戒態勢が必要とされる。さらに北海道千歳市においては、公務員住宅の駐輪場でクマが目撃された（※3）。日常的に住民が出入りする生活空間の内部で大型野生動物が確認された事例であり、偶発的な遭遇による事故リスクが懸念される。これらの事案では、自治体や関係機関による捕獲準備や情報周知など、居住地域における初動対応が重視される状況となっている。</p>
      <h2>地域別の出没動向</h2>
      <h3>北海道地方</h3>
      <p>北海道においては計2件の事案が記録された。千歳市では公務員住宅の駐輪場という居住インフラの内部において目撃が確認された（※3）。生活圏への直接的な接近例であるのに対し、名寄市においては目撃事案（No.62）が記録された（※4）。居住区への極端な接近事例と、地域環境における目撃事案が並行して存在しており、道内各地域における警戒態勢の継続が求められる動向を示している。</p>
      <h3>関東地方</h3>
      <p>関東地方では合計5件が記録され、全国の総件数の半数近くを占める集中が見られた。栃木県では那須塩原市において計3件が記録された。同市横林での出没（※5）のほか、塩原のもみじ谷大吊橋近くにおける目撃（※6）、および同市内での出没事案（※7）が確認されている。観光橋梁周辺や集落地帯を含む複数の地点で出没が相次いでおり、地域内での行動が活発化していることが示唆される。群馬県では前橋市において住宅街での目撃および捕獲準備が報じられた事案（※1）と、文京町2丁目における出没の可能性（※2）の計2件が記録された。関東地方においては、山林隣接域にとどまらず、都市型住宅地に至るまで幅広い環境において事案が発生している点が特徴的である。</p>
      <h3>中部地方</h3>
      <p>中部地方では2件の事案が確認された。山梨県上野原市鶴島において出没が記録された（※8）。また新潟県阿賀町においては、国道上でクマ1頭が目撃された（※9）。道路網などのインフラ空間への出没は、車両運行への支障や通行者との不意な遭遇の危険性を内包しており、交通動線における安全確保と注意喚起が重要な課題となる。</p>
      <h3>関西地方</h3>
      <p>関西地方では2件の事案が記録された。滋賀県大津市栗原においては錯誤捕獲が発生した（※10）。錯誤捕獲は鳥獣管理用わな等の運用過程において対象外となるクマが捕獲される事象であり、捕獲場所における作業従事者や周辺環境の安全確保を伴う専門的な処置が求められる。また京都府京丹後市峰山町鱒留においてもクマの出没が記録された（※11）。関西圏の山間集落周辺においても出没が継続しており、農林業活動やわな管理における留意が必要である。</p>
      <h2>事案件数一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">記録ID</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">場所・詳細</th>
              <th className="px-3 py-2">事案区分</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">S1</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">前橋市</td><td className="px-3 py-2 text-xs">住宅街（捕獲準備中・高校生事案近傍）</td><td className="px-3 py-2 text-xs">目撃（報道）</td></tr>
            <tr><td className="px-3 py-2 text-xs">S2</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">千歳市</td><td className="px-3 py-2 text-xs">公務員住宅の駐輪場</td><td className="px-3 py-2 text-xs">目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">S3</td><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">大津市</td><td className="px-3 py-2 text-xs">栗原</td><td className="px-3 py-2 text-xs">錯誤捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">S4</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">那須塩原市</td><td className="px-3 py-2 text-xs">横林</td><td className="px-3 py-2 text-xs">出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">S5</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">那須塩原市</td><td className="px-3 py-2 text-xs">塩原（もみじ谷大吊橋近く）</td><td className="px-3 py-2 text-xs">目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">S6</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">前橋市</td><td className="px-3 py-2 text-xs">文京町2丁目</td><td className="px-3 py-2 text-xs">出没の可能性</td></tr>
            <tr><td className="px-3 py-2 text-xs">S7</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">京丹後市</td><td className="px-3 py-2 text-xs">峰山町鱒留</td><td className="px-3 py-2 text-xs">出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">S8</td><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">上野原市</td><td className="px-3 py-2 text-xs">鶴島</td><td className="px-3 py-2 text-xs">出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">S9</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">阿賀町</td><td className="px-3 py-2 text-xs">国道上（1頭）</td><td className="px-3 py-2 text-xs">目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">S10</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">那須塩原市</td><td className="px-3 py-2 text-xs">（記載なし）</td><td className="px-3 py-2 text-xs">出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">S11</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">名寄市</td><td className="px-3 py-2 text-xs">（記載なし）</td><td className="px-3 py-2 text-xs">目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <h3>季節要因</h3>
      <p>11月下旬という時期は、冬期前の行動変化や活動範囲の調整が継続している段階にあたる。寒冷地である北海道から関西地方に至るまで、広域にわたり目撃や出没、錯誤捕獲が記録されており、季節的な行動の活発さが維持されていることがうかがえる。この時期の移動行動は、予期せぬ生活空間への迷い込みを誘発する要因となる。</p>
      <h3>餌資源の影響</h3>
      <p>山林環境における餌資源の分布状況は、個体の行動範囲を規定する要因となる。自然林から農地、集落、河川敷などへの移動経路において、新潟県阿賀町の国道上（※9）や栃木県那須塩原市の橋梁周辺（※6）のように、人工構造物や移動路と重複する地点での目撃が生じやすい。餌資源の探索に伴う空間利用の拡大が、人間活動空間への接触を後押ししていると考えられる。</p>
      <h3>人口圏接近度</h3>
      <p>当日の顕著な特徴は、人口密度の高い生活圏への接近事例が複数みられた点にある。群馬県前橋市の住宅街（※1）や文京町2丁目（※2）、北海道千歳市の公務員住宅駐輪場（※3）など、住民が日常的に活動するエリア深くまで侵入している。過去に高校生が追尾された地点の近くにおける再目撃（※1）が示すように、一度人為的空間へ接近した地域では再出没の危険が続く傾向がある。大津市での錯誤捕獲（※10）も含め、人間活動と生息域が接する警戒領域において、資材の適切な管理と継続的な監視体制を維持することが不可欠である。</p>

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
          <dd>2026年11月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-22</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-22</dd>
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
