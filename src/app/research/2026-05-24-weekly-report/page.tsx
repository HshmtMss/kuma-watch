// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月17日〜2026年5月24日 / mode: weekly-report / 生成日: 2026-05-25
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-24-weekly-report";
const TITLE = "2026年5月17日〜2026年5月24日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年5月17日から24日の週、国内のクマ出没は161件と高水準で推移した。特に新潟県と島根県で多発し、新潟県では人身被害も1件発生した。市街地や住宅地での目撃も相次いでおり、全国的に警戒が必要な状況である。";

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
      "title": "岩手県花巻市 松園町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQR1FjcmZnZXV5VHRXSkVyWTJHRkZlQjExMnl3VTRROGJqNGlNT3BSdldBakYwVE1MVWQ4N29LbFdsQzd6eUV1OTAzZHR0czlDTzBEbXhZVmMtaXBfdFZycmthaVhjQ09ZQndQZlBaMzZ3ODJwVVdkNl9uVXllRm9lMEtVV2JqUlFQSzZvZmFBSG11eGdFQnRtSE9IRHhnUDhtTThpdUVTU1F2Q0xhbjZhOEdVNFFiQXJMenBUYVdMc2l1MjY3U0hHSVhwS2liYVBPak5pVFdyTW9WcVpvbFJZanlDaUp1VlJURFl2ZGFqVWlSQdIBogFBVV95cUxPai1FaW5RV19WVmlZUG1XdzFVMU82dnd6Z1RqMGY4bXp1WHFzLXFRYkpxVXo5eVBHcHVrYzFFbk9UU3I4Zk1tQVY2QWR1ZllLeEYwVTVkSkV1ZHBoWHJUazF0UTBORlZTRUF5NUhteV9qdzUzb004S3EydksyZHN4c2dTcGJxSEFuTG9vb3lhUlV1X25wbTJxUWhnbUNNeDhKYVE?oc=5",
      "site": "news.google.com"
    },
    {
      "title": "岩手県花巻市 幸田第20地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcFBzZzV1NkZISThmQ2xNRE5PYm9nenBWTWZRd2JpYVhoQUxoRFl3bXZ6MXlJRE42LXhwRnppTTZONVQyc3JfSFlEUjBVVGdkSUpFNmJsem5PTk9vZnZ3NzFxeGtyaFJWUmQxUEtsRzlEQmFsWkwtWjhkNzZUakswTllFNEZ3RllNbU80LU5odFB6MWhyNnhQRXJ6OXPSAaIBQVVfeXFMUHRGdHRvckJoMUxyaWFHc1hBUV92LXBfY3VWeHlEZTFBZnZsc1dCMXJqZ3pNVDRFMnJ2ZEpaeHNnLVNpV1ZZZEpNT0w1WkFaVFhpRVl3VXc2WkRYUm1adkdReUh1VlhkSm1yTjQxYWNSRGszWXNlSE96V0YxOEp6WnNKQ3JGWXQ1NTBtUnhvbHpfd1dicW1MOThUeGtFckJaQTZn?oc=5",
      "site": "news.google.com"
    },
    {
      "title": "栃木県那須塩原市 高林でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR2dTRjdwME56Z0hoNzlYQURjTHItbW9uRFJvUF9lRi1WRkRicHNocmRKOF9WVWMzU0d2Qk9pV2RBSkZpUzJvOWF1WG9xV2tvV1M4ckViUElGeXlsWm4zUU9JclY2VDE1aEh5V0pJN2trb3JDQl9vLTdhWVlsVlk1Ym43U1JCX2RRb3JmcEpIc0dGbG0xTXUyUlhWZ07SAaIBQVVfeXFMTVFVb1FBa01RcUZRWVNUSlhCbWIzYnM5eVkzRVBiODItYUdkV2E4aUU0eW55cjNScExzbEw2SnRJRzZXV1VQQXJ4Q0ZUMkhPMVBLcmh4SjgxOVVSUUFpNGM0eW5xbFB2NExXUjNzY29KVXp4YVg0Wjd6Q25mVTkyYVhtVVM5TWNKZURfb2pRaFh0d0VhWWtTeEd0bUV1bFNwb1ZB?oc=5",
      "site": "news.google.com"
    },
    {
      "title": "青森県十和田市 奥瀬栃久保でクマの出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZTFTa20zZ055bnNya3RHbzlQQXhqTEc3aGJXS0VMaERzNVhmY3ZUS2RIS1IxUFpyVmllanUwTjRucXVtYXNETW1HUU5KVHFyWkxxWXRWTm4tU1ZqcEhVQTVYc0ZFQm1nWXM4NEk3OFd6dEZ2UVl5LXdiVGdZN0ZFUHZWVEVSdVdMV2dVbkY5eF9GUW9OVkMxT0hvaFE0Y3NuUnlMTFdzU2J2Q2RIeWM1VHJnekNKcHZfc2h4OGM4aTZOMVNnWGtkaExWaVlQbFFfSWxEWVZYMmc1QlBLeGpnVGNsRll6TU9wSUhNZU15SzF6Z9IBogFBVV95cUxNSzZId1psNWRKQVlaY2tVam03Wk03QkJEQmVQOVJrSnpPOEQxRFJzcDJROVVsRjRHZmJHTUg4VzNodDV3TWZUZWFYNUVzZF9DWlJHZWRhVDZ5c0VUUzktaFJ3eXJXX3pxRVhKU3N5RTR0V2FxT1NKWVJaQkF1b0VMQzZoVXdMNHJabktyeFl2UnpSN3UzdlFTYzk1cGExVUNmUHc?oc=5",
      "site": "news.google.com"
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
          週次レポート
        </span>
        <span>対象期間: 2026年5月17日〜2026年5月24日</span>
        <span>·</span>
        <span>公開: 2026-05-25</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":232},{"pref":"北海道","count":73},{"pref":"石川県","count":60},{"pref":"福島県","count":52},{"pref":"新潟県","count":46},{"pref":"島根県","count":30},{"pref":"静岡県","count":17},{"pref":"山口県","count":16},{"pref":"群馬県","count":13},{"pref":"栃木県","count":11},{"pref":"山梨県","count":8},{"pref":"埼玉県","count":7},{"pref":"岩手県","count":7},{"pref":"富山県","count":6},{"pref":"鳥取県","count":5},{"pref":"東京都","count":4},{"pref":"滋賀県","count":4},{"pref":"岡山県","count":4},{"pref":"長野県","count":3},{"pref":"三重県","count":2}]}
        total={600}
        periodLabel={"2026年5月18日〜2026年5月24日"}
      />

      <p>2026年5月17日から5月24日の期間に、KumaWatchが収集した国内のクマ出没関連情報は161件に上った。これは、春の活動期に入り、全国的にクマの行動が活発化していることを示すものである。本レポートでは、この期間の出没動向をデータに基づき分析し、主要な傾向、地域別の特徴、注目すべき事案、および今後の警戒点について報告する。</p>
      <h2>主要トピック</h2>
      <h3>1. 新潟・島根両県における出没の集中</h3>
      <p>当期間における最大の特徴は、特定の地域への出没の集中である。総件数161件のうち、新潟県で48件、島根県で34件が報告され、この2県だけで全体の51%（82件）を占めた。これは、両県においてクマの個体群が活発に動いていること、また、人とクマの生活圏が近接しているエリアが多数存在することを示唆している。特に新潟県では人身被害も発生しており、地域住民や行政による緊急性の高い対策が求められる状況である。</p>
      <h3>2. 人身被害の発生と市街地への接近</h3>
      <p>5月19日、新潟県南魚沼市において、農作業中の住民がクマと衝突し負傷するという人身被害が1件発生した。山林に隣接する農地での活動リスクが現実のものとなった事案である。これに加え、都市部キーワードに一致する事案が11件確認された。具体的には、岩手県盛岡市の住宅地、新潟県十日町市の小学校グラウンドや駅付近、島根県益田市のJR駅付近など、人の生活空間の中心部での目撃が相次いでいる。これは、親離れした若い個体や、子連れの母グマが餌を求めて大胆に行動範囲を広げている可能性を示しており、市街地においても遭遇リスクが高まっていることを示している。</p>
      <h3>3. 意図しない遭遇リスク（錯誤捕獲）</h3>
      <p>滋賀県では、シカやイノシシなどの有害鳥獣を対象とした罠にクマがかかる「錯誤捕獲」事案が2件報告された。これは、クマの生息・移動域が、他の野生動物の管理対象エリアと重複していることを意味する。出没情報が直接報告されていない地域であっても、山林やその周辺に設置された罠は、意図せずクマとの遭遇を引き起こす可能性があり、山林に入るすべての人々が認識すべき潜在的リスクである。</p>
      <h2>地域別動向</h2>
      <h3>新潟県（48件）：人身被害と生活圏での目撃</h3>
      <p>県内最多の48件が報告された新潟県では、南魚沼市での人身被害に加え、村上市や十日町市などで市街地への出没が顕著であった。村上市では中学校方面、十日町市では小学校グラウンドや駅付近といった、子どもの活動エリアや公共交通機関の周辺での目撃があり、住民の日常生活における警戒レベルを引き上げる必要がある。</p>
      <h3>島根県（34件）：益田市周辺での頻出</h3>
      <p>島根県では、報告された34件の多くが益田市周辺に集中していた。JR飯浦駅付近や万葉公園、川下桜公園付近など、住民の憩いの場や交通の要所近くでの目撃が複数報告されており、地域におけるクマの定着、あるいは頻繁な回遊が疑われる状況である。</p>
      <h3>栃木県（15件）・石川県（14件）：広域での活発な活動</h3>
      <p>栃木県と石川県でも、それぞれ15件、14件と二桁の出没が確認された。栃木県では那須塩原市での出没が報道されており（※3）、これらの県でも広域でクマの活動が活発化していることが伺える。具体的な目撃状況の詳細は少ないものの、件数の多さは地域全体での注意喚起が必要であることを示している。</p>
      <h3>岩手県・富山県：都市部での特異な事例</h3>
      <p>岩手県盛岡市では、市街地の住宅地や緑地公園での目撃が複数報告された。また、花巻市でも松園町（※1）や幸田第20地割（※2）での出没が報道されている。富山県黒部市では、観光地である宇奈月温泉の黒薙駅構内をクマが通過するという、極めて特異な事例も発生した。これらの事例は、クマが都市環境や人工構造物を移動経路として利用している可能性を示唆するものである。</p>
      <h2>注目事案の時系列整理</h2>
      <p>当期間に発生した人身被害、捕獲、および都市部への出没の代表的な事案を以下に示す。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">場所</th>
              <th className="px-3 py-2">概要</th>
              <th className="px-3 py-2">種別</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">5月17日</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市飯浦町</td><td className="px-3 py-2 text-xs">JR飯浦駅付近で成獣1頭を目撃</td><td className="px-3 py-2 text-xs">都市部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">5月18日</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">十日町市松代</td><td className="px-3 py-2 text-xs">松代小学校グラウンドで子グマらしき1頭を目撃</td><td className="px-3 py-2 text-xs">都市部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">5月18日</td><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">真野大野二丁目</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">5月19日</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">南魚沼市境川地内</td><td className="px-3 py-2 text-xs">農作業中にクマと衝突し負傷</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">5月20日</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市山王町</td><td className="px-3 py-2 text-xs">住宅地内で成獣1頭を目撃</td><td className="px-3 py-2 text-xs">都市部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">5月20日</td><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">仰木町</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">5月21日</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">十日町市水沢第3</td><td className="px-3 py-2 text-xs">越後水沢駅付近で目撃、国道を横断</td><td className="px-3 py-2 text-xs">都市部出没</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>当該週は、新潟県と島根県を中心に出没件数が非常に多く、全国的にクマの活動が活発な時期にあることを裏付けた。特に、農作業中の人身被害の発生は、山際での活動リスクが顕在化したことを示す。また、小学校、駅、住宅地といった都市部での目撃が散見されることから、クマの行動範囲が人々の生活圏と深く交錯し始めている段階にあると評価できる。報道由来の情報は5件と限定的であり、自治体等からの一次情報収集の重要性が改めて示された。</p>
      <h3>次週の警戒ポイント</h3>
      <ul>
        <li>山菜採り、農作業、ハイキング等で山林およびその周辺で活動する際は、単独行動を避け、鈴やラジオなどで音を発し、人の存在をクマに知らせること。</li>
        <li>クマの活動が活発化する早朝および夕暮れの時間帯は、屋外での活動に特に注意を払う必要がある。</li>
        <li>市街地であっても、河川敷、連続した緑地、雑木林など、クマが移動経路として利用する可能性のある場所では周囲への警戒を怠らないこと。</li>
        <li>生ゴミや収穫しない果樹など、クマを誘引する可能性のあるものを屋外に放置せず、地域全体で誘引物の管理を徹底すること。</li>
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
          <dd>2026年5月17日〜2026年5月24日</dd>
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
