// 記事の中央レジストリ。各 page.tsx がそれぞれ実際の本文を持つが、
// sitemap / 一覧ページ / クロスリンクは ここから引く。

export type CategoryId =
  | "encounter"
  | "gear"
  | "season"
  | "ecology"
  | "scene"
  | "region"
  | "background"
  | "science";

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
  {
    id: "science",
    slug: "science",
    name: "研究ダイジェスト",
    lead: "世界中のクマ研究を、獣医師と編集部がわかりやすく読み解く。論文・新技術・最新知見のダイジェスト。",
    description:
      "国際学術誌に掲載されたクマ・人クマ軋轢の最新研究を、論文単位で要点・方法・結果・限界とともに紹介。AI 個体識別・GPS テレメトリー・気候変動と冬眠・スプレー効果検証など、世界の研究の最前線を一般読者にもわかりやすく解説します。",
    order: 8,
    emoji: "🔬",
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

const ALL_ARTICLES: ArticleMeta[] = [
  {
    slug: "bear-territory",
    title: "クマの縄張りと行動圏 — マーキング・痕跡・移動距離の生態学",
    description:
      "クマは厳密な「縄張り」より重なり合う「行動圏」を持ち、オスはメスより広い傾向がある。木への背こすり（ラビングツリー）などで匂いを残す行動や、樹皮はぎ・糞などの痕跡の見分け方を獣医行動学の視点で解説。",
    lead: "「クマには縄張りがある」は半分正解。行動圏は重なり合い、木への背こすりなどで匂いの情報を残す。痕跡の読み方と回避方法。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["縄張り", "行動圏", "マーキング", "ベアスクラブ", "行動学"],
    heroImage: "/articles/bear-territory.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-communication",
    title: "クマ同士のコミュニケーション — 鳴き声・匂い・姿勢が伝えるもの",
    description:
      "クマは無口な動物に見えるが、実は鳴き声・匂い・姿勢・接触の 4 つのチャネルで複雑なコミュニケーションを行う。母子の鳴き交わし、雄同士の威嚇、発情期の求愛、痕跡を介した非同期コミュニケーションまで、獣医行動学の視点で整理。遭遇時の威嚇行動の見分け方も。",
    lead: "「ガオー」だけじゃない。子グマと母グマの鳴き交わし、フェロモン、立ち上がる姿勢の意味 — クマの 4 チャネルコミュニケーションを解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["コミュニケーション", "鳴き声", "フェロモン", "姿勢", "行動学"],
    heroImage: "/articles/bear-communication.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-learning",
    title: "クマの学習と記憶 — なぜ「人慣れクマ」が増えるのか",
    description:
      "クマは食べ物の場所などを覚える学習能力を持つ。市街地でゴミや果樹の味を覚えたクマが繰り返し来るのは「人慣れ」「餌付け」と呼ばれる学習による。アーバンベア化を防ぐための考え方を整理。",
    lead: "一度ゴミ・果樹の味を覚えた個体が「常連客」になる仕組みと、対策の考え方を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["学習", "記憶", "人慣れ", "アーバンベア", "行動学"],
    heroImage: "/articles/bear-learning.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-phylogeny",
    title: "クマ科の系統と進化 — 8 種の関係と分岐の歴史",
    description:
      "現生のクマ科 (Ursidae) は 8 種。ジャイアントパンダ・メガネグマ・マレーグマ・ナマケグマ・ツキノワグマ・ヒグマ・ホッキョクグマ・アメリカクロクマ。パンダは約 2,000 万年前に最初に分岐し、残る 6 種は約 500 万年前前後に短期間で多様化。系統樹・分布・形態の比較を進化生物学の視点で整理。",
    lead: "クマ科は世界で 8 種。ジャイアントパンダもクマの仲間。ホッキョクグマは数十万年前にヒグマから分かれた最も若いクマ — 系統樹で見るクマの進化史。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["系統樹", "進化", "クマ科", "ジャイアントパンダ", "ホッキョクグマ"],
    heroImage: "/articles/bear-phylogeny.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-japan-evolution",
    title:
      "日本のクマの進化史 — 氷河期から現代まで",
    description:
      "ツキノワグマとヒグマは氷河期に別々の経路で大陸から日本列島に渡来したと考えられています。かつては本州にもヒグマがいたこと、九州の絶滅、四国の小さな個体群、地域個体群の遺伝的な違いを、遺伝学・古生物学の知見から整理。",
    lead: "なぜツキノワグマは本州、ヒグマは北海道だけなのか。氷河期の海面低下と渡来ルートで決まった日本のクマ分布の進化史。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["進化史", "氷河期", "渡来", "地域個体群", "日本"],
    heroImage: "/articles/bear-japan-evolution.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-aging",
    title:
      "クマの寿命と老化 — 野生で何歳まで生きるのか",
    description:
      "環境省は捕獲個体の記録から野生下の寿命をツキノワグマ 15〜20 歳、ヒグマ 20 歳程度と見ている。年齢は歯のセメント質の層で調べる。北米には 39 歳半の野生クロクマの記録も。人里への出没は高齢個体に限らず、若いオスの分散や木の実の不作が大きな要因。",
    lead: "野生のクマの寿命はツキノワグマ 15〜20 歳、ヒグマ 20 歳程度（環境省）。年齢の調べ方と「高齢のクマが人里に出る」説を確かめる。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["寿命", "老化", "老齢医学", "比較医学", "飼育"],
    heroImage: "/articles/bear-aging.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-anesthesia",
    title:
      "クマの麻酔捕獲 — 薬剤・手続き・現場の注意点",
    description:
      "市街地や錯誤捕獲でのクマの麻酔捕獲を、環境省の参考資料（2026 年 7 月）をもとに整理。主な 4 薬剤（ケタミン・チレタミン/ゾラゼパム・メデトミジン・キシラジン）の購入・所持の手続き、麻酔銃と吹き矢の使い分け、効くまで最短 10〜15 分などの注意点を自治体担当者向けに解説。",
    lead: "クマの麻酔捕獲は薬剤ごとに手続きが違い、効くまで最短でも 10〜15 分。環境省資料をもとに自治体担当者向けに整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["麻酔", "捕獲", "獣医処置", "麻酔薬", "保護"],
    heroImage: "/articles/bear-anesthesia.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-reproduction",
    title: "クマの繁殖と出産の不思議 — 着床遅延・冬眠中出産の生物学",
    description:
      "クマは初夏に交尾しても受精卵がすぐには着床せず、11 月ごろに着床する「着床遅延」をもつ。母グマは冬眠中の 1〜2 月に出産する。秋の栄養状態が妊娠に影響すると考えられている。環境省資料をもとに、繁殖サイクル・子グマの成長・母子関係を解説。",
    lead: "交尾は初夏、出産は真冬の巣穴の中。受精卵が秋まで着床を待つ「着床遅延」と、とても小さく生まれる子グマの育ち方を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["繁殖", "妊娠", "着床遅延", "新生児", "獣医学"],
    heroImage: "/articles/bear-reproduction.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-zoonosis",
    title: "クマと人獣共通感染症 — 噛まれた後に注意すべき病気",
    description:
      "クマに襲われたら、まず止血と救急要請。そのうえで見落とされやすいのが、噛み傷・引っかき傷の細菌感染と破傷風。国内の旋毛虫症の集団発生がいずれもクマ肉が原因であること、狂犬病の国内外の違い、狩猟者・解体者の注意点まで整理。",
    lead: "襲われたらまず止血と受診。噛み傷の細菌感染・破傷風と、クマ肉の旋毛虫（トリヒナ）など人獣共通感染症の注意点を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["感染症", "ズーノーシス", "パスツレラ", "破傷風", "獣医学"],
    heroImage: "/articles/bear-zoonosis.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-bite-force",
    title:
      "クマの噛む力と歯の構造 — 体格の割に強くない理由",
    description:
      "頭骨からの推定では、ヒグマが犬歯で噛む力は約 751N、ライオンは約 1,768N（Wroe ら 2005）。体格の割にクマの噛む力は低めで、平たい奥歯は植物も多く食べる雑食向き。それでも人を大けがさせるには十分。歯と顎の構造と遭遇時の身の守り方を解説。",
    lead: "ヒグマの犬歯の噛む力は推定約 751N でライオンの半分弱。体格の割に強くないクマの歯と顎のつくりを解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["咬合力", "歯", "顎", "解剖学", "獣医学"],
    heroImage: "/articles/bear-bite-force.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-vision",
    title:
      "クマの視力 — わかっていること・いないこと",
    description:
      "クマの視力を数値で測った研究はほとんどなく、米国立公園局の資料でも評価が分かれる。行動実験ではクロクマが色を見分けられることが示され、夜にライトで目が光るのは反射層（タペタム）のためと考えられている。遭遇時は「見られている」前提でゆっくり離れる。",
    lead: "クマの視力は測った研究がほとんどない。色は見分けられ、夜は目が光る。確かなことと遭遇時の行動を整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["視力", "色覚", "タペタム", "夜行性", "獣医学"],
    heroImage: "/articles/bear-vision.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-kidney-nitrogen-recycling",
    title: "クマの腎機能と窒素リサイクル — 冬眠中に尿毒症にならない生理学",
    description:
      "冬眠中のクマは何か月も排尿しないのに尿毒症にならない。野生ヒグマの調査では冬眠中に尿素が約半分に下がり、窒素を再利用していると考えられている。腎臓のろ過は約 7 割低下し、膀胱でも再吸収する。慢性腎臓病研究とのつながりまで、確かめられた研究をもとに解説。",
    lead: "冬眠中のクマは数か月排尿しないのに尿毒症にならない。尿素の窒素を再利用する仕組みと、腎臓病研究とのつながりを解説。",
    publishedAt: "2026-06-02",
    updatedAt: "2026-10-30",
    season: "winter",
    category: "ecology",
    tags: ["腎臓", "尿素", "冬眠", "代謝", "獣医学"],
    heroImage: "/articles/bear-kidney-nitrogen-recycling.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-brain-cognition",
    title:
      "クマの脳と認知能力 — 数の見分け・道具使用の研究",
    description:
      "クマは食肉目のなかで体の割に脳が大きい。Vonk らはアメリカクロクマが点の数の多少を見分けられることを示し、野生ヒグマの道具使用も報告されている。研究の現状と、人の食べ物を覚えたクマへの対策を解説。",
    lead: "アメリカクロクマは数の多少を見分け、ヒグマは石を道具のように使う。研究で分かってきたクマの認知能力と、人とクマのあつれきへの影響を解説。",
    publishedAt: "2026-06-02",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["脳", "認知", "学習", "記憶", "獣医学"],
    heroImage: "/articles/bear-brain-cognition.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-fat-metabolism",
    title:
      "クマの脂肪蓄積メカニズム — 冬眠に備えて食べ続ける生理学",
    description:
      "秋のクマは冬眠に備えて食べる量を大きく増やす（ハイパーフェイジア）。北米のクロクマでは1日1.5万〜2万kcalとされる。食欲やインスリンの効き方が季節で切り替わる仕組みと、冬眠中の脂肪の使い方を獣医生理学の視点で解説。",
    lead: "秋のクマが食べ続けるのは冬眠に備えるため。季節で変わるレプチン・インスリンの働きと、冬眠中の脂肪の使い方を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "ecology",
    tags: ["脂肪", "代謝", "ハイパーフェイジア", "レプチン", "獣医学"],
    heroImage: "/articles/bear-fat-metabolism.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-gallbladder",
    title: "クマの胆嚢と「熊胆 (ゆうたん)」— 伝統医学と保全のあいだ",
    description:
      "クマの胆嚢から抽出される「熊胆 (ゆうたん・くまのい)」は古来より漢方薬として重宝され、ウルソデオキシコール酸 (UDCA) を高濃度に含む。現代医療では合成 UDCA が利用可能なため代替が進むが、密猟・違法取引は今も問題。獣医薬理学・保全生物学の視点で整理。",
    lead: "クマの胆嚢から取れる「熊胆」は古来からの漢方。有効成分 UDCA は現代医療では合成可能で、熊胆を求める密猟が保全上の問題になっている。獣医薬理学と保全の視点で整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "ecology",
    tags: ["胆嚢", "熊胆", "UDCA", "漢方", "保全", "獣医学"],
    heroImage: "/articles/bear-gallbladder.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-detection-ai",
    title: "クマ検知 AI とは — 獣医工学ラボが開発する技術と社会実装",
    description:
      "クマ検知 AI は監視カメラ・ドローン映像からクマを自動識別する技術。獣医工学ラボ (リサーチコーディネート株式会社) が 2021 年より開発するクマ対策 AI の仕組み、現場導入の事例、自治体・観光地・農家での活用シーンを解説。",
    lead: "監視カメラ・ドローン映像からクマを自動識別する AI 技術。獣医工学ラボが 2021 年より開発を続けるクマ対策 AI の現在地を、技術・倫理・社会実装の 3 軸で解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["AI", "獣医工学ラボ", "技術", "検知", "ドローン"],
    heroImage: "/articles/bear-detection-ai.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-insurance",
    title: "クマ被害は保険でカバーされる？ — 損害保険・医療保険の対応範囲",
    description:
      "クマに襲われた場合の治療費は健康保険のほか、傷害保険・医療保険の給付対象になり得る。山岳保険があれば捜索・救助費用にも備えられる。農作物は農業共済・収入保険、自動車は車両保険の型、家屋は火災保険の補償範囲によって扱いが分かれる。保険の種類・補償範囲・請求手順を解説。",
    lead: "クマに襲われた医療費・救助費用は保険で備えられる。農作物・家屋・自動車の被害は契約の種類によって対象外のことも。各保険の補償範囲を整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["保険", "損害保険", "山岳保険", "賠償", "農作物"],
    heroImage: "/articles/bear-insurance.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "spray-travel",
    title: "クマよけスプレーは飛行機・新幹線に持ち込める？ — 移動手段別ルール",
    description:
      "クマよけスプレーは飛行機への持ち込み・預け入れともに原則禁止 (危険物扱い)。新幹線・JR 在来線は 2025 年 4 月に危険品の規則が改正されたため、条件を各社に事前確認する必要がある。バス・タクシー・レンタカーも事業者ごとに対応が異なる。各移動手段のルールと、現地調達・郵送の代替手段を整理。",
    lead: "飛行機は航空法で持ち込み・預け入れ NG。新幹線・JR は規則改正後の条件を事前に確認。各交通機関のルールと、現地調達・宅配の代替手段を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "gear",
    tags: ["クマよけスプレー", "飛行機", "新幹線", "持ち込み", "航空法"],
    heroImage: "/articles/spray-travel.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-cycling",
    title: "自転車・サイクリング中のクマ対策 — 速度域別のリスクと装備",
    description:
      "ロードバイク・MTB・グラベル・通勤クロスのサイクリストが知っておくべきクマ対策。高速で接近するため鈴の効果が限定的、急ブレーキで転倒すると至近距離になるなど、徒歩とは異なるリスク特性を整理。低速 (砂利路・登り)・中速 (一般道)・高速 (下り) ごとの対策と装備、遭遇時の正しい行動を解説。",
    lead: "自転車は徒歩より速度が出るため鈴の効果が薄く、急停止で転倒リスクも。速度域別のクマ対策と装備、遭遇時の行動を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "scene",
    tags: ["サイクリング", "自転車", "MTB", "ロードバイク", "速度"],
    heroImage: "/articles/bear-cycling.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-economic-impact",
    title: "クマ被害の経済損失 — 農作物・観光業・自治体財政への影響",
    description:
      "農林水産省の集計では、2025 年度のクマによる農作物被害額は約 9 億円で、前年度から約 4.2 億円増えた。観光業の予約キャンセルや登山道閉鎖、自治体の駆除・電気柵補助などの負担は全国集計がない。農業・観光・自治体財政への影響を、確認できる統計と事例で整理。",
    lead: "クマによる農作物被害は 2025 年度に約 9 億円（農水省）。農業・観光・自治体財政への影響を、確認できる統計で整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["経済損失", "農業被害", "観光業", "自治体", "統計"],
    heroImage: "/articles/bear-economic-impact.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "encounter",
    title: "クマに遭遇したらどうする — 距離別の正しい対処法",
    description:
      "登山中・山菜採り中にクマに出会ったときの対処法を距離別に解説。背中を見せて逃げるのは絶対 NG。距離 50m / 20m / 至近距離それぞれの対応と、襲われたときの最終手段までを実例付きで紹介。",
    lead: "背中を見せて逃げるのは最悪の選択。距離別の正しい対処を知っておくだけで生存率は大きく上がります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
    season: "all",
    category: "encounter",
    tags: ["遭遇", "対処", "安全", "登山"],
    heroImage: "/articles/encounter.jpg",
    heroCredit: "Photo by Len Rempel on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/Mvmuqh06dr4",
  },
  {
    slug: "autumn",
    title:
      "秋のクマ対策 — 秋に出没が増える理由と備え",
    description:
      "9月〜11月は冬眠前の食欲増加（ハイパーフェイジア）でクマが食べ物を探し回る時期。木の実が凶作の年は10月を中心に出没・人身被害が急増し、市街地まで降りてくることも。2023・2025年度の大量出没を踏まえて秋特有のリスクと対策を解説。",
    lead: "9月〜11月は冬眠前の食欲増加でクマの行動が活発化。山菜・きのこ狩りや紅葉登山で気をつけるべきポイントをまとめます。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "season",
    tags: ["秋", "ハイパーフェイジア", "登山", "きのこ狩り"],
    heroImage: "/articles/autumn.jpg",
    heroCredit: "Photo by Weiqi Xiong on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/p0ISygGws9w",
  },
  {
    slug: "research-digest-033",
    title:
      "クマ研究ダイジェスト Vol.33 — 人に慣れた母グマの息子は死にやすい？ 知床ヒグマ 20 年の遺伝子追跡",
    description:
      "知床半島のヒグマ 896 頭を遺伝子で追跡した研究を紹介します。人をまったく避けない母グマが多いルシャ地区では、息子の 71%（推定 31 頭中 22 頭）が 1〜4 歳のうちに人の手で死んでいました。「人慣れ」と「餌付き」の違い、研究で分かっていないこと、私たちにできることを解説します。",
    lead: "人に慣れた母グマから生まれた子はどうなるのか。知床のヒグマを遺伝子で追った研究から、人慣れと子グマの死亡の関係を、分かっていないことも含めて読み解きます。",
    publishedAt: "2026-06-16",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "知床", "ヒグマ", "人慣れ", "餌付け", "Shimozuru 2020"],
    heroImage: "/articles/research-digest-033.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "research-digest-032",
    title:
      "クマ研究ダイジェスト Vol.32 — クマ鈴でグリズリーの行動は変わったか。ハイカー 97 件の遭遇報告（Jope 1985）",
    description:
      "米国の国立公園で、ハイカーがグリズリーと出会った 97 件の報告を鈴の有無で比べた Jope（1985）を、原典の要約に沿って読みます。鈴ありでは止まっていたクマが離れる割合が高く、突進はありませんでした。件数の少なさや、日本のツキノワグマに当てはまるかなどの限界も解説します。",
    lead: "クマ鈴は効くのか。ハイカー 97 件の遭遇報告を鈴の有無で比べた古典 Jope 1985 から、分かったことと限界を読みます。",
    publishedAt: "2026-06-16",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "クマ鈴", "グリズリー", "Jope 1985", "遭遇回避"],
    heroImage: "/articles/research-digest-032.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "research-digest-031",
    title:
      "クマ研究ダイジェスト Vol.31 — ブナの実が不作の年、クマの有害捕獲は増えるのか（Oka ら 2004）",
    description:
      "東北地方の 7 地域で、ブナの実の不作の度合いと有害捕獲されたクマの数を比べた Oka ら（2004）の論文を、抄録に沿って読みます。5 地域で正の相関が見られました。分かったこと、捕獲数と出没の違い、研究の限界、秋の備えに生かす方法をやさしく解説します。",
    lead: "ブナの実が不作の年、クマの有害捕獲は増えるのか。東北 7 地域のうち 5 地域で正の相関を示した Oka ら（2004）を、原典の抄録に沿って読み解きます。",
    publishedAt: "2026-06-16",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ツキノワグマ", "ブナ", "豊凶", "有害捕獲", "東北", "Oka 2004"],
    heroImage: "/articles/research-digest-031.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "research-digest-029",
    title:
      "クマ研究ダイジェスト Vol.29 — オオカミの食べ残しは誰のもの？ イエローストーンの腐肉と冬の補助",
    description:
      "米イエローストーン国立公園でオオカミが倒したエルク 57 頭の死骸を観察した研究（Wilmers ら 2003）を読みます。オオカミがいると、カラスやワシ、コヨーテ、クマなど腐肉を食べる動物にとって、食べ物の出る時期が冬の終わりに偏らず冬じゅうに広がり、年ごとのばらつきも小さくなると推定されました。",
    lead: "オオカミの食べ残しはカラスやワシ、クマの食べ物になります。頂点の捕食者が戻ると、その量と時期はどう変わるのか。イエローストーンの研究を読みます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "オオカミ", "腐肉食", "イエローストーン", "生態系", "Wilmers 2003"],
    heroImage: "/articles/research-digest-029.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-030",
    title:
      "クマ研究ダイジェスト Vol.30 — 人もクマも変わる「共適応」が共存の鍵（Carter & Linnell 2016）",
    description:
      "大型肉食獣を保護区の外、人が使う土地でどう受け入れるか。Carter と Linnell は 2016 年の短い論考で、共存の中心に動物と人の双方が互いに合わせて変わる「共適応」を置きました。共存は衝突ゼロではなく、地域が受け入れられる程度にリスクを保つことだという考え方を紹介し、日本の暮らしへの示唆を考えます。",
    lead: "クマと人が同じ土地で暮らすには、クマの側だけでなく人の側も変わる必要がある。そう論じた短い論考から、「共存」の中身を考えます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "共存", "人とクマの軋轢", "大型肉食獣", "Carter 2016"],
    heroImage: "/articles/research-digest-030.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-027",
    title:
      "クマ研究ダイジェスト Vol.27 — ヒグマを「見る観光」はクマに何をもたらすか。235 か所の観察地と文献の総説",
    description:
      "北米と欧州のヒグマ観察観光の影響を整理した総説（Penteriani ら 2017）を原典どおりに解説します。カナダの一地域では 2012 年の観光客の支出が 1,510 万ドルと狩猟の 12 倍超でした。一方で、クマが場所や時間帯を変える、人に慣れる、餌付けで人の食べ物を覚えるといった影響があり、最低距離を示す観察地はわずか 1% でした。",
    lead: "ベアウォッチングは地域にお金と仕事をもたらす一方、クマの行動を変えることもあります。餌付けをしない、場所ごとにルールを決めるという著者らの提言を読みます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "観光", "ベアウォッチング", "餌付け", "Penteriani 2017"],
    heroImage: "/articles/research-digest-027.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-028",
    title:
      "クマ研究ダイジェスト Vol.28 — 家畜被害は飼い主の収入をどれだけ削るか。ルーマニアの羊キャンプ調査",
    description:
      "ルーマニアのカルパチア山脈で、夏の羊キャンプ 36 か所を 1998・99 年に調べた Mertens & Promberger（2001）を読み解きます。オオカミとクマによる被害は 1 キャンプ平均 465 ドルで、運営者の収入を 74% 減らす大きさでした。公的補償はほとんど支払われず、番犬を増やす費用のほうが被害額より少ないという試算も示されています。",
    lead: "被害の割合は 2% 前後でも、利益の薄い小さな経営には重い。ルーマニアの羊キャンプ調査で、家畜被害をお金に直して見ます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "家畜被害", "経済", "ルーマニア", "番犬", "Mertens 2001"],
    heroImage: "/articles/research-digest-028.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-025",
    title:
      "クマ研究ダイジェスト Vol.25 — クマの子どもの「ハミング」。クマ科に共通する独特の声",
    description:
      "クマの子どもが出す、長く続く独特の声「ハミング」。Peters ら（2007）は文献と過去の録音を整理し、ジャイアントパンダを除く現生のクマ全種に共通する声だと報告しました。何を伝える声なのかはまだ確かめられていない点と、野外で出会ったときの基本行動もあわせて紹介します。",
    lead: "クマはどんな声を出すのか。子グマの「ハミング」を整理した 2007 年の論文を、抄録をもとにやさしく紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "クマの声", "ハミング", "子グマ", "遭遇時の対処", "Peters 2007"],
    heroImage: "/articles/research-digest-025.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-026",
    title:
      "クマ研究ダイジェスト Vol.26 — ホッキョクグマは想定の 1.6 倍エネルギーを使っていた。海氷上の 9 頭を測った研究",
    description:
      "春の海氷上で雌のホッキョクグマ 9 頭を 8〜11 日間調べた Science 誌の研究（2018）を読み解きます。1 日のエネルギー消費は想定の約 1.6 倍で、半数を超える個体が体重を減らしていました。海氷の減少がなぜ重荷になるのかを、限界とあわせて紹介します。",
    lead: "ホッキョクグマは 1 日にどれだけのエネルギーを使うのか。首輪カメラと二重標識水法で測ると、想定の約 1.6 倍でした。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ホッキョクグマ", "エネルギー収支", "気候変動", "海氷", "Pagano 2018"],
    heroImage: "/articles/research-digest-026.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-023",
    title:
      "クマ研究ダイジェスト Vol.23 — イエローストーンのグリズリー 20 年の追跡。繁殖と生存の実数",
    description:
      "米国イエローストーン周辺のグリズリーを 1983〜2002 年に首輪発信機で追跡した Schwartz ら（2006）を原典どおり紹介。初産 5.81 歳、1 腹約 2 頭、子の生存は住む場所で差があり、自立したクマの死因の 85.5% は人間でした。個体数を左右するのは大人のメスの生存です。",
    lead: "クマは何歳で子を産み、子はどれだけ生き残るのか。イエローストーンで約 20 年追跡したグリズリーのデータから、繁殖と生存の実際を読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "グリズリー", "繁殖", "個体群動態", "Schwartz 2006"],
    heroImage: "/articles/research-digest-023.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-024",
    title:
      "クマ研究ダイジェスト Vol.24 — 巣穴で冬を越すクマは、人の活動にどれくらい弱いのか",
    description:
      "冬ごもり中のクマは、人の活動にどれくらい影響を受けるのか。Linnell ら（2000）はヒグマ・クロクマ・ホッキョクグマの報告を集めた総説で、巣穴から約 1 km、特に 200 m 以内の活動で巣穴を捨てる例があることを整理しました。限界と、冬山での注意点も解説します。",
    lead: "巣穴から 1 km 以内、特に 200 m 以内の人の活動で、クマが巣穴を捨てることがある。北米・北欧の報告を集めた総説を、冬山での注意とあわせて読みます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "winter",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "冬眠", "巣穴", "ヒグマ", "冬山", "Linnell 2000"],
    heroImage: "/articles/research-digest-024.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-021",
    title:
      "クマ研究ダイジェスト Vol.21 — イタリア・アルプスのヒグマ再導入、10 頭から始まった 10 年後",
    description:
      "1999〜2002 年にスロベニアから 10 頭のヒグマを放したイタリア・トレンティーノの「Life Ursus」事業。2012 年に少なくとも 47 頭へ増えた一方、養蜂・家畜被害が増え、住民の受け止め方は歓迎から反対へ変わりました。Tosi ら 2015 の論文を読み解きます。",
    lead: "イタリア北部で消えかけたヒグマを、隣国から運んで増やした事業。数は増えましたが、地域の受け止め方は変わっていきました。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "再導入", "イタリア", "人との軋轢", "Tosi 2015"],
    heroImage: "/articles/research-digest-021.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-022",
    title:
      "クマ研究ダイジェスト Vol.22 — クマはどれだけ広く歩き回るのか。北欧のヒグマと北アルプスのツキノワグマの行動圏",
    description:
      "電波発信機で追跡した北欧のヒグマでは、雄成獣の年間行動圏は 726〜4,297 km²、雌成獣は 171〜1,002 km² でした。繁殖の時期に行動圏を急に広げた雌の例や、北アルプスのツキノワグマ 7 頭の行動圏（32〜123 km²）と季節移動もあわせて、原典の数字に沿って紹介します。",
    lead: "クマはふだんどれくらいの広さを動いているのか。北欧のヒグマと北アルプスのツキノワグマを追跡した研究を、論文の数字どおりに読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "行動圏", "テレメトリー", "ヒグマ", "ツキノワグマ", "Bjärvall 1990"],
    heroImage: "/articles/research-digest-022.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-019",
    title:
      "クマ研究ダイジェスト Vol.19 — サケの滝に集まるヒグマは、どう場所を分け合うのか",
    description:
      "アラスカ・マクニール川の滝で 1970 年夏に 52 頭のヒグマを観察した Stonorov & Stokes（1972）を原典に沿って紹介します。大きな雄を頂点とする大まかな順位、体の向きで伝えるしぐさ、季節とともに争いが穏やかになる様子、時間をずらした漁場の分け合いを解説します。",
    lead: "ふだん単独で暮らすヒグマも、サケの滝には何十頭も集まります。1970 年のアラスカでの観察から、クマどうしが場所と時間を分け合うしくみを読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "社会行動", "順位", "サケ", "Stonorov 1972"],
    heroImage: "/articles/research-digest-019.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-020",
    title:
      "クマ研究ダイジェスト Vol.20 — 追い払ったクマは戻ってくるのか。タホ湖のクロクマ 62 頭の実験",
    description:
      "米ネバダ州タホ湖周辺で、街に出たクロクマ 62 頭を「何もしない」「ゴム弾やスプレーで追い払う」「追い払い＋猟犬」に分けて比較。57 頭が街に戻り、半数以上は 30 日以内に戻りました。戻るまでの日数に群の差はなく、追い払いだけでは長く続く解決になりにくいことを示した 2004 年の研究を読みます。",
    lead: "街に出たクマを痛い・怖い目にあわせて放せば戻ってこないのか。3 群に分けて確かめた研究から、追い払いの限界と誘引物対策の大切さを読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "追い払い", "嫌悪条件付け", "アメリカクロクマ", "誘引物管理", "Beckmann 2004"],
    heroImage: "/articles/research-digest-020.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-017",
    title:
      "クマ研究ダイジェスト Vol.17 — クマの「噛む力」は体格の割に強くない。食肉目 151 種の比較",
    description:
      "クマの噛む力はライオンより強い？ Christiansen & Wroe（2007）は食肉目 151 種の咬合力を頭骨から推定し、体格をそろえて比較しました。強いのは硬い植物を食べる種と大型獲物を狩る種。Wroe ら（2005）の推定ではヒグマ約 751 N、ライオン約 1,768 N で、クマは体格比でも低めでした。",
    lead: "ヒグマが犬歯で噛む力はライオンの半分弱。頭骨から推定した食肉目の咬合力比較で、クマの意外な姿と数字の限界を解説します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "咬合力", "生態", "ヒグマ", "ツキノワグマ", "Christiansen 2007"],
    heroImage: "/articles/research-digest-017.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-018",
    title:
      "クマ研究ダイジェスト Vol.18 — サケが多い川ほど、川岸の植物の種類は減っていた",
    description:
      "カナダ・ブリティッシュコロンビア州沿岸の 50 流域を比べた Science 誌の研究（Hocking & Reynolds 2011）を読み解きます。サケの栄養が届く川岸では、サーモンベリーなど栄養を好む一部の植物が優勢になり、植物の多様性はかえって下がっていました。地形による違いや、クマとの関わり、研究の限界も解説します。",
    lead: "サケが運ぶ海の栄養は、川岸の森を「豊か」にするだけではありませんでした。50 流域の比較で見えた、植物の顔ぶれの変化を紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "サケ", "生態系", "植物多様性", "栄養循環", "Hocking 2011"],
    heroImage: "/articles/research-digest-018.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-015",
    title:
      "クマ研究ダイジェスト Vol.15 — ホッキョクグマはいつヒグマから分かれたのか。89 頭のゲノムが示した種分化と適応",
    description:
      "グリーンランドのホッキョクグマ 79 頭とヒグマ 10 頭のゲノムを比べた Liu ら（2014, Cell）の研究を紹介します。2 種の分岐は約 48 万〜34 万年前と推定され、ホッキョクグマでは心臓・血管や脂肪の代謝に関わる APOB などの遺伝子に強い選択の形跡が見られました。",
    lead: "白いホッキョクグマと森のヒグマは、いつ分かれ、どう北極に適応したのか。2014 年の大規模ゲノム研究を原典に沿って読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ホッキョクグマ", "ヒグマ", "ゲノム", "進化", "Liu 2014"],
    heroImage: "/articles/research-digest-015.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-016",
    title:
      "クマ研究ダイジェスト Vol.16 — 冬眠するヒグマの腸内細菌は季節で入れ替わる（Sommer ら 2016）",
    description:
      "スウェーデンの研究チームが野生のヒグマの腸内細菌を活動期と冬眠中で比べました（Sommer ら 2016, Cell Reports）。冬眠中は多様性が下がり、バクテロイデス門が増えていました。夏の細菌を無菌マウスに移すと脂肪は増えましたが、血糖の処理は悪くなりませんでした。分かったことと限界を紹介します。",
    lead: "ヒグマの腸内細菌は冬眠中と夏で顔ぶれが違いました。夏の細菌を移したマウスは脂肪が増えても血糖の処理は保たれていました。Sommer 2016 を紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "winter",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "腸内細菌", "冬眠", "代謝", "ヒグマ", "Sommer 2016"],
    heroImage: "/articles/research-digest-016.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-013",
    title:
      "クマ研究ダイジェスト Vol.13 — ヒグマはどの木ににおいの印を残すのか。獣道の上の「少なめの樹種」と「太い木」",
    description:
      "カナダ西海岸のヒグマが体をこすりつけ、かじって印を残す木 50 本を、周りの木と比べた Clapham ら（2013, Animal Behaviour）を読み解きます。木はすべて獣道の上にあり、その場所では少なめの樹種や平均より太い木が選ばれていました。限界と、山で痕跡を見たときの心がけも紹介します。",
    lead: "クマが背中をこすりつける木は、どこにでもある木ではありません。獣道の上の、目立つ木が選ばれていました。ヒグマのマーキング用の木の研究を原典に沿って紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "マーキング", "痕跡", "Clapham 2013"],
    heroImage: "/articles/research-digest-013.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-014",
    title:
      "クマ研究ダイジェスト Vol.14 — 世界のヒグマ人身被害 664 件を分析。最も多いのは子連れの母グマとの遭遇",
    description:
      "2000〜2015 年に北米・ヨーロッパ・ロシアなどで起きたヒグマによる人身被害 664 件を分析した Bombieri ら（2019, Scientific Reports）を紹介。子連れの母グマとの遭遇が最多の 47%、活動はレジャーが半数、被害は年々増え、クマが多く人が少ない地域で起きやすいことが分かりました。",
    lead: "人がヒグマに襲われる事故は、どんな場面で起きているのか。世界 664 件の記録を見比べた国際共同研究を、原典に沿って紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "人身被害", "母グマ", "Bombieri 2019"],
    heroImage: "/articles/research-digest-014.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-011",
    title:
      "クマ研究ダイジェスト Vol.11 — クマの「繁殖の季節」はどう生まれたか。氷期が形づくった交尾期と出産期",
    description:
      "クマ科 8 種のうち 7 種には、はっきりした交尾期と出産期があります。Spady ら（2007, Mammal Review）の総説を抄録に沿って紹介します。古い系統の種は鮮新世に、残りの種は更新世の氷期に季節的な繁殖を身につけたという進化の見取り図と、着床遅延の基本をやさしく解説します。",
    lead: "クマの多くは、交尾と出産の季節がはっきり決まっています。その季節性が気候の変化とともにどう進化してきたかを整理した総説を読みます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "繁殖", "着床遅延", "進化", "Spady 2007"],
    heroImage: "/articles/research-digest-011.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-012",
    title:
      "クマ研究ダイジェスト Vol.12 — 北米のクロクマ死亡事故 110 年分の分析。「子連れの母グマ」が一番危険とは限らない",
    description:
      "1900〜2009 年に北米で起きたアメリカクロクマによる死亡事故 59 件・63 人を分析した Herrero ら（2011）を紹介。88% は人を獲物とみた攻撃と判断され、その 92% が雄でした。日本のツキノワグマとは別種である点も含め、分かったことと限界を整理します。",
    lead: "北米のアメリカクロクマによる死亡事故 110 年分を調べた研究から、「母グマが一番危ない」という通説と実際の違いを、原典の数字に沿って読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "アメリカクロクマ", "人身事故", "北米", "Herrero 2011"],
    heroImage: "/articles/research-digest-012.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-009",
    title:
      "クマ研究ダイジェスト Vol.9 — 問題グマを「山奥へ運ぶ」と解決するのか。肉食動物の捕獲移動を見直した論文",
    description:
      "問題を起こしたクマを捕まえて別の場所へ運ぶ「捕獲移動」は効くのか。北米とアフリカ南部の研究を見直した 1997 年の論文では、クマ研究 11 件中 10 件で 45〜100% が元の場所へ戻り、移動後の被害を確かめるデータもほぼ無いことが分かりました。",
    lead: "「殺さずに山奥へ放せばいい」は本当に解決になるのか。クマの多くが元の場所へ戻っていたことを示した、捕獲移動についてのレビュー論文を紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "捕獲移動", "奥山放獣", "誘引物管理", "Linnell 1997"],
    heroImage: "/articles/research-digest-009.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-010",
    title:
      "クマ研究ダイジェスト Vol.10 — クマは数の多い・少ないを見分けられるか。タッチスクリーンで調べた実験",
    description:
      "米アラバマ州の動物園で、アメリカクロクマ 3 頭にタッチスクリーンで点の数を比べる課題を出した 2012 年の研究を紹介します。点が止まっている課題では 3 頭とも偶然より上でしたが、点が動く課題は難しく、すべての条件で偶然より上だったのは 1 頭でした。クマは面積を手がかりにしつつ、数も使えていました。",
    lead: "クマは脳が大きいのに、考える力を調べた研究はほとんどありませんでした。アメリカクロクマ 3 頭が点の数を見分けられるかを確かめた論文を紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "クマの認知", "アメリカクロクマ", "行動学", "Vonk 2012"],
    heroImage: "/articles/research-digest-010.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-007",
    title:
      "クマ研究ダイジェスト Vol.7 — 電気柵でクマは止まるか。長野のスイートコーン畑 24 か所の試験",
    description:
      "1997〜98 年に長野県で、クマ被害のあったスイートコーン畑 24 か所と養蜂場 2 か所を電気柵で囲った試験を読みます。柵を通り抜けたクマは 1 頭もいませんでしたが、近くの柵のない畑では被害が出ていました。分かったことと限界、使うときの注意をまとめます。",
    lead: "電気柵は実際の畑でクマを止められるのか。長野県の畑と養蜂場で行われた現場試験から、効果と限界をやさしく読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "電気柵", "農業被害", "長野県", "養蜂", "Huygens 1999"],
    heroImage: "/articles/research-digest-007.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-008",
    title:
      "クマ研究ダイジェスト Vol.8 — 冬眠中のクマは体温をあまり下げずに代謝を 4 分の 1 に落とす（Tøien ら 2011）",
    description:
      "アラスカで捕獲したアメリカクロクマ 5 頭の冬眠を体内発信機で記録した Science 誌の論文を読みます。代謝は基礎代謝の約 25% まで下がる一方、体温は 30〜36°C に保たれていました。巣穴を出たあとも代謝は最大 3 週間低いままで、代謝の抑制の多くが体温と独立していることが示されました。",
    lead: "冬眠中のクマは体温を数度しか下げないのに、代謝は基礎代謝の 4 分の 1 まで落ちていました。Science 誌の実測研究から、その中身を見ていきます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "winter",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "冬眠", "生理学", "アメリカクロクマ", "Tøien 2011"],
    heroImage: "/articles/research-digest-008.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-005",
    title:
      "クマ研究ダイジェスト Vol.5 — クマは匂いでどう探す？ 嗅覚の遺伝子と、風を読むホッキョクグマ",
    description:
      "哺乳類 13 種の嗅覚受容体遺伝子を比べた研究（アフリカゾウ 1,948 個・ヒト 396 個、クマは対象外）と、ハドソン湾のホッキョクグマが冬の夜に風を横切って動いていた研究を原典に沿って紹介します。「犬の 7 倍」は言い回しであることも整理し、生ごみや果実など匂いの管理につなげます。",
    lead: "クマの「鼻のよさ」は研究でどこまで分かっているのか。嗅覚遺伝子の比較研究と、ホッキョクグマの動きと風向きの研究を読みます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "嗅覚", "ホッキョクグマ", "誘引物管理", "Niimura 2014", "Togunov 2017"],
    heroImage: "/articles/research-digest-005.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-006",
    title:
      "クマ研究ダイジェスト Vol.6 — 自由に選べるとき、ヒグマは何を食べるか。タンパク質 17% と脂質への好み",
    description:
      "消化しやすい餌を自由に選べる飼育下のヒグマは、タンパク質が代謝エネルギーの約 17% になる組み合わせを選び、それは食べたエネルギーあたりの増体が最も大きい水準でした。脂質を炭水化物より好んだ結果とあわせ、Erlenbach ら（2014）を原典に沿って紹介します。",
    lead: "自由に餌を選べるとき、ヒグマはタンパク質を代謝エネルギーの約 17% に保ち、脂質を好みました。飼育下の実験を紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "食性", "栄養", "Erlenbach 2014"],
    heroImage: "/articles/research-digest-006.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-003",
    title:
      "クマ研究ダイジェスト Vol.3 — 模様のないヒグマを顔で見分ける AI、その実力と限界",
    description:
      "北米 2 地域のヒグマ 132 頭・約 4,700 枚の顔写真から個体を見分ける AI「BearID」を開発した Clapham ら（2020）を原典に沿って紹介。既知の個体は 83.9%、新しい個体の照合は約 71%。カメラトラップでの検証はこれからで、日本のクマにそのまま使えるかは未確認です。",
    lead: "クマには一頭ごとの模様がほとんどありません。ヒグマの顔写真から AI で個体を見分けようとした研究の成果と限界を、原典に沿って紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "ヒグマ", "AI", "個体識別", "Clapham 2020"],
    heroImage: "/articles/research-digest-003.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-004",
    title:
      "クマ研究ダイジェスト Vol.4 — クマが冬ごもりに入る日・出る日は何で決まる？ 秋の木の実と春の天気",
    description:
      "カナダのグリズリー 73 頭・11 年分のデータを分析した 2016 年の論文を紹介します。巣穴に入る時期は秋の木の実の量に、出る時期は春の気温や雪に関係していました。スウェーデンの研究との違いや、日本にそのまま当てはまらない点も整理します。",
    lead: "クマが冬ごもりに入る日と出る日は何で決まるのか。カナダのグリズリーの長期データから、秋の木の実と春の天気との関係を調べた論文を読み解きます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "冬眠", "冬ごもり", "ヒグマ", "グリズリー", "Pigeon 2016"],
    heroImage: "/articles/research-digest-004.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-002",
    title:
      "クマ研究ダイジェスト Vol.2 — 街のごみはクマの暮らし方を変えるか。北米クロクマの比較研究",
    description:
      "米国西部で、街の近くに住むアメリカクロクマと森のクマ、さらに同じ地域の 10〜15 年前のデータを比べた研究（Beckmann & Berger 2003）を読みます。街の近くのクマは 1 日の活動時間が短く、活動が夜に寄り、冬ごもりが遅く短くなっていました。",
    lead: "人の食べ物が手に入ると、クマの暮らしはどれくらい速く変わるのか。街と森のクロクマを比べた研究から、活動時間と冬ごもりの変化を読みます。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "アーバンベア", "行動", "冬眠", "誘引物", "アメリカクロクマ", "Beckmann 2003"],
    heroImage: "/articles/research-digest-002.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-001",
    title:
      "クマ研究ダイジェスト Vol.1 — アラスカ 83 件の記録から見るクマスプレーの効果（Smith ほか 2008）",
    description:
      "アラスカで 1985〜2006 年に起きた 83 件のクマスプレー使用例を分析した論文（Smith ほか 2008）を紹介。クマの行動が止まった割合はヒグマ 92%、アメリカクロクマ 90%。使った人の 14% が自分にも影響を受けた点や、事例数・地域の違いといった限界もあわせて解説します。",
    lead: "アラスカの 83 件のスプレー使用例から、クマの行動が止まった割合（ヒグマ 92%・アメリカクロクマ 90%）と、風や使った人自身への影響を、論文の抄録に沿って紹介します。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-10-30",
    season: "all",
    category: "science",
    tags: ["論文", "研究ダイジェスト", "クマスプレー", "Smith 2008", "アラスカ"],
    heroImage: "/articles/research-digest-001.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "vehicle-collision",
    title: "クマと自動車衝突 — 高速道路・国道での遭遇と対策",
    description:
      "高速道路・国道・山道で起きるクマと車の衝突。車にも人にも大きな被害が出るおそれがあり、衝突後の対応を誤ると二次被害につながります。回避運転・衝突後の対応・保険・通報・夜間運転の注意点を整理。",
    lead: "クマと車の衝突は車にも人にも大きな被害が出るおそれ。回避運転・衝突後の対応・保険・夜間運転の注意点を整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "scene",
    tags: ["自動車", "衝突", "事故", "高速道路", "夜間運転"],
    heroImage: "/articles/vehicle-collision.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-monitoring",
    title: "クマ研究のモニタリング技術 — カメラトラップ・GPS 首輪・ヘアトラップ",
    description:
      "野生クマの個体数推定・行動研究には、カメラトラップ・GPS 首輪・ヘアトラップ（毛 DNA 採取）・標識再捕獲法など複数の科学的手法が使われます。各技術の原理・コスト・限界を整理し、くまウォッチのリスクスコアにどう活用されているかも解説。",
    lead: "クマ研究はカメラトラップ・GPS 首輪・ヘア DNA など複数手法の組み合わせ。各技術の原理・コスト・限界を整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["モニタリング", "カメラトラップ", "GPS", "DNA", "個体数推定"],
    heroImage: "/articles/bear-monitoring.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "inbound-tourism",
    title: "訪日観光客向けクマ情報 — 観光地のリスクと多言語対応の現状",
    description:
      "高尾山・上高地・知床・熊野古道など外国人観光客に人気の山岳・国立公園にもクマがいます。インバウンド向けの多言語注意喚起の現状、観光地での誤解・トラブル事例、宿泊施設・ガイドツアーが提供すべき情報を整理。",
    lead: "高尾山・上高地・知床など外国人に人気の観光地にもクマが生息。多言語での注意喚起の現状と、観光業が提供すべき情報を整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "scene",
    tags: ["観光", "インバウンド", "多言語", "観光地", "ガイド"],
    heroImage: "/articles/inbound-tourism.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-compensation",
    title: "クマ被害の補償・賠償ガイド — 自治体補償・国の交付金・損害保険・判例まで",
    description:
      "クマに襲われたり農作物・家屋に被害が出た場合、どの制度で救済されるのか。自治体独自の補償制度、国の鳥獣被害防止総合対策交付金、損害保険の対応、過去の損害賠償判例まで体系的に整理。被害申請の具体的な手順も解説します。",
    lead: "クマ被害の救済は自治体補償・国交付金・損害保険・損害賠償の 4 層。各制度の対応範囲と申請手順を整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["補償", "損害賠償", "保険", "交付金", "被害申請"],
    heroImage: "/articles/bear-compensation.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "hunter-license-guide",
    title: "狩猟免許の取り方完全ガイド — 第一種・第二種・わな・網の違いと取得手順",
    description:
      "全国でハンター不足が深刻になっています。第一種銃猟・第二種銃猟・わな猟・網猟の 4 種類の違い、取得手順、費用、年齢制限、その後の所持許可までを実務目線で整理。クマ対策に関わりたい人向けの実践ガイド。",
    lead: "狩猟免許は 4 種類。費用・期間・年齢制限・銃所持の流れまで、クマ対策に関わりたい人向けに実務目線で整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["狩猟免許", "ハンター", "銃所持", "わな猟", "資格"],
    heroImage: "/articles/hunter-license-guide.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "disaster-bear",
    title: "災害時のクマ対応 — 地震・水害・停電・避難所での備え",
    description:
      "地震・水害・停電などの大規模災害時は、クマへの備えが手薄になりがちです。森林被害・避難生活・物資管理・夜間照明の停止など、災害時に考えられるクマのリスクと、自治体・住民が備えておくべき対応を整理。",
    lead: "地震・水害・停電などの災害時は、クマへの備えが手薄になりがち。避難所運営・物資管理・夜間の備えを整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "scene",
    tags: ["災害", "地震", "水害", "停電", "避難所"],
    heroImage: "/articles/disaster-bear.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-and-dogs",
    title: "クマと犬 — 番犬・猟犬・ベアドッグの実際と限界",
    description:
      "「番犬を飼えばクマよけになる」は本当か？ 一般的な番犬、熊狩り猟犬、北米で実績のあるベアドッグ（カレリアン・ベアドッグ）の役割と限界を比較。家庭飼育で安全に効果を得るための条件と、犬を連れた登山中の遭遇リスクまで実用的に解説します。",
    lead: "番犬・猟犬・ベアドッグはそれぞれ役割が違う。家庭の犬は「警報装置」、ベアドッグは「追払い専門」。犬連れ登山の遭遇リスクも含めて整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "gear",
    tags: ["犬", "番犬", "ベアドッグ", "カレリアン", "犬連れ登山"],
    heroImage: "/articles/bear-and-dogs.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "repellent-comparison",
    title: "クマよけグッズ徹底比較 — スプレー・鈴・ラジオ・電気柵の効果と限界",
    description:
      "市販のクマよけ製品は数多いが、効果が裏付けられているもの・気休めのもの・状況依存のものが混在しています。クマスプレー、鈴・ホーン、ラジオ、ライト、電気柵、忌避剤を「ケース別の有効性・エビデンス・コスト・誤用リスク」の 4 軸で横断比較します。",
    lead: "スプレー・鈴・ラジオ・電気柵 — クマよけ製品を効果・エビデンス・コスト・誤用リスクの 4 軸で横断比較。何を信じて何に投資するかが分かる。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "gear",
    tags: ["クマよけ", "比較", "スプレー", "鈴", "電気柵", "忌避剤"],
    heroImage: "/articles/repellent-comparison.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "designated-management-2026",
    title: "クマが「指定管理鳥獣」に — 2024 年の指定と緊急銃猟で現場はどう変わるか",
    description:
      "2024 年 4 月、環境省はクマ（四国を除く）を「指定管理鳥獣」に追加。イノシシ・ニホンジカと同様に国の交付金で管理事業を進められるようになりました。2025 年 9 月施行の緊急銃猟、ハンター育成、保護派との議論まで、制度の意味を現場目線で解説。",
    lead: "2024 年 4 月のクマ「指定管理鳥獣」化と、2025 年 9 月施行の緊急銃猟で何が変わるか。交付金・市街地での銃猟・自治体の体制・保護派の反応まで実務目線で整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["指定管理鳥獣", "2024年", "緊急銃猟", "鳥獣保護管理法", "政策"],
    heroImage: "/articles/designated-management-2026.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-report",
    title: "クマ目撃時の通報マニュアル — 110番・119番・自治体への正しい連絡",
    description:
      "クマを見たらどこに連絡すればいいのか？ 緊急度別に 110 番（警察）・119 番（救急）・市町村役場・自治体専用通報フォームの使い分けを整理。伝えるべき情報・写真撮影の注意・通報後の流れまで実用的に解説します。",
    lead: "クマを見たらまず通報。緊急度別に 110・119・市町村・専用フォームの使い分け、伝えるべき情報をまとめます。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "encounter",
    tags: ["通報", "110番", "119番", "自治体", "緊急時"],
    heroImage: "/articles/bear-report.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-agriculture",
    title: "クマと農業 — 果樹園・養蜂・水田・畜産の被害と対策",
    description:
      "果樹園のリンゴ・梨・柿・栗、養蜂のミツバチ・蜂蜜、水田・畜舎・サイレージ。農業現場でクマ被害が出やすい品目と、電気柵・誘引物管理・補助金など現実的な対策を、農家・自治体・JA の視点で整理。",
    lead: "果樹園・養蜂・水田・畜産 — 農業現場のクマ被害は品目ごとに対策が異なる。電気柵設計から補助金活用まで実務目線で解説。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "scene",
    tags: ["農業", "果樹園", "養蜂", "水田", "電気柵", "補助金"],
    heroImage: "/articles/bear-agriculture.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "beech-mast-bear",
    title: "ブナとクマ — 結実不作が大量出没を引き起こすメカニズム",
    description:
      "クマの大量出没年は、多くの場合ブナ・ミズナラの堅果不作と重なります。ブナの結実周期、凶作年に山で何が起きるか、結実調査の情報の見方、過去の凶作年と出没件数の関係を、データと生態学の視点で解説します。",
    lead: "ブナ・ミズナラの凶作年は秋のクマ出没が増えやすくなります。結実周期と予測情報の見方を解説。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "background",
    tags: ["ブナ", "ミズナラ", "結実", "凶作", "ハイパーフェイジア", "大量出没"],
    heroImage: "/articles/beech-mast-bear.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "urban-bear",
    title: "アーバン・ベア — 市街地に出るクマと住民の備え",
    description:
      "クマが住宅地・通勤路・商店街に出没する「アーバン・ベア」現象。秋田市・盛岡市・札幌市の事例、クマが市街地に来る理由、住民・自治体の備えを獣医工学ラボが整理。",
    lead: "クマが住宅地・通勤路・商店街に出る「アーバン・ベア」が常態化。事例・理由・住民の備えと自治体の対応を整理します。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "scene",
    tags: ["市街地", "アーバン・ベア", "住宅地", "通勤", "都市型出没"],
    heroImage: "/articles/urban-bear.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-2025-retrospective",
    title: "2025年クマ大量出没を振り返る — 過去最多年に何が起きたか",
    description:
      "2025年は全国で39,801件（2026年5月時点の集計）の出没を記録した歴史的な大量年。10月には1日665件のピークも。秋田・新潟・宮城・青森・北海道の県別動向、原因として指摘されるブナ不作・前年豊作・里山放棄を、くまウォッチの実データで振り返ります。",
    lead: "2025年は全国で39,801件、平年の5倍超のクマ出没が記録された。月別・県別データと背景要因を、くまウォッチのデータで時系列で振り返ります。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["2025年", "大量出没", "ハイパーフェイジア", "ブナ", "秋田県"],
    heroImage: "/articles/bear-2025-retrospective.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "autumn-forecast-2026",
    title:
      "2026年 秋のクマ大量出没予報（2026年5月時点） — 過去3年データから読み解く",
    description:
      "2025年秋は全国で2万件超の出没を記録した歴史的大量出没年だった。2023年秋は4,700件、2024年秋は1,500件と年によって大きく振れる。2026年5月時点のデータ（過去3年の月別・県別データと2026年春の進行状況）から、来たる秋に向けて備えるべきことを獣医工学ラボがまとめます。",
    lead: "2025年秋は2万件超の出没で歴史的大量年だった。年によって大きく振れる秋の出没傾向を、過去3年のデータと2026年春の進行から整理。今からできる備えまで解説。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "season",
    tags: ["秋", "予報", "ハイパーフェイジア", "2026年", "大量出没", "ブナ"],
    heroImage: "/articles/autumn-forecast-2026.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "bear-spray",
    title: "クマよけスプレーの使い方と選び方",
    description:
      "クマ撃退スプレーは正しく使えば最も効果が高い対策の 1 つ。噴射距離・噴射時間・刺激成分の選び方とホルスター、噴射のコツ、航空機持込・寒冷地での失敗を避ける方法までを実用的に解説。",
    lead: "正しく使えば撃退率 90% 以上のクマよけスプレー。噴射距離・噴射時間の選び方とホルスター、噴射時のコツを解説。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
      "本州・四国のツキノワグマと、北海道のヒグマ (エゾヒグマ) は同じ「クマ」でも体格や性質が違います。ただし遭遇時の基本の対処は同じです。サイズ・分布・性格・遭遇時の対応の違いを比較してまとめます。",
    lead: "ツキノワグマとヒグマは体格や性質が違いますが、遭遇したときの基本の対処は同じ。違いと共通点を正しく知っておきましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
      "4〜6月は冬眠から出たクマが活動を始める時期。子連れの母グマは特に警戒心が強くなります。雪解け直後の山菜採り・新緑登山で気をつけるべきポイントを解説。",
    lead: "冬眠明けの春は、子連れの母グマが特に警戒心の強い時期。山菜採りで母子グマに気づかず近づく事故に注意します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
      "2023年度・2025年度とクマの人身被害が過去最多を更新。ブナ凶作・里山の崩壊・人口減少・分布の拡大など複合的要因をデータで整理。",
    lead: "クマの分布拡大に加え、「クマと人の生活圏が重なった」ことが出没増加の大きな要因。環境・人口などの要因を整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["統計", "里山", "ブナ凶作"],
    heroImage: "/articles/why-increasing.jpg",
    heroCredit: "Photo by Aoi on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/cy_mPGVvhpY",
  },
  {
    slug: "cub-handling",
    title: "子グマを見たらどうする — 近くに母グマがいると考えて",
    description:
      "山中で子グマを見かけたとき、可愛いから写真を撮ろうとするのは絶対に NG。母グマは子を守るため最も攻撃的になり、子グマへの接近は人身事故の代表的なパターンです。",
    lead: "子グマを見たら、すぐに立ち去る判断を。近くに母グマがいる可能性が非常に高いと考えて行動します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    lead: "クマは食べ物の匂いに引き寄せられます。庭・畑・物置からの匂い管理ができれば、出没リスクは大きく下げられます。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
      "クマの出没情報は例年6月ごろが最多。繁殖期や若いクマの移動で、ふだん出ない場所にも現れます。川遊びやキャンプ、避暑地で気をつけるべきポイントを解説。",
    lead: "初夏〜夏はクマの出没が例年いちばん多い時期。川遊び・キャンプ・登山道での遭遇リスクを正しく把握しましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
      "冬のクマはほとんど冬眠していますが、冬の間に活動する「穴持たず」がおり、秋に大量出没した年は12月以降も出没が続きます。スキー場・冬山登山での遭遇可能性を解説。",
    lead: "「冬はクマがいない」は正しくありません。穴持たずや雪原での目撃事例があり、冬山にも油断は禁物です。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
      "山中でクマの存在に気づくには痕跡 (フィールドサイン) を読む技術が役立ちます。足跡・糞・木の爪痕・食痕の見分け方をわかりやすく解説。",
    lead: "山中で痕跡を読めると、クマの存在に「事前に」気づけます。足跡・糞・爪痕の見分け方を覚えましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    lead: "キャンプ中のクマトラブルは「匂い管理」と「夜間の備え」で大きく減らせます。基本ルールを押さえましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
      "渓流釣りはクマと出会いやすい条件が揃う活動です。沢音で鈴の音が届きにくく、視界が悪く、クマも沢を利用するため。釣り人向けの実用的な対策を解説。",
    lead: "沢音で鈴の音は届きにくい。渓流釣りはクマと出会いやすい条件が揃う活動です。釣り人ならではの装備と立ち回りを覚えましょう。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
      "近年、通学路や住宅地でもクマの出没が相次いでいます。集団登下校・装備・学校の連絡体制・地域の取り組みを解説。",
    lead: "通学路でもクマの出没が相次いでいます。子供・保護者・学校・地域がそれぞれできる対策を整理します。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    lead: "北海道全域に生息するヒグマは推定約 1.2 万頭（1990 年度の 2 倍以上）。札幌・旭川など都市近郊への出没も増えています。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    lead: "クマの嗅覚は犬の数倍ともいわれます。匂い管理がなぜ重要か、なぜ風下が危険か、感覚特性を知れば対策が変わります。",
    publishedAt: "2026-04-29",
    updatedAt: "2026-10-30",
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
    title:
      "きのこ狩りのクマ対策 — 山の中の人身被害で最も多い行動",
    description:
      "山の中で起きるクマ人身被害で最も多いのが山菜・キノコ採り中です（環境省の分析）。前傾姿勢で地面を見続け、林床に分け入り、夢中になりがち — クマと条件が揃います。装備と立ち回りで遭遇の危険は大きく下げられます。",
    lead: "山の中の人身被害で最も多いのが山菜・キノコ採り。前傾姿勢・林床・無音 — クマと条件が揃います。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
    season: "autumn",
    category: "scene",
    tags: ["きのこ狩り", "秋", "山菜採り", "ハイパーフェイジア"],
    heroImage: "/articles/mushroom-picking.jpg",
    heroCredit: "Photo by Townsend Walton on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/REu4bAykGxA",
  },
  {
    slug: "wild-vegetables",
    title:
      "山菜採りのクマ対策 — 春〜初夏に被害が多い山の中の行動",
    description:
      "春〜初夏のクマ人身被害は主に山の中で起き、なかでも山菜・キノコ採り中が最も多い（環境省の分析）。冬眠明けの子連れの母グマと、地面に屈み込み無防備になる山菜採りの組み合わせは危険。回避策を時系列で解説。",
    lead: "春〜初夏の山の中の被害で最多は山菜採り。冬眠明けの母グマと、地面に屈む人間 — 危険な組み合わせです。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "「死んだふり」(うつ伏せの防御姿勢) は条件付きで有効ですが、捕食目的の襲撃では逆効果になり得ます。ツキノワグマ vs ヒグマ、防衛攻撃 vs 捕食攻撃、姿勢・タイミング — 正しい使い分けを整理。",
    lead: "死んだふりは条件付きで有効。捕食型の攻撃では逆効果になり得ます。種別と状況で正しく使い分けを。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
    season: "all",
    category: "encounter",
    tags: ["死んだふり", "対処", "ツキノワグマ", "ヒグマ"],
    heroImage: "/articles/playing-dead.jpg",
    heroCredit: "Photo by Bill Pennell on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/o1PU3O2lIYQ",
  },
  {
    slug: "bear-speed",
    title: "クマの走力は時速50km — 人間が走って逃げ切れない理由",
    description:
      "クマの最高速度はツキノワグマで時速約 40km、ヒグマで時速約 50km。100m を 10 秒未満で走破する計算で、トレーニングを積んだ陸上選手でも逃げ切れません。物理データから「逃げない」が正解な理由を解説。",
    lead: "クマの最高速度は時速 50km。100m を 10 秒未満で走破。陸上選手でも逃げ切れません。走って逃げるのは逆効果です。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "クマは鳥獣保護管理法で保護されている一方、有害駆除や狩猟も認められています。スプレー所持・捕獲・駆除の要請・狩猟解禁の関係を、自治体・猟友会の役割とともに整理します。",
    lead: "クマは鳥獣保護管理法で守られつつ、駆除も認められている動物。法律の枠組みを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "クマから畑を守る物理的な対策の中心が電気柵。十分な電圧・地面近くからのワイヤー・確実なアース・草刈り — 効果を出す張り方の基本と機材選び・点検のコツを、県の指針と研究をもとに解説。",
    lead: "電気柵は正しく張って手入れを続ければ、クマから畑を守る力になります。電圧・ワイヤーの高さ・アース・草刈りの基本を整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "東北 6 県は本州ツキノワグマの主要生息地。2023年度は秋田が人身被害全国最多（70人）で、岩手・山形でも市街地への出没が相次いでいます。最新の出没傾向と地域固有のリスクをまとめます。",
    lead: "東北 6 県はツキノワグマの主要生息地。2023年度の人身被害は秋田が全国最多。県別の事情とリスクを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
    lead: "クマの突進の多くは威嚇 (ブラフチャージ)。耳・口・後肢の動きが、本気の攻撃と見分ける手がかりになります。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
      "クマは明け方と夕方 (薄明薄暮) に活発になり、夜に動く個体もいます。視界が効かない時間帯にクマと出会ったときの対処、ヘッドライトの当て方、音を出すタイミング、後退の方向 — 夜間特有のリスクと行動を解説。",
    lead: "明け方と夕方はクマが活発な時間帯。暗い中での遭遇では、光・音・後退の使い方が日中と少し違います。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "明け方・夕方はクマが活発になる時間帯。ヘッドライトの明るさ・色温度・連続点灯時間、サブライト、反射材、ベルト式スプレーの位置 — 夜間装備の構成を実用的に解説。",
    lead: "早朝・夕方はクマが活発な時間帯。ヘッドライト・サブライト・反射材・スプレーの位置を最適化しましょう。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "クマはおおむね 11 月下旬〜12 月ごろに冬眠に入り、3〜5 月に出てきます。体温を数℃しか下げない浅い休眠の仕組み、冬眠場所、「穴持たず」について、研究をもとに解説。",
    lead: "クマの冬眠は深い眠りではなく浅い休眠。場所選び・代謝・穴持たずの謎までを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "トレランは出会い頭の遭遇が起きやすい活動です（環境省も指摘）。早朝の山道を時速 10km で走る = 鈴の警告音が届く前に至近距離まで突っ込み、クマが避ける時間を奪う構造。トレラン特有のリスクと、装備・ルート計画・複数人走の組み立てを解説。",
    lead: "トレランは「速さ」が遭遇リスクを上げる活動。鈴・声・スプレーの携行と、明け方・夕方を避けることが鍵。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
      "林業従事者・農家・狩猟者は職務上クマと隣り合っています。チェーンソー音・伐採地・果樹園作業など業務シーン別のリスクと、現場で使えるスプレー・無線連絡・複数人作業のルールを実用的に整理。",
    lead: "業務でクマと隣り合う林業・農家・狩猟者へ。職場でのリスク管理と装備の組み立てを整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
      "関東は奥多摩・丹沢・秩父・尾瀬・日光など山岳域が広く、ツキノワグマも生息。高尾山・奥多摩・丹沢など首都圏ハイカーが訪れる山域での目撃と対策をまとめます。",
    lead: "高尾山・奥多摩・丹沢・秩父にもクマはいます。首都圏ハイカー向けに地域事情と対策を整理。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
    season: "all",
    category: "region",
    tags: ["関東", "高尾山", "奥多摩", "丹沢", "登山"],
    heroImage: "/articles/kanto-bears.jpg",
    heroCredit: "Photo by Griffin Quinn on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/s1A2ToEyaTY",
  },
  {
    slug: "western-bears",
    title:
      "西日本のツキノワグマ — 分断された地域個体群と保護の現状",
    description:
      "近畿・中国・四国のツキノワグマは分布が分断され、紀伊半島・東中国・西中国・四国山地の個体群は環境省レッドリストの「絶滅のおそれのある地域個体群」。四国は推定16〜24頭と特に少なく、九州は2012年に絶滅と判断されました。各地の現状を整理します。",
    lead: "西日本のツキノワグマは保護優先度が高い地域個体群。紀伊・中国・四国の現状を整理します。",
    publishedAt: "2026-05-09",
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
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
    updatedAt: "2026-10-30",
    season: "all",
    category: "background",
    tags: ["世界", "グリズリー", "アラスカ", "比較"],
    heroImage: "/articles/world-bears.jpg",
    heroCredit: "Photo by Paxson Woelber on Unsplash",
    heroCreditUrl: "https://unsplash.com/photos/8IuAYIIzFMI",
  },
];

