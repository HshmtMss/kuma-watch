// 都道府県ごとに「どのクマがどう振る舞うか」が違うため、季節別の注意点を
// 地域 × 季節のマトリクスで持つ。/place/[pref]/[muni] の全 1,894 ページが
// 同じ季節アドバイス文を表示していると Google から重複コンテンツと評価され、
// インデックス対象から外される（クロール済み・未登録）。地域分けで各ページの
// 本文をユニーク化し、インデックス採用率を上げる狙い。

export type BearRegion =
  | "hokkaido"
  | "tohoku-honshu"
  | "western-honshu"
  | "shikoku"
  | "kyushu-okinawa";

const REGION_BY_PREF: Record<string, BearRegion> = {
  北海道: "hokkaido",
  // 東北・北関東・中部山岳・北陸 — ツキノワグマ高密度域
  青森県: "tohoku-honshu",
  岩手県: "tohoku-honshu",
  秋田県: "tohoku-honshu",
  宮城県: "tohoku-honshu",
  山形県: "tohoku-honshu",
  福島県: "tohoku-honshu",
  新潟県: "tohoku-honshu",
  富山県: "tohoku-honshu",
  石川県: "tohoku-honshu",
  福井県: "tohoku-honshu",
  長野県: "tohoku-honshu",
  岐阜県: "tohoku-honshu",
  群馬県: "tohoku-honshu",
  栃木県: "tohoku-honshu",
  茨城県: "tohoku-honshu",
  埼玉県: "tohoku-honshu",
  千葉県: "tohoku-honshu",
  東京都: "tohoku-honshu",
  神奈川県: "tohoku-honshu",
  山梨県: "tohoku-honshu",
  // 東海西・近畿・中国 — ツキノワグマ中密度域
  静岡県: "western-honshu",
  愛知県: "western-honshu",
  三重県: "western-honshu",
  滋賀県: "western-honshu",
  京都府: "western-honshu",
  大阪府: "western-honshu",
  兵庫県: "western-honshu",
  奈良県: "western-honshu",
  和歌山県: "western-honshu",
  鳥取県: "western-honshu",
  島根県: "western-honshu",
  岡山県: "western-honshu",
  広島県: "western-honshu",
  山口県: "western-honshu",
  // 四国 — 絶滅危惧 IA 類、剣山系に少数生息
  徳島県: "shikoku",
  香川県: "shikoku",
  愛媛県: "shikoku",
  高知県: "shikoku",
  // 九州・沖縄 — ツキノワグマは九州では絶滅扱い、沖縄は生息域外
  福岡県: "kyushu-okinawa",
  佐賀県: "kyushu-okinawa",
  長崎県: "kyushu-okinawa",
  熊本県: "kyushu-okinawa",
  大分県: "kyushu-okinawa",
  宮崎県: "kyushu-okinawa",
  鹿児島県: "kyushu-okinawa",
  沖縄県: "kyushu-okinawa",
};

export function getBearRegion(prefName: string): BearRegion {
  return REGION_BY_PREF[prefName] ?? "tohoku-honshu";
}

export type Season = "spring" | "summer" | "autumn" | "winter";

