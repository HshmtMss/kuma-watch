// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月28日〜2026年10月5日 / mode: weekly-report / 生成日: 2026-10-06
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-05-weekly-report";
const TITLE = "2026年9月28日〜2026年10月5日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年9月28日から10月5日までの期間中、全国で計671件のクマ出没情報が記録された。和歌山県では登山道や農地で人身被害が連続発生したほか、京都府綾部市や東京都八王子市で緊急銃猟が実施されるなど、人間活動圏への侵入と直接的接触のリスクが極めて高い状況が続いている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-06",
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
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
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
      "title": "農作業中の男性が襲われけが",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9hbTFFTzF6VTBhN2E0SlVOd0V1dnc2X05oWWhEdnVkbEpoc2dsUVJMd2lnanlkTS1tWmdkM19OdkZrNnBXbWZ5QkZuTU9SSm1ITUFxSTQ2OTVOZ0xuT040bFFn?oc=5",
      "site": "news"
    },
    {
      "title": "世界遺産の和歌山「黒河道」で６０代男性がクマに襲われけが 腕かまれ滑落 成獣のクマが逃走か - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1UUXJKeFdjeERCTFQ5cUJtTzVFQnJLdmpyZHlnWThwb3ZBY1V5SDgzRHotMmZkbWtpaEhGaDN3VXhDdC1JejNRTGQtZHgxNGJoT3Q0ejdnX3d5OEhFUUN4YzdERXRfenZhdEgzQXdLQzY1b3V2cE9OV0JjN2xiSkE?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "世界遺産・高野山への登山道、観光客の男性がクマに襲われる…和歌山・九度山町 - 読売新聞",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5qWnFUM2NrQ25fVWtaZ25rOVM0WldXWEZEOXZ4Z3U3ZFhfVnpYRlVOX2FpZFNuMWJOSUxlWDBHLWF3UFpfUllGR3NmbGk3M1U1d1dad29NVE82U3JKMEhaU2tmZE9NUQ?oc=5",
      "site": "読売新聞"
    },
    {
      "title": "クマに襲われ男性けが",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9xSmpQallmMTZOV3Zadmc5R3RqbHAxU3o5Q2lDSDhwbkV2WTlMRUlSVXFzREdGc29yVkZiMzRLWUFWRE84WUplbGM0X0xsXzlSZlQ2Z25VODFiOUh0OUpBalhra3A?oc=5",
      "site": "news"
    },
    {
      "title": "九度山でクマに襲われ観光客が軽傷、世界遺産・高野山に続く登山道に通行止め看板設置。高野町観光協会の担当者「複数人での登山やクマ鈴の携帯を呼びかけたい」 - 読売",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1fam5ncmU4dmVNZ0Y2bnFTTzY5dW5TMmxOcHVxdExRWEU3TEZFZmJUdVU0SDNRLTRSX0VRUFZuaHdkV0VEUHVhcEZ0clVoX2EzRktrQW54VUxUdlJwVS0xcHZxbjhfbHcyZWFuS19GeDF4RFdL?oc=5",
      "site": "読売新聞"
    },
    {
      "title": "住宅地にクマ1頭、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5jOUpmb0llNHBVVWEwZ2F3TUR6M1ZxbWloWFQ4YXpXajRCaERlSXIyMWhneGZVVHNmSmFBVXA2ZHNKaGVDVkQxOGxkNmtPVDRHa2ZPUFZJU3Q?oc=5",
      "site": "news"
    },
    {
      "title": "民家敷地内にクマ、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNRWpjS0U0VmJRRVFlSURUd0NFUFRMR3RTMWY3aXZ2dmFGeG5FbjNRWDdOd1E3dXhtZkJnaFpnRHZEWmRFMDJGNlpCVkVQcnRSaUdCQzNkb2RoR1M0VFpOaDF4SVlqNUJfQ3pOTWp0MGdJYmdlZHlCV0tFRXFaZERfRUtoV2tYV2NFMnRIVVU5Qng4Y1NxSjh2andXNDRTc2h1WEpCTtIBqgFBVV95cUxQM2pXTksyaF9fclphR01iSHh4bjVRbDdLa0lRZmNMRDlUeFdyalVVOGFaU05LVWtJLVB0bzRzQW5vTHg5RFpjQ0ZTdGVkVVVXLWFVVHNQYk1JTHpFSUtyZ0pXaTh4c2JWQzBhV2d3cmQ1a1l2eVJ2Q0RMOFI3QUNlTDdBMk5Ha3lVOE9BTVlEZHhLejlmV2tRWHN3QnVYb1NKTnQtWE5adHZ0dw?oc=5",
      "site": "news"
    },
    {
      "title": "建物間に居座るクマ、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBURk14ZlNXYnVPMzhpeFJjTVZ6d1pWY0kzMTB2MkJ2djVucnVRYVdjVlJEb3cyN18wMjNON2hEOWtIUHY4RlJwSnkzcTRBdHFrbHliNEVtXzZYS3NL?oc=5",
      "site": "news"
    },
    {
      "title": "空き家の敷地にクマ、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9RQzZ3QzhyY0JYb3JlS0dTZVZiYjZDVU1JZkxwQ0x0OU9FSUNHYXlhRnhvT0E1cDAzUUxvbzlEQ09Td0QxcG5ENzFWZDQ3MUJqSVAzUEVUb0NjcmM4dWp3dlM0X21UT25US21PbEotZFRqTXowSE4zaU0wUjcyLVU?oc=5",
      "site": "news"
    },
    {
      "title": "クマ緊急銃猟",
      "url": "https://news.yahoo.co.jp/pickup/6596889?source=rss",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "クマ1頭を駆除",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9tY1BpRkIwcFc3S25SNmtuSkN3Z0wxRjNhdkFwREQxcmF1QS1UM2Vyd2QyRFY2SloyYzY0VGVVcC1GVnBqRE1hd1BQZW9XeXVxS29Z?oc=5",
      "site": "news"
    },
    {
      "title": "クマ「YN15」か 通称「プリンちゃん」ようやく駆除 被害8年、追い続けてきた個体 立ち向かってきて…追われた警察官「撃って!」 15mの距離から2発…命中 黄",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBnR1dPRXluVzhLTUN6U25iZFBPNU93MnhQbmpDaUJBQmZjMDZ0enplRm1vMUt0NUs4SUloR0JSdExIdl9PLVdjcGZjbW84S09IRGpJQzFqNzVtNEFHUFlJRVVUVnU3N3FjNDE4STVhSU9obm0yN01pcnVaNjNYOFU?oc=5",
      "site": "news"
    },
    {
      "title": "千秋公園にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQ3dsZHRMaW9GXzJUS3FMdFlTUUxSYUh2Yk83enpfSjRiSUozNmtJNzhjdU5oNXh0YkdZNHhiWWczUHJuTWFlT3pOMFdfRUVTNDg3ekZuX1ZlcVZsLUloQjBoYk9YUFFNM0ctXzBSbVdvVVkzTERtVUhJWFg4d0Y1elFCM1dXdlpZbVlQdkJETmZPZWh0Yld6U1VaeUvSAaIBQVVfeXFMTnIwc3lwMmtmVlo4QVNFRFg0WnVITGk2MWdDcDdTU0ZVWGFvenBwZFJwSU9rMFB3cUczdmVpQVVMcHA2S2xrMVVMVmdFT0paNHNkS3JPTlhfd2NXMk15ODhmN1hhZ1dZV3dlcHM3MmVGN1J6WU9ZRS1icm1uUXZ2WkVVQlpyVmNqcHZZckdSejlnWjNBTWUwUmFIQVFjamkzTElR?oc=5",
      "site": "news"
    },
    {
      "title": "クマを目撃「こんな住宅近くで信じられない」 公園付近で成獣とみられる1頭 パトロールも発見に至らず 公園は臨時休園 注意を呼びかける 長野市（NBS長野放送）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBucW94R2NyZVByNHdaelR5Ml9lZ2c0c09uYUpUMnVUZGZxTm5vTmw5WHA3V20yNENhSHVSQWw4NDE0ai1KS3l0VmdMaHlNMUY2R2lITHkxaTMyYzNGd3E3dlZDcndXM2g4TXFkdUZzbnBNa2hmQXRJaGYzWmY4SEE?oc=5",
      "site": "NBS長野放送"
    },
    {
      "title": "学校グラウンド付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9sZlR5Ylp0a1ktWDU2R1dEb3owYWNrMzdjOFFEWkFMYzZnVW96b25SekU2bEYyNmRQSXByTmx0WUx6b0FJSnUtSnN0ZmZQc3pKNVBHX1drNHZVbGluc3NzOA?oc=5",
      "site": "news"
    },
    {
      "title": "住宅にツキノワグマ 近隣では「クマ棚」確認も 愛知・豊田市（中京テレビＮＥＷＳ） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBZZ1A3cEYtSk9vdF9nLTVpanIwTXZ1ckkyWG5tajRWbnBFdTdkWi1DbjkxSTZDQjBGRGhJUUhtMVVOeHdQQkV1TXlSZDRLbUR6cG5Hcko4czJvSTV5d2IwYkNvNmRCeWh2bVh3a3pGT2lwYkpqY0dhdkFVY0hQWEE?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "民家カキの木に爪痕や棚",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPd2lTUm43YmcxeldDYTg4dGhRYzJXZmVTSTc2d3c3NzZwYjY4Q2lmMUVtUWZVelRuOXpURWFzaHZQT2RGUmFkdm9TVFlKaEdYSUFfYkpUU2RFTDlVZ1dUQllTYnRrU2Z5cDVEaXRQRWZhNDJ5SHBnTjlvR1NHZmVEVGsxNnVmVERuUDd0M29R?oc=5",
      "site": "news"
    },
    {
      "title": "豊田市の住宅敷地内にクマ…今年度の出没情報43件 昨年度同時期の約1.5倍に 岡崎市ではサルに足をかまれる被害相次ぐ 愛知（CBCテレビ） - Yahoo!ニュ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAzX0wzSkw4b3I1V2dIY0Z0LVY2V21yWktTNl9saWJGQnhqYlh1bGVGOHpwR3ZlZjc0amZXTzZNY0V1S3hRQjg1WG1yT1Y4LXVuSzRNYmVkNGVVc19CTE9YaFYwSTN4aURrN3JqbTRMZm5oVUZmMnZXOVNJV0FZQU0?oc=5",
      "site": "Yahoo!ニュース"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":96},{"pref":"宮城県","count":57},{"pref":"栃木県","count":51},{"pref":"山口県","count":45},{"pref":"青森県","count":41},{"pref":"福島県","count":35},{"pref":"和歌山県","count":33},{"pref":"京都府","count":28},{"pref":"新潟県","count":23},{"pref":"岩手県","count":23},{"pref":"秋田県","count":22},{"pref":"静岡県","count":20},{"pref":"富山県","count":18},{"pref":"島根県","count":17},{"pref":"岐阜県","count":17},{"pref":"兵庫県","count":16},{"pref":"長野県","count":16},{"pref":"東京都","count":15},{"pref":"群馬県","count":13},{"pref":"愛知県","count":13},{"pref":"福井県","count":12},{"pref":"埼玉県","count":11},{"pref":"奈良県","count":9},{"pref":"広島県","count":9},{"pref":"山形県","count":7},{"pref":"三重県","count":6},{"pref":"山梨県","count":6},{"pref":"神奈川県","count":5},{"pref":"滋賀県","count":3},{"pref":"石川県","count":3},{"pref":"鳥取県","count":1}];

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
        <span>対象期間: 2026年9月28日〜2026年10月5日</span>
        <span>·</span>
        <span>公開: 2026-10-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={671}
        periodLabel={"2026年9月28日〜2026年10月5日"}
      />

      <h2>1. 期間全体の出没概況</h2>
      <p>本報告期間（2026年9月28日〜10月5日）において収集・集計されたクマ関連事案は計671件であった。情報ソース別では報道機関由来の事案が397件を占め、各自治体のオープンデータや集計マップ（北海道39件、宮城県24件、青森県22件、栃木県14件、山口県14件、岐阜県14件、福島県12件など）からも多数の報告が寄せられた。</p>
      <p>抽出された重要指標のうち、人身被害キーワードに一致した事案は7件、市街地・集落内など都市部キーワード一致は17件、捕獲および銃猟キーワード一致は20件に達した。地域別に見ると、北海道の96件を最多に、宮城県（57件）、栃木県（51件）、山口県（45件）、青森県（41件）、福島県（35件）、和歌山県（33件）、京都府（28件）、新潟県（23件）、岩手県（23件）と広範な地域で高頻度の出没が記録されている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な出没環境</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">96件</td><td className="px-3 py-2 text-xs">森林、住宅敷地、農地</td><td className="px-3 py-2 text-xs">厚沢部町等での箱わな捕獲、浜頓別町での糞確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">57件</td><td className="px-3 py-2 text-xs">住宅地、市街地周縁、山林</td><td className="px-3 py-2 text-xs">仙台市泉区・青葉区、富谷市、栗原市など広域</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">51件</td><td className="px-3 py-2 text-xs">集落、農地、住宅敷地</td><td className="px-3 py-2 text-xs">佐野市、足利市、那須塩原市、栃木市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">45件</td><td className="px-3 py-2 text-xs">山林、農地、集落</td><td className="px-3 py-2 text-xs">周南市、山口市阿東等でイノシシ用箱わなへの錯誤捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">41件</td><td className="px-3 py-2 text-xs">市街地、道路、集落</td><td className="px-3 py-2 text-xs">三沢市市街地横断、六戸町、東北町、階上町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">35件</td><td className="px-3 py-2 text-xs">水田、畑地、国道沿い</td><td className="px-3 py-2 text-xs">須賀川市の農地出没、猪苗代町国道49号付近など</td></tr>
            <tr><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">33件</td><td className="px-3 py-2 text-xs">登山道、農地、山林</td><td className="px-3 py-2 text-xs">有田川町、九度山町「黒河道」での連続人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">28件</td><td className="px-3 py-2 text-xs">住宅密集地、空き家敷地</td><td className="px-3 py-2 text-xs">綾部市中心部での居座り個体に対する緊急銃猟</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">23件</td><td className="px-3 py-2 text-xs">民家付近、集落、施設周辺</td><td className="px-3 py-2 text-xs">三条市での民家接近痕跡、長岡市、村上市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">23件</td><td className="px-3 py-2 text-xs">学校周辺、住宅地</td><td className="px-3 py-2 text-xs">盛岡市住宅地内目撃、滝沢市学校グラウンド付近</td></tr>
          </tbody>
        </table>
      </div>
      <h2>2. 主要トピック</h2>
      <h3>トピック1：和歌山県内における連続人身被害と観光ルートの閉鎖</h3>
      <p>本期間中、最も重大な警戒要因となったのは和歌山県内で相次いだ人身傷害事案である。9月28日には有田川町で農作業中の男性がクマに襲われ負傷した（※1）。さらに10月2日、世界遺産・高野山に通じる参詣道「黒河道」（九度山町）において、観光客の60代男性が成獣のクマに遭遇して腕を噛まれ、斜面を滑落して負傷する事案が発生した（※2、※3）。</p>
      <p>翌10月3日にも同地域周辺で男性が襲われて軽傷を負った（※4）。これを受け、観光協会や関係当局は高野山へと続く登山道に通行止め看板を設置し、複数人での行動やクマ鈴の携行徹底を呼びかける措置を講じている（※5）。山林・観光回廊における入山者とクマの動線交差が深刻な結果を招いた典型例である。</p>
      <h3>トピック2：都市部・住宅敷地への居座りと緊急銃猟の実施</h3>
      <p>市街地深部への侵入および滞留個体に対する緊急銃猟の適用が複数地域で確認された。京都府綾部市では9月30日、住宅地内の空き家敷地や民家と建物の間に1頭のクマが居座り、警察や猟友会等による緊急銃猟によって駆除された（※6、※7、※8、※9）。住宅街の狭隘な敷地内での居座りは住民への直接被害リスクが極めて高く、迅速な法的・技術的介入が求められた。</p>
      <p>また東京都八王子市においても、9月28日から29日にかけてクマに対する緊急銃猟が実施され、1頭が駆除された（※10、※11）。大都市近郊や住宅地境界部における銃猟対応体制の重要性が浮き彫りとなっている。</p>
      <h3>トピック3：長期加害・出没個体の駆除（長野県中野市「YN15」）</h3>
      <p>長野県中野市では10月5日、約8年間にわたり出没と農業・生活被害が確認され、追跡が続けられていた個体「YN15」（通称「プリンちゃん」と報道）が駆除された（※12）。当該事案では、追跡していた警察官に対しクマが立ち向かい、至近距離（約15m）から発砲され命中・駆除に至る緊迫した経緯が記録されている。長期的に人間環境へ適応・定着した個体の排除に伴う現場危険度が実証された。</p>
      <h3>トピック4：文教施設・都市公園・人里堅果類への執着</h3>
      <p>学校周辺や都市型公園など、住民の利用頻度が高い公共空間での出没が多発した。秋田県秋田市では南ケ丘の公園に加え、中心市街地に位置する千秋公園内でクマが目撃され（※13）、長野県長野市では地附山公園付近での成獣目撃により同公園が臨時休園となった（※14）。岩手県滝沢市でも学校グラウンド付近での目撃が報告されている（※15）。</p>
      <p>さらに愛知県豊田市では、民家の庭木（カキの木）にクマ棚や爪痕が相次いで確認された（※16、※17）。豊田市内の今年度出没件数は43件に達し、前年同期の約1.5倍に増加していることが示されている（※18）。人里の果樹資源への誘引が市街地接近の強い動因となっている。</p>
      <h2>3. 地域別動向の詳細</h2>
      <p>各地域における出没傾向の特性は以下の通りである。</p>
      <ul>
        <li>北海道（96件）：厚沢部町において箱わな等による捕獲が連日記録され（9月29日、30日、10月4日、5日）、浜頓別町では住宅敷地内でヒグマの糞が発見されるなど、山林のみならず集落近接エリアでの痕跡確認が継続している。</li>
        <li>東北地方（宮城57件、青森41件、福島35件、岩手23件、秋田、山形）：宮城県では仙台市泉区松陵や青葉区芋沢、富谷市、栗原市など郊外住宅地を含む広域で目撃。青森県では三沢市大町で早朝に道路を横断し住宅ポーチへ侵入する個体が観察された。福島県須賀川市では田畑や農道での目撃が集中した。</li>
        <li>北関東・甲信越（栃木51件、新潟23件、群馬、長野）：栃木県佐野市の集落センターや足利市、那須塩原市で目撃が続発。群馬県では安中市やみどり市、下仁田町での出没が確認された。新潟県では三条市下保内で民家至近に痕跡が残されていた。</li>
        <li>中部・東海（愛知、静岡、岐阜、富山、福井）：静岡県富士宮市（猪之頭公園、上柚野など）や静岡市葵区で報告。富山県では氷見市や立山町芦峅寺、南砺市で目撃。福井県では勝山市や名田庄堂本での目撃・痕跡が記録された。</li>
        <li>近畿・中国（和歌山33件、京都28件、山口45件、島根、広島、三重、滋賀、奈良）：和歌山・京都の重大事案に加え、山口県では周南市大字長穂や山口市阿東地福下にてイノシシ用箱わなへの錯誤捕獲が確認された。島根県益田市や雲南市、広島県大竹市や三次市でも集落・市道周辺への出没が安定して継続している。</li>
      </ul>
      <h2>4. 注目事案の時系列推移</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日</th>
              <th className="px-3 py-2">場所</th>
              <th className="px-3 py-2">区分</th>
              <th className="px-3 py-2">概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">9月28日</td><td className="px-3 py-2 text-xs">和歌山県有田川町</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">農作業中の男性がクマに襲われ負傷</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月28日</td><td className="px-3 py-2 text-xs">東京都八王子市</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">市街化区域近傍等における出没に伴う緊急銃猟の実施</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月29日</td><td className="px-3 py-2 text-xs">東京都八王子市</td><td className="px-3 py-2 text-xs">捕獲・駆除</td><td className="px-3 py-2 text-xs">前日からの対応によりクマ1頭を駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">9月30日</td><td className="px-3 py-2 text-xs">京都府綾部市</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">住宅地・空き家敷地に居座った成獣1頭を緊急銃猟で駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月1日</td><td className="px-3 py-2 text-xs">秋田県秋田市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">市街地中心部の千秋公園内でクマが目撃される</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月2日</td><td className="px-3 py-2 text-xs">和歌山県九度山町</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">世界遺産・高野山参詣道「黒河道」で観光客男性が噛まれ滑落負傷</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月3日</td><td className="px-3 py-2 text-xs">和歌山県九度山町</td><td className="px-3 py-2 text-xs">人身被害・対策</td><td className="px-3 py-2 text-xs">登山道周辺で男性負傷。参詣道に通行止め看板を設置</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月5日</td><td className="px-3 py-2 text-xs">長野県中野市</td><td className="px-3 py-2 text-xs">捕獲・駆除</td><td className="px-3 py-2 text-xs">8年間被害を出していた警戒個体「YN15」が警官への突進後に射殺駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月5日</td><td className="px-3 py-2 text-xs">長野県長野市</td><td className="px-3 py-2 text-xs">施設影響</td><td className="px-3 py-2 text-xs">地附山公園付近での成獣目撃により公園が臨時休園措置</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月5日</td><td className="px-3 py-2 text-xs">愛知県豊田市</td><td className="px-3 py-2 text-xs">都市部・生活圏</td><td className="px-3 py-2 text-xs">民家敷地への出没。柿の木へのクマ棚形成など昨年度比1.5倍の出没傾向</td></tr>
          </tbody>
        </table>
      </div>
      <h2>5. 週次評価</h2>
      <h3>全体傾向の分析</h3>
      <p>今週の集計結果は、秋季の採食行動に伴いクマの行動圏が拡大し、山林境界を越えて農地、都市型公園、さらには住宅密集地や世界遺産巡礼路などの人流密集地点へ完全に重なっている現状を明瞭に示している。人身被害が和歌山県で複数発生したことは、観光・農作業などの日常的活動圏における遭遇確率の高さを示唆している。</p>
      <p>また、京都府綾部市や東京都八王子市で見られたように、民家敷地や建物隙間への居座りに対して「緊急銃猟」という最終手段を適用せざるを得ない局面が複数発生した。住宅地での銃器使用は背後確認や安全確保に極めて高い制約を伴うため、現場判断および警察・自治体・猟友会の連携強度が厳しく試されている。</p>
      <h3>次週に向けた警戒ポイント</h3>
      <ul>
        <li>人里の誘引源管理：愛知県豊田市などで顕著なように、未収穫の柿や栗などの果樹、生ごみ、農作物の放置は個体を生活圏深部へ引き寄せる主因となる。集落内果樹の早期収穫・伐採指導が急務である。</li>
        <li>行楽地・登山道での侵入規制と啓発：和歌山県九度山町のように、紅葉シーズンに伴い観光登山者が増加する山域では、出没直後の迅速な入山規制や看板設置、クマ鈴・クマスプレー携行の周知徹底が不可欠である。</li>
        <li>市街地侵入時の即応体制維持：空き家や河川敷、緑地帯を伝って住宅地へ侵入する事案に対し、自治体による警戒区域設定、住民避難誘導、緊急銃猟や麻酔捕獲のプロトコル確認を継続する必要がある。</li>
        <li>錯誤捕獲への対応安全策：山口県内でイノシシ用箱わなへの錯誤捕獲が確認されている。わな点検時の安全距離確保と、放獣または処分時の事故防止手順を徹底されたい。</li>
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
          <dd>2026年9月28日〜2026年10月5日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-06</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-06</dd>
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