/**
 * 研究ダイジェストは 2026-10-30 のファクトチェックで、全号に「論文にない数字・逆の結論・
 * 実在しない文献」が見つかったため公開を止め、原典と照合して 1 号ずつ書き直している
 * (docs/fact-check-2026-10-30.md)。書き直して確認が済んだ号の slug をここに足すと公開に戻る。
 * 再検証中の号は、ページ本体の代わりにお知らせを出し (ArticleShell)、noindex にし、
 * 一覧・関連記事・タグ・sitemap・フィードから外す (ARTICLES から除く)。
 */
const DIGESTS_REVERIFIED = new Set<string>([
  "research-digest-001",
  "research-digest-002",
  "research-digest-003",
  "research-digest-004",
  "research-digest-005",
  "research-digest-006",
  "research-digest-007",
  "research-digest-008",
  "research-digest-009",
  "research-digest-010",
  "research-digest-011",
  "research-digest-012",
  "research-digest-013",
  "research-digest-014",
  "research-digest-015",
  "research-digest-016",
  "research-digest-017",
  "research-digest-018",
  "research-digest-019",
  "research-digest-020",
  "research-digest-021",
  "research-digest-022",
  "research-digest-023",
  "research-digest-024",
  "research-digest-025",
  "research-digest-026",
  "research-digest-027",
  "research-digest-028",
  "research-digest-029",
  "research-digest-030",
  "research-digest-031",
  "research-digest-032",
  "research-digest-033",
]);

