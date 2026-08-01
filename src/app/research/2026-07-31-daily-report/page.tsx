// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月31日 / mode: daily-report / 生成日: 2026-08-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-31-daily-report";
const TITLE = "2026年7月31日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月31日、国内で99件のクマ出没が報告された。人身被害は確認されなかったが、仙台市の大学構内など都市部での目撃や、北海道・長野県での捕獲事案が複数発生した。特に秋田県で最多16件が確認されるなど、東北地方での活動が活発である。本稿ではこれらの動向を地域別に分析し、今後のリスクを評価する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-01",
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
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
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
      "title": "宮城県 仙台市 東北大川内北キャンパスで熊目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE45ZEZGT2E1V2tWNEV3Z0N3RzI4V3FpV1Y2anFWVjRLM0c4M1VWZFU2aDk0RmJ3OFhhM0JacWg5eWptT3FnM2J4T0Q3cVZncWlEcXI0cGN3R0U0bC15WHVCNA?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県 仙台市 東北大学でアスファルトの上に座るクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9ueS1HS1B2MUREQXRHSXkzb01nd0RxNllOX0lva0ZNNmZQQkVWX0xSWXlsMHI5SGVNSU5qWHhocUpYSFp3MDlFNEMwNU1KMmVlMVFuYVhLbk44U0FJeEh5Z1ZXVEJiZ1NqVWVVZVREY1Byd29nUFBkWjl6UkY4S28?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県 仙台市 東北大学敷地内でアスファルトの上に座るクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5tblJ3NXY3ZGU1UzFRNjctWDFORVJfbGl2ZHR2UUZsMXVfLTJaNGlrTUFMVWhFT3Q0T04xLTRXS0psTENMNnZ2RGdPWnpINEk4djFPU1pMem0ycUlRYnJEVzEyRER2THM?oc=5",
      "site": "news"
    },
    {
      "title": "長野県 塩尻市 体重100キロのオスを捕獲・駆除",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBJWG9CS1owSlNBelB4MWNycG9xWGhmM2l0d0psQThwWHg1b2pPd21XSUVtN3dBams2TjQzN1VwQkwtTHg1WFVLSF9uSXgzalVpQ2RMUmdjM0V4b0V6UGZOVXU3Qy1rcEZscEpEZHd0Nm9ETEg30gF6QVVfeXFMT3VQRjFSbHNVMHVKVnMyUWVES3FiempMQlpRVW9zZHlzWkExQkRyRWlNMElsQlphcDRUQWIyTGZxMG85WVl5c09CcHMxUXQ4Yjd3cVhUbXBPbkZuWDhtZHdabFAtVW0tZmFEX05WTFl2YnlrVFUxM0lxRGc?oc=5",
      "site": "news"
    },
    {
      "title": "長野県 塩尻市 クマ1頭を捕獲",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1rNk1HM25FVV9aOVRTTzVoYkVabWFnVFBKYlI4VGZUNWtlSXVQT0VsM3k3S3FiTTlWZ2NRRE1scTdmczhtaWJ3QU9Ma0ZZdzhMd3VjSGFEeGlzV0VsQ2hiVXZqSGdqYkxwWEk1WnVRWmk?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 松前町 茂草地区1頭捕獲",
      "url": "",
      "site": "hokkaido"
    },
    {
      "title": "北海道 津別町 沼沢地区、１頭捕獲",
      "url": "",
      "site": "hokkaido"
    },
    {
      "title": "北海道 滝上町 オス1頭、捕獲",
      "url": "",
      "site": "hokkaido"
    },
    {
      "title": "秋田県 にかほ市 院内 市道にクマ。保育園まで5メートル",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOdWlxai1ESmNGZllRd0x0NHdmXzRlc2pSRDVOZjFGQnhjZThVVjF4RG9OdElOVWhUSHpmb3NtM0oydjlWa242Skx1OGVDTkJNdGNSTGJJcDBWMzJHcmJhVElUcXdPajlKNWxxb2JLUFJzMlZWdUVOTlBJa0Z4MG1uYlFTYzREdmJHZ19KVFln0gGAAUFVX3lxTE91U2NMMVlYbTVtS2g5RTN5aGo5LTlSeEtuakx5NWFfaWlDbTBmbmtPV1lSZW1VY1ZsNkhhT3RLUjAxamwxMnVtV0l6MXFJT283NmlRYUdWOFpCLW5ua3Vabi1rQzNXazVZaGtual8tN2lzZVRnQXNQOWFxLVk0VHlW?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 大館市 岩瀬の県道で軽乗用車とクマが衝突",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBwa1hRaGpvWU9OZ1dpVzRHb1hBaGd3NTNYSDZvQ2pBaDdFYlowVDlBU3dwb2dUWk1OQnVjUExwbTBlNzBnOFJSUUtKZEczbTFMbTBjbnFldmttcC1JYjdVWGFn?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県 八幡平市 保育所付近の市道上で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1Pb2Y2THhSRGwxRDUxQ3BGa1BqVW5kYXJwOUtOS09HYnh6aEh1eWNHUWNNZVZEVU9Qc0hJM0VoaExkV2JkR1NnUENSeWRibDR0V3JrUVE4X2tRNWNjdnNCTGhFcXhMRjlteXYtcWFOZkJaaUdxeVUzTDY3VjBRMkE?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 郡山市・本宮市 東北道付近などで目撃",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPbkp5dUpsUjdySFpQd0dXaDJEVm1wS1Jmd3Vfbm9SSENKT1NZZlNBN1dnM3RSYkhqS2JmZGVSZ3lzbnFib3lnRWU1TWVVWS1TdFduOWFUak1NTGZuZkhLcVhZZnk3eS1qdWJDclBjRjROUGxqUFZZOVhuRmtWSG4ya3Jn0gF0QVVfeXFMUC1tSnotR250elVZbXhyeVJBT1pxc2tZVFZ0bkFxVUhBR00zSEZUVmVWS05Rd3FORFpORk1aTDdLanhNZm1BUU1uWC1sMFk2dUt0dlU4WHRmZjd2ZTE3VlZpaG1IeElQU0JLb0xGWDlBaENZZUk?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県 栃木市 吹上町・栃木IC付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5ZbDh1TC01d2x2b1RGOGJ2UGZzSlI3STFsN3FOZHhDaE9PWFczUDh3YTlVM1RoVk52enJQX0psOGNlSmg5RmlweDZ1am81TWNTVGxLTjRYbU92RlpjUFE0Mg?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県 那須町 湯本でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOM2tJcTJZR09aSm45WEdfQzg2dEJsU0R0WlNsUDNDX3FZOHVTaElQcmIzOTU5V0Rqbi1oV3VLdUw0U21XTU1zVzV1QUpIcU1BM0RtSlFJUFNsSmtrdEJpR0dxS1hSc3ZsaUszQlhRYjRJQjBxbjhILXE0dTFiZHpQNzVPUGs4NjVHVnBMUFBwS1ZkYjNXalhUTDI5akw1aW5JR3Z0OHVOdUdlM0RRbHVDNVpCblJYSVNMb0ZkQmphYjMwYVFMc0tRanpRb0hhRTBCM2M3NjJ0V2hMbnNaSnF4MGlGeWJqQnNFR200U2Jvd2V3d9IBogFBVV95cUxNd1dKSjMzdGpnN3JPMDA0Y0ZnRi1zckZrSC1xNGJ0cVpzX0M5RGdsSWY0ZUxvZEZ1UkM0c3p5TTg2SmNjbUpQNy1kb0NnTENGbFBmbDREbFd6UGtMWElNSy1OLTNGV2hrY2loQ1g1MTdmWXFaSnE0SWsxTWxoT1hmRExwNGM4X2NTbEdtNWF0dmt5U1VMb0xjaWZXc1FpYXRLU1E?oc=5",
      "site": "news"
    },
    {
      "title": "東京都 青梅市 二俣尾４丁目でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMnNzRWtEMUhLbDU0RTNsTm1faWxveFFkN0Npdl9hSG5kdGZVTDBYWWw2T1dmM3UzdE9KSWZFQWQ5ZTVXVC1KZHdQWFZqT1FTOEhvR20yRUxtUEhTLTVrYXFRa1IwMWlkSUZlM0toWGNCblB0TzJ5WllXNlZKSTMyWVRxUmpQTGs5WlhBNXU0NEdXODhGZjJiQXhVaEXSAaIBQVVfeXFMUElfdy1nd05IaU1qNEJfaW5qYVJqZVVKY3NheGY5b0t4ajVzS3kzMDEwUmJ4RC1GX1g5Q1kxWGJ3MlJUbTY3LThjUGxDZW1UTWg4MS1DUmZaZXZZUV8yWENlZkdZaTdkM1FzY3BreXQ5TFV4WWR5RWR0TjVLU1l1dnpiWjRxdW1LZUVZckxySGpGak5tNUhhNlZsYUhsaTV4bGNn?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県 新潟市 秋葉区の公園付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5VUjNyOUFQd0NiTkQ1cWtPeUpfeEljcjhPWERtX1F1X2ZaWFA0ZHc2QWVreEt6NTJKbGFKeWcyNGp4QXNN?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県 長岡市 交差点付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE84cDNRbHdJWms2UEd3LVlIaWdrRkgwa0RSZkpCLTJ3emxJa0xYTjBCZUtuRkJnNWZmTkFNMHhBOWttdXRP?oc=5",
      "site": "news"
    },
    {
      "title": "富山県 立山町 河川敷で親子クマを目撃",
      "url": "",
      "site": "toyama"
    },
    {
      "title": "北海道 上士幌町 三股でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTlJQQWxWSThTeUpjc2NNMHhpemUyek55RUtwMTJzdXZ1ZjBqMnNXZVF5ZXZYVTVPTFNXVzVrLVZUb1pWb0NISEU1aUpRWGFlZUZGN0ROLVhRUk1scXBXWXYyRFdOQUxfdTdvODVPakRoQi1KREVNZjRXYXp1cUtSQUoyMmstNUpnLXRzMFRudTBGNlh0aEh2c3FKdnTSAaIBQVVfeXFMTkNTUnZYZzBySGhRNXlOT29WT1BsT0U2NjRud3VHWUdEZ0RmMENRT21WbXk5OFJfQ1kxc1pxaTlsNzJ1ZFp5dXRqSWVSSktvNEVVaDV5SWNFZHktaVh4RjQya1l1bWljVmFuODIxQkhwaDQ1Vlh2X1lWSm5KMTVOUThldjc1dHZseGF5U0JmVXRQc2VyaTcyZkxJR2lFU2IyX0Fn?oc=5",
      "site": "news"
    },
    {
      "title": "京都府 京丹後市 網野町切畑でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxObFVLMVJaYTZaS3E3WFB3alF3clVWZGU0elJOQ01jT1B6ZlpPVk51QkdYaEdXcUxDY1RiclZUUnNDZjZNWXZjT0tELW9ITmNfcFluemN4VENPRVhySEN6OE1UdzdPYzBRUGFpT2xjal9fTGZGNjZnS0I5YUd1cGV6bXI1dnZSM1JoMTZsR1N4bmhmRXFDZ1NYaGZOSXBSb3BlN210NDRlWlFtWDlUaFRNU0ZHUXppT0ZwdjJKaFFXY0FHWlZJdVFJeDFIT0tXY29sVjhackp6TzNndTc0bjRVbVNXdllyMFNtU0xIS2dXZldMZ9IBogFBVV95cUxNUTFkNWpFS1ZLVTlKQjlrcXF0a0czbE9UT0lta21NUHl6dlpISExjUURhOTJiWTl3aGJGYkpaLW42dm5Fc0tHejdfN1Rqa1pTclVYWWhzVlA2Vl9CYTBBYm56VmlXRkl0LVRhdi1yNWJpTlY2MVZtc0FrNG5JZVlqQnliNUZZd1JYX0NmWHc0Vnhqakg3emtOMGFabmRGTHA0NlE?oc=5",
      "site": "news"
    },
    {
      "title": "山口県 周南市 須々万奥でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeVhOZ1NIcGpiTjhNQlRuZjhSaFFHMmZGYlk1c3dmTUdmb3FCREc3UlBOUXhteDdRRXR3UktoUWJ6ZVJ3blFNZnU0RS1FdF9IQVQ5N1lHVE05RGtsd0ZxNHd6cE9NSE5pd2Q3WFFvRGI4LVIycGU5ZG5FUkxtRDQ5Qy1VUUZzcktCU01Zb0EtRHhPQzhhR1hmZXVmYS3SAaIBQVVfeXFMTkxFZjdkTUJfRldNckxpZmxSY1EtV2pCN2szM1ZKNV8tS3kwV1BWeWtwMWJubzVCR1FMV3B1eTRMLS12cENRNi1ia0ExNHMySUZaa3h3VTNNb3F4NEpiQkxobGF5NVNOU0dBNkh2RGZmcFc2WV91R05tclpYZHh6UHlIb0IwV0lhYU11YWt4OVM4Y3FTZDNDTkpRbHAydmtCV0ln?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"秋田県","count":16},{"pref":"栃木県","count":11},{"pref":"北海道","count":11},{"pref":"新潟県","count":10},{"pref":"福島県","count":9},{"pref":"群馬県","count":7},{"pref":"富山県","count":6},{"pref":"宮城県","count":6},{"pref":"岩手県","count":5},{"pref":"長野県","count":4},{"pref":"青森県","count":3},{"pref":"山形県","count":2},{"pref":"山口県","count":2},{"pref":"島根県","count":1},{"pref":"岡山県","count":1},{"pref":"和歌山県","count":1},{"pref":"京都府","count":1},{"pref":"東京都","count":1},{"pref":"石川県","count":1},{"pref":"兵庫県","count":1}];

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
        <span>対象期間: 2026年7月31日</span>
        <span>·</span>
        <span>公開: 2026-08-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={99}
        periodLabel={"2026年7月31日"}
      />

      <p>2026年7月31日、KumaWatchが収集したデータによると、日本全国で99件のクマ出没情報が報告された。これらの情報は75件が報道機関に由来するもので、自治体等からの公式情報は含まれていない。当日は人身被害に関するキーワードに一致する事案は報告されなかったものの、都市部での目撃が1件、捕獲・銃猟関連が5件確認されており、人とクマの遭遇リスクが高い状況が続いている。本レポートでは、当日の出没事案を分析し、地域ごとの傾向とリスクについて報告する。</p>
      <h2>主要事案の分析</h2>
      <h3>都市部への出没</h3>
      <p>当日の特筆すべき事案として、宮城県仙台市の東北大学川内北キャンパスでの目撃が挙げられる（※1）。同キャンパスは市街地に隣接しており、都市部への出没事例と評価できる。アスファルトの上に座る様子も目撃されており（※2）、大学敷地内（※3）という人口密集地への侵入は、都市環境におけるクマの行動様式を分析する上で重要な事例である。</p>
      <h3>捕獲・駆除事案</h3>
      <p>長野県および北海道では、計5件の捕獲・駆除事案が報告されている。長野県塩尻市では、体重100キロのオスの個体が捕獲・駆除された（※4）ほか、別の捕獲事案も確認された（※5）。また、北海道の松前町、津別町、滝上町でもそれぞれ1頭ずつが捕獲されており（※6, ※7, ※8）、広域で対策が実施されている状況がうかがえる。これらの事案は、個体数管理や人身被害防止の観点から重要な措置であるが、同時に当該地域でクマの活動が活発であることを示唆している。</p>
      <h2>地域別動向</h2>
      <p>出没報告は全国的に見られたが、特に東北地方と北海道、関東、中部地方に集中する傾向があった。</p>
      <h3>東北地方</h3>
      <p>秋田県（16件）、福島県（9件）、宮城県（6件）、岩手県（5件）など、東北地方全体で活発な出没が報告された。秋田県にかほ市では、保育園からわずか5メートルの距離で体長約1メートルのクマが目撃された（※9）。また、大館市の県道では軽乗用車とクマが衝突する事故も発生している（※10）。岩手県八幡平市でも保育所付近の市道で目撃情報があった（※11）。福島県では郡山市や本宮市の東北自動車道付近で目撃が相次ぎ（※12）、交通インフラ周辺での出没が目立った。前述の仙台市東北大学の事例と合わせ、人口集中地区やその周辺での警戒が引き続き必要である。</p>
      <h3>関東地方</h3>
      <p>栃木県（11件）、群馬県（7件）で出没が多発した。栃木県では栃木市内の栃木IC付近（※13）や、日光市、那須町（※14）といった観光地周辺での目撃が報告されている。また、東京都青梅市でも出没の可能性が報じられており（※15）、首都圏においても山間部では注意が求められる状況である。</p>
      <h3>中部地方</h3>
      <p>新潟県（10件）、富山県（6件）、長野県（4件）が中心となった。新潟県では新潟市の公園付近（※16）や長岡市の交差点付近（※17）など、比較的市街地に近いエリアでの目撃が報告された。富山県立山町では河川敷で親子グマが目撃されており（※18）、幼獣を連れた母グマの行動に注意が必要な時期であることを示している。長野県での捕獲事案は前述の通りである。</p>
      <h3>北海道</h3>
      <p>北海道では11件が報告され、そのうち3件が捕獲事案であった。上士幌町（※19）や新冠町など広範囲で出没が確認されており、道内全域でヒグマとの遭遇リスクが存在することを示している。</p>
      <h3>近畿・中国地方</h3>
      <p>和歌山県、京都府（※20）、兵庫県、山口県（※21）、島根県、岡山県で散発的な出没が報告された。件数は各1〜2件程度であるが、ツキノワグマの生息域が西日本にも広がっていることを示している。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な市町村</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">16</td><td className="px-3 py-2 text-xs">にかほ市, 大館市, 仙北市, 男鹿市</td><td className="px-3 py-2 text-xs">保育園付近での目撃、車両との衝突、民家敷地内への侵入</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">11</td><td className="px-3 py-2 text-xs">栃木市, 日光市, 那須町, 足利市</td><td className="px-3 py-2 text-xs">高速道路IC付近や観光地周辺での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">11</td><td className="px-3 py-2 text-xs">松前町, 津別町, 滝上町, 上士幌町</td><td className="px-3 py-2 text-xs">報告されたうち3件が捕獲事案</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">新潟市, 長岡市, 加茂市</td><td className="px-3 py-2 text-xs">公園や交差点付近など市街地周辺での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">郡山市, 本宮市</td><td className="px-3 py-2 text-xs">東北自動車道付近での目撃が複数</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>7月31日の出没状況を分析すると、以下のリスク要因が考えられる。第一に季節要因として、7月末はクマの繁殖期が終わり、秋の大量採食期に向けた準備期間にあたる。このため行動が活発化し、人里へも行動範囲を広げる傾向がある。富山県や岩手県で親子グマや幼獣の目撃情報があったことは、母グマが子の安全を確保するためにより警戒心が強くなり、不測の遭遇時に攻撃的になるリスクを示唆している。第二に、人口圏への接近が顕著である点だ。仙台市の大学構内、秋田県の保育園付近、新潟市の公園付近など、人間の生活空間とクマの生息域が重複・隣接している事例が多数報告された。特に東北道や県道、IC付近での目撃が各地で確認されたことは、道路網がクマの移動を分断、あるいは逆に移動経路として利用されている可能性を示し、交通上のリスクも高まっている。人身被害の報告はなかったものの、これらの状況は人とクマの物理的距離が縮まっていることを明確に示しており、潜在的なリスクは依然として高い水準にある。夏期のレジャーシーズンと重なるため、山間部やその周辺地域への訪問者は、クマに関する情報を常に確認し、厳重な警戒を怠らないことが肝要である。</p>

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
          <dd>2026年7月31日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-01</dd>
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
