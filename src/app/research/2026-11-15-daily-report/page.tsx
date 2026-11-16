// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月15日 / mode: daily-report / 生成日: 2026-11-16
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-15-daily-report";
const TITLE = "2026年11月15日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月15日に記録されたクマ出没事案は全国で計16件であり、北海道での事案が最も多く確認されたほか、東北、中部、関東、関西の各地域において生活圏や道路周辺での目撃が報告されている。本稿ではこれらの事案を地域別に整理し、人間活動領域への接近傾向について分析を行う。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-16",
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
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
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
      "title": "2026年11月15日 北海道小樽市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBrdGhYVWpHWDNTNVhTdW5fQS02VWx4d1I2WkFYS1lISkJ4NVh0ZmdOTmZRaTdETFlRbnFXdmR1bW1HMFFJVDhFdFdmNUYyZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 岩手県盛岡市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1qNnE2WEkwUXUtSUV3UWp1RXFmdVBISmg0al9mZWRma2kwM2RMVTVrQy1hcU04dFlwUVJtSkdiVld1OUFGbFZRLTJyY1VKaXlRODIyY3V1LTlFWFV2QURXc0hn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 北海道深川市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE95WklPQVFmNjRzM0d0RFR2b0dlQ0pWaEprWEs1X2x0MVJEbHAzdWRzSzVfSy1sSVV2MDl0RUZZM284Zlk5NTlBM3A2ZEIxVW1GU25vRUVVbHNfamJqd3ZtQUhLSkltV25IT1p5WmxtY9IBdEFVX3lxTFBvSTVPeFQzZ0ZVVllkQTg2bHZ3V2owRGFUanhNeHhWWno2MWdGeUt3WTRmY05nSU1YUVNTT3J5RmFyVDZub2o0dERsalFZaDhBVGhnVFpFZVJqakxlcHhteWpPWXpuOEdmWFRqR29qUllrbWdC?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 福島県福島市 市道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5fS3QwZy1FX2JET2xGQ3F0ckVuOFRsY05Nd2tEREpvTlBzT1FfeG9UekptdUdtck83U1lRek5zOGdIeDgyYTZrdUV0MXNCak1MMVdwV0pYSG9lYWpKUnZwZ2h0bmZXbU16eFkyLTRPcV9pNkxfS3F3UldlUk5CaWM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 新潟県魚沼市 小平尾の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月15日 北海道小樽市 若竹町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdmc5NWlQLVp0Y1BFX0VEYmJwbGllNmdMd2R1QjEtWllmNGItMnVFd2l4Si1rMTdmSWpSQ203S3JiZng1LWlSRW1VczhwNmxoeW14ckFLS2F5dXoxN1pIWHFYS1JsOUNWaEN6WXNBT1Q2OVRLbEg3VGFQbmtEaVBDbjNlbUZGcjl5WDZRaC04T3V4RkdiSm83Vkw0ZknSAaIBQVVfeXFMTmY0NWdNTTRxWkJWUWg5MXB3dVQwTUZVN1ZmZ0s1Q0I5UnNXSk5RbE9uazU5bHZlU2ZVTlFIMXg3RWwtZGZoMXVhazl1UXlncWliS1NVcFJuaTIySW93VFNudFhIdi1NSEQxbF9ZSWlwcVJFTGlMUEQ5UWUzRzZOVktIWDl3YjRVSVlMR25RckJtMzVHTFJyRHRUNWx4MGJNX1hB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 北海道岩見沢市 上志文町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbXFob2w2RzltS00ybDYtdTZDQWZLZzJMbWxwRUNPZ2VMb3Byd180a2dtWkcwMzdXZ0NqLVh5UVdZLUlmZnRyd1RETm1WbzUyWlNZcXB0TWlkSG9hTVBPLXB3c0FaZmhic1FKYmJXcUNsYmJiNzNkcy1YclRNSm1NNDBRVTE3YkxYS1dmWGNTZkNCYkcyOW55b3gtMVQtanc4eEdPXzJPYV94QlV5RGNscEp6WDZtRUd2Mk1FbEFjUGhlX1I4NnJtVUhDRGRCN1lrTmlvYXVKdHE5Q3IteWJ3bXh2czNCMFZTVnVIN0w2QVVJZ9IBogFBVV95cUxNcGRXWGRvcXEySW9SbFItVU5zOGZWQUJyV3lJam4yaS1hVjlWWDItWGtUeUc3TWx1dzVhckRMZkJKTUY0cndYNjdwN3Fac09sTHl1dDByazJnd21Sa1JLeWNSTVYtejRNd3hKODAxdTZFQjVUOGxzdS1aWlFiQ3dHbU80dVZlRjUyRG96LXhEdTJiYl9SMF8zTjdVdi1sQjBITFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 北海道美幌町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBoTFZDTWJaci1IbUR2aVBYUW1fQ3lYUGdwNlRoZzVlbjFqQWFVY3ctajNHWnhZYlRxZ0NGR2JFRE4tZDB3TGZ5Y3ZPcTB3WWFTMnlRdFlma21pNlctb1dtSFhNVjd1eFk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 宮城県仙台市 青葉区上愛子上遠野原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOGFUTWNMOXh2TFVVR3VxVjhSWDd4M2h0bnJwZkoyUExjQWZYMVJhQXZqU2p1Y3gtR2ZNNFo2LUdUUFVkMWZVMWNHSDdVWjd1dThJZTlYQjNYeXdoSnk0bmREZG13Y0lDTWQyWTROVUNlYmpnX2d5eFRWbXppTl94QlhrbU9mSHdYclhkbFYxc292NThtTXl6eEtFNW7SAaIBQVVfeXFMT3BzYTRKYUtPSG1qZTB5VkJjRVZac3Q1blpHN19HTnFMX0F5U3ZFXzVVV0tINTVFVUl5SWx5RFEya1EyWFNLZ0dzLV9vOFRsSU9fVkNuek9naTd1Si1oVUtYUXFlZTFobVZtZnJiSDFyVXVLZWZvTzh3ekxRQUR5aXV1TVlVWTM3TXlNREk2Z0ktUUlzblhrVk5rMnZzR2pEdHN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 宮城県富谷市 石積堂ケ沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbWpRWks3UXY5ZlFnbmppMUFOcEtRRVhRdUpzbzZySDVzdHVHZmhuQTU0LTFPVUN2dVRnMTBHU1E1elRLSkNUY3Bzamt0d0hhZlVuR1NTdjlkcWtEel9ZalJxLUd3TkxkVU1LcGRNOWU1NkUxTC16dkJhTnN0MDNNVVhkT0FBeVZmZXVyRGpXQUtTNmZ1UFdCUm9LLXXSAaIBQVVfeXFMTXRqRUltYm1DVndKVVlYTWN4UGJYN012N3hVTk5NUXVxaG8yVjNQUXhBRDM2ZlZ6Q3g4TjhxUkVrbzhOQktWWVp6MWhMYjc1N1N6V2dMM1ZFVUNVOEVHeHpnVXdiNERZbUJ0LUxtZS1lcERoLU9yYXMzR1FNOUlWbjIzNjBQMkE0UnZCVF93TUZrU1BkNFcwb21fcTFIUlJxSmx3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 東京都檜原村 三都郷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbFJvTzBnQ1BhOTlPSFdESmhJVWZKaGZPbS1lMWhrdFZHSGUydEtJcGVRRUYzS0V1X01tNkhHSlB0MnlseDdiNFpPQnBNNzNsS1c1dk9XZExjTXBFdVplRnBwbnRDcjJNMTVwd2dIQVlUNFQ2cjdHSnZlMGFsZURRTmk3QlltOVVBMEtHTUtxZTlQQzBuLV8wV3lkLS3SAaIBQVVfeXFMUDk5VGtZaDRvUjNOZi1Oc2VmT21BdTM1eTFYUUpuUkxTS1JOOHFSdVZQOEROeVdzQ2k1bWVOakFBZFRmMng4WDdNM29zaE9LVkZSX0hkallnY2NkYWFlRVdkNVZlejNYZjFKdGQ1V0FxdGxNS3lTUnRCajktUzRFNzRmZ3pIaGUwb2sxeU9jNUxrWXoxSDFUU29rMWdIUmo0ZWd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 神奈川県厚木市 飯山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTUdNb2VSQ0xBb2dFNU40RGJLQmxlSjVvajhfMlZsemxXWEtpbnFuV2pBdXA0VGwwajRBZGZmQWh3QXZwQjloVDVmT2hqSmFKTU0tTEJydl9ZdXRoTnZYZkxFS2p3Q0NJbGZ4S05xNVlOWHZEbDVCLWdkVjRUdHVFTGZlSHpURVJudlcwRXp4SGVTMnd3azk3NzQ4ZmjSAaIBQVVfeXFMUEg3anRfTmNqWWhYckMtQTRrdFNMMGRQbzdKbHZLczBHMkZkQkFHeXZzcWJXWXNTNDNjSjJKUFlRMlVTaU5ET1FVQUtCQ3FQdnpWYjlIcFB5c1V0VDRmeHkxek4zVUVRbUxYN1ZwYWtTSERaclR0aGVWemlxNDRZTWNwcGRxRE1ucW1nWXRNTVNZdFYyOU5rVGRGWnBYWENsb213?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 福井県小浜市 中井上中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVTFqU0tYUC1ua0NnZFBIMXVRMzlsSmRsVVBYQkRnWndUeGhXRHRqMGFhRU1TRnpOcGhub045THpvRTdLaXE2bDh3SGZFZnN1TGNPUGVtQXd2VThpMDlrR3ZpVkotemctN25oOExUTWc0bjEyRUFCRllsX1M0TzY2OTIwWTdtYXVPdGJrTjJTdzk3SU1GblVSZTc3OUTSAaIBQVVfeXFMTjZUYnBfNGRtb2QwcHMzeE5ZVlRseEtCTzl1Q0YtUGdhX2lOWU8wa0FGeGhNOERZR01xcEJhUFVCLU1EdXN5VDdSYktfTFJfcFl5Y1dfUGlWQy1rQ3RYZ01uQlFwRXhkYWZQdzFaVTlaZWZCY0RsYTdVWXVCNVlpYjZrYmo0RmZZWUVCWEJtTDR5bDNraDNRU0NBWm9icTV2cHBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 福井県小浜市 中井（上中井）の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月15日 京都府福知山市 畑中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTzFJWGtZaG4zZTZWRkFSVFFTamI5aHRVUk4wc0NpMko3T0xaNjZSV1phOXZ3UHNaUTcySWRBLW12N0dSbG9XWlhaZVZkWExTcTVmVE1ueE56aURoellGQUJMTVA0WFBKMGRDNGtTV3JWaG5SaWVJM0VDOHhQWVlmTkRkVzh0MGdUdkxKbTNvd3hHUGNvSUU2YWVtWHfSAaIBQVVfeXFMT3VkZFJSdmo3OTVRb2N1bFVrMUlxLTIzc09VS3EwVXAzTEtPczdVUkxpU0FPYWx0TkdqbmdXMnUtMWZPVm9acnF6cjlBMFpJM2ZBaXE2VlZPLVRCTGphSHlfRnVPczl4anRxQkZxWXF4NjlWT1FLVFNTYTAwbHE5X1R3VXdENkJuWXZPek9Rb3JwRWZBdW8ya0VPZjdpa1ZnS0p3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月15日 和歌山県田辺市 龍神村福井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaTY4UTdKYnN2MzR2NFhscmxmMTQwbW8zNWtWRHZMTHYybDgySGdMa2p6eVVYRGE1NENsNjB2aWJSbTdOeGFld3loMGh3WWNWRGpGLTNOT2dtQnlZWlh1blYzUTBVR1MwQTcwZExtQmxIY2hnVm5Ba3FvLUxVZ2RrM3UzVFdaSExJcGdVRklyMlAtellHdFUxOHI1NnjSAaIBQVVfeXFMT3ItY0ZIZkw4a1pyN1daZ0prU1lXQlUyWVFkc3d3MmVneDdseld1bFpxWkRQd2VfV0xyV0hzWEtSODJZaTA1UTFUTUZ6VVFBTkdKYXhMR2FPMzMwc2VVRVlDSUFWT3pUNXY5d2l3LUltWlpwNkZmWC1XSDlXa095RDBCUUdFX3Q5d1lWZXRPaktaSzdUQkFBZHlVbVMxLUdOVmJB?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":5},{"pref":"福井県","count":2},{"pref":"宮城県","count":2},{"pref":"新潟県","count":1},{"pref":"岩手県","count":1},{"pref":"京都府","count":1},{"pref":"神奈川県","count":1},{"pref":"和歌山県","count":1},{"pref":"東京都","count":1},{"pref":"福島県","count":1}];

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
        <span>対象期間: 2026年11月15日</span>
        <span>·</span>
        <span>公開: 2026-11-16</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={16}
        periodLabel={"2026年11月15日"}
      />

      <h2>概要および主要事案の動向</h2>
      <p>2026年11月15日に対象期間として集計されたクマの出没件数は全国で16件である。都道府県別の内訳は、北海道が5件と最多であり、次いで福井県が2件、宮城県が2件、新潟県が1件、岩手県が1件、京都府が1件、神奈川県が1件、和歌山県が1件、東京都が1件、福島県が1件となっている。当日において人身被害や緊急銃猟に関する直接的な記録は含まれていないものの、住宅街、公共施設周辺、道路、農地など、人間活動が日常的に行われる生活空間への接近が複数確認されている。</p>
      <p>主要な生活圏接近事案として、北海道小樽市において住宅街でゴミ出し中にクマが目撃された事案が報じられている（※1）。また岩手県盛岡市では図書館の近くで目撃情報が寄せられたと報じられた（※2）。さらに、北海道深川市では国道を横断するクマが目撃されたと報じられ（※3）、福島県福島市の市道においても道路を横断するクマが目撃されている（※4）。新潟県魚沼市小平尾では、体長約1.2メートルのクマ1頭が目撃され、西方向へ移動したことが記録されている（※5）。これらの事案は、住宅地や交通インフラの近傍にクマが出現した状況を示している。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>北海道</h3>
      <p>北海道では計5件の事案が確認された。小樽市では住宅街においてゴミ出し中の住民による目撃が報じられたほか（※1）、同市若竹町においてクマ出没の可能性が記録されている（※6）。また、深川市では国道を横断する個体の目撃が報じられた（※3）。岩見沢市上志文町でもクマ出没の可能性が報告されている（※7）。さらに美幌町においては、畑に2頭のクマが存在していた事案が報じられている（※8）。北海道内の記録では、道路横断や住宅地近接、農地での複数頭の滞在など、生活インフラおよび生産基盤に近接する地点での確認が特徴的である。</p>
      <h3>東北地方</h3>
      <p>東北地方では計4件の事案が記録されている。内訳は宮城県2件、岩手県1件、福島県1件である。岩手県盛岡市では図書館付近で目撃情報があったと報じられた（※2）。宮城県では、仙台市青葉区上愛子上遠野原においてクマの出没が記録され（※9）、富谷市石積堂ケ沢においてもクマの出没が報告されている（※10）。福島県福島市では、市道において道路を横断するクマが目撃された（※4）。東北地方における事案は、公共施設周辺や市道といった人や車両の往来が存在する地点での出没が含まれている。</p>
      <h3>関東地方</h3>
      <p>関東地方では計2件の事案が報告されている。内訳は東京都1件、神奈川県1件である。東京都では西多摩地域の檜原村三都郷においてクマの出没が記録された（※11）。神奈川県では厚木市飯山においてクマの出没が確認されている（※12）。いずれも山間部および丘陵地が近接する行政区域内の集落・地域における出没事案として記録されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では計3件の事案が確認されている。内訳は福井県2件、新潟県1件である。福井県小浜市の中井（上中井）周辺では、06時20分に成獣1頭の目撃が記録されるとともに、同地区での出没事案が報じられており、同一事案または近接した事案として把握される（※13・14）。新潟県魚沼市小平尾では、体長約1.2メートルのクマ1頭が目撃され、西方向へ移動する様子が確認されている（※5）。</p>
      <h3>関西地方</h3>
      <p>関西地方では計2件の事案が報告された。内訳は京都府1件、和歌山県1件である。京都府福知山市畑中においてクマの出没が記録されている（※15）。また、和歌山県田辺市龍神村福井においてもクマの出没が記録されている（※16）。これらは中山間地域の集落周辺における出没事例として位置づけられる。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方、四国地方、九州地方における2026年11月15日の出没記録は0件である。当日の事案は北海道、東北、関東、中部、近畿の各地域に限定して記録されている。</p>
      <h2>記録データの集約</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村・地点</th>
              <th className="px-3 py-2">事案概要</th>
              <th className="px-3 py-2">記録番号</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">小樽市</td><td className="px-3 py-2 text-xs">住宅街でゴミ出し中にクマ目撃と報道</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">小樽市若竹町</td><td className="px-3 py-2 text-xs">クマ出没の可能性</td><td className="px-3 py-2 text-xs">（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">深川市</td><td className="px-3 py-2 text-xs">国道を横断するクマ目撃と報道</td><td className="px-3 py-2 text-xs">（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">岩見沢市上志文町</td><td className="px-3 py-2 text-xs">クマ出没の可能性</td><td className="px-3 py-2 text-xs">（※7）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">美幌町</td><td className="px-3 py-2 text-xs">畑にクマ2頭と報道</td><td className="px-3 py-2 text-xs">（※8）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">図書館近くで目撃情報と報道</td><td className="px-3 py-2 text-xs">（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市青葉区上愛子上遠野原</td><td className="px-3 py-2 text-xs">クマ出没</td><td className="px-3 py-2 text-xs">（※9）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">富谷市石積堂ケ沢</td><td className="px-3 py-2 text-xs">クマ出没</td><td className="px-3 py-2 text-xs">（※10）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">福島市市道</td><td className="px-3 py-2 text-xs">道路を横断するクマ目撃</td><td className="px-3 py-2 text-xs">（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">檜原村三都郷</td><td className="px-3 py-2 text-xs">クマ出没</td><td className="px-3 py-2 text-xs">（※11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">厚木市飯山</td><td className="px-3 py-2 text-xs">クマ出没</td><td className="px-3 py-2 text-xs">（※12）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">魚沼市小平尾</td><td className="px-3 py-2 text-xs">体長約1.2mのクマ1頭目撃、西へ移動</td><td className="px-3 py-2 text-xs">（※5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市中井（上中井）</td><td className="px-3 py-2 text-xs">06:20に成獣1頭目撃等の出没</td><td className="px-3 py-2 text-xs">（※13・14）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">福知山市畑中</td><td className="px-3 py-2 text-xs">クマ出没</td><td className="px-3 py-2 text-xs">（※15）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">田辺市龍神村福井</td><td className="px-3 py-2 text-xs">クマ出没</td><td className="px-3 py-2 text-xs">（※16）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>2026年11月15日の出没データから抽出されるリスク要因は以下のとおりである。</p>
      <ul>
        <li>季節要因: 11月中旬の記録として、北海道から近畿地方に至る広範囲で活動が継続しており、早朝時間帯（小浜市での06時20分の記録など）を含め、日中の活動や移動が確認されている。</li>
        <li>餌資源との関連性: 美幌町において畑で2頭の個体が確認されているように、農地などの食料供給源となり得る環境への依存または接近が見られる。</li>
        <li>人口圏接近度: 小樽市の住宅街におけるゴミ出し時の目撃や盛岡市の図書館周辺、福島市の市道、深川市の国道横断など、日常的な人的活動地域や幹線交通インフラとの交差・近接が顕著に認められる。</li>
      </ul>
      <p>総じて、人身被害そのものは記録されていないものの、住民が生活する市街地縁辺部、集落内の道路、公共施設近傍への出現が相次いでいる。特に移動経路として道路が横断される事例や、生活廃棄物の排出場所・農地といった空間への接近が記録されている点において、偶発的な遭遇リスクが内在する状況が示されている。</p>

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
          <dd>2026年11月15日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-16</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-16</dd>
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