export function getSeason(month: number): Season {
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

export type SeasonalAdvice = {
  season: string;
  point: string;
  speciesLabel: string;
};

const ADVICE: Record<BearRegion, Record<Season, SeasonalAdvice>> = {
  hokkaido: {
    spring: {
      season: "春（3〜5月）",
      point:
        "冬眠明けのヒグマが採食のため広範囲に行動します。残雪上の足跡や掘り返し跡、フキ・行者ニンニク採取地周辺は特に警戒が必要です。沢沿いの渡渉や見通しの悪い笹薮では音をしっかり出してください。",
      speciesLabel: "ヒグマ",
    },
    summer: {
      season: "夏（6〜8月）",
      point:
        "子別れ期で若いヒグマが単独で行動圏を広げ、河川沿いや海岸線にまで出没する事例があります。釣り場・キャンプ場でのフードロッカー使用、生ゴミの密封持ち帰りを徹底してください。",
      speciesLabel: "ヒグマ",
    },
    autumn: {
      season: "秋（9〜11月）",
      point:
        "ドングリ・ヤマブドウ・サケ遡上にあわせて活動が最も活発化します。OSO18 型の人馴れ個体や農地被害も秋に集中する傾向。早朝・夕方の単独行動は避け、ヒグマ撃退スプレー（カウンターアサルト推奨）を必ず携行してください。",
      speciesLabel: "ヒグマ",
    },
    winter: {
      season: "冬（12〜2月）",
      point:
        "通常は冬眠期ですが、暖冬や食料不足の年は冬眠せず徘徊する「穴持たず」が報告されます。スノーシュー・スキー入山時は新しい足跡や糞に注意し、見つけたら速やかに引き返してください。",
      speciesLabel: "ヒグマ",
    },
  },
  "tohoku-honshu": {
    spring: {
      season: "春（3〜5月）",
      point:
        "冬眠明けのツキノワグマが採食のため里山近くまで降りてきます。山菜採り・タケノコ採りで人とクマの行動圏が重なる時期で、近年の人身事故の多くがこの時期に集中。入山前に必ず本ページや自治体の最新情報を確認してください。",
      speciesLabel: "ツキノワグマ",
    },
    summer: {
      season: "夏（6〜8月）",
      point:
        "親離れした若いツキノワグマが新天地を求めて行動圏を広げ、これまで出没のなかった場所にも現れます。沢沿い・林縁部・果樹園周辺は要警戒。早朝の山菜採り、夕方の犬の散歩道などで遭遇例があります。",
      speciesLabel: "ツキノワグマ",
    },
    autumn: {
      season: "秋（9〜11月）",
      point:
        "ブナ・ナラのドングリ凶作年は里への大量出没（アーバンベア化）が起きやすく、東北・北陸では民家や通学路への侵入も。柿・栗・リンゴなどの未収穫果実は誘引源になります。早朝・夕方の単独行動は避け、クマ鈴・ホイッスル・スプレーを携行してください。",
      speciesLabel: "ツキノワグマ",
    },
    winter: {
      season: "冬（12〜2月）",
      point:
        "多くの個体は冬眠中ですが、餌不足や暖冬の年は冬眠せず徘徊する個体が記録されています。雪上の足跡・木の幹の引っかき傷・ふんを見つけたら近くに巣穴がある可能性。冬山入山時は必ず複数人で。",
      speciesLabel: "ツキノワグマ",
    },
  },
  "western-honshu": {
    spring: {
      season: "春（3〜5月）",
      point:
        "近畿・中国地方のツキノワグマは個体数が比較的少ないものの、丹波・但馬・中国山地で目撃が増えています。冬眠明け期は里近くで採食するため、山菜採り・農作業時は周辺の出没履歴を確認してください。",
      speciesLabel: "ツキノワグマ",
    },
    summer: {
      season: "夏（6〜8月）",
      point:
        "若い個体の分散期で、これまで出没のなかった市町村にも単独個体が現れることがあります。沢登り・キャンプ・渓流釣りでは音を立てながら行動し、食料・ゴミは密閉してください。",
      speciesLabel: "ツキノワグマ",
    },
    autumn: {
      season: "秋（9〜11月）",
      point:
        "ドングリ凶作年は人里への出没が急増します。柿・栗・養蜂箱・残飯は誘引源になるため、果実は早めに収穫してください。市街地に近い里山でも夕方以降の単独行動は避けたほうが安全です。",
      speciesLabel: "ツキノワグマ",
    },
    winter: {
      season: "冬（12〜2月）",
      point:
        "ほとんどの個体は冬眠中で目撃情報は減少します。ただし暖冬時や食料不足年は徘徊個体の報告があります。雪山入山時は新しい足跡や痕跡に注意してください。",
      speciesLabel: "ツキノワグマ",
    },
  },
  shikoku: {
    spring: {
      season: "春（3〜5月）",
      point:
        "四国のツキノワグマは絶滅危惧 IA 類（環境省レッドリスト）に指定された希少個体群で、剣山系を中心に推定 16〜24 頭のみが生息。目撃した場合は速やかに自治体（県・市町村）または NPO 四国自然史科学研究センターへ通報してください。",
      speciesLabel: "ツキノワグマ（絶滅危惧IA類）",
    },
    summer: {
      season: "夏（6〜8月）",
      point:
        "四国では出没事例自体が非常にまれです。万一目撃した場合は刺激せず、距離をおいて静かに立ち去り、写真や位置情報があれば自治体・研究機関への提供にご協力ください。保護のための貴重な記録となります。",
      speciesLabel: "ツキノワグマ（絶滅危惧IA類）",
    },
    autumn: {
      season: "秋（9〜11月）",
      point:
        "剣山系周辺の登山者からの目撃情報はこの時期に集中します。出会った場合は静かに距離をとって退避してください。四国の個体群保護のため、目撃は必ず自治体・研究機関に報告を。",
      speciesLabel: "ツキノワグマ（絶滅危惧IA類）",
    },
    winter: {
      season: "冬（12〜2月）",
      point:
        "冬眠期で目撃はほぼ報告されません。ただし足跡・糞・爪跡などの痕跡を見つけた場合は、写真と位置情報を添えて自治体や四国自然史科学研究センターへの提供にご協力ください。",
      speciesLabel: "ツキノワグマ（絶滅危惧IA類）",
    },
  },
  "kyushu-okinawa": {
    spring: {
      season: "春（3〜5月）",
      point:
        "九州のツキノワグマは 2012 年に環境省により「絶滅」と判定されています（沖縄は生息域外）。本ページの集計に出没件数が記録されている場合は、目撃情報の誤同定や別動物（イノシシ等）の可能性が高いものの、貴重な記録として確認のため自治体に報告してください。",
      speciesLabel: "ツキノワグマ（九州個体群は絶滅判定）",
    },
    summer: {
      season: "夏（6〜8月）",
      point:
        "九州・沖縄ではクマ類は生息していないとされます。クマと思われる動物を目撃した場合は、イノシシ・タヌキ・アナグマ等の可能性も含めて、自治体や警察に通報してください。情報の信頼性向上のため、可能な範囲で写真・動画の記録を。",
      speciesLabel: "ツキノワグマ（九州個体群は絶滅判定）",
    },
    autumn: {
      season: "秋（9〜11月）",
      point:
        "九州・沖縄ではクマの出没事例は基本的に報告されていません。誤同定の可能性も含めて自治体への通報をお願いします。本州・四国・北海道での出没情報を確認したい場合は、トップページの全国マップからご利用ください。",
      speciesLabel: "ツキノワグマ（九州個体群は絶滅判定）",
    },
    winter: {
      season: "冬（12〜2月）",
      point:
        "九州・沖縄でのクマ目撃はきわめて稀です。痕跡や目撃情報があれば自治体への通報をお願いします。本サイトの全国マップでは、本州・北海道の生息域のリアルタイム警戒レベルをご確認いただけます。",
      speciesLabel: "ツキノワグマ（九州個体群は絶滅判定）",
    },
  },
};

export function getSeasonalAdvice(prefName: string, month: number): SeasonalAdvice {
  return ADVICE[getBearRegion(prefName)][getSeason(month)];
}