export function isUnderReview(slug: string): boolean {
  return slug.startsWith("research-digest-") && !DIGESTS_REVERIFIED.has(slug);
}

/** 再検証中の号の metadata に足す。検索エンジンに載せない (リンクはたどってよい)。 */
export function reviewRobots(slug: string): { robots?: { index: boolean; follow: boolean } } {
  return isUnderReview(slug) ? { robots: { index: false, follow: true } } : {};
}

/** 公開中の記事。一覧・関連記事・タグ・sitemap・フィードはすべてこれを使う。 */
export const ARTICLES: ArticleMeta[] = ALL_ARTICLES.filter(
  (a) => !isUnderReview(a.slug),
);

/** 再検証中の記事も含めて引く (各記事ページが自分の meta を取るため)。 */
export function getArticle(slug: string): ArticleMeta | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
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
/**
 * タグページを検索インデックス対象にする最小記事数。341タグ中270(79%)が1記事だけで、
 * 薄いタグページが大量に生成・sitemap 掲載されていた。これ未満のタグは noindex にし
 * sitemap からも外す(ページ自体はサイト内回遊のため残す)。/place の 0件noindex剪定と同方針。
 */
export const TAG_MIN_INDEX = 2;

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

/** 各記事の所要時間 (分)。`scripts/...` で page.tsx の日本語字数を 600字/分で割って算出。
 *  記事を追加したら手動でここにも 1 行追加する。未登録は 5 分にフォールバック。 */
