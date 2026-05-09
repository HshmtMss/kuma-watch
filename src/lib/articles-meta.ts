// 記事の中央レジストリ。各 page.tsx がそれぞれ実際の本文を持つが、
// sitemap / 一覧ページ / クロスリンクは ここから引く。

export type CategoryId =
  | "encounter"
  | "gear"
  | "season"
  | "ecology"
  | "scene"
  | "region"
  | "background";

export type CategoryMeta = {
  id: CategoryId;
  /** カテゴリの URL slug。/articles/category/[slug] で使う */
  slug: string;
  /** 表示名 (短) */
  name: string;
  /** 記事一覧ページなどでの 1 行リード */
  lead: string;
  /** カテゴリページの SEO 用 description (140〜160 字程度) */
  description: string;
  /** 表示順。小さい順に並ぶ */
  order: number;
  /** カテゴリチップなどに使う絵文字 (任意) */
  emoji?: string;
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "encounter",
    slug: "encounter",
    name: "遭遇・対処",
    lead: "クマと出会ってしまったとき、何をすれば生き残れるか。距離別の対応・襲われた後の応急処置まで。",
    description:
      "クマに遭遇したときの対処法、子グマを見たときの判断、襲われた直後の応急処置と通報など、命に関わる場面で迷わないための実践的な記事をまとめています。",
    order: 1,
    emoji: "🐻",
  },
  {
    id: "gear",
    slug: "gear",
    name: "装備",
    lead: "クマよけスプレー・クマ鈴・撃退道具など、登山・キャンプ・山仕事で使える装備の選び方と使い方。",
    description:
      "クマよけスプレーの正しい使い方、クマ鈴の効果検証、ホーン・ナイフ・銃器など撃退装備の現実的な選択肢を、日本の法的制約を踏まえて解説します。",
    order: 2,
    emoji: "🎒",
  },
  {
    id: "season",
    slug: "season",
    name: "季節別",
    lead: "春の母グマ、秋のハイパーフェイジア、冬の穴持たず — 季節ごとに変わるクマのリスクと対策。",
    description:
      "クマの行動は季節で大きく変わります。春・夏・秋・冬それぞれの出没パターンと、登山・キャンプ・山菜採り・きのこ狩りで気をつけるべきポイントをまとめます。",
    order: 3,
    emoji: "🍂",
  },
  {
    id: "ecology",
    slug: "ecology",
    name: "生態",
    lead: "クマの食性・感覚・痕跡・種別の違い。生態を知ると、出会わないための判断材料が増える。",
    description:
      "ツキノワグマとヒグマの違い、季節別の食性、嗅覚・聴覚・視覚の鋭さ、足跡や糞などのフィールドサインの見分け方など、クマの生態を理解するための記事をまとめています。",
    order: 4,
    emoji: "🌲",
  },
  {
    id: "scene",
    slug: "scene",
    name: "シーン別",
    lead: "山菜採り・きのこ狩り・キャンプ・渓流釣り・通学路 — 場面ごとの実践クマ対策。",
    description:
      "山菜採り・きのこ狩り・キャンプ・渓流釣り・通学路・自宅果樹園など、活動シーンごとに必要なクマ対策をまとめています。それぞれのシーンに固有のリスクと回避策を解説。",
    order: 5,
    emoji: "🏕️",
  },
  {
    id: "region",
    slug: "region",
    name: "地域別",
    lead: "北海道のヒグマ、東北のツキノワグマ — 地域ごとに違う出没事情と備え方。",
    description:
      "北海道のヒグマ、東北のツキノワグマ、関東甲信・中部山岳・西日本のクマ事情など、地域ごとの個体数・分布・市街地出没の状況をまとめます。観光・登山・通勤の備えに。",
    order: 6,
    emoji: "🗾",
  },
  {
    id: "background",
    slug: "background",
    name: "背景・データ",
    lead: "クマ出没はなぜ増えているのか。統計・歴史的事故・関連法律から全体像を整理する。",
    description:
      "近年のクマ出没急増の背景、過去の重大事故から学べる教訓、鳥獣保護法・狩猟法・銃刀法などクマと関わる法律を、データと史実に基づいて整理します。",
    order: 7,
    emoji: "📊",
  },
];

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  /** 一覧用の短いリード */
  lead: string;
  /** 公開日 (ISO) */
  publishedAt: string;
  /** 最終更新日 (ISO) */
  updatedAt: string;
  /** 該当するシーズンタグ — 一覧並び順や関連記事に使う */
  season?: "spring" | "summer" | "autumn" | "winter" | "all";
  /** 主カテゴリ — 1 記事 1 カテゴリ。横断的なつながりは tags で表現する */
  category: CategoryId;
  /** 関連カテゴリ */
  tags: string[];
  /** ヒーロー画像 (public/articles/ 配下のパス) */
  heroImage?: string;
  /** ヒーロー画像のクレジット (Unsplash 等) */
  heroCredit?: string;
  /** ヒーロー画像のクレジットリンク */
  heroCreditUrl?: string;
};

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "encounter",
    title: "クマに遭遇したらどうする — 距離別の正しい対処法",
    description:
      "登山中・山菜採り中にクマに出会ったときの対処法を距離別に解説。背中を見せて逃げるのは絶対 NG。距離 50m / 20m / 至近距離それぞれの対応と、襲われたときの最終手段までを実例付きで紹介。",
    lead: "背中を見せて逃げるのは最悪の選択。距離別の正しい対処を知っておくだけで生存率は大きく上がります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "encounter",
    tags: ["遭遇", "対処", "安全", "登山"],
    heroImage: "/articles/encounter.jpg",
    heroCredit: "Photo by Len Rempel on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/Mvmuqh06dr4",
  },
  {
    slug: "autumn",
    title: "秋のクマ対策 — なぜ秋が最も危険なのか",
    description:
      "9月〜11月はクマの目撃件数が年間最多。冬眠前の食欲増加 (ハイパーフェイジア) で行動範囲が広がり、市街地まで降りてくることも。秋特有のリスクと対策を 2024 年以降のデータを踏まえて解説。",
    lead: "9月〜11月は冬眠前の食欲増加でクマの行動が活発化。山菜・きのこ狩りや紅葉登山で気をつけるべきポイントをまとめます。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "autumn",
    category: "season",
    tags: ["秋", "ハイパーフェイジア", "登山", "きのこ狩り"],
    heroImage: "/articles/autumn.jpg",
    heroCredit: "Photo by Weiqi Xiong on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/p0ISygGws9w",
  },
  {
    slug: "bear-spray",
    title: "クマよけスプレーの使い方と選び方",
    description:
      "クマ撃退スプレーは正しく使えば最も効果が高い対策の 1 つ。射程・ホルスター・容量の選び方、噴射のコツ、航空機持込・寒冷地での失敗を避ける方法までを実用的に解説。",
    lead: "正しく使えば撃退率 90% 以上のクマよけスプレー。容量・射程・ホルスターの選び方と、噴射時のコツを解説。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "gear",
    tags: ["装備", "スプレー", "登山"],
    heroImage: "/articles/bear-spray.jpg",
    heroCredit: "Photo by Clay Banks on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/GEQTn-FkDq4",
  },
  {
    slug: "bear-bell",
    title: "クマ鈴は本当に効果がある? — 最新研究と現実的な使い方",
    description:
      "クマ鈴の有効性は研究によって意見が分かれます。近年の研究結果と、慣れたクマには効かない例、ホイッスル・ラジオなど他の音具との比較、シーンごとの使い分けまで実用視点で整理。",
    lead: "「クマ鈴は意味がない」という説と「やっぱり効く」という説、両方の根拠を中立に整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "gear",
    tags: ["装備", "クマ鈴", "ホイッスル"],
    heroImage: "/articles/bear-bell.jpg",
    heroCredit: "Photo on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/rXLY-J6kVw0",
  },
  {
    slug: "species-difference",
    title: "ツキノワグマとヒグマの違い — 行動・分布・対処",
    description:
      "本州・四国のツキノワグマと、北海道のヒグマ (エゾヒグマ) は同じ「クマ」でも生態と警戒レベルが違います。サイズ・分布・性格・遭遇時の対応の違いを比較してまとめます。",
    lead: "ツキノワグマとヒグマでは襲われたときの対応が真逆になることも。違いを正しく知っておきましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "ecology",
    tags: ["生態", "ツキノワグマ", "ヒグマ"],
    heroImage: "/articles/species-difference.jpg",
    heroCredit: "Photo by Zdeněk Macháček on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/_QG2C0q6J-s",
  },
  {
    slug: "spring",
    title: "春のクマ対策 — 冬眠明けの母グマと子グマに注意",
    description:
      "4〜6 月は冬眠から出たばかりのクマが活動を始める時期。子連れの母グマは年間で最も攻撃的になります。雪解け直後の山菜採り・新緑登山で気をつけるべきポイントを解説。",
    lead: "冬眠明けのクマは飢えており、子連れの母グマは特に攻撃的。雪解け直後の山菜採りで遭遇事故が多発します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "spring",
    category: "season",
    tags: ["春", "母グマ", "子グマ", "山菜採り"],
    heroImage: "/articles/spring.jpg",
    heroCredit: "Photo by Elena Leya on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/PnBc3ZrJOIo",
  },
  {
    slug: "diet",
    title: "クマは何を食べる? — 食性と季節別の活動エリア",
    description:
      "クマは雑食ですが季節ごとに食べ物が大きく変わり、それが行動範囲を決めます。春の若芽から秋のドングリまで、食性パターンと出没エリアの関係を解説。",
    lead: "クマの活動エリアは「いま何が食べ頃か」で決まります。食性カレンダーを知っておけば、出没予測の精度が上がります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "ecology",
    tags: ["生態", "食性", "ドングリ"],
    heroImage: "/articles/diet.jpg",
    heroCredit: "Photo by Martins Cardoso on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/KjBo2mpTLNQ",
  },
  {
    slug: "why-increasing",
    title: "なぜクマの出没が増えているのか — 環境・人口・気候の三重要因",
    description:
      "近年、クマの出没・人身被害ともに統計開始以来最多レベルが続いています。ブナ凶作・里山の崩壊・人口減少・気候変動など複合的要因をデータで整理。",
    lead: "「クマが増えた」のではなく「クマと人の生活圏が重なった」。環境・人口・気候の三重要因を整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "background",
    tags: ["統計", "里山", "ブナ凶作"],
    heroImage: "/articles/why-increasing.jpg",
    heroCredit: "Photo by Aoi on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/cy_mPGVvhpY",
  },
  {
    slug: "cub-handling",
    title: "子グマを見たらどうする — 近くに必ず母グマがいる",
    description:
      "山中で子グマを見かけたとき、可愛いから写真を撮ろうとするのは絶対に NG。母グマは子を守るため最も攻撃的になる個体で、人身事故の代表的なパターンです。",
    lead: "子グマを見たら 0.5 秒で立ち去る判断を。近くには必ず母グマがいて、数十メートル以内に潜んでいる可能性が高い。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "encounter",
    tags: ["子グマ", "母グマ", "対処"],
    heroImage: "/articles/cub-handling.jpg",
    heroCredit: "Photo by Janko Ferlič on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/SDivo1PTBDs",
  },
  {
    slug: "home-protection",
    title: "自宅・果樹園でできるクマ対策 — 餌場を作らない",
    description:
      "クマを呼び寄せる最大の要因は人里にある「餌場」。柿・栗・果樹園・生ゴミ・ペットフード・コンポスト・蜂蜜の管理まで、家庭でできる現実的な対策を解説。",
    lead: "クマは食べ物の匂いに引き寄せられます。庭・畑・物置からの匂い管理ができれば、出没リスクは大きく下がります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "scene",
    tags: ["家庭", "果樹園", "電気柵"],
    heroImage: "/articles/home-protection.jpg",
    heroCredit: "Photo by Jong Hyuk Lee on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/Nrl5Q-Go8Y8",
  },
  {
    slug: "weapons",
    title: "クマ撃退の現実的な選択肢 — スプレー以外の装備",
    description:
      "クマよけスプレーが第一選択肢ですが、ホーン・ナイフ・銃器など他の選択肢にも触れておく価値があります。日本の法的制約も踏まえて整理。",
    lead: "「スプレーが買えない」「持参できない」場面でも、現実的に使える装備はあります。法的制約も踏まえて整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "gear",
    tags: ["装備", "スプレー", "撃退"],
    heroImage: "/articles/weapons.jpg",
    heroCredit: "Photo by Thomas Thompson on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/mTPohSE-Yiw",
  },
  {
    slug: "first-aid",
    title: "クマに襲われた後の応急処置と通報",
    description:
      "クマに襲われた直後の対応は生存率を大きく左右します。出血対応・感染症リスク・通報の優先順位・救急要請の方法をまとめます。",
    lead: "襲われた直後にやるべきは、止血と通報。出血と感染症が最大のリスクで、適切な処置で予後が大きく変わります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "encounter",
    tags: ["応急処置", "通報", "感染症"],
    heroImage: "/articles/first-aid.jpg",
    heroCredit: "Photo by Mathurin NAPOLY on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/MaKsx8JNbiI",
  },
  {
    slug: "historic-incidents",
    title: "過去のクマ重大事故から学ぶ — 三毛別事件・福岡大ワンゲル事件・十和利山",
    description:
      "三毛別羆事件、福岡大ワンダーフォーゲル部事件、十和利山熊襲撃事件 — 日本で起きた重大なクマ襲撃事故を振り返り、共通点と現代に生かせる教訓を整理します。",
    lead: "歴史上の重大事故には共通パターンがあります。三毛別・福岡大ワンゲル・十和利山から学べる教訓を整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "background",
    tags: ["事件", "歴史", "ヒグマ"],
    heroImage: "/articles/historic-incidents.jpg",
    heroCredit: "Photo by Kenneth Sørensen on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/o7E0s-6gm3E",
  },
  {
    slug: "summer",
    title: "夏のクマ対策 — 川遊び・キャンプ・避暑地でのリスク",
    description:
      "7〜8 月のクマは涼しい場所と昆虫食を求めて沢筋や中腹部に集中。川遊びやキャンプ、避暑地で気をつけるべきポイントを解説。",
    lead: "夏のクマは涼を求めて沢筋に集まります。川遊び・キャンプ・登山道での遭遇リスクを正しく把握しましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "summer",
    category: "season",
    tags: ["夏", "川遊び", "キャンプ"],
    heroImage: "/articles/summer.jpg",
    heroCredit: "Photo by Madison Kuhn on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/vZR-SeGWmSQ",
  },
  {
    slug: "winter",
    title: "冬のクマ対策 — 穴持たず・スキー場・冬山登山のリスク",
    description:
      "冬のクマはほとんど冬眠していますが、暖冬や食料不足の年は冬眠せず活動する「穴持たず」がいます。スキー場・冬山登山での遭遇可能性を解説。",
    lead: "「冬はクマがいない」は正しくありません。穴持たずや雪原での目撃事例があり、冬山にも油断は禁物です。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "winter",
    category: "season",
    tags: ["冬", "穴持たず", "スキー", "冬山"],
    heroImage: "/articles/winter.jpg",
    heroCredit: "Photo by Meg Jenson on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/lpJuJnnb_Mw",
  },
  {
    slug: "bear-tracks",
    title: "クマの足跡・糞・食痕の見分け方",
    description:
      "山中でクマの存在に気づくには痕跡 (フィールドサイン) を読む技術が役立ちます。足跡・糞・木の爪痕・食痕の見分け方を写真付きで解説。",
    lead: "山中で痕跡を読めると、クマの存在に「事前に」気づけます。足跡・糞・爪痕の見分け方を覚えましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "ecology",
    tags: ["痕跡", "足跡", "観察"],
    heroImage: "/articles/bear-tracks.jpg",
    heroCredit: "Photo by Mykyta Kondratov on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/AxV9931nM20",
  },
  {
    slug: "camping",
    title: "キャンプ場でのクマ対策 — テント・食料・夜間の備え",
    description:
      "キャンプ場でのクマ遭遇は、食料の匂いと夜間の警戒不足が主な原因。テント設営・食料保管・焚き火後の処理・夜間の対応をまとめて解説。",
    lead: "キャンプ中のクマトラブルは「匂い管理」と「夜間の備え」で 9 割回避できます。基本ルールを押さえましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "scene",
    tags: ["キャンプ", "テント", "食料"],
    heroImage: "/articles/camping.jpg",
    heroCredit: "Photo by Rostyslav Savchyn on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/8qK8yVV1ovU",
  },
  {
    slug: "fishing",
    title: "渓流釣りのクマ対策 — 沢筋でクマと遭遇しないための装備と立ち回り",
    description:
      "渓流釣りはクマ遭遇率が高い活動です。沢音で鈴の音が消え、視界が悪く、クマも沢を利用するため。釣り人向けの実用的な対策を解説。",
    lead: "沢音で鈴は届かない。渓流釣りはクマ遭遇率が高い活動です。釣り人ならではの装備と立ち回りを覚えましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "scene",
    tags: ["釣り", "渓流", "沢"],
    heroImage: "/articles/fishing.jpg",
    heroCredit: "Photo by Jamie Cooper on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/Ctw6Xbjko5c",
  },
  {
    slug: "school-route",
    title: "通学路のクマ対策 — 子供・保護者・学校でできること",
    description:
      "近年、通学路や住宅地での子供のクマ遭遇が増えています。集団登下校・装備・学校の連絡体制・地域の取り組みを解説。",
    lead: "通学路でのクマ出没が増加。子供・保護者・学校・地域がそれぞれできる対策を整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "scene",
    tags: ["通学路", "子供", "学校"],
    heroImage: "/articles/school-route.jpg",
    heroCredit: "Photo by Hulki Okan Tabak on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/DtFelymvoF0",
  },
  {
    slug: "hokkaido-bears",
    title: "北海道のヒグマ — 生態・分布・最新の出没事情",
    description:
      "北海道に生息するヒグマ (エゾヒグマ) の生態・個体数・分布・市街地出没の現状をまとめます。観光・登山・通勤での備えに。",
    lead: "北海道全域に生息するヒグマは個体数 1.2 万頭。札幌・旭川など都市近郊への出没も増えています。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "region",
    tags: ["北海道", "ヒグマ", "地域"],
    heroImage: "/articles/hokkaido-bears.jpg",
    heroCredit: "Photo by Cuvii on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/HrLpSle68kk",
  },
  {
    slug: "bear-senses",
    title: "クマの感覚 — 嗅覚・聴覚・視覚はどれくらい鋭いのか",
    description:
      "クマは嗅覚が極めて鋭く、聴覚も人間以上、視覚は人間に近いとされます。感覚特性を知ると、装備・行動の選択が変わります。",
    lead: "クマの嗅覚は犬の数倍。匂い管理がなぜ重要か、なぜ風下が危険か、感覚特性を知れば対策が変わります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    season: "all",
    category: "ecology",
    tags: ["生態", "嗅覚", "感覚"],
    heroImage: "/articles/bear-senses.jpg",
    heroCredit: "Photo by Bob Brewer on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/ooPXlZnUnSo",
  },

  // --- 2026-05 追加分 -------------------------------------------------

  {
    slug: "mushroom-picking",
    title: "きのこ狩りのクマ対策 — 秋の遭遇率No.1アクティビティ",
    description:
      "秋のクマ人身事故で最多なのが「きのこ狩り中の遭遇」。前傾姿勢で地面を見続け、林床に分け入り、夢中になりがち — クマと条件が揃います。装備と立ち回りで遭遇率は大きく下げられます。",
    lead: "秋の人身事故で最多のシーンが「きのこ狩り」。前傾姿勢・林床・無音 — クマと条件が揃います。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "autumn",
    category: "scene",
    tags: ["きのこ狩り", "秋", "山菜採り", "ハイパーフェイジア"],
    heroImage: "/articles/mushroom-picking.jpg",
    heroCredit: "Photo by Townsend Walton on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/REu4bAykGxA",
  },
  {
    slug: "wild-vegetables",
    title: "山菜採りのクマ対策 — 春の人身事故ワースト原因",
    description:
      "春のクマ人身事故の半数以上は山菜採り中に発生しています。冬眠明けの飢えた個体・子連れの母グマと、地面に屈み込み無防備になる山菜採り人の組み合わせは最悪。回避策を時系列で解説。",
    lead: "春の人身事故の半数以上は山菜採り中。冬眠明けの母グマと、地面に屈む人間 — 最悪の組み合わせです。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "spring",
    category: "scene",
    tags: ["山菜採り", "春", "母グマ", "タケノコ"],
    heroImage: "/articles/wild-vegetables.jpg",
    heroCredit: "Photo by Naira Babayan on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/hiozwuYUXtM",
  },
  {
    slug: "playing-dead",
    title: "クマに「死んだふり」は効くのか — 種別と状況で答えが変わる",
    description:
      "「死んだふり」は条件付きで有効ですが、ヒグマと捕食目的の襲撃では逆効果になり得ます。ツキノワグマ vs ヒグマ、防衛攻撃 vs 捕食攻撃、姿勢・タイミング — 正しい使い分けを整理。",
    lead: "死んだふりは条件付きで有効。ヒグマや捕食型の攻撃では逆効果になり得ます。種別と状況で正しく使い分けを。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "encounter",
    tags: ["死んだふり", "対処", "ツキノワグマ", "ヒグマ"],
    heroImage: "/articles/playing-dead.jpg",
    heroCredit: "Photo by Bill Pennell on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/o1PU3O2lIYQ",
  },
  {
    slug: "bear-speed",
    title: "クマの走力 — 時速50kmから人間が「絶対に」逃げ切れない理由",
    description:
      "クマの最高速度はツキノワグマで時速約 40km、ヒグマで時速約 50km。100m を 10 秒未満で走破する計算で、トレーニングを積んだ陸上選手でも逃げ切れません。物理データから「逃げない」が正解な理由を解説。",
    lead: "クマの最高速度は時速 50km。100m を 10 秒未満で走破。陸上選手でも逃げ切れません。背中を見せたら終わりです。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "ecology",
    tags: ["走力", "生態", "対処", "ヒグマ"],
    heroImage: "/articles/bear-speed.jpg",
    heroCredit: "Photo by Hans Veth on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/T5bcvBRHv_E",
  },
  {
    slug: "bear-laws",
    title: "クマと法律 — 鳥獣保護法・狩猟法・銃刀法の基礎",
    description:
      "クマは鳥獣保護管理法で保護対象でありながら、有害駆除・狩猟も認められる対象。スプレー所持・捕獲・駆除の要請・狩猟解禁の関係を、自治体・猟友会の役割とともに整理します。",
    lead: "クマは鳥獣保護管理法で守られつつ駆除も認められる対象。法律の枠組みを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "background",
    tags: ["法律", "鳥獣保護法", "狩猟", "銃刀法"],
    heroImage: "/articles/bear-laws.jpg",
    heroCredit: "Photo by Kvnga on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/7h1gRWaBiqk",
  },
  {
    slug: "electric-fence",
    title: "電気柵の張り方 — 自宅・果樹園・畑のクマ対策",
    description:
      "クマ対策として最も実効性が高い物理障壁が電気柵。電圧 5,000V 以上・5 段張り・地面とのアース・草刈り — 効果を出す張り方の基本と、ホームセンターで揃う機材の選び方を解説。",
    lead: "電気柵は正しく張れば効果絶大。電圧 5,000V・5 段張り・アース・草刈り — 押さえるべき基本を整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "scene",
    tags: ["電気柵", "果樹園", "家庭", "畑"],
    heroImage: "/articles/electric-fence.jpg",
    heroCredit: "Photo by Phillip Flores on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/pQ-TfGxHfbA",
  },
  {
    slug: "tohoku-bears",
    title: "東北のツキノワグマ事情 — 秋田・岩手・青森・山形・福島・宮城",
    description:
      "東北 6 県は本州ツキノワグマの主要生息地。秋田は人身事故全国最多が続き、岩手・山形でも市街地出没が常態化しています。県別の個体数・最新の出没傾向・地域固有のリスクをまとめます。",
    lead: "東北 6 県はツキノワグマの主要生息地。秋田は人身事故全国最多。県別の事情とリスクを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "region",
    tags: ["東北", "秋田", "岩手", "青森", "ツキノワグマ"],
    heroImage: "/articles/tohoku-bears.jpg",
    heroCredit: "Photo by ERIC MIYAGI on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/kAKKruhxerk",
  },

  // --- 2026-05-09 第3次追加分 ----------------------------------------

  {
    slug: "bluff-charge",
    title: "クマの威嚇突進 (ブラフチャージ) と本気の突進の見分け方",
    description:
      "クマが突進してきても、その多くは威嚇 (ブラフチャージ) で途中で停止します。耳の向き・後肢の構え・口の動きで本気の攻撃と区別する方法、威嚇突進された瞬間にやってよい行動を整理します。",
    lead: "クマの突進の多くは威嚇 (ブラフチャージ)。耳・口・後肢の動きで本気との見分けがつきます。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "encounter",
    tags: ["ブラフチャージ", "威嚇", "対処", "突進"],
    heroImage: "/articles/bluff-charge.jpg",
    heroCredit: "Photo by anvesh baru on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/2ZXrBR4ByAQ",
  },
  {
    slug: "urban-encounter",
    title: "市街地・住宅地でクマに出会ったら — 通報・避難・追い払いの順序",
    description:
      "近年急増する市街地・住宅街でのクマ目撃。子供を守る、屋内に避難する、110 番通報する、追い払いを試みない — 都市環境ならではの対処を整理します。商店街・駐車場・公園での実例も。",
    lead: "市街地でクマを見たら、屋内に避難 → 110番 → 追い払わない、が基本。山中とは対処順序が違います。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "encounter",
    tags: ["市街地", "住宅地", "通報", "対処"],
    heroImage: "/articles/urban-encounter.jpg",
    heroCredit: "Photo by Kae Ng on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/grOTReWUHhU",
  },
  {
    slug: "night-encounter",
    title: "夜・薄暮にクマと出会ったら — ヘッドライト・音・後退の使い方",
    description:
      "薄明薄暮 (夕方〜夜明け) はクマの活動ピーク。視界が効かない夜間にクマと出会ったときの対処、ヘッドライトの当て方、音を出すタイミング、後退の方向 — 夜間特有のリスクと行動を解説。",
    lead: "薄明薄暮はクマの活動ピーク。夜間遭遇では光・音・後退の順序が日中と少し違います。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "encounter",
    tags: ["夜間", "薄明薄暮", "ヘッドライト", "対処"],
    heroImage: "/articles/night-encounter.jpg",
    heroCredit: "Photo by Rosie Sun on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/1L71sPT5XKc",
  },
  {
    slug: "bear-canister",
    title: "フードコンテナ・フードハングの使い方 — キャンプの食料防衛",
    description:
      "クマを引き寄せる最大の要因は食料の匂い。バックカントリーでの食料保管はベアキャニスター (フードコンテナ) かフードハングが基本。容器選び・吊るし方・PCT 方式の手順を実用的に解説。",
    lead: "食料の匂い管理がクマ対策の 7 割。フードコンテナとフードハングの正しい使い方を覚えましょう。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "gear",
    tags: ["フードコンテナ", "フードハング", "キャンプ", "匂い管理"],
    heroImage: "/articles/bear-canister.jpg",
    heroCredit: "Photo by Myles Tan on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/IWCljYv1TJw",
  },
  {
    slug: "bear-app",
    title: "クマ出没情報アプリ・通知サービスの選び方 — 自治体・民間サービス比較",
    description:
      "市町村の防災メール、県の出没マップ、民間アプリ (くまウォッチ等)、SNS 速報 — クマ情報源を比較。リアルタイム性・カバー範囲・通知設定で何を組み合わせるべきかを整理します。",
    lead: "クマ情報源は自治体・県・民間アプリ・SNS の組み合わせがベスト。それぞれの強みと使い分けを解説。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "gear",
    tags: ["アプリ", "情報源", "防災メール", "通知"],
    heroImage: "/articles/bear-app.jpg",
    heroCredit: "Photo by Dmitrii Vaccinium on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/pyM7TYWutJM",
  },
  {
    slug: "night-gear",
    title: "ヘッドライト・夜間装備のクマ対策 — 早朝・夕方の山行で持つもの",
    description:
      "薄明薄暮の山行はクマ遭遇率が日中の数倍。ヘッドライトの明るさ・色温度・連続点灯時間、サブライト、反射材、ベルト式スプレーの位置 — 夜間装備の構成を実用的に解説。",
    lead: "早朝・夕方は遭遇率が日中の数倍。ヘッドライト・サブライト・反射材・スプレーの位置を最適化しましょう。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "gear",
    tags: ["ヘッドライト", "夜間装備", "薄明薄暮", "登山"],
    heroImage: "/articles/night-gear.jpg",
    heroCredit: "Photo by Josh Hild on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/8f_VQ3EFbTg",
  },
  {
    slug: "bear-hibernation",
    title: "クマの冬眠の科学 — いつ・どこで・なぜ眠るのか",
    description:
      "クマは 11 月下旬から 4 月中旬まで冬眠します。心拍数の低下・体温維持・代謝の不思議、冬眠場所の選び方、暖冬と「穴持たず」 (冬眠しない個体) の関係を、最新の生態研究をもとに解説。",
    lead: "クマの冬眠は深い眠りではなく軽い覚醒状態。場所選び・代謝・穴持たずの謎までを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "winter",
    category: "ecology",
    tags: ["冬眠", "穴持たず", "生態", "代謝"],
    heroImage: "/articles/bear-hibernation.jpg",
    heroCredit: "Photo by Jonathan Rautenbach on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/Q7u49RTMvVo",
  },
  {
    slug: "bear-myths",
    title: "クマよけ俗信の真偽 — 唐辛子・人間の髪・牛糞・線香は効くか",
    description:
      "クマよけとして昔から伝わる「唐辛子・髪の毛・牛糞・線香」「うんこの匂いを残す」など俗信を、研究結果と現場知見から検証。効くもの・効かないもの・条件付きで効くもの、を整理します。",
    lead: "唐辛子・髪の毛・牛糞・線香 — クマよけ俗信を研究と現場知見でファクトチェックします。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "ecology",
    tags: ["俗信", "唐辛子", "ファクトチェック", "民間療法"],
    heroImage: "/articles/bear-myths.jpg",
    heroCredit: "Photo by Shino Nakamura on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/pVc3RT8OyBE",
  },
  {
    slug: "trail-running",
    title: "トレイルランのクマ対策 — 高速移動と低音量がリスクを上げる",
    description:
      "トレラン中の遭遇事故が増えています。早朝の山道を時速 10km で走る = 鈴の音より速く、クマが避ける時間を奪う構造。トレラン特有のリスクと、装備・ルート計画・複数人走の組み立てを解説。",
    lead: "トレランは「速さ」が遭遇リスクを上げる活動。鈴・声・スプレーの携行と早朝避けが鍵。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "scene",
    tags: ["トレラン", "登山", "ランニング", "早朝"],
    heroImage: "/articles/trail-running.jpg",
    heroCredit: "Photo by Venti Views on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/jhfDFVBCoKs",
  },
  {
    slug: "forest-work",
    title: "山仕事・林業・農作業のクマ対策 — 業務でクマと隣り合う人へ",
    description:
      "林業従事者・農家・狩猟者は職務上クマと隣接します。チェーンソー音・伐採地・果樹園作業など業務シーン別のリスクと、現場で使えるスプレー・無線連絡・複数人作業のルールを実用的に整理。",
    lead: "業務でクマと隣り合う林業・農家・狩猟者へ。職場でのリスク管理と装備の組み立てを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "scene",
    tags: ["林業", "農作業", "狩猟", "業務"],
    heroImage: "/articles/forest-work.jpg",
    heroCredit: "Photo by shun idota on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/3azF1amFdB8",
  },
  {
    slug: "chubu-bears",
    title: "中部山岳・北アルプスのクマ事情 — 長野・岐阜・富山・新潟",
    description:
      "北アルプス・南アルプス・八ヶ岳など中部山岳の登山域はツキノワグマの良好な生息地。長野・岐阜・富山・新潟の県別出没状況、登山道・山小屋でのリスクを解説。",
    lead: "北アルプス・南アルプス・八ヶ岳の登山者へ。中部山岳のクマ出没傾向と地域別リスクを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "region",
    tags: ["中部", "北アルプス", "長野", "岐阜", "登山"],
    heroImage: "/articles/chubu-bears.jpg",
    heroCredit: "Photo by Mike Towers on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/-n9RMASREtI",
  },
  {
    slug: "kanto-bears",
    title: "関東甲信越のクマ事情 — 群馬・栃木・埼玉・東京・神奈川・山梨",
    description:
      "関東は奥多摩・丹沢・秩父・尾瀬・日光と山岳域が広く、ツキノワグマも生息。高尾山・奥多摩・丹沢など首都圏ハイカーが訪れる山域での目撃と対策をまとめます。",
    lead: "高尾山・奥多摩・丹沢・秩父にもクマはいます。首都圏ハイカー向けに地域事情と対策を整理。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "region",
    tags: ["関東", "高尾山", "奥多摩", "丹沢", "登山"],
    heroImage: "/articles/kanto-bears.jpg",
    heroCredit: "Photo by Griffin Quinn on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/s1A2ToEyaTY",
  },
  {
    slug: "western-bears",
    title: "西日本のツキノワグマ — 絶滅危惧個体群と保護の現状",
    description:
      "近畿・中国・四国・九州のツキノワグマは絶滅危惧 II 類に指定される地域個体群が多く、保護優先度が高い。紀伊半島・東中国・四国の現状と、絶滅した九州での復活可能性を整理します。",
    lead: "西日本のツキノワグマは保護優先度が高い地域個体群。紀伊・中国・四国の現状を整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "region",
    tags: ["西日本", "絶滅危惧", "近畿", "四国", "保護"],
    heroImage: "/articles/western-bears.jpg",
    heroCredit: "Photo by Tuan P. on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/QXnEEj5RAKg",
  },
  {
    slug: "culling-debate",
    title: "クマ駆除をめぐる議論 — 倫理・運用・現場の声",
    description:
      "クマ駆除は人身被害の抑止と命の倫理が衝突する論点。自治体・猟友会・動物保護団体・住民それぞれの立場、放獣 vs 殺処分の判断基準、近年の SNS 上の論争を整理します。",
    lead: "「殺処分すべきか・逃がすべきか」— クマ駆除をめぐる多角的な論点を整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "background",
    tags: ["駆除", "倫理", "猟友会", "放獣"],
    heroImage: "/articles/culling-debate.jpg",
    heroCredit: "Photo by Matthew Maaskant on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/2JlypxCYVJI",
  },
  {
    slug: "world-bears",
    title: "世界のクマ事故事例 — 北米グリズリー・欧州ヒグマとの比較",
    description:
      "北米のグリズリー・ブラックベア、欧州・ロシアのヒグマ — 海外のクマ事故から学べる教訓は多くあります。アラスカ・イエローストーン・ルーマニアの実例から、日本でも応用できる知見を整理。",
    lead: "海外のクマ事故事例には日本にも応用できる教訓がある。北米・欧州との比較で見えてくることを整理。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    season: "all",
    category: "background",
    tags: ["世界", "グリズリー", "アラスカ", "比較"],
    heroImage: "/articles/world-bears.jpg",
    heroCredit: "Photo by Paxson Woelber on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/8IuAYIIzFMI",
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getCategory(id: CategoryId): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getArticlesByCategory(id: CategoryId): ArticleMeta[] {
  return ARTICLES.filter((a) => a.category === id).sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  );
}

