// 「高尾山 くま」のような地名検索の受け皿となる主要ランドマーク。
//
// 各エントリの周辺 10km 圏内の出没情報を集約して /spot/[name] として
// 公開する。市町村単位 (/place) では捕捉できない、登山・観光・温泉などの
// 名所ベースの検索クエリを拾う。
//
// 座標は OpenStreetMap / 国土地理院 / Wikipedia 公開情報からの一般的な代表点。
// カバレッジは Search Console のクエリ実績を見ながら順次拡張する想定。

export type LandmarkCategory =
  | "mountain"
  | "national_park"
  | "resort"
  | "trailhead"
  | "lake";

export type JapanLandmark = {
  /** URL の path 部分。日本語そのまま使う (Next.js が encode する) */
  slug: string;
  /** 表示名 */
  name: string;
  /** 別名・読み・英字表記など。検索キーワードのバリエーション */
  altNames?: string[];
  /** 所属する都道府県 (主要なもの。複数県をまたぐ場合は代表的な 1 つ) */
  prefName: string;
  /** 所属する市町村名 (代表的な 1 つ) */
  muniName?: string;
  category: LandmarkCategory;
  lat: number;
  lon: number;
  /** 紹介・補足。SEO の本文として 1 段落程度 */
  blurb: string;
};

