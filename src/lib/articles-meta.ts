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
      "クマは厳密な「縄張り」より「行動圏 (home range)」を持ち、雄ヒグマで 500〜2000km²、雌で 50〜300km²。樹皮を爪で剥がす「ベアスクラブ」、樹幹への背中こすりつけ、糞・尿マーキングなど複数の手段で情報をやり取りする。行動圏の構造と侵入時の対処を獣医行動学の視点で解説。",
    lead: "「クマには縄張りがある」は半分正解。雄は数百km² の行動圏を持ち、樹皮を剥がす「ベアスクラブ」や匂いマーキングで情報を残す。痕跡の読み方と回避方法。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
    updatedAt: "2026-05-14",
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
      "クマは犬・霊長類に匹敵する学習能力を持つ。食物の場所・人の行動パターン・電気柵の弱点まで一度学ぶと数年覚えている。一度市街地に出て成功したクマは何度も来るのが「人慣れ (habituation)」「餌付け学習 (food conditioning)」のメカニズム。アーバンベア化を防ぐ獣医行動学の知見。",
    lead: "クマは数年単位で学習を覚える。一度ゴミ・果樹に味をしめた個体が「常連客」化する仕組みと、対策の科学的根拠を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "現生のクマ科 (Ursidae) は 8 種。ジャイアントパンダ・メガネグマ・マレーグマ・ナマケグマ・ツキノワグマ・ヒグマ・ホッキョクグマ・アメリカクロクマ。最古のクマは約 4000 万年前、現生種は約 200〜500 万年前に分岐。系統樹・地理分布・形態の比較を進化生物学の視点で整理。",
    lead: "クマ科は世界で 8 種。ジャイアントパンダもクマの仲間。ホッキョクグマはヒグマから 25 万年で分岐 — 系統樹で見るクマの進化史。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    season: "all",
    category: "ecology",
    tags: ["系統樹", "進化", "クマ科", "ジャイアントパンダ", "ホッキョクグマ"],
    heroImage: "/articles/bear-phylogeny.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-japan-evolution",
    title: "日本のクマの進化史 — 氷河期から現代までの 10 万年",
    description:
      "ツキノワグマとヒグマは別々の経路で日本列島に渡来。ツキノワグマは更新世中期 (40〜50 万年前) に朝鮮半島経由、ヒグマは最終氷期 (約 5 万年前) にサハリン経由で北海道へ。本州 vs 北海道の分布の理由、絶滅したヒグマ亜種、現代の地域個体群の遺伝的多様性を整理。",
    lead: "なぜツキノワグマは本州、ヒグマは北海道だけなのか。氷河期の海面低下と渡来ルートで決まった日本のクマ分布の進化史。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    season: "all",
    category: "ecology",
    tags: ["進化史", "氷河期", "渡来", "地域個体群", "日本"],
    heroImage: "/articles/bear-japan-evolution.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-aging",
    title: "クマの老化と寿命 — 野生 20 年・飼育下 30 年の老齢医学",
    description:
      "野生のクマの平均寿命は 15〜25 年、最長記録は野生で 30 年以上、飼育下で 40 年超。老齢個体に多い疾患は関節炎・白内障・歯磨耗・腎臓病など哺乳類共通。動物園・救護施設での老齢ケアと、野生老齢個体が市街地に出やすくなる傾向まで、比較老年医学の視点で解説。",
    lead: "クマの寿命は野生 20 年・飼育下 30 年超。老齢個体は関節炎・歯磨耗で食物を変え、市街地に降りやすくなる。比較老年医学の視点で。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    season: "all",
    category: "ecology",
    tags: ["寿命", "老化", "老齢医学", "比較医学", "飼育"],
    heroImage: "/articles/bear-aging.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-anesthesia",
    title: "クマの麻酔と捕獲時の獣医処置 — 安全な扱いの科学",
    description:
      "野生クマの捕獲・調査・治療には適切な麻酔が不可欠。テラゾル + キシラジン・メデトミジン・チレタミン混合などが標準。体重 100kg のヒグマで投与量・覚醒時間・体温管理まで、自治体担当者・獣医師・救護施設従事者向けの実践ガイド。誤投与のリスクと拮抗薬まで網羅。",
    lead: "野生クマの捕獲には適切な麻酔薬と用量設計が必須。テラゾル+キシラジンが標準。体温管理・覚醒監視・拮抗薬の使い方を獣医麻酔学の視点で。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマは交尾から半年後に「着床遅延」で受精卵が動き出し、母グマは冬眠中に出産する。栄養状態が悪ければ妊娠そのものをキャンセルする独自のメカニズムも。獣医師の視点で、ツキノワグマ・ヒグマの繁殖サイクル・新生児の発達・母子関係を解説。",
    lead: "交尾は夏、出産は真冬の巣穴の中。半年も着床を遅らせる仕組みと、200g 程度で生まれる新生児が春までに 20 倍以上に育つ秘密を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマに襲われたあと最も警戒すべきは出血より「感染症」。パスツレラ症・破傷風・トキソプラズマなど人獣共通感染症 (ズーノーシス) のリスクと、24 時間以内の対応、ワクチン接種の判断を獣医師の視点で整理。狩猟者・救急医療従事者・自治体担当者にも有益。",
    lead: "クマに襲われたら、傷の縫合より感染症対策が重要。パスツレラ・破傷風・トキソプラズマなど、人獣共通感染症のリスクと対応を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    season: "all",
    category: "ecology",
    tags: ["感染症", "ズーノーシス", "パスツレラ", "破傷風", "獣医学"],
    heroImage: "/articles/bear-zoonosis.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-bite-force",
    title: "クマの咬合力と歯の構造 — なぜ頭蓋骨を砕けるのか",
    description:
      "ヒグマの咬合力は推定 500〜700kg/cm²、人間の約 10 倍。雑食性ゆえに犬歯と臼歯が発達し、骨をかみ砕き、果実をすりつぶす万能型の歯列を持つ。咬筋・側頭筋の発達、頭蓋骨の構造、噛みつき型と引き裂き型の使い分けを獣医解剖学的に解説。",
    lead: "ヒグマの咬合力は人間の約 10 倍。骨をかみ砕き果実をすりつぶす万能型の歯と顎の構造を、獣医解剖学の視点で解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    season: "all",
    category: "ecology",
    tags: ["咬合力", "歯", "顎", "解剖学", "獣医学"],
    heroImage: "/articles/bear-bite-force.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-vision",
    title: "クマの視力 — 「色は見えるが解像度は低い」夜行性の目",
    description:
      "クマの視力は人間の 0.3〜0.5 程度 (近視寄り) だが、色覚は哺乳類としては良好で赤・青を識別できる。網膜のタペタム (反射層) のおかげで夜間視は人間の数倍。一方、動くものへの感度は高く、20m 先の人の動きは見逃さない。視覚行動から導く遭遇時の対処も解説。",
    lead: "クマの目は人間の視力 0.3〜0.5 だが、色は識別でき夜間視に優れる。距離別の見え方と、遭遇時の「見られている」を前提にした対処法を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマは冬眠中の 5 ヶ月間、飲まず食わずでも腎不全にならない。腎臓で生成された尿素を腸内細菌が分解 → アンモニアを肝臓で再アミノ酸化する独自の窒素リサイクル系が筋肉量を維持する。慢性腎不全・宇宙医学への応用研究まで、獣医生理学の視点で解説。",
    lead: "冬眠中のクマは 5 ヶ月排尿せず筋肉も減らない。尿素を腸でリサイクルしてアミノ酸に戻す独自の代謝系を、獣医生理学と慢性腎不全治療への応用視点で解説。",
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-02",
    season: "winter",
    category: "ecology",
    tags: ["腎臓", "尿素", "冬眠", "代謝", "獣医学"],
    heroImage: "/articles/bear-kidney-nitrogen-recycling.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-brain-cognition",
    title: "クマの脳と認知能力 — 数概念・空間記憶・道具使用の最新知見",
    description:
      "クマは「ただの大型動物」ではない。Vonk らはアメリカクロクマが数概念を理解することを実験で示し、ヒグマは数百 km² の餌場を季節別に「地図化」する空間記憶を持つ。電気柵や檻を解除する問題解決能力、人慣れと忌避学習の非対称性まで、比較認知科学の最新知見をまとめる。",
    lead: "アメリカクロクマは数を理解し、ヒグマは餌場を「地図化」する。比較認知科学が明かしたクマの高度な認知能力と、それが人クマ軋轢に与える影響を解説。",
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-02",
    season: "all",
    category: "ecology",
    tags: ["脳", "認知", "学習", "記憶", "獣医学"],
    heroImage: "/articles/bear-brain-cognition.jpg",
    heroCredit: "Imagen 4 (Google AI)",
  },
  {
    slug: "bear-fat-metabolism",
    title: "クマの脂肪蓄積メカニズム — 冬眠前に体重を 30% 増やす生理学",
    description:
      "ヒグマは秋のハイパーフェイジア期に 1 日 2 万 kcal 以上を摂取し、体重を 25〜35% 増やす。レプチン・グレリンなどホルモン制御で「満腹中枢が機能しない」状態が作られ、過食が続く。冬眠中はインスリン抵抗性が逆転し体脂肪だけを消費。獣医生理学の視点で解説。",
    lead: "秋のクマが食べ続けるのは「満腹中枢が一時的に機能しない」から。レプチン・グレリンによる過食ホルモン制御と、冬眠中の脂肪燃焼の謎を解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマの胆嚢から抽出される「熊胆 (ゆうたん・くまのい)」は古来より漢方薬として重宝され、ウルソデオキシコール酸 (UDCA) を高濃度に含む。現代医療では合成 UDCA が利用可能なため代替が進むが、密漁・違法取引は今も問題。獣医薬理学・保全生物学の視点で整理。",
    lead: "クマの胆嚢から取れる「熊胆」は古来からの漢方。有効成分 UDCA は現代医療では合成可能で、密漁の正当性は失われている。獣医薬理学と保全の視点で整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマ検知 AI は監視カメラ・ドローン映像からクマを自動識別する技術。獣医工学ラボ (リサーチコーディネート株式会社) が 2021 年より開発するクマ対策 AI の仕組み、現場導入の事例、自治体・観光地・農家での活用シーンを解説。くまウォッチの予報基盤にも同社の技術が反映されている。",
    lead: "監視カメラ・ドローン映像からクマを自動識別する AI 技術。獣医工学ラボが 2021 年より開発を続けるクマ対策 AI の現在地を、技術・倫理・社会実装の 3 軸で解説。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマに襲われた場合、医療費・人身被害は通常の医療保険で対応可能。山岳保険・登山保険を付けておくと救助費用も補償される。一方、農作物・家屋・自動車のクマ被害は通常の損害保険では除外条項があることが多い。具体的な保険の種類・補償範囲・申請手順を解説。",
    lead: "クマに襲われた医療費・救助費用は保険でカバーできる。一方、農作物・家屋・自動車の被害は対象外のことも多い。各保険の補償範囲を整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
    updatedAt: "2026-05-14",
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
      "2025 年度の全国クマ被害は推計被害額 100 億円超 (農作物・林産物・人身)。観光業では「クマ出没」報道のたびに登山道閉鎖・宿泊予約キャンセル・売上減少が発生。自治体財政では駆除・電気柵補助・人身事故対応で年間数千万〜数億円の支出。地域経済への波及を数字で整理。",
    lead: "クマ被害は年間 100 億円超の経済損失。農業・観光・自治体財政それぞれへの影響を、最新統計と実例で整理。",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
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
      "クマ研究ダイジェスト Vol.29 — クマは森の「清掃員」だった。腐肉食動物としてのクマ",
    description:
      "イエローストーンでオオカミが再導入された後、ヒグマの食事が変わった。Wilmers ら（2003）の研究は、クマがオオカミの食べ残しから栄養を補給する「スカベンジャー（腐肉食動物）」としての側面を定量化。動物の死体が森を巡るリサイクルメカニズムと、クマがその主要プレイヤーである事実を精読します。",
    lead: "オオカミが獲物を仕留め、クマがその残り物を片付ける。Wilmers 2003 でイエローストーン生態系のクマの「清掃員」役を精読。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "腐肉食",
      "オオカミ",
      "イエローストーン",
      "Wilmers 2003",
    ],
    heroImage: "/articles/research-digest-029.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-030",
    title:
      "クマ研究ダイジェスト Vol.30 — 人とクマの「共進化」が共存の鍵。Carter &amp; Linnell 2016",
    description:
      "本シリーズの締めくくり。Carter &amp; Linnell（2016, TREE）は、人とクマ（および他の大型肉食獣）の共存において、双方が「互いに適応」する「共進化」が長期的な解決の鍵だと論じる総説。シリーズ 30 本の知見を統合し、日本でのクマと人の未来を展望します。",
    lead: "クマと人の共存に必要なのは「双方の適応」だった。シリーズ 30 本の総まとめとして、Carter &amp; Linnell 2016 を精読し未来を展望。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "共進化",
      "共存",
      "Carter 2016",
      "総括",
    ],
    heroImage: "/articles/research-digest-030.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-027",
    title:
      "クマ研究ダイジェスト Vol.27 — 「クマを見る観光」は世界で年 10 億ドル産業。Penteriani 2017",
    description:
      "アラスカ・カナダ・スカンジナビアでは、クマを見るためだけに観光客が訪れ、経済を支えている。Penteriani ら（2017）の世界規模レビューで、ベアウォッチング・ツーリズムの経済効果と保護への貢献、しかし同時に生じるクマへの行動影響と倫理的課題を精読。日本の知床・軽井沢での応用可能性まで解説します。",
    lead: "アラスカではヒグマ 1 頭が「年 1 万ドル」を観光収入として稼ぐ。Penteriani 2017 で世界のベアウォッチング経済を精読。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "観光",
      "経済",
      "保護",
      "Penteriani 2017",
    ],
    heroImage: "/articles/research-digest-027.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-028",
    title:
      "クマ研究ダイジェスト Vol.28 — 家畜 1 頭の損失で農家がいくら失うか。Mertens 2001",
    description:
      "ルーマニアの羊飼いと家畜被害を 6 年間追跡した Mertens &amp; Promberger（2001）の経済研究を精読。クマ・オオカミに家畜 1 頭を襲われると、農家は最大 800 ユーロを失う。補償制度の設計、共存への投資、保護政策と経済学の交差点を解説。日本の畜産家にも参考になる古典的研究を読み解きます。",
    lead: "家畜 1 頭が襲われると農家が失うのは、肉の値段だけではない。Mertens &amp; Promberger 2001 で家畜被害の経済学を精読。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "家畜",
      "経済",
      "補償",
      "Mertens 2001",
    ],
    heroImage: "/articles/research-digest-028.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-025",
    title:
      "クマ研究ダイジェスト Vol.25 — クマは「12 種類の声」で語る。クマ音響コミュニケーション研究",
    description:
      "クマは「ガオー」と吠えるだけの動物ではない。母子の鳴き交わし、警告のフー息、求愛のゴロゴロ音、子グマの泣き声 — 行動学者たちが体系的に記録してきたクマの 12 種類以上の鳴き声・音声を整理。Peters 1984 ほかの古典から、最新の AI 音響認識まで、クマ音声コミュニケーションの全体像を精読します。",
    lead: "クマは 12 種類以上の声で語っている。母子の対話、求愛のゴロゴロ、警告のフー息 — クマの「声の世界」を行動学から AI 音響認識まで解説。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "鳴き声",
      "コミュニケーション",
      "音響",
      "行動学",
    ],
    heroImage: "/articles/research-digest-025.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-026",
    title:
      "クマ研究ダイジェスト Vol.26 — クマはアザラシ 1 頭で 1.5 ヶ月生きる。Pagano 2018 Science",
    description:
      "ホッキョクグマに小型カメラと加速度センサーを装着し、北極で 11 日間の行動を完全記録した Pagano ら（2018, Science）。彼らが消費するエネルギーの実態は予想以上に大きく、現在の温暖化下では生存が厳しくなりつつあることが定量的に判明。クマのエネルギー収支を初めて野外で精密測定した画期的研究を精読します。",
    lead: "ホッキョクグマは予想の 50% 多くエネルギーを使っていた。アザラシ 1 頭で 1.5 ヶ月持つ計算だが、捕獲率の低下で生存が厳しい現実を Pagano 2018 で解説。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "エネルギー収支",
      "ホッキョクグマ",
      "気候変動",
      "Pagano 2018",
    ],
    heroImage: "/articles/research-digest-026.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-023",
    title:
      "クマ研究ダイジェスト Vol.23 — クマの赤ちゃんは半分死ぬ。Schwartz 2006",
    description:
      "イエローストーン国立公園のヒグマを 20 年以上追跡した Schwartz ら（2006）の壮大な人口統計研究。仔グマ 1 年目の生存率は 60〜80%、1 産あたりの平均出産数は 2 頭、母グマ 1 頭が生涯に育て上げる仔は数頭のみ — クマの繁殖の厳しい現実と、個体群維持の難しさを定量的に解説します。",
    lead: "イエローストーンの 20 年データから読み解くヒグマ繁殖の真実。仔グマ生存率 60-80%、母グマの生涯出産数、人為要因の影響まで Schwartz 2006 を精読。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "all",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "仔グマ",
      "生存率",
      "人口統計",
      "Schwartz 2006",
    ],
    heroImage: "/articles/research-digest-023.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "research-digest-024",
    title:
      "クマ研究ダイジェスト Vol.24 — クマの冬眠巣穴は「人がいない場所」で選ばれる。Linnell 2000",
    description:
      "冬眠中のクマの巣穴は、人間活動からどれくらい離れているのか？ Linnell ら（2000）がスウェーデンの 100 か所の巣穴を測定し、人家・道路・スキー場との距離を解析。冬眠中の母グマと仔グマがどれほど人為的撹乱に弱いか、ヒグマの巣穴選定の戦略を精読します。",
    lead: "クマは「人がいない場所」を冬眠地に選ぶ。スウェーデン 100 巣穴の調査で判明したヒグマの戦略と、人為撹乱の脆さを Linnell 2000 で解説。",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    season: "winter",
    category: "science",
    tags: [
      "論文",
      "研究ダイジェスト",
      "冬眠",
      "巣穴",
      "保護",
      "Linnell 2000",
    ],
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
      "高速道路・国道・山道でのクマと車の衝突事故は毎年発生。クマも車も大破するこの事故は、運転者の対応次第で命に関わります。回避運転・衝突後の対応・保険・通報・夜間運転の注意点を、北海道・東北・北陸の事例を交えて整理。",
    lead: "クマとの自動車衝突は毎年発生する深刻事故。回避運転・衝突後対応・保険・夜間運転の注意点を実例ベースで整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
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
    updatedAt: "2026-05-19",
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
    lead: "高尾山・上高地・知床にも外国人観光客の遭遇例あり。多言語注意喚起の現状と観光業が提供すべき情報を整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
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
    updatedAt: "2026-05-19",
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
      "全国で深刻化するハンター不足の中、狩猟免許を取得する人が少しずつ増えています。第一種銃猟・第二種銃猟・わな猟・網猟の 4 種類の違い、取得手順、費用、年齢制限、その後の所持許可までを実務目線で整理。クマ対策に関わりたい人向けの実践ガイド。",
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
      "大規模災害時はクマの行動も変化します。森林被害・避難生活・物資管理・夜間照明の停止 — 災害時特有のクマリスクと、自治体・住民が備えておくべき対応を整理。能登半島地震・西日本豪雨など過去事例も参照。",
    lead: "地震・水害・停電などの災害時はクマ遭遇リスクが変化する。避難所運営・物資管理・夜間の備えを過去事例から整理。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
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
    updatedAt: "2026-05-19",
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
      "クマの大量出没年は、ほぼ例外なくブナ・ミズナラの堅果不作と重なります。ブナの結実周期、凶作年に山で何が起きるか、結実予測情報の見方、過去の凶作年と出没件数の関係を、データと生態学の視点で解説します。",
    lead: "ブナ・ミズナラの凶作年は秋のクマ出没が爆発的に増えます。結実周期と予測情報の見方を解説。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
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
    updatedAt: "2026-05-19",
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
      "2025年は全国で39,801件の出没を記録した歴史的な大量年。10月には1日665件のピークも。秋田・新潟・宮城・青森・北海道の県別動向、原因として指摘されるブナ不作・前年豊作・里山放棄を、くまウォッチの実データで振り返ります。",
    lead: "2025年は全国で39,801件、平年の5倍超のクマ出没が記録された。月別・県別データと背景要因を、くまウォッチのデータで時系列で振り返ります。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
    season: "all",
    category: "background",
    tags: ["2025年", "大量出没", "ハイパーフェイジア", "ブナ", "秋田県"],
    heroImage: "/articles/bear-2025-retrospective.jpg",
    heroCredit: "Generated with Imagen 4 (Google)",
  },
  {
    slug: "autumn-forecast-2026",
    title: "2026年 秋のクマ大量出没予報 — 過去3年データから読み解く",
    description:
      "2025年秋は全国で2万件超の出没を記録した歴史的大量出没年だった。2023年秋は4,700件、2024年秋は1,500件と隔年で振れる。過去3年の月別・県別データと2026年春の進行状況から、来たる秋に向けて備えるべきことを獣医工学ラボがまとめます。",
    lead: "2025年秋は2万件超の出没で歴史的大量年だった。隔年で大きく振れる秋の出没傾向を、過去3年のデータと2026年春の進行から整理。今からできる備えまで解説。",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
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
      "7〜8 月のクマは涼しい場所と昆虫食を求めて沢筋や山の中腹に集中。川遊びやキャンプ、避暑地で気をつけるべきポイントを解説。",
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
      "トレラン中の遭遇事故が増えています。早朝の山道を時速 10km で走る = 鈴の警告音が届く前に至近距離まで突っ込み、クマが避ける時間を奪う構造。トレラン特有のリスクと、装備・ルート計画・複数人走の組み立てを解説。",
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
      "林業従事者・農家・狩猟者は職務上クマと隣り合っています。チェーンソー音・伐採地・果樹園作業など業務シーン別のリスクと、現場で使えるスプレー・無線連絡・複数人作業のルールを実用的に整理。",
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
      "関東は奥多摩・丹沢・秩父・尾瀬・日光など山岳域が広く、ツキノワグマも生息。高尾山・奥多摩・丹沢など首都圏ハイカーが訪れる山域での目撃と対策をまとめます。",
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