/** タグの URL slug 化。日本語タグはそのまま encodeURIComponent で扱える前提だが、
 *  URL の安定性 (タグ表記ゆれを吸収) のため、タグ表記を一意化する目的で正規化する。 */
export function tagToSlug(tag: string): string {
  return tag.trim();
}

/** 全タグ (重複除去) を出現頻度順に返す。/articles/tag の一覧で使う想定。 */
export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const a of ARTICLES) {
    for (const t of a.tags) {
      const slug = tagToSlug(t);
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "ja"));
}

export function getArticlesByTag(tag: string): ArticleMeta[] {
  const slug = tagToSlug(tag);
  return ARTICLES.filter((a) => a.tags.some((t) => tagToSlug(t) === slug)).sort(
    (a, b) => b.updatedAt.localeCompare(a.updatedAt),
  );
}

export function getRelatedArticles(slug: string, limit = 3): ArticleMeta[] {
  const current = getArticle(slug);
  if (!current) return ARTICLES.slice(0, limit);
  const others = ARTICLES.filter((a) => a.slug !== slug);
  others.sort((a, b) => {
    const aSameCategory = a.category === current.category ? 1 : 0;
    const bSameCategory = b.category === current.category ? 1 : 0;
    if (aSameCategory !== bSameCategory) return bSameCategory - aSameCategory;
    const aShared = a.tags.filter((t) => current.tags.includes(t)).length;
    const bShared = b.tags.filter((t) => current.tags.includes(t)).length;
    if (aShared !== bShared) return bShared - aShared;
    return b.updatedAt.localeCompare(a.updatedAt);
  });
  return others.slice(0, limit);
}