export const JAPAN_LANDMARKS: JapanLandmark[] = [
  // === 主要山岳 ===
  {
    slug: "富士山",
    name: "富士山",
    altNames: ["Fuji-san", "ふじさん"],
    prefName: "山梨県",
    muniName: "富士吉田市",
    category: "mountain",
    lat: 35.3606,
    lon: 138.7274,
    blurb:
      "標高 3,776m、日本最高峰。山梨・静岡両県にまたがり、登山者数は年 20 万人超。富士スバルライン五合目・富士宮口・須走口・御殿場口の各登山口周辺は、夏季に限らずクマの活動が報告されています。",
  },
  {
    slug: "高尾山",
    name: "高尾山",
    altNames: ["Takao-san", "たかおさん"],
    prefName: "東京都",
    muniName: "八王子市",
    category: "mountain",
    lat: 35.6253,
    lon: 139.2436,
    blurb:
      "東京西部の代表的な観光・登山スポット。年間 260 万人を超えるハイカーが訪れる一方、近年は奥高尾・小仏方面でクマの目撃情報が増加。早朝・夕方の単独行動には注意が必要です。",
  },
  {
    slug: "大菩薩嶺",
    name: "大菩薩嶺",
    altNames: ["Daibosatsu", "だいぼさつれい"],
    prefName: "山梨県",
    muniName: "甲州市",
    category: "mountain",
    lat: 35.7472,
    lon: 138.8444,
    blurb:
      "標高 2,057m。日本百名山。上日川峠からのアクセス路が人気で、春〜秋にかけて多くの登山者が訪れます。塩山駅・甲斐大和駅周辺の山林部ではクマの活動圏内。",
  },
  {
    slug: "八ヶ岳",
    name: "八ヶ岳",
    altNames: ["Yatsugatake", "やつがたけ"],
    prefName: "長野県",
    muniName: "茅野市",
    category: "mountain",
    lat: 35.9706,
    lon: 138.3706,
    blurb:
      "長野・山梨にまたがる山塊。最高峰は赤岳 (2,899m)。美濃戸・観音平・桜平など主要登山口を中心に、林縁部での目撃情報が継続的に報告されています。",
  },
  {
    slug: "北岳",
    name: "北岳",
    altNames: ["Kitadake"],
    prefName: "山梨県",
    muniName: "南アルプス市",
    category: "mountain",
    lat: 35.6743,
    lon: 138.2386,
    blurb:
      "標高 3,193m、日本第 2 の高峰。広河原からのアプローチが一般的。南アルプス国立公園内でツキノワグマの生息域。",
  },
  {
    slug: "槍ヶ岳",
    name: "槍ヶ岳",
    altNames: ["Yarigatake"],
    prefName: "長野県",
    muniName: "松本市",
    category: "mountain",
    lat: 36.3422,
    lon: 137.6481,
    blurb:
      "標高 3,180m。北アルプス南部の名峰。新穂高・上高地・槍沢の各ルートでアクセス。中部山岳国立公園・ツキノワグマ生息域内。",
  },
  {
    slug: "穂高岳",
    name: "穂高岳",
    altNames: ["奥穂高岳", "Hotaka"],
    prefName: "長野県",
    muniName: "松本市",
    category: "mountain",
    lat: 36.2894,
    lon: 137.6480,
    blurb:
      "標高 3,190m (奥穂高岳)。日本第 3 の高峰。涸沢・上高地からのルートが人気。クマの主要生息域。",
  },
  {
    slug: "白馬岳",
    name: "白馬岳",
    altNames: ["Shirouma", "しろうまだけ"],
    prefName: "長野県",
    muniName: "白馬村",
    category: "mountain",
    lat: 36.7583,
    lon: 137.7589,
    blurb:
      "北アルプス北部、標高 2,932m。猿倉・栂池からのアクセス。白馬村全域がツキノワグマ生息域。",
  },
  {
    slug: "立山",
    name: "立山",
    altNames: ["Tateyama"],
    prefName: "富山県",
    muniName: "立山町",
    category: "mountain",
    lat: 36.5759,
    lon: 137.6193,
    blurb:
      "立山連峰、最高峰は大汝山 (3,015m)。室堂平へのケーブル＋バスでアクセス。中部山岳国立公園内。",
  },
  {
    slug: "御嶽山",
    name: "御嶽山",
    altNames: ["Ontake"],
    prefName: "長野県",
    muniName: "木曽町",
    category: "mountain",
    lat: 35.8930,
    lon: 137.4813,
    blurb:
      "標高 3,067m。長野・岐阜にまたがる活火山。王滝口・黒沢口の両登山口周辺はクマ生息域。",
  },
  {
    slug: "白山",
    name: "白山",
    altNames: ["Hakusan"],
    prefName: "石川県",
    muniName: "白山市",
    category: "mountain",
    lat: 36.1542,
    lon: 136.7710,
    blurb:
      "標高 2,702m。日本三霊山の一つ。別当出合・市ノ瀬からアクセス。白山国立公園・ツキノワグマ生息域。",
  },
  {
    slug: "妙高山",
    name: "妙高山",
    altNames: ["Myoko"],
    prefName: "新潟県",
    muniName: "妙高市",
    category: "mountain",
    lat: 36.8889,
    lon: 138.1136,
    blurb:
      "標高 2,454m。妙高戸隠連山国立公園。スキー場・温泉地が密集する地域でクマの活動も活発。",
  },
  {
    slug: "蔵王",
    name: "蔵王",
    altNames: ["蔵王山", "Zao"],
    prefName: "山形県",
    muniName: "山形市",
    category: "mountain",
    lat: 38.1441,
    lon: 140.4396,
    blurb:
      "山形・宮城にまたがる火山群。蔵王温泉・宮城蔵王スキー場周辺は冬・夏ともに観光客が多く、林縁部での目撃情報あり。",
  },
  {
    slug: "鳥海山",
    name: "鳥海山",
    altNames: ["Chokai"],
    prefName: "山形県",
    muniName: "遊佐町",
    category: "mountain",
    lat: 39.0992,
    lon: 140.0489,
    blurb:
      "標高 2,236m。山形・秋田の県境。鉾立・湯ノ台・象潟口からアクセス。ツキノワグマ生息域。",
  },
  {
    slug: "岩手山",
    name: "岩手山",
    altNames: ["Iwate-san"],
    prefName: "岩手県",
    muniName: "雫石町",
    category: "mountain",
    lat: 39.8525,
    lon: 141.0008,
    blurb:
      "標高 2,038m。岩手県最高峰。馬返し・松川・焼走りからのコース。ツキノワグマ生息域。",
  },
  {
    slug: "八甲田山",
    name: "八甲田山",
    altNames: ["Hakkoda"],
    prefName: "青森県",
    muniName: "青森市",
    category: "mountain",
    lat: 40.6586,
    lon: 140.8792,
    blurb:
      "青森県、最高峰は大岳 (1,585m)。十和田八幡平国立公園内。ツキノワグマ・ヒグマ両方の北限交錯帯。",
  },
  {
    slug: "羊蹄山",
    name: "羊蹄山",
    altNames: ["Yotei", "蝦夷富士"],
    prefName: "北海道",
    muniName: "倶知安町",
    category: "mountain",
    lat: 42.8276,
    lon: 140.8108,
    blurb:
      "標高 1,898m。蝦夷富士の異名。倶知安・京極・喜茂別の各登山口。ヒグマの活動圏。",
  },
  {
    slug: "大雪山",
    name: "大雪山",
    altNames: ["Daisetsu", "旭岳"],
    prefName: "北海道",
    muniName: "東川町",
    category: "mountain",
    lat: 43.6633,
    lon: 142.8540,
    blurb:
      "北海道中央部の山塊、最高峰は旭岳 (2,291m)。ヒグマの主要生息地。旭岳ロープウェイ・銀泉台からアクセス。",
  },
  {
    slug: "十勝岳",
    name: "十勝岳",
    altNames: ["Tokachi"],
    prefName: "北海道",
    muniName: "美瑛町",
    category: "mountain",
    lat: 43.4179,
    lon: 142.6881,
    blurb:
      "標高 2,077m。十勝連峰の主峰。望岳台・吹上温泉からアクセス。ヒグマ生息域。",
  },
  // === 国立公園・主要観光地 ===
  {
    slug: "上高地",
    name: "上高地",
    altNames: ["Kamikochi"],
    prefName: "長野県",
    muniName: "松本市",
    category: "trailhead",
    lat: 36.2503,
    lon: 137.6328,
    blurb:
      "中部山岳国立公園の代表的な観光地。穂高連峰・槍ヶ岳の登山口でもあり、年 100 万人以上が訪れます。河童橋周辺でもツキノワグマの目撃事例あり。",
  },
  {
    slug: "尾瀬",
    name: "尾瀬",
    altNames: ["Oze"],
    prefName: "群馬県",
    muniName: "片品村",
    category: "national_park",
    lat: 36.8881,
    lon: 139.2858,
    blurb:
      "群馬・福島・新潟の 3 県にまたがる尾瀬国立公園。尾瀬ヶ原・尾瀬沼を巡るハイキングが有名。鳩待峠・大清水・沼山峠から入山。",
  },
  {
    slug: "知床",
    name: "知床",
    altNames: ["Shiretoko"],
    prefName: "北海道",
    muniName: "斜里町",
    category: "national_park",
    lat: 44.0764,
    lon: 145.0431,
    blurb:
      "世界自然遺産・知床国立公園。日本有数のヒグマ高密度地域。知床五湖・カムイワッカ・羅臼岳の各エリアで定期的に出没情報があります。",
  },
  {
    slug: "日光",
    name: "日光",
    altNames: ["Nikko"],
    prefName: "栃木県",
    muniName: "日光市",
    category: "resort",
    lat: 36.7583,
    lon: 139.5786,
    blurb:
      "日光国立公園・世界遺産日光の社寺。中禅寺湖・戦場ヶ原・男体山などハイキングコース多数。ツキノワグマの生息域内。",
  },
  {
    slug: "軽井沢",
    name: "軽井沢",
    altNames: ["Karuizawa"],
    prefName: "長野県",
    muniName: "軽井沢町",
    category: "resort",
    lat: 36.3486,
    lon: 138.5969,
    blurb:
      "夏季別荘地・観光地として年間 800 万人が訪れる。一方で町内全域がツキノワグマの活動圏内で、住宅街での目撃も継続的に報告されています。",
  },
  {
    slug: "那須高原",
    name: "那須高原",
    altNames: ["Nasu"],
    prefName: "栃木県",
    muniName: "那須町",
    category: "resort",
    lat: 37.0703,
    lon: 139.9758,
    blurb:
      "観光・別荘・スキー場が密集する高原地帯。那須岳の登山口でもあり、ツキノワグマの生息域。",
  },
  {
    slug: "白川郷",
    name: "白川郷",
    altNames: ["Shirakawago"],
    prefName: "岐阜県",
    muniName: "白川村",
    category: "resort",
    lat: 36.2581,
    lon: 136.9069,
    blurb:
      "世界遺産・合掌造り集落。観光客年 200 万人。周囲は両白山地のツキノワグマ生息域。",
  },
  {
    slug: "高山",
    name: "高山",
    altNames: ["飛騨高山", "Takayama"],
    prefName: "岐阜県",
    muniName: "高山市",
    category: "resort",
    lat: 36.1407,
    lon: 137.2521,
    blurb:
      "飛騨高山。観光客年 400 万人超の人気観光地。乗鞍・上高地の玄関口。市域は広く山林部での出没多発。",
  },
  {
    slug: "屋久島",
    name: "屋久島",
    altNames: ["Yakushima"],
    prefName: "鹿児島県",
    muniName: "屋久島町",
    category: "national_park",
    lat: 30.3464,
    lon: 130.5286,
    blurb:
      "世界自然遺産。縄文杉・宮之浦岳の登山が人気。屋久島にはクマは生息しないが、登山前の安全情報の起点として参照されています。",
  },
  {
    slug: "阿蘇",
    name: "阿蘇",
    altNames: ["Aso"],
    prefName: "熊本県",
    muniName: "阿蘇市",
    category: "national_park",
    lat: 32.8842,
    lon: 131.1042,
    blurb:
      "世界最大級のカルデラ。阿蘇くじゅう国立公園。九州にはクマは生息しませんが、登山前の動物注意情報として参照されています。",
  },
  {
    slug: "箱根",
    name: "箱根",
    altNames: ["Hakone"],
    prefName: "神奈川県",
    muniName: "箱根町",
    category: "resort",
    lat: 35.2324,
    lon: 139.0265,
    blurb:
      "富士箱根伊豆国立公園。年 2,000 万人の観光客が訪れる温泉地。明神ヶ岳・金時山などハイキング多数。",
  },
  // === ハイキング・登山口 ===
  {
    slug: "奥多摩",
    name: "奥多摩",
    altNames: ["Okutama"],
    prefName: "東京都",
    muniName: "奥多摩町",
    category: "trailhead",
    lat: 35.8050,
    lon: 139.0950,
    blurb:
      "東京都西部の山間部。雲取山・御前山・大岳山などの登山口。ツキノワグマ生息域内で、近年は住宅地周辺の目撃も。",
  },
  {
    slug: "丹沢",
    name: "丹沢",
    altNames: ["Tanzawa"],
    prefName: "神奈川県",
    muniName: "秦野市",
    category: "mountain",
    lat: 35.4506,
    lon: 139.1656,
    blurb:
      "神奈川県の山地。塔ノ岳・蛭ヶ岳など 1,500m 級の山々。ツキノワグマ生息域内、登山者数も多く、目撃情報が継続的に発表されています。",
  },
  {
    slug: "雲取山",
    name: "雲取山",
    altNames: ["Kumotoriyama"],
    prefName: "東京都",
    muniName: "奥多摩町",
    category: "mountain",
    lat: 35.8550,
    lon: 138.9436,
    blurb:
      "標高 2,017m、東京都最高峰。鴨沢・三峯神社からアクセス。ツキノワグマの主要生息域。",
  },
  {
    slug: "瑞牆山",
    name: "瑞牆山",
    altNames: ["Mizugaki"],
    prefName: "山梨県",
    muniName: "北杜市",
    category: "mountain",
    lat: 35.8911,
    lon: 138.5703,
    blurb:
      "標高 2,230m。岩峰群が特徴の名峰。瑞牆山荘・みずがき山自然公園からアクセス。",
  },
  {
    slug: "金峰山",
    name: "金峰山",
    altNames: ["Kinpu", "きんぷさん"],
    prefName: "山梨県",
    muniName: "甲府市",
    category: "mountain",
    lat: 35.8736,
    lon: 138.6253,
    blurb:
      "標高 2,599m。秩父山地の主峰。大弛峠・瑞牆山荘からアクセス。",
  },
  {
    slug: "美ヶ原",
    name: "美ヶ原",
    altNames: ["Utsukushigahara"],
    prefName: "長野県",
    muniName: "松本市",
    category: "trailhead",
    lat: 36.2244,
    lon: 138.0900,
    blurb:
      "標高約 2,000m の高原。観光バスでアクセスでき、ハイキングが人気。周辺はツキノワグマの生息域。",
  },
  {
    slug: "霧ヶ峰",
    name: "霧ヶ峰",
    altNames: ["Kirigamine"],
    prefName: "長野県",
    muniName: "諏訪市",
    category: "trailhead",
    lat: 36.1097,
    lon: 138.2017,
    blurb:
      "標高 1,925m。車山・八島湿原など散策コースが人気。ツキノワグマ生息域。",
  },
  {
    slug: "蓼科",
    name: "蓼科",
    altNames: ["Tateshina"],
    prefName: "長野県",
    muniName: "茅野市",
    category: "resort",
    lat: 36.1503,
    lon: 138.2989,
    blurb:
      "蓼科高原・蓼科山 (2,531m)。別荘地・スキー場が広がる。八ヶ岳ツキノワグマ生息域。",
  },
  {
    slug: "清里",
    name: "清里",
    altNames: ["Kiyosato"],
    prefName: "山梨県",
    muniName: "北杜市",
    category: "resort",
    lat: 35.9044,
    lon: 138.4136,
    blurb:
      "八ヶ岳南麓の高原リゾート。標高 1,000-1,400m。観光・別荘地で、周囲の山林部にツキノワグマ生息。",
  },
  // === スキーリゾート・温泉地 (クマ生息域内) ===
  {
    slug: "湯沢",
    name: "湯沢",
    altNames: ["越後湯沢", "Yuzawa"],
    prefName: "新潟県",
    muniName: "湯沢町",
    category: "resort",
    lat: 36.9367,
    lon: 138.8086,
    blurb:
      "苗場・かぐら・GALA 等のスキー場が集積。年間 600 万人超。周辺山域はツキノワグマ生息域。",
  },
  {
    slug: "白馬",
    name: "白馬",
    altNames: ["Hakuba"],
    prefName: "長野県",
    muniName: "白馬村",
    category: "resort",
    lat: 36.6981,
    lon: 137.8625,
    blurb:
      "国際的なスキー・登山リゾート。白馬岳・八方尾根・栂池など。ツキノワグマ生息域内。",
  },
  {
    slug: "ニセコ",
    name: "ニセコ",
    altNames: ["Niseko"],
    prefName: "北海道",
    muniName: "ニセコ町",
    category: "resort",
    lat: 42.8053,
    lon: 140.6878,
    blurb:
      "国際的スキーリゾート。羊蹄山・ニセコアンヌプリの裾野。冬は雪上のヒグマ足跡情報あり。",
  },
  {
    slug: "草津",
    name: "草津",
    altNames: ["草津温泉", "Kusatsu"],
    prefName: "群馬県",
    muniName: "草津町",
    category: "resort",
    lat: 36.6206,
    lon: 138.5961,
    blurb:
      "日本三名泉の一つ。観光客年 300 万人。周辺の白根山・上信越国立公園はツキノワグマ生息域。",
  },
  {
    slug: "万座",
    name: "万座",
    altNames: ["Manza"],
    prefName: "群馬県",
    muniName: "嬬恋村",
    category: "resort",
    lat: 36.6394,
    lon: 138.5111,
    blurb:
      "草津白根山西麓の温泉・スキーリゾート。標高 1,800m。周囲はツキノワグマ生息域。",
  },
  {
    slug: "野沢温泉",
    name: "野沢温泉",
    altNames: ["Nozawa"],
    prefName: "長野県",
    muniName: "野沢温泉村",
    category: "resort",
    lat: 36.9303,
    lon: 138.4453,
    blurb:
      "国際的スキーリゾートで温泉街。毛無山・スキー場周辺はツキノワグマ生息域。",
  },
  {
    slug: "志賀高原",
    name: "志賀高原",
    altNames: ["Shigakogen"],
    prefName: "長野県",
    muniName: "山ノ内町",
    category: "resort",
    lat: 36.7253,
    lon: 138.5147,
    blurb:
      "上信越高原国立公園内。スキー場・観光地・登山が集積。ツキノワグマ生息域。",
  },
  // === 湖・自然 ===
  {
    slug: "中禅寺湖",
    name: "中禅寺湖",
    altNames: ["Chuzenjiko"],
    prefName: "栃木県",
    muniName: "日光市",
    category: "lake",
    lat: 36.7333,
    lon: 139.4908,
    blurb:
      "標高 1,269m の堰止湖。日光国立公園内。男体山登山口・千手ヶ浜・半月山など散策コース多数。",
  },
  {
    slug: "河口湖",
    name: "河口湖",
    altNames: ["Kawaguchiko"],
    prefName: "山梨県",
    muniName: "富士河口湖町",
    category: "lake",
    lat: 35.5117,
    lon: 138.7497,
    blurb:
      "富士五湖の一つ。富士山登山口の前線基地。周辺の天上山・三ツ峠登山道はツキノワグマ生息域。",
  },
  {
    slug: "十和田湖",
    name: "十和田湖",
    altNames: ["Towadako"],
    prefName: "青森県",
    muniName: "十和田市",
    category: "lake",
    lat: 40.4658,
    lon: 140.8961,
    blurb:
      "十和田八幡平国立公園内のカルデラ湖。奥入瀬渓流など散策が人気。ツキノワグマの活動圏内。",
  },
  {
    slug: "支笏湖",
    name: "支笏湖",
    altNames: ["Shikotsuko"],
    prefName: "北海道",
    muniName: "千歳市",
    category: "lake",
    lat: 42.7844,
    lon: 141.3431,
    blurb:
      "支笏洞爺国立公園内のカルデラ湖。樽前山・恵庭岳の登山口でもあり、ヒグマ生息域。",
  },
];
