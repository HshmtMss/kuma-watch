// drive-content-hash: 7ee28b9a70b8f38b82da57571c5d077105aeee9b0e9351e8e244292332948569
// このファイルは scripts/import-research.ts によって自動生成されています。
// Drive 側の元 Doc を更新すると、次回の import 実行時にこのファイルが再生成されます
// (上記ハッシュが変わったかどうかで判定)。手動で本文を修正する場合はハッシュ行ごと残してください。
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-17-daily-report";
const TITLE = "2026年5月17日における全国の熊出没・人身被害ニュースに関する包括的調査報告書";
const DESCRIPTION = "2026年5月17日は、日本国内における野生の熊類（ツキノワグマおよびヒグマ）の活動活性が極めて高まり、複数の重大な人身遭遇事案や、居住地域・公共インフラへの深刻な侵入ニュースが全国から相次いで報告された一日として記録される。本報告書は、同日に公表・確認された出没情報を網羅的に収集・整理し、野生動物";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-18",
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
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
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
      "title": "東京・奥多摩でロシア国籍の男性がクマに襲われ重傷 下山中にクマと遭遇か",
      "url": "https://www.fnn.jp/articles/-/1045811"
    },
    {
      "title": "東京・奥多摩で３０代ロシア人がクマに襲われ重傷…三ノ木戸山を登山中、クマ鈴は持たず",
      "url": "https://www.yomiuri.co.jp/national/20260517-GYT1T00160/"
    },
    {
      "title": "クマと遭遇、男性けがなし 北海道・士別 (2026年5月17日掲載)",
      "url": "https://news.livedoor.com/topics/detail/31296460/",
      "site": "ライブドアニュース"
    },
    {
      "title": "７０代男性、襲ってきたヒグマに拳当て反撃…北海道・士別",
      "url": "https://news.livedoor.com/article/detail/31297670/",
      "site": "ライブドアニュース"
    },
    {
      "title": "錦帯橋のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/tourism/kintai-bridge",
      "site": "298件"
    },
    {
      "title": "防犯カメラにはクマの姿がはっきりと 柳井の住宅の敷地内でクマ3頭 ...",
      "url": "https://news.livedoor.com/article/detail/31297391/"
    },
    {
      "title": "ツキノワグマ出没 島根県益田市飯浦町のＪＲ飯浦駅 (2026年5月17日) #FFE6",
      "url": "https://kumamap.com/ja/sightings/94543402cd35ffe6",
      "site": "クママップ"
    },
    {
      "title": "ツキノワグマ出没 福島県郡山市逢瀬町逢瀬公園入口 (2026年5月16日) #4F95",
      "url": "https://kumamap.com/ja/sightings/2bbf23a7c37a4f95",
      "site": "クママップ"
    },
    {
      "title": "福島県のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/fukushima",
      "site": "5,415件 | クママップ"
    },
    {
      "title": "ツキノワグマへの対策について（5月17日登山者人的被害発生）",
      "url": "https://www.town.okutama.tokyo.jp/1/kankosangyoka/sangyoshinko/2/1/1079.html",
      "site": "奥多摩町"
    },
    {
      "title": "登山中の男性 クマに襲われ重傷 (2026年5月17日掲載)",
      "url": "https://news.livedoor.com/topics/detail/31295767/",
      "site": "ライブドアニュース"
    },
    {
      "title": "クマに襲われ男性けが、奥多摩町 ロシア国籍30代、重傷か",
      "url": "https://www.47news.jp/14316678.html"
    },
    {
      "title": "山菜採りの男性がヒグマに襲われる ばたつかせた拳が鼻に当たりクマは逃走 北海道士別市",
      "url": "https://news.livedoor.com/topics/detail/31297573/"
    },
    {
      "title": "山菜採りの男性がヒグマに襲われる ばたつかせた拳が鼻に当たり ...",
      "url": "https://news.livedoor.com/article/detail/31297573/"
    },
    {
      "title": "70代男性、襲ってきたヒグマに拳当て反撃 男性にけがはなし",
      "url": "https://news.livedoor.com/topics/detail/31297670/",
      "site": "ライブドアニュース"
    },
    {
      "title": "７０代男性、襲ってきたヒグマに拳当て反撃…北海道・士別",
      "url": "https://www.yomiuri.co.jp/national/20260517-GYT1T00164/"
    },
    {
      "title": "ツキノワグマ出没 山口県柳井市伊陸 (2026年5月16日) #FFCA",
      "url": "https://kumamap.com/ja/sightings/bf43779997aaffca",
      "site": "クママップ"
    },
    {
      "title": "ツキノワグマ出没 秋田県秋田市外旭川字三後田 (2026年5月17日) #2A26",
      "url": "https://kumamap.com/ja/sightings/2fccb02471d12a26",
      "site": "クママップ"
    },
    {
      "title": "【速報・危険動物】埼玉・飯能でクマ出没 17日午後6時20分ごろ ...",
      "url": "https://www.chiba-tv.com/plus/detail/2026051638206"
    },
    {
      "title": "ツキノワグマ出没 埼玉県飯能市上名栗 (2026年5月17日) #E36D",
      "url": "https://kumamap.com/ja/sightings/8fc87ae43a98e36d",
      "site": "クママップ"
    },
    {
      "title": "【クマ出没注意!】福井市甑谷町(05 月 17 日 18:50頃目撃)",
      "url": "https://kurashi.yahoo.co.jp/fukui/18201/incidents/bousai/374333",
      "site": "Yahoo!くらし"
    },
    {
      "title": "京都府南丹市の防犯情報 | 熊の目撃情報【南丹市】（2026/5/17）",
      "url": "https://kurashi.yahoo.co.jp/kyoto/26213/incidents/bohan/374285",
      "site": "Yahoo!くらし"
    },
    {
      "title": "京都府京都市右京区の防犯情報 | 熊の目撃情報【右京区】（2026/5/17）",
      "url": "https://kurashi.yahoo.co.jp/kyoto/26108/incidents/bohan/374276",
      "site": "Yahoo!くらし"
    },
    {
      "title": "ヒグマの情報について｜北海道十勝 音更町",
      "url": "https://www.town.otofuke.hokkaido.jp/keizai/noringyosha/oshirase/ringyojoho/Beware_bears.html"
    },
    {
      "title": "青森県のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/aomori",
      "site": "8,066件 | クママップ"
    },
    {
      "title": "ツキノワグマ出没 青森県十和田市深持梅山 (2026年5月17日) #C876",
      "url": "https://kumamap.com/ja/sightings/4f9cf3186501c876",
      "site": "クママップ"
    },
    {
      "title": "【クマ目撃】盛岡市高松付近でクマ1頭目撃 岩手県｜FNNプライム ...",
      "url": "https://www.fnn.jp/articles/-/1045680"
    },
    {
      "title": "岩手県のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/iwate",
      "site": "2,741件 | クママップ"
    },
    {
      "title": "宮城県登米市の防犯情報 | 熊の出没について（2026/5/17）",
      "url": "https://kurashi.yahoo.co.jp/miyagi/04212/incidents/bohan/374324",
      "site": "Yahoo!くらし"
    },
    {
      "title": "ツキノワグマ出没 宮城県大和町杜の丘3丁目 (2026年5月17日) #0F91",
      "url": "https://kumamap.com/ja/sightings/fbc08b3d04b20f91",
      "site": "クママップ"
    },
    {
      "title": "秋田県にかほ市の防災情報 | クマの目撃情報について（2026/5/17）",
      "url": "https://kurashi.yahoo.co.jp/akita/05214/incidents/bousai/374327",
      "site": "Yahoo!くらし"
    },
    {
      "title": "安全安心:クマの目撃について（妙高市:葎生）",
      "url": "https://joetsu.yukiguni.town/saigai/325032/",
      "site": "上越妙高タウン情報"
    },
    {
      "title": "富山県のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/toyama",
      "site": "9,238件 | クママップ"
    },
    {
      "title": "メールマガジン登録",
      "url": "https://tsukinowaguma.pref.fukui.lg.jp/KUMA/merumagaRegist.aspx",
      "site": "福井クマ情報（Fukui Bear Information）"
    },
    {
      "title": "ツキノワグマ出没 島根県益田市久城町の国営農地付近\\n (2026年5月17日) #32C2",
      "url": "https://kumamap.com/ja/sightings/056cebd437eb32c2",
      "site": "クママップ"
    },
    {
      "title": "ツキノワグマ出没 島根県益田市安富町河成 (2026年5月17日) #CDB7",
      "url": "https://kumamap.com/ja/sightings/ca8f820783f5cdb7",
      "site": "クママップ"
    },
    {
      "title": "山菜採りで行方不明 77歳男性の安否は？ 16日午後に2人で入山も1人だけ戻らず 17日の捜索では発見できず 18日に再開へ 周辺でクマの目撃情報は無し",
      "url": "https://www.fnn.jp/articles/-/1045749"
    },
    {
      "title": "体長１ｍ程度のクマ、倉庫に侵入…市内での目撃件数は前年同期より増加",
      "url": "https://www.yomiuri.co.jp/local/kansai/news/20260517-GYO1T00063/",
      "site": "読売新聞"
    },
    {
      "title": "兵庫県のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/hyogo",
      "site": "525件 | クママップ"
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
        <span>対象期間: 2026年5月17日</span>
        <span>·</span>
        <span>公開: 2026-05-18</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":41},{"pref":"北海道","count":10},{"pref":"福島県","count":5},{"pref":"石川県","count":4},{"pref":"新潟県","count":4},{"pref":"島根県","count":4},{"pref":"山口県","count":3},{"pref":"東京都","count":3},{"pref":"群馬県","count":3},{"pref":"富山県","count":3},{"pref":"栃木県","count":3},{"pref":"三重県","count":2},{"pref":"埼玉県","count":1},{"pref":"岩手県","count":1}]}
        total={87}
        periodLabel={"2026年5月17日"}
      />

      <h2>1. イントロダクションおよび全国的な出没傾向</h2>
      <p>2026年5月17日は、日本国内における野生の熊類（ツキノワグマおよびヒグマ）の活動活性が極めて高まり、複数の重大な人身遭遇事案や、居住地域・公共インフラへの深刻な侵入ニュースが全国から相次いで報告された一日として記録される。本報告書は、同日に公表・確認された出没情報を網羅的に収集・整理し、野生動物管理（ワイルドライフ・マネジメント）および地域防災の観点からその動向を多角的に分析・評価したものである。</p>
      <p>この日に観測された事案の特徴として、山岳地域における単独登山者への重傷襲撃事案 1 や、河川敷での至近距離遭遇における物理的格闘事案 3 など、人間の生命に直結する一触即発の状況が発生したことが挙げられる。さらに、単一の出没にとどまらず、防犯カメラに記録された複数個体（親子とみられる群れ）による計画的な住宅敷地内への侵入 5 や、市街地駅周辺での出没（※7）、観光・レクリエーション施設周辺での活動に伴う施設の緊急閉鎖 8 など、人間社会のインフラに深く干渉する事象が目立っている。</p>
      <p>以下に、同日の主要事案の検証、詳細な全国出没データの一元化、および生態学的背景に基づいた構造分析を提示する。</p>
      <h2>2. 重大遭遇・人的被害事案の個別検証</h2>
      <p>2026年5月17日に発生した人的被害を伴う遭遇、あるいは極めて危険性の高かった直接遭遇事案について、その発生機序と対応状況を個別に詳細に検証する。</p>
      <h3>東京都奥多摩町におけるツキノワグマ襲撃重傷事案</h3>
      <p>2026年5月17日の午前11時55分ごろ、東京都奥多摩町境の三ノ木戸山（標高1,177メートル）周辺、小中沢林道終点から約500メートル先の登山道において、単独で山岳登山を行っていたロシア国籍の30歳代男性がツキノワグマの成獣1頭に突如襲撃された（※1）。男性はツキノワグマと遭遇した直後に激しい攻撃を受け、顔面や頭部、腕などに深刻な裂傷を負い、重傷となった（※1）。</p>
      <p>通報を受けた警視庁青梅警察署および東京消防庁は直ちに救助活動を開始し、消防ヘリコプターを出動させて八王子市内の病院へ男性を緊急搬送した（※1）。幸いにも搬送時に男性の意識はあり、命に別条はなかったものの（※2）、奥多摩地域におけるツキノワグマの凶暴性と偶発的遭遇のリスクを改めて証明する結果となった。</p>
      <p>事故原因の分析において極めて重要な点は、被害者が熊鈴（遭遇を避けるための音響忌避具）を携行していなかったことである（※2）。このエリアでは同年4月以降だけで約40件もの熊の目撃情報が蓄積されており（※12）、さらに2025年8月には大丹波川上流部のキャンプ場付近で渓流釣り客が襲撃されるなど（※10）、潜在的な出没リスクが警戒されていた。</p>
      <p>事故発生を受け、奥多摩町は青梅警察署や地元の猟友会と連携し、直ちに現場周辺のパトロールおよび追い払い体制を構築したほか、捕獲用の檻1基を現場付近に速やかに設置した（※2）。また二次被害防止策として、山頂から石尾根を経由して南氷川登山口に至る「六ツ石山登山ルートの一部閉鎖」という行政措置を講じ、登山客に対しては氷川方面への下山を避け、小河内ダム方面（水根登山口や榧ノ木尾根など）へ迂回するよう強く呼びかけた（※10）。</p>
      <h3>北海道士別市におけるヒグマ遭遇・防衛事案</h3>
      <p>同日の午前6時30分から7時15分ごろにかけて、北海道士別市多寄町の天塩川近くの山林河川敷において、山菜採りを行っていた78歳の男性が、体長約1.5メートルのヒグマと極めて近い距離で遭遇した（※3）。</p>
      <p>現場は最も近い民家から約1キロメートル離れた傾斜地であり（※14）、男性が傾斜地の崖を登り切って山菜を採るために立ち上がった瞬間、約5メートル先で四つん這いになっていたヒグマを視認した（※3）。ヒグマは男性を認識すると即座に立ち上がり、男性に覆いかぶさるようにしてのしかかって押し倒した（※3）。男性は尻餅をついた体勢から、襲いかかって腕を振り下ろそうとするヒグマに対し、必死に手を振り回して抵抗を試みた（※4）。</p>
      <p>この際、男性がばたつかせた拳がヒグマの鼻（吻部）周辺に直撃した（※13）。この打撃に驚愕したヒグマは攻撃を中止し、そのまま周囲の山林内へと逃走した（※14）。男性は頭部に軽微なすり傷を負ったものの、奇跡的に重篤な負傷を免れ、自力で無事に下山した（※14）。この男性もまた、熊鈴やクマスプレーなどの防除装備を一切携帯しておらず（※4）、偶発的な護身動作が生還を分けた事例となった。士別署は当該地区周辺の警戒を強化し、住民への注意喚起を行っている（※14）。</p>
      <h2>3. 住宅地・農業インフラへの侵入と地域社会の警戒態勢</h2>
      <p>山林深部のみならず、人間が日常生活を送るインフラや敷地内への進入、滞留事案が目立っている。これは、熊類の人間に対する警戒心の低下を如実に物語るものである。</p>
      <h3>山口県柳井市における複数個体の敷地内侵入</h3>
      <p>山口県柳井市伊陸においては、ツキノワグマ3頭が住宅敷地内に侵入し、その一部始終が設置されていた防犯カメラに明確に記録されるという、極めて衝撃的なニュースが報じられた（※5）。一部の地域情報データベースでは17日朝の発生として処理されているが、現地報道によれば16日の午前5時30分すぎに発生した事案とされる（※6）。</p>
      <p>目撃された3頭は、体長約1.2メートルの成獣1頭と、体長約1.0メートルの個体2頭からなり、親子の群れであるとみられる（※5）。カメラの映像には、3頭が綺麗に1列に隊列を組んで住宅近くの道路から敷地内に入り、さらに裏山にある倉庫内へ侵入して段ボールを漁るなど、極めて大胆な学習行動（人為的食物資源の探索）をとる姿が残されていた（※6）。</p>
      <p>当時、住宅内には67歳の男性が在宅していたが、直接の接触がなかったため、幸いにも怪我人は発生しなかった（※5）。この家に住む男性は「防犯カメラに撮影されたのは初めてであり、今までは他人事だと思っていたが、身に迫る恐怖を感じた」と証言している（※6）。現場は伊陸小学校から南東に約2キロメートルという通学路に隣接する地域であり、警察は付近のパトロールおよび注意喚起を継続している（※6）。</p>
      <h3>秋田県秋田市における住宅街滞留事案</h3>
      <p>2026年5月17日の午後5時45分ごろ、秋田県秋田市外旭川字三後田の民家敷地内において、ツキノワグマ1頭が目撃された（※18）。</p>
      <p>通報を受けた秋田臨港警察署は、現場に直行して警戒を開始したものの、クマが敷地内から立ち去ったかどうかの確認ができず、午後10時を過ぎた夜間時点でも、依然として当該民家敷地内、あるいは隣接する茂みにとどまっている可能性を視野に臨戦態勢での警戒を余儀なくされた（※18）。現場はJR泉外旭川駅から北西に約2キロメートルに位置する、極めて平坦かつ開発された住宅街であり、周辺にはスーパーマーケットや飲食店などの商業施設が立ち並んでいる（※18）。このような生活至近エリアでの長時間の滞留は、地域住民に深刻なパニックを引き起こした。</p>
      <h3>埼玉県飯能市およびその他近畿・中部地域における民家周辺での目撃</h3>
      <p>埼玉県飯能市上名栗においては、17日の午後6時20分ごろ、住民女性が自宅の敷地内に体長約1メートルのツキノワグマが侵入しているのを発見した（※19）。女性は動揺することなく敷地内のクマをスマートフォン等で写真に収めて飯能警察署に届け出、警察の現地下見において怪我人がなかったことが確認されている（※19）。</p>
      <p>中部・近畿圏においても同様の事例が確認されている。福井県福井市甑谷町では、午後6時50分ごろに民家の境界となっている「宅地の塀を乗り越えて」山林へと逃げていくクマ1頭が目撃された（※21）。また、京都府南丹市美山町鶴ケ岡の路上（棚野千両橋から南方約200メートル）では、午前10時45分ごろに小熊1頭が目撃されたほか（※22）、京都市右京区京北中地町愛宕の路上（日吉橋付近）でも前日夜に子熊が徘徊していた情報が17日に更新され、地域警察や自治体から「生ゴミなどを屋外に置かないように」との強い行政指導がなされた（※23）。</p>
      <h2>4. 全国の熊目撃および痕跡情報の一元化データ</h2>
      <p>2026年5月17日当日に全国各地の行政・警察・ニュースメディアより発表された熊類の出没、目撃、およびそれに類する事案の概要を以下に整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">観測・出没場所</th>
              <th className="px-3 py-2">区分</th>
              <th className="px-3 py-2">発生・更新時刻（詳細状況）</th>
              <th className="px-3 py-2">情報源</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">士別市多寄町 天塩川河川敷</td><td className="px-3 py-2 text-xs">出没・遭遇</td><td className="px-3 py-2 text-xs">午前6:30〜7:15（78歳山菜採り男性がヒグマに襲われ格闘、軽傷。防除具なし）</td><td className="px-3 py-2 text-xs">3</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">音更町字下士幌北2線東30番地</td><td className="px-3 py-2 text-xs">痕跡確認</td><td className="px-3 py-2 text-xs">日中（主要道道帯広浦幌線の歩道上で数日経過したヒグマの糞と足跡を確認）</td><td className="px-3 py-2 text-xs">24</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">八戸市妙大開</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午前7:30ごろ（八戸工大二高から西へ約300メートルのエリアでツキノワグマ1頭）</td><td className="px-3 py-2 text-xs">25</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">十和田市深持梅山</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後8:30ごろ（ツキノワグマの子グマ1頭が徘徊）</td><td className="px-3 py-2 text-xs">26</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市高松2丁目19番地</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午前3:30ごろ（手掛けの松緑地付近においてツキノワグマ1頭が目撃される）</td><td className="px-3 py-2 text-xs">27</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">久慈市山形町霜畑第9地割</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後1:00ごろ（ツキノワグマ1頭が移動しているのを目撃）</td><td className="px-3 py-2 text-xs">28</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">登米市上沼字本宮地内</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後5:35ごろ（熊1頭。登米警察署および市役所が近隣の警戒を実施）</td><td className="px-3 py-2 text-xs">29</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">大和町杜の丘3丁目</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後6:20ごろ（田んぼを歩行する体長1.5メートルと1メートルのツキノワグマ2頭を住民目撃）</td><td className="px-3 py-2 text-xs">30</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">秋田市外旭川字三後田</td><td className="px-3 py-2 text-xs">出没・監視</td><td className="px-3 py-2 text-xs">午後5:45ごろ（民家敷地内にツキノワグマ。警察が夜間10時過ぎも継続警戒）</td><td className="px-3 py-2 text-xs">18</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">にかほ市樋目野字前谷地</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後7:00ごろ（ツキノワグマ1頭が民家近くで視認される。外出警戒要請）</td><td className="px-3 py-2 text-xs">31</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">郡山市逢瀬町 逢瀬公園入口</td><td className="px-3 py-2 text-xs">目撃・閉鎖</td><td className="px-3 py-2 text-xs">午前7:30ごろ（車載の男性が道路横断クマを目撃。公園は前日16日より閉園継続中）</td><td className="px-3 py-2 text-xs">8</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">奥多摩町境 三ノ木戸山周辺</td><td className="px-3 py-2 text-xs">襲撃・重傷</td><td className="px-3 py-2 text-xs">午前11:55ごろ（30代男性が下山中に襲われ重傷。熊鈴未携行。登山道一部閉鎖）</td><td className="px-3 py-2 text-xs">1</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">飯能市上名栗</td><td className="px-3 py-2 text-xs">出没</td><td className="px-3 py-2 text-xs">午後6:20ごろ（体長約1メートルのツキノワグマ。住人女性が写真を撮影し通報）</td><td className="px-3 py-2 text-xs">19</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">妙高市葎生地内 神社付近</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午前6:50ごろ（クマ1頭を目撃。山林周辺および通行の際の注意喚起）</td><td className="px-3 py-2 text-xs">32</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">朝日町横尾</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午前中（山林内のトレイルランニングコースにおいてツキノワグマの成獣1頭を目撃）</td><td className="px-3 py-2 text-xs">33</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">越前町宮崎地区 寺付近</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午前8:00ごろ（ツキノワグマ1頭を寺院周辺で目撃。警戒発令）</td><td className="px-3 py-2 text-xs">34</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">福井市甑谷町</td><td className="px-3 py-2 text-xs">出没</td><td className="px-3 py-2 text-xs">午後6:50ごろ（山麓の民家境界である塀を乗り越え、山林へ逃走する姿を確認）</td><td className="px-3 py-2 text-xs">21</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">南丹市美山町鶴ケ岡</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午前10:45ごろ（棚野千両橋南方200メートル道路上に小熊1頭が出没）</td><td className="px-3 py-2 text-xs">22</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市久城町</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後4:00ごろ（国営農地付近において成獣1頭のツキノワグマを視認）</td><td className="px-3 py-2 text-xs">35</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市安富町河成</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後4:00ごろ（民家等に近いエリアでツキノワグマ成獣1頭を目撃）</td><td className="px-3 py-2 text-xs">36</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市飯浦町</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">午後7:15ごろ（JR飯浦駅付近においてツキノワグマ成獣1頭を目撃）</td><td className="px-3 py-2 text-xs">7</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">柳井市伊陸</td><td className="px-3 py-2 text-xs">出没・録画</td><td className="px-3 py-2 text-xs">前日朝5:30（17日に詳細公開。ツキノワグマ3頭が1列で行進、倉庫物色）</td><td className="px-3 py-2 text-xs">5</td></tr>
          </tbody>
        </table>
      </div>
      <h3>隣接する二次動向・補足的事案</h3>
      <p>当日は直接の「目撃」以外にも、熊の生態に関連するいくつかの重要なニュースが行政機関および報道機関を通じて全国に流れた。</p>
      <p>北海道音更町下士幌の主要道道帯広浦幌線においては、歩道上に数日経過したヒグマの糞および足跡が確認され、歩行者や夕夜間・早朝の外出自粛を促す通達が出された（※24）。これは野生動物が舗装された人間側のインフラを移動ルートとして日常的に用いている兆候として重視される。</p>
      <p>また、長野県山ノ内町の志賀高原（平穏の水無池近くの山林）においては、16日の午後4時ごろに山菜採りに入った77歳の男性が行方不明となり、17日に警察、消防、地元の遭難対策協議会などがドローンを用いて15人態勢での広域捜索を実施したものの、発見には至らなかった（※37）。警察の発表によれば、この事案の周辺において「クマの直接の目撃情報」は寄せられていないとされているが（※37）、全国的に山菜採り中の遭遇事故が多発している最中での失踪であり、多角的な警戒が求められた。</p>
      <p>さらに、兵庫県豊岡市奥野においては、13日にツキノワグマ（体長約1メートル）が民家そばの倉庫へ侵入する事案があり、14日の現地調査で消失が確認された後の17日に「5月に入り目撃が前年同期より増加している」として注意を促すまとめニュースが配信され、中長期的な警戒の継続が叫ばれた（※38）。</p>
      <h2>5. 生態学的・行動科学的背景からみる構造的要因と今後の防災政策</h2>
      <p>2026年5月17日という極めて限定的な一日の中に、これほどまでに多様な出没情報が凝縮されている背景には、生物季節学（バイオクライマトロジー）に基づいた一連の構造的要因が存在する。</p>
      <h3>冬眠明けの極限栄養要求期と人間活動の重複</h3>
      <p>5月中旬という季節は、多くの熊類が冬眠期を終えて基礎代謝を回復させ、飢餓状態から脱するために最も強烈な採餌衝動（過食期前段階の栄養要求）を示す時期である。落葉広葉樹の芽吹きやタケノコ、山菜などの栄養価の高い山林植物が成長する標高帯は、人間側が山菜採り等で好んで進入する標高帯と完全に重複する（※4）。</p>
      <p>この二者の「ニッチ（生態的地位）の競合」が、奥多摩や士別における突発的な直接接触を引き起こす第一因である（※10）。特に音響忌避具やクマスプレーを持たない人間は、音に敏感な熊類にとって「藪の中から突然現れる予測不能な威脅」として認知され、熊側の自己防衛的・反射的な攻撃を誘発しやすい（※2）。</p>
      <h3>住宅地・農地を「安価なフォラジング・パッチ」として捉える世代</h3>
      <p>山口県柳井市における親子とみられるツキノワグマ3頭の隊列行進や、倉庫の物色に見られる学習行動は（※6）、人間の居住地が「容易かつ安全に高カロリー資源（生ゴミ、農作物、配合飼料など）を獲得できる最適なパッチ（餌場）」として完全に定着している事実を示す。</p>
      <p>こうした世代の個体（アーバンベア）は、伝統的な野生動物が持っていた人間への本能的恐怖を喪失しており、神社の境内（※32）、通学路に近接する高校周辺（※25）、さらには幹線道路の横断や駅周辺 7 にまで平然と姿を現す。秋田市外旭川の事案のように（※18）、包囲網の中であっても立ち去らずに敷地内にとどまる行動特性は、都市環境への適合度が高まっている証拠とも言える。</p>
      <h3>包括的な防災政策への移行提言</h3>
      <p>全国各地で相次ぐこの危機に対処するためには、パトロールや事後的なワナの設置といった対症療法から、人間社会全体のシステム再設計（構造的ゾーニング）への転換が必要不可欠である。</p>
      <ol>
        <li>防除具携行の義務化と観光行政の制御: 奥多摩のようにハイキングコースや観光地に隣接する高リスクエリアにおいては、登山口における熊鈴・クマスプレーの携行状況のセルフチェック、あるいはレンタル制度の整備、未携行者に対する立ち入り自粛の行政指導などを制度化する必要がある（※2）。</li>
        <li>物理的排除と誘引物質の徹底的管理: 民家・倉庫・農地に隣接するバッファーゾーンの刈り払いを徹底し、倉庫のロック機構の強化（※6）、生ゴミの屋外放置を罰則付きで禁止するなどの法的な地域ルール作りが急務である（※23）。</li>
        <li>AIおよび常時警戒インフラの導入: 柳井市のように防犯カメラに熊が記録された段階で、即時かつ自動的に地域のメーリングリストや有線放送で広報するような、スマートシティ技術と連動した「リアルタイム野生動物警報システム」の構築が、今後の被害を未然に防ぐ決定的な鍵となる（※6）。</li>
      </ol>

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
          <dd>2026年5月17日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-18</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-18</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、公開ニュース・自治体発表・政府公表資料をもとに AI で集約・要約した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
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
