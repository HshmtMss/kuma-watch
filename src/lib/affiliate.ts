/**
 * アフィリエイト（Amazon アソシエイト）設定。試験導入（/place・/spot の対策枠）。
 *
 * 公開フラグ: NEXT_PUBLIC_AFFILIATE_ENABLED === "true" のときだけ表示。
 * アソシエイトタグ: NEXT_PUBLIC_AMAZON_ASSOC_TAG（例 "kumawatch-22"）。
 * タグ未設定なら「公開しない」（無報酬リンクを出さないフェイルセーフ）。
 * NEXT_PUBLIC_ なのでサーバ/クライアント双方で同じ値を参照できる。
 *
 * リンク方式は「検索リンク」。特定 ASIN ではなくキーワード検索に飛ばすので、
 * 在庫切れ・廃番のメンテが不要（試験導入向き）。
 */

const TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOC_TAG ?? "";

export function affiliateEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_AFFILIATE_ENABLED === "true" && TAG.length > 0
  );
}

/** Amazon.co.jp の検索結果 URL（アソシエイトタグ付き）。 */
export function amazonSearchUrl(keyword: string): string {
  const base = `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}`;
  return TAG ? `${base}&tag=${encodeURIComponent(TAG)}` : base;
}

export type BearGearItem = {
  key: string;
  label: string;
  keyword: string;
  blurb: string;
};

// 各アイテムの共通定義（重複を避けて scene ごとに組み合わせる）。
const G = {
  bell: {
    key: "bell",
    label: "クマ鈴",
    keyword: "熊鈴 クマよけ",
    blurb: "音で存在を知らせ、出会い頭を避ける",
  },
  spray: {
    key: "spray",
    label: "熊撃退スプレー",
    keyword: "熊撃退スプレー",
    blurb: "至近距離の最終手段（携行・保管に注意）",
  },
  radio: {
    key: "radio",
    label: "携帯ラジオ",
    keyword: "携帯ラジオ 小型 アウトドア",
    blurb: "音を出しながら行動できる",
  },
  light: {
    key: "light",
    label: "ヘッドライト",
    keyword: "ヘッドライト 登山 LED",
    blurb: "早朝・夕方の薄暗い時間帯に",
  },
  whistle: {
    key: "whistle",
    label: "ホイッスル",
    keyword: "ホイッスル 防災 大音量",
    blurb: "非常時に大きな音で助けを呼ぶ",
  },
  sensorLight: {
    key: "sensorLight",
    label: "センサーライト",
    keyword: "センサーライト 屋外 防犯",
    blurb: "家屋周りの暗がりを照らし、寄せ付けにくく",
  },
  fence: {
    key: "fence",
    label: "電気柵",
    keyword: "電気柵 獣害 家庭菜園",
    blurb: "畑・敷地への侵入を物理的に防ぐ",
  },
  binStocker: {
    key: "binStocker",
    label: "生ゴミ保管ボックス",
    keyword: "生ゴミ 密閉 屋外 保管ボックス",
    blurb: "誘引物のニオイを抑えて寄せ付けにくく",
  },
  canister: {
    key: "canister",
    label: "食料保管容器",
    keyword: "ベアキャニスター 食料保管",
    blurb: "野営地で食料のニオイを漏らさない",
  },
  lantern: {
    key: "lantern",
    label: "LEDランタン",
    keyword: "LEDランタン キャンプ",
    blurb: "手元と周囲を明るく保つ",
  },
} satisfies Record<string, BearGearItem>;

// クマ対策の定番グッズ（汎用）。煽らず「行動の補助」として。出没件数とは紐づけない。
export const BEAR_GEAR: BearGearItem[] = [G.bell, G.spray, G.radio, G.light];

export type GearScene = {
  key: string;
  /** 見出し（表示先の文脈に合わせる）。 */
  title: string;
  /** リード文。 */
  blurb: string;
  items: BearGearItem[];
};

/**
 * シーン別の対策グッズセット。通知や各ページの文脈に合わせて出し分ける。
 *   taisaku(既定) … 汎用   trail … 登山・観光地   home … 暮らし・畑   camp … キャンプ
 * default セット(taisaku)は従来の BEAR_GEAR と同一で、既存の表示は変わらない。
 */
export const GEAR_SCENES: Record<string, GearScene> = {
  taisaku: {
    key: "taisaku",
    title: "クマ対策グッズをそろえる",
    blurb:
      "山や畑に入るときの基本の備え。音で存在を知らせ、薄暗い時間帯を避けるのが第一です。",
    items: BEAR_GEAR,
  },
  trail: {
    key: "trail",
    title: "登山の備え",
    blurb:
      "山に入るときの基本の備え。音で存在を知らせ、薄暗い時間帯を避けるのが第一です。",
    items: [G.bell, G.spray, G.light, G.whistle],
  },
  home: {
    key: "home",
    title: "暮らし・畑の備え",
    blurb:
      "住まいや畑の周りの備え。誘引物（生ゴミ・果樹）を減らし、暗がりを照らすのが第一です。",
    items: [G.sensorLight, G.fence, G.binStocker, G.spray],
  },
  camp: {
    key: "camp",
    title: "キャンプの備え",
    blurb:
      "野営時の備え。食料のニオイを閉じ込め、音と光で存在を知らせることが大切です。",
    items: [G.canister, G.bell, G.lantern, G.spray],
  },
};

/** scene キーからセットを取得。未知/未指定は汎用(taisaku)へフォールバック。 */
export function getGearScene(scene?: string): GearScene {
  return (scene && GEAR_SCENES[scene]) || GEAR_SCENES.taisaku;
}
