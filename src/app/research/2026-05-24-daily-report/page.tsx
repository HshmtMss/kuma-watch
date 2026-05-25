// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月24日 / mode: daily-report / 生成日: 2026-05-25
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-24-daily-report";
const TITLE = "2026年5月24日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年5月24日の国内クマ出没は計15件確認された。島根県で5件、新潟県で4件と中国地方・中部地方で多発したが、人身被害や都市部での重大事案は報告されなかった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-25",
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
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
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
      "title": "新潟県新発田市におけるクマの出没について",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUHltSE9aeDlreEtxUjhSU3BvdnpHZWhmdHU2R2ZVWW8zRS04T2ZnSFFRWnJNeFZBcVF6eVpwVXhPM1NYcjBXNndsbTFWQWJmYjNwekktTkp2alJhc3JITVhfYTNsNXVnZUdYcUs5RUZLelB2ejZ3MDJaYVBnOXh5V1NWVE52aHJleF85TEk4VnZWT2tEeVVGSi1vVXLSAaIBQVVfeXFMTVg2UjBwekp3QnQtb0dHMVpZYy1NWGtJdWZaLW5zbHpXOGFuZXVLcWFLRXp1MXBHaEJIWjEwZnpIUUYwNDJUSVl4RU1SanVKaDJXcDVoNkdxaE9fN21uclh3TXJDRHE4Vk54N3BaV2ljcFRiMlAxd1B0NmhMQVdDNkp4YlhvcThtNUNrZURrX1gtelQwa2JWcmY0X2d4S1ZRcUxn?oc=5",
      "site": "報道"
    },
    {
      "title": "栃木県那須塩原市におけるクマの出没について",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR2dTRjdwME56Z0hoNzlYQURjTHItbW9uRFJvUF9lRi1WRkRicHNocmRKOF9WVWMzU0d2Qk9pV2RBSkZpUzJvOWF1WG9xV2tvV1M4ckViUElGeXlsWm4zUU9JclY2VDE1aEh5V0pJN2trb3JDQl9vLTdhWVlsVlk1Ym43U1JCX2RRb3JmcEpIc0dGbG0xTXUyUlhWZ07SAaIBQVVfeXFMTVFVb1FBa01RcUZRWVNUSlhCbWIzYnM5eVkzRVBiODItYUdkV2E4aUU0eW15cjNScExzbEw2SnRJRzZXV1VQQXJ4Q0ZUMkhPMVBLcmh4SjgxOVVSUUFpNGM0eW5xbFB2NExXUjNzY29KVXp4YVg0Wjd6Q25mVTkyYVhtVVM5TWNKZURfb2pRaFh0d0VhWWtTeEd0bUV1bFNwb1ZB?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県十和田市におけるクマの出没痕跡について",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZTFTa20zZ055bnNya3RHbzlQQXhqTEc3aGJXS0VMaERzNVhmY3ZUS2RIS1IxUFpyVmllanUwTjRucXVtYXNETW1HUU5KVHFyWkxxWXRWTm4tU1ZqcEhVQTVYc0ZFQm1nWXM4NEk3OFd6dEZ2UVl5LXdiVGdZN0ZFUHZWVEVSdVdMV2dVbkY5eF9GUW9OVkMxT0hvaFE0Y3NuUnlMTFdzU2J2Q2RIeWM1VHJnekNKcHZfc2h4OGM4aTZOMVNnWGtkaExWaVlQbFFfSWxEWVZYMmc1QlBLeGpnVGNsRll6TU9wSUhNZU15SzF6Z9IBogFBVV95cUxNSzZId1psNWRKQVlaY2tVam03Wk03QkJEQmVQOVJrSnpPOEQxRFJzcDJROVVsRjRHZmJHTUg4VzNodDV3TWZUZWFYNUVzZF9DWlJHZWRhVDZ5c0VUUzktaFJ3eXJXX3pxRVhKU3N5RTR0V2FxT1NKWVJaQkF1b0VMQzZoVXdMNHJabktyeFl2UnpSN3UzdlFTYzk1cGExVUNmUHc?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県花巻市におけるクマの出没について",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQR1FjcmZnZXV5VHRXSkVyWTJHRkZlQjExMnl3VTRROGJqNGlNT3BSdldBakYwVE1MVWQ4N29LbFdsQzd6eUV1OTAzZHR0czlDTzBEbXhZVmMtaXBfdFZycmthaVhjQ09ZQndQZlBaMzZ3ODJwVVdkNl9uVXllRm9lMEtVV2JqUlFQSzZvZmFBSG11eGdFQnRtSE9IRHhnUDhtTThpdUVTU1F2Q0xhbjZhOEdVNFFiQXJMenBUYVdMc2l1MjY3U0hHSVhwS2liYVBPak5pVFdyTW9WcVpvbFJZanlDaUp1VlJURFl2ZGFqVWlSQdIBogFBVV95cUxPai1FaW5RV19WVmlZUG1XdzFVMU82dnd6Z1RqMGY4bXp1WHFzLXFRYkpxVXo5eVBHcHVrYzFFbk9UU3I4Zk1tQVY2QWR1ZllLeEYwVTVkSkV1ZHBoWHJUazF0UTBORlZTRUF5NUhteV9qdzUzb004S3EydksyZHN4c2dTcGJxSEFuTG9vb3lhUlV1X25wbTJxUWhnbUNNeDhKYVE?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県花巻市幸田におけるクマの出没について",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcFBzZzV1NkZISThmQ2xNRE5PYm9nenBWTWZRd2JpYVhoQUxoRFl3bXZ6MXlJRE42LXhwRnppTTZONVQyc3JfSFlEUjBVVGdkSUpFNmJsem5PTk9vZnZ3NzFxeGtyaFJWUmQxUEtsRzlEQmFsWkwtWjhkNzZUakswTllFNEZ3RllNbU80LU5odFB6MWhyNnhQRXJ6OXPSAaIBQVVfeXFMUHRGdHRvckJoMUxyaWFHc1hBUV92LXBfY3VWeHlEZTFBZnZsc1dCMXJqZ3pNVDRFMnJ2ZEpaeHNnLVNpV1ZZZEpNT0w1WkFaVFhpRVl3VXc2WkRYUm1adkdReUh1VlhkSm1yTjQxYWNSRGszWXNlSE96V0YxOEp6WnNKQ3JGWXQ1NTBtUnhvbHpfd1dicW1MOThUeGtFckJaQTZn?oc=5",
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
        <span>対象期間: 2026年5月24日</span>
        <span>·</span>
        <span>公開: 2026-05-25</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年5月24日、KumaWatchが収集した国内のクマ出没情報は総計15件であった。人的被害や捕獲・銃猟に至る事案は確認されず、目撃および痕跡の発見が主であった。出没は島根県（5件）、新潟県（4件）を中心に、東北から中国地方にかけての広域で確認された。本稿では、当日の出没事案を地域別に分析し、リスク評価を行う。</p>
      <h2>主要事案の概観</h2>
      <p>当日、人身被害や市街地中心部への出没、行政による緊急対応（捕獲・銃猟）といった重大事案は報告されなかった。確認された事案はいずれも、山間部やその周辺地域における目撃や痕跡情報に留まる。</p>
      <h2>地域別の出没傾向</h2>
      <h3>東北地方</h3>
      <p>青森県で1件、岩手県で2件の計3件が報告された。青森県十和田市では出没の痕跡が確認された（※3）。岩手県では花巻市の2箇所（松園町、幸田第20地割）でそれぞれ目撃情報があった（※4, ※5）。いずれも山林に近い地域での情報であり、農耕地や住宅地への接近に対する警戒が必要である。</p>
      <h3>関東地方</h3>
      <p>栃木県で3件が報告された。うち1件は那須塩原市高林での目撃情報である（※2）。他の2件については、地域情報に基づく記録であるが、提供されたデータからは詳細な地点や状況は不明である。</p>
      <h3>中部地方</h3>
      <p>新潟県内で4件が報告され、活動の活発化が示唆される。新発田市での目撃（※1）のほか、南魚沼市では柿の木の下で足跡が発見された。上越市では2件の目撃があり、1件は国道走行中のドライバーによるもの、もう1件は板倉区の民家付近で、クマが南西の山へ移動する様子が確認された。これらは生活圏に隣接したエリアでの出没であり、住民の注意を要する。</p>
      <h3>中国地方</h3>
      <p>島根県で当日最多となる5件が集中して報告された。特に益田市では、バス停付近、交差点付近、リサイクル施設付近（2頭）、JR山口線の線路上と、市内の広範囲で4件の目撃が相次いだ。雲南市でも国道54号線上で幼獣1頭が目撃されており、親離れした若い個体の行動が活発になっている可能性が考えられる。これらの事案は、交通網や事業所周辺など、人間活動エリアへの接近が顕著であり、この地域における遭遇リスクの高まりを示している。</p>
      <h2>出没情報の集計と特徴</h2>
      <p>当日の出没情報を都道府県別に集計した結果を以下に示す。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な市町村</th>
              <th className="px-3 py-2">特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">益田市, 雲南市</td><td className="px-3 py-2 text-xs">国道、バス停、線路などインフラ周辺での目撃多数。幼獣の報告あり。</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">上越市, 新発田市, 南魚沼市</td><td className="px-3 py-2 text-xs">国道、住宅地付近での目撃、足跡の発見など多様な形態。</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">那須塩原市</td><td className="px-3 py-2 text-xs">詳細不明な情報を含むが、山間部での目撃が報告された。</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">花巻市</td><td className="px-3 py-2 text-xs">同一市内での複数目撃。</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">十和田市</td><td className="px-3 py-2 text-xs">痕跡の発見。</td></tr>
          </tbody>
        </table>
      </div>
      <p>情報源の内訳を見ると、報道機関由来の情報（URLあり）が5件、島根県および新潟県の地域情報ソースが計8件、その他が2件となっている。公式発表が0件であることから、市民や報道からのボトムアップ情報が主体となっていることがわかる。</p>
      <h2>リスク評価</h2>
      <p>当日の出没状況について、季節的要因、餌資源、人口圏への接近度からリスクを評価する。</p>
      <ul>
        <li>季節的要因: 5月下旬は、冬眠から覚めたクマが繁殖期を前にして活発に採食行動を行う時期である。特に、前年に生まれた若い個体が親離れ（分散）する時期と重なり、経験の浅い個体が方向を誤って人里近くに迷い込む傾向が高まる。島根県で報告された幼獣の目撃事例は、この分散行動の一環である可能性が高い。</li>
        <li>餌資源の状況: この時期、山間部の餌資源はまだ限定的である。タケノコや山菜などの採食が主となるが、それらを求めて標高の低い場所や人里に近い沢筋まで行動範囲を広げることがある。食料を求めて人里へ接近する根本的なリスクは依然として高い状態にあると考えられる。</li>
        <li>人口圏への接近度: 当日の報告では、新潟県上越市や島根県益田市の事例のように、国道、住宅地、事業所、鉄道路線といった人間の生活・経済活動圏内で目撃が相次いだ。これは、クマの生息域と人間の活動域の重複が恒常化していることを示唆する。直接的な被害はなかったものの、偶発的な遭遇の可能性は非常に高い状況であったと評価できる。</li>
      </ul>
      <p>総括として、2026年5月24日は人身被害などの重大事案こそなかったものの、出没件数は多く、特に島根県や新潟県では生活圏への接近が目立った。春の活動期におけるクマの行動、特に若い個体の分散が活発化していることを踏まえ、対象地域では住民による自衛策の徹底と行政による迅速な情報提供が引き続き重要である。</p>

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
          <dd>2026年5月24日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-25</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-25</dd>
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
