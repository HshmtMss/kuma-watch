// drive-content-hash: 63bd5bc6949721fce22c7cb708a6c5bd9858c7e015cb7609bb5c608015174fa9
// このファイルは scripts/import-research.ts によって自動生成されています。
// Drive 側の元 Doc を更新すると、次回の import 実行時にこのファイルが再生成されます
// (上記ハッシュが変わったかどうかで判定)。手動で本文を修正する場合はハッシュ行ごと残してください。
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-03-daily-report";
const TITLE = "2026年5月3日における日本全国の熊出没状況と野生動物管理に関する多角的調査報告";
const DESCRIPTION = "2026年の春、日本列島はかつてない規模での野生動物、特にクマ類の出没と人身被害の危機に直面している。5月3日は憲法記念日であり、ゴールデンウィークの後半戦が開始される行楽シーズンのピークにあたるが、この日一日だけで全国各地から報告されたクマの目撃、衝突事故、人身被害、そして行政による捕獲・駆除の記";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-06",
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
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
  mainEntityOfPage: `${SITE_URL}/research/${SLUG}`,
};

const REFERENCES: { title: string; url: string; site?: string }[] = [
    {
      "title": "体長は約２メートルだったと…真夜中の国道でクマと衝突 運転手は ...",
      "url": "https://www.htb.co.jp/news/archives_37379.html"
    },
    {
      "title": "北海道のヒグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/hokkaido",
      "site": "12,658件 | クママップ"
    },
    {
      "title": "東北道でクマと乗用車が衝突 運転男性にけが無し 宮城・栗原市 | khb ...",
      "url": "https://www.khb-tv.co.jp/news/16542951"
    },
    {
      "title": "市役所近くの中心部でクマの目撃相次ぐ 付近にはクマのものとみ ...",
      "url": "https://www.fnn.jp/articles/-/1039468"
    },
    {
      "title": "ツキノワグマ出没 長野県安曇野市穂高有明 (2026年5月2日) #B9C8 ...",
      "url": "https://kumamap.com/ja/sightings/40fcdb97bc97b9c8"
    },
    {
      "title": "熊出没マップ2026年 - 全国131,441件",
      "url": "https://kumamap.com/ja",
      "site": "クママップ"
    },
    {
      "title": "【2026年】近年の熊による人身被害事例（市街地・登山・山菜取り）（2021–2026）",
      "url": "https://nebukuro.net/kuma-jinshin-higai-jirei/"
    },
    {
      "title": "昨年同時期の倍以上、軽井沢のクマ目撃170件 有害鳥獣対策協議会で情報共有",
      "url": "https://www.karuizawa.co.jp/topics/2025/12/170.php"
    },
    {
      "title": "世界遺産にクマ影響 京都の古刹が一部立入禁止に 日光の名所にも“爪 ...",
      "url": "https://www.kab.co.jp/news/article/16543629"
    },
    {
      "title": "安全安心:クマ出没の注意喚起について（妙高市）",
      "url": "https://joetsu.yukiguni.town/saigai/323634/",
      "site": "上越妙高タウン情報"
    },
    {
      "title": "安全安心:クマの目撃について（妙高市：柳井田町地内） | 上越妙高タウン情報",
      "url": "https://joetsu.yukiguni.town/saigai/323632/"
    },
    {
      "title": "新潟県新発田市の防災情報 | 熊の出没情報（2026/5/3）",
      "url": "https://kurashi.yahoo.co.jp/niigata/15206/incidents/bousai/372047",
      "site": "Yahoo!くらし"
    },
    {
      "title": "京都府のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/kyoto",
      "site": "7,054件 | クママップ"
    },
    {
      "title": "京都市のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/kyoto/kyoto-city",
      "site": "449件"
    },
    {
      "title": "成就山御室八十八ヶ所 入山禁止のお知らせ | 世界遺産 真言宗御室派総本山 仁和寺",
      "url": "https://ninnaji.jp/news/caution/"
    },
    {
      "title": "京都タワーのツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/tourism/kyoto-tower",
      "site": "376件"
    },
    {
      "title": "広島県のツキノワグマ出没マップ2026年",
      "url": "https://kumamap.com/ja/areas/hiroshima",
      "site": "113件 | クママップ"
    },
    {
      "title": "【クマ出没】2026年度初「クマ出没警報」発令 1週間で目撃10件超えクマ遭遇リスク高まる 山形",
      "url": "https://www.fnn.jp/articles/-/1038626"
    },
    {
      "title": "【クマ出没】2026年度初「クマ出没警報」発令 1週間で目撃10件超えクマ遭遇リスク高まる 山形",
      "url": "https://www.sakuranbo.co.jp/news/2026/05/01/2026050100000001.html"
    },
    {
      "title": "人とクマ、揺らぐ境界線 欧米でもクマ出没増加 理念としての「共生」と「現実の安全確保」に隔たり",
      "url": "https://www.fnn.jp/articles/-/1039366"
    },
    {
      "title": "クマはハチミツより肉を好む？アラスカの研究が示す“80％肉食”の衝撃",
      "url": "https://note.com/tokyonewsmedia/n/ne25c9487775c",
      "site": "note"
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
        <span>対象期間: 2026年5月3日</span>
        <span>·</span>
        <span>公開: 2026-05-06</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年の春、日本列島はかつてない規模での野生動物、特にクマ類の出没と人身被害の危機に直面している。5月3日は憲法記念日であり、ゴールデンウィークの後半戦が開始される行楽シーズンのピークにあたるが、この日一日だけで全国各地から報告されたクマの目撃、衝突事故、人身被害、そして行政による捕獲・駆除の記録は、現代日本における野生動物管理の限界を露呈させるものとなった。本報告書では、2026年5月3日に発生した事案を詳細に記述し、その背後にある生態学的、社会学的要因を分析するとともに、今後の野生動物管理における課題を考察する。</p>
      <h2>北部日本における交通インフラと大型哺乳類の衝突</h2>
      <p>北海道および東北地方北部において、2026年5月3日は交通インフラ上での重大な事案が相次いだ日として記録される。冬眠から目覚めた大型個体が、餌資源を求めて行動圏を拡大する中で、高速道路や国道といった主要幹線に侵入するケースが顕著となっている。</p>
      <h3>北海道道北地域における道路生態学的リスク</h3>
      <p>北海道天塩町において発生した衝突事故は、ヒグマの行動圏と人間の移動経路が致命的な形で交差した好例である。5月3日の午前0時30分ごろ、天塩町タツネウシの国道40号を旭川方面へ走行していた乗用車が、突如として道路左側から飛び出してきた体長約2メートルのヒグマと衝突した（※1）。この事案において特筆すべきは、衝突した個体の巨大さと、事故後の運転者の行動、そして発覚の経緯である。</p>
      <p>現場は住宅からわずか350メートルほどしか離れていない地点であったが、深夜の国道という環境下で、時速 から 程度で走行していたと思われる車両は、左側の前部および側面を大きく破損した（※1）。運転手の男性は、衝突の衝撃にもかかわらず停車せずに走行を続け、数キロ離れたJR問寒別駅付近でようやく停車し、保険会社等へ連絡を行っていた（※1）。この様子を目撃した通行人が「壊れた車がある」と警察に通報したことで、事案が公のものとなった（※1）。</p>
      <p>この事故は、ヒグマという陸上最大級の食肉目との遭遇が、単なる「目撃」に留まらず、物理的な破壊を伴う「事故」として日常化していることを示唆している。また、同日の午前8時20分には稚内市大字声問村字開進においてもヒグマの目撃が報告されており、道北エリア全体でヒグマの活動が活発化していたことが裏付けられる（※2）。</p>
      <h3>東北自動車道における衝突事案の衝撃</h3>
      <p>同様の交通衝突事案は、宮城県栗原市においても発生した。5月3日の午前0時ごろ、東北自動車道の下り線（栗原市一迫柳目付近）において、走行中の乗用車が体長約1メートルのクマと衝突した（※3）。クマは車両の左手から衝突した後、付近の茂みへと逃走したとされるが、車両のバンパー付近が損壊する被害が出た（※3）。</p>
      <p>高速道路上での衝突は、一般道での事故以上に致命的な二次被害（後続車による追突や横転など）を引き起こす可能性が高い。時速 で走行する環境下での野生動物の侵入は、ドライバーの反応時間を超える脅威であり、防護柵の設置や管理体制の再検討を迫る事態といえる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">2026年5月3日の主要な車両衝突事案</th>
              <th className="px-3 py-2">発生場所</th>
              <th className="px-3 py-2">発生時刻</th>
              <th className="px-3 py-2">クマの推定体長</th>
              <th className="px-3 py-2">被害状況</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道天塩町国道40号</td><td className="px-3 py-2 text-xs">タツネウシ付近</td><td className="px-3 py-2 text-xs">00:30</td><td className="px-3 py-2 text-xs">約 2.0 m</td><td className="px-3 py-2 text-xs">車両左側破損 1</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県栗原市東北道</td><td className="px-3 py-2 text-xs">一迫柳目付近</td><td className="px-3 py-2 text-xs">00:00</td><td className="px-3 py-2 text-xs">約 1.0 m</td><td className="px-3 py-2 text-xs">バンパー付近損壊 3</td></tr>
          </tbody>
        </table>
      </div>
      <h2>秋田県横手市における「アーバン・ベア」現象の深刻化</h2>
      <p>2026年5月3日の出没情報の中で、最も緊迫した状況の一つが秋田県横手市で観察された。地方都市の中心市街地において、早朝から断続的にクマが目撃されるという、いわゆる「アーバン・ベア（都市型クマ）」の問題が極めて顕著な形で現れた。</p>
      <h3>市街地中心部での多発的な目撃</h3>
      <p>横手市では、5月3日の早朝から午前中にかけて、計6件の目撃情報が相次いで寄せられた（※4）。具体的には、午前4時30分ごろ、横手市田中町にある「光明寺街区公園」の周辺で、体長約1.5メートルのクマ1頭が徘徊しているのが確認された（※4）。この公園は、横手市役所本庁舎にもほど近い市の中心部に位置しており、周辺には住宅や商店が密集している。現場付近ではクマのものとみられる糞の跡も発見されており、個体が一定時間、市街地に滞在していたことが推測される（※4）。</p>
      <p>目撃範囲は広域にわたり、市役所条里南庁舎付近、さらには主要な観光施設である「秋田ふるさと村」や、その近隣の「田久保沼」周辺でも情報が報告されている（※4）。ゴールデンウィーク期間中ということもあり、これらの観光地には多くの家族連れや県外客が訪れることが予想されていたため、市および警察による警戒態勢は極めて高いレベルに引き上げられた。</p>
      <h3>情報共有システム「クマダス」の運用と課題</h3>
      <p>秋田県では、クマの出没情報をリアルタイムで共有するシステム「クマダス」が運用されており、横手市の事案もこのシステムに基づいて迅速に周知された（※4）。しかし、システムによる情報の可視化が進む一方で、市街地に深く侵入した個体に対する「決定的な追い払い手法」や「捕獲判断の迅速化」については、依然として現場の猟友会や行政担当者の重い判断に委ねられている。都市部での発砲は法的に厳しく制限されており、麻酔銃による捕獲も、薬剤が効くまでの数分間に個体が暴れるリスクを考慮すると、容易な選択肢ではない。</p>
      <h2>長野県および中部地方における捕獲事案と負傷事故</h2>
      <p>長野県および新潟県を中心とする中部地方では、5月3日に具体的な捕獲・駆除事案、および人身負傷事故が報告されており、事態の深刻さは北日本に引けを取らない。</p>
      <h3>安曇野市穂高有明における住宅内居座り事案</h3>
      <p>長野県安曇野市では、人里離れた山林ではなく、明確な「民家の敷地内」での緊迫した捕獲劇が発生した。5月3日午前9時ごろ、安曇野市穂高有明の住宅の庭において、体長約1メートルのツキノワグマ成獣1頭が目撃された（※5）。このクマは、通報を受けて駆けつけた市職員、警察、地元猟友会の警戒をよそに、数時間にわたり庭先に居座り続けるという、人への警戒心が著しく欠如した行動を見せた（※5）。</p>
      <p>最終的に、目撃から約4〜5時間が経過した午後2時30分ごろ、猟友会によって麻酔銃で捕獲され、その後の協議を経て駆除された（※5）。この事案において幸いにも怪我人は出なかったが、白昼の住宅地に成獣が数時間滞在したという事実は、地域住民に大きな衝撃を与えた。安曇野市は、庭先に果実や生ごみなどの誘引物を置かないよう、改めて強い注意喚起を行っている（※5）。</p>
      <h3>軽井沢町における山菜採り中の人身被害</h3>
      <p>観光地として知られる北佐久郡軽井沢町では、より直接的な人身被害が報告されている。5月3日、軽井沢町追分の国有林（三ツ石地区付近）において、山菜採りをしていた男性がクマと遭遇し、負傷した（※7）。この個体は親子グマであり、男性が冬眠穴の付近に不用意に接近したことが、母グマによる防衛的攻撃を誘発したと考えられている（※8）。</p>
      <p>軽井沢町では、この事案以外にも6月に散策中の夫婦が負傷するなど、人身被害が相次いでいる（※8）。これを受けて町長は、これまでの「共生」を主眼とした学習放獣（捕獲後に山へ放す）方針を転換し、人間活動エリアで捕獲された個体については、一定期間を区切って「駆除」する方針を決定した（※9）。これは、住民および観光客の安全確保を最優先とする苦渋の決断といえる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">中部地方における主要な事案（2026年5月3日）</th>
              <th className="px-3 py-2">地域・場所</th>
              <th className="px-3 py-2">個体情報</th>
              <th className="px-3 py-2">結果・対応</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">民家への侵入と居座り</td><td className="px-3 py-2 text-xs">長野県安曇野市</td><td className="px-3 py-2 text-xs">成獣 1.0 m</td><td className="px-3 py-2 text-xs">麻酔銃で捕獲・駆除 5</td></tr>
            <tr><td className="px-3 py-2 text-xs">山菜採り中の負傷事故</td><td className="px-3 py-2 text-xs">長野県軽井沢町</td><td className="px-3 py-2 text-xs">親子グマ</td><td className="px-3 py-2 text-xs">男性が軽傷 7</td></tr>
            <tr><td className="px-3 py-2 text-xs">市街地パトロール</td><td className="px-3 py-2 text-xs">新潟県妙高市</td><td className="px-3 py-2 text-xs">1頭</td><td className="px-3 py-2 text-xs">発見に至らず注意喚起継続 10</td></tr>
            <tr><td className="px-3 py-2 text-xs">子グマの目撃</td><td className="px-3 py-2 text-xs">新潟県新発田市</td><td className="px-3 py-2 text-xs">子グマ 0.5 m</td><td className="px-3 py-2 text-xs">周辺への警戒呼びかけ 12</td></tr>
          </tbody>
        </table>
      </div>
      <h2>西日本および文化的景観におけるクマの脅威</h2>
      <p>2026年5月3日の状況は、クマの生息域が伝統的な山間部から、歴史的・文化的価値の高い都市部周辺にまで拡大していることを鮮明に描き出した。特に京都市での事案は、観光立国を目指す日本にとって象徴的な事件となった。</p>
      <h3>京都・仁和寺の成就山入山禁止措置</h3>
      <p>世界文化遺産である京都市右京区の仁和寺では、5月3日、参拝者の安全を確保するために、境内北側に位置する成就山（御室八十八ヶ所霊場）への入山を当面の間禁止する措置が継続されていた（※9）。この決定に伴い、同日に予定されていた恒例行事「成就山八十八ヶ所ウォーク」も中止に追い込まれた（※15）。</p>
      <p>この措置の背景には、4月25日に清滝川沿いで親子とみられる3頭のクマが目撃され、その後も嵐山周辺や右京区内の市街地近くで目撃が相次いだという状況がある（※14）。地元の猟師の分析によれば、本来の生息域にいた個体が、雄グマによる子殺し（発情期の雄が雌を再び交尾可能にするために、連れている子を殺す行動）から逃れるために、より人間活動に近い「緩衝地帯」や「都市部」へと逃げ込んできた可能性がある（※9）。</p>
      <p>仁和寺の境内自体は通常通り参拝可能であったが、信仰と観光が結びついた「八十八ヶ所巡り」のような活動が、野生動物の脅威によって制限される事態は、日本の精神文化や地域観光に影を落としている。</p>
      <h3>広島県における出没状況の回顧</h3>
      <p>5月3日の直接的なニュースではないが、広島県においても2026年春にかけて北広島町や広島市安佐南区、西区などでクマの目撃やワナへの捕獲が相次いでいた（※17）。特に広島市のような大都市の近郊においても、親子連れのクマが公園や柿の木に出没するケースが確認されており、全国的な生息域の拡大と「人慣れ」が進行していることが伺える（※17）。</p>
      <h2>2026年度の統計的傾向と生態学的背景</h2>
      <p>2026年5月3日に全国でこれほどまでに多くの事案が発生した背景には、単なる偶然ではない、複数の要因が絡み合っている。</p>
      <h3>統計が示す異常事態</h3>
      <p>2026年度のクマ出没状況は、統計開始以来最悪の被害を出した2025年度をも凌駕する勢いを見せている。山形県では4月30日までの1週間で市街地の目撃が10件を超え、県は2026年度初の「クマ出没警報」を発令した（※18）。4月時点の累計目撃件数は、山形県で前年の2倍の86件、仙台市では2025年の10倍以上となる32件に達している（※20）。</p>
      <p>長野県においても、2025年10月に月間518件の出没を記録した後、冬眠期を経て2026年4月には既に80件の報告が寄せられていた（※5）。これらの数字は、クマの個体数自体が増加していることに加え、森林内の餌資源（堅果類）の凶作や、気候変動による冬眠サイクルの乱れが影響している可能性を示唆している。</p>
      <h3>クマの食性と肉食化への懸念</h3>
      <p>クマの行動がより大胆かつ獰猛になっている要因として、食性の変化を指摘する研究もある。一般に「雑食で木の実を好む」とされるツキノワグマやヒグマだが、アラスカの研究ではヒグマの食事の80％が肉食であるというデータもあり、日本国内においても、シカの個体数増加に伴う死肉の利用や、家畜、さらには人間を捕食対象として認識し始めている個体の存在が危惧されている（※21）。</p>
      <p>特に春先、冬眠から目覚めて深刻な栄養不足状態にあるクマにとって、里山の農作物や生ごみ、さらには放牧されている家畜は、森林内での乏しい餌よりも効率的な栄養源となる。一度「人里は食べ物が豊富で、人間は怖くない」と学習した個体は、繰り返し人里に現れるようになり、その傾向は次世代の個体（子グマ）にも継承される（※5）。</p>
      <h2>野生動物管理における今後の課題と対策</h2>
      <p>2026年5月3日のニュースに集約された事態は、日本が「野生動物との共生」という美名の下で行ってきた管理政策が、重大な岐路に立たされていることを示している。</p>
      <h3>防御装備と知識の普及</h3>
      <p>人身被害を防止するための現実的な手段として、クマ撃退スプレーの効果が改めて注目されている。米国アラスカでの調査によれば、クマ撃退スプレー（EPA認可製品）を携行していた人の98％が無傷で生還しており、その停止率は銃器を上回る と報告されている（※7）。</p>
      <p>日本国内でも、山菜採りや登山の際には、単なる鈴やラジオだけでなく、カプサイシノイドを高濃度に含むスプレーの携行が強く推奨されている。しかし、市場には「クマ用」と謳いながらも性能が不十分な安価なスプレーも出回っており、米国のEPA基準（射程 以上、噴射時間 6秒以上）を満たす正規品を選択することの重要性が説かれている（※7）。</p>
      <h3>行政によるゾーニングと駆除の妥当性</h3>
      <p>安曇野市や軽井沢町の事例が示す通り、人間活動エリアに深く侵入した個体に対しては、迅速な「排除」が不可欠である。しかし、日本の法律体系では、鳥獣保護管理法に基づく捕獲許可や、銃刀法に基づく発砲制限など、現場の対応を制約する壁が多い。</p>
      <p>また、駆除に対する一部の市民からの抗議（いわゆる「逆電」）が行政の判断を鈍らせる要因となっているとの指摘もあるが、2026年5月3日の惨状を見る限り、現場の安全確保を最優先とする社会的合意の形成が急務である。</p>
      <h2>結語</h2>
      <p>2026年5月3日の全国的なクマ出没ニュースは、単なる季節の風物詩ではなく、日本の国土管理と生態系バランスの崩壊を警告するものである。北海道の国道、秋田の市街地、長野の民家、そして京都の古刹。これらすべての場所で、野生の力と現代社会の秩序が衝突した。</p>
      <p>今後、我々に求められるのは、感情的な共生論ではなく、科学的知見に基づいた「厳格な境界線の再構築」である。モニタリング技術の高度化、法整備の迅速化、そして住民一人ひとりの防衛意識の向上が、2026年の残りのシーズン、そして来年以降の惨禍を防ぐ唯一の道となるだろう。</p>
      <p>本報告書で詳述した各事案の記録が、次なる悲劇を回避するための基礎資料として活用されることを切に願う。</p>

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
          <dd>2026年5月3日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-06</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-06</dd>
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