const READING_TIMES: Record<string, number> = {
  "research-digest-031": 6,
  "research-digest-032": 6,
  "research-digest-033": 6,
  autumn: 4,
  "bear-app": 3,
  "bear-bell": 4,
  "bear-canister": 4,
  "bear-hibernation": 4,
  "bear-laws": 5,
  "bear-myths": 4,
  "bear-senses": 4,
  "bear-speed": 3,
  "bear-spray": 4,
  "bear-tracks": 4,
  "bluff-charge": 3,
  camping: 4,
  "chubu-bears": 3,
  "cub-handling": 4,
  "culling-debate": 4,
  diet: 3,
  "electric-fence": 4,
  encounter: 4,
  "first-aid": 4,
  fishing: 4,
  "forest-work": 4,
  "historic-incidents": 4,
  "hokkaido-bears": 4,
  "home-protection": 4,
  "kanto-bears": 4,
  "mushroom-picking": 4,
  "night-encounter": 4,
  "night-gear": 3,
  "playing-dead": 4,
  "school-route": 4,
  "species-difference": 4,
  spring: 4,
  summer: 3,
  "tohoku-bears": 4,
  "trail-running": 3,
  "urban-encounter": 4,
  weapons: 4,
  "western-bears": 4,
  "why-increasing": 4,
  "wild-vegetables": 4,
  winter: 3,
  "world-bears": 4,
};

export function getReadingTime(slug: string): number {
  return READING_TIMES[slug] ?? 5;
}

/** 同カテゴリ内で公開日順の前後 1 本を返す。記事末尾の prev/next ナビ用。 */
export function getPrevNextInCategory(slug: string): {
  prev: ArticleMeta | null;
  next: ArticleMeta | null;
} {
  const current = getArticle(slug);
  if (!current) return { prev: null, next: null };
  const sorted = ARTICLES.filter((a) => a.category === current.category).sort(
    (a, b) => a.publishedAt.localeCompare(b.publishedAt) || a.slug.localeCompare(b.slug),
  );
  const idx = sorted.findIndex((a) => a.slug === slug);
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
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
